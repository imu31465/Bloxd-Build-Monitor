export const id = 97;
export const ids = [97, 185];
export const modules = {
  8877: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      EverythingMenu: () => gT
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1181),
      TU = gU(1049),
      qU = gU(1922),
      KU = gU(1099),
      cU = gU(1090);

    function GU(UU) {
      let {
        items: RU,
        onClick: gU,
        selectedItemId: tU,
        className: pU,
        padStartsOnTab: GU = !0
      } = UU;
      const {
        t: jU
      } = (0, PU.B)(), uU = (0, KU.k)(), CU = [];
      for (const EU of RU) {
        var hU;
        const UU = CU[CU.length - 1];
        var QU;
        if (UU && UU.title === (null !== (hU = EU.section) && void 0 !== hU ? hU : null)) UU.items.push(EU);
        else CU.push({
          title: null !== (QU = EU.section) && void 0 !== QU ? QU : null,
          items: [EU]
        })
      }
      return (0, cU.jsx)("div", {
        className: EU()("MenuSideBarBody", pU),
        "data-pad-tabs": "2",
        children: CU.map(((UU, RU) => {
          var pU;
          return (0, cU.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [UU.title && (0, cU.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: jU(UU.title)
            }), UU.items.map((UU => {
              var RU;
              const pU = !!UU.iconElement || !!UU.faIcon;
              return (0, cU.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": tU === UU.id ? "true" : void 0,
                "data-pad-default-focus": GU && tU === UU.id || void 0,
                className: EU()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: tU === UU.id
                }),
                onClick: () => {
                  gU(UU.id)
                },
                children: [pU && (0, cU.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (RU = UU.iconElement) && void 0 !== RU ? RU : (0, cU.jsx)(TU.c, {
                    name: UU.faIcon
                  })
                }), (!uU || !pU) && (0, cU.jsx)("div", {
                  children: jU(UU.title)
                }), UU.redDot && (0, cU.jsx)(qU.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, UU.id)
            }))]
          }, null !== (pU = UU.title) && void 0 !== pU ? pU : RU)
        }))
      })
    }
    var jU = gU(2691),
      uU = gU(1112),
      CU = gU(2254),
      hU = gU(1106),
      QU = gU(1412),
      eU = gU(96),
      WU = gU(1800),
      fU = gU(2087),
      xU = gU(2092),
      mU = gU(1602),
      IU = gU(1326),
      JU = gU(4670),
      wU = gU(21),
      nU = gU(8880);

    function bU(UU) {
      let {
        setApplySettingsCallback: RU
      } = UU;
      const {
        clientEscMenuOptions: gU
      } = (0, wU.l)(["clientEscMenuOptions"]), [pU, EU] = (0, tU.useState)(!1), [PU, TU] = (0, tU.useState)(!1), [qU, KU] = (0, tU.useState)(6400), [GU, jU] = (0, tU.useState)(3600), [uU, CU] = (0, tU.useState)(!1), [hU, eU] = (0, tU.useState)(!1);

      function WU(UU) {
        const RU = "screenshot" === UU ? TU : EU;
        RU(!0);
        const gU = uU ? "normals" : hU ? "depth" : null;
        nU.devTools.downloadScene(UU, {
          width: qU,
          height: GU,
          colouring: gU
        }).catch((UU => {
          console.error("Couldn't download the scene", UU)
        })).finally((() => {
          RU(!1)
        }))
      }
      return (0, cU.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, cU.jsx)(JU.b, {
          label: "Disable Ambient Occlusion",
          checked: gU.disableAmbientOcclusion,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              disableAmbientOcclusion: UU
            }), RU((() => JU.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), nU.devTools.supports("ambientLight") && (0, cU.jsx)(JU.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: gU.ambientLightIntensity,
          onChange: UU => {
            nU.devTools.setAmbientLightIntensity(UU).then((() => {
              wU.b.setClientEscMenuOptions({
                ambientLightIntensity: UU
              })
            })).catch((UU => {
              console.error("Couldn't set the ambient light", UU)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), nU.devTools.supports("weaponRaycasts") && (0, cU.jsx)(JU.b, {
          label: "Show Weapon Raycasts",
          checked: gU.showWeaponRaycasts,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              showWeaponRaycasts: UU
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), nU.devTools.supports("sceneDownload") && (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, cU.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, cU.jsx)(JU.b, {
              label: "Apply normal-based coloring",
              checked: uU,
              onClick: UU => {
                CU(UU), UU && eU(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, cU.jsx)(JU.b, {
              label: "Apply depth-based coloring",
              checked: hU,
              onClick: UU => {
                eU(UU), UU && CU(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, cU.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, cU.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, cU.jsx)(mU.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (UU, RU) => {
                  const gU = parseInt(UU) || 6400;
                  KU(gU)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: qU.toString()
              }), (0, cU.jsx)("span", {
                children: "X"
              }), (0, cU.jsx)(mU.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (UU, RU) => {
                  const gU = parseInt(UU) || 3600;
                  jU(gU)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: GU.toString()
              })]
            }), (0, cU.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, cU.jsxs)(QU.e, {
                onClick: () => {
                  WU("screenshot")
                },
                disabled: PU,
                children: [PU && (0, cU.jsx)(IU.d, {}), "Download Screenshot"]
              }), (0, cU.jsxs)(QU.e, {
                onClick: () => {
                  WU("glb")
                },
                disabled: pU,
                children: [pU && (0, cU.jsx)(IU.d, {}), "Download GLB"]
              })]
            })]
          }), (0, cU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var oU = gU(135),
      ZU = gU(1120),
      aU = gU(1196),
      YU = gU(2700),
      BU = gU(1475),
      VU = gU(1271),
      rU = gU(1229),
      XU = gU(2781),
      vU = gU(1892),
      dU = gU(1461),
      HU = gU(311),
      SU = gU(2100),
      sU = gU(2110),
      yU = gU(2476),
      kU = gU(1570),
      FU = gU(2742),
      iU = gU(2724),
      AU = gU(2789),
      zU = gU(201);

    function MU(UU) {
      const {
        t: RU,
        selectedLanguage: gU
      } = (0, PU.B)(), {
        userContext: pU
      } = (0, uU.e)(), {
        superRankInfo: EU
      } = pU, TU = UU && ((0, HU.Bc)(EU) || pU.ranksMayChange) && (0, sU.purchasesAllowed)(), {
        accountId: qU,
        data: KU
      } = (0, yU.j)(FU.d, TU);
      if ((0, tU.useEffect)((() => {
          if (TU) return FU.d.watchAccount(), kU.b.addRefetchListener("billing", (UU => {
            "reconnected" === UU ? FU.d.refreshAfterReconnect() : FU.d.refresh()
          }))
        }), [TU]), !TU || !(0, HU.Bc)(EU) || null === KU || qU !== pU.whamm) return null;
      const cU = function(UU, RU, gU) {
        const tU = AU.f[(0, AU.b)(AU.f, RU)],
          pU = void 0 === tU ? void 0 : (0, zU.b)(UU.entitlements, tU.entitlementId);
        return void 0 === pU || null === pU.expiresAt || (0, iU.f)(pU) <= gU ? null : pU.willRenew && null === pU.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(pU.expiresAt, gU)
        } : {
          renews: !1,
          at: (0, iU.f)(pU)
        }
      }(KU, EU.tier, Date.now());
      if (null === cU) return null;
      const GU = cU.renews ? "store:renewsOn" : "store:endsOn";
      return RU(GU, {
        date: new Date(cU.at).toLocaleDateString((0, PU.n)(gU.code, GU), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var DU = gU(1344),
      LU = gU(1207),
      NU = gU(4540),
      lU = gU(1444),
      OU = gU(3325),
      UR = gU(2074);

    function RR(UU) {
      let {
        showing: RU
      } = UU;
      const {
        t: gU
      } = (0, PU.B)(), {
        data: tU,
        failed: pU
      } = (0, yU.j)(OU.i, RU);
      return 0 === (null === tU || void 0 === tU ? void 0 : tU.length) || null === tU && !pU ? null : (0, cU.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, cU.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gU("paymentHistory:title")
        }), null === tU && pU && (0, cU.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: gU("paymentHistory:loadFailed")
        }), null !== tU && (0, cU.jsx)("ul", {
          className: "PaymentHistoryList",
          children: tU.map((UU => (0, cU.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, cU.jsx)(UR.d, {
              entry: UU
            }), (0, cU.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, cU.jsx)("div", {
                children: (0, UR.h)(gU, UU)
              }), (0, cU.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(UU.at).toLocaleDateString(), "number" === typeof UU.orderId && ` \xb7 ${gU("paymentHistory:order",{orderId:UU.orderId})}`]
              })]
            })]
          }, (0, OU.e)(UU))))
        })]
      })
    }
    var gR = gU(1768),
      tR = gU(1240),
      pR = gU(1333),
      ER = gU(1305),
      PR = gU(1675),
      TR = gU(2715);
    async function qR() {
      try {
        return function(UU) {
          const RU = new Map;
          for (const {
              store: gU,
              status: tU,
              autoRenewStatus: pU,
              managementUrl: EU
            }
            of Object.values(UU.subscriptions)) !(0, iU.j)(gU) || (0, iU.n)(tU) || "willNotRenew" === pU || RU.has(gU) || RU.set(gU, null !== EU && void 0 !== EU ? EU : iU.p[gU]);
          return Array.from(RU, (UU => {
            let [RU, gU] = UU;
            return {
              store: RU,
              managementUrl: gU
            }
          }))
        }(await (0, PR.i)((0, TR.g)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (UU) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", UU), null
      }
    }
    var KR = gU(299),
      cR = gU(2307);
    const GR = {
      appStore: {
        name: "App Store",
        ...KR.Sb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...KR.Sb.googlePlay
      },
      discord: {
        name: "Discord",
        ...KR.Sb.discord
      }
    };

    function jR(UU) {
      let {
        warning: RU,
        subscriptions: gU
      } = UU;
      const {
        t: tU
      } = (0, PU.B)();
      return null !== gU && 0 === gU.length ? (0, cU.jsx)(cU.Fragment, {
        children: tU(RU)
      }) : (0, cU.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [tU(RU), null === gU && (0, cU.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: tU("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== gU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: tU("auth:deleteAccountStoreSubscriptions")
          }), (0, cU.jsx)(cR.b, {
            className: "DeleteAccountSubtitleLinks",
            links: gU.map((UU => {
              let {
                store: RU,
                managementUrl: gU
              } = UU;
              return {
                ...GR[RU],
                url: gU
              }
            }))
          })]
        })]
      })
    }

    function uR(UU) {
      let {
        showing: RU
      } = UU;
      const {
        userContext: gU,
        isUserContextUpdating: pU
      } = (0, uU.e)(), {
        t: EU
      } = (0, PU.B)(), [TU, qU] = (0, tU.useState)(!1), [KU, GU] = (0, tU.useState)(null), jU = (0, tU.useRef)(RU);
      (0, tU.useEffect)((() => (jU.current = RU, () => {
        jU.current = !1
      })), [RU]);
      const CU = pU || TU;
      async function hU() {
        const UU = function(UU) {
            if ((0, oU.e)()) return "auth:discordActivityDeleteAccountWarning";
            return UU ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(gU.isLoggedIn()),
          RU = (0, gR.d)(gU.availableUserContextTypes) ? await qR() : [];
        if (!jU.current) return tR.c.ok();
        if (!0 !== await pR.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, VU.c)(gU.getPlayerName(), !eU.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, cU.jsx)(jR, {
              warning: UU,
              subscriptions: RU
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return tR.c.ok();
        const tU = await (0, ZU.postJsonWithMetricsCookiesAndJsonResponse)(`${aU.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: wU.b.get("gameState")
        }, {
          retries: 3
        }, gU.getMetricsCookies());
        if (tU.error) return tR.c.error(tU.error);
        if ((0, oU.e)()) {
          (await ER.m.discordActivity()).exit("User deleted their account")
        }
        return (0, ZU.forgetStoredGuestAccount)(gU.whamm), (0, ZU.forceGlobalSignOut)(!0), tR.c.ok()
      }
      return (0, cU.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, cU.jsxs)(QU.E, {
          onClick: async function() {
            if (!TU) {
              qU(!0);
              try {
                const UU = await hU(),
                  RU = UU.isError() ? UU.asError().message : null;
                GU(RU)
              } catch (UU) {
                console.error("Failed to delete account:", UU), GU(EU("auth:genericDeleteAccountError"))
              }
              qU(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: CU,
          children: [CU && (0, cU.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, cU.jsx)(IU.d, {})
          }), EU("auth:deleteAccount")]
        }), KU && (0, cU.jsx)("div", {
          className: "DeleteAccountError",
          children: KU
        })]
      })
    }
    var CR = gU(3271),
      hR = gU(3286),
      QR = gU(3280);

    function eR(UU) {
      let {
        showing: RU
      } = UU;
      const {
        t: gU
      } = (0, PU.B)(), {
        data: tU,
        failed: pU
      } = (0, yU.j)(CR.d, RU), EU = null === tU ? null : (0, CR.g)(tU);
      return (0, cU.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, cU.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gU("settingsMenu:blockedAndIgnoredPlayers")
        }), null === EU && !pU && (0, cU.jsx)(IU.d, {}), null === EU && pU && (0, cU.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [gU("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, cU.jsx)(QU.e, {
            className: "SmallTextLight",
            onClick: () => {
              CR.d.refresh()
            },
            children: gU("general:tryAgain")
          })]
        }), 0 === (null === EU || void 0 === EU ? void 0 : EU.length) && (0, cU.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: gU("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== EU && EU.length > 0 && (0, cU.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: EU.map((UU => {
            let {
              name: RU,
              exclusion: tU
            } = UU;
            const pU = QR.e[tU];
            return (0, cU.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, cU.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: RU
              }), (0, cU.jsx)(QU.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, hR.i)(pU, RU, {
                    chatMessage: null
                  })
                },
                children: gU(QR.h[pU].text)
              })]
            }, RU)
          }))
        })]
      })
    }
    const WR = (0, tU.memo)((function(UU) {
      var RU;
      let {
        showing: gU,
        inGame: pU
      } = UU;
      const {
        t: qU,
        selectedLanguage: KU
      } = (0, PU.B)(), {
        hideSocialLocationFrom: GU
      } = (0, wU.l)(["hideSocialLocationFrom"]), CU = (0, jU.b)(), {
        userContext: hU,
        isUserContextUpdating: WU
      } = (0, uU.e)(), [fU, xU] = (0, tU.useState)(null !== (RU = hU.getPlayerName()) && void 0 !== RU ? RU : ""), [nU, bU] = (0, tU.useState)(null), {
        purchasing: yU,
        outcome: kU,
        purchase: FU
      } = (0, YU.b)("/super-rank-welcome"), iU = (0, HU.jc)((0, PU.n)(KU.code, "general:timeLeft"), hU.superRankInfo), AU = MU(gU), zU = iU ? qU("general:timeLeft", {
        time: iU
      }) : AU, [OU, UR] = (0, tU.useState)(!1), [gR, tR] = (0, tU.useState)(!1), pR = (0, tU.useRef)(null), ER = (0, tU.useRef)(null), PR = (0, vU.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), TR = null === PR, qR = null !== PR && void 0 !== PR ? PR : [], KR = hU !== ZU.NULL_USER_CONTEXT && !hU.isLoggedIn(), cR = KR && 0 !== (null === PR || void 0 === PR ? void 0 : PR.length), [GR, jR] = (0, tU.useState)([]), [CR, hR] = (0, tU.useState)(!1), QR = hU.playerHasRank("youtuber"), WR = (0, tU.useCallback)((() => dU.c.getPlayerProfile(hU, {
        lowerCaseName: hU.getPlayerName().toLowerCase()
      }).then((UU => {
        jR(UU.socialLinks)
      })).catch((UU => {
        console.error("Failed to refresh social links", UU)
      }))), [hU]);

      function xR(UU) {
        UU !== fU && ((0, VU.m)(UU) ? (UU = (0, VU.q)(UU), bU("Only letters, numbers, and _")) : bU(null), pR.current && (pR.current.value = UU), xU(UU))
      }
      return (0, tU.useEffect)((() => (!0 === gU ? (clearInterval(ER.current), ER.current = setInterval(CU, 1e3)) : clearInterval(ER.current), () => {
        clearInterval(ER.current)
      })), [gU, CU]), (0, tU.useEffect)((() => {
        var UU;
        xU(null !== (UU = hU.getPlayerName()) && void 0 !== UU ? UU : "")
      }), [hU]), (0, tU.useEffect)((() => {
        if (!gU || !QR || WU) return;
        let UU = !1;
        return hR(!0), jR([]), dU.c.getPlayerProfile(hU, {
          lowerCaseName: hU.getPlayerName().toLowerCase()
        }).then((RU => {
          UU || jR(RU.socialLinks)
        })).catch((UU => {
          console.error("Failed to load social links", UU)
        })).finally((() => {
          UU || hR(!1)
        })), () => {
          UU = !0
        }
      }), [gU, QR, WU, hU]), (0, cU.jsxs)("div", {
        className: EU()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: pU
        }),
        children: [pU && (0, cU.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: qU("settingsMenu:accountSettingsInGameWarning")
        }), (0, cU.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, cU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [qU("homePage:discordNamePopupTitle"), (0, cU.jsxs)(BU.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, rU.j)({
                name: hU.getPlayerName()
              }),
              onClick: () => {
                wU.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, cU.jsx)(TU.c, {
                name: "arrow-up-right-from-square"
              }), " ", qU("profileCard:viewProfile")]
            })]
          }), (0, cU.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, cU.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [eU.featureFlags.canChangeName && (0, cU.jsx)(mU.d, {
                className: "EnterName",
                placeholderText: qU("homePage:enterName"),
                maxLength: VU.h,
                defaultValue: fU,
                onValueChange: UU => {
                  xR(UU)
                },
                forcedText: OU || !eU.featureFlags.canChangeName ? fU : null,
                blurOnEnter: !0,
                domRef: pR
              }), (0, cU.jsx)(QU.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  xR((0, VU.f)())
                },
                children: (0, cU.jsx)(TU.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !eU.featureFlags.canChangeName && (0, cU.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, VU.c)(fU, !eU.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, cU.jsx)(QU.e, {
              className: "ChooseNameButton",
              disabled: OU || fU === hU.getPlayerName(),
              onClick: () => {
                fU.length < VU.j ? bU(qU("homePage:changeNameMinLengthError", {
                  length: VU.j
                })) : fU.length > VU.h ? bU(qU("homePage:changeNameMaxLengthError", {
                  length: VU.h
                })) : (UR(!0), bU(null), async function(UU, RU, gU, tU) {
                  const pU = await (0, ZU.postJsonWithMetricsCookiesAndJsonResponse)(`${aU.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: UU
                  }, {
                    retries: 3
                  }, RU.getMetricsCookies()).catch((UU => (console.error("Bad response from the server when trying to update name:", UU), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  pU.err ? (console.error("Error when trying to get with new name from DB", pU.err), tU(pU.err)) : !0 === pU.nameExists ? tU("Name is already taken") : gU(UU)
                }(fU, hU, (UU => {
                  hU.setPlayerName(UU), UR(!1)
                }), (UU => {
                  bU(UU), UR(!1)
                })))
              },
              children: qU("general:choose")
            })]
          }), nU && (0, cU.jsx)("div", {
            className: "ChooseAccNameError",
            children: nU
          })]
        }), (0, cU.jsx)(JU.b, {
          label: (() => {
            if ((0, LU.q)(GU)) {
              const UU = (0, PU.n)(KU.code, "general:timeLeft"),
                RU = (0, HU.kb)(UU, Date.now(), GU + LU.m);
              return `${qU("settingsMenu:hideSocialLocation")} (${qU("general:timeLeft",{time:RU})})`
            }
            return qU("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const UU = !(0, LU.q)(GU);
            (0, lU.reportAnalyticsClick)({
              id: "social.hide_location",
              value: UU ? "on" : "off"
            }), tR(!0), dU.c.setHideSocialLocation(hU, UU).then((() => {
              wU.b.set({
                hideSocialLocationFrom: UU ? Date.now() : null
              })
            })).finally((() => {
              tR(!1)
            }))
          },
          checked: (0, LU.q)(GU),
          disabled: gR
        }), QR && (0, cU.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, cU.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qU("settingsMenu:socialLinks")
          }), CR && (0, cU.jsx)(IU.d, {}), !CR && (0, cU.jsx)(NU.c, {
            socialLinks: GR,
            editable: !0,
            userContext: hU,
            onLinksUpdated: WR
          })]
        }), (0, cU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, cU.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qU(cR ? "auth:loginOrSwitchAccount" : "auth:login")
          }), TR && (0, cU.jsx)(IU.d, {}), !TR && 0 === qR.length && (0, cU.jsx)("div", {
            className: "NoLoginOptions",
            children: qU("auth:noLoginOptions")
          }), !TR && qR.length > 0 && "crazygames" !== oU.t && (0, cU.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: qR
          }), !TR && qR.length > 0 && "crazygames" === oU.t && (0, cU.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [qR[0], qR.length > 1 && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, cU.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: qU("auth:legacyLoginOptions")
                }), (0, cU.jsx)(DU.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: qU("auth:legacyLoginOptionsInfo")
                })]
              }), (0, cU.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: qR.slice(1)
              })]
            })]
          }), eU.featureFlags.useLogin && (null !== hU.loggedInInfo || hU.isLoggedIn()) && (0, cU.jsxs)(cU.Fragment, {
            children: [(0, cU.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, cU.jsxs)(QU.E, {
              onClick: () => {
                (0, ZU.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, cU.jsx)(TU.c, {
                name: "right-from-bracket"
              }), qU("auth:signOut")]
            })]
          })]
        }), !hU.playerHasRank("super") && (0, sU.purchasesAllowed)() && (0, cU.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, cU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, cU.jsx)(TU.c, {
              name: "bolt"
            }), qU("homePage:superRank")]
          }), (0, cU.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, cU.jsxs)(QU.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, SU.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, cU.jsx)(TU.c, {
                name: "bolt"
              }), qU("homePage:getSuperRank")]
            }), (0, cU.jsxs)(QU.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, SU.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, cU.jsx)(TU.c, {
                name: "bolt"
              }), qU("homePage:giftSuperRank")]
            })]
          })]
        }), hU.playerHasRank("super") && (0, cU.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, cU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, cU.jsx)(TU.c, {
              name: "bolt"
            }), qU("homePage:superRank"), zU && (0, cU.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", zU, ")"]
            })]
          }), (0, sU.purchasesAllowed)() && (0, cU.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, HU.Bc)(hU.superRankInfo) && (0, cU.jsxs)(QU.j, {
              className: "AccountSettingsSuperRankProlong",
              loading: yU,
              onClick: () => {
                FU(XU.l.id, null)
              },
              children: [(0, cU.jsx)(TU.c, {
                name: "bolt"
              }), qU("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: XU.l.product.days,
                price: XU.l.price
              })]
            }), (0, cU.jsxs)(QU.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, SU.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, cU.jsx)(TU.c, {
                name: "bolt"
              }), qU("homePage:giftSuperRank")]
            })]
          }), kU && (0, cU.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: qU(kU.translationKey)
          })]
        }), (0, cU.jsx)(RR, {
          showing: gU
        }), eU.featureFlags.useSocialFeatures && (0, cU.jsx)(eR, {
          showing: gU
        }), (0, cU.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, cU.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, cU.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qU(fR(KR, cR))
            }), (0, oU.e)() && (0, cU.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qU("auth:discordActivityKickWarning")
            }), (0, cU.jsx)(uR, {
              showing: gU
            })]
          }), (0, cU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: qU("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function fR(UU, RU) {
      return UU ? RU ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var xR = gU(8893),
      mR = gU(2825),
      IR = gU(1249),
      JR = gU(1403);
    const wR = (0, tU.memo)((function(UU) {
        let {
          inGame: RU
        } = UU;
        const {
          t: gU,
          selectedLanguage: tU
        } = (0, PU.B)(), {
          clientEscMenuOptions: pU,
          showDebugOverlay: EU
        } = (0, wU.l)(["clientEscMenuOptions", "showDebugOverlay"]), TU = (0, CU.g)("hideCoordinates");
        let qU = "settingsMenu:showCoordinates",
          KU = "settingsMenu:showChunkCoordinates";

        function GU(UU) {
          const RU = new Intl.DisplayNames([UU], {
            type: "language"
          }).of(UU);
          return RU.charAt(0).toUpperCase() + RU.slice(1)
        }
        return TU && (qU = "settingsMenu:showCoordinatesHidden", KU = "settingsMenu:showChunkCoordinatesHidden"), (0, cU.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [RU && eU.featureFlags.canUseInviteLinks && (0, cU.jsxs)("div", {
            className: "SettingBox",
            children: [(0, cU.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: gU("settingsMenu:inviteLink")
            }), (0, cU.jsx)(xR.d, {})]
          }), (0, cU.jsxs)("div", {
            className: "SettingBox",
            children: [(0, cU.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: gU("settingsMenu:language")
            }), (0, cU.jsx)(mR.c, {
              options: Object.entries(PU.h).map((UU => {
                let [RU, gU] = UU;
                return {
                  label: (0, cU.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, cU.jsx)("img", {
                      src: gU.flagImg,
                      alt: "flag"
                    }), (0, cU.jsxs)("span", {
                      children: [GU(RU), " ", (0, cU.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", RU, ")"]
                      })]
                    })]
                  }),
                  value: RU
                }
              })),
              value: tU.code,
              onChange: UU => {
                IR.g.get().setCurrentLanguage(UU.value)
              }
            })]
          }), !(0, eU.isMobileApp)() && (0, JR.f)() && eU.featureFlags.useForceRotateForceFullscreenOverlay && (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:disableFullscreenMode"),
            checked: pU.disableFullscreen,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                disableFullscreen: UU
              })
            }
          }), (0, cU.jsx)(JU.b, {
            label: gU(qU),
            checked: pU.showCoordinates,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showCoordinates: UU
              })
            },
            disabled: TU
          }), (0, cU.jsx)(JU.b, {
            label: gU(KU),
            checked: pU.showChunkCoordinates,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showChunkCoordinates: UU
              })
            },
            disabled: TU
          }), (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:showFps"),
            checked: pU.showFPS,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showFPS: UU
              })
            }
          }), (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:disableBunnyHopping"),
            checked: pU.disableBunnyHopping,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                disableBunnyHopping: UU
              })
            }
          }), (0, ER.z)() && (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:showChat"),
            checked: pU.showChat,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showChat: UU
              })
            }
          }), (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:showDebugOverlay"),
            checked: EU,
            onClick: UU => {
              wU.b.set({
                showDebugOverlay: UU
              })
            }
          }), eU.featureFlags.useSocialFeatures && (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:showFriendOnlineToasts"),
            checked: pU.showFriendOnlineToasts,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showFriendOnlineToasts: UU
              })
            }
          }), (0, cU.jsx)(JU.b, {
            label: gU("settingsMenu:showNewItemIndicator"),
            checked: pU.showNewItemIndicator,
            onClick: UU => {
              wU.b.setClientEscMenuOptions({
                showNewItemIndicator: UU
              })
            }
          })]
        })
      })),
      nR = (0, tU.memo)((function() {
        const {
          t: UU
        } = (0, PU.B)(), {
          soundVolume: RU,
          musicVolume: gU
        } = (0, wU.l)(["soundVolume", "musicVolume"]);
        return (0, cU.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, cU.jsx)(JU.h, {
            name: UU("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: gU,
            onChange: UU => {
              wU.b.set({
                musicVolume: Math.round(100 * UU) / 100
              })
            },
            format: UU => UU.toFixed(2)
          }), (0, cU.jsx)(JU.h, {
            name: UU("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: RU,
            onChange: UU => {
              wU.b.set({
                soundVolume: Math.round(100 * UU) / 100
              })
            },
            format: UU => UU.toFixed(2)
          })]
        })
      }));
    var bR = gU(682),
      oR = gU(1410),
      ZR = gU(3336),
      aR = gU(8896),
      YR = gU(3182);
    const BR = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function VR() {
      const {
        t: UU
      } = (0, PU.B)(), RU = (0, YR.b)(), {
        mobilePushNotificationsCanAsk: gU
      } = (0, wU.l)(["mobilePushNotificationsCanAsk"]), [pU, EU] = (0, tU.useState)(null), [TU, qU] = (0, tU.useState)(!1), [KU, GU] = (0, tU.useState)(null), [jU, uU] = (0, tU.useState)(!1), CU = (0, tU.useCallback)((() => {
        (0, ZR.e)().then((UU => {
          RU.current && (EU(UU), qU(!1))
        })).catch((UU => {
          console.error("Failed to load push notification targets:", UU), RU.current && qU(!0)
        }))
      }), [RU]), hU = (0, tU.useCallback)((() => {
        (0, aR.d)().then((UU => {
          RU.current && GU((() => UU))
        }))
      }), [RU]);
      (0, tU.useEffect)((() => {
        CU()
      }), [CU]), (0, tU.useEffect)((() => {
        hU()
      }), [hU, gU]), (0, oR.e)(ZR.m, CU);
      const eU = null === pU ? [] : Object.keys(BR).filter((UU => pU[UU] > 0));
      return (0, cU.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, cU.jsx)("div", {
          className: "SliderText",
          children: UU("notificationSettings:pushNotifications")
        }), null === pU && TU && (0, cU.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: UU("notificationSettings:pushTargetsLoadFailed")
        }), null !== pU && 0 === eU.length && (0, cU.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: UU("notificationSettings:pushTargetsNone")
        }), eU.length > 0 && (0, cU.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: eU.map((RU => {
            var gU;
            return (0, cU.jsx)("li", {
              children: UU(BR[RU], {
                count: null !== (gU = null === pU || void 0 === pU ? void 0 : pU[RU]) && void 0 !== gU ? gU : 0
              })
            }, RU)
          }))
        }), null !== KU && (0, cU.jsx)(QU.e, {
          className: "PushNotificationSettingsButton",
          loading: jU,
          onClick: () => {
            uU(!0), KU().catch((UU => {
              console.error("Failed to turn on push notifications:", UU)
            })).finally((() => {
              RU.current && (uU(!1), hU())
            }))
          },
          children: UU("notificationSettings:pushTurnOn")
        })]
      })
    }
    const rR = {
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
      XR = (0, tU.memo)((function() {
        const {
          t: UU
        } = (0, PU.B)(), {
          clientEscMenuOptions: RU
        } = (0, wU.l)(["clientEscMenuOptions"]);
        return (0, cU.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, cU.jsx)(JU.d, {
            label: UU("notificationSettings:friendRequests"),
            options: bR.e.map((RU => ({
              value: RU,
              label: UU(rR[RU].label)
            }))),
            value: RU.friendRequestNotifications,
            onChange: UU => {
              wU.b.setClientEscMenuOptions({
                friendRequestNotifications: UU
              })
            },
            circleInfoText: (0, cU.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: bR.e.map((RU => (0, cU.jsxs)("div", {
                children: [(0, cU.jsx)("b", {
                  children: UU(rR[RU].label)
                }), ": ", UU(rR[RU].info)]
              }, RU)))
            })
          }), (0, cU.jsx)(VR, {})]
        })
      }));
    var vR = gU(4176),
      dR = gU(189),
      HR = gU(274),
      SR = gU(6339),
      sR = gU(3151),
      yR = gU(8902),
      kR = gU(581),
      FR = gU(24);
    var iR = gU(603),
      AR = gU(34),
      zR = gU(4049);
    const MR = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function DR(UU) {
      return MR.has(UU) ? WU.gameBridge.lookup("Km", null) : null
    }

    function LR(UU) {
      if (!(0, kR.E)(wU.b.get("clientEscMenuOptions")[UU])) return wU.b.get("clientEscMenuOptions")[UU];
      const RU = DR(UU);
      return null !== RU ? RU[MR.get(UU)] : AR.k.getItem(UU)
    }

    function NR(UU, RU) {
      if ("useTouchControls" === UU) return void(0, zR.e)(RU);
      UU in wU.b.get("clientEscMenuOptions") && wU.b.setClientEscMenuOptions({
        [UU]: RU
      });
      const gU = DR(UU);
      null !== gU && WU.gameBridge.send("setChunkAddDistance", {
        ...gU,
        [MR.get(UU)]: RU
      }), AR.k.setItem(UU, RU)
    }
    var lR = gU(4082),
      OR = gU(8908),
      Ug = gU(8910),
      Rg = gU(4169);

    function gg(UU) {
      var RU, pU, TU, qU;
      let {
        minChunkAddDist: KU,
        getValue: GU,
        onChange: jU,
        setApplySettingsCallback: uU
      } = UU;
      const {
        t: hU
      } = (0, PU.B)(), {
        clientEscMenuOptions: QU
      } = (0, wU.l)(["clientEscMenuOptions", "showDistantNametags"]), WU = (0, tU.useRef)(GU("showFog")), fU = (0, tU.useRef)(QU.antiAliasing), xU = (0, tU.useRef)(QU.useWebGpu), [mU, IU] = (0, tU.useState)(null), [bU, oU] = (0, tU.useState)((() => (0, sR.f)(eU.featureFlags.settings.canUseShaderPacks))), [ZU] = (0, tU.useState)((() => wU.b.isWebGpuDefaultOff())), [aU] = (0, tU.useState)(HR.c);
      (0, tU.useEffect)((() => {
        let UU = !1;
        return (0, eU.hasUsableWebGpuAdapter)().then((RU => {
          UU || IU(RU)
        })), (0, sR.l)(eU.featureFlags.settings.canUseShaderPacks) && (0, SR.e)().then((async RU => {
          const tU = null !== RU && await async function(UU) {
            const [{
              isShaderPackActive: RU
            }, {
              loadPageShaderPackCompiler: tU
            }] = await Promise.all([gU.e(127).then((() => gU(6330))), Promise.all([gU.e(74), gU.e(131), gU.e(130)]).then((() => gU(6295)))]);
            return RU(UU, await tU())
          }(RU);
          UU || oU(tU)
        })), () => {
          UU = !0
        }
      }), []);
      const YU = function(UU, RU, gU, tU, pU) {
          return (0, yR.c)(gU, tU) && !0 === RU ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== RU ? "settingsMenu:newWebGpu" : pU ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: UU && !1 !== RU,
            disabled: !0 !== RU
          }
        }(QU.useWebGpu, mU, bU, ZU, aU),
        BU = (QU.useWebGpu || (0, yR.c)(bU, ZU)) && bU && !0 === mU,
        VU = (0, CU.g)("lightingOverride"),
        rU = !(0, kR.E)(VU);
      let XU = "settingsMenu:enableLighting";
      rU && (XU = VU ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const vU = UU => {
          var RU, gU, tU;
          const pU = null !== (RU = UU.showFog) && void 0 !== RU ? RU : GU("showFog"),
            EU = null !== (gU = UU.antiAliasing) && void 0 !== gU ? gU : QU.antiAliasing,
            PU = null !== (tU = UU.useWebGpu) && void 0 !== tU ? tU : QU.useWebGpu,
            TU = !iR.u && pU !== WU.current || EU !== fU.current || PU !== xU.current;
          uU(TU ? () => JU.l : null)
        },
        dU = (0, CU.g)("fogChunkDistanceOverride"),
        HU = (0, CU.g)("fogBlockDistanceOverride"),
        SU = !(0, kR.E)(dU) || !(0, kR.E)(HU),
        sU = SU ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [yU, kU] = (0, vR.e)(KU),
        [FU, iU] = (0, Rg.b)(KU),
        AU = hU("settingsMenu:chunkLoadDistanceDeviceLimit"),
        zU = FU < yU,
        MU = Math.min(null !== (RU = GU("chunkHorizAddDist")) && void 0 !== RU ? RU : KU[0], FU),
        DU = !SU && function(UU, RU) {
          return !0 === UU.showFog && UU.fogChunkDistance > RU
        }(QU, MU);
      return (0, cU.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, cU.jsx)(JU.h, {
          name: hU("settingsMenu:horizontalChunkLoadDistance"),
          min: KU[0],
          max: yU,
          selectableMax: FU,
          cappedNote: AU,
          step: 1,
          initValue: MU,
          onChange: UU => {
            !0 === GU("showFog") && UU < GU("fogChunkDistance") && jU("fogChunkDistance", UU), jU("chunkHorizAddDist", UU), FR.p.yh("updatedChunkLoadDist")
          },
          circleInfoText: hU("settingsMenu:chunkLoadDistanceInfo")
        }), (0, cU.jsx)(JU.h, {
          name: hU("settingsMenu:verticalChunkLoadDistance"),
          min: KU[1],
          max: kU,
          selectableMax: iU,
          cappedNote: zU ? void 0 : AU,
          step: 1,
          initValue: Math.min(null !== (pU = GU("chunkVertAddDist")) && void 0 !== pU ? pU : KU[1], iU),
          onChange: UU => {
            jU("chunkVertAddDist", UU), FR.p.yh("updatedChunkLoadDist")
          },
          circleInfoText: hU("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:chunkFadeIn"),
          checked: QU.chunkFadeIn,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              chunkFadeIn: UU
            })
          },
          circleInfoText: hU("settingsMenu:chunkFadeInInfo")
        }), nU.devTools.supports("chunkBorders") && (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:showChunkBorders"),
          checked: QU.showChunkBorders,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              showChunkBorders: UU
            })
          },
          circleInfoText: hU("settingsMenu:showChunkBordersInfo")
        }), (0, cU.jsx)(JU.b, {
          label: hU(XU),
          checked: QU.enableLighting,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              enableLighting: UU
            })
          },
          disabled: rU
        }), (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, cU.jsx)(JU.b, {
            label: hU(sU),
            checked: QU.showFog,
            onClick: UU => {
              vU({
                showFog: UU
              }), wU.b.setClientEscMenuOptions({
                showFog: UU
              })
            },
            disabled: SU,
            className: EU()({
              SettingBoxWarning: DU
            })
          }), (0, cU.jsx)(JU.h, {
            name: hU("settingsMenu:fogChunkDistance"),
            min: KU[0],
            max: dR.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (TU = QU.fogChunkDistance) && void 0 !== TU ? TU : KU[0],
            onChange: UU => {
              wU.b.setClientEscMenuOptions({
                fogChunkDistance: UU
              }), FR.p.yh("fogChunkDistanceChanged", UU)
            },
            circleInfoText: hU("settingsMenu:fogChunkDistanceInfo"),
            disabled: SU || !1 === GU("showFog"),
            className: EU()({
              SettingBoxWarning: DU
            })
          }), DU && (0, cU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: hU("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !iR.u && (0, cU.jsx)(JU.b, {
          label: hU(BU ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !BU && QU.disableTexAtlas,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              disableTexAtlas: UU
            })
          },
          circleInfoText: hU("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: BU
        }), (0, cU.jsx)(JU.h, {
          name: hU("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: QU.cameraFOV,
          onChange: UU => {
            wU.b.setClientEscMenuOptions({
              cameraFOV: UU
            })
          }
        }), (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:disableViewBobbing"),
          checked: QU.disableBobbing,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              disableBobbing: UU
            })
          },
          circleInfoText: hU("settingsMenu:disableViewBobbingInfo")
        }), (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:antiAliasing"),
          checked: QU.antiAliasing,
          onClick: UU => {
            vU({
              antiAliasing: UU
            }), (0, lR.d)("antiAliasing"), wU.b.setClientEscMenuOptions({
              antiAliasing: UU
            })
          },
          circleInfoText: hU("settingsMenu:antiAliasingInfo")
        }), (0, cU.jsx)(JU.h, {
          name: hU("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (qU = QU.pixelScale) && void 0 !== qU ? qU : 1,
          onChange: UU => {
            (UU !== wU.b.get("clientEscMenuOptions").pixelScale || (0, Ug.o)()) && (0, lR.d)("pixelScale"), wU.b.setClientEscMenuOptions({
              pixelScale: UU
            })
          },
          circleInfoText: hU("settingsMenu:pixelScaleInfo"),
          format: UU => `${UU}x`
        }), (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:pixelSmoothing"),
          checked: QU.pixelSmoothing,
          onClick: UU => {
            wU.b.setClientEscMenuOptions({
              pixelSmoothing: UU
            })
          },
          circleInfoText: hU("settingsMenu:pixelSmoothingInfo")
        }), iR.u && (0, cU.jsx)(JU.b, {
          label: hU("settingsMenu:distantNametags"),
          checked: (0, OR.c)(),
          onClick: UU => {
            wU.b.set({
              showDistantNametags: UU
            })
          },
          circleInfoText: hU("settingsMenu:distantNametagsInfo")
        }), (0, cU.jsx)(JU.b, {
          label: hU(YU.translationKey),
          checked: YU.checked,
          onClick: UU => {
            vU({
              useWebGpu: UU
            }), wU.b.setClientEscMenuOptions({
              useWebGpu: UU
            })
          },
          circleInfoText: hU("settingsMenu:newWebGpuInfo"),
          disabled: YU.disabled
        })]
      })
    }
    var tg = gU(4075),
      pg = gU(8492),
      Eg = gU(8925),
      Pg = gU(8505),
      Tg = gU(8927);
    const qg = {
        color: 16777215,
        name: "white"
      },
      Kg = {
        color: 0,
        name: "black"
      },
      cg = [qg, {
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
      }, Kg],
      Gg = [Kg, qg];

    function jg(UU) {
      return `${UU} px`
    }

    function ug(UU) {
      return `${UU}%`
    }

    function Cg(UU) {
      let {
        label: RU,
        value: gU,
        swatches: tU,
        onChange: pU
      } = UU;
      const {
        t: TU
      } = (0, PU.B)(), qU = !tU.some((UU => UU.color === gU));
      return (0, cU.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, cU.jsx)("div", {
          className: "SliderText",
          children: RU
        }), (0, cU.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": RU,
          children: [tU.map((UU => {
            let {
              color: RU,
              name: tU
            } = UU;
            return (0, cU.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": RU === gU,
              "aria-label": TU(`crosshairSettings:color_${tU}`),
              "data-pad-focusable": !0,
              className: EU()("CrosshairSwatch", {
                Selected: RU === gU
              }),
              style: {
                background: (0, Tg.j)(RU)
              },
              onClick: () => {
                pU(RU)
              }
            }, RU)
          })), (0, cU.jsx)("label", {
            className: EU()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: qU
            }),
            style: qU ? {
              background: (0, Tg.j)(gU)
            } : void 0,
            title: TU("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, cU.jsx)("input", {
              type: "color",
              "aria-label": TU("crosshairSettings:customColor"),
              value: (0, Tg.j)(gU),
              onChange: UU => {
                const RU = (0, Tg.n)(UU.target.value);
                null !== RU && pU(RU)
              }
            })
          })]
        })]
      })
    }

    function hg(UU) {
      let {
        settings: RU,
        onChange: gU
      } = UU;
      const {
        t: tU
      } = (0, PU.B)(), pU = (UU, tU) => {
        gU((0, Tg.s)(RU, UU, tU))
      }, EU = function(UU, gU) {
        let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jg;
        const {
          min: EU,
          max: PU,
          step: TU
        } = Tg.c[UU];
        return (0, cU.jsx)(JU.h, {
          name: gU,
          min: EU,
          max: PU,
          step: TU,
          initValue: RU[UU],
          format: tU,
          onChange: RU => {
            pU(UU, RU)
          }
        }, UU)
      }, TU = ["lines", "dot", "circle"].filter((UU => RU[UU])), qU = (UU, gU, tU) => (0, cU.jsx)(JU.b, {
        label: gU,
        checked: RU[UU],
        disabled: 1 === TU.length && TU[0] === UU,
        circleInfoText: tU,
        onClick: RU => {
          pU(UU, RU)
        }
      }, UU), KU = "shapes" === RU.style;
      return (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsx)(JU.d, {
          label: tU("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: tU("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: tU("crosshairSettings:styleShapes")
          }],
          value: RU.style,
          onChange: UU => {
            pU("style", UU)
          }
        }), (0, cU.jsx)(Cg, {
          label: tU("crosshairSettings:color"),
          value: RU.color,
          swatches: cg,
          onChange: UU => {
            pU("color", UU)
          }
        }), EU("opacity", tU("crosshairSettings:opacity"), ug), !KU && EU("size", tU("crosshairSettings:size"), ug), KU && (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qU("lines", tU("crosshairSettings:lines")), RU.lines && EU("lineLength", tU("crosshairSettings:lineLength")), RU.lines && EU("lineThickness", tU("crosshairSettings:lineThickness")), RU.lines && EU("gap", tU("crosshairSettings:gap")), RU.lines && qU("tStyle", tU("crosshairSettings:tStyle"))]
        }), KU && (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qU("dot", tU("crosshairSettings:dot")), RU.dot && EU("dotSize", tU("crosshairSettings:dotSize"))]
        }), KU && (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qU("circle", tU("crosshairSettings:circle")), RU.circle && EU("circleRadius", tU("crosshairSettings:circleRadius")), RU.circle && EU("circleThickness", tU("crosshairSettings:circleThickness"))]
        }), (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [EU("outline", tU("crosshairSettings:outline"), (UU => UU > 0 ? jg(UU) : tU("crosshairSettings:off"))), RU.outline > 0 && (0, cU.jsx)(Cg, {
            label: tU("crosshairSettings:outlineColor"),
            value: RU.outlineColor,
            swatches: Gg,
            onChange: UU => {
              pU("outlineColor", UU)
            }
          })]
        }), qU("growOnClick", tU("crosshairSettings:growOnClick")), KU && qU("forGuns", tU("crosshairSettings:forGuns"), tU("crosshairSettings:forGunsInfo"))]
      })
    }
    var Qg = gU(74),
      eg = gU(1283),
      Wg = gU(8933),
      fg = gU(8936),
      xg = gU(8942),
      mg = gU(8947);
    const Ig = ["sky", "grass", "stone", "sand", "snow", "night"],
      Jg = "4rem";

    function wg(UU) {
      return {
        backgroundImage: `url(${UU})`,
        backgroundSize: `${Jg} ${Jg}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function ng(UU) {
      return {
        ...(() => {
          switch (UU) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return wg(Wg);
            case "stone":
              return wg(fg);
            case "sand":
              return wg(xg);
            case "snow":
              return wg(mg);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function bg(UU) {
      return Object.freeze({
        ...Tg.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...UU
      })
    }
    const og = [{
        id: "default",
        settings: Tg.d
      }, {
        id: "cross",
        settings: bg({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: bg({
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
        settings: bg({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: bg({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: bg({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: bg({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: bg({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Zg = ["growOnClick", "forGuns"];
    var ag = gU(8953);

    function Yg(UU) {
      let {
        label: RU,
        selected: gU,
        onClick: tU,
        className: pU,
        style: PU,
        children: TU
      } = UU;
      return (0, cU.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": gU,
        title: RU,
        "aria-label": RU,
        "data-pad-focusable": !0,
        className: EU()("CrosshairBackdropSwatch", pU, {
          Selected: gU
        }),
        style: PU,
        onClick: tU,
        children: TU
      })
    }

    function Bg(UU) {
      let {
        backdrop: RU,
        onChange: gU,
        game: tU
      } = UU;
      const {
        t: pU
      } = (0, PU.B)();
      return (0, cU.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": pU("crosshairSettings:background"),
        children: [tU && (0, cU.jsx)(Yg, {
          label: pU("crosshairSettings:bg_game"),
          selected: tU.selected,
          onClick: tU.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, cU.jsx)(TU.c, {
            name: "cube"
          })
        }), Ig.map((UU => (0, cU.jsx)(Yg, {
          label: pU(`crosshairSettings:bg_${UU}`),
          selected: !(null !== tU && void 0 !== tU && tU.selected) && UU === RU,
          style: ng(UU),
          onClick: () => {
            gU(UU)
          }
        }, UU)))]
      })
    }

    function Vg(UU) {
      let {
        settings: RU,
        touch: gU,
        backdrop: tU,
        onChange: pU
      } = UU;
      const {
        t: TU
      } = (0, PU.B)(), qU = function(UU) {
        var RU;
        return null !== (RU = og.find((RU => (0, Tg.r)(RU.settings, UU, Zg)))) && void 0 !== RU ? RU : null
      }(RU);
      return (0, cU.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": TU("crosshairSettings:presets"),
        children: og.map((UU => {
          const PU = (null === qU || void 0 === qU ? void 0 : qU.id) === UU.id;
          return (0, cU.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": PU,
            "data-pad-focusable": !0,
            className: EU()("CrosshairPreset", {
              Selected: PU
            }),
            onClick: () => {
              pU(function(UU, RU) {
                return {
                  ...RU.settings,
                  growOnClick: UU.growOnClick,
                  forGuns: UU.forGuns
                }
              }(RU, UU))
            },
            children: [(0, cU.jsx)("div", {
              className: "CrosshairPresetStage",
              style: ng(tU),
              children: (0, cU.jsx)(ag.e, {
                settings: UU.settings,
                touch: gU,
                inPreview: !0
              })
            }), (0, cU.jsx)("div", {
              className: "CrosshairPresetName",
              children: TU(`crosshairSettings:preset_${UU.id}`)
            })]
          }, UU.id)
        }))
      })
    }
    var rg = gU(1598);

    function Xg(UU, RU) {
      const [gU, pU] = (0, tU.useState)(!1), EU = () => {
        pU(!1)
      }, [PU, TU] = (0, tU.useState)(!1), qU = (0, tU.useRef)({
        growOnClick: UU.growOnClick,
        forGuns: UU.forGuns
      });
      (0, tU.useEffect)((() => {
        const RU = qU.current;
        qU.current = {
          growOnClick: UU.growOnClick,
          forGuns: UU.forGuns
        }, (UU.growOnClick && !RU.growOnClick || UU.forGuns && !RU.forGuns) && TU(!0)
      }), [UU.growOnClick, UU.forGuns]), (0, tU.useEffect)((() => {
        if (!PU) return;
        const UU = setTimeout((() => {
          TU(!1)
        }), 600);
        return () => {
          clearTimeout(UU)
        }
      }), [PU]);
      const KU = gU || PU;
      return {
        view: {
          pressed: KU,
          spread: KU && UU.forGuns && !UU.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: UU => {
            !UU.target.closest(RU) && (0, rg.e)(UU.currentTarget, UU.pointerId) && pU(!0)
          },
          onPointerUp: EU,
          onPointerCancel: EU,
          onLostPointerCapture: EU
        }
      }
    }

    function vg(UU) {
      let {
        settings: RU,
        touch: gU,
        backdrop: tU,
        className: pU,
        children: PU,
        label: TU
      } = UU;
      const qU = Xg(RU, ".CrosshairStageControls");
      return (0, cU.jsxs)("div", {
        className: EU()("CrosshairStage", pU),
        style: ng(tU),
        ...qU.handlers,
        children: [(0, cU.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": TU,
          children: (0, cU.jsx)(ag.e, {
            settings: RU,
            touch: gU,
            inPreview: !0,
            ...qU.view
          })
        }), PU]
      })
    }
    const dg = "crosshairFullScreen";

    function Hg(UU) {
      let {
        settings: RU,
        touch: gU,
        backdrop: pU,
        onBackdrop: qU,
        inGame: KU,
        onChange: GU,
        onClose: jU
      } = UU;
      const {
        t: uU
      } = (0, PU.B)(), CU = (0, tU.useRef)(null);
      (0, eg.q)("popup", CU, jU),
      function(UU) {
        const RU = (0, tU.useRef)(UU);
        RU.current = UU, (0, tU.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [dg]: !0
          }, "");
          let UU = !1;
          const gU = () => {
            UU = !0, RU.current()
          };
          return window.addEventListener("popstate", gU), () => {
            var RU;
            window.removeEventListener("popstate", gU), !UU && null !== (RU = window.history.state) && void 0 !== RU && RU[dg] && window.history.back()
          }
        }), [])
      }(jU);
      const hU = (0, tU.useRef)(jU);
      hU.current = jU, (0, tU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), hU.current())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), []);
      const eU = Xg(RU, ".CrosshairFullScreenPanel"),
        [WU, fU] = (0, tU.useState)(!0),
        xU = WU && KU;
      (0, tU.useEffect)((() => {
        if (xU) return wU.b.set({
          crosshairGameView: !0
        }), () => {
          wU.b.set({
            crosshairGameView: !1
          })
        }
      }), [xU]);
      const [mU, IU] = (0, tU.useState)(!0);
      return (0, Qg.createPortal)((0, cU.jsxs)("div", {
        ref: CU,
        className: "CrosshairFullScreen",
        style: xU ? void 0 : ng(pU),
        ...eU.handlers,
        children: [(0, cU.jsx)(ag.e, {
          settings: RU,
          touch: gU,
          inEditor: !0,
          ...eU.view
        }), (0, cU.jsxs)("div", {
          className: EU()("CrosshairFullScreenPanel", {
            Collapsed: !mU
          }),
          children: [(0, cU.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, cU.jsx)(Bg, {
              backdrop: pU,
              onChange: UU => {
                fU(!1), qU(UU)
              },
              game: KU ? {
                selected: xU,
                onSelect: () => {
                  fU(!0)
                }
              } : void 0
            }), (0, cU.jsx)(QU.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: uU(mU ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                IU(!mU)
              },
              children: (0, cU.jsx)(TU.c, {
                name: mU ? "caret-up" : "pen"
              })
            }), (0, cU.jsx)(QU.e, {
              className: "CrosshairFullScreenDone",
              onClick: jU,
              padDefaultFocus: !0,
              children: uU("crosshairSettings:done")
            })]
          }), mU && (0, cU.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, cU.jsx)(Vg, {
              settings: RU,
              touch: gU,
              backdrop: pU,
              onChange: GU
            }), (0, cU.jsx)(hg, {
              settings: RU,
              onChange: GU
            })]
          })]
        })]
      }), document.body)
    }
    var Sg = gU(2462),
      sg = gU(8966);

    function yg(UU) {
      let {
        settings: RU,
        onChange: gU
      } = UU;
      const {
        t: pU
      } = (0, PU.B)(), qU = (0, sg.g)(RU), [KU, GU] = (0, Sg.h)(), [jU, uU] = (0, tU.useState)(!1), CU = (0, tU.useRef)(null), [hU, eU] = (0, Sg.h)(), [WU, fU] = (0, tU.useState)(!1);
      return (0, cU.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, cU.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, cU.jsxs)(QU.M, {
            className: EU()("CrosshairCopy", {
              ActiveSecondaryButton: KU
            }),
            onClick: () => {
              (0, Sg.f)(qU, {
                useShareSheet: !1,
                onOutcome: UU => {
                  uU("failed" === UU), "copied" === UU && GU()
                }
              })
            },
            children: [(0, cU.jsx)(TU.c, {
              name: KU ? "check" : "copy"
            }), " ", pU(KU ? "general:copied" : "crosshairSettings:copy")]
          }), (0, cU.jsx)(mU.d, {
            className: "CrosshairPaste",
            domRef: CU,
            ariaLabel: pU("crosshairSettings:paste"),
            placeholderText: pU("crosshairSettings:paste"),
            onValueChange: UU => {
              const RU = (0, sg.d)(UU);
              fU(!RU && UU.trim().length >= sg.b), RU && (gU(RU), CU.current.value = "", eU())
            }
          })]
        }), jU && (0, cU.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: qU,
          "aria-label": pU("crosshairSettings:copy"),
          onFocus: UU => {
            UU.currentTarget.select()
          }
        }), (0, cU.jsxs)("div", {
          "aria-live": "polite",
          children: [WU && (0, cU.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: pU("crosshairSettings:pasteInvalid")
          }), hU && !WU && (0, cU.jsx)("div", {
            className: "CrosshairShareNote",
            children: pU("crosshairSettings:applied")
          })]
        })]
      })
    }
    var kg = gU(8969);
    let Fg = "sky";

    function ig(UU) {
      let {
        showing: RU
      } = UU;
      const {
        t: gU
      } = (0, PU.B)(), {
        isTouchScreen: pU,
        gameState: EU,
        clientEscMenuOptions: qU
      } = (0, wU.l)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), KU = (0, kg.h)(), [GU, jU] = (0, tU.useState)(Fg), uU = UU => {
        Fg = UU, jU(UU)
      }, [CU, hU] = (0, tU.useState)(!1);
      return (0, tU.useEffect)((() => {
        RU || hU(!1)
      }), [RU]), (0, cU.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, cU.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, cU.jsx)(vg, {
            className: "CrosshairPreviewStage",
            settings: KU,
            touch: pU,
            backdrop: GU,
            label: gU("crosshairSettings:preview"),
            children: (0, cU.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, cU.jsx)(Bg, {
                backdrop: GU,
                onChange: uU
              }), (0, cU.jsxs)(QU.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  hU(!0)
                },
                children: [(0, cU.jsx)(TU.c, {
                  name: "expand"
                }), " ", gU("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, cU.jsx)("div", {
          className: "SettingBox",
          children: (0, cU.jsx)(Vg, {
            settings: KU,
            touch: pU,
            backdrop: GU,
            onChange: kg.d
          })
        }), (0, cU.jsx)(yg, {
          settings: KU,
          onChange: kg.d
        }), pU && (0, cU.jsx)(Pg.b, {
          note: (0, Eg.h)(pU, qU.touchActionButtons) ? gU("crosshairSettings:touchNote") : void 0
        }), (0, cU.jsx)(hg, {
          settings: KU,
          onChange: kg.d
        }), CU && (0, cU.jsx)(Hg, {
          settings: KU,
          touch: pU,
          backdrop: GU,
          onBackdrop: uU,
          inGame: "inGame" === EU,
          onChange: kg.d,
          onClose: () => {
            hU(!1)
          }
        })]
      })
    }
    var Ag = gU(8501),
      zg = gU(1371),
      Mg = gU(4663),
      Dg = gU(8978),
      Lg = gU(1834),
      Ng = gU(3967),
      lg = gU(1836),
      Og = gU(688);
    const Ut = (0, tU.memo)((function() {
      const {
        clientEscMenuOptions: UU
      } = (0, wU.l)(["clientEscMenuOptions"]), {
        recording: RU,
        clipping: gU,
        hasClipBuffer: pU
      } = (0, Lg.k)("replayRecorder"), PU = (0, Lg.h)("connectedGame", (UU => UU.replay)), TU = (0, Ng.i)(), qU = !1 === (0, CU.g)("canRecordReplays");
      (0, tU.useEffect)((() => {
        WU.gameBridge.send("setRecorderPrefs", {
          clipping: UU.enableClipping,
          clipSeconds: UU.clipDurationSeconds
        })
      }), [UU.enableClipping, UU.clipDurationSeconds]);
      const KU = TU || PU,
        GU = !KU && !qU,
        jU = RU || GU,
        uU = GU,
        hU = uU && gU && !RU;

      function eU() {
        jU && WU.gameBridge.send("toggleRecording", null)
      }
      return (0, cU.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, cU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, cU.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: RU ? (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsxs)(QU.E, {
                className: "ReplayViewerCategoryButton",
                onClick: eU,
                disabled: !jU,
                children: [(0, cU.jsx)("span", {
                  children: "Stop Recording"
                }), (0, cU.jsx)(lg.b, {
                  noaAction: "recordGame"
                })]
              }), (0, cU.jsx)(Dg.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, cU.jsxs)(QU.e, {
              className: "ReplayViewerCategoryButton",
              onClick: eU,
              disabled: !jU,
              children: [(0, cU.jsx)("span", {
                children: "Start Recording"
              }), (0, cU.jsx)(lg.b, {
                noaAction: "recordGame"
              })]
            })
          }), qU && (0, cU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), KU && !RU && (0, cU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, cU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, cU.jsx)(JU.b, {
            label: "Enable clipping",
            checked: UU.enableClipping,
            disabled: !uU,
            onClick: function(UU) {
              uU && wU.b.setClientEscMenuOptions({
                enableClipping: UU
              })
            },
            className: EU()({
              SettingBoxDisabled: !uU
            })
          }), (0, cU.jsx)(JU.h, {
            name: "Clip duration (seconds)",
            min: Og.n,
            max: Og.k,
            step: Og.d,
            initValue: UU.clipDurationSeconds,
            onChange: function(UU) {
              wU.b.setClientEscMenuOptions({
                clipDurationSeconds: UU
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !uU || !UU.enableClipping
          })]
        }), (0, cU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, cU.jsxs)(QU.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              hU && WU.gameBridge.send("saveClip", null)
            },
            disabled: !hU,
            children: [(0, cU.jsx)("span", {
              children: "Record clip"
            }), (0, cU.jsx)(lg.b, {
              noaAction: "recordClip"
            })]
          }), UU.enableClipping && !pU && uU && !RU && (0, cU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), RU && (0, cU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, cU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, cU.jsxs)(QU.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Ng.f)(!0), wU.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: TU,
            children: [(0, cU.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, cU.jsx)(lg.b, {
              noaAction: "replayViewerOpen"
            })]
          }), TU && (0, cU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, cU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, cU.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, cU.jsx)("iframe", {
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
    var Rt = gU(1771);
    const gt = {
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
        icon: () => (0, cU.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, cU.jsx)("path", {
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
      Fu: {
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

    function tt() {
      return Promise.all([gU.e(74), gU.e(131), gU.e(125), gU.e(122)]).then((() => gU(40457))).then((UU => ({
        default: UU.ShaderPackCategory
      })), (UU => (console.error("Failed to load the shader pack settings", UU), {
        default: pt
      })))
    }

    function pt() {
      const {
        t: UU
      } = (0, PU.B)();
      return (0, cU.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: UU("shaderPack:tabLoadFailed")
      })
    }
    var Et = gU(1362);
    const Pt = (0, tU.lazy)((() => gU.e(263).then((() => gU(40448))).then((UU => ({
        default: UU.BloxdInformation
      }))))),
      Tt = (0, tU.lazy)(tt);

    function qt(UU) {
      return UU ? "general" : "account"
    }
    const Kt = new Map,
      ct = (0, tU.memo)((function(UU) {
        let {
          show: RU,
          setBeforeResumeCallback: gU
        } = UU;
        (0, hU.d)();
        const {
          gameState: pU,
          openSettingsCategory: EU
        } = (0, wU.l)(["gameState", "openSettingsCategory"]), {
          userContext: qU
        } = (0, uU.e)(), {
          t: KU
        } = (0, PU.B)(), mU = (0, jU.b)(), IU = (0, CU.g)("minChunkAddDist"), JU = "inGame" === pU, [nU, ZU] = (0, tU.useState)(qt(JU)), [aU, YU] = (0, tU.useState)(null), [BU, VU] = (0, tU.useState)([]), rU = (0, tU.useRef)(function() {
          const UU = new Date,
            RU = 6 * (UU.getMonth() + UU.getDate()) % KR.z.length;
          return [...KR.z, ...KR.z].slice(RU, RU + 6)
        }()), XU = (0, tU.useRef)(null), vU = (0, oR.h)(zg.k, (0, zg.c)()), dU = Object.keys(gt).filter((UU => {
          switch (UU) {
            case "replayViewer":
              return JU;
            case "developerTools":
              return qU.playerHasRank("developer") || !1;
            case "texturePack":
              return eU.featureFlags.settings.canChangeTexturePack;
            case "Fu":
              return eU.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return eU.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== oU.t;
            case "controller":
              return eU.featureFlags.useControllerSupport && (vU || "controller" === nU);
            default:
              return !0
          }
        }));
        (0, oR.e)("toggleFullCoordinateOverlay", (() => {
          const UU = LR("showCoordinates") && LR("showChunkCoordinates") && LR("showFPS");
          NR("showCoordinates", !UU), NR("showChunkCoordinates", !UU), NR("showFPS", !UU), mU()
        })), (0, oR.e)("updatedChunkLoadDist", (() => {
          mU()
        })), (0, tU.useEffect)((() => {
          if (YU(null), null === wU.b.get("openSettingsCategory")) {
            const UU = (0, Et.g)() ? Kt.get(JU) : void 0;
            ZU(UU && dU.includes(UU) ? UU : qt(JU))
          }
        }), [RU]), (0, tU.useEffect)((() => {
          null !== EU && (ZU(EU), Kt.set(JU, EU), wU.b.set({
            openSettingsCategory: null
          }))
        }), [EU, JU]), (0, tU.useLayoutEffect)((() => {
          XU.current && (XU.current.scrollTop = 0)
        }), [nU, RU]), (0, tU.useEffect)((() => {
          "updateLog" === nU && (0, xU.c)().then(VU)
        }), [nU]), (0, tU.useEffect)((() => {
          if ((0, kR.E)(IU)) return;
          const [UU, RU] = (0, tg.e)(), [gU, tU] = (0, vR.e)(IU), pU = (0, Rt.e)(IU[0], UU, gU), EU = (0, Rt.e)(IU[1], RU, tU);
          WU.gameBridge.send("setChunkAddDistance", {
            horizontal: pU,
            vertical: EU
          })
        }), [IU]);
        const HU = (0, tU.useCallback)((async () => {
          aU && (await aU(), YU(null))
        }), [aU]);

        function SU() {
          wU.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, tU.useEffect)((() => {
          gU((() => HU))
        }), [HU, gU]), (0, cU.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: RU ? {} : {
            display: "none"
          },
          children: [(0, cU.jsx)("div", {
            className: "MenuSideBar",
            children: (0, cU.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, cU.jsx)(GU, {
                items: dU.map((UU => {
                  const RU = gt[UU].icon;
                  return {
                    id: UU,
                    faIcon: "string" === typeof RU ? RU : void 0,
                    iconElement: "string" === typeof RU ? void 0 : (0, cU.jsx)(RU, {}),
                    title: KU(gt[UU].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: nU,
                onClick: UU => {
                  !async function(UU) {
                    await HU(), ZU(UU), Kt.set(JU, UU)
                  }(UU)
                }
              })
            })
          }), (0, cU.jsxs)("div", {
            ref: XU,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === nU && (0, cU.jsx)(WR, {
              showing: RU,
              inGame: JU
            }), "general" === nU && (0, cU.jsx)(wR, {
              inGame: JU
            }), "audio" === nU && (0, cU.jsx)(nR, {}), "notifications" === nU && (0, cU.jsx)(XR, {}), "graphics" === nU && (0, cU.jsx)(gg, {
              minChunkAddDist: null !== IU && void 0 !== IU ? IU : [2, 2],
              getValue: LR,
              onChange: NR,
              setApplySettingsCallback: YU
            }), "controls" === nU && (0, cU.jsx)(pg.e, {}), "crosshair" === nU && (0, cU.jsx)(ig, {
              showing: RU
            }), "controller" === nU && eU.featureFlags.useControllerSupport && (0, cU.jsx)(Ag.c, {}), eU.featureFlags.settings.canChangeTexturePack && "texturePack" === nU && (0, cU.jsx)(Mg.e, {
              setApplySettingsCallback: YU
            }), eU.featureFlags.settings.canUseShaderPacks && "Fu" === nU && (0, cU.jsx)(tU.Suspense, {
              fallback: null,
              children: (0, cU.jsx)(Tt, {
                setApplySettingsCallback: YU
              })
            }), "updateLog" === nU && (0, cU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, cU.jsx)("div", {
                className: "UpdateLogsContainer",
                children: BU.map(((UU, RU) => (0, cU.jsx)(fU.b, {
                  updateLog: UU,
                  index: RU,
                  close: SU
                }, RU)))
              })
            }), "information" === nU && (0, cU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, cU.jsx)(tU.Suspense, {
                fallback: null,
                children: (0, cU.jsx)(Pt, {})
              })
            }), "alternativeDomains" === nU && (0, cU.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, cU.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: KU("settingsMenu:unblockedDomainsDescription")
              }), (0, cU.jsx)("div", {
                className: "AlternativeDomainsList",
                children: rU.current.map((UU => (0, cU.jsxs)(QU.e, {
                  onClick: () => {
                    window.open(`https://${UU}`)
                  },
                  children: [(0, cU.jsx)(TU.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", UU]
                }, UU)))
              })]
            }), "replayViewer" === nU && (0, cU.jsx)(Ut, {}), "developerTools" === nU && (0, cU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, cU.jsx)(bU, {
                setApplySettingsCallback: YU
              })
            }), null !== aU && (0, cU.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, cU.jsx)(QU.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: HU,
                children: KU("general:apply")
              })
            })]
          })]
        })
      }));
    var Gt = gU(2401);
    const jt = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      ut = (0, tU.lazy)((() => Promise.resolve().then((() => gU(4318))).then((UU => {
        UU.needGameClientAfterPaint();
        const RU = UU.matchmakingLibrariesPromise.then((UU => (0, Gt.e)(UU.loadCharacterCustomisationUI(), (UU => UU.CharacterCustomisationUI))));
        return Promise.all([UU.ensureGameSetup(), RU]).then((UU => {
          let [, RU] = UU;
          return RU
        }))
      }))));

    function Ct(UU) {
      let {
        show: RU
      } = UU;
      const {
        userContext: gU
      } = (0, uU.e)(), [pU, EU] = (0, tU.useState)("characters");
      if (!RU) return null;
      const PU = jt.filter((UU => "cape" !== UU && "nameColour" !== UU || gU.getPlayerRanks().includes("super") || (0, sU.purchasesAllowed)())).map((UU => ({
        id: UU,
        faIcon: KR.I[UU],
        title: KR.M[UU],
        redDot: !1
      })));
      return (0, cU.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, cU.jsx)("div", {
          className: "MenuSideBar",
          children: (0, cU.jsx)(GU, {
            items: PU,
            selectedItemId: pU,
            onClick: UU => {
              EU(UU)
            }
          })
        }), (0, cU.jsx)("div", {
          className: "MenuBody",
          children: (0, cU.jsx)(tU.Suspense, {
            fallback: (0, cU.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, cU.jsx)(IU.d, {})
            }),
            children: (0, cU.jsx)(ut, {
              selectedTab: pU
            })
          })
        })]
      })
    }
    var ht = gU(1432),
      Qt = gU(8982),
      et = gU(4195),
      Wt = gU(3117),
      ft = gU(3161),
      xt = gU(9012),
      mt = gU(8405),
      It = gU(8991),
      Jt = gU(9001),
      wt = gU(1790),
      nt = gU(1777),
      bt = gU(4569),
      ot = gU(1265),
      Zt = gU(1217),
      Yt = gU(1591),
      Bt = gU(8475);

    function Vt(UU) {
      return UU ? Object.keys(UU).sort(((RU, gU) => {
        var tU, pU, EU, PU;
        const TU = (null !== (tU = null === (pU = UU[gU]) || void 0 === pU ? void 0 : pU.sortPriority) && void 0 !== tU ? tU : 0) - (null !== (EU = null === (PU = UU[RU]) || void 0 === PU ? void 0 : PU.sortPriority) && void 0 !== EU ? EU : 0);
        return 0 !== TU ? TU : RU.localeCompare(gU)
      })) : []
    }
    const rt = [{
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

    function Xt(UU) {
      for (const {
          threshold: RU,
          suffix: gU
        }
        of rt)
        if (UU >= RU) {
          const tU = UU / RU;
          return tU >= 100 ? `${Math.floor(tU)}${gU}` : tU >= 10 ? `${tU.toFixed(1).replace(/\.0$/,"")}${gU}` : `${tU.toFixed(2).replace(/\.?0+$/,"")}${gU}`
        } return String(UU)
    }
    var vt = gU(4693);
    const dt = {
        normal: "0.8em",
        big: "1em"
      },
      Ht = (0, tU.memo)((function(UU) {
        let {
          item: RU,
          amount: gU = 0,
          size: tU = "normal",
          tier: pU = null
        } = UU;
        return (0, cU.jsx)("div", {
          className: EU()("SmpSlot", `SmpSlot-${tU}`),
          children: RU && (0, cU.jsx)(wt.c, {
            itemName: RU,
            amount: gU > 1 ? gU : 0,
            amountFontSize: dt[tU],
            enchantmentTier: pU
          })
        })
      }));

    function St(UU) {
      let {
        amount: RU,
        exact: gU = !1,
        className: tU
      } = UU;
      return (0, cU.jsxs)("span", {
        className: EU()("SmpGold", tU),
        children: [(0, cU.jsx)("span", {
          className: "SmpCoin",
          children: (0, cU.jsx)(wt.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), gU ? RU.toLocaleString("en-US") : Xt(RU)]
      })
    }

    function st(UU) {
      let {
        count: RU = 5,
        grid: gU = !1
      } = UU;
      return (0, cU.jsx)("div", {
        className: gU ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: RU
        }, ((UU, RU) => (0, cU.jsxs)("div", {
          className: EU()(gU ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, cU.jsx)("div", {
            className: EU()("SmpSlot", gU ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, cU.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, cU.jsx)("b", {}), (0, cU.jsx)("small", {})]
          }), (0, cU.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, RU)))
      })
    }

    function yt(UU) {
      let {
        title: RU,
        children: gU
      } = UU;
      return (0, cU.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, cU.jsx)("b", {
          children: RU
        }), gU && (0, cU.jsx)("small", {
          children: gU
        })]
      })
    }

    function kt(UU) {
      let {
        entry: RU
      } = UU;
      return (0, cU.jsx)(yt, {
        title: (0, cU.jsx)(nt.e, {
          text: RU.item.customTitle
        }),
        children: (0, cU.jsx)(nt.e, {
          text: RU.item.description
        })
      })
    }

    function Ft(UU) {
      return (0, cU.jsx)(vt.d, {
        ...UU,
        className: EU()("SmpChoice", UU.className),
        reselectable: !0
      })
    }

    function it() {
      return (0, cU.jsx)("span", {
        className: "SmpLoader",
        children: (0, cU.jsx)(IU.d, {})
      })
    }

    function At(UU) {
      let {
        value: RU,
        onChange: gU,
        min: pU = 1,
        max: EU,
        step: PU = 1,
        label: TU
      } = UU;
      const qU = (0, tU.useRef)(null),
        KU = (0, tU.useRef)(RU);
      KU.current = RU;
      const [GU, jU] = (0, tU.useState)(null), uU = UU => Math.max(pU, Math.min(EU, Math.floor(UU))), CU = UU => {
        const RU = KU.current,
          tU = "function" === typeof PU ? PU(RU, UU) : PU,
          pU = uU(RU + tU * UU);
        KU.current = pU, gU(pU)
      };
      (0, tU.useEffect)((() => {
        if (null === GU) return;
        let UU;
        const RU = () => {
            jU(null)
          },
          gU = setTimeout((() => {
            UU = setInterval((() => {
              CU(GU);
              const UU = KU.current;
              (GU > 0 ? UU >= EU : UU <= pU) && RU()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", RU), window.addEventListener("pointercancel", RU), window.addEventListener("blur", RU), () => {
          clearTimeout(gU), clearInterval(UU), window.removeEventListener("pointerup", RU), window.removeEventListener("pointercancel", RU), window.removeEventListener("blur", RU)
        }
      }), [GU]), (0, tU.useEffect)((() => {
        const UU = qU.current;
        UU && document.activeElement !== UU && UU.value !== String(RU) && (UU.value = String(RU))
      }), [RU]), (0, tU.useEffect)((() => {
        const UU = qU.current;
        if (!UU) return;
        const RU = () => {
          UU.value = String(KU.current)
        };
        return UU.addEventListener("blur", RU), () => {
          UU.removeEventListener("blur", RU)
        }
      }), []);
      const hU = UU => (0, cU.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${UU>0?"More":"Less"} ${TU}`,
        disabled: UU > 0 ? RU >= EU : RU <= pU,
        onPointerDown: RU => {
          0 === RU.button && (CU(UU), jU(UU))
        },
        onKeyDown: RU => {
          "Enter" !== RU.key && " " !== RU.key || CU(UU)
        },
        onContextMenu: UU => {
          UU.preventDefault()
        },
        children: UU > 0 ? "+" : "\u2212"
      });
      return (0, cU.jsxs)("div", {
        className: "SmpStepper",
        children: [hU(-1), (0, cU.jsx)(mU.d, {
          className: "SmpStepperInput",
          domRef: qU,
          defaultValue: String(RU),
          ariaLabel: TU,
          type: "text",
          blurOnEnter: !0,
          onValueChange: UU => {
            const RU = UU.replace(/[^\d]/g, "");
            qU.current && RU !== UU && (qU.current.value = RU), "" !== RU && gU(uU(Number(RU)))
          }
        }), hU(1)]
      })
    }

    function zt(UU) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, UU))) - 1))
    }
    var Mt = gU(9009),
      Dt = gU(1238);
    const Lt = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Dt.t, HU.Gc.length;
    new Map;
    var Nt = gU(2969);

    function lt(UU, RU) {
      var gU;
      return RU && (null === (gU = UU[RU]) || void 0 === gU ? void 0 : gU.smp) || null
    }

    function Ot(UU, RU) {
      const gU = [];
      for (const pU of Vt(UU)) {
        var tU;
        const EU = UU[pU];
        (null === (tU = EU.smp) || void 0 === tU ? void 0 : tU.kind) === RU && gU.push({
          key: pU,
          item: EU,
          meta: EU.smp
        })
      }
      return gU
    }

    function Up(UU, RU) {
      var gU;
      return null !== (gU = Ot(UU, RU)[0]) && void 0 !== gU ? gU : null
    }
    const Rp = "50% 0% 50% 0%",
      gp = [{
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

    function tp(UU) {
      const RU = UU - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: gU,
          suffix: tU
        }
        of gp)
        if (RU >= gU) return `${Math.floor(RU/gU)}${tU}`;
      return "<1s"
    }

    function pp(UU) {
      const RU = UU.map(mt.h),
        gU = [];
      return RU.forEach(((UU, tU) => {
        const pU = function(UU) {
            const RU = UU.match(/\d+/);
            return RU ? Number(RU[0]) : 0
          }(UU),
          EU = tU === RU.length - 1;
        (EU || 1 === pU || 10 === pU || 100 === pU) && gU.push({
          label: UU,
          quantity: pU,
          isAll: EU
        })
      })), gU
    }
    let Ep = null;

    function Pp(UU, RU) {
      const gU = RU.trim().toLowerCase();
      if (!gU) return [];
      const tU = UU => {
          if (UU === gU) return 0;
          if (UU.startsWith(gU)) return 1;
          const RU = UU.indexOf(gU);
          return -1 === RU ? -1 : 2 + RU
        },
        pU = [];
      for (const TU of UU) {
        const UU = [tU(TU.lowerLabel), tU(TU.lowerName)].filter((UU => -1 !== UU));
        UU.length && pU.push({
          item: TU,
          rank: Math.min(...UU)
        })
      }
      if (pU.length > 0) return pU.sort(((UU, RU) => UU.rank - RU.rank)).map((UU => UU.item));
      const EU = [...gU],
        PU = UU => {
          let RU = 0;
          for (const gU of EU) {
            if (RU = UU.indexOf(gU, RU), -1 === RU) return !1;
            RU++
          }
          return !0
        };
      return UU.filter((UU => PU(UU.lowerLabel) || PU(UU.lowerName)))
    }

    function Tp(UU, RU) {
      var gU;
      return null !== (gU = null === UU || void 0 === UU ? void 0 : UU[RU]) && void 0 !== gU ? gU : RU
    }

    function qp(UU, RU) {
      const gU = UU.userInput;
      return void 0 !== RU && "dropdown" === (null === gU || void 0 === gU ? void 0 : gU.type) && gU.dropdownOptions.map(mt.h).includes(RU) ? RU : function(UU) {
        const RU = UU.userInput;
        if ("dropdown" !== (null === RU || void 0 === RU ? void 0 : RU.type) || 0 === RU.dropdownOptions.length) return null;
        const gU = RU.dropdownOptions.map(mt.h);
        return RU.initialValue && gU.includes(RU.initialValue) ? RU.initialValue : gU[gU.length - 1]
      }(UU)
    }

    function Kp(UU) {
      return void 0 === UU ? "" : JSON.stringify(UU)
    }
    const cp = (0, tU.createContext)(null);

    function Gp() {
      return (0, tU.useContext)(cp)
    }
    var jp = gU(2489);
    const Cp = (0, tU.memo)((function(UU) {
        let {
          name: RU,
          label: gU,
          onPick: tU
        } = UU;
        return (0, cU.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: gU,
          onClick: () => {
            tU(RU)
          },
          children: [(0, cU.jsx)(Ht, {
            item: RU,
            size: "big"
          }), (0, cU.jsx)("span", {
            children: gU
          })]
        })
      })),
      hp = (0, tU.memo)((function(UU) {
        let {
          items: RU,
          query: gU,
          onPick: pU
        } = UU;
        const {
          t: EU
        } = (0, PU.B)(), [TU, qU] = (0, tU.useState)(new Set), KU = (0, tU.useMemo)((() => function(UU) {
          const RU = new Map;
          for (const gU of UU) {
            let UU = RU.get(gU.category);
            UU || (UU = [], RU.set(gU.category, UU)), UU.push(gU)
          }
          return [...Lt, "other"].filter((UU => RU.has(UU))).map((UU => ({
            category: UU,
            items: RU.get(UU)
          })))
        }(RU)), [RU]), GU = (0, tU.useMemo)((() => Pp(RU, gU).slice(0, 60)), [RU, gU]);
        return gU.trim() ? 0 === GU.length ? (0, cU.jsx)(yt, {
          title: EU("smpShop:noItemsFound", {
            query: gU.trim()
          }),
          children: EU("smpShop:tryShorterName")
        }) : (0, cU.jsx)(jp.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Rp,
          observerUpdateDeps: [gU],
          children: GU.map((UU => (0, cU.jsx)(Cp, {
            name: UU.name,
            label: UU.label,
            onPick: pU
          }, UU.name)))
        }) : (0, cU.jsx)(cU.Fragment, {
          children: KU.map((UU => {
            let {
              category: RU,
              items: gU
            } = UU;
            const tU = TU.has(RU) || gU.length <= 48,
              PU = tU ? gU : gU.slice(0, 48);
            return (0, cU.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, cU.jsxs)("h4", {
                children: [EU("other" === RU ? "smpShop:otherItems" : `creativeInventory:${RU}`), !tU && (0, cU.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    qU(new Set([...TU, RU]))
                  },
                  children: EU("smpShop:showAll", {
                    count: gU.length
                  })
                })]
              }), (0, cU.jsx)(jp.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Rp,
                observerUpdateDeps: [tU],
                children: PU.map((UU => (0, cU.jsx)(Cp, {
                  name: UU.name,
                  label: UU.label,
                  onPick: pU
                }, UU.name)))
              })]
            }, RU)
          }))
        })
      }));

    function Qp(UU, RU) {
      const {
        searched: gU,
        shown: pU,
        searchFor: EU,
        loading: PU
      } = function(UU, RU) {
        var gU;
        const pU = Gp(),
          [EU, PU] = (0, tU.useState)(void 0),
          TU = (0, tU.useRef)(void 0),
          qU = (0, tU.useRef)(0),
          KU = (0, tU.useRef)(void 0),
          cU = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.meta.item) && void 0 !== gU ? gU : null,
          GU = !!UU && pU.isPending(UU.key);
        (0, tU.useEffect)((() => {
          if (!UU || GU || !RU || void 0 === EU || EU === cU) return;
          const gU = EU === TU.current && pU.gaveUpAt(UU.key) > qU.current && KU.current !== EU;
          (EU !== TU.current || gU) && pU.act(UU.key, null !== EU && void 0 !== EU ? EU : "*", gU) && (gU && (KU.current = EU), TU.current = EU, qU.current = Date.now())
        }), [UU, GU, RU, EU, cU, pU]);
        const jU = (0, tU.useCallback)((UU => {
            TU.current = void 0, KU.current = void 0, PU(UU)
          }), []),
          uU = void 0 !== EU && EU !== cU && (GU || TU.current !== EU);
        return {
          searched: cU,
          shown: uU ? EU : cU,
          searchFor: jU,
          loading: uU || GU || null !== cU && !RU
        }
      }(UU, RU), TU = (0, tU.useMemo)((() => function() {
        var UU;
        let RU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const pU = `${(0,Nt.g)()}\x1f${RU.join("\x1e")}\x1f${gU.join("\x1e")}\x1f${JSON.stringify(tU)}`;
        if ((null === (UU = Ep) || void 0 === UU ? void 0 : UU.key) === pU) return Ep.items;
        const EU = new Set(gU),
          PU = new Set,
          TU = [],
          qU = (UU, RU) => {
            var gU;
            if (!UU || PU.has(UU) || EU.has(UU)) return;
            PU.add(UU);
            const pU = null !== (gU = tU[UU]) && void 0 !== gU ? gU : UU;
            TU.push({
              name: UU,
              label: pU,
              lowerLabel: pU.toLowerCase(),
              lowerName: UU.toLowerCase(),
              category: RU
            })
          };
        for (const cU of (0, Mt.creativeItemIds)()) {
          var KU;
          (0, Mt.itemIsDisabled)(cU, !0, !0, !1) || (0, Mt.showOnlyInCreativeSearch)(cU) || qU((0, Nt.f)(cU), null !== (KU = (0, Mt.creativeCategoryOf)(cU)) && void 0 !== KU ? KU : "other")
        }
        for (const cU of RU) qU(cU, "other");
        return Ep = {
          key: pU,
          items: TU
        }, TU
      }(null === UU || void 0 === UU ? void 0 : UU.meta.extra, null === UU || void 0 === UU ? void 0 : UU.meta.excluded, null === UU || void 0 === UU ? void 0 : UU.meta.names)), [null === UU || void 0 === UU ? void 0 : UU.meta.extra, null === UU || void 0 === UU ? void 0 : UU.meta.excluded, null === UU || void 0 === UU ? void 0 : UU.meta.names]), [qU, KU] = (0, tU.useState)(""), [cU, GU] = (0, tU.useState)(0), [jU, uU] = (0, tU.useState)("recent"), CU = (0, tU.useCallback)((UU => {
        KU(""), GU((UU => UU + 1)), EU(UU)
      }), [EU]), hU = "browse" === jU || "" !== qU.trim();
      return {
        searched: gU,
        shown: pU,
        searchFor: EU,
        loading: PU,
        catalogue: TU,
        names: null === UU || void 0 === UU ? void 0 : UU.meta.names,
        query: qU,
        setQuery: KU,
        searchBoxKey: cU,
        pickItem: CU,
        setView: uU,
        browsing: hU
      }
    }

    function ep(UU) {
      let {
        browser: RU,
        children: gU
      } = UU;
      const {
        t: tU
      } = (0, PU.B)(), pU = Gp();
      return (0, cU.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, cU.jsx)("div", {
          className: "SmpSearch",
          children: (0, cU.jsx)(mU.d, {
            className: "SmpSearchInput",
            placeholderText: tU("smpShop:searchPlaceholder"),
            defaultValue: RU.query,
            onValueChange: UU => {
              RU.setQuery(UU), RU.searched && UU.trim() && RU.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const UU = Pp(RU.catalogue, RU.query)[0];
              UU ? RU.pickItem(UU.name) : RU.query.trim() && pU.notify(tU("smpShop:noItemsFound", {
                query: RU.query.trim()
              }))
            }
          }, RU.searchBoxKey)
        }), gU]
      })
    }

    function Wp(UU) {
      let {
        browser: RU,
        recentLabel: gU,
        children: tU
      } = UU;
      const {
        t: pU
      } = (0, PU.B)();
      return (0, cU.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, cU.jsx)(Ft, {
          options: [{
            value: "recent",
            label: gU
          }, {
            value: "browse",
            label: pU("smpShop:browseItems")
          }],
          value: RU.browsing ? "browse" : "recent",
          onChange: RU.setView,
          ariaLabel: pU("smpShop:show")
        }), !RU.browsing && tU]
      })
    }

    function fp(UU) {
      let {
        item: RU,
        names: gU,
        summary: tU,
        onBack: pU,
        children: EU
      } = UU;
      const {
        t: TU
      } = (0, PU.B)();
      return (0, cU.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, cU.jsx)(QU.d, {
          className: "SmpBackButton",
          onClick: pU,
          children: TU("general:back")
        }), (0, cU.jsx)(Ht, {
          item: RU,
          size: "big"
        }), (0, cU.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, cU.jsx)("b", {
            children: Tp(gU, RU)
          }), tU && (0, cU.jsx)("small", {
            children: tU
          })]
        }), EU]
      })
    }

    function xp(UU) {
      let {
        browser: RU,
        className: gU,
        action: tU,
        above: pU,
        list: PU,
        summary: TU,
        recentLabel: qU,
        listControls: KU,
        onBack: GU
      } = UU;
      return (0, cU.jsxs)("div", {
        className: EU()("SmpScreen", gU),
        children: [(0, cU.jsx)(ep, {
          browser: RU,
          children: tU
        }), RU.shown && (0, cU.jsx)(fp, {
          item: RU.shown,
          names: RU.names,
          summary: !RU.loading && TU,
          onBack: () => {
            null === GU || void 0 === GU || GU(), RU.searchFor(null)
          },
          children: KU
        }), pU, RU.shown ? PU : (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)(Wp, {
            browser: RU,
            recentLabel: qU,
            children: KU
          }), RU.browsing ? (0, cU.jsx)(hp, {
            items: RU.catalogue,
            query: RU.query,
            onPick: RU.pickItem
          }) : PU]
        })]
      })
    }

    function mp(UU, RU) {
      const gU = UU.map((UU => {
        let {
          meta: RU
        } = UU;
        return RU.pricePerItem
      }));
      return "min" === RU ? Math.min(...gU) : Math.max(...gU)
    }
    var Ip = gU(6239);
    const Jp = (0, tU.memo)((function(UU) {
      var RU;
      const {
        t: gU
      } = (0, PU.B)(), tU = null === UU.seller, pU = UU.quantity * UU.pricePerItem;
      return (0, cU.jsxs)("div", {
        className: UU.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, cU.jsx)(Ht, {
          item: UU.item,
          amount: UU.quantity,
          size: UU.grid ? "big" : "normal",
          tier: UU.tier
        }), (0, cU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, cU.jsx)("b", {
            children: (0, cU.jsx)(nt.e, {
              text: null !== (RU = UU.title) && void 0 !== RU ? RU : `${UU.quantity}x ${UU.item}`
            })
          }), (0, cU.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, cU.jsx)("span", {
              children: tU ? gU("smpShop:you") : (0, cU.jsx)(nt.e, {
                text: [{
                  entityName: UU.seller
                }]
              })
            }), (0, cU.jsx)("span", {
              children: gU("smpShop:timeLeft", {
                time: tp(UU.expiresAt)
              })
            })]
          })]
        }), (0, cU.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, cU.jsx)(St, {
            amount: UU.pricePerItem
          }), (0, cU.jsx)("small", {
            children: gU("smpShop:each")
          })]
        }), (0, cU.jsx)(QU.e, {
          className: "SmpBuyButton",
          disabled: tU || !UU.canAfford && !UU.busy,
          loading: UU.busy,
          onClick: () => {
            UU.onBuy(UU.itemKey)
          },
          children: tU ? gU("smpShop:yours") : (0, cU.jsx)(St, {
            amount: pU
          })
        })]
      })
    }));

    function wp(UU) {
      let {
        view: RU,
        onChange: gU
      } = UU;
      const {
        t: tU
      } = (0, PU.B)();
      return (0, cU.jsx)(vt.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: tU("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, cU.jsx)(TU.c, {
            name: "list"
          }),
          ariaLabel: tU("smpShop:listView")
        }, {
          value: "grid",
          label: (0, cU.jsx)(TU.c, {
            name: "grid-2"
          }),
          ariaLabel: tU("smpShop:gridView")
        }],
        value: RU,
        onChange: gU
      })
    }

    function np(UU) {
      let {
        entries: RU,
        view: gU
      } = UU;
      const {
        t: tU
      } = (0, PU.B)(), pU = Gp(), EU = "grid" === gU;
      return (0, cU.jsxs)(cU.Fragment, {
        children: [!EU && (0, cU.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, cU.jsx)("span", {}), (0, cU.jsx)("span", {
            children: tU("smpShop:columnItem")
          }), (0, cU.jsx)("span", {
            children: tU("smpShop:columnPriceEach")
          }), (0, cU.jsx)("span", {
            children: tU("smpShop:columnTotal")
          })]
        }), (0, cU.jsx)(jp.d, {
          lazyLoadedClassName: EU ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Rp,
          observerUpdateDeps: [RU.length],
          children: RU.map((UU => {
            var RU, gU;
            let {
              key: tU,
              item: PU,
              meta: TU
            } = UU;
            const qU = TU.quantity * TU.pricePerItem;
            return (0, cU.jsx)(Jp, {
              itemKey: tU,
              item: TU.item,
              title: PU.customTitle,
              quantity: TU.quantity,
              pricePerItem: TU.pricePerItem,
              seller: TU.seller,
              expiresAt: TU.expiresAt,
              tier: null !== (RU = null === (gU = PU.enchant) || void 0 === gU ? void 0 : gU.tier) && void 0 !== RU ? RU : null,
              busy: pU.isPending(tU) || null !== TU.seller && !1 === PU.canBuy,
              canAfford: pU.canAfford(PU, qU),
              grid: EU,
              onBuy: pU.act
            }, tU)
          }))
        }, gU)]
      })
    }
    const bp = [1, 10, 100],
      op = [1, 10, 100, 999];

    function Zp(UU) {
      var RU, gU, pU, qU, KU, GU, jU, uU, CU, hU;
      const {
        t: eU
      } = (0, PU.B)(), WU = Gp(), {
        creator: fU,
        mode: xU
      } = UU, [IU, JU] = (0, tU.useState)(null !== (RU = null === fU || void 0 === fU ? void 0 : fU.meta.item) && void 0 !== RU ? RU : null), [wU, nU] = (0, tU.useState)(1), [bU, oU] = (0, tU.useState)(0), [ZU, aU] = (0, tU.useState)(""), [YU, BU] = (0, tU.useState)(0), VU = (0, tU.useRef)(IU), rU = (0, tU.useRef)(!1), [XU, vU] = (0, tU.useState)(!1), dU = null !== (gU = null === fU || void 0 === fU ? void 0 : fU.meta.item) && void 0 !== gU ? gU : null, HU = null !== (pU = null === fU || void 0 === fU ? void 0 : fU.meta.WT) && void 0 !== pU ? pU : 0;
      (0, tU.useEffect)((() => {
        UU.searching || null === dU || dU === VU.current || (VU.current = dU, rU.current = !1, JU(dU), oU(0), nU("list" === xU ? Math.max(1, HU) : 1))
      }), [dU, UU.searching]);
      const SU = !!fU && !!IU && fU.meta.item === IU,
        sU = SU ? fU.meta.WT : null !== (qU = null === (KU = UU.inventory) || void 0 === KU || null === (GU = KU.find((UU => UU.item === IU))) || void 0 === GU ? void 0 : GU.quantity) && void 0 !== qU ? qU : 0,
        yU = "list" === xU ? Math.max(1, sU) : 45954,
        kU = null !== (jU = UU.prices[0]) && void 0 !== jU ? jU : null,
        FU = UU.prices.length ? Math.round(UU.prices.reduce(((UU, RU) => UU + RU), 0) / UU.prices.length) : null,
        iU = null === (uU = UU.inventory) || void 0 === uU || null === (CU = uU.find((UU => UU.item === IU))) || void 0 === CU ? void 0 : CU.sellPrice;
      (0, tU.useEffect)((() => {
        var UU;
        SU && (nU((UU => "list" === xU ? Math.min(Math.max(1, UU), Math.max(1, sU)) : UU)), rU.current || oU(null !== (UU = null !== kU && void 0 !== kU ? kU : FU) && void 0 !== UU ? UU : Math.max(1, null !== iU && void 0 !== iU ? iU : 1)))
      }), [SU, sU, IU, kU, FU]);
      const AU = UU => {
          rU.current = !0, oU(UU)
        },
        zU = RU => {
          var gU, tU, pU;
          VU.current = RU, rU.current = !1, vU(!1), aU(""), BU((UU => UU + 1)), JU(RU), oU(0), nU("list" === xU && null !== (gU = null === (tU = UU.inventory) || void 0 === tU || null === (pU = tU.find((UU => UU.item === RU))) || void 0 === pU ? void 0 : pU.quantity) && void 0 !== gU ? gU : 1), (null === fU || void 0 === fU ? void 0 : fU.meta.item) !== RU && UU.onPickItem(RU)
        },
        MU = wU * bU,
        DU = "list" === xU && null !== fU && void 0 !== fU && fU.meta.fee ? function(UU, RU) {
          const gU = Math.max(0, RU - UU.taxFreeAllowance);
          return Math.ceil(Math.round(gU * UU.rate * 1e6) / 1e6)
        }(fU.meta.fee, MU) : 0,
        LU = !!fU && WU.isPending(fU.key),
        NU = SU && !UU.searching && wU >= 1 && bU >= 1 && ("order" === xU || sU >= wU) && !LU,
        lU = !!IU && !SU && !UU.searching && wU >= 1 && bU >= 1,
        OU = () => {
          NU ? WU.act(fU.key, `${wU}|${bU}`) : lU && (UU.onPickItem(IU), vU(!0))
        };
      (0, tU.useEffect)((() => {
        XU && SU && !UU.searching && (vU(!1), OU())
      }), [XU, SU, UU.searching]);
      const UR = !!IU && !SU && (UU.searching || XU),
        RR = IU ? Tp(UU.names, IU) : "",
        gR = (0, tU.useMemo)((() => Pp(UU.catalogue, ZU).slice(0, 8)), [UU.catalogue, ZU]),
        tR = ("list" === xU ? bp.filter((UU => UU < sU)) : op).map((UU => ({
          value: UU,
          label: String(UU)
        })));
      "list" === xU && sU > 0 && tR.push({
        value: sU,
        label: eU("smpShop:all", {
          count: sU
        })
      });
      const pR = [];
      return null !== kU && (kU > 1 && pR.push({
        value: kU - 1,
        label: eU("smpShop:undercut", {
          price: Xt(kU - 1)
        })
      }), pR.push({
        value: kU,
        label: eU("smpShop:lowest", {
          price: Xt(kU)
        })
      })), null !== FU && FU !== kU && pR.push({
        value: FU,
        label: eU("smpShop:average", {
          price: Xt(FU)
        })
      }), (0, cU.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, cU.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, cU.jsx)("b", {
            children: eU("list" === xU ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, cU.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": eU("smpShop:close"),
            onClick: UU.onClose,
            children: (0, cU.jsx)(TU.c, {
              name: "xmark"
            })
          })]
        }), "list" === xU && (0, cU.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (hU = UU.inventory) && void 0 !== hU && hU.length ? UU.inventory.map((UU => {
            let {
              item: RU,
              quantity: gU
            } = UU;
            return (0, cU.jsx)("button", {
              type: "button",
              title: RU,
              className: EU()("SmpPickerSlot", {
                SmpPickerSlotOn: RU === IU
              }),
              onClick: () => {
                zU(RU)
              },
              children: (0, cU.jsx)(Ht, {
                item: RU,
                amount: gU
              })
            }, RU)
          })) : (0, cU.jsx)("span", {
            className: "SmpMuted",
            children: eU("smpShop:nothingToList")
          })
        }), ("list" === xU || !IU) && (0, cU.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, cU.jsx)(mU.d, {
            className: "SmpSearchInput",
            placeholderText: eU("list" === xU ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: ZU,
            onValueChange: aU,
            blurOnEnter: !0,
            onEnter: () => {
              gR[0] && zU(gR[0].name)
            }
          }, YU), gR.length > 0 && (0, cU.jsx)("div", {
            className: "SmpPicker",
            children: gR.map((UU => {
              let {
                name: RU
              } = UU;
              return (0, cU.jsx)("button", {
                type: "button",
                title: RU,
                className: EU()("SmpPickerSlot", {
                  SmpPickerSlotOn: RU === IU
                }),
                onClick: () => {
                  zU(RU)
                },
                children: (0, cU.jsx)(Ht, {
                  item: RU
                })
              }, RU)
            }))
          })]
        }), IU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsxs)("div", {
            className: "SmpPickedName",
            children: [RR, UR && (0, cU.jsx)(it, {})]
          }), (0, cU.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, cU.jsxs)("div", {
              className: "SmpField",
              children: [(0, cU.jsxs)("span", {
                children: [eU("smpShop:quantity"), "list" === xU && SU && (0, cU.jsx)("small", {
                  children: eU("smpShop:youHave", {
                    count: sU
                  })
                })]
              }), (0, cU.jsx)(At, {
                value: wU,
                onChange: nU,
                max: yU,
                label: eU("smpShop:quantity")
              }), (0, cU.jsx)(Ft, {
                options: tR,
                value: wU,
                onChange: nU,
                ariaLabel: eU("smpShop:quantity")
              })]
            }), (0, cU.jsxs)("div", {
              className: "SmpField",
              children: [(0, cU.jsx)("span", {
                children: eU("smpShop:pricePerItem")
              }), (0, cU.jsx)(At, {
                value: Math.max(1, bU),
                onChange: AU,
                max: 9999999,
                step: zt,
                label: eU("smpShop:pricePerItem")
              }), (0, cU.jsx)(Ft, {
                options: pR,
                value: bU,
                onChange: AU,
                ariaLabel: eU("smpShop:pricePerItem")
              })]
            })]
          }), "list" === xU && (0, cU.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, cU.jsxs)("span", {
              children: [eU("smpShop:youGet"), " ", (0, cU.jsx)(St, {
                amount: Math.max(0, MU - DU),
                exact: !0
              })]
            }), (0, cU.jsx)("small", {
              children: DU > 0 ? eU("smpShop:listingFee", {
                fee: DU.toLocaleString("en-US")
              }) : eU("smpShop:listingRules")
            })]
          }), (0, cU.jsx)(QU.p, {
            className: "SmpSubmit",
            disabled: !NU && !lU && !LU,
            loading: LU || UR || SU && UU.searching,
            onClick: OU,
            children: "list" === xU ? eU("smpShop:listButton", {
              count: wU,
              item: RR
            }) : (0, cU.jsxs)(cU.Fragment, {
              children: [eU("smpShop:orderButton", {
                count: wU,
                item: RR
              }), " ", bU >= 1 && (0, cU.jsx)(St, {
                amount: MU
              })]
            })
          })]
        })]
      })
    }

    function ap() {
      var UU;
      const {
        t: RU
      } = (0, PU.B)(), gU = Gp(), pU = null === (UU = gU.shopInfo[gU.categoryKey]) || void 0 === UU ? void 0 : UU.items, EU = Up(pU, "search"), TU = Up(pU, "creator"), qU = Ot(pU, "enchantedCreator"), KU = Ot(pU, "listing"), GU = Up(pU, "empty"), jU = Qp(EU, KU.length > 0 || null !== GU), {
        searched: uU,
        shown: CU,
        loading: hU
      } = jU, [eU, WU] = (0, tU.useState)(!1), [fU, xU] = function() {
        const [UU, RU] = (0, Ip.b)("smpMarketView", "list");
        return ["grid" === UU ? "grid" : "list", RU]
      }(), mU = "grid" === fU, IU = (0, tU.useMemo)((() => KU.filter((UU => {
        let {
          meta: RU
        } = UU;
        return null !== RU.seller && RU.item === uU
      })).map((UU => {
        let {
          meta: RU
        } = UU;
        return RU.pricePerItem
      })).sort(((UU, RU) => UU - RU))), [KU, uU]), JU = (0, tU.useMemo)((() => {
        const UU = new Set(jU.catalogue.map((UU => {
          let {
            name: RU
          } = UU;
          return RU
        })));
        return function(UU) {
          for (const RU in UU)
            if ("sell" === UU[RU].smp) return Ot(UU[RU].items, "sell").filter((UU => {
              let {
                item: RU
              } = UU;
              return !RU.enchant
            })).map((UU => {
              let {
                meta: RU
              } = UU;
              return {
                item: RU.item,
                quantity: RU.quantity,
                sellPrice: RU.pricePerItem
              }
            }));
          return []
        }(gU.shopInfo).filter((RU => {
          let {
            item: gU
          } = RU;
          return UU.has(gU)
        }))
      }), [gU.shopInfo, jU.catalogue]);
      return (0, cU.jsx)(xp, {
        browser: jU,
        className: "SmpMarketTab",
        recentLabel: RU("smpShop:recentlyListed"),
        action: (0, cU.jsx)(QU.p, {
          className: "SmpSellButton",
          onClick: () => {
            WU((UU => !UU))
          },
          children: RU("smpShop:sell")
        }),
        above: eU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)(Zp, {
            mode: "list",
            creator: TU,
            inventory: JU,
            catalogue: jU.catalogue,
            names: jU.names,
            searching: hU,
            prices: IU,
            onPickItem: jU.searchFor,
            onClose: () => {
              WU(!1)
            }
          }), qU.length > 0 && (0, cU.jsx)(Yp, {
            entries: qU
          })]
        }),
        listControls: (0, cU.jsx)(wp, {
          view: fU,
          onChange: xU
        }),
        summary: CU && (KU.length > 0 ? RU(1 === KU.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: KU.length,
          price: Xt(mp(KU, "min"))
        }) : RU("smpShop:noOneSelling", {
          item: Tp(jU.names, CU)
        })),
        list: hU ? (0, cU.jsx)(st, {
          grid: mU
        }) : KU.length > 0 ? (0, cU.jsx)(np, {
          entries: KU,
          view: fU
        }) : GU ? (0, cU.jsx)(kt, {
          entry: GU
        }) : (0, cU.jsx)(st, {
          count: 3,
          grid: mU
        })
      })
    }

    function Yp(UU) {
      let {
        entries: RU
      } = UU;
      const {
        t: gU
      } = (0, PU.B)(), pU = Gp(), [EU, TU] = (0, tU.useState)({});
      return (0, cU.jsx)("div", {
        className: "SmpList",
        children: RU.map((UU => {
          var RU, tU, PU;
          let {
            key: qU,
            item: KU,
            meta: GU
          } = UU;
          const jU = null !== (RU = EU[qU]) && void 0 !== RU ? RU : 1;
          return (0, cU.jsxs)("div", {
            className: "SmpRow",
            children: [(0, cU.jsx)(Ht, {
              item: GU.item,
              amount: GU.quantity,
              tier: null !== (tU = null === (PU = KU.enchant) || void 0 === PU ? void 0 : PU.tier) && void 0 !== tU ? tU : null
            }), (0, cU.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, cU.jsx)("b", {
                children: (0, cU.jsx)(nt.e, {
                  text: KU.customTitle
                })
              }), (0, cU.jsx)("small", {
                children: gU("smpShop:enchantedListing")
              })]
            }), (0, cU.jsx)(At, {
              value: jU,
              onChange: UU => {
                TU({
                  ...EU,
                  [qU]: UU
                })
              },
              max: 9999999,
              step: zt,
              label: gU("smpShop:pricePerItem")
            }), (0, cU.jsxs)(QU.p, {
              loading: pU.isPending(qU),
              onClick: () => {
                pU.act(qU, String(jU))
              },
              children: [gU("smpShop:list"), " ", (0, cU.jsx)(St, {
                amount: jU
              })]
            })]
          }, qU)
        }))
      })
    }
    const Bp = (0, tU.memo)((function(UU) {
      let {
        itemKey: RU,
        item: gU,
        quantity: tU,
        pricePerItem: pU,
        tier: PU,
        selected: TU,
        onSelect: qU
      } = UU;
      return (0, cU.jsxs)("button", {
        type: "button",
        className: EU()("SmpInventorySlot", {
          SmpInventorySlotOn: TU
        }),
        title: gU,
        onClick: () => {
          qU(RU)
        },
        children: [(0, cU.jsx)(Ht, {
          item: gU,
          amount: tU,
          tier: PU
        }), (0, cU.jsx)(St, {
          amount: pU
        })]
      })
    }));

    function Vp() {
      var UU;
      const {
        t: RU
      } = (0, PU.B)(), gU = Gp(), pU = null === (UU = gU.shopInfo[gU.categoryKey]) || void 0 === UU ? void 0 : UU.items, TU = Ot(pU, "sell"), qU = Up(pU, "empty"), [KU, GU] = (0, tU.useState)(null), [jU, uU] = (0, tU.useState)({}), CU = TU.find((UU => {
        let {
          key: RU
        } = UU;
        return RU === KU
      }));
      return 0 === TU.length ? (0, cU.jsx)("div", {
        className: "SmpScreen",
        children: (0, cU.jsx)(yt, {
          title: qU ? (0, cU.jsx)(nt.e, {
            text: qU.item.customTitle
          }) : RU("smpShop:nothingToSell"),
          children: qU && (0, cU.jsx)(nt.e, {
            text: qU.item.description
          })
        })
      }) : (0, cU.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, cU.jsx)("div", {
          className: "SmpInventoryGrid",
          children: TU.map((UU => {
            var RU, gU;
            let {
              key: tU,
              item: pU,
              meta: EU
            } = UU;
            return (0, cU.jsx)(Bp, {
              itemKey: tU,
              item: EU.item,
              quantity: EU.quantity,
              pricePerItem: EU.pricePerItem,
              tier: null !== (RU = null === (gU = pU.enchant) || void 0 === gU ? void 0 : gU.tier) && void 0 !== RU ? RU : null,
              selected: tU === KU,
              onSelect: GU
            }, tU)
          }))
        }), (0, cU.jsx)("div", {
          className: EU()("SmpSellBar", {
            SmpSellBarIdle: !CU
          }),
          children: CU ? (0, cU.jsx)(rp, {
            entry: CU,
            choice: qp(CU.item, jU[CU.key]),
            onChoose: UU => {
              uU({
                ...jU,
                [CU.key]: UU
              })
            }
          }) : (0, cU.jsx)("span", {
            className: "SmpMuted",
            children: RU("smpShop:tapToSell")
          })
        })]
      })
    }

    function rp(UU) {
      var RU, gU, tU, pU;
      let {
        entry: EU,
        choice: TU,
        onChoose: qU
      } = UU;
      const {
        t: KU
      } = (0, PU.B)(), GU = Gp(), {
        key: jU,
        item: uU,
        meta: CU
      } = EU, hU = pp("dropdown" === (null === (RU = uU.userInput) || void 0 === RU ? void 0 : RU.type) ? uU.userInput.dropdownOptions : []), eU = null === TU ? 0 : -(0, mt.e)(uU, TU);
      return (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsx)(Ht, {
          item: CU.item,
          amount: CU.quantity,
          tier: null !== (gU = null === (tU = uU.enchant) || void 0 === tU ? void 0 : tU.tier) && void 0 !== gU ? gU : null
        }), (0, cU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, cU.jsx)("b", {
            children: (0, cU.jsx)(nt.e, {
              text: null !== (pU = uU.customTitle) && void 0 !== pU ? pU : CU.item
            })
          }), (0, cU.jsx)("small", {
            children: KU("smpShop:sellEach", {
              count: CU.quantity
            })
          })]
        }), (0, cU.jsx)(Ft, {
          options: hU.map((UU => {
            let {
              label: RU,
              quantity: gU,
              isAll: tU
            } = UU;
            return {
              value: RU,
              label: tU ? KU("smpShop:all", {
                count: gU
              }) : String(gU)
            }
          })),
          value: TU,
          onChange: qU,
          ariaLabel: KU("smpShop:quantity")
        }), (0, cU.jsxs)(QU.p, {
          loading: GU.isPending(jU),
          disabled: null === TU,
          onClick: () => {
            GU.act(jU, TU)
          },
          children: [KU("smpShop:sellButton"), " ", (0, cU.jsx)(St, {
            amount: eU
          })]
        })]
      })
    }

    function Xp() {
      var UU;
      const {
        t: RU
      } = (0, PU.B)(), gU = Gp(), tU = null === (UU = gU.shopInfo[gU.categoryKey]) || void 0 === UU ? void 0 : UU.items, pU = Ot(tU, "collect"), EU = Ot(tU, "myListing"), TU = (UU, RU) => gU.isPending(UU) || !1 === RU.canBuy;
      return (0, cU.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, cU.jsx)("h3", {
          className: "SmpSectionTitle",
          children: RU("smpShop:readyToCollect")
        }), pU.length > 0 ? (0, cU.jsx)("div", {
          className: "SmpList",
          children: pU.map((UU => {
            var tU, pU;
            let {
              key: EU,
              item: PU,
              meta: qU
            } = UU;
            return (0, cU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, cU.jsx)(Ht, {
                item: "sold" === qU.type ? "Gold Coin" : qU.item,
                amount: "sold" === qU.type ? 0 : qU.quantity,
                tier: null !== (tU = null === (pU = PU.enchant) || void 0 === pU ? void 0 : pU.tier) && void 0 !== tU ? tU : null
              }), (0, cU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, cU.jsx)("b", {
                  children: (0, cU.jsx)(nt.e, {
                    text: PU.customTitle
                  })
                }), (0, cU.jsx)("small", {
                  children: (0, cU.jsx)(nt.e, {
                    text: PU.description
                  })
                })]
              }), (0, cU.jsx)(QU.j, {
                loading: TU(EU, PU),
                onClick: () => {
                  gU.act(EU)
                },
                children: RU("smpShop:collect")
              })]
            }, EU)
          }))
        }) : (0, cU.jsx)(yt, {
          title: RU("smpShop:nothingToCollect"),
          children: RU("smpShop:nothingToCollectHint")
        }), (0, cU.jsx)("h3", {
          className: "SmpSectionTitle",
          children: RU("smpShop:activeListings", {
            count: EU.length
          })
        }), EU.length > 0 ? (0, cU.jsx)("div", {
          className: "SmpList",
          children: EU.map((UU => {
            var tU, pU;
            let {
              key: EU,
              item: PU,
              meta: qU
            } = UU;
            return (0, cU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, cU.jsx)(Ht, {
                item: qU.item,
                amount: qU.quantity,
                tier: null !== (tU = null === (pU = PU.enchant) || void 0 === pU ? void 0 : pU.tier) && void 0 !== tU ? tU : null
              }), (0, cU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, cU.jsx)("b", {
                  children: (0, cU.jsx)(nt.e, {
                    text: PU.customTitle
                  })
                }), (0, cU.jsx)("small", {
                  children: RU("smpShop:timeLeft", {
                    time: tp(qU.expiresAt)
                  })
                })]
              }), (0, cU.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, cU.jsx)(St, {
                  amount: qU.pricePerItem
                }), (0, cU.jsx)("small", {
                  children: RU("smpShop:each")
                })]
              }), (0, cU.jsx)(QU.E, {
                loading: TU(EU, PU),
                onClick: () => {
                  gU.act(EU)
                },
                children: RU("smpShop:cancel")
              })]
            }, EU)
          }))
        }) : (0, cU.jsx)(yt, {
          title: RU("smpShop:noActiveListings"),
          children: RU("smpShop:noActiveListingsHint")
        })]
      })
    }

    function vp(UU) {
      let {
        done: RU,
        of: gU
      } = UU;
      return (0, cU.jsx)("span", {
        className: "SmpProgress",
        children: (0, cU.jsx)("i", {
          style: {
            width: `${Math.min(100,RU/Math.max(1,gU)*100)}%`
          }
        })
      })
    }

    function dp(UU) {
      var RU, gU, tU;
      let {
        entry: pU,
        choice: EU,
        onChoose: TU
      } = UU;
      const {
        t: qU
      } = (0, PU.B)(), KU = Gp(), {
        key: GU,
        item: jU,
        meta: uU
      } = pU, CU = "dropdown" === (null === (RU = jU.userInput) || void 0 === RU ? void 0 : RU.type) ? jU.userInput.dropdownOptions : [], hU = !0 === uU.processing, eU = null !== uU.creator && (uU.WT > 0 || hU), WU = eU && uU.WT > 0 ? pp(CU) : [], fU = null === EU ? 0 : null !== (gU = null === (tU = WU.find((UU => UU.label === EU))) || void 0 === tU ? void 0 : tU.quantity) && void 0 !== gU ? gU : 0;
      return (0, cU.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, cU.jsx)(Ht, {
          item: uU.item
        }), (0, cU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, cU.jsx)("b", {
            children: (0, cU.jsx)(nt.e, {
              text: jU.customTitle
            })
          }), (0, cU.jsxs)("small", {
            children: [(0, cU.jsx)(St, {
              amount: uU.pricePerItem
            }), " ", qU("smpShop:each"), " \xb7", " ", null === uU.creator ? qU("smpShop:you") : (0, cU.jsx)(nt.e, {
              text: [{
                entityName: uU.creator
              }]
            })]
          }), (0, cU.jsx)(vp, {
            done: uU.delivered,
            of: uU.wanted
          })]
        }), eU ? (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)(Ft, {
            options: WU.map((UU => {
              let {
                label: RU,
                quantity: gU,
                isAll: tU
              } = UU;
              return {
                value: RU,
                label: tU ? qU("smpShop:max", {
                  count: gU
                }) : String(gU)
              }
            })),
            value: EU,
            onChange: TU,
            ariaLabel: qU("smpShop:quantity")
          }), (0, cU.jsxs)(QU.p, {
            loading: KU.isPending(GU) || hU,
            disabled: null === EU,
            onClick: () => {
              KU.act(GU, EU)
            },
            children: [qU("smpShop:deliver"), " ", (0, cU.jsx)(St, {
              amount: fU * uU.pricePerItem
            })]
          })]
        }) : (0, cU.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === uU.creator ? qU("smpShop:yourOrder") : qU("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Hp() {
      var UU;
      const {
        t: RU
      } = (0, PU.B)(), gU = Gp(), pU = null === (UU = gU.shopInfo[gU.categoryKey]) || void 0 === UU ? void 0 : UU.items, EU = Up(pU, "search"), TU = Up(pU, "creator"), qU = Ot(pU, "order"), KU = Up(pU, "empty"), GU = Qp(EU, qU.length > 0 || null !== KU), [jU, uU] = (0, tU.useState)(!1), [CU, hU] = (0, tU.useState)({});
      return (0, cU.jsx)(xp, {
        browser: GU,
        recentLabel: RU("smpShop:recentOrders"),
        action: (0, cU.jsx)(QU.p, {
          onClick: () => {
            uU((UU => !UU))
          },
          children: RU("smpShop:createOrder")
        }),
        above: jU && (0, cU.jsx)(Zp, {
          mode: "order",
          creator: TU,
          catalogue: GU.catalogue,
          names: GU.names,
          searching: GU.loading,
          prices: [],
          onPickItem: GU.searchFor,
          onClose: () => {
            uU(!1)
          }
        }),
        onBack: () => {
          uU(!1)
        },
        summary: qU.length > 0 && RU(1 === qU.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: qU.length,
          price: Xt(mp(qU, "max"))
        }),
        list: GU.loading ? (0, cU.jsx)(st, {}) : qU.length > 0 ? (0, cU.jsx)(jp.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Rp,
          observerUpdateDeps: [qU.length],
          children: qU.map((UU => (0, cU.jsx)(dp, {
            entry: UU,
            choice: qp(UU.item, CU[UU.key]),
            onChoose: RU => {
              hU({
                ...CU,
                [UU.key]: RU
              })
            }
          }, UU.key)))
        }) : KU ? (0, cU.jsx)(kt, {
          entry: KU
        }) : (0, cU.jsx)(st, {
          count: 3
        })
      })
    }

    function Sp() {
      var UU;
      const {
        t: RU
      } = (0, PU.B)(), gU = Gp(), tU = Ot(null === (UU = gU.shopInfo[gU.categoryKey]) || void 0 === UU ? void 0 : UU.items, "myOrder");
      return 0 === tU.length ? (0, cU.jsx)("div", {
        className: "SmpScreen",
        children: (0, cU.jsx)(yt, {
          title: RU("smpShop:noOrders"),
          children: RU("smpShop:noOrdersHint")
        })
      }) : (0, cU.jsx)("div", {
        className: "SmpScreen",
        children: (0, cU.jsx)("div", {
          className: "SmpList",
          children: tU.map((UU => {
            let {
              key: tU,
              item: pU,
              meta: EU
            } = UU;
            const PU = gU.isPending(tU) || !1 === pU.canBuy;
            return (0, cU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, cU.jsx)(Ht, {
                item: EU.item,
                amount: EU.collectable
              }), (0, cU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, cU.jsx)("b", {
                  children: (0, cU.jsx)(nt.e, {
                    text: pU.customTitle
                  })
                }), (0, cU.jsxs)("small", {
                  children: [(0, cU.jsx)(St, {
                    amount: EU.pricePerItem
                  }), " ", RU("smpShop:each"), EU.collectable > 0 && ` \xb7 ${RU("smpShop:readyCount",{count:EU.collectable})}`]
                }), (0, cU.jsx)(vp, {
                  done: EU.delivered,
                  of: EU.wanted
                })]
              }), EU.collectable > 0 ? (0, cU.jsx)(QU.j, {
                loading: PU,
                onClick: () => {
                  gU.act(tU)
                },
                children: RU("smpShop:collectCount", {
                  count: EU.collectable
                })
              }) : (0, cU.jsx)(QU.E, {
                loading: PU,
                onClick: () => {
                  gU.act(tU)
                },
                children: RU("smpShop:cancel")
              })]
            }, tU)
          }))
        })
      })
    }
    const sp = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      yp = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function kp(UU, RU) {
      let gU = !1;
      const tU = {};
      for (const pU in UU) RU(pU, UU[pU]) ? tU[pU] = UU[pU] : gU = !0;
      return gU ? tU : UU
    }

    function Fp(UU) {
      var RU, gU, pU, qU;
      const {
        show: KU,
        shopInfo: GU,
        selectedCategoryKey: jU
      } = UU, {
        t: uU
      } = (0, PU.B)(), CU = null !== jU && void 0 !== jU ? jU : "", hU = lt(GU, CU), QU = null === (RU = GU[CU]) || void 0 === RU ? void 0 : RU.items, eU = null !== hU, [WU, fU] = (0, tU.useState)({}), [xU, mU] = (0, tU.useState)([]), [IU, JU] = (0, tU.useState)(!1), [wU, nU] = (0, tU.useState)(null), [, bU] = (0, tU.useState)(0), oU = (0, tU.useRef)(0), ZU = (0, tU.useRef)({}), aU = (0, tU.useRef)({
        items: QU,
        pending: WU,
        shopInfo: GU,
        active: eU,
        canAfford: UU.canAfford,
        buy: UU.buy
      });
      aU.current = {
        items: QU,
        pending: WU,
        shopInfo: GU,
        active: eU,
        canAfford: UU.canAfford,
        buy: UU.buy
      };
      const YU = (0, tU.useCallback)((UU => {
        oU.current++;
        const RU = oU.current;
        mU((gU => [{
          id: RU,
          text: UU
        }, ...gU].slice(0, 8))), nU(RU)
      }), []);
      (0, tU.useEffect)((() => {
        if (null === wU) return;
        const UU = setTimeout((() => {
          nU(null)
        }), 3e3);
        return () => {
          clearTimeout(UU)
        }
      }), [wU]), (0, tU.useEffect)((() => {
        const RU = UU.message;
        if (!RU) return;
        const {
          shopInfo: gU,
          active: tU,
          items: pU
        } = aU.current, EU = null !== RU.categoryKey ? null !== lt(gU, RU.categoryKey) : tU;
        (EU || tU) && YU(RU.text), EU && fU((UU => kp(UU, (UU => {
          var RU, gU;
          return !sp.has(null === pU || void 0 === pU || null === (RU = pU[UU]) || void 0 === RU || null === (gU = RU.smp) || void 0 === gU ? void 0 : gU.kind)
        }))))
      }), [UU.message, YU]), (0, tU.useEffect)((() => {
        fU((UU => kp(UU, ((UU, RU) => Kp(null === QU || void 0 === QU ? void 0 : QU[UU]) === RU.snapshot))))
      }), [GU, QU]);
      const BU = Object.keys(WU).length > 0;
      (0, tU.useEffect)((() => {
        if (!BU) return;
        const UU = setInterval((() => {
          bU((UU => UU + 1));
          const UU = Date.now(),
            {
              pending: RU,
              items: gU
            } = aU.current,
            tU = Object.keys(RU).filter((gU => UU - RU[gU].at >= 12e3));
          if (0 === tU.length) return;
          const pU = tU.some((UU => {
            var tU, pU;
            return "search" !== (null === gU || void 0 === gU || null === (tU = gU[UU]) || void 0 === tU || null === (pU = tU.smp) || void 0 === pU ? void 0 : pU.kind) || RU[UU].resend
          }));
          for (const EU of tU) ZU.current[EU] = UU;
          fU((UU => kp(UU, (UU => !tU.includes(UU))))), pU && YU(uU("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(UU)
        }
      }), [BU]), (0, tU.useEffect)((() => {
        fU({})
      }), [CU]), (0, tU.useEffect)((() => {
        KU || JU(!1)
      }), [KU]);
      const VU = (0, tU.useCallback)((function(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: tU,
            pending: pU,
            canAfford: EU,
            buy: PU
          } = aU.current, TU = null === tU || void 0 === tU ? void 0 : tU[UU];
          if (!TU || UU in pU || !1 === TU.canBuy) return !1;
          if (!EU(TU, (0, mt.e)(TU, RU))) return !1;
          PU(UU, TU, RU);
          const qU = {
            snapshot: Kp(TU),
            at: Date.now(),
            resend: gU
          };
          return aU.current.pending = {
            ...aU.current.pending,
            [UU]: qU
          }, fU((RU => ({
            ...RU,
            [UU]: qU
          }))), !0
        }), []),
        rU = (0, tU.useMemo)((() => ({
          shopInfo: GU,
          categoryKey: CU,
          canAfford: UU.canAfford,
          isPending: UU => UU in WU,
          gaveUpAt: UU => {
            var RU;
            return null !== (RU = ZU.current[UU]) && void 0 !== RU ? RU : 0
          },
          act: VU,
          notify: YU
        })), [GU, CU, UU.canAfford, WU, VU, YU]),
        XU = Math.min(...Object.values(WU).map((UU => UU.at))),
        vU = BU && Date.now() - XU > 1500,
        dU = xU.length > 1,
        HU = null !== (gU = null === (pU = GU[CU]) || void 0 === pU ? void 0 : pU.customTitle) && void 0 !== gU ? gU : CU,
        SU = null === (qU = GU[CU]) || void 0 === qU ? void 0 : qU.description;
      let sU = null;
      return "market" === hU ? sU = (0, cU.jsx)(ap, {}) : "sell" === hU ? sU = (0, cU.jsx)(Vp, {}) : "collect" === hU ? sU = (0, cU.jsx)(Xp, {}) : "orders" === hU ? sU = (0, cU.jsx)(Hp, {}) : "myOrders" === hU && (sU = (0, cU.jsx)(Sp, {})), (0, cU.jsx)(cp.Provider, {
        value: rU,
        children: (0, cU.jsx)("div", {
          className: "SmpShopHost",
          hidden: !eU,
          children: (0, cU.jsxs)("div", {
            className: "SmpShop",
            children: [(0, cU.jsx)("header", {
              className: "SmpHeader",
              children: (0, cU.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, cU.jsxs)("h2", {
                  children: [hU && (0, cU.jsx)(TU.c, {
                    name: yp[hU]
                  }), uU(HU)]
                }), SU && (0, cU.jsx)("p", {
                  children: (0, cU.jsx)(nt.e, {
                    text: SU
                  })
                })]
              })
            }), (0, cU.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: KU && sU
            }), (0, cU.jsxs)("button", {
              type: "button",
              className: EU()("SmpStatus", {
                SmpStatusWaiting: BU,
                SmpStatusFresh: !BU && null !== wU,
                SmpStatusHasHistory: dU
              }),
              "aria-live": "polite",
              "aria-expanded": dU ? IU : void 0,
              onClick: () => {
                dU && JU((UU => !UU))
              },
              children: [BU ? (0, cU.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, cU.jsx)(it, {}), uU(vU ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : xU[0] ? (0, cU.jsx)("span", {
                className: "SmpStatusText",
                children: (0, cU.jsx)(nt.e, {
                  text: xU[0].text
                })
              }, xU[0].id) : (0, cU.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: uU("smpShop:ready")
              }), dU && (0, cU.jsx)("small", {
                children: uU("smpShop:recentMessages", {
                  count: xU.length
                })
              })]
            }), IU && dU && (0, cU.jsx)("div", {
              className: "SmpStatusHistory",
              children: xU.map((UU => (0, cU.jsx)("div", {
                children: (0, cU.jsx)(nt.e, {
                  text: UU.text
                })
              }, UU.id)))
            })]
          })
        })
      })
    }
    class ip {
      constructor(UU) {
        this.info = UU
      }
      static fromShopInfo(UU) {
        const RU = {};
        for (const gU in UU) {
          const tU = !0 === UU[gU].redDot && !0 !== UU[gU].forceRemoveRedDot;
          RU[gU] = {
            redDot: tU,
            items: {}
          };
          for (const pU in UU[gU].items) {
            const tU = UU[gU].items[pU],
              EU = !0 === tU.redDot && !0 !== tU.forceRemoveRedDot;
            RU[gU].items[pU] = {
              redDot: EU
            }
          }
        }
        return new ip(RU)
      }
      anyCategoryHasRedDots() {
        for (const UU in this.info)
          if (this.categoryHasRedDot(UU)) return !0;
        return !1
      }
      doesCategoryExist(UU) {
        return !(0, kR.E)(this.info[UU])
      }
      categoryHasRedDot(UU) {
        return !0 === this.info[UU].redDot
      }
      updateCategoryRedDot(UU, RU) {
        this.info[UU].redDot = RU
      }
      doesItemExist(UU, RU) {
        return this.doesCategoryExist(UU) && !(0, kR.E)(this.info[UU].items[RU])
      }
      itemHasRedDot(UU, RU) {
        return !0 === this.info[UU].items[RU].redDot
      }
      updateItemRedDot(UU, RU, gU) {
        this.info[UU].items[RU].redDot = gU
      }
      shallowCopy() {
        return new ip(this.info)
      }
    }

    function Ap(UU, RU) {
      return `${UU}\x1f${RU}`
    }

    function zp(UU, RU) {
      return !(0, kR.E)(RU) && !(0, kR.E)(UU) && RU in UU
    }
    const Mp = (0, tU.memo)((function(UU) {
      var RU, gU;
      let {
        show: pU
      } = UU;
      const PU = (0, Lg.h)("players", UE),
        TU = (0, Lg.h)("players", RE),
        [KU, jU] = (0, tU.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: ip.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        uU = (0, tU.useRef)(""),
        hU = (0, tU.useRef)(null),
        eU = (0, tU.useRef)(null),
        fU = (0, tU.useRef)(0),
        xU = (0, tU.useRef)(void 0),
        mU = (0, tU.useRef)(null),
        IU = (0, tU.useRef)(KU),
        JU = KU.redDotInfo.anyCategoryHasRedDots(),
        [nU, bU] = (0, tU.useState)(null),
        ZU = (0, tU.useRef)(!1);
      let aU = !1,
        YU = 0,
        BU = 0;
      if (KU.currencyAmounts) {
        for (const UU in KU.currencyAmounts) {
          var VU;
          const RU = KU.currencyAmounts[UU];
          RU.hidden || (YU++, (null === (VU = RU.subtext) || void 0 === VU ? void 0 : VU.length) > 0 && BU++)
        }
        aU = YU + BU > 4
      }(0, tU.useEffect)((() => {
        FR.p.yh("showShopIconRedDot", JU, !0)
      }), [JU]), (0, tU.useEffect)((() => {
        WU.gameBridge.send("setShopOpen", pU), pU || (clearTimeout(xU.current), jU((UU => UU.awaitingPurchase ? {
          ...UU,
          awaitingPurchase: !1
        } : UU)))
      }), [pU]), (0, tU.useEffect)((() => () => {
        WU.gameBridge.send("setShopOpen", !1), clearTimeout(xU.current)
      }), []), (0, tU.useEffect)((() => {
        IU.current = KU
      }), [KU]), (0, tU.useEffect)((() => {
        if (null === nU) return;
        return (0, Yt.e)("pointerdown", (UU => {
          const RU = UU.target;
          null !== RU && void 0 !== RU && RU.closest(".ShopItem") || bU(null)
        }))
      }), [nU]);
      const rU = UU => {
          jU((RU => ({
            ...RU,
            ...UU
          })))
        },
        XU = UU => {
          var RU;
          clearTimeout(null === (RU = KU.onBoughtInfo) || void 0 === RU ? void 0 : RU.timeout);
          const gU = setTimeout((() => {
            rU({
              onBoughtInfo: null
            })
          }), 3e3);
          uU.current = UU, rU({
            onBoughtInfo: {
              text: UU,
              timeout: gU,
              categoryKey: hU.current
            }
          })
        },
        vU = UU => {
          const {
            shopInfo: RU,
            userInputsPerItem: gU,
            redDotInfo: tU,
            autoSelectCategory: EU
          } = function(UU, RU, gU, tU, pU, EU) {
            if ((0, kR.E)(UU) || 0 === Object.keys(UU).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: ip.fromShopInfo({}),
              autoSelectCategory: null
            };
            const PU = oU.p[oU.t].adConfig.showRewardedAds,
              TU = {};
            let qU = null;
            for (const QU in UU) {
              const RU = UU[QU],
                gU = {};
              let tU = !1;
              for (const UU in RU.items) {
                const pU = RU.items[UU];
                (0, mt.l)(pU, PU) && (gU[UU] = pU, tU = !0)
              }
              tU && (TU[QU] = {
                ...RU,
                items: gU
              }, !0 === RU.autoSelectCategory && (qU = QU))
            }
            const KU = {},
              cU = (UU, RU, tU, PU) => {
                var TU, qU;
                const cU = Ap(UU, RU),
                  GU = null !== (TU = gU[cU]) && void 0 !== TU ? TU : gU[RU];
                if (null !== (qU = PU.userInput) && void 0 !== qU && qU.type) switch (PU.userInput.type) {
                  case "dropdown": {
                    var jU;
                    const UU = !GU || !PU.userInput.dropdownOptions.some((UU => (0, mt.h)(UU) === GU)),
                      RU = PU.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === tU || void 0 === tU || null === (jU = tU.userInput) || void 0 === jU ? void 0 : jU.type) || JSON.stringify(tU.userInput.dropdownOptions) !== JSON.stringify(PU.userInput.dropdownOptions)),
                      gU = PU.userInput,
                      pU = !(0, kR.E)(gU.initialValue) && gU.dropdownOptions.some((UU => (0, mt.h)(UU) === gU.initialValue));
                    var uU;
                    return void(UU || RU ? pU ? KU[cU] = null !== (uU = PU.userInput.initialValue) && void 0 !== uU ? uU : null : PU.userInput.dropdownOptions.length > 0 ? KU[cU] = (0, mt.h)(PU.userInput.dropdownOptions[0]) : KU[cU] = null : KU[cU] = GU)
                  }
                  case "text":
                  case "number":
                    var CU, hU, QU;
                    return void((null === tU || void 0 === tU ? void 0 : tU.userInput) !== PU.userInput ? KU[cU] = null !== (CU = null !== (hU = PU.userInput.initialValue) && void 0 !== hU ? hU : GU) && void 0 !== CU ? CU : "" : KU[cU] = null !== (QU = null !== GU && void 0 !== GU ? GU : PU.userInput.initialValue) && void 0 !== QU ? QU : "");
                  case "color":
                    var eU, WU, fU;
                    return void((null === tU || void 0 === tU ? void 0 : tU.userInput) !== PU.userInput ? KU[cU] = null !== (eU = null !== (WU = PU.userInput.initialValue) && void 0 !== WU ? WU : GU) && void 0 !== eU ? eU : "#000000" : KU[cU] = null !== (fU = null !== GU && void 0 !== GU ? GU : PU.userInput.initialValue) && void 0 !== fU ? fU : "#000000");
                  case "player": {
                    const UU = (0, mt.i)(pU, EU, PU.userInput);
                    return void(GU && UU.includes(GU) ? KU[cU] = GU : KU[cU] = UU.length > 0 ? UU[0] : null)
                  }
                }
              };
            for (const QU in TU)
              for (const UU in TU[QU].items) {
                var GU;
                const gU = TU[QU].items[UU];
                cU(QU, UU, null === (GU = RU[QU]) || void 0 === GU ? void 0 : GU.items[UU], gU)
              }
            const jU = ip.fromShopInfo(TU);
            for (const QU in TU) {
              var uU;
              if (tU.doesCategoryExist(QU)) {
                (null === (uU = RU[QU]) || void 0 === uU ? void 0 : uU.redDot) === TU[QU].redDot && jU.updateCategoryRedDot(QU, tU.categoryHasRedDot(QU));
                for (const UU in TU[QU].items) {
                  var CU, hU;
                  tU.doesItemExist(QU, UU) && (null === (CU = RU[QU]) || void 0 === CU || null === (hU = CU.items[UU]) || void 0 === hU ? void 0 : hU.redDot) === TU[QU].items[UU].redDot && jU.updateItemRedDot(QU, UU, tU.itemHasRedDot(QU, UU))
                }
              }
            }
            return {
              shopInfo: TU,
              userInputsPerItem: KU,
              redDotInfo: jU,
              autoSelectCategory: qU
            }
          }(UU, KU.shopInfo, KU.userInputsPerItem, KU.redDotInfo, PU, TU), qU = {
            shopInfo: RU,
            userInputsPerItem: gU,
            redDotInfo: tU
          };
          if (null === EU || pU)
            if (RU[KU.selectedCategoryKey]) qU.selectedCategoryKey = KU.selectedCategoryKey;
            else {
              const UU = Vt(RU);
              qU.selectedCategoryKey = UU.length > 0 ? UU[0] : null
            }
          else qU.selectedCategoryKey = EU;
          return 0 === Object.keys(RU).length && pU && wU.b.set({
            openEverythingMenuName: null
          }), qU
        },
        dU = (UU, RU, gU) => {
          const tU = KU.selectedCategoryKey,
            pU = Ap(tU, UU),
            EU = null !== gU && void 0 !== gU ? gU : KU.userInputsPerItem[pU],
            PU = {
              categoryKey: tU,
              itemKey: UU,
              userInput: EU
            };
          if (hU.current = tU, RU.isRewardedAd) {
            if (Date.now() - fU.current < 5e3) return;
            (0, ER.fb)((() => {
              var gU, tU, EU;
              console.log("bought rewarded ad");
              const TU = PU.categoryKey ? null === (gU = IU.current.shopInfo[PU.categoryKey]) || void 0 === gU ? void 0 : gU.items[UU] : null;
              if (!TU || !TU.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (tU = RU.userInput) || void 0 === tU ? void 0 : tU.type) === (null === TU || void 0 === TU || null === (EU = TU.userInput) || void 0 === EU ? void 0 : EU.type) ? (PU.userInput = IU.current.userInputsPerItem[pU], WU.gameBridge.send("buyShopItem", PU), RU.onBoughtMessage && XU(RU.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), fU.current = Date.now()
          } else {
            WU.gameBridge.send("buyShopItem", PU), rU({
              awaitingPurchase: !0
            }), clearTimeout(xU.current), xU.current = setTimeout((() => {
              mU.current = null, rU({
                awaitingPurchase: !1
              })
            }), 1e3);
            const UU = (0, mt.e)(RU, EU);
            if (mU.current = null, !isNaN(UU) && zp(KU.currencyAmounts, RU.currency)) {
              0 !== UU && (mU.current = {
                currency: RU.currency,
                amountBefore: KU.currencyAmounts[RU.currency].amount
              });
              const gU = {
                ...KU.currencyAmounts
              };
              gU[RU.currency].amount -= UU, rU({
                currencyAmounts: gU
              })
            }
            RU.onBoughtMessage && XU(RU.onBoughtMessage)
          }
        },
        SU = (UU, RU) => {
          if (null === RU || !UU.shopInfo[RU]) return UU;
          let gU = UU.redDotInfo;
          return gU.categoryHasRedDot(RU) && (gU.updateCategoryRedDot(RU, !1), gU = gU.shallowCopy()), {
            ...UU,
            selectedCategoryKey: RU,
            redDotInfo: gU
          }
        },
        sU = UU => {
          jU((RU => SU(RU, UU)))
        };
      (0, oR.e)(Bt.j, (() => {
        jU((UU => {
          const RU = (0, Bt.l)(Vt(UU.shopInfo), UU.selectedCategoryKey, (RU => (0, Bt.f)(UU.shopInfo[RU].items)));
          return RU === UU.selectedCategoryKey ? UU : SU(UU, RU)
        }))
      })), (0, oR.e)("showShopFromServer", (UU => {
        let {
          toggle: RU,
          KR: gU
        } = UU;
        gU && sU(gU), 0 === Object.keys(KU.shopInfo).length || RU && pU ? wU.b.set({
          openEverythingMenuName: null
        }) : wU.b.set({
          openEverythingMenuName: KR.n.SHOP
        })
      })), (0, oR.e)("closeShopOnDamaged", (() => {
        pU && wU.b.set({
          openEverythingMenuName: null
        })
      })), (0, oR.e)("overShopInfo", (UU => {
        XU(UU)
      })), (0, CU.f)("currencyAmounts", (UU => {
        var RU;
        const gU = mU.current;
        gU && (null === UU || void 0 === UU || null === (RU = UU[gU.currency]) || void 0 === RU ? void 0 : RU.amount) === gU.amountBefore ? rU({
          currencyAmounts: UU
        }) : (mU.current = null, rU({
          currencyAmounts: UU,
          awaitingPurchase: !1
        }))
      })), (0, CU.f)("shopInfo", (UU => {
        rU({
          ...vU(UU),
          awaitingPurchase: !1
        })
      }));
      const yU = (0, tU.useRef)({
        playerIds: PU,
        localPlayerId: TU
      });
      (0, tU.useEffect)((() => {
        yU.current.playerIds === PU && yU.current.localPlayerId === TU || (yU.current = {
          playerIds: PU,
          localPlayerId: TU
        }, jU((UU => {
          const RU = vU(UU.shopInfo);
          return {
            ...UU,
            ...RU
          }
        })))
      }), [PU, TU]);
      const kU = KU.selectedCategoryKey,
        FU = (UU, RU) => {
          var gU, tU;
          return (isNaN(RU) || (0, kR.E)(UU.currency) || zp(KU.currencyAmounts, UU.currency) && RU <= KU.currencyAmounts[UU.currency].amount) && (null === (gU = UU.canBuy) || void 0 === gU || gU) && !(null !== (tU = UU.hidden) && void 0 !== tU && tU)
        },
        iU = (UU, RU) => {
          var gU, tU, pU;
          const PU = Ap(kU, UU),
            TU = KU.shopInfo[kU].items[UU],
            GU = KU.userInputsPerItem[PU],
            jU = (0, mt.e)(TU, GU),
            uU = FU(TU, jU),
            CU = TU.enchant,
            hU = CU ? (0, HU.xb)(null !== (gU = TU.customTitle) && void 0 !== gU ? gU : UU, {
              colour: HU.sb[CU.tier]
            }) : null !== (tU = TU.customTitle) && void 0 !== tU ? tU : UU,
            eU = RU => {
              const gU = null !== RU && void 0 !== RU ? RU : GU,
                tU = void 0 !== RU ? (0, mt.e)(TU, RU) : jU;
              FU(TU, tU) && null !== gU && dU(UU, TU, RU);
              let pU = KU.redDotInfo;
              pU.itemHasRedDot(kU, UU) && (pU.updateItemRedDot(kU, UU, !1), pU = pU.shallowCopy()), rU({
                redDotInfo: pU
              })
            };
          return (0, cU.jsxs)("div", {
            className: EU()("ShopItem", {
              ShopItemNoInput: !TU.userInput,
              ShopItemNoInputCanBuy: !TU.userInput && uU,
              ShopItemNoInputSelected: TU.isSelected,
              ShopItemEnchant: !!CU
            }),
            "data-pad-focusable": !TU.userInput || void 0,
            "data-pad-unavailable": !TU.userInput && !uU || void 0,
            "data-pad-repeat": null !== (pU = (0, Bt.c)(TU)) && void 0 !== pU ? pU : void 0,
            "data-pad-repeat-wait": KU.awaitingPurchase || void 0,
            onClick: () => {
              if (CU && ZU.current) {
                if (nU !== PU) return void bU(PU);
                bU(null)
              }
              TU.userInput || eU()
            },
            onPointerDown: UU => {
              CU && (ZU.current = (0, Jt.m)(UU))
            },
            onPointerEnter: UU => {
              CU && !(0, Jt.m)(UU) && bU(PU)
            },
            onPointerLeave: UU => {
              CU && !(0, Jt.m)(UU) && bU((UU => UU === PU ? null : UU))
            },
            style: {
              zIndex: Object.keys(KU.shopInfo[kU].items).length - RU
            },
            children: [KU.redDotInfo.itemHasRedDot(kU, UU) && (0, cU.jsx)(qU.e, {
              top: "-6px",
              right: "-6px"
            }), TU.badge && (0, cU.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, cU.jsx)("div", {
                className: EU()("ShopBadgeMain", TU.badge.type),
                children: (0, cU.jsx)(nt.e, {
                  text: TU.badge.text
                })
              })
            }), (0, cU.jsx)("div", {
              className: "ShopItemLeft",
              children: TU.image && (0, cU.jsx)(Dp, {
                item: TU,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, cU.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, cU.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, cU.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, cU.jsx)(nt.e, {
                    text: hU
                  })
                }), (0, cU.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, cU.jsx)(nt.e, {
                    text: TU.description
                  })
                })]
              }), TU.userInput && (0, cU.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: UU => {
                  UU.stopPropagation()
                },
                children: [(0, cU.jsx)(lp, {
                  item: TU,
                  currInput: GU,
                  updateInput: RU => {
                    ((UU, RU, gU) => {
                      const tU = Ap(UU, RU),
                        pU = {
                          ...KU.userInputsPerItem
                        };
                      pU[tU] = gU, rU({
                        userInputsPerItem: pU
                      })
                    })(kU, UU, RU)
                  },
                  onSubmit: UU => {
                    eU(UU)
                  }
                }), ("dropdown" !== TU.userInput.type || !TU.userInput.autoSubmit) && (0, cU.jsx)(QU.e, {
                  className: "ItemCostButton",
                  disabled: !uU && null !== GU,
                  onClick: () => {
                    eU()
                  },
                  children: (0, cU.jsx)(Np, {
                    item: TU,
                    cost: jU,
                    currencyAmounts: KU.currencyAmounts
                  })
                })]
              })]
            }), !TU.userInput && (0, cU.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, cU.jsx)(Np, {
                item: TU,
                cost: jU,
                currencyAmounts: KU.currencyAmounts
              })
            }), CU && nU === PU && (0, cU.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, cU.jsx)(nt.e, {
                text: hU
              }), (0, cU.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, cU.jsx)(nt.e, {
                  text: (0, It.e)("", CU.enchantments, CU.enchantmentData)
                })
              })]
            })]
          }, PU)
        },
        AU = function(UU) {
          for (const RU in UU)
            if (UU[RU].smp) return !0;
          return !1
        }(KU.shopInfo),
        zU = lt(KU.shopInfo, kU);
      return (0, cU.jsx)(Wt.c, {
        className: "Menu ShopBody",
        show: pU,
        children: 0 !== Object.keys(KU.shopInfo).length && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, cU.jsx)(GU, {
              items: Vt(KU.shopInfo).map((UU => {
                var RU;
                return {
                  id: UU,
                  title: null !== (RU = KU.shopInfo[UU].customTitle) && void 0 !== RU ? RU : UU,
                  redDot: KU.redDotInfo.categoryHasRedDot(UU)
                }
              })),
              selectedItemId: kU,
              onClick: sU,
              padStartsOnTab: (0, Bt.e)(kU)
            }), (0, cU.jsx)("div", {
              className: "MenuSideBarFooter",
              children: KU.currencyAmounts && Object.keys(KU.currencyAmounts).map((UU => {
                var RU;
                const gU = KU.currencyAmounts[UU];
                return gU.hidden ? null : (0, cU.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (aU ? "SmallText" : ""),
                  children: [(0, cU.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, cU.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: gU.iconColour
                      },
                      children: (0, cU.jsx)(gE, {
                        iconName: gU.icon
                      })
                    }), "\xa0", (0, xt.c)(gU.amount, 6)]
                  }), (null === (RU = gU.subtext) || void 0 === RU ? void 0 : RU.length) > 0 && (0, cU.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, cU.jsx)(nt.e, {
                      text: gU.subtext
                    })
                  })]
                }, UU)
              }))
            })]
          }), (0, cU.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [AU && (0, cU.jsx)(Fp, {
              show: pU,
              shopInfo: KU.shopInfo,
              selectedCategoryKey: kU,
              buy: (UU, RU, gU) => {
                dU(UU, RU, gU)
              },
              canAfford: FU,
              message: KU.onBoughtInfo
            }), null === zU && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)("div", {
                className: EU()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== KU.onBoughtInfo
                }),
                children: (0, cU.jsx)(nt.e, {
                  text: uU.current
                })
              }), (0, cU.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, cU.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (RU = KU.shopInfo[kU]) || void 0 === RU ? void 0 : RU.description) && (0, cU.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, cU.jsx)(nt.e, {
                      text: KU.shopInfo[kU].description
                    })
                  }), pU && (0, cU.jsx)("div", {
                    className: "ShopItems",
                    ref: eU,
                    "data-pad-initial-area": !0,
                    children: Vt(null === (gU = KU.shopInfo[kU]) || void 0 === gU ? void 0 : gU.items).map(((UU, RU) => iU(UU, RU)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Dp(UU) {
      let {
        item: RU,
        minWidth: gU,
        minHeight: tU
      } = UU;
      const {
        image: pU,
        schematicId: EU,
        imageColour: PU
      } = RU;
      if (EU) return (0, cU.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${gU}rem`,
          height: `${tU}rem`
        },
        children: (0, cU.jsx)(bt.c, {
          game: {
            schematicId: EU
          }
        })
      });
      var qU, KU;
      if ((0, wt.f)(pU)) return (0, cU.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${gU}rem`,
          height: "0",
          minHeight: `${tU}rem`
        },
        children: (0, cU.jsx)(wt.c, {
          itemName: pU,
          amount: null !== (qU = RU.amount) && void 0 !== qU ? qU : 0,
          amountFontSize: tU / 4 + "rem",
          enchantmentTier: null === (KU = RU.enchant) || void 0 === KU ? void 0 : KU.tier
        })
      });
      const GU = pU.slice(-4);
      return ".jpg" === GU || ".png" === GU ? (0, cU.jsx)(Lp, {
        image: pU,
        minWidth: gU
      }) : (0, cU.jsx)(TU.c, {
        name: pU,
        className: "SelectedItemImage",
        style: {
          color: PU
        }
      })
    }

    function Lp(UU) {
      let {
        image: RU,
        minWidth: gU
      } = UU;
      const {
        gameNameWithVariation: tU
      } = (0, Lg.k)("connectedGame"), pU = RU.endsWith(".jpg");
      return (0, cU.jsx)("img", {
        className: EU()({
          ShopPixelImage: !pU
        }),
        style: {
          width: `${pU?1.6*gU:gU}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,HU.Wb)(tU)}/${RU}`,
        alt: RU,
        draggable: !1
      })
    }

    function Np(UU) {
      let {
        item: RU,
        cost: gU,
        currencyAmounts: tU
      } = UU;
      const pU = !isNaN(gU) && 0 !== gU && zp(tU, RU.currency);
      let EU = null;
      return RU.buyButtonText ? EU = RU.buyButtonText : pU ? (EU = gU, RU.sell && (EU = -1 * gU), EU = EU.toString()) : 0 === gU ? EU = "Free" : RU.isRewardedAd && (EU = "Watch ad"), (0, kR.E)(EU) || " " === EU ? null : (0, cU.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [pU && (0, cU.jsx)("div", {
          style: {
            color: tU[RU.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, cU.jsx)(gE, {
            iconName: tU[RU.currency].icon
          })
        }), (0, cU.jsx)("div", {
          className: "BuyItemCost",
          children: (0, cU.jsx)(nt.e, {
            text: EU
          })
        })]
      })
    }

    function lp(UU) {
      let {
        item: RU,
        currInput: gU,
        updateInput: pU,
        onSubmit: EU
      } = UU;
      const {
        t: TU
      } = (0, PU.B)(), qU = (0, tU.useRef)(null);
      if ((0, tU.useEffect)((() => {
          const UU = qU.current;
          UU && UU.value !== gU && document.activeElement !== UU && (UU.value = null !== gU && void 0 !== gU ? gU : "")
        }), [gU]), !RU.userInput) return null;
      let KU = RU.userInput;
      if (eU.featureFlags.sanitizeShopInput && "text" === RU.userInput.type && (KU = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === KU.type || "number" === KU.type) {
        var GU, jU;
        console.assert(void 0 !== gU, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(RU)}`);
        const UU = "text" === KU.type && KU.wordCharsOnly;
        return (0, cU.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, cU.jsx)(mU.d, {
            className: "ShopItemUserInputText",
            placeholderText: TU(KU.placeholderText),
            defaultValue: gU,
            domRef: qU,
            onValueChange: (RU, gU) => {
              !0 === UU && (RU = (0, Zt.gb)(RU)), qU.current.value = RU, pU(RU)
            },
            onEnter: EU,
            type: KU.type
          }, (null !== (GU = KU.initialValue) && void 0 !== GU ? GU : "") + (null !== (jU = KU.placeholderText) && void 0 !== jU ? jU : ""))
        })
      }
      if ("dropdown" === KU.type) {
        console.assert(void 0 !== gU, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(RU)}`);
        const UU = KU.autoSubmit;
        return (0, cU.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, cU.jsx)(mR.c, {
            options: KU.dropdownOptions.map((UU => (0, mt.h)(UU))),
            value: gU,
            onChange: RU => {
              let {
                value: gU
              } = RU;
              pU(gU), UU && EU(gU)
            }
          })
        })
      }
      return "player" === KU.type ? (0, cU.jsx)(Op, {
        userInput: KU,
        currInput: gU,
        updateInput: pU
      }) : "color" === KU.type ? (0, cU.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, cU.jsx)("input", {
          type: "color",
          value: gU,
          onChange: UU => {
            pU(UU.target.value)
          }
        })
      }) : null
    }

    function Op(UU) {
      let {
        userInput: RU,
        currInput: gU,
        updateInput: tU
      } = UU;
      const pU = (0, Lg.k)("players"),
        EU = (0, Lg.k)("hiddenPlayerNames"),
        PU = (0, mt.i)(pU.ids, pU.localId, RU);
      return (0, cU.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, cU.jsx)(mR.c, {
          options: PU.map((UU => {
            const {
              name: RU
            } = pU.byId[UU];
            return {
              value: UU,
              label: null === RU ? "" : (0, ot.e)(RU, EU)
            }
          })),
          value: gU,
          onChange: UU => {
            let {
              value: RU
            } = UU;
            tU(RU)
          }
        })
      })
    }

    function UE(UU) {
      let {
        ids: RU
      } = UU;
      return RU
    }

    function RE(UU) {
      let {
        localId: RU
      } = UU;
      return RU
    }

    function gE(UU) {
      let {
        iconName: RU
      } = UU;
      return WU.gameBridge.lookup("isItemName", RU) ? (0, cU.jsx)(wt.c, {
        itemName: RU,
        amount: 1
      }) : (0, cU.jsx)(TU.c, {
        name: RU,
        className: "2x"
      })
    }
    var tE = gU(1567);
    const pE = (0, gU(1376).i)((UU => UU.PadLobbyShortcuts)),
      EE = (0, tU.lazy)((() => Promise.resolve().then((() => gU(4318))).then((UU => ({
        default: UU.Lobbyleaderboard
      })))));

    function PE(UU) {
      let {
        show: RU
      } = UU;
      return RU ? (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsx)(pE, {}), (0, cU.jsx)(tU.Suspense, {
          fallback: (0, cU.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, cU.jsx)(IU.d, {})
          }),
          children: (0, cU.jsx)(EE, {})
        })]
      }) : null
    }
    var TE = gU(1514),
      qE = gU(2710),
      KE = gU(1637),
      cE = gU(2760),
      GE = gU(2474),
      jE = gU(1457),
      uE = gU(1420),
      CE = gU(2685),
      hE = gU(2703),
      QE = gU(2169);
    const eE = "storeRecentGiftRecipients",
      WE = new Map;

    function fE() {
      try {
        const UU = AR.k.getItem(eE);
        return Array.isArray(UU) ? UU.filter((UU => "string" === typeof(null === UU || void 0 === UU ? void 0 : UU.name) && UU.name.length > 0)).map((UU => ({
          name: UU.name,
          cosmetics: UU.cosmetics && "object" === typeof UU.cosmetics ? UU.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function xE(UU) {
      var RU;
      const [gU, pU] = (0, tU.useState)(""), [EU, PU] = (0, tU.useState)("search"), [TU, qU] = (0, tU.useState)(null), [KU, cU] = (0, tU.useState)(null), GU = (0, tU.useRef)(null), jU = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => () => {
        GU.current && clearTimeout(GU.current)
      }), []);
      const uU = null !== (RU = null === TU || void 0 === TU ? void 0 : TU.name) && void 0 !== RU ? RU : null;

      function CU() {
        GU.current && (clearTimeout(GU.current), GU.current = null)
      }(0, tU.useEffect)((() => {
        if (null === uU || UU === ZU.NULL_USER_CONTEXT) return;
        const RU = uU.toLowerCase();
        if (RU === UU.getPlayerName().toLowerCase()) return void cU({
          name: uU,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const gU = WE.get(RU);
        if (gU) return void cU({
          name: uU,
          result: gU
        });
        let tU = !1;
        return async function(UU, RU) {
          try {
            const gU = await (0, ZU.postJsonWithMetricsCookiesAndJsonResponse)(`${aU.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: RU
            }, {
              retries: 1
            }, UU.getMetricsCookies());
            if ("boolean" !== typeof(null === gU || void 0 === gU ? void 0 : gU.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(gU)}`);
            return gU
          } catch (gU) {
            return console.error("Failed to look up gift recipient:", gU), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(UU, uU).catch((UU => (console.error("Gift recipient lookup failed:", UU), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((UU => {
          !0 !== UU.giftRecipientFound && "store:giftRecipientLookupFailed" === UU.giftRecipientError || WE.set(RU, UU), tU || cU({
            name: uU,
            result: UU
          })
        })), () => {
          tU = !0
        }
      }), [uU, UU]);
      const hU = (0, tU.useMemo)((() => {
        const UU = gU.trim();
        if (!UU) return {
          status: "none"
        };
        if (!TU || TU.name !== UU || (null === KU || void 0 === KU ? void 0 : KU.name) !== TU.name) return {
          status: "pending",
          name: UU
        };
        const RU = KU.result;
        return !1 === RU.giftRecipientFound ? {
          status: "error",
          name: TU.name,
          error: RU.giftRecipientError
        } : {
          status: "found",
          name: RU.giftRecipientName,
          ownedPacks: RU.giftRecipientOwnedPacks,
          hasSuperRank: RU.giftRecipientHasSuperRank,
          isSubscriber: RU.giftRecipientIsSubscriber
        }
      }), [gU, TU, KU]);
      (0, tU.useEffect)((() => {
        "found" === hU.status && "typed" === (null === TU || void 0 === TU ? void 0 : TU.source) && jU.current !== hU.name && (jU.current = hU.name, (0, lU.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [hU, TU]);
      const QU = (null === KU || void 0 === KU ? void 0 : KU.name) === (null === TU || void 0 === TU ? void 0 : TU.name) ? null === KU || void 0 === KU ? void 0 : KU.result : null,
        eU = !0 === (null === QU || void 0 === QU ? void 0 : QU.giftRecipientFound) ? QU.giftRecipientCosmetics : null;
      return {
        query: gU,
        via: EU,
        recipient: hU,
        recipientCosmetics: eU,
        type: function(UU) {
          pU(UU), PU("search"), CU();
          const RU = UU.trim();
          RU ? GU.current = setTimeout((() => {
            qU({
              name: RU,
              source: "typed"
            })
          }), 400) : qU(null)
        },
        choose: function(UU, RU) {
          CU(), pU(UU), PU("typed" === RU ? "search" : "prefilled" === RU ? "prefilled" : "suggestion"), qU({
            name: UU,
            source: RU
          }), "typed" !== RU && "prefilled" !== RU && (0, lU.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: RU
          })
        },
        clear: function() {
          CU(), pU(""), PU("search"), qU(null)
        },
        recordGift: function(UU, RU) {
          ! function(UU) {
            WE.delete(UU.toLowerCase())
          }(UU), cU((gU => {
            if (!gU || gU.name.toLowerCase() !== UU.toLowerCase() || !0 !== gU.result.giftRecipientFound || "superRank" === RU) return gU;
            const tU = gU.result.giftRecipientOwnedPacks;
            return {
              ...gU,
              result: {
                ...gU.result,
                giftRecipientOwnedPacks: tU.includes(RU) ? tU : [...tU, RU]
              }
            }
          }))
        }
      }
    }
    var mE = gU(2167),
      IE = gU(4320),
      JE = gU(249),
      wE = gU(2811);
    const nE = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var bE = gU(2103),
      oE = gU(562),
      ZE = gU(2198),
      aE = gU(2374);

    function YE(UU) {
      let {
        cosmetics: RU
      } = UU;
      return (0, cU.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, cU.jsx)(ZE.d, {
          cosmetics: RU
        })
      })
    }

    function BE(UU, RU) {
      var gU, tU;
      const pU = null !== (gU = UU.friend) && void 0 !== gU ? gU : {
        isError: !1,
        name: UU.name,
        ranks: [],
        cosmetics: null !== (tU = UU.cosmetics) && void 0 !== tU ? tU : {},
        nameColour: oE.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return RU ? {
        ...pU,
        cosmetics: RU
      } : pU
    }

    function VE(UU) {
      let {
        recipient: RU
      } = UU;
      return "pending" === RU.status ? (0, cU.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, cU.jsx)(IU.d, {})
      }) : "found" === RU.status ? (0, cU.jsx)(TU.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function rE(UU) {
      var RU;
      let {
        selfName: gU,
        giftRecipient: pU,
        suggestionsVersion: qU,
        pulseSignal: KU,
        disabled: GU
      } = UU;
      const {
        t: jU
      } = (0, PU.B)(), uU = (0, kU.g)(), CU = (0, tU.useRef)(null), hU = (0, tU.useRef)(null), {
        query: WU,
        via: fU,
        recipient: xU,
        recipientCosmetics: IU
      } = pU, JU = (0, QE.n)(WU), wU = (0, tU.useMemo)((() => {
        const UU = eU.featureFlags.useSocialFeatures ? uU.friends.filter((UU => !UU.isError)) : [];
        return (0, QE.j)({
          onlineFriends: (0, kU.e)(UU),
          recentRecipients: fE(),
          friends: UU,
          selfName: gU,
          max: 8
        })
      }), [uU.friends, gU, qU]), nU = WU.trim().toLowerCase(), bU = "search" !== fU && nU ? wU.find((UU => UU.name.toLowerCase() === nU)) : void 0, oU = bU && "prefilled" === fU ? [bU, ...wU.filter((UU => UU !== bU))] : wU, ZU = "" !== nU && !bU, aU = ZU ? WU : "", YU = oU.length > 0;
      (0, tU.useEffect)((() => {
        CU.current && CU.current.value !== aU && (CU.current.value = aU)
      }), [aU]), (0, tU.useEffect)((() => {
        CU.current && (CU.current.disabled = GU)
      }), [GU, KU]);
      const BU = (0, tU.useRef)(0);

      function rU() {
        "self" !== JU && (0, lU.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), pU.clear()
      }

      function XU(UU) {
        var RU, gU;
        if (GU) return;
        if (" " === UU.key || "Enter" === UU.key) return UU.preventDefault(), void UU.currentTarget.click();
        const tU = Array.from(null !== (RU = null === (gU = hU.current) || void 0 === gU ? void 0 : gU.querySelectorAll("[role=radio]")) && void 0 !== RU ? RU : []),
          pU = tU.indexOf(UU.currentTarget);
        let EU;
        "ArrowRight" === UU.key || "ArrowDown" === UU.key ? EU = tU[(pU + 1) % tU.length] : "ArrowLeft" === UU.key || "ArrowUp" === UU.key ? EU = tU[(pU - 1 + tU.length) % tU.length] : "Home" === UU.key ? EU = tU[0] : "End" === UU.key && (EU = tU[tU.length - 1]), EU && (UU.preventDefault(), EU.focus(), EU.click())
      }(0, tU.useEffect)((() => {
        var UU;
        KU > BU.current && !GU && (BU.current = KU, null === (UU = CU.current) || void 0 === UU || UU.focus())
      }), [KU, GU]);
      const vU = "self" === JU,
        dU = null !== (RU = null === bU || void 0 === bU ? void 0 : bU.name) && void 0 !== RU ? RU : null,
        HU = "error" === xU.status ? xU.error : null,
        SU = "store:giftRecipientLookupFailed" === HU;
      return (0, cU.jsxs)("div", {
        className: EU()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: GU,
          StoreRecipientStripNoChips: !YU
        }),
        children: [(0, cU.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: jU("store:buyingFor")
        }), (0, cU.jsxs)("div", {
          ref: hU,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": jU("store:whoIsItFor"),
          children: [(0, cU.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": vU,
            tabIndex: GU || !vU && null !== dU ? -1 : 0,
            className: EU()("StoreRecipientMe", {
              StoreRecipientChecked: vU
            }),
            onClick: () => {
              GU || rU()
            },
            onKeyDown: XU,
            children: [(0, cU.jsx)(TU.c, {
              name: "user"
            }), " ", jU("store:me")]
          }), YU && (0, cU.jsx)("div", {
            className: "StoreRecipientChips",
            children: oU.map((UU => {
              const RU = UU === bU;
              return (0, cU.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": RU,
                tabIndex: !GU && RU ? 0 : -1,
                title: UU.name,
                className: EU()("StoreRecipientChip", {
                  StoreRecipientChecked: RU
                }),
                onClick: () => {
                  GU || function(UU) {
                    "gift" !== JU && (0, lU.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), pU.choose(UU.name, UU.kind)
                  }(UU)
                },
                onKeyDown: XU,
                children: (0, cU.jsx)(aE.d, {
                  playerSocialPreview: BE(UU, RU ? IU : null),
                  opensProfileCard: !1,
                  isFriend: null !== UU.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== UU.friend,
                  status: null === UU.friend ? null : void 0,
                  trailing: RU ? (0, cU.jsx)(VE, {
                    recipient: xU
                  }) : void 0
                })
              }, UU.name)
            }))
          })]
        }), (0, cU.jsxs)("div", {
          className: EU()("StoreRecipientSearch", {
            StoreRecipientChecked: ZU,
            StoreRecipientSearchPulse: KU > 0 && !ZU,
            StoreRecipientSearchError: null !== HU && !SU
          }),
          onClick: () => {
            var UU;
            null === (UU = CU.current) || void 0 === UU || UU.focus()
          },
          children: [ZU && "found" === xU.status && IU && (0, cU.jsx)(YE, {
            cosmetics: IU
          }), !(ZU && "found" === xU.status && IU) && (0, cU.jsx)(TU.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, cU.jsx)(mU.d, {
            className: "StoreRecipientSearchInput",
            domRef: CU,
            placeholderText: jU("store:searchName"),
            defaultValue: aU,
            maxLength: VU.h,
            onValueChange: function(UU) {
              "gift" !== JU && UU.trim() && (0, lU.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), pU.type(UU)
            },
            onEnter: () => {
              var UU;
              const RU = null === (UU = CU.current) || void 0 === UU ? void 0 : UU.value.trim();
              RU && pU.choose(RU, "typed")
            },
            blurOnEnter: !0
          }), ZU && (0, cU.jsx)(VE, {
            recipient: xU
          }), ZU && (0, cU.jsx)("div", {
            ...(0, QU.R)({
              disabled: GU
            }),
            "aria-label": jU("store:clearRecipient"),
            title: jU("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: UU => {
              UU.stopPropagation(), GU || rU()
            },
            children: (0, cU.jsx)(TU.c, {
              name: "xmark"
            })
          })]
        }, KU), HU && (0, cU.jsx)("div", {
          className: EU()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: SU
          }),
          role: "status",
          children: jU(HU)
        })]
      })
    }
    var XE = gU(2159),
      vE = gU(2080),
      dE = gU(3266),
      HE = gU(2819),
      SE = gU(2116);
    const sE = gU.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function yE() {
      (0, SE.h)(sE, {
        lowPriority: !1
      })
    }

    function kE(UU) {
      let {
        onBack: RU,
        cta: gU,
        recipient: pU,
        afterCta: EU
      } = UU;
      const {
        t: qU
      } = (0, PU.B)(), [KU, GU] = (0, tU.useState)("starting"), jU = (0, tU.useRef)(null), uU = (0, YR.b)(), CU = (0, tU.useRef)(null), hU = (0, tU.useCallback)((() => {
        const UU = jU.current;
        null !== UU.error && UU.load();
        const RU = UU.play();
        CU.current = RU, RU.catch((UU => {
          (0, dE.b)("Failed to play Super Rank video", UU), uU.current && CU.current === RU && GU("failed")
        }))
      }), [uU]);
      return (0, tU.useEffect)((() => {
        const UU = jU.current;
        let RU;

        function gU() {
          clearTimeout(RU), RU = setTimeout(hU, 3e3)
        }
        return hU(), UU.addEventListener("ended", gU), () => {
          clearTimeout(RU), UU.removeEventListener("ended", gU)
        }
      }), [hU]), (0, cU.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, cU.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, cU.jsx)(QU.d, {
            className: "StoreDetailBackButton",
            onClick: RU,
            padBack: !0,
            children: qU("general:back")
          }), (0, cU.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, cU.jsx)(TU.c, {
              name: "bolt"
            }), " ", qU("homePage:superRank")]
          }), pU]
        }), (0, cU.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, cU.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, cU.jsx)("video", {
              ref: jU,
              src: `${aU.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: sE,
              muted: !0,
              playsInline: !0,
              controls: "playing" === KU,
              onPlaying: () => {
                GU("playing")
              },
              onError: () => {
                GU("failed")
              }
            }), ("failed" === KU || "loading" === KU) && (0, cU.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, cU.jsx)(QU.e, {
                ariaLabel: qU("general:play"),
                loading: "loading" === KU,
                onClick: () => {
                  GU("loading"), hU()
                },
                touchPressOn: "pointerup",
                children: (0, cU.jsx)(TU.c, {
                  name: "play"
                })
              })
            })]
          }), (0, cU.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, cU.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, cU.jsx)(HE.b, {})
            }), (0, cU.jsxs)("div", {
              className: "StoreTileActions",
              children: [gU, EU]
            })]
          })]
        })]
      })
    }
    var FE = gU(2393),
      iE = gU(3229),
      AE = gU(2800),
      zE = gU(2806);
    const ME = [oE.n.yellow, oE.n.green, oE.n.aqua, oE.n.blue, oE.n.purple, oE.n.red];

    function DE(UU) {
      return "needsRecipient" === UU || "lookingUp" === UU || "gift" === UU || "recipientOwns" === UU || "recipientSharesOwned" === UU || "recipientSubscribed" === UU
    }

    function LE(UU) {
      const {
        onKeyDown: RU,
        ...gU
      } = (0, QU.R)();
      return {
        ...gU,
        "aria-label": UU,
        onKeyDown: UU => {
          UU.target === UU.currentTarget && (null === RU || void 0 === RU || RU(UU))
        }
      }
    }

    function NE(UU) {
      let {
        text: RU
      } = UU;
      return (0, cU.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(RU).map(((UU, RU) => (0, cU.jsx)("span", {
          style: {
            color: ME[RU % ME.length]
          },
          children: UU
        }, RU)))
      })
    }
    const lE = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function OE(UU) {
      let {
        state: RU,
        item: gU,
        price: tU,
        busy: pU,
        highlight: qU = !1,
        onAct: KU,
        onNeedRecipient: GU,
        onLogin: jU
      } = UU;
      const {
        t: uU
      } = (0, PU.B)(), CU = "superRank" === gU ? XU.l.product.days : null, hU = UU => null === CU ? uU(UU ? "general:gift" : "general:buy") : uU(UU ? "store:giftDays" : "store:buyDays", {
        days: CU
      }), eU = (UU, RU) => (0, cU.jsxs)(cU.Fragment, {
        children: [RU && (0, cU.jsx)("span", {
          className: "StoreCtaIcon",
          children: RU
        }), null === UU && (0, cU.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== UU && (0, cU.jsx)("span", {
          className: "StoreCtaLabel",
          title: UU,
          children: UU
        }), (0, cU.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, cU.jsx)(vE.d, {
            amount: tU
          })]
        })]
      });
      let WU;
      switch (RU) {
        case "pending":
          WU = (0, cU.jsx)(QU.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: eU(null)
          });
          break;
        case "login":
          WU = (0, cU.jsx)(QU.j, {
            className: "StoreCtaButton",
            onClick: jU,
            children: eU(hU(!1))
          });
          break;
        case "owned":
          WU = (0, cU.jsx)(QU.g, {
            className: "StoreCtaButton",
            onClick: () => {
              wU.b.set({
                openEverythingMenuName: KR.n.CUSTOMISATION
              })
            },
            children: (0, cU.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, cU.jsx)(TU.c, {
                name: "shirt"
              }), " ", uU("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          WU = (0, cU.jsx)(QU.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, cU.jsx)("span", {
              className: "StoreCtaLabel",
              children: uU(lE[RU])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          WU = (0, cU.jsx)(QU.j, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === RU || null === tU,
            loading: "lookingUp" === RU || pU,
            onClick: KU,
            analyticsClick: {
              id: "store.gift",
              value: gU
            },
            children: eU(hU(!0), QE.c)
          });
          break;
        case "buy":
        case "recharge":
          WU = (0, cU.jsx)(QU.j, {
            className: "StoreCtaButton",
            loading: pU,
            disabled: null === tU,
            onClick: KU,
            analyticsClick: {
              id: "store.buy",
              value: gU
            },
            children: eU(hU(!1))
          })
      }
      return (0, cU.jsx)("div", {
        className: EU()("StoreCta", {
          StoreCtaHighlight: qU
        }),
        onClick: UU => {
          UU.stopPropagation(), "needsRecipient" === RU && GU()
        },
        children: WU
      })
    }

    function UP() {
      const {
        t: UU
      } = (0, PU.B)();
      return (0, cU.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, cU.jsxs)("li", {
          children: [(0, cU.jsx)(TU.c, {
            name: "check"
          }), (0, cU.jsx)(NE, {
            text: UU("store:colourfulNames")
          })]
        }), (0, cU.jsxs)("li", {
          children: [(0, cU.jsx)(TU.c, {
            name: "check"
          }), UU("store:perkCapes")]
        }), (0, cU.jsxs)("li", {
          children: [(0, cU.jsx)(TU.c, {
            name: "check"
          }), UU("store:perkNoAdverts")]
        }), (0, cU.jsxs)("li", {
          children: [(0, cU.jsx)(TU.c, {
            name: "check"
          }), UU("store:perkFriends", {
            count: (0, LU.e)(["super"])
          })]
        })]
      })
    }

    function RP(UU) {
      let {
        daysLeft: RU,
        totalDays: gU,
        urgent: tU
      } = UU;
      const {
        t: pU
      } = (0, PU.B)(), TU = gU > 0 ? Math.min(1, Math.max(.03, RU / gU)) : 1;
      return (0, cU.jsxs)("div", {
        className: EU()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: tU
        }),
        children: [(0, cU.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === RU ? pU("store:oneDayLeft") : pU("store:daysLeft", {
            days: RU
          })
        }), (0, cU.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, cU.jsx)("i", {
            style: {
              width: 100 * TU + "%"
            }
          })
        })]
      })
    }

    function gP(UU) {
      let {
        state: RU,
        urgent: gU,
        daysLeft: tU,
        totalDays: pU,
        recipientHasSuperRank: qU,
        busy: KU,
        highlight: GU,
        onOpen: jU,
        onAct: uU,
        onNeedRecipient: CU,
        onLogin: hU
      } = UU;
      const {
        t: QU
      } = (0, PU.B)(), eU = DE(RU), {
        days: WU
      } = XU.l.product, fU = QU("store:recipientHasSuperRank", {
        giftDays: WU
      }), xU = MU("subscribed" === RU);
      return (0, cU.jsxs)("div", {
        className: EU()("StoreTile StoreSuperRankTile", {
          StoreTileGift: eU,
          StoreSuperRankTileUrgent: "recharge" === RU && gU,
          StoreSuperRankTileWithChip: qU,
          StoreSuperRankTileGiftReady: "gift" === RU
        }),
        ...LE(QU("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: yE,
        onFocus: yE,
        onClick: jU,
        children: [(0, cU.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${bE.e})`
          }
        }), eU && (0, cU.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, cU.jsxs)("div", {
          className: "StoreTileContent",
          children: [qU && (0, cU.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: fU,
            children: fU
          }), (0, cU.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, cU.jsx)(TU.c, {
              name: "bolt"
            }), " ", QU("homePage:superRank")]
          }), eU && (0, cU.jsx)("div", {
            className: "StoreTilePitch",
            children: QU("store:giftPitch", {
              days: WU
            })
          }), "recharge" === RU && (0, cU.jsx)(RP, {
            daysLeft: tU,
            totalDays: pU,
            urgent: gU
          }), xU && (0, cU.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, cU.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: xU
            })
          }), (0, cU.jsx)(UP, {}), (0, cU.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, cU.jsx)(OE, {
              state: RU,
              item: "superRank",
              price: XU.l.price,
              busy: KU,
              highlight: GU,
              onAct: uU,
              onNeedRecipient: CU,
              onLogin: hU
            }), "needsRecipient" === RU && (0, cU.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: QU("store:pickRecipientFirst")
            }), "recharge" === RU && gU && (0, cU.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === tU ? QU("store:endsInOneDay") : QU("store:endsInDays", {
                days: tU
              })
            })]
          })]
        })]
      })
    }
    const tP = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function pP(UU) {
      var RU;
      let {
        pack: gU,
        state: pU,
        busy: qU,
        onOpen: KU,
        onAct: GU,
        onNeedRecipient: jU,
        onLogin: uU
      } = UU;
      const {
        t: CU
      } = (0, PU.B)(), hU = TE.b[gU], QU = CE.k[gU], eU = (0, bE.l)(gU), WU = (0, tU.useRef)(null);
      (0, AE.i)(gU, WU);
      const fU = DE(pU),
        xU = null !== (RU = hU.displayName) && void 0 !== RU ? RU : gU,
        mU = (0, iE.d)((() => {
          (0, FE.f)();
          const UU = (0, AE.d)(gU);
          void 0 !== UU && (0, SE.h)((0, AE.c)(UU))
        })),
        [IU] = (0, tU.useState)(wE.j);
      return (0, cU.jsxs)("div", {
        className: EU()("StoreTile StorePackTile", tP[hU.tier], {
          StorePackTileOwned: "owned" === pU,
          StorePackTileRecipientOwns: "recipientOwns" === pU,
          StoreTileGift: fU
        }),
        ...LE(xU),
        ref: WU,
        "data-store-item": gU,
        onClick: KU,
        onPointerMove: UU => {
          "mouse" !== UU.pointerType || 0 === UU.movementX && 0 === UU.movementY || IU || mU.start()
        },
        onPointerLeave: mU.cancel,
        children: [QU && (0, cU.jsx)(QU, {}), (0, cU.jsx)("div", {
          className: "StorePackCharacters",
          children: eU.map((UU => (0, cU.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,bE.h)(UU)})`
            }
          }, UU)))
        }), (0, cU.jsx)("div", {
          className: "StoreTileScrim"
        }), fU && (0, cU.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, cU.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, cU.jsx)("div", {
            className: "StoreTileTitle",
            children: xU
          }), (0, cU.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, cU.jsx)(zE.c, {
              tier: hU.tier
            }), " \xb7 ", CU("store:itemCount", {
              count: (0, XE.i)(gU)
            }), "owned" === pU && (0, cU.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, cU.jsx)(TU.c, {
                name: "check"
              }), " ", CU("general:owned")]
            })]
          }), (0, cU.jsx)(OE, {
            state: pU,
            item: gU,
            price: (0, XU.g)(gU),
            busy: qU,
            onAct: GU,
            onNeedRecipient: jU,
            onLogin: uU
          })]
        })]
      })
    }
    var EP = gU(2767),
      PP = gU(1505),
      TP = gU(1425),
      qP = gU(3248);

    function KP() {
      return (0, cU.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var cP = gU(1328),
      GP = gU(1517),
      jP = gU(9027);

    function uP(UU) {
      let {
        character: RU,
        drawn: gU,
        onDrawn: pU
      } = UU;
      const PU = (0, tU.useRef)(null),
        TU = (0, jP.f)(RU);
      return (0, cU.jsx)("div", {
        className: EU()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: gU
        }),
        children: (0, cU.jsx)(tU.Suspense, {
          fallback: null,
          children: (0, cU.jsx)(FE.b, {
            ref: PU,
            framing: "store",
            turntableFromYaw: gU ? TU.yaw : null,
            onReady: () => {
              var UU, gU;
              null === (UU = PU.current) || void 0 === UU || UU.setOrbit(TU), null === (gU = PU.current) || void 0 === gU || gU.setAllCosmetics(GP.d[RU].cosmetics)
            },
            onDrawn: pU
          })
        })
      })
    }
    const CP = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      hP = new Set(["wildSpirits"]);

    function QP(UU) {
      var RU;
      let {
        tile: gU,
        design: pU,
        canGoLive: qU,
        live: KU,
        busy: GU,
        highlight: jU,
        onLiveStart: uU,
        onLiveEnd: CU,
        onOpen: hU,
        onAct: QU,
        onNeedRecipient: eU,
        onLogin: WU
      } = UU;
      const {
        t: fU
      } = (0, PU.B)(), {
        pack: xU,
        state: mU
      } = gU, IU = TE.b[xU], JU = (0, TE.e)(xU), wU = (0, bE.k)(xU), nU = CE.k[wU], bU = hP.has(wU), {
        tier: oU
      } = IU, ZU = "legendary" === oU || "mythic" === oU, aU = (0, tU.useRef)(null);
      (0, cP.b)(aU, "epic" === oU || ZU || bU);
      const [YU, VU] = (0, tU.useState)(!1);
      return !KU && YU && VU(!1), (0, cU.jsxs)("div", {
        ref: aU,
        className: EU()("StoreCharacterCard", `StoreCharacterCard${pU}`, CP[oU], {
          StoreCharacterCardOwned: "owned" === mU || "recipientOwns" === mU,
          StoreCharacterCardGift: DE(mU),
          StoreCharacterCardItem: void 0 === JU
        }),
        onPointerMove: UU => {
          "mouse" !== UU.pointerType || 0 === UU.movementX && 0 === UU.movementY || !qU || KU || void 0 === JU || uU()
        },
        onPointerLeave: CU,
        children: [(0, cU.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: nU && (0, cU.jsx)(nU, {
            simple: !0
          })
        }), ZU && (0, cU.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, cU.jsxs)(BU.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, PP.f)({
            kind: "pack",
            pack: xU
          }),
          "data-store-item": xU,
          onClick: UU => {
            (0, TP.c)(UU) && (UU.preventDefault(), hU())
          },
          children: [(0, cU.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, cU.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, cU.jsx)("div", {
              className: EU()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: YU
              }),
              style: {
                backgroundImage: `url(${(0,bE.r)(xU)})`
              }
            }), KU && void 0 !== JU && (0, cU.jsx)(uP, {
              character: JU,
              drawn: YU,
              onDrawn: () => {
                VU(!0)
              }
            })]
          }), (0, cU.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (RU = IU.displayName) && void 0 !== RU ? RU : xU
          }), (0, cU.jsx)(zE.c, {
            tier: oU,
            className: "StoreCharacterTier"
          })]
        }), (0, cU.jsx)("div", {
          className: "StoreCharacterScrim"
        }), bU && (0, cU.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, cU.jsx)(KP, {})
        }), "owned" === mU && (0, cU.jsx)("span", {
          className: "StoreCharacterOwned",
          title: fU("general:owned"),
          "aria-label": fU("general:owned"),
          children: (0, cU.jsx)(TU.c, {
            name: "check"
          })
        }), (0, cU.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, cU.jsx)(OE, {
            state: mU,
            item: xU,
            price: (0, XU.g)(xU),
            busy: GU,
            highlight: jU,
            onAct: QU,
            onNeedRecipient: eU,
            onLogin: WU
          })
        })]
      })
    }

    function eP(UU) {
      let {
        tiles: RU,
        busy: gU,
        highlightItem: pU,
        onOpen: EU,
        onAct: PU,
        onNeedRecipient: TU,
        onLogin: qU
      } = UU;
      const KU = (0, qP.k)("storeCharacterCardFoil"),
        GU = (0, qP.k)("storeCharacterCardSpotlight"),
        jU = KU ? "Foil" : GU ? "Spotlight" : "Showcase",
        [uU] = (0, tU.useState)(wE.j),
        [CU, hU] = (0, tU.useState)(null);
      return (0, cU.jsx)("div", {
        className: "StoreCharacterGrid",
        children: RU.map((UU => (0, cU.jsx)(QP, {
          tile: UU,
          design: jU,
          canGoLive: !uU,
          live: CU === UU.pack,
          busy: gU,
          highlight: pU === UU.pack,
          onLiveStart: () => {
            hU(UU.pack)
          },
          onLiveEnd: () => {
            hU((RU => RU === UU.pack ? null : RU))
          },
          onOpen: () => {
            EU(UU.pack)
          },
          onAct: () => {
            PU(UU.pack)
          },
          onNeedRecipient: TU,
          onLogin: () => {
            qU(UU.pack)
          }
        }, UU.pack)))
      })
    }
    var WP = gU(9033);

    function fP(UU) {
      let {
        title: RU
      } = UU;
      return (0, cU.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, cU.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: RU
        })
      })
    }

    function xP(UU) {
      let {
        mountAtOnce: RU,
        children: gU
      } = UU;
      const pU = (0, tU.useRef)(null),
        [EU, PU] = (0, tU.useState)(RU),
        TU = (0, WP.d)();
      return (0, tU.useLayoutEffect)((() => {
        const UU = pU.current;
        UU && UU.getBoundingClientRect().top < UU.parentElement.getBoundingClientRect().bottom && PU(!0)
      }), []), EU || TU ? (0, cU.jsx)(cU.Fragment, {
        children: gU
      }) : (0, cU.jsx)("div", {
        ref: pU
      })
    }

    function mP(UU) {
      let {
        layout: RU,
        mountAtOnce: gU,
        bundleGift: tU,
        superRankTotalDays: pU,
        busy: EU,
        highlightItem: TU,
        onOpen: qU,
        onAct: KU,
        onNeedRecipient: GU,
        onLogin: jU
      } = UU;
      const {
        t: uU
      } = (0, PU.B)(), CU = RU.packs.filter((UU => void 0 === (0, TE.e)(UU.pack) && !(0, TE.l)(UU.pack))), hU = RU.packs.filter((UU => void 0 !== (0, TE.e)(UU.pack))), QU = RU.packs.filter((UU => (0, TE.l)(UU.pack)));
      return (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsx)(EP.b, {
          className: "StoreSuperGems",
          gift: tU,
          highlightSku: TU
        }), (0, cU.jsx)(fP, {
          title: uU("store:rank")
        }), (0, cU.jsx)(gP, {
          state: RU.superRank.state,
          urgent: RU.superRank.urgent,
          daysLeft: RU.superRankDaysLeft,
          totalDays: pU,
          recipientHasSuperRank: RU.recipientHasSuperRank,
          busy: EU,
          highlight: "superRank" === TU,
          onOpen: () => {
            qU("superRank")
          },
          onAct: () => {
            KU("superRank")
          },
          onNeedRecipient: GU,
          onLogin: () => {
            jU("superRank")
          }
        }), (0, cU.jsxs)(xP, {
          mountAtOnce: gU,
          children: [(0, cU.jsx)(fP, {
            title: uU("store:bundles")
          }), (0, cU.jsx)("div", {
            className: "StorePackGrid",
            children: CU.map((UU => (0, cU.jsx)(pP, {
              pack: UU.pack,
              state: UU.state,
              busy: EU,
              onOpen: () => {
                qU(UU.pack)
              },
              onAct: () => {
                KU(UU.pack)
              },
              onNeedRecipient: GU,
              onLogin: () => {
                jU(UU.pack)
              }
            }, UU.pack)))
          }), (0, cU.jsxs)(xP, {
            mountAtOnce: gU,
            children: [(0, cU.jsx)(fP, {
              title: uU("store:characters")
            }), (0, cU.jsx)(eP, {
              tiles: hU,
              busy: EU,
              highlightItem: TU,
              onOpen: qU,
              onAct: KU,
              onNeedRecipient: GU,
              onLogin: jU
            }), QU.length > 0 && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)(fP, {
                title: uU("store:premiumItems")
              }), (0, cU.jsx)(eP, {
                tiles: QU,
                busy: EU,
                highlightItem: TU,
                onOpen: qU,
                onAct: KU,
                onNeedRecipient: GU,
                onLogin: jU
              })]
            })]
          })]
        })]
      })
    }

    function IP(UU) {
      let {
        state: RU,
        mode: gU,
        giftName: tU,
        busy: pU,
        highlight: EU,
        purchaseError: TU,
        onBack: qU,
        onChooseRecipient: KU,
        onAct: GU,
        onLogin: jU
      } = UU;
      const {
        t: uU
      } = (0, PU.B)(), CU = MU("gift" !== gU);
      return (0, cU.jsx)(kE, {
        onBack: qU,
        recipient: "gift" === gU && (0, cU.jsxs)(cU.Fragment, {
          children: [tU && (0, cU.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: uU("store:giftFor", {
              name: tU
            }),
            children: [QE.c, " ", uU("store:giftFor", {
              name: tU
            })]
          }), !tU && (0, cU.jsxs)("div", {
            ...(0, QU.R)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: KU,
            children: [QE.c, " ", uU("store:chooseRecipient")]
          })]
        }),
        cta: (0, cU.jsx)(OE, {
          state: RU,
          item: "superRank",
          price: XU.l.price,
          busy: pU,
          highlight: EU,
          onAct: GU,
          onNeedRecipient: KU,
          onLogin: jU
        }),
        afterCta: (0, cU.jsxs)(cU.Fragment, {
          children: [CU && (0, cU.jsx)("span", {
            className: "StoreTileNote",
            children: CU
          }), TU && (0, cU.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: uU(TU)
          })]
        })
      })
    }
    var JP = gU(149);
    const wP = JP.m("kind", [JP.G({
      kind: JP.w("refused"),
      heldTierId: JP.X(),
      until: JP.D()
    }), JP.G({
      kind: JP.w("refund"),
      tierId: JP.X(),
      refundedMs: JP.D(),
      forfeitedMs: JP.D(),
      premiumCurrency: JP.D()
    }), JP.G({
      kind: JP.w("none")
    })]);
    async function nP(UU) {
      const RU = await (0, ZU.postJsonWithMetricsCookiesAndJsonResponse)(`${aU.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: UU
      }, {
        retries: 1
      });
      return wP.parse(RU)
    }
    var bP = gU(2730),
      oP = gU(2772);

    function ZP(UU, RU) {
      const gU = Math.max(1, Math.round(RU / HU.f));
      return [1 === gU ? `${UU}OneDay` : UU, {
        days: gU.toLocaleString()
      }]
    }

    function aP() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, sU.purchasesAllowed)() ? (0, cU.jsx)(YP, {}) : null
    }

    function YP() {
      const {
        t: UU
      } = (0, PU.B)(), {
        userContext: RU
      } = (0, uU.e)(), {
        purchaseUnderWay: gU,
        notice: pU,
        subscribe: EU
      } = (0, bP.e)(), [TU, qU] = (0, tU.useState)(null), [KU, GU] = (0, tU.useState)(0), [jU, CU] = (0, tU.useState)(!1), hU = (0, tU.useRef)(!0), eU = RU !== ZU.NULL_USER_CONTEXT, WU = null !== TU && TU.loadedFor === RU ? TU.offer : null, fU = null === pU || void 0 === pU ? void 0 : pU.pendingIntentId, xU = (0, tU.useRef)(fU);

      function mU() {
        GU((UU => UU + 1))
      }
      async function IU(UU) {
        CU(!1), await EU(UU), hU.current && mU()
      }
      if ((0, tU.useEffect)((() => (hU.current = !0, () => {
          hU.current = !1
        })), []), (0, tU.useEffect)((() => {
          void 0 !== xU.current && void 0 === fU && mU(), xU.current = fU
        }), [fU]), (0, tU.useEffect)((() => {
          if (!eU) return;
          let UU = !1;
          return CU(!1), async function() {
            const {
              offering: UU
            } = await (0, TR.g)().getOfferings("superRankPage"), RU = null === UU || void 0 === UU ? void 0 : UU.packages.find((UU => null !== UU.price));
            return void 0 === RU ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: RU,
              preview: await nP(RU.productId)
            }
          }().catch((UU => (console.error("Billing: loading the Super Rank subscription or its preview failed:", UU), {
            kind: "loadFailed"
          }))).then((gU => {
            UU || qU((UU => "loadFailed" === gU.kind && (null === UU || void 0 === UU ? void 0 : UU.loadedFor) === RU ? UU : {
              loadedFor: RU,
              offer: gU
            }))
          })), () => {
            UU = !0
          }
        }), [RU, eU, KU]), null === WU) return null;
      if ("loaded" !== WU.kind) return (0, cU.jsx)(oP.k, {
        notice: {
          kind: "error",
          key: "unavailable" === WU.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: JU,
        preview: wU
      } = WU;
      if ("refused" === wU.kind) return (0, cU.jsx)(oP.k, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(wU.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const nU = (0, EP.f)(JU.price);
      if (jU && "refund" === wU.kind) {
        const {
          refundedMs: RU,
          forfeitedMs: tU,
          premiumCurrency: pU
        } = wU, EU = tU + (0 === pU ? RU : 0), [PU, TU] = ZP("payments:subscribeRefundsGemRank", RU), [qU, KU] = ZP("payments:subscribeForfeitsGemRank", EU);
        return (0, cU.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, cU.jsx)("div", {
            children: UU("payments:subscribeEndsGemRank")
          }), pU > 0 && (0, cU.jsx)("div", {
            children: UU(PU, {
              ...TU,
              amount: pU.toLocaleString()
            })
          }), EU > 0 && (0, cU.jsx)("div", {
            children: UU(qU, KU)
          }), (0, cU.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, cU.jsx)(QU.g, {
              onClick: () => {
                CU(!1)
              },
              children: UU("general:cancel")
            }), (0, cU.jsx)(QU.j, {
              onClick: () => {
                IU(JU)
              },
              loading: gU,
              children: UU("payments:subscribeContinue", {
                price: nU
              })
            })]
          })]
        })
      }
      return (0, cU.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, cU.jsx)(oP.k, {
          notice: pU,
          className: "SmallTextBold"
        }), (0, cU.jsx)(oP.d, {
          className: "SmallTextBold"
        }), (0, cU.jsx)(QU.j, {
          onClick: () => {
            "refund" === wU.kind ? CU(!0) : IU(JU)
          },
          disabled: void 0 !== fU,
          loading: gU,
          children: UU("payments:subscribeToSuperRank", {
            price: nU
          })
        })]
      })
    }
    const BP = {
      kind: "board"
    };
    let VP = !1;

    function rP(UU) {
      return "found" === UU.status || "error" === UU.status && "store:giftRecipientLookupFailed" === UU.error ? UU.name : null
    }(0, SU.t)(qE.prefetchBillingOfferings);
    const XP = (0, tU.memo)((function(UU) {
      var RU;
      let {
        show: pU
      } = UU;
      const {
        t: TU
      } = (0, PU.B)(), {
        userContext: qU
      } = (0, uU.e)(), KU = qU !== ZU.NULL_USER_CONTEXT, GU = xE(qU), [jU, CU] = (0, hU.d)(), {
        page: QU,
        urlMode: eU,
        goTo: WU
      } = (0, mE.d)(), fU = function(UU) {
        return "superRank" === UU.kind ? "superRank" : "pack" === UU.kind ? UU.pack : null
      }(QU), {
        openEverythingMenuName: xU,
        gameState: mU
      } = (0, wU.l)(["openEverythingMenuName", "gameState"]), IU = null !== xU;
      ! function(UU, RU) {
        const [pU] = (0, tU.useState)(wE.j), [EU, PU] = (0, tU.useState)(!1);
        pU && RU && !EU && PU(!0);
        const TU = (0, Et.o)(),
          qU = pU && EU && UU && !TU;
        (0, tU.useEffect)((() => {
          if (!qU) return;
          let UU = null,
            RU = null,
            tU = null;
          const pU = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, TR.g)().purchaseUnderWay,
            EU = () => {
              var gU;
              null === (gU = tU) || void 0 === gU || gU(), tU = null, null !== UU && (clearTimeout(UU), UU = null), null !== RU && (clearTimeout(RU), RU = null)
            },
            PU = () => {
              (0, IE.n)(!1), (0, IE.m)(!1), EU(), UU = setTimeout((() => {
                UU = null, tU = (0, JE.e)((() => {
                  tU = null, pU() ? PU() : ((0, IE.n)(!0), RU = setTimeout((() => {
                    RU = null, tU = (0, JE.e)((() => {
                      tU = null, pU() ? PU() : (0, IE.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => gU(4318))).then((UU => {
                    UU.startBackgroundGameSetup()
                  }), (UU => {
                    console.warn("Background game setup: its chunk failed to load", UU)
                  })))
                }))
              }), 2e3)
            };
          for (const gU of nE) window.addEventListener(gU, PU, {
            capture: !0,
            passive: !0
          });
          return PU(), () => {
            for (const UU of nE) window.removeEventListener(UU, PU, {
              capture: !0
            });
            EU(), (0, IE.n)(!1), (0, IE.m)(!1)
          }
        }), [qU])
      }(pU && IU, "pack" === QU.kind);
      const JU = "landingPage" === mU;
      (0, tU.useEffect)((() => {
        IU && (0, qE.prefetchBillingOfferings)()
      }), [IU]), (0, tU.useEffect)((() => {
        IU && !pU && JU && (0, bE.u)()
      }), [IU, pU, JU]);
      const [nU, bU] = (0, tU.useState)(0), [oU, aU] = (0, tU.useState)(null), [YU, BU] = (0, tU.useState)(null), [VU, rU] = (0, tU.useState)(null), [vU, dU] = (0, tU.useState)(null), HU = (0, tU.useRef)(null), yU = (0, tU.useRef)(null), kU = (0, tU.useRef)(!1), FU = (0, SU.C)(), iU = (0, tU.useRef)(0), AU = (0, tU.useRef)(!1);

      function zU() {
        bU((UU => UU + 1))
      }(0, tU.useEffect)((() => {
        if (pU) {
          if (VP = !0, (0, SU.k)(), FU && FU.seq !== iU.current) {
            var UU;
            iU.current = FU.seq, "loginResume" !== FU.source && (0, SU.z)();
            const RU = (0, SU.d)(FU);
            eU || WU(RU), dU(null !== (UU = FU.highlight) && void 0 !== UU ? UU : null), BU(null), "gift" === FU.mode && FU.giftRecipientName ? GU.choose(FU.giftRecipientName, "prefilled") : "current" !== FU.mode && GU.clear(), "gift" !== FU.mode || FU.giftRecipientName || zU(), (0, lU.reportAnalyticsClick)({
              id: "store.open",
              value: FU.source
            })
          } else AU.current || (0, lU.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          AU.current = !0
        } else AU.current = !1
      }), [pU, FU]), (0, tU.useEffect)((() => {
        if (!vU) return;
        const UU = setTimeout((() => {
          dU(null)
        }), 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [vU]), (0, tU.useEffect)((() => {
        const UU = HU.current;
        var RU;
        if (pU && UU) {
          if (fU) yU.current = fU, null === (RU = UU.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === RU || RU.focus();
          else if (yU.current) {
            var gU;
            null === (gU = UU.querySelector(`[data-store-item="${yU.current}"]`)) || void 0 === gU || gU.focus(), yU.current = null
          }
        } else yU.current = null
      }), [fU, pU]), (0, tU.useEffect)((() => {
        BU(null)
      }), [GU.query]), (0, tU.useEffect)((() => {
        if (!VU) return;
        const UU = setTimeout((() => {
          rU(null)
        }), 8e3);
        return () => {
          clearTimeout(UU)
        }
      }), [VU]);
      const MU = qU.superRankInfo,
        DU = qU.isLoggedIn() || (0, sU.guestsMayBuy)(),
        LU = qU.getOwnedCosmeticPacks(),
        NU = (0, QE.n)(GU.query),
        OU = (0, QE.f)({
          mode: NU,
          loggedIn: KU ? DU : null,
          superRankInfo: MU,
          now: Date.now(),
          ownedPacks: LU,
          packs: TE.s,
          recipient: GU.recipient
        });
      (0, tU.useEffect)((() => {
        if (!DU || !pU) return;
        const UU = (0, SU.z)(),
          RU = UU && (0, QE.m)(UU, TE.s);
        UU && RU && ((0, lU.reportAnalyticsClick)({
          id: "store.login_resume",
          value: UU.item
        }), (0, SU.m)(RU))
      }), [DU, pU]);
      const UR = (0, QE.r)({
        superRankDaysLeft: OU.superRankDaysLeft,
        openedThisSession: VP || pU,
        seenNewItems: (0, SU.g)()
      });
      if ((0, tU.useEffect)((() => {
          (0, SU.v)(UR)
        }), [UR]), !pU || !(0, sU.purchasesAllowed)()) return null;
      const RR = CU > jU && jU <= 700,
        gR = !RR && CU <= 420,
        tR = "gift" === NU ? rP(GU.recipient) : null,
        pR = null !== oU;

      function ER(UU) {
        (0, cE.e)(UU, "gift" === NU ? GU.query.trim() : null)
      }

      function PR(UU, RU) {
        (0, lU.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${RU?"gift":"self"}:${UU}`
        }), RU && (GU.recordGift(RU.name, UU), qR(RU))
      }

      function qR(UU) {
        ! function(UU) {
          try {
            AR.k.setItem(eE, (0, QE.w)(fE(), UU))
          } catch {}
        }({
          name: UU.name,
          cosmetics: UU.cosmetics
        }), WU(BP), rU((RU => {
          var gU;
          return {
            name: UU.name,
            seq: (null !== (gU = null === RU || void 0 === RU ? void 0 : RU.seq) && void 0 !== gU ? gU : 0) + 1
          }
        }))
      }
      async function KR(UU) {
        var RU, gU;
        if (kU.current) return;
        if (!DU) return void ER(UU);
        BU(null), dU(null);
        const tU = "gift" === NU ? {
          name: rP(GU.recipient),
          cosmetics: GU.recipientCosmetics
        } : null;
        if (tU && !tU.name) return void zU();
        const pU = "superRank" === UU ? XU.l.id : (0, XU.e)(UU);
        kU.current = !0;
        const EU = await (0, hE.d)(pU, null !== (RU = null === tU || void 0 === tU ? void 0 : tU.name) && void 0 !== RU ? RU : null);
        if (kU.current = !1, !EU) return;
        aU(UU);
        const PU = await GE.d.purchase(pU, null !== (gU = null === tU || void 0 === tU ? void 0 : tU.name) && void 0 !== gU ? gU : null);
        aU(null), PU ? BU(PU) : (PR(UU, tU), tU || (await (0, jE.flushClientAnalyticsEvents)(), (0, KE.refreshWithoutConfirmation)("superRank" === UU ? "/super-rank-welcome" : `/pack-welcome/${UU}`)))
      }
      const cR = EU()("Store", {
        StoreGift: "gift" === NU,
        StorePortrait: RR,
        StoreCompact: gR
      });
      if ("pack" === QU.kind) {
        const UU = QU.pack,
          RU = OU.packs.find((RU => RU.pack === UU));
        return (0, cU.jsx)("div", {
          ref: HU,
          className: "CosmeticShopContainer",
          children: (0, cU.jsx)(CE.e, {
            pack: UU,
            onBack: () => {
              WU(BP)
            },
            onPurchased: RU => {
              PR(UU, RU ? {
                name: RU,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === NU && tR && RU && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)(OE, {
                state: RU.state,
                item: UU,
                price: (GR = UU, "superRank" === GR ? XU.l.price : (0, XU.g)(GR)),
                busy: pR,
                onAct: () => {
                  KR(UU)
                },
                onNeedRecipient: () => {
                  WU(BP), zU()
                },
                onLogin: () => {
                  ER(UU)
                },
                highlight: vU === UU
              }), YU && (0, cU.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: TU(YU)
              })]
            }),
            ownedPacks: LU,
            startAsGift: "gift" === NU,
            initialGiftRecipient: "gift" === NU ? null !== tR && void 0 !== tR ? tR : GU.query.trim() : "",
            highlightCta: vU === UU
          }, UU)
        })
      }
      var GR;
      return "superRank" === QU.kind ? (0, cU.jsx)("div", {
        ref: HU,
        className: EU()(cR, "StoreDetailView"),
        children: (0, cU.jsx)(IP, {
          state: OU.superRank.state,
          mode: NU,
          giftName: tR,
          busy: pR,
          highlight: "superRank" === vU,
          purchaseError: YU,
          onBack: () => {
            WU(BP)
          },
          onChooseRecipient: () => {
            WU(BP), zU()
          },
          onAct: () => {
            KR("superRank")
          },
          onLogin: () => {
            ER("superRank")
          }
        })
      }) : (0, cU.jsxs)("div", {
        ref: HU,
        className: cR,
        children: [(0, cU.jsx)("div", {
          className: "StoreTopRow",
          children: (0, cU.jsx)(rE, {
            selfName: KU ? qU.getPlayerName() : "",
            giftRecipient: GU,
            suggestionsVersion: null !== (RU = null === VU || void 0 === VU ? void 0 : VU.seq) && void 0 !== RU ? RU : 0,
            pulseSignal: nU,
            disabled: pR || !KU
          })
        }), VU && (0, cU.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            rU(null)
          },
          children: [(0, cU.jsx)(uE.c, {
            showSignal: VU.seq
          }), QE.c, " ", TU("store:giftSent", {
            name: VU.name
          })]
        }, VU.seq), !VU && YU && (0, cU.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: TU(YU)
        }), (0, cU.jsx)(mP, {
          layout: OU,
          mountAtOnce: null !== yU.current,
          bundleGift: "gift" === NU ? {
            recipientName: tR,
            lookingUp: "pending" === GU.recipient.status,
            busy: pR,
            onNeedRecipient: zU,
            onSent: UU => {
              (0, lU.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), qR({
                name: UU,
                cosmetics: GU.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, QE.s)(MU),
          busy: pR,
          highlightItem: vU,
          onOpen: function(UU) {
            (0, lU.reportAnalyticsClick)({
              id: "store.item_open",
              value: UU
            }), WU((0, SU.f)(UU))
          },
          onAct: KR,
          onNeedRecipient: zU,
          onLogin: ER
        }), "gift" !== NU && (0, cU.jsx)(aP, {})]
      })
    }));
    var vP = gU(2471),
      dP = gU(8470),
      HP = gU(2525),
      SP = gU(2360),
      sP = gU(2419),
      yP = gU(2433),
      kP = gU(2440),
      FP = gU(2514),
      iP = gU(2500),
      AP = gU(2183),
      zP = gU(2218),
      MP = gU(2203),
      DP = gU(1884),
      LP = gU(2442),
      NP = gU(2224);

    function lP(UU) {
      let {
        show: RU
      } = UU;
      return RU ? (0, cU.jsx)(OP, {}) : null
    }

    function OP() {
      const {
        t: UU
      } = (0, PU.B)(), {
        followsLeader: RU
      } = (0, SP.g)(), {
        loading: gU,
        friends: pU,
        requests: qU,
        invites: KU
      } = (0, kU.g)(), {
        userContext: GU
      } = (0, uU.e)(), [jU, CU] = (0, tU.useState)(NP.l);
      (0, tU.useEffect)((() => {
        (0, NP.d)()
      }), []);
      const hU = qU.map((UU => UU.name)),
        {
          state: eU,
          recentRequesters: WU
        } = (0, iP.j)(),
        fU = new Map([...("loaded" === eU.status ? eU.recentPlayers : []).map((UU => [UU.preview.name, UU])), ...WU.map((UU => [UU.name, UU]))]),
        xU = (0, tU.useRef)(null),
        [JU, wU] = (0, tU.useState)(""),
        [nU, bU] = (0, tU.useState)("Enter"),
        [oU, ZU] = (0, tU.useState)(null);

      function aU() {
        JU && (bU("Loading"), (0, MP.i)(JU, "social_menu").then((UU => {
          if (xU.current) switch (UU.kind) {
            case "sent":
              bU("Success");
              break;
            case "becameFriends":
              bU("BecameFriends");
              break;
            case "failed":
              ZU(UU.message), bU("Error")
          }
        })))
      }
      return (0, tU.useEffect)((() => {
        if ("Enter" === nU || "Loading" === nU) return;
        const UU = setTimeout((() => {
          xU.current.value = "", wU(""), bU("Enter")
        }), "Success" === nU ? 1e3 : 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [nU]), (0, cU.jsx)("div", {
        className: "SocialMenu",
        children: (0, cU.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, cU.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, cU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, cU.jsx)(kP.b, {
                label: UU("socialBar:addFriend")
              }), (0, cU.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, cU.jsxs)("div", {
                  className: EU()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${nU}`]: !0
                  }),
                  children: ["Loading" === nU && (0, cU.jsx)(IU.d, {}), "Success" === nU && (0, cU.jsx)(TU.c, {
                    name: "check"
                  }), "BecameFriends" === nU && (0, cU.jsx)(cU.Fragment, {
                    children: UU("socialBar:nowFriends", {
                      playerName: JU
                    })
                  }), "Error" === nU && oU && (0, cU.jsx)(cU.Fragment, {
                    children: UU(oU.translationKey, oU.params)
                  })]
                }), (0, cU.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, cU.jsx)(mU.d, {
                    className: "PlayerSearchInput",
                    placeholderText: UU("socialBar:enterPlayerName"),
                    domRef: xU,
                    onValueChange: UU => {
                      wU((0, VU.q)(UU)), xU.current.value = (0, VU.q)(UU)
                    },
                    onEnter: () => {
                      JU && (0, lU.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), aU()
                    }
                  }), (0, cU.jsxs)(QU.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      aU()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, cU.jsx)(TU.c, {
                      name: "user-plus"
                    }), " ", UU("socialBar:sendRequest")]
                  })]
                })]
              }), (0, cU.jsx)(LP.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), KU.length > 0 && (0, cU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, cU.jsx)(kP.b, {
                label: UU("socialBar:invites"),
                meta: KU.length
              }), KU.map((RU => (0, cU.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, cU.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, cU.jsx)(AP.b, {
                    invite: RU
                  })
                }), (0, cU.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, cU.jsx)(AP.d, {
                    invite: RU
                  })
                }), (0, cU.jsx)(QU.j, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, zP.e)(RU)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${RU.destination.kind}`
                  },
                  children: UU("general:join")
                }), (0, cU.jsx)(DU.g, {
                  tooltipInner: (0, cU.jsx)(cU.Fragment, {
                    children: UU("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, cU.jsx)(QU.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === jU || void 0 === jU ? void 0 : jU.kind) && jU.inviteId === RU.id,
                    onClick: () => {
                      kU.b.declineInvite(RU.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${RU.destination.kind}`
                    },
                    children: (0, cU.jsx)(TU.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, RU.id)))]
            }), (0, cU.jsxs)("div", {
              className: EU()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !gU && 0 === qU.length
              }),
              children: [(0, cU.jsx)(kP.b, {
                label: (0, cU.jsxs)(cU.Fragment, {
                  children: [(0, cU.jsx)(TU.c, {
                    name: DP.f
                  }), " ", UU("socialBar:requests")]
                }),
                meta: (0, cU.jsxs)(cU.Fragment, {
                  children: [qU.length, qU.length === LU.u && (0, cU.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: UU("socialBar:limitReached")
                  })]
                })
              }), gU && (0, cU.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, cU.jsx)(IU.d, {})
              }), !gU && 0 === qU.length && (0, cU.jsx)("div", {
                className: "SocialMenuEmpty",
                children: UU("socialBar:noFriendRequests")
              }), !gU && qU.length > 0 && (0, cU.jsx)("div", {
                className: "PlayerRows",
                children: (0, cU.jsx)(jp.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [qU],
                  children: qU.map(((RU, gU) => {
                    const tU = fU.get(RU.name);
                    return (0, cU.jsxs)(yP.c, {
                      playerSocialPreview: RU,
                      zIndex: qU.length - gU,
                      padDefaultFocus: (0, NP.h)(jU, RU.name, gU),
                      status: tU && (0, cU.jsx)(FP.d, {
                        gameNameWithVariation: tU.gameNameWithVariation,
                        isPrivateLobby: tU.isPrivateLobby
                      }),
                      children: [(0, cU.jsx)(DU.g, {
                        tooltipInner: (0, cU.jsx)(cU.Fragment, {
                          children: UU("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, cU.jsx)(QU.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            CU((0, NP.f)(hU, gU)), (0, MP.h)(RU.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, cU.jsx)(TU.c, {
                            name: "check"
                          })
                        })
                      }), (0, cU.jsx)(DU.g, {
                        tooltipInner: (0, cU.jsx)(cU.Fragment, {
                          children: UU("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, cU.jsx)(QU.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            CU((0, NP.f)(hU, gU)), (0, MP.h)(RU.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, cU.jsx)(TU.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${RU.name}_${RU.isError}`)
                  }))
                })
              })]
            }), (0, cU.jsx)(FP.k, {})]
          }), (0, cU.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, cU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, cU.jsx)(kP.b, {
                label: UU("socialBar:party")
              }), (0, cU.jsx)(sP.c, {})]
            }), (0, cU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, cU.jsx)(kP.b, {
                label: (0, cU.jsxs)(cU.Fragment, {
                  children: [(0, cU.jsx)(TU.c, {
                    name: DP.b
                  }), " ", UU("socialBar:friends")]
                }),
                meta: (0, cU.jsxs)(cU.Fragment, {
                  children: [pU.length, pU.length >= (0, LU.e)(GU.getPlayerRanks()) && (0, cU.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: UU("socialBar:limitReached")
                  })]
                })
              }), gU && (0, cU.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, cU.jsx)(IU.d, {})
              }), !gU && 0 === pU.length && (0, cU.jsx)("div", {
                className: "SocialMenuEmpty",
                children: UU("socialBar:noFriends")
              }), !gU && pU.length > 0 && (0, cU.jsx)("div", {
                className: "PlayerRows",
                children: (0, cU.jsx)(jp.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [pU],
                  children: pU.map(((UU, gU) => (0, cU.jsx)(yP.c, {
                    playerSocialPreview: UU,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: UU => {
                      kU.b.removeFriendFromState(UU)
                    },
                    zIndex: pU.length - gU,
                    children: (0, cU.jsx)(yP.b, {
                      friend: UU,
                      followsLeader: RU,
                      analyticsSurface: "social_menu"
                    })
                  }, `${UU.name}_${UU.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var UT = gU(2341);
    const RT = UU => {
        let {
          action: RU,
          padAction: gU
        } = UU;
        const {
          isTouchScreen: tU
        } = (0, wU.l)(["isTouchScreen"]), pU = (0, Et.o)();
        return tU && !pU ? null : (0, cU.jsx)(lg.b, {
          className: "EverythingMenuTabKey",
          noaAction: RU,
          padHidesKey: !0,
          padMenuShortcut: gU
        })
      },
      gT = (0, tU.memo)((function() {
        const {
          t: UU
        } = (0, PU.B)(), {
          gameState: RU,
          openEverythingMenuName: gU,
          initSdkSelectorFinished: pU,
          crosshairGameView: TU
        } = (0, wU.l)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: qU
        } = (0, uU.e)(), KU = (0, sU.purchasesAllowed)(), GU = (0, SU.G)(), jU = (UU, RU) => (0, cU.jsx)(RT, {
          action: UU,
          padAction: RU
        }), [CU, hU] = (0, tU.useState)(null), WU = (0, tU.useRef)(null), fU = {
          ..."inGame" === RU ? {} : (0, QU.R)({
            focusOnClick: !1
          }),
          ...ht.h
        }, xU = null !== gU, mU = gU !== KR.n.COSMETIC_SHOP && !TU;
        async function IU() {
          await async function() {
            if (!CU) return;
            await CU(), hU(null)
          }(), wU.b.set({
            openEverythingMenuName: null
          })
        }
        const JU = (0, tU.useMemo)((() => "inGame" === RU ? {
          text: UU("settingsMenu:exitGame"),
          onClick: () => {
            (0, dP.e)()
          }
        } : (0, oU.e)() ? {
          text: UU("settingsMenu:exitGame"),
          onClick: () => {
            ER.m.discordActivity().then((UU => {
              UU.exit("User exited the game")
            }))
          }
        } : null), [RU, UU]);
        const nU = (0, cU.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            IU()
          },
          children: (0, cU.jsx)(QU.h, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, cU.jsx)(Qt.d, {
          showing: xU,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: gU === KR.n.SHOP,
          doGameplayStartStopOnShow: "inGame" === RU,
          children: (0, cU.jsx)(Wt.c, {
            className: "EverythingMenuContainer",
            show: xU && !TU,
            children: (0, cU.jsx)(et.d, {
              close: () => {
                IU()
              },
              togglePointerLock: !1,
              children: (0, cU.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, tE.k)(gU) && (0, cU.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, cU.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [JU && (0, cU.jsx)(QU.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        JU.onClick()
                      },
                      children: JU.text
                    }), xU && KU && (0, cU.jsx)("div", {
                      ...fU,
                      className: "EverythingMenuWallet",
                      title: UU("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, SU.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, cU.jsx)(vP.e, {})
                    })]
                  }), (0, cU.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, cU.jsxs)("div", {
                      ...fU,
                      "data-pad-tab": !0,
                      "data-pad-selected": gU === KR.n.SETTINGS ? "true" : void 0,
                      className: EU()("EverythingMenuTab", {
                        EverythingMenuTabActive: gU === KR.n.SETTINGS
                      }),
                      onClick: () => {
                        wU.b.set({
                          openEverythingMenuName: KR.n.SETTINGS
                        })
                      },
                      children: [UU("general:settings"), jU("OpenSettings", "pause")]
                    }), (0, cU.jsxs)("div", {
                      ...fU,
                      "data-pad-tab": !0,
                      "data-pad-selected": gU === KR.n.CUSTOMISATION ? "true" : void 0,
                      className: EU()("EverythingMenuTab", {
                        EverythingMenuTabActive: gU === KR.n.CUSTOMISATION
                      }),
                      onClick: () => {
                        wU.b.set({
                          openEverythingMenuName: KR.n.CUSTOMISATION
                        })
                      },
                      children: [UU("general:player"), jU("OpenCharacterCustomization")]
                    }), eU.featureFlags.useSocialFeatures && (0, cU.jsxs)("div", {
                      ...fU,
                      "data-pad-tab": !0,
                      "data-pad-selected": gU === KR.n.SOCIAL ? "true" : void 0,
                      className: EU()("EverythingMenuTab", {
                        EverythingMenuTabActive: gU === KR.n.SOCIAL
                      }),
                      ...(0, lU.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, gU === KR.n.SOCIAL),
                      onClick: () => {
                        wU.b.set({
                          openEverythingMenuName: KR.n.SOCIAL
                        })
                      },
                      children: [UU("socialBar:social"), (0, cU.jsx)(UT.e, {})]
                    }), KU && (0, cU.jsxs)("div", {
                      ...fU,
                      "data-pad-tab": !0,
                      "data-pad-selected": gU === KR.n.COSMETIC_SHOP ? "true" : void 0,
                      className: EU()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: gU === KR.n.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        wU.b.set({
                          openEverythingMenuName: KR.n.COSMETIC_SHOP
                        })
                      },
                      children: [(0, cU.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: UU("store:title")
                      }), "new" === GU && (0, cU.jsx)(KP, {}), "dot" === GU && (0, cU.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === RU && (0, cU.jsxs)("div", {
                      ...fU,
                      "data-pad-tab": !0,
                      "data-pad-selected": gU === KR.n.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: EU()("EverythingMenuTab", {
                        EverythingMenuTabActive: gU === KR.n.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        wU.b.set({
                          openEverythingMenuName: KR.n.LOBBY_LEADERBOARD
                        })
                      },
                      children: [UU("general:lobby"), jU("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, cU.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: nU
                  })]
                }), (0, tE.k)(gU) && nU, (0, cU.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === RU ? "0.85" : "1"
                  },
                  children: [(0, cU.jsx)(ct, {
                    show: gU === KR.n.SETTINGS,
                    setBeforeResumeCallback: hU
                  }), (0, cU.jsx)(Ct, {
                    show: gU === KR.n.CUSTOMISATION
                  }), (0, cU.jsx)(tU.Suspense, {
                    fallback: null,
                    children: (0, cU.jsx)(Mp, {
                      show: gU === KR.n.SHOP
                    })
                  }), (0, cU.jsx)(PE, {
                    show: gU === KR.n.LOBBY_LEADERBOARD
                  }), (0, cU.jsx)(XP, {
                    show: gU === KR.n.COSMETIC_SHOP
                  }), (0, cU.jsx)(lP, {
                    show: gU === KR.n.SOCIAL
                  })]
                }), !(0, eU.isMobileApp)() && (0, ft.h)(qU.getPlayerRanks()) && (0, cU.jsx)(Wt.c, {
                  ref: WU,
                  className: "EverythingMenuBannerDiv",
                  show: mU,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, cU.jsx)(HP.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: WU
                    },
                    showing: xU && mU,
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
  8991: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(311),
      pU = gU(8994);

    function EU(UU, RU, gU) {
      const EU = Object.entries(RU).sort(((UU, RU) => RU[1] - UU[1])),
        PU = (0, tU.xb)(UU);
      PU.push(UU ? "\n\n" : "\n");
      for (const [pU, CU] of EU) {
        var TU, qU, KU;
        const UU = null !== (TU = null === gU || void 0 === gU || null === (qU = gU[pU]) || void 0 === qU ? void 0 : qU.icon) && void 0 !== TU ? TU : `${pU} Enchantment`;
        PU.push({
          icon: UU,
          style: {
            fontSize: "1.5rem"
          }
        }), PU.push({
          str: `${pU} ${null!==(KU=(0,tU.V)(CU))&&void 0!==KU?KU:CU}\n`
        })
      }
      PU.push({
        str: "\n"
      });
      for (const [tU, CU] of EU) {
        var cU, GU, jU, uU;
        const UU = null !== (cU = null === gU || void 0 === gU || null === (GU = gU[tU]) || void 0 === GU ? void 0 : GU.icon) && void 0 !== cU ? cU : `${tU} Enchantment`,
          RU = null !== (jU = null === gU || void 0 === gU || null === (uU = gU[tU]) || void 0 === uU ? void 0 : uU.description) && void 0 !== jU ? jU : (0, pU.m)(tU);
        PU.push({
          icon: UU,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), PU.push({
          str: RU,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), PU.push({
          str: "\n"
        })
      }
      return PU
    }
  },
  9001: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      d: () => WU,
      e: () => QU,
      f: () => qU,
      i: () => eU,
      l: () => cU,
      m: () => jU,
      q: () => hU,
      t: () => GU
    });
    var tU = gU(299),
      pU = gU(581),
      EU = gU(311),
      PU = gU(3931),
      TU = gU(8991);

    function qU(UU, RU) {
      var gU;
      let {
        player: tU,
        chestOrCreative: pU
      } = UU;
      var EU;
      return RU < tU.length ? null !== (EU = tU[RU]) && void 0 !== EU ? EU : null : null !== (gU = pU[RU - tU.length]) && void 0 !== gU ? gU : null
    }

    function KU(UU) {
      var RU;
      return null !== (RU = UU.amount) && void 0 !== RU ? RU : 0
    }

    function cU(UU) {
      return 0 === UU.button || void 0 === UU.button
    }

    function GU(UU) {
      return !!UU.shiftKey
    }

    function jU(UU) {
      return "touches" in UU || "touch" === UU.pointerType || "pen" === UU.pointerType
    }
    const uU = new Set,
      CU = 50;

    function hU(UU, RU) {
      var gU;
      const tU = null === (gU = UU[RU]) || void 0 === gU ? void 0 : gU.displayName;
      return (0, pU.E)(tU) ? "string" !== typeof RU ? "" : (!uU.has(RU) && uU.size < CU && (uU.add(RU), console.warn(`No item called "${RU}", so its hover shows the name as given`)), RU) : tU
    }

    function QU(UU, RU, gU) {
      var qU, KU, cU, GU, jU, uU, CU, QU, eU, WU, fU, xU, mU, IU;
      const JU = UU.attributes,
        wU = null !== (qU = null === (KU = RU[UU.name]) || void 0 === KU ? void 0 : KU.rootName) && void 0 !== qU ? qU : UU.name,
        nU = null !== (cU = null !== (GU = JU.customDisplayName) && void 0 !== GU ? GU : null === (jU = RU[UU.name]) || void 0 === jU ? void 0 : jU.displayName) && void 0 !== cU ? cU : hU(RU, wU);
      let bU = nU;
      const oU = null === (uU = JU.customAttributes) || void 0 === uU ? void 0 : uU.enchantmentTier;
      oU && (bU = (0, EU.xb)(nU, {
        colour: EU.sb[oU]
      }));
      const ZU = null !== (CU = null !== (QU = null !== (eU = function(UU, RU) {
        var gU;
        if (void 0 === UU || null !== (gU = RU.customAttributes) && void 0 !== gU && gU.author) return UU;
        const pU = (0, tU.dc)(UU);
        return pU.every((UU => "string" === typeof UU)) ? UU : pU.map((UU => "string" === typeof UU ? UU : {
          icon: UU.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(JU.customDescription, JU)) && void 0 !== eU ? eU : null === (WU = RU[UU.name]) || void 0 === WU ? void 0 : WU.description) && void 0 !== QU ? QU : null === (fU = RU[wU]) || void 0 === fU ? void 0 : fU.description) && void 0 !== CU ? CU : "";
      let aU = ZU;
      if (null !== (xU = JU.customAttributes) && void 0 !== xU && xU.enchantments) aU = (0, TU.e)(ZU, JU.customAttributes.enchantments, JU.customAttributes.enchantmentData);
      else if (gU[wU]) aU = (0, EU.xb)(ZU), aU.push({
        str: "\n"
      }), aU.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (mU = JU.customAttributes) && void 0 !== mU && mU.mobSettings) {
        var YU, BU;
        const UU = JU.customAttributes.mobSettings;
        var VU, rU;
        if (aU = [], (0, pU.E)(JU.customAttributes.health) || (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: JU.customAttributes.health.toString()
          }), (0, pU.E)(UU.maxHealth) || (aU.push({
            str: "/"
          }), aU.push({
            str: UU.maxHealth.toString()
          }))), !(0, pU.E)(UU.attackDamage) && UU.attackDamage > 0 && (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.attackDamage.toString()
          })), !(0, pU.E)(UU.secondaryAttackDamage) && UU.secondaryAttackDamage > 0 && (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.secondaryAttackDamage.toString()
          })), (0, pU.E)(UU.baseRunningSpeed) || (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.baseRunningSpeed.toFixed(2)
          })), "Saddled" === UU.metaInfo) aU.push({
          str: "\n"
        }), aU.push({
          str: {
            translationKey: "general:has"
          }
        }), aU.push({
          str: " "
        }), aU.push({
          icon: null !== (VU = null === (rU = UU.tameInfo) || void 0 === rU ? void 0 : rU.saddleItemName) && void 0 !== VU ? VU : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (aU.push({
            str: "\n"
          }), aU.push({
            str: "\n"
          }), UU.petInfo && null !== (YU = UU.tameInfo) && void 0 !== YU && YU.supportsFriendship) {
          const RU = PU.b.getIconsFromFriendshipPoints(UU.petInfo.friendshipPoints);
          for (const UU of RU) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: "\n"
          });
          const gU = PU.b.getMobHungerLevel(UU.petInfo.lastFedAt);
          for (const UU of PU.b.hungerLevelIcons[gU]) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: " "
          }), aU.push({
            str: PU.b.hungerLevelTranslations[gU],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (UU.tameInfo && null !== (BU = UU.tameInfo) && void 0 !== BU && BU.supportsFriendship) {
          var XU, vU;
          let RU = null !== (XU = UU.tameInfo.likedFoods) && void 0 !== XU ? XU : [];
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Superliked]
            }
          }), aU.push({
            str: " "
          }), null !== (vU = UU.petInfo) && void 0 !== vU && vU.superlikedFoodKnown ? (aU.push({
            icon: UU.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), RU = RU.filter((RU => RU !== UU.petInfo.superlikedFood))) : aU.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Liked]
            }
          }), aU.push({
            str: " "
          });
          for (const UU of RU) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Neutral]
            }
          }), aU.push({
            str: " "
          });
          for (const gU of null !== (dU = UU.tameInfo.neutralFoods) && void 0 !== dU ? dU : []) {
            var dU;
            aU.push({
              icon: gU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Disliked]
            }
          }), aU.push({
            str: " "
          });
          for (const gU of null !== (HU = UU.tameInfo.dislikedFoods) && void 0 !== HU ? HU : []) {
            var HU;
            aU.push({
              icon: gU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        aU.length > 0 ? (aU.shift(), aU.unshift(...(0, EU.xb)(ZU))) : aU = (0, EU.xb)(ZU)
      }
      return {
        name: bU,
        desc: aU,
        fontStyle: null !== (IU = JU.customAttributes) && void 0 !== IU && IU.author ? "italic" : "normal"
      }
    }

    function eU(UU, RU, gU, tU) {
      const pU = qU(UU, gU),
        EU = qU(UU, tU);
      if (!pU) return !1;
      const PU = RU[pU.name].armourReduction,
        TU = RU[EU.name].armourReduction;
      if (TU === PU) {
        var KU, cU, GU, jU;
        const UU = null !== (KU = null === (cU = pU.attributes.customAttributes) || void 0 === cU ? void 0 : cU.enchantmentTier) && void 0 !== KU ? KU : "Tier 0",
          RU = null !== (GU = null === (jU = EU.attributes.customAttributes) || void 0 === jU ? void 0 : jU.enchantmentTier) && void 0 !== GU ? GU : "Tier 0";
        return parseInt(UU.replace("Tier ", "")) >= parseInt(RU.replace("Tier ", ""))
      }
      return PU > TU
    }

    function WU(UU) {
      let RU;
      if ("number" === typeof UU) {
        const gU = document.querySelector(`[data-inven-idx="${UU}"]`);
        if (!gU) return null;
        RU = gU.getBoundingClientRect()
      } else RU = UU.getBoundingClientRect();
      return {
        x: RU.left + RU.width / 2,
        y: RU.top + RU.height / 2
      }
    }
  },
  8893: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => uU,
      d: () => CU,
      h: () => hU
    });
    var tU = gU(1412),
      pU = gU(56),
      EU = gU(1305),
      PU = gU(4195),
      TU = gU(2185),
      qU = gU(1181),
      KU = gU(96),
      cU = gU(1834),
      GU = gU(1326),
      jU = gU(1090);

    function uU(UU) {
      let {
        show: RU,
        onClose: gU
      } = UU;
      const {
        requestedGameNameWithVariation: tU,
        lobbyName: pU,
        shownLobbyName: EU
      } = (0, cU.k)("connectedGame"), qU = (0, TU.d)(tU, pU, !1);
      return KU.featureFlags.canUseInviteLinks && (0, jU.jsx)(PU.d, {
        show: RU,
        close: gU,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, jU.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, jU.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, jU.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, jU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qU ? (0, jU.jsx)(GU.d, {}) : qU, (0, jU.jsx)("br", {}), "Lobby Name: ", EU, (0, jU.jsx)("br", {}), (0, jU.jsx)("br", {}), (0, jU.jsx)("br", {}), (0, jU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, jU.jsx)(CU, {})]
        })
      })
    }

    function CU() {
      var UU;
      const {
        t: RU
      } = (0, qU.B)(), gU = null !== (UU = hU(KU.featureFlags.canUseInviteLinks)) && void 0 !== UU ? UU : "Loading Link...", [EU, PU] = (0, pU.useState)(0), [TU, cU] = (0, pU.useReducer)((UU => UU + 1), 0);
      return (0, pU.useEffect)((() => {
        const UU = setTimeout((() => {
          cU()
        }), 1100);
        return () => {
          clearTimeout(UU)
        }
      }), [EU]), KU.featureFlags.canUseInviteLinks && (0, jU.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, jU.jsx)("div", {
          className: "InviteLinkInner",
          children: gU
        }), (0, jU.jsx)(tU.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(gU).catch((UU => {
              console.error("Failed to copy invite link:", UU)
            })), PU(Date.now())
          },
          disabled: Date.now() - EU < 1e3,
          children: Date.now() - EU < 1e3 ? RU("general:copied") : RU("general:copy")
        })]
      })
    }

    function hU(UU) {
      const [RU, gU] = (0, pU.useState)(null);
      return (0, pU.useEffect)((() => {
        if (!UU) return;
        let RU = !0;
        return (0, EU.D)().then((UU => {
          RU && gU(UU)
        })).catch((UU => {
          console.error("Failed to get invite link:", UU)
        })), () => {
          RU = !1
        }
      }), [UU]), RU
    }
  },
  8978: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1834),
      TU = gU(1090);

    function qU(UU) {
      const RU = Math.floor(UU / 3600),
        gU = Math.floor(UU % 3600 / 60),
        tU = Math.floor(UU % 60),
        pU = `${gU.toString().padStart(2,"0")}:${tU.toString().padStart(2,"0")}`;
      return RU > 0 ? `${RU}:${pU}` : pU
    }
    const KU = (0, tU.memo)((function(UU) {
      let {
        className: RU
      } = UU;
      const {
        recording: gU,
        seconds: tU
      } = (0, PU.k)("replayRecorder");
      return gU ? (0, TU.jsxs)("div", {
        className: EU()("RecordingIndicator", RU),
        children: [(0, TU.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, TU.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, TU.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qU(tU)
        })]
      }) : null
    }))
  },
  4540: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => QU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(4307),
      PU = gU(1181),
      TU = gU(1049),
      qU = gU(1412),
      KU = gU(1461),
      cU = gU(1333),
      GU = gU(2309),
      jU = gU(1090);
    const uU = {
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

    function CU(UU) {
      let {
        platform: RU
      } = UU;
      const gU = "youtube" === RU;
      return (0, jU.jsxs)("span", {
        className: pU()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: gU
        }),
        children: [gU && (0, jU.jsx)(GU.b, {
          variant: "white"
        }), !gU && (0, jU.jsx)(TU.c, {
          name: uU[RU].icon,
          kit: "brands"
        })]
      })
    }

    function hU(UU) {
      let {
        platform: RU,
        link: gU,
        editable: tU,
        userContext: pU,
        onLinksUpdated: GU
      } = UU;
      const {
        t: hU
      } = (0, PU.B)(), QU = uU[RU];
      if (!gU && !tU) return null;

      function eU() {
        var UU;
        if (!pU || !GU) return;
        cU.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: QU.name
            }
          },
          prefixText: EU.y[RU],
          placeholderText: "playBloxd",
          initialValue: null !== (UU = null === gU || void 0 === gU ? void 0 : gU.handle) && void 0 !== UU ? UU : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: gU ? "general:remove" : void 0
        }).getResult().then((async UU => {
          if ("notificationTornDown" !== UU && null !== UU) try {
            "submit" === UU.type ? await KU.c.setSocialLink(pU, RU, UU.value) : await KU.c.clearSocialLink(pU, RU), GU()
          } catch (gU) {
            console.error("Failed to update social link", gU), cU.NotificationProvider.showAlertPopup({
              title: gU.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (gU) {
        const UU = `@${gU.handle}`;
        return (0, jU.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: QU.color
          },
          href: gU.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, jU.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, jU.jsx)(CU, {
              platform: RU
            }), (0, jU.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, jU.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: UU
              })
            })]
          }), tU && (0, jU.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qU.R)({
              stopPropagation: !0
            }),
            onClick: UU => {
              UU.stopPropagation(), UU.preventDefault(), eU()
            },
            children: (0, jU.jsx)(TU.c, {
              name: "pen-to-square"
            })
          }), !tU && (0, jU.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, jU.jsx)(TU.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, jU.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: QU.color
        },
        ...(0, qU.R)(),
        onClick: () => {
          eU()
        },
        children: [(0, jU.jsx)(CU, {
          platform: RU
        }), (0, jU.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, jU.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: QU.name
          }), (0, jU.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: hU("homePage:profileSocialLinkAdd")
          })]
        }), (0, jU.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, jU.jsx)(TU.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function QU(UU) {
      let {
        socialLinks: RU,
        editable: gU = !1,
        userContext: tU,
        onLinksUpdated: pU
      } = UU;
      if (!gU && 0 === RU.length) return null;
      const PU = new Map(RU.map((UU => [UU.platform, UU]))),
        TU = gU ? EU.u : RU.map((UU => UU.platform));
      return (0, jU.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, jU.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: TU.map((UU => (0, jU.jsx)(hU, {
            platform: UU,
            link: PU.get(UU),
            editable: gU,
            userContext: tU,
            onLinksUpdated: pU
          }, UU)))
        })
      })
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  9033: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(56),
      pU = gU(3262);

    function EU() {
      const [UU, RU] = (0, tU.useState)(!1);
      return (0, tU.useLayoutEffect)((() => {
        let UU = !0;
        return (0, pU.e)().then((() => {
          UU && RU(!0)
        })), () => {
          UU = !1
        }
      }), []), UU
    }
  },
  6239: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(56),
      pU = gU(34);

    function EU(UU, RU) {
      var gU;
      const [EU, PU] = (0, tU.useState)(null !== (gU = pU.k.getItem(UU)) && void 0 !== gU ? gU : RU);
      return [EU, RU => {
        pU.k.setItem(UU, RU), PU(RU)
      }]
    }
  },
  8953: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      i: () => GU
    });
    gU(8962);
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(8927);

    function TU(UU, RU) {
      return Math.max(1, Math.round(UU * RU))
    }

    function qU(UU, RU, gU) {
      const tU = 2 * gU >= RU - 1;
      return {
        x: UU,
        y: UU,
        size: RU,
        border: Math.min(gU, Math.floor(RU / 2)),
        filled: tU
      }
    }
    var KU = gU(1090);
    const cU = 1.4;

    function GU(UU, RU) {
      return UU && RU ? `scale(${cU})` : "scale(1)"
    }

    function jU(UU) {
      return "classic" === UU.settings.style ? (0, KU.jsx)(hU, {
        ...UU
      }) : (0, KU.jsx)(IU, {
        ...UU
      })
    }
    const uU = .125;

    function CU(UU, RU) {
      const gU = {};
      if (UU.color !== PU.d.color && (gU.color = (0, PU.j)(UU.color)), UU.opacity !== PU.d.opacity && (gU.opacity = UU.opacity / 100), UU.outline !== PU.d.outline || UU.outlineColor !== PU.d.outlineColor) {
        const RU = UU.outline,
          tU = (0, PU.j)(UU.outlineColor);
        gU.textShadow = RU > 0 ? `-${RU}px 0 ${tU}, 0 ${RU}px ${tU}, ${RU}px 0 ${tU}, 0 -${RU}px ${tU}` : "none"
      }
      if (UU.size !== PU.d.size) {
        const tU = UU.size / 100;
        gU.fontSize = RU ? `calc(max(1.3rem, 18px) * ${tU})` : `calc(1.3rem * ${tU})`, gU.marginTop = `-${uU}em`, gU.transformOrigin = `50% calc(50% + ${uU}em)`
      }
      return gU
    }

    function hU(UU) {
      let {
        settings: RU,
        touch: gU,
        inPreview: tU,
        inEditor: EU,
        pressed: PU = !1,
        pressRef: TU
      } = UU;
      return (0, KU.jsx)("div", {
        className: pU()("Crosshair", {
          Touch: gU,
          CrosshairInPreview: tU,
          CrosshairInEditor: EU || tU
        }),
        ref: TU,
        style: {
          transform: GU(PU, RU.growOnClick),
          ...CU(RU, gU)
        },
        children: "+"
      })
    }

    function QU(UU, RU) {
      return UU / RU + "px"
    }

    function eU(UU, RU, gU, tU) {
      return {
        ...xU(UU, RU, gU),
        width: QU(UU.w, gU),
        height: QU(UU.h, gU),
        background: tU
      }
    }

    function WU(UU, RU, gU) {
      return {
        left: QU(UU.x, RU),
        top: QU(UU.y, RU),
        width: QU(UU.size, RU),
        height: QU(UU.size, RU),
        borderWidth: QU(UU.border, RU),
        borderColor: gU,
        background: UU.filled ? gU : void 0
      }
    }
    const fU = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function xU(UU, RU, gU) {
      const [tU, pU] = UU.arm ? fU[UU.arm] : [0, 0], EU = Math.round(RU * gU);
      return {
        left: QU(UU.x + tU * EU, gU),
        top: QU(UU.y + pU * EU, gU)
      }
    }

    function mU(UU) {
      return UU.arm ? {
        "data-arm": UU.arm,
        "data-x": UU.x,
        "data-y": UU.y
      } : {}
    }

    function IU(UU) {
      let {
        settings: RU,
        inPreview: gU,
        inEditor: tU,
        pressed: GU = !1,
        spread: jU,
        spreadRef: uU
      } = UU;
      const CU = (0, EU.useRef)(null),
        {
          box: hU,
          dpr: QU
        } = function(UU) {
          const [RU, gU] = (0, EU.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, EU.useLayoutEffect)((() => {
            const RU = UU.current;
            if (!RU) return;
            const tU = () => {
              const UU = RU.getBoundingClientRect(),
                tU = window.devicePixelRatio || 1;
              gU((RU => RU.dpr === tU && RU.box.left === UU.left && RU.box.top === UU.top && RU.box.width === UU.width && RU.box.height === UU.height ? RU : {
                box: {
                  left: UU.left,
                  top: UU.top,
                  width: UU.width,
                  height: UU.height
                },
                dpr: tU
              }))
            };
            tU();
            const pU = new ResizeObserver(tU);
            return pU.observe(RU), window.addEventListener("resize", tU), window.addEventListener("scroll", tU, !0), () => {
              pU.disconnect(), window.removeEventListener("resize", tU), window.removeEventListener("scroll", tU, !0)
            }
          }), [UU]), RU
        }(CU),
        fU = (0, EU.useRef)(QU);
      fU.current = QU;
      const IU = function(UU, RU) {
          const gU = TU(UU.lineThickness, RU),
            tU = TU(UU.lineLength, RU),
            pU = Math.round(UU.gap * RU),
            EU = TU(UU.dotSize, RU),
            PU = UU.outline > 0 ? TU(UU.outline, RU) : 0,
            KU = TU(UU.circleThickness, RU),
            cU = UU.circle ? Math.round(UU.circleRadius * RU * 2 + KU) : 0,
            GU = function(UU, RU, gU, tU) {
              return UU.lines ? RU : UU.dot ? gU : UU.circle && tU % 2 === 0 ? 2 : 1
            }(UU, gU, EU, cU),
            jU = [];
          if (UU.lines && (jU.push({
              x: GU + pU,
              y: 0,
              w: tU,
              h: gU,
              arm: "right"
            }), jU.push({
              x: -pU - tU,
              y: 0,
              w: tU,
              h: gU,
              arm: "left"
            }), jU.push({
              x: 0,
              y: GU + pU,
              w: gU,
              h: tU,
              arm: "down"
            }), UU.tStyle || jU.push({
              x: 0,
              y: -pU - tU,
              w: gU,
              h: tU,
              arm: "up"
            }), 0 === pU && jU.push({
              x: 0,
              y: 0,
              w: gU,
              h: gU
            })), UU.dot) {
            const UU = Math.floor((GU - EU) / 2);
            jU.push({
              x: UU,
              y: UU,
              w: EU,
              h: EU
            })
          }
          const uU = jU.map((UU => ({
            ...UU,
            x: UU.x - PU,
            y: UU.y - PU,
            w: UU.w + 2 * PU,
            h: UU.h + 2 * PU
          })));
          let CU = null,
            hU = null;
          if (UU.circle) {
            const UU = cU + ((cU - GU) % 2 === 0 ? 0 : 1),
              RU = (GU - UU) / 2;
            CU = qU(RU, UU, KU), PU > 0 && (hU = qU(RU - PU, UU + 2 * PU, KU + 2 * PU))
          }
          return {
            cell: GU,
            fills: jU,
            outlines: PU > 0 ? uU : [],
            ring: CU,
            ringOutline: hU
          }
        }(GU && RU.growOnClick ? function(UU, RU) {
          return {
            ...UU,
            outline: UU.outline * RU,
            lineLength: UU.lineLength * RU,
            lineThickness: UU.lineThickness * RU,
            gap: UU.gap * RU,
            dotSize: UU.dotSize * RU,
            circleRadius: UU.circleRadius * RU,
            circleThickness: UU.circleThickness * RU
          }
        }(RU, cU) : RU, QU),
        JU = function(UU, RU, gU) {
          const tU = Math.round((UU.left + UU.width / 2) * gU - RU / 2),
            pU = Math.round((UU.top + UU.height / 2) * gU - RU / 2);
          return {
            x: tU / gU - UU.left,
            y: pU / gU - UU.top
          }
        }(hU, IU.cell, QU),
        wU = (0, PU.j)(RU.color),
        nU = (0, PU.j)(RU.outlineColor),
        bU = (0, EU.useRef)(0);
      (0, EU.useLayoutEffect)((() => {
        if (uU) return uU.current = UU => {
          var RU;
          bU.current = UU, null === (RU = CU.current) || void 0 === RU || RU.querySelectorAll("[data-arm]").forEach((RU => {
            Object.assign(RU.style, xU(function(UU) {
              return {
                x: Number(UU.dataset.x),
                y: Number(UU.dataset.y),
                arm: UU.dataset.arm
              }
            }(RU), UU, fU.current))
          }))
        }, () => {
          uU.current = null
        }
      }), [uU]);
      const oU = null !== jU && void 0 !== jU ? jU : bU.current;
      return (0, KU.jsx)("div", {
        ref: CU,
        className: pU()("CrosshairShapes", {
          CrosshairInPreview: gU,
          CrosshairInEditor: tU || gU,
          CrosshairSpreads: void 0 !== uU
        }),
        children: (0, KU.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: JU.x,
            top: JU.y,
            opacity: RU.opacity / 100
          },
          children: (0, KU.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [IU.ringOutline && (0, KU.jsx)("div", {
              className: "CrosshairRing",
              style: WU(IU.ringOutline, QU, nU)
            }), IU.outlines.map(((UU, RU) => (0, KU.jsx)("div", {
              className: "CrosshairPart",
              ...mU(UU),
              style: eU(UU, oU, QU, nU)
            }, `o${RU}`))), IU.ring && (0, KU.jsx)("div", {
              className: "CrosshairRing",
              style: WU(IU.ring, QU, wU)
            }), IU.fills.map(((UU, RU) => (0, KU.jsx)("div", {
              className: "CrosshairPart",
              ...mU(UU),
              style: eU(UU, oU, QU, wU)
            }, `f${RU}`)))]
          })
        })
      })
    }
  },
  8966: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      d: () => QU,
      g: () => hU
    });
    var tU = gU(8927);
    const pU = "XH1-",
      EU = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      PU = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      TU = ["color", "outlineColor"],
      qU = 1 + 3 * TU.length + PU.length + 1,
      KU = Math.ceil(8 * qU / Math.log2(62)),
      cU = pU.length + KU;

    function GU(UU) {
      let RU = 90;
      for (const gU of UU) RU = 31 * RU + gU & 255;
      return RU
    }
    const jU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      uU = BigInt(jU.length);

    function CU(UU, RU) {
      let gU = 0n;
      for (const pU of UU) {
        const UU = jU.indexOf(pU);
        if (UU < 0) return null;
        gU = gU * uU + BigInt(UU)
      }
      if (gU >> BigInt(8 * RU) !== 0n) return null;
      const tU = [];
      for (let pU = 0; pU < RU; pU++) tU.unshift(Number(0xffn & gU)), gU >>= 8n;
      return tU
    }

    function hU(UU) {
      let RU = "shapes" === UU.style ? 1 : 0;
      EU.forEach(((gU, tU) => {
        UU[gU] && (RU |= 1 << tU + 1)
      }));
      const gU = [RU];
      for (const pU of TU) {
        const RU = (0, tU.g)(pU, UU[pU]);
        gU.push(RU >> 16 & 255, RU >> 8 & 255, 255 & RU)
      }
      for (const pU of PU) {
        const {
          min: RU,
          step: EU
        } = tU.c[pU];
        gU.push(Math.round(((0, tU.g)(pU, UU[pU]) - RU) / EU))
      }
      return gU.push(GU(gU)), pU + function(UU, RU) {
        let gU = 0n;
        for (const pU of UU) gU = gU << 8n | BigInt(pU);
        let tU = "";
        for (let pU = 0; pU < RU; pU++) tU = jU[Number(gU % uU)] + tU, gU /= uU;
        return tU
      }(gU, KU)
    }

    function QU(UU) {
      for (const RU of UU.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${KU}})`, "gi"))) {
        const UU = eU(CU(RU[1], qU));
        if (UU) return UU
      }
      return null
    }

    function eU(UU) {
      if (!UU || UU.length !== qU || GU(UU.slice(0, -1)) !== UU[UU.length - 1]) return null;
      const RU = UU[0],
        gU = {
          ...tU.d,
          style: 1 & RU ? "shapes" : "classic"
        };
      EU.forEach(((UU, tU) => {
        gU[UU] = 0 !== (RU & 1 << tU + 1)
      }));
      let pU = 1;
      for (const tU of TU) gU[tU] = UU[pU] << 16 | UU[pU + 1] << 8 | UU[pU + 2], pU += 3;
      for (const EU of PU) {
        const {
          min: RU,
          step: PU
        } = tU.c[EU];
        gU[EU] = (0, tU.g)(EU, RU + UU[pU] * PU), pU++
      }
      return gU
    }
  },
  8927: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      d: () => pU,
      g: () => EU,
      j: () => KU,
      k: () => qU,
      n: () => cU,
      r: () => TU,
      s: () => PU
    });
    const tU = {
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
      pU = Object.freeze({
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

    function EU(UU, RU) {
      var gU;
      const {
        min: EU,
        max: PU,
        step: TU
      } = tU[UU];
      if (!Number.isFinite(RU)) return pU[UU];
      const qU = (null !== (gU = String(TU).split(".")[1]) && void 0 !== gU ? gU : "").length,
        KU = Number((Math.round(RU / TU) * TU).toFixed(qU));
      return Math.min(PU, Math.max(EU, KU))
    }

    function PU(UU, RU, gU) {
      const tU = "number" === typeof gU ? EU(RU, gU) : gU;
      return {
        ...UU,
        [RU]: tU
      }
    }

    function TU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(pU).every((tU => gU.includes(tU) || UU[tU] === RU[tU]))
    }

    function qU(UU) {
      return TU(UU, pU)
    }

    function KU(UU) {
      return `#${UU.toString(16).padStart(6,"0")}`
    }

    function cU(UU) {
      const RU = /^#?([0-9a-f]{6})$/i.exec(UU.trim());
      return RU ? parseInt(RU[1], 16) : null
    }
  },
  8969: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      h: () => jU
    });
    var tU = gU(56),
      pU = gU(34),
      EU = gU(8966),
      PU = gU(8927);
    const TU = "crosshairCode";
    let qU = null;
    const KU = new Set;

    function cU() {
      if (null === qU) {
        var UU;
        const RU = pU.k.getItem(TU);
        qU = null !== (UU = "string" === typeof RU ? (0, EU.d)(RU) : null) && void 0 !== UU ? UU : PU.d
      }
      return qU
    }

    function GU(UU) {
      qU = UU, (0, PU.k)(UU) ? pU.k.removeItem(TU) : pU.k.setItem(TU, (0, EU.g)(UU));
      for (const RU of KU) RU()
    }

    function jU() {
      const [UU, RU] = (0, tU.useState)(cU);
      return (0, tU.useEffect)((() => {
        const UU = () => {
          RU(cU())
        };
        return UU(), gU = UU, KU.add(gU), () => {
          KU.delete(gU)
        };
        var gU
      }), []), UU
    }
  },
  8516: (UU, RU, gU) => {
    function tU(UU) {
      return {
        x: (UU.left + UU.right) / 2,
        y: (UU.top + UU.bottom) / 2
      }
    }

    function pU(UU) {
      return 0 === UU.length ? null : UU.reduce(((UU, RU) => ({
        left: Math.min(UU.left, RU.left),
        top: Math.min(UU.top, RU.top),
        right: Math.max(UU.right, RU.right),
        bottom: Math.max(UU.bottom, RU.bottom)
      })))
    }

    function EU(UU, RU) {
      const gU = Math.max(0, (RU - (UU.right - UU.left)) / 2),
        tU = Math.max(0, (RU - (UU.bottom - UU.top)) / 2);
      return {
        left: UU.left - gU,
        top: UU.top - tU,
        right: UU.right + gU,
        bottom: UU.bottom + tU
      }
    }

    function PU(UU, RU) {
      return RU.x >= UU.left && RU.x <= UU.right && RU.y >= UU.top && RU.y <= UU.bottom
    }

    function TU(UU, RU, gU) {
      let pU = null,
        TU = 1 / 0;
      for (const {
          id: tU,
          box: EU
        }
        of RU) {
        const RU = (EU.right - EU.left) * (EU.bottom - EU.top);
        PU(EU, UU) && RU < TU && (TU = RU, pU = tU)
      }
      if (null !== pU) return pU;
      let qU = 1 / 0;
      for (const {
          id: KU,
          box: cU
        }
        of RU) {
        if (!PU(EU(cU, gU), UU)) continue;
        const RU = tU(cU),
          TU = Math.hypot(UU.x - RU.x, UU.y - RU.y);
        TU < qU && (qU = TU, pU = KU)
      }
      return pU
    }

    function qU(UU, RU, gU) {
      return {
        left: gU.left,
        top: gU.top,
        right: UU - gU.right,
        bottom: RU - gU.bottom
      }
    }

    function KU(UU, RU, gU, tU) {
      const pU = (UU, RU, gU) => Math.max(Math.min(RU, 0), Math.min(Math.max(gU, 0), UU));
      return {
        x: pU(RU, tU.left - UU.left, tU.right - UU.right),
        y: pU(gU, tU.top - UU.top, tU.bottom - UU.bottom)
      }
    }

    function cU(UU, RU, gU, tU, pU) {
      const EU = UU.dx * tU + RU,
        PU = UU.dy * pU + gU,
        TU = UU => Math.max(-1, Math.min(1, UU));
      return {
        dx: TU(EU / tU),
        dy: TU(PU / pU)
      }
    }

    function GU(UU, RU, gU, tU) {
      return RU <= 0 || gU <= 0 ? 1 : Math.max(.05, Math.min(1, UU / RU, tU / gU))
    }

    function jU(UU, RU, gU) {
      return Math.min(UU.right, RU.right) - Math.max(UU.left, RU.left) > gU && Math.min(UU.bottom, RU.bottom) - Math.max(UU.top, RU.top) > gU
    }

    function uU(UU, RU) {
      const gU = (UU, RU, gU, tU) => RU - UU > tU - gU ? gU - UU > RU - tU ? tU - RU : gU - UU : UU < gU ? gU - UU : RU > tU ? tU - RU : 0;
      return {
        x: gU(UU.left, UU.right, RU.left, RU.right),
        y: gU(UU.top, UU.bottom, RU.top, RU.bottom)
      }
    }

    function CU(UU, RU) {
      let {
        avoid: gU = null,
        bounds: tU = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, pU = 0, EU = 1 / 0;
      return UU.forEach(((UU, PU) => {
        const TU = RU.filter((RU => jU(UU, RU, 0))).length,
          qU = null !== tU && (UU.left < tU.left || UU.top < tU.top || UU.right > tU.right || UU.bottom > tU.bottom),
          KU = TU + (gU && jU(UU, gU, 0) ? 1e3 : 0) + (qU ? 1e6 : 0);
        KU < EU && (pU = PU, EU = KU)
      })), pU
    }
    gU.d(RU, {
      A: () => uU,
      D: () => pU,
      e: () => tU,
      f: () => PU,
      i: () => jU,
      j: () => KU,
      n: () => EU,
      r: () => CU,
      s: () => cU,
      t: () => TU,
      u: () => GU,
      w: () => qU
    })
  },
  8925: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => pU
    });
    var tU = gU(21);

    function pU(UU, RU) {
      return UU && !RU
    }

    function EU() {
      return pU(tU.b.get("isTouchScreen"), tU.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8887: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    const tU = new Set(["chunkBorders"])
  },
  8880: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ALL_DEV_TOOLS: () => PU,
      coreDevTools: () => KU,
      devTools: () => qU
    });
    var tU = gU(603),
      pU = gU(1293),
      EU = gU(8887);
    const PU = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function TU() {
      const {
        noaDevTools: UU
      } = await gU.e(230).then((() => gU(40455)));
      return UU
    }
    const qU = new class {
        constructor() {
          this.loadHost = TU, this.tools = PU
        }
        setHost(UU) {
          this.tools = null === UU ? PU : UU.tools, this.loadHost = null === UU ? TU : async () => UU
        }
        supports(UU) {
          return this.tools.has(UU)
        }
        async downloadScene(UU, RU) {
          const gU = await this.loadHost();
          await gU.downloadScene(UU, RU)
        }
        async setAmbientLightIntensity(UU) {
          const RU = await this.loadHost();
          await RU.setAmbientLightIntensity(UU)
        }
      },
      KU = {
        tools: EU.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    tU.u && qU.setHost(KU), (0, pU.x)((() => {
      qU.setHost(KU)
    }))
  },
  9030: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => pU,
      i: () => cU
    });
    var tU = gU(1517);

    function pU(UU) {
      var RU;
      return {
        ...PU.store,
        yaw: PU.store.yaw + (null !== (RU = tU.d[UU].previewYaw) && void 0 !== RU ? RU : 0)
      }
    }
    const EU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PU = {
        player: EU,
        store: {
          ...EU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function TU(UU, RU) {
      UU instanceof Promise ? UU.then(RU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : RU(UU)
    }
    class qU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var RU;
        this.view = UU, null === (RU = this.opened) || void 0 === RU || RU.show(UU)
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class KU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, RU;
        return null !== (UU = null === (RU = this.opened) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, RU) {
        var gU;
        null === (gU = this.opened) || void 0 === gU || gU.setCosmetic(UU, RU)
      }
      playEmote(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.playEmote(UU)
      }
      setOrbit(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var RU;
        await this.ready, await (null === (RU = this.opened) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const cU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new qU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new qU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new qU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, RU) {
        return new KU(this.current().openCharacter(UU, RU))
      }
    }
  },
  9027: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.e,
      f: () => tU.h,
      g: () => tU.i
    });
    var tU = gU(9030);
    class pU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class EU {
      constructor() {
        this.mobScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(153)]).then((() => gU(40461))))), this.characterScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(152)]).then((() => gU(40554)))))
      }
      openMob(UU) {
        return this.mobScene.run((RU => RU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((RU => RU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((RU => RU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, RU) {
        return this.characterScene.run((gU => gU.openCharacterPreview(UU, RU)))
      }
    }
    tU.i.setDefaultHost((() => new EU))
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  },
  8902: (UU, RU, gU) => {
    function tU(UU, RU) {
      return UU && !RU
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  8919: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(1064);

    function pU() {
      var UU, RU;
      return null !== (UU = null === (RU = screen.orientation) || void 0 === RU ? void 0 : RU.type) && void 0 !== UU ? UU : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const EU = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && pU() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = pU(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, tU.Kh)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const UU of this.resizers) UU()
          }
        }), 1e3)
      }
      heldSizer(UU) {
        let RU = !1;
        return () => {
          if (RU && this.isHeld()) return null;
          const gU = UU();
          return RU ||= null !== gU, gU
        }
      }
      onRelease(UU) {
        return this.resizers.add(UU), () => {
          this.resizers.delete(UU)
        }
      }
    }
  },
  8512: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU,
      d: () => qU
    });
    var tU = gU(21),
      pU = gU(1316),
      EU = gU(96);
    const PU = {
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

    function TU() {
      return (0, EU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, RU) {
        var gU;
        if (!this.deps.enabled()) return;
        const tU = PU[UU],
          pU = null !== RU && void 0 !== RU ? RU : tU.pattern;
        if (null === pU) return void console.warn("No vibration pattern for", UU);
        const EU = this.deps.now();
        EU - this.lastAnyAt < 40 && tU.priority < this.playingPriority || EU - (null !== (gU = this.lastAt.get(UU)) && void 0 !== gU ? gU : -1 / 0) < tU.minGapMs || EU < this.playingUntil && tU.priority < this.playingPriority || (this.lastAt.set(UU, EU), this.lastAnyAt = EU, this.playingUntil = EU + pU.reduce(((UU, RU) => UU + RU), 0), this.playingPriority = tU.priority, this.deps.vibrate(pU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => TU() && tU.b.get("isTouchScreen") && tU.b.get("clientEscMenuOptions").vibration && !(0, pU.h)()
    })
  },
  8896: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => uU,
      h: () => jU
    });
    var tU = gU(21),
      pU = gU(1614),
      EU = gU(34),
      PU = gU(1333),
      TU = gU(3329),
      qU = gU(1444),
      KU = gU(1362);
    const cU = 2592e5,
      GU = "notificationOptInLastPromptedAt";
    async function jU() {
      var UU;
      const RU = await uU();
      if (null === RU) return;
      const gU = null !== (UU = EU.k.getItem(GU)) && void 0 !== UU ? UU : 0;
      if (Date.now() - gU < cU) return;
      if ((0, KU.g)()) return;
      const tU = await PU.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: pU.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== tU && (EU.k.setItem(GU, Date.now()), (0, qU.reportAnalyticsClick)({
        id: !0 === tU ? "push.allow" : "push.deny",
        value: pU.b.supports("notifications") ? "app" : "browser"
      }), !0 === tU && RU().catch((UU => {
        console.error("Failed to ask for push notifications:", UU)
      })))
    }
    async function uU() {
      return await pU.b.ready, pU.b.supports("notifications") ? tU.b.get("mobilePushNotificationsCanAsk") ? async () => {
        pU.b.request("notifications.requestPermission", {}).then((UU => {
          let {
            canAsk: RU
          } = UU;
          tU.b.set({
            mobilePushNotificationsCanAsk: RU
          })
        }), (UU => {
          console.error("The app couldn't ask for push notifications:", UU)
        }))
      }: null: await TU.b.canAsk() ? () => TU.b.requestPermission() : null
    }
  },
  8908: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => qU
    });
    var tU = gU(21);
    const pU = 24,
      EU = "farNametags",
      PU = 1e5;

    function TU() {
      var UU;
      return null === (UU = tU.b.get("showDistantNametags")) || void 0 === UU || UU
    }

    function qU() {
      var UU;
      return null !== (UU = function() {
        const UU = new URLSearchParams(window.location.search).get(EU),
          RU = null === UU || "" === UU ? NaN : Number(UU);
        return Number.isFinite(RU) && RU >= 0 ? Math.min(RU, PU) : null
      }()) && void 0 !== UU ? UU : TU() ? 0 : pU
    }
  },
  9012: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => PU
    });
    const tU = [{
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

    function pU(UU) {
      let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof UU) {
        if (!Number.isFinite(UU)) return "0";
        if (Math.abs(UU) < 100) {
          const RU = UU < 0 ? "-" : "",
            gU = Math.abs(UU);
          return gU >= 10 ? `${RU}${gU.toFixed(1).replace(/\.0$/,"")}` : `${RU}${gU.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RU = BigInt(Math.floor(UU))
      } else RU = UU;
      const pU = RU < 0n ? -RU : RU,
        EU = RU < 0n ? "-" : "",
        PU = pU.toString();
      if (PU.length <= gU) return `${EU}${PU}`;
      const TU = 3 * Math.floor((PU.length - 1) / 3);
      if (TU < 3) return `${EU}${PU}`;
      if (TU > 3 * tU.length) {
        const UU = PU[0],
          RU = PU.slice(1, 3).replace(/0+$/, "");
        return `${EU}${RU?`${UU}.${RU}`:UU}e${PU.length-1}`
      }
      const {
        threshold: qU,
        suffix: KU
      } = tU[tU.length - TU / 3], cU = pU / qU, GU = Number(1000n * (pU % qU) / qU), jU = Number(cU) + GU / 1e3;
      let uU;
      return uU = jU >= 100 ? Math.floor(jU).toString() : jU >= 10 ? jU.toFixed(1).replace(/\.0$/, "") : jU.toFixed(2).replace(/\.?0+$/, ""), `${EU}${uU}${KU}`
    }
    const EU = tU.map((UU => {
      let {
        threshold: RU,
        suffix: gU
      } = UU;
      return {
        threshold: Number(RU),
        suffix: gU
      }
    })).filter((UU => {
      let {
        threshold: RU
      } = UU;
      return Number.isFinite(RU)
    }));

    function PU(UU) {
      const RU = Math.abs(UU),
        gU = UU < 0 ? "-" : "";
      for (const {
          threshold: tU,
          suffix: pU
        }
        of EU)
        if (RU >= tU) {
          const UU = RU / tU;
          if (UU >= 1e3) return `${gU}${RU.toExponential(2).replace("e+","e")}`;
          let EU;
          return EU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${gU}${EU}${pU}`
        } return `${gU}${RU}`
    }
  },
  8994: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU,
      f: () => jU,
      i: () => GU,
      m: () => PU,
      q: () => KU,
      u: () => qU
    });
    var tU = gU(311);
    const pU = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      EU = {
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

    function PU(UU) {
      var RU;
      return null !== (RU = EU[UU]) && void 0 !== RU ? RU : {
        translationKey: ""
      }
    }
    const TU = {
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

    function qU(UU) {
      return pU.includes(UU)
    }

    function KU(UU) {
      var RU;
      return !0 === (null === UU || void 0 === UU || null === (RU = UU.customAttributes) || void 0 === RU ? void 0 : RU.cannotEnchant)
    }

    function cU(UU, RU) {
      const {
        max: gU
      } = TU[UU].at(-1);
      return RU <= gU
    }

    function GU(UU) {
      const RU = Math.sin(UU / 80),
        gU = UU => {
          if (UU <= 0) return 0;
          if (UU > 1) return 1;
          let RU = 0;
          const gU = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let tU = 0; tU < gU.length; tU++) {
            RU += (tU % 2 === 0 ? 1 : -1) * gU[tU] * Math.pow(UU, 2 + tU) / (2 + tU)
          }
          return 72 * RU
        },
        tU = .3 - .78 * RU,
        pU = .5 - .78 * RU,
        EU = .6 - .7 * RU,
        PU = .8 - .6 * RU;
      let TU = gU(tU),
        qU = gU(pU) - TU,
        KU = gU(EU) - qU - TU,
        cU = gU(PU) - KU - qU - TU;
      tU < .041 && (qU /= 1 - TU, KU /= 1 - TU, cU /= 1 - TU, TU = 0), pU < .041 && (TU /= 1 - qU, KU /= 1 - qU, cU /= 1 - qU, qU = 0), EU < .041 && (TU /= 1 - KU, qU /= 1 - KU, cU /= 1 - KU, KU = 0), PU < .041 && (TU /= 1 - cU, qU /= 1 - cU, KU /= 1 - cU, cU = 0);
      return {
        commonProb: TU,
        uncommonProb: qU,
        rareProb: KU,
        epicProb: cU,
        legendaryProb: 1 - (cU + KU + qU + TU)
      }
    }

    function jU(UU, RU) {
      const {
        min: gU,
        max: pU
      } = TU[UU][RU], EU = tU.c.sampleUniformIntDistribution(gU, pU, "includeMax");
      return {
        ...GU(EU),
        level: EU
      }
    }
  },
  8405: (UU, RU, gU) => {
    function tU(UU, RU) {
      return !UU.hidden && (RU || !UU.isRewardedAd)
    }

    function pU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function EU(UU, RU) {
      var gU;
      if ("dropdown" === (null === (gU = UU.userInput) || void 0 === gU ? void 0 : gU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const gU of UU.userInput.dropdownOptions)
          if (pU(gU) === RU) return "object" === typeof gU ? gU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", RU)
      }
      return UU.cost
    }

    function PU(UU, RU, gU) {
      var tU;
      const pU = null !== (tU = gU.excludedPlayers) && void 0 !== tU ? tU : [RU];
      return UU.filter((UU => !pU.includes(UU)))
    }
    gU.d(RU, {
      e: () => EU,
      h: () => pU,
      i: () => PU,
      l: () => tU
    })
  },
  8962: () => {},
  8933: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8936: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8942: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8947: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);