export const id = 97;
export const ids = [97, 185];
export const modules = {
  8887: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      EverythingMenu: () => Bb
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(1149),
      bk = Bk(1028),
      wk = Bk(1970),
      dk = Bk(1083),
      sk = Bk(1069);

    function Vk(kk) {
      let {
        items: Fk,
        onClick: Bk,
        selectedItemId: Rk,
        className: tk,
        padStartsOnTab: Vk = !0
      } = kk;
      const {
        t: Jk
      } = (0, Xk.x)(), Ak = (0, dk.m)(), ek = [];
      for (const ak of Fk) {
        var yk;
        const kk = ek[ek.length - 1];
        var fk;
        if (kk && kk.title === (null !== (yk = ak.section) && void 0 !== yk ? yk : null)) kk.items.push(ak);
        else ek.push({
          title: null !== (fk = ak.section) && void 0 !== fk ? fk : null,
          items: [ak]
        })
      }
      return (0, sk.jsx)("div", {
        className: ak()("MenuSideBarBody", tk),
        "data-pad-tabs": "2",
        children: ek.map(((kk, Fk) => {
          var tk;
          return (0, sk.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [kk.title && (0, sk.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Jk(kk.title)
            }), kk.items.map((kk => {
              var Fk;
              const tk = !!kk.iconElement || !!kk.faIcon;
              return (0, sk.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Rk === kk.id ? "true" : void 0,
                "data-pad-default-focus": Vk && Rk === kk.id || void 0,
                className: ak()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Rk === kk.id
                }),
                onClick: () => {
                  Bk(kk.id)
                },
                children: [tk && (0, sk.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Fk = kk.iconElement) && void 0 !== Fk ? Fk : (0, sk.jsx)(bk.d, {
                    name: kk.faIcon
                  })
                }), (!Ak || !tk) && (0, sk.jsx)("div", {
                  children: Jk(kk.title)
                }), kk.redDot && (0, sk.jsx)(wk.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, kk.id)
            }))]
          }, null !== (tk = kk.title) && void 0 !== tk ? tk : Fk)
        }))
      })
    }
    var Jk = Bk(2789),
      Ak = Bk(1096),
      ek = Bk(2320),
      yk = Bk(1090),
      fk = Bk(1389),
      mk = Bk(98),
      Wk = Bk(1847),
      vk = Bk(2159),
      ik = Bk(2163),
      Yk = Bk(1620),
      Lk = Bk(1288),
      Ok = Bk(4688),
      Ek = Bk(22),
      Sk = Bk(8891);

    function Nk(kk) {
      let {
        setApplySettingsCallback: Fk
      } = kk;
      const {
        clientEscMenuOptions: Bk
      } = (0, Ek.h)(["clientEscMenuOptions"]), [tk, ak] = (0, Rk.useState)(!1), [Xk, bk] = (0, Rk.useState)(!1), [wk, dk] = (0, Rk.useState)(6400), [Vk, Jk] = (0, Rk.useState)(3600), [Ak, ek] = (0, Rk.useState)(!1), [yk, mk] = (0, Rk.useState)(!1);

      function Wk(kk) {
        const Fk = "screenshot" === kk ? bk : ak;
        Fk(!0);
        const Bk = Ak ? "normals" : yk ? "depth" : null;
        Sk.devTools.downloadScene(kk, {
          width: wk,
          height: Vk,
          colouring: Bk
        }).catch((kk => {
          console.error("Couldn't download the scene", kk)
        })).finally((() => {
          Fk(!1)
        }))
      }
      return (0, sk.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, sk.jsx)(Ok.e, {
          label: "Disable Ambient Occlusion",
          checked: Bk.disableAmbientOcclusion,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              disableAmbientOcclusion: kk
            }), Fk((() => Ok.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Sk.devTools.supports("ambientLight") && (0, sk.jsx)(Ok.l, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Bk.ambientLightIntensity,
          onChange: kk => {
            Sk.devTools.setAmbientLightIntensity(kk).then((() => {
              Ek.c.setClientEscMenuOptions({
                ambientLightIntensity: kk
              })
            })).catch((kk => {
              console.error("Couldn't set the ambient light", kk)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Sk.devTools.supports("weaponRaycasts") && (0, sk.jsx)(Ok.e, {
          label: "Show Weapon Raycasts",
          checked: Bk.showWeaponRaycasts,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              showWeaponRaycasts: kk
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Sk.devTools.supports("sceneDownload") && (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, sk.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, sk.jsx)(Ok.e, {
              label: "Apply normal-based coloring",
              checked: Ak,
              onClick: kk => {
                ek(kk), kk && mk(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, sk.jsx)(Ok.e, {
              label: "Apply depth-based coloring",
              checked: yk,
              onClick: kk => {
                mk(kk), kk && ek(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, sk.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, sk.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, sk.jsx)(Yk.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, Fk) => {
                  const Bk = parseInt(kk) || 6400;
                  dk(Bk)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: wk.toString()
              }), (0, sk.jsx)("span", {
                children: "X"
              }), (0, sk.jsx)(Yk.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, Fk) => {
                  const Bk = parseInt(kk) || 3600;
                  Jk(Bk)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Vk.toString()
              })]
            }), (0, sk.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, sk.jsxs)(fk.g, {
                onClick: () => {
                  Wk("screenshot")
                },
                disabled: Xk,
                children: [Xk && (0, sk.jsx)(Lk.b, {}), "Download Screenshot"]
              }), (0, sk.jsxs)(fk.g, {
                onClick: () => {
                  Wk("glb")
                },
                disabled: tk,
                children: [tk && (0, sk.jsx)(Lk.b, {}), "Download GLB"]
              })]
            })]
          }), (0, sk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Hk = Bk(132),
      uk = Bk(1101),
      Mk = Bk(1154),
      gk = Bk(2795),
      Uk = Bk(1459),
      ck = Bk(1219),
      Gk = Bk(1183),
      Tk = Bk(2883),
      rk = Bk(1945),
      Dk = Bk(1441),
      zk = Bk(291),
      Pk = Bk(2170),
      hk = Bk(2182),
      qk = Bk(2553),
      Ck = Bk(1594),
      Zk = Bk(2855),
      pk = Bk(2824),
      Kk = Bk(2885),
      xk = Bk(194);

    function jk(kk) {
      const {
        t: Fk,
        selectedLanguage: Bk
      } = (0, Xk.x)(), {
        userContext: tk
      } = (0, Ak.e)(), {
        superRankInfo: ak
      } = tk, bk = kk && ((0, zk.Dc)(ak) || tk.ranksMayChange) && (0, hk.purchasesAllowed)(), {
        accountId: wk,
        data: dk
      } = (0, qk.h)(Zk.b, bk);
      if ((0, Rk.useEffect)((() => {
          if (bk) return Zk.b.watchAccount(), Ck.b.addRefetchListener("billing", (kk => {
            "reconnected" === kk ? Zk.b.refreshAfterReconnect() : Zk.b.refresh()
          }))
        }), [bk]), !bk || !(0, zk.Dc)(ak) || null === dk || wk !== tk.whamm) return null;
      const sk = function(kk, Fk, Bk) {
        const Rk = Kk.g[(0, Kk.c)(Kk.g, Fk)],
          tk = void 0 === Rk ? void 0 : (0, xk.d)(kk.entitlements, Rk.entitlementId);
        return void 0 === tk || null === tk.expiresAt || (0, pk.c)(tk) <= Bk ? null : tk.willRenew && null === tk.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(tk.expiresAt, Bk)
        } : {
          renews: !1,
          at: (0, pk.c)(tk)
        }
      }(dk, ak.tier, Date.now());
      if (null === sk) return null;
      const Vk = sk.renews ? "store:renewsOn" : "store:endsOn";
      return Fk(Vk, {
        date: new Date(sk.at).toLocaleDateString((0, Xk.j)(Bk.code, Vk), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var lk = Bk(1312),
      nk = Bk(1160),
      Ik = Bk(4599),
      Qk = Bk(1418),
      kF = Bk(3458),
      FF = Bk(2144);

    function BF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Xk.x)(), {
        data: Rk,
        failed: tk
      } = (0, qk.h)(kF.d, Fk);
      return 0 === (null === Rk || void 0 === Rk ? void 0 : Rk.length) || null === Rk && !tk ? null : (0, sk.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, sk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Bk("paymentHistory:title")
        }), null === Rk && tk && (0, sk.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Bk("paymentHistory:loadFailed")
        }), null !== Rk && (0, sk.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Rk.map((kk => (0, sk.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, sk.jsx)(FF.e, {
              entry: kk
            }), (0, sk.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, sk.jsx)("div", {
                children: (0, FF.k)(Bk, kk)
              }), (0, sk.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(kk.at).toLocaleDateString(), "number" === typeof kk.orderId && ` \xb7 ${Bk("paymentHistory:order",{orderId:kk.orderId})}`]
              })]
            })]
          }, (0, kF.c)(kk))))
        })]
      })
    }
    var RF = Bk(1802),
      tF = Bk(1195),
      aF = Bk(1300),
      XF = Bk(1259),
      bF = Bk(1698),
      wF = Bk(2807);
    async function dF() {
      try {
        return function(kk) {
          const Fk = new Map;
          for (const {
              store: Bk,
              status: Rk,
              autoRenewStatus: tk,
              managementUrl: ak
            }
            of Object.values(kk.subscriptions)) !(0, pk.g)(Bk) || (0, pk.k)(Rk) || "willNotRenew" === tk || Fk.has(Bk) || Fk.set(Bk, null !== ak && void 0 !== ak ? ak : pk.m[Bk]);
          return Array.from(Fk, (kk => {
            let [Fk, Bk] = kk;
            return {
              store: Fk,
              managementUrl: Bk
            }
          }))
        }(await (0, bF.m)((0, wF.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (kk) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", kk), null
      }
    }
    var sF = Bk(279),
      VF = Bk(2376);
    const JF = {
      appStore: {
        name: "App Store",
        ...sF.Ub.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...sF.Ub.googlePlay
      },
      discord: {
        name: "Discord",
        ...sF.Ub.discord
      }
    };

    function AF(kk) {
      let {
        warning: Fk,
        subscriptions: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Xk.x)();
      return null !== Bk && 0 === Bk.length ? (0, sk.jsx)(sk.Fragment, {
        children: Rk(Fk)
      }) : (0, sk.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Rk(Fk), null === Bk && (0, sk.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Rk("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Bk && (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Rk("auth:deleteAccountStoreSubscriptions")
          }), (0, sk.jsx)(VF.d, {
            className: "DeleteAccountSubtitleLinks",
            links: Bk.map((kk => {
              let {
                store: Fk,
                managementUrl: Bk
              } = kk;
              return {
                ...JF[Fk],
                url: Bk
              }
            }))
          })]
        })]
      })
    }

    function eF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        userContext: Bk,
        isUserContextUpdating: tk
      } = (0, Ak.e)(), {
        t: ak
      } = (0, Xk.x)(), [bk, wk] = (0, Rk.useState)(!1), [dk, Vk] = (0, Rk.useState)(null), Jk = (0, Rk.useRef)(Fk);
      (0, Rk.useEffect)((() => (Jk.current = Fk, () => {
        Jk.current = !1
      })), [Fk]);
      const ek = tk || bk;
      async function yk() {
        const kk = function(kk) {
            if ((0, Hk.c)()) return "auth:discordActivityDeleteAccountWarning";
            return kk ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(Bk.isLoggedIn()),
          Fk = (0, RF.b)(Bk.availableUserContextTypes) ? await dF() : [];
        if (!Jk.current) return tF.c.ok();
        if (!0 !== await aF.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, ck.d)(Bk.getPlayerName(), !mk.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, sk.jsx)(AF, {
              warning: kk,
              subscriptions: Fk
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return tF.c.ok();
        const Rk = await (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: Ek.c.get("gameState")
        }, {
          retries: 3
        }, Bk.getMetricsCookies());
        if (Rk.error) return tF.c.error(Rk.error);
        if ((0, Hk.c)()) {
          (await XF.j.discordActivity()).exit("User deleted their account")
        }
        return (0, uk.forgetStoredGuestAccount)(Bk.whamm), (0, uk.forceGlobalSignOut)(!0), tF.c.ok()
      }
      return (0, sk.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, sk.jsxs)(fk.J, {
          onClick: async function() {
            if (!bk) {
              wk(!0);
              try {
                const kk = await yk(),
                  Fk = kk.isError() ? kk.asError().message : null;
                Vk(Fk)
              } catch (kk) {
                console.error("Failed to delete account:", kk), Vk(ak("auth:genericDeleteAccountError"))
              }
              wk(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: ek,
          children: [ek && (0, sk.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, sk.jsx)(Lk.b, {})
          }), ak("auth:deleteAccount")]
        }), dk && (0, sk.jsx)("div", {
          className: "DeleteAccountError",
          children: dk
        })]
      })
    }
    var yF = Bk(3387),
      fF = Bk(3405),
      mF = Bk(3397);

    function WF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Xk.x)(), {
        data: Rk,
        failed: tk
      } = (0, qk.h)(yF.e, Fk), ak = null === Rk ? null : (0, yF.h)(Rk);
      return (0, sk.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, sk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Bk("settingsMenu:blockedAndIgnoredPlayers")
        }), null === ak && !tk && (0, sk.jsx)(Lk.b, {}), null === ak && tk && (0, sk.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Bk("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, sk.jsx)(fk.g, {
            className: "SmallTextLight",
            onClick: () => {
              yF.e.refresh()
            },
            children: Bk("general:tryAgain")
          })]
        }), 0 === (null === ak || void 0 === ak ? void 0 : ak.length) && (0, sk.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Bk("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== ak && ak.length > 0 && (0, sk.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: ak.map((kk => {
            let {
              name: Fk,
              exclusion: Rk
            } = kk;
            const tk = mF.e[Rk];
            return (0, sk.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, sk.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Fk
              }), (0, sk.jsx)(fk.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, fF.d)(tk, Fk, {
                    chatMessage: null
                  })
                },
                children: Bk(mF.f[tk].text)
              })]
            }, Fk)
          }))
        })]
      })
    }
    const vF = (0, Rk.memo)((function(kk) {
      var Fk;
      let {
        showing: Bk,
        inGame: tk
      } = kk;
      const {
        t: wk,
        selectedLanguage: dk
      } = (0, Xk.x)(), {
        hideSocialLocationFrom: Vk
      } = (0, Ek.h)(["hideSocialLocationFrom"]), ek = (0, Jk.b)(), {
        userContext: yk,
        isUserContextUpdating: Wk
      } = (0, Ak.e)(), [vk, ik] = (0, Rk.useState)(null !== (Fk = yk.getPlayerName()) && void 0 !== Fk ? Fk : ""), [Sk, Nk] = (0, Rk.useState)(null), {
        purchasing: qk,
        outcome: Ck,
        purchase: Zk
      } = (0, gk.d)("/super-rank-welcome"), pk = (0, zk.ic)((0, Xk.j)(dk.code, "general:timeLeft"), yk.superRankInfo), Kk = jk(Bk), xk = pk ? wk("general:timeLeft", {
        time: pk
      }) : Kk, [kF, FF] = (0, Rk.useState)(!1), [RF, tF] = (0, Rk.useState)(!1), aF = (0, Rk.useRef)(null), XF = (0, Rk.useRef)(null), bF = (0, rk.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), wF = null === bF, dF = null !== bF && void 0 !== bF ? bF : [], sF = yk !== uk.NULL_USER_CONTEXT && !yk.isLoggedIn(), VF = sF && 0 !== (null === bF || void 0 === bF ? void 0 : bF.length), [JF, AF] = (0, Rk.useState)([]), [yF, fF] = (0, Rk.useState)(!1), mF = yk.playerHasRank("youtuber"), vF = (0, Rk.useCallback)((() => Dk.b.getPlayerProfile(yk, {
        lowerCaseName: yk.getPlayerName().toLowerCase()
      }).then((kk => {
        AF(kk.socialLinks)
      })).catch((kk => {
        console.error("Failed to refresh social links", kk)
      }))), [yk]);

      function YF(kk) {
        kk !== vk && ((0, ck.m)(kk) ? (kk = (0, ck.q)(kk), Nk("Only letters, numbers, and _")) : Nk(null), aF.current && (aF.current.value = kk), ik(kk))
      }
      return (0, Rk.useEffect)((() => (!0 === Bk ? (clearInterval(XF.current), XF.current = setInterval(ek, 1e3)) : clearInterval(XF.current), () => {
        clearInterval(XF.current)
      })), [Bk, ek]), (0, Rk.useEffect)((() => {
        var kk;
        ik(null !== (kk = yk.getPlayerName()) && void 0 !== kk ? kk : "")
      }), [yk]), (0, Rk.useEffect)((() => {
        if (!Bk || !mF || Wk) return;
        let kk = !1;
        return fF(!0), AF([]), Dk.b.getPlayerProfile(yk, {
          lowerCaseName: yk.getPlayerName().toLowerCase()
        }).then((Fk => {
          kk || AF(Fk.socialLinks)
        })).catch((kk => {
          console.error("Failed to load social links", kk)
        })).finally((() => {
          kk || fF(!1)
        })), () => {
          kk = !0
        }
      }), [Bk, mF, Wk, yk]), (0, sk.jsxs)("div", {
        className: ak()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: tk
        }),
        children: [tk && (0, sk.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: wk("settingsMenu:accountSettingsInGameWarning")
        }), (0, sk.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, sk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [wk("homePage:discordNamePopupTitle"), (0, sk.jsxs)(Uk.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Gk.j)({
                name: yk.getPlayerName()
              }),
              onClick: () => {
                Ek.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, sk.jsx)(bk.d, {
                name: "arrow-up-right-from-square"
              }), " ", wk("profileCard:viewProfile")]
            })]
          }), (0, sk.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, sk.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [mk.featureFlags.canChangeName && (0, sk.jsx)(Yk.e, {
                className: "EnterName",
                placeholderText: wk("homePage:enterName"),
                maxLength: ck.f,
                defaultValue: vk,
                onValueChange: kk => {
                  YF(kk)
                },
                forcedText: kF || !mk.featureFlags.canChangeName ? vk : null,
                blurOnEnter: !0,
                domRef: aF
              }), (0, sk.jsx)(fk.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  YF((0, ck.e)())
                },
                children: (0, sk.jsx)(bk.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !mk.featureFlags.canChangeName && (0, sk.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, ck.d)(vk, !mk.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, sk.jsx)(fk.g, {
              className: "ChooseNameButton",
              disabled: kF || vk === yk.getPlayerName(),
              onClick: () => {
                vk.length < ck.j ? Nk(wk("homePage:changeNameMinLengthError", {
                  length: ck.j
                })) : vk.length > ck.f ? Nk(wk("homePage:changeNameMaxLengthError", {
                  length: ck.f
                })) : (FF(!0), Nk(null), async function(kk, Fk, Bk, Rk) {
                  const tk = await (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: kk
                  }, {
                    retries: 3
                  }, Fk.getMetricsCookies()).catch((kk => (console.error("Bad response from the server when trying to update name:", kk), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  tk.err ? (console.error("Error when trying to get with new name from DB", tk.err), Rk(tk.err)) : !0 === tk.nameExists ? Rk("Name is already taken") : Bk(kk)
                }(vk, yk, (kk => {
                  yk.setPlayerName(kk), FF(!1)
                }), (kk => {
                  Nk(kk), FF(!1)
                })))
              },
              children: wk("general:choose")
            })]
          }), Sk && (0, sk.jsx)("div", {
            className: "ChooseAccNameError",
            children: Sk
          })]
        }), (0, sk.jsx)(Ok.e, {
          label: (() => {
            if ((0, nk.q)(Vk)) {
              const kk = (0, Xk.j)(dk.code, "general:timeLeft"),
                Fk = (0, zk.gb)(kk, Date.now(), Vk + nk.m);
              return `${wk("settingsMenu:hideSocialLocation")} (${wk("general:timeLeft",{time:Fk})})`
            }
            return wk("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const kk = !(0, nk.q)(Vk);
            (0, Qk.reportAnalyticsClick)({
              id: "social.hide_location",
              value: kk ? "on" : "off"
            }), tF(!0), Dk.b.setHideSocialLocation(yk, kk).then((() => {
              Ek.c.set({
                hideSocialLocationFrom: kk ? Date.now() : null
              })
            })).finally((() => {
              tF(!1)
            }))
          },
          checked: (0, nk.q)(Vk),
          disabled: RF
        }), mF && (0, sk.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, sk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: wk("settingsMenu:socialLinks")
          }), yF && (0, sk.jsx)(Lk.b, {}), !yF && (0, sk.jsx)(Ik.d, {
            socialLinks: JF,
            editable: !0,
            userContext: yk,
            onLinksUpdated: vF
          })]
        }), (0, sk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, sk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: wk(VF ? "auth:loginOrSwitchAccount" : "auth:login")
          }), wF && (0, sk.jsx)(Lk.b, {}), !wF && 0 === dF.length && (0, sk.jsx)("div", {
            className: "NoLoginOptions",
            children: wk("auth:noLoginOptions")
          }), !wF && dF.length > 0 && "crazygames" !== Hk.q && (0, sk.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: dF
          }), !wF && dF.length > 0 && "crazygames" === Hk.q && (0, sk.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [dF[0], dF.length > 1 && (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, sk.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: wk("auth:legacyLoginOptions")
                }), (0, sk.jsx)(lk.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: wk("auth:legacyLoginOptionsInfo")
                })]
              }), (0, sk.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: dF.slice(1)
              })]
            })]
          }), mk.featureFlags.useLogin && (null !== yk.loggedInInfo || yk.isLoggedIn()) && (0, sk.jsxs)(sk.Fragment, {
            children: [(0, sk.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, sk.jsxs)(fk.J, {
              onClick: () => {
                (0, uk.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, sk.jsx)(bk.d, {
                name: "right-from-bracket"
              }), wk("auth:signOut")]
            })]
          })]
        }), !yk.playerHasRank("super") && (0, hk.purchasesAllowed)() && (0, sk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, sk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, sk.jsx)(bk.d, {
              name: "bolt"
            }), wk("homePage:superRank")]
          }), (0, sk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, sk.jsxs)(fk.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Pk.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, sk.jsx)(bk.d, {
                name: "bolt"
              }), wk("homePage:getSuperRank")]
            }), (0, sk.jsxs)(fk.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Pk.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, sk.jsx)(bk.d, {
                name: "bolt"
              }), wk("homePage:giftSuperRank")]
            })]
          })]
        }), yk.playerHasRank("super") && (0, sk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, sk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, sk.jsx)(bk.d, {
              name: "bolt"
            }), wk("homePage:superRank"), xk && (0, sk.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", xk, ")"]
            })]
          }), (0, hk.purchasesAllowed)() && (0, sk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, zk.Dc)(yk.superRankInfo) && (0, sk.jsxs)(fk.o, {
              className: "AccountSettingsSuperRankProlong",
              loading: qk,
              onClick: () => {
                Zk(Tk.n.id, null)
              },
              children: [(0, sk.jsx)(bk.d, {
                name: "bolt"
              }), wk("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Tk.n.product.days,
                price: Tk.n.price
              })]
            }), (0, sk.jsxs)(fk.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Pk.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, sk.jsx)(bk.d, {
                name: "bolt"
              }), wk("homePage:giftSuperRank")]
            })]
          }), Ck && (0, sk.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: wk(Ck.translationKey)
          })]
        }), (0, sk.jsx)(BF, {
          showing: Bk
        }), mk.featureFlags.useSocialFeatures && (0, sk.jsx)(WF, {
          showing: Bk
        }), (0, sk.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, sk.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, sk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: wk(iF(sF, VF))
            }), (0, Hk.c)() && (0, sk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: wk("auth:discordActivityKickWarning")
            }), (0, sk.jsx)(eF, {
              showing: Bk
            })]
          }), (0, sk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: wk("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function iF(kk, Fk) {
      return kk ? Fk ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var YF = Bk(8900),
      oF = Bk(2926),
      LF = Bk(1203),
      OF = Bk(1379);
    const EF = (0, Rk.memo)((function(kk) {
        let {
          inGame: Fk
        } = kk;
        const {
          t: Bk,
          selectedLanguage: Rk
        } = (0, Xk.x)(), {
          clientEscMenuOptions: tk,
          showDebugOverlay: ak
        } = (0, Ek.h)(["clientEscMenuOptions", "showDebugOverlay"]), bk = (0, ek.j)("hideCoordinates");
        let wk = "settingsMenu:showCoordinates",
          dk = "settingsMenu:showChunkCoordinates";

        function Vk(kk) {
          const Fk = new Intl.DisplayNames([kk], {
            type: "language"
          }).of(kk);
          return Fk.charAt(0).toUpperCase() + Fk.slice(1)
        }
        return bk && (wk = "settingsMenu:showCoordinatesHidden", dk = "settingsMenu:showChunkCoordinatesHidden"), (0, sk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Fk && mk.featureFlags.canUseInviteLinks && (0, sk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, sk.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Bk("settingsMenu:inviteLink")
            }), (0, sk.jsx)(YF.g, {})]
          }), (0, sk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, sk.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Bk("settingsMenu:language")
            }), (0, sk.jsx)(oF.c, {
              options: Object.entries(Xk.g).map((kk => {
                let [Fk, Bk] = kk;
                return {
                  label: (0, sk.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, sk.jsx)("img", {
                      src: Bk.flagImg,
                      alt: "flag"
                    }), (0, sk.jsxs)("span", {
                      children: [Vk(Fk), " ", (0, sk.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Fk, ")"]
                      })]
                    })]
                  }),
                  value: Fk
                }
              })),
              value: Rk.code,
              onChange: kk => {
                LF.c.get().setCurrentLanguage(kk.value)
              }
            })]
          }), !(0, mk.isMobileApp)() && (0, OF.h)() && mk.featureFlags.useForceRotateForceFullscreenOverlay && (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:disableFullscreenMode"),
            checked: tk.disableFullscreen,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                disableFullscreen: kk
              })
            }
          }), (0, sk.jsx)(Ok.e, {
            label: Bk(wk),
            checked: tk.showCoordinates,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showCoordinates: kk
              })
            },
            disabled: bk
          }), (0, sk.jsx)(Ok.e, {
            label: Bk(dk),
            checked: tk.showChunkCoordinates,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showChunkCoordinates: kk
              })
            },
            disabled: bk
          }), (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:showFps"),
            checked: tk.showFPS,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showFPS: kk
              })
            }
          }), (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:disableBunnyHopping"),
            checked: tk.disableBunnyHopping,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                disableBunnyHopping: kk
              })
            }
          }), (0, XF.x)() && (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:showChat"),
            checked: tk.showChat,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showChat: kk
              })
            }
          }), (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:showDebugOverlay"),
            checked: ak,
            onClick: kk => {
              Ek.c.set({
                showDebugOverlay: kk
              })
            }
          }), mk.featureFlags.useSocialFeatures && (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:showFriendOnlineToasts"),
            checked: tk.showFriendOnlineToasts,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showFriendOnlineToasts: kk
              })
            }
          }), (0, sk.jsx)(Ok.e, {
            label: Bk("settingsMenu:showNewItemIndicator"),
            checked: tk.showNewItemIndicator,
            onClick: kk => {
              Ek.c.setClientEscMenuOptions({
                showNewItemIndicator: kk
              })
            }
          })]
        })
      })),
      SF = (0, Rk.memo)((function() {
        const {
          t: kk
        } = (0, Xk.x)(), {
          soundVolume: Fk,
          musicVolume: Bk
        } = (0, Ek.h)(["soundVolume", "musicVolume"]);
        return (0, sk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, sk.jsx)(Ok.l, {
            name: kk("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Bk,
            onChange: kk => {
              Ek.c.set({
                musicVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          }), (0, sk.jsx)(Ok.l, {
            name: kk("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Fk,
            onChange: kk => {
              Ek.c.set({
                soundVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          })]
        })
      }));
    var NF = Bk(683),
      HF = Bk(1387),
      uF = Bk(3462),
      MF = Bk(8903),
      gF = Bk(3294);
    const UF = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function cF() {
      const {
        t: kk
      } = (0, Xk.x)(), Fk = (0, gF.d)(), {
        mobilePushNotificationsCanAsk: Bk
      } = (0, Ek.h)(["mobilePushNotificationsCanAsk"]), [tk, ak] = (0, Rk.useState)(null), [bk, wk] = (0, Rk.useState)(!1), [dk, Vk] = (0, Rk.useState)(null), [Jk, Ak] = (0, Rk.useState)(!1), ek = (0, Rk.useCallback)((() => {
        (0, uF.c)().then((kk => {
          Fk.current && (ak(kk), wk(!1))
        })).catch((kk => {
          console.error("Failed to load push notification targets:", kk), Fk.current && wk(!0)
        }))
      }), [Fk]), yk = (0, Rk.useCallback)((() => {
        (0, MF.e)().then((kk => {
          Fk.current && Vk((() => kk))
        }))
      }), [Fk]);
      (0, Rk.useEffect)((() => {
        ek()
      }), [ek]), (0, Rk.useEffect)((() => {
        yk()
      }), [yk, Bk]), (0, HF.f)(uF.e, ek);
      const mk = null === tk ? [] : Object.keys(UF).filter((kk => tk[kk] > 0));
      return (0, sk.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, sk.jsx)("div", {
          className: "SliderText",
          children: kk("notificationSettings:pushNotifications")
        }), null === tk && bk && (0, sk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsLoadFailed")
        }), null !== tk && 0 === mk.length && (0, sk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsNone")
        }), mk.length > 0 && (0, sk.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: mk.map((Fk => {
            var Bk;
            return (0, sk.jsx)("li", {
              children: kk(UF[Fk], {
                count: null !== (Bk = null === tk || void 0 === tk ? void 0 : tk[Fk]) && void 0 !== Bk ? Bk : 0
              })
            }, Fk)
          }))
        }), null !== dk && (0, sk.jsx)(fk.g, {
          className: "PushNotificationSettingsButton",
          loading: Jk,
          onClick: () => {
            Ak(!0), dk().catch((kk => {
              console.error("Failed to turn on push notifications:", kk)
            })).finally((() => {
              Fk.current && (Ak(!1), yk())
            }))
          },
          children: kk("notificationSettings:pushTurnOn")
        })]
      })
    }
    const GF = {
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
      TF = (0, Rk.memo)((function() {
        const {
          t: kk
        } = (0, Xk.x)(), {
          clientEscMenuOptions: Fk
        } = (0, Ek.h)(["clientEscMenuOptions"]);
        return (0, sk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, sk.jsx)(Ok.i, {
            label: kk("notificationSettings:friendRequests"),
            options: NF.b.map((Fk => ({
              value: Fk,
              label: kk(GF[Fk].label)
            }))),
            value: Fk.friendRequestNotifications,
            onChange: kk => {
              Ek.c.setClientEscMenuOptions({
                friendRequestNotifications: kk
              })
            },
            circleInfoText: (0, sk.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: NF.b.map((Fk => (0, sk.jsxs)("div", {
                children: [(0, sk.jsx)("b", {
                  children: kk(GF[Fk].label)
                }), ": ", kk(GF[Fk].info)]
              }, Fk)))
            })
          }), (0, sk.jsx)(cF, {})]
        })
      }));
    var rF = Bk(4249),
      DF = Bk(182),
      zF = Bk(267),
      PF = Bk(6361),
      hF = Bk(3255),
      qF = Bk(8910),
      CF = Bk(606),
      ZF = Bk(29);
    var pF = Bk(624),
      KF = Bk(42),
      xF = Bk(4126);
    const jF = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function lF(kk) {
      return jF.has(kk) ? Wk.gameBridge.lookup("jW", null) : null
    }

    function nF(kk) {
      if (!(0, CF.F)(Ek.c.get("clientEscMenuOptions")[kk])) return Ek.c.get("clientEscMenuOptions")[kk];
      const Fk = lF(kk);
      return null !== Fk ? Fk[jF.get(kk)] : KF.i.getItem(kk)
    }

    function IF(kk, Fk) {
      if ("useTouchControls" === kk) return void(0, xF.d)(Fk);
      kk in Ek.c.get("clientEscMenuOptions") && Ek.c.setClientEscMenuOptions({
        [kk]: Fk
      });
      const Bk = lF(kk);
      null !== Bk && Wk.gameBridge.send("setChunkAddDistance", {
        ...Bk,
        [jF.get(kk)]: Fk
      }), KF.i.setItem(kk, Fk)
    }
    var QF = Bk(4163),
      kB = Bk(8918),
      FB = Bk(8926),
      BB = Bk(4242);

    function RB(kk) {
      var Fk, tk, bk, wk;
      let {
        minChunkAddDist: dk,
        getValue: Vk,
        onChange: Jk,
        setApplySettingsCallback: Ak
      } = kk;
      const {
        t: yk
      } = (0, Xk.x)(), {
        clientEscMenuOptions: fk
      } = (0, Ek.h)(["clientEscMenuOptions", "showDistantNametags"]), Wk = (0, Rk.useRef)(Vk("showFog")), vk = (0, Rk.useRef)(fk.antiAliasing), ik = (0, Rk.useRef)(fk.useWebGpu), [Yk, Lk] = (0, Rk.useState)(null), [Nk, Hk] = (0, Rk.useState)((() => (0, hF.c)(mk.featureFlags.settings.canUseShaderPacks))), [uk] = (0, Rk.useState)((() => Ek.c.isWebGpuDefaultOff())), [Mk] = (0, Rk.useState)(zF.c);
      (0, Rk.useEffect)((() => {
        let kk = !1;
        return (0, mk.hasUsableWebGpuAdapter)().then((Fk => {
          kk || Lk(Fk)
        })), (0, hF.i)(mk.featureFlags.settings.canUseShaderPacks) && (0, PF.e)().then((async Fk => {
          const Rk = null !== Fk && await async function(kk) {
            const [{
              isShaderPackActive: Fk
            }, {
              loadPageShaderPackCompiler: Rk
            }] = await Promise.all([Bk.e(127).then((() => Bk(6358))), Promise.all([Bk.e(74), Bk.e(131), Bk.e(130)]).then((() => Bk(6316)))]);
            return Fk(kk, await Rk())
          }(Fk);
          kk || Hk(Rk)
        })), () => {
          kk = !0
        }
      }), []);
      const gk = function(kk, Fk, Bk, Rk, tk) {
          return (0, qF.d)(Bk, Rk) && !0 === Fk ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Fk ? "settingsMenu:newWebGpu" : tk ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: kk && !1 !== Fk,
            disabled: !0 !== Fk
          }
        }(fk.useWebGpu, Yk, Nk, uk, Mk),
        Uk = (fk.useWebGpu || (0, qF.d)(Nk, uk)) && Nk && !0 === Yk,
        ck = (0, ek.j)("lightingOverride"),
        Gk = !(0, CF.F)(ck);
      let Tk = "settingsMenu:enableLighting";
      Gk && (Tk = ck ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const rk = kk => {
          var Fk, Bk, Rk;
          const tk = null !== (Fk = kk.showFog) && void 0 !== Fk ? Fk : Vk("showFog"),
            ak = null !== (Bk = kk.antiAliasing) && void 0 !== Bk ? Bk : fk.antiAliasing,
            Xk = null !== (Rk = kk.useWebGpu) && void 0 !== Rk ? Rk : fk.useWebGpu,
            bk = !pF.p && tk !== Wk.current || ak !== vk.current || Xk !== ik.current;
          Ak(bk ? () => Ok.m : null)
        },
        Dk = (0, ek.j)("fogChunkDistanceOverride"),
        zk = (0, ek.j)("fogBlockDistanceOverride"),
        Pk = !(0, CF.F)(Dk) || !(0, CF.F)(zk),
        hk = Pk ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [qk, Ck] = (0, rF.g)(dk),
        [Zk, pk] = (0, BB.d)(dk),
        Kk = yk("settingsMenu:chunkLoadDistanceDeviceLimit"),
        xk = Zk < qk,
        jk = Math.min(null !== (Fk = Vk("chunkHorizAddDist")) && void 0 !== Fk ? Fk : dk[0], Zk),
        lk = !Pk && function(kk, Fk) {
          return !0 === kk.showFog && kk.fogChunkDistance > Fk
        }(fk, jk);
      return (0, sk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, sk.jsx)(Ok.l, {
          name: yk("settingsMenu:horizontalChunkLoadDistance"),
          min: dk[0],
          max: qk,
          selectableMax: Zk,
          cappedNote: Kk,
          step: 1,
          initValue: jk,
          onChange: kk => {
            !0 === Vk("showFog") && kk < Vk("fogChunkDistance") && Jk("fogChunkDistance", kk), Jk("chunkHorizAddDist", kk), ZF.o.Hf("updatedChunkLoadDist")
          },
          circleInfoText: yk("settingsMenu:chunkLoadDistanceInfo")
        }), (0, sk.jsx)(Ok.l, {
          name: yk("settingsMenu:verticalChunkLoadDistance"),
          min: dk[1],
          max: Ck,
          selectableMax: pk,
          cappedNote: xk ? void 0 : Kk,
          step: 1,
          initValue: Math.min(null !== (tk = Vk("chunkVertAddDist")) && void 0 !== tk ? tk : dk[1], pk),
          onChange: kk => {
            Jk("chunkVertAddDist", kk), ZF.o.Hf("updatedChunkLoadDist")
          },
          circleInfoText: yk("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:chunkFadeIn"),
          checked: fk.chunkFadeIn,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              chunkFadeIn: kk
            })
          },
          circleInfoText: yk("settingsMenu:chunkFadeInInfo")
        }), Sk.devTools.supports("chunkBorders") && (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:showChunkBorders"),
          checked: fk.showChunkBorders,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              showChunkBorders: kk
            })
          },
          circleInfoText: yk("settingsMenu:showChunkBordersInfo")
        }), (0, sk.jsx)(Ok.e, {
          label: yk(Tk),
          checked: fk.enableLighting,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              enableLighting: kk
            })
          },
          disabled: Gk
        }), (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, sk.jsx)(Ok.e, {
            label: yk(hk),
            checked: fk.showFog,
            onClick: kk => {
              rk({
                showFog: kk
              }), Ek.c.setClientEscMenuOptions({
                showFog: kk
              })
            },
            disabled: Pk,
            className: ak()({
              SettingBoxWarning: lk
            })
          }), (0, sk.jsx)(Ok.l, {
            name: yk("settingsMenu:fogChunkDistance"),
            min: dk[0],
            max: DF.h.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (bk = fk.fogChunkDistance) && void 0 !== bk ? bk : dk[0],
            onChange: kk => {
              Ek.c.setClientEscMenuOptions({
                fogChunkDistance: kk
              }), ZF.o.Hf("fogChunkDistanceChanged", kk)
            },
            circleInfoText: yk("settingsMenu:fogChunkDistanceInfo"),
            disabled: Pk || !1 === Vk("showFog"),
            className: ak()({
              SettingBoxWarning: lk
            })
          }), lk && (0, sk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: yk("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !pF.p && (0, sk.jsx)(Ok.e, {
          label: yk(Uk ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Uk && fk.disableTexAtlas,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              disableTexAtlas: kk
            })
          },
          circleInfoText: yk("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Uk
        }), (0, sk.jsx)(Ok.l, {
          name: yk("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: fk.cameraFOV,
          onChange: kk => {
            Ek.c.setClientEscMenuOptions({
              cameraFOV: kk
            })
          }
        }), (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:disableViewBobbing"),
          checked: fk.disableBobbing,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              disableBobbing: kk
            })
          },
          circleInfoText: yk("settingsMenu:disableViewBobbingInfo")
        }), (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:antiAliasing"),
          checked: fk.antiAliasing,
          onClick: kk => {
            rk({
              antiAliasing: kk
            }), (0, QF.d)("antiAliasing"), Ek.c.setClientEscMenuOptions({
              antiAliasing: kk
            })
          },
          circleInfoText: yk("settingsMenu:antiAliasingInfo")
        }), (0, sk.jsx)(Ok.l, {
          name: yk("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (wk = fk.pixelScale) && void 0 !== wk ? wk : 1,
          onChange: kk => {
            (kk !== Ek.c.get("clientEscMenuOptions").pixelScale || (0, FB.m)()) && (0, QF.d)("pixelScale"), Ek.c.setClientEscMenuOptions({
              pixelScale: kk
            })
          },
          circleInfoText: yk("settingsMenu:pixelScaleInfo"),
          format: kk => `${kk}x`
        }), (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:pixelSmoothing"),
          checked: fk.pixelSmoothing,
          onClick: kk => {
            Ek.c.setClientEscMenuOptions({
              pixelSmoothing: kk
            })
          },
          circleInfoText: yk("settingsMenu:pixelSmoothingInfo")
        }), pF.p && (0, sk.jsx)(Ok.e, {
          label: yk("settingsMenu:distantNametags"),
          checked: (0, kB.c)(),
          onClick: kk => {
            Ek.c.set({
              showDistantNametags: kk
            })
          },
          circleInfoText: yk("settingsMenu:distantNametagsInfo")
        }), (0, sk.jsx)(Ok.e, {
          label: yk(gk.translationKey),
          checked: gk.checked,
          onClick: kk => {
            rk({
              useWebGpu: kk
            }), Ek.c.setClientEscMenuOptions({
              useWebGpu: kk
            })
          },
          circleInfoText: yk("settingsMenu:newWebGpuInfo"),
          disabled: gk.disabled
        })]
      })
    }
    var tB = Bk(4154),
      aB = Bk(8540),
      XB = Bk(8941),
      bB = Bk(8556),
      wB = Bk(8949);
    const dB = {
        color: 16777215,
        name: "white"
      },
      sB = {
        color: 0,
        name: "black"
      },
      VB = [dB, {
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
      }, sB],
      JB = [sB, dB];

    function AB(kk) {
      return `${kk} px`
    }

    function eB(kk) {
      return `${kk}%`
    }

    function yB(kk) {
      let {
        label: Fk,
        value: Bk,
        swatches: Rk,
        onChange: tk
      } = kk;
      const {
        t: bk
      } = (0, Xk.x)(), wk = !Rk.some((kk => kk.color === Bk));
      return (0, sk.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, sk.jsx)("div", {
          className: "SliderText",
          children: Fk
        }), (0, sk.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Fk,
          children: [Rk.map((kk => {
            let {
              color: Fk,
              name: Rk
            } = kk;
            return (0, sk.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Fk === Bk,
              "aria-label": bk(`crosshairSettings:color_${Rk}`),
              "data-pad-focusable": !0,
              className: ak()("CrosshairSwatch", {
                Selected: Fk === Bk
              }),
              style: {
                background: (0, wB.j)(Fk)
              },
              onClick: () => {
                tk(Fk)
              }
            }, Fk)
          })), (0, sk.jsx)("label", {
            className: ak()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: wk
            }),
            style: wk ? {
              background: (0, wB.j)(Bk)
            } : void 0,
            title: bk("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, sk.jsx)("input", {
              type: "color",
              "aria-label": bk("crosshairSettings:customColor"),
              value: (0, wB.j)(Bk),
              onChange: kk => {
                const Fk = (0, wB.o)(kk.target.value);
                null !== Fk && tk(Fk)
              }
            })
          })]
        })]
      })
    }

    function fB(kk) {
      let {
        settings: Fk,
        onChange: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Xk.x)(), tk = (kk, Rk) => {
        Bk((0, wB.t)(Fk, kk, Rk))
      }, ak = function(kk, Bk) {
        let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AB;
        const {
          min: ak,
          max: Xk,
          step: bk
        } = wB.d[kk];
        return (0, sk.jsx)(Ok.l, {
          name: Bk,
          min: ak,
          max: Xk,
          step: bk,
          initValue: Fk[kk],
          format: Rk,
          onChange: Fk => {
            tk(kk, Fk)
          }
        }, kk)
      }, bk = ["lines", "dot", "circle"].filter((kk => Fk[kk])), wk = (kk, Bk, Rk) => (0, sk.jsx)(Ok.e, {
        label: Bk,
        checked: Fk[kk],
        disabled: 1 === bk.length && bk[0] === kk,
        circleInfoText: Rk,
        onClick: Fk => {
          tk(kk, Fk)
        }
      }, kk), dk = "shapes" === Fk.style;
      return (0, sk.jsxs)(sk.Fragment, {
        children: [(0, sk.jsx)(Ok.i, {
          label: Rk("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Rk("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Rk("crosshairSettings:styleShapes")
          }],
          value: Fk.style,
          onChange: kk => {
            tk("style", kk)
          }
        }), (0, sk.jsx)(yB, {
          label: Rk("crosshairSettings:color"),
          value: Fk.color,
          swatches: VB,
          onChange: kk => {
            tk("color", kk)
          }
        }), ak("opacity", Rk("crosshairSettings:opacity"), eB), !dk && ak("size", Rk("crosshairSettings:size"), eB), dk && (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wk("lines", Rk("crosshairSettings:lines")), Fk.lines && ak("lineLength", Rk("crosshairSettings:lineLength")), Fk.lines && ak("lineThickness", Rk("crosshairSettings:lineThickness")), Fk.lines && ak("gap", Rk("crosshairSettings:gap")), Fk.lines && wk("tStyle", Rk("crosshairSettings:tStyle"))]
        }), dk && (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wk("dot", Rk("crosshairSettings:dot")), Fk.dot && ak("dotSize", Rk("crosshairSettings:dotSize"))]
        }), dk && (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wk("circle", Rk("crosshairSettings:circle")), Fk.circle && ak("circleRadius", Rk("crosshairSettings:circleRadius")), Fk.circle && ak("circleThickness", Rk("crosshairSettings:circleThickness"))]
        }), (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ak("outline", Rk("crosshairSettings:outline"), (kk => kk > 0 ? AB(kk) : Rk("crosshairSettings:off"))), Fk.outline > 0 && (0, sk.jsx)(yB, {
            label: Rk("crosshairSettings:outlineColor"),
            value: Fk.outlineColor,
            swatches: JB,
            onChange: kk => {
              tk("outlineColor", kk)
            }
          })]
        }), wk("growOnClick", Rk("crosshairSettings:growOnClick")), dk && wk("forGuns", Rk("crosshairSettings:forGuns"), Rk("crosshairSettings:forGunsInfo"))]
      })
    }
    var mB = Bk(67),
      WB = Bk(1230),
      vB = Bk(8955),
      iB = Bk(8957),
      YB = Bk(8962),
      oB = Bk(8970);
    const LB = ["sky", "grass", "stone", "sand", "snow", "night"],
      OB = "4rem";

    function EB(kk) {
      return {
        backgroundImage: `url(${kk})`,
        backgroundSize: `${OB} ${OB}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function SB(kk) {
      return {
        ...(() => {
          switch (kk) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return EB(vB);
            case "stone":
              return EB(iB);
            case "sand":
              return EB(YB);
            case "snow":
              return EB(oB);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function NB(kk) {
      return Object.freeze({
        ...wB.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...kk
      })
    }
    const HB = [{
        id: "default",
        settings: wB.f
      }, {
        id: "cross",
        settings: NB({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: NB({
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
        settings: NB({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: NB({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: NB({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: NB({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: NB({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      uB = ["growOnClick", "forGuns"];
    var MB = Bk(8974);

    function gB(kk) {
      let {
        label: Fk,
        selected: Bk,
        onClick: Rk,
        className: tk,
        style: Xk,
        children: bk
      } = kk;
      return (0, sk.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Bk,
        title: Fk,
        "aria-label": Fk,
        "data-pad-focusable": !0,
        className: ak()("CrosshairBackdropSwatch", tk, {
          Selected: Bk
        }),
        style: Xk,
        onClick: Rk,
        children: bk
      })
    }

    function UB(kk) {
      let {
        backdrop: Fk,
        onChange: Bk,
        game: Rk
      } = kk;
      const {
        t: tk
      } = (0, Xk.x)();
      return (0, sk.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": tk("crosshairSettings:background"),
        children: [Rk && (0, sk.jsx)(gB, {
          label: tk("crosshairSettings:bg_game"),
          selected: Rk.selected,
          onClick: Rk.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, sk.jsx)(bk.d, {
            name: "cube"
          })
        }), LB.map((kk => (0, sk.jsx)(gB, {
          label: tk(`crosshairSettings:bg_${kk}`),
          selected: !(null !== Rk && void 0 !== Rk && Rk.selected) && kk === Fk,
          style: SB(kk),
          onClick: () => {
            Bk(kk)
          }
        }, kk)))]
      })
    }

    function cB(kk) {
      let {
        settings: Fk,
        touch: Bk,
        backdrop: Rk,
        onChange: tk
      } = kk;
      const {
        t: bk
      } = (0, Xk.x)(), wk = function(kk) {
        var Fk;
        return null !== (Fk = HB.find((Fk => (0, wB.r)(Fk.settings, kk, uB)))) && void 0 !== Fk ? Fk : null
      }(Fk);
      return (0, sk.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": bk("crosshairSettings:presets"),
        children: HB.map((kk => {
          const Xk = (null === wk || void 0 === wk ? void 0 : wk.id) === kk.id;
          return (0, sk.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Xk,
            "data-pad-focusable": !0,
            className: ak()("CrosshairPreset", {
              Selected: Xk
            }),
            onClick: () => {
              tk(function(kk, Fk) {
                return {
                  ...Fk.settings,
                  growOnClick: kk.growOnClick,
                  forGuns: kk.forGuns
                }
              }(Fk, kk))
            },
            children: [(0, sk.jsx)("div", {
              className: "CrosshairPresetStage",
              style: SB(Rk),
              children: (0, sk.jsx)(MB.c, {
                settings: kk.settings,
                touch: Bk,
                inPreview: !0
              })
            }), (0, sk.jsx)("div", {
              className: "CrosshairPresetName",
              children: bk(`crosshairSettings:preset_${kk.id}`)
            })]
          }, kk.id)
        }))
      })
    }
    var GB = Bk(1617);

    function TB(kk, Fk) {
      const [Bk, tk] = (0, Rk.useState)(!1), ak = () => {
        tk(!1)
      }, [Xk, bk] = (0, Rk.useState)(!1), wk = (0, Rk.useRef)({
        growOnClick: kk.growOnClick,
        forGuns: kk.forGuns
      });
      (0, Rk.useEffect)((() => {
        const Fk = wk.current;
        wk.current = {
          growOnClick: kk.growOnClick,
          forGuns: kk.forGuns
        }, (kk.growOnClick && !Fk.growOnClick || kk.forGuns && !Fk.forGuns) && bk(!0)
      }), [kk.growOnClick, kk.forGuns]), (0, Rk.useEffect)((() => {
        if (!Xk) return;
        const kk = setTimeout((() => {
          bk(!1)
        }), 600);
        return () => {
          clearTimeout(kk)
        }
      }), [Xk]);
      const dk = Bk || Xk;
      return {
        view: {
          pressed: dk,
          spread: dk && kk.forGuns && !kk.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: kk => {
            !kk.target.closest(Fk) && (0, GB.e)(kk.currentTarget, kk.pointerId) && tk(!0)
          },
          onPointerUp: ak,
          onPointerCancel: ak,
          onLostPointerCapture: ak
        }
      }
    }

    function rB(kk) {
      let {
        settings: Fk,
        touch: Bk,
        backdrop: Rk,
        className: tk,
        children: Xk,
        label: bk
      } = kk;
      const wk = TB(Fk, ".CrosshairStageControls");
      return (0, sk.jsxs)("div", {
        className: ak()("CrosshairStage", tk),
        style: SB(Rk),
        ...wk.handlers,
        children: [(0, sk.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": bk,
          children: (0, sk.jsx)(MB.c, {
            settings: Fk,
            touch: Bk,
            inPreview: !0,
            ...wk.view
          })
        }), Xk]
      })
    }
    const DB = "crosshairFullScreen";

    function zB(kk) {
      let {
        settings: Fk,
        touch: Bk,
        backdrop: tk,
        onBackdrop: wk,
        inGame: dk,
        onChange: Vk,
        onClose: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Xk.x)(), ek = (0, Rk.useRef)(null);
      (0, WB.s)("popup", ek, Jk),
      function(kk) {
        const Fk = (0, Rk.useRef)(kk);
        Fk.current = kk, (0, Rk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [DB]: !0
          }, "");
          let kk = !1;
          const Bk = () => {
            kk = !0, Fk.current()
          };
          return window.addEventListener("popstate", Bk), () => {
            var Fk;
            window.removeEventListener("popstate", Bk), !kk && null !== (Fk = window.history.state) && void 0 !== Fk && Fk[DB] && window.history.back()
          }
        }), [])
      }(Jk);
      const yk = (0, Rk.useRef)(Jk);
      yk.current = Jk, (0, Rk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), yk.current())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), []);
      const mk = TB(Fk, ".CrosshairFullScreenPanel"),
        [Wk, vk] = (0, Rk.useState)(!0),
        ik = Wk && dk;
      (0, Rk.useEffect)((() => {
        if (ik) return Ek.c.set({
          crosshairGameView: !0
        }), () => {
          Ek.c.set({
            crosshairGameView: !1
          })
        }
      }), [ik]);
      const [Yk, Lk] = (0, Rk.useState)(!0);
      return (0, mB.createPortal)((0, sk.jsxs)("div", {
        ref: ek,
        className: "CrosshairFullScreen",
        style: ik ? void 0 : SB(tk),
        ...mk.handlers,
        children: [(0, sk.jsx)(MB.c, {
          settings: Fk,
          touch: Bk,
          inEditor: !0,
          ...mk.view
        }), (0, sk.jsxs)("div", {
          className: ak()("CrosshairFullScreenPanel", {
            Collapsed: !Yk
          }),
          children: [(0, sk.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, sk.jsx)(UB, {
              backdrop: tk,
              onChange: kk => {
                vk(!1), wk(kk)
              },
              game: dk ? {
                selected: ik,
                onSelect: () => {
                  vk(!0)
                }
              } : void 0
            }), (0, sk.jsx)(fk.O, {
              className: "CrosshairPanelToggle",
              ariaLabel: Ak(Yk ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                Lk(!Yk)
              },
              children: (0, sk.jsx)(bk.d, {
                name: Yk ? "caret-up" : "pen"
              })
            }), (0, sk.jsx)(fk.g, {
              className: "CrosshairFullScreenDone",
              onClick: Jk,
              padDefaultFocus: !0,
              children: Ak("crosshairSettings:done")
            })]
          }), Yk && (0, sk.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, sk.jsx)(cB, {
              settings: Fk,
              touch: Bk,
              backdrop: tk,
              onChange: Vk
            }), (0, sk.jsx)(fB, {
              settings: Fk,
              onChange: Vk
            })]
          })]
        })]
      }), document.body)
    }
    var PB = Bk(2531),
      hB = Bk(8987);

    function qB(kk) {
      let {
        settings: Fk,
        onChange: Bk
      } = kk;
      const {
        t: tk
      } = (0, Xk.x)(), wk = (0, hB.g)(Fk), [dk, Vk] = (0, PB.i)(), [Jk, Ak] = (0, Rk.useState)(!1), ek = (0, Rk.useRef)(null), [yk, mk] = (0, PB.i)(), [Wk, vk] = (0, Rk.useState)(!1);
      return (0, sk.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, sk.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, sk.jsxs)(fk.O, {
            className: ak()("CrosshairCopy", {
              ActiveSecondaryButton: dk
            }),
            onClick: () => {
              (0, PB.f)(wk, {
                useShareSheet: !1,
                onOutcome: kk => {
                  Ak("failed" === kk), "copied" === kk && Vk()
                }
              })
            },
            children: [(0, sk.jsx)(bk.d, {
              name: dk ? "check" : "copy"
            }), " ", tk(dk ? "general:copied" : "crosshairSettings:copy")]
          }), (0, sk.jsx)(Yk.e, {
            className: "CrosshairPaste",
            domRef: ek,
            ariaLabel: tk("crosshairSettings:paste"),
            placeholderText: tk("crosshairSettings:paste"),
            onValueChange: kk => {
              const Fk = (0, hB.e)(kk);
              vk(!Fk && kk.trim().length >= hB.d), Fk && (Bk(Fk), ek.current.value = "", mk())
            }
          })]
        }), Jk && (0, sk.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: wk,
          "aria-label": tk("crosshairSettings:copy"),
          onFocus: kk => {
            kk.currentTarget.select()
          }
        }), (0, sk.jsxs)("div", {
          "aria-live": "polite",
          children: [Wk && (0, sk.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: tk("crosshairSettings:pasteInvalid")
          }), yk && !Wk && (0, sk.jsx)("div", {
            className: "CrosshairShareNote",
            children: tk("crosshairSettings:applied")
          })]
        })]
      })
    }
    var CB = Bk(8990);
    let ZB = "sky";

    function pB(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Xk.x)(), {
        isTouchScreen: tk,
        gameState: ak,
        clientEscMenuOptions: wk
      } = (0, Ek.h)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), dk = (0, CB.g)(), [Vk, Jk] = (0, Rk.useState)(ZB), Ak = kk => {
        ZB = kk, Jk(kk)
      }, [ek, yk] = (0, Rk.useState)(!1);
      return (0, Rk.useEffect)((() => {
        Fk || yk(!1)
      }), [Fk]), (0, sk.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, sk.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, sk.jsx)(rB, {
            className: "CrosshairPreviewStage",
            settings: dk,
            touch: tk,
            backdrop: Vk,
            label: Bk("crosshairSettings:preview"),
            children: (0, sk.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, sk.jsx)(UB, {
                backdrop: Vk,
                onChange: Ak
              }), (0, sk.jsxs)(fk.O, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  yk(!0)
                },
                children: [(0, sk.jsx)(bk.d, {
                  name: "expand"
                }), " ", Bk("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, sk.jsx)("div", {
          className: "SettingBox",
          children: (0, sk.jsx)(cB, {
            settings: dk,
            touch: tk,
            backdrop: Vk,
            onChange: CB.d
          })
        }), (0, sk.jsx)(qB, {
          settings: dk,
          onChange: CB.d
        }), tk && (0, sk.jsx)(bB.d, {
          note: (0, XB.g)(tk, wk.touchActionButtons) ? Bk("crosshairSettings:touchNote") : void 0
        }), (0, sk.jsx)(fB, {
          settings: dk,
          onChange: CB.d
        }), ek && (0, sk.jsx)(zB, {
          settings: dk,
          touch: tk,
          backdrop: Vk,
          onBackdrop: Ak,
          inGame: "inGame" === ak,
          onChange: CB.d,
          onClose: () => {
            yk(!1)
          }
        })]
      })
    }
    var KB = Bk(8548),
      xB = Bk(1349),
      jB = Bk(4686),
      lB = Bk(8996),
      nB = Bk(1876),
      IB = Bk(4044),
      QB = Bk(1879),
      kR = Bk(685);
    const FR = (0, Rk.memo)((function() {
      const {
        clientEscMenuOptions: kk
      } = (0, Ek.h)(["clientEscMenuOptions"]), {
        recording: Fk,
        clipping: Bk,
        hasClipBuffer: tk
      } = (0, nB.h)("replayRecorder"), Xk = (0, nB.f)("connectedGame", (kk => kk.replay)), bk = (0, IB.j)(), wk = !1 === (0, ek.j)("canRecordReplays");
      (0, Rk.useEffect)((() => {
        Wk.gameBridge.send("setRecorderPrefs", {
          clipping: kk.enableClipping,
          clipSeconds: kk.clipDurationSeconds
        })
      }), [kk.enableClipping, kk.clipDurationSeconds]);
      const dk = bk || Xk,
        Vk = !dk && !wk,
        Jk = Fk || Vk,
        Ak = Vk,
        yk = Ak && Bk && !Fk;

      function mk() {
        Jk && Wk.gameBridge.send("toggleRecording", null)
      }
      return (0, sk.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, sk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, sk.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Fk ? (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsxs)(fk.J, {
                className: "ReplayViewerCategoryButton",
                onClick: mk,
                disabled: !Jk,
                children: [(0, sk.jsx)("span", {
                  children: "Stop Recording"
                }), (0, sk.jsx)(QB.c, {
                  noaAction: "recordGame"
                })]
              }), (0, sk.jsx)(lB.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, sk.jsxs)(fk.g, {
              className: "ReplayViewerCategoryButton",
              onClick: mk,
              disabled: !Jk,
              children: [(0, sk.jsx)("span", {
                children: "Start Recording"
              }), (0, sk.jsx)(QB.c, {
                noaAction: "recordGame"
              })]
            })
          }), wk && (0, sk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), dk && !Fk && (0, sk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, sk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, sk.jsx)(Ok.e, {
            label: "Enable clipping",
            checked: kk.enableClipping,
            disabled: !Ak,
            onClick: function(kk) {
              Ak && Ek.c.setClientEscMenuOptions({
                enableClipping: kk
              })
            },
            className: ak()({
              SettingBoxDisabled: !Ak
            })
          }), (0, sk.jsx)(Ok.l, {
            name: "Clip duration (seconds)",
            min: kR.k,
            max: kR.h,
            step: kR.d,
            initValue: kk.clipDurationSeconds,
            onChange: function(kk) {
              Ek.c.setClientEscMenuOptions({
                clipDurationSeconds: kk
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Ak || !kk.enableClipping
          })]
        }), (0, sk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, sk.jsxs)(fk.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              yk && Wk.gameBridge.send("saveClip", null)
            },
            disabled: !yk,
            children: [(0, sk.jsx)("span", {
              children: "Record clip"
            }), (0, sk.jsx)(QB.c, {
              noaAction: "recordClip"
            })]
          }), kk.enableClipping && !tk && Ak && !Fk && (0, sk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Fk && (0, sk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, sk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, sk.jsxs)(fk.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, IB.f)(!0), Ek.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: bk,
            children: [(0, sk.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, sk.jsx)(QB.c, {
              noaAction: "replayViewerOpen"
            })]
          }), bk && (0, sk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, sk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, sk.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, sk.jsx)("iframe", {
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
    var BR = Bk(1808);
    const RR = {
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
        icon: () => (0, sk.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, sk.jsx)("path", {
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
      ie: {
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

    function tR() {
      return Promise.all([Bk.e(74), Bk.e(131), Bk.e(125), Bk.e(122)]).then((() => Bk(40497))).then((kk => ({
        default: kk.ShaderPackCategory
      })), (kk => (console.error("Failed to load the shader pack settings", kk), {
        default: aR
      })))
    }

    function aR() {
      const {
        t: kk
      } = (0, Xk.x)();
      return (0, sk.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: kk("shaderPack:tabLoadFailed")
      })
    }
    var XR = Bk(1344);
    const bR = (0, Rk.lazy)((() => Bk.e(263).then((() => Bk(40483))).then((kk => ({
        default: kk.BloxdInformation
      }))))),
      wR = (0, Rk.lazy)(tR);

    function dR(kk) {
      return kk ? "general" : "account"
    }
    const sR = new Map,
      VR = (0, Rk.memo)((function(kk) {
        let {
          show: Fk,
          setBeforeResumeCallback: Bk
        } = kk;
        (0, yk.c)();
        const {
          gameState: tk,
          openSettingsCategory: ak
        } = (0, Ek.h)(["gameState", "openSettingsCategory"]), {
          userContext: wk
        } = (0, Ak.e)(), {
          t: dk
        } = (0, Xk.x)(), Yk = (0, Jk.b)(), Lk = (0, ek.j)("minChunkAddDist"), Ok = "inGame" === tk, [Sk, uk] = (0, Rk.useState)(dR(Ok)), [Mk, gk] = (0, Rk.useState)(null), [Uk, ck] = (0, Rk.useState)([]), Gk = (0, Rk.useRef)(function() {
          const kk = new Date,
            Fk = 6 * (kk.getMonth() + kk.getDate()) % sF.w.length;
          return [...sF.w, ...sF.w].slice(Fk, Fk + 6)
        }()), Tk = (0, Rk.useRef)(null), rk = (0, HF.g)(xB.h, (0, xB.b)()), Dk = Object.keys(RR).filter((kk => {
          switch (kk) {
            case "replayViewer":
              return Ok;
            case "developerTools":
              return wk.playerHasRank("developer") || !1;
            case "texturePack":
              return mk.featureFlags.settings.canChangeTexturePack;
            case "ie":
              return mk.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return mk.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Hk.q;
            case "controller":
              return mk.featureFlags.useControllerSupport && (rk || "controller" === Sk);
            default:
              return !0
          }
        }));
        (0, HF.f)("toggleFullCoordinateOverlay", (() => {
          const kk = nF("showCoordinates") && nF("showChunkCoordinates") && nF("showFPS");
          IF("showCoordinates", !kk), IF("showChunkCoordinates", !kk), IF("showFPS", !kk), Yk()
        })), (0, HF.f)("updatedChunkLoadDist", (() => {
          Yk()
        })), (0, Rk.useEffect)((() => {
          if (gk(null), null === Ek.c.get("openSettingsCategory")) {
            const kk = (0, XR.h)() ? sR.get(Ok) : void 0;
            uk(kk && Dk.includes(kk) ? kk : dR(Ok))
          }
        }), [Fk]), (0, Rk.useEffect)((() => {
          null !== ak && (uk(ak), sR.set(Ok, ak), Ek.c.set({
            openSettingsCategory: null
          }))
        }), [ak, Ok]), (0, Rk.useLayoutEffect)((() => {
          Tk.current && (Tk.current.scrollTop = 0)
        }), [Sk, Fk]), (0, Rk.useEffect)((() => {
          "updateLog" === Sk && (0, ik.e)().then(ck)
        }), [Sk]), (0, Rk.useEffect)((() => {
          if ((0, CF.F)(Lk)) return;
          const [kk, Fk] = (0, tB.g)(), [Bk, Rk] = (0, rF.g)(Lk), tk = (0, BR.e)(Lk[0], kk, Bk), ak = (0, BR.e)(Lk[1], Fk, Rk);
          Wk.gameBridge.send("setChunkAddDistance", {
            horizontal: tk,
            vertical: ak
          })
        }), [Lk]);
        const zk = (0, Rk.useCallback)((async () => {
          Mk && (await Mk(), gk(null))
        }), [Mk]);

        function Pk() {
          Ek.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, Rk.useEffect)((() => {
          Bk((() => zk))
        }), [zk, Bk]), (0, sk.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Fk ? {} : {
            display: "none"
          },
          children: [(0, sk.jsx)("div", {
            className: "MenuSideBar",
            children: (0, sk.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, sk.jsx)(Vk, {
                items: Dk.map((kk => {
                  const Fk = RR[kk].icon;
                  return {
                    id: kk,
                    faIcon: "string" === typeof Fk ? Fk : void 0,
                    iconElement: "string" === typeof Fk ? void 0 : (0, sk.jsx)(Fk, {}),
                    title: dk(RR[kk].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Sk,
                onClick: kk => {
                  !async function(kk) {
                    await zk(), uk(kk), sR.set(Ok, kk)
                  }(kk)
                }
              })
            })
          }), (0, sk.jsxs)("div", {
            ref: Tk,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Sk && (0, sk.jsx)(vF, {
              showing: Fk,
              inGame: Ok
            }), "general" === Sk && (0, sk.jsx)(EF, {
              inGame: Ok
            }), "audio" === Sk && (0, sk.jsx)(SF, {}), "notifications" === Sk && (0, sk.jsx)(TF, {}), "graphics" === Sk && (0, sk.jsx)(RB, {
              minChunkAddDist: null !== Lk && void 0 !== Lk ? Lk : [2, 2],
              getValue: nF,
              onChange: IF,
              setApplySettingsCallback: gk
            }), "controls" === Sk && (0, sk.jsx)(aB.e, {}), "crosshair" === Sk && (0, sk.jsx)(pB, {
              showing: Fk
            }), "controller" === Sk && mk.featureFlags.useControllerSupport && (0, sk.jsx)(KB.c, {}), mk.featureFlags.settings.canChangeTexturePack && "texturePack" === Sk && (0, sk.jsx)(jB.b, {
              setApplySettingsCallback: gk
            }), mk.featureFlags.settings.canUseShaderPacks && "ie" === Sk && (0, sk.jsx)(Rk.Suspense, {
              fallback: null,
              children: (0, sk.jsx)(wR, {
                setApplySettingsCallback: gk
              })
            }), "updateLog" === Sk && (0, sk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, sk.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Uk.map(((kk, Fk) => (0, sk.jsx)(vk.c, {
                  updateLog: kk,
                  index: Fk,
                  close: Pk
                }, Fk)))
              })
            }), "information" === Sk && (0, sk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, sk.jsx)(Rk.Suspense, {
                fallback: null,
                children: (0, sk.jsx)(bR, {})
              })
            }), "alternativeDomains" === Sk && (0, sk.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, sk.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: dk("settingsMenu:unblockedDomainsDescription")
              }), (0, sk.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Gk.current.map((kk => (0, sk.jsxs)(fk.g, {
                  onClick: () => {
                    window.open(`https://${kk}`)
                  },
                  children: [(0, sk.jsx)(bk.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", kk]
                }, kk)))
              })]
            }), "replayViewer" === Sk && (0, sk.jsx)(FR, {}), "developerTools" === Sk && (0, sk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, sk.jsx)(Nk, {
                setApplySettingsCallback: gk
              })
            }), null !== Mk && (0, sk.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, sk.jsx)(fk.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: zk,
                children: dk("general:apply")
              })
            })]
          })]
        })
      }));
    var JR = Bk(2466);
    const AR = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      eR = (0, Rk.lazy)((() => Promise.resolve().then((() => Bk(4391))).then((kk => {
        kk.needGameClientAfterPaint();
        const Fk = kk.matchmakingLibrariesPromise.then((kk => (0, JR.e)(kk.loadCharacterCustomisationUI(), (kk => kk.CharacterCustomisationUI))));
        return Promise.all([kk.ensureGameSetup(), Fk]).then((kk => {
          let [, Fk] = kk;
          return Fk
        }))
      }))));

    function yR(kk) {
      let {
        show: Fk
      } = kk;
      const {
        userContext: Bk
      } = (0, Ak.e)(), [tk, ak] = (0, Rk.useState)("characters");
      if (!Fk) return null;
      const Xk = AR.filter((kk => "cape" !== kk && "nameColour" !== kk || Bk.getPlayerRanks().includes("super") || (0, hk.purchasesAllowed)())).map((kk => ({
        id: kk,
        faIcon: sF.F[kk],
        title: sF.G[kk],
        redDot: !1
      })));
      return (0, sk.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, sk.jsx)("div", {
          className: "MenuSideBar",
          children: (0, sk.jsx)(Vk, {
            items: Xk,
            selectedItemId: tk,
            onClick: kk => {
              ak(kk)
            }
          })
        }), (0, sk.jsx)("div", {
          className: "MenuBody",
          children: (0, sk.jsx)(Rk.Suspense, {
            fallback: (0, sk.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, sk.jsx)(Lk.b, {})
            }),
            children: (0, sk.jsx)(eR, {
              selectedTab: tk
            })
          })
        })]
      })
    }
    var fR = Bk(1408),
      mR = Bk(9004),
      WR = Bk(4268),
      vR = Bk(3216),
      iR = Bk(3265),
      YR = Bk(9029),
      oR = Bk(8445),
      LR = Bk(9006),
      OR = Bk(9018),
      ER = Bk(1835),
      SR = Bk(1812),
      NR = Bk(4612),
      HR = Bk(1213),
      uR = Bk(1173),
      MR = Bk(1614),
      gR = Bk(8521);

    function UR(kk) {
      return kk ? Object.keys(kk).sort(((Fk, Bk) => {
        var Rk, tk, ak, Xk;
        const bk = (null !== (Rk = null === (tk = kk[Bk]) || void 0 === tk ? void 0 : tk.sortPriority) && void 0 !== Rk ? Rk : 0) - (null !== (ak = null === (Xk = kk[Fk]) || void 0 === Xk ? void 0 : Xk.sortPriority) && void 0 !== ak ? ak : 0);
        return 0 !== bk ? bk : Fk.localeCompare(Bk)
      })) : []
    }
    const cR = [{
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

    function GR(kk) {
      for (const {
          threshold: Fk,
          suffix: Bk
        }
        of cR)
        if (kk >= Fk) {
          const Rk = kk / Fk;
          return Rk >= 100 ? `${Math.floor(Rk)}${Bk}` : Rk >= 10 ? `${Rk.toFixed(1).replace(/\.0$/,"")}${Bk}` : `${Rk.toFixed(2).replace(/\.?0+$/,"")}${Bk}`
        } return String(kk)
    }
    var TR = Bk(4712);
    const rR = {
        normal: "0.8em",
        big: "1em"
      },
      DR = (0, Rk.memo)((function(kk) {
        let {
          item: Fk,
          amount: Bk = 0,
          size: Rk = "normal",
          tier: tk = null
        } = kk;
        return (0, sk.jsx)("div", {
          className: ak()("SmpSlot", `SmpSlot-${Rk}`),
          children: Fk && (0, sk.jsx)(ER.e, {
            itemName: Fk,
            amount: Bk > 1 ? Bk : 0,
            amountFontSize: rR[Rk],
            enchantmentTier: tk
          })
        })
      }));

    function zR(kk) {
      let {
        amount: Fk,
        exact: Bk = !1,
        className: Rk
      } = kk;
      return (0, sk.jsxs)("span", {
        className: ak()("SmpGold", Rk),
        children: [(0, sk.jsx)("span", {
          className: "SmpCoin",
          children: (0, sk.jsx)(ER.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Bk ? Fk.toLocaleString("en-US") : GR(Fk)]
      })
    }

    function PR(kk) {
      let {
        count: Fk = 5,
        grid: Bk = !1
      } = kk;
      return (0, sk.jsx)("div", {
        className: Bk ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Fk
        }, ((kk, Fk) => (0, sk.jsxs)("div", {
          className: ak()(Bk ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, sk.jsx)("div", {
            className: ak()("SmpSlot", Bk ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, sk.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, sk.jsx)("b", {}), (0, sk.jsx)("small", {})]
          }), (0, sk.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Fk)))
      })
    }

    function hR(kk) {
      let {
        title: Fk,
        children: Bk
      } = kk;
      return (0, sk.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, sk.jsx)("b", {
          children: Fk
        }), Bk && (0, sk.jsx)("small", {
          children: Bk
        })]
      })
    }

    function qR(kk) {
      let {
        entry: Fk
      } = kk;
      return (0, sk.jsx)(hR, {
        title: (0, sk.jsx)(SR.d, {
          text: Fk.item.customTitle
        }),
        children: (0, sk.jsx)(SR.d, {
          text: Fk.item.description
        })
      })
    }

    function CR(kk) {
      return (0, sk.jsx)(TR.b, {
        ...kk,
        className: ak()("SmpChoice", kk.className),
        reselectable: !0
      })
    }

    function ZR() {
      return (0, sk.jsx)("span", {
        className: "SmpLoader",
        children: (0, sk.jsx)(Lk.b, {})
      })
    }

    function pR(kk) {
      let {
        value: Fk,
        onChange: Bk,
        min: tk = 1,
        max: ak,
        step: Xk = 1,
        label: bk
      } = kk;
      const wk = (0, Rk.useRef)(null),
        dk = (0, Rk.useRef)(Fk);
      dk.current = Fk;
      const [Vk, Jk] = (0, Rk.useState)(null), Ak = kk => Math.max(tk, Math.min(ak, Math.floor(kk))), ek = kk => {
        const Fk = dk.current,
          Rk = "function" === typeof Xk ? Xk(Fk, kk) : Xk,
          tk = Ak(Fk + Rk * kk);
        dk.current = tk, Bk(tk)
      };
      (0, Rk.useEffect)((() => {
        if (null === Vk) return;
        let kk;
        const Fk = () => {
            Jk(null)
          },
          Bk = setTimeout((() => {
            kk = setInterval((() => {
              ek(Vk);
              const kk = dk.current;
              (Vk > 0 ? kk >= ak : kk <= tk) && Fk()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Fk), window.addEventListener("pointercancel", Fk), window.addEventListener("blur", Fk), () => {
          clearTimeout(Bk), clearInterval(kk), window.removeEventListener("pointerup", Fk), window.removeEventListener("pointercancel", Fk), window.removeEventListener("blur", Fk)
        }
      }), [Vk]), (0, Rk.useEffect)((() => {
        const kk = wk.current;
        kk && document.activeElement !== kk && kk.value !== String(Fk) && (kk.value = String(Fk))
      }), [Fk]), (0, Rk.useEffect)((() => {
        const kk = wk.current;
        if (!kk) return;
        const Fk = () => {
          kk.value = String(dk.current)
        };
        return kk.addEventListener("blur", Fk), () => {
          kk.removeEventListener("blur", Fk)
        }
      }), []);
      const yk = kk => (0, sk.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${kk>0?"More":"Less"} ${bk}`,
        disabled: kk > 0 ? Fk >= ak : Fk <= tk,
        onPointerDown: Fk => {
          0 === Fk.button && (ek(kk), Jk(kk))
        },
        onKeyDown: Fk => {
          "Enter" !== Fk.key && " " !== Fk.key || ek(kk)
        },
        onContextMenu: kk => {
          kk.preventDefault()
        },
        children: kk > 0 ? "+" : "\u2212"
      });
      return (0, sk.jsxs)("div", {
        className: "SmpStepper",
        children: [yk(-1), (0, sk.jsx)(Yk.e, {
          className: "SmpStepperInput",
          domRef: wk,
          defaultValue: String(Fk),
          ariaLabel: bk,
          type: "text",
          blurOnEnter: !0,
          onValueChange: kk => {
            const Fk = kk.replace(/[^\d]/g, "");
            wk.current && Fk !== kk && (wk.current.value = Fk), "" !== Fk && Bk(Ak(Number(Fk)))
          }
        }), yk(1)]
      })
    }

    function KR(kk) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, kk))) - 1))
    }
    var xR = Bk(9022),
      jR = Bk(1192);
    const lR = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    jR.u, zk.Kc.length;
    new Map;
    var nR = Bk(3090);

    function IR(kk, Fk) {
      var Bk;
      return Fk && (null === (Bk = kk[Fk]) || void 0 === Bk ? void 0 : Bk.smp) || null
    }

    function QR(kk, Fk) {
      const Bk = [];
      for (const tk of UR(kk)) {
        var Rk;
        const ak = kk[tk];
        (null === (Rk = ak.smp) || void 0 === Rk ? void 0 : Rk.kind) === Fk && Bk.push({
          key: tk,
          item: ak,
          meta: ak.smp
        })
      }
      return Bk
    }

    function kt(kk, Fk) {
      var Bk;
      return null !== (Bk = QR(kk, Fk)[0]) && void 0 !== Bk ? Bk : null
    }
    const Ft = "50% 0% 50% 0%",
      Bt = [{
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

    function Rt(kk) {
      const Fk = kk - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Bk,
          suffix: Rk
        }
        of Bt)
        if (Fk >= Bk) return `${Math.floor(Fk/Bk)}${Rk}`;
      return "<1s"
    }

    function tt(kk) {
      const Fk = kk.map(oR.g),
        Bk = [];
      return Fk.forEach(((kk, Rk) => {
        const tk = function(kk) {
            const Fk = kk.match(/\d+/);
            return Fk ? Number(Fk[0]) : 0
          }(kk),
          ak = Rk === Fk.length - 1;
        (ak || 1 === tk || 10 === tk || 100 === tk) && Bk.push({
          label: kk,
          quantity: tk,
          isAll: ak
        })
      })), Bk
    }
    let Xt = null;

    function bt(kk, Fk) {
      const Bk = Fk.trim().toLowerCase();
      if (!Bk) return [];
      const Rk = kk => {
          if (kk === Bk) return 0;
          if (kk.startsWith(Bk)) return 1;
          const Fk = kk.indexOf(Bk);
          return -1 === Fk ? -1 : 2 + Fk
        },
        tk = [];
      for (const bk of kk) {
        const kk = [Rk(bk.lowerLabel), Rk(bk.lowerName)].filter((kk => -1 !== kk));
        kk.length && tk.push({
          item: bk,
          rank: Math.min(...kk)
        })
      }
      if (tk.length > 0) return tk.sort(((kk, Fk) => kk.rank - Fk.rank)).map((kk => kk.item));
      const ak = [...Bk],
        Xk = kk => {
          let Fk = 0;
          for (const Bk of ak) {
            if (Fk = kk.indexOf(Bk, Fk), -1 === Fk) return !1;
            Fk++
          }
          return !0
        };
      return kk.filter((kk => Xk(kk.lowerLabel) || Xk(kk.lowerName)))
    }

    function wt(kk, Fk) {
      var Bk;
      return null !== (Bk = null === kk || void 0 === kk ? void 0 : kk[Fk]) && void 0 !== Bk ? Bk : Fk
    }

    function dt(kk, Fk) {
      const Bk = kk.userInput;
      return void 0 !== Fk && "dropdown" === (null === Bk || void 0 === Bk ? void 0 : Bk.type) && Bk.dropdownOptions.map(oR.g).includes(Fk) ? Fk : function(kk) {
        const Fk = kk.userInput;
        if ("dropdown" !== (null === Fk || void 0 === Fk ? void 0 : Fk.type) || 0 === Fk.dropdownOptions.length) return null;
        const Bk = Fk.dropdownOptions.map(oR.g);
        return Fk.initialValue && Bk.includes(Fk.initialValue) ? Fk.initialValue : Bk[Bk.length - 1]
      }(kk)
    }

    function st(kk) {
      return void 0 === kk ? "" : JSON.stringify(kk)
    }
    const Vt = (0, Rk.createContext)(null);

    function Jt() {
      return (0, Rk.useContext)(Vt)
    }
    var At = Bk(2563);
    const et = (0, Rk.memo)((function(kk) {
        let {
          name: Fk,
          label: Bk,
          onPick: Rk
        } = kk;
        return (0, sk.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Bk,
          onClick: () => {
            Rk(Fk)
          },
          children: [(0, sk.jsx)(DR, {
            item: Fk,
            size: "big"
          }), (0, sk.jsx)("span", {
            children: Bk
          })]
        })
      })),
      yt = (0, Rk.memo)((function(kk) {
        let {
          items: Fk,
          query: Bk,
          onPick: tk
        } = kk;
        const {
          t: ak
        } = (0, Xk.x)(), [bk, wk] = (0, Rk.useState)(new Set), dk = (0, Rk.useMemo)((() => function(kk) {
          const Fk = new Map;
          for (const Bk of kk) {
            let kk = Fk.get(Bk.category);
            kk || (kk = [], Fk.set(Bk.category, kk)), kk.push(Bk)
          }
          return [...lR, "other"].filter((kk => Fk.has(kk))).map((kk => ({
            category: kk,
            items: Fk.get(kk)
          })))
        }(Fk)), [Fk]), Vk = (0, Rk.useMemo)((() => bt(Fk, Bk).slice(0, 60)), [Fk, Bk]);
        return Bk.trim() ? 0 === Vk.length ? (0, sk.jsx)(hR, {
          title: ak("smpShop:noItemsFound", {
            query: Bk.trim()
          }),
          children: ak("smpShop:tryShorterName")
        }) : (0, sk.jsx)(At.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Ft,
          observerUpdateDeps: [Bk],
          children: Vk.map((kk => (0, sk.jsx)(et, {
            name: kk.name,
            label: kk.label,
            onPick: tk
          }, kk.name)))
        }) : (0, sk.jsx)(sk.Fragment, {
          children: dk.map((kk => {
            let {
              category: Fk,
              items: Bk
            } = kk;
            const Rk = bk.has(Fk) || Bk.length <= 48,
              Xk = Rk ? Bk : Bk.slice(0, 48);
            return (0, sk.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, sk.jsxs)("h4", {
                children: [ak("other" === Fk ? "smpShop:otherItems" : `creativeInventory:${Fk}`), !Rk && (0, sk.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    wk(new Set([...bk, Fk]))
                  },
                  children: ak("smpShop:showAll", {
                    count: Bk.length
                  })
                })]
              }), (0, sk.jsx)(At.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Ft,
                observerUpdateDeps: [Rk],
                children: Xk.map((kk => (0, sk.jsx)(et, {
                  name: kk.name,
                  label: kk.label,
                  onPick: tk
                }, kk.name)))
              })]
            }, Fk)
          }))
        })
      }));

    function ft(kk, Fk) {
      const {
        searched: Bk,
        shown: tk,
        searchFor: ak,
        loading: Xk
      } = function(kk, Fk) {
        var Bk;
        const tk = Jt(),
          [ak, Xk] = (0, Rk.useState)(void 0),
          bk = (0, Rk.useRef)(void 0),
          wk = (0, Rk.useRef)(0),
          dk = (0, Rk.useRef)(void 0),
          sk = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.meta.item) && void 0 !== Bk ? Bk : null,
          Vk = !!kk && tk.isPending(kk.key);
        (0, Rk.useEffect)((() => {
          if (!kk || Vk || !Fk || void 0 === ak || ak === sk) return;
          const Bk = ak === bk.current && tk.gaveUpAt(kk.key) > wk.current && dk.current !== ak;
          (ak !== bk.current || Bk) && tk.act(kk.key, null !== ak && void 0 !== ak ? ak : "*", Bk) && (Bk && (dk.current = ak), bk.current = ak, wk.current = Date.now())
        }), [kk, Vk, Fk, ak, sk, tk]);
        const Jk = (0, Rk.useCallback)((kk => {
            bk.current = void 0, dk.current = void 0, Xk(kk)
          }), []),
          Ak = void 0 !== ak && ak !== sk && (Vk || bk.current !== ak);
        return {
          searched: sk,
          shown: Ak ? ak : sk,
          searchFor: Jk,
          loading: Ak || Vk || null !== sk && !Fk
        }
      }(kk, Fk), bk = (0, Rk.useMemo)((() => function() {
        var kk;
        let Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const tk = `${(0,nR.h)()}\x1f${Fk.join("\x1e")}\x1f${Bk.join("\x1e")}\x1f${JSON.stringify(Rk)}`;
        if ((null === (kk = Xt) || void 0 === kk ? void 0 : kk.key) === tk) return Xt.items;
        const ak = new Set(Bk),
          Xk = new Set,
          bk = [],
          wk = (kk, Fk) => {
            var Bk;
            if (!kk || Xk.has(kk) || ak.has(kk)) return;
            Xk.add(kk);
            const tk = null !== (Bk = Rk[kk]) && void 0 !== Bk ? Bk : kk;
            bk.push({
              name: kk,
              label: tk,
              lowerLabel: tk.toLowerCase(),
              lowerName: kk.toLowerCase(),
              category: Fk
            })
          };
        for (const sk of (0, xR.creativeItemIds)()) {
          var dk;
          (0, xR.itemIsDisabled)(sk, !0, !0, !1) || (0, xR.showOnlyInCreativeSearch)(sk) || wk((0, nR.f)(sk), null !== (dk = (0, xR.creativeCategoryOf)(sk)) && void 0 !== dk ? dk : "other")
        }
        for (const sk of Fk) wk(sk, "other");
        return Xt = {
          key: tk,
          items: bk
        }, bk
      }(null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names)), [null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names]), [wk, dk] = (0, Rk.useState)(""), [sk, Vk] = (0, Rk.useState)(0), [Jk, Ak] = (0, Rk.useState)("recent"), ek = (0, Rk.useCallback)((kk => {
        dk(""), Vk((kk => kk + 1)), ak(kk)
      }), [ak]), yk = "browse" === Jk || "" !== wk.trim();
      return {
        searched: Bk,
        shown: tk,
        searchFor: ak,
        loading: Xk,
        catalogue: bk,
        names: null === kk || void 0 === kk ? void 0 : kk.meta.names,
        query: wk,
        setQuery: dk,
        searchBoxKey: sk,
        pickItem: ek,
        setView: Ak,
        browsing: yk
      }
    }

    function mt(kk) {
      let {
        browser: Fk,
        children: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Xk.x)(), tk = Jt();
      return (0, sk.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, sk.jsx)("div", {
          className: "SmpSearch",
          children: (0, sk.jsx)(Yk.e, {
            className: "SmpSearchInput",
            placeholderText: Rk("smpShop:searchPlaceholder"),
            defaultValue: Fk.query,
            onValueChange: kk => {
              Fk.setQuery(kk), Fk.searched && kk.trim() && Fk.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const kk = bt(Fk.catalogue, Fk.query)[0];
              kk ? Fk.pickItem(kk.name) : Fk.query.trim() && tk.notify(Rk("smpShop:noItemsFound", {
                query: Fk.query.trim()
              }))
            }
          }, Fk.searchBoxKey)
        }), Bk]
      })
    }

    function Wt(kk) {
      let {
        browser: Fk,
        recentLabel: Bk,
        children: Rk
      } = kk;
      const {
        t: tk
      } = (0, Xk.x)();
      return (0, sk.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, sk.jsx)(CR, {
          options: [{
            value: "recent",
            label: Bk
          }, {
            value: "browse",
            label: tk("smpShop:browseItems")
          }],
          value: Fk.browsing ? "browse" : "recent",
          onChange: Fk.setView,
          ariaLabel: tk("smpShop:show")
        }), !Fk.browsing && Rk]
      })
    }

    function vt(kk) {
      let {
        item: Fk,
        names: Bk,
        summary: Rk,
        onBack: tk,
        children: ak
      } = kk;
      const {
        t: bk
      } = (0, Xk.x)();
      return (0, sk.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, sk.jsx)(fk.c, {
          className: "SmpBackButton",
          onClick: tk,
          children: bk("general:back")
        }), (0, sk.jsx)(DR, {
          item: Fk,
          size: "big"
        }), (0, sk.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, sk.jsx)("b", {
            children: wt(Bk, Fk)
          }), Rk && (0, sk.jsx)("small", {
            children: Rk
          })]
        }), ak]
      })
    }

    function it(kk) {
      let {
        browser: Fk,
        className: Bk,
        action: Rk,
        above: tk,
        list: Xk,
        summary: bk,
        recentLabel: wk,
        listControls: dk,
        onBack: Vk
      } = kk;
      return (0, sk.jsxs)("div", {
        className: ak()("SmpScreen", Bk),
        children: [(0, sk.jsx)(mt, {
          browser: Fk,
          children: Rk
        }), Fk.shown && (0, sk.jsx)(vt, {
          item: Fk.shown,
          names: Fk.names,
          summary: !Fk.loading && bk,
          onBack: () => {
            null === Vk || void 0 === Vk || Vk(), Fk.searchFor(null)
          },
          children: dk
        }), tk, Fk.shown ? Xk : (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsx)(Wt, {
            browser: Fk,
            recentLabel: wk,
            children: dk
          }), Fk.browsing ? (0, sk.jsx)(yt, {
            items: Fk.catalogue,
            query: Fk.query,
            onPick: Fk.pickItem
          }) : Xk]
        })]
      })
    }

    function Yt(kk, Fk) {
      const Bk = kk.map((kk => {
        let {
          meta: Fk
        } = kk;
        return Fk.pricePerItem
      }));
      return "min" === Fk ? Math.min(...Bk) : Math.max(...Bk)
    }
    var ot = Bk(6267);
    const Lt = (0, Rk.memo)((function(kk) {
      var Fk;
      const {
        t: Bk
      } = (0, Xk.x)(), Rk = null === kk.seller, tk = kk.quantity * kk.pricePerItem;
      return (0, sk.jsxs)("div", {
        className: kk.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, sk.jsx)(DR, {
          item: kk.item,
          amount: kk.quantity,
          size: kk.grid ? "big" : "normal",
          tier: kk.tier
        }), (0, sk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, sk.jsx)("b", {
            children: (0, sk.jsx)(SR.d, {
              text: null !== (Fk = kk.title) && void 0 !== Fk ? Fk : `${kk.quantity}x ${kk.item}`
            })
          }), (0, sk.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, sk.jsx)("span", {
              children: Rk ? Bk("smpShop:you") : (0, sk.jsx)(SR.d, {
                text: [{
                  entityName: kk.seller
                }]
              })
            }), (0, sk.jsx)("span", {
              children: Bk("smpShop:timeLeft", {
                time: Rt(kk.expiresAt)
              })
            })]
          })]
        }), (0, sk.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, sk.jsx)(zR, {
            amount: kk.pricePerItem
          }), (0, sk.jsx)("small", {
            children: Bk("smpShop:each")
          })]
        }), (0, sk.jsx)(fk.g, {
          className: "SmpBuyButton",
          disabled: Rk || !kk.canAfford && !kk.busy,
          loading: kk.busy,
          onClick: () => {
            kk.onBuy(kk.itemKey)
          },
          children: Rk ? Bk("smpShop:yours") : (0, sk.jsx)(zR, {
            amount: tk
          })
        })]
      })
    }));

    function Ot(kk) {
      let {
        view: Fk,
        onChange: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Xk.x)();
      return (0, sk.jsx)(TR.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Rk("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, sk.jsx)(bk.d, {
            name: "list"
          }),
          ariaLabel: Rk("smpShop:listView")
        }, {
          value: "grid",
          label: (0, sk.jsx)(bk.d, {
            name: "grid-2"
          }),
          ariaLabel: Rk("smpShop:gridView")
        }],
        value: Fk,
        onChange: Bk
      })
    }

    function Et(kk) {
      let {
        entries: Fk,
        view: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Xk.x)(), tk = Jt(), ak = "grid" === Bk;
      return (0, sk.jsxs)(sk.Fragment, {
        children: [!ak && (0, sk.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, sk.jsx)("span", {}), (0, sk.jsx)("span", {
            children: Rk("smpShop:columnItem")
          }), (0, sk.jsx)("span", {
            children: Rk("smpShop:columnPriceEach")
          }), (0, sk.jsx)("span", {
            children: Rk("smpShop:columnTotal")
          })]
        }), (0, sk.jsx)(At.c, {
          lazyLoadedClassName: ak ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Ft,
          observerUpdateDeps: [Fk.length],
          children: Fk.map((kk => {
            var Fk, Bk;
            let {
              key: Rk,
              item: Xk,
              meta: bk
            } = kk;
            const wk = bk.quantity * bk.pricePerItem;
            return (0, sk.jsx)(Lt, {
              itemKey: Rk,
              item: bk.item,
              title: Xk.customTitle,
              quantity: bk.quantity,
              pricePerItem: bk.pricePerItem,
              seller: bk.seller,
              expiresAt: bk.expiresAt,
              tier: null !== (Fk = null === (Bk = Xk.enchant) || void 0 === Bk ? void 0 : Bk.tier) && void 0 !== Fk ? Fk : null,
              busy: tk.isPending(Rk) || null !== bk.seller && !1 === Xk.canBuy,
              canAfford: tk.canAfford(Xk, wk),
              grid: ak,
              onBuy: tk.act
            }, Rk)
          }))
        }, Bk)]
      })
    }
    const St = [1, 10, 100],
      Nt = [1, 10, 100, 999];

    function Ht(kk) {
      var Fk, Bk, tk, wk, dk, Vk, Jk, Ak, ek, yk;
      const {
        t: mk
      } = (0, Xk.x)(), Wk = Jt(), {
        creator: vk,
        mode: ik
      } = kk, [Lk, Ok] = (0, Rk.useState)(null !== (Fk = null === vk || void 0 === vk ? void 0 : vk.meta.item) && void 0 !== Fk ? Fk : null), [Ek, Sk] = (0, Rk.useState)(1), [Nk, Hk] = (0, Rk.useState)(0), [uk, Mk] = (0, Rk.useState)(""), [gk, Uk] = (0, Rk.useState)(0), ck = (0, Rk.useRef)(Lk), Gk = (0, Rk.useRef)(!1), [Tk, rk] = (0, Rk.useState)(!1), Dk = null !== (Bk = null === vk || void 0 === vk ? void 0 : vk.meta.item) && void 0 !== Bk ? Bk : null, zk = null !== (tk = null === vk || void 0 === vk ? void 0 : vk.meta.Hb) && void 0 !== tk ? tk : 0;
      (0, Rk.useEffect)((() => {
        kk.searching || null === Dk || Dk === ck.current || (ck.current = Dk, Gk.current = !1, Ok(Dk), Hk(0), Sk("list" === ik ? Math.max(1, zk) : 1))
      }), [Dk, kk.searching]);
      const Pk = !!vk && !!Lk && vk.meta.item === Lk,
        hk = Pk ? vk.meta.Hb : null !== (wk = null === (dk = kk.inventory) || void 0 === dk || null === (Vk = dk.find((kk => kk.item === Lk))) || void 0 === Vk ? void 0 : Vk.quantity) && void 0 !== wk ? wk : 0,
        qk = "list" === ik ? Math.max(1, hk) : 45954,
        Ck = null !== (Jk = kk.prices[0]) && void 0 !== Jk ? Jk : null,
        Zk = kk.prices.length ? Math.round(kk.prices.reduce(((kk, Fk) => kk + Fk), 0) / kk.prices.length) : null,
        pk = null === (Ak = kk.inventory) || void 0 === Ak || null === (ek = Ak.find((kk => kk.item === Lk))) || void 0 === ek ? void 0 : ek.sellPrice;
      (0, Rk.useEffect)((() => {
        var kk;
        Pk && (Sk((kk => "list" === ik ? Math.min(Math.max(1, kk), Math.max(1, hk)) : kk)), Gk.current || Hk(null !== (kk = null !== Ck && void 0 !== Ck ? Ck : Zk) && void 0 !== kk ? kk : Math.max(1, null !== pk && void 0 !== pk ? pk : 1)))
      }), [Pk, hk, Lk, Ck, Zk]);
      const Kk = kk => {
          Gk.current = !0, Hk(kk)
        },
        xk = Fk => {
          var Bk, Rk, tk;
          ck.current = Fk, Gk.current = !1, rk(!1), Mk(""), Uk((kk => kk + 1)), Ok(Fk), Hk(0), Sk("list" === ik && null !== (Bk = null === (Rk = kk.inventory) || void 0 === Rk || null === (tk = Rk.find((kk => kk.item === Fk))) || void 0 === tk ? void 0 : tk.quantity) && void 0 !== Bk ? Bk : 1), (null === vk || void 0 === vk ? void 0 : vk.meta.item) !== Fk && kk.onPickItem(Fk)
        },
        jk = Ek * Nk,
        lk = "list" === ik && null !== vk && void 0 !== vk && vk.meta.fee ? function(kk, Fk) {
          const Bk = Math.max(0, Fk - kk.taxFreeAllowance);
          return Math.ceil(Math.round(Bk * kk.rate * 1e6) / 1e6)
        }(vk.meta.fee, jk) : 0,
        nk = !!vk && Wk.isPending(vk.key),
        Ik = Pk && !kk.searching && Ek >= 1 && Nk >= 1 && ("order" === ik || hk >= Ek) && !nk,
        Qk = !!Lk && !Pk && !kk.searching && Ek >= 1 && Nk >= 1,
        kF = () => {
          Ik ? Wk.act(vk.key, `${Ek}|${Nk}`) : Qk && (kk.onPickItem(Lk), rk(!0))
        };
      (0, Rk.useEffect)((() => {
        Tk && Pk && !kk.searching && (rk(!1), kF())
      }), [Tk, Pk, kk.searching]);
      const FF = !!Lk && !Pk && (kk.searching || Tk),
        BF = Lk ? wt(kk.names, Lk) : "",
        RF = (0, Rk.useMemo)((() => bt(kk.catalogue, uk).slice(0, 8)), [kk.catalogue, uk]),
        tF = ("list" === ik ? St.filter((kk => kk < hk)) : Nt).map((kk => ({
          value: kk,
          label: String(kk)
        })));
      "list" === ik && hk > 0 && tF.push({
        value: hk,
        label: mk("smpShop:all", {
          count: hk
        })
      });
      const aF = [];
      return null !== Ck && (Ck > 1 && aF.push({
        value: Ck - 1,
        label: mk("smpShop:undercut", {
          price: GR(Ck - 1)
        })
      }), aF.push({
        value: Ck,
        label: mk("smpShop:lowest", {
          price: GR(Ck)
        })
      })), null !== Zk && Zk !== Ck && aF.push({
        value: Zk,
        label: mk("smpShop:average", {
          price: GR(Zk)
        })
      }), (0, sk.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, sk.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, sk.jsx)("b", {
            children: mk("list" === ik ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, sk.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": mk("smpShop:close"),
            onClick: kk.onClose,
            children: (0, sk.jsx)(bk.d, {
              name: "xmark"
            })
          })]
        }), "list" === ik && (0, sk.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (yk = kk.inventory) && void 0 !== yk && yk.length ? kk.inventory.map((kk => {
            let {
              item: Fk,
              quantity: Bk
            } = kk;
            return (0, sk.jsx)("button", {
              type: "button",
              title: Fk,
              className: ak()("SmpPickerSlot", {
                SmpPickerSlotOn: Fk === Lk
              }),
              onClick: () => {
                xk(Fk)
              },
              children: (0, sk.jsx)(DR, {
                item: Fk,
                amount: Bk
              })
            }, Fk)
          })) : (0, sk.jsx)("span", {
            className: "SmpMuted",
            children: mk("smpShop:nothingToList")
          })
        }), ("list" === ik || !Lk) && (0, sk.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, sk.jsx)(Yk.e, {
            className: "SmpSearchInput",
            placeholderText: mk("list" === ik ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: uk,
            onValueChange: Mk,
            blurOnEnter: !0,
            onEnter: () => {
              RF[0] && xk(RF[0].name)
            }
          }, gk), RF.length > 0 && (0, sk.jsx)("div", {
            className: "SmpPicker",
            children: RF.map((kk => {
              let {
                name: Fk
              } = kk;
              return (0, sk.jsx)("button", {
                type: "button",
                title: Fk,
                className: ak()("SmpPickerSlot", {
                  SmpPickerSlotOn: Fk === Lk
                }),
                onClick: () => {
                  xk(Fk)
                },
                children: (0, sk.jsx)(DR, {
                  item: Fk
                })
              }, Fk)
            }))
          })]
        }), Lk && (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsxs)("div", {
            className: "SmpPickedName",
            children: [BF, FF && (0, sk.jsx)(ZR, {})]
          }), (0, sk.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, sk.jsxs)("div", {
              className: "SmpField",
              children: [(0, sk.jsxs)("span", {
                children: [mk("smpShop:quantity"), "list" === ik && Pk && (0, sk.jsx)("small", {
                  children: mk("smpShop:youHave", {
                    count: hk
                  })
                })]
              }), (0, sk.jsx)(pR, {
                value: Ek,
                onChange: Sk,
                max: qk,
                label: mk("smpShop:quantity")
              }), (0, sk.jsx)(CR, {
                options: tF,
                value: Ek,
                onChange: Sk,
                ariaLabel: mk("smpShop:quantity")
              })]
            }), (0, sk.jsxs)("div", {
              className: "SmpField",
              children: [(0, sk.jsx)("span", {
                children: mk("smpShop:pricePerItem")
              }), (0, sk.jsx)(pR, {
                value: Math.max(1, Nk),
                onChange: Kk,
                max: 9999999,
                step: KR,
                label: mk("smpShop:pricePerItem")
              }), (0, sk.jsx)(CR, {
                options: aF,
                value: Nk,
                onChange: Kk,
                ariaLabel: mk("smpShop:pricePerItem")
              })]
            })]
          }), "list" === ik && (0, sk.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, sk.jsxs)("span", {
              children: [mk("smpShop:youGet"), " ", (0, sk.jsx)(zR, {
                amount: Math.max(0, jk - lk),
                exact: !0
              })]
            }), (0, sk.jsx)("small", {
              children: lk > 0 ? mk("smpShop:listingFee", {
                fee: lk.toLocaleString("en-US")
              }) : mk("smpShop:listingRules")
            })]
          }), (0, sk.jsx)(fk.v, {
            className: "SmpSubmit",
            disabled: !Ik && !Qk && !nk,
            loading: nk || FF || Pk && kk.searching,
            onClick: kF,
            children: "list" === ik ? mk("smpShop:listButton", {
              count: Ek,
              item: BF
            }) : (0, sk.jsxs)(sk.Fragment, {
              children: [mk("smpShop:orderButton", {
                count: Ek,
                item: BF
              }), " ", Nk >= 1 && (0, sk.jsx)(zR, {
                amount: jk
              })]
            })
          })]
        })]
      })
    }

    function ut() {
      var kk;
      const {
        t: Fk
      } = (0, Xk.x)(), Bk = Jt(), tk = null === (kk = Bk.shopInfo[Bk.categoryKey]) || void 0 === kk ? void 0 : kk.items, ak = kt(tk, "search"), bk = kt(tk, "creator"), wk = QR(tk, "enchantedCreator"), dk = QR(tk, "listing"), Vk = kt(tk, "empty"), Jk = ft(ak, dk.length > 0 || null !== Vk), {
        searched: Ak,
        shown: ek,
        loading: yk
      } = Jk, [mk, Wk] = (0, Rk.useState)(!1), [vk, ik] = function() {
        const [kk, Fk] = (0, ot.c)("smpMarketView", "list");
        return ["grid" === kk ? "grid" : "list", Fk]
      }(), Yk = "grid" === vk, Lk = (0, Rk.useMemo)((() => dk.filter((kk => {
        let {
          meta: Fk
        } = kk;
        return null !== Fk.seller && Fk.item === Ak
      })).map((kk => {
        let {
          meta: Fk
        } = kk;
        return Fk.pricePerItem
      })).sort(((kk, Fk) => kk - Fk))), [dk, Ak]), Ok = (0, Rk.useMemo)((() => {
        const kk = new Set(Jk.catalogue.map((kk => {
          let {
            name: Fk
          } = kk;
          return Fk
        })));
        return function(kk) {
          for (const Fk in kk)
            if ("sell" === kk[Fk].smp) return QR(kk[Fk].items, "sell").filter((kk => {
              let {
                item: Fk
              } = kk;
              return !Fk.enchant
            })).map((kk => {
              let {
                meta: Fk
              } = kk;
              return {
                item: Fk.item,
                quantity: Fk.quantity,
                sellPrice: Fk.pricePerItem
              }
            }));
          return []
        }(Bk.shopInfo).filter((Fk => {
          let {
            item: Bk
          } = Fk;
          return kk.has(Bk)
        }))
      }), [Bk.shopInfo, Jk.catalogue]);
      return (0, sk.jsx)(it, {
        browser: Jk,
        className: "SmpMarketTab",
        recentLabel: Fk("smpShop:recentlyListed"),
        action: (0, sk.jsx)(fk.v, {
          className: "SmpSellButton",
          onClick: () => {
            Wk((kk => !kk))
          },
          children: Fk("smpShop:sell")
        }),
        above: mk && (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsx)(Ht, {
            mode: "list",
            creator: bk,
            inventory: Ok,
            catalogue: Jk.catalogue,
            names: Jk.names,
            searching: yk,
            prices: Lk,
            onPickItem: Jk.searchFor,
            onClose: () => {
              Wk(!1)
            }
          }), wk.length > 0 && (0, sk.jsx)(Mt, {
            entries: wk
          })]
        }),
        listControls: (0, sk.jsx)(Ot, {
          view: vk,
          onChange: ik
        }),
        summary: ek && (dk.length > 0 ? Fk(1 === dk.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: dk.length,
          price: GR(Yt(dk, "min"))
        }) : Fk("smpShop:noOneSelling", {
          item: wt(Jk.names, ek)
        })),
        list: yk ? (0, sk.jsx)(PR, {
          grid: Yk
        }) : dk.length > 0 ? (0, sk.jsx)(Et, {
          entries: dk,
          view: vk
        }) : Vk ? (0, sk.jsx)(qR, {
          entry: Vk
        }) : (0, sk.jsx)(PR, {
          count: 3,
          grid: Yk
        })
      })
    }

    function Mt(kk) {
      let {
        entries: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Xk.x)(), tk = Jt(), [ak, bk] = (0, Rk.useState)({});
      return (0, sk.jsx)("div", {
        className: "SmpList",
        children: Fk.map((kk => {
          var Fk, Rk, Xk;
          let {
            key: wk,
            item: dk,
            meta: Vk
          } = kk;
          const Jk = null !== (Fk = ak[wk]) && void 0 !== Fk ? Fk : 1;
          return (0, sk.jsxs)("div", {
            className: "SmpRow",
            children: [(0, sk.jsx)(DR, {
              item: Vk.item,
              amount: Vk.quantity,
              tier: null !== (Rk = null === (Xk = dk.enchant) || void 0 === Xk ? void 0 : Xk.tier) && void 0 !== Rk ? Rk : null
            }), (0, sk.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, sk.jsx)("b", {
                children: (0, sk.jsx)(SR.d, {
                  text: dk.customTitle
                })
              }), (0, sk.jsx)("small", {
                children: Bk("smpShop:enchantedListing")
              })]
            }), (0, sk.jsx)(pR, {
              value: Jk,
              onChange: kk => {
                bk({
                  ...ak,
                  [wk]: kk
                })
              },
              max: 9999999,
              step: KR,
              label: Bk("smpShop:pricePerItem")
            }), (0, sk.jsxs)(fk.v, {
              loading: tk.isPending(wk),
              onClick: () => {
                tk.act(wk, String(Jk))
              },
              children: [Bk("smpShop:list"), " ", (0, sk.jsx)(zR, {
                amount: Jk
              })]
            })]
          }, wk)
        }))
      })
    }
    const gt = (0, Rk.memo)((function(kk) {
      let {
        itemKey: Fk,
        item: Bk,
        quantity: Rk,
        pricePerItem: tk,
        tier: Xk,
        selected: bk,
        onSelect: wk
      } = kk;
      return (0, sk.jsxs)("button", {
        type: "button",
        className: ak()("SmpInventorySlot", {
          SmpInventorySlotOn: bk
        }),
        title: Bk,
        onClick: () => {
          wk(Fk)
        },
        children: [(0, sk.jsx)(DR, {
          item: Bk,
          amount: Rk,
          tier: Xk
        }), (0, sk.jsx)(zR, {
          amount: tk
        })]
      })
    }));

    function Ut() {
      var kk;
      const {
        t: Fk
      } = (0, Xk.x)(), Bk = Jt(), tk = null === (kk = Bk.shopInfo[Bk.categoryKey]) || void 0 === kk ? void 0 : kk.items, bk = QR(tk, "sell"), wk = kt(tk, "empty"), [dk, Vk] = (0, Rk.useState)(null), [Jk, Ak] = (0, Rk.useState)({}), ek = bk.find((kk => {
        let {
          key: Fk
        } = kk;
        return Fk === dk
      }));
      return 0 === bk.length ? (0, sk.jsx)("div", {
        className: "SmpScreen",
        children: (0, sk.jsx)(hR, {
          title: wk ? (0, sk.jsx)(SR.d, {
            text: wk.item.customTitle
          }) : Fk("smpShop:nothingToSell"),
          children: wk && (0, sk.jsx)(SR.d, {
            text: wk.item.description
          })
        })
      }) : (0, sk.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, sk.jsx)("div", {
          className: "SmpInventoryGrid",
          children: bk.map((kk => {
            var Fk, Bk;
            let {
              key: Rk,
              item: tk,
              meta: ak
            } = kk;
            return (0, sk.jsx)(gt, {
              itemKey: Rk,
              item: ak.item,
              quantity: ak.quantity,
              pricePerItem: ak.pricePerItem,
              tier: null !== (Fk = null === (Bk = tk.enchant) || void 0 === Bk ? void 0 : Bk.tier) && void 0 !== Fk ? Fk : null,
              selected: Rk === dk,
              onSelect: Vk
            }, Rk)
          }))
        }), (0, sk.jsx)("div", {
          className: ak()("SmpSellBar", {
            SmpSellBarIdle: !ek
          }),
          children: ek ? (0, sk.jsx)(ct, {
            entry: ek,
            choice: dt(ek.item, Jk[ek.key]),
            onChoose: kk => {
              Ak({
                ...Jk,
                [ek.key]: kk
              })
            }
          }) : (0, sk.jsx)("span", {
            className: "SmpMuted",
            children: Fk("smpShop:tapToSell")
          })
        })]
      })
    }

    function ct(kk) {
      var Fk, Bk, Rk, tk;
      let {
        entry: ak,
        choice: bk,
        onChoose: wk
      } = kk;
      const {
        t: dk
      } = (0, Xk.x)(), Vk = Jt(), {
        key: Jk,
        item: Ak,
        meta: ek
      } = ak, yk = tt("dropdown" === (null === (Fk = Ak.userInput) || void 0 === Fk ? void 0 : Fk.type) ? Ak.userInput.dropdownOptions : []), mk = null === bk ? 0 : -(0, oR.c)(Ak, bk);
      return (0, sk.jsxs)(sk.Fragment, {
        children: [(0, sk.jsx)(DR, {
          item: ek.item,
          amount: ek.quantity,
          tier: null !== (Bk = null === (Rk = Ak.enchant) || void 0 === Rk ? void 0 : Rk.tier) && void 0 !== Bk ? Bk : null
        }), (0, sk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, sk.jsx)("b", {
            children: (0, sk.jsx)(SR.d, {
              text: null !== (tk = Ak.customTitle) && void 0 !== tk ? tk : ek.item
            })
          }), (0, sk.jsx)("small", {
            children: dk("smpShop:sellEach", {
              count: ek.quantity
            })
          })]
        }), (0, sk.jsx)(CR, {
          options: yk.map((kk => {
            let {
              label: Fk,
              quantity: Bk,
              isAll: Rk
            } = kk;
            return {
              value: Fk,
              label: Rk ? dk("smpShop:all", {
                count: Bk
              }) : String(Bk)
            }
          })),
          value: bk,
          onChange: wk,
          ariaLabel: dk("smpShop:quantity")
        }), (0, sk.jsxs)(fk.v, {
          loading: Vk.isPending(Jk),
          disabled: null === bk,
          onClick: () => {
            Vk.act(Jk, bk)
          },
          children: [dk("smpShop:sellButton"), " ", (0, sk.jsx)(zR, {
            amount: mk
          })]
        })]
      })
    }

    function Gt() {
      var kk;
      const {
        t: Fk
      } = (0, Xk.x)(), Bk = Jt(), Rk = null === (kk = Bk.shopInfo[Bk.categoryKey]) || void 0 === kk ? void 0 : kk.items, tk = QR(Rk, "collect"), ak = QR(Rk, "myListing"), bk = (kk, Fk) => Bk.isPending(kk) || !1 === Fk.canBuy;
      return (0, sk.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, sk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Fk("smpShop:readyToCollect")
        }), tk.length > 0 ? (0, sk.jsx)("div", {
          className: "SmpList",
          children: tk.map((kk => {
            var Rk, tk;
            let {
              key: ak,
              item: Xk,
              meta: wk
            } = kk;
            return (0, sk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, sk.jsx)(DR, {
                item: "sold" === wk.type ? "Gold Coin" : wk.item,
                amount: "sold" === wk.type ? 0 : wk.quantity,
                tier: null !== (Rk = null === (tk = Xk.enchant) || void 0 === tk ? void 0 : tk.tier) && void 0 !== Rk ? Rk : null
              }), (0, sk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, sk.jsx)("b", {
                  children: (0, sk.jsx)(SR.d, {
                    text: Xk.customTitle
                  })
                }), (0, sk.jsx)("small", {
                  children: (0, sk.jsx)(SR.d, {
                    text: Xk.description
                  })
                })]
              }), (0, sk.jsx)(fk.o, {
                loading: bk(ak, Xk),
                onClick: () => {
                  Bk.act(ak)
                },
                children: Fk("smpShop:collect")
              })]
            }, ak)
          }))
        }) : (0, sk.jsx)(hR, {
          title: Fk("smpShop:nothingToCollect"),
          children: Fk("smpShop:nothingToCollectHint")
        }), (0, sk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Fk("smpShop:activeListings", {
            count: ak.length
          })
        }), ak.length > 0 ? (0, sk.jsx)("div", {
          className: "SmpList",
          children: ak.map((kk => {
            var Rk, tk;
            let {
              key: ak,
              item: Xk,
              meta: wk
            } = kk;
            return (0, sk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, sk.jsx)(DR, {
                item: wk.item,
                amount: wk.quantity,
                tier: null !== (Rk = null === (tk = Xk.enchant) || void 0 === tk ? void 0 : tk.tier) && void 0 !== Rk ? Rk : null
              }), (0, sk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, sk.jsx)("b", {
                  children: (0, sk.jsx)(SR.d, {
                    text: Xk.customTitle
                  })
                }), (0, sk.jsx)("small", {
                  children: Fk("smpShop:timeLeft", {
                    time: Rt(wk.expiresAt)
                  })
                })]
              }), (0, sk.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, sk.jsx)(zR, {
                  amount: wk.pricePerItem
                }), (0, sk.jsx)("small", {
                  children: Fk("smpShop:each")
                })]
              }), (0, sk.jsx)(fk.J, {
                loading: bk(ak, Xk),
                onClick: () => {
                  Bk.act(ak)
                },
                children: Fk("smpShop:cancel")
              })]
            }, ak)
          }))
        }) : (0, sk.jsx)(hR, {
          title: Fk("smpShop:noActiveListings"),
          children: Fk("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Tt(kk) {
      let {
        done: Fk,
        of: Bk
      } = kk;
      return (0, sk.jsx)("span", {
        className: "SmpProgress",
        children: (0, sk.jsx)("i", {
          style: {
            width: `${Math.min(100,Fk/Math.max(1,Bk)*100)}%`
          }
        })
      })
    }

    function rt(kk) {
      var Fk, Bk, Rk;
      let {
        entry: tk,
        choice: ak,
        onChoose: bk
      } = kk;
      const {
        t: wk
      } = (0, Xk.x)(), dk = Jt(), {
        key: Vk,
        item: Jk,
        meta: Ak
      } = tk, ek = "dropdown" === (null === (Fk = Jk.userInput) || void 0 === Fk ? void 0 : Fk.type) ? Jk.userInput.dropdownOptions : [], yk = !0 === Ak.processing, mk = null !== Ak.creator && (Ak.Hb > 0 || yk), Wk = mk && Ak.Hb > 0 ? tt(ek) : [], vk = null === ak ? 0 : null !== (Bk = null === (Rk = Wk.find((kk => kk.label === ak))) || void 0 === Rk ? void 0 : Rk.quantity) && void 0 !== Bk ? Bk : 0;
      return (0, sk.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, sk.jsx)(DR, {
          item: Ak.item
        }), (0, sk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, sk.jsx)("b", {
            children: (0, sk.jsx)(SR.d, {
              text: Jk.customTitle
            })
          }), (0, sk.jsxs)("small", {
            children: [(0, sk.jsx)(zR, {
              amount: Ak.pricePerItem
            }), " ", wk("smpShop:each"), " \xb7", " ", null === Ak.creator ? wk("smpShop:you") : (0, sk.jsx)(SR.d, {
              text: [{
                entityName: Ak.creator
              }]
            })]
          }), (0, sk.jsx)(Tt, {
            done: Ak.delivered,
            of: Ak.wanted
          })]
        }), mk ? (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsx)(CR, {
            options: Wk.map((kk => {
              let {
                label: Fk,
                quantity: Bk,
                isAll: Rk
              } = kk;
              return {
                value: Fk,
                label: Rk ? wk("smpShop:max", {
                  count: Bk
                }) : String(Bk)
              }
            })),
            value: ak,
            onChange: bk,
            ariaLabel: wk("smpShop:quantity")
          }), (0, sk.jsxs)(fk.v, {
            loading: dk.isPending(Vk) || yk,
            disabled: null === ak,
            onClick: () => {
              dk.act(Vk, ak)
            },
            children: [wk("smpShop:deliver"), " ", (0, sk.jsx)(zR, {
              amount: vk * Ak.pricePerItem
            })]
          })]
        }) : (0, sk.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Ak.creator ? wk("smpShop:yourOrder") : wk("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Dt() {
      var kk;
      const {
        t: Fk
      } = (0, Xk.x)(), Bk = Jt(), tk = null === (kk = Bk.shopInfo[Bk.categoryKey]) || void 0 === kk ? void 0 : kk.items, ak = kt(tk, "search"), bk = kt(tk, "creator"), wk = QR(tk, "order"), dk = kt(tk, "empty"), Vk = ft(ak, wk.length > 0 || null !== dk), [Jk, Ak] = (0, Rk.useState)(!1), [ek, yk] = (0, Rk.useState)({});
      return (0, sk.jsx)(it, {
        browser: Vk,
        recentLabel: Fk("smpShop:recentOrders"),
        action: (0, sk.jsx)(fk.v, {
          onClick: () => {
            Ak((kk => !kk))
          },
          children: Fk("smpShop:createOrder")
        }),
        above: Jk && (0, sk.jsx)(Ht, {
          mode: "order",
          creator: bk,
          catalogue: Vk.catalogue,
          names: Vk.names,
          searching: Vk.loading,
          prices: [],
          onPickItem: Vk.searchFor,
          onClose: () => {
            Ak(!1)
          }
        }),
        onBack: () => {
          Ak(!1)
        },
        summary: wk.length > 0 && Fk(1 === wk.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: wk.length,
          price: GR(Yt(wk, "max"))
        }),
        list: Vk.loading ? (0, sk.jsx)(PR, {}) : wk.length > 0 ? (0, sk.jsx)(At.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Ft,
          observerUpdateDeps: [wk.length],
          children: wk.map((kk => (0, sk.jsx)(rt, {
            entry: kk,
            choice: dt(kk.item, ek[kk.key]),
            onChoose: Fk => {
              yk({
                ...ek,
                [kk.key]: Fk
              })
            }
          }, kk.key)))
        }) : dk ? (0, sk.jsx)(qR, {
          entry: dk
        }) : (0, sk.jsx)(PR, {
          count: 3
        })
      })
    }

    function zt() {
      var kk;
      const {
        t: Fk
      } = (0, Xk.x)(), Bk = Jt(), Rk = QR(null === (kk = Bk.shopInfo[Bk.categoryKey]) || void 0 === kk ? void 0 : kk.items, "myOrder");
      return 0 === Rk.length ? (0, sk.jsx)("div", {
        className: "SmpScreen",
        children: (0, sk.jsx)(hR, {
          title: Fk("smpShop:noOrders"),
          children: Fk("smpShop:noOrdersHint")
        })
      }) : (0, sk.jsx)("div", {
        className: "SmpScreen",
        children: (0, sk.jsx)("div", {
          className: "SmpList",
          children: Rk.map((kk => {
            let {
              key: Rk,
              item: tk,
              meta: ak
            } = kk;
            const Xk = Bk.isPending(Rk) || !1 === tk.canBuy;
            return (0, sk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, sk.jsx)(DR, {
                item: ak.item,
                amount: ak.collectable
              }), (0, sk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, sk.jsx)("b", {
                  children: (0, sk.jsx)(SR.d, {
                    text: tk.customTitle
                  })
                }), (0, sk.jsxs)("small", {
                  children: [(0, sk.jsx)(zR, {
                    amount: ak.pricePerItem
                  }), " ", Fk("smpShop:each"), ak.collectable > 0 && ` \xb7 ${Fk("smpShop:readyCount",{count:ak.collectable})}`]
                }), (0, sk.jsx)(Tt, {
                  done: ak.delivered,
                  of: ak.wanted
                })]
              }), ak.collectable > 0 ? (0, sk.jsx)(fk.o, {
                loading: Xk,
                onClick: () => {
                  Bk.act(Rk)
                },
                children: Fk("smpShop:collectCount", {
                  count: ak.collectable
                })
              }) : (0, sk.jsx)(fk.J, {
                loading: Xk,
                onClick: () => {
                  Bk.act(Rk)
                },
                children: Fk("smpShop:cancel")
              })]
            }, Rk)
          }))
        })
      })
    }
    const Pt = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ht = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function qt(kk, Fk) {
      let Bk = !1;
      const Rk = {};
      for (const tk in kk) Fk(tk, kk[tk]) ? Rk[tk] = kk[tk] : Bk = !0;
      return Bk ? Rk : kk
    }

    function Ct(kk) {
      var Fk, Bk, tk, wk;
      const {
        show: dk,
        shopInfo: Vk,
        selectedCategoryKey: Jk
      } = kk, {
        t: Ak
      } = (0, Xk.x)(), ek = null !== Jk && void 0 !== Jk ? Jk : "", yk = IR(Vk, ek), fk = null === (Fk = Vk[ek]) || void 0 === Fk ? void 0 : Fk.items, mk = null !== yk, [Wk, vk] = (0, Rk.useState)({}), [ik, Yk] = (0, Rk.useState)([]), [Lk, Ok] = (0, Rk.useState)(!1), [Ek, Sk] = (0, Rk.useState)(null), [, Nk] = (0, Rk.useState)(0), Hk = (0, Rk.useRef)(0), uk = (0, Rk.useRef)({}), Mk = (0, Rk.useRef)({
        items: fk,
        pending: Wk,
        shopInfo: Vk,
        active: mk,
        canAfford: kk.canAfford,
        buy: kk.buy
      });
      Mk.current = {
        items: fk,
        pending: Wk,
        shopInfo: Vk,
        active: mk,
        canAfford: kk.canAfford,
        buy: kk.buy
      };
      const gk = (0, Rk.useCallback)((kk => {
        Hk.current++;
        const Fk = Hk.current;
        Yk((Bk => [{
          id: Fk,
          text: kk
        }, ...Bk].slice(0, 8))), Sk(Fk)
      }), []);
      (0, Rk.useEffect)((() => {
        if (null === Ek) return;
        const kk = setTimeout((() => {
          Sk(null)
        }), 3e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Ek]), (0, Rk.useEffect)((() => {
        const Fk = kk.message;
        if (!Fk) return;
        const {
          shopInfo: Bk,
          active: Rk,
          items: tk
        } = Mk.current, ak = null !== Fk.categoryKey ? null !== IR(Bk, Fk.categoryKey) : Rk;
        (ak || Rk) && gk(Fk.text), ak && vk((kk => qt(kk, (kk => {
          var Fk, Bk;
          return !Pt.has(null === tk || void 0 === tk || null === (Fk = tk[kk]) || void 0 === Fk || null === (Bk = Fk.smp) || void 0 === Bk ? void 0 : Bk.kind)
        }))))
      }), [kk.message, gk]), (0, Rk.useEffect)((() => {
        vk((kk => qt(kk, ((kk, Fk) => st(null === fk || void 0 === fk ? void 0 : fk[kk]) === Fk.snapshot))))
      }), [Vk, fk]);
      const Uk = Object.keys(Wk).length > 0;
      (0, Rk.useEffect)((() => {
        if (!Uk) return;
        const kk = setInterval((() => {
          Nk((kk => kk + 1));
          const kk = Date.now(),
            {
              pending: Fk,
              items: Bk
            } = Mk.current,
            Rk = Object.keys(Fk).filter((Bk => kk - Fk[Bk].at >= 12e3));
          if (0 === Rk.length) return;
          const tk = Rk.some((kk => {
            var Rk, tk;
            return "search" !== (null === Bk || void 0 === Bk || null === (Rk = Bk[kk]) || void 0 === Rk || null === (tk = Rk.smp) || void 0 === tk ? void 0 : tk.kind) || Fk[kk].resend
          }));
          for (const ak of Rk) uk.current[ak] = kk;
          vk((kk => qt(kk, (kk => !Rk.includes(kk))))), tk && gk(Ak("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(kk)
        }
      }), [Uk]), (0, Rk.useEffect)((() => {
        vk({})
      }), [ek]), (0, Rk.useEffect)((() => {
        dk || Ok(!1)
      }), [dk]);
      const ck = (0, Rk.useCallback)((function(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Rk,
            pending: tk,
            canAfford: ak,
            buy: Xk
          } = Mk.current, bk = null === Rk || void 0 === Rk ? void 0 : Rk[kk];
          if (!bk || kk in tk || !1 === bk.canBuy) return !1;
          if (!ak(bk, (0, oR.c)(bk, Fk))) return !1;
          Xk(kk, bk, Fk);
          const wk = {
            snapshot: st(bk),
            at: Date.now(),
            resend: Bk
          };
          return Mk.current.pending = {
            ...Mk.current.pending,
            [kk]: wk
          }, vk((Fk => ({
            ...Fk,
            [kk]: wk
          }))), !0
        }), []),
        Gk = (0, Rk.useMemo)((() => ({
          shopInfo: Vk,
          categoryKey: ek,
          canAfford: kk.canAfford,
          isPending: kk => kk in Wk,
          gaveUpAt: kk => {
            var Fk;
            return null !== (Fk = uk.current[kk]) && void 0 !== Fk ? Fk : 0
          },
          act: ck,
          notify: gk
        })), [Vk, ek, kk.canAfford, Wk, ck, gk]),
        Tk = Math.min(...Object.values(Wk).map((kk => kk.at))),
        rk = Uk && Date.now() - Tk > 1500,
        Dk = ik.length > 1,
        zk = null !== (Bk = null === (tk = Vk[ek]) || void 0 === tk ? void 0 : tk.customTitle) && void 0 !== Bk ? Bk : ek,
        Pk = null === (wk = Vk[ek]) || void 0 === wk ? void 0 : wk.description;
      let hk = null;
      return "market" === yk ? hk = (0, sk.jsx)(ut, {}) : "sell" === yk ? hk = (0, sk.jsx)(Ut, {}) : "collect" === yk ? hk = (0, sk.jsx)(Gt, {}) : "orders" === yk ? hk = (0, sk.jsx)(Dt, {}) : "myOrders" === yk && (hk = (0, sk.jsx)(zt, {})), (0, sk.jsx)(Vt.Provider, {
        value: Gk,
        children: (0, sk.jsx)("div", {
          className: "SmpShopHost",
          hidden: !mk,
          children: (0, sk.jsxs)("div", {
            className: "SmpShop",
            children: [(0, sk.jsx)("header", {
              className: "SmpHeader",
              children: (0, sk.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, sk.jsxs)("h2", {
                  children: [yk && (0, sk.jsx)(bk.d, {
                    name: ht[yk]
                  }), Ak(zk)]
                }), Pk && (0, sk.jsx)("p", {
                  children: (0, sk.jsx)(SR.d, {
                    text: Pk
                  })
                })]
              })
            }), (0, sk.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: dk && hk
            }), (0, sk.jsxs)("button", {
              type: "button",
              className: ak()("SmpStatus", {
                SmpStatusWaiting: Uk,
                SmpStatusFresh: !Uk && null !== Ek,
                SmpStatusHasHistory: Dk
              }),
              "aria-live": "polite",
              "aria-expanded": Dk ? Lk : void 0,
              onClick: () => {
                Dk && Ok((kk => !kk))
              },
              children: [Uk ? (0, sk.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, sk.jsx)(ZR, {}), Ak(rk ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : ik[0] ? (0, sk.jsx)("span", {
                className: "SmpStatusText",
                children: (0, sk.jsx)(SR.d, {
                  text: ik[0].text
                })
              }, ik[0].id) : (0, sk.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Ak("smpShop:ready")
              }), Dk && (0, sk.jsx)("small", {
                children: Ak("smpShop:recentMessages", {
                  count: ik.length
                })
              })]
            }), Lk && Dk && (0, sk.jsx)("div", {
              className: "SmpStatusHistory",
              children: ik.map((kk => (0, sk.jsx)("div", {
                children: (0, sk.jsx)(SR.d, {
                  text: kk.text
                })
              }, kk.id)))
            })]
          })
        })
      })
    }
    class Zt {
      constructor(kk) {
        this.info = kk
      }
      static fromShopInfo(kk) {
        const Fk = {};
        for (const Bk in kk) {
          const Rk = !0 === kk[Bk].redDot && !0 !== kk[Bk].forceRemoveRedDot;
          Fk[Bk] = {
            redDot: Rk,
            items: {}
          };
          for (const tk in kk[Bk].items) {
            const Rk = kk[Bk].items[tk],
              ak = !0 === Rk.redDot && !0 !== Rk.forceRemoveRedDot;
            Fk[Bk].items[tk] = {
              redDot: ak
            }
          }
        }
        return new Zt(Fk)
      }
      anyCategoryHasRedDots() {
        for (const kk in this.info)
          if (this.categoryHasRedDot(kk)) return !0;
        return !1
      }
      doesCategoryExist(kk) {
        return !(0, CF.F)(this.info[kk])
      }
      categoryHasRedDot(kk) {
        return !0 === this.info[kk].redDot
      }
      updateCategoryRedDot(kk, Fk) {
        this.info[kk].redDot = Fk
      }
      doesItemExist(kk, Fk) {
        return this.doesCategoryExist(kk) && !(0, CF.F)(this.info[kk].items[Fk])
      }
      itemHasRedDot(kk, Fk) {
        return !0 === this.info[kk].items[Fk].redDot
      }
      updateItemRedDot(kk, Fk, Bk) {
        this.info[kk].items[Fk].redDot = Bk
      }
      shallowCopy() {
        return new Zt(this.info)
      }
    }

    function pt(kk, Fk) {
      return `${kk}\x1f${Fk}`
    }

    function Kt(kk, Fk) {
      return !(0, CF.F)(Fk) && !(0, CF.F)(kk) && Fk in kk
    }
    const xt = (0, Rk.memo)((function(kk) {
      var Fk, Bk;
      let {
        show: tk
      } = kk;
      const Xk = (0, nB.f)("players", ka),
        bk = (0, nB.f)("players", Fa),
        [dk, Jk] = (0, Rk.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: Zt.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Ak = (0, Rk.useRef)(""),
        yk = (0, Rk.useRef)(null),
        mk = (0, Rk.useRef)(null),
        vk = (0, Rk.useRef)(0),
        ik = (0, Rk.useRef)(void 0),
        Yk = (0, Rk.useRef)(null),
        Lk = (0, Rk.useRef)(dk),
        Ok = dk.redDotInfo.anyCategoryHasRedDots(),
        [Sk, Nk] = (0, Rk.useState)(null),
        uk = (0, Rk.useRef)(!1);
      let Mk = !1,
        gk = 0,
        Uk = 0;
      if (dk.currencyAmounts) {
        for (const kk in dk.currencyAmounts) {
          var ck;
          const Fk = dk.currencyAmounts[kk];
          Fk.hidden || (gk++, (null === (ck = Fk.subtext) || void 0 === ck ? void 0 : ck.length) > 0 && Uk++)
        }
        Mk = gk + Uk > 4
      }(0, Rk.useEffect)((() => {
        ZF.o.Hf("showShopIconRedDot", Ok, !0)
      }), [Ok]), (0, Rk.useEffect)((() => {
        Wk.gameBridge.send("setShopOpen", tk), tk || (clearTimeout(ik.current), Jk((kk => kk.awaitingPurchase ? {
          ...kk,
          awaitingPurchase: !1
        } : kk)))
      }), [tk]), (0, Rk.useEffect)((() => () => {
        Wk.gameBridge.send("setShopOpen", !1), clearTimeout(ik.current)
      }), []), (0, Rk.useEffect)((() => {
        Lk.current = dk
      }), [dk]), (0, Rk.useEffect)((() => {
        if (null === Sk) return;
        return (0, MR.e)("pointerdown", (kk => {
          const Fk = kk.target;
          null !== Fk && void 0 !== Fk && Fk.closest(".ShopItem") || Nk(null)
        }))
      }), [Sk]);
      const Gk = kk => {
          Jk((Fk => ({
            ...Fk,
            ...kk
          })))
        },
        Tk = kk => {
          var Fk;
          clearTimeout(null === (Fk = dk.onBoughtInfo) || void 0 === Fk ? void 0 : Fk.timeout);
          const Bk = setTimeout((() => {
            Gk({
              onBoughtInfo: null
            })
          }), 3e3);
          Ak.current = kk, Gk({
            onBoughtInfo: {
              text: kk,
              timeout: Bk,
              categoryKey: yk.current
            }
          })
        },
        rk = kk => {
          const {
            shopInfo: Fk,
            userInputsPerItem: Bk,
            redDotInfo: Rk,
            autoSelectCategory: ak
          } = function(kk, Fk, Bk, Rk, tk, ak) {
            if ((0, CF.F)(kk) || 0 === Object.keys(kk).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: Zt.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Xk = Hk.l[Hk.q].adConfig.showRewardedAds,
              bk = {};
            let wk = null;
            for (const fk in kk) {
              const Fk = kk[fk],
                Bk = {};
              let Rk = !1;
              for (const kk in Fk.items) {
                const tk = Fk.items[kk];
                (0, oR.k)(tk, Xk) && (Bk[kk] = tk, Rk = !0)
              }
              Rk && (bk[fk] = {
                ...Fk,
                items: Bk
              }, !0 === Fk.autoSelectCategory && (wk = fk))
            }
            const dk = {},
              sk = (kk, Fk, Rk, Xk) => {
                var bk, wk;
                const sk = pt(kk, Fk),
                  Vk = null !== (bk = Bk[sk]) && void 0 !== bk ? bk : Bk[Fk];
                if (null !== (wk = Xk.userInput) && void 0 !== wk && wk.type) switch (Xk.userInput.type) {
                  case "dropdown": {
                    var Jk;
                    const kk = !Vk || !Xk.userInput.dropdownOptions.some((kk => (0, oR.g)(kk) === Vk)),
                      Fk = Xk.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Rk || void 0 === Rk || null === (Jk = Rk.userInput) || void 0 === Jk ? void 0 : Jk.type) || JSON.stringify(Rk.userInput.dropdownOptions) !== JSON.stringify(Xk.userInput.dropdownOptions)),
                      Bk = Xk.userInput,
                      tk = !(0, CF.F)(Bk.initialValue) && Bk.dropdownOptions.some((kk => (0, oR.g)(kk) === Bk.initialValue));
                    var Ak;
                    return void(kk || Fk ? tk ? dk[sk] = null !== (Ak = Xk.userInput.initialValue) && void 0 !== Ak ? Ak : null : Xk.userInput.dropdownOptions.length > 0 ? dk[sk] = (0, oR.g)(Xk.userInput.dropdownOptions[0]) : dk[sk] = null : dk[sk] = Vk)
                  }
                  case "text":
                  case "number":
                    var ek, yk, fk;
                    return void((null === Rk || void 0 === Rk ? void 0 : Rk.userInput) !== Xk.userInput ? dk[sk] = null !== (ek = null !== (yk = Xk.userInput.initialValue) && void 0 !== yk ? yk : Vk) && void 0 !== ek ? ek : "" : dk[sk] = null !== (fk = null !== Vk && void 0 !== Vk ? Vk : Xk.userInput.initialValue) && void 0 !== fk ? fk : "");
                  case "color":
                    var mk, Wk, vk;
                    return void((null === Rk || void 0 === Rk ? void 0 : Rk.userInput) !== Xk.userInput ? dk[sk] = null !== (mk = null !== (Wk = Xk.userInput.initialValue) && void 0 !== Wk ? Wk : Vk) && void 0 !== mk ? mk : "#000000" : dk[sk] = null !== (vk = null !== Vk && void 0 !== Vk ? Vk : Xk.userInput.initialValue) && void 0 !== vk ? vk : "#000000");
                  case "player": {
                    const kk = (0, oR.i)(tk, ak, Xk.userInput);
                    return void(Vk && kk.includes(Vk) ? dk[sk] = Vk : dk[sk] = kk.length > 0 ? kk[0] : null)
                  }
                }
              };
            for (const fk in bk)
              for (const kk in bk[fk].items) {
                var Vk;
                const Bk = bk[fk].items[kk];
                sk(fk, kk, null === (Vk = Fk[fk]) || void 0 === Vk ? void 0 : Vk.items[kk], Bk)
              }
            const Jk = Zt.fromShopInfo(bk);
            for (const fk in bk) {
              var Ak;
              if (Rk.doesCategoryExist(fk)) {
                (null === (Ak = Fk[fk]) || void 0 === Ak ? void 0 : Ak.redDot) === bk[fk].redDot && Jk.updateCategoryRedDot(fk, Rk.categoryHasRedDot(fk));
                for (const kk in bk[fk].items) {
                  var ek, yk;
                  Rk.doesItemExist(fk, kk) && (null === (ek = Fk[fk]) || void 0 === ek || null === (yk = ek.items[kk]) || void 0 === yk ? void 0 : yk.redDot) === bk[fk].items[kk].redDot && Jk.updateItemRedDot(fk, kk, Rk.itemHasRedDot(fk, kk))
                }
              }
            }
            return {
              shopInfo: bk,
              userInputsPerItem: dk,
              redDotInfo: Jk,
              autoSelectCategory: wk
            }
          }(kk, dk.shopInfo, dk.userInputsPerItem, dk.redDotInfo, Xk, bk), wk = {
            shopInfo: Fk,
            userInputsPerItem: Bk,
            redDotInfo: Rk
          };
          if (null === ak || tk)
            if (Fk[dk.selectedCategoryKey]) wk.selectedCategoryKey = dk.selectedCategoryKey;
            else {
              const kk = UR(Fk);
              wk.selectedCategoryKey = kk.length > 0 ? kk[0] : null
            }
          else wk.selectedCategoryKey = ak;
          return 0 === Object.keys(Fk).length && tk && Ek.c.set({
            openEverythingMenuName: null
          }), wk
        },
        Dk = (kk, Fk, Bk) => {
          const Rk = dk.selectedCategoryKey,
            tk = pt(Rk, kk),
            ak = null !== Bk && void 0 !== Bk ? Bk : dk.userInputsPerItem[tk],
            Xk = {
              categoryKey: Rk,
              itemKey: kk,
              userInput: ak
            };
          if (yk.current = Rk, Fk.isRewardedAd) {
            if (Date.now() - vk.current < 5e3) return;
            (0, XF.Q)((() => {
              var Bk, Rk, ak;
              console.log("bought rewarded ad");
              const bk = Xk.categoryKey ? null === (Bk = Lk.current.shopInfo[Xk.categoryKey]) || void 0 === Bk ? void 0 : Bk.items[kk] : null;
              if (!bk || !bk.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Rk = Fk.userInput) || void 0 === Rk ? void 0 : Rk.type) === (null === bk || void 0 === bk || null === (ak = bk.userInput) || void 0 === ak ? void 0 : ak.type) ? (Xk.userInput = Lk.current.userInputsPerItem[tk], Wk.gameBridge.send("buyShopItem", Xk), Fk.onBoughtMessage && Tk(Fk.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), vk.current = Date.now()
          } else {
            Wk.gameBridge.send("buyShopItem", Xk), Gk({
              awaitingPurchase: !0
            }), clearTimeout(ik.current), ik.current = setTimeout((() => {
              Yk.current = null, Gk({
                awaitingPurchase: !1
              })
            }), 1e3);
            const kk = (0, oR.c)(Fk, ak);
            if (Yk.current = null, !isNaN(kk) && Kt(dk.currencyAmounts, Fk.currency)) {
              0 !== kk && (Yk.current = {
                currency: Fk.currency,
                amountBefore: dk.currencyAmounts[Fk.currency].amount
              });
              const Bk = {
                ...dk.currencyAmounts
              };
              Bk[Fk.currency].amount -= kk, Gk({
                currencyAmounts: Bk
              })
            }
            Fk.onBoughtMessage && Tk(Fk.onBoughtMessage)
          }
        },
        Pk = (kk, Fk) => {
          if (null === Fk || !kk.shopInfo[Fk]) return kk;
          let Bk = kk.redDotInfo;
          return Bk.categoryHasRedDot(Fk) && (Bk.updateCategoryRedDot(Fk, !1), Bk = Bk.shallowCopy()), {
            ...kk,
            selectedCategoryKey: Fk,
            redDotInfo: Bk
          }
        },
        hk = kk => {
          Jk((Fk => Pk(Fk, kk)))
        };
      (0, HF.f)(gR.j, (() => {
        Jk((kk => {
          const Fk = (0, gR.m)(UR(kk.shopInfo), kk.selectedCategoryKey, (Fk => (0, gR.f)(kk.shopInfo[Fk].items)));
          return Fk === kk.selectedCategoryKey ? kk : Pk(kk, Fk)
        }))
      })), (0, HF.f)("showShopFromServer", (kk => {
        let {
          toggle: Fk,
          eF: Bk
        } = kk;
        Bk && hk(Bk), 0 === Object.keys(dk.shopInfo).length || Fk && tk ? Ek.c.set({
          openEverythingMenuName: null
        }) : Ek.c.set({
          openEverythingMenuName: sF.p.SHOP
        })
      })), (0, HF.f)("closeShopOnDamaged", (() => {
        tk && Ek.c.set({
          openEverythingMenuName: null
        })
      })), (0, HF.f)("overShopInfo", (kk => {
        Tk(kk)
      })), (0, ek.f)("currencyAmounts", (kk => {
        var Fk;
        const Bk = Yk.current;
        Bk && (null === kk || void 0 === kk || null === (Fk = kk[Bk.currency]) || void 0 === Fk ? void 0 : Fk.amount) === Bk.amountBefore ? Gk({
          currencyAmounts: kk
        }) : (Yk.current = null, Gk({
          currencyAmounts: kk,
          awaitingPurchase: !1
        }))
      })), (0, ek.f)("shopInfo", (kk => {
        Gk({
          ...rk(kk),
          awaitingPurchase: !1
        })
      }));
      const qk = (0, Rk.useRef)({
        playerIds: Xk,
        localPlayerId: bk
      });
      (0, Rk.useEffect)((() => {
        qk.current.playerIds === Xk && qk.current.localPlayerId === bk || (qk.current = {
          playerIds: Xk,
          localPlayerId: bk
        }, Jk((kk => {
          const Fk = rk(kk.shopInfo);
          return {
            ...kk,
            ...Fk
          }
        })))
      }), [Xk, bk]);
      const Ck = dk.selectedCategoryKey,
        Zk = (kk, Fk) => {
          var Bk, Rk;
          return (isNaN(Fk) || (0, CF.F)(kk.currency) || Kt(dk.currencyAmounts, kk.currency) && Fk <= dk.currencyAmounts[kk.currency].amount) && (null === (Bk = kk.canBuy) || void 0 === Bk || Bk) && !(null !== (Rk = kk.hidden) && void 0 !== Rk && Rk)
        },
        pk = (kk, Fk) => {
          var Bk, Rk, tk;
          const Xk = pt(Ck, kk),
            bk = dk.shopInfo[Ck].items[kk],
            Vk = dk.userInputsPerItem[Xk],
            Jk = (0, oR.c)(bk, Vk),
            Ak = Zk(bk, Jk),
            ek = bk.enchant,
            yk = ek ? (0, zk.xb)(null !== (Bk = bk.customTitle) && void 0 !== Bk ? Bk : kk, {
              colour: zk.tb[ek.tier]
            }) : null !== (Rk = bk.customTitle) && void 0 !== Rk ? Rk : kk,
            mk = Fk => {
              const Bk = null !== Fk && void 0 !== Fk ? Fk : Vk,
                Rk = void 0 !== Fk ? (0, oR.c)(bk, Fk) : Jk;
              Zk(bk, Rk) && null !== Bk && Dk(kk, bk, Fk);
              let tk = dk.redDotInfo;
              tk.itemHasRedDot(Ck, kk) && (tk.updateItemRedDot(Ck, kk, !1), tk = tk.shallowCopy()), Gk({
                redDotInfo: tk
              })
            };
          return (0, sk.jsxs)("div", {
            className: ak()("ShopItem", {
              ShopItemNoInput: !bk.userInput,
              ShopItemNoInputCanBuy: !bk.userInput && Ak,
              ShopItemNoInputSelected: bk.isSelected,
              ShopItemEnchant: !!ek
            }),
            "data-pad-focusable": !bk.userInput || void 0,
            "data-pad-unavailable": !bk.userInput && !Ak || void 0,
            "data-pad-repeat": null !== (tk = (0, gR.b)(bk)) && void 0 !== tk ? tk : void 0,
            "data-pad-repeat-wait": dk.awaitingPurchase || void 0,
            onClick: () => {
              if (ek && uk.current) {
                if (Sk !== Xk) return void Nk(Xk);
                Nk(null)
              }
              bk.userInput || mk()
            },
            onPointerDown: kk => {
              ek && (uk.current = (0, OR.r)(kk))
            },
            onPointerEnter: kk => {
              ek && !(0, OR.r)(kk) && Nk(Xk)
            },
            onPointerLeave: kk => {
              ek && !(0, OR.r)(kk) && Nk((kk => kk === Xk ? null : kk))
            },
            style: {
              zIndex: Object.keys(dk.shopInfo[Ck].items).length - Fk
            },
            children: [dk.redDotInfo.itemHasRedDot(Ck, kk) && (0, sk.jsx)(wk.d, {
              top: "-6px",
              right: "-6px"
            }), bk.badge && (0, sk.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, sk.jsx)("div", {
                className: ak()("ShopBadgeMain", bk.badge.type),
                children: (0, sk.jsx)(SR.d, {
                  text: bk.badge.text
                })
              })
            }), (0, sk.jsx)("div", {
              className: "ShopItemLeft",
              children: bk.image && (0, sk.jsx)(jt, {
                item: bk,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, sk.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, sk.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, sk.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, sk.jsx)(SR.d, {
                    text: yk
                  })
                }), (0, sk.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, sk.jsx)(SR.d, {
                    text: bk.description
                  })
                })]
              }), bk.userInput && (0, sk.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: kk => {
                  kk.stopPropagation()
                },
                children: [(0, sk.jsx)(It, {
                  item: bk,
                  currInput: Vk,
                  updateInput: Fk => {
                    ((kk, Fk, Bk) => {
                      const Rk = pt(kk, Fk),
                        tk = {
                          ...dk.userInputsPerItem
                        };
                      tk[Rk] = Bk, Gk({
                        userInputsPerItem: tk
                      })
                    })(Ck, kk, Fk)
                  },
                  onSubmit: kk => {
                    mk(kk)
                  }
                }), ("dropdown" !== bk.userInput.type || !bk.userInput.autoSubmit) && (0, sk.jsx)(fk.g, {
                  className: "ItemCostButton",
                  disabled: !Ak && null !== Vk,
                  onClick: () => {
                    mk()
                  },
                  children: (0, sk.jsx)(nt, {
                    item: bk,
                    cost: Jk,
                    currencyAmounts: dk.currencyAmounts
                  })
                })]
              })]
            }), !bk.userInput && (0, sk.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, sk.jsx)(nt, {
                item: bk,
                cost: Jk,
                currencyAmounts: dk.currencyAmounts
              })
            }), ek && Sk === Xk && (0, sk.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, sk.jsx)(SR.d, {
                text: yk
              }), (0, sk.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, sk.jsx)(SR.d, {
                  text: (0, LR.b)("", ek.enchantments, ek.enchantmentData)
                })
              })]
            })]
          }, Xk)
        },
        Kk = function(kk) {
          for (const Fk in kk)
            if (kk[Fk].smp) return !0;
          return !1
        }(dk.shopInfo),
        xk = IR(dk.shopInfo, Ck);
      return (0, sk.jsx)(vR.c, {
        className: "Menu ShopBody",
        show: tk,
        children: 0 !== Object.keys(dk.shopInfo).length && (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, sk.jsx)(Vk, {
              items: UR(dk.shopInfo).map((kk => {
                var Fk;
                return {
                  id: kk,
                  title: null !== (Fk = dk.shopInfo[kk].customTitle) && void 0 !== Fk ? Fk : kk,
                  redDot: dk.redDotInfo.categoryHasRedDot(kk)
                }
              })),
              selectedItemId: Ck,
              onClick: hk,
              padStartsOnTab: (0, gR.d)(Ck)
            }), (0, sk.jsx)("div", {
              className: "MenuSideBarFooter",
              children: dk.currencyAmounts && Object.keys(dk.currencyAmounts).map((kk => {
                var Fk;
                const Bk = dk.currencyAmounts[kk];
                return Bk.hidden ? null : (0, sk.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Mk ? "SmallText" : ""),
                  children: [(0, sk.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, sk.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Bk.iconColour
                      },
                      children: (0, sk.jsx)(Ba, {
                        iconName: Bk.icon
                      })
                    }), "\xa0", (0, YR.e)(Bk.amount, 6)]
                  }), (null === (Fk = Bk.subtext) || void 0 === Fk ? void 0 : Fk.length) > 0 && (0, sk.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, sk.jsx)(SR.d, {
                      text: Bk.subtext
                    })
                  })]
                }, kk)
              }))
            })]
          }), (0, sk.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Kk && (0, sk.jsx)(Ct, {
              show: tk,
              shopInfo: dk.shopInfo,
              selectedCategoryKey: Ck,
              buy: (kk, Fk, Bk) => {
                Dk(kk, Fk, Bk)
              },
              canAfford: Zk,
              message: dk.onBoughtInfo
            }), null === xk && (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsx)("div", {
                className: ak()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== dk.onBoughtInfo
                }),
                children: (0, sk.jsx)(SR.d, {
                  text: Ak.current
                })
              }), (0, sk.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, sk.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Fk = dk.shopInfo[Ck]) || void 0 === Fk ? void 0 : Fk.description) && (0, sk.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, sk.jsx)(SR.d, {
                      text: dk.shopInfo[Ck].description
                    })
                  }), tk && (0, sk.jsx)("div", {
                    className: "ShopItems",
                    ref: mk,
                    "data-pad-initial-area": !0,
                    children: UR(null === (Bk = dk.shopInfo[Ck]) || void 0 === Bk ? void 0 : Bk.items).map(((kk, Fk) => pk(kk, Fk)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function jt(kk) {
      let {
        item: Fk,
        minWidth: Bk,
        minHeight: Rk
      } = kk;
      const {
        image: tk,
        schematicId: ak,
        imageColour: Xk
      } = Fk;
      if (ak) return (0, sk.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Bk}rem`,
          height: `${Rk}rem`
        },
        children: (0, sk.jsx)(NR.c, {
          game: {
            schematicId: ak
          }
        })
      });
      var wk, dk;
      if ((0, ER.f)(tk)) return (0, sk.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Bk}rem`,
          height: "0",
          minHeight: `${Rk}rem`
        },
        children: (0, sk.jsx)(ER.e, {
          itemName: tk,
          amount: null !== (wk = Fk.amount) && void 0 !== wk ? wk : 0,
          amountFontSize: Rk / 4 + "rem",
          enchantmentTier: null === (dk = Fk.enchant) || void 0 === dk ? void 0 : dk.tier
        })
      });
      const Vk = tk.slice(-4);
      return ".jpg" === Vk || ".png" === Vk ? (0, sk.jsx)(lt, {
        image: tk,
        minWidth: Bk
      }) : (0, sk.jsx)(bk.d, {
        name: tk,
        className: "SelectedItemImage",
        style: {
          color: Xk
        }
      })
    }

    function lt(kk) {
      let {
        image: Fk,
        minWidth: Bk
      } = kk;
      const {
        gameNameWithVariation: Rk
      } = (0, nB.h)("connectedGame"), tk = Fk.endsWith(".jpg");
      return (0, sk.jsx)("img", {
        className: ak()({
          ShopPixelImage: !tk
        }),
        style: {
          width: `${tk?1.6*Bk:Bk}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,zk.Vb)(Rk)}/${Fk}`,
        alt: Fk,
        draggable: !1
      })
    }

    function nt(kk) {
      let {
        item: Fk,
        cost: Bk,
        currencyAmounts: Rk
      } = kk;
      const tk = !isNaN(Bk) && 0 !== Bk && Kt(Rk, Fk.currency);
      let ak = null;
      return Fk.buyButtonText ? ak = Fk.buyButtonText : tk ? (ak = Bk, Fk.sell && (ak = -1 * Bk), ak = ak.toString()) : 0 === Bk ? ak = "Free" : Fk.isRewardedAd && (ak = "Watch ad"), (0, CF.F)(ak) || " " === ak ? null : (0, sk.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [tk && (0, sk.jsx)("div", {
          style: {
            color: Rk[Fk.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, sk.jsx)(Ba, {
            iconName: Rk[Fk.currency].icon
          })
        }), (0, sk.jsx)("div", {
          className: "BuyItemCost",
          children: (0, sk.jsx)(SR.d, {
            text: ak
          })
        })]
      })
    }

    function It(kk) {
      let {
        item: Fk,
        currInput: Bk,
        updateInput: tk,
        onSubmit: ak
      } = kk;
      const {
        t: bk
      } = (0, Xk.x)(), wk = (0, Rk.useRef)(null);
      if ((0, Rk.useEffect)((() => {
          const kk = wk.current;
          kk && kk.value !== Bk && document.activeElement !== kk && (kk.value = null !== Bk && void 0 !== Bk ? Bk : "")
        }), [Bk]), !Fk.userInput) return null;
      let dk = Fk.userInput;
      if (mk.featureFlags.sanitizeShopInput && "text" === Fk.userInput.type && (dk = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === dk.type || "number" === dk.type) {
        var Vk, Jk;
        console.assert(void 0 !== Bk, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Fk)}`);
        const kk = "text" === dk.type && dk.wordCharsOnly;
        return (0, sk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, sk.jsx)(Yk.e, {
            className: "ShopItemUserInputText",
            placeholderText: bk(dk.placeholderText),
            defaultValue: Bk,
            domRef: wk,
            onValueChange: (Fk, Bk) => {
              !0 === kk && (Fk = (0, uR.ib)(Fk)), wk.current.value = Fk, tk(Fk)
            },
            onEnter: ak,
            type: dk.type
          }, (null !== (Vk = dk.initialValue) && void 0 !== Vk ? Vk : "") + (null !== (Jk = dk.placeholderText) && void 0 !== Jk ? Jk : ""))
        })
      }
      if ("dropdown" === dk.type) {
        console.assert(void 0 !== Bk, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Fk)}`);
        const kk = dk.autoSubmit;
        return (0, sk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, sk.jsx)(oF.c, {
            options: dk.dropdownOptions.map((kk => (0, oR.g)(kk))),
            value: Bk,
            onChange: Fk => {
              let {
                value: Bk
              } = Fk;
              tk(Bk), kk && ak(Bk)
            }
          })
        })
      }
      return "player" === dk.type ? (0, sk.jsx)(Qt, {
        userInput: dk,
        currInput: Bk,
        updateInput: tk
      }) : "color" === dk.type ? (0, sk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, sk.jsx)("input", {
          type: "color",
          value: Bk,
          onChange: kk => {
            tk(kk.target.value)
          }
        })
      }) : null
    }

    function Qt(kk) {
      let {
        userInput: Fk,
        currInput: Bk,
        updateInput: Rk
      } = kk;
      const tk = (0, nB.h)("players"),
        ak = (0, nB.h)("hiddenPlayerNames"),
        Xk = (0, oR.i)(tk.ids, tk.localId, Fk);
      return (0, sk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, sk.jsx)(oF.c, {
          options: Xk.map((kk => {
            const {
              name: Fk
            } = tk.byId[kk];
            return {
              value: kk,
              label: null === Fk ? "" : (0, HR.i)(Fk, ak)
            }
          })),
          value: Bk,
          onChange: kk => {
            let {
              value: Fk
            } = kk;
            Rk(Fk)
          }
        })
      })
    }

    function ka(kk) {
      let {
        ids: Fk
      } = kk;
      return Fk
    }

    function Fa(kk) {
      let {
        localId: Fk
      } = kk;
      return Fk
    }

    function Ba(kk) {
      let {
        iconName: Fk
      } = kk;
      return Wk.gameBridge.lookup("isItemName", Fk) ? (0, sk.jsx)(ER.e, {
        itemName: Fk,
        amount: 1
      }) : (0, sk.jsx)(bk.d, {
        name: Fk,
        className: "2x"
      })
    }
    var Ra = Bk(1585);
    const ta = (0, Bk(1355).g)((kk => kk.PadLobbyShortcuts)),
      aa = (0, Rk.lazy)((() => Promise.resolve().then((() => Bk(4391))).then((kk => ({
        default: kk.Lobbyleaderboard
      })))));

    function Xa(kk) {
      let {
        show: Fk
      } = kk;
      return Fk ? (0, sk.jsxs)(sk.Fragment, {
        children: [(0, sk.jsx)(ta, {}), (0, sk.jsx)(Rk.Suspense, {
          fallback: (0, sk.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, sk.jsx)(Lk.b, {})
          }),
          children: (0, sk.jsx)(aa, {})
        })]
      }) : null
    }
    var ba = Bk(1506),
      wa = Bk(2801),
      da = Bk(1650),
      sa = Bk(2869),
      Va = Bk(2546),
      Ja = Bk(1437),
      Aa = Bk(1396),
      ea = Bk(2785),
      ya = Bk(2798),
      fa = Bk(2241);
    const ma = "storeRecentGiftRecipients",
      Wa = new Map;

    function va() {
      try {
        const kk = KF.i.getItem(ma);
        return Array.isArray(kk) ? kk.filter((kk => "string" === typeof(null === kk || void 0 === kk ? void 0 : kk.name) && kk.name.length > 0)).map((kk => ({
          name: kk.name,
          cosmetics: kk.cosmetics && "object" === typeof kk.cosmetics ? kk.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function ia(kk) {
      var Fk;
      const [Bk, tk] = (0, Rk.useState)(""), [ak, Xk] = (0, Rk.useState)("search"), [bk, wk] = (0, Rk.useState)(null), [dk, sk] = (0, Rk.useState)(null), Vk = (0, Rk.useRef)(null), Jk = (0, Rk.useRef)(null);
      (0, Rk.useEffect)((() => () => {
        Vk.current && clearTimeout(Vk.current)
      }), []);
      const Ak = null !== (Fk = null === bk || void 0 === bk ? void 0 : bk.name) && void 0 !== Fk ? Fk : null;

      function ek() {
        Vk.current && (clearTimeout(Vk.current), Vk.current = null)
      }(0, Rk.useEffect)((() => {
        if (null === Ak || kk === uk.NULL_USER_CONTEXT) return;
        const Fk = Ak.toLowerCase();
        if (Fk === kk.getPlayerName().toLowerCase()) return void sk({
          name: Ak,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Bk = Wa.get(Fk);
        if (Bk) return void sk({
          name: Ak,
          result: Bk
        });
        let Rk = !1;
        return async function(kk, Fk) {
          try {
            const Bk = await (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Fk
            }, {
              retries: 1
            }, kk.getMetricsCookies());
            if ("boolean" !== typeof(null === Bk || void 0 === Bk ? void 0 : Bk.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Bk)}`);
            return Bk
          } catch (Bk) {
            return console.error("Failed to look up gift recipient:", Bk), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(kk, Ak).catch((kk => (console.error("Gift recipient lookup failed:", kk), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((kk => {
          !0 !== kk.giftRecipientFound && "store:giftRecipientLookupFailed" === kk.giftRecipientError || Wa.set(Fk, kk), Rk || sk({
            name: Ak,
            result: kk
          })
        })), () => {
          Rk = !0
        }
      }), [Ak, kk]);
      const yk = (0, Rk.useMemo)((() => {
        const kk = Bk.trim();
        if (!kk) return {
          status: "none"
        };
        if (!bk || bk.name !== kk || (null === dk || void 0 === dk ? void 0 : dk.name) !== bk.name) return {
          status: "pending",
          name: kk
        };
        const Fk = dk.result;
        return !1 === Fk.giftRecipientFound ? {
          status: "error",
          name: bk.name,
          error: Fk.giftRecipientError
        } : {
          status: "found",
          name: Fk.giftRecipientName,
          ownedPacks: Fk.giftRecipientOwnedPacks,
          hasSuperRank: Fk.giftRecipientHasSuperRank,
          isSubscriber: Fk.giftRecipientIsSubscriber
        }
      }), [Bk, bk, dk]);
      (0, Rk.useEffect)((() => {
        "found" === yk.status && "typed" === (null === bk || void 0 === bk ? void 0 : bk.source) && Jk.current !== yk.name && (Jk.current = yk.name, (0, Qk.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [yk, bk]);
      const fk = (null === dk || void 0 === dk ? void 0 : dk.name) === (null === bk || void 0 === bk ? void 0 : bk.name) ? null === dk || void 0 === dk ? void 0 : dk.result : null,
        mk = !0 === (null === fk || void 0 === fk ? void 0 : fk.giftRecipientFound) ? fk.giftRecipientCosmetics : null;
      return {
        query: Bk,
        via: ak,
        recipient: yk,
        recipientCosmetics: mk,
        type: function(kk) {
          tk(kk), Xk("search"), ek();
          const Fk = kk.trim();
          Fk ? Vk.current = setTimeout((() => {
            wk({
              name: Fk,
              source: "typed"
            })
          }), 400) : wk(null)
        },
        choose: function(kk, Fk) {
          ek(), tk(kk), Xk("typed" === Fk ? "search" : "prefilled" === Fk ? "prefilled" : "suggestion"), wk({
            name: kk,
            source: Fk
          }), "typed" !== Fk && "prefilled" !== Fk && (0, Qk.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Fk
          })
        },
        clear: function() {
          ek(), tk(""), Xk("search"), wk(null)
        },
        recordGift: function(kk, Fk) {
          ! function(kk) {
            Wa.delete(kk.toLowerCase())
          }(kk), sk((Bk => {
            if (!Bk || Bk.name.toLowerCase() !== kk.toLowerCase() || !0 !== Bk.result.giftRecipientFound || "superRank" === Fk) return Bk;
            const Rk = Bk.result.giftRecipientOwnedPacks;
            return {
              ...Bk,
              result: {
                ...Bk.result,
                giftRecipientOwnedPacks: Rk.includes(Fk) ? Rk : [...Rk, Fk]
              }
            }
          }))
        }
      }
    }
    var Ya = Bk(2232),
      oa = Bk(4393),
      La = Bk(236),
      Oa = Bk(2906);
    const Ea = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Sa = Bk(2179),
      Na = Bk(586),
      Ha = Bk(2274),
      ua = Bk(2436);

    function Ma(kk) {
      let {
        cosmetics: Fk
      } = kk;
      return (0, sk.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, sk.jsx)(Ha.c, {
          cosmetics: Fk
        })
      })
    }

    function ga(kk, Fk) {
      var Bk, Rk;
      const tk = null !== (Bk = kk.friend) && void 0 !== Bk ? Bk : {
        isError: !1,
        name: kk.name,
        ranks: [],
        cosmetics: null !== (Rk = kk.cosmetics) && void 0 !== Rk ? Rk : {},
        nameColour: Na.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return Fk ? {
        ...tk,
        cosmetics: Fk
      } : tk
    }

    function Ua(kk) {
      let {
        recipient: Fk
      } = kk;
      return "pending" === Fk.status ? (0, sk.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, sk.jsx)(Lk.b, {})
      }) : "found" === Fk.status ? (0, sk.jsx)(bk.d, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function ca(kk) {
      var Fk;
      let {
        selfName: Bk,
        giftRecipient: tk,
        suggestionsVersion: wk,
        pulseSignal: dk,
        disabled: Vk
      } = kk;
      const {
        t: Jk
      } = (0, Xk.x)(), Ak = (0, Ck.i)(), ek = (0, Rk.useRef)(null), yk = (0, Rk.useRef)(null), {
        query: Wk,
        via: vk,
        recipient: ik,
        recipientCosmetics: Lk
      } = tk, Ok = (0, fa.o)(Wk), Ek = (0, Rk.useMemo)((() => {
        const kk = mk.featureFlags.useSocialFeatures ? Ak.friends.filter((kk => !kk.isError)) : [];
        return (0, fa.j)({
          onlineFriends: (0, Ck.e)(kk),
          recentRecipients: va(),
          friends: kk,
          selfName: Bk,
          max: 8
        })
      }), [Ak.friends, Bk, wk]), Sk = Wk.trim().toLowerCase(), Nk = "search" !== vk && Sk ? Ek.find((kk => kk.name.toLowerCase() === Sk)) : void 0, Hk = Nk && "prefilled" === vk ? [Nk, ...Ek.filter((kk => kk !== Nk))] : Ek, uk = "" !== Sk && !Nk, Mk = uk ? Wk : "", gk = Hk.length > 0;
      (0, Rk.useEffect)((() => {
        ek.current && ek.current.value !== Mk && (ek.current.value = Mk)
      }), [Mk]), (0, Rk.useEffect)((() => {
        ek.current && (ek.current.disabled = Vk)
      }), [Vk, dk]);
      const Uk = (0, Rk.useRef)(0);

      function Gk() {
        "self" !== Ok && (0, Qk.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), tk.clear()
      }

      function Tk(kk) {
        var Fk, Bk;
        if (Vk) return;
        if (" " === kk.key || "Enter" === kk.key) return kk.preventDefault(), void kk.currentTarget.click();
        const Rk = Array.from(null !== (Fk = null === (Bk = yk.current) || void 0 === Bk ? void 0 : Bk.querySelectorAll("[role=radio]")) && void 0 !== Fk ? Fk : []),
          tk = Rk.indexOf(kk.currentTarget);
        let ak;
        "ArrowRight" === kk.key || "ArrowDown" === kk.key ? ak = Rk[(tk + 1) % Rk.length] : "ArrowLeft" === kk.key || "ArrowUp" === kk.key ? ak = Rk[(tk - 1 + Rk.length) % Rk.length] : "Home" === kk.key ? ak = Rk[0] : "End" === kk.key && (ak = Rk[Rk.length - 1]), ak && (kk.preventDefault(), ak.focus(), ak.click())
      }(0, Rk.useEffect)((() => {
        var kk;
        dk > Uk.current && !Vk && (Uk.current = dk, null === (kk = ek.current) || void 0 === kk || kk.focus())
      }), [dk, Vk]);
      const rk = "self" === Ok,
        Dk = null !== (Fk = null === Nk || void 0 === Nk ? void 0 : Nk.name) && void 0 !== Fk ? Fk : null,
        zk = "error" === ik.status ? ik.error : null,
        Pk = "store:giftRecipientLookupFailed" === zk;
      return (0, sk.jsxs)("div", {
        className: ak()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Vk,
          StoreRecipientStripNoChips: !gk
        }),
        children: [(0, sk.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Jk("store:buyingFor")
        }), (0, sk.jsxs)("div", {
          ref: yk,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Jk("store:whoIsItFor"),
          children: [(0, sk.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": rk,
            tabIndex: Vk || !rk && null !== Dk ? -1 : 0,
            className: ak()("StoreRecipientMe", {
              StoreRecipientChecked: rk
            }),
            onClick: () => {
              Vk || Gk()
            },
            onKeyDown: Tk,
            children: [(0, sk.jsx)(bk.d, {
              name: "user"
            }), " ", Jk("store:me")]
          }), gk && (0, sk.jsx)("div", {
            className: "StoreRecipientChips",
            children: Hk.map((kk => {
              const Fk = kk === Nk;
              return (0, sk.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Fk,
                tabIndex: !Vk && Fk ? 0 : -1,
                title: kk.name,
                className: ak()("StoreRecipientChip", {
                  StoreRecipientChecked: Fk
                }),
                onClick: () => {
                  Vk || function(kk) {
                    "gift" !== Ok && (0, Qk.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), tk.choose(kk.name, kk.kind)
                  }(kk)
                },
                onKeyDown: Tk,
                children: (0, sk.jsx)(ua.d, {
                  playerSocialPreview: ga(kk, Fk ? Lk : null),
                  opensProfileCard: !1,
                  isFriend: null !== kk.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== kk.friend,
                  status: null === kk.friend ? null : void 0,
                  trailing: Fk ? (0, sk.jsx)(Ua, {
                    recipient: ik
                  }) : void 0
                })
              }, kk.name)
            }))
          })]
        }), (0, sk.jsxs)("div", {
          className: ak()("StoreRecipientSearch", {
            StoreRecipientChecked: uk,
            StoreRecipientSearchPulse: dk > 0 && !uk,
            StoreRecipientSearchError: null !== zk && !Pk
          }),
          onClick: () => {
            var kk;
            null === (kk = ek.current) || void 0 === kk || kk.focus()
          },
          children: [uk && "found" === ik.status && Lk && (0, sk.jsx)(Ma, {
            cosmetics: Lk
          }), !(uk && "found" === ik.status && Lk) && (0, sk.jsx)(bk.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, sk.jsx)(Yk.e, {
            className: "StoreRecipientSearchInput",
            domRef: ek,
            placeholderText: Jk("store:searchName"),
            defaultValue: Mk,
            maxLength: ck.f,
            onValueChange: function(kk) {
              "gift" !== Ok && kk.trim() && (0, Qk.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), tk.type(kk)
            },
            onEnter: () => {
              var kk;
              const Fk = null === (kk = ek.current) || void 0 === kk ? void 0 : kk.value.trim();
              Fk && tk.choose(Fk, "typed")
            },
            blurOnEnter: !0
          }), uk && (0, sk.jsx)(Ua, {
            recipient: ik
          }), uk && (0, sk.jsx)("div", {
            ...(0, fk.R)({
              disabled: Vk
            }),
            "aria-label": Jk("store:clearRecipient"),
            title: Jk("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: kk => {
              kk.stopPropagation(), Vk || Gk()
            },
            children: (0, sk.jsx)(bk.d, {
              name: "xmark"
            })
          })]
        }, dk), zk && (0, sk.jsx)("div", {
          className: ak()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Pk
          }),
          role: "status",
          children: Jk(zk)
        })]
      })
    }
    var Ga = Bk(2228),
      Ta = Bk(2151),
      ra = Bk(3379),
      Da = Bk(2910),
      za = Bk(2190);
    const Pa = Bk.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function ha() {
      (0, za.i)(Pa, {
        lowPriority: !1
      })
    }

    function qa(kk) {
      let {
        onBack: Fk,
        cta: Bk,
        recipient: tk,
        afterCta: ak
      } = kk;
      const {
        t: wk
      } = (0, Xk.x)(), [dk, Vk] = (0, Rk.useState)("starting"), Jk = (0, Rk.useRef)(null), Ak = (0, gF.d)(), ek = (0, Rk.useRef)(null), yk = (0, Rk.useCallback)((() => {
        const kk = Jk.current;
        null !== kk.error && kk.load();
        const Fk = kk.play();
        ek.current = Fk, Fk.catch((kk => {
          (0, ra.e)("Failed to play Super Rank video", kk), Ak.current && ek.current === Fk && Vk("failed")
        }))
      }), [Ak]);
      return (0, Rk.useEffect)((() => {
        const kk = Jk.current;
        let Fk;

        function Bk() {
          clearTimeout(Fk), Fk = setTimeout(yk, 3e3)
        }
        return yk(), kk.addEventListener("ended", Bk), () => {
          clearTimeout(Fk), kk.removeEventListener("ended", Bk)
        }
      }), [yk]), (0, sk.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, sk.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, sk.jsx)(fk.c, {
            className: "StoreDetailBackButton",
            onClick: Fk,
            padBack: !0,
            children: wk("general:back")
          }), (0, sk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, sk.jsx)(bk.d, {
              name: "bolt"
            }), " ", wk("homePage:superRank")]
          }), tk]
        }), (0, sk.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, sk.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, sk.jsx)("video", {
              ref: Jk,
              src: `${Mk.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Pa,
              muted: !0,
              playsInline: !0,
              controls: "playing" === dk,
              onPlaying: () => {
                Vk("playing")
              },
              onError: () => {
                Vk("failed")
              }
            }), ("failed" === dk || "loading" === dk) && (0, sk.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, sk.jsx)(fk.g, {
                ariaLabel: wk("general:play"),
                loading: "loading" === dk,
                onClick: () => {
                  Vk("loading"), yk()
                },
                touchPressOn: "pointerup",
                children: (0, sk.jsx)(bk.d, {
                  name: "play"
                })
              })
            })]
          }), (0, sk.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, sk.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, sk.jsx)(Da.c, {})
            }), (0, sk.jsxs)("div", {
              className: "StoreTileActions",
              children: [Bk, ak]
            })]
          })]
        })]
      })
    }
    var Ca = Bk(2457),
      Za = Bk(3344),
      pa = Bk(2895),
      Ka = Bk(2897);
    const xa = [Na.k.yellow, Na.k.green, Na.k.aqua, Na.k.blue, Na.k.purple, Na.k.red];

    function ja(kk) {
      return "needsRecipient" === kk || "lookingUp" === kk || "gift" === kk || "recipientOwns" === kk || "recipientSharesOwned" === kk || "recipientSubscribed" === kk
    }

    function la(kk) {
      const {
        onKeyDown: Fk,
        ...Bk
      } = (0, fk.R)();
      return {
        ...Bk,
        "aria-label": kk,
        onKeyDown: kk => {
          kk.target === kk.currentTarget && (null === Fk || void 0 === Fk || Fk(kk))
        }
      }
    }

    function na(kk) {
      let {
        text: Fk
      } = kk;
      return (0, sk.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Fk).map(((kk, Fk) => (0, sk.jsx)("span", {
          style: {
            color: xa[Fk % xa.length]
          },
          children: kk
        }, Fk)))
      })
    }
    const Ia = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Qa(kk) {
      let {
        state: Fk,
        item: Bk,
        price: Rk,
        busy: tk,
        highlight: wk = !1,
        onAct: dk,
        onNeedRecipient: Vk,
        onLogin: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Xk.x)(), ek = "superRank" === Bk ? Tk.n.product.days : null, yk = kk => null === ek ? Ak(kk ? "general:gift" : "general:buy") : Ak(kk ? "store:giftDays" : "store:buyDays", {
        days: ek
      }), mk = (kk, Fk) => (0, sk.jsxs)(sk.Fragment, {
        children: [Fk && (0, sk.jsx)("span", {
          className: "StoreCtaIcon",
          children: Fk
        }), null === kk && (0, sk.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== kk && (0, sk.jsx)("span", {
          className: "StoreCtaLabel",
          title: kk,
          children: kk
        }), (0, sk.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, sk.jsx)(Ta.d, {
            amount: Rk
          })]
        })]
      });
      let Wk;
      switch (Fk) {
        case "pending":
          Wk = (0, sk.jsx)(fk.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: mk(null)
          });
          break;
        case "login":
          Wk = (0, sk.jsx)(fk.o, {
            className: "StoreCtaButton",
            onClick: Jk,
            children: mk(yk(!1))
          });
          break;
        case "owned":
          Wk = (0, sk.jsx)(fk.j, {
            className: "StoreCtaButton",
            onClick: () => {
              Ek.c.set({
                openEverythingMenuName: sF.p.CUSTOMISATION
              })
            },
            children: (0, sk.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, sk.jsx)(bk.d, {
                name: "shirt"
              }), " ", Ak("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Wk = (0, sk.jsx)(fk.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, sk.jsx)("span", {
              className: "StoreCtaLabel",
              children: Ak(Ia[Fk])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Wk = (0, sk.jsx)(fk.o, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Fk || null === Rk,
            loading: "lookingUp" === Fk || tk,
            onClick: dk,
            analyticsClick: {
              id: "store.gift",
              value: Bk
            },
            children: mk(yk(!0), fa.e)
          });
          break;
        case "buy":
        case "recharge":
          Wk = (0, sk.jsx)(fk.o, {
            className: "StoreCtaButton",
            loading: tk,
            disabled: null === Rk,
            onClick: dk,
            analyticsClick: {
              id: "store.buy",
              value: Bk
            },
            children: mk(yk(!1))
          })
      }
      return (0, sk.jsx)("div", {
        className: ak()("StoreCta", {
          StoreCtaHighlight: wk
        }),
        onClick: kk => {
          kk.stopPropagation(), "needsRecipient" === Fk && Vk()
        },
        children: Wk
      })
    }

    function kX() {
      const {
        t: kk
      } = (0, Xk.x)();
      return (0, sk.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, sk.jsxs)("li", {
          children: [(0, sk.jsx)(bk.d, {
            name: "check"
          }), (0, sk.jsx)(na, {
            text: kk("store:colourfulNames")
          })]
        }), (0, sk.jsxs)("li", {
          children: [(0, sk.jsx)(bk.d, {
            name: "check"
          }), kk("store:perkCapes")]
        }), (0, sk.jsxs)("li", {
          children: [(0, sk.jsx)(bk.d, {
            name: "check"
          }), kk("store:perkNoAdverts")]
        }), (0, sk.jsxs)("li", {
          children: [(0, sk.jsx)(bk.d, {
            name: "check"
          }), kk("store:perkFriends", {
            count: (0, nk.e)(["super"])
          })]
        })]
      })
    }

    function FX(kk) {
      let {
        daysLeft: Fk,
        totalDays: Bk,
        urgent: Rk
      } = kk;
      const {
        t: tk
      } = (0, Xk.x)(), bk = Bk > 0 ? Math.min(1, Math.max(.03, Fk / Bk)) : 1;
      return (0, sk.jsxs)("div", {
        className: ak()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Rk
        }),
        children: [(0, sk.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Fk ? tk("store:oneDayLeft") : tk("store:daysLeft", {
            days: Fk
          })
        }), (0, sk.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, sk.jsx)("i", {
            style: {
              width: 100 * bk + "%"
            }
          })
        })]
      })
    }

    function BX(kk) {
      let {
        state: Fk,
        urgent: Bk,
        daysLeft: Rk,
        totalDays: tk,
        recipientHasSuperRank: wk,
        busy: dk,
        highlight: Vk,
        onOpen: Jk,
        onAct: Ak,
        onNeedRecipient: ek,
        onLogin: yk
      } = kk;
      const {
        t: fk
      } = (0, Xk.x)(), mk = ja(Fk), {
        days: Wk
      } = Tk.n.product, vk = fk("store:recipientHasSuperRank", {
        giftDays: Wk
      }), ik = jk("subscribed" === Fk);
      return (0, sk.jsxs)("div", {
        className: ak()("StoreTile StoreSuperRankTile", {
          StoreTileGift: mk,
          StoreSuperRankTileUrgent: "recharge" === Fk && Bk,
          StoreSuperRankTileWithChip: wk,
          StoreSuperRankTileGiftReady: "gift" === Fk
        }),
        ...la(fk("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: ha,
        onFocus: ha,
        onClick: Jk,
        children: [(0, sk.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Sa.g})`
          }
        }), mk && (0, sk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, sk.jsxs)("div", {
          className: "StoreTileContent",
          children: [wk && (0, sk.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: vk,
            children: vk
          }), (0, sk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, sk.jsx)(bk.d, {
              name: "bolt"
            }), " ", fk("homePage:superRank")]
          }), mk && (0, sk.jsx)("div", {
            className: "StoreTilePitch",
            children: fk("store:giftPitch", {
              days: Wk
            })
          }), "recharge" === Fk && (0, sk.jsx)(FX, {
            daysLeft: Rk,
            totalDays: tk,
            urgent: Bk
          }), ik && (0, sk.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, sk.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: ik
            })
          }), (0, sk.jsx)(kX, {}), (0, sk.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, sk.jsx)(Qa, {
              state: Fk,
              item: "superRank",
              price: Tk.n.price,
              busy: dk,
              highlight: Vk,
              onAct: Ak,
              onNeedRecipient: ek,
              onLogin: yk
            }), "needsRecipient" === Fk && (0, sk.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: fk("store:pickRecipientFirst")
            }), "recharge" === Fk && Bk && (0, sk.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Rk ? fk("store:endsInOneDay") : fk("store:endsInDays", {
                days: Rk
              })
            })]
          })]
        })]
      })
    }
    const RX = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function tX(kk) {
      var Fk;
      let {
        pack: Bk,
        state: tk,
        busy: wk,
        onOpen: dk,
        onAct: Vk,
        onNeedRecipient: Jk,
        onLogin: Ak
      } = kk;
      const {
        t: ek
      } = (0, Xk.x)(), yk = ba.d[Bk], fk = ea.n[Bk], mk = (0, Sa.o)(Bk), Wk = (0, Rk.useRef)(null);
      (0, pa.g)(Bk, Wk);
      const vk = ja(tk),
        ik = null !== (Fk = yk.displayName) && void 0 !== Fk ? Fk : Bk,
        Yk = (0, Za.e)((() => {
          (0, Ca.c)();
          const kk = (0, pa.d)(Bk);
          void 0 !== kk && (0, za.i)((0, pa.b)(kk))
        })),
        [Lk] = (0, Rk.useState)(Oa.j);
      return (0, sk.jsxs)("div", {
        className: ak()("StoreTile StorePackTile", RX[yk.tier], {
          StorePackTileOwned: "owned" === tk,
          StorePackTileRecipientOwns: "recipientOwns" === tk,
          StoreTileGift: vk
        }),
        ...la(ik),
        ref: Wk,
        "data-store-item": Bk,
        onClick: dk,
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || Lk || Yk.start()
        },
        onPointerLeave: Yk.cancel,
        children: [fk && (0, sk.jsx)(fk, {}), (0, sk.jsx)("div", {
          className: "StorePackCharacters",
          children: mk.map((kk => (0, sk.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Sa.h)(kk)})`
            }
          }, kk)))
        }), (0, sk.jsx)("div", {
          className: "StoreTileScrim"
        }), vk && (0, sk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, sk.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, sk.jsx)("div", {
            className: "StoreTileTitle",
            children: ik
          }), (0, sk.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, sk.jsx)(Ka.b, {
              tier: yk.tier
            }), " \xb7 ", ek("store:itemCount", {
              count: (0, Ga.h)(Bk)
            }), "owned" === tk && (0, sk.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, sk.jsx)(bk.d, {
                name: "check"
              }), " ", ek("general:owned")]
            })]
          }), (0, sk.jsx)(Qa, {
            state: tk,
            item: Bk,
            price: (0, Tk.h)(Bk),
            busy: wk,
            onAct: Vk,
            onNeedRecipient: Jk,
            onLogin: Ak
          })]
        })]
      })
    }
    var aX = Bk(2875),
      XX = Bk(1499),
      bX = Bk(1402),
      wX = Bk(3364);

    function dX() {
      return (0, sk.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var sX = Bk(1297),
      VX = Bk(1512),
      JX = Bk(9039);

    function AX(kk) {
      let {
        character: Fk,
        drawn: Bk,
        onDrawn: tk
      } = kk;
      const Xk = (0, Rk.useRef)(null),
        bk = (0, JX.f)(Fk);
      return (0, sk.jsx)("div", {
        className: ak()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Bk
        }),
        children: (0, sk.jsx)(Rk.Suspense, {
          fallback: null,
          children: (0, sk.jsx)(Ca.b, {
            ref: Xk,
            framing: "store",
            turntableFromYaw: Bk ? bk.yaw : null,
            onReady: () => {
              var kk, Bk;
              null === (kk = Xk.current) || void 0 === kk || kk.setOrbit(bk), null === (Bk = Xk.current) || void 0 === Bk || Bk.setAllCosmetics(VX.d[Fk].cosmetics)
            },
            onDrawn: tk
          })
        })
      })
    }
    const eX = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      yX = new Set(["wildSpirits"]);

    function fX(kk) {
      var Fk;
      let {
        tile: Bk,
        design: tk,
        canGoLive: wk,
        live: dk,
        busy: Vk,
        highlight: Jk,
        onLiveStart: Ak,
        onLiveEnd: ek,
        onOpen: yk,
        onAct: fk,
        onNeedRecipient: mk,
        onLogin: Wk
      } = kk;
      const {
        t: vk
      } = (0, Xk.x)(), {
        pack: ik,
        state: Yk
      } = Bk, Lk = ba.d[ik], Ok = (0, ba.g)(ik), Ek = (0, Sa.k)(ik), Sk = ea.n[Ek], Nk = yX.has(Ek), {
        tier: Hk
      } = Lk, uk = "legendary" === Hk || "mythic" === Hk, Mk = (0, Rk.useRef)(null);
      (0, sX.c)(Mk, "epic" === Hk || uk || Nk);
      const [gk, ck] = (0, Rk.useState)(!1);
      return !dk && gk && ck(!1), (0, sk.jsxs)("div", {
        ref: Mk,
        className: ak()("StoreCharacterCard", `StoreCharacterCard${tk}`, eX[Hk], {
          StoreCharacterCardOwned: "owned" === Yk || "recipientOwns" === Yk,
          StoreCharacterCardGift: ja(Yk),
          StoreCharacterCardItem: void 0 === Ok
        }),
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || !wk || dk || void 0 === Ok || Ak()
        },
        onPointerLeave: ek,
        children: [(0, sk.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Sk && (0, sk.jsx)(Sk, {
            simple: !0
          })
        }), uk && (0, sk.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, sk.jsxs)(Uk.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, XX.g)({
            kind: "pack",
            pack: ik
          }),
          "data-store-item": ik,
          onClick: kk => {
            (0, bX.e)(kk) && (kk.preventDefault(), yk())
          },
          children: [(0, sk.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, sk.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, sk.jsx)("div", {
              className: ak()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: gk
              }),
              style: {
                backgroundImage: `url(${(0,Sa.r)(ik)})`
              }
            }), dk && void 0 !== Ok && (0, sk.jsx)(AX, {
              character: Ok,
              drawn: gk,
              onDrawn: () => {
                ck(!0)
              }
            })]
          }), (0, sk.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Fk = Lk.displayName) && void 0 !== Fk ? Fk : ik
          }), (0, sk.jsx)(Ka.b, {
            tier: Hk,
            className: "StoreCharacterTier"
          })]
        }), (0, sk.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Nk && (0, sk.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, sk.jsx)(dX, {})
        }), "owned" === Yk && (0, sk.jsx)("span", {
          className: "StoreCharacterOwned",
          title: vk("general:owned"),
          "aria-label": vk("general:owned"),
          children: (0, sk.jsx)(bk.d, {
            name: "check"
          })
        }), (0, sk.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, sk.jsx)(Qa, {
            state: Yk,
            item: ik,
            price: (0, Tk.h)(ik),
            busy: Vk,
            highlight: Jk,
            onAct: fk,
            onNeedRecipient: mk,
            onLogin: Wk
          })
        })]
      })
    }

    function mX(kk) {
      let {
        tiles: Fk,
        busy: Bk,
        highlightItem: tk,
        onOpen: ak,
        onAct: Xk,
        onNeedRecipient: bk,
        onLogin: wk
      } = kk;
      const dk = (0, wX.j)("storeCharacterCardFoil"),
        Vk = (0, wX.j)("storeCharacterCardSpotlight"),
        Jk = dk ? "Foil" : Vk ? "Spotlight" : "Showcase",
        [Ak] = (0, Rk.useState)(Oa.j),
        [ek, yk] = (0, Rk.useState)(null);
      return (0, sk.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Fk.map((kk => (0, sk.jsx)(fX, {
          tile: kk,
          design: Jk,
          canGoLive: !Ak,
          live: ek === kk.pack,
          busy: Bk,
          highlight: tk === kk.pack,
          onLiveStart: () => {
            yk(kk.pack)
          },
          onLiveEnd: () => {
            yk((Fk => Fk === kk.pack ? null : Fk))
          },
          onOpen: () => {
            ak(kk.pack)
          },
          onAct: () => {
            Xk(kk.pack)
          },
          onNeedRecipient: bk,
          onLogin: () => {
            wk(kk.pack)
          }
        }, kk.pack)))
      })
    }
    var WX = Bk(9051);

    function vX(kk) {
      let {
        title: Fk
      } = kk;
      return (0, sk.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, sk.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Fk
        })
      })
    }

    function iX(kk) {
      let {
        mountAtOnce: Fk,
        children: Bk
      } = kk;
      const tk = (0, Rk.useRef)(null),
        [ak, Xk] = (0, Rk.useState)(Fk),
        bk = (0, WX.c)();
      return (0, Rk.useLayoutEffect)((() => {
        const kk = tk.current;
        kk && kk.getBoundingClientRect().top < kk.parentElement.getBoundingClientRect().bottom && Xk(!0)
      }), []), ak || bk ? (0, sk.jsx)(sk.Fragment, {
        children: Bk
      }) : (0, sk.jsx)("div", {
        ref: tk
      })
    }

    function YX(kk) {
      let {
        layout: Fk,
        mountAtOnce: Bk,
        bundleGift: Rk,
        superRankTotalDays: tk,
        busy: ak,
        highlightItem: bk,
        onOpen: wk,
        onAct: dk,
        onNeedRecipient: Vk,
        onLogin: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Xk.x)(), ek = Fk.packs.filter((kk => void 0 === (0, ba.g)(kk.pack) && !(0, ba.m)(kk.pack))), yk = Fk.packs.filter((kk => void 0 !== (0, ba.g)(kk.pack))), fk = Fk.packs.filter((kk => (0, ba.m)(kk.pack)));
      return (0, sk.jsxs)(sk.Fragment, {
        children: [(0, sk.jsx)(aX.c, {
          className: "StoreSuperGems",
          gift: Rk,
          highlightSku: bk
        }), (0, sk.jsx)(vX, {
          title: Ak("store:rank")
        }), (0, sk.jsx)(BX, {
          state: Fk.superRank.state,
          urgent: Fk.superRank.urgent,
          daysLeft: Fk.superRankDaysLeft,
          totalDays: tk,
          recipientHasSuperRank: Fk.recipientHasSuperRank,
          busy: ak,
          highlight: "superRank" === bk,
          onOpen: () => {
            wk("superRank")
          },
          onAct: () => {
            dk("superRank")
          },
          onNeedRecipient: Vk,
          onLogin: () => {
            Jk("superRank")
          }
        }), (0, sk.jsxs)(iX, {
          mountAtOnce: Bk,
          children: [(0, sk.jsx)(vX, {
            title: Ak("store:bundles")
          }), (0, sk.jsx)("div", {
            className: "StorePackGrid",
            children: ek.map((kk => (0, sk.jsx)(tX, {
              pack: kk.pack,
              state: kk.state,
              busy: ak,
              onOpen: () => {
                wk(kk.pack)
              },
              onAct: () => {
                dk(kk.pack)
              },
              onNeedRecipient: Vk,
              onLogin: () => {
                Jk(kk.pack)
              }
            }, kk.pack)))
          }), (0, sk.jsxs)(iX, {
            mountAtOnce: Bk,
            children: [(0, sk.jsx)(vX, {
              title: Ak("store:characters")
            }), (0, sk.jsx)(mX, {
              tiles: yk,
              busy: ak,
              highlightItem: bk,
              onOpen: wk,
              onAct: dk,
              onNeedRecipient: Vk,
              onLogin: Jk
            }), fk.length > 0 && (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsx)(vX, {
                title: Ak("store:premiumItems")
              }), (0, sk.jsx)(mX, {
                tiles: fk,
                busy: ak,
                highlightItem: bk,
                onOpen: wk,
                onAct: dk,
                onNeedRecipient: Vk,
                onLogin: Jk
              })]
            })]
          })]
        })]
      })
    }

    function oX(kk) {
      let {
        state: Fk,
        mode: Bk,
        giftName: Rk,
        busy: tk,
        highlight: ak,
        purchaseError: bk,
        onBack: wk,
        onChooseRecipient: dk,
        onAct: Vk,
        onLogin: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Xk.x)(), ek = jk("gift" !== Bk);
      return (0, sk.jsx)(qa, {
        onBack: wk,
        recipient: "gift" === Bk && (0, sk.jsxs)(sk.Fragment, {
          children: [Rk && (0, sk.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Ak("store:giftFor", {
              name: Rk
            }),
            children: [fa.e, " ", Ak("store:giftFor", {
              name: Rk
            })]
          }), !Rk && (0, sk.jsxs)("div", {
            ...(0, fk.R)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: dk,
            children: [fa.e, " ", Ak("store:chooseRecipient")]
          })]
        }),
        cta: (0, sk.jsx)(Qa, {
          state: Fk,
          item: "superRank",
          price: Tk.n.price,
          busy: tk,
          highlight: ak,
          onAct: Vk,
          onNeedRecipient: dk,
          onLogin: Jk
        }),
        afterCta: (0, sk.jsxs)(sk.Fragment, {
          children: [ek && (0, sk.jsx)("span", {
            className: "StoreTileNote",
            children: ek
          }), bk && (0, sk.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Ak(bk)
          })]
        })
      })
    }
    var LX = Bk(137);
    const OX = LX.m("kind", [LX.C({
      kind: LX.u("refused"),
      heldTierId: LX.T(),
      until: LX.A()
    }), LX.C({
      kind: LX.u("refund"),
      tierId: LX.T(),
      refundedMs: LX.A(),
      forfeitedMs: LX.A(),
      premiumCurrency: LX.A()
    }), LX.C({
      kind: LX.u("none")
    })]);
    async function EX(kk) {
      const Fk = await (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: kk
      }, {
        retries: 1
      });
      return OX.parse(Fk)
    }
    var SX = Bk(2838),
      NX = Bk(2877);

    function HX(kk, Fk) {
      const Bk = Math.max(1, Math.round(Fk / zk.f));
      return [1 === Bk ? `${kk}OneDay` : kk, {
        days: Bk.toLocaleString()
      }]
    }

    function uX() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, hk.purchasesAllowed)() ? (0, sk.jsx)(MX, {}) : null
    }

    function MX() {
      const {
        t: kk
      } = (0, Xk.x)(), {
        userContext: Fk
      } = (0, Ak.e)(), {
        purchaseUnderWay: Bk,
        notice: tk,
        subscribe: ak
      } = (0, SX.e)(), [bk, wk] = (0, Rk.useState)(null), [dk, Vk] = (0, Rk.useState)(0), [Jk, ek] = (0, Rk.useState)(!1), yk = (0, Rk.useRef)(!0), mk = Fk !== uk.NULL_USER_CONTEXT, Wk = null !== bk && bk.loadedFor === Fk ? bk.offer : null, vk = null === tk || void 0 === tk ? void 0 : tk.pendingIntentId, ik = (0, Rk.useRef)(vk);

      function Yk() {
        Vk((kk => kk + 1))
      }
      async function Lk(kk) {
        ek(!1), await ak(kk), yk.current && Yk()
      }
      if ((0, Rk.useEffect)((() => (yk.current = !0, () => {
          yk.current = !1
        })), []), (0, Rk.useEffect)((() => {
          void 0 !== ik.current && void 0 === vk && Yk(), ik.current = vk
        }), [vk]), (0, Rk.useEffect)((() => {
          if (!mk) return;
          let kk = !1;
          return ek(!1), async function() {
            const {
              offering: kk
            } = await (0, wF.f)().getOfferings("superRankPage"), Fk = null === kk || void 0 === kk ? void 0 : kk.packages.find((kk => null !== kk.price));
            return void 0 === Fk ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Fk,
              preview: await EX(Fk.productId)
            }
          }().catch((kk => (console.error("Billing: loading the Super Rank subscription or its preview failed:", kk), {
            kind: "loadFailed"
          }))).then((Bk => {
            kk || wk((kk => "loadFailed" === Bk.kind && (null === kk || void 0 === kk ? void 0 : kk.loadedFor) === Fk ? kk : {
              loadedFor: Fk,
              offer: Bk
            }))
          })), () => {
            kk = !0
          }
        }), [Fk, mk, dk]), null === Wk) return null;
      if ("loaded" !== Wk.kind) return (0, sk.jsx)(NX.f, {
        notice: {
          kind: "error",
          key: "unavailable" === Wk.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Ok,
        preview: Ek
      } = Wk;
      if ("refused" === Ek.kind) return (0, sk.jsx)(NX.f, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Ek.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Sk = (0, aX.d)(Ok.price);
      if (Jk && "refund" === Ek.kind) {
        const {
          refundedMs: Fk,
          forfeitedMs: Rk,
          premiumCurrency: tk
        } = Ek, ak = Rk + (0 === tk ? Fk : 0), [Xk, bk] = HX("payments:subscribeRefundsGemRank", Fk), [wk, dk] = HX("payments:subscribeForfeitsGemRank", ak);
        return (0, sk.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, sk.jsx)("div", {
            children: kk("payments:subscribeEndsGemRank")
          }), tk > 0 && (0, sk.jsx)("div", {
            children: kk(Xk, {
              ...bk,
              amount: tk.toLocaleString()
            })
          }), ak > 0 && (0, sk.jsx)("div", {
            children: kk(wk, dk)
          }), (0, sk.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, sk.jsx)(fk.j, {
              onClick: () => {
                ek(!1)
              },
              children: kk("general:cancel")
            }), (0, sk.jsx)(fk.o, {
              onClick: () => {
                Lk(Ok)
              },
              loading: Bk,
              children: kk("payments:subscribeContinue", {
                price: Sk
              })
            })]
          })]
        })
      }
      return (0, sk.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, sk.jsx)(NX.f, {
          notice: tk,
          className: "SmallTextBold"
        }), (0, sk.jsx)(NX.b, {
          className: "SmallTextBold"
        }), (0, sk.jsx)(fk.o, {
          onClick: () => {
            "refund" === Ek.kind ? ek(!0) : Lk(Ok)
          },
          disabled: void 0 !== vk,
          loading: Bk,
          children: kk("payments:subscribeToSuperRank", {
            price: Sk
          })
        })]
      })
    }
    const gX = {
      kind: "board"
    };
    let UX = !1;

    function cX(kk) {
      return "found" === kk.status || "error" === kk.status && "store:giftRecipientLookupFailed" === kk.error ? kk.name : null
    }(0, Pk.u)(wa.prefetchBillingOfferings);
    const GX = (0, Rk.memo)((function(kk) {
      var Fk;
      let {
        show: tk
      } = kk;
      const {
        t: bk
      } = (0, Xk.x)(), {
        userContext: wk
      } = (0, Ak.e)(), dk = wk !== uk.NULL_USER_CONTEXT, Vk = ia(wk), [Jk, ek] = (0, yk.c)(), {
        page: fk,
        urlMode: mk,
        goTo: Wk
      } = (0, Ya.f)(), vk = function(kk) {
        return "superRank" === kk.kind ? "superRank" : "pack" === kk.kind ? kk.pack : null
      }(fk), {
        openEverythingMenuName: ik,
        gameState: Yk
      } = (0, Ek.h)(["openEverythingMenuName", "gameState"]), Lk = null !== ik;
      ! function(kk, Fk) {
        const [tk] = (0, Rk.useState)(Oa.j), [ak, Xk] = (0, Rk.useState)(!1);
        tk && Fk && !ak && Xk(!0);
        const bk = (0, XR.o)(),
          wk = tk && ak && kk && !bk;
        (0, Rk.useEffect)((() => {
          if (!wk) return;
          let kk = null,
            Fk = null,
            Rk = null;
          const tk = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, wF.f)().purchaseUnderWay,
            ak = () => {
              var Bk;
              null === (Bk = Rk) || void 0 === Bk || Bk(), Rk = null, null !== kk && (clearTimeout(kk), kk = null), null !== Fk && (clearTimeout(Fk), Fk = null)
            },
            Xk = () => {
              (0, oa.l)(!1), (0, oa.h)(!1), ak(), kk = setTimeout((() => {
                kk = null, Rk = (0, La.b)((() => {
                  Rk = null, tk() ? Xk() : ((0, oa.l)(!0), Fk = setTimeout((() => {
                    Fk = null, Rk = (0, La.b)((() => {
                      Rk = null, tk() ? Xk() : (0, oa.h)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Bk(4391))).then((kk => {
                    kk.startBackgroundGameSetup()
                  }), (kk => {
                    console.warn("Background game setup: its chunk failed to load", kk)
                  })))
                }))
              }), 2e3)
            };
          for (const Bk of Ea) window.addEventListener(Bk, Xk, {
            capture: !0,
            passive: !0
          });
          return Xk(), () => {
            for (const kk of Ea) window.removeEventListener(kk, Xk, {
              capture: !0
            });
            ak(), (0, oa.l)(!1), (0, oa.h)(!1)
          }
        }), [wk])
      }(tk && Lk, "pack" === fk.kind);
      const Ok = "landingPage" === Yk;
      (0, Rk.useEffect)((() => {
        Lk && (0, wa.prefetchBillingOfferings)()
      }), [Lk]), (0, Rk.useEffect)((() => {
        Lk && !tk && Ok && (0, Sa.u)()
      }), [Lk, tk, Ok]);
      const [Sk, Nk] = (0, Rk.useState)(0), [Hk, Mk] = (0, Rk.useState)(null), [gk, Uk] = (0, Rk.useState)(null), [ck, Gk] = (0, Rk.useState)(null), [rk, Dk] = (0, Rk.useState)(null), zk = (0, Rk.useRef)(null), qk = (0, Rk.useRef)(null), Ck = (0, Rk.useRef)(!1), Zk = (0, Pk.C)(), pk = (0, Rk.useRef)(0), Kk = (0, Rk.useRef)(!1);

      function xk() {
        Nk((kk => kk + 1))
      }(0, Rk.useEffect)((() => {
        if (tk) {
          if (UX = !0, (0, Pk.j)(), Zk && Zk.seq !== pk.current) {
            var kk;
            pk.current = Zk.seq, "loginResume" !== Zk.source && (0, Pk.B)();
            const Fk = (0, Pk.e)(Zk);
            mk || Wk(Fk), Dk(null !== (kk = Zk.highlight) && void 0 !== kk ? kk : null), Uk(null), "gift" === Zk.mode && Zk.giftRecipientName ? Vk.choose(Zk.giftRecipientName, "prefilled") : "current" !== Zk.mode && Vk.clear(), "gift" !== Zk.mode || Zk.giftRecipientName || xk(), (0, Qk.reportAnalyticsClick)({
              id: "store.open",
              value: Zk.source
            })
          } else Kk.current || (0, Qk.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Kk.current = !0
        } else Kk.current = !1
      }), [tk, Zk]), (0, Rk.useEffect)((() => {
        if (!rk) return;
        const kk = setTimeout((() => {
          Dk(null)
        }), 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [rk]), (0, Rk.useEffect)((() => {
        const kk = zk.current;
        var Fk;
        if (tk && kk) {
          if (vk) qk.current = vk, null === (Fk = kk.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Fk || Fk.focus();
          else if (qk.current) {
            var Bk;
            null === (Bk = kk.querySelector(`[data-store-item="${qk.current}"]`)) || void 0 === Bk || Bk.focus(), qk.current = null
          }
        } else qk.current = null
      }), [vk, tk]), (0, Rk.useEffect)((() => {
        Uk(null)
      }), [Vk.query]), (0, Rk.useEffect)((() => {
        if (!ck) return;
        const kk = setTimeout((() => {
          Gk(null)
        }), 8e3);
        return () => {
          clearTimeout(kk)
        }
      }), [ck]);
      const jk = wk.superRankInfo,
        lk = wk.isLoggedIn() || (0, hk.guestsMayBuy)(),
        nk = wk.getOwnedCosmeticPacks(),
        Ik = (0, fa.o)(Vk.query),
        kF = (0, fa.i)({
          mode: Ik,
          loggedIn: dk ? lk : null,
          superRankInfo: jk,
          now: Date.now(),
          ownedPacks: nk,
          packs: ba.v,
          recipient: Vk.recipient
        });
      (0, Rk.useEffect)((() => {
        if (!lk || !tk) return;
        const kk = (0, Pk.B)(),
          Fk = kk && (0, fa.k)(kk, ba.v);
        kk && Fk && ((0, Qk.reportAnalyticsClick)({
          id: "store.login_resume",
          value: kk.item
        }), (0, Pk.m)(Fk))
      }), [lk, tk]);
      const FF = (0, fa.r)({
        superRankDaysLeft: kF.superRankDaysLeft,
        openedThisSession: UX || tk,
        seenNewItems: (0, Pk.i)()
      });
      if ((0, Rk.useEffect)((() => {
          (0, Pk.y)(FF)
        }), [FF]), !tk || !(0, hk.purchasesAllowed)()) return null;
      const BF = ek > Jk && Jk <= 700,
        RF = !BF && ek <= 420,
        tF = "gift" === Ik ? cX(Vk.recipient) : null,
        aF = null !== Hk;

      function XF(kk) {
        (0, sa.d)(kk, "gift" === Ik ? Vk.query.trim() : null)
      }

      function bF(kk, Fk) {
        (0, Qk.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Fk?"gift":"self"}:${kk}`
        }), Fk && (Vk.recordGift(Fk.name, kk), dF(Fk))
      }

      function dF(kk) {
        ! function(kk) {
          try {
            KF.i.setItem(ma, (0, fa.B)(va(), kk))
          } catch {}
        }({
          name: kk.name,
          cosmetics: kk.cosmetics
        }), Wk(gX), Gk((Fk => {
          var Bk;
          return {
            name: kk.name,
            seq: (null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.seq) && void 0 !== Bk ? Bk : 0) + 1
          }
        }))
      }
      async function sF(kk) {
        var Fk, Bk;
        if (Ck.current) return;
        if (!lk) return void XF(kk);
        Uk(null), Dk(null);
        const Rk = "gift" === Ik ? {
          name: cX(Vk.recipient),
          cosmetics: Vk.recipientCosmetics
        } : null;
        if (Rk && !Rk.name) return void xk();
        const tk = "superRank" === kk ? Tk.n.id : (0, Tk.e)(kk);
        Ck.current = !0;
        const ak = await (0, ya.e)(tk, null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.name) && void 0 !== Fk ? Fk : null);
        if (Ck.current = !1, !ak) return;
        Mk(kk);
        const Xk = await Va.b.purchase(tk, null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk.name) && void 0 !== Bk ? Bk : null);
        Mk(null), Xk ? Uk(Xk) : (bF(kk, Rk), Rk || (await (0, Ja.flushClientAnalyticsEvents)(), (0, da.refreshWithoutConfirmation)("superRank" === kk ? "/super-rank-welcome" : `/pack-welcome/${kk}`)))
      }
      const VF = ak()("Store", {
        StoreGift: "gift" === Ik,
        StorePortrait: BF,
        StoreCompact: RF
      });
      if ("pack" === fk.kind) {
        const kk = fk.pack,
          Fk = kF.packs.find((Fk => Fk.pack === kk));
        return (0, sk.jsx)("div", {
          ref: zk,
          className: "CosmeticShopContainer",
          children: (0, sk.jsx)(ea.h, {
            pack: kk,
            onBack: () => {
              Wk(gX)
            },
            onPurchased: Fk => {
              bF(kk, Fk ? {
                name: Fk,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Ik && tF && Fk && (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsx)(Qa, {
                state: Fk.state,
                item: kk,
                price: (JF = kk, "superRank" === JF ? Tk.n.price : (0, Tk.h)(JF)),
                busy: aF,
                onAct: () => {
                  sF(kk)
                },
                onNeedRecipient: () => {
                  Wk(gX), xk()
                },
                onLogin: () => {
                  XF(kk)
                },
                highlight: rk === kk
              }), gk && (0, sk.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: bk(gk)
              })]
            }),
            ownedPacks: nk,
            startAsGift: "gift" === Ik,
            initialGiftRecipient: "gift" === Ik ? null !== tF && void 0 !== tF ? tF : Vk.query.trim() : "",
            highlightCta: rk === kk
          }, kk)
        })
      }
      var JF;
      return "superRank" === fk.kind ? (0, sk.jsx)("div", {
        ref: zk,
        className: ak()(VF, "StoreDetailView"),
        children: (0, sk.jsx)(oX, {
          state: kF.superRank.state,
          mode: Ik,
          giftName: tF,
          busy: aF,
          highlight: "superRank" === rk,
          purchaseError: gk,
          onBack: () => {
            Wk(gX)
          },
          onChooseRecipient: () => {
            Wk(gX), xk()
          },
          onAct: () => {
            sF("superRank")
          },
          onLogin: () => {
            XF("superRank")
          }
        })
      }) : (0, sk.jsxs)("div", {
        ref: zk,
        className: VF,
        children: [(0, sk.jsx)("div", {
          className: "StoreTopRow",
          children: (0, sk.jsx)(ca, {
            selfName: dk ? wk.getPlayerName() : "",
            giftRecipient: Vk,
            suggestionsVersion: null !== (Fk = null === ck || void 0 === ck ? void 0 : ck.seq) && void 0 !== Fk ? Fk : 0,
            pulseSignal: Sk,
            disabled: aF || !dk
          })
        }), ck && (0, sk.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Gk(null)
          },
          children: [(0, sk.jsx)(Aa.d, {
            showSignal: ck.seq
          }), fa.e, " ", bk("store:giftSent", {
            name: ck.name
          })]
        }, ck.seq), !ck && gk && (0, sk.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: bk(gk)
        }), (0, sk.jsx)(YX, {
          layout: kF,
          mountAtOnce: null !== qk.current,
          bundleGift: "gift" === Ik ? {
            recipientName: tF,
            lookingUp: "pending" === Vk.recipient.status,
            busy: aF,
            onNeedRecipient: xk,
            onSent: kk => {
              (0, Qk.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), dF({
                name: kk,
                cosmetics: Vk.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, fa.u)(jk),
          busy: aF,
          highlightItem: rk,
          onOpen: function(kk) {
            (0, Qk.reportAnalyticsClick)({
              id: "store.item_open",
              value: kk
            }), Wk((0, Pk.h)(kk))
          },
          onAct: sF,
          onNeedRecipient: xk,
          onLogin: XF
        }), "gift" !== Ik && (0, sk.jsx)(uX, {})]
      })
    }));
    var TX = Bk(2540),
      rX = Bk(8519),
      DX = Bk(2605),
      zX = Bk(2424),
      PX = Bk(2488),
      hX = Bk(2496),
      qX = Bk(2505),
      CX = Bk(2597),
      ZX = Bk(2572),
      pX = Bk(2261),
      KX = Bk(2290),
      xX = Bk(2276),
      jX = Bk(1936),
      lX = Bk(2507),
      nX = Bk(2299);

    function IX(kk) {
      let {
        show: Fk
      } = kk;
      return Fk ? (0, sk.jsx)(QX, {}) : null
    }

    function QX() {
      const {
        t: kk
      } = (0, Xk.x)(), {
        followsLeader: Fk
      } = (0, zX.g)(), {
        loading: Bk,
        friends: tk,
        requests: wk,
        invites: dk
      } = (0, Ck.i)(), {
        userContext: Vk
      } = (0, Ak.e)(), [Jk, ek] = (0, Rk.useState)(nX.m);
      (0, Rk.useEffect)((() => {
        (0, nX.c)()
      }), []);
      const yk = wk.map((kk => kk.name)),
        {
          state: mk,
          recentRequesters: Wk
        } = (0, ZX.n)(),
        vk = new Map([...("loaded" === mk.status ? mk.recentPlayers : []).map((kk => [kk.preview.name, kk])), ...Wk.map((kk => [kk.name, kk]))]),
        ik = (0, Rk.useRef)(null),
        [Ok, Ek] = (0, Rk.useState)(""),
        [Sk, Nk] = (0, Rk.useState)("Enter"),
        [Hk, uk] = (0, Rk.useState)(null);

      function Mk() {
        Ok && (Nk("Loading"), (0, xX.k)(Ok, "social_menu").then((kk => {
          if (ik.current) switch (kk.kind) {
            case "sent":
              Nk("Success");
              break;
            case "becameFriends":
              Nk("BecameFriends");
              break;
            case "failed":
              uk(kk.message), Nk("Error")
          }
        })))
      }
      return (0, Rk.useEffect)((() => {
        if ("Enter" === Sk || "Loading" === Sk) return;
        const kk = setTimeout((() => {
          ik.current.value = "", Ek(""), Nk("Enter")
        }), "Success" === Sk ? 1e3 : 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Sk]), (0, sk.jsx)("div", {
        className: "SocialMenu",
        children: (0, sk.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, sk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, sk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, sk.jsx)(qX.b, {
                label: kk("socialBar:addFriend")
              }), (0, sk.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, sk.jsxs)("div", {
                  className: ak()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Sk}`]: !0
                  }),
                  children: ["Loading" === Sk && (0, sk.jsx)(Lk.b, {}), "Success" === Sk && (0, sk.jsx)(bk.d, {
                    name: "check"
                  }), "BecameFriends" === Sk && (0, sk.jsx)(sk.Fragment, {
                    children: kk("socialBar:nowFriends", {
                      playerName: Ok
                    })
                  }), "Error" === Sk && Hk && (0, sk.jsx)(sk.Fragment, {
                    children: kk(Hk.translationKey, Hk.params)
                  })]
                }), (0, sk.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, sk.jsx)(Yk.e, {
                    className: "PlayerSearchInput",
                    placeholderText: kk("socialBar:enterPlayerName"),
                    domRef: ik,
                    onValueChange: kk => {
                      Ek((0, ck.q)(kk)), ik.current.value = (0, ck.q)(kk)
                    },
                    onEnter: () => {
                      Ok && (0, Qk.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Mk()
                    }
                  }), (0, sk.jsxs)(fk.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Mk()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, sk.jsx)(bk.d, {
                      name: "user-plus"
                    }), " ", kk("socialBar:sendRequest")]
                  })]
                })]
              }), (0, sk.jsx)(lX.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), dk.length > 0 && (0, sk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, sk.jsx)(qX.b, {
                label: kk("socialBar:invites"),
                meta: dk.length
              }), dk.map((Fk => (0, sk.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, sk.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, sk.jsx)(pX.e, {
                    invite: Fk
                  })
                }), (0, sk.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, sk.jsx)(pX.h, {
                    invite: Fk
                  })
                }), (0, sk.jsx)(fk.o, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, KX.d)(Fk)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Fk.destination.kind}`
                  },
                  children: kk("general:join")
                }), (0, sk.jsx)(lk.d, {
                  tooltipInner: (0, sk.jsx)(sk.Fragment, {
                    children: kk("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, sk.jsx)(fk.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Jk || void 0 === Jk ? void 0 : Jk.kind) && Jk.inviteId === Fk.id,
                    onClick: () => {
                      Ck.b.declineInvite(Fk.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Fk.destination.kind}`
                    },
                    children: (0, sk.jsx)(bk.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, Fk.id)))]
            }), (0, sk.jsxs)("div", {
              className: ak()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Bk && 0 === wk.length
              }),
              children: [(0, sk.jsx)(qX.b, {
                label: (0, sk.jsxs)(sk.Fragment, {
                  children: [(0, sk.jsx)(bk.d, {
                    name: jX.d
                  }), " ", kk("socialBar:requests")]
                }),
                meta: (0, sk.jsxs)(sk.Fragment, {
                  children: [wk.length, wk.length === nk.t && (0, sk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), Bk && (0, sk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, sk.jsx)(Lk.b, {})
              }), !Bk && 0 === wk.length && (0, sk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriendRequests")
              }), !Bk && wk.length > 0 && (0, sk.jsx)("div", {
                className: "PlayerRows",
                children: (0, sk.jsx)(At.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [wk],
                  children: wk.map(((Fk, Bk) => {
                    const Rk = vk.get(Fk.name);
                    return (0, sk.jsxs)(hX.h, {
                      playerSocialPreview: Fk,
                      zIndex: wk.length - Bk,
                      padDefaultFocus: (0, nX.k)(Jk, Fk.name, Bk),
                      status: Rk && (0, sk.jsx)(CX.b, {
                        gameNameWithVariation: Rk.gameNameWithVariation,
                        isPrivateLobby: Rk.isPrivateLobby
                      }),
                      children: [(0, sk.jsx)(lk.d, {
                        tooltipInner: (0, sk.jsx)(sk.Fragment, {
                          children: kk("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, sk.jsx)(fk.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            ek((0, nX.g)(yk, Bk)), (0, xX.i)(Fk.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, sk.jsx)(bk.d, {
                            name: "check"
                          })
                        })
                      }), (0, sk.jsx)(lk.d, {
                        tooltipInner: (0, sk.jsx)(sk.Fragment, {
                          children: kk("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, sk.jsx)(fk.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            ek((0, nX.g)(yk, Bk)), (0, xX.i)(Fk.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, sk.jsx)(bk.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Fk.name}_${Fk.isError}`)
                  }))
                })
              })]
            }), (0, sk.jsx)(CX.g, {})]
          }), (0, sk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, sk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, sk.jsx)(qX.b, {
                label: kk("socialBar:party")
              }), (0, sk.jsx)(PX.b, {})]
            }), (0, sk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, sk.jsx)(qX.b, {
                label: (0, sk.jsxs)(sk.Fragment, {
                  children: [(0, sk.jsx)(bk.d, {
                    name: jX.b
                  }), " ", kk("socialBar:friends")]
                }),
                meta: (0, sk.jsxs)(sk.Fragment, {
                  children: [tk.length, tk.length >= (0, nk.e)(Vk.getPlayerRanks()) && (0, sk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), Bk && (0, sk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, sk.jsx)(Lk.b, {})
              }), !Bk && 0 === tk.length && (0, sk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriends")
              }), !Bk && tk.length > 0 && (0, sk.jsx)("div", {
                className: "PlayerRows",
                children: (0, sk.jsx)(At.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [tk],
                  children: tk.map(((kk, Bk) => (0, sk.jsx)(hX.h, {
                    playerSocialPreview: kk,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: kk => {
                      Ck.b.removeFriendFromState(kk)
                    },
                    zIndex: tk.length - Bk,
                    children: (0, sk.jsx)(hX.d, {
                      friend: kk,
                      followsLeader: Fk,
                      analyticsSurface: "social_menu"
                    })
                  }, `${kk.name}_${kk.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var kb = Bk(2408);
    const Fb = kk => {
        let {
          action: Fk,
          padAction: Bk
        } = kk;
        const {
          isTouchScreen: Rk
        } = (0, Ek.h)(["isTouchScreen"]), tk = (0, XR.o)();
        return Rk && !tk ? null : (0, sk.jsx)(QB.c, {
          className: "EverythingMenuTabKey",
          noaAction: Fk,
          padHidesKey: !0,
          padMenuShortcut: Bk
        })
      },
      Bb = (0, Rk.memo)((function() {
        const {
          t: kk
        } = (0, Xk.x)(), {
          gameState: Fk,
          openEverythingMenuName: Bk,
          initSdkSelectorFinished: tk,
          crosshairGameView: bk
        } = (0, Ek.h)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: wk
        } = (0, Ak.e)(), dk = (0, hk.purchasesAllowed)(), Vk = (0, Pk.D)(), Jk = (kk, Fk) => (0, sk.jsx)(Fb, {
          action: kk,
          padAction: Fk
        }), [ek, yk] = (0, Rk.useState)(null), Wk = (0, Rk.useRef)(null), vk = {
          ..."inGame" === Fk ? {} : (0, fk.R)({
            focusOnClick: !1
          }),
          ...fR.g
        }, ik = null !== Bk, Yk = Bk !== sF.p.COSMETIC_SHOP && !bk;
        async function Lk() {
          await async function() {
            if (!ek) return;
            await ek(), yk(null)
          }(), Ek.c.set({
            openEverythingMenuName: null
          })
        }
        const Ok = (0, Rk.useMemo)((() => "inGame" === Fk ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            (0, rX.b)()
          }
        } : (0, Hk.c)() ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            XF.j.discordActivity().then((kk => {
              kk.exit("User exited the game")
            }))
          }
        } : null), [Fk, kk]);
        const Sk = (0, sk.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            Lk()
          },
          children: (0, sk.jsx)(fk.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, sk.jsx)(mR.d, {
          showing: ik,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Bk === sF.p.SHOP,
          doGameplayStartStopOnShow: "inGame" === Fk,
          children: (0, sk.jsx)(vR.c, {
            className: "EverythingMenuContainer",
            show: ik && !bk,
            children: (0, sk.jsx)(WR.e, {
              close: () => {
                Lk()
              },
              togglePointerLock: !1,
              children: (0, sk.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Ra.k)(Bk) && (0, sk.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, sk.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Ok && (0, sk.jsx)(fk.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Ok.onClick()
                      },
                      children: Ok.text
                    }), ik && dk && (0, sk.jsx)("div", {
                      ...vk,
                      className: "EverythingMenuWallet",
                      title: kk("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Pk.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, sk.jsx)(TX.d, {})
                    })]
                  }), (0, sk.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, sk.jsxs)("div", {
                      ...vk,
                      "data-pad-tab": !0,
                      "data-pad-selected": Bk === sF.p.SETTINGS ? "true" : void 0,
                      className: ak()("EverythingMenuTab", {
                        EverythingMenuTabActive: Bk === sF.p.SETTINGS
                      }),
                      onClick: () => {
                        Ek.c.set({
                          openEverythingMenuName: sF.p.SETTINGS
                        })
                      },
                      children: [kk("general:settings"), Jk("OpenSettings", "pause")]
                    }), (0, sk.jsxs)("div", {
                      ...vk,
                      "data-pad-tab": !0,
                      "data-pad-selected": Bk === sF.p.CUSTOMISATION ? "true" : void 0,
                      className: ak()("EverythingMenuTab", {
                        EverythingMenuTabActive: Bk === sF.p.CUSTOMISATION
                      }),
                      onClick: () => {
                        Ek.c.set({
                          openEverythingMenuName: sF.p.CUSTOMISATION
                        })
                      },
                      children: [kk("general:player"), Jk("OpenCharacterCustomization")]
                    }), mk.featureFlags.useSocialFeatures && (0, sk.jsxs)("div", {
                      ...vk,
                      "data-pad-tab": !0,
                      "data-pad-selected": Bk === sF.p.SOCIAL ? "true" : void 0,
                      className: ak()("EverythingMenuTab", {
                        EverythingMenuTabActive: Bk === sF.p.SOCIAL
                      }),
                      ...(0, Qk.e)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Bk === sF.p.SOCIAL),
                      onClick: () => {
                        Ek.c.set({
                          openEverythingMenuName: sF.p.SOCIAL
                        })
                      },
                      children: [kk("socialBar:social"), (0, sk.jsx)(kb.d, {})]
                    }), dk && (0, sk.jsxs)("div", {
                      ...vk,
                      "data-pad-tab": !0,
                      "data-pad-selected": Bk === sF.p.COSMETIC_SHOP ? "true" : void 0,
                      className: ak()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Bk === sF.p.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        Ek.c.set({
                          openEverythingMenuName: sF.p.COSMETIC_SHOP
                        })
                      },
                      children: [(0, sk.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: kk("store:title")
                      }), "new" === Vk && (0, sk.jsx)(dX, {}), "dot" === Vk && (0, sk.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Fk && (0, sk.jsxs)("div", {
                      ...vk,
                      "data-pad-tab": !0,
                      "data-pad-selected": Bk === sF.p.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: ak()("EverythingMenuTab", {
                        EverythingMenuTabActive: Bk === sF.p.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        Ek.c.set({
                          openEverythingMenuName: sF.p.LOBBY_LEADERBOARD
                        })
                      },
                      children: [kk("general:lobby"), Jk("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, sk.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Sk
                  })]
                }), (0, Ra.k)(Bk) && Sk, (0, sk.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Fk ? "0.85" : "1"
                  },
                  children: [(0, sk.jsx)(VR, {
                    show: Bk === sF.p.SETTINGS,
                    setBeforeResumeCallback: yk
                  }), (0, sk.jsx)(yR, {
                    show: Bk === sF.p.CUSTOMISATION
                  }), (0, sk.jsx)(Rk.Suspense, {
                    fallback: null,
                    children: (0, sk.jsx)(xt, {
                      show: Bk === sF.p.SHOP
                    })
                  }), (0, sk.jsx)(Xa, {
                    show: Bk === sF.p.LOBBY_LEADERBOARD
                  }), (0, sk.jsx)(GX, {
                    show: Bk === sF.p.COSMETIC_SHOP
                  }), (0, sk.jsx)(IX, {
                    show: Bk === sF.p.SOCIAL
                  })]
                }), !(0, mk.isMobileApp)() && (0, iR.g)(wk.getPlayerRanks()) && (0, sk.jsx)(vR.c, {
                  ref: Wk,
                  className: "EverythingMenuBannerDiv",
                  show: Yk,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, sk.jsx)(DX.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Wk
                    },
                    showing: ik && Yk,
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
  9006: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(291),
      tk = Bk(9015);

    function ak(kk, Fk, Bk) {
      const ak = Object.entries(Fk).sort(((kk, Fk) => Fk[1] - kk[1])),
        Xk = (0, Rk.xb)(kk);
      Xk.push(kk ? "\n\n" : "\n");
      for (const [tk, ek] of ak) {
        var bk, wk, dk;
        const kk = null !== (bk = null === Bk || void 0 === Bk || null === (wk = Bk[tk]) || void 0 === wk ? void 0 : wk.icon) && void 0 !== bk ? bk : `${tk} Enchantment`;
        Xk.push({
          icon: kk,
          style: {
            fontSize: "1.5rem"
          }
        }), Xk.push({
          str: `${tk} ${null!==(dk=(0,Rk.V)(ek))&&void 0!==dk?dk:ek}\n`
        })
      }
      Xk.push({
        str: "\n"
      });
      for (const [Rk, ek] of ak) {
        var sk, Vk, Jk, Ak;
        const kk = null !== (sk = null === Bk || void 0 === Bk || null === (Vk = Bk[Rk]) || void 0 === Vk ? void 0 : Vk.icon) && void 0 !== sk ? sk : `${Rk} Enchantment`,
          Fk = null !== (Jk = null === Bk || void 0 === Bk || null === (Ak = Bk[Rk]) || void 0 === Ak ? void 0 : Ak.description) && void 0 !== Jk ? Jk : (0, tk.l)(Rk);
        Xk.push({
          icon: kk,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Xk.push({
          str: Fk,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Xk.push({
          str: "\n"
        })
      }
      return Xk
    }
  },
  9018: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      f: () => Wk,
      g: () => fk,
      i: () => wk,
      l: () => mk,
      n: () => sk,
      r: () => Jk,
      u: () => yk,
      y: () => Vk
    });
    var Rk = Bk(279),
      tk = Bk(606),
      ak = Bk(291),
      Xk = Bk(3985),
      bk = Bk(9006);

    function wk(kk, Fk) {
      var Bk;
      let {
        player: Rk,
        chestOrCreative: tk
      } = kk;
      var ak;
      return Fk < Rk.length ? null !== (ak = Rk[Fk]) && void 0 !== ak ? ak : null : null !== (Bk = tk[Fk - Rk.length]) && void 0 !== Bk ? Bk : null
    }

    function dk(kk) {
      var Fk;
      return null !== (Fk = kk.amount) && void 0 !== Fk ? Fk : 0
    }

    function sk(kk) {
      return 0 === kk.button || void 0 === kk.button
    }

    function Vk(kk) {
      return !!kk.shiftKey
    }

    function Jk(kk) {
      return "touches" in kk || "touch" === kk.pointerType || "pen" === kk.pointerType
    }
    const Ak = new Set,
      ek = 50;

    function yk(kk, Fk) {
      var Bk;
      const Rk = null === (Bk = kk[Fk]) || void 0 === Bk ? void 0 : Bk.displayName;
      return (0, tk.F)(Rk) ? "string" !== typeof Fk ? "" : (!Ak.has(Fk) && Ak.size < ek && (Ak.add(Fk), console.warn(`No item called "${Fk}", so its hover shows the name as given`)), Fk) : Rk
    }

    function fk(kk, Fk, Bk) {
      var wk, dk, sk, Vk, Jk, Ak, ek, fk, mk, Wk, vk, ik, Yk, Lk;
      const Ok = kk.attributes,
        Ek = null !== (wk = null === (dk = Fk[kk.name]) || void 0 === dk ? void 0 : dk.rootName) && void 0 !== wk ? wk : kk.name,
        Sk = null !== (sk = null !== (Vk = Ok.customDisplayName) && void 0 !== Vk ? Vk : null === (Jk = Fk[kk.name]) || void 0 === Jk ? void 0 : Jk.displayName) && void 0 !== sk ? sk : yk(Fk, Ek);
      let Nk = Sk;
      const Hk = null === (Ak = Ok.customAttributes) || void 0 === Ak ? void 0 : Ak.enchantmentTier;
      Hk && (Nk = (0, ak.xb)(Sk, {
        colour: ak.tb[Hk]
      }));
      const uk = null !== (ek = null !== (fk = null !== (mk = function(kk, Fk) {
        var Bk;
        if (void 0 === kk || null !== (Bk = Fk.customAttributes) && void 0 !== Bk && Bk.author) return kk;
        const tk = (0, Rk.bc)(kk);
        return tk.every((kk => "string" === typeof kk)) ? kk : tk.map((kk => "string" === typeof kk ? kk : {
          icon: kk.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Ok.customDescription, Ok)) && void 0 !== mk ? mk : null === (Wk = Fk[kk.name]) || void 0 === Wk ? void 0 : Wk.description) && void 0 !== fk ? fk : null === (vk = Fk[Ek]) || void 0 === vk ? void 0 : vk.description) && void 0 !== ek ? ek : "";
      let Mk = uk;
      if (null !== (ik = Ok.customAttributes) && void 0 !== ik && ik.enchantments) Mk = (0, bk.b)(uk, Ok.customAttributes.enchantments, Ok.customAttributes.enchantmentData);
      else if (Bk[Ek]) Mk = (0, ak.xb)(uk), Mk.push({
        str: "\n"
      }), Mk.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Yk = Ok.customAttributes) && void 0 !== Yk && Yk.mobSettings) {
        var gk, Uk;
        const kk = Ok.customAttributes.mobSettings;
        var ck, Gk;
        if (Mk = [], (0, tk.F)(Ok.customAttributes.health) || (Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Mk.push({
            str: " "
          }), Mk.push({
            str: Ok.customAttributes.health.toString()
          }), (0, tk.F)(kk.maxHealth) || (Mk.push({
            str: "/"
          }), Mk.push({
            str: kk.maxHealth.toString()
          }))), !(0, tk.F)(kk.attackDamage) && kk.attackDamage > 0 && (Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Mk.push({
            str: " "
          }), Mk.push({
            str: kk.attackDamage.toString()
          })), !(0, tk.F)(kk.secondaryAttackDamage) && kk.secondaryAttackDamage > 0 && (Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Mk.push({
            str: " "
          }), Mk.push({
            str: kk.secondaryAttackDamage.toString()
          })), (0, tk.F)(kk.baseRunningSpeed) || (Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Mk.push({
            str: " "
          }), Mk.push({
            str: kk.baseRunningSpeed.toFixed(2)
          })), "Saddled" === kk.metaInfo) Mk.push({
          str: "\n"
        }), Mk.push({
          str: {
            translationKey: "general:has"
          }
        }), Mk.push({
          str: " "
        }), Mk.push({
          icon: null !== (ck = null === (Gk = kk.tameInfo) || void 0 === Gk ? void 0 : Gk.saddleItemName) && void 0 !== ck ? ck : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Mk.push({
            str: "\n"
          }), Mk.push({
            str: "\n"
          }), kk.petInfo && null !== (gk = kk.tameInfo) && void 0 !== gk && gk.supportsFriendship) {
          const Fk = Xk.d.getIconsFromFriendshipPoints(kk.petInfo.friendshipPoints);
          for (const kk of Fk) Mk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          Mk.push({
            str: "\n"
          });
          const Bk = Xk.d.getMobHungerLevel(kk.petInfo.lastFedAt);
          for (const kk of Xk.d.hungerLevelIcons[Bk]) Mk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          Mk.push({
            str: " "
          }), Mk.push({
            str: Xk.d.hungerLevelTranslations[Bk],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (kk.tameInfo && null !== (Uk = kk.tameInfo) && void 0 !== Uk && Uk.supportsFriendship) {
          var Tk, rk;
          let Fk = null !== (Tk = kk.tameInfo.likedFoods) && void 0 !== Tk ? Tk : [];
          Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xk.d.feedTextColours[Xk.d.MobFoodType.Superliked]
            }
          }), Mk.push({
            str: " "
          }), null !== (rk = kk.petInfo) && void 0 !== rk && rk.superlikedFoodKnown ? (Mk.push({
            icon: kk.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Fk = Fk.filter((Fk => Fk !== kk.petInfo.superlikedFood))) : Mk.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xk.d.feedTextColours[Xk.d.MobFoodType.Liked]
            }
          }), Mk.push({
            str: " "
          });
          for (const kk of Fk) Mk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xk.d.feedTextColours[Xk.d.MobFoodType.Neutral]
            }
          }), Mk.push({
            str: " "
          });
          for (const Bk of null !== (Dk = kk.tameInfo.neutralFoods) && void 0 !== Dk ? Dk : []) {
            var Dk;
            Mk.push({
              icon: Bk,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Mk.push({
            str: "\n"
          }), Mk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xk.d.feedTextColours[Xk.d.MobFoodType.Disliked]
            }
          }), Mk.push({
            str: " "
          });
          for (const Bk of null !== (zk = kk.tameInfo.dislikedFoods) && void 0 !== zk ? zk : []) {
            var zk;
            Mk.push({
              icon: Bk,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Mk.length > 0 ? (Mk.shift(), Mk.unshift(...(0, ak.xb)(uk))) : Mk = (0, ak.xb)(uk)
      }
      return {
        name: Nk,
        desc: Mk,
        fontStyle: null !== (Lk = Ok.customAttributes) && void 0 !== Lk && Lk.author ? "italic" : "normal"
      }
    }

    function mk(kk, Fk, Bk, Rk) {
      const tk = wk(kk, Bk),
        ak = wk(kk, Rk);
      if (!tk) return !1;
      const Xk = Fk[tk.name].armourReduction,
        bk = Fk[ak.name].armourReduction;
      if (bk === Xk) {
        var dk, sk, Vk, Jk;
        const kk = null !== (dk = null === (sk = tk.attributes.customAttributes) || void 0 === sk ? void 0 : sk.enchantmentTier) && void 0 !== dk ? dk : "Tier 0",
          Fk = null !== (Vk = null === (Jk = ak.attributes.customAttributes) || void 0 === Jk ? void 0 : Jk.enchantmentTier) && void 0 !== Vk ? Vk : "Tier 0";
        return parseInt(kk.replace("Tier ", "")) >= parseInt(Fk.replace("Tier ", ""))
      }
      return Xk > bk
    }

    function Wk(kk) {
      let Fk;
      if ("number" === typeof kk) {
        const Bk = document.querySelector(`[data-inven-idx="${kk}"]`);
        if (!Bk) return null;
        Fk = Bk.getBoundingClientRect()
      } else Fk = kk.getBoundingClientRect();
      return {
        x: Fk.left + Fk.width / 2,
        y: Fk.top + Fk.height / 2
      }
    }
  },
  8900: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      h: () => yk
    });
    var Rk = Bk(1389),
      tk = Bk(61),
      ak = Bk(1259),
      Xk = Bk(4268),
      bk = Bk(2265),
      wk = Bk(1149),
      dk = Bk(98),
      sk = Bk(1876),
      Vk = Bk(1288),
      Jk = Bk(1069);

    function Ak(kk) {
      let {
        show: Fk,
        onClose: Bk
      } = kk;
      const {
        requestedGameNameWithVariation: Rk,
        lobbyName: tk,
        shownLobbyName: ak
      } = (0, sk.h)("connectedGame"), wk = (0, bk.b)(Rk, tk, !1);
      return dk.featureFlags.canUseInviteLinks && (0, Jk.jsx)(Xk.e, {
        show: Fk,
        close: Bk,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Jk.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Jk.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Jk.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Jk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === wk ? (0, Jk.jsx)(Vk.b, {}) : wk, (0, Jk.jsx)("br", {}), "Lobby Name: ", ak, (0, Jk.jsx)("br", {}), (0, Jk.jsx)("br", {}), (0, Jk.jsx)("br", {}), (0, Jk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Jk.jsx)(ek, {})]
        })
      })
    }

    function ek() {
      var kk;
      const {
        t: Fk
      } = (0, wk.x)(), Bk = null !== (kk = yk(dk.featureFlags.canUseInviteLinks)) && void 0 !== kk ? kk : "Loading Link...", [ak, Xk] = (0, tk.useState)(0), [bk, sk] = (0, tk.useReducer)((kk => kk + 1), 0);
      return (0, tk.useEffect)((() => {
        const kk = setTimeout((() => {
          sk()
        }), 1100);
        return () => {
          clearTimeout(kk)
        }
      }), [ak]), dk.featureFlags.canUseInviteLinks && (0, Jk.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Jk.jsx)("div", {
          className: "InviteLinkInner",
          children: Bk
        }), (0, Jk.jsx)(Rk.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Bk).catch((kk => {
              console.error("Failed to copy invite link:", kk)
            })), Xk(Date.now())
          },
          disabled: Date.now() - ak < 1e3,
          children: Date.now() - ak < 1e3 ? Fk("general:copied") : Fk("general:copy")
        })]
      })
    }

    function yk(kk) {
      const [Fk, Bk] = (0, tk.useState)(null);
      return (0, tk.useEffect)((() => {
        if (!kk) return;
        let Fk = !0;
        return (0, ak.z)().then((kk => {
          Fk && Bk(kk)
        })).catch((kk => {
          console.error("Failed to get invite link:", kk)
        })), () => {
          Fk = !1
        }
      }), [kk]), Fk
    }
  },
  8996: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(1876),
      bk = Bk(1069);

    function wk(kk) {
      const Fk = Math.floor(kk / 3600),
        Bk = Math.floor(kk % 3600 / 60),
        Rk = Math.floor(kk % 60),
        tk = `${Bk.toString().padStart(2,"0")}:${Rk.toString().padStart(2,"0")}`;
      return Fk > 0 ? `${Fk}:${tk}` : tk
    }
    const dk = (0, Rk.memo)((function(kk) {
      let {
        className: Fk
      } = kk;
      const {
        recording: Bk,
        seconds: Rk
      } = (0, Xk.h)("replayRecorder");
      return Bk ? (0, bk.jsxs)("div", {
        className: ak()("RecordingIndicator", Fk),
        children: [(0, bk.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, bk.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, bk.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: wk(Rk)
        })]
      }) : null
    }))
  },
  4599: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => fk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4380),
      Xk = Bk(1149),
      bk = Bk(1028),
      wk = Bk(1389),
      dk = Bk(1441),
      sk = Bk(1300),
      Vk = Bk(2384),
      Jk = Bk(1069);
    const Ak = {
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

    function ek(kk) {
      let {
        platform: Fk
      } = kk;
      const Bk = "youtube" === Fk;
      return (0, Jk.jsxs)("span", {
        className: tk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Bk
        }),
        children: [Bk && (0, Jk.jsx)(Vk.e, {
          variant: "white"
        }), !Bk && (0, Jk.jsx)(bk.d, {
          name: Ak[Fk].icon,
          kit: "brands"
        })]
      })
    }

    function yk(kk) {
      let {
        platform: Fk,
        link: Bk,
        editable: Rk,
        userContext: tk,
        onLinksUpdated: Vk
      } = kk;
      const {
        t: yk
      } = (0, Xk.x)(), fk = Ak[Fk];
      if (!Bk && !Rk) return null;

      function mk() {
        var kk;
        if (!tk || !Vk) return;
        sk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: fk.name
            }
          },
          prefixText: ak.A[Fk],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === Bk || void 0 === Bk ? void 0 : Bk.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Bk ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await dk.b.setSocialLink(tk, Fk, kk.value) : await dk.b.clearSocialLink(tk, Fk), Vk()
          } catch (Bk) {
            console.error("Failed to update social link", Bk), sk.NotificationProvider.showAlertPopup({
              title: Bk.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Bk) {
        const kk = `@${Bk.handle}`;
        return (0, Jk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: fk.color
          },
          href: Bk.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Jk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Jk.jsx)(ek, {
              platform: Fk
            }), (0, Jk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Jk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Rk && (0, Jk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, wk.R)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), mk()
            },
            children: (0, Jk.jsx)(bk.d, {
              name: "pen-to-square"
            })
          }), !Rk && (0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Jk.jsx)(bk.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Jk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: fk.color
        },
        ...(0, wk.R)(),
        onClick: () => {
          mk()
        },
        children: [(0, Jk.jsx)(ek, {
          platform: Fk
        }), (0, Jk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: fk.name
          }), (0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: yk("homePage:profileSocialLinkAdd")
          })]
        }), (0, Jk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Jk.jsx)(bk.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function fk(kk) {
      let {
        socialLinks: Fk,
        editable: Bk = !1,
        userContext: Rk,
        onLinksUpdated: tk
      } = kk;
      if (!Bk && 0 === Fk.length) return null;
      const Xk = new Map(Fk.map((kk => [kk.platform, kk]))),
        bk = Bk ? ak.w : Fk.map((kk => kk.platform));
      return (0, Jk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Jk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bk.map((kk => (0, Jk.jsx)(yk, {
            platform: kk,
            link: Xk.get(kk),
            editable: Bk,
            userContext: Rk,
            onLinksUpdated: tk
          }, kk)))
        })
      })
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  9051: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(3374);

    function ak() {
      const [kk, Fk] = (0, Rk.useState)(!1);
      return (0, Rk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, tk.d)().then((() => {
          kk && Fk(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  6267: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(42);

    function ak(kk, Fk) {
      var Bk;
      const [ak, Xk] = (0, Rk.useState)(null !== (Bk = tk.i.getItem(kk)) && void 0 !== Bk ? Bk : Fk);
      return [ak, Fk => {
        tk.i.setItem(kk, Fk), Xk(Fk)
      }]
    }
  },
  8974: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk,
      e: () => Vk
    });
    Bk(8979);
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(8949);

    function bk(kk, Fk) {
      return Math.max(1, Math.round(kk * Fk))
    }

    function wk(kk, Fk, Bk) {
      const Rk = 2 * Bk >= Fk - 1;
      return {
        x: kk,
        y: kk,
        size: Fk,
        border: Math.min(Bk, Math.floor(Fk / 2)),
        filled: Rk
      }
    }
    var dk = Bk(1069);
    const sk = 1.4;

    function Vk(kk, Fk) {
      return kk && Fk ? `scale(${sk})` : "scale(1)"
    }

    function Jk(kk) {
      return "classic" === kk.settings.style ? (0, dk.jsx)(yk, {
        ...kk
      }) : (0, dk.jsx)(Lk, {
        ...kk
      })
    }
    const Ak = .125;

    function ek(kk, Fk) {
      const Bk = {};
      if (kk.color !== Xk.f.color && (Bk.color = (0, Xk.j)(kk.color)), kk.opacity !== Xk.f.opacity && (Bk.opacity = kk.opacity / 100), kk.outline !== Xk.f.outline || kk.outlineColor !== Xk.f.outlineColor) {
        const Fk = kk.outline,
          Rk = (0, Xk.j)(kk.outlineColor);
        Bk.textShadow = Fk > 0 ? `-${Fk}px 0 ${Rk}, 0 ${Fk}px ${Rk}, ${Fk}px 0 ${Rk}, 0 -${Fk}px ${Rk}` : "none"
      }
      if (kk.size !== Xk.f.size) {
        const Rk = kk.size / 100;
        Bk.fontSize = Fk ? `calc(max(1.3rem, 18px) * ${Rk})` : `calc(1.3rem * ${Rk})`, Bk.marginTop = `-${Ak}em`, Bk.transformOrigin = `50% calc(50% + ${Ak}em)`
      }
      return Bk
    }

    function yk(kk) {
      let {
        settings: Fk,
        touch: Bk,
        inPreview: Rk,
        inEditor: ak,
        pressed: Xk = !1,
        pressRef: bk
      } = kk;
      return (0, dk.jsx)("div", {
        className: tk()("Crosshair", {
          Touch: Bk,
          CrosshairInPreview: Rk,
          CrosshairInEditor: ak || Rk
        }),
        ref: bk,
        style: {
          transform: Vk(Xk, Fk.growOnClick),
          ...ek(Fk, Bk)
        },
        children: "+"
      })
    }

    function fk(kk, Fk) {
      return kk / Fk + "px"
    }

    function mk(kk, Fk, Bk, Rk) {
      return {
        ...ik(kk, Fk, Bk),
        width: fk(kk.w, Bk),
        height: fk(kk.h, Bk),
        background: Rk
      }
    }

    function Wk(kk, Fk, Bk) {
      return {
        left: fk(kk.x, Fk),
        top: fk(kk.y, Fk),
        width: fk(kk.size, Fk),
        height: fk(kk.size, Fk),
        borderWidth: fk(kk.border, Fk),
        borderColor: Bk,
        background: kk.filled ? Bk : void 0
      }
    }
    const vk = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function ik(kk, Fk, Bk) {
      const [Rk, tk] = kk.arm ? vk[kk.arm] : [0, 0], ak = Math.round(Fk * Bk);
      return {
        left: fk(kk.x + Rk * ak, Bk),
        top: fk(kk.y + tk * ak, Bk)
      }
    }

    function Yk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function Lk(kk) {
      let {
        settings: Fk,
        inPreview: Bk,
        inEditor: Rk,
        pressed: Vk = !1,
        spread: Jk,
        spreadRef: Ak
      } = kk;
      const ek = (0, ak.useRef)(null),
        {
          box: yk,
          dpr: fk
        } = function(kk) {
          const [Fk, Bk] = (0, ak.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ak.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Rk = () => {
              const kk = Fk.getBoundingClientRect(),
                Rk = window.devicePixelRatio || 1;
              Bk((Fk => Fk.dpr === Rk && Fk.box.left === kk.left && Fk.box.top === kk.top && Fk.box.width === kk.width && Fk.box.height === kk.height ? Fk : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Rk
              }))
            };
            Rk();
            const tk = new ResizeObserver(Rk);
            return tk.observe(Fk), window.addEventListener("resize", Rk), window.addEventListener("scroll", Rk, !0), () => {
              tk.disconnect(), window.removeEventListener("resize", Rk), window.removeEventListener("scroll", Rk, !0)
            }
          }), [kk]), Fk
        }(ek),
        vk = (0, ak.useRef)(fk);
      vk.current = fk;
      const Lk = function(kk, Fk) {
          const Bk = bk(kk.lineThickness, Fk),
            Rk = bk(kk.lineLength, Fk),
            tk = Math.round(kk.gap * Fk),
            ak = bk(kk.dotSize, Fk),
            Xk = kk.outline > 0 ? bk(kk.outline, Fk) : 0,
            dk = bk(kk.circleThickness, Fk),
            sk = kk.circle ? Math.round(kk.circleRadius * Fk * 2 + dk) : 0,
            Vk = function(kk, Fk, Bk, Rk) {
              return kk.lines ? Fk : kk.dot ? Bk : kk.circle && Rk % 2 === 0 ? 2 : 1
            }(kk, Bk, ak, sk),
            Jk = [];
          if (kk.lines && (Jk.push({
              x: Vk + tk,
              y: 0,
              w: Rk,
              h: Bk,
              arm: "right"
            }), Jk.push({
              x: -tk - Rk,
              y: 0,
              w: Rk,
              h: Bk,
              arm: "left"
            }), Jk.push({
              x: 0,
              y: Vk + tk,
              w: Bk,
              h: Rk,
              arm: "down"
            }), kk.tStyle || Jk.push({
              x: 0,
              y: -tk - Rk,
              w: Bk,
              h: Rk,
              arm: "up"
            }), 0 === tk && Jk.push({
              x: 0,
              y: 0,
              w: Bk,
              h: Bk
            })), kk.dot) {
            const kk = Math.floor((Vk - ak) / 2);
            Jk.push({
              x: kk,
              y: kk,
              w: ak,
              h: ak
            })
          }
          const Ak = Jk.map((kk => ({
            ...kk,
            x: kk.x - Xk,
            y: kk.y - Xk,
            w: kk.w + 2 * Xk,
            h: kk.h + 2 * Xk
          })));
          let ek = null,
            yk = null;
          if (kk.circle) {
            const kk = sk + ((sk - Vk) % 2 === 0 ? 0 : 1),
              Fk = (Vk - kk) / 2;
            ek = wk(Fk, kk, dk), Xk > 0 && (yk = wk(Fk - Xk, kk + 2 * Xk, dk + 2 * Xk))
          }
          return {
            cell: Vk,
            fills: Jk,
            outlines: Xk > 0 ? Ak : [],
            ring: ek,
            ringOutline: yk
          }
        }(Vk && Fk.growOnClick ? function(kk, Fk) {
          return {
            ...kk,
            outline: kk.outline * Fk,
            lineLength: kk.lineLength * Fk,
            lineThickness: kk.lineThickness * Fk,
            gap: kk.gap * Fk,
            dotSize: kk.dotSize * Fk,
            circleRadius: kk.circleRadius * Fk,
            circleThickness: kk.circleThickness * Fk
          }
        }(Fk, sk) : Fk, fk),
        Ok = function(kk, Fk, Bk) {
          const Rk = Math.round((kk.left + kk.width / 2) * Bk - Fk / 2),
            tk = Math.round((kk.top + kk.height / 2) * Bk - Fk / 2);
          return {
            x: Rk / Bk - kk.left,
            y: tk / Bk - kk.top
          }
        }(yk, Lk.cell, fk),
        Ek = (0, Xk.j)(Fk.color),
        Sk = (0, Xk.j)(Fk.outlineColor),
        Nk = (0, ak.useRef)(0);
      (0, ak.useLayoutEffect)((() => {
        if (Ak) return Ak.current = kk => {
          var Fk;
          Nk.current = kk, null === (Fk = ek.current) || void 0 === Fk || Fk.querySelectorAll("[data-arm]").forEach((Fk => {
            Object.assign(Fk.style, ik(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(Fk), kk, vk.current))
          }))
        }, () => {
          Ak.current = null
        }
      }), [Ak]);
      const Hk = null !== Jk && void 0 !== Jk ? Jk : Nk.current;
      return (0, dk.jsx)("div", {
        ref: ek,
        className: tk()("CrosshairShapes", {
          CrosshairInPreview: Bk,
          CrosshairInEditor: Rk || Bk,
          CrosshairSpreads: void 0 !== Ak
        }),
        children: (0, dk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Ok.x,
            top: Ok.y,
            opacity: Fk.opacity / 100
          },
          children: (0, dk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Lk.ringOutline && (0, dk.jsx)("div", {
              className: "CrosshairRing",
              style: Wk(Lk.ringOutline, fk, Sk)
            }), Lk.outlines.map(((kk, Fk) => (0, dk.jsx)("div", {
              className: "CrosshairPart",
              ...Yk(kk),
              style: mk(kk, Hk, fk, Sk)
            }, `o${Fk}`))), Lk.ring && (0, dk.jsx)("div", {
              className: "CrosshairRing",
              style: Wk(Lk.ring, fk, Ek)
            }), Lk.fills.map(((kk, Fk) => (0, dk.jsx)("div", {
              className: "CrosshairPart",
              ...Yk(kk),
              style: mk(kk, Hk, fk, Ek)
            }, `f${Fk}`)))]
          })
        })
      })
    }
  },
  8987: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk,
      e: () => fk,
      g: () => yk
    });
    var Rk = Bk(8949);
    const tk = "XH1-",
      ak = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      bk = ["color", "outlineColor"],
      wk = 1 + 3 * bk.length + Xk.length + 1,
      dk = Math.ceil(8 * wk / Math.log2(62)),
      sk = tk.length + dk;

    function Vk(kk) {
      let Fk = 90;
      for (const Bk of kk) Fk = 31 * Fk + Bk & 255;
      return Fk
    }
    const Jk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Ak = BigInt(Jk.length);

    function ek(kk, Fk) {
      let Bk = 0n;
      for (const tk of kk) {
        const kk = Jk.indexOf(tk);
        if (kk < 0) return null;
        Bk = Bk * Ak + BigInt(kk)
      }
      if (Bk >> BigInt(8 * Fk) !== 0n) return null;
      const Rk = [];
      for (let tk = 0; tk < Fk; tk++) Rk.unshift(Number(0xffn & Bk)), Bk >>= 8n;
      return Rk
    }

    function yk(kk) {
      let Fk = "shapes" === kk.style ? 1 : 0;
      ak.forEach(((Bk, Rk) => {
        kk[Bk] && (Fk |= 1 << Rk + 1)
      }));
      const Bk = [Fk];
      for (const tk of bk) {
        const Fk = (0, Rk.i)(tk, kk[tk]);
        Bk.push(Fk >> 16 & 255, Fk >> 8 & 255, 255 & Fk)
      }
      for (const tk of Xk) {
        const {
          min: Fk,
          step: ak
        } = Rk.d[tk];
        Bk.push(Math.round(((0, Rk.i)(tk, kk[tk]) - Fk) / ak))
      }
      return Bk.push(Vk(Bk)), tk + function(kk, Fk) {
        let Bk = 0n;
        for (const tk of kk) Bk = Bk << 8n | BigInt(tk);
        let Rk = "";
        for (let tk = 0; tk < Fk; tk++) Rk = Jk[Number(Bk % Ak)] + Rk, Bk /= Ak;
        return Rk
      }(Bk, dk)
    }

    function fk(kk) {
      for (const Fk of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${dk}})`, "gi"))) {
        const kk = mk(ek(Fk[1], wk));
        if (kk) return kk
      }
      return null
    }

    function mk(kk) {
      if (!kk || kk.length !== wk || Vk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const Fk = kk[0],
        Bk = {
          ...Rk.f,
          style: 1 & Fk ? "shapes" : "classic"
        };
      ak.forEach(((kk, Rk) => {
        Bk[kk] = 0 !== (Fk & 1 << Rk + 1)
      }));
      let tk = 1;
      for (const Rk of bk) Bk[Rk] = kk[tk] << 16 | kk[tk + 1] << 8 | kk[tk + 2], tk += 3;
      for (const ak of Xk) {
        const {
          min: Fk,
          step: Xk
        } = Rk.d[ak];
        Bk[ak] = (0, Rk.i)(ak, Fk + kk[tk] * Xk), tk++
      }
      return Bk
    }
  },
  8949: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      f: () => tk,
      i: () => ak,
      j: () => dk,
      l: () => wk,
      o: () => sk,
      r: () => bk,
      t: () => Xk
    });
    const Rk = {
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
      tk = Object.freeze({
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

    function ak(kk, Fk) {
      var Bk;
      const {
        min: ak,
        max: Xk,
        step: bk
      } = Rk[kk];
      if (!Number.isFinite(Fk)) return tk[kk];
      const wk = (null !== (Bk = String(bk).split(".")[1]) && void 0 !== Bk ? Bk : "").length,
        dk = Number((Math.round(Fk / bk) * bk).toFixed(wk));
      return Math.min(Xk, Math.max(ak, dk))
    }

    function Xk(kk, Fk, Bk) {
      const Rk = "number" === typeof Bk ? ak(Fk, Bk) : Bk;
      return {
        ...kk,
        [Fk]: Rk
      }
    }

    function bk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(tk).every((Rk => Bk.includes(Rk) || kk[Rk] === Fk[Rk]))
    }

    function wk(kk) {
      return bk(kk, tk)
    }

    function dk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function sk(kk) {
      const Fk = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return Fk ? parseInt(Fk[1], 16) : null
    }
  },
  8990: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Vk,
      g: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(42),
      ak = Bk(8987),
      Xk = Bk(8949);
    const bk = "crosshairCode";
    let wk = null;
    const dk = new Set;

    function sk() {
      if (null === wk) {
        var kk;
        const Fk = tk.i.getItem(bk);
        wk = null !== (kk = "string" === typeof Fk ? (0, ak.e)(Fk) : null) && void 0 !== kk ? kk : Xk.f
      }
      return wk
    }

    function Vk(kk) {
      wk = kk, (0, Xk.l)(kk) ? tk.i.removeItem(bk) : tk.i.setItem(bk, (0, ak.g)(kk));
      for (const Fk of dk) Fk()
    }

    function Jk() {
      const [kk, Fk] = (0, Rk.useState)(sk);
      return (0, Rk.useEffect)((() => {
        const kk = () => {
          Fk(sk())
        };
        return kk(), Bk = kk, dk.add(Bk), () => {
          dk.delete(Bk)
        };
        var Bk
      }), []), kk
    }
  },
  8567: (kk, Fk, Bk) => {
    function Rk(kk) {
      return {
        x: (kk.left + kk.right) / 2,
        y: (kk.top + kk.bottom) / 2
      }
    }

    function tk(kk) {
      return 0 === kk.length ? null : kk.reduce(((kk, Fk) => ({
        left: Math.min(kk.left, Fk.left),
        top: Math.min(kk.top, Fk.top),
        right: Math.max(kk.right, Fk.right),
        bottom: Math.max(kk.bottom, Fk.bottom)
      })))
    }

    function ak(kk, Fk) {
      const Bk = Math.max(0, (Fk - (kk.right - kk.left)) / 2),
        Rk = Math.max(0, (Fk - (kk.bottom - kk.top)) / 2);
      return {
        left: kk.left - Bk,
        top: kk.top - Rk,
        right: kk.right + Bk,
        bottom: kk.bottom + Rk
      }
    }

    function Xk(kk, Fk) {
      return Fk.x >= kk.left && Fk.x <= kk.right && Fk.y >= kk.top && Fk.y <= kk.bottom
    }

    function bk(kk, Fk, Bk) {
      let tk = null,
        bk = 1 / 0;
      for (const {
          id: Rk,
          box: ak
        }
        of Fk) {
        const Fk = (ak.right - ak.left) * (ak.bottom - ak.top);
        Xk(ak, kk) && Fk < bk && (bk = Fk, tk = Rk)
      }
      if (null !== tk) return tk;
      let wk = 1 / 0;
      for (const {
          id: dk,
          box: sk
        }
        of Fk) {
        if (!Xk(ak(sk, Bk), kk)) continue;
        const Fk = Rk(sk),
          bk = Math.hypot(kk.x - Fk.x, kk.y - Fk.y);
        bk < wk && (wk = bk, tk = dk)
      }
      return tk
    }

    function wk(kk, Fk, Bk) {
      return {
        left: Bk.left,
        top: Bk.top,
        right: kk - Bk.right,
        bottom: Fk - Bk.bottom
      }
    }

    function dk(kk, Fk, Bk, Rk) {
      const tk = (kk, Fk, Bk) => Math.max(Math.min(Fk, 0), Math.min(Math.max(Bk, 0), kk));
      return {
        x: tk(Fk, Rk.left - kk.left, Rk.right - kk.right),
        y: tk(Bk, Rk.top - kk.top, Rk.bottom - kk.bottom)
      }
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      const ak = kk.dx * Rk + Fk,
        Xk = kk.dy * tk + Bk,
        bk = kk => Math.max(-1, Math.min(1, kk));
      return {
        dx: bk(ak / Rk),
        dy: bk(Xk / tk)
      }
    }

    function Vk(kk, Fk, Bk, Rk) {
      return Fk <= 0 || Bk <= 0 ? 1 : Math.max(.05, Math.min(1, kk / Fk, Rk / Bk))
    }

    function Jk(kk, Fk, Bk) {
      return Math.min(kk.right, Fk.right) - Math.max(kk.left, Fk.left) > Bk && Math.min(kk.bottom, Fk.bottom) - Math.max(kk.top, Fk.top) > Bk
    }

    function Ak(kk, Fk) {
      const Bk = (kk, Fk, Bk, Rk) => Fk - kk > Rk - Bk ? Bk - kk > Fk - Rk ? Rk - Fk : Bk - kk : kk < Bk ? Bk - kk : Fk > Rk ? Rk - Fk : 0;
      return {
        x: Bk(kk.left, kk.right, Fk.left, Fk.right),
        y: Bk(kk.top, kk.bottom, Fk.top, Fk.bottom)
      }
    }

    function ek(kk, Fk) {
      let {
        avoid: Bk = null,
        bounds: Rk = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, tk = 0, ak = 1 / 0;
      return kk.forEach(((kk, Xk) => {
        const bk = Fk.filter((Fk => Jk(kk, Fk, 0))).length,
          wk = null !== Rk && (kk.left < Rk.left || kk.top < Rk.top || kk.right > Rk.right || kk.bottom > Rk.bottom),
          dk = bk + (Bk && Jk(kk, Bk, 0) ? 1e3 : 0) + (wk ? 1e6 : 0);
        dk < ak && (tk = Xk, ak = dk)
      })), tk
    }
    Bk.d(Fk, {
      B: () => wk,
      D: () => Ak,
      E: () => tk,
      e: () => Rk,
      h: () => Xk,
      k: () => Jk,
      o: () => dk,
      q: () => ak,
      s: () => ek,
      u: () => sk,
      v: () => bk,
      x: () => Vk
    })
  },
  8941: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      g: () => tk
    });
    var Rk = Bk(22);

    function tk(kk, Fk) {
      return kk && !Fk
    }

    function ak() {
      return tk(Rk.c.get("isTouchScreen"), Rk.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8894: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = new Set(["chunkBorders"])
  },
  8891: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ALL_DEV_TOOLS: () => Xk,
      coreDevTools: () => dk,
      devTools: () => wk
    });
    var Rk = Bk(624),
      tk = Bk(1245),
      ak = Bk(8894);
    const Xk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bk() {
      const {
        noaDevTools: kk
      } = await Bk.e(230).then((() => Bk(40492)));
      return kk
    }
    const wk = new class {
        constructor() {
          this.loadHost = bk, this.tools = Xk
        }
        setHost(kk) {
          this.tools = null === kk ? Xk : kk.tools, this.loadHost = null === kk ? bk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, Fk) {
          const Bk = await this.loadHost();
          await Bk.downloadScene(kk, Fk)
        }
        async setAmbientLightIntensity(kk) {
          const Fk = await this.loadHost();
          await Fk.setAmbientLightIntensity(kk)
        }
      },
      dk = {
        tools: ak.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Rk.p && wk.setHost(dk), (0, tk.o)((() => {
      wk.setHost(dk)
    }))
  },
  9045: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      f: () => tk,
      i: () => sk
    });
    var Rk = Bk(1512);

    function tk(kk) {
      var Fk;
      return {
        ...Xk.store,
        yaw: Xk.store.yaw + (null !== (Fk = Rk.d[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ak = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xk = {
        player: ak,
        store: {
          ...ak,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class wk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class dk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, Fk) {
        var Bk;
        null === (Bk = this.opened) || void 0 === Bk || Bk.setCosmetic(kk, Fk)
      }
      playEmote(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.playEmote(kk)
      }
      setOrbit(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var Fk;
        await this.ready, await (null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const sk = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(kk) {
        this.host = kk
      }
      setDefaultHost(kk) {
        this.makeDefault = kk
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(kk) {
        return new wk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new wk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new wk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new dk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  9039: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.b,
      f: () => Rk.f,
      h: () => Rk.i
    });
    var Rk = Bk(9045);
    class tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ak {
      constructor() {
        this.mobScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(153)]).then((() => Bk(40499))))), this.characterScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(152)]).then((() => Bk(40612)))))
      }
      openMob(kk) {
        return this.mobScene.run((Fk => Fk.openMobPreview(kk)))
      }
      openPet(kk) {
        return this.mobScene.run((Fk => Fk.openPetPreview(kk)))
      }
      openMobLineup(kk) {
        return this.mobScene.run((Fk => Fk.openMobLineupPreview(kk)))
      }
      openCharacter(kk, Fk) {
        return this.characterScene.run((Bk => Bk.openCharacterPreview(kk, Fk)))
      }
    }
    Rk.i.setDefaultHost((() => new ak))
  },
  6361: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => ak
    });
    var Rk = Bk(42);
    const tk = "shaderPack";
    async function ak() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Rk.f.getItem(tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  8910: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return kk && !Fk
    }
    Bk.d(Fk, {
      d: () => Rk
    })
  },
  8939: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(1047);

    function tk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ak = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && tk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = tk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Rk.ly)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const kk of this.resizers) kk()
          }
        }), 1e3)
      }
      heldSizer(kk) {
        let Fk = !1;
        return () => {
          if (Fk && this.isHeld()) return null;
          const Bk = kk();
          return Fk ||= null !== Bk, Bk
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  8565: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(22),
      tk = Bk(1267),
      ak = Bk(98);
    const Xk = {
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

    function bk() {
      return (0, ak.isMobile)() && "function" === typeof navigator.vibrate
    }
    const wk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, Fk) {
        var Bk;
        if (!this.deps.enabled()) return;
        const Rk = Xk[kk],
          tk = null !== Fk && void 0 !== Fk ? Fk : Rk.pattern;
        if (null === tk) return void console.warn("No vibration pattern for", kk);
        const ak = this.deps.now();
        ak - this.lastAnyAt < 40 && Rk.priority < this.playingPriority || ak - (null !== (Bk = this.lastAt.get(kk)) && void 0 !== Bk ? Bk : -1 / 0) < Rk.minGapMs || ak < this.playingUntil && Rk.priority < this.playingPriority || (this.lastAt.set(kk, ak), this.lastAnyAt = ak, this.playingUntil = ak + tk.reduce(((kk, Fk) => kk + Fk), 0), this.playingPriority = Rk.priority, this.deps.vibrate(tk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => bk() && Rk.c.get("isTouchScreen") && Rk.c.get("clientEscMenuOptions").vibration && !(0, tk.i)()
    })
  },
  8903: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => Jk
    });
    var Rk = Bk(22),
      tk = Bk(1625),
      ak = Bk(42),
      Xk = Bk(1300),
      bk = Bk(3460),
      wk = Bk(1418),
      dk = Bk(1344);
    const sk = 2592e5,
      Vk = "notificationOptInLastPromptedAt";
    async function Jk() {
      var kk;
      const Fk = await Ak();
      if (null === Fk) return;
      const Bk = null !== (kk = ak.i.getItem(Vk)) && void 0 !== kk ? kk : 0;
      if (Date.now() - Bk < sk) return;
      if ((0, dk.h)()) return;
      const Rk = await Xk.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: tk.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Rk && (ak.i.setItem(Vk, Date.now()), (0, wk.reportAnalyticsClick)({
        id: !0 === Rk ? "push.allow" : "push.deny",
        value: tk.d.supports("notifications") ? "app" : "browser"
      }), !0 === Rk && Fk().catch((kk => {
        console.error("Failed to ask for push notifications:", kk)
      })))
    }
    async function Ak() {
      return await tk.d.ready, tk.d.supports("notifications") ? Rk.c.get("mobilePushNotificationsCanAsk") ? async () => {
        tk.d.request("notifications.requestPermission", {}).then((kk => {
          let {
            canAsk: Fk
          } = kk;
          Rk.c.set({
            mobilePushNotificationsCanAsk: Fk
          })
        }), (kk => {
          console.error("The app couldn't ask for push notifications:", kk)
        }))
      }: null: await bk.d.canAsk() ? () => bk.d.requestPermission() : null
    }
  },
  8918: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(22);
    const tk = 24,
      ak = "farNametags",
      Xk = 1e5;

    function bk() {
      var kk;
      return null === (kk = Rk.c.get("showDistantNametags")) || void 0 === kk || kk
    }

    function wk() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(ak),
          Fk = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(Fk) && Fk >= 0 ? Math.min(Fk, Xk) : null
      }()) && void 0 !== kk ? kk : bk() ? 0 : tk
    }
  },
  9029: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      f: () => Xk
    });
    const Rk = [{
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

    function tk(kk) {
      let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Bk = Math.abs(kk);
          return Bk >= 10 ? `${Fk}${Bk.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Bk.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const tk = Fk < 0n ? -Fk : Fk,
        ak = Fk < 0n ? "-" : "",
        Xk = tk.toString();
      if (Xk.length <= Bk) return `${ak}${Xk}`;
      const bk = 3 * Math.floor((Xk.length - 1) / 3);
      if (bk < 3) return `${ak}${Xk}`;
      if (bk > 3 * Rk.length) {
        const kk = Xk[0],
          Fk = Xk.slice(1, 3).replace(/0+$/, "");
        return `${ak}${Fk?`${kk}.${Fk}`:kk}e${Xk.length-1}`
      }
      const {
        threshold: wk,
        suffix: dk
      } = Rk[Rk.length - bk / 3], sk = tk / wk, Vk = Number(1000n * (tk % wk) / wk), Jk = Number(sk) + Vk / 1e3;
      let Ak;
      return Ak = Jk >= 100 ? Math.floor(Jk).toString() : Jk >= 10 ? Jk.toFixed(1).replace(/\.0$/, "") : Jk.toFixed(2).replace(/\.?0+$/, ""), `${ak}${Ak}${dk}`
    }
    const ak = Rk.map((kk => {
      let {
        threshold: Fk,
        suffix: Bk
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Bk
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function Xk(kk) {
      const Fk = Math.abs(kk),
        Bk = kk < 0 ? "-" : "";
      for (const {
          threshold: Rk,
          suffix: tk
        }
        of ak)
        if (Fk >= Rk) {
          const kk = Fk / Rk;
          if (kk >= 1e3) return `${Bk}${Fk.toExponential(2).replace("e+","e")}`;
          let ak;
          return ak = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Bk}${ak}${tk}`
        } return `${Bk}${Fk}`
    }
  },
  9015: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk,
      e: () => Jk,
      i: () => Vk,
      l: () => Xk,
      n: () => dk,
      r: () => wk
    });
    var Rk = Bk(291);
    const tk = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      ak = {
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

    function Xk(kk) {
      var Fk;
      return null !== (Fk = ak[kk]) && void 0 !== Fk ? Fk : {
        translationKey: ""
      }
    }
    const bk = {
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

    function wk(kk) {
      return tk.includes(kk)
    }

    function dk(kk) {
      var Fk;
      return !0 === (null === kk || void 0 === kk || null === (Fk = kk.customAttributes) || void 0 === Fk ? void 0 : Fk.cannotEnchant)
    }

    function sk(kk, Fk) {
      const {
        max: Bk
      } = bk[kk].at(-1);
      return Fk <= Bk
    }

    function Vk(kk) {
      const Fk = Math.sin(kk / 80),
        Bk = kk => {
          if (kk <= 0) return 0;
          if (kk > 1) return 1;
          let Fk = 0;
          const Bk = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Rk = 0; Rk < Bk.length; Rk++) {
            Fk += (Rk % 2 === 0 ? 1 : -1) * Bk[Rk] * Math.pow(kk, 2 + Rk) / (2 + Rk)
          }
          return 72 * Fk
        },
        Rk = .3 - .78 * Fk,
        tk = .5 - .78 * Fk,
        ak = .6 - .7 * Fk,
        Xk = .8 - .6 * Fk;
      let bk = Bk(Rk),
        wk = Bk(tk) - bk,
        dk = Bk(ak) - wk - bk,
        sk = Bk(Xk) - dk - wk - bk;
      Rk < .041 && (wk /= 1 - bk, dk /= 1 - bk, sk /= 1 - bk, bk = 0), tk < .041 && (bk /= 1 - wk, dk /= 1 - wk, sk /= 1 - wk, wk = 0), ak < .041 && (bk /= 1 - dk, wk /= 1 - dk, sk /= 1 - dk, dk = 0), Xk < .041 && (bk /= 1 - sk, wk /= 1 - sk, dk /= 1 - sk, sk = 0);
      return {
        commonProb: bk,
        uncommonProb: wk,
        rareProb: dk,
        epicProb: sk,
        legendaryProb: 1 - (sk + dk + wk + bk)
      }
    }

    function Jk(kk, Fk) {
      const {
        min: Bk,
        max: tk
      } = bk[kk][Fk], ak = Rk.b.sampleUniformIntDistribution(Bk, tk, "includeMax");
      return {
        ...Vk(ak),
        level: ak
      }
    }
  },
  8445: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return !kk.hidden && (Fk || !kk.isRewardedAd)
    }

    function tk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function ak(kk, Fk) {
      var Bk;
      if ("dropdown" === (null === (Bk = kk.userInput) || void 0 === Bk ? void 0 : Bk.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const Bk of kk.userInput.dropdownOptions)
          if (tk(Bk) === Fk) return "object" === typeof Bk ? Bk.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", Fk)
      }
      return kk.cost
    }

    function Xk(kk, Fk, Bk) {
      var Rk;
      const tk = null !== (Rk = Bk.excludedPlayers) && void 0 !== Rk ? Rk : [Fk];
      return kk.filter((kk => !tk.includes(kk)))
    }
    Bk.d(Fk, {
      c: () => ak,
      g: () => tk,
      i: () => Xk,
      k: () => Rk
    })
  },
  8979: () => {},
  8955: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8957: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8962: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8970: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);