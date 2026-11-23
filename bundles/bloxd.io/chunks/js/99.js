export const id = 99;
export const ids = [99, 194];
export const modules = {
  34033: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      EverythingMenu: () => rf
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1143),
      fC = ZC(1013),
      oC = ZC(1964),
      qC = ZC(1388),
      FC = ZC(1072),
      WC = ZC(1056);

    function NC(CC) {
      let {
        items: zC,
        link: ZC,
        onClick: QC,
        selectedItemId: wC,
        className: NC,
        padStartsOnTab: MC = !0
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = (0, FC.k)(), pC = [];
      for (const bC of zC) {
        var PC;
        const CC = pC[pC.length - 1];
        var GC;
        if (CC && CC.title === (null !== (PC = bC.section) && void 0 !== PC ? PC : null)) CC.items.push(bC);
        else pC.push({
          title: null !== (GC = bC.section) && void 0 !== GC ? GC : null,
          items: [bC]
        })
      }
      return (0, WC.jsxs)("div", {
        className: bC()("MenuSideBarBody", NC),
        "data-pad-tabs": "2",
        children: [pC.map(((CC, zC) => {
          var ZC;
          return (0, WC.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [CC.title && (0, WC.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: gC(CC.title)
            }), CC.items.map((CC => {
              var zC;
              const ZC = !!CC.iconElement || !!CC.faIcon;
              return (0, WC.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": wC === CC.id ? "true" : void 0,
                "data-pad-default-focus": MC && wC === CC.id || void 0,
                className: bC()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: wC === CC.id
                }),
                onClick: () => {
                  QC(CC.id)
                },
                children: [ZC && (0, WC.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (zC = CC.iconElement) && void 0 !== zC ? zC : (0, WC.jsx)(fC.c, {
                    name: CC.faIcon
                  })
                }), (!SC || !ZC) && (0, WC.jsx)("div", {
                  children: gC(CC.title)
                }), CC.redDot && (0, WC.jsx)(oC.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, CC.id)
            }))]
          }, null !== (ZC = CC.title) && void 0 !== ZC ? ZC : zC)
        })), ZC && (0, WC.jsxs)("div", {
          ...(0, qC.U)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: ZC.onClick,
          children: [(0, WC.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, WC.jsx)(fC.c, {
              name: ZC.faIcon
            })
          }), (0, WC.jsx)("div", {
            children: gC(ZC.title)
          }), (0, WC.jsx)(fC.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var MC = ZC(2997),
      gC = ZC(1076),
      SC = ZC(2369),
      pC = ZC(3099),
      PC = ZC(77),
      GC = ZC(1840),
      RC = ZC(2191),
      AC = ZC(2197),
      xC = ZC(1593),
      JC = ZC(1295),
      IC = ZC(4942),
      iC = ZC(20),
      vC = ZC(34040);

    function eC(CC) {
      let {
        setApplySettingsCallback: zC
      } = CC;
      const {
        clientEscMenuOptions: ZC
      } = (0, iC.k)(["clientEscMenuOptions"]), [wC, bC] = (0, QC.useState)(!1), [nC, fC] = (0, QC.useState)(!1), [oC, FC] = (0, QC.useState)(6400), [NC, MC] = (0, QC.useState)(3600), [gC, SC] = (0, QC.useState)(!1), [pC, PC] = (0, QC.useState)(!1);

      function GC(CC) {
        const zC = "screenshot" === CC ? fC : bC;
        zC(!0);
        const ZC = gC ? "normals" : pC ? "depth" : null;
        vC.devTools.downloadScene(CC, {
          width: oC,
          height: NC,
          colouring: ZC
        }).catch((CC => {
          console.error("Couldn't download the scene", CC)
        })).finally((() => {
          zC(!1)
        }))
      }
      return (0, WC.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, WC.jsx)(IC.b, {
          label: "Disable Ambient Occlusion",
          checked: ZC.disableAmbientOcclusion,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              disableAmbientOcclusion: CC
            }), zC((() => IC.h))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), vC.devTools.supports("ambientLight") && (0, WC.jsx)(IC.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ZC.ambientLightIntensity,
          onChange: CC => {
            vC.devTools.setAmbientLightIntensity(CC).then((() => {
              iC.b.setClientEscMenuOptions({
                ambientLightIntensity: CC
              })
            })).catch((CC => {
              console.error("Couldn't set the ambient light", CC)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), vC.devTools.supports("weaponRaycasts") && (0, WC.jsx)(IC.b, {
          label: "Show Weapon Raycasts",
          checked: ZC.showWeaponRaycasts,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              showWeaponRaycasts: CC
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), vC.devTools.supports("sceneDownload") && (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, WC.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, WC.jsx)(IC.b, {
              label: "Apply normal-based coloring",
              checked: gC,
              onClick: CC => {
                SC(CC), CC && PC(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, WC.jsx)(IC.b, {
              label: "Apply depth-based coloring",
              checked: pC,
              onClick: CC => {
                PC(CC), CC && SC(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, WC.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, WC.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, WC.jsx)(xC.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (CC, zC) => {
                  const ZC = parseInt(CC) || 6400;
                  FC(ZC)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: oC.toString()
              }), (0, WC.jsx)("span", {
                children: "X"
              }), (0, WC.jsx)(xC.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (CC, zC) => {
                  const ZC = parseInt(CC) || 3600;
                  MC(ZC)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: NC.toString()
              })]
            }), (0, WC.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, WC.jsxs)(qC.g, {
                onClick: () => {
                  GC("screenshot")
                },
                disabled: nC,
                children: [nC && (0, WC.jsx)(JC.d, {}), "Download Screenshot"]
              }), (0, WC.jsxs)(qC.g, {
                onClick: () => {
                  GC("glb")
                },
                disabled: wC,
                children: [wC && (0, WC.jsx)(JC.d, {}), "Download GLB"]
              })]
            })]
          }), (0, WC.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var hC = ZC(113),
      KC = ZC(1078),
      YC = ZC(34053),
      dC = ZC(2999),
      mC = ZC(1453),
      HC = ZC(1211),
      EC = ZC(1178),
      lC = ZC(3075),
      XC = ZC(1939),
      cC = ZC(1439),
      uC = ZC(326),
      rC = ZC(2206),
      sC = ZC(2218),
      TC = ZC(2685),
      aC = ZC(1559),
      tC = ZC(3047),
      DC = ZC(3023),
      jC = ZC(3084),
      yC = ZC(191);

    function LC(CC) {
      const {
        t: zC,
        selectedLanguage: ZC
      } = (0, nC.y)(), {
        userContext: wC
      } = (0, gC.e)(), {
        superRankInfo: bC
      } = wC, fC = CC && ((0, uC.mc)(bC) || wC.ranksMayChange) && (0, sC.purchasesAllowed)(), {
        accountId: oC,
        data: qC
      } = (0, TC.j)(tC.d, fC);
      if ((0, QC.useEffect)((() => {
          if (fC) return tC.d.watchAccount(), aC.d.addRefetchListener("billing", (CC => {
            "reconnected" === CC ? tC.d.refreshAfterReconnect() : tC.d.refresh()
          }))
        }), [fC]), !fC || !(0, uC.mc)(bC) || null === qC || oC !== wC.whamm) return null;
      const FC = function(CC, zC, ZC) {
        const QC = jC.k[(0, jC.d)(jC.k, zC)],
          wC = void 0 === QC ? void 0 : (0, yC.d)(CC.entitlements, QC.entitlementId);
        return void 0 === wC || null === wC.expiresAt || (0, DC.h)(wC) <= ZC ? null : wC.willRenew && null === wC.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(wC.expiresAt, ZC)
        } : {
          renews: !1,
          at: (0, DC.h)(wC)
        }
      }(qC, bC.tier, Date.now());
      if (null === FC) return null;
      const WC = FC.renews ? "store:renewsOn" : "store:endsOn";
      return zC(WC, {
        date: new Date(FC.at).toLocaleDateString((0, nC.m)(ZC.code, WC), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var UC = ZC(1321),
      BC = ZC(1160),
      OC = ZC(4819),
      kC = ZC(1418),
      VC = ZC(3590),
      Cz = ZC(2179);

    function zz(CC) {
      let {
        showing: zC
      } = CC;
      const {
        t: ZC
      } = (0, nC.y)(), {
        data: QC,
        failed: wC
      } = (0, TC.j)(VC.c, zC);
      return 0 === (null === QC || void 0 === QC ? void 0 : QC.length) || null === QC && !wC ? null : (0, WC.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, WC.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZC("paymentHistory:title")
        }), null === QC && wC && (0, WC.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ZC("paymentHistory:loadFailed")
        }), null !== QC && (0, WC.jsx)("ul", {
          className: "PaymentHistoryList",
          children: QC.map((CC => (0, WC.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, WC.jsx)(Cz.e, {
              entry: CC
            }), (0, WC.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, WC.jsx)("div", {
                children: (0, Cz.j)(ZC, CC)
              }), (0, WC.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(CC.at).toLocaleDateString(), "number" === typeof CC.orderId && ` \xb7 ${ZC("paymentHistory:order",{orderId:CC.orderId})}`]
              })]
            })]
          }, (0, VC.b)(CC))))
        })]
      })
    }
    var Zz = ZC(1804),
      Qz = ZC(1187),
      wz = ZC(1307),
      bz = ZC(1724),
      nz = ZC(1149),
      fz = ZC(1263),
      oz = ZC(3016);
    async function qz() {
      try {
        return function(CC) {
          const zC = new Map;
          for (const {
              store: ZC,
              status: QC,
              autoRenewStatus: wC,
              managementUrl: bC
            }
            of Object.values(CC.subscriptions)) !(0, DC.k)(ZC) || (0, DC.o)(QC) || "willNotRenew" === wC || zC.has(ZC) || zC.set(ZC, null !== bC && void 0 !== bC ? bC : DC.r[ZC]);
          return Array.from(zC, (CC => {
            let [zC, ZC] = CC;
            return {
              store: zC,
              managementUrl: ZC
            }
          }))
        }(await (0, bz.n)((0, oz.g)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (CC) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", CC), null
      }
    }
    var Fz = ZC(310),
      Wz = ZC(2448);
    const Nz = {
      appStore: {
        name: "App Store",
        ...Fz.Vb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Fz.Vb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Fz.Vb.discord
      }
    };

    function Mz(CC) {
      let {
        warning: zC,
        subscriptions: ZC
      } = CC;
      const {
        t: QC
      } = (0, nC.y)();
      return null !== ZC && 0 === ZC.length ? (0, WC.jsx)(WC.Fragment, {
        children: QC(zC)
      }) : (0, WC.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [QC(zC), null === ZC && (0, WC.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: QC("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== ZC && (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: QC("auth:deleteAccountStoreSubscriptions")
          }), (0, WC.jsx)(Wz.d, {
            className: "DeleteAccountSubtitleLinks",
            links: ZC.map((CC => {
              let {
                store: zC,
                managementUrl: ZC
              } = CC;
              return {
                ...Nz[zC],
                url: ZC
              }
            }))
          })]
        })]
      })
    }

    function gz(CC) {
      let {
        showing: zC
      } = CC;
      const {
        userContext: ZC,
        isUserContextUpdating: wC
      } = (0, gC.e)(), {
        t: bC
      } = (0, nC.y)(), [fC, oC] = (0, QC.useState)(!1), [FC, NC] = (0, QC.useState)(null), MC = (0, QC.useRef)(zC);
      (0, QC.useEffect)((() => (MC.current = zC, () => {
        MC.current = !1
      })), [zC]);
      const SC = wC || fC;
      return (0, WC.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, WC.jsxs)(qC.I, {
          onClick: async function() {
            if (!fC) {
              oC(!0);
              try {
                const CC = await async function() {
                  const [CC, zC] = await Promise.all([(0, Zz.b)(ZC.availableUserContextTypes) ? qz() : [], pz(ZC)]);
                  if (!MC.current) return Qz.e.ok();
                  const QC = (0, HC.b)(ZC.getPlayerName(), !PC.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await wz.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: QC
                        }
                      },
                      subtitle: (0, WC.jsx)(Mz, {
                        warning: Sz(ZC.isLoggedIn(), zC),
                        subscriptions: CC
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: zC ? bC("auth:deleteAccountTypedConfirm", {
                        playerName: QC
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Qz.e.ok();
                  const wC = await (0, KC.postJsonWithMetricsCookiesAndJsonResponse)(`${nz.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: iC.b.get("gameState")
                  }, {
                    retries: 3
                  }, ZC.getMetricsCookies());
                  if (wC.error) return Qz.e.error(wC.error);
                  (0, hC.e)() && (await fz.h.discordActivity()).exit("User deleted their account");
                  return (0, KC.forgetStoredGuestAccount)(ZC.whamm), (0, KC.forceGlobalSignOut)(!0), Qz.e.ok()
                }(), zC = CC.isError() ? CC.asError().message : null;
                NC(zC)
              } catch (CC) {
                console.error("Failed to delete account:", CC), NC(bC("auth:genericDeleteAccountError"))
              }
              oC(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: SC,
          children: [SC && (0, WC.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, WC.jsx)(JC.d, {})
          }), bC("auth:deleteAccount")]
        }), FC && (0, WC.jsx)("div", {
          className: "DeleteAccountError",
          children: FC
        })]
      })
    }

    function Sz(CC, zC) {
      return (0, hC.e)() ? "auth:discordActivityDeleteAccountLossWarning" : CC ? "auth:deleteAccountLossWarning" : zC ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function pz(CC) {
      try {
        const {
          accountCreatedAt: zC
        } = await (0, bz.n)(cC.d.getPlayerProfile(CC, {
          lowerCaseName: CC.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== zC && Date.now() - zC >= 7 * uC.e
      } catch (zC) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", zC), !0
      }
    }
    var Pz = ZC(3535),
      Gz = ZC(3544),
      Rz = ZC(3540);

    function Az(CC) {
      let {
        showing: zC
      } = CC;
      const {
        t: ZC
      } = (0, nC.y)(), {
        data: QC,
        failed: wC
      } = (0, TC.j)(Pz.b, zC), bC = null === QC ? null : (0, Pz.c)(QC);
      return (0, WC.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, WC.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZC("settingsMenu:blockedAndIgnoredPlayers")
        }), null === bC && !wC && (0, WC.jsx)(JC.d, {}), null === bC && wC && (0, WC.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ZC("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, WC.jsx)(qC.g, {
            className: "SmallTextLight",
            onClick: () => {
              Pz.b.refresh()
            },
            children: ZC("general:tryAgain")
          })]
        }), 0 === (null === bC || void 0 === bC ? void 0 : bC.length) && (0, WC.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ZC("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== bC && bC.length > 0 && (0, WC.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: bC.map((CC => {
            let {
              name: zC,
              exclusion: QC
            } = CC;
            const wC = Rz.d[QC];
            return (0, WC.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, WC.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: zC
              }), (0, WC.jsx)(qC.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Gz.g)(wC, zC, {
                    chatMessage: null
                  })
                },
                children: ZC(Rz.e[wC].text)
              })]
            }, zC)
          }))
        })]
      })
    }
    const xz = (0, QC.memo)((function(CC) {
      var zC;
      let {
        showing: ZC,
        inGame: wC
      } = CC;
      const {
        t: oC,
        selectedLanguage: FC
      } = (0, nC.y)(), {
        hideSocialLocationFrom: NC
      } = (0, iC.k)(["hideSocialLocationFrom"]), SC = (0, MC.b)(), {
        userContext: pC,
        isUserContextUpdating: GC
      } = (0, gC.e)(), [RC, AC] = (0, QC.useState)(null !== (zC = pC.getPlayerName()) && void 0 !== zC ? zC : ""), [vC, eC] = (0, QC.useState)(null), {
        purchasing: TC,
        outcome: aC,
        purchase: tC
      } = (0, dC.b)("/super-rank-welcome"), DC = (0, uC.Wb)((0, nC.m)(FC.code, "general:timeLeft"), pC.superRankInfo), jC = LC(ZC), yC = DC ? oC("general:timeLeft", {
        time: DC
      }) : jC, [VC, Cz] = (0, QC.useState)(!1), [Zz, Qz] = (0, QC.useState)(!1), wz = (0, QC.useRef)(null), bz = (0, QC.useRef)(null), nz = (0, XC.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), fz = null === nz, oz = null !== nz && void 0 !== nz ? nz : [], qz = pC !== KC.NULL_USER_CONTEXT && !pC.isLoggedIn(), Fz = qz && 0 !== (null === nz || void 0 === nz ? void 0 : nz.length), [Wz, Nz] = (0, QC.useState)([]), [Mz, Sz] = (0, QC.useState)(!1), pz = pC.playerHasRank("youtuber"), Pz = (0, QC.useCallback)((() => cC.d.getPlayerProfile(pC, {
        lowerCaseName: pC.getPlayerName().toLowerCase()
      }).then((CC => {
        Nz(CC.socialLinks)
      })).catch((CC => {
        console.error("Failed to refresh social links", CC)
      }))), [pC]);

      function Gz(CC) {
        CC !== RC && ((0, HC.p)(CC) ? (CC = (0, HC.q)(CC), eC(oC("homePage:nameCharacters"))) : eC(null), wz.current && (wz.current.value = CC), AC(CC))
      }
      return (0, QC.useEffect)((() => (!0 === ZC ? (clearInterval(bz.current), bz.current = setInterval(SC, 1e3)) : clearInterval(bz.current), () => {
        clearInterval(bz.current)
      })), [ZC, SC]), (0, QC.useEffect)((() => {
        var CC;
        AC(null !== (CC = pC.getPlayerName()) && void 0 !== CC ? CC : "")
      }), [pC]), (0, QC.useEffect)((() => {
        if (!ZC || !pz || GC) return;
        let CC = !1;
        return Sz(!0), Nz([]), cC.d.getPlayerProfile(pC, {
          lowerCaseName: pC.getPlayerName().toLowerCase()
        }).then((zC => {
          CC || Nz(zC.socialLinks)
        })).catch((CC => {
          console.error("Failed to load social links", CC)
        })).finally((() => {
          CC || Sz(!1)
        })), () => {
          CC = !0
        }
      }), [ZC, pz, GC, pC]), (0, WC.jsxs)("div", {
        className: bC()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: wC
        }),
        children: [wC && (0, WC.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: oC("settingsMenu:accountSettingsInGameWarning")
        }), (0, WC.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, WC.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [oC("homePage:discordNamePopupTitle"), (0, WC.jsxs)(mC.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, EC.g)({
                name: pC.getPlayerName()
              }),
              onClick: () => {
                iC.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, WC.jsx)(fC.c, {
                name: "arrow-up-right-from-square"
              }), " ", oC("profileCard:viewProfile")]
            })]
          }), (0, WC.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, WC.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [PC.featureFlags.canChangeName && (0, WC.jsx)(xC.c, {
                className: "EnterName",
                placeholderText: oC("homePage:enterName"),
                maxLength: HC.i,
                defaultValue: RC,
                onValueChange: CC => {
                  Gz(CC)
                },
                forcedText: VC || !PC.featureFlags.canChangeName ? RC : null,
                blurOnEnter: !0,
                domRef: wz
              }), (0, WC.jsx)(qC.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Gz((0, HC.e)())
                },
                children: (0, WC.jsx)(fC.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !PC.featureFlags.canChangeName && (0, WC.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, HC.b)(RC, !PC.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, WC.jsx)(qC.g, {
              className: "ChooseNameButton",
              disabled: VC || RC === pC.getPlayerName(),
              onClick: () => {
                RC.length < HC.l ? eC(oC("homePage:changeNameMinLengthError", {
                  length: HC.l
                })) : RC.length > HC.i ? eC(oC("homePage:changeNameMaxLengthError", {
                  length: HC.i
                })) : (Cz(!0), eC(null), (0, YC.h)(pC, RC).then((CC => {
                  Cz(!1), "taken" === CC.outcome ? eC(oC("homePage:nameTaken")) : "refused" === CC.outcome ? eC(CC.message) : "failed" === CC.outcome && eC(oC((0, YC.e)(CC.failure)))
                })))
              },
              children: oC("general:choose")
            })]
          }), vC && (0, WC.jsx)("div", {
            className: "ChooseAccNameError",
            children: vC
          })]
        }), (0, WC.jsx)(IC.b, {
          label: (() => {
            if ((0, BC.l)(NC)) {
              const CC = (0, nC.m)(FC.code, "general:timeLeft"),
                zC = (0, uC.U)(CC, Date.now(), NC + BC.j);
              return `${oC("settingsMenu:hideSocialLocation")} (${oC("general:timeLeft",{time:zC})})`
            }
            return oC("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const CC = !(0, BC.l)(NC);
            (0, kC.reportAnalyticsClick)({
              id: "social.hide_location",
              value: CC ? "on" : "off"
            }), Qz(!0), cC.d.setHideSocialLocation(pC, CC).then((() => {
              iC.b.set({
                hideSocialLocationFrom: CC ? Date.now() : null
              })
            })).finally((() => {
              Qz(!1)
            }))
          },
          checked: (0, BC.l)(NC),
          disabled: Zz
        }), pz && (0, WC.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, WC.jsx)("div", {
            className: "AccountSettingsLabel",
            children: oC("settingsMenu:socialLinks")
          }), Mz && (0, WC.jsx)(JC.d, {}), !Mz && (0, WC.jsx)(OC.b, {
            socialLinks: Wz,
            editable: !0,
            userContext: pC,
            onLinksUpdated: Pz
          })]
        }), (0, WC.jsxs)("div", {
          className: "SettingBox",
          children: [(0, WC.jsx)("div", {
            className: "AccountSettingsLabel",
            children: oC(Fz ? "auth:loginOrSwitchAccount" : "auth:login")
          }), fz && (0, WC.jsx)(JC.d, {}), !fz && 0 === oz.length && (0, WC.jsx)("div", {
            className: "NoLoginOptions",
            children: oC("auth:noLoginOptions")
          }), !fz && oz.length > 0 && "crazygames" !== hC.y && (0, WC.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: oz
          }), !fz && oz.length > 0 && "crazygames" === hC.y && (0, WC.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [oz[0], oz.length > 1 && (0, WC.jsxs)(WC.Fragment, {
              children: [(0, WC.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, WC.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: oC("auth:legacyLoginOptions")
                }), (0, WC.jsx)(UC.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: oC("auth:legacyLoginOptionsInfo")
                })]
              }), (0, WC.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: oz.slice(1)
              })]
            })]
          }), PC.featureFlags.useLogin && (null !== pC.loggedInInfo || pC.isLoggedIn()) && (0, WC.jsxs)(WC.Fragment, {
            children: [(0, WC.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, WC.jsxs)(qC.I, {
              onClick: () => {
                (0, KC.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, WC.jsx)(fC.c, {
                name: "right-from-bracket"
              }), oC("auth:signOut")]
            })]
          })]
        }), !pC.playerHasRank("super") && (0, sC.purchasesAllowed)() && (0, WC.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, WC.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, WC.jsx)(fC.c, {
              name: "bolt"
            }), oC("homePage:superRank")]
          }), (0, WC.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, WC.jsxs)(qC.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rC.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, WC.jsx)(fC.c, {
                name: "bolt"
              }), oC("homePage:getSuperRank")]
            }), (0, WC.jsxs)(qC.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rC.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, WC.jsx)(fC.c, {
                name: "bolt"
              }), oC("homePage:giftSuperRank")]
            })]
          })]
        }), pC.playerHasRank("super") && (0, WC.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, WC.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, WC.jsx)(fC.c, {
              name: "bolt"
            }), oC("homePage:superRank"), yC && (0, WC.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", yC, ")"]
            })]
          }), (0, sC.purchasesAllowed)() && (0, WC.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, uC.mc)(pC.superRankInfo) && (0, WC.jsxs)(qC.o, {
              className: "AccountSettingsSuperRankProlong",
              loading: TC,
              onClick: () => {
                tC(lC.g.id, null)
              },
              children: [(0, WC.jsx)(fC.c, {
                name: "bolt"
              }), oC("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: lC.g.product.days,
                price: lC.g.price
              })]
            }), (0, WC.jsxs)(qC.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rC.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, WC.jsx)(fC.c, {
                name: "bolt"
              }), oC("homePage:giftSuperRank")]
            })]
          }), aC && (0, WC.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: oC(aC.translationKey)
          })]
        }), (0, WC.jsx)(zz, {
          showing: ZC
        }), PC.featureFlags.useSocialFeatures && (0, WC.jsx)(Az, {
          showing: ZC
        }), (0, WC.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, WC.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, WC.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: oC(Jz(qz, Fz))
            }), (0, hC.e)() && (0, WC.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: oC("auth:discordActivityKickWarning")
            }), (0, WC.jsx)(gz, {
              showing: ZC
            })]
          }), (0, WC.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: oC(qz ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Jz(CC, zC) {
      return CC ? zC ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Iz = ZC(34056),
      iz = ZC(3113),
      vz = ZC(1192),
      ez = ZC(1375),
      hz = ZC(1877),
      Kz = ZC(8882),
      Yz = ZC(34064);

    function dz() {
      const {
        t: CC
      } = (0, nC.y)();
      return (0, hz.f)("localPlayerAlive") ? (0, WC.jsx)(Kz.b, {
        icon: "camera",
        title: CC("screenshotMode:title"),
        sub: CC("screenshotMode:entrySub"),
        onClick: Yz.c
      }) : null
    }
    var mz = ZC(34069);
    const Hz = (0, QC.memo)((function(CC) {
        let {
          inGame: zC
        } = CC;
        const {
          t: ZC,
          selectedLanguage: QC
        } = (0, nC.y)(), {
          clientEscMenuOptions: wC,
          showDebugOverlay: bC,
          isTouchScreen: fC
        } = (0, iC.k)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), oC = (0, SC.h)("hideCoordinates");
        let qC = "settingsMenu:showCoordinates",
          FC = "settingsMenu:showChunkCoordinates";

        function NC(CC) {
          const zC = new Intl.DisplayNames([CC], {
            type: "language"
          }).of(CC);
          return zC.charAt(0).toUpperCase() + zC.slice(1)
        }
        return oC && (qC = "settingsMenu:showCoordinatesHidden", FC = "settingsMenu:showChunkCoordinatesHidden"), (0, WC.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [zC && PC.featureFlags.canUseInviteLinks && (0, WC.jsxs)("div", {
            className: "SettingBox",
            children: [(0, WC.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ZC("settingsMenu:inviteLink")
            }), (0, WC.jsx)(Iz.c, {})]
          }), (0, WC.jsxs)("div", {
            className: "SettingBox",
            children: [(0, WC.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ZC("settingsMenu:language")
            }), (0, WC.jsx)(iz.b, {
              options: Object.entries(nC.h).map((CC => {
                let [zC, ZC] = CC;
                return {
                  label: (0, WC.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, WC.jsx)("img", {
                      src: ZC.flagImg,
                      alt: "flag"
                    }), (0, WC.jsxs)("span", {
                      children: [NC(zC), " ", (0, WC.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", zC, ")"]
                      })]
                    })]
                  }),
                  value: zC
                }
              })),
              value: QC.code,
              onChange: CC => {
                vz.h.get().setCurrentLanguage(CC.value)
              }
            })]
          }), zC && fC && (0, mz.b)() && (0, WC.jsx)(dz, {}), !(0, PC.isMobileApp)() && (0, ez.l)() && PC.featureFlags.useForceRotateForceFullscreenOverlay && (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:disableFullscreenMode"),
            checked: wC.disableFullscreen,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                disableFullscreen: CC
              })
            }
          }), (0, WC.jsx)(IC.b, {
            label: ZC(qC),
            checked: wC.showCoordinates,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showCoordinates: CC
              })
            },
            disabled: oC
          }), (0, WC.jsx)(IC.b, {
            label: ZC(FC),
            checked: wC.showChunkCoordinates,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showChunkCoordinates: CC
              })
            },
            disabled: oC
          }), (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:showFps"),
            checked: wC.showFPS,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showFPS: CC
              })
            }
          }), (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:disableBunnyHopping"),
            checked: wC.disableBunnyHopping,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                disableBunnyHopping: CC
              })
            }
          }), (0, fz.u)() && (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:showChat"),
            checked: wC.showChat,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showChat: CC
              })
            }
          }), (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:showDebugOverlay"),
            checked: bC,
            onClick: CC => {
              iC.b.set({
                showDebugOverlay: CC
              })
            }
          }), PC.featureFlags.useSocialFeatures && (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:showFriendOnlineToasts"),
            checked: wC.showFriendOnlineToasts,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showFriendOnlineToasts: CC
              })
            }
          }), (0, WC.jsx)(IC.b, {
            label: ZC("settingsMenu:showNewItemIndicator"),
            checked: wC.showNewItemIndicator,
            onClick: CC => {
              iC.b.setClientEscMenuOptions({
                showNewItemIndicator: CC
              })
            }
          })]
        })
      })),
      Ez = (0, QC.memo)((function() {
        const {
          t: CC
        } = (0, nC.y)(), {
          soundVolume: zC,
          musicVolume: ZC
        } = (0, iC.k)(["soundVolume", "musicVolume"]);
        return (0, WC.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, WC.jsx)(IC.f, {
            name: CC("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ZC,
            onChange: CC => {
              iC.b.set({
                musicVolume: Math.round(100 * CC) / 100
              })
            },
            format: CC => CC.toFixed(2)
          }), (0, WC.jsx)(IC.f, {
            name: CC("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: zC,
            onChange: CC => {
              iC.b.set({
                soundVolume: Math.round(100 * CC) / 100
              })
            },
            format: CC => CC.toFixed(2)
          })]
        })
      }));
    var lz = ZC(676),
      Xz = ZC(1383),
      cz = ZC(3600),
      uz = ZC(34072),
      rz = ZC(3452);
    const sz = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Tz() {
      const {
        t: CC
      } = (0, nC.y)(), zC = (0, rz.e)(), {
        mobilePushNotificationsCanAsk: ZC
      } = (0, iC.k)(["mobilePushNotificationsCanAsk"]), [wC, bC] = (0, QC.useState)(null), [fC, oC] = (0, QC.useState)(!1), [FC, NC] = (0, QC.useState)(null), [MC, gC] = (0, QC.useState)(!1), SC = (0, QC.useCallback)((() => {
        (0, cz.b)().then((CC => {
          zC.current && (bC(CC), oC(!1))
        })).catch((CC => {
          console.error("Failed to load push notification targets:", CC), zC.current && oC(!0)
        }))
      }), [zC]), pC = (0, QC.useCallback)((() => {
        (0, uz.e)().then((CC => {
          zC.current && NC((() => CC))
        }))
      }), [zC]);
      (0, QC.useEffect)((() => {
        SC()
      }), [SC]), (0, QC.useEffect)((() => {
        pC()
      }), [pC, ZC]), (0, Xz.c)(cz.f, SC);
      const PC = null === wC ? [] : Object.keys(sz).filter((CC => wC[CC] > 0));
      return (0, WC.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, WC.jsx)("div", {
          className: "SliderText",
          children: CC("notificationSettings:pushNotifications")
        }), null === wC && fC && (0, WC.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: CC("notificationSettings:pushTargetsLoadFailed")
        }), null !== wC && 0 === PC.length && (0, WC.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: CC("notificationSettings:pushTargetsNone")
        }), PC.length > 0 && (0, WC.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: PC.map((zC => {
            var ZC;
            return (0, WC.jsx)("li", {
              children: CC(sz[zC], {
                count: null !== (ZC = null === wC || void 0 === wC ? void 0 : wC[zC]) && void 0 !== ZC ? ZC : 0
              })
            }, zC)
          }))
        }), null !== FC && (0, WC.jsx)(qC.g, {
          className: "PushNotificationSettingsButton",
          loading: MC,
          onClick: () => {
            gC(!0), FC().catch((CC => {
              console.error("Failed to turn on push notifications:", CC)
            })).finally((() => {
              zC.current && (gC(!1), pC())
            }))
          },
          children: CC("notificationSettings:pushTurnOn")
        })]
      })
    }
    var az = ZC(2514);
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
      Dz = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function jz(CC) {
      let {
        setting: zC,
        value: ZC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)(), fC = (0, rz.e)(), [oC, qC] = (0, QC.useState)(null), [FC, NC] = (0, QC.useState)(!1), [MC, gC] = (0, QC.useState)(null);
      return (0, QC.useEffect)((() => {
        "remindersOn" === zC && (0, uz.e)().then((CC => {
          fC.current && gC((() => CC))
        }), (CC => {
          console.error("Couldn't tell whether this device can take push notifications:", CC)
        }))
      }), [zC, fC]), (0, WC.jsx)(IC.b, {
        className: bC()({
          DailyDropSettingFailed: FC
        }),
        label: wC(Dz[zC].label),
        checked: null !== oC && void 0 !== oC ? oC : ZC,
        note: FC ? wC("dailyDrop:settingFailed") : void 0,
        onClick: CC => {
          null === oC && (qC(CC), NC(!1), CC && null !== MC && MC().catch((CC => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", CC)
          })), (0, az.s)("daily_drop.setting", `${Dz[zC].reportAs}_${CC?"on":"off"}`), (0, az.t)("hidden" === zC ? {
            hidden: CC
          } : {
            remindersOn: CC
          }).catch((CC => {
            console.error(`Failed to save the Lucky Skin Block's ${zC} setting:`, CC), fC.current && NC(!0)
          })).finally((() => {
            fC.current && qC(null)
          })))
        }
      })
    }
    const yz = (0, QC.memo)((function() {
      const {
        t: CC
      } = (0, nC.y)(), {
        clientEscMenuOptions: zC
      } = (0, iC.k)(["clientEscMenuOptions"]), {
        userContext: ZC
      } = (0, gC.e)(), QC = ZC.dailyDrop;
      return (0, WC.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [PC.featureFlags.useSocialFeatures && (0, WC.jsx)(IC.e, {
          label: CC("notificationSettings:friendRequests"),
          options: lz.b.map((zC => ({
            value: zC,
            label: CC(tz[zC].label)
          }))),
          value: zC.friendRequestNotifications,
          onChange: CC => {
            iC.b.setClientEscMenuOptions({
              friendRequestNotifications: CC
            })
          },
          circleInfoText: (0, WC.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: lz.b.map((zC => (0, WC.jsxs)("div", {
              children: [(0, WC.jsx)("b", {
                children: CC(tz[zC].label)
              }), ": ", CC(tz[zC].info)]
            }, zC)))
          })
        }), null !== QC && (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsx)(jz, {
            setting: "remindersOn",
            value: QC.remindersOn
          }), (0, WC.jsx)(jz, {
            setting: "hidden",
            value: QC.hidden
          })]
        }), (0, WC.jsx)(Tz, {})]
      })
    }));
    var Lz = ZC(4437),
      Uz = ZC(184),
      Bz = ZC(296),
      Oz = ZC(6660),
      kz = ZC(3432),
      Vz = ZC(34076),
      CZ = ZC(600),
      zZ = ZC(28);
    var ZZ = ZC(615),
      QZ = ZC(38),
      wZ = ZC(4309);
    const bZ = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function nZ(CC) {
      return bZ.has(CC) ? GC.gameBridge.lookup("gR", null) : null
    }

    function fZ(CC) {
      if (!(0, CZ.H)(iC.b.get("clientEscMenuOptions")[CC])) return iC.b.get("clientEscMenuOptions")[CC];
      const zC = nZ(CC);
      return null !== zC ? zC[bZ.get(CC)] : QZ.i.getItem(CC)
    }

    function oZ(CC, zC) {
      if ("useTouchControls" === CC) return void(0, wZ.e)(zC);
      CC in iC.b.get("clientEscMenuOptions") && iC.b.setClientEscMenuOptions({
        [CC]: zC
      });
      const ZC = nZ(CC);
      null !== ZC && GC.gameBridge.send("setChunkAddDistance", {
        ...ZC,
        [bZ.get(CC)]: zC
      }), QZ.i.setItem(CC, zC)
    }
    var qZ = ZC(4346),
      FZ = ZC(34082),
      WZ = ZC(34091),
      NZ = ZC(4428);

    function MZ(CC) {
      var zC, wC, fC, oC;
      let {
        minChunkAddDist: qC,
        getValue: FC,
        onChange: NC,
        setApplySettingsCallback: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), {
        clientEscMenuOptions: pC
      } = (0, iC.k)(["clientEscMenuOptions", "showDistantNametags"]), GC = (0, QC.useRef)(FC("showFog")), RC = (0, QC.useRef)(pC.antiAliasing), AC = (0, QC.useRef)(pC.useWebGpu), [xC, JC] = (0, QC.useState)(null), [eC, hC] = (0, QC.useState)((() => (0, kz.e)(PC.featureFlags.settings.canUseShaderPacks))), [KC] = (0, QC.useState)((() => iC.b.isWebGpuDefaultOff())), [YC] = (0, QC.useState)(Bz.k);
      (0, QC.useEffect)((() => {
        let CC = !1;
        return (0, PC.hasUsableWebGpuAdapter)().then((zC => {
          CC || JC(zC)
        })), (0, kz.g)(PC.featureFlags.settings.canUseShaderPacks) && (0, Oz.e)().then((async zC => {
          const QC = null !== zC && await async function(CC) {
            const [{
              isShaderPackActive: zC
            }, {
              loadPageShaderPackCompiler: QC
            }] = await Promise.all([ZC.e(137).then((() => ZC(6658))), Promise.all([ZC.e(77), ZC.e(133), ZC.e(136)]).then((() => ZC(6609)))]);
            return zC(CC, await QC())
          }(zC);
          CC || hC(QC)
        })), () => {
          CC = !0
        }
      }), []);
      const dC = function(CC, zC, ZC, QC, wC) {
          return (0, Vz.b)(ZC, QC) && !0 === zC ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== zC ? "settingsMenu:newWebGpu" : wC ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: CC && !1 !== zC,
            disabled: !0 !== zC
          }
        }(pC.useWebGpu, xC, eC, KC, YC),
        mC = (pC.useWebGpu || (0, Vz.b)(eC, KC)) && eC && !0 === xC,
        HC = (0, SC.h)("lightingOverride"),
        EC = !(0, CZ.H)(HC);
      let lC = "settingsMenu:enableLighting";
      EC && (lC = HC ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const XC = CC => {
          var zC, ZC, QC;
          const wC = null !== (zC = CC.showFog) && void 0 !== zC ? zC : FC("showFog"),
            bC = null !== (ZC = CC.antiAliasing) && void 0 !== ZC ? ZC : pC.antiAliasing,
            nC = null !== (QC = CC.useWebGpu) && void 0 !== QC ? QC : pC.useWebGpu,
            fC = !ZZ.z && wC !== GC.current || bC !== RC.current || nC !== AC.current;
          MC(fC ? () => IC.h : null)
        },
        cC = (0, SC.h)("fogChunkDistanceOverride"),
        uC = (0, SC.h)("fogBlockDistanceOverride"),
        rC = !(0, CZ.H)(cC) || !(0, CZ.H)(uC),
        sC = rC ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [TC, aC] = (0, Lz.f)(qC),
        [tC, DC] = (0, NZ.k)(qC),
        jC = gC("settingsMenu:chunkLoadDistanceDeviceLimit"),
        yC = tC < TC,
        LC = Math.min(null !== (zC = FC("chunkHorizAddDist")) && void 0 !== zC ? zC : qC[0], tC),
        UC = !rC && function(CC, zC) {
          return !0 === CC.showFog && CC.fogChunkDistance > zC
        }(pC, LC);
      return (0, WC.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, WC.jsx)(IC.f, {
          name: gC("settingsMenu:horizontalChunkLoadDistance"),
          min: qC[0],
          max: TC,
          selectableMax: tC,
          cappedNote: jC,
          step: 1,
          initValue: LC,
          onChange: CC => {
            !0 === FC("showFog") && CC < FC("fogChunkDistance") && NC("fogChunkDistance", CC), NC("chunkHorizAddDist", CC), zZ.o.bp("updatedChunkLoadDist")
          },
          circleInfoText: gC("settingsMenu:chunkLoadDistanceInfo")
        }), (0, WC.jsx)(IC.f, {
          name: gC("settingsMenu:verticalChunkLoadDistance"),
          min: qC[1],
          max: aC,
          selectableMax: DC,
          cappedNote: yC ? void 0 : jC,
          step: 1,
          initValue: Math.min(null !== (wC = FC("chunkVertAddDist")) && void 0 !== wC ? wC : qC[1], DC),
          onChange: CC => {
            NC("chunkVertAddDist", CC), zZ.o.bp("updatedChunkLoadDist")
          },
          circleInfoText: gC("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:chunkFadeIn"),
          checked: pC.chunkFadeIn,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              chunkFadeIn: CC
            })
          },
          circleInfoText: gC("settingsMenu:chunkFadeInInfo")
        }), vC.devTools.supports("chunkBorders") && (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:showChunkBorders"),
          checked: pC.showChunkBorders,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              showChunkBorders: CC
            })
          },
          circleInfoText: gC("settingsMenu:showChunkBordersInfo")
        }), (0, WC.jsx)(IC.b, {
          label: gC(lC),
          checked: pC.enableLighting,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              enableLighting: CC
            })
          },
          disabled: EC
        }), (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, WC.jsx)(IC.b, {
            label: gC(sC),
            checked: pC.showFog,
            onClick: CC => {
              XC({
                showFog: CC
              }), iC.b.setClientEscMenuOptions({
                showFog: CC
              })
            },
            disabled: rC,
            className: bC()({
              SettingBoxWarning: UC
            })
          }), (0, WC.jsx)(IC.f, {
            name: gC("settingsMenu:fogChunkDistance"),
            min: qC[0],
            max: Uz.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (fC = pC.fogChunkDistance) && void 0 !== fC ? fC : qC[0],
            onChange: CC => {
              iC.b.setClientEscMenuOptions({
                fogChunkDistance: CC
              }), zZ.o.bp("fogChunkDistanceChanged", CC)
            },
            circleInfoText: gC("settingsMenu:fogChunkDistanceInfo"),
            disabled: rC || !1 === FC("showFog"),
            className: bC()({
              SettingBoxWarning: UC
            })
          }), UC && (0, WC.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: gC("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !ZZ.z && (0, WC.jsx)(IC.b, {
          label: gC(mC ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !mC && pC.disableTexAtlas,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              disableTexAtlas: CC
            })
          },
          circleInfoText: gC("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: mC
        }), (0, WC.jsx)(IC.f, {
          name: gC("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: pC.cameraFOV,
          onChange: CC => {
            iC.b.setClientEscMenuOptions({
              cameraFOV: CC
            })
          }
        }), (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:disableViewBobbing"),
          checked: pC.disableBobbing,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              disableBobbing: CC
            })
          },
          circleInfoText: gC("settingsMenu:disableViewBobbingInfo")
        }), (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:antiAliasing"),
          checked: pC.antiAliasing,
          onClick: CC => {
            XC({
              antiAliasing: CC
            }), (0, qZ.e)("antiAliasing"), iC.b.setClientEscMenuOptions({
              antiAliasing: CC
            })
          },
          circleInfoText: gC("settingsMenu:antiAliasingInfo")
        }), (0, WC.jsx)(IC.f, {
          name: gC("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (oC = pC.pixelScale) && void 0 !== oC ? oC : 1,
          onChange: CC => {
            (CC !== iC.b.get("clientEscMenuOptions").pixelScale || (0, WZ.p)()) && (0, qZ.e)("pixelScale"), iC.b.setClientEscMenuOptions({
              pixelScale: CC
            })
          },
          circleInfoText: gC("settingsMenu:pixelScaleInfo"),
          format: CC => `${CC}x`
        }), (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:pixelSmoothing"),
          checked: pC.pixelSmoothing,
          onClick: CC => {
            iC.b.setClientEscMenuOptions({
              pixelSmoothing: CC
            })
          },
          circleInfoText: gC("settingsMenu:pixelSmoothingInfo")
        }), ZZ.z && (0, WC.jsx)(IC.b, {
          label: gC("settingsMenu:distantNametags"),
          checked: (0, FZ.c)(),
          onClick: CC => {
            iC.b.set({
              showDistantNametags: CC
            })
          },
          circleInfoText: gC("settingsMenu:distantNametagsInfo")
        }), (0, WC.jsx)(IC.b, {
          label: gC(dC.translationKey),
          checked: dC.checked,
          onClick: CC => {
            XC({
              useWebGpu: CC
            }), iC.b.setClientEscMenuOptions({
              useWebGpu: CC
            })
          },
          circleInfoText: gC("settingsMenu:newWebGpuInfo"),
          disabled: dC.disabled
        })]
      })
    }
    var gZ = ZC(4342),
      SZ = ZC(8859),
      pZ = ZC(34107),
      PZ = ZC(8870),
      GZ = ZC(34116);
    const RZ = {
        color: 16777215,
        name: "white"
      },
      AZ = {
        color: 0,
        name: "black"
      },
      xZ = [RZ, {
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
      }, AZ],
      JZ = [AZ, RZ];

    function IZ(CC) {
      return `${CC} px`
    }

    function iZ(CC) {
      return `${CC}%`
    }

    function vZ(CC) {
      let {
        label: zC,
        value: ZC,
        swatches: QC,
        onChange: wC
      } = CC;
      const {
        t: fC
      } = (0, nC.y)(), oC = !QC.some((CC => CC.color === ZC));
      return (0, WC.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, WC.jsx)("div", {
          className: "SliderText",
          children: zC
        }), (0, WC.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": zC,
          children: [QC.map((CC => {
            let {
              color: zC,
              name: QC
            } = CC;
            return (0, WC.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": zC === ZC,
              "aria-label": fC(`crosshairSettings:color_${QC}`),
              "data-pad-focusable": !0,
              className: bC()("CrosshairSwatch", {
                Selected: zC === ZC
              }),
              style: {
                background: (0, GZ.i)(zC)
              },
              onClick: () => {
                wC(zC)
              }
            }, zC)
          })), (0, WC.jsx)("label", {
            className: bC()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: oC
            }),
            style: oC ? {
              background: (0, GZ.i)(ZC)
            } : void 0,
            title: fC("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, WC.jsx)("input", {
              type: "color",
              "aria-label": fC("crosshairSettings:customColor"),
              value: (0, GZ.i)(ZC),
              onChange: CC => {
                const zC = (0, GZ.n)(CC.target.value);
                null !== zC && wC(zC)
              }
            })
          })]
        })]
      })
    }

    function eZ(CC) {
      let {
        settings: zC,
        onChange: ZC
      } = CC;
      const {
        t: QC
      } = (0, nC.y)(), wC = (CC, QC) => {
        ZC((0, GZ.u)(zC, CC, QC))
      }, bC = function(CC, ZC) {
        let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IZ;
        const {
          min: bC,
          max: nC,
          step: fC
        } = GZ.c[CC];
        return (0, WC.jsx)(IC.f, {
          name: ZC,
          min: bC,
          max: nC,
          step: fC,
          initValue: zC[CC],
          format: QC,
          onChange: zC => {
            wC(CC, zC)
          }
        }, CC)
      }, fC = ["lines", "dot", "circle"].filter((CC => zC[CC])), oC = (CC, ZC, QC) => (0, WC.jsx)(IC.b, {
        label: ZC,
        checked: zC[CC],
        disabled: 1 === fC.length && fC[0] === CC,
        circleInfoText: QC,
        onClick: zC => {
          wC(CC, zC)
        }
      }, CC), qC = "shapes" === zC.style;
      return (0, WC.jsxs)(WC.Fragment, {
        children: [(0, WC.jsx)(IC.e, {
          label: QC("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: QC("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: QC("crosshairSettings:styleShapes")
          }],
          value: zC.style,
          onChange: CC => {
            wC("style", CC)
          }
        }), (0, WC.jsx)(vZ, {
          label: QC("crosshairSettings:color"),
          value: zC.color,
          swatches: xZ,
          onChange: CC => {
            wC("color", CC)
          }
        }), bC("opacity", QC("crosshairSettings:opacity"), iZ), !qC && bC("size", QC("crosshairSettings:size"), iZ), qC && (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oC("lines", QC("crosshairSettings:lines")), zC.lines && bC("lineLength", QC("crosshairSettings:lineLength")), zC.lines && bC("lineThickness", QC("crosshairSettings:lineThickness")), zC.lines && bC("gap", QC("crosshairSettings:gap")), zC.lines && oC("tStyle", QC("crosshairSettings:tStyle"))]
        }), qC && (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oC("dot", QC("crosshairSettings:dot")), zC.dot && bC("dotSize", QC("crosshairSettings:dotSize"))]
        }), qC && (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oC("circle", QC("crosshairSettings:circle")), zC.circle && bC("circleRadius", QC("crosshairSettings:circleRadius")), zC.circle && bC("circleThickness", QC("crosshairSettings:circleThickness"))]
        }), (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [bC("outline", QC("crosshairSettings:outline"), (CC => CC > 0 ? IZ(CC) : QC("crosshairSettings:off"))), zC.outline > 0 && (0, WC.jsx)(vZ, {
            label: QC("crosshairSettings:outlineColor"),
            value: zC.outlineColor,
            swatches: JZ,
            onChange: CC => {
              wC("outlineColor", CC)
            }
          })]
        }), oC("growOnClick", QC("crosshairSettings:growOnClick")), qC && oC("forGuns", QC("crosshairSettings:forGuns"), QC("crosshairSettings:forGunsInfo"))]
      })
    }
    var hZ = ZC(60),
      KZ = ZC(1228),
      YZ = ZC(12756),
      dZ = ZC(13888),
      mZ = ZC(15367),
      HZ = ZC(15949);
    const EZ = ["sky", "grass", "stone", "sand", "snow", "night"],
      lZ = "4rem";

    function XZ(CC) {
      return {
        backgroundImage: `url(${CC})`,
        backgroundSize: `${lZ} ${lZ}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function cZ(CC) {
      return {
        ...(() => {
          switch (CC) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return XZ(YZ);
            case "stone":
              return XZ(dZ);
            case "sand":
              return XZ(mZ);
            case "snow":
              return XZ(HZ);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function uZ(CC) {
      return Object.freeze({
        ...GZ.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...CC
      })
    }
    const rZ = [{
        id: "default",
        settings: GZ.f
      }, {
        id: "cross",
        settings: uZ({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: uZ({
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
        settings: uZ({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: uZ({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: uZ({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: uZ({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: uZ({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      sZ = ["growOnClick", "forGuns"];
    var TZ = ZC(34118);

    function aZ(CC) {
      let {
        label: zC,
        selected: ZC,
        onClick: QC,
        className: wC,
        style: nC,
        children: fC
      } = CC;
      return (0, WC.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": ZC,
        title: zC,
        "aria-label": zC,
        "data-pad-focusable": !0,
        className: bC()("CrosshairBackdropSwatch", wC, {
          Selected: ZC
        }),
        style: nC,
        onClick: QC,
        children: fC
      })
    }

    function tZ(CC) {
      let {
        backdrop: zC,
        onChange: ZC,
        game: QC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)();
      return (0, WC.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": wC("crosshairSettings:background"),
        children: [QC && (0, WC.jsx)(aZ, {
          label: wC("crosshairSettings:bg_game"),
          selected: QC.selected,
          onClick: QC.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, WC.jsx)(fC.c, {
            name: "cube"
          })
        }), EZ.map((CC => (0, WC.jsx)(aZ, {
          label: wC(`crosshairSettings:bg_${CC}`),
          selected: !(null !== QC && void 0 !== QC && QC.selected) && CC === zC,
          style: cZ(CC),
          onClick: () => {
            ZC(CC)
          }
        }, CC)))]
      })
    }

    function DZ(CC) {
      let {
        settings: zC,
        touch: ZC,
        backdrop: QC,
        onChange: wC
      } = CC;
      const {
        t: fC
      } = (0, nC.y)(), oC = function(CC) {
        var zC;
        return null !== (zC = rZ.find((zC => (0, GZ.q)(zC.settings, CC, sZ)))) && void 0 !== zC ? zC : null
      }(zC);
      return (0, WC.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": fC("crosshairSettings:presets"),
        children: rZ.map((CC => {
          const nC = (null === oC || void 0 === oC ? void 0 : oC.id) === CC.id;
          return (0, WC.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": nC,
            "data-pad-focusable": !0,
            className: bC()("CrosshairPreset", {
              Selected: nC
            }),
            onClick: () => {
              wC(function(CC, zC) {
                return {
                  ...zC.settings,
                  growOnClick: CC.growOnClick,
                  forGuns: CC.forGuns
                }
              }(zC, CC))
            },
            children: [(0, WC.jsx)("div", {
              className: "CrosshairPresetStage",
              style: cZ(QC),
              children: (0, WC.jsx)(TZ.d, {
                settings: CC.settings,
                touch: ZC,
                inPreview: !0
              })
            }), (0, WC.jsx)("div", {
              className: "CrosshairPresetName",
              children: fC(`crosshairSettings:preset_${CC.id}`)
            })]
          }, CC.id)
        }))
      })
    }
    var jZ = ZC(1587);

    function yZ(CC, zC) {
      const [ZC, wC] = (0, QC.useState)(!1), bC = () => {
        wC(!1)
      }, [nC, fC] = (0, QC.useState)(!1), oC = (0, QC.useRef)({
        growOnClick: CC.growOnClick,
        forGuns: CC.forGuns
      });
      (0, QC.useEffect)((() => {
        const zC = oC.current;
        oC.current = {
          growOnClick: CC.growOnClick,
          forGuns: CC.forGuns
        }, (CC.growOnClick && !zC.growOnClick || CC.forGuns && !zC.forGuns) && fC(!0)
      }), [CC.growOnClick, CC.forGuns]), (0, QC.useEffect)((() => {
        if (!nC) return;
        const CC = setTimeout((() => {
          fC(!1)
        }), 600);
        return () => {
          clearTimeout(CC)
        }
      }), [nC]);
      const qC = ZC || nC;
      return {
        view: {
          pressed: qC,
          spread: qC && CC.forGuns && !CC.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: CC => {
            !CC.target.closest(zC) && (0, jZ.d)(CC.currentTarget, CC.pointerId) && wC(!0)
          },
          onPointerUp: bC,
          onPointerCancel: bC,
          onLostPointerCapture: bC
        }
      }
    }

    function LZ(CC) {
      let {
        settings: zC,
        touch: ZC,
        backdrop: QC,
        className: wC,
        children: nC,
        label: fC
      } = CC;
      const oC = yZ(zC, ".CrosshairStageControls");
      return (0, WC.jsxs)("div", {
        className: bC()("CrosshairStage", wC),
        style: cZ(QC),
        ...oC.handlers,
        children: [(0, WC.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": fC,
          children: (0, WC.jsx)(TZ.d, {
            settings: zC,
            touch: ZC,
            inPreview: !0,
            ...oC.view
          })
        }), nC]
      })
    }
    const UZ = "crosshairFullScreen";

    function BZ(CC) {
      let {
        settings: zC,
        touch: ZC,
        backdrop: wC,
        onBackdrop: oC,
        inGame: FC,
        onChange: NC,
        onClose: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = (0, QC.useRef)(null);
      (0, KZ.u)("popup", SC, MC),
      function(CC) {
        const zC = (0, QC.useRef)(CC);
        zC.current = CC, (0, QC.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [UZ]: !0
          }, "");
          let CC = !1;
          const ZC = () => {
            CC = !0, zC.current()
          };
          return window.addEventListener("popstate", ZC), () => {
            var zC;
            window.removeEventListener("popstate", ZC), !CC && null !== (zC = window.history.state) && void 0 !== zC && zC[UZ] && window.history.back()
          }
        }), [])
      }(MC);
      const pC = (0, QC.useRef)(MC);
      pC.current = MC, (0, QC.useEffect)((() => {
        function CC(CC) {
          "Escape" === CC.key && (CC.stopPropagation(), pC.current())
        }
        return window.addEventListener("keydown", CC, !0), () => {
          window.removeEventListener("keydown", CC, !0)
        }
      }), []);
      const PC = yZ(zC, ".CrosshairFullScreenPanel"),
        [GC, RC] = (0, QC.useState)(!0),
        AC = GC && FC;
      (0, QC.useEffect)((() => {
        if (AC) return iC.b.set({
          crosshairGameView: !0
        }), () => {
          iC.b.set({
            crosshairGameView: !1
          })
        }
      }), [AC]);
      const [xC, JC] = (0, QC.useState)(!0);
      return (0, hZ.createPortal)((0, WC.jsxs)("div", {
        ref: SC,
        className: "CrosshairFullScreen",
        style: AC ? void 0 : cZ(wC),
        ...PC.handlers,
        children: [(0, WC.jsx)(TZ.d, {
          settings: zC,
          touch: ZC,
          inEditor: !0,
          ...PC.view
        }), (0, WC.jsxs)("div", {
          className: bC()("CrosshairFullScreenPanel", {
            Collapsed: !xC
          }),
          children: [(0, WC.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, WC.jsx)(tZ, {
              backdrop: wC,
              onChange: CC => {
                RC(!1), oC(CC)
              },
              game: FC ? {
                selected: AC,
                onSelect: () => {
                  RC(!0)
                }
              } : void 0
            }), (0, WC.jsx)(qC.O, {
              className: "CrosshairPanelToggle",
              ariaLabel: gC(xC ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                JC(!xC)
              },
              children: (0, WC.jsx)(fC.c, {
                name: xC ? "caret-up" : "pen"
              })
            }), (0, WC.jsx)(qC.g, {
              className: "CrosshairFullScreenDone",
              onClick: MC,
              padDefaultFocus: !0,
              children: gC("crosshairSettings:done")
            })]
          }), xC && (0, WC.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, WC.jsx)(DZ, {
              settings: zC,
              touch: ZC,
              backdrop: wC,
              onChange: NC
            }), (0, WC.jsx)(eZ, {
              settings: zC,
              onChange: NC
            })]
          })]
        })]
      }), document.body)
    }
    var OZ = ZC(2659),
      kZ = ZC(34134);

    function VZ(CC) {
      let {
        settings: zC,
        onChange: ZC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)(), oC = (0, kZ.g)(zC), [FC, NC] = (0, OZ.i)(), [MC, gC] = (0, QC.useState)(!1), SC = (0, QC.useRef)(null), [pC, PC] = (0, OZ.i)(), [GC, RC] = (0, QC.useState)(!1);
      return (0, WC.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, WC.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, WC.jsxs)(qC.O, {
            className: bC()("CrosshairCopy", {
              ActiveSecondaryButton: FC
            }),
            onClick: () => {
              (0, OZ.f)(oC, {
                useShareSheet: !1,
                onOutcome: CC => {
                  gC("failed" === CC), "copied" === CC && NC()
                }
              })
            },
            children: [(0, WC.jsx)(fC.c, {
              name: FC ? "check" : "copy"
            }), " ", wC(FC ? "general:copied" : "crosshairSettings:copy")]
          }), (0, WC.jsx)(xC.c, {
            className: "CrosshairPaste",
            domRef: SC,
            ariaLabel: wC("crosshairSettings:paste"),
            placeholderText: wC("crosshairSettings:paste"),
            onValueChange: CC => {
              const zC = (0, kZ.c)(CC);
              RC(!zC && CC.trim().length >= kZ.b), zC && (ZC(zC), SC.current.value = "", PC())
            }
          })]
        }), MC && (0, WC.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: oC,
          "aria-label": wC("crosshairSettings:copy"),
          onFocus: CC => {
            CC.currentTarget.select()
          }
        }), (0, WC.jsxs)("div", {
          "aria-live": "polite",
          children: [GC && (0, WC.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: wC("crosshairSettings:pasteInvalid")
          }), pC && !GC && (0, WC.jsx)("div", {
            className: "CrosshairShareNote",
            children: wC("crosshairSettings:applied")
          })]
        })]
      })
    }
    var CQ = ZC(34141);
    let zQ = "sky";

    function ZQ(CC) {
      let {
        showing: zC
      } = CC;
      const {
        t: ZC
      } = (0, nC.y)(), {
        isTouchScreen: wC,
        gameState: bC,
        clientEscMenuOptions: oC
      } = (0, iC.k)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), FC = (0, CQ.f)(), [NC, MC] = (0, QC.useState)(zQ), gC = CC => {
        zQ = CC, MC(CC)
      }, [SC, pC] = (0, QC.useState)(!1);
      return (0, QC.useEffect)((() => {
        zC || pC(!1)
      }), [zC]), (0, WC.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, WC.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, WC.jsx)(LZ, {
            className: "CrosshairPreviewStage",
            settings: FC,
            touch: wC,
            backdrop: NC,
            label: ZC("crosshairSettings:preview"),
            children: (0, WC.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, WC.jsx)(tZ, {
                backdrop: NC,
                onChange: gC
              }), (0, WC.jsxs)(qC.O, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  pC(!0)
                },
                children: [(0, WC.jsx)(fC.c, {
                  name: "expand"
                }), " ", ZC("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, WC.jsx)("div", {
          className: "SettingBox",
          children: (0, WC.jsx)(DZ, {
            settings: FC,
            touch: wC,
            backdrop: NC,
            onChange: CQ.d
          })
        }), (0, WC.jsx)(VZ, {
          settings: FC,
          onChange: CQ.d
        }), wC && (0, WC.jsx)(PZ.d, {
          note: (0, pZ.h)(wC, oC.touchActionButtons) ? ZC("crosshairSettings:touchNote") : void 0
        }), (0, WC.jsx)(eZ, {
          settings: FC,
          onChange: CQ.d
        }), SC && (0, WC.jsx)(BZ, {
          settings: FC,
          touch: wC,
          backdrop: NC,
          onBackdrop: gC,
          inGame: "inGame" === bC,
          onChange: CQ.d,
          onClose: () => {
            pC(!1)
          }
        })]
      })
    }
    var QQ = ZC(8862),
      wQ = ZC(1350),
      bQ = ZC(4933),
      nQ = ZC(34147),
      fQ = ZC(4219),
      oQ = ZC(1884),
      qQ = ZC(685);
    const FQ = (0, QC.memo)((function() {
      const {
        clientEscMenuOptions: CC
      } = (0, iC.k)(["clientEscMenuOptions"]), {
        recording: zC,
        clipping: ZC,
        hasClipBuffer: wC
      } = (0, hz.f)("replayRecorder"), nC = (0, hz.e)("connectedGame", (CC => CC.replay)), fC = (0, fQ.n)(), oC = !1 === (0, SC.h)("canRecordReplays");
      (0, QC.useEffect)((() => {
        GC.gameBridge.send("setRecorderPrefs", {
          clipping: CC.enableClipping,
          clipSeconds: CC.clipDurationSeconds
        })
      }), [CC.enableClipping, CC.clipDurationSeconds]);
      const FC = fC || nC,
        NC = !FC && !oC,
        MC = zC || NC,
        gC = NC,
        pC = gC && ZC && !zC;

      function PC() {
        MC && GC.gameBridge.send("toggleRecording", null)
      }
      return (0, WC.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, WC.jsxs)("div", {
          className: "SettingBox",
          children: [(0, WC.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: zC ? (0, WC.jsxs)(WC.Fragment, {
              children: [(0, WC.jsxs)(qC.I, {
                className: "ReplayViewerCategoryButton",
                onClick: PC,
                disabled: !MC,
                children: [(0, WC.jsx)("span", {
                  children: "Stop Recording"
                }), (0, WC.jsx)(oQ.b, {
                  noaAction: "recordGame"
                })]
              }), (0, WC.jsx)(nQ.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, WC.jsxs)(qC.g, {
              className: "ReplayViewerCategoryButton",
              onClick: PC,
              disabled: !MC,
              children: [(0, WC.jsx)("span", {
                children: "Start Recording"
              }), (0, WC.jsx)(oQ.b, {
                noaAction: "recordGame"
              })]
            })
          }), oC && (0, WC.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), FC && !zC && (0, WC.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, WC.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, WC.jsx)(IC.b, {
            label: "Enable clipping",
            checked: CC.enableClipping,
            disabled: !gC,
            onClick: function(CC) {
              gC && iC.b.setClientEscMenuOptions({
                enableClipping: CC
              })
            },
            className: bC()({
              SettingBoxDisabled: !gC
            })
          }), (0, WC.jsx)(IC.f, {
            name: "Clip duration (seconds)",
            min: qQ.i,
            max: qQ.f,
            step: qQ.b,
            initValue: CC.clipDurationSeconds,
            onChange: function(CC) {
              iC.b.setClientEscMenuOptions({
                clipDurationSeconds: CC
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !gC || !CC.enableClipping
          })]
        }), (0, WC.jsxs)("div", {
          className: "SettingBox",
          children: [(0, WC.jsxs)(qC.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              pC && GC.gameBridge.send("saveClip", null)
            },
            disabled: !pC,
            children: [(0, WC.jsx)("span", {
              children: "Record clip"
            }), (0, WC.jsx)(oQ.b, {
              noaAction: "recordClip"
            })]
          }), CC.enableClipping && !wC && gC && !zC && (0, WC.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), zC && (0, WC.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, WC.jsxs)("div", {
          className: "SettingBox",
          children: [(0, WC.jsxs)(qC.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, fQ.j)(!0), iC.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: fC,
            children: [(0, WC.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, WC.jsx)(oQ.b, {
              noaAction: "replayViewerOpen"
            })]
          }), fC && (0, WC.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, WC.jsxs)("div", {
          className: "SettingBox",
          children: [(0, WC.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, WC.jsx)("iframe", {
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
    var WQ = ZC(1806);
    const NQ = {
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
        icon: () => (0, WC.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, WC.jsx)("path", {
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
      zg: {
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

    function MQ() {
      return Promise.all([ZC.e(77), ZC.e(133), ZC.e(132), ZC.e(129)]).then((() => ZC(40908))).then((CC => ({
        default: CC.ShaderPackCategory
      })), (CC => (console.error("Failed to load the shader pack settings", CC), {
        default: gQ
      })))
    }

    function gQ() {
      const {
        t: CC
      } = (0, nC.y)();
      return (0, WC.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: CC("shaderPack:tabLoadFailed")
      })
    }
    var SQ = ZC(1347);
    const pQ = (0, QC.lazy)((() => ZC.e(273).then((() => ZC(40893))).then((CC => ({
        default: CC.BloxdInformation
      }))))),
      PQ = (0, QC.lazy)(MQ);

    function GQ(CC) {
      return CC ? "general" : "account"
    }
    const RQ = new Map,
      AQ = (0, QC.memo)((function(CC) {
        let {
          show: zC,
          setBeforeResumeCallback: ZC
        } = CC;
        (0, pC.c)();
        const {
          gameState: wC,
          openSettingsCategory: bC
        } = (0, iC.k)(["gameState", "openSettingsCategory"]), {
          userContext: oC
        } = (0, gC.e)(), {
          t: FC
        } = (0, nC.y)(), xC = (0, MC.b)(), JC = (0, SC.h)("minChunkAddDist"), IC = "inGame" === wC, [vC, KC] = (0, QC.useState)(GQ(IC)), [YC, dC] = (0, QC.useState)(null), [mC, HC] = (0, QC.useState)([]), EC = (0, QC.useRef)(function() {
          const CC = new Date,
            zC = 6 * (CC.getMonth() + CC.getDate()) % Fz.v.length;
          return [...Fz.v, ...Fz.v].slice(zC, zC + 6)
        }()), lC = (0, QC.useRef)(null), XC = (0, Xz.f)(wQ.i, (0, wQ.d)()), cC = Object.keys(NQ).filter((CC => {
          switch (CC) {
            case "replayViewer":
              return IC;
            case "developerTools":
              return oC.playerHasRank("developer") || !1;
            case "texturePack":
              return PC.featureFlags.settings.canChangeTexturePack;
            case "zg":
              return PC.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return PC.featureFlags.useSocialFeatures || null !== oC.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== hC.y;
            case "controller":
              return PC.featureFlags.useControllerSupport && (XC || "controller" === vC);
            default:
              return !0
          }
        }));
        (0, Xz.c)("toggleFullCoordinateOverlay", (() => {
          const CC = fZ("showCoordinates") && fZ("showChunkCoordinates") && fZ("showFPS");
          oZ("showCoordinates", !CC), oZ("showChunkCoordinates", !CC), oZ("showFPS", !CC), xC()
        })), (0, Xz.c)("updatedChunkLoadDist", (() => {
          xC()
        })), (0, QC.useEffect)((() => {
          if (dC(null), null === iC.b.get("openSettingsCategory")) {
            const CC = (0, SQ.h)() ? RQ.get(IC) : void 0;
            KC(CC && cC.includes(CC) ? CC : GQ(IC))
          }
        }), [zC]), (0, QC.useEffect)((() => {
          null !== bC && (KC(bC), RQ.set(IC, bC), iC.b.set({
            openSettingsCategory: null
          }))
        }), [bC, IC]), (0, QC.useLayoutEffect)((() => {
          lC.current && (lC.current.scrollTop = 0)
        }), [vC, zC]), (0, QC.useEffect)((() => {
          "updateLog" === vC && (0, AC.e)().then(HC)
        }), [vC]), (0, QC.useEffect)((() => {
          if ((0, CZ.H)(JC)) return;
          const [CC, zC] = (0, gZ.h)(), [ZC, QC] = (0, Lz.f)(JC), wC = (0, WQ.c)(JC[0], CC, ZC), bC = (0, WQ.c)(JC[1], zC, QC);
          GC.gameBridge.send("setChunkAddDistance", {
            horizontal: wC,
            vertical: bC
          })
        }), [JC]);
        const uC = (0, QC.useCallback)((async () => {
          YC && (await YC(), dC(null))
        }), [YC]);

        function rC() {
          iC.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, QC.useEffect)((() => {
          ZC((() => uC))
        }), [uC, ZC]), (0, WC.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: zC ? {} : {
            display: "none"
          },
          children: [(0, WC.jsx)("div", {
            className: "MenuSideBar",
            children: (0, WC.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, WC.jsx)(NC, {
                items: cC.map((CC => {
                  const zC = NQ[CC].icon;
                  return {
                    id: CC,
                    faIcon: "string" === typeof zC ? zC : void 0,
                    iconElement: "string" === typeof zC ? void 0 : (0, WC.jsx)(zC, {}),
                    title: FC(NQ[CC].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: vC,
                onClick: CC => {
                  !async function(CC) {
                    await uC(), KC(CC), RQ.set(IC, CC)
                  }(CC)
                }
              })
            })
          }), (0, WC.jsxs)("div", {
            ref: lC,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === vC && (0, WC.jsx)(xz, {
              showing: zC,
              inGame: IC
            }), "general" === vC && (0, WC.jsx)(Hz, {
              inGame: IC
            }), "audio" === vC && (0, WC.jsx)(Ez, {}), "notifications" === vC && (0, WC.jsx)(yz, {}), "graphics" === vC && (0, WC.jsx)(MZ, {
              minChunkAddDist: null !== JC && void 0 !== JC ? JC : [2, 2],
              getValue: fZ,
              onChange: oZ,
              setApplySettingsCallback: dC
            }), "controls" === vC && (0, WC.jsx)(SZ.e, {}), "crosshair" === vC && (0, WC.jsx)(ZQ, {
              showing: zC
            }), "controller" === vC && PC.featureFlags.useControllerSupport && (0, WC.jsx)(QQ.c, {}), PC.featureFlags.settings.canChangeTexturePack && "texturePack" === vC && (0, WC.jsx)(bQ.e, {
              setApplySettingsCallback: dC
            }), PC.featureFlags.settings.canUseShaderPacks && "zg" === vC && (0, WC.jsx)(QC.Suspense, {
              fallback: null,
              children: (0, WC.jsx)(PQ, {
                setApplySettingsCallback: dC
              })
            }), "updateLog" === vC && (0, WC.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, WC.jsx)("div", {
                className: "UpdateLogsContainer",
                children: mC.map(((CC, zC) => (0, WC.jsx)(RC.c, {
                  updateLog: CC,
                  index: zC,
                  close: rC
                }, zC)))
              })
            }), "information" === vC && (0, WC.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, WC.jsx)(QC.Suspense, {
                fallback: null,
                children: (0, WC.jsx)(pQ, {})
              })
            }), "alternativeDomains" === vC && (0, WC.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, WC.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: FC("settingsMenu:unblockedDomainsDescription")
              }), (0, WC.jsx)("div", {
                className: "AlternativeDomainsList",
                children: EC.current.map((CC => (0, WC.jsxs)(qC.g, {
                  onClick: () => {
                    window.open(`https://${CC}`)
                  },
                  children: [(0, WC.jsx)(fC.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", CC]
                }, CC)))
              })]
            }), "replayViewer" === vC && (0, WC.jsx)(FQ, {}), "developerTools" === vC && (0, WC.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, WC.jsx)(eC, {
                setApplySettingsCallback: dC
              })
            }), null !== YC && (0, WC.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, WC.jsx)(qC.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: uC,
                children: FC("general:apply")
              })
            })]
          })]
        })
      }));
    var xQ = ZC(2604);
    const JQ = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      IQ = (0, QC.lazy)((() => Promise.resolve().then((() => ZC(4591))).then((CC => {
        CC.needGameClientAfterPaint();
        const zC = CC.matchmakingLibrariesPromise.then((CC => (0, xQ.e)(CC.loadCharacterCustomisationUI(), (CC => CC.CharacterCustomisationUI))));
        return Promise.all([CC.ensureGameSetup(), zC]).then((CC => {
          let [, zC] = CC;
          return zC
        }))
      })))),
      iQ = "openCustomisationTab";

    function vQ(CC) {
      var zC, ZC, wC;
      let {
        show: bC
      } = CC;
      const {
        userContext: nC
      } = (0, gC.e)(), fC = (0, QC.useRef)(null);
      var oC, qC;
      nC !== KC.NULL_USER_CONTEXT && (null === (zC = fC.current) || void 0 === zC ? void 0 : zC.whamm) !== nC.whamm && (fC.current = {
        whamm: nC.whamm,
        mountKey: (null !== (oC = null === (qC = fC.current) || void 0 === qC ? void 0 : qC.mountKey) && void 0 !== oC ? oC : -1) + 1
      });
      const [FC, MC] = (0, QC.useState)("characters");
      if ((0, Xz.c)(iQ, MC), !bC) return null;
      const SC = JQ.filter((CC => "cape" !== CC && "nameColour" !== CC || nC.getPlayerRanks().includes("super") || (0, sC.purchasesAllowed)())).map((CC => ({
        id: CC,
        faIcon: Fz.E[CC],
        title: Fz.F[CC],
        redDot: !1
      })));
      return (0, WC.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, WC.jsx)("div", {
          className: "MenuSideBar",
          children: (0, WC.jsx)(NC, {
            items: SC,
            selectedItemId: FC,
            onClick: CC => {
              MC(CC)
            }
          })
        }), (0, WC.jsx)("div", {
          className: "MenuBody",
          children: (0, WC.jsx)(QC.Suspense, {
            fallback: (0, WC.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, WC.jsx)(JC.d, {})
            }),
            children: (0, WC.jsx)(IQ, {
              selectedTab: FC
            }, null !== (ZC = null === (wC = fC.current) || void 0 === wC ? void 0 : wC.mountKey) && void 0 !== ZC ? ZC : 0)
          })
        })]
      })
    }
    var eQ = ZC(1401),
      hQ = ZC(1410),
      KQ = ZC(34153),
      YQ = ZC(4469),
      dQ = ZC(3405),
      mQ = ZC(3441),
      HQ = ZC(34173),
      EQ = ZC(8776),
      lQ = ZC(34158),
      XQ = ZC(34165),
      cQ = ZC(1822),
      uQ = ZC(1811),
      rQ = ZC(4847),
      sQ = ZC(1209),
      TQ = ZC(1169),
      aQ = ZC(1584),
      tQ = ZC(8847),
      DQ = ZC(2385),
      jQ = ZC(2394);

    function yQ(CC) {
      return CC ? Object.keys(CC).sort(((zC, ZC) => {
        var QC, wC, bC, nC;
        const fC = (null !== (QC = null === (wC = CC[ZC]) || void 0 === wC ? void 0 : wC.sortPriority) && void 0 !== QC ? QC : 0) - (null !== (bC = null === (nC = CC[zC]) || void 0 === nC ? void 0 : nC.sortPriority) && void 0 !== bC ? bC : 0);
        return 0 !== fC ? fC : zC.localeCompare(ZC)
      })) : []
    }
    const LQ = [{
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

    function UQ(CC) {
      for (const {
          threshold: zC,
          suffix: ZC
        }
        of LQ)
        if (CC >= zC) {
          const QC = CC / zC;
          return QC >= 100 ? `${Math.floor(QC)}${ZC}` : QC >= 10 ? `${QC.toFixed(1).replace(/\.0$/,"")}${ZC}` : `${QC.toFixed(2).replace(/\.?0+$/,"")}${ZC}`
        } return String(CC)
    }
    var BQ = ZC(4971);
    const OQ = {
        normal: "0.8em",
        big: "1em"
      },
      kQ = (0, QC.memo)((function(CC) {
        let {
          item: zC,
          amount: ZC = 0,
          size: QC = "normal",
          tier: wC = null
        } = CC;
        return (0, WC.jsx)("div", {
          className: bC()("SmpSlot", `SmpSlot-${QC}`),
          children: zC && (0, WC.jsx)(cQ.e, {
            itemName: zC,
            amount: ZC > 1 ? ZC : 0,
            amountFontSize: OQ[QC],
            enchantmentTier: wC
          })
        })
      }));

    function VQ(CC) {
      let {
        amount: zC,
        exact: ZC = !1,
        className: QC
      } = CC;
      return (0, WC.jsxs)("span", {
        className: bC()("SmpGold", QC),
        children: [(0, WC.jsx)("span", {
          className: "SmpCoin",
          children: (0, WC.jsx)(cQ.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), ZC ? zC.toLocaleString("en-US") : UQ(zC)]
      })
    }

    function Cw(CC) {
      let {
        count: zC = 5,
        grid: ZC = !1
      } = CC;
      return (0, WC.jsx)("div", {
        className: ZC ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: zC
        }, ((CC, zC) => (0, WC.jsxs)("div", {
          className: bC()(ZC ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, WC.jsx)("div", {
            className: bC()("SmpSlot", ZC ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, WC.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, WC.jsx)("b", {}), (0, WC.jsx)("small", {})]
          }), (0, WC.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, zC)))
      })
    }

    function zw(CC) {
      let {
        title: zC,
        children: ZC
      } = CC;
      return (0, WC.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, WC.jsx)("b", {
          children: zC
        }), ZC && (0, WC.jsx)("small", {
          children: ZC
        })]
      })
    }

    function Zw(CC) {
      let {
        entry: zC
      } = CC;
      return (0, WC.jsx)(zw, {
        title: (0, WC.jsx)(uQ.e, {
          text: zC.item.customTitle
        }),
        children: (0, WC.jsx)(uQ.e, {
          text: zC.item.description
        })
      })
    }

    function Qw(CC) {
      return (0, WC.jsx)(BQ.b, {
        ...CC,
        className: bC()("SmpChoice", CC.className),
        reselectable: !0
      })
    }

    function ww() {
      return (0, WC.jsx)("span", {
        className: "SmpLoader",
        children: (0, WC.jsx)(JC.d, {})
      })
    }

    function bw(CC) {
      let {
        value: zC,
        onChange: ZC,
        min: wC = 1,
        max: bC,
        step: nC = 1,
        label: fC
      } = CC;
      const oC = (0, QC.useRef)(null),
        qC = (0, QC.useRef)(zC);
      qC.current = zC;
      const [FC, NC] = (0, QC.useState)(null), MC = CC => Math.max(wC, Math.min(bC, Math.floor(CC))), gC = CC => {
        const zC = qC.current,
          QC = "function" === typeof nC ? nC(zC, CC) : nC,
          wC = MC(zC + QC * CC);
        qC.current = wC, ZC(wC)
      };
      (0, QC.useEffect)((() => {
        if (null === FC) return;
        let CC;
        const zC = () => {
            NC(null)
          },
          ZC = setTimeout((() => {
            CC = setInterval((() => {
              gC(FC);
              const CC = qC.current;
              (FC > 0 ? CC >= bC : CC <= wC) && zC()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", zC), window.addEventListener("pointercancel", zC), window.addEventListener("blur", zC), () => {
          clearTimeout(ZC), clearInterval(CC), window.removeEventListener("pointerup", zC), window.removeEventListener("pointercancel", zC), window.removeEventListener("blur", zC)
        }
      }), [FC]), (0, QC.useEffect)((() => {
        const CC = oC.current;
        CC && document.activeElement !== CC && CC.value !== String(zC) && (CC.value = String(zC))
      }), [zC]), (0, QC.useEffect)((() => {
        const CC = oC.current;
        if (!CC) return;
        const zC = () => {
          CC.value = String(qC.current)
        };
        return CC.addEventListener("blur", zC), () => {
          CC.removeEventListener("blur", zC)
        }
      }), []);
      const SC = CC => (0, WC.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${CC>0?"More":"Less"} ${fC}`,
        disabled: CC > 0 ? zC >= bC : zC <= wC,
        onPointerDown: zC => {
          0 === zC.button && (gC(CC), NC(CC))
        },
        onKeyDown: zC => {
          "Enter" !== zC.key && " " !== zC.key || gC(CC)
        },
        onContextMenu: CC => {
          CC.preventDefault()
        },
        children: CC > 0 ? "+" : "\u2212"
      });
      return (0, WC.jsxs)("div", {
        className: "SmpStepper",
        children: [SC(-1), (0, WC.jsx)(xC.c, {
          className: "SmpStepperInput",
          domRef: oC,
          defaultValue: String(zC),
          ariaLabel: fC,
          type: "text",
          blurOnEnter: !0,
          onValueChange: CC => {
            const zC = CC.replace(/[^\d]/g, "");
            oC.current && zC !== CC && (oC.current.value = zC), "" !== zC && ZC(MC(Number(zC)))
          }
        }), SC(1)]
      })
    }

    function nw(CC) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, CC))) - 1))
    }
    var fw = ZC(34171),
      ow = ZC(1183);
    const qw = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    ow.z, uC.sc.length;
    new Map;
    var Fw = ZC(3276);

    function Ww(CC, zC) {
      var ZC;
      return zC && (null === (ZC = CC[zC]) || void 0 === ZC ? void 0 : ZC.smp) || null
    }

    function Nw(CC, zC) {
      const ZC = [];
      for (const wC of yQ(CC)) {
        var QC;
        const bC = CC[wC];
        (null === (QC = bC.smp) || void 0 === QC ? void 0 : QC.kind) === zC && ZC.push({
          key: wC,
          item: bC,
          meta: bC.smp
        })
      }
      return ZC
    }

    function Mw(CC, zC) {
      var ZC;
      return null !== (ZC = Nw(CC, zC)[0]) && void 0 !== ZC ? ZC : null
    }
    const gw = "50% 0% 50% 0%",
      Sw = [{
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

    function pw(CC) {
      const zC = CC - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: ZC,
          suffix: QC
        }
        of Sw)
        if (zC >= ZC) return `${Math.floor(zC/ZC)}${QC}`;
      return "<1s"
    }

    function Pw(CC) {
      const zC = CC.map(EQ.f),
        ZC = [];
      return zC.forEach(((CC, QC) => {
        const wC = function(CC) {
            const zC = CC.match(/\d+/);
            return zC ? Number(zC[0]) : 0
          }(CC),
          bC = QC === zC.length - 1;
        (bC || 1 === wC || 10 === wC || 100 === wC) && ZC.push({
          label: CC,
          quantity: wC,
          isAll: bC
        })
      })), ZC
    }
    let Gw = null;

    function Rw(CC, zC) {
      const ZC = zC.trim().toLowerCase();
      if (!ZC) return [];
      const QC = CC => {
          if (CC === ZC) return 0;
          if (CC.startsWith(ZC)) return 1;
          const zC = CC.indexOf(ZC);
          return -1 === zC ? -1 : 2 + zC
        },
        wC = [];
      for (const fC of CC) {
        const CC = [QC(fC.lowerLabel), QC(fC.lowerName)].filter((CC => -1 !== CC));
        CC.length && wC.push({
          item: fC,
          rank: Math.min(...CC)
        })
      }
      if (wC.length > 0) return wC.sort(((CC, zC) => CC.rank - zC.rank)).map((CC => CC.item));
      const bC = [...ZC],
        nC = CC => {
          let zC = 0;
          for (const ZC of bC) {
            if (zC = CC.indexOf(ZC, zC), -1 === zC) return !1;
            zC++
          }
          return !0
        };
      return CC.filter((CC => nC(CC.lowerLabel) || nC(CC.lowerName)))
    }

    function Aw(CC, zC) {
      var ZC;
      return null !== (ZC = null === CC || void 0 === CC ? void 0 : CC[zC]) && void 0 !== ZC ? ZC : zC
    }

    function xw(CC, zC) {
      const ZC = CC.userInput;
      return void 0 !== zC && "dropdown" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && ZC.dropdownOptions.map(EQ.f).includes(zC) ? zC : function(CC) {
        const zC = CC.userInput;
        if ("dropdown" !== (null === zC || void 0 === zC ? void 0 : zC.type) || 0 === zC.dropdownOptions.length) return null;
        const ZC = zC.dropdownOptions.map(EQ.f);
        return zC.initialValue && ZC.includes(zC.initialValue) ? zC.initialValue : ZC[ZC.length - 1]
      }(CC)
    }

    function Jw(CC) {
      return void 0 === CC ? "" : JSON.stringify(CC)
    }
    const Iw = (0, QC.createContext)(null);

    function iw() {
      return (0, QC.useContext)(Iw)
    }
    var vw = ZC(2691);
    const ew = (0, QC.memo)((function(CC) {
        let {
          name: zC,
          label: ZC,
          onPick: QC
        } = CC;
        return (0, WC.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: ZC,
          onClick: () => {
            QC(zC)
          },
          children: [(0, WC.jsx)(kQ, {
            item: zC,
            size: "big"
          }), (0, WC.jsx)("span", {
            children: ZC
          })]
        })
      })),
      hw = (0, QC.memo)((function(CC) {
        let {
          items: zC,
          query: ZC,
          onPick: wC
        } = CC;
        const {
          t: bC
        } = (0, nC.y)(), [fC, oC] = (0, QC.useState)(new Set), qC = (0, QC.useMemo)((() => function(CC) {
          const zC = new Map;
          for (const ZC of CC) {
            let CC = zC.get(ZC.category);
            CC || (CC = [], zC.set(ZC.category, CC)), CC.push(ZC)
          }
          return [...qw, "other"].filter((CC => zC.has(CC))).map((CC => ({
            category: CC,
            items: zC.get(CC)
          })))
        }(zC)), [zC]), FC = (0, QC.useMemo)((() => Rw(zC, ZC).slice(0, 60)), [zC, ZC]);
        return ZC.trim() ? 0 === FC.length ? (0, WC.jsx)(zw, {
          title: bC("smpShop:noItemsFound", {
            query: ZC.trim()
          }),
          children: bC("smpShop:tryShorterName")
        }) : (0, WC.jsx)(vw.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: gw,
          observerUpdateDeps: [ZC],
          children: FC.map((CC => (0, WC.jsx)(ew, {
            name: CC.name,
            label: CC.label,
            onPick: wC
          }, CC.name)))
        }) : (0, WC.jsx)(WC.Fragment, {
          children: qC.map((CC => {
            let {
              category: zC,
              items: ZC
            } = CC;
            const QC = fC.has(zC) || ZC.length <= 48,
              nC = QC ? ZC : ZC.slice(0, 48);
            return (0, WC.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, WC.jsxs)("h4", {
                children: [bC("other" === zC ? "smpShop:otherItems" : `creativeInventory:${zC}`), !QC && (0, WC.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    oC(new Set([...fC, zC]))
                  },
                  children: bC("smpShop:showAll", {
                    count: ZC.length
                  })
                })]
              }), (0, WC.jsx)(vw.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: gw,
                observerUpdateDeps: [QC],
                children: nC.map((CC => (0, WC.jsx)(ew, {
                  name: CC.name,
                  label: CC.label,
                  onPick: wC
                }, CC.name)))
              })]
            }, zC)
          }))
        })
      }));

    function Kw(CC, zC) {
      const {
        searched: ZC,
        shown: wC,
        searchFor: bC,
        loading: nC
      } = function(CC, zC) {
        var ZC;
        const wC = iw(),
          [bC, nC] = (0, QC.useState)(void 0),
          fC = (0, QC.useRef)(void 0),
          oC = (0, QC.useRef)(0),
          qC = (0, QC.useRef)(void 0),
          FC = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.meta.item) && void 0 !== ZC ? ZC : null,
          WC = !!CC && wC.isPending(CC.key);
        (0, QC.useEffect)((() => {
          if (!CC || WC || !zC || void 0 === bC || bC === FC) return;
          const ZC = bC === fC.current && wC.gaveUpAt(CC.key) > oC.current && qC.current !== bC;
          (bC !== fC.current || ZC) && wC.act(CC.key, null !== bC && void 0 !== bC ? bC : "*", ZC) && (ZC && (qC.current = bC), fC.current = bC, oC.current = Date.now())
        }), [CC, WC, zC, bC, FC, wC]);
        const NC = (0, QC.useCallback)((CC => {
            fC.current = void 0, qC.current = void 0, nC(CC)
          }), []),
          MC = void 0 !== bC && bC !== FC && (WC || fC.current !== bC);
        return {
          searched: FC,
          shown: MC ? bC : FC,
          searchFor: NC,
          loading: MC || WC || null !== FC && !zC
        }
      }(CC, zC), fC = (0, QC.useMemo)((() => function() {
        var CC;
        let zC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wC = `${(0,Fw.d)()}\x1f${zC.join("\x1e")}\x1f${ZC.join("\x1e")}\x1f${JSON.stringify(QC)}`;
        if ((null === (CC = Gw) || void 0 === CC ? void 0 : CC.key) === wC) return Gw.items;
        const bC = new Set(ZC),
          nC = new Set,
          fC = [],
          oC = (CC, zC) => {
            var ZC;
            if (!CC || nC.has(CC) || bC.has(CC)) return;
            nC.add(CC);
            const wC = null !== (ZC = QC[CC]) && void 0 !== ZC ? ZC : CC;
            fC.push({
              name: CC,
              label: wC,
              lowerLabel: wC.toLowerCase(),
              lowerName: CC.toLowerCase(),
              category: zC
            })
          };
        for (const FC of (0, fw.creativeItemIds)()) {
          var qC;
          (0, fw.itemIsDisabled)(FC, !0, !0, !1) || (0, fw.showOnlyInCreativeSearch)(FC) || oC((0, Fw.c)(FC), null !== (qC = (0, fw.creativeCategoryOf)(FC)) && void 0 !== qC ? qC : "other")
        }
        for (const FC of zC) oC(FC, "other");
        return Gw = {
          key: wC,
          items: fC
        }, fC
      }(null === CC || void 0 === CC ? void 0 : CC.meta.extra, null === CC || void 0 === CC ? void 0 : CC.meta.excluded, null === CC || void 0 === CC ? void 0 : CC.meta.names)), [null === CC || void 0 === CC ? void 0 : CC.meta.extra, null === CC || void 0 === CC ? void 0 : CC.meta.excluded, null === CC || void 0 === CC ? void 0 : CC.meta.names]), [oC, qC] = (0, QC.useState)(""), [FC, WC] = (0, QC.useState)(0), [NC, MC] = (0, QC.useState)("recent"), gC = (0, QC.useCallback)((CC => {
        qC(""), WC((CC => CC + 1)), bC(CC)
      }), [bC]), SC = "browse" === NC || "" !== oC.trim();
      return {
        searched: ZC,
        shown: wC,
        searchFor: bC,
        loading: nC,
        catalogue: fC,
        names: null === CC || void 0 === CC ? void 0 : CC.meta.names,
        query: oC,
        setQuery: qC,
        searchBoxKey: FC,
        pickItem: gC,
        setView: MC,
        browsing: SC
      }
    }

    function Yw(CC) {
      let {
        browser: zC,
        children: ZC
      } = CC;
      const {
        t: QC
      } = (0, nC.y)(), wC = iw();
      return (0, WC.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, WC.jsx)("div", {
          className: "SmpSearch",
          children: (0, WC.jsx)(xC.c, {
            className: "SmpSearchInput",
            placeholderText: QC("smpShop:searchPlaceholder"),
            defaultValue: zC.query,
            onValueChange: CC => {
              zC.setQuery(CC), zC.searched && CC.trim() && zC.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const CC = Rw(zC.catalogue, zC.query)[0];
              CC ? zC.pickItem(CC.name) : zC.query.trim() && wC.notify(QC("smpShop:noItemsFound", {
                query: zC.query.trim()
              }))
            }
          }, zC.searchBoxKey)
        }), ZC]
      })
    }

    function dw(CC) {
      let {
        browser: zC,
        recentLabel: ZC,
        children: QC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)();
      return (0, WC.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, WC.jsx)(Qw, {
          options: [{
            value: "recent",
            label: ZC
          }, {
            value: "browse",
            label: wC("smpShop:browseItems")
          }],
          value: zC.browsing ? "browse" : "recent",
          onChange: zC.setView,
          ariaLabel: wC("smpShop:show")
        }), !zC.browsing && QC]
      })
    }

    function mw(CC) {
      let {
        item: zC,
        names: ZC,
        summary: QC,
        onBack: wC,
        children: bC
      } = CC;
      const {
        t: fC
      } = (0, nC.y)();
      return (0, WC.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, WC.jsx)(qC.c, {
          className: "SmpBackButton",
          onClick: wC,
          children: fC("general:back")
        }), (0, WC.jsx)(kQ, {
          item: zC,
          size: "big"
        }), (0, WC.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, WC.jsx)("b", {
            children: Aw(ZC, zC)
          }), QC && (0, WC.jsx)("small", {
            children: QC
          })]
        }), bC]
      })
    }

    function Hw(CC) {
      let {
        browser: zC,
        className: ZC,
        action: QC,
        above: wC,
        list: nC,
        summary: fC,
        recentLabel: oC,
        listControls: qC,
        onBack: FC
      } = CC;
      return (0, WC.jsxs)("div", {
        className: bC()("SmpScreen", ZC),
        children: [(0, WC.jsx)(Yw, {
          browser: zC,
          children: QC
        }), zC.shown && (0, WC.jsx)(mw, {
          item: zC.shown,
          names: zC.names,
          summary: !zC.loading && fC,
          onBack: () => {
            null === FC || void 0 === FC || FC(), zC.searchFor(null)
          },
          children: qC
        }), wC, zC.shown ? nC : (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsx)(dw, {
            browser: zC,
            recentLabel: oC,
            children: qC
          }), zC.browsing ? (0, WC.jsx)(hw, {
            items: zC.catalogue,
            query: zC.query,
            onPick: zC.pickItem
          }) : nC]
        })]
      })
    }

    function Ew(CC, zC) {
      const ZC = CC.map((CC => {
        let {
          meta: zC
        } = CC;
        return zC.pricePerItem
      }));
      return "min" === zC ? Math.min(...ZC) : Math.max(...ZC)
    }
    var lw = ZC(6572);
    const Xw = (0, QC.memo)((function(CC) {
      var zC;
      const {
        t: ZC
      } = (0, nC.y)(), QC = null === CC.seller, wC = CC.quantity * CC.pricePerItem;
      return (0, WC.jsxs)("div", {
        className: CC.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, WC.jsx)(kQ, {
          item: CC.item,
          amount: CC.quantity,
          size: CC.grid ? "big" : "normal",
          tier: CC.tier
        }), (0, WC.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, WC.jsx)("b", {
            children: (0, WC.jsx)(uQ.e, {
              text: null !== (zC = CC.title) && void 0 !== zC ? zC : `${CC.quantity}x ${CC.item}`
            })
          }), (0, WC.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, WC.jsx)("span", {
              children: QC ? ZC("smpShop:you") : (0, WC.jsx)(uQ.e, {
                text: [{
                  entityName: CC.seller
                }]
              })
            }), (0, WC.jsx)("span", {
              children: ZC("smpShop:timeLeft", {
                time: pw(CC.expiresAt)
              })
            })]
          })]
        }), (0, WC.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, WC.jsx)(VQ, {
            amount: CC.pricePerItem
          }), (0, WC.jsx)("small", {
            children: ZC("smpShop:each")
          })]
        }), (0, WC.jsx)(qC.g, {
          className: "SmpBuyButton",
          disabled: QC || !CC.canAfford && !CC.busy,
          loading: CC.busy,
          onClick: () => {
            CC.onBuy(CC.itemKey)
          },
          children: QC ? ZC("smpShop:yours") : (0, WC.jsx)(VQ, {
            amount: wC
          })
        })]
      })
    }));

    function uw(CC) {
      let {
        view: zC,
        onChange: ZC
      } = CC;
      const {
        t: QC
      } = (0, nC.y)();
      return (0, WC.jsx)(BQ.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: QC("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, WC.jsx)(fC.c, {
            name: "list"
          }),
          ariaLabel: QC("smpShop:listView")
        }, {
          value: "grid",
          label: (0, WC.jsx)(fC.c, {
            name: "grid-2"
          }),
          ariaLabel: QC("smpShop:gridView")
        }],
        value: zC,
        onChange: ZC
      })
    }

    function rw(CC) {
      let {
        entries: zC,
        view: ZC
      } = CC;
      const {
        t: QC
      } = (0, nC.y)(), wC = iw(), bC = "grid" === ZC;
      return (0, WC.jsxs)(WC.Fragment, {
        children: [!bC && (0, WC.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, WC.jsx)("span", {}), (0, WC.jsx)("span", {
            children: QC("smpShop:columnItem")
          }), (0, WC.jsx)("span", {
            children: QC("smpShop:columnPriceEach")
          }), (0, WC.jsx)("span", {
            children: QC("smpShop:columnTotal")
          })]
        }), (0, WC.jsx)(vw.e, {
          lazyLoadedClassName: bC ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: gw,
          observerUpdateDeps: [zC.length],
          children: zC.map((CC => {
            var zC, ZC;
            let {
              key: QC,
              item: nC,
              meta: fC
            } = CC;
            const oC = fC.quantity * fC.pricePerItem;
            return (0, WC.jsx)(Xw, {
              itemKey: QC,
              item: fC.item,
              title: nC.customTitle,
              quantity: fC.quantity,
              pricePerItem: fC.pricePerItem,
              seller: fC.seller,
              expiresAt: fC.expiresAt,
              tier: null !== (zC = null === (ZC = nC.enchant) || void 0 === ZC ? void 0 : ZC.tier) && void 0 !== zC ? zC : null,
              busy: wC.isPending(QC) || null !== fC.seller && !1 === nC.canBuy,
              canAfford: wC.canAfford(nC, oC),
              grid: bC,
              onBuy: wC.act
            }, QC)
          }))
        }, ZC)]
      })
    }
    const sw = [1, 10, 100],
      Tw = [1, 10, 100, 999];

    function aw(CC) {
      var zC, ZC, wC, oC, FC, NC, MC, gC, SC, pC;
      const {
        t: PC
      } = (0, nC.y)(), GC = iw(), {
        creator: RC,
        mode: AC
      } = CC, [JC, IC] = (0, QC.useState)(null !== (zC = null === RC || void 0 === RC ? void 0 : RC.meta.item) && void 0 !== zC ? zC : null), [iC, vC] = (0, QC.useState)(1), [eC, hC] = (0, QC.useState)(0), [KC, YC] = (0, QC.useState)(""), [dC, mC] = (0, QC.useState)(0), HC = (0, QC.useRef)(JC), EC = (0, QC.useRef)(!1), [lC, XC] = (0, QC.useState)(!1), cC = null !== (ZC = null === RC || void 0 === RC ? void 0 : RC.meta.item) && void 0 !== ZC ? ZC : null, uC = null !== (wC = null === RC || void 0 === RC ? void 0 : RC.meta.owned) && void 0 !== wC ? wC : 0;
      (0, QC.useEffect)((() => {
        CC.searching || null === cC || cC === HC.current || (HC.current = cC, EC.current = !1, IC(cC), hC(0), vC("list" === AC ? Math.max(1, uC) : 1))
      }), [cC, CC.searching]);
      const rC = !!RC && !!JC && RC.meta.item === JC,
        sC = rC ? RC.meta.owned : null !== (oC = null === (FC = CC.inventory) || void 0 === FC || null === (NC = FC.find((CC => CC.item === JC))) || void 0 === NC ? void 0 : NC.quantity) && void 0 !== oC ? oC : 0,
        TC = "list" === AC ? Math.max(1, sC) : 45954,
        aC = null !== (MC = CC.prices[0]) && void 0 !== MC ? MC : null,
        tC = CC.prices.length ? Math.round(CC.prices.reduce(((CC, zC) => CC + zC), 0) / CC.prices.length) : null,
        DC = null === (gC = CC.inventory) || void 0 === gC || null === (SC = gC.find((CC => CC.item === JC))) || void 0 === SC ? void 0 : SC.sellPrice;
      (0, QC.useEffect)((() => {
        var CC;
        rC && (vC((CC => "list" === AC ? Math.min(Math.max(1, CC), Math.max(1, sC)) : CC)), EC.current || hC(null !== (CC = null !== aC && void 0 !== aC ? aC : tC) && void 0 !== CC ? CC : Math.max(1, null !== DC && void 0 !== DC ? DC : 1)))
      }), [rC, sC, JC, aC, tC]);
      const jC = CC => {
          EC.current = !0, hC(CC)
        },
        yC = zC => {
          var ZC, QC, wC;
          HC.current = zC, EC.current = !1, XC(!1), YC(""), mC((CC => CC + 1)), IC(zC), hC(0), vC("list" === AC && null !== (ZC = null === (QC = CC.inventory) || void 0 === QC || null === (wC = QC.find((CC => CC.item === zC))) || void 0 === wC ? void 0 : wC.quantity) && void 0 !== ZC ? ZC : 1), (null === RC || void 0 === RC ? void 0 : RC.meta.item) !== zC && CC.onPickItem(zC)
        },
        LC = iC * eC,
        UC = "list" === AC && null !== RC && void 0 !== RC && RC.meta.fee ? function(CC, zC) {
          const ZC = Math.max(0, zC - CC.taxFreeAllowance);
          return Math.ceil(Math.round(ZC * CC.rate * 1e6) / 1e6)
        }(RC.meta.fee, LC) : 0,
        BC = !!RC && GC.isPending(RC.key),
        OC = rC && !CC.searching && iC >= 1 && eC >= 1 && ("order" === AC || sC >= iC) && !BC,
        kC = !!JC && !rC && !CC.searching && iC >= 1 && eC >= 1,
        VC = () => {
          OC ? GC.act(RC.key, `${iC}|${eC}`) : kC && (CC.onPickItem(JC), XC(!0))
        };
      (0, QC.useEffect)((() => {
        lC && rC && !CC.searching && (XC(!1), VC())
      }), [lC, rC, CC.searching]);
      const Cz = !!JC && !rC && (CC.searching || lC),
        zz = JC ? Aw(CC.names, JC) : "",
        Zz = (0, QC.useMemo)((() => Rw(CC.catalogue, KC).slice(0, 8)), [CC.catalogue, KC]),
        Qz = ("list" === AC ? sw.filter((CC => CC < sC)) : Tw).map((CC => ({
          value: CC,
          label: String(CC)
        })));
      "list" === AC && sC > 0 && Qz.push({
        value: sC,
        label: PC("smpShop:all", {
          count: sC
        })
      });
      const wz = [];
      return null !== aC && (aC > 1 && wz.push({
        value: aC - 1,
        label: PC("smpShop:undercut", {
          price: UQ(aC - 1)
        })
      }), wz.push({
        value: aC,
        label: PC("smpShop:lowest", {
          price: UQ(aC)
        })
      })), null !== tC && tC !== aC && wz.push({
        value: tC,
        label: PC("smpShop:average", {
          price: UQ(tC)
        })
      }), (0, WC.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, WC.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, WC.jsx)("b", {
            children: PC("list" === AC ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, WC.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": PC("smpShop:close"),
            onClick: CC.onClose,
            children: (0, WC.jsx)(fC.c, {
              name: "xmark"
            })
          })]
        }), "list" === AC && (0, WC.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (pC = CC.inventory) && void 0 !== pC && pC.length ? CC.inventory.map((CC => {
            let {
              item: zC,
              quantity: ZC
            } = CC;
            return (0, WC.jsx)("button", {
              type: "button",
              title: zC,
              className: bC()("SmpPickerSlot", {
                SmpPickerSlotOn: zC === JC
              }),
              onClick: () => {
                yC(zC)
              },
              children: (0, WC.jsx)(kQ, {
                item: zC,
                amount: ZC
              })
            }, zC)
          })) : (0, WC.jsx)("span", {
            className: "SmpMuted",
            children: PC("smpShop:nothingToList")
          })
        }), ("list" === AC || !JC) && (0, WC.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, WC.jsx)(xC.c, {
            className: "SmpSearchInput",
            placeholderText: PC("list" === AC ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: KC,
            onValueChange: YC,
            blurOnEnter: !0,
            onEnter: () => {
              Zz[0] && yC(Zz[0].name)
            }
          }, dC), Zz.length > 0 && (0, WC.jsx)("div", {
            className: "SmpPicker",
            children: Zz.map((CC => {
              let {
                name: zC
              } = CC;
              return (0, WC.jsx)("button", {
                type: "button",
                title: zC,
                className: bC()("SmpPickerSlot", {
                  SmpPickerSlotOn: zC === JC
                }),
                onClick: () => {
                  yC(zC)
                },
                children: (0, WC.jsx)(kQ, {
                  item: zC
                })
              }, zC)
            }))
          })]
        }), JC && (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsxs)("div", {
            className: "SmpPickedName",
            children: [zz, Cz && (0, WC.jsx)(ww, {})]
          }), (0, WC.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, WC.jsxs)("div", {
              className: "SmpField",
              children: [(0, WC.jsxs)("span", {
                children: [PC("smpShop:quantity"), "list" === AC && rC && (0, WC.jsx)("small", {
                  children: PC("smpShop:youHave", {
                    count: sC
                  })
                })]
              }), (0, WC.jsx)(bw, {
                value: iC,
                onChange: vC,
                max: TC,
                label: PC("smpShop:quantity")
              }), (0, WC.jsx)(Qw, {
                options: Qz,
                value: iC,
                onChange: vC,
                ariaLabel: PC("smpShop:quantity")
              })]
            }), (0, WC.jsxs)("div", {
              className: "SmpField",
              children: [(0, WC.jsx)("span", {
                children: PC("smpShop:pricePerItem")
              }), (0, WC.jsx)(bw, {
                value: Math.max(1, eC),
                onChange: jC,
                max: 9999999,
                step: nw,
                label: PC("smpShop:pricePerItem")
              }), (0, WC.jsx)(Qw, {
                options: wz,
                value: eC,
                onChange: jC,
                ariaLabel: PC("smpShop:pricePerItem")
              })]
            })]
          }), "list" === AC && (0, WC.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, WC.jsxs)("span", {
              children: [PC("smpShop:youGet"), " ", (0, WC.jsx)(VQ, {
                amount: Math.max(0, LC - UC),
                exact: !0
              })]
            }), (0, WC.jsx)("small", {
              children: UC > 0 ? PC("smpShop:listingFee", {
                fee: UC.toLocaleString("en-US")
              }) : PC("smpShop:listingRules")
            })]
          }), (0, WC.jsx)(qC.t, {
            className: "SmpSubmit",
            disabled: !OC && !kC && !BC,
            loading: BC || Cz || rC && CC.searching,
            onClick: VC,
            children: "list" === AC ? PC("smpShop:listButton", {
              count: iC,
              item: zz
            }) : (0, WC.jsxs)(WC.Fragment, {
              children: [PC("smpShop:orderButton", {
                count: iC,
                item: zz
              }), " ", eC >= 1 && (0, WC.jsx)(VQ, {
                amount: LC
              })]
            })
          })]
        })]
      })
    }

    function tw() {
      var CC;
      const {
        t: zC
      } = (0, nC.y)(), ZC = iw(), wC = null === (CC = ZC.shopInfo[ZC.categoryKey]) || void 0 === CC ? void 0 : CC.items, bC = Mw(wC, "search"), fC = Mw(wC, "creator"), oC = Nw(wC, "enchantedCreator"), FC = Nw(wC, "listing"), NC = Mw(wC, "empty"), MC = Kw(bC, FC.length > 0 || null !== NC), {
        searched: gC,
        shown: SC,
        loading: pC
      } = MC, [PC, GC] = (0, QC.useState)(!1), [RC, AC] = function() {
        const [CC, zC] = (0, lw.d)("smpMarketView", "list");
        return ["grid" === CC ? "grid" : "list", zC]
      }(), xC = "grid" === RC, JC = (0, QC.useMemo)((() => FC.filter((CC => {
        let {
          meta: zC
        } = CC;
        return null !== zC.seller && zC.item === gC
      })).map((CC => {
        let {
          meta: zC
        } = CC;
        return zC.pricePerItem
      })).sort(((CC, zC) => CC - zC))), [FC, gC]), IC = (0, QC.useMemo)((() => {
        const CC = new Set(MC.catalogue.map((CC => {
          let {
            name: zC
          } = CC;
          return zC
        })));
        return function(CC) {
          for (const zC in CC)
            if ("sell" === CC[zC].smp) return Nw(CC[zC].items, "sell").filter((CC => {
              let {
                item: zC
              } = CC;
              return !zC.enchant
            })).map((CC => {
              let {
                meta: zC
              } = CC;
              return {
                item: zC.item,
                quantity: zC.quantity,
                sellPrice: zC.pricePerItem
              }
            }));
          return []
        }(ZC.shopInfo).filter((zC => {
          let {
            item: ZC
          } = zC;
          return CC.has(ZC)
        }))
      }), [ZC.shopInfo, MC.catalogue]);
      return (0, WC.jsx)(Hw, {
        browser: MC,
        className: "SmpMarketTab",
        recentLabel: zC("smpShop:recentlyListed"),
        action: (0, WC.jsx)(qC.t, {
          className: "SmpSellButton",
          onClick: () => {
            GC((CC => !CC))
          },
          children: zC("smpShop:sell")
        }),
        above: PC && (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsx)(aw, {
            mode: "list",
            creator: fC,
            inventory: IC,
            catalogue: MC.catalogue,
            names: MC.names,
            searching: pC,
            prices: JC,
            onPickItem: MC.searchFor,
            onClose: () => {
              GC(!1)
            }
          }), oC.length > 0 && (0, WC.jsx)(Dw, {
            entries: oC
          })]
        }),
        listControls: (0, WC.jsx)(uw, {
          view: RC,
          onChange: AC
        }),
        summary: SC && (FC.length > 0 ? zC(1 === FC.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: FC.length,
          price: UQ(Ew(FC, "min"))
        }) : zC("smpShop:noOneSelling", {
          item: Aw(MC.names, SC)
        })),
        list: pC ? (0, WC.jsx)(Cw, {
          grid: xC
        }) : FC.length > 0 ? (0, WC.jsx)(rw, {
          entries: FC,
          view: RC
        }) : NC ? (0, WC.jsx)(Zw, {
          entry: NC
        }) : (0, WC.jsx)(Cw, {
          count: 3,
          grid: xC
        })
      })
    }

    function Dw(CC) {
      let {
        entries: zC
      } = CC;
      const {
        t: ZC
      } = (0, nC.y)(), wC = iw(), [bC, fC] = (0, QC.useState)({});
      return (0, WC.jsx)("div", {
        className: "SmpList",
        children: zC.map((CC => {
          var zC, QC, nC;
          let {
            key: oC,
            item: FC,
            meta: NC
          } = CC;
          const MC = null !== (zC = bC[oC]) && void 0 !== zC ? zC : 1;
          return (0, WC.jsxs)("div", {
            className: "SmpRow",
            children: [(0, WC.jsx)(kQ, {
              item: NC.item,
              amount: NC.quantity,
              tier: null !== (QC = null === (nC = FC.enchant) || void 0 === nC ? void 0 : nC.tier) && void 0 !== QC ? QC : null
            }), (0, WC.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, WC.jsx)("b", {
                children: (0, WC.jsx)(uQ.e, {
                  text: FC.customTitle
                })
              }), (0, WC.jsx)("small", {
                children: ZC("smpShop:enchantedListing")
              })]
            }), (0, WC.jsx)(bw, {
              value: MC,
              onChange: CC => {
                fC({
                  ...bC,
                  [oC]: CC
                })
              },
              max: 9999999,
              step: nw,
              label: ZC("smpShop:pricePerItem")
            }), (0, WC.jsxs)(qC.t, {
              loading: wC.isPending(oC),
              onClick: () => {
                wC.act(oC, String(MC))
              },
              children: [ZC("smpShop:list"), " ", (0, WC.jsx)(VQ, {
                amount: MC
              })]
            })]
          }, oC)
        }))
      })
    }
    const jw = (0, QC.memo)((function(CC) {
      let {
        itemKey: zC,
        item: ZC,
        quantity: QC,
        pricePerItem: wC,
        tier: nC,
        selected: fC,
        onSelect: oC
      } = CC;
      return (0, WC.jsxs)("button", {
        type: "button",
        className: bC()("SmpInventorySlot", {
          SmpInventorySlotOn: fC
        }),
        title: ZC,
        onClick: () => {
          oC(zC)
        },
        children: [(0, WC.jsx)(kQ, {
          item: ZC,
          amount: QC,
          tier: nC
        }), (0, WC.jsx)(VQ, {
          amount: wC
        })]
      })
    }));

    function yw() {
      var CC;
      const {
        t: zC
      } = (0, nC.y)(), ZC = iw(), wC = null === (CC = ZC.shopInfo[ZC.categoryKey]) || void 0 === CC ? void 0 : CC.items, fC = Nw(wC, "sell"), oC = Mw(wC, "empty"), [qC, FC] = (0, QC.useState)(null), [NC, MC] = (0, QC.useState)({}), gC = fC.find((CC => {
        let {
          key: zC
        } = CC;
        return zC === qC
      }));
      return 0 === fC.length ? (0, WC.jsx)("div", {
        className: "SmpScreen",
        children: (0, WC.jsx)(zw, {
          title: oC ? (0, WC.jsx)(uQ.e, {
            text: oC.item.customTitle
          }) : zC("smpShop:nothingToSell"),
          children: oC && (0, WC.jsx)(uQ.e, {
            text: oC.item.description
          })
        })
      }) : (0, WC.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, WC.jsx)("div", {
          className: "SmpInventoryGrid",
          children: fC.map((CC => {
            var zC, ZC;
            let {
              key: QC,
              item: wC,
              meta: bC
            } = CC;
            return (0, WC.jsx)(jw, {
              itemKey: QC,
              item: bC.item,
              quantity: bC.quantity,
              pricePerItem: bC.pricePerItem,
              tier: null !== (zC = null === (ZC = wC.enchant) || void 0 === ZC ? void 0 : ZC.tier) && void 0 !== zC ? zC : null,
              selected: QC === qC,
              onSelect: FC
            }, QC)
          }))
        }), (0, WC.jsx)("div", {
          className: bC()("SmpSellBar", {
            SmpSellBarIdle: !gC
          }),
          children: gC ? (0, WC.jsx)(Lw, {
            entry: gC,
            choice: xw(gC.item, NC[gC.key]),
            onChoose: CC => {
              MC({
                ...NC,
                [gC.key]: CC
              })
            }
          }) : (0, WC.jsx)("span", {
            className: "SmpMuted",
            children: zC("smpShop:tapToSell")
          })
        })]
      })
    }

    function Lw(CC) {
      var zC, ZC, QC, wC;
      let {
        entry: bC,
        choice: fC,
        onChoose: oC
      } = CC;
      const {
        t: FC
      } = (0, nC.y)(), NC = iw(), {
        key: MC,
        item: gC,
        meta: SC
      } = bC, pC = Pw("dropdown" === (null === (zC = gC.userInput) || void 0 === zC ? void 0 : zC.type) ? gC.userInput.dropdownOptions : []), PC = null === fC ? 0 : -(0, EQ.b)(gC, fC);
      return (0, WC.jsxs)(WC.Fragment, {
        children: [(0, WC.jsx)(kQ, {
          item: SC.item,
          amount: SC.quantity,
          tier: null !== (ZC = null === (QC = gC.enchant) || void 0 === QC ? void 0 : QC.tier) && void 0 !== ZC ? ZC : null
        }), (0, WC.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, WC.jsx)("b", {
            children: (0, WC.jsx)(uQ.e, {
              text: null !== (wC = gC.customTitle) && void 0 !== wC ? wC : SC.item
            })
          }), (0, WC.jsx)("small", {
            children: FC("smpShop:sellEach", {
              count: SC.quantity
            })
          })]
        }), (0, WC.jsx)(Qw, {
          options: pC.map((CC => {
            let {
              label: zC,
              quantity: ZC,
              isAll: QC
            } = CC;
            return {
              value: zC,
              label: QC ? FC("smpShop:all", {
                count: ZC
              }) : String(ZC)
            }
          })),
          value: fC,
          onChange: oC,
          ariaLabel: FC("smpShop:quantity")
        }), (0, WC.jsxs)(qC.t, {
          loading: NC.isPending(MC),
          disabled: null === fC,
          onClick: () => {
            NC.act(MC, fC)
          },
          children: [FC("smpShop:sellButton"), " ", (0, WC.jsx)(VQ, {
            amount: PC
          })]
        })]
      })
    }

    function Uw() {
      var CC;
      const {
        t: zC
      } = (0, nC.y)(), ZC = iw(), QC = null === (CC = ZC.shopInfo[ZC.categoryKey]) || void 0 === CC ? void 0 : CC.items, wC = Nw(QC, "collect"), bC = Nw(QC, "myListing"), fC = (CC, zC) => ZC.isPending(CC) || !1 === zC.canBuy;
      return (0, WC.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, WC.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zC("smpShop:readyToCollect")
        }), wC.length > 0 ? (0, WC.jsx)("div", {
          className: "SmpList",
          children: wC.map((CC => {
            var QC, wC;
            let {
              key: bC,
              item: nC,
              meta: oC
            } = CC;
            return (0, WC.jsxs)("div", {
              className: "SmpRow",
              children: [(0, WC.jsx)(kQ, {
                item: "sold" === oC.type ? "Gold Coin" : oC.item,
                amount: "sold" === oC.type ? 0 : oC.quantity,
                tier: null !== (QC = null === (wC = nC.enchant) || void 0 === wC ? void 0 : wC.tier) && void 0 !== QC ? QC : null
              }), (0, WC.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, WC.jsx)("b", {
                  children: (0, WC.jsx)(uQ.e, {
                    text: nC.customTitle
                  })
                }), (0, WC.jsx)("small", {
                  children: (0, WC.jsx)(uQ.e, {
                    text: nC.description
                  })
                })]
              }), (0, WC.jsx)(qC.o, {
                loading: fC(bC, nC),
                onClick: () => {
                  ZC.act(bC)
                },
                children: zC("smpShop:collect")
              })]
            }, bC)
          }))
        }) : (0, WC.jsx)(zw, {
          title: zC("smpShop:nothingToCollect"),
          children: zC("smpShop:nothingToCollectHint")
        }), (0, WC.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zC("smpShop:activeListings", {
            count: bC.length
          })
        }), bC.length > 0 ? (0, WC.jsx)("div", {
          className: "SmpList",
          children: bC.map((CC => {
            var QC, wC;
            let {
              key: bC,
              item: nC,
              meta: oC
            } = CC;
            return (0, WC.jsxs)("div", {
              className: "SmpRow",
              children: [(0, WC.jsx)(kQ, {
                item: oC.item,
                amount: oC.quantity,
                tier: null !== (QC = null === (wC = nC.enchant) || void 0 === wC ? void 0 : wC.tier) && void 0 !== QC ? QC : null
              }), (0, WC.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, WC.jsx)("b", {
                  children: (0, WC.jsx)(uQ.e, {
                    text: nC.customTitle
                  })
                }), (0, WC.jsx)("small", {
                  children: zC("smpShop:timeLeft", {
                    time: pw(oC.expiresAt)
                  })
                })]
              }), (0, WC.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, WC.jsx)(VQ, {
                  amount: oC.pricePerItem
                }), (0, WC.jsx)("small", {
                  children: zC("smpShop:each")
                })]
              }), (0, WC.jsx)(qC.I, {
                loading: fC(bC, nC),
                onClick: () => {
                  ZC.act(bC)
                },
                children: zC("smpShop:cancel")
              })]
            }, bC)
          }))
        }) : (0, WC.jsx)(zw, {
          title: zC("smpShop:noActiveListings"),
          children: zC("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Bw(CC) {
      let {
        done: zC,
        of: ZC
      } = CC;
      return (0, WC.jsx)("span", {
        className: "SmpProgress",
        children: (0, WC.jsx)("i", {
          style: {
            width: `${Math.min(100,zC/Math.max(1,ZC)*100)}%`
          }
        })
      })
    }

    function Ow(CC) {
      var zC, ZC, QC;
      let {
        entry: wC,
        choice: bC,
        onChoose: fC
      } = CC;
      const {
        t: oC
      } = (0, nC.y)(), FC = iw(), {
        key: NC,
        item: MC,
        meta: gC
      } = wC, SC = "dropdown" === (null === (zC = MC.userInput) || void 0 === zC ? void 0 : zC.type) ? MC.userInput.dropdownOptions : [], pC = !0 === gC.processing, PC = null !== gC.creator && (gC.owned > 0 || pC), GC = PC && gC.owned > 0 ? Pw(SC) : [], RC = null === bC ? 0 : null !== (ZC = null === (QC = GC.find((CC => CC.label === bC))) || void 0 === QC ? void 0 : QC.quantity) && void 0 !== ZC ? ZC : 0;
      return (0, WC.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, WC.jsx)(kQ, {
          item: gC.item
        }), (0, WC.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, WC.jsx)("b", {
            children: (0, WC.jsx)(uQ.e, {
              text: MC.customTitle
            })
          }), (0, WC.jsxs)("small", {
            children: [(0, WC.jsx)(VQ, {
              amount: gC.pricePerItem
            }), " ", oC("smpShop:each"), " \xb7", " ", null === gC.creator ? oC("smpShop:you") : (0, WC.jsx)(uQ.e, {
              text: [{
                entityName: gC.creator
              }]
            })]
          }), (0, WC.jsx)(Bw, {
            done: gC.delivered,
            of: gC.wanted
          })]
        }), PC ? (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsx)(Qw, {
            options: GC.map((CC => {
              let {
                label: zC,
                quantity: ZC,
                isAll: QC
              } = CC;
              return {
                value: zC,
                label: QC ? oC("smpShop:max", {
                  count: ZC
                }) : String(ZC)
              }
            })),
            value: bC,
            onChange: fC,
            ariaLabel: oC("smpShop:quantity")
          }), (0, WC.jsxs)(qC.t, {
            loading: FC.isPending(NC) || pC,
            disabled: null === bC,
            onClick: () => {
              FC.act(NC, bC)
            },
            children: [oC("smpShop:deliver"), " ", (0, WC.jsx)(VQ, {
              amount: RC * gC.pricePerItem
            })]
          })]
        }) : (0, WC.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === gC.creator ? oC("smpShop:yourOrder") : oC("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function kw() {
      var CC;
      const {
        t: zC
      } = (0, nC.y)(), ZC = iw(), wC = null === (CC = ZC.shopInfo[ZC.categoryKey]) || void 0 === CC ? void 0 : CC.items, bC = Mw(wC, "search"), fC = Mw(wC, "creator"), oC = Nw(wC, "order"), FC = Mw(wC, "empty"), NC = Kw(bC, oC.length > 0 || null !== FC), [MC, gC] = (0, QC.useState)(!1), [SC, pC] = (0, QC.useState)({});
      return (0, WC.jsx)(Hw, {
        browser: NC,
        recentLabel: zC("smpShop:recentOrders"),
        action: (0, WC.jsx)(qC.t, {
          onClick: () => {
            gC((CC => !CC))
          },
          children: zC("smpShop:createOrder")
        }),
        above: MC && (0, WC.jsx)(aw, {
          mode: "order",
          creator: fC,
          catalogue: NC.catalogue,
          names: NC.names,
          searching: NC.loading,
          prices: [],
          onPickItem: NC.searchFor,
          onClose: () => {
            gC(!1)
          }
        }),
        onBack: () => {
          gC(!1)
        },
        summary: oC.length > 0 && zC(1 === oC.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: oC.length,
          price: UQ(Ew(oC, "max"))
        }),
        list: NC.loading ? (0, WC.jsx)(Cw, {}) : oC.length > 0 ? (0, WC.jsx)(vw.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: gw,
          observerUpdateDeps: [oC.length],
          children: oC.map((CC => (0, WC.jsx)(Ow, {
            entry: CC,
            choice: xw(CC.item, SC[CC.key]),
            onChoose: zC => {
              pC({
                ...SC,
                [CC.key]: zC
              })
            }
          }, CC.key)))
        }) : FC ? (0, WC.jsx)(Zw, {
          entry: FC
        }) : (0, WC.jsx)(Cw, {
          count: 3
        })
      })
    }

    function Vw() {
      var CC;
      const {
        t: zC
      } = (0, nC.y)(), ZC = iw(), QC = Nw(null === (CC = ZC.shopInfo[ZC.categoryKey]) || void 0 === CC ? void 0 : CC.items, "myOrder");
      return 0 === QC.length ? (0, WC.jsx)("div", {
        className: "SmpScreen",
        children: (0, WC.jsx)(zw, {
          title: zC("smpShop:noOrders"),
          children: zC("smpShop:noOrdersHint")
        })
      }) : (0, WC.jsx)("div", {
        className: "SmpScreen",
        children: (0, WC.jsx)("div", {
          className: "SmpList",
          children: QC.map((CC => {
            let {
              key: QC,
              item: wC,
              meta: bC
            } = CC;
            const nC = ZC.isPending(QC) || !1 === wC.canBuy;
            return (0, WC.jsxs)("div", {
              className: "SmpRow",
              children: [(0, WC.jsx)(kQ, {
                item: bC.item,
                amount: bC.collectable
              }), (0, WC.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, WC.jsx)("b", {
                  children: (0, WC.jsx)(uQ.e, {
                    text: wC.customTitle
                  })
                }), (0, WC.jsxs)("small", {
                  children: [(0, WC.jsx)(VQ, {
                    amount: bC.pricePerItem
                  }), " ", zC("smpShop:each"), bC.collectable > 0 && ` \xb7 ${zC("smpShop:readyCount",{count:bC.collectable})}`]
                }), (0, WC.jsx)(Bw, {
                  done: bC.delivered,
                  of: bC.wanted
                })]
              }), bC.collectable > 0 ? (0, WC.jsx)(qC.o, {
                loading: nC,
                onClick: () => {
                  ZC.act(QC)
                },
                children: zC("smpShop:collectCount", {
                  count: bC.collectable
                })
              }) : (0, WC.jsx)(qC.I, {
                loading: nC,
                onClick: () => {
                  ZC.act(QC)
                },
                children: zC("smpShop:cancel")
              })]
            }, QC)
          }))
        })
      })
    }
    const Cb = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      zb = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Zb(CC, zC) {
      let ZC = !1;
      const QC = {};
      for (const wC in CC) zC(wC, CC[wC]) ? QC[wC] = CC[wC] : ZC = !0;
      return ZC ? QC : CC
    }

    function Qb(CC) {
      var zC, ZC, wC, oC;
      const {
        show: qC,
        shopInfo: FC,
        selectedCategoryKey: NC
      } = CC, {
        t: MC
      } = (0, nC.y)(), gC = null !== NC && void 0 !== NC ? NC : "", SC = Ww(FC, gC), pC = null === (zC = FC[gC]) || void 0 === zC ? void 0 : zC.items, PC = null !== SC, [GC, RC] = (0, QC.useState)({}), [AC, xC] = (0, QC.useState)([]), [JC, IC] = (0, QC.useState)(!1), [iC, vC] = (0, QC.useState)(null), [, eC] = (0, QC.useState)(0), hC = (0, QC.useRef)(0), KC = (0, QC.useRef)({}), YC = (0, QC.useRef)({
        items: pC,
        pending: GC,
        shopInfo: FC,
        active: PC,
        canAfford: CC.canAfford,
        buy: CC.buy
      });
      YC.current = {
        items: pC,
        pending: GC,
        shopInfo: FC,
        active: PC,
        canAfford: CC.canAfford,
        buy: CC.buy
      };
      const dC = (0, QC.useCallback)((CC => {
        hC.current++;
        const zC = hC.current;
        xC((ZC => [{
          id: zC,
          text: CC
        }, ...ZC].slice(0, 8))), vC(zC)
      }), []);
      (0, QC.useEffect)((() => {
        if (null === iC) return;
        const CC = setTimeout((() => {
          vC(null)
        }), 3e3);
        return () => {
          clearTimeout(CC)
        }
      }), [iC]), (0, QC.useEffect)((() => {
        const zC = CC.message;
        if (!zC) return;
        const {
          shopInfo: ZC,
          active: QC,
          items: wC
        } = YC.current, bC = null !== zC.categoryKey ? null !== Ww(ZC, zC.categoryKey) : QC;
        (bC || QC) && dC(zC.text), bC && RC((CC => Zb(CC, (CC => {
          var zC, ZC;
          return !Cb.has(null === wC || void 0 === wC || null === (zC = wC[CC]) || void 0 === zC || null === (ZC = zC.smp) || void 0 === ZC ? void 0 : ZC.kind)
        }))))
      }), [CC.message, dC]), (0, QC.useEffect)((() => {
        RC((CC => Zb(CC, ((CC, zC) => Jw(null === pC || void 0 === pC ? void 0 : pC[CC]) === zC.snapshot))))
      }), [FC, pC]);
      const mC = Object.keys(GC).length > 0;
      (0, QC.useEffect)((() => {
        if (!mC) return;
        const CC = setInterval((() => {
          eC((CC => CC + 1));
          const CC = Date.now(),
            {
              pending: zC,
              items: ZC
            } = YC.current,
            QC = Object.keys(zC).filter((ZC => CC - zC[ZC].at >= 12e3));
          if (0 === QC.length) return;
          const wC = QC.some((CC => {
            var QC, wC;
            return "search" !== (null === ZC || void 0 === ZC || null === (QC = ZC[CC]) || void 0 === QC || null === (wC = QC.smp) || void 0 === wC ? void 0 : wC.kind) || zC[CC].resend
          }));
          for (const bC of QC) KC.current[bC] = CC;
          RC((CC => Zb(CC, (CC => !QC.includes(CC))))), wC && dC(MC("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(CC)
        }
      }), [mC]), (0, QC.useEffect)((() => {
        RC({})
      }), [gC]), (0, QC.useEffect)((() => {
        qC || IC(!1)
      }), [qC]);
      const HC = (0, QC.useCallback)((function(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: QC,
            pending: wC,
            canAfford: bC,
            buy: nC
          } = YC.current, fC = null === QC || void 0 === QC ? void 0 : QC[CC];
          if (!fC || CC in wC || !1 === fC.canBuy) return !1;
          if (!bC(fC, (0, EQ.b)(fC, zC))) return !1;
          nC(CC, fC, zC);
          const oC = {
            snapshot: Jw(fC),
            at: Date.now(),
            resend: ZC
          };
          return YC.current.pending = {
            ...YC.current.pending,
            [CC]: oC
          }, RC((zC => ({
            ...zC,
            [CC]: oC
          }))), !0
        }), []),
        EC = (0, QC.useMemo)((() => ({
          shopInfo: FC,
          categoryKey: gC,
          canAfford: CC.canAfford,
          isPending: CC => CC in GC,
          gaveUpAt: CC => {
            var zC;
            return null !== (zC = KC.current[CC]) && void 0 !== zC ? zC : 0
          },
          act: HC,
          notify: dC
        })), [FC, gC, CC.canAfford, GC, HC, dC]),
        lC = Math.min(...Object.values(GC).map((CC => CC.at))),
        XC = mC && Date.now() - lC > 1500,
        cC = AC.length > 1,
        uC = null !== (ZC = null === (wC = FC[gC]) || void 0 === wC ? void 0 : wC.customTitle) && void 0 !== ZC ? ZC : gC,
        rC = null === (oC = FC[gC]) || void 0 === oC ? void 0 : oC.description;
      let sC = null;
      return "market" === SC ? sC = (0, WC.jsx)(tw, {}) : "sell" === SC ? sC = (0, WC.jsx)(yw, {}) : "collect" === SC ? sC = (0, WC.jsx)(Uw, {}) : "orders" === SC ? sC = (0, WC.jsx)(kw, {}) : "myOrders" === SC && (sC = (0, WC.jsx)(Vw, {})), (0, WC.jsx)(Iw.Provider, {
        value: EC,
        children: (0, WC.jsx)("div", {
          className: "SmpShopHost",
          hidden: !PC,
          children: (0, WC.jsxs)("div", {
            className: "SmpShop",
            children: [(0, WC.jsx)("header", {
              className: "SmpHeader",
              children: (0, WC.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, WC.jsxs)("h2", {
                  children: [SC && (0, WC.jsx)(fC.c, {
                    name: zb[SC]
                  }), MC(uC)]
                }), rC && (0, WC.jsx)("p", {
                  children: (0, WC.jsx)(uQ.e, {
                    text: rC
                  })
                })]
              })
            }), (0, WC.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: qC && sC
            }), (0, WC.jsxs)("button", {
              type: "button",
              className: bC()("SmpStatus", {
                SmpStatusWaiting: mC,
                SmpStatusFresh: !mC && null !== iC,
                SmpStatusHasHistory: cC
              }),
              "aria-live": "polite",
              "aria-expanded": cC ? JC : void 0,
              onClick: () => {
                cC && IC((CC => !CC))
              },
              children: [mC ? (0, WC.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, WC.jsx)(ww, {}), MC(XC ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : AC[0] ? (0, WC.jsx)("span", {
                className: "SmpStatusText",
                children: (0, WC.jsx)(uQ.e, {
                  text: AC[0].text
                })
              }, AC[0].id) : (0, WC.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: MC("smpShop:ready")
              }), cC && (0, WC.jsx)("small", {
                children: MC("smpShop:recentMessages", {
                  count: AC.length
                })
              })]
            }), JC && cC && (0, WC.jsx)("div", {
              className: "SmpStatusHistory",
              children: AC.map((CC => (0, WC.jsx)("div", {
                children: (0, WC.jsx)(uQ.e, {
                  text: CC.text
                })
              }, CC.id)))
            })]
          })
        })
      })
    }
    class wb {
      constructor(CC) {
        this.info = CC
      }
      static fromShopInfo(CC) {
        const zC = {};
        for (const ZC in CC) {
          const QC = !0 === CC[ZC].redDot && !0 !== CC[ZC].forceRemoveRedDot;
          zC[ZC] = {
            redDot: QC,
            items: {}
          };
          for (const wC in CC[ZC].items) {
            const QC = CC[ZC].items[wC],
              bC = !0 === QC.redDot && !0 !== QC.forceRemoveRedDot;
            zC[ZC].items[wC] = {
              redDot: bC
            }
          }
        }
        return new wb(zC)
      }
      anyCategoryHasRedDots() {
        for (const CC in this.info)
          if (this.categoryHasRedDot(CC)) return !0;
        return !1
      }
      doesCategoryExist(CC) {
        return !(0, CZ.H)(this.info[CC])
      }
      categoryHasRedDot(CC) {
        return !0 === this.info[CC].redDot
      }
      updateCategoryRedDot(CC, zC) {
        this.info[CC].redDot = zC
      }
      doesItemExist(CC, zC) {
        return this.doesCategoryExist(CC) && !(0, CZ.H)(this.info[CC].items[zC])
      }
      itemHasRedDot(CC, zC) {
        return !0 === this.info[CC].items[zC].redDot
      }
      updateItemRedDot(CC, zC, ZC) {
        this.info[CC].items[zC].redDot = ZC
      }
      shallowCopy() {
        return new wb(this.info)
      }
    }

    function bb(CC, zC) {
      return `${CC}\x1f${zC}`
    }

    function nb(CC, zC) {
      return !(0, CZ.H)(zC) && !(0, CZ.H)(CC) && zC in CC
    }
    const fb = (0, QC.memo)((function(CC) {
      var zC, ZC;
      let {
        show: wC
      } = CC;
      const nC = (0, hz.e)("players", Mb),
        fC = (0, hz.e)("players", gb),
        FC = (0, DQ.e)(),
        [MC, gC] = (0, QC.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: wb.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        pC = (0, QC.useRef)(""),
        PC = (0, QC.useRef)(null),
        RC = (0, QC.useRef)(null),
        AC = (0, QC.useRef)(0),
        xC = (0, QC.useRef)(void 0),
        JC = (0, QC.useRef)(null),
        IC = (0, QC.useRef)(MC),
        vC = MC.redDotInfo.anyCategoryHasRedDots(),
        [eC, KC] = (0, QC.useState)(null),
        YC = (0, QC.useRef)(!1);
      let dC = !1,
        mC = 0,
        HC = 0;
      if (MC.currencyAmounts) {
        for (const CC in MC.currencyAmounts) {
          var EC;
          const zC = MC.currencyAmounts[CC];
          zC.hidden || (mC++, (null === (EC = zC.subtext) || void 0 === EC ? void 0 : EC.length) > 0 && HC++)
        }
        dC = mC + HC > 4
      }(0, QC.useEffect)((() => {
        zZ.o.bp("showShopIconRedDot", vC, !0)
      }), [vC]), (0, QC.useEffect)((() => {
        GC.gameBridge.send("setShopOpen", wC), wC || (clearTimeout(xC.current), gC((CC => CC.awaitingPurchase ? {
          ...CC,
          awaitingPurchase: !1
        } : CC)))
      }), [wC]), (0, QC.useEffect)((() => () => {
        GC.gameBridge.send("setShopOpen", !1), clearTimeout(xC.current)
      }), []), (0, QC.useEffect)((() => {
        IC.current = MC
      }), [MC]), (0, QC.useEffect)((() => {
        if (null === eC) return;
        return (0, aQ.c)("pointerdown", (CC => {
          const zC = CC.target;
          null !== zC && void 0 !== zC && zC.closest(".ShopItem") || KC(null)
        }))
      }), [eC]);
      const lC = CC => {
          gC((zC => ({
            ...zC,
            ...CC
          })))
        },
        XC = CC => {
          var zC;
          clearTimeout(null === (zC = MC.onBoughtInfo) || void 0 === zC ? void 0 : zC.timeout);
          const ZC = setTimeout((() => {
            lC({
              onBoughtInfo: null
            })
          }), 3e3);
          pC.current = CC, lC({
            onBoughtInfo: {
              text: CC,
              timeout: ZC,
              categoryKey: PC.current
            }
          })
        },
        cC = CC => {
          const {
            shopInfo: zC,
            userInputsPerItem: ZC,
            redDotInfo: QC,
            autoSelectCategory: bC
          } = function(CC, zC, ZC, QC, wC, bC) {
            if ((0, CZ.H)(CC) || 0 === Object.keys(CC).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: wb.fromShopInfo({}),
              autoSelectCategory: null
            };
            const nC = hC.s[hC.y].adConfig.showRewardedAds,
              fC = {};
            let oC = null;
            for (const pC in CC) {
              const zC = CC[pC],
                ZC = {};
              let QC = !1;
              for (const CC in zC.items) {
                const wC = zC.items[CC];
                (0, EQ.k)(wC, nC) && (ZC[CC] = wC, QC = !0)
              }
              QC && (fC[pC] = {
                ...zC,
                items: ZC
              }, !0 === zC.autoSelectCategory && (oC = pC))
            }
            const qC = {},
              FC = (CC, zC, QC, nC) => {
                var fC, oC;
                const FC = bb(CC, zC),
                  WC = null !== (fC = ZC[FC]) && void 0 !== fC ? fC : ZC[zC];
                if (null !== (oC = nC.userInput) && void 0 !== oC && oC.type) switch (nC.userInput.type) {
                  case "dropdown": {
                    var NC;
                    const CC = !WC || !nC.userInput.dropdownOptions.some((CC => (0, EQ.f)(CC) === WC)),
                      zC = nC.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === QC || void 0 === QC || null === (NC = QC.userInput) || void 0 === NC ? void 0 : NC.type) || JSON.stringify(QC.userInput.dropdownOptions) !== JSON.stringify(nC.userInput.dropdownOptions)),
                      ZC = nC.userInput,
                      wC = !(0, CZ.H)(ZC.initialValue) && ZC.dropdownOptions.some((CC => (0, EQ.f)(CC) === ZC.initialValue));
                    var MC;
                    return void(CC || zC ? wC ? qC[FC] = null !== (MC = nC.userInput.initialValue) && void 0 !== MC ? MC : null : nC.userInput.dropdownOptions.length > 0 ? qC[FC] = (0, EQ.f)(nC.userInput.dropdownOptions[0]) : qC[FC] = null : qC[FC] = WC)
                  }
                  case "text":
                  case "number":
                    var gC, SC, pC;
                    return void((null === QC || void 0 === QC ? void 0 : QC.userInput) !== nC.userInput ? qC[FC] = null !== (gC = null !== (SC = nC.userInput.initialValue) && void 0 !== SC ? SC : WC) && void 0 !== gC ? gC : "" : qC[FC] = null !== (pC = null !== WC && void 0 !== WC ? WC : nC.userInput.initialValue) && void 0 !== pC ? pC : "");
                  case "color":
                    var PC, GC, RC;
                    return void((null === QC || void 0 === QC ? void 0 : QC.userInput) !== nC.userInput ? qC[FC] = null !== (PC = null !== (GC = nC.userInput.initialValue) && void 0 !== GC ? GC : WC) && void 0 !== PC ? PC : "#000000" : qC[FC] = null !== (RC = null !== WC && void 0 !== WC ? WC : nC.userInput.initialValue) && void 0 !== RC ? RC : "#000000");
                  case "player": {
                    const CC = (0, EQ.i)(wC, bC, nC.userInput);
                    return void(WC && CC.includes(WC) ? qC[FC] = WC : qC[FC] = CC.length > 0 ? CC[0] : null)
                  }
                }
              };
            for (const pC in fC)
              for (const CC in fC[pC].items) {
                var WC;
                const ZC = fC[pC].items[CC];
                FC(pC, CC, null === (WC = zC[pC]) || void 0 === WC ? void 0 : WC.items[CC], ZC)
              }
            const NC = wb.fromShopInfo(fC);
            for (const pC in fC) {
              var MC;
              if (QC.doesCategoryExist(pC)) {
                (null === (MC = zC[pC]) || void 0 === MC ? void 0 : MC.redDot) === fC[pC].redDot && NC.updateCategoryRedDot(pC, QC.categoryHasRedDot(pC));
                for (const CC in fC[pC].items) {
                  var gC, SC;
                  QC.doesItemExist(pC, CC) && (null === (gC = zC[pC]) || void 0 === gC || null === (SC = gC.items[CC]) || void 0 === SC ? void 0 : SC.redDot) === fC[pC].items[CC].redDot && NC.updateItemRedDot(pC, CC, QC.itemHasRedDot(pC, CC))
                }
              }
            }
            return {
              shopInfo: fC,
              userInputsPerItem: qC,
              redDotInfo: NC,
              autoSelectCategory: oC
            }
          }(CC, MC.shopInfo, MC.userInputsPerItem, MC.redDotInfo, nC, fC), oC = {
            shopInfo: zC,
            userInputsPerItem: ZC,
            redDotInfo: QC
          };
          if (null === bC || wC)
            if (zC[MC.selectedCategoryKey]) oC.selectedCategoryKey = MC.selectedCategoryKey;
            else {
              const CC = yQ(zC);
              oC.selectedCategoryKey = CC.length > 0 ? CC[0] : null
            }
          else oC.selectedCategoryKey = bC;
          return 0 === Object.keys(zC).length && wC && iC.b.set({
            openEverythingMenuName: null
          }), oC
        },
        rC = (CC, zC, ZC) => {
          const QC = MC.selectedCategoryKey,
            wC = bb(QC, CC),
            bC = null !== ZC && void 0 !== ZC ? ZC : MC.userInputsPerItem[wC],
            nC = {
              categoryKey: QC,
              itemKey: CC,
              userInput: bC
            };
          if (PC.current = QC, zC.isRewardedAd) {
            if (Date.now() - AC.current < 5e3) return;
            (0, fz.U)((() => {
              var ZC, QC, bC;
              console.log("bought rewarded ad");
              const fC = nC.categoryKey ? null === (ZC = IC.current.shopInfo[nC.categoryKey]) || void 0 === ZC ? void 0 : ZC.items[CC] : null;
              if (!fC || !fC.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (QC = zC.userInput) || void 0 === QC ? void 0 : QC.type) === (null === fC || void 0 === fC || null === (bC = fC.userInput) || void 0 === bC ? void 0 : bC.type) ? (nC.userInput = IC.current.userInputsPerItem[wC], GC.gameBridge.send("buyShopItem", nC), zC.onBoughtMessage && XC(zC.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), AC.current = Date.now()
          } else {
            GC.gameBridge.send("buyShopItem", nC), lC({
              awaitingPurchase: !0
            }), clearTimeout(xC.current), xC.current = setTimeout((() => {
              JC.current = null, lC({
                awaitingPurchase: !1
              })
            }), 1e3);
            const CC = (0, EQ.b)(zC, bC);
            if (JC.current = null, !isNaN(CC) && nb(MC.currencyAmounts, zC.currency)) {
              0 !== CC && (JC.current = {
                currency: zC.currency,
                amountBefore: MC.currencyAmounts[zC.currency].amount
              });
              const ZC = {
                ...MC.currencyAmounts
              };
              ZC[zC.currency].amount -= CC, lC({
                currencyAmounts: ZC
              })
            }
            zC.onBoughtMessage && XC(zC.onBoughtMessage)
          }
        },
        sC = (CC, zC) => {
          if (null === zC || !CC.shopInfo[zC]) return CC;
          let ZC = CC.redDotInfo;
          return ZC.categoryHasRedDot(zC) && (ZC.updateCategoryRedDot(zC, !1), ZC = ZC.shallowCopy()), {
            ...CC,
            selectedCategoryKey: zC,
            redDotInfo: ZC
          }
        },
        TC = CC => {
          gC((zC => sC(zC, CC)))
        };
      (0, Xz.c)(tQ.m, (() => {
        gC((CC => {
          const zC = (0, tQ.n)(yQ(CC.shopInfo), CC.selectedCategoryKey, (zC => (0, tQ.k)(CC.shopInfo[zC].items)));
          return zC === CC.selectedCategoryKey ? CC : sC(CC, zC)
        }))
      })), (0, Xz.c)("showShopFromServer", (CC => {
        let {
          toggle: zC,
          hw: ZC
        } = CC;
        ZC && TC(ZC), 0 === Object.keys(MC.shopInfo).length || zC && wC ? iC.b.set({
          openEverythingMenuName: null
        }) : iC.b.set({
          openEverythingMenuName: Fz.o.SHOP
        })
      })), (0, Xz.c)("closeShopOnDamaged", (() => {
        wC && iC.b.set({
          openEverythingMenuName: null
        })
      })), (0, Xz.c)("overShopInfo", (CC => {
        XC(CC)
      })), (0, SC.e)("currencyAmounts", (CC => {
        var zC;
        const ZC = JC.current;
        ZC && (null === CC || void 0 === CC || null === (zC = CC[ZC.currency]) || void 0 === zC ? void 0 : zC.amount) === ZC.amountBefore ? lC({
          currencyAmounts: CC
        }) : (JC.current = null, lC({
          currencyAmounts: CC,
          awaitingPurchase: !1
        }))
      })), (0, SC.e)("shopInfo", (CC => {
        lC({
          ...cC(CC),
          awaitingPurchase: !1
        })
      }));
      const aC = (0, QC.useRef)({
        playerIds: nC,
        localPlayerId: fC
      });
      (0, QC.useEffect)((() => {
        aC.current.playerIds === nC && aC.current.localPlayerId === fC || (aC.current = {
          playerIds: nC,
          localPlayerId: fC
        }, gC((CC => {
          const zC = cC(CC.shopInfo);
          return {
            ...CC,
            ...zC
          }
        })))
      }), [nC, fC]);
      const tC = MC.selectedCategoryKey,
        DC = (CC, zC) => {
          var ZC, QC;
          return (isNaN(zC) || (0, CZ.H)(CC.currency) || nb(MC.currencyAmounts, CC.currency) && zC <= MC.currencyAmounts[CC.currency].amount) && (null === (ZC = CC.canBuy) || void 0 === ZC || ZC) && !(null !== (QC = CC.hidden) && void 0 !== QC && QC)
        },
        jC = (CC, zC) => {
          var ZC, QC, wC;
          const nC = bb(tC, CC),
            fC = MC.shopInfo[tC].items[CC],
            FC = MC.userInputsPerItem[nC],
            NC = (0, EQ.b)(fC, FC),
            gC = DC(fC, NC),
            SC = fC.enchant,
            pC = SC ? (0, uC.db)(null !== (ZC = fC.customTitle) && void 0 !== ZC ? ZC : CC, {
              colour: uC.bb[SC.tier]
            }) : null !== (QC = fC.customTitle) && void 0 !== QC ? QC : CC,
            PC = zC => {
              const ZC = null !== zC && void 0 !== zC ? zC : FC,
                QC = void 0 !== zC ? (0, EQ.b)(fC, zC) : NC;
              DC(fC, QC) && null !== ZC && rC(CC, fC, zC);
              let wC = MC.redDotInfo;
              wC.itemHasRedDot(tC, CC) && (wC.updateItemRedDot(tC, CC, !1), wC = wC.shallowCopy()), lC({
                redDotInfo: wC
              })
            };
          return (0, WC.jsxs)("div", {
            className: bC()("ShopItem", {
              ShopItemNoInput: !fC.userInput,
              ShopItemNoInputCanBuy: !fC.userInput && gC,
              ShopItemNoInputSelected: fC.isSelected,
              ShopItemEnchant: !!SC
            }),
            "data-pad-focusable": !fC.userInput || void 0,
            "data-pad-unavailable": !fC.userInput && !gC || void 0,
            "data-pad-repeat": null !== (wC = (0, tQ.c)(fC)) && void 0 !== wC ? wC : void 0,
            "data-pad-repeat-wait": MC.awaitingPurchase || void 0,
            onClick: () => {
              if (SC && YC.current) {
                if (eC !== nC) return void KC(nC);
                KC(null)
              }
              fC.userInput || PC()
            },
            onPointerDown: CC => {
              SC && (YC.current = (0, XQ.r)(CC))
            },
            onPointerEnter: CC => {
              SC && !(0, XQ.r)(CC) && KC(nC)
            },
            onPointerLeave: CC => {
              SC && !(0, XQ.r)(CC) && KC((CC => CC === nC ? null : CC))
            },
            style: {
              zIndex: Object.keys(MC.shopInfo[tC].items).length - zC
            },
            children: [MC.redDotInfo.itemHasRedDot(tC, CC) && (0, WC.jsx)(oC.d, {
              top: "-6px",
              right: "-6px"
            }), fC.badge && (0, WC.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, WC.jsx)("div", {
                className: bC()("ShopBadgeMain", fC.badge.type),
                children: (0, WC.jsx)(uQ.e, {
                  text: fC.badge.text
                })
              })
            }), (0, WC.jsx)("div", {
              className: "ShopItemLeft",
              children: fC.image && (0, WC.jsx)(ob, {
                item: fC,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, WC.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, WC.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, WC.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, WC.jsx)(uQ.e, {
                    text: pC
                  })
                }), (0, WC.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, WC.jsx)(uQ.e, {
                    text: fC.description
                  })
                })]
              }), fC.userInput && (0, WC.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: CC => {
                  CC.stopPropagation()
                },
                children: [(0, WC.jsx)(Wb, {
                  item: fC,
                  currInput: FC,
                  updateInput: zC => {
                    ((CC, zC, ZC) => {
                      const QC = bb(CC, zC),
                        wC = {
                          ...MC.userInputsPerItem
                        };
                      wC[QC] = ZC, lC({
                        userInputsPerItem: wC
                      })
                    })(tC, CC, zC)
                  },
                  onSubmit: CC => {
                    PC(CC)
                  }
                }), ("dropdown" !== fC.userInput.type || !fC.userInput.autoSubmit) && (0, WC.jsx)(qC.g, {
                  className: "ItemCostButton",
                  disabled: !gC && null !== FC,
                  onClick: () => {
                    PC()
                  },
                  children: (0, WC.jsx)(Fb, {
                    item: fC,
                    cost: NC,
                    currencyAmounts: MC.currencyAmounts
                  })
                })]
              })]
            }), !fC.userInput && (0, WC.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, WC.jsx)(Fb, {
                item: fC,
                cost: NC,
                currencyAmounts: MC.currencyAmounts
              })
            }), SC && eC === nC && (0, WC.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, WC.jsx)(uQ.e, {
                text: pC
              }), (0, WC.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, WC.jsx)(uQ.e, {
                  text: (0, lQ.d)("", SC.enchantments, SC.enchantmentData)
                })
              })]
            })]
          }, nC)
        },
        yC = function(CC) {
          for (const zC in CC)
            if (CC[zC].smp) return !0;
          return !1
        }(MC.shopInfo),
        LC = Ww(MC.shopInfo, tC);
      return (0, WC.jsx)(dQ.d, {
        className: "Menu ShopBody",
        show: wC,
        children: 0 !== Object.keys(MC.shopInfo).length && (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, WC.jsx)(NC, {
              items: yQ(MC.shopInfo).map((CC => {
                var zC;
                return {
                  id: CC,
                  title: null !== (zC = MC.shopInfo[CC].customTitle) && void 0 !== zC ? zC : CC,
                  redDot: MC.redDotInfo.categoryHasRedDot(CC)
                }
              })),
              link: FC ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, jQ.g)({
                    page: (0, jQ.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: tC,
              onClick: TC,
              padStartsOnTab: (0, tQ.g)(tC)
            }), (0, WC.jsx)("div", {
              className: "MenuSideBarFooter",
              children: MC.currencyAmounts && Object.keys(MC.currencyAmounts).map((CC => {
                var zC;
                const ZC = MC.currencyAmounts[CC];
                return ZC.hidden ? null : (0, WC.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (dC ? "SmallText" : ""),
                  children: [(0, WC.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, WC.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ZC.iconColour
                      },
                      children: (0, WC.jsx)(Sb, {
                        iconName: ZC.icon
                      })
                    }), "\xa0", (0, HQ.d)(ZC.amount, 6)]
                  }), (null === (zC = ZC.subtext) || void 0 === zC ? void 0 : zC.length) > 0 && (0, WC.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, WC.jsx)(uQ.e, {
                      text: ZC.subtext
                    })
                  })]
                }, CC)
              }))
            })]
          }), (0, WC.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [yC && (0, WC.jsx)(Qb, {
              show: wC,
              shopInfo: MC.shopInfo,
              selectedCategoryKey: tC,
              buy: (CC, zC, ZC) => {
                rC(CC, zC, ZC)
              },
              canAfford: DC,
              message: MC.onBoughtInfo
            }), null === LC && (0, WC.jsxs)(WC.Fragment, {
              children: [(0, WC.jsx)("div", {
                className: bC()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== MC.onBoughtInfo
                }),
                children: (0, WC.jsx)(uQ.e, {
                  text: pC.current
                })
              }), (0, WC.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, WC.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (zC = MC.shopInfo[tC]) || void 0 === zC ? void 0 : zC.description) && (0, WC.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, WC.jsx)(uQ.e, {
                      text: MC.shopInfo[tC].description
                    })
                  }), wC && (0, WC.jsx)("div", {
                    className: "ShopItems",
                    ref: RC,
                    "data-pad-initial-area": !0,
                    children: yQ(null === (ZC = MC.shopInfo[tC]) || void 0 === ZC ? void 0 : ZC.items).map(((CC, zC) => jC(CC, zC)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function ob(CC) {
      let {
        item: zC,
        minWidth: ZC,
        minHeight: QC
      } = CC;
      const {
        image: wC,
        schematicId: bC,
        imageColour: nC
      } = zC;
      if (bC) return (0, WC.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ZC}rem`,
          height: `${QC}rem`
        },
        children: (0, WC.jsx)(rQ.d, {
          game: {
            schematicId: bC
          }
        })
      });
      var oC, qC;
      if ((0, cQ.h)(wC)) return (0, WC.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ZC}rem`,
          height: "0",
          minHeight: `${QC}rem`
        },
        children: (0, WC.jsx)(cQ.e, {
          itemName: wC,
          amount: null !== (oC = zC.amount) && void 0 !== oC ? oC : 0,
          amountFontSize: QC / 4 + "rem",
          enchantmentTier: null === (qC = zC.enchant) || void 0 === qC ? void 0 : qC.tier
        })
      });
      const FC = wC.slice(-4);
      return ".jpg" === FC || ".png" === FC ? (0, WC.jsx)(qb, {
        image: wC,
        minWidth: ZC
      }) : (0, WC.jsx)(fC.c, {
        name: wC,
        className: "SelectedItemImage",
        style: {
          color: nC
        }
      })
    }

    function qb(CC) {
      let {
        image: zC,
        minWidth: ZC
      } = CC;
      const {
        gameNameWithVariation: QC
      } = (0, hz.f)("connectedGame"), wC = zC.endsWith(".jpg");
      return (0, WC.jsx)("img", {
        className: bC()({
          ShopPixelImage: !wC
        }),
        style: {
          width: `${wC?1.6*ZC:ZC}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,uC.Cb)(QC)}/${zC}`,
        alt: zC,
        draggable: !1
      })
    }

    function Fb(CC) {
      let {
        item: zC,
        cost: ZC,
        currencyAmounts: QC
      } = CC;
      const wC = !isNaN(ZC) && 0 !== ZC && nb(QC, zC.currency);
      let bC = null;
      return zC.buyButtonText ? bC = zC.buyButtonText : wC ? (bC = ZC, zC.sell && (bC = -1 * ZC), bC = bC.toString()) : 0 === ZC ? bC = "Free" : zC.isRewardedAd && (bC = "Watch ad"), (0, CZ.H)(bC) || " " === bC ? null : (0, WC.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [wC && (0, WC.jsx)("div", {
          style: {
            color: QC[zC.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, WC.jsx)(Sb, {
            iconName: QC[zC.currency].icon
          })
        }), (0, WC.jsx)("div", {
          className: "BuyItemCost",
          children: (0, WC.jsx)(uQ.e, {
            text: bC
          })
        })]
      })
    }

    function Wb(CC) {
      let {
        item: zC,
        currInput: ZC,
        updateInput: wC,
        onSubmit: bC
      } = CC;
      const {
        t: fC
      } = (0, nC.y)(), oC = (0, QC.useRef)(null);
      if ((0, QC.useEffect)((() => {
          const CC = oC.current;
          CC && CC.value !== ZC && document.activeElement !== CC && (CC.value = null !== ZC && void 0 !== ZC ? ZC : "")
        }), [ZC]), !zC.userInput) return null;
      let qC = zC.userInput;
      if (PC.featureFlags.sanitizeShopInput && "text" === zC.userInput.type && (qC = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === qC.type || "number" === qC.type) {
        var FC, NC;
        console.assert(void 0 !== ZC, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zC)}`);
        const CC = "text" === qC.type && qC.wordCharsOnly;
        return (0, WC.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, WC.jsx)(xC.c, {
            className: "ShopItemUserInputText",
            placeholderText: fC(qC.placeholderText),
            defaultValue: ZC,
            domRef: oC,
            onValueChange: (zC, ZC) => {
              !0 === CC && (zC = (0, TQ.nb)(zC)), oC.current.value = zC, wC(zC)
            },
            onEnter: bC,
            type: qC.type
          }, (null !== (FC = qC.initialValue) && void 0 !== FC ? FC : "") + (null !== (NC = qC.placeholderText) && void 0 !== NC ? NC : ""))
        })
      }
      if ("dropdown" === qC.type) {
        console.assert(void 0 !== ZC, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zC)}`);
        const CC = qC.autoSubmit;
        return (0, WC.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, WC.jsx)(iz.b, {
            options: qC.dropdownOptions.map((CC => (0, EQ.f)(CC))),
            value: ZC,
            onChange: zC => {
              let {
                value: ZC
              } = zC;
              wC(ZC), CC && bC(ZC)
            }
          })
        })
      }
      return "player" === qC.type ? (0, WC.jsx)(Nb, {
        userInput: qC,
        currInput: ZC,
        updateInput: wC
      }) : "color" === qC.type ? (0, WC.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, WC.jsx)("input", {
          type: "color",
          value: ZC,
          onChange: CC => {
            wC(CC.target.value)
          }
        })
      }) : null
    }

    function Nb(CC) {
      let {
        userInput: zC,
        currInput: ZC,
        updateInput: QC
      } = CC;
      const wC = (0, hz.f)("players"),
        bC = (0, hz.f)("hiddenPlayerNames"),
        nC = (0, EQ.i)(wC.ids, wC.localId, zC);
      return (0, WC.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, WC.jsx)(iz.b, {
          options: nC.map((CC => {
            const {
              name: zC
            } = wC.byId[CC];
            return {
              value: CC,
              label: null === zC ? "" : (0, sQ.g)(zC, bC)
            }
          })),
          value: ZC,
          onChange: CC => {
            let {
              value: zC
            } = CC;
            QC(zC)
          }
        })
      })
    }

    function Mb(CC) {
      let {
        ids: zC
      } = CC;
      return zC
    }

    function gb(CC) {
      let {
        localId: zC
      } = CC;
      return zC
    }

    function Sb(CC) {
      let {
        iconName: zC
      } = CC;
      return GC.gameBridge.lookup("isItemName", zC) ? (0, WC.jsx)(cQ.e, {
        itemName: zC,
        amount: 1
      }) : (0, WC.jsx)(fC.c, {
        name: zC,
        className: "2x"
      })
    }
    var pb = ZC(1557);
    const Pb = (0, ZC(1357).g)((CC => CC.PadLobbyShortcuts)),
      Gb = (0, QC.lazy)((() => Promise.resolve().then((() => ZC(4591))).then((CC => ({
        default: CC.Lobbyleaderboard
      }))))),
      Rb = (0, QC.lazy)((() => ZC.e(220).then((() => ZC(40915))).then((CC => ({
        default: CC.LobbyManageView
      })))));

    function Ab(CC) {
      let {
        show: zC
      } = CC;
      return zC ? (0, WC.jsx)(xb, {}) : null
    }

    function xb() {
      const CC = (0, DQ.e)();
      return (0, WC.jsxs)(WC.Fragment, {
        children: [(0, WC.jsx)(Pb, {}), (0, WC.jsxs)(QC.Suspense, {
          fallback: (0, WC.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, WC.jsx)(JC.d, {})
          }),
          children: [CC && (0, WC.jsx)(Rb, {
            leaderboard: (0, WC.jsx)(Gb, {})
          }), !CC && (0, WC.jsx)(Gb, {})]
        })]
      })
    }
    var Jb = ZC(1493),
      Ib = ZC(3007),
      ib = ZC(1645),
      vb = ZC(3059),
      eb = ZC(2676),
      hb = ZC(1434),
      Kb = ZC(1392),
      Yb = ZC(2991),
      db = ZC(3002),
      mb = ZC(2276);
    const Hb = "storeRecentGiftRecipients",
      Eb = new Map;

    function lb() {
      try {
        const CC = QZ.i.getItem(Hb);
        return Array.isArray(CC) ? CC.filter((CC => "string" === typeof(null === CC || void 0 === CC ? void 0 : CC.name) && CC.name.length > 0)).map((CC => ({
          name: CC.name,
          cosmetics: CC.cosmetics && "object" === typeof CC.cosmetics ? CC.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Xb(CC) {
      var zC;
      const [ZC, wC] = (0, QC.useState)(""), [bC, nC] = (0, QC.useState)("search"), [fC, oC] = (0, QC.useState)(null), [qC, FC] = (0, QC.useState)(null), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(null);
      (0, QC.useEffect)((() => () => {
        WC.current && clearTimeout(WC.current)
      }), []);
      const MC = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.name) && void 0 !== zC ? zC : null;

      function gC() {
        WC.current && (clearTimeout(WC.current), WC.current = null)
      }(0, QC.useEffect)((() => {
        if (null === MC || CC === KC.NULL_USER_CONTEXT) return;
        const zC = MC.toLowerCase();
        if (zC === CC.getPlayerName().toLowerCase()) return void FC({
          name: MC,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ZC = Eb.get(zC);
        if (ZC) return void FC({
          name: MC,
          result: ZC
        });
        let QC = !1;
        return async function(CC, zC) {
          try {
            const ZC = await (0, KC.postJsonWithMetricsCookiesAndJsonResponse)(`${nz.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: zC
            }, {
              retries: 1
            }, CC.getMetricsCookies());
            if ("boolean" !== typeof(null === ZC || void 0 === ZC ? void 0 : ZC.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ZC)}`);
            return ZC
          } catch (ZC) {
            return console.error("Failed to look up gift recipient:", ZC), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(CC, MC).catch((CC => (console.error("Gift recipient lookup failed:", CC), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((CC => {
          !0 !== CC.giftRecipientFound && "store:giftRecipientLookupFailed" === CC.giftRecipientError || Eb.set(zC, CC), QC || FC({
            name: MC,
            result: CC
          })
        })), () => {
          QC = !0
        }
      }), [MC, CC]);
      const SC = (0, QC.useMemo)((() => {
        const CC = ZC.trim();
        if (!CC) return {
          status: "none"
        };
        if (!fC || fC.name !== CC || (null === qC || void 0 === qC ? void 0 : qC.name) !== fC.name) return {
          status: "pending",
          name: CC
        };
        const zC = qC.result;
        return !1 === zC.giftRecipientFound ? {
          status: "error",
          name: fC.name,
          error: zC.giftRecipientError
        } : {
          status: "found",
          name: zC.giftRecipientName,
          ownedPacks: zC.giftRecipientOwnedPacks,
          hasSuperRank: zC.giftRecipientHasSuperRank,
          isSubscriber: zC.giftRecipientIsSubscriber
        }
      }), [ZC, fC, qC]);
      (0, QC.useEffect)((() => {
        "found" === SC.status && "typed" === (null === fC || void 0 === fC ? void 0 : fC.source) && NC.current !== SC.name && (NC.current = SC.name, (0, kC.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [SC, fC]);
      const pC = (null === qC || void 0 === qC ? void 0 : qC.name) === (null === fC || void 0 === fC ? void 0 : fC.name) ? null === qC || void 0 === qC ? void 0 : qC.result : null,
        PC = !0 === (null === pC || void 0 === pC ? void 0 : pC.giftRecipientFound) ? pC.giftRecipientCosmetics : null;
      return {
        query: ZC,
        via: bC,
        recipient: SC,
        recipientCosmetics: PC,
        type: function(CC) {
          wC(CC), nC("search"), gC();
          const zC = CC.trim();
          zC ? WC.current = setTimeout((() => {
            oC({
              name: zC,
              source: "typed"
            })
          }), 400) : oC(null)
        },
        choose: function(CC, zC) {
          gC(), wC(CC), nC("typed" === zC ? "search" : "prefilled" === zC ? "prefilled" : "suggestion"), oC({
            name: CC,
            source: zC
          }), "typed" !== zC && "prefilled" !== zC && (0, kC.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: zC
          })
        },
        clear: function() {
          gC(), wC(""), nC("search"), oC(null)
        },
        recordGift: function(CC, zC) {
          ! function(CC) {
            Eb.delete(CC.toLowerCase())
          }(CC), FC((ZC => {
            if (!ZC || ZC.name.toLowerCase() !== CC.toLowerCase() || !0 !== ZC.result.giftRecipientFound || "superRank" === zC) return ZC;
            const QC = ZC.result.giftRecipientOwnedPacks;
            return {
              ...ZC,
              result: {
                ...ZC.result,
                giftRecipientOwnedPacks: QC.includes(zC) ? QC : [...QC, zC]
              }
            }
          }))
        }
      }
    }
    var cb = ZC(2272),
      ub = ZC(4599),
      rb = ZC(239),
      sb = ZC(3101);
    const Tb = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var ab = ZC(2213),
      tb = ZC(583),
      Db = ZC(2318),
      jb = ZC(2575);

    function yb(CC) {
      let {
        cosmetics: zC
      } = CC;
      return (0, WC.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, WC.jsx)(Db.c, {
          cosmetics: zC
        })
      })
    }

    function Lb(CC, zC) {
      var ZC, QC;
      const wC = null !== (ZC = CC.friend) && void 0 !== ZC ? ZC : {
        isError: !1,
        name: CC.name,
        ranks: [],
        cosmetics: null !== (QC = CC.cosmetics) && void 0 !== QC ? QC : {},
        nameColour: tb.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return zC ? {
        ...wC,
        cosmetics: zC
      } : wC
    }

    function Ub(CC) {
      let {
        pending: zC
      } = CC;
      return (0, WC.jsx)("span", {
        className: "StoreRecipientLoader",
        children: zC && (0, WC.jsx)(JC.d, {})
      })
    }

    function Bb(CC) {
      var zC;
      let {
        selfName: ZC,
        giftRecipient: wC,
        suggestionsVersion: oC,
        pulseSignal: FC,
        disabled: NC
      } = CC;
      const {
        t: MC
      } = (0, nC.y)(), gC = (0, aC.k)(), SC = (0, QC.useRef)(null), pC = (0, QC.useRef)(null), {
        query: GC,
        via: RC,
        recipient: AC,
        recipientCosmetics: JC
      } = wC, IC = (0, mb.m)(GC), iC = (0, QC.useMemo)((() => {
        const CC = PC.featureFlags.useSocialFeatures ? gC.friends.filter((CC => !CC.isError)) : [];
        return (0, mb.g)({
          onlineFriends: (0, aC.f)(CC),
          recentRecipients: lb(),
          friends: CC,
          selfName: ZC,
          max: 8
        })
      }), [gC.friends, ZC, oC]), vC = GC.trim().toLowerCase(), eC = "search" !== RC && vC ? iC.find((CC => CC.name.toLowerCase() === vC)) : void 0, hC = eC && "prefilled" === RC ? [eC, ...iC.filter((CC => CC !== eC))] : iC, KC = "" !== vC && !eC, YC = KC ? GC : "", dC = hC.length > 0;
      (0, QC.useEffect)((() => {
        SC.current && SC.current.value !== YC && (SC.current.value = YC)
      }), [YC]), (0, QC.useEffect)((() => {
        SC.current && (SC.current.disabled = NC)
      }), [NC, FC]);
      const mC = (0, QC.useRef)(0);

      function EC() {
        "self" !== IC && (0, kC.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), wC.clear()
      }

      function lC(CC) {
        var zC, ZC;
        if (NC) return;
        if (" " === CC.key || "Enter" === CC.key) return CC.preventDefault(), void CC.currentTarget.click();
        const QC = Array.from(null !== (zC = null === (ZC = pC.current) || void 0 === ZC ? void 0 : ZC.querySelectorAll("[role=radio]")) && void 0 !== zC ? zC : []),
          wC = QC.indexOf(CC.currentTarget);
        let bC;
        "ArrowRight" === CC.key || "ArrowDown" === CC.key ? bC = QC[(wC + 1) % QC.length] : "ArrowLeft" === CC.key || "ArrowUp" === CC.key ? bC = QC[(wC - 1 + QC.length) % QC.length] : "Home" === CC.key ? bC = QC[0] : "End" === CC.key && (bC = QC[QC.length - 1]), bC && (CC.preventDefault(), bC.focus(), bC.click())
      }(0, QC.useEffect)((() => {
        var CC;
        FC > mC.current && !NC && (mC.current = FC, null === (CC = SC.current) || void 0 === CC || CC.focus())
      }), [FC, NC]);
      const XC = "self" === IC,
        cC = null !== (zC = null === eC || void 0 === eC ? void 0 : eC.name) && void 0 !== zC ? zC : null,
        uC = "error" === AC.status ? AC.error : null,
        rC = "store:giftRecipientLookupFailed" === uC;
      return (0, WC.jsxs)("div", {
        className: bC()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: NC,
          StoreRecipientStripNoChips: !dC
        }),
        children: [(0, WC.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: MC("store:buyingFor")
        }), (0, WC.jsxs)("div", {
          ref: pC,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": MC("store:whoIsItFor"),
          children: [(0, WC.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": XC,
            tabIndex: NC || !XC && null !== cC ? -1 : 0,
            className: bC()("StoreRecipientMe", {
              StoreRecipientChecked: XC
            }),
            onClick: () => {
              NC || EC()
            },
            onKeyDown: lC,
            children: [(0, WC.jsx)(fC.c, {
              name: "user"
            }), " ", MC("store:me")]
          }), dC && (0, WC.jsx)("div", {
            className: "StoreRecipientChips",
            children: hC.map((CC => {
              const zC = CC === eC;
              return (0, WC.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": zC,
                tabIndex: !NC && zC ? 0 : -1,
                title: CC.name,
                className: bC()("StoreRecipientChip", {
                  StoreRecipientChecked: zC
                }),
                onClick: () => {
                  NC || function(CC) {
                    "gift" !== IC && (0, kC.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), wC.choose(CC.name, CC.kind)
                  }(CC)
                },
                onKeyDown: lC,
                children: (0, WC.jsx)(jb.f, {
                  playerSocialPreview: Lb(CC, zC ? JC : null),
                  opensProfileCard: !1,
                  isFriend: null !== CC.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== CC.friend,
                  status: null === CC.friend ? null : void 0,
                  trailing: zC ? (0, WC.jsx)(Ub, {
                    pending: "pending" === AC.status
                  }) : void 0
                })
              }, CC.name)
            }))
          })]
        }), (0, WC.jsxs)("div", {
          className: bC()("StoreRecipientSearch", {
            StoreRecipientChecked: KC,
            StoreRecipientSearchPulse: FC > 0 && !KC,
            StoreRecipientSearchError: null !== uC && !rC
          }),
          onClick: () => {
            var CC;
            null === (CC = SC.current) || void 0 === CC || CC.focus()
          },
          children: [KC && "found" === AC.status && JC && (0, WC.jsx)(yb, {
            cosmetics: JC
          }), !(KC && "found" === AC.status && JC) && (0, WC.jsx)(fC.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, WC.jsx)(xC.c, {
            className: "StoreRecipientSearchInput",
            domRef: SC,
            placeholderText: MC("store:searchName"),
            defaultValue: YC,
            maxLength: HC.i,
            onValueChange: function(CC) {
              "gift" !== IC && CC.trim() && (0, kC.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), wC.type(CC)
            },
            onEnter: () => {
              var CC;
              const zC = null === (CC = SC.current) || void 0 === CC ? void 0 : CC.value.trim();
              zC && wC.choose(zC, "typed")
            },
            blurOnEnter: !0
          }), KC && (0, WC.jsx)(Ub, {
            pending: "pending" === AC.status
          }), KC && (0, WC.jsx)("div", {
            ...(0, qC.U)({
              disabled: NC
            }),
            "aria-label": MC("store:clearRecipient"),
            title: MC("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: CC => {
              CC.stopPropagation(), NC || EC()
            },
            children: (0, WC.jsx)(fC.c, {
              name: "xmark"
            })
          })]
        }, FC), uC && (0, WC.jsx)("div", {
          className: bC()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: rC
          }),
          role: "status",
          children: MC(uC)
        })]
      })
    }
    var Ob = ZC(2268),
      kb = ZC(2182),
      Vb = ZC(3529),
      Cn = ZC(3103),
      zn = ZC(2224);
    const Zn = ZC.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Qn() {
      (0, zn.i)(Zn, {
        lowPriority: !1
      })
    }

    function wn(CC) {
      let {
        onBack: zC,
        cta: ZC,
        recipient: wC,
        afterCta: bC
      } = CC;
      const {
        t: oC
      } = (0, nC.y)(), [FC, NC] = (0, QC.useState)("starting"), MC = (0, QC.useRef)(null), gC = (0, rz.e)(), SC = (0, QC.useRef)(null), pC = (0, QC.useCallback)((() => {
        const CC = MC.current;
        null !== CC.error && CC.load();
        const zC = CC.play();
        SC.current = zC, zC.catch((CC => {
          (0, Vb.c)("Failed to play Super Rank video", CC), gC.current && SC.current === zC && NC("failed")
        }))
      }), [gC]);
      return (0, QC.useEffect)((() => {
        const CC = MC.current;
        let zC;

        function ZC() {
          clearTimeout(zC), zC = setTimeout(pC, 3e3)
        }
        return pC(), CC.addEventListener("ended", ZC), () => {
          clearTimeout(zC), CC.removeEventListener("ended", ZC)
        }
      }), [pC]), (0, WC.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, WC.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, WC.jsx)(qC.c, {
            className: "StoreDetailBackButton",
            onClick: zC,
            padBack: !0,
            children: oC("general:back")
          }), (0, WC.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, WC.jsx)(fC.c, {
              name: "bolt"
            }), " ", oC("homePage:superRank")]
          }), wC]
        }), (0, WC.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, WC.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, WC.jsx)("video", {
              ref: MC,
              src: `${nz.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Zn,
              muted: !0,
              playsInline: !0,
              controls: "playing" === FC,
              onPlaying: () => {
                NC("playing")
              },
              onError: () => {
                NC("failed")
              }
            }), ("failed" === FC || "loading" === FC) && (0, WC.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, WC.jsx)(qC.g, {
                ariaLabel: oC("general:play"),
                loading: "loading" === FC,
                onClick: () => {
                  NC("loading"), pC()
                },
                touchPressOn: "pointerup",
                children: (0, WC.jsx)(fC.c, {
                  name: "play"
                })
              })
            })]
          }), (0, WC.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, WC.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, WC.jsx)(Cn.c, {})
            }), (0, WC.jsxs)("div", {
              className: "StoreTileActions",
              children: [ZC, bC]
            })]
          })]
        })]
      })
    }
    var bn = ZC(2595),
      nn = ZC(3490),
      fn = ZC(3090),
      qn = ZC(3092);
    const Fn = [tb.x.yellow, tb.x.green, tb.x.aqua, tb.x.blue, tb.x.purple, tb.x.red];

    function Wn(CC) {
      return "needsRecipient" === CC || "lookingUp" === CC || "gift" === CC || "recipientOwns" === CC || "recipientSharesOwned" === CC || "recipientSubscribed" === CC
    }

    function Nn(CC) {
      const {
        onKeyDown: zC,
        ...ZC
      } = (0, qC.U)();
      return {
        ...ZC,
        "aria-label": CC,
        onKeyDown: CC => {
          CC.target === CC.currentTarget && (null === zC || void 0 === zC || zC(CC))
        }
      }
    }

    function Mn(CC) {
      let {
        text: zC
      } = CC;
      return (0, WC.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(zC).map(((CC, zC) => (0, WC.jsx)("span", {
          style: {
            color: Fn[zC % Fn.length]
          },
          children: CC
        }, zC)))
      })
    }
    const gn = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Sn(CC) {
      let {
        state: zC,
        item: ZC,
        price: QC,
        busy: wC,
        highlight: oC = !1,
        onAct: FC,
        onNeedRecipient: NC,
        onLogin: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = "superRank" === ZC ? lC.g.product.days : null, pC = CC => null === SC ? gC(CC ? "general:gift" : "general:buy") : gC(CC ? "store:giftDays" : "store:buyDays", {
        days: SC
      }), PC = (CC, zC) => {
        const ZC = (0, WC.jsxs)(WC.Fragment, {
          children: [null === CC && (0, WC.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== CC && (0, WC.jsx)("span", {
            className: "StoreCtaLabel",
            title: CC,
            children: CC
          })]
        });
        return null !== SC ? (0, WC.jsxs)(WC.Fragment, {
          children: [zC && (0, WC.jsx)("span", {
            className: "StoreCtaIcon",
            children: zC
          }), ZC, (0, WC.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, WC.jsx)(kb.d, {
              amount: QC
            })]
          })]
        }) : (0, WC.jsxs)(WC.Fragment, {
          children: [(0, WC.jsxs)("span", {
            className: "StoreCtaLead",
            children: [ZC, "\xb7"]
          }), (0, WC.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [zC, (0, WC.jsx)(kb.d, {
              amount: QC
            })]
          })]
        })
      };
      let GC;
      switch (zC) {
        case "pending":
          GC = (0, WC.jsx)(qC.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: PC(null)
          });
          break;
        case "login":
          GC = (0, WC.jsx)(qC.o, {
            className: "StoreCtaButton",
            onClick: MC,
            children: PC(pC(!1))
          });
          break;
        case "owned":
          GC = (0, WC.jsx)(qC.i, {
            className: "StoreCtaButton",
            onClick: () => {
              iC.b.set({
                openEverythingMenuName: Fz.o.CUSTOMISATION
              })
            },
            children: (0, WC.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, WC.jsx)(fC.c, {
                name: "shirt"
              }), " ", gC("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          GC = (0, WC.jsx)(qC.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, WC.jsx)("span", {
              className: "StoreCtaLabel",
              children: gC(gn[zC])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          GC = (0, WC.jsx)(qC.o, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === zC || null === QC,
            loading: "lookingUp" === zC || wC,
            onClick: FC,
            analyticsClick: {
              id: "store.gift",
              value: ZC
            },
            children: PC(pC(!0), mb.b)
          });
          break;
        case "buy":
        case "recharge":
          GC = (0, WC.jsx)(qC.o, {
            className: "StoreCtaButton",
            loading: wC,
            disabled: null === QC,
            onClick: FC,
            analyticsClick: {
              id: "store.buy",
              value: ZC
            },
            children: PC(pC(!1))
          })
      }
      return (0, WC.jsx)("div", {
        className: bC()("StoreCta", {
          StoreCtaHighlight: oC,
          StoreCtaLabelFirst: null !== SC
        }),
        onClick: CC => {
          CC.stopPropagation(), "needsRecipient" === zC && NC()
        },
        children: GC
      })
    }

    function pn() {
      const {
        t: CC
      } = (0, nC.y)();
      return (0, WC.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, WC.jsxs)("li", {
          children: [(0, WC.jsx)(fC.c, {
            name: "check"
          }), (0, WC.jsx)(Mn, {
            text: CC("store:colourfulNames")
          })]
        }), (0, WC.jsxs)("li", {
          children: [(0, WC.jsx)(fC.c, {
            name: "check"
          }), CC("store:perkCapes")]
        }), (0, WC.jsxs)("li", {
          children: [(0, WC.jsx)(fC.c, {
            name: "check"
          }), CC("store:perkNoAdverts")]
        }), (0, WC.jsxs)("li", {
          children: [(0, WC.jsx)(fC.c, {
            name: "check"
          }), CC("store:perkFriends", {
            count: (0, BC.b)(["super"])
          })]
        })]
      })
    }

    function Pn(CC) {
      let {
        daysLeft: zC,
        totalDays: ZC,
        urgent: QC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)(), fC = ZC > 0 ? Math.min(1, Math.max(.03, zC / ZC)) : 1;
      return (0, WC.jsxs)("div", {
        className: bC()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: QC
        }),
        children: [(0, WC.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === zC ? wC("store:oneDayLeft") : wC("store:daysLeft", {
            days: zC
          })
        }), (0, WC.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, WC.jsx)("i", {
            style: {
              width: 100 * fC + "%"
            }
          })
        })]
      })
    }

    function Gn(CC) {
      let {
        state: zC,
        urgent: ZC,
        daysLeft: QC,
        totalDays: wC,
        recipientHasSuperRank: oC,
        busy: qC,
        highlight: FC,
        onOpen: NC,
        onAct: MC,
        onNeedRecipient: gC,
        onLogin: SC
      } = CC;
      const {
        t: pC
      } = (0, nC.y)(), PC = Wn(zC), {
        days: GC
      } = lC.g.product, RC = pC("store:recipientHasSuperRank", {
        giftDays: GC
      }), AC = LC("subscribed" === zC);
      return (0, WC.jsxs)("div", {
        className: bC()("StoreTile StoreSuperRankTile", {
          StoreTileGift: PC,
          StoreSuperRankTileUrgent: "recharge" === zC && ZC,
          StoreSuperRankTileWithChip: oC,
          StoreSuperRankTileGiftReady: "gift" === zC
        }),
        ...Nn(pC("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Qn,
        onFocus: Qn,
        onClick: NC,
        children: [(0, WC.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${ab.c})`
          }
        }), PC && (0, WC.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, WC.jsxs)("div", {
          className: "StoreTileContent",
          children: [oC && (0, WC.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: RC,
            children: RC
          }), (0, WC.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, WC.jsx)(fC.c, {
              name: "bolt"
            }), " ", pC("homePage:superRank")]
          }), PC && (0, WC.jsx)("div", {
            className: "StoreTilePitch",
            children: pC("store:giftPitch", {
              days: GC
            })
          }), "recharge" === zC && (0, WC.jsx)(Pn, {
            daysLeft: QC,
            totalDays: wC,
            urgent: ZC
          }), AC && (0, WC.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, WC.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: AC
            })
          }), (0, WC.jsx)(pn, {}), (0, WC.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, WC.jsx)(Sn, {
              state: zC,
              item: "superRank",
              price: lC.g.price,
              busy: qC,
              highlight: FC,
              onAct: MC,
              onNeedRecipient: gC,
              onLogin: SC
            }), "needsRecipient" === zC && (0, WC.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: pC("store:pickRecipientFirst")
            }), "recharge" === zC && ZC && (0, WC.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === QC ? pC("store:endsInOneDay") : pC("store:endsInDays", {
                days: QC
              })
            })]
          })]
        })]
      })
    }
    const Rn = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function An(CC) {
      var zC;
      let {
        pack: ZC,
        state: wC,
        busy: oC,
        onOpen: qC,
        onAct: FC,
        onNeedRecipient: NC,
        onLogin: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = Jb.d[ZC], pC = Yb.g[ZC], PC = (0, ab.k)(ZC), GC = (0, QC.useRef)(null);
      (0, fn.l)(ZC, GC);
      const RC = Wn(wC),
        AC = null !== (zC = SC.displayName) && void 0 !== zC ? zC : ZC,
        xC = (0, nn.d)((() => {
          (0, bn.f)();
          const CC = (0, fn.e)(ZC);
          void 0 !== CC && (0, zn.i)((0, fn.c)(CC))
        })),
        [JC] = (0, QC.useState)(sb.k);
      return (0, WC.jsxs)("div", {
        className: bC()("StoreTile StorePackTile", Rn[SC.tier], {
          StorePackTileOwned: "owned" === wC,
          StorePackTileRecipientOwns: "recipientOwns" === wC,
          StoreTileGift: RC
        }),
        ...Nn(AC),
        ref: GC,
        "data-store-item": ZC,
        onClick: qC,
        onPointerMove: CC => {
          "mouse" !== CC.pointerType || 0 === CC.movementX && 0 === CC.movementY || JC || xC.start()
        },
        onPointerLeave: xC.cancel,
        children: [pC && (0, WC.jsx)(pC, {}), (0, WC.jsx)("div", {
          className: "StorePackCharacters",
          children: PC.map((CC => (0, WC.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,ab.g)(CC)})`
            }
          }, CC)))
        }), (0, WC.jsx)("div", {
          className: "StoreTileScrim"
        }), RC && (0, WC.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, WC.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, WC.jsx)("div", {
            className: "StoreTileTitle",
            children: AC
          }), (0, WC.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, WC.jsx)(qn.e, {
              tier: SC.tier
            }), " \xb7 ", gC("store:itemCount", {
              count: (0, Ob.c)(ZC)
            }), "owned" === wC && (0, WC.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, WC.jsx)(fC.c, {
                name: "check"
              }), " ", gC("general:owned")]
            })]
          }), (0, WC.jsx)(Sn, {
            state: wC,
            item: ZC,
            price: (0, lC.d)(ZC),
            busy: oC,
            onAct: FC,
            onNeedRecipient: NC,
            onLogin: MC
          })]
        })]
      })
    }
    var xn = ZC(3067),
      Jn = ZC(1484),
      In = ZC(1394),
      vn = ZC(3514);

    function en() {
      return (0, WC.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var hn = ZC(1299),
      Kn = ZC(1501),
      Yn = ZC(34185);

    function dn(CC) {
      let {
        character: zC,
        drawn: ZC,
        onDrawn: wC
      } = CC;
      const nC = (0, QC.useRef)(null),
        fC = (0, Yn.g)(zC);
      return (0, WC.jsx)("div", {
        className: bC()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: ZC
        }),
        children: (0, WC.jsx)(QC.Suspense, {
          fallback: null,
          children: (0, WC.jsx)(bn.c, {
            ref: nC,
            framing: "store",
            turntableFromYaw: ZC ? fC.yaw : null,
            onReady: () => {
              var CC, ZC;
              null === (CC = nC.current) || void 0 === CC || CC.setOrbit(fC), null === (ZC = nC.current) || void 0 === ZC || ZC.setAllCosmetics(Kn.b[zC].cosmetics)
            },
            onDrawn: wC
          })
        })
      })
    }
    const mn = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Hn = new Set(["wildSpirits"]);

    function En(CC) {
      var zC;
      let {
        tile: ZC,
        design: wC,
        canGoLive: oC,
        live: qC,
        busy: FC,
        highlight: NC,
        onLiveStart: MC,
        onLiveEnd: gC,
        onOpen: SC,
        onAct: pC,
        onNeedRecipient: PC,
        onLogin: GC
      } = CC;
      const {
        t: RC
      } = (0, nC.y)(), {
        pack: AC,
        state: xC
      } = ZC, JC = Jb.d[AC], IC = (0, Jb.e)(AC), iC = (0, ab.i)(AC), vC = Yb.g[iC], eC = Hn.has(iC), {
        tier: hC
      } = JC, KC = "legendary" === hC || "mythic" === hC, YC = (0, QC.useRef)(null);
      (0, hn.c)(YC, "epic" === hC || KC || eC);
      const [dC, HC] = (0, QC.useState)(!1);
      return !qC && dC && HC(!1), (0, WC.jsxs)("div", {
        ref: YC,
        className: bC()("StoreCharacterCard", `StoreCharacterCard${wC}`, mn[hC], {
          StoreCharacterCardOwned: "owned" === xC || "recipientOwns" === xC,
          StoreCharacterCardGift: Wn(xC),
          StoreCharacterCardItem: void 0 === IC
        }),
        onPointerMove: CC => {
          "mouse" !== CC.pointerType || 0 === CC.movementX && 0 === CC.movementY || !oC || qC || void 0 === IC || MC()
        },
        onPointerLeave: gC,
        children: [(0, WC.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: vC && (0, WC.jsx)(vC, {
            simple: !0
          })
        }), KC && (0, WC.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, WC.jsxs)(mC.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Jn.i)({
            kind: "pack",
            pack: AC
          }),
          "data-store-item": AC,
          onClick: CC => {
            (0, In.d)(CC) && (CC.preventDefault(), SC())
          },
          children: [(0, WC.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, WC.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, WC.jsx)("div", {
              className: bC()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: dC
              }),
              style: {
                backgroundImage: `url(${(0,ab.o)(AC)})`
              }
            }), qC && void 0 !== IC && (0, WC.jsx)(dn, {
              character: IC,
              drawn: dC,
              onDrawn: () => {
                HC(!0)
              }
            })]
          }), (0, WC.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (zC = JC.displayName) && void 0 !== zC ? zC : AC
          }), (0, WC.jsx)(qn.e, {
            tier: hC,
            className: "StoreCharacterTier"
          })]
        }), (0, WC.jsx)("div", {
          className: "StoreCharacterScrim"
        }), eC && (0, WC.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, WC.jsx)(en, {})
        }), "owned" === xC && (0, WC.jsx)("span", {
          className: "StoreCharacterOwned",
          title: RC("general:owned"),
          "aria-label": RC("general:owned"),
          children: (0, WC.jsx)(fC.c, {
            name: "check"
          })
        }), (0, WC.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, WC.jsx)(Sn, {
            state: xC,
            item: AC,
            price: (0, lC.d)(AC),
            busy: FC,
            highlight: NC,
            onAct: pC,
            onNeedRecipient: PC,
            onLogin: GC
          })
        })]
      })
    }

    function Xn(CC) {
      let {
        tiles: zC,
        busy: ZC,
        highlightItem: wC,
        onOpen: bC,
        onAct: nC,
        onNeedRecipient: fC,
        onLogin: oC
      } = CC;
      const qC = (0, vn.k)("storeCharacterCardFoil"),
        FC = (0, vn.k)("storeCharacterCardSpotlight"),
        NC = qC ? "Foil" : FC ? "Spotlight" : "Showcase",
        [MC] = (0, QC.useState)(sb.k),
        [gC, SC] = (0, QC.useState)(null);
      return (0, WC.jsx)("div", {
        className: "StoreCharacterGrid",
        children: zC.map((CC => (0, WC.jsx)(En, {
          tile: CC,
          design: NC,
          canGoLive: !MC,
          live: gC === CC.pack,
          busy: ZC,
          highlight: wC === CC.pack,
          onLiveStart: () => {
            SC(CC.pack)
          },
          onLiveEnd: () => {
            SC((zC => zC === CC.pack ? null : zC))
          },
          onOpen: () => {
            bC(CC.pack)
          },
          onAct: () => {
            nC(CC.pack)
          },
          onNeedRecipient: fC,
          onLogin: () => {
            oC(CC.pack)
          }
        }, CC.pack)))
      })
    }
    var cn = ZC(34202);

    function un(CC) {
      let {
        title: zC
      } = CC;
      return (0, WC.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, WC.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: zC
        })
      })
    }

    function rn(CC) {
      let {
        mountAtOnce: zC,
        children: ZC
      } = CC;
      const wC = (0, QC.useRef)(null),
        [bC, nC] = (0, QC.useState)(zC),
        fC = (0, cn.e)();
      return (0, QC.useLayoutEffect)((() => {
        const CC = wC.current;
        CC && CC.getBoundingClientRect().top < CC.parentElement.getBoundingClientRect().bottom && nC(!0)
      }), []), bC || fC ? (0, WC.jsx)(WC.Fragment, {
        children: ZC
      }) : (0, WC.jsx)("div", {
        ref: wC
      })
    }

    function sn(CC) {
      let {
        layout: zC,
        mountAtOnce: ZC,
        bundleGift: QC,
        superRankTotalDays: wC,
        busy: bC,
        highlightItem: fC,
        onOpen: oC,
        onAct: qC,
        onNeedRecipient: FC,
        onLogin: NC,
        dailyDropTile: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = zC.packs.filter((CC => void 0 === (0, Jb.e)(CC.pack) && !(0, Jb.h)(CC.pack))), pC = zC.packs.filter((CC => void 0 !== (0, Jb.e)(CC.pack))), PC = zC.packs.filter((CC => (0, Jb.h)(CC.pack)));
      return (0, WC.jsxs)(WC.Fragment, {
        children: [(0, WC.jsx)(xn.d, {
          className: "StoreSuperGems",
          gift: QC,
          highlightSku: fC,
          leadingTile: MC
        }), (0, WC.jsx)(un, {
          title: gC("store:rank")
        }), (0, WC.jsx)(Gn, {
          state: zC.superRank.state,
          urgent: zC.superRank.urgent,
          daysLeft: zC.superRankDaysLeft,
          totalDays: wC,
          recipientHasSuperRank: zC.recipientHasSuperRank,
          busy: bC,
          highlight: "superRank" === fC,
          onOpen: () => {
            oC("superRank")
          },
          onAct: () => {
            qC("superRank")
          },
          onNeedRecipient: FC,
          onLogin: () => {
            NC("superRank")
          }
        }), (0, WC.jsxs)(rn, {
          mountAtOnce: ZC,
          children: [(0, WC.jsx)(un, {
            title: gC("store:bundles")
          }), (0, WC.jsx)("div", {
            className: "StorePackGrid",
            children: SC.map((CC => (0, WC.jsx)(An, {
              pack: CC.pack,
              state: CC.state,
              busy: bC,
              onOpen: () => {
                oC(CC.pack)
              },
              onAct: () => {
                qC(CC.pack)
              },
              onNeedRecipient: FC,
              onLogin: () => {
                NC(CC.pack)
              }
            }, CC.pack)))
          }), (0, WC.jsxs)(rn, {
            mountAtOnce: ZC,
            children: [(0, WC.jsx)(un, {
              title: gC("store:characters")
            }), (0, WC.jsx)(Xn, {
              tiles: pC,
              busy: bC,
              highlightItem: fC,
              onOpen: oC,
              onAct: qC,
              onNeedRecipient: FC,
              onLogin: NC
            }), PC.length > 0 && (0, WC.jsxs)(WC.Fragment, {
              children: [(0, WC.jsx)(un, {
                title: gC("store:premiumItems")
              }), (0, WC.jsx)(Xn, {
                tiles: PC,
                busy: bC,
                highlightItem: fC,
                onOpen: oC,
                onAct: qC,
                onNeedRecipient: FC,
                onLogin: NC
              })]
            })]
          })]
        })]
      })
    }

    function Tn(CC) {
      let {
        state: zC,
        mode: ZC,
        giftName: QC,
        busy: wC,
        highlight: bC,
        purchaseError: fC,
        onBack: oC,
        onChooseRecipient: FC,
        onAct: NC,
        onLogin: MC
      } = CC;
      const {
        t: gC
      } = (0, nC.y)(), SC = LC("gift" !== ZC);
      return (0, WC.jsx)(wn, {
        onBack: oC,
        recipient: "gift" === ZC && (0, WC.jsxs)(WC.Fragment, {
          children: [QC && (0, WC.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: gC("store:giftFor", {
              name: QC
            }),
            children: [mb.b, " ", gC("store:giftFor", {
              name: QC
            })]
          }), !QC && (0, WC.jsxs)("div", {
            ...(0, qC.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: FC,
            children: [mb.b, " ", gC("store:chooseRecipient")]
          })]
        }),
        cta: (0, WC.jsx)(Sn, {
          state: zC,
          item: "superRank",
          price: lC.g.price,
          busy: wC,
          highlight: bC,
          onAct: NC,
          onNeedRecipient: FC,
          onLogin: MC
        }),
        afterCta: (0, WC.jsxs)(WC.Fragment, {
          children: [SC && (0, WC.jsx)("span", {
            className: "StoreTileNote",
            children: SC
          }), fC && (0, WC.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: gC(fC)
          })]
        })
      })
    }
    var an = ZC(123);
    const tn = an.l("kind", [an.C({
      kind: an.r("refused"),
      heldTierId: an.P(),
      until: an.y()
    }), an.C({
      kind: an.r("refund"),
      tierId: an.P(),
      refundedMs: an.y(),
      forfeitedMs: an.y(),
      premiumCurrency: an.y()
    }), an.C({
      kind: an.r("none")
    })]);
    async function Dn(CC) {
      const zC = await (0, KC.postJsonWithMetricsCookiesAndJsonResponse)(`${nz.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: CC
      }, {
        retries: 1
      });
      return tn.parse(zC)
    }
    var jn = ZC(3032),
      yn = ZC(3070);

    function Ln(CC, zC) {
      const ZC = Math.max(1, Math.round(zC / uC.e));
      return [1 === ZC ? `${CC}OneDay` : CC, {
        days: ZC.toLocaleString()
      }]
    }

    function Un() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, sC.purchasesAllowed)() ? (0, WC.jsx)(Bn, {}) : null
    }

    function Bn() {
      const {
        t: CC
      } = (0, nC.y)(), {
        userContext: zC
      } = (0, gC.e)(), {
        purchaseUnderWay: ZC,
        notice: wC,
        subscribe: bC
      } = (0, jn.b)(), [fC, oC] = (0, QC.useState)(null), [FC, NC] = (0, QC.useState)(0), [MC, SC] = (0, QC.useState)(!1), pC = (0, QC.useRef)(!0), PC = zC !== KC.NULL_USER_CONTEXT, GC = null !== fC && fC.loadedFor === zC ? fC.offer : null, RC = null === wC || void 0 === wC ? void 0 : wC.pendingIntentId, AC = (0, QC.useRef)(RC);

      function xC() {
        NC((CC => CC + 1))
      }
      async function JC(CC) {
        SC(!1), await bC(CC), pC.current && xC()
      }
      if ((0, QC.useEffect)((() => (pC.current = !0, () => {
          pC.current = !1
        })), []), (0, QC.useEffect)((() => {
          void 0 !== AC.current && void 0 === RC && xC(), AC.current = RC
        }), [RC]), (0, QC.useEffect)((() => {
          if (!PC) return;
          let CC = !1;
          return SC(!1), async function() {
            const {
              offering: CC
            } = await (0, oz.g)().getOfferings("superRankPage"), zC = null === CC || void 0 === CC ? void 0 : CC.packages.find((CC => null !== CC.price));
            return void 0 === zC ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: zC,
              preview: await Dn(zC.productId)
            }
          }().catch((CC => (console.error("Billing: loading the Super Rank subscription or its preview failed:", CC), {
            kind: "loadFailed"
          }))).then((ZC => {
            CC || oC((CC => "loadFailed" === ZC.kind && (null === CC || void 0 === CC ? void 0 : CC.loadedFor) === zC ? CC : {
              loadedFor: zC,
              offer: ZC
            }))
          })), () => {
            CC = !0
          }
        }), [zC, PC, FC]), null === GC) return null;
      if ("loaded" !== GC.kind) return (0, WC.jsx)(yn.f, {
        notice: {
          kind: "error",
          key: "unavailable" === GC.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: IC,
        preview: iC
      } = GC;
      if ("refused" === iC.kind) return (0, WC.jsx)(yn.f, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(iC.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const vC = (0, xn.h)(IC.price);
      if (MC && "refund" === iC.kind) {
        const {
          refundedMs: zC,
          forfeitedMs: QC,
          premiumCurrency: wC
        } = iC, bC = QC + (0 === wC ? zC : 0), [nC, fC] = Ln("payments:subscribeRefundsGemRank", zC), [oC, FC] = Ln("payments:subscribeForfeitsGemRank", bC);
        return (0, WC.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, WC.jsx)("div", {
            children: CC("payments:subscribeEndsGemRank")
          }), wC > 0 && (0, WC.jsx)("div", {
            children: CC(nC, {
              ...fC,
              amount: wC.toLocaleString()
            })
          }), bC > 0 && (0, WC.jsx)("div", {
            children: CC(oC, FC)
          }), (0, WC.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, WC.jsx)(qC.i, {
              onClick: () => {
                SC(!1)
              },
              children: CC("general:cancel")
            }), (0, WC.jsx)(qC.o, {
              onClick: () => {
                JC(IC)
              },
              loading: ZC,
              children: CC("payments:subscribeContinue", {
                price: vC
              })
            })]
          })]
        })
      }
      return (0, WC.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, WC.jsx)(yn.f, {
          notice: wC,
          className: "SmallTextBold"
        }), (0, WC.jsx)(yn.d, {
          className: "SmallTextBold"
        }), (0, WC.jsx)(qC.o, {
          onClick: () => {
            "refund" === iC.kind ? SC(!0) : JC(IC)
          },
          disabled: void 0 !== RC,
          loading: ZC,
          children: CC("payments:subscribeToSuperRank", {
            price: vC
          })
        })]
      })
    }
    var On = ZC(2537);

    function kn(CC) {
      let {
        state: zC,
        view: ZC,
        claiming: wC,
        onOpen: fC
      } = CC;
      const {
        t: FC
      } = (0, nC.y)(), NC = (0, QC.useRef)(null), MC = "ready" === ZC.kind;
      (0, hn.c)(NC, MC);
      const gC = (0, az.k)(zC);
      return (0, WC.jsxs)("div", {
        ref: NC,
        className: bC()("DailyDropTile", {
          DailyDropTileReady: MC
        }),
        children: [MC && (0, WC.jsx)(oC.d, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, WC.jsx)("div", {
          className: "DailyDropTileTitle",
          children: FC("dailyDrop:name")
        }), (0, WC.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, WC.jsx)(On.d, {
            className: "DailyDropTileBlock"
          }), (0, WC.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, WC.jsx)("span", {
              children: FC("dailyDrop:collected", {
                count: zC.collected.length,
                total: zC.total
              })
            }), null !== gC && (0, WC.jsx)("span", {
              className: "DailyDropTileOdds",
              children: FC("dailyDrop:odds", {
                percent: gC.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === ZC.kind && (0, WC.jsx)(qC.o, {
          className: "DailyDropTileOpen",
          onClick: fC,
          loading: wC,
          children: FC("dailyDrop:open")
        }), "waiting" === ZC.kind && (0, WC.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: FC("dailyDrop:nextIn", {
            count: ZC.hours
          })
        })]
      })
    }
    var Vn = ZC(2166);
    const Cf = 32;

    function zf(CC) {
      let {
        worn: zC,
        JQ: ZC,
        IQ: wC,
        className: oC
      } = CC;
      const {
        t: qC
      } = (0, nC.y)(), FC = (0, QC.useRef)(null), [NC, MC] = (0, QC.useState)(null), [gC, SC] = (0, QC.useState)(!1);
      async function pC() {
        var CC;
        const zC = FC.current;
        if (!zC) return;
        const QC = null === (CC = zC.getDevTools()) || void 0 === CC ? void 0 : CC.canvas();
        let bC = null;
        try {
          bC = QC ? function(CC) {
            if (0 === CC.width || 0 === CC.height) return null;
            const zC = document.createElement("canvas");
            zC.width = Cf, zC.height = Cf;
            const ZC = zC.getContext("2d", {
              willReadFrequently: !0
            });
            if (!ZC) return null;
            ZC.drawImage(CC, 0, 0, Cf, Cf);
            const {
              data: QC
            } = ZC.getImageData(0, 0, Cf, Cf);
            for (let wC = 3; wC < QC.length; wC += 4)
              if (QC[wC] > 0) return CC.toDataURL("image/png");
            return null
          }(QC) : null
        } catch (fC) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", fC)
        }
        null === bC && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), MC(null === bC ? {
          kind: "head"
        } : {
          kind: "still",
          src: bC
        }), zC.updateCosmetic(ZC, wC);
        const nC = new Promise((CC => {
          setTimeout(CC, 1e4)
        }));
        await Promise.race([zC.ensureReadyForCapture(ZC), nC]).catch((CC => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", CC)
        })), FC.current === zC && SC(!0)
      }
      return (0, WC.jsxs)("div", {
        className: bC()("DailyDropRevealFigures", oC),
        children: [(0, WC.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, WC.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === NC || void 0 === NC ? void 0 : NC.kind) && (0, WC.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: NC.src,
              alt: "",
              draggable: !1
            }), "head" === (null === NC || void 0 === NC ? void 0 : NC.kind) && (0, WC.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, WC.jsx)(Db.c, {
                cosmetics: zC
              })
            }), null === NC && (0, WC.jsx)(JC.d, {})]
          }), (0, WC.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: qC("dailyDrop:before")
          })]
        }), (0, WC.jsx)(fC.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, WC.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, WC.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, WC.jsx)("div", {
              className: bC()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: gC
              }),
              children: (0, WC.jsx)(QC.Suspense, {
                fallback: null,
                children: (0, WC.jsx)(bn.c, {
                  ref: FC,
                  onReady: () => {
                    var CC, ZC;
                    null === (CC = FC.current) || void 0 === CC || CC.resetCamera(), null === (ZC = FC.current) || void 0 === ZC || ZC.setAllCosmetics(zC)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      pC()
                    }))
                  }
                })
              })
            }), !gC && (0, WC.jsx)(JC.d, {})]
          }), (0, WC.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: qC("dailyDrop:after")
          })]
        })]
      })
    }
    var Zf = ZC(1774);
    const Qf = "dailyDropReminderAsked_";

    function wf(CC) {
      return async function(CC) {
        if (CC.remindersOn || (0, iC.e)(iC.b.get("gameState"))) return null;
        const zC = await KC.userContextManager.getCurrentUserContext(),
          ZC = Qf + zC.whamm;
        if (null !== QZ.i.getItem(ZC)) return null;
        const [QC, wC] = await Promise.all([(0, uz.e)().catch((CC => (console.error("Couldn't tell whether this device can take push notifications:", CC), null))), nf()]);
        if (null === QC && !wC) return null;
        return {
          askedKey: ZC,
          requester: QC
        }
      }(CC).catch((CC => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", CC), null)))
    }

    function bf(CC, zC) {
      QZ.i.setItem(CC.askedKey, !0), (0, az.s)("daily_drop.remind", zC ? "yes" : "no"), zC && async function(CC) {
        const zC = (0, az.t)({
            remindersOn: !0
          }),
          ZC = null === CC ? Promise.resolve() : CC(),
          [QC, wC] = await Promise.allSettled([zC, ZC]);
        "rejected" === QC.status && console.error("Failed to turn on Lucky Skin Block reminders:", QC.reason);
        "rejected" === wC.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", wC.reason);
        "rejected" !== QC.status && "rejected" !== wC.status || Zf.d.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(CC.requester)
    }

    function nf() {
      return (0, cz.b)().then((CC => CC.app + CC.browser + CC.msnPlay > 0), (CC => (console.error("Couldn't tell where push notifications reach this account:", CC), !0)))
    }
    const ff = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      of = {
        opening: 900,
        shrinking: 700
      };

    function qf(CC) {
      let {
        drop: zC,
        onClose: ZC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)(), {
        userContext: oC
      } = (0, gC.e)(), {
        state: FC,
        view: NC
      } = (0, az.u)(), [MC, SC] = (0, QC.useState)("closed"), [pC] = (0, QC.useState)((() => ({
        ...oC.getPlayerCosmetics()
      }))), [PC] = (0, QC.useState)((() => (0, az.n)(zC, pC))), [GC, RC] = (0, QC.useState)(!1), [AC, xC] = (0, QC.useState)(!1), [JC] = (0, QC.useState)((() => null === FC ? Promise.resolve(null) : wf(FC))), [IC, vC] = (0, QC.useState)(null), eC = (0, rz.e)(), {
        gameState: hC
      } = (0, iC.k)(["gameState"]);
      async function KC() {
        const CC = await JC;
        eC.current && (null === CC ? ZC() : (vC(CC), SC("remind")))
      }

      function YC(CC) {
        null !== IC && bf(IC, CC), ZC()
      }(0, QC.useEffect)((() => {
        const CC = of [MC];
        if (void 0 === CC) return;
        const zC = setTimeout((() => {
          SC(ff[MC])
        }), CC);
        return () => {
          clearTimeout(zC)
        }
      }), [MC]);
      const dC = wC(`dailyDrop:kind_${PC.JQ}`),
        mC = FC && wC("dailyDrop:collected", {
          count: FC.collected.length,
          total: FC.total
        }),
        HC = "revealed" === MC || "shrinking" === MC,
        EC = "equip" !== MC && "remind" !== MC;
      return (0, WC.jsx)(YQ.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === MC ? () => {
          YC(!1)
        } : ZC,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, WC.jsxs)("div", {
          className: bC()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === MC,
            DailyDropRevealShrinking: "shrinking" === MC,
            DailyDropRevealFiguresShown: "shrinking" === MC || "equip" === MC || "remind" === MC
          }),
          children: [(0, WC.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, WC.jsx)(zf, {
              className: "DailyDropRevealStageFigures",
              worn: pC,
              JQ: PC.JQ,
              IQ: PC.IQ
            }), ("closed" === MC || "opening" === MC) && (0, WC.jsx)(On.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === MC
            }), HC && (0, WC.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, WC.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Vn.j)(PC.JQ,PC.IQ).previewTex}.png`,
                alt: dC,
                draggable: !1
              })
            })]
          }), EC && (0, WC.jsxs)(WC.Fragment, {
            children: [(0, WC.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, WC.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: HC ? dC : wC("dailyDrop:name")
              }), "closed" === MC && (0, WC.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: wC("dailyDrop:tapToOpen")
              }), "revealed" === MC && (0, WC.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: wC("dailyDrop:tapToContinue")
              })]
            }), (0, WC.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": wC("closed" === MC ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                SC(ff[MC])
              }
            })]
          }), "equip" === MC && (0, WC.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, WC.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: dC
            }), (0, WC.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: wC("dailyDrop:equipQuestion")
            }), (0, WC.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, WC.jsx)(qC.g, {
                className: "DailyDropRevealButton",
                disabled: GC,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, az.s)("daily_drop.not_now", zC), KC()
                },
                children: wC("dailyDrop:notNow")
              }), (0, WC.jsx)(qC.g, {
                className: "DailyDropRevealButton",
                loading: GC,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, az.s)("daily_drop.equip", zC), RC(!0), xC(!1);
                    try {
                      await (0, az.h)(oC, PC.JQ, PC.IQ)
                    } catch (CC) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", CC), RC(!1), void xC(!0)
                    }
                    await KC()
                  }()
                },
                children: wC("dailyDrop:equip")
              })]
            }), AC && (0, WC.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: wC("dailyDrop:equipFailed")
            }), !(0, iC.e)(hC) && (0, WC.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: GC,
              onClick: () => {
                var CC;
                (0, az.s)("daily_drop.customise", zC), CC = PC.JQ, zZ.o.bp(iQ, CC), iC.b.set({
                  openEverythingMenuName: Fz.o.CUSTOMISATION
                }), ZC()
              },
              children: [wC("dailyDrop:customise"), " ", (0, WC.jsx)(fC.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), mC && (0, WC.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [mC, "waiting" === (null === NC || void 0 === NC ? void 0 : NC.kind) && ` \xb7 ${wC("dailyDrop:nextInInline",{count:NC.hours})}`]
            })]
          }), "remind" === MC && (0, WC.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, WC.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: wC("dailyDrop:remindTitle")
            }), (0, WC.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: wC("dailyDrop:remindSubtitle")
            }), (0, WC.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, WC.jsx)(qC.g, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  YC(!1)
                },
                children: wC("dailyDrop:remindNo")
              }), (0, WC.jsx)(qC.g, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  YC(!0)
                },
                children: wC("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function Ff(CC, zC) {
      const {
        t: ZC
      } = (0, nC.y)(), wC = function(CC, zC) {
        const {
          state: ZC,
          view: wC
        } = (0, az.u)(), [bC, nC] = (0, QC.useState)(!1), [fC, oC] = (0, QC.useState)(!1), [qC, FC] = (0, QC.useState)(null), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(!1), MC = zC && "ready" === (null === wC || void 0 === wC ? void 0 : wC.kind);
        (0, QC.useEffect)((() => {
          CC ? MC && !NC.current && (NC.current = !0, (0, az.s)("daily_drop.shown", "tile")) : NC.current = !1
        }), [CC, MC]), (0, QC.useEffect)((() => {
          CC || (PC(), oC(!1))
        }), [CC]);
        const gC = CC && null === qC && !(0, az.r)(wC);
        (0, QC.useEffect)((() => {
          gC && iC.b.set({
            openEverythingMenuName: Fz.o.CUSTOMISATION
          })
        }), [gC]);
        const SC = (0, QC.useRef)(!1),
          pC = (0, QC.useRef)(CC);

        function PC() {
          null !== WC.current && (WC.current = null, FC(null))
        }
        return pC.current = CC, {
          state: ZC,
          view: wC,
          claiming: bC,
          claimFailed: fC,
          reveal: qC,
          open: async function() {
            if (!SC.current) {
              SC.current = !0, nC(!0), oC(!1);
              try {
                const {
                  state: CC,
                  drop: zC
                } = await (0, az.d)();
                if (null === CC || null === zC) return;
                if (!pC.current) return;
                (0, az.s)("daily_drop.open", zC), WC.current = {
                  state: CC,
                  drop: zC
                }, FC(WC.current)
              } catch (CC) {
                console.error("Failed to claim the Lucky Skin Block", CC), pC.current && oC(!0)
              } finally {
                SC.current = !1, nC(!1)
              }
            }
          },
          closeReveal: PC
        }
      }(CC, zC);
      return {
        shown: (0, az.r)(wC.view) || null !== wC.reveal,
        tile: wC.state && wC.view && (0, WC.jsx)(kn, {
          state: wC.state,
          view: wC.view,
          claiming: wC.claiming,
          onOpen: wC.open
        }),
        claimFailed: wC.claimFailed && (0, WC.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: ZC("dailyDrop:claimFailed")
        }),
        reveal: wC.reveal && (0, WC.jsx)(qf, {
          drop: wC.reveal.drop,
          onClose: wC.closeReveal
        })
      }
    }

    function Wf(CC) {
      let {
        show: zC
      } = CC;
      const ZC = Ff(zC, zC);
      return zC && ZC.shown ? (0, WC.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [ZC.claimFailed, ZC.tile && (0, WC.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: ZC.tile
        }), ZC.reveal]
      }) : null
    }
    const Nf = {
      kind: "board"
    };
    let Mf = !1;

    function gf(CC) {
      return "found" === CC.status || "error" === CC.status && "store:giftRecipientLookupFailed" === CC.error ? CC.name : null
    }(0, rC.y)(Ib.prefetchBillingOfferings);
    const Sf = (0, QC.memo)((function(CC) {
      var zC;
      let {
        show: wC
      } = CC;
      const {
        t: fC
      } = (0, nC.y)(), {
        userContext: oC
      } = (0, gC.e)(), qC = oC !== KC.NULL_USER_CONTEXT, FC = Xb(oC), [NC, MC] = (0, pC.c)(), {
        page: SC,
        urlMode: PC,
        goTo: GC
      } = (0, cb.d)(), RC = function(CC) {
        return "superRank" === CC.kind ? "superRank" : "pack" === CC.kind ? CC.pack : null
      }(SC), {
        openEverythingMenuName: AC,
        gameState: xC
      } = (0, iC.k)(["openEverythingMenuName", "gameState"]), JC = null !== AC;
      ! function(CC, zC) {
        const [wC] = (0, QC.useState)(sb.k), [bC, nC] = (0, QC.useState)(!1);
        wC && zC && !bC && nC(!0);
        const fC = (0, SQ.p)(),
          oC = wC && bC && CC && !fC;
        (0, QC.useEffect)((() => {
          if (!oC) return;
          let CC = null,
            zC = null,
            QC = null;
          const wC = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, oz.g)().purchaseUnderWay,
            bC = () => {
              var ZC;
              null === (ZC = QC) || void 0 === ZC || ZC(), QC = null, null !== CC && (clearTimeout(CC), CC = null), null !== zC && (clearTimeout(zC), zC = null)
            },
            nC = () => {
              (0, ub.o)(!1), (0, ub.n)(!1), bC(), CC = setTimeout((() => {
                CC = null, QC = (0, rb.e)((() => {
                  QC = null, wC() ? nC() : ((0, ub.o)(!0), zC = setTimeout((() => {
                    zC = null, QC = (0, rb.e)((() => {
                      QC = null, wC() ? nC() : (0, ub.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ZC(4591))).then((CC => {
                    CC.startBackgroundGameSetup()
                  }), (CC => {
                    console.warn("Background game setup: its chunk failed to load", CC)
                  })))
                }))
              }), 2e3)
            };
          for (const ZC of Tb) window.addEventListener(ZC, nC, {
            capture: !0,
            passive: !0
          });
          return nC(), () => {
            for (const CC of Tb) window.removeEventListener(CC, nC, {
              capture: !0
            });
            bC(), (0, ub.o)(!1), (0, ub.n)(!1)
          }
        }), [oC])
      }(wC && JC, "pack" === SC.kind);
      const IC = "landingPage" === xC;
      (0, QC.useEffect)((() => {
        JC && (0, Ib.prefetchBillingOfferings)()
      }), [JC]), (0, QC.useEffect)((() => {
        JC && !wC && IC && (0, ab.s)()
      }), [JC, wC, IC]);
      const [vC, eC] = (0, QC.useState)(0), [hC, YC] = (0, QC.useState)(null), [dC, mC] = (0, QC.useState)(null), [HC, EC] = (0, QC.useState)(null), [XC, cC] = (0, QC.useState)(null), uC = (0, QC.useRef)(null), TC = (0, QC.useRef)(null), aC = (0, QC.useRef)(null), tC = (0, QC.useRef)(!1), DC = (0, rC.C)(), jC = (0, QC.useRef)(0), yC = (0, QC.useRef)(!1);

      function LC() {
        eC((CC => CC + 1))
      }(0, QC.useEffect)((() => {
        if (wC) {
          if (Mf = !0, (0, rC.l)(), DC && DC.seq !== jC.current) {
            var CC;
            jC.current = DC.seq, "loginResume" !== DC.source && (0, rC.B)();
            const zC = (0, rC.d)(DC);
            PC || GC(zC), cC(null !== (CC = DC.highlight) && void 0 !== CC ? CC : null), mC(null), "gift" === DC.mode && DC.giftRecipientName ? FC.choose(DC.giftRecipientName, "prefilled") : "current" !== DC.mode && FC.clear(), "gift" !== DC.mode || DC.giftRecipientName || LC(), (0, kC.reportAnalyticsClick)({
              id: "store.open",
              value: DC.source
            })
          } else yC.current || (0, kC.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          yC.current = !0
        } else yC.current = !1
      }), [wC, DC]), (0, QC.useEffect)((() => {
        if (!XC) return;
        const CC = setTimeout((() => {
          cC(null)
        }), 4e3);
        return () => {
          clearTimeout(CC)
        }
      }), [XC]), (0, QC.useLayoutEffect)((() => {
        const CC = uC.current;
        if (!wC || !CC) return TC.current = null, void(aC.current = null);
        var zC;
        if (RC) TC.current = RC, null === (zC = CC.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === zC || zC.focus();
        else if (TC.current) {
          const zC = aC.current;
          null !== zC && (CC.scrollTop = zC);
          const ZC = CC.querySelector(`[data-store-item="${TC.current}"]`);
          if (ZC) {
            const QC = ZC.getBoundingClientRect(),
              wC = CC.getBoundingClientRect();
            ZC.focus({
              preventScroll: null !== zC && QC.bottom > wC.top && QC.top < wC.bottom
            })
          }
          TC.current = null
        }
      }), [RC, wC]), (0, QC.useEffect)((() => {
        mC(null)
      }), [FC.query]), (0, QC.useEffect)((() => {
        if (!HC) return;
        const CC = setTimeout((() => {
          EC(null)
        }), 8e3);
        return () => {
          clearTimeout(CC)
        }
      }), [HC]);
      const UC = oC.superRankInfo,
        BC = oC.isLoggedIn() || (0, sC.guestsMayBuy)(),
        OC = oC.getOwnedCosmeticPacks(),
        VC = (0, mb.m)(FC.query),
        Cz = (0, mb.f)({
          mode: VC,
          loggedIn: qC ? BC : null,
          superRankInfo: UC,
          now: Date.now(),
          ownedPacks: OC,
          packs: Jb.q,
          recipient: FC.recipient
        });
      (0, QC.useEffect)((() => {
        if (!BC || !wC) return;
        const CC = (0, rC.B)(),
          zC = CC && (0, mb.i)(CC, Jb.q);
        CC && zC && ((0, kC.reportAnalyticsClick)({
          id: "store.login_resume",
          value: CC.item
        }), (0, rC.n)(zC))
      }), [BC, wC]);
      const zz = (0, mb.q)({
        superRankDaysLeft: Cz.superRankDaysLeft,
        openedThisSession: Mf || wC,
        seenNewItems: (0, rC.k)()
      });
      (0, QC.useEffect)((() => {
        (0, rC.A)(zz)
      }), [zz]);
      const Zz = "self" === VC,
        Qz = Ff(wC, wC && Zz && "board" === SC.kind);
      if (!wC || !(0, sC.purchasesAllowed)()) return null;
      const wz = MC > NC && NC <= 700,
        bz = !wz && MC <= 420,
        nz = "gift" === VC ? gf(FC.recipient) : null,
        fz = null !== hC;

      function qz(CC) {
        (0, vb.b)(CC, "gift" === VC ? FC.query.trim() : null)
      }

      function Fz(CC, zC) {
        (0, kC.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${zC?"gift":"self"}:${CC}`
        }), zC && (FC.recordGift(zC.name, CC), Wz(zC))
      }

      function Wz(CC) {
        ! function(CC) {
          try {
            QZ.i.setItem(Hb, (0, mb.y)(lb(), CC))
          } catch {}
        }({
          name: CC.name,
          cosmetics: CC.cosmetics
        }), GC(Nf), EC((zC => {
          var ZC;
          return {
            name: CC.name,
            seq: (null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.seq) && void 0 !== ZC ? ZC : 0) + 1
          }
        }))
      }
      async function Nz(CC) {
        var zC, ZC;
        if (tC.current) return;
        if (!BC) return void qz(CC);
        mC(null), cC(null);
        const QC = "gift" === VC ? {
          name: gf(FC.recipient),
          cosmetics: FC.recipientCosmetics
        } : null;
        if (QC && !QC.name) return void LC();
        const wC = "superRank" === CC ? lC.g.id : (0, lC.c)(CC);
        tC.current = !0;
        const bC = await (0, db.e)(wC, null !== (zC = null === QC || void 0 === QC ? void 0 : QC.name) && void 0 !== zC ? zC : null);
        if (tC.current = !1, !bC) return;
        YC(CC);
        const nC = await eb.e.purchase(wC, null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null);
        YC(null), nC ? mC(nC) : (Fz(CC, QC), QC || (await (0, hb.flushClientAnalyticsEvents)(), (0, ib.refreshWithoutConfirmation)("superRank" === CC ? "/super-rank-welcome" : `/pack-welcome/${CC}`)))
      }
      const Mz = bC()("Store", {
        StoreGift: "gift" === VC,
        StorePortrait: wz,
        StoreCompact: bz
      });
      if ("pack" === SC.kind) {
        const CC = SC.pack,
          zC = Cz.packs.find((zC => zC.pack === CC));
        return (0, WC.jsx)("div", {
          ref: uC,
          className: "CosmeticShopContainer",
          children: (0, WC.jsx)(Yb.d, {
            pack: CC,
            onBack: () => {
              GC(Nf)
            },
            onPurchased: zC => {
              Fz(CC, zC ? {
                name: zC,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === VC && nz && zC && (0, WC.jsxs)(WC.Fragment, {
              children: [(0, WC.jsx)(Sn, {
                state: zC.state,
                item: CC,
                price: (gz = CC, "superRank" === gz ? lC.g.price : (0, lC.d)(gz)),
                busy: fz,
                onAct: () => {
                  Nz(CC)
                },
                onNeedRecipient: () => {
                  GC(Nf), LC()
                },
                onLogin: () => {
                  qz(CC)
                },
                highlight: XC === CC
              }), dC && (0, WC.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: fC(dC)
              })]
            }),
            ownedPacks: OC,
            startAsGift: "gift" === VC,
            initialGiftRecipient: "gift" === VC ? null !== nz && void 0 !== nz ? nz : FC.query.trim() : "",
            highlightCta: XC === CC
          }, CC)
        })
      }
      var gz;
      return "superRank" === SC.kind ? (0, WC.jsx)("div", {
        ref: uC,
        className: bC()(Mz, "StoreDetailView"),
        children: (0, WC.jsx)(Tn, {
          state: Cz.superRank.state,
          mode: VC,
          giftName: nz,
          busy: fz,
          highlight: "superRank" === XC,
          purchaseError: dC,
          onBack: () => {
            GC(Nf)
          },
          onChooseRecipient: () => {
            GC(Nf), LC()
          },
          onAct: () => {
            Nz("superRank")
          },
          onLogin: () => {
            qz("superRank")
          }
        })
      }) : (0, WC.jsxs)("div", {
        ref: uC,
        className: Mz,
        onScroll: CC => {
          aC.current = CC.currentTarget.scrollTop
        },
        children: [(0, WC.jsx)("div", {
          className: "StoreTopRow",
          children: (0, WC.jsx)(Bb, {
            selfName: qC ? oC.getPlayerName() : "",
            giftRecipient: FC,
            suggestionsVersion: null !== (zC = null === HC || void 0 === HC ? void 0 : HC.seq) && void 0 !== zC ? zC : 0,
            pulseSignal: vC,
            disabled: fz || !qC
          })
        }), HC && (0, WC.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            EC(null)
          },
          children: [(0, WC.jsx)(Kb.c, {
            showSignal: HC.seq
          }), mb.b, " ", fC("store:giftSent", {
            name: HC.name
          })]
        }, HC.seq), !HC && dC && (0, WC.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: fC(dC)
        }), Zz && Qz.claimFailed, (0, WC.jsx)(sn, {
          layout: Cz,
          mountAtOnce: null !== TC.current,
          bundleGift: "gift" === VC ? {
            recipientName: nz,
            lookingUp: "pending" === FC.recipient.status,
            busy: fz,
            onNeedRecipient: LC,
            onSent: CC => {
              (0, kC.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Wz({
                name: CC,
                cosmetics: FC.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, mb.t)(UC),
          busy: fz,
          highlightItem: XC,
          onOpen: function(CC) {
            (0, kC.reportAnalyticsClick)({
              id: "store.item_open",
              value: CC
            }), GC((0, rC.h)(CC))
          },
          onAct: Nz,
          onNeedRecipient: LC,
          onLogin: qz,
          dailyDropTile: Zz && Qz.tile
        }), "gift" !== VC && (0, WC.jsx)(Un, {}), Qz.reveal]
      })
    }));
    var pf = ZC(2667),
      Pf = ZC(8844),
      Gf = ZC(8673),
      Rf = ZC(2731),
      Af = ZC(2563),
      xf = ZC(2624),
      Jf = ZC(2633),
      If = ZC(2637),
      vf = ZC(2718),
      ef = ZC(2700),
      hf = ZC(2294),
      Kf = ZC(2333),
      Yf = ZC(2321),
      df = ZC(1930),
      mf = ZC(2646),
      Hf = ZC(2340);

    function Ef(CC) {
      let {
        show: zC
      } = CC;
      return zC ? (0, WC.jsx)(lf, {}) : null
    }

    function lf() {
      const {
        t: CC
      } = (0, nC.y)(), {
        followsLeader: zC
      } = (0, Af.g)(), {
        loading: ZC,
        friends: wC,
        requests: oC,
        invites: FC
      } = (0, aC.k)(), {
        userContext: NC
      } = (0, gC.e)(), [MC, SC] = (0, QC.useState)(Hf.m);
      (0, QC.useEffect)((() => {
        (0, Hf.e)()
      }), []);
      const pC = oC.map((CC => CC.name)),
        {
          state: PC,
          recentRequesters: GC
        } = (0, ef.p)(),
        RC = new Map([...("loaded" === PC.status ? PC.recentPlayers : []).map((CC => [CC.preview.name, CC])), ...GC.map((CC => [CC.name, CC]))]),
        AC = (0, QC.useRef)(null),
        [IC, iC] = (0, QC.useState)(""),
        [vC, eC] = (0, QC.useState)("Enter"),
        [hC, KC] = (0, QC.useState)(null);

      function YC() {
        IC && (eC("Loading"), (0, Yf.e)(IC, "social_menu").then((CC => {
          if (AC.current) switch (CC.kind) {
            case "sent":
              eC("Success");
              break;
            case "becameFriends":
              eC("BecameFriends");
              break;
            case "failed":
              KC(CC.message), eC("Error")
          }
        })))
      }
      return (0, QC.useEffect)((() => {
        if ("Enter" === vC || "Loading" === vC) return;
        const CC = setTimeout((() => {
          AC.current.value = "", iC(""), eC("Enter")
        }), "Success" === vC ? 1e3 : 4e3);
        return () => {
          clearTimeout(CC)
        }
      }), [vC]), (0, WC.jsx)("div", {
        className: "SocialMenu",
        children: (0, WC.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, WC.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, WC.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, WC.jsx)(If.b, {
                label: CC("socialBar:addFriend")
              }), (0, WC.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, WC.jsxs)("div", {
                  className: bC()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${vC}`]: !0
                  }),
                  children: ["Loading" === vC && (0, WC.jsx)(JC.d, {}), "Success" === vC && (0, WC.jsx)(fC.c, {
                    name: "check"
                  }), "BecameFriends" === vC && (0, WC.jsx)(WC.Fragment, {
                    children: CC("socialBar:nowFriends", {
                      playerName: IC
                    })
                  }), "Error" === vC && hC && (0, WC.jsx)(WC.Fragment, {
                    children: CC(hC.translationKey, hC.params)
                  })]
                }), (0, WC.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, WC.jsx)(xC.c, {
                    className: "PlayerSearchInput",
                    placeholderText: CC("socialBar:enterPlayerName"),
                    domRef: AC,
                    onValueChange: CC => {
                      iC((0, HC.q)(CC)), AC.current.value = (0, HC.q)(CC)
                    },
                    onEnter: () => {
                      IC && (0, kC.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), YC()
                    }
                  }), (0, WC.jsxs)(qC.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      YC()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, WC.jsx)(fC.c, {
                      name: "user-plus"
                    }), " ", CC("socialBar:sendRequest")]
                  })]
                })]
              }), (0, WC.jsx)(mf.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), FC.length > 0 && (0, WC.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, WC.jsx)(If.b, {
                label: CC("socialBar:invites"),
                meta: FC.length
              }), FC.map((zC => (0, WC.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, WC.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, WC.jsx)(hf.d, {
                    invite: zC
                  })
                }), (0, WC.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, WC.jsx)(hf.g, {
                    invite: zC
                  })
                }), (0, WC.jsx)(qC.o, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Kf.d)(zC)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${zC.destination.kind}`
                  },
                  children: CC("general:join")
                }), (0, WC.jsx)(UC.d, {
                  tooltipInner: (0, WC.jsx)(WC.Fragment, {
                    children: CC("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, WC.jsx)(qC.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === MC || void 0 === MC ? void 0 : MC.kind) && MC.inviteId === zC.id,
                    onClick: () => {
                      aC.d.declineInvite(zC.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${zC.destination.kind}`
                    },
                    children: (0, WC.jsx)(fC.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, zC.id)))]
            }), (0, WC.jsxs)("div", {
              className: bC()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ZC && 0 === oC.length
              }),
              children: [(0, WC.jsx)(If.b, {
                label: (0, WC.jsxs)(WC.Fragment, {
                  children: [(0, WC.jsx)(fC.c, {
                    name: df.d
                  }), " ", CC("socialBar:requests")]
                }),
                meta: (0, WC.jsxs)(WC.Fragment, {
                  children: [oC.length, oC.length === BC.n && (0, WC.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: CC("socialBar:limitReached")
                  })]
                })
              }), ZC && (0, WC.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, WC.jsx)(JC.d, {})
              }), !ZC && 0 === oC.length && (0, WC.jsx)("div", {
                className: "SocialMenuEmpty",
                children: CC("socialBar:noFriendRequests")
              }), !ZC && oC.length > 0 && (0, WC.jsx)("div", {
                className: "PlayerRows",
                children: (0, WC.jsx)(vw.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [oC],
                  children: oC.map(((zC, ZC) => {
                    const QC = RC.get(zC.name);
                    return (0, WC.jsxs)(Jf.f, {
                      playerSocialPreview: zC,
                      zIndex: oC.length - ZC,
                      padDefaultFocus: (0, Hf.k)(MC, zC.name, ZC),
                      status: QC && (0, WC.jsx)(vf.c, {
                        gameNameWithVariation: QC.gameNameWithVariation,
                        isPrivateLobby: QC.isPrivateLobby
                      }),
                      children: [(0, WC.jsx)(UC.d, {
                        tooltipInner: (0, WC.jsx)(WC.Fragment, {
                          children: CC("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, WC.jsx)(qC.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            SC((0, Hf.i)(pC, ZC)), (0, Yf.d)(zC.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, WC.jsx)(fC.c, {
                            name: "check"
                          })
                        })
                      }), (0, WC.jsx)(UC.d, {
                        tooltipInner: (0, WC.jsx)(WC.Fragment, {
                          children: CC("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, WC.jsx)(qC.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            SC((0, Hf.i)(pC, ZC)), (0, Yf.d)(zC.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, WC.jsx)(fC.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${zC.name}_${zC.isError}`)
                  }))
                })
              })]
            }), (0, WC.jsx)(vf.h, {})]
          }), (0, WC.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, WC.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, WC.jsx)(If.b, {
                label: CC("socialBar:party")
              }), (0, WC.jsx)(xf.e, {})]
            }), (0, WC.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, WC.jsx)(If.b, {
                label: (0, WC.jsxs)(WC.Fragment, {
                  children: [(0, WC.jsx)(fC.c, {
                    name: df.b
                  }), " ", CC("socialBar:friends")]
                }),
                meta: (0, WC.jsxs)(WC.Fragment, {
                  children: [wC.length, wC.length >= (0, BC.b)(NC.getPlayerRanks()) && (0, WC.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: CC("socialBar:limitReached")
                  })]
                })
              }), ZC && (0, WC.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, WC.jsx)(JC.d, {})
              }), !ZC && 0 === wC.length && (0, WC.jsx)("div", {
                className: "SocialMenuEmpty",
                children: CC("socialBar:noFriends")
              }), !ZC && wC.length > 0 && (0, WC.jsx)("div", {
                className: "PlayerRows",
                children: (0, WC.jsx)(vw.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [wC],
                  children: wC.map(((CC, ZC) => (0, WC.jsx)(Jf.f, {
                    playerSocialPreview: CC,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: CC => {
                      aC.d.removeFriendFromState(CC)
                    },
                    zIndex: wC.length - ZC,
                    children: (0, WC.jsx)(Jf.e, {
                      friend: CC,
                      followsLeader: zC,
                      analyticsSurface: "social_menu"
                    })
                  }, `${CC.name}_${CC.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Xf = ZC(2492);
    const uf = CC => {
        let {
          action: zC,
          padAction: ZC
        } = CC;
        const {
          isTouchScreen: QC
        } = (0, iC.k)(["isTouchScreen"]), wC = (0, SQ.p)();
        return QC && !wC ? null : (0, WC.jsx)(oQ.b, {
          className: "EverythingMenuTabKey",
          noaAction: zC,
          padHidesKey: !0,
          padMenuShortcut: ZC
        })
      },
      rf = (0, QC.memo)((function() {
        const {
          t: CC
        } = (0, nC.y)(), {
          gameState: zC,
          openEverythingMenuName: ZC,
          initSdkSelectorFinished: wC,
          crosshairGameView: fC
        } = (0, iC.k)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: oC
        } = (0, gC.e)(), FC = (0, sC.purchasesAllowed)(), NC = (0, rC.F)(), {
          view: MC
        } = (0, az.u)(), SC = "dot" === NC || null === NC && "ready" === (null === MC || void 0 === MC ? void 0 : MC.kind), pC = (CC, zC) => (0, WC.jsx)(uf, {
          action: CC,
          padAction: zC
        }), [GC, RC] = (0, QC.useState)(null), AC = (0, QC.useRef)(null), xC = {
          ..."inGame" === zC ? {} : (0, qC.U)({
            focusOnClick: !1
          }),
          ...eQ.c
        }, JC = CC => {
          const zC = (0, hQ.f)((zC => {
            (0, qC.R)(zC.currentTarget), iC.b.set({
              openEverythingMenuName: CC
            })
          }), "pointerup");
          return {
            ...xC,
            onPointerDown: CC => {
              xC.onPointerDown(CC), zC.onPointerDown(CC)
            },
            onPointerUp: CC => {
              xC.onPointerUp(CC), zC.onPointerUp(CC)
            },
            onClick: zC.onClick
          }
        }, IC = null !== ZC, vC = ZC !== Fz.o.COSMETIC_SHOP && !fC;
        async function eC() {
          await async function() {
            if (!GC) return;
            await GC(), RC(null)
          }(), iC.b.set({
            openEverythingMenuName: null
          })
        }
        const KC = (0, QC.useRef)(null),
          YC = (0, QC.useCallback)((() => null !== KC.current && (0, Gf.g)(KC.current)), []);

        function dC() {
          YC() || eC()
        }(0, QC.useEffect)((() => (0, pb.z)(YC)), [YC]);
        const mC = (0, QC.useMemo)((() => "inGame" === zC ? {
          text: CC("settingsMenu:exitGame"),
          onClick: () => {
            (0, Pf.c)()
          }
        } : (0, hC.e)() ? {
          text: CC("settingsMenu:exitGame"),
          onClick: () => {
            fz.h.discordActivity().then((CC => {
              CC.exit("User exited the game")
            }))
          }
        } : null), [zC, CC]);
        const HC = (0, WC.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: dC,
          children: (0, WC.jsx)(qC.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, WC.jsx)(KQ.d, {
          showing: IC,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ZC === Fz.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === zC,
          children: (0, WC.jsx)(dQ.d, {
            className: "EverythingMenuContainer",
            show: IC && !fC,
            children: (0, WC.jsx)(YQ.c, {
              close: dC,
              togglePointerLock: !1,
              children: (0, WC.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, pb.l)(ZC) && (0, WC.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, WC.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [mC && (0, WC.jsx)(qC.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        mC.onClick()
                      },
                      children: mC.text
                    }), IC && FC && (0, WC.jsx)("div", {
                      ...xC,
                      className: "EverythingMenuWallet",
                      title: CC("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, rC.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, WC.jsx)(pf.d, {})
                    })]
                  }), (0, WC.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, WC.jsxs)("div", {
                      ...JC(Fz.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZC === Fz.o.SETTINGS ? "true" : void 0,
                      className: bC()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZC === Fz.o.SETTINGS
                      }),
                      children: [CC("general:settings"), pC("OpenSettings", "pause")]
                    }), (0, WC.jsxs)("div", {
                      ...JC(Fz.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZC === Fz.o.CUSTOMISATION ? "true" : void 0,
                      className: bC()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZC === Fz.o.CUSTOMISATION
                      }),
                      children: [CC("general:player"), pC("OpenCharacterCustomization")]
                    }), PC.featureFlags.useSocialFeatures && (0, WC.jsxs)("div", {
                      ...JC(Fz.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZC === Fz.o.SOCIAL ? "true" : void 0,
                      className: bC()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZC === Fz.o.SOCIAL
                      }),
                      ...(0, kC.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ZC === Fz.o.SOCIAL),
                      children: [CC("socialBar:social"), (0, WC.jsx)(Xf.c, {})]
                    }), (0, az.r)(MC) && (0, WC.jsxs)("div", {
                      ...JC(Fz.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZC === Fz.o.COSMETIC_SHOP ? "true" : void 0,
                      className: bC()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ZC === Fz.o.COSMETIC_SHOP
                      }),
                      children: [(0, WC.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: CC("store:title")
                      }), "new" === NC && (0, WC.jsx)(en, {}), SC && (0, WC.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === zC && (0, WC.jsxs)("div", {
                      ...JC(Fz.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZC === Fz.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: bC()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZC === Fz.o.LOBBY_LEADERBOARD
                      }),
                      children: [CC("general:lobby"), pC("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, WC.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: HC
                  })]
                }), (0, pb.l)(ZC) && HC, (0, WC.jsxs)("div", {
                  ref: KC,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === zC ? "0.85" : "1"
                  },
                  children: [(0, WC.jsx)(AQ, {
                    show: ZC === Fz.o.SETTINGS,
                    setBeforeResumeCallback: RC
                  }), (0, WC.jsx)(vQ, {
                    show: ZC === Fz.o.CUSTOMISATION
                  }), (0, WC.jsx)(QC.Suspense, {
                    fallback: null,
                    children: (0, WC.jsx)(fb, {
                      show: ZC === Fz.o.SHOP
                    })
                  }), (0, WC.jsx)(Ab, {
                    show: ZC === Fz.o.LOBBY_LEADERBOARD
                  }), FC && (0, WC.jsx)(Sf, {
                    show: ZC === Fz.o.COSMETIC_SHOP
                  }), !FC && (0, WC.jsx)(Wf, {
                    show: ZC === Fz.o.COSMETIC_SHOP
                  }), (0, WC.jsx)(Ef, {
                    show: ZC === Fz.o.SOCIAL
                  })]
                }), !(0, PC.isMobileApp)() && (0, mQ.g)(oC.getPlayerRanks()) && (0, WC.jsx)(dQ.d, {
                  ref: AC,
                  className: "EverythingMenuBannerDiv",
                  show: vC,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, WC.jsx)(Rf.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: AC
                    },
                    showing: IC && vC,
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
  34158: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(326),
      wC = ZC(34162);

    function bC(CC, zC, ZC) {
      const bC = Object.entries(zC).sort(((CC, zC) => zC[1] - CC[1])),
        nC = (0, QC.db)(CC);
      nC.push(CC ? "\n\n" : "\n");
      for (const [wC, gC] of bC) {
        var fC, oC, qC;
        const CC = null !== (fC = null === ZC || void 0 === ZC || null === (oC = ZC[wC]) || void 0 === oC ? void 0 : oC.icon) && void 0 !== fC ? fC : `${wC} Enchantment`;
        nC.push({
          icon: CC,
          style: {
            fontSize: "1.5rem"
          }
        }), nC.push({
          str: `${wC} ${null!==(qC=(0,QC.M)(gC))&&void 0!==qC?qC:gC}\n`
        })
      }
      nC.push({
        str: "\n"
      });
      for (const [QC, gC] of bC) {
        var FC, WC, NC, MC;
        const CC = null !== (FC = null === ZC || void 0 === ZC || null === (WC = ZC[QC]) || void 0 === WC ? void 0 : WC.icon) && void 0 !== FC ? FC : `${QC} Enchantment`,
          zC = null !== (NC = null === ZC || void 0 === ZC || null === (MC = ZC[QC]) || void 0 === MC ? void 0 : MC.description) && void 0 !== NC ? NC : (0, wC.l)(QC);
        nC.push({
          icon: CC,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), nC.push({
          str: zC,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), nC.push({
          str: "\n"
        })
      }
      return nC
    }
  },
  34165: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC,
      g: () => GC,
      k: () => pC,
      m: () => oC,
      n: () => PC,
      q: () => FC,
      r: () => NC,
      t: () => SC,
      u: () => WC
    });
    var QC = ZC(310),
      wC = ZC(600),
      bC = ZC(326),
      nC = ZC(4172),
      fC = ZC(34158);

    function oC(CC, zC) {
      var ZC;
      let {
        player: QC,
        chestOrCreative: wC
      } = CC;
      var bC;
      return zC < QC.length ? null !== (bC = QC[zC]) && void 0 !== bC ? bC : null : null !== (ZC = wC[zC - QC.length]) && void 0 !== ZC ? ZC : null
    }

    function qC(CC) {
      var zC;
      return null !== (zC = CC.amount) && void 0 !== zC ? zC : 0
    }

    function FC(CC) {
      return 0 === CC.button || void 0 === CC.button
    }

    function WC(CC) {
      return !!CC.shiftKey
    }

    function NC(CC) {
      return "touches" in CC || "touch" === CC.pointerType || "pen" === CC.pointerType
    }
    const MC = new Set,
      gC = 50;

    function SC(CC, zC) {
      var ZC;
      const QC = null === (ZC = CC[zC]) || void 0 === ZC ? void 0 : ZC.displayName;
      return (0, wC.H)(QC) ? "string" !== typeof zC ? "" : (!MC.has(zC) && MC.size < gC && (MC.add(zC), console.warn(`No item called "${zC}", so its hover shows the name as given`)), zC) : QC
    }

    function pC(CC, zC, ZC) {
      var oC, qC, FC, WC, NC, MC, gC, pC, PC, GC, RC, AC, xC, JC;
      const IC = CC.attributes,
        iC = null !== (oC = null === (qC = zC[CC.name]) || void 0 === qC ? void 0 : qC.rootName) && void 0 !== oC ? oC : CC.name,
        vC = null !== (FC = null !== (WC = IC.customDisplayName) && void 0 !== WC ? WC : null === (NC = zC[CC.name]) || void 0 === NC ? void 0 : NC.displayName) && void 0 !== FC ? FC : SC(zC, iC);
      let eC = vC;
      const hC = null === (MC = IC.customAttributes) || void 0 === MC ? void 0 : MC.enchantmentTier;
      hC && (eC = (0, bC.db)(vC, {
        colour: bC.bb[hC]
      }));
      const KC = null !== (gC = null !== (pC = null !== (PC = function(CC, zC) {
        var ZC;
        if (void 0 === CC || null !== (ZC = zC.customAttributes) && void 0 !== ZC && ZC.author) return CC;
        const wC = (0, QC.dc)(CC);
        return wC.every((CC => "string" === typeof CC)) ? CC : wC.map((CC => "string" === typeof CC ? CC : {
          icon: CC.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(IC.customDescription, IC)) && void 0 !== PC ? PC : null === (GC = zC[CC.name]) || void 0 === GC ? void 0 : GC.description) && void 0 !== pC ? pC : null === (RC = zC[iC]) || void 0 === RC ? void 0 : RC.description) && void 0 !== gC ? gC : "";
      let YC = KC;
      if (null !== (AC = IC.customAttributes) && void 0 !== AC && AC.enchantments) YC = (0, fC.d)(KC, IC.customAttributes.enchantments, IC.customAttributes.enchantmentData);
      else if (ZC[iC]) YC = (0, bC.db)(KC), YC.push({
        str: "\n"
      }), YC.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (xC = IC.customAttributes) && void 0 !== xC && xC.mobSettings) {
        var dC, mC;
        const CC = IC.customAttributes.mobSettings;
        var HC, EC;
        if (YC = [], (0, wC.H)(IC.customAttributes.health) || (YC.push({
            str: "\n"
          }), YC.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), YC.push({
            str: " "
          }), YC.push({
            str: IC.customAttributes.health.toString()
          }), (0, wC.H)(CC.maxHealth) || (YC.push({
            str: "/"
          }), YC.push({
            str: CC.maxHealth.toString()
          }))), !(0, wC.H)(CC.attackDamage) && CC.attackDamage > 0 && (YC.push({
            str: "\n"
          }), YC.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), YC.push({
            str: " "
          }), YC.push({
            str: CC.attackDamage.toString()
          })), !(0, wC.H)(CC.secondaryAttackDamage) && CC.secondaryAttackDamage > 0 && (YC.push({
            str: "\n"
          }), YC.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), YC.push({
            str: " "
          }), YC.push({
            str: CC.secondaryAttackDamage.toString()
          })), (0, wC.H)(CC.baseRunningSpeed) || (YC.push({
            str: "\n"
          }), YC.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), YC.push({
            str: " "
          }), YC.push({
            str: CC.baseRunningSpeed.toFixed(2)
          })), "Saddled" === CC.metaInfo) YC.push({
          str: "\n"
        }), YC.push({
          str: {
            translationKey: "general:has"
          }
        }), YC.push({
          str: " "
        }), YC.push({
          icon: null !== (HC = null === (EC = CC.tameInfo) || void 0 === EC ? void 0 : EC.saddleItemName) && void 0 !== HC ? HC : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (YC.push({
            str: "\n"
          }), YC.push({
            str: "\n"
          }), CC.petInfo && null !== (dC = CC.tameInfo) && void 0 !== dC && dC.supportsFriendship) {
          const zC = nC.d.getIconsFromFriendshipPoints(CC.petInfo.friendshipPoints);
          for (const CC of zC) YC.push({
            icon: CC,
            style: {
              fontSize: "1.5em"
            }
          });
          YC.push({
            str: "\n"
          });
          const ZC = nC.d.getMobHungerLevel(CC.petInfo.lastFedAt);
          for (const CC of nC.d.hungerLevelIcons[ZC]) YC.push({
            icon: CC,
            style: {
              fontSize: "1.5em"
            }
          });
          YC.push({
            str: " "
          }), YC.push({
            str: nC.d.hungerLevelTranslations[ZC],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (CC.tameInfo && null !== (mC = CC.tameInfo) && void 0 !== mC && mC.supportsFriendship) {
          var lC, XC;
          let zC = null !== (lC = CC.tameInfo.likedFoods) && void 0 !== lC ? lC : [];
          YC.push({
            str: "\n"
          }), YC.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: nC.d.feedTextColours[nC.d.MobFoodType.Superliked]
            }
          }), YC.push({
            str: " "
          }), null !== (XC = CC.petInfo) && void 0 !== XC && XC.superlikedFoodKnown ? (YC.push({
            icon: CC.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), zC = zC.filter((zC => zC !== CC.petInfo.superlikedFood))) : YC.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), YC.push({
            str: "\n"
          }), YC.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: nC.d.feedTextColours[nC.d.MobFoodType.Liked]
            }
          }), YC.push({
            str: " "
          });
          for (const CC of zC) YC.push({
            icon: CC,
            style: {
              fontSize: "1.5em"
            }
          });
          YC.push({
            str: "\n"
          }), YC.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: nC.d.feedTextColours[nC.d.MobFoodType.Neutral]
            }
          }), YC.push({
            str: " "
          });
          for (const ZC of null !== (cC = CC.tameInfo.neutralFoods) && void 0 !== cC ? cC : []) {
            var cC;
            YC.push({
              icon: ZC,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          YC.push({
            str: "\n"
          }), YC.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: nC.d.feedTextColours[nC.d.MobFoodType.Disliked]
            }
          }), YC.push({
            str: " "
          });
          for (const ZC of null !== (uC = CC.tameInfo.dislikedFoods) && void 0 !== uC ? uC : []) {
            var uC;
            YC.push({
              icon: ZC,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        YC.length > 0 ? (YC.shift(), YC.unshift(...(0, bC.db)(KC))) : YC = (0, bC.db)(KC)
      }
      return {
        name: eC,
        desc: YC,
        fontStyle: null !== (JC = IC.customAttributes) && void 0 !== JC && JC.author ? "italic" : "normal"
      }
    }

    function PC(CC, zC, ZC, QC) {
      const wC = oC(CC, ZC),
        bC = oC(CC, QC);
      if (!wC) return !1;
      const nC = zC[wC.name].armourReduction,
        fC = zC[bC.name].armourReduction;
      if (fC === nC) {
        var qC, FC, WC, NC;
        const CC = null !== (qC = null === (FC = wC.attributes.customAttributes) || void 0 === FC ? void 0 : FC.enchantmentTier) && void 0 !== qC ? qC : "Tier 0",
          zC = null !== (WC = null === (NC = bC.attributes.customAttributes) || void 0 === NC ? void 0 : NC.enchantmentTier) && void 0 !== WC ? WC : "Tier 0";
        return parseInt(CC.replace("Tier ", "")) >= parseInt(zC.replace("Tier ", ""))
      }
      return nC > fC
    }

    function GC(CC) {
      let zC;
      if ("number" === typeof CC) {
        const ZC = document.querySelector(`[data-inven-idx="${CC}"]`);
        if (!ZC) return null;
        zC = ZC.getBoundingClientRect()
      } else zC = CC.getBoundingClientRect();
      return {
        x: zC.left + zC.width / 2,
        y: zC.top + zC.height / 2
      }
    }
  },
  34056: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      e: () => SC
    });
    var QC = ZC(1388),
      wC = ZC(48),
      bC = ZC(1263),
      nC = ZC(4469),
      fC = ZC(2302),
      oC = ZC(1143),
      qC = ZC(77),
      FC = ZC(1877),
      WC = ZC(1295),
      NC = ZC(1056);

    function MC(CC) {
      let {
        show: zC,
        onClose: ZC
      } = CC;
      const {
        requestedGameNameWithVariation: QC,
        lobbyName: wC,
        shownLobbyName: bC
      } = (0, FC.f)("connectedGame"), oC = (0, fC.e)(QC, wC, !1);
      return qC.featureFlags.canUseInviteLinks && (0, NC.jsx)(nC.c, {
        show: zC,
        close: ZC,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, NC.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, NC.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, NC.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, NC.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === oC ? (0, NC.jsx)(WC.d, {}) : oC, (0, NC.jsx)("br", {}), "Lobby Name: ", bC, (0, NC.jsx)("br", {}), (0, NC.jsx)("br", {}), (0, NC.jsx)("br", {}), (0, NC.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, NC.jsx)(gC, {})]
        })
      })
    }

    function gC() {
      var CC;
      const {
        t: zC
      } = (0, oC.y)(), ZC = null !== (CC = SC(qC.featureFlags.canUseInviteLinks)) && void 0 !== CC ? CC : "Loading Link...", [bC, nC] = (0, wC.useState)(0), [fC, FC] = (0, wC.useReducer)((CC => CC + 1), 0);
      return (0, wC.useEffect)((() => {
        const CC = setTimeout((() => {
          FC()
        }), 1100);
        return () => {
          clearTimeout(CC)
        }
      }), [bC]), qC.featureFlags.canUseInviteLinks && (0, NC.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, NC.jsx)("div", {
          className: "InviteLinkInner",
          children: ZC
        }), (0, NC.jsx)(QC.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ZC).catch((CC => {
              console.error("Failed to copy invite link:", CC)
            })), nC(Date.now())
          },
          disabled: Date.now() - bC < 1e3,
          children: Date.now() - bC < 1e3 ? zC("general:copied") : zC("general:copy")
        })]
      })
    }

    function SC(CC) {
      const [zC, ZC] = (0, wC.useState)(null);
      return (0, wC.useEffect)((() => {
        if (!CC) return;
        let zC = !0;
        return (0, bC.v)().then((CC => {
          zC && ZC(CC)
        })).catch((CC => {
          console.error("Failed to get invite link:", CC)
        })), () => {
          zC = !1
        }
      }), [CC]), zC
    }
  },
  34147: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1877),
      fC = ZC(1056);

    function oC(CC) {
      const zC = Math.floor(CC / 3600),
        ZC = Math.floor(CC % 3600 / 60),
        QC = Math.floor(CC % 60),
        wC = `${ZC.toString().padStart(2,"0")}:${QC.toString().padStart(2,"0")}`;
      return zC > 0 ? `${zC}:${wC}` : wC
    }
    const qC = (0, QC.memo)((function(CC) {
      let {
        className: zC
      } = CC;
      const {
        recording: ZC,
        seconds: QC
      } = (0, nC.f)("replayRecorder");
      return ZC ? (0, fC.jsxs)("div", {
        className: bC()("RecordingIndicator", zC),
        children: [(0, fC.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, fC.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, fC.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: oC(QC)
        })]
      }) : null
    }))
  },
  4819: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => pC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4579),
      nC = ZC(1143),
      fC = ZC(1013),
      oC = ZC(1388),
      qC = ZC(1439),
      FC = ZC(1307),
      WC = ZC(2454),
      NC = ZC(1056);
    const MC = {
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

    function gC(CC) {
      let {
        platform: zC
      } = CC;
      const ZC = "youtube" === zC;
      return (0, NC.jsxs)("span", {
        className: wC()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZC
        }),
        children: [ZC && (0, NC.jsx)(WC.d, {
          variant: "white"
        }), !ZC && (0, NC.jsx)(fC.c, {
          name: MC[zC].icon,
          kit: "brands"
        })]
      })
    }

    function SC(CC) {
      let {
        platform: zC,
        link: ZC,
        editable: QC,
        userContext: wC,
        onLinksUpdated: WC
      } = CC;
      const {
        t: SC
      } = (0, nC.y)(), pC = MC[zC];
      if (!ZC && !QC) return null;

      function PC() {
        var CC;
        if (!wC || !WC) return;
        FC.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: pC.name
            }
          },
          prefixText: bC.s[zC],
          placeholderText: "playBloxd",
          initialValue: null !== (CC = null === ZC || void 0 === ZC ? void 0 : ZC.handle) && void 0 !== CC ? CC : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZC ? "general:remove" : void 0
        }).getResult().then((async CC => {
          if ("notificationTornDown" !== CC && null !== CC) try {
            "submit" === CC.type ? await qC.d.setSocialLink(wC, zC, CC.value) : await qC.d.clearSocialLink(wC, zC), WC()
          } catch (ZC) {
            console.error("Failed to update social link", ZC), FC.NotificationProvider.showAlertPopup({
              title: ZC.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZC) {
        const CC = `@${ZC.handle}`;
        return (0, NC.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: pC.color
          },
          href: ZC.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, NC.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, NC.jsx)(gC, {
              platform: zC
            }), (0, NC.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, NC.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: CC
              })
            })]
          }), QC && (0, NC.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, oC.U)({
              stopPropagation: !0
            }),
            onClick: CC => {
              CC.stopPropagation(), CC.preventDefault(), PC()
            },
            children: (0, NC.jsx)(fC.c, {
              name: "pen-to-square"
            })
          }), !QC && (0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, NC.jsx)(fC.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, NC.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: pC.color
        },
        ...(0, oC.U)(),
        onClick: () => {
          PC()
        },
        children: [(0, NC.jsx)(gC, {
          platform: zC
        }), (0, NC.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: pC.name
          }), (0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: SC("homePage:profileSocialLinkAdd")
          })]
        }), (0, NC.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, NC.jsx)(fC.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function pC(CC) {
      let {
        socialLinks: zC,
        editable: ZC = !1,
        userContext: QC,
        onLinksUpdated: wC
      } = CC;
      if (!ZC && 0 === zC.length) return null;
      const nC = new Map(zC.map((CC => [CC.platform, CC]))),
        fC = ZC ? bC.q : zC.map((CC => CC.platform));
      return (0, NC.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, NC.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: fC.map((CC => (0, NC.jsx)(SC, {
            platform: CC,
            link: nC.get(CC),
            editable: ZC,
            userContext: QC,
            onLinksUpdated: wC
          }, CC)))
        })
      })
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  34202: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(48),
      wC = ZC(3419);

    function bC() {
      const [CC, zC] = (0, QC.useState)(!1);
      return (0, QC.useLayoutEffect)((() => {
        let CC = !0;
        return (0, wC.e)().then((() => {
          CC && zC(!0)
        })), () => {
          CC = !1
        }
      }), []), CC
    }
  },
  6572: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(48),
      wC = ZC(38);

    function bC(CC, zC) {
      var ZC;
      const [bC, nC] = (0, QC.useState)(null !== (ZC = wC.i.getItem(CC)) && void 0 !== ZC ? ZC : zC);
      return [bC, zC => {
        wC.i.setItem(CC, zC), nC(zC)
      }]
    }
  },
  34118: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => SC,
      g: () => gC
    });
    ZC(34125);
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(34116);

    function fC(CC, zC) {
      return Math.max(1, Math.round(CC * zC))
    }

    function oC(CC, zC) {
      const ZC = zC * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        QC = function(CC, zC) {
          if (CC.lines) return fC(CC.lineThickness, zC) % 2;
          if (CC.dot) return fC(CC.dotSize, zC) % 2;
          return qC(CC, zC) % 2
        }(CC, zC),
        wC = FC(CC.lineThickness * ZC, QC),
        bC = fC(CC.lineLength, ZC),
        nC = Math.round(CC.gap * ZC),
        oC = CC.outline > 0 ? fC(CC.outline, ZC) : 0,
        NC = [];
      if (CC.lines && (NC.push({
          x: wC + nC,
          y: 0,
          w: bC,
          h: wC,
          arm: "right"
        }), NC.push({
          x: -nC - bC,
          y: 0,
          w: bC,
          h: wC,
          arm: "left"
        }), NC.push({
          x: 0,
          y: wC + nC,
          w: wC,
          h: bC,
          arm: "down"
        }), CC.tStyle || NC.push({
          x: 0,
          y: -nC - bC,
          w: wC,
          h: bC,
          arm: "up"
        }), 0 === nC && NC.push({
          x: 0,
          y: 0,
          w: wC,
          h: wC
        })), CC.dot) {
        const zC = FC(CC.dotSize * ZC, QC),
          bC = CC.lines && 0 === nC && CC.dotSize > CC.lineThickness ? Math.max(zC, wC + 2) : zC,
          fC = (wC - bC) / 2;
        NC.push({
          x: fC,
          y: fC,
          w: bC,
          h: bC
        })
      }
      const MC = NC.map((CC => ({
        ...CC,
        x: CC.x - oC,
        y: CC.y - oC,
        w: CC.w + 2 * oC,
        h: CC.h + 2 * oC
      })));
      let gC = null,
        SC = null;
      if (CC.circle) {
        const zC = fC(CC.circleThickness, ZC),
          bC = function(CC, zC) {
            return CC + (CC % 2 === zC ? 0 : 1)
          }(qC(CC, ZC), QC),
          nC = (wC - bC) / 2;
        gC = WC(nC, bC, zC), oC > 0 && (SC = WC(nC - oC, bC + 2 * oC, zC + 2 * oC))
      }
      return {
        cell: wC,
        fills: NC,
        outlines: oC > 0 ? MC : [],
        ring: gC,
        ringOutline: SC
      }
    }

    function qC(CC, zC) {
      return Math.round(CC.circleRadius * zC * 2 + fC(CC.circleThickness, zC))
    }

    function FC(CC, zC) {
      return Math.max(2 - zC, 2 * Math.round((CC - zC) / 2) + zC)
    }

    function WC(CC, zC, ZC) {
      const QC = 2 * ZC >= zC - 1;
      return {
        x: CC,
        y: CC,
        size: zC,
        border: Math.min(ZC, Math.floor(zC / 2)),
        filled: QC
      }
    }
    var NC = ZC(1056);
    const MC = 1.4;

    function gC(CC, zC) {
      return CC && zC ? `scale(${MC})` : "scale(1)"
    }

    function SC(CC) {
      return "classic" === CC.settings.style ? (0, NC.jsx)(GC, {
        ...CC
      }) : (0, NC.jsx)(vC, {
        ...CC
      })
    }
    const pC = .125;

    function PC(CC, zC) {
      const ZC = {};
      if (CC.color !== nC.f.color && (ZC.color = (0, nC.i)(CC.color)), CC.opacity !== nC.f.opacity && (ZC.opacity = CC.opacity / 100), CC.outline !== nC.f.outline || CC.outlineColor !== nC.f.outlineColor) {
        const zC = CC.outline,
          QC = (0, nC.i)(CC.outlineColor);
        ZC.textShadow = zC > 0 ? `-${zC}px 0 ${QC}, 0 ${zC}px ${QC}, ${zC}px 0 ${QC}, 0 -${zC}px ${QC}` : "none"
      }
      if (CC.size !== nC.f.size) {
        const QC = CC.size / 100;
        ZC.fontSize = zC ? `calc(max(1.3rem, 18px) * ${QC})` : `calc(1.3rem * ${QC})`, ZC.marginTop = `-${pC}em`, ZC.transformOrigin = `50% calc(50% + ${pC}em)`
      }
      return ZC
    }

    function GC(CC) {
      let {
        settings: zC,
        touch: ZC,
        inPreview: QC,
        inEditor: bC,
        pressed: nC = !1,
        pressRef: fC
      } = CC;
      return (0, NC.jsx)("div", {
        className: wC()("Crosshair", {
          Touch: ZC,
          CrosshairInPreview: QC,
          CrosshairInEditor: bC || QC
        }),
        ref: fC,
        style: {
          transform: gC(nC, zC.growOnClick),
          ...PC(zC, ZC)
        },
        children: "+"
      })
    }

    function RC(CC, zC) {
      return CC / zC + "px"
    }

    function AC(CC, zC, ZC, QC) {
      return {
        ...IC(CC, zC, ZC),
        width: RC(CC.w, ZC),
        height: RC(CC.h, ZC),
        background: QC
      }
    }

    function xC(CC, zC, ZC) {
      return {
        left: RC(CC.x, zC),
        top: RC(CC.y, zC),
        width: RC(CC.size, zC),
        height: RC(CC.size, zC),
        borderWidth: RC(CC.border, zC),
        borderColor: ZC,
        background: CC.filled ? ZC : void 0
      }
    }
    const JC = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function IC(CC, zC, ZC) {
      const [QC, wC] = CC.arm ? JC[CC.arm] : [0, 0], bC = Math.round(zC * ZC);
      return {
        left: RC(CC.x + QC * bC, ZC),
        top: RC(CC.y + wC * bC, ZC)
      }
    }

    function iC(CC) {
      return CC.arm ? {
        "data-arm": CC.arm,
        "data-x": CC.x,
        "data-y": CC.y
      } : {}
    }

    function vC(CC) {
      let {
        settings: zC,
        inPreview: ZC,
        inEditor: QC,
        pressed: fC = !1,
        spread: qC,
        spreadRef: FC
      } = CC;
      const WC = (0, bC.useRef)(null),
        {
          box: gC,
          dpr: SC
        } = function(CC) {
          const [zC, ZC] = (0, bC.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, bC.useLayoutEffect)((() => {
            const zC = CC.current;
            if (!zC) return;
            const QC = () => {
              const CC = zC.getBoundingClientRect(),
                QC = window.devicePixelRatio || 1;
              ZC((zC => zC.dpr === QC && zC.box.left === CC.left && zC.box.top === CC.top && zC.box.width === CC.width && zC.box.height === CC.height ? zC : {
                box: {
                  left: CC.left,
                  top: CC.top,
                  width: CC.width,
                  height: CC.height
                },
                dpr: QC
              }))
            };
            QC();
            const wC = new ResizeObserver(QC);
            return wC.observe(zC), window.addEventListener("resize", QC), window.addEventListener("scroll", QC, !0), () => {
              wC.disconnect(), window.removeEventListener("resize", QC), window.removeEventListener("scroll", QC, !0)
            }
          }), [CC]), zC
        }(WC),
        pC = (0, bC.useRef)(SC);
      pC.current = SC;
      const PC = oC(zC, SC, fC && zC.growOnClick ? MC : 1),
        GC = function(CC, zC, ZC) {
          const QC = Math.round((CC.left + CC.width / 2) * ZC - zC / 2),
            wC = Math.round((CC.top + CC.height / 2) * ZC - zC / 2);
          return {
            x: QC / ZC - CC.left,
            y: wC / ZC - CC.top
          }
        }(gC, PC.cell, SC),
        RC = (0, nC.i)(zC.color),
        JC = (0, nC.i)(zC.outlineColor),
        vC = (0, bC.useRef)(0);
      (0, bC.useLayoutEffect)((() => {
        if (FC) return FC.current = CC => {
          var zC;
          vC.current = CC, null === (zC = WC.current) || void 0 === zC || zC.querySelectorAll("[data-arm]").forEach((zC => {
            Object.assign(zC.style, IC(function(CC) {
              return {
                x: Number(CC.dataset.x),
                y: Number(CC.dataset.y),
                arm: CC.dataset.arm
              }
            }(zC), CC, pC.current))
          }))
        }, () => {
          FC.current = null
        }
      }), [FC]);
      const eC = null !== qC && void 0 !== qC ? qC : vC.current;
      return (0, NC.jsx)("div", {
        ref: WC,
        className: wC()("CrosshairShapes", {
          CrosshairInPreview: ZC,
          CrosshairInEditor: QC || ZC,
          CrosshairSpreads: void 0 !== FC
        }),
        children: (0, NC.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: GC.x,
            top: GC.y,
            opacity: zC.opacity / 100
          },
          children: (0, NC.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [PC.ringOutline && (0, NC.jsx)("div", {
              className: "CrosshairRing",
              style: xC(PC.ringOutline, SC, JC)
            }), PC.outlines.map(((CC, zC) => (0, NC.jsx)("div", {
              className: "CrosshairPart",
              ...iC(CC),
              style: AC(CC, eC, SC, JC)
            }, `o${zC}`))), PC.ring && (0, NC.jsx)("div", {
              className: "CrosshairRing",
              style: xC(PC.ring, SC, RC)
            }), PC.fills.map(((CC, zC) => (0, NC.jsx)("div", {
              className: "CrosshairPart",
              ...iC(CC),
              style: AC(CC, eC, SC, RC)
            }, `f${zC}`)))]
          })
        })
      })
    }
  },
  34134: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      c: () => pC,
      g: () => SC
    });
    var QC = ZC(34116);
    const wC = "XH1-",
      bC = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      nC = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      fC = ["color", "outlineColor"],
      oC = 1 + 3 * fC.length + nC.length + 1,
      qC = Math.ceil(8 * oC / Math.log2(62)),
      FC = wC.length + qC;

    function WC(CC) {
      let zC = 90;
      for (const ZC of CC) zC = 31 * zC + ZC & 255;
      return zC
    }
    const NC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      MC = BigInt(NC.length);

    function gC(CC, zC) {
      let ZC = 0n;
      for (const wC of CC) {
        const CC = NC.indexOf(wC);
        if (CC < 0) return null;
        ZC = ZC * MC + BigInt(CC)
      }
      if (ZC >> BigInt(8 * zC) !== 0n) return null;
      const QC = [];
      for (let wC = 0; wC < zC; wC++) QC.unshift(Number(0xffn & ZC)), ZC >>= 8n;
      return QC
    }

    function SC(CC) {
      let zC = "shapes" === CC.style ? 1 : 0;
      bC.forEach(((ZC, QC) => {
        CC[ZC] && (zC |= 1 << QC + 1)
      }));
      const ZC = [zC];
      for (const wC of fC) {
        const zC = (0, QC.g)(wC, CC[wC]);
        ZC.push(zC >> 16 & 255, zC >> 8 & 255, 255 & zC)
      }
      for (const wC of nC) {
        const {
          min: zC,
          step: bC
        } = QC.c[wC];
        ZC.push(Math.round(((0, QC.g)(wC, CC[wC]) - zC) / bC))
      }
      return ZC.push(WC(ZC)), wC + function(CC, zC) {
        let ZC = 0n;
        for (const wC of CC) ZC = ZC << 8n | BigInt(wC);
        let QC = "";
        for (let wC = 0; wC < zC; wC++) QC = NC[Number(ZC % MC)] + QC, ZC /= MC;
        return QC
      }(ZC, qC)
    }

    function pC(CC) {
      for (const zC of CC.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qC}})`, "gi"))) {
        const CC = PC(gC(zC[1], oC));
        if (CC) return CC
      }
      return null
    }

    function PC(CC) {
      if (!CC || CC.length !== oC || WC(CC.slice(0, -1)) !== CC[CC.length - 1]) return null;
      const zC = CC[0],
        ZC = {
          ...QC.f,
          style: 1 & zC ? "shapes" : "classic"
        };
      bC.forEach(((CC, QC) => {
        ZC[CC] = 0 !== (zC & 1 << QC + 1)
      }));
      let wC = 1;
      for (const QC of fC) ZC[QC] = CC[wC] << 16 | CC[wC + 1] << 8 | CC[wC + 2], wC += 3;
      for (const bC of nC) {
        const {
          min: zC,
          step: nC
        } = QC.c[bC];
        ZC[bC] = (0, QC.g)(bC, zC + CC[wC] * nC), wC++
      }
      return ZC
    }
  },
  34116: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      f: () => wC,
      g: () => bC,
      i: () => qC,
      m: () => oC,
      n: () => FC,
      q: () => fC,
      u: () => nC
    });
    const QC = {
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
      wC = Object.freeze({
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

    function bC(CC, zC) {
      var ZC;
      const {
        min: bC,
        max: nC,
        step: fC
      } = QC[CC];
      if (!Number.isFinite(zC)) return wC[CC];
      const oC = (null !== (ZC = String(fC).split(".")[1]) && void 0 !== ZC ? ZC : "").length,
        qC = Number((Math.round(zC / fC) * fC).toFixed(oC));
      return Math.min(nC, Math.max(bC, qC))
    }

    function nC(CC, zC, ZC) {
      const QC = "number" === typeof ZC ? bC(zC, ZC) : ZC;
      return {
        ...CC,
        [zC]: QC
      }
    }

    function fC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(wC).every((QC => ZC.includes(QC) || CC[QC] === zC[QC]))
    }

    function oC(CC) {
      return fC(CC, wC)
    }

    function qC(CC) {
      return `#${CC.toString(16).padStart(6,"0")}`
    }

    function FC(CC) {
      const zC = /^#?([0-9a-f]{6})$/i.exec(CC.trim());
      return zC ? parseInt(zC[1], 16) : null
    }
  },
  34141: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC,
      f: () => NC
    });
    var QC = ZC(48),
      wC = ZC(38),
      bC = ZC(34134),
      nC = ZC(34116);
    const fC = "crosshairCode";
    let oC = null;
    const qC = new Set;

    function FC() {
      if (null === oC) {
        var CC;
        const zC = wC.i.getItem(fC);
        oC = null !== (CC = "string" === typeof zC ? (0, bC.c)(zC) : null) && void 0 !== CC ? CC : nC.f
      }
      return oC
    }

    function WC(CC) {
      oC = CC, (0, nC.m)(CC) ? wC.i.removeItem(fC) : wC.i.setItem(fC, (0, bC.g)(CC));
      for (const zC of qC) zC()
    }

    function NC() {
      const [CC, zC] = (0, QC.useState)(FC);
      return (0, QC.useEffect)((() => {
        const CC = () => {
          zC(FC())
        };
        return CC(), ZC = CC, qC.add(ZC), () => {
          qC.delete(ZC)
        };
        var ZC
      }), []), CC
    }
  },
  34066: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      i: () => QC
    });
    const QC = "image/jpeg",
      wC = "jpg"
  },
  34069: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      f: () => qC,
      j: () => FC
    });
    var QC = ZC(1609),
      wC = ZC(3188),
      bC = ZC(77),
      nC = ZC(1664),
      fC = ZC(34066);

    function oC() {
      return !(0, bC.isMobileApp)() || QC.d.supports("photos")
    }
    async function qC(CC) {
      var zC, ZC;
      if ((0, bC.isMobileApp)()) {
        const {
          saved: zC
        } = await QC.d.request("photos.save", {
          data: await (0, wC.d)(CC),
          mimeType: fC.i
        });
        return zC ? "saved" : "denied"
      }
      return (0, bC.isIOS)() && null !== (zC = (ZC = navigator).canShare) && void 0 !== zC && zC.call(ZC, {
        files: [CC]
      }) ? FC(CC) : ((0, nC.e)(CC, CC.name), "saved")
    }
    async function FC(CC) {
      try {
        return await navigator.share({
          files: [CC]
        }), "shared"
      } catch (zC) {
        if (zC instanceof DOMException && "AbortError" === zC.name) return "wZ";
        if (zC instanceof DOMException && "NotAllowedError" === zC.name) return "needsTap";
        throw zC
      }
    }
  },
  34064: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      e: () => FC,
      i: () => WC
    });
    var QC = ZC(20),
      wC = ZC(34040),
      bC = ZC(1557),
      nC = ZC(34066);
    const fC = 8294400,
      oC = .92;

    function qC() {
      (0, bC.f)(), QC.b.set({
        screenshotMode: !0
      })
    }

    function FC() {
      QC.b.set({
        screenshotMode: !1
      })
    }
    async function WC() {
      const {
        width: CC,
        height: zC,
        scale: ZC
      } = function(CC, zC, ZC) {
        const QC = Math.max(1, CC),
          wC = Math.max(1, zC),
          bC = Math.min(Math.max(1, ZC), Math.sqrt(fC / (QC * wC)));
        return {
          width: Math.round(QC * bC),
          height: Math.round(wC * bC),
          scale: bC
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: QC
      } = await wC.devTools.capturePhoto(CC, zC, {
        scale: ZC,
        type: nC.i,
        quality: oC
      });
      return new File([QC], function(CC) {
        const zC = CC => String(CC).padStart(2, "0"),
          ZC = `${CC.getFullYear()}${zC(CC.getMonth()+1)}${zC(CC.getDate())}`,
          QC = `${zC(CC.getHours())}${zC(CC.getMinutes())}${zC(CC.getSeconds())}`;
        return `bloxd-${ZC}-${QC}.${nC.e}`
      }(new Date), {
        type: nC.i
      })
    }
  },
  34107: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      h: () => wC
    });
    var QC = ZC(20);

    function wC(CC, zC) {
      return CC && !zC
    }

    function bC() {
      return wC(QC.b.get("isTouchScreen"), QC.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34046: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    const QC = new Set(["chunkBorders"])
  },
  34040: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ALL_DEV_TOOLS: () => nC,
      coreDevTools: () => qC,
      devTools: () => oC
    });
    var QC = ZC(615),
      wC = ZC(1257),
      bC = ZC(34046);
    const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function fC() {
      const {
        noaDevTools: CC
      } = await ZC.e(236).then((() => ZC(40899)));
      return CC
    }
    const oC = new class {
        constructor() {
          this.loadHost = fC, this.tools = nC
        }
        setHost(CC) {
          this.tools = null === CC ? nC : CC.tools, this.loadHost = null === CC ? fC : async () => CC
        }
        supports(CC) {
          return this.tools.has(CC)
        }
        async downloadScene(CC, zC) {
          const ZC = await this.loadHost();
          await ZC.downloadScene(CC, zC)
        }
        async setAmbientLightIntensity(CC) {
          const zC = await this.loadHost();
          await zC.setAmbientLightIntensity(CC)
        }
        async capturePhoto(CC, zC, ZC) {
          return (await this.loadHost()).capturePhoto(CC, zC, ZC)
        }
      },
      qC = {
        tools: bC.c,
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
    QC.z && oC.setHost(qC), (0, wC.y)((() => {
      oC.setHost(qC)
    }))
  },
  34194: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      g: () => wC,
      i: () => FC
    });
    var QC = ZC(1501);

    function wC(CC) {
      var zC;
      return {
        ...nC.store,
        yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
      }
    }
    const bC = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      nC = {
        player: bC,
        store: {
          ...bC,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function fC(CC, zC) {
      CC instanceof Promise ? CC.then(zC).catch((CC => {
        console.error("Couldn't open the preview", CC)
      })) : zC(CC)
    }
    class oC {
      constructor(CC) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
        }))
      }
      show(CC) {
        var zC;
        this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    class qC {
      constructor(CC) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var CC, zC;
        return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
      }
      setCosmetic(CC, zC) {
        var ZC;
        null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
      }
      playEmote(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.playEmote(CC)
      }
      setOrbit(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.setOrbit(CC)
      }
      resetCamera() {
        var CC;
        null === (CC = this.opened) || void 0 === CC || CC.resetCamera()
      }
      async untilDrawn(CC) {
        var zC;
        await this.ready, await (null === (zC = this.opened) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    const FC = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(CC) {
        this.host = CC
      }
      setDefaultHost(CC) {
        this.makeDefault = CC
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(CC) {
        return new oC(this.current().openMob(CC))
      }
      openPet(CC) {
        return new oC(this.current().openPet(CC))
      }
      openMobLineup(CC) {
        return new oC(this.current().openMobLineup(CC))
      }
      openCharacter(CC, zC) {
        return new qC(this.current().openCharacter(CC, zC))
      }
    }
  },
  34185: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.d,
      g: () => QC.g,
      k: () => QC.i
    });
    var QC = ZC(34194);
    class wC {
      constructor(CC) {
        this.load = CC, this.loaded = null, this.loading = null
      }
      run(CC) {
        return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
          throw this.loading = null, CC
        })), this.loading.then(CC))
      }
    }
    class bC {
      constructor() {
        this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(246)]).then((() => ZC(40923))))), this.characterScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(245)]).then((() => ZC(41e3)))))
      }
      openMob(CC) {
        return this.mobScene.run((zC => zC.openMobPreview(CC)))
      }
      openPet(CC) {
        return this.mobScene.run((zC => zC.openPetPreview(CC)))
      }
      openMobLineup(CC) {
        return this.mobScene.run((zC => zC.openMobLineupPreview(CC)))
      }
      openCharacter(CC, zC) {
        return this.characterScene.run((ZC => ZC.openCharacterPreview(CC, zC)))
      }
    }
    QC.i.setDefaultHost((() => new bC))
  },
  6660: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      e: () => bC
    });
    var QC = ZC(38);
    const wC = "shaderPack";
    async function bC() {
      var CC;
      let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
    }
  },
  34076: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return CC && !zC
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  34102: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(1029);

    function wC() {
      var CC, zC;
      return null !== (CC = null === (zC = screen.orientation) || void 0 === zC ? void 0 : zC.type) && void 0 !== CC ? CC : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const bC = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && wC() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = wC(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, QC.IS)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const CC of this.resizers) CC()
          }
        }), 1e3)
      }
      heldSizer(CC) {
        let zC = !1;
        return () => {
          if (zC && this.isHeld()) return null;
          const ZC = CC();
          return zC ||= null !== ZC, ZC
        }
      }
      onRelease(CC) {
        return this.resizers.add(CC), () => {
          this.resizers.delete(CC)
        }
      }
    }
  },
  34072: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      e: () => WC,
      f: () => FC
    });
    var QC = ZC(20),
      wC = ZC(1609),
      bC = ZC(38),
      nC = ZC(3592);
    const fC = 2592e5,
      oC = "notificationOptInLastPromptedAt";
    async function qC() {
      var CC;
      const zC = null !== (CC = bC.i.getItem(oC)) && void 0 !== CC ? CC : 0;
      return Date.now() - zC < fC ? null : WC()
    }

    function FC() {
      bC.i.setItem(oC, Date.now())
    }
    async function WC() {
      return await wC.d.ready, wC.d.supports("notifications") ? QC.b.get("mobilePushNotificationsCanAsk") ? async () => {
        wC.d.request("notifications.requestPermission", {}).then((CC => {
          let {
            canAsk: zC
          } = CC;
          QC.b.set({
            mobilePushNotificationsCanAsk: zC
          })
        }), (CC => {
          console.error("The app couldn't ask for push notifications:", CC)
        }))
      }: null: await nC.d.canAsk() ? () => nC.d.requestPermission() : null
    }
  },
  34053: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => GC,
      e: () => qC,
      h: () => SC,
      i: () => gC
    });
    var QC = ZC(134),
      wC = ZC(1211),
      bC = ZC(1149),
      nC = ZC(1078),
      fC = ZC(1642);
    const oC = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function qC(CC) {
      return oC[CC]
    }

    function FC(CC) {
      return (0, fC.c)(CC) ? "outdated" : CC instanceof QC.d ? 429 === CC.httpCode ? "busy" : "server" : "offline"
    }

    function WC(CC, zC, ZC) {
      return (0, nC.postJsonWithMetricsCookiesAndJsonResponse)(`${bC.clientSideServerUrls.indexUrl}${zC}`, ZC, {
        retries: 3
      }, CC.getMetricsCookies()).catch((CC => (console.error("Bad response from the server when trying to change name:", zC, CC), {
        outcome: "failed",
        failure: FC(CC)
      })))
    }

    function NC(CC) {
      return "outcome" in CC && "failed" === CC.outcome
    }

    function MC(CC) {
      return console.error("Error when trying to get with new name from DB", CC), {
        outcome: "refused",
        message: CC
      }
    }
    async function gC(CC) {
      const zC = await WC(CC, "/index/name/random", {});
      return NC(zC) ? zC : "err" in zC ? MC(zC.err) : (CC.setPlayerName(zC.name), {
        outcome: "changed",
        name: zC.name
      })
    }
    async function SC(CC, zC) {
      const ZC = await WC(CC, "/index/name/update", {
        name: zC
      });
      return NC(ZC) ? ZC : "err" in ZC ? MC(ZC.err) : ZC.nameExists ? {
        outcome: "taken"
      } : (CC.setPlayerName(zC), {
        outcome: "changed",
        name: zC
      })
    }

    function pC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const QC = 1 === zC ? 1 : 10 ** (zC - 1),
        bC = String(QC + Math.floor(ZC() * (10 ** zC - QC)));
      return `${CC.slice(0,wC.i-zC)}${bC}`
    }
    const PC = [1, 2, 3, 4];
    async function GC(CC, zC) {
      const ZC = await SC(CC, zC);
      if ("taken" !== ZC.outcome) return ZC;
      for (const QC of PC) {
        const ZC = pC(zC, QC),
          wC = await SC(CC, ZC);
        if ("taken" !== wC.outcome) return wC
      }
      return {
        outcome: "taken"
      }
    }
  },
  34082: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      d: () => oC
    });
    var QC = ZC(20);
    const wC = 24,
      bC = "farNametags",
      nC = 1e5;

    function fC() {
      var CC;
      return null === (CC = QC.b.get("showDistantNametags")) || void 0 === CC || CC
    }

    function oC() {
      var CC;
      return null !== (CC = function() {
        const CC = new URLSearchParams(window.location.search).get(bC),
          zC = null === CC || "" === CC ? NaN : Number(CC);
        return Number.isFinite(zC) && zC >= 0 ? Math.min(zC, nC) : null
      }()) && void 0 !== CC ? CC : fC() ? 0 : wC
    }
  },
  34173: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => nC
    });
    const QC = [{
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

    function wC(CC) {
      let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof CC) {
        if (!Number.isFinite(CC)) return "0";
        if (Math.abs(CC) < 100) {
          const zC = CC < 0 ? "-" : "",
            ZC = Math.abs(CC);
          return ZC >= 10 ? `${zC}${ZC.toFixed(1).replace(/\.0$/,"")}` : `${zC}${ZC.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zC = BigInt(Math.floor(CC))
      } else zC = CC;
      const wC = zC < 0n ? -zC : zC,
        bC = zC < 0n ? "-" : "",
        nC = wC.toString();
      if (nC.length <= ZC) return `${bC}${nC}`;
      const fC = 3 * Math.floor((nC.length - 1) / 3);
      if (fC < 3) return `${bC}${nC}`;
      if (fC > 3 * QC.length) {
        const CC = nC[0],
          zC = nC.slice(1, 3).replace(/0+$/, "");
        return `${bC}${zC?`${CC}.${zC}`:CC}e${nC.length-1}`
      }
      const {
        threshold: oC,
        suffix: qC
      } = QC[QC.length - fC / 3], FC = wC / oC, WC = Number(1000n * (wC % oC) / oC), NC = Number(FC) + WC / 1e3;
      let MC;
      return MC = NC >= 100 ? Math.floor(NC).toString() : NC >= 10 ? NC.toFixed(1).replace(/\.0$/, "") : NC.toFixed(2).replace(/\.?0+$/, ""), `${bC}${MC}${qC}`
    }
    const bC = QC.map((CC => {
      let {
        threshold: zC,
        suffix: ZC
      } = CC;
      return {
        threshold: Number(zC),
        suffix: ZC
      }
    })).filter((CC => {
      let {
        threshold: zC
      } = CC;
      return Number.isFinite(zC)
    }));

    function nC(CC) {
      const zC = Math.abs(CC),
        ZC = CC < 0 ? "-" : "";
      for (const {
          threshold: QC,
          suffix: wC
        }
        of bC)
        if (zC >= QC) {
          const CC = zC / QC;
          if (CC >= 1e3) return `${ZC}${zC.toExponential(2).replace("e+","e")}`;
          let bC;
          return bC = CC >= 100 ? Math.floor(CC).toString() : CC >= 10 ? CC.toFixed(1).replace(/\.0$/, "") : CC.toFixed(2).replace(/\.?0+$/, ""), `${ZC}${bC}${wC}`
        } return `${ZC}${zC}`
    }
  },
  34162: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      h: () => NC,
      i: () => WC,
      l: () => nC,
      p: () => qC,
      t: () => oC
    });
    var QC = ZC(326);
    const wC = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      bC = {
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

    function nC(CC) {
      var zC;
      return null !== (zC = bC[CC]) && void 0 !== zC ? zC : {
        translationKey: ""
      }
    }
    const fC = {
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

    function oC(CC) {
      return wC.includes(CC)
    }

    function qC(CC) {
      var zC;
      return !0 === (null === CC || void 0 === CC || null === (zC = CC.customAttributes) || void 0 === zC ? void 0 : zC.cannotEnchant)
    }

    function FC(CC, zC) {
      const {
        max: ZC
      } = fC[CC].at(-1);
      return zC <= ZC
    }

    function WC(CC) {
      const zC = Math.sin(CC / 80),
        ZC = CC => {
          if (CC <= 0) return 0;
          if (CC > 1) return 1;
          let zC = 0;
          const ZC = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let QC = 0; QC < ZC.length; QC++) {
            zC += (QC % 2 === 0 ? 1 : -1) * ZC[QC] * Math.pow(CC, 2 + QC) / (2 + QC)
          }
          return 72 * zC
        },
        QC = .3 - .78 * zC,
        wC = .5 - .78 * zC,
        bC = .6 - .7 * zC,
        nC = .8 - .6 * zC;
      let fC = ZC(QC),
        oC = ZC(wC) - fC,
        qC = ZC(bC) - oC - fC,
        FC = ZC(nC) - qC - oC - fC;
      QC < .041 && (oC /= 1 - fC, qC /= 1 - fC, FC /= 1 - fC, fC = 0), wC < .041 && (fC /= 1 - oC, qC /= 1 - oC, FC /= 1 - oC, oC = 0), bC < .041 && (fC /= 1 - qC, oC /= 1 - qC, FC /= 1 - qC, qC = 0), nC < .041 && (fC /= 1 - FC, oC /= 1 - FC, qC /= 1 - FC, FC = 0);
      return {
        commonProb: fC,
        uncommonProb: oC,
        rareProb: qC,
        epicProb: FC,
        legendaryProb: 1 - (FC + qC + oC + fC)
      }
    }

    function NC(CC, zC) {
      const {
        min: ZC,
        max: wC
      } = fC[CC][zC], bC = QC.c.sampleUniformIntDistribution(ZC, wC, "includeMax");
      return {
        ...WC(bC),
        level: bC
      }
    }
  },
  34125: () => {},
  12756: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13888: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15367: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15949: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);