export const id = 98;
export const ids = [98, 185];
export const modules = {
  9225: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      EverythingMenu: () => yy
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1195),
      yT = cT(1061),
      fT = cT(2108),
      xT = cT(1470),
      IT = cT(1117),
      AT = cT(1099);

    function CT(TT) {
      let {
        items: kT,
        link: cT,
        onClick: lT,
        selectedItemId: MT,
        className: CT,
        padStartsOnTab: jT = !0
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), tT = (0, IT.i)(), hT = [];
      for (const KT of kT) {
        var NT;
        const TT = hT[hT.length - 1];
        var QT;
        if (TT && TT.title === (null !== (NT = KT.section) && void 0 !== NT ? NT : null)) TT.items.push(KT);
        else hT.push({
          title: null !== (QT = KT.section) && void 0 !== QT ? QT : null,
          items: [KT]
        })
      }
      return (0, AT.jsxs)("div", {
        className: KT()("MenuSideBarBody", CT),
        "data-pad-tabs": "2",
        children: [hT.map(((TT, kT) => {
          var cT;
          return (0, AT.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [TT.title && (0, AT.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: vT(TT.title)
            }), TT.items.map((TT => {
              var kT;
              const cT = !!TT.iconElement || !!TT.faIcon;
              return (0, AT.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": MT === TT.id ? "true" : void 0,
                "data-pad-default-focus": jT && MT === TT.id || void 0,
                className: KT()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: MT === TT.id
                }),
                onClick: () => {
                  lT(TT.id)
                },
                children: [cT && (0, AT.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (kT = TT.iconElement) && void 0 !== kT ? kT : (0, AT.jsx)(yT.e, {
                    name: TT.faIcon
                  })
                }), (!tT || !cT) && (0, AT.jsx)("div", {
                  children: vT(TT.title)
                }), TT.redDot && (0, AT.jsx)(fT.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, TT.id)
            }))]
          }, null !== (cT = TT.title) && void 0 !== cT ? cT : kT)
        })), cT && (0, AT.jsxs)("div", {
          ...(0, xT.X)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: cT.onClick,
          children: [(0, AT.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, AT.jsx)(yT.e, {
              name: cT.faIcon
            })
          }), (0, AT.jsx)("div", {
            children: vT(cT.title)
          }), (0, AT.jsx)(yT.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var jT = cT(2938),
      vT = cT(1130),
      tT = cT(2462),
      hT = cT(3041),
      NT = cT(118),
      QT = cT(1953),
      ST = cT(2290),
      DT = cT(2297),
      aT = cT(1692),
      FT = cT(1348),
      rT = cT(4945),
      PT = cT(31),
      wT = cT(9233);

    function mT(TT) {
      let {
        setApplySettingsCallback: kT
      } = TT;
      const {
        clientEscMenuOptions: cT
      } = (0, PT.n)(["clientEscMenuOptions"]), [MT, KT] = (0, lT.useState)(!1), [OT, yT] = (0, lT.useState)(!1), [fT, IT] = (0, lT.useState)(6400), [CT, jT] = (0, lT.useState)(3600), [vT, tT] = (0, lT.useState)(!1), [hT, NT] = (0, lT.useState)(!1);

      function QT(TT) {
        const kT = "screenshot" === TT ? yT : KT;
        kT(!0);
        const cT = vT ? "normals" : hT ? "depth" : null;
        wT.devTools.downloadScene(TT, {
          width: fT,
          height: CT,
          colouring: cT
        }).catch((TT => {
          console.error("Couldn't download the scene", TT)
        })).finally((() => {
          kT(!1)
        }))
      }
      return (0, AT.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, AT.jsx)(rT.e, {
          label: "Disable Ambient Occlusion",
          checked: cT.disableAmbientOcclusion,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              disableAmbientOcclusion: TT
            }), kT((() => rT.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), wT.devTools.supports("ambientLight") && (0, AT.jsx)(rT.l, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: cT.ambientLightIntensity,
          onChange: TT => {
            wT.devTools.setAmbientLightIntensity(TT).then((() => {
              PT.e.setClientEscMenuOptions({
                ambientLightIntensity: TT
              })
            })).catch((TT => {
              console.error("Couldn't set the ambient light", TT)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), wT.devTools.supports("weaponRaycasts") && (0, AT.jsx)(rT.e, {
          label: "Show Weapon Raycasts",
          checked: cT.showWeaponRaycasts,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              showWeaponRaycasts: TT
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), wT.devTools.supports("sceneDownload") && (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AT.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, AT.jsx)(rT.e, {
              label: "Apply normal-based coloring",
              checked: vT,
              onClick: TT => {
                tT(TT), TT && NT(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, AT.jsx)(rT.e, {
              label: "Apply depth-based coloring",
              checked: hT,
              onClick: TT => {
                NT(TT), TT && tT(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, AT.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, AT.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, AT.jsx)(aT.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, kT) => {
                  const cT = parseInt(TT) || 6400;
                  IT(cT)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: fT.toString()
              }), (0, AT.jsx)("span", {
                children: "X"
              }), (0, AT.jsx)(aT.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, kT) => {
                  const cT = parseInt(TT) || 3600;
                  jT(cT)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: CT.toString()
              })]
            }), (0, AT.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, AT.jsxs)(xT.e, {
                onClick: () => {
                  QT("screenshot")
                },
                disabled: OT,
                children: [OT && (0, AT.jsx)(FT.d, {}), "Download Screenshot"]
              }), (0, AT.jsxs)(xT.e, {
                onClick: () => {
                  QT("glb")
                },
                disabled: MT,
                children: [MT && (0, AT.jsx)(FT.d, {}), "Download GLB"]
              })]
            })]
          }), (0, AT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var bT = cT(159),
      zT = cT(1136),
      JT = cT(1202),
      oT = cT(2940),
      HT = cT(1530),
      eT = cT(1279),
      GT = cT(1242),
      VT = cT(3013),
      ET = cT(2071),
      ZT = cT(1518),
      uT = cT(339),
      XT = cT(2305),
      dT = cT(2315),
      LT = cT(2705),
      RT = cT(1663),
      gT = cT(2987),
      UT = cT(2954),
      YT = cT(3020),
      BT = cT(229);

    function WT(TT) {
      const {
        t: kT,
        selectedLanguage: cT
      } = (0, OT.B)(), {
        userContext: MT
      } = (0, vT.b)(), {
        superRankInfo: KT
      } = MT, yT = TT && ((0, uT.vc)(KT) || MT.ranksMayChange) && (0, dT.purchasesAllowed)(), {
        accountId: fT,
        data: xT
      } = (0, LT.d)(gT.b, yT);
      if ((0, lT.useEffect)((() => {
          if (yT) return gT.b.watchAccount(), RT.b.addRefetchListener("billing", (TT => {
            "reconnected" === TT ? gT.b.refreshAfterReconnect() : gT.b.refresh()
          }))
        }), [yT]), !yT || !(0, uT.vc)(KT) || null === xT || fT !== MT.whamm) return null;
      const IT = function(TT, kT, cT) {
        const lT = YT.j[(0, YT.e)(YT.j, kT)],
          MT = void 0 === lT ? void 0 : (0, BT.d)(TT.entitlements, lT.entitlementId);
        return void 0 === MT || null === MT.expiresAt || (0, UT.d)(MT) <= cT ? null : MT.willRenew && null === MT.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(MT.expiresAt, cT)
        } : {
          renews: !1,
          at: (0, UT.d)(MT)
        }
      }(xT, KT.tier, Date.now());
      if (null === IT) return null;
      const AT = IT.renews ? "store:renewsOn" : "store:endsOn";
      return kT(AT, {
        date: new Date(IT.at).toLocaleDateString((0, OT.k)(cT.code, AT), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var nT = cT(1379),
      pT = cT(1214),
      iT = cT(4843),
      qT = cT(1497),
      sT = cT(3620),
      Tk = cT(2278);

    function kk(TT) {
      let {
        showing: kT
      } = TT;
      const {
        t: cT
      } = (0, OT.B)(), {
        data: lT,
        failed: MT
      } = (0, LT.d)(sT.i, kT);
      return 0 === (null === lT || void 0 === lT ? void 0 : lT.length) || null === lT && !MT ? null : (0, AT.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, AT.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cT("paymentHistory:title")
        }), null === lT && MT && (0, AT.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: cT("paymentHistory:loadFailed")
        }), null !== lT && (0, AT.jsx)("ul", {
          className: "PaymentHistoryList",
          children: lT.map((TT => (0, AT.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, AT.jsx)(Tk.c, {
              entry: TT
            }), (0, AT.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, AT.jsx)("div", {
                children: (0, Tk.g)(cT, TT)
              }), (0, AT.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(TT.at).toLocaleDateString(), "number" === typeof TT.orderId && ` \xb7 ${cT("paymentHistory:order",{orderId:TT.orderId})}`]
              })]
            })]
          }, (0, sT.e)(TT))))
        })]
      })
    }
    var ck = cT(1911),
      lk = cT(1252),
      Mk = cT(1363),
      Kk = cT(1316),
      Ok = cT(1792),
      yk = cT(2950);
    async function fk() {
      try {
        return function(TT) {
          const kT = new Map;
          for (const {
              store: cT,
              status: lT,
              autoRenewStatus: MT,
              managementUrl: KT
            }
            of Object.values(TT.subscriptions)) !(0, UT.f)(cT) || (0, UT.h)(lT) || "willNotRenew" === MT || kT.has(cT) || kT.set(cT, null !== KT && void 0 !== KT ? KT : UT.j[cT]);
          return Array.from(kT, (TT => {
            let [kT, cT] = TT;
            return {
              store: kT,
              managementUrl: cT
            }
          }))
        }(await (0, Ok.m)((0, yk.c)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (TT) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", TT), null
      }
    }
    var xk = cT(328),
      Ik = cT(2546);
    const Ak = {
      appStore: {
        name: "App Store",
        ...xk.Ib.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...xk.Ib.googlePlay
      },
      discord: {
        name: "Discord",
        ...xk.Ib.discord
      }
    };

    function Ck(TT) {
      let {
        warning: kT,
        subscriptions: cT
      } = TT;
      const {
        t: lT
      } = (0, OT.B)();
      return null !== cT && 0 === cT.length ? (0, AT.jsx)(AT.Fragment, {
        children: lT(kT)
      }) : (0, AT.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [lT(kT), null === cT && (0, AT.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: lT("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== cT && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: lT("auth:deleteAccountStoreSubscriptions")
          }), (0, AT.jsx)(Ik.d, {
            className: "DeleteAccountSubtitleLinks",
            links: cT.map((TT => {
              let {
                store: kT,
                managementUrl: cT
              } = TT;
              return {
                ...Ak[kT],
                url: cT
              }
            }))
          })]
        })]
      })
    }

    function jk(TT) {
      let {
        showing: kT
      } = TT;
      const {
        userContext: cT,
        isUserContextUpdating: MT
      } = (0, vT.b)(), {
        t: KT
      } = (0, OT.B)(), [yT, fT] = (0, lT.useState)(!1), [IT, CT] = (0, lT.useState)(null), jT = (0, lT.useRef)(kT);
      (0, lT.useEffect)((() => (jT.current = kT, () => {
        jT.current = !1
      })), [kT]);
      const tT = MT || yT;
      async function hT() {
        const TT = function(TT) {
            if ((0, bT.c)()) return "auth:discordActivityDeleteAccountLossWarning";
            return TT ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(cT.isLoggedIn()),
          kT = (0, ck.c)(cT.availableUserContextTypes) ? await fk() : [];
        if (!jT.current) return lk.d.ok();
        if (!0 !== await Mk.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, eT.c)(cT.getPlayerName(), !NT.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, AT.jsx)(Ck, {
              warning: TT,
              subscriptions: kT
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return lk.d.ok();
        const lT = await (0, zT.postJsonWithMetricsCookiesAndJsonResponse)(`${JT.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: PT.e.get("gameState")
        }, {
          retries: 3
        }, cT.getMetricsCookies());
        if (lT.error) return lk.d.error(lT.error);
        if ((0, bT.c)()) {
          (await Kk.k.discordActivity()).exit("User deleted their account")
        }
        return (0, zT.forgetStoredGuestAccount)(cT.whamm), (0, zT.forceGlobalSignOut)(!0), lk.d.ok()
      }
      return (0, AT.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, AT.jsxs)(xT.I, {
          onClick: async function() {
            if (!yT) {
              fT(!0);
              try {
                const TT = await hT(),
                  kT = TT.isError() ? TT.asError().message : null;
                CT(kT)
              } catch (TT) {
                console.error("Failed to delete account:", TT), CT(KT("auth:genericDeleteAccountError"))
              }
              fT(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: tT,
          children: [tT && (0, AT.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, AT.jsx)(FT.d, {})
          }), KT("auth:deleteAccount")]
        }), IT && (0, AT.jsx)("div", {
          className: "DeleteAccountError",
          children: IT
        })]
      })
    }
    var vk = cT(3544),
      tk = cT(3560),
      hk = cT(3551);

    function Nk(TT) {
      let {
        showing: kT
      } = TT;
      const {
        t: cT
      } = (0, OT.B)(), {
        data: lT,
        failed: MT
      } = (0, LT.d)(vk.d, kT), KT = null === lT ? null : (0, vk.f)(lT);
      return (0, AT.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, AT.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cT("settingsMenu:blockedAndIgnoredPlayers")
        }), null === KT && !MT && (0, AT.jsx)(FT.d, {}), null === KT && MT && (0, AT.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [cT("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, AT.jsx)(xT.e, {
            className: "SmallTextLight",
            onClick: () => {
              vk.d.refresh()
            },
            children: cT("general:tryAgain")
          })]
        }), 0 === (null === KT || void 0 === KT ? void 0 : KT.length) && (0, AT.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: cT("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== KT && KT.length > 0 && (0, AT.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: KT.map((TT => {
            let {
              name: kT,
              exclusion: lT
            } = TT;
            const MT = hk.h[lT];
            return (0, AT.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, AT.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: kT
              }), (0, AT.jsx)(xT.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, tk.i)(MT, kT, {
                    chatMessage: null
                  })
                },
                children: cT(hk.k[MT].text)
              })]
            }, kT)
          }))
        })]
      })
    }
    const Qk = (0, lT.memo)((function(TT) {
      var kT;
      let {
        showing: cT,
        inGame: MT
      } = TT;
      const {
        t: fT,
        selectedLanguage: IT
      } = (0, OT.B)(), {
        hideSocialLocationFrom: CT
      } = (0, PT.n)(["hideSocialLocationFrom"]), tT = (0, jT.b)(), {
        userContext: hT,
        isUserContextUpdating: QT
      } = (0, vT.b)(), [ST, DT] = (0, lT.useState)(null !== (kT = hT.getPlayerName()) && void 0 !== kT ? kT : ""), [wT, mT] = (0, lT.useState)(null), {
        purchasing: LT,
        outcome: RT,
        purchase: gT
      } = (0, oT.c)("/super-rank-welcome"), UT = (0, uT._b)((0, OT.k)(IT.code, "general:timeLeft"), hT.superRankInfo), YT = WT(cT), BT = UT ? fT("general:timeLeft", {
        time: UT
      }) : YT, [sT, Tk] = (0, lT.useState)(!1), [ck, lk] = (0, lT.useState)(!1), Mk = (0, lT.useRef)(null), Kk = (0, lT.useRef)(null), Ok = (0, ET.i)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), yk = null === Ok, fk = null !== Ok && void 0 !== Ok ? Ok : [], xk = hT !== zT.NULL_USER_CONTEXT && !hT.isLoggedIn(), Ik = xk && 0 !== (null === Ok || void 0 === Ok ? void 0 : Ok.length), [Ak, Ck] = (0, lT.useState)([]), [vk, tk] = (0, lT.useState)(!1), hk = hT.playerHasRank("youtuber"), Qk = (0, lT.useCallback)((() => ZT.d.getPlayerProfile(hT, {
        lowerCaseName: hT.getPlayerName().toLowerCase()
      }).then((TT => {
        Ck(TT.socialLinks)
      })).catch((TT => {
        console.error("Failed to refresh social links", TT)
      }))), [hT]);

      function Dk(TT) {
        TT !== ST && ((0, eT.q)(TT) ? (TT = (0, eT.t)(TT), mT("Only letters, numbers, and _")) : mT(null), Mk.current && (Mk.current.value = TT), DT(TT))
      }
      return (0, lT.useEffect)((() => (!0 === cT ? (clearInterval(Kk.current), Kk.current = setInterval(tT, 1e3)) : clearInterval(Kk.current), () => {
        clearInterval(Kk.current)
      })), [cT, tT]), (0, lT.useEffect)((() => {
        var TT;
        DT(null !== (TT = hT.getPlayerName()) && void 0 !== TT ? TT : "")
      }), [hT]), (0, lT.useEffect)((() => {
        if (!cT || !hk || QT) return;
        let TT = !1;
        return tk(!0), Ck([]), ZT.d.getPlayerProfile(hT, {
          lowerCaseName: hT.getPlayerName().toLowerCase()
        }).then((kT => {
          TT || Ck(kT.socialLinks)
        })).catch((TT => {
          console.error("Failed to load social links", TT)
        })).finally((() => {
          TT || tk(!1)
        })), () => {
          TT = !0
        }
      }), [cT, hk, QT, hT]), (0, AT.jsxs)("div", {
        className: KT()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: MT
        }),
        children: [MT && (0, AT.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: fT("settingsMenu:accountSettingsInGameWarning")
        }), (0, AT.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, AT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [fT("homePage:discordNamePopupTitle"), (0, AT.jsxs)(HT.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, GT.h)({
                name: hT.getPlayerName()
              }),
              onClick: () => {
                PT.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, AT.jsx)(yT.e, {
                name: "arrow-up-right-from-square"
              }), " ", fT("profileCard:viewProfile")]
            })]
          }), (0, AT.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, AT.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [NT.featureFlags.canChangeName && (0, AT.jsx)(aT.b, {
                className: "EnterName",
                placeholderText: fT("homePage:enterName"),
                maxLength: eT.i,
                defaultValue: ST,
                onValueChange: TT => {
                  Dk(TT)
                },
                forcedText: sT || !NT.featureFlags.canChangeName ? ST : null,
                blurOnEnter: !0,
                domRef: Mk
              }), (0, AT.jsx)(xT.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Dk((0, eT.f)())
                },
                children: (0, AT.jsx)(yT.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !NT.featureFlags.canChangeName && (0, AT.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, eT.c)(ST, !NT.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, AT.jsx)(xT.e, {
              className: "ChooseNameButton",
              disabled: sT || ST === hT.getPlayerName(),
              onClick: () => {
                ST.length < eT.m ? mT(fT("homePage:changeNameMinLengthError", {
                  length: eT.m
                })) : ST.length > eT.i ? mT(fT("homePage:changeNameMaxLengthError", {
                  length: eT.i
                })) : (Tk(!0), mT(null), async function(TT, kT, cT, lT) {
                  const MT = await (0, zT.postJsonWithMetricsCookiesAndJsonResponse)(`${JT.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: TT
                  }, {
                    retries: 3
                  }, kT.getMetricsCookies()).catch((TT => (console.error("Bad response from the server when trying to update name:", TT), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  MT.err ? (console.error("Error when trying to get with new name from DB", MT.err), lT(MT.err)) : !0 === MT.nameExists ? lT("Name is already taken") : cT(TT)
                }(ST, hT, (TT => {
                  hT.setPlayerName(TT), Tk(!1)
                }), (TT => {
                  mT(TT), Tk(!1)
                })))
              },
              children: fT("general:choose")
            })]
          }), wT && (0, AT.jsx)("div", {
            className: "ChooseAccNameError",
            children: wT
          })]
        }), (0, AT.jsx)(rT.e, {
          label: (() => {
            if ((0, pT.l)(CT)) {
              const TT = (0, OT.k)(IT.code, "general:timeLeft"),
                kT = (0, uT._)(TT, Date.now(), CT + pT.j);
              return `${fT("settingsMenu:hideSocialLocation")} (${fT("general:timeLeft",{time:kT})})`
            }
            return fT("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const TT = !(0, pT.l)(CT);
            (0, qT.reportAnalyticsClick)({
              id: "social.hide_location",
              value: TT ? "on" : "off"
            }), lk(!0), ZT.d.setHideSocialLocation(hT, TT).then((() => {
              PT.e.set({
                hideSocialLocationFrom: TT ? Date.now() : null
              })
            })).finally((() => {
              lk(!1)
            }))
          },
          checked: (0, pT.l)(CT),
          disabled: ck
        }), hk && (0, AT.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, AT.jsx)("div", {
            className: "AccountSettingsLabel",
            children: fT("settingsMenu:socialLinks")
          }), vk && (0, AT.jsx)(FT.d, {}), !vk && (0, AT.jsx)(iT.b, {
            socialLinks: Ak,
            editable: !0,
            userContext: hT,
            onLinksUpdated: Qk
          })]
        }), (0, AT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AT.jsx)("div", {
            className: "AccountSettingsLabel",
            children: fT(Ik ? "auth:loginOrSwitchAccount" : "auth:login")
          }), yk && (0, AT.jsx)(FT.d, {}), !yk && 0 === fk.length && (0, AT.jsx)("div", {
            className: "NoLoginOptions",
            children: fT("auth:noLoginOptions")
          }), !yk && fk.length > 0 && "crazygames" !== bT.u && (0, AT.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: fk
          }), !yk && fk.length > 0 && "crazygames" === bT.u && (0, AT.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [fk[0], fk.length > 1 && (0, AT.jsxs)(AT.Fragment, {
              children: [(0, AT.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, AT.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: fT("auth:legacyLoginOptions")
                }), (0, AT.jsx)(nT.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: fT("auth:legacyLoginOptionsInfo")
                })]
              }), (0, AT.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: fk.slice(1)
              })]
            })]
          }), NT.featureFlags.useLogin && (null !== hT.loggedInInfo || hT.isLoggedIn()) && (0, AT.jsxs)(AT.Fragment, {
            children: [(0, AT.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, AT.jsxs)(xT.I, {
              onClick: () => {
                (0, zT.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, AT.jsx)(yT.e, {
                name: "right-from-bracket"
              }), fT("auth:signOut")]
            })]
          })]
        }), !hT.playerHasRank("super") && (0, dT.purchasesAllowed)() && (0, AT.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, AT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, AT.jsx)(yT.e, {
              name: "bolt"
            }), fT("homePage:superRank")]
          }), (0, AT.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, AT.jsxs)(xT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, XT.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AT.jsx)(yT.e, {
                name: "bolt"
              }), fT("homePage:getSuperRank")]
            }), (0, AT.jsxs)(xT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, XT.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AT.jsx)(yT.e, {
                name: "bolt"
              }), fT("homePage:giftSuperRank")]
            })]
          })]
        }), hT.playerHasRank("super") && (0, AT.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, AT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, AT.jsx)(yT.e, {
              name: "bolt"
            }), fT("homePage:superRank"), BT && (0, AT.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", BT, ")"]
            })]
          }), (0, dT.purchasesAllowed)() && (0, AT.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, uT.vc)(hT.superRankInfo) && (0, AT.jsxs)(xT.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: LT,
              onClick: () => {
                gT(VT.j.id, null)
              },
              children: [(0, AT.jsx)(yT.e, {
                name: "bolt"
              }), fT("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: VT.j.product.days,
                price: VT.j.price
              })]
            }), (0, AT.jsxs)(xT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, XT.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AT.jsx)(yT.e, {
                name: "bolt"
              }), fT("homePage:giftSuperRank")]
            })]
          }), RT && (0, AT.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: fT(RT.translationKey)
          })]
        }), (0, AT.jsx)(kk, {
          showing: cT
        }), NT.featureFlags.useSocialFeatures && (0, AT.jsx)(Nk, {
          showing: cT
        }), (0, AT.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, AT.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, AT.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: fT(Sk(xk, Ik))
            }), (0, bT.c)() && (0, AT.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: fT("auth:discordActivityKickWarning")
            }), (0, AT.jsx)(jk, {
              showing: cT
            })]
          }), (0, AT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: fT("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Sk(TT, kT) {
      return TT ? kT ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Dk = cT(9250),
      ak = cT(3059),
      Fk = cT(1261),
      rk = cT(1452);
    const Pk = (0, lT.memo)((function(TT) {
        let {
          inGame: kT
        } = TT;
        const {
          t: cT,
          selectedLanguage: lT
        } = (0, OT.B)(), {
          clientEscMenuOptions: MT,
          showDebugOverlay: KT
        } = (0, PT.n)(["clientEscMenuOptions", "showDebugOverlay"]), yT = (0, tT.f)("hideCoordinates");
        let fT = "settingsMenu:showCoordinates",
          xT = "settingsMenu:showChunkCoordinates";

        function IT(TT) {
          const kT = new Intl.DisplayNames([TT], {
            type: "language"
          }).of(TT);
          return kT.charAt(0).toUpperCase() + kT.slice(1)
        }
        return yT && (fT = "settingsMenu:showCoordinatesHidden", xT = "settingsMenu:showChunkCoordinatesHidden"), (0, AT.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [kT && NT.featureFlags.canUseInviteLinks && (0, AT.jsxs)("div", {
            className: "SettingBox",
            children: [(0, AT.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: cT("settingsMenu:inviteLink")
            }), (0, AT.jsx)(Dk.f, {})]
          }), (0, AT.jsxs)("div", {
            className: "SettingBox",
            children: [(0, AT.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: cT("settingsMenu:language")
            }), (0, AT.jsx)(ak.d, {
              options: Object.entries(OT.i).map((TT => {
                let [kT, cT] = TT;
                return {
                  label: (0, AT.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, AT.jsx)("img", {
                      src: cT.flagImg,
                      alt: "flag"
                    }), (0, AT.jsxs)("span", {
                      children: [IT(kT), " ", (0, AT.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", kT, ")"]
                      })]
                    })]
                  }),
                  value: kT
                }
              })),
              value: lT.code,
              onChange: TT => {
                Fk.f.get().setCurrentLanguage(TT.value)
              }
            })]
          }), !(0, NT.isMobileApp)() && (0, rk.f)() && NT.featureFlags.useForceRotateForceFullscreenOverlay && (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:disableFullscreenMode"),
            checked: MT.disableFullscreen,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                disableFullscreen: TT
              })
            }
          }), (0, AT.jsx)(rT.e, {
            label: cT(fT),
            checked: MT.showCoordinates,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showCoordinates: TT
              })
            },
            disabled: yT
          }), (0, AT.jsx)(rT.e, {
            label: cT(xT),
            checked: MT.showChunkCoordinates,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showChunkCoordinates: TT
              })
            },
            disabled: yT
          }), (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:showFps"),
            checked: MT.showFPS,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showFPS: TT
              })
            }
          }), (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:disableBunnyHopping"),
            checked: MT.disableBunnyHopping,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                disableBunnyHopping: TT
              })
            }
          }), (0, Kk.r)() && (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:showChat"),
            checked: MT.showChat,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showChat: TT
              })
            }
          }), (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:showDebugOverlay"),
            checked: KT,
            onClick: TT => {
              PT.e.set({
                showDebugOverlay: TT
              })
            }
          }), NT.featureFlags.useSocialFeatures && (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:showFriendOnlineToasts"),
            checked: MT.showFriendOnlineToasts,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showFriendOnlineToasts: TT
              })
            }
          }), (0, AT.jsx)(rT.e, {
            label: cT("settingsMenu:showNewItemIndicator"),
            checked: MT.showNewItemIndicator,
            onClick: TT => {
              PT.e.setClientEscMenuOptions({
                showNewItemIndicator: TT
              })
            }
          })]
        })
      })),
      wk = (0, lT.memo)((function() {
        const {
          t: TT
        } = (0, OT.B)(), {
          soundVolume: kT,
          musicVolume: cT
        } = (0, PT.n)(["soundVolume", "musicVolume"]);
        return (0, AT.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, AT.jsx)(rT.l, {
            name: TT("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: cT,
            onChange: TT => {
              PT.e.set({
                musicVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          }), (0, AT.jsx)(rT.l, {
            name: TT("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: kT,
            onChange: TT => {
              PT.e.set({
                soundVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          })]
        })
      }));
    var mk = cT(714),
      bk = cT(1461),
      zk = cT(3632),
      Jk = cT(9259),
      Hk = cT(3436);
    const ek = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Gk() {
      const {
        t: TT
      } = (0, OT.B)(), kT = (0, Hk.b)(), {
        mobilePushNotificationsCanAsk: cT
      } = (0, PT.n)(["mobilePushNotificationsCanAsk"]), [MT, KT] = (0, lT.useState)(null), [yT, fT] = (0, lT.useState)(!1), [IT, CT] = (0, lT.useState)(null), [jT, vT] = (0, lT.useState)(!1), tT = (0, lT.useCallback)((() => {
        (0, zk.b)().then((TT => {
          kT.current && (KT(TT), fT(!1))
        })).catch((TT => {
          console.error("Failed to load push notification targets:", TT), kT.current && fT(!0)
        }))
      }), [kT]), hT = (0, lT.useCallback)((() => {
        (0, Jk.b)().then((TT => {
          kT.current && CT((() => TT))
        }))
      }), [kT]);
      (0, lT.useEffect)((() => {
        tT()
      }), [tT]), (0, lT.useEffect)((() => {
        hT()
      }), [hT, cT]), (0, bk.g)(zk.g, tT);
      const NT = null === MT ? [] : Object.keys(ek).filter((TT => MT[TT] > 0));
      return (0, AT.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, AT.jsx)("div", {
          className: "SliderText",
          children: TT("notificationSettings:pushNotifications")
        }), null === MT && yT && (0, AT.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsLoadFailed")
        }), null !== MT && 0 === NT.length && (0, AT.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsNone")
        }), NT.length > 0 && (0, AT.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: NT.map((kT => {
            var cT;
            return (0, AT.jsx)("li", {
              children: TT(ek[kT], {
                count: null !== (cT = null === MT || void 0 === MT ? void 0 : MT[kT]) && void 0 !== cT ? cT : 0
              })
            }, kT)
          }))
        }), null !== IT && (0, AT.jsx)(xT.e, {
          className: "PushNotificationSettingsButton",
          loading: jT,
          onClick: () => {
            vT(!0), IT().catch((TT => {
              console.error("Failed to turn on push notifications:", TT)
            })).finally((() => {
              kT.current && (vT(!1), hT())
            }))
          },
          children: TT("notificationSettings:pushTurnOn")
        })]
      })
    }
    const Vk = {
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
      Ek = (0, lT.memo)((function() {
        const {
          t: TT
        } = (0, OT.B)(), {
          clientEscMenuOptions: kT
        } = (0, PT.n)(["clientEscMenuOptions"]);
        return (0, AT.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, AT.jsx)(rT.h, {
            label: TT("notificationSettings:friendRequests"),
            options: mk.e.map((kT => ({
              value: kT,
              label: TT(Vk[kT].label)
            }))),
            value: kT.friendRequestNotifications,
            onChange: TT => {
              PT.e.setClientEscMenuOptions({
                friendRequestNotifications: TT
              })
            },
            circleInfoText: (0, AT.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: mk.e.map((kT => (0, AT.jsxs)("div", {
                children: [(0, AT.jsx)("b", {
                  children: TT(Vk[kT].label)
                }), ": ", TT(Vk[kT].info)]
              }, kT)))
            })
          }), (0, AT.jsx)(Gk, {})]
        })
      }));
    var Zk = cT(4488),
      uk = cT(218),
      Xk = cT(307),
      dk = cT(6647),
      Lk = cT(3383),
      Rk = cT(9266),
      gk = cT(617),
      Uk = cT(36);
    var Yk = cT(636),
      Bk = cT(47),
      Wk = cT(4359);
    const nk = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function pk(TT) {
      return nk.has(TT) ? QT.gameBridge.lookup("fD", null) : null
    }

    function ik(TT) {
      if (!(0, gk.R)(PT.e.get("clientEscMenuOptions")[TT])) return PT.e.get("clientEscMenuOptions")[TT];
      const kT = pk(TT);
      return null !== kT ? kT[nk.get(TT)] : Bk.e.getItem(TT)
    }

    function qk(TT, kT) {
      if ("useTouchControls" === TT) return void(0, Wk.e)(kT);
      TT in PT.e.get("clientEscMenuOptions") && PT.e.setClientEscMenuOptions({
        [TT]: kT
      });
      const cT = pk(TT);
      null !== cT && QT.gameBridge.send("setChunkAddDistance", {
        ...cT,
        [nk.get(TT)]: kT
      }), Bk.e.setItem(TT, kT)
    }
    var sk = cT(4408),
      Tc = cT(9275),
      kc = cT(9284),
      cc = cT(4481);

    function lc(TT) {
      var kT, MT, yT, fT;
      let {
        minChunkAddDist: xT,
        getValue: IT,
        onChange: CT,
        setApplySettingsCallback: jT
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), {
        clientEscMenuOptions: hT
      } = (0, PT.n)(["clientEscMenuOptions", "showDistantNametags"]), QT = (0, lT.useRef)(IT("showFog")), ST = (0, lT.useRef)(hT.antiAliasing), DT = (0, lT.useRef)(hT.useWebGpu), [aT, FT] = (0, lT.useState)(null), [mT, bT] = (0, lT.useState)((() => (0, Lk.g)(NT.featureFlags.settings.canUseShaderPacks))), [zT] = (0, lT.useState)((() => PT.e.isWebGpuDefaultOff())), [JT] = (0, lT.useState)(Xk.g);
      (0, lT.useEffect)((() => {
        let TT = !1;
        return (0, NT.hasUsableWebGpuAdapter)().then((kT => {
          TT || FT(kT)
        })), (0, Lk.k)(NT.featureFlags.settings.canUseShaderPacks) && (0, dk.e)().then((async kT => {
          const lT = null !== kT && await async function(TT) {
            const [{
              isShaderPackActive: kT
            }, {
              loadPageShaderPackCompiler: lT
            }] = await Promise.all([cT.e(127).then((() => cT(6641))), Promise.all([cT.e(75), cT.e(131), cT.e(130)]).then((() => cT(6607)))]);
            return kT(TT, await lT())
          }(kT);
          TT || bT(lT)
        })), () => {
          TT = !0
        }
      }), []);
      const oT = function(TT, kT, cT, lT, MT) {
          return (0, Rk.d)(cT, lT) && !0 === kT ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== kT ? "settingsMenu:newWebGpu" : MT ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: TT && !1 !== kT,
            disabled: !0 !== kT
          }
        }(hT.useWebGpu, aT, mT, zT, JT),
        HT = (hT.useWebGpu || (0, Rk.d)(mT, zT)) && mT && !0 === aT,
        eT = (0, tT.f)("lightingOverride"),
        GT = !(0, gk.R)(eT);
      let VT = "settingsMenu:enableLighting";
      GT && (VT = eT ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const ET = TT => {
          var kT, cT, lT;
          const MT = null !== (kT = TT.showFog) && void 0 !== kT ? kT : IT("showFog"),
            KT = null !== (cT = TT.antiAliasing) && void 0 !== cT ? cT : hT.antiAliasing,
            OT = null !== (lT = TT.useWebGpu) && void 0 !== lT ? lT : hT.useWebGpu,
            yT = !Yk.x && MT !== QT.current || KT !== ST.current || OT !== DT.current;
          jT(yT ? () => rT.m : null)
        },
        ZT = (0, tT.f)("fogChunkDistanceOverride"),
        uT = (0, tT.f)("fogBlockDistanceOverride"),
        XT = !(0, gk.R)(ZT) || !(0, gk.R)(uT),
        dT = XT ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [LT, RT] = (0, Zk.f)(xT),
        [gT, UT] = (0, cc.j)(xT),
        YT = vT("settingsMenu:chunkLoadDistanceDeviceLimit"),
        BT = gT < LT,
        WT = Math.min(null !== (kT = IT("chunkHorizAddDist")) && void 0 !== kT ? kT : xT[0], gT),
        nT = !XT && function(TT, kT) {
          return !0 === TT.showFog && TT.fogChunkDistance > kT
        }(hT, WT);
      return (0, AT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, AT.jsx)(rT.l, {
          name: vT("settingsMenu:horizontalChunkLoadDistance"),
          min: xT[0],
          max: LT,
          selectableMax: gT,
          cappedNote: YT,
          step: 1,
          initValue: WT,
          onChange: TT => {
            !0 === IT("showFog") && TT < IT("fogChunkDistance") && CT("fogChunkDistance", TT), CT("chunkHorizAddDist", TT), Uk.k.nt("updatedChunkLoadDist")
          },
          circleInfoText: vT("settingsMenu:chunkLoadDistanceInfo")
        }), (0, AT.jsx)(rT.l, {
          name: vT("settingsMenu:verticalChunkLoadDistance"),
          min: xT[1],
          max: RT,
          selectableMax: UT,
          cappedNote: BT ? void 0 : YT,
          step: 1,
          initValue: Math.min(null !== (MT = IT("chunkVertAddDist")) && void 0 !== MT ? MT : xT[1], UT),
          onChange: TT => {
            CT("chunkVertAddDist", TT), Uk.k.nt("updatedChunkLoadDist")
          },
          circleInfoText: vT("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:chunkFadeIn"),
          checked: hT.chunkFadeIn,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              chunkFadeIn: TT
            })
          },
          circleInfoText: vT("settingsMenu:chunkFadeInInfo")
        }), wT.devTools.supports("chunkBorders") && (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:showChunkBorders"),
          checked: hT.showChunkBorders,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              showChunkBorders: TT
            })
          },
          circleInfoText: vT("settingsMenu:showChunkBordersInfo")
        }), (0, AT.jsx)(rT.e, {
          label: vT(VT),
          checked: hT.enableLighting,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              enableLighting: TT
            })
          },
          disabled: GT
        }), (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AT.jsx)(rT.e, {
            label: vT(dT),
            checked: hT.showFog,
            onClick: TT => {
              ET({
                showFog: TT
              }), PT.e.setClientEscMenuOptions({
                showFog: TT
              })
            },
            disabled: XT,
            className: KT()({
              SettingBoxWarning: nT
            })
          }), (0, AT.jsx)(rT.l, {
            name: vT("settingsMenu:fogChunkDistance"),
            min: xT[0],
            max: uk.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (yT = hT.fogChunkDistance) && void 0 !== yT ? yT : xT[0],
            onChange: TT => {
              PT.e.setClientEscMenuOptions({
                fogChunkDistance: TT
              }), Uk.k.nt("fogChunkDistanceChanged", TT)
            },
            circleInfoText: vT("settingsMenu:fogChunkDistanceInfo"),
            disabled: XT || !1 === IT("showFog"),
            className: KT()({
              SettingBoxWarning: nT
            })
          }), nT && (0, AT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: vT("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Yk.x && (0, AT.jsx)(rT.e, {
          label: vT(HT ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !HT && hT.disableTexAtlas,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              disableTexAtlas: TT
            })
          },
          circleInfoText: vT("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: HT
        }), (0, AT.jsx)(rT.l, {
          name: vT("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: hT.cameraFOV,
          onChange: TT => {
            PT.e.setClientEscMenuOptions({
              cameraFOV: TT
            })
          }
        }), (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:disableViewBobbing"),
          checked: hT.disableBobbing,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              disableBobbing: TT
            })
          },
          circleInfoText: vT("settingsMenu:disableViewBobbingInfo")
        }), (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:antiAliasing"),
          checked: hT.antiAliasing,
          onClick: TT => {
            ET({
              antiAliasing: TT
            }), (0, sk.d)("antiAliasing"), PT.e.setClientEscMenuOptions({
              antiAliasing: TT
            })
          },
          circleInfoText: vT("settingsMenu:antiAliasingInfo")
        }), (0, AT.jsx)(rT.l, {
          name: vT("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (fT = hT.pixelScale) && void 0 !== fT ? fT : 1,
          onChange: TT => {
            (TT !== PT.e.get("clientEscMenuOptions").pixelScale || (0, kc.s)()) && (0, sk.d)("pixelScale"), PT.e.setClientEscMenuOptions({
              pixelScale: TT
            })
          },
          circleInfoText: vT("settingsMenu:pixelScaleInfo"),
          format: TT => `${TT}x`
        }), (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:pixelSmoothing"),
          checked: hT.pixelSmoothing,
          onClick: TT => {
            PT.e.setClientEscMenuOptions({
              pixelSmoothing: TT
            })
          },
          circleInfoText: vT("settingsMenu:pixelSmoothingInfo")
        }), Yk.x && (0, AT.jsx)(rT.e, {
          label: vT("settingsMenu:distantNametags"),
          checked: (0, Tc.c)(),
          onClick: TT => {
            PT.e.set({
              showDistantNametags: TT
            })
          },
          circleInfoText: vT("settingsMenu:distantNametagsInfo")
        }), (0, AT.jsx)(rT.e, {
          label: vT(oT.translationKey),
          checked: oT.checked,
          onClick: TT => {
            ET({
              useWebGpu: TT
            }), PT.e.setClientEscMenuOptions({
              useWebGpu: TT
            })
          },
          circleInfoText: vT("settingsMenu:newWebGpuInfo"),
          disabled: oT.disabled
        })]
      })
    }
    var Mc = cT(4405),
      Kc = cT(8897),
      Oc = cT(9298),
      yc = cT(8905),
      fc = cT(9302);
    const xc = {
        color: 16777215,
        name: "white"
      },
      Ic = {
        color: 0,
        name: "black"
      },
      Ac = [xc, {
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
      }, Ic],
      Cc = [Ic, xc];

    function jc(TT) {
      return `${TT} px`
    }

    function vc(TT) {
      return `${TT}%`
    }

    function tc(TT) {
      let {
        label: kT,
        value: cT,
        swatches: lT,
        onChange: MT
      } = TT;
      const {
        t: yT
      } = (0, OT.B)(), fT = !lT.some((TT => TT.color === cT));
      return (0, AT.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, AT.jsx)("div", {
          className: "SliderText",
          children: kT
        }), (0, AT.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": kT,
          children: [lT.map((TT => {
            let {
              color: kT,
              name: lT
            } = TT;
            return (0, AT.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": kT === cT,
              "aria-label": yT(`crosshairSettings:color_${lT}`),
              "data-pad-focusable": !0,
              className: KT()("CrosshairSwatch", {
                Selected: kT === cT
              }),
              style: {
                background: (0, fc.m)(kT)
              },
              onClick: () => {
                MT(kT)
              }
            }, kT)
          })), (0, AT.jsx)("label", {
            className: KT()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: fT
            }),
            style: fT ? {
              background: (0, fc.m)(cT)
            } : void 0,
            title: yT("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, AT.jsx)("input", {
              type: "color",
              "aria-label": yT("crosshairSettings:customColor"),
              value: (0, fc.m)(cT),
              onChange: TT => {
                const kT = (0, fc.r)(TT.target.value);
                null !== kT && MT(kT)
              }
            })
          })]
        })]
      })
    }

    function hc(TT) {
      let {
        settings: kT,
        onChange: cT
      } = TT;
      const {
        t: lT
      } = (0, OT.B)(), MT = (TT, lT) => {
        cT((0, fc.x)(kT, TT, lT))
      }, KT = function(TT, cT) {
        let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
        const {
          min: KT,
          max: OT,
          step: yT
        } = fc.c[TT];
        return (0, AT.jsx)(rT.l, {
          name: cT,
          min: KT,
          max: OT,
          step: yT,
          initValue: kT[TT],
          format: lT,
          onChange: kT => {
            MT(TT, kT)
          }
        }, TT)
      }, yT = ["lines", "dot", "circle"].filter((TT => kT[TT])), fT = (TT, cT, lT) => (0, AT.jsx)(rT.e, {
        label: cT,
        checked: kT[TT],
        disabled: 1 === yT.length && yT[0] === TT,
        circleInfoText: lT,
        onClick: kT => {
          MT(TT, kT)
        }
      }, TT), xT = "shapes" === kT.style;
      return (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsx)(rT.h, {
          label: lT("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: lT("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: lT("crosshairSettings:styleShapes")
          }],
          value: kT.style,
          onChange: TT => {
            MT("style", TT)
          }
        }), (0, AT.jsx)(tc, {
          label: lT("crosshairSettings:color"),
          value: kT.color,
          swatches: Ac,
          onChange: TT => {
            MT("color", TT)
          }
        }), KT("opacity", lT("crosshairSettings:opacity"), vc), !xT && KT("size", lT("crosshairSettings:size"), vc), xT && (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fT("lines", lT("crosshairSettings:lines")), kT.lines && KT("lineLength", lT("crosshairSettings:lineLength")), kT.lines && KT("lineThickness", lT("crosshairSettings:lineThickness")), kT.lines && KT("gap", lT("crosshairSettings:gap")), kT.lines && fT("tStyle", lT("crosshairSettings:tStyle"))]
        }), xT && (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fT("dot", lT("crosshairSettings:dot")), kT.dot && KT("dotSize", lT("crosshairSettings:dotSize"))]
        }), xT && (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fT("circle", lT("crosshairSettings:circle")), kT.circle && KT("circleRadius", lT("crosshairSettings:circleRadius")), kT.circle && KT("circleThickness", lT("crosshairSettings:circleThickness"))]
        }), (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [KT("outline", lT("crosshairSettings:outline"), (TT => TT > 0 ? jc(TT) : lT("crosshairSettings:off"))), kT.outline > 0 && (0, AT.jsx)(tc, {
            label: lT("crosshairSettings:outlineColor"),
            value: kT.outlineColor,
            swatches: Cc,
            onChange: TT => {
              MT("outlineColor", TT)
            }
          })]
        }), fT("growOnClick", lT("crosshairSettings:growOnClick")), xT && fT("forGuns", lT("crosshairSettings:forGuns"), lT("crosshairSettings:forGunsInfo"))]
      })
    }
    var Nc = cT(94),
      Qc = cT(1289),
      Sc = cT(9306),
      Dc = cT(9308),
      ac = cT(9317),
      Fc = cT(9320);
    const rc = ["sky", "grass", "stone", "sand", "snow", "night"],
      Pc = "4rem";

    function wc(TT) {
      return {
        backgroundImage: `url(${TT})`,
        backgroundSize: `${Pc} ${Pc}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function mc(TT) {
      return {
        ...(() => {
          switch (TT) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return wc(Sc);
            case "stone":
              return wc(Dc);
            case "sand":
              return wc(ac);
            case "snow":
              return wc(Fc);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function bc(TT) {
      return Object.freeze({
        ...fc.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...TT
      })
    }
    const zc = [{
        id: "default",
        settings: fc.g
      }, {
        id: "cross",
        settings: bc({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: bc({
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
        settings: bc({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: bc({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: bc({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: bc({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: bc({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Jc = ["growOnClick", "forGuns"];
    var oc = cT(9329);

    function Hc(TT) {
      let {
        label: kT,
        selected: cT,
        onClick: lT,
        className: MT,
        style: OT,
        children: yT
      } = TT;
      return (0, AT.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": cT,
        title: kT,
        "aria-label": kT,
        "data-pad-focusable": !0,
        className: KT()("CrosshairBackdropSwatch", MT, {
          Selected: cT
        }),
        style: OT,
        onClick: lT,
        children: yT
      })
    }

    function ec(TT) {
      let {
        backdrop: kT,
        onChange: cT,
        game: lT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)();
      return (0, AT.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": MT("crosshairSettings:background"),
        children: [lT && (0, AT.jsx)(Hc, {
          label: MT("crosshairSettings:bg_game"),
          selected: lT.selected,
          onClick: lT.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, AT.jsx)(yT.e, {
            name: "cube"
          })
        }), rc.map((TT => (0, AT.jsx)(Hc, {
          label: MT(`crosshairSettings:bg_${TT}`),
          selected: !(null !== lT && void 0 !== lT && lT.selected) && TT === kT,
          style: mc(TT),
          onClick: () => {
            cT(TT)
          }
        }, TT)))]
      })
    }

    function Gc(TT) {
      let {
        settings: kT,
        touch: cT,
        backdrop: lT,
        onChange: MT
      } = TT;
      const {
        t: yT
      } = (0, OT.B)(), fT = function(TT) {
        var kT;
        return null !== (kT = zc.find((kT => (0, fc.u)(kT.settings, TT, Jc)))) && void 0 !== kT ? kT : null
      }(kT);
      return (0, AT.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": yT("crosshairSettings:presets"),
        children: zc.map((TT => {
          const OT = (null === fT || void 0 === fT ? void 0 : fT.id) === TT.id;
          return (0, AT.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": OT,
            "data-pad-focusable": !0,
            className: KT()("CrosshairPreset", {
              Selected: OT
            }),
            onClick: () => {
              MT(function(TT, kT) {
                return {
                  ...kT.settings,
                  growOnClick: TT.growOnClick,
                  forGuns: TT.forGuns
                }
              }(kT, TT))
            },
            children: [(0, AT.jsx)("div", {
              className: "CrosshairPresetStage",
              style: mc(lT),
              children: (0, AT.jsx)(oc.e, {
                settings: TT.settings,
                touch: cT,
                inPreview: !0
              })
            }), (0, AT.jsx)("div", {
              className: "CrosshairPresetName",
              children: yT(`crosshairSettings:preset_${TT.id}`)
            })]
          }, TT.id)
        }))
      })
    }
    var Vc = cT(1687);

    function Ec(TT, kT) {
      const [cT, MT] = (0, lT.useState)(!1), KT = () => {
        MT(!1)
      }, [OT, yT] = (0, lT.useState)(!1), fT = (0, lT.useRef)({
        growOnClick: TT.growOnClick,
        forGuns: TT.forGuns
      });
      (0, lT.useEffect)((() => {
        const kT = fT.current;
        fT.current = {
          growOnClick: TT.growOnClick,
          forGuns: TT.forGuns
        }, (TT.growOnClick && !kT.growOnClick || TT.forGuns && !kT.forGuns) && yT(!0)
      }), [TT.growOnClick, TT.forGuns]), (0, lT.useEffect)((() => {
        if (!OT) return;
        const TT = setTimeout((() => {
          yT(!1)
        }), 600);
        return () => {
          clearTimeout(TT)
        }
      }), [OT]);
      const xT = cT || OT;
      return {
        view: {
          pressed: xT,
          spread: xT && TT.forGuns && !TT.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: TT => {
            !TT.target.closest(kT) && (0, Vc.c)(TT.currentTarget, TT.pointerId) && MT(!0)
          },
          onPointerUp: KT,
          onPointerCancel: KT,
          onLostPointerCapture: KT
        }
      }
    }

    function Zc(TT) {
      let {
        settings: kT,
        touch: cT,
        backdrop: lT,
        className: MT,
        children: OT,
        label: yT
      } = TT;
      const fT = Ec(kT, ".CrosshairStageControls");
      return (0, AT.jsxs)("div", {
        className: KT()("CrosshairStage", MT),
        style: mc(lT),
        ...fT.handlers,
        children: [(0, AT.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": yT,
          children: (0, AT.jsx)(oc.e, {
            settings: kT,
            touch: cT,
            inPreview: !0,
            ...fT.view
          })
        }), OT]
      })
    }
    const uc = "crosshairFullScreen";

    function Xc(TT) {
      let {
        settings: kT,
        touch: cT,
        backdrop: MT,
        onBackdrop: fT,
        inGame: IT,
        onChange: CT,
        onClose: jT
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), tT = (0, lT.useRef)(null);
      (0, Qc.q)("popup", tT, jT),
      function(TT) {
        const kT = (0, lT.useRef)(TT);
        kT.current = TT, (0, lT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [uc]: !0
          }, "");
          let TT = !1;
          const cT = () => {
            TT = !0, kT.current()
          };
          return window.addEventListener("popstate", cT), () => {
            var kT;
            window.removeEventListener("popstate", cT), !TT && null !== (kT = window.history.state) && void 0 !== kT && kT[uc] && window.history.back()
          }
        }), [])
      }(jT);
      const hT = (0, lT.useRef)(jT);
      hT.current = jT, (0, lT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), hT.current())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), []);
      const NT = Ec(kT, ".CrosshairFullScreenPanel"),
        [QT, ST] = (0, lT.useState)(!0),
        DT = QT && IT;
      (0, lT.useEffect)((() => {
        if (DT) return PT.e.set({
          crosshairGameView: !0
        }), () => {
          PT.e.set({
            crosshairGameView: !1
          })
        }
      }), [DT]);
      const [aT, FT] = (0, lT.useState)(!0);
      return (0, Nc.createPortal)((0, AT.jsxs)("div", {
        ref: tT,
        className: "CrosshairFullScreen",
        style: DT ? void 0 : mc(MT),
        ...NT.handlers,
        children: [(0, AT.jsx)(oc.e, {
          settings: kT,
          touch: cT,
          inEditor: !0,
          ...NT.view
        }), (0, AT.jsxs)("div", {
          className: KT()("CrosshairFullScreenPanel", {
            Collapsed: !aT
          }),
          children: [(0, AT.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, AT.jsx)(ec, {
              backdrop: MT,
              onChange: TT => {
                ST(!1), fT(TT)
              },
              game: IT ? {
                selected: DT,
                onSelect: () => {
                  ST(!0)
                }
              } : void 0
            }), (0, AT.jsx)(xT.P, {
              className: "CrosshairPanelToggle",
              ariaLabel: vT(aT ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                FT(!aT)
              },
              children: (0, AT.jsx)(yT.e, {
                name: aT ? "caret-up" : "pen"
              })
            }), (0, AT.jsx)(xT.e, {
              className: "CrosshairFullScreenDone",
              onClick: jT,
              padDefaultFocus: !0,
              children: vT("crosshairSettings:done")
            })]
          }), aT && (0, AT.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, AT.jsx)(Gc, {
              settings: kT,
              touch: cT,
              backdrop: MT,
              onChange: CT
            }), (0, AT.jsx)(hc, {
              settings: kT,
              onChange: CT
            })]
          })]
        })]
      }), document.body)
    }
    var dc = cT(2678),
      Lc = cT(9337);

    function Rc(TT) {
      let {
        settings: kT,
        onChange: cT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)(), fT = (0, Lc.i)(kT), [IT, CT] = (0, dc.h)(), [jT, vT] = (0, lT.useState)(!1), tT = (0, lT.useRef)(null), [hT, NT] = (0, dc.h)(), [QT, ST] = (0, lT.useState)(!1);
      return (0, AT.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, AT.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, AT.jsxs)(xT.P, {
            className: KT()("CrosshairCopy", {
              ActiveSecondaryButton: IT
            }),
            onClick: () => {
              (0, dc.d)(fT, {
                useShareSheet: !1,
                onOutcome: TT => {
                  vT("failed" === TT), "copied" === TT && CT()
                }
              })
            },
            children: [(0, AT.jsx)(yT.e, {
              name: IT ? "check" : "copy"
            }), " ", MT(IT ? "general:copied" : "crosshairSettings:copy")]
          }), (0, AT.jsx)(aT.b, {
            className: "CrosshairPaste",
            domRef: tT,
            ariaLabel: MT("crosshairSettings:paste"),
            placeholderText: MT("crosshairSettings:paste"),
            onValueChange: TT => {
              const kT = (0, Lc.e)(TT);
              ST(!kT && TT.trim().length >= Lc.b), kT && (cT(kT), tT.current.value = "", NT())
            }
          })]
        }), jT && (0, AT.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: fT,
          "aria-label": MT("crosshairSettings:copy"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, AT.jsxs)("div", {
          "aria-live": "polite",
          children: [QT && (0, AT.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: MT("crosshairSettings:pasteInvalid")
          }), hT && !QT && (0, AT.jsx)("div", {
            className: "CrosshairShareNote",
            children: MT("crosshairSettings:applied")
          })]
        })]
      })
    }
    var gc = cT(9346);
    let Uc = "sky";

    function Yc(TT) {
      let {
        showing: kT
      } = TT;
      const {
        t: cT
      } = (0, OT.B)(), {
        isTouchScreen: MT,
        gameState: KT,
        clientEscMenuOptions: fT
      } = (0, PT.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), IT = (0, gc.e)(), [CT, jT] = (0, lT.useState)(Uc), vT = TT => {
        Uc = TT, jT(TT)
      }, [tT, hT] = (0, lT.useState)(!1);
      return (0, lT.useEffect)((() => {
        kT || hT(!1)
      }), [kT]), (0, AT.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, AT.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, AT.jsx)(Zc, {
            className: "CrosshairPreviewStage",
            settings: IT,
            touch: MT,
            backdrop: CT,
            label: cT("crosshairSettings:preview"),
            children: (0, AT.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, AT.jsx)(ec, {
                backdrop: CT,
                onChange: vT
              }), (0, AT.jsxs)(xT.P, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  hT(!0)
                },
                children: [(0, AT.jsx)(yT.e, {
                  name: "expand"
                }), " ", cT("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, AT.jsx)("div", {
          className: "SettingBox",
          children: (0, AT.jsx)(Gc, {
            settings: IT,
            touch: MT,
            backdrop: CT,
            onChange: gc.b
          })
        }), (0, AT.jsx)(Rc, {
          settings: IT,
          onChange: gc.b
        }), MT && (0, AT.jsx)(yc.e, {
          note: (0, Oc.c)(MT, fT.touchActionButtons) ? cT("crosshairSettings:touchNote") : void 0
        }), (0, AT.jsx)(hc, {
          settings: IT,
          onChange: gc.b
        }), tT && (0, AT.jsx)(Xc, {
          settings: IT,
          touch: MT,
          backdrop: CT,
          onBackdrop: vT,
          inGame: "inGame" === KT,
          onChange: gc.b,
          onClose: () => {
            hT(!1)
          }
        })]
      })
    }
    var Bc = cT(8902),
      Wc = cT(1417),
      nc = cT(4943),
      pc = cT(9354),
      ic = cT(1996),
      qc = cT(4272),
      sc = cT(2002),
      Tl = cT(719);
    const kl = (0, lT.memo)((function() {
      const {
        clientEscMenuOptions: TT
      } = (0, PT.n)(["clientEscMenuOptions"]), {
        recording: kT,
        clipping: cT,
        hasClipBuffer: MT
      } = (0, ic.h)("replayRecorder"), OT = (0, ic.e)("connectedGame", (TT => TT.replay)), yT = (0, qc.m)(), fT = !1 === (0, tT.f)("canRecordReplays");
      (0, lT.useEffect)((() => {
        QT.gameBridge.send("setRecorderPrefs", {
          clipping: TT.enableClipping,
          clipSeconds: TT.clipDurationSeconds
        })
      }), [TT.enableClipping, TT.clipDurationSeconds]);
      const IT = yT || OT,
        CT = !IT && !fT,
        jT = kT || CT,
        vT = CT,
        hT = vT && cT && !kT;

      function NT() {
        jT && QT.gameBridge.send("toggleRecording", null)
      }
      return (0, AT.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, AT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AT.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: kT ? (0, AT.jsxs)(AT.Fragment, {
              children: [(0, AT.jsxs)(xT.I, {
                className: "ReplayViewerCategoryButton",
                onClick: NT,
                disabled: !jT,
                children: [(0, AT.jsx)("span", {
                  children: "Stop Recording"
                }), (0, AT.jsx)(sc.b, {
                  noaAction: "recordGame"
                })]
              }), (0, AT.jsx)(pc.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, AT.jsxs)(xT.e, {
              className: "ReplayViewerCategoryButton",
              onClick: NT,
              disabled: !jT,
              children: [(0, AT.jsx)("span", {
                children: "Start Recording"
              }), (0, AT.jsx)(sc.b, {
                noaAction: "recordGame"
              })]
            })
          }), fT && (0, AT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), IT && !kT && (0, AT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, AT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AT.jsx)(rT.e, {
            label: "Enable clipping",
            checked: TT.enableClipping,
            disabled: !vT,
            onClick: function(TT) {
              vT && PT.e.setClientEscMenuOptions({
                enableClipping: TT
              })
            },
            className: KT()({
              SettingBoxDisabled: !vT
            })
          }), (0, AT.jsx)(rT.l, {
            name: "Clip duration (seconds)",
            min: Tl.i,
            max: Tl.h,
            step: Tl.e,
            initValue: TT.clipDurationSeconds,
            onChange: function(TT) {
              PT.e.setClientEscMenuOptions({
                clipDurationSeconds: TT
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !vT || !TT.enableClipping
          })]
        }), (0, AT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AT.jsxs)(xT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              hT && QT.gameBridge.send("saveClip", null)
            },
            disabled: !hT,
            children: [(0, AT.jsx)("span", {
              children: "Record clip"
            }), (0, AT.jsx)(sc.b, {
              noaAction: "recordClip"
            })]
          }), TT.enableClipping && !MT && vT && !kT && (0, AT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), kT && (0, AT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, AT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AT.jsxs)(xT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, qc.i)(!0), PT.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: yT,
            children: [(0, AT.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, AT.jsx)(sc.b, {
              noaAction: "replayViewerOpen"
            })]
          }), yT && (0, AT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, AT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AT.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, AT.jsx)("iframe", {
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
    var cl = cT(1915);
    const ll = {
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
        icon: () => (0, AT.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, AT.jsx)("path", {
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
      Bj: {
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

    function Ml() {
      return Promise.all([cT.e(75), cT.e(131), cT.e(125), cT.e(122)]).then((() => cT(40693))).then((TT => ({
        default: TT.ShaderPackCategory
      })), (TT => (console.error("Failed to load the shader pack settings", TT), {
        default: Kl
      })))
    }

    function Kl() {
      const {
        t: TT
      } = (0, OT.B)();
      return (0, AT.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: TT("shaderPack:tabLoadFailed")
      })
    }
    var Ol = cT(1409);
    const yl = (0, lT.lazy)((() => cT.e(264).then((() => cT(40678))).then((TT => ({
        default: TT.BloxdInformation
      }))))),
      fl = (0, lT.lazy)(Ml);

    function xl(TT) {
      return TT ? "general" : "account"
    }
    const Il = new Map,
      Al = (0, lT.memo)((function(TT) {
        let {
          show: kT,
          setBeforeResumeCallback: cT
        } = TT;
        (0, hT.d)();
        const {
          gameState: MT,
          openSettingsCategory: KT
        } = (0, PT.n)(["gameState", "openSettingsCategory"]), {
          userContext: fT
        } = (0, vT.b)(), {
          t: IT
        } = (0, OT.B)(), aT = (0, jT.b)(), FT = (0, tT.f)("minChunkAddDist"), rT = "inGame" === MT, [wT, zT] = (0, lT.useState)(xl(rT)), [JT, oT] = (0, lT.useState)(null), [HT, eT] = (0, lT.useState)([]), GT = (0, lT.useRef)(function() {
          const TT = new Date,
            kT = 6 * (TT.getMonth() + TT.getDate()) % xk.x.length;
          return [...xk.x, ...xk.x].slice(kT, kT + 6)
        }()), VT = (0, lT.useRef)(null), ET = (0, bk.i)(Wc.j, (0, Wc.c)()), ZT = Object.keys(ll).filter((TT => {
          switch (TT) {
            case "replayViewer":
              return rT;
            case "developerTools":
              return fT.playerHasRank("developer") || !1;
            case "texturePack":
              return NT.featureFlags.settings.canChangeTexturePack;
            case "Bj":
              return NT.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return NT.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== bT.u;
            case "controller":
              return NT.featureFlags.useControllerSupport && (ET || "controller" === wT);
            default:
              return !0
          }
        }));
        (0, bk.g)("toggleFullCoordinateOverlay", (() => {
          const TT = ik("showCoordinates") && ik("showChunkCoordinates") && ik("showFPS");
          qk("showCoordinates", !TT), qk("showChunkCoordinates", !TT), qk("showFPS", !TT), aT()
        })), (0, bk.g)("updatedChunkLoadDist", (() => {
          aT()
        })), (0, lT.useEffect)((() => {
          if (oT(null), null === PT.e.get("openSettingsCategory")) {
            const TT = (0, Ol.h)() ? Il.get(rT) : void 0;
            zT(TT && ZT.includes(TT) ? TT : xl(rT))
          }
        }), [kT]), (0, lT.useEffect)((() => {
          null !== KT && (zT(KT), Il.set(rT, KT), PT.e.set({
            openSettingsCategory: null
          }))
        }), [KT, rT]), (0, lT.useLayoutEffect)((() => {
          VT.current && (VT.current.scrollTop = 0)
        }), [wT, kT]), (0, lT.useEffect)((() => {
          "updateLog" === wT && (0, DT.e)().then(eT)
        }), [wT]), (0, lT.useEffect)((() => {
          if ((0, gk.R)(FT)) return;
          const [TT, kT] = (0, Mc.g)(), [cT, lT] = (0, Zk.f)(FT), MT = (0, cl.d)(FT[0], TT, cT), KT = (0, cl.d)(FT[1], kT, lT);
          QT.gameBridge.send("setChunkAddDistance", {
            horizontal: MT,
            vertical: KT
          })
        }), [FT]);
        const uT = (0, lT.useCallback)((async () => {
          JT && (await JT(), oT(null))
        }), [JT]);

        function XT() {
          PT.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, lT.useEffect)((() => {
          cT((() => uT))
        }), [uT, cT]), (0, AT.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: kT ? {} : {
            display: "none"
          },
          children: [(0, AT.jsx)("div", {
            className: "MenuSideBar",
            children: (0, AT.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, AT.jsx)(CT, {
                items: ZT.map((TT => {
                  const kT = ll[TT].icon;
                  return {
                    id: TT,
                    faIcon: "string" === typeof kT ? kT : void 0,
                    iconElement: "string" === typeof kT ? void 0 : (0, AT.jsx)(kT, {}),
                    title: IT(ll[TT].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: wT,
                onClick: TT => {
                  !async function(TT) {
                    await uT(), zT(TT), Il.set(rT, TT)
                  }(TT)
                }
              })
            })
          }), (0, AT.jsxs)("div", {
            ref: VT,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === wT && (0, AT.jsx)(Qk, {
              showing: kT,
              inGame: rT
            }), "general" === wT && (0, AT.jsx)(Pk, {
              inGame: rT
            }), "audio" === wT && (0, AT.jsx)(wk, {}), "notifications" === wT && (0, AT.jsx)(Ek, {}), "graphics" === wT && (0, AT.jsx)(lc, {
              minChunkAddDist: null !== FT && void 0 !== FT ? FT : [2, 2],
              getValue: ik,
              onChange: qk,
              setApplySettingsCallback: oT
            }), "controls" === wT && (0, AT.jsx)(Kc.f, {}), "crosshair" === wT && (0, AT.jsx)(Yc, {
              showing: kT
            }), "controller" === wT && NT.featureFlags.useControllerSupport && (0, AT.jsx)(Bc.b, {}), NT.featureFlags.settings.canChangeTexturePack && "texturePack" === wT && (0, AT.jsx)(nc.d, {
              setApplySettingsCallback: oT
            }), NT.featureFlags.settings.canUseShaderPacks && "Bj" === wT && (0, AT.jsx)(lT.Suspense, {
              fallback: null,
              children: (0, AT.jsx)(fl, {
                setApplySettingsCallback: oT
              })
            }), "updateLog" === wT && (0, AT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AT.jsx)("div", {
                className: "UpdateLogsContainer",
                children: HT.map(((TT, kT) => (0, AT.jsx)(ST.c, {
                  updateLog: TT,
                  index: kT,
                  close: XT
                }, kT)))
              })
            }), "information" === wT && (0, AT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AT.jsx)(lT.Suspense, {
                fallback: null,
                children: (0, AT.jsx)(yl, {})
              })
            }), "alternativeDomains" === wT && (0, AT.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, AT.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: IT("settingsMenu:unblockedDomainsDescription")
              }), (0, AT.jsx)("div", {
                className: "AlternativeDomainsList",
                children: GT.current.map((TT => (0, AT.jsxs)(xT.e, {
                  onClick: () => {
                    window.open(`https://${TT}`)
                  },
                  children: [(0, AT.jsx)(yT.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", TT]
                }, TT)))
              })]
            }), "replayViewer" === wT && (0, AT.jsx)(kl, {}), "developerTools" === wT && (0, AT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AT.jsx)(mT, {
                setApplySettingsCallback: oT
              })
            }), null !== JT && (0, AT.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, AT.jsx)(xT.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: uT,
                children: IT("general:apply")
              })
            })]
          })]
        })
      }));
    var Cl = cT(2623);
    const jl = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      vl = (0, lT.lazy)((() => Promise.resolve().then((() => cT(4649))).then((TT => {
        TT.needGameClientAfterPaint();
        const kT = TT.matchmakingLibrariesPromise.then((TT => (0, Cl.e)(TT.loadCharacterCustomisationUI(), (TT => TT.CharacterCustomisationUI))));
        return Promise.all([TT.ensureGameSetup(), kT]).then((TT => {
          let [, kT] = TT;
          return kT
        }))
      }))));

    function tl(TT) {
      let {
        show: kT
      } = TT;
      const {
        userContext: cT
      } = (0, vT.b)(), [MT, KT] = (0, lT.useState)("characters");
      if (!kT) return null;
      const OT = jl.filter((TT => "cape" !== TT && "nameColour" !== TT || cT.getPlayerRanks().includes("super") || (0, dT.purchasesAllowed)())).map((TT => ({
        id: TT,
        faIcon: xk.F[TT],
        title: xk.I[TT],
        redDot: !1
      })));
      return (0, AT.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, AT.jsx)("div", {
          className: "MenuSideBar",
          children: (0, AT.jsx)(CT, {
            items: OT,
            selectedItemId: MT,
            onClick: TT => {
              KT(TT)
            }
          })
        }), (0, AT.jsx)("div", {
          className: "MenuBody",
          children: (0, AT.jsx)(lT.Suspense, {
            fallback: (0, AT.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, AT.jsx)(FT.d, {})
            }),
            children: (0, AT.jsx)(vl, {
              selectedTab: MT
            })
          })
        })]
      })
    }
    var hl = cT(1486),
      Nl = cT(1488),
      Ql = cT(9359),
      Sl = cT(4515),
      Dl = cT(3356),
      al = cT(3396),
      Fl = cT(9388),
      rl = cT(8808),
      Pl = cT(9362),
      wl = cT(9375),
      ml = cT(1943),
      bl = cT(1921),
      zl = cT(4861),
      Jl = cT(1274),
      ol = cT(1226),
      Hl = cT(1685),
      el = cT(8877),
      Gl = cT(2477),
      Vl = cT(2485);

    function El(TT) {
      return TT ? Object.keys(TT).sort(((kT, cT) => {
        var lT, MT, KT, OT;
        const yT = (null !== (lT = null === (MT = TT[cT]) || void 0 === MT ? void 0 : MT.sortPriority) && void 0 !== lT ? lT : 0) - (null !== (KT = null === (OT = TT[kT]) || void 0 === OT ? void 0 : OT.sortPriority) && void 0 !== KT ? KT : 0);
        return 0 !== yT ? yT : kT.localeCompare(cT)
      })) : []
    }
    const Zl = [{
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

    function ul(TT) {
      for (const {
          threshold: kT,
          suffix: cT
        }
        of Zl)
        if (TT >= kT) {
          const lT = TT / kT;
          return lT >= 100 ? `${Math.floor(lT)}${cT}` : lT >= 10 ? `${lT.toFixed(1).replace(/\.0$/,"")}${cT}` : `${lT.toFixed(2).replace(/\.?0+$/,"")}${cT}`
        } return String(TT)
    }
    var Xl = cT(4968);
    const dl = {
        normal: "0.8em",
        big: "1em"
      },
      Ll = (0, lT.memo)((function(TT) {
        let {
          item: kT,
          amount: cT = 0,
          size: lT = "normal",
          tier: MT = null
        } = TT;
        return (0, AT.jsx)("div", {
          className: KT()("SmpSlot", `SmpSlot-${lT}`),
          children: kT && (0, AT.jsx)(ml.d, {
            itemName: kT,
            amount: cT > 1 ? cT : 0,
            amountFontSize: dl[lT],
            enchantmentTier: MT
          })
        })
      }));

    function Rl(TT) {
      let {
        amount: kT,
        exact: cT = !1,
        className: lT
      } = TT;
      return (0, AT.jsxs)("span", {
        className: KT()("SmpGold", lT),
        children: [(0, AT.jsx)("span", {
          className: "SmpCoin",
          children: (0, AT.jsx)(ml.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), cT ? kT.toLocaleString("en-US") : ul(kT)]
      })
    }

    function gl(TT) {
      let {
        count: kT = 5,
        grid: cT = !1
      } = TT;
      return (0, AT.jsx)("div", {
        className: cT ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: kT
        }, ((TT, kT) => (0, AT.jsxs)("div", {
          className: KT()(cT ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, AT.jsx)("div", {
            className: KT()("SmpSlot", cT ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, AT.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, AT.jsx)("b", {}), (0, AT.jsx)("small", {})]
          }), (0, AT.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, kT)))
      })
    }

    function Ul(TT) {
      let {
        title: kT,
        children: cT
      } = TT;
      return (0, AT.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, AT.jsx)("b", {
          children: kT
        }), cT && (0, AT.jsx)("small", {
          children: cT
        })]
      })
    }

    function Yl(TT) {
      let {
        entry: kT
      } = TT;
      return (0, AT.jsx)(Ul, {
        title: (0, AT.jsx)(bl.b, {
          text: kT.item.customTitle
        }),
        children: (0, AT.jsx)(bl.b, {
          text: kT.item.description
        })
      })
    }

    function Bl(TT) {
      return (0, AT.jsx)(Xl.d, {
        ...TT,
        className: KT()("SmpChoice", TT.className),
        reselectable: !0
      })
    }

    function Wl() {
      return (0, AT.jsx)("span", {
        className: "SmpLoader",
        children: (0, AT.jsx)(FT.d, {})
      })
    }

    function nl(TT) {
      let {
        value: kT,
        onChange: cT,
        min: MT = 1,
        max: KT,
        step: OT = 1,
        label: yT
      } = TT;
      const fT = (0, lT.useRef)(null),
        xT = (0, lT.useRef)(kT);
      xT.current = kT;
      const [IT, CT] = (0, lT.useState)(null), jT = TT => Math.max(MT, Math.min(KT, Math.floor(TT))), vT = TT => {
        const kT = xT.current,
          lT = "function" === typeof OT ? OT(kT, TT) : OT,
          MT = jT(kT + lT * TT);
        xT.current = MT, cT(MT)
      };
      (0, lT.useEffect)((() => {
        if (null === IT) return;
        let TT;
        const kT = () => {
            CT(null)
          },
          cT = setTimeout((() => {
            TT = setInterval((() => {
              vT(IT);
              const TT = xT.current;
              (IT > 0 ? TT >= KT : TT <= MT) && kT()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", kT), window.addEventListener("pointercancel", kT), window.addEventListener("blur", kT), () => {
          clearTimeout(cT), clearInterval(TT), window.removeEventListener("pointerup", kT), window.removeEventListener("pointercancel", kT), window.removeEventListener("blur", kT)
        }
      }), [IT]), (0, lT.useEffect)((() => {
        const TT = fT.current;
        TT && document.activeElement !== TT && TT.value !== String(kT) && (TT.value = String(kT))
      }), [kT]), (0, lT.useEffect)((() => {
        const TT = fT.current;
        if (!TT) return;
        const kT = () => {
          TT.value = String(xT.current)
        };
        return TT.addEventListener("blur", kT), () => {
          TT.removeEventListener("blur", kT)
        }
      }), []);
      const tT = TT => (0, AT.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${TT>0?"More":"Less"} ${yT}`,
        disabled: TT > 0 ? kT >= KT : kT <= MT,
        onPointerDown: kT => {
          0 === kT.button && (vT(TT), CT(TT))
        },
        onKeyDown: kT => {
          "Enter" !== kT.key && " " !== kT.key || vT(TT)
        },
        onContextMenu: TT => {
          TT.preventDefault()
        },
        children: TT > 0 ? "+" : "\u2212"
      });
      return (0, AT.jsxs)("div", {
        className: "SmpStepper",
        children: [tT(-1), (0, AT.jsx)(aT.b, {
          className: "SmpStepperInput",
          domRef: fT,
          defaultValue: String(kT),
          ariaLabel: yT,
          type: "text",
          blurOnEnter: !0,
          onValueChange: TT => {
            const kT = TT.replace(/[^\d]/g, "");
            fT.current && kT !== TT && (fT.current.value = kT), "" !== kT && cT(jT(Number(kT)))
          }
        }), tT(1)]
      })
    }

    function pl(TT) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, TT))) - 1))
    }
    var il = cT(9384),
      ql = cT(1244);
    const sl = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    ql.v, uT.Bc.length;
    new Map;
    var TM = cT(3214);

    function kM(TT, kT) {
      var cT;
      return kT && (null === (cT = TT[kT]) || void 0 === cT ? void 0 : cT.smp) || null
    }

    function cM(TT, kT) {
      const cT = [];
      for (const MT of El(TT)) {
        var lT;
        const KT = TT[MT];
        (null === (lT = KT.smp) || void 0 === lT ? void 0 : lT.kind) === kT && cT.push({
          key: MT,
          item: KT,
          meta: KT.smp
        })
      }
      return cT
    }

    function lM(TT, kT) {
      var cT;
      return null !== (cT = cM(TT, kT)[0]) && void 0 !== cT ? cT : null
    }
    const MM = "50% 0% 50% 0%",
      KM = [{
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

    function OM(TT) {
      const kT = TT - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: cT,
          suffix: lT
        }
        of KM)
        if (kT >= cT) return `${Math.floor(kT/cT)}${lT}`;
      return "<1s"
    }

    function yM(TT) {
      const kT = TT.map(rl.h),
        cT = [];
      return kT.forEach(((TT, lT) => {
        const MT = function(TT) {
            const kT = TT.match(/\d+/);
            return kT ? Number(kT[0]) : 0
          }(TT),
          KT = lT === kT.length - 1;
        (KT || 1 === MT || 10 === MT || 100 === MT) && cT.push({
          label: TT,
          quantity: MT,
          isAll: KT
        })
      })), cT
    }
    let fM = null;

    function xM(TT, kT) {
      const cT = kT.trim().toLowerCase();
      if (!cT) return [];
      const lT = TT => {
          if (TT === cT) return 0;
          if (TT.startsWith(cT)) return 1;
          const kT = TT.indexOf(cT);
          return -1 === kT ? -1 : 2 + kT
        },
        MT = [];
      for (const yT of TT) {
        const TT = [lT(yT.lowerLabel), lT(yT.lowerName)].filter((TT => -1 !== TT));
        TT.length && MT.push({
          item: yT,
          rank: Math.min(...TT)
        })
      }
      if (MT.length > 0) return MT.sort(((TT, kT) => TT.rank - kT.rank)).map((TT => TT.item));
      const KT = [...cT],
        OT = TT => {
          let kT = 0;
          for (const cT of KT) {
            if (kT = TT.indexOf(cT, kT), -1 === kT) return !1;
            kT++
          }
          return !0
        };
      return TT.filter((TT => OT(TT.lowerLabel) || OT(TT.lowerName)))
    }

    function IM(TT, kT) {
      var cT;
      return null !== (cT = null === TT || void 0 === TT ? void 0 : TT[kT]) && void 0 !== cT ? cT : kT
    }

    function AM(TT, kT) {
      const cT = TT.userInput;
      return void 0 !== kT && "dropdown" === (null === cT || void 0 === cT ? void 0 : cT.type) && cT.dropdownOptions.map(rl.h).includes(kT) ? kT : function(TT) {
        const kT = TT.userInput;
        if ("dropdown" !== (null === kT || void 0 === kT ? void 0 : kT.type) || 0 === kT.dropdownOptions.length) return null;
        const cT = kT.dropdownOptions.map(rl.h);
        return kT.initialValue && cT.includes(kT.initialValue) ? kT.initialValue : cT[cT.length - 1]
      }(TT)
    }

    function CM(TT) {
      return void 0 === TT ? "" : JSON.stringify(TT)
    }
    const jM = (0, lT.createContext)(null);

    function vM() {
      return (0, lT.useContext)(jM)
    }
    var tM = cT(2712);
    const hM = (0, lT.memo)((function(TT) {
        let {
          name: kT,
          label: cT,
          onPick: lT
        } = TT;
        return (0, AT.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: cT,
          onClick: () => {
            lT(kT)
          },
          children: [(0, AT.jsx)(Ll, {
            item: kT,
            size: "big"
          }), (0, AT.jsx)("span", {
            children: cT
          })]
        })
      })),
      NM = (0, lT.memo)((function(TT) {
        let {
          items: kT,
          query: cT,
          onPick: MT
        } = TT;
        const {
          t: KT
        } = (0, OT.B)(), [yT, fT] = (0, lT.useState)(new Set), xT = (0, lT.useMemo)((() => function(TT) {
          const kT = new Map;
          for (const cT of TT) {
            let TT = kT.get(cT.category);
            TT || (TT = [], kT.set(cT.category, TT)), TT.push(cT)
          }
          return [...sl, "other"].filter((TT => kT.has(TT))).map((TT => ({
            category: TT,
            items: kT.get(TT)
          })))
        }(kT)), [kT]), IT = (0, lT.useMemo)((() => xM(kT, cT).slice(0, 60)), [kT, cT]);
        return cT.trim() ? 0 === IT.length ? (0, AT.jsx)(Ul, {
          title: KT("smpShop:noItemsFound", {
            query: cT.trim()
          }),
          children: KT("smpShop:tryShorterName")
        }) : (0, AT.jsx)(tM.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: MM,
          observerUpdateDeps: [cT],
          children: IT.map((TT => (0, AT.jsx)(hM, {
            name: TT.name,
            label: TT.label,
            onPick: MT
          }, TT.name)))
        }) : (0, AT.jsx)(AT.Fragment, {
          children: xT.map((TT => {
            let {
              category: kT,
              items: cT
            } = TT;
            const lT = yT.has(kT) || cT.length <= 48,
              OT = lT ? cT : cT.slice(0, 48);
            return (0, AT.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, AT.jsxs)("h4", {
                children: [KT("other" === kT ? "smpShop:otherItems" : `creativeInventory:${kT}`), !lT && (0, AT.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    fT(new Set([...yT, kT]))
                  },
                  children: KT("smpShop:showAll", {
                    count: cT.length
                  })
                })]
              }), (0, AT.jsx)(tM.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: MM,
                observerUpdateDeps: [lT],
                children: OT.map((TT => (0, AT.jsx)(hM, {
                  name: TT.name,
                  label: TT.label,
                  onPick: MT
                }, TT.name)))
              })]
            }, kT)
          }))
        })
      }));

    function QM(TT, kT) {
      const {
        searched: cT,
        shown: MT,
        searchFor: KT,
        loading: OT
      } = function(TT, kT) {
        var cT;
        const MT = vM(),
          [KT, OT] = (0, lT.useState)(void 0),
          yT = (0, lT.useRef)(void 0),
          fT = (0, lT.useRef)(0),
          xT = (0, lT.useRef)(void 0),
          IT = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.meta.item) && void 0 !== cT ? cT : null,
          AT = !!TT && MT.isPending(TT.key);
        (0, lT.useEffect)((() => {
          if (!TT || AT || !kT || void 0 === KT || KT === IT) return;
          const cT = KT === yT.current && MT.gaveUpAt(TT.key) > fT.current && xT.current !== KT;
          (KT !== yT.current || cT) && MT.act(TT.key, null !== KT && void 0 !== KT ? KT : "*", cT) && (cT && (xT.current = KT), yT.current = KT, fT.current = Date.now())
        }), [TT, AT, kT, KT, IT, MT]);
        const CT = (0, lT.useCallback)((TT => {
            yT.current = void 0, xT.current = void 0, OT(TT)
          }), []),
          jT = void 0 !== KT && KT !== IT && (AT || yT.current !== KT);
        return {
          searched: IT,
          shown: jT ? KT : IT,
          searchFor: CT,
          loading: jT || AT || null !== IT && !kT
        }
      }(TT, kT), yT = (0, lT.useMemo)((() => function() {
        var TT;
        let kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const MT = `${(0,TM.k)()}\x1f${kT.join("\x1e")}\x1f${cT.join("\x1e")}\x1f${JSON.stringify(lT)}`;
        if ((null === (TT = fM) || void 0 === TT ? void 0 : TT.key) === MT) return fM.items;
        const KT = new Set(cT),
          OT = new Set,
          yT = [],
          fT = (TT, kT) => {
            var cT;
            if (!TT || OT.has(TT) || KT.has(TT)) return;
            OT.add(TT);
            const MT = null !== (cT = lT[TT]) && void 0 !== cT ? cT : TT;
            yT.push({
              name: TT,
              label: MT,
              lowerLabel: MT.toLowerCase(),
              lowerName: TT.toLowerCase(),
              category: kT
            })
          };
        for (const IT of (0, il.creativeItemIds)()) {
          var xT;
          (0, il.itemIsDisabled)(IT, !0, !0, !1) || (0, il.showOnlyInCreativeSearch)(IT) || fT((0, TM.i)(IT), null !== (xT = (0, il.creativeCategoryOf)(IT)) && void 0 !== xT ? xT : "other")
        }
        for (const IT of kT) fT(IT, "other");
        return fM = {
          key: MT,
          items: yT
        }, yT
      }(null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names)), [null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names]), [fT, xT] = (0, lT.useState)(""), [IT, AT] = (0, lT.useState)(0), [CT, jT] = (0, lT.useState)("recent"), vT = (0, lT.useCallback)((TT => {
        xT(""), AT((TT => TT + 1)), KT(TT)
      }), [KT]), tT = "browse" === CT || "" !== fT.trim();
      return {
        searched: cT,
        shown: MT,
        searchFor: KT,
        loading: OT,
        catalogue: yT,
        names: null === TT || void 0 === TT ? void 0 : TT.meta.names,
        query: fT,
        setQuery: xT,
        searchBoxKey: IT,
        pickItem: vT,
        setView: jT,
        browsing: tT
      }
    }

    function SM(TT) {
      let {
        browser: kT,
        children: cT
      } = TT;
      const {
        t: lT
      } = (0, OT.B)(), MT = vM();
      return (0, AT.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, AT.jsx)("div", {
          className: "SmpSearch",
          children: (0, AT.jsx)(aT.b, {
            className: "SmpSearchInput",
            placeholderText: lT("smpShop:searchPlaceholder"),
            defaultValue: kT.query,
            onValueChange: TT => {
              kT.setQuery(TT), kT.searched && TT.trim() && kT.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const TT = xM(kT.catalogue, kT.query)[0];
              TT ? kT.pickItem(TT.name) : kT.query.trim() && MT.notify(lT("smpShop:noItemsFound", {
                query: kT.query.trim()
              }))
            }
          }, kT.searchBoxKey)
        }), cT]
      })
    }

    function DM(TT) {
      let {
        browser: kT,
        recentLabel: cT,
        children: lT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)();
      return (0, AT.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, AT.jsx)(Bl, {
          options: [{
            value: "recent",
            label: cT
          }, {
            value: "browse",
            label: MT("smpShop:browseItems")
          }],
          value: kT.browsing ? "browse" : "recent",
          onChange: kT.setView,
          ariaLabel: MT("smpShop:show")
        }), !kT.browsing && lT]
      })
    }

    function aM(TT) {
      let {
        item: kT,
        names: cT,
        summary: lT,
        onBack: MT,
        children: KT
      } = TT;
      const {
        t: yT
      } = (0, OT.B)();
      return (0, AT.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, AT.jsx)(xT.b, {
          className: "SmpBackButton",
          onClick: MT,
          children: yT("general:back")
        }), (0, AT.jsx)(Ll, {
          item: kT,
          size: "big"
        }), (0, AT.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, AT.jsx)("b", {
            children: IM(cT, kT)
          }), lT && (0, AT.jsx)("small", {
            children: lT
          })]
        }), KT]
      })
    }

    function FM(TT) {
      let {
        browser: kT,
        className: cT,
        action: lT,
        above: MT,
        list: OT,
        summary: yT,
        recentLabel: fT,
        listControls: xT,
        onBack: IT
      } = TT;
      return (0, AT.jsxs)("div", {
        className: KT()("SmpScreen", cT),
        children: [(0, AT.jsx)(SM, {
          browser: kT,
          children: lT
        }), kT.shown && (0, AT.jsx)(aM, {
          item: kT.shown,
          names: kT.names,
          summary: !kT.loading && yT,
          onBack: () => {
            null === IT || void 0 === IT || IT(), kT.searchFor(null)
          },
          children: xT
        }), MT, kT.shown ? OT : (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsx)(DM, {
            browser: kT,
            recentLabel: fT,
            children: xT
          }), kT.browsing ? (0, AT.jsx)(NM, {
            items: kT.catalogue,
            query: kT.query,
            onPick: kT.pickItem
          }) : OT]
        })]
      })
    }

    function rM(TT, kT) {
      const cT = TT.map((TT => {
        let {
          meta: kT
        } = TT;
        return kT.pricePerItem
      }));
      return "min" === kT ? Math.min(...cT) : Math.max(...cT)
    }
    var PM = cT(6563);
    const wM = (0, lT.memo)((function(TT) {
      var kT;
      const {
        t: cT
      } = (0, OT.B)(), lT = null === TT.seller, MT = TT.quantity * TT.pricePerItem;
      return (0, AT.jsxs)("div", {
        className: TT.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, AT.jsx)(Ll, {
          item: TT.item,
          amount: TT.quantity,
          size: TT.grid ? "big" : "normal",
          tier: TT.tier
        }), (0, AT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AT.jsx)("b", {
            children: (0, AT.jsx)(bl.b, {
              text: null !== (kT = TT.title) && void 0 !== kT ? kT : `${TT.quantity}x ${TT.item}`
            })
          }), (0, AT.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, AT.jsx)("span", {
              children: lT ? cT("smpShop:you") : (0, AT.jsx)(bl.b, {
                text: [{
                  entityName: TT.seller
                }]
              })
            }), (0, AT.jsx)("span", {
              children: cT("smpShop:timeLeft", {
                time: OM(TT.expiresAt)
              })
            })]
          })]
        }), (0, AT.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, AT.jsx)(Rl, {
            amount: TT.pricePerItem
          }), (0, AT.jsx)("small", {
            children: cT("smpShop:each")
          })]
        }), (0, AT.jsx)(xT.e, {
          className: "SmpBuyButton",
          disabled: lT || !TT.canAfford && !TT.busy,
          loading: TT.busy,
          onClick: () => {
            TT.onBuy(TT.itemKey)
          },
          children: lT ? cT("smpShop:yours") : (0, AT.jsx)(Rl, {
            amount: MT
          })
        })]
      })
    }));

    function mM(TT) {
      let {
        view: kT,
        onChange: cT
      } = TT;
      const {
        t: lT
      } = (0, OT.B)();
      return (0, AT.jsx)(Xl.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: lT("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, AT.jsx)(yT.e, {
            name: "list"
          }),
          ariaLabel: lT("smpShop:listView")
        }, {
          value: "grid",
          label: (0, AT.jsx)(yT.e, {
            name: "grid-2"
          }),
          ariaLabel: lT("smpShop:gridView")
        }],
        value: kT,
        onChange: cT
      })
    }

    function bM(TT) {
      let {
        entries: kT,
        view: cT
      } = TT;
      const {
        t: lT
      } = (0, OT.B)(), MT = vM(), KT = "grid" === cT;
      return (0, AT.jsxs)(AT.Fragment, {
        children: [!KT && (0, AT.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, AT.jsx)("span", {}), (0, AT.jsx)("span", {
            children: lT("smpShop:columnItem")
          }), (0, AT.jsx)("span", {
            children: lT("smpShop:columnPriceEach")
          }), (0, AT.jsx)("span", {
            children: lT("smpShop:columnTotal")
          })]
        }), (0, AT.jsx)(tM.c, {
          lazyLoadedClassName: KT ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: MM,
          observerUpdateDeps: [kT.length],
          children: kT.map((TT => {
            var kT, cT;
            let {
              key: lT,
              item: OT,
              meta: yT
            } = TT;
            const fT = yT.quantity * yT.pricePerItem;
            return (0, AT.jsx)(wM, {
              itemKey: lT,
              item: yT.item,
              title: OT.customTitle,
              quantity: yT.quantity,
              pricePerItem: yT.pricePerItem,
              seller: yT.seller,
              expiresAt: yT.expiresAt,
              tier: null !== (kT = null === (cT = OT.enchant) || void 0 === cT ? void 0 : cT.tier) && void 0 !== kT ? kT : null,
              busy: MT.isPending(lT) || null !== yT.seller && !1 === OT.canBuy,
              canAfford: MT.canAfford(OT, fT),
              grid: KT,
              onBuy: MT.act
            }, lT)
          }))
        }, cT)]
      })
    }
    const zM = [1, 10, 100],
      JM = [1, 10, 100, 999];

    function oM(TT) {
      var kT, cT, MT, fT, IT, CT, jT, vT, tT, hT;
      const {
        t: NT
      } = (0, OT.B)(), QT = vM(), {
        creator: ST,
        mode: DT
      } = TT, [FT, rT] = (0, lT.useState)(null !== (kT = null === ST || void 0 === ST ? void 0 : ST.meta.item) && void 0 !== kT ? kT : null), [PT, wT] = (0, lT.useState)(1), [mT, bT] = (0, lT.useState)(0), [zT, JT] = (0, lT.useState)(""), [oT, HT] = (0, lT.useState)(0), eT = (0, lT.useRef)(FT), GT = (0, lT.useRef)(!1), [VT, ET] = (0, lT.useState)(!1), ZT = null !== (cT = null === ST || void 0 === ST ? void 0 : ST.meta.item) && void 0 !== cT ? cT : null, uT = null !== (MT = null === ST || void 0 === ST ? void 0 : ST.meta.owned) && void 0 !== MT ? MT : 0;
      (0, lT.useEffect)((() => {
        TT.searching || null === ZT || ZT === eT.current || (eT.current = ZT, GT.current = !1, rT(ZT), bT(0), wT("list" === DT ? Math.max(1, uT) : 1))
      }), [ZT, TT.searching]);
      const XT = !!ST && !!FT && ST.meta.item === FT,
        dT = XT ? ST.meta.owned : null !== (fT = null === (IT = TT.inventory) || void 0 === IT || null === (CT = IT.find((TT => TT.item === FT))) || void 0 === CT ? void 0 : CT.quantity) && void 0 !== fT ? fT : 0,
        LT = "list" === DT ? Math.max(1, dT) : 45954,
        RT = null !== (jT = TT.prices[0]) && void 0 !== jT ? jT : null,
        gT = TT.prices.length ? Math.round(TT.prices.reduce(((TT, kT) => TT + kT), 0) / TT.prices.length) : null,
        UT = null === (vT = TT.inventory) || void 0 === vT || null === (tT = vT.find((TT => TT.item === FT))) || void 0 === tT ? void 0 : tT.sellPrice;
      (0, lT.useEffect)((() => {
        var TT;
        XT && (wT((TT => "list" === DT ? Math.min(Math.max(1, TT), Math.max(1, dT)) : TT)), GT.current || bT(null !== (TT = null !== RT && void 0 !== RT ? RT : gT) && void 0 !== TT ? TT : Math.max(1, null !== UT && void 0 !== UT ? UT : 1)))
      }), [XT, dT, FT, RT, gT]);
      const YT = TT => {
          GT.current = !0, bT(TT)
        },
        BT = kT => {
          var cT, lT, MT;
          eT.current = kT, GT.current = !1, ET(!1), JT(""), HT((TT => TT + 1)), rT(kT), bT(0), wT("list" === DT && null !== (cT = null === (lT = TT.inventory) || void 0 === lT || null === (MT = lT.find((TT => TT.item === kT))) || void 0 === MT ? void 0 : MT.quantity) && void 0 !== cT ? cT : 1), (null === ST || void 0 === ST ? void 0 : ST.meta.item) !== kT && TT.onPickItem(kT)
        },
        WT = PT * mT,
        nT = "list" === DT && null !== ST && void 0 !== ST && ST.meta.fee ? function(TT, kT) {
          const cT = Math.max(0, kT - TT.taxFreeAllowance);
          return Math.ceil(Math.round(cT * TT.rate * 1e6) / 1e6)
        }(ST.meta.fee, WT) : 0,
        pT = !!ST && QT.isPending(ST.key),
        iT = XT && !TT.searching && PT >= 1 && mT >= 1 && ("order" === DT || dT >= PT) && !pT,
        qT = !!FT && !XT && !TT.searching && PT >= 1 && mT >= 1,
        sT = () => {
          iT ? QT.act(ST.key, `${PT}|${mT}`) : qT && (TT.onPickItem(FT), ET(!0))
        };
      (0, lT.useEffect)((() => {
        VT && XT && !TT.searching && (ET(!1), sT())
      }), [VT, XT, TT.searching]);
      const Tk = !!FT && !XT && (TT.searching || VT),
        kk = FT ? IM(TT.names, FT) : "",
        ck = (0, lT.useMemo)((() => xM(TT.catalogue, zT).slice(0, 8)), [TT.catalogue, zT]),
        lk = ("list" === DT ? zM.filter((TT => TT < dT)) : JM).map((TT => ({
          value: TT,
          label: String(TT)
        })));
      "list" === DT && dT > 0 && lk.push({
        value: dT,
        label: NT("smpShop:all", {
          count: dT
        })
      });
      const Mk = [];
      return null !== RT && (RT > 1 && Mk.push({
        value: RT - 1,
        label: NT("smpShop:undercut", {
          price: ul(RT - 1)
        })
      }), Mk.push({
        value: RT,
        label: NT("smpShop:lowest", {
          price: ul(RT)
        })
      })), null !== gT && gT !== RT && Mk.push({
        value: gT,
        label: NT("smpShop:average", {
          price: ul(gT)
        })
      }), (0, AT.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, AT.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, AT.jsx)("b", {
            children: NT("list" === DT ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, AT.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": NT("smpShop:close"),
            onClick: TT.onClose,
            children: (0, AT.jsx)(yT.e, {
              name: "xmark"
            })
          })]
        }), "list" === DT && (0, AT.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (hT = TT.inventory) && void 0 !== hT && hT.length ? TT.inventory.map((TT => {
            let {
              item: kT,
              quantity: cT
            } = TT;
            return (0, AT.jsx)("button", {
              type: "button",
              title: kT,
              className: KT()("SmpPickerSlot", {
                SmpPickerSlotOn: kT === FT
              }),
              onClick: () => {
                BT(kT)
              },
              children: (0, AT.jsx)(Ll, {
                item: kT,
                amount: cT
              })
            }, kT)
          })) : (0, AT.jsx)("span", {
            className: "SmpMuted",
            children: NT("smpShop:nothingToList")
          })
        }), ("list" === DT || !FT) && (0, AT.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, AT.jsx)(aT.b, {
            className: "SmpSearchInput",
            placeholderText: NT("list" === DT ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: zT,
            onValueChange: JT,
            blurOnEnter: !0,
            onEnter: () => {
              ck[0] && BT(ck[0].name)
            }
          }, oT), ck.length > 0 && (0, AT.jsx)("div", {
            className: "SmpPicker",
            children: ck.map((TT => {
              let {
                name: kT
              } = TT;
              return (0, AT.jsx)("button", {
                type: "button",
                title: kT,
                className: KT()("SmpPickerSlot", {
                  SmpPickerSlotOn: kT === FT
                }),
                onClick: () => {
                  BT(kT)
                },
                children: (0, AT.jsx)(Ll, {
                  item: kT
                })
              }, kT)
            }))
          })]
        }), FT && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("div", {
            className: "SmpPickedName",
            children: [kk, Tk && (0, AT.jsx)(Wl, {})]
          }), (0, AT.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, AT.jsxs)("div", {
              className: "SmpField",
              children: [(0, AT.jsxs)("span", {
                children: [NT("smpShop:quantity"), "list" === DT && XT && (0, AT.jsx)("small", {
                  children: NT("smpShop:youHave", {
                    count: dT
                  })
                })]
              }), (0, AT.jsx)(nl, {
                value: PT,
                onChange: wT,
                max: LT,
                label: NT("smpShop:quantity")
              }), (0, AT.jsx)(Bl, {
                options: lk,
                value: PT,
                onChange: wT,
                ariaLabel: NT("smpShop:quantity")
              })]
            }), (0, AT.jsxs)("div", {
              className: "SmpField",
              children: [(0, AT.jsx)("span", {
                children: NT("smpShop:pricePerItem")
              }), (0, AT.jsx)(nl, {
                value: Math.max(1, mT),
                onChange: YT,
                max: 9999999,
                step: pl,
                label: NT("smpShop:pricePerItem")
              }), (0, AT.jsx)(Bl, {
                options: Mk,
                value: mT,
                onChange: YT,
                ariaLabel: NT("smpShop:pricePerItem")
              })]
            })]
          }), "list" === DT && (0, AT.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, AT.jsxs)("span", {
              children: [NT("smpShop:youGet"), " ", (0, AT.jsx)(Rl, {
                amount: Math.max(0, WT - nT),
                exact: !0
              })]
            }), (0, AT.jsx)("small", {
              children: nT > 0 ? NT("smpShop:listingFee", {
                fee: nT.toLocaleString("en-US")
              }) : NT("smpShop:listingRules")
            })]
          }), (0, AT.jsx)(xT.r, {
            className: "SmpSubmit",
            disabled: !iT && !qT && !pT,
            loading: pT || Tk || XT && TT.searching,
            onClick: sT,
            children: "list" === DT ? NT("smpShop:listButton", {
              count: PT,
              item: kk
            }) : (0, AT.jsxs)(AT.Fragment, {
              children: [NT("smpShop:orderButton", {
                count: PT,
                item: kk
              }), " ", mT >= 1 && (0, AT.jsx)(Rl, {
                amount: WT
              })]
            })
          })]
        })]
      })
    }

    function HM() {
      var TT;
      const {
        t: kT
      } = (0, OT.B)(), cT = vM(), MT = null === (TT = cT.shopInfo[cT.categoryKey]) || void 0 === TT ? void 0 : TT.items, KT = lM(MT, "search"), yT = lM(MT, "creator"), fT = cM(MT, "enchantedCreator"), IT = cM(MT, "listing"), CT = lM(MT, "empty"), jT = QM(KT, IT.length > 0 || null !== CT), {
        searched: vT,
        shown: tT,
        loading: hT
      } = jT, [NT, QT] = (0, lT.useState)(!1), [ST, DT] = function() {
        const [TT, kT] = (0, PM.e)("smpMarketView", "list");
        return ["grid" === TT ? "grid" : "list", kT]
      }(), aT = "grid" === ST, FT = (0, lT.useMemo)((() => IT.filter((TT => {
        let {
          meta: kT
        } = TT;
        return null !== kT.seller && kT.item === vT
      })).map((TT => {
        let {
          meta: kT
        } = TT;
        return kT.pricePerItem
      })).sort(((TT, kT) => TT - kT))), [IT, vT]), rT = (0, lT.useMemo)((() => {
        const TT = new Set(jT.catalogue.map((TT => {
          let {
            name: kT
          } = TT;
          return kT
        })));
        return function(TT) {
          for (const kT in TT)
            if ("sell" === TT[kT].smp) return cM(TT[kT].items, "sell").filter((TT => {
              let {
                item: kT
              } = TT;
              return !kT.enchant
            })).map((TT => {
              let {
                meta: kT
              } = TT;
              return {
                item: kT.item,
                quantity: kT.quantity,
                sellPrice: kT.pricePerItem
              }
            }));
          return []
        }(cT.shopInfo).filter((kT => {
          let {
            item: cT
          } = kT;
          return TT.has(cT)
        }))
      }), [cT.shopInfo, jT.catalogue]);
      return (0, AT.jsx)(FM, {
        browser: jT,
        className: "SmpMarketTab",
        recentLabel: kT("smpShop:recentlyListed"),
        action: (0, AT.jsx)(xT.r, {
          className: "SmpSellButton",
          onClick: () => {
            QT((TT => !TT))
          },
          children: kT("smpShop:sell")
        }),
        above: NT && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsx)(oM, {
            mode: "list",
            creator: yT,
            inventory: rT,
            catalogue: jT.catalogue,
            names: jT.names,
            searching: hT,
            prices: FT,
            onPickItem: jT.searchFor,
            onClose: () => {
              QT(!1)
            }
          }), fT.length > 0 && (0, AT.jsx)(eM, {
            entries: fT
          })]
        }),
        listControls: (0, AT.jsx)(mM, {
          view: ST,
          onChange: DT
        }),
        summary: tT && (IT.length > 0 ? kT(1 === IT.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: IT.length,
          price: ul(rM(IT, "min"))
        }) : kT("smpShop:noOneSelling", {
          item: IM(jT.names, tT)
        })),
        list: hT ? (0, AT.jsx)(gl, {
          grid: aT
        }) : IT.length > 0 ? (0, AT.jsx)(bM, {
          entries: IT,
          view: ST
        }) : CT ? (0, AT.jsx)(Yl, {
          entry: CT
        }) : (0, AT.jsx)(gl, {
          count: 3,
          grid: aT
        })
      })
    }

    function eM(TT) {
      let {
        entries: kT
      } = TT;
      const {
        t: cT
      } = (0, OT.B)(), MT = vM(), [KT, yT] = (0, lT.useState)({});
      return (0, AT.jsx)("div", {
        className: "SmpList",
        children: kT.map((TT => {
          var kT, lT, OT;
          let {
            key: fT,
            item: IT,
            meta: CT
          } = TT;
          const jT = null !== (kT = KT[fT]) && void 0 !== kT ? kT : 1;
          return (0, AT.jsxs)("div", {
            className: "SmpRow",
            children: [(0, AT.jsx)(Ll, {
              item: CT.item,
              amount: CT.quantity,
              tier: null !== (lT = null === (OT = IT.enchant) || void 0 === OT ? void 0 : OT.tier) && void 0 !== lT ? lT : null
            }), (0, AT.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, AT.jsx)("b", {
                children: (0, AT.jsx)(bl.b, {
                  text: IT.customTitle
                })
              }), (0, AT.jsx)("small", {
                children: cT("smpShop:enchantedListing")
              })]
            }), (0, AT.jsx)(nl, {
              value: jT,
              onChange: TT => {
                yT({
                  ...KT,
                  [fT]: TT
                })
              },
              max: 9999999,
              step: pl,
              label: cT("smpShop:pricePerItem")
            }), (0, AT.jsxs)(xT.r, {
              loading: MT.isPending(fT),
              onClick: () => {
                MT.act(fT, String(jT))
              },
              children: [cT("smpShop:list"), " ", (0, AT.jsx)(Rl, {
                amount: jT
              })]
            })]
          }, fT)
        }))
      })
    }
    const GM = (0, lT.memo)((function(TT) {
      let {
        itemKey: kT,
        item: cT,
        quantity: lT,
        pricePerItem: MT,
        tier: OT,
        selected: yT,
        onSelect: fT
      } = TT;
      return (0, AT.jsxs)("button", {
        type: "button",
        className: KT()("SmpInventorySlot", {
          SmpInventorySlotOn: yT
        }),
        title: cT,
        onClick: () => {
          fT(kT)
        },
        children: [(0, AT.jsx)(Ll, {
          item: cT,
          amount: lT,
          tier: OT
        }), (0, AT.jsx)(Rl, {
          amount: MT
        })]
      })
    }));

    function VM() {
      var TT;
      const {
        t: kT
      } = (0, OT.B)(), cT = vM(), MT = null === (TT = cT.shopInfo[cT.categoryKey]) || void 0 === TT ? void 0 : TT.items, yT = cM(MT, "sell"), fT = lM(MT, "empty"), [xT, IT] = (0, lT.useState)(null), [CT, jT] = (0, lT.useState)({}), vT = yT.find((TT => {
        let {
          key: kT
        } = TT;
        return kT === xT
      }));
      return 0 === yT.length ? (0, AT.jsx)("div", {
        className: "SmpScreen",
        children: (0, AT.jsx)(Ul, {
          title: fT ? (0, AT.jsx)(bl.b, {
            text: fT.item.customTitle
          }) : kT("smpShop:nothingToSell"),
          children: fT && (0, AT.jsx)(bl.b, {
            text: fT.item.description
          })
        })
      }) : (0, AT.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, AT.jsx)("div", {
          className: "SmpInventoryGrid",
          children: yT.map((TT => {
            var kT, cT;
            let {
              key: lT,
              item: MT,
              meta: KT
            } = TT;
            return (0, AT.jsx)(GM, {
              itemKey: lT,
              item: KT.item,
              quantity: KT.quantity,
              pricePerItem: KT.pricePerItem,
              tier: null !== (kT = null === (cT = MT.enchant) || void 0 === cT ? void 0 : cT.tier) && void 0 !== kT ? kT : null,
              selected: lT === xT,
              onSelect: IT
            }, lT)
          }))
        }), (0, AT.jsx)("div", {
          className: KT()("SmpSellBar", {
            SmpSellBarIdle: !vT
          }),
          children: vT ? (0, AT.jsx)(EM, {
            entry: vT,
            choice: AM(vT.item, CT[vT.key]),
            onChoose: TT => {
              jT({
                ...CT,
                [vT.key]: TT
              })
            }
          }) : (0, AT.jsx)("span", {
            className: "SmpMuted",
            children: kT("smpShop:tapToSell")
          })
        })]
      })
    }

    function EM(TT) {
      var kT, cT, lT, MT;
      let {
        entry: KT,
        choice: yT,
        onChoose: fT
      } = TT;
      const {
        t: IT
      } = (0, OT.B)(), CT = vM(), {
        key: jT,
        item: vT,
        meta: tT
      } = KT, hT = yM("dropdown" === (null === (kT = vT.userInput) || void 0 === kT ? void 0 : kT.type) ? vT.userInput.dropdownOptions : []), NT = null === yT ? 0 : -(0, rl.e)(vT, yT);
      return (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsx)(Ll, {
          item: tT.item,
          amount: tT.quantity,
          tier: null !== (cT = null === (lT = vT.enchant) || void 0 === lT ? void 0 : lT.tier) && void 0 !== cT ? cT : null
        }), (0, AT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AT.jsx)("b", {
            children: (0, AT.jsx)(bl.b, {
              text: null !== (MT = vT.customTitle) && void 0 !== MT ? MT : tT.item
            })
          }), (0, AT.jsx)("small", {
            children: IT("smpShop:sellEach", {
              count: tT.quantity
            })
          })]
        }), (0, AT.jsx)(Bl, {
          options: hT.map((TT => {
            let {
              label: kT,
              quantity: cT,
              isAll: lT
            } = TT;
            return {
              value: kT,
              label: lT ? IT("smpShop:all", {
                count: cT
              }) : String(cT)
            }
          })),
          value: yT,
          onChange: fT,
          ariaLabel: IT("smpShop:quantity")
        }), (0, AT.jsxs)(xT.r, {
          loading: CT.isPending(jT),
          disabled: null === yT,
          onClick: () => {
            CT.act(jT, yT)
          },
          children: [IT("smpShop:sellButton"), " ", (0, AT.jsx)(Rl, {
            amount: NT
          })]
        })]
      })
    }

    function ZM() {
      var TT;
      const {
        t: kT
      } = (0, OT.B)(), cT = vM(), lT = null === (TT = cT.shopInfo[cT.categoryKey]) || void 0 === TT ? void 0 : TT.items, MT = cM(lT, "collect"), KT = cM(lT, "myListing"), yT = (TT, kT) => cT.isPending(TT) || !1 === kT.canBuy;
      return (0, AT.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, AT.jsx)("h3", {
          className: "SmpSectionTitle",
          children: kT("smpShop:readyToCollect")
        }), MT.length > 0 ? (0, AT.jsx)("div", {
          className: "SmpList",
          children: MT.map((TT => {
            var lT, MT;
            let {
              key: KT,
              item: OT,
              meta: fT
            } = TT;
            return (0, AT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AT.jsx)(Ll, {
                item: "sold" === fT.type ? "Gold Coin" : fT.item,
                amount: "sold" === fT.type ? 0 : fT.quantity,
                tier: null !== (lT = null === (MT = OT.enchant) || void 0 === MT ? void 0 : MT.tier) && void 0 !== lT ? lT : null
              }), (0, AT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AT.jsx)("b", {
                  children: (0, AT.jsx)(bl.b, {
                    text: OT.customTitle
                  })
                }), (0, AT.jsx)("small", {
                  children: (0, AT.jsx)(bl.b, {
                    text: OT.description
                  })
                })]
              }), (0, AT.jsx)(xT.m, {
                loading: yT(KT, OT),
                onClick: () => {
                  cT.act(KT)
                },
                children: kT("smpShop:collect")
              })]
            }, KT)
          }))
        }) : (0, AT.jsx)(Ul, {
          title: kT("smpShop:nothingToCollect"),
          children: kT("smpShop:nothingToCollectHint")
        }), (0, AT.jsx)("h3", {
          className: "SmpSectionTitle",
          children: kT("smpShop:activeListings", {
            count: KT.length
          })
        }), KT.length > 0 ? (0, AT.jsx)("div", {
          className: "SmpList",
          children: KT.map((TT => {
            var lT, MT;
            let {
              key: KT,
              item: OT,
              meta: fT
            } = TT;
            return (0, AT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AT.jsx)(Ll, {
                item: fT.item,
                amount: fT.quantity,
                tier: null !== (lT = null === (MT = OT.enchant) || void 0 === MT ? void 0 : MT.tier) && void 0 !== lT ? lT : null
              }), (0, AT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AT.jsx)("b", {
                  children: (0, AT.jsx)(bl.b, {
                    text: OT.customTitle
                  })
                }), (0, AT.jsx)("small", {
                  children: kT("smpShop:timeLeft", {
                    time: OM(fT.expiresAt)
                  })
                })]
              }), (0, AT.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, AT.jsx)(Rl, {
                  amount: fT.pricePerItem
                }), (0, AT.jsx)("small", {
                  children: kT("smpShop:each")
                })]
              }), (0, AT.jsx)(xT.I, {
                loading: yT(KT, OT),
                onClick: () => {
                  cT.act(KT)
                },
                children: kT("smpShop:cancel")
              })]
            }, KT)
          }))
        }) : (0, AT.jsx)(Ul, {
          title: kT("smpShop:noActiveListings"),
          children: kT("smpShop:noActiveListingsHint")
        })]
      })
    }

    function uM(TT) {
      let {
        done: kT,
        of: cT
      } = TT;
      return (0, AT.jsx)("span", {
        className: "SmpProgress",
        children: (0, AT.jsx)("i", {
          style: {
            width: `${Math.min(100,kT/Math.max(1,cT)*100)}%`
          }
        })
      })
    }

    function XM(TT) {
      var kT, cT, lT;
      let {
        entry: MT,
        choice: KT,
        onChoose: yT
      } = TT;
      const {
        t: fT
      } = (0, OT.B)(), IT = vM(), {
        key: CT,
        item: jT,
        meta: vT
      } = MT, tT = "dropdown" === (null === (kT = jT.userInput) || void 0 === kT ? void 0 : kT.type) ? jT.userInput.dropdownOptions : [], hT = !0 === vT.processing, NT = null !== vT.creator && (vT.owned > 0 || hT), QT = NT && vT.owned > 0 ? yM(tT) : [], ST = null === KT ? 0 : null !== (cT = null === (lT = QT.find((TT => TT.label === KT))) || void 0 === lT ? void 0 : lT.quantity) && void 0 !== cT ? cT : 0;
      return (0, AT.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, AT.jsx)(Ll, {
          item: vT.item
        }), (0, AT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AT.jsx)("b", {
            children: (0, AT.jsx)(bl.b, {
              text: jT.customTitle
            })
          }), (0, AT.jsxs)("small", {
            children: [(0, AT.jsx)(Rl, {
              amount: vT.pricePerItem
            }), " ", fT("smpShop:each"), " \xb7", " ", null === vT.creator ? fT("smpShop:you") : (0, AT.jsx)(bl.b, {
              text: [{
                entityName: vT.creator
              }]
            })]
          }), (0, AT.jsx)(uM, {
            done: vT.delivered,
            of: vT.wanted
          })]
        }), NT ? (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsx)(Bl, {
            options: QT.map((TT => {
              let {
                label: kT,
                quantity: cT,
                isAll: lT
              } = TT;
              return {
                value: kT,
                label: lT ? fT("smpShop:max", {
                  count: cT
                }) : String(cT)
              }
            })),
            value: KT,
            onChange: yT,
            ariaLabel: fT("smpShop:quantity")
          }), (0, AT.jsxs)(xT.r, {
            loading: IT.isPending(CT) || hT,
            disabled: null === KT,
            onClick: () => {
              IT.act(CT, KT)
            },
            children: [fT("smpShop:deliver"), " ", (0, AT.jsx)(Rl, {
              amount: ST * vT.pricePerItem
            })]
          })]
        }) : (0, AT.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === vT.creator ? fT("smpShop:yourOrder") : fT("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function dM() {
      var TT;
      const {
        t: kT
      } = (0, OT.B)(), cT = vM(), MT = null === (TT = cT.shopInfo[cT.categoryKey]) || void 0 === TT ? void 0 : TT.items, KT = lM(MT, "search"), yT = lM(MT, "creator"), fT = cM(MT, "order"), IT = lM(MT, "empty"), CT = QM(KT, fT.length > 0 || null !== IT), [jT, vT] = (0, lT.useState)(!1), [tT, hT] = (0, lT.useState)({});
      return (0, AT.jsx)(FM, {
        browser: CT,
        recentLabel: kT("smpShop:recentOrders"),
        action: (0, AT.jsx)(xT.r, {
          onClick: () => {
            vT((TT => !TT))
          },
          children: kT("smpShop:createOrder")
        }),
        above: jT && (0, AT.jsx)(oM, {
          mode: "order",
          creator: yT,
          catalogue: CT.catalogue,
          names: CT.names,
          searching: CT.loading,
          prices: [],
          onPickItem: CT.searchFor,
          onClose: () => {
            vT(!1)
          }
        }),
        onBack: () => {
          vT(!1)
        },
        summary: fT.length > 0 && kT(1 === fT.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: fT.length,
          price: ul(rM(fT, "max"))
        }),
        list: CT.loading ? (0, AT.jsx)(gl, {}) : fT.length > 0 ? (0, AT.jsx)(tM.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: MM,
          observerUpdateDeps: [fT.length],
          children: fT.map((TT => (0, AT.jsx)(XM, {
            entry: TT,
            choice: AM(TT.item, tT[TT.key]),
            onChoose: kT => {
              hT({
                ...tT,
                [TT.key]: kT
              })
            }
          }, TT.key)))
        }) : IT ? (0, AT.jsx)(Yl, {
          entry: IT
        }) : (0, AT.jsx)(gl, {
          count: 3
        })
      })
    }

    function LM() {
      var TT;
      const {
        t: kT
      } = (0, OT.B)(), cT = vM(), lT = cM(null === (TT = cT.shopInfo[cT.categoryKey]) || void 0 === TT ? void 0 : TT.items, "myOrder");
      return 0 === lT.length ? (0, AT.jsx)("div", {
        className: "SmpScreen",
        children: (0, AT.jsx)(Ul, {
          title: kT("smpShop:noOrders"),
          children: kT("smpShop:noOrdersHint")
        })
      }) : (0, AT.jsx)("div", {
        className: "SmpScreen",
        children: (0, AT.jsx)("div", {
          className: "SmpList",
          children: lT.map((TT => {
            let {
              key: lT,
              item: MT,
              meta: KT
            } = TT;
            const OT = cT.isPending(lT) || !1 === MT.canBuy;
            return (0, AT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AT.jsx)(Ll, {
                item: KT.item,
                amount: KT.collectable
              }), (0, AT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AT.jsx)("b", {
                  children: (0, AT.jsx)(bl.b, {
                    text: MT.customTitle
                  })
                }), (0, AT.jsxs)("small", {
                  children: [(0, AT.jsx)(Rl, {
                    amount: KT.pricePerItem
                  }), " ", kT("smpShop:each"), KT.collectable > 0 && ` \xb7 ${kT("smpShop:readyCount",{count:KT.collectable})}`]
                }), (0, AT.jsx)(uM, {
                  done: KT.delivered,
                  of: KT.wanted
                })]
              }), KT.collectable > 0 ? (0, AT.jsx)(xT.m, {
                loading: OT,
                onClick: () => {
                  cT.act(lT)
                },
                children: kT("smpShop:collectCount", {
                  count: KT.collectable
                })
              }) : (0, AT.jsx)(xT.I, {
                loading: OT,
                onClick: () => {
                  cT.act(lT)
                },
                children: kT("smpShop:cancel")
              })]
            }, lT)
          }))
        })
      })
    }
    const RM = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      gM = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function UM(TT, kT) {
      let cT = !1;
      const lT = {};
      for (const MT in TT) kT(MT, TT[MT]) ? lT[MT] = TT[MT] : cT = !0;
      return cT ? lT : TT
    }

    function YM(TT) {
      var kT, cT, MT, fT;
      const {
        show: xT,
        shopInfo: IT,
        selectedCategoryKey: CT
      } = TT, {
        t: jT
      } = (0, OT.B)(), vT = null !== CT && void 0 !== CT ? CT : "", tT = kM(IT, vT), hT = null === (kT = IT[vT]) || void 0 === kT ? void 0 : kT.items, NT = null !== tT, [QT, ST] = (0, lT.useState)({}), [DT, aT] = (0, lT.useState)([]), [FT, rT] = (0, lT.useState)(!1), [PT, wT] = (0, lT.useState)(null), [, mT] = (0, lT.useState)(0), bT = (0, lT.useRef)(0), zT = (0, lT.useRef)({}), JT = (0, lT.useRef)({
        items: hT,
        pending: QT,
        shopInfo: IT,
        active: NT,
        canAfford: TT.canAfford,
        buy: TT.buy
      });
      JT.current = {
        items: hT,
        pending: QT,
        shopInfo: IT,
        active: NT,
        canAfford: TT.canAfford,
        buy: TT.buy
      };
      const oT = (0, lT.useCallback)((TT => {
        bT.current++;
        const kT = bT.current;
        aT((cT => [{
          id: kT,
          text: TT
        }, ...cT].slice(0, 8))), wT(kT)
      }), []);
      (0, lT.useEffect)((() => {
        if (null === PT) return;
        const TT = setTimeout((() => {
          wT(null)
        }), 3e3);
        return () => {
          clearTimeout(TT)
        }
      }), [PT]), (0, lT.useEffect)((() => {
        const kT = TT.message;
        if (!kT) return;
        const {
          shopInfo: cT,
          active: lT,
          items: MT
        } = JT.current, KT = null !== kT.categoryKey ? null !== kM(cT, kT.categoryKey) : lT;
        (KT || lT) && oT(kT.text), KT && ST((TT => UM(TT, (TT => {
          var kT, cT;
          return !RM.has(null === MT || void 0 === MT || null === (kT = MT[TT]) || void 0 === kT || null === (cT = kT.smp) || void 0 === cT ? void 0 : cT.kind)
        }))))
      }), [TT.message, oT]), (0, lT.useEffect)((() => {
        ST((TT => UM(TT, ((TT, kT) => CM(null === hT || void 0 === hT ? void 0 : hT[TT]) === kT.snapshot))))
      }), [IT, hT]);
      const HT = Object.keys(QT).length > 0;
      (0, lT.useEffect)((() => {
        if (!HT) return;
        const TT = setInterval((() => {
          mT((TT => TT + 1));
          const TT = Date.now(),
            {
              pending: kT,
              items: cT
            } = JT.current,
            lT = Object.keys(kT).filter((cT => TT - kT[cT].at >= 12e3));
          if (0 === lT.length) return;
          const MT = lT.some((TT => {
            var lT, MT;
            return "search" !== (null === cT || void 0 === cT || null === (lT = cT[TT]) || void 0 === lT || null === (MT = lT.smp) || void 0 === MT ? void 0 : MT.kind) || kT[TT].resend
          }));
          for (const KT of lT) zT.current[KT] = TT;
          ST((TT => UM(TT, (TT => !lT.includes(TT))))), MT && oT(jT("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(TT)
        }
      }), [HT]), (0, lT.useEffect)((() => {
        ST({})
      }), [vT]), (0, lT.useEffect)((() => {
        xT || rT(!1)
      }), [xT]);
      const eT = (0, lT.useCallback)((function(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: lT,
            pending: MT,
            canAfford: KT,
            buy: OT
          } = JT.current, yT = null === lT || void 0 === lT ? void 0 : lT[TT];
          if (!yT || TT in MT || !1 === yT.canBuy) return !1;
          if (!KT(yT, (0, rl.e)(yT, kT))) return !1;
          OT(TT, yT, kT);
          const fT = {
            snapshot: CM(yT),
            at: Date.now(),
            resend: cT
          };
          return JT.current.pending = {
            ...JT.current.pending,
            [TT]: fT
          }, ST((kT => ({
            ...kT,
            [TT]: fT
          }))), !0
        }), []),
        GT = (0, lT.useMemo)((() => ({
          shopInfo: IT,
          categoryKey: vT,
          canAfford: TT.canAfford,
          isPending: TT => TT in QT,
          gaveUpAt: TT => {
            var kT;
            return null !== (kT = zT.current[TT]) && void 0 !== kT ? kT : 0
          },
          act: eT,
          notify: oT
        })), [IT, vT, TT.canAfford, QT, eT, oT]),
        VT = Math.min(...Object.values(QT).map((TT => TT.at))),
        ET = HT && Date.now() - VT > 1500,
        ZT = DT.length > 1,
        uT = null !== (cT = null === (MT = IT[vT]) || void 0 === MT ? void 0 : MT.customTitle) && void 0 !== cT ? cT : vT,
        XT = null === (fT = IT[vT]) || void 0 === fT ? void 0 : fT.description;
      let dT = null;
      return "market" === tT ? dT = (0, AT.jsx)(HM, {}) : "sell" === tT ? dT = (0, AT.jsx)(VM, {}) : "collect" === tT ? dT = (0, AT.jsx)(ZM, {}) : "orders" === tT ? dT = (0, AT.jsx)(dM, {}) : "myOrders" === tT && (dT = (0, AT.jsx)(LM, {})), (0, AT.jsx)(jM.Provider, {
        value: GT,
        children: (0, AT.jsx)("div", {
          className: "SmpShopHost",
          hidden: !NT,
          children: (0, AT.jsxs)("div", {
            className: "SmpShop",
            children: [(0, AT.jsx)("header", {
              className: "SmpHeader",
              children: (0, AT.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, AT.jsxs)("h2", {
                  children: [tT && (0, AT.jsx)(yT.e, {
                    name: gM[tT]
                  }), jT(uT)]
                }), XT && (0, AT.jsx)("p", {
                  children: (0, AT.jsx)(bl.b, {
                    text: XT
                  })
                })]
              })
            }), (0, AT.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: xT && dT
            }), (0, AT.jsxs)("button", {
              type: "button",
              className: KT()("SmpStatus", {
                SmpStatusWaiting: HT,
                SmpStatusFresh: !HT && null !== PT,
                SmpStatusHasHistory: ZT
              }),
              "aria-live": "polite",
              "aria-expanded": ZT ? FT : void 0,
              onClick: () => {
                ZT && rT((TT => !TT))
              },
              children: [HT ? (0, AT.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, AT.jsx)(Wl, {}), jT(ET ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : DT[0] ? (0, AT.jsx)("span", {
                className: "SmpStatusText",
                children: (0, AT.jsx)(bl.b, {
                  text: DT[0].text
                })
              }, DT[0].id) : (0, AT.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: jT("smpShop:ready")
              }), ZT && (0, AT.jsx)("small", {
                children: jT("smpShop:recentMessages", {
                  count: DT.length
                })
              })]
            }), FT && ZT && (0, AT.jsx)("div", {
              className: "SmpStatusHistory",
              children: DT.map((TT => (0, AT.jsx)("div", {
                children: (0, AT.jsx)(bl.b, {
                  text: TT.text
                })
              }, TT.id)))
            })]
          })
        })
      })
    }
    class BM {
      constructor(TT) {
        this.info = TT
      }
      static fromShopInfo(TT) {
        const kT = {};
        for (const cT in TT) {
          const lT = !0 === TT[cT].redDot && !0 !== TT[cT].forceRemoveRedDot;
          kT[cT] = {
            redDot: lT,
            items: {}
          };
          for (const MT in TT[cT].items) {
            const lT = TT[cT].items[MT],
              KT = !0 === lT.redDot && !0 !== lT.forceRemoveRedDot;
            kT[cT].items[MT] = {
              redDot: KT
            }
          }
        }
        return new BM(kT)
      }
      anyCategoryHasRedDots() {
        for (const TT in this.info)
          if (this.categoryHasRedDot(TT)) return !0;
        return !1
      }
      doesCategoryExist(TT) {
        return !(0, gk.R)(this.info[TT])
      }
      categoryHasRedDot(TT) {
        return !0 === this.info[TT].redDot
      }
      updateCategoryRedDot(TT, kT) {
        this.info[TT].redDot = kT
      }
      doesItemExist(TT, kT) {
        return this.doesCategoryExist(TT) && !(0, gk.R)(this.info[TT].items[kT])
      }
      itemHasRedDot(TT, kT) {
        return !0 === this.info[TT].items[kT].redDot
      }
      updateItemRedDot(TT, kT, cT) {
        this.info[TT].items[kT].redDot = cT
      }
      shallowCopy() {
        return new BM(this.info)
      }
    }

    function WM(TT, kT) {
      return `${TT}\x1f${kT}`
    }

    function nM(TT, kT) {
      return !(0, gk.R)(kT) && !(0, gk.R)(TT) && kT in TT
    }
    const pM = (0, lT.memo)((function(TT) {
      var kT, cT;
      let {
        show: MT
      } = TT;
      const OT = (0, ic.e)("players", cK),
        yT = (0, ic.e)("players", lK),
        IT = (0, Gl.b)(),
        [jT, vT] = (0, lT.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: BM.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        hT = (0, lT.useRef)(""),
        NT = (0, lT.useRef)(null),
        ST = (0, lT.useRef)(null),
        DT = (0, lT.useRef)(0),
        aT = (0, lT.useRef)(void 0),
        FT = (0, lT.useRef)(null),
        rT = (0, lT.useRef)(jT),
        wT = jT.redDotInfo.anyCategoryHasRedDots(),
        [mT, zT] = (0, lT.useState)(null),
        JT = (0, lT.useRef)(!1);
      let oT = !1,
        HT = 0,
        eT = 0;
      if (jT.currencyAmounts) {
        for (const TT in jT.currencyAmounts) {
          var GT;
          const kT = jT.currencyAmounts[TT];
          kT.hidden || (HT++, (null === (GT = kT.subtext) || void 0 === GT ? void 0 : GT.length) > 0 && eT++)
        }
        oT = HT + eT > 4
      }(0, lT.useEffect)((() => {
        Uk.k.nt("showShopIconRedDot", wT, !0)
      }), [wT]), (0, lT.useEffect)((() => {
        QT.gameBridge.send("setShopOpen", MT), MT || (clearTimeout(aT.current), vT((TT => TT.awaitingPurchase ? {
          ...TT,
          awaitingPurchase: !1
        } : TT)))
      }), [MT]), (0, lT.useEffect)((() => () => {
        QT.gameBridge.send("setShopOpen", !1), clearTimeout(aT.current)
      }), []), (0, lT.useEffect)((() => {
        rT.current = jT
      }), [jT]), (0, lT.useEffect)((() => {
        if (null === mT) return;
        return (0, Hl.e)("pointerdown", (TT => {
          const kT = TT.target;
          null !== kT && void 0 !== kT && kT.closest(".ShopItem") || zT(null)
        }))
      }), [mT]);
      const VT = TT => {
          vT((kT => ({
            ...kT,
            ...TT
          })))
        },
        ET = TT => {
          var kT;
          clearTimeout(null === (kT = jT.onBoughtInfo) || void 0 === kT ? void 0 : kT.timeout);
          const cT = setTimeout((() => {
            VT({
              onBoughtInfo: null
            })
          }), 3e3);
          hT.current = TT, VT({
            onBoughtInfo: {
              text: TT,
              timeout: cT,
              categoryKey: NT.current
            }
          })
        },
        ZT = TT => {
          const {
            shopInfo: kT,
            userInputsPerItem: cT,
            redDotInfo: lT,
            autoSelectCategory: KT
          } = function(TT, kT, cT, lT, MT, KT) {
            if ((0, gk.R)(TT) || 0 === Object.keys(TT).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: BM.fromShopInfo({}),
              autoSelectCategory: null
            };
            const OT = bT.p[bT.u].adConfig.showRewardedAds,
              yT = {};
            let fT = null;
            for (const hT in TT) {
              const kT = TT[hT],
                cT = {};
              let lT = !1;
              for (const TT in kT.items) {
                const MT = kT.items[TT];
                (0, rl.p)(MT, OT) && (cT[TT] = MT, lT = !0)
              }
              lT && (yT[hT] = {
                ...kT,
                items: cT
              }, !0 === kT.autoSelectCategory && (fT = hT))
            }
            const xT = {},
              IT = (TT, kT, lT, OT) => {
                var yT, fT;
                const IT = WM(TT, kT),
                  AT = null !== (yT = cT[IT]) && void 0 !== yT ? yT : cT[kT];
                if (null !== (fT = OT.userInput) && void 0 !== fT && fT.type) switch (OT.userInput.type) {
                  case "dropdown": {
                    var CT;
                    const TT = !AT || !OT.userInput.dropdownOptions.some((TT => (0, rl.h)(TT) === AT)),
                      kT = OT.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === lT || void 0 === lT || null === (CT = lT.userInput) || void 0 === CT ? void 0 : CT.type) || JSON.stringify(lT.userInput.dropdownOptions) !== JSON.stringify(OT.userInput.dropdownOptions)),
                      cT = OT.userInput,
                      MT = !(0, gk.R)(cT.initialValue) && cT.dropdownOptions.some((TT => (0, rl.h)(TT) === cT.initialValue));
                    var jT;
                    return void(TT || kT ? MT ? xT[IT] = null !== (jT = OT.userInput.initialValue) && void 0 !== jT ? jT : null : OT.userInput.dropdownOptions.length > 0 ? xT[IT] = (0, rl.h)(OT.userInput.dropdownOptions[0]) : xT[IT] = null : xT[IT] = AT)
                  }
                  case "text":
                  case "number":
                    var vT, tT, hT;
                    return void((null === lT || void 0 === lT ? void 0 : lT.userInput) !== OT.userInput ? xT[IT] = null !== (vT = null !== (tT = OT.userInput.initialValue) && void 0 !== tT ? tT : AT) && void 0 !== vT ? vT : "" : xT[IT] = null !== (hT = null !== AT && void 0 !== AT ? AT : OT.userInput.initialValue) && void 0 !== hT ? hT : "");
                  case "color":
                    var NT, QT, ST;
                    return void((null === lT || void 0 === lT ? void 0 : lT.userInput) !== OT.userInput ? xT[IT] = null !== (NT = null !== (QT = OT.userInput.initialValue) && void 0 !== QT ? QT : AT) && void 0 !== NT ? NT : "#000000" : xT[IT] = null !== (ST = null !== AT && void 0 !== AT ? AT : OT.userInput.initialValue) && void 0 !== ST ? ST : "#000000");
                  case "player": {
                    const TT = (0, rl.l)(MT, KT, OT.userInput);
                    return void(AT && TT.includes(AT) ? xT[IT] = AT : xT[IT] = TT.length > 0 ? TT[0] : null)
                  }
                }
              };
            for (const hT in yT)
              for (const TT in yT[hT].items) {
                var AT;
                const cT = yT[hT].items[TT];
                IT(hT, TT, null === (AT = kT[hT]) || void 0 === AT ? void 0 : AT.items[TT], cT)
              }
            const CT = BM.fromShopInfo(yT);
            for (const hT in yT) {
              var jT;
              if (lT.doesCategoryExist(hT)) {
                (null === (jT = kT[hT]) || void 0 === jT ? void 0 : jT.redDot) === yT[hT].redDot && CT.updateCategoryRedDot(hT, lT.categoryHasRedDot(hT));
                for (const TT in yT[hT].items) {
                  var vT, tT;
                  lT.doesItemExist(hT, TT) && (null === (vT = kT[hT]) || void 0 === vT || null === (tT = vT.items[TT]) || void 0 === tT ? void 0 : tT.redDot) === yT[hT].items[TT].redDot && CT.updateItemRedDot(hT, TT, lT.itemHasRedDot(hT, TT))
                }
              }
            }
            return {
              shopInfo: yT,
              userInputsPerItem: xT,
              redDotInfo: CT,
              autoSelectCategory: fT
            }
          }(TT, jT.shopInfo, jT.userInputsPerItem, jT.redDotInfo, OT, yT), fT = {
            shopInfo: kT,
            userInputsPerItem: cT,
            redDotInfo: lT
          };
          if (null === KT || MT)
            if (kT[jT.selectedCategoryKey]) fT.selectedCategoryKey = jT.selectedCategoryKey;
            else {
              const TT = El(kT);
              fT.selectedCategoryKey = TT.length > 0 ? TT[0] : null
            }
          else fT.selectedCategoryKey = KT;
          return 0 === Object.keys(kT).length && MT && PT.e.set({
            openEverythingMenuName: null
          }), fT
        },
        XT = (TT, kT, cT) => {
          const lT = jT.selectedCategoryKey,
            MT = WM(lT, TT),
            KT = null !== cT && void 0 !== cT ? cT : jT.userInputsPerItem[MT],
            OT = {
              categoryKey: lT,
              itemKey: TT,
              userInput: KT
            };
          if (NT.current = lT, kT.isRewardedAd) {
            if (Date.now() - DT.current < 5e3) return;
            (0, Kk._)((() => {
              var cT, lT, KT;
              console.log("bought rewarded ad");
              const yT = OT.categoryKey ? null === (cT = rT.current.shopInfo[OT.categoryKey]) || void 0 === cT ? void 0 : cT.items[TT] : null;
              if (!yT || !yT.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (lT = kT.userInput) || void 0 === lT ? void 0 : lT.type) === (null === yT || void 0 === yT || null === (KT = yT.userInput) || void 0 === KT ? void 0 : KT.type) ? (OT.userInput = rT.current.userInputsPerItem[MT], QT.gameBridge.send("buyShopItem", OT), kT.onBoughtMessage && ET(kT.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), DT.current = Date.now()
          } else {
            QT.gameBridge.send("buyShopItem", OT), VT({
              awaitingPurchase: !0
            }), clearTimeout(aT.current), aT.current = setTimeout((() => {
              FT.current = null, VT({
                awaitingPurchase: !1
              })
            }), 1e3);
            const TT = (0, rl.e)(kT, KT);
            if (FT.current = null, !isNaN(TT) && nM(jT.currencyAmounts, kT.currency)) {
              0 !== TT && (FT.current = {
                currency: kT.currency,
                amountBefore: jT.currencyAmounts[kT.currency].amount
              });
              const cT = {
                ...jT.currencyAmounts
              };
              cT[kT.currency].amount -= TT, VT({
                currencyAmounts: cT
              })
            }
            kT.onBoughtMessage && ET(kT.onBoughtMessage)
          }
        },
        dT = (TT, kT) => {
          if (null === kT || !TT.shopInfo[kT]) return TT;
          let cT = TT.redDotInfo;
          return cT.categoryHasRedDot(kT) && (cT.updateCategoryRedDot(kT, !1), cT = cT.shallowCopy()), {
            ...TT,
            selectedCategoryKey: kT,
            redDotInfo: cT
          }
        },
        LT = TT => {
          vT((kT => dT(kT, TT)))
        };
      (0, bk.g)(el.n, (() => {
        vT((TT => {
          const kT = (0, el.r)(El(TT.shopInfo), TT.selectedCategoryKey, (kT => (0, el.j)(TT.shopInfo[kT].items)));
          return kT === TT.selectedCategoryKey ? TT : dT(TT, kT)
        }))
      })), (0, bk.g)("showShopFromServer", (TT => {
        let {
          toggle: kT,
          Ok: cT
        } = TT;
        cT && LT(cT), 0 === Object.keys(jT.shopInfo).length || kT && MT ? PT.e.set({
          openEverythingMenuName: null
        }) : PT.e.set({
          openEverythingMenuName: xk.o.SHOP
        })
      })), (0, bk.g)("closeShopOnDamaged", (() => {
        MT && PT.e.set({
          openEverythingMenuName: null
        })
      })), (0, bk.g)("overShopInfo", (TT => {
        ET(TT)
      })), (0, tT.e)("currencyAmounts", (TT => {
        var kT;
        const cT = FT.current;
        cT && (null === TT || void 0 === TT || null === (kT = TT[cT.currency]) || void 0 === kT ? void 0 : kT.amount) === cT.amountBefore ? VT({
          currencyAmounts: TT
        }) : (FT.current = null, VT({
          currencyAmounts: TT,
          awaitingPurchase: !1
        }))
      })), (0, tT.e)("shopInfo", (TT => {
        VT({
          ...ZT(TT),
          awaitingPurchase: !1
        })
      }));
      const RT = (0, lT.useRef)({
        playerIds: OT,
        localPlayerId: yT
      });
      (0, lT.useEffect)((() => {
        RT.current.playerIds === OT && RT.current.localPlayerId === yT || (RT.current = {
          playerIds: OT,
          localPlayerId: yT
        }, vT((TT => {
          const kT = ZT(TT.shopInfo);
          return {
            ...TT,
            ...kT
          }
        })))
      }), [OT, yT]);
      const gT = jT.selectedCategoryKey,
        UT = (TT, kT) => {
          var cT, lT;
          return (isNaN(kT) || (0, gk.R)(TT.currency) || nM(jT.currencyAmounts, TT.currency) && kT <= jT.currencyAmounts[TT.currency].amount) && (null === (cT = TT.canBuy) || void 0 === cT || cT) && !(null !== (lT = TT.hidden) && void 0 !== lT && lT)
        },
        YT = (TT, kT) => {
          var cT, lT, MT;
          const OT = WM(gT, TT),
            yT = jT.shopInfo[gT].items[TT],
            IT = jT.userInputsPerItem[OT],
            CT = (0, rl.e)(yT, IT),
            vT = UT(yT, CT),
            tT = yT.enchant,
            hT = tT ? (0, uT.hb)(null !== (cT = yT.customTitle) && void 0 !== cT ? cT : TT, {
              colour: uT.fb[tT.tier]
            }) : null !== (lT = yT.customTitle) && void 0 !== lT ? lT : TT,
            NT = kT => {
              const cT = null !== kT && void 0 !== kT ? kT : IT,
                lT = void 0 !== kT ? (0, rl.e)(yT, kT) : CT;
              UT(yT, lT) && null !== cT && XT(TT, yT, kT);
              let MT = jT.redDotInfo;
              MT.itemHasRedDot(gT, TT) && (MT.updateItemRedDot(gT, TT, !1), MT = MT.shallowCopy()), VT({
                redDotInfo: MT
              })
            };
          return (0, AT.jsxs)("div", {
            className: KT()("ShopItem", {
              ShopItemNoInput: !yT.userInput,
              ShopItemNoInputCanBuy: !yT.userInput && vT,
              ShopItemNoInputSelected: yT.isSelected,
              ShopItemEnchant: !!tT
            }),
            "data-pad-focusable": !yT.userInput || void 0,
            "data-pad-unavailable": !yT.userInput && !vT || void 0,
            "data-pad-repeat": null !== (MT = (0, el.c)(yT)) && void 0 !== MT ? MT : void 0,
            "data-pad-repeat-wait": jT.awaitingPurchase || void 0,
            onClick: () => {
              if (tT && JT.current) {
                if (mT !== OT) return void zT(OT);
                zT(null)
              }
              yT.userInput || NT()
            },
            onPointerDown: TT => {
              tT && (JT.current = (0, wl.s)(TT))
            },
            onPointerEnter: TT => {
              tT && !(0, wl.s)(TT) && zT(OT)
            },
            onPointerLeave: TT => {
              tT && !(0, wl.s)(TT) && zT((TT => TT === OT ? null : TT))
            },
            style: {
              zIndex: Object.keys(jT.shopInfo[gT].items).length - kT
            },
            children: [jT.redDotInfo.itemHasRedDot(gT, TT) && (0, AT.jsx)(fT.b, {
              top: "-6px",
              right: "-6px"
            }), yT.badge && (0, AT.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, AT.jsx)("div", {
                className: KT()("ShopBadgeMain", yT.badge.type),
                children: (0, AT.jsx)(bl.b, {
                  text: yT.badge.text
                })
              })
            }), (0, AT.jsx)("div", {
              className: "ShopItemLeft",
              children: yT.image && (0, AT.jsx)(iM, {
                item: yT,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, AT.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, AT.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, AT.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, AT.jsx)(bl.b, {
                    text: hT
                  })
                }), (0, AT.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, AT.jsx)(bl.b, {
                    text: yT.description
                  })
                })]
              }), yT.userInput && (0, AT.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: TT => {
                  TT.stopPropagation()
                },
                children: [(0, AT.jsx)(TK, {
                  item: yT,
                  currInput: IT,
                  updateInput: kT => {
                    ((TT, kT, cT) => {
                      const lT = WM(TT, kT),
                        MT = {
                          ...jT.userInputsPerItem
                        };
                      MT[lT] = cT, VT({
                        userInputsPerItem: MT
                      })
                    })(gT, TT, kT)
                  },
                  onSubmit: TT => {
                    NT(TT)
                  }
                }), ("dropdown" !== yT.userInput.type || !yT.userInput.autoSubmit) && (0, AT.jsx)(xT.e, {
                  className: "ItemCostButton",
                  disabled: !vT && null !== IT,
                  onClick: () => {
                    NT()
                  },
                  children: (0, AT.jsx)(sM, {
                    item: yT,
                    cost: CT,
                    currencyAmounts: jT.currencyAmounts
                  })
                })]
              })]
            }), !yT.userInput && (0, AT.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, AT.jsx)(sM, {
                item: yT,
                cost: CT,
                currencyAmounts: jT.currencyAmounts
              })
            }), tT && mT === OT && (0, AT.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, AT.jsx)(bl.b, {
                text: hT
              }), (0, AT.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, AT.jsx)(bl.b, {
                  text: (0, Pl.c)("", tT.enchantments, tT.enchantmentData)
                })
              })]
            })]
          }, OT)
        },
        BT = function(TT) {
          for (const kT in TT)
            if (TT[kT].smp) return !0;
          return !1
        }(jT.shopInfo),
        WT = kM(jT.shopInfo, gT);
      return (0, AT.jsx)(Dl.e, {
        className: "Menu ShopBody",
        show: MT,
        children: 0 !== Object.keys(jT.shopInfo).length && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, AT.jsx)(CT, {
              items: El(jT.shopInfo).map((TT => {
                var kT;
                return {
                  id: TT,
                  title: null !== (kT = jT.shopInfo[TT].customTitle) && void 0 !== kT ? kT : TT,
                  redDot: jT.redDotInfo.categoryHasRedDot(TT)
                }
              })),
              link: IT ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Vl.g)({
                    page: (0, Vl.c)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: gT,
              onClick: LT,
              padStartsOnTab: (0, el.f)(gT)
            }), (0, AT.jsx)("div", {
              className: "MenuSideBarFooter",
              children: jT.currencyAmounts && Object.keys(jT.currencyAmounts).map((TT => {
                var kT;
                const cT = jT.currencyAmounts[TT];
                return cT.hidden ? null : (0, AT.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (oT ? "SmallText" : ""),
                  children: [(0, AT.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, AT.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: cT.iconColour
                      },
                      children: (0, AT.jsx)(MK, {
                        iconName: cT.icon
                      })
                    }), "\xa0", (0, Fl.c)(cT.amount, 6)]
                  }), (null === (kT = cT.subtext) || void 0 === kT ? void 0 : kT.length) > 0 && (0, AT.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, AT.jsx)(bl.b, {
                      text: cT.subtext
                    })
                  })]
                }, TT)
              }))
            })]
          }), (0, AT.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [BT && (0, AT.jsx)(YM, {
              show: MT,
              shopInfo: jT.shopInfo,
              selectedCategoryKey: gT,
              buy: (TT, kT, cT) => {
                XT(TT, kT, cT)
              },
              canAfford: UT,
              message: jT.onBoughtInfo
            }), null === WT && (0, AT.jsxs)(AT.Fragment, {
              children: [(0, AT.jsx)("div", {
                className: KT()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== jT.onBoughtInfo
                }),
                children: (0, AT.jsx)(bl.b, {
                  text: hT.current
                })
              }), (0, AT.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, AT.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (kT = jT.shopInfo[gT]) || void 0 === kT ? void 0 : kT.description) && (0, AT.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, AT.jsx)(bl.b, {
                      text: jT.shopInfo[gT].description
                    })
                  }), MT && (0, AT.jsx)("div", {
                    className: "ShopItems",
                    ref: ST,
                    "data-pad-initial-area": !0,
                    children: El(null === (cT = jT.shopInfo[gT]) || void 0 === cT ? void 0 : cT.items).map(((TT, kT) => YT(TT, kT)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function iM(TT) {
      let {
        item: kT,
        minWidth: cT,
        minHeight: lT
      } = TT;
      const {
        image: MT,
        schematicId: KT,
        imageColour: OT
      } = kT;
      if (KT) return (0, AT.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${cT}rem`,
          height: `${lT}rem`
        },
        children: (0, AT.jsx)(zl.e, {
          game: {
            schematicId: KT
          }
        })
      });
      var fT, xT;
      if ((0, ml.e)(MT)) return (0, AT.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${cT}rem`,
          height: "0",
          minHeight: `${lT}rem`
        },
        children: (0, AT.jsx)(ml.d, {
          itemName: MT,
          amount: null !== (fT = kT.amount) && void 0 !== fT ? fT : 0,
          amountFontSize: lT / 4 + "rem",
          enchantmentTier: null === (xT = kT.enchant) || void 0 === xT ? void 0 : xT.tier
        })
      });
      const IT = MT.slice(-4);
      return ".jpg" === IT || ".png" === IT ? (0, AT.jsx)(qM, {
        image: MT,
        minWidth: cT
      }) : (0, AT.jsx)(yT.e, {
        name: MT,
        className: "SelectedItemImage",
        style: {
          color: OT
        }
      })
    }

    function qM(TT) {
      let {
        image: kT,
        minWidth: cT
      } = TT;
      const {
        gameNameWithVariation: lT
      } = (0, ic.h)("connectedGame"), MT = kT.endsWith(".jpg");
      return (0, AT.jsx)("img", {
        className: KT()({
          ShopPixelImage: !MT
        }),
        style: {
          width: `${MT?1.6*cT:cT}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,uT.Lb)(lT)}/${kT}`,
        alt: kT,
        draggable: !1
      })
    }

    function sM(TT) {
      let {
        item: kT,
        cost: cT,
        currencyAmounts: lT
      } = TT;
      const MT = !isNaN(cT) && 0 !== cT && nM(lT, kT.currency);
      let KT = null;
      return kT.buyButtonText ? KT = kT.buyButtonText : MT ? (KT = cT, kT.sell && (KT = -1 * cT), KT = KT.toString()) : 0 === cT ? KT = "Free" : kT.isRewardedAd && (KT = "Watch ad"), (0, gk.R)(KT) || " " === KT ? null : (0, AT.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [MT && (0, AT.jsx)("div", {
          style: {
            color: lT[kT.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, AT.jsx)(MK, {
            iconName: lT[kT.currency].icon
          })
        }), (0, AT.jsx)("div", {
          className: "BuyItemCost",
          children: (0, AT.jsx)(bl.b, {
            text: KT
          })
        })]
      })
    }

    function TK(TT) {
      let {
        item: kT,
        currInput: cT,
        updateInput: MT,
        onSubmit: KT
      } = TT;
      const {
        t: yT
      } = (0, OT.B)(), fT = (0, lT.useRef)(null);
      if ((0, lT.useEffect)((() => {
          const TT = fT.current;
          TT && TT.value !== cT && document.activeElement !== TT && (TT.value = null !== cT && void 0 !== cT ? cT : "")
        }), [cT]), !kT.userInput) return null;
      let xT = kT.userInput;
      if (NT.featureFlags.sanitizeShopInput && "text" === kT.userInput.type && (xT = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === xT.type || "number" === xT.type) {
        var IT, CT;
        console.assert(void 0 !== cT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(kT)}`);
        const TT = "text" === xT.type && xT.wordCharsOnly;
        return (0, AT.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, AT.jsx)(aT.b, {
            className: "ShopItemUserInputText",
            placeholderText: yT(xT.placeholderText),
            defaultValue: cT,
            domRef: fT,
            onValueChange: (kT, cT) => {
              !0 === TT && (kT = (0, ol.ob)(kT)), fT.current.value = kT, MT(kT)
            },
            onEnter: KT,
            type: xT.type
          }, (null !== (IT = xT.initialValue) && void 0 !== IT ? IT : "") + (null !== (CT = xT.placeholderText) && void 0 !== CT ? CT : ""))
        })
      }
      if ("dropdown" === xT.type) {
        console.assert(void 0 !== cT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(kT)}`);
        const TT = xT.autoSubmit;
        return (0, AT.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, AT.jsx)(ak.d, {
            options: xT.dropdownOptions.map((TT => (0, rl.h)(TT))),
            value: cT,
            onChange: kT => {
              let {
                value: cT
              } = kT;
              MT(cT), TT && KT(cT)
            }
          })
        })
      }
      return "player" === xT.type ? (0, AT.jsx)(kK, {
        userInput: xT,
        currInput: cT,
        updateInput: MT
      }) : "color" === xT.type ? (0, AT.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, AT.jsx)("input", {
          type: "color",
          value: cT,
          onChange: TT => {
            MT(TT.target.value)
          }
        })
      }) : null
    }

    function kK(TT) {
      let {
        userInput: kT,
        currInput: cT,
        updateInput: lT
      } = TT;
      const MT = (0, ic.h)("players"),
        KT = (0, ic.h)("hiddenPlayerNames"),
        OT = (0, rl.l)(MT.ids, MT.localId, kT);
      return (0, AT.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, AT.jsx)(ak.d, {
          options: OT.map((TT => {
            const {
              name: kT
            } = MT.byId[TT];
            return {
              value: TT,
              label: null === kT ? "" : (0, Jl.f)(kT, KT)
            }
          })),
          value: cT,
          onChange: TT => {
            let {
              value: kT
            } = TT;
            lT(kT)
          }
        })
      })
    }

    function cK(TT) {
      let {
        ids: kT
      } = TT;
      return kT
    }

    function lK(TT) {
      let {
        localId: kT
      } = TT;
      return kT
    }

    function MK(TT) {
      let {
        iconName: kT
      } = TT;
      return QT.gameBridge.lookup("isItemName", kT) ? (0, AT.jsx)(ml.d, {
        itemName: kT,
        amount: 1
      }) : (0, AT.jsx)(yT.e, {
        name: kT,
        className: "2x"
      })
    }
    var KK = cT(1654);
    const OK = (0, cT(1420).h)((TT => TT.PadLobbyShortcuts)),
      yK = (0, lT.lazy)((() => Promise.resolve().then((() => cT(4649))).then((TT => ({
        default: TT.Lobbyleaderboard
      }))))),
      fK = (0, lT.lazy)((() => cT.e(214).then((() => cT(40697))).then((TT => ({
        default: TT.LobbyManageView
      })))));

    function xK(TT) {
      let {
        show: kT
      } = TT;
      return kT ? (0, AT.jsx)(IK, {}) : null
    }

    function IK() {
      const TT = (0, Gl.b)();
      return (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsx)(OK, {}), (0, AT.jsxs)(lT.Suspense, {
          fallback: (0, AT.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, AT.jsx)(FT.d, {})
          }),
          children: [TT && (0, AT.jsx)(fK, {
            leaderboard: (0, AT.jsx)(yK, {})
          }), !TT && (0, AT.jsx)(yK, {})]
        })]
      })
    }
    var AK = cT(1575),
      CK = cT(2947),
      jK = cT(1741),
      vK = cT(2996),
      tK = cT(2696),
      hK = cT(1514),
      NK = cT(1474),
      QK = cT(2931),
      SK = cT(2944),
      DK = cT(2367);
    const aK = "storeRecentGiftRecipients",
      FK = new Map;

    function rK() {
      try {
        const TT = Bk.e.getItem(aK);
        return Array.isArray(TT) ? TT.filter((TT => "string" === typeof(null === TT || void 0 === TT ? void 0 : TT.name) && TT.name.length > 0)).map((TT => ({
          name: TT.name,
          cosmetics: TT.cosmetics && "object" === typeof TT.cosmetics ? TT.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function PK(TT) {
      var kT;
      const [cT, MT] = (0, lT.useState)(""), [KT, OT] = (0, lT.useState)("search"), [yT, fT] = (0, lT.useState)(null), [xT, IT] = (0, lT.useState)(null), AT = (0, lT.useRef)(null), CT = (0, lT.useRef)(null);
      (0, lT.useEffect)((() => () => {
        AT.current && clearTimeout(AT.current)
      }), []);
      const jT = null !== (kT = null === yT || void 0 === yT ? void 0 : yT.name) && void 0 !== kT ? kT : null;

      function vT() {
        AT.current && (clearTimeout(AT.current), AT.current = null)
      }(0, lT.useEffect)((() => {
        if (null === jT || TT === zT.NULL_USER_CONTEXT) return;
        const kT = jT.toLowerCase();
        if (kT === TT.getPlayerName().toLowerCase()) return void IT({
          name: jT,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const cT = FK.get(kT);
        if (cT) return void IT({
          name: jT,
          result: cT
        });
        let lT = !1;
        return async function(TT, kT) {
          try {
            const cT = await (0, zT.postJsonWithMetricsCookiesAndJsonResponse)(`${JT.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: kT
            }, {
              retries: 1
            }, TT.getMetricsCookies());
            if ("boolean" !== typeof(null === cT || void 0 === cT ? void 0 : cT.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(cT)}`);
            return cT
          } catch (cT) {
            return console.error("Failed to look up gift recipient:", cT), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(TT, jT).catch((TT => (console.error("Gift recipient lookup failed:", TT), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((TT => {
          !0 !== TT.giftRecipientFound && "store:giftRecipientLookupFailed" === TT.giftRecipientError || FK.set(kT, TT), lT || IT({
            name: jT,
            result: TT
          })
        })), () => {
          lT = !0
        }
      }), [jT, TT]);
      const tT = (0, lT.useMemo)((() => {
        const TT = cT.trim();
        if (!TT) return {
          status: "none"
        };
        if (!yT || yT.name !== TT || (null === xT || void 0 === xT ? void 0 : xT.name) !== yT.name) return {
          status: "pending",
          name: TT
        };
        const kT = xT.result;
        return !1 === kT.giftRecipientFound ? {
          status: "error",
          name: yT.name,
          error: kT.giftRecipientError
        } : {
          status: "found",
          name: kT.giftRecipientName,
          ownedPacks: kT.giftRecipientOwnedPacks,
          hasSuperRank: kT.giftRecipientHasSuperRank,
          isSubscriber: kT.giftRecipientIsSubscriber
        }
      }), [cT, yT, xT]);
      (0, lT.useEffect)((() => {
        "found" === tT.status && "typed" === (null === yT || void 0 === yT ? void 0 : yT.source) && CT.current !== tT.name && (CT.current = tT.name, (0, qT.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [tT, yT]);
      const hT = (null === xT || void 0 === xT ? void 0 : xT.name) === (null === yT || void 0 === yT ? void 0 : yT.name) ? null === xT || void 0 === xT ? void 0 : xT.result : null,
        NT = !0 === (null === hT || void 0 === hT ? void 0 : hT.giftRecipientFound) ? hT.giftRecipientCosmetics : null;
      return {
        query: cT,
        via: KT,
        recipient: tT,
        recipientCosmetics: NT,
        type: function(TT) {
          MT(TT), OT("search"), vT();
          const kT = TT.trim();
          kT ? AT.current = setTimeout((() => {
            fT({
              name: kT,
              source: "typed"
            })
          }), 400) : fT(null)
        },
        choose: function(TT, kT) {
          vT(), MT(TT), OT("typed" === kT ? "search" : "prefilled" === kT ? "prefilled" : "suggestion"), fT({
            name: TT,
            source: kT
          }), "typed" !== kT && "prefilled" !== kT && (0, qT.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: kT
          })
        },
        clear: function() {
          vT(), MT(""), OT("search"), fT(null)
        },
        recordGift: function(TT, kT) {
          ! function(TT) {
            FK.delete(TT.toLowerCase())
          }(TT), IT((cT => {
            if (!cT || cT.name.toLowerCase() !== TT.toLowerCase() || !0 !== cT.result.giftRecipientFound || "superRank" === kT) return cT;
            const lT = cT.result.giftRecipientOwnedPacks;
            return {
              ...cT,
              result: {
                ...cT.result,
                giftRecipientOwnedPacks: lT.includes(kT) ? lT : [...lT, kT]
              }
            }
          }))
        }
      }
    }
    var wK = cT(2362),
      mK = cT(4652),
      bK = cT(275),
      zK = cT(3045);
    const JK = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var oK = cT(2308),
      HK = cT(602),
      eK = cT(2408),
      GK = cT(2600);

    function VK(TT) {
      let {
        cosmetics: kT
      } = TT;
      return (0, AT.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, AT.jsx)(eK.e, {
          cosmetics: kT
        })
      })
    }

    function EK(TT, kT) {
      var cT, lT;
      const MT = null !== (cT = TT.friend) && void 0 !== cT ? cT : {
        isError: !1,
        name: TT.name,
        ranks: [],
        cosmetics: null !== (lT = TT.cosmetics) && void 0 !== lT ? lT : {},
        nameColour: HK.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return kT ? {
        ...MT,
        cosmetics: kT
      } : MT
    }

    function ZK(TT) {
      let {
        pending: kT
      } = TT;
      return (0, AT.jsx)("span", {
        className: "StoreRecipientLoader",
        children: kT && (0, AT.jsx)(FT.d, {})
      })
    }

    function uK(TT) {
      var kT;
      let {
        selfName: cT,
        giftRecipient: MT,
        suggestionsVersion: fT,
        pulseSignal: IT,
        disabled: CT
      } = TT;
      const {
        t: jT
      } = (0, OT.B)(), vT = (0, RT.n)(), tT = (0, lT.useRef)(null), hT = (0, lT.useRef)(null), {
        query: QT,
        via: ST,
        recipient: DT,
        recipientCosmetics: FT
      } = MT, rT = (0, DK.p)(QT), PT = (0, lT.useMemo)((() => {
        const TT = NT.featureFlags.useSocialFeatures ? vT.friends.filter((TT => !TT.isError)) : [];
        return (0, DK.l)({
          onlineFriends: (0, RT.f)(TT),
          recentRecipients: rK(),
          friends: TT,
          selfName: cT,
          max: 8
        })
      }), [vT.friends, cT, fT]), wT = QT.trim().toLowerCase(), mT = "search" !== ST && wT ? PT.find((TT => TT.name.toLowerCase() === wT)) : void 0, bT = mT && "prefilled" === ST ? [mT, ...PT.filter((TT => TT !== mT))] : PT, zT = "" !== wT && !mT, JT = zT ? QT : "", oT = bT.length > 0;
      (0, lT.useEffect)((() => {
        tT.current && tT.current.value !== JT && (tT.current.value = JT)
      }), [JT]), (0, lT.useEffect)((() => {
        tT.current && (tT.current.disabled = CT)
      }), [CT, IT]);
      const HT = (0, lT.useRef)(0);

      function GT() {
        "self" !== rT && (0, qT.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), MT.clear()
      }

      function VT(TT) {
        var kT, cT;
        if (CT) return;
        if (" " === TT.key || "Enter" === TT.key) return TT.preventDefault(), void TT.currentTarget.click();
        const lT = Array.from(null !== (kT = null === (cT = hT.current) || void 0 === cT ? void 0 : cT.querySelectorAll("[role=radio]")) && void 0 !== kT ? kT : []),
          MT = lT.indexOf(TT.currentTarget);
        let KT;
        "ArrowRight" === TT.key || "ArrowDown" === TT.key ? KT = lT[(MT + 1) % lT.length] : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? KT = lT[(MT - 1 + lT.length) % lT.length] : "Home" === TT.key ? KT = lT[0] : "End" === TT.key && (KT = lT[lT.length - 1]), KT && (TT.preventDefault(), KT.focus(), KT.click())
      }(0, lT.useEffect)((() => {
        var TT;
        IT > HT.current && !CT && (HT.current = IT, null === (TT = tT.current) || void 0 === TT || TT.focus())
      }), [IT, CT]);
      const ET = "self" === rT,
        ZT = null !== (kT = null === mT || void 0 === mT ? void 0 : mT.name) && void 0 !== kT ? kT : null,
        uT = "error" === DT.status ? DT.error : null,
        XT = "store:giftRecipientLookupFailed" === uT;
      return (0, AT.jsxs)("div", {
        className: KT()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: CT,
          StoreRecipientStripNoChips: !oT
        }),
        children: [(0, AT.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: jT("store:buyingFor")
        }), (0, AT.jsxs)("div", {
          ref: hT,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": jT("store:whoIsItFor"),
          children: [(0, AT.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": ET,
            tabIndex: CT || !ET && null !== ZT ? -1 : 0,
            className: KT()("StoreRecipientMe", {
              StoreRecipientChecked: ET
            }),
            onClick: () => {
              CT || GT()
            },
            onKeyDown: VT,
            children: [(0, AT.jsx)(yT.e, {
              name: "user"
            }), " ", jT("store:me")]
          }), oT && (0, AT.jsx)("div", {
            className: "StoreRecipientChips",
            children: bT.map((TT => {
              const kT = TT === mT;
              return (0, AT.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": kT,
                tabIndex: !CT && kT ? 0 : -1,
                title: TT.name,
                className: KT()("StoreRecipientChip", {
                  StoreRecipientChecked: kT
                }),
                onClick: () => {
                  CT || function(TT) {
                    "gift" !== rT && (0, qT.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), MT.choose(TT.name, TT.kind)
                  }(TT)
                },
                onKeyDown: VT,
                children: (0, AT.jsx)(GK.h, {
                  playerSocialPreview: EK(TT, kT ? FT : null),
                  opensProfileCard: !1,
                  isFriend: null !== TT.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== TT.friend,
                  status: null === TT.friend ? null : void 0,
                  trailing: kT ? (0, AT.jsx)(ZK, {
                    pending: "pending" === DT.status
                  }) : void 0
                })
              }, TT.name)
            }))
          })]
        }), (0, AT.jsxs)("div", {
          className: KT()("StoreRecipientSearch", {
            StoreRecipientChecked: zT,
            StoreRecipientSearchPulse: IT > 0 && !zT,
            StoreRecipientSearchError: null !== uT && !XT
          }),
          onClick: () => {
            var TT;
            null === (TT = tT.current) || void 0 === TT || TT.focus()
          },
          children: [zT && "found" === DT.status && FT && (0, AT.jsx)(VK, {
            cosmetics: FT
          }), !(zT && "found" === DT.status && FT) && (0, AT.jsx)(yT.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, AT.jsx)(aT.b, {
            className: "StoreRecipientSearchInput",
            domRef: tT,
            placeholderText: jT("store:searchName"),
            defaultValue: JT,
            maxLength: eT.i,
            onValueChange: function(TT) {
              "gift" !== rT && TT.trim() && (0, qT.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), MT.type(TT)
            },
            onEnter: () => {
              var TT;
              const kT = null === (TT = tT.current) || void 0 === TT ? void 0 : TT.value.trim();
              kT && MT.choose(kT, "typed")
            },
            blurOnEnter: !0
          }), zT && (0, AT.jsx)(ZK, {
            pending: "pending" === DT.status
          }), zT && (0, AT.jsx)("div", {
            ...(0, xT.X)({
              disabled: CT
            }),
            "aria-label": jT("store:clearRecipient"),
            title: jT("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: TT => {
              TT.stopPropagation(), CT || GT()
            },
            children: (0, AT.jsx)(yT.e, {
              name: "xmark"
            })
          })]
        }, IT), uT && (0, AT.jsx)("div", {
          className: KT()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: XT
          }),
          role: "status",
          children: jT(uT)
        })]
      })
    }
    var XK = cT(2355),
      dK = cT(2286),
      LK = cT(3539),
      RK = cT(3052),
      gK = cT(2323);
    const UK = cT.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function YK() {
      (0, gK.f)(UK, {
        lowPriority: !1
      })
    }

    function BK(TT) {
      let {
        onBack: kT,
        cta: cT,
        recipient: MT,
        afterCta: KT
      } = TT;
      const {
        t: fT
      } = (0, OT.B)(), [IT, CT] = (0, lT.useState)("starting"), jT = (0, lT.useRef)(null), vT = (0, Hk.b)(), tT = (0, lT.useRef)(null), hT = (0, lT.useCallback)((() => {
        const TT = jT.current;
        null !== TT.error && TT.load();
        const kT = TT.play();
        tT.current = kT, kT.catch((TT => {
          (0, LK.d)("Failed to play Super Rank video", TT), vT.current && tT.current === kT && CT("failed")
        }))
      }), [vT]);
      return (0, lT.useEffect)((() => {
        const TT = jT.current;
        let kT;

        function cT() {
          clearTimeout(kT), kT = setTimeout(hT, 3e3)
        }
        return hT(), TT.addEventListener("ended", cT), () => {
          clearTimeout(kT), TT.removeEventListener("ended", cT)
        }
      }), [hT]), (0, AT.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, AT.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, AT.jsx)(xT.b, {
            className: "StoreDetailBackButton",
            onClick: kT,
            padBack: !0,
            children: fT("general:back")
          }), (0, AT.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, AT.jsx)(yT.e, {
              name: "bolt"
            }), " ", fT("homePage:superRank")]
          }), MT]
        }), (0, AT.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, AT.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, AT.jsx)("video", {
              ref: jT,
              src: `${JT.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: UK,
              muted: !0,
              playsInline: !0,
              controls: "playing" === IT,
              onPlaying: () => {
                CT("playing")
              },
              onError: () => {
                CT("failed")
              }
            }), ("failed" === IT || "loading" === IT) && (0, AT.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, AT.jsx)(xT.e, {
                ariaLabel: fT("general:play"),
                loading: "loading" === IT,
                onClick: () => {
                  CT("loading"), hT()
                },
                touchPressOn: "pointerup",
                children: (0, AT.jsx)(yT.e, {
                  name: "play"
                })
              })
            })]
          }), (0, AT.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, AT.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, AT.jsx)(RK.b, {})
            }), (0, AT.jsxs)("div", {
              className: "StoreTileActions",
              children: [cT, KT]
            })]
          })]
        })]
      })
    }
    var WK = cT(2619),
      nK = cT(3485),
      pK = cT(3028),
      iK = cT(3033);
    const qK = [HK.s.yellow, HK.s.green, HK.s.aqua, HK.s.blue, HK.s.purple, HK.s.red];

    function sK(TT) {
      return "needsRecipient" === TT || "lookingUp" === TT || "gift" === TT || "recipientOwns" === TT || "recipientSharesOwned" === TT || "recipientSubscribed" === TT
    }

    function TO(TT) {
      const {
        onKeyDown: kT,
        ...cT
      } = (0, xT.X)();
      return {
        ...cT,
        "aria-label": TT,
        onKeyDown: TT => {
          TT.target === TT.currentTarget && (null === kT || void 0 === kT || kT(TT))
        }
      }
    }

    function kO(TT) {
      let {
        text: kT
      } = TT;
      return (0, AT.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(kT).map(((TT, kT) => (0, AT.jsx)("span", {
          style: {
            color: qK[kT % qK.length]
          },
          children: TT
        }, kT)))
      })
    }
    const cO = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function lO(TT) {
      let {
        state: kT,
        item: cT,
        price: lT,
        busy: MT,
        highlight: fT = !1,
        onAct: IT,
        onNeedRecipient: CT,
        onLogin: jT
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), tT = "superRank" === cT ? VT.j.product.days : null, hT = TT => null === tT ? vT(TT ? "general:gift" : "general:buy") : vT(TT ? "store:giftDays" : "store:buyDays", {
        days: tT
      }), NT = (TT, kT) => {
        const cT = (0, AT.jsxs)(AT.Fragment, {
          children: [null === TT && (0, AT.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== TT && (0, AT.jsx)("span", {
            className: "StoreCtaLabel",
            title: TT,
            children: TT
          })]
        });
        return null !== tT ? (0, AT.jsxs)(AT.Fragment, {
          children: [kT && (0, AT.jsx)("span", {
            className: "StoreCtaIcon",
            children: kT
          }), cT, (0, AT.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, AT.jsx)(dK.d, {
              amount: lT
            })]
          })]
        }) : (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("span", {
            className: "StoreCtaLead",
            children: [cT, "\xb7"]
          }), (0, AT.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [kT, (0, AT.jsx)(dK.d, {
              amount: lT
            })]
          })]
        })
      };
      let QT;
      switch (kT) {
        case "pending":
          QT = (0, AT.jsx)(xT.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: NT(null)
          });
          break;
        case "login":
          QT = (0, AT.jsx)(xT.m, {
            className: "StoreCtaButton",
            onClick: jT,
            children: NT(hT(!1))
          });
          break;
        case "owned":
          QT = (0, AT.jsx)(xT.i, {
            className: "StoreCtaButton",
            onClick: () => {
              PT.e.set({
                openEverythingMenuName: xk.o.CUSTOMISATION
              })
            },
            children: (0, AT.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, AT.jsx)(yT.e, {
                name: "shirt"
              }), " ", vT("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          QT = (0, AT.jsx)(xT.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, AT.jsx)("span", {
              className: "StoreCtaLabel",
              children: vT(cO[kT])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          QT = (0, AT.jsx)(xT.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === kT || null === lT,
            loading: "lookingUp" === kT || MT,
            onClick: IT,
            analyticsClick: {
              id: "store.gift",
              value: cT
            },
            children: NT(hT(!0), DK.e)
          });
          break;
        case "buy":
        case "recharge":
          QT = (0, AT.jsx)(xT.m, {
            className: "StoreCtaButton",
            loading: MT,
            disabled: null === lT,
            onClick: IT,
            analyticsClick: {
              id: "store.buy",
              value: cT
            },
            children: NT(hT(!1))
          })
      }
      return (0, AT.jsx)("div", {
        className: KT()("StoreCta", {
          StoreCtaHighlight: fT,
          StoreCtaLabelFirst: null !== tT
        }),
        onClick: TT => {
          TT.stopPropagation(), "needsRecipient" === kT && CT()
        },
        children: QT
      })
    }

    function MO() {
      const {
        t: TT
      } = (0, OT.B)();
      return (0, AT.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, AT.jsxs)("li", {
          children: [(0, AT.jsx)(yT.e, {
            name: "check"
          }), (0, AT.jsx)(kO, {
            text: TT("store:colourfulNames")
          })]
        }), (0, AT.jsxs)("li", {
          children: [(0, AT.jsx)(yT.e, {
            name: "check"
          }), TT("store:perkCapes")]
        }), (0, AT.jsxs)("li", {
          children: [(0, AT.jsx)(yT.e, {
            name: "check"
          }), TT("store:perkNoAdverts")]
        }), (0, AT.jsxs)("li", {
          children: [(0, AT.jsx)(yT.e, {
            name: "check"
          }), TT("store:perkFriends", {
            count: (0, pT.d)(["super"])
          })]
        })]
      })
    }

    function KO(TT) {
      let {
        daysLeft: kT,
        totalDays: cT,
        urgent: lT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)(), yT = cT > 0 ? Math.min(1, Math.max(.03, kT / cT)) : 1;
      return (0, AT.jsxs)("div", {
        className: KT()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: lT
        }),
        children: [(0, AT.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === kT ? MT("store:oneDayLeft") : MT("store:daysLeft", {
            days: kT
          })
        }), (0, AT.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, AT.jsx)("i", {
            style: {
              width: 100 * yT + "%"
            }
          })
        })]
      })
    }

    function OO(TT) {
      let {
        state: kT,
        urgent: cT,
        daysLeft: lT,
        totalDays: MT,
        recipientHasSuperRank: fT,
        busy: xT,
        highlight: IT,
        onOpen: CT,
        onAct: jT,
        onNeedRecipient: vT,
        onLogin: tT
      } = TT;
      const {
        t: hT
      } = (0, OT.B)(), NT = sK(kT), {
        days: QT
      } = VT.j.product, ST = hT("store:recipientHasSuperRank", {
        giftDays: QT
      }), DT = WT("subscribed" === kT);
      return (0, AT.jsxs)("div", {
        className: KT()("StoreTile StoreSuperRankTile", {
          StoreTileGift: NT,
          StoreSuperRankTileUrgent: "recharge" === kT && cT,
          StoreSuperRankTileWithChip: fT,
          StoreSuperRankTileGiftReady: "gift" === kT
        }),
        ...TO(hT("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: YK,
        onFocus: YK,
        onClick: CT,
        children: [(0, AT.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${oK.i})`
          }
        }), NT && (0, AT.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, AT.jsxs)("div", {
          className: "StoreTileContent",
          children: [fT && (0, AT.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: ST,
            children: ST
          }), (0, AT.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, AT.jsx)(yT.e, {
              name: "bolt"
            }), " ", hT("homePage:superRank")]
          }), NT && (0, AT.jsx)("div", {
            className: "StoreTilePitch",
            children: hT("store:giftPitch", {
              days: QT
            })
          }), "recharge" === kT && (0, AT.jsx)(KO, {
            daysLeft: lT,
            totalDays: MT,
            urgent: cT
          }), DT && (0, AT.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, AT.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: DT
            })
          }), (0, AT.jsx)(MO, {}), (0, AT.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, AT.jsx)(lO, {
              state: kT,
              item: "superRank",
              price: VT.j.price,
              busy: xT,
              highlight: IT,
              onAct: jT,
              onNeedRecipient: vT,
              onLogin: tT
            }), "needsRecipient" === kT && (0, AT.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: hT("store:pickRecipientFirst")
            }), "recharge" === kT && cT && (0, AT.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === lT ? hT("store:endsInOneDay") : hT("store:endsInDays", {
                days: lT
              })
            })]
          })]
        })]
      })
    }
    const yO = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function fO(TT) {
      var kT;
      let {
        pack: cT,
        state: MT,
        busy: fT,
        onOpen: xT,
        onAct: IT,
        onNeedRecipient: CT,
        onLogin: jT
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), tT = AK.c[cT], hT = QK.p[cT], NT = (0, oK.p)(cT), QT = (0, lT.useRef)(null);
      (0, pK.i)(cT, QT);
      const ST = sK(MT),
        DT = null !== (kT = tT.displayName) && void 0 !== kT ? kT : cT,
        aT = (0, nK.c)((() => {
          (0, WK.c)();
          const TT = (0, pK.f)(cT);
          void 0 !== TT && (0, gK.f)((0, pK.e)(TT))
        })),
        [FT] = (0, lT.useState)(zK.e);
      return (0, AT.jsxs)("div", {
        className: KT()("StoreTile StorePackTile", yO[tT.tier], {
          StorePackTileOwned: "owned" === MT,
          StorePackTileRecipientOwns: "recipientOwns" === MT,
          StoreTileGift: ST
        }),
        ...TO(DT),
        ref: QT,
        "data-store-item": cT,
        onClick: xT,
        onPointerMove: TT => {
          "mouse" !== TT.pointerType || 0 === TT.movementX && 0 === TT.movementY || FT || aT.start()
        },
        onPointerLeave: aT.cancel,
        children: [hT && (0, AT.jsx)(hT, {}), (0, AT.jsx)("div", {
          className: "StorePackCharacters",
          children: NT.map((TT => (0, AT.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,oK.m)(TT)})`
            }
          }, TT)))
        }), (0, AT.jsx)("div", {
          className: "StoreTileScrim"
        }), ST && (0, AT.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, AT.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, AT.jsx)("div", {
            className: "StoreTileTitle",
            children: DT
          }), (0, AT.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, AT.jsx)(iK.d, {
              tier: tT.tier
            }), " \xb7 ", vT("store:itemCount", {
              count: (0, XK.f)(cT)
            }), "owned" === MT && (0, AT.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, AT.jsx)(yT.e, {
                name: "check"
              }), " ", vT("general:owned")]
            })]
          }), (0, AT.jsx)(lO, {
            state: MT,
            item: cT,
            price: (0, VT.c)(cT),
            busy: fT,
            onAct: IT,
            onNeedRecipient: CT,
            onLogin: jT
          })]
        })]
      })
    }
    var xO = cT(3e3),
      IO = cT(1567),
      AO = cT(1478),
      CO = cT(3519);

    function jO() {
      return (0, AT.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var vO = cT(1356),
      tO = cT(1578),
      hO = cT(9395);

    function NO(TT) {
      let {
        character: kT,
        drawn: cT,
        onDrawn: MT
      } = TT;
      const OT = (0, lT.useRef)(null),
        yT = (0, hO.e)(kT);
      return (0, AT.jsx)("div", {
        className: KT()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: cT
        }),
        children: (0, AT.jsx)(lT.Suspense, {
          fallback: null,
          children: (0, AT.jsx)(WK.b, {
            ref: OT,
            framing: "store",
            turntableFromYaw: cT ? yT.yaw : null,
            onReady: () => {
              var TT, cT;
              null === (TT = OT.current) || void 0 === TT || TT.setOrbit(yT), null === (cT = OT.current) || void 0 === cT || cT.setAllCosmetics(tO.c[kT].cosmetics)
            },
            onDrawn: MT
          })
        })
      })
    }
    const QO = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      SO = new Set(["wildSpirits"]);

    function DO(TT) {
      var kT;
      let {
        tile: cT,
        design: MT,
        canGoLive: fT,
        live: xT,
        busy: IT,
        highlight: CT,
        onLiveStart: jT,
        onLiveEnd: vT,
        onOpen: tT,
        onAct: hT,
        onNeedRecipient: NT,
        onLogin: QT
      } = TT;
      const {
        t: ST
      } = (0, OT.B)(), {
        pack: DT,
        state: aT
      } = cT, FT = AK.c[DT], rT = (0, AK.e)(DT), PT = (0, oK.n)(DT), wT = QK.p[PT], mT = SO.has(PT), {
        tier: bT
      } = FT, zT = "legendary" === bT || "mythic" === bT, JT = (0, lT.useRef)(null);
      (0, vO.b)(JT, "epic" === bT || zT || mT);
      const [oT, eT] = (0, lT.useState)(!1);
      return !xT && oT && eT(!1), (0, AT.jsxs)("div", {
        ref: JT,
        className: KT()("StoreCharacterCard", `StoreCharacterCard${MT}`, QO[bT], {
          StoreCharacterCardOwned: "owned" === aT || "recipientOwns" === aT,
          StoreCharacterCardGift: sK(aT),
          StoreCharacterCardItem: void 0 === rT
        }),
        onPointerMove: TT => {
          "mouse" !== TT.pointerType || 0 === TT.movementX && 0 === TT.movementY || !fT || xT || void 0 === rT || jT()
        },
        onPointerLeave: vT,
        children: [(0, AT.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: wT && (0, AT.jsx)(wT, {
            simple: !0
          })
        }), zT && (0, AT.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, AT.jsxs)(HT.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, IO.g)({
            kind: "pack",
            pack: DT
          }),
          "data-store-item": DT,
          onClick: TT => {
            (0, AO.c)(TT) && (TT.preventDefault(), tT())
          },
          children: [(0, AT.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, AT.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, AT.jsx)("div", {
              className: KT()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: oT
              }),
              style: {
                backgroundImage: `url(${(0,oK.v)(DT)})`
              }
            }), xT && void 0 !== rT && (0, AT.jsx)(NO, {
              character: rT,
              drawn: oT,
              onDrawn: () => {
                eT(!0)
              }
            })]
          }), (0, AT.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (kT = FT.displayName) && void 0 !== kT ? kT : DT
          }), (0, AT.jsx)(iK.d, {
            tier: bT,
            className: "StoreCharacterTier"
          })]
        }), (0, AT.jsx)("div", {
          className: "StoreCharacterScrim"
        }), mT && (0, AT.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, AT.jsx)(jO, {})
        }), "owned" === aT && (0, AT.jsx)("span", {
          className: "StoreCharacterOwned",
          title: ST("general:owned"),
          "aria-label": ST("general:owned"),
          children: (0, AT.jsx)(yT.e, {
            name: "check"
          })
        }), (0, AT.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, AT.jsx)(lO, {
            state: aT,
            item: DT,
            price: (0, VT.c)(DT),
            busy: IT,
            highlight: CT,
            onAct: hT,
            onNeedRecipient: NT,
            onLogin: QT
          })
        })]
      })
    }

    function aO(TT) {
      let {
        tiles: kT,
        busy: cT,
        highlightItem: MT,
        onOpen: KT,
        onAct: OT,
        onNeedRecipient: yT,
        onLogin: fT
      } = TT;
      const xT = (0, CO.l)("storeCharacterCardFoil"),
        IT = (0, CO.l)("storeCharacterCardSpotlight"),
        CT = xT ? "Foil" : IT ? "Spotlight" : "Showcase",
        [jT] = (0, lT.useState)(zK.e),
        [vT, tT] = (0, lT.useState)(null);
      return (0, AT.jsx)("div", {
        className: "StoreCharacterGrid",
        children: kT.map((TT => (0, AT.jsx)(DO, {
          tile: TT,
          design: CT,
          canGoLive: !jT,
          live: vT === TT.pack,
          busy: cT,
          highlight: MT === TT.pack,
          onLiveStart: () => {
            tT(TT.pack)
          },
          onLiveEnd: () => {
            tT((kT => kT === TT.pack ? null : kT))
          },
          onOpen: () => {
            KT(TT.pack)
          },
          onAct: () => {
            OT(TT.pack)
          },
          onNeedRecipient: yT,
          onLogin: () => {
            fT(TT.pack)
          }
        }, TT.pack)))
      })
    }
    var FO = cT(9406);

    function rO(TT) {
      let {
        title: kT
      } = TT;
      return (0, AT.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, AT.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: kT
        })
      })
    }

    function PO(TT) {
      let {
        mountAtOnce: kT,
        children: cT
      } = TT;
      const MT = (0, lT.useRef)(null),
        [KT, OT] = (0, lT.useState)(kT),
        yT = (0, FO.c)();
      return (0, lT.useLayoutEffect)((() => {
        const TT = MT.current;
        TT && TT.getBoundingClientRect().top < TT.parentElement.getBoundingClientRect().bottom && OT(!0)
      }), []), KT || yT ? (0, AT.jsx)(AT.Fragment, {
        children: cT
      }) : (0, AT.jsx)("div", {
        ref: MT
      })
    }

    function wO(TT) {
      let {
        layout: kT,
        mountAtOnce: cT,
        bundleGift: lT,
        superRankTotalDays: MT,
        busy: KT,
        highlightItem: yT,
        onOpen: fT,
        onAct: xT,
        onNeedRecipient: IT,
        onLogin: CT
      } = TT;
      const {
        t: jT
      } = (0, OT.B)(), vT = kT.packs.filter((TT => void 0 === (0, AK.e)(TT.pack) && !(0, AK.j)(TT.pack))), tT = kT.packs.filter((TT => void 0 !== (0, AK.e)(TT.pack))), hT = kT.packs.filter((TT => (0, AK.j)(TT.pack)));
      return (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsx)(xO.e, {
          className: "StoreSuperGems",
          gift: lT,
          highlightSku: yT
        }), (0, AT.jsx)(rO, {
          title: jT("store:rank")
        }), (0, AT.jsx)(OO, {
          state: kT.superRank.state,
          urgent: kT.superRank.urgent,
          daysLeft: kT.superRankDaysLeft,
          totalDays: MT,
          recipientHasSuperRank: kT.recipientHasSuperRank,
          busy: KT,
          highlight: "superRank" === yT,
          onOpen: () => {
            fT("superRank")
          },
          onAct: () => {
            xT("superRank")
          },
          onNeedRecipient: IT,
          onLogin: () => {
            CT("superRank")
          }
        }), (0, AT.jsxs)(PO, {
          mountAtOnce: cT,
          children: [(0, AT.jsx)(rO, {
            title: jT("store:bundles")
          }), (0, AT.jsx)("div", {
            className: "StorePackGrid",
            children: vT.map((TT => (0, AT.jsx)(fO, {
              pack: TT.pack,
              state: TT.state,
              busy: KT,
              onOpen: () => {
                fT(TT.pack)
              },
              onAct: () => {
                xT(TT.pack)
              },
              onNeedRecipient: IT,
              onLogin: () => {
                CT(TT.pack)
              }
            }, TT.pack)))
          }), (0, AT.jsxs)(PO, {
            mountAtOnce: cT,
            children: [(0, AT.jsx)(rO, {
              title: jT("store:characters")
            }), (0, AT.jsx)(aO, {
              tiles: tT,
              busy: KT,
              highlightItem: yT,
              onOpen: fT,
              onAct: xT,
              onNeedRecipient: IT,
              onLogin: CT
            }), hT.length > 0 && (0, AT.jsxs)(AT.Fragment, {
              children: [(0, AT.jsx)(rO, {
                title: jT("store:premiumItems")
              }), (0, AT.jsx)(aO, {
                tiles: hT,
                busy: KT,
                highlightItem: yT,
                onOpen: fT,
                onAct: xT,
                onNeedRecipient: IT,
                onLogin: CT
              })]
            })]
          })]
        })]
      })
    }

    function mO(TT) {
      let {
        state: kT,
        mode: cT,
        giftName: lT,
        busy: MT,
        highlight: KT,
        purchaseError: yT,
        onBack: fT,
        onChooseRecipient: IT,
        onAct: CT,
        onLogin: jT
      } = TT;
      const {
        t: vT
      } = (0, OT.B)(), tT = WT("gift" !== cT);
      return (0, AT.jsx)(BK, {
        onBack: fT,
        recipient: "gift" === cT && (0, AT.jsxs)(AT.Fragment, {
          children: [lT && (0, AT.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: vT("store:giftFor", {
              name: lT
            }),
            children: [DK.e, " ", vT("store:giftFor", {
              name: lT
            })]
          }), !lT && (0, AT.jsxs)("div", {
            ...(0, xT.X)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: IT,
            children: [DK.e, " ", vT("store:chooseRecipient")]
          })]
        }),
        cta: (0, AT.jsx)(lO, {
          state: kT,
          item: "superRank",
          price: VT.j.price,
          busy: MT,
          highlight: KT,
          onAct: CT,
          onNeedRecipient: IT,
          onLogin: jT
        }),
        afterCta: (0, AT.jsxs)(AT.Fragment, {
          children: [tT && (0, AT.jsx)("span", {
            className: "StoreTileNote",
            children: tT
          }), yT && (0, AT.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: vT(yT)
          })]
        })
      })
    }
    var bO = cT(168);
    const zO = bO.m("kind", [bO.E({
      kind: bO.x("refused"),
      heldTierId: bO.V(),
      until: bO.B()
    }), bO.E({
      kind: bO.x("refund"),
      tierId: bO.V(),
      refundedMs: bO.B(),
      forfeitedMs: bO.B(),
      premiumCurrency: bO.B()
    }), bO.E({
      kind: bO.x("none")
    })]);
    async function JO(TT) {
      const kT = await (0, zT.postJsonWithMetricsCookiesAndJsonResponse)(`${JT.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: TT
      }, {
        retries: 1
      });
      return zO.parse(kT)
    }
    var oO = cT(2972),
      HO = cT(3004);

    function eO(TT, kT) {
      const cT = Math.max(1, Math.round(kT / uT.i));
      return [1 === cT ? `${TT}OneDay` : TT, {
        days: cT.toLocaleString()
      }]
    }

    function GO() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, dT.purchasesAllowed)() ? (0, AT.jsx)(VO, {}) : null
    }

    function VO() {
      const {
        t: TT
      } = (0, OT.B)(), {
        userContext: kT
      } = (0, vT.b)(), {
        purchaseUnderWay: cT,
        notice: MT,
        subscribe: KT
      } = (0, oO.e)(), [yT, fT] = (0, lT.useState)(null), [IT, CT] = (0, lT.useState)(0), [jT, tT] = (0, lT.useState)(!1), hT = (0, lT.useRef)(!0), NT = kT !== zT.NULL_USER_CONTEXT, QT = null !== yT && yT.loadedFor === kT ? yT.offer : null, ST = null === MT || void 0 === MT ? void 0 : MT.pendingIntentId, DT = (0, lT.useRef)(ST);

      function aT() {
        CT((TT => TT + 1))
      }
      async function FT(TT) {
        tT(!1), await KT(TT), hT.current && aT()
      }
      if ((0, lT.useEffect)((() => (hT.current = !0, () => {
          hT.current = !1
        })), []), (0, lT.useEffect)((() => {
          void 0 !== DT.current && void 0 === ST && aT(), DT.current = ST
        }), [ST]), (0, lT.useEffect)((() => {
          if (!NT) return;
          let TT = !1;
          return tT(!1), async function() {
            const {
              offering: TT
            } = await (0, yk.c)().getOfferings("superRankPage"), kT = null === TT || void 0 === TT ? void 0 : TT.packages.find((TT => null !== TT.price));
            return void 0 === kT ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: kT,
              preview: await JO(kT.productId)
            }
          }().catch((TT => (console.error("Billing: loading the Super Rank subscription or its preview failed:", TT), {
            kind: "loadFailed"
          }))).then((cT => {
            TT || fT((TT => "loadFailed" === cT.kind && (null === TT || void 0 === TT ? void 0 : TT.loadedFor) === kT ? TT : {
              loadedFor: kT,
              offer: cT
            }))
          })), () => {
            TT = !0
          }
        }), [kT, NT, IT]), null === QT) return null;
      if ("loaded" !== QT.kind) return (0, AT.jsx)(HO.k, {
        notice: {
          kind: "error",
          key: "unavailable" === QT.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: rT,
        preview: PT
      } = QT;
      if ("refused" === PT.kind) return (0, AT.jsx)(HO.k, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(PT.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const wT = (0, xO.f)(rT.price);
      if (jT && "refund" === PT.kind) {
        const {
          refundedMs: kT,
          forfeitedMs: lT,
          premiumCurrency: MT
        } = PT, KT = lT + (0 === MT ? kT : 0), [OT, yT] = eO("payments:subscribeRefundsGemRank", kT), [fT, IT] = eO("payments:subscribeForfeitsGemRank", KT);
        return (0, AT.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, AT.jsx)("div", {
            children: TT("payments:subscribeEndsGemRank")
          }), MT > 0 && (0, AT.jsx)("div", {
            children: TT(OT, {
              ...yT,
              amount: MT.toLocaleString()
            })
          }), KT > 0 && (0, AT.jsx)("div", {
            children: TT(fT, IT)
          }), (0, AT.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, AT.jsx)(xT.i, {
              onClick: () => {
                tT(!1)
              },
              children: TT("general:cancel")
            }), (0, AT.jsx)(xT.m, {
              onClick: () => {
                FT(rT)
              },
              loading: cT,
              children: TT("payments:subscribeContinue", {
                price: wT
              })
            })]
          })]
        })
      }
      return (0, AT.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, AT.jsx)(HO.k, {
          notice: MT,
          className: "SmallTextBold"
        }), (0, AT.jsx)(HO.c, {
          className: "SmallTextBold"
        }), (0, AT.jsx)(xT.m, {
          onClick: () => {
            "refund" === PT.kind ? tT(!0) : FT(rT)
          },
          disabled: void 0 !== ST,
          loading: cT,
          children: TT("payments:subscribeToSuperRank", {
            price: wT
          })
        })]
      })
    }
    const EO = {
      kind: "board"
    };
    let ZO = !1;

    function uO(TT) {
      return "found" === TT.status || "error" === TT.status && "store:giftRecipientLookupFailed" === TT.error ? TT.name : null
    }(0, XT.x)(CK.prefetchBillingOfferings);
    const XO = (0, lT.memo)((function(TT) {
      var kT;
      let {
        show: MT
      } = TT;
      const {
        t: yT
      } = (0, OT.B)(), {
        userContext: fT
      } = (0, vT.b)(), xT = fT !== zT.NULL_USER_CONTEXT, IT = PK(fT), [CT, jT] = (0, hT.d)(), {
        page: tT,
        urlMode: NT,
        goTo: QT
      } = (0, wK.f)(), ST = function(TT) {
        return "superRank" === TT.kind ? "superRank" : "pack" === TT.kind ? TT.pack : null
      }(tT), {
        openEverythingMenuName: DT,
        gameState: aT
      } = (0, PT.n)(["openEverythingMenuName", "gameState"]), FT = null !== DT;
      ! function(TT, kT) {
        const [MT] = (0, lT.useState)(zK.e), [KT, OT] = (0, lT.useState)(!1);
        MT && kT && !KT && OT(!0);
        const yT = (0, Ol.s)(),
          fT = MT && KT && TT && !yT;
        (0, lT.useEffect)((() => {
          if (!fT) return;
          let TT = null,
            kT = null,
            lT = null;
          const MT = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, yk.c)().purchaseUnderWay,
            KT = () => {
              var cT;
              null === (cT = lT) || void 0 === cT || cT(), lT = null, null !== TT && (clearTimeout(TT), TT = null), null !== kT && (clearTimeout(kT), kT = null)
            },
            OT = () => {
              (0, mK.l)(!1), (0, mK.j)(!1), KT(), TT = setTimeout((() => {
                TT = null, lT = (0, bK.e)((() => {
                  lT = null, MT() ? OT() : ((0, mK.l)(!0), kT = setTimeout((() => {
                    kT = null, lT = (0, bK.e)((() => {
                      lT = null, MT() ? OT() : (0, mK.j)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => cT(4649))).then((TT => {
                    TT.startBackgroundGameSetup()
                  }), (TT => {
                    console.warn("Background game setup: its chunk failed to load", TT)
                  })))
                }))
              }), 2e3)
            };
          for (const cT of JK) window.addEventListener(cT, OT, {
            capture: !0,
            passive: !0
          });
          return OT(), () => {
            for (const TT of JK) window.removeEventListener(TT, OT, {
              capture: !0
            });
            KT(), (0, mK.l)(!1), (0, mK.j)(!1)
          }
        }), [fT])
      }(MT && FT, "pack" === tT.kind);
      const rT = "landingPage" === aT;
      (0, lT.useEffect)((() => {
        FT && (0, CK.prefetchBillingOfferings)()
      }), [FT]), (0, lT.useEffect)((() => {
        FT && !MT && rT && (0, oK.z)()
      }), [FT, MT, rT]);
      const [wT, mT] = (0, lT.useState)(0), [bT, JT] = (0, lT.useState)(null), [oT, HT] = (0, lT.useState)(null), [eT, GT] = (0, lT.useState)(null), [ET, ZT] = (0, lT.useState)(null), uT = (0, lT.useRef)(null), LT = (0, lT.useRef)(null), RT = (0, lT.useRef)(null), gT = (0, lT.useRef)(!1), UT = (0, XT.E)(), YT = (0, lT.useRef)(0), BT = (0, lT.useRef)(!1);

      function WT() {
        mT((TT => TT + 1))
      }(0, lT.useEffect)((() => {
        if (MT) {
          if (ZO = !0, (0, XT.o)(), UT && UT.seq !== YT.current) {
            var TT;
            YT.current = UT.seq, "loginResume" !== UT.source && (0, XT.B)();
            const kT = (0, XT.e)(UT);
            NT || QT(kT), ZT(null !== (TT = UT.highlight) && void 0 !== TT ? TT : null), HT(null), "gift" === UT.mode && UT.giftRecipientName ? IT.choose(UT.giftRecipientName, "prefilled") : "current" !== UT.mode && IT.clear(), "gift" !== UT.mode || UT.giftRecipientName || WT(), (0, qT.reportAnalyticsClick)({
              id: "store.open",
              value: UT.source
            })
          } else BT.current || (0, qT.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          BT.current = !0
        } else BT.current = !1
      }), [MT, UT]), (0, lT.useEffect)((() => {
        if (!ET) return;
        const TT = setTimeout((() => {
          ZT(null)
        }), 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [ET]), (0, lT.useLayoutEffect)((() => {
        const TT = uT.current;
        if (!MT || !TT) return LT.current = null, void(RT.current = null);
        var kT;
        if (ST) LT.current = ST, null === (kT = TT.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === kT || kT.focus();
        else if (LT.current) {
          const kT = RT.current;
          null !== kT && (TT.scrollTop = kT);
          const cT = TT.querySelector(`[data-store-item="${LT.current}"]`);
          if (cT) {
            const lT = cT.getBoundingClientRect(),
              MT = TT.getBoundingClientRect();
            cT.focus({
              preventScroll: null !== kT && lT.bottom > MT.top && lT.top < MT.bottom
            })
          }
          LT.current = null
        }
      }), [ST, MT]), (0, lT.useEffect)((() => {
        HT(null)
      }), [IT.query]), (0, lT.useEffect)((() => {
        if (!eT) return;
        const TT = setTimeout((() => {
          GT(null)
        }), 8e3);
        return () => {
          clearTimeout(TT)
        }
      }), [eT]);
      const nT = fT.superRankInfo,
        pT = fT.isLoggedIn() || (0, dT.guestsMayBuy)(),
        iT = fT.getOwnedCosmeticPacks(),
        sT = (0, DK.p)(IT.query),
        Tk = (0, DK.i)({
          mode: sT,
          loggedIn: xT ? pT : null,
          superRankInfo: nT,
          now: Date.now(),
          ownedPacks: iT,
          packs: AK.s,
          recipient: IT.recipient
        });
      (0, lT.useEffect)((() => {
        if (!pT || !MT) return;
        const TT = (0, XT.B)(),
          kT = TT && (0, DK.n)(TT, AK.s);
        TT && kT && ((0, qT.reportAnalyticsClick)({
          id: "store.login_resume",
          value: TT.item
        }), (0, XT.p)(kT))
      }), [pT, MT]);
      const kk = (0, DK.t)({
        superRankDaysLeft: Tk.superRankDaysLeft,
        openedThisSession: ZO || MT,
        seenNewItems: (0, XT.k)()
      });
      if ((0, lT.useEffect)((() => {
          (0, XT.z)(kk)
        }), [kk]), !MT || !(0, dT.purchasesAllowed)()) return null;
      const ck = jT > CT && CT <= 700,
        lk = !ck && jT <= 420,
        Mk = "gift" === sT ? uO(IT.recipient) : null,
        Kk = null !== bT;

      function Ok(TT) {
        (0, vK.c)(TT, "gift" === sT ? IT.query.trim() : null)
      }

      function fk(TT, kT) {
        (0, qT.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${kT?"gift":"self"}:${TT}`
        }), kT && (IT.recordGift(kT.name, TT), xk(kT))
      }

      function xk(TT) {
        ! function(TT) {
          try {
            Bk.e.setItem(aK, (0, DK.C)(rK(), TT))
          } catch {}
        }({
          name: TT.name,
          cosmetics: TT.cosmetics
        }), QT(EO), GT((kT => {
          var cT;
          return {
            name: TT.name,
            seq: (null !== (cT = null === kT || void 0 === kT ? void 0 : kT.seq) && void 0 !== cT ? cT : 0) + 1
          }
        }))
      }
      async function Ik(TT) {
        var kT, cT;
        if (gT.current) return;
        if (!pT) return void Ok(TT);
        HT(null), ZT(null);
        const lT = "gift" === sT ? {
          name: uO(IT.recipient),
          cosmetics: IT.recipientCosmetics
        } : null;
        if (lT && !lT.name) return void WT();
        const MT = "superRank" === TT ? VT.j.id : (0, VT.b)(TT);
        gT.current = !0;
        const KT = await (0, SK.c)(MT, null !== (kT = null === lT || void 0 === lT ? void 0 : lT.name) && void 0 !== kT ? kT : null);
        if (gT.current = !1, !KT) return;
        JT(TT);
        const OT = await tK.e.purchase(MT, null !== (cT = null === lT || void 0 === lT ? void 0 : lT.name) && void 0 !== cT ? cT : null);
        JT(null), OT ? HT(OT) : (fk(TT, lT), lT || (await (0, hK.flushClientAnalyticsEvents)(), (0, jK.refreshWithoutConfirmation)("superRank" === TT ? "/super-rank-welcome" : `/pack-welcome/${TT}`)))
      }
      const Ak = KT()("Store", {
        StoreGift: "gift" === sT,
        StorePortrait: ck,
        StoreCompact: lk
      });
      if ("pack" === tT.kind) {
        const TT = tT.pack,
          kT = Tk.packs.find((kT => kT.pack === TT));
        return (0, AT.jsx)("div", {
          ref: uT,
          className: "CosmeticShopContainer",
          children: (0, AT.jsx)(QK.i, {
            pack: TT,
            onBack: () => {
              QT(EO)
            },
            onPurchased: kT => {
              fk(TT, kT ? {
                name: kT,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === sT && Mk && kT && (0, AT.jsxs)(AT.Fragment, {
              children: [(0, AT.jsx)(lO, {
                state: kT.state,
                item: TT,
                price: (Ck = TT, "superRank" === Ck ? VT.j.price : (0, VT.c)(Ck)),
                busy: Kk,
                onAct: () => {
                  Ik(TT)
                },
                onNeedRecipient: () => {
                  QT(EO), WT()
                },
                onLogin: () => {
                  Ok(TT)
                },
                highlight: ET === TT
              }), oT && (0, AT.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: yT(oT)
              })]
            }),
            ownedPacks: iT,
            startAsGift: "gift" === sT,
            initialGiftRecipient: "gift" === sT ? null !== Mk && void 0 !== Mk ? Mk : IT.query.trim() : "",
            highlightCta: ET === TT
          }, TT)
        })
      }
      var Ck;
      return "superRank" === tT.kind ? (0, AT.jsx)("div", {
        ref: uT,
        className: KT()(Ak, "StoreDetailView"),
        children: (0, AT.jsx)(mO, {
          state: Tk.superRank.state,
          mode: sT,
          giftName: Mk,
          busy: Kk,
          highlight: "superRank" === ET,
          purchaseError: oT,
          onBack: () => {
            QT(EO)
          },
          onChooseRecipient: () => {
            QT(EO), WT()
          },
          onAct: () => {
            Ik("superRank")
          },
          onLogin: () => {
            Ok("superRank")
          }
        })
      }) : (0, AT.jsxs)("div", {
        ref: uT,
        className: Ak,
        onScroll: TT => {
          RT.current = TT.currentTarget.scrollTop
        },
        children: [(0, AT.jsx)("div", {
          className: "StoreTopRow",
          children: (0, AT.jsx)(uK, {
            selfName: xT ? fT.getPlayerName() : "",
            giftRecipient: IT,
            suggestionsVersion: null !== (kT = null === eT || void 0 === eT ? void 0 : eT.seq) && void 0 !== kT ? kT : 0,
            pulseSignal: wT,
            disabled: Kk || !xT
          })
        }), eT && (0, AT.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            GT(null)
          },
          children: [(0, AT.jsx)(NK.b, {
            showSignal: eT.seq
          }), DK.e, " ", yT("store:giftSent", {
            name: eT.name
          })]
        }, eT.seq), !eT && oT && (0, AT.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: yT(oT)
        }), (0, AT.jsx)(wO, {
          layout: Tk,
          mountAtOnce: null !== LT.current,
          bundleGift: "gift" === sT ? {
            recipientName: Mk,
            lookingUp: "pending" === IT.recipient.status,
            busy: Kk,
            onNeedRecipient: WT,
            onSent: TT => {
              (0, qT.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), xk({
                name: TT,
                cosmetics: IT.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, DK.u)(nT),
          busy: Kk,
          highlightItem: ET,
          onOpen: function(TT) {
            (0, qT.reportAnalyticsClick)({
              id: "store.item_open",
              value: TT
            }), QT((0, XT.h)(TT))
          },
          onAct: Ik,
          onNeedRecipient: WT,
          onLogin: Ok
        }), "gift" !== sT && (0, AT.jsx)(GO, {})]
      })
    }));
    var dO = cT(2687),
      LO = cT(8874),
      RO = cT(8688),
      gO = cT(2761),
      UO = cT(2589),
      YO = cT(2642),
      BO = cT(2660),
      WO = cT(2665),
      nO = cT(2744),
      pO = cT(2724),
      iO = cT(2390),
      qO = cT(2427),
      sO = cT(2413),
      Ty = cT(2065),
      ky = cT(2668),
      cy = cT(2429);

    function ly(TT) {
      let {
        show: kT
      } = TT;
      return kT ? (0, AT.jsx)(My, {}) : null
    }

    function My() {
      const {
        t: TT
      } = (0, OT.B)(), {
        followsLeader: kT
      } = (0, UO.f)(), {
        loading: cT,
        friends: MT,
        requests: fT,
        invites: IT
      } = (0, RT.n)(), {
        userContext: CT
      } = (0, vT.b)(), [jT, tT] = (0, lT.useState)(cy.h);
      (0, lT.useEffect)((() => {
        (0, cy.b)()
      }), []);
      const hT = fT.map((TT => TT.name)),
        {
          state: NT,
          recentRequesters: QT
        } = (0, pO.n)(),
        ST = new Map([...("loaded" === NT.status ? NT.recentPlayers : []).map((TT => [TT.preview.name, TT])), ...QT.map((TT => [TT.name, TT]))]),
        DT = (0, lT.useRef)(null),
        [rT, PT] = (0, lT.useState)(""),
        [wT, mT] = (0, lT.useState)("Enter"),
        [bT, zT] = (0, lT.useState)(null);

      function JT() {
        rT && (mT("Loading"), (0, sO.i)(rT, "social_menu").then((TT => {
          if (DT.current) switch (TT.kind) {
            case "sent":
              mT("Success");
              break;
            case "becameFriends":
              mT("BecameFriends");
              break;
            case "failed":
              zT(TT.message), mT("Error")
          }
        })))
      }
      return (0, lT.useEffect)((() => {
        if ("Enter" === wT || "Loading" === wT) return;
        const TT = setTimeout((() => {
          DT.current.value = "", PT(""), mT("Enter")
        }), "Success" === wT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [wT]), (0, AT.jsx)("div", {
        className: "SocialMenu",
        children: (0, AT.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, AT.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, AT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, AT.jsx)(WO.c, {
                label: TT("socialBar:addFriend")
              }), (0, AT.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, AT.jsxs)("div", {
                  className: KT()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${wT}`]: !0
                  }),
                  children: ["Loading" === wT && (0, AT.jsx)(FT.d, {}), "Success" === wT && (0, AT.jsx)(yT.e, {
                    name: "check"
                  }), "BecameFriends" === wT && (0, AT.jsx)(AT.Fragment, {
                    children: TT("socialBar:nowFriends", {
                      playerName: rT
                    })
                  }), "Error" === wT && bT && (0, AT.jsx)(AT.Fragment, {
                    children: TT(bT.translationKey, bT.params)
                  })]
                }), (0, AT.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, AT.jsx)(aT.b, {
                    className: "PlayerSearchInput",
                    placeholderText: TT("socialBar:enterPlayerName"),
                    domRef: DT,
                    onValueChange: TT => {
                      PT((0, eT.t)(TT)), DT.current.value = (0, eT.t)(TT)
                    },
                    onEnter: () => {
                      rT && (0, qT.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), JT()
                    }
                  }), (0, AT.jsxs)(xT.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      JT()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, AT.jsx)(yT.e, {
                      name: "user-plus"
                    }), " ", TT("socialBar:sendRequest")]
                  })]
                })]
              }), (0, AT.jsx)(ky.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), IT.length > 0 && (0, AT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, AT.jsx)(WO.c, {
                label: TT("socialBar:invites"),
                meta: IT.length
              }), IT.map((kT => (0, AT.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, AT.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, AT.jsx)(iO.b, {
                    invite: kT
                  })
                }), (0, AT.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, AT.jsx)(iO.d, {
                    invite: kT
                  })
                }), (0, AT.jsx)(xT.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, qO.e)(kT)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${kT.destination.kind}`
                  },
                  children: TT("general:join")
                }), (0, AT.jsx)(nT.c, {
                  tooltipInner: (0, AT.jsx)(AT.Fragment, {
                    children: TT("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, AT.jsx)(xT.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === jT || void 0 === jT ? void 0 : jT.kind) && jT.inviteId === kT.id,
                    onClick: () => {
                      RT.b.declineInvite(kT.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${kT.destination.kind}`
                    },
                    children: (0, AT.jsx)(yT.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, kT.id)))]
            }), (0, AT.jsxs)("div", {
              className: KT()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !cT && 0 === fT.length
              }),
              children: [(0, AT.jsx)(WO.c, {
                label: (0, AT.jsxs)(AT.Fragment, {
                  children: [(0, AT.jsx)(yT.e, {
                    name: Ty.h
                  }), " ", TT("socialBar:requests")]
                }),
                meta: (0, AT.jsxs)(AT.Fragment, {
                  children: [fT.length, fT.length === pT.n && (0, AT.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), cT && (0, AT.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, AT.jsx)(FT.d, {})
              }), !cT && 0 === fT.length && (0, AT.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriendRequests")
              }), !cT && fT.length > 0 && (0, AT.jsx)("div", {
                className: "PlayerRows",
                children: (0, AT.jsx)(tM.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [fT],
                  children: fT.map(((kT, cT) => {
                    const lT = ST.get(kT.name);
                    return (0, AT.jsxs)(BO.h, {
                      playerSocialPreview: kT,
                      zIndex: fT.length - cT,
                      padDefaultFocus: (0, cy.f)(jT, kT.name, cT),
                      status: lT && (0, AT.jsx)(nO.e, {
                        gameNameWithVariation: lT.gameNameWithVariation,
                        isPrivateLobby: lT.isPrivateLobby
                      }),
                      children: [(0, AT.jsx)(nT.c, {
                        tooltipInner: (0, AT.jsx)(AT.Fragment, {
                          children: TT("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, AT.jsx)(xT.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tT((0, cy.e)(hT, cT)), (0, sO.g)(kT.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, AT.jsx)(yT.e, {
                            name: "check"
                          })
                        })
                      }), (0, AT.jsx)(nT.c, {
                        tooltipInner: (0, AT.jsx)(AT.Fragment, {
                          children: TT("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, AT.jsx)(xT.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tT((0, cy.e)(hT, cT)), (0, sO.g)(kT.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, AT.jsx)(yT.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${kT.name}_${kT.isError}`)
                  }))
                })
              })]
            }), (0, AT.jsx)(nO.h, {})]
          }), (0, AT.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, AT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, AT.jsx)(WO.c, {
                label: TT("socialBar:party")
              }), (0, AT.jsx)(YO.e, {})]
            }), (0, AT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, AT.jsx)(WO.c, {
                label: (0, AT.jsxs)(AT.Fragment, {
                  children: [(0, AT.jsx)(yT.e, {
                    name: Ty.e
                  }), " ", TT("socialBar:friends")]
                }),
                meta: (0, AT.jsxs)(AT.Fragment, {
                  children: [MT.length, MT.length >= (0, pT.d)(CT.getPlayerRanks()) && (0, AT.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), cT && (0, AT.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, AT.jsx)(FT.d, {})
              }), !cT && 0 === MT.length && (0, AT.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriends")
              }), !cT && MT.length > 0 && (0, AT.jsx)("div", {
                className: "PlayerRows",
                children: (0, AT.jsx)(tM.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [MT],
                  children: MT.map(((TT, cT) => (0, AT.jsx)(BO.h, {
                    playerSocialPreview: TT,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: TT => {
                      RT.b.removeFriendFromState(TT)
                    },
                    zIndex: MT.length - cT,
                    children: (0, AT.jsx)(BO.e, {
                      friend: TT,
                      followsLeader: kT,
                      analyticsSurface: "social_menu"
                    })
                  }, `${TT.name}_${TT.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Ky = cT(2572);
    const Oy = TT => {
        let {
          action: kT,
          padAction: cT
        } = TT;
        const {
          isTouchScreen: lT
        } = (0, PT.n)(["isTouchScreen"]), MT = (0, Ol.s)();
        return lT && !MT ? null : (0, AT.jsx)(sc.b, {
          className: "EverythingMenuTabKey",
          noaAction: kT,
          padHidesKey: !0,
          padMenuShortcut: cT
        })
      },
      yy = (0, lT.memo)((function() {
        const {
          t: TT
        } = (0, OT.B)(), {
          gameState: kT,
          openEverythingMenuName: cT,
          initSdkSelectorFinished: MT,
          crosshairGameView: yT
        } = (0, PT.n)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: fT
        } = (0, vT.b)(), IT = (0, dT.purchasesAllowed)(), CT = (0, XT.I)(), jT = (TT, kT) => (0, AT.jsx)(Oy, {
          action: TT,
          padAction: kT
        }), [tT, hT] = (0, lT.useState)(null), QT = (0, lT.useRef)(null), ST = {
          ..."inGame" === kT ? {} : (0, xT.X)({
            focusOnClick: !1
          }),
          ...hl.g
        }, DT = TT => {
          const kT = (0, Nl.f)((kT => {
            (0, xT.V)(kT.currentTarget), PT.e.set({
              openEverythingMenuName: TT
            })
          }), "pointerup");
          return {
            ...ST,
            onPointerDown: TT => {
              ST.onPointerDown(TT), kT.onPointerDown(TT)
            },
            onPointerUp: TT => {
              ST.onPointerUp(TT), kT.onPointerUp(TT)
            },
            onClick: kT.onClick
          }
        }, aT = null !== cT, FT = cT !== xk.o.COSMETIC_SHOP && !yT;
        async function rT() {
          await async function() {
            if (!tT) return;
            await tT(), hT(null)
          }(), PT.e.set({
            openEverythingMenuName: null
          })
        }
        const wT = (0, lT.useRef)(null),
          mT = (0, lT.useCallback)((() => null !== wT.current && (0, RO.c)(wT.current)), []);

        function zT() {
          mT() || rT()
        }(0, lT.useEffect)((() => (0, KK.w)(mT)), [mT]);
        const JT = (0, lT.useMemo)((() => "inGame" === kT ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            (0, LO.c)()
          }
        } : (0, bT.c)() ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            Kk.k.discordActivity().then((TT => {
              TT.exit("User exited the game")
            }))
          }
        } : null), [kT, TT]);
        const oT = (0, AT.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: zT,
          children: (0, AT.jsx)(xT.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, AT.jsx)(Ql.b, {
          showing: aT,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: cT === xk.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === kT,
          children: (0, AT.jsx)(Dl.e, {
            className: "EverythingMenuContainer",
            show: aT && !yT,
            children: (0, AT.jsx)(Sl.c, {
              close: zT,
              togglePointerLock: !1,
              children: (0, AT.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, KK.n)(cT) && (0, AT.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, AT.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [JT && (0, AT.jsx)(xT.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        JT.onClick()
                      },
                      children: JT.text
                    }), aT && IT && (0, AT.jsx)("div", {
                      ...ST,
                      className: "EverythingMenuWallet",
                      title: TT("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, XT.p)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, AT.jsx)(dO.g, {})
                    })]
                  }), (0, AT.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, AT.jsxs)("div", {
                      ...DT(xk.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": cT === xk.o.SETTINGS ? "true" : void 0,
                      className: KT()("EverythingMenuTab", {
                        EverythingMenuTabActive: cT === xk.o.SETTINGS
                      }),
                      children: [TT("general:settings"), jT("OpenSettings", "pause")]
                    }), (0, AT.jsxs)("div", {
                      ...DT(xk.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": cT === xk.o.CUSTOMISATION ? "true" : void 0,
                      className: KT()("EverythingMenuTab", {
                        EverythingMenuTabActive: cT === xk.o.CUSTOMISATION
                      }),
                      children: [TT("general:player"), jT("OpenCharacterCustomization")]
                    }), NT.featureFlags.useSocialFeatures && (0, AT.jsxs)("div", {
                      ...DT(xk.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": cT === xk.o.SOCIAL ? "true" : void 0,
                      className: KT()("EverythingMenuTab", {
                        EverythingMenuTabActive: cT === xk.o.SOCIAL
                      }),
                      ...(0, qT.e)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, cT === xk.o.SOCIAL),
                      children: [TT("socialBar:social"), (0, AT.jsx)(Ky.d, {})]
                    }), IT && (0, AT.jsxs)("div", {
                      ...DT(xk.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": cT === xk.o.COSMETIC_SHOP ? "true" : void 0,
                      className: KT()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: cT === xk.o.COSMETIC_SHOP
                      }),
                      children: [(0, AT.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: TT("store:title")
                      }), "new" === CT && (0, AT.jsx)(jO, {}), "dot" === CT && (0, AT.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === kT && (0, AT.jsxs)("div", {
                      ...DT(xk.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": cT === xk.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: KT()("EverythingMenuTab", {
                        EverythingMenuTabActive: cT === xk.o.LOBBY_LEADERBOARD
                      }),
                      children: [TT("general:lobby"), jT("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, AT.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: oT
                  })]
                }), (0, KK.n)(cT) && oT, (0, AT.jsxs)("div", {
                  ref: wT,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === kT ? "0.85" : "1"
                  },
                  children: [(0, AT.jsx)(Al, {
                    show: cT === xk.o.SETTINGS,
                    setBeforeResumeCallback: hT
                  }), (0, AT.jsx)(tl, {
                    show: cT === xk.o.CUSTOMISATION
                  }), (0, AT.jsx)(lT.Suspense, {
                    fallback: null,
                    children: (0, AT.jsx)(pM, {
                      show: cT === xk.o.SHOP
                    })
                  }), (0, AT.jsx)(xK, {
                    show: cT === xk.o.LOBBY_LEADERBOARD
                  }), (0, AT.jsx)(XO, {
                    show: cT === xk.o.COSMETIC_SHOP
                  }), (0, AT.jsx)(ly, {
                    show: cT === xk.o.SOCIAL
                  })]
                }), !(0, NT.isMobileApp)() && (0, al.d)(fT.getPlayerRanks()) && (0, AT.jsx)(Dl.e, {
                  ref: QT,
                  className: "EverythingMenuBannerDiv",
                  show: FT,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, AT.jsx)(gO.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: QT
                    },
                    showing: aT && FT,
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
  9362: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(339),
      MT = cT(9369);

    function KT(TT, kT, cT) {
      const KT = Object.entries(kT).sort(((TT, kT) => kT[1] - TT[1])),
        OT = (0, lT.hb)(TT);
      OT.push(TT ? "\n\n" : "\n");
      for (const [MT, vT] of KT) {
        var yT, fT, xT;
        const TT = null !== (yT = null === cT || void 0 === cT || null === (fT = cT[MT]) || void 0 === fT ? void 0 : fT.icon) && void 0 !== yT ? yT : `${MT} Enchantment`;
        OT.push({
          icon: TT,
          style: {
            fontSize: "1.5rem"
          }
        }), OT.push({
          str: `${MT} ${null!==(xT=(0,lT.N)(vT))&&void 0!==xT?xT:vT}\n`
        })
      }
      OT.push({
        str: "\n"
      });
      for (const [lT, vT] of KT) {
        var IT, AT, CT, jT;
        const TT = null !== (IT = null === cT || void 0 === cT || null === (AT = cT[lT]) || void 0 === AT ? void 0 : AT.icon) && void 0 !== IT ? IT : `${lT} Enchantment`,
          kT = null !== (CT = null === cT || void 0 === cT || null === (jT = cT[lT]) || void 0 === jT ? void 0 : jT.description) && void 0 !== CT ? CT : (0, MT.l)(lT);
        OT.push({
          icon: TT,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), OT.push({
          str: kT,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), OT.push({
          str: "\n"
        })
      }
      return OT
    }
  },
  9375: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      d: () => QT,
      g: () => hT,
      i: () => fT,
      m: () => NT,
      o: () => IT,
      s: () => CT,
      v: () => tT,
      y: () => AT
    });
    var lT = cT(328),
      MT = cT(617),
      KT = cT(339),
      OT = cT(4224),
      yT = cT(9362);

    function fT(TT, kT) {
      var cT;
      let {
        player: lT,
        chestOrCreative: MT
      } = TT;
      var KT;
      return kT < lT.length ? null !== (KT = lT[kT]) && void 0 !== KT ? KT : null : null !== (cT = MT[kT - lT.length]) && void 0 !== cT ? cT : null
    }

    function xT(TT) {
      var kT;
      return null !== (kT = TT.amount) && void 0 !== kT ? kT : 0
    }

    function IT(TT) {
      return 0 === TT.button || void 0 === TT.button
    }

    function AT(TT) {
      return !!TT.shiftKey
    }

    function CT(TT) {
      return "touches" in TT || "touch" === TT.pointerType || "pen" === TT.pointerType
    }
    const jT = new Set,
      vT = 50;

    function tT(TT, kT) {
      var cT;
      const lT = null === (cT = TT[kT]) || void 0 === cT ? void 0 : cT.displayName;
      return (0, MT.R)(lT) ? "string" !== typeof kT ? "" : (!jT.has(kT) && jT.size < vT && (jT.add(kT), console.warn(`No item called "${kT}", so its hover shows the name as given`)), kT) : lT
    }

    function hT(TT, kT, cT) {
      var fT, xT, IT, AT, CT, jT, vT, hT, NT, QT, ST, DT, aT, FT;
      const rT = TT.attributes,
        PT = null !== (fT = null === (xT = kT[TT.name]) || void 0 === xT ? void 0 : xT.rootName) && void 0 !== fT ? fT : TT.name,
        wT = null !== (IT = null !== (AT = rT.customDisplayName) && void 0 !== AT ? AT : null === (CT = kT[TT.name]) || void 0 === CT ? void 0 : CT.displayName) && void 0 !== IT ? IT : tT(kT, PT);
      let mT = wT;
      const bT = null === (jT = rT.customAttributes) || void 0 === jT ? void 0 : jT.enchantmentTier;
      bT && (mT = (0, KT.hb)(wT, {
        colour: KT.fb[bT]
      }));
      const zT = null !== (vT = null !== (hT = null !== (NT = function(TT, kT) {
        var cT;
        if (void 0 === TT || null !== (cT = kT.customAttributes) && void 0 !== cT && cT.author) return TT;
        const MT = (0, lT.Pb)(TT);
        return MT.every((TT => "string" === typeof TT)) ? TT : MT.map((TT => "string" === typeof TT ? TT : {
          icon: TT.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(rT.customDescription, rT)) && void 0 !== NT ? NT : null === (QT = kT[TT.name]) || void 0 === QT ? void 0 : QT.description) && void 0 !== hT ? hT : null === (ST = kT[PT]) || void 0 === ST ? void 0 : ST.description) && void 0 !== vT ? vT : "";
      let JT = zT;
      if (null !== (DT = rT.customAttributes) && void 0 !== DT && DT.enchantments) JT = (0, yT.c)(zT, rT.customAttributes.enchantments, rT.customAttributes.enchantmentData);
      else if (cT[PT]) JT = (0, KT.hb)(zT), JT.push({
        str: "\n"
      }), JT.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (aT = rT.customAttributes) && void 0 !== aT && aT.mobSettings) {
        var oT, HT;
        const TT = rT.customAttributes.mobSettings;
        var eT, GT;
        if (JT = [], (0, MT.R)(rT.customAttributes.health) || (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: rT.customAttributes.health.toString()
          }), (0, MT.R)(TT.maxHealth) || (JT.push({
            str: "/"
          }), JT.push({
            str: TT.maxHealth.toString()
          }))), !(0, MT.R)(TT.attackDamage) && TT.attackDamage > 0 && (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.attackDamage.toString()
          })), !(0, MT.R)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.secondaryAttackDamage.toString()
          })), (0, MT.R)(TT.baseRunningSpeed) || (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.baseRunningSpeed.toFixed(2)
          })), "Saddled" === TT.metaInfo) JT.push({
          str: "\n"
        }), JT.push({
          str: {
            translationKey: "general:has"
          }
        }), JT.push({
          str: " "
        }), JT.push({
          icon: null !== (eT = null === (GT = TT.tameInfo) || void 0 === GT ? void 0 : GT.saddleItemName) && void 0 !== eT ? eT : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (JT.push({
            str: "\n"
          }), JT.push({
            str: "\n"
          }), TT.petInfo && null !== (oT = TT.tameInfo) && void 0 !== oT && oT.supportsFriendship) {
          const kT = OT.d.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
          for (const TT of kT) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: "\n"
          });
          const cT = OT.d.getMobHungerLevel(TT.petInfo.lastFedAt);
          for (const TT of OT.d.hungerLevelIcons[cT]) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: " "
          }), JT.push({
            str: OT.d.hungerLevelTranslations[cT],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (TT.tameInfo && null !== (HT = TT.tameInfo) && void 0 !== HT && HT.supportsFriendship) {
          var VT, ET;
          let kT = null !== (VT = TT.tameInfo.likedFoods) && void 0 !== VT ? VT : [];
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Superliked]
            }
          }), JT.push({
            str: " "
          }), null !== (ET = TT.petInfo) && void 0 !== ET && ET.superlikedFoodKnown ? (JT.push({
            icon: TT.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), kT = kT.filter((kT => kT !== TT.petInfo.superlikedFood))) : JT.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Liked]
            }
          }), JT.push({
            str: " "
          });
          for (const TT of kT) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Neutral]
            }
          }), JT.push({
            str: " "
          });
          for (const cT of null !== (ZT = TT.tameInfo.neutralFoods) && void 0 !== ZT ? ZT : []) {
            var ZT;
            JT.push({
              icon: cT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Disliked]
            }
          }), JT.push({
            str: " "
          });
          for (const cT of null !== (uT = TT.tameInfo.dislikedFoods) && void 0 !== uT ? uT : []) {
            var uT;
            JT.push({
              icon: cT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        JT.length > 0 ? (JT.shift(), JT.unshift(...(0, KT.hb)(zT))) : JT = (0, KT.hb)(zT)
      }
      return {
        name: mT,
        desc: JT,
        fontStyle: null !== (FT = rT.customAttributes) && void 0 !== FT && FT.author ? "italic" : "normal"
      }
    }

    function NT(TT, kT, cT, lT) {
      const MT = fT(TT, cT),
        KT = fT(TT, lT);
      if (!MT) return !1;
      const OT = kT[MT.name].armourReduction,
        yT = kT[KT.name].armourReduction;
      if (yT === OT) {
        var xT, IT, AT, CT;
        const TT = null !== (xT = null === (IT = MT.attributes.customAttributes) || void 0 === IT ? void 0 : IT.enchantmentTier) && void 0 !== xT ? xT : "Tier 0",
          kT = null !== (AT = null === (CT = KT.attributes.customAttributes) || void 0 === CT ? void 0 : CT.enchantmentTier) && void 0 !== AT ? AT : "Tier 0";
        return parseInt(TT.replace("Tier ", "")) >= parseInt(kT.replace("Tier ", ""))
      }
      return OT > yT
    }

    function QT(TT) {
      let kT;
      if ("number" === typeof TT) {
        const cT = document.querySelector(`[data-inven-idx="${TT}"]`);
        if (!cT) return null;
        kT = cT.getBoundingClientRect()
      } else kT = TT.getBoundingClientRect();
      return {
        x: kT.left + kT.width / 2,
        y: kT.top + kT.height / 2
      }
    }
  },
  9250: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      f: () => vT,
      i: () => tT
    });
    var lT = cT(1470),
      MT = cT(71),
      KT = cT(1316),
      OT = cT(4515),
      yT = cT(2395),
      fT = cT(1195),
      xT = cT(118),
      IT = cT(1996),
      AT = cT(1348),
      CT = cT(1099);

    function jT(TT) {
      let {
        show: kT,
        onClose: cT
      } = TT;
      const {
        requestedGameNameWithVariation: lT,
        lobbyName: MT,
        shownLobbyName: KT
      } = (0, IT.h)("connectedGame"), fT = (0, yT.b)(lT, MT, !1);
      return xT.featureFlags.canUseInviteLinks && (0, CT.jsx)(OT.c, {
        show: kT,
        close: cT,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, CT.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, CT.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, CT.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, CT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === fT ? (0, CT.jsx)(AT.d, {}) : fT, (0, CT.jsx)("br", {}), "Lobby Name: ", KT, (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, CT.jsx)(vT, {})]
        })
      })
    }

    function vT() {
      var TT;
      const {
        t: kT
      } = (0, fT.B)(), cT = null !== (TT = tT(xT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [KT, OT] = (0, MT.useState)(0), [yT, IT] = (0, MT.useReducer)((TT => TT + 1), 0);
      return (0, MT.useEffect)((() => {
        const TT = setTimeout((() => {
          IT()
        }), 1100);
        return () => {
          clearTimeout(TT)
        }
      }), [KT]), xT.featureFlags.canUseInviteLinks && (0, CT.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, CT.jsx)("div", {
          className: "InviteLinkInner",
          children: cT
        }), (0, CT.jsx)(lT.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(cT).catch((TT => {
              console.error("Failed to copy invite link:", TT)
            })), OT(Date.now())
          },
          disabled: Date.now() - KT < 1e3,
          children: Date.now() - KT < 1e3 ? kT("general:copied") : kT("general:copy")
        })]
      })
    }

    function tT(TT) {
      const [kT, cT] = (0, MT.useState)(null);
      return (0, MT.useEffect)((() => {
        if (!TT) return;
        let kT = !0;
        return (0, KT.u)().then((TT => {
          kT && cT(TT)
        })).catch((TT => {
          console.error("Failed to get invite link:", TT)
        })), () => {
          kT = !1
        }
      }), [TT]), kT
    }
  },
  9354: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1996),
      yT = cT(1099);

    function fT(TT) {
      const kT = Math.floor(TT / 3600),
        cT = Math.floor(TT % 3600 / 60),
        lT = Math.floor(TT % 60),
        MT = `${cT.toString().padStart(2,"0")}:${lT.toString().padStart(2,"0")}`;
      return kT > 0 ? `${kT}:${MT}` : MT
    }
    const xT = (0, lT.memo)((function(TT) {
      let {
        className: kT
      } = TT;
      const {
        recording: cT,
        seconds: lT
      } = (0, OT.h)("replayRecorder");
      return cT ? (0, yT.jsxs)("div", {
        className: KT()("RecordingIndicator", kT),
        children: [(0, yT.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, yT.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, yT.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: fT(lT)
        })]
      }) : null
    }))
  },
  4843: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => hT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4626),
      OT = cT(1195),
      yT = cT(1061),
      fT = cT(1470),
      xT = cT(1518),
      IT = cT(1363),
      AT = cT(2553),
      CT = cT(1099);
    const jT = {
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

    function vT(TT) {
      let {
        platform: kT
      } = TT;
      const cT = "youtube" === kT;
      return (0, CT.jsxs)("span", {
        className: MT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cT
        }),
        children: [cT && (0, CT.jsx)(AT.c, {
          variant: "white"
        }), !cT && (0, CT.jsx)(yT.e, {
          name: jT[kT].icon,
          kit: "brands"
        })]
      })
    }

    function tT(TT) {
      let {
        platform: kT,
        link: cT,
        editable: lT,
        userContext: MT,
        onLinksUpdated: AT
      } = TT;
      const {
        t: tT
      } = (0, OT.B)(), hT = jT[kT];
      if (!cT && !lT) return null;

      function NT() {
        var TT;
        if (!MT || !AT) return;
        IT.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hT.name
            }
          },
          prefixText: KT.x[kT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === cT || void 0 === cT ? void 0 : cT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await xT.d.setSocialLink(MT, kT, TT.value) : await xT.d.clearSocialLink(MT, kT), AT()
          } catch (cT) {
            console.error("Failed to update social link", cT), IT.NotificationProvider.showAlertPopup({
              title: cT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cT) {
        const TT = `@${cT.handle}`;
        return (0, CT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hT.color
          },
          href: cT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, CT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, CT.jsx)(vT, {
              platform: kT
            }), (0, CT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, CT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), lT && (0, CT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, fT.X)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), NT()
            },
            children: (0, CT.jsx)(yT.e, {
              name: "pen-to-square"
            })
          }), !lT && (0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, CT.jsx)(yT.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, CT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hT.color
        },
        ...(0, fT.X)(),
        onClick: () => {
          NT()
        },
        children: [(0, CT.jsx)(vT, {
          platform: kT
        }), (0, CT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hT.name
          }), (0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: tT("homePage:profileSocialLinkAdd")
          })]
        }), (0, CT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, CT.jsx)(yT.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hT(TT) {
      let {
        socialLinks: kT,
        editable: cT = !1,
        userContext: lT,
        onLinksUpdated: MT
      } = TT;
      if (!cT && 0 === kT.length) return null;
      const OT = new Map(kT.map((TT => [TT.platform, TT]))),
        yT = cT ? KT.v : kT.map((TT => TT.platform));
      return (0, CT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, CT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: yT.map((TT => (0, CT.jsx)(tT, {
            platform: TT,
            link: OT.get(TT),
            editable: cT,
            userContext: lT,
            onLinksUpdated: MT
          }, TT)))
        })
      })
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  9406: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(71),
      MT = cT(3536);

    function KT() {
      const [TT, kT] = (0, lT.useState)(!1);
      return (0, lT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, MT.e)().then((() => {
          TT && kT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  6563: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(71),
      MT = cT(47);

    function KT(TT, kT) {
      var cT;
      const [KT, OT] = (0, lT.useState)(null !== (cT = MT.e.getItem(TT)) && void 0 !== cT ? cT : kT);
      return [KT, kT => {
        MT.e.setItem(TT, kT), OT(kT)
      }]
    }
  },
  9329: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => tT,
      f: () => vT
    });
    cT(9332);
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(9302);

    function yT(TT, kT) {
      return Math.max(1, Math.round(TT * kT))
    }

    function fT(TT, kT) {
      const cT = kT * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        lT = function(TT, kT) {
          if (TT.lines) return yT(TT.lineThickness, kT) % 2;
          if (TT.dot) return yT(TT.dotSize, kT) % 2;
          return xT(TT, kT) % 2
        }(TT, kT),
        MT = IT(TT.lineThickness * cT, lT),
        KT = yT(TT.lineLength, cT),
        OT = Math.round(TT.gap * cT),
        fT = TT.outline > 0 ? yT(TT.outline, cT) : 0,
        CT = [];
      if (TT.lines && (CT.push({
          x: MT + OT,
          y: 0,
          w: KT,
          h: MT,
          arm: "right"
        }), CT.push({
          x: -OT - KT,
          y: 0,
          w: KT,
          h: MT,
          arm: "left"
        }), CT.push({
          x: 0,
          y: MT + OT,
          w: MT,
          h: KT,
          arm: "down"
        }), TT.tStyle || CT.push({
          x: 0,
          y: -OT - KT,
          w: MT,
          h: KT,
          arm: "up"
        }), 0 === OT && CT.push({
          x: 0,
          y: 0,
          w: MT,
          h: MT
        })), TT.dot) {
        const kT = IT(TT.dotSize * cT, lT),
          KT = TT.lines && 0 === OT && TT.dotSize > TT.lineThickness ? Math.max(kT, MT + 2) : kT,
          yT = (MT - KT) / 2;
        CT.push({
          x: yT,
          y: yT,
          w: KT,
          h: KT
        })
      }
      const jT = CT.map((TT => ({
        ...TT,
        x: TT.x - fT,
        y: TT.y - fT,
        w: TT.w + 2 * fT,
        h: TT.h + 2 * fT
      })));
      let vT = null,
        tT = null;
      if (TT.circle) {
        const kT = yT(TT.circleThickness, cT),
          KT = function(TT, kT) {
            return TT + (TT % 2 === kT ? 0 : 1)
          }(xT(TT, cT), lT),
          OT = (MT - KT) / 2;
        vT = AT(OT, KT, kT), fT > 0 && (tT = AT(OT - fT, KT + 2 * fT, kT + 2 * fT))
      }
      return {
        cell: MT,
        fills: CT,
        outlines: fT > 0 ? jT : [],
        ring: vT,
        ringOutline: tT
      }
    }

    function xT(TT, kT) {
      return Math.round(TT.circleRadius * kT * 2 + yT(TT.circleThickness, kT))
    }

    function IT(TT, kT) {
      return Math.max(2 - kT, 2 * Math.round((TT - kT) / 2) + kT)
    }

    function AT(TT, kT, cT) {
      const lT = 2 * cT >= kT - 1;
      return {
        x: TT,
        y: TT,
        size: kT,
        border: Math.min(cT, Math.floor(kT / 2)),
        filled: lT
      }
    }
    var CT = cT(1099);
    const jT = 1.4;

    function vT(TT, kT) {
      return TT && kT ? `scale(${jT})` : "scale(1)"
    }

    function tT(TT) {
      return "classic" === TT.settings.style ? (0, CT.jsx)(QT, {
        ...TT
      }) : (0, CT.jsx)(wT, {
        ...TT
      })
    }
    const hT = .125;

    function NT(TT, kT) {
      const cT = {};
      if (TT.color !== OT.g.color && (cT.color = (0, OT.m)(TT.color)), TT.opacity !== OT.g.opacity && (cT.opacity = TT.opacity / 100), TT.outline !== OT.g.outline || TT.outlineColor !== OT.g.outlineColor) {
        const kT = TT.outline,
          lT = (0, OT.m)(TT.outlineColor);
        cT.textShadow = kT > 0 ? `-${kT}px 0 ${lT}, 0 ${kT}px ${lT}, ${kT}px 0 ${lT}, 0 -${kT}px ${lT}` : "none"
      }
      if (TT.size !== OT.g.size) {
        const lT = TT.size / 100;
        cT.fontSize = kT ? `calc(max(1.3rem, 18px) * ${lT})` : `calc(1.3rem * ${lT})`, cT.marginTop = `-${hT}em`, cT.transformOrigin = `50% calc(50% + ${hT}em)`
      }
      return cT
    }

    function QT(TT) {
      let {
        settings: kT,
        touch: cT,
        inPreview: lT,
        inEditor: KT,
        pressed: OT = !1,
        pressRef: yT
      } = TT;
      return (0, CT.jsx)("div", {
        className: MT()("Crosshair", {
          Touch: cT,
          CrosshairInPreview: lT,
          CrosshairInEditor: KT || lT
        }),
        ref: yT,
        style: {
          transform: vT(OT, kT.growOnClick),
          ...NT(kT, cT)
        },
        children: "+"
      })
    }

    function ST(TT, kT) {
      return TT / kT + "px"
    }

    function DT(TT, kT, cT, lT) {
      return {
        ...rT(TT, kT, cT),
        width: ST(TT.w, cT),
        height: ST(TT.h, cT),
        background: lT
      }
    }

    function aT(TT, kT, cT) {
      return {
        left: ST(TT.x, kT),
        top: ST(TT.y, kT),
        width: ST(TT.size, kT),
        height: ST(TT.size, kT),
        borderWidth: ST(TT.border, kT),
        borderColor: cT,
        background: TT.filled ? cT : void 0
      }
    }
    const FT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rT(TT, kT, cT) {
      const [lT, MT] = TT.arm ? FT[TT.arm] : [0, 0], KT = Math.round(kT * cT);
      return {
        left: ST(TT.x + lT * KT, cT),
        top: ST(TT.y + MT * KT, cT)
      }
    }

    function PT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function wT(TT) {
      let {
        settings: kT,
        inPreview: cT,
        inEditor: lT,
        pressed: yT = !1,
        spread: xT,
        spreadRef: IT
      } = TT;
      const AT = (0, KT.useRef)(null),
        {
          box: vT,
          dpr: tT
        } = function(TT) {
          const [kT, cT] = (0, KT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, KT.useLayoutEffect)((() => {
            const kT = TT.current;
            if (!kT) return;
            const lT = () => {
              const TT = kT.getBoundingClientRect(),
                lT = window.devicePixelRatio || 1;
              cT((kT => kT.dpr === lT && kT.box.left === TT.left && kT.box.top === TT.top && kT.box.width === TT.width && kT.box.height === TT.height ? kT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: lT
              }))
            };
            lT();
            const MT = new ResizeObserver(lT);
            return MT.observe(kT), window.addEventListener("resize", lT), window.addEventListener("scroll", lT, !0), () => {
              MT.disconnect(), window.removeEventListener("resize", lT), window.removeEventListener("scroll", lT, !0)
            }
          }), [TT]), kT
        }(AT),
        hT = (0, KT.useRef)(tT);
      hT.current = tT;
      const NT = fT(kT, tT, yT && kT.growOnClick ? jT : 1),
        QT = function(TT, kT, cT) {
          const lT = Math.round((TT.left + TT.width / 2) * cT - kT / 2),
            MT = Math.round((TT.top + TT.height / 2) * cT - kT / 2);
          return {
            x: lT / cT - TT.left,
            y: MT / cT - TT.top
          }
        }(vT, NT.cell, tT),
        ST = (0, OT.m)(kT.color),
        FT = (0, OT.m)(kT.outlineColor),
        wT = (0, KT.useRef)(0);
      (0, KT.useLayoutEffect)((() => {
        if (IT) return IT.current = TT => {
          var kT;
          wT.current = TT, null === (kT = AT.current) || void 0 === kT || kT.querySelectorAll("[data-arm]").forEach((kT => {
            Object.assign(kT.style, rT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(kT), TT, hT.current))
          }))
        }, () => {
          IT.current = null
        }
      }), [IT]);
      const mT = null !== xT && void 0 !== xT ? xT : wT.current;
      return (0, CT.jsx)("div", {
        ref: AT,
        className: MT()("CrosshairShapes", {
          CrosshairInPreview: cT,
          CrosshairInEditor: lT || cT,
          CrosshairSpreads: void 0 !== IT
        }),
        children: (0, CT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: QT.x,
            top: QT.y,
            opacity: kT.opacity / 100
          },
          children: (0, CT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [NT.ringOutline && (0, CT.jsx)("div", {
              className: "CrosshairRing",
              style: aT(NT.ringOutline, tT, FT)
            }), NT.outlines.map(((TT, kT) => (0, CT.jsx)("div", {
              className: "CrosshairPart",
              ...PT(TT),
              style: DT(TT, mT, tT, FT)
            }, `o${kT}`))), NT.ring && (0, CT.jsx)("div", {
              className: "CrosshairRing",
              style: aT(NT.ring, tT, ST)
            }), NT.fills.map(((TT, kT) => (0, CT.jsx)("div", {
              className: "CrosshairPart",
              ...PT(TT),
              style: DT(TT, mT, tT, ST)
            }, `f${kT}`)))]
          })
        })
      })
    }
  },
  9337: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      e: () => hT,
      i: () => tT
    });
    var lT = cT(9302);
    const MT = "XH1-",
      KT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      OT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      yT = ["color", "outlineColor"],
      fT = 1 + 3 * yT.length + OT.length + 1,
      xT = Math.ceil(8 * fT / Math.log2(62)),
      IT = MT.length + xT;

    function AT(TT) {
      let kT = 90;
      for (const cT of TT) kT = 31 * kT + cT & 255;
      return kT
    }
    const CT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      jT = BigInt(CT.length);

    function vT(TT, kT) {
      let cT = 0n;
      for (const MT of TT) {
        const TT = CT.indexOf(MT);
        if (TT < 0) return null;
        cT = cT * jT + BigInt(TT)
      }
      if (cT >> BigInt(8 * kT) !== 0n) return null;
      const lT = [];
      for (let MT = 0; MT < kT; MT++) lT.unshift(Number(0xffn & cT)), cT >>= 8n;
      return lT
    }

    function tT(TT) {
      let kT = "shapes" === TT.style ? 1 : 0;
      KT.forEach(((cT, lT) => {
        TT[cT] && (kT |= 1 << lT + 1)
      }));
      const cT = [kT];
      for (const MT of yT) {
        const kT = (0, lT.k)(MT, TT[MT]);
        cT.push(kT >> 16 & 255, kT >> 8 & 255, 255 & kT)
      }
      for (const MT of OT) {
        const {
          min: kT,
          step: KT
        } = lT.c[MT];
        cT.push(Math.round(((0, lT.k)(MT, TT[MT]) - kT) / KT))
      }
      return cT.push(AT(cT)), MT + function(TT, kT) {
        let cT = 0n;
        for (const MT of TT) cT = cT << 8n | BigInt(MT);
        let lT = "";
        for (let MT = 0; MT < kT; MT++) lT = CT[Number(cT % jT)] + lT, cT /= jT;
        return lT
      }(cT, xT)
    }

    function hT(TT) {
      for (const kT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${xT}})`, "gi"))) {
        const TT = NT(vT(kT[1], fT));
        if (TT) return TT
      }
      return null
    }

    function NT(TT) {
      if (!TT || TT.length !== fT || AT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const kT = TT[0],
        cT = {
          ...lT.g,
          style: 1 & kT ? "shapes" : "classic"
        };
      KT.forEach(((TT, lT) => {
        cT[TT] = 0 !== (kT & 1 << lT + 1)
      }));
      let MT = 1;
      for (const lT of yT) cT[lT] = TT[MT] << 16 | TT[MT + 1] << 8 | TT[MT + 2], MT += 3;
      for (const KT of OT) {
        const {
          min: kT,
          step: OT
        } = lT.c[KT];
        cT[KT] = (0, lT.k)(KT, kT + TT[MT] * OT), MT++
      }
      return cT
    }
  },
  9302: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      g: () => MT,
      k: () => KT,
      m: () => xT,
      o: () => fT,
      r: () => IT,
      u: () => yT,
      x: () => OT
    });
    const lT = {
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
      MT = Object.freeze({
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

    function KT(TT, kT) {
      var cT;
      const {
        min: KT,
        max: OT,
        step: yT
      } = lT[TT];
      if (!Number.isFinite(kT)) return MT[TT];
      const fT = (null !== (cT = String(yT).split(".")[1]) && void 0 !== cT ? cT : "").length,
        xT = Number((Math.round(kT / yT) * yT).toFixed(fT));
      return Math.min(OT, Math.max(KT, xT))
    }

    function OT(TT, kT, cT) {
      const lT = "number" === typeof cT ? KT(kT, cT) : cT;
      return {
        ...TT,
        [kT]: lT
      }
    }

    function yT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(MT).every((lT => cT.includes(lT) || TT[lT] === kT[lT]))
    }

    function fT(TT) {
      return yT(TT, MT)
    }

    function xT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function IT(TT) {
      const kT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return kT ? parseInt(kT[1], 16) : null
    }
  },
  9346: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT,
      e: () => CT
    });
    var lT = cT(71),
      MT = cT(47),
      KT = cT(9337),
      OT = cT(9302);
    const yT = "crosshairCode";
    let fT = null;
    const xT = new Set;

    function IT() {
      if (null === fT) {
        var TT;
        const kT = MT.e.getItem(yT);
        fT = null !== (TT = "string" === typeof kT ? (0, KT.e)(kT) : null) && void 0 !== TT ? TT : OT.g
      }
      return fT
    }

    function AT(TT) {
      fT = TT, (0, OT.o)(TT) ? MT.e.removeItem(yT) : MT.e.setItem(yT, (0, KT.i)(TT));
      for (const kT of xT) kT()
    }

    function CT() {
      const [TT, kT] = (0, lT.useState)(IT);
      return (0, lT.useEffect)((() => {
        const TT = () => {
          kT(IT())
        };
        return TT(), cT = TT, xT.add(cT), () => {
          xT.delete(cT)
        };
        var cT
      }), []), TT
    }
  },
  8918: (TT, kT, cT) => {
    function lT(TT) {
      return {
        x: (TT.left + TT.right) / 2,
        y: (TT.top + TT.bottom) / 2
      }
    }

    function MT(TT) {
      return 0 === TT.length ? null : TT.reduce(((TT, kT) => ({
        left: Math.min(TT.left, kT.left),
        top: Math.min(TT.top, kT.top),
        right: Math.max(TT.right, kT.right),
        bottom: Math.max(TT.bottom, kT.bottom)
      })))
    }

    function KT(TT, kT) {
      const cT = Math.max(0, (kT - (TT.right - TT.left)) / 2),
        lT = Math.max(0, (kT - (TT.bottom - TT.top)) / 2);
      return {
        left: TT.left - cT,
        top: TT.top - lT,
        right: TT.right + cT,
        bottom: TT.bottom + lT
      }
    }

    function OT(TT, kT) {
      return kT.x >= TT.left && kT.x <= TT.right && kT.y >= TT.top && kT.y <= TT.bottom
    }

    function yT(TT, kT, cT) {
      let MT = null,
        yT = 1 / 0;
      for (const {
          id: lT,
          box: KT
        }
        of kT) {
        const kT = (KT.right - KT.left) * (KT.bottom - KT.top);
        OT(KT, TT) && kT < yT && (yT = kT, MT = lT)
      }
      if (null !== MT) return MT;
      let fT = 1 / 0;
      for (const {
          id: xT,
          box: IT
        }
        of kT) {
        if (!OT(KT(IT, cT), TT)) continue;
        const kT = lT(IT),
          yT = Math.hypot(TT.x - kT.x, TT.y - kT.y);
        yT < fT && (fT = yT, MT = xT)
      }
      return MT
    }

    function fT(TT, kT, cT) {
      return {
        left: cT.left,
        top: cT.top,
        right: TT - cT.right,
        bottom: kT - cT.bottom
      }
    }

    function xT(TT, kT, cT, lT) {
      const MT = (TT, kT, cT) => Math.max(Math.min(kT, 0), Math.min(Math.max(cT, 0), TT));
      return {
        x: MT(kT, lT.left - TT.left, lT.right - TT.right),
        y: MT(cT, lT.top - TT.top, lT.bottom - TT.bottom)
      }
    }

    function IT(TT, kT, cT, lT, MT) {
      const KT = TT.dx * lT + kT,
        OT = TT.dy * MT + cT,
        yT = TT => Math.max(-1, Math.min(1, TT));
      return {
        dx: yT(KT / lT),
        dy: yT(OT / MT)
      }
    }

    function AT(TT, kT, cT, lT) {
      return kT <= 0 || cT <= 0 ? 1 : Math.max(.05, Math.min(1, TT / kT, lT / cT))
    }

    function CT(TT, kT, cT) {
      return Math.min(TT.right, kT.right) - Math.max(TT.left, kT.left) > cT && Math.min(TT.bottom, kT.bottom) - Math.max(TT.top, kT.top) > cT
    }

    function jT(TT, kT) {
      const cT = (TT, kT, cT, lT) => kT - TT > lT - cT ? cT - TT > kT - lT ? lT - kT : cT - TT : TT < cT ? cT - TT : kT > lT ? lT - kT : 0;
      return {
        x: cT(TT.left, TT.right, kT.left, kT.right),
        y: cT(TT.top, TT.bottom, kT.top, kT.bottom)
      }
    }

    function vT(TT, kT) {
      let {
        avoid: cT = null,
        bounds: lT = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, MT = 0, KT = 1 / 0;
      return TT.forEach(((TT, OT) => {
        const yT = kT.filter((kT => CT(TT, kT, 0))).length,
          fT = null !== lT && (TT.left < lT.left || TT.top < lT.top || TT.right > lT.right || TT.bottom > lT.bottom),
          xT = yT + (cT && CT(TT, cT, 0) ? 1e3 : 0) + (fT ? 1e6 : 0);
        xT < KT && (MT = OT, KT = xT)
      })), MT
    }
    cT.d(kT, {
      B: () => jT,
      E: () => MT,
      b: () => lT,
      d: () => OT,
      f: () => CT,
      j: () => xT,
      k: () => KT,
      o: () => vT,
      s: () => IT,
      v: () => yT,
      y: () => AT,
      z: () => fT
    })
  },
  9298: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => MT
    });
    var lT = cT(31);

    function MT(TT, kT) {
      return TT && !kT
    }

    function KT() {
      return MT(lT.e.get("isTouchScreen"), lT.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8691: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      g: () => lT
    });
    const lT = "controllerOpenKeyboard",
      MT = "controllerKeyboardVisible"
  },
  9242: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = new Set(["chunkBorders"])
  },
  9233: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ALL_DEV_TOOLS: () => OT,
      coreDevTools: () => xT,
      devTools: () => fT
    });
    var lT = cT(636),
      MT = cT(1303),
      KT = cT(9242);
    const OT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function yT() {
      const {
        noaDevTools: TT
      } = await cT.e(231).then((() => cT(40684)));
      return TT
    }
    const fT = new class {
        constructor() {
          this.loadHost = yT, this.tools = OT
        }
        setHost(TT) {
          this.tools = null === TT ? OT : TT.tools, this.loadHost = null === TT ? yT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, kT) {
          const cT = await this.loadHost();
          await cT.downloadScene(TT, kT)
        }
        async setAmbientLightIntensity(TT) {
          const kT = await this.loadHost();
          await kT.setAmbientLightIntensity(TT)
        }
      },
      xT = {
        tools: KT.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    lT.x && fT.setHost(xT), (0, MT.w)((() => {
      fT.setHost(xT)
    }))
  },
  9403: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => MT,
      f: () => IT
    });
    var lT = cT(1578);

    function MT(TT) {
      var kT;
      return {
        ...OT.store,
        yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
      }
    }
    const KT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      OT = {
        player: KT,
        store: {
          ...KT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function yT(TT, kT) {
      TT instanceof Promise ? TT.then(kT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : kT(TT)
    }
    class fT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var kT;
        this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class xT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, kT;
        return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, kT) {
        var cT;
        null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
      }
      playEmote(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
      }
      setOrbit(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var kT;
        await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const IT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new fT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new fT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new fT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, kT) {
        return new xT(this.current().openCharacter(TT, kT))
      }
    }
  },
  9395: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.c,
      e: () => lT.d,
      f: () => lT.f
    });
    var lT = cT(9403);
    class MT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class KT {
      constructor() {
        this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(154)]).then((() => cT(40701))))), this.characterScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(153)]).then((() => cT(40795)))))
      }
      openMob(TT) {
        return this.mobScene.run((kT => kT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((kT => kT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((kT => kT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, kT) {
        return this.characterScene.run((cT => cT.openCharacterPreview(TT, kT)))
      }
    }
    lT.f.setDefaultHost((() => new KT))
  },
  6647: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(47);
    const MT = "shaderPack";
    async function KT() {
      var TT;
      let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await lT.d.getItem(MT, kT)) && void 0 !== TT ? TT : null
    }
  },
  9266: (TT, kT, cT) => {
    function lT(TT, kT) {
      return TT && !kT
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  9294: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(1082);

    function MT() {
      var TT, kT;
      return null !== (TT = null === (kT = screen.orientation) || void 0 === kT ? void 0 : kT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const KT = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && MT() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = MT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, lT.vt)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const TT of this.resizers) TT()
          }
        }), 1e3)
      }
      heldSizer(TT) {
        let kT = !1;
        return () => {
          if (kT && this.isHeld()) return null;
          const cT = TT();
          return kT ||= null !== cT, cT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  8911: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      f: () => fT
    });
    var lT = cT(31),
      MT = cT(1327),
      KT = cT(118);
    const OT = {
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

    function yT() {
      return (0, KT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const fT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, kT) {
        var cT;
        if (!this.deps.enabled()) return;
        const lT = OT[TT],
          MT = null !== kT && void 0 !== kT ? kT : lT.pattern;
        if (null === MT) return void console.warn("No vibration pattern for", TT);
        const KT = this.deps.now();
        KT - this.lastAnyAt < 40 && lT.priority < this.playingPriority || KT - (null !== (cT = this.lastAt.get(TT)) && void 0 !== cT ? cT : -1 / 0) < lT.minGapMs || KT < this.playingUntil && lT.priority < this.playingPriority || (this.lastAt.set(TT, KT), this.lastAnyAt = KT, this.playingUntil = KT + MT.reduce(((TT, kT) => TT + kT), 0), this.playingPriority = lT.priority, this.deps.vibrate(MT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => yT() && lT.e.get("isTouchScreen") && lT.e.get("clientEscMenuOptions").vibration && !(0, MT.e)()
    })
  },
  9259: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      e: () => CT
    });
    var lT = cT(31),
      MT = cT(1710),
      KT = cT(47),
      OT = cT(1363),
      yT = cT(3625),
      fT = cT(1497),
      xT = cT(1409);
    const IT = 2592e5,
      AT = "notificationOptInLastPromptedAt";
    async function CT() {
      var TT;
      const kT = await jT();
      if (null === kT) return;
      const cT = null !== (TT = KT.e.getItem(AT)) && void 0 !== TT ? TT : 0;
      if (Date.now() - cT < IT) return;
      if ((0, xT.h)()) return;
      const lT = await OT.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: MT.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== lT && (KT.e.setItem(AT, Date.now()), (0, fT.reportAnalyticsClick)({
        id: !0 === lT ? "push.allow" : "push.deny",
        value: MT.c.supports("notifications") ? "app" : "browser"
      }), !0 === lT && kT().catch((TT => {
        console.error("Failed to ask for push notifications:", TT)
      })))
    }
    async function jT() {
      return await MT.c.ready, MT.c.supports("notifications") ? lT.e.get("mobilePushNotificationsCanAsk") ? async () => {
        MT.c.request("notifications.requestPermission", {}).then((TT => {
          let {
            canAsk: kT
          } = TT;
          lT.e.set({
            mobilePushNotificationsCanAsk: kT
          })
        }), (TT => {
          console.error("The app couldn't ask for push notifications:", TT)
        }))
      }: null: await yT.d.canAsk() ? () => yT.d.requestPermission() : null
    }
  },
  9275: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      d: () => fT
    });
    var lT = cT(31);
    const MT = 24,
      KT = "farNametags",
      OT = 1e5;

    function yT() {
      var TT;
      return null === (TT = lT.e.get("showDistantNametags")) || void 0 === TT || TT
    }

    function fT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(KT),
          kT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(kT) && kT >= 0 ? Math.min(kT, OT) : null
      }()) && void 0 !== TT ? TT : yT() ? 0 : MT
    }
  },
  9388: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => OT
    });
    const lT = [{
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

    function MT(TT) {
      let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const kT = TT < 0 ? "-" : "",
            cT = Math.abs(TT);
          return cT >= 10 ? `${kT}${cT.toFixed(1).replace(/\.0$/,"")}` : `${kT}${cT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        kT = BigInt(Math.floor(TT))
      } else kT = TT;
      const MT = kT < 0n ? -kT : kT,
        KT = kT < 0n ? "-" : "",
        OT = MT.toString();
      if (OT.length <= cT) return `${KT}${OT}`;
      const yT = 3 * Math.floor((OT.length - 1) / 3);
      if (yT < 3) return `${KT}${OT}`;
      if (yT > 3 * lT.length) {
        const TT = OT[0],
          kT = OT.slice(1, 3).replace(/0+$/, "");
        return `${KT}${kT?`${TT}.${kT}`:TT}e${OT.length-1}`
      }
      const {
        threshold: fT,
        suffix: xT
      } = lT[lT.length - yT / 3], IT = MT / fT, AT = Number(1000n * (MT % fT) / fT), CT = Number(IT) + AT / 1e3;
      let jT;
      return jT = CT >= 100 ? Math.floor(CT).toString() : CT >= 10 ? CT.toFixed(1).replace(/\.0$/, "") : CT.toFixed(2).replace(/\.?0+$/, ""), `${KT}${jT}${xT}`
    }
    const KT = lT.map((TT => {
      let {
        threshold: kT,
        suffix: cT
      } = TT;
      return {
        threshold: Number(kT),
        suffix: cT
      }
    })).filter((TT => {
      let {
        threshold: kT
      } = TT;
      return Number.isFinite(kT)
    }));

    function OT(TT) {
      const kT = Math.abs(TT),
        cT = TT < 0 ? "-" : "";
      for (const {
          threshold: lT,
          suffix: MT
        }
        of KT)
        if (kT >= lT) {
          const TT = kT / lT;
          if (TT >= 1e3) return `${cT}${kT.toExponential(2).replace("e+","e")}`;
          let KT;
          return KT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${cT}${KT}${MT}`
        } return `${cT}${kT}`
    }
  },
  9369: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      h: () => CT,
      k: () => AT,
      l: () => OT,
      o: () => xT,
      p: () => fT
    });
    var lT = cT(339);
    const MT = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      KT = {
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

    function OT(TT) {
      var kT;
      return null !== (kT = KT[TT]) && void 0 !== kT ? kT : {
        translationKey: ""
      }
    }
    const yT = {
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

    function fT(TT) {
      return MT.includes(TT)
    }

    function xT(TT) {
      var kT;
      return !0 === (null === TT || void 0 === TT || null === (kT = TT.customAttributes) || void 0 === kT ? void 0 : kT.cannotEnchant)
    }

    function IT(TT, kT) {
      const {
        max: cT
      } = yT[TT].at(-1);
      return kT <= cT
    }

    function AT(TT) {
      const kT = Math.sin(TT / 80),
        cT = TT => {
          if (TT <= 0) return 0;
          if (TT > 1) return 1;
          let kT = 0;
          const cT = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let lT = 0; lT < cT.length; lT++) {
            kT += (lT % 2 === 0 ? 1 : -1) * cT[lT] * Math.pow(TT, 2 + lT) / (2 + lT)
          }
          return 72 * kT
        },
        lT = .3 - .78 * kT,
        MT = .5 - .78 * kT,
        KT = .6 - .7 * kT,
        OT = .8 - .6 * kT;
      let yT = cT(lT),
        fT = cT(MT) - yT,
        xT = cT(KT) - fT - yT,
        IT = cT(OT) - xT - fT - yT;
      lT < .041 && (fT /= 1 - yT, xT /= 1 - yT, IT /= 1 - yT, yT = 0), MT < .041 && (yT /= 1 - fT, xT /= 1 - fT, IT /= 1 - fT, fT = 0), KT < .041 && (yT /= 1 - xT, fT /= 1 - xT, IT /= 1 - xT, xT = 0), OT < .041 && (yT /= 1 - IT, fT /= 1 - IT, xT /= 1 - IT, IT = 0);
      return {
        commonProb: yT,
        uncommonProb: fT,
        rareProb: xT,
        epicProb: IT,
        legendaryProb: 1 - (IT + xT + fT + yT)
      }
    }

    function CT(TT, kT) {
      const {
        min: cT,
        max: MT
      } = yT[TT][kT], KT = lT.d.sampleUniformIntDistribution(cT, MT, "includeMax");
      return {
        ...AT(KT),
        level: KT
      }
    }
  },
  8808: (TT, kT, cT) => {
    function lT(TT, kT) {
      return !TT.hidden && (kT || !TT.isRewardedAd)
    }

    function MT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function KT(TT, kT) {
      var cT;
      if ("dropdown" === (null === (cT = TT.userInput) || void 0 === cT ? void 0 : cT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const cT of TT.userInput.dropdownOptions)
          if (MT(cT) === kT) return "object" === typeof cT ? cT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", kT)
      }
      return TT.cost
    }

    function OT(TT, kT, cT) {
      var lT;
      const MT = null !== (lT = cT.excludedPlayers) && void 0 !== lT ? lT : [kT];
      return TT.filter((TT => !MT.includes(TT)))
    }
    cT.d(kT, {
      e: () => KT,
      h: () => MT,
      l: () => OT,
      p: () => lT
    })
  },
  9332: () => {},
  9306: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9308: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9317: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9320: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);