export const id = 101;
export const ids = [101];
export const modules = {
  34056: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      EverythingMenu: () => Av
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1248),
      vB = ZB(1102),
      kB = ZB(2153),
      cB = ZB(1516),
      nB = ZB(1165),
      hB = ZB(1153);

    function zB(BB) {
      let {
        items: IB,
        link: ZB,
        onClick: TB,
        selectedItemId: JB,
        className: zB,
        padStartsOnTab: FB = !0
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = (0, nB.j)(), qB = [];
      for (const oB of IB) {
        var yB;
        const BB = qB[qB.length - 1];
        var UB;
        if (BB && BB.title === (null !== (yB = oB.section) && void 0 !== yB ? yB : null)) BB.items.push(oB);
        else qB.push({
          title: null !== (UB = oB.section) && void 0 !== UB ? UB : null,
          items: [oB]
        })
      }
      return (0, hB.jsxs)("div", {
        className: oB()("MenuSideBarBody", zB),
        "data-pad-tabs": "2",
        children: [qB.map(((BB, IB) => {
          var ZB;
          return (0, hB.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [BB.title && (0, hB.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: NB(BB.title)
            }), BB.items.map((BB => {
              var IB;
              const ZB = !!BB.iconElement || !!BB.faIcon;
              return (0, hB.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": JB === BB.id ? "true" : void 0,
                "data-pad-default-focus": FB && JB === BB.id || void 0,
                className: oB()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: JB === BB.id
                }),
                onClick: () => {
                  TB(BB.id)
                },
                children: [ZB && (0, hB.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (IB = BB.iconElement) && void 0 !== IB ? IB : (0, hB.jsx)(vB.d, {
                    name: BB.faIcon
                  })
                }), (!gB || !ZB) && (0, hB.jsx)("div", {
                  children: NB(BB.title)
                }), BB.redDot && (0, hB.jsx)(kB.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, BB.id)
            }))]
          }, null !== (ZB = BB.title) && void 0 !== ZB ? ZB : IB)
        })), ZB && (0, hB.jsxs)("div", {
          ...(0, cB.ab)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: ZB.onClick,
          children: [(0, hB.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, hB.jsx)(vB.d, {
              name: ZB.faIcon
            })
          }), (0, hB.jsx)("div", {
            children: NB(ZB.title)
          }), (0, hB.jsx)(vB.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var FB = ZB(3171),
      NB = ZB(1179),
      gB = ZB(2526),
      qB = ZB(3272),
      yB = ZB(105),
      UB = ZB(1995),
      WB = ZB(2353),
      dB = ZB(2361),
      CB = ZB(1746),
      QB = ZB(1397),
      sB = ZB(5143),
      wB = ZB(20),
      OB = ZB(34060);

    function YB(BB) {
      let {
        setApplySettingsCallback: IB
      } = BB;
      const {
        clientEscMenuOptions: ZB
      } = (0, wB.o)(["clientEscMenuOptions"]), [JB, oB] = (0, TB.useState)(!1), [GB, vB] = (0, TB.useState)(!1), [kB, nB] = (0, TB.useState)(6400), [zB, FB] = (0, TB.useState)(3600), [NB, gB] = (0, TB.useState)(!1), [qB, yB] = (0, TB.useState)(!1);

      function UB(BB) {
        const IB = "screenshot" === BB ? vB : oB;
        IB(!0);
        const ZB = NB ? "normals" : qB ? "depth" : null;
        OB.devTools.downloadScene(BB, {
          width: kB,
          height: zB,
          colouring: ZB
        }).catch((BB => {
          console.error("Couldn't download the scene", BB)
        })).finally((() => {
          IB(!1)
        }))
      }
      return (0, hB.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, hB.jsx)(sB.e, {
          label: "Disable Ambient Occlusion",
          checked: ZB.disableAmbientOcclusion,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              disableAmbientOcclusion: BB
            }), IB((() => sB.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), OB.devTools.supports("ambientLight") && (0, hB.jsx)(sB.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ZB.ambientLightIntensity,
          onChange: BB => {
            OB.devTools.setAmbientLightIntensity(BB).then((() => {
              wB.d.setClientEscMenuOptions({
                ambientLightIntensity: BB
              })
            })).catch((BB => {
              console.error("Couldn't set the ambient light", BB)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), OB.devTools.supports("weaponRaycasts") && (0, hB.jsx)(sB.e, {
          label: "Show Weapon Raycasts",
          checked: ZB.showWeaponRaycasts,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              showWeaponRaycasts: BB
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), OB.devTools.supports("sceneDownload") && (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, hB.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, hB.jsx)(sB.e, {
              label: "Apply normal-based coloring",
              checked: NB,
              onClick: BB => {
                gB(BB), BB && yB(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, hB.jsx)(sB.e, {
              label: "Apply depth-based coloring",
              checked: qB,
              onClick: BB => {
                yB(BB), BB && gB(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, hB.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, hB.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, hB.jsx)(CB.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, IB) => {
                  const ZB = parseInt(BB) || 6400;
                  nB(ZB)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: kB.toString()
              }), (0, hB.jsx)("span", {
                children: "X"
              }), (0, hB.jsx)(CB.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, IB) => {
                  const ZB = parseInt(BB) || 3600;
                  FB(ZB)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: zB.toString()
              })]
            }), (0, hB.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, hB.jsxs)(cB.g, {
                onClick: () => {
                  UB("screenshot")
                },
                disabled: GB,
                children: [GB && (0, hB.jsx)(QB.d, {}), "Download Screenshot"]
              }), (0, hB.jsxs)(cB.g, {
                onClick: () => {
                  UB("glb")
                },
                disabled: JB,
                children: [JB && (0, hB.jsx)(QB.d, {}), "Download GLB"]
              })]
            })]
          }), (0, hB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var iB = ZB(140),
      pB = ZB(1186),
      aB = ZB(34069),
      HB = ZB(3176),
      MB = ZB(1579),
      jB = ZB(1333),
      PB = ZB(1296),
      RB = ZB(3254),
      rB = ZB(2119),
      mB = ZB(1561),
      XB = ZB(360),
      LB = ZB(2369),
      eB = ZB(2374),
      uB = ZB(3199),
      fB = ZB(2838),
      lB = ZB(1717),
      AB = ZB(3225),
      tB = ZB(3256),
      bB = ZB(212);
    var xB = ZB(1860),
      EB = ZB(3192);
    async function DB() {
      try {
        return function(BB) {
          const IB = new Map;
          for (const {
              store: ZB,
              status: TB,
              autoRenewStatus: JB,
              managementUrl: oB
            }
            of Object.values(BB.subscriptions)) !(0, uB.e)(ZB) || (0, uB.h)(TB) || "willNotRenew" === JB || IB.has(ZB) || IB.set(ZB, null !== oB && void 0 !== oB ? oB : uB.l[ZB]);
          return Array.from(IB, (BB => {
            let [IB, ZB] = BB;
            return {
              store: IB,
              managementUrl: ZB
            }
          }))
        }(await (0, xB.j)((0, EB.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (BB) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", BB), null
      }
    }

    function KB(BB) {
      const {
        t: IB,
        selectedLanguage: ZB
      } = (0, GB.G)(), {
        userContext: JB
      } = (0, NB.d)(), {
        superRankInfo: oB
      } = JB, vB = (0, eB.usePurchasesAllowed)(), kB = BB && ((0, XB.zc)(oB) || JB.ranksMayChange) && vB, {
        accountId: cB,
        data: nB
      } = (0, fB.e)(AB.d, kB);
      if ((0, TB.useEffect)((() => {
          if (kB) return AB.d.watchAccount(), lB.c.addRefetchListener("billing", (BB => {
            "reconnected" === BB ? AB.d.refreshAfterReconnect() : AB.d.refresh()
          }))
        }), [kB]), !kB || !(0, XB.zc)(oB) || null === nB || cB !== JB.whamm) return null;
      const hB = function(BB, IB, ZB) {
        const TB = tB.g[(0, tB.d)(tB.g, IB)],
          JB = void 0 === TB ? void 0 : (0, bB.e)(BB.entitlements, TB.entitlementId);
        return void 0 === JB || null === JB.expiresAt || (0, uB.d)(JB) <= ZB ? null : JB.willRenew && null === JB.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(JB.expiresAt, ZB)
        } : {
          renews: !1,
          at: (0, uB.d)(JB)
        }
      }(nB, oB.tier, Date.now());
      if (null === hB) return null;
      const zB = hB.renews ? "store:renewsOn" : "store:endsOn",
        FB = new Date(hB.at).toLocaleDateString((0, GB.o)(ZB.code, zB), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        gB = (0, eB.getBillingStore)(),
        qB = null !== gB && (0, uB.e)(gB) ? function(BB, IB) {
          var ZB;
          const TB = Object.values(BB.subscriptions).find((BB => BB.store === IB && !(0, uB.h)(BB.status)));
          return void 0 === TB ? null : null !== (ZB = TB.managementUrl) && void 0 !== ZB ? ZB : uB.l[IB]
        }(nB, gB) : null;
      return {
        text: IB(zB, {
          date: FB
        }),
        manageUrl: qB
      }
    }
    var VB = ZB(1421),
      SB = ZB(1267),
      BI = ZB(5045),
      II = ZB(1542),
      ZI = ZB(3827),
      TI = ZB(2346);

    function JI(BB) {
      let {
        showing: IB
      } = BB;
      const {
        t: ZB
      } = (0, GB.G)(), {
        data: TB,
        failed: JB
      } = (0, fB.e)(ZI.f, IB);
      return 0 === (null === TB || void 0 === TB ? void 0 : TB.length) || null === TB && !JB ? null : (0, hB.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, hB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZB("paymentHistory:title")
        }), null === TB && JB && (0, hB.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ZB("paymentHistory:loadFailed")
        }), null !== TB && (0, hB.jsx)("ul", {
          className: "PaymentHistoryList",
          children: TB.map((BB => (0, hB.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, hB.jsx)(TI.b, {
              entry: BB
            }), (0, hB.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, hB.jsx)("div", {
                children: (0, TI.i)(ZB, BB)
              }), (0, hB.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(BB.at).toLocaleDateString(), "number" === typeof BB.orderId && ` \xb7 ${ZB("paymentHistory:order",{orderId:BB.orderId})}`]
              })]
            })]
          }, (0, ZI.e)(BB))))
        })]
      })
    }
    var oI = ZB(3206),
      GI = ZB(2376),
      vI = ZB(2212);

    function kI() {
      (0, vI.c)({
        titleKey: "payments:logInToRestore"
      })
    }

    function cI(BB) {
      let {
        status: IB
      } = BB;
      switch (IB) {
        case "restored":
          return (0, AB.h)(), {
            key: "payments:purchasesRestored",
            failed: !1
          };
        case "nothingToRestore":
          return {
            key: "payments:nothingToRestore", failed: !1
          };
        case "dismissed":
          return null
      }
    }

    function nI() {
      const BB = (0, EB.usePageBillingClient)(),
        {
          userContext: IB
        } = (0, NB.d)(),
        [ZB, JB] = (0, TB.useState)(!1),
        [oB, GB] = (0, TB.useState)(null);
      return {
        restoring: ZB,
        notice: oB,
        restore: () => {
          IB.isLoggedIn() ? (JB(!0), GB(null), BB.restorePurchases().then(cI, (BB => BB instanceof oI.c && "loginRequired" === BB.code ? (kI(), null) : function(BB) {
            return BB instanceof oI.c && "storeBusy" === BB.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", BB), (0, AB.h)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(BB))).then(GB).finally((() => {
            JB(!1)
          }))) : kI()
        }
      }
    }

    function hI(BB) {
      let {
        restoring: IB,
        notice: ZB,
        restore: JB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)(), kB = (0, eB.usePurchasesAllowed)(), nB = (0, eB.getBillingStore)(), zB = (0, TB.useRef)(null);
      return (0, TB.useEffect)((() => {
        var BB;
        null === (BB = zB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        })
      }), [ZB]), kB && (0, GI.d)(nB) ? (0, hB.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, hB.jsx)(cB.k, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: IB,
          onClick: JB,
          children: vB("payments:restorePurchases")
        }), null !== ZB && (0, hB.jsx)("div", {
          ref: zB,
          className: oB()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: ZB.failed
          }),
          children: vB(ZB.key)
        })]
      }) : null
    }
    var zI = ZB(1951),
      FI = ZB(1305),
      NI = ZB(1403),
      gI = ZB(1258),
      qI = ZB(1370),
      yI = ZB(342),
      UI = ZB(2613);
    const WI = {
      appStore: {
        name: "App Store",
        ...yI.ec.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...yI.ec.googlePlay
      },
      discord: {
        name: "Discord",
        ...yI.ec.discord
      }
    };

    function dI(BB) {
      let {
        warning: IB,
        subscriptions: ZB
      } = BB;
      const {
        t: TB
      } = (0, GB.G)();
      return null !== ZB && 0 === ZB.length ? (0, hB.jsx)(hB.Fragment, {
        children: TB(IB)
      }) : (0, hB.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [TB(IB), null === ZB && (0, hB.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: TB("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== ZB && (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: TB("auth:deleteAccountStoreSubscriptions")
          }), (0, hB.jsx)(UI.d, {
            className: "DeleteAccountSubtitleLinks",
            links: ZB.map((BB => {
              let {
                store: IB,
                managementUrl: ZB
              } = BB;
              return {
                ...WI[IB],
                url: ZB
              }
            }))
          })]
        })]
      })
    }

    function CI(BB) {
      let {
        showing: IB
      } = BB;
      const {
        userContext: ZB,
        isUserContextUpdating: JB
      } = (0, NB.d)(), {
        t: oB
      } = (0, GB.G)(), [vB, kB] = (0, TB.useState)(!1), [nB, zB] = (0, TB.useState)(null), FB = (0, TB.useRef)(IB);
      (0, TB.useEffect)((() => (FB.current = IB, () => {
        FB.current = !1
      })), [IB]);
      const gB = JB || vB;
      return (0, hB.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, hB.jsxs)(cB.M, {
          onClick: async function() {
            if (!vB) {
              kB(!0);
              try {
                const BB = await async function() {
                  const [BB, IB] = await Promise.all([(0, zI.d)(ZB.availableUserContextTypes) ? DB() : [], sI(ZB)]);
                  if (!FB.current) return FI.b.ok();
                  const TB = (0, jB.c)(ZB.getPlayerName(), !yB.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await NI.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: TB
                        }
                      },
                      subtitle: (0, hB.jsx)(dI, {
                        warning: QI(ZB.isLoggedIn(), IB),
                        subscriptions: BB
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: IB ? oB("auth:deleteAccountTypedConfirm", {
                        playerName: TB
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return FI.b.ok();
                  const JB = await (0, pB.postJsonWithMetricsCookiesAndJsonResponse)(`${gI.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: wB.d.get("gameState")
                  }, {
                    retries: 3
                  }, ZB.getMetricsCookies());
                  if (JB.error) return FI.b.error(JB.error);
                  (0, iB.isDiscordClient)() && (await qI.h.discordActivity()).exit("User deleted their account");
                  return (0, pB.forgetStoredGuestAccount)(ZB.whamm), (0, pB.forceGlobalSignOut)(!0), FI.b.ok()
                }(), IB = BB.isError() ? BB.asError().message : null;
                zB(IB)
              } catch (BB) {
                console.error("Failed to delete account:", BB), zB(oB("auth:genericDeleteAccountError"))
              }
              kB(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: gB,
          children: [gB && (0, hB.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, hB.jsx)(QB.d, {})
          }), oB("auth:deleteAccount")]
        }), nB && (0, hB.jsx)("div", {
          className: "DeleteAccountError",
          children: nB
        })]
      })
    }

    function QI(BB, IB) {
      return (0, iB.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : BB ? "auth:deleteAccountLossWarning" : IB ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function sI(BB) {
      try {
        const {
          accountCreatedAt: IB
        } = await (0, xB.j)(mB.c.getPlayerProfile(BB, {
          lowerCaseName: BB.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== IB && Date.now() - IB >= 7 * XB.l
      } catch (IB) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", IB), !0
      }
    }
    var wI = ZB(3750),
      OI = ZB(3766),
      YI = ZB(3763);

    function iI(BB) {
      let {
        showing: IB
      } = BB;
      const {
        t: ZB
      } = (0, GB.G)(), {
        data: TB,
        failed: JB
      } = (0, fB.e)(wI.b, IB), oB = null === TB ? null : (0, wI.f)(TB);
      return (0, hB.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, hB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZB("settingsMenu:blockedAndIgnoredPlayers")
        }), null === oB && !JB && (0, hB.jsx)(QB.d, {}), null === oB && JB && (0, hB.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ZB("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, hB.jsx)(cB.g, {
            className: "SmallTextLight",
            onClick: () => {
              wI.b.refresh()
            },
            children: ZB("general:tryAgain")
          })]
        }), 0 === (null === oB || void 0 === oB ? void 0 : oB.length) && (0, hB.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ZB("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== oB && oB.length > 0 && (0, hB.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: oB.map((BB => {
            let {
              name: IB,
              exclusion: TB
            } = BB;
            const JB = YI.e[TB];
            return (0, hB.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, hB.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: IB
              }), (0, hB.jsx)(cB.k, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, OI.f)(JB, IB, {
                    chatMessage: null
                  })
                },
                children: ZB(YI.g[JB].text)
              })]
            }, IB)
          }))
        })]
      })
    }
    const pI = (0, TB.memo)((function(BB) {
      var IB, ZB;
      let {
        showing: JB,
        inGame: kB
      } = BB;
      const {
        t: nB,
        selectedLanguage: zB
      } = (0, GB.G)(), {
        hideSocialLocationFrom: gB
      } = (0, wB.o)(["hideSocialLocationFrom"]), qB = (0, eB.usePurchasesAllowed)(), UB = nI(), WB = (0, FB.d)(), {
        userContext: dB,
        isUserContextUpdating: OB
      } = (0, NB.d)(), [YB, uB] = (0, TB.useState)(null !== (IB = dB.getPlayerName()) && void 0 !== IB ? IB : ""), [fB, lB] = (0, TB.useState)(null), {
        purchasing: AB,
        outcome: tB,
        purchase: bB
      } = (0, HB.c)("/super-rank-welcome"), xB = (0, XB.hc)((0, GB.o)(zB.code, "general:timeLeft"), dB.superRankInfo), EB = null === (ZB = KB(JB)) || void 0 === ZB ? void 0 : ZB.text, DB = xB ? nB("general:timeLeft", {
        time: xB
      }) : EB, [ZI, TI] = (0, TB.useState)(!1), [oI, GI] = (0, TB.useState)(!1), vI = (0, TB.useRef)(null), kI = (0, TB.useRef)(null), cI = (0, rB.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), zI = null === cI, FI = null !== cI && void 0 !== cI ? cI : [], NI = dB !== pB.NULL_USER_CONTEXT && !dB.isLoggedIn(), gI = NI && 0 !== (null === cI || void 0 === cI ? void 0 : cI.length), [qI, yI] = (0, TB.useState)([]), [UI, WI] = (0, TB.useState)(!1), dI = dB.playerHasRank("youtuber"), QI = (0, TB.useCallback)((() => mB.c.getPlayerProfile(dB, {
        lowerCaseName: dB.getPlayerName().toLowerCase()
      }).then((BB => {
        yI(BB.socialLinks)
      })).catch((BB => {
        console.error("Failed to refresh social links", BB)
      }))), [dB]);

      function sI(BB) {
        BB !== YB && ((0, jB.r)(BB) ? (BB = (0, jB.t)(BB), lB(nB("homePage:nameCharacters"))) : lB(null), vI.current && (vI.current.value = BB), uB(BB))
      }
      return (0, TB.useEffect)((() => (!0 === JB ? (clearInterval(kI.current), kI.current = setInterval(WB, 1e3)) : clearInterval(kI.current), () => {
        clearInterval(kI.current)
      })), [JB, WB]), (0, TB.useEffect)((() => {
        var BB;
        uB(null !== (BB = dB.getPlayerName()) && void 0 !== BB ? BB : "")
      }), [dB]), (0, TB.useEffect)((() => {
        if (!JB || !dI || OB) return;
        let BB = !1;
        return WI(!0), yI([]), mB.c.getPlayerProfile(dB, {
          lowerCaseName: dB.getPlayerName().toLowerCase()
        }).then((IB => {
          BB || yI(IB.socialLinks)
        })).catch((BB => {
          console.error("Failed to load social links", BB)
        })).finally((() => {
          BB || WI(!1)
        })), () => {
          BB = !0
        }
      }), [JB, dI, OB, dB]), (0, hB.jsxs)("div", {
        className: oB()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: kB
        }),
        children: [kB && (0, hB.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: nB("settingsMenu:accountSettingsInGameWarning")
        }), (0, hB.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, hB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [nB("homePage:discordNamePopupTitle"), (0, hB.jsxs)(MB.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, PB.h)({
                name: dB.getPlayerName()
              }),
              onClick: () => {
                wB.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, hB.jsx)(vB.d, {
                name: "arrow-up-right-from-square"
              }), " ", nB("profileCard:viewProfile")]
            })]
          }), (0, hB.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, hB.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [yB.featureFlags.canChangeName && (0, hB.jsx)(CB.c, {
                className: "EnterName",
                placeholderText: nB("homePage:enterName"),
                maxLength: jB.j,
                defaultValue: YB,
                onValueChange: BB => {
                  sI(BB)
                },
                forcedText: ZI || !yB.featureFlags.canChangeName ? YB : null,
                blurOnEnter: !0,
                domRef: vI
              }), (0, hB.jsx)(cB.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  sI((0, jB.f)())
                },
                children: (0, hB.jsx)(vB.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !yB.featureFlags.canChangeName && (0, hB.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, jB.c)(YB, !yB.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, hB.jsx)(cB.g, {
              className: "ChooseNameButton",
              disabled: ZI || YB === dB.getPlayerName(),
              onClick: () => {
                YB.length < jB.n ? lB(nB("homePage:changeNameMinLengthError", {
                  length: jB.n
                })) : YB.length > jB.j ? lB(nB("homePage:changeNameMaxLengthError", {
                  length: jB.j
                })) : (TI(!0), lB(null), (0, aB.f)(dB, YB).then((BB => {
                  TI(!1), "taken" === BB.outcome ? lB(nB("homePage:nameTaken")) : "refused" === BB.outcome ? lB(BB.message) : "failed" === BB.outcome && lB(nB((0, aB.d)(BB.failure)))
                })))
              },
              children: nB("general:choose")
            })]
          }), fB && (0, hB.jsx)("div", {
            className: "ChooseAccNameError",
            children: fB
          })]
        }), (0, hB.jsx)(sB.e, {
          label: (() => {
            if ((0, SB.k)(gB)) {
              const BB = (0, GB.o)(zB.code, "general:timeLeft"),
                IB = (0, XB.hb)(BB, Date.now(), gB + SB.i);
              return `${nB("settingsMenu:hideSocialLocation")} (${nB("general:timeLeft",{time:IB})})`
            }
            return nB("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const BB = !(0, SB.k)(gB);
            (0, II.reportAnalyticsClick)({
              id: "social.hide_location",
              value: BB ? "on" : "off"
            }), GI(!0), mB.c.setHideSocialLocation(dB, BB).then((() => {
              wB.d.set({
                hideSocialLocationFrom: BB ? Date.now() : null
              })
            })).finally((() => {
              GI(!1)
            }))
          },
          checked: (0, SB.k)(gB),
          disabled: oI
        }), dI && (0, hB.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, hB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: nB("settingsMenu:socialLinks")
          }), UI && (0, hB.jsx)(QB.d, {}), !UI && (0, hB.jsx)(BI.e, {
            socialLinks: qI,
            editable: !0,
            userContext: dB,
            onLinksUpdated: QI
          })]
        }), (0, hB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, hB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: nB(gI ? "auth:loginOrSwitchAccount" : "auth:login")
          }), zI && (0, hB.jsx)(QB.d, {}), !zI && 0 === FI.length && (0, hB.jsx)("div", {
            className: "NoLoginOptions",
            children: nB("auth:noLoginOptions")
          }), !zI && FI.length > 0 && "crazygames" !== iB.siteUsed && (0, hB.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: FI
          }), !zI && FI.length > 0 && "crazygames" === iB.siteUsed && (0, hB.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [FI[0], FI.length > 1 && (0, hB.jsxs)(hB.Fragment, {
              children: [(0, hB.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, hB.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: nB("auth:legacyLoginOptions")
                }), (0, hB.jsx)(VB.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: nB("auth:legacyLoginOptionsInfo")
                })]
              }), (0, hB.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: FI.slice(1)
              })]
            })]
          }), yB.featureFlags.useLogin && (null !== dB.loggedInInfo || dB.isLoggedIn()) && (0, hB.jsxs)(hB.Fragment, {
            children: [(0, hB.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, hB.jsxs)(cB.M, {
              onClick: () => {
                (0, pB.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, hB.jsx)(vB.d, {
                name: "right-from-bracket"
              }), nB("auth:signOut")]
            })]
          })]
        }), !dB.playerHasRank("super") && qB && (0, hB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, hB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, hB.jsx)(vB.d, {
              name: "bolt"
            }), nB("homePage:superRank")]
          }), (0, hB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, hB.jsxs)(cB.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, LB.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, hB.jsx)(vB.d, {
                name: "bolt"
              }), nB("homePage:getSuperRank")]
            }), (0, hB.jsxs)(cB.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, LB.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, hB.jsx)(vB.d, {
                name: "bolt"
              }), nB("homePage:giftSuperRank")]
            })]
          }), (0, hB.jsx)(hI, {
            ...UB
          })]
        }), dB.playerHasRank("super") && (0, hB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, hB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, hB.jsx)(vB.d, {
              name: "bolt"
            }), nB("homePage:superRank"), DB && (0, hB.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", DB, ")"]
            })]
          }), qB && (0, hB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, XB.zc)(dB.superRankInfo) && (0, hB.jsxs)(cB.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: AB,
              onClick: () => {
                bB(RB.n.id, null)
              },
              children: [(0, hB.jsx)(vB.d, {
                name: "bolt"
              }), nB("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: RB.n.product.days,
                price: RB.n.price
              })]
            }), (0, hB.jsxs)(cB.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, LB.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, hB.jsx)(vB.d, {
                name: "bolt"
              }), nB("homePage:giftSuperRank")]
            })]
          }), tB && (0, hB.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: nB(tB.translationKey)
          }), (0, hB.jsx)(hI, {
            ...UB
          })]
        }), (0, hB.jsx)(JI, {
          showing: JB
        }), yB.featureFlags.useSocialFeatures && (0, hB.jsx)(iI, {
          showing: JB
        }), (0, hB.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, hB.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, hB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: nB(aI(NI, gI))
            }), (0, iB.isDiscordClient)() && (0, hB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: nB("auth:discordActivityKickWarning")
            }), (0, hB.jsx)(CI, {
              showing: JB
            })]
          }), (0, hB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: nB(NI ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function aI(BB, IB) {
      return BB ? IB ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var HI = ZB(34073),
      MI = ZB(3294),
      jI = ZB(1310),
      PI = ZB(1500),
      RI = ZB(2054),
      rI = ZB(8991),
      mI = ZB(34081);

    function XI() {
      const {
        t: BB
      } = (0, GB.G)();
      return (0, RI.j)("localPlayerAlive") ? (0, hB.jsx)(rI.e, {
        icon: "camera-alt",
        title: BB("screenshotMode:title"),
        sub: BB("screenshotMode:entrySub"),
        onClick: mI.e
      }) : null
    }
    var LI = ZB(34086);
    const eI = (0, TB.memo)((function(BB) {
        let {
          inGame: IB
        } = BB;
        const {
          t: ZB,
          selectedLanguage: TB
        } = (0, GB.G)(), {
          clientEscMenuOptions: JB,
          showDebugOverlay: oB,
          isTouchScreen: vB
        } = (0, wB.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), kB = (0, gB.d)("hideCoordinates");
        let cB = "settingsMenu:showCoordinates",
          nB = "settingsMenu:showChunkCoordinates";

        function zB(BB) {
          const IB = new Intl.DisplayNames([BB], {
            type: "language"
          }).of(BB);
          return IB.charAt(0).toUpperCase() + IB.slice(1)
        }
        return kB && (cB = "settingsMenu:showCoordinatesHidden", nB = "settingsMenu:showChunkCoordinatesHidden"), (0, hB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [IB && yB.featureFlags.canUseInviteLinks && (0, hB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, hB.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ZB("settingsMenu:inviteLink")
            }), (0, hB.jsx)(HI.g, {})]
          }), (0, hB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, hB.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ZB("settingsMenu:language")
            }), (0, hB.jsx)(MI.c, {
              options: Object.entries(GB.i).map((BB => {
                let [IB, ZB] = BB;
                return {
                  label: (0, hB.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, hB.jsx)("img", {
                      src: ZB.flagImg,
                      alt: "flag"
                    }), (0, hB.jsxs)("span", {
                      children: [zB(IB), " ", (0, hB.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", IB, ")"]
                      })]
                    })]
                  }),
                  value: IB
                }
              })),
              value: TB.code,
              onChange: BB => {
                jI.h.get().setCurrentLanguage(BB.value)
              }
            })]
          }), IB && vB && (0, LI.c)() && (0, hB.jsx)(XI, {}), !(0, yB.isMobileApp)() && (0, PI.g)() && yB.featureFlags.useForceRotateForceFullscreenOverlay && (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:disableFullscreenMode"),
            checked: JB.disableFullscreen,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                disableFullscreen: BB
              })
            }
          }), (0, hB.jsx)(sB.e, {
            label: ZB(cB),
            checked: JB.showCoordinates,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showCoordinates: BB
              })
            },
            disabled: kB
          }), (0, hB.jsx)(sB.e, {
            label: ZB(nB),
            checked: JB.showChunkCoordinates,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showChunkCoordinates: BB
              })
            },
            disabled: kB
          }), (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:showFps"),
            checked: JB.showFPS,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showFPS: BB
              })
            }
          }), (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:disableBunnyHopping"),
            checked: JB.disableBunnyHopping,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                disableBunnyHopping: BB
              })
            }
          }), (0, qI.r)() && (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:showChat"),
            checked: JB.showChat,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showChat: BB
              })
            }
          }), (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:showDebugOverlay"),
            checked: oB,
            onClick: BB => {
              wB.d.set({
                showDebugOverlay: BB
              })
            }
          }), yB.featureFlags.useSocialFeatures && (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:showFriendOnlineToasts"),
            checked: JB.showFriendOnlineToasts,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showFriendOnlineToasts: BB
              })
            }
          }), (0, hB.jsx)(sB.e, {
            label: ZB("settingsMenu:showNewItemIndicator"),
            checked: JB.showNewItemIndicator,
            onClick: BB => {
              wB.d.setClientEscMenuOptions({
                showNewItemIndicator: BB
              })
            }
          })]
        })
      })),
      uI = (0, TB.memo)((function() {
        const {
          t: BB
        } = (0, GB.G)(), {
          soundVolume: IB,
          musicVolume: ZB
        } = (0, wB.o)(["soundVolume", "musicVolume"]);
        return (0, hB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, hB.jsx)(sB.j, {
            name: BB("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ZB,
            onChange: BB => {
              wB.d.set({
                musicVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          }), (0, hB.jsx)(sB.j, {
            name: BB("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: IB,
            onChange: BB => {
              wB.d.set({
                soundVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          })]
        })
      }));
    var fI = ZB(736),
      lI = ZB(1507),
      AI = ZB(3836),
      tI = ZB(34091),
      bI = ZB(3668);
    const xI = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function EI() {
      const {
        t: BB
      } = (0, GB.G)(), IB = (0, bI.d)(), {
        mobilePushNotificationsCanAsk: ZB
      } = (0, wB.o)(["mobilePushNotificationsCanAsk"]), [JB, oB] = (0, TB.useState)(null), [vB, kB] = (0, TB.useState)(!1), [nB, zB] = (0, TB.useState)(null), [FB, NB] = (0, TB.useState)(!1), gB = (0, TB.useCallback)((() => {
        (0, AI.b)().then((BB => {
          IB.current && (oB(BB), kB(!1))
        })).catch((BB => {
          console.error("Failed to load push notification targets:", BB), IB.current && kB(!0)
        }))
      }), [IB]), qB = (0, TB.useCallback)((() => {
        (0, tI.f)().then((BB => {
          IB.current && zB((() => BB))
        }))
      }), [IB]);
      (0, TB.useEffect)((() => {
        gB()
      }), [gB]), (0, TB.useEffect)((() => {
        qB()
      }), [qB, ZB]), (0, lI.d)(AI.g, gB);
      const yB = null === JB ? [] : Object.keys(xI).filter((BB => JB[BB] > 0));
      return (0, hB.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, hB.jsx)("div", {
          className: "SliderText",
          children: BB("notificationSettings:pushNotifications")
        }), null === JB && vB && (0, hB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsLoadFailed")
        }), null !== JB && 0 === yB.length && (0, hB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsNone")
        }), yB.length > 0 && (0, hB.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: yB.map((IB => {
            var ZB;
            return (0, hB.jsx)("li", {
              children: BB(xI[IB], {
                count: null !== (ZB = null === JB || void 0 === JB ? void 0 : JB[IB]) && void 0 !== ZB ? ZB : 0
              })
            }, IB)
          }))
        }), null !== nB && (0, hB.jsx)(cB.g, {
          className: "PushNotificationSettingsButton",
          loading: FB,
          onClick: () => {
            NB(!0), nB().catch((BB => {
              console.error("Failed to turn on push notifications:", BB)
            })).finally((() => {
              IB.current && (NB(!1), qB())
            }))
          },
          children: BB("notificationSettings:pushTurnOn")
        })]
      })
    }
    var DI = ZB(2681);
    const KI = {
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
      VI = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function SI(BB) {
      let {
        setting: IB,
        value: ZB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), vB = (0, bI.d)(), [kB, cB] = (0, TB.useState)(null), [nB, zB] = (0, TB.useState)(!1), [FB, NB] = (0, TB.useState)(null);
      return (0, TB.useEffect)((() => {
        "remindersOn" === IB && (0, tI.f)().then((BB => {
          vB.current && NB((() => BB))
        }), (BB => {
          console.error("Couldn't tell whether this device can take push notifications:", BB)
        }))
      }), [IB, vB]), (0, hB.jsx)(sB.e, {
        className: oB()({
          DailyDropSettingFailed: nB
        }),
        label: JB(VI[IB].label),
        checked: null !== kB && void 0 !== kB ? kB : ZB,
        note: nB ? JB("dailyDrop:settingFailed") : void 0,
        onClick: BB => {
          null === kB && (cB(BB), zB(!1), BB && null !== FB && FB().catch((BB => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", BB)
          })), (0, DI.o)("daily_drop.setting", `${VI[IB].reportAs}_${BB?"on":"off"}`), (0, DI.r)("hidden" === IB ? {
            hidden: BB
          } : {
            remindersOn: BB
          }).catch((BB => {
            console.error(`Failed to save the Lucky Skin Block's ${IB} setting:`, BB), vB.current && zB(!0)
          })).finally((() => {
            vB.current && cB(null)
          })))
        }
      })
    }
    const BZ = (0, TB.memo)((function() {
      const {
        t: BB
      } = (0, GB.G)(), {
        clientEscMenuOptions: IB
      } = (0, wB.o)(["clientEscMenuOptions"]), {
        userContext: ZB
      } = (0, NB.d)(), TB = ZB.dailyDrop;
      return (0, hB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [yB.featureFlags.useSocialFeatures && (0, hB.jsx)(sB.h, {
          label: BB("notificationSettings:friendRequests"),
          options: fI.b.map((IB => ({
            value: IB,
            label: BB(KI[IB].label)
          }))),
          value: IB.friendRequestNotifications,
          onChange: BB => {
            wB.d.setClientEscMenuOptions({
              friendRequestNotifications: BB
            })
          },
          circleInfoText: (0, hB.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: fI.b.map((IB => (0, hB.jsxs)("div", {
              children: [(0, hB.jsx)("b", {
                children: BB(KI[IB].label)
              }), ": ", BB(KI[IB].info)]
            }, IB)))
          })
        }), null !== TB && (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsx)(SI, {
            setting: "remindersOn",
            value: TB.remindersOn
          }), (0, hB.jsx)(SI, {
            setting: "hidden",
            value: TB.hidden
          })]
        }), (0, hB.jsx)(EI, {})]
      })
    }));
    var IZ = ZB(4691),
      ZZ = ZB(201),
      TZ = ZB(331),
      JZ = ZB(6808),
      oZ = ZB(3640),
      GZ = ZB(34095),
      vZ = ZB(665),
      kZ = ZB(24);
    var cZ = ZB(684),
      nZ = ZB(36),
      hZ = ZB(4553);
    const zZ = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function FZ(BB) {
      return zZ.has(BB) ? UB.gameBridge.lookup("oW", null) : null
    }

    function NZ(BB) {
      if (!(0, vZ.L)(wB.d.get("clientEscMenuOptions")[BB])) return wB.d.get("clientEscMenuOptions")[BB];
      const IB = FZ(BB);
      return null !== IB ? IB[zZ.get(BB)] : nZ.m.getItem(BB)
    }

    function gZ(BB, IB) {
      if ("useTouchControls" === BB) return void(0, hZ.e)(IB);
      BB in wB.d.get("clientEscMenuOptions") && wB.d.setClientEscMenuOptions({
        [BB]: IB
      });
      const ZB = FZ(BB);
      null !== ZB && UB.gameBridge.send("setChunkAddDistance", {
        ...ZB,
        [zZ.get(BB)]: IB
      }), nZ.m.setItem(BB, IB)
    }
    var qZ = ZB(4610),
      yZ = ZB(34103),
      UZ = ZB(34110),
      WZ = ZB(4682),
      dZ = ZB(34134);

    function CZ(BB) {
      var IB, JB, vB, kB;
      let {
        minChunkAddDist: cB,
        getValue: nB,
        onChange: zB,
        setApplySettingsCallback: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), {
        clientEscMenuOptions: qB
      } = (0, wB.o)(["clientEscMenuOptions", "showDistantNametags"]), UB = (0, TB.useRef)(nB("showFog")), WB = (0, TB.useRef)(qB.antiAliasing), dB = (0, TB.useRef)(qB.useWebGpu), [CB, QB] = (0, TB.useState)(null), [YB, iB] = (0, TB.useState)(!1), [pB, aB] = (0, TB.useState)((() => (0, oZ.g)(yB.featureFlags.settings.canUseShaderPacks))), [HB] = (0, TB.useState)((() => wB.d.isWebGpuDefaultOff())), [MB] = (0, TB.useState)(TZ.l), [jB] = (0, TB.useState)((() => !0 === nZ.m.getItem(yI.wc))), [PB] = (0, TB.useState)((() => wB.d.isWebGpuOnStored()));
      (0, TB.useEffect)((() => {
        let BB = !1;
        return (0, yB.hasUsableWebGpuAdapter)().then((async IB => {
          const ZB = jB || PB,
            TB = !IB && cZ.B && await (0, dZ.g)(ZB);
          BB || (QB(IB || TB), iB(TB))
        })), (0, oZ.j)(yB.featureFlags.settings.canUseShaderPacks) && (0, JZ.i)().then((async IB => {
          const TB = null !== IB && await async function(BB) {
            const [{
              isShaderPackActive: IB
            }, {
              loadPageShaderPackCompiler: TB
            }] = await Promise.all([ZB.e(139).then((() => ZB(6800))), Promise.all([ZB.e(78), ZB.e(136), ZB.e(138)]).then((() => ZB(6763)))]);
            return IB(BB, await TB())
          }(IB);
          BB || aB(TB)
        })), () => {
          BB = !0
        }
      }), [jB, PB]);
      const RB = (!(pB && !jB) || !YB) && CB,
        rB = function(BB, IB, ZB, TB, JB) {
          return (0, GZ.e)(ZB, TB) && !0 === IB ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== IB ? "settingsMenu:newWebGpu" : JB ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: BB && !1 !== IB,
            disabled: !0 !== IB
          }
        }(qB.useWebGpu, RB, pB, HB, MB),
        mB = (qB.useWebGpu || (0, GZ.e)(pB, HB)) && pB && !0 === RB,
        XB = (0, gB.d)("lightingOverride"),
        LB = !(0, vZ.L)(XB);
      let eB = "settingsMenu:enableLighting";
      LB && (eB = XB ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const uB = BB => {
          var IB, ZB, TB;
          const JB = null !== (IB = BB.showFog) && void 0 !== IB ? IB : nB("showFog"),
            oB = null !== (ZB = BB.antiAliasing) && void 0 !== ZB ? ZB : qB.antiAliasing,
            GB = null !== (TB = BB.useWebGpu) && void 0 !== TB ? TB : qB.useWebGpu,
            vB = !cZ.B && JB !== UB.current || oB !== WB.current || GB !== dB.current;
          FB(vB ? () => sB.m : null)
        },
        fB = (0, gB.d)("fogChunkDistanceOverride"),
        lB = (0, gB.d)("fogBlockDistanceOverride"),
        AB = !(0, vZ.L)(fB) || !(0, vZ.L)(lB),
        tB = AB ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [bB, xB] = (0, IZ.f)(cB),
        [EB, DB] = (0, WZ.k)(cB),
        KB = NB("settingsMenu:chunkLoadDistanceDeviceLimit"),
        VB = EB < bB,
        SB = Math.min(null !== (IB = nB("chunkHorizAddDist")) && void 0 !== IB ? IB : cB[0], EB),
        BI = !AB && function(BB, IB) {
          return !0 === BB.showFog && BB.fogChunkDistance > IB
        }(qB, SB);
      return (0, hB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, hB.jsx)(sB.j, {
          name: NB("settingsMenu:horizontalChunkLoadDistance"),
          min: cB[0],
          max: bB,
          selectableMax: EB,
          cappedNote: KB,
          step: 1,
          initValue: SB,
          onChange: BB => {
            !0 === nB("showFog") && BB < nB("fogChunkDistance") && zB("fogChunkDistance", BB), zB("chunkHorizAddDist", BB), kZ.l.Gq("updatedChunkLoadDist")
          },
          circleInfoText: NB("settingsMenu:chunkLoadDistanceInfo")
        }), (0, hB.jsx)(sB.j, {
          name: NB("settingsMenu:verticalChunkLoadDistance"),
          min: cB[1],
          max: xB,
          selectableMax: DB,
          cappedNote: VB ? void 0 : KB,
          step: 1,
          initValue: Math.min(null !== (JB = nB("chunkVertAddDist")) && void 0 !== JB ? JB : cB[1], DB),
          onChange: BB => {
            zB("chunkVertAddDist", BB), kZ.l.Gq("updatedChunkLoadDist")
          },
          circleInfoText: NB("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:chunkFadeIn"),
          checked: qB.chunkFadeIn,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              chunkFadeIn: BB
            })
          },
          circleInfoText: NB("settingsMenu:chunkFadeInInfo")
        }), OB.devTools.supports("chunkBorders") && (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:showChunkBorders"),
          checked: qB.showChunkBorders,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              showChunkBorders: BB
            })
          },
          circleInfoText: NB("settingsMenu:showChunkBordersInfo")
        }), (0, hB.jsx)(sB.e, {
          label: NB(eB),
          checked: qB.enableLighting,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              enableLighting: BB
            })
          },
          disabled: LB
        }), (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, hB.jsx)(sB.e, {
            label: NB(tB),
            checked: qB.showFog,
            onClick: BB => {
              uB({
                showFog: BB
              }), wB.d.setClientEscMenuOptions({
                showFog: BB
              })
            },
            disabled: AB,
            className: oB()({
              SettingBoxWarning: BI
            })
          }), (0, hB.jsx)(sB.j, {
            name: NB("settingsMenu:fogChunkDistance"),
            min: cB[0],
            max: ZZ.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (vB = qB.fogChunkDistance) && void 0 !== vB ? vB : cB[0],
            onChange: BB => {
              wB.d.setClientEscMenuOptions({
                fogChunkDistance: BB
              }), kZ.l.Gq("fogChunkDistanceChanged", BB)
            },
            circleInfoText: NB("settingsMenu:fogChunkDistanceInfo"),
            disabled: AB || !1 === nB("showFog"),
            className: oB()({
              SettingBoxWarning: BI
            })
          }), BI && (0, hB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: NB("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !cZ.B && (0, hB.jsx)(sB.e, {
          label: NB(mB ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !mB && qB.disableTexAtlas,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              disableTexAtlas: BB
            })
          },
          circleInfoText: NB("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: mB
        }), (0, hB.jsx)(sB.j, {
          name: NB("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: qB.cameraFOV,
          onChange: BB => {
            wB.d.setClientEscMenuOptions({
              cameraFOV: BB
            })
          }
        }), (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:disableViewBobbing"),
          checked: qB.disableBobbing,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              disableBobbing: BB
            })
          },
          circleInfoText: NB("settingsMenu:disableViewBobbingInfo")
        }), (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:antiAliasing"),
          checked: qB.antiAliasing,
          onClick: BB => {
            uB({
              antiAliasing: BB
            }), (0, qZ.h)("antiAliasing"), wB.d.setClientEscMenuOptions({
              antiAliasing: BB
            })
          },
          circleInfoText: NB("settingsMenu:antiAliasingInfo")
        }), (0, hB.jsx)(sB.j, {
          name: NB("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (kB = qB.pixelScale) && void 0 !== kB ? kB : 1,
          onChange: BB => {
            (BB !== wB.d.get("clientEscMenuOptions").pixelScale || (0, UZ.t)()) && (0, qZ.h)("pixelScale"), wB.d.setClientEscMenuOptions({
              pixelScale: BB
            })
          },
          circleInfoText: NB("settingsMenu:pixelScaleInfo"),
          format: BB => `${BB}x`
        }), (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:pixelSmoothing"),
          checked: qB.pixelSmoothing,
          onClick: BB => {
            wB.d.setClientEscMenuOptions({
              pixelSmoothing: BB
            })
          },
          circleInfoText: NB("settingsMenu:pixelSmoothingInfo")
        }), cZ.B && (0, hB.jsx)(sB.e, {
          label: NB("settingsMenu:distantNametags"),
          checked: (0, yZ.b)(),
          onClick: BB => {
            wB.d.set({
              showDistantNametags: BB
            })
          },
          circleInfoText: NB("settingsMenu:distantNametagsInfo")
        }), (0, hB.jsx)(sB.e, {
          label: NB(rB.translationKey),
          checked: rB.checked,
          onClick: BB => {
            uB({
              useWebGpu: BB
            }), wB.d.setClientEscMenuOptions({
              useWebGpu: BB
            })
          },
          circleInfoText: NB("settingsMenu:newWebGpuInfo"),
          disabled: rB.disabled
        })]
      })
    }
    var QZ = ZB(4605),
      sZ = ZB(8969),
      wZ = ZB(34143),
      OZ = ZB(8979),
      YZ = ZB(34146);
    const iZ = {
        color: 16777215,
        name: "white"
      },
      pZ = {
        color: 0,
        name: "black"
      },
      aZ = [iZ, {
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
      }, pZ],
      HZ = [pZ, iZ];

    function MZ(BB) {
      return `${BB} px`
    }

    function jZ(BB) {
      return `${BB}%`
    }

    function PZ(BB) {
      let {
        label: IB,
        value: ZB,
        swatches: TB,
        onChange: JB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)(), kB = !TB.some((BB => BB.color === ZB));
      return (0, hB.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, hB.jsx)("div", {
          className: "SliderText",
          children: IB
        }), (0, hB.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": IB,
          children: [TB.map((BB => {
            let {
              color: IB,
              name: TB
            } = BB;
            return (0, hB.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": IB === ZB,
              "aria-label": vB(`crosshairSettings:color_${TB}`),
              "data-pad-focusable": !0,
              className: oB()("CrosshairSwatch", {
                Selected: IB === ZB
              }),
              style: {
                background: (0, YZ.n)(IB)
              },
              onClick: () => {
                JB(IB)
              }
            }, IB)
          })), (0, hB.jsx)("label", {
            className: oB()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: kB
            }),
            style: kB ? {
              background: (0, YZ.n)(ZB)
            } : void 0,
            title: vB("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, hB.jsx)("input", {
              type: "color",
              "aria-label": vB("crosshairSettings:customColor"),
              value: (0, YZ.n)(ZB),
              onChange: BB => {
                const IB = (0, YZ.r)(BB.target.value);
                null !== IB && JB(IB)
              }
            })
          })]
        })]
      })
    }

    function RZ(BB) {
      let {
        settings: IB,
        onChange: ZB
      } = BB;
      const {
        t: TB
      } = (0, GB.G)(), JB = (BB, TB) => {
        ZB((0, YZ.x)(IB, BB, TB))
      }, oB = function(BB, ZB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MZ;
        const {
          min: oB,
          max: GB,
          step: vB
        } = YZ.d[BB];
        return (0, hB.jsx)(sB.j, {
          name: ZB,
          min: oB,
          max: GB,
          step: vB,
          initValue: IB[BB],
          format: TB,
          onChange: IB => {
            JB(BB, IB)
          }
        }, BB)
      }, vB = ["lines", "dot", "circle"].filter((BB => IB[BB])), kB = (BB, ZB, TB) => (0, hB.jsx)(sB.e, {
        label: ZB,
        checked: IB[BB],
        disabled: 1 === vB.length && vB[0] === BB,
        circleInfoText: TB,
        onClick: IB => {
          JB(BB, IB)
        }
      }, BB), cB = "shapes" === IB.style;
      return (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(sB.h, {
          label: TB("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: TB("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: TB("crosshairSettings:styleShapes")
          }],
          value: IB.style,
          onChange: BB => {
            JB("style", BB)
          }
        }), (0, hB.jsx)(PZ, {
          label: TB("crosshairSettings:color"),
          value: IB.color,
          swatches: aZ,
          onChange: BB => {
            JB("color", BB)
          }
        }), oB("opacity", TB("crosshairSettings:opacity"), jZ), !cB && oB("size", TB("crosshairSettings:size"), jZ), cB && (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [kB("lines", TB("crosshairSettings:lines")), IB.lines && oB("lineLength", TB("crosshairSettings:lineLength")), IB.lines && oB("lineThickness", TB("crosshairSettings:lineThickness")), IB.lines && oB("gap", TB("crosshairSettings:gap")), IB.lines && kB("tStyle", TB("crosshairSettings:tStyle"))]
        }), cB && (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [kB("dot", TB("crosshairSettings:dot")), IB.dot && oB("dotSize", TB("crosshairSettings:dotSize"))]
        }), cB && (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [kB("circle", TB("crosshairSettings:circle")), IB.circle && oB("circleRadius", TB("crosshairSettings:circleRadius")), IB.circle && oB("circleThickness", TB("crosshairSettings:circleThickness"))]
        }), (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oB("outline", TB("crosshairSettings:outline"), (BB => BB > 0 ? MZ(BB) : TB("crosshairSettings:off"))), IB.outline > 0 && (0, hB.jsx)(PZ, {
            label: TB("crosshairSettings:outlineColor"),
            value: IB.outlineColor,
            swatches: HZ,
            onChange: BB => {
              JB("outlineColor", BB)
            }
          })]
        }), kB("growOnClick", TB("crosshairSettings:growOnClick")), cB && kB("forGuns", TB("crosshairSettings:forGuns"), TB("crosshairSettings:forGunsInfo"))]
      })
    }
    var rZ = ZB(82),
      mZ = ZB(1343),
      XZ = ZB(12861),
      LZ = ZB(13945),
      eZ = ZB(15370),
      uZ = ZB(15898);
    const fZ = ["sky", "grass", "stone", "sand", "snow", "night"],
      lZ = "4rem";

    function AZ(BB) {
      return {
        backgroundImage: `url(${BB})`,
        backgroundSize: `${lZ} ${lZ}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function tZ(BB) {
      return {
        ...(() => {
          switch (BB) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return AZ(XZ);
            case "stone":
              return AZ(LZ);
            case "sand":
              return AZ(eZ);
            case "snow":
              return AZ(uZ);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function bZ(BB) {
      return Object.freeze({
        ...YZ.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...BB
      })
    }
    const xZ = [{
        id: "default",
        settings: YZ.h
      }, {
        id: "cross",
        settings: bZ({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: bZ({
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
        settings: bZ({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: bZ({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: bZ({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: bZ({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: bZ({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      EZ = ["growOnClick", "forGuns"];
    var DZ = ZB(34152);

    function KZ(BB) {
      let {
        label: IB,
        selected: ZB,
        onClick: TB,
        className: JB,
        style: GB,
        children: vB
      } = BB;
      return (0, hB.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": ZB,
        title: IB,
        "aria-label": IB,
        "data-pad-focusable": !0,
        className: oB()("CrosshairBackdropSwatch", JB, {
          Selected: ZB
        }),
        style: GB,
        onClick: TB,
        children: vB
      })
    }

    function VZ(BB) {
      let {
        backdrop: IB,
        onChange: ZB,
        game: TB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)();
      return (0, hB.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": JB("crosshairSettings:background"),
        children: [TB && (0, hB.jsx)(KZ, {
          label: JB("crosshairSettings:bg_game"),
          selected: TB.selected,
          onClick: TB.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, hB.jsx)(vB.d, {
            name: "cube"
          })
        }), fZ.map((BB => (0, hB.jsx)(KZ, {
          label: JB(`crosshairSettings:bg_${BB}`),
          selected: !(null !== TB && void 0 !== TB && TB.selected) && BB === IB,
          style: tZ(BB),
          onClick: () => {
            ZB(BB)
          }
        }, BB)))]
      })
    }

    function SZ(BB) {
      let {
        settings: IB,
        touch: ZB,
        backdrop: TB,
        onChange: JB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)(), kB = function(BB) {
        var IB;
        return null !== (IB = xZ.find((IB => (0, YZ.t)(IB.settings, BB, EZ)))) && void 0 !== IB ? IB : null
      }(IB);
      return (0, hB.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": vB("crosshairSettings:presets"),
        children: xZ.map((BB => {
          const GB = (null === kB || void 0 === kB ? void 0 : kB.id) === BB.id;
          return (0, hB.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": GB,
            "data-pad-focusable": !0,
            className: oB()("CrosshairPreset", {
              Selected: GB
            }),
            onClick: () => {
              JB(function(BB, IB) {
                return {
                  ...IB.settings,
                  growOnClick: BB.growOnClick,
                  forGuns: BB.forGuns
                }
              }(IB, BB))
            },
            children: [(0, hB.jsx)("div", {
              className: "CrosshairPresetStage",
              style: tZ(TB),
              children: (0, hB.jsx)(DZ.b, {
                settings: BB.settings,
                touch: ZB,
                inPreview: !0
              })
            }), (0, hB.jsx)("div", {
              className: "CrosshairPresetName",
              children: vB(`crosshairSettings:preset_${BB.id}`)
            })]
          }, BB.id)
        }))
      })
    }
    var BT = ZB(1743);

    function IT(BB, IB) {
      const [ZB, JB] = (0, TB.useState)(!1), oB = () => {
        JB(!1)
      }, [GB, vB] = (0, TB.useState)(!1), kB = (0, TB.useRef)({
        growOnClick: BB.growOnClick,
        forGuns: BB.forGuns
      });
      (0, TB.useEffect)((() => {
        const IB = kB.current;
        kB.current = {
          growOnClick: BB.growOnClick,
          forGuns: BB.forGuns
        }, (BB.growOnClick && !IB.growOnClick || BB.forGuns && !IB.forGuns) && vB(!0)
      }), [BB.growOnClick, BB.forGuns]), (0, TB.useEffect)((() => {
        if (!GB) return;
        const BB = setTimeout((() => {
          vB(!1)
        }), 600);
        return () => {
          clearTimeout(BB)
        }
      }), [GB]);
      const cB = ZB || GB;
      return {
        view: {
          pressed: cB,
          spread: cB && BB.forGuns && !BB.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: BB => {
            !BB.target.closest(IB) && (0, BT.c)(BB.currentTarget, BB.pointerId) && JB(!0)
          },
          onPointerUp: oB,
          onPointerCancel: oB,
          onLostPointerCapture: oB
        }
      }
    }

    function ZT(BB) {
      let {
        settings: IB,
        touch: ZB,
        backdrop: TB,
        className: JB,
        children: GB,
        label: vB
      } = BB;
      const kB = IT(IB, ".CrosshairStageControls");
      return (0, hB.jsxs)("div", {
        className: oB()("CrosshairStage", JB),
        style: tZ(TB),
        ...kB.handlers,
        children: [(0, hB.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": vB,
          children: (0, hB.jsx)(DZ.b, {
            settings: IB,
            touch: ZB,
            inPreview: !0,
            ...kB.view
          })
        }), GB]
      })
    }
    const TT = "crosshairFullScreen";

    function JT(BB) {
      let {
        settings: IB,
        touch: ZB,
        backdrop: JB,
        onBackdrop: kB,
        inGame: nB,
        onChange: zB,
        onClose: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = (0, TB.useRef)(null);
      (0, mZ.t)("popup", gB, FB),
      function(BB) {
        const IB = (0, TB.useRef)(BB);
        IB.current = BB, (0, TB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [TT]: !0
          }, "");
          let BB = !1;
          const ZB = () => {
            BB = !0, IB.current()
          };
          return window.addEventListener("popstate", ZB), () => {
            var IB;
            window.removeEventListener("popstate", ZB), !BB && null !== (IB = window.history.state) && void 0 !== IB && IB[TT] && window.history.back()
          }
        }), [])
      }(FB);
      const qB = (0, TB.useRef)(FB);
      qB.current = FB, (0, TB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), qB.current())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), []);
      const yB = IT(IB, ".CrosshairFullScreenPanel"),
        [UB, WB] = (0, TB.useState)(!0),
        dB = UB && nB;
      (0, TB.useEffect)((() => {
        if (dB) return wB.d.set({
          crosshairGameView: !0
        }), () => {
          wB.d.set({
            crosshairGameView: !1
          })
        }
      }), [dB]);
      const [CB, QB] = (0, TB.useState)(!0);
      return (0, rZ.createPortal)((0, hB.jsxs)("div", {
        ref: gB,
        className: "CrosshairFullScreen",
        style: dB ? void 0 : tZ(JB),
        ...yB.handlers,
        children: [(0, hB.jsx)(DZ.b, {
          settings: IB,
          touch: ZB,
          inEditor: !0,
          ...yB.view
        }), (0, hB.jsxs)("div", {
          className: oB()("CrosshairFullScreenPanel", {
            Collapsed: !CB
          }),
          children: [(0, hB.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, hB.jsx)(VZ, {
              backdrop: JB,
              onChange: BB => {
                WB(!1), kB(BB)
              },
              game: nB ? {
                selected: dB,
                onSelect: () => {
                  WB(!0)
                }
              } : void 0
            }), (0, hB.jsx)(cB.V, {
              className: "CrosshairPanelToggle",
              ariaLabel: NB(CB ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                QB(!CB)
              },
              children: (0, hB.jsx)(vB.d, {
                name: CB ? "caret-up" : "pen"
              })
            }), (0, hB.jsx)(cB.g, {
              className: "CrosshairFullScreenDone",
              onClick: FB,
              padDefaultFocus: !0,
              children: NB("crosshairSettings:done")
            })]
          }), CB && (0, hB.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, hB.jsx)(SZ, {
              settings: IB,
              touch: ZB,
              backdrop: JB,
              onChange: zB
            }), (0, hB.jsx)(RZ, {
              settings: IB,
              onChange: zB
            })]
          })]
        })]
      }), document.body)
    }
    var oT = ZB(2816),
      GT = ZB(34167);

    function vT(BB) {
      let {
        settings: IB,
        onChange: ZB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), kB = (0, GT.h)(IB), [nB, zB] = (0, oT.i)(), [FB, NB] = (0, TB.useState)(!1), gB = (0, TB.useRef)(null), [qB, yB] = (0, oT.i)(), [UB, WB] = (0, TB.useState)(!1);
      return (0, hB.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, hB.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, hB.jsxs)(cB.V, {
            className: oB()("CrosshairCopy", {
              ActiveSecondaryButton: nB
            }),
            onClick: () => {
              (0, oT.e)(kB, {
                useShareSheet: !1,
                onOutcome: BB => {
                  NB("failed" === BB), "copied" === BB && zB()
                }
              })
            },
            children: [(0, hB.jsx)(vB.d, {
              name: nB ? "check" : "copy"
            }), " ", JB(nB ? "general:copied" : "crosshairSettings:copy")]
          }), (0, hB.jsx)(CB.c, {
            className: "CrosshairPaste",
            domRef: gB,
            ariaLabel: JB("crosshairSettings:paste"),
            placeholderText: JB("crosshairSettings:paste"),
            onValueChange: BB => {
              const IB = (0, GT.g)(BB);
              WB(!IB && BB.trim().length >= GT.c), IB && (ZB(IB), gB.current.value = "", yB())
            }
          })]
        }), FB && (0, hB.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: kB,
          "aria-label": JB("crosshairSettings:copy"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, hB.jsxs)("div", {
          "aria-live": "polite",
          children: [UB && (0, hB.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: JB("crosshairSettings:pasteInvalid")
          }), qB && !UB && (0, hB.jsx)("div", {
            className: "CrosshairShareNote",
            children: JB("crosshairSettings:applied")
          })]
        })]
      })
    }
    var kT = ZB(34173);
    let cT = "sky";

    function nT(BB) {
      let {
        showing: IB
      } = BB;
      const {
        t: ZB
      } = (0, GB.G)(), {
        isTouchScreen: JB,
        gameState: oB,
        clientEscMenuOptions: kB
      } = (0, wB.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), nB = (0, kT.h)(), [zB, FB] = (0, TB.useState)(cT), NB = BB => {
        cT = BB, FB(BB)
      }, [gB, qB] = (0, TB.useState)(!1);
      return (0, TB.useEffect)((() => {
        IB || qB(!1)
      }), [IB]), (0, hB.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, hB.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, hB.jsx)(ZT, {
            className: "CrosshairPreviewStage",
            settings: nB,
            touch: JB,
            backdrop: zB,
            label: ZB("crosshairSettings:preview"),
            children: (0, hB.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, hB.jsx)(VZ, {
                backdrop: zB,
                onChange: NB
              }), (0, hB.jsxs)(cB.V, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  qB(!0)
                },
                children: [(0, hB.jsx)(vB.d, {
                  name: "expand"
                }), " ", ZB("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, hB.jsx)("div", {
          className: "SettingBox",
          children: (0, hB.jsx)(SZ, {
            settings: nB,
            touch: JB,
            backdrop: zB,
            onChange: kT.d
          })
        }), (0, hB.jsx)(vT, {
          settings: nB,
          onChange: kT.d
        }), JB && (0, hB.jsx)(OZ.c, {
          note: (0, wZ.d)(JB, kB.touchActionButtons) ? ZB("crosshairSettings:touchNote") : void 0
        }), (0, hB.jsx)(RZ, {
          settings: nB,
          onChange: kT.d
        }), gB && (0, hB.jsx)(JT, {
          settings: nB,
          touch: JB,
          backdrop: zB,
          onBackdrop: NB,
          inGame: "inGame" === oB,
          onChange: kT.d,
          onClose: () => {
            qB(!1)
          }
        })]
      })
    }
    var hT = ZB(8976),
      zT = ZB(1466),
      FT = ZB(5140),
      NT = ZB(34177),
      gT = ZB(4459),
      qT = ZB(2060),
      yT = ZB(740);
    const UT = (0, TB.memo)((function() {
      const {
        clientEscMenuOptions: BB
      } = (0, wB.o)(["clientEscMenuOptions"]), {
        recording: IB,
        clipping: ZB,
        hasClipBuffer: JB
      } = (0, RI.j)("replayRecorder"), GB = (0, RI.g)("connectedGame", (BB => BB.replay)), vB = (0, gT.j)(), kB = !1 === (0, gB.d)("canRecordReplays");
      (0, TB.useEffect)((() => {
        UB.gameBridge.send("setRecorderPrefs", {
          clipping: BB.enableClipping,
          clipSeconds: BB.clipDurationSeconds
        })
      }), [BB.enableClipping, BB.clipDurationSeconds]);
      const nB = vB || GB,
        zB = !nB && !kB,
        FB = IB || zB,
        NB = zB,
        qB = NB && ZB && !IB;

      function yB() {
        FB && UB.gameBridge.send("toggleRecording", null)
      }
      return (0, hB.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, hB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, hB.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: IB ? (0, hB.jsxs)(hB.Fragment, {
              children: [(0, hB.jsxs)(cB.M, {
                className: "ReplayViewerCategoryButton",
                onClick: yB,
                disabled: !FB,
                children: [(0, hB.jsx)("span", {
                  children: "Stop Recording"
                }), (0, hB.jsx)(qT.d, {
                  noaAction: "recordGame"
                })]
              }), (0, hB.jsx)(NT.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, hB.jsxs)(cB.g, {
              className: "ReplayViewerCategoryButton",
              onClick: yB,
              disabled: !FB,
              children: [(0, hB.jsx)("span", {
                children: "Start Recording"
              }), (0, hB.jsx)(qT.d, {
                noaAction: "recordGame"
              })]
            })
          }), kB && (0, hB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), nB && !IB && (0, hB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, hB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, hB.jsx)(sB.e, {
            label: "Enable clipping",
            checked: BB.enableClipping,
            disabled: !NB,
            onClick: function(BB) {
              NB && wB.d.setClientEscMenuOptions({
                enableClipping: BB
              })
            },
            className: oB()({
              SettingBoxDisabled: !NB
            })
          }), (0, hB.jsx)(sB.j, {
            name: "Clip duration (seconds)",
            min: yT.l,
            max: yT.k,
            step: yT.c,
            initValue: BB.clipDurationSeconds,
            onChange: function(BB) {
              wB.d.setClientEscMenuOptions({
                clipDurationSeconds: BB
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !NB || !BB.enableClipping
          })]
        }), (0, hB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, hB.jsxs)(cB.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              qB && UB.gameBridge.send("saveClip", null)
            },
            disabled: !qB,
            children: [(0, hB.jsx)("span", {
              children: "Record clip"
            }), (0, hB.jsx)(qT.d, {
              noaAction: "recordClip"
            })]
          }), BB.enableClipping && !JB && NB && !IB && (0, hB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), IB && (0, hB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, hB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, hB.jsxs)(cB.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, gT.h)(!0), wB.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: vB,
            children: [(0, hB.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, hB.jsx)(qT.d, {
              noaAction: "replayViewerOpen"
            })]
          }), vB && (0, hB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, hB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, hB.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, hB.jsx)("iframe", {
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
    var WT = ZB(1956);
    const dT = {
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
        icon: () => (0, hB.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, hB.jsx)("path", {
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
      oN: {
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

    function CT() {
      return Promise.all([ZB.e(78), ZB.e(136), ZB.e(135), ZB.e(131)]).then((() => ZB(41099))).then((BB => ({
        default: BB.ShaderPackCategory
      })), (BB => (console.error("Failed to load the shader pack settings", BB), {
        default: QT
      })))
    }

    function QT() {
      const {
        t: BB
      } = (0, GB.G)();
      return (0, hB.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: BB("shaderPack:tabLoadFailed")
      })
    }
    var sT = ZB(1454);
    const wT = (0, TB.lazy)((() => ZB.e(278).then((() => ZB(41091))).then((BB => ({
        default: BB.BloxdInformation
      }))))),
      OT = (0, TB.lazy)(CT);

    function YT(BB) {
      return BB ? "general" : "account"
    }
    const iT = new Map,
      pT = (0, TB.memo)((function(BB) {
        let {
          show: IB,
          setBeforeResumeCallback: ZB
        } = BB;
        (0, qB.b)();
        const {
          gameState: JB,
          openSettingsCategory: oB
        } = (0, wB.o)(["gameState", "openSettingsCategory"]), {
          userContext: kB
        } = (0, NB.d)(), {
          t: nB
        } = (0, GB.G)(), CB = (0, FB.d)(), QB = (0, gB.d)("minChunkAddDist"), sB = "inGame" === JB, [OB, pB] = (0, TB.useState)(YT(sB)), [aB, HB] = (0, TB.useState)(null), [MB, jB] = (0, TB.useState)([]), PB = (0, TB.useRef)(function() {
          const BB = new Date,
            IB = 6 * (BB.getMonth() + BB.getDate()) % yI.z.length;
          return [...yI.z, ...yI.z].slice(IB, IB + 6)
        }()), RB = (0, TB.useRef)(null), rB = (0, lI.h)(zT.e, (0, zT.c)()), mB = Object.keys(dT).filter((BB => {
          switch (BB) {
            case "replayViewer":
              return sB;
            case "developerTools":
              return kB.playerHasRank("developer") || !1;
            case "texturePack":
              return yB.featureFlags.settings.canChangeTexturePack;
            case "oN":
              return yB.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return yB.featureFlags.useSocialFeatures || null !== kB.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== iB.siteUsed;
            case "controller":
              return yB.featureFlags.useControllerSupport && (rB || "controller" === OB);
            default:
              return !0
          }
        }));
        (0, lI.d)("toggleFullCoordinateOverlay", (() => {
          const BB = NZ("showCoordinates") && NZ("showChunkCoordinates") && NZ("showFPS");
          gZ("showCoordinates", !BB), gZ("showChunkCoordinates", !BB), gZ("showFPS", !BB), CB()
        })), (0, lI.d)("updatedChunkLoadDist", (() => {
          CB()
        })), (0, TB.useEffect)((() => {
          if (HB(null), null === wB.d.get("openSettingsCategory")) {
            const BB = (0, sT.j)() ? iT.get(sB) : void 0;
            pB(BB && mB.includes(BB) ? BB : YT(sB))
          }
        }), [IB]), (0, TB.useEffect)((() => {
          null !== oB && (pB(oB), iT.set(sB, oB), wB.d.set({
            openSettingsCategory: null
          }))
        }), [oB, sB]), (0, TB.useLayoutEffect)((() => {
          RB.current && (RB.current.scrollTop = 0)
        }), [OB, IB]), (0, TB.useEffect)((() => {
          "updateLog" === OB && (0, dB.d)().then(jB)
        }), [OB]), (0, TB.useEffect)((() => {
          if ((0, vZ.L)(QB)) return;
          const [BB, IB] = (0, QZ.h)(), [ZB, TB] = (0, IZ.f)(QB), JB = (0, WT.f)(QB[0], BB, ZB), oB = (0, WT.f)(QB[1], IB, TB);
          UB.gameBridge.send("setChunkAddDistance", {
            horizontal: JB,
            vertical: oB
          })
        }), [QB]);
        const XB = (0, TB.useCallback)((async () => {
          aB && (await aB(), HB(null))
        }), [aB]);

        function LB() {
          wB.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, TB.useEffect)((() => {
          ZB((() => XB))
        }), [XB, ZB]), (0, hB.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: IB ? {} : {
            display: "none"
          },
          children: [(0, hB.jsx)("div", {
            className: "MenuSideBar",
            children: (0, hB.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, hB.jsx)(zB, {
                items: mB.map((BB => {
                  const IB = dT[BB].icon;
                  return {
                    id: BB,
                    faIcon: "string" === typeof IB ? IB : void 0,
                    iconElement: "string" === typeof IB ? void 0 : (0, hB.jsx)(IB, {}),
                    title: nB(dT[BB].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: OB,
                onClick: BB => {
                  !async function(BB) {
                    await XB(), pB(BB), iT.set(sB, BB)
                  }(BB)
                }
              })
            })
          }), (0, hB.jsxs)("div", {
            ref: RB,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === OB && (0, hB.jsx)(pI, {
              showing: IB,
              inGame: sB
            }), "general" === OB && (0, hB.jsx)(eI, {
              inGame: sB
            }), "audio" === OB && (0, hB.jsx)(uI, {}), "notifications" === OB && (0, hB.jsx)(BZ, {}), "graphics" === OB && (0, hB.jsx)(CZ, {
              minChunkAddDist: null !== QB && void 0 !== QB ? QB : [2, 2],
              getValue: NZ,
              onChange: gZ,
              setApplySettingsCallback: HB
            }), "controls" === OB && (0, hB.jsx)(sZ.h, {}), "crosshair" === OB && (0, hB.jsx)(nT, {
              showing: IB
            }), "controller" === OB && yB.featureFlags.useControllerSupport && (0, hB.jsx)(hT.c, {}), yB.featureFlags.settings.canChangeTexturePack && "texturePack" === OB && (0, hB.jsx)(FT.b, {
              setApplySettingsCallback: HB
            }), yB.featureFlags.settings.canUseShaderPacks && "oN" === OB && (0, hB.jsx)(TB.Suspense, {
              fallback: null,
              children: (0, hB.jsx)(OT, {
                setApplySettingsCallback: HB
              })
            }), "updateLog" === OB && (0, hB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, hB.jsx)("div", {
                className: "UpdateLogsContainer",
                children: MB.map(((BB, IB) => (0, hB.jsx)(WB.d, {
                  updateLog: BB,
                  index: IB,
                  close: LB
                }, IB)))
              })
            }), "information" === OB && (0, hB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, hB.jsx)(TB.Suspense, {
                fallback: null,
                children: (0, hB.jsx)(wT, {})
              })
            }), "alternativeDomains" === OB && (0, hB.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, hB.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: nB("settingsMenu:unblockedDomainsDescription")
              }), (0, hB.jsx)("div", {
                className: "AlternativeDomainsList",
                children: PB.current.map((BB => (0, hB.jsxs)(cB.g, {
                  onClick: () => {
                    window.open(`https://${BB}`)
                  },
                  children: [(0, hB.jsx)(vB.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", BB]
                }, BB)))
              })]
            }), "replayViewer" === OB && (0, hB.jsx)(UT, {}), "developerTools" === OB && (0, hB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, hB.jsx)(YB, {
                setApplySettingsCallback: HB
              })
            }), null !== aB && (0, hB.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, hB.jsx)(cB.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: XB,
                children: nB("general:apply")
              })
            })]
          })]
        })
      }));
    var aT = ZB(2763);
    const HT = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      MT = (0, TB.lazy)((() => Promise.resolve().then((() => ZB(4829))).then((BB => {
        BB.needGameClientAfterPaint();
        const IB = BB.matchmakingLibrariesPromise.then((BB => (0, aT.b)(BB.loadCharacterCustomisationUI(), (BB => BB.CharacterCustomisationUI))));
        return Promise.all([BB.ensureGameSetup(), IB]).then((BB => {
          let [, IB] = BB;
          return IB
        }))
      })))),
      jT = "openCustomisationTab";

    function PT(BB) {
      var IB, ZB, JB;
      let {
        show: oB
      } = BB;
      const {
        userContext: GB
      } = (0, NB.d)(), vB = (0, eB.usePurchasesAllowed)(), kB = (0, TB.useRef)(null);
      var cB, nB;
      GB !== pB.NULL_USER_CONTEXT && (null === (IB = kB.current) || void 0 === IB ? void 0 : IB.whamm) !== GB.whamm && (kB.current = {
        whamm: GB.whamm,
        mountKey: (null !== (cB = null === (nB = kB.current) || void 0 === nB ? void 0 : nB.mountKey) && void 0 !== cB ? cB : -1) + 1
      });
      const [FB, gB] = (0, TB.useState)("characters");
      if ((0, lI.d)(jT, gB), !oB) return null;
      const qB = HT.filter((BB => "cape" !== BB && "nameColour" !== BB || GB.getPlayerRanks().includes("super") || vB)).map((BB => ({
        id: BB,
        faIcon: yI.I[BB],
        title: yI.J[BB],
        redDot: !1
      })));
      return (0, hB.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, hB.jsx)("div", {
          className: "MenuSideBar",
          children: (0, hB.jsx)(zB, {
            items: qB,
            selectedItemId: FB,
            onClick: BB => {
              gB(BB)
            }
          })
        }), (0, hB.jsx)("div", {
          className: "MenuBody",
          children: (0, hB.jsx)(TB.Suspense, {
            fallback: (0, hB.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, hB.jsx)(QB.d, {})
            }),
            children: (0, hB.jsx)(MT, {
              selectedTab: FB
            }, null !== (ZB = null === (JB = kB.current) || void 0 === JB ? void 0 : JB.mountKey) && void 0 !== ZB ? ZB : 0)
          })
        })]
      })
    }
    var RT = ZB(1531),
      rT = ZB(1538),
      mT = ZB(34184),
      XT = ZB(4714),
      LT = ZB(3600),
      eT = ZB(3657),
      uT = ZB(34220),
      fT = ZB(8890),
      lT = ZB(34190),
      AT = ZB(34203),
      tT = ZB(1979),
      bT = ZB(1960),
      xT = ZB(5057),
      ET = ZB(1325),
      DT = ZB(1281),
      KT = ZB(1738),
      VT = ZB(8951),
      ST = ZB(2536),
      BJ = ZB(2540);

    function IJ(BB) {
      return BB ? Object.keys(BB).sort(((IB, ZB) => {
        var TB, JB, oB, GB;
        const vB = (null !== (TB = null === (JB = BB[ZB]) || void 0 === JB ? void 0 : JB.sortPriority) && void 0 !== TB ? TB : 0) - (null !== (oB = null === (GB = BB[IB]) || void 0 === GB ? void 0 : GB.sortPriority) && void 0 !== oB ? oB : 0);
        return 0 !== vB ? vB : IB.localeCompare(ZB)
      })) : []
    }
    const ZJ = [{
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

    function TJ(BB) {
      for (const {
          threshold: IB,
          suffix: ZB
        }
        of ZJ)
        if (BB >= IB) {
          const TB = BB / IB;
          return TB >= 100 ? `${Math.floor(TB)}${ZB}` : TB >= 10 ? `${TB.toFixed(1).replace(/\.0$/,"")}${ZB}` : `${TB.toFixed(2).replace(/\.?0+$/,"")}${ZB}`
        } return String(BB)
    }
    var JJ = ZB(5177);
    const oJ = {
        normal: "0.8em",
        big: "1em"
      },
      GJ = (0, TB.memo)((function(BB) {
        let {
          item: IB,
          amount: ZB = 0,
          size: TB = "normal",
          tier: JB = null
        } = BB;
        return (0, hB.jsx)("div", {
          className: oB()("SmpSlot", `SmpSlot-${TB}`),
          children: IB && (0, hB.jsx)(tT.e, {
            itemName: IB,
            amount: ZB > 1 ? ZB : 0,
            amountFontSize: oJ[TB],
            enchantmentTier: JB
          })
        })
      }));

    function vJ(BB) {
      let {
        amount: IB,
        exact: ZB = !1,
        className: TB
      } = BB;
      return (0, hB.jsxs)("span", {
        className: oB()("SmpGold", TB),
        children: [(0, hB.jsx)("span", {
          className: "SmpCoin",
          children: (0, hB.jsx)(tT.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), ZB ? IB.toLocaleString("en-US") : TJ(IB)]
      })
    }

    function kJ(BB) {
      let {
        count: IB = 5,
        grid: ZB = !1
      } = BB;
      return (0, hB.jsx)("div", {
        className: ZB ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: IB
        }, ((BB, IB) => (0, hB.jsxs)("div", {
          className: oB()(ZB ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, hB.jsx)("div", {
            className: oB()("SmpSlot", ZB ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, hB.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, hB.jsx)("b", {}), (0, hB.jsx)("small", {})]
          }), (0, hB.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, IB)))
      })
    }

    function cJ(BB) {
      let {
        title: IB,
        children: ZB
      } = BB;
      return (0, hB.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, hB.jsx)("b", {
          children: IB
        }), ZB && (0, hB.jsx)("small", {
          children: ZB
        })]
      })
    }

    function nJ(BB) {
      let {
        entry: IB
      } = BB;
      return (0, hB.jsx)(cJ, {
        title: (0, hB.jsx)(bT.e, {
          text: IB.item.customTitle
        }),
        children: (0, hB.jsx)(bT.e, {
          text: IB.item.description
        })
      })
    }

    function hJ(BB) {
      return (0, hB.jsx)(JJ.d, {
        ...BB,
        className: oB()("SmpChoice", BB.className),
        reselectable: !0
      })
    }

    function zJ() {
      return (0, hB.jsx)("span", {
        className: "SmpLoader",
        children: (0, hB.jsx)(QB.d, {})
      })
    }

    function FJ(BB) {
      let {
        value: IB,
        onChange: ZB,
        min: JB = 1,
        max: oB,
        step: GB = 1,
        label: vB
      } = BB;
      const kB = (0, TB.useRef)(null),
        cB = (0, TB.useRef)(IB);
      cB.current = IB;
      const [nB, zB] = (0, TB.useState)(null), FB = BB => Math.max(JB, Math.min(oB, Math.floor(BB))), NB = BB => {
        const IB = cB.current,
          TB = "function" === typeof GB ? GB(IB, BB) : GB,
          JB = FB(IB + TB * BB);
        cB.current = JB, ZB(JB)
      };
      (0, TB.useEffect)((() => {
        if (null === nB) return;
        let BB;
        const IB = () => {
            zB(null)
          },
          ZB = setTimeout((() => {
            BB = setInterval((() => {
              NB(nB);
              const BB = cB.current;
              (nB > 0 ? BB >= oB : BB <= JB) && IB()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", IB), window.addEventListener("pointercancel", IB), window.addEventListener("blur", IB), () => {
          clearTimeout(ZB), clearInterval(BB), window.removeEventListener("pointerup", IB), window.removeEventListener("pointercancel", IB), window.removeEventListener("blur", IB)
        }
      }), [nB]), (0, TB.useEffect)((() => {
        const BB = kB.current;
        BB && document.activeElement !== BB && BB.value !== String(IB) && (BB.value = String(IB))
      }), [IB]), (0, TB.useEffect)((() => {
        const BB = kB.current;
        if (!BB) return;
        const IB = () => {
          BB.value = String(cB.current)
        };
        return BB.addEventListener("blur", IB), () => {
          BB.removeEventListener("blur", IB)
        }
      }), []);
      const gB = BB => (0, hB.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${BB>0?"More":"Less"} ${vB}`,
        disabled: BB > 0 ? IB >= oB : IB <= JB,
        onPointerDown: IB => {
          0 === IB.button && (NB(BB), zB(BB))
        },
        onKeyDown: IB => {
          "Enter" !== IB.key && " " !== IB.key || NB(BB)
        },
        onContextMenu: BB => {
          BB.preventDefault()
        },
        children: BB > 0 ? "+" : "\u2212"
      });
      return (0, hB.jsxs)("div", {
        className: "SmpStepper",
        children: [gB(-1), (0, hB.jsx)(CB.c, {
          className: "SmpStepperInput",
          domRef: kB,
          defaultValue: String(IB),
          ariaLabel: vB,
          type: "text",
          blurOnEnter: !0,
          onValueChange: BB => {
            const IB = BB.replace(/[^\d]/g, "");
            kB.current && IB !== BB && (kB.current.value = IB), "" !== IB && ZB(FB(Number(IB)))
          }
        }), gB(1)]
      })
    }

    function NJ(BB) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, BB))) - 1))
    }
    var gJ = ZB(34211),
      qJ = ZB(1300);
    const yJ = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    qJ.A, XB.Kc.length;
    new Map;
    var UJ = ZB(3461);

    function WJ(BB, IB) {
      var ZB;
      return IB && (null === (ZB = BB[IB]) || void 0 === ZB ? void 0 : ZB.smp) || null
    }

    function dJ(BB, IB) {
      const ZB = [];
      for (const JB of IJ(BB)) {
        var TB;
        const oB = BB[JB];
        (null === (TB = oB.smp) || void 0 === TB ? void 0 : TB.kind) === IB && ZB.push({
          key: JB,
          item: oB,
          meta: oB.smp
        })
      }
      return ZB
    }

    function CJ(BB, IB) {
      var ZB;
      return null !== (ZB = dJ(BB, IB)[0]) && void 0 !== ZB ? ZB : null
    }
    const QJ = "50% 0% 50% 0%",
      sJ = [{
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

    function wJ(BB) {
      const IB = BB - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: ZB,
          suffix: TB
        }
        of sJ)
        if (IB >= ZB) return `${Math.floor(IB/ZB)}${TB}`;
      return "<1s"
    }

    function OJ(BB) {
      const IB = BB.map(fT.i),
        ZB = [];
      return IB.forEach(((BB, TB) => {
        const JB = function(BB) {
            const IB = BB.match(/\d+/);
            return IB ? Number(IB[0]) : 0
          }(BB),
          oB = TB === IB.length - 1;
        (oB || 1 === JB || 10 === JB || 100 === JB) && ZB.push({
          label: BB,
          quantity: JB,
          isAll: oB
        })
      })), ZB
    }
    let YJ = null;

    function iJ(BB, IB) {
      const ZB = IB.trim().toLowerCase();
      if (!ZB) return [];
      const TB = BB => {
          if (BB === ZB) return 0;
          if (BB.startsWith(ZB)) return 1;
          const IB = BB.indexOf(ZB);
          return -1 === IB ? -1 : 2 + IB
        },
        JB = [];
      for (const vB of BB) {
        const BB = [TB(vB.lowerLabel), TB(vB.lowerName)].filter((BB => -1 !== BB));
        BB.length && JB.push({
          item: vB,
          rank: Math.min(...BB)
        })
      }
      if (JB.length > 0) return JB.sort(((BB, IB) => BB.rank - IB.rank)).map((BB => BB.item));
      const oB = [...ZB],
        GB = BB => {
          let IB = 0;
          for (const ZB of oB) {
            if (IB = BB.indexOf(ZB, IB), -1 === IB) return !1;
            IB++
          }
          return !0
        };
      return BB.filter((BB => GB(BB.lowerLabel) || GB(BB.lowerName)))
    }

    function pJ(BB, IB) {
      var ZB;
      return null !== (ZB = null === BB || void 0 === BB ? void 0 : BB[IB]) && void 0 !== ZB ? ZB : IB
    }

    function aJ(BB, IB) {
      const ZB = BB.userInput;
      return void 0 !== IB && "dropdown" === (null === ZB || void 0 === ZB ? void 0 : ZB.type) && ZB.dropdownOptions.map(fT.i).includes(IB) ? IB : function(BB) {
        const IB = BB.userInput;
        if ("dropdown" !== (null === IB || void 0 === IB ? void 0 : IB.type) || 0 === IB.dropdownOptions.length) return null;
        const ZB = IB.dropdownOptions.map(fT.i);
        return IB.initialValue && ZB.includes(IB.initialValue) ? IB.initialValue : ZB[ZB.length - 1]
      }(BB)
    }

    function HJ(BB) {
      return void 0 === BB ? "" : JSON.stringify(BB)
    }
    const MJ = (0, TB.createContext)(null);

    function jJ() {
      return (0, TB.useContext)(MJ)
    }
    var PJ = ZB(2850);
    const RJ = (0, TB.memo)((function(BB) {
        let {
          name: IB,
          label: ZB,
          onPick: TB
        } = BB;
        return (0, hB.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: ZB,
          onClick: () => {
            TB(IB)
          },
          children: [(0, hB.jsx)(GJ, {
            item: IB,
            size: "big"
          }), (0, hB.jsx)("span", {
            children: ZB
          })]
        })
      })),
      rJ = (0, TB.memo)((function(BB) {
        let {
          items: IB,
          query: ZB,
          onPick: JB
        } = BB;
        const {
          t: oB
        } = (0, GB.G)(), [vB, kB] = (0, TB.useState)(new Set), cB = (0, TB.useMemo)((() => function(BB) {
          const IB = new Map;
          for (const ZB of BB) {
            let BB = IB.get(ZB.category);
            BB || (BB = [], IB.set(ZB.category, BB)), BB.push(ZB)
          }
          return [...yJ, "other"].filter((BB => IB.has(BB))).map((BB => ({
            category: BB,
            items: IB.get(BB)
          })))
        }(IB)), [IB]), nB = (0, TB.useMemo)((() => iJ(IB, ZB).slice(0, 60)), [IB, ZB]);
        return ZB.trim() ? 0 === nB.length ? (0, hB.jsx)(cJ, {
          title: oB("smpShop:noItemsFound", {
            query: ZB.trim()
          }),
          children: oB("smpShop:tryShorterName")
        }) : (0, hB.jsx)(PJ.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: QJ,
          observerUpdateDeps: [ZB],
          children: nB.map((BB => (0, hB.jsx)(RJ, {
            name: BB.name,
            label: BB.label,
            onPick: JB
          }, BB.name)))
        }) : (0, hB.jsx)(hB.Fragment, {
          children: cB.map((BB => {
            let {
              category: IB,
              items: ZB
            } = BB;
            const TB = vB.has(IB) || ZB.length <= 48,
              GB = TB ? ZB : ZB.slice(0, 48);
            return (0, hB.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, hB.jsxs)("h4", {
                children: [oB("other" === IB ? "smpShop:otherItems" : `creativeInventory:${IB}`), !TB && (0, hB.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    kB(new Set([...vB, IB]))
                  },
                  children: oB("smpShop:showAll", {
                    count: ZB.length
                  })
                })]
              }), (0, hB.jsx)(PJ.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: QJ,
                observerUpdateDeps: [TB],
                children: GB.map((BB => (0, hB.jsx)(RJ, {
                  name: BB.name,
                  label: BB.label,
                  onPick: JB
                }, BB.name)))
              })]
            }, IB)
          }))
        })
      }));

    function mJ(BB, IB) {
      const {
        searched: ZB,
        shown: JB,
        searchFor: oB,
        loading: GB
      } = function(BB, IB) {
        var ZB;
        const JB = jJ(),
          [oB, GB] = (0, TB.useState)(void 0),
          vB = (0, TB.useRef)(void 0),
          kB = (0, TB.useRef)(0),
          cB = (0, TB.useRef)(void 0),
          nB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.meta.item) && void 0 !== ZB ? ZB : null,
          hB = !!BB && JB.isPending(BB.key);
        (0, TB.useEffect)((() => {
          if (!BB || hB || !IB || void 0 === oB || oB === nB) return;
          const ZB = oB === vB.current && JB.gaveUpAt(BB.key) > kB.current && cB.current !== oB;
          (oB !== vB.current || ZB) && JB.act(BB.key, null !== oB && void 0 !== oB ? oB : "*", ZB) && (ZB && (cB.current = oB), vB.current = oB, kB.current = Date.now())
        }), [BB, hB, IB, oB, nB, JB]);
        const zB = (0, TB.useCallback)((BB => {
            vB.current = void 0, cB.current = void 0, GB(BB)
          }), []),
          FB = void 0 !== oB && oB !== nB && (hB || vB.current !== oB);
        return {
          searched: nB,
          shown: FB ? oB : nB,
          searchFor: zB,
          loading: FB || hB || null !== nB && !IB
        }
      }(BB, IB), vB = (0, TB.useMemo)((() => function() {
        var BB;
        let IB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const JB = `${(0,UJ.g)()}\x1f${IB.join("\x1e")}\x1f${ZB.join("\x1e")}\x1f${JSON.stringify(TB)}`;
        if ((null === (BB = YJ) || void 0 === BB ? void 0 : BB.key) === JB) return YJ.items;
        const oB = new Set(ZB),
          GB = new Set,
          vB = [],
          kB = (BB, IB) => {
            var ZB;
            if (!BB || GB.has(BB) || oB.has(BB)) return;
            GB.add(BB);
            const JB = null !== (ZB = TB[BB]) && void 0 !== ZB ? ZB : BB;
            vB.push({
              name: BB,
              label: JB,
              lowerLabel: JB.toLowerCase(),
              lowerName: BB.toLowerCase(),
              category: IB
            })
          };
        for (const nB of (0, gJ.creativeItemIds)()) {
          var cB;
          (0, gJ.itemIsDisabled)(nB, !0, !0, !1) || (0, gJ.showOnlyInCreativeSearch)(nB) || kB((0, UJ.e)(nB), null !== (cB = (0, gJ.creativeCategoryOf)(nB)) && void 0 !== cB ? cB : "other")
        }
        for (const nB of IB) kB(nB, "other");
        return YJ = {
          key: JB,
          items: vB
        }, vB
      }(null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names)), [null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names]), [kB, cB] = (0, TB.useState)(""), [nB, hB] = (0, TB.useState)(0), [zB, FB] = (0, TB.useState)("recent"), NB = (0, TB.useCallback)((BB => {
        cB(""), hB((BB => BB + 1)), oB(BB)
      }), [oB]), gB = "browse" === zB || "" !== kB.trim();
      return {
        searched: ZB,
        shown: JB,
        searchFor: oB,
        loading: GB,
        catalogue: vB,
        names: null === BB || void 0 === BB ? void 0 : BB.meta.names,
        query: kB,
        setQuery: cB,
        searchBoxKey: nB,
        pickItem: NB,
        setView: FB,
        browsing: gB
      }
    }

    function XJ(BB) {
      let {
        browser: IB,
        children: ZB
      } = BB;
      const {
        t: TB
      } = (0, GB.G)(), JB = jJ();
      return (0, hB.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, hB.jsx)("div", {
          className: "SmpSearch",
          children: (0, hB.jsx)(CB.c, {
            className: "SmpSearchInput",
            placeholderText: TB("smpShop:searchPlaceholder"),
            defaultValue: IB.query,
            onValueChange: BB => {
              IB.setQuery(BB), IB.searched && BB.trim() && IB.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const BB = iJ(IB.catalogue, IB.query)[0];
              BB ? IB.pickItem(BB.name) : IB.query.trim() && JB.notify(TB("smpShop:noItemsFound", {
                query: IB.query.trim()
              }))
            }
          }, IB.searchBoxKey)
        }), ZB]
      })
    }

    function LJ(BB) {
      let {
        browser: IB,
        recentLabel: ZB,
        children: TB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)();
      return (0, hB.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, hB.jsx)(hJ, {
          options: [{
            value: "recent",
            label: ZB
          }, {
            value: "browse",
            label: JB("smpShop:browseItems")
          }],
          value: IB.browsing ? "browse" : "recent",
          onChange: IB.setView,
          ariaLabel: JB("smpShop:show")
        }), !IB.browsing && TB]
      })
    }

    function eJ(BB) {
      let {
        item: IB,
        names: ZB,
        summary: TB,
        onBack: JB,
        children: oB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)();
      return (0, hB.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, hB.jsx)(cB.c, {
          className: "SmpBackButton",
          onClick: JB,
          children: vB("general:back")
        }), (0, hB.jsx)(GJ, {
          item: IB,
          size: "big"
        }), (0, hB.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, hB.jsx)("b", {
            children: pJ(ZB, IB)
          }), TB && (0, hB.jsx)("small", {
            children: TB
          })]
        }), oB]
      })
    }

    function uJ(BB) {
      let {
        browser: IB,
        className: ZB,
        action: TB,
        above: JB,
        list: GB,
        summary: vB,
        recentLabel: kB,
        listControls: cB,
        onBack: nB
      } = BB;
      return (0, hB.jsxs)("div", {
        className: oB()("SmpScreen", ZB),
        children: [(0, hB.jsx)(XJ, {
          browser: IB,
          children: TB
        }), IB.shown && (0, hB.jsx)(eJ, {
          item: IB.shown,
          names: IB.names,
          summary: !IB.loading && vB,
          onBack: () => {
            null === nB || void 0 === nB || nB(), IB.searchFor(null)
          },
          children: cB
        }), JB, IB.shown ? GB : (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsx)(LJ, {
            browser: IB,
            recentLabel: kB,
            children: cB
          }), IB.browsing ? (0, hB.jsx)(rJ, {
            items: IB.catalogue,
            query: IB.query,
            onPick: IB.pickItem
          }) : GB]
        })]
      })
    }

    function fJ(BB, IB) {
      const ZB = BB.map((BB => {
        let {
          meta: IB
        } = BB;
        return IB.pricePerItem
      }));
      return "min" === IB ? Math.min(...ZB) : Math.max(...ZB)
    }
    var lJ = ZB(6741);
    const AJ = (0, TB.memo)((function(BB) {
      var IB;
      const {
        t: ZB
      } = (0, GB.G)(), TB = null === BB.seller, JB = BB.quantity * BB.pricePerItem;
      return (0, hB.jsxs)("div", {
        className: BB.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, hB.jsx)(GJ, {
          item: BB.item,
          amount: BB.quantity,
          size: BB.grid ? "big" : "normal",
          tier: BB.tier
        }), (0, hB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, hB.jsx)("b", {
            children: (0, hB.jsx)(bT.e, {
              text: null !== (IB = BB.title) && void 0 !== IB ? IB : `${BB.quantity}x ${BB.item}`
            })
          }), (0, hB.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, hB.jsx)("span", {
              children: TB ? ZB("smpShop:you") : (0, hB.jsx)(bT.e, {
                text: [{
                  entityName: BB.seller
                }]
              })
            }), (0, hB.jsx)("span", {
              children: ZB("smpShop:timeLeft", {
                time: wJ(BB.expiresAt)
              })
            })]
          })]
        }), (0, hB.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, hB.jsx)(vJ, {
            amount: BB.pricePerItem
          }), (0, hB.jsx)("small", {
            children: ZB("smpShop:each")
          })]
        }), (0, hB.jsx)(cB.g, {
          className: "SmpBuyButton",
          disabled: TB || !BB.canAfford && !BB.busy,
          loading: BB.busy,
          onClick: () => {
            BB.onBuy(BB.itemKey)
          },
          children: TB ? ZB("smpShop:yours") : (0, hB.jsx)(vJ, {
            amount: JB
          })
        })]
      })
    }));

    function tJ(BB) {
      let {
        view: IB,
        onChange: ZB
      } = BB;
      const {
        t: TB
      } = (0, GB.G)();
      return (0, hB.jsx)(JJ.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: TB("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, hB.jsx)(vB.d, {
            name: "list"
          }),
          ariaLabel: TB("smpShop:listView")
        }, {
          value: "grid",
          label: (0, hB.jsx)(vB.d, {
            name: "grid-2"
          }),
          ariaLabel: TB("smpShop:gridView")
        }],
        value: IB,
        onChange: ZB
      })
    }

    function bJ(BB) {
      let {
        entries: IB,
        view: ZB
      } = BB;
      const {
        t: TB
      } = (0, GB.G)(), JB = jJ(), oB = "grid" === ZB;
      return (0, hB.jsxs)(hB.Fragment, {
        children: [!oB && (0, hB.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, hB.jsx)("span", {}), (0, hB.jsx)("span", {
            children: TB("smpShop:columnItem")
          }), (0, hB.jsx)("span", {
            children: TB("smpShop:columnPriceEach")
          }), (0, hB.jsx)("span", {
            children: TB("smpShop:columnTotal")
          })]
        }), (0, hB.jsx)(PJ.b, {
          lazyLoadedClassName: oB ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: QJ,
          observerUpdateDeps: [IB.length],
          children: IB.map((BB => {
            var IB, ZB;
            let {
              key: TB,
              item: GB,
              meta: vB
            } = BB;
            const kB = vB.quantity * vB.pricePerItem;
            return (0, hB.jsx)(AJ, {
              itemKey: TB,
              item: vB.item,
              title: GB.customTitle,
              quantity: vB.quantity,
              pricePerItem: vB.pricePerItem,
              seller: vB.seller,
              expiresAt: vB.expiresAt,
              tier: null !== (IB = null === (ZB = GB.enchant) || void 0 === ZB ? void 0 : ZB.tier) && void 0 !== IB ? IB : null,
              busy: JB.isPending(TB) || null !== vB.seller && !1 === GB.canBuy,
              canAfford: JB.canAfford(GB, kB),
              grid: oB,
              onBuy: JB.act
            }, TB)
          }))
        }, ZB)]
      })
    }
    const xJ = [1, 10, 100],
      EJ = [1, 10, 100, 999];

    function DJ(BB) {
      var IB, ZB, JB, kB, nB, zB, FB, NB, gB, qB;
      const {
        t: yB
      } = (0, GB.G)(), UB = jJ(), {
        creator: WB,
        mode: dB
      } = BB, [QB, sB] = (0, TB.useState)(null !== (IB = null === WB || void 0 === WB ? void 0 : WB.meta.item) && void 0 !== IB ? IB : null), [wB, OB] = (0, TB.useState)(1), [YB, iB] = (0, TB.useState)(0), [pB, aB] = (0, TB.useState)(""), [HB, MB] = (0, TB.useState)(0), jB = (0, TB.useRef)(QB), PB = (0, TB.useRef)(!1), [RB, rB] = (0, TB.useState)(!1), mB = null !== (ZB = null === WB || void 0 === WB ? void 0 : WB.meta.item) && void 0 !== ZB ? ZB : null, XB = null !== (JB = null === WB || void 0 === WB ? void 0 : WB.meta.owned) && void 0 !== JB ? JB : 0;
      (0, TB.useEffect)((() => {
        BB.searching || null === mB || mB === jB.current || (jB.current = mB, PB.current = !1, sB(mB), iB(0), OB("list" === dB ? Math.max(1, XB) : 1))
      }), [mB, BB.searching]);
      const LB = !!WB && !!QB && WB.meta.item === QB,
        eB = LB ? WB.meta.owned : null !== (kB = null === (nB = BB.inventory) || void 0 === nB || null === (zB = nB.find((BB => BB.item === QB))) || void 0 === zB ? void 0 : zB.quantity) && void 0 !== kB ? kB : 0,
        uB = "list" === dB ? Math.max(1, eB) : 45954,
        fB = null !== (FB = BB.prices[0]) && void 0 !== FB ? FB : null,
        lB = BB.prices.length ? Math.round(BB.prices.reduce(((BB, IB) => BB + IB), 0) / BB.prices.length) : null,
        AB = null === (NB = BB.inventory) || void 0 === NB || null === (gB = NB.find((BB => BB.item === QB))) || void 0 === gB ? void 0 : gB.sellPrice;
      (0, TB.useEffect)((() => {
        var BB;
        LB && (OB((BB => "list" === dB ? Math.min(Math.max(1, BB), Math.max(1, eB)) : BB)), PB.current || iB(null !== (BB = null !== fB && void 0 !== fB ? fB : lB) && void 0 !== BB ? BB : Math.max(1, null !== AB && void 0 !== AB ? AB : 1)))
      }), [LB, eB, QB, fB, lB]);
      const tB = BB => {
          PB.current = !0, iB(BB)
        },
        bB = IB => {
          var ZB, TB, JB;
          jB.current = IB, PB.current = !1, rB(!1), aB(""), MB((BB => BB + 1)), sB(IB), iB(0), OB("list" === dB && null !== (ZB = null === (TB = BB.inventory) || void 0 === TB || null === (JB = TB.find((BB => BB.item === IB))) || void 0 === JB ? void 0 : JB.quantity) && void 0 !== ZB ? ZB : 1), (null === WB || void 0 === WB ? void 0 : WB.meta.item) !== IB && BB.onPickItem(IB)
        },
        xB = wB * YB,
        EB = "list" === dB && null !== WB && void 0 !== WB && WB.meta.fee ? function(BB, IB) {
          const ZB = Math.max(0, IB - BB.taxFreeAllowance);
          return Math.ceil(Math.round(ZB * BB.rate * 1e6) / 1e6)
        }(WB.meta.fee, xB) : 0,
        DB = !!WB && UB.isPending(WB.key),
        KB = LB && !BB.searching && wB >= 1 && YB >= 1 && ("order" === dB || eB >= wB) && !DB,
        VB = !!QB && !LB && !BB.searching && wB >= 1 && YB >= 1,
        SB = () => {
          KB ? UB.act(WB.key, `${wB}|${YB}`) : VB && (BB.onPickItem(QB), rB(!0))
        };
      (0, TB.useEffect)((() => {
        RB && LB && !BB.searching && (rB(!1), SB())
      }), [RB, LB, BB.searching]);
      const BI = !!QB && !LB && (BB.searching || RB),
        II = QB ? pJ(BB.names, QB) : "",
        ZI = (0, TB.useMemo)((() => iJ(BB.catalogue, pB).slice(0, 8)), [BB.catalogue, pB]),
        TI = ("list" === dB ? xJ.filter((BB => BB < eB)) : EJ).map((BB => ({
          value: BB,
          label: String(BB)
        })));
      "list" === dB && eB > 0 && TI.push({
        value: eB,
        label: yB("smpShop:all", {
          count: eB
        })
      });
      const JI = [];
      return null !== fB && (fB > 1 && JI.push({
        value: fB - 1,
        label: yB("smpShop:undercut", {
          price: TJ(fB - 1)
        })
      }), JI.push({
        value: fB,
        label: yB("smpShop:lowest", {
          price: TJ(fB)
        })
      })), null !== lB && lB !== fB && JI.push({
        value: lB,
        label: yB("smpShop:average", {
          price: TJ(lB)
        })
      }), (0, hB.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, hB.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, hB.jsx)("b", {
            children: yB("list" === dB ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, hB.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": yB("smpShop:close"),
            onClick: BB.onClose,
            children: (0, hB.jsx)(vB.d, {
              name: "xmark"
            })
          })]
        }), "list" === dB && (0, hB.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (qB = BB.inventory) && void 0 !== qB && qB.length ? BB.inventory.map((BB => {
            let {
              item: IB,
              quantity: ZB
            } = BB;
            return (0, hB.jsx)("button", {
              type: "button",
              title: IB,
              className: oB()("SmpPickerSlot", {
                SmpPickerSlotOn: IB === QB
              }),
              onClick: () => {
                bB(IB)
              },
              children: (0, hB.jsx)(GJ, {
                item: IB,
                amount: ZB
              })
            }, IB)
          })) : (0, hB.jsx)("span", {
            className: "SmpMuted",
            children: yB("smpShop:nothingToList")
          })
        }), ("list" === dB || !QB) && (0, hB.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, hB.jsx)(CB.c, {
            className: "SmpSearchInput",
            placeholderText: yB("list" === dB ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: pB,
            onValueChange: aB,
            blurOnEnter: !0,
            onEnter: () => {
              ZI[0] && bB(ZI[0].name)
            }
          }, HB), ZI.length > 0 && (0, hB.jsx)("div", {
            className: "SmpPicker",
            children: ZI.map((BB => {
              let {
                name: IB
              } = BB;
              return (0, hB.jsx)("button", {
                type: "button",
                title: IB,
                className: oB()("SmpPickerSlot", {
                  SmpPickerSlotOn: IB === QB
                }),
                onClick: () => {
                  bB(IB)
                },
                children: (0, hB.jsx)(GJ, {
                  item: IB
                })
              }, IB)
            }))
          })]
        }), QB && (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsxs)("div", {
            className: "SmpPickedName",
            children: [II, BI && (0, hB.jsx)(zJ, {})]
          }), (0, hB.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, hB.jsxs)("div", {
              className: "SmpField",
              children: [(0, hB.jsxs)("span", {
                children: [yB("smpShop:quantity"), "list" === dB && LB && (0, hB.jsx)("small", {
                  children: yB("smpShop:youHave", {
                    count: eB
                  })
                })]
              }), (0, hB.jsx)(FJ, {
                value: wB,
                onChange: OB,
                max: uB,
                label: yB("smpShop:quantity")
              }), (0, hB.jsx)(hJ, {
                options: TI,
                value: wB,
                onChange: OB,
                ariaLabel: yB("smpShop:quantity")
              })]
            }), (0, hB.jsxs)("div", {
              className: "SmpField",
              children: [(0, hB.jsx)("span", {
                children: yB("smpShop:pricePerItem")
              }), (0, hB.jsx)(FJ, {
                value: Math.max(1, YB),
                onChange: tB,
                max: 9999999,
                step: NJ,
                label: yB("smpShop:pricePerItem")
              }), (0, hB.jsx)(hJ, {
                options: JI,
                value: YB,
                onChange: tB,
                ariaLabel: yB("smpShop:pricePerItem")
              })]
            })]
          }), "list" === dB && (0, hB.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, hB.jsxs)("span", {
              children: [yB("smpShop:youGet"), " ", (0, hB.jsx)(vJ, {
                amount: Math.max(0, xB - EB),
                exact: !0
              })]
            }), (0, hB.jsx)("small", {
              children: EB > 0 ? yB("smpShop:listingFee", {
                fee: EB.toLocaleString("en-US")
              }) : yB("smpShop:listingRules")
            })]
          }), (0, hB.jsx)(cB.s, {
            className: "SmpSubmit",
            disabled: !KB && !VB && !DB,
            loading: DB || BI || LB && BB.searching,
            onClick: SB,
            children: "list" === dB ? yB("smpShop:listButton", {
              count: wB,
              item: II
            }) : (0, hB.jsxs)(hB.Fragment, {
              children: [yB("smpShop:orderButton", {
                count: wB,
                item: II
              }), " ", YB >= 1 && (0, hB.jsx)(vJ, {
                amount: xB
              })]
            })
          })]
        })]
      })
    }

    function KJ() {
      var BB;
      const {
        t: IB
      } = (0, GB.G)(), ZB = jJ(), JB = null === (BB = ZB.shopInfo[ZB.categoryKey]) || void 0 === BB ? void 0 : BB.items, oB = CJ(JB, "search"), vB = CJ(JB, "creator"), kB = dJ(JB, "enchantedCreator"), nB = dJ(JB, "listing"), zB = CJ(JB, "empty"), FB = mJ(oB, nB.length > 0 || null !== zB), {
        searched: NB,
        shown: gB,
        loading: qB
      } = FB, [yB, UB] = (0, TB.useState)(!1), [WB, dB] = function() {
        const [BB, IB] = (0, lJ.d)("smpMarketView", "list");
        return ["grid" === BB ? "grid" : "list", IB]
      }(), CB = "grid" === WB, QB = (0, TB.useMemo)((() => nB.filter((BB => {
        let {
          meta: IB
        } = BB;
        return null !== IB.seller && IB.item === NB
      })).map((BB => {
        let {
          meta: IB
        } = BB;
        return IB.pricePerItem
      })).sort(((BB, IB) => BB - IB))), [nB, NB]), sB = (0, TB.useMemo)((() => {
        const BB = new Set(FB.catalogue.map((BB => {
          let {
            name: IB
          } = BB;
          return IB
        })));
        return function(BB) {
          for (const IB in BB)
            if ("sell" === BB[IB].smp) return dJ(BB[IB].items, "sell").filter((BB => {
              let {
                item: IB
              } = BB;
              return !IB.enchant
            })).map((BB => {
              let {
                meta: IB
              } = BB;
              return {
                item: IB.item,
                quantity: IB.quantity,
                sellPrice: IB.pricePerItem
              }
            }));
          return []
        }(ZB.shopInfo).filter((IB => {
          let {
            item: ZB
          } = IB;
          return BB.has(ZB)
        }))
      }), [ZB.shopInfo, FB.catalogue]);
      return (0, hB.jsx)(uJ, {
        browser: FB,
        className: "SmpMarketTab",
        recentLabel: IB("smpShop:recentlyListed"),
        action: (0, hB.jsx)(cB.s, {
          className: "SmpSellButton",
          onClick: () => {
            UB((BB => !BB))
          },
          children: IB("smpShop:sell")
        }),
        above: yB && (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsx)(DJ, {
            mode: "list",
            creator: vB,
            inventory: sB,
            catalogue: FB.catalogue,
            names: FB.names,
            searching: qB,
            prices: QB,
            onPickItem: FB.searchFor,
            onClose: () => {
              UB(!1)
            }
          }), kB.length > 0 && (0, hB.jsx)(VJ, {
            entries: kB
          })]
        }),
        listControls: (0, hB.jsx)(tJ, {
          view: WB,
          onChange: dB
        }),
        summary: gB && (nB.length > 0 ? IB(1 === nB.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: nB.length,
          price: TJ(fJ(nB, "min"))
        }) : IB("smpShop:noOneSelling", {
          item: pJ(FB.names, gB)
        })),
        list: qB ? (0, hB.jsx)(kJ, {
          grid: CB
        }) : nB.length > 0 ? (0, hB.jsx)(bJ, {
          entries: nB,
          view: WB
        }) : zB ? (0, hB.jsx)(nJ, {
          entry: zB
        }) : (0, hB.jsx)(kJ, {
          count: 3,
          grid: CB
        })
      })
    }

    function VJ(BB) {
      let {
        entries: IB
      } = BB;
      const {
        t: ZB
      } = (0, GB.G)(), JB = jJ(), [oB, vB] = (0, TB.useState)({});
      return (0, hB.jsx)("div", {
        className: "SmpList",
        children: IB.map((BB => {
          var IB, TB, GB;
          let {
            key: kB,
            item: nB,
            meta: zB
          } = BB;
          const FB = null !== (IB = oB[kB]) && void 0 !== IB ? IB : 1;
          return (0, hB.jsxs)("div", {
            className: "SmpRow",
            children: [(0, hB.jsx)(GJ, {
              item: zB.item,
              amount: zB.quantity,
              tier: null !== (TB = null === (GB = nB.enchant) || void 0 === GB ? void 0 : GB.tier) && void 0 !== TB ? TB : null
            }), (0, hB.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, hB.jsx)("b", {
                children: (0, hB.jsx)(bT.e, {
                  text: nB.customTitle
                })
              }), (0, hB.jsx)("small", {
                children: ZB("smpShop:enchantedListing")
              })]
            }), (0, hB.jsx)(FJ, {
              value: FB,
              onChange: BB => {
                vB({
                  ...oB,
                  [kB]: BB
                })
              },
              max: 9999999,
              step: NJ,
              label: ZB("smpShop:pricePerItem")
            }), (0, hB.jsxs)(cB.s, {
              loading: JB.isPending(kB),
              onClick: () => {
                JB.act(kB, String(FB))
              },
              children: [ZB("smpShop:list"), " ", (0, hB.jsx)(vJ, {
                amount: FB
              })]
            })]
          }, kB)
        }))
      })
    }
    const SJ = (0, TB.memo)((function(BB) {
      let {
        itemKey: IB,
        item: ZB,
        quantity: TB,
        pricePerItem: JB,
        tier: GB,
        selected: vB,
        onSelect: kB
      } = BB;
      return (0, hB.jsxs)("button", {
        type: "button",
        className: oB()("SmpInventorySlot", {
          SmpInventorySlotOn: vB
        }),
        title: ZB,
        onClick: () => {
          kB(IB)
        },
        children: [(0, hB.jsx)(GJ, {
          item: ZB,
          amount: TB,
          tier: GB
        }), (0, hB.jsx)(vJ, {
          amount: JB
        })]
      })
    }));

    function Bo() {
      var BB;
      const {
        t: IB
      } = (0, GB.G)(), ZB = jJ(), JB = null === (BB = ZB.shopInfo[ZB.categoryKey]) || void 0 === BB ? void 0 : BB.items, vB = dJ(JB, "sell"), kB = CJ(JB, "empty"), [cB, nB] = (0, TB.useState)(null), [zB, FB] = (0, TB.useState)({}), NB = vB.find((BB => {
        let {
          key: IB
        } = BB;
        return IB === cB
      }));
      return 0 === vB.length ? (0, hB.jsx)("div", {
        className: "SmpScreen",
        children: (0, hB.jsx)(cJ, {
          title: kB ? (0, hB.jsx)(bT.e, {
            text: kB.item.customTitle
          }) : IB("smpShop:nothingToSell"),
          children: kB && (0, hB.jsx)(bT.e, {
            text: kB.item.description
          })
        })
      }) : (0, hB.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, hB.jsx)("div", {
          className: "SmpInventoryGrid",
          children: vB.map((BB => {
            var IB, ZB;
            let {
              key: TB,
              item: JB,
              meta: oB
            } = BB;
            return (0, hB.jsx)(SJ, {
              itemKey: TB,
              item: oB.item,
              quantity: oB.quantity,
              pricePerItem: oB.pricePerItem,
              tier: null !== (IB = null === (ZB = JB.enchant) || void 0 === ZB ? void 0 : ZB.tier) && void 0 !== IB ? IB : null,
              selected: TB === cB,
              onSelect: nB
            }, TB)
          }))
        }), (0, hB.jsx)("div", {
          className: oB()("SmpSellBar", {
            SmpSellBarIdle: !NB
          }),
          children: NB ? (0, hB.jsx)(Io, {
            entry: NB,
            choice: aJ(NB.item, zB[NB.key]),
            onChoose: BB => {
              FB({
                ...zB,
                [NB.key]: BB
              })
            }
          }) : (0, hB.jsx)("span", {
            className: "SmpMuted",
            children: IB("smpShop:tapToSell")
          })
        })]
      })
    }

    function Io(BB) {
      var IB, ZB, TB, JB;
      let {
        entry: oB,
        choice: vB,
        onChoose: kB
      } = BB;
      const {
        t: nB
      } = (0, GB.G)(), zB = jJ(), {
        key: FB,
        item: NB,
        meta: gB
      } = oB, qB = OJ("dropdown" === (null === (IB = NB.userInput) || void 0 === IB ? void 0 : IB.type) ? NB.userInput.dropdownOptions : []), yB = null === vB ? 0 : -(0, fT.e)(NB, vB);
      return (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(GJ, {
          item: gB.item,
          amount: gB.quantity,
          tier: null !== (ZB = null === (TB = NB.enchant) || void 0 === TB ? void 0 : TB.tier) && void 0 !== ZB ? ZB : null
        }), (0, hB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, hB.jsx)("b", {
            children: (0, hB.jsx)(bT.e, {
              text: null !== (JB = NB.customTitle) && void 0 !== JB ? JB : gB.item
            })
          }), (0, hB.jsx)("small", {
            children: nB("smpShop:sellEach", {
              count: gB.quantity
            })
          })]
        }), (0, hB.jsx)(hJ, {
          options: qB.map((BB => {
            let {
              label: IB,
              quantity: ZB,
              isAll: TB
            } = BB;
            return {
              value: IB,
              label: TB ? nB("smpShop:all", {
                count: ZB
              }) : String(ZB)
            }
          })),
          value: vB,
          onChange: kB,
          ariaLabel: nB("smpShop:quantity")
        }), (0, hB.jsxs)(cB.s, {
          loading: zB.isPending(FB),
          disabled: null === vB,
          onClick: () => {
            zB.act(FB, vB)
          },
          children: [nB("smpShop:sellButton"), " ", (0, hB.jsx)(vJ, {
            amount: yB
          })]
        })]
      })
    }

    function Zo() {
      var BB;
      const {
        t: IB
      } = (0, GB.G)(), ZB = jJ(), TB = null === (BB = ZB.shopInfo[ZB.categoryKey]) || void 0 === BB ? void 0 : BB.items, JB = dJ(TB, "collect"), oB = dJ(TB, "myListing"), vB = (BB, IB) => ZB.isPending(BB) || !1 === IB.canBuy;
      return (0, hB.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, hB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: IB("smpShop:readyToCollect")
        }), JB.length > 0 ? (0, hB.jsx)("div", {
          className: "SmpList",
          children: JB.map((BB => {
            var TB, JB;
            let {
              key: oB,
              item: GB,
              meta: kB
            } = BB;
            return (0, hB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, hB.jsx)(GJ, {
                item: "sold" === kB.type ? "Gold Coin" : kB.item,
                amount: "sold" === kB.type ? 0 : kB.quantity,
                tier: null !== (TB = null === (JB = GB.enchant) || void 0 === JB ? void 0 : JB.tier) && void 0 !== TB ? TB : null
              }), (0, hB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, hB.jsx)("b", {
                  children: (0, hB.jsx)(bT.e, {
                    text: GB.customTitle
                  })
                }), (0, hB.jsx)("small", {
                  children: (0, hB.jsx)(bT.e, {
                    text: GB.description
                  })
                })]
              }), (0, hB.jsx)(cB.p, {
                loading: vB(oB, GB),
                onClick: () => {
                  ZB.act(oB)
                },
                children: IB("smpShop:collect")
              })]
            }, oB)
          }))
        }) : (0, hB.jsx)(cJ, {
          title: IB("smpShop:nothingToCollect"),
          children: IB("smpShop:nothingToCollectHint")
        }), (0, hB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: IB("smpShop:activeListings", {
            count: oB.length
          })
        }), oB.length > 0 ? (0, hB.jsx)("div", {
          className: "SmpList",
          children: oB.map((BB => {
            var TB, JB;
            let {
              key: oB,
              item: GB,
              meta: kB
            } = BB;
            return (0, hB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, hB.jsx)(GJ, {
                item: kB.item,
                amount: kB.quantity,
                tier: null !== (TB = null === (JB = GB.enchant) || void 0 === JB ? void 0 : JB.tier) && void 0 !== TB ? TB : null
              }), (0, hB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, hB.jsx)("b", {
                  children: (0, hB.jsx)(bT.e, {
                    text: GB.customTitle
                  })
                }), (0, hB.jsx)("small", {
                  children: IB("smpShop:timeLeft", {
                    time: wJ(kB.expiresAt)
                  })
                })]
              }), (0, hB.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, hB.jsx)(vJ, {
                  amount: kB.pricePerItem
                }), (0, hB.jsx)("small", {
                  children: IB("smpShop:each")
                })]
              }), (0, hB.jsx)(cB.M, {
                loading: vB(oB, GB),
                onClick: () => {
                  ZB.act(oB)
                },
                children: IB("smpShop:cancel")
              })]
            }, oB)
          }))
        }) : (0, hB.jsx)(cJ, {
          title: IB("smpShop:noActiveListings"),
          children: IB("smpShop:noActiveListingsHint")
        })]
      })
    }

    function To(BB) {
      let {
        done: IB,
        of: ZB
      } = BB;
      return (0, hB.jsx)("span", {
        className: "SmpProgress",
        children: (0, hB.jsx)("i", {
          style: {
            width: `${Math.min(100,IB/Math.max(1,ZB)*100)}%`
          }
        })
      })
    }

    function Jo(BB) {
      var IB, ZB, TB;
      let {
        entry: JB,
        choice: oB,
        onChoose: vB
      } = BB;
      const {
        t: kB
      } = (0, GB.G)(), nB = jJ(), {
        key: zB,
        item: FB,
        meta: NB
      } = JB, gB = "dropdown" === (null === (IB = FB.userInput) || void 0 === IB ? void 0 : IB.type) ? FB.userInput.dropdownOptions : [], qB = !0 === NB.processing, yB = null !== NB.creator && (NB.owned > 0 || qB), UB = yB && NB.owned > 0 ? OJ(gB) : [], WB = null === oB ? 0 : null !== (ZB = null === (TB = UB.find((BB => BB.label === oB))) || void 0 === TB ? void 0 : TB.quantity) && void 0 !== ZB ? ZB : 0;
      return (0, hB.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, hB.jsx)(GJ, {
          item: NB.item
        }), (0, hB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, hB.jsx)("b", {
            children: (0, hB.jsx)(bT.e, {
              text: FB.customTitle
            })
          }), (0, hB.jsxs)("small", {
            children: [(0, hB.jsx)(vJ, {
              amount: NB.pricePerItem
            }), " ", kB("smpShop:each"), " \xb7", " ", null === NB.creator ? kB("smpShop:you") : (0, hB.jsx)(bT.e, {
              text: [{
                entityName: NB.creator
              }]
            })]
          }), (0, hB.jsx)(To, {
            done: NB.delivered,
            of: NB.wanted
          })]
        }), yB ? (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsx)(hJ, {
            options: UB.map((BB => {
              let {
                label: IB,
                quantity: ZB,
                isAll: TB
              } = BB;
              return {
                value: IB,
                label: TB ? kB("smpShop:max", {
                  count: ZB
                }) : String(ZB)
              }
            })),
            value: oB,
            onChange: vB,
            ariaLabel: kB("smpShop:quantity")
          }), (0, hB.jsxs)(cB.s, {
            loading: nB.isPending(zB) || qB,
            disabled: null === oB,
            onClick: () => {
              nB.act(zB, oB)
            },
            children: [kB("smpShop:deliver"), " ", (0, hB.jsx)(vJ, {
              amount: WB * NB.pricePerItem
            })]
          })]
        }) : (0, hB.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === NB.creator ? kB("smpShop:yourOrder") : kB("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function oo() {
      var BB;
      const {
        t: IB
      } = (0, GB.G)(), ZB = jJ(), JB = null === (BB = ZB.shopInfo[ZB.categoryKey]) || void 0 === BB ? void 0 : BB.items, oB = CJ(JB, "search"), vB = CJ(JB, "creator"), kB = dJ(JB, "order"), nB = CJ(JB, "empty"), zB = mJ(oB, kB.length > 0 || null !== nB), [FB, NB] = (0, TB.useState)(!1), [gB, qB] = (0, TB.useState)({});
      return (0, hB.jsx)(uJ, {
        browser: zB,
        recentLabel: IB("smpShop:recentOrders"),
        action: (0, hB.jsx)(cB.s, {
          onClick: () => {
            NB((BB => !BB))
          },
          children: IB("smpShop:createOrder")
        }),
        above: FB && (0, hB.jsx)(DJ, {
          mode: "order",
          creator: vB,
          catalogue: zB.catalogue,
          names: zB.names,
          searching: zB.loading,
          prices: [],
          onPickItem: zB.searchFor,
          onClose: () => {
            NB(!1)
          }
        }),
        onBack: () => {
          NB(!1)
        },
        summary: kB.length > 0 && IB(1 === kB.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: kB.length,
          price: TJ(fJ(kB, "max"))
        }),
        list: zB.loading ? (0, hB.jsx)(kJ, {}) : kB.length > 0 ? (0, hB.jsx)(PJ.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: QJ,
          observerUpdateDeps: [kB.length],
          children: kB.map((BB => (0, hB.jsx)(Jo, {
            entry: BB,
            choice: aJ(BB.item, gB[BB.key]),
            onChoose: IB => {
              qB({
                ...gB,
                [BB.key]: IB
              })
            }
          }, BB.key)))
        }) : nB ? (0, hB.jsx)(nJ, {
          entry: nB
        }) : (0, hB.jsx)(kJ, {
          count: 3
        })
      })
    }

    function Go() {
      var BB;
      const {
        t: IB
      } = (0, GB.G)(), ZB = jJ(), TB = dJ(null === (BB = ZB.shopInfo[ZB.categoryKey]) || void 0 === BB ? void 0 : BB.items, "myOrder");
      return 0 === TB.length ? (0, hB.jsx)("div", {
        className: "SmpScreen",
        children: (0, hB.jsx)(cJ, {
          title: IB("smpShop:noOrders"),
          children: IB("smpShop:noOrdersHint")
        })
      }) : (0, hB.jsx)("div", {
        className: "SmpScreen",
        children: (0, hB.jsx)("div", {
          className: "SmpList",
          children: TB.map((BB => {
            let {
              key: TB,
              item: JB,
              meta: oB
            } = BB;
            const GB = ZB.isPending(TB) || !1 === JB.canBuy;
            return (0, hB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, hB.jsx)(GJ, {
                item: oB.item,
                amount: oB.collectable
              }), (0, hB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, hB.jsx)("b", {
                  children: (0, hB.jsx)(bT.e, {
                    text: JB.customTitle
                  })
                }), (0, hB.jsxs)("small", {
                  children: [(0, hB.jsx)(vJ, {
                    amount: oB.pricePerItem
                  }), " ", IB("smpShop:each"), oB.collectable > 0 && ` \xb7 ${IB("smpShop:readyCount",{count:oB.collectable})}`]
                }), (0, hB.jsx)(To, {
                  done: oB.delivered,
                  of: oB.wanted
                })]
              }), oB.collectable > 0 ? (0, hB.jsx)(cB.p, {
                loading: GB,
                onClick: () => {
                  ZB.act(TB)
                },
                children: IB("smpShop:collectCount", {
                  count: oB.collectable
                })
              }) : (0, hB.jsx)(cB.M, {
                loading: GB,
                onClick: () => {
                  ZB.act(TB)
                },
                children: IB("smpShop:cancel")
              })]
            }, TB)
          }))
        })
      })
    }
    const vo = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ko = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function co(BB, IB) {
      let ZB = !1;
      const TB = {};
      for (const JB in BB) IB(JB, BB[JB]) ? TB[JB] = BB[JB] : ZB = !0;
      return ZB ? TB : BB
    }

    function no(BB) {
      var IB, ZB, JB, kB;
      const {
        show: cB,
        shopInfo: nB,
        selectedCategoryKey: zB
      } = BB, {
        t: FB
      } = (0, GB.G)(), NB = null !== zB && void 0 !== zB ? zB : "", gB = WJ(nB, NB), qB = null === (IB = nB[NB]) || void 0 === IB ? void 0 : IB.items, yB = null !== gB, [UB, WB] = (0, TB.useState)({}), [dB, CB] = (0, TB.useState)([]), [QB, sB] = (0, TB.useState)(!1), [wB, OB] = (0, TB.useState)(null), [, YB] = (0, TB.useState)(0), iB = (0, TB.useRef)(0), pB = (0, TB.useRef)({}), aB = (0, TB.useRef)({
        items: qB,
        pending: UB,
        shopInfo: nB,
        active: yB,
        canAfford: BB.canAfford,
        buy: BB.buy
      });
      aB.current = {
        items: qB,
        pending: UB,
        shopInfo: nB,
        active: yB,
        canAfford: BB.canAfford,
        buy: BB.buy
      };
      const HB = (0, TB.useCallback)((BB => {
        iB.current++;
        const IB = iB.current;
        CB((ZB => [{
          id: IB,
          text: BB
        }, ...ZB].slice(0, 8))), OB(IB)
      }), []);
      (0, TB.useEffect)((() => {
        if (null === wB) return;
        const BB = setTimeout((() => {
          OB(null)
        }), 3e3);
        return () => {
          clearTimeout(BB)
        }
      }), [wB]), (0, TB.useEffect)((() => {
        const IB = BB.message;
        if (!IB) return;
        const {
          shopInfo: ZB,
          active: TB,
          items: JB
        } = aB.current, oB = null !== IB.categoryKey ? null !== WJ(ZB, IB.categoryKey) : TB;
        (oB || TB) && HB(IB.text), oB && WB((BB => co(BB, (BB => {
          var IB, ZB;
          return !vo.has(null === JB || void 0 === JB || null === (IB = JB[BB]) || void 0 === IB || null === (ZB = IB.smp) || void 0 === ZB ? void 0 : ZB.kind)
        }))))
      }), [BB.message, HB]), (0, TB.useEffect)((() => {
        WB((BB => co(BB, ((BB, IB) => HJ(null === qB || void 0 === qB ? void 0 : qB[BB]) === IB.snapshot))))
      }), [nB, qB]);
      const MB = Object.keys(UB).length > 0;
      (0, TB.useEffect)((() => {
        if (!MB) return;
        const BB = setInterval((() => {
          YB((BB => BB + 1));
          const BB = Date.now(),
            {
              pending: IB,
              items: ZB
            } = aB.current,
            TB = Object.keys(IB).filter((ZB => BB - IB[ZB].at >= 12e3));
          if (0 === TB.length) return;
          const JB = TB.some((BB => {
            var TB, JB;
            return "search" !== (null === ZB || void 0 === ZB || null === (TB = ZB[BB]) || void 0 === TB || null === (JB = TB.smp) || void 0 === JB ? void 0 : JB.kind) || IB[BB].resend
          }));
          for (const oB of TB) pB.current[oB] = BB;
          WB((BB => co(BB, (BB => !TB.includes(BB))))), JB && HB(FB("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(BB)
        }
      }), [MB]), (0, TB.useEffect)((() => {
        WB({})
      }), [NB]), (0, TB.useEffect)((() => {
        cB || sB(!1)
      }), [cB]);
      const jB = (0, TB.useCallback)((function(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: TB,
            pending: JB,
            canAfford: oB,
            buy: GB
          } = aB.current, vB = null === TB || void 0 === TB ? void 0 : TB[BB];
          if (!vB || BB in JB || !1 === vB.canBuy) return !1;
          if (!oB(vB, (0, fT.e)(vB, IB))) return !1;
          GB(BB, vB, IB);
          const kB = {
            snapshot: HJ(vB),
            at: Date.now(),
            resend: ZB
          };
          return aB.current.pending = {
            ...aB.current.pending,
            [BB]: kB
          }, WB((IB => ({
            ...IB,
            [BB]: kB
          }))), !0
        }), []),
        PB = (0, TB.useMemo)((() => ({
          shopInfo: nB,
          categoryKey: NB,
          canAfford: BB.canAfford,
          isPending: BB => BB in UB,
          gaveUpAt: BB => {
            var IB;
            return null !== (IB = pB.current[BB]) && void 0 !== IB ? IB : 0
          },
          act: jB,
          notify: HB
        })), [nB, NB, BB.canAfford, UB, jB, HB]),
        RB = Math.min(...Object.values(UB).map((BB => BB.at))),
        rB = MB && Date.now() - RB > 1500,
        mB = dB.length > 1,
        XB = null !== (ZB = null === (JB = nB[NB]) || void 0 === JB ? void 0 : JB.customTitle) && void 0 !== ZB ? ZB : NB,
        LB = null === (kB = nB[NB]) || void 0 === kB ? void 0 : kB.description;
      let eB = null;
      return "market" === gB ? eB = (0, hB.jsx)(KJ, {}) : "sell" === gB ? eB = (0, hB.jsx)(Bo, {}) : "collect" === gB ? eB = (0, hB.jsx)(Zo, {}) : "orders" === gB ? eB = (0, hB.jsx)(oo, {}) : "myOrders" === gB && (eB = (0, hB.jsx)(Go, {})), (0, hB.jsx)(MJ.Provider, {
        value: PB,
        children: (0, hB.jsx)("div", {
          className: "SmpShopHost",
          hidden: !yB,
          children: (0, hB.jsxs)("div", {
            className: "SmpShop",
            children: [(0, hB.jsx)("header", {
              className: "SmpHeader",
              children: (0, hB.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, hB.jsxs)("h2", {
                  children: [gB && (0, hB.jsx)(vB.d, {
                    name: ko[gB]
                  }), FB(XB)]
                }), LB && (0, hB.jsx)("p", {
                  children: (0, hB.jsx)(bT.e, {
                    text: LB
                  })
                })]
              })
            }), (0, hB.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: cB && eB
            }), (0, hB.jsxs)("button", {
              type: "button",
              className: oB()("SmpStatus", {
                SmpStatusWaiting: MB,
                SmpStatusFresh: !MB && null !== wB,
                SmpStatusHasHistory: mB
              }),
              "aria-live": "polite",
              "aria-expanded": mB ? QB : void 0,
              onClick: () => {
                mB && sB((BB => !BB))
              },
              children: [MB ? (0, hB.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, hB.jsx)(zJ, {}), FB(rB ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : dB[0] ? (0, hB.jsx)("span", {
                className: "SmpStatusText",
                children: (0, hB.jsx)(bT.e, {
                  text: dB[0].text
                })
              }, dB[0].id) : (0, hB.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: FB("smpShop:ready")
              }), mB && (0, hB.jsx)("small", {
                children: FB("smpShop:recentMessages", {
                  count: dB.length
                })
              })]
            }), QB && mB && (0, hB.jsx)("div", {
              className: "SmpStatusHistory",
              children: dB.map((BB => (0, hB.jsx)("div", {
                children: (0, hB.jsx)(bT.e, {
                  text: BB.text
                })
              }, BB.id)))
            })]
          })
        })
      })
    }
    class ho {
      constructor(BB) {
        this.info = BB
      }
      static fromShopInfo(BB) {
        const IB = {};
        for (const ZB in BB) {
          const TB = !0 === BB[ZB].redDot && !0 !== BB[ZB].forceRemoveRedDot;
          IB[ZB] = {
            redDot: TB,
            items: {}
          };
          for (const JB in BB[ZB].items) {
            const TB = BB[ZB].items[JB],
              oB = !0 === TB.redDot && !0 !== TB.forceRemoveRedDot;
            IB[ZB].items[JB] = {
              redDot: oB
            }
          }
        }
        return new ho(IB)
      }
      anyCategoryHasRedDots() {
        for (const BB in this.info)
          if (this.categoryHasRedDot(BB)) return !0;
        return !1
      }
      doesCategoryExist(BB) {
        return !(0, vZ.L)(this.info[BB])
      }
      categoryHasRedDot(BB) {
        return !0 === this.info[BB].redDot
      }
      updateCategoryRedDot(BB, IB) {
        this.info[BB].redDot = IB
      }
      doesItemExist(BB, IB) {
        return this.doesCategoryExist(BB) && !(0, vZ.L)(this.info[BB].items[IB])
      }
      itemHasRedDot(BB, IB) {
        return !0 === this.info[BB].items[IB].redDot
      }
      updateItemRedDot(BB, IB, ZB) {
        this.info[BB].items[IB].redDot = ZB
      }
      shallowCopy() {
        return new ho(this.info)
      }
    }

    function zo(BB, IB) {
      return `${BB}\x1f${IB}`
    }

    function Fo(BB, IB) {
      return !(0, vZ.L)(IB) && !(0, vZ.L)(BB) && IB in BB
    }
    const No = (0, TB.memo)((function(BB) {
      var IB, ZB;
      let {
        show: JB
      } = BB;
      const GB = (0, RI.g)("players", Co),
        vB = (0, RI.g)("players", Qo),
        nB = (0, ST.e)(),
        [FB, NB] = (0, TB.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: ho.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        qB = (0, TB.useRef)(""),
        yB = (0, TB.useRef)(null),
        WB = (0, TB.useRef)(null),
        dB = (0, TB.useRef)(0),
        CB = (0, TB.useRef)(void 0),
        QB = (0, TB.useRef)(null),
        sB = (0, TB.useRef)(FB),
        OB = FB.redDotInfo.anyCategoryHasRedDots(),
        [YB, pB] = (0, TB.useState)(null),
        aB = (0, TB.useRef)(!1);
      let HB = !1,
        MB = 0,
        jB = 0;
      if (FB.currencyAmounts) {
        for (const BB in FB.currencyAmounts) {
          var PB;
          const IB = FB.currencyAmounts[BB];
          IB.hidden || (MB++, (null === (PB = IB.subtext) || void 0 === PB ? void 0 : PB.length) > 0 && jB++)
        }
        HB = MB + jB > 4
      }(0, TB.useEffect)((() => {
        kZ.l.Gq("showShopIconRedDot", OB, !0)
      }), [OB]), (0, TB.useEffect)((() => {
        UB.gameBridge.send("setShopOpen", JB), JB || (clearTimeout(CB.current), NB((BB => BB.awaitingPurchase ? {
          ...BB,
          awaitingPurchase: !1
        } : BB)))
      }), [JB]), (0, TB.useEffect)((() => () => {
        UB.gameBridge.send("setShopOpen", !1), clearTimeout(CB.current)
      }), []), (0, TB.useEffect)((() => {
        sB.current = FB
      }), [FB]), (0, TB.useEffect)((() => {
        if (null === YB) return;
        return (0, KT.e)("pointerdown", (BB => {
          const IB = BB.target;
          null !== IB && void 0 !== IB && IB.closest(".ShopItem") || pB(null)
        }))
      }), [YB]);
      const RB = BB => {
          NB((IB => ({
            ...IB,
            ...BB
          })))
        },
        rB = BB => {
          var IB;
          clearTimeout(null === (IB = FB.onBoughtInfo) || void 0 === IB ? void 0 : IB.timeout);
          const ZB = setTimeout((() => {
            RB({
              onBoughtInfo: null
            })
          }), 3e3);
          qB.current = BB, RB({
            onBoughtInfo: {
              text: BB,
              timeout: ZB,
              categoryKey: yB.current
            }
          })
        },
        mB = BB => {
          const {
            shopInfo: IB,
            userInputsPerItem: ZB,
            redDotInfo: TB,
            autoSelectCategory: oB
          } = function(BB, IB, ZB, TB, JB, oB) {
            if ((0, vZ.L)(BB) || 0 === Object.keys(BB).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: ho.fromShopInfo({}),
              autoSelectCategory: null
            };
            const GB = iB.siteUsedData[iB.siteUsed].adConfig.showRewardedAds,
              vB = {};
            let kB = null;
            for (const qB in BB) {
              const IB = BB[qB],
                ZB = {};
              let TB = !1;
              for (const BB in IB.items) {
                const JB = IB.items[BB];
                (0, fT.o)(JB, GB) && (ZB[BB] = JB, TB = !0)
              }
              TB && (vB[qB] = {
                ...IB,
                items: ZB
              }, !0 === IB.autoSelectCategory && (kB = qB))
            }
            const cB = {},
              nB = (BB, IB, TB, GB) => {
                var vB, kB;
                const nB = zo(BB, IB),
                  hB = null !== (vB = ZB[nB]) && void 0 !== vB ? vB : ZB[IB];
                if (null !== (kB = GB.userInput) && void 0 !== kB && kB.type) switch (GB.userInput.type) {
                  case "dropdown": {
                    var zB;
                    const BB = !hB || !GB.userInput.dropdownOptions.some((BB => (0, fT.i)(BB) === hB)),
                      IB = GB.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === TB || void 0 === TB || null === (zB = TB.userInput) || void 0 === zB ? void 0 : zB.type) || JSON.stringify(TB.userInput.dropdownOptions) !== JSON.stringify(GB.userInput.dropdownOptions)),
                      ZB = GB.userInput,
                      JB = !(0, vZ.L)(ZB.initialValue) && ZB.dropdownOptions.some((BB => (0, fT.i)(BB) === ZB.initialValue));
                    var FB;
                    return void(BB || IB ? JB ? cB[nB] = null !== (FB = GB.userInput.initialValue) && void 0 !== FB ? FB : null : GB.userInput.dropdownOptions.length > 0 ? cB[nB] = (0, fT.i)(GB.userInput.dropdownOptions[0]) : cB[nB] = null : cB[nB] = hB)
                  }
                  case "text":
                  case "number":
                    var NB, gB, qB;
                    return void((null === TB || void 0 === TB ? void 0 : TB.userInput) !== GB.userInput ? cB[nB] = null !== (NB = null !== (gB = GB.userInput.initialValue) && void 0 !== gB ? gB : hB) && void 0 !== NB ? NB : "" : cB[nB] = null !== (qB = null !== hB && void 0 !== hB ? hB : GB.userInput.initialValue) && void 0 !== qB ? qB : "");
                  case "color":
                    var yB, UB, WB;
                    return void((null === TB || void 0 === TB ? void 0 : TB.userInput) !== GB.userInput ? cB[nB] = null !== (yB = null !== (UB = GB.userInput.initialValue) && void 0 !== UB ? UB : hB) && void 0 !== yB ? yB : "#000000" : cB[nB] = null !== (WB = null !== hB && void 0 !== hB ? hB : GB.userInput.initialValue) && void 0 !== WB ? WB : "#000000");
                  case "player": {
                    const BB = (0, fT.l)(JB, oB, GB.userInput);
                    return void(hB && BB.includes(hB) ? cB[nB] = hB : cB[nB] = BB.length > 0 ? BB[0] : null)
                  }
                }
              };
            for (const qB in vB)
              for (const BB in vB[qB].items) {
                var hB;
                const ZB = vB[qB].items[BB];
                nB(qB, BB, null === (hB = IB[qB]) || void 0 === hB ? void 0 : hB.items[BB], ZB)
              }
            const zB = ho.fromShopInfo(vB);
            for (const qB in vB) {
              var FB;
              if (TB.doesCategoryExist(qB)) {
                (null === (FB = IB[qB]) || void 0 === FB ? void 0 : FB.redDot) === vB[qB].redDot && zB.updateCategoryRedDot(qB, TB.categoryHasRedDot(qB));
                for (const BB in vB[qB].items) {
                  var NB, gB;
                  TB.doesItemExist(qB, BB) && (null === (NB = IB[qB]) || void 0 === NB || null === (gB = NB.items[BB]) || void 0 === gB ? void 0 : gB.redDot) === vB[qB].items[BB].redDot && zB.updateItemRedDot(qB, BB, TB.itemHasRedDot(qB, BB))
                }
              }
            }
            return {
              shopInfo: vB,
              userInputsPerItem: cB,
              redDotInfo: zB,
              autoSelectCategory: kB
            }
          }(BB, FB.shopInfo, FB.userInputsPerItem, FB.redDotInfo, GB, vB), kB = {
            shopInfo: IB,
            userInputsPerItem: ZB,
            redDotInfo: TB
          };
          if (null === oB || JB)
            if (IB[FB.selectedCategoryKey]) kB.selectedCategoryKey = FB.selectedCategoryKey;
            else {
              const BB = IJ(IB);
              kB.selectedCategoryKey = BB.length > 0 ? BB[0] : null
            }
          else kB.selectedCategoryKey = oB;
          return 0 === Object.keys(IB).length && JB && wB.d.set({
            openEverythingMenuName: null
          }), kB
        },
        LB = (BB, IB, ZB) => {
          const TB = FB.selectedCategoryKey,
            JB = zo(TB, BB),
            oB = null !== ZB && void 0 !== ZB ? ZB : FB.userInputsPerItem[JB],
            GB = {
              categoryKey: TB,
              itemKey: BB,
              userInput: oB
            };
          if (yB.current = TB, IB.isRewardedAd) {
            if (Date.now() - dB.current < 5e3) return;
            (0, qI._)((() => {
              var ZB, TB, oB;
              console.log("bought rewarded ad");
              const vB = GB.categoryKey ? null === (ZB = sB.current.shopInfo[GB.categoryKey]) || void 0 === ZB ? void 0 : ZB.items[BB] : null;
              if (!vB || !vB.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (TB = IB.userInput) || void 0 === TB ? void 0 : TB.type) === (null === vB || void 0 === vB || null === (oB = vB.userInput) || void 0 === oB ? void 0 : oB.type) ? (GB.userInput = sB.current.userInputsPerItem[JB], UB.gameBridge.send("buyShopItem", GB), IB.onBoughtMessage && rB(IB.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), dB.current = Date.now()
          } else {
            UB.gameBridge.send("buyShopItem", GB), RB({
              awaitingPurchase: !0
            }), clearTimeout(CB.current), CB.current = setTimeout((() => {
              QB.current = null, RB({
                awaitingPurchase: !1
              })
            }), 1e3);
            const BB = (0, fT.e)(IB, oB);
            if (QB.current = null, !isNaN(BB) && Fo(FB.currencyAmounts, IB.currency)) {
              0 !== BB && (QB.current = {
                currency: IB.currency,
                amountBefore: FB.currencyAmounts[IB.currency].amount
              });
              const ZB = {
                ...FB.currencyAmounts
              };
              ZB[IB.currency].amount -= BB, RB({
                currencyAmounts: ZB
              })
            }
            IB.onBoughtMessage && rB(IB.onBoughtMessage)
          }
        },
        eB = (BB, IB) => {
          if (null === IB || !BB.shopInfo[IB]) return BB;
          let ZB = BB.redDotInfo;
          return ZB.categoryHasRedDot(IB) && (ZB.updateCategoryRedDot(IB, !1), ZB = ZB.shallowCopy()), {
            ...BB,
            selectedCategoryKey: IB,
            redDotInfo: ZB
          }
        },
        uB = BB => {
          NB((IB => eB(IB, BB)))
        };
      (0, lI.d)(VT.k, (() => {
        NB((BB => {
          const IB = (0, VT.o)(IJ(BB.shopInfo), BB.selectedCategoryKey, (IB => (0, VT.h)(BB.shopInfo[IB].items)));
          return IB === BB.selectedCategoryKey ? BB : eB(BB, IB)
        }))
      })), (0, lI.d)("showShopFromServer", (BB => {
        let {
          toggle: IB,
          kB: ZB
        } = BB;
        ZB && uB(ZB), 0 === Object.keys(FB.shopInfo).length || IB && JB ? wB.d.set({
          openEverythingMenuName: null
        }) : wB.d.set({
          openEverythingMenuName: yI.q.SHOP
        })
      })), (0, lI.d)("closeShopOnDamaged", (() => {
        JB && wB.d.set({
          openEverythingMenuName: null
        })
      })), (0, lI.d)("overShopInfo", (BB => {
        rB(BB)
      })), (0, gB.c)("currencyAmounts", (BB => {
        var IB;
        const ZB = QB.current;
        ZB && (null === BB || void 0 === BB || null === (IB = BB[ZB.currency]) || void 0 === IB ? void 0 : IB.amount) === ZB.amountBefore ? RB({
          currencyAmounts: BB
        }) : (QB.current = null, RB({
          currencyAmounts: BB,
          awaitingPurchase: !1
        }))
      })), (0, gB.c)("shopInfo", (BB => {
        RB({
          ...mB(BB),
          awaitingPurchase: !1
        })
      }));
      const fB = (0, TB.useRef)({
        playerIds: GB,
        localPlayerId: vB
      });
      (0, TB.useEffect)((() => {
        fB.current.playerIds === GB && fB.current.localPlayerId === vB || (fB.current = {
          playerIds: GB,
          localPlayerId: vB
        }, NB((BB => {
          const IB = mB(BB.shopInfo);
          return {
            ...BB,
            ...IB
          }
        })))
      }), [GB, vB]);
      const lB = FB.selectedCategoryKey,
        AB = (BB, IB) => {
          var ZB, TB;
          return (isNaN(IB) || (0, vZ.L)(BB.currency) || Fo(FB.currencyAmounts, BB.currency) && IB <= FB.currencyAmounts[BB.currency].amount) && (null === (ZB = BB.canBuy) || void 0 === ZB || ZB) && !(null !== (TB = BB.hidden) && void 0 !== TB && TB)
        },
        tB = (BB, IB) => {
          var ZB, TB, JB;
          const GB = zo(lB, BB),
            vB = FB.shopInfo[lB].items[BB],
            nB = FB.userInputsPerItem[GB],
            zB = (0, fT.e)(vB, nB),
            NB = AB(vB, zB),
            gB = vB.enchant,
            qB = gB ? (0, XB.ub)(null !== (ZB = vB.customTitle) && void 0 !== ZB ? ZB : BB, {
              colour: XB.qb[gB.tier]
            }) : null !== (TB = vB.customTitle) && void 0 !== TB ? TB : BB,
            yB = IB => {
              const ZB = null !== IB && void 0 !== IB ? IB : nB,
                TB = void 0 !== IB ? (0, fT.e)(vB, IB) : zB;
              AB(vB, TB) && null !== ZB && LB(BB, vB, IB);
              let JB = FB.redDotInfo;
              JB.itemHasRedDot(lB, BB) && (JB.updateItemRedDot(lB, BB, !1), JB = JB.shallowCopy()), RB({
                redDotInfo: JB
              })
            };
          return (0, hB.jsxs)("div", {
            className: oB()("ShopItem", {
              ShopItemNoInput: !vB.userInput,
              ShopItemNoInputCanBuy: !vB.userInput && NB,
              ShopItemNoInputSelected: vB.isSelected,
              ShopItemEnchant: !!gB
            }),
            "data-pad-focusable": !vB.userInput || void 0,
            "data-pad-unavailable": !vB.userInput && !NB || void 0,
            "data-pad-repeat": null !== (JB = (0, VT.c)(vB)) && void 0 !== JB ? JB : void 0,
            "data-pad-repeat-wait": FB.awaitingPurchase || void 0,
            onClick: () => {
              if (gB && aB.current) {
                if (YB !== GB) return void pB(GB);
                pB(null)
              }
              vB.userInput || yB()
            },
            onPointerDown: BB => {
              gB && (aB.current = (0, AT.x)(BB))
            },
            onPointerEnter: BB => {
              gB && !(0, AT.x)(BB) && pB(GB)
            },
            onPointerLeave: BB => {
              gB && !(0, AT.x)(BB) && pB((BB => BB === GB ? null : BB))
            },
            style: {
              zIndex: Object.keys(FB.shopInfo[lB].items).length - IB
            },
            children: [FB.redDotInfo.itemHasRedDot(lB, BB) && (0, hB.jsx)(kB.b, {
              top: "-6px",
              right: "-6px"
            }), vB.badge && (0, hB.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, hB.jsx)("div", {
                className: oB()("ShopBadgeMain", vB.badge.type),
                children: (0, hB.jsx)(bT.e, {
                  text: vB.badge.text
                })
              })
            }), (0, hB.jsx)("div", {
              className: "ShopItemLeft",
              children: vB.image && (0, hB.jsx)(go, {
                item: vB,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, hB.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, hB.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, hB.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, hB.jsx)(bT.e, {
                    text: qB
                  })
                }), (0, hB.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, hB.jsx)(bT.e, {
                    text: vB.description
                  })
                })]
              }), vB.userInput && (0, hB.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: BB => {
                  BB.stopPropagation()
                },
                children: [(0, hB.jsx)(Uo, {
                  item: vB,
                  currInput: nB,
                  updateInput: IB => {
                    ((BB, IB, ZB) => {
                      const TB = zo(BB, IB),
                        JB = {
                          ...FB.userInputsPerItem
                        };
                      JB[TB] = ZB, RB({
                        userInputsPerItem: JB
                      })
                    })(lB, BB, IB)
                  },
                  onSubmit: BB => {
                    yB(BB)
                  }
                }), ("dropdown" !== vB.userInput.type || !vB.userInput.autoSubmit) && (0, hB.jsx)(cB.g, {
                  className: "ItemCostButton",
                  disabled: !NB && null !== nB,
                  onClick: () => {
                    yB()
                  },
                  children: (0, hB.jsx)(yo, {
                    item: vB,
                    cost: zB,
                    currencyAmounts: FB.currencyAmounts
                  })
                })]
              })]
            }), !vB.userInput && (0, hB.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, hB.jsx)(yo, {
                item: vB,
                cost: zB,
                currencyAmounts: FB.currencyAmounts
              })
            }), gB && YB === GB && (0, hB.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, hB.jsx)(bT.e, {
                text: qB
              }), (0, hB.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, hB.jsx)(bT.e, {
                  text: (0, lT.d)("", gB.enchantments, gB.enchantmentData)
                })
              })]
            })]
          }, GB)
        },
        bB = function(BB) {
          for (const IB in BB)
            if (BB[IB].smp) return !0;
          return !1
        }(FB.shopInfo),
        xB = WJ(FB.shopInfo, lB);
      return (0, hB.jsx)(LT.d, {
        className: "Menu ShopBody",
        show: JB,
        children: 0 !== Object.keys(FB.shopInfo).length && (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, hB.jsx)(zB, {
              items: IJ(FB.shopInfo).map((BB => {
                var IB;
                return {
                  id: BB,
                  title: null !== (IB = FB.shopInfo[BB].customTitle) && void 0 !== IB ? IB : BB,
                  redDot: FB.redDotInfo.categoryHasRedDot(BB)
                }
              })),
              link: nB ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, BJ.e)({
                    page: (0, BJ.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: lB,
              onClick: uB,
              padStartsOnTab: (0, VT.e)(lB)
            }), (0, hB.jsx)("div", {
              className: "MenuSideBarFooter",
              children: FB.currencyAmounts && Object.keys(FB.currencyAmounts).map((BB => {
                var IB;
                const ZB = FB.currencyAmounts[BB];
                return ZB.hidden ? null : (0, hB.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (HB ? "SmallText" : ""),
                  children: [(0, hB.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, hB.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ZB.iconColour
                      },
                      children: (0, hB.jsx)(so, {
                        iconName: ZB.icon
                      })
                    }), "\xa0", (0, uT.b)(ZB.amount, 6)]
                  }), (null === (IB = ZB.subtext) || void 0 === IB ? void 0 : IB.length) > 0 && (0, hB.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, hB.jsx)(bT.e, {
                      text: ZB.subtext
                    })
                  })]
                }, BB)
              }))
            })]
          }), (0, hB.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [bB && (0, hB.jsx)(no, {
              show: JB,
              shopInfo: FB.shopInfo,
              selectedCategoryKey: lB,
              buy: (BB, IB, ZB) => {
                LB(BB, IB, ZB)
              },
              canAfford: AB,
              message: FB.onBoughtInfo
            }), null === xB && (0, hB.jsxs)(hB.Fragment, {
              children: [(0, hB.jsx)("div", {
                className: oB()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== FB.onBoughtInfo
                }),
                children: (0, hB.jsx)(bT.e, {
                  text: qB.current
                })
              }), (0, hB.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, hB.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (IB = FB.shopInfo[lB]) || void 0 === IB ? void 0 : IB.description) && (0, hB.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, hB.jsx)(bT.e, {
                      text: FB.shopInfo[lB].description
                    })
                  }), JB && (0, hB.jsx)("div", {
                    className: "ShopItems",
                    ref: WB,
                    "data-pad-initial-area": !0,
                    children: IJ(null === (ZB = FB.shopInfo[lB]) || void 0 === ZB ? void 0 : ZB.items).map(((BB, IB) => tB(BB, IB)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function go(BB) {
      let {
        item: IB,
        minWidth: ZB,
        minHeight: TB
      } = BB;
      const {
        image: JB,
        schematicId: oB,
        imageColour: GB
      } = IB;
      if (oB) return (0, hB.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ZB}rem`,
          height: `${TB}rem`
        },
        children: (0, hB.jsx)(xT.d, {
          game: {
            schematicId: oB
          }
        })
      });
      var kB, cB;
      if ((0, tT.g)(JB)) return (0, hB.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ZB}rem`,
          height: "0",
          minHeight: `${TB}rem`
        },
        children: (0, hB.jsx)(tT.e, {
          itemName: JB,
          amount: null !== (kB = IB.amount) && void 0 !== kB ? kB : 0,
          amountFontSize: TB / 4 + "rem",
          enchantmentTier: null === (cB = IB.enchant) || void 0 === cB ? void 0 : cB.tier
        })
      });
      const nB = JB.slice(-4);
      return ".jpg" === nB || ".png" === nB ? (0, hB.jsx)(qo, {
        image: JB,
        minWidth: ZB
      }) : (0, hB.jsx)(vB.d, {
        name: JB,
        className: "SelectedItemImage",
        style: {
          color: GB
        }
      })
    }

    function qo(BB) {
      let {
        image: IB,
        minWidth: ZB
      } = BB;
      const {
        gameNameWithVariation: TB
      } = (0, RI.j)("connectedGame"), JB = IB.endsWith(".jpg");
      return (0, hB.jsx)("img", {
        className: oB()({
          ShopPixelImage: !JB
        }),
        style: {
          width: `${JB?1.6*ZB:ZB}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,XB.Vb)(TB)}/${IB}`,
        alt: IB,
        draggable: !1
      })
    }

    function yo(BB) {
      let {
        item: IB,
        cost: ZB,
        currencyAmounts: TB
      } = BB;
      const JB = !isNaN(ZB) && 0 !== ZB && Fo(TB, IB.currency);
      let oB = null;
      return IB.buyButtonText ? oB = IB.buyButtonText : JB ? (oB = ZB, IB.sell && (oB = -1 * ZB), oB = oB.toString()) : 0 === ZB ? oB = "Free" : IB.isRewardedAd && (oB = "Watch ad"), (0, vZ.L)(oB) || " " === oB ? null : (0, hB.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [JB && (0, hB.jsx)("div", {
          style: {
            color: TB[IB.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, hB.jsx)(so, {
            iconName: TB[IB.currency].icon
          })
        }), (0, hB.jsx)("div", {
          className: "BuyItemCost",
          children: (0, hB.jsx)(bT.e, {
            text: oB
          })
        })]
      })
    }

    function Uo(BB) {
      let {
        item: IB,
        currInput: ZB,
        updateInput: JB,
        onSubmit: oB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)(), kB = (0, TB.useRef)(null);
      if ((0, TB.useEffect)((() => {
          const BB = kB.current;
          BB && BB.value !== ZB && document.activeElement !== BB && (BB.value = null !== ZB && void 0 !== ZB ? ZB : "")
        }), [ZB]), !IB.userInput) return null;
      let cB = IB.userInput;
      if (yB.featureFlags.sanitizeShopInput && "text" === IB.userInput.type && (cB = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === cB.type || "number" === cB.type) {
        var nB, zB;
        console.assert(void 0 !== ZB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(IB)}`);
        const BB = "text" === cB.type && cB.wordCharsOnly;
        return (0, hB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, hB.jsx)(CB.c, {
            className: "ShopItemUserInputText",
            placeholderText: vB(cB.placeholderText),
            defaultValue: ZB,
            domRef: kB,
            onValueChange: (IB, ZB) => {
              !0 === BB && (IB = (0, DT.cb)(IB)), kB.current.value = IB, JB(IB)
            },
            onEnter: oB,
            type: cB.type
          }, (null !== (nB = cB.initialValue) && void 0 !== nB ? nB : "") + (null !== (zB = cB.placeholderText) && void 0 !== zB ? zB : ""))
        })
      }
      if ("dropdown" === cB.type) {
        console.assert(void 0 !== ZB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(IB)}`);
        const BB = cB.autoSubmit;
        return (0, hB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, hB.jsx)(MI.c, {
            options: cB.dropdownOptions.map((BB => (0, fT.i)(BB))),
            value: ZB,
            onChange: IB => {
              let {
                value: ZB
              } = IB;
              JB(ZB), BB && oB(ZB)
            }
          })
        })
      }
      return "player" === cB.type ? (0, hB.jsx)(Wo, {
        userInput: cB,
        currInput: ZB,
        updateInput: JB
      }) : "color" === cB.type ? (0, hB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, hB.jsx)("input", {
          type: "color",
          value: ZB,
          onChange: BB => {
            JB(BB.target.value)
          }
        })
      }) : null
    }

    function Wo(BB) {
      let {
        userInput: IB,
        currInput: ZB,
        updateInput: TB
      } = BB;
      const JB = (0, RI.j)("players"),
        oB = (0, RI.j)("hiddenPlayerNames"),
        GB = (0, fT.l)(JB.ids, JB.localId, IB);
      return (0, hB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, hB.jsx)(MI.c, {
          options: GB.map((BB => {
            const {
              name: IB
            } = JB.byId[BB];
            return {
              value: BB,
              label: null === IB ? "" : (0, ET.e)(IB, oB)
            }
          })),
          value: ZB,
          onChange: BB => {
            let {
              value: IB
            } = BB;
            TB(IB)
          }
        })
      })
    }

    function Co(BB) {
      let {
        ids: IB
      } = BB;
      return IB
    }

    function Qo(BB) {
      let {
        localId: IB
      } = BB;
      return IB
    }

    function so(BB) {
      let {
        iconName: IB
      } = BB;
      return UB.gameBridge.lookup("isItemName", IB) ? (0, hB.jsx)(tT.e, {
        itemName: IB,
        amount: 1
      }) : (0, hB.jsx)(vB.d, {
        name: IB,
        className: "2x"
      })
    }
    var wo = ZB(1711);
    const Oo = (0, ZB(1469).g)((BB => BB.PadLobbyShortcuts)),
      Yo = (0, TB.lazy)((() => Promise.resolve().then((() => ZB(4829))).then((BB => ({
        default: BB.Lobbyleaderboard
      }))))),
      io = (0, TB.lazy)((() => ZB.e(223).then((() => ZB(41101))).then((BB => ({
        default: BB.LobbyManageView
      })))));

    function po(BB) {
      let {
        show: IB
      } = BB;
      return IB ? (0, hB.jsx)(ao, {}) : null
    }

    function ao() {
      const BB = (0, ST.e)();
      return (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(Oo, {}), (0, hB.jsxs)(TB.Suspense, {
          fallback: (0, hB.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, hB.jsx)(QB.d, {})
          }),
          children: [BB && (0, hB.jsx)(io, {
            leaderboard: (0, hB.jsx)(Yo, {})
          }), !BB && (0, hB.jsx)(Yo, {})]
        })]
      })
    }
    var Ho = ZB(1627),
      Mo = ZB(3186),
      jo = ZB(1805),
      Po = ZB(3235),
      Ro = ZB(2832),
      ro = ZB(1559),
      mo = ZB(1519),
      Xo = ZB(3166),
      Lo = ZB(3183),
      eo = ZB(2438);
    const uo = "storeRecentGiftRecipients",
      fo = new Map;

    function Ao() {
      try {
        const BB = nZ.m.getItem(uo);
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.name) && BB.name.length > 0)).map((BB => ({
          name: BB.name,
          cosmetics: BB.cosmetics && "object" === typeof BB.cosmetics ? BB.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function to(BB) {
      var IB;
      const [ZB, JB] = (0, TB.useState)(""), [oB, GB] = (0, TB.useState)("search"), [vB, kB] = (0, TB.useState)(null), [cB, nB] = (0, TB.useState)(null), hB = (0, TB.useRef)(null), zB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => () => {
        hB.current && clearTimeout(hB.current)
      }), []);
      const FB = null !== (IB = null === vB || void 0 === vB ? void 0 : vB.name) && void 0 !== IB ? IB : null;

      function NB() {
        hB.current && (clearTimeout(hB.current), hB.current = null)
      }(0, TB.useEffect)((() => {
        if (null === FB || BB === pB.NULL_USER_CONTEXT) return;
        const IB = FB.toLowerCase();
        if (IB === BB.getPlayerName().toLowerCase()) return void nB({
          name: FB,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ZB = fo.get(IB);
        if (ZB) return void nB({
          name: FB,
          result: ZB
        });
        let TB = !1;
        return async function(BB, IB) {
          try {
            const ZB = await (0, pB.postJsonWithMetricsCookiesAndJsonResponse)(`${gI.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: IB
            }, {
              retries: 1
            }, BB.getMetricsCookies());
            if ("boolean" !== typeof(null === ZB || void 0 === ZB ? void 0 : ZB.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ZB)}`);
            return ZB
          } catch (ZB) {
            return console.error("Failed to look up gift recipient:", ZB), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(BB, FB).catch((BB => (console.error("Gift recipient lookup failed:", BB), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((BB => {
          !0 !== BB.giftRecipientFound && "store:giftRecipientLookupFailed" === BB.giftRecipientError || fo.set(IB, BB), TB || nB({
            name: FB,
            result: BB
          })
        })), () => {
          TB = !0
        }
      }), [FB, BB]);
      const gB = (0, TB.useMemo)((() => {
        const BB = ZB.trim();
        if (!BB) return {
          status: "none"
        };
        if (!vB || vB.name !== BB || (null === cB || void 0 === cB ? void 0 : cB.name) !== vB.name) return {
          status: "pending",
          name: BB
        };
        const IB = cB.result;
        return !1 === IB.giftRecipientFound ? {
          status: "error",
          name: vB.name,
          error: IB.giftRecipientError
        } : {
          status: "found",
          name: IB.giftRecipientName,
          ownedPacks: IB.giftRecipientOwnedPacks,
          hasSuperRank: IB.giftRecipientHasSuperRank,
          isSubscriber: IB.giftRecipientIsSubscriber
        }
      }), [ZB, vB, cB]);
      (0, TB.useEffect)((() => {
        "found" === gB.status && "typed" === (null === vB || void 0 === vB ? void 0 : vB.source) && zB.current !== gB.name && (zB.current = gB.name, (0, II.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [gB, vB]);
      const qB = (null === cB || void 0 === cB ? void 0 : cB.name) === (null === vB || void 0 === vB ? void 0 : vB.name) ? null === cB || void 0 === cB ? void 0 : cB.result : null,
        yB = !0 === (null === qB || void 0 === qB ? void 0 : qB.giftRecipientFound) ? qB.giftRecipientCosmetics : null;
      return {
        query: ZB,
        via: oB,
        recipient: gB,
        recipientCosmetics: yB,
        type: function(BB) {
          JB(BB), GB("search"), NB();
          const IB = BB.trim();
          IB ? hB.current = setTimeout((() => {
            kB({
              name: IB,
              source: "typed"
            })
          }), 400) : kB(null)
        },
        choose: function(BB, IB) {
          NB(), JB(BB), GB("typed" === IB ? "search" : "prefilled" === IB ? "prefilled" : "suggestion"), kB({
            name: BB,
            source: IB
          }), "typed" !== IB && "prefilled" !== IB && (0, II.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: IB
          })
        },
        clear: function() {
          NB(), JB(""), GB("search"), kB(null)
        },
        recordGift: function(BB, IB) {
          ! function(BB) {
            fo.delete(BB.toLowerCase())
          }(BB), nB((ZB => {
            if (!ZB || ZB.name.toLowerCase() !== BB.toLowerCase() || !0 !== ZB.result.giftRecipientFound || "superRank" === IB) return ZB;
            const TB = ZB.result.giftRecipientOwnedPacks;
            return {
              ...ZB,
              result: {
                ...ZB.result,
                giftRecipientOwnedPacks: TB.includes(IB) ? TB : [...TB, IB]
              }
            }
          }))
        }
      }
    }
    var bo = ZB(2433),
      xo = ZB(4838),
      Eo = ZB(256),
      Do = ZB(3281);
    const Ko = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Vo = ZB(2384),
      So = ZB(650),
      BG = ZB(2460),
      IG = ZB(2739);

    function ZG(BB) {
      let {
        cosmetics: IB
      } = BB;
      return (0, hB.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, hB.jsx)(BG.b, {
          cosmetics: IB
        })
      })
    }

    function TG(BB, IB) {
      var ZB, TB;
      const JB = null !== (ZB = BB.friend) && void 0 !== ZB ? ZB : {
        isError: !1,
        name: BB.name,
        ranks: [],
        cosmetics: null !== (TB = BB.cosmetics) && void 0 !== TB ? TB : {},
        nameColour: So.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return IB ? {
        ...JB,
        cosmetics: IB
      } : JB
    }

    function JG(BB) {
      let {
        pending: IB
      } = BB;
      return (0, hB.jsx)("span", {
        className: "StoreRecipientLoader",
        children: IB && (0, hB.jsx)(QB.d, {})
      })
    }

    function oG(BB) {
      var IB;
      let {
        selfName: ZB,
        giftRecipient: JB,
        suggestionsVersion: kB,
        pulseSignal: nB,
        disabled: zB
      } = BB;
      const {
        t: FB
      } = (0, GB.G)(), NB = (0, lB.j)(), gB = (0, TB.useRef)(null), qB = (0, TB.useRef)(null), {
        query: UB,
        via: WB,
        recipient: dB,
        recipientCosmetics: QB
      } = JB, sB = (0, eo.m)(UB), wB = (0, TB.useMemo)((() => {
        const BB = yB.featureFlags.useSocialFeatures ? NB.friends.filter((BB => !BB.isError)) : [];
        return (0, eo.i)({
          onlineFriends: (0, lB.e)(BB),
          recentRecipients: Ao(),
          friends: BB,
          selfName: ZB,
          max: 8
        })
      }), [NB.friends, ZB, kB]), OB = UB.trim().toLowerCase(), YB = "search" !== WB && OB ? wB.find((BB => BB.name.toLowerCase() === OB)) : void 0, iB = YB && "prefilled" === WB ? [YB, ...wB.filter((BB => BB !== YB))] : wB, pB = "" !== OB && !YB, aB = pB ? UB : "", HB = iB.length > 0;
      (0, TB.useEffect)((() => {
        gB.current && gB.current.value !== aB && (gB.current.value = aB)
      }), [aB]), (0, TB.useEffect)((() => {
        gB.current && (gB.current.disabled = zB)
      }), [zB, nB]);
      const MB = (0, TB.useRef)(0);

      function PB() {
        "self" !== sB && (0, II.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), JB.clear()
      }

      function RB(BB) {
        var IB, ZB;
        if (zB) return;
        if (" " === BB.key || "Enter" === BB.key) return BB.preventDefault(), void BB.currentTarget.click();
        const TB = Array.from(null !== (IB = null === (ZB = qB.current) || void 0 === ZB ? void 0 : ZB.querySelectorAll("[role=radio]")) && void 0 !== IB ? IB : []),
          JB = TB.indexOf(BB.currentTarget);
        let oB;
        "ArrowRight" === BB.key || "ArrowDown" === BB.key ? oB = TB[(JB + 1) % TB.length] : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? oB = TB[(JB - 1 + TB.length) % TB.length] : "Home" === BB.key ? oB = TB[0] : "End" === BB.key && (oB = TB[TB.length - 1]), oB && (BB.preventDefault(), oB.focus(), oB.click())
      }(0, TB.useEffect)((() => {
        var BB;
        nB > MB.current && !zB && (MB.current = nB, null === (BB = gB.current) || void 0 === BB || BB.focus())
      }), [nB, zB]);
      const rB = "self" === sB,
        mB = null !== (IB = null === YB || void 0 === YB ? void 0 : YB.name) && void 0 !== IB ? IB : null,
        XB = "error" === dB.status ? dB.error : null,
        LB = "store:giftRecipientLookupFailed" === XB;
      return (0, hB.jsxs)("div", {
        className: oB()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: zB,
          StoreRecipientStripNoChips: !HB
        }),
        children: [(0, hB.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: FB("store:buyingFor")
        }), (0, hB.jsxs)("div", {
          ref: qB,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": FB("store:whoIsItFor"),
          children: [(0, hB.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": rB,
            tabIndex: zB || !rB && null !== mB ? -1 : 0,
            className: oB()("StoreRecipientMe", {
              StoreRecipientChecked: rB
            }),
            onClick: () => {
              zB || PB()
            },
            onKeyDown: RB,
            children: [(0, hB.jsx)(vB.d, {
              name: "user"
            }), " ", FB("store:me")]
          }), HB && (0, hB.jsx)("div", {
            className: "StoreRecipientChips",
            children: iB.map((BB => {
              const IB = BB === YB;
              return (0, hB.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": IB,
                tabIndex: !zB && IB ? 0 : -1,
                title: BB.name,
                className: oB()("StoreRecipientChip", {
                  StoreRecipientChecked: IB
                }),
                onClick: () => {
                  zB || function(BB) {
                    "gift" !== sB && (0, II.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), JB.choose(BB.name, BB.kind)
                  }(BB)
                },
                onKeyDown: RB,
                children: (0, hB.jsx)(IG.f, {
                  playerSocialPreview: TG(BB, IB ? QB : null),
                  opensProfileCard: !1,
                  isFriend: null !== BB.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== BB.friend,
                  status: null === BB.friend ? null : void 0,
                  trailing: IB ? (0, hB.jsx)(JG, {
                    pending: "pending" === dB.status
                  }) : void 0
                })
              }, BB.name)
            }))
          })]
        }), (0, hB.jsxs)("div", {
          className: oB()("StoreRecipientSearch", {
            StoreRecipientChecked: pB,
            StoreRecipientSearchPulse: nB > 0 && !pB,
            StoreRecipientSearchError: null !== XB && !LB
          }),
          onClick: () => {
            var BB;
            null === (BB = gB.current) || void 0 === BB || BB.focus()
          },
          children: [pB && "found" === dB.status && QB && (0, hB.jsx)(ZG, {
            cosmetics: QB
          }), !(pB && "found" === dB.status && QB) && (0, hB.jsx)(vB.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, hB.jsx)(CB.c, {
            className: "StoreRecipientSearchInput",
            domRef: gB,
            placeholderText: FB("store:searchName"),
            defaultValue: aB,
            maxLength: jB.j,
            onValueChange: function(BB) {
              "gift" !== sB && BB.trim() && (0, II.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), JB.type(BB)
            },
            onEnter: () => {
              var BB;
              const IB = null === (BB = gB.current) || void 0 === BB ? void 0 : BB.value.trim();
              IB && JB.choose(IB, "typed")
            },
            blurOnEnter: !0
          }), pB && (0, hB.jsx)(JG, {
            pending: "pending" === dB.status
          }), pB && (0, hB.jsx)("div", {
            ...(0, cB.ab)({
              disabled: zB
            }),
            "aria-label": FB("store:clearRecipient"),
            title: FB("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: BB => {
              BB.stopPropagation(), zB || PB()
            },
            children: (0, hB.jsx)(vB.d, {
              name: "xmark"
            })
          })]
        }, nB), XB && (0, hB.jsx)("div", {
          className: oB()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: LB
          }),
          role: "status",
          children: FB(XB)
        })]
      })
    }
    var GG = ZB(2430),
      vG = ZB(2348),
      kG = ZB(3741),
      cG = ZB(3286),
      nG = ZB(2392);
    const hG = ZB.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function zG() {
      (0, nG.i)(hG, {
        lowPriority: !1
      })
    }

    function FG(BB) {
      let {
        onBack: IB,
        cta: ZB,
        recipient: JB,
        afterCta: oB
      } = BB;
      const {
        t: kB
      } = (0, GB.G)(), [nB, zB] = (0, TB.useState)("starting"), FB = (0, TB.useRef)(null), NB = (0, bI.d)(), gB = (0, TB.useRef)(null), qB = (0, TB.useCallback)((() => {
        const BB = FB.current;
        null !== BB.error && BB.load();
        const IB = BB.play();
        gB.current = IB, IB.catch((BB => {
          (0, kG.c)("Failed to play Super Rank video", BB), NB.current && gB.current === IB && zB("failed")
        }))
      }), [NB]);
      return (0, TB.useEffect)((() => {
        const BB = FB.current;
        let IB;

        function ZB() {
          clearTimeout(IB), IB = setTimeout(qB, 3e3)
        }
        return qB(), BB.addEventListener("ended", ZB), () => {
          clearTimeout(IB), BB.removeEventListener("ended", ZB)
        }
      }), [qB]), (0, hB.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, hB.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, hB.jsx)(cB.c, {
            className: "StoreDetailBackButton",
            onClick: IB,
            padBack: !0,
            children: kB("general:back")
          }), (0, hB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, hB.jsx)(vB.d, {
              name: "bolt"
            }), " ", kB("homePage:superRank")]
          }), JB]
        }), (0, hB.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, hB.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, hB.jsx)("video", {
              ref: FB,
              src: `${gI.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: hG,
              muted: !0,
              playsInline: !0,
              controls: "playing" === nB,
              onPlaying: () => {
                zB("playing")
              },
              onError: () => {
                zB("failed")
              }
            }), ("failed" === nB || "loading" === nB) && (0, hB.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, hB.jsx)(cB.g, {
                ariaLabel: kB("general:play"),
                loading: "loading" === nB,
                onClick: () => {
                  zB("loading"), qB()
                },
                touchPressOn: "pointerup",
                children: (0, hB.jsx)(vB.d, {
                  name: "play"
                })
              })
            })]
          }), (0, hB.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, hB.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, hB.jsx)(cG.e, {})
            }), (0, hB.jsxs)("div", {
              className: "StoreTileActions",
              children: [ZB, oB]
            })]
          })]
        })]
      })
    }
    var NG = ZB(2754),
      gG = ZB(3704),
      qG = ZB(3267),
      yG = ZB(3269);
    const UG = [So.t.yellow, So.t.green, So.t.aqua, So.t.blue, So.t.purple, So.t.red];

    function WG(BB) {
      return "needsRecipient" === BB || "lookingUp" === BB || "gift" === BB || "recipientOwns" === BB || "recipientSharesOwned" === BB || "recipientSubscribed" === BB
    }

    function dG(BB) {
      const {
        onKeyDown: IB,
        ...ZB
      } = (0, cB.ab)();
      return {
        ...ZB,
        "aria-label": BB,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && (null === IB || void 0 === IB || IB(BB))
        }
      }
    }

    function CG(BB) {
      let {
        text: IB
      } = BB;
      return (0, hB.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(IB).map(((BB, IB) => (0, hB.jsx)("span", {
          style: {
            color: UG[IB % UG.length]
          },
          children: BB
        }, IB)))
      })
    }
    const QG = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function sG(BB) {
      let {
        state: IB,
        item: ZB,
        price: TB,
        busy: JB,
        highlight: kB = !1,
        onAct: nB,
        onNeedRecipient: zB,
        onLogin: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = "superRank" === ZB ? RB.n.product.days : null, qB = BB => null === gB ? NB(BB ? "general:gift" : "general:buy") : NB(BB ? "store:giftDays" : "store:buyDays", {
        days: gB
      }), yB = (BB, IB) => {
        const ZB = (0, hB.jsxs)(hB.Fragment, {
          children: [null === BB && (0, hB.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== BB && (0, hB.jsx)("span", {
            className: "StoreCtaLabel",
            title: BB,
            children: BB
          })]
        });
        return null !== gB ? (0, hB.jsxs)(hB.Fragment, {
          children: [IB && (0, hB.jsx)("span", {
            className: "StoreCtaIcon",
            children: IB
          }), ZB, (0, hB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, hB.jsx)(vG.e, {
              amount: TB
            })]
          })]
        }) : (0, hB.jsxs)(hB.Fragment, {
          children: [(0, hB.jsxs)("span", {
            className: "StoreCtaLead",
            children: [ZB, "\xb7"]
          }), (0, hB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [IB, (0, hB.jsx)(vG.e, {
              amount: TB
            })]
          })]
        })
      };
      let UB;
      switch (IB) {
        case "pending":
          UB = (0, hB.jsx)(cB.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: yB(null)
          });
          break;
        case "login":
          UB = (0, hB.jsx)(cB.p, {
            className: "StoreCtaButton",
            onClick: FB,
            children: yB(qB(!1))
          });
          break;
        case "owned":
          UB = (0, hB.jsx)(cB.k, {
            className: "StoreCtaButton",
            onClick: () => {
              wB.d.set({
                openEverythingMenuName: yI.q.CUSTOMISATION
              })
            },
            children: (0, hB.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, hB.jsx)(vB.d, {
                name: "shirt"
              }), " ", NB("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          UB = (0, hB.jsx)(cB.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, hB.jsx)("span", {
              className: "StoreCtaLabel",
              children: NB(QG[IB])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          UB = (0, hB.jsx)(cB.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === IB || null === TB,
            loading: "lookingUp" === IB || JB,
            onClick: nB,
            analyticsClick: {
              id: "store.gift",
              value: ZB
            },
            children: yB(qB(!0), eo.c)
          });
          break;
        case "buy":
        case "recharge":
          UB = (0, hB.jsx)(cB.p, {
            className: "StoreCtaButton",
            loading: JB,
            disabled: null === TB,
            onClick: nB,
            analyticsClick: {
              id: "store.buy",
              value: ZB
            },
            children: yB(qB(!1))
          })
      }
      return (0, hB.jsx)("div", {
        className: oB()("StoreCta", {
          StoreCtaHighlight: kB,
          StoreCtaLabelFirst: null !== gB
        }),
        onClick: BB => {
          BB.stopPropagation(), "needsRecipient" === IB && zB()
        },
        children: UB
      })
    }

    function wG() {
      const {
        t: BB
      } = (0, GB.G)();
      return (0, hB.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, hB.jsxs)("li", {
          children: [(0, hB.jsx)(vB.d, {
            name: "check"
          }), (0, hB.jsx)(CG, {
            text: BB("store:colourfulNames")
          })]
        }), (0, hB.jsxs)("li", {
          children: [(0, hB.jsx)(vB.d, {
            name: "check"
          }), BB("store:perkCapes")]
        }), (0, hB.jsxs)("li", {
          children: [(0, hB.jsx)(vB.d, {
            name: "check"
          }), BB("store:perkNoAdverts")]
        }), (0, hB.jsxs)("li", {
          children: [(0, hB.jsx)(vB.d, {
            name: "check"
          }), BB("store:perkFriends", {
            count: (0, SB.c)(["super"])
          })]
        })]
      })
    }

    function OG(BB) {
      let {
        daysLeft: IB,
        totalDays: ZB,
        urgent: TB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), vB = ZB > 0 ? Math.min(1, Math.max(.03, IB / ZB)) : 1;
      return (0, hB.jsxs)("div", {
        className: oB()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: TB
        }),
        children: [(0, hB.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === IB ? JB("store:oneDayLeft") : JB("store:daysLeft", {
            days: IB
          })
        }), (0, hB.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, hB.jsx)("i", {
            style: {
              width: 100 * vB + "%"
            }
          })
        })]
      })
    }

    function YG(BB) {
      var IB;
      let {
        state: ZB,
        urgent: TB,
        daysLeft: JB,
        totalDays: kB,
        recipientHasSuperRank: cB,
        busy: nB,
        highlight: zB,
        onOpen: FB,
        onAct: NB,
        onNeedRecipient: gB,
        onLogin: qB
      } = BB;
      const {
        t: yB
      } = (0, GB.G)(), UB = WG(ZB), {
        days: WB
      } = RB.n.product, dB = yB("store:recipientHasSuperRank", {
        giftDays: WB
      }), CB = null === (IB = KB("subscribed" === ZB)) || void 0 === IB ? void 0 : IB.text;
      return (0, hB.jsxs)("div", {
        className: oB()("StoreTile StoreSuperRankTile", {
          StoreTileGift: UB,
          StoreSuperRankTileUrgent: "recharge" === ZB && TB,
          StoreSuperRankTileWithChip: cB,
          StoreSuperRankTileGiftReady: "gift" === ZB
        }),
        ...dG(yB("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: zG,
        onFocus: zG,
        onClick: FB,
        children: [(0, hB.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Vo.f})`
          }
        }), UB && (0, hB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, hB.jsxs)("div", {
          className: "StoreTileContent",
          children: [cB && (0, hB.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: dB,
            children: dB
          }), (0, hB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, hB.jsx)(vB.d, {
              name: "bolt"
            }), " ", yB("homePage:superRank")]
          }), UB && (0, hB.jsx)("div", {
            className: "StoreTilePitch",
            children: yB("store:giftPitch", {
              days: WB
            })
          }), "recharge" === ZB && (0, hB.jsx)(OG, {
            daysLeft: JB,
            totalDays: kB,
            urgent: TB
          }), CB && (0, hB.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, hB.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: CB
            })
          }), (0, hB.jsx)(wG, {}), (0, hB.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, hB.jsx)(sG, {
              state: ZB,
              item: "superRank",
              price: RB.n.price,
              busy: nB,
              highlight: zB,
              onAct: NB,
              onNeedRecipient: gB,
              onLogin: qB
            }), "needsRecipient" === ZB && (0, hB.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: yB("store:pickRecipientFirst")
            }), "recharge" === ZB && TB && (0, hB.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === JB ? yB("store:endsInOneDay") : yB("store:endsInDays", {
                days: JB
              })
            })]
          })]
        })]
      })
    }
    const iG = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function pG(BB) {
      var IB;
      let {
        pack: ZB,
        state: JB,
        busy: kB,
        onOpen: cB,
        onAct: nB,
        onNeedRecipient: zB,
        onLogin: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = Ho.d[ZB], qB = Xo.n[ZB], yB = (0, Vo.m)(ZB), UB = (0, TB.useRef)(null);
      (0, qG.h)(ZB, UB);
      const WB = WG(JB),
        dB = null !== (IB = gB.displayName) && void 0 !== IB ? IB : ZB,
        CB = (0, gG.d)((() => {
          (0, NG.c)();
          const BB = (0, qG.e)(ZB);
          void 0 !== BB && (0, nG.i)((0, qG.b)(BB))
        })),
        [QB] = (0, TB.useState)(Do.i);
      return (0, hB.jsxs)("div", {
        className: oB()("StoreTile StorePackTile", iG[gB.tier], {
          StorePackTileOwned: "owned" === JB,
          StorePackTileRecipientOwns: "recipientOwns" === JB,
          StoreTileGift: WB
        }),
        ...dG(dB),
        ref: UB,
        "data-store-item": ZB,
        onClick: cB,
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || QB || CB.start()
        },
        onPointerLeave: CB.cancel,
        children: [qB && (0, hB.jsx)(qB, {}), (0, hB.jsx)("div", {
          className: "StorePackCharacters",
          children: yB.map((BB => (0, hB.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Vo.i)(BB)})`
            }
          }, BB)))
        }), (0, hB.jsx)("div", {
          className: "StoreTileScrim"
        }), WB && (0, hB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, hB.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, hB.jsx)("div", {
            className: "StoreTileTitle",
            children: dB
          }), (0, hB.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, hB.jsx)(yG.d, {
              tier: gB.tier
            }), " \xb7 ", NB("store:itemCount", {
              count: (0, GG.d)(ZB)
            }), "owned" === JB && (0, hB.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, hB.jsx)(vB.d, {
                name: "check"
              }), " ", NB("general:owned")]
            })]
          }), (0, hB.jsx)(sG, {
            state: JB,
            item: ZB,
            price: (0, RB.g)(ZB),
            busy: kB,
            onAct: nB,
            onNeedRecipient: zB,
            onLogin: FB
          })]
        })]
      })
    }
    var aG = ZB(3244),
      HG = ZB(1620),
      MG = ZB(1522),
      jG = ZB(3726);

    function PG() {
      return (0, hB.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var RG = ZB(1399),
      rG = ZB(1630),
      mG = ZB(34230);

    function XG(BB) {
      let {
        character: IB,
        drawn: ZB,
        onDrawn: JB
      } = BB;
      const GB = (0, TB.useRef)(null),
        vB = (0, mG.f)(IB);
      return (0, hB.jsx)("div", {
        className: oB()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: ZB
        }),
        children: (0, hB.jsx)(TB.Suspense, {
          fallback: null,
          children: (0, hB.jsx)(NG.b, {
            ref: GB,
            framing: "store",
            turntableFromYaw: ZB ? vB.yaw : null,
            onReady: () => {
              var BB, ZB;
              null === (BB = GB.current) || void 0 === BB || BB.setOrbit(vB), null === (ZB = GB.current) || void 0 === ZB || ZB.setAllCosmetics(rG.d[IB].cosmetics)
            },
            onDrawn: JB
          })
        })
      })
    }
    const LG = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      eG = new Set(["wildSpirits"]);

    function uG(BB) {
      var IB;
      let {
        tile: ZB,
        design: JB,
        canGoLive: kB,
        live: cB,
        busy: nB,
        highlight: zB,
        onLiveStart: FB,
        onLiveEnd: NB,
        onOpen: gB,
        onAct: qB,
        onNeedRecipient: yB,
        onLogin: UB
      } = BB;
      const {
        t: WB
      } = (0, GB.G)(), {
        pack: dB,
        state: CB
      } = ZB, QB = Ho.d[dB], sB = (0, Ho.f)(dB), wB = (0, Vo.k)(dB), OB = Xo.n[wB], YB = eG.has(wB), {
        tier: iB
      } = QB, pB = "legendary" === iB || "mythic" === iB, aB = (0, TB.useRef)(null);
      (0, RG.e)(aB, "epic" === iB || pB || YB);
      const [HB, jB] = (0, TB.useState)(!1);
      return !cB && HB && jB(!1), (0, hB.jsxs)("div", {
        ref: aB,
        className: oB()("StoreCharacterCard", `StoreCharacterCard${JB}`, LG[iB], {
          StoreCharacterCardOwned: "owned" === CB || "recipientOwns" === CB,
          StoreCharacterCardGift: WG(CB),
          StoreCharacterCardItem: void 0 === sB
        }),
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || !kB || cB || void 0 === sB || FB()
        },
        onPointerLeave: NB,
        children: [(0, hB.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: OB && (0, hB.jsx)(OB, {
            simple: !0
          })
        }), pB && (0, hB.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, hB.jsxs)(MB.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, HG.f)({
            kind: "pack",
            pack: dB
          }),
          "data-store-item": dB,
          onClick: BB => {
            (0, MG.c)(BB) && (BB.preventDefault(), gB())
          },
          children: [(0, hB.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, hB.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, hB.jsx)("div", {
              className: oB()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: HB
              }),
              style: {
                backgroundImage: `url(${(0,Vo.o)(dB)})`
              }
            }), cB && void 0 !== sB && (0, hB.jsx)(XG, {
              character: sB,
              drawn: HB,
              onDrawn: () => {
                jB(!0)
              }
            })]
          }), (0, hB.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (IB = QB.displayName) && void 0 !== IB ? IB : dB
          }), (0, hB.jsx)(yG.d, {
            tier: iB,
            className: "StoreCharacterTier"
          })]
        }), (0, hB.jsx)("div", {
          className: "StoreCharacterScrim"
        }), YB && (0, hB.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, hB.jsx)(PG, {})
        }), "owned" === CB && (0, hB.jsx)("span", {
          className: "StoreCharacterOwned",
          title: WB("general:owned"),
          "aria-label": WB("general:owned"),
          children: (0, hB.jsx)(vB.d, {
            name: "check"
          })
        }), (0, hB.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, hB.jsx)(sG, {
            state: CB,
            item: dB,
            price: (0, RB.g)(dB),
            busy: nB,
            highlight: zB,
            onAct: qB,
            onNeedRecipient: yB,
            onLogin: UB
          })
        })]
      })
    }

    function fG(BB) {
      let {
        tiles: IB,
        busy: ZB,
        highlightItem: JB,
        onOpen: oB,
        onAct: GB,
        onNeedRecipient: vB,
        onLogin: kB
      } = BB;
      const cB = (0, jG.n)("storeCharacterCardFoil"),
        nB = (0, jG.n)("storeCharacterCardSpotlight"),
        zB = cB ? "Foil" : nB ? "Spotlight" : "Showcase",
        [FB] = (0, TB.useState)(Do.i),
        [NB, gB] = (0, TB.useState)(null);
      return (0, hB.jsx)("div", {
        className: "StoreCharacterGrid",
        children: IB.map((BB => (0, hB.jsx)(uG, {
          tile: BB,
          design: zB,
          canGoLive: !FB,
          live: NB === BB.pack,
          busy: ZB,
          highlight: JB === BB.pack,
          onLiveStart: () => {
            gB(BB.pack)
          },
          onLiveEnd: () => {
            gB((IB => IB === BB.pack ? null : IB))
          },
          onOpen: () => {
            oB(BB.pack)
          },
          onAct: () => {
            GB(BB.pack)
          },
          onNeedRecipient: vB,
          onLogin: () => {
            kB(BB.pack)
          }
        }, BB.pack)))
      })
    }
    var lG = ZB(34243);

    function AG(BB) {
      let {
        title: IB
      } = BB;
      return (0, hB.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, hB.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: IB
        })
      })
    }

    function tG(BB) {
      let {
        mountAtOnce: IB,
        children: ZB
      } = BB;
      const JB = (0, TB.useRef)(null),
        [oB, GB] = (0, TB.useState)(IB),
        vB = (0, lG.c)();
      return (0, TB.useLayoutEffect)((() => {
        const BB = JB.current;
        BB && BB.getBoundingClientRect().top < BB.parentElement.getBoundingClientRect().bottom && GB(!0)
      }), []), oB || vB ? (0, hB.jsx)(hB.Fragment, {
        children: ZB
      }) : (0, hB.jsx)("div", {
        ref: JB
      })
    }

    function bG(BB) {
      let {
        layout: IB,
        mountAtOnce: ZB,
        bundleGift: TB,
        superRankTotalDays: JB,
        busy: oB,
        highlightItem: vB,
        onOpen: kB,
        onAct: cB,
        onNeedRecipient: nB,
        onLogin: zB,
        dailyDropTile: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = IB.packs.filter((BB => void 0 === (0, Ho.f)(BB.pack) && !(0, Ho.h)(BB.pack))), qB = IB.packs.filter((BB => void 0 !== (0, Ho.f)(BB.pack))), yB = IB.packs.filter((BB => (0, Ho.h)(BB.pack)));
      return (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(aG.e, {
          className: "StoreSuperGems",
          gift: TB,
          highlightSku: vB,
          leadingTile: FB
        }), (0, hB.jsx)(AG, {
          title: NB("store:rank")
        }), (0, hB.jsx)(YG, {
          state: IB.superRank.state,
          urgent: IB.superRank.urgent,
          daysLeft: IB.superRankDaysLeft,
          totalDays: JB,
          recipientHasSuperRank: IB.recipientHasSuperRank,
          busy: oB,
          highlight: "superRank" === vB,
          onOpen: () => {
            kB("superRank")
          },
          onAct: () => {
            cB("superRank")
          },
          onNeedRecipient: nB,
          onLogin: () => {
            zB("superRank")
          }
        }), (0, hB.jsxs)(tG, {
          mountAtOnce: ZB,
          children: [(0, hB.jsx)(AG, {
            title: NB("store:bundles")
          }), (0, hB.jsx)("div", {
            className: "StorePackGrid",
            children: gB.map((BB => (0, hB.jsx)(pG, {
              pack: BB.pack,
              state: BB.state,
              busy: oB,
              onOpen: () => {
                kB(BB.pack)
              },
              onAct: () => {
                cB(BB.pack)
              },
              onNeedRecipient: nB,
              onLogin: () => {
                zB(BB.pack)
              }
            }, BB.pack)))
          }), (0, hB.jsxs)(tG, {
            mountAtOnce: ZB,
            children: [(0, hB.jsx)(AG, {
              title: NB("store:characters")
            }), (0, hB.jsx)(fG, {
              tiles: qB,
              busy: oB,
              highlightItem: vB,
              onOpen: kB,
              onAct: cB,
              onNeedRecipient: nB,
              onLogin: zB
            }), yB.length > 0 && (0, hB.jsxs)(hB.Fragment, {
              children: [(0, hB.jsx)(AG, {
                title: NB("store:premiumItems")
              }), (0, hB.jsx)(fG, {
                tiles: yB,
                busy: oB,
                highlightItem: vB,
                onOpen: kB,
                onAct: cB,
                onNeedRecipient: nB,
                onLogin: zB
              })]
            })]
          })]
        })]
      })
    }

    function xG(BB) {
      let {
        state: IB,
        mode: ZB,
        giftName: TB,
        busy: JB,
        highlight: oB,
        purchaseError: vB,
        onBack: kB,
        onChooseRecipient: nB,
        onAct: zB,
        onLogin: FB
      } = BB;
      const {
        t: NB
      } = (0, GB.G)(), gB = KB("gift" !== ZB);
      return (0, hB.jsx)(FG, {
        onBack: kB,
        recipient: "gift" === ZB && (0, hB.jsxs)(hB.Fragment, {
          children: [TB && (0, hB.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: NB("store:giftFor", {
              name: TB
            }),
            children: [eo.c, " ", NB("store:giftFor", {
              name: TB
            })]
          }), !TB && (0, hB.jsxs)("div", {
            ...(0, cB.ab)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: nB,
            children: [eo.c, " ", NB("store:chooseRecipient")]
          })]
        }),
        cta: (0, hB.jsx)(sG, {
          state: IB,
          item: "superRank",
          price: RB.n.price,
          busy: JB,
          highlight: oB,
          onAct: zB,
          onNeedRecipient: nB,
          onLogin: FB
        }),
        afterCta: (0, hB.jsxs)(hB.Fragment, {
          children: [gB && (0, hB.jsx)("span", {
            className: "StoreTileNote",
            children: gB.text
          }), (null === gB || void 0 === gB ? void 0 : gB.manageUrl) && (0, hB.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: gB.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: NB("payments:manageSubscription")
          }), vB && (0, hB.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: NB(vB)
          })]
        })
      })
    }
    var EG = ZB(152);
    const DG = EG.j("kind", [EG.K({
      kind: EG.t("refused"),
      heldTierId: EG.eb(),
      until: EG.G()
    }), EG.K({
      kind: EG.t("refund"),
      tierId: EG.eb(),
      refundedMs: EG.G(),
      forfeitedMs: EG.G(),
      premiumCurrency: EG.G()
    }), EG.K({
      kind: EG.t("none")
    })]);
    async function KG(BB) {
      const IB = await (0, pB.postJsonWithMetricsCookiesAndJsonResponse)(`${gI.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: BB
      }, {
        retries: 1
      });
      return DG.parse(IB)
    }
    var VG = ZB(3213),
      SG = ZB(3247);

    function Bv(BB, IB) {
      const ZB = Math.max(1, Math.round(IB / XB.l));
      return [1 === ZB ? `${BB}OneDay` : BB, {
        days: ZB.toLocaleString()
      }]
    }

    function Iv(BB) {
      let {
        price: IB
      } = BB;
      const {
        t: ZB
      } = (0, GB.G)();
      return (0, hB.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, hB.jsx)(wG, {}), (0, hB.jsx)("div", {
          className: "SmallTextLight",
          children: ZB("payments:subscriptionRenewsMonthly", {
            price: IB
          })
        }), (0, hB.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, hB.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: ZB("homePage:termsOfService")
          }), (0, hB.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: ZB("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Zv() {
      const BB = (0, eB.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && BB && (0, eB.subscriptionsSold)() ? (0, hB.jsx)(Tv, {}) : null
    }

    function Tv() {
      const {
        t: BB
      } = (0, GB.G)(), {
        userContext: IB
      } = (0, NB.d)(), {
        purchaseUnderWay: ZB,
        notice: JB,
        subscribe: oB
      } = (0, VG.c)(), [vB, kB] = (0, TB.useState)(null), [nB, zB] = (0, TB.useState)(0), [FB, gB] = (0, TB.useState)(!1), qB = (0, TB.useRef)(!0), UB = IB !== pB.NULL_USER_CONTEXT, WB = null !== vB && vB.loadedFor === IB ? vB.offer : null, dB = null === JB || void 0 === JB ? void 0 : JB.pendingIntentId, CB = (0, TB.useRef)(dB);

      function QB() {
        zB((BB => BB + 1))
      }
      async function sB(BB) {
        gB(!1), await oB(BB), qB.current && QB()
      }
      if ((0, TB.useEffect)((() => (qB.current = !0, () => {
          qB.current = !1
        })), []), (0, TB.useEffect)((() => {
          void 0 !== CB.current && void 0 === dB && QB(), CB.current = dB
        }), [dB]), (0, TB.useEffect)((() => {
          if (!UB) return;
          let BB = !1;
          return gB(!1), async function() {
            const {
              offering: BB
            } = await (0, EB.getBillingClient)().getOfferings("superRankPage"), IB = null === BB || void 0 === BB ? void 0 : BB.packages.find(Mo.isPricedPackage);
            return void 0 === IB ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: IB,
              preview: await KG(IB.productId)
            }
          }().catch((BB => (console.error("Billing: loading the Super Rank subscription or its preview failed:", BB), {
            kind: "loadFailed"
          }))).then((ZB => {
            BB || kB((BB => "loadFailed" === ZB.kind && (null === BB || void 0 === BB ? void 0 : BB.loadedFor) === IB ? BB : {
              loadedFor: IB,
              offer: ZB
            }))
          })), () => {
            BB = !0
          }
        }), [IB, UB, nB]), null === WB) return null;
      if ("loaded" !== WB.kind) return (0, hB.jsx)(SG.j, {
        notice: {
          kind: "error",
          key: "unavailable" === WB.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: wB,
        preview: OB
      } = WB;
      if ("refused" === OB.kind) return (0, hB.jsx)(SG.j, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(OB.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const YB = (0, aG.h)(wB),
        iB = (0, yB.isMobileApp)() && (0, hB.jsx)(Iv, {
          price: YB
        });
      if (FB && "refund" === OB.kind) {
        const {
          refundedMs: IB,
          forfeitedMs: TB,
          premiumCurrency: JB
        } = OB, oB = TB + (0 === JB ? IB : 0), [GB, vB] = Bv("payments:subscribeRefundsGemRank", IB), [kB, nB] = Bv("payments:subscribeForfeitsGemRank", oB);
        return (0, hB.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, hB.jsx)("div", {
            children: BB("payments:subscribeEndsGemRank")
          }), JB > 0 && (0, hB.jsx)("div", {
            children: BB(GB, {
              ...vB,
              amount: JB.toLocaleString()
            })
          }), oB > 0 && (0, hB.jsx)("div", {
            children: BB(kB, nB)
          }), (0, hB.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, hB.jsx)(cB.k, {
              onClick: () => {
                gB(!1)
              },
              children: BB("general:cancel")
            }), (0, hB.jsx)(cB.p, {
              onClick: () => {
                sB(wB)
              },
              loading: ZB,
              children: BB("payments:subscribeContinue", {
                price: YB
              })
            })]
          }), iB]
        })
      }
      return (0, hB.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, hB.jsx)(SG.j, {
          notice: JB,
          className: "SmallTextBold"
        }), (0, hB.jsx)(SG.e, {
          className: "SmallTextBold"
        }), (0, hB.jsx)(cB.p, {
          onClick: () => {
            "refund" === OB.kind ? gB(!0) : sB(wB)
          },
          disabled: void 0 !== dB,
          loading: ZB,
          children: BB("payments:subscribeToSuperRank", {
            price: YB
          })
        }), iB]
      })
    }
    var Jv = ZB(2702);

    function ov(BB) {
      let {
        state: IB,
        view: ZB,
        claiming: JB,
        onOpen: vB
      } = BB;
      const {
        t: nB
      } = (0, GB.G)(), zB = (0, TB.useRef)(null), FB = "ready" === ZB.kind;
      (0, RG.e)(zB, FB);
      const NB = (0, DI.f)(IB);
      return (0, hB.jsxs)("div", {
        ref: zB,
        className: oB()("DailyDropTile", {
          DailyDropTileReady: FB
        }),
        children: [FB && (0, hB.jsx)(kB.b, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, hB.jsx)("div", {
          className: "DailyDropTileTitle",
          children: nB("dailyDrop:name")
        }), (0, hB.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, hB.jsx)(Jv.c, {
            className: "DailyDropTileBlock"
          }), (0, hB.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, hB.jsx)("span", {
              children: nB("dailyDrop:collected", {
                count: IB.collected.length,
                total: IB.total
              })
            }), null !== NB && (0, hB.jsx)("span", {
              className: "DailyDropTileOdds",
              children: nB("dailyDrop:odds", {
                percent: NB.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === ZB.kind && (0, hB.jsx)(cB.p, {
          className: "DailyDropTileOpen",
          onClick: vB,
          loading: JB,
          children: nB("dailyDrop:open")
        }), "waiting" === ZB.kind && (0, hB.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: nB("dailyDrop:nextIn", {
            count: ZB.hours
          })
        })]
      })
    }
    var Gv = ZB(2326);
    const vv = 32;

    function kv(BB) {
      let {
        worn: IB,
        Ho: ZB,
        Mo: JB,
        className: kB
      } = BB;
      const {
        t: cB
      } = (0, GB.G)(), nB = (0, TB.useRef)(null), [zB, FB] = (0, TB.useState)(null), [NB, gB] = (0, TB.useState)(!1);
      async function qB() {
        var BB;
        const IB = nB.current;
        if (!IB) return;
        const TB = null === (BB = IB.getDevTools()) || void 0 === BB ? void 0 : BB.canvas();
        let oB = null;
        try {
          oB = TB ? function(BB) {
            if (0 === BB.width || 0 === BB.height) return null;
            const IB = document.createElement("canvas");
            IB.width = vv, IB.height = vv;
            const ZB = IB.getContext("2d", {
              willReadFrequently: !0
            });
            if (!ZB) return null;
            ZB.drawImage(BB, 0, 0, vv, vv);
            const {
              data: TB
            } = ZB.getImageData(0, 0, vv, vv);
            for (let JB = 3; JB < TB.length; JB += 4)
              if (TB[JB] > 0) return BB.toDataURL("image/png");
            return null
          }(TB) : null
        } catch (vB) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", vB)
        }
        null === oB && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), FB(null === oB ? {
          kind: "head"
        } : {
          kind: "still",
          src: oB
        }), IB.updateCosmetic(ZB, JB);
        const GB = new Promise((BB => {
          setTimeout(BB, 1e4)
        }));
        await Promise.race([IB.ensureReadyForCapture(ZB), GB]).catch((BB => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", BB)
        })), nB.current === IB && gB(!0)
      }
      return (0, hB.jsxs)("div", {
        className: oB()("DailyDropRevealFigures", kB),
        children: [(0, hB.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, hB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === zB || void 0 === zB ? void 0 : zB.kind) && (0, hB.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: zB.src,
              alt: "",
              draggable: !1
            }), "head" === (null === zB || void 0 === zB ? void 0 : zB.kind) && (0, hB.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, hB.jsx)(BG.b, {
                cosmetics: IB
              })
            }), null === zB && (0, hB.jsx)(QB.d, {})]
          }), (0, hB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: cB("dailyDrop:before")
          })]
        }), (0, hB.jsx)(vB.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, hB.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, hB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, hB.jsx)("div", {
              className: oB()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: NB
              }),
              children: (0, hB.jsx)(TB.Suspense, {
                fallback: null,
                children: (0, hB.jsx)(NG.b, {
                  ref: nB,
                  onReady: () => {
                    var BB, ZB;
                    null === (BB = nB.current) || void 0 === BB || BB.resetCamera(), null === (ZB = nB.current) || void 0 === ZB || ZB.setAllCosmetics(IB)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      qB()
                    }))
                  }
                })
              })
            }), !NB && (0, hB.jsx)(QB.d, {})]
          }), (0, hB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: cB("dailyDrop:after")
          })]
        })]
      })
    }
    var cv = ZB(1919);
    const nv = "dailyDropReminderAsked_";

    function hv(BB) {
      return async function(BB) {
        if (BB.remindersOn || (0, wB.f)(wB.d.get("gameState"))) return null;
        const IB = await pB.userContextManager.getCurrentUserContext(),
          ZB = nv + IB.whamm;
        if (null !== nZ.m.getItem(ZB)) return null;
        const [TB, JB] = await Promise.all([(0, tI.f)().catch((BB => (console.error("Couldn't tell whether this device can take push notifications:", BB), null))), Fv()]);
        if (null === TB && !JB) return null;
        return {
          askedKey: ZB,
          requester: TB
        }
      }(BB).catch((BB => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", BB), null)))
    }

    function zv(BB, IB) {
      nZ.m.setItem(BB.askedKey, !0), (0, DI.o)("daily_drop.remind", IB ? "yes" : "no"), IB && async function(BB) {
        const IB = (0, DI.r)({
            remindersOn: !0
          }),
          ZB = null === BB ? Promise.resolve() : BB(),
          [TB, JB] = await Promise.allSettled([IB, ZB]);
        "rejected" === TB.status && console.error("Failed to turn on Lucky Skin Block reminders:", TB.reason);
        "rejected" === JB.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", JB.reason);
        "rejected" !== TB.status && "rejected" !== JB.status || cv.f.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(BB.requester)
    }

    function Fv() {
      return (0, AI.b)().then((BB => BB.app + BB.browser + BB.msnPlay > 0), (BB => (console.error("Couldn't tell where push notifications reach this account:", BB), !0)))
    }
    const Nv = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      gv = {
        opening: 900,
        shrinking: 700
      };

    function qv(BB) {
      let {
        drop: IB,
        onClose: ZB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), {
        userContext: kB
      } = (0, NB.d)(), {
        state: nB,
        view: zB
      } = (0, DI.u)(), [FB, gB] = (0, TB.useState)("closed"), [qB] = (0, TB.useState)((() => ({
        ...kB.getPlayerCosmetics()
      }))), [yB] = (0, TB.useState)((() => (0, DI.i)(IB, qB))), [UB, WB] = (0, TB.useState)(!1), [dB, CB] = (0, TB.useState)(!1), [QB] = (0, TB.useState)((() => null === nB ? Promise.resolve(null) : hv(nB))), [sB, OB] = (0, TB.useState)(null), YB = (0, bI.d)(), {
        gameState: iB
      } = (0, wB.o)(["gameState"]);
      async function pB() {
        const BB = await QB;
        YB.current && (null === BB ? ZB() : (OB(BB), gB("remind")))
      }

      function aB(BB) {
        null !== sB && zv(sB, BB), ZB()
      }(0, TB.useEffect)((() => {
        const BB = gv[FB];
        if (void 0 === BB) return;
        const IB = setTimeout((() => {
          gB(Nv[FB])
        }), BB);
        return () => {
          clearTimeout(IB)
        }
      }), [FB]);
      const HB = JB(`dailyDrop:kind_${yB.Ho}`),
        MB = nB && JB("dailyDrop:collected", {
          count: nB.collected.length,
          total: nB.total
        }),
        jB = "revealed" === FB || "shrinking" === FB,
        PB = "equip" !== FB && "remind" !== FB;
      return (0, hB.jsx)(XT.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === FB ? () => {
          aB(!1)
        } : ZB,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, hB.jsxs)("div", {
          className: oB()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === FB,
            DailyDropRevealShrinking: "shrinking" === FB,
            DailyDropRevealFiguresShown: "shrinking" === FB || "equip" === FB || "remind" === FB
          }),
          children: [(0, hB.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, hB.jsx)(kv, {
              className: "DailyDropRevealStageFigures",
              worn: qB,
              Ho: yB.Ho,
              Mo: yB.Mo
            }), ("closed" === FB || "opening" === FB) && (0, hB.jsx)(Jv.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === FB
            }), jB && (0, hB.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, hB.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Gv.h)(yB.Ho,yB.Mo).previewTex}.png`,
                alt: HB,
                draggable: !1
              })
            })]
          }), PB && (0, hB.jsxs)(hB.Fragment, {
            children: [(0, hB.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, hB.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: jB ? HB : JB("dailyDrop:name")
              }), "closed" === FB && (0, hB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: JB("dailyDrop:tapToOpen")
              }), "revealed" === FB && (0, hB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: JB("dailyDrop:tapToContinue")
              })]
            }), (0, hB.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": JB("closed" === FB ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                gB(Nv[FB])
              }
            })]
          }), "equip" === FB && (0, hB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, hB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: HB
            }), (0, hB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: JB("dailyDrop:equipQuestion")
            }), (0, hB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, hB.jsx)(cB.g, {
                className: "DailyDropRevealButton",
                disabled: UB,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, DI.o)("daily_drop.not_now", IB), pB()
                },
                children: JB("dailyDrop:notNow")
              }), (0, hB.jsx)(cB.g, {
                className: "DailyDropRevealButton",
                loading: UB,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, DI.o)("daily_drop.equip", IB), WB(!0), CB(!1);
                    try {
                      await (0, DI.e)(kB, yB.Ho, yB.Mo)
                    } catch (BB) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", BB), WB(!1), void CB(!0)
                    }
                    await pB()
                  }()
                },
                children: JB("dailyDrop:equip")
              })]
            }), dB && (0, hB.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: JB("dailyDrop:equipFailed")
            }), !(0, wB.f)(iB) && (0, hB.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: UB,
              onClick: () => {
                var BB;
                (0, DI.o)("daily_drop.customise", IB), BB = yB.Ho, kZ.l.Gq(jT, BB), wB.d.set({
                  openEverythingMenuName: yI.q.CUSTOMISATION
                }), ZB()
              },
              children: [JB("dailyDrop:customise"), " ", (0, hB.jsx)(vB.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), MB && (0, hB.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [MB, "waiting" === (null === zB || void 0 === zB ? void 0 : zB.kind) && ` \xb7 ${JB("dailyDrop:nextInInline",{count:zB.hours})}`]
            })]
          }), "remind" === FB && (0, hB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, hB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: JB("dailyDrop:remindTitle")
            }), (0, hB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: JB("dailyDrop:remindSubtitle")
            }), (0, hB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, hB.jsx)(cB.g, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  aB(!1)
                },
                children: JB("dailyDrop:remindNo")
              }), (0, hB.jsx)(cB.g, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  aB(!0)
                },
                children: JB("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function yv(BB, IB) {
      const {
        t: ZB
      } = (0, GB.G)(), JB = function(BB, IB) {
        const {
          state: ZB,
          view: JB
        } = (0, DI.u)(), [oB, GB] = (0, TB.useState)(!1), [vB, kB] = (0, TB.useState)(!1), [cB, nB] = (0, TB.useState)(null), hB = (0, TB.useRef)(null), zB = (0, TB.useRef)(!1), FB = IB && "ready" === (null === JB || void 0 === JB ? void 0 : JB.kind);
        (0, TB.useEffect)((() => {
          BB ? FB && !zB.current && (zB.current = !0, (0, DI.o)("daily_drop.shown", "tile")) : zB.current = !1
        }), [BB, FB]), (0, TB.useEffect)((() => {
          BB || (yB(), kB(!1))
        }), [BB]);
        const NB = BB && null === cB && !(0, DI.n)(JB);
        (0, TB.useEffect)((() => {
          NB && wB.d.set({
            openEverythingMenuName: yI.q.CUSTOMISATION
          })
        }), [NB]);
        const gB = (0, TB.useRef)(!1),
          qB = (0, TB.useRef)(BB);

        function yB() {
          null !== hB.current && (hB.current = null, nB(null))
        }
        return qB.current = BB, {
          state: ZB,
          view: JB,
          claiming: oB,
          claimFailed: vB,
          reveal: cB,
          open: async function() {
            if (!gB.current) {
              gB.current = !0, GB(!0), kB(!1);
              try {
                const {
                  state: BB,
                  drop: IB
                } = await (0, DI.c)();
                if (null === BB || null === IB) return;
                if (!qB.current) return;
                (0, DI.o)("daily_drop.open", IB), hB.current = {
                  state: BB,
                  drop: IB
                }, nB(hB.current)
              } catch (BB) {
                console.error("Failed to claim the Lucky Skin Block", BB), qB.current && kB(!0)
              } finally {
                gB.current = !1, GB(!1)
              }
            }
          },
          closeReveal: yB
        }
      }(BB, IB);
      return {
        shown: (0, DI.n)(JB.view) || null !== JB.reveal,
        tile: JB.state && JB.view && (0, hB.jsx)(ov, {
          state: JB.state,
          view: JB.view,
          claiming: JB.claiming,
          onOpen: JB.open
        }),
        claimFailed: JB.claimFailed && (0, hB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: ZB("dailyDrop:claimFailed")
        }),
        reveal: JB.reveal && (0, hB.jsx)(qv, {
          drop: JB.reveal.drop,
          onClose: JB.closeReveal
        })
      }
    }

    function Uv(BB) {
      let {
        show: IB
      } = BB;
      const ZB = yv(IB, IB);
      return IB && ZB.shown ? (0, hB.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [ZB.claimFailed, ZB.tile && (0, hB.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: ZB.tile
        }), ZB.reveal]
      }) : null
    }
    const Wv = {
      kind: "board"
    };
    let dv = !1;

    function Cv(BB) {
      return "found" === BB.status || "error" === BB.status && "store:giftRecipientLookupFailed" === BB.error ? BB.name : null
    }(0, LB.u)(Mo.prefetchBillingOfferings);
    const Qv = (0, TB.memo)((function(BB) {
      var IB;
      let {
        show: JB
      } = BB;
      const {
        t: vB
      } = (0, GB.G)(), {
        userContext: kB
      } = (0, NB.d)(), cB = (0, eB.usePurchasesAllowed)(), nB = kB !== pB.NULL_USER_CONTEXT, zB = to(kB), [FB, gB] = (0, qB.b)(), {
        page: yB,
        urlMode: UB,
        goTo: WB
      } = (0, bo.g)(), dB = function(BB) {
        return "superRank" === BB.kind ? "superRank" : "pack" === BB.kind ? BB.pack : null
      }(yB), {
        openEverythingMenuName: CB,
        gameState: QB
      } = (0, wB.o)(["openEverythingMenuName", "gameState"]), sB = null !== CB;
      ! function(BB, IB) {
        const [JB] = (0, TB.useState)(Do.i), [oB, GB] = (0, TB.useState)(!1);
        JB && IB && !oB && GB(!0);
        const vB = (0, sT.x)(),
          kB = JB && oB && BB && !vB;
        (0, TB.useEffect)((() => {
          if (!kB) return;
          let BB = null,
            IB = null,
            TB = null;
          const JB = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, EB.getBillingClient)().purchaseUnderWay,
            oB = () => {
              var ZB;
              null === (ZB = TB) || void 0 === ZB || ZB(), TB = null, null !== BB && (clearTimeout(BB), BB = null), null !== IB && (clearTimeout(IB), IB = null)
            },
            GB = () => {
              (0, xo.n)(!1), (0, xo.k)(!1), oB(), BB = setTimeout((() => {
                BB = null, TB = (0, Eo.c)((() => {
                  TB = null, JB() ? GB() : ((0, xo.n)(!0), IB = setTimeout((() => {
                    IB = null, TB = (0, Eo.c)((() => {
                      TB = null, JB() ? GB() : (0, xo.k)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ZB(4829))).then((BB => {
                    BB.startBackgroundGameSetup()
                  }), (BB => {
                    console.warn("Background game setup: its chunk failed to load", BB)
                  })))
                }))
              }), 2e3)
            };
          for (const ZB of Ko) window.addEventListener(ZB, GB, {
            capture: !0,
            passive: !0
          });
          return GB(), () => {
            for (const BB of Ko) window.removeEventListener(BB, GB, {
              capture: !0
            });
            oB(), (0, xo.n)(!1), (0, xo.k)(!1)
          }
        }), [kB])
      }(JB && sB, "pack" === yB.kind);
      const OB = "landingPage" === QB;
      (0, TB.useEffect)((() => {
        sB && (0, Mo.prefetchBillingOfferings)()
      }), [sB]), (0, TB.useEffect)((() => {
        sB && !JB && OB && (0, Vo.q)()
      }), [sB, JB, OB]);
      const [YB, iB] = (0, TB.useState)(0), [aB, HB] = (0, TB.useState)(null), [MB, jB] = (0, TB.useState)(null), [PB, rB] = (0, TB.useState)(null), [mB, XB] = (0, TB.useState)(null), uB = (0, TB.useRef)(null), fB = (0, TB.useRef)(null), lB = (0, TB.useRef)(null), AB = (0, TB.useRef)(!1), tB = (0, LB.D)(), bB = (0, TB.useRef)(0), xB = (0, TB.useRef)(!1);

      function DB() {
        iB((BB => BB + 1))
      }(0, TB.useEffect)((() => {
        if (JB) {
          if (dv = !0, (0, LB.l)(), tB && tB.seq !== bB.current) {
            var BB;
            bB.current = tB.seq, "loginResume" !== tB.source && (0, LB.z)();
            const IB = (0, LB.d)(tB);
            UB || WB(IB), XB(null !== (BB = tB.highlight) && void 0 !== BB ? BB : null), jB(null), "gift" === tB.mode && tB.giftRecipientName ? zB.choose(tB.giftRecipientName, "prefilled") : "current" !== tB.mode && zB.clear(), "gift" !== tB.mode || tB.giftRecipientName || DB(), (0, II.reportAnalyticsClick)({
              id: "store.open",
              value: tB.source
            })
          } else xB.current || (0, II.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          xB.current = !0
        } else xB.current = !1
      }), [JB, tB]), (0, TB.useEffect)((() => {
        if (!mB) return;
        const BB = setTimeout((() => {
          XB(null)
        }), 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [mB]), (0, TB.useLayoutEffect)((() => {
        const BB = uB.current;
        if (!JB || !BB) return fB.current = null, void(lB.current = null);
        var IB;
        if (dB) fB.current = dB, null === (IB = BB.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === IB || IB.focus();
        else if (fB.current) {
          const IB = lB.current;
          null !== IB && (BB.scrollTop = IB);
          const ZB = BB.querySelector(`[data-store-item="${fB.current}"]`);
          if (ZB) {
            const TB = ZB.getBoundingClientRect(),
              JB = BB.getBoundingClientRect();
            ZB.focus({
              preventScroll: null !== IB && TB.bottom > JB.top && TB.top < JB.bottom
            })
          }
          fB.current = null
        }
      }), [dB, JB]), (0, TB.useEffect)((() => {
        jB(null)
      }), [zB.query]), (0, TB.useEffect)((() => {
        if (!PB) return;
        const BB = setTimeout((() => {
          rB(null)
        }), 8e3);
        return () => {
          clearTimeout(BB)
        }
      }), [PB]);
      const KB = kB.superRankInfo,
        VB = kB.isLoggedIn() || (0, eB.guestsMayBuy)(),
        SB = kB.getOwnedCosmeticPacks(),
        BI = (0, eo.m)(zB.query),
        ZI = (0, eo.e)({
          mode: BI,
          loggedIn: nB ? VB : null,
          superRankInfo: KB,
          now: Date.now(),
          ownedPacks: SB,
          packs: Ho.o,
          recipient: zB.recipient
        });
      (0, TB.useEffect)((() => {
        if (!VB || !JB) return;
        const BB = (0, LB.z)(),
          IB = BB && (0, eo.l)(BB, Ho.o);
        BB && IB && ((0, II.reportAnalyticsClick)({
          id: "store.login_resume",
          value: BB.item
        }), (0, LB.n)(IB))
      }), [VB, JB]);
      const TI = (0, eo.o)({
        superRankDaysLeft: ZI.superRankDaysLeft,
        openedThisSession: dv || JB,
        seenNewItems: (0, LB.h)()
      });
      (0, TB.useEffect)((() => {
        (0, LB.v)(TI)
      }), [TI]);
      const JI = "self" === BI,
        oI = yv(JB, JB && JI && "board" === yB.kind);
      if (!JB || !cB) return null;
      const GI = gB > FB && FB <= 700,
        vI = !GI && gB <= 420,
        kI = "gift" === BI ? Cv(zB.recipient) : null,
        cI = null !== aB;

      function nI(BB) {
        (0, Po.b)(BB, "gift" === BI ? zB.query.trim() : null)
      }

      function hI(BB, IB) {
        (0, II.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${IB?"gift":"self"}:${BB}`
        }), IB && (zB.recordGift(IB.name, BB), zI(IB))
      }

      function zI(BB) {
        ! function(BB) {
          try {
            nZ.m.setItem(uo, (0, eo.w)(Ao(), BB))
          } catch {}
        }({
          name: BB.name,
          cosmetics: BB.cosmetics
        }), WB(Wv), rB((IB => {
          var ZB;
          return {
            name: BB.name,
            seq: (null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.seq) && void 0 !== ZB ? ZB : 0) + 1
          }
        }))
      }
      async function FI(BB) {
        var IB, ZB;
        if (AB.current) return;
        if (!VB) return void nI(BB);
        jB(null), XB(null);
        const TB = "gift" === BI ? {
          name: Cv(zB.recipient),
          cosmetics: zB.recipientCosmetics
        } : null;
        if (TB && !TB.name) return void DB();
        const JB = "superRank" === BB ? RB.n.id : (0, RB.e)(BB);
        AB.current = !0;
        const oB = await (0, Lo.d)(JB, null !== (IB = null === TB || void 0 === TB ? void 0 : TB.name) && void 0 !== IB ? IB : null);
        if (AB.current = !1, !oB) return;
        HB(BB);
        const GB = await Ro.e.purchase(JB, null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null);
        HB(null), GB ? jB(GB) : (hI(BB, TB), TB || (await (0, ro.flushClientAnalyticsEvents)(), (0, jo.refreshWithoutConfirmation)("superRank" === BB ? "/super-rank-welcome" : `/pack-welcome/${BB}`)))
      }
      const NI = oB()("Store", {
        StoreGift: "gift" === BI,
        StorePortrait: GI,
        StoreCompact: vI
      });
      if ("pack" === yB.kind) {
        const BB = yB.pack,
          IB = ZI.packs.find((IB => IB.pack === BB));
        return (0, hB.jsx)("div", {
          ref: uB,
          className: "CosmeticShopContainer",
          children: (0, hB.jsx)(Xo.g, {
            pack: BB,
            onBack: () => {
              WB(Wv)
            },
            onPurchased: IB => {
              hI(BB, IB ? {
                name: IB,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === BI && kI && IB && (0, hB.jsxs)(hB.Fragment, {
              children: [(0, hB.jsx)(sG, {
                state: IB.state,
                item: BB,
                price: (gI = BB, "superRank" === gI ? RB.n.price : (0, RB.g)(gI)),
                busy: cI,
                onAct: () => {
                  FI(BB)
                },
                onNeedRecipient: () => {
                  WB(Wv), DB()
                },
                onLogin: () => {
                  nI(BB)
                },
                highlight: mB === BB
              }), MB && (0, hB.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: vB(MB)
              })]
            }),
            ownedPacks: SB,
            startAsGift: "gift" === BI,
            initialGiftRecipient: "gift" === BI ? null !== kI && void 0 !== kI ? kI : zB.query.trim() : "",
            highlightCta: mB === BB
          }, BB)
        })
      }
      var gI;
      return "superRank" === yB.kind ? (0, hB.jsx)("div", {
        ref: uB,
        className: oB()(NI, "StoreDetailView"),
        children: (0, hB.jsx)(xG, {
          state: ZI.superRank.state,
          mode: BI,
          giftName: kI,
          busy: cI,
          highlight: "superRank" === mB,
          purchaseError: MB,
          onBack: () => {
            WB(Wv)
          },
          onChooseRecipient: () => {
            WB(Wv), DB()
          },
          onAct: () => {
            FI("superRank")
          },
          onLogin: () => {
            nI("superRank")
          }
        })
      }) : (0, hB.jsxs)("div", {
        ref: uB,
        className: NI,
        onScroll: BB => {
          lB.current = BB.currentTarget.scrollTop
        },
        children: [(0, hB.jsx)("div", {
          className: "StoreTopRow",
          children: (0, hB.jsx)(oG, {
            selfName: nB ? kB.getPlayerName() : "",
            giftRecipient: zB,
            suggestionsVersion: null !== (IB = null === PB || void 0 === PB ? void 0 : PB.seq) && void 0 !== IB ? IB : 0,
            pulseSignal: YB,
            disabled: cI || !nB
          })
        }), PB && (0, hB.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            rB(null)
          },
          children: [(0, hB.jsx)(mo.d, {
            showSignal: PB.seq
          }), eo.c, " ", vB("store:giftSent", {
            name: PB.name
          })]
        }, PB.seq), !PB && MB && (0, hB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: vB(MB)
        }), JI && oI.claimFailed, (0, hB.jsx)(bG, {
          layout: ZI,
          mountAtOnce: null !== fB.current,
          bundleGift: "gift" === BI ? {
            recipientName: kI,
            lookingUp: "pending" === zB.recipient.status,
            busy: cI,
            onNeedRecipient: DB,
            onSent: BB => {
              (0, II.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), zI({
                name: BB,
                cosmetics: zB.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, eo.r)(KB),
          busy: cI,
          highlightItem: mB,
          onOpen: function(BB) {
            (0, II.reportAnalyticsClick)({
              id: "store.item_open",
              value: BB
            }), WB((0, LB.e)(BB))
          },
          onAct: FI,
          onNeedRecipient: DB,
          onLogin: nI,
          dailyDropTile: JI && oI.tile
        }), "gift" !== BI && (0, hB.jsx)(Zv, {}), oI.reveal]
      })
    }));
    var sv = ZB(2824),
      wv = ZB(8946),
      Ov = ZB(8779),
      Yv = ZB(2887),
      iv = ZB(2722),
      pv = ZB(2782),
      av = ZB(2792),
      Hv = ZB(2797),
      Mv = ZB(2874),
      jv = ZB(2861),
      Pv = ZB(2446),
      Rv = ZB(2469),
      rv = ZB(2462),
      mv = ZB(2116),
      Xv = ZB(2801),
      Lv = ZB(2473);

    function ev(BB) {
      let {
        show: IB
      } = BB;
      return IB ? (0, hB.jsx)(uv, {}) : null
    }

    function uv() {
      const {
        t: BB
      } = (0, GB.G)(), {
        followsLeader: IB
      } = (0, iv.f)(), {
        loading: ZB,
        friends: JB,
        requests: kB,
        invites: nB
      } = (0, lB.j)(), {
        userContext: zB
      } = (0, NB.d)(), [FB, gB] = (0, TB.useState)(Lv.i);
      (0, TB.useEffect)((() => {
        (0, Lv.b)()
      }), []);
      const qB = kB.map((BB => BB.name)),
        {
          state: yB,
          recentRequesters: UB
        } = (0, jv.l)(),
        WB = new Map([...("loaded" === yB.status ? yB.recentPlayers : []).map((BB => [BB.preview.name, BB])), ...UB.map((BB => [BB.name, BB]))]),
        dB = (0, TB.useRef)(null),
        [sB, wB] = (0, TB.useState)(""),
        [OB, YB] = (0, TB.useState)("Enter"),
        [iB, pB] = (0, TB.useState)(null);

      function aB() {
        sB && (YB("Loading"), (0, rv.e)(sB, "social_menu").then((BB => {
          if (dB.current) switch (BB.kind) {
            case "sent":
              YB("Success");
              break;
            case "becameFriends":
              YB("BecameFriends");
              break;
            case "failed":
              pB(BB.message), YB("Error")
          }
        })))
      }
      return (0, TB.useEffect)((() => {
        if ("Enter" === OB || "Loading" === OB) return;
        const BB = setTimeout((() => {
          dB.current.value = "", wB(""), YB("Enter")
        }), "Success" === OB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [OB]), (0, hB.jsx)("div", {
        className: "SocialMenu",
        children: (0, hB.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, hB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, hB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, hB.jsx)(Hv.d, {
                label: BB("socialBar:addFriend")
              }), (0, hB.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, hB.jsxs)("div", {
                  className: oB()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${OB}`]: !0
                  }),
                  children: ["Loading" === OB && (0, hB.jsx)(QB.d, {}), "Success" === OB && (0, hB.jsx)(vB.d, {
                    name: "check"
                  }), "BecameFriends" === OB && (0, hB.jsx)(hB.Fragment, {
                    children: BB("socialBar:nowFriends", {
                      playerName: sB
                    })
                  }), "Error" === OB && iB && (0, hB.jsx)(hB.Fragment, {
                    children: BB(iB.translationKey, iB.params)
                  })]
                }), (0, hB.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, hB.jsx)(CB.c, {
                    className: "PlayerSearchInput",
                    placeholderText: BB("socialBar:enterPlayerName"),
                    domRef: dB,
                    onValueChange: BB => {
                      wB((0, jB.t)(BB)), dB.current.value = (0, jB.t)(BB)
                    },
                    onEnter: () => {
                      sB && (0, II.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), aB()
                    }
                  }), (0, hB.jsxs)(cB.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      aB()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, hB.jsx)(vB.d, {
                      name: "user-plus"
                    }), " ", BB("socialBar:sendRequest")]
                  })]
                })]
              }), (0, hB.jsx)(Xv.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), nB.length > 0 && (0, hB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, hB.jsx)(Hv.d, {
                label: BB("socialBar:invites"),
                meta: nB.length
              }), nB.map((IB => (0, hB.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, hB.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, hB.jsx)(Pv.c, {
                    invite: IB
                  })
                }), (0, hB.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, hB.jsx)(Pv.d, {
                    invite: IB
                  })
                }), (0, hB.jsx)(cB.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Rv.h)(IB)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${IB.destination.kind}`
                  },
                  children: BB("general:join")
                }), (0, hB.jsx)(VB.e, {
                  tooltipInner: (0, hB.jsx)(hB.Fragment, {
                    children: BB("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, hB.jsx)(cB.k, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === FB || void 0 === FB ? void 0 : FB.kind) && FB.inviteId === IB.id,
                    onClick: () => {
                      lB.c.declineInvite(IB.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${IB.destination.kind}`
                    },
                    children: (0, hB.jsx)(vB.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, IB.id)))]
            }), (0, hB.jsxs)("div", {
              className: oB()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ZB && 0 === kB.length
              }),
              children: [(0, hB.jsx)(Hv.d, {
                label: (0, hB.jsxs)(hB.Fragment, {
                  children: [(0, hB.jsx)(vB.d, {
                    name: mv.g
                  }), " ", BB("socialBar:requests")]
                }),
                meta: (0, hB.jsxs)(hB.Fragment, {
                  children: [kB.length, kB.length === SB.n && (0, hB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), ZB && (0, hB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, hB.jsx)(QB.d, {})
              }), !ZB && 0 === kB.length && (0, hB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriendRequests")
              }), !ZB && kB.length > 0 && (0, hB.jsx)("div", {
                className: "PlayerRows",
                children: (0, hB.jsx)(PJ.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [kB],
                  children: kB.map(((IB, ZB) => {
                    const TB = WB.get(IB.name);
                    return (0, hB.jsxs)(av.e, {
                      playerSocialPreview: IB,
                      zIndex: kB.length - ZB,
                      padDefaultFocus: (0, Lv.e)(FB, IB.name, ZB),
                      status: TB && (0, hB.jsx)(Mv.d, {
                        gameNameWithVariation: TB.gameNameWithVariation,
                        isPrivateLobby: TB.isPrivateLobby
                      }),
                      children: [(0, hB.jsx)(VB.e, {
                        tooltipInner: (0, hB.jsx)(hB.Fragment, {
                          children: BB("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, hB.jsx)(cB.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            gB((0, Lv.c)(qB, ZB)), (0, rv.d)(IB.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, hB.jsx)(vB.d, {
                            name: "check"
                          })
                        })
                      }), (0, hB.jsx)(VB.e, {
                        tooltipInner: (0, hB.jsx)(hB.Fragment, {
                          children: BB("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, hB.jsx)(cB.k, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            gB((0, Lv.c)(qB, ZB)), (0, rv.d)(IB.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, hB.jsx)(vB.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${IB.name}_${IB.isError}`)
                  }))
                })
              })]
            }), (0, hB.jsx)(Mv.k, {})]
          }), (0, hB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, hB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, hB.jsx)(Hv.d, {
                label: BB("socialBar:party")
              }), (0, hB.jsx)(pv.b, {})]
            }), (0, hB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, hB.jsx)(Hv.d, {
                label: (0, hB.jsxs)(hB.Fragment, {
                  children: [(0, hB.jsx)(vB.d, {
                    name: mv.d
                  }), " ", BB("socialBar:friends")]
                }),
                meta: (0, hB.jsxs)(hB.Fragment, {
                  children: [JB.length, JB.length >= (0, SB.c)(zB.getPlayerRanks()) && (0, hB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), ZB && (0, hB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, hB.jsx)(QB.d, {})
              }), !ZB && 0 === JB.length && (0, hB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriends")
              }), !ZB && JB.length > 0 && (0, hB.jsx)("div", {
                className: "PlayerRows",
                children: (0, hB.jsx)(PJ.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [JB],
                  children: JB.map(((BB, ZB) => (0, hB.jsx)(av.e, {
                    playerSocialPreview: BB,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: BB => {
                      lB.c.removeFriendFromState(BB)
                    },
                    zIndex: JB.length - ZB,
                    children: (0, hB.jsx)(av.d, {
                      friend: BB,
                      followsLeader: IB,
                      analyticsSurface: "social_menu"
                    })
                  }, `${BB.name}_${BB.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var fv = ZB(2657);
    const lv = BB => {
        let {
          action: IB,
          padAction: ZB
        } = BB;
        const {
          isTouchScreen: TB
        } = (0, wB.o)(["isTouchScreen"]), JB = (0, sT.x)();
        return TB && !JB ? null : (0, hB.jsx)(qT.d, {
          className: "EverythingMenuTabKey",
          noaAction: IB,
          padHidesKey: !0,
          padMenuShortcut: ZB
        })
      },
      Av = (0, TB.memo)((function() {
        const {
          t: BB
        } = (0, GB.G)(), {
          gameState: IB,
          openEverythingMenuName: ZB,
          crosshairGameView: JB
        } = (0, wB.o)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: vB
        } = (0, NB.d)(), kB = (0, eB.usePurchasesAllowed)(), nB = (0, LB.H)(), {
          view: zB
        } = (0, DI.u)(), FB = "dot" === nB || null === nB && "ready" === (null === zB || void 0 === zB ? void 0 : zB.kind), gB = (BB, IB) => (0, hB.jsx)(lv, {
          action: BB,
          padAction: IB
        }), [qB, UB] = (0, TB.useState)(null), WB = (0, TB.useRef)(null), dB = {
          ..."inGame" === IB ? {} : (0, cB.ab)({
            focusOnClick: !1
          }),
          ...RT.e
        }, CB = BB => {
          const IB = (0, rT.h)((IB => {
            (0, cB.Y)(IB.currentTarget), wB.d.set({
              openEverythingMenuName: BB
            })
          }), "pointerup");
          return {
            ...dB,
            onPointerDown: BB => {
              dB.onPointerDown(BB), IB.onPointerDown(BB)
            },
            onPointerUp: BB => {
              dB.onPointerUp(BB), IB.onPointerUp(BB)
            },
            onClick: IB.onClick
          }
        }, QB = null !== ZB, sB = ZB !== yI.q.COSMETIC_SHOP && !JB;
        async function OB() {
          await async function() {
            if (!qB) return;
            await qB(), UB(null)
          }(), wB.d.set({
            openEverythingMenuName: null
          })
        }
        const YB = (0, TB.useRef)(null),
          pB = (0, TB.useCallback)((() => null !== YB.current && (0, Ov.h)(YB.current)), []);

        function aB() {
          pB() || OB()
        }(0, TB.useEffect)((() => (0, wo.t)(pB)), [pB]);
        const HB = (0, TB.useMemo)((() => "inGame" === IB ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            (0, wv.b)()
          }
        } : (0, iB.isDiscordClient)() ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            qI.h.discordActivity().then((BB => {
              BB.exit("User exited the game")
            }))
          }
        } : null), [IB, BB]);
        const MB = (0, hB.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: aB,
          children: (0, hB.jsx)(cB.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, hB.jsx)(mT.e, {
          showing: QB,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ZB === yI.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === IB,
          children: (0, hB.jsx)(LT.d, {
            className: "EverythingMenuContainer",
            show: QB && !JB,
            children: (0, hB.jsx)(XT.c, {
              close: aB,
              togglePointerLock: !1,
              children: (0, hB.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, wo.h)(ZB) && (0, hB.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, hB.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [HB && (0, hB.jsx)(cB.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        HB.onClick()
                      },
                      children: HB.text
                    }), QB && kB && (0, hB.jsx)("div", {
                      ...dB,
                      className: "EverythingMenuWallet",
                      title: BB("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, LB.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, hB.jsx)(sv.d, {})
                    })]
                  }), (0, hB.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, hB.jsxs)("div", {
                      ...CB(yI.q.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZB === yI.q.SETTINGS ? "true" : void 0,
                      className: oB()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZB === yI.q.SETTINGS
                      }),
                      children: [BB("general:settings"), gB("OpenSettings", "pause")]
                    }), (0, hB.jsxs)("div", {
                      ...CB(yI.q.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZB === yI.q.CUSTOMISATION ? "true" : void 0,
                      className: oB()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZB === yI.q.CUSTOMISATION
                      }),
                      children: [BB("general:player"), gB("OpenCharacterCustomization")]
                    }), yB.featureFlags.useSocialFeatures && (0, hB.jsxs)("div", {
                      ...CB(yI.q.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZB === yI.q.SOCIAL ? "true" : void 0,
                      className: oB()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZB === yI.q.SOCIAL
                      }),
                      ...(0, II.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ZB === yI.q.SOCIAL),
                      children: [BB("socialBar:social"), (0, hB.jsx)(fv.e, {})]
                    }), (0, DI.n)(zB) && (0, hB.jsxs)("div", {
                      ...CB(yI.q.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZB === yI.q.COSMETIC_SHOP ? "true" : void 0,
                      className: oB()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ZB === yI.q.COSMETIC_SHOP
                      }),
                      children: [(0, hB.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: BB("store:title")
                      }), "new" === nB && (0, hB.jsx)(PG, {}), FB && (0, hB.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === IB && (0, hB.jsxs)("div", {
                      ...CB(yI.q.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZB === yI.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: oB()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZB === yI.q.LOBBY_LEADERBOARD
                      }),
                      children: [BB("general:lobby"), gB("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, hB.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: MB
                  })]
                }), (0, wo.h)(ZB) && MB, (0, hB.jsxs)("div", {
                  ref: YB,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === IB ? "0.85" : "1"
                  },
                  children: [(0, hB.jsx)(pT, {
                    show: ZB === yI.q.SETTINGS,
                    setBeforeResumeCallback: UB
                  }), (0, hB.jsx)(PT, {
                    show: ZB === yI.q.CUSTOMISATION
                  }), (0, hB.jsx)(TB.Suspense, {
                    fallback: null,
                    children: (0, hB.jsx)(No, {
                      show: ZB === yI.q.SHOP
                    })
                  }), (0, hB.jsx)(po, {
                    show: ZB === yI.q.LOBBY_LEADERBOARD
                  }), kB && (0, hB.jsx)(Qv, {
                    show: ZB === yI.q.COSMETIC_SHOP
                  }), !kB && (0, hB.jsx)(Uv, {
                    show: ZB === yI.q.COSMETIC_SHOP
                  }), (0, hB.jsx)(ev, {
                    show: ZB === yI.q.SOCIAL
                  })]
                }), !(0, yB.isMobileApp)() && (0, eT.g)(vB.getPlayerRanks()) && (0, hB.jsx)(LT.d, {
                  ref: WB,
                  className: "EverythingMenuBannerDiv",
                  show: sB,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, hB.jsx)(Yv.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: WB
                    },
                    showing: QB && sB,
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
  5045: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => qB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4813),
      GB = ZB(1248),
      vB = ZB(1102),
      kB = ZB(1516),
      cB = ZB(1561),
      nB = ZB(1403),
      hB = ZB(2619),
      zB = ZB(1153);
    const FB = {
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

    function NB(BB) {
      let {
        platform: IB
      } = BB;
      const ZB = "youtube" === IB;
      return (0, zB.jsxs)("span", {
        className: JB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZB
        }),
        children: [ZB && (0, zB.jsx)(hB.c, {
          variant: "white"
        }), !ZB && (0, zB.jsx)(vB.d, {
          name: FB[IB].icon,
          kit: "brands"
        })]
      })
    }

    function gB(BB) {
      let {
        platform: IB,
        link: ZB,
        editable: TB,
        userContext: JB,
        onLinksUpdated: hB
      } = BB;
      const {
        t: gB
      } = (0, GB.G)(), qB = FB[IB];
      if (!ZB && !TB) return null;

      function yB() {
        var BB;
        if (!JB || !hB) return;
        nB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: qB.name
            }
          },
          prefixText: oB.u[IB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await cB.c.setSocialLink(JB, IB, BB.value) : await cB.c.clearSocialLink(JB, IB), hB()
          } catch (ZB) {
            console.error("Failed to update social link", ZB), nB.NotificationProvider.showAlertPopup({
              title: ZB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZB) {
        const BB = `@${ZB.handle}`;
        return (0, zB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: qB.color
          },
          href: ZB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, zB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, zB.jsx)(NB, {
              platform: IB
            }), (0, zB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, zB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), TB && (0, zB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, kB.ab)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), yB()
            },
            children: (0, zB.jsx)(vB.d, {
              name: "pen-to-square"
            })
          }), !TB && (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, zB.jsx)(vB.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, zB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: qB.color
        },
        ...(0, kB.ab)(),
        onClick: () => {
          yB()
        },
        children: [(0, zB.jsx)(NB, {
          platform: IB
        }), (0, zB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: qB.name
          }), (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: gB("homePage:profileSocialLinkAdd")
          })]
        }), (0, zB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, zB.jsx)(vB.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function qB(BB) {
      let {
        socialLinks: IB,
        editable: ZB = !1,
        userContext: TB,
        onLinksUpdated: JB
      } = BB;
      if (!ZB && 0 === IB.length) return null;
      const GB = new Map(IB.map((BB => [BB.platform, BB]))),
        vB = ZB ? oB.t : IB.map((BB => BB.platform));
      return (0, zB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, zB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: vB.map((BB => (0, zB.jsx)(gB, {
            platform: BB,
            link: GB.get(BB),
            editable: ZB,
            userContext: TB,
            onLinksUpdated: JB
          }, BB)))
        })
      })
    }
  },
  34243: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(63),
      JB = ZB(3625);

    function oB() {
      const [BB, IB] = (0, TB.useState)(!1);
      return (0, TB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, JB.h)().then((() => {
          BB && IB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  34152: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => gB,
      f: () => NB
    });
    ZB(34158);
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(34146);

    function vB(BB, IB) {
      return Math.max(1, Math.round(BB * IB))
    }

    function kB(BB, IB) {
      const ZB = IB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        TB = function(BB, IB) {
          if (BB.lines) return vB(BB.lineThickness, IB) % 2;
          if (BB.dot) return vB(BB.dotSize, IB) % 2;
          return cB(BB, IB) % 2
        }(BB, IB),
        JB = nB(BB.lineThickness * ZB, TB),
        oB = vB(BB.lineLength, ZB),
        GB = Math.round(BB.gap * ZB),
        kB = BB.outline > 0 ? vB(BB.outline, ZB) : 0,
        zB = [];
      if (BB.lines && (zB.push({
          x: JB + GB,
          y: 0,
          w: oB,
          h: JB,
          arm: "right"
        }), zB.push({
          x: -GB - oB,
          y: 0,
          w: oB,
          h: JB,
          arm: "left"
        }), zB.push({
          x: 0,
          y: JB + GB,
          w: JB,
          h: oB,
          arm: "down"
        }), BB.tStyle || zB.push({
          x: 0,
          y: -GB - oB,
          w: JB,
          h: oB,
          arm: "up"
        }), 0 === GB && zB.push({
          x: 0,
          y: 0,
          w: JB,
          h: JB
        })), BB.dot) {
        const IB = nB(BB.dotSize * ZB, TB),
          oB = BB.lines && 0 === GB && BB.dotSize > BB.lineThickness ? Math.max(IB, JB + 2) : IB,
          vB = (JB - oB) / 2;
        zB.push({
          x: vB,
          y: vB,
          w: oB,
          h: oB
        })
      }
      const FB = zB.map((BB => ({
        ...BB,
        x: BB.x - kB,
        y: BB.y - kB,
        w: BB.w + 2 * kB,
        h: BB.h + 2 * kB
      })));
      let NB = null,
        gB = null;
      if (BB.circle) {
        const IB = vB(BB.circleThickness, ZB),
          oB = function(BB, IB) {
            return BB + (BB % 2 === IB ? 0 : 1)
          }(cB(BB, ZB), TB),
          GB = (JB - oB) / 2;
        NB = hB(GB, oB, IB), kB > 0 && (gB = hB(GB - kB, oB + 2 * kB, IB + 2 * kB))
      }
      return {
        cell: JB,
        fills: zB,
        outlines: kB > 0 ? FB : [],
        ring: NB,
        ringOutline: gB
      }
    }

    function cB(BB, IB) {
      return Math.round(BB.circleRadius * IB * 2 + vB(BB.circleThickness, IB))
    }

    function nB(BB, IB) {
      return Math.max(2 - IB, 2 * Math.round((BB - IB) / 2) + IB)
    }

    function hB(BB, IB, ZB) {
      const TB = 2 * ZB >= IB - 1;
      return {
        x: BB,
        y: BB,
        size: IB,
        border: Math.min(ZB, Math.floor(IB / 2)),
        filled: TB
      }
    }
    var zB = ZB(1153);
    const FB = 1.4;

    function NB(BB, IB) {
      return BB && IB ? `scale(${FB})` : "scale(1)"
    }

    function gB(BB) {
      return "classic" === BB.settings.style ? (0, zB.jsx)(UB, {
        ...BB
      }) : (0, zB.jsx)(OB, {
        ...BB
      })
    }
    const qB = .125;

    function yB(BB, IB) {
      const ZB = {};
      if (BB.color !== GB.h.color && (ZB.color = (0, GB.n)(BB.color)), BB.opacity !== GB.h.opacity && (ZB.opacity = BB.opacity / 100), BB.outline !== GB.h.outline || BB.outlineColor !== GB.h.outlineColor) {
        const IB = BB.outline,
          TB = (0, GB.n)(BB.outlineColor);
        ZB.textShadow = IB > 0 ? `-${IB}px 0 ${TB}, 0 ${IB}px ${TB}, ${IB}px 0 ${TB}, 0 -${IB}px ${TB}` : "none"
      }
      if (BB.size !== GB.h.size) {
        const TB = BB.size / 100;
        ZB.fontSize = IB ? `calc(max(1.3rem, 18px) * ${TB})` : `calc(1.3rem * ${TB})`, ZB.marginTop = `-${qB}em`, ZB.transformOrigin = `50% calc(50% + ${qB}em)`
      }
      return ZB
    }

    function UB(BB) {
      let {
        settings: IB,
        touch: ZB,
        inPreview: TB,
        inEditor: oB,
        pressed: GB = !1,
        pressRef: vB
      } = BB;
      return (0, zB.jsx)("div", {
        className: JB()("Crosshair", {
          Touch: ZB,
          CrosshairInPreview: TB,
          CrosshairInEditor: oB || TB
        }),
        ref: vB,
        style: {
          transform: NB(GB, IB.growOnClick),
          ...yB(IB, ZB)
        },
        children: "+"
      })
    }

    function WB(BB, IB) {
      return BB / IB + "px"
    }

    function dB(BB, IB, ZB, TB) {
      return {
        ...sB(BB, IB, ZB),
        width: WB(BB.w, ZB),
        height: WB(BB.h, ZB),
        background: TB
      }
    }

    function CB(BB, IB, ZB) {
      return {
        left: WB(BB.x, IB),
        top: WB(BB.y, IB),
        width: WB(BB.size, IB),
        height: WB(BB.size, IB),
        borderWidth: WB(BB.border, IB),
        borderColor: ZB,
        background: BB.filled ? ZB : void 0
      }
    }
    const QB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function sB(BB, IB, ZB) {
      const [TB, JB] = BB.arm ? QB[BB.arm] : [0, 0], oB = Math.round(IB * ZB);
      return {
        left: WB(BB.x + TB * oB, ZB),
        top: WB(BB.y + JB * oB, ZB)
      }
    }

    function wB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function OB(BB) {
      let {
        settings: IB,
        inPreview: ZB,
        inEditor: TB,
        pressed: vB = !1,
        spread: cB,
        spreadRef: nB
      } = BB;
      const hB = (0, oB.useRef)(null),
        {
          box: NB,
          dpr: gB
        } = function(BB) {
          const [IB, ZB] = (0, oB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, oB.useLayoutEffect)((() => {
            const IB = BB.current;
            if (!IB) return;
            const TB = () => {
              const BB = IB.getBoundingClientRect(),
                TB = window.devicePixelRatio || 1;
              ZB((IB => IB.dpr === TB && IB.box.left === BB.left && IB.box.top === BB.top && IB.box.width === BB.width && IB.box.height === BB.height ? IB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: TB
              }))
            };
            TB();
            const JB = new ResizeObserver(TB);
            return JB.observe(IB), window.addEventListener("resize", TB), window.addEventListener("scroll", TB, !0), () => {
              JB.disconnect(), window.removeEventListener("resize", TB), window.removeEventListener("scroll", TB, !0)
            }
          }), [BB]), IB
        }(hB),
        qB = (0, oB.useRef)(gB);
      qB.current = gB;
      const yB = kB(IB, gB, vB && IB.growOnClick ? FB : 1),
        UB = function(BB, IB, ZB) {
          const TB = Math.round((BB.left + BB.width / 2) * ZB - IB / 2),
            JB = Math.round((BB.top + BB.height / 2) * ZB - IB / 2);
          return {
            x: TB / ZB - BB.left,
            y: JB / ZB - BB.top
          }
        }(NB, yB.cell, gB),
        WB = (0, GB.n)(IB.color),
        QB = (0, GB.n)(IB.outlineColor),
        OB = (0, oB.useRef)(0);
      (0, oB.useLayoutEffect)((() => {
        if (nB) return nB.current = BB => {
          var IB;
          OB.current = BB, null === (IB = hB.current) || void 0 === IB || IB.querySelectorAll("[data-arm]").forEach((IB => {
            Object.assign(IB.style, sB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(IB), BB, qB.current))
          }))
        }, () => {
          nB.current = null
        }
      }), [nB]);
      const YB = null !== cB && void 0 !== cB ? cB : OB.current;
      return (0, zB.jsx)("div", {
        ref: hB,
        className: JB()("CrosshairShapes", {
          CrosshairInPreview: ZB,
          CrosshairInEditor: TB || ZB,
          CrosshairSpreads: void 0 !== nB
        }),
        children: (0, zB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: UB.x,
            top: UB.y,
            opacity: IB.opacity / 100
          },
          children: (0, zB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [yB.ringOutline && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: CB(yB.ringOutline, gB, QB)
            }), yB.outlines.map(((BB, IB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...wB(BB),
              style: dB(BB, YB, gB, QB)
            }, `o${IB}`))), yB.ring && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: CB(yB.ring, gB, WB)
            }), yB.fills.map(((BB, IB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...wB(BB),
              style: dB(BB, YB, gB, WB)
            }, `f${IB}`)))]
          })
        })
      })
    }
  },
  34167: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      g: () => qB,
      h: () => gB
    });
    var TB = ZB(34146);
    const JB = "XH1-",
      oB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      GB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      vB = ["color", "outlineColor"],
      kB = 1 + 3 * vB.length + GB.length + 1,
      cB = Math.ceil(8 * kB / Math.log2(62)),
      nB = JB.length + cB;

    function hB(BB) {
      let IB = 90;
      for (const ZB of BB) IB = 31 * IB + ZB & 255;
      return IB
    }
    const zB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      FB = BigInt(zB.length);

    function NB(BB, IB) {
      let ZB = 0n;
      for (const JB of BB) {
        const BB = zB.indexOf(JB);
        if (BB < 0) return null;
        ZB = ZB * FB + BigInt(BB)
      }
      if (ZB >> BigInt(8 * IB) !== 0n) return null;
      const TB = [];
      for (let JB = 0; JB < IB; JB++) TB.unshift(Number(0xffn & ZB)), ZB >>= 8n;
      return TB
    }

    function gB(BB) {
      let IB = "shapes" === BB.style ? 1 : 0;
      oB.forEach(((ZB, TB) => {
        BB[ZB] && (IB |= 1 << TB + 1)
      }));
      const ZB = [IB];
      for (const JB of vB) {
        const IB = (0, TB.k)(JB, BB[JB]);
        ZB.push(IB >> 16 & 255, IB >> 8 & 255, 255 & IB)
      }
      for (const JB of GB) {
        const {
          min: IB,
          step: oB
        } = TB.d[JB];
        ZB.push(Math.round(((0, TB.k)(JB, BB[JB]) - IB) / oB))
      }
      return ZB.push(hB(ZB)), JB + function(BB, IB) {
        let ZB = 0n;
        for (const JB of BB) ZB = ZB << 8n | BigInt(JB);
        let TB = "";
        for (let JB = 0; JB < IB; JB++) TB = zB[Number(ZB % FB)] + TB, ZB /= FB;
        return TB
      }(ZB, cB)
    }

    function qB(BB) {
      for (const IB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${cB}})`, "gi"))) {
        const BB = yB(NB(IB[1], kB));
        if (BB) return BB
      }
      return null
    }

    function yB(BB) {
      if (!BB || BB.length !== kB || hB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const IB = BB[0],
        ZB = {
          ...TB.h,
          style: 1 & IB ? "shapes" : "classic"
        };
      oB.forEach(((BB, TB) => {
        ZB[BB] = 0 !== (IB & 1 << TB + 1)
      }));
      let JB = 1;
      for (const TB of vB) ZB[TB] = BB[JB] << 16 | BB[JB + 1] << 8 | BB[JB + 2], JB += 3;
      for (const oB of GB) {
        const {
          min: IB,
          step: GB
        } = TB.d[oB];
        ZB[oB] = (0, TB.k)(oB, IB + BB[JB] * GB), JB++
      }
      return ZB
    }
  },
  34146: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      h: () => JB,
      k: () => oB,
      n: () => cB,
      p: () => kB,
      r: () => nB,
      t: () => vB,
      x: () => GB
    });
    const TB = {
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
      JB = Object.freeze({
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

    function oB(BB, IB) {
      var ZB;
      const {
        min: oB,
        max: GB,
        step: vB
      } = TB[BB];
      if (!Number.isFinite(IB)) return JB[BB];
      const kB = (null !== (ZB = String(vB).split(".")[1]) && void 0 !== ZB ? ZB : "").length,
        cB = Number((Math.round(IB / vB) * vB).toFixed(kB));
      return Math.min(GB, Math.max(oB, cB))
    }

    function GB(BB, IB, ZB) {
      const TB = "number" === typeof ZB ? oB(IB, ZB) : ZB;
      return {
        ...BB,
        [IB]: TB
      }
    }

    function vB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(JB).every((TB => ZB.includes(TB) || BB[TB] === IB[TB]))
    }

    function kB(BB) {
      return vB(BB, JB)
    }

    function cB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function nB(BB) {
      const IB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return IB ? parseInt(IB[1], 16) : null
    }
  },
  34173: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB,
      h: () => zB
    });
    var TB = ZB(63),
      JB = ZB(36),
      oB = ZB(34167),
      GB = ZB(34146);
    const vB = "crosshairCode";
    let kB = null;
    const cB = new Set;

    function nB() {
      if (null === kB) {
        var BB;
        const IB = JB.m.getItem(vB);
        kB = null !== (BB = "string" === typeof IB ? (0, oB.g)(IB) : null) && void 0 !== BB ? BB : GB.h
      }
      return kB
    }

    function hB(BB) {
      kB = BB, (0, GB.p)(BB) ? JB.m.removeItem(vB) : JB.m.setItem(vB, (0, oB.h)(BB));
      for (const IB of cB) IB()
    }

    function zB() {
      const [BB, IB] = (0, TB.useState)(nB);
      return (0, TB.useEffect)((() => {
        const BB = () => {
          IB(nB())
        };
        return BB(), ZB = BB, cB.add(ZB), () => {
          cB.delete(ZB)
        };
        var ZB
      }), []), BB
    }
  },
  34143: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      d: () => JB
    });
    var TB = ZB(20);

    function JB(BB, IB) {
      return BB && !IB
    }

    function oB() {
      return JB(TB.d.get("isTouchScreen"), TB.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34095: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return BB && !IB
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  34126: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(1125);

    function JB() {
      var BB, IB;
      return null !== (BB = null === (IB = screen.orientation) || void 0 === IB ? void 0 : IB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const oB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && JB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = JB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, TB.Og)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const BB of this.resizers) BB()
          }
        }), 1e3)
      }
      heldSizer(BB) {
        let IB = !1;
        return () => {
          if (IB && this.isHeld()) return null;
          const ZB = BB();
          return IB ||= null !== ZB, ZB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  34069: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => UB,
      d: () => cB,
      f: () => gB,
      h: () => NB
    });
    var TB = ZB(168),
      JB = ZB(1333),
      oB = ZB(1258),
      GB = ZB(1186),
      vB = ZB(1796);
    const kB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function cB(BB) {
      return kB[BB]
    }

    function nB(BB) {
      return (0, vB.d)(BB) ? "outdated" : BB instanceof TB.d ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function hB(BB, IB, ZB) {
      return (0, GB.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}${IB}`, ZB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", IB, BB), {
        outcome: "failed",
        failure: nB(BB)
      })))
    }

    function zB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function FB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function NB(BB) {
      const IB = await hB(BB, "/index/name/random", {});
      return zB(IB) ? IB : "err" in IB ? FB(IB.err) : (BB.setPlayerName(IB.name), {
        outcome: "changed",
        name: IB.name
      })
    }
    async function gB(BB, IB) {
      const ZB = await hB(BB, "/index/name/update", {
        name: IB
      });
      return zB(ZB) ? ZB : "err" in ZB ? FB(ZB.err) : ZB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(IB), {
        outcome: "changed",
        name: IB
      })
    }

    function qB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const TB = 1 === IB ? 1 : 10 ** (IB - 1),
        oB = String(TB + Math.floor(ZB() * (10 ** IB - TB)));
      return `${BB.slice(0,JB.j-IB)}${oB}`
    }
    const yB = [1, 2, 3, 4];
    async function UB(BB, IB) {
      const ZB = await gB(BB, IB);
      if ("taken" !== ZB.outcome) return ZB;
      for (const TB of yB) {
        const ZB = qB(IB, TB),
          JB = await gB(BB, ZB);
        if ("taken" !== JB.outcome) return JB
      }
      return {
        outcome: "taken"
      }
    }
  },
  34103: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => kB
    });
    var TB = ZB(20);
    const JB = 24,
      oB = "farNametags",
      GB = 1e5;

    function vB() {
      var BB;
      return null === (BB = TB.d.get("showDistantNametags")) || void 0 === BB || BB
    }

    function kB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(oB),
          IB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(IB) && IB >= 0 ? Math.min(IB, GB) : null
      }()) && void 0 !== BB ? BB : vB() ? 0 : JB
    }
  },
  34134: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      g: () => hB,
      i: () => nB
    });
    var TB = ZB(273),
      JB = ZB(105),
      oB = ZB(138),
      GB = ZB(132),
      vB = ZB(682);
    const kB = new Set(["mali_bifrost"]);

    function cB() {
      if ("android" !== (0, JB.pageOperatingSystem)() || vB.c || (0, vB.b)("webgl_default")) return;
      const BB = (0, oB.m)(),
        IB = null === BB ? (0, TB.o)() : (0, TB.g)(BB.vendor, BB.renderer);
      return null !== IB && kB.has(IB) ? BB => (0, TB.j)((0, GB.d)(BB).vendor, IB) : void 0
    }

    function nB(BB, IB) {
      return BB ? () => !0 : IB()
    }
    async function hB(BB) {
      try {
        const IB = nB(BB, cB),
          ZB = navigator.gpu;
        if (void 0 === IB || void 0 === ZB) return !1;
        const TB = await (0, GB.o)(ZB, {
          seed: !1,
          compatibility: IB
        });
        return "string" !== typeof TB && TB.compatibility && !(0, GB.h)(TB.adapter)
      } catch (IB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", IB), !1
      }
    }
  },
  34220: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      e: () => GB
    });
    const TB = [{
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

    function JB(BB) {
      let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const IB = BB < 0 ? "-" : "",
            ZB = Math.abs(BB);
          return ZB >= 10 ? `${IB}${ZB.toFixed(1).replace(/\.0$/,"")}` : `${IB}${ZB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        IB = BigInt(Math.floor(BB))
      } else IB = BB;
      const JB = IB < 0n ? -IB : IB,
        oB = IB < 0n ? "-" : "",
        GB = JB.toString();
      if (GB.length <= ZB) return `${oB}${GB}`;
      const vB = 3 * Math.floor((GB.length - 1) / 3);
      if (vB < 3) return `${oB}${GB}`;
      if (vB > 3 * TB.length) {
        const BB = GB[0],
          IB = GB.slice(1, 3).replace(/0+$/, "");
        return `${oB}${IB?`${BB}.${IB}`:BB}e${GB.length-1}`
      }
      const {
        threshold: kB,
        suffix: cB
      } = TB[TB.length - vB / 3], nB = JB / kB, hB = Number(1000n * (JB % kB) / kB), zB = Number(nB) + hB / 1e3;
      let FB;
      return FB = zB >= 100 ? Math.floor(zB).toString() : zB >= 10 ? zB.toFixed(1).replace(/\.0$/, "") : zB.toFixed(2).replace(/\.?0+$/, ""), `${oB}${FB}${cB}`
    }
    const oB = TB.map((BB => {
      let {
        threshold: IB,
        suffix: ZB
      } = BB;
      return {
        threshold: Number(IB),
        suffix: ZB
      }
    })).filter((BB => {
      let {
        threshold: IB
      } = BB;
      return Number.isFinite(IB)
    }));

    function GB(BB) {
      const IB = Math.abs(BB),
        ZB = BB < 0 ? "-" : "";
      for (const {
          threshold: TB,
          suffix: JB
        }
        of oB)
        if (IB >= TB) {
          const BB = IB / TB;
          if (BB >= 1e3) return `${ZB}${IB.toExponential(2).replace("e+","e")}`;
          let oB;
          return oB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${ZB}${oB}${JB}`
        } return `${ZB}${IB}`
    }
  },
  34197: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => zB,
      f: () => hB,
      h: () => GB,
      i: () => cB,
      m: () => kB
    });
    var TB = ZB(360);
    const JB = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      oB = {
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

    function GB(BB) {
      var IB;
      return null !== (IB = oB[BB]) && void 0 !== IB ? IB : {
        translationKey: ""
      }
    }
    const vB = {
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

    function kB(BB) {
      return JB.includes(BB)
    }

    function cB(BB) {
      var IB;
      return !0 === (null === BB || void 0 === BB || null === (IB = BB.customAttributes) || void 0 === IB ? void 0 : IB.cannotEnchant)
    }

    function nB(BB, IB) {
      const {
        max: ZB
      } = vB[BB].at(-1);
      return IB <= ZB
    }

    function hB(BB) {
      const IB = Math.sin(BB / 80),
        ZB = BB => {
          if (BB <= 0) return 0;
          if (BB > 1) return 1;
          let IB = 0;
          const ZB = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let TB = 0; TB < ZB.length; TB++) {
            IB += (TB % 2 === 0 ? 1 : -1) * ZB[TB] * Math.pow(BB, 2 + TB) / (2 + TB)
          }
          return 72 * IB
        },
        TB = .3 - .78 * IB,
        JB = .5 - .78 * IB,
        oB = .6 - .7 * IB,
        GB = .8 - .6 * IB;
      let vB = ZB(TB),
        kB = ZB(JB) - vB,
        cB = ZB(oB) - kB - vB,
        nB = ZB(GB) - cB - kB - vB;
      TB < .041 && (kB /= 1 - vB, cB /= 1 - vB, nB /= 1 - vB, vB = 0), JB < .041 && (vB /= 1 - kB, cB /= 1 - kB, nB /= 1 - kB, kB = 0), oB < .041 && (vB /= 1 - cB, kB /= 1 - cB, nB /= 1 - cB, cB = 0), GB < .041 && (vB /= 1 - nB, kB /= 1 - nB, cB /= 1 - nB, nB = 0);
      return {
        commonProb: vB,
        uncommonProb: kB,
        rareProb: cB,
        epicProb: nB,
        legendaryProb: 1 - (nB + cB + kB + vB)
      }
    }

    function zB(BB, IB) {
      const {
        min: ZB,
        max: JB
      } = vB[BB][IB], oB = TB.e.sampleUniformIntDistribution(ZB, JB, "includeMax");
      return {
        ...hB(oB),
        level: oB
      }
    }
  },
  34158: () => {},
  12861: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13945: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15370: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15898: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);