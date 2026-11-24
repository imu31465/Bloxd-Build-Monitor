export const id = 99;
export const ids = [99, 194];
export const modules = {
  34104: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      EverythingMenu: () => AN
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1281),
      NS = gS(1127),
      qS = gS(2189),
      uS = gS(1528),
      IS = gS(1198),
      fS = gS(1181);

    function kS(SS) {
      let {
        items: HS,
        link: gS,
        onClick: tS,
        selectedItemId: bS,
        className: kS,
        padStartsOnTab: aS = !0
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = (0, IS.l)(), GS = [];
      for (const XS of HS) {
        var CS;
        const SS = GS[GS.length - 1];
        var nS;
        if (SS && SS.title === (null !== (CS = XS.section) && void 0 !== CS ? CS : null)) SS.items.push(XS);
        else GS.push({
          title: null !== (nS = XS.section) && void 0 !== nS ? nS : null,
          items: [XS]
        })
      }
      return (0, fS.jsxs)("div", {
        className: XS()("MenuSideBarBody", kS),
        "data-pad-tabs": "2",
        children: [GS.map(((SS, HS) => {
          var gS;
          return (0, fS.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [SS.title && (0, fS.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: KS(SS.title)
            }), SS.items.map((SS => {
              var HS;
              const gS = !!SS.iconElement || !!SS.faIcon;
              return (0, fS.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": bS === SS.id ? "true" : void 0,
                "data-pad-default-focus": aS && bS === SS.id || void 0,
                className: XS()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: bS === SS.id
                }),
                onClick: () => {
                  tS(SS.id)
                },
                children: [gS && (0, fS.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (HS = SS.iconElement) && void 0 !== HS ? HS : (0, fS.jsx)(NS.d, {
                    name: SS.faIcon
                  })
                }), (!jS || !gS) && (0, fS.jsx)("div", {
                  children: KS(SS.title)
                }), SS.redDot && (0, fS.jsx)(qS.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, SS.id)
            }))]
          }, null !== (gS = SS.title) && void 0 !== gS ? gS : HS)
        })), gS && (0, fS.jsxs)("div", {
          ...(0, uS.X)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: gS.onClick,
          children: [(0, fS.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, fS.jsx)(NS.d, {
              name: gS.faIcon
            })
          }), (0, fS.jsx)("div", {
            children: KS(gS.title)
          }), (0, fS.jsx)(NS.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var aS = gS(3161),
      KS = gS(1211),
      jS = gS(2537),
      GS = gS(3283),
      CS = gS(104),
      nS = gS(2060),
      PS = gS(2372),
      QS = gS(2380),
      DS = gS(1774),
      wS = gS(1419),
      hS = gS(5148),
      ZS = gS(24),
      JS = gS(34113);

    function OS(SS) {
      let {
        setApplySettingsCallback: HS
      } = SS;
      const {
        clientEscMenuOptions: gS
      } = (0, ZS.m)(["clientEscMenuOptions"]), [bS, XS] = (0, tS.useState)(!1), [xS, NS] = (0, tS.useState)(!1), [qS, IS] = (0, tS.useState)(6400), [kS, aS] = (0, tS.useState)(3600), [KS, jS] = (0, tS.useState)(!1), [GS, CS] = (0, tS.useState)(!1);

      function nS(SS) {
        const HS = "screenshot" === SS ? NS : XS;
        HS(!0);
        const gS = KS ? "normals" : GS ? "depth" : null;
        JS.devTools.downloadScene(SS, {
          width: qS,
          height: kS,
          colouring: gS
        }).catch((SS => {
          console.error("Couldn't download the scene", SS)
        })).finally((() => {
          HS(!1)
        }))
      }
      return (0, fS.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, fS.jsx)(hS.d, {
          label: "Disable Ambient Occlusion",
          checked: gS.disableAmbientOcclusion,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              disableAmbientOcclusion: SS
            }), HS((() => hS.o))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), JS.devTools.supports("ambientLight") && (0, fS.jsx)(hS.k, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: gS.ambientLightIntensity,
          onChange: SS => {
            JS.devTools.setAmbientLightIntensity(SS).then((() => {
              ZS.b.setClientEscMenuOptions({
                ambientLightIntensity: SS
              })
            })).catch((SS => {
              console.error("Couldn't set the ambient light", SS)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), JS.devTools.supports("weaponRaycasts") && (0, fS.jsx)(hS.d, {
          label: "Show Weapon Raycasts",
          checked: gS.showWeaponRaycasts,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              showWeaponRaycasts: SS
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), JS.devTools.supports("sceneDownload") && (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fS.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, fS.jsx)(hS.d, {
              label: "Apply normal-based coloring",
              checked: KS,
              onClick: SS => {
                jS(SS), SS && CS(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, fS.jsx)(hS.d, {
              label: "Apply depth-based coloring",
              checked: GS,
              onClick: SS => {
                CS(SS), SS && jS(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, fS.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, fS.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, fS.jsx)(DS.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (SS, HS) => {
                  const gS = parseInt(SS) || 6400;
                  IS(gS)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: qS.toString()
              }), (0, fS.jsx)("span", {
                children: "X"
              }), (0, fS.jsx)(DS.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (SS, HS) => {
                  const gS = parseInt(SS) || 3600;
                  aS(gS)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: kS.toString()
              })]
            }), (0, fS.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, fS.jsxs)(uS.g, {
                onClick: () => {
                  nS("screenshot")
                },
                disabled: xS,
                children: [xS && (0, fS.jsx)(wS.c, {}), "Download Screenshot"]
              }), (0, fS.jsxs)(uS.g, {
                onClick: () => {
                  nS("glb")
                },
                disabled: bS,
                children: [bS && (0, fS.jsx)(wS.c, {}), "Download GLB"]
              })]
            })]
          }), (0, fS.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var dS = gS(138),
      cS = gS(1216),
      vS = gS(34124),
      ES = gS(3166),
      LS = gS(1608),
      YS = gS(1348),
      AS = gS(1318),
      yS = gS(3258),
      VS = gS(2157),
      iS = gS(1588),
      WS = gS(387),
      zS = gS(2387),
      US = gS(2398),
      pS = gS(2833),
      sS = gS(1736),
      BS = gS(3226),
      MS = gS(3202),
      FS = gS(3265),
      RS = gS(215);

    function TS(SS) {
      const {
        t: HS,
        selectedLanguage: gS
      } = (0, xS.F)(), {
        userContext: bS
      } = (0, KS.b)(), {
        superRankInfo: XS
      } = bS, NS = SS && ((0, WS.uc)(XS) || bS.ranksMayChange) && (0, US.purchasesAllowed)(), {
        accountId: qS,
        data: uS
      } = (0, pS.e)(BS.d, NS);
      if ((0, tS.useEffect)((() => {
          if (NS) return BS.d.watchAccount(), sS.d.addRefetchListener("billing", (SS => {
            "reconnected" === SS ? BS.d.refreshAfterReconnect() : BS.d.refresh()
          }))
        }), [NS]), !NS || !(0, WS.uc)(XS) || null === uS || qS !== bS.whamm) return null;
      const IS = function(SS, HS, gS) {
        const tS = FS.j[(0, FS.d)(FS.j, HS)],
          bS = void 0 === tS ? void 0 : (0, RS.c)(SS.entitlements, tS.entitlementId);
        return void 0 === bS || null === bS.expiresAt || (0, MS.f)(bS) <= gS ? null : bS.willRenew && null === bS.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(bS.expiresAt, gS)
        } : {
          renews: !1,
          at: (0, MS.f)(bS)
        }
      }(uS, XS.tier, Date.now());
      if (null === IS) return null;
      const fS = IS.renews ? "store:renewsOn" : "store:endsOn";
      return HS(fS, {
        date: new Date(IS.at).toLocaleDateString((0, xS.q)(gS.code, fS), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var oS = gS(1444),
      lS = gS(1297),
      mS = gS(5037),
      eS = gS(1562),
      rS = gS(3785),
      SH = gS(2363);

    function HH(SS) {
      let {
        showing: HS
      } = SS;
      const {
        t: gS
      } = (0, xS.F)(), {
        data: tS,
        failed: bS
      } = (0, pS.e)(rS.g, HS);
      return 0 === (null === tS || void 0 === tS ? void 0 : tS.length) || null === tS && !bS ? null : (0, fS.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, fS.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gS("paymentHistory:title")
        }), null === tS && bS && (0, fS.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: gS("paymentHistory:loadFailed")
        }), null !== tS && (0, fS.jsx)("ul", {
          className: "PaymentHistoryList",
          children: tS.map((SS => (0, fS.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, fS.jsx)(SH.b, {
              entry: SS
            }), (0, fS.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, fS.jsx)("div", {
                children: (0, SH.h)(gS, SS)
              }), (0, fS.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(SS.at).toLocaleDateString(), "number" === typeof SS.orderId && ` \xb7 ${gS("paymentHistory:order",{orderId:SS.orderId})}`]
              })]
            })]
          }, (0, rS.e)(SS))))
        })]
      })
    }
    var gH = gS(2016),
      tH = gS(1329),
      bH = gS(1435),
      XH = gS(1920),
      xH = gS(1286),
      NH = gS(1390),
      qH = gS(3192);
    async function uH() {
      try {
        return function(SS) {
          const HS = new Map;
          for (const {
              store: gS,
              status: tS,
              autoRenewStatus: bS,
              managementUrl: XS
            }
            of Object.values(SS.subscriptions)) !(0, MS.h)(gS) || (0, MS.i)(tS) || "willNotRenew" === bS || HS.has(gS) || HS.set(gS, null !== XS && void 0 !== XS ? XS : MS.l[gS]);
          return Array.from(HS, (SS => {
            let [HS, gS] = SS;
            return {
              store: HS,
              managementUrl: gS
            }
          }))
        }(await (0, XH.m)((0, qH.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (SS) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", SS), null
      }
    }
    var IH = gS(369),
      fH = gS(2627);
    const kH = {
      appStore: {
        name: "App Store",
        ...IH.Yb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...IH.Yb.googlePlay
      },
      discord: {
        name: "Discord",
        ...IH.Yb.discord
      }
    };

    function aH(SS) {
      let {
        warning: HS,
        subscriptions: gS
      } = SS;
      const {
        t: tS
      } = (0, xS.F)();
      return null !== gS && 0 === gS.length ? (0, fS.jsx)(fS.Fragment, {
        children: tS(HS)
      }) : (0, fS.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [tS(HS), null === gS && (0, fS.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: tS("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== gS && (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: tS("auth:deleteAccountStoreSubscriptions")
          }), (0, fS.jsx)(fH.d, {
            className: "DeleteAccountSubtitleLinks",
            links: gS.map((SS => {
              let {
                store: HS,
                managementUrl: gS
              } = SS;
              return {
                ...kH[HS],
                url: gS
              }
            }))
          })]
        })]
      })
    }

    function KH(SS) {
      let {
        showing: HS
      } = SS;
      const {
        userContext: gS,
        isUserContextUpdating: bS
      } = (0, KS.b)(), {
        t: XS
      } = (0, xS.F)(), [NS, qS] = (0, tS.useState)(!1), [IS, kS] = (0, tS.useState)(null), aS = (0, tS.useRef)(HS);
      (0, tS.useEffect)((() => (aS.current = HS, () => {
        aS.current = !1
      })), [HS]);
      const jS = bS || NS;
      return (0, fS.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, fS.jsxs)(uS.L, {
          onClick: async function() {
            if (!NS) {
              qS(!0);
              try {
                const SS = await async function() {
                  const [SS, HS] = await Promise.all([(0, gH.c)(gS.availableUserContextTypes) ? uH() : [], GH(gS)]);
                  if (!aS.current) return tH.d.ok();
                  const tS = (0, YS.d)(gS.getPlayerName(), !CS.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await bH.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: tS
                        }
                      },
                      subtitle: (0, fS.jsx)(aH, {
                        warning: jH(gS.isLoggedIn(), HS),
                        subscriptions: SS
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: HS ? XS("auth:deleteAccountTypedConfirm", {
                        playerName: tS
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return tH.d.ok();
                  const bS = await (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: ZS.b.get("gameState")
                  }, {
                    retries: 3
                  }, gS.getMetricsCookies());
                  if (bS.error) return tH.d.error(bS.error);
                  (0, dS.b)() && (await NH.j.discordActivity()).exit("User deleted their account");
                  return (0, cS.forgetStoredGuestAccount)(gS.whamm), (0, cS.forceGlobalSignOut)(!0), tH.d.ok()
                }(), HS = SS.isError() ? SS.asError().message : null;
                kS(HS)
              } catch (SS) {
                console.error("Failed to delete account:", SS), kS(XS("auth:genericDeleteAccountError"))
              }
              qS(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: jS,
          children: [jS && (0, fS.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, fS.jsx)(wS.c, {})
          }), XS("auth:deleteAccount")]
        }), IS && (0, fS.jsx)("div", {
          className: "DeleteAccountError",
          children: IS
        })]
      })
    }

    function jH(SS, HS) {
      return (0, dS.b)() ? "auth:discordActivityDeleteAccountLossWarning" : SS ? "auth:deleteAccountLossWarning" : HS ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function GH(SS) {
      try {
        const {
          accountCreatedAt: HS
        } = await (0, XH.m)(iS.b.getPlayerProfile(SS, {
          lowerCaseName: SS.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== HS && Date.now() - HS >= 7 * WS.h
      } catch (HS) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", HS), !0
      }
    }
    var CH = gS(3716),
      nH = gS(3729),
      PH = gS(3726);

    function QH(SS) {
      let {
        showing: HS
      } = SS;
      const {
        t: gS
      } = (0, xS.F)(), {
        data: tS,
        failed: bS
      } = (0, pS.e)(CH.c, HS), XS = null === tS ? null : (0, CH.d)(tS);
      return (0, fS.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, fS.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gS("settingsMenu:blockedAndIgnoredPlayers")
        }), null === XS && !bS && (0, fS.jsx)(wS.c, {}), null === XS && bS && (0, fS.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [gS("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, fS.jsx)(uS.g, {
            className: "SmallTextLight",
            onClick: () => {
              CH.c.refresh()
            },
            children: gS("general:tryAgain")
          })]
        }), 0 === (null === XS || void 0 === XS ? void 0 : XS.length) && (0, fS.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: gS("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== XS && XS.length > 0 && (0, fS.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: XS.map((SS => {
            let {
              name: HS,
              exclusion: tS
            } = SS;
            const bS = PH.g[tS];
            return (0, fS.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, fS.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: HS
              }), (0, fS.jsx)(uS.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, nH.f)(bS, HS, {
                    chatMessage: null
                  })
                },
                children: gS(PH.k[bS].text)
              })]
            }, HS)
          }))
        })]
      })
    }
    const DH = (0, tS.memo)((function(SS) {
      var HS;
      let {
        showing: gS,
        inGame: bS
      } = SS;
      const {
        t: qS,
        selectedLanguage: IS
      } = (0, xS.F)(), {
        hideSocialLocationFrom: kS
      } = (0, ZS.m)(["hideSocialLocationFrom"]), jS = (0, aS.e)(), {
        userContext: GS,
        isUserContextUpdating: nS
      } = (0, KS.b)(), [PS, QS] = (0, tS.useState)(null !== (HS = GS.getPlayerName()) && void 0 !== HS ? HS : ""), [JS, OS] = (0, tS.useState)(null), {
        purchasing: pS,
        outcome: sS,
        purchase: BS
      } = (0, ES.e)("/super-rank-welcome"), MS = (0, WS.$b)((0, xS.q)(IS.code, "general:timeLeft"), GS.superRankInfo), FS = TS(gS), RS = MS ? qS("general:timeLeft", {
        time: MS
      }) : FS, [rS, SH] = (0, tS.useState)(!1), [gH, tH] = (0, tS.useState)(!1), bH = (0, tS.useRef)(null), XH = (0, tS.useRef)(null), xH = (0, VS.i)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), NH = null === xH, qH = null !== xH && void 0 !== xH ? xH : [], uH = GS !== cS.NULL_USER_CONTEXT && !GS.isLoggedIn(), IH = uH && 0 !== (null === xH || void 0 === xH ? void 0 : xH.length), [fH, kH] = (0, tS.useState)([]), [aH, jH] = (0, tS.useState)(!1), GH = GS.playerHasRank("youtuber"), CH = (0, tS.useCallback)((() => iS.b.getPlayerProfile(GS, {
        lowerCaseName: GS.getPlayerName().toLowerCase()
      }).then((SS => {
        kH(SS.socialLinks)
      })).catch((SS => {
        console.error("Failed to refresh social links", SS)
      }))), [GS]);

      function nH(SS) {
        SS !== PS && ((0, YS.k)(SS) ? (SS = (0, YS.l)(SS), OS(qS("homePage:nameCharacters"))) : OS(null), bH.current && (bH.current.value = SS), QS(SS))
      }
      return (0, tS.useEffect)((() => (!0 === gS ? (clearInterval(XH.current), XH.current = setInterval(jS, 1e3)) : clearInterval(XH.current), () => {
        clearInterval(XH.current)
      })), [gS, jS]), (0, tS.useEffect)((() => {
        var SS;
        QS(null !== (SS = GS.getPlayerName()) && void 0 !== SS ? SS : "")
      }), [GS]), (0, tS.useEffect)((() => {
        if (!gS || !GH || nS) return;
        let SS = !1;
        return jH(!0), kH([]), iS.b.getPlayerProfile(GS, {
          lowerCaseName: GS.getPlayerName().toLowerCase()
        }).then((HS => {
          SS || kH(HS.socialLinks)
        })).catch((SS => {
          console.error("Failed to load social links", SS)
        })).finally((() => {
          SS || jH(!1)
        })), () => {
          SS = !0
        }
      }), [gS, GH, nS, GS]), (0, fS.jsxs)("div", {
        className: XS()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: bS
        }),
        children: [bS && (0, fS.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: qS("settingsMenu:accountSettingsInGameWarning")
        }), (0, fS.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, fS.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [qS("homePage:discordNamePopupTitle"), (0, fS.jsxs)(LS.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, AS.f)({
                name: GS.getPlayerName()
              }),
              onClick: () => {
                ZS.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, fS.jsx)(NS.d, {
                name: "arrow-up-right-from-square"
              }), " ", qS("profileCard:viewProfile")]
            })]
          }), (0, fS.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, fS.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [CS.featureFlags.canChangeName && (0, fS.jsx)(DS.e, {
                className: "EnterName",
                placeholderText: qS("homePage:enterName"),
                maxLength: YS.g,
                defaultValue: PS,
                onValueChange: SS => {
                  nH(SS)
                },
                forcedText: rS || !CS.featureFlags.canChangeName ? PS : null,
                blurOnEnter: !0,
                domRef: bH
              }), (0, fS.jsx)(uS.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  nH((0, YS.f)())
                },
                children: (0, fS.jsx)(NS.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !CS.featureFlags.canChangeName && (0, fS.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, YS.d)(PS, !CS.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, fS.jsx)(uS.g, {
              className: "ChooseNameButton",
              disabled: rS || PS === GS.getPlayerName(),
              onClick: () => {
                PS.length < YS.i ? OS(qS("homePage:changeNameMinLengthError", {
                  length: YS.i
                })) : PS.length > YS.g ? OS(qS("homePage:changeNameMaxLengthError", {
                  length: YS.g
                })) : (SH(!0), OS(null), (0, vS.g)(GS, PS).then((SS => {
                  SH(!1), "taken" === SS.outcome ? OS(qS("homePage:nameTaken")) : "refused" === SS.outcome ? OS(SS.message) : "failed" === SS.outcome && OS(qS((0, vS.c)(SS.failure)))
                })))
              },
              children: qS("general:choose")
            })]
          }), JS && (0, fS.jsx)("div", {
            className: "ChooseAccNameError",
            children: JS
          })]
        }), (0, fS.jsx)(hS.d, {
          label: (() => {
            if ((0, lS.p)(kS)) {
              const SS = (0, xS.q)(IS.code, "general:timeLeft"),
                HS = (0, WS.W)(SS, Date.now(), kS + lS.n);
              return `${qS("settingsMenu:hideSocialLocation")} (${qS("general:timeLeft",{time:HS})})`
            }
            return qS("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const SS = !(0, lS.p)(kS);
            (0, eS.reportAnalyticsClick)({
              id: "social.hide_location",
              value: SS ? "on" : "off"
            }), tH(!0), iS.b.setHideSocialLocation(GS, SS).then((() => {
              ZS.b.set({
                hideSocialLocationFrom: SS ? Date.now() : null
              })
            })).finally((() => {
              tH(!1)
            }))
          },
          checked: (0, lS.p)(kS),
          disabled: gH
        }), GH && (0, fS.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, fS.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qS("settingsMenu:socialLinks")
          }), aH && (0, fS.jsx)(wS.c, {}), !aH && (0, fS.jsx)(mS.c, {
            socialLinks: fH,
            editable: !0,
            userContext: GS,
            onLinksUpdated: CH
          })]
        }), (0, fS.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fS.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qS(IH ? "auth:loginOrSwitchAccount" : "auth:login")
          }), NH && (0, fS.jsx)(wS.c, {}), !NH && 0 === qH.length && (0, fS.jsx)("div", {
            className: "NoLoginOptions",
            children: qS("auth:noLoginOptions")
          }), !NH && qH.length > 0 && "crazygames" !== dS.r && (0, fS.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: qH
          }), !NH && qH.length > 0 && "crazygames" === dS.r && (0, fS.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [qH[0], qH.length > 1 && (0, fS.jsxs)(fS.Fragment, {
              children: [(0, fS.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, fS.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: qS("auth:legacyLoginOptions")
                }), (0, fS.jsx)(oS.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: qS("auth:legacyLoginOptionsInfo")
                })]
              }), (0, fS.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: qH.slice(1)
              })]
            })]
          }), CS.featureFlags.useLogin && (null !== GS.loggedInInfo || GS.isLoggedIn()) && (0, fS.jsxs)(fS.Fragment, {
            children: [(0, fS.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, fS.jsxs)(uS.L, {
              onClick: () => {
                (0, cS.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, fS.jsx)(NS.d, {
                name: "right-from-bracket"
              }), qS("auth:signOut")]
            })]
          })]
        }), !GS.playerHasRank("super") && (0, US.purchasesAllowed)() && (0, fS.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, fS.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, fS.jsx)(NS.d, {
              name: "bolt"
            }), qS("homePage:superRank")]
          }), (0, fS.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, fS.jsxs)(uS.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zS.r)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fS.jsx)(NS.d, {
                name: "bolt"
              }), qS("homePage:getSuperRank")]
            }), (0, fS.jsxs)(uS.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zS.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fS.jsx)(NS.d, {
                name: "bolt"
              }), qS("homePage:giftSuperRank")]
            })]
          })]
        }), GS.playerHasRank("super") && (0, fS.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, fS.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, fS.jsx)(NS.d, {
              name: "bolt"
            }), qS("homePage:superRank"), RS && (0, fS.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", RS, ")"]
            })]
          }), (0, US.purchasesAllowed)() && (0, fS.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, WS.uc)(GS.superRankInfo) && (0, fS.jsxs)(uS.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: pS,
              onClick: () => {
                BS(yS.k.id, null)
              },
              children: [(0, fS.jsx)(NS.d, {
                name: "bolt"
              }), qS("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: yS.k.product.days,
                price: yS.k.price
              })]
            }), (0, fS.jsxs)(uS.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zS.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fS.jsx)(NS.d, {
                name: "bolt"
              }), qS("homePage:giftSuperRank")]
            })]
          }), sS && (0, fS.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: qS(sS.translationKey)
          })]
        }), (0, fS.jsx)(HH, {
          showing: gS
        }), CS.featureFlags.useSocialFeatures && (0, fS.jsx)(QH, {
          showing: gS
        }), (0, fS.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, fS.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, fS.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qS(wH(uH, IH))
            }), (0, dS.b)() && (0, fS.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qS("auth:discordActivityKickWarning")
            }), (0, fS.jsx)(KH, {
              showing: gS
            })]
          }), (0, fS.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: qS(uH ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function wH(SS, HS) {
      return SS ? HS ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var hH = gS(34130),
      ZH = gS(3300),
      JH = gS(1334),
      OH = gS(1510),
      dH = gS(2100),
      cH = gS(9082),
      vH = gS(34135);

    function EH() {
      const {
        t: SS
      } = (0, xS.F)();
      return (0, dH.h)("localPlayerAlive") ? (0, fS.jsx)(cH.e, {
        icon: "camera",
        title: SS("screenshotMode:title"),
        sub: SS("screenshotMode:entrySub"),
        onClick: vH.c
      }) : null
    }
    var LH = gS(34142);
    const YH = (0, tS.memo)((function(SS) {
        let {
          inGame: HS
        } = SS;
        const {
          t: gS,
          selectedLanguage: tS
        } = (0, xS.F)(), {
          clientEscMenuOptions: bS,
          showDebugOverlay: XS,
          isTouchScreen: NS
        } = (0, ZS.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), qS = (0, jS.i)("hideCoordinates");
        let uS = "settingsMenu:showCoordinates",
          IS = "settingsMenu:showChunkCoordinates";

        function kS(SS) {
          const HS = new Intl.DisplayNames([SS], {
            type: "language"
          }).of(SS);
          return HS.charAt(0).toUpperCase() + HS.slice(1)
        }
        return qS && (uS = "settingsMenu:showCoordinatesHidden", IS = "settingsMenu:showChunkCoordinatesHidden"), (0, fS.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [HS && CS.featureFlags.canUseInviteLinks && (0, fS.jsxs)("div", {
            className: "SettingBox",
            children: [(0, fS.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: gS("settingsMenu:inviteLink")
            }), (0, fS.jsx)(hH.i, {})]
          }), (0, fS.jsxs)("div", {
            className: "SettingBox",
            children: [(0, fS.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: gS("settingsMenu:language")
            }), (0, fS.jsx)(ZH.e, {
              options: Object.entries(xS.j).map((SS => {
                let [HS, gS] = SS;
                return {
                  label: (0, fS.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, fS.jsx)("img", {
                      src: gS.flagImg,
                      alt: "flag"
                    }), (0, fS.jsxs)("span", {
                      children: [kS(HS), " ", (0, fS.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", HS, ")"]
                      })]
                    })]
                  }),
                  value: HS
                }
              })),
              value: tS.code,
              onChange: SS => {
                JH.f.get().setCurrentLanguage(SS.value)
              }
            })]
          }), HS && NS && (0, LH.b)() && (0, fS.jsx)(EH, {}), !(0, CS.isMobileApp)() && (0, OH.i)() && CS.featureFlags.useForceRotateForceFullscreenOverlay && (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:disableFullscreenMode"),
            checked: bS.disableFullscreen,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                disableFullscreen: SS
              })
            }
          }), (0, fS.jsx)(hS.d, {
            label: gS(uS),
            checked: bS.showCoordinates,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showCoordinates: SS
              })
            },
            disabled: qS
          }), (0, fS.jsx)(hS.d, {
            label: gS(IS),
            checked: bS.showChunkCoordinates,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showChunkCoordinates: SS
              })
            },
            disabled: qS
          }), (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:showFps"),
            checked: bS.showFPS,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showFPS: SS
              })
            }
          }), (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:disableBunnyHopping"),
            checked: bS.disableBunnyHopping,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                disableBunnyHopping: SS
              })
            }
          }), (0, NH.s)() && (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:showChat"),
            checked: bS.showChat,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showChat: SS
              })
            }
          }), (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:showDebugOverlay"),
            checked: XS,
            onClick: SS => {
              ZS.b.set({
                showDebugOverlay: SS
              })
            }
          }), CS.featureFlags.useSocialFeatures && (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:showFriendOnlineToasts"),
            checked: bS.showFriendOnlineToasts,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showFriendOnlineToasts: SS
              })
            }
          }), (0, fS.jsx)(hS.d, {
            label: gS("settingsMenu:showNewItemIndicator"),
            checked: bS.showNewItemIndicator,
            onClick: SS => {
              ZS.b.setClientEscMenuOptions({
                showNewItemIndicator: SS
              })
            }
          })]
        })
      })),
      AH = (0, tS.memo)((function() {
        const {
          t: SS
        } = (0, xS.F)(), {
          soundVolume: HS,
          musicVolume: gS
        } = (0, ZS.m)(["soundVolume", "musicVolume"]);
        return (0, fS.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, fS.jsx)(hS.k, {
            name: SS("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: gS,
            onChange: SS => {
              ZS.b.set({
                musicVolume: Math.round(100 * SS) / 100
              })
            },
            format: SS => SS.toFixed(2)
          }), (0, fS.jsx)(hS.k, {
            name: SS("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: HS,
            onChange: SS => {
              ZS.b.set({
                soundVolume: Math.round(100 * SS) / 100
              })
            },
            format: SS => SS.toFixed(2)
          })]
        })
      }));
    var yH = gS(775),
      VH = gS(1522),
      iH = gS(3800),
      WH = gS(34149),
      zH = gS(3623);
    const UH = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function pH() {
      const {
        t: SS
      } = (0, xS.F)(), HS = (0, zH.b)(), {
        mobilePushNotificationsCanAsk: gS
      } = (0, ZS.m)(["mobilePushNotificationsCanAsk"]), [bS, XS] = (0, tS.useState)(null), [NS, qS] = (0, tS.useState)(!1), [IS, kS] = (0, tS.useState)(null), [aS, KS] = (0, tS.useState)(!1), jS = (0, tS.useCallback)((() => {
        (0, iH.d)().then((SS => {
          HS.current && (XS(SS), qS(!1))
        })).catch((SS => {
          console.error("Failed to load push notification targets:", SS), HS.current && qS(!0)
        }))
      }), [HS]), GS = (0, tS.useCallback)((() => {
        (0, WH.g)().then((SS => {
          HS.current && kS((() => SS))
        }))
      }), [HS]);
      (0, tS.useEffect)((() => {
        jS()
      }), [jS]), (0, tS.useEffect)((() => {
        GS()
      }), [GS, gS]), (0, VH.g)(iH.i, jS);
      const CS = null === bS ? [] : Object.keys(UH).filter((SS => bS[SS] > 0));
      return (0, fS.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, fS.jsx)("div", {
          className: "SliderText",
          children: SS("notificationSettings:pushNotifications")
        }), null === bS && NS && (0, fS.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: SS("notificationSettings:pushTargetsLoadFailed")
        }), null !== bS && 0 === CS.length && (0, fS.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: SS("notificationSettings:pushTargetsNone")
        }), CS.length > 0 && (0, fS.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: CS.map((HS => {
            var gS;
            return (0, fS.jsx)("li", {
              children: SS(UH[HS], {
                count: null !== (gS = null === bS || void 0 === bS ? void 0 : bS[HS]) && void 0 !== gS ? gS : 0
              })
            }, HS)
          }))
        }), null !== IS && (0, fS.jsx)(uS.g, {
          className: "PushNotificationSettingsButton",
          loading: aS,
          onClick: () => {
            KS(!0), IS().catch((SS => {
              console.error("Failed to turn on push notifications:", SS)
            })).finally((() => {
              HS.current && (KS(!1), GS())
            }))
          },
          children: SS("notificationSettings:pushTurnOn")
        })]
      })
    }
    var sH = gS(2680);
    const BH = {
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
      MH = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function FH(SS) {
      let {
        setting: HS,
        value: gS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)(), NS = (0, zH.b)(), [qS, uS] = (0, tS.useState)(null), [IS, kS] = (0, tS.useState)(!1), [aS, KS] = (0, tS.useState)(null);
      return (0, tS.useEffect)((() => {
        "remindersOn" === HS && (0, WH.g)().then((SS => {
          NS.current && KS((() => SS))
        }), (SS => {
          console.error("Couldn't tell whether this device can take push notifications:", SS)
        }))
      }), [HS, NS]), (0, fS.jsx)(hS.d, {
        className: XS()({
          DailyDropSettingFailed: IS
        }),
        label: bS(MH[HS].label),
        checked: null !== qS && void 0 !== qS ? qS : gS,
        note: IS ? bS("dailyDrop:settingFailed") : void 0,
        onClick: SS => {
          null === qS && (uS(SS), kS(!1), SS && null !== aS && aS().catch((SS => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", SS)
          })), (0, sH.r)("daily_drop.setting", `${MH[HS].reportAs}_${SS?"on":"off"}`), (0, sH.t)("hidden" === HS ? {
            hidden: SS
          } : {
            remindersOn: SS
          }).catch((SS => {
            console.error(`Failed to save the Lucky Skin Block's ${HS} setting:`, SS), NS.current && kS(!0)
          })).finally((() => {
            NS.current && uS(null)
          })))
        }
      })
    }
    const RH = (0, tS.memo)((function() {
      const {
        t: SS
      } = (0, xS.F)(), {
        clientEscMenuOptions: HS
      } = (0, ZS.m)(["clientEscMenuOptions"]), {
        userContext: gS
      } = (0, KS.b)(), tS = gS.dailyDrop;
      return (0, fS.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [CS.featureFlags.useSocialFeatures && (0, fS.jsx)(hS.g, {
          label: SS("notificationSettings:friendRequests"),
          options: yH.c.map((HS => ({
            value: HS,
            label: SS(BH[HS].label)
          }))),
          value: HS.friendRequestNotifications,
          onChange: SS => {
            ZS.b.setClientEscMenuOptions({
              friendRequestNotifications: SS
            })
          },
          circleInfoText: (0, fS.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: yH.c.map((HS => (0, fS.jsxs)("div", {
              children: [(0, fS.jsx)("b", {
                children: SS(BH[HS].label)
              }), ": ", SS(BH[HS].info)]
            }, HS)))
          })
        }), null !== tS && (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsx)(FH, {
            setting: "remindersOn",
            value: tS.remindersOn
          }), (0, fS.jsx)(FH, {
            setting: "hidden",
            value: tS.hidden
          })]
        }), (0, fS.jsx)(pH, {})]
      })
    }));
    var TH = gS(4640),
      oH = gS(198),
      lH = gS(362),
      mH = gS(6848),
      eH = gS(3591),
      rH = gS(34156),
      Sg = gS(680),
      Hg = gS(31);
    var gg = gS(699),
      tg = gS(45),
      bg = gS(4498);
    const Xg = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function xg(SS) {
      return Xg.has(SS) ? nS.gameBridge.lookup("fn", null) : null
    }

    function Ng(SS) {
      if (!(0, Sg.K)(ZS.b.get("clientEscMenuOptions")[SS])) return ZS.b.get("clientEscMenuOptions")[SS];
      const HS = xg(SS);
      return null !== HS ? HS[Xg.get(SS)] : tg.g.getItem(SS)
    }

    function qg(SS, HS) {
      if ("useTouchControls" === SS) return void(0, bg.d)(HS);
      SS in ZS.b.get("clientEscMenuOptions") && ZS.b.setClientEscMenuOptions({
        [SS]: HS
      });
      const gS = xg(SS);
      null !== gS && nS.gameBridge.send("setChunkAddDistance", {
        ...gS,
        [Xg.get(SS)]: HS
      }), tg.g.setItem(SS, HS)
    }
    var ug = gS(4547),
      Ig = gS(34158),
      fg = gS(34166),
      kg = gS(4634);

    function ag(SS) {
      var HS, bS, NS, qS;
      let {
        minChunkAddDist: uS,
        getValue: IS,
        onChange: kS,
        setApplySettingsCallback: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), {
        clientEscMenuOptions: GS
      } = (0, ZS.m)(["clientEscMenuOptions", "showDistantNametags"]), nS = (0, tS.useRef)(IS("showFog")), PS = (0, tS.useRef)(GS.antiAliasing), QS = (0, tS.useRef)(GS.useWebGpu), [DS, wS] = (0, tS.useState)(null), [OS, dS] = (0, tS.useState)((() => (0, eH.g)(CS.featureFlags.settings.canUseShaderPacks))), [cS] = (0, tS.useState)((() => ZS.b.isWebGpuDefaultOff())), [vS] = (0, tS.useState)(lH.m);
      (0, tS.useEffect)((() => {
        let SS = !1;
        return (0, CS.hasUsableWebGpuAdapter)().then((HS => {
          SS || wS(HS)
        })), (0, eH.j)(CS.featureFlags.settings.canUseShaderPacks) && (0, mH.f)().then((async HS => {
          const tS = null !== HS && await async function(SS) {
            const [{
              isShaderPackActive: HS
            }, {
              loadPageShaderPackCompiler: tS
            }] = await Promise.all([gS.e(137).then((() => gS(6844))), Promise.all([gS.e(77), gS.e(133), gS.e(136)]).then((() => gS(6810)))]);
            return HS(SS, await tS())
          }(HS);
          SS || dS(tS)
        })), () => {
          SS = !0
        }
      }), []);
      const ES = function(SS, HS, gS, tS, bS) {
          return (0, rH.d)(gS, tS) && !0 === HS ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== HS ? "settingsMenu:newWebGpu" : bS ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: SS && !1 !== HS,
            disabled: !0 !== HS
          }
        }(GS.useWebGpu, DS, OS, cS, vS),
        LS = (GS.useWebGpu || (0, rH.d)(OS, cS)) && OS && !0 === DS,
        YS = (0, jS.i)("lightingOverride"),
        AS = !(0, Sg.K)(YS);
      let yS = "settingsMenu:enableLighting";
      AS && (yS = YS ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const VS = SS => {
          var HS, gS, tS;
          const bS = null !== (HS = SS.showFog) && void 0 !== HS ? HS : IS("showFog"),
            XS = null !== (gS = SS.antiAliasing) && void 0 !== gS ? gS : GS.antiAliasing,
            xS = null !== (tS = SS.useWebGpu) && void 0 !== tS ? tS : GS.useWebGpu,
            NS = !gg.A && bS !== nS.current || XS !== PS.current || xS !== QS.current;
          aS(NS ? () => hS.o : null)
        },
        iS = (0, jS.i)("fogChunkDistanceOverride"),
        WS = (0, jS.i)("fogBlockDistanceOverride"),
        zS = !(0, Sg.K)(iS) || !(0, Sg.K)(WS),
        US = zS ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [pS, sS] = (0, TH.e)(uS),
        [BS, MS] = (0, kg.h)(uS),
        FS = KS("settingsMenu:chunkLoadDistanceDeviceLimit"),
        RS = BS < pS,
        TS = Math.min(null !== (HS = IS("chunkHorizAddDist")) && void 0 !== HS ? HS : uS[0], BS),
        oS = !zS && function(SS, HS) {
          return !0 === SS.showFog && SS.fogChunkDistance > HS
        }(GS, TS);
      return (0, fS.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, fS.jsx)(hS.k, {
          name: KS("settingsMenu:horizontalChunkLoadDistance"),
          min: uS[0],
          max: pS,
          selectableMax: BS,
          cappedNote: FS,
          step: 1,
          initValue: TS,
          onChange: SS => {
            !0 === IS("showFog") && SS < IS("fogChunkDistance") && kS("fogChunkDistance", SS), kS("chunkHorizAddDist", SS), Hg.k.cj("updatedChunkLoadDist")
          },
          circleInfoText: KS("settingsMenu:chunkLoadDistanceInfo")
        }), (0, fS.jsx)(hS.k, {
          name: KS("settingsMenu:verticalChunkLoadDistance"),
          min: uS[1],
          max: sS,
          selectableMax: MS,
          cappedNote: RS ? void 0 : FS,
          step: 1,
          initValue: Math.min(null !== (bS = IS("chunkVertAddDist")) && void 0 !== bS ? bS : uS[1], MS),
          onChange: SS => {
            kS("chunkVertAddDist", SS), Hg.k.cj("updatedChunkLoadDist")
          },
          circleInfoText: KS("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:chunkFadeIn"),
          checked: GS.chunkFadeIn,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              chunkFadeIn: SS
            })
          },
          circleInfoText: KS("settingsMenu:chunkFadeInInfo")
        }), JS.devTools.supports("chunkBorders") && (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:showChunkBorders"),
          checked: GS.showChunkBorders,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              showChunkBorders: SS
            })
          },
          circleInfoText: KS("settingsMenu:showChunkBordersInfo")
        }), (0, fS.jsx)(hS.d, {
          label: KS(yS),
          checked: GS.enableLighting,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              enableLighting: SS
            })
          },
          disabled: AS
        }), (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fS.jsx)(hS.d, {
            label: KS(US),
            checked: GS.showFog,
            onClick: SS => {
              VS({
                showFog: SS
              }), ZS.b.setClientEscMenuOptions({
                showFog: SS
              })
            },
            disabled: zS,
            className: XS()({
              SettingBoxWarning: oS
            })
          }), (0, fS.jsx)(hS.k, {
            name: KS("settingsMenu:fogChunkDistance"),
            min: uS[0],
            max: oH.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (NS = GS.fogChunkDistance) && void 0 !== NS ? NS : uS[0],
            onChange: SS => {
              ZS.b.setClientEscMenuOptions({
                fogChunkDistance: SS
              }), Hg.k.cj("fogChunkDistanceChanged", SS)
            },
            circleInfoText: KS("settingsMenu:fogChunkDistanceInfo"),
            disabled: zS || !1 === IS("showFog"),
            className: XS()({
              SettingBoxWarning: oS
            })
          }), oS && (0, fS.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: KS("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !gg.A && (0, fS.jsx)(hS.d, {
          label: KS(LS ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !LS && GS.disableTexAtlas,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              disableTexAtlas: SS
            })
          },
          circleInfoText: KS("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: LS
        }), (0, fS.jsx)(hS.k, {
          name: KS("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: GS.cameraFOV,
          onChange: SS => {
            ZS.b.setClientEscMenuOptions({
              cameraFOV: SS
            })
          }
        }), (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:disableViewBobbing"),
          checked: GS.disableBobbing,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              disableBobbing: SS
            })
          },
          circleInfoText: KS("settingsMenu:disableViewBobbingInfo")
        }), (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:antiAliasing"),
          checked: GS.antiAliasing,
          onClick: SS => {
            VS({
              antiAliasing: SS
            }), (0, ug.h)("antiAliasing"), ZS.b.setClientEscMenuOptions({
              antiAliasing: SS
            })
          },
          circleInfoText: KS("settingsMenu:antiAliasingInfo")
        }), (0, fS.jsx)(hS.k, {
          name: KS("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (qS = GS.pixelScale) && void 0 !== qS ? qS : 1,
          onChange: SS => {
            (SS !== ZS.b.get("clientEscMenuOptions").pixelScale || (0, fg.n)()) && (0, ug.h)("pixelScale"), ZS.b.setClientEscMenuOptions({
              pixelScale: SS
            })
          },
          circleInfoText: KS("settingsMenu:pixelScaleInfo"),
          format: SS => `${SS}x`
        }), (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:pixelSmoothing"),
          checked: GS.pixelSmoothing,
          onClick: SS => {
            ZS.b.setClientEscMenuOptions({
              pixelSmoothing: SS
            })
          },
          circleInfoText: KS("settingsMenu:pixelSmoothingInfo")
        }), gg.A && (0, fS.jsx)(hS.d, {
          label: KS("settingsMenu:distantNametags"),
          checked: (0, Ig.d)(),
          onClick: SS => {
            ZS.b.set({
              showDistantNametags: SS
            })
          },
          circleInfoText: KS("settingsMenu:distantNametagsInfo")
        }), (0, fS.jsx)(hS.d, {
          label: KS(ES.translationKey),
          checked: ES.checked,
          onClick: SS => {
            VS({
              useWebGpu: SS
            }), ZS.b.setClientEscMenuOptions({
              useWebGpu: SS
            })
          },
          circleInfoText: KS("settingsMenu:newWebGpuInfo"),
          disabled: ES.disabled
        })]
      })
    }
    var Kg = gS(4540),
      jg = gS(9063),
      Gg = gS(34185),
      Cg = gS(9076),
      ng = gS(34189);
    const Pg = {
        color: 16777215,
        name: "white"
      },
      Qg = {
        color: 0,
        name: "black"
      },
      Dg = [Pg, {
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
      }, Qg],
      wg = [Qg, Pg];

    function hg(SS) {
      return `${SS} px`
    }

    function Zg(SS) {
      return `${SS}%`
    }

    function Jg(SS) {
      let {
        label: HS,
        value: gS,
        swatches: tS,
        onChange: bS
      } = SS;
      const {
        t: NS
      } = (0, xS.F)(), qS = !tS.some((SS => SS.color === gS));
      return (0, fS.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, fS.jsx)("div", {
          className: "SliderText",
          children: HS
        }), (0, fS.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": HS,
          children: [tS.map((SS => {
            let {
              color: HS,
              name: tS
            } = SS;
            return (0, fS.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": HS === gS,
              "aria-label": NS(`crosshairSettings:color_${tS}`),
              "data-pad-focusable": !0,
              className: XS()("CrosshairSwatch", {
                Selected: HS === gS
              }),
              style: {
                background: (0, ng.i)(HS)
              },
              onClick: () => {
                bS(HS)
              }
            }, HS)
          })), (0, fS.jsx)("label", {
            className: XS()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: qS
            }),
            style: qS ? {
              background: (0, ng.i)(gS)
            } : void 0,
            title: NS("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, fS.jsx)("input", {
              type: "color",
              "aria-label": NS("crosshairSettings:customColor"),
              value: (0, ng.i)(gS),
              onChange: SS => {
                const HS = (0, ng.n)(SS.target.value);
                null !== HS && bS(HS)
              }
            })
          })]
        })]
      })
    }

    function Og(SS) {
      let {
        settings: HS,
        onChange: gS
      } = SS;
      const {
        t: tS
      } = (0, xS.F)(), bS = (SS, tS) => {
        gS((0, ng.r)(HS, SS, tS))
      }, XS = function(SS, gS) {
        let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hg;
        const {
          min: XS,
          max: xS,
          step: NS
        } = ng.c[SS];
        return (0, fS.jsx)(hS.k, {
          name: gS,
          min: XS,
          max: xS,
          step: NS,
          initValue: HS[SS],
          format: tS,
          onChange: HS => {
            bS(SS, HS)
          }
        }, SS)
      }, NS = ["lines", "dot", "circle"].filter((SS => HS[SS])), qS = (SS, gS, tS) => (0, fS.jsx)(hS.d, {
        label: gS,
        checked: HS[SS],
        disabled: 1 === NS.length && NS[0] === SS,
        circleInfoText: tS,
        onClick: HS => {
          bS(SS, HS)
        }
      }, SS), uS = "shapes" === HS.style;
      return (0, fS.jsxs)(fS.Fragment, {
        children: [(0, fS.jsx)(hS.g, {
          label: tS("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: tS("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: tS("crosshairSettings:styleShapes")
          }],
          value: HS.style,
          onChange: SS => {
            bS("style", SS)
          }
        }), (0, fS.jsx)(Jg, {
          label: tS("crosshairSettings:color"),
          value: HS.color,
          swatches: Dg,
          onChange: SS => {
            bS("color", SS)
          }
        }), XS("opacity", tS("crosshairSettings:opacity"), Zg), !uS && XS("size", tS("crosshairSettings:size"), Zg), uS && (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qS("lines", tS("crosshairSettings:lines")), HS.lines && XS("lineLength", tS("crosshairSettings:lineLength")), HS.lines && XS("lineThickness", tS("crosshairSettings:lineThickness")), HS.lines && XS("gap", tS("crosshairSettings:gap")), HS.lines && qS("tStyle", tS("crosshairSettings:tStyle"))]
        }), uS && (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qS("dot", tS("crosshairSettings:dot")), HS.dot && XS("dotSize", tS("crosshairSettings:dotSize"))]
        }), uS && (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qS("circle", tS("crosshairSettings:circle")), HS.circle && XS("circleRadius", tS("crosshairSettings:circleRadius")), HS.circle && XS("circleThickness", tS("crosshairSettings:circleThickness"))]
        }), (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [XS("outline", tS("crosshairSettings:outline"), (SS => SS > 0 ? hg(SS) : tS("crosshairSettings:off"))), HS.outline > 0 && (0, fS.jsx)(Jg, {
            label: tS("crosshairSettings:outlineColor"),
            value: HS.outlineColor,
            swatches: wg,
            onChange: SS => {
              bS("outlineColor", SS)
            }
          })]
        }), qS("growOnClick", tS("crosshairSettings:growOnClick")), uS && qS("forGuns", tS("crosshairSettings:forGuns"), tS("crosshairSettings:forGunsInfo"))]
      })
    }
    var dg = gS(77),
      cg = gS(1359),
      vg = gS(12999),
      Eg = gS(14162),
      Lg = gS(15622),
      Yg = gS(16166);
    const Ag = ["sky", "grass", "stone", "sand", "snow", "night"],
      yg = "4rem";

    function Vg(SS) {
      return {
        backgroundImage: `url(${SS})`,
        backgroundSize: `${yg} ${yg}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function ig(SS) {
      return {
        ...(() => {
          switch (SS) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Vg(vg);
            case "stone":
              return Vg(Eg);
            case "sand":
              return Vg(Lg);
            case "snow":
              return Vg(Yg);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Wg(SS) {
      return Object.freeze({
        ...ng.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...SS
      })
    }
    const zg = [{
        id: "default",
        settings: ng.d
      }, {
        id: "cross",
        settings: Wg({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Wg({
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
        settings: Wg({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Wg({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Wg({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Wg({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Wg({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Ug = ["growOnClick", "forGuns"];
    var pg = gS(34196);

    function sg(SS) {
      let {
        label: HS,
        selected: gS,
        onClick: tS,
        className: bS,
        style: xS,
        children: NS
      } = SS;
      return (0, fS.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": gS,
        title: HS,
        "aria-label": HS,
        "data-pad-focusable": !0,
        className: XS()("CrosshairBackdropSwatch", bS, {
          Selected: gS
        }),
        style: xS,
        onClick: tS,
        children: NS
      })
    }

    function Bg(SS) {
      let {
        backdrop: HS,
        onChange: gS,
        game: tS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)();
      return (0, fS.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": bS("crosshairSettings:background"),
        children: [tS && (0, fS.jsx)(sg, {
          label: bS("crosshairSettings:bg_game"),
          selected: tS.selected,
          onClick: tS.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, fS.jsx)(NS.d, {
            name: "cube"
          })
        }), Ag.map((SS => (0, fS.jsx)(sg, {
          label: bS(`crosshairSettings:bg_${SS}`),
          selected: !(null !== tS && void 0 !== tS && tS.selected) && SS === HS,
          style: ig(SS),
          onClick: () => {
            gS(SS)
          }
        }, SS)))]
      })
    }

    function Mg(SS) {
      let {
        settings: HS,
        touch: gS,
        backdrop: tS,
        onChange: bS
      } = SS;
      const {
        t: NS
      } = (0, xS.F)(), qS = function(SS) {
        var HS;
        return null !== (HS = zg.find((HS => (0, ng.q)(HS.settings, SS, Ug)))) && void 0 !== HS ? HS : null
      }(HS);
      return (0, fS.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": NS("crosshairSettings:presets"),
        children: zg.map((SS => {
          const xS = (null === qS || void 0 === qS ? void 0 : qS.id) === SS.id;
          return (0, fS.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": xS,
            "data-pad-focusable": !0,
            className: XS()("CrosshairPreset", {
              Selected: xS
            }),
            onClick: () => {
              bS(function(SS, HS) {
                return {
                  ...HS.settings,
                  growOnClick: SS.growOnClick,
                  forGuns: SS.forGuns
                }
              }(HS, SS))
            },
            children: [(0, fS.jsx)("div", {
              className: "CrosshairPresetStage",
              style: ig(tS),
              children: (0, fS.jsx)(pg.e, {
                settings: SS.settings,
                touch: gS,
                inPreview: !0
              })
            }), (0, fS.jsx)("div", {
              className: "CrosshairPresetName",
              children: NS(`crosshairSettings:preset_${SS.id}`)
            })]
          }, SS.id)
        }))
      })
    }
    var Fg = gS(1765);

    function Rg(SS, HS) {
      const [gS, bS] = (0, tS.useState)(!1), XS = () => {
        bS(!1)
      }, [xS, NS] = (0, tS.useState)(!1), qS = (0, tS.useRef)({
        growOnClick: SS.growOnClick,
        forGuns: SS.forGuns
      });
      (0, tS.useEffect)((() => {
        const HS = qS.current;
        qS.current = {
          growOnClick: SS.growOnClick,
          forGuns: SS.forGuns
        }, (SS.growOnClick && !HS.growOnClick || SS.forGuns && !HS.forGuns) && NS(!0)
      }), [SS.growOnClick, SS.forGuns]), (0, tS.useEffect)((() => {
        if (!xS) return;
        const SS = setTimeout((() => {
          NS(!1)
        }), 600);
        return () => {
          clearTimeout(SS)
        }
      }), [xS]);
      const uS = gS || xS;
      return {
        view: {
          pressed: uS,
          spread: uS && SS.forGuns && !SS.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: SS => {
            !SS.target.closest(HS) && (0, Fg.b)(SS.currentTarget, SS.pointerId) && bS(!0)
          },
          onPointerUp: XS,
          onPointerCancel: XS,
          onLostPointerCapture: XS
        }
      }
    }

    function Tg(SS) {
      let {
        settings: HS,
        touch: gS,
        backdrop: tS,
        className: bS,
        children: xS,
        label: NS
      } = SS;
      const qS = Rg(HS, ".CrosshairStageControls");
      return (0, fS.jsxs)("div", {
        className: XS()("CrosshairStage", bS),
        style: ig(tS),
        ...qS.handlers,
        children: [(0, fS.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": NS,
          children: (0, fS.jsx)(pg.e, {
            settings: HS,
            touch: gS,
            inPreview: !0,
            ...qS.view
          })
        }), xS]
      })
    }
    const og = "crosshairFullScreen";

    function lg(SS) {
      let {
        settings: HS,
        touch: gS,
        backdrop: bS,
        onBackdrop: qS,
        inGame: IS,
        onChange: kS,
        onClose: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = (0, tS.useRef)(null);
      (0, cg.s)("popup", jS, aS),
      function(SS) {
        const HS = (0, tS.useRef)(SS);
        HS.current = SS, (0, tS.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [og]: !0
          }, "");
          let SS = !1;
          const gS = () => {
            SS = !0, HS.current()
          };
          return window.addEventListener("popstate", gS), () => {
            var HS;
            window.removeEventListener("popstate", gS), !SS && null !== (HS = window.history.state) && void 0 !== HS && HS[og] && window.history.back()
          }
        }), [])
      }(aS);
      const GS = (0, tS.useRef)(aS);
      GS.current = aS, (0, tS.useEffect)((() => {
        function SS(SS) {
          "Escape" === SS.key && (SS.stopPropagation(), GS.current())
        }
        return window.addEventListener("keydown", SS, !0), () => {
          window.removeEventListener("keydown", SS, !0)
        }
      }), []);
      const CS = Rg(HS, ".CrosshairFullScreenPanel"),
        [nS, PS] = (0, tS.useState)(!0),
        QS = nS && IS;
      (0, tS.useEffect)((() => {
        if (QS) return ZS.b.set({
          crosshairGameView: !0
        }), () => {
          ZS.b.set({
            crosshairGameView: !1
          })
        }
      }), [QS]);
      const [DS, wS] = (0, tS.useState)(!0);
      return (0, dg.createPortal)((0, fS.jsxs)("div", {
        ref: jS,
        className: "CrosshairFullScreen",
        style: QS ? void 0 : ig(bS),
        ...CS.handlers,
        children: [(0, fS.jsx)(pg.e, {
          settings: HS,
          touch: gS,
          inEditor: !0,
          ...CS.view
        }), (0, fS.jsxs)("div", {
          className: XS()("CrosshairFullScreenPanel", {
            Collapsed: !DS
          }),
          children: [(0, fS.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, fS.jsx)(Bg, {
              backdrop: bS,
              onChange: SS => {
                PS(!1), qS(SS)
              },
              game: IS ? {
                selected: QS,
                onSelect: () => {
                  PS(!0)
                }
              } : void 0
            }), (0, fS.jsx)(uS.P, {
              className: "CrosshairPanelToggle",
              ariaLabel: KS(DS ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                wS(!DS)
              },
              children: (0, fS.jsx)(NS.d, {
                name: DS ? "caret-up" : "pen"
              })
            }), (0, fS.jsx)(uS.g, {
              className: "CrosshairFullScreenDone",
              onClick: aS,
              padDefaultFocus: !0,
              children: KS("crosshairSettings:done")
            })]
          }), DS && (0, fS.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, fS.jsx)(Mg, {
              settings: HS,
              touch: gS,
              backdrop: bS,
              onChange: kS
            }), (0, fS.jsx)(Og, {
              settings: HS,
              onChange: kS
            })]
          })]
        })]
      }), document.body)
    }
    var mg = gS(2813),
      eg = gS(34212);

    function rg(SS) {
      let {
        settings: HS,
        onChange: gS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)(), qS = (0, eg.i)(HS), [IS, kS] = (0, mg.h)(), [aS, KS] = (0, tS.useState)(!1), jS = (0, tS.useRef)(null), [GS, CS] = (0, mg.h)(), [nS, PS] = (0, tS.useState)(!1);
      return (0, fS.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, fS.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, fS.jsxs)(uS.P, {
            className: XS()("CrosshairCopy", {
              ActiveSecondaryButton: IS
            }),
            onClick: () => {
              (0, mg.d)(qS, {
                useShareSheet: !1,
                onOutcome: SS => {
                  KS("failed" === SS), "copied" === SS && kS()
                }
              })
            },
            children: [(0, fS.jsx)(NS.d, {
              name: IS ? "check" : "copy"
            }), " ", bS(IS ? "general:copied" : "crosshairSettings:copy")]
          }), (0, fS.jsx)(DS.e, {
            className: "CrosshairPaste",
            domRef: jS,
            ariaLabel: bS("crosshairSettings:paste"),
            placeholderText: bS("crosshairSettings:paste"),
            onValueChange: SS => {
              const HS = (0, eg.g)(SS);
              PS(!HS && SS.trim().length >= eg.c), HS && (gS(HS), jS.current.value = "", CS())
            }
          })]
        }), aS && (0, fS.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: qS,
          "aria-label": bS("crosshairSettings:copy"),
          onFocus: SS => {
            SS.currentTarget.select()
          }
        }), (0, fS.jsxs)("div", {
          "aria-live": "polite",
          children: [nS && (0, fS.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: bS("crosshairSettings:pasteInvalid")
          }), GS && !nS && (0, fS.jsx)("div", {
            className: "CrosshairShareNote",
            children: bS("crosshairSettings:applied")
          })]
        })]
      })
    }
    var St = gS(34217);
    let Ht = "sky";

    function gt(SS) {
      let {
        showing: HS
      } = SS;
      const {
        t: gS
      } = (0, xS.F)(), {
        isTouchScreen: bS,
        gameState: XS,
        clientEscMenuOptions: qS
      } = (0, ZS.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), IS = (0, St.f)(), [kS, aS] = (0, tS.useState)(Ht), KS = SS => {
        Ht = SS, aS(SS)
      }, [jS, GS] = (0, tS.useState)(!1);
      return (0, tS.useEffect)((() => {
        HS || GS(!1)
      }), [HS]), (0, fS.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, fS.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, fS.jsx)(Tg, {
            className: "CrosshairPreviewStage",
            settings: IS,
            touch: bS,
            backdrop: kS,
            label: gS("crosshairSettings:preview"),
            children: (0, fS.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, fS.jsx)(Bg, {
                backdrop: kS,
                onChange: KS
              }), (0, fS.jsxs)(uS.P, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  GS(!0)
                },
                children: [(0, fS.jsx)(NS.d, {
                  name: "expand"
                }), " ", gS("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, fS.jsx)("div", {
          className: "SettingBox",
          children: (0, fS.jsx)(Mg, {
            settings: IS,
            touch: bS,
            backdrop: kS,
            onChange: St.c
          })
        }), (0, fS.jsx)(rg, {
          settings: IS,
          onChange: St.c
        }), bS && (0, fS.jsx)(Cg.b, {
          note: (0, Gg.f)(bS, qS.touchActionButtons) ? gS("crosshairSettings:touchNote") : void 0
        }), (0, fS.jsx)(Og, {
          settings: IS,
          onChange: St.c
        }), jS && (0, fS.jsx)(lg, {
          settings: IS,
          touch: bS,
          backdrop: kS,
          onBackdrop: KS,
          inGame: "inGame" === XS,
          onChange: St.c,
          onClose: () => {
            GS(!1)
          }
        })]
      })
    }
    var tt = gS(9067),
      bt = gS(1475),
      Xt = gS(5142),
      xt = gS(34219),
      Nt = gS(4396),
      qt = gS(2108),
      ut = gS(783);
    const It = (0, tS.memo)((function() {
      const {
        clientEscMenuOptions: SS
      } = (0, ZS.m)(["clientEscMenuOptions"]), {
        recording: HS,
        clipping: gS,
        hasClipBuffer: bS
      } = (0, dH.h)("replayRecorder"), xS = (0, dH.g)("connectedGame", (SS => SS.replay)), NS = (0, Nt.m)(), qS = !1 === (0, jS.i)("canRecordReplays");
      (0, tS.useEffect)((() => {
        nS.gameBridge.send("setRecorderPrefs", {
          clipping: SS.enableClipping,
          clipSeconds: SS.clipDurationSeconds
        })
      }), [SS.enableClipping, SS.clipDurationSeconds]);
      const IS = NS || xS,
        kS = !IS && !qS,
        aS = HS || kS,
        KS = kS,
        GS = KS && gS && !HS;

      function CS() {
        aS && nS.gameBridge.send("toggleRecording", null)
      }
      return (0, fS.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, fS.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fS.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: HS ? (0, fS.jsxs)(fS.Fragment, {
              children: [(0, fS.jsxs)(uS.L, {
                className: "ReplayViewerCategoryButton",
                onClick: CS,
                disabled: !aS,
                children: [(0, fS.jsx)("span", {
                  children: "Stop Recording"
                }), (0, fS.jsx)(qt.d, {
                  noaAction: "recordGame"
                })]
              }), (0, fS.jsx)(xt.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, fS.jsxs)(uS.g, {
              className: "ReplayViewerCategoryButton",
              onClick: CS,
              disabled: !aS,
              children: [(0, fS.jsx)("span", {
                children: "Start Recording"
              }), (0, fS.jsx)(qt.d, {
                noaAction: "recordGame"
              })]
            })
          }), qS && (0, fS.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), IS && !HS && (0, fS.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, fS.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fS.jsx)(hS.d, {
            label: "Enable clipping",
            checked: SS.enableClipping,
            disabled: !KS,
            onClick: function(SS) {
              KS && ZS.b.setClientEscMenuOptions({
                enableClipping: SS
              })
            },
            className: XS()({
              SettingBoxDisabled: !KS
            })
          }), (0, fS.jsx)(hS.k, {
            name: "Clip duration (seconds)",
            min: ut.k,
            max: ut.h,
            step: ut.b,
            initValue: SS.clipDurationSeconds,
            onChange: function(SS) {
              ZS.b.setClientEscMenuOptions({
                clipDurationSeconds: SS
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !KS || !SS.enableClipping
          })]
        }), (0, fS.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fS.jsxs)(uS.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              GS && nS.gameBridge.send("saveClip", null)
            },
            disabled: !GS,
            children: [(0, fS.jsx)("span", {
              children: "Record clip"
            }), (0, fS.jsx)(qt.d, {
              noaAction: "recordClip"
            })]
          }), SS.enableClipping && !bS && KS && !HS && (0, fS.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), HS && (0, fS.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, fS.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fS.jsxs)(uS.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Nt.i)(!0), ZS.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: NS,
            children: [(0, fS.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, fS.jsx)(qt.d, {
              noaAction: "replayViewerOpen"
            })]
          }), NS && (0, fS.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, fS.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fS.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, fS.jsx)("iframe", {
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
    var ft = gS(2022);
    const kt = {
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
        icon: () => (0, fS.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, fS.jsx)("path", {
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
      bK: {
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

    function Kt() {
      return Promise.all([gS.e(77), gS.e(133), gS.e(132), gS.e(129)]).then((() => gS(41084))).then((SS => ({
        default: SS.ShaderPackCategory
      })), (SS => (console.error("Failed to load the shader pack settings", SS), {
        default: jt
      })))
    }

    function jt() {
      const {
        t: SS
      } = (0, xS.F)();
      return (0, fS.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: SS("shaderPack:tabLoadFailed")
      })
    }
    var Gt = gS(1471);
    const Ct = (0, tS.lazy)((() => gS.e(273).then((() => gS(41079))).then((SS => ({
        default: SS.BloxdInformation
      }))))),
      nt = (0, tS.lazy)(Kt);

    function Pt(SS) {
      return SS ? "general" : "account"
    }
    const Qt = new Map,
      Dt = (0, tS.memo)((function(SS) {
        let {
          show: HS,
          setBeforeResumeCallback: gS
        } = SS;
        (0, GS.d)();
        const {
          gameState: bS,
          openSettingsCategory: XS
        } = (0, ZS.m)(["gameState", "openSettingsCategory"]), {
          userContext: qS
        } = (0, KS.b)(), {
          t: IS
        } = (0, xS.F)(), DS = (0, aS.e)(), wS = (0, jS.i)("minChunkAddDist"), hS = "inGame" === bS, [JS, cS] = (0, tS.useState)(Pt(hS)), [vS, ES] = (0, tS.useState)(null), [LS, YS] = (0, tS.useState)([]), AS = (0, tS.useRef)(function() {
          const SS = new Date,
            HS = 6 * (SS.getMonth() + SS.getDate()) % IH.v.length;
          return [...IH.v, ...IH.v].slice(HS, HS + 6)
        }()), yS = (0, tS.useRef)(null), VS = (0, VH.i)(bt.i, (0, bt.c)()), iS = Object.keys(kt).filter((SS => {
          switch (SS) {
            case "replayViewer":
              return hS;
            case "developerTools":
              return qS.playerHasRank("developer") || !1;
            case "texturePack":
              return CS.featureFlags.settings.canChangeTexturePack;
            case "bK":
              return CS.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return CS.featureFlags.useSocialFeatures || null !== qS.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== dS.r;
            case "controller":
              return CS.featureFlags.useControllerSupport && (VS || "controller" === JS);
            default:
              return !0
          }
        }));
        (0, VH.g)("toggleFullCoordinateOverlay", (() => {
          const SS = Ng("showCoordinates") && Ng("showChunkCoordinates") && Ng("showFPS");
          qg("showCoordinates", !SS), qg("showChunkCoordinates", !SS), qg("showFPS", !SS), DS()
        })), (0, VH.g)("updatedChunkLoadDist", (() => {
          DS()
        })), (0, tS.useEffect)((() => {
          if (ES(null), null === ZS.b.get("openSettingsCategory")) {
            const SS = (0, Gt.h)() ? Qt.get(hS) : void 0;
            cS(SS && iS.includes(SS) ? SS : Pt(hS))
          }
        }), [HS]), (0, tS.useEffect)((() => {
          null !== XS && (cS(XS), Qt.set(hS, XS), ZS.b.set({
            openSettingsCategory: null
          }))
        }), [XS, hS]), (0, tS.useLayoutEffect)((() => {
          yS.current && (yS.current.scrollTop = 0)
        }), [JS, HS]), (0, tS.useEffect)((() => {
          "updateLog" === JS && (0, QS.c)().then(YS)
        }), [JS]), (0, tS.useEffect)((() => {
          if ((0, Sg.K)(wS)) return;
          const [SS, HS] = (0, Kg.g)(), [gS, tS] = (0, TH.e)(wS), bS = (0, ft.h)(wS[0], SS, gS), XS = (0, ft.h)(wS[1], HS, tS);
          nS.gameBridge.send("setChunkAddDistance", {
            horizontal: bS,
            vertical: XS
          })
        }), [wS]);
        const WS = (0, tS.useCallback)((async () => {
          vS && (await vS(), ES(null))
        }), [vS]);

        function zS() {
          ZS.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, tS.useEffect)((() => {
          gS((() => WS))
        }), [WS, gS]), (0, fS.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: HS ? {} : {
            display: "none"
          },
          children: [(0, fS.jsx)("div", {
            className: "MenuSideBar",
            children: (0, fS.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, fS.jsx)(kS, {
                items: iS.map((SS => {
                  const HS = kt[SS].icon;
                  return {
                    id: SS,
                    faIcon: "string" === typeof HS ? HS : void 0,
                    iconElement: "string" === typeof HS ? void 0 : (0, fS.jsx)(HS, {}),
                    title: IS(kt[SS].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: JS,
                onClick: SS => {
                  !async function(SS) {
                    await WS(), cS(SS), Qt.set(hS, SS)
                  }(SS)
                }
              })
            })
          }), (0, fS.jsxs)("div", {
            ref: yS,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === JS && (0, fS.jsx)(DH, {
              showing: HS,
              inGame: hS
            }), "general" === JS && (0, fS.jsx)(YH, {
              inGame: hS
            }), "audio" === JS && (0, fS.jsx)(AH, {}), "notifications" === JS && (0, fS.jsx)(RH, {}), "graphics" === JS && (0, fS.jsx)(ag, {
              minChunkAddDist: null !== wS && void 0 !== wS ? wS : [2, 2],
              getValue: Ng,
              onChange: qg,
              setApplySettingsCallback: ES
            }), "controls" === JS && (0, fS.jsx)(jg.f, {}), "crosshair" === JS && (0, fS.jsx)(gt, {
              showing: HS
            }), "controller" === JS && CS.featureFlags.useControllerSupport && (0, fS.jsx)(tt.b, {}), CS.featureFlags.settings.canChangeTexturePack && "texturePack" === JS && (0, fS.jsx)(Xt.b, {
              setApplySettingsCallback: ES
            }), CS.featureFlags.settings.canUseShaderPacks && "bK" === JS && (0, fS.jsx)(tS.Suspense, {
              fallback: null,
              children: (0, fS.jsx)(nt, {
                setApplySettingsCallback: ES
              })
            }), "updateLog" === JS && (0, fS.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fS.jsx)("div", {
                className: "UpdateLogsContainer",
                children: LS.map(((SS, HS) => (0, fS.jsx)(PS.c, {
                  updateLog: SS,
                  index: HS,
                  close: zS
                }, HS)))
              })
            }), "information" === JS && (0, fS.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fS.jsx)(tS.Suspense, {
                fallback: null,
                children: (0, fS.jsx)(Ct, {})
              })
            }), "alternativeDomains" === JS && (0, fS.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, fS.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: IS("settingsMenu:unblockedDomainsDescription")
              }), (0, fS.jsx)("div", {
                className: "AlternativeDomainsList",
                children: AS.current.map((SS => (0, fS.jsxs)(uS.g, {
                  onClick: () => {
                    window.open(`https://${SS}`)
                  },
                  children: [(0, fS.jsx)(NS.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", SS]
                }, SS)))
              })]
            }), "replayViewer" === JS && (0, fS.jsx)(It, {}), "developerTools" === JS && (0, fS.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fS.jsx)(OS, {
                setApplySettingsCallback: ES
              })
            }), null !== vS && (0, fS.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, fS.jsx)(uS.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: WS,
                children: IS("general:apply")
              })
            })]
          })]
        })
      }));
    var wt = gS(2748);
    const ht = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Zt = (0, tS.lazy)((() => Promise.resolve().then((() => gS(4781))).then((SS => {
        SS.needGameClientAfterPaint();
        const HS = SS.matchmakingLibrariesPromise.then((SS => (0, wt.e)(SS.loadCharacterCustomisationUI(), (SS => SS.CharacterCustomisationUI))));
        return Promise.all([SS.ensureGameSetup(), HS]).then((SS => {
          let [, HS] = SS;
          return HS
        }))
      })))),
      Jt = "openCustomisationTab";

    function Ot(SS) {
      var HS, gS, bS;
      let {
        show: XS
      } = SS;
      const {
        userContext: xS
      } = (0, KS.b)(), NS = (0, tS.useRef)(null);
      var qS, uS;
      xS !== cS.NULL_USER_CONTEXT && (null === (HS = NS.current) || void 0 === HS ? void 0 : HS.whamm) !== xS.whamm && (NS.current = {
        whamm: xS.whamm,
        mountKey: (null !== (qS = null === (uS = NS.current) || void 0 === uS ? void 0 : uS.mountKey) && void 0 !== qS ? qS : -1) + 1
      });
      const [IS, aS] = (0, tS.useState)("characters");
      if ((0, VH.g)(Jt, aS), !XS) return null;
      const jS = ht.filter((SS => "cape" !== SS && "nameColour" !== SS || xS.getPlayerRanks().includes("super") || (0, US.purchasesAllowed)())).map((SS => ({
        id: SS,
        faIcon: IH.E[SS],
        title: IH.I[SS],
        redDot: !1
      })));
      return (0, fS.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, fS.jsx)("div", {
          className: "MenuSideBar",
          children: (0, fS.jsx)(kS, {
            items: jS,
            selectedItemId: IS,
            onClick: SS => {
              aS(SS)
            }
          })
        }), (0, fS.jsx)("div", {
          className: "MenuBody",
          children: (0, fS.jsx)(tS.Suspense, {
            fallback: (0, fS.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, fS.jsx)(wS.c, {})
            }),
            children: (0, fS.jsx)(Zt, {
              selectedTab: IS
            }, null !== (gS = null === (bS = NS.current) || void 0 === bS ? void 0 : bS.mountKey) && void 0 !== gS ? gS : 0)
          })
        })]
      })
    }
    var dt = gS(1550),
      ct = gS(1553),
      vt = gS(34223),
      Et = gS(4662),
      Lt = gS(3553),
      Yt = gS(3602),
      At = gS(34256),
      yt = gS(8975),
      Vt = gS(34226),
      it = gS(34239),
      Wt = gS(2050),
      zt = gS(2031),
      Ut = gS(5065),
      pt = gS(1344),
      st = gS(1309),
      Bt = gS(1758),
      Mt = gS(9043),
      Ft = gS(2552),
      Rt = gS(2561);

    function Tt(SS) {
      return SS ? Object.keys(SS).sort(((HS, gS) => {
        var tS, bS, XS, xS;
        const NS = (null !== (tS = null === (bS = SS[gS]) || void 0 === bS ? void 0 : bS.sortPriority) && void 0 !== tS ? tS : 0) - (null !== (XS = null === (xS = SS[HS]) || void 0 === xS ? void 0 : xS.sortPriority) && void 0 !== XS ? XS : 0);
        return 0 !== NS ? NS : HS.localeCompare(gS)
      })) : []
    }
    const ot = [{
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

    function lt(SS) {
      for (const {
          threshold: HS,
          suffix: gS
        }
        of ot)
        if (SS >= HS) {
          const tS = SS / HS;
          return tS >= 100 ? `${Math.floor(tS)}${gS}` : tS >= 10 ? `${tS.toFixed(1).replace(/\.0$/,"")}${gS}` : `${tS.toFixed(2).replace(/\.?0+$/,"")}${gS}`
        } return String(SS)
    }
    var mt = gS(5182);
    const et = {
        normal: "0.8em",
        big: "1em"
      },
      rt = (0, tS.memo)((function(SS) {
        let {
          item: HS,
          amount: gS = 0,
          size: tS = "normal",
          tier: bS = null
        } = SS;
        return (0, fS.jsx)("div", {
          className: XS()("SmpSlot", `SmpSlot-${tS}`),
          children: HS && (0, fS.jsx)(Wt.e, {
            itemName: HS,
            amount: gS > 1 ? gS : 0,
            amountFontSize: et[tS],
            enchantmentTier: bS
          })
        })
      }));

    function Sb(SS) {
      let {
        amount: HS,
        exact: gS = !1,
        className: tS
      } = SS;
      return (0, fS.jsxs)("span", {
        className: XS()("SmpGold", tS),
        children: [(0, fS.jsx)("span", {
          className: "SmpCoin",
          children: (0, fS.jsx)(Wt.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), gS ? HS.toLocaleString("en-US") : lt(HS)]
      })
    }

    function Hb(SS) {
      let {
        count: HS = 5,
        grid: gS = !1
      } = SS;
      return (0, fS.jsx)("div", {
        className: gS ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: HS
        }, ((SS, HS) => (0, fS.jsxs)("div", {
          className: XS()(gS ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, fS.jsx)("div", {
            className: XS()("SmpSlot", gS ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, fS.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, fS.jsx)("b", {}), (0, fS.jsx)("small", {})]
          }), (0, fS.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, HS)))
      })
    }

    function gb(SS) {
      let {
        title: HS,
        children: gS
      } = SS;
      return (0, fS.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, fS.jsx)("b", {
          children: HS
        }), gS && (0, fS.jsx)("small", {
          children: gS
        })]
      })
    }

    function tb(SS) {
      let {
        entry: HS
      } = SS;
      return (0, fS.jsx)(gb, {
        title: (0, fS.jsx)(zt.c, {
          text: HS.item.customTitle
        }),
        children: (0, fS.jsx)(zt.c, {
          text: HS.item.description
        })
      })
    }

    function bb(SS) {
      return (0, fS.jsx)(mt.d, {
        ...SS,
        className: XS()("SmpChoice", SS.className),
        reselectable: !0
      })
    }

    function Xb() {
      return (0, fS.jsx)("span", {
        className: "SmpLoader",
        children: (0, fS.jsx)(wS.c, {})
      })
    }

    function xb(SS) {
      let {
        value: HS,
        onChange: gS,
        min: bS = 1,
        max: XS,
        step: xS = 1,
        label: NS
      } = SS;
      const qS = (0, tS.useRef)(null),
        uS = (0, tS.useRef)(HS);
      uS.current = HS;
      const [IS, kS] = (0, tS.useState)(null), aS = SS => Math.max(bS, Math.min(XS, Math.floor(SS))), KS = SS => {
        const HS = uS.current,
          tS = "function" === typeof xS ? xS(HS, SS) : xS,
          bS = aS(HS + tS * SS);
        uS.current = bS, gS(bS)
      };
      (0, tS.useEffect)((() => {
        if (null === IS) return;
        let SS;
        const HS = () => {
            kS(null)
          },
          gS = setTimeout((() => {
            SS = setInterval((() => {
              KS(IS);
              const SS = uS.current;
              (IS > 0 ? SS >= XS : SS <= bS) && HS()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", HS), window.addEventListener("pointercancel", HS), window.addEventListener("blur", HS), () => {
          clearTimeout(gS), clearInterval(SS), window.removeEventListener("pointerup", HS), window.removeEventListener("pointercancel", HS), window.removeEventListener("blur", HS)
        }
      }), [IS]), (0, tS.useEffect)((() => {
        const SS = qS.current;
        SS && document.activeElement !== SS && SS.value !== String(HS) && (SS.value = String(HS))
      }), [HS]), (0, tS.useEffect)((() => {
        const SS = qS.current;
        if (!SS) return;
        const HS = () => {
          SS.value = String(uS.current)
        };
        return SS.addEventListener("blur", HS), () => {
          SS.removeEventListener("blur", HS)
        }
      }), []);
      const jS = SS => (0, fS.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${SS>0?"More":"Less"} ${NS}`,
        disabled: SS > 0 ? HS >= XS : HS <= bS,
        onPointerDown: HS => {
          0 === HS.button && (KS(SS), kS(SS))
        },
        onKeyDown: HS => {
          "Enter" !== HS.key && " " !== HS.key || KS(SS)
        },
        onContextMenu: SS => {
          SS.preventDefault()
        },
        children: SS > 0 ? "+" : "\u2212"
      });
      return (0, fS.jsxs)("div", {
        className: "SmpStepper",
        children: [jS(-1), (0, fS.jsx)(DS.e, {
          className: "SmpStepperInput",
          domRef: qS,
          defaultValue: String(HS),
          ariaLabel: NS,
          type: "text",
          blurOnEnter: !0,
          onValueChange: SS => {
            const HS = SS.replace(/[^\d]/g, "");
            qS.current && HS !== SS && (qS.current.value = HS), "" !== HS && gS(aS(Number(HS)))
          }
        }), jS(1)]
      })
    }

    function Nb(SS) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, SS))) - 1))
    }
    var qb = gS(34248),
      ub = gS(1327);
    const Ib = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    ub.v, WS.Cc.length;
    new Map;
    var fb = gS(3437);

    function kb(SS, HS) {
      var gS;
      return HS && (null === (gS = SS[HS]) || void 0 === gS ? void 0 : gS.smp) || null
    }

    function ab(SS, HS) {
      const gS = [];
      for (const bS of Tt(SS)) {
        var tS;
        const XS = SS[bS];
        (null === (tS = XS.smp) || void 0 === tS ? void 0 : tS.kind) === HS && gS.push({
          key: bS,
          item: XS,
          meta: XS.smp
        })
      }
      return gS
    }

    function Kb(SS, HS) {
      var gS;
      return null !== (gS = ab(SS, HS)[0]) && void 0 !== gS ? gS : null
    }
    const jb = "50% 0% 50% 0%",
      Gb = [{
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

    function Cb(SS) {
      const HS = SS - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: gS,
          suffix: tS
        }
        of Gb)
        if (HS >= gS) return `${Math.floor(HS/gS)}${tS}`;
      return "<1s"
    }

    function nb(SS) {
      const HS = SS.map(yt.c),
        gS = [];
      return HS.forEach(((SS, tS) => {
        const bS = function(SS) {
            const HS = SS.match(/\d+/);
            return HS ? Number(HS[0]) : 0
          }(SS),
          XS = tS === HS.length - 1;
        (XS || 1 === bS || 10 === bS || 100 === bS) && gS.push({
          label: SS,
          quantity: bS,
          isAll: XS
        })
      })), gS
    }
    let Pb = null;

    function Qb(SS, HS) {
      const gS = HS.trim().toLowerCase();
      if (!gS) return [];
      const tS = SS => {
          if (SS === gS) return 0;
          if (SS.startsWith(gS)) return 1;
          const HS = SS.indexOf(gS);
          return -1 === HS ? -1 : 2 + HS
        },
        bS = [];
      for (const NS of SS) {
        const SS = [tS(NS.lowerLabel), tS(NS.lowerName)].filter((SS => -1 !== SS));
        SS.length && bS.push({
          item: NS,
          rank: Math.min(...SS)
        })
      }
      if (bS.length > 0) return bS.sort(((SS, HS) => SS.rank - HS.rank)).map((SS => SS.item));
      const XS = [...gS],
        xS = SS => {
          let HS = 0;
          for (const gS of XS) {
            if (HS = SS.indexOf(gS, HS), -1 === HS) return !1;
            HS++
          }
          return !0
        };
      return SS.filter((SS => xS(SS.lowerLabel) || xS(SS.lowerName)))
    }

    function Db(SS, HS) {
      var gS;
      return null !== (gS = null === SS || void 0 === SS ? void 0 : SS[HS]) && void 0 !== gS ? gS : HS
    }

    function wb(SS, HS) {
      const gS = SS.userInput;
      return void 0 !== HS && "dropdown" === (null === gS || void 0 === gS ? void 0 : gS.type) && gS.dropdownOptions.map(yt.c).includes(HS) ? HS : function(SS) {
        const HS = SS.userInput;
        if ("dropdown" !== (null === HS || void 0 === HS ? void 0 : HS.type) || 0 === HS.dropdownOptions.length) return null;
        const gS = HS.dropdownOptions.map(yt.c);
        return HS.initialValue && gS.includes(HS.initialValue) ? HS.initialValue : gS[gS.length - 1]
      }(SS)
    }

    function hb(SS) {
      return void 0 === SS ? "" : JSON.stringify(SS)
    }
    const Zb = (0, tS.createContext)(null);

    function Jb() {
      return (0, tS.useContext)(Zb)
    }
    var Ob = gS(2845);
    const db = (0, tS.memo)((function(SS) {
        let {
          name: HS,
          label: gS,
          onPick: tS
        } = SS;
        return (0, fS.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: gS,
          onClick: () => {
            tS(HS)
          },
          children: [(0, fS.jsx)(rt, {
            item: HS,
            size: "big"
          }), (0, fS.jsx)("span", {
            children: gS
          })]
        })
      })),
      cb = (0, tS.memo)((function(SS) {
        let {
          items: HS,
          query: gS,
          onPick: bS
        } = SS;
        const {
          t: XS
        } = (0, xS.F)(), [NS, qS] = (0, tS.useState)(new Set), uS = (0, tS.useMemo)((() => function(SS) {
          const HS = new Map;
          for (const gS of SS) {
            let SS = HS.get(gS.category);
            SS || (SS = [], HS.set(gS.category, SS)), SS.push(gS)
          }
          return [...Ib, "other"].filter((SS => HS.has(SS))).map((SS => ({
            category: SS,
            items: HS.get(SS)
          })))
        }(HS)), [HS]), IS = (0, tS.useMemo)((() => Qb(HS, gS).slice(0, 60)), [HS, gS]);
        return gS.trim() ? 0 === IS.length ? (0, fS.jsx)(gb, {
          title: XS("smpShop:noItemsFound", {
            query: gS.trim()
          }),
          children: XS("smpShop:tryShorterName")
        }) : (0, fS.jsx)(Ob.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: jb,
          observerUpdateDeps: [gS],
          children: IS.map((SS => (0, fS.jsx)(db, {
            name: SS.name,
            label: SS.label,
            onPick: bS
          }, SS.name)))
        }) : (0, fS.jsx)(fS.Fragment, {
          children: uS.map((SS => {
            let {
              category: HS,
              items: gS
            } = SS;
            const tS = NS.has(HS) || gS.length <= 48,
              xS = tS ? gS : gS.slice(0, 48);
            return (0, fS.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, fS.jsxs)("h4", {
                children: [XS("other" === HS ? "smpShop:otherItems" : `creativeInventory:${HS}`), !tS && (0, fS.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    qS(new Set([...NS, HS]))
                  },
                  children: XS("smpShop:showAll", {
                    count: gS.length
                  })
                })]
              }), (0, fS.jsx)(Ob.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: jb,
                observerUpdateDeps: [tS],
                children: xS.map((SS => (0, fS.jsx)(db, {
                  name: SS.name,
                  label: SS.label,
                  onPick: bS
                }, SS.name)))
              })]
            }, HS)
          }))
        })
      }));

    function vb(SS, HS) {
      const {
        searched: gS,
        shown: bS,
        searchFor: XS,
        loading: xS
      } = function(SS, HS) {
        var gS;
        const bS = Jb(),
          [XS, xS] = (0, tS.useState)(void 0),
          NS = (0, tS.useRef)(void 0),
          qS = (0, tS.useRef)(0),
          uS = (0, tS.useRef)(void 0),
          IS = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.meta.item) && void 0 !== gS ? gS : null,
          fS = !!SS && bS.isPending(SS.key);
        (0, tS.useEffect)((() => {
          if (!SS || fS || !HS || void 0 === XS || XS === IS) return;
          const gS = XS === NS.current && bS.gaveUpAt(SS.key) > qS.current && uS.current !== XS;
          (XS !== NS.current || gS) && bS.act(SS.key, null !== XS && void 0 !== XS ? XS : "*", gS) && (gS && (uS.current = XS), NS.current = XS, qS.current = Date.now())
        }), [SS, fS, HS, XS, IS, bS]);
        const kS = (0, tS.useCallback)((SS => {
            NS.current = void 0, uS.current = void 0, xS(SS)
          }), []),
          aS = void 0 !== XS && XS !== IS && (fS || NS.current !== XS);
        return {
          searched: IS,
          shown: aS ? XS : IS,
          searchFor: kS,
          loading: aS || fS || null !== IS && !HS
        }
      }(SS, HS), NS = (0, tS.useMemo)((() => function() {
        var SS;
        let HS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const bS = `${(0,fb.g)()}\x1f${HS.join("\x1e")}\x1f${gS.join("\x1e")}\x1f${JSON.stringify(tS)}`;
        if ((null === (SS = Pb) || void 0 === SS ? void 0 : SS.key) === bS) return Pb.items;
        const XS = new Set(gS),
          xS = new Set,
          NS = [],
          qS = (SS, HS) => {
            var gS;
            if (!SS || xS.has(SS) || XS.has(SS)) return;
            xS.add(SS);
            const bS = null !== (gS = tS[SS]) && void 0 !== gS ? gS : SS;
            NS.push({
              name: SS,
              label: bS,
              lowerLabel: bS.toLowerCase(),
              lowerName: SS.toLowerCase(),
              category: HS
            })
          };
        for (const IS of (0, qb.creativeItemIds)()) {
          var uS;
          (0, qb.itemIsDisabled)(IS, !0, !0, !1) || (0, qb.showOnlyInCreativeSearch)(IS) || qS((0, fb.e)(IS), null !== (uS = (0, qb.creativeCategoryOf)(IS)) && void 0 !== uS ? uS : "other")
        }
        for (const IS of HS) qS(IS, "other");
        return Pb = {
          key: bS,
          items: NS
        }, NS
      }(null === SS || void 0 === SS ? void 0 : SS.meta.extra, null === SS || void 0 === SS ? void 0 : SS.meta.excluded, null === SS || void 0 === SS ? void 0 : SS.meta.names)), [null === SS || void 0 === SS ? void 0 : SS.meta.extra, null === SS || void 0 === SS ? void 0 : SS.meta.excluded, null === SS || void 0 === SS ? void 0 : SS.meta.names]), [qS, uS] = (0, tS.useState)(""), [IS, fS] = (0, tS.useState)(0), [kS, aS] = (0, tS.useState)("recent"), KS = (0, tS.useCallback)((SS => {
        uS(""), fS((SS => SS + 1)), XS(SS)
      }), [XS]), jS = "browse" === kS || "" !== qS.trim();
      return {
        searched: gS,
        shown: bS,
        searchFor: XS,
        loading: xS,
        catalogue: NS,
        names: null === SS || void 0 === SS ? void 0 : SS.meta.names,
        query: qS,
        setQuery: uS,
        searchBoxKey: IS,
        pickItem: KS,
        setView: aS,
        browsing: jS
      }
    }

    function Eb(SS) {
      let {
        browser: HS,
        children: gS
      } = SS;
      const {
        t: tS
      } = (0, xS.F)(), bS = Jb();
      return (0, fS.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, fS.jsx)("div", {
          className: "SmpSearch",
          children: (0, fS.jsx)(DS.e, {
            className: "SmpSearchInput",
            placeholderText: tS("smpShop:searchPlaceholder"),
            defaultValue: HS.query,
            onValueChange: SS => {
              HS.setQuery(SS), HS.searched && SS.trim() && HS.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const SS = Qb(HS.catalogue, HS.query)[0];
              SS ? HS.pickItem(SS.name) : HS.query.trim() && bS.notify(tS("smpShop:noItemsFound", {
                query: HS.query.trim()
              }))
            }
          }, HS.searchBoxKey)
        }), gS]
      })
    }

    function Lb(SS) {
      let {
        browser: HS,
        recentLabel: gS,
        children: tS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)();
      return (0, fS.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, fS.jsx)(bb, {
          options: [{
            value: "recent",
            label: gS
          }, {
            value: "browse",
            label: bS("smpShop:browseItems")
          }],
          value: HS.browsing ? "browse" : "recent",
          onChange: HS.setView,
          ariaLabel: bS("smpShop:show")
        }), !HS.browsing && tS]
      })
    }

    function Yb(SS) {
      let {
        item: HS,
        names: gS,
        summary: tS,
        onBack: bS,
        children: XS
      } = SS;
      const {
        t: NS
      } = (0, xS.F)();
      return (0, fS.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, fS.jsx)(uS.d, {
          className: "SmpBackButton",
          onClick: bS,
          children: NS("general:back")
        }), (0, fS.jsx)(rt, {
          item: HS,
          size: "big"
        }), (0, fS.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, fS.jsx)("b", {
            children: Db(gS, HS)
          }), tS && (0, fS.jsx)("small", {
            children: tS
          })]
        }), XS]
      })
    }

    function Ab(SS) {
      let {
        browser: HS,
        className: gS,
        action: tS,
        above: bS,
        list: xS,
        summary: NS,
        recentLabel: qS,
        listControls: uS,
        onBack: IS
      } = SS;
      return (0, fS.jsxs)("div", {
        className: XS()("SmpScreen", gS),
        children: [(0, fS.jsx)(Eb, {
          browser: HS,
          children: tS
        }), HS.shown && (0, fS.jsx)(Yb, {
          item: HS.shown,
          names: HS.names,
          summary: !HS.loading && NS,
          onBack: () => {
            null === IS || void 0 === IS || IS(), HS.searchFor(null)
          },
          children: uS
        }), bS, HS.shown ? xS : (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsx)(Lb, {
            browser: HS,
            recentLabel: qS,
            children: uS
          }), HS.browsing ? (0, fS.jsx)(cb, {
            items: HS.catalogue,
            query: HS.query,
            onPick: HS.pickItem
          }) : xS]
        })]
      })
    }

    function yb(SS, HS) {
      const gS = SS.map((SS => {
        let {
          meta: HS
        } = SS;
        return HS.pricePerItem
      }));
      return "min" === HS ? Math.min(...gS) : Math.max(...gS)
    }
    var Vb = gS(6780);
    const ib = (0, tS.memo)((function(SS) {
      var HS;
      const {
        t: gS
      } = (0, xS.F)(), tS = null === SS.seller, bS = SS.quantity * SS.pricePerItem;
      return (0, fS.jsxs)("div", {
        className: SS.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, fS.jsx)(rt, {
          item: SS.item,
          amount: SS.quantity,
          size: SS.grid ? "big" : "normal",
          tier: SS.tier
        }), (0, fS.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fS.jsx)("b", {
            children: (0, fS.jsx)(zt.c, {
              text: null !== (HS = SS.title) && void 0 !== HS ? HS : `${SS.quantity}x ${SS.item}`
            })
          }), (0, fS.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, fS.jsx)("span", {
              children: tS ? gS("smpShop:you") : (0, fS.jsx)(zt.c, {
                text: [{
                  entityName: SS.seller
                }]
              })
            }), (0, fS.jsx)("span", {
              children: gS("smpShop:timeLeft", {
                time: Cb(SS.expiresAt)
              })
            })]
          })]
        }), (0, fS.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, fS.jsx)(Sb, {
            amount: SS.pricePerItem
          }), (0, fS.jsx)("small", {
            children: gS("smpShop:each")
          })]
        }), (0, fS.jsx)(uS.g, {
          className: "SmpBuyButton",
          disabled: tS || !SS.canAfford && !SS.busy,
          loading: SS.busy,
          onClick: () => {
            SS.onBuy(SS.itemKey)
          },
          children: tS ? gS("smpShop:yours") : (0, fS.jsx)(Sb, {
            amount: bS
          })
        })]
      })
    }));

    function Wb(SS) {
      let {
        view: HS,
        onChange: gS
      } = SS;
      const {
        t: tS
      } = (0, xS.F)();
      return (0, fS.jsx)(mt.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: tS("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, fS.jsx)(NS.d, {
            name: "list"
          }),
          ariaLabel: tS("smpShop:listView")
        }, {
          value: "grid",
          label: (0, fS.jsx)(NS.d, {
            name: "grid-2"
          }),
          ariaLabel: tS("smpShop:gridView")
        }],
        value: HS,
        onChange: gS
      })
    }

    function zb(SS) {
      let {
        entries: HS,
        view: gS
      } = SS;
      const {
        t: tS
      } = (0, xS.F)(), bS = Jb(), XS = "grid" === gS;
      return (0, fS.jsxs)(fS.Fragment, {
        children: [!XS && (0, fS.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, fS.jsx)("span", {}), (0, fS.jsx)("span", {
            children: tS("smpShop:columnItem")
          }), (0, fS.jsx)("span", {
            children: tS("smpShop:columnPriceEach")
          }), (0, fS.jsx)("span", {
            children: tS("smpShop:columnTotal")
          })]
        }), (0, fS.jsx)(Ob.d, {
          lazyLoadedClassName: XS ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jb,
          observerUpdateDeps: [HS.length],
          children: HS.map((SS => {
            var HS, gS;
            let {
              key: tS,
              item: xS,
              meta: NS
            } = SS;
            const qS = NS.quantity * NS.pricePerItem;
            return (0, fS.jsx)(ib, {
              itemKey: tS,
              item: NS.item,
              title: xS.customTitle,
              quantity: NS.quantity,
              pricePerItem: NS.pricePerItem,
              seller: NS.seller,
              expiresAt: NS.expiresAt,
              tier: null !== (HS = null === (gS = xS.enchant) || void 0 === gS ? void 0 : gS.tier) && void 0 !== HS ? HS : null,
              busy: bS.isPending(tS) || null !== NS.seller && !1 === xS.canBuy,
              canAfford: bS.canAfford(xS, qS),
              grid: XS,
              onBuy: bS.act
            }, tS)
          }))
        }, gS)]
      })
    }
    const Ub = [1, 10, 100],
      pb = [1, 10, 100, 999];

    function sb(SS) {
      var HS, gS, bS, qS, IS, kS, aS, KS, jS, GS;
      const {
        t: CS
      } = (0, xS.F)(), nS = Jb(), {
        creator: PS,
        mode: QS
      } = SS, [wS, hS] = (0, tS.useState)(null !== (HS = null === PS || void 0 === PS ? void 0 : PS.meta.item) && void 0 !== HS ? HS : null), [ZS, JS] = (0, tS.useState)(1), [OS, dS] = (0, tS.useState)(0), [cS, vS] = (0, tS.useState)(""), [ES, LS] = (0, tS.useState)(0), YS = (0, tS.useRef)(wS), AS = (0, tS.useRef)(!1), [yS, VS] = (0, tS.useState)(!1), iS = null !== (gS = null === PS || void 0 === PS ? void 0 : PS.meta.item) && void 0 !== gS ? gS : null, WS = null !== (bS = null === PS || void 0 === PS ? void 0 : PS.meta.owned) && void 0 !== bS ? bS : 0;
      (0, tS.useEffect)((() => {
        SS.searching || null === iS || iS === YS.current || (YS.current = iS, AS.current = !1, hS(iS), dS(0), JS("list" === QS ? Math.max(1, WS) : 1))
      }), [iS, SS.searching]);
      const zS = !!PS && !!wS && PS.meta.item === wS,
        US = zS ? PS.meta.owned : null !== (qS = null === (IS = SS.inventory) || void 0 === IS || null === (kS = IS.find((SS => SS.item === wS))) || void 0 === kS ? void 0 : kS.quantity) && void 0 !== qS ? qS : 0,
        pS = "list" === QS ? Math.max(1, US) : 45954,
        sS = null !== (aS = SS.prices[0]) && void 0 !== aS ? aS : null,
        BS = SS.prices.length ? Math.round(SS.prices.reduce(((SS, HS) => SS + HS), 0) / SS.prices.length) : null,
        MS = null === (KS = SS.inventory) || void 0 === KS || null === (jS = KS.find((SS => SS.item === wS))) || void 0 === jS ? void 0 : jS.sellPrice;
      (0, tS.useEffect)((() => {
        var SS;
        zS && (JS((SS => "list" === QS ? Math.min(Math.max(1, SS), Math.max(1, US)) : SS)), AS.current || dS(null !== (SS = null !== sS && void 0 !== sS ? sS : BS) && void 0 !== SS ? SS : Math.max(1, null !== MS && void 0 !== MS ? MS : 1)))
      }), [zS, US, wS, sS, BS]);
      const FS = SS => {
          AS.current = !0, dS(SS)
        },
        RS = HS => {
          var gS, tS, bS;
          YS.current = HS, AS.current = !1, VS(!1), vS(""), LS((SS => SS + 1)), hS(HS), dS(0), JS("list" === QS && null !== (gS = null === (tS = SS.inventory) || void 0 === tS || null === (bS = tS.find((SS => SS.item === HS))) || void 0 === bS ? void 0 : bS.quantity) && void 0 !== gS ? gS : 1), (null === PS || void 0 === PS ? void 0 : PS.meta.item) !== HS && SS.onPickItem(HS)
        },
        TS = ZS * OS,
        oS = "list" === QS && null !== PS && void 0 !== PS && PS.meta.fee ? function(SS, HS) {
          const gS = Math.max(0, HS - SS.taxFreeAllowance);
          return Math.ceil(Math.round(gS * SS.rate * 1e6) / 1e6)
        }(PS.meta.fee, TS) : 0,
        lS = !!PS && nS.isPending(PS.key),
        mS = zS && !SS.searching && ZS >= 1 && OS >= 1 && ("order" === QS || US >= ZS) && !lS,
        eS = !!wS && !zS && !SS.searching && ZS >= 1 && OS >= 1,
        rS = () => {
          mS ? nS.act(PS.key, `${ZS}|${OS}`) : eS && (SS.onPickItem(wS), VS(!0))
        };
      (0, tS.useEffect)((() => {
        yS && zS && !SS.searching && (VS(!1), rS())
      }), [yS, zS, SS.searching]);
      const SH = !!wS && !zS && (SS.searching || yS),
        HH = wS ? Db(SS.names, wS) : "",
        gH = (0, tS.useMemo)((() => Qb(SS.catalogue, cS).slice(0, 8)), [SS.catalogue, cS]),
        tH = ("list" === QS ? Ub.filter((SS => SS < US)) : pb).map((SS => ({
          value: SS,
          label: String(SS)
        })));
      "list" === QS && US > 0 && tH.push({
        value: US,
        label: CS("smpShop:all", {
          count: US
        })
      });
      const bH = [];
      return null !== sS && (sS > 1 && bH.push({
        value: sS - 1,
        label: CS("smpShop:undercut", {
          price: lt(sS - 1)
        })
      }), bH.push({
        value: sS,
        label: CS("smpShop:lowest", {
          price: lt(sS)
        })
      })), null !== BS && BS !== sS && bH.push({
        value: BS,
        label: CS("smpShop:average", {
          price: lt(BS)
        })
      }), (0, fS.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, fS.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, fS.jsx)("b", {
            children: CS("list" === QS ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, fS.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": CS("smpShop:close"),
            onClick: SS.onClose,
            children: (0, fS.jsx)(NS.d, {
              name: "xmark"
            })
          })]
        }), "list" === QS && (0, fS.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (GS = SS.inventory) && void 0 !== GS && GS.length ? SS.inventory.map((SS => {
            let {
              item: HS,
              quantity: gS
            } = SS;
            return (0, fS.jsx)("button", {
              type: "button",
              title: HS,
              className: XS()("SmpPickerSlot", {
                SmpPickerSlotOn: HS === wS
              }),
              onClick: () => {
                RS(HS)
              },
              children: (0, fS.jsx)(rt, {
                item: HS,
                amount: gS
              })
            }, HS)
          })) : (0, fS.jsx)("span", {
            className: "SmpMuted",
            children: CS("smpShop:nothingToList")
          })
        }), ("list" === QS || !wS) && (0, fS.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, fS.jsx)(DS.e, {
            className: "SmpSearchInput",
            placeholderText: CS("list" === QS ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: cS,
            onValueChange: vS,
            blurOnEnter: !0,
            onEnter: () => {
              gH[0] && RS(gH[0].name)
            }
          }, ES), gH.length > 0 && (0, fS.jsx)("div", {
            className: "SmpPicker",
            children: gH.map((SS => {
              let {
                name: HS
              } = SS;
              return (0, fS.jsx)("button", {
                type: "button",
                title: HS,
                className: XS()("SmpPickerSlot", {
                  SmpPickerSlotOn: HS === wS
                }),
                onClick: () => {
                  RS(HS)
                },
                children: (0, fS.jsx)(rt, {
                  item: HS
                })
              }, HS)
            }))
          })]
        }), wS && (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsxs)("div", {
            className: "SmpPickedName",
            children: [HH, SH && (0, fS.jsx)(Xb, {})]
          }), (0, fS.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, fS.jsxs)("div", {
              className: "SmpField",
              children: [(0, fS.jsxs)("span", {
                children: [CS("smpShop:quantity"), "list" === QS && zS && (0, fS.jsx)("small", {
                  children: CS("smpShop:youHave", {
                    count: US
                  })
                })]
              }), (0, fS.jsx)(xb, {
                value: ZS,
                onChange: JS,
                max: pS,
                label: CS("smpShop:quantity")
              }), (0, fS.jsx)(bb, {
                options: tH,
                value: ZS,
                onChange: JS,
                ariaLabel: CS("smpShop:quantity")
              })]
            }), (0, fS.jsxs)("div", {
              className: "SmpField",
              children: [(0, fS.jsx)("span", {
                children: CS("smpShop:pricePerItem")
              }), (0, fS.jsx)(xb, {
                value: Math.max(1, OS),
                onChange: FS,
                max: 9999999,
                step: Nb,
                label: CS("smpShop:pricePerItem")
              }), (0, fS.jsx)(bb, {
                options: bH,
                value: OS,
                onChange: FS,
                ariaLabel: CS("smpShop:pricePerItem")
              })]
            })]
          }), "list" === QS && (0, fS.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, fS.jsxs)("span", {
              children: [CS("smpShop:youGet"), " ", (0, fS.jsx)(Sb, {
                amount: Math.max(0, TS - oS),
                exact: !0
              })]
            }), (0, fS.jsx)("small", {
              children: oS > 0 ? CS("smpShop:listingFee", {
                fee: oS.toLocaleString("en-US")
              }) : CS("smpShop:listingRules")
            })]
          }), (0, fS.jsx)(uS.u, {
            className: "SmpSubmit",
            disabled: !mS && !eS && !lS,
            loading: lS || SH || zS && SS.searching,
            onClick: rS,
            children: "list" === QS ? CS("smpShop:listButton", {
              count: ZS,
              item: HH
            }) : (0, fS.jsxs)(fS.Fragment, {
              children: [CS("smpShop:orderButton", {
                count: ZS,
                item: HH
              }), " ", OS >= 1 && (0, fS.jsx)(Sb, {
                amount: TS
              })]
            })
          })]
        })]
      })
    }

    function Bb() {
      var SS;
      const {
        t: HS
      } = (0, xS.F)(), gS = Jb(), bS = null === (SS = gS.shopInfo[gS.categoryKey]) || void 0 === SS ? void 0 : SS.items, XS = Kb(bS, "search"), NS = Kb(bS, "creator"), qS = ab(bS, "enchantedCreator"), IS = ab(bS, "listing"), kS = Kb(bS, "empty"), aS = vb(XS, IS.length > 0 || null !== kS), {
        searched: KS,
        shown: jS,
        loading: GS
      } = aS, [CS, nS] = (0, tS.useState)(!1), [PS, QS] = function() {
        const [SS, HS] = (0, Vb.b)("smpMarketView", "list");
        return ["grid" === SS ? "grid" : "list", HS]
      }(), DS = "grid" === PS, wS = (0, tS.useMemo)((() => IS.filter((SS => {
        let {
          meta: HS
        } = SS;
        return null !== HS.seller && HS.item === KS
      })).map((SS => {
        let {
          meta: HS
        } = SS;
        return HS.pricePerItem
      })).sort(((SS, HS) => SS - HS))), [IS, KS]), hS = (0, tS.useMemo)((() => {
        const SS = new Set(aS.catalogue.map((SS => {
          let {
            name: HS
          } = SS;
          return HS
        })));
        return function(SS) {
          for (const HS in SS)
            if ("sell" === SS[HS].smp) return ab(SS[HS].items, "sell").filter((SS => {
              let {
                item: HS
              } = SS;
              return !HS.enchant
            })).map((SS => {
              let {
                meta: HS
              } = SS;
              return {
                item: HS.item,
                quantity: HS.quantity,
                sellPrice: HS.pricePerItem
              }
            }));
          return []
        }(gS.shopInfo).filter((HS => {
          let {
            item: gS
          } = HS;
          return SS.has(gS)
        }))
      }), [gS.shopInfo, aS.catalogue]);
      return (0, fS.jsx)(Ab, {
        browser: aS,
        className: "SmpMarketTab",
        recentLabel: HS("smpShop:recentlyListed"),
        action: (0, fS.jsx)(uS.u, {
          className: "SmpSellButton",
          onClick: () => {
            nS((SS => !SS))
          },
          children: HS("smpShop:sell")
        }),
        above: CS && (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsx)(sb, {
            mode: "list",
            creator: NS,
            inventory: hS,
            catalogue: aS.catalogue,
            names: aS.names,
            searching: GS,
            prices: wS,
            onPickItem: aS.searchFor,
            onClose: () => {
              nS(!1)
            }
          }), qS.length > 0 && (0, fS.jsx)(Mb, {
            entries: qS
          })]
        }),
        listControls: (0, fS.jsx)(Wb, {
          view: PS,
          onChange: QS
        }),
        summary: jS && (IS.length > 0 ? HS(1 === IS.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: IS.length,
          price: lt(yb(IS, "min"))
        }) : HS("smpShop:noOneSelling", {
          item: Db(aS.names, jS)
        })),
        list: GS ? (0, fS.jsx)(Hb, {
          grid: DS
        }) : IS.length > 0 ? (0, fS.jsx)(zb, {
          entries: IS,
          view: PS
        }) : kS ? (0, fS.jsx)(tb, {
          entry: kS
        }) : (0, fS.jsx)(Hb, {
          count: 3,
          grid: DS
        })
      })
    }

    function Mb(SS) {
      let {
        entries: HS
      } = SS;
      const {
        t: gS
      } = (0, xS.F)(), bS = Jb(), [XS, NS] = (0, tS.useState)({});
      return (0, fS.jsx)("div", {
        className: "SmpList",
        children: HS.map((SS => {
          var HS, tS, xS;
          let {
            key: qS,
            item: IS,
            meta: kS
          } = SS;
          const aS = null !== (HS = XS[qS]) && void 0 !== HS ? HS : 1;
          return (0, fS.jsxs)("div", {
            className: "SmpRow",
            children: [(0, fS.jsx)(rt, {
              item: kS.item,
              amount: kS.quantity,
              tier: null !== (tS = null === (xS = IS.enchant) || void 0 === xS ? void 0 : xS.tier) && void 0 !== tS ? tS : null
            }), (0, fS.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, fS.jsx)("b", {
                children: (0, fS.jsx)(zt.c, {
                  text: IS.customTitle
                })
              }), (0, fS.jsx)("small", {
                children: gS("smpShop:enchantedListing")
              })]
            }), (0, fS.jsx)(xb, {
              value: aS,
              onChange: SS => {
                NS({
                  ...XS,
                  [qS]: SS
                })
              },
              max: 9999999,
              step: Nb,
              label: gS("smpShop:pricePerItem")
            }), (0, fS.jsxs)(uS.u, {
              loading: bS.isPending(qS),
              onClick: () => {
                bS.act(qS, String(aS))
              },
              children: [gS("smpShop:list"), " ", (0, fS.jsx)(Sb, {
                amount: aS
              })]
            })]
          }, qS)
        }))
      })
    }
    const Fb = (0, tS.memo)((function(SS) {
      let {
        itemKey: HS,
        item: gS,
        quantity: tS,
        pricePerItem: bS,
        tier: xS,
        selected: NS,
        onSelect: qS
      } = SS;
      return (0, fS.jsxs)("button", {
        type: "button",
        className: XS()("SmpInventorySlot", {
          SmpInventorySlotOn: NS
        }),
        title: gS,
        onClick: () => {
          qS(HS)
        },
        children: [(0, fS.jsx)(rt, {
          item: gS,
          amount: tS,
          tier: xS
        }), (0, fS.jsx)(Sb, {
          amount: bS
        })]
      })
    }));

    function Rb() {
      var SS;
      const {
        t: HS
      } = (0, xS.F)(), gS = Jb(), bS = null === (SS = gS.shopInfo[gS.categoryKey]) || void 0 === SS ? void 0 : SS.items, NS = ab(bS, "sell"), qS = Kb(bS, "empty"), [uS, IS] = (0, tS.useState)(null), [kS, aS] = (0, tS.useState)({}), KS = NS.find((SS => {
        let {
          key: HS
        } = SS;
        return HS === uS
      }));
      return 0 === NS.length ? (0, fS.jsx)("div", {
        className: "SmpScreen",
        children: (0, fS.jsx)(gb, {
          title: qS ? (0, fS.jsx)(zt.c, {
            text: qS.item.customTitle
          }) : HS("smpShop:nothingToSell"),
          children: qS && (0, fS.jsx)(zt.c, {
            text: qS.item.description
          })
        })
      }) : (0, fS.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, fS.jsx)("div", {
          className: "SmpInventoryGrid",
          children: NS.map((SS => {
            var HS, gS;
            let {
              key: tS,
              item: bS,
              meta: XS
            } = SS;
            return (0, fS.jsx)(Fb, {
              itemKey: tS,
              item: XS.item,
              quantity: XS.quantity,
              pricePerItem: XS.pricePerItem,
              tier: null !== (HS = null === (gS = bS.enchant) || void 0 === gS ? void 0 : gS.tier) && void 0 !== HS ? HS : null,
              selected: tS === uS,
              onSelect: IS
            }, tS)
          }))
        }), (0, fS.jsx)("div", {
          className: XS()("SmpSellBar", {
            SmpSellBarIdle: !KS
          }),
          children: KS ? (0, fS.jsx)(Tb, {
            entry: KS,
            choice: wb(KS.item, kS[KS.key]),
            onChoose: SS => {
              aS({
                ...kS,
                [KS.key]: SS
              })
            }
          }) : (0, fS.jsx)("span", {
            className: "SmpMuted",
            children: HS("smpShop:tapToSell")
          })
        })]
      })
    }

    function Tb(SS) {
      var HS, gS, tS, bS;
      let {
        entry: XS,
        choice: NS,
        onChoose: qS
      } = SS;
      const {
        t: IS
      } = (0, xS.F)(), kS = Jb(), {
        key: aS,
        item: KS,
        meta: jS
      } = XS, GS = nb("dropdown" === (null === (HS = KS.userInput) || void 0 === HS ? void 0 : HS.type) ? KS.userInput.dropdownOptions : []), CS = null === NS ? 0 : -(0, yt.b)(KS, NS);
      return (0, fS.jsxs)(fS.Fragment, {
        children: [(0, fS.jsx)(rt, {
          item: jS.item,
          amount: jS.quantity,
          tier: null !== (gS = null === (tS = KS.enchant) || void 0 === tS ? void 0 : tS.tier) && void 0 !== gS ? gS : null
        }), (0, fS.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fS.jsx)("b", {
            children: (0, fS.jsx)(zt.c, {
              text: null !== (bS = KS.customTitle) && void 0 !== bS ? bS : jS.item
            })
          }), (0, fS.jsx)("small", {
            children: IS("smpShop:sellEach", {
              count: jS.quantity
            })
          })]
        }), (0, fS.jsx)(bb, {
          options: GS.map((SS => {
            let {
              label: HS,
              quantity: gS,
              isAll: tS
            } = SS;
            return {
              value: HS,
              label: tS ? IS("smpShop:all", {
                count: gS
              }) : String(gS)
            }
          })),
          value: NS,
          onChange: qS,
          ariaLabel: IS("smpShop:quantity")
        }), (0, fS.jsxs)(uS.u, {
          loading: kS.isPending(aS),
          disabled: null === NS,
          onClick: () => {
            kS.act(aS, NS)
          },
          children: [IS("smpShop:sellButton"), " ", (0, fS.jsx)(Sb, {
            amount: CS
          })]
        })]
      })
    }

    function ob() {
      var SS;
      const {
        t: HS
      } = (0, xS.F)(), gS = Jb(), tS = null === (SS = gS.shopInfo[gS.categoryKey]) || void 0 === SS ? void 0 : SS.items, bS = ab(tS, "collect"), XS = ab(tS, "myListing"), NS = (SS, HS) => gS.isPending(SS) || !1 === HS.canBuy;
      return (0, fS.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, fS.jsx)("h3", {
          className: "SmpSectionTitle",
          children: HS("smpShop:readyToCollect")
        }), bS.length > 0 ? (0, fS.jsx)("div", {
          className: "SmpList",
          children: bS.map((SS => {
            var tS, bS;
            let {
              key: XS,
              item: xS,
              meta: qS
            } = SS;
            return (0, fS.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fS.jsx)(rt, {
                item: "sold" === qS.type ? "Gold Coin" : qS.item,
                amount: "sold" === qS.type ? 0 : qS.quantity,
                tier: null !== (tS = null === (bS = xS.enchant) || void 0 === bS ? void 0 : bS.tier) && void 0 !== tS ? tS : null
              }), (0, fS.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fS.jsx)("b", {
                  children: (0, fS.jsx)(zt.c, {
                    text: xS.customTitle
                  })
                }), (0, fS.jsx)("small", {
                  children: (0, fS.jsx)(zt.c, {
                    text: xS.description
                  })
                })]
              }), (0, fS.jsx)(uS.p, {
                loading: NS(XS, xS),
                onClick: () => {
                  gS.act(XS)
                },
                children: HS("smpShop:collect")
              })]
            }, XS)
          }))
        }) : (0, fS.jsx)(gb, {
          title: HS("smpShop:nothingToCollect"),
          children: HS("smpShop:nothingToCollectHint")
        }), (0, fS.jsx)("h3", {
          className: "SmpSectionTitle",
          children: HS("smpShop:activeListings", {
            count: XS.length
          })
        }), XS.length > 0 ? (0, fS.jsx)("div", {
          className: "SmpList",
          children: XS.map((SS => {
            var tS, bS;
            let {
              key: XS,
              item: xS,
              meta: qS
            } = SS;
            return (0, fS.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fS.jsx)(rt, {
                item: qS.item,
                amount: qS.quantity,
                tier: null !== (tS = null === (bS = xS.enchant) || void 0 === bS ? void 0 : bS.tier) && void 0 !== tS ? tS : null
              }), (0, fS.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fS.jsx)("b", {
                  children: (0, fS.jsx)(zt.c, {
                    text: xS.customTitle
                  })
                }), (0, fS.jsx)("small", {
                  children: HS("smpShop:timeLeft", {
                    time: Cb(qS.expiresAt)
                  })
                })]
              }), (0, fS.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, fS.jsx)(Sb, {
                  amount: qS.pricePerItem
                }), (0, fS.jsx)("small", {
                  children: HS("smpShop:each")
                })]
              }), (0, fS.jsx)(uS.L, {
                loading: NS(XS, xS),
                onClick: () => {
                  gS.act(XS)
                },
                children: HS("smpShop:cancel")
              })]
            }, XS)
          }))
        }) : (0, fS.jsx)(gb, {
          title: HS("smpShop:noActiveListings"),
          children: HS("smpShop:noActiveListingsHint")
        })]
      })
    }

    function lb(SS) {
      let {
        done: HS,
        of: gS
      } = SS;
      return (0, fS.jsx)("span", {
        className: "SmpProgress",
        children: (0, fS.jsx)("i", {
          style: {
            width: `${Math.min(100,HS/Math.max(1,gS)*100)}%`
          }
        })
      })
    }

    function mb(SS) {
      var HS, gS, tS;
      let {
        entry: bS,
        choice: XS,
        onChoose: NS
      } = SS;
      const {
        t: qS
      } = (0, xS.F)(), IS = Jb(), {
        key: kS,
        item: aS,
        meta: KS
      } = bS, jS = "dropdown" === (null === (HS = aS.userInput) || void 0 === HS ? void 0 : HS.type) ? aS.userInput.dropdownOptions : [], GS = !0 === KS.processing, CS = null !== KS.creator && (KS.owned > 0 || GS), nS = CS && KS.owned > 0 ? nb(jS) : [], PS = null === XS ? 0 : null !== (gS = null === (tS = nS.find((SS => SS.label === XS))) || void 0 === tS ? void 0 : tS.quantity) && void 0 !== gS ? gS : 0;
      return (0, fS.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, fS.jsx)(rt, {
          item: KS.item
        }), (0, fS.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fS.jsx)("b", {
            children: (0, fS.jsx)(zt.c, {
              text: aS.customTitle
            })
          }), (0, fS.jsxs)("small", {
            children: [(0, fS.jsx)(Sb, {
              amount: KS.pricePerItem
            }), " ", qS("smpShop:each"), " \xb7", " ", null === KS.creator ? qS("smpShop:you") : (0, fS.jsx)(zt.c, {
              text: [{
                entityName: KS.creator
              }]
            })]
          }), (0, fS.jsx)(lb, {
            done: KS.delivered,
            of: KS.wanted
          })]
        }), CS ? (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsx)(bb, {
            options: nS.map((SS => {
              let {
                label: HS,
                quantity: gS,
                isAll: tS
              } = SS;
              return {
                value: HS,
                label: tS ? qS("smpShop:max", {
                  count: gS
                }) : String(gS)
              }
            })),
            value: XS,
            onChange: NS,
            ariaLabel: qS("smpShop:quantity")
          }), (0, fS.jsxs)(uS.u, {
            loading: IS.isPending(kS) || GS,
            disabled: null === XS,
            onClick: () => {
              IS.act(kS, XS)
            },
            children: [qS("smpShop:deliver"), " ", (0, fS.jsx)(Sb, {
              amount: PS * KS.pricePerItem
            })]
          })]
        }) : (0, fS.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === KS.creator ? qS("smpShop:yourOrder") : qS("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function eb() {
      var SS;
      const {
        t: HS
      } = (0, xS.F)(), gS = Jb(), bS = null === (SS = gS.shopInfo[gS.categoryKey]) || void 0 === SS ? void 0 : SS.items, XS = Kb(bS, "search"), NS = Kb(bS, "creator"), qS = ab(bS, "order"), IS = Kb(bS, "empty"), kS = vb(XS, qS.length > 0 || null !== IS), [aS, KS] = (0, tS.useState)(!1), [jS, GS] = (0, tS.useState)({});
      return (0, fS.jsx)(Ab, {
        browser: kS,
        recentLabel: HS("smpShop:recentOrders"),
        action: (0, fS.jsx)(uS.u, {
          onClick: () => {
            KS((SS => !SS))
          },
          children: HS("smpShop:createOrder")
        }),
        above: aS && (0, fS.jsx)(sb, {
          mode: "order",
          creator: NS,
          catalogue: kS.catalogue,
          names: kS.names,
          searching: kS.loading,
          prices: [],
          onPickItem: kS.searchFor,
          onClose: () => {
            KS(!1)
          }
        }),
        onBack: () => {
          KS(!1)
        },
        summary: qS.length > 0 && HS(1 === qS.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: qS.length,
          price: lt(yb(qS, "max"))
        }),
        list: kS.loading ? (0, fS.jsx)(Hb, {}) : qS.length > 0 ? (0, fS.jsx)(Ob.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jb,
          observerUpdateDeps: [qS.length],
          children: qS.map((SS => (0, fS.jsx)(mb, {
            entry: SS,
            choice: wb(SS.item, jS[SS.key]),
            onChoose: HS => {
              GS({
                ...jS,
                [SS.key]: HS
              })
            }
          }, SS.key)))
        }) : IS ? (0, fS.jsx)(tb, {
          entry: IS
        }) : (0, fS.jsx)(Hb, {
          count: 3
        })
      })
    }

    function rb() {
      var SS;
      const {
        t: HS
      } = (0, xS.F)(), gS = Jb(), tS = ab(null === (SS = gS.shopInfo[gS.categoryKey]) || void 0 === SS ? void 0 : SS.items, "myOrder");
      return 0 === tS.length ? (0, fS.jsx)("div", {
        className: "SmpScreen",
        children: (0, fS.jsx)(gb, {
          title: HS("smpShop:noOrders"),
          children: HS("smpShop:noOrdersHint")
        })
      }) : (0, fS.jsx)("div", {
        className: "SmpScreen",
        children: (0, fS.jsx)("div", {
          className: "SmpList",
          children: tS.map((SS => {
            let {
              key: tS,
              item: bS,
              meta: XS
            } = SS;
            const xS = gS.isPending(tS) || !1 === bS.canBuy;
            return (0, fS.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fS.jsx)(rt, {
                item: XS.item,
                amount: XS.collectable
              }), (0, fS.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fS.jsx)("b", {
                  children: (0, fS.jsx)(zt.c, {
                    text: bS.customTitle
                  })
                }), (0, fS.jsxs)("small", {
                  children: [(0, fS.jsx)(Sb, {
                    amount: XS.pricePerItem
                  }), " ", HS("smpShop:each"), XS.collectable > 0 && ` \xb7 ${HS("smpShop:readyCount",{count:XS.collectable})}`]
                }), (0, fS.jsx)(lb, {
                  done: XS.delivered,
                  of: XS.wanted
                })]
              }), XS.collectable > 0 ? (0, fS.jsx)(uS.p, {
                loading: xS,
                onClick: () => {
                  gS.act(tS)
                },
                children: HS("smpShop:collectCount", {
                  count: XS.collectable
                })
              }) : (0, fS.jsx)(uS.L, {
                loading: xS,
                onClick: () => {
                  gS.act(tS)
                },
                children: HS("smpShop:cancel")
              })]
            }, tS)
          }))
        })
      })
    }
    const SX = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      HX = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function gX(SS, HS) {
      let gS = !1;
      const tS = {};
      for (const bS in SS) HS(bS, SS[bS]) ? tS[bS] = SS[bS] : gS = !0;
      return gS ? tS : SS
    }

    function tX(SS) {
      var HS, gS, bS, qS;
      const {
        show: uS,
        shopInfo: IS,
        selectedCategoryKey: kS
      } = SS, {
        t: aS
      } = (0, xS.F)(), KS = null !== kS && void 0 !== kS ? kS : "", jS = kb(IS, KS), GS = null === (HS = IS[KS]) || void 0 === HS ? void 0 : HS.items, CS = null !== jS, [nS, PS] = (0, tS.useState)({}), [QS, DS] = (0, tS.useState)([]), [wS, hS] = (0, tS.useState)(!1), [ZS, JS] = (0, tS.useState)(null), [, OS] = (0, tS.useState)(0), dS = (0, tS.useRef)(0), cS = (0, tS.useRef)({}), vS = (0, tS.useRef)({
        items: GS,
        pending: nS,
        shopInfo: IS,
        active: CS,
        canAfford: SS.canAfford,
        buy: SS.buy
      });
      vS.current = {
        items: GS,
        pending: nS,
        shopInfo: IS,
        active: CS,
        canAfford: SS.canAfford,
        buy: SS.buy
      };
      const ES = (0, tS.useCallback)((SS => {
        dS.current++;
        const HS = dS.current;
        DS((gS => [{
          id: HS,
          text: SS
        }, ...gS].slice(0, 8))), JS(HS)
      }), []);
      (0, tS.useEffect)((() => {
        if (null === ZS) return;
        const SS = setTimeout((() => {
          JS(null)
        }), 3e3);
        return () => {
          clearTimeout(SS)
        }
      }), [ZS]), (0, tS.useEffect)((() => {
        const HS = SS.message;
        if (!HS) return;
        const {
          shopInfo: gS,
          active: tS,
          items: bS
        } = vS.current, XS = null !== HS.categoryKey ? null !== kb(gS, HS.categoryKey) : tS;
        (XS || tS) && ES(HS.text), XS && PS((SS => gX(SS, (SS => {
          var HS, gS;
          return !SX.has(null === bS || void 0 === bS || null === (HS = bS[SS]) || void 0 === HS || null === (gS = HS.smp) || void 0 === gS ? void 0 : gS.kind)
        }))))
      }), [SS.message, ES]), (0, tS.useEffect)((() => {
        PS((SS => gX(SS, ((SS, HS) => hb(null === GS || void 0 === GS ? void 0 : GS[SS]) === HS.snapshot))))
      }), [IS, GS]);
      const LS = Object.keys(nS).length > 0;
      (0, tS.useEffect)((() => {
        if (!LS) return;
        const SS = setInterval((() => {
          OS((SS => SS + 1));
          const SS = Date.now(),
            {
              pending: HS,
              items: gS
            } = vS.current,
            tS = Object.keys(HS).filter((gS => SS - HS[gS].at >= 12e3));
          if (0 === tS.length) return;
          const bS = tS.some((SS => {
            var tS, bS;
            return "search" !== (null === gS || void 0 === gS || null === (tS = gS[SS]) || void 0 === tS || null === (bS = tS.smp) || void 0 === bS ? void 0 : bS.kind) || HS[SS].resend
          }));
          for (const XS of tS) cS.current[XS] = SS;
          PS((SS => gX(SS, (SS => !tS.includes(SS))))), bS && ES(aS("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(SS)
        }
      }), [LS]), (0, tS.useEffect)((() => {
        PS({})
      }), [KS]), (0, tS.useEffect)((() => {
        uS || hS(!1)
      }), [uS]);
      const YS = (0, tS.useCallback)((function(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: tS,
            pending: bS,
            canAfford: XS,
            buy: xS
          } = vS.current, NS = null === tS || void 0 === tS ? void 0 : tS[SS];
          if (!NS || SS in bS || !1 === NS.canBuy) return !1;
          if (!XS(NS, (0, yt.b)(NS, HS))) return !1;
          xS(SS, NS, HS);
          const qS = {
            snapshot: hb(NS),
            at: Date.now(),
            resend: gS
          };
          return vS.current.pending = {
            ...vS.current.pending,
            [SS]: qS
          }, PS((HS => ({
            ...HS,
            [SS]: qS
          }))), !0
        }), []),
        AS = (0, tS.useMemo)((() => ({
          shopInfo: IS,
          categoryKey: KS,
          canAfford: SS.canAfford,
          isPending: SS => SS in nS,
          gaveUpAt: SS => {
            var HS;
            return null !== (HS = cS.current[SS]) && void 0 !== HS ? HS : 0
          },
          act: YS,
          notify: ES
        })), [IS, KS, SS.canAfford, nS, YS, ES]),
        yS = Math.min(...Object.values(nS).map((SS => SS.at))),
        VS = LS && Date.now() - yS > 1500,
        iS = QS.length > 1,
        WS = null !== (gS = null === (bS = IS[KS]) || void 0 === bS ? void 0 : bS.customTitle) && void 0 !== gS ? gS : KS,
        zS = null === (qS = IS[KS]) || void 0 === qS ? void 0 : qS.description;
      let US = null;
      return "market" === jS ? US = (0, fS.jsx)(Bb, {}) : "sell" === jS ? US = (0, fS.jsx)(Rb, {}) : "collect" === jS ? US = (0, fS.jsx)(ob, {}) : "orders" === jS ? US = (0, fS.jsx)(eb, {}) : "myOrders" === jS && (US = (0, fS.jsx)(rb, {})), (0, fS.jsx)(Zb.Provider, {
        value: AS,
        children: (0, fS.jsx)("div", {
          className: "SmpShopHost",
          hidden: !CS,
          children: (0, fS.jsxs)("div", {
            className: "SmpShop",
            children: [(0, fS.jsx)("header", {
              className: "SmpHeader",
              children: (0, fS.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, fS.jsxs)("h2", {
                  children: [jS && (0, fS.jsx)(NS.d, {
                    name: HX[jS]
                  }), aS(WS)]
                }), zS && (0, fS.jsx)("p", {
                  children: (0, fS.jsx)(zt.c, {
                    text: zS
                  })
                })]
              })
            }), (0, fS.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: uS && US
            }), (0, fS.jsxs)("button", {
              type: "button",
              className: XS()("SmpStatus", {
                SmpStatusWaiting: LS,
                SmpStatusFresh: !LS && null !== ZS,
                SmpStatusHasHistory: iS
              }),
              "aria-live": "polite",
              "aria-expanded": iS ? wS : void 0,
              onClick: () => {
                iS && hS((SS => !SS))
              },
              children: [LS ? (0, fS.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, fS.jsx)(Xb, {}), aS(VS ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : QS[0] ? (0, fS.jsx)("span", {
                className: "SmpStatusText",
                children: (0, fS.jsx)(zt.c, {
                  text: QS[0].text
                })
              }, QS[0].id) : (0, fS.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: aS("smpShop:ready")
              }), iS && (0, fS.jsx)("small", {
                children: aS("smpShop:recentMessages", {
                  count: QS.length
                })
              })]
            }), wS && iS && (0, fS.jsx)("div", {
              className: "SmpStatusHistory",
              children: QS.map((SS => (0, fS.jsx)("div", {
                children: (0, fS.jsx)(zt.c, {
                  text: SS.text
                })
              }, SS.id)))
            })]
          })
        })
      })
    }
    class bX {
      constructor(SS) {
        this.info = SS
      }
      static fromShopInfo(SS) {
        const HS = {};
        for (const gS in SS) {
          const tS = !0 === SS[gS].redDot && !0 !== SS[gS].forceRemoveRedDot;
          HS[gS] = {
            redDot: tS,
            items: {}
          };
          for (const bS in SS[gS].items) {
            const tS = SS[gS].items[bS],
              XS = !0 === tS.redDot && !0 !== tS.forceRemoveRedDot;
            HS[gS].items[bS] = {
              redDot: XS
            }
          }
        }
        return new bX(HS)
      }
      anyCategoryHasRedDots() {
        for (const SS in this.info)
          if (this.categoryHasRedDot(SS)) return !0;
        return !1
      }
      doesCategoryExist(SS) {
        return !(0, Sg.K)(this.info[SS])
      }
      categoryHasRedDot(SS) {
        return !0 === this.info[SS].redDot
      }
      updateCategoryRedDot(SS, HS) {
        this.info[SS].redDot = HS
      }
      doesItemExist(SS, HS) {
        return this.doesCategoryExist(SS) && !(0, Sg.K)(this.info[SS].items[HS])
      }
      itemHasRedDot(SS, HS) {
        return !0 === this.info[SS].items[HS].redDot
      }
      updateItemRedDot(SS, HS, gS) {
        this.info[SS].items[HS].redDot = gS
      }
      shallowCopy() {
        return new bX(this.info)
      }
    }

    function XX(SS, HS) {
      return `${SS}\x1f${HS}`
    }

    function xX(SS, HS) {
      return !(0, Sg.K)(HS) && !(0, Sg.K)(SS) && HS in SS
    }
    const NX = (0, tS.memo)((function(SS) {
      var HS, gS;
      let {
        show: bS
      } = SS;
      const xS = (0, dH.g)("players", aX),
        NS = (0, dH.g)("players", KX),
        IS = (0, Ft.e)(),
        [aS, KS] = (0, tS.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: bX.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        GS = (0, tS.useRef)(""),
        CS = (0, tS.useRef)(null),
        PS = (0, tS.useRef)(null),
        QS = (0, tS.useRef)(0),
        DS = (0, tS.useRef)(void 0),
        wS = (0, tS.useRef)(null),
        hS = (0, tS.useRef)(aS),
        JS = aS.redDotInfo.anyCategoryHasRedDots(),
        [OS, cS] = (0, tS.useState)(null),
        vS = (0, tS.useRef)(!1);
      let ES = !1,
        LS = 0,
        YS = 0;
      if (aS.currencyAmounts) {
        for (const SS in aS.currencyAmounts) {
          var AS;
          const HS = aS.currencyAmounts[SS];
          HS.hidden || (LS++, (null === (AS = HS.subtext) || void 0 === AS ? void 0 : AS.length) > 0 && YS++)
        }
        ES = LS + YS > 4
      }(0, tS.useEffect)((() => {
        Hg.k.cj("showShopIconRedDot", JS, !0)
      }), [JS]), (0, tS.useEffect)((() => {
        nS.gameBridge.send("setShopOpen", bS), bS || (clearTimeout(DS.current), KS((SS => SS.awaitingPurchase ? {
          ...SS,
          awaitingPurchase: !1
        } : SS)))
      }), [bS]), (0, tS.useEffect)((() => () => {
        nS.gameBridge.send("setShopOpen", !1), clearTimeout(DS.current)
      }), []), (0, tS.useEffect)((() => {
        hS.current = aS
      }), [aS]), (0, tS.useEffect)((() => {
        if (null === OS) return;
        return (0, Bt.d)("pointerdown", (SS => {
          const HS = SS.target;
          null !== HS && void 0 !== HS && HS.closest(".ShopItem") || cS(null)
        }))
      }), [OS]);
      const yS = SS => {
          KS((HS => ({
            ...HS,
            ...SS
          })))
        },
        VS = SS => {
          var HS;
          clearTimeout(null === (HS = aS.onBoughtInfo) || void 0 === HS ? void 0 : HS.timeout);
          const gS = setTimeout((() => {
            yS({
              onBoughtInfo: null
            })
          }), 3e3);
          GS.current = SS, yS({
            onBoughtInfo: {
              text: SS,
              timeout: gS,
              categoryKey: CS.current
            }
          })
        },
        iS = SS => {
          const {
            shopInfo: HS,
            userInputsPerItem: gS,
            redDotInfo: tS,
            autoSelectCategory: XS
          } = function(SS, HS, gS, tS, bS, XS) {
            if ((0, Sg.K)(SS) || 0 === Object.keys(SS).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: bX.fromShopInfo({}),
              autoSelectCategory: null
            };
            const xS = dS.m[dS.r].adConfig.showRewardedAds,
              NS = {};
            let qS = null;
            for (const GS in SS) {
              const HS = SS[GS],
                gS = {};
              let tS = !1;
              for (const SS in HS.items) {
                const bS = HS.items[SS];
                (0, yt.i)(bS, xS) && (gS[SS] = bS, tS = !0)
              }
              tS && (NS[GS] = {
                ...HS,
                items: gS
              }, !0 === HS.autoSelectCategory && (qS = GS))
            }
            const uS = {},
              IS = (SS, HS, tS, xS) => {
                var NS, qS;
                const IS = XX(SS, HS),
                  fS = null !== (NS = gS[IS]) && void 0 !== NS ? NS : gS[HS];
                if (null !== (qS = xS.userInput) && void 0 !== qS && qS.type) switch (xS.userInput.type) {
                  case "dropdown": {
                    var kS;
                    const SS = !fS || !xS.userInput.dropdownOptions.some((SS => (0, yt.c)(SS) === fS)),
                      HS = xS.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === tS || void 0 === tS || null === (kS = tS.userInput) || void 0 === kS ? void 0 : kS.type) || JSON.stringify(tS.userInput.dropdownOptions) !== JSON.stringify(xS.userInput.dropdownOptions)),
                      gS = xS.userInput,
                      bS = !(0, Sg.K)(gS.initialValue) && gS.dropdownOptions.some((SS => (0, yt.c)(SS) === gS.initialValue));
                    var aS;
                    return void(SS || HS ? bS ? uS[IS] = null !== (aS = xS.userInput.initialValue) && void 0 !== aS ? aS : null : xS.userInput.dropdownOptions.length > 0 ? uS[IS] = (0, yt.c)(xS.userInput.dropdownOptions[0]) : uS[IS] = null : uS[IS] = fS)
                  }
                  case "text":
                  case "number":
                    var KS, jS, GS;
                    return void((null === tS || void 0 === tS ? void 0 : tS.userInput) !== xS.userInput ? uS[IS] = null !== (KS = null !== (jS = xS.userInput.initialValue) && void 0 !== jS ? jS : fS) && void 0 !== KS ? KS : "" : uS[IS] = null !== (GS = null !== fS && void 0 !== fS ? fS : xS.userInput.initialValue) && void 0 !== GS ? GS : "");
                  case "color":
                    var CS, nS, PS;
                    return void((null === tS || void 0 === tS ? void 0 : tS.userInput) !== xS.userInput ? uS[IS] = null !== (CS = null !== (nS = xS.userInput.initialValue) && void 0 !== nS ? nS : fS) && void 0 !== CS ? CS : "#000000" : uS[IS] = null !== (PS = null !== fS && void 0 !== fS ? fS : xS.userInput.initialValue) && void 0 !== PS ? PS : "#000000");
                  case "player": {
                    const SS = (0, yt.e)(bS, XS, xS.userInput);
                    return void(fS && SS.includes(fS) ? uS[IS] = fS : uS[IS] = SS.length > 0 ? SS[0] : null)
                  }
                }
              };
            for (const GS in NS)
              for (const SS in NS[GS].items) {
                var fS;
                const gS = NS[GS].items[SS];
                IS(GS, SS, null === (fS = HS[GS]) || void 0 === fS ? void 0 : fS.items[SS], gS)
              }
            const kS = bX.fromShopInfo(NS);
            for (const GS in NS) {
              var aS;
              if (tS.doesCategoryExist(GS)) {
                (null === (aS = HS[GS]) || void 0 === aS ? void 0 : aS.redDot) === NS[GS].redDot && kS.updateCategoryRedDot(GS, tS.categoryHasRedDot(GS));
                for (const SS in NS[GS].items) {
                  var KS, jS;
                  tS.doesItemExist(GS, SS) && (null === (KS = HS[GS]) || void 0 === KS || null === (jS = KS.items[SS]) || void 0 === jS ? void 0 : jS.redDot) === NS[GS].items[SS].redDot && kS.updateItemRedDot(GS, SS, tS.itemHasRedDot(GS, SS))
                }
              }
            }
            return {
              shopInfo: NS,
              userInputsPerItem: uS,
              redDotInfo: kS,
              autoSelectCategory: qS
            }
          }(SS, aS.shopInfo, aS.userInputsPerItem, aS.redDotInfo, xS, NS), qS = {
            shopInfo: HS,
            userInputsPerItem: gS,
            redDotInfo: tS
          };
          if (null === XS || bS)
            if (HS[aS.selectedCategoryKey]) qS.selectedCategoryKey = aS.selectedCategoryKey;
            else {
              const SS = Tt(HS);
              qS.selectedCategoryKey = SS.length > 0 ? SS[0] : null
            }
          else qS.selectedCategoryKey = XS;
          return 0 === Object.keys(HS).length && bS && ZS.b.set({
            openEverythingMenuName: null
          }), qS
        },
        zS = (SS, HS, gS) => {
          const tS = aS.selectedCategoryKey,
            bS = XX(tS, SS),
            XS = null !== gS && void 0 !== gS ? gS : aS.userInputsPerItem[bS],
            xS = {
              categoryKey: tS,
              itemKey: SS,
              userInput: XS
            };
          if (CS.current = tS, HS.isRewardedAd) {
            if (Date.now() - QS.current < 5e3) return;
            (0, NH.db)((() => {
              var gS, tS, XS;
              console.log("bought rewarded ad");
              const NS = xS.categoryKey ? null === (gS = hS.current.shopInfo[xS.categoryKey]) || void 0 === gS ? void 0 : gS.items[SS] : null;
              if (!NS || !NS.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (tS = HS.userInput) || void 0 === tS ? void 0 : tS.type) === (null === NS || void 0 === NS || null === (XS = NS.userInput) || void 0 === XS ? void 0 : XS.type) ? (xS.userInput = hS.current.userInputsPerItem[bS], nS.gameBridge.send("buyShopItem", xS), HS.onBoughtMessage && VS(HS.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), QS.current = Date.now()
          } else {
            nS.gameBridge.send("buyShopItem", xS), yS({
              awaitingPurchase: !0
            }), clearTimeout(DS.current), DS.current = setTimeout((() => {
              wS.current = null, yS({
                awaitingPurchase: !1
              })
            }), 1e3);
            const SS = (0, yt.b)(HS, XS);
            if (wS.current = null, !isNaN(SS) && xX(aS.currencyAmounts, HS.currency)) {
              0 !== SS && (wS.current = {
                currency: HS.currency,
                amountBefore: aS.currencyAmounts[HS.currency].amount
              });
              const gS = {
                ...aS.currencyAmounts
              };
              gS[HS.currency].amount -= SS, yS({
                currencyAmounts: gS
              })
            }
            HS.onBoughtMessage && VS(HS.onBoughtMessage)
          }
        },
        US = (SS, HS) => {
          if (null === HS || !SS.shopInfo[HS]) return SS;
          let gS = SS.redDotInfo;
          return gS.categoryHasRedDot(HS) && (gS.updateCategoryRedDot(HS, !1), gS = gS.shallowCopy()), {
            ...SS,
            selectedCategoryKey: HS,
            redDotInfo: gS
          }
        },
        pS = SS => {
          KS((HS => US(HS, SS)))
        };
      (0, VH.g)(Mt.i, (() => {
        KS((SS => {
          const HS = (0, Mt.k)(Tt(SS.shopInfo), SS.selectedCategoryKey, (HS => (0, Mt.h)(SS.shopInfo[HS].items)));
          return HS === SS.selectedCategoryKey ? SS : US(SS, HS)
        }))
      })), (0, VH.g)("showShopFromServer", (SS => {
        let {
          toggle: HS,
          yb: gS
        } = SS;
        gS && pS(gS), 0 === Object.keys(aS.shopInfo).length || HS && bS ? ZS.b.set({
          openEverythingMenuName: null
        }) : ZS.b.set({
          openEverythingMenuName: IH.q.SHOP
        })
      })), (0, VH.g)("closeShopOnDamaged", (() => {
        bS && ZS.b.set({
          openEverythingMenuName: null
        })
      })), (0, VH.g)("overShopInfo", (SS => {
        VS(SS)
      })), (0, jS.e)("currencyAmounts", (SS => {
        var HS;
        const gS = wS.current;
        gS && (null === SS || void 0 === SS || null === (HS = SS[gS.currency]) || void 0 === HS ? void 0 : HS.amount) === gS.amountBefore ? yS({
          currencyAmounts: SS
        }) : (wS.current = null, yS({
          currencyAmounts: SS,
          awaitingPurchase: !1
        }))
      })), (0, jS.e)("shopInfo", (SS => {
        yS({
          ...iS(SS),
          awaitingPurchase: !1
        })
      }));
      const sS = (0, tS.useRef)({
        playerIds: xS,
        localPlayerId: NS
      });
      (0, tS.useEffect)((() => {
        sS.current.playerIds === xS && sS.current.localPlayerId === NS || (sS.current = {
          playerIds: xS,
          localPlayerId: NS
        }, KS((SS => {
          const HS = iS(SS.shopInfo);
          return {
            ...SS,
            ...HS
          }
        })))
      }), [xS, NS]);
      const BS = aS.selectedCategoryKey,
        MS = (SS, HS) => {
          var gS, tS;
          return (isNaN(HS) || (0, Sg.K)(SS.currency) || xX(aS.currencyAmounts, SS.currency) && HS <= aS.currencyAmounts[SS.currency].amount) && (null === (gS = SS.canBuy) || void 0 === gS || gS) && !(null !== (tS = SS.hidden) && void 0 !== tS && tS)
        },
        FS = (SS, HS) => {
          var gS, tS, bS;
          const xS = XX(BS, SS),
            NS = aS.shopInfo[BS].items[SS],
            IS = aS.userInputsPerItem[xS],
            kS = (0, yt.b)(NS, IS),
            KS = MS(NS, kS),
            jS = NS.enchant,
            GS = jS ? (0, WS.bb)(null !== (gS = NS.customTitle) && void 0 !== gS ? gS : SS, {
              colour: WS.$[jS.tier]
            }) : null !== (tS = NS.customTitle) && void 0 !== tS ? tS : SS,
            CS = HS => {
              const gS = null !== HS && void 0 !== HS ? HS : IS,
                tS = void 0 !== HS ? (0, yt.b)(NS, HS) : kS;
              MS(NS, tS) && null !== gS && zS(SS, NS, HS);
              let bS = aS.redDotInfo;
              bS.itemHasRedDot(BS, SS) && (bS.updateItemRedDot(BS, SS, !1), bS = bS.shallowCopy()), yS({
                redDotInfo: bS
              })
            };
          return (0, fS.jsxs)("div", {
            className: XS()("ShopItem", {
              ShopItemNoInput: !NS.userInput,
              ShopItemNoInputCanBuy: !NS.userInput && KS,
              ShopItemNoInputSelected: NS.isSelected,
              ShopItemEnchant: !!jS
            }),
            "data-pad-focusable": !NS.userInput || void 0,
            "data-pad-unavailable": !NS.userInput && !KS || void 0,
            "data-pad-repeat": null !== (bS = (0, Mt.e)(NS)) && void 0 !== bS ? bS : void 0,
            "data-pad-repeat-wait": aS.awaitingPurchase || void 0,
            onClick: () => {
              if (jS && vS.current) {
                if (OS !== xS) return void cS(xS);
                cS(null)
              }
              NS.userInput || CS()
            },
            onPointerDown: SS => {
              jS && (vS.current = (0, it.v)(SS))
            },
            onPointerEnter: SS => {
              jS && !(0, it.v)(SS) && cS(xS)
            },
            onPointerLeave: SS => {
              jS && !(0, it.v)(SS) && cS((SS => SS === xS ? null : SS))
            },
            style: {
              zIndex: Object.keys(aS.shopInfo[BS].items).length - HS
            },
            children: [aS.redDotInfo.itemHasRedDot(BS, SS) && (0, fS.jsx)(qS.e, {
              top: "-6px",
              right: "-6px"
            }), NS.badge && (0, fS.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, fS.jsx)("div", {
                className: XS()("ShopBadgeMain", NS.badge.type),
                children: (0, fS.jsx)(zt.c, {
                  text: NS.badge.text
                })
              })
            }), (0, fS.jsx)("div", {
              className: "ShopItemLeft",
              children: NS.image && (0, fS.jsx)(qX, {
                item: NS,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, fS.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, fS.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, fS.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, fS.jsx)(zt.c, {
                    text: GS
                  })
                }), (0, fS.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, fS.jsx)(zt.c, {
                    text: NS.description
                  })
                })]
              }), NS.userInput && (0, fS.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: SS => {
                  SS.stopPropagation()
                },
                children: [(0, fS.jsx)(fX, {
                  item: NS,
                  currInput: IS,
                  updateInput: HS => {
                    ((SS, HS, gS) => {
                      const tS = XX(SS, HS),
                        bS = {
                          ...aS.userInputsPerItem
                        };
                      bS[tS] = gS, yS({
                        userInputsPerItem: bS
                      })
                    })(BS, SS, HS)
                  },
                  onSubmit: SS => {
                    CS(SS)
                  }
                }), ("dropdown" !== NS.userInput.type || !NS.userInput.autoSubmit) && (0, fS.jsx)(uS.g, {
                  className: "ItemCostButton",
                  disabled: !KS && null !== IS,
                  onClick: () => {
                    CS()
                  },
                  children: (0, fS.jsx)(IX, {
                    item: NS,
                    cost: kS,
                    currencyAmounts: aS.currencyAmounts
                  })
                })]
              })]
            }), !NS.userInput && (0, fS.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, fS.jsx)(IX, {
                item: NS,
                cost: kS,
                currencyAmounts: aS.currencyAmounts
              })
            }), jS && OS === xS && (0, fS.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, fS.jsx)(zt.c, {
                text: GS
              }), (0, fS.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, fS.jsx)(zt.c, {
                  text: (0, Vt.e)("", jS.enchantments, jS.enchantmentData)
                })
              })]
            })]
          }, xS)
        },
        RS = function(SS) {
          for (const HS in SS)
            if (SS[HS].smp) return !0;
          return !1
        }(aS.shopInfo),
        TS = kb(aS.shopInfo, BS);
      return (0, fS.jsx)(Lt.b, {
        className: "Menu ShopBody",
        show: bS,
        children: 0 !== Object.keys(aS.shopInfo).length && (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, fS.jsx)(kS, {
              items: Tt(aS.shopInfo).map((SS => {
                var HS;
                return {
                  id: SS,
                  title: null !== (HS = aS.shopInfo[SS].customTitle) && void 0 !== HS ? HS : SS,
                  redDot: aS.redDotInfo.categoryHasRedDot(SS)
                }
              })),
              link: IS ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Rt.f)({
                    page: (0, Rt.c)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: BS,
              onClick: pS,
              padStartsOnTab: (0, Mt.g)(BS)
            }), (0, fS.jsx)("div", {
              className: "MenuSideBarFooter",
              children: aS.currencyAmounts && Object.keys(aS.currencyAmounts).map((SS => {
                var HS;
                const gS = aS.currencyAmounts[SS];
                return gS.hidden ? null : (0, fS.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (ES ? "SmallText" : ""),
                  children: [(0, fS.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, fS.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: gS.iconColour
                      },
                      children: (0, fS.jsx)(jX, {
                        iconName: gS.icon
                      })
                    }), "\xa0", (0, At.e)(gS.amount, 6)]
                  }), (null === (HS = gS.subtext) || void 0 === HS ? void 0 : HS.length) > 0 && (0, fS.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, fS.jsx)(zt.c, {
                      text: gS.subtext
                    })
                  })]
                }, SS)
              }))
            })]
          }), (0, fS.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [RS && (0, fS.jsx)(tX, {
              show: bS,
              shopInfo: aS.shopInfo,
              selectedCategoryKey: BS,
              buy: (SS, HS, gS) => {
                zS(SS, HS, gS)
              },
              canAfford: MS,
              message: aS.onBoughtInfo
            }), null === TS && (0, fS.jsxs)(fS.Fragment, {
              children: [(0, fS.jsx)("div", {
                className: XS()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== aS.onBoughtInfo
                }),
                children: (0, fS.jsx)(zt.c, {
                  text: GS.current
                })
              }), (0, fS.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, fS.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (HS = aS.shopInfo[BS]) || void 0 === HS ? void 0 : HS.description) && (0, fS.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, fS.jsx)(zt.c, {
                      text: aS.shopInfo[BS].description
                    })
                  }), bS && (0, fS.jsx)("div", {
                    className: "ShopItems",
                    ref: PS,
                    "data-pad-initial-area": !0,
                    children: Tt(null === (gS = aS.shopInfo[BS]) || void 0 === gS ? void 0 : gS.items).map(((SS, HS) => FS(SS, HS)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function qX(SS) {
      let {
        item: HS,
        minWidth: gS,
        minHeight: tS
      } = SS;
      const {
        image: bS,
        schematicId: XS,
        imageColour: xS
      } = HS;
      if (XS) return (0, fS.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${gS}rem`,
          height: `${tS}rem`
        },
        children: (0, fS.jsx)(Ut.d, {
          game: {
            schematicId: XS
          }
        })
      });
      var qS, uS;
      if ((0, Wt.g)(bS)) return (0, fS.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${gS}rem`,
          height: "0",
          minHeight: `${tS}rem`
        },
        children: (0, fS.jsx)(Wt.e, {
          itemName: bS,
          amount: null !== (qS = HS.amount) && void 0 !== qS ? qS : 0,
          amountFontSize: tS / 4 + "rem",
          enchantmentTier: null === (uS = HS.enchant) || void 0 === uS ? void 0 : uS.tier
        })
      });
      const IS = bS.slice(-4);
      return ".jpg" === IS || ".png" === IS ? (0, fS.jsx)(uX, {
        image: bS,
        minWidth: gS
      }) : (0, fS.jsx)(NS.d, {
        name: bS,
        className: "SelectedItemImage",
        style: {
          color: xS
        }
      })
    }

    function uX(SS) {
      let {
        image: HS,
        minWidth: gS
      } = SS;
      const {
        gameNameWithVariation: tS
      } = (0, dH.h)("connectedGame"), bS = HS.endsWith(".jpg");
      return (0, fS.jsx)("img", {
        className: XS()({
          ShopPixelImage: !bS
        }),
        style: {
          width: `${bS?1.6*gS:gS}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,WS.Kb)(tS)}/${HS}`,
        alt: HS,
        draggable: !1
      })
    }

    function IX(SS) {
      let {
        item: HS,
        cost: gS,
        currencyAmounts: tS
      } = SS;
      const bS = !isNaN(gS) && 0 !== gS && xX(tS, HS.currency);
      let XS = null;
      return HS.buyButtonText ? XS = HS.buyButtonText : bS ? (XS = gS, HS.sell && (XS = -1 * gS), XS = XS.toString()) : 0 === gS ? XS = "Free" : HS.isRewardedAd && (XS = "Watch ad"), (0, Sg.K)(XS) || " " === XS ? null : (0, fS.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [bS && (0, fS.jsx)("div", {
          style: {
            color: tS[HS.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, fS.jsx)(jX, {
            iconName: tS[HS.currency].icon
          })
        }), (0, fS.jsx)("div", {
          className: "BuyItemCost",
          children: (0, fS.jsx)(zt.c, {
            text: XS
          })
        })]
      })
    }

    function fX(SS) {
      let {
        item: HS,
        currInput: gS,
        updateInput: bS,
        onSubmit: XS
      } = SS;
      const {
        t: NS
      } = (0, xS.F)(), qS = (0, tS.useRef)(null);
      if ((0, tS.useEffect)((() => {
          const SS = qS.current;
          SS && SS.value !== gS && document.activeElement !== SS && (SS.value = null !== gS && void 0 !== gS ? gS : "")
        }), [gS]), !HS.userInput) return null;
      let uS = HS.userInput;
      if (CS.featureFlags.sanitizeShopInput && "text" === HS.userInput.type && (uS = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === uS.type || "number" === uS.type) {
        var IS, kS;
        console.assert(void 0 !== gS, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(HS)}`);
        const SS = "text" === uS.type && uS.wordCharsOnly;
        return (0, fS.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, fS.jsx)(DS.e, {
            className: "ShopItemUserInputText",
            placeholderText: NS(uS.placeholderText),
            defaultValue: gS,
            domRef: qS,
            onValueChange: (HS, gS) => {
              !0 === SS && (HS = (0, st.hb)(HS)), qS.current.value = HS, bS(HS)
            },
            onEnter: XS,
            type: uS.type
          }, (null !== (IS = uS.initialValue) && void 0 !== IS ? IS : "") + (null !== (kS = uS.placeholderText) && void 0 !== kS ? kS : ""))
        })
      }
      if ("dropdown" === uS.type) {
        console.assert(void 0 !== gS, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(HS)}`);
        const SS = uS.autoSubmit;
        return (0, fS.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, fS.jsx)(ZH.e, {
            options: uS.dropdownOptions.map((SS => (0, yt.c)(SS))),
            value: gS,
            onChange: HS => {
              let {
                value: gS
              } = HS;
              bS(gS), SS && XS(gS)
            }
          })
        })
      }
      return "player" === uS.type ? (0, fS.jsx)(kX, {
        userInput: uS,
        currInput: gS,
        updateInput: bS
      }) : "color" === uS.type ? (0, fS.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, fS.jsx)("input", {
          type: "color",
          value: gS,
          onChange: SS => {
            bS(SS.target.value)
          }
        })
      }) : null
    }

    function kX(SS) {
      let {
        userInput: HS,
        currInput: gS,
        updateInput: tS
      } = SS;
      const bS = (0, dH.h)("players"),
        XS = (0, dH.h)("hiddenPlayerNames"),
        xS = (0, yt.e)(bS.ids, bS.localId, HS);
      return (0, fS.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, fS.jsx)(ZH.e, {
          options: xS.map((SS => {
            const {
              name: HS
            } = bS.byId[SS];
            return {
              value: SS,
              label: null === HS ? "" : (0, pt.g)(HS, XS)
            }
          })),
          value: gS,
          onChange: SS => {
            let {
              value: HS
            } = SS;
            tS(HS)
          }
        })
      })
    }

    function aX(SS) {
      let {
        ids: HS
      } = SS;
      return HS
    }

    function KX(SS) {
      let {
        localId: HS
      } = SS;
      return HS
    }

    function jX(SS) {
      let {
        iconName: HS
      } = SS;
      return nS.gameBridge.lookup("isItemName", HS) ? (0, fS.jsx)(Wt.e, {
        itemName: HS,
        amount: 1
      }) : (0, fS.jsx)(NS.d, {
        name: HS,
        className: "2x"
      })
    }
    var GX = gS(1733);
    const CX = (0, gS(1477).e)((SS => SS.PadLobbyShortcuts)),
      nX = (0, tS.lazy)((() => Promise.resolve().then((() => gS(4781))).then((SS => ({
        default: SS.Lobbyleaderboard
      }))))),
      PX = (0, tS.lazy)((() => gS.e(220).then((() => gS(41089))).then((SS => ({
        default: SS.LobbyManageView
      })))));

    function QX(SS) {
      let {
        show: HS
      } = SS;
      return HS ? (0, fS.jsx)(DX, {}) : null
    }

    function DX() {
      const SS = (0, Ft.e)();
      return (0, fS.jsxs)(fS.Fragment, {
        children: [(0, fS.jsx)(CX, {}), (0, fS.jsxs)(tS.Suspense, {
          fallback: (0, fS.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, fS.jsx)(wS.c, {})
          }),
          children: [SS && (0, fS.jsx)(PX, {
            leaderboard: (0, fS.jsx)(nX, {})
          }), !SS && (0, fS.jsx)(nX, {})]
        })]
      })
    }
    var wX = gS(1653),
      hX = gS(3183),
      ZX = gS(1844),
      JX = gS(3239),
      OX = gS(2825),
      dX = gS(1581),
      cX = gS(1534),
      vX = gS(3154),
      EX = gS(3175),
      LX = gS(2453);
    const YX = "storeRecentGiftRecipients",
      AX = new Map;

    function yX() {
      try {
        const SS = tg.g.getItem(YX);
        return Array.isArray(SS) ? SS.filter((SS => "string" === typeof(null === SS || void 0 === SS ? void 0 : SS.name) && SS.name.length > 0)).map((SS => ({
          name: SS.name,
          cosmetics: SS.cosmetics && "object" === typeof SS.cosmetics ? SS.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function VX(SS) {
      var HS;
      const [gS, bS] = (0, tS.useState)(""), [XS, xS] = (0, tS.useState)("search"), [NS, qS] = (0, tS.useState)(null), [uS, IS] = (0, tS.useState)(null), fS = (0, tS.useRef)(null), kS = (0, tS.useRef)(null);
      (0, tS.useEffect)((() => () => {
        fS.current && clearTimeout(fS.current)
      }), []);
      const aS = null !== (HS = null === NS || void 0 === NS ? void 0 : NS.name) && void 0 !== HS ? HS : null;

      function KS() {
        fS.current && (clearTimeout(fS.current), fS.current = null)
      }(0, tS.useEffect)((() => {
        if (null === aS || SS === cS.NULL_USER_CONTEXT) return;
        const HS = aS.toLowerCase();
        if (HS === SS.getPlayerName().toLowerCase()) return void IS({
          name: aS,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const gS = AX.get(HS);
        if (gS) return void IS({
          name: aS,
          result: gS
        });
        let tS = !1;
        return async function(SS, HS) {
          try {
            const gS = await (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: HS
            }, {
              retries: 1
            }, SS.getMetricsCookies());
            if ("boolean" !== typeof(null === gS || void 0 === gS ? void 0 : gS.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(gS)}`);
            return gS
          } catch (gS) {
            return console.error("Failed to look up gift recipient:", gS), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(SS, aS).catch((SS => (console.error("Gift recipient lookup failed:", SS), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((SS => {
          !0 !== SS.giftRecipientFound && "store:giftRecipientLookupFailed" === SS.giftRecipientError || AX.set(HS, SS), tS || IS({
            name: aS,
            result: SS
          })
        })), () => {
          tS = !0
        }
      }), [aS, SS]);
      const jS = (0, tS.useMemo)((() => {
        const SS = gS.trim();
        if (!SS) return {
          status: "none"
        };
        if (!NS || NS.name !== SS || (null === uS || void 0 === uS ? void 0 : uS.name) !== NS.name) return {
          status: "pending",
          name: SS
        };
        const HS = uS.result;
        return !1 === HS.giftRecipientFound ? {
          status: "error",
          name: NS.name,
          error: HS.giftRecipientError
        } : {
          status: "found",
          name: HS.giftRecipientName,
          ownedPacks: HS.giftRecipientOwnedPacks,
          hasSuperRank: HS.giftRecipientHasSuperRank,
          isSubscriber: HS.giftRecipientIsSubscriber
        }
      }), [gS, NS, uS]);
      (0, tS.useEffect)((() => {
        "found" === jS.status && "typed" === (null === NS || void 0 === NS ? void 0 : NS.source) && kS.current !== jS.name && (kS.current = jS.name, (0, eS.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [jS, NS]);
      const GS = (null === uS || void 0 === uS ? void 0 : uS.name) === (null === NS || void 0 === NS ? void 0 : NS.name) ? null === uS || void 0 === uS ? void 0 : uS.result : null,
        CS = !0 === (null === GS || void 0 === GS ? void 0 : GS.giftRecipientFound) ? GS.giftRecipientCosmetics : null;
      return {
        query: gS,
        via: XS,
        recipient: jS,
        recipientCosmetics: CS,
        type: function(SS) {
          bS(SS), xS("search"), KS();
          const HS = SS.trim();
          HS ? fS.current = setTimeout((() => {
            qS({
              name: HS,
              source: "typed"
            })
          }), 400) : qS(null)
        },
        choose: function(SS, HS) {
          KS(), bS(SS), xS("typed" === HS ? "search" : "prefilled" === HS ? "prefilled" : "suggestion"), qS({
            name: SS,
            source: HS
          }), "typed" !== HS && "prefilled" !== HS && (0, eS.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: HS
          })
        },
        clear: function() {
          KS(), bS(""), xS("search"), qS(null)
        },
        recordGift: function(SS, HS) {
          ! function(SS) {
            AX.delete(SS.toLowerCase())
          }(SS), IS((gS => {
            if (!gS || gS.name.toLowerCase() !== SS.toLowerCase() || !0 !== gS.result.giftRecipientFound || "superRank" === HS) return gS;
            const tS = gS.result.giftRecipientOwnedPacks;
            return {
              ...gS,
              result: {
                ...gS.result,
                giftRecipientOwnedPacks: tS.includes(HS) ? tS : [...tS, HS]
              }
            }
          }))
        }
      }
    }
    var iX = gS(2448),
      WX = gS(4784),
      zX = gS(278),
      UX = gS(3285);
    const pX = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var sX = gS(2394),
      BX = gS(656),
      MX = gS(2480),
      FX = gS(2725);

    function RX(SS) {
      let {
        cosmetics: HS
      } = SS;
      return (0, fS.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, fS.jsx)(MX.e, {
          cosmetics: HS
        })
      })
    }

    function TX(SS, HS) {
      var gS, tS;
      const bS = null !== (gS = SS.friend) && void 0 !== gS ? gS : {
        isError: !1,
        name: SS.name,
        ranks: [],
        cosmetics: null !== (tS = SS.cosmetics) && void 0 !== tS ? tS : {},
        nameColour: BX.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return HS ? {
        ...bS,
        cosmetics: HS
      } : bS
    }

    function oX(SS) {
      let {
        pending: HS
      } = SS;
      return (0, fS.jsx)("span", {
        className: "StoreRecipientLoader",
        children: HS && (0, fS.jsx)(wS.c, {})
      })
    }

    function lX(SS) {
      var HS;
      let {
        selfName: gS,
        giftRecipient: bS,
        suggestionsVersion: qS,
        pulseSignal: IS,
        disabled: kS
      } = SS;
      const {
        t: aS
      } = (0, xS.F)(), KS = (0, sS.n)(), jS = (0, tS.useRef)(null), GS = (0, tS.useRef)(null), {
        query: nS,
        via: PS,
        recipient: QS,
        recipientCosmetics: wS
      } = bS, hS = (0, LX.o)(nS), ZS = (0, tS.useMemo)((() => {
        const SS = CS.featureFlags.useSocialFeatures ? KS.friends.filter((SS => !SS.isError)) : [];
        return (0, LX.h)({
          onlineFriends: (0, sS.f)(SS),
          recentRecipients: yX(),
          friends: SS,
          selfName: gS,
          max: 8
        })
      }), [KS.friends, gS, qS]), JS = nS.trim().toLowerCase(), OS = "search" !== PS && JS ? ZS.find((SS => SS.name.toLowerCase() === JS)) : void 0, dS = OS && "prefilled" === PS ? [OS, ...ZS.filter((SS => SS !== OS))] : ZS, cS = "" !== JS && !OS, vS = cS ? nS : "", ES = dS.length > 0;
      (0, tS.useEffect)((() => {
        jS.current && jS.current.value !== vS && (jS.current.value = vS)
      }), [vS]), (0, tS.useEffect)((() => {
        jS.current && (jS.current.disabled = kS)
      }), [kS, IS]);
      const LS = (0, tS.useRef)(0);

      function AS() {
        "self" !== hS && (0, eS.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), bS.clear()
      }

      function yS(SS) {
        var HS, gS;
        if (kS) return;
        if (" " === SS.key || "Enter" === SS.key) return SS.preventDefault(), void SS.currentTarget.click();
        const tS = Array.from(null !== (HS = null === (gS = GS.current) || void 0 === gS ? void 0 : gS.querySelectorAll("[role=radio]")) && void 0 !== HS ? HS : []),
          bS = tS.indexOf(SS.currentTarget);
        let XS;
        "ArrowRight" === SS.key || "ArrowDown" === SS.key ? XS = tS[(bS + 1) % tS.length] : "ArrowLeft" === SS.key || "ArrowUp" === SS.key ? XS = tS[(bS - 1 + tS.length) % tS.length] : "Home" === SS.key ? XS = tS[0] : "End" === SS.key && (XS = tS[tS.length - 1]), XS && (SS.preventDefault(), XS.focus(), XS.click())
      }(0, tS.useEffect)((() => {
        var SS;
        IS > LS.current && !kS && (LS.current = IS, null === (SS = jS.current) || void 0 === SS || SS.focus())
      }), [IS, kS]);
      const VS = "self" === hS,
        iS = null !== (HS = null === OS || void 0 === OS ? void 0 : OS.name) && void 0 !== HS ? HS : null,
        WS = "error" === QS.status ? QS.error : null,
        zS = "store:giftRecipientLookupFailed" === WS;
      return (0, fS.jsxs)("div", {
        className: XS()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: kS,
          StoreRecipientStripNoChips: !ES
        }),
        children: [(0, fS.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: aS("store:buyingFor")
        }), (0, fS.jsxs)("div", {
          ref: GS,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": aS("store:whoIsItFor"),
          children: [(0, fS.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": VS,
            tabIndex: kS || !VS && null !== iS ? -1 : 0,
            className: XS()("StoreRecipientMe", {
              StoreRecipientChecked: VS
            }),
            onClick: () => {
              kS || AS()
            },
            onKeyDown: yS,
            children: [(0, fS.jsx)(NS.d, {
              name: "user"
            }), " ", aS("store:me")]
          }), ES && (0, fS.jsx)("div", {
            className: "StoreRecipientChips",
            children: dS.map((SS => {
              const HS = SS === OS;
              return (0, fS.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": HS,
                tabIndex: !kS && HS ? 0 : -1,
                title: SS.name,
                className: XS()("StoreRecipientChip", {
                  StoreRecipientChecked: HS
                }),
                onClick: () => {
                  kS || function(SS) {
                    "gift" !== hS && (0, eS.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), bS.choose(SS.name, SS.kind)
                  }(SS)
                },
                onKeyDown: yS,
                children: (0, fS.jsx)(FX.g, {
                  playerSocialPreview: TX(SS, HS ? wS : null),
                  opensProfileCard: !1,
                  isFriend: null !== SS.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== SS.friend,
                  status: null === SS.friend ? null : void 0,
                  trailing: HS ? (0, fS.jsx)(oX, {
                    pending: "pending" === QS.status
                  }) : void 0
                })
              }, SS.name)
            }))
          })]
        }), (0, fS.jsxs)("div", {
          className: XS()("StoreRecipientSearch", {
            StoreRecipientChecked: cS,
            StoreRecipientSearchPulse: IS > 0 && !cS,
            StoreRecipientSearchError: null !== WS && !zS
          }),
          onClick: () => {
            var SS;
            null === (SS = jS.current) || void 0 === SS || SS.focus()
          },
          children: [cS && "found" === QS.status && wS && (0, fS.jsx)(RX, {
            cosmetics: wS
          }), !(cS && "found" === QS.status && wS) && (0, fS.jsx)(NS.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, fS.jsx)(DS.e, {
            className: "StoreRecipientSearchInput",
            domRef: jS,
            placeholderText: aS("store:searchName"),
            defaultValue: vS,
            maxLength: YS.g,
            onValueChange: function(SS) {
              "gift" !== hS && SS.trim() && (0, eS.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), bS.type(SS)
            },
            onEnter: () => {
              var SS;
              const HS = null === (SS = jS.current) || void 0 === SS ? void 0 : SS.value.trim();
              HS && bS.choose(HS, "typed")
            },
            blurOnEnter: !0
          }), cS && (0, fS.jsx)(oX, {
            pending: "pending" === QS.status
          }), cS && (0, fS.jsx)("div", {
            ...(0, uS.X)({
              disabled: kS
            }),
            "aria-label": aS("store:clearRecipient"),
            title: aS("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: SS => {
              SS.stopPropagation(), kS || AS()
            },
            children: (0, fS.jsx)(NS.d, {
              name: "xmark"
            })
          })]
        }, IS), WS && (0, fS.jsx)("div", {
          className: XS()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: zS
          }),
          role: "status",
          children: aS(WS)
        })]
      })
    }
    var mX = gS(2439),
      eX = gS(2370),
      rX = gS(3708),
      Sx = gS(3291),
      Hx = gS(2403);
    const gx = gS.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function tx() {
      (0, Hx.i)(gx, {
        lowPriority: !1
      })
    }

    function bx(SS) {
      let {
        onBack: HS,
        cta: gS,
        recipient: bS,
        afterCta: XS
      } = SS;
      const {
        t: qS
      } = (0, xS.F)(), [IS, kS] = (0, tS.useState)("starting"), aS = (0, tS.useRef)(null), KS = (0, zH.b)(), jS = (0, tS.useRef)(null), GS = (0, tS.useCallback)((() => {
        const SS = aS.current;
        null !== SS.error && SS.load();
        const HS = SS.play();
        jS.current = HS, HS.catch((SS => {
          (0, rX.d)("Failed to play Super Rank video", SS), KS.current && jS.current === HS && kS("failed")
        }))
      }), [KS]);
      return (0, tS.useEffect)((() => {
        const SS = aS.current;
        let HS;

        function gS() {
          clearTimeout(HS), HS = setTimeout(GS, 3e3)
        }
        return GS(), SS.addEventListener("ended", gS), () => {
          clearTimeout(HS), SS.removeEventListener("ended", gS)
        }
      }), [GS]), (0, fS.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, fS.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, fS.jsx)(uS.d, {
            className: "StoreDetailBackButton",
            onClick: HS,
            padBack: !0,
            children: qS("general:back")
          }), (0, fS.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, fS.jsx)(NS.d, {
              name: "bolt"
            }), " ", qS("homePage:superRank")]
          }), bS]
        }), (0, fS.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, fS.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, fS.jsx)("video", {
              ref: aS,
              src: `${xH.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: gx,
              muted: !0,
              playsInline: !0,
              controls: "playing" === IS,
              onPlaying: () => {
                kS("playing")
              },
              onError: () => {
                kS("failed")
              }
            }), ("failed" === IS || "loading" === IS) && (0, fS.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, fS.jsx)(uS.g, {
                ariaLabel: qS("general:play"),
                loading: "loading" === IS,
                onClick: () => {
                  kS("loading"), GS()
                },
                touchPressOn: "pointerup",
                children: (0, fS.jsx)(NS.d, {
                  name: "play"
                })
              })
            })]
          }), (0, fS.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, fS.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, fS.jsx)(Sx.e, {})
            }), (0, fS.jsxs)("div", {
              className: "StoreTileActions",
              children: [gS, XS]
            })]
          })]
        })]
      })
    }
    var Xx = gS(2742),
      xx = gS(3671),
      Nx = gS(3272),
      qx = gS(3275);
    const ux = [BX.t.yellow, BX.t.green, BX.t.aqua, BX.t.blue, BX.t.purple, BX.t.red];

    function Ix(SS) {
      return "needsRecipient" === SS || "lookingUp" === SS || "gift" === SS || "recipientOwns" === SS || "recipientSharesOwned" === SS || "recipientSubscribed" === SS
    }

    function fx(SS) {
      const {
        onKeyDown: HS,
        ...gS
      } = (0, uS.X)();
      return {
        ...gS,
        "aria-label": SS,
        onKeyDown: SS => {
          SS.target === SS.currentTarget && (null === HS || void 0 === HS || HS(SS))
        }
      }
    }

    function kx(SS) {
      let {
        text: HS
      } = SS;
      return (0, fS.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(HS).map(((SS, HS) => (0, fS.jsx)("span", {
          style: {
            color: ux[HS % ux.length]
          },
          children: SS
        }, HS)))
      })
    }
    const ax = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Kx(SS) {
      let {
        state: HS,
        item: gS,
        price: tS,
        busy: bS,
        highlight: qS = !1,
        onAct: IS,
        onNeedRecipient: kS,
        onLogin: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = "superRank" === gS ? yS.k.product.days : null, GS = SS => null === jS ? KS(SS ? "general:gift" : "general:buy") : KS(SS ? "store:giftDays" : "store:buyDays", {
        days: jS
      }), CS = (SS, HS) => {
        const gS = (0, fS.jsxs)(fS.Fragment, {
          children: [null === SS && (0, fS.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== SS && (0, fS.jsx)("span", {
            className: "StoreCtaLabel",
            title: SS,
            children: SS
          })]
        });
        return null !== jS ? (0, fS.jsxs)(fS.Fragment, {
          children: [HS && (0, fS.jsx)("span", {
            className: "StoreCtaIcon",
            children: HS
          }), gS, (0, fS.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, fS.jsx)(eX.c, {
              amount: tS
            })]
          })]
        }) : (0, fS.jsxs)(fS.Fragment, {
          children: [(0, fS.jsxs)("span", {
            className: "StoreCtaLead",
            children: [gS, "\xb7"]
          }), (0, fS.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [HS, (0, fS.jsx)(eX.c, {
              amount: tS
            })]
          })]
        })
      };
      let nS;
      switch (HS) {
        case "pending":
          nS = (0, fS.jsx)(uS.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: CS(null)
          });
          break;
        case "login":
          nS = (0, fS.jsx)(uS.p, {
            className: "StoreCtaButton",
            onClick: aS,
            children: CS(GS(!1))
          });
          break;
        case "owned":
          nS = (0, fS.jsx)(uS.j, {
            className: "StoreCtaButton",
            onClick: () => {
              ZS.b.set({
                openEverythingMenuName: IH.q.CUSTOMISATION
              })
            },
            children: (0, fS.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, fS.jsx)(NS.d, {
                name: "shirt"
              }), " ", KS("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          nS = (0, fS.jsx)(uS.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, fS.jsx)("span", {
              className: "StoreCtaLabel",
              children: KS(ax[HS])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          nS = (0, fS.jsx)(uS.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === HS || null === tS,
            loading: "lookingUp" === HS || bS,
            onClick: IS,
            analyticsClick: {
              id: "store.gift",
              value: gS
            },
            children: CS(GS(!0), LX.b)
          });
          break;
        case "buy":
        case "recharge":
          nS = (0, fS.jsx)(uS.p, {
            className: "StoreCtaButton",
            loading: bS,
            disabled: null === tS,
            onClick: IS,
            analyticsClick: {
              id: "store.buy",
              value: gS
            },
            children: CS(GS(!1))
          })
      }
      return (0, fS.jsx)("div", {
        className: XS()("StoreCta", {
          StoreCtaHighlight: qS,
          StoreCtaLabelFirst: null !== jS
        }),
        onClick: SS => {
          SS.stopPropagation(), "needsRecipient" === HS && kS()
        },
        children: nS
      })
    }

    function jx() {
      const {
        t: SS
      } = (0, xS.F)();
      return (0, fS.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, fS.jsxs)("li", {
          children: [(0, fS.jsx)(NS.d, {
            name: "check"
          }), (0, fS.jsx)(kx, {
            text: SS("store:colourfulNames")
          })]
        }), (0, fS.jsxs)("li", {
          children: [(0, fS.jsx)(NS.d, {
            name: "check"
          }), SS("store:perkCapes")]
        }), (0, fS.jsxs)("li", {
          children: [(0, fS.jsx)(NS.d, {
            name: "check"
          }), SS("store:perkNoAdverts")]
        }), (0, fS.jsxs)("li", {
          children: [(0, fS.jsx)(NS.d, {
            name: "check"
          }), SS("store:perkFriends", {
            count: (0, lS.e)(["super"])
          })]
        })]
      })
    }

    function Gx(SS) {
      let {
        daysLeft: HS,
        totalDays: gS,
        urgent: tS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)(), NS = gS > 0 ? Math.min(1, Math.max(.03, HS / gS)) : 1;
      return (0, fS.jsxs)("div", {
        className: XS()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: tS
        }),
        children: [(0, fS.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === HS ? bS("store:oneDayLeft") : bS("store:daysLeft", {
            days: HS
          })
        }), (0, fS.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, fS.jsx)("i", {
            style: {
              width: 100 * NS + "%"
            }
          })
        })]
      })
    }

    function Cx(SS) {
      let {
        state: HS,
        urgent: gS,
        daysLeft: tS,
        totalDays: bS,
        recipientHasSuperRank: qS,
        busy: uS,
        highlight: IS,
        onOpen: kS,
        onAct: aS,
        onNeedRecipient: KS,
        onLogin: jS
      } = SS;
      const {
        t: GS
      } = (0, xS.F)(), CS = Ix(HS), {
        days: nS
      } = yS.k.product, PS = GS("store:recipientHasSuperRank", {
        giftDays: nS
      }), QS = TS("subscribed" === HS);
      return (0, fS.jsxs)("div", {
        className: XS()("StoreTile StoreSuperRankTile", {
          StoreTileGift: CS,
          StoreSuperRankTileUrgent: "recharge" === HS && gS,
          StoreSuperRankTileWithChip: qS,
          StoreSuperRankTileGiftReady: "gift" === HS
        }),
        ...fx(GS("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: tx,
        onFocus: tx,
        onClick: kS,
        children: [(0, fS.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${sX.f})`
          }
        }), CS && (0, fS.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, fS.jsxs)("div", {
          className: "StoreTileContent",
          children: [qS && (0, fS.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: PS,
            children: PS
          }), (0, fS.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, fS.jsx)(NS.d, {
              name: "bolt"
            }), " ", GS("homePage:superRank")]
          }), CS && (0, fS.jsx)("div", {
            className: "StoreTilePitch",
            children: GS("store:giftPitch", {
              days: nS
            })
          }), "recharge" === HS && (0, fS.jsx)(Gx, {
            daysLeft: tS,
            totalDays: bS,
            urgent: gS
          }), QS && (0, fS.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, fS.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: QS
            })
          }), (0, fS.jsx)(jx, {}), (0, fS.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, fS.jsx)(Kx, {
              state: HS,
              item: "superRank",
              price: yS.k.price,
              busy: uS,
              highlight: IS,
              onAct: aS,
              onNeedRecipient: KS,
              onLogin: jS
            }), "needsRecipient" === HS && (0, fS.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: GS("store:pickRecipientFirst")
            }), "recharge" === HS && gS && (0, fS.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === tS ? GS("store:endsInOneDay") : GS("store:endsInDays", {
                days: tS
              })
            })]
          })]
        })]
      })
    }
    const nx = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Px(SS) {
      var HS;
      let {
        pack: gS,
        state: bS,
        busy: qS,
        onOpen: uS,
        onAct: IS,
        onNeedRecipient: kS,
        onLogin: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = wX.c[gS], GS = vX.i[gS], CS = (0, sX.l)(gS), nS = (0, tS.useRef)(null);
      (0, Nx.h)(gS, nS);
      const PS = Ix(bS),
        QS = null !== (HS = jS.displayName) && void 0 !== HS ? HS : gS,
        DS = (0, xx.d)((() => {
          (0, Xx.h)();
          const SS = (0, Nx.f)(gS);
          void 0 !== SS && (0, Hx.i)((0, Nx.e)(SS))
        })),
        [wS] = (0, tS.useState)(UX.g);
      return (0, fS.jsxs)("div", {
        className: XS()("StoreTile StorePackTile", nx[jS.tier], {
          StorePackTileOwned: "owned" === bS,
          StorePackTileRecipientOwns: "recipientOwns" === bS,
          StoreTileGift: PS
        }),
        ...fx(QS),
        ref: nS,
        "data-store-item": gS,
        onClick: uS,
        onPointerMove: SS => {
          "mouse" !== SS.pointerType || 0 === SS.movementX && 0 === SS.movementY || wS || DS.start()
        },
        onPointerLeave: DS.cancel,
        children: [GS && (0, fS.jsx)(GS, {}), (0, fS.jsx)("div", {
          className: "StorePackCharacters",
          children: CS.map((SS => (0, fS.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,sX.j)(SS)})`
            }
          }, SS)))
        }), (0, fS.jsx)("div", {
          className: "StoreTileScrim"
        }), PS && (0, fS.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, fS.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, fS.jsx)("div", {
            className: "StoreTileTitle",
            children: QS
          }), (0, fS.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, fS.jsx)(qx.d, {
              tier: jS.tier
            }), " \xb7 ", KS("store:itemCount", {
              count: (0, mX.d)(gS)
            }), "owned" === bS && (0, fS.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, fS.jsx)(NS.d, {
                name: "check"
              }), " ", KS("general:owned")]
            })]
          }), (0, fS.jsx)(Kx, {
            state: bS,
            item: gS,
            price: (0, yS.e)(gS),
            busy: qS,
            onAct: IS,
            onNeedRecipient: kS,
            onLogin: aS
          })]
        })]
      })
    }
    var Qx = gS(3247),
      Dx = gS(1649),
      wx = gS(1541),
      hx = gS(3694);

    function Zx() {
      return (0, fS.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Jx = gS(1428),
      Ox = gS(1657),
      dx = gS(34267);

    function cx(SS) {
      let {
        character: HS,
        drawn: gS,
        onDrawn: bS
      } = SS;
      const xS = (0, tS.useRef)(null),
        NS = (0, dx.f)(HS);
      return (0, fS.jsx)("div", {
        className: XS()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: gS
        }),
        children: (0, fS.jsx)(tS.Suspense, {
          fallback: null,
          children: (0, fS.jsx)(Xx.d, {
            ref: xS,
            framing: "store",
            turntableFromYaw: gS ? NS.yaw : null,
            onReady: () => {
              var SS, gS;
              null === (SS = xS.current) || void 0 === SS || SS.setOrbit(NS), null === (gS = xS.current) || void 0 === gS || gS.setAllCosmetics(Ox.c[HS].cosmetics)
            },
            onDrawn: bS
          })
        })
      })
    }
    const vx = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Ex = new Set(["wildSpirits"]);

    function Lx(SS) {
      var HS;
      let {
        tile: gS,
        design: bS,
        canGoLive: qS,
        live: uS,
        busy: IS,
        highlight: kS,
        onLiveStart: aS,
        onLiveEnd: KS,
        onOpen: jS,
        onAct: GS,
        onNeedRecipient: CS,
        onLogin: nS
      } = SS;
      const {
        t: PS
      } = (0, xS.F)(), {
        pack: QS,
        state: DS
      } = gS, wS = wX.c[QS], hS = (0, wX.d)(QS), ZS = (0, sX.k)(QS), JS = vX.i[ZS], OS = Ex.has(ZS), {
        tier: dS
      } = wS, cS = "legendary" === dS || "mythic" === dS, vS = (0, tS.useRef)(null);
      (0, Jx.b)(vS, "epic" === dS || cS || OS);
      const [ES, YS] = (0, tS.useState)(!1);
      return !uS && ES && YS(!1), (0, fS.jsxs)("div", {
        ref: vS,
        className: XS()("StoreCharacterCard", `StoreCharacterCard${bS}`, vx[dS], {
          StoreCharacterCardOwned: "owned" === DS || "recipientOwns" === DS,
          StoreCharacterCardGift: Ix(DS),
          StoreCharacterCardItem: void 0 === hS
        }),
        onPointerMove: SS => {
          "mouse" !== SS.pointerType || 0 === SS.movementX && 0 === SS.movementY || !qS || uS || void 0 === hS || aS()
        },
        onPointerLeave: KS,
        children: [(0, fS.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: JS && (0, fS.jsx)(JS, {
            simple: !0
          })
        }), cS && (0, fS.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, fS.jsxs)(LS.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Dx.f)({
            kind: "pack",
            pack: QS
          }),
          "data-store-item": QS,
          onClick: SS => {
            (0, wx.b)(SS) && (SS.preventDefault(), jS())
          },
          children: [(0, fS.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, fS.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, fS.jsx)("div", {
              className: XS()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: ES
              }),
              style: {
                backgroundImage: `url(${(0,sX.q)(QS)})`
              }
            }), uS && void 0 !== hS && (0, fS.jsx)(cx, {
              character: hS,
              drawn: ES,
              onDrawn: () => {
                YS(!0)
              }
            })]
          }), (0, fS.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (HS = wS.displayName) && void 0 !== HS ? HS : QS
          }), (0, fS.jsx)(qx.d, {
            tier: dS,
            className: "StoreCharacterTier"
          })]
        }), (0, fS.jsx)("div", {
          className: "StoreCharacterScrim"
        }), OS && (0, fS.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, fS.jsx)(Zx, {})
        }), "owned" === DS && (0, fS.jsx)("span", {
          className: "StoreCharacterOwned",
          title: PS("general:owned"),
          "aria-label": PS("general:owned"),
          children: (0, fS.jsx)(NS.d, {
            name: "check"
          })
        }), (0, fS.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, fS.jsx)(Kx, {
            state: DS,
            item: QS,
            price: (0, yS.e)(QS),
            busy: IS,
            highlight: kS,
            onAct: GS,
            onNeedRecipient: CS,
            onLogin: nS
          })
        })]
      })
    }

    function Yx(SS) {
      let {
        tiles: HS,
        busy: gS,
        highlightItem: bS,
        onOpen: XS,
        onAct: xS,
        onNeedRecipient: NS,
        onLogin: qS
      } = SS;
      const uS = (0, hx.w)("storeCharacterCardFoil"),
        IS = (0, hx.w)("storeCharacterCardSpotlight"),
        kS = uS ? "Foil" : IS ? "Spotlight" : "Showcase",
        [aS] = (0, tS.useState)(UX.g),
        [KS, jS] = (0, tS.useState)(null);
      return (0, fS.jsx)("div", {
        className: "StoreCharacterGrid",
        children: HS.map((SS => (0, fS.jsx)(Lx, {
          tile: SS,
          design: kS,
          canGoLive: !aS,
          live: KS === SS.pack,
          busy: gS,
          highlight: bS === SS.pack,
          onLiveStart: () => {
            jS(SS.pack)
          },
          onLiveEnd: () => {
            jS((HS => HS === SS.pack ? null : HS))
          },
          onOpen: () => {
            XS(SS.pack)
          },
          onAct: () => {
            xS(SS.pack)
          },
          onNeedRecipient: NS,
          onLogin: () => {
            qS(SS.pack)
          }
        }, SS.pack)))
      })
    }
    var Ax = gS(34280);

    function yx(SS) {
      let {
        title: HS
      } = SS;
      return (0, fS.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, fS.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: HS
        })
      })
    }

    function Vx(SS) {
      let {
        mountAtOnce: HS,
        children: gS
      } = SS;
      const bS = (0, tS.useRef)(null),
        [XS, xS] = (0, tS.useState)(HS),
        NS = (0, Ax.e)();
      return (0, tS.useLayoutEffect)((() => {
        const SS = bS.current;
        SS && SS.getBoundingClientRect().top < SS.parentElement.getBoundingClientRect().bottom && xS(!0)
      }), []), XS || NS ? (0, fS.jsx)(fS.Fragment, {
        children: gS
      }) : (0, fS.jsx)("div", {
        ref: bS
      })
    }

    function ix(SS) {
      let {
        layout: HS,
        mountAtOnce: gS,
        bundleGift: tS,
        superRankTotalDays: bS,
        busy: XS,
        highlightItem: NS,
        onOpen: qS,
        onAct: uS,
        onNeedRecipient: IS,
        onLogin: kS,
        dailyDropTile: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = HS.packs.filter((SS => void 0 === (0, wX.d)(SS.pack) && !(0, wX.h)(SS.pack))), GS = HS.packs.filter((SS => void 0 !== (0, wX.d)(SS.pack))), CS = HS.packs.filter((SS => (0, wX.h)(SS.pack)));
      return (0, fS.jsxs)(fS.Fragment, {
        children: [(0, fS.jsx)(Qx.c, {
          className: "StoreSuperGems",
          gift: tS,
          highlightSku: NS,
          leadingTile: aS
        }), (0, fS.jsx)(yx, {
          title: KS("store:rank")
        }), (0, fS.jsx)(Cx, {
          state: HS.superRank.state,
          urgent: HS.superRank.urgent,
          daysLeft: HS.superRankDaysLeft,
          totalDays: bS,
          recipientHasSuperRank: HS.recipientHasSuperRank,
          busy: XS,
          highlight: "superRank" === NS,
          onOpen: () => {
            qS("superRank")
          },
          onAct: () => {
            uS("superRank")
          },
          onNeedRecipient: IS,
          onLogin: () => {
            kS("superRank")
          }
        }), (0, fS.jsxs)(Vx, {
          mountAtOnce: gS,
          children: [(0, fS.jsx)(yx, {
            title: KS("store:bundles")
          }), (0, fS.jsx)("div", {
            className: "StorePackGrid",
            children: jS.map((SS => (0, fS.jsx)(Px, {
              pack: SS.pack,
              state: SS.state,
              busy: XS,
              onOpen: () => {
                qS(SS.pack)
              },
              onAct: () => {
                uS(SS.pack)
              },
              onNeedRecipient: IS,
              onLogin: () => {
                kS(SS.pack)
              }
            }, SS.pack)))
          }), (0, fS.jsxs)(Vx, {
            mountAtOnce: gS,
            children: [(0, fS.jsx)(yx, {
              title: KS("store:characters")
            }), (0, fS.jsx)(Yx, {
              tiles: GS,
              busy: XS,
              highlightItem: NS,
              onOpen: qS,
              onAct: uS,
              onNeedRecipient: IS,
              onLogin: kS
            }), CS.length > 0 && (0, fS.jsxs)(fS.Fragment, {
              children: [(0, fS.jsx)(yx, {
                title: KS("store:premiumItems")
              }), (0, fS.jsx)(Yx, {
                tiles: CS,
                busy: XS,
                highlightItem: NS,
                onOpen: qS,
                onAct: uS,
                onNeedRecipient: IS,
                onLogin: kS
              })]
            })]
          })]
        })]
      })
    }

    function Wx(SS) {
      let {
        state: HS,
        mode: gS,
        giftName: tS,
        busy: bS,
        highlight: XS,
        purchaseError: NS,
        onBack: qS,
        onChooseRecipient: IS,
        onAct: kS,
        onLogin: aS
      } = SS;
      const {
        t: KS
      } = (0, xS.F)(), jS = TS("gift" !== gS);
      return (0, fS.jsx)(bx, {
        onBack: qS,
        recipient: "gift" === gS && (0, fS.jsxs)(fS.Fragment, {
          children: [tS && (0, fS.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: KS("store:giftFor", {
              name: tS
            }),
            children: [LX.b, " ", KS("store:giftFor", {
              name: tS
            })]
          }), !tS && (0, fS.jsxs)("div", {
            ...(0, uS.X)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: IS,
            children: [LX.b, " ", KS("store:chooseRecipient")]
          })]
        }),
        cta: (0, fS.jsx)(Kx, {
          state: HS,
          item: "superRank",
          price: yS.k.price,
          busy: bS,
          highlight: XS,
          onAct: kS,
          onNeedRecipient: IS,
          onLogin: aS
        }),
        afterCta: (0, fS.jsxs)(fS.Fragment, {
          children: [jS && (0, fS.jsx)("span", {
            className: "StoreTileNote",
            children: jS
          }), NS && (0, fS.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: KS(NS)
          })]
        })
      })
    }
    var zx = gS(148);
    const Ux = zx.j("kind", [zx.A({
      kind: zx.r("refused"),
      heldTierId: zx.T(),
      until: zx.y()
    }), zx.A({
      kind: zx.r("refund"),
      tierId: zx.T(),
      refundedMs: zx.y(),
      forfeitedMs: zx.y(),
      premiumCurrency: zx.y()
    }), zx.A({
      kind: zx.r("none")
    })]);
    async function px(SS) {
      const HS = await (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: SS
      }, {
        retries: 1
      });
      return Ux.parse(HS)
    }
    var sx = gS(3214),
      Bx = gS(3250);

    function Mx(SS, HS) {
      const gS = Math.max(1, Math.round(HS / WS.h));
      return [1 === gS ? `${SS}OneDay` : SS, {
        days: gS.toLocaleString()
      }]
    }

    function Fx() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, US.purchasesAllowed)() ? (0, fS.jsx)(Rx, {}) : null
    }

    function Rx() {
      const {
        t: SS
      } = (0, xS.F)(), {
        userContext: HS
      } = (0, KS.b)(), {
        purchaseUnderWay: gS,
        notice: bS,
        subscribe: XS
      } = (0, sx.d)(), [NS, qS] = (0, tS.useState)(null), [IS, kS] = (0, tS.useState)(0), [aS, jS] = (0, tS.useState)(!1), GS = (0, tS.useRef)(!0), CS = HS !== cS.NULL_USER_CONTEXT, nS = null !== NS && NS.loadedFor === HS ? NS.offer : null, PS = null === bS || void 0 === bS ? void 0 : bS.pendingIntentId, QS = (0, tS.useRef)(PS);

      function DS() {
        kS((SS => SS + 1))
      }
      async function wS(SS) {
        jS(!1), await XS(SS), GS.current && DS()
      }
      if ((0, tS.useEffect)((() => (GS.current = !0, () => {
          GS.current = !1
        })), []), (0, tS.useEffect)((() => {
          void 0 !== QS.current && void 0 === PS && DS(), QS.current = PS
        }), [PS]), (0, tS.useEffect)((() => {
          if (!CS) return;
          let SS = !1;
          return jS(!1), async function() {
            const {
              offering: SS
            } = await (0, qH.f)().getOfferings("superRankPage"), HS = null === SS || void 0 === SS ? void 0 : SS.packages.find((SS => null !== SS.price));
            return void 0 === HS ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: HS,
              preview: await px(HS.productId)
            }
          }().catch((SS => (console.error("Billing: loading the Super Rank subscription or its preview failed:", SS), {
            kind: "loadFailed"
          }))).then((gS => {
            SS || qS((SS => "loadFailed" === gS.kind && (null === SS || void 0 === SS ? void 0 : SS.loadedFor) === HS ? SS : {
              loadedFor: HS,
              offer: gS
            }))
          })), () => {
            SS = !0
          }
        }), [HS, CS, IS]), null === nS) return null;
      if ("loaded" !== nS.kind) return (0, fS.jsx)(Bx.g, {
        notice: {
          kind: "error",
          key: "unavailable" === nS.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: hS,
        preview: ZS
      } = nS;
      if ("refused" === ZS.kind) return (0, fS.jsx)(Bx.g, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(ZS.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const JS = (0, Qx.g)(hS.price);
      if (aS && "refund" === ZS.kind) {
        const {
          refundedMs: HS,
          forfeitedMs: tS,
          premiumCurrency: bS
        } = ZS, XS = tS + (0 === bS ? HS : 0), [xS, NS] = Mx("payments:subscribeRefundsGemRank", HS), [qS, IS] = Mx("payments:subscribeForfeitsGemRank", XS);
        return (0, fS.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, fS.jsx)("div", {
            children: SS("payments:subscribeEndsGemRank")
          }), bS > 0 && (0, fS.jsx)("div", {
            children: SS(xS, {
              ...NS,
              amount: bS.toLocaleString()
            })
          }), XS > 0 && (0, fS.jsx)("div", {
            children: SS(qS, IS)
          }), (0, fS.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, fS.jsx)(uS.j, {
              onClick: () => {
                jS(!1)
              },
              children: SS("general:cancel")
            }), (0, fS.jsx)(uS.p, {
              onClick: () => {
                wS(hS)
              },
              loading: gS,
              children: SS("payments:subscribeContinue", {
                price: JS
              })
            })]
          })]
        })
      }
      return (0, fS.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, fS.jsx)(Bx.g, {
          notice: bS,
          className: "SmallTextBold"
        }), (0, fS.jsx)(Bx.b, {
          className: "SmallTextBold"
        }), (0, fS.jsx)(uS.p, {
          onClick: () => {
            "refund" === ZS.kind ? jS(!0) : wS(hS)
          },
          disabled: void 0 !== PS,
          loading: gS,
          children: SS("payments:subscribeToSuperRank", {
            price: JS
          })
        })]
      })
    }
    var Tx = gS(2698);

    function ox(SS) {
      let {
        state: HS,
        view: gS,
        claiming: bS,
        onOpen: NS
      } = SS;
      const {
        t: IS
      } = (0, xS.F)(), kS = (0, tS.useRef)(null), aS = "ready" === gS.kind;
      (0, Jx.b)(kS, aS);
      const KS = (0, sH.h)(HS);
      return (0, fS.jsxs)("div", {
        ref: kS,
        className: XS()("DailyDropTile", {
          DailyDropTileReady: aS
        }),
        children: [aS && (0, fS.jsx)(qS.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, fS.jsx)("div", {
          className: "DailyDropTileTitle",
          children: IS("dailyDrop:name")
        }), (0, fS.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, fS.jsx)(Tx.d, {
            className: "DailyDropTileBlock"
          }), (0, fS.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, fS.jsx)("span", {
              children: IS("dailyDrop:collected", {
                count: HS.collected.length,
                total: HS.total
              })
            }), null !== KS && (0, fS.jsx)("span", {
              className: "DailyDropTileOdds",
              children: IS("dailyDrop:odds", {
                percent: KS.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === gS.kind && (0, fS.jsx)(uS.p, {
          className: "DailyDropTileOpen",
          onClick: NS,
          loading: bS,
          children: IS("dailyDrop:open")
        }), "waiting" === gS.kind && (0, fS.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: IS("dailyDrop:nextIn", {
            count: gS.hours
          })
        })]
      })
    }
    var lx = gS(2340);
    const mx = 32;

    function ex(SS) {
      let {
        worn: HS,
        wt: gS,
        ht: bS,
        className: qS
      } = SS;
      const {
        t: uS
      } = (0, xS.F)(), IS = (0, tS.useRef)(null), [kS, aS] = (0, tS.useState)(null), [KS, jS] = (0, tS.useState)(!1);
      async function GS() {
        var SS;
        const HS = IS.current;
        if (!HS) return;
        const tS = null === (SS = HS.getDevTools()) || void 0 === SS ? void 0 : SS.canvas();
        let XS = null;
        try {
          XS = tS ? function(SS) {
            if (0 === SS.width || 0 === SS.height) return null;
            const HS = document.createElement("canvas");
            HS.width = mx, HS.height = mx;
            const gS = HS.getContext("2d", {
              willReadFrequently: !0
            });
            if (!gS) return null;
            gS.drawImage(SS, 0, 0, mx, mx);
            const {
              data: tS
            } = gS.getImageData(0, 0, mx, mx);
            for (let bS = 3; bS < tS.length; bS += 4)
              if (tS[bS] > 0) return SS.toDataURL("image/png");
            return null
          }(tS) : null
        } catch (NS) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", NS)
        }
        null === XS && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), aS(null === XS ? {
          kind: "head"
        } : {
          kind: "still",
          src: XS
        }), HS.updateCosmetic(gS, bS);
        const xS = new Promise((SS => {
          setTimeout(SS, 1e4)
        }));
        await Promise.race([HS.ensureReadyForCapture(gS), xS]).catch((SS => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", SS)
        })), IS.current === HS && jS(!0)
      }
      return (0, fS.jsxs)("div", {
        className: XS()("DailyDropRevealFigures", qS),
        children: [(0, fS.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, fS.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === kS || void 0 === kS ? void 0 : kS.kind) && (0, fS.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: kS.src,
              alt: "",
              draggable: !1
            }), "head" === (null === kS || void 0 === kS ? void 0 : kS.kind) && (0, fS.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, fS.jsx)(MX.e, {
                cosmetics: HS
              })
            }), null === kS && (0, fS.jsx)(wS.c, {})]
          }), (0, fS.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: uS("dailyDrop:before")
          })]
        }), (0, fS.jsx)(NS.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, fS.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, fS.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, fS.jsx)("div", {
              className: XS()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: KS
              }),
              children: (0, fS.jsx)(tS.Suspense, {
                fallback: null,
                children: (0, fS.jsx)(Xx.d, {
                  ref: IS,
                  onReady: () => {
                    var SS, gS;
                    null === (SS = IS.current) || void 0 === SS || SS.resetCamera(), null === (gS = IS.current) || void 0 === gS || gS.setAllCosmetics(HS)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      GS()
                    }))
                  }
                })
              })
            }), !KS && (0, fS.jsx)(wS.c, {})]
          }), (0, fS.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: uS("dailyDrop:after")
          })]
        })]
      })
    }
    var rx = gS(1975);
    const SN = "dailyDropReminderAsked_";

    function HN(SS) {
      return async function(SS) {
        if (SS.remindersOn || (0, ZS.c)(ZS.b.get("gameState"))) return null;
        const HS = await cS.userContextManager.getCurrentUserContext(),
          gS = SN + HS.whamm;
        if (null !== tg.g.getItem(gS)) return null;
        const [tS, bS] = await Promise.all([(0, WH.g)().catch((SS => (console.error("Couldn't tell whether this device can take push notifications:", SS), null))), tN()]);
        if (null === tS && !bS) return null;
        return {
          askedKey: gS,
          requester: tS
        }
      }(SS).catch((SS => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", SS), null)))
    }

    function gN(SS, HS) {
      tg.g.setItem(SS.askedKey, !0), (0, sH.r)("daily_drop.remind", HS ? "yes" : "no"), HS && async function(SS) {
        const HS = (0, sH.t)({
            remindersOn: !0
          }),
          gS = null === SS ? Promise.resolve() : SS(),
          [tS, bS] = await Promise.allSettled([HS, gS]);
        "rejected" === tS.status && console.error("Failed to turn on Lucky Skin Block reminders:", tS.reason);
        "rejected" === bS.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", bS.reason);
        "rejected" !== tS.status && "rejected" !== bS.status || rx.d.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(SS.requester)
    }

    function tN() {
      return (0, iH.d)().then((SS => SS.app + SS.browser + SS.msnPlay > 0), (SS => (console.error("Couldn't tell where push notifications reach this account:", SS), !0)))
    }
    const bN = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      XN = {
        opening: 900,
        shrinking: 700
      };

    function xN(SS) {
      let {
        drop: HS,
        onClose: gS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)(), {
        userContext: qS
      } = (0, KS.b)(), {
        state: IS,
        view: kS
      } = (0, sH.w)(), [aS, jS] = (0, tS.useState)("closed"), [GS] = (0, tS.useState)((() => ({
        ...qS.getPlayerCosmetics()
      }))), [CS] = (0, tS.useState)((() => (0, sH.j)(HS, GS))), [nS, PS] = (0, tS.useState)(!1), [QS, DS] = (0, tS.useState)(!1), [wS] = (0, tS.useState)((() => null === IS ? Promise.resolve(null) : HN(IS))), [hS, JS] = (0, tS.useState)(null), OS = (0, zH.b)(), {
        gameState: dS
      } = (0, ZS.m)(["gameState"]);
      async function cS() {
        const SS = await wS;
        OS.current && (null === SS ? gS() : (JS(SS), jS("remind")))
      }

      function vS(SS) {
        null !== hS && gN(hS, SS), gS()
      }(0, tS.useEffect)((() => {
        const SS = XN[aS];
        if (void 0 === SS) return;
        const HS = setTimeout((() => {
          jS(bN[aS])
        }), SS);
        return () => {
          clearTimeout(HS)
        }
      }), [aS]);
      const ES = bS(`dailyDrop:kind_${CS.wt}`),
        LS = IS && bS("dailyDrop:collected", {
          count: IS.collected.length,
          total: IS.total
        }),
        YS = "revealed" === aS || "shrinking" === aS,
        AS = "equip" !== aS && "remind" !== aS;
      return (0, fS.jsx)(Et.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === aS ? () => {
          vS(!1)
        } : gS,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, fS.jsxs)("div", {
          className: XS()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === aS,
            DailyDropRevealShrinking: "shrinking" === aS,
            DailyDropRevealFiguresShown: "shrinking" === aS || "equip" === aS || "remind" === aS
          }),
          children: [(0, fS.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, fS.jsx)(ex, {
              className: "DailyDropRevealStageFigures",
              worn: GS,
              wt: CS.wt,
              ht: CS.ht
            }), ("closed" === aS || "opening" === aS) && (0, fS.jsx)(Tx.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === aS
            }), YS && (0, fS.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, fS.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,lx.j)(CS.wt,CS.ht).previewTex}.png`,
                alt: ES,
                draggable: !1
              })
            })]
          }), AS && (0, fS.jsxs)(fS.Fragment, {
            children: [(0, fS.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, fS.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: YS ? ES : bS("dailyDrop:name")
              }), "closed" === aS && (0, fS.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: bS("dailyDrop:tapToOpen")
              }), "revealed" === aS && (0, fS.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: bS("dailyDrop:tapToContinue")
              })]
            }), (0, fS.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": bS("closed" === aS ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                jS(bN[aS])
              }
            })]
          }), "equip" === aS && (0, fS.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, fS.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: ES
            }), (0, fS.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: bS("dailyDrop:equipQuestion")
            }), (0, fS.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, fS.jsx)(uS.g, {
                className: "DailyDropRevealButton",
                disabled: nS,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, sH.r)("daily_drop.not_now", HS), cS()
                },
                children: bS("dailyDrop:notNow")
              }), (0, fS.jsx)(uS.g, {
                className: "DailyDropRevealButton",
                loading: nS,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, sH.r)("daily_drop.equip", HS), PS(!0), DS(!1);
                    try {
                      await (0, sH.g)(qS, CS.wt, CS.ht)
                    } catch (SS) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", SS), PS(!1), void DS(!0)
                    }
                    await cS()
                  }()
                },
                children: bS("dailyDrop:equip")
              })]
            }), QS && (0, fS.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: bS("dailyDrop:equipFailed")
            }), !(0, ZS.c)(dS) && (0, fS.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: nS,
              onClick: () => {
                var SS;
                (0, sH.r)("daily_drop.customise", HS), SS = CS.wt, Hg.k.cj(Jt, SS), ZS.b.set({
                  openEverythingMenuName: IH.q.CUSTOMISATION
                }), gS()
              },
              children: [bS("dailyDrop:customise"), " ", (0, fS.jsx)(NS.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), LS && (0, fS.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [LS, "waiting" === (null === kS || void 0 === kS ? void 0 : kS.kind) && ` \xb7 ${bS("dailyDrop:nextInInline",{count:kS.hours})}`]
            })]
          }), "remind" === aS && (0, fS.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, fS.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: bS("dailyDrop:remindTitle")
            }), (0, fS.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: bS("dailyDrop:remindSubtitle")
            }), (0, fS.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, fS.jsx)(uS.g, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  vS(!1)
                },
                children: bS("dailyDrop:remindNo")
              }), (0, fS.jsx)(uS.g, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  vS(!0)
                },
                children: bS("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function NN(SS, HS) {
      const {
        t: gS
      } = (0, xS.F)(), bS = function(SS, HS) {
        const {
          state: gS,
          view: bS
        } = (0, sH.w)(), [XS, xS] = (0, tS.useState)(!1), [NS, qS] = (0, tS.useState)(!1), [uS, IS] = (0, tS.useState)(null), fS = (0, tS.useRef)(null), kS = (0, tS.useRef)(!1), aS = HS && "ready" === (null === bS || void 0 === bS ? void 0 : bS.kind);
        (0, tS.useEffect)((() => {
          SS ? aS && !kS.current && (kS.current = !0, (0, sH.r)("daily_drop.shown", "tile")) : kS.current = !1
        }), [SS, aS]), (0, tS.useEffect)((() => {
          SS || (CS(), qS(!1))
        }), [SS]);
        const KS = SS && null === uS && !(0, sH.o)(bS);
        (0, tS.useEffect)((() => {
          KS && ZS.b.set({
            openEverythingMenuName: IH.q.CUSTOMISATION
          })
        }), [KS]);
        const jS = (0, tS.useRef)(!1),
          GS = (0, tS.useRef)(SS);

        function CS() {
          null !== fS.current && (fS.current = null, IS(null))
        }
        return GS.current = SS, {
          state: gS,
          view: bS,
          claiming: XS,
          claimFailed: NS,
          reveal: uS,
          open: async function() {
            if (!jS.current) {
              jS.current = !0, xS(!0), qS(!1);
              try {
                const {
                  state: SS,
                  drop: HS
                } = await (0, sH.d)();
                if (null === SS || null === HS) return;
                if (!GS.current) return;
                (0, sH.r)("daily_drop.open", HS), fS.current = {
                  state: SS,
                  drop: HS
                }, IS(fS.current)
              } catch (SS) {
                console.error("Failed to claim the Lucky Skin Block", SS), GS.current && qS(!0)
              } finally {
                jS.current = !1, xS(!1)
              }
            }
          },
          closeReveal: CS
        }
      }(SS, HS);
      return {
        shown: (0, sH.o)(bS.view) || null !== bS.reveal,
        tile: bS.state && bS.view && (0, fS.jsx)(ox, {
          state: bS.state,
          view: bS.view,
          claiming: bS.claiming,
          onOpen: bS.open
        }),
        claimFailed: bS.claimFailed && (0, fS.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: gS("dailyDrop:claimFailed")
        }),
        reveal: bS.reveal && (0, fS.jsx)(xN, {
          drop: bS.reveal.drop,
          onClose: bS.closeReveal
        })
      }
    }

    function qN(SS) {
      let {
        show: HS
      } = SS;
      const gS = NN(HS, HS);
      return HS && gS.shown ? (0, fS.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [gS.claimFailed, gS.tile && (0, fS.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: gS.tile
        }), gS.reveal]
      }) : null
    }
    const uN = {
      kind: "board"
    };
    let IN = !1;

    function fN(SS) {
      return "found" === SS.status || "error" === SS.status && "store:giftRecipientLookupFailed" === SS.error ? SS.name : null
    }(0, zS.y)(hX.prefetchBillingOfferings);
    const kN = (0, tS.memo)((function(SS) {
      var HS;
      let {
        show: bS
      } = SS;
      const {
        t: NS
      } = (0, xS.F)(), {
        userContext: qS
      } = (0, KS.b)(), uS = qS !== cS.NULL_USER_CONTEXT, IS = VX(qS), [kS, aS] = (0, GS.d)(), {
        page: jS,
        urlMode: CS,
        goTo: nS
      } = (0, iX.h)(), PS = function(SS) {
        return "superRank" === SS.kind ? "superRank" : "pack" === SS.kind ? SS.pack : null
      }(jS), {
        openEverythingMenuName: QS,
        gameState: DS
      } = (0, ZS.m)(["openEverythingMenuName", "gameState"]), wS = null !== QS;
      ! function(SS, HS) {
        const [bS] = (0, tS.useState)(UX.g), [XS, xS] = (0, tS.useState)(!1);
        bS && HS && !XS && xS(!0);
        const NS = (0, Gt.o)(),
          qS = bS && XS && SS && !NS;
        (0, tS.useEffect)((() => {
          if (!qS) return;
          let SS = null,
            HS = null,
            tS = null;
          const bS = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, qH.f)().purchaseUnderWay,
            XS = () => {
              var gS;
              null === (gS = tS) || void 0 === gS || gS(), tS = null, null !== SS && (clearTimeout(SS), SS = null), null !== HS && (clearTimeout(HS), HS = null)
            },
            xS = () => {
              (0, WX.s)(!1), (0, WX.q)(!1), XS(), SS = setTimeout((() => {
                SS = null, tS = (0, zX.c)((() => {
                  tS = null, bS() ? xS() : ((0, WX.s)(!0), HS = setTimeout((() => {
                    HS = null, tS = (0, zX.c)((() => {
                      tS = null, bS() ? xS() : (0, WX.q)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => gS(4781))).then((SS => {
                    SS.startBackgroundGameSetup()
                  }), (SS => {
                    console.warn("Background game setup: its chunk failed to load", SS)
                  })))
                }))
              }), 2e3)
            };
          for (const gS of pX) window.addEventListener(gS, xS, {
            capture: !0,
            passive: !0
          });
          return xS(), () => {
            for (const SS of pX) window.removeEventListener(SS, xS, {
              capture: !0
            });
            XS(), (0, WX.s)(!1), (0, WX.q)(!1)
          }
        }), [qS])
      }(bS && wS, "pack" === jS.kind);
      const hS = "landingPage" === DS;
      (0, tS.useEffect)((() => {
        wS && (0, hX.prefetchBillingOfferings)()
      }), [wS]), (0, tS.useEffect)((() => {
        wS && !bS && hS && (0, sX.r)()
      }), [wS, bS, hS]);
      const [JS, OS] = (0, tS.useState)(0), [dS, vS] = (0, tS.useState)(null), [ES, LS] = (0, tS.useState)(null), [YS, AS] = (0, tS.useState)(null), [VS, iS] = (0, tS.useState)(null), WS = (0, tS.useRef)(null), pS = (0, tS.useRef)(null), sS = (0, tS.useRef)(null), BS = (0, tS.useRef)(!1), MS = (0, zS.G)(), FS = (0, tS.useRef)(0), RS = (0, tS.useRef)(!1);

      function TS() {
        OS((SS => SS + 1))
      }(0, tS.useEffect)((() => {
        if (bS) {
          if (IN = !0, (0, zS.n)(), MS && MS.seq !== FS.current) {
            var SS;
            FS.current = MS.seq, "loginResume" !== MS.source && (0, zS.D)();
            const HS = (0, zS.e)(MS);
            CS || nS(HS), iS(null !== (SS = MS.highlight) && void 0 !== SS ? SS : null), LS(null), "gift" === MS.mode && MS.giftRecipientName ? IS.choose(MS.giftRecipientName, "prefilled") : "current" !== MS.mode && IS.clear(), "gift" !== MS.mode || MS.giftRecipientName || TS(), (0, eS.reportAnalyticsClick)({
              id: "store.open",
              value: MS.source
            })
          } else RS.current || (0, eS.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          RS.current = !0
        } else RS.current = !1
      }), [bS, MS]), (0, tS.useEffect)((() => {
        if (!VS) return;
        const SS = setTimeout((() => {
          iS(null)
        }), 4e3);
        return () => {
          clearTimeout(SS)
        }
      }), [VS]), (0, tS.useLayoutEffect)((() => {
        const SS = WS.current;
        if (!bS || !SS) return pS.current = null, void(sS.current = null);
        var HS;
        if (PS) pS.current = PS, null === (HS = SS.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === HS || HS.focus();
        else if (pS.current) {
          const HS = sS.current;
          null !== HS && (SS.scrollTop = HS);
          const gS = SS.querySelector(`[data-store-item="${pS.current}"]`);
          if (gS) {
            const tS = gS.getBoundingClientRect(),
              bS = SS.getBoundingClientRect();
            gS.focus({
              preventScroll: null !== HS && tS.bottom > bS.top && tS.top < bS.bottom
            })
          }
          pS.current = null
        }
      }), [PS, bS]), (0, tS.useEffect)((() => {
        LS(null)
      }), [IS.query]), (0, tS.useEffect)((() => {
        if (!YS) return;
        const SS = setTimeout((() => {
          AS(null)
        }), 8e3);
        return () => {
          clearTimeout(SS)
        }
      }), [YS]);
      const oS = qS.superRankInfo,
        lS = qS.isLoggedIn() || (0, US.guestsMayBuy)(),
        mS = qS.getOwnedCosmeticPacks(),
        rS = (0, LX.o)(IS.query),
        SH = (0, LX.d)({
          mode: rS,
          loggedIn: uS ? lS : null,
          superRankInfo: oS,
          now: Date.now(),
          ownedPacks: mS,
          packs: wX.o,
          recipient: IS.recipient
        });
      (0, tS.useEffect)((() => {
        if (!lS || !bS) return;
        const SS = (0, zS.D)(),
          HS = SS && (0, LX.l)(SS, wX.o);
        SS && HS && ((0, eS.reportAnalyticsClick)({
          id: "store.login_resume",
          value: SS.item
        }), (0, zS.r)(HS))
      }), [lS, bS]);
      const HH = (0, LX.q)({
        superRankDaysLeft: SH.superRankDaysLeft,
        openedThisSession: IN || bS,
        seenNewItems: (0, zS.l)()
      });
      (0, tS.useEffect)((() => {
        (0, zS.B)(HH)
      }), [HH]);
      const gH = "self" === rS,
        tH = NN(bS, bS && gH && "board" === jS.kind);
      if (!bS || !(0, US.purchasesAllowed)()) return null;
      const bH = aS > kS && kS <= 700,
        XH = !bH && aS <= 420,
        xH = "gift" === rS ? fN(IS.recipient) : null,
        NH = null !== dS;

      function uH(SS) {
        (0, JX.c)(SS, "gift" === rS ? IS.query.trim() : null)
      }

      function IH(SS, HS) {
        (0, eS.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${HS?"gift":"self"}:${SS}`
        }), HS && (IS.recordGift(HS.name, SS), fH(HS))
      }

      function fH(SS) {
        ! function(SS) {
          try {
            tg.g.setItem(YX, (0, LX.w)(yX(), SS))
          } catch {}
        }({
          name: SS.name,
          cosmetics: SS.cosmetics
        }), nS(uN), AS((HS => {
          var gS;
          return {
            name: SS.name,
            seq: (null !== (gS = null === HS || void 0 === HS ? void 0 : HS.seq) && void 0 !== gS ? gS : 0) + 1
          }
        }))
      }
      async function kH(SS) {
        var HS, gS;
        if (BS.current) return;
        if (!lS) return void uH(SS);
        LS(null), iS(null);
        const tS = "gift" === rS ? {
          name: fN(IS.recipient),
          cosmetics: IS.recipientCosmetics
        } : null;
        if (tS && !tS.name) return void TS();
        const bS = "superRank" === SS ? yS.k.id : (0, yS.b)(SS);
        BS.current = !0;
        const XS = await (0, EX.c)(bS, null !== (HS = null === tS || void 0 === tS ? void 0 : tS.name) && void 0 !== HS ? HS : null);
        if (BS.current = !1, !XS) return;
        vS(SS);
        const xS = await OX.c.purchase(bS, null !== (gS = null === tS || void 0 === tS ? void 0 : tS.name) && void 0 !== gS ? gS : null);
        vS(null), xS ? LS(xS) : (IH(SS, tS), tS || (await (0, dX.flushClientAnalyticsEvents)(), (0, ZX.refreshWithoutConfirmation)("superRank" === SS ? "/super-rank-welcome" : `/pack-welcome/${SS}`)))
      }
      const aH = XS()("Store", {
        StoreGift: "gift" === rS,
        StorePortrait: bH,
        StoreCompact: XH
      });
      if ("pack" === jS.kind) {
        const SS = jS.pack,
          HS = SH.packs.find((HS => HS.pack === SS));
        return (0, fS.jsx)("div", {
          ref: WS,
          className: "CosmeticShopContainer",
          children: (0, fS.jsx)(vX.d, {
            pack: SS,
            onBack: () => {
              nS(uN)
            },
            onPurchased: HS => {
              IH(SS, HS ? {
                name: HS,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === rS && xH && HS && (0, fS.jsxs)(fS.Fragment, {
              children: [(0, fS.jsx)(Kx, {
                state: HS.state,
                item: SS,
                price: (KH = SS, "superRank" === KH ? yS.k.price : (0, yS.e)(KH)),
                busy: NH,
                onAct: () => {
                  kH(SS)
                },
                onNeedRecipient: () => {
                  nS(uN), TS()
                },
                onLogin: () => {
                  uH(SS)
                },
                highlight: VS === SS
              }), ES && (0, fS.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: NS(ES)
              })]
            }),
            ownedPacks: mS,
            startAsGift: "gift" === rS,
            initialGiftRecipient: "gift" === rS ? null !== xH && void 0 !== xH ? xH : IS.query.trim() : "",
            highlightCta: VS === SS
          }, SS)
        })
      }
      var KH;
      return "superRank" === jS.kind ? (0, fS.jsx)("div", {
        ref: WS,
        className: XS()(aH, "StoreDetailView"),
        children: (0, fS.jsx)(Wx, {
          state: SH.superRank.state,
          mode: rS,
          giftName: xH,
          busy: NH,
          highlight: "superRank" === VS,
          purchaseError: ES,
          onBack: () => {
            nS(uN)
          },
          onChooseRecipient: () => {
            nS(uN), TS()
          },
          onAct: () => {
            kH("superRank")
          },
          onLogin: () => {
            uH("superRank")
          }
        })
      }) : (0, fS.jsxs)("div", {
        ref: WS,
        className: aH,
        onScroll: SS => {
          sS.current = SS.currentTarget.scrollTop
        },
        children: [(0, fS.jsx)("div", {
          className: "StoreTopRow",
          children: (0, fS.jsx)(lX, {
            selfName: uS ? qS.getPlayerName() : "",
            giftRecipient: IS,
            suggestionsVersion: null !== (HS = null === YS || void 0 === YS ? void 0 : YS.seq) && void 0 !== HS ? HS : 0,
            pulseSignal: JS,
            disabled: NH || !uS
          })
        }), YS && (0, fS.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            AS(null)
          },
          children: [(0, fS.jsx)(cX.d, {
            showSignal: YS.seq
          }), LX.b, " ", NS("store:giftSent", {
            name: YS.name
          })]
        }, YS.seq), !YS && ES && (0, fS.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: NS(ES)
        }), gH && tH.claimFailed, (0, fS.jsx)(ix, {
          layout: SH,
          mountAtOnce: null !== pS.current,
          bundleGift: "gift" === rS ? {
            recipientName: xH,
            lookingUp: "pending" === IS.recipient.status,
            busy: NH,
            onNeedRecipient: TS,
            onSent: SS => {
              (0, eS.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), fH({
                name: SS,
                cosmetics: IS.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, LX.t)(oS),
          busy: NH,
          highlightItem: VS,
          onOpen: function(SS) {
            (0, eS.reportAnalyticsClick)({
              id: "store.item_open",
              value: SS
            }), nS((0, zS.h)(SS))
          },
          onAct: kH,
          onNeedRecipient: TS,
          onLogin: uH,
          dailyDropTile: gH && tH.tile
        }), "gift" !== rS && (0, fS.jsx)(Fx, {}), tH.reveal]
      })
    }));
    var aN = gS(2822),
      KN = gS(9035),
      jN = gS(8866),
      GN = gS(2884),
      CN = gS(2717),
      nN = gS(2767),
      PN = gS(2781),
      QN = gS(2789),
      DN = gS(2878),
      wN = gS(2861),
      hN = gS(2465),
      ZN = gS(2498),
      JN = gS(2487),
      ON = gS(2149),
      dN = gS(2798),
      cN = gS(2505);

    function vN(SS) {
      let {
        show: HS
      } = SS;
      return HS ? (0, fS.jsx)(EN, {}) : null
    }

    function EN() {
      const {
        t: SS
      } = (0, xS.F)(), {
        followsLeader: HS
      } = (0, CN.i)(), {
        loading: gS,
        friends: bS,
        requests: qS,
        invites: IS
      } = (0, sS.n)(), {
        userContext: kS
      } = (0, KS.b)(), [aS, jS] = (0, tS.useState)(cN.i);
      (0, tS.useEffect)((() => {
        (0, cN.e)()
      }), []);
      const GS = qS.map((SS => SS.name)),
        {
          state: CS,
          recentRequesters: nS
        } = (0, wN.m)(),
        PS = new Map([...("loaded" === CS.status ? CS.recentPlayers : []).map((SS => [SS.preview.name, SS])), ...nS.map((SS => [SS.name, SS]))]),
        QS = (0, tS.useRef)(null),
        [hS, ZS] = (0, tS.useState)(""),
        [JS, OS] = (0, tS.useState)("Enter"),
        [dS, cS] = (0, tS.useState)(null);

      function vS() {
        hS && (OS("Loading"), (0, JN.j)(hS, "social_menu").then((SS => {
          if (QS.current) switch (SS.kind) {
            case "sent":
              OS("Success");
              break;
            case "becameFriends":
              OS("BecameFriends");
              break;
            case "failed":
              cS(SS.message), OS("Error")
          }
        })))
      }
      return (0, tS.useEffect)((() => {
        if ("Enter" === JS || "Loading" === JS) return;
        const SS = setTimeout((() => {
          QS.current.value = "", ZS(""), OS("Enter")
        }), "Success" === JS ? 1e3 : 4e3);
        return () => {
          clearTimeout(SS)
        }
      }), [JS]), (0, fS.jsx)("div", {
        className: "SocialMenu",
        children: (0, fS.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, fS.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, fS.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, fS.jsx)(QN.c, {
                label: SS("socialBar:addFriend")
              }), (0, fS.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, fS.jsxs)("div", {
                  className: XS()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${JS}`]: !0
                  }),
                  children: ["Loading" === JS && (0, fS.jsx)(wS.c, {}), "Success" === JS && (0, fS.jsx)(NS.d, {
                    name: "check"
                  }), "BecameFriends" === JS && (0, fS.jsx)(fS.Fragment, {
                    children: SS("socialBar:nowFriends", {
                      playerName: hS
                    })
                  }), "Error" === JS && dS && (0, fS.jsx)(fS.Fragment, {
                    children: SS(dS.translationKey, dS.params)
                  })]
                }), (0, fS.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, fS.jsx)(DS.e, {
                    className: "PlayerSearchInput",
                    placeholderText: SS("socialBar:enterPlayerName"),
                    domRef: QS,
                    onValueChange: SS => {
                      ZS((0, YS.l)(SS)), QS.current.value = (0, YS.l)(SS)
                    },
                    onEnter: () => {
                      hS && (0, eS.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), vS()
                    }
                  }), (0, fS.jsxs)(uS.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      vS()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, fS.jsx)(NS.d, {
                      name: "user-plus"
                    }), " ", SS("socialBar:sendRequest")]
                  })]
                })]
              }), (0, fS.jsx)(dN.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), IS.length > 0 && (0, fS.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, fS.jsx)(QN.c, {
                label: SS("socialBar:invites"),
                meta: IS.length
              }), IS.map((HS => (0, fS.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, fS.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, fS.jsx)(hN.b, {
                    invite: HS
                  })
                }), (0, fS.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, fS.jsx)(hN.e, {
                    invite: HS
                  })
                }), (0, fS.jsx)(uS.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, ZN.f)(HS)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${HS.destination.kind}`
                  },
                  children: SS("general:join")
                }), (0, fS.jsx)(oS.h, {
                  tooltipInner: (0, fS.jsx)(fS.Fragment, {
                    children: SS("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, fS.jsx)(uS.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === aS || void 0 === aS ? void 0 : aS.kind) && aS.inviteId === HS.id,
                    onClick: () => {
                      sS.d.declineInvite(HS.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${HS.destination.kind}`
                    },
                    children: (0, fS.jsx)(NS.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, HS.id)))]
            }), (0, fS.jsxs)("div", {
              className: XS()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !gS && 0 === qS.length
              }),
              children: [(0, fS.jsx)(QN.c, {
                label: (0, fS.jsxs)(fS.Fragment, {
                  children: [(0, fS.jsx)(NS.d, {
                    name: ON.e
                  }), " ", SS("socialBar:requests")]
                }),
                meta: (0, fS.jsxs)(fS.Fragment, {
                  children: [qS.length, qS.length === lS.s && (0, fS.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: SS("socialBar:limitReached")
                  })]
                })
              }), gS && (0, fS.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, fS.jsx)(wS.c, {})
              }), !gS && 0 === qS.length && (0, fS.jsx)("div", {
                className: "SocialMenuEmpty",
                children: SS("socialBar:noFriendRequests")
              }), !gS && qS.length > 0 && (0, fS.jsx)("div", {
                className: "PlayerRows",
                children: (0, fS.jsx)(Ob.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [qS],
                  children: qS.map(((HS, gS) => {
                    const tS = PS.get(HS.name);
                    return (0, fS.jsxs)(PN.h, {
                      playerSocialPreview: HS,
                      zIndex: qS.length - gS,
                      padDefaultFocus: (0, cN.h)(aS, HS.name, gS),
                      status: tS && (0, fS.jsx)(DN.b, {
                        gameNameWithVariation: tS.gameNameWithVariation,
                        isPrivateLobby: tS.isPrivateLobby
                      }),
                      children: [(0, fS.jsx)(oS.h, {
                        tooltipInner: (0, fS.jsx)(fS.Fragment, {
                          children: SS("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, fS.jsx)(uS.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            jS((0, cN.f)(GS, gS)), (0, JN.g)(HS.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, fS.jsx)(NS.d, {
                            name: "check"
                          })
                        })
                      }), (0, fS.jsx)(oS.h, {
                        tooltipInner: (0, fS.jsx)(fS.Fragment, {
                          children: SS("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, fS.jsx)(uS.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            jS((0, cN.f)(GS, gS)), (0, JN.g)(HS.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, fS.jsx)(NS.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${HS.name}_${HS.isError}`)
                  }))
                })
              })]
            }), (0, fS.jsx)(DN.h, {})]
          }), (0, fS.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, fS.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, fS.jsx)(QN.c, {
                label: SS("socialBar:party")
              }), (0, fS.jsx)(nN.d, {})]
            }), (0, fS.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, fS.jsx)(QN.c, {
                label: (0, fS.jsxs)(fS.Fragment, {
                  children: [(0, fS.jsx)(NS.d, {
                    name: ON.c
                  }), " ", SS("socialBar:friends")]
                }),
                meta: (0, fS.jsxs)(fS.Fragment, {
                  children: [bS.length, bS.length >= (0, lS.e)(kS.getPlayerRanks()) && (0, fS.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: SS("socialBar:limitReached")
                  })]
                })
              }), gS && (0, fS.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, fS.jsx)(wS.c, {})
              }), !gS && 0 === bS.length && (0, fS.jsx)("div", {
                className: "SocialMenuEmpty",
                children: SS("socialBar:noFriends")
              }), !gS && bS.length > 0 && (0, fS.jsx)("div", {
                className: "PlayerRows",
                children: (0, fS.jsx)(Ob.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [bS],
                  children: bS.map(((SS, gS) => (0, fS.jsx)(PN.h, {
                    playerSocialPreview: SS,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: SS => {
                      sS.d.removeFriendFromState(SS)
                    },
                    zIndex: bS.length - gS,
                    children: (0, fS.jsx)(PN.e, {
                      friend: SS,
                      followsLeader: HS,
                      analyticsSurface: "social_menu"
                    })
                  }, `${SS.name}_${SS.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var LN = gS(2658);
    const YN = SS => {
        let {
          action: HS,
          padAction: gS
        } = SS;
        const {
          isTouchScreen: tS
        } = (0, ZS.m)(["isTouchScreen"]), bS = (0, Gt.o)();
        return tS && !bS ? null : (0, fS.jsx)(qt.d, {
          className: "EverythingMenuTabKey",
          noaAction: HS,
          padHidesKey: !0,
          padMenuShortcut: gS
        })
      },
      AN = (0, tS.memo)((function() {
        const {
          t: SS
        } = (0, xS.F)(), {
          gameState: HS,
          openEverythingMenuName: gS,
          initSdkSelectorFinished: bS,
          crosshairGameView: NS
        } = (0, ZS.m)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: qS
        } = (0, KS.b)(), IS = (0, US.purchasesAllowed)(), kS = (0, zS.K)(), {
          view: aS
        } = (0, sH.w)(), jS = "dot" === kS || null === kS && "ready" === (null === aS || void 0 === aS ? void 0 : aS.kind), GS = (SS, HS) => (0, fS.jsx)(YN, {
          action: SS,
          padAction: HS
        }), [nS, PS] = (0, tS.useState)(null), QS = (0, tS.useRef)(null), DS = {
          ..."inGame" === HS ? {} : (0, uS.X)({
            focusOnClick: !1
          }),
          ...dt.f
        }, wS = SS => {
          const HS = (0, ct.g)((HS => {
            (0, uS.U)(HS.currentTarget), ZS.b.set({
              openEverythingMenuName: SS
            })
          }), "pointerup");
          return {
            ...DS,
            onPointerDown: SS => {
              DS.onPointerDown(SS), HS.onPointerDown(SS)
            },
            onPointerUp: SS => {
              DS.onPointerUp(SS), HS.onPointerUp(SS)
            },
            onClick: HS.onClick
          }
        }, hS = null !== gS, JS = gS !== IH.q.COSMETIC_SHOP && !NS;
        async function OS() {
          await async function() {
            if (!nS) return;
            await nS(), PS(null)
          }(), ZS.b.set({
            openEverythingMenuName: null
          })
        }
        const cS = (0, tS.useRef)(null),
          vS = (0, tS.useCallback)((() => null !== cS.current && (0, jN.d)(cS.current)), []);

        function ES() {
          vS() || OS()
        }(0, tS.useEffect)((() => (0, GX.n)(vS)), [vS]);
        const LS = (0, tS.useMemo)((() => "inGame" === HS ? {
          text: SS("settingsMenu:exitGame"),
          onClick: () => {
            (0, KN.c)()
          }
        } : (0, dS.b)() ? {
          text: SS("settingsMenu:exitGame"),
          onClick: () => {
            NH.j.discordActivity().then((SS => {
              SS.exit("User exited the game")
            }))
          }
        } : null), [HS, SS]);
        const YS = (0, fS.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: ES,
          children: (0, fS.jsx)(uS.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, fS.jsx)(vt.b, {
          showing: hS,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: gS === IH.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === HS,
          children: (0, fS.jsx)(Lt.b, {
            className: "EverythingMenuContainer",
            show: hS && !NS,
            children: (0, fS.jsx)(Et.c, {
              close: ES,
              togglePointerLock: !1,
              children: (0, fS.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, GX.j)(gS) && (0, fS.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, fS.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [LS && (0, fS.jsx)(uS.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        LS.onClick()
                      },
                      children: LS.text
                    }), hS && IS && (0, fS.jsx)("div", {
                      ...DS,
                      className: "EverythingMenuWallet",
                      title: SS("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, zS.r)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, fS.jsx)(aN.e, {})
                    })]
                  }), (0, fS.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, fS.jsxs)("div", {
                      ...wS(IH.q.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": gS === IH.q.SETTINGS ? "true" : void 0,
                      className: XS()("EverythingMenuTab", {
                        EverythingMenuTabActive: gS === IH.q.SETTINGS
                      }),
                      children: [SS("general:settings"), GS("OpenSettings", "pause")]
                    }), (0, fS.jsxs)("div", {
                      ...wS(IH.q.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": gS === IH.q.CUSTOMISATION ? "true" : void 0,
                      className: XS()("EverythingMenuTab", {
                        EverythingMenuTabActive: gS === IH.q.CUSTOMISATION
                      }),
                      children: [SS("general:player"), GS("OpenCharacterCustomization")]
                    }), CS.featureFlags.useSocialFeatures && (0, fS.jsxs)("div", {
                      ...wS(IH.q.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": gS === IH.q.SOCIAL ? "true" : void 0,
                      className: XS()("EverythingMenuTab", {
                        EverythingMenuTabActive: gS === IH.q.SOCIAL
                      }),
                      ...(0, eS.e)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, gS === IH.q.SOCIAL),
                      children: [SS("socialBar:social"), (0, fS.jsx)(LN.b, {})]
                    }), (0, sH.o)(aS) && (0, fS.jsxs)("div", {
                      ...wS(IH.q.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": gS === IH.q.COSMETIC_SHOP ? "true" : void 0,
                      className: XS()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: gS === IH.q.COSMETIC_SHOP
                      }),
                      children: [(0, fS.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: SS("store:title")
                      }), "new" === kS && (0, fS.jsx)(Zx, {}), jS && (0, fS.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === HS && (0, fS.jsxs)("div", {
                      ...wS(IH.q.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": gS === IH.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: XS()("EverythingMenuTab", {
                        EverythingMenuTabActive: gS === IH.q.LOBBY_LEADERBOARD
                      }),
                      children: [SS("general:lobby"), GS("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, fS.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: YS
                  })]
                }), (0, GX.j)(gS) && YS, (0, fS.jsxs)("div", {
                  ref: cS,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === HS ? "0.85" : "1"
                  },
                  children: [(0, fS.jsx)(Dt, {
                    show: gS === IH.q.SETTINGS,
                    setBeforeResumeCallback: PS
                  }), (0, fS.jsx)(Ot, {
                    show: gS === IH.q.CUSTOMISATION
                  }), (0, fS.jsx)(tS.Suspense, {
                    fallback: null,
                    children: (0, fS.jsx)(NX, {
                      show: gS === IH.q.SHOP
                    })
                  }), (0, fS.jsx)(QX, {
                    show: gS === IH.q.LOBBY_LEADERBOARD
                  }), IS && (0, fS.jsx)(kN, {
                    show: gS === IH.q.COSMETIC_SHOP
                  }), !IS && (0, fS.jsx)(qN, {
                    show: gS === IH.q.COSMETIC_SHOP
                  }), (0, fS.jsx)(vN, {
                    show: gS === IH.q.SOCIAL
                  })]
                }), !(0, CS.isMobileApp)() && (0, Yt.f)(qS.getPlayerRanks()) && (0, fS.jsx)(Lt.b, {
                  ref: QS,
                  className: "EverythingMenuBannerDiv",
                  show: JS,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, fS.jsx)(GN.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: QS
                    },
                    showing: hS && JS,
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
  34226: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(387),
      bS = gS(34235);

    function XS(SS, HS, gS) {
      const XS = Object.entries(HS).sort(((SS, HS) => HS[1] - SS[1])),
        xS = (0, tS.bb)(SS);
      xS.push(SS ? "\n\n" : "\n");
      for (const [bS, KS] of XS) {
        var NS, qS, uS;
        const SS = null !== (NS = null === gS || void 0 === gS || null === (qS = gS[bS]) || void 0 === qS ? void 0 : qS.icon) && void 0 !== NS ? NS : `${bS} Enchantment`;
        xS.push({
          icon: SS,
          style: {
            fontSize: "1.5rem"
          }
        }), xS.push({
          str: `${bS} ${null!==(uS=(0,tS.J)(KS))&&void 0!==uS?uS:KS}\n`
        })
      }
      xS.push({
        str: "\n"
      });
      for (const [tS, KS] of XS) {
        var IS, fS, kS, aS;
        const SS = null !== (IS = null === gS || void 0 === gS || null === (fS = gS[tS]) || void 0 === fS ? void 0 : fS.icon) && void 0 !== IS ? IS : `${tS} Enchantment`,
          HS = null !== (kS = null === gS || void 0 === gS || null === (aS = gS[tS]) || void 0 === aS ? void 0 : aS.description) && void 0 !== kS ? kS : (0, bS.j)(tS);
        xS.push({
          icon: SS,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), xS.push({
          str: HS,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), xS.push({
          str: "\n"
        })
      }
      return xS
    }
  },
  34239: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => fS,
      d: () => uS,
      f: () => nS,
      i: () => GS,
      m: () => qS,
      q: () => CS,
      s: () => IS,
      v: () => kS,
      x: () => jS
    });
    var tS = gS(369),
      bS = gS(680),
      XS = gS(387),
      xS = gS(4348),
      NS = gS(34226);

    function qS(SS, HS) {
      var gS;
      let {
        player: tS,
        chestOrCreative: bS
      } = SS;
      var XS;
      return HS < tS.length ? null !== (XS = tS[HS]) && void 0 !== XS ? XS : null : null !== (gS = bS[HS - tS.length]) && void 0 !== gS ? gS : null
    }

    function uS(SS) {
      var HS;
      return null !== (HS = SS.amount) && void 0 !== HS ? HS : 0
    }

    function IS(SS) {
      return 0 === SS.button || void 0 === SS.button
    }

    function fS(SS) {
      return !!SS.shiftKey
    }

    function kS(SS) {
      return "touches" in SS || "touch" === SS.pointerType || "pen" === SS.pointerType
    }
    const aS = new Set,
      KS = 50;

    function jS(SS, HS) {
      var gS;
      const tS = null === (gS = SS[HS]) || void 0 === gS ? void 0 : gS.displayName;
      return (0, bS.K)(tS) ? "string" !== typeof HS ? "" : (!aS.has(HS) && aS.size < KS && (aS.add(HS), console.warn(`No item called "${HS}", so its hover shows the name as given`)), HS) : tS
    }

    function GS(SS, HS, gS) {
      var qS, uS, IS, fS, kS, aS, KS, GS, CS, nS, PS, QS, DS, wS;
      const hS = SS.attributes,
        ZS = null !== (qS = null === (uS = HS[SS.name]) || void 0 === uS ? void 0 : uS.rootName) && void 0 !== qS ? qS : SS.name,
        JS = null !== (IS = null !== (fS = hS.customDisplayName) && void 0 !== fS ? fS : null === (kS = HS[SS.name]) || void 0 === kS ? void 0 : kS.displayName) && void 0 !== IS ? IS : jS(HS, ZS);
      let OS = JS;
      const dS = null === (aS = hS.customAttributes) || void 0 === aS ? void 0 : aS.enchantmentTier;
      dS && (OS = (0, XS.bb)(JS, {
        colour: XS.$[dS]
      }));
      const cS = null !== (KS = null !== (GS = null !== (CS = function(SS, HS) {
        var gS;
        if (void 0 === SS || null !== (gS = HS.customAttributes) && void 0 !== gS && gS.author) return SS;
        const bS = (0, tS.ec)(SS);
        return bS.every((SS => "string" === typeof SS)) ? SS : bS.map((SS => "string" === typeof SS ? SS : {
          icon: SS.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(hS.customDescription, hS)) && void 0 !== CS ? CS : null === (nS = HS[SS.name]) || void 0 === nS ? void 0 : nS.description) && void 0 !== GS ? GS : null === (PS = HS[ZS]) || void 0 === PS ? void 0 : PS.description) && void 0 !== KS ? KS : "";
      let vS = cS;
      if (null !== (QS = hS.customAttributes) && void 0 !== QS && QS.enchantments) vS = (0, NS.e)(cS, hS.customAttributes.enchantments, hS.customAttributes.enchantmentData);
      else if (gS[ZS]) vS = (0, XS.bb)(cS), vS.push({
        str: "\n"
      }), vS.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (DS = hS.customAttributes) && void 0 !== DS && DS.mobSettings) {
        var ES, LS;
        const SS = hS.customAttributes.mobSettings;
        var YS, AS;
        if (vS = [], (0, bS.K)(hS.customAttributes.health) || (vS.push({
            str: "\n"
          }), vS.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), vS.push({
            str: " "
          }), vS.push({
            str: hS.customAttributes.health.toString()
          }), (0, bS.K)(SS.maxHealth) || (vS.push({
            str: "/"
          }), vS.push({
            str: SS.maxHealth.toString()
          }))), !(0, bS.K)(SS.attackDamage) && SS.attackDamage > 0 && (vS.push({
            str: "\n"
          }), vS.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), vS.push({
            str: " "
          }), vS.push({
            str: SS.attackDamage.toString()
          })), !(0, bS.K)(SS.secondaryAttackDamage) && SS.secondaryAttackDamage > 0 && (vS.push({
            str: "\n"
          }), vS.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), vS.push({
            str: " "
          }), vS.push({
            str: SS.secondaryAttackDamage.toString()
          })), (0, bS.K)(SS.baseRunningSpeed) || (vS.push({
            str: "\n"
          }), vS.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), vS.push({
            str: " "
          }), vS.push({
            str: SS.baseRunningSpeed.toFixed(2)
          })), "Saddled" === SS.metaInfo) vS.push({
          str: "\n"
        }), vS.push({
          str: {
            translationKey: "general:has"
          }
        }), vS.push({
          str: " "
        }), vS.push({
          icon: null !== (YS = null === (AS = SS.tameInfo) || void 0 === AS ? void 0 : AS.saddleItemName) && void 0 !== YS ? YS : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (vS.push({
            str: "\n"
          }), vS.push({
            str: "\n"
          }), SS.petInfo && null !== (ES = SS.tameInfo) && void 0 !== ES && ES.supportsFriendship) {
          const HS = xS.b.getIconsFromFriendshipPoints(SS.petInfo.friendshipPoints);
          for (const SS of HS) vS.push({
            icon: SS,
            style: {
              fontSize: "1.5em"
            }
          });
          vS.push({
            str: "\n"
          });
          const gS = xS.b.getMobHungerLevel(SS.petInfo.lastFedAt);
          for (const SS of xS.b.hungerLevelIcons[gS]) vS.push({
            icon: SS,
            style: {
              fontSize: "1.5em"
            }
          });
          vS.push({
            str: " "
          }), vS.push({
            str: xS.b.hungerLevelTranslations[gS],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (SS.tameInfo && null !== (LS = SS.tameInfo) && void 0 !== LS && LS.supportsFriendship) {
          var yS, VS;
          let HS = null !== (yS = SS.tameInfo.likedFoods) && void 0 !== yS ? yS : [];
          vS.push({
            str: "\n"
          }), vS.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xS.b.feedTextColours[xS.b.MobFoodType.Superliked]
            }
          }), vS.push({
            str: " "
          }), null !== (VS = SS.petInfo) && void 0 !== VS && VS.superlikedFoodKnown ? (vS.push({
            icon: SS.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), HS = HS.filter((HS => HS !== SS.petInfo.superlikedFood))) : vS.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), vS.push({
            str: "\n"
          }), vS.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xS.b.feedTextColours[xS.b.MobFoodType.Liked]
            }
          }), vS.push({
            str: " "
          });
          for (const SS of HS) vS.push({
            icon: SS,
            style: {
              fontSize: "1.5em"
            }
          });
          vS.push({
            str: "\n"
          }), vS.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xS.b.feedTextColours[xS.b.MobFoodType.Neutral]
            }
          }), vS.push({
            str: " "
          });
          for (const gS of null !== (iS = SS.tameInfo.neutralFoods) && void 0 !== iS ? iS : []) {
            var iS;
            vS.push({
              icon: gS,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          vS.push({
            str: "\n"
          }), vS.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xS.b.feedTextColours[xS.b.MobFoodType.Disliked]
            }
          }), vS.push({
            str: " "
          });
          for (const gS of null !== (WS = SS.tameInfo.dislikedFoods) && void 0 !== WS ? WS : []) {
            var WS;
            vS.push({
              icon: gS,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        vS.length > 0 ? (vS.shift(), vS.unshift(...(0, XS.bb)(cS))) : vS = (0, XS.bb)(cS)
      }
      return {
        name: OS,
        desc: vS,
        fontStyle: null !== (wS = hS.customAttributes) && void 0 !== wS && wS.author ? "italic" : "normal"
      }
    }

    function CS(SS, HS, gS, tS) {
      const bS = qS(SS, gS),
        XS = qS(SS, tS);
      if (!bS) return !1;
      const xS = HS[bS.name].armourReduction,
        NS = HS[XS.name].armourReduction;
      if (NS === xS) {
        var uS, IS, fS, kS;
        const SS = null !== (uS = null === (IS = bS.attributes.customAttributes) || void 0 === IS ? void 0 : IS.enchantmentTier) && void 0 !== uS ? uS : "Tier 0",
          HS = null !== (fS = null === (kS = XS.attributes.customAttributes) || void 0 === kS ? void 0 : kS.enchantmentTier) && void 0 !== fS ? fS : "Tier 0";
        return parseInt(SS.replace("Tier ", "")) >= parseInt(HS.replace("Tier ", ""))
      }
      return xS > NS
    }

    function nS(SS) {
      let HS;
      if ("number" === typeof SS) {
        const gS = document.querySelector(`[data-inven-idx="${SS}"]`);
        if (!gS) return null;
        HS = gS.getBoundingClientRect()
      } else HS = SS.getBoundingClientRect();
      return {
        x: HS.left + HS.width / 2,
        y: HS.top + HS.height / 2
      }
    }
  },
  34130: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      i: () => KS,
      j: () => jS
    });
    var tS = gS(1528),
      bS = gS(64),
      XS = gS(1390),
      xS = gS(4662),
      NS = gS(2468),
      qS = gS(1281),
      uS = gS(104),
      IS = gS(2100),
      fS = gS(1419),
      kS = gS(1181);

    function aS(SS) {
      let {
        show: HS,
        onClose: gS
      } = SS;
      const {
        requestedGameNameWithVariation: tS,
        lobbyName: bS,
        shownLobbyName: XS
      } = (0, IS.h)("connectedGame"), qS = (0, NS.b)(tS, bS, !1);
      return uS.featureFlags.canUseInviteLinks && (0, kS.jsx)(xS.c, {
        show: HS,
        close: gS,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, kS.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, kS.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, kS.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, kS.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qS ? (0, kS.jsx)(fS.c, {}) : qS, (0, kS.jsx)("br", {}), "Lobby Name: ", XS, (0, kS.jsx)("br", {}), (0, kS.jsx)("br", {}), (0, kS.jsx)("br", {}), (0, kS.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, kS.jsx)(KS, {})]
        })
      })
    }

    function KS() {
      var SS;
      const {
        t: HS
      } = (0, qS.F)(), gS = null !== (SS = jS(uS.featureFlags.canUseInviteLinks)) && void 0 !== SS ? SS : "Loading Link...", [XS, xS] = (0, bS.useState)(0), [NS, IS] = (0, bS.useReducer)((SS => SS + 1), 0);
      return (0, bS.useEffect)((() => {
        const SS = setTimeout((() => {
          IS()
        }), 1100);
        return () => {
          clearTimeout(SS)
        }
      }), [XS]), uS.featureFlags.canUseInviteLinks && (0, kS.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, kS.jsx)("div", {
          className: "InviteLinkInner",
          children: gS
        }), (0, kS.jsx)(tS.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(gS).catch((SS => {
              console.error("Failed to copy invite link:", SS)
            })), xS(Date.now())
          },
          disabled: Date.now() - XS < 1e3,
          children: Date.now() - XS < 1e3 ? HS("general:copied") : HS("general:copy")
        })]
      })
    }

    function jS(SS) {
      const [HS, gS] = (0, bS.useState)(null);
      return (0, bS.useEffect)((() => {
        if (!SS) return;
        let HS = !0;
        return (0, XS.w)().then((SS => {
          HS && gS(SS)
        })).catch((SS => {
          console.error("Failed to get invite link:", SS)
        })), () => {
          HS = !1
        }
      }), [SS]), HS
    }
  },
  34219: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(2100),
      NS = gS(1181);

    function qS(SS) {
      const HS = Math.floor(SS / 3600),
        gS = Math.floor(SS % 3600 / 60),
        tS = Math.floor(SS % 60),
        bS = `${gS.toString().padStart(2,"0")}:${tS.toString().padStart(2,"0")}`;
      return HS > 0 ? `${HS}:${bS}` : bS
    }
    const uS = (0, tS.memo)((function(SS) {
      let {
        className: HS
      } = SS;
      const {
        recording: gS,
        seconds: tS
      } = (0, xS.h)("replayRecorder");
      return gS ? (0, NS.jsxs)("div", {
        className: XS()("RecordingIndicator", HS),
        children: [(0, NS.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, NS.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, NS.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qS(tS)
        })]
      }) : null
    }))
  },
  5037: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => GS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4762),
      xS = gS(1281),
      NS = gS(1127),
      qS = gS(1528),
      uS = gS(1588),
      IS = gS(1435),
      fS = gS(2630),
      kS = gS(1181);
    const aS = {
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

    function KS(SS) {
      let {
        platform: HS
      } = SS;
      const gS = "youtube" === HS;
      return (0, kS.jsxs)("span", {
        className: bS()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: gS
        }),
        children: [gS && (0, kS.jsx)(fS.e, {
          variant: "white"
        }), !gS && (0, kS.jsx)(NS.d, {
          name: aS[HS].icon,
          kit: "brands"
        })]
      })
    }

    function jS(SS) {
      let {
        platform: HS,
        link: gS,
        editable: tS,
        userContext: bS,
        onLinksUpdated: fS
      } = SS;
      const {
        t: jS
      } = (0, xS.F)(), GS = aS[HS];
      if (!gS && !tS) return null;

      function CS() {
        var SS;
        if (!bS || !fS) return;
        IS.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: GS.name
            }
          },
          prefixText: XS.r[HS],
          placeholderText: "playBloxd",
          initialValue: null !== (SS = null === gS || void 0 === gS ? void 0 : gS.handle) && void 0 !== SS ? SS : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: gS ? "general:remove" : void 0
        }).getResult().then((async SS => {
          if ("notificationTornDown" !== SS && null !== SS) try {
            "submit" === SS.type ? await uS.b.setSocialLink(bS, HS, SS.value) : await uS.b.clearSocialLink(bS, HS), fS()
          } catch (gS) {
            console.error("Failed to update social link", gS), IS.NotificationProvider.showAlertPopup({
              title: gS.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (gS) {
        const SS = `@${gS.handle}`;
        return (0, kS.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: GS.color
          },
          href: gS.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, kS.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, kS.jsx)(KS, {
              platform: HS
            }), (0, kS.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, kS.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: SS
              })
            })]
          }), tS && (0, kS.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qS.X)({
              stopPropagation: !0
            }),
            onClick: SS => {
              SS.stopPropagation(), SS.preventDefault(), CS()
            },
            children: (0, kS.jsx)(NS.d, {
              name: "pen-to-square"
            })
          }), !tS && (0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, kS.jsx)(NS.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, kS.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: GS.color
        },
        ...(0, qS.X)(),
        onClick: () => {
          CS()
        },
        children: [(0, kS.jsx)(KS, {
          platform: HS
        }), (0, kS.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: GS.name
          }), (0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: jS("homePage:profileSocialLinkAdd")
          })]
        }), (0, kS.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, kS.jsx)(NS.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function GS(SS) {
      let {
        socialLinks: HS,
        editable: gS = !1,
        userContext: tS,
        onLinksUpdated: bS
      } = SS;
      if (!gS && 0 === HS.length) return null;
      const xS = new Map(HS.map((SS => [SS.platform, SS]))),
        NS = gS ? XS.n : HS.map((SS => SS.platform));
      return (0, kS.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, kS.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: NS.map((SS => (0, kS.jsx)(jS, {
            platform: SS,
            link: xS.get(SS),
            editable: gS,
            userContext: tS,
            onLinksUpdated: bS
          }, SS)))
        })
      })
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  34280: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(64),
      bS = gS(3577);

    function XS() {
      const [SS, HS] = (0, tS.useState)(!1);
      return (0, tS.useLayoutEffect)((() => {
        let SS = !0;
        return (0, bS.f)().then((() => {
          SS && HS(!0)
        })), () => {
          SS = !1
        }
      }), []), SS
    }
  },
  6780: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(64),
      bS = gS(45);

    function XS(SS, HS) {
      var gS;
      const [XS, xS] = (0, tS.useState)(null !== (gS = bS.g.getItem(SS)) && void 0 !== gS ? gS : HS);
      return [XS, HS => {
        bS.g.setItem(SS, HS), xS(HS)
      }]
    }
  },
  34196: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS,
      h: () => KS
    });
    gS(34204);
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(34189);

    function NS(SS, HS) {
      return Math.max(1, Math.round(SS * HS))
    }

    function qS(SS, HS) {
      const gS = HS * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        tS = function(SS, HS) {
          if (SS.lines) return NS(SS.lineThickness, HS) % 2;
          if (SS.dot) return NS(SS.dotSize, HS) % 2;
          return uS(SS, HS) % 2
        }(SS, HS),
        bS = IS(SS.lineThickness * gS, tS),
        XS = NS(SS.lineLength, gS),
        xS = Math.round(SS.gap * gS),
        qS = SS.outline > 0 ? NS(SS.outline, gS) : 0,
        kS = [];
      if (SS.lines && (kS.push({
          x: bS + xS,
          y: 0,
          w: XS,
          h: bS,
          arm: "right"
        }), kS.push({
          x: -xS - XS,
          y: 0,
          w: XS,
          h: bS,
          arm: "left"
        }), kS.push({
          x: 0,
          y: bS + xS,
          w: bS,
          h: XS,
          arm: "down"
        }), SS.tStyle || kS.push({
          x: 0,
          y: -xS - XS,
          w: bS,
          h: XS,
          arm: "up"
        }), 0 === xS && kS.push({
          x: 0,
          y: 0,
          w: bS,
          h: bS
        })), SS.dot) {
        const HS = IS(SS.dotSize * gS, tS),
          XS = SS.lines && 0 === xS && SS.dotSize > SS.lineThickness ? Math.max(HS, bS + 2) : HS,
          NS = (bS - XS) / 2;
        kS.push({
          x: NS,
          y: NS,
          w: XS,
          h: XS
        })
      }
      const aS = kS.map((SS => ({
        ...SS,
        x: SS.x - qS,
        y: SS.y - qS,
        w: SS.w + 2 * qS,
        h: SS.h + 2 * qS
      })));
      let KS = null,
        jS = null;
      if (SS.circle) {
        const HS = NS(SS.circleThickness, gS),
          XS = function(SS, HS) {
            return SS + (SS % 2 === HS ? 0 : 1)
          }(uS(SS, gS), tS),
          xS = (bS - XS) / 2;
        KS = fS(xS, XS, HS), qS > 0 && (jS = fS(xS - qS, XS + 2 * qS, HS + 2 * qS))
      }
      return {
        cell: bS,
        fills: kS,
        outlines: qS > 0 ? aS : [],
        ring: KS,
        ringOutline: jS
      }
    }

    function uS(SS, HS) {
      return Math.round(SS.circleRadius * HS * 2 + NS(SS.circleThickness, HS))
    }

    function IS(SS, HS) {
      return Math.max(2 - HS, 2 * Math.round((SS - HS) / 2) + HS)
    }

    function fS(SS, HS, gS) {
      const tS = 2 * gS >= HS - 1;
      return {
        x: SS,
        y: SS,
        size: HS,
        border: Math.min(gS, Math.floor(HS / 2)),
        filled: tS
      }
    }
    var kS = gS(1181);
    const aS = 1.4;

    function KS(SS, HS) {
      return SS && HS ? `scale(${aS})` : "scale(1)"
    }

    function jS(SS) {
      return "classic" === SS.settings.style ? (0, kS.jsx)(nS, {
        ...SS
      }) : (0, kS.jsx)(JS, {
        ...SS
      })
    }
    const GS = .125;

    function CS(SS, HS) {
      const gS = {};
      if (SS.color !== xS.d.color && (gS.color = (0, xS.i)(SS.color)), SS.opacity !== xS.d.opacity && (gS.opacity = SS.opacity / 100), SS.outline !== xS.d.outline || SS.outlineColor !== xS.d.outlineColor) {
        const HS = SS.outline,
          tS = (0, xS.i)(SS.outlineColor);
        gS.textShadow = HS > 0 ? `-${HS}px 0 ${tS}, 0 ${HS}px ${tS}, ${HS}px 0 ${tS}, 0 -${HS}px ${tS}` : "none"
      }
      if (SS.size !== xS.d.size) {
        const tS = SS.size / 100;
        gS.fontSize = HS ? `calc(max(1.3rem, 18px) * ${tS})` : `calc(1.3rem * ${tS})`, gS.marginTop = `-${GS}em`, gS.transformOrigin = `50% calc(50% + ${GS}em)`
      }
      return gS
    }

    function nS(SS) {
      let {
        settings: HS,
        touch: gS,
        inPreview: tS,
        inEditor: XS,
        pressed: xS = !1,
        pressRef: NS
      } = SS;
      return (0, kS.jsx)("div", {
        className: bS()("Crosshair", {
          Touch: gS,
          CrosshairInPreview: tS,
          CrosshairInEditor: XS || tS
        }),
        ref: NS,
        style: {
          transform: KS(xS, HS.growOnClick),
          ...CS(HS, gS)
        },
        children: "+"
      })
    }

    function PS(SS, HS) {
      return SS / HS + "px"
    }

    function QS(SS, HS, gS, tS) {
      return {
        ...hS(SS, HS, gS),
        width: PS(SS.w, gS),
        height: PS(SS.h, gS),
        background: tS
      }
    }

    function DS(SS, HS, gS) {
      return {
        left: PS(SS.x, HS),
        top: PS(SS.y, HS),
        width: PS(SS.size, HS),
        height: PS(SS.size, HS),
        borderWidth: PS(SS.border, HS),
        borderColor: gS,
        background: SS.filled ? gS : void 0
      }
    }
    const wS = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function hS(SS, HS, gS) {
      const [tS, bS] = SS.arm ? wS[SS.arm] : [0, 0], XS = Math.round(HS * gS);
      return {
        left: PS(SS.x + tS * XS, gS),
        top: PS(SS.y + bS * XS, gS)
      }
    }

    function ZS(SS) {
      return SS.arm ? {
        "data-arm": SS.arm,
        "data-x": SS.x,
        "data-y": SS.y
      } : {}
    }

    function JS(SS) {
      let {
        settings: HS,
        inPreview: gS,
        inEditor: tS,
        pressed: NS = !1,
        spread: uS,
        spreadRef: IS
      } = SS;
      const fS = (0, XS.useRef)(null),
        {
          box: KS,
          dpr: jS
        } = function(SS) {
          const [HS, gS] = (0, XS.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, XS.useLayoutEffect)((() => {
            const HS = SS.current;
            if (!HS) return;
            const tS = () => {
              const SS = HS.getBoundingClientRect(),
                tS = window.devicePixelRatio || 1;
              gS((HS => HS.dpr === tS && HS.box.left === SS.left && HS.box.top === SS.top && HS.box.width === SS.width && HS.box.height === SS.height ? HS : {
                box: {
                  left: SS.left,
                  top: SS.top,
                  width: SS.width,
                  height: SS.height
                },
                dpr: tS
              }))
            };
            tS();
            const bS = new ResizeObserver(tS);
            return bS.observe(HS), window.addEventListener("resize", tS), window.addEventListener("scroll", tS, !0), () => {
              bS.disconnect(), window.removeEventListener("resize", tS), window.removeEventListener("scroll", tS, !0)
            }
          }), [SS]), HS
        }(fS),
        GS = (0, XS.useRef)(jS);
      GS.current = jS;
      const CS = qS(HS, jS, NS && HS.growOnClick ? aS : 1),
        nS = function(SS, HS, gS) {
          const tS = Math.round((SS.left + SS.width / 2) * gS - HS / 2),
            bS = Math.round((SS.top + SS.height / 2) * gS - HS / 2);
          return {
            x: tS / gS - SS.left,
            y: bS / gS - SS.top
          }
        }(KS, CS.cell, jS),
        PS = (0, xS.i)(HS.color),
        wS = (0, xS.i)(HS.outlineColor),
        JS = (0, XS.useRef)(0);
      (0, XS.useLayoutEffect)((() => {
        if (IS) return IS.current = SS => {
          var HS;
          JS.current = SS, null === (HS = fS.current) || void 0 === HS || HS.querySelectorAll("[data-arm]").forEach((HS => {
            Object.assign(HS.style, hS(function(SS) {
              return {
                x: Number(SS.dataset.x),
                y: Number(SS.dataset.y),
                arm: SS.dataset.arm
              }
            }(HS), SS, GS.current))
          }))
        }, () => {
          IS.current = null
        }
      }), [IS]);
      const OS = null !== uS && void 0 !== uS ? uS : JS.current;
      return (0, kS.jsx)("div", {
        ref: fS,
        className: bS()("CrosshairShapes", {
          CrosshairInPreview: gS,
          CrosshairInEditor: tS || gS,
          CrosshairSpreads: void 0 !== IS
        }),
        children: (0, kS.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: nS.x,
            top: nS.y,
            opacity: HS.opacity / 100
          },
          children: (0, kS.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [CS.ringOutline && (0, kS.jsx)("div", {
              className: "CrosshairRing",
              style: DS(CS.ringOutline, jS, wS)
            }), CS.outlines.map(((SS, HS) => (0, kS.jsx)("div", {
              className: "CrosshairPart",
              ...ZS(SS),
              style: QS(SS, OS, jS, wS)
            }, `o${HS}`))), CS.ring && (0, kS.jsx)("div", {
              className: "CrosshairRing",
              style: DS(CS.ring, jS, PS)
            }), CS.fills.map(((SS, HS) => (0, kS.jsx)("div", {
              className: "CrosshairPart",
              ...ZS(SS),
              style: QS(SS, OS, jS, PS)
            }, `f${HS}`)))]
          })
        })
      })
    }
  },
  34212: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS,
      g: () => GS,
      i: () => jS
    });
    var tS = gS(34189);
    const bS = "XH1-",
      XS = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      xS = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      NS = ["color", "outlineColor"],
      qS = 1 + 3 * NS.length + xS.length + 1,
      uS = Math.ceil(8 * qS / Math.log2(62)),
      IS = bS.length + uS;

    function fS(SS) {
      let HS = 90;
      for (const gS of SS) HS = 31 * HS + gS & 255;
      return HS
    }
    const kS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      aS = BigInt(kS.length);

    function KS(SS, HS) {
      let gS = 0n;
      for (const bS of SS) {
        const SS = kS.indexOf(bS);
        if (SS < 0) return null;
        gS = gS * aS + BigInt(SS)
      }
      if (gS >> BigInt(8 * HS) !== 0n) return null;
      const tS = [];
      for (let bS = 0; bS < HS; bS++) tS.unshift(Number(0xffn & gS)), gS >>= 8n;
      return tS
    }

    function jS(SS) {
      let HS = "shapes" === SS.style ? 1 : 0;
      XS.forEach(((gS, tS) => {
        SS[gS] && (HS |= 1 << tS + 1)
      }));
      const gS = [HS];
      for (const bS of NS) {
        const HS = (0, tS.e)(bS, SS[bS]);
        gS.push(HS >> 16 & 255, HS >> 8 & 255, 255 & HS)
      }
      for (const bS of xS) {
        const {
          min: HS,
          step: XS
        } = tS.c[bS];
        gS.push(Math.round(((0, tS.e)(bS, SS[bS]) - HS) / XS))
      }
      return gS.push(fS(gS)), bS + function(SS, HS) {
        let gS = 0n;
        for (const bS of SS) gS = gS << 8n | BigInt(bS);
        let tS = "";
        for (let bS = 0; bS < HS; bS++) tS = kS[Number(gS % aS)] + tS, gS /= aS;
        return tS
      }(gS, uS)
    }

    function GS(SS) {
      for (const HS of SS.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${uS}})`, "gi"))) {
        const SS = CS(KS(HS[1], qS));
        if (SS) return SS
      }
      return null
    }

    function CS(SS) {
      if (!SS || SS.length !== qS || fS(SS.slice(0, -1)) !== SS[SS.length - 1]) return null;
      const HS = SS[0],
        gS = {
          ...tS.d,
          style: 1 & HS ? "shapes" : "classic"
        };
      XS.forEach(((SS, tS) => {
        gS[SS] = 0 !== (HS & 1 << tS + 1)
      }));
      let bS = 1;
      for (const tS of NS) gS[tS] = SS[bS] << 16 | SS[bS + 1] << 8 | SS[bS + 2], bS += 3;
      for (const XS of xS) {
        const {
          min: HS,
          step: xS
        } = tS.c[XS];
        gS[XS] = (0, tS.e)(XS, HS + SS[bS] * xS), bS++
      }
      return gS
    }
  },
  34189: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => bS,
      e: () => XS,
      i: () => uS,
      l: () => qS,
      n: () => IS,
      q: () => NS,
      r: () => xS
    });
    const tS = {
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
      bS = Object.freeze({
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

    function XS(SS, HS) {
      var gS;
      const {
        min: XS,
        max: xS,
        step: NS
      } = tS[SS];
      if (!Number.isFinite(HS)) return bS[SS];
      const qS = (null !== (gS = String(NS).split(".")[1]) && void 0 !== gS ? gS : "").length,
        uS = Number((Math.round(HS / NS) * NS).toFixed(qS));
      return Math.min(xS, Math.max(XS, uS))
    }

    function xS(SS, HS, gS) {
      const tS = "number" === typeof gS ? XS(HS, gS) : gS;
      return {
        ...SS,
        [HS]: tS
      }
    }

    function NS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(bS).every((tS => gS.includes(tS) || SS[tS] === HS[tS]))
    }

    function qS(SS) {
      return NS(SS, bS)
    }

    function uS(SS) {
      return `#${SS.toString(16).padStart(6,"0")}`
    }

    function IS(SS) {
      const HS = /^#?([0-9a-f]{6})$/i.exec(SS.trim());
      return HS ? parseInt(HS[1], 16) : null
    }
  },
  34217: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      f: () => kS
    });
    var tS = gS(64),
      bS = gS(45),
      XS = gS(34212),
      xS = gS(34189);
    const NS = "crosshairCode";
    let qS = null;
    const uS = new Set;

    function IS() {
      if (null === qS) {
        var SS;
        const HS = bS.g.getItem(NS);
        qS = null !== (SS = "string" === typeof HS ? (0, XS.g)(HS) : null) && void 0 !== SS ? SS : xS.d
      }
      return qS
    }

    function fS(SS) {
      qS = SS, (0, xS.l)(SS) ? bS.g.removeItem(NS) : bS.g.setItem(NS, (0, XS.i)(SS));
      for (const HS of uS) HS()
    }

    function kS() {
      const [SS, HS] = (0, tS.useState)(IS);
      return (0, tS.useEffect)((() => {
        const SS = () => {
          HS(IS())
        };
        return SS(), gS = SS, uS.add(gS), () => {
          uS.delete(gS)
        };
        var gS
      }), []), SS
    }
  },
  34138: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      f: () => tS
    });
    const tS = "image/jpeg",
      bS = "jpg"
  },
  34142: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      d: () => uS,
      e: () => IS
    });
    var tS = gS(1792),
      bS = gS(3372),
      XS = gS(104),
      xS = gS(1860),
      NS = gS(34138);

    function qS() {
      return !(0, XS.isMobileApp)() || tS.d.supports("photos")
    }
    async function uS(SS) {
      var HS, gS;
      if ((0, XS.isMobileApp)()) {
        const {
          saved: HS
        } = await tS.d.request("photos.save", {
          data: await (0, bS.g)(SS),
          mimeType: NS.f
        });
        return HS ? "saved" : "denied"
      }
      return (0, XS.isIOS)() && null !== (HS = (gS = navigator).canShare) && void 0 !== HS && HS.call(gS, {
        files: [SS]
      }) ? IS(SS) : ((0, xS.c)(SS, SS.name), "saved")
    }
    async function IS(SS) {
      try {
        return await navigator.share({
          files: [SS]
        }), "shared"
      } catch (HS) {
        if (HS instanceof DOMException && "AbortError" === HS.name) return "Hg";
        if (HS instanceof DOMException && "NotAllowedError" === HS.name) return "needsTap";
        throw HS
      }
    }
  },
  34135: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      e: () => IS,
      i: () => fS
    });
    var tS = gS(24),
      bS = gS(34113),
      XS = gS(1733),
      xS = gS(34138);
    const NS = 8294400,
      qS = .92;

    function uS() {
      (0, XS.g)(), tS.b.set({
        screenshotMode: !0
      })
    }

    function IS() {
      tS.b.set({
        screenshotMode: !1
      })
    }
    async function fS() {
      const {
        width: SS,
        height: HS,
        scale: gS
      } = function(SS, HS, gS) {
        const tS = Math.max(1, SS),
          bS = Math.max(1, HS),
          XS = Math.min(Math.max(1, gS), Math.sqrt(NS / (tS * bS)));
        return {
          width: Math.round(tS * XS),
          height: Math.round(bS * XS),
          scale: XS
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: tS
      } = await bS.devTools.capturePhoto(SS, HS, {
        scale: gS,
        type: xS.f,
        quality: qS
      });
      return new File([tS], function(SS) {
        const HS = SS => String(SS).padStart(2, "0"),
          gS = `${SS.getFullYear()}${HS(SS.getMonth()+1)}${HS(SS.getDate())}`,
          tS = `${HS(SS.getHours())}${HS(SS.getMinutes())}${HS(SS.getSeconds())}`;
        return `bloxd-${gS}-${tS}.${xS.e}`
      }(new Date), {
        type: xS.f
      })
    }
  },
  34185: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    var tS = gS(24);

    function bS(SS, HS) {
      return SS && !HS
    }

    function XS() {
      return bS(tS.b.get("isTouchScreen"), tS.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34117: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = new Set(["chunkBorders"])
  },
  34113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ALL_DEV_TOOLS: () => xS,
      coreDevTools: () => uS,
      devTools: () => qS
    });
    var tS = gS(699),
      bS = gS(1378),
      XS = gS(34117);
    const xS = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function NS() {
      const {
        noaDevTools: SS
      } = await gS.e(236).then((() => gS(41082)));
      return SS
    }
    const qS = new class {
        constructor() {
          this.loadHost = NS, this.tools = xS
        }
        setHost(SS) {
          this.tools = null === SS ? xS : SS.tools, this.loadHost = null === SS ? NS : async () => SS
        }
        supports(SS) {
          return this.tools.has(SS)
        }
        async downloadScene(SS, HS) {
          const gS = await this.loadHost();
          await gS.downloadScene(SS, HS)
        }
        async setAmbientLightIntensity(SS) {
          const HS = await this.loadHost();
          await HS.setAmbientLightIntensity(SS)
        }
        async capturePhoto(SS, HS, gS) {
          return (await this.loadHost()).capturePhoto(SS, HS, gS)
        }
      },
      uS = {
        tools: XS.b,
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
    tS.A && qS.setHost(uS), (0, bS.w)((() => {
      qS.setHost(uS)
    }))
  },
  34271: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => bS,
      i: () => IS
    });
    var tS = gS(1657);

    function bS(SS) {
      var HS;
      return {
        ...xS.store,
        yaw: xS.store.yaw + (null !== (HS = tS.c[SS].previewYaw) && void 0 !== HS ? HS : 0)
      }
    }
    const XS = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xS = {
        player: XS,
        store: {
          ...XS,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NS(SS, HS) {
      SS instanceof Promise ? SS.then(HS).catch((SS => {
        console.error("Couldn't open the preview", SS)
      })) : HS(SS)
    }
    class qS {
      constructor(SS) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height), null !== this.view && SS.show(this.view))
        }))
      }
      show(SS) {
        var HS;
        this.view = SS, null === (HS = this.opened) || void 0 === HS || HS.show(SS)
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    class uS {
      constructor(SS) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(SS).then((SS => SS.ready)), NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var SS, HS;
        return null !== (SS = null === (HS = this.opened) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
      }
      setCosmetic(SS, HS) {
        var gS;
        null === (gS = this.opened) || void 0 === gS || gS.setCosmetic(SS, HS)
      }
      playEmote(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.playEmote(SS)
      }
      setOrbit(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.setOrbit(SS)
      }
      resetCamera() {
        var SS;
        null === (SS = this.opened) || void 0 === SS || SS.resetCamera()
      }
      async untilDrawn(SS) {
        var HS;
        await this.ready, await (null === (HS = this.opened) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    const IS = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(SS) {
        this.host = SS
      }
      setDefaultHost(SS) {
        this.makeDefault = SS
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(SS) {
        return new qS(this.current().openMob(SS))
      }
      openPet(SS) {
        return new qS(this.current().openPet(SS))
      }
      openMobLineup(SS) {
        return new qS(this.current().openMobLineup(SS))
      }
      openCharacter(SS, HS) {
        return new uS(this.current().openCharacter(SS, HS))
      }
    }
  },
  34267: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.e,
      f: () => tS.h,
      g: () => tS.i
    });
    var tS = gS(34271);
    class bS {
      constructor(SS) {
        this.load = SS, this.loaded = null, this.loading = null
      }
      run(SS) {
        return null !== this.loaded ? SS(this.loaded) : (this.loading ??= this.load().then((SS => (this.loaded = SS, SS)), (SS => {
          throw this.loading = null, SS
        })), this.loading.then(SS))
      }
    }
    class XS {
      constructor() {
        this.mobScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(246)]).then((() => gS(41093))))), this.characterScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(245)]).then((() => gS(41184)))))
      }
      openMob(SS) {
        return this.mobScene.run((HS => HS.openMobPreview(SS)))
      }
      openPet(SS) {
        return this.mobScene.run((HS => HS.openPetPreview(SS)))
      }
      openMobLineup(SS) {
        return this.mobScene.run((HS => HS.openMobLineupPreview(SS)))
      }
      openCharacter(SS, HS) {
        return this.characterScene.run((gS => gS.openCharacterPreview(SS, HS)))
      }
    }
    tS.i.setDefaultHost((() => new XS))
  },
  6848: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(45);
    const bS = "shaderPack";
    async function XS() {
      var SS;
      let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
    }
  },
  34156: (SS, HS, gS) => {
    function tS(SS, HS) {
      return SS && !HS
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  34180: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(1149);

    function bS() {
      var SS, HS;
      return null !== (SS = null === (HS = screen.orientation) || void 0 === HS ? void 0 : HS.type) && void 0 !== SS ? SS : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const XS = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && bS() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = bS(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, tS.Zj)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const SS of this.resizers) SS()
          }
        }), 1e3)
      }
      heldSizer(SS) {
        let HS = !1;
        return () => {
          if (HS && this.isHeld()) return null;
          const gS = SS();
          return HS ||= null !== gS, gS
        }
      }
      onRelease(SS) {
        return this.resizers.add(SS), () => {
          this.resizers.delete(SS)
        }
      }
    }
  },
  34149: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      g: () => fS,
      h: () => IS
    });
    var tS = gS(24),
      bS = gS(1792),
      XS = gS(45),
      xS = gS(3793);
    const NS = 2592e5,
      qS = "notificationOptInLastPromptedAt";
    async function uS() {
      var SS;
      const HS = null !== (SS = XS.g.getItem(qS)) && void 0 !== SS ? SS : 0;
      return Date.now() - HS < NS ? null : fS()
    }

    function IS() {
      XS.g.setItem(qS, Date.now())
    }
    async function fS() {
      return await bS.d.ready, bS.d.supports("notifications") ? tS.b.get("mobilePushNotificationsCanAsk") ? async () => {
        bS.d.request("notifications.requestPermission", {}).then((SS => {
          let {
            canAsk: HS
          } = SS;
          tS.b.set({
            mobilePushNotificationsCanAsk: HS
          })
        }), (SS => {
          console.error("The app couldn't ask for push notifications:", SS)
        }))
      }: null: await xS.d.canAsk() ? () => xS.d.requestPermission() : null
    }
  },
  34124: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => nS,
      c: () => uS,
      g: () => jS,
      h: () => KS
    });
    var tS = gS(160),
      bS = gS(1348),
      XS = gS(1286),
      xS = gS(1216),
      NS = gS(1835);
    const qS = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function uS(SS) {
      return qS[SS]
    }

    function IS(SS) {
      return (0, NS.b)(SS) ? "outdated" : SS instanceof tS.b ? 429 === SS.httpCode ? "busy" : "server" : "offline"
    }

    function fS(SS, HS, gS) {
      return (0, xS.postJsonWithMetricsCookiesAndJsonResponse)(`${XS.clientSideServerUrls.indexUrl}${HS}`, gS, {
        retries: 3
      }, SS.getMetricsCookies()).catch((SS => (console.error("Bad response from the server when trying to change name:", HS, SS), {
        outcome: "failed",
        failure: IS(SS)
      })))
    }

    function kS(SS) {
      return "outcome" in SS && "failed" === SS.outcome
    }

    function aS(SS) {
      return console.error("Error when trying to get with new name from DB", SS), {
        outcome: "refused",
        message: SS
      }
    }
    async function KS(SS) {
      const HS = await fS(SS, "/index/name/random", {});
      return kS(HS) ? HS : "err" in HS ? aS(HS.err) : (SS.setPlayerName(HS.name), {
        outcome: "changed",
        name: HS.name
      })
    }
    async function jS(SS, HS) {
      const gS = await fS(SS, "/index/name/update", {
        name: HS
      });
      return kS(gS) ? gS : "err" in gS ? aS(gS.err) : gS.nameExists ? {
        outcome: "taken"
      } : (SS.setPlayerName(HS), {
        outcome: "changed",
        name: HS
      })
    }

    function GS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const tS = 1 === HS ? 1 : 10 ** (HS - 1),
        XS = String(tS + Math.floor(gS() * (10 ** HS - tS)));
      return `${SS.slice(0,bS.g-HS)}${XS}`
    }
    const CS = [1, 2, 3, 4];
    async function nS(SS, HS) {
      const gS = await jS(SS, HS);
      if ("taken" !== gS.outcome) return gS;
      for (const tS of CS) {
        const gS = GS(HS, tS),
          bS = await jS(SS, gS);
        if ("taken" !== bS.outcome) return bS
      }
      return {
        outcome: "taken"
      }
    }
  },
  34158: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      e: () => qS
    });
    var tS = gS(24);
    const bS = 24,
      XS = "farNametags",
      xS = 1e5;

    function NS() {
      var SS;
      return null === (SS = tS.b.get("showDistantNametags")) || void 0 === SS || SS
    }

    function qS() {
      var SS;
      return null !== (SS = function() {
        const SS = new URLSearchParams(window.location.search).get(XS),
          HS = null === SS || "" === SS ? NaN : Number(SS);
        return Number.isFinite(HS) && HS >= 0 ? Math.min(HS, xS) : null
      }()) && void 0 !== SS ? SS : NS() ? 0 : bS
    }
  },
  34256: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      f: () => xS
    });
    const tS = [{
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

    function bS(SS) {
      let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof SS) {
        if (!Number.isFinite(SS)) return "0";
        if (Math.abs(SS) < 100) {
          const HS = SS < 0 ? "-" : "",
            gS = Math.abs(SS);
          return gS >= 10 ? `${HS}${gS.toFixed(1).replace(/\.0$/,"")}` : `${HS}${gS.toFixed(2).replace(/\.?0+$/,"")}`
        }
        HS = BigInt(Math.floor(SS))
      } else HS = SS;
      const bS = HS < 0n ? -HS : HS,
        XS = HS < 0n ? "-" : "",
        xS = bS.toString();
      if (xS.length <= gS) return `${XS}${xS}`;
      const NS = 3 * Math.floor((xS.length - 1) / 3);
      if (NS < 3) return `${XS}${xS}`;
      if (NS > 3 * tS.length) {
        const SS = xS[0],
          HS = xS.slice(1, 3).replace(/0+$/, "");
        return `${XS}${HS?`${SS}.${HS}`:SS}e${xS.length-1}`
      }
      const {
        threshold: qS,
        suffix: uS
      } = tS[tS.length - NS / 3], IS = bS / qS, fS = Number(1000n * (bS % qS) / qS), kS = Number(IS) + fS / 1e3;
      let aS;
      return aS = kS >= 100 ? Math.floor(kS).toString() : kS >= 10 ? kS.toFixed(1).replace(/\.0$/, "") : kS.toFixed(2).replace(/\.?0+$/, ""), `${XS}${aS}${uS}`
    }
    const XS = tS.map((SS => {
      let {
        threshold: HS,
        suffix: gS
      } = SS;
      return {
        threshold: Number(HS),
        suffix: gS
      }
    })).filter((SS => {
      let {
        threshold: HS
      } = SS;
      return Number.isFinite(HS)
    }));

    function xS(SS) {
      const HS = Math.abs(SS),
        gS = SS < 0 ? "-" : "";
      for (const {
          threshold: tS,
          suffix: bS
        }
        of XS)
        if (HS >= tS) {
          const SS = HS / tS;
          if (SS >= 1e3) return `${gS}${HS.toExponential(2).replace("e+","e")}`;
          let XS;
          return XS = SS >= 100 ? Math.floor(SS).toString() : SS >= 10 ? SS.toFixed(1).replace(/\.0$/, "") : SS.toFixed(2).replace(/\.?0+$/, ""), `${gS}${XS}${bS}`
        } return `${gS}${HS}`
    }
  },
  34235: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      f: () => kS,
      i: () => fS,
      j: () => xS,
      m: () => uS,
      q: () => qS
    });
    var tS = gS(387);
    const bS = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      XS = {
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

    function xS(SS) {
      var HS;
      return null !== (HS = XS[SS]) && void 0 !== HS ? HS : {
        translationKey: ""
      }
    }
    const NS = {
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

    function qS(SS) {
      return bS.includes(SS)
    }

    function uS(SS) {
      var HS;
      return !0 === (null === SS || void 0 === SS || null === (HS = SS.customAttributes) || void 0 === HS ? void 0 : HS.cannotEnchant)
    }

    function IS(SS, HS) {
      const {
        max: gS
      } = NS[SS].at(-1);
      return HS <= gS
    }

    function fS(SS) {
      const HS = Math.sin(SS / 80),
        gS = SS => {
          if (SS <= 0) return 0;
          if (SS > 1) return 1;
          let HS = 0;
          const gS = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let tS = 0; tS < gS.length; tS++) {
            HS += (tS % 2 === 0 ? 1 : -1) * gS[tS] * Math.pow(SS, 2 + tS) / (2 + tS)
          }
          return 72 * HS
        },
        tS = .3 - .78 * HS,
        bS = .5 - .78 * HS,
        XS = .6 - .7 * HS,
        xS = .8 - .6 * HS;
      let NS = gS(tS),
        qS = gS(bS) - NS,
        uS = gS(XS) - qS - NS,
        IS = gS(xS) - uS - qS - NS;
      tS < .041 && (qS /= 1 - NS, uS /= 1 - NS, IS /= 1 - NS, NS = 0), bS < .041 && (NS /= 1 - qS, uS /= 1 - qS, IS /= 1 - qS, qS = 0), XS < .041 && (NS /= 1 - uS, qS /= 1 - uS, IS /= 1 - uS, uS = 0), xS < .041 && (NS /= 1 - IS, qS /= 1 - IS, uS /= 1 - IS, IS = 0);
      return {
        commonProb: NS,
        uncommonProb: qS,
        rareProb: uS,
        epicProb: IS,
        legendaryProb: 1 - (IS + uS + qS + NS)
      }
    }

    function kS(SS, HS) {
      const {
        min: gS,
        max: bS
      } = NS[SS][HS], XS = tS.b.sampleUniformIntDistribution(gS, bS, "includeMax");
      return {
        ...fS(XS),
        level: XS
      }
    }
  },
  34204: () => {},
  12999: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14162: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15622: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16166: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);