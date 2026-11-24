export const id = 101;
export const ids = [101];
export const modules = {
  34121: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      EverythingMenu: () => CN
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1240),
      NB = zB(1108),
      uB = zB(2127),
      UB = zB(1478),
      aB = zB(1162),
      pB = zB(1148);

    function rB(BB) {
      let {
        items: jB,
        link: zB,
        onClick: QB,
        selectedItemId: nB,
        className: rB,
        padStartsOnTab: sB = !0
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = (0, aB.d)(), yB = [];
      for (const dB of jB) {
        var kB;
        const BB = yB[yB.length - 1];
        var GB;
        if (BB && BB.title === (null !== (kB = dB.section) && void 0 !== kB ? kB : null)) BB.items.push(dB);
        else yB.push({
          title: null !== (GB = dB.section) && void 0 !== GB ? GB : null,
          items: [dB]
        })
      }
      return (0, pB.jsxs)("div", {
        className: dB()("MenuSideBarBody", rB),
        "data-pad-tabs": "2",
        children: [yB.map(((BB, jB) => {
          var zB;
          return (0, pB.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [BB.title && (0, pB.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: JB(BB.title)
            }), BB.items.map((BB => {
              var jB;
              const zB = !!BB.iconElement || !!BB.faIcon;
              return (0, pB.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": nB === BB.id ? "true" : void 0,
                "data-pad-default-focus": sB && nB === BB.id || void 0,
                className: dB()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: nB === BB.id
                }),
                onClick: () => {
                  QB(BB.id)
                },
                children: [zB && (0, pB.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (jB = BB.iconElement) && void 0 !== jB ? jB : (0, pB.jsx)(NB.c, {
                    name: BB.faIcon
                  })
                }), (!mB || !zB) && (0, pB.jsx)("div", {
                  children: JB(BB.title)
                }), BB.redDot && (0, pB.jsx)(uB.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, BB.id)
            }))]
          }, null !== (zB = BB.title) && void 0 !== zB ? zB : jB)
        })), zB && (0, pB.jsxs)("div", {
          ...(0, UB.S)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: zB.onClick,
          children: [(0, pB.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, pB.jsx)(NB.c, {
              name: zB.faIcon
            })
          }), (0, pB.jsx)("div", {
            children: JB(zB.title)
          }), (0, pB.jsx)(NB.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var sB = zB(3116),
      JB = zB(1169),
      mB = zB(2516),
      yB = zB(3219),
      kB = zB(106),
      GB = zB(1982),
      LB = zB(2331),
      gB = zB(2335),
      tB = zB(1710),
      SB = zB(1369),
      MB = zB(5078),
      EB = zB(28),
      iB = zB(34126);

    function qB(BB) {
      let {
        setApplySettingsCallback: jB
      } = BB;
      const {
        clientEscMenuOptions: zB
      } = (0, EB.m)(["clientEscMenuOptions"]), [nB, dB] = (0, QB.useState)(!1), [IB, NB] = (0, QB.useState)(!1), [uB, aB] = (0, QB.useState)(6400), [rB, sB] = (0, QB.useState)(3600), [JB, mB] = (0, QB.useState)(!1), [yB, kB] = (0, QB.useState)(!1);

      function GB(BB) {
        const jB = "screenshot" === BB ? NB : dB;
        jB(!0);
        const zB = JB ? "normals" : yB ? "depth" : null;
        iB.devTools.downloadScene(BB, {
          width: uB,
          height: rB,
          colouring: zB
        }).catch((BB => {
          console.error("Couldn't download the scene", BB)
        })).finally((() => {
          jB(!1)
        }))
      }
      return (0, pB.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, pB.jsx)(MB.b, {
          label: "Disable Ambient Occlusion",
          checked: zB.disableAmbientOcclusion,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              disableAmbientOcclusion: BB
            }), jB((() => MB.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), iB.devTools.supports("ambientLight") && (0, pB.jsx)(MB.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: zB.ambientLightIntensity,
          onChange: BB => {
            iB.devTools.setAmbientLightIntensity(BB).then((() => {
              EB.c.setClientEscMenuOptions({
                ambientLightIntensity: BB
              })
            })).catch((BB => {
              console.error("Couldn't set the ambient light", BB)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), iB.devTools.supports("weaponRaycasts") && (0, pB.jsx)(MB.b, {
          label: "Show Weapon Raycasts",
          checked: zB.showWeaponRaycasts,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              showWeaponRaycasts: BB
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), iB.devTools.supports("sceneDownload") && (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pB.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, pB.jsx)(MB.b, {
              label: "Apply normal-based coloring",
              checked: JB,
              onClick: BB => {
                mB(BB), BB && kB(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, pB.jsx)(MB.b, {
              label: "Apply depth-based coloring",
              checked: yB,
              onClick: BB => {
                kB(BB), BB && mB(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, pB.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, pB.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, pB.jsx)(tB.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, jB) => {
                  const zB = parseInt(BB) || 6400;
                  aB(zB)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: uB.toString()
              }), (0, pB.jsx)("span", {
                children: "X"
              }), (0, pB.jsx)(tB.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, jB) => {
                  const zB = parseInt(BB) || 3600;
                  sB(zB)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: rB.toString()
              })]
            }), (0, pB.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, pB.jsxs)(UB.f, {
                onClick: () => {
                  GB("screenshot")
                },
                disabled: IB,
                children: [IB && (0, pB.jsx)(SB.e, {}), "Download Screenshot"]
              }), (0, pB.jsxs)(UB.f, {
                onClick: () => {
                  GB("glb")
                },
                disabled: nB,
                children: [nB && (0, pB.jsx)(SB.e, {}), "Download GLB"]
              })]
            })]
          }), (0, pB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var fB = zB(145),
      oB = zB(1173),
      HB = zB(34138),
      DB = zB(3119),
      FB = zB(1543),
      YB = zB(1297),
      VB = zB(1268),
      hB = zB(3191),
      XB = zB(2100),
      ZB = zB(1532),
      AB = zB(376),
      TB = zB(2338),
      PB = zB(2346),
      WB = zB(3137),
      eB = zB(2807),
      lB = zB(1668),
      wB = zB(3164),
      xB = zB(3195),
      KB = zB(225);
    var CB = zB(1842),
      cB = zB(3133);
    async function bB() {
      try {
        return function(BB) {
          const jB = new Map;
          for (const {
              store: zB,
              status: QB,
              autoRenewStatus: nB,
              managementUrl: dB
            }
            of Object.values(BB.subscriptions)) !(0, WB.j)(zB) || (0, WB.n)(QB) || "willNotRenew" === nB || jB.has(zB) || jB.set(zB, null !== dB && void 0 !== dB ? dB : WB.p[zB]);
          return Array.from(jB, (BB => {
            let [jB, zB] = BB;
            return {
              store: jB,
              managementUrl: zB
            }
          }))
        }(await (0, CB.j)((0, cB.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (BB) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", BB), null
      }
    }

    function vB(BB) {
      const {
        t: jB,
        selectedLanguage: zB
      } = (0, IB.D)(), {
        userContext: nB
      } = (0, JB.d)(), {
        superRankInfo: dB
      } = nB, NB = (0, PB.usePurchasesAllowed)(), uB = BB && ((0, AB.Bc)(dB) || nB.ranksMayChange) && NB, {
        accountId: UB,
        data: aB
      } = (0, eB.k)(wB.b, uB);
      if ((0, QB.useEffect)((() => {
          if (uB) return wB.b.watchAccount(), lB.d.addRefetchListener("billing", (BB => {
            "reconnected" === BB ? wB.b.refreshAfterReconnect() : wB.b.refresh()
          }))
        }), [uB]), !uB || !(0, AB.Bc)(dB) || null === aB || UB !== nB.whamm) return null;
      const pB = function(BB, jB, zB) {
        const QB = xB.f[(0, xB.b)(xB.f, jB)],
          nB = void 0 === QB ? void 0 : (0, KB.b)(BB.entitlements, QB.entitlementId);
        return void 0 === nB || null === nB.expiresAt || (0, WB.f)(nB) <= zB ? null : nB.willRenew && null === nB.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(nB.expiresAt, zB)
        } : {
          renews: !1,
          at: (0, WB.f)(nB)
        }
      }(aB, dB.tier, Date.now());
      if (null === pB) return null;
      const rB = pB.renews ? "store:renewsOn" : "store:endsOn",
        sB = new Date(pB.at).toLocaleDateString((0, IB.n)(zB.code, rB), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        mB = (0, PB.getBillingStore)(),
        yB = null !== mB && (0, WB.j)(mB) ? function(BB, jB) {
          var zB;
          const QB = Object.values(BB.subscriptions).find((BB => BB.store === jB && !(0, WB.n)(BB.status)));
          return void 0 === QB ? null : null !== (zB = QB.managementUrl) && void 0 !== zB ? zB : WB.p[jB]
        }(aB, mB) : null;
      return {
        text: jB(rB, {
          date: sB
        }),
        manageUrl: yB
      }
    }
    var RB = zB(1388),
      OB = zB(1256),
      Bj = zB(4981),
      jj = zB(1514),
      zj = zB(3770),
      Qj = zB(2314);

    function nj(BB) {
      let {
        showing: jB
      } = BB;
      const {
        t: zB
      } = (0, IB.D)(), {
        data: QB,
        failed: nB
      } = (0, eB.k)(zj.e, jB);
      return 0 === (null === QB || void 0 === QB ? void 0 : QB.length) || null === QB && !nB ? null : (0, pB.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, pB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: zB("paymentHistory:title")
        }), null === QB && nB && (0, pB.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: zB("paymentHistory:loadFailed")
        }), null !== QB && (0, pB.jsx)("ul", {
          className: "PaymentHistoryList",
          children: QB.map((BB => (0, pB.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, pB.jsx)(Qj.d, {
              entry: BB
            }), (0, pB.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, pB.jsx)("div", {
                children: (0, Qj.i)(zB, BB)
              }), (0, pB.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(BB.at).toLocaleDateString(), "number" === typeof BB.orderId && ` \xb7 ${zB("paymentHistory:order",{orderId:BB.orderId})}`]
              })]
            })]
          }, (0, zj.d)(BB))))
        })]
      })
    }
    var dj = zB(3142),
      Ij = zB(2348),
      Nj = zB(2190);

    function uj() {
      (0, Nj.e)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Uj(BB) {
      let {
        status: jB
      } = BB;
      switch (jB) {
        case "restored":
          return (0, wB.d)(), {
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

    function aj() {
      const BB = (0, cB.usePageBillingClient)(),
        {
          userContext: jB
        } = (0, JB.d)(),
        [zB, nB] = (0, QB.useState)(!1),
        [dB, IB] = (0, QB.useState)(null);
      return {
        restoring: zB,
        notice: dB,
        restore: () => {
          jB.isLoggedIn() ? (nB(!0), IB(null), BB.restorePurchases().then(Uj, (BB => BB instanceof dj.d && "loginRequired" === BB.code ? (uj(), null) : function(BB) {
            return BB instanceof dj.d && "storeBusy" === BB.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", BB), (0, wB.d)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(BB))).then(IB).finally((() => {
            nB(!1)
          }))) : uj()
        }
      }
    }

    function pj(BB) {
      let {
        restoring: jB,
        notice: zB,
        restore: nB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)(), uB = (0, PB.usePurchasesAllowed)(), aB = (0, PB.getBillingStore)(), rB = (0, QB.useRef)(null);
      return (0, QB.useEffect)((() => {
        var BB;
        null === (BB = rB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        })
      }), [zB]), uB && (0, Ij.d)(aB) ? (0, pB.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, pB.jsx)(UB.h, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: jB,
          onClick: nB,
          children: NB("payments:restorePurchases")
        }), null !== zB && (0, pB.jsx)("div", {
          ref: rB,
          className: dB()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: zB.failed
          }),
          children: NB(zB.key)
        })]
      }) : null
    }
    var rj = zB(1944),
      sj = zB(1277),
      Jj = zB(1381),
      mj = zB(1244),
      yj = zB(1343),
      kj = zB(363),
      Gj = zB(2606);
    const Lj = {
      appStore: {
        name: "App Store",
        ...kj.Ib.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...kj.Ib.googlePlay
      },
      discord: {
        name: "Discord",
        ...kj.Ib.discord
      }
    };

    function gj(BB) {
      let {
        warning: jB,
        subscriptions: zB
      } = BB;
      const {
        t: QB
      } = (0, IB.D)();
      return null !== zB && 0 === zB.length ? (0, pB.jsx)(pB.Fragment, {
        children: QB(jB)
      }) : (0, pB.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [QB(jB), null === zB && (0, pB.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: QB("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== zB && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: QB("auth:deleteAccountStoreSubscriptions")
          }), (0, pB.jsx)(Gj.d, {
            className: "DeleteAccountSubtitleLinks",
            links: zB.map((BB => {
              let {
                store: jB,
                managementUrl: zB
              } = BB;
              return {
                ...Lj[jB],
                url: zB
              }
            }))
          })]
        })]
      })
    }

    function tj(BB) {
      let {
        showing: jB
      } = BB;
      const {
        userContext: zB,
        isUserContextUpdating: nB
      } = (0, JB.d)(), {
        t: dB
      } = (0, IB.D)(), [NB, uB] = (0, QB.useState)(!1), [aB, rB] = (0, QB.useState)(null), sB = (0, QB.useRef)(jB);
      (0, QB.useEffect)((() => (sB.current = jB, () => {
        sB.current = !1
      })), [jB]);
      const mB = nB || NB;
      return (0, pB.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, pB.jsxs)(UB.G, {
          onClick: async function() {
            if (!NB) {
              uB(!0);
              try {
                const BB = await async function() {
                  const [BB, jB] = await Promise.all([(0, rj.d)(zB.availableUserContextTypes) ? bB() : [], Mj(zB)]);
                  if (!sB.current) return sj.d.ok();
                  const QB = (0, YB.d)(zB.getPlayerName(), !kB.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Jj.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: QB
                        }
                      },
                      subtitle: (0, pB.jsx)(gj, {
                        warning: Sj(zB.isLoggedIn(), jB),
                        subscriptions: BB
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: jB ? dB("auth:deleteAccountTypedConfirm", {
                        playerName: QB
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return sj.d.ok();
                  const nB = await (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${mj.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: EB.c.get("gameState")
                  }, {
                    retries: 3
                  }, zB.getMetricsCookies());
                  if (nB.error) return sj.d.error(nB.error);
                  (0, fB.isDiscordClient)() && (await yj.j.discordActivity()).exit("User deleted their account");
                  return (0, oB.forgetStoredGuestAccount)(zB.whamm), (0, oB.forceGlobalSignOut)(!0), sj.d.ok()
                }(), jB = BB.isError() ? BB.asError().message : null;
                rB(jB)
              } catch (BB) {
                console.error("Failed to delete account:", BB), rB(dB("auth:genericDeleteAccountError"))
              }
              uB(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: mB,
          children: [mB && (0, pB.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, pB.jsx)(SB.e, {})
          }), dB("auth:deleteAccount")]
        }), aB && (0, pB.jsx)("div", {
          className: "DeleteAccountError",
          children: aB
        })]
      })
    }

    function Sj(BB, jB) {
      return (0, fB.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : BB ? "auth:deleteAccountLossWarning" : jB ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function Mj(BB) {
      try {
        const {
          accountCreatedAt: jB
        } = await (0, CB.j)(ZB.b.getPlayerProfile(BB, {
          lowerCaseName: BB.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== jB && Date.now() - jB >= 7 * AB.d
      } catch (jB) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", jB), !0
      }
    }
    var Ej = zB(3685),
      ij = zB(3700),
      qj = zB(3697);

    function fj(BB) {
      let {
        showing: jB
      } = BB;
      const {
        t: zB
      } = (0, IB.D)(), {
        data: QB,
        failed: nB
      } = (0, eB.k)(Ej.b, jB), dB = null === QB ? null : (0, Ej.c)(QB);
      return (0, pB.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, pB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: zB("settingsMenu:blockedAndIgnoredPlayers")
        }), null === dB && !nB && (0, pB.jsx)(SB.e, {}), null === dB && nB && (0, pB.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [zB("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, pB.jsx)(UB.f, {
            className: "SmallTextLight",
            onClick: () => {
              Ej.b.refresh()
            },
            children: zB("general:tryAgain")
          })]
        }), 0 === (null === dB || void 0 === dB ? void 0 : dB.length) && (0, pB.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: zB("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== dB && dB.length > 0 && (0, pB.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: dB.map((BB => {
            let {
              name: jB,
              exclusion: QB
            } = BB;
            const nB = qj.e[QB];
            return (0, pB.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, pB.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: jB
              }), (0, pB.jsx)(UB.h, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, ij.g)(nB, jB, {
                    chatMessage: null
                  })
                },
                children: zB(qj.f[nB].text)
              })]
            }, jB)
          }))
        })]
      })
    }
    const oj = (0, QB.memo)((function(BB) {
      var jB, zB;
      let {
        showing: nB,
        inGame: uB
      } = BB;
      const {
        t: aB,
        selectedLanguage: rB
      } = (0, IB.D)(), {
        hideSocialLocationFrom: mB
      } = (0, EB.m)(["hideSocialLocationFrom"]), yB = (0, PB.usePurchasesAllowed)(), GB = aj(), LB = (0, sB.d)(), {
        userContext: gB,
        isUserContextUpdating: iB
      } = (0, JB.d)(), [qB, WB] = (0, QB.useState)(null !== (jB = gB.getPlayerName()) && void 0 !== jB ? jB : ""), [eB, lB] = (0, QB.useState)(null), {
        purchasing: wB,
        outcome: xB,
        purchase: KB
      } = (0, DB.b)("/super-rank-welcome"), CB = (0, AB.gc)((0, IB.n)(rB.code, "general:timeLeft"), gB.superRankInfo), cB = null === (zB = vB(nB)) || void 0 === zB ? void 0 : zB.text, bB = CB ? aB("general:timeLeft", {
        time: CB
      }) : cB, [zj, Qj] = (0, QB.useState)(!1), [dj, Ij] = (0, QB.useState)(!1), Nj = (0, QB.useRef)(null), uj = (0, QB.useRef)(null), Uj = (0, XB.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), rj = null === Uj, sj = null !== Uj && void 0 !== Uj ? Uj : [], Jj = gB !== oB.NULL_USER_CONTEXT && !gB.isLoggedIn(), mj = Jj && 0 !== (null === Uj || void 0 === Uj ? void 0 : Uj.length), [yj, kj] = (0, QB.useState)([]), [Gj, Lj] = (0, QB.useState)(!1), gj = gB.playerHasRank("youtuber"), Sj = (0, QB.useCallback)((() => ZB.b.getPlayerProfile(gB, {
        lowerCaseName: gB.getPlayerName().toLowerCase()
      }).then((BB => {
        kj(BB.socialLinks)
      })).catch((BB => {
        console.error("Failed to refresh social links", BB)
      }))), [gB]);

      function Mj(BB) {
        BB !== qB && ((0, YB.l)(BB) ? (BB = (0, YB.m)(BB), lB(aB("homePage:nameCharacters"))) : lB(null), Nj.current && (Nj.current.value = BB), WB(BB))
      }
      return (0, QB.useEffect)((() => (!0 === nB ? (clearInterval(uj.current), uj.current = setInterval(LB, 1e3)) : clearInterval(uj.current), () => {
        clearInterval(uj.current)
      })), [nB, LB]), (0, QB.useEffect)((() => {
        var BB;
        WB(null !== (BB = gB.getPlayerName()) && void 0 !== BB ? BB : "")
      }), [gB]), (0, QB.useEffect)((() => {
        if (!nB || !gj || iB) return;
        let BB = !1;
        return Lj(!0), kj([]), ZB.b.getPlayerProfile(gB, {
          lowerCaseName: gB.getPlayerName().toLowerCase()
        }).then((jB => {
          BB || kj(jB.socialLinks)
        })).catch((BB => {
          console.error("Failed to load social links", BB)
        })).finally((() => {
          BB || Lj(!1)
        })), () => {
          BB = !0
        }
      }), [nB, gj, iB, gB]), (0, pB.jsxs)("div", {
        className: dB()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: uB
        }),
        children: [uB && (0, pB.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: aB("settingsMenu:accountSettingsInGameWarning")
        }), (0, pB.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, pB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [aB("homePage:discordNamePopupTitle"), (0, pB.jsxs)(FB.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, VB.h)({
                name: gB.getPlayerName()
              }),
              onClick: () => {
                EB.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, pB.jsx)(NB.c, {
                name: "arrow-up-right-from-square"
              }), " ", aB("profileCard:viewProfile")]
            })]
          }), (0, pB.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, pB.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [kB.featureFlags.canChangeName && (0, pB.jsx)(tB.d, {
                className: "EnterName",
                placeholderText: aB("homePage:enterName"),
                maxLength: YB.g,
                defaultValue: qB,
                onValueChange: BB => {
                  Mj(BB)
                },
                forcedText: zj || !kB.featureFlags.canChangeName ? qB : null,
                blurOnEnter: !0,
                domRef: Nj
              }), (0, pB.jsx)(UB.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Mj((0, YB.e)())
                },
                children: (0, pB.jsx)(NB.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !kB.featureFlags.canChangeName && (0, pB.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, YB.d)(qB, !kB.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, pB.jsx)(UB.f, {
              className: "ChooseNameButton",
              disabled: zj || qB === gB.getPlayerName(),
              onClick: () => {
                qB.length < YB.k ? lB(aB("homePage:changeNameMinLengthError", {
                  length: YB.k
                })) : qB.length > YB.g ? lB(aB("homePage:changeNameMaxLengthError", {
                  length: YB.g
                })) : (Qj(!0), lB(null), (0, HB.g)(gB, qB).then((BB => {
                  Qj(!1), "taken" === BB.outcome ? lB(aB("homePage:nameTaken")) : "refused" === BB.outcome ? lB(BB.message) : "failed" === BB.outcome && lB(aB((0, HB.f)(BB.failure)))
                })))
              },
              children: aB("general:choose")
            })]
          }), eB && (0, pB.jsx)("div", {
            className: "ChooseAccNameError",
            children: eB
          })]
        }), (0, pB.jsx)(MB.b, {
          label: (() => {
            if ((0, OB.l)(mB)) {
              const BB = (0, IB.n)(rB.code, "general:timeLeft"),
                jB = (0, AB.$)(BB, Date.now(), mB + OB.k);
              return `${aB("settingsMenu:hideSocialLocation")} (${aB("general:timeLeft",{time:jB})})`
            }
            return aB("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const BB = !(0, OB.l)(mB);
            (0, jj.reportAnalyticsClick)({
              id: "social.hide_location",
              value: BB ? "on" : "off"
            }), Ij(!0), ZB.b.setHideSocialLocation(gB, BB).then((() => {
              EB.c.set({
                hideSocialLocationFrom: BB ? Date.now() : null
              })
            })).finally((() => {
              Ij(!1)
            }))
          },
          checked: (0, OB.l)(mB),
          disabled: dj
        }), gj && (0, pB.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, pB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: aB("settingsMenu:socialLinks")
          }), Gj && (0, pB.jsx)(SB.e, {}), !Gj && (0, pB.jsx)(Bj.b, {
            socialLinks: yj,
            editable: !0,
            userContext: gB,
            onLinksUpdated: Sj
          })]
        }), (0, pB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: aB(mj ? "auth:loginOrSwitchAccount" : "auth:login")
          }), rj && (0, pB.jsx)(SB.e, {}), !rj && 0 === sj.length && (0, pB.jsx)("div", {
            className: "NoLoginOptions",
            children: aB("auth:noLoginOptions")
          }), !rj && sj.length > 0 && "crazygames" !== fB.siteUsed && (0, pB.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: sj
          }), !rj && sj.length > 0 && "crazygames" === fB.siteUsed && (0, pB.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [sj[0], sj.length > 1 && (0, pB.jsxs)(pB.Fragment, {
              children: [(0, pB.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, pB.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: aB("auth:legacyLoginOptions")
                }), (0, pB.jsx)(RB.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: aB("auth:legacyLoginOptionsInfo")
                })]
              }), (0, pB.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: sj.slice(1)
              })]
            })]
          }), kB.featureFlags.useLogin && (null !== gB.loggedInInfo || gB.isLoggedIn()) && (0, pB.jsxs)(pB.Fragment, {
            children: [(0, pB.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, pB.jsxs)(UB.G, {
              onClick: () => {
                (0, oB.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, pB.jsx)(NB.c, {
                name: "right-from-bracket"
              }), aB("auth:signOut")]
            })]
          })]
        }), !gB.playerHasRank("super") && yB && (0, pB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pB.jsx)(NB.c, {
              name: "bolt"
            }), aB("homePage:superRank")]
          }), (0, pB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, pB.jsxs)(UB.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, TB.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pB.jsx)(NB.c, {
                name: "bolt"
              }), aB("homePage:getSuperRank")]
            }), (0, pB.jsxs)(UB.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, TB.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pB.jsx)(NB.c, {
                name: "bolt"
              }), aB("homePage:giftSuperRank")]
            })]
          }), (0, pB.jsx)(pj, {
            ...GB
          })]
        }), gB.playerHasRank("super") && (0, pB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pB.jsx)(NB.c, {
              name: "bolt"
            }), aB("homePage:superRank"), bB && (0, pB.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", bB, ")"]
            })]
          }), yB && (0, pB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, AB.Bc)(gB.superRankInfo) && (0, pB.jsxs)(UB.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: wB,
              onClick: () => {
                KB(hB.h.id, null)
              },
              children: [(0, pB.jsx)(NB.c, {
                name: "bolt"
              }), aB("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: hB.h.product.days,
                price: hB.h.price
              })]
            }), (0, pB.jsxs)(UB.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, TB.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pB.jsx)(NB.c, {
                name: "bolt"
              }), aB("homePage:giftSuperRank")]
            })]
          }), xB && (0, pB.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: aB(xB.translationKey)
          }), (0, pB.jsx)(pj, {
            ...GB
          })]
        }), (0, pB.jsx)(nj, {
          showing: nB
        }), kB.featureFlags.useSocialFeatures && (0, pB.jsx)(fj, {
          showing: nB
        }), (0, pB.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, pB.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, pB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: aB(Hj(Jj, mj))
            }), (0, fB.isDiscordClient)() && (0, pB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: aB("auth:discordActivityKickWarning")
            }), (0, pB.jsx)(tj, {
              showing: nB
            })]
          }), (0, pB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: aB(Jj ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Hj(BB, jB) {
      return BB ? jB ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Dj = zB(34141),
      Fj = zB(3252),
      Yj = zB(1284),
      Vj = zB(1456),
      hj = zB(2025),
      Xj = zB(8897),
      Zj = zB(34148);

    function Aj() {
      const {
        t: BB
      } = (0, IB.D)();
      return (0, hj.k)("localPlayerAlive") ? (0, pB.jsx)(Xj.c, {
        icon: "camera-alt",
        title: BB("screenshotMode:title"),
        sub: BB("screenshotMode:entrySub"),
        onClick: Zj.e
      }) : null
    }
    var Tj = zB(34163);
    const Pj = (0, QB.memo)((function(BB) {
        let {
          inGame: jB
        } = BB;
        const {
          t: zB,
          selectedLanguage: QB
        } = (0, IB.D)(), {
          clientEscMenuOptions: nB,
          showDebugOverlay: dB,
          isTouchScreen: NB
        } = (0, EB.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), uB = (0, mB.i)("hideCoordinates");
        let UB = "settingsMenu:showCoordinates",
          aB = "settingsMenu:showChunkCoordinates";

        function rB(BB) {
          const jB = new Intl.DisplayNames([BB], {
            type: "language"
          }).of(BB);
          return jB.charAt(0).toUpperCase() + jB.slice(1)
        }
        return uB && (UB = "settingsMenu:showCoordinatesHidden", aB = "settingsMenu:showChunkCoordinatesHidden"), (0, pB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [jB && kB.featureFlags.canUseInviteLinks && (0, pB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pB.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: zB("settingsMenu:inviteLink")
            }), (0, pB.jsx)(Dj.h, {})]
          }), (0, pB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pB.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: zB("settingsMenu:language")
            }), (0, pB.jsx)(Fj.e, {
              options: Object.entries(IB.i).map((BB => {
                let [jB, zB] = BB;
                return {
                  label: (0, pB.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, pB.jsx)("img", {
                      src: zB.flagImg,
                      alt: "flag"
                    }), (0, pB.jsxs)("span", {
                      children: [rB(jB), " ", (0, pB.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", jB, ")"]
                      })]
                    })]
                  }),
                  value: jB
                }
              })),
              value: QB.code,
              onChange: BB => {
                Yj.c.get().setCurrentLanguage(BB.value)
              }
            })]
          }), jB && NB && (0, Tj.b)() && (0, pB.jsx)(Aj, {}), !(0, kB.isMobileApp)() && (0, Vj.h)() && kB.featureFlags.useForceRotateForceFullscreenOverlay && (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:disableFullscreenMode"),
            checked: nB.disableFullscreen,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                disableFullscreen: BB
              })
            }
          }), (0, pB.jsx)(MB.b, {
            label: zB(UB),
            checked: nB.showCoordinates,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showCoordinates: BB
              })
            },
            disabled: uB
          }), (0, pB.jsx)(MB.b, {
            label: zB(aB),
            checked: nB.showChunkCoordinates,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showChunkCoordinates: BB
              })
            },
            disabled: uB
          }), (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:showFps"),
            checked: nB.showFPS,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showFPS: BB
              })
            }
          }), (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:disableBunnyHopping"),
            checked: nB.disableBunnyHopping,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                disableBunnyHopping: BB
              })
            }
          }), (0, yj.u)() && (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:showChat"),
            checked: nB.showChat,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showChat: BB
              })
            }
          }), (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:showDebugOverlay"),
            checked: dB,
            onClick: BB => {
              EB.c.set({
                showDebugOverlay: BB
              })
            }
          }), kB.featureFlags.useSocialFeatures && (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:showFriendOnlineToasts"),
            checked: nB.showFriendOnlineToasts,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showFriendOnlineToasts: BB
              })
            }
          }), (0, pB.jsx)(MB.b, {
            label: zB("settingsMenu:showNewItemIndicator"),
            checked: nB.showNewItemIndicator,
            onClick: BB => {
              EB.c.setClientEscMenuOptions({
                showNewItemIndicator: BB
              })
            }
          })]
        })
      })),
      Wj = (0, QB.memo)((function() {
        const {
          t: BB
        } = (0, IB.D)(), {
          soundVolume: jB,
          musicVolume: zB
        } = (0, EB.m)(["soundVolume", "musicVolume"]);
        return (0, pB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, pB.jsx)(MB.f, {
            name: BB("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: zB,
            onChange: BB => {
              EB.c.set({
                musicVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          }), (0, pB.jsx)(MB.f, {
            name: BB("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: jB,
            onChange: BB => {
              EB.c.set({
                soundVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          })]
        })
      }));
    var ej = zB(750),
      lj = zB(1471),
      wj = zB(3777),
      xj = zB(34168),
      Kj = zB(3593);
    const Cj = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function cj() {
      const {
        t: BB
      } = (0, IB.D)(), jB = (0, Kj.d)(), {
        mobilePushNotificationsCanAsk: zB
      } = (0, EB.m)(["mobilePushNotificationsCanAsk"]), [nB, dB] = (0, QB.useState)(null), [NB, uB] = (0, QB.useState)(!1), [aB, rB] = (0, QB.useState)(null), [sB, JB] = (0, QB.useState)(!1), mB = (0, QB.useCallback)((() => {
        (0, wj.e)().then((BB => {
          jB.current && (dB(BB), uB(!1))
        })).catch((BB => {
          console.error("Failed to load push notification targets:", BB), jB.current && uB(!0)
        }))
      }), [jB]), yB = (0, QB.useCallback)((() => {
        (0, xj.f)().then((BB => {
          jB.current && rB((() => BB))
        }))
      }), [jB]);
      (0, QB.useEffect)((() => {
        mB()
      }), [mB]), (0, QB.useEffect)((() => {
        yB()
      }), [yB, zB]), (0, lj.f)(wj.k, mB);
      const kB = null === nB ? [] : Object.keys(Cj).filter((BB => nB[BB] > 0));
      return (0, pB.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, pB.jsx)("div", {
          className: "SliderText",
          children: BB("notificationSettings:pushNotifications")
        }), null === nB && NB && (0, pB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsLoadFailed")
        }), null !== nB && 0 === kB.length && (0, pB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsNone")
        }), kB.length > 0 && (0, pB.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: kB.map((jB => {
            var zB;
            return (0, pB.jsx)("li", {
              children: BB(Cj[jB], {
                count: null !== (zB = null === nB || void 0 === nB ? void 0 : nB[jB]) && void 0 !== zB ? zB : 0
              })
            }, jB)
          }))
        }), null !== aB && (0, pB.jsx)(UB.f, {
          className: "PushNotificationSettingsButton",
          loading: sB,
          onClick: () => {
            JB(!0), aB().catch((BB => {
              console.error("Failed to turn on push notifications:", BB)
            })).finally((() => {
              jB.current && (JB(!1), yB())
            }))
          },
          children: BB("notificationSettings:pushTurnOn")
        })]
      })
    }
    var bj = zB(2648);
    const vj = {
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
      Rj = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function Oj(BB) {
      let {
        setting: jB,
        value: zB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), NB = (0, Kj.d)(), [uB, UB] = (0, QB.useState)(null), [aB, rB] = (0, QB.useState)(!1), [sB, JB] = (0, QB.useState)(null);
      return (0, QB.useEffect)((() => {
        "remindersOn" === jB && (0, xj.f)().then((BB => {
          NB.current && JB((() => BB))
        }), (BB => {
          console.error("Couldn't tell whether this device can take push notifications:", BB)
        }))
      }), [jB, NB]), (0, pB.jsx)(MB.b, {
        className: dB()({
          DailyDropSettingFailed: aB
        }),
        label: nB(Rj[jB].label),
        checked: null !== uB && void 0 !== uB ? uB : zB,
        note: aB ? nB("dailyDrop:settingFailed") : void 0,
        onClick: BB => {
          null === uB && (UB(BB), rB(!1), BB && null !== sB && sB().catch((BB => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", BB)
          })), (0, bj.p)("daily_drop.setting", `${Rj[jB].reportAs}_${BB?"on":"off"}`), (0, bj.t)("hidden" === jB ? {
            hidden: BB
          } : {
            remindersOn: BB
          }).catch((BB => {
            console.error(`Failed to save the Lucky Skin Block's ${jB} setting:`, BB), NB.current && rB(!0)
          })).finally((() => {
            NB.current && UB(null)
          })))
        }
      })
    }
    const Bz = (0, QB.memo)((function() {
      const {
        t: BB
      } = (0, IB.D)(), {
        clientEscMenuOptions: jB
      } = (0, EB.m)(["clientEscMenuOptions"]), {
        userContext: zB
      } = (0, JB.d)(), QB = zB.dailyDrop;
      return (0, pB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [kB.featureFlags.useSocialFeatures && (0, pB.jsx)(MB.c, {
          label: BB("notificationSettings:friendRequests"),
          options: ej.c.map((jB => ({
            value: jB,
            label: BB(vj[jB].label)
          }))),
          value: jB.friendRequestNotifications,
          onChange: BB => {
            EB.c.setClientEscMenuOptions({
              friendRequestNotifications: BB
            })
          },
          circleInfoText: (0, pB.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: ej.c.map((jB => (0, pB.jsxs)("div", {
              children: [(0, pB.jsx)("b", {
                children: BB(vj[jB].label)
              }), ": ", BB(vj[jB].info)]
            }, jB)))
          })
        }), null !== QB && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)(Oj, {
            setting: "remindersOn",
            value: QB.remindersOn
          }), (0, pB.jsx)(Oj, {
            setting: "hidden",
            value: QB.hidden
          })]
        }), (0, pB.jsx)(cj, {})]
      })
    }));
    var jz = zB(4629),
      zz = zB(214),
      Qz = zB(348),
      nz = zB(6606),
      dz = zB(3572),
      Iz = zB(34171),
      Nz = zB(658),
      uz = zB(31);
    var Uz = zB(690),
      az = zB(41),
      pz = zB(4485);
    const rz = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function sz(BB) {
      return rz.has(BB) ? GB.gameBridge.lookup("lG", null) : null
    }

    function Jz(BB) {
      if (!(0, Nz.I)(EB.c.get("clientEscMenuOptions")[BB])) return EB.c.get("clientEscMenuOptions")[BB];
      const jB = sz(BB);
      return null !== jB ? jB[rz.get(BB)] : az.j.getItem(BB)
    }

    function mz(BB, jB) {
      if ("useTouchControls" === BB) return void(0, pz.c)(jB);
      BB in EB.c.get("clientEscMenuOptions") && EB.c.setClientEscMenuOptions({
        [BB]: jB
      });
      const zB = sz(BB);
      null !== zB && GB.gameBridge.send("setChunkAddDistance", {
        ...zB,
        [rz.get(BB)]: jB
      }), az.j.setItem(BB, jB)
    }
    var yz = zB(4542),
      kz = zB(34176),
      Gz = zB(34179),
      Lz = zB(4626),
      gz = zB(34196);

    function tz(BB) {
      var jB, nB, NB, uB;
      let {
        minChunkAddDist: UB,
        getValue: aB,
        onChange: rB,
        setApplySettingsCallback: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), {
        clientEscMenuOptions: yB
      } = (0, EB.m)(["clientEscMenuOptions", "showDistantNametags"]), GB = (0, QB.useRef)(aB("showFog")), LB = (0, QB.useRef)(yB.antiAliasing), gB = (0, QB.useRef)(yB.useWebGpu), [tB, SB] = (0, QB.useState)(null), [qB, fB] = (0, QB.useState)(!1), [oB, HB] = (0, QB.useState)((() => (0, dz.g)(kB.featureFlags.settings.canUseShaderPacks))), [DB] = (0, QB.useState)((() => EB.c.isWebGpuDefaultOff())), [FB] = (0, QB.useState)(Qz.l), [YB] = (0, QB.useState)((() => !0 === az.j.getItem(kj.Wb))), [VB] = (0, QB.useState)((() => EB.c.isWebGpuOnStored()));
      (0, QB.useEffect)((() => {
        let BB = !1;
        return (0, kB.hasUsableWebGpuAdapter)().then((async jB => {
          const zB = YB || VB,
            QB = !jB && Uz.E && await (0, gz.h)(zB);
          BB || (SB(jB || QB), fB(QB))
        })), (0, dz.o)(kB.featureFlags.settings.canUseShaderPacks) && (0, nz.h)().then((async jB => {
          const QB = null !== jB && await async function(BB) {
            const [{
              isShaderPackActive: jB
            }, {
              loadPageShaderPackCompiler: QB
            }] = await Promise.all([zB.e(139).then((() => zB(6601))), Promise.all([zB.e(78), zB.e(136), zB.e(138)]).then((() => zB(6574)))]);
            return jB(BB, await QB())
          }(jB);
          BB || HB(QB)
        })), () => {
          BB = !0
        }
      }), [YB, VB]);
      const hB = (!(oB && !YB) || !qB) && tB,
        XB = function(BB, jB, zB, QB, nB) {
          return (0, Iz.d)(zB, QB) && !0 === jB ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== jB ? "settingsMenu:newWebGpu" : nB ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: BB && !1 !== jB,
            disabled: !0 !== jB
          }
        }(yB.useWebGpu, hB, oB, DB, FB),
        ZB = (yB.useWebGpu || (0, Iz.d)(oB, DB)) && oB && !0 === hB,
        AB = (0, mB.i)("lightingOverride"),
        TB = !(0, Nz.I)(AB);
      let PB = "settingsMenu:enableLighting";
      TB && (PB = AB ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const WB = BB => {
          var jB, zB, QB;
          const nB = null !== (jB = BB.showFog) && void 0 !== jB ? jB : aB("showFog"),
            dB = null !== (zB = BB.antiAliasing) && void 0 !== zB ? zB : yB.antiAliasing,
            IB = null !== (QB = BB.useWebGpu) && void 0 !== QB ? QB : yB.useWebGpu,
            NB = !Uz.E && nB !== GB.current || dB !== LB.current || IB !== gB.current;
          sB(NB ? () => MB.i : null)
        },
        eB = (0, mB.i)("fogChunkDistanceOverride"),
        lB = (0, mB.i)("fogBlockDistanceOverride"),
        wB = !(0, Nz.I)(eB) || !(0, Nz.I)(lB),
        xB = wB ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [KB, CB] = (0, jz.d)(UB),
        [cB, bB] = (0, Lz.j)(UB),
        vB = JB("settingsMenu:chunkLoadDistanceDeviceLimit"),
        RB = cB < KB,
        OB = Math.min(null !== (jB = aB("chunkHorizAddDist")) && void 0 !== jB ? jB : UB[0], cB),
        Bj = !wB && function(BB, jB) {
          return !0 === BB.showFog && BB.fogChunkDistance > jB
        }(yB, OB);
      return (0, pB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, pB.jsx)(MB.f, {
          name: JB("settingsMenu:horizontalChunkLoadDistance"),
          min: UB[0],
          max: KB,
          selectableMax: cB,
          cappedNote: vB,
          step: 1,
          initValue: OB,
          onChange: BB => {
            !0 === aB("showFog") && BB < aB("fogChunkDistance") && rB("fogChunkDistance", BB), rB("chunkHorizAddDist", BB), uz.n.Ly("updatedChunkLoadDist")
          },
          circleInfoText: JB("settingsMenu:chunkLoadDistanceInfo")
        }), (0, pB.jsx)(MB.f, {
          name: JB("settingsMenu:verticalChunkLoadDistance"),
          min: UB[1],
          max: CB,
          selectableMax: bB,
          cappedNote: RB ? void 0 : vB,
          step: 1,
          initValue: Math.min(null !== (nB = aB("chunkVertAddDist")) && void 0 !== nB ? nB : UB[1], bB),
          onChange: BB => {
            rB("chunkVertAddDist", BB), uz.n.Ly("updatedChunkLoadDist")
          },
          circleInfoText: JB("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:chunkFadeIn"),
          checked: yB.chunkFadeIn,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              chunkFadeIn: BB
            })
          },
          circleInfoText: JB("settingsMenu:chunkFadeInInfo")
        }), iB.devTools.supports("chunkBorders") && (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:showChunkBorders"),
          checked: yB.showChunkBorders,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              showChunkBorders: BB
            })
          },
          circleInfoText: JB("settingsMenu:showChunkBordersInfo")
        }), (0, pB.jsx)(MB.b, {
          label: JB(PB),
          checked: yB.enableLighting,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              enableLighting: BB
            })
          },
          disabled: TB
        }), (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pB.jsx)(MB.b, {
            label: JB(xB),
            checked: yB.showFog,
            onClick: BB => {
              WB({
                showFog: BB
              }), EB.c.setClientEscMenuOptions({
                showFog: BB
              })
            },
            disabled: wB,
            className: dB()({
              SettingBoxWarning: Bj
            })
          }), (0, pB.jsx)(MB.f, {
            name: JB("settingsMenu:fogChunkDistance"),
            min: UB[0],
            max: zz.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (NB = yB.fogChunkDistance) && void 0 !== NB ? NB : UB[0],
            onChange: BB => {
              EB.c.setClientEscMenuOptions({
                fogChunkDistance: BB
              }), uz.n.Ly("fogChunkDistanceChanged", BB)
            },
            circleInfoText: JB("settingsMenu:fogChunkDistanceInfo"),
            disabled: wB || !1 === aB("showFog"),
            className: dB()({
              SettingBoxWarning: Bj
            })
          }), Bj && (0, pB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: JB("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Uz.E && (0, pB.jsx)(MB.b, {
          label: JB(ZB ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !ZB && yB.disableTexAtlas,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              disableTexAtlas: BB
            })
          },
          circleInfoText: JB("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: ZB
        }), (0, pB.jsx)(MB.f, {
          name: JB("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: yB.cameraFOV,
          onChange: BB => {
            EB.c.setClientEscMenuOptions({
              cameraFOV: BB
            })
          }
        }), (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:disableViewBobbing"),
          checked: yB.disableBobbing,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              disableBobbing: BB
            })
          },
          circleInfoText: JB("settingsMenu:disableViewBobbingInfo")
        }), (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:antiAliasing"),
          checked: yB.antiAliasing,
          onClick: BB => {
            WB({
              antiAliasing: BB
            }), (0, yz.g)("antiAliasing"), EB.c.setClientEscMenuOptions({
              antiAliasing: BB
            })
          },
          circleInfoText: JB("settingsMenu:antiAliasingInfo")
        }), (0, pB.jsx)(MB.f, {
          name: JB("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (uB = yB.pixelScale) && void 0 !== uB ? uB : 1,
          onChange: BB => {
            (BB !== EB.c.get("clientEscMenuOptions").pixelScale || (0, Gz.o)()) && (0, yz.g)("pixelScale"), EB.c.setClientEscMenuOptions({
              pixelScale: BB
            })
          },
          circleInfoText: JB("settingsMenu:pixelScaleInfo"),
          format: BB => `${BB}x`
        }), (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:pixelSmoothing"),
          checked: yB.pixelSmoothing,
          onClick: BB => {
            EB.c.setClientEscMenuOptions({
              pixelSmoothing: BB
            })
          },
          circleInfoText: JB("settingsMenu:pixelSmoothingInfo")
        }), Uz.E && (0, pB.jsx)(MB.b, {
          label: JB("settingsMenu:distantNametags"),
          checked: (0, kz.e)(),
          onClick: BB => {
            EB.c.set({
              showDistantNametags: BB
            })
          },
          circleInfoText: JB("settingsMenu:distantNametagsInfo")
        }), (0, pB.jsx)(MB.b, {
          label: JB(XB.translationKey),
          checked: XB.checked,
          onClick: BB => {
            WB({
              useWebGpu: BB
            }), EB.c.setClientEscMenuOptions({
              useWebGpu: BB
            })
          },
          circleInfoText: JB("settingsMenu:newWebGpuInfo"),
          disabled: XB.disabled
        })]
      })
    }
    var Sz = zB(4539),
      Mz = zB(8867),
      Ez = zB(34202),
      iz = zB(8881),
      qz = zB(34208);
    const fz = {
        color: 16777215,
        name: "white"
      },
      oz = {
        color: 0,
        name: "black"
      },
      Hz = [fz, {
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
      }, oz],
      Dz = [oz, fz];

    function Fz(BB) {
      return `${BB} px`
    }

    function Yz(BB) {
      return `${BB}%`
    }

    function Vz(BB) {
      let {
        label: jB,
        value: zB,
        swatches: QB,
        onChange: nB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)(), uB = !QB.some((BB => BB.color === zB));
      return (0, pB.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, pB.jsx)("div", {
          className: "SliderText",
          children: jB
        }), (0, pB.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": jB,
          children: [QB.map((BB => {
            let {
              color: jB,
              name: QB
            } = BB;
            return (0, pB.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": jB === zB,
              "aria-label": NB(`crosshairSettings:color_${QB}`),
              "data-pad-focusable": !0,
              className: dB()("CrosshairSwatch", {
                Selected: jB === zB
              }),
              style: {
                background: (0, qz.m)(jB)
              },
              onClick: () => {
                nB(jB)
              }
            }, jB)
          })), (0, pB.jsx)("label", {
            className: dB()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: uB
            }),
            style: uB ? {
              background: (0, qz.m)(zB)
            } : void 0,
            title: NB("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, pB.jsx)("input", {
              type: "color",
              "aria-label": NB("crosshairSettings:customColor"),
              value: (0, qz.m)(zB),
              onChange: BB => {
                const jB = (0, qz.o)(BB.target.value);
                null !== jB && nB(jB)
              }
            })
          })]
        })]
      })
    }

    function hz(BB) {
      let {
        settings: jB,
        onChange: zB
      } = BB;
      const {
        t: QB
      } = (0, IB.D)(), nB = (BB, QB) => {
        zB((0, qz.s)(jB, BB, QB))
      }, dB = function(BB, zB) {
        let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fz;
        const {
          min: dB,
          max: IB,
          step: NB
        } = qz.d[BB];
        return (0, pB.jsx)(MB.f, {
          name: zB,
          min: dB,
          max: IB,
          step: NB,
          initValue: jB[BB],
          format: QB,
          onChange: jB => {
            nB(BB, jB)
          }
        }, BB)
      }, NB = ["lines", "dot", "circle"].filter((BB => jB[BB])), uB = (BB, zB, QB) => (0, pB.jsx)(MB.b, {
        label: zB,
        checked: jB[BB],
        disabled: 1 === NB.length && NB[0] === BB,
        circleInfoText: QB,
        onClick: jB => {
          nB(BB, jB)
        }
      }, BB), UB = "shapes" === jB.style;
      return (0, pB.jsxs)(pB.Fragment, {
        children: [(0, pB.jsx)(MB.c, {
          label: QB("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: QB("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: QB("crosshairSettings:styleShapes")
          }],
          value: jB.style,
          onChange: BB => {
            nB("style", BB)
          }
        }), (0, pB.jsx)(Vz, {
          label: QB("crosshairSettings:color"),
          value: jB.color,
          swatches: Hz,
          onChange: BB => {
            nB("color", BB)
          }
        }), dB("opacity", QB("crosshairSettings:opacity"), Yz), !UB && dB("size", QB("crosshairSettings:size"), Yz), UB && (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [uB("lines", QB("crosshairSettings:lines")), jB.lines && dB("lineLength", QB("crosshairSettings:lineLength")), jB.lines && dB("lineThickness", QB("crosshairSettings:lineThickness")), jB.lines && dB("gap", QB("crosshairSettings:gap")), jB.lines && uB("tStyle", QB("crosshairSettings:tStyle"))]
        }), UB && (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [uB("dot", QB("crosshairSettings:dot")), jB.dot && dB("dotSize", QB("crosshairSettings:dotSize"))]
        }), UB && (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [uB("circle", QB("crosshairSettings:circle")), jB.circle && dB("circleRadius", QB("crosshairSettings:circleRadius")), jB.circle && dB("circleThickness", QB("crosshairSettings:circleThickness"))]
        }), (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [dB("outline", QB("crosshairSettings:outline"), (BB => BB > 0 ? Fz(BB) : QB("crosshairSettings:off"))), jB.outline > 0 && (0, pB.jsx)(Vz, {
            label: QB("crosshairSettings:outlineColor"),
            value: jB.outlineColor,
            swatches: Dz,
            onChange: BB => {
              nB("outlineColor", BB)
            }
          })]
        }), uB("growOnClick", QB("crosshairSettings:growOnClick")), UB && uB("forGuns", QB("crosshairSettings:forGuns"), QB("crosshairSettings:forGunsInfo"))]
      })
    }
    var Xz = zB(83),
      Zz = zB(1306),
      Az = zB(12809),
      Tz = zB(14003),
      Pz = zB(15471),
      Wz = zB(15960);
    const ez = ["sky", "grass", "stone", "sand", "snow", "night"],
      lz = "4rem";

    function wz(BB) {
      return {
        backgroundImage: `url(${BB})`,
        backgroundSize: `${lz} ${lz}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function xz(BB) {
      return {
        ...(() => {
          switch (BB) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return wz(Az);
            case "stone":
              return wz(Tz);
            case "sand":
              return wz(Pz);
            case "snow":
              return wz(Wz);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Kz(BB) {
      return Object.freeze({
        ...qz.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...BB
      })
    }
    const Cz = [{
        id: "default",
        settings: qz.g
      }, {
        id: "cross",
        settings: Kz({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Kz({
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
        settings: Kz({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Kz({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Kz({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Kz({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Kz({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      cz = ["growOnClick", "forGuns"];
    var bz = zB(34212);

    function vz(BB) {
      let {
        label: jB,
        selected: zB,
        onClick: QB,
        className: nB,
        style: IB,
        children: NB
      } = BB;
      return (0, pB.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": zB,
        title: jB,
        "aria-label": jB,
        "data-pad-focusable": !0,
        className: dB()("CrosshairBackdropSwatch", nB, {
          Selected: zB
        }),
        style: IB,
        onClick: QB,
        children: NB
      })
    }

    function Rz(BB) {
      let {
        backdrop: jB,
        onChange: zB,
        game: QB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)();
      return (0, pB.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": nB("crosshairSettings:background"),
        children: [QB && (0, pB.jsx)(vz, {
          label: nB("crosshairSettings:bg_game"),
          selected: QB.selected,
          onClick: QB.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, pB.jsx)(NB.c, {
            name: "cube"
          })
        }), ez.map((BB => (0, pB.jsx)(vz, {
          label: nB(`crosshairSettings:bg_${BB}`),
          selected: !(null !== QB && void 0 !== QB && QB.selected) && BB === jB,
          style: xz(BB),
          onClick: () => {
            zB(BB)
          }
        }, BB)))]
      })
    }

    function Oz(BB) {
      let {
        settings: jB,
        touch: zB,
        backdrop: QB,
        onChange: nB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)(), uB = function(BB) {
        var jB;
        return null !== (jB = Cz.find((jB => (0, qz.p)(jB.settings, BB, cz)))) && void 0 !== jB ? jB : null
      }(jB);
      return (0, pB.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": NB("crosshairSettings:presets"),
        children: Cz.map((BB => {
          const IB = (null === uB || void 0 === uB ? void 0 : uB.id) === BB.id;
          return (0, pB.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": IB,
            "data-pad-focusable": !0,
            className: dB()("CrosshairPreset", {
              Selected: IB
            }),
            onClick: () => {
              nB(function(BB, jB) {
                return {
                  ...jB.settings,
                  growOnClick: BB.growOnClick,
                  forGuns: BB.forGuns
                }
              }(jB, BB))
            },
            children: [(0, pB.jsx)("div", {
              className: "CrosshairPresetStage",
              style: xz(QB),
              children: (0, pB.jsx)(bz.b, {
                settings: BB.settings,
                touch: zB,
                inPreview: !0
              })
            }), (0, pB.jsx)("div", {
              className: "CrosshairPresetName",
              children: NB(`crosshairSettings:preset_${BB.id}`)
            })]
          }, BB.id)
        }))
      })
    }
    var BQ = zB(1701);

    function jQ(BB, jB) {
      const [zB, nB] = (0, QB.useState)(!1), dB = () => {
        nB(!1)
      }, [IB, NB] = (0, QB.useState)(!1), uB = (0, QB.useRef)({
        growOnClick: BB.growOnClick,
        forGuns: BB.forGuns
      });
      (0, QB.useEffect)((() => {
        const jB = uB.current;
        uB.current = {
          growOnClick: BB.growOnClick,
          forGuns: BB.forGuns
        }, (BB.growOnClick && !jB.growOnClick || BB.forGuns && !jB.forGuns) && NB(!0)
      }), [BB.growOnClick, BB.forGuns]), (0, QB.useEffect)((() => {
        if (!IB) return;
        const BB = setTimeout((() => {
          NB(!1)
        }), 600);
        return () => {
          clearTimeout(BB)
        }
      }), [IB]);
      const UB = zB || IB;
      return {
        view: {
          pressed: UB,
          spread: UB && BB.forGuns && !BB.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: BB => {
            !BB.target.closest(jB) && (0, BQ.e)(BB.currentTarget, BB.pointerId) && nB(!0)
          },
          onPointerUp: dB,
          onPointerCancel: dB,
          onLostPointerCapture: dB
        }
      }
    }

    function zQ(BB) {
      let {
        settings: jB,
        touch: zB,
        backdrop: QB,
        className: nB,
        children: IB,
        label: NB
      } = BB;
      const uB = jQ(jB, ".CrosshairStageControls");
      return (0, pB.jsxs)("div", {
        className: dB()("CrosshairStage", nB),
        style: xz(QB),
        ...uB.handlers,
        children: [(0, pB.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": NB,
          children: (0, pB.jsx)(bz.b, {
            settings: jB,
            touch: zB,
            inPreview: !0,
            ...uB.view
          })
        }), IB]
      })
    }
    const QQ = "crosshairFullScreen";

    function nQ(BB) {
      let {
        settings: jB,
        touch: zB,
        backdrop: nB,
        onBackdrop: uB,
        inGame: aB,
        onChange: rB,
        onClose: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = (0, QB.useRef)(null);
      (0, Zz.v)("popup", mB, sB),
      function(BB) {
        const jB = (0, QB.useRef)(BB);
        jB.current = BB, (0, QB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [QQ]: !0
          }, "");
          let BB = !1;
          const zB = () => {
            BB = !0, jB.current()
          };
          return window.addEventListener("popstate", zB), () => {
            var jB;
            window.removeEventListener("popstate", zB), !BB && null !== (jB = window.history.state) && void 0 !== jB && jB[QQ] && window.history.back()
          }
        }), [])
      }(sB);
      const yB = (0, QB.useRef)(sB);
      yB.current = sB, (0, QB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), yB.current())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), []);
      const kB = jQ(jB, ".CrosshairFullScreenPanel"),
        [GB, LB] = (0, QB.useState)(!0),
        gB = GB && aB;
      (0, QB.useEffect)((() => {
        if (gB) return EB.c.set({
          crosshairGameView: !0
        }), () => {
          EB.c.set({
            crosshairGameView: !1
          })
        }
      }), [gB]);
      const [tB, SB] = (0, QB.useState)(!0);
      return (0, Xz.createPortal)((0, pB.jsxs)("div", {
        ref: mB,
        className: "CrosshairFullScreen",
        style: gB ? void 0 : xz(nB),
        ...kB.handlers,
        children: [(0, pB.jsx)(bz.b, {
          settings: jB,
          touch: zB,
          inEditor: !0,
          ...kB.view
        }), (0, pB.jsxs)("div", {
          className: dB()("CrosshairFullScreenPanel", {
            Collapsed: !tB
          }),
          children: [(0, pB.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, pB.jsx)(Rz, {
              backdrop: nB,
              onChange: BB => {
                LB(!1), uB(BB)
              },
              game: aB ? {
                selected: gB,
                onSelect: () => {
                  LB(!0)
                }
              } : void 0
            }), (0, pB.jsx)(UB.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: JB(tB ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                SB(!tB)
              },
              children: (0, pB.jsx)(NB.c, {
                name: tB ? "caret-up" : "pen"
              })
            }), (0, pB.jsx)(UB.f, {
              className: "CrosshairFullScreenDone",
              onClick: sB,
              padDefaultFocus: !0,
              children: JB("crosshairSettings:done")
            })]
          }), tB && (0, pB.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, pB.jsx)(Oz, {
              settings: jB,
              touch: zB,
              backdrop: nB,
              onChange: rB
            }), (0, pB.jsx)(hz, {
              settings: jB,
              onChange: rB
            })]
          })]
        })]
      }), document.body)
    }
    var dQ = zB(2792),
      IQ = zB(34223);

    function NQ(BB) {
      let {
        settings: jB,
        onChange: zB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), uB = (0, IQ.g)(jB), [aB, rB] = (0, dQ.j)(), [sB, JB] = (0, QB.useState)(!1), mB = (0, QB.useRef)(null), [yB, kB] = (0, dQ.j)(), [GB, LB] = (0, QB.useState)(!1);
      return (0, pB.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, pB.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, pB.jsxs)(UB.M, {
            className: dB()("CrosshairCopy", {
              ActiveSecondaryButton: aB
            }),
            onClick: () => {
              (0, dQ.f)(uB, {
                useShareSheet: !1,
                onOutcome: BB => {
                  JB("failed" === BB), "copied" === BB && rB()
                }
              })
            },
            children: [(0, pB.jsx)(NB.c, {
              name: aB ? "check" : "copy"
            }), " ", nB(aB ? "general:copied" : "crosshairSettings:copy")]
          }), (0, pB.jsx)(tB.d, {
            className: "CrosshairPaste",
            domRef: mB,
            ariaLabel: nB("crosshairSettings:paste"),
            placeholderText: nB("crosshairSettings:paste"),
            onValueChange: BB => {
              const jB = (0, IQ.e)(BB);
              LB(!jB && BB.trim().length >= IQ.b), jB && (zB(jB), mB.current.value = "", kB())
            }
          })]
        }), sB && (0, pB.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: uB,
          "aria-label": nB("crosshairSettings:copy"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, pB.jsxs)("div", {
          "aria-live": "polite",
          children: [GB && (0, pB.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: nB("crosshairSettings:pasteInvalid")
          }), yB && !GB && (0, pB.jsx)("div", {
            className: "CrosshairShareNote",
            children: nB("crosshairSettings:applied")
          })]
        })]
      })
    }
    var uQ = zB(34229);
    let UQ = "sky";

    function aQ(BB) {
      let {
        showing: jB
      } = BB;
      const {
        t: zB
      } = (0, IB.D)(), {
        isTouchScreen: nB,
        gameState: dB,
        clientEscMenuOptions: uB
      } = (0, EB.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), aB = (0, uQ.e)(), [rB, sB] = (0, QB.useState)(UQ), JB = BB => {
        UQ = BB, sB(BB)
      }, [mB, yB] = (0, QB.useState)(!1);
      return (0, QB.useEffect)((() => {
        jB || yB(!1)
      }), [jB]), (0, pB.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, pB.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, pB.jsx)(zQ, {
            className: "CrosshairPreviewStage",
            settings: aB,
            touch: nB,
            backdrop: rB,
            label: zB("crosshairSettings:preview"),
            children: (0, pB.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, pB.jsx)(Rz, {
                backdrop: rB,
                onChange: JB
              }), (0, pB.jsxs)(UB.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  yB(!0)
                },
                children: [(0, pB.jsx)(NB.c, {
                  name: "expand"
                }), " ", zB("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, pB.jsx)("div", {
          className: "SettingBox",
          children: (0, pB.jsx)(Oz, {
            settings: aB,
            touch: nB,
            backdrop: rB,
            onChange: uQ.b
          })
        }), (0, pB.jsx)(NQ, {
          settings: aB,
          onChange: uQ.b
        }), nB && (0, pB.jsx)(iz.b, {
          note: (0, Ez.d)(nB, uB.touchActionButtons) ? zB("crosshairSettings:touchNote") : void 0
        }), (0, pB.jsx)(hz, {
          settings: aB,
          onChange: uQ.b
        }), mB && (0, pB.jsx)(nQ, {
          settings: aB,
          touch: nB,
          backdrop: rB,
          onBackdrop: JB,
          inGame: "inGame" === dB,
          onChange: uQ.b,
          onClose: () => {
            yB(!1)
          }
        })]
      })
    }
    var pQ = zB(8875),
      rQ = zB(1434),
      sQ = zB(5075),
      JQ = zB(34238),
      mQ = zB(4369),
      yQ = zB(2027),
      kQ = zB(752);
    const GQ = (0, QB.memo)((function() {
      const {
        clientEscMenuOptions: BB
      } = (0, EB.m)(["clientEscMenuOptions"]), {
        recording: jB,
        clipping: zB,
        hasClipBuffer: nB
      } = (0, hj.k)("replayRecorder"), IB = (0, hj.h)("connectedGame", (BB => BB.replay)), NB = (0, mQ.j)(), uB = !1 === (0, mB.i)("canRecordReplays");
      (0, QB.useEffect)((() => {
        GB.gameBridge.send("setRecorderPrefs", {
          clipping: BB.enableClipping,
          clipSeconds: BB.clipDurationSeconds
        })
      }), [BB.enableClipping, BB.clipDurationSeconds]);
      const aB = NB || IB,
        rB = !aB && !uB,
        sB = jB || rB,
        JB = rB,
        yB = JB && zB && !jB;

      function kB() {
        sB && GB.gameBridge.send("toggleRecording", null)
      }
      return (0, pB.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, pB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pB.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: jB ? (0, pB.jsxs)(pB.Fragment, {
              children: [(0, pB.jsxs)(UB.G, {
                className: "ReplayViewerCategoryButton",
                onClick: kB,
                disabled: !sB,
                children: [(0, pB.jsx)("span", {
                  children: "Stop Recording"
                }), (0, pB.jsx)(yQ.b, {
                  noaAction: "recordGame"
                })]
              }), (0, pB.jsx)(JQ.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, pB.jsxs)(UB.f, {
              className: "ReplayViewerCategoryButton",
              onClick: kB,
              disabled: !sB,
              children: [(0, pB.jsx)("span", {
                children: "Start Recording"
              }), (0, pB.jsx)(yQ.b, {
                noaAction: "recordGame"
              })]
            })
          }), uB && (0, pB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), aB && !jB && (0, pB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, pB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pB.jsx)(MB.b, {
            label: "Enable clipping",
            checked: BB.enableClipping,
            disabled: !JB,
            onClick: function(BB) {
              JB && EB.c.setClientEscMenuOptions({
                enableClipping: BB
              })
            },
            className: dB()({
              SettingBoxDisabled: !JB
            })
          }), (0, pB.jsx)(MB.f, {
            name: "Clip duration (seconds)",
            min: kQ.m,
            max: kQ.j,
            step: kQ.e,
            initValue: BB.clipDurationSeconds,
            onChange: function(BB) {
              EB.c.setClientEscMenuOptions({
                clipDurationSeconds: BB
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !JB || !BB.enableClipping
          })]
        }), (0, pB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pB.jsxs)(UB.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              yB && GB.gameBridge.send("saveClip", null)
            },
            disabled: !yB,
            children: [(0, pB.jsx)("span", {
              children: "Record clip"
            }), (0, pB.jsx)(yQ.b, {
              noaAction: "recordClip"
            })]
          }), BB.enableClipping && !nB && JB && !jB && (0, pB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), jB && (0, pB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, pB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pB.jsxs)(UB.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, mQ.i)(!0), EB.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: NB,
            children: [(0, pB.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, pB.jsx)(yQ.b, {
              noaAction: "replayViewerOpen"
            })]
          }), NB && (0, pB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, pB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pB.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, pB.jsx)("iframe", {
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
    var LQ = zB(1948);
    const gQ = {
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
        icon: () => (0, pB.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, pB.jsx)("path", {
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
      mJ: {
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

    function tQ() {
      return Promise.all([zB.e(78), zB.e(136), zB.e(135), zB.e(131)]).then((() => zB(41164))).then((BB => ({
        default: BB.ShaderPackCategory
      })), (BB => (console.error("Failed to load the shader pack settings", BB), {
        default: SQ
      })))
    }

    function SQ() {
      const {
        t: BB
      } = (0, IB.D)();
      return (0, pB.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: BB("shaderPack:tabLoadFailed")
      })
    }
    var MQ = zB(1418);
    const EQ = (0, QB.lazy)((() => zB.e(278).then((() => zB(41154))).then((BB => ({
        default: BB.BloxdInformation
      }))))),
      iQ = (0, QB.lazy)(tQ);

    function qQ(BB) {
      return BB ? "general" : "account"
    }
    const fQ = new Map,
      oQ = (0, QB.memo)((function(BB) {
        let {
          show: jB,
          setBeforeResumeCallback: zB
        } = BB;
        (0, yB.d)();
        const {
          gameState: nB,
          openSettingsCategory: dB
        } = (0, EB.m)(["gameState", "openSettingsCategory"]), {
          userContext: uB
        } = (0, JB.d)(), {
          t: aB
        } = (0, IB.D)(), tB = (0, sB.d)(), SB = (0, mB.i)("minChunkAddDist"), MB = "inGame" === nB, [iB, oB] = (0, QB.useState)(qQ(MB)), [HB, DB] = (0, QB.useState)(null), [FB, YB] = (0, QB.useState)([]), VB = (0, QB.useRef)(function() {
          const BB = new Date,
            jB = 6 * (BB.getMonth() + BB.getDate()) % kj.u.length;
          return [...kj.u, ...kj.u].slice(jB, jB + 6)
        }()), hB = (0, QB.useRef)(null), XB = (0, lj.h)(rQ.h, (0, rQ.b)()), ZB = Object.keys(gQ).filter((BB => {
          switch (BB) {
            case "replayViewer":
              return MB;
            case "developerTools":
              return uB.playerHasRank("developer") || !1;
            case "texturePack":
              return kB.featureFlags.settings.canChangeTexturePack;
            case "mJ":
              return kB.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return kB.featureFlags.useSocialFeatures || null !== uB.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== fB.siteUsed;
            case "controller":
              return kB.featureFlags.useControllerSupport && (XB || "controller" === iB);
            default:
              return !0
          }
        }));
        (0, lj.f)("toggleFullCoordinateOverlay", (() => {
          const BB = Jz("showCoordinates") && Jz("showChunkCoordinates") && Jz("showFPS");
          mz("showCoordinates", !BB), mz("showChunkCoordinates", !BB), mz("showFPS", !BB), tB()
        })), (0, lj.f)("updatedChunkLoadDist", (() => {
          tB()
        })), (0, QB.useEffect)((() => {
          if (DB(null), null === EB.c.get("openSettingsCategory")) {
            const BB = (0, MQ.l)() ? fQ.get(MB) : void 0;
            oB(BB && ZB.includes(BB) ? BB : qQ(MB))
          }
        }), [jB]), (0, QB.useEffect)((() => {
          null !== dB && (oB(dB), fQ.set(MB, dB), EB.c.set({
            openSettingsCategory: null
          }))
        }), [dB, MB]), (0, QB.useLayoutEffect)((() => {
          hB.current && (hB.current.scrollTop = 0)
        }), [iB, jB]), (0, QB.useEffect)((() => {
          "updateLog" === iB && (0, gB.e)().then(YB)
        }), [iB]), (0, QB.useEffect)((() => {
          if ((0, Nz.I)(SB)) return;
          const [BB, jB] = (0, Sz.e)(), [zB, QB] = (0, jz.d)(SB), nB = (0, LQ.h)(SB[0], BB, zB), dB = (0, LQ.h)(SB[1], jB, QB);
          GB.gameBridge.send("setChunkAddDistance", {
            horizontal: nB,
            vertical: dB
          })
        }), [SB]);
        const AB = (0, QB.useCallback)((async () => {
          HB && (await HB(), DB(null))
        }), [HB]);

        function TB() {
          EB.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, QB.useEffect)((() => {
          zB((() => AB))
        }), [AB, zB]), (0, pB.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: jB ? {} : {
            display: "none"
          },
          children: [(0, pB.jsx)("div", {
            className: "MenuSideBar",
            children: (0, pB.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, pB.jsx)(rB, {
                items: ZB.map((BB => {
                  const jB = gQ[BB].icon;
                  return {
                    id: BB,
                    faIcon: "string" === typeof jB ? jB : void 0,
                    iconElement: "string" === typeof jB ? void 0 : (0, pB.jsx)(jB, {}),
                    title: aB(gQ[BB].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: iB,
                onClick: BB => {
                  !async function(BB) {
                    await AB(), oB(BB), fQ.set(MB, BB)
                  }(BB)
                }
              })
            })
          }), (0, pB.jsxs)("div", {
            ref: hB,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === iB && (0, pB.jsx)(oj, {
              showing: jB,
              inGame: MB
            }), "general" === iB && (0, pB.jsx)(Pj, {
              inGame: MB
            }), "audio" === iB && (0, pB.jsx)(Wj, {}), "notifications" === iB && (0, pB.jsx)(Bz, {}), "graphics" === iB && (0, pB.jsx)(tz, {
              minChunkAddDist: null !== SB && void 0 !== SB ? SB : [2, 2],
              getValue: Jz,
              onChange: mz,
              setApplySettingsCallback: DB
            }), "controls" === iB && (0, pB.jsx)(Mz.d, {}), "crosshair" === iB && (0, pB.jsx)(aQ, {
              showing: jB
            }), "controller" === iB && kB.featureFlags.useControllerSupport && (0, pB.jsx)(pQ.e, {}), kB.featureFlags.settings.canChangeTexturePack && "texturePack" === iB && (0, pB.jsx)(sQ.b, {
              setApplySettingsCallback: DB
            }), kB.featureFlags.settings.canUseShaderPacks && "mJ" === iB && (0, pB.jsx)(QB.Suspense, {
              fallback: null,
              children: (0, pB.jsx)(iQ, {
                setApplySettingsCallback: DB
              })
            }), "updateLog" === iB && (0, pB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pB.jsx)("div", {
                className: "UpdateLogsContainer",
                children: FB.map(((BB, jB) => (0, pB.jsx)(LB.c, {
                  updateLog: BB,
                  index: jB,
                  close: TB
                }, jB)))
              })
            }), "information" === iB && (0, pB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pB.jsx)(QB.Suspense, {
                fallback: null,
                children: (0, pB.jsx)(EQ, {})
              })
            }), "alternativeDomains" === iB && (0, pB.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, pB.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: aB("settingsMenu:unblockedDomainsDescription")
              }), (0, pB.jsx)("div", {
                className: "AlternativeDomainsList",
                children: VB.current.map((BB => (0, pB.jsxs)(UB.f, {
                  onClick: () => {
                    window.open(`https://${BB}`)
                  },
                  children: [(0, pB.jsx)(NB.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", BB]
                }, BB)))
              })]
            }), "replayViewer" === iB && (0, pB.jsx)(GQ, {}), "developerTools" === iB && (0, pB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pB.jsx)(qB, {
                setApplySettingsCallback: DB
              })
            }), null !== HB && (0, pB.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, pB.jsx)(UB.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: AB,
                children: aB("general:apply")
              })
            })]
          })]
        })
      }));
    var HQ = zB(2733);
    const DQ = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      FQ = (0, QB.lazy)((() => Promise.resolve().then((() => zB(4746))).then((BB => {
        BB.needGameClientAfterPaint();
        const jB = BB.matchmakingLibrariesPromise.then((BB => (0, HQ.d)(BB.loadCharacterCustomisationUI(), (BB => BB.CharacterCustomisationUI))));
        return Promise.all([BB.ensureGameSetup(), jB]).then((BB => {
          let [, jB] = BB;
          return jB
        }))
      })))),
      YQ = "openCustomisationTab";

    function VQ(BB) {
      var jB, zB, nB;
      let {
        show: dB
      } = BB;
      const {
        userContext: IB
      } = (0, JB.d)(), NB = (0, PB.usePurchasesAllowed)(), uB = (0, QB.useRef)(null);
      var UB, aB;
      IB !== oB.NULL_USER_CONTEXT && (null === (jB = uB.current) || void 0 === jB ? void 0 : jB.whamm) !== IB.whamm && (uB.current = {
        whamm: IB.whamm,
        mountKey: (null !== (UB = null === (aB = uB.current) || void 0 === aB ? void 0 : aB.mountKey) && void 0 !== UB ? UB : -1) + 1
      });
      const [sB, mB] = (0, QB.useState)("characters");
      if ((0, lj.f)(YQ, mB), !dB) return null;
      const yB = DQ.filter((BB => "cape" !== BB && "nameColour" !== BB || IB.getPlayerRanks().includes("super") || NB)).map((BB => ({
        id: BB,
        faIcon: kj.C[BB],
        title: kj.F[BB],
        redDot: !1
      })));
      return (0, pB.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, pB.jsx)("div", {
          className: "MenuSideBar",
          children: (0, pB.jsx)(rB, {
            items: yB,
            selectedItemId: sB,
            onClick: BB => {
              mB(BB)
            }
          })
        }), (0, pB.jsx)("div", {
          className: "MenuBody",
          children: (0, pB.jsx)(QB.Suspense, {
            fallback: (0, pB.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, pB.jsx)(SB.e, {})
            }),
            children: (0, pB.jsx)(FQ, {
              selectedTab: sB
            }, null !== (zB = null === (nB = uB.current) || void 0 === nB ? void 0 : nB.mountKey) && void 0 !== zB ? zB : 0)
          })
        })]
      })
    }
    var hQ = zB(1501),
      XQ = zB(1507),
      ZQ = zB(34242),
      AQ = zB(4653),
      TQ = zB(3527),
      PQ = zB(3584),
      WQ = zB(34270),
      eQ = zB(8773),
      lQ = zB(34250),
      wQ = zB(34262),
      xQ = zB(1971),
      KQ = zB(1952),
      CQ = zB(5002),
      cQ = zB(1292),
      bQ = zB(1263),
      vQ = zB(1694),
      RQ = zB(8841),
      OQ = zB(2532),
      Bn = zB(2540);

    function jn(BB) {
      return BB ? Object.keys(BB).sort(((jB, zB) => {
        var QB, nB, dB, IB;
        const NB = (null !== (QB = null === (nB = BB[zB]) || void 0 === nB ? void 0 : nB.sortPriority) && void 0 !== QB ? QB : 0) - (null !== (dB = null === (IB = BB[jB]) || void 0 === IB ? void 0 : IB.sortPriority) && void 0 !== dB ? dB : 0);
        return 0 !== NB ? NB : jB.localeCompare(zB)
      })) : []
    }
    const zn = [{
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

    function Qn(BB) {
      for (const {
          threshold: jB,
          suffix: zB
        }
        of zn)
        if (BB >= jB) {
          const QB = BB / jB;
          return QB >= 100 ? `${Math.floor(QB)}${zB}` : QB >= 10 ? `${QB.toFixed(1).replace(/\.0$/,"")}${zB}` : `${QB.toFixed(2).replace(/\.?0+$/,"")}${zB}`
        } return String(BB)
    }
    var nn = zB(5097);
    const dn = {
        normal: "0.8em",
        big: "1em"
      },
      In = (0, QB.memo)((function(BB) {
        let {
          item: jB,
          amount: zB = 0,
          size: QB = "normal",
          tier: nB = null
        } = BB;
        return (0, pB.jsx)("div", {
          className: dB()("SmpSlot", `SmpSlot-${QB}`),
          children: jB && (0, pB.jsx)(xQ.c, {
            itemName: jB,
            amount: zB > 1 ? zB : 0,
            amountFontSize: dn[QB],
            enchantmentTier: nB
          })
        })
      }));

    function Nn(BB) {
      let {
        amount: jB,
        exact: zB = !1,
        className: QB
      } = BB;
      return (0, pB.jsxs)("span", {
        className: dB()("SmpGold", QB),
        children: [(0, pB.jsx)("span", {
          className: "SmpCoin",
          children: (0, pB.jsx)(xQ.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), zB ? jB.toLocaleString("en-US") : Qn(jB)]
      })
    }

    function un(BB) {
      let {
        count: jB = 5,
        grid: zB = !1
      } = BB;
      return (0, pB.jsx)("div", {
        className: zB ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: jB
        }, ((BB, jB) => (0, pB.jsxs)("div", {
          className: dB()(zB ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, pB.jsx)("div", {
            className: dB()("SmpSlot", zB ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, pB.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, pB.jsx)("b", {}), (0, pB.jsx)("small", {})]
          }), (0, pB.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, jB)))
      })
    }

    function Un(BB) {
      let {
        title: jB,
        children: zB
      } = BB;
      return (0, pB.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, pB.jsx)("b", {
          children: jB
        }), zB && (0, pB.jsx)("small", {
          children: zB
        })]
      })
    }

    function an(BB) {
      let {
        entry: jB
      } = BB;
      return (0, pB.jsx)(Un, {
        title: (0, pB.jsx)(KQ.e, {
          text: jB.item.customTitle
        }),
        children: (0, pB.jsx)(KQ.e, {
          text: jB.item.description
        })
      })
    }

    function pn(BB) {
      return (0, pB.jsx)(nn.e, {
        ...BB,
        className: dB()("SmpChoice", BB.className),
        reselectable: !0
      })
    }

    function rn() {
      return (0, pB.jsx)("span", {
        className: "SmpLoader",
        children: (0, pB.jsx)(SB.e, {})
      })
    }

    function sn(BB) {
      let {
        value: jB,
        onChange: zB,
        min: nB = 1,
        max: dB,
        step: IB = 1,
        label: NB
      } = BB;
      const uB = (0, QB.useRef)(null),
        UB = (0, QB.useRef)(jB);
      UB.current = jB;
      const [aB, rB] = (0, QB.useState)(null), sB = BB => Math.max(nB, Math.min(dB, Math.floor(BB))), JB = BB => {
        const jB = UB.current,
          QB = "function" === typeof IB ? IB(jB, BB) : IB,
          nB = sB(jB + QB * BB);
        UB.current = nB, zB(nB)
      };
      (0, QB.useEffect)((() => {
        if (null === aB) return;
        let BB;
        const jB = () => {
            rB(null)
          },
          zB = setTimeout((() => {
            BB = setInterval((() => {
              JB(aB);
              const BB = UB.current;
              (aB > 0 ? BB >= dB : BB <= nB) && jB()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", jB), window.addEventListener("pointercancel", jB), window.addEventListener("blur", jB), () => {
          clearTimeout(zB), clearInterval(BB), window.removeEventListener("pointerup", jB), window.removeEventListener("pointercancel", jB), window.removeEventListener("blur", jB)
        }
      }), [aB]), (0, QB.useEffect)((() => {
        const BB = uB.current;
        BB && document.activeElement !== BB && BB.value !== String(jB) && (BB.value = String(jB))
      }), [jB]), (0, QB.useEffect)((() => {
        const BB = uB.current;
        if (!BB) return;
        const jB = () => {
          BB.value = String(UB.current)
        };
        return BB.addEventListener("blur", jB), () => {
          BB.removeEventListener("blur", jB)
        }
      }), []);
      const mB = BB => (0, pB.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${BB>0?"More":"Less"} ${NB}`,
        disabled: BB > 0 ? jB >= dB : jB <= nB,
        onPointerDown: jB => {
          0 === jB.button && (JB(BB), rB(BB))
        },
        onKeyDown: jB => {
          "Enter" !== jB.key && " " !== jB.key || JB(BB)
        },
        onContextMenu: BB => {
          BB.preventDefault()
        },
        children: BB > 0 ? "+" : "\u2212"
      });
      return (0, pB.jsxs)("div", {
        className: "SmpStepper",
        children: [mB(-1), (0, pB.jsx)(tB.d, {
          className: "SmpStepperInput",
          domRef: uB,
          defaultValue: String(jB),
          ariaLabel: NB,
          type: "text",
          blurOnEnter: !0,
          onValueChange: BB => {
            const jB = BB.replace(/[^\d]/g, "");
            uB.current && jB !== BB && (uB.current.value = jB), "" !== jB && zB(sB(Number(jB)))
          }
        }), mB(1)]
      })
    }

    function Jn(BB) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, BB))) - 1))
    }
    var mn = zB(34264),
      yn = zB(1270);
    const kn = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    yn.y, AB.Kc.length;
    new Map;
    var Gn = zB(3402);

    function Ln(BB, jB) {
      var zB;
      return jB && (null === (zB = BB[jB]) || void 0 === zB ? void 0 : zB.smp) || null
    }

    function gn(BB, jB) {
      const zB = [];
      for (const nB of jn(BB)) {
        var QB;
        const dB = BB[nB];
        (null === (QB = dB.smp) || void 0 === QB ? void 0 : QB.kind) === jB && zB.push({
          key: nB,
          item: dB,
          meta: dB.smp
        })
      }
      return zB
    }

    function tn(BB, jB) {
      var zB;
      return null !== (zB = gn(BB, jB)[0]) && void 0 !== zB ? zB : null
    }
    const Sn = "50% 0% 50% 0%",
      Mn = [{
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

    function En(BB) {
      const jB = BB - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: zB,
          suffix: QB
        }
        of Mn)
        if (jB >= zB) return `${Math.floor(jB/zB)}${QB}`;
      return "<1s"
    }

    function qn(BB) {
      const jB = BB.map(eQ.d),
        zB = [];
      return jB.forEach(((BB, QB) => {
        const nB = function(BB) {
            const jB = BB.match(/\d+/);
            return jB ? Number(jB[0]) : 0
          }(BB),
          dB = QB === jB.length - 1;
        (dB || 1 === nB || 10 === nB || 100 === nB) && zB.push({
          label: BB,
          quantity: nB,
          isAll: dB
        })
      })), zB
    }
    let fn = null;

    function Hn(BB, jB) {
      const zB = jB.trim().toLowerCase();
      if (!zB) return [];
      const QB = BB => {
          if (BB === zB) return 0;
          if (BB.startsWith(zB)) return 1;
          const jB = BB.indexOf(zB);
          return -1 === jB ? -1 : 2 + jB
        },
        nB = [];
      for (const NB of BB) {
        const BB = [QB(NB.lowerLabel), QB(NB.lowerName)].filter((BB => -1 !== BB));
        BB.length && nB.push({
          item: NB,
          rank: Math.min(...BB)
        })
      }
      if (nB.length > 0) return nB.sort(((BB, jB) => BB.rank - jB.rank)).map((BB => BB.item));
      const dB = [...zB],
        IB = BB => {
          let jB = 0;
          for (const zB of dB) {
            if (jB = BB.indexOf(zB, jB), -1 === jB) return !1;
            jB++
          }
          return !0
        };
      return BB.filter((BB => IB(BB.lowerLabel) || IB(BB.lowerName)))
    }

    function Dn(BB, jB) {
      var zB;
      return null !== (zB = null === BB || void 0 === BB ? void 0 : BB[jB]) && void 0 !== zB ? zB : jB
    }

    function Fn(BB, jB) {
      const zB = BB.userInput;
      return void 0 !== jB && "dropdown" === (null === zB || void 0 === zB ? void 0 : zB.type) && zB.dropdownOptions.map(eQ.d).includes(jB) ? jB : function(BB) {
        const jB = BB.userInput;
        if ("dropdown" !== (null === jB || void 0 === jB ? void 0 : jB.type) || 0 === jB.dropdownOptions.length) return null;
        const zB = jB.dropdownOptions.map(eQ.d);
        return jB.initialValue && zB.includes(jB.initialValue) ? jB.initialValue : zB[zB.length - 1]
      }(BB)
    }

    function Yn(BB) {
      return void 0 === BB ? "" : JSON.stringify(BB)
    }
    const Vn = (0, QB.createContext)(null);

    function hn() {
      return (0, QB.useContext)(Vn)
    }
    var Xn = zB(2816);
    const Zn = (0, QB.memo)((function(BB) {
        let {
          name: jB,
          label: zB,
          onPick: QB
        } = BB;
        return (0, pB.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: zB,
          onClick: () => {
            QB(jB)
          },
          children: [(0, pB.jsx)(In, {
            item: jB,
            size: "big"
          }), (0, pB.jsx)("span", {
            children: zB
          })]
        })
      })),
      An = (0, QB.memo)((function(BB) {
        let {
          items: jB,
          query: zB,
          onPick: nB
        } = BB;
        const {
          t: dB
        } = (0, IB.D)(), [NB, uB] = (0, QB.useState)(new Set), UB = (0, QB.useMemo)((() => function(BB) {
          const jB = new Map;
          for (const zB of BB) {
            let BB = jB.get(zB.category);
            BB || (BB = [], jB.set(zB.category, BB)), BB.push(zB)
          }
          return [...kn, "other"].filter((BB => jB.has(BB))).map((BB => ({
            category: BB,
            items: jB.get(BB)
          })))
        }(jB)), [jB]), aB = (0, QB.useMemo)((() => Hn(jB, zB).slice(0, 60)), [jB, zB]);
        return zB.trim() ? 0 === aB.length ? (0, pB.jsx)(Un, {
          title: dB("smpShop:noItemsFound", {
            query: zB.trim()
          }),
          children: dB("smpShop:tryShorterName")
        }) : (0, pB.jsx)(Xn.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Sn,
          observerUpdateDeps: [zB],
          children: aB.map((BB => (0, pB.jsx)(Zn, {
            name: BB.name,
            label: BB.label,
            onPick: nB
          }, BB.name)))
        }) : (0, pB.jsx)(pB.Fragment, {
          children: UB.map((BB => {
            let {
              category: jB,
              items: zB
            } = BB;
            const QB = NB.has(jB) || zB.length <= 48,
              IB = QB ? zB : zB.slice(0, 48);
            return (0, pB.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, pB.jsxs)("h4", {
                children: [dB("other" === jB ? "smpShop:otherItems" : `creativeInventory:${jB}`), !QB && (0, pB.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    uB(new Set([...NB, jB]))
                  },
                  children: dB("smpShop:showAll", {
                    count: zB.length
                  })
                })]
              }), (0, pB.jsx)(Xn.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Sn,
                observerUpdateDeps: [QB],
                children: IB.map((BB => (0, pB.jsx)(Zn, {
                  name: BB.name,
                  label: BB.label,
                  onPick: nB
                }, BB.name)))
              })]
            }, jB)
          }))
        })
      }));

    function Tn(BB, jB) {
      const {
        searched: zB,
        shown: nB,
        searchFor: dB,
        loading: IB
      } = function(BB, jB) {
        var zB;
        const nB = hn(),
          [dB, IB] = (0, QB.useState)(void 0),
          NB = (0, QB.useRef)(void 0),
          uB = (0, QB.useRef)(0),
          UB = (0, QB.useRef)(void 0),
          aB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.meta.item) && void 0 !== zB ? zB : null,
          pB = !!BB && nB.isPending(BB.key);
        (0, QB.useEffect)((() => {
          if (!BB || pB || !jB || void 0 === dB || dB === aB) return;
          const zB = dB === NB.current && nB.gaveUpAt(BB.key) > uB.current && UB.current !== dB;
          (dB !== NB.current || zB) && nB.act(BB.key, null !== dB && void 0 !== dB ? dB : "*", zB) && (zB && (UB.current = dB), NB.current = dB, uB.current = Date.now())
        }), [BB, pB, jB, dB, aB, nB]);
        const rB = (0, QB.useCallback)((BB => {
            NB.current = void 0, UB.current = void 0, IB(BB)
          }), []),
          sB = void 0 !== dB && dB !== aB && (pB || NB.current !== dB);
        return {
          searched: aB,
          shown: sB ? dB : aB,
          searchFor: rB,
          loading: sB || pB || null !== aB && !jB
        }
      }(BB, jB), NB = (0, QB.useMemo)((() => function() {
        var BB;
        let jB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const nB = `${(0,Gn.f)()}\x1f${jB.join("\x1e")}\x1f${zB.join("\x1e")}\x1f${JSON.stringify(QB)}`;
        if ((null === (BB = fn) || void 0 === BB ? void 0 : BB.key) === nB) return fn.items;
        const dB = new Set(zB),
          IB = new Set,
          NB = [],
          uB = (BB, jB) => {
            var zB;
            if (!BB || IB.has(BB) || dB.has(BB)) return;
            IB.add(BB);
            const nB = null !== (zB = QB[BB]) && void 0 !== zB ? zB : BB;
            NB.push({
              name: BB,
              label: nB,
              lowerLabel: nB.toLowerCase(),
              lowerName: BB.toLowerCase(),
              category: jB
            })
          };
        for (const aB of (0, mn.creativeItemIds)()) {
          var UB;
          (0, mn.itemIsDisabled)(aB, !0, !0, !1) || (0, mn.showOnlyInCreativeSearch)(aB) || uB((0, Gn.e)(aB), null !== (UB = (0, mn.creativeCategoryOf)(aB)) && void 0 !== UB ? UB : "other")
        }
        for (const aB of jB) uB(aB, "other");
        return fn = {
          key: nB,
          items: NB
        }, NB
      }(null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names)), [null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names]), [uB, UB] = (0, QB.useState)(""), [aB, pB] = (0, QB.useState)(0), [rB, sB] = (0, QB.useState)("recent"), JB = (0, QB.useCallback)((BB => {
        UB(""), pB((BB => BB + 1)), dB(BB)
      }), [dB]), mB = "browse" === rB || "" !== uB.trim();
      return {
        searched: zB,
        shown: nB,
        searchFor: dB,
        loading: IB,
        catalogue: NB,
        names: null === BB || void 0 === BB ? void 0 : BB.meta.names,
        query: uB,
        setQuery: UB,
        searchBoxKey: aB,
        pickItem: JB,
        setView: sB,
        browsing: mB
      }
    }

    function Pn(BB) {
      let {
        browser: jB,
        children: zB
      } = BB;
      const {
        t: QB
      } = (0, IB.D)(), nB = hn();
      return (0, pB.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, pB.jsx)("div", {
          className: "SmpSearch",
          children: (0, pB.jsx)(tB.d, {
            className: "SmpSearchInput",
            placeholderText: QB("smpShop:searchPlaceholder"),
            defaultValue: jB.query,
            onValueChange: BB => {
              jB.setQuery(BB), jB.searched && BB.trim() && jB.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const BB = Hn(jB.catalogue, jB.query)[0];
              BB ? jB.pickItem(BB.name) : jB.query.trim() && nB.notify(QB("smpShop:noItemsFound", {
                query: jB.query.trim()
              }))
            }
          }, jB.searchBoxKey)
        }), zB]
      })
    }

    function Wn(BB) {
      let {
        browser: jB,
        recentLabel: zB,
        children: QB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)();
      return (0, pB.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, pB.jsx)(pn, {
          options: [{
            value: "recent",
            label: zB
          }, {
            value: "browse",
            label: nB("smpShop:browseItems")
          }],
          value: jB.browsing ? "browse" : "recent",
          onChange: jB.setView,
          ariaLabel: nB("smpShop:show")
        }), !jB.browsing && QB]
      })
    }

    function en(BB) {
      let {
        item: jB,
        names: zB,
        summary: QB,
        onBack: nB,
        children: dB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)();
      return (0, pB.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, pB.jsx)(UB.c, {
          className: "SmpBackButton",
          onClick: nB,
          children: NB("general:back")
        }), (0, pB.jsx)(In, {
          item: jB,
          size: "big"
        }), (0, pB.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, pB.jsx)("b", {
            children: Dn(zB, jB)
          }), QB && (0, pB.jsx)("small", {
            children: QB
          })]
        }), dB]
      })
    }

    function wn(BB) {
      let {
        browser: jB,
        className: zB,
        action: QB,
        above: nB,
        list: IB,
        summary: NB,
        recentLabel: uB,
        listControls: UB,
        onBack: aB
      } = BB;
      return (0, pB.jsxs)("div", {
        className: dB()("SmpScreen", zB),
        children: [(0, pB.jsx)(Pn, {
          browser: jB,
          children: QB
        }), jB.shown && (0, pB.jsx)(en, {
          item: jB.shown,
          names: jB.names,
          summary: !jB.loading && NB,
          onBack: () => {
            null === aB || void 0 === aB || aB(), jB.searchFor(null)
          },
          children: UB
        }), nB, jB.shown ? IB : (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)(Wn, {
            browser: jB,
            recentLabel: uB,
            children: UB
          }), jB.browsing ? (0, pB.jsx)(An, {
            items: jB.catalogue,
            query: jB.query,
            onPick: jB.pickItem
          }) : IB]
        })]
      })
    }

    function xn(BB, jB) {
      const zB = BB.map((BB => {
        let {
          meta: jB
        } = BB;
        return jB.pricePerItem
      }));
      return "min" === jB ? Math.min(...zB) : Math.max(...zB)
    }
    var Kn = zB(6539);
    const Cn = (0, QB.memo)((function(BB) {
      var jB;
      const {
        t: zB
      } = (0, IB.D)(), QB = null === BB.seller, nB = BB.quantity * BB.pricePerItem;
      return (0, pB.jsxs)("div", {
        className: BB.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, pB.jsx)(In, {
          item: BB.item,
          amount: BB.quantity,
          size: BB.grid ? "big" : "normal",
          tier: BB.tier
        }), (0, pB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pB.jsx)("b", {
            children: (0, pB.jsx)(KQ.e, {
              text: null !== (jB = BB.title) && void 0 !== jB ? jB : `${BB.quantity}x ${BB.item}`
            })
          }), (0, pB.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, pB.jsx)("span", {
              children: QB ? zB("smpShop:you") : (0, pB.jsx)(KQ.e, {
                text: [{
                  entityName: BB.seller
                }]
              })
            }), (0, pB.jsx)("span", {
              children: zB("smpShop:timeLeft", {
                time: En(BB.expiresAt)
              })
            })]
          })]
        }), (0, pB.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, pB.jsx)(Nn, {
            amount: BB.pricePerItem
          }), (0, pB.jsx)("small", {
            children: zB("smpShop:each")
          })]
        }), (0, pB.jsx)(UB.f, {
          className: "SmpBuyButton",
          disabled: QB || !BB.canAfford && !BB.busy,
          loading: BB.busy,
          onClick: () => {
            BB.onBuy(BB.itemKey)
          },
          children: QB ? zB("smpShop:yours") : (0, pB.jsx)(Nn, {
            amount: nB
          })
        })]
      })
    }));

    function cn(BB) {
      let {
        view: jB,
        onChange: zB
      } = BB;
      const {
        t: QB
      } = (0, IB.D)();
      return (0, pB.jsx)(nn.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: QB("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, pB.jsx)(NB.c, {
            name: "list"
          }),
          ariaLabel: QB("smpShop:listView")
        }, {
          value: "grid",
          label: (0, pB.jsx)(NB.c, {
            name: "grid-2"
          }),
          ariaLabel: QB("smpShop:gridView")
        }],
        value: jB,
        onChange: zB
      })
    }

    function bn(BB) {
      let {
        entries: jB,
        view: zB
      } = BB;
      const {
        t: QB
      } = (0, IB.D)(), nB = hn(), dB = "grid" === zB;
      return (0, pB.jsxs)(pB.Fragment, {
        children: [!dB && (0, pB.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, pB.jsx)("span", {}), (0, pB.jsx)("span", {
            children: QB("smpShop:columnItem")
          }), (0, pB.jsx)("span", {
            children: QB("smpShop:columnPriceEach")
          }), (0, pB.jsx)("span", {
            children: QB("smpShop:columnTotal")
          })]
        }), (0, pB.jsx)(Xn.d, {
          lazyLoadedClassName: dB ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Sn,
          observerUpdateDeps: [jB.length],
          children: jB.map((BB => {
            var jB, zB;
            let {
              key: QB,
              item: IB,
              meta: NB
            } = BB;
            const uB = NB.quantity * NB.pricePerItem;
            return (0, pB.jsx)(Cn, {
              itemKey: QB,
              item: NB.item,
              title: IB.customTitle,
              quantity: NB.quantity,
              pricePerItem: NB.pricePerItem,
              seller: NB.seller,
              expiresAt: NB.expiresAt,
              tier: null !== (jB = null === (zB = IB.enchant) || void 0 === zB ? void 0 : zB.tier) && void 0 !== jB ? jB : null,
              busy: nB.isPending(QB) || null !== NB.seller && !1 === IB.canBuy,
              canAfford: nB.canAfford(IB, uB),
              grid: dB,
              onBuy: nB.act
            }, QB)
          }))
        }, zB)]
      })
    }
    const vn = [1, 10, 100],
      Rn = [1, 10, 100, 999];

    function On(BB) {
      var jB, zB, nB, uB, aB, rB, sB, JB, mB, yB;
      const {
        t: kB
      } = (0, IB.D)(), GB = hn(), {
        creator: LB,
        mode: gB
      } = BB, [SB, MB] = (0, QB.useState)(null !== (jB = null === LB || void 0 === LB ? void 0 : LB.meta.item) && void 0 !== jB ? jB : null), [EB, iB] = (0, QB.useState)(1), [qB, fB] = (0, QB.useState)(0), [oB, HB] = (0, QB.useState)(""), [DB, FB] = (0, QB.useState)(0), YB = (0, QB.useRef)(SB), VB = (0, QB.useRef)(!1), [hB, XB] = (0, QB.useState)(!1), ZB = null !== (zB = null === LB || void 0 === LB ? void 0 : LB.meta.item) && void 0 !== zB ? zB : null, AB = null !== (nB = null === LB || void 0 === LB ? void 0 : LB.meta.owned) && void 0 !== nB ? nB : 0;
      (0, QB.useEffect)((() => {
        BB.searching || null === ZB || ZB === YB.current || (YB.current = ZB, VB.current = !1, MB(ZB), fB(0), iB("list" === gB ? Math.max(1, AB) : 1))
      }), [ZB, BB.searching]);
      const TB = !!LB && !!SB && LB.meta.item === SB,
        PB = TB ? LB.meta.owned : null !== (uB = null === (aB = BB.inventory) || void 0 === aB || null === (rB = aB.find((BB => BB.item === SB))) || void 0 === rB ? void 0 : rB.quantity) && void 0 !== uB ? uB : 0,
        WB = "list" === gB ? Math.max(1, PB) : 45954,
        eB = null !== (sB = BB.prices[0]) && void 0 !== sB ? sB : null,
        lB = BB.prices.length ? Math.round(BB.prices.reduce(((BB, jB) => BB + jB), 0) / BB.prices.length) : null,
        wB = null === (JB = BB.inventory) || void 0 === JB || null === (mB = JB.find((BB => BB.item === SB))) || void 0 === mB ? void 0 : mB.sellPrice;
      (0, QB.useEffect)((() => {
        var BB;
        TB && (iB((BB => "list" === gB ? Math.min(Math.max(1, BB), Math.max(1, PB)) : BB)), VB.current || fB(null !== (BB = null !== eB && void 0 !== eB ? eB : lB) && void 0 !== BB ? BB : Math.max(1, null !== wB && void 0 !== wB ? wB : 1)))
      }), [TB, PB, SB, eB, lB]);
      const xB = BB => {
          VB.current = !0, fB(BB)
        },
        KB = jB => {
          var zB, QB, nB;
          YB.current = jB, VB.current = !1, XB(!1), HB(""), FB((BB => BB + 1)), MB(jB), fB(0), iB("list" === gB && null !== (zB = null === (QB = BB.inventory) || void 0 === QB || null === (nB = QB.find((BB => BB.item === jB))) || void 0 === nB ? void 0 : nB.quantity) && void 0 !== zB ? zB : 1), (null === LB || void 0 === LB ? void 0 : LB.meta.item) !== jB && BB.onPickItem(jB)
        },
        CB = EB * qB,
        cB = "list" === gB && null !== LB && void 0 !== LB && LB.meta.fee ? function(BB, jB) {
          const zB = Math.max(0, jB - BB.taxFreeAllowance);
          return Math.ceil(Math.round(zB * BB.rate * 1e6) / 1e6)
        }(LB.meta.fee, CB) : 0,
        bB = !!LB && GB.isPending(LB.key),
        vB = TB && !BB.searching && EB >= 1 && qB >= 1 && ("order" === gB || PB >= EB) && !bB,
        RB = !!SB && !TB && !BB.searching && EB >= 1 && qB >= 1,
        OB = () => {
          vB ? GB.act(LB.key, `${EB}|${qB}`) : RB && (BB.onPickItem(SB), XB(!0))
        };
      (0, QB.useEffect)((() => {
        hB && TB && !BB.searching && (XB(!1), OB())
      }), [hB, TB, BB.searching]);
      const Bj = !!SB && !TB && (BB.searching || hB),
        jj = SB ? Dn(BB.names, SB) : "",
        zj = (0, QB.useMemo)((() => Hn(BB.catalogue, oB).slice(0, 8)), [BB.catalogue, oB]),
        Qj = ("list" === gB ? vn.filter((BB => BB < PB)) : Rn).map((BB => ({
          value: BB,
          label: String(BB)
        })));
      "list" === gB && PB > 0 && Qj.push({
        value: PB,
        label: kB("smpShop:all", {
          count: PB
        })
      });
      const nj = [];
      return null !== eB && (eB > 1 && nj.push({
        value: eB - 1,
        label: kB("smpShop:undercut", {
          price: Qn(eB - 1)
        })
      }), nj.push({
        value: eB,
        label: kB("smpShop:lowest", {
          price: Qn(eB)
        })
      })), null !== lB && lB !== eB && nj.push({
        value: lB,
        label: kB("smpShop:average", {
          price: Qn(lB)
        })
      }), (0, pB.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, pB.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, pB.jsx)("b", {
            children: kB("list" === gB ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, pB.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": kB("smpShop:close"),
            onClick: BB.onClose,
            children: (0, pB.jsx)(NB.c, {
              name: "xmark"
            })
          })]
        }), "list" === gB && (0, pB.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (yB = BB.inventory) && void 0 !== yB && yB.length ? BB.inventory.map((BB => {
            let {
              item: jB,
              quantity: zB
            } = BB;
            return (0, pB.jsx)("button", {
              type: "button",
              title: jB,
              className: dB()("SmpPickerSlot", {
                SmpPickerSlotOn: jB === SB
              }),
              onClick: () => {
                KB(jB)
              },
              children: (0, pB.jsx)(In, {
                item: jB,
                amount: zB
              })
            }, jB)
          })) : (0, pB.jsx)("span", {
            className: "SmpMuted",
            children: kB("smpShop:nothingToList")
          })
        }), ("list" === gB || !SB) && (0, pB.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, pB.jsx)(tB.d, {
            className: "SmpSearchInput",
            placeholderText: kB("list" === gB ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: oB,
            onValueChange: HB,
            blurOnEnter: !0,
            onEnter: () => {
              zj[0] && KB(zj[0].name)
            }
          }, DB), zj.length > 0 && (0, pB.jsx)("div", {
            className: "SmpPicker",
            children: zj.map((BB => {
              let {
                name: jB
              } = BB;
              return (0, pB.jsx)("button", {
                type: "button",
                title: jB,
                className: dB()("SmpPickerSlot", {
                  SmpPickerSlotOn: jB === SB
                }),
                onClick: () => {
                  KB(jB)
                },
                children: (0, pB.jsx)(In, {
                  item: jB
                })
              }, jB)
            }))
          })]
        }), SB && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsxs)("div", {
            className: "SmpPickedName",
            children: [jj, Bj && (0, pB.jsx)(rn, {})]
          }), (0, pB.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, pB.jsxs)("div", {
              className: "SmpField",
              children: [(0, pB.jsxs)("span", {
                children: [kB("smpShop:quantity"), "list" === gB && TB && (0, pB.jsx)("small", {
                  children: kB("smpShop:youHave", {
                    count: PB
                  })
                })]
              }), (0, pB.jsx)(sn, {
                value: EB,
                onChange: iB,
                max: WB,
                label: kB("smpShop:quantity")
              }), (0, pB.jsx)(pn, {
                options: Qj,
                value: EB,
                onChange: iB,
                ariaLabel: kB("smpShop:quantity")
              })]
            }), (0, pB.jsxs)("div", {
              className: "SmpField",
              children: [(0, pB.jsx)("span", {
                children: kB("smpShop:pricePerItem")
              }), (0, pB.jsx)(sn, {
                value: Math.max(1, qB),
                onChange: xB,
                max: 9999999,
                step: Jn,
                label: kB("smpShop:pricePerItem")
              }), (0, pB.jsx)(pn, {
                options: nj,
                value: qB,
                onChange: xB,
                ariaLabel: kB("smpShop:pricePerItem")
              })]
            })]
          }), "list" === gB && (0, pB.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, pB.jsxs)("span", {
              children: [kB("smpShop:youGet"), " ", (0, pB.jsx)(Nn, {
                amount: Math.max(0, CB - cB),
                exact: !0
              })]
            }), (0, pB.jsx)("small", {
              children: cB > 0 ? kB("smpShop:listingFee", {
                fee: cB.toLocaleString("en-US")
              }) : kB("smpShop:listingRules")
            })]
          }), (0, pB.jsx)(UB.r, {
            className: "SmpSubmit",
            disabled: !vB && !RB && !bB,
            loading: bB || Bj || TB && BB.searching,
            onClick: OB,
            children: "list" === gB ? kB("smpShop:listButton", {
              count: EB,
              item: jj
            }) : (0, pB.jsxs)(pB.Fragment, {
              children: [kB("smpShop:orderButton", {
                count: EB,
                item: jj
              }), " ", qB >= 1 && (0, pB.jsx)(Nn, {
                amount: CB
              })]
            })
          })]
        })]
      })
    }

    function Bd() {
      var BB;
      const {
        t: jB
      } = (0, IB.D)(), zB = hn(), nB = null === (BB = zB.shopInfo[zB.categoryKey]) || void 0 === BB ? void 0 : BB.items, dB = tn(nB, "search"), NB = tn(nB, "creator"), uB = gn(nB, "enchantedCreator"), aB = gn(nB, "listing"), rB = tn(nB, "empty"), sB = Tn(dB, aB.length > 0 || null !== rB), {
        searched: JB,
        shown: mB,
        loading: yB
      } = sB, [kB, GB] = (0, QB.useState)(!1), [LB, gB] = function() {
        const [BB, jB] = (0, Kn.e)("smpMarketView", "list");
        return ["grid" === BB ? "grid" : "list", jB]
      }(), tB = "grid" === LB, SB = (0, QB.useMemo)((() => aB.filter((BB => {
        let {
          meta: jB
        } = BB;
        return null !== jB.seller && jB.item === JB
      })).map((BB => {
        let {
          meta: jB
        } = BB;
        return jB.pricePerItem
      })).sort(((BB, jB) => BB - jB))), [aB, JB]), MB = (0, QB.useMemo)((() => {
        const BB = new Set(sB.catalogue.map((BB => {
          let {
            name: jB
          } = BB;
          return jB
        })));
        return function(BB) {
          for (const jB in BB)
            if ("sell" === BB[jB].smp) return gn(BB[jB].items, "sell").filter((BB => {
              let {
                item: jB
              } = BB;
              return !jB.enchant
            })).map((BB => {
              let {
                meta: jB
              } = BB;
              return {
                item: jB.item,
                quantity: jB.quantity,
                sellPrice: jB.pricePerItem
              }
            }));
          return []
        }(zB.shopInfo).filter((jB => {
          let {
            item: zB
          } = jB;
          return BB.has(zB)
        }))
      }), [zB.shopInfo, sB.catalogue]);
      return (0, pB.jsx)(wn, {
        browser: sB,
        className: "SmpMarketTab",
        recentLabel: jB("smpShop:recentlyListed"),
        action: (0, pB.jsx)(UB.r, {
          className: "SmpSellButton",
          onClick: () => {
            GB((BB => !BB))
          },
          children: jB("smpShop:sell")
        }),
        above: kB && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)(On, {
            mode: "list",
            creator: NB,
            inventory: MB,
            catalogue: sB.catalogue,
            names: sB.names,
            searching: yB,
            prices: SB,
            onPickItem: sB.searchFor,
            onClose: () => {
              GB(!1)
            }
          }), uB.length > 0 && (0, pB.jsx)(jd, {
            entries: uB
          })]
        }),
        listControls: (0, pB.jsx)(cn, {
          view: LB,
          onChange: gB
        }),
        summary: mB && (aB.length > 0 ? jB(1 === aB.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: aB.length,
          price: Qn(xn(aB, "min"))
        }) : jB("smpShop:noOneSelling", {
          item: Dn(sB.names, mB)
        })),
        list: yB ? (0, pB.jsx)(un, {
          grid: tB
        }) : aB.length > 0 ? (0, pB.jsx)(bn, {
          entries: aB,
          view: LB
        }) : rB ? (0, pB.jsx)(an, {
          entry: rB
        }) : (0, pB.jsx)(un, {
          count: 3,
          grid: tB
        })
      })
    }

    function jd(BB) {
      let {
        entries: jB
      } = BB;
      const {
        t: zB
      } = (0, IB.D)(), nB = hn(), [dB, NB] = (0, QB.useState)({});
      return (0, pB.jsx)("div", {
        className: "SmpList",
        children: jB.map((BB => {
          var jB, QB, IB;
          let {
            key: uB,
            item: aB,
            meta: rB
          } = BB;
          const sB = null !== (jB = dB[uB]) && void 0 !== jB ? jB : 1;
          return (0, pB.jsxs)("div", {
            className: "SmpRow",
            children: [(0, pB.jsx)(In, {
              item: rB.item,
              amount: rB.quantity,
              tier: null !== (QB = null === (IB = aB.enchant) || void 0 === IB ? void 0 : IB.tier) && void 0 !== QB ? QB : null
            }), (0, pB.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, pB.jsx)("b", {
                children: (0, pB.jsx)(KQ.e, {
                  text: aB.customTitle
                })
              }), (0, pB.jsx)("small", {
                children: zB("smpShop:enchantedListing")
              })]
            }), (0, pB.jsx)(sn, {
              value: sB,
              onChange: BB => {
                NB({
                  ...dB,
                  [uB]: BB
                })
              },
              max: 9999999,
              step: Jn,
              label: zB("smpShop:pricePerItem")
            }), (0, pB.jsxs)(UB.r, {
              loading: nB.isPending(uB),
              onClick: () => {
                nB.act(uB, String(sB))
              },
              children: [zB("smpShop:list"), " ", (0, pB.jsx)(Nn, {
                amount: sB
              })]
            })]
          }, uB)
        }))
      })
    }
    const zd = (0, QB.memo)((function(BB) {
      let {
        itemKey: jB,
        item: zB,
        quantity: QB,
        pricePerItem: nB,
        tier: IB,
        selected: NB,
        onSelect: uB
      } = BB;
      return (0, pB.jsxs)("button", {
        type: "button",
        className: dB()("SmpInventorySlot", {
          SmpInventorySlotOn: NB
        }),
        title: zB,
        onClick: () => {
          uB(jB)
        },
        children: [(0, pB.jsx)(In, {
          item: zB,
          amount: QB,
          tier: IB
        }), (0, pB.jsx)(Nn, {
          amount: nB
        })]
      })
    }));

    function Qd() {
      var BB;
      const {
        t: jB
      } = (0, IB.D)(), zB = hn(), nB = null === (BB = zB.shopInfo[zB.categoryKey]) || void 0 === BB ? void 0 : BB.items, NB = gn(nB, "sell"), uB = tn(nB, "empty"), [UB, aB] = (0, QB.useState)(null), [rB, sB] = (0, QB.useState)({}), JB = NB.find((BB => {
        let {
          key: jB
        } = BB;
        return jB === UB
      }));
      return 0 === NB.length ? (0, pB.jsx)("div", {
        className: "SmpScreen",
        children: (0, pB.jsx)(Un, {
          title: uB ? (0, pB.jsx)(KQ.e, {
            text: uB.item.customTitle
          }) : jB("smpShop:nothingToSell"),
          children: uB && (0, pB.jsx)(KQ.e, {
            text: uB.item.description
          })
        })
      }) : (0, pB.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, pB.jsx)("div", {
          className: "SmpInventoryGrid",
          children: NB.map((BB => {
            var jB, zB;
            let {
              key: QB,
              item: nB,
              meta: dB
            } = BB;
            return (0, pB.jsx)(zd, {
              itemKey: QB,
              item: dB.item,
              quantity: dB.quantity,
              pricePerItem: dB.pricePerItem,
              tier: null !== (jB = null === (zB = nB.enchant) || void 0 === zB ? void 0 : zB.tier) && void 0 !== jB ? jB : null,
              selected: QB === UB,
              onSelect: aB
            }, QB)
          }))
        }), (0, pB.jsx)("div", {
          className: dB()("SmpSellBar", {
            SmpSellBarIdle: !JB
          }),
          children: JB ? (0, pB.jsx)(nd, {
            entry: JB,
            choice: Fn(JB.item, rB[JB.key]),
            onChoose: BB => {
              sB({
                ...rB,
                [JB.key]: BB
              })
            }
          }) : (0, pB.jsx)("span", {
            className: "SmpMuted",
            children: jB("smpShop:tapToSell")
          })
        })]
      })
    }

    function nd(BB) {
      var jB, zB, QB, nB;
      let {
        entry: dB,
        choice: NB,
        onChoose: uB
      } = BB;
      const {
        t: aB
      } = (0, IB.D)(), rB = hn(), {
        key: sB,
        item: JB,
        meta: mB
      } = dB, yB = qn("dropdown" === (null === (jB = JB.userInput) || void 0 === jB ? void 0 : jB.type) ? JB.userInput.dropdownOptions : []), kB = null === NB ? 0 : -(0, eQ.b)(JB, NB);
      return (0, pB.jsxs)(pB.Fragment, {
        children: [(0, pB.jsx)(In, {
          item: mB.item,
          amount: mB.quantity,
          tier: null !== (zB = null === (QB = JB.enchant) || void 0 === QB ? void 0 : QB.tier) && void 0 !== zB ? zB : null
        }), (0, pB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pB.jsx)("b", {
            children: (0, pB.jsx)(KQ.e, {
              text: null !== (nB = JB.customTitle) && void 0 !== nB ? nB : mB.item
            })
          }), (0, pB.jsx)("small", {
            children: aB("smpShop:sellEach", {
              count: mB.quantity
            })
          })]
        }), (0, pB.jsx)(pn, {
          options: yB.map((BB => {
            let {
              label: jB,
              quantity: zB,
              isAll: QB
            } = BB;
            return {
              value: jB,
              label: QB ? aB("smpShop:all", {
                count: zB
              }) : String(zB)
            }
          })),
          value: NB,
          onChange: uB,
          ariaLabel: aB("smpShop:quantity")
        }), (0, pB.jsxs)(UB.r, {
          loading: rB.isPending(sB),
          disabled: null === NB,
          onClick: () => {
            rB.act(sB, NB)
          },
          children: [aB("smpShop:sellButton"), " ", (0, pB.jsx)(Nn, {
            amount: kB
          })]
        })]
      })
    }

    function dd() {
      var BB;
      const {
        t: jB
      } = (0, IB.D)(), zB = hn(), QB = null === (BB = zB.shopInfo[zB.categoryKey]) || void 0 === BB ? void 0 : BB.items, nB = gn(QB, "collect"), dB = gn(QB, "myListing"), NB = (BB, jB) => zB.isPending(BB) || !1 === jB.canBuy;
      return (0, pB.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, pB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: jB("smpShop:readyToCollect")
        }), nB.length > 0 ? (0, pB.jsx)("div", {
          className: "SmpList",
          children: nB.map((BB => {
            var QB, nB;
            let {
              key: dB,
              item: IB,
              meta: uB
            } = BB;
            return (0, pB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pB.jsx)(In, {
                item: "sold" === uB.type ? "Gold Coin" : uB.item,
                amount: "sold" === uB.type ? 0 : uB.quantity,
                tier: null !== (QB = null === (nB = IB.enchant) || void 0 === nB ? void 0 : nB.tier) && void 0 !== QB ? QB : null
              }), (0, pB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pB.jsx)("b", {
                  children: (0, pB.jsx)(KQ.e, {
                    text: IB.customTitle
                  })
                }), (0, pB.jsx)("small", {
                  children: (0, pB.jsx)(KQ.e, {
                    text: IB.description
                  })
                })]
              }), (0, pB.jsx)(UB.m, {
                loading: NB(dB, IB),
                onClick: () => {
                  zB.act(dB)
                },
                children: jB("smpShop:collect")
              })]
            }, dB)
          }))
        }) : (0, pB.jsx)(Un, {
          title: jB("smpShop:nothingToCollect"),
          children: jB("smpShop:nothingToCollectHint")
        }), (0, pB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: jB("smpShop:activeListings", {
            count: dB.length
          })
        }), dB.length > 0 ? (0, pB.jsx)("div", {
          className: "SmpList",
          children: dB.map((BB => {
            var QB, nB;
            let {
              key: dB,
              item: IB,
              meta: uB
            } = BB;
            return (0, pB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pB.jsx)(In, {
                item: uB.item,
                amount: uB.quantity,
                tier: null !== (QB = null === (nB = IB.enchant) || void 0 === nB ? void 0 : nB.tier) && void 0 !== QB ? QB : null
              }), (0, pB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pB.jsx)("b", {
                  children: (0, pB.jsx)(KQ.e, {
                    text: IB.customTitle
                  })
                }), (0, pB.jsx)("small", {
                  children: jB("smpShop:timeLeft", {
                    time: En(uB.expiresAt)
                  })
                })]
              }), (0, pB.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, pB.jsx)(Nn, {
                  amount: uB.pricePerItem
                }), (0, pB.jsx)("small", {
                  children: jB("smpShop:each")
                })]
              }), (0, pB.jsx)(UB.G, {
                loading: NB(dB, IB),
                onClick: () => {
                  zB.act(dB)
                },
                children: jB("smpShop:cancel")
              })]
            }, dB)
          }))
        }) : (0, pB.jsx)(Un, {
          title: jB("smpShop:noActiveListings"),
          children: jB("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Id(BB) {
      let {
        done: jB,
        of: zB
      } = BB;
      return (0, pB.jsx)("span", {
        className: "SmpProgress",
        children: (0, pB.jsx)("i", {
          style: {
            width: `${Math.min(100,jB/Math.max(1,zB)*100)}%`
          }
        })
      })
    }

    function Nd(BB) {
      var jB, zB, QB;
      let {
        entry: nB,
        choice: dB,
        onChoose: NB
      } = BB;
      const {
        t: uB
      } = (0, IB.D)(), aB = hn(), {
        key: rB,
        item: sB,
        meta: JB
      } = nB, mB = "dropdown" === (null === (jB = sB.userInput) || void 0 === jB ? void 0 : jB.type) ? sB.userInput.dropdownOptions : [], yB = !0 === JB.processing, kB = null !== JB.creator && (JB.owned > 0 || yB), GB = kB && JB.owned > 0 ? qn(mB) : [], LB = null === dB ? 0 : null !== (zB = null === (QB = GB.find((BB => BB.label === dB))) || void 0 === QB ? void 0 : QB.quantity) && void 0 !== zB ? zB : 0;
      return (0, pB.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, pB.jsx)(In, {
          item: JB.item
        }), (0, pB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pB.jsx)("b", {
            children: (0, pB.jsx)(KQ.e, {
              text: sB.customTitle
            })
          }), (0, pB.jsxs)("small", {
            children: [(0, pB.jsx)(Nn, {
              amount: JB.pricePerItem
            }), " ", uB("smpShop:each"), " \xb7", " ", null === JB.creator ? uB("smpShop:you") : (0, pB.jsx)(KQ.e, {
              text: [{
                entityName: JB.creator
              }]
            })]
          }), (0, pB.jsx)(Id, {
            done: JB.delivered,
            of: JB.wanted
          })]
        }), kB ? (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)(pn, {
            options: GB.map((BB => {
              let {
                label: jB,
                quantity: zB,
                isAll: QB
              } = BB;
              return {
                value: jB,
                label: QB ? uB("smpShop:max", {
                  count: zB
                }) : String(zB)
              }
            })),
            value: dB,
            onChange: NB,
            ariaLabel: uB("smpShop:quantity")
          }), (0, pB.jsxs)(UB.r, {
            loading: aB.isPending(rB) || yB,
            disabled: null === dB,
            onClick: () => {
              aB.act(rB, dB)
            },
            children: [uB("smpShop:deliver"), " ", (0, pB.jsx)(Nn, {
              amount: LB * JB.pricePerItem
            })]
          })]
        }) : (0, pB.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === JB.creator ? uB("smpShop:yourOrder") : uB("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function ud() {
      var BB;
      const {
        t: jB
      } = (0, IB.D)(), zB = hn(), nB = null === (BB = zB.shopInfo[zB.categoryKey]) || void 0 === BB ? void 0 : BB.items, dB = tn(nB, "search"), NB = tn(nB, "creator"), uB = gn(nB, "order"), aB = tn(nB, "empty"), rB = Tn(dB, uB.length > 0 || null !== aB), [sB, JB] = (0, QB.useState)(!1), [mB, yB] = (0, QB.useState)({});
      return (0, pB.jsx)(wn, {
        browser: rB,
        recentLabel: jB("smpShop:recentOrders"),
        action: (0, pB.jsx)(UB.r, {
          onClick: () => {
            JB((BB => !BB))
          },
          children: jB("smpShop:createOrder")
        }),
        above: sB && (0, pB.jsx)(On, {
          mode: "order",
          creator: NB,
          catalogue: rB.catalogue,
          names: rB.names,
          searching: rB.loading,
          prices: [],
          onPickItem: rB.searchFor,
          onClose: () => {
            JB(!1)
          }
        }),
        onBack: () => {
          JB(!1)
        },
        summary: uB.length > 0 && jB(1 === uB.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: uB.length,
          price: Qn(xn(uB, "max"))
        }),
        list: rB.loading ? (0, pB.jsx)(un, {}) : uB.length > 0 ? (0, pB.jsx)(Xn.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Sn,
          observerUpdateDeps: [uB.length],
          children: uB.map((BB => (0, pB.jsx)(Nd, {
            entry: BB,
            choice: Fn(BB.item, mB[BB.key]),
            onChoose: jB => {
              yB({
                ...mB,
                [BB.key]: jB
              })
            }
          }, BB.key)))
        }) : aB ? (0, pB.jsx)(an, {
          entry: aB
        }) : (0, pB.jsx)(un, {
          count: 3
        })
      })
    }

    function Ud() {
      var BB;
      const {
        t: jB
      } = (0, IB.D)(), zB = hn(), QB = gn(null === (BB = zB.shopInfo[zB.categoryKey]) || void 0 === BB ? void 0 : BB.items, "myOrder");
      return 0 === QB.length ? (0, pB.jsx)("div", {
        className: "SmpScreen",
        children: (0, pB.jsx)(Un, {
          title: jB("smpShop:noOrders"),
          children: jB("smpShop:noOrdersHint")
        })
      }) : (0, pB.jsx)("div", {
        className: "SmpScreen",
        children: (0, pB.jsx)("div", {
          className: "SmpList",
          children: QB.map((BB => {
            let {
              key: QB,
              item: nB,
              meta: dB
            } = BB;
            const IB = zB.isPending(QB) || !1 === nB.canBuy;
            return (0, pB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pB.jsx)(In, {
                item: dB.item,
                amount: dB.collectable
              }), (0, pB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pB.jsx)("b", {
                  children: (0, pB.jsx)(KQ.e, {
                    text: nB.customTitle
                  })
                }), (0, pB.jsxs)("small", {
                  children: [(0, pB.jsx)(Nn, {
                    amount: dB.pricePerItem
                  }), " ", jB("smpShop:each"), dB.collectable > 0 && ` \xb7 ${jB("smpShop:readyCount",{count:dB.collectable})}`]
                }), (0, pB.jsx)(Id, {
                  done: dB.delivered,
                  of: dB.wanted
                })]
              }), dB.collectable > 0 ? (0, pB.jsx)(UB.m, {
                loading: IB,
                onClick: () => {
                  zB.act(QB)
                },
                children: jB("smpShop:collectCount", {
                  count: dB.collectable
                })
              }) : (0, pB.jsx)(UB.G, {
                loading: IB,
                onClick: () => {
                  zB.act(QB)
                },
                children: jB("smpShop:cancel")
              })]
            }, QB)
          }))
        })
      })
    }
    const pd = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      rd = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function sd(BB, jB) {
      let zB = !1;
      const QB = {};
      for (const nB in BB) jB(nB, BB[nB]) ? QB[nB] = BB[nB] : zB = !0;
      return zB ? QB : BB
    }

    function Jd(BB) {
      var jB, zB, nB, uB;
      const {
        show: UB,
        shopInfo: aB,
        selectedCategoryKey: rB
      } = BB, {
        t: sB
      } = (0, IB.D)(), JB = null !== rB && void 0 !== rB ? rB : "", mB = Ln(aB, JB), yB = null === (jB = aB[JB]) || void 0 === jB ? void 0 : jB.items, kB = null !== mB, [GB, LB] = (0, QB.useState)({}), [gB, tB] = (0, QB.useState)([]), [SB, MB] = (0, QB.useState)(!1), [EB, iB] = (0, QB.useState)(null), [, qB] = (0, QB.useState)(0), fB = (0, QB.useRef)(0), oB = (0, QB.useRef)({}), HB = (0, QB.useRef)({
        items: yB,
        pending: GB,
        shopInfo: aB,
        active: kB,
        canAfford: BB.canAfford,
        buy: BB.buy
      });
      HB.current = {
        items: yB,
        pending: GB,
        shopInfo: aB,
        active: kB,
        canAfford: BB.canAfford,
        buy: BB.buy
      };
      const DB = (0, QB.useCallback)((BB => {
        fB.current++;
        const jB = fB.current;
        tB((zB => [{
          id: jB,
          text: BB
        }, ...zB].slice(0, 8))), iB(jB)
      }), []);
      (0, QB.useEffect)((() => {
        if (null === EB) return;
        const BB = setTimeout((() => {
          iB(null)
        }), 3e3);
        return () => {
          clearTimeout(BB)
        }
      }), [EB]), (0, QB.useEffect)((() => {
        const jB = BB.message;
        if (!jB) return;
        const {
          shopInfo: zB,
          active: QB,
          items: nB
        } = HB.current, dB = null !== jB.categoryKey ? null !== Ln(zB, jB.categoryKey) : QB;
        (dB || QB) && DB(jB.text), dB && LB((BB => sd(BB, (BB => {
          var jB, zB;
          return !pd.has(null === nB || void 0 === nB || null === (jB = nB[BB]) || void 0 === jB || null === (zB = jB.smp) || void 0 === zB ? void 0 : zB.kind)
        }))))
      }), [BB.message, DB]), (0, QB.useEffect)((() => {
        LB((BB => sd(BB, ((BB, jB) => Yn(null === yB || void 0 === yB ? void 0 : yB[BB]) === jB.snapshot))))
      }), [aB, yB]);
      const FB = Object.keys(GB).length > 0;
      (0, QB.useEffect)((() => {
        if (!FB) return;
        const BB = setInterval((() => {
          qB((BB => BB + 1));
          const BB = Date.now(),
            {
              pending: jB,
              items: zB
            } = HB.current,
            QB = Object.keys(jB).filter((zB => BB - jB[zB].at >= 12e3));
          if (0 === QB.length) return;
          const nB = QB.some((BB => {
            var QB, nB;
            return "search" !== (null === zB || void 0 === zB || null === (QB = zB[BB]) || void 0 === QB || null === (nB = QB.smp) || void 0 === nB ? void 0 : nB.kind) || jB[BB].resend
          }));
          for (const dB of QB) oB.current[dB] = BB;
          LB((BB => sd(BB, (BB => !QB.includes(BB))))), nB && DB(sB("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(BB)
        }
      }), [FB]), (0, QB.useEffect)((() => {
        LB({})
      }), [JB]), (0, QB.useEffect)((() => {
        UB || MB(!1)
      }), [UB]);
      const YB = (0, QB.useCallback)((function(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: QB,
            pending: nB,
            canAfford: dB,
            buy: IB
          } = HB.current, NB = null === QB || void 0 === QB ? void 0 : QB[BB];
          if (!NB || BB in nB || !1 === NB.canBuy) return !1;
          if (!dB(NB, (0, eQ.b)(NB, jB))) return !1;
          IB(BB, NB, jB);
          const uB = {
            snapshot: Yn(NB),
            at: Date.now(),
            resend: zB
          };
          return HB.current.pending = {
            ...HB.current.pending,
            [BB]: uB
          }, LB((jB => ({
            ...jB,
            [BB]: uB
          }))), !0
        }), []),
        VB = (0, QB.useMemo)((() => ({
          shopInfo: aB,
          categoryKey: JB,
          canAfford: BB.canAfford,
          isPending: BB => BB in GB,
          gaveUpAt: BB => {
            var jB;
            return null !== (jB = oB.current[BB]) && void 0 !== jB ? jB : 0
          },
          act: YB,
          notify: DB
        })), [aB, JB, BB.canAfford, GB, YB, DB]),
        hB = Math.min(...Object.values(GB).map((BB => BB.at))),
        XB = FB && Date.now() - hB > 1500,
        ZB = gB.length > 1,
        AB = null !== (zB = null === (nB = aB[JB]) || void 0 === nB ? void 0 : nB.customTitle) && void 0 !== zB ? zB : JB,
        TB = null === (uB = aB[JB]) || void 0 === uB ? void 0 : uB.description;
      let PB = null;
      return "market" === mB ? PB = (0, pB.jsx)(Bd, {}) : "sell" === mB ? PB = (0, pB.jsx)(Qd, {}) : "collect" === mB ? PB = (0, pB.jsx)(dd, {}) : "orders" === mB ? PB = (0, pB.jsx)(ud, {}) : "myOrders" === mB && (PB = (0, pB.jsx)(Ud, {})), (0, pB.jsx)(Vn.Provider, {
        value: VB,
        children: (0, pB.jsx)("div", {
          className: "SmpShopHost",
          hidden: !kB,
          children: (0, pB.jsxs)("div", {
            className: "SmpShop",
            children: [(0, pB.jsx)("header", {
              className: "SmpHeader",
              children: (0, pB.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, pB.jsxs)("h2", {
                  children: [mB && (0, pB.jsx)(NB.c, {
                    name: rd[mB]
                  }), sB(AB)]
                }), TB && (0, pB.jsx)("p", {
                  children: (0, pB.jsx)(KQ.e, {
                    text: TB
                  })
                })]
              })
            }), (0, pB.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: UB && PB
            }), (0, pB.jsxs)("button", {
              type: "button",
              className: dB()("SmpStatus", {
                SmpStatusWaiting: FB,
                SmpStatusFresh: !FB && null !== EB,
                SmpStatusHasHistory: ZB
              }),
              "aria-live": "polite",
              "aria-expanded": ZB ? SB : void 0,
              onClick: () => {
                ZB && MB((BB => !BB))
              },
              children: [FB ? (0, pB.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, pB.jsx)(rn, {}), sB(XB ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : gB[0] ? (0, pB.jsx)("span", {
                className: "SmpStatusText",
                children: (0, pB.jsx)(KQ.e, {
                  text: gB[0].text
                })
              }, gB[0].id) : (0, pB.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: sB("smpShop:ready")
              }), ZB && (0, pB.jsx)("small", {
                children: sB("smpShop:recentMessages", {
                  count: gB.length
                })
              })]
            }), SB && ZB && (0, pB.jsx)("div", {
              className: "SmpStatusHistory",
              children: gB.map((BB => (0, pB.jsx)("div", {
                children: (0, pB.jsx)(KQ.e, {
                  text: BB.text
                })
              }, BB.id)))
            })]
          })
        })
      })
    }
    class md {
      constructor(BB) {
        this.info = BB
      }
      static fromShopInfo(BB) {
        const jB = {};
        for (const zB in BB) {
          const QB = !0 === BB[zB].redDot && !0 !== BB[zB].forceRemoveRedDot;
          jB[zB] = {
            redDot: QB,
            items: {}
          };
          for (const nB in BB[zB].items) {
            const QB = BB[zB].items[nB],
              dB = !0 === QB.redDot && !0 !== QB.forceRemoveRedDot;
            jB[zB].items[nB] = {
              redDot: dB
            }
          }
        }
        return new md(jB)
      }
      anyCategoryHasRedDots() {
        for (const BB in this.info)
          if (this.categoryHasRedDot(BB)) return !0;
        return !1
      }
      doesCategoryExist(BB) {
        return !(0, Nz.I)(this.info[BB])
      }
      categoryHasRedDot(BB) {
        return !0 === this.info[BB].redDot
      }
      updateCategoryRedDot(BB, jB) {
        this.info[BB].redDot = jB
      }
      doesItemExist(BB, jB) {
        return this.doesCategoryExist(BB) && !(0, Nz.I)(this.info[BB].items[jB])
      }
      itemHasRedDot(BB, jB) {
        return !0 === this.info[BB].items[jB].redDot
      }
      updateItemRedDot(BB, jB, zB) {
        this.info[BB].items[jB].redDot = zB
      }
      shallowCopy() {
        return new md(this.info)
      }
    }

    function yd(BB, jB) {
      return `${BB}\x1f${jB}`
    }

    function kd(BB, jB) {
      return !(0, Nz.I)(jB) && !(0, Nz.I)(BB) && jB in BB
    }
    const Gd = (0, QB.memo)((function(BB) {
      var jB, zB;
      let {
        show: nB
      } = BB;
      const IB = (0, hj.h)("players", Ed),
        NB = (0, hj.h)("players", qd),
        aB = (0, OQ.c)(),
        [sB, JB] = (0, QB.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: md.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        yB = (0, QB.useRef)(""),
        kB = (0, QB.useRef)(null),
        LB = (0, QB.useRef)(null),
        gB = (0, QB.useRef)(0),
        tB = (0, QB.useRef)(void 0),
        SB = (0, QB.useRef)(null),
        MB = (0, QB.useRef)(sB),
        iB = sB.redDotInfo.anyCategoryHasRedDots(),
        [qB, oB] = (0, QB.useState)(null),
        HB = (0, QB.useRef)(!1);
      let DB = !1,
        FB = 0,
        YB = 0;
      if (sB.currencyAmounts) {
        for (const BB in sB.currencyAmounts) {
          var VB;
          const jB = sB.currencyAmounts[BB];
          jB.hidden || (FB++, (null === (VB = jB.subtext) || void 0 === VB ? void 0 : VB.length) > 0 && YB++)
        }
        DB = FB + YB > 4
      }(0, QB.useEffect)((() => {
        uz.n.Ly("showShopIconRedDot", iB, !0)
      }), [iB]), (0, QB.useEffect)((() => {
        GB.gameBridge.send("setShopOpen", nB), nB || (clearTimeout(tB.current), JB((BB => BB.awaitingPurchase ? {
          ...BB,
          awaitingPurchase: !1
        } : BB)))
      }), [nB]), (0, QB.useEffect)((() => () => {
        GB.gameBridge.send("setShopOpen", !1), clearTimeout(tB.current)
      }), []), (0, QB.useEffect)((() => {
        MB.current = sB
      }), [sB]), (0, QB.useEffect)((() => {
        if (null === qB) return;
        return (0, vQ.c)("pointerdown", (BB => {
          const jB = BB.target;
          null !== jB && void 0 !== jB && jB.closest(".ShopItem") || oB(null)
        }))
      }), [qB]);
      const hB = BB => {
          JB((jB => ({
            ...jB,
            ...BB
          })))
        },
        XB = BB => {
          var jB;
          clearTimeout(null === (jB = sB.onBoughtInfo) || void 0 === jB ? void 0 : jB.timeout);
          const zB = setTimeout((() => {
            hB({
              onBoughtInfo: null
            })
          }), 3e3);
          yB.current = BB, hB({
            onBoughtInfo: {
              text: BB,
              timeout: zB,
              categoryKey: kB.current
            }
          })
        },
        ZB = BB => {
          const {
            shopInfo: jB,
            userInputsPerItem: zB,
            redDotInfo: QB,
            autoSelectCategory: dB
          } = function(BB, jB, zB, QB, nB, dB) {
            if ((0, Nz.I)(BB) || 0 === Object.keys(BB).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: md.fromShopInfo({}),
              autoSelectCategory: null
            };
            const IB = fB.siteUsedData[fB.siteUsed].adConfig.showRewardedAds,
              NB = {};
            let uB = null;
            for (const yB in BB) {
              const jB = BB[yB],
                zB = {};
              let QB = !1;
              for (const BB in jB.items) {
                const nB = jB.items[BB];
                (0, eQ.h)(nB, IB) && (zB[BB] = nB, QB = !0)
              }
              QB && (NB[yB] = {
                ...jB,
                items: zB
              }, !0 === jB.autoSelectCategory && (uB = yB))
            }
            const UB = {},
              aB = (BB, jB, QB, IB) => {
                var NB, uB;
                const aB = yd(BB, jB),
                  pB = null !== (NB = zB[aB]) && void 0 !== NB ? NB : zB[jB];
                if (null !== (uB = IB.userInput) && void 0 !== uB && uB.type) switch (IB.userInput.type) {
                  case "dropdown": {
                    var rB;
                    const BB = !pB || !IB.userInput.dropdownOptions.some((BB => (0, eQ.d)(BB) === pB)),
                      jB = IB.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === QB || void 0 === QB || null === (rB = QB.userInput) || void 0 === rB ? void 0 : rB.type) || JSON.stringify(QB.userInput.dropdownOptions) !== JSON.stringify(IB.userInput.dropdownOptions)),
                      zB = IB.userInput,
                      nB = !(0, Nz.I)(zB.initialValue) && zB.dropdownOptions.some((BB => (0, eQ.d)(BB) === zB.initialValue));
                    var sB;
                    return void(BB || jB ? nB ? UB[aB] = null !== (sB = IB.userInput.initialValue) && void 0 !== sB ? sB : null : IB.userInput.dropdownOptions.length > 0 ? UB[aB] = (0, eQ.d)(IB.userInput.dropdownOptions[0]) : UB[aB] = null : UB[aB] = pB)
                  }
                  case "text":
                  case "number":
                    var JB, mB, yB;
                    return void((null === QB || void 0 === QB ? void 0 : QB.userInput) !== IB.userInput ? UB[aB] = null !== (JB = null !== (mB = IB.userInput.initialValue) && void 0 !== mB ? mB : pB) && void 0 !== JB ? JB : "" : UB[aB] = null !== (yB = null !== pB && void 0 !== pB ? pB : IB.userInput.initialValue) && void 0 !== yB ? yB : "");
                  case "color":
                    var kB, GB, LB;
                    return void((null === QB || void 0 === QB ? void 0 : QB.userInput) !== IB.userInput ? UB[aB] = null !== (kB = null !== (GB = IB.userInput.initialValue) && void 0 !== GB ? GB : pB) && void 0 !== kB ? kB : "#000000" : UB[aB] = null !== (LB = null !== pB && void 0 !== pB ? pB : IB.userInput.initialValue) && void 0 !== LB ? LB : "#000000");
                  case "player": {
                    const BB = (0, eQ.g)(nB, dB, IB.userInput);
                    return void(pB && BB.includes(pB) ? UB[aB] = pB : UB[aB] = BB.length > 0 ? BB[0] : null)
                  }
                }
              };
            for (const yB in NB)
              for (const BB in NB[yB].items) {
                var pB;
                const zB = NB[yB].items[BB];
                aB(yB, BB, null === (pB = jB[yB]) || void 0 === pB ? void 0 : pB.items[BB], zB)
              }
            const rB = md.fromShopInfo(NB);
            for (const yB in NB) {
              var sB;
              if (QB.doesCategoryExist(yB)) {
                (null === (sB = jB[yB]) || void 0 === sB ? void 0 : sB.redDot) === NB[yB].redDot && rB.updateCategoryRedDot(yB, QB.categoryHasRedDot(yB));
                for (const BB in NB[yB].items) {
                  var JB, mB;
                  QB.doesItemExist(yB, BB) && (null === (JB = jB[yB]) || void 0 === JB || null === (mB = JB.items[BB]) || void 0 === mB ? void 0 : mB.redDot) === NB[yB].items[BB].redDot && rB.updateItemRedDot(yB, BB, QB.itemHasRedDot(yB, BB))
                }
              }
            }
            return {
              shopInfo: NB,
              userInputsPerItem: UB,
              redDotInfo: rB,
              autoSelectCategory: uB
            }
          }(BB, sB.shopInfo, sB.userInputsPerItem, sB.redDotInfo, IB, NB), uB = {
            shopInfo: jB,
            userInputsPerItem: zB,
            redDotInfo: QB
          };
          if (null === dB || nB)
            if (jB[sB.selectedCategoryKey]) uB.selectedCategoryKey = sB.selectedCategoryKey;
            else {
              const BB = jn(jB);
              uB.selectedCategoryKey = BB.length > 0 ? BB[0] : null
            }
          else uB.selectedCategoryKey = dB;
          return 0 === Object.keys(jB).length && nB && EB.c.set({
            openEverythingMenuName: null
          }), uB
        },
        TB = (BB, jB, zB) => {
          const QB = sB.selectedCategoryKey,
            nB = yd(QB, BB),
            dB = null !== zB && void 0 !== zB ? zB : sB.userInputsPerItem[nB],
            IB = {
              categoryKey: QB,
              itemKey: BB,
              userInput: dB
            };
          if (kB.current = QB, jB.isRewardedAd) {
            if (Date.now() - gB.current < 5e3) return;
            (0, yj.V)((() => {
              var zB, QB, dB;
              console.log("bought rewarded ad");
              const NB = IB.categoryKey ? null === (zB = MB.current.shopInfo[IB.categoryKey]) || void 0 === zB ? void 0 : zB.items[BB] : null;
              if (!NB || !NB.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (QB = jB.userInput) || void 0 === QB ? void 0 : QB.type) === (null === NB || void 0 === NB || null === (dB = NB.userInput) || void 0 === dB ? void 0 : dB.type) ? (IB.userInput = MB.current.userInputsPerItem[nB], GB.gameBridge.send("buyShopItem", IB), jB.onBoughtMessage && XB(jB.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), gB.current = Date.now()
          } else {
            GB.gameBridge.send("buyShopItem", IB), hB({
              awaitingPurchase: !0
            }), clearTimeout(tB.current), tB.current = setTimeout((() => {
              SB.current = null, hB({
                awaitingPurchase: !1
              })
            }), 1e3);
            const BB = (0, eQ.b)(jB, dB);
            if (SB.current = null, !isNaN(BB) && kd(sB.currencyAmounts, jB.currency)) {
              0 !== BB && (SB.current = {
                currency: jB.currency,
                amountBefore: sB.currencyAmounts[jB.currency].amount
              });
              const zB = {
                ...sB.currencyAmounts
              };
              zB[jB.currency].amount -= BB, hB({
                currencyAmounts: zB
              })
            }
            jB.onBoughtMessage && XB(jB.onBoughtMessage)
          }
        },
        PB = (BB, jB) => {
          if (null === jB || !BB.shopInfo[jB]) return BB;
          let zB = BB.redDotInfo;
          return zB.categoryHasRedDot(jB) && (zB.updateCategoryRedDot(jB, !1), zB = zB.shallowCopy()), {
            ...BB,
            selectedCategoryKey: jB,
            redDotInfo: zB
          }
        },
        WB = BB => {
          JB((jB => PB(jB, BB)))
        };
      (0, lj.f)(RQ.k, (() => {
        JB((BB => {
          const jB = (0, RQ.l)(jn(BB.shopInfo), BB.selectedCategoryKey, (jB => (0, RQ.j)(BB.shopInfo[jB].items)));
          return jB === BB.selectedCategoryKey ? BB : PB(BB, jB)
        }))
      })), (0, lj.f)("showShopFromServer", (BB => {
        let {
          toggle: jB,
          uB: zB
        } = BB;
        zB && WB(zB), 0 === Object.keys(sB.shopInfo).length || jB && nB ? EB.c.set({
          openEverythingMenuName: null
        }) : EB.c.set({
          openEverythingMenuName: kj.o.SHOP
        })
      })), (0, lj.f)("closeShopOnDamaged", (() => {
        nB && EB.c.set({
          openEverythingMenuName: null
        })
      })), (0, lj.f)("overShopInfo", (BB => {
        XB(BB)
      })), (0, mB.h)("currencyAmounts", (BB => {
        var jB;
        const zB = SB.current;
        zB && (null === BB || void 0 === BB || null === (jB = BB[zB.currency]) || void 0 === jB ? void 0 : jB.amount) === zB.amountBefore ? hB({
          currencyAmounts: BB
        }) : (SB.current = null, hB({
          currencyAmounts: BB,
          awaitingPurchase: !1
        }))
      })), (0, mB.h)("shopInfo", (BB => {
        hB({
          ...ZB(BB),
          awaitingPurchase: !1
        })
      }));
      const eB = (0, QB.useRef)({
        playerIds: IB,
        localPlayerId: NB
      });
      (0, QB.useEffect)((() => {
        eB.current.playerIds === IB && eB.current.localPlayerId === NB || (eB.current = {
          playerIds: IB,
          localPlayerId: NB
        }, JB((BB => {
          const jB = ZB(BB.shopInfo);
          return {
            ...BB,
            ...jB
          }
        })))
      }), [IB, NB]);
      const lB = sB.selectedCategoryKey,
        wB = (BB, jB) => {
          var zB, QB;
          return (isNaN(jB) || (0, Nz.I)(BB.currency) || kd(sB.currencyAmounts, BB.currency) && jB <= sB.currencyAmounts[BB.currency].amount) && (null === (zB = BB.canBuy) || void 0 === zB || zB) && !(null !== (QB = BB.hidden) && void 0 !== QB && QB)
        },
        xB = (BB, jB) => {
          var zB, QB, nB;
          const IB = yd(lB, BB),
            NB = sB.shopInfo[lB].items[BB],
            aB = sB.userInputsPerItem[IB],
            rB = (0, eQ.b)(NB, aB),
            JB = wB(NB, rB),
            mB = NB.enchant,
            yB = mB ? (0, AB.ob)(null !== (zB = NB.customTitle) && void 0 !== zB ? zB : BB, {
              colour: AB.hb[mB.tier]
            }) : null !== (QB = NB.customTitle) && void 0 !== QB ? QB : BB,
            kB = jB => {
              const zB = null !== jB && void 0 !== jB ? jB : aB,
                QB = void 0 !== jB ? (0, eQ.b)(NB, jB) : rB;
              wB(NB, QB) && null !== zB && TB(BB, NB, jB);
              let nB = sB.redDotInfo;
              nB.itemHasRedDot(lB, BB) && (nB.updateItemRedDot(lB, BB, !1), nB = nB.shallowCopy()), hB({
                redDotInfo: nB
              })
            };
          return (0, pB.jsxs)("div", {
            className: dB()("ShopItem", {
              ShopItemNoInput: !NB.userInput,
              ShopItemNoInputCanBuy: !NB.userInput && JB,
              ShopItemNoInputSelected: NB.isSelected,
              ShopItemEnchant: !!mB
            }),
            "data-pad-focusable": !NB.userInput || void 0,
            "data-pad-unavailable": !NB.userInput && !JB || void 0,
            "data-pad-repeat": null !== (nB = (0, RQ.b)(NB)) && void 0 !== nB ? nB : void 0,
            "data-pad-repeat-wait": sB.awaitingPurchase || void 0,
            onClick: () => {
              if (mB && HB.current) {
                if (qB !== IB) return void oB(IB);
                oB(null)
              }
              NB.userInput || kB()
            },
            onPointerDown: BB => {
              mB && (HB.current = (0, wQ.m)(BB))
            },
            onPointerEnter: BB => {
              mB && !(0, wQ.m)(BB) && oB(IB)
            },
            onPointerLeave: BB => {
              mB && !(0, wQ.m)(BB) && oB((BB => BB === IB ? null : BB))
            },
            style: {
              zIndex: Object.keys(sB.shopInfo[lB].items).length - jB
            },
            children: [sB.redDotInfo.itemHasRedDot(lB, BB) && (0, pB.jsx)(uB.c, {
              top: "-6px",
              right: "-6px"
            }), NB.badge && (0, pB.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, pB.jsx)("div", {
                className: dB()("ShopBadgeMain", NB.badge.type),
                children: (0, pB.jsx)(KQ.e, {
                  text: NB.badge.text
                })
              })
            }), (0, pB.jsx)("div", {
              className: "ShopItemLeft",
              children: NB.image && (0, pB.jsx)(Ld, {
                item: NB,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, pB.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, pB.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, pB.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, pB.jsx)(KQ.e, {
                    text: yB
                  })
                }), (0, pB.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, pB.jsx)(KQ.e, {
                    text: NB.description
                  })
                })]
              }), NB.userInput && (0, pB.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: BB => {
                  BB.stopPropagation()
                },
                children: [(0, pB.jsx)(Sd, {
                  item: NB,
                  currInput: aB,
                  updateInput: jB => {
                    ((BB, jB, zB) => {
                      const QB = yd(BB, jB),
                        nB = {
                          ...sB.userInputsPerItem
                        };
                      nB[QB] = zB, hB({
                        userInputsPerItem: nB
                      })
                    })(lB, BB, jB)
                  },
                  onSubmit: BB => {
                    kB(BB)
                  }
                }), ("dropdown" !== NB.userInput.type || !NB.userInput.autoSubmit) && (0, pB.jsx)(UB.f, {
                  className: "ItemCostButton",
                  disabled: !JB && null !== aB,
                  onClick: () => {
                    kB()
                  },
                  children: (0, pB.jsx)(td, {
                    item: NB,
                    cost: rB,
                    currencyAmounts: sB.currencyAmounts
                  })
                })]
              })]
            }), !NB.userInput && (0, pB.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, pB.jsx)(td, {
                item: NB,
                cost: rB,
                currencyAmounts: sB.currencyAmounts
              })
            }), mB && qB === IB && (0, pB.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, pB.jsx)(KQ.e, {
                text: yB
              }), (0, pB.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, pB.jsx)(KQ.e, {
                  text: (0, lQ.d)("", mB.enchantments, mB.enchantmentData)
                })
              })]
            })]
          }, IB)
        },
        KB = function(BB) {
          for (const jB in BB)
            if (BB[jB].smp) return !0;
          return !1
        }(sB.shopInfo),
        CB = Ln(sB.shopInfo, lB);
      return (0, pB.jsx)(TQ.e, {
        className: "Menu ShopBody",
        show: nB,
        children: 0 !== Object.keys(sB.shopInfo).length && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, pB.jsx)(rB, {
              items: jn(sB.shopInfo).map((BB => {
                var jB;
                return {
                  id: BB,
                  title: null !== (jB = sB.shopInfo[BB].customTitle) && void 0 !== jB ? jB : BB,
                  redDot: sB.redDotInfo.categoryHasRedDot(BB)
                }
              })),
              link: aB ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Bn.h)({
                    page: (0, Bn.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: lB,
              onClick: WB,
              padStartsOnTab: (0, RQ.f)(lB)
            }), (0, pB.jsx)("div", {
              className: "MenuSideBarFooter",
              children: sB.currencyAmounts && Object.keys(sB.currencyAmounts).map((BB => {
                var jB;
                const zB = sB.currencyAmounts[BB];
                return zB.hidden ? null : (0, pB.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (DB ? "SmallText" : ""),
                  children: [(0, pB.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, pB.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: zB.iconColour
                      },
                      children: (0, pB.jsx)(fd, {
                        iconName: zB.icon
                      })
                    }), "\xa0", (0, WQ.d)(zB.amount, 6)]
                  }), (null === (jB = zB.subtext) || void 0 === jB ? void 0 : jB.length) > 0 && (0, pB.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, pB.jsx)(KQ.e, {
                      text: zB.subtext
                    })
                  })]
                }, BB)
              }))
            })]
          }), (0, pB.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [KB && (0, pB.jsx)(Jd, {
              show: nB,
              shopInfo: sB.shopInfo,
              selectedCategoryKey: lB,
              buy: (BB, jB, zB) => {
                TB(BB, jB, zB)
              },
              canAfford: wB,
              message: sB.onBoughtInfo
            }), null === CB && (0, pB.jsxs)(pB.Fragment, {
              children: [(0, pB.jsx)("div", {
                className: dB()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== sB.onBoughtInfo
                }),
                children: (0, pB.jsx)(KQ.e, {
                  text: yB.current
                })
              }), (0, pB.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, pB.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (jB = sB.shopInfo[lB]) || void 0 === jB ? void 0 : jB.description) && (0, pB.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, pB.jsx)(KQ.e, {
                      text: sB.shopInfo[lB].description
                    })
                  }), nB && (0, pB.jsx)("div", {
                    className: "ShopItems",
                    ref: LB,
                    "data-pad-initial-area": !0,
                    children: jn(null === (zB = sB.shopInfo[lB]) || void 0 === zB ? void 0 : zB.items).map(((BB, jB) => xB(BB, jB)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Ld(BB) {
      let {
        item: jB,
        minWidth: zB,
        minHeight: QB
      } = BB;
      const {
        image: nB,
        schematicId: dB,
        imageColour: IB
      } = jB;
      if (dB) return (0, pB.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${zB}rem`,
          height: `${QB}rem`
        },
        children: (0, pB.jsx)(CQ.c, {
          game: {
            schematicId: dB
          }
        })
      });
      var uB, UB;
      if ((0, xQ.d)(nB)) return (0, pB.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${zB}rem`,
          height: "0",
          minHeight: `${QB}rem`
        },
        children: (0, pB.jsx)(xQ.c, {
          itemName: nB,
          amount: null !== (uB = jB.amount) && void 0 !== uB ? uB : 0,
          amountFontSize: QB / 4 + "rem",
          enchantmentTier: null === (UB = jB.enchant) || void 0 === UB ? void 0 : UB.tier
        })
      });
      const aB = nB.slice(-4);
      return ".jpg" === aB || ".png" === aB ? (0, pB.jsx)(gd, {
        image: nB,
        minWidth: zB
      }) : (0, pB.jsx)(NB.c, {
        name: nB,
        className: "SelectedItemImage",
        style: {
          color: IB
        }
      })
    }

    function gd(BB) {
      let {
        image: jB,
        minWidth: zB
      } = BB;
      const {
        gameNameWithVariation: QB
      } = (0, hj.k)("connectedGame"), nB = jB.endsWith(".jpg");
      return (0, pB.jsx)("img", {
        className: dB()({
          ShopPixelImage: !nB
        }),
        style: {
          width: `${nB?1.6*zB:zB}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,AB.Sb)(QB)}/${jB}`,
        alt: jB,
        draggable: !1
      })
    }

    function td(BB) {
      let {
        item: jB,
        cost: zB,
        currencyAmounts: QB
      } = BB;
      const nB = !isNaN(zB) && 0 !== zB && kd(QB, jB.currency);
      let dB = null;
      return jB.buyButtonText ? dB = jB.buyButtonText : nB ? (dB = zB, jB.sell && (dB = -1 * zB), dB = dB.toString()) : 0 === zB ? dB = "Free" : jB.isRewardedAd && (dB = "Watch ad"), (0, Nz.I)(dB) || " " === dB ? null : (0, pB.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [nB && (0, pB.jsx)("div", {
          style: {
            color: QB[jB.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, pB.jsx)(fd, {
            iconName: QB[jB.currency].icon
          })
        }), (0, pB.jsx)("div", {
          className: "BuyItemCost",
          children: (0, pB.jsx)(KQ.e, {
            text: dB
          })
        })]
      })
    }

    function Sd(BB) {
      let {
        item: jB,
        currInput: zB,
        updateInput: nB,
        onSubmit: dB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)(), uB = (0, QB.useRef)(null);
      if ((0, QB.useEffect)((() => {
          const BB = uB.current;
          BB && BB.value !== zB && document.activeElement !== BB && (BB.value = null !== zB && void 0 !== zB ? zB : "")
        }), [zB]), !jB.userInput) return null;
      let UB = jB.userInput;
      if (kB.featureFlags.sanitizeShopInput && "text" === jB.userInput.type && (UB = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === UB.type || "number" === UB.type) {
        var aB, rB;
        console.assert(void 0 !== zB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(jB)}`);
        const BB = "text" === UB.type && UB.wordCharsOnly;
        return (0, pB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, pB.jsx)(tB.d, {
            className: "ShopItemUserInputText",
            placeholderText: NB(UB.placeholderText),
            defaultValue: zB,
            domRef: uB,
            onValueChange: (jB, zB) => {
              !0 === BB && (jB = (0, bQ.W)(jB)), uB.current.value = jB, nB(jB)
            },
            onEnter: dB,
            type: UB.type
          }, (null !== (aB = UB.initialValue) && void 0 !== aB ? aB : "") + (null !== (rB = UB.placeholderText) && void 0 !== rB ? rB : ""))
        })
      }
      if ("dropdown" === UB.type) {
        console.assert(void 0 !== zB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(jB)}`);
        const BB = UB.autoSubmit;
        return (0, pB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, pB.jsx)(Fj.e, {
            options: UB.dropdownOptions.map((BB => (0, eQ.d)(BB))),
            value: zB,
            onChange: jB => {
              let {
                value: zB
              } = jB;
              nB(zB), BB && dB(zB)
            }
          })
        })
      }
      return "player" === UB.type ? (0, pB.jsx)(Md, {
        userInput: UB,
        currInput: zB,
        updateInput: nB
      }) : "color" === UB.type ? (0, pB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, pB.jsx)("input", {
          type: "color",
          value: zB,
          onChange: BB => {
            nB(BB.target.value)
          }
        })
      }) : null
    }

    function Md(BB) {
      let {
        userInput: jB,
        currInput: zB,
        updateInput: QB
      } = BB;
      const nB = (0, hj.k)("players"),
        dB = (0, hj.k)("hiddenPlayerNames"),
        IB = (0, eQ.g)(nB.ids, nB.localId, jB);
      return (0, pB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, pB.jsx)(Fj.e, {
          options: IB.map((BB => {
            const {
              name: jB
            } = nB.byId[BB];
            return {
              value: BB,
              label: null === jB ? "" : (0, cQ.h)(jB, dB)
            }
          })),
          value: zB,
          onChange: BB => {
            let {
              value: jB
            } = BB;
            QB(jB)
          }
        })
      })
    }

    function Ed(BB) {
      let {
        ids: jB
      } = BB;
      return jB
    }

    function qd(BB) {
      let {
        localId: jB
      } = BB;
      return jB
    }

    function fd(BB) {
      let {
        iconName: jB
      } = BB;
      return GB.gameBridge.lookup("isItemName", jB) ? (0, pB.jsx)(xQ.c, {
        itemName: jB,
        amount: 1
      }) : (0, pB.jsx)(NB.c, {
        name: jB,
        className: "2x"
      })
    }
    var od = zB(1664);
    const Hd = (0, zB(1442).f)((BB => BB.PadLobbyShortcuts)),
      Dd = (0, QB.lazy)((() => Promise.resolve().then((() => zB(4746))).then((BB => ({
        default: BB.Lobbyleaderboard
      }))))),
      Fd = (0, QB.lazy)((() => zB.e(223).then((() => zB(41170))).then((BB => ({
        default: BB.LobbyManageView
      })))));

    function Yd(BB) {
      let {
        show: jB
      } = BB;
      return jB ? (0, pB.jsx)(Vd, {}) : null
    }

    function Vd() {
      const BB = (0, OQ.c)();
      return (0, pB.jsxs)(pB.Fragment, {
        children: [(0, pB.jsx)(Hd, {}), (0, pB.jsxs)(QB.Suspense, {
          fallback: (0, pB.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, pB.jsx)(SB.e, {})
          }),
          children: [BB && (0, pB.jsx)(Fd, {
            leaderboard: (0, pB.jsx)(Dd, {})
          }), !BB && (0, pB.jsx)(Dd, {})]
        })]
      })
    }
    var hd = zB(1583),
      Xd = zB(3124),
      Zd = zB(1778),
      Ad = zB(3172),
      Td = zB(2802),
      Pd = zB(1525),
      Wd = zB(1487),
      ed = zB(3109),
      ld = zB(3121),
      wd = zB(2407);
    const xd = "storeRecentGiftRecipients",
      Kd = new Map;

    function Cd() {
      try {
        const BB = az.j.getItem(xd);
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.name) && BB.name.length > 0)).map((BB => ({
          name: BB.name,
          cosmetics: BB.cosmetics && "object" === typeof BB.cosmetics ? BB.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function cd(BB) {
      var jB;
      const [zB, nB] = (0, QB.useState)(""), [dB, IB] = (0, QB.useState)("search"), [NB, uB] = (0, QB.useState)(null), [UB, aB] = (0, QB.useState)(null), pB = (0, QB.useRef)(null), rB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => () => {
        pB.current && clearTimeout(pB.current)
      }), []);
      const sB = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.name) && void 0 !== jB ? jB : null;

      function JB() {
        pB.current && (clearTimeout(pB.current), pB.current = null)
      }(0, QB.useEffect)((() => {
        if (null === sB || BB === oB.NULL_USER_CONTEXT) return;
        const jB = sB.toLowerCase();
        if (jB === BB.getPlayerName().toLowerCase()) return void aB({
          name: sB,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const zB = Kd.get(jB);
        if (zB) return void aB({
          name: sB,
          result: zB
        });
        let QB = !1;
        return async function(BB, jB) {
          try {
            const zB = await (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${mj.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: jB
            }, {
              retries: 1
            }, BB.getMetricsCookies());
            if ("boolean" !== typeof(null === zB || void 0 === zB ? void 0 : zB.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(zB)}`);
            return zB
          } catch (zB) {
            return console.error("Failed to look up gift recipient:", zB), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(BB, sB).catch((BB => (console.error("Gift recipient lookup failed:", BB), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((BB => {
          !0 !== BB.giftRecipientFound && "store:giftRecipientLookupFailed" === BB.giftRecipientError || Kd.set(jB, BB), QB || aB({
            name: sB,
            result: BB
          })
        })), () => {
          QB = !0
        }
      }), [sB, BB]);
      const mB = (0, QB.useMemo)((() => {
        const BB = zB.trim();
        if (!BB) return {
          status: "none"
        };
        if (!NB || NB.name !== BB || (null === UB || void 0 === UB ? void 0 : UB.name) !== NB.name) return {
          status: "pending",
          name: BB
        };
        const jB = UB.result;
        return !1 === jB.giftRecipientFound ? {
          status: "error",
          name: NB.name,
          error: jB.giftRecipientError
        } : {
          status: "found",
          name: jB.giftRecipientName,
          ownedPacks: jB.giftRecipientOwnedPacks,
          hasSuperRank: jB.giftRecipientHasSuperRank,
          isSubscriber: jB.giftRecipientIsSubscriber
        }
      }), [zB, NB, UB]);
      (0, QB.useEffect)((() => {
        "found" === mB.status && "typed" === (null === NB || void 0 === NB ? void 0 : NB.source) && rB.current !== mB.name && (rB.current = mB.name, (0, jj.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [mB, NB]);
      const yB = (null === UB || void 0 === UB ? void 0 : UB.name) === (null === NB || void 0 === NB ? void 0 : NB.name) ? null === UB || void 0 === UB ? void 0 : UB.result : null,
        kB = !0 === (null === yB || void 0 === yB ? void 0 : yB.giftRecipientFound) ? yB.giftRecipientCosmetics : null;
      return {
        query: zB,
        via: dB,
        recipient: mB,
        recipientCosmetics: kB,
        type: function(BB) {
          nB(BB), IB("search"), JB();
          const jB = BB.trim();
          jB ? pB.current = setTimeout((() => {
            uB({
              name: jB,
              source: "typed"
            })
          }), 400) : uB(null)
        },
        choose: function(BB, jB) {
          JB(), nB(BB), IB("typed" === jB ? "search" : "prefilled" === jB ? "prefilled" : "suggestion"), uB({
            name: BB,
            source: jB
          }), "typed" !== jB && "prefilled" !== jB && (0, jj.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: jB
          })
        },
        clear: function() {
          JB(), nB(""), IB("search"), uB(null)
        },
        recordGift: function(BB, jB) {
          ! function(BB) {
            Kd.delete(BB.toLowerCase())
          }(BB), aB((zB => {
            if (!zB || zB.name.toLowerCase() !== BB.toLowerCase() || !0 !== zB.result.giftRecipientFound || "superRank" === jB) return zB;
            const QB = zB.result.giftRecipientOwnedPacks;
            return {
              ...zB,
              result: {
                ...zB.result,
                giftRecipientOwnedPacks: QB.includes(jB) ? QB : [...QB, jB]
              }
            }
          }))
        }
      }
    }
    var bd = zB(2399),
      vd = zB(4750),
      Rd = zB(269),
      Od = zB(3228);
    const BI = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var jI = zB(2352),
      zI = zB(635),
      QI = zB(2458),
      nI = zB(2711);

    function dI(BB) {
      let {
        cosmetics: jB
      } = BB;
      return (0, pB.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, pB.jsx)(QI.c, {
          cosmetics: jB
        })
      })
    }

    function II(BB, jB) {
      var zB, QB;
      const nB = null !== (zB = BB.friend) && void 0 !== zB ? zB : {
        isError: !1,
        name: BB.name,
        ranks: [],
        cosmetics: null !== (QB = BB.cosmetics) && void 0 !== QB ? QB : {},
        nameColour: zI.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return jB ? {
        ...nB,
        cosmetics: jB
      } : nB
    }

    function NI(BB) {
      let {
        pending: jB
      } = BB;
      return (0, pB.jsx)("span", {
        className: "StoreRecipientLoader",
        children: jB && (0, pB.jsx)(SB.e, {})
      })
    }

    function uI(BB) {
      var jB;
      let {
        selfName: zB,
        giftRecipient: nB,
        suggestionsVersion: uB,
        pulseSignal: aB,
        disabled: rB
      } = BB;
      const {
        t: sB
      } = (0, IB.D)(), JB = (0, lB.j)(), mB = (0, QB.useRef)(null), yB = (0, QB.useRef)(null), {
        query: GB,
        via: LB,
        recipient: gB,
        recipientCosmetics: SB
      } = nB, MB = (0, wd.k)(GB), EB = (0, QB.useMemo)((() => {
        const BB = kB.featureFlags.useSocialFeatures ? JB.friends.filter((BB => !BB.isError)) : [];
        return (0, wd.h)({
          onlineFriends: (0, lB.e)(BB),
          recentRecipients: Cd(),
          friends: BB,
          selfName: zB,
          max: 8
        })
      }), [JB.friends, zB, uB]), iB = GB.trim().toLowerCase(), qB = "search" !== LB && iB ? EB.find((BB => BB.name.toLowerCase() === iB)) : void 0, fB = qB && "prefilled" === LB ? [qB, ...EB.filter((BB => BB !== qB))] : EB, oB = "" !== iB && !qB, HB = oB ? GB : "", DB = fB.length > 0;
      (0, QB.useEffect)((() => {
        mB.current && mB.current.value !== HB && (mB.current.value = HB)
      }), [HB]), (0, QB.useEffect)((() => {
        mB.current && (mB.current.disabled = rB)
      }), [rB, aB]);
      const FB = (0, QB.useRef)(0);

      function VB() {
        "self" !== MB && (0, jj.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), nB.clear()
      }

      function hB(BB) {
        var jB, zB;
        if (rB) return;
        if (" " === BB.key || "Enter" === BB.key) return BB.preventDefault(), void BB.currentTarget.click();
        const QB = Array.from(null !== (jB = null === (zB = yB.current) || void 0 === zB ? void 0 : zB.querySelectorAll("[role=radio]")) && void 0 !== jB ? jB : []),
          nB = QB.indexOf(BB.currentTarget);
        let dB;
        "ArrowRight" === BB.key || "ArrowDown" === BB.key ? dB = QB[(nB + 1) % QB.length] : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? dB = QB[(nB - 1 + QB.length) % QB.length] : "Home" === BB.key ? dB = QB[0] : "End" === BB.key && (dB = QB[QB.length - 1]), dB && (BB.preventDefault(), dB.focus(), dB.click())
      }(0, QB.useEffect)((() => {
        var BB;
        aB > FB.current && !rB && (FB.current = aB, null === (BB = mB.current) || void 0 === BB || BB.focus())
      }), [aB, rB]);
      const XB = "self" === MB,
        ZB = null !== (jB = null === qB || void 0 === qB ? void 0 : qB.name) && void 0 !== jB ? jB : null,
        AB = "error" === gB.status ? gB.error : null,
        TB = "store:giftRecipientLookupFailed" === AB;
      return (0, pB.jsxs)("div", {
        className: dB()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: rB,
          StoreRecipientStripNoChips: !DB
        }),
        children: [(0, pB.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: sB("store:buyingFor")
        }), (0, pB.jsxs)("div", {
          ref: yB,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": sB("store:whoIsItFor"),
          children: [(0, pB.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": XB,
            tabIndex: rB || !XB && null !== ZB ? -1 : 0,
            className: dB()("StoreRecipientMe", {
              StoreRecipientChecked: XB
            }),
            onClick: () => {
              rB || VB()
            },
            onKeyDown: hB,
            children: [(0, pB.jsx)(NB.c, {
              name: "user"
            }), " ", sB("store:me")]
          }), DB && (0, pB.jsx)("div", {
            className: "StoreRecipientChips",
            children: fB.map((BB => {
              const jB = BB === qB;
              return (0, pB.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": jB,
                tabIndex: !rB && jB ? 0 : -1,
                title: BB.name,
                className: dB()("StoreRecipientChip", {
                  StoreRecipientChecked: jB
                }),
                onClick: () => {
                  rB || function(BB) {
                    "gift" !== MB && (0, jj.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), nB.choose(BB.name, BB.kind)
                  }(BB)
                },
                onKeyDown: hB,
                children: (0, pB.jsx)(nI.g, {
                  playerSocialPreview: II(BB, jB ? SB : null),
                  opensProfileCard: !1,
                  isFriend: null !== BB.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== BB.friend,
                  status: null === BB.friend ? null : void 0,
                  trailing: jB ? (0, pB.jsx)(NI, {
                    pending: "pending" === gB.status
                  }) : void 0
                })
              }, BB.name)
            }))
          })]
        }), (0, pB.jsxs)("div", {
          className: dB()("StoreRecipientSearch", {
            StoreRecipientChecked: oB,
            StoreRecipientSearchPulse: aB > 0 && !oB,
            StoreRecipientSearchError: null !== AB && !TB
          }),
          onClick: () => {
            var BB;
            null === (BB = mB.current) || void 0 === BB || BB.focus()
          },
          children: [oB && "found" === gB.status && SB && (0, pB.jsx)(dI, {
            cosmetics: SB
          }), !(oB && "found" === gB.status && SB) && (0, pB.jsx)(NB.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, pB.jsx)(tB.d, {
            className: "StoreRecipientSearchInput",
            domRef: mB,
            placeholderText: sB("store:searchName"),
            defaultValue: HB,
            maxLength: YB.g,
            onValueChange: function(BB) {
              "gift" !== MB && BB.trim() && (0, jj.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), nB.type(BB)
            },
            onEnter: () => {
              var BB;
              const jB = null === (BB = mB.current) || void 0 === BB ? void 0 : BB.value.trim();
              jB && nB.choose(jB, "typed")
            },
            blurOnEnter: !0
          }), oB && (0, pB.jsx)(NI, {
            pending: "pending" === gB.status
          }), oB && (0, pB.jsx)("div", {
            ...(0, UB.S)({
              disabled: rB
            }),
            "aria-label": sB("store:clearRecipient"),
            title: sB("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: BB => {
              BB.stopPropagation(), rB || VB()
            },
            children: (0, pB.jsx)(NB.c, {
              name: "xmark"
            })
          })]
        }, aB), AB && (0, pB.jsx)("div", {
          className: dB()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: TB
          }),
          role: "status",
          children: sB(AB)
        })]
      })
    }
    var UI = zB(2397),
      aI = zB(2323),
      pI = zB(3676),
      rI = zB(3236),
      sI = zB(2354);
    const JI = zB.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function mI() {
      (0, sI.g)(JI, {
        lowPriority: !1
      })
    }

    function yI(BB) {
      let {
        onBack: jB,
        cta: zB,
        recipient: nB,
        afterCta: dB
      } = BB;
      const {
        t: uB
      } = (0, IB.D)(), [aB, rB] = (0, QB.useState)("starting"), sB = (0, QB.useRef)(null), JB = (0, Kj.d)(), mB = (0, QB.useRef)(null), yB = (0, QB.useCallback)((() => {
        const BB = sB.current;
        null !== BB.error && BB.load();
        const jB = BB.play();
        mB.current = jB, jB.catch((BB => {
          (0, pI.b)("Failed to play Super Rank video", BB), JB.current && mB.current === jB && rB("failed")
        }))
      }), [JB]);
      return (0, QB.useEffect)((() => {
        const BB = sB.current;
        let jB;

        function zB() {
          clearTimeout(jB), jB = setTimeout(yB, 3e3)
        }
        return yB(), BB.addEventListener("ended", zB), () => {
          clearTimeout(jB), BB.removeEventListener("ended", zB)
        }
      }), [yB]), (0, pB.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, pB.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, pB.jsx)(UB.c, {
            className: "StoreDetailBackButton",
            onClick: jB,
            padBack: !0,
            children: uB("general:back")
          }), (0, pB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pB.jsx)(NB.c, {
              name: "bolt"
            }), " ", uB("homePage:superRank")]
          }), nB]
        }), (0, pB.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, pB.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, pB.jsx)("video", {
              ref: sB,
              src: `${mj.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: JI,
              muted: !0,
              playsInline: !0,
              controls: "playing" === aB,
              onPlaying: () => {
                rB("playing")
              },
              onError: () => {
                rB("failed")
              }
            }), ("failed" === aB || "loading" === aB) && (0, pB.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, pB.jsx)(UB.f, {
                ariaLabel: uB("general:play"),
                loading: "loading" === aB,
                onClick: () => {
                  rB("loading"), yB()
                },
                touchPressOn: "pointerup",
                children: (0, pB.jsx)(NB.c, {
                  name: "play"
                })
              })
            })]
          }), (0, pB.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, pB.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, pB.jsx)(rI.c, {})
            }), (0, pB.jsxs)("div", {
              className: "StoreTileActions",
              children: [zB, dB]
            })]
          })]
        })]
      })
    }
    var kI = zB(2729),
      GI = zB(3637),
      LI = zB(3210),
      gI = zB(3217);
    const tI = [zI.n.yellow, zI.n.green, zI.n.aqua, zI.n.blue, zI.n.purple, zI.n.red];

    function SI(BB) {
      return "needsRecipient" === BB || "lookingUp" === BB || "gift" === BB || "recipientOwns" === BB || "recipientSharesOwned" === BB || "recipientSubscribed" === BB
    }

    function MI(BB) {
      const {
        onKeyDown: jB,
        ...zB
      } = (0, UB.S)();
      return {
        ...zB,
        "aria-label": BB,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && (null === jB || void 0 === jB || jB(BB))
        }
      }
    }

    function EI(BB) {
      let {
        text: jB
      } = BB;
      return (0, pB.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(jB).map(((BB, jB) => (0, pB.jsx)("span", {
          style: {
            color: tI[jB % tI.length]
          },
          children: BB
        }, jB)))
      })
    }
    const iI = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function qI(BB) {
      let {
        state: jB,
        item: zB,
        price: QB,
        busy: nB,
        highlight: uB = !1,
        onAct: aB,
        onNeedRecipient: rB,
        onLogin: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = "superRank" === zB ? hB.h.product.days : null, yB = BB => null === mB ? JB(BB ? "general:gift" : "general:buy") : JB(BB ? "store:giftDays" : "store:buyDays", {
        days: mB
      }), kB = (BB, jB) => {
        const zB = (0, pB.jsxs)(pB.Fragment, {
          children: [null === BB && (0, pB.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== BB && (0, pB.jsx)("span", {
            className: "StoreCtaLabel",
            title: BB,
            children: BB
          })]
        });
        return null !== mB ? (0, pB.jsxs)(pB.Fragment, {
          children: [jB && (0, pB.jsx)("span", {
            className: "StoreCtaIcon",
            children: jB
          }), zB, (0, pB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, pB.jsx)(aI.d, {
              amount: QB
            })]
          })]
        }) : (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsxs)("span", {
            className: "StoreCtaLead",
            children: [zB, "\xb7"]
          }), (0, pB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [jB, (0, pB.jsx)(aI.d, {
              amount: QB
            })]
          })]
        })
      };
      let GB;
      switch (jB) {
        case "pending":
          GB = (0, pB.jsx)(UB.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: kB(null)
          });
          break;
        case "login":
          GB = (0, pB.jsx)(UB.m, {
            className: "StoreCtaButton",
            onClick: sB,
            children: kB(yB(!1))
          });
          break;
        case "owned":
          GB = (0, pB.jsx)(UB.h, {
            className: "StoreCtaButton",
            onClick: () => {
              EB.c.set({
                openEverythingMenuName: kj.o.CUSTOMISATION
              })
            },
            children: (0, pB.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, pB.jsx)(NB.c, {
                name: "shirt"
              }), " ", JB("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          GB = (0, pB.jsx)(UB.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, pB.jsx)("span", {
              className: "StoreCtaLabel",
              children: JB(iI[jB])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          GB = (0, pB.jsx)(UB.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === jB || null === QB,
            loading: "lookingUp" === jB || nB,
            onClick: aB,
            analyticsClick: {
              id: "store.gift",
              value: zB
            },
            children: kB(yB(!0), wd.e)
          });
          break;
        case "buy":
        case "recharge":
          GB = (0, pB.jsx)(UB.m, {
            className: "StoreCtaButton",
            loading: nB,
            disabled: null === QB,
            onClick: aB,
            analyticsClick: {
              id: "store.buy",
              value: zB
            },
            children: kB(yB(!1))
          })
      }
      return (0, pB.jsx)("div", {
        className: dB()("StoreCta", {
          StoreCtaHighlight: uB,
          StoreCtaLabelFirst: null !== mB
        }),
        onClick: BB => {
          BB.stopPropagation(), "needsRecipient" === jB && rB()
        },
        children: GB
      })
    }

    function fI() {
      const {
        t: BB
      } = (0, IB.D)();
      return (0, pB.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, pB.jsxs)("li", {
          children: [(0, pB.jsx)(NB.c, {
            name: "check"
          }), (0, pB.jsx)(EI, {
            text: BB("store:colourfulNames")
          })]
        }), (0, pB.jsxs)("li", {
          children: [(0, pB.jsx)(NB.c, {
            name: "check"
          }), BB("store:perkCapes")]
        }), (0, pB.jsxs)("li", {
          children: [(0, pB.jsx)(NB.c, {
            name: "check"
          }), BB("store:perkNoAdverts")]
        }), (0, pB.jsxs)("li", {
          children: [(0, pB.jsx)(NB.c, {
            name: "check"
          }), BB("store:perkFriends", {
            count: (0, OB.b)(["super"])
          })]
        })]
      })
    }

    function oI(BB) {
      let {
        daysLeft: jB,
        totalDays: zB,
        urgent: QB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), NB = zB > 0 ? Math.min(1, Math.max(.03, jB / zB)) : 1;
      return (0, pB.jsxs)("div", {
        className: dB()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: QB
        }),
        children: [(0, pB.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === jB ? nB("store:oneDayLeft") : nB("store:daysLeft", {
            days: jB
          })
        }), (0, pB.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, pB.jsx)("i", {
            style: {
              width: 100 * NB + "%"
            }
          })
        })]
      })
    }

    function HI(BB) {
      var jB;
      let {
        state: zB,
        urgent: QB,
        daysLeft: nB,
        totalDays: uB,
        recipientHasSuperRank: UB,
        busy: aB,
        highlight: rB,
        onOpen: sB,
        onAct: JB,
        onNeedRecipient: mB,
        onLogin: yB
      } = BB;
      const {
        t: kB
      } = (0, IB.D)(), GB = SI(zB), {
        days: LB
      } = hB.h.product, gB = kB("store:recipientHasSuperRank", {
        giftDays: LB
      }), tB = null === (jB = vB("subscribed" === zB)) || void 0 === jB ? void 0 : jB.text;
      return (0, pB.jsxs)("div", {
        className: dB()("StoreTile StoreSuperRankTile", {
          StoreTileGift: GB,
          StoreSuperRankTileUrgent: "recharge" === zB && QB,
          StoreSuperRankTileWithChip: UB,
          StoreSuperRankTileGiftReady: "gift" === zB
        }),
        ...MI(kB("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: mI,
        onFocus: mI,
        onClick: sB,
        children: [(0, pB.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${jI.f})`
          }
        }), GB && (0, pB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pB.jsxs)("div", {
          className: "StoreTileContent",
          children: [UB && (0, pB.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: gB,
            children: gB
          }), (0, pB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pB.jsx)(NB.c, {
              name: "bolt"
            }), " ", kB("homePage:superRank")]
          }), GB && (0, pB.jsx)("div", {
            className: "StoreTilePitch",
            children: kB("store:giftPitch", {
              days: LB
            })
          }), "recharge" === zB && (0, pB.jsx)(oI, {
            daysLeft: nB,
            totalDays: uB,
            urgent: QB
          }), tB && (0, pB.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, pB.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: tB
            })
          }), (0, pB.jsx)(fI, {}), (0, pB.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, pB.jsx)(qI, {
              state: zB,
              item: "superRank",
              price: hB.h.price,
              busy: aB,
              highlight: rB,
              onAct: JB,
              onNeedRecipient: mB,
              onLogin: yB
            }), "needsRecipient" === zB && (0, pB.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: kB("store:pickRecipientFirst")
            }), "recharge" === zB && QB && (0, pB.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === nB ? kB("store:endsInOneDay") : kB("store:endsInDays", {
                days: nB
              })
            })]
          })]
        })]
      })
    }
    const DI = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function FI(BB) {
      var jB;
      let {
        pack: zB,
        state: nB,
        busy: uB,
        onOpen: UB,
        onAct: aB,
        onNeedRecipient: rB,
        onLogin: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = hd.e[zB], yB = ed.g[zB], kB = (0, jI.m)(zB), GB = (0, QB.useRef)(null);
      (0, LI.l)(zB, GB);
      const LB = SI(nB),
        gB = null !== (jB = mB.displayName) && void 0 !== jB ? jB : zB,
        tB = (0, GI.d)((() => {
          (0, kI.e)();
          const BB = (0, LI.g)(zB);
          void 0 !== BB && (0, sI.g)((0, LI.c)(BB))
        })),
        [SB] = (0, QB.useState)(Od.e);
      return (0, pB.jsxs)("div", {
        className: dB()("StoreTile StorePackTile", DI[mB.tier], {
          StorePackTileOwned: "owned" === nB,
          StorePackTileRecipientOwns: "recipientOwns" === nB,
          StoreTileGift: LB
        }),
        ...MI(gB),
        ref: GB,
        "data-store-item": zB,
        onClick: UB,
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || SB || tB.start()
        },
        onPointerLeave: tB.cancel,
        children: [yB && (0, pB.jsx)(yB, {}), (0, pB.jsx)("div", {
          className: "StorePackCharacters",
          children: kB.map((BB => (0, pB.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,jI.g)(BB)})`
            }
          }, BB)))
        }), (0, pB.jsx)("div", {
          className: "StoreTileScrim"
        }), LB && (0, pB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pB.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, pB.jsx)("div", {
            className: "StoreTileTitle",
            children: gB
          }), (0, pB.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, pB.jsx)(gI.b, {
              tier: mB.tier
            }), " \xb7 ", JB("store:itemCount", {
              count: (0, UI.c)(zB)
            }), "owned" === nB && (0, pB.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, pB.jsx)(NB.c, {
                name: "check"
              }), " ", JB("general:owned")]
            })]
          }), (0, pB.jsx)(qI, {
            state: nB,
            item: zB,
            price: (0, hB.c)(zB),
            busy: uB,
            onAct: aB,
            onNeedRecipient: rB,
            onLogin: sB
          })]
        })]
      })
    }
    var YI = zB(3179),
      VI = zB(1574),
      hI = zB(1494),
      XI = zB(3665);

    function ZI() {
      return (0, pB.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var AI = zB(1378),
      TI = zB(1585),
      PI = zB(34283);

    function WI(BB) {
      let {
        character: jB,
        drawn: zB,
        onDrawn: nB
      } = BB;
      const IB = (0, QB.useRef)(null),
        NB = (0, PI.e)(jB);
      return (0, pB.jsx)("div", {
        className: dB()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: zB
        }),
        children: (0, pB.jsx)(QB.Suspense, {
          fallback: null,
          children: (0, pB.jsx)(kI.d, {
            ref: IB,
            framing: "store",
            turntableFromYaw: zB ? NB.yaw : null,
            onReady: () => {
              var BB, zB;
              null === (BB = IB.current) || void 0 === BB || BB.setOrbit(NB), null === (zB = IB.current) || void 0 === zB || zB.setAllCosmetics(TI.d[jB].cosmetics)
            },
            onDrawn: nB
          })
        })
      })
    }
    const eI = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      lI = new Set(["wildSpirits"]);

    function wI(BB) {
      var jB;
      let {
        tile: zB,
        design: nB,
        canGoLive: uB,
        live: UB,
        busy: aB,
        highlight: rB,
        onLiveStart: sB,
        onLiveEnd: JB,
        onOpen: mB,
        onAct: yB,
        onNeedRecipient: kB,
        onLogin: GB
      } = BB;
      const {
        t: LB
      } = (0, IB.D)(), {
        pack: gB,
        state: tB
      } = zB, SB = hd.e[gB], MB = (0, hd.g)(gB), EB = (0, jI.j)(gB), iB = ed.g[EB], qB = lI.has(EB), {
        tier: fB
      } = SB, oB = "legendary" === fB || "mythic" === fB, HB = (0, QB.useRef)(null);
      (0, AI.b)(HB, "epic" === fB || oB || qB);
      const [DB, YB] = (0, QB.useState)(!1);
      return !UB && DB && YB(!1), (0, pB.jsxs)("div", {
        ref: HB,
        className: dB()("StoreCharacterCard", `StoreCharacterCard${nB}`, eI[fB], {
          StoreCharacterCardOwned: "owned" === tB || "recipientOwns" === tB,
          StoreCharacterCardGift: SI(tB),
          StoreCharacterCardItem: void 0 === MB
        }),
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || !uB || UB || void 0 === MB || sB()
        },
        onPointerLeave: JB,
        children: [(0, pB.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: iB && (0, pB.jsx)(iB, {
            simple: !0
          })
        }), oB && (0, pB.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, pB.jsxs)(FB.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, VI.d)({
            kind: "pack",
            pack: gB
          }),
          "data-store-item": gB,
          onClick: BB => {
            (0, hI.d)(BB) && (BB.preventDefault(), mB())
          },
          children: [(0, pB.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, pB.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, pB.jsx)("div", {
              className: dB()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: DB
              }),
              style: {
                backgroundImage: `url(${(0,jI.p)(gB)})`
              }
            }), UB && void 0 !== MB && (0, pB.jsx)(WI, {
              character: MB,
              drawn: DB,
              onDrawn: () => {
                YB(!0)
              }
            })]
          }), (0, pB.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (jB = SB.displayName) && void 0 !== jB ? jB : gB
          }), (0, pB.jsx)(gI.b, {
            tier: fB,
            className: "StoreCharacterTier"
          })]
        }), (0, pB.jsx)("div", {
          className: "StoreCharacterScrim"
        }), qB && (0, pB.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, pB.jsx)(ZI, {})
        }), "owned" === tB && (0, pB.jsx)("span", {
          className: "StoreCharacterOwned",
          title: LB("general:owned"),
          "aria-label": LB("general:owned"),
          children: (0, pB.jsx)(NB.c, {
            name: "check"
          })
        }), (0, pB.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, pB.jsx)(qI, {
            state: tB,
            item: gB,
            price: (0, hB.c)(gB),
            busy: aB,
            highlight: rB,
            onAct: yB,
            onNeedRecipient: kB,
            onLogin: GB
          })
        })]
      })
    }

    function xI(BB) {
      let {
        tiles: jB,
        busy: zB,
        highlightItem: nB,
        onOpen: dB,
        onAct: IB,
        onNeedRecipient: NB,
        onLogin: uB
      } = BB;
      const UB = (0, XI.t)("storeCharacterCardFoil"),
        aB = (0, XI.t)("storeCharacterCardSpotlight"),
        rB = UB ? "Foil" : aB ? "Spotlight" : "Showcase",
        [sB] = (0, QB.useState)(Od.e),
        [JB, mB] = (0, QB.useState)(null);
      return (0, pB.jsx)("div", {
        className: "StoreCharacterGrid",
        children: jB.map((BB => (0, pB.jsx)(wI, {
          tile: BB,
          design: rB,
          canGoLive: !sB,
          live: JB === BB.pack,
          busy: zB,
          highlight: nB === BB.pack,
          onLiveStart: () => {
            mB(BB.pack)
          },
          onLiveEnd: () => {
            mB((jB => jB === BB.pack ? null : jB))
          },
          onOpen: () => {
            dB(BB.pack)
          },
          onAct: () => {
            IB(BB.pack)
          },
          onNeedRecipient: NB,
          onLogin: () => {
            uB(BB.pack)
          }
        }, BB.pack)))
      })
    }
    var KI = zB(34292);

    function CI(BB) {
      let {
        title: jB
      } = BB;
      return (0, pB.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, pB.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: jB
        })
      })
    }

    function cI(BB) {
      let {
        mountAtOnce: jB,
        children: zB
      } = BB;
      const nB = (0, QB.useRef)(null),
        [dB, IB] = (0, QB.useState)(jB),
        NB = (0, KI.d)();
      return (0, QB.useLayoutEffect)((() => {
        const BB = nB.current;
        BB && BB.getBoundingClientRect().top < BB.parentElement.getBoundingClientRect().bottom && IB(!0)
      }), []), dB || NB ? (0, pB.jsx)(pB.Fragment, {
        children: zB
      }) : (0, pB.jsx)("div", {
        ref: nB
      })
    }

    function bI(BB) {
      let {
        layout: jB,
        mountAtOnce: zB,
        bundleGift: QB,
        superRankTotalDays: nB,
        busy: dB,
        highlightItem: NB,
        onOpen: uB,
        onAct: UB,
        onNeedRecipient: aB,
        onLogin: rB,
        dailyDropTile: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = jB.packs.filter((BB => void 0 === (0, hd.g)(BB.pack) && !(0, hd.m)(BB.pack))), yB = jB.packs.filter((BB => void 0 !== (0, hd.g)(BB.pack))), kB = jB.packs.filter((BB => (0, hd.m)(BB.pack)));
      return (0, pB.jsxs)(pB.Fragment, {
        children: [(0, pB.jsx)(YI.b, {
          className: "StoreSuperGems",
          gift: QB,
          highlightSku: NB,
          leadingTile: sB
        }), (0, pB.jsx)(CI, {
          title: JB("store:rank")
        }), (0, pB.jsx)(HI, {
          state: jB.superRank.state,
          urgent: jB.superRank.urgent,
          daysLeft: jB.superRankDaysLeft,
          totalDays: nB,
          recipientHasSuperRank: jB.recipientHasSuperRank,
          busy: dB,
          highlight: "superRank" === NB,
          onOpen: () => {
            uB("superRank")
          },
          onAct: () => {
            UB("superRank")
          },
          onNeedRecipient: aB,
          onLogin: () => {
            rB("superRank")
          }
        }), (0, pB.jsxs)(cI, {
          mountAtOnce: zB,
          children: [(0, pB.jsx)(CI, {
            title: JB("store:bundles")
          }), (0, pB.jsx)("div", {
            className: "StorePackGrid",
            children: mB.map((BB => (0, pB.jsx)(FI, {
              pack: BB.pack,
              state: BB.state,
              busy: dB,
              onOpen: () => {
                uB(BB.pack)
              },
              onAct: () => {
                UB(BB.pack)
              },
              onNeedRecipient: aB,
              onLogin: () => {
                rB(BB.pack)
              }
            }, BB.pack)))
          }), (0, pB.jsxs)(cI, {
            mountAtOnce: zB,
            children: [(0, pB.jsx)(CI, {
              title: JB("store:characters")
            }), (0, pB.jsx)(xI, {
              tiles: yB,
              busy: dB,
              highlightItem: NB,
              onOpen: uB,
              onAct: UB,
              onNeedRecipient: aB,
              onLogin: rB
            }), kB.length > 0 && (0, pB.jsxs)(pB.Fragment, {
              children: [(0, pB.jsx)(CI, {
                title: JB("store:premiumItems")
              }), (0, pB.jsx)(xI, {
                tiles: kB,
                busy: dB,
                highlightItem: NB,
                onOpen: uB,
                onAct: UB,
                onNeedRecipient: aB,
                onLogin: rB
              })]
            })]
          })]
        })]
      })
    }

    function vI(BB) {
      let {
        state: jB,
        mode: zB,
        giftName: QB,
        busy: nB,
        highlight: dB,
        purchaseError: NB,
        onBack: uB,
        onChooseRecipient: aB,
        onAct: rB,
        onLogin: sB
      } = BB;
      const {
        t: JB
      } = (0, IB.D)(), mB = vB("gift" !== zB);
      return (0, pB.jsx)(yI, {
        onBack: uB,
        recipient: "gift" === zB && (0, pB.jsxs)(pB.Fragment, {
          children: [QB && (0, pB.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: JB("store:giftFor", {
              name: QB
            }),
            children: [wd.e, " ", JB("store:giftFor", {
              name: QB
            })]
          }), !QB && (0, pB.jsxs)("div", {
            ...(0, UB.S)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: aB,
            children: [wd.e, " ", JB("store:chooseRecipient")]
          })]
        }),
        cta: (0, pB.jsx)(qI, {
          state: jB,
          item: "superRank",
          price: hB.h.price,
          busy: nB,
          highlight: dB,
          onAct: rB,
          onNeedRecipient: aB,
          onLogin: sB
        }),
        afterCta: (0, pB.jsxs)(pB.Fragment, {
          children: [mB && (0, pB.jsx)("span", {
            className: "StoreTileNote",
            children: mB.text
          }), (null === mB || void 0 === mB ? void 0 : mB.manageUrl) && (0, pB.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: mB.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: JB("payments:manageSubscription")
          }), NB && (0, pB.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: JB(NB)
          })]
        })
      })
    }
    var RI = zB(159);
    const OI = RI.p("kind", [RI.H({
      kind: RI.t("refused"),
      heldTierId: RI.U(),
      until: RI.G()
    }), RI.H({
      kind: RI.t("refund"),
      tierId: RI.U(),
      refundedMs: RI.G(),
      forfeitedMs: RI.G(),
      premiumCurrency: RI.G()
    }), RI.H({
      kind: RI.t("none")
    })]);
    async function BN(BB) {
      const jB = await (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${mj.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: BB
      }, {
        retries: 1
      });
      return OI.parse(jB)
    }
    var jN = zB(3146),
      zN = zB(3187);

    function QN(BB, jB) {
      const zB = Math.max(1, Math.round(jB / AB.d));
      return [1 === zB ? `${BB}OneDay` : BB, {
        days: zB.toLocaleString()
      }]
    }

    function nN(BB) {
      let {
        price: jB
      } = BB;
      const {
        t: zB
      } = (0, IB.D)();
      return (0, pB.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, pB.jsx)(fI, {}), (0, pB.jsx)("div", {
          className: "SmallTextLight",
          children: zB("payments:subscriptionRenewsMonthly", {
            price: jB
          })
        }), (0, pB.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, pB.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: zB("homePage:termsOfService")
          }), (0, pB.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: zB("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function dN() {
      const BB = (0, PB.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && BB && (0, PB.subscriptionsSold)() ? (0, pB.jsx)(IN, {}) : null
    }

    function IN() {
      const {
        t: BB
      } = (0, IB.D)(), {
        userContext: jB
      } = (0, JB.d)(), {
        purchaseUnderWay: zB,
        notice: nB,
        subscribe: dB
      } = (0, jN.d)(), [NB, uB] = (0, QB.useState)(null), [aB, rB] = (0, QB.useState)(0), [sB, mB] = (0, QB.useState)(!1), yB = (0, QB.useRef)(!0), GB = jB !== oB.NULL_USER_CONTEXT, LB = null !== NB && NB.loadedFor === jB ? NB.offer : null, gB = null === nB || void 0 === nB ? void 0 : nB.pendingIntentId, tB = (0, QB.useRef)(gB);

      function SB() {
        rB((BB => BB + 1))
      }
      async function MB(BB) {
        mB(!1), await dB(BB), yB.current && SB()
      }
      if ((0, QB.useEffect)((() => (yB.current = !0, () => {
          yB.current = !1
        })), []), (0, QB.useEffect)((() => {
          void 0 !== tB.current && void 0 === gB && SB(), tB.current = gB
        }), [gB]), (0, QB.useEffect)((() => {
          if (!GB) return;
          let BB = !1;
          return mB(!1), async function() {
            const {
              offering: BB
            } = await (0, cB.getBillingClient)().getOfferings("superRankPage"), jB = null === BB || void 0 === BB ? void 0 : BB.packages.find(Xd.isPricedPackage);
            return void 0 === jB ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: jB,
              preview: await BN(jB.productId)
            }
          }().catch((BB => (console.error("Billing: loading the Super Rank subscription or its preview failed:", BB), {
            kind: "loadFailed"
          }))).then((zB => {
            BB || uB((BB => "loadFailed" === zB.kind && (null === BB || void 0 === BB ? void 0 : BB.loadedFor) === jB ? BB : {
              loadedFor: jB,
              offer: zB
            }))
          })), () => {
            BB = !0
          }
        }), [jB, GB, aB]), null === LB) return null;
      if ("loaded" !== LB.kind) return (0, pB.jsx)(zN.k, {
        notice: {
          kind: "error",
          key: "unavailable" === LB.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: EB,
        preview: iB
      } = LB;
      if ("refused" === iB.kind) return (0, pB.jsx)(zN.k, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(iB.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const qB = (0, YI.e)(EB),
        fB = (0, kB.isMobileApp)() && (0, pB.jsx)(nN, {
          price: qB
        });
      if (sB && "refund" === iB.kind) {
        const {
          refundedMs: jB,
          forfeitedMs: QB,
          premiumCurrency: nB
        } = iB, dB = QB + (0 === nB ? jB : 0), [IB, NB] = QN("payments:subscribeRefundsGemRank", jB), [uB, aB] = QN("payments:subscribeForfeitsGemRank", dB);
        return (0, pB.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, pB.jsx)("div", {
            children: BB("payments:subscribeEndsGemRank")
          }), nB > 0 && (0, pB.jsx)("div", {
            children: BB(IB, {
              ...NB,
              amount: nB.toLocaleString()
            })
          }), dB > 0 && (0, pB.jsx)("div", {
            children: BB(uB, aB)
          }), (0, pB.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, pB.jsx)(UB.h, {
              onClick: () => {
                mB(!1)
              },
              children: BB("general:cancel")
            }), (0, pB.jsx)(UB.m, {
              onClick: () => {
                MB(EB)
              },
              loading: zB,
              children: BB("payments:subscribeContinue", {
                price: qB
              })
            })]
          }), fB]
        })
      }
      return (0, pB.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, pB.jsx)(zN.k, {
          notice: nB,
          className: "SmallTextBold"
        }), (0, pB.jsx)(zN.e, {
          className: "SmallTextBold"
        }), (0, pB.jsx)(UB.m, {
          onClick: () => {
            "refund" === iB.kind ? mB(!0) : MB(EB)
          },
          disabled: void 0 !== gB,
          loading: zB,
          children: BB("payments:subscribeToSuperRank", {
            price: qB
          })
        }), fB]
      })
    }
    var NN = zB(2672);

    function uN(BB) {
      let {
        state: jB,
        view: zB,
        claiming: nB,
        onOpen: NB
      } = BB;
      const {
        t: aB
      } = (0, IB.D)(), rB = (0, QB.useRef)(null), sB = "ready" === zB.kind;
      (0, AI.b)(rB, sB);
      const JB = (0, bj.f)(jB);
      return (0, pB.jsxs)("div", {
        ref: rB,
        className: dB()("DailyDropTile", {
          DailyDropTileReady: sB
        }),
        children: [sB && (0, pB.jsx)(uB.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, pB.jsx)("div", {
          className: "DailyDropTileTitle",
          children: aB("dailyDrop:name")
        }), (0, pB.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, pB.jsx)(NN.d, {
            className: "DailyDropTileBlock"
          }), (0, pB.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, pB.jsx)("span", {
              children: aB("dailyDrop:collected", {
                count: jB.collected.length,
                total: jB.total
              })
            }), null !== JB && (0, pB.jsx)("span", {
              className: "DailyDropTileOdds",
              children: aB("dailyDrop:odds", {
                percent: JB.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === zB.kind && (0, pB.jsx)(UB.m, {
          className: "DailyDropTileOpen",
          onClick: NB,
          loading: nB,
          children: aB("dailyDrop:open")
        }), "waiting" === zB.kind && (0, pB.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: aB("dailyDrop:nextIn", {
            count: zB.hours
          })
        })]
      })
    }
    var UN = zB(2302);
    const aN = 32;

    function pN(BB) {
      let {
        worn: jB,
        Wd: zB,
        ld: nB,
        className: uB
      } = BB;
      const {
        t: UB
      } = (0, IB.D)(), aB = (0, QB.useRef)(null), [rB, sB] = (0, QB.useState)(null), [JB, mB] = (0, QB.useState)(!1);
      async function yB() {
        var BB;
        const jB = aB.current;
        if (!jB) return;
        const QB = null === (BB = jB.getDevTools()) || void 0 === BB ? void 0 : BB.canvas();
        let dB = null;
        try {
          dB = QB ? function(BB) {
            if (0 === BB.width || 0 === BB.height) return null;
            const jB = document.createElement("canvas");
            jB.width = aN, jB.height = aN;
            const zB = jB.getContext("2d", {
              willReadFrequently: !0
            });
            if (!zB) return null;
            zB.drawImage(BB, 0, 0, aN, aN);
            const {
              data: QB
            } = zB.getImageData(0, 0, aN, aN);
            for (let nB = 3; nB < QB.length; nB += 4)
              if (QB[nB] > 0) return BB.toDataURL("image/png");
            return null
          }(QB) : null
        } catch (NB) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", NB)
        }
        null === dB && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), sB(null === dB ? {
          kind: "head"
        } : {
          kind: "still",
          src: dB
        }), jB.updateCosmetic(zB, nB);
        const IB = new Promise((BB => {
          setTimeout(BB, 1e4)
        }));
        await Promise.race([jB.ensureReadyForCapture(zB), IB]).catch((BB => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", BB)
        })), aB.current === jB && mB(!0)
      }
      return (0, pB.jsxs)("div", {
        className: dB()("DailyDropRevealFigures", uB),
        children: [(0, pB.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, pB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === rB || void 0 === rB ? void 0 : rB.kind) && (0, pB.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: rB.src,
              alt: "",
              draggable: !1
            }), "head" === (null === rB || void 0 === rB ? void 0 : rB.kind) && (0, pB.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, pB.jsx)(QI.c, {
                cosmetics: jB
              })
            }), null === rB && (0, pB.jsx)(SB.e, {})]
          }), (0, pB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: UB("dailyDrop:before")
          })]
        }), (0, pB.jsx)(NB.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, pB.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, pB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, pB.jsx)("div", {
              className: dB()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: JB
              }),
              children: (0, pB.jsx)(QB.Suspense, {
                fallback: null,
                children: (0, pB.jsx)(kI.d, {
                  ref: aB,
                  onReady: () => {
                    var BB, zB;
                    null === (BB = aB.current) || void 0 === BB || BB.resetCamera(), null === (zB = aB.current) || void 0 === zB || zB.setAllCosmetics(jB)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      yB()
                    }))
                  }
                })
              })
            }), !JB && (0, pB.jsx)(SB.e, {})]
          }), (0, pB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: UB("dailyDrop:after")
          })]
        })]
      })
    }
    var rN = zB(1901);
    const sN = "dailyDropReminderAsked_";

    function JN(BB) {
      return async function(BB) {
        if (BB.remindersOn || (0, EB.e)(EB.c.get("gameState"))) return null;
        const jB = await oB.userContextManager.getCurrentUserContext(),
          zB = sN + jB.whamm;
        if (null !== az.j.getItem(zB)) return null;
        const [QB, nB] = await Promise.all([(0, xj.f)().catch((BB => (console.error("Couldn't tell whether this device can take push notifications:", BB), null))), yN()]);
        if (null === QB && !nB) return null;
        return {
          askedKey: zB,
          requester: QB
        }
      }(BB).catch((BB => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", BB), null)))
    }

    function mN(BB, jB) {
      az.j.setItem(BB.askedKey, !0), (0, bj.p)("daily_drop.remind", jB ? "yes" : "no"), jB && async function(BB) {
        const jB = (0, bj.t)({
            remindersOn: !0
          }),
          zB = null === BB ? Promise.resolve() : BB(),
          [QB, nB] = await Promise.allSettled([jB, zB]);
        "rejected" === QB.status && console.error("Failed to turn on Lucky Skin Block reminders:", QB.reason);
        "rejected" === nB.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", nB.reason);
        "rejected" !== QB.status && "rejected" !== nB.status || rN.f.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(BB.requester)
    }

    function yN() {
      return (0, wj.e)().then((BB => BB.app + BB.browser + BB.msnPlay > 0), (BB => (console.error("Couldn't tell where push notifications reach this account:", BB), !0)))
    }
    const kN = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      GN = {
        opening: 900,
        shrinking: 700
      };

    function LN(BB) {
      let {
        drop: jB,
        onClose: zB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), {
        userContext: uB
      } = (0, JB.d)(), {
        state: aB,
        view: rB
      } = (0, bj.x)(), [sB, mB] = (0, QB.useState)("closed"), [yB] = (0, QB.useState)((() => ({
        ...uB.getPlayerCosmetics()
      }))), [kB] = (0, QB.useState)((() => (0, bj.g)(jB, yB))), [GB, LB] = (0, QB.useState)(!1), [gB, tB] = (0, QB.useState)(!1), [SB] = (0, QB.useState)((() => null === aB ? Promise.resolve(null) : JN(aB))), [MB, iB] = (0, QB.useState)(null), qB = (0, Kj.d)(), {
        gameState: fB
      } = (0, EB.m)(["gameState"]);
      async function oB() {
        const BB = await SB;
        qB.current && (null === BB ? zB() : (iB(BB), mB("remind")))
      }

      function HB(BB) {
        null !== MB && mN(MB, BB), zB()
      }(0, QB.useEffect)((() => {
        const BB = GN[sB];
        if (void 0 === BB) return;
        const jB = setTimeout((() => {
          mB(kN[sB])
        }), BB);
        return () => {
          clearTimeout(jB)
        }
      }), [sB]);
      const DB = nB(`dailyDrop:kind_${kB.Wd}`),
        FB = aB && nB("dailyDrop:collected", {
          count: aB.collected.length,
          total: aB.total
        }),
        YB = "revealed" === sB || "shrinking" === sB,
        VB = "equip" !== sB && "remind" !== sB;
      return (0, pB.jsx)(AQ.d, {
        className: "DailyDropRevealScreen",
        close: "remind" === sB ? () => {
          HB(!1)
        } : zB,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, pB.jsxs)("div", {
          className: dB()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === sB,
            DailyDropRevealShrinking: "shrinking" === sB,
            DailyDropRevealFiguresShown: "shrinking" === sB || "equip" === sB || "remind" === sB
          }),
          children: [(0, pB.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, pB.jsx)(pN, {
              className: "DailyDropRevealStageFigures",
              worn: yB,
              Wd: kB.Wd,
              ld: kB.ld
            }), ("closed" === sB || "opening" === sB) && (0, pB.jsx)(NN.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === sB
            }), YB && (0, pB.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, pB.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,UN.j)(kB.Wd,kB.ld).previewTex}.png`,
                alt: DB,
                draggable: !1
              })
            })]
          }), VB && (0, pB.jsxs)(pB.Fragment, {
            children: [(0, pB.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, pB.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: YB ? DB : nB("dailyDrop:name")
              }), "closed" === sB && (0, pB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: nB("dailyDrop:tapToOpen")
              }), "revealed" === sB && (0, pB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: nB("dailyDrop:tapToContinue")
              })]
            }), (0, pB.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": nB("closed" === sB ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                mB(kN[sB])
              }
            })]
          }), "equip" === sB && (0, pB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: DB
            }), (0, pB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: nB("dailyDrop:equipQuestion")
            }), (0, pB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pB.jsx)(UB.f, {
                className: "DailyDropRevealButton",
                disabled: GB,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, bj.p)("daily_drop.not_now", jB), oB()
                },
                children: nB("dailyDrop:notNow")
              }), (0, pB.jsx)(UB.f, {
                className: "DailyDropRevealButton",
                loading: GB,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, bj.p)("daily_drop.equip", jB), LB(!0), tB(!1);
                    try {
                      await (0, bj.e)(uB, kB.Wd, kB.ld)
                    } catch (BB) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", BB), LB(!1), void tB(!0)
                    }
                    await oB()
                  }()
                },
                children: nB("dailyDrop:equip")
              })]
            }), gB && (0, pB.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: nB("dailyDrop:equipFailed")
            }), !(0, EB.e)(fB) && (0, pB.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: GB,
              onClick: () => {
                var BB;
                (0, bj.p)("daily_drop.customise", jB), BB = kB.Wd, uz.n.Ly(YQ, BB), EB.c.set({
                  openEverythingMenuName: kj.o.CUSTOMISATION
                }), zB()
              },
              children: [nB("dailyDrop:customise"), " ", (0, pB.jsx)(NB.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), FB && (0, pB.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [FB, "waiting" === (null === rB || void 0 === rB ? void 0 : rB.kind) && ` \xb7 ${nB("dailyDrop:nextInInline",{count:rB.hours})}`]
            })]
          }), "remind" === sB && (0, pB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: nB("dailyDrop:remindTitle")
            }), (0, pB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: nB("dailyDrop:remindSubtitle")
            }), (0, pB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pB.jsx)(UB.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  HB(!1)
                },
                children: nB("dailyDrop:remindNo")
              }), (0, pB.jsx)(UB.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  HB(!0)
                },
                children: nB("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function gN(BB, jB) {
      const {
        t: zB
      } = (0, IB.D)(), nB = function(BB, jB) {
        const {
          state: zB,
          view: nB
        } = (0, bj.x)(), [dB, IB] = (0, QB.useState)(!1), [NB, uB] = (0, QB.useState)(!1), [UB, aB] = (0, QB.useState)(null), pB = (0, QB.useRef)(null), rB = (0, QB.useRef)(!1), sB = jB && "ready" === (null === nB || void 0 === nB ? void 0 : nB.kind);
        (0, QB.useEffect)((() => {
          BB ? sB && !rB.current && (rB.current = !0, (0, bj.p)("daily_drop.shown", "tile")) : rB.current = !1
        }), [BB, sB]), (0, QB.useEffect)((() => {
          BB || (kB(), uB(!1))
        }), [BB]);
        const JB = BB && null === UB && !(0, bj.l)(nB);
        (0, QB.useEffect)((() => {
          JB && EB.c.set({
            openEverythingMenuName: kj.o.CUSTOMISATION
          })
        }), [JB]);
        const mB = (0, QB.useRef)(!1),
          yB = (0, QB.useRef)(BB);

        function kB() {
          null !== pB.current && (pB.current = null, aB(null))
        }
        return yB.current = BB, {
          state: zB,
          view: nB,
          claiming: dB,
          claimFailed: NB,
          reveal: UB,
          open: async function() {
            if (!mB.current) {
              mB.current = !0, IB(!0), uB(!1);
              try {
                const {
                  state: BB,
                  drop: jB
                } = await (0, bj.b)();
                if (null === BB || null === jB) return;
                if (!yB.current) return;
                (0, bj.p)("daily_drop.open", jB), pB.current = {
                  state: BB,
                  drop: jB
                }, aB(pB.current)
              } catch (BB) {
                console.error("Failed to claim the Lucky Skin Block", BB), yB.current && uB(!0)
              } finally {
                mB.current = !1, IB(!1)
              }
            }
          },
          closeReveal: kB
        }
      }(BB, jB);
      return {
        shown: (0, bj.l)(nB.view) || null !== nB.reveal,
        tile: nB.state && nB.view && (0, pB.jsx)(uN, {
          state: nB.state,
          view: nB.view,
          claiming: nB.claiming,
          onOpen: nB.open
        }),
        claimFailed: nB.claimFailed && (0, pB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: zB("dailyDrop:claimFailed")
        }),
        reveal: nB.reveal && (0, pB.jsx)(LN, {
          drop: nB.reveal.drop,
          onClose: nB.closeReveal
        })
      }
    }

    function tN(BB) {
      let {
        show: jB
      } = BB;
      const zB = gN(jB, jB);
      return jB && zB.shown ? (0, pB.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [zB.claimFailed, zB.tile && (0, pB.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: zB.tile
        }), zB.reveal]
      }) : null
    }
    const SN = {
      kind: "board"
    };
    let MN = !1;

    function EN(BB) {
      return "found" === BB.status || "error" === BB.status && "store:giftRecipientLookupFailed" === BB.error ? BB.name : null
    }(0, TB.z)(Xd.prefetchBillingOfferings);
    const iN = (0, QB.memo)((function(BB) {
      var jB;
      let {
        show: nB
      } = BB;
      const {
        t: NB
      } = (0, IB.D)(), {
        userContext: uB
      } = (0, JB.d)(), UB = (0, PB.usePurchasesAllowed)(), aB = uB !== oB.NULL_USER_CONTEXT, rB = cd(uB), [sB, mB] = (0, yB.d)(), {
        page: kB,
        urlMode: GB,
        goTo: LB
      } = (0, bd.g)(), gB = function(BB) {
        return "superRank" === BB.kind ? "superRank" : "pack" === BB.kind ? BB.pack : null
      }(kB), {
        openEverythingMenuName: tB,
        gameState: SB
      } = (0, EB.m)(["openEverythingMenuName", "gameState"]), MB = null !== tB;
      ! function(BB, jB) {
        const [nB] = (0, QB.useState)(Od.e), [dB, IB] = (0, QB.useState)(!1);
        nB && jB && !dB && IB(!0);
        const NB = (0, MQ.u)(),
          uB = nB && dB && BB && !NB;
        (0, QB.useEffect)((() => {
          if (!uB) return;
          let BB = null,
            jB = null,
            QB = null;
          const nB = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, cB.getBillingClient)().purchaseUnderWay,
            dB = () => {
              var zB;
              null === (zB = QB) || void 0 === zB || zB(), QB = null, null !== BB && (clearTimeout(BB), BB = null), null !== jB && (clearTimeout(jB), jB = null)
            },
            IB = () => {
              (0, vd.p)(!1), (0, vd.o)(!1), dB(), BB = setTimeout((() => {
                BB = null, QB = (0, Rd.c)((() => {
                  QB = null, nB() ? IB() : ((0, vd.p)(!0), jB = setTimeout((() => {
                    jB = null, QB = (0, Rd.c)((() => {
                      QB = null, nB() ? IB() : (0, vd.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => zB(4746))).then((BB => {
                    BB.startBackgroundGameSetup()
                  }), (BB => {
                    console.warn("Background game setup: its chunk failed to load", BB)
                  })))
                }))
              }), 2e3)
            };
          for (const zB of BI) window.addEventListener(zB, IB, {
            capture: !0,
            passive: !0
          });
          return IB(), () => {
            for (const BB of BI) window.removeEventListener(BB, IB, {
              capture: !0
            });
            dB(), (0, vd.p)(!1), (0, vd.o)(!1)
          }
        }), [uB])
      }(nB && MB, "pack" === kB.kind);
      const iB = "landingPage" === SB;
      (0, QB.useEffect)((() => {
        MB && (0, Xd.prefetchBillingOfferings)()
      }), [MB]), (0, QB.useEffect)((() => {
        MB && !nB && iB && (0, jI.r)()
      }), [MB, nB, iB]);
      const [qB, fB] = (0, QB.useState)(0), [HB, DB] = (0, QB.useState)(null), [FB, YB] = (0, QB.useState)(null), [VB, XB] = (0, QB.useState)(null), [ZB, AB] = (0, QB.useState)(null), WB = (0, QB.useRef)(null), eB = (0, QB.useRef)(null), lB = (0, QB.useRef)(null), wB = (0, QB.useRef)(!1), xB = (0, TB.G)(), KB = (0, QB.useRef)(0), CB = (0, QB.useRef)(!1);

      function bB() {
        fB((BB => BB + 1))
      }(0, QB.useEffect)((() => {
        if (nB) {
          if (MN = !0, (0, TB.l)(), xB && xB.seq !== KB.current) {
            var BB;
            KB.current = xB.seq, "loginResume" !== xB.source && (0, TB.E)();
            const jB = (0, TB.e)(xB);
            GB || LB(jB), AB(null !== (BB = xB.highlight) && void 0 !== BB ? BB : null), YB(null), "gift" === xB.mode && xB.giftRecipientName ? rB.choose(xB.giftRecipientName, "prefilled") : "current" !== xB.mode && rB.clear(), "gift" !== xB.mode || xB.giftRecipientName || bB(), (0, jj.reportAnalyticsClick)({
              id: "store.open",
              value: xB.source
            })
          } else CB.current || (0, jj.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          CB.current = !0
        } else CB.current = !1
      }), [nB, xB]), (0, QB.useEffect)((() => {
        if (!ZB) return;
        const BB = setTimeout((() => {
          AB(null)
        }), 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [ZB]), (0, QB.useLayoutEffect)((() => {
        const BB = WB.current;
        if (!nB || !BB) return eB.current = null, void(lB.current = null);
        var jB;
        if (gB) eB.current = gB, null === (jB = BB.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === jB || jB.focus();
        else if (eB.current) {
          const jB = lB.current;
          null !== jB && (BB.scrollTop = jB);
          const zB = BB.querySelector(`[data-store-item="${eB.current}"]`);
          if (zB) {
            const QB = zB.getBoundingClientRect(),
              nB = BB.getBoundingClientRect();
            zB.focus({
              preventScroll: null !== jB && QB.bottom > nB.top && QB.top < nB.bottom
            })
          }
          eB.current = null
        }
      }), [gB, nB]), (0, QB.useEffect)((() => {
        YB(null)
      }), [rB.query]), (0, QB.useEffect)((() => {
        if (!VB) return;
        const BB = setTimeout((() => {
          XB(null)
        }), 8e3);
        return () => {
          clearTimeout(BB)
        }
      }), [VB]);
      const vB = uB.superRankInfo,
        RB = uB.isLoggedIn() || (0, PB.guestsMayBuy)(),
        OB = uB.getOwnedCosmeticPacks(),
        Bj = (0, wd.k)(rB.query),
        zj = (0, wd.f)({
          mode: Bj,
          loggedIn: aB ? RB : null,
          superRankInfo: vB,
          now: Date.now(),
          ownedPacks: OB,
          packs: hd.r,
          recipient: rB.recipient
        });
      (0, QB.useEffect)((() => {
        if (!RB || !nB) return;
        const BB = (0, TB.E)(),
          jB = BB && (0, wd.j)(BB, hd.r);
        BB && jB && ((0, jj.reportAnalyticsClick)({
          id: "store.login_resume",
          value: BB.item
        }), (0, TB.p)(jB))
      }), [RB, nB]);
      const Qj = (0, wd.m)({
        superRankDaysLeft: zj.superRankDaysLeft,
        openedThisSession: MN || nB,
        seenNewItems: (0, TB.k)()
      });
      (0, QB.useEffect)((() => {
        (0, TB.B)(Qj)
      }), [Qj]);
      const nj = "self" === Bj,
        dj = gN(nB, nB && nj && "board" === kB.kind);
      if (!nB || !UB) return null;
      const Ij = mB > sB && sB <= 700,
        Nj = !Ij && mB <= 420,
        uj = "gift" === Bj ? EN(rB.recipient) : null,
        Uj = null !== HB;

      function aj(BB) {
        (0, Ad.b)(BB, "gift" === Bj ? rB.query.trim() : null)
      }

      function pj(BB, jB) {
        (0, jj.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${jB?"gift":"self"}:${BB}`
        }), jB && (rB.recordGift(jB.name, BB), rj(jB))
      }

      function rj(BB) {
        ! function(BB) {
          try {
            az.j.setItem(xd, (0, wd.s)(Cd(), BB))
          } catch {}
        }({
          name: BB.name,
          cosmetics: BB.cosmetics
        }), LB(SN), XB((jB => {
          var zB;
          return {
            name: BB.name,
            seq: (null !== (zB = null === jB || void 0 === jB ? void 0 : jB.seq) && void 0 !== zB ? zB : 0) + 1
          }
        }))
      }
      async function sj(BB) {
        var jB, zB;
        if (wB.current) return;
        if (!RB) return void aj(BB);
        YB(null), AB(null);
        const QB = "gift" === Bj ? {
          name: EN(rB.recipient),
          cosmetics: rB.recipientCosmetics
        } : null;
        if (QB && !QB.name) return void bB();
        const nB = "superRank" === BB ? hB.h.id : (0, hB.b)(BB);
        wB.current = !0;
        const dB = await (0, ld.b)(nB, null !== (jB = null === QB || void 0 === QB ? void 0 : QB.name) && void 0 !== jB ? jB : null);
        if (wB.current = !1, !dB) return;
        DB(BB);
        const IB = await Td.c.purchase(nB, null !== (zB = null === QB || void 0 === QB ? void 0 : QB.name) && void 0 !== zB ? zB : null);
        DB(null), IB ? YB(IB) : (pj(BB, QB), QB || (await (0, Pd.flushClientAnalyticsEvents)(), (0, Zd.refreshWithoutConfirmation)("superRank" === BB ? "/super-rank-welcome" : `/pack-welcome/${BB}`)))
      }
      const Jj = dB()("Store", {
        StoreGift: "gift" === Bj,
        StorePortrait: Ij,
        StoreCompact: Nj
      });
      if ("pack" === kB.kind) {
        const BB = kB.pack,
          jB = zj.packs.find((jB => jB.pack === BB));
        return (0, pB.jsx)("div", {
          ref: WB,
          className: "CosmeticShopContainer",
          children: (0, pB.jsx)(ed.c, {
            pack: BB,
            onBack: () => {
              LB(SN)
            },
            onPurchased: jB => {
              pj(BB, jB ? {
                name: jB,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Bj && uj && jB && (0, pB.jsxs)(pB.Fragment, {
              children: [(0, pB.jsx)(qI, {
                state: jB.state,
                item: BB,
                price: (mj = BB, "superRank" === mj ? hB.h.price : (0, hB.c)(mj)),
                busy: Uj,
                onAct: () => {
                  sj(BB)
                },
                onNeedRecipient: () => {
                  LB(SN), bB()
                },
                onLogin: () => {
                  aj(BB)
                },
                highlight: ZB === BB
              }), FB && (0, pB.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: NB(FB)
              })]
            }),
            ownedPacks: OB,
            startAsGift: "gift" === Bj,
            initialGiftRecipient: "gift" === Bj ? null !== uj && void 0 !== uj ? uj : rB.query.trim() : "",
            highlightCta: ZB === BB
          }, BB)
        })
      }
      var mj;
      return "superRank" === kB.kind ? (0, pB.jsx)("div", {
        ref: WB,
        className: dB()(Jj, "StoreDetailView"),
        children: (0, pB.jsx)(vI, {
          state: zj.superRank.state,
          mode: Bj,
          giftName: uj,
          busy: Uj,
          highlight: "superRank" === ZB,
          purchaseError: FB,
          onBack: () => {
            LB(SN)
          },
          onChooseRecipient: () => {
            LB(SN), bB()
          },
          onAct: () => {
            sj("superRank")
          },
          onLogin: () => {
            aj("superRank")
          }
        })
      }) : (0, pB.jsxs)("div", {
        ref: WB,
        className: Jj,
        onScroll: BB => {
          lB.current = BB.currentTarget.scrollTop
        },
        children: [(0, pB.jsx)("div", {
          className: "StoreTopRow",
          children: (0, pB.jsx)(uI, {
            selfName: aB ? uB.getPlayerName() : "",
            giftRecipient: rB,
            suggestionsVersion: null !== (jB = null === VB || void 0 === VB ? void 0 : VB.seq) && void 0 !== jB ? jB : 0,
            pulseSignal: qB,
            disabled: Uj || !aB
          })
        }), VB && (0, pB.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            XB(null)
          },
          children: [(0, pB.jsx)(Wd.b, {
            showSignal: VB.seq
          }), wd.e, " ", NB("store:giftSent", {
            name: VB.name
          })]
        }, VB.seq), !VB && FB && (0, pB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: NB(FB)
        }), nj && dj.claimFailed, (0, pB.jsx)(bI, {
          layout: zj,
          mountAtOnce: null !== eB.current,
          bundleGift: "gift" === Bj ? {
            recipientName: uj,
            lookingUp: "pending" === rB.recipient.status,
            busy: Uj,
            onNeedRecipient: bB,
            onSent: BB => {
              (0, jj.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), rj({
                name: BB,
                cosmetics: rB.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, wd.q)(vB),
          busy: Uj,
          highlightItem: ZB,
          onOpen: function(BB) {
            (0, jj.reportAnalyticsClick)({
              id: "store.item_open",
              value: BB
            }), LB((0, TB.i)(BB))
          },
          onAct: sj,
          onNeedRecipient: bB,
          onLogin: aj,
          dailyDropTile: nj && dj.tile
        }), "gift" !== Bj && (0, pB.jsx)(dN, {}), dj.reveal]
      })
    }));
    var qN = zB(2794),
      fN = zB(8839),
      oN = zB(8658),
      HN = zB(2851),
      DN = zB(2696),
      FN = zB(2750),
      YN = zB(2766),
      VN = zB(2772),
      hN = zB(2842),
      XN = zB(2826),
      ZN = zB(2434),
      AN = zB(2473),
      TN = zB(2463),
      PN = zB(2093),
      WN = zB(2780),
      eN = zB(2479);

    function lN(BB) {
      let {
        show: jB
      } = BB;
      return jB ? (0, pB.jsx)(wN, {}) : null
    }

    function wN() {
      const {
        t: BB
      } = (0, IB.D)(), {
        followsLeader: jB
      } = (0, DN.e)(), {
        loading: zB,
        friends: nB,
        requests: uB,
        invites: aB
      } = (0, lB.j)(), {
        userContext: rB
      } = (0, JB.d)(), [sB, mB] = (0, QB.useState)(eN.n);
      (0, QB.useEffect)((() => {
        (0, eN.d)()
      }), []);
      const yB = uB.map((BB => BB.name)),
        {
          state: kB,
          recentRequesters: GB
        } = (0, XN.n)(),
        LB = new Map([...("loaded" === kB.status ? kB.recentPlayers : []).map((BB => [BB.preview.name, BB])), ...GB.map((BB => [BB.name, BB]))]),
        gB = (0, QB.useRef)(null),
        [MB, EB] = (0, QB.useState)(""),
        [iB, qB] = (0, QB.useState)("Enter"),
        [fB, oB] = (0, QB.useState)(null);

      function HB() {
        MB && (qB("Loading"), (0, TN.j)(MB, "social_menu").then((BB => {
          if (gB.current) switch (BB.kind) {
            case "sent":
              qB("Success");
              break;
            case "becameFriends":
              qB("BecameFriends");
              break;
            case "failed":
              oB(BB.message), qB("Error")
          }
        })))
      }
      return (0, QB.useEffect)((() => {
        if ("Enter" === iB || "Loading" === iB) return;
        const BB = setTimeout((() => {
          gB.current.value = "", EB(""), qB("Enter")
        }), "Success" === iB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [iB]), (0, pB.jsx)("div", {
        className: "SocialMenu",
        children: (0, pB.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, pB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, pB.jsx)(VN.d, {
                label: BB("socialBar:addFriend")
              }), (0, pB.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, pB.jsxs)("div", {
                  className: dB()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${iB}`]: !0
                  }),
                  children: ["Loading" === iB && (0, pB.jsx)(SB.e, {}), "Success" === iB && (0, pB.jsx)(NB.c, {
                    name: "check"
                  }), "BecameFriends" === iB && (0, pB.jsx)(pB.Fragment, {
                    children: BB("socialBar:nowFriends", {
                      playerName: MB
                    })
                  }), "Error" === iB && fB && (0, pB.jsx)(pB.Fragment, {
                    children: BB(fB.translationKey, fB.params)
                  })]
                }), (0, pB.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, pB.jsx)(tB.d, {
                    className: "PlayerSearchInput",
                    placeholderText: BB("socialBar:enterPlayerName"),
                    domRef: gB,
                    onValueChange: BB => {
                      EB((0, YB.m)(BB)), gB.current.value = (0, YB.m)(BB)
                    },
                    onEnter: () => {
                      MB && (0, jj.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), HB()
                    }
                  }), (0, pB.jsxs)(UB.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      HB()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, pB.jsx)(NB.c, {
                      name: "user-plus"
                    }), " ", BB("socialBar:sendRequest")]
                  })]
                })]
              }), (0, pB.jsx)(WN.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), aB.length > 0 && (0, pB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, pB.jsx)(VN.d, {
                label: BB("socialBar:invites"),
                meta: aB.length
              }), aB.map((jB => (0, pB.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, pB.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, pB.jsx)(ZN.b, {
                    invite: jB
                  })
                }), (0, pB.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, pB.jsx)(ZN.f, {
                    invite: jB
                  })
                }), (0, pB.jsx)(UB.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, AN.e)(jB)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${jB.destination.kind}`
                  },
                  children: BB("general:join")
                }), (0, pB.jsx)(RB.g, {
                  tooltipInner: (0, pB.jsx)(pB.Fragment, {
                    children: BB("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, pB.jsx)(UB.h, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === sB || void 0 === sB ? void 0 : sB.kind) && sB.inviteId === jB.id,
                    onClick: () => {
                      lB.d.declineInvite(jB.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${jB.destination.kind}`
                    },
                    children: (0, pB.jsx)(NB.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, jB.id)))]
            }), (0, pB.jsxs)("div", {
              className: dB()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !zB && 0 === uB.length
              }),
              children: [(0, pB.jsx)(VN.d, {
                label: (0, pB.jsxs)(pB.Fragment, {
                  children: [(0, pB.jsx)(NB.c, {
                    name: PN.f
                  }), " ", BB("socialBar:requests")]
                }),
                meta: (0, pB.jsxs)(pB.Fragment, {
                  children: [uB.length, uB.length === OB.p && (0, pB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), zB && (0, pB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pB.jsx)(SB.e, {})
              }), !zB && 0 === uB.length && (0, pB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriendRequests")
              }), !zB && uB.length > 0 && (0, pB.jsx)("div", {
                className: "PlayerRows",
                children: (0, pB.jsx)(Xn.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [uB],
                  children: uB.map(((jB, zB) => {
                    const QB = LB.get(jB.name);
                    return (0, pB.jsxs)(YN.f, {
                      playerSocialPreview: jB,
                      zIndex: uB.length - zB,
                      padDefaultFocus: (0, eN.k)(sB, jB.name, zB),
                      status: QB && (0, pB.jsx)(hN.c, {
                        gameNameWithVariation: QB.gameNameWithVariation,
                        isPrivateLobby: QB.isPrivateLobby
                      }),
                      children: [(0, pB.jsx)(RB.g, {
                        tooltipInner: (0, pB.jsx)(pB.Fragment, {
                          children: BB("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, pB.jsx)(UB.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mB((0, eN.g)(yB, zB)), (0, TN.h)(jB.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pB.jsx)(NB.c, {
                            name: "check"
                          })
                        })
                      }), (0, pB.jsx)(RB.g, {
                        tooltipInner: (0, pB.jsx)(pB.Fragment, {
                          children: BB("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, pB.jsx)(UB.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mB((0, eN.g)(yB, zB)), (0, TN.h)(jB.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pB.jsx)(NB.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${jB.name}_${jB.isError}`)
                  }))
                })
              })]
            }), (0, pB.jsx)(hN.e, {})]
          }), (0, pB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, pB.jsx)(VN.d, {
                label: BB("socialBar:party")
              }), (0, pB.jsx)(FN.d, {})]
            }), (0, pB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, pB.jsx)(VN.d, {
                label: (0, pB.jsxs)(pB.Fragment, {
                  children: [(0, pB.jsx)(NB.c, {
                    name: PN.d
                  }), " ", BB("socialBar:friends")]
                }),
                meta: (0, pB.jsxs)(pB.Fragment, {
                  children: [nB.length, nB.length >= (0, OB.b)(rB.getPlayerRanks()) && (0, pB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), zB && (0, pB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pB.jsx)(SB.e, {})
              }), !zB && 0 === nB.length && (0, pB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriends")
              }), !zB && nB.length > 0 && (0, pB.jsx)("div", {
                className: "PlayerRows",
                children: (0, pB.jsx)(Xn.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [nB],
                  children: nB.map(((BB, zB) => (0, pB.jsx)(YN.f, {
                    playerSocialPreview: BB,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: BB => {
                      lB.d.removeFriendFromState(BB)
                    },
                    zIndex: nB.length - zB,
                    children: (0, pB.jsx)(YN.e, {
                      friend: BB,
                      followsLeader: jB,
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
    var xN = zB(2632);
    const KN = BB => {
        let {
          action: jB,
          padAction: zB
        } = BB;
        const {
          isTouchScreen: QB
        } = (0, EB.m)(["isTouchScreen"]), nB = (0, MQ.u)();
        return QB && !nB ? null : (0, pB.jsx)(yQ.b, {
          className: "EverythingMenuTabKey",
          noaAction: jB,
          padHidesKey: !0,
          padMenuShortcut: zB
        })
      },
      CN = (0, QB.memo)((function() {
        const {
          t: BB
        } = (0, IB.D)(), {
          gameState: jB,
          openEverythingMenuName: zB,
          crosshairGameView: nB
        } = (0, EB.m)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: NB
        } = (0, JB.d)(), uB = (0, PB.usePurchasesAllowed)(), aB = (0, TB.H)(), {
          view: rB
        } = (0, bj.x)(), sB = "dot" === aB || null === aB && "ready" === (null === rB || void 0 === rB ? void 0 : rB.kind), mB = (BB, jB) => (0, pB.jsx)(KN, {
          action: BB,
          padAction: jB
        }), [yB, GB] = (0, QB.useState)(null), LB = (0, QB.useRef)(null), gB = {
          ..."inGame" === jB ? {} : (0, UB.S)({
            focusOnClick: !1
          }),
          ...hQ.h
        }, tB = BB => {
          const jB = (0, XQ.f)((jB => {
            (0, UB.R)(jB.currentTarget), EB.c.set({
              openEverythingMenuName: BB
            })
          }), "pointerup");
          return {
            ...gB,
            onPointerDown: BB => {
              gB.onPointerDown(BB), jB.onPointerDown(BB)
            },
            onPointerUp: BB => {
              gB.onPointerUp(BB), jB.onPointerUp(BB)
            },
            onClick: jB.onClick
          }
        }, SB = null !== zB, MB = zB !== kj.o.COSMETIC_SHOP && !nB;
        async function iB() {
          await async function() {
            if (!yB) return;
            await yB(), GB(null)
          }(), EB.c.set({
            openEverythingMenuName: null
          })
        }
        const qB = (0, QB.useRef)(null),
          oB = (0, QB.useCallback)((() => null !== qB.current && (0, oN.f)(qB.current)), []);

        function HB() {
          oB() || iB()
        }(0, QB.useEffect)((() => (0, od.r)(oB)), [oB]);
        const DB = (0, QB.useMemo)((() => "inGame" === jB ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            (0, fN.c)()
          }
        } : (0, fB.isDiscordClient)() ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            yj.j.discordActivity().then((BB => {
              BB.exit("User exited the game")
            }))
          }
        } : null), [jB, BB]);
        const FB = (0, pB.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: HB,
          children: (0, pB.jsx)(UB.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, pB.jsx)(ZQ.b, {
          showing: SB,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: zB === kj.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === jB,
          children: (0, pB.jsx)(TQ.e, {
            className: "EverythingMenuContainer",
            show: SB && !nB,
            children: (0, pB.jsx)(AQ.d, {
              close: HB,
              togglePointerLock: !1,
              children: (0, pB.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, od.g)(zB) && (0, pB.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, pB.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [DB && (0, pB.jsx)(UB.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        DB.onClick()
                      },
                      children: DB.text
                    }), SB && uB && (0, pB.jsx)("div", {
                      ...gB,
                      className: "EverythingMenuWallet",
                      title: BB("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, TB.p)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, pB.jsx)(qN.c, {})
                    })]
                  }), (0, pB.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, pB.jsxs)("div", {
                      ...tB(kj.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": zB === kj.o.SETTINGS ? "true" : void 0,
                      className: dB()("EverythingMenuTab", {
                        EverythingMenuTabActive: zB === kj.o.SETTINGS
                      }),
                      children: [BB("general:settings"), mB("OpenSettings", "pause")]
                    }), (0, pB.jsxs)("div", {
                      ...tB(kj.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": zB === kj.o.CUSTOMISATION ? "true" : void 0,
                      className: dB()("EverythingMenuTab", {
                        EverythingMenuTabActive: zB === kj.o.CUSTOMISATION
                      }),
                      children: [BB("general:player"), mB("OpenCharacterCustomization")]
                    }), kB.featureFlags.useSocialFeatures && (0, pB.jsxs)("div", {
                      ...tB(kj.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": zB === kj.o.SOCIAL ? "true" : void 0,
                      className: dB()("EverythingMenuTab", {
                        EverythingMenuTabActive: zB === kj.o.SOCIAL
                      }),
                      ...(0, jj.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, zB === kj.o.SOCIAL),
                      children: [BB("socialBar:social"), (0, pB.jsx)(xN.e, {})]
                    }), (0, bj.l)(rB) && (0, pB.jsxs)("div", {
                      ...tB(kj.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": zB === kj.o.COSMETIC_SHOP ? "true" : void 0,
                      className: dB()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: zB === kj.o.COSMETIC_SHOP
                      }),
                      children: [(0, pB.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: BB("store:title")
                      }), "new" === aB && (0, pB.jsx)(ZI, {}), sB && (0, pB.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === jB && (0, pB.jsxs)("div", {
                      ...tB(kj.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": zB === kj.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: dB()("EverythingMenuTab", {
                        EverythingMenuTabActive: zB === kj.o.LOBBY_LEADERBOARD
                      }),
                      children: [BB("general:lobby"), mB("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, pB.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: FB
                  })]
                }), (0, od.g)(zB) && FB, (0, pB.jsxs)("div", {
                  ref: qB,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === jB ? "0.85" : "1"
                  },
                  children: [(0, pB.jsx)(oQ, {
                    show: zB === kj.o.SETTINGS,
                    setBeforeResumeCallback: GB
                  }), (0, pB.jsx)(VQ, {
                    show: zB === kj.o.CUSTOMISATION
                  }), (0, pB.jsx)(QB.Suspense, {
                    fallback: null,
                    children: (0, pB.jsx)(Gd, {
                      show: zB === kj.o.SHOP
                    })
                  }), (0, pB.jsx)(Yd, {
                    show: zB === kj.o.LOBBY_LEADERBOARD
                  }), uB && (0, pB.jsx)(iN, {
                    show: zB === kj.o.COSMETIC_SHOP
                  }), !uB && (0, pB.jsx)(tN, {
                    show: zB === kj.o.COSMETIC_SHOP
                  }), (0, pB.jsx)(lN, {
                    show: zB === kj.o.SOCIAL
                  })]
                }), !(0, kB.isMobileApp)() && (0, PQ.f)(NB.getPlayerRanks()) && (0, pB.jsx)(TQ.e, {
                  ref: LB,
                  className: "EverythingMenuBannerDiv",
                  show: MB,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, pB.jsx)(HN.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: LB
                    },
                    showing: SB && MB,
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
  4981: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => yB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4733),
      IB = zB(1240),
      NB = zB(1108),
      uB = zB(1478),
      UB = zB(1532),
      aB = zB(1381),
      pB = zB(2611),
      rB = zB(1148);
    const sB = {
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

    function JB(BB) {
      let {
        platform: jB
      } = BB;
      const zB = "youtube" === jB;
      return (0, rB.jsxs)("span", {
        className: nB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: zB
        }),
        children: [zB && (0, rB.jsx)(pB.d, {
          variant: "white"
        }), !zB && (0, rB.jsx)(NB.c, {
          name: sB[jB].icon,
          kit: "brands"
        })]
      })
    }

    function mB(BB) {
      let {
        platform: jB,
        link: zB,
        editable: QB,
        userContext: nB,
        onLinksUpdated: pB
      } = BB;
      const {
        t: mB
      } = (0, IB.D)(), yB = sB[jB];
      if (!zB && !QB) return null;

      function kB() {
        var BB;
        if (!nB || !pB) return;
        aB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yB.name
            }
          },
          prefixText: dB.r[jB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === zB || void 0 === zB ? void 0 : zB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: zB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await UB.b.setSocialLink(nB, jB, BB.value) : await UB.b.clearSocialLink(nB, jB), pB()
          } catch (zB) {
            console.error("Failed to update social link", zB), aB.NotificationProvider.showAlertPopup({
              title: zB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (zB) {
        const BB = `@${zB.handle}`;
        return (0, rB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yB.color
          },
          href: zB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, rB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, rB.jsx)(JB, {
              platform: jB
            }), (0, rB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, rB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), QB && (0, rB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, uB.S)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), kB()
            },
            children: (0, rB.jsx)(NB.c, {
              name: "pen-to-square"
            })
          }), !QB && (0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, rB.jsx)(NB.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, rB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yB.color
        },
        ...(0, uB.S)(),
        onClick: () => {
          kB()
        },
        children: [(0, rB.jsx)(JB, {
          platform: jB
        }), (0, rB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yB.name
          }), (0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: mB("homePage:profileSocialLinkAdd")
          })]
        }), (0, rB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, rB.jsx)(NB.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yB(BB) {
      let {
        socialLinks: jB,
        editable: zB = !1,
        userContext: QB,
        onLinksUpdated: nB
      } = BB;
      if (!zB && 0 === jB.length) return null;
      const IB = new Map(jB.map((BB => [BB.platform, BB]))),
        NB = zB ? dB.q : jB.map((BB => BB.platform));
      return (0, rB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, rB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: NB.map((BB => (0, rB.jsx)(mB, {
            platform: BB,
            link: IB.get(BB),
            editable: zB,
            userContext: QB,
            onLinksUpdated: nB
          }, BB)))
        })
      })
    }
  },
  34292: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(62),
      nB = zB(3551);

    function dB() {
      const [BB, jB] = (0, QB.useState)(!1);
      return (0, QB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, nB.e)().then((() => {
          BB && jB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  34212: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => mB,
      d: () => JB
    });
    zB(34219);
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(34208);

    function NB(BB, jB) {
      return Math.max(1, Math.round(BB * jB))
    }

    function uB(BB, jB) {
      const zB = jB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        QB = function(BB, jB) {
          if (BB.lines) return NB(BB.lineThickness, jB) % 2;
          if (BB.dot) return NB(BB.dotSize, jB) % 2;
          return UB(BB, jB) % 2
        }(BB, jB),
        nB = aB(BB.lineThickness * zB, QB),
        dB = NB(BB.lineLength, zB),
        IB = Math.round(BB.gap * zB),
        uB = BB.outline > 0 ? NB(BB.outline, zB) : 0,
        rB = [];
      if (BB.lines && (rB.push({
          x: nB + IB,
          y: 0,
          w: dB,
          h: nB,
          arm: "right"
        }), rB.push({
          x: -IB - dB,
          y: 0,
          w: dB,
          h: nB,
          arm: "left"
        }), rB.push({
          x: 0,
          y: nB + IB,
          w: nB,
          h: dB,
          arm: "down"
        }), BB.tStyle || rB.push({
          x: 0,
          y: -IB - dB,
          w: nB,
          h: dB,
          arm: "up"
        }), 0 === IB && rB.push({
          x: 0,
          y: 0,
          w: nB,
          h: nB
        })), BB.dot) {
        const jB = aB(BB.dotSize * zB, QB),
          dB = BB.lines && 0 === IB && BB.dotSize > BB.lineThickness ? Math.max(jB, nB + 2) : jB,
          NB = (nB - dB) / 2;
        rB.push({
          x: NB,
          y: NB,
          w: dB,
          h: dB
        })
      }
      const sB = rB.map((BB => ({
        ...BB,
        x: BB.x - uB,
        y: BB.y - uB,
        w: BB.w + 2 * uB,
        h: BB.h + 2 * uB
      })));
      let JB = null,
        mB = null;
      if (BB.circle) {
        const jB = NB(BB.circleThickness, zB),
          dB = function(BB, jB) {
            return BB + (BB % 2 === jB ? 0 : 1)
          }(UB(BB, zB), QB),
          IB = (nB - dB) / 2;
        JB = pB(IB, dB, jB), uB > 0 && (mB = pB(IB - uB, dB + 2 * uB, jB + 2 * uB))
      }
      return {
        cell: nB,
        fills: rB,
        outlines: uB > 0 ? sB : [],
        ring: JB,
        ringOutline: mB
      }
    }

    function UB(BB, jB) {
      return Math.round(BB.circleRadius * jB * 2 + NB(BB.circleThickness, jB))
    }

    function aB(BB, jB) {
      return Math.max(2 - jB, 2 * Math.round((BB - jB) / 2) + jB)
    }

    function pB(BB, jB, zB) {
      const QB = 2 * zB >= jB - 1;
      return {
        x: BB,
        y: BB,
        size: jB,
        border: Math.min(zB, Math.floor(jB / 2)),
        filled: QB
      }
    }
    var rB = zB(1148);
    const sB = 1.4;

    function JB(BB, jB) {
      return BB && jB ? `scale(${sB})` : "scale(1)"
    }

    function mB(BB) {
      return "classic" === BB.settings.style ? (0, rB.jsx)(GB, {
        ...BB
      }) : (0, rB.jsx)(iB, {
        ...BB
      })
    }
    const yB = .125;

    function kB(BB, jB) {
      const zB = {};
      if (BB.color !== IB.g.color && (zB.color = (0, IB.m)(BB.color)), BB.opacity !== IB.g.opacity && (zB.opacity = BB.opacity / 100), BB.outline !== IB.g.outline || BB.outlineColor !== IB.g.outlineColor) {
        const jB = BB.outline,
          QB = (0, IB.m)(BB.outlineColor);
        zB.textShadow = jB > 0 ? `-${jB}px 0 ${QB}, 0 ${jB}px ${QB}, ${jB}px 0 ${QB}, 0 -${jB}px ${QB}` : "none"
      }
      if (BB.size !== IB.g.size) {
        const QB = BB.size / 100;
        zB.fontSize = jB ? `calc(max(1.3rem, 18px) * ${QB})` : `calc(1.3rem * ${QB})`, zB.marginTop = `-${yB}em`, zB.transformOrigin = `50% calc(50% + ${yB}em)`
      }
      return zB
    }

    function GB(BB) {
      let {
        settings: jB,
        touch: zB,
        inPreview: QB,
        inEditor: dB,
        pressed: IB = !1,
        pressRef: NB
      } = BB;
      return (0, rB.jsx)("div", {
        className: nB()("Crosshair", {
          Touch: zB,
          CrosshairInPreview: QB,
          CrosshairInEditor: dB || QB
        }),
        ref: NB,
        style: {
          transform: JB(IB, jB.growOnClick),
          ...kB(jB, zB)
        },
        children: "+"
      })
    }

    function LB(BB, jB) {
      return BB / jB + "px"
    }

    function gB(BB, jB, zB, QB) {
      return {
        ...MB(BB, jB, zB),
        width: LB(BB.w, zB),
        height: LB(BB.h, zB),
        background: QB
      }
    }

    function tB(BB, jB, zB) {
      return {
        left: LB(BB.x, jB),
        top: LB(BB.y, jB),
        width: LB(BB.size, jB),
        height: LB(BB.size, jB),
        borderWidth: LB(BB.border, jB),
        borderColor: zB,
        background: BB.filled ? zB : void 0
      }
    }
    const SB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function MB(BB, jB, zB) {
      const [QB, nB] = BB.arm ? SB[BB.arm] : [0, 0], dB = Math.round(jB * zB);
      return {
        left: LB(BB.x + QB * dB, zB),
        top: LB(BB.y + nB * dB, zB)
      }
    }

    function EB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function iB(BB) {
      let {
        settings: jB,
        inPreview: zB,
        inEditor: QB,
        pressed: NB = !1,
        spread: UB,
        spreadRef: aB
      } = BB;
      const pB = (0, dB.useRef)(null),
        {
          box: JB,
          dpr: mB
        } = function(BB) {
          const [jB, zB] = (0, dB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, dB.useLayoutEffect)((() => {
            const jB = BB.current;
            if (!jB) return;
            const QB = () => {
              const BB = jB.getBoundingClientRect(),
                QB = window.devicePixelRatio || 1;
              zB((jB => jB.dpr === QB && jB.box.left === BB.left && jB.box.top === BB.top && jB.box.width === BB.width && jB.box.height === BB.height ? jB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: QB
              }))
            };
            QB();
            const nB = new ResizeObserver(QB);
            return nB.observe(jB), window.addEventListener("resize", QB), window.addEventListener("scroll", QB, !0), () => {
              nB.disconnect(), window.removeEventListener("resize", QB), window.removeEventListener("scroll", QB, !0)
            }
          }), [BB]), jB
        }(pB),
        yB = (0, dB.useRef)(mB);
      yB.current = mB;
      const kB = uB(jB, mB, NB && jB.growOnClick ? sB : 1),
        GB = function(BB, jB, zB) {
          const QB = Math.round((BB.left + BB.width / 2) * zB - jB / 2),
            nB = Math.round((BB.top + BB.height / 2) * zB - jB / 2);
          return {
            x: QB / zB - BB.left,
            y: nB / zB - BB.top
          }
        }(JB, kB.cell, mB),
        LB = (0, IB.m)(jB.color),
        SB = (0, IB.m)(jB.outlineColor),
        iB = (0, dB.useRef)(0);
      (0, dB.useLayoutEffect)((() => {
        if (aB) return aB.current = BB => {
          var jB;
          iB.current = BB, null === (jB = pB.current) || void 0 === jB || jB.querySelectorAll("[data-arm]").forEach((jB => {
            Object.assign(jB.style, MB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(jB), BB, yB.current))
          }))
        }, () => {
          aB.current = null
        }
      }), [aB]);
      const qB = null !== UB && void 0 !== UB ? UB : iB.current;
      return (0, rB.jsx)("div", {
        ref: pB,
        className: nB()("CrosshairShapes", {
          CrosshairInPreview: zB,
          CrosshairInEditor: QB || zB,
          CrosshairSpreads: void 0 !== aB
        }),
        children: (0, rB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: GB.x,
            top: GB.y,
            opacity: jB.opacity / 100
          },
          children: (0, rB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [kB.ringOutline && (0, rB.jsx)("div", {
              className: "CrosshairRing",
              style: tB(kB.ringOutline, mB, SB)
            }), kB.outlines.map(((BB, jB) => (0, rB.jsx)("div", {
              className: "CrosshairPart",
              ...EB(BB),
              style: gB(BB, qB, mB, SB)
            }, `o${jB}`))), kB.ring && (0, rB.jsx)("div", {
              className: "CrosshairRing",
              style: tB(kB.ring, mB, LB)
            }), kB.fills.map(((BB, jB) => (0, rB.jsx)("div", {
              className: "CrosshairPart",
              ...EB(BB),
              style: gB(BB, qB, mB, LB)
            }, `f${jB}`)))]
          })
        })
      })
    }
  },
  34223: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      e: () => yB,
      g: () => mB
    });
    var QB = zB(34208);
    const nB = "XH1-",
      dB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      IB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      NB = ["color", "outlineColor"],
      uB = 1 + 3 * NB.length + IB.length + 1,
      UB = Math.ceil(8 * uB / Math.log2(62)),
      aB = nB.length + UB;

    function pB(BB) {
      let jB = 90;
      for (const zB of BB) jB = 31 * jB + zB & 255;
      return jB
    }
    const rB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      sB = BigInt(rB.length);

    function JB(BB, jB) {
      let zB = 0n;
      for (const nB of BB) {
        const BB = rB.indexOf(nB);
        if (BB < 0) return null;
        zB = zB * sB + BigInt(BB)
      }
      if (zB >> BigInt(8 * jB) !== 0n) return null;
      const QB = [];
      for (let nB = 0; nB < jB; nB++) QB.unshift(Number(0xffn & zB)), zB >>= 8n;
      return QB
    }

    function mB(BB) {
      let jB = "shapes" === BB.style ? 1 : 0;
      dB.forEach(((zB, QB) => {
        BB[zB] && (jB |= 1 << QB + 1)
      }));
      const zB = [jB];
      for (const nB of NB) {
        const jB = (0, QB.i)(nB, BB[nB]);
        zB.push(jB >> 16 & 255, jB >> 8 & 255, 255 & jB)
      }
      for (const nB of IB) {
        const {
          min: jB,
          step: dB
        } = QB.d[nB];
        zB.push(Math.round(((0, QB.i)(nB, BB[nB]) - jB) / dB))
      }
      return zB.push(pB(zB)), nB + function(BB, jB) {
        let zB = 0n;
        for (const nB of BB) zB = zB << 8n | BigInt(nB);
        let QB = "";
        for (let nB = 0; nB < jB; nB++) QB = rB[Number(zB % sB)] + QB, zB /= sB;
        return QB
      }(zB, UB)
    }

    function yB(BB) {
      for (const jB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${UB}})`, "gi"))) {
        const BB = kB(JB(jB[1], uB));
        if (BB) return BB
      }
      return null
    }

    function kB(BB) {
      if (!BB || BB.length !== uB || pB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const jB = BB[0],
        zB = {
          ...QB.g,
          style: 1 & jB ? "shapes" : "classic"
        };
      dB.forEach(((BB, QB) => {
        zB[BB] = 0 !== (jB & 1 << QB + 1)
      }));
      let nB = 1;
      for (const QB of NB) zB[QB] = BB[nB] << 16 | BB[nB + 1] << 8 | BB[nB + 2], nB += 3;
      for (const dB of IB) {
        const {
          min: jB,
          step: IB
        } = QB.d[dB];
        zB[dB] = (0, QB.i)(dB, jB + BB[nB] * IB), nB++
      }
      return zB
    }
  },
  34208: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      g: () => nB,
      i: () => dB,
      m: () => UB,
      n: () => uB,
      o: () => aB,
      p: () => NB,
      s: () => IB
    });
    const QB = {
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
      nB = Object.freeze({
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

    function dB(BB, jB) {
      var zB;
      const {
        min: dB,
        max: IB,
        step: NB
      } = QB[BB];
      if (!Number.isFinite(jB)) return nB[BB];
      const uB = (null !== (zB = String(NB).split(".")[1]) && void 0 !== zB ? zB : "").length,
        UB = Number((Math.round(jB / NB) * NB).toFixed(uB));
      return Math.min(IB, Math.max(dB, UB))
    }

    function IB(BB, jB, zB) {
      const QB = "number" === typeof zB ? dB(jB, zB) : zB;
      return {
        ...BB,
        [jB]: QB
      }
    }

    function NB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(nB).every((QB => zB.includes(QB) || BB[QB] === jB[QB]))
    }

    function uB(BB) {
      return NB(BB, nB)
    }

    function UB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function aB(BB) {
      const jB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return jB ? parseInt(jB[1], 16) : null
    }
  },
  34229: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      e: () => rB
    });
    var QB = zB(62),
      nB = zB(41),
      dB = zB(34223),
      IB = zB(34208);
    const NB = "crosshairCode";
    let uB = null;
    const UB = new Set;

    function aB() {
      if (null === uB) {
        var BB;
        const jB = nB.j.getItem(NB);
        uB = null !== (BB = "string" === typeof jB ? (0, dB.e)(jB) : null) && void 0 !== BB ? BB : IB.g
      }
      return uB
    }

    function pB(BB) {
      uB = BB, (0, IB.n)(BB) ? nB.j.removeItem(NB) : nB.j.setItem(NB, (0, dB.g)(BB));
      for (const jB of UB) jB()
    }

    function rB() {
      const [BB, jB] = (0, QB.useState)(aB);
      return (0, QB.useEffect)((() => {
        const BB = () => {
          jB(aB())
        };
        return BB(), zB = BB, UB.add(zB), () => {
          UB.delete(zB)
        };
        var zB
      }), []), BB
    }
  },
  34202: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB
    });
    var QB = zB(28);

    function nB(BB, jB) {
      return BB && !jB
    }

    function dB() {
      return nB(QB.c.get("isTouchScreen"), QB.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34171: (BB, jB, zB) => {
    function QB(BB, jB) {
      return BB && !jB
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  34188: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(1121);

    function nB() {
      var BB, jB;
      return null !== (BB = null === (jB = screen.orientation) || void 0 === jB ? void 0 : jB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const dB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && nB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = nB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, QB.Zm)(new Error("Game view size held for 60 s"))
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
        let jB = !1;
        return () => {
          if (jB && this.isHeld()) return null;
          const zB = BB();
          return jB ||= null !== zB, zB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  34138: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => GB,
      f: () => UB,
      g: () => mB,
      k: () => JB
    });
    var QB = zB(174),
      nB = zB(1297),
      dB = zB(1244),
      IB = zB(1173),
      NB = zB(1770);
    const uB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function UB(BB) {
      return uB[BB]
    }

    function aB(BB) {
      return (0, NB.e)(BB) ? "outdated" : BB instanceof QB.c ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function pB(BB, jB, zB) {
      return (0, IB.postJsonWithMetricsCookiesAndJsonResponse)(`${dB.clientSideServerUrls.indexUrl}${jB}`, zB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", jB, BB), {
        outcome: "failed",
        failure: aB(BB)
      })))
    }

    function rB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function sB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function JB(BB) {
      const jB = await pB(BB, "/index/name/random", {});
      return rB(jB) ? jB : "err" in jB ? sB(jB.err) : (BB.setPlayerName(jB.name), {
        outcome: "changed",
        name: jB.name
      })
    }
    async function mB(BB, jB) {
      const zB = await pB(BB, "/index/name/update", {
        name: jB
      });
      return rB(zB) ? zB : "err" in zB ? sB(zB.err) : zB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(jB), {
        outcome: "changed",
        name: jB
      })
    }

    function yB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const QB = 1 === jB ? 1 : 10 ** (jB - 1),
        dB = String(QB + Math.floor(zB() * (10 ** jB - QB)));
      return `${BB.slice(0,nB.g-jB)}${dB}`
    }
    const kB = [1, 2, 3, 4];
    async function GB(BB, jB) {
      const zB = await mB(BB, jB);
      if ("taken" !== zB.outcome) return zB;
      for (const QB of kB) {
        const zB = yB(jB, QB),
          nB = await mB(BB, zB);
        if ("taken" !== nB.outcome) return nB
      }
      return {
        outcome: "taken"
      }
    }
  },
  34176: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      i: () => uB
    });
    var QB = zB(28);
    const nB = 24,
      dB = "farNametags",
      IB = 1e5;

    function NB() {
      var BB;
      return null === (BB = QB.c.get("showDistantNametags")) || void 0 === BB || BB
    }

    function uB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(dB),
          jB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(jB) && jB >= 0 ? Math.min(jB, IB) : null
      }()) && void 0 !== BB ? BB : NB() ? 0 : nB
    }
  },
  34196: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      h: () => pB,
      l: () => aB
    });
    var QB = zB(283),
      nB = zB(106),
      dB = zB(140),
      IB = zB(132),
      NB = zB(687);
    const uB = new Set(["mali_bifrost"]);

    function UB() {
      if ("android" !== (0, nB.pageOperatingSystem)() || NB.f || (0, NB.d)("webgl_default")) return;
      const BB = (0, dB.j)(),
        jB = null === BB ? (0, QB.r)() : (0, QB.g)(BB.vendor, BB.renderer);
      return null !== jB && uB.has(jB) ? BB => (0, QB.k)((0, IB.c)(BB).vendor, jB) : void 0
    }

    function aB(BB, jB) {
      return BB ? () => !0 : jB()
    }
    async function pB(BB) {
      try {
        const jB = aB(BB, UB),
          zB = navigator.gpu;
        if (void 0 === jB || void 0 === zB) return !1;
        const QB = await (0, IB.m)(zB, {
          seed: !1,
          compatibility: jB
        });
        return "string" !== typeof QB && QB.compatibility && !(0, IB.h)(QB.adapter)
      } catch (jB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", jB), !1
      }
    }
  },
  34270: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      g: () => IB
    });
    const QB = [{
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

    function nB(BB) {
      let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const jB = BB < 0 ? "-" : "",
            zB = Math.abs(BB);
          return zB >= 10 ? `${jB}${zB.toFixed(1).replace(/\.0$/,"")}` : `${jB}${zB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        jB = BigInt(Math.floor(BB))
      } else jB = BB;
      const nB = jB < 0n ? -jB : jB,
        dB = jB < 0n ? "-" : "",
        IB = nB.toString();
      if (IB.length <= zB) return `${dB}${IB}`;
      const NB = 3 * Math.floor((IB.length - 1) / 3);
      if (NB < 3) return `${dB}${IB}`;
      if (NB > 3 * QB.length) {
        const BB = IB[0],
          jB = IB.slice(1, 3).replace(/0+$/, "");
        return `${dB}${jB?`${BB}.${jB}`:BB}e${IB.length-1}`
      }
      const {
        threshold: uB,
        suffix: UB
      } = QB[QB.length - NB / 3], aB = nB / uB, pB = Number(1000n * (nB % uB) / uB), rB = Number(aB) + pB / 1e3;
      let sB;
      return sB = rB >= 100 ? Math.floor(rB).toString() : rB >= 10 ? rB.toFixed(1).replace(/\.0$/, "") : rB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${sB}${UB}`
    }
    const dB = QB.map((BB => {
      let {
        threshold: jB,
        suffix: zB
      } = BB;
      return {
        threshold: Number(jB),
        suffix: zB
      }
    })).filter((BB => {
      let {
        threshold: jB
      } = BB;
      return Number.isFinite(jB)
    }));

    function IB(BB) {
      const jB = Math.abs(BB),
        zB = BB < 0 ? "-" : "";
      for (const {
          threshold: QB,
          suffix: nB
        }
        of dB)
        if (jB >= QB) {
          const BB = jB / QB;
          if (BB >= 1e3) return `${zB}${jB.toExponential(2).replace("e+","e")}`;
          let dB;
          return dB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${zB}${dB}${nB}`
        } return `${zB}${jB}`
    }
  },
  34254: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      d: () => rB,
      g: () => pB,
      i: () => IB,
      m: () => UB,
      q: () => uB
    });
    var QB = zB(376);
    const nB = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      dB = {
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

    function IB(BB) {
      var jB;
      return null !== (jB = dB[BB]) && void 0 !== jB ? jB : {
        translationKey: ""
      }
    }
    const NB = {
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

    function uB(BB) {
      return nB.includes(BB)
    }

    function UB(BB) {
      var jB;
      return !0 === (null === BB || void 0 === BB || null === (jB = BB.customAttributes) || void 0 === jB ? void 0 : jB.cannotEnchant)
    }

    function aB(BB, jB) {
      const {
        max: zB
      } = NB[BB].at(-1);
      return jB <= zB
    }

    function pB(BB) {
      const jB = Math.sin(BB / 80),
        zB = BB => {
          if (BB <= 0) return 0;
          if (BB > 1) return 1;
          let jB = 0;
          const zB = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let QB = 0; QB < zB.length; QB++) {
            jB += (QB % 2 === 0 ? 1 : -1) * zB[QB] * Math.pow(BB, 2 + QB) / (2 + QB)
          }
          return 72 * jB
        },
        QB = .3 - .78 * jB,
        nB = .5 - .78 * jB,
        dB = .6 - .7 * jB,
        IB = .8 - .6 * jB;
      let NB = zB(QB),
        uB = zB(nB) - NB,
        UB = zB(dB) - uB - NB,
        aB = zB(IB) - UB - uB - NB;
      QB < .041 && (uB /= 1 - NB, UB /= 1 - NB, aB /= 1 - NB, NB = 0), nB < .041 && (NB /= 1 - uB, UB /= 1 - uB, aB /= 1 - uB, uB = 0), dB < .041 && (NB /= 1 - UB, uB /= 1 - UB, aB /= 1 - UB, UB = 0), IB < .041 && (NB /= 1 - aB, uB /= 1 - aB, UB /= 1 - aB, aB = 0);
      return {
        commonProb: NB,
        uncommonProb: uB,
        rareProb: UB,
        epicProb: aB,
        legendaryProb: 1 - (aB + UB + uB + NB)
      }
    }

    function rB(BB, jB) {
      const {
        min: zB,
        max: nB
      } = NB[BB][jB], dB = QB.b.sampleUniformIntDistribution(zB, nB, "includeMax");
      return {
        ...pB(dB),
        level: dB
      }
    }
  },
  34219: () => {},
  12809: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14003: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15471: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15960: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);