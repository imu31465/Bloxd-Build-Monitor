export const id = 99;
export const ids = [99, 194];
export const modules = {
  34038: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      EverythingMenu: () => Rl
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1179),
      lk = Ik(1066),
      ak = Ik(1997),
      qk = Ik(1406),
      Lk = Ik(1103),
      tk = Ik(1096);

    function Zk(kk) {
      let {
        items: Fk,
        link: Ik,
        onClick: Xk,
        selectedItemId: Tk,
        className: Zk,
        padStartsOnTab: jk = !0
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = (0, Lk.h)(), Hk = [];
      for (const ik of Fk) {
        var Jk;
        const kk = Hk[Hk.length - 1];
        var xk;
        if (kk && kk.title === (null !== (Jk = ik.section) && void 0 !== Jk ? Jk : null)) kk.items.push(ik);
        else Hk.push({
          title: null !== (xk = ik.section) && void 0 !== xk ? xk : null,
          items: [ik]
        })
      }
      return (0, tk.jsxs)("div", {
        className: ik()("MenuSideBarBody", Zk),
        "data-pad-tabs": "2",
        children: [Hk.map(((kk, Fk) => {
          var Ik;
          return (0, tk.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [kk.title && (0, tk.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: ek(kk.title)
            }), kk.items.map((kk => {
              var Fk;
              const Ik = !!kk.iconElement || !!kk.faIcon;
              return (0, tk.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Tk === kk.id ? "true" : void 0,
                "data-pad-default-focus": jk && Tk === kk.id || void 0,
                className: ik()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Tk === kk.id
                }),
                onClick: () => {
                  Xk(kk.id)
                },
                children: [Ik && (0, tk.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Fk = kk.iconElement) && void 0 !== Fk ? Fk : (0, tk.jsx)(lk.e, {
                    name: kk.faIcon
                  })
                }), (!wk || !Ik) && (0, tk.jsx)("div", {
                  children: ek(kk.title)
                }), kk.redDot && (0, tk.jsx)(ak.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, kk.id)
            }))]
          }, null !== (Ik = kk.title) && void 0 !== Ik ? Ik : Fk)
        })), Ik && (0, tk.jsxs)("div", {
          ...(0, qk.Y)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: Ik.onClick,
          children: [(0, tk.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, tk.jsx)(lk.e, {
              name: Ik.faIcon
            })
          }), (0, tk.jsx)("div", {
            children: ek(Ik.title)
          }), (0, tk.jsx)(lk.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var jk = Ik(2936),
      ek = Ik(1118),
      wk = Ik(2349),
      Hk = Ik(3042),
      Jk = Ik(95),
      xk = Ik(1875),
      Pk = Ik(2179),
      Kk = Ik(2187),
      Qk = Ik(1617),
      sk = Ik(1318),
      Vk = Ik(4983),
      zk = Ik(25),
      Sk = Ik(34044);

    function vk(kk) {
      let {
        setApplySettingsCallback: Fk
      } = kk;
      const {
        clientEscMenuOptions: Ik
      } = (0, zk.j)(["clientEscMenuOptions"]), [Tk, ik] = (0, Xk.useState)(!1), [yk, lk] = (0, Xk.useState)(!1), [ak, Lk] = (0, Xk.useState)(6400), [Zk, jk] = (0, Xk.useState)(3600), [ek, wk] = (0, Xk.useState)(!1), [Hk, Jk] = (0, Xk.useState)(!1);

      function xk(kk) {
        const Fk = "screenshot" === kk ? lk : ik;
        Fk(!0);
        const Ik = ek ? "normals" : Hk ? "depth" : null;
        Sk.devTools.downloadScene(kk, {
          width: ak,
          height: Zk,
          colouring: Ik
        }).catch((kk => {
          console.error("Couldn't download the scene", kk)
        })).finally((() => {
          Fk(!1)
        }))
      }
      return (0, tk.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, tk.jsx)(Vk.e, {
          label: "Disable Ambient Occlusion",
          checked: Ik.disableAmbientOcclusion,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              disableAmbientOcclusion: kk
            }), Fk((() => Vk.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Sk.devTools.supports("ambientLight") && (0, tk.jsx)(Vk.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Ik.ambientLightIntensity,
          onChange: kk => {
            Sk.devTools.setAmbientLightIntensity(kk).then((() => {
              zk.d.setClientEscMenuOptions({
                ambientLightIntensity: kk
              })
            })).catch((kk => {
              console.error("Couldn't set the ambient light", kk)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Sk.devTools.supports("weaponRaycasts") && (0, tk.jsx)(Vk.e, {
          label: "Show Weapon Raycasts",
          checked: Ik.showWeaponRaycasts,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              showWeaponRaycasts: kk
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Sk.devTools.supports("sceneDownload") && (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, tk.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, tk.jsx)(Vk.e, {
              label: "Apply normal-based coloring",
              checked: ek,
              onClick: kk => {
                wk(kk), kk && Jk(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, tk.jsx)(Vk.e, {
              label: "Apply depth-based coloring",
              checked: Hk,
              onClick: kk => {
                Jk(kk), kk && wk(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, tk.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, tk.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, tk.jsx)(Qk.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, Fk) => {
                  const Ik = parseInt(kk) || 6400;
                  Lk(Ik)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: ak.toString()
              }), (0, tk.jsx)("span", {
                children: "X"
              }), (0, tk.jsx)(Qk.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, Fk) => {
                  const Ik = parseInt(kk) || 3600;
                  jk(Ik)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Zk.toString()
              })]
            }), (0, tk.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, tk.jsxs)(qk.d, {
                onClick: () => {
                  xk("screenshot")
                },
                disabled: yk,
                children: [yk && (0, tk.jsx)(sk.c, {}), "Download Screenshot"]
              }), (0, tk.jsxs)(qk.d, {
                onClick: () => {
                  xk("glb")
                },
                disabled: Tk,
                children: [Tk && (0, tk.jsx)(sk.c, {}), "Download GLB"]
              })]
            })]
          }), (0, tk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Ek = Ik(129),
      Ok = Ik(1120),
      nk = Ik(34051),
      Gk = Ik(2941),
      pk = Ik(1475),
      uk = Ik(1253),
      bk = Ik(1223),
      Rk = Ik(3018),
      Uk = Ik(1963),
      Ck = Ik(1453),
      Nk = Ik(337),
      ck = Ik(2190),
      Wk = Ik(2207),
      fk = Ik(2624),
      Bk = Ik(1585),
      dk = Ik(2991),
      Yk = Ik(2969),
      Ak = Ik(3021),
      gk = Ik(198);

    function mk(kk) {
      const {
        t: Fk,
        selectedLanguage: Ik
      } = (0, yk.y)(), {
        userContext: Tk
      } = (0, ek.d)(), {
        superRankInfo: ik
      } = Tk, lk = kk && ((0, Nk.Fc)(ik) || Tk.ranksMayChange) && (0, Wk.purchasesAllowed)(), {
        accountId: ak,
        data: qk
      } = (0, fk.j)(dk.e, lk);
      if ((0, Xk.useEffect)((() => {
          if (lk) return dk.e.watchAccount(), Bk.c.addRefetchListener("billing", (kk => {
            "reconnected" === kk ? dk.e.refreshAfterReconnect() : dk.e.refresh()
          }))
        }), [lk]), !lk || !(0, Nk.Fc)(ik) || null === qk || ak !== Tk.whamm) return null;
      const Lk = function(kk, Fk, Ik) {
        const Xk = Ak.e[(0, Ak.b)(Ak.e, Fk)],
          Tk = void 0 === Xk ? void 0 : (0, gk.d)(kk.entitlements, Xk.entitlementId);
        return void 0 === Tk || null === Tk.expiresAt || (0, Yk.f)(Tk) <= Ik ? null : Tk.willRenew && null === Tk.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Tk.expiresAt, Ik)
        } : {
          renews: !1,
          at: (0, Yk.f)(Tk)
        }
      }(qk, ik.tier, Date.now());
      if (null === Lk) return null;
      const tk = Lk.renews ? "store:renewsOn" : "store:endsOn";
      return Fk(tk, {
        date: new Date(Lk.at).toLocaleDateString((0, yk.l)(Ik.code, tk), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var hk = Ik(1333),
      rk = Ik(1207),
      Dk = Ik(4884),
      Mk = Ik(1432),
      kF = Ik(3608),
      FF = Ik(2170);

    function IF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Ik
      } = (0, yk.y)(), {
        data: Xk,
        failed: Tk
      } = (0, fk.j)(kF.c, Fk);
      return 0 === (null === Xk || void 0 === Xk ? void 0 : Xk.length) || null === Xk && !Tk ? null : (0, tk.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, tk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Ik("paymentHistory:title")
        }), null === Xk && Tk && (0, tk.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Ik("paymentHistory:loadFailed")
        }), null !== Xk && (0, tk.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Xk.map((kk => (0, tk.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, tk.jsx)(FF.d, {
              entry: kk
            }), (0, tk.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, tk.jsx)("div", {
                children: (0, FF.g)(Ik, kk)
              }), (0, tk.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(kk.at).toLocaleDateString(), "number" === typeof kk.orderId && ` \xb7 ${Ik("paymentHistory:order",{orderId:kk.orderId})}`]
              })]
            })]
          }, (0, kF.b)(kk))))
        })]
      })
    }
    var XF = Ik(1840),
      TF = Ik(1234),
      iF = Ik(1324),
      yF = Ik(1729),
      lF = Ik(1194),
      aF = Ik(1287),
      qF = Ik(2960);
    async function LF() {
      try {
        return function(kk) {
          const Fk = new Map;
          for (const {
              store: Ik,
              status: Xk,
              autoRenewStatus: Tk,
              managementUrl: ik
            }
            of Object.values(kk.subscriptions)) !(0, Yk.g)(Ik) || (0, Yk.i)(Xk) || "willNotRenew" === Tk || Fk.has(Ik) || Fk.set(Ik, null !== ik && void 0 !== ik ? ik : Yk.j[Ik]);
          return Array.from(Fk, (kk => {
            let [Fk, Ik] = kk;
            return {
              store: Fk,
              managementUrl: Ik
            }
          }))
        }(await (0, yF.l)((0, qF.h)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (kk) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", kk), null
      }
    }
    var tF = Ik(318),
      ZF = Ik(2418);
    const jF = {
      appStore: {
        name: "App Store",
        ...tF.bc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...tF.bc.googlePlay
      },
      discord: {
        name: "Discord",
        ...tF.bc.discord
      }
    };

    function eF(kk) {
      let {
        warning: Fk,
        subscriptions: Ik
      } = kk;
      const {
        t: Xk
      } = (0, yk.y)();
      return null !== Ik && 0 === Ik.length ? (0, tk.jsx)(tk.Fragment, {
        children: Xk(Fk)
      }) : (0, tk.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Xk(Fk), null === Ik && (0, tk.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Xk("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Ik && (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Xk("auth:deleteAccountStoreSubscriptions")
          }), (0, tk.jsx)(ZF.e, {
            className: "DeleteAccountSubtitleLinks",
            links: Ik.map((kk => {
              let {
                store: Fk,
                managementUrl: Ik
              } = kk;
              return {
                ...jF[Fk],
                url: Ik
              }
            }))
          })]
        })]
      })
    }

    function wF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        userContext: Ik,
        isUserContextUpdating: Tk
      } = (0, ek.d)(), {
        t: ik
      } = (0, yk.y)(), [lk, ak] = (0, Xk.useState)(!1), [Lk, Zk] = (0, Xk.useState)(null), jk = (0, Xk.useRef)(Fk);
      (0, Xk.useEffect)((() => (jk.current = Fk, () => {
        jk.current = !1
      })), [Fk]);
      const wk = Tk || lk;
      return (0, tk.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, tk.jsxs)(qk.G, {
          onClick: async function() {
            if (!lk) {
              ak(!0);
              try {
                const kk = await async function() {
                  const [kk, Fk] = await Promise.all([(0, XF.d)(Ik.availableUserContextTypes) ? LF() : [], JF(Ik)]);
                  if (!jk.current) return TF.b.ok();
                  const Xk = (0, uk.e)(Ik.getPlayerName(), !Jk.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await iF.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Xk
                        }
                      },
                      subtitle: (0, tk.jsx)(eF, {
                        warning: HF(Ik.isLoggedIn(), Fk),
                        subscriptions: kk
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: Fk ? ik("auth:deleteAccountTypedConfirm", {
                        playerName: Xk
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return TF.b.ok();
                  const Tk = await (0, Ok.postJsonWithMetricsCookiesAndJsonResponse)(`${lF.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: zk.d.get("gameState")
                  }, {
                    retries: 3
                  }, Ik.getMetricsCookies());
                  if (Tk.error) return TF.b.error(Tk.error);
                  (0, Ek.e)() && (await aF.i.discordActivity()).exit("User deleted their account");
                  return (0, Ok.forgetStoredGuestAccount)(Ik.whamm), (0, Ok.forceGlobalSignOut)(!0), TF.b.ok()
                }(), Fk = kk.isError() ? kk.asError().message : null;
                Zk(Fk)
              } catch (kk) {
                console.error("Failed to delete account:", kk), Zk(ik("auth:genericDeleteAccountError"))
              }
              ak(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: wk,
          children: [wk && (0, tk.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, tk.jsx)(sk.c, {})
          }), ik("auth:deleteAccount")]
        }), Lk && (0, tk.jsx)("div", {
          className: "DeleteAccountError",
          children: Lk
        })]
      })
    }

    function HF(kk, Fk) {
      return (0, Ek.e)() ? "auth:discordActivityDeleteAccountLossWarning" : kk ? "auth:deleteAccountLossWarning" : Fk ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function JF(kk) {
      try {
        const {
          accountCreatedAt: Fk
        } = await (0, yF.l)(Ck.e.getPlayerProfile(kk, {
          lowerCaseName: kk.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== Fk && Date.now() - Fk >= 7 * Nk.i
      } catch (Fk) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", Fk), !0
      }
    }
    var xF = Ik(3533),
      PF = Ik(3547),
      KF = Ik(3541);

    function QF(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Ik
      } = (0, yk.y)(), {
        data: Xk,
        failed: Tk
      } = (0, fk.j)(xF.b, Fk), ik = null === Xk ? null : (0, xF.d)(Xk);
      return (0, tk.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, tk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Ik("settingsMenu:blockedAndIgnoredPlayers")
        }), null === ik && !Tk && (0, tk.jsx)(sk.c, {}), null === ik && Tk && (0, tk.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Ik("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, tk.jsx)(qk.d, {
            className: "SmallTextLight",
            onClick: () => {
              xF.b.refresh()
            },
            children: Ik("general:tryAgain")
          })]
        }), 0 === (null === ik || void 0 === ik ? void 0 : ik.length) && (0, tk.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Ik("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== ik && ik.length > 0 && (0, tk.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: ik.map((kk => {
            let {
              name: Fk,
              exclusion: Xk
            } = kk;
            const Tk = KF.g[Xk];
            return (0, tk.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, tk.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Fk
              }), (0, tk.jsx)(qk.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, PF.d)(Tk, Fk, {
                    chatMessage: null
                  })
                },
                children: Ik(KF.i[Tk].text)
              })]
            }, Fk)
          }))
        })]
      })
    }
    const sF = (0, Xk.memo)((function(kk) {
      var Fk;
      let {
        showing: Ik,
        inGame: Tk
      } = kk;
      const {
        t: ak,
        selectedLanguage: Lk
      } = (0, yk.y)(), {
        hideSocialLocationFrom: Zk
      } = (0, zk.j)(["hideSocialLocationFrom"]), wk = (0, jk.c)(), {
        userContext: Hk,
        isUserContextUpdating: xk
      } = (0, ek.d)(), [Pk, Kk] = (0, Xk.useState)(null !== (Fk = Hk.getPlayerName()) && void 0 !== Fk ? Fk : ""), [Sk, vk] = (0, Xk.useState)(null), {
        purchasing: fk,
        outcome: Bk,
        purchase: dk
      } = (0, Gk.d)("/super-rank-welcome"), Yk = (0, Nk.sc)((0, yk.l)(Lk.code, "general:timeLeft"), Hk.superRankInfo), Ak = mk(Ik), gk = Yk ? ak("general:timeLeft", {
        time: Yk
      }) : Ak, [kF, FF] = (0, Xk.useState)(!1), [XF, TF] = (0, Xk.useState)(!1), iF = (0, Xk.useRef)(null), yF = (0, Xk.useRef)(null), lF = (0, Uk.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), aF = null === lF, qF = null !== lF && void 0 !== lF ? lF : [], LF = Hk !== Ok.NULL_USER_CONTEXT && !Hk.isLoggedIn(), tF = LF && 0 !== (null === lF || void 0 === lF ? void 0 : lF.length), [ZF, jF] = (0, Xk.useState)([]), [eF, HF] = (0, Xk.useState)(!1), JF = Hk.playerHasRank("youtuber"), xF = (0, Xk.useCallback)((() => Ck.e.getPlayerProfile(Hk, {
        lowerCaseName: Hk.getPlayerName().toLowerCase()
      }).then((kk => {
        jF(kk.socialLinks)
      })).catch((kk => {
        console.error("Failed to refresh social links", kk)
      }))), [Hk]);

      function PF(kk) {
        kk !== Pk && ((0, uk.o)(kk) ? (kk = (0, uk.r)(kk), vk(ak("homePage:nameCharacters"))) : vk(null), iF.current && (iF.current.value = kk), Kk(kk))
      }
      return (0, Xk.useEffect)((() => (!0 === Ik ? (clearInterval(yF.current), yF.current = setInterval(wk, 1e3)) : clearInterval(yF.current), () => {
        clearInterval(yF.current)
      })), [Ik, wk]), (0, Xk.useEffect)((() => {
        var kk;
        Kk(null !== (kk = Hk.getPlayerName()) && void 0 !== kk ? kk : "")
      }), [Hk]), (0, Xk.useEffect)((() => {
        if (!Ik || !JF || xk) return;
        let kk = !1;
        return HF(!0), jF([]), Ck.e.getPlayerProfile(Hk, {
          lowerCaseName: Hk.getPlayerName().toLowerCase()
        }).then((Fk => {
          kk || jF(Fk.socialLinks)
        })).catch((kk => {
          console.error("Failed to load social links", kk)
        })).finally((() => {
          kk || HF(!1)
        })), () => {
          kk = !0
        }
      }), [Ik, JF, xk, Hk]), (0, tk.jsxs)("div", {
        className: ik()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Tk
        }),
        children: [Tk && (0, tk.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: ak("settingsMenu:accountSettingsInGameWarning")
        }), (0, tk.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, tk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [ak("homePage:discordNamePopupTitle"), (0, tk.jsxs)(pk.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, bk.i)({
                name: Hk.getPlayerName()
              }),
              onClick: () => {
                zk.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, tk.jsx)(lk.e, {
                name: "arrow-up-right-from-square"
              }), " ", ak("profileCard:viewProfile")]
            })]
          }), (0, tk.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, tk.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Jk.featureFlags.canChangeName && (0, tk.jsx)(Qk.c, {
                className: "EnterName",
                placeholderText: ak("homePage:enterName"),
                maxLength: uk.j,
                defaultValue: Pk,
                onValueChange: kk => {
                  PF(kk)
                },
                forcedText: kF || !Jk.featureFlags.canChangeName ? Pk : null,
                blurOnEnter: !0,
                domRef: iF
              }), (0, tk.jsx)(qk.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  PF((0, uk.g)())
                },
                children: (0, tk.jsx)(lk.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Jk.featureFlags.canChangeName && (0, tk.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, uk.e)(Pk, !Jk.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, tk.jsx)(qk.d, {
              className: "ChooseNameButton",
              disabled: kF || Pk === Hk.getPlayerName(),
              onClick: () => {
                Pk.length < uk.m ? vk(ak("homePage:changeNameMinLengthError", {
                  length: uk.m
                })) : Pk.length > uk.j ? vk(ak("homePage:changeNameMaxLengthError", {
                  length: uk.j
                })) : (FF(!0), vk(null), (0, nk.h)(Hk, Pk).then((kk => {
                  FF(!1), "taken" === kk.outcome ? vk(ak("homePage:nameTaken")) : "refused" === kk.outcome ? vk(kk.message) : "failed" === kk.outcome && vk(ak((0, nk.f)(kk.failure)))
                })))
              },
              children: ak("general:choose")
            })]
          }), Sk && (0, tk.jsx)("div", {
            className: "ChooseAccNameError",
            children: Sk
          })]
        }), (0, tk.jsx)(Vk.e, {
          label: (() => {
            if ((0, rk.n)(Zk)) {
              const kk = (0, yk.l)(Lk.code, "general:timeLeft"),
                Fk = (0, Nk.gb)(kk, Date.now(), Zk + rk.j);
              return `${ak("settingsMenu:hideSocialLocation")} (${ak("general:timeLeft",{time:Fk})})`
            }
            return ak("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const kk = !(0, rk.n)(Zk);
            (0, Mk.reportAnalyticsClick)({
              id: "social.hide_location",
              value: kk ? "on" : "off"
            }), TF(!0), Ck.e.setHideSocialLocation(Hk, kk).then((() => {
              zk.d.set({
                hideSocialLocationFrom: kk ? Date.now() : null
              })
            })).finally((() => {
              TF(!1)
            }))
          },
          checked: (0, rk.n)(Zk),
          disabled: XF
        }), JF && (0, tk.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, tk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: ak("settingsMenu:socialLinks")
          }), eF && (0, tk.jsx)(sk.c, {}), !eF && (0, tk.jsx)(Dk.e, {
            socialLinks: ZF,
            editable: !0,
            userContext: Hk,
            onLinksUpdated: xF
          })]
        }), (0, tk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, tk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: ak(tF ? "auth:loginOrSwitchAccount" : "auth:login")
          }), aF && (0, tk.jsx)(sk.c, {}), !aF && 0 === qF.length && (0, tk.jsx)("div", {
            className: "NoLoginOptions",
            children: ak("auth:noLoginOptions")
          }), !aF && qF.length > 0 && "crazygames" !== Ek.v && (0, tk.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: qF
          }), !aF && qF.length > 0 && "crazygames" === Ek.v && (0, tk.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [qF[0], qF.length > 1 && (0, tk.jsxs)(tk.Fragment, {
              children: [(0, tk.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, tk.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: ak("auth:legacyLoginOptions")
                }), (0, tk.jsx)(hk.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: ak("auth:legacyLoginOptionsInfo")
                })]
              }), (0, tk.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: qF.slice(1)
              })]
            })]
          }), Jk.featureFlags.useLogin && (null !== Hk.loggedInInfo || Hk.isLoggedIn()) && (0, tk.jsxs)(tk.Fragment, {
            children: [(0, tk.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, tk.jsxs)(qk.G, {
              onClick: () => {
                (0, Ok.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, tk.jsx)(lk.e, {
                name: "right-from-bracket"
              }), ak("auth:signOut")]
            })]
          })]
        }), !Hk.playerHasRank("super") && (0, Wk.purchasesAllowed)() && (0, tk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, tk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, tk.jsx)(lk.e, {
              name: "bolt"
            }), ak("homePage:superRank")]
          }), (0, tk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, tk.jsxs)(qk.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ck.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, tk.jsx)(lk.e, {
                name: "bolt"
              }), ak("homePage:getSuperRank")]
            }), (0, tk.jsxs)(qk.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ck.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, tk.jsx)(lk.e, {
                name: "bolt"
              }), ak("homePage:giftSuperRank")]
            })]
          })]
        }), Hk.playerHasRank("super") && (0, tk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, tk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, tk.jsx)(lk.e, {
              name: "bolt"
            }), ak("homePage:superRank"), gk && (0, tk.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", gk, ")"]
            })]
          }), (0, Wk.purchasesAllowed)() && (0, tk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Nk.Fc)(Hk.superRankInfo) && (0, tk.jsxs)(qk.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: fk,
              onClick: () => {
                dk(Rk.l.id, null)
              },
              children: [(0, tk.jsx)(lk.e, {
                name: "bolt"
              }), ak("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Rk.l.product.days,
                price: Rk.l.price
              })]
            }), (0, tk.jsxs)(qk.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ck.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, tk.jsx)(lk.e, {
                name: "bolt"
              }), ak("homePage:giftSuperRank")]
            })]
          }), Bk && (0, tk.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: ak(Bk.translationKey)
          })]
        }), (0, tk.jsx)(IF, {
          showing: Ik
        }), Jk.featureFlags.useSocialFeatures && (0, tk.jsx)(QF, {
          showing: Ik
        }), (0, tk.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, tk.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, tk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: ak(VF(LF, tF))
            }), (0, Ek.e)() && (0, tk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: ak("auth:discordActivityKickWarning")
            }), (0, tk.jsx)(wF, {
              showing: Ik
            })]
          }), (0, tk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ak(LF ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function VF(kk, Fk) {
      return kk ? Fk ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var zF = Ik(34058),
      SF = Ik(3065),
      oF = Ik(1241),
      vF = Ik(1395),
      EF = Ik(1907),
      OF = Ik(8865),
      nF = Ik(34062);

    function GF() {
      const {
        t: kk
      } = (0, yk.y)();
      return (0, EF.k)("localPlayerAlive") ? (0, tk.jsx)(OF.e, {
        icon: "camera",
        title: kk("screenshotMode:title"),
        sub: kk("screenshotMode:entrySub"),
        onClick: nF.b
      }) : null
    }
    var pF = Ik(34073);
    const uF = (0, Xk.memo)((function(kk) {
        let {
          inGame: Fk
        } = kk;
        const {
          t: Ik,
          selectedLanguage: Xk
        } = (0, yk.y)(), {
          clientEscMenuOptions: Tk,
          showDebugOverlay: ik,
          isTouchScreen: lk
        } = (0, zk.j)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), ak = (0, wk.j)("hideCoordinates");
        let qk = "settingsMenu:showCoordinates",
          Lk = "settingsMenu:showChunkCoordinates";

        function Zk(kk) {
          const Fk = new Intl.DisplayNames([kk], {
            type: "language"
          }).of(kk);
          return Fk.charAt(0).toUpperCase() + Fk.slice(1)
        }
        return ak && (qk = "settingsMenu:showCoordinatesHidden", Lk = "settingsMenu:showChunkCoordinatesHidden"), (0, tk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Fk && Jk.featureFlags.canUseInviteLinks && (0, tk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, tk.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Ik("settingsMenu:inviteLink")
            }), (0, tk.jsx)(zF.c, {})]
          }), (0, tk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, tk.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Ik("settingsMenu:language")
            }), (0, tk.jsx)(SF.e, {
              options: Object.entries(yk.i).map((kk => {
                let [Fk, Ik] = kk;
                return {
                  label: (0, tk.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, tk.jsx)("img", {
                      src: Ik.flagImg,
                      alt: "flag"
                    }), (0, tk.jsxs)("span", {
                      children: [Zk(Fk), " ", (0, tk.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Fk, ")"]
                      })]
                    })]
                  }),
                  value: Fk
                }
              })),
              value: Xk.code,
              onChange: kk => {
                oF.d.get().setCurrentLanguage(kk.value)
              }
            })]
          }), Fk && lk && (0, pF.d)() && (0, tk.jsx)(GF, {}), !(0, Jk.isMobileApp)() && (0, vF.g)() && Jk.featureFlags.useForceRotateForceFullscreenOverlay && (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:disableFullscreenMode"),
            checked: Tk.disableFullscreen,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                disableFullscreen: kk
              })
            }
          }), (0, tk.jsx)(Vk.e, {
            label: Ik(qk),
            checked: Tk.showCoordinates,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showCoordinates: kk
              })
            },
            disabled: ak
          }), (0, tk.jsx)(Vk.e, {
            label: Ik(Lk),
            checked: Tk.showChunkCoordinates,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showChunkCoordinates: kk
              })
            },
            disabled: ak
          }), (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:showFps"),
            checked: Tk.showFPS,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showFPS: kk
              })
            }
          }), (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:disableBunnyHopping"),
            checked: Tk.disableBunnyHopping,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                disableBunnyHopping: kk
              })
            }
          }), (0, aF.v)() && (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:showChat"),
            checked: Tk.showChat,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showChat: kk
              })
            }
          }), (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:showDebugOverlay"),
            checked: ik,
            onClick: kk => {
              zk.d.set({
                showDebugOverlay: kk
              })
            }
          }), Jk.featureFlags.useSocialFeatures && (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:showFriendOnlineToasts"),
            checked: Tk.showFriendOnlineToasts,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showFriendOnlineToasts: kk
              })
            }
          }), (0, tk.jsx)(Vk.e, {
            label: Ik("settingsMenu:showNewItemIndicator"),
            checked: Tk.showNewItemIndicator,
            onClick: kk => {
              zk.d.setClientEscMenuOptions({
                showNewItemIndicator: kk
              })
            }
          })]
        })
      })),
      bF = (0, Xk.memo)((function() {
        const {
          t: kk
        } = (0, yk.y)(), {
          soundVolume: Fk,
          musicVolume: Ik
        } = (0, zk.j)(["soundVolume", "musicVolume"]);
        return (0, tk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, tk.jsx)(Vk.j, {
            name: kk("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Ik,
            onChange: kk => {
              zk.d.set({
                musicVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          }), (0, tk.jsx)(Vk.j, {
            name: kk("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Fk,
            onChange: kk => {
              zk.d.set({
                soundVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          })]
        })
      }));
    var RF = Ik(729),
      UF = Ik(1402),
      CF = Ik(3620),
      NF = Ik(34079),
      cF = Ik(3428);
    const WF = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function fF() {
      const {
        t: kk
      } = (0, yk.y)(), Fk = (0, cF.d)(), {
        mobilePushNotificationsCanAsk: Ik
      } = (0, zk.j)(["mobilePushNotificationsCanAsk"]), [Tk, ik] = (0, Xk.useState)(null), [lk, ak] = (0, Xk.useState)(!1), [Lk, Zk] = (0, Xk.useState)(null), [jk, ek] = (0, Xk.useState)(!1), wk = (0, Xk.useCallback)((() => {
        (0, CF.c)().then((kk => {
          Fk.current && (ik(kk), ak(!1))
        })).catch((kk => {
          console.error("Failed to load push notification targets:", kk), Fk.current && ak(!0)
        }))
      }), [Fk]), Hk = (0, Xk.useCallback)((() => {
        (0, NF.f)().then((kk => {
          Fk.current && Zk((() => kk))
        }))
      }), [Fk]);
      (0, Xk.useEffect)((() => {
        wk()
      }), [wk]), (0, Xk.useEffect)((() => {
        Hk()
      }), [Hk, Ik]), (0, UF.d)(CF.h, wk);
      const Jk = null === Tk ? [] : Object.keys(WF).filter((kk => Tk[kk] > 0));
      return (0, tk.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, tk.jsx)("div", {
          className: "SliderText",
          children: kk("notificationSettings:pushNotifications")
        }), null === Tk && lk && (0, tk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsLoadFailed")
        }), null !== Tk && 0 === Jk.length && (0, tk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsNone")
        }), Jk.length > 0 && (0, tk.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Jk.map((Fk => {
            var Ik;
            return (0, tk.jsx)("li", {
              children: kk(WF[Fk], {
                count: null !== (Ik = null === Tk || void 0 === Tk ? void 0 : Tk[Fk]) && void 0 !== Ik ? Ik : 0
              })
            }, Fk)
          }))
        }), null !== Lk && (0, tk.jsx)(qk.d, {
          className: "PushNotificationSettingsButton",
          loading: jk,
          onClick: () => {
            ek(!0), Lk().catch((kk => {
              console.error("Failed to turn on push notifications:", kk)
            })).finally((() => {
              Fk.current && (ek(!1), Hk())
            }))
          },
          children: kk("notificationSettings:pushTurnOn")
        })]
      })
    }
    var BF = Ik(2478);
    const dF = {
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
      YF = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function AF(kk) {
      let {
        setting: Fk,
        value: Ik
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)(), lk = (0, cF.d)(), [ak, qk] = (0, Xk.useState)(null), [Lk, Zk] = (0, Xk.useState)(!1), [jk, ek] = (0, Xk.useState)(null);
      return (0, Xk.useEffect)((() => {
        "remindersOn" === Fk && (0, NF.f)().then((kk => {
          lk.current && ek((() => kk))
        }), (kk => {
          console.error("Couldn't tell whether this device can take push notifications:", kk)
        }))
      }), [Fk, lk]), (0, tk.jsx)(Vk.e, {
        className: ik()({
          DailyDropSettingFailed: Lk
        }),
        label: Tk(YF[Fk].label),
        checked: null !== ak && void 0 !== ak ? ak : Ik,
        note: Lk ? Tk("dailyDrop:settingFailed") : void 0,
        onClick: kk => {
          null === ak && (qk(kk), Zk(!1), kk && null !== jk && jk().catch((kk => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", kk)
          })), (0, BF.s)("daily_drop.setting", `${YF[Fk].reportAs}_${kk?"on":"off"}`), (0, BF.u)("hidden" === Fk ? {
            hidden: kk
          } : {
            remindersOn: kk
          }).catch((kk => {
            console.error(`Failed to save the Lucky Skin Block's ${Fk} setting:`, kk), lk.current && Zk(!0)
          })).finally((() => {
            lk.current && qk(null)
          })))
        }
      })
    }
    const gF = (0, Xk.memo)((function() {
      const {
        t: kk
      } = (0, yk.y)(), {
        clientEscMenuOptions: Fk
      } = (0, zk.j)(["clientEscMenuOptions"]), {
        userContext: Ik
      } = (0, ek.d)(), Xk = Ik.dailyDrop;
      return (0, tk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Jk.featureFlags.useSocialFeatures && (0, tk.jsx)(Vk.h, {
          label: kk("notificationSettings:friendRequests"),
          options: RF.e.map((Fk => ({
            value: Fk,
            label: kk(dF[Fk].label)
          }))),
          value: Fk.friendRequestNotifications,
          onChange: kk => {
            zk.d.setClientEscMenuOptions({
              friendRequestNotifications: kk
            })
          },
          circleInfoText: (0, tk.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: RF.e.map((Fk => (0, tk.jsxs)("div", {
              children: [(0, tk.jsx)("b", {
                children: kk(dF[Fk].label)
              }), ": ", kk(dF[Fk].info)]
            }, Fk)))
          })
        }), null !== Xk && (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsx)(AF, {
            setting: "remindersOn",
            value: Xk.remindersOn
          }), (0, tk.jsx)(AF, {
            setting: "hidden",
            value: Xk.hidden
          })]
        }), (0, tk.jsx)(fF, {})]
      })
    }));
    var mF = Ik(4495),
      hF = Ik(187),
      rF = Ik(309),
      DF = Ik(6644),
      MF = Ik(3396),
      kI = Ik(34083),
      FI = Ik(628),
      II = Ik(34);
    var XI = Ik(646),
      TI = Ik(41),
      iI = Ik(4343);
    const yI = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function lI(kk) {
      return yI.has(kk) ? xk.gameBridge.lookup("dJ", null) : null
    }

    function aI(kk) {
      if (!(0, FI.Q)(zk.d.get("clientEscMenuOptions")[kk])) return zk.d.get("clientEscMenuOptions")[kk];
      const Fk = lI(kk);
      return null !== Fk ? Fk[yI.get(kk)] : TI.j.getItem(kk)
    }

    function qI(kk, Fk) {
      if ("useTouchControls" === kk) return void(0, iI.c)(Fk);
      kk in zk.d.get("clientEscMenuOptions") && zk.d.setClientEscMenuOptions({
        [kk]: Fk
      });
      const Ik = lI(kk);
      null !== Ik && xk.gameBridge.send("setChunkAddDistance", {
        ...Ik,
        [yI.get(kk)]: Fk
      }), TI.j.setItem(kk, Fk)
    }
    var LI = Ik(4402),
      tI = Ik(34091),
      ZI = Ik(34095),
      jI = Ik(4491);

    function eI(kk) {
      var Fk, Tk, lk, ak;
      let {
        minChunkAddDist: qk,
        getValue: Lk,
        onChange: Zk,
        setApplySettingsCallback: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), {
        clientEscMenuOptions: Hk
      } = (0, zk.j)(["clientEscMenuOptions", "showDistantNametags"]), xk = (0, Xk.useRef)(Lk("showFog")), Pk = (0, Xk.useRef)(Hk.antiAliasing), Kk = (0, Xk.useRef)(Hk.useWebGpu), [Qk, sk] = (0, Xk.useState)(null), [vk, Ek] = (0, Xk.useState)((() => (0, MF.h)(Jk.featureFlags.settings.canUseShaderPacks))), [Ok] = (0, Xk.useState)((() => zk.d.isWebGpuDefaultOff())), [nk] = (0, Xk.useState)(rF.l);
      (0, Xk.useEffect)((() => {
        let kk = !1;
        return (0, Jk.hasUsableWebGpuAdapter)().then((Fk => {
          kk || sk(Fk)
        })), (0, MF.m)(Jk.featureFlags.settings.canUseShaderPacks) && (0, DF.i)().then((async Fk => {
          const Xk = null !== Fk && await async function(kk) {
            const [{
              isShaderPackActive: Fk
            }, {
              loadPageShaderPackCompiler: Xk
            }] = await Promise.all([Ik.e(137).then((() => Ik(6639))), Promise.all([Ik.e(77), Ik.e(133), Ik.e(136)]).then((() => Ik(6596)))]);
            return Fk(kk, await Xk())
          }(Fk);
          kk || Ek(Xk)
        })), () => {
          kk = !0
        }
      }), []);
      const Gk = function(kk, Fk, Ik, Xk, Tk) {
          return (0, kI.c)(Ik, Xk) && !0 === Fk ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Fk ? "settingsMenu:newWebGpu" : Tk ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: kk && !1 !== Fk,
            disabled: !0 !== Fk
          }
        }(Hk.useWebGpu, Qk, vk, Ok, nk),
        pk = (Hk.useWebGpu || (0, kI.c)(vk, Ok)) && vk && !0 === Qk,
        uk = (0, wk.j)("lightingOverride"),
        bk = !(0, FI.Q)(uk);
      let Rk = "settingsMenu:enableLighting";
      bk && (Rk = uk ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Uk = kk => {
          var Fk, Ik, Xk;
          const Tk = null !== (Fk = kk.showFog) && void 0 !== Fk ? Fk : Lk("showFog"),
            ik = null !== (Ik = kk.antiAliasing) && void 0 !== Ik ? Ik : Hk.antiAliasing,
            yk = null !== (Xk = kk.useWebGpu) && void 0 !== Xk ? Xk : Hk.useWebGpu,
            lk = !XI.x && Tk !== xk.current || ik !== Pk.current || yk !== Kk.current;
          jk(lk ? () => Vk.m : null)
        },
        Ck = (0, wk.j)("fogChunkDistanceOverride"),
        Nk = (0, wk.j)("fogBlockDistanceOverride"),
        ck = !(0, FI.Q)(Ck) || !(0, FI.Q)(Nk),
        Wk = ck ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [fk, Bk] = (0, mF.c)(qk),
        [dk, Yk] = (0, jI.k)(qk),
        Ak = ek("settingsMenu:chunkLoadDistanceDeviceLimit"),
        gk = dk < fk,
        mk = Math.min(null !== (Fk = Lk("chunkHorizAddDist")) && void 0 !== Fk ? Fk : qk[0], dk),
        hk = !ck && function(kk, Fk) {
          return !0 === kk.showFog && kk.fogChunkDistance > Fk
        }(Hk, mk);
      return (0, tk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, tk.jsx)(Vk.j, {
          name: ek("settingsMenu:horizontalChunkLoadDistance"),
          min: qk[0],
          max: fk,
          selectableMax: dk,
          cappedNote: Ak,
          step: 1,
          initValue: mk,
          onChange: kk => {
            !0 === Lk("showFog") && kk < Lk("fogChunkDistance") && Zk("fogChunkDistance", kk), Zk("chunkHorizAddDist", kk), II.g.GL("updatedChunkLoadDist")
          },
          circleInfoText: ek("settingsMenu:chunkLoadDistanceInfo")
        }), (0, tk.jsx)(Vk.j, {
          name: ek("settingsMenu:verticalChunkLoadDistance"),
          min: qk[1],
          max: Bk,
          selectableMax: Yk,
          cappedNote: gk ? void 0 : Ak,
          step: 1,
          initValue: Math.min(null !== (Tk = Lk("chunkVertAddDist")) && void 0 !== Tk ? Tk : qk[1], Yk),
          onChange: kk => {
            Zk("chunkVertAddDist", kk), II.g.GL("updatedChunkLoadDist")
          },
          circleInfoText: ek("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:chunkFadeIn"),
          checked: Hk.chunkFadeIn,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              chunkFadeIn: kk
            })
          },
          circleInfoText: ek("settingsMenu:chunkFadeInInfo")
        }), Sk.devTools.supports("chunkBorders") && (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:showChunkBorders"),
          checked: Hk.showChunkBorders,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              showChunkBorders: kk
            })
          },
          circleInfoText: ek("settingsMenu:showChunkBordersInfo")
        }), (0, tk.jsx)(Vk.e, {
          label: ek(Rk),
          checked: Hk.enableLighting,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              enableLighting: kk
            })
          },
          disabled: bk
        }), (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, tk.jsx)(Vk.e, {
            label: ek(Wk),
            checked: Hk.showFog,
            onClick: kk => {
              Uk({
                showFog: kk
              }), zk.d.setClientEscMenuOptions({
                showFog: kk
              })
            },
            disabled: ck,
            className: ik()({
              SettingBoxWarning: hk
            })
          }), (0, tk.jsx)(Vk.j, {
            name: ek("settingsMenu:fogChunkDistance"),
            min: qk[0],
            max: hF.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (lk = Hk.fogChunkDistance) && void 0 !== lk ? lk : qk[0],
            onChange: kk => {
              zk.d.setClientEscMenuOptions({
                fogChunkDistance: kk
              }), II.g.GL("fogChunkDistanceChanged", kk)
            },
            circleInfoText: ek("settingsMenu:fogChunkDistanceInfo"),
            disabled: ck || !1 === Lk("showFog"),
            className: ik()({
              SettingBoxWarning: hk
            })
          }), hk && (0, tk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ek("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !XI.x && (0, tk.jsx)(Vk.e, {
          label: ek(pk ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !pk && Hk.disableTexAtlas,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              disableTexAtlas: kk
            })
          },
          circleInfoText: ek("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: pk
        }), (0, tk.jsx)(Vk.j, {
          name: ek("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Hk.cameraFOV,
          onChange: kk => {
            zk.d.setClientEscMenuOptions({
              cameraFOV: kk
            })
          }
        }), (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:disableViewBobbing"),
          checked: Hk.disableBobbing,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              disableBobbing: kk
            })
          },
          circleInfoText: ek("settingsMenu:disableViewBobbingInfo")
        }), (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:antiAliasing"),
          checked: Hk.antiAliasing,
          onClick: kk => {
            Uk({
              antiAliasing: kk
            }), (0, LI.i)("antiAliasing"), zk.d.setClientEscMenuOptions({
              antiAliasing: kk
            })
          },
          circleInfoText: ek("settingsMenu:antiAliasingInfo")
        }), (0, tk.jsx)(Vk.j, {
          name: ek("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (ak = Hk.pixelScale) && void 0 !== ak ? ak : 1,
          onChange: kk => {
            (kk !== zk.d.get("clientEscMenuOptions").pixelScale || (0, ZI.n)()) && (0, LI.i)("pixelScale"), zk.d.setClientEscMenuOptions({
              pixelScale: kk
            })
          },
          circleInfoText: ek("settingsMenu:pixelScaleInfo"),
          format: kk => `${kk}x`
        }), (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:pixelSmoothing"),
          checked: Hk.pixelSmoothing,
          onClick: kk => {
            zk.d.setClientEscMenuOptions({
              pixelSmoothing: kk
            })
          },
          circleInfoText: ek("settingsMenu:pixelSmoothingInfo")
        }), XI.x && (0, tk.jsx)(Vk.e, {
          label: ek("settingsMenu:distantNametags"),
          checked: (0, tI.b)(),
          onClick: kk => {
            zk.d.set({
              showDistantNametags: kk
            })
          },
          circleInfoText: ek("settingsMenu:distantNametagsInfo")
        }), (0, tk.jsx)(Vk.e, {
          label: ek(Gk.translationKey),
          checked: Gk.checked,
          onClick: kk => {
            Uk({
              useWebGpu: kk
            }), zk.d.setClientEscMenuOptions({
              useWebGpu: kk
            })
          },
          circleInfoText: ek("settingsMenu:newWebGpuInfo"),
          disabled: Gk.disabled
        })]
      })
    }
    var wI = Ik(4395),
      HI = Ik(8846),
      JI = Ik(34119),
      xI = Ik(8860),
      PI = Ik(34122);
    const KI = {
        color: 16777215,
        name: "white"
      },
      QI = {
        color: 0,
        name: "black"
      },
      sI = [KI, {
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
      }, QI],
      VI = [QI, KI];

    function zI(kk) {
      return `${kk} px`
    }

    function SI(kk) {
      return `${kk}%`
    }

    function oI(kk) {
      let {
        label: Fk,
        value: Ik,
        swatches: Xk,
        onChange: Tk
      } = kk;
      const {
        t: lk
      } = (0, yk.y)(), ak = !Xk.some((kk => kk.color === Ik));
      return (0, tk.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, tk.jsx)("div", {
          className: "SliderText",
          children: Fk
        }), (0, tk.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Fk,
          children: [Xk.map((kk => {
            let {
              color: Fk,
              name: Xk
            } = kk;
            return (0, tk.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Fk === Ik,
              "aria-label": lk(`crosshairSettings:color_${Xk}`),
              "data-pad-focusable": !0,
              className: ik()("CrosshairSwatch", {
                Selected: Fk === Ik
              }),
              style: {
                background: (0, PI.k)(Fk)
              },
              onClick: () => {
                Tk(Fk)
              }
            }, Fk)
          })), (0, tk.jsx)("label", {
            className: ik()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: ak
            }),
            style: ak ? {
              background: (0, PI.k)(Ik)
            } : void 0,
            title: lk("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, tk.jsx)("input", {
              type: "color",
              "aria-label": lk("crosshairSettings:customColor"),
              value: (0, PI.k)(Ik),
              onChange: kk => {
                const Fk = (0, PI.q)(kk.target.value);
                null !== Fk && Tk(Fk)
              }
            })
          })]
        })]
      })
    }

    function vI(kk) {
      let {
        settings: Fk,
        onChange: Ik
      } = kk;
      const {
        t: Xk
      } = (0, yk.y)(), Tk = (kk, Xk) => {
        Ik((0, PI.u)(Fk, kk, Xk))
      }, ik = function(kk, Ik) {
        let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zI;
        const {
          min: ik,
          max: yk,
          step: lk
        } = PI.d[kk];
        return (0, tk.jsx)(Vk.j, {
          name: Ik,
          min: ik,
          max: yk,
          step: lk,
          initValue: Fk[kk],
          format: Xk,
          onChange: Fk => {
            Tk(kk, Fk)
          }
        }, kk)
      }, lk = ["lines", "dot", "circle"].filter((kk => Fk[kk])), ak = (kk, Ik, Xk) => (0, tk.jsx)(Vk.e, {
        label: Ik,
        checked: Fk[kk],
        disabled: 1 === lk.length && lk[0] === kk,
        circleInfoText: Xk,
        onClick: Fk => {
          Tk(kk, Fk)
        }
      }, kk), qk = "shapes" === Fk.style;
      return (0, tk.jsxs)(tk.Fragment, {
        children: [(0, tk.jsx)(Vk.h, {
          label: Xk("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Xk("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Xk("crosshairSettings:styleShapes")
          }],
          value: Fk.style,
          onChange: kk => {
            Tk("style", kk)
          }
        }), (0, tk.jsx)(oI, {
          label: Xk("crosshairSettings:color"),
          value: Fk.color,
          swatches: sI,
          onChange: kk => {
            Tk("color", kk)
          }
        }), ik("opacity", Xk("crosshairSettings:opacity"), SI), !qk && ik("size", Xk("crosshairSettings:size"), SI), qk && (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ak("lines", Xk("crosshairSettings:lines")), Fk.lines && ik("lineLength", Xk("crosshairSettings:lineLength")), Fk.lines && ik("lineThickness", Xk("crosshairSettings:lineThickness")), Fk.lines && ik("gap", Xk("crosshairSettings:gap")), Fk.lines && ak("tStyle", Xk("crosshairSettings:tStyle"))]
        }), qk && (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ak("dot", Xk("crosshairSettings:dot")), Fk.dot && ik("dotSize", Xk("crosshairSettings:dotSize"))]
        }), qk && (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ak("circle", Xk("crosshairSettings:circle")), Fk.circle && ik("circleRadius", Xk("crosshairSettings:circleRadius")), Fk.circle && ik("circleThickness", Xk("crosshairSettings:circleThickness"))]
        }), (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ik("outline", Xk("crosshairSettings:outline"), (kk => kk > 0 ? zI(kk) : Xk("crosshairSettings:off"))), Fk.outline > 0 && (0, tk.jsx)(oI, {
            label: Xk("crosshairSettings:outlineColor"),
            value: Fk.outlineColor,
            swatches: VI,
            onChange: kk => {
              Tk("outlineColor", kk)
            }
          })]
        }), ak("growOnClick", Xk("crosshairSettings:growOnClick")), qk && ak("forGuns", Xk("crosshairSettings:forGuns"), Xk("crosshairSettings:forGunsInfo"))]
      })
    }
    var EI = Ik(74),
      OI = Ik(1263),
      nI = Ik(12750),
      GI = Ik(13880),
      pI = Ik(15338),
      uI = Ik(15861);
    const bI = ["sky", "grass", "stone", "sand", "snow", "night"],
      RI = "4rem";

    function UI(kk) {
      return {
        backgroundImage: `url(${kk})`,
        backgroundSize: `${RI} ${RI}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function CI(kk) {
      return {
        ...(() => {
          switch (kk) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return UI(nI);
            case "stone":
              return UI(GI);
            case "sand":
              return UI(pI);
            case "snow":
              return UI(uI);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function NI(kk) {
      return Object.freeze({
        ...PI.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...kk
      })
    }
    const cI = [{
        id: "default",
        settings: PI.f
      }, {
        id: "cross",
        settings: NI({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: NI({
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
        settings: NI({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: NI({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: NI({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: NI({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: NI({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      WI = ["growOnClick", "forGuns"];
    var fI = Ik(34131);

    function BI(kk) {
      let {
        label: Fk,
        selected: Ik,
        onClick: Xk,
        className: Tk,
        style: yk,
        children: lk
      } = kk;
      return (0, tk.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Ik,
        title: Fk,
        "aria-label": Fk,
        "data-pad-focusable": !0,
        className: ik()("CrosshairBackdropSwatch", Tk, {
          Selected: Ik
        }),
        style: yk,
        onClick: Xk,
        children: lk
      })
    }

    function dI(kk) {
      let {
        backdrop: Fk,
        onChange: Ik,
        game: Xk
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)();
      return (0, tk.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Tk("crosshairSettings:background"),
        children: [Xk && (0, tk.jsx)(BI, {
          label: Tk("crosshairSettings:bg_game"),
          selected: Xk.selected,
          onClick: Xk.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, tk.jsx)(lk.e, {
            name: "cube"
          })
        }), bI.map((kk => (0, tk.jsx)(BI, {
          label: Tk(`crosshairSettings:bg_${kk}`),
          selected: !(null !== Xk && void 0 !== Xk && Xk.selected) && kk === Fk,
          style: CI(kk),
          onClick: () => {
            Ik(kk)
          }
        }, kk)))]
      })
    }

    function YI(kk) {
      let {
        settings: Fk,
        touch: Ik,
        backdrop: Xk,
        onChange: Tk
      } = kk;
      const {
        t: lk
      } = (0, yk.y)(), ak = function(kk) {
        var Fk;
        return null !== (Fk = cI.find((Fk => (0, PI.t)(Fk.settings, kk, WI)))) && void 0 !== Fk ? Fk : null
      }(Fk);
      return (0, tk.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": lk("crosshairSettings:presets"),
        children: cI.map((kk => {
          const yk = (null === ak || void 0 === ak ? void 0 : ak.id) === kk.id;
          return (0, tk.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": yk,
            "data-pad-focusable": !0,
            className: ik()("CrosshairPreset", {
              Selected: yk
            }),
            onClick: () => {
              Tk(function(kk, Fk) {
                return {
                  ...Fk.settings,
                  growOnClick: kk.growOnClick,
                  forGuns: kk.forGuns
                }
              }(Fk, kk))
            },
            children: [(0, tk.jsx)("div", {
              className: "CrosshairPresetStage",
              style: CI(Xk),
              children: (0, tk.jsx)(fI.c, {
                settings: kk.settings,
                touch: Ik,
                inPreview: !0
              })
            }), (0, tk.jsx)("div", {
              className: "CrosshairPresetName",
              children: lk(`crosshairSettings:preset_${kk.id}`)
            })]
          }, kk.id)
        }))
      })
    }
    var AI = Ik(1611);

    function gI(kk, Fk) {
      const [Ik, Tk] = (0, Xk.useState)(!1), ik = () => {
        Tk(!1)
      }, [yk, lk] = (0, Xk.useState)(!1), ak = (0, Xk.useRef)({
        growOnClick: kk.growOnClick,
        forGuns: kk.forGuns
      });
      (0, Xk.useEffect)((() => {
        const Fk = ak.current;
        ak.current = {
          growOnClick: kk.growOnClick,
          forGuns: kk.forGuns
        }, (kk.growOnClick && !Fk.growOnClick || kk.forGuns && !Fk.forGuns) && lk(!0)
      }), [kk.growOnClick, kk.forGuns]), (0, Xk.useEffect)((() => {
        if (!yk) return;
        const kk = setTimeout((() => {
          lk(!1)
        }), 600);
        return () => {
          clearTimeout(kk)
        }
      }), [yk]);
      const qk = Ik || yk;
      return {
        view: {
          pressed: qk,
          spread: qk && kk.forGuns && !kk.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: kk => {
            !kk.target.closest(Fk) && (0, AI.e)(kk.currentTarget, kk.pointerId) && Tk(!0)
          },
          onPointerUp: ik,
          onPointerCancel: ik,
          onLostPointerCapture: ik
        }
      }
    }

    function mI(kk) {
      let {
        settings: Fk,
        touch: Ik,
        backdrop: Xk,
        className: Tk,
        children: yk,
        label: lk
      } = kk;
      const ak = gI(Fk, ".CrosshairStageControls");
      return (0, tk.jsxs)("div", {
        className: ik()("CrosshairStage", Tk),
        style: CI(Xk),
        ...ak.handlers,
        children: [(0, tk.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": lk,
          children: (0, tk.jsx)(fI.c, {
            settings: Fk,
            touch: Ik,
            inPreview: !0,
            ...ak.view
          })
        }), yk]
      })
    }
    const hI = "crosshairFullScreen";

    function rI(kk) {
      let {
        settings: Fk,
        touch: Ik,
        backdrop: Tk,
        onBackdrop: ak,
        inGame: Lk,
        onChange: Zk,
        onClose: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = (0, Xk.useRef)(null);
      (0, OI.t)("popup", wk, jk),
      function(kk) {
        const Fk = (0, Xk.useRef)(kk);
        Fk.current = kk, (0, Xk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [hI]: !0
          }, "");
          let kk = !1;
          const Ik = () => {
            kk = !0, Fk.current()
          };
          return window.addEventListener("popstate", Ik), () => {
            var Fk;
            window.removeEventListener("popstate", Ik), !kk && null !== (Fk = window.history.state) && void 0 !== Fk && Fk[hI] && window.history.back()
          }
        }), [])
      }(jk);
      const Hk = (0, Xk.useRef)(jk);
      Hk.current = jk, (0, Xk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), Hk.current())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), []);
      const Jk = gI(Fk, ".CrosshairFullScreenPanel"),
        [xk, Pk] = (0, Xk.useState)(!0),
        Kk = xk && Lk;
      (0, Xk.useEffect)((() => {
        if (Kk) return zk.d.set({
          crosshairGameView: !0
        }), () => {
          zk.d.set({
            crosshairGameView: !1
          })
        }
      }), [Kk]);
      const [Qk, sk] = (0, Xk.useState)(!0);
      return (0, EI.createPortal)((0, tk.jsxs)("div", {
        ref: wk,
        className: "CrosshairFullScreen",
        style: Kk ? void 0 : CI(Tk),
        ...Jk.handlers,
        children: [(0, tk.jsx)(fI.c, {
          settings: Fk,
          touch: Ik,
          inEditor: !0,
          ...Jk.view
        }), (0, tk.jsxs)("div", {
          className: ik()("CrosshairFullScreenPanel", {
            Collapsed: !Qk
          }),
          children: [(0, tk.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, tk.jsx)(dI, {
              backdrop: Tk,
              onChange: kk => {
                Pk(!1), ak(kk)
              },
              game: Lk ? {
                selected: Kk,
                onSelect: () => {
                  Pk(!0)
                }
              } : void 0
            }), (0, tk.jsx)(qk.Q, {
              className: "CrosshairPanelToggle",
              ariaLabel: ek(Qk ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                sk(!Qk)
              },
              children: (0, tk.jsx)(lk.e, {
                name: Qk ? "caret-up" : "pen"
              })
            }), (0, tk.jsx)(qk.d, {
              className: "CrosshairFullScreenDone",
              onClick: jk,
              padDefaultFocus: !0,
              children: ek("crosshairSettings:done")
            })]
          }), Qk && (0, tk.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, tk.jsx)(YI, {
              settings: Fk,
              touch: Ik,
              backdrop: Tk,
              onChange: Zk
            }), (0, tk.jsx)(vI, {
              settings: Fk,
              onChange: Zk
            })]
          })]
        })]
      }), document.body)
    }
    var DI = Ik(2602),
      MI = Ik(34143);

    function kX(kk) {
      let {
        settings: Fk,
        onChange: Ik
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)(), ak = (0, MI.h)(Fk), [Lk, Zk] = (0, DI.g)(), [jk, ek] = (0, Xk.useState)(!1), wk = (0, Xk.useRef)(null), [Hk, Jk] = (0, DI.g)(), [xk, Pk] = (0, Xk.useState)(!1);
      return (0, tk.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, tk.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, tk.jsxs)(qk.Q, {
            className: ik()("CrosshairCopy", {
              ActiveSecondaryButton: Lk
            }),
            onClick: () => {
              (0, DI.e)(ak, {
                useShareSheet: !1,
                onOutcome: kk => {
                  ek("failed" === kk), "copied" === kk && Zk()
                }
              })
            },
            children: [(0, tk.jsx)(lk.e, {
              name: Lk ? "check" : "copy"
            }), " ", Tk(Lk ? "general:copied" : "crosshairSettings:copy")]
          }), (0, tk.jsx)(Qk.c, {
            className: "CrosshairPaste",
            domRef: wk,
            ariaLabel: Tk("crosshairSettings:paste"),
            placeholderText: Tk("crosshairSettings:paste"),
            onValueChange: kk => {
              const Fk = (0, MI.f)(kk);
              Pk(!Fk && kk.trim().length >= MI.e), Fk && (Ik(Fk), wk.current.value = "", Jk())
            }
          })]
        }), jk && (0, tk.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: ak,
          "aria-label": Tk("crosshairSettings:copy"),
          onFocus: kk => {
            kk.currentTarget.select()
          }
        }), (0, tk.jsxs)("div", {
          "aria-live": "polite",
          children: [xk && (0, tk.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Tk("crosshairSettings:pasteInvalid")
          }), Hk && !xk && (0, tk.jsx)("div", {
            className: "CrosshairShareNote",
            children: Tk("crosshairSettings:applied")
          })]
        })]
      })
    }
    var FX = Ik(34148);
    let IX = "sky";

    function XX(kk) {
      let {
        showing: Fk
      } = kk;
      const {
        t: Ik
      } = (0, yk.y)(), {
        isTouchScreen: Tk,
        gameState: ik,
        clientEscMenuOptions: ak
      } = (0, zk.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Lk = (0, FX.f)(), [Zk, jk] = (0, Xk.useState)(IX), ek = kk => {
        IX = kk, jk(kk)
      }, [wk, Hk] = (0, Xk.useState)(!1);
      return (0, Xk.useEffect)((() => {
        Fk || Hk(!1)
      }), [Fk]), (0, tk.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, tk.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, tk.jsx)(mI, {
            className: "CrosshairPreviewStage",
            settings: Lk,
            touch: Tk,
            backdrop: Zk,
            label: Ik("crosshairSettings:preview"),
            children: (0, tk.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, tk.jsx)(dI, {
                backdrop: Zk,
                onChange: ek
              }), (0, tk.jsxs)(qk.Q, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Hk(!0)
                },
                children: [(0, tk.jsx)(lk.e, {
                  name: "expand"
                }), " ", Ik("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, tk.jsx)("div", {
          className: "SettingBox",
          children: (0, tk.jsx)(YI, {
            settings: Lk,
            touch: Tk,
            backdrop: Zk,
            onChange: FX.e
          })
        }), (0, tk.jsx)(kX, {
          settings: Lk,
          onChange: FX.e
        }), Tk && (0, tk.jsx)(xI.c, {
          note: (0, JI.d)(Tk, ak.touchActionButtons) ? Ik("crosshairSettings:touchNote") : void 0
        }), (0, tk.jsx)(vI, {
          settings: Lk,
          onChange: FX.e
        }), wk && (0, tk.jsx)(rI, {
          settings: Lk,
          touch: Tk,
          backdrop: Zk,
          onBackdrop: ek,
          inGame: "inGame" === ik,
          onChange: FX.e,
          onClose: () => {
            Hk(!1)
          }
        })]
      })
    }
    var TX = Ik(8851),
      iX = Ik(1368),
      yX = Ik(4978),
      lX = Ik(34155),
      aX = Ik(4246),
      qX = Ik(1913),
      LX = Ik(734);
    const tX = (0, Xk.memo)((function() {
      const {
        clientEscMenuOptions: kk
      } = (0, zk.j)(["clientEscMenuOptions"]), {
        recording: Fk,
        clipping: Ik,
        hasClipBuffer: Tk
      } = (0, EF.k)("replayRecorder"), yk = (0, EF.i)("connectedGame", (kk => kk.replay)), lk = (0, aX.m)(), ak = !1 === (0, wk.j)("canRecordReplays");
      (0, Xk.useEffect)((() => {
        xk.gameBridge.send("setRecorderPrefs", {
          clipping: kk.enableClipping,
          clipSeconds: kk.clipDurationSeconds
        })
      }), [kk.enableClipping, kk.clipDurationSeconds]);
      const Lk = lk || yk,
        Zk = !Lk && !ak,
        jk = Fk || Zk,
        ek = Zk,
        Hk = ek && Ik && !Fk;

      function Jk() {
        jk && xk.gameBridge.send("toggleRecording", null)
      }
      return (0, tk.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, tk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, tk.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Fk ? (0, tk.jsxs)(tk.Fragment, {
              children: [(0, tk.jsxs)(qk.G, {
                className: "ReplayViewerCategoryButton",
                onClick: Jk,
                disabled: !jk,
                children: [(0, tk.jsx)("span", {
                  children: "Stop Recording"
                }), (0, tk.jsx)(qX.c, {
                  noaAction: "recordGame"
                })]
              }), (0, tk.jsx)(lX.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, tk.jsxs)(qk.d, {
              className: "ReplayViewerCategoryButton",
              onClick: Jk,
              disabled: !jk,
              children: [(0, tk.jsx)("span", {
                children: "Start Recording"
              }), (0, tk.jsx)(qX.c, {
                noaAction: "recordGame"
              })]
            })
          }), ak && (0, tk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Lk && !Fk && (0, tk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, tk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, tk.jsx)(Vk.e, {
            label: "Enable clipping",
            checked: kk.enableClipping,
            disabled: !ek,
            onClick: function(kk) {
              ek && zk.d.setClientEscMenuOptions({
                enableClipping: kk
              })
            },
            className: ik()({
              SettingBoxDisabled: !ek
            })
          }), (0, tk.jsx)(Vk.j, {
            name: "Clip duration (seconds)",
            min: LX.j,
            max: LX.f,
            step: LX.b,
            initValue: kk.clipDurationSeconds,
            onChange: function(kk) {
              zk.d.setClientEscMenuOptions({
                clipDurationSeconds: kk
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !ek || !kk.enableClipping
          })]
        }), (0, tk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, tk.jsxs)(qk.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Hk && xk.gameBridge.send("saveClip", null)
            },
            disabled: !Hk,
            children: [(0, tk.jsx)("span", {
              children: "Record clip"
            }), (0, tk.jsx)(qX.c, {
              noaAction: "recordClip"
            })]
          }), kk.enableClipping && !Tk && ek && !Fk && (0, tk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Fk && (0, tk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, tk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, tk.jsxs)(qk.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, aX.j)(!0), zk.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: lk,
            children: [(0, tk.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, tk.jsx)(qX.c, {
              noaAction: "replayViewerOpen"
            })]
          }), lk && (0, tk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, tk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, tk.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, tk.jsx)("iframe", {
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
    var ZX = Ik(1844);
    const jX = {
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
        icon: () => (0, tk.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, tk.jsx)("path", {
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
      ke: {
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

    function eX() {
      return Promise.all([Ik.e(77), Ik.e(133), Ik.e(132), Ik.e(129)]).then((() => Ik(41082))).then((kk => ({
        default: kk.ShaderPackCategory
      })), (kk => (console.error("Failed to load the shader pack settings", kk), {
        default: wX
      })))
    }

    function wX() {
      const {
        t: kk
      } = (0, yk.y)();
      return (0, tk.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: kk("shaderPack:tabLoadFailed")
      })
    }
    var HX = Ik(1364);
    const JX = (0, Xk.lazy)((() => Ik.e(273).then((() => Ik(41070))).then((kk => ({
        default: kk.BloxdInformation
      }))))),
      xX = (0, Xk.lazy)(eX);

    function PX(kk) {
      return kk ? "general" : "account"
    }
    const KX = new Map,
      QX = (0, Xk.memo)((function(kk) {
        let {
          show: Fk,
          setBeforeResumeCallback: Ik
        } = kk;
        (0, Hk.c)();
        const {
          gameState: Tk,
          openSettingsCategory: ik
        } = (0, zk.j)(["gameState", "openSettingsCategory"]), {
          userContext: ak
        } = (0, ek.d)(), {
          t: Lk
        } = (0, yk.y)(), Qk = (0, jk.c)(), sk = (0, wk.j)("minChunkAddDist"), Vk = "inGame" === Tk, [Sk, Ok] = (0, Xk.useState)(PX(Vk)), [nk, Gk] = (0, Xk.useState)(null), [pk, uk] = (0, Xk.useState)([]), bk = (0, Xk.useRef)(function() {
          const kk = new Date,
            Fk = 6 * (kk.getMonth() + kk.getDate()) % tF.y.length;
          return [...tF.y, ...tF.y].slice(Fk, Fk + 6)
        }()), Rk = (0, Xk.useRef)(null), Uk = (0, UF.f)(iX.i, (0, iX.c)()), Ck = Object.keys(jX).filter((kk => {
          switch (kk) {
            case "replayViewer":
              return Vk;
            case "developerTools":
              return ak.playerHasRank("developer") || !1;
            case "texturePack":
              return Jk.featureFlags.settings.canChangeTexturePack;
            case "ke":
              return Jk.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Jk.featureFlags.useSocialFeatures || null !== ak.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Ek.v;
            case "controller":
              return Jk.featureFlags.useControllerSupport && (Uk || "controller" === Sk);
            default:
              return !0
          }
        }));
        (0, UF.d)("toggleFullCoordinateOverlay", (() => {
          const kk = aI("showCoordinates") && aI("showChunkCoordinates") && aI("showFPS");
          qI("showCoordinates", !kk), qI("showChunkCoordinates", !kk), qI("showFPS", !kk), Qk()
        })), (0, UF.d)("updatedChunkLoadDist", (() => {
          Qk()
        })), (0, Xk.useEffect)((() => {
          if (Gk(null), null === zk.d.get("openSettingsCategory")) {
            const kk = (0, HX.f)() ? KX.get(Vk) : void 0;
            Ok(kk && Ck.includes(kk) ? kk : PX(Vk))
          }
        }), [Fk]), (0, Xk.useEffect)((() => {
          null !== ik && (Ok(ik), KX.set(Vk, ik), zk.d.set({
            openSettingsCategory: null
          }))
        }), [ik, Vk]), (0, Xk.useLayoutEffect)((() => {
          Rk.current && (Rk.current.scrollTop = 0)
        }), [Sk, Fk]), (0, Xk.useEffect)((() => {
          "updateLog" === Sk && (0, Kk.d)().then(uk)
        }), [Sk]), (0, Xk.useEffect)((() => {
          if ((0, FI.Q)(sk)) return;
          const [kk, Fk] = (0, wI.e)(), [Ik, Xk] = (0, mF.c)(sk), Tk = (0, ZX.e)(sk[0], kk, Ik), ik = (0, ZX.e)(sk[1], Fk, Xk);
          xk.gameBridge.send("setChunkAddDistance", {
            horizontal: Tk,
            vertical: ik
          })
        }), [sk]);
        const Nk = (0, Xk.useCallback)((async () => {
          nk && (await nk(), Gk(null))
        }), [nk]);

        function ck() {
          zk.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, Xk.useEffect)((() => {
          Ik((() => Nk))
        }), [Nk, Ik]), (0, tk.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Fk ? {} : {
            display: "none"
          },
          children: [(0, tk.jsx)("div", {
            className: "MenuSideBar",
            children: (0, tk.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, tk.jsx)(Zk, {
                items: Ck.map((kk => {
                  const Fk = jX[kk].icon;
                  return {
                    id: kk,
                    faIcon: "string" === typeof Fk ? Fk : void 0,
                    iconElement: "string" === typeof Fk ? void 0 : (0, tk.jsx)(Fk, {}),
                    title: Lk(jX[kk].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Sk,
                onClick: kk => {
                  !async function(kk) {
                    await Nk(), Ok(kk), KX.set(Vk, kk)
                  }(kk)
                }
              })
            })
          }), (0, tk.jsxs)("div", {
            ref: Rk,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Sk && (0, tk.jsx)(sF, {
              showing: Fk,
              inGame: Vk
            }), "general" === Sk && (0, tk.jsx)(uF, {
              inGame: Vk
            }), "audio" === Sk && (0, tk.jsx)(bF, {}), "notifications" === Sk && (0, tk.jsx)(gF, {}), "graphics" === Sk && (0, tk.jsx)(eI, {
              minChunkAddDist: null !== sk && void 0 !== sk ? sk : [2, 2],
              getValue: aI,
              onChange: qI,
              setApplySettingsCallback: Gk
            }), "controls" === Sk && (0, tk.jsx)(HI.d, {}), "crosshair" === Sk && (0, tk.jsx)(XX, {
              showing: Fk
            }), "controller" === Sk && Jk.featureFlags.useControllerSupport && (0, tk.jsx)(TX.b, {}), Jk.featureFlags.settings.canChangeTexturePack && "texturePack" === Sk && (0, tk.jsx)(yX.d, {
              setApplySettingsCallback: Gk
            }), Jk.featureFlags.settings.canUseShaderPacks && "ke" === Sk && (0, tk.jsx)(Xk.Suspense, {
              fallback: null,
              children: (0, tk.jsx)(xX, {
                setApplySettingsCallback: Gk
              })
            }), "updateLog" === Sk && (0, tk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, tk.jsx)("div", {
                className: "UpdateLogsContainer",
                children: pk.map(((kk, Fk) => (0, tk.jsx)(Pk.b, {
                  updateLog: kk,
                  index: Fk,
                  close: ck
                }, Fk)))
              })
            }), "information" === Sk && (0, tk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, tk.jsx)(Xk.Suspense, {
                fallback: null,
                children: (0, tk.jsx)(JX, {})
              })
            }), "alternativeDomains" === Sk && (0, tk.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, tk.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Lk("settingsMenu:unblockedDomainsDescription")
              }), (0, tk.jsx)("div", {
                className: "AlternativeDomainsList",
                children: bk.current.map((kk => (0, tk.jsxs)(qk.d, {
                  onClick: () => {
                    window.open(`https://${kk}`)
                  },
                  children: [(0, tk.jsx)(lk.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", kk]
                }, kk)))
              })]
            }), "replayViewer" === Sk && (0, tk.jsx)(tX, {}), "developerTools" === Sk && (0, tk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, tk.jsx)(vk, {
                setApplySettingsCallback: Gk
              })
            }), null !== nk && (0, tk.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, tk.jsx)(qk.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: Nk,
                children: Lk("general:apply")
              })
            })]
          })]
        })
      }));
    var sX = Ik(2546);
    const VX = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      zX = (0, Xk.lazy)((() => Promise.resolve().then((() => Ik(4645))).then((kk => {
        kk.needGameClientAfterPaint();
        const Fk = kk.matchmakingLibrariesPromise.then((kk => (0, sX.e)(kk.loadCharacterCustomisationUI(), (kk => kk.CharacterCustomisationUI))));
        return Promise.all([kk.ensureGameSetup(), Fk]).then((kk => {
          let [, Fk] = kk;
          return Fk
        }))
      })))),
      SX = "openCustomisationTab";

    function oX(kk) {
      var Fk, Ik, Tk;
      let {
        show: ik
      } = kk;
      const {
        userContext: yk
      } = (0, ek.d)(), lk = (0, Xk.useRef)(null);
      var ak, qk;
      yk !== Ok.NULL_USER_CONTEXT && (null === (Fk = lk.current) || void 0 === Fk ? void 0 : Fk.whamm) !== yk.whamm && (lk.current = {
        whamm: yk.whamm,
        mountKey: (null !== (ak = null === (qk = lk.current) || void 0 === qk ? void 0 : qk.mountKey) && void 0 !== ak ? ak : -1) + 1
      });
      const [Lk, jk] = (0, Xk.useState)("characters");
      if ((0, UF.d)(SX, jk), !ik) return null;
      const wk = VX.filter((kk => "cape" !== kk && "nameColour" !== kk || yk.getPlayerRanks().includes("super") || (0, Wk.purchasesAllowed)())).map((kk => ({
        id: kk,
        faIcon: tF.H[kk],
        title: tF.K[kk],
        redDot: !1
      })));
      return (0, tk.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, tk.jsx)("div", {
          className: "MenuSideBar",
          children: (0, tk.jsx)(Zk, {
            items: wk,
            selectedItemId: Lk,
            onClick: kk => {
              jk(kk)
            }
          })
        }), (0, tk.jsx)("div", {
          className: "MenuBody",
          children: (0, tk.jsx)(Xk.Suspense, {
            fallback: (0, tk.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, tk.jsx)(sk.c, {})
            }),
            children: (0, tk.jsx)(zX, {
              selectedTab: Lk
            }, null !== (Ik = null === (Tk = lk.current) || void 0 === Tk ? void 0 : Tk.mountKey) && void 0 !== Ik ? Ik : 0)
          })
        })]
      })
    }
    var vX = Ik(1422),
      EX = Ik(1426),
      OX = Ik(34164),
      nX = Ik(4516),
      GX = Ik(3358),
      pX = Ik(3407),
      uX = Ik(34202),
      bX = Ik(8752),
      RX = Ik(34173),
      UX = Ik(34188),
      CX = Ik(1864),
      NX = Ik(1849),
      cX = Ik(4911),
      WX = Ik(1248),
      fX = Ik(1217),
      BX = Ik(1604),
      dX = Ik(8825),
      YX = Ik(2360),
      AX = Ik(2363);

    function gX(kk) {
      return kk ? Object.keys(kk).sort(((Fk, Ik) => {
        var Xk, Tk, ik, yk;
        const lk = (null !== (Xk = null === (Tk = kk[Ik]) || void 0 === Tk ? void 0 : Tk.sortPriority) && void 0 !== Xk ? Xk : 0) - (null !== (ik = null === (yk = kk[Fk]) || void 0 === yk ? void 0 : yk.sortPriority) && void 0 !== ik ? ik : 0);
        return 0 !== lk ? lk : Fk.localeCompare(Ik)
      })) : []
    }
    const mX = [{
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

    function hX(kk) {
      for (const {
          threshold: Fk,
          suffix: Ik
        }
        of mX)
        if (kk >= Fk) {
          const Xk = kk / Fk;
          return Xk >= 100 ? `${Math.floor(Xk)}${Ik}` : Xk >= 10 ? `${Xk.toFixed(1).replace(/\.0$/,"")}${Ik}` : `${Xk.toFixed(2).replace(/\.?0+$/,"")}${Ik}`
        } return String(kk)
    }
    var rX = Ik(5016);
    const DX = {
        normal: "0.8em",
        big: "1em"
      },
      MX = (0, Xk.memo)((function(kk) {
        let {
          item: Fk,
          amount: Ik = 0,
          size: Xk = "normal",
          tier: Tk = null
        } = kk;
        return (0, tk.jsx)("div", {
          className: ik()("SmpSlot", `SmpSlot-${Xk}`),
          children: Fk && (0, tk.jsx)(CX.d, {
            itemName: Fk,
            amount: Ik > 1 ? Ik : 0,
            amountFontSize: DX[Xk],
            enchantmentTier: Tk
          })
        })
      }));

    function kT(kk) {
      let {
        amount: Fk,
        exact: Ik = !1,
        className: Xk
      } = kk;
      return (0, tk.jsxs)("span", {
        className: ik()("SmpGold", Xk),
        children: [(0, tk.jsx)("span", {
          className: "SmpCoin",
          children: (0, tk.jsx)(CX.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Ik ? Fk.toLocaleString("en-US") : hX(Fk)]
      })
    }

    function FT(kk) {
      let {
        count: Fk = 5,
        grid: Ik = !1
      } = kk;
      return (0, tk.jsx)("div", {
        className: Ik ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Fk
        }, ((kk, Fk) => (0, tk.jsxs)("div", {
          className: ik()(Ik ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, tk.jsx)("div", {
            className: ik()("SmpSlot", Ik ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, tk.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, tk.jsx)("b", {}), (0, tk.jsx)("small", {})]
          }), (0, tk.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Fk)))
      })
    }

    function IT(kk) {
      let {
        title: Fk,
        children: Ik
      } = kk;
      return (0, tk.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, tk.jsx)("b", {
          children: Fk
        }), Ik && (0, tk.jsx)("small", {
          children: Ik
        })]
      })
    }

    function XT(kk) {
      let {
        entry: Fk
      } = kk;
      return (0, tk.jsx)(IT, {
        title: (0, tk.jsx)(NX.c, {
          text: Fk.item.customTitle
        }),
        children: (0, tk.jsx)(NX.c, {
          text: Fk.item.description
        })
      })
    }

    function TT(kk) {
      return (0, tk.jsx)(rX.b, {
        ...kk,
        className: ik()("SmpChoice", kk.className),
        reselectable: !0
      })
    }

    function iT() {
      return (0, tk.jsx)("span", {
        className: "SmpLoader",
        children: (0, tk.jsx)(sk.c, {})
      })
    }

    function yT(kk) {
      let {
        value: Fk,
        onChange: Ik,
        min: Tk = 1,
        max: ik,
        step: yk = 1,
        label: lk
      } = kk;
      const ak = (0, Xk.useRef)(null),
        qk = (0, Xk.useRef)(Fk);
      qk.current = Fk;
      const [Lk, Zk] = (0, Xk.useState)(null), jk = kk => Math.max(Tk, Math.min(ik, Math.floor(kk))), ek = kk => {
        const Fk = qk.current,
          Xk = "function" === typeof yk ? yk(Fk, kk) : yk,
          Tk = jk(Fk + Xk * kk);
        qk.current = Tk, Ik(Tk)
      };
      (0, Xk.useEffect)((() => {
        if (null === Lk) return;
        let kk;
        const Fk = () => {
            Zk(null)
          },
          Ik = setTimeout((() => {
            kk = setInterval((() => {
              ek(Lk);
              const kk = qk.current;
              (Lk > 0 ? kk >= ik : kk <= Tk) && Fk()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Fk), window.addEventListener("pointercancel", Fk), window.addEventListener("blur", Fk), () => {
          clearTimeout(Ik), clearInterval(kk), window.removeEventListener("pointerup", Fk), window.removeEventListener("pointercancel", Fk), window.removeEventListener("blur", Fk)
        }
      }), [Lk]), (0, Xk.useEffect)((() => {
        const kk = ak.current;
        kk && document.activeElement !== kk && kk.value !== String(Fk) && (kk.value = String(Fk))
      }), [Fk]), (0, Xk.useEffect)((() => {
        const kk = ak.current;
        if (!kk) return;
        const Fk = () => {
          kk.value = String(qk.current)
        };
        return kk.addEventListener("blur", Fk), () => {
          kk.removeEventListener("blur", Fk)
        }
      }), []);
      const wk = kk => (0, tk.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${kk>0?"More":"Less"} ${lk}`,
        disabled: kk > 0 ? Fk >= ik : Fk <= Tk,
        onPointerDown: Fk => {
          0 === Fk.button && (ek(kk), Zk(kk))
        },
        onKeyDown: Fk => {
          "Enter" !== Fk.key && " " !== Fk.key || ek(kk)
        },
        onContextMenu: kk => {
          kk.preventDefault()
        },
        children: kk > 0 ? "+" : "\u2212"
      });
      return (0, tk.jsxs)("div", {
        className: "SmpStepper",
        children: [wk(-1), (0, tk.jsx)(Qk.c, {
          className: "SmpStepperInput",
          domRef: ak,
          defaultValue: String(Fk),
          ariaLabel: lk,
          type: "text",
          blurOnEnter: !0,
          onValueChange: kk => {
            const Fk = kk.replace(/[^\d]/g, "");
            ak.current && Fk !== kk && (ak.current.value = Fk), "" !== Fk && Ik(jk(Number(Fk)))
          }
        }), wk(1)]
      })
    }

    function lT(kk) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, kk))) - 1))
    }
    var aT = Ik(34193),
      qT = Ik(1231);
    const LT = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    qT.A, Nk.Mc.length;
    new Map;
    var tT = Ik(3229);

    function ZT(kk, Fk) {
      var Ik;
      return Fk && (null === (Ik = kk[Fk]) || void 0 === Ik ? void 0 : Ik.smp) || null
    }

    function jT(kk, Fk) {
      const Ik = [];
      for (const Tk of gX(kk)) {
        var Xk;
        const ik = kk[Tk];
        (null === (Xk = ik.smp) || void 0 === Xk ? void 0 : Xk.kind) === Fk && Ik.push({
          key: Tk,
          item: ik,
          meta: ik.smp
        })
      }
      return Ik
    }

    function eT(kk, Fk) {
      var Ik;
      return null !== (Ik = jT(kk, Fk)[0]) && void 0 !== Ik ? Ik : null
    }
    const wT = "50% 0% 50% 0%",
      HT = [{
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

    function JT(kk) {
      const Fk = kk - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Ik,
          suffix: Xk
        }
        of HT)
        if (Fk >= Ik) return `${Math.floor(Fk/Ik)}${Xk}`;
      return "<1s"
    }

    function xT(kk) {
      const Fk = kk.map(bX.e),
        Ik = [];
      return Fk.forEach(((kk, Xk) => {
        const Tk = function(kk) {
            const Fk = kk.match(/\d+/);
            return Fk ? Number(Fk[0]) : 0
          }(kk),
          ik = Xk === Fk.length - 1;
        (ik || 1 === Tk || 10 === Tk || 100 === Tk) && Ik.push({
          label: kk,
          quantity: Tk,
          isAll: ik
        })
      })), Ik
    }
    let PT = null;

    function KT(kk, Fk) {
      const Ik = Fk.trim().toLowerCase();
      if (!Ik) return [];
      const Xk = kk => {
          if (kk === Ik) return 0;
          if (kk.startsWith(Ik)) return 1;
          const Fk = kk.indexOf(Ik);
          return -1 === Fk ? -1 : 2 + Fk
        },
        Tk = [];
      for (const lk of kk) {
        const kk = [Xk(lk.lowerLabel), Xk(lk.lowerName)].filter((kk => -1 !== kk));
        kk.length && Tk.push({
          item: lk,
          rank: Math.min(...kk)
        })
      }
      if (Tk.length > 0) return Tk.sort(((kk, Fk) => kk.rank - Fk.rank)).map((kk => kk.item));
      const ik = [...Ik],
        yk = kk => {
          let Fk = 0;
          for (const Ik of ik) {
            if (Fk = kk.indexOf(Ik, Fk), -1 === Fk) return !1;
            Fk++
          }
          return !0
        };
      return kk.filter((kk => yk(kk.lowerLabel) || yk(kk.lowerName)))
    }

    function QT(kk, Fk) {
      var Ik;
      return null !== (Ik = null === kk || void 0 === kk ? void 0 : kk[Fk]) && void 0 !== Ik ? Ik : Fk
    }

    function sT(kk, Fk) {
      const Ik = kk.userInput;
      return void 0 !== Fk && "dropdown" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) && Ik.dropdownOptions.map(bX.e).includes(Fk) ? Fk : function(kk) {
        const Fk = kk.userInput;
        if ("dropdown" !== (null === Fk || void 0 === Fk ? void 0 : Fk.type) || 0 === Fk.dropdownOptions.length) return null;
        const Ik = Fk.dropdownOptions.map(bX.e);
        return Fk.initialValue && Ik.includes(Fk.initialValue) ? Fk.initialValue : Ik[Ik.length - 1]
      }(kk)
    }

    function VT(kk) {
      return void 0 === kk ? "" : JSON.stringify(kk)
    }
    const zT = (0, Xk.createContext)(null);

    function ST() {
      return (0, Xk.useContext)(zT)
    }
    var oT = Ik(2637);
    const vT = (0, Xk.memo)((function(kk) {
        let {
          name: Fk,
          label: Ik,
          onPick: Xk
        } = kk;
        return (0, tk.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Ik,
          onClick: () => {
            Xk(Fk)
          },
          children: [(0, tk.jsx)(MX, {
            item: Fk,
            size: "big"
          }), (0, tk.jsx)("span", {
            children: Ik
          })]
        })
      })),
      ET = (0, Xk.memo)((function(kk) {
        let {
          items: Fk,
          query: Ik,
          onPick: Tk
        } = kk;
        const {
          t: ik
        } = (0, yk.y)(), [lk, ak] = (0, Xk.useState)(new Set), qk = (0, Xk.useMemo)((() => function(kk) {
          const Fk = new Map;
          for (const Ik of kk) {
            let kk = Fk.get(Ik.category);
            kk || (kk = [], Fk.set(Ik.category, kk)), kk.push(Ik)
          }
          return [...LT, "other"].filter((kk => Fk.has(kk))).map((kk => ({
            category: kk,
            items: Fk.get(kk)
          })))
        }(Fk)), [Fk]), Lk = (0, Xk.useMemo)((() => KT(Fk, Ik).slice(0, 60)), [Fk, Ik]);
        return Ik.trim() ? 0 === Lk.length ? (0, tk.jsx)(IT, {
          title: ik("smpShop:noItemsFound", {
            query: Ik.trim()
          }),
          children: ik("smpShop:tryShorterName")
        }) : (0, tk.jsx)(oT.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: wT,
          observerUpdateDeps: [Ik],
          children: Lk.map((kk => (0, tk.jsx)(vT, {
            name: kk.name,
            label: kk.label,
            onPick: Tk
          }, kk.name)))
        }) : (0, tk.jsx)(tk.Fragment, {
          children: qk.map((kk => {
            let {
              category: Fk,
              items: Ik
            } = kk;
            const Xk = lk.has(Fk) || Ik.length <= 48,
              yk = Xk ? Ik : Ik.slice(0, 48);
            return (0, tk.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, tk.jsxs)("h4", {
                children: [ik("other" === Fk ? "smpShop:otherItems" : `creativeInventory:${Fk}`), !Xk && (0, tk.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    ak(new Set([...lk, Fk]))
                  },
                  children: ik("smpShop:showAll", {
                    count: Ik.length
                  })
                })]
              }), (0, tk.jsx)(oT.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: wT,
                observerUpdateDeps: [Xk],
                children: yk.map((kk => (0, tk.jsx)(vT, {
                  name: kk.name,
                  label: kk.label,
                  onPick: Tk
                }, kk.name)))
              })]
            }, Fk)
          }))
        })
      }));

    function OT(kk, Fk) {
      const {
        searched: Ik,
        shown: Tk,
        searchFor: ik,
        loading: yk
      } = function(kk, Fk) {
        var Ik;
        const Tk = ST(),
          [ik, yk] = (0, Xk.useState)(void 0),
          lk = (0, Xk.useRef)(void 0),
          ak = (0, Xk.useRef)(0),
          qk = (0, Xk.useRef)(void 0),
          Lk = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.meta.item) && void 0 !== Ik ? Ik : null,
          tk = !!kk && Tk.isPending(kk.key);
        (0, Xk.useEffect)((() => {
          if (!kk || tk || !Fk || void 0 === ik || ik === Lk) return;
          const Ik = ik === lk.current && Tk.gaveUpAt(kk.key) > ak.current && qk.current !== ik;
          (ik !== lk.current || Ik) && Tk.act(kk.key, null !== ik && void 0 !== ik ? ik : "*", Ik) && (Ik && (qk.current = ik), lk.current = ik, ak.current = Date.now())
        }), [kk, tk, Fk, ik, Lk, Tk]);
        const Zk = (0, Xk.useCallback)((kk => {
            lk.current = void 0, qk.current = void 0, yk(kk)
          }), []),
          jk = void 0 !== ik && ik !== Lk && (tk || lk.current !== ik);
        return {
          searched: Lk,
          shown: jk ? ik : Lk,
          searchFor: Zk,
          loading: jk || tk || null !== Lk && !Fk
        }
      }(kk, Fk), lk = (0, Xk.useMemo)((() => function() {
        var kk;
        let Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Tk = `${(0,tT.k)()}\x1f${Fk.join("\x1e")}\x1f${Ik.join("\x1e")}\x1f${JSON.stringify(Xk)}`;
        if ((null === (kk = PT) || void 0 === kk ? void 0 : kk.key) === Tk) return PT.items;
        const ik = new Set(Ik),
          yk = new Set,
          lk = [],
          ak = (kk, Fk) => {
            var Ik;
            if (!kk || yk.has(kk) || ik.has(kk)) return;
            yk.add(kk);
            const Tk = null !== (Ik = Xk[kk]) && void 0 !== Ik ? Ik : kk;
            lk.push({
              name: kk,
              label: Tk,
              lowerLabel: Tk.toLowerCase(),
              lowerName: kk.toLowerCase(),
              category: Fk
            })
          };
        for (const Lk of (0, aT.creativeItemIds)()) {
          var qk;
          (0, aT.itemIsDisabled)(Lk, !0, !0, !1) || (0, aT.showOnlyInCreativeSearch)(Lk) || ak((0, tT.i)(Lk), null !== (qk = (0, aT.creativeCategoryOf)(Lk)) && void 0 !== qk ? qk : "other")
        }
        for (const Lk of Fk) ak(Lk, "other");
        return PT = {
          key: Tk,
          items: lk
        }, lk
      }(null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names)), [null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names]), [ak, qk] = (0, Xk.useState)(""), [Lk, tk] = (0, Xk.useState)(0), [Zk, jk] = (0, Xk.useState)("recent"), ek = (0, Xk.useCallback)((kk => {
        qk(""), tk((kk => kk + 1)), ik(kk)
      }), [ik]), wk = "browse" === Zk || "" !== ak.trim();
      return {
        searched: Ik,
        shown: Tk,
        searchFor: ik,
        loading: yk,
        catalogue: lk,
        names: null === kk || void 0 === kk ? void 0 : kk.meta.names,
        query: ak,
        setQuery: qk,
        searchBoxKey: Lk,
        pickItem: ek,
        setView: jk,
        browsing: wk
      }
    }

    function nT(kk) {
      let {
        browser: Fk,
        children: Ik
      } = kk;
      const {
        t: Xk
      } = (0, yk.y)(), Tk = ST();
      return (0, tk.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, tk.jsx)("div", {
          className: "SmpSearch",
          children: (0, tk.jsx)(Qk.c, {
            className: "SmpSearchInput",
            placeholderText: Xk("smpShop:searchPlaceholder"),
            defaultValue: Fk.query,
            onValueChange: kk => {
              Fk.setQuery(kk), Fk.searched && kk.trim() && Fk.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const kk = KT(Fk.catalogue, Fk.query)[0];
              kk ? Fk.pickItem(kk.name) : Fk.query.trim() && Tk.notify(Xk("smpShop:noItemsFound", {
                query: Fk.query.trim()
              }))
            }
          }, Fk.searchBoxKey)
        }), Ik]
      })
    }

    function GT(kk) {
      let {
        browser: Fk,
        recentLabel: Ik,
        children: Xk
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)();
      return (0, tk.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, tk.jsx)(TT, {
          options: [{
            value: "recent",
            label: Ik
          }, {
            value: "browse",
            label: Tk("smpShop:browseItems")
          }],
          value: Fk.browsing ? "browse" : "recent",
          onChange: Fk.setView,
          ariaLabel: Tk("smpShop:show")
        }), !Fk.browsing && Xk]
      })
    }

    function pT(kk) {
      let {
        item: Fk,
        names: Ik,
        summary: Xk,
        onBack: Tk,
        children: ik
      } = kk;
      const {
        t: lk
      } = (0, yk.y)();
      return (0, tk.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, tk.jsx)(qk.c, {
          className: "SmpBackButton",
          onClick: Tk,
          children: lk("general:back")
        }), (0, tk.jsx)(MX, {
          item: Fk,
          size: "big"
        }), (0, tk.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, tk.jsx)("b", {
            children: QT(Ik, Fk)
          }), Xk && (0, tk.jsx)("small", {
            children: Xk
          })]
        }), ik]
      })
    }

    function uT(kk) {
      let {
        browser: Fk,
        className: Ik,
        action: Xk,
        above: Tk,
        list: yk,
        summary: lk,
        recentLabel: ak,
        listControls: qk,
        onBack: Lk
      } = kk;
      return (0, tk.jsxs)("div", {
        className: ik()("SmpScreen", Ik),
        children: [(0, tk.jsx)(nT, {
          browser: Fk,
          children: Xk
        }), Fk.shown && (0, tk.jsx)(pT, {
          item: Fk.shown,
          names: Fk.names,
          summary: !Fk.loading && lk,
          onBack: () => {
            null === Lk || void 0 === Lk || Lk(), Fk.searchFor(null)
          },
          children: qk
        }), Tk, Fk.shown ? yk : (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsx)(GT, {
            browser: Fk,
            recentLabel: ak,
            children: qk
          }), Fk.browsing ? (0, tk.jsx)(ET, {
            items: Fk.catalogue,
            query: Fk.query,
            onPick: Fk.pickItem
          }) : yk]
        })]
      })
    }

    function bT(kk, Fk) {
      const Ik = kk.map((kk => {
        let {
          meta: Fk
        } = kk;
        return Fk.pricePerItem
      }));
      return "min" === Fk ? Math.min(...Ik) : Math.max(...Ik)
    }
    var RT = Ik(6566);
    const UT = (0, Xk.memo)((function(kk) {
      var Fk;
      const {
        t: Ik
      } = (0, yk.y)(), Xk = null === kk.seller, Tk = kk.quantity * kk.pricePerItem;
      return (0, tk.jsxs)("div", {
        className: kk.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, tk.jsx)(MX, {
          item: kk.item,
          amount: kk.quantity,
          size: kk.grid ? "big" : "normal",
          tier: kk.tier
        }), (0, tk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, tk.jsx)("b", {
            children: (0, tk.jsx)(NX.c, {
              text: null !== (Fk = kk.title) && void 0 !== Fk ? Fk : `${kk.quantity}x ${kk.item}`
            })
          }), (0, tk.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, tk.jsx)("span", {
              children: Xk ? Ik("smpShop:you") : (0, tk.jsx)(NX.c, {
                text: [{
                  entityName: kk.seller
                }]
              })
            }), (0, tk.jsx)("span", {
              children: Ik("smpShop:timeLeft", {
                time: JT(kk.expiresAt)
              })
            })]
          })]
        }), (0, tk.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, tk.jsx)(kT, {
            amount: kk.pricePerItem
          }), (0, tk.jsx)("small", {
            children: Ik("smpShop:each")
          })]
        }), (0, tk.jsx)(qk.d, {
          className: "SmpBuyButton",
          disabled: Xk || !kk.canAfford && !kk.busy,
          loading: kk.busy,
          onClick: () => {
            kk.onBuy(kk.itemKey)
          },
          children: Xk ? Ik("smpShop:yours") : (0, tk.jsx)(kT, {
            amount: Tk
          })
        })]
      })
    }));

    function CT(kk) {
      let {
        view: Fk,
        onChange: Ik
      } = kk;
      const {
        t: Xk
      } = (0, yk.y)();
      return (0, tk.jsx)(rX.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Xk("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, tk.jsx)(lk.e, {
            name: "list"
          }),
          ariaLabel: Xk("smpShop:listView")
        }, {
          value: "grid",
          label: (0, tk.jsx)(lk.e, {
            name: "grid-2"
          }),
          ariaLabel: Xk("smpShop:gridView")
        }],
        value: Fk,
        onChange: Ik
      })
    }

    function NT(kk) {
      let {
        entries: Fk,
        view: Ik
      } = kk;
      const {
        t: Xk
      } = (0, yk.y)(), Tk = ST(), ik = "grid" === Ik;
      return (0, tk.jsxs)(tk.Fragment, {
        children: [!ik && (0, tk.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, tk.jsx)("span", {}), (0, tk.jsx)("span", {
            children: Xk("smpShop:columnItem")
          }), (0, tk.jsx)("span", {
            children: Xk("smpShop:columnPriceEach")
          }), (0, tk.jsx)("span", {
            children: Xk("smpShop:columnTotal")
          })]
        }), (0, tk.jsx)(oT.b, {
          lazyLoadedClassName: ik ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: wT,
          observerUpdateDeps: [Fk.length],
          children: Fk.map((kk => {
            var Fk, Ik;
            let {
              key: Xk,
              item: yk,
              meta: lk
            } = kk;
            const ak = lk.quantity * lk.pricePerItem;
            return (0, tk.jsx)(UT, {
              itemKey: Xk,
              item: lk.item,
              title: yk.customTitle,
              quantity: lk.quantity,
              pricePerItem: lk.pricePerItem,
              seller: lk.seller,
              expiresAt: lk.expiresAt,
              tier: null !== (Fk = null === (Ik = yk.enchant) || void 0 === Ik ? void 0 : Ik.tier) && void 0 !== Fk ? Fk : null,
              busy: Tk.isPending(Xk) || null !== lk.seller && !1 === yk.canBuy,
              canAfford: Tk.canAfford(yk, ak),
              grid: ik,
              onBuy: Tk.act
            }, Xk)
          }))
        }, Ik)]
      })
    }
    const cT = [1, 10, 100],
      WT = [1, 10, 100, 999];

    function fT(kk) {
      var Fk, Ik, Tk, ak, Lk, Zk, jk, ek, wk, Hk;
      const {
        t: Jk
      } = (0, yk.y)(), xk = ST(), {
        creator: Pk,
        mode: Kk
      } = kk, [sk, Vk] = (0, Xk.useState)(null !== (Fk = null === Pk || void 0 === Pk ? void 0 : Pk.meta.item) && void 0 !== Fk ? Fk : null), [zk, Sk] = (0, Xk.useState)(1), [vk, Ek] = (0, Xk.useState)(0), [Ok, nk] = (0, Xk.useState)(""), [Gk, pk] = (0, Xk.useState)(0), uk = (0, Xk.useRef)(sk), bk = (0, Xk.useRef)(!1), [Rk, Uk] = (0, Xk.useState)(!1), Ck = null !== (Ik = null === Pk || void 0 === Pk ? void 0 : Pk.meta.item) && void 0 !== Ik ? Ik : null, Nk = null !== (Tk = null === Pk || void 0 === Pk ? void 0 : Pk.meta.owned) && void 0 !== Tk ? Tk : 0;
      (0, Xk.useEffect)((() => {
        kk.searching || null === Ck || Ck === uk.current || (uk.current = Ck, bk.current = !1, Vk(Ck), Ek(0), Sk("list" === Kk ? Math.max(1, Nk) : 1))
      }), [Ck, kk.searching]);
      const ck = !!Pk && !!sk && Pk.meta.item === sk,
        Wk = ck ? Pk.meta.owned : null !== (ak = null === (Lk = kk.inventory) || void 0 === Lk || null === (Zk = Lk.find((kk => kk.item === sk))) || void 0 === Zk ? void 0 : Zk.quantity) && void 0 !== ak ? ak : 0,
        fk = "list" === Kk ? Math.max(1, Wk) : 45954,
        Bk = null !== (jk = kk.prices[0]) && void 0 !== jk ? jk : null,
        dk = kk.prices.length ? Math.round(kk.prices.reduce(((kk, Fk) => kk + Fk), 0) / kk.prices.length) : null,
        Yk = null === (ek = kk.inventory) || void 0 === ek || null === (wk = ek.find((kk => kk.item === sk))) || void 0 === wk ? void 0 : wk.sellPrice;
      (0, Xk.useEffect)((() => {
        var kk;
        ck && (Sk((kk => "list" === Kk ? Math.min(Math.max(1, kk), Math.max(1, Wk)) : kk)), bk.current || Ek(null !== (kk = null !== Bk && void 0 !== Bk ? Bk : dk) && void 0 !== kk ? kk : Math.max(1, null !== Yk && void 0 !== Yk ? Yk : 1)))
      }), [ck, Wk, sk, Bk, dk]);
      const Ak = kk => {
          bk.current = !0, Ek(kk)
        },
        gk = Fk => {
          var Ik, Xk, Tk;
          uk.current = Fk, bk.current = !1, Uk(!1), nk(""), pk((kk => kk + 1)), Vk(Fk), Ek(0), Sk("list" === Kk && null !== (Ik = null === (Xk = kk.inventory) || void 0 === Xk || null === (Tk = Xk.find((kk => kk.item === Fk))) || void 0 === Tk ? void 0 : Tk.quantity) && void 0 !== Ik ? Ik : 1), (null === Pk || void 0 === Pk ? void 0 : Pk.meta.item) !== Fk && kk.onPickItem(Fk)
        },
        mk = zk * vk,
        hk = "list" === Kk && null !== Pk && void 0 !== Pk && Pk.meta.fee ? function(kk, Fk) {
          const Ik = Math.max(0, Fk - kk.taxFreeAllowance);
          return Math.ceil(Math.round(Ik * kk.rate * 1e6) / 1e6)
        }(Pk.meta.fee, mk) : 0,
        rk = !!Pk && xk.isPending(Pk.key),
        Dk = ck && !kk.searching && zk >= 1 && vk >= 1 && ("order" === Kk || Wk >= zk) && !rk,
        Mk = !!sk && !ck && !kk.searching && zk >= 1 && vk >= 1,
        kF = () => {
          Dk ? xk.act(Pk.key, `${zk}|${vk}`) : Mk && (kk.onPickItem(sk), Uk(!0))
        };
      (0, Xk.useEffect)((() => {
        Rk && ck && !kk.searching && (Uk(!1), kF())
      }), [Rk, ck, kk.searching]);
      const FF = !!sk && !ck && (kk.searching || Rk),
        IF = sk ? QT(kk.names, sk) : "",
        XF = (0, Xk.useMemo)((() => KT(kk.catalogue, Ok).slice(0, 8)), [kk.catalogue, Ok]),
        TF = ("list" === Kk ? cT.filter((kk => kk < Wk)) : WT).map((kk => ({
          value: kk,
          label: String(kk)
        })));
      "list" === Kk && Wk > 0 && TF.push({
        value: Wk,
        label: Jk("smpShop:all", {
          count: Wk
        })
      });
      const iF = [];
      return null !== Bk && (Bk > 1 && iF.push({
        value: Bk - 1,
        label: Jk("smpShop:undercut", {
          price: hX(Bk - 1)
        })
      }), iF.push({
        value: Bk,
        label: Jk("smpShop:lowest", {
          price: hX(Bk)
        })
      })), null !== dk && dk !== Bk && iF.push({
        value: dk,
        label: Jk("smpShop:average", {
          price: hX(dk)
        })
      }), (0, tk.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, tk.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, tk.jsx)("b", {
            children: Jk("list" === Kk ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, tk.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Jk("smpShop:close"),
            onClick: kk.onClose,
            children: (0, tk.jsx)(lk.e, {
              name: "xmark"
            })
          })]
        }), "list" === Kk && (0, tk.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Hk = kk.inventory) && void 0 !== Hk && Hk.length ? kk.inventory.map((kk => {
            let {
              item: Fk,
              quantity: Ik
            } = kk;
            return (0, tk.jsx)("button", {
              type: "button",
              title: Fk,
              className: ik()("SmpPickerSlot", {
                SmpPickerSlotOn: Fk === sk
              }),
              onClick: () => {
                gk(Fk)
              },
              children: (0, tk.jsx)(MX, {
                item: Fk,
                amount: Ik
              })
            }, Fk)
          })) : (0, tk.jsx)("span", {
            className: "SmpMuted",
            children: Jk("smpShop:nothingToList")
          })
        }), ("list" === Kk || !sk) && (0, tk.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, tk.jsx)(Qk.c, {
            className: "SmpSearchInput",
            placeholderText: Jk("list" === Kk ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Ok,
            onValueChange: nk,
            blurOnEnter: !0,
            onEnter: () => {
              XF[0] && gk(XF[0].name)
            }
          }, Gk), XF.length > 0 && (0, tk.jsx)("div", {
            className: "SmpPicker",
            children: XF.map((kk => {
              let {
                name: Fk
              } = kk;
              return (0, tk.jsx)("button", {
                type: "button",
                title: Fk,
                className: ik()("SmpPickerSlot", {
                  SmpPickerSlotOn: Fk === sk
                }),
                onClick: () => {
                  gk(Fk)
                },
                children: (0, tk.jsx)(MX, {
                  item: Fk
                })
              }, Fk)
            }))
          })]
        }), sk && (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsxs)("div", {
            className: "SmpPickedName",
            children: [IF, FF && (0, tk.jsx)(iT, {})]
          }), (0, tk.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, tk.jsxs)("div", {
              className: "SmpField",
              children: [(0, tk.jsxs)("span", {
                children: [Jk("smpShop:quantity"), "list" === Kk && ck && (0, tk.jsx)("small", {
                  children: Jk("smpShop:youHave", {
                    count: Wk
                  })
                })]
              }), (0, tk.jsx)(yT, {
                value: zk,
                onChange: Sk,
                max: fk,
                label: Jk("smpShop:quantity")
              }), (0, tk.jsx)(TT, {
                options: TF,
                value: zk,
                onChange: Sk,
                ariaLabel: Jk("smpShop:quantity")
              })]
            }), (0, tk.jsxs)("div", {
              className: "SmpField",
              children: [(0, tk.jsx)("span", {
                children: Jk("smpShop:pricePerItem")
              }), (0, tk.jsx)(yT, {
                value: Math.max(1, vk),
                onChange: Ak,
                max: 9999999,
                step: lT,
                label: Jk("smpShop:pricePerItem")
              }), (0, tk.jsx)(TT, {
                options: iF,
                value: vk,
                onChange: Ak,
                ariaLabel: Jk("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Kk && (0, tk.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, tk.jsxs)("span", {
              children: [Jk("smpShop:youGet"), " ", (0, tk.jsx)(kT, {
                amount: Math.max(0, mk - hk),
                exact: !0
              })]
            }), (0, tk.jsx)("small", {
              children: hk > 0 ? Jk("smpShop:listingFee", {
                fee: hk.toLocaleString("en-US")
              }) : Jk("smpShop:listingRules")
            })]
          }), (0, tk.jsx)(qk.q, {
            className: "SmpSubmit",
            disabled: !Dk && !Mk && !rk,
            loading: rk || FF || ck && kk.searching,
            onClick: kF,
            children: "list" === Kk ? Jk("smpShop:listButton", {
              count: zk,
              item: IF
            }) : (0, tk.jsxs)(tk.Fragment, {
              children: [Jk("smpShop:orderButton", {
                count: zk,
                item: IF
              }), " ", vk >= 1 && (0, tk.jsx)(kT, {
                amount: mk
              })]
            })
          })]
        })]
      })
    }

    function BT() {
      var kk;
      const {
        t: Fk
      } = (0, yk.y)(), Ik = ST(), Tk = null === (kk = Ik.shopInfo[Ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, ik = eT(Tk, "search"), lk = eT(Tk, "creator"), ak = jT(Tk, "enchantedCreator"), Lk = jT(Tk, "listing"), Zk = eT(Tk, "empty"), jk = OT(ik, Lk.length > 0 || null !== Zk), {
        searched: ek,
        shown: wk,
        loading: Hk
      } = jk, [Jk, xk] = (0, Xk.useState)(!1), [Pk, Kk] = function() {
        const [kk, Fk] = (0, RT.b)("smpMarketView", "list");
        return ["grid" === kk ? "grid" : "list", Fk]
      }(), Qk = "grid" === Pk, sk = (0, Xk.useMemo)((() => Lk.filter((kk => {
        let {
          meta: Fk
        } = kk;
        return null !== Fk.seller && Fk.item === ek
      })).map((kk => {
        let {
          meta: Fk
        } = kk;
        return Fk.pricePerItem
      })).sort(((kk, Fk) => kk - Fk))), [Lk, ek]), Vk = (0, Xk.useMemo)((() => {
        const kk = new Set(jk.catalogue.map((kk => {
          let {
            name: Fk
          } = kk;
          return Fk
        })));
        return function(kk) {
          for (const Fk in kk)
            if ("sell" === kk[Fk].smp) return jT(kk[Fk].items, "sell").filter((kk => {
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
        }(Ik.shopInfo).filter((Fk => {
          let {
            item: Ik
          } = Fk;
          return kk.has(Ik)
        }))
      }), [Ik.shopInfo, jk.catalogue]);
      return (0, tk.jsx)(uT, {
        browser: jk,
        className: "SmpMarketTab",
        recentLabel: Fk("smpShop:recentlyListed"),
        action: (0, tk.jsx)(qk.q, {
          className: "SmpSellButton",
          onClick: () => {
            xk((kk => !kk))
          },
          children: Fk("smpShop:sell")
        }),
        above: Jk && (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsx)(fT, {
            mode: "list",
            creator: lk,
            inventory: Vk,
            catalogue: jk.catalogue,
            names: jk.names,
            searching: Hk,
            prices: sk,
            onPickItem: jk.searchFor,
            onClose: () => {
              xk(!1)
            }
          }), ak.length > 0 && (0, tk.jsx)(dT, {
            entries: ak
          })]
        }),
        listControls: (0, tk.jsx)(CT, {
          view: Pk,
          onChange: Kk
        }),
        summary: wk && (Lk.length > 0 ? Fk(1 === Lk.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Lk.length,
          price: hX(bT(Lk, "min"))
        }) : Fk("smpShop:noOneSelling", {
          item: QT(jk.names, wk)
        })),
        list: Hk ? (0, tk.jsx)(FT, {
          grid: Qk
        }) : Lk.length > 0 ? (0, tk.jsx)(NT, {
          entries: Lk,
          view: Pk
        }) : Zk ? (0, tk.jsx)(XT, {
          entry: Zk
        }) : (0, tk.jsx)(FT, {
          count: 3,
          grid: Qk
        })
      })
    }

    function dT(kk) {
      let {
        entries: Fk
      } = kk;
      const {
        t: Ik
      } = (0, yk.y)(), Tk = ST(), [ik, lk] = (0, Xk.useState)({});
      return (0, tk.jsx)("div", {
        className: "SmpList",
        children: Fk.map((kk => {
          var Fk, Xk, yk;
          let {
            key: ak,
            item: Lk,
            meta: Zk
          } = kk;
          const jk = null !== (Fk = ik[ak]) && void 0 !== Fk ? Fk : 1;
          return (0, tk.jsxs)("div", {
            className: "SmpRow",
            children: [(0, tk.jsx)(MX, {
              item: Zk.item,
              amount: Zk.quantity,
              tier: null !== (Xk = null === (yk = Lk.enchant) || void 0 === yk ? void 0 : yk.tier) && void 0 !== Xk ? Xk : null
            }), (0, tk.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, tk.jsx)("b", {
                children: (0, tk.jsx)(NX.c, {
                  text: Lk.customTitle
                })
              }), (0, tk.jsx)("small", {
                children: Ik("smpShop:enchantedListing")
              })]
            }), (0, tk.jsx)(yT, {
              value: jk,
              onChange: kk => {
                lk({
                  ...ik,
                  [ak]: kk
                })
              },
              max: 9999999,
              step: lT,
              label: Ik("smpShop:pricePerItem")
            }), (0, tk.jsxs)(qk.q, {
              loading: Tk.isPending(ak),
              onClick: () => {
                Tk.act(ak, String(jk))
              },
              children: [Ik("smpShop:list"), " ", (0, tk.jsx)(kT, {
                amount: jk
              })]
            })]
          }, ak)
        }))
      })
    }
    const YT = (0, Xk.memo)((function(kk) {
      let {
        itemKey: Fk,
        item: Ik,
        quantity: Xk,
        pricePerItem: Tk,
        tier: yk,
        selected: lk,
        onSelect: ak
      } = kk;
      return (0, tk.jsxs)("button", {
        type: "button",
        className: ik()("SmpInventorySlot", {
          SmpInventorySlotOn: lk
        }),
        title: Ik,
        onClick: () => {
          ak(Fk)
        },
        children: [(0, tk.jsx)(MX, {
          item: Ik,
          amount: Xk,
          tier: yk
        }), (0, tk.jsx)(kT, {
          amount: Tk
        })]
      })
    }));

    function AT() {
      var kk;
      const {
        t: Fk
      } = (0, yk.y)(), Ik = ST(), Tk = null === (kk = Ik.shopInfo[Ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, lk = jT(Tk, "sell"), ak = eT(Tk, "empty"), [qk, Lk] = (0, Xk.useState)(null), [Zk, jk] = (0, Xk.useState)({}), ek = lk.find((kk => {
        let {
          key: Fk
        } = kk;
        return Fk === qk
      }));
      return 0 === lk.length ? (0, tk.jsx)("div", {
        className: "SmpScreen",
        children: (0, tk.jsx)(IT, {
          title: ak ? (0, tk.jsx)(NX.c, {
            text: ak.item.customTitle
          }) : Fk("smpShop:nothingToSell"),
          children: ak && (0, tk.jsx)(NX.c, {
            text: ak.item.description
          })
        })
      }) : (0, tk.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, tk.jsx)("div", {
          className: "SmpInventoryGrid",
          children: lk.map((kk => {
            var Fk, Ik;
            let {
              key: Xk,
              item: Tk,
              meta: ik
            } = kk;
            return (0, tk.jsx)(YT, {
              itemKey: Xk,
              item: ik.item,
              quantity: ik.quantity,
              pricePerItem: ik.pricePerItem,
              tier: null !== (Fk = null === (Ik = Tk.enchant) || void 0 === Ik ? void 0 : Ik.tier) && void 0 !== Fk ? Fk : null,
              selected: Xk === qk,
              onSelect: Lk
            }, Xk)
          }))
        }), (0, tk.jsx)("div", {
          className: ik()("SmpSellBar", {
            SmpSellBarIdle: !ek
          }),
          children: ek ? (0, tk.jsx)(gT, {
            entry: ek,
            choice: sT(ek.item, Zk[ek.key]),
            onChoose: kk => {
              jk({
                ...Zk,
                [ek.key]: kk
              })
            }
          }) : (0, tk.jsx)("span", {
            className: "SmpMuted",
            children: Fk("smpShop:tapToSell")
          })
        })]
      })
    }

    function gT(kk) {
      var Fk, Ik, Xk, Tk;
      let {
        entry: ik,
        choice: lk,
        onChoose: ak
      } = kk;
      const {
        t: Lk
      } = (0, yk.y)(), Zk = ST(), {
        key: jk,
        item: ek,
        meta: wk
      } = ik, Hk = xT("dropdown" === (null === (Fk = ek.userInput) || void 0 === Fk ? void 0 : Fk.type) ? ek.userInput.dropdownOptions : []), Jk = null === lk ? 0 : -(0, bX.b)(ek, lk);
      return (0, tk.jsxs)(tk.Fragment, {
        children: [(0, tk.jsx)(MX, {
          item: wk.item,
          amount: wk.quantity,
          tier: null !== (Ik = null === (Xk = ek.enchant) || void 0 === Xk ? void 0 : Xk.tier) && void 0 !== Ik ? Ik : null
        }), (0, tk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, tk.jsx)("b", {
            children: (0, tk.jsx)(NX.c, {
              text: null !== (Tk = ek.customTitle) && void 0 !== Tk ? Tk : wk.item
            })
          }), (0, tk.jsx)("small", {
            children: Lk("smpShop:sellEach", {
              count: wk.quantity
            })
          })]
        }), (0, tk.jsx)(TT, {
          options: Hk.map((kk => {
            let {
              label: Fk,
              quantity: Ik,
              isAll: Xk
            } = kk;
            return {
              value: Fk,
              label: Xk ? Lk("smpShop:all", {
                count: Ik
              }) : String(Ik)
            }
          })),
          value: lk,
          onChange: ak,
          ariaLabel: Lk("smpShop:quantity")
        }), (0, tk.jsxs)(qk.q, {
          loading: Zk.isPending(jk),
          disabled: null === lk,
          onClick: () => {
            Zk.act(jk, lk)
          },
          children: [Lk("smpShop:sellButton"), " ", (0, tk.jsx)(kT, {
            amount: Jk
          })]
        })]
      })
    }

    function mT() {
      var kk;
      const {
        t: Fk
      } = (0, yk.y)(), Ik = ST(), Xk = null === (kk = Ik.shopInfo[Ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, Tk = jT(Xk, "collect"), ik = jT(Xk, "myListing"), lk = (kk, Fk) => Ik.isPending(kk) || !1 === Fk.canBuy;
      return (0, tk.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, tk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Fk("smpShop:readyToCollect")
        }), Tk.length > 0 ? (0, tk.jsx)("div", {
          className: "SmpList",
          children: Tk.map((kk => {
            var Xk, Tk;
            let {
              key: ik,
              item: yk,
              meta: ak
            } = kk;
            return (0, tk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, tk.jsx)(MX, {
                item: "sold" === ak.type ? "Gold Coin" : ak.item,
                amount: "sold" === ak.type ? 0 : ak.quantity,
                tier: null !== (Xk = null === (Tk = yk.enchant) || void 0 === Tk ? void 0 : Tk.tier) && void 0 !== Xk ? Xk : null
              }), (0, tk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, tk.jsx)("b", {
                  children: (0, tk.jsx)(NX.c, {
                    text: yk.customTitle
                  })
                }), (0, tk.jsx)("small", {
                  children: (0, tk.jsx)(NX.c, {
                    text: yk.description
                  })
                })]
              }), (0, tk.jsx)(qk.m, {
                loading: lk(ik, yk),
                onClick: () => {
                  Ik.act(ik)
                },
                children: Fk("smpShop:collect")
              })]
            }, ik)
          }))
        }) : (0, tk.jsx)(IT, {
          title: Fk("smpShop:nothingToCollect"),
          children: Fk("smpShop:nothingToCollectHint")
        }), (0, tk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Fk("smpShop:activeListings", {
            count: ik.length
          })
        }), ik.length > 0 ? (0, tk.jsx)("div", {
          className: "SmpList",
          children: ik.map((kk => {
            var Xk, Tk;
            let {
              key: ik,
              item: yk,
              meta: ak
            } = kk;
            return (0, tk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, tk.jsx)(MX, {
                item: ak.item,
                amount: ak.quantity,
                tier: null !== (Xk = null === (Tk = yk.enchant) || void 0 === Tk ? void 0 : Tk.tier) && void 0 !== Xk ? Xk : null
              }), (0, tk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, tk.jsx)("b", {
                  children: (0, tk.jsx)(NX.c, {
                    text: yk.customTitle
                  })
                }), (0, tk.jsx)("small", {
                  children: Fk("smpShop:timeLeft", {
                    time: JT(ak.expiresAt)
                  })
                })]
              }), (0, tk.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, tk.jsx)(kT, {
                  amount: ak.pricePerItem
                }), (0, tk.jsx)("small", {
                  children: Fk("smpShop:each")
                })]
              }), (0, tk.jsx)(qk.G, {
                loading: lk(ik, yk),
                onClick: () => {
                  Ik.act(ik)
                },
                children: Fk("smpShop:cancel")
              })]
            }, ik)
          }))
        }) : (0, tk.jsx)(IT, {
          title: Fk("smpShop:noActiveListings"),
          children: Fk("smpShop:noActiveListingsHint")
        })]
      })
    }

    function hT(kk) {
      let {
        done: Fk,
        of: Ik
      } = kk;
      return (0, tk.jsx)("span", {
        className: "SmpProgress",
        children: (0, tk.jsx)("i", {
          style: {
            width: `${Math.min(100,Fk/Math.max(1,Ik)*100)}%`
          }
        })
      })
    }

    function rT(kk) {
      var Fk, Ik, Xk;
      let {
        entry: Tk,
        choice: ik,
        onChoose: lk
      } = kk;
      const {
        t: ak
      } = (0, yk.y)(), Lk = ST(), {
        key: Zk,
        item: jk,
        meta: ek
      } = Tk, wk = "dropdown" === (null === (Fk = jk.userInput) || void 0 === Fk ? void 0 : Fk.type) ? jk.userInput.dropdownOptions : [], Hk = !0 === ek.processing, Jk = null !== ek.creator && (ek.owned > 0 || Hk), xk = Jk && ek.owned > 0 ? xT(wk) : [], Pk = null === ik ? 0 : null !== (Ik = null === (Xk = xk.find((kk => kk.label === ik))) || void 0 === Xk ? void 0 : Xk.quantity) && void 0 !== Ik ? Ik : 0;
      return (0, tk.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, tk.jsx)(MX, {
          item: ek.item
        }), (0, tk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, tk.jsx)("b", {
            children: (0, tk.jsx)(NX.c, {
              text: jk.customTitle
            })
          }), (0, tk.jsxs)("small", {
            children: [(0, tk.jsx)(kT, {
              amount: ek.pricePerItem
            }), " ", ak("smpShop:each"), " \xb7", " ", null === ek.creator ? ak("smpShop:you") : (0, tk.jsx)(NX.c, {
              text: [{
                entityName: ek.creator
              }]
            })]
          }), (0, tk.jsx)(hT, {
            done: ek.delivered,
            of: ek.wanted
          })]
        }), Jk ? (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsx)(TT, {
            options: xk.map((kk => {
              let {
                label: Fk,
                quantity: Ik,
                isAll: Xk
              } = kk;
              return {
                value: Fk,
                label: Xk ? ak("smpShop:max", {
                  count: Ik
                }) : String(Ik)
              }
            })),
            value: ik,
            onChange: lk,
            ariaLabel: ak("smpShop:quantity")
          }), (0, tk.jsxs)(qk.q, {
            loading: Lk.isPending(Zk) || Hk,
            disabled: null === ik,
            onClick: () => {
              Lk.act(Zk, ik)
            },
            children: [ak("smpShop:deliver"), " ", (0, tk.jsx)(kT, {
              amount: Pk * ek.pricePerItem
            })]
          })]
        }) : (0, tk.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === ek.creator ? ak("smpShop:yourOrder") : ak("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function DT() {
      var kk;
      const {
        t: Fk
      } = (0, yk.y)(), Ik = ST(), Tk = null === (kk = Ik.shopInfo[Ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, ik = eT(Tk, "search"), lk = eT(Tk, "creator"), ak = jT(Tk, "order"), Lk = eT(Tk, "empty"), Zk = OT(ik, ak.length > 0 || null !== Lk), [jk, ek] = (0, Xk.useState)(!1), [wk, Hk] = (0, Xk.useState)({});
      return (0, tk.jsx)(uT, {
        browser: Zk,
        recentLabel: Fk("smpShop:recentOrders"),
        action: (0, tk.jsx)(qk.q, {
          onClick: () => {
            ek((kk => !kk))
          },
          children: Fk("smpShop:createOrder")
        }),
        above: jk && (0, tk.jsx)(fT, {
          mode: "order",
          creator: lk,
          catalogue: Zk.catalogue,
          names: Zk.names,
          searching: Zk.loading,
          prices: [],
          onPickItem: Zk.searchFor,
          onClose: () => {
            ek(!1)
          }
        }),
        onBack: () => {
          ek(!1)
        },
        summary: ak.length > 0 && Fk(1 === ak.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: ak.length,
          price: hX(bT(ak, "max"))
        }),
        list: Zk.loading ? (0, tk.jsx)(FT, {}) : ak.length > 0 ? (0, tk.jsx)(oT.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: wT,
          observerUpdateDeps: [ak.length],
          children: ak.map((kk => (0, tk.jsx)(rT, {
            entry: kk,
            choice: sT(kk.item, wk[kk.key]),
            onChoose: Fk => {
              Hk({
                ...wk,
                [kk.key]: Fk
              })
            }
          }, kk.key)))
        }) : Lk ? (0, tk.jsx)(XT, {
          entry: Lk
        }) : (0, tk.jsx)(FT, {
          count: 3
        })
      })
    }

    function MT() {
      var kk;
      const {
        t: Fk
      } = (0, yk.y)(), Ik = ST(), Xk = jT(null === (kk = Ik.shopInfo[Ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, "myOrder");
      return 0 === Xk.length ? (0, tk.jsx)("div", {
        className: "SmpScreen",
        children: (0, tk.jsx)(IT, {
          title: Fk("smpShop:noOrders"),
          children: Fk("smpShop:noOrdersHint")
        })
      }) : (0, tk.jsx)("div", {
        className: "SmpScreen",
        children: (0, tk.jsx)("div", {
          className: "SmpList",
          children: Xk.map((kk => {
            let {
              key: Xk,
              item: Tk,
              meta: ik
            } = kk;
            const yk = Ik.isPending(Xk) || !1 === Tk.canBuy;
            return (0, tk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, tk.jsx)(MX, {
                item: ik.item,
                amount: ik.collectable
              }), (0, tk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, tk.jsx)("b", {
                  children: (0, tk.jsx)(NX.c, {
                    text: Tk.customTitle
                  })
                }), (0, tk.jsxs)("small", {
                  children: [(0, tk.jsx)(kT, {
                    amount: ik.pricePerItem
                  }), " ", Fk("smpShop:each"), ik.collectable > 0 && ` \xb7 ${Fk("smpShop:readyCount",{count:ik.collectable})}`]
                }), (0, tk.jsx)(hT, {
                  done: ik.delivered,
                  of: ik.wanted
                })]
              }), ik.collectable > 0 ? (0, tk.jsx)(qk.m, {
                loading: yk,
                onClick: () => {
                  Ik.act(Xk)
                },
                children: Fk("smpShop:collectCount", {
                  count: ik.collectable
                })
              }) : (0, tk.jsx)(qk.G, {
                loading: yk,
                onClick: () => {
                  Ik.act(Xk)
                },
                children: Fk("smpShop:cancel")
              })]
            }, Xk)
          }))
        })
      })
    }
    const ki = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      Fi = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Ii(kk, Fk) {
      let Ik = !1;
      const Xk = {};
      for (const Tk in kk) Fk(Tk, kk[Tk]) ? Xk[Tk] = kk[Tk] : Ik = !0;
      return Ik ? Xk : kk
    }

    function Xi(kk) {
      var Fk, Ik, Tk, ak;
      const {
        show: qk,
        shopInfo: Lk,
        selectedCategoryKey: Zk
      } = kk, {
        t: jk
      } = (0, yk.y)(), ek = null !== Zk && void 0 !== Zk ? Zk : "", wk = ZT(Lk, ek), Hk = null === (Fk = Lk[ek]) || void 0 === Fk ? void 0 : Fk.items, Jk = null !== wk, [xk, Pk] = (0, Xk.useState)({}), [Kk, Qk] = (0, Xk.useState)([]), [sk, Vk] = (0, Xk.useState)(!1), [zk, Sk] = (0, Xk.useState)(null), [, vk] = (0, Xk.useState)(0), Ek = (0, Xk.useRef)(0), Ok = (0, Xk.useRef)({}), nk = (0, Xk.useRef)({
        items: Hk,
        pending: xk,
        shopInfo: Lk,
        active: Jk,
        canAfford: kk.canAfford,
        buy: kk.buy
      });
      nk.current = {
        items: Hk,
        pending: xk,
        shopInfo: Lk,
        active: Jk,
        canAfford: kk.canAfford,
        buy: kk.buy
      };
      const Gk = (0, Xk.useCallback)((kk => {
        Ek.current++;
        const Fk = Ek.current;
        Qk((Ik => [{
          id: Fk,
          text: kk
        }, ...Ik].slice(0, 8))), Sk(Fk)
      }), []);
      (0, Xk.useEffect)((() => {
        if (null === zk) return;
        const kk = setTimeout((() => {
          Sk(null)
        }), 3e3);
        return () => {
          clearTimeout(kk)
        }
      }), [zk]), (0, Xk.useEffect)((() => {
        const Fk = kk.message;
        if (!Fk) return;
        const {
          shopInfo: Ik,
          active: Xk,
          items: Tk
        } = nk.current, ik = null !== Fk.categoryKey ? null !== ZT(Ik, Fk.categoryKey) : Xk;
        (ik || Xk) && Gk(Fk.text), ik && Pk((kk => Ii(kk, (kk => {
          var Fk, Ik;
          return !ki.has(null === Tk || void 0 === Tk || null === (Fk = Tk[kk]) || void 0 === Fk || null === (Ik = Fk.smp) || void 0 === Ik ? void 0 : Ik.kind)
        }))))
      }), [kk.message, Gk]), (0, Xk.useEffect)((() => {
        Pk((kk => Ii(kk, ((kk, Fk) => VT(null === Hk || void 0 === Hk ? void 0 : Hk[kk]) === Fk.snapshot))))
      }), [Lk, Hk]);
      const pk = Object.keys(xk).length > 0;
      (0, Xk.useEffect)((() => {
        if (!pk) return;
        const kk = setInterval((() => {
          vk((kk => kk + 1));
          const kk = Date.now(),
            {
              pending: Fk,
              items: Ik
            } = nk.current,
            Xk = Object.keys(Fk).filter((Ik => kk - Fk[Ik].at >= 12e3));
          if (0 === Xk.length) return;
          const Tk = Xk.some((kk => {
            var Xk, Tk;
            return "search" !== (null === Ik || void 0 === Ik || null === (Xk = Ik[kk]) || void 0 === Xk || null === (Tk = Xk.smp) || void 0 === Tk ? void 0 : Tk.kind) || Fk[kk].resend
          }));
          for (const ik of Xk) Ok.current[ik] = kk;
          Pk((kk => Ii(kk, (kk => !Xk.includes(kk))))), Tk && Gk(jk("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(kk)
        }
      }), [pk]), (0, Xk.useEffect)((() => {
        Pk({})
      }), [ek]), (0, Xk.useEffect)((() => {
        qk || Vk(!1)
      }), [qk]);
      const uk = (0, Xk.useCallback)((function(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Xk,
            pending: Tk,
            canAfford: ik,
            buy: yk
          } = nk.current, lk = null === Xk || void 0 === Xk ? void 0 : Xk[kk];
          if (!lk || kk in Tk || !1 === lk.canBuy) return !1;
          if (!ik(lk, (0, bX.b)(lk, Fk))) return !1;
          yk(kk, lk, Fk);
          const ak = {
            snapshot: VT(lk),
            at: Date.now(),
            resend: Ik
          };
          return nk.current.pending = {
            ...nk.current.pending,
            [kk]: ak
          }, Pk((Fk => ({
            ...Fk,
            [kk]: ak
          }))), !0
        }), []),
        bk = (0, Xk.useMemo)((() => ({
          shopInfo: Lk,
          categoryKey: ek,
          canAfford: kk.canAfford,
          isPending: kk => kk in xk,
          gaveUpAt: kk => {
            var Fk;
            return null !== (Fk = Ok.current[kk]) && void 0 !== Fk ? Fk : 0
          },
          act: uk,
          notify: Gk
        })), [Lk, ek, kk.canAfford, xk, uk, Gk]),
        Rk = Math.min(...Object.values(xk).map((kk => kk.at))),
        Uk = pk && Date.now() - Rk > 1500,
        Ck = Kk.length > 1,
        Nk = null !== (Ik = null === (Tk = Lk[ek]) || void 0 === Tk ? void 0 : Tk.customTitle) && void 0 !== Ik ? Ik : ek,
        ck = null === (ak = Lk[ek]) || void 0 === ak ? void 0 : ak.description;
      let Wk = null;
      return "market" === wk ? Wk = (0, tk.jsx)(BT, {}) : "sell" === wk ? Wk = (0, tk.jsx)(AT, {}) : "collect" === wk ? Wk = (0, tk.jsx)(mT, {}) : "orders" === wk ? Wk = (0, tk.jsx)(DT, {}) : "myOrders" === wk && (Wk = (0, tk.jsx)(MT, {})), (0, tk.jsx)(zT.Provider, {
        value: bk,
        children: (0, tk.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Jk,
          children: (0, tk.jsxs)("div", {
            className: "SmpShop",
            children: [(0, tk.jsx)("header", {
              className: "SmpHeader",
              children: (0, tk.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, tk.jsxs)("h2", {
                  children: [wk && (0, tk.jsx)(lk.e, {
                    name: Fi[wk]
                  }), jk(Nk)]
                }), ck && (0, tk.jsx)("p", {
                  children: (0, tk.jsx)(NX.c, {
                    text: ck
                  })
                })]
              })
            }), (0, tk.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: qk && Wk
            }), (0, tk.jsxs)("button", {
              type: "button",
              className: ik()("SmpStatus", {
                SmpStatusWaiting: pk,
                SmpStatusFresh: !pk && null !== zk,
                SmpStatusHasHistory: Ck
              }),
              "aria-live": "polite",
              "aria-expanded": Ck ? sk : void 0,
              onClick: () => {
                Ck && Vk((kk => !kk))
              },
              children: [pk ? (0, tk.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, tk.jsx)(iT, {}), jk(Uk ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Kk[0] ? (0, tk.jsx)("span", {
                className: "SmpStatusText",
                children: (0, tk.jsx)(NX.c, {
                  text: Kk[0].text
                })
              }, Kk[0].id) : (0, tk.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: jk("smpShop:ready")
              }), Ck && (0, tk.jsx)("small", {
                children: jk("smpShop:recentMessages", {
                  count: Kk.length
                })
              })]
            }), sk && Ck && (0, tk.jsx)("div", {
              className: "SmpStatusHistory",
              children: Kk.map((kk => (0, tk.jsx)("div", {
                children: (0, tk.jsx)(NX.c, {
                  text: kk.text
                })
              }, kk.id)))
            })]
          })
        })
      })
    }
    class Ti {
      constructor(kk) {
        this.info = kk
      }
      static fromShopInfo(kk) {
        const Fk = {};
        for (const Ik in kk) {
          const Xk = !0 === kk[Ik].redDot && !0 !== kk[Ik].forceRemoveRedDot;
          Fk[Ik] = {
            redDot: Xk,
            items: {}
          };
          for (const Tk in kk[Ik].items) {
            const Xk = kk[Ik].items[Tk],
              ik = !0 === Xk.redDot && !0 !== Xk.forceRemoveRedDot;
            Fk[Ik].items[Tk] = {
              redDot: ik
            }
          }
        }
        return new Ti(Fk)
      }
      anyCategoryHasRedDots() {
        for (const kk in this.info)
          if (this.categoryHasRedDot(kk)) return !0;
        return !1
      }
      doesCategoryExist(kk) {
        return !(0, FI.Q)(this.info[kk])
      }
      categoryHasRedDot(kk) {
        return !0 === this.info[kk].redDot
      }
      updateCategoryRedDot(kk, Fk) {
        this.info[kk].redDot = Fk
      }
      doesItemExist(kk, Fk) {
        return this.doesCategoryExist(kk) && !(0, FI.Q)(this.info[kk].items[Fk])
      }
      itemHasRedDot(kk, Fk) {
        return !0 === this.info[kk].items[Fk].redDot
      }
      updateItemRedDot(kk, Fk, Ik) {
        this.info[kk].items[Fk].redDot = Ik
      }
      shallowCopy() {
        return new Ti(this.info)
      }
    }

    function ii(kk, Fk) {
      return `${kk}\x1f${Fk}`
    }

    function yi(kk, Fk) {
      return !(0, FI.Q)(Fk) && !(0, FI.Q)(kk) && Fk in kk
    }
    const li = (0, Xk.memo)((function(kk) {
      var Fk, Ik;
      let {
        show: Tk
      } = kk;
      const yk = (0, EF.i)("players", ji),
        lk = (0, EF.i)("players", ei),
        Lk = (0, YX.b)(),
        [jk, ek] = (0, Xk.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: Ti.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Hk = (0, Xk.useRef)(""),
        Jk = (0, Xk.useRef)(null),
        Pk = (0, Xk.useRef)(null),
        Kk = (0, Xk.useRef)(0),
        Qk = (0, Xk.useRef)(void 0),
        sk = (0, Xk.useRef)(null),
        Vk = (0, Xk.useRef)(jk),
        Sk = jk.redDotInfo.anyCategoryHasRedDots(),
        [vk, Ok] = (0, Xk.useState)(null),
        nk = (0, Xk.useRef)(!1);
      let Gk = !1,
        pk = 0,
        uk = 0;
      if (jk.currencyAmounts) {
        for (const kk in jk.currencyAmounts) {
          var bk;
          const Fk = jk.currencyAmounts[kk];
          Fk.hidden || (pk++, (null === (bk = Fk.subtext) || void 0 === bk ? void 0 : bk.length) > 0 && uk++)
        }
        Gk = pk + uk > 4
      }(0, Xk.useEffect)((() => {
        II.g.GL("showShopIconRedDot", Sk, !0)
      }), [Sk]), (0, Xk.useEffect)((() => {
        xk.gameBridge.send("setShopOpen", Tk), Tk || (clearTimeout(Qk.current), ek((kk => kk.awaitingPurchase ? {
          ...kk,
          awaitingPurchase: !1
        } : kk)))
      }), [Tk]), (0, Xk.useEffect)((() => () => {
        xk.gameBridge.send("setShopOpen", !1), clearTimeout(Qk.current)
      }), []), (0, Xk.useEffect)((() => {
        Vk.current = jk
      }), [jk]), (0, Xk.useEffect)((() => {
        if (null === vk) return;
        return (0, BX.d)("pointerdown", (kk => {
          const Fk = kk.target;
          null !== Fk && void 0 !== Fk && Fk.closest(".ShopItem") || Ok(null)
        }))
      }), [vk]);
      const Rk = kk => {
          ek((Fk => ({
            ...Fk,
            ...kk
          })))
        },
        Uk = kk => {
          var Fk;
          clearTimeout(null === (Fk = jk.onBoughtInfo) || void 0 === Fk ? void 0 : Fk.timeout);
          const Ik = setTimeout((() => {
            Rk({
              onBoughtInfo: null
            })
          }), 3e3);
          Hk.current = kk, Rk({
            onBoughtInfo: {
              text: kk,
              timeout: Ik,
              categoryKey: Jk.current
            }
          })
        },
        Ck = kk => {
          const {
            shopInfo: Fk,
            userInputsPerItem: Ik,
            redDotInfo: Xk,
            autoSelectCategory: ik
          } = function(kk, Fk, Ik, Xk, Tk, ik) {
            if ((0, FI.Q)(kk) || 0 === Object.keys(kk).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: Ti.fromShopInfo({}),
              autoSelectCategory: null
            };
            const yk = Ek.r[Ek.v].adConfig.showRewardedAds,
              lk = {};
            let ak = null;
            for (const Hk in kk) {
              const Fk = kk[Hk],
                Ik = {};
              let Xk = !1;
              for (const kk in Fk.items) {
                const Tk = Fk.items[kk];
                (0, bX.j)(Tk, yk) && (Ik[kk] = Tk, Xk = !0)
              }
              Xk && (lk[Hk] = {
                ...Fk,
                items: Ik
              }, !0 === Fk.autoSelectCategory && (ak = Hk))
            }
            const qk = {},
              Lk = (kk, Fk, Xk, yk) => {
                var lk, ak;
                const Lk = ii(kk, Fk),
                  tk = null !== (lk = Ik[Lk]) && void 0 !== lk ? lk : Ik[Fk];
                if (null !== (ak = yk.userInput) && void 0 !== ak && ak.type) switch (yk.userInput.type) {
                  case "dropdown": {
                    var Zk;
                    const kk = !tk || !yk.userInput.dropdownOptions.some((kk => (0, bX.e)(kk) === tk)),
                      Fk = yk.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Xk || void 0 === Xk || null === (Zk = Xk.userInput) || void 0 === Zk ? void 0 : Zk.type) || JSON.stringify(Xk.userInput.dropdownOptions) !== JSON.stringify(yk.userInput.dropdownOptions)),
                      Ik = yk.userInput,
                      Tk = !(0, FI.Q)(Ik.initialValue) && Ik.dropdownOptions.some((kk => (0, bX.e)(kk) === Ik.initialValue));
                    var jk;
                    return void(kk || Fk ? Tk ? qk[Lk] = null !== (jk = yk.userInput.initialValue) && void 0 !== jk ? jk : null : yk.userInput.dropdownOptions.length > 0 ? qk[Lk] = (0, bX.e)(yk.userInput.dropdownOptions[0]) : qk[Lk] = null : qk[Lk] = tk)
                  }
                  case "text":
                  case "number":
                    var ek, wk, Hk;
                    return void((null === Xk || void 0 === Xk ? void 0 : Xk.userInput) !== yk.userInput ? qk[Lk] = null !== (ek = null !== (wk = yk.userInput.initialValue) && void 0 !== wk ? wk : tk) && void 0 !== ek ? ek : "" : qk[Lk] = null !== (Hk = null !== tk && void 0 !== tk ? tk : yk.userInput.initialValue) && void 0 !== Hk ? Hk : "");
                  case "color":
                    var Jk, xk, Pk;
                    return void((null === Xk || void 0 === Xk ? void 0 : Xk.userInput) !== yk.userInput ? qk[Lk] = null !== (Jk = null !== (xk = yk.userInput.initialValue) && void 0 !== xk ? xk : tk) && void 0 !== Jk ? Jk : "#000000" : qk[Lk] = null !== (Pk = null !== tk && void 0 !== tk ? tk : yk.userInput.initialValue) && void 0 !== Pk ? Pk : "#000000");
                  case "player": {
                    const kk = (0, bX.f)(Tk, ik, yk.userInput);
                    return void(tk && kk.includes(tk) ? qk[Lk] = tk : qk[Lk] = kk.length > 0 ? kk[0] : null)
                  }
                }
              };
            for (const Hk in lk)
              for (const kk in lk[Hk].items) {
                var tk;
                const Ik = lk[Hk].items[kk];
                Lk(Hk, kk, null === (tk = Fk[Hk]) || void 0 === tk ? void 0 : tk.items[kk], Ik)
              }
            const Zk = Ti.fromShopInfo(lk);
            for (const Hk in lk) {
              var jk;
              if (Xk.doesCategoryExist(Hk)) {
                (null === (jk = Fk[Hk]) || void 0 === jk ? void 0 : jk.redDot) === lk[Hk].redDot && Zk.updateCategoryRedDot(Hk, Xk.categoryHasRedDot(Hk));
                for (const kk in lk[Hk].items) {
                  var ek, wk;
                  Xk.doesItemExist(Hk, kk) && (null === (ek = Fk[Hk]) || void 0 === ek || null === (wk = ek.items[kk]) || void 0 === wk ? void 0 : wk.redDot) === lk[Hk].items[kk].redDot && Zk.updateItemRedDot(Hk, kk, Xk.itemHasRedDot(Hk, kk))
                }
              }
            }
            return {
              shopInfo: lk,
              userInputsPerItem: qk,
              redDotInfo: Zk,
              autoSelectCategory: ak
            }
          }(kk, jk.shopInfo, jk.userInputsPerItem, jk.redDotInfo, yk, lk), ak = {
            shopInfo: Fk,
            userInputsPerItem: Ik,
            redDotInfo: Xk
          };
          if (null === ik || Tk)
            if (Fk[jk.selectedCategoryKey]) ak.selectedCategoryKey = jk.selectedCategoryKey;
            else {
              const kk = gX(Fk);
              ak.selectedCategoryKey = kk.length > 0 ? kk[0] : null
            }
          else ak.selectedCategoryKey = ik;
          return 0 === Object.keys(Fk).length && Tk && zk.d.set({
            openEverythingMenuName: null
          }), ak
        },
        ck = (kk, Fk, Ik) => {
          const Xk = jk.selectedCategoryKey,
            Tk = ii(Xk, kk),
            ik = null !== Ik && void 0 !== Ik ? Ik : jk.userInputsPerItem[Tk],
            yk = {
              categoryKey: Xk,
              itemKey: kk,
              userInput: ik
            };
          if (Jk.current = Xk, Fk.isRewardedAd) {
            if (Date.now() - Kk.current < 5e3) return;
            (0, aF.$)((() => {
              var Ik, Xk, ik;
              console.log("bought rewarded ad");
              const lk = yk.categoryKey ? null === (Ik = Vk.current.shopInfo[yk.categoryKey]) || void 0 === Ik ? void 0 : Ik.items[kk] : null;
              if (!lk || !lk.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Xk = Fk.userInput) || void 0 === Xk ? void 0 : Xk.type) === (null === lk || void 0 === lk || null === (ik = lk.userInput) || void 0 === ik ? void 0 : ik.type) ? (yk.userInput = Vk.current.userInputsPerItem[Tk], xk.gameBridge.send("buyShopItem", yk), Fk.onBoughtMessage && Uk(Fk.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Kk.current = Date.now()
          } else {
            xk.gameBridge.send("buyShopItem", yk), Rk({
              awaitingPurchase: !0
            }), clearTimeout(Qk.current), Qk.current = setTimeout((() => {
              sk.current = null, Rk({
                awaitingPurchase: !1
              })
            }), 1e3);
            const kk = (0, bX.b)(Fk, ik);
            if (sk.current = null, !isNaN(kk) && yi(jk.currencyAmounts, Fk.currency)) {
              0 !== kk && (sk.current = {
                currency: Fk.currency,
                amountBefore: jk.currencyAmounts[Fk.currency].amount
              });
              const Ik = {
                ...jk.currencyAmounts
              };
              Ik[Fk.currency].amount -= kk, Rk({
                currencyAmounts: Ik
              })
            }
            Fk.onBoughtMessage && Uk(Fk.onBoughtMessage)
          }
        },
        Wk = (kk, Fk) => {
          if (null === Fk || !kk.shopInfo[Fk]) return kk;
          let Ik = kk.redDotInfo;
          return Ik.categoryHasRedDot(Fk) && (Ik.updateCategoryRedDot(Fk, !1), Ik = Ik.shallowCopy()), {
            ...kk,
            selectedCategoryKey: Fk,
            redDotInfo: Ik
          }
        },
        fk = kk => {
          ek((Fk => Wk(Fk, kk)))
        };
      (0, UF.d)(dX.h, (() => {
        ek((kk => {
          const Fk = (0, dX.l)(gX(kk.shopInfo), kk.selectedCategoryKey, (Fk => (0, dX.g)(kk.shopInfo[Fk].items)));
          return Fk === kk.selectedCategoryKey ? kk : Wk(kk, Fk)
        }))
      })), (0, UF.d)("showShopFromServer", (kk => {
        let {
          toggle: Fk,
          ET: Ik
        } = kk;
        Ik && fk(Ik), 0 === Object.keys(jk.shopInfo).length || Fk && Tk ? zk.d.set({
          openEverythingMenuName: null
        }) : zk.d.set({
          openEverythingMenuName: tF.r.SHOP
        })
      })), (0, UF.d)("closeShopOnDamaged", (() => {
        Tk && zk.d.set({
          openEverythingMenuName: null
        })
      })), (0, UF.d)("overShopInfo", (kk => {
        Uk(kk)
      })), (0, wk.g)("currencyAmounts", (kk => {
        var Fk;
        const Ik = sk.current;
        Ik && (null === kk || void 0 === kk || null === (Fk = kk[Ik.currency]) || void 0 === Fk ? void 0 : Fk.amount) === Ik.amountBefore ? Rk({
          currencyAmounts: kk
        }) : (sk.current = null, Rk({
          currencyAmounts: kk,
          awaitingPurchase: !1
        }))
      })), (0, wk.g)("shopInfo", (kk => {
        Rk({
          ...Ck(kk),
          awaitingPurchase: !1
        })
      }));
      const Bk = (0, Xk.useRef)({
        playerIds: yk,
        localPlayerId: lk
      });
      (0, Xk.useEffect)((() => {
        Bk.current.playerIds === yk && Bk.current.localPlayerId === lk || (Bk.current = {
          playerIds: yk,
          localPlayerId: lk
        }, ek((kk => {
          const Fk = Ck(kk.shopInfo);
          return {
            ...kk,
            ...Fk
          }
        })))
      }), [yk, lk]);
      const dk = jk.selectedCategoryKey,
        Yk = (kk, Fk) => {
          var Ik, Xk;
          return (isNaN(Fk) || (0, FI.Q)(kk.currency) || yi(jk.currencyAmounts, kk.currency) && Fk <= jk.currencyAmounts[kk.currency].amount) && (null === (Ik = kk.canBuy) || void 0 === Ik || Ik) && !(null !== (Xk = kk.hidden) && void 0 !== Xk && Xk)
        },
        Ak = (kk, Fk) => {
          var Ik, Xk, Tk;
          const yk = ii(dk, kk),
            lk = jk.shopInfo[dk].items[kk],
            Lk = jk.userInputsPerItem[yk],
            Zk = (0, bX.b)(lk, Lk),
            ek = Yk(lk, Zk),
            wk = lk.enchant,
            Hk = wk ? (0, Nk.zb)(null !== (Ik = lk.customTitle) && void 0 !== Ik ? Ik : kk, {
              colour: Nk.sb[wk.tier]
            }) : null !== (Xk = lk.customTitle) && void 0 !== Xk ? Xk : kk,
            Jk = Fk => {
              const Ik = null !== Fk && void 0 !== Fk ? Fk : Lk,
                Xk = void 0 !== Fk ? (0, bX.b)(lk, Fk) : Zk;
              Yk(lk, Xk) && null !== Ik && ck(kk, lk, Fk);
              let Tk = jk.redDotInfo;
              Tk.itemHasRedDot(dk, kk) && (Tk.updateItemRedDot(dk, kk, !1), Tk = Tk.shallowCopy()), Rk({
                redDotInfo: Tk
              })
            };
          return (0, tk.jsxs)("div", {
            className: ik()("ShopItem", {
              ShopItemNoInput: !lk.userInput,
              ShopItemNoInputCanBuy: !lk.userInput && ek,
              ShopItemNoInputSelected: lk.isSelected,
              ShopItemEnchant: !!wk
            }),
            "data-pad-focusable": !lk.userInput || void 0,
            "data-pad-unavailable": !lk.userInput && !ek || void 0,
            "data-pad-repeat": null !== (Tk = (0, dX.b)(lk)) && void 0 !== Tk ? Tk : void 0,
            "data-pad-repeat-wait": jk.awaitingPurchase || void 0,
            onClick: () => {
              if (wk && nk.current) {
                if (vk !== yk) return void Ok(yk);
                Ok(null)
              }
              lk.userInput || Jk()
            },
            onPointerDown: kk => {
              wk && (nk.current = (0, UX.s)(kk))
            },
            onPointerEnter: kk => {
              wk && !(0, UX.s)(kk) && Ok(yk)
            },
            onPointerLeave: kk => {
              wk && !(0, UX.s)(kk) && Ok((kk => kk === yk ? null : kk))
            },
            style: {
              zIndex: Object.keys(jk.shopInfo[dk].items).length - Fk
            },
            children: [jk.redDotInfo.itemHasRedDot(dk, kk) && (0, tk.jsx)(ak.c, {
              top: "-6px",
              right: "-6px"
            }), lk.badge && (0, tk.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, tk.jsx)("div", {
                className: ik()("ShopBadgeMain", lk.badge.type),
                children: (0, tk.jsx)(NX.c, {
                  text: lk.badge.text
                })
              })
            }), (0, tk.jsx)("div", {
              className: "ShopItemLeft",
              children: lk.image && (0, tk.jsx)(ai, {
                item: lk,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, tk.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, tk.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, tk.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, tk.jsx)(NX.c, {
                    text: Hk
                  })
                }), (0, tk.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, tk.jsx)(NX.c, {
                    text: lk.description
                  })
                })]
              }), lk.userInput && (0, tk.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: kk => {
                  kk.stopPropagation()
                },
                children: [(0, tk.jsx)(ti, {
                  item: lk,
                  currInput: Lk,
                  updateInput: Fk => {
                    ((kk, Fk, Ik) => {
                      const Xk = ii(kk, Fk),
                        Tk = {
                          ...jk.userInputsPerItem
                        };
                      Tk[Xk] = Ik, Rk({
                        userInputsPerItem: Tk
                      })
                    })(dk, kk, Fk)
                  },
                  onSubmit: kk => {
                    Jk(kk)
                  }
                }), ("dropdown" !== lk.userInput.type || !lk.userInput.autoSubmit) && (0, tk.jsx)(qk.d, {
                  className: "ItemCostButton",
                  disabled: !ek && null !== Lk,
                  onClick: () => {
                    Jk()
                  },
                  children: (0, tk.jsx)(Li, {
                    item: lk,
                    cost: Zk,
                    currencyAmounts: jk.currencyAmounts
                  })
                })]
              })]
            }), !lk.userInput && (0, tk.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, tk.jsx)(Li, {
                item: lk,
                cost: Zk,
                currencyAmounts: jk.currencyAmounts
              })
            }), wk && vk === yk && (0, tk.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, tk.jsx)(NX.c, {
                text: Hk
              }), (0, tk.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, tk.jsx)(NX.c, {
                  text: (0, RX.d)("", wk.enchantments, wk.enchantmentData)
                })
              })]
            })]
          }, yk)
        },
        gk = function(kk) {
          for (const Fk in kk)
            if (kk[Fk].smp) return !0;
          return !1
        }(jk.shopInfo),
        mk = ZT(jk.shopInfo, dk);
      return (0, tk.jsx)(GX.b, {
        className: "Menu ShopBody",
        show: Tk,
        children: 0 !== Object.keys(jk.shopInfo).length && (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, tk.jsx)(Zk, {
              items: gX(jk.shopInfo).map((kk => {
                var Fk;
                return {
                  id: kk,
                  title: null !== (Fk = jk.shopInfo[kk].customTitle) && void 0 !== Fk ? Fk : kk,
                  redDot: jk.redDotInfo.categoryHasRedDot(kk)
                }
              })),
              link: Lk ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, AX.f)({
                    page: (0, AX.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: dk,
              onClick: fk,
              padStartsOnTab: (0, dX.d)(dk)
            }), (0, tk.jsx)("div", {
              className: "MenuSideBarFooter",
              children: jk.currencyAmounts && Object.keys(jk.currencyAmounts).map((kk => {
                var Fk;
                const Ik = jk.currencyAmounts[kk];
                return Ik.hidden ? null : (0, tk.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Gk ? "SmallText" : ""),
                  children: [(0, tk.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, tk.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Ik.iconColour
                      },
                      children: (0, tk.jsx)(wi, {
                        iconName: Ik.icon
                      })
                    }), "\xa0", (0, uX.c)(Ik.amount, 6)]
                  }), (null === (Fk = Ik.subtext) || void 0 === Fk ? void 0 : Fk.length) > 0 && (0, tk.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, tk.jsx)(NX.c, {
                      text: Ik.subtext
                    })
                  })]
                }, kk)
              }))
            })]
          }), (0, tk.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [gk && (0, tk.jsx)(Xi, {
              show: Tk,
              shopInfo: jk.shopInfo,
              selectedCategoryKey: dk,
              buy: (kk, Fk, Ik) => {
                ck(kk, Fk, Ik)
              },
              canAfford: Yk,
              message: jk.onBoughtInfo
            }), null === mk && (0, tk.jsxs)(tk.Fragment, {
              children: [(0, tk.jsx)("div", {
                className: ik()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== jk.onBoughtInfo
                }),
                children: (0, tk.jsx)(NX.c, {
                  text: Hk.current
                })
              }), (0, tk.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, tk.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Fk = jk.shopInfo[dk]) || void 0 === Fk ? void 0 : Fk.description) && (0, tk.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, tk.jsx)(NX.c, {
                      text: jk.shopInfo[dk].description
                    })
                  }), Tk && (0, tk.jsx)("div", {
                    className: "ShopItems",
                    ref: Pk,
                    "data-pad-initial-area": !0,
                    children: gX(null === (Ik = jk.shopInfo[dk]) || void 0 === Ik ? void 0 : Ik.items).map(((kk, Fk) => Ak(kk, Fk)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function ai(kk) {
      let {
        item: Fk,
        minWidth: Ik,
        minHeight: Xk
      } = kk;
      const {
        image: Tk,
        schematicId: ik,
        imageColour: yk
      } = Fk;
      if (ik) return (0, tk.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Ik}rem`,
          height: `${Xk}rem`
        },
        children: (0, tk.jsx)(cX.b, {
          game: {
            schematicId: ik
          }
        })
      });
      var ak, qk;
      if ((0, CX.e)(Tk)) return (0, tk.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Ik}rem`,
          height: "0",
          minHeight: `${Xk}rem`
        },
        children: (0, tk.jsx)(CX.d, {
          itemName: Tk,
          amount: null !== (ak = Fk.amount) && void 0 !== ak ? ak : 0,
          amountFontSize: Xk / 4 + "rem",
          enchantmentTier: null === (qk = Fk.enchant) || void 0 === qk ? void 0 : qk.tier
        })
      });
      const Lk = Tk.slice(-4);
      return ".jpg" === Lk || ".png" === Lk ? (0, tk.jsx)(qi, {
        image: Tk,
        minWidth: Ik
      }) : (0, tk.jsx)(lk.e, {
        name: Tk,
        className: "SelectedItemImage",
        style: {
          color: yk
        }
      })
    }

    function qi(kk) {
      let {
        image: Fk,
        minWidth: Ik
      } = kk;
      const {
        gameNameWithVariation: Xk
      } = (0, EF.k)("connectedGame"), Tk = Fk.endsWith(".jpg");
      return (0, tk.jsx)("img", {
        className: ik()({
          ShopPixelImage: !Tk
        }),
        style: {
          width: `${Tk?1.6*Ik:Ik}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Nk.dc)(Xk)}/${Fk}`,
        alt: Fk,
        draggable: !1
      })
    }

    function Li(kk) {
      let {
        item: Fk,
        cost: Ik,
        currencyAmounts: Xk
      } = kk;
      const Tk = !isNaN(Ik) && 0 !== Ik && yi(Xk, Fk.currency);
      let ik = null;
      return Fk.buyButtonText ? ik = Fk.buyButtonText : Tk ? (ik = Ik, Fk.sell && (ik = -1 * Ik), ik = ik.toString()) : 0 === Ik ? ik = "Free" : Fk.isRewardedAd && (ik = "Watch ad"), (0, FI.Q)(ik) || " " === ik ? null : (0, tk.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Tk && (0, tk.jsx)("div", {
          style: {
            color: Xk[Fk.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, tk.jsx)(wi, {
            iconName: Xk[Fk.currency].icon
          })
        }), (0, tk.jsx)("div", {
          className: "BuyItemCost",
          children: (0, tk.jsx)(NX.c, {
            text: ik
          })
        })]
      })
    }

    function ti(kk) {
      let {
        item: Fk,
        currInput: Ik,
        updateInput: Tk,
        onSubmit: ik
      } = kk;
      const {
        t: lk
      } = (0, yk.y)(), ak = (0, Xk.useRef)(null);
      if ((0, Xk.useEffect)((() => {
          const kk = ak.current;
          kk && kk.value !== Ik && document.activeElement !== kk && (kk.value = null !== Ik && void 0 !== Ik ? Ik : "")
        }), [Ik]), !Fk.userInput) return null;
      let qk = Fk.userInput;
      if (Jk.featureFlags.sanitizeShopInput && "text" === Fk.userInput.type && (qk = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === qk.type || "number" === qk.type) {
        var Lk, Zk;
        console.assert(void 0 !== Ik, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Fk)}`);
        const kk = "text" === qk.type && qk.wordCharsOnly;
        return (0, tk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, tk.jsx)(Qk.c, {
            className: "ShopItemUserInputText",
            placeholderText: lk(qk.placeholderText),
            defaultValue: Ik,
            domRef: ak,
            onValueChange: (Fk, Ik) => {
              !0 === kk && (Fk = (0, fX.ib)(Fk)), ak.current.value = Fk, Tk(Fk)
            },
            onEnter: ik,
            type: qk.type
          }, (null !== (Lk = qk.initialValue) && void 0 !== Lk ? Lk : "") + (null !== (Zk = qk.placeholderText) && void 0 !== Zk ? Zk : ""))
        })
      }
      if ("dropdown" === qk.type) {
        console.assert(void 0 !== Ik, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Fk)}`);
        const kk = qk.autoSubmit;
        return (0, tk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, tk.jsx)(SF.e, {
            options: qk.dropdownOptions.map((kk => (0, bX.e)(kk))),
            value: Ik,
            onChange: Fk => {
              let {
                value: Ik
              } = Fk;
              Tk(Ik), kk && ik(Ik)
            }
          })
        })
      }
      return "player" === qk.type ? (0, tk.jsx)(Zi, {
        userInput: qk,
        currInput: Ik,
        updateInput: Tk
      }) : "color" === qk.type ? (0, tk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, tk.jsx)("input", {
          type: "color",
          value: Ik,
          onChange: kk => {
            Tk(kk.target.value)
          }
        })
      }) : null
    }

    function Zi(kk) {
      let {
        userInput: Fk,
        currInput: Ik,
        updateInput: Xk
      } = kk;
      const Tk = (0, EF.k)("players"),
        ik = (0, EF.k)("hiddenPlayerNames"),
        yk = (0, bX.f)(Tk.ids, Tk.localId, Fk);
      return (0, tk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, tk.jsx)(SF.e, {
          options: yk.map((kk => {
            const {
              name: Fk
            } = Tk.byId[kk];
            return {
              value: kk,
              label: null === Fk ? "" : (0, WX.d)(Fk, ik)
            }
          })),
          value: Ik,
          onChange: kk => {
            let {
              value: Fk
            } = kk;
            Xk(Fk)
          }
        })
      })
    }

    function ji(kk) {
      let {
        ids: Fk
      } = kk;
      return Fk
    }

    function ei(kk) {
      let {
        localId: Fk
      } = kk;
      return Fk
    }

    function wi(kk) {
      let {
        iconName: Fk
      } = kk;
      return xk.gameBridge.lookup("isItemName", Fk) ? (0, tk.jsx)(CX.d, {
        itemName: Fk,
        amount: 1
      }) : (0, tk.jsx)(lk.e, {
        name: Fk,
        className: "2x"
      })
    }
    var Hi = Ik(1580);
    const Ji = (0, Ik(1375).j)((kk => kk.PadLobbyShortcuts)),
      xi = (0, Xk.lazy)((() => Promise.resolve().then((() => Ik(4645))).then((kk => ({
        default: kk.Lobbyleaderboard
      }))))),
      Pi = (0, Xk.lazy)((() => Ik.e(220).then((() => Ik(41084))).then((kk => ({
        default: kk.LobbyManageView
      })))));

    function Ki(kk) {
      let {
        show: Fk
      } = kk;
      return Fk ? (0, tk.jsx)(Qi, {}) : null
    }

    function Qi() {
      const kk = (0, YX.b)();
      return (0, tk.jsxs)(tk.Fragment, {
        children: [(0, tk.jsx)(Ji, {}), (0, tk.jsxs)(Xk.Suspense, {
          fallback: (0, tk.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, tk.jsx)(sk.c, {})
          }),
          children: [kk && (0, tk.jsx)(Pi, {
            leaderboard: (0, tk.jsx)(xi, {})
          }), !kk && (0, tk.jsx)(xi, {})]
        })]
      })
    }
    var si = Ik(1515),
      Vi = Ik(2955),
      zi = Ik(1665),
      Si = Ik(3001),
      oi = Ik(2616),
      vi = Ik(1451),
      Ei = Ik(1415),
      Oi = Ik(2929),
      ni = Ik(2946),
      Gi = Ik(2259);
    const ui = "storeRecentGiftRecipients",
      bi = new Map;

    function Ri() {
      try {
        const kk = TI.j.getItem(ui);
        return Array.isArray(kk) ? kk.filter((kk => "string" === typeof(null === kk || void 0 === kk ? void 0 : kk.name) && kk.name.length > 0)).map((kk => ({
          name: kk.name,
          cosmetics: kk.cosmetics && "object" === typeof kk.cosmetics ? kk.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Ui(kk) {
      var Fk;
      const [Ik, Tk] = (0, Xk.useState)(""), [ik, yk] = (0, Xk.useState)("search"), [lk, ak] = (0, Xk.useState)(null), [qk, Lk] = (0, Xk.useState)(null), tk = (0, Xk.useRef)(null), Zk = (0, Xk.useRef)(null);
      (0, Xk.useEffect)((() => () => {
        tk.current && clearTimeout(tk.current)
      }), []);
      const jk = null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.name) && void 0 !== Fk ? Fk : null;

      function ek() {
        tk.current && (clearTimeout(tk.current), tk.current = null)
      }(0, Xk.useEffect)((() => {
        if (null === jk || kk === Ok.NULL_USER_CONTEXT) return;
        const Fk = jk.toLowerCase();
        if (Fk === kk.getPlayerName().toLowerCase()) return void Lk({
          name: jk,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Ik = bi.get(Fk);
        if (Ik) return void Lk({
          name: jk,
          result: Ik
        });
        let Xk = !1;
        return async function(kk, Fk) {
          try {
            const Ik = await (0, Ok.postJsonWithMetricsCookiesAndJsonResponse)(`${lF.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Fk
            }, {
              retries: 1
            }, kk.getMetricsCookies());
            if ("boolean" !== typeof(null === Ik || void 0 === Ik ? void 0 : Ik.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Ik)}`);
            return Ik
          } catch (Ik) {
            return console.error("Failed to look up gift recipient:", Ik), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(kk, jk).catch((kk => (console.error("Gift recipient lookup failed:", kk), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((kk => {
          !0 !== kk.giftRecipientFound && "store:giftRecipientLookupFailed" === kk.giftRecipientError || bi.set(Fk, kk), Xk || Lk({
            name: jk,
            result: kk
          })
        })), () => {
          Xk = !0
        }
      }), [jk, kk]);
      const wk = (0, Xk.useMemo)((() => {
        const kk = Ik.trim();
        if (!kk) return {
          status: "none"
        };
        if (!lk || lk.name !== kk || (null === qk || void 0 === qk ? void 0 : qk.name) !== lk.name) return {
          status: "pending",
          name: kk
        };
        const Fk = qk.result;
        return !1 === Fk.giftRecipientFound ? {
          status: "error",
          name: lk.name,
          error: Fk.giftRecipientError
        } : {
          status: "found",
          name: Fk.giftRecipientName,
          ownedPacks: Fk.giftRecipientOwnedPacks,
          hasSuperRank: Fk.giftRecipientHasSuperRank,
          isSubscriber: Fk.giftRecipientIsSubscriber
        }
      }), [Ik, lk, qk]);
      (0, Xk.useEffect)((() => {
        "found" === wk.status && "typed" === (null === lk || void 0 === lk ? void 0 : lk.source) && Zk.current !== wk.name && (Zk.current = wk.name, (0, Mk.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [wk, lk]);
      const Hk = (null === qk || void 0 === qk ? void 0 : qk.name) === (null === lk || void 0 === lk ? void 0 : lk.name) ? null === qk || void 0 === qk ? void 0 : qk.result : null,
        Jk = !0 === (null === Hk || void 0 === Hk ? void 0 : Hk.giftRecipientFound) ? Hk.giftRecipientCosmetics : null;
      return {
        query: Ik,
        via: ik,
        recipient: wk,
        recipientCosmetics: Jk,
        type: function(kk) {
          Tk(kk), yk("search"), ek();
          const Fk = kk.trim();
          Fk ? tk.current = setTimeout((() => {
            ak({
              name: Fk,
              source: "typed"
            })
          }), 400) : ak(null)
        },
        choose: function(kk, Fk) {
          ek(), Tk(kk), yk("typed" === Fk ? "search" : "prefilled" === Fk ? "prefilled" : "suggestion"), ak({
            name: kk,
            source: Fk
          }), "typed" !== Fk && "prefilled" !== Fk && (0, Mk.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Fk
          })
        },
        clear: function() {
          ek(), Tk(""), yk("search"), ak(null)
        },
        recordGift: function(kk, Fk) {
          ! function(kk) {
            bi.delete(kk.toLowerCase())
          }(kk), Lk((Ik => {
            if (!Ik || Ik.name.toLowerCase() !== kk.toLowerCase() || !0 !== Ik.result.giftRecipientFound || "superRank" === Fk) return Ik;
            const Xk = Ik.result.giftRecipientOwnedPacks;
            return {
              ...Ik,
              result: {
                ...Ik.result,
                giftRecipientOwnedPacks: Xk.includes(Fk) ? Xk : [...Xk, Fk]
              }
            }
          }))
        }
      }
    }
    var Ci = Ik(2255),
      Ni = Ik(4649),
      ci = Ik(243),
      Wi = Ik(3047);
    const fi = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Bi = Ik(2199),
      di = Ik(612),
      Yi = Ik(2300),
      Ai = Ik(2525);

    function gi(kk) {
      let {
        cosmetics: Fk
      } = kk;
      return (0, tk.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, tk.jsx)(Yi.e, {
          cosmetics: Fk
        })
      })
    }

    function mi(kk, Fk) {
      var Ik, Xk;
      const Tk = null !== (Ik = kk.friend) && void 0 !== Ik ? Ik : {
        isError: !1,
        name: kk.name,
        ranks: [],
        cosmetics: null !== (Xk = kk.cosmetics) && void 0 !== Xk ? Xk : {},
        nameColour: di.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return Fk ? {
        ...Tk,
        cosmetics: Fk
      } : Tk
    }

    function ri(kk) {
      let {
        pending: Fk
      } = kk;
      return (0, tk.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Fk && (0, tk.jsx)(sk.c, {})
      })
    }

    function Di(kk) {
      var Fk;
      let {
        selfName: Ik,
        giftRecipient: Tk,
        suggestionsVersion: ak,
        pulseSignal: Lk,
        disabled: Zk
      } = kk;
      const {
        t: jk
      } = (0, yk.y)(), ek = (0, Bk.j)(), wk = (0, Xk.useRef)(null), Hk = (0, Xk.useRef)(null), {
        query: xk,
        via: Pk,
        recipient: Kk,
        recipientCosmetics: sk
      } = Tk, Vk = (0, Gi.q)(xk), zk = (0, Xk.useMemo)((() => {
        const kk = Jk.featureFlags.useSocialFeatures ? ek.friends.filter((kk => !kk.isError)) : [];
        return (0, Gi.l)({
          onlineFriends: (0, Bk.e)(kk),
          recentRecipients: Ri(),
          friends: kk,
          selfName: Ik,
          max: 8
        })
      }), [ek.friends, Ik, ak]), Sk = xk.trim().toLowerCase(), vk = "search" !== Pk && Sk ? zk.find((kk => kk.name.toLowerCase() === Sk)) : void 0, Ek = vk && "prefilled" === Pk ? [vk, ...zk.filter((kk => kk !== vk))] : zk, Ok = "" !== Sk && !vk, nk = Ok ? xk : "", Gk = Ek.length > 0;
      (0, Xk.useEffect)((() => {
        wk.current && wk.current.value !== nk && (wk.current.value = nk)
      }), [nk]), (0, Xk.useEffect)((() => {
        wk.current && (wk.current.disabled = Zk)
      }), [Zk, Lk]);
      const pk = (0, Xk.useRef)(0);

      function bk() {
        "self" !== Vk && (0, Mk.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Tk.clear()
      }

      function Rk(kk) {
        var Fk, Ik;
        if (Zk) return;
        if (" " === kk.key || "Enter" === kk.key) return kk.preventDefault(), void kk.currentTarget.click();
        const Xk = Array.from(null !== (Fk = null === (Ik = Hk.current) || void 0 === Ik ? void 0 : Ik.querySelectorAll("[role=radio]")) && void 0 !== Fk ? Fk : []),
          Tk = Xk.indexOf(kk.currentTarget);
        let ik;
        "ArrowRight" === kk.key || "ArrowDown" === kk.key ? ik = Xk[(Tk + 1) % Xk.length] : "ArrowLeft" === kk.key || "ArrowUp" === kk.key ? ik = Xk[(Tk - 1 + Xk.length) % Xk.length] : "Home" === kk.key ? ik = Xk[0] : "End" === kk.key && (ik = Xk[Xk.length - 1]), ik && (kk.preventDefault(), ik.focus(), ik.click())
      }(0, Xk.useEffect)((() => {
        var kk;
        Lk > pk.current && !Zk && (pk.current = Lk, null === (kk = wk.current) || void 0 === kk || kk.focus())
      }), [Lk, Zk]);
      const Uk = "self" === Vk,
        Ck = null !== (Fk = null === vk || void 0 === vk ? void 0 : vk.name) && void 0 !== Fk ? Fk : null,
        Nk = "error" === Kk.status ? Kk.error : null,
        ck = "store:giftRecipientLookupFailed" === Nk;
      return (0, tk.jsxs)("div", {
        className: ik()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Zk,
          StoreRecipientStripNoChips: !Gk
        }),
        children: [(0, tk.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: jk("store:buyingFor")
        }), (0, tk.jsxs)("div", {
          ref: Hk,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": jk("store:whoIsItFor"),
          children: [(0, tk.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Uk,
            tabIndex: Zk || !Uk && null !== Ck ? -1 : 0,
            className: ik()("StoreRecipientMe", {
              StoreRecipientChecked: Uk
            }),
            onClick: () => {
              Zk || bk()
            },
            onKeyDown: Rk,
            children: [(0, tk.jsx)(lk.e, {
              name: "user"
            }), " ", jk("store:me")]
          }), Gk && (0, tk.jsx)("div", {
            className: "StoreRecipientChips",
            children: Ek.map((kk => {
              const Fk = kk === vk;
              return (0, tk.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Fk,
                tabIndex: !Zk && Fk ? 0 : -1,
                title: kk.name,
                className: ik()("StoreRecipientChip", {
                  StoreRecipientChecked: Fk
                }),
                onClick: () => {
                  Zk || function(kk) {
                    "gift" !== Vk && (0, Mk.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Tk.choose(kk.name, kk.kind)
                  }(kk)
                },
                onKeyDown: Rk,
                children: (0, tk.jsx)(Ai.g, {
                  playerSocialPreview: mi(kk, Fk ? sk : null),
                  opensProfileCard: !1,
                  isFriend: null !== kk.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== kk.friend,
                  status: null === kk.friend ? null : void 0,
                  trailing: Fk ? (0, tk.jsx)(ri, {
                    pending: "pending" === Kk.status
                  }) : void 0
                })
              }, kk.name)
            }))
          })]
        }), (0, tk.jsxs)("div", {
          className: ik()("StoreRecipientSearch", {
            StoreRecipientChecked: Ok,
            StoreRecipientSearchPulse: Lk > 0 && !Ok,
            StoreRecipientSearchError: null !== Nk && !ck
          }),
          onClick: () => {
            var kk;
            null === (kk = wk.current) || void 0 === kk || kk.focus()
          },
          children: [Ok && "found" === Kk.status && sk && (0, tk.jsx)(gi, {
            cosmetics: sk
          }), !(Ok && "found" === Kk.status && sk) && (0, tk.jsx)(lk.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, tk.jsx)(Qk.c, {
            className: "StoreRecipientSearchInput",
            domRef: wk,
            placeholderText: jk("store:searchName"),
            defaultValue: nk,
            maxLength: uk.j,
            onValueChange: function(kk) {
              "gift" !== Vk && kk.trim() && (0, Mk.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Tk.type(kk)
            },
            onEnter: () => {
              var kk;
              const Fk = null === (kk = wk.current) || void 0 === kk ? void 0 : kk.value.trim();
              Fk && Tk.choose(Fk, "typed")
            },
            blurOnEnter: !0
          }), Ok && (0, tk.jsx)(ri, {
            pending: "pending" === Kk.status
          }), Ok && (0, tk.jsx)("div", {
            ...(0, qk.Y)({
              disabled: Zk
            }),
            "aria-label": jk("store:clearRecipient"),
            title: jk("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: kk => {
              kk.stopPropagation(), Zk || bk()
            },
            children: (0, tk.jsx)(lk.e, {
              name: "xmark"
            })
          })]
        }, Lk), Nk && (0, tk.jsx)("div", {
          className: ik()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: ck
          }),
          role: "status",
          children: jk(Nk)
        })]
      })
    }
    var Mi = Ik(2253),
      ky = Ik(2176),
      Fy = Ik(3529),
      Iy = Ik(3053),
      Xy = Ik(2213);
    const Ty = Ik.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function iy() {
      (0, Xy.d)(Ty, {
        lowPriority: !1
      })
    }

    function yy(kk) {
      let {
        onBack: Fk,
        cta: Ik,
        recipient: Tk,
        afterCta: ik
      } = kk;
      const {
        t: ak
      } = (0, yk.y)(), [Lk, Zk] = (0, Xk.useState)("starting"), jk = (0, Xk.useRef)(null), ek = (0, cF.d)(), wk = (0, Xk.useRef)(null), Hk = (0, Xk.useCallback)((() => {
        const kk = jk.current;
        null !== kk.error && kk.load();
        const Fk = kk.play();
        wk.current = Fk, Fk.catch((kk => {
          (0, Fy.d)("Failed to play Super Rank video", kk), ek.current && wk.current === Fk && Zk("failed")
        }))
      }), [ek]);
      return (0, Xk.useEffect)((() => {
        const kk = jk.current;
        let Fk;

        function Ik() {
          clearTimeout(Fk), Fk = setTimeout(Hk, 3e3)
        }
        return Hk(), kk.addEventListener("ended", Ik), () => {
          clearTimeout(Fk), kk.removeEventListener("ended", Ik)
        }
      }), [Hk]), (0, tk.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, tk.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, tk.jsx)(qk.c, {
            className: "StoreDetailBackButton",
            onClick: Fk,
            padBack: !0,
            children: ak("general:back")
          }), (0, tk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, tk.jsx)(lk.e, {
              name: "bolt"
            }), " ", ak("homePage:superRank")]
          }), Tk]
        }), (0, tk.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, tk.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, tk.jsx)("video", {
              ref: jk,
              src: `${lF.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Ty,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Lk,
              onPlaying: () => {
                Zk("playing")
              },
              onError: () => {
                Zk("failed")
              }
            }), ("failed" === Lk || "loading" === Lk) && (0, tk.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, tk.jsx)(qk.d, {
                ariaLabel: ak("general:play"),
                loading: "loading" === Lk,
                onClick: () => {
                  Zk("loading"), Hk()
                },
                touchPressOn: "pointerup",
                children: (0, tk.jsx)(lk.e, {
                  name: "play"
                })
              })
            })]
          }), (0, tk.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, tk.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, tk.jsx)(Iy.e, {})
            }), (0, tk.jsxs)("div", {
              className: "StoreTileActions",
              children: [Ik, ik]
            })]
          })]
        })]
      })
    }
    var ly = Ik(2538),
      ay = Ik(3482),
      qy = Ik(3030),
      Ly = Ik(3034);
    const ty = [di.t.yellow, di.t.green, di.t.aqua, di.t.blue, di.t.purple, di.t.red];

    function Zy(kk) {
      return "needsRecipient" === kk || "lookingUp" === kk || "gift" === kk || "recipientOwns" === kk || "recipientSharesOwned" === kk || "recipientSubscribed" === kk
    }

    function jy(kk) {
      const {
        onKeyDown: Fk,
        ...Ik
      } = (0, qk.Y)();
      return {
        ...Ik,
        "aria-label": kk,
        onKeyDown: kk => {
          kk.target === kk.currentTarget && (null === Fk || void 0 === Fk || Fk(kk))
        }
      }
    }

    function ey(kk) {
      let {
        text: Fk
      } = kk;
      return (0, tk.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Fk).map(((kk, Fk) => (0, tk.jsx)("span", {
          style: {
            color: ty[Fk % ty.length]
          },
          children: kk
        }, Fk)))
      })
    }
    const wy = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Hy(kk) {
      let {
        state: Fk,
        item: Ik,
        price: Xk,
        busy: Tk,
        highlight: ak = !1,
        onAct: Lk,
        onNeedRecipient: Zk,
        onLogin: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = "superRank" === Ik ? Rk.l.product.days : null, Hk = kk => null === wk ? ek(kk ? "general:gift" : "general:buy") : ek(kk ? "store:giftDays" : "store:buyDays", {
        days: wk
      }), Jk = (kk, Fk) => {
        const Ik = (0, tk.jsxs)(tk.Fragment, {
          children: [null === kk && (0, tk.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== kk && (0, tk.jsx)("span", {
            className: "StoreCtaLabel",
            title: kk,
            children: kk
          })]
        });
        return null !== wk ? (0, tk.jsxs)(tk.Fragment, {
          children: [Fk && (0, tk.jsx)("span", {
            className: "StoreCtaIcon",
            children: Fk
          }), Ik, (0, tk.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, tk.jsx)(ky.b, {
              amount: Xk
            })]
          })]
        }) : (0, tk.jsxs)(tk.Fragment, {
          children: [(0, tk.jsxs)("span", {
            className: "StoreCtaLead",
            children: [Ik, "\xb7"]
          }), (0, tk.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Fk, (0, tk.jsx)(ky.b, {
              amount: Xk
            })]
          })]
        })
      };
      let xk;
      switch (Fk) {
        case "pending":
          xk = (0, tk.jsx)(qk.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Jk(null)
          });
          break;
        case "login":
          xk = (0, tk.jsx)(qk.m, {
            className: "StoreCtaButton",
            onClick: jk,
            children: Jk(Hk(!1))
          });
          break;
        case "owned":
          xk = (0, tk.jsx)(qk.g, {
            className: "StoreCtaButton",
            onClick: () => {
              zk.d.set({
                openEverythingMenuName: tF.r.CUSTOMISATION
              })
            },
            children: (0, tk.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, tk.jsx)(lk.e, {
                name: "shirt"
              }), " ", ek("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          xk = (0, tk.jsx)(qk.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, tk.jsx)("span", {
              className: "StoreCtaLabel",
              children: ek(wy[Fk])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          xk = (0, tk.jsx)(qk.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Fk || null === Xk,
            loading: "lookingUp" === Fk || Tk,
            onClick: Lk,
            analyticsClick: {
              id: "store.gift",
              value: Ik
            },
            children: Jk(Hk(!0), Gi.e)
          });
          break;
        case "buy":
        case "recharge":
          xk = (0, tk.jsx)(qk.m, {
            className: "StoreCtaButton",
            loading: Tk,
            disabled: null === Xk,
            onClick: Lk,
            analyticsClick: {
              id: "store.buy",
              value: Ik
            },
            children: Jk(Hk(!1))
          })
      }
      return (0, tk.jsx)("div", {
        className: ik()("StoreCta", {
          StoreCtaHighlight: ak,
          StoreCtaLabelFirst: null !== wk
        }),
        onClick: kk => {
          kk.stopPropagation(), "needsRecipient" === Fk && Zk()
        },
        children: xk
      })
    }

    function Jy() {
      const {
        t: kk
      } = (0, yk.y)();
      return (0, tk.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, tk.jsxs)("li", {
          children: [(0, tk.jsx)(lk.e, {
            name: "check"
          }), (0, tk.jsx)(ey, {
            text: kk("store:colourfulNames")
          })]
        }), (0, tk.jsxs)("li", {
          children: [(0, tk.jsx)(lk.e, {
            name: "check"
          }), kk("store:perkCapes")]
        }), (0, tk.jsxs)("li", {
          children: [(0, tk.jsx)(lk.e, {
            name: "check"
          }), kk("store:perkNoAdverts")]
        }), (0, tk.jsxs)("li", {
          children: [(0, tk.jsx)(lk.e, {
            name: "check"
          }), kk("store:perkFriends", {
            count: (0, rk.b)(["super"])
          })]
        })]
      })
    }

    function xy(kk) {
      let {
        daysLeft: Fk,
        totalDays: Ik,
        urgent: Xk
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)(), lk = Ik > 0 ? Math.min(1, Math.max(.03, Fk / Ik)) : 1;
      return (0, tk.jsxs)("div", {
        className: ik()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Xk
        }),
        children: [(0, tk.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Fk ? Tk("store:oneDayLeft") : Tk("store:daysLeft", {
            days: Fk
          })
        }), (0, tk.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, tk.jsx)("i", {
            style: {
              width: 100 * lk + "%"
            }
          })
        })]
      })
    }

    function Py(kk) {
      let {
        state: Fk,
        urgent: Ik,
        daysLeft: Xk,
        totalDays: Tk,
        recipientHasSuperRank: ak,
        busy: qk,
        highlight: Lk,
        onOpen: Zk,
        onAct: jk,
        onNeedRecipient: ek,
        onLogin: wk
      } = kk;
      const {
        t: Hk
      } = (0, yk.y)(), Jk = Zy(Fk), {
        days: xk
      } = Rk.l.product, Pk = Hk("store:recipientHasSuperRank", {
        giftDays: xk
      }), Kk = mk("subscribed" === Fk);
      return (0, tk.jsxs)("div", {
        className: ik()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Jk,
          StoreSuperRankTileUrgent: "recharge" === Fk && Ik,
          StoreSuperRankTileWithChip: ak,
          StoreSuperRankTileGiftReady: "gift" === Fk
        }),
        ...jy(Hk("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: iy,
        onFocus: iy,
        onClick: Zk,
        children: [(0, tk.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Bi.e})`
          }
        }), Jk && (0, tk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, tk.jsxs)("div", {
          className: "StoreTileContent",
          children: [ak && (0, tk.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Pk,
            children: Pk
          }), (0, tk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, tk.jsx)(lk.e, {
              name: "bolt"
            }), " ", Hk("homePage:superRank")]
          }), Jk && (0, tk.jsx)("div", {
            className: "StoreTilePitch",
            children: Hk("store:giftPitch", {
              days: xk
            })
          }), "recharge" === Fk && (0, tk.jsx)(xy, {
            daysLeft: Xk,
            totalDays: Tk,
            urgent: Ik
          }), Kk && (0, tk.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, tk.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Kk
            })
          }), (0, tk.jsx)(Jy, {}), (0, tk.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, tk.jsx)(Hy, {
              state: Fk,
              item: "superRank",
              price: Rk.l.price,
              busy: qk,
              highlight: Lk,
              onAct: jk,
              onNeedRecipient: ek,
              onLogin: wk
            }), "needsRecipient" === Fk && (0, tk.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Hk("store:pickRecipientFirst")
            }), "recharge" === Fk && Ik && (0, tk.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Xk ? Hk("store:endsInOneDay") : Hk("store:endsInDays", {
                days: Xk
              })
            })]
          })]
        })]
      })
    }
    const Ky = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Qy(kk) {
      var Fk;
      let {
        pack: Ik,
        state: Tk,
        busy: ak,
        onOpen: qk,
        onAct: Lk,
        onNeedRecipient: Zk,
        onLogin: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = si.d[Ik], Hk = Oi.l[Ik], Jk = (0, Bi.n)(Ik), xk = (0, Xk.useRef)(null);
      (0, qy.p)(Ik, xk);
      const Pk = Zy(Tk),
        Kk = null !== (Fk = wk.displayName) && void 0 !== Fk ? Fk : Ik,
        Qk = (0, ay.b)((() => {
          (0, ly.e)();
          const kk = (0, qy.i)(Ik);
          void 0 !== kk && (0, Xy.d)((0, qy.e)(kk))
        })),
        [sk] = (0, Xk.useState)(Wi.j);
      return (0, tk.jsxs)("div", {
        className: ik()("StoreTile StorePackTile", Ky[wk.tier], {
          StorePackTileOwned: "owned" === Tk,
          StorePackTileRecipientOwns: "recipientOwns" === Tk,
          StoreTileGift: Pk
        }),
        ...jy(Kk),
        ref: xk,
        "data-store-item": Ik,
        onClick: qk,
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || sk || Qk.start()
        },
        onPointerLeave: Qk.cancel,
        children: [Hk && (0, tk.jsx)(Hk, {}), (0, tk.jsx)("div", {
          className: "StorePackCharacters",
          children: Jk.map((kk => (0, tk.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Bi.i)(kk)})`
            }
          }, kk)))
        }), (0, tk.jsx)("div", {
          className: "StoreTileScrim"
        }), Pk && (0, tk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, tk.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, tk.jsx)("div", {
            className: "StoreTileTitle",
            children: Kk
          }), (0, tk.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, tk.jsx)(Ly.b, {
              tier: wk.tier
            }), " \xb7 ", ek("store:itemCount", {
              count: (0, Mi.f)(Ik)
            }), "owned" === Tk && (0, tk.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, tk.jsx)(lk.e, {
                name: "check"
              }), " ", ek("general:owned")]
            })]
          }), (0, tk.jsx)(Hy, {
            state: Tk,
            item: Ik,
            price: (0, Rk.g)(Ik),
            busy: ak,
            onAct: Lk,
            onNeedRecipient: Zk,
            onLogin: jk
          })]
        })]
      })
    }
    var sy = Ik(3004),
      Vy = Ik(1513),
      zy = Ik(1420),
      Sy = Ik(3511);

    function oy() {
      return (0, tk.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var vy = Ik(1320),
      Ey = Ik(1518),
      Oy = Ik(34218);

    function ny(kk) {
      let {
        character: Fk,
        drawn: Ik,
        onDrawn: Tk
      } = kk;
      const yk = (0, Xk.useRef)(null),
        lk = (0, Oy.f)(Fk);
      return (0, tk.jsx)("div", {
        className: ik()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Ik
        }),
        children: (0, tk.jsx)(Xk.Suspense, {
          fallback: null,
          children: (0, tk.jsx)(ly.c, {
            ref: yk,
            framing: "store",
            turntableFromYaw: Ik ? lk.yaw : null,
            onReady: () => {
              var kk, Ik;
              null === (kk = yk.current) || void 0 === kk || kk.setOrbit(lk), null === (Ik = yk.current) || void 0 === Ik || Ik.setAllCosmetics(Ey.c[Fk].cosmetics)
            },
            onDrawn: Tk
          })
        })
      })
    }
    const Gy = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      py = new Set(["wildSpirits"]);

    function uy(kk) {
      var Fk;
      let {
        tile: Ik,
        design: Tk,
        canGoLive: ak,
        live: qk,
        busy: Lk,
        highlight: Zk,
        onLiveStart: jk,
        onLiveEnd: ek,
        onOpen: wk,
        onAct: Hk,
        onNeedRecipient: Jk,
        onLogin: xk
      } = kk;
      const {
        t: Pk
      } = (0, yk.y)(), {
        pack: Kk,
        state: Qk
      } = Ik, sk = si.d[Kk], Vk = (0, si.e)(Kk), zk = (0, Bi.l)(Kk), Sk = Oi.l[zk], vk = py.has(zk), {
        tier: Ek
      } = sk, Ok = "legendary" === Ek || "mythic" === Ek, nk = (0, Xk.useRef)(null);
      (0, vy.c)(nk, "epic" === Ek || Ok || vk);
      const [Gk, uk] = (0, Xk.useState)(!1);
      return !qk && Gk && uk(!1), (0, tk.jsxs)("div", {
        ref: nk,
        className: ik()("StoreCharacterCard", `StoreCharacterCard${Tk}`, Gy[Ek], {
          StoreCharacterCardOwned: "owned" === Qk || "recipientOwns" === Qk,
          StoreCharacterCardGift: Zy(Qk),
          StoreCharacterCardItem: void 0 === Vk
        }),
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || !ak || qk || void 0 === Vk || jk()
        },
        onPointerLeave: ek,
        children: [(0, tk.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Sk && (0, tk.jsx)(Sk, {
            simple: !0
          })
        }), Ok && (0, tk.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, tk.jsxs)(pk.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Vy.f)({
            kind: "pack",
            pack: Kk
          }),
          "data-store-item": Kk,
          onClick: kk => {
            (0, zy.e)(kk) && (kk.preventDefault(), wk())
          },
          children: [(0, tk.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, tk.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, tk.jsx)("div", {
              className: ik()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Gk
              }),
              style: {
                backgroundImage: `url(${(0,Bi.t)(Kk)})`
              }
            }), qk && void 0 !== Vk && (0, tk.jsx)(ny, {
              character: Vk,
              drawn: Gk,
              onDrawn: () => {
                uk(!0)
              }
            })]
          }), (0, tk.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Fk = sk.displayName) && void 0 !== Fk ? Fk : Kk
          }), (0, tk.jsx)(Ly.b, {
            tier: Ek,
            className: "StoreCharacterTier"
          })]
        }), (0, tk.jsx)("div", {
          className: "StoreCharacterScrim"
        }), vk && (0, tk.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, tk.jsx)(oy, {})
        }), "owned" === Qk && (0, tk.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Pk("general:owned"),
          "aria-label": Pk("general:owned"),
          children: (0, tk.jsx)(lk.e, {
            name: "check"
          })
        }), (0, tk.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, tk.jsx)(Hy, {
            state: Qk,
            item: Kk,
            price: (0, Rk.g)(Kk),
            busy: Lk,
            highlight: Zk,
            onAct: Hk,
            onNeedRecipient: Jk,
            onLogin: xk
          })
        })]
      })
    }

    function by(kk) {
      let {
        tiles: Fk,
        busy: Ik,
        highlightItem: Tk,
        onOpen: ik,
        onAct: yk,
        onNeedRecipient: lk,
        onLogin: ak
      } = kk;
      const qk = (0, Sy.t)("storeCharacterCardFoil"),
        Lk = (0, Sy.t)("storeCharacterCardSpotlight"),
        Zk = qk ? "Foil" : Lk ? "Spotlight" : "Showcase",
        [jk] = (0, Xk.useState)(Wi.j),
        [ek, wk] = (0, Xk.useState)(null);
      return (0, tk.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Fk.map((kk => (0, tk.jsx)(uy, {
          tile: kk,
          design: Zk,
          canGoLive: !jk,
          live: ek === kk.pack,
          busy: Ik,
          highlight: Tk === kk.pack,
          onLiveStart: () => {
            wk(kk.pack)
          },
          onLiveEnd: () => {
            wk((Fk => Fk === kk.pack ? null : Fk))
          },
          onOpen: () => {
            ik(kk.pack)
          },
          onAct: () => {
            yk(kk.pack)
          },
          onNeedRecipient: lk,
          onLogin: () => {
            ak(kk.pack)
          }
        }, kk.pack)))
      })
    }
    var Ry = Ik(34231);

    function Uy(kk) {
      let {
        title: Fk
      } = kk;
      return (0, tk.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, tk.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Fk
        })
      })
    }

    function Cy(kk) {
      let {
        mountAtOnce: Fk,
        children: Ik
      } = kk;
      const Tk = (0, Xk.useRef)(null),
        [ik, yk] = (0, Xk.useState)(Fk),
        lk = (0, Ry.c)();
      return (0, Xk.useLayoutEffect)((() => {
        const kk = Tk.current;
        kk && kk.getBoundingClientRect().top < kk.parentElement.getBoundingClientRect().bottom && yk(!0)
      }), []), ik || lk ? (0, tk.jsx)(tk.Fragment, {
        children: Ik
      }) : (0, tk.jsx)("div", {
        ref: Tk
      })
    }

    function Ny(kk) {
      let {
        layout: Fk,
        mountAtOnce: Ik,
        bundleGift: Xk,
        superRankTotalDays: Tk,
        busy: ik,
        highlightItem: lk,
        onOpen: ak,
        onAct: qk,
        onNeedRecipient: Lk,
        onLogin: Zk,
        dailyDropTile: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = Fk.packs.filter((kk => void 0 === (0, si.e)(kk.pack) && !(0, si.i)(kk.pack))), Hk = Fk.packs.filter((kk => void 0 !== (0, si.e)(kk.pack))), Jk = Fk.packs.filter((kk => (0, si.i)(kk.pack)));
      return (0, tk.jsxs)(tk.Fragment, {
        children: [(0, tk.jsx)(sy.b, {
          className: "StoreSuperGems",
          gift: Xk,
          highlightSku: lk,
          leadingTile: jk
        }), (0, tk.jsx)(Uy, {
          title: ek("store:rank")
        }), (0, tk.jsx)(Py, {
          state: Fk.superRank.state,
          urgent: Fk.superRank.urgent,
          daysLeft: Fk.superRankDaysLeft,
          totalDays: Tk,
          recipientHasSuperRank: Fk.recipientHasSuperRank,
          busy: ik,
          highlight: "superRank" === lk,
          onOpen: () => {
            ak("superRank")
          },
          onAct: () => {
            qk("superRank")
          },
          onNeedRecipient: Lk,
          onLogin: () => {
            Zk("superRank")
          }
        }), (0, tk.jsxs)(Cy, {
          mountAtOnce: Ik,
          children: [(0, tk.jsx)(Uy, {
            title: ek("store:bundles")
          }), (0, tk.jsx)("div", {
            className: "StorePackGrid",
            children: wk.map((kk => (0, tk.jsx)(Qy, {
              pack: kk.pack,
              state: kk.state,
              busy: ik,
              onOpen: () => {
                ak(kk.pack)
              },
              onAct: () => {
                qk(kk.pack)
              },
              onNeedRecipient: Lk,
              onLogin: () => {
                Zk(kk.pack)
              }
            }, kk.pack)))
          }), (0, tk.jsxs)(Cy, {
            mountAtOnce: Ik,
            children: [(0, tk.jsx)(Uy, {
              title: ek("store:characters")
            }), (0, tk.jsx)(by, {
              tiles: Hk,
              busy: ik,
              highlightItem: lk,
              onOpen: ak,
              onAct: qk,
              onNeedRecipient: Lk,
              onLogin: Zk
            }), Jk.length > 0 && (0, tk.jsxs)(tk.Fragment, {
              children: [(0, tk.jsx)(Uy, {
                title: ek("store:premiumItems")
              }), (0, tk.jsx)(by, {
                tiles: Jk,
                busy: ik,
                highlightItem: lk,
                onOpen: ak,
                onAct: qk,
                onNeedRecipient: Lk,
                onLogin: Zk
              })]
            })]
          })]
        })]
      })
    }

    function cy(kk) {
      let {
        state: Fk,
        mode: Ik,
        giftName: Xk,
        busy: Tk,
        highlight: ik,
        purchaseError: lk,
        onBack: ak,
        onChooseRecipient: Lk,
        onAct: Zk,
        onLogin: jk
      } = kk;
      const {
        t: ek
      } = (0, yk.y)(), wk = mk("gift" !== Ik);
      return (0, tk.jsx)(yy, {
        onBack: ak,
        recipient: "gift" === Ik && (0, tk.jsxs)(tk.Fragment, {
          children: [Xk && (0, tk.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: ek("store:giftFor", {
              name: Xk
            }),
            children: [Gi.e, " ", ek("store:giftFor", {
              name: Xk
            })]
          }), !Xk && (0, tk.jsxs)("div", {
            ...(0, qk.Y)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Lk,
            children: [Gi.e, " ", ek("store:chooseRecipient")]
          })]
        }),
        cta: (0, tk.jsx)(Hy, {
          state: Fk,
          item: "superRank",
          price: Rk.l.price,
          busy: Tk,
          highlight: ik,
          onAct: Zk,
          onNeedRecipient: Lk,
          onLogin: jk
        }),
        afterCta: (0, tk.jsxs)(tk.Fragment, {
          children: [wk && (0, tk.jsx)("span", {
            className: "StoreTileNote",
            children: wk
          }), lk && (0, tk.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: ek(lk)
          })]
        })
      })
    }
    var Wy = Ik(134);
    const fy = Wy.n("kind", [Wy.C({
      kind: Wy.w("refused"),
      heldTierId: Wy.S(),
      until: Wy.y()
    }), Wy.C({
      kind: Wy.w("refund"),
      tierId: Wy.S(),
      refundedMs: Wy.y(),
      forfeitedMs: Wy.y(),
      premiumCurrency: Wy.y()
    }), Wy.C({
      kind: Wy.w("none")
    })]);
    async function By(kk) {
      const Fk = await (0, Ok.postJsonWithMetricsCookiesAndJsonResponse)(`${lF.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: kk
      }, {
        retries: 1
      });
      return fy.parse(Fk)
    }
    var dy = Ik(2983),
      Yy = Ik(3013);

    function Ay(kk, Fk) {
      const Ik = Math.max(1, Math.round(Fk / Nk.i));
      return [1 === Ik ? `${kk}OneDay` : kk, {
        days: Ik.toLocaleString()
      }]
    }

    function gy() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Wk.purchasesAllowed)() ? (0, tk.jsx)(my, {}) : null
    }

    function my() {
      const {
        t: kk
      } = (0, yk.y)(), {
        userContext: Fk
      } = (0, ek.d)(), {
        purchaseUnderWay: Ik,
        notice: Tk,
        subscribe: ik
      } = (0, dy.e)(), [lk, ak] = (0, Xk.useState)(null), [Lk, Zk] = (0, Xk.useState)(0), [jk, wk] = (0, Xk.useState)(!1), Hk = (0, Xk.useRef)(!0), Jk = Fk !== Ok.NULL_USER_CONTEXT, xk = null !== lk && lk.loadedFor === Fk ? lk.offer : null, Pk = null === Tk || void 0 === Tk ? void 0 : Tk.pendingIntentId, Kk = (0, Xk.useRef)(Pk);

      function Qk() {
        Zk((kk => kk + 1))
      }
      async function sk(kk) {
        wk(!1), await ik(kk), Hk.current && Qk()
      }
      if ((0, Xk.useEffect)((() => (Hk.current = !0, () => {
          Hk.current = !1
        })), []), (0, Xk.useEffect)((() => {
          void 0 !== Kk.current && void 0 === Pk && Qk(), Kk.current = Pk
        }), [Pk]), (0, Xk.useEffect)((() => {
          if (!Jk) return;
          let kk = !1;
          return wk(!1), async function() {
            const {
              offering: kk
            } = await (0, qF.h)().getOfferings("superRankPage"), Fk = null === kk || void 0 === kk ? void 0 : kk.packages.find((kk => null !== kk.price));
            return void 0 === Fk ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Fk,
              preview: await By(Fk.productId)
            }
          }().catch((kk => (console.error("Billing: loading the Super Rank subscription or its preview failed:", kk), {
            kind: "loadFailed"
          }))).then((Ik => {
            kk || ak((kk => "loadFailed" === Ik.kind && (null === kk || void 0 === kk ? void 0 : kk.loadedFor) === Fk ? kk : {
              loadedFor: Fk,
              offer: Ik
            }))
          })), () => {
            kk = !0
          }
        }), [Fk, Jk, Lk]), null === xk) return null;
      if ("loaded" !== xk.kind) return (0, tk.jsx)(Yy.g, {
        notice: {
          kind: "error",
          key: "unavailable" === xk.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Vk,
        preview: zk
      } = xk;
      if ("refused" === zk.kind) return (0, tk.jsx)(Yy.g, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(zk.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Sk = (0, sy.f)(Vk.price);
      if (jk && "refund" === zk.kind) {
        const {
          refundedMs: Fk,
          forfeitedMs: Xk,
          premiumCurrency: Tk
        } = zk, ik = Xk + (0 === Tk ? Fk : 0), [yk, lk] = Ay("payments:subscribeRefundsGemRank", Fk), [ak, Lk] = Ay("payments:subscribeForfeitsGemRank", ik);
        return (0, tk.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, tk.jsx)("div", {
            children: kk("payments:subscribeEndsGemRank")
          }), Tk > 0 && (0, tk.jsx)("div", {
            children: kk(yk, {
              ...lk,
              amount: Tk.toLocaleString()
            })
          }), ik > 0 && (0, tk.jsx)("div", {
            children: kk(ak, Lk)
          }), (0, tk.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, tk.jsx)(qk.g, {
              onClick: () => {
                wk(!1)
              },
              children: kk("general:cancel")
            }), (0, tk.jsx)(qk.m, {
              onClick: () => {
                sk(Vk)
              },
              loading: Ik,
              children: kk("payments:subscribeContinue", {
                price: Sk
              })
            })]
          })]
        })
      }
      return (0, tk.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, tk.jsx)(Yy.g, {
          notice: Tk,
          className: "SmallTextBold"
        }), (0, tk.jsx)(Yy.b, {
          className: "SmallTextBold"
        }), (0, tk.jsx)(qk.m, {
          onClick: () => {
            "refund" === zk.kind ? wk(!0) : sk(Vk)
          },
          disabled: void 0 !== Pk,
          loading: Ik,
          children: kk("payments:subscribeToSuperRank", {
            price: Sk
          })
        })]
      })
    }
    var hy = Ik(2494);

    function ry(kk) {
      let {
        state: Fk,
        view: Ik,
        claiming: Tk,
        onOpen: lk
      } = kk;
      const {
        t: Lk
      } = (0, yk.y)(), Zk = (0, Xk.useRef)(null), jk = "ready" === Ik.kind;
      (0, vy.c)(Zk, jk);
      const ek = (0, BF.i)(Fk);
      return (0, tk.jsxs)("div", {
        ref: Zk,
        className: ik()("DailyDropTile", {
          DailyDropTileReady: jk
        }),
        children: [jk && (0, tk.jsx)(ak.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, tk.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Lk("dailyDrop:name")
        }), (0, tk.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, tk.jsx)(hy.b, {
            className: "DailyDropTileBlock"
          }), (0, tk.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, tk.jsx)("span", {
              children: Lk("dailyDrop:collected", {
                count: Fk.collected.length,
                total: Fk.total
              })
            }), null !== ek && (0, tk.jsx)("span", {
              className: "DailyDropTileOdds",
              children: Lk("dailyDrop:odds", {
                percent: ek.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === Ik.kind && (0, tk.jsx)(qk.m, {
          className: "DailyDropTileOpen",
          onClick: lk,
          loading: Tk,
          children: Lk("dailyDrop:open")
        }), "waiting" === Ik.kind && (0, tk.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Lk("dailyDrop:nextIn", {
            count: Ik.hours
          })
        })]
      })
    }
    var Dy = Ik(2148);
    const My = 32;

    function kl(kk) {
      let {
        worn: Fk,
        VX: Ik,
        zX: Tk,
        className: ak
      } = kk;
      const {
        t: qk
      } = (0, yk.y)(), Lk = (0, Xk.useRef)(null), [Zk, jk] = (0, Xk.useState)(null), [ek, wk] = (0, Xk.useState)(!1);
      async function Hk() {
        var kk;
        const Fk = Lk.current;
        if (!Fk) return;
        const Xk = null === (kk = Fk.getDevTools()) || void 0 === kk ? void 0 : kk.canvas();
        let ik = null;
        try {
          ik = Xk ? function(kk) {
            if (0 === kk.width || 0 === kk.height) return null;
            const Fk = document.createElement("canvas");
            Fk.width = My, Fk.height = My;
            const Ik = Fk.getContext("2d", {
              willReadFrequently: !0
            });
            if (!Ik) return null;
            Ik.drawImage(kk, 0, 0, My, My);
            const {
              data: Xk
            } = Ik.getImageData(0, 0, My, My);
            for (let Tk = 3; Tk < Xk.length; Tk += 4)
              if (Xk[Tk] > 0) return kk.toDataURL("image/png");
            return null
          }(Xk) : null
        } catch (lk) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", lk)
        }
        null === ik && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), jk(null === ik ? {
          kind: "head"
        } : {
          kind: "still",
          src: ik
        }), Fk.updateCosmetic(Ik, Tk);
        const yk = new Promise((kk => {
          setTimeout(kk, 1e4)
        }));
        await Promise.race([Fk.ensureReadyForCapture(Ik), yk]).catch((kk => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", kk)
        })), Lk.current === Fk && wk(!0)
      }
      return (0, tk.jsxs)("div", {
        className: ik()("DailyDropRevealFigures", ak),
        children: [(0, tk.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, tk.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) && (0, tk.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: Zk.src,
              alt: "",
              draggable: !1
            }), "head" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) && (0, tk.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, tk.jsx)(Yi.e, {
                cosmetics: Fk
              })
            }), null === Zk && (0, tk.jsx)(sk.c, {})]
          }), (0, tk.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: qk("dailyDrop:before")
          })]
        }), (0, tk.jsx)(lk.e, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, tk.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, tk.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, tk.jsx)("div", {
              className: ik()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: ek
              }),
              children: (0, tk.jsx)(Xk.Suspense, {
                fallback: null,
                children: (0, tk.jsx)(ly.c, {
                  ref: Lk,
                  onReady: () => {
                    var kk, Ik;
                    null === (kk = Lk.current) || void 0 === kk || kk.resetCamera(), null === (Ik = Lk.current) || void 0 === Ik || Ik.setAllCosmetics(Fk)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      Hk()
                    }))
                  }
                })
              })
            }), !ek && (0, tk.jsx)(sk.c, {})]
          }), (0, tk.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: qk("dailyDrop:after")
          })]
        })]
      })
    }
    var Fl = Ik(1800);
    const Il = "dailyDropReminderAsked_";

    function Xl(kk) {
      return async function(kk) {
        if (kk.remindersOn || (0, zk.f)(zk.d.get("gameState"))) return null;
        const Fk = await Ok.userContextManager.getCurrentUserContext(),
          Ik = Il + Fk.whamm;
        if (null !== TI.j.getItem(Ik)) return null;
        const [Xk, Tk] = await Promise.all([(0, NF.f)().catch((kk => (console.error("Couldn't tell whether this device can take push notifications:", kk), null))), il()]);
        if (null === Xk && !Tk) return null;
        return {
          askedKey: Ik,
          requester: Xk
        }
      }(kk).catch((kk => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", kk), null)))
    }

    function Tl(kk, Fk) {
      TI.j.setItem(kk.askedKey, !0), (0, BF.s)("daily_drop.remind", Fk ? "yes" : "no"), Fk && async function(kk) {
        const Fk = (0, BF.u)({
            remindersOn: !0
          }),
          Ik = null === kk ? Promise.resolve() : kk(),
          [Xk, Tk] = await Promise.allSettled([Fk, Ik]);
        "rejected" === Xk.status && console.error("Failed to turn on Lucky Skin Block reminders:", Xk.reason);
        "rejected" === Tk.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Tk.reason);
        "rejected" !== Xk.status && "rejected" !== Tk.status || Fl.e.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(kk.requester)
    }

    function il() {
      return (0, CF.c)().then((kk => kk.app + kk.browser + kk.msnPlay > 0), (kk => (console.error("Couldn't tell where push notifications reach this account:", kk), !0)))
    }
    const yl = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      ll = {
        opening: 900,
        shrinking: 700
      };

    function al(kk) {
      let {
        drop: Fk,
        onClose: Ik
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)(), {
        userContext: ak
      } = (0, ek.d)(), {
        state: Lk,
        view: Zk
      } = (0, BF.w)(), [jk, wk] = (0, Xk.useState)("closed"), [Hk] = (0, Xk.useState)((() => ({
        ...ak.getPlayerCosmetics()
      }))), [Jk] = (0, Xk.useState)((() => (0, BF.l)(Fk, Hk))), [xk, Pk] = (0, Xk.useState)(!1), [Kk, Qk] = (0, Xk.useState)(!1), [sk] = (0, Xk.useState)((() => null === Lk ? Promise.resolve(null) : Xl(Lk))), [Vk, Sk] = (0, Xk.useState)(null), vk = (0, cF.d)(), {
        gameState: Ek
      } = (0, zk.j)(["gameState"]);
      async function Ok() {
        const kk = await sk;
        vk.current && (null === kk ? Ik() : (Sk(kk), wk("remind")))
      }

      function nk(kk) {
        null !== Vk && Tl(Vk, kk), Ik()
      }(0, Xk.useEffect)((() => {
        const kk = ll[jk];
        if (void 0 === kk) return;
        const Fk = setTimeout((() => {
          wk(yl[jk])
        }), kk);
        return () => {
          clearTimeout(Fk)
        }
      }), [jk]);
      const Gk = Tk(`dailyDrop:kind_${Jk.VX}`),
        pk = Lk && Tk("dailyDrop:collected", {
          count: Lk.collected.length,
          total: Lk.total
        }),
        uk = "revealed" === jk || "shrinking" === jk,
        bk = "equip" !== jk && "remind" !== jk;
      return (0, tk.jsx)(nX.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === jk ? () => {
          nk(!1)
        } : Ik,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, tk.jsxs)("div", {
          className: ik()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === jk,
            DailyDropRevealShrinking: "shrinking" === jk,
            DailyDropRevealFiguresShown: "shrinking" === jk || "equip" === jk || "remind" === jk
          }),
          children: [(0, tk.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, tk.jsx)(kl, {
              className: "DailyDropRevealStageFigures",
              worn: Hk,
              VX: Jk.VX,
              zX: Jk.zX
            }), ("closed" === jk || "opening" === jk) && (0, tk.jsx)(hy.b, {
              className: "DailyDropRevealBlock",
              open: "opening" === jk
            }), uk && (0, tk.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, tk.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Dy.k)(Jk.VX,Jk.zX).previewTex}.png`,
                alt: Gk,
                draggable: !1
              })
            })]
          }), bk && (0, tk.jsxs)(tk.Fragment, {
            children: [(0, tk.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, tk.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: uk ? Gk : Tk("dailyDrop:name")
              }), "closed" === jk && (0, tk.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Tk("dailyDrop:tapToOpen")
              }), "revealed" === jk && (0, tk.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Tk("dailyDrop:tapToContinue")
              })]
            }), (0, tk.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Tk("closed" === jk ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                wk(yl[jk])
              }
            })]
          }), "equip" === jk && (0, tk.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, tk.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Gk
            }), (0, tk.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Tk("dailyDrop:equipQuestion")
            }), (0, tk.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, tk.jsx)(qk.d, {
                className: "DailyDropRevealButton",
                disabled: xk,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, BF.s)("daily_drop.not_now", Fk), Ok()
                },
                children: Tk("dailyDrop:notNow")
              }), (0, tk.jsx)(qk.d, {
                className: "DailyDropRevealButton",
                loading: xk,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, BF.s)("daily_drop.equip", Fk), Pk(!0), Qk(!1);
                    try {
                      await (0, BF.e)(ak, Jk.VX, Jk.zX)
                    } catch (kk) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", kk), Pk(!1), void Qk(!0)
                    }
                    await Ok()
                  }()
                },
                children: Tk("dailyDrop:equip")
              })]
            }), Kk && (0, tk.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Tk("dailyDrop:equipFailed")
            }), !(0, zk.f)(Ek) && (0, tk.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: xk,
              onClick: () => {
                var kk;
                (0, BF.s)("daily_drop.customise", Fk), kk = Jk.VX, II.g.GL(SX, kk), zk.d.set({
                  openEverythingMenuName: tF.r.CUSTOMISATION
                }), Ik()
              },
              children: [Tk("dailyDrop:customise"), " ", (0, tk.jsx)(lk.e, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), pk && (0, tk.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [pk, "waiting" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) && ` \xb7 ${Tk("dailyDrop:nextInInline",{count:Zk.hours})}`]
            })]
          }), "remind" === jk && (0, tk.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, tk.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Tk("dailyDrop:remindTitle")
            }), (0, tk.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Tk("dailyDrop:remindSubtitle")
            }), (0, tk.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, tk.jsx)(qk.d, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  nk(!1)
                },
                children: Tk("dailyDrop:remindNo")
              }), (0, tk.jsx)(qk.d, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  nk(!0)
                },
                children: Tk("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function ql(kk, Fk) {
      const {
        t: Ik
      } = (0, yk.y)(), Tk = function(kk, Fk) {
        const {
          state: Ik,
          view: Tk
        } = (0, BF.w)(), [ik, yk] = (0, Xk.useState)(!1), [lk, ak] = (0, Xk.useState)(!1), [qk, Lk] = (0, Xk.useState)(null), tk = (0, Xk.useRef)(null), Zk = (0, Xk.useRef)(!1), jk = Fk && "ready" === (null === Tk || void 0 === Tk ? void 0 : Tk.kind);
        (0, Xk.useEffect)((() => {
          kk ? jk && !Zk.current && (Zk.current = !0, (0, BF.s)("daily_drop.shown", "tile")) : Zk.current = !1
        }), [kk, jk]), (0, Xk.useEffect)((() => {
          kk || (Jk(), ak(!1))
        }), [kk]);
        const ek = kk && null === qk && !(0, BF.r)(Tk);
        (0, Xk.useEffect)((() => {
          ek && zk.d.set({
            openEverythingMenuName: tF.r.CUSTOMISATION
          })
        }), [ek]);
        const wk = (0, Xk.useRef)(!1),
          Hk = (0, Xk.useRef)(kk);

        function Jk() {
          null !== tk.current && (tk.current = null, Lk(null))
        }
        return Hk.current = kk, {
          state: Ik,
          view: Tk,
          claiming: ik,
          claimFailed: lk,
          reveal: qk,
          open: async function() {
            if (!wk.current) {
              wk.current = !0, yk(!0), ak(!1);
              try {
                const {
                  state: kk,
                  drop: Fk
                } = await (0, BF.b)();
                if (null === kk || null === Fk) return;
                if (!Hk.current) return;
                (0, BF.s)("daily_drop.open", Fk), tk.current = {
                  state: kk,
                  drop: Fk
                }, Lk(tk.current)
              } catch (kk) {
                console.error("Failed to claim the Lucky Skin Block", kk), Hk.current && ak(!0)
              } finally {
                wk.current = !1, yk(!1)
              }
            }
          },
          closeReveal: Jk
        }
      }(kk, Fk);
      return {
        shown: (0, BF.r)(Tk.view) || null !== Tk.reveal,
        tile: Tk.state && Tk.view && (0, tk.jsx)(ry, {
          state: Tk.state,
          view: Tk.view,
          claiming: Tk.claiming,
          onOpen: Tk.open
        }),
        claimFailed: Tk.claimFailed && (0, tk.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Ik("dailyDrop:claimFailed")
        }),
        reveal: Tk.reveal && (0, tk.jsx)(al, {
          drop: Tk.reveal.drop,
          onClose: Tk.closeReveal
        })
      }
    }

    function Ll(kk) {
      let {
        show: Fk
      } = kk;
      const Ik = ql(Fk, Fk);
      return Fk && Ik.shown ? (0, tk.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [Ik.claimFailed, Ik.tile && (0, tk.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: Ik.tile
        }), Ik.reveal]
      }) : null
    }
    const tl = {
      kind: "board"
    };
    let Zl = !1;

    function jl(kk) {
      return "found" === kk.status || "error" === kk.status && "store:giftRecipientLookupFailed" === kk.error ? kk.name : null
    }(0, ck.s)(Vi.prefetchBillingOfferings);
    const el = (0, Xk.memo)((function(kk) {
      var Fk;
      let {
        show: Tk
      } = kk;
      const {
        t: lk
      } = (0, yk.y)(), {
        userContext: ak
      } = (0, ek.d)(), qk = ak !== Ok.NULL_USER_CONTEXT, Lk = Ui(ak), [Zk, jk] = (0, Hk.c)(), {
        page: wk,
        urlMode: Jk,
        goTo: xk
      } = (0, Ci.h)(), Pk = function(kk) {
        return "superRank" === kk.kind ? "superRank" : "pack" === kk.kind ? kk.pack : null
      }(wk), {
        openEverythingMenuName: Kk,
        gameState: Qk
      } = (0, zk.j)(["openEverythingMenuName", "gameState"]), sk = null !== Kk;
      ! function(kk, Fk) {
        const [Tk] = (0, Xk.useState)(Wi.j), [ik, yk] = (0, Xk.useState)(!1);
        Tk && Fk && !ik && yk(!0);
        const lk = (0, HX.m)(),
          ak = Tk && ik && kk && !lk;
        (0, Xk.useEffect)((() => {
          if (!ak) return;
          let kk = null,
            Fk = null,
            Xk = null;
          const Tk = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, qF.h)().purchaseUnderWay,
            ik = () => {
              var Ik;
              null === (Ik = Xk) || void 0 === Ik || Ik(), Xk = null, null !== kk && (clearTimeout(kk), kk = null), null !== Fk && (clearTimeout(Fk), Fk = null)
            },
            yk = () => {
              (0, Ni.r)(!1), (0, Ni.o)(!1), ik(), kk = setTimeout((() => {
                kk = null, Xk = (0, ci.b)((() => {
                  Xk = null, Tk() ? yk() : ((0, Ni.r)(!0), Fk = setTimeout((() => {
                    Fk = null, Xk = (0, ci.b)((() => {
                      Xk = null, Tk() ? yk() : (0, Ni.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Ik(4645))).then((kk => {
                    kk.startBackgroundGameSetup()
                  }), (kk => {
                    console.warn("Background game setup: its chunk failed to load", kk)
                  })))
                }))
              }), 2e3)
            };
          for (const Ik of fi) window.addEventListener(Ik, yk, {
            capture: !0,
            passive: !0
          });
          return yk(), () => {
            for (const kk of fi) window.removeEventListener(kk, yk, {
              capture: !0
            });
            ik(), (0, Ni.r)(!1), (0, Ni.o)(!1)
          }
        }), [ak])
      }(Tk && sk, "pack" === wk.kind);
      const Vk = "landingPage" === Qk;
      (0, Xk.useEffect)((() => {
        sk && (0, Vi.prefetchBillingOfferings)()
      }), [sk]), (0, Xk.useEffect)((() => {
        sk && !Tk && Vk && (0, Bi.w)()
      }), [sk, Tk, Vk]);
      const [Sk, vk] = (0, Xk.useState)(0), [Ek, nk] = (0, Xk.useState)(null), [Gk, pk] = (0, Xk.useState)(null), [uk, bk] = (0, Xk.useState)(null), [Uk, Ck] = (0, Xk.useState)(null), Nk = (0, Xk.useRef)(null), fk = (0, Xk.useRef)(null), Bk = (0, Xk.useRef)(null), dk = (0, Xk.useRef)(!1), Yk = (0, ck.A)(), Ak = (0, Xk.useRef)(0), gk = (0, Xk.useRef)(!1);

      function mk() {
        vk((kk => kk + 1))
      }(0, Xk.useEffect)((() => {
        if (Tk) {
          if (Zl = !0, (0, ck.l)(), Yk && Yk.seq !== Ak.current) {
            var kk;
            Ak.current = Yk.seq, "loginResume" !== Yk.source && (0, ck.z)();
            const Fk = (0, ck.d)(Yk);
            Jk || xk(Fk), Ck(null !== (kk = Yk.highlight) && void 0 !== kk ? kk : null), pk(null), "gift" === Yk.mode && Yk.giftRecipientName ? Lk.choose(Yk.giftRecipientName, "prefilled") : "current" !== Yk.mode && Lk.clear(), "gift" !== Yk.mode || Yk.giftRecipientName || mk(), (0, Mk.reportAnalyticsClick)({
              id: "store.open",
              value: Yk.source
            })
          } else gk.current || (0, Mk.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          gk.current = !0
        } else gk.current = !1
      }), [Tk, Yk]), (0, Xk.useEffect)((() => {
        if (!Uk) return;
        const kk = setTimeout((() => {
          Ck(null)
        }), 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Uk]), (0, Xk.useLayoutEffect)((() => {
        const kk = Nk.current;
        if (!Tk || !kk) return fk.current = null, void(Bk.current = null);
        var Fk;
        if (Pk) fk.current = Pk, null === (Fk = kk.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Fk || Fk.focus();
        else if (fk.current) {
          const Fk = Bk.current;
          null !== Fk && (kk.scrollTop = Fk);
          const Ik = kk.querySelector(`[data-store-item="${fk.current}"]`);
          if (Ik) {
            const Xk = Ik.getBoundingClientRect(),
              Tk = kk.getBoundingClientRect();
            Ik.focus({
              preventScroll: null !== Fk && Xk.bottom > Tk.top && Xk.top < Tk.bottom
            })
          }
          fk.current = null
        }
      }), [Pk, Tk]), (0, Xk.useEffect)((() => {
        pk(null)
      }), [Lk.query]), (0, Xk.useEffect)((() => {
        if (!uk) return;
        const kk = setTimeout((() => {
          bk(null)
        }), 8e3);
        return () => {
          clearTimeout(kk)
        }
      }), [uk]);
      const hk = ak.superRankInfo,
        rk = ak.isLoggedIn() || (0, Wk.guestsMayBuy)(),
        Dk = ak.getOwnedCosmeticPacks(),
        kF = (0, Gi.q)(Lk.query),
        FF = (0, Gi.h)({
          mode: kF,
          loggedIn: qk ? rk : null,
          superRankInfo: hk,
          now: Date.now(),
          ownedPacks: Dk,
          packs: si.s,
          recipient: Lk.recipient
        });
      (0, Xk.useEffect)((() => {
        if (!rk || !Tk) return;
        const kk = (0, ck.z)(),
          Fk = kk && (0, Gi.o)(kk, si.s);
        kk && Fk && ((0, Mk.reportAnalyticsClick)({
          id: "store.login_resume",
          value: kk.item
        }), (0, ck.m)(Fk))
      }), [rk, Tk]);
      const IF = (0, Gi.s)({
        superRankDaysLeft: FF.superRankDaysLeft,
        openedThisSession: Zl || Tk,
        seenNewItems: (0, ck.h)()
      });
      (0, Xk.useEffect)((() => {
        (0, ck.w)(IF)
      }), [IF]);
      const XF = "self" === kF,
        TF = ql(Tk, Tk && XF && "board" === wk.kind);
      if (!Tk || !(0, Wk.purchasesAllowed)()) return null;
      const iF = jk > Zk && Zk <= 700,
        yF = !iF && jk <= 420,
        lF = "gift" === kF ? jl(Lk.recipient) : null,
        aF = null !== Ek;

      function LF(kk) {
        (0, Si.e)(kk, "gift" === kF ? Lk.query.trim() : null)
      }

      function tF(kk, Fk) {
        (0, Mk.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Fk?"gift":"self"}:${kk}`
        }), Fk && (Lk.recordGift(Fk.name, kk), ZF(Fk))
      }

      function ZF(kk) {
        ! function(kk) {
          try {
            TI.j.setItem(ui, (0, Gi.z)(Ri(), kk))
          } catch {}
        }({
          name: kk.name,
          cosmetics: kk.cosmetics
        }), xk(tl), bk((Fk => {
          var Ik;
          return {
            name: kk.name,
            seq: (null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.seq) && void 0 !== Ik ? Ik : 0) + 1
          }
        }))
      }
      async function jF(kk) {
        var Fk, Ik;
        if (dk.current) return;
        if (!rk) return void LF(kk);
        pk(null), Ck(null);
        const Xk = "gift" === kF ? {
          name: jl(Lk.recipient),
          cosmetics: Lk.recipientCosmetics
        } : null;
        if (Xk && !Xk.name) return void mk();
        const Tk = "superRank" === kk ? Rk.l.id : (0, Rk.e)(kk);
        dk.current = !0;
        const ik = await (0, ni.d)(Tk, null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Fk ? Fk : null);
        if (dk.current = !1, !ik) return;
        nk(kk);
        const yk = await oi.c.purchase(Tk, null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Ik ? Ik : null);
        nk(null), yk ? pk(yk) : (tF(kk, Xk), Xk || (await (0, vi.flushClientAnalyticsEvents)(), (0, zi.refreshWithoutConfirmation)("superRank" === kk ? "/super-rank-welcome" : `/pack-welcome/${kk}`)))
      }
      const eF = ik()("Store", {
        StoreGift: "gift" === kF,
        StorePortrait: iF,
        StoreCompact: yF
      });
      if ("pack" === wk.kind) {
        const kk = wk.pack,
          Fk = FF.packs.find((Fk => Fk.pack === kk));
        return (0, tk.jsx)("div", {
          ref: Nk,
          className: "CosmeticShopContainer",
          children: (0, tk.jsx)(Oi.g, {
            pack: kk,
            onBack: () => {
              xk(tl)
            },
            onPurchased: Fk => {
              tF(kk, Fk ? {
                name: Fk,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === kF && lF && Fk && (0, tk.jsxs)(tk.Fragment, {
              children: [(0, tk.jsx)(Hy, {
                state: Fk.state,
                item: kk,
                price: (wF = kk, "superRank" === wF ? Rk.l.price : (0, Rk.g)(wF)),
                busy: aF,
                onAct: () => {
                  jF(kk)
                },
                onNeedRecipient: () => {
                  xk(tl), mk()
                },
                onLogin: () => {
                  LF(kk)
                },
                highlight: Uk === kk
              }), Gk && (0, tk.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: lk(Gk)
              })]
            }),
            ownedPacks: Dk,
            startAsGift: "gift" === kF,
            initialGiftRecipient: "gift" === kF ? null !== lF && void 0 !== lF ? lF : Lk.query.trim() : "",
            highlightCta: Uk === kk
          }, kk)
        })
      }
      var wF;
      return "superRank" === wk.kind ? (0, tk.jsx)("div", {
        ref: Nk,
        className: ik()(eF, "StoreDetailView"),
        children: (0, tk.jsx)(cy, {
          state: FF.superRank.state,
          mode: kF,
          giftName: lF,
          busy: aF,
          highlight: "superRank" === Uk,
          purchaseError: Gk,
          onBack: () => {
            xk(tl)
          },
          onChooseRecipient: () => {
            xk(tl), mk()
          },
          onAct: () => {
            jF("superRank")
          },
          onLogin: () => {
            LF("superRank")
          }
        })
      }) : (0, tk.jsxs)("div", {
        ref: Nk,
        className: eF,
        onScroll: kk => {
          Bk.current = kk.currentTarget.scrollTop
        },
        children: [(0, tk.jsx)("div", {
          className: "StoreTopRow",
          children: (0, tk.jsx)(Di, {
            selfName: qk ? ak.getPlayerName() : "",
            giftRecipient: Lk,
            suggestionsVersion: null !== (Fk = null === uk || void 0 === uk ? void 0 : uk.seq) && void 0 !== Fk ? Fk : 0,
            pulseSignal: Sk,
            disabled: aF || !qk
          })
        }), uk && (0, tk.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            bk(null)
          },
          children: [(0, tk.jsx)(Ei.d, {
            showSignal: uk.seq
          }), Gi.e, " ", lk("store:giftSent", {
            name: uk.name
          })]
        }, uk.seq), !uk && Gk && (0, tk.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: lk(Gk)
        }), XF && TF.claimFailed, (0, tk.jsx)(Ny, {
          layout: FF,
          mountAtOnce: null !== fk.current,
          bundleGift: "gift" === kF ? {
            recipientName: lF,
            lookingUp: "pending" === Lk.recipient.status,
            busy: aF,
            onNeedRecipient: mk,
            onSent: kk => {
              (0, Mk.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), ZF({
                name: kk,
                cosmetics: Lk.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, Gi.u)(hk),
          busy: aF,
          highlightItem: Uk,
          onOpen: function(kk) {
            (0, Mk.reportAnalyticsClick)({
              id: "store.item_open",
              value: kk
            }), xk((0, ck.g)(kk))
          },
          onAct: jF,
          onNeedRecipient: mk,
          onLogin: LF,
          dailyDropTile: XF && TF.tile
        }), "gift" !== kF && (0, tk.jsx)(gy, {}), TF.reveal]
      })
    }));
    var wl = Ik(2609),
      Hl = Ik(8822),
      Jl = Ik(8637),
      xl = Ik(2672),
      Pl = Ik(2513),
      Kl = Ik(2564),
      Ql = Ik(2578),
      sl = Ik(2582),
      Vl = Ik(2659),
      zl = Ik(2641),
      Sl = Ik(2274),
      ol = Ik(2316),
      vl = Ik(2302),
      El = Ik(1961),
      Ol = Ik(2584),
      nl = Ik(2324);

    function Gl(kk) {
      let {
        show: Fk
      } = kk;
      return Fk ? (0, tk.jsx)(pl, {}) : null
    }

    function pl() {
      const {
        t: kk
      } = (0, yk.y)(), {
        followsLeader: Fk
      } = (0, Pl.e)(), {
        loading: Ik,
        friends: Tk,
        requests: ak,
        invites: Lk
      } = (0, Bk.j)(), {
        userContext: Zk
      } = (0, ek.d)(), [jk, wk] = (0, Xk.useState)(nl.j);
      (0, Xk.useEffect)((() => {
        (0, nl.b)()
      }), []);
      const Hk = ak.map((kk => kk.name)),
        {
          state: Jk,
          recentRequesters: xk
        } = (0, zl.l)(),
        Pk = new Map([...("loaded" === Jk.status ? Jk.recentPlayers : []).map((kk => [kk.preview.name, kk])), ...xk.map((kk => [kk.name, kk]))]),
        Kk = (0, Xk.useRef)(null),
        [Vk, zk] = (0, Xk.useState)(""),
        [Sk, vk] = (0, Xk.useState)("Enter"),
        [Ek, Ok] = (0, Xk.useState)(null);

      function nk() {
        Vk && (vk("Loading"), (0, vl.g)(Vk, "social_menu").then((kk => {
          if (Kk.current) switch (kk.kind) {
            case "sent":
              vk("Success");
              break;
            case "becameFriends":
              vk("BecameFriends");
              break;
            case "failed":
              Ok(kk.message), vk("Error")
          }
        })))
      }
      return (0, Xk.useEffect)((() => {
        if ("Enter" === Sk || "Loading" === Sk) return;
        const kk = setTimeout((() => {
          Kk.current.value = "", zk(""), vk("Enter")
        }), "Success" === Sk ? 1e3 : 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Sk]), (0, tk.jsx)("div", {
        className: "SocialMenu",
        children: (0, tk.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, tk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, tk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, tk.jsx)(sl.b, {
                label: kk("socialBar:addFriend")
              }), (0, tk.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, tk.jsxs)("div", {
                  className: ik()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Sk}`]: !0
                  }),
                  children: ["Loading" === Sk && (0, tk.jsx)(sk.c, {}), "Success" === Sk && (0, tk.jsx)(lk.e, {
                    name: "check"
                  }), "BecameFriends" === Sk && (0, tk.jsx)(tk.Fragment, {
                    children: kk("socialBar:nowFriends", {
                      playerName: Vk
                    })
                  }), "Error" === Sk && Ek && (0, tk.jsx)(tk.Fragment, {
                    children: kk(Ek.translationKey, Ek.params)
                  })]
                }), (0, tk.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, tk.jsx)(Qk.c, {
                    className: "PlayerSearchInput",
                    placeholderText: kk("socialBar:enterPlayerName"),
                    domRef: Kk,
                    onValueChange: kk => {
                      zk((0, uk.r)(kk)), Kk.current.value = (0, uk.r)(kk)
                    },
                    onEnter: () => {
                      Vk && (0, Mk.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), nk()
                    }
                  }), (0, tk.jsxs)(qk.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      nk()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, tk.jsx)(lk.e, {
                      name: "user-plus"
                    }), " ", kk("socialBar:sendRequest")]
                  })]
                })]
              }), (0, tk.jsx)(Ol.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Lk.length > 0 && (0, tk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, tk.jsx)(sl.b, {
                label: kk("socialBar:invites"),
                meta: Lk.length
              }), Lk.map((Fk => (0, tk.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, tk.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, tk.jsx)(Sl.d, {
                    invite: Fk
                  })
                }), (0, tk.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, tk.jsx)(Sl.f, {
                    invite: Fk
                  })
                }), (0, tk.jsx)(qk.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, ol.h)(Fk)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Fk.destination.kind}`
                  },
                  children: kk("general:join")
                }), (0, tk.jsx)(hk.g, {
                  tooltipInner: (0, tk.jsx)(tk.Fragment, {
                    children: kk("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, tk.jsx)(qk.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === jk || void 0 === jk ? void 0 : jk.kind) && jk.inviteId === Fk.id,
                    onClick: () => {
                      Bk.c.declineInvite(Fk.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Fk.destination.kind}`
                    },
                    children: (0, tk.jsx)(lk.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, Fk.id)))]
            }), (0, tk.jsxs)("div", {
              className: ik()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Ik && 0 === ak.length
              }),
              children: [(0, tk.jsx)(sl.b, {
                label: (0, tk.jsxs)(tk.Fragment, {
                  children: [(0, tk.jsx)(lk.e, {
                    name: El.h
                  }), " ", kk("socialBar:requests")]
                }),
                meta: (0, tk.jsxs)(tk.Fragment, {
                  children: [ak.length, ak.length === rk.o && (0, tk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), Ik && (0, tk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, tk.jsx)(sk.c, {})
              }), !Ik && 0 === ak.length && (0, tk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriendRequests")
              }), !Ik && ak.length > 0 && (0, tk.jsx)("div", {
                className: "PlayerRows",
                children: (0, tk.jsx)(oT.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [ak],
                  children: ak.map(((Fk, Ik) => {
                    const Xk = Pk.get(Fk.name);
                    return (0, tk.jsxs)(Ql.e, {
                      playerSocialPreview: Fk,
                      zIndex: ak.length - Ik,
                      padDefaultFocus: (0, nl.g)(jk, Fk.name, Ik),
                      status: Xk && (0, tk.jsx)(Vl.d, {
                        gameNameWithVariation: Xk.gameNameWithVariation,
                        isPrivateLobby: Xk.isPrivateLobby
                      }),
                      children: [(0, tk.jsx)(hk.g, {
                        tooltipInner: (0, tk.jsx)(tk.Fragment, {
                          children: kk("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, tk.jsx)(qk.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wk((0, nl.c)(Hk, Ik)), (0, vl.f)(Fk.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, tk.jsx)(lk.e, {
                            name: "check"
                          })
                        })
                      }), (0, tk.jsx)(hk.g, {
                        tooltipInner: (0, tk.jsx)(tk.Fragment, {
                          children: kk("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, tk.jsx)(qk.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wk((0, nl.c)(Hk, Ik)), (0, vl.f)(Fk.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, tk.jsx)(lk.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Fk.name}_${Fk.isError}`)
                  }))
                })
              })]
            }), (0, tk.jsx)(Vl.h, {})]
          }), (0, tk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, tk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, tk.jsx)(sl.b, {
                label: kk("socialBar:party")
              }), (0, tk.jsx)(Kl.b, {})]
            }), (0, tk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, tk.jsx)(sl.b, {
                label: (0, tk.jsxs)(tk.Fragment, {
                  children: [(0, tk.jsx)(lk.e, {
                    name: El.e
                  }), " ", kk("socialBar:friends")]
                }),
                meta: (0, tk.jsxs)(tk.Fragment, {
                  children: [Tk.length, Tk.length >= (0, rk.b)(Zk.getPlayerRanks()) && (0, tk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), Ik && (0, tk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, tk.jsx)(sk.c, {})
              }), !Ik && 0 === Tk.length && (0, tk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriends")
              }), !Ik && Tk.length > 0 && (0, tk.jsx)("div", {
                className: "PlayerRows",
                children: (0, tk.jsx)(oT.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Tk],
                  children: Tk.map(((kk, Ik) => (0, tk.jsx)(Ql.e, {
                    playerSocialPreview: kk,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: kk => {
                      Bk.c.removeFriendFromState(kk)
                    },
                    zIndex: Tk.length - Ik,
                    children: (0, tk.jsx)(Ql.d, {
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
    var ul = Ik(2460);
    const bl = kk => {
        let {
          action: Fk,
          padAction: Ik
        } = kk;
        const {
          isTouchScreen: Xk
        } = (0, zk.j)(["isTouchScreen"]), Tk = (0, HX.m)();
        return Xk && !Tk ? null : (0, tk.jsx)(qX.c, {
          className: "EverythingMenuTabKey",
          noaAction: Fk,
          padHidesKey: !0,
          padMenuShortcut: Ik
        })
      },
      Rl = (0, Xk.memo)((function() {
        const {
          t: kk
        } = (0, yk.y)(), {
          gameState: Fk,
          openEverythingMenuName: Ik,
          initSdkSelectorFinished: Tk,
          crosshairGameView: lk
        } = (0, zk.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: ak
        } = (0, ek.d)(), Lk = (0, Wk.purchasesAllowed)(), Zk = (0, ck.D)(), {
          view: jk
        } = (0, BF.w)(), wk = "dot" === Zk || null === Zk && "ready" === (null === jk || void 0 === jk ? void 0 : jk.kind), Hk = (kk, Fk) => (0, tk.jsx)(bl, {
          action: kk,
          padAction: Fk
        }), [xk, Pk] = (0, Xk.useState)(null), Kk = (0, Xk.useRef)(null), Qk = {
          ..."inGame" === Fk ? {} : (0, qk.Y)({
            focusOnClick: !1
          }),
          ...vX.e
        }, sk = kk => {
          const Fk = (0, EX.d)((Fk => {
            (0, qk.V)(Fk.currentTarget), zk.d.set({
              openEverythingMenuName: kk
            })
          }), "pointerup");
          return {
            ...Qk,
            onPointerDown: kk => {
              Qk.onPointerDown(kk), Fk.onPointerDown(kk)
            },
            onPointerUp: kk => {
              Qk.onPointerUp(kk), Fk.onPointerUp(kk)
            },
            onClick: Fk.onClick
          }
        }, Vk = null !== Ik, Sk = Ik !== tF.r.COSMETIC_SHOP && !lk;
        async function vk() {
          await async function() {
            if (!xk) return;
            await xk(), Pk(null)
          }(), zk.d.set({
            openEverythingMenuName: null
          })
        }
        const Ok = (0, Xk.useRef)(null),
          nk = (0, Xk.useCallback)((() => null !== Ok.current && (0, Jl.g)(Ok.current)), []);

        function Gk() {
          nk() || vk()
        }(0, Xk.useEffect)((() => (0, Hi.v)(nk)), [nk]);
        const pk = (0, Xk.useMemo)((() => "inGame" === Fk ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            (0, Hl.b)()
          }
        } : (0, Ek.e)() ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            aF.i.discordActivity().then((kk => {
              kk.exit("User exited the game")
            }))
          }
        } : null), [Fk, kk]);
        const uk = (0, tk.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Gk,
          children: (0, tk.jsx)(qk.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, tk.jsx)(OX.e, {
          showing: Vk,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Ik === tF.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === Fk,
          children: (0, tk.jsx)(GX.b, {
            className: "EverythingMenuContainer",
            show: Vk && !lk,
            children: (0, tk.jsx)(nX.c, {
              close: Gk,
              togglePointerLock: !1,
              children: (0, tk.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Hi.l)(Ik) && (0, tk.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, tk.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [pk && (0, tk.jsx)(qk.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        pk.onClick()
                      },
                      children: pk.text
                    }), Vk && Lk && (0, tk.jsx)("div", {
                      ...Qk,
                      className: "EverythingMenuWallet",
                      title: kk("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, ck.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, tk.jsx)(wl.f, {})
                    })]
                  }), (0, tk.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, tk.jsxs)("div", {
                      ...sk(tF.r.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Ik === tF.r.SETTINGS ? "true" : void 0,
                      className: ik()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ik === tF.r.SETTINGS
                      }),
                      children: [kk("general:settings"), Hk("OpenSettings", "pause")]
                    }), (0, tk.jsxs)("div", {
                      ...sk(tF.r.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": Ik === tF.r.CUSTOMISATION ? "true" : void 0,
                      className: ik()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ik === tF.r.CUSTOMISATION
                      }),
                      children: [kk("general:player"), Hk("OpenCharacterCustomization")]
                    }), Jk.featureFlags.useSocialFeatures && (0, tk.jsxs)("div", {
                      ...sk(tF.r.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": Ik === tF.r.SOCIAL ? "true" : void 0,
                      className: ik()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ik === tF.r.SOCIAL
                      }),
                      ...(0, Mk.c)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Ik === tF.r.SOCIAL),
                      children: [kk("socialBar:social"), (0, tk.jsx)(ul.b, {})]
                    }), (0, BF.r)(jk) && (0, tk.jsxs)("div", {
                      ...sk(tF.r.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": Ik === tF.r.COSMETIC_SHOP ? "true" : void 0,
                      className: ik()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Ik === tF.r.COSMETIC_SHOP
                      }),
                      children: [(0, tk.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: kk("store:title")
                      }), "new" === Zk && (0, tk.jsx)(oy, {}), wk && (0, tk.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Fk && (0, tk.jsxs)("div", {
                      ...sk(tF.r.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": Ik === tF.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: ik()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ik === tF.r.LOBBY_LEADERBOARD
                      }),
                      children: [kk("general:lobby"), Hk("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, tk.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: uk
                  })]
                }), (0, Hi.l)(Ik) && uk, (0, tk.jsxs)("div", {
                  ref: Ok,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Fk ? "0.85" : "1"
                  },
                  children: [(0, tk.jsx)(QX, {
                    show: Ik === tF.r.SETTINGS,
                    setBeforeResumeCallback: Pk
                  }), (0, tk.jsx)(oX, {
                    show: Ik === tF.r.CUSTOMISATION
                  }), (0, tk.jsx)(Xk.Suspense, {
                    fallback: null,
                    children: (0, tk.jsx)(li, {
                      show: Ik === tF.r.SHOP
                    })
                  }), (0, tk.jsx)(Ki, {
                    show: Ik === tF.r.LOBBY_LEADERBOARD
                  }), Lk && (0, tk.jsx)(el, {
                    show: Ik === tF.r.COSMETIC_SHOP
                  }), !Lk && (0, tk.jsx)(Ll, {
                    show: Ik === tF.r.COSMETIC_SHOP
                  }), (0, tk.jsx)(Gl, {
                    show: Ik === tF.r.SOCIAL
                  })]
                }), !(0, Jk.isMobileApp)() && (0, pX.d)(ak.getPlayerRanks()) && (0, tk.jsx)(GX.b, {
                  ref: Kk,
                  className: "EverythingMenuBannerDiv",
                  show: Sk,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, tk.jsx)(xl.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Kk
                    },
                    showing: Vk && Sk,
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
  34173: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(337),
      Tk = Ik(34180);

    function ik(kk, Fk, Ik) {
      const ik = Object.entries(Fk).sort(((kk, Fk) => Fk[1] - kk[1])),
        yk = (0, Xk.zb)(kk);
      yk.push(kk ? "\n\n" : "\n");
      for (const [Tk, ek] of ik) {
        var lk, ak, qk;
        const kk = null !== (lk = null === Ik || void 0 === Ik || null === (ak = Ik[Tk]) || void 0 === ak ? void 0 : ak.icon) && void 0 !== lk ? lk : `${Tk} Enchantment`;
        yk.push({
          icon: kk,
          style: {
            fontSize: "1.5rem"
          }
        }), yk.push({
          str: `${Tk} ${null!==(qk=(0,Xk.S)(ek))&&void 0!==qk?qk:ek}\n`
        })
      }
      yk.push({
        str: "\n"
      });
      for (const [Xk, ek] of ik) {
        var Lk, tk, Zk, jk;
        const kk = null !== (Lk = null === Ik || void 0 === Ik || null === (tk = Ik[Xk]) || void 0 === tk ? void 0 : tk.icon) && void 0 !== Lk ? Lk : `${Xk} Enchantment`,
          Fk = null !== (Zk = null === Ik || void 0 === Ik || null === (jk = Ik[Xk]) || void 0 === jk ? void 0 : jk.description) && void 0 !== Zk ? Zk : (0, Tk.j)(Xk);
        yk.push({
          icon: kk,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), yk.push({
          str: Fk,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), yk.push({
          str: "\n"
        })
      }
      return yk
    }
  },
  34188: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => qk,
      d: () => xk,
      g: () => Hk,
      j: () => ak,
      m: () => Jk,
      q: () => Lk,
      s: () => Zk,
      u: () => wk,
      w: () => tk
    });
    var Xk = Ik(318),
      Tk = Ik(628),
      ik = Ik(337),
      yk = Ik(4199),
      lk = Ik(34173);

    function ak(kk, Fk) {
      var Ik;
      let {
        player: Xk,
        chestOrCreative: Tk
      } = kk;
      var ik;
      return Fk < Xk.length ? null !== (ik = Xk[Fk]) && void 0 !== ik ? ik : null : null !== (Ik = Tk[Fk - Xk.length]) && void 0 !== Ik ? Ik : null
    }

    function qk(kk) {
      var Fk;
      return null !== (Fk = kk.amount) && void 0 !== Fk ? Fk : 0
    }

    function Lk(kk) {
      return 0 === kk.button || void 0 === kk.button
    }

    function tk(kk) {
      return !!kk.shiftKey
    }

    function Zk(kk) {
      return "touches" in kk || "touch" === kk.pointerType || "pen" === kk.pointerType
    }
    const jk = new Set,
      ek = 50;

    function wk(kk, Fk) {
      var Ik;
      const Xk = null === (Ik = kk[Fk]) || void 0 === Ik ? void 0 : Ik.displayName;
      return (0, Tk.Q)(Xk) ? "string" !== typeof Fk ? "" : (!jk.has(Fk) && jk.size < ek && (jk.add(Fk), console.warn(`No item called "${Fk}", so its hover shows the name as given`)), Fk) : Xk
    }

    function Hk(kk, Fk, Ik) {
      var ak, qk, Lk, tk, Zk, jk, ek, Hk, Jk, xk, Pk, Kk, Qk, sk;
      const Vk = kk.attributes,
        zk = null !== (ak = null === (qk = Fk[kk.name]) || void 0 === qk ? void 0 : qk.rootName) && void 0 !== ak ? ak : kk.name,
        Sk = null !== (Lk = null !== (tk = Vk.customDisplayName) && void 0 !== tk ? tk : null === (Zk = Fk[kk.name]) || void 0 === Zk ? void 0 : Zk.displayName) && void 0 !== Lk ? Lk : wk(Fk, zk);
      let vk = Sk;
      const Ek = null === (jk = Vk.customAttributes) || void 0 === jk ? void 0 : jk.enchantmentTier;
      Ek && (vk = (0, ik.zb)(Sk, {
        colour: ik.sb[Ek]
      }));
      const Ok = null !== (ek = null !== (Hk = null !== (Jk = function(kk, Fk) {
        var Ik;
        if (void 0 === kk || null !== (Ik = Fk.customAttributes) && void 0 !== Ik && Ik.author) return kk;
        const Tk = (0, Xk.oc)(kk);
        return Tk.every((kk => "string" === typeof kk)) ? kk : Tk.map((kk => "string" === typeof kk ? kk : {
          icon: kk.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Vk.customDescription, Vk)) && void 0 !== Jk ? Jk : null === (xk = Fk[kk.name]) || void 0 === xk ? void 0 : xk.description) && void 0 !== Hk ? Hk : null === (Pk = Fk[zk]) || void 0 === Pk ? void 0 : Pk.description) && void 0 !== ek ? ek : "";
      let nk = Ok;
      if (null !== (Kk = Vk.customAttributes) && void 0 !== Kk && Kk.enchantments) nk = (0, lk.d)(Ok, Vk.customAttributes.enchantments, Vk.customAttributes.enchantmentData);
      else if (Ik[zk]) nk = (0, ik.zb)(Ok), nk.push({
        str: "\n"
      }), nk.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Qk = Vk.customAttributes) && void 0 !== Qk && Qk.mobSettings) {
        var Gk, pk;
        const kk = Vk.customAttributes.mobSettings;
        var uk, bk;
        if (nk = [], (0, Tk.Q)(Vk.customAttributes.health) || (nk.push({
            str: "\n"
          }), nk.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), nk.push({
            str: " "
          }), nk.push({
            str: Vk.customAttributes.health.toString()
          }), (0, Tk.Q)(kk.maxHealth) || (nk.push({
            str: "/"
          }), nk.push({
            str: kk.maxHealth.toString()
          }))), !(0, Tk.Q)(kk.attackDamage) && kk.attackDamage > 0 && (nk.push({
            str: "\n"
          }), nk.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), nk.push({
            str: " "
          }), nk.push({
            str: kk.attackDamage.toString()
          })), !(0, Tk.Q)(kk.secondaryAttackDamage) && kk.secondaryAttackDamage > 0 && (nk.push({
            str: "\n"
          }), nk.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), nk.push({
            str: " "
          }), nk.push({
            str: kk.secondaryAttackDamage.toString()
          })), (0, Tk.Q)(kk.baseRunningSpeed) || (nk.push({
            str: "\n"
          }), nk.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), nk.push({
            str: " "
          }), nk.push({
            str: kk.baseRunningSpeed.toFixed(2)
          })), "Saddled" === kk.metaInfo) nk.push({
          str: "\n"
        }), nk.push({
          str: {
            translationKey: "general:has"
          }
        }), nk.push({
          str: " "
        }), nk.push({
          icon: null !== (uk = null === (bk = kk.tameInfo) || void 0 === bk ? void 0 : bk.saddleItemName) && void 0 !== uk ? uk : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (nk.push({
            str: "\n"
          }), nk.push({
            str: "\n"
          }), kk.petInfo && null !== (Gk = kk.tameInfo) && void 0 !== Gk && Gk.supportsFriendship) {
          const Fk = yk.e.getIconsFromFriendshipPoints(kk.petInfo.friendshipPoints);
          for (const kk of Fk) nk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          nk.push({
            str: "\n"
          });
          const Ik = yk.e.getMobHungerLevel(kk.petInfo.lastFedAt);
          for (const kk of yk.e.hungerLevelIcons[Ik]) nk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          nk.push({
            str: " "
          }), nk.push({
            str: yk.e.hungerLevelTranslations[Ik],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (kk.tameInfo && null !== (pk = kk.tameInfo) && void 0 !== pk && pk.supportsFriendship) {
          var Rk, Uk;
          let Fk = null !== (Rk = kk.tameInfo.likedFoods) && void 0 !== Rk ? Rk : [];
          nk.push({
            str: "\n"
          }), nk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yk.e.feedTextColours[yk.e.MobFoodType.Superliked]
            }
          }), nk.push({
            str: " "
          }), null !== (Uk = kk.petInfo) && void 0 !== Uk && Uk.superlikedFoodKnown ? (nk.push({
            icon: kk.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Fk = Fk.filter((Fk => Fk !== kk.petInfo.superlikedFood))) : nk.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), nk.push({
            str: "\n"
          }), nk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yk.e.feedTextColours[yk.e.MobFoodType.Liked]
            }
          }), nk.push({
            str: " "
          });
          for (const kk of Fk) nk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          nk.push({
            str: "\n"
          }), nk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yk.e.feedTextColours[yk.e.MobFoodType.Neutral]
            }
          }), nk.push({
            str: " "
          });
          for (const Ik of null !== (Ck = kk.tameInfo.neutralFoods) && void 0 !== Ck ? Ck : []) {
            var Ck;
            nk.push({
              icon: Ik,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          nk.push({
            str: "\n"
          }), nk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yk.e.feedTextColours[yk.e.MobFoodType.Disliked]
            }
          }), nk.push({
            str: " "
          });
          for (const Ik of null !== (Nk = kk.tameInfo.dislikedFoods) && void 0 !== Nk ? Nk : []) {
            var Nk;
            nk.push({
              icon: Ik,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        nk.length > 0 ? (nk.shift(), nk.unshift(...(0, ik.zb)(Ok))) : nk = (0, ik.zb)(Ok)
      }
      return {
        name: vk,
        desc: nk,
        fontStyle: null !== (sk = Vk.customAttributes) && void 0 !== sk && sk.author ? "italic" : "normal"
      }
    }

    function Jk(kk, Fk, Ik, Xk) {
      const Tk = ak(kk, Ik),
        ik = ak(kk, Xk);
      if (!Tk) return !1;
      const yk = Fk[Tk.name].armourReduction,
        lk = Fk[ik.name].armourReduction;
      if (lk === yk) {
        var qk, Lk, tk, Zk;
        const kk = null !== (qk = null === (Lk = Tk.attributes.customAttributes) || void 0 === Lk ? void 0 : Lk.enchantmentTier) && void 0 !== qk ? qk : "Tier 0",
          Fk = null !== (tk = null === (Zk = ik.attributes.customAttributes) || void 0 === Zk ? void 0 : Zk.enchantmentTier) && void 0 !== tk ? tk : "Tier 0";
        return parseInt(kk.replace("Tier ", "")) >= parseInt(Fk.replace("Tier ", ""))
      }
      return yk > lk
    }

    function xk(kk) {
      let Fk;
      if ("number" === typeof kk) {
        const Ik = document.querySelector(`[data-inven-idx="${kk}"]`);
        if (!Ik) return null;
        Fk = Ik.getBoundingClientRect()
      } else Fk = kk.getBoundingClientRect();
      return {
        x: Fk.left + Fk.width / 2,
        y: Fk.top + Fk.height / 2
      }
    }
  },
  34058: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => jk,
      c: () => ek,
      d: () => wk
    });
    var Xk = Ik(1406),
      Tk = Ik(58),
      ik = Ik(1287),
      yk = Ik(4516),
      lk = Ik(2283),
      ak = Ik(1179),
      qk = Ik(95),
      Lk = Ik(1907),
      tk = Ik(1318),
      Zk = Ik(1096);

    function jk(kk) {
      let {
        show: Fk,
        onClose: Ik
      } = kk;
      const {
        requestedGameNameWithVariation: Xk,
        lobbyName: Tk,
        shownLobbyName: ik
      } = (0, Lk.k)("connectedGame"), ak = (0, lk.b)(Xk, Tk, !1);
      return qk.featureFlags.canUseInviteLinks && (0, Zk.jsx)(yk.c, {
        show: Fk,
        close: Ik,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Zk.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Zk.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Zk.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Zk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === ak ? (0, Zk.jsx)(tk.c, {}) : ak, (0, Zk.jsx)("br", {}), "Lobby Name: ", ik, (0, Zk.jsx)("br", {}), (0, Zk.jsx)("br", {}), (0, Zk.jsx)("br", {}), (0, Zk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Zk.jsx)(ek, {})]
        })
      })
    }

    function ek() {
      var kk;
      const {
        t: Fk
      } = (0, ak.y)(), Ik = null !== (kk = wk(qk.featureFlags.canUseInviteLinks)) && void 0 !== kk ? kk : "Loading Link...", [ik, yk] = (0, Tk.useState)(0), [lk, Lk] = (0, Tk.useReducer)((kk => kk + 1), 0);
      return (0, Tk.useEffect)((() => {
        const kk = setTimeout((() => {
          Lk()
        }), 1100);
        return () => {
          clearTimeout(kk)
        }
      }), [ik]), qk.featureFlags.canUseInviteLinks && (0, Zk.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Zk.jsx)("div", {
          className: "InviteLinkInner",
          children: Ik
        }), (0, Zk.jsx)(Xk.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Ik).catch((kk => {
              console.error("Failed to copy invite link:", kk)
            })), yk(Date.now())
          },
          disabled: Date.now() - ik < 1e3,
          children: Date.now() - ik < 1e3 ? Fk("general:copied") : Fk("general:copy")
        })]
      })
    }

    function wk(kk) {
      const [Fk, Ik] = (0, Tk.useState)(null);
      return (0, Tk.useEffect)((() => {
        if (!kk) return;
        let Fk = !0;
        return (0, ik.x)().then((kk => {
          Fk && Ik(kk)
        })).catch((kk => {
          console.error("Failed to get invite link:", kk)
        })), () => {
          Fk = !1
        }
      }), [kk]), Fk
    }
  },
  34155: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1907),
      lk = Ik(1096);

    function ak(kk) {
      const Fk = Math.floor(kk / 3600),
        Ik = Math.floor(kk % 3600 / 60),
        Xk = Math.floor(kk % 60),
        Tk = `${Ik.toString().padStart(2,"0")}:${Xk.toString().padStart(2,"0")}`;
      return Fk > 0 ? `${Fk}:${Tk}` : Tk
    }
    const qk = (0, Xk.memo)((function(kk) {
      let {
        className: Fk
      } = kk;
      const {
        recording: Ik,
        seconds: Xk
      } = (0, yk.k)("replayRecorder");
      return Ik ? (0, lk.jsxs)("div", {
        className: ik()("RecordingIndicator", Fk),
        children: [(0, lk.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, lk.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, lk.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: ak(Xk)
        })]
      }) : null
    }))
  },
  4884: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Hk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4619),
      yk = Ik(1179),
      lk = Ik(1066),
      ak = Ik(1406),
      qk = Ik(1453),
      Lk = Ik(1324),
      tk = Ik(2424),
      Zk = Ik(1096);
    const jk = {
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
      const Ik = "youtube" === Fk;
      return (0, Zk.jsxs)("span", {
        className: Tk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Ik
        }),
        children: [Ik && (0, Zk.jsx)(tk.b, {
          variant: "white"
        }), !Ik && (0, Zk.jsx)(lk.e, {
          name: jk[Fk].icon,
          kit: "brands"
        })]
      })
    }

    function wk(kk) {
      let {
        platform: Fk,
        link: Ik,
        editable: Xk,
        userContext: Tk,
        onLinksUpdated: tk
      } = kk;
      const {
        t: wk
      } = (0, yk.y)(), Hk = jk[Fk];
      if (!Ik && !Xk) return null;

      function Jk() {
        var kk;
        if (!Tk || !tk) return;
        Lk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Hk.name
            }
          },
          prefixText: ik.u[Fk],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === Ik || void 0 === Ik ? void 0 : Ik.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Ik ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await qk.e.setSocialLink(Tk, Fk, kk.value) : await qk.e.clearSocialLink(Tk, Fk), tk()
          } catch (Ik) {
            console.error("Failed to update social link", Ik), Lk.NotificationProvider.showAlertPopup({
              title: Ik.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Ik) {
        const kk = `@${Ik.handle}`;
        return (0, Zk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Hk.color
          },
          href: Ik.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Zk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Zk.jsx)(ek, {
              platform: Fk
            }), (0, Zk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Zk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Xk && (0, Zk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, ak.Y)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), Jk()
            },
            children: (0, Zk.jsx)(lk.e, {
              name: "pen-to-square"
            })
          }), !Xk && (0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Zk.jsx)(lk.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Zk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Hk.color
        },
        ...(0, ak.Y)(),
        onClick: () => {
          Jk()
        },
        children: [(0, Zk.jsx)(ek, {
          platform: Fk
        }), (0, Zk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Hk.name
          }), (0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: wk("homePage:profileSocialLinkAdd")
          })]
        }), (0, Zk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Zk.jsx)(lk.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Hk(kk) {
      let {
        socialLinks: Fk,
        editable: Ik = !1,
        userContext: Xk,
        onLinksUpdated: Tk
      } = kk;
      if (!Ik && 0 === Fk.length) return null;
      const yk = new Map(Fk.map((kk => [kk.platform, kk]))),
        lk = Ik ? ik.t : Fk.map((kk => kk.platform));
      return (0, Zk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Zk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: lk.map((kk => (0, Zk.jsx)(wk, {
            platform: kk,
            link: yk.get(kk),
            editable: Ik,
            userContext: Xk,
            onLinksUpdated: Tk
          }, kk)))
        })
      })
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  34231: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(3378);

    function ik() {
      const [kk, Fk] = (0, Xk.useState)(!1);
      return (0, Xk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, Tk.e)().then((() => {
          kk && Fk(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  6566: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(41);

    function ik(kk, Fk) {
      var Ik;
      const [ik, yk] = (0, Xk.useState)(null !== (Ik = Tk.j.getItem(kk)) && void 0 !== Ik ? Ik : Fk);
      return [ik, Fk => {
        Tk.j.setItem(kk, Fk), yk(Fk)
      }]
    }
  },
  34131: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      e: () => ek
    });
    Ik(34139);
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(34122);

    function lk(kk, Fk) {
      return Math.max(1, Math.round(kk * Fk))
    }

    function ak(kk, Fk) {
      const Ik = Fk * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Xk = function(kk, Fk) {
          if (kk.lines) return lk(kk.lineThickness, Fk) % 2;
          if (kk.dot) return lk(kk.dotSize, Fk) % 2;
          return qk(kk, Fk) % 2
        }(kk, Fk),
        Tk = Lk(kk.lineThickness * Ik, Xk),
        ik = lk(kk.lineLength, Ik),
        yk = Math.round(kk.gap * Ik),
        ak = kk.outline > 0 ? lk(kk.outline, Ik) : 0,
        Zk = [];
      if (kk.lines && (Zk.push({
          x: Tk + yk,
          y: 0,
          w: ik,
          h: Tk,
          arm: "right"
        }), Zk.push({
          x: -yk - ik,
          y: 0,
          w: ik,
          h: Tk,
          arm: "left"
        }), Zk.push({
          x: 0,
          y: Tk + yk,
          w: Tk,
          h: ik,
          arm: "down"
        }), kk.tStyle || Zk.push({
          x: 0,
          y: -yk - ik,
          w: Tk,
          h: ik,
          arm: "up"
        }), 0 === yk && Zk.push({
          x: 0,
          y: 0,
          w: Tk,
          h: Tk
        })), kk.dot) {
        const Fk = Lk(kk.dotSize * Ik, Xk),
          ik = kk.lines && 0 === yk && kk.dotSize > kk.lineThickness ? Math.max(Fk, Tk + 2) : Fk,
          lk = (Tk - ik) / 2;
        Zk.push({
          x: lk,
          y: lk,
          w: ik,
          h: ik
        })
      }
      const jk = Zk.map((kk => ({
        ...kk,
        x: kk.x - ak,
        y: kk.y - ak,
        w: kk.w + 2 * ak,
        h: kk.h + 2 * ak
      })));
      let ek = null,
        wk = null;
      if (kk.circle) {
        const Fk = lk(kk.circleThickness, Ik),
          ik = function(kk, Fk) {
            return kk + (kk % 2 === Fk ? 0 : 1)
          }(qk(kk, Ik), Xk),
          yk = (Tk - ik) / 2;
        ek = tk(yk, ik, Fk), ak > 0 && (wk = tk(yk - ak, ik + 2 * ak, Fk + 2 * ak))
      }
      return {
        cell: Tk,
        fills: Zk,
        outlines: ak > 0 ? jk : [],
        ring: ek,
        ringOutline: wk
      }
    }

    function qk(kk, Fk) {
      return Math.round(kk.circleRadius * Fk * 2 + lk(kk.circleThickness, Fk))
    }

    function Lk(kk, Fk) {
      return Math.max(2 - Fk, 2 * Math.round((kk - Fk) / 2) + Fk)
    }

    function tk(kk, Fk, Ik) {
      const Xk = 2 * Ik >= Fk - 1;
      return {
        x: kk,
        y: kk,
        size: Fk,
        border: Math.min(Ik, Math.floor(Fk / 2)),
        filled: Xk
      }
    }
    var Zk = Ik(1096);
    const jk = 1.4;

    function ek(kk, Fk) {
      return kk && Fk ? `scale(${jk})` : "scale(1)"
    }

    function wk(kk) {
      return "classic" === kk.settings.style ? (0, Zk.jsx)(xk, {
        ...kk
      }) : (0, Zk.jsx)(Sk, {
        ...kk
      })
    }
    const Hk = .125;

    function Jk(kk, Fk) {
      const Ik = {};
      if (kk.color !== yk.f.color && (Ik.color = (0, yk.k)(kk.color)), kk.opacity !== yk.f.opacity && (Ik.opacity = kk.opacity / 100), kk.outline !== yk.f.outline || kk.outlineColor !== yk.f.outlineColor) {
        const Fk = kk.outline,
          Xk = (0, yk.k)(kk.outlineColor);
        Ik.textShadow = Fk > 0 ? `-${Fk}px 0 ${Xk}, 0 ${Fk}px ${Xk}, ${Fk}px 0 ${Xk}, 0 -${Fk}px ${Xk}` : "none"
      }
      if (kk.size !== yk.f.size) {
        const Xk = kk.size / 100;
        Ik.fontSize = Fk ? `calc(max(1.3rem, 18px) * ${Xk})` : `calc(1.3rem * ${Xk})`, Ik.marginTop = `-${Hk}em`, Ik.transformOrigin = `50% calc(50% + ${Hk}em)`
      }
      return Ik
    }

    function xk(kk) {
      let {
        settings: Fk,
        touch: Ik,
        inPreview: Xk,
        inEditor: ik,
        pressed: yk = !1,
        pressRef: lk
      } = kk;
      return (0, Zk.jsx)("div", {
        className: Tk()("Crosshair", {
          Touch: Ik,
          CrosshairInPreview: Xk,
          CrosshairInEditor: ik || Xk
        }),
        ref: lk,
        style: {
          transform: ek(yk, Fk.growOnClick),
          ...Jk(Fk, Ik)
        },
        children: "+"
      })
    }

    function Pk(kk, Fk) {
      return kk / Fk + "px"
    }

    function Kk(kk, Fk, Ik, Xk) {
      return {
        ...Vk(kk, Fk, Ik),
        width: Pk(kk.w, Ik),
        height: Pk(kk.h, Ik),
        background: Xk
      }
    }

    function Qk(kk, Fk, Ik) {
      return {
        left: Pk(kk.x, Fk),
        top: Pk(kk.y, Fk),
        width: Pk(kk.size, Fk),
        height: Pk(kk.size, Fk),
        borderWidth: Pk(kk.border, Fk),
        borderColor: Ik,
        background: kk.filled ? Ik : void 0
      }
    }
    const sk = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Vk(kk, Fk, Ik) {
      const [Xk, Tk] = kk.arm ? sk[kk.arm] : [0, 0], ik = Math.round(Fk * Ik);
      return {
        left: Pk(kk.x + Xk * ik, Ik),
        top: Pk(kk.y + Tk * ik, Ik)
      }
    }

    function zk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function Sk(kk) {
      let {
        settings: Fk,
        inPreview: Ik,
        inEditor: Xk,
        pressed: lk = !1,
        spread: qk,
        spreadRef: Lk
      } = kk;
      const tk = (0, ik.useRef)(null),
        {
          box: ek,
          dpr: wk
        } = function(kk) {
          const [Fk, Ik] = (0, ik.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ik.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Xk = () => {
              const kk = Fk.getBoundingClientRect(),
                Xk = window.devicePixelRatio || 1;
              Ik((Fk => Fk.dpr === Xk && Fk.box.left === kk.left && Fk.box.top === kk.top && Fk.box.width === kk.width && Fk.box.height === kk.height ? Fk : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Xk
              }))
            };
            Xk();
            const Tk = new ResizeObserver(Xk);
            return Tk.observe(Fk), window.addEventListener("resize", Xk), window.addEventListener("scroll", Xk, !0), () => {
              Tk.disconnect(), window.removeEventListener("resize", Xk), window.removeEventListener("scroll", Xk, !0)
            }
          }), [kk]), Fk
        }(tk),
        Hk = (0, ik.useRef)(wk);
      Hk.current = wk;
      const Jk = ak(Fk, wk, lk && Fk.growOnClick ? jk : 1),
        xk = function(kk, Fk, Ik) {
          const Xk = Math.round((kk.left + kk.width / 2) * Ik - Fk / 2),
            Tk = Math.round((kk.top + kk.height / 2) * Ik - Fk / 2);
          return {
            x: Xk / Ik - kk.left,
            y: Tk / Ik - kk.top
          }
        }(ek, Jk.cell, wk),
        Pk = (0, yk.k)(Fk.color),
        sk = (0, yk.k)(Fk.outlineColor),
        Sk = (0, ik.useRef)(0);
      (0, ik.useLayoutEffect)((() => {
        if (Lk) return Lk.current = kk => {
          var Fk;
          Sk.current = kk, null === (Fk = tk.current) || void 0 === Fk || Fk.querySelectorAll("[data-arm]").forEach((Fk => {
            Object.assign(Fk.style, Vk(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(Fk), kk, Hk.current))
          }))
        }, () => {
          Lk.current = null
        }
      }), [Lk]);
      const vk = null !== qk && void 0 !== qk ? qk : Sk.current;
      return (0, Zk.jsx)("div", {
        ref: tk,
        className: Tk()("CrosshairShapes", {
          CrosshairInPreview: Ik,
          CrosshairInEditor: Xk || Ik,
          CrosshairSpreads: void 0 !== Lk
        }),
        children: (0, Zk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: xk.x,
            top: xk.y,
            opacity: Fk.opacity / 100
          },
          children: (0, Zk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Jk.ringOutline && (0, Zk.jsx)("div", {
              className: "CrosshairRing",
              style: Qk(Jk.ringOutline, wk, sk)
            }), Jk.outlines.map(((kk, Fk) => (0, Zk.jsx)("div", {
              className: "CrosshairPart",
              ...zk(kk),
              style: Kk(kk, vk, wk, sk)
            }, `o${Fk}`))), Jk.ring && (0, Zk.jsx)("div", {
              className: "CrosshairRing",
              style: Qk(Jk.ring, wk, Pk)
            }), Jk.fills.map(((kk, Fk) => (0, Zk.jsx)("div", {
              className: "CrosshairPart",
              ...zk(kk),
              style: Kk(kk, vk, wk, Pk)
            }, `f${Fk}`)))]
          })
        })
      })
    }
  },
  34143: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      f: () => Hk,
      h: () => wk
    });
    var Xk = Ik(34122);
    const Tk = "XH1-",
      ik = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      lk = ["color", "outlineColor"],
      ak = 1 + 3 * lk.length + yk.length + 1,
      qk = Math.ceil(8 * ak / Math.log2(62)),
      Lk = Tk.length + qk;

    function tk(kk) {
      let Fk = 90;
      for (const Ik of kk) Fk = 31 * Fk + Ik & 255;
      return Fk
    }
    const Zk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      jk = BigInt(Zk.length);

    function ek(kk, Fk) {
      let Ik = 0n;
      for (const Tk of kk) {
        const kk = Zk.indexOf(Tk);
        if (kk < 0) return null;
        Ik = Ik * jk + BigInt(kk)
      }
      if (Ik >> BigInt(8 * Fk) !== 0n) return null;
      const Xk = [];
      for (let Tk = 0; Tk < Fk; Tk++) Xk.unshift(Number(0xffn & Ik)), Ik >>= 8n;
      return Xk
    }

    function wk(kk) {
      let Fk = "shapes" === kk.style ? 1 : 0;
      ik.forEach(((Ik, Xk) => {
        kk[Ik] && (Fk |= 1 << Xk + 1)
      }));
      const Ik = [Fk];
      for (const Tk of lk) {
        const Fk = (0, Xk.g)(Tk, kk[Tk]);
        Ik.push(Fk >> 16 & 255, Fk >> 8 & 255, 255 & Fk)
      }
      for (const Tk of yk) {
        const {
          min: Fk,
          step: ik
        } = Xk.d[Tk];
        Ik.push(Math.round(((0, Xk.g)(Tk, kk[Tk]) - Fk) / ik))
      }
      return Ik.push(tk(Ik)), Tk + function(kk, Fk) {
        let Ik = 0n;
        for (const Tk of kk) Ik = Ik << 8n | BigInt(Tk);
        let Xk = "";
        for (let Tk = 0; Tk < Fk; Tk++) Xk = Zk[Number(Ik % jk)] + Xk, Ik /= jk;
        return Xk
      }(Ik, qk)
    }

    function Hk(kk) {
      for (const Fk of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qk}})`, "gi"))) {
        const kk = Jk(ek(Fk[1], ak));
        if (kk) return kk
      }
      return null
    }

    function Jk(kk) {
      if (!kk || kk.length !== ak || tk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const Fk = kk[0],
        Ik = {
          ...Xk.f,
          style: 1 & Fk ? "shapes" : "classic"
        };
      ik.forEach(((kk, Xk) => {
        Ik[kk] = 0 !== (Fk & 1 << Xk + 1)
      }));
      let Tk = 1;
      for (const Xk of lk) Ik[Xk] = kk[Tk] << 16 | kk[Tk + 1] << 8 | kk[Tk + 2], Tk += 3;
      for (const ik of yk) {
        const {
          min: Fk,
          step: yk
        } = Xk.d[ik];
        Ik[ik] = (0, Xk.g)(ik, Fk + kk[Tk] * yk), Tk++
      }
      return Ik
    }
  },
  34122: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      f: () => Tk,
      g: () => ik,
      k: () => qk,
      n: () => ak,
      q: () => Lk,
      t: () => lk,
      u: () => yk
    });
    const Xk = {
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
      Tk = Object.freeze({
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

    function ik(kk, Fk) {
      var Ik;
      const {
        min: ik,
        max: yk,
        step: lk
      } = Xk[kk];
      if (!Number.isFinite(Fk)) return Tk[kk];
      const ak = (null !== (Ik = String(lk).split(".")[1]) && void 0 !== Ik ? Ik : "").length,
        qk = Number((Math.round(Fk / lk) * lk).toFixed(ak));
      return Math.min(yk, Math.max(ik, qk))
    }

    function yk(kk, Fk, Ik) {
      const Xk = "number" === typeof Ik ? ik(Fk, Ik) : Ik;
      return {
        ...kk,
        [Fk]: Xk
      }
    }

    function lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Tk).every((Xk => Ik.includes(Xk) || kk[Xk] === Fk[Xk]))
    }

    function ak(kk) {
      return lk(kk, Tk)
    }

    function qk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function Lk(kk) {
      const Fk = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return Fk ? parseInt(Fk[1], 16) : null
    }
  },
  34148: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      f: () => Zk
    });
    var Xk = Ik(58),
      Tk = Ik(41),
      ik = Ik(34143),
      yk = Ik(34122);
    const lk = "crosshairCode";
    let ak = null;
    const qk = new Set;

    function Lk() {
      if (null === ak) {
        var kk;
        const Fk = Tk.j.getItem(lk);
        ak = null !== (kk = "string" === typeof Fk ? (0, ik.f)(Fk) : null) && void 0 !== kk ? kk : yk.f
      }
      return ak
    }

    function tk(kk) {
      ak = kk, (0, yk.n)(kk) ? Tk.j.removeItem(lk) : Tk.j.setItem(lk, (0, ik.h)(kk));
      for (const Fk of qk) Fk()
    }

    function Zk() {
      const [kk, Fk] = (0, Xk.useState)(Lk);
      return (0, Xk.useEffect)((() => {
        const kk = () => {
          Fk(Lk())
        };
        return kk(), Ik = kk, qk.add(Ik), () => {
          qk.delete(Ik)
        };
        var Ik
      }), []), kk
    }
  },
  34071: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      h: () => Xk
    });
    const Xk = "image/jpeg",
      Tk = "jpg"
  },
  34073: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      e: () => qk,
      f: () => Lk
    });
    var Xk = Ik(1631),
      Tk = Ik(3147),
      ik = Ik(95),
      yk = Ik(1682),
      lk = Ik(34071);

    function ak() {
      return !(0, ik.isMobileApp)() || Xk.b.supports("photos")
    }
    async function qk(kk) {
      var Fk, Ik;
      if ((0, ik.isMobileApp)()) {
        const {
          saved: Fk
        } = await Xk.b.request("photos.save", {
          data: await (0, Tk.f)(kk),
          mimeType: lk.h
        });
        return Fk ? "saved" : "denied"
      }
      return (0, ik.isIOS)() && null !== (Fk = (Ik = navigator).canShare) && void 0 !== Fk && Fk.call(Ik, {
        files: [kk]
      }) ? Lk(kk) : ((0, yk.c)(kk, kk.name), "saved")
    }
    async function Lk(kk) {
      try {
        return await navigator.share({
          files: [kk]
        }), "shared"
      } catch (Fk) {
        if (Fk instanceof DOMException && "AbortError" === Fk.name) return "iI";
        if (Fk instanceof DOMException && "NotAllowedError" === Fk.name) return "needsTap";
        throw Fk
      }
    }
  },
  34062: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      e: () => Lk,
      h: () => tk
    });
    var Xk = Ik(25),
      Tk = Ik(34044),
      ik = Ik(1580),
      yk = Ik(34071);
    const lk = 8294400,
      ak = .92;

    function qk() {
      (0, ik.g)(), Xk.d.set({
        screenshotMode: !0
      })
    }

    function Lk() {
      Xk.d.set({
        screenshotMode: !1
      })
    }
    async function tk() {
      const {
        width: kk,
        height: Fk,
        scale: Ik
      } = function(kk, Fk, Ik) {
        const Xk = Math.max(1, kk),
          Tk = Math.max(1, Fk),
          ik = Math.min(Math.max(1, Ik), Math.sqrt(lk / (Xk * Tk)));
        return {
          width: Math.round(Xk * ik),
          height: Math.round(Tk * ik),
          scale: ik
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: Xk
      } = await Tk.devTools.capturePhoto(kk, Fk, {
        scale: Ik,
        type: yk.h,
        quality: ak
      });
      return new File([Xk], function(kk) {
        const Fk = kk => String(kk).padStart(2, "0"),
          Ik = `${kk.getFullYear()}${Fk(kk.getMonth()+1)}${Fk(kk.getDate())}`,
          Xk = `${Fk(kk.getHours())}${Fk(kk.getMinutes())}${Fk(kk.getSeconds())}`;
        return `bloxd-${Ik}-${Xk}.${yk.d}`
      }(new Date), {
        type: yk.h
      })
    }
  },
  34119: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      d: () => Tk
    });
    var Xk = Ik(25);

    function Tk(kk, Fk) {
      return kk && !Fk
    }

    function ik() {
      return Tk(Xk.d.get("isTouchScreen"), Xk.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34048: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    const Xk = new Set(["chunkBorders"])
  },
  34044: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ALL_DEV_TOOLS: () => yk,
      coreDevTools: () => qk,
      devTools: () => ak
    });
    var Xk = Ik(646),
      Tk = Ik(1276),
      ik = Ik(34048);
    const yk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function lk() {
      const {
        noaDevTools: kk
      } = await Ik.e(236).then((() => Ik(41079)));
      return kk
    }
    const ak = new class {
        constructor() {
          this.loadHost = lk, this.tools = yk
        }
        setHost(kk) {
          this.tools = null === kk ? yk : kk.tools, this.loadHost = null === kk ? lk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, Fk) {
          const Ik = await this.loadHost();
          await Ik.downloadScene(kk, Fk)
        }
        async setAmbientLightIntensity(kk) {
          const Fk = await this.loadHost();
          await Fk.setAmbientLightIntensity(kk)
        }
        async capturePhoto(kk, Fk, Ik) {
          return (await this.loadHost()).capturePhoto(kk, Fk, Ik)
        }
      },
      qk = {
        tools: ik.c,
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
    Xk.x && ak.setHost(qk), (0, Tk.B)((() => {
      ak.setHost(qk)
    }))
  },
  34222: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => Tk,
      h: () => Lk
    });
    var Xk = Ik(1518);

    function Tk(kk) {
      var Fk;
      return {
        ...yk.store,
        yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ik = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yk = {
        player: ik,
        store: {
          ...ik,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class ak {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class qk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), lk(kk, (kk => {
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
        var Ik;
        null === (Ik = this.opened) || void 0 === Ik || Ik.setCosmetic(kk, Fk)
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
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Lk = new class {
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
        return new ak(this.current().openMob(kk))
      }
      openPet(kk) {
        return new ak(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new ak(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new qk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  34218: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.c,
      f: () => Xk.f,
      h: () => Xk.h
    });
    var Xk = Ik(34222);
    class Tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ik {
      constructor() {
        this.mobScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(246)]).then((() => Ik(41091))))), this.characterScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(245)]).then((() => Ik(41185)))))
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
        return this.characterScene.run((Ik => Ik.openCharacterPreview(kk, Fk)))
      }
    }
    Xk.h.setDefaultHost((() => new ik))
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  34083: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return kk && !Fk
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  34111: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(1076);

    function Tk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ik = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Tk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Tk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Xk.ow)(new Error("Game view size held for 60 s"))
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
          const Ik = kk();
          return Fk ||= null !== Ik, Ik
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  34079: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      f: () => tk,
      i: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(1631),
      ik = Ik(41),
      yk = Ik(3612);
    const lk = 2592e5,
      ak = "notificationOptInLastPromptedAt";
    async function qk() {
      var kk;
      const Fk = null !== (kk = ik.j.getItem(ak)) && void 0 !== kk ? kk : 0;
      return Date.now() - Fk < lk ? null : tk()
    }

    function Lk() {
      ik.j.setItem(ak, Date.now())
    }
    async function tk() {
      return await Tk.b.ready, Tk.b.supports("notifications") ? Xk.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Tk.b.request("notifications.requestPermission", {}).then((kk => {
          let {
            canAsk: Fk
          } = kk;
          Xk.d.set({
            mobilePushNotificationsCanAsk: Fk
          })
        }), (kk => {
          console.error("The app couldn't ask for push notifications:", kk)
        }))
      }: null: await yk.b.canAsk() ? () => yk.b.requestPermission() : null
    }
  },
  34051: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => xk,
      f: () => qk,
      h: () => wk,
      l: () => ek
    });
    var Xk = Ik(149),
      Tk = Ik(1253),
      ik = Ik(1194),
      yk = Ik(1120),
      lk = Ik(1658);
    const ak = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function qk(kk) {
      return ak[kk]
    }

    function Lk(kk) {
      return (0, lk.d)(kk) ? "outdated" : kk instanceof Xk.b ? 429 === kk.httpCode ? "busy" : "server" : "offline"
    }

    function tk(kk, Fk, Ik) {
      return (0, yk.postJsonWithMetricsCookiesAndJsonResponse)(`${ik.clientSideServerUrls.indexUrl}${Fk}`, Ik, {
        retries: 3
      }, kk.getMetricsCookies()).catch((kk => (console.error("Bad response from the server when trying to change name:", Fk, kk), {
        outcome: "failed",
        failure: Lk(kk)
      })))
    }

    function Zk(kk) {
      return "outcome" in kk && "failed" === kk.outcome
    }

    function jk(kk) {
      return console.error("Error when trying to get with new name from DB", kk), {
        outcome: "refused",
        message: kk
      }
    }
    async function ek(kk) {
      const Fk = await tk(kk, "/index/name/random", {});
      return Zk(Fk) ? Fk : "err" in Fk ? jk(Fk.err) : (kk.setPlayerName(Fk.name), {
        outcome: "changed",
        name: Fk.name
      })
    }
    async function wk(kk, Fk) {
      const Ik = await tk(kk, "/index/name/update", {
        name: Fk
      });
      return Zk(Ik) ? Ik : "err" in Ik ? jk(Ik.err) : Ik.nameExists ? {
        outcome: "taken"
      } : (kk.setPlayerName(Fk), {
        outcome: "changed",
        name: Fk
      })
    }

    function Hk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Xk = 1 === Fk ? 1 : 10 ** (Fk - 1),
        ik = String(Xk + Math.floor(Ik() * (10 ** Fk - Xk)));
      return `${kk.slice(0,Tk.j-Fk)}${ik}`
    }
    const Jk = [1, 2, 3, 4];
    async function xk(kk, Fk) {
      const Ik = await wk(kk, Fk);
      if ("taken" !== Ik.outcome) return Ik;
      for (const Xk of Jk) {
        const Ik = Hk(Fk, Xk),
          Tk = await wk(kk, Ik);
        if ("taken" !== Tk.outcome) return Tk
      }
      return {
        outcome: "taken"
      }
    }
  },
  34091: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      f: () => ak
    });
    var Xk = Ik(25);
    const Tk = 24,
      ik = "farNametags",
      yk = 1e5;

    function lk() {
      var kk;
      return null === (kk = Xk.d.get("showDistantNametags")) || void 0 === kk || kk
    }

    function ak() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(ik),
          Fk = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(Fk) && Fk >= 0 ? Math.min(Fk, yk) : null
      }()) && void 0 !== kk ? kk : lk() ? 0 : Tk
    }
  },
  34202: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => yk
    });
    const Xk = [{
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

    function Tk(kk) {
      let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Ik = Math.abs(kk);
          return Ik >= 10 ? `${Fk}${Ik.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const Tk = Fk < 0n ? -Fk : Fk,
        ik = Fk < 0n ? "-" : "",
        yk = Tk.toString();
      if (yk.length <= Ik) return `${ik}${yk}`;
      const lk = 3 * Math.floor((yk.length - 1) / 3);
      if (lk < 3) return `${ik}${yk}`;
      if (lk > 3 * Xk.length) {
        const kk = yk[0],
          Fk = yk.slice(1, 3).replace(/0+$/, "");
        return `${ik}${Fk?`${kk}.${Fk}`:kk}e${yk.length-1}`
      }
      const {
        threshold: ak,
        suffix: qk
      } = Xk[Xk.length - lk / 3], Lk = Tk / ak, tk = Number(1000n * (Tk % ak) / ak), Zk = Number(Lk) + tk / 1e3;
      let jk;
      return jk = Zk >= 100 ? Math.floor(Zk).toString() : Zk >= 10 ? Zk.toFixed(1).replace(/\.0$/, "") : Zk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${jk}${qk}`
    }
    const ik = Xk.map((kk => {
      let {
        threshold: Fk,
        suffix: Ik
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Ik
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function yk(kk) {
      const Fk = Math.abs(kk),
        Ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Xk,
          suffix: Tk
        }
        of ik)
        if (Fk >= Xk) {
          const kk = Fk / Xk;
          if (kk >= 1e3) return `${Ik}${Fk.toExponential(2).replace("e+","e")}`;
          let ik;
          return ik = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Ik}${ik}${Tk}`
        } return `${Ik}${Fk}`
    }
  },
  34180: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Lk,
      h: () => Zk,
      i: () => tk,
      j: () => yk,
      n: () => qk,
      r: () => ak
    });
    var Xk = Ik(337);
    const Tk = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      ik = {
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

    function yk(kk) {
      var Fk;
      return null !== (Fk = ik[kk]) && void 0 !== Fk ? Fk : {
        translationKey: ""
      }
    }
    const lk = {
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

    function ak(kk) {
      return Tk.includes(kk)
    }

    function qk(kk) {
      var Fk;
      return !0 === (null === kk || void 0 === kk || null === (Fk = kk.customAttributes) || void 0 === Fk ? void 0 : Fk.cannotEnchant)
    }

    function Lk(kk, Fk) {
      const {
        max: Ik
      } = lk[kk].at(-1);
      return Fk <= Ik
    }

    function tk(kk) {
      const Fk = Math.sin(kk / 80),
        Ik = kk => {
          if (kk <= 0) return 0;
          if (kk > 1) return 1;
          let Fk = 0;
          const Ik = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Xk = 0; Xk < Ik.length; Xk++) {
            Fk += (Xk % 2 === 0 ? 1 : -1) * Ik[Xk] * Math.pow(kk, 2 + Xk) / (2 + Xk)
          }
          return 72 * Fk
        },
        Xk = .3 - .78 * Fk,
        Tk = .5 - .78 * Fk,
        ik = .6 - .7 * Fk,
        yk = .8 - .6 * Fk;
      let lk = Ik(Xk),
        ak = Ik(Tk) - lk,
        qk = Ik(ik) - ak - lk,
        Lk = Ik(yk) - qk - ak - lk;
      Xk < .041 && (ak /= 1 - lk, qk /= 1 - lk, Lk /= 1 - lk, lk = 0), Tk < .041 && (lk /= 1 - ak, qk /= 1 - ak, Lk /= 1 - ak, ak = 0), ik < .041 && (lk /= 1 - qk, ak /= 1 - qk, Lk /= 1 - qk, qk = 0), yk < .041 && (lk /= 1 - Lk, ak /= 1 - Lk, qk /= 1 - Lk, Lk = 0);
      return {
        commonProb: lk,
        uncommonProb: ak,
        rareProb: qk,
        epicProb: Lk,
        legendaryProb: 1 - (Lk + qk + ak + lk)
      }
    }

    function Zk(kk, Fk) {
      const {
        min: Ik,
        max: Tk
      } = lk[kk][Fk], ik = Xk.e.sampleUniformIntDistribution(Ik, Tk, "includeMax");
      return {
        ...tk(ik),
        level: ik
      }
    }
  },
  34139: () => {},
  12750: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13880: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15338: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15861: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);