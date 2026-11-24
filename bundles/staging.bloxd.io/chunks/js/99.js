export const id = 99;
export const ids = [99, 194];
export const modules = {
  34161: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      EverythingMenu: () => yw
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1208),
      wm = fm(1089),
      Dm = fm(2042),
      im = fm(1454),
      Rm = fm(1152),
      pm = fm(1135);

    function Em(mm) {
      let {
        items: Tm,
        link: fm,
        onClick: hm,
        selectedItemId: Am,
        className: Em,
        padStartsOnTab: om = !0
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = (0, Rm.j)(), qm = [];
      for (const am of Tm) {
        var jm;
        const mm = qm[qm.length - 1];
        var Vm;
        if (mm && mm.title === (null !== (jm = am.section) && void 0 !== jm ? jm : null)) mm.items.push(am);
        else qm.push({
          title: null !== (Vm = am.section) && void 0 !== Vm ? Vm : null,
          items: [am]
        })
      }
      return (0, pm.jsxs)("div", {
        className: am()("MenuSideBarBody", Em),
        "data-pad-tabs": "2",
        children: [qm.map(((mm, Tm) => {
          var fm;
          return (0, pm.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [mm.title && (0, pm.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Om(mm.title)
            }), mm.items.map((mm => {
              var Tm;
              const fm = !!mm.iconElement || !!mm.faIcon;
              return (0, pm.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Am === mm.id ? "true" : void 0,
                "data-pad-default-focus": om && Am === mm.id || void 0,
                className: am()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Am === mm.id
                }),
                onClick: () => {
                  hm(mm.id)
                },
                children: [fm && (0, pm.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Tm = mm.iconElement) && void 0 !== Tm ? Tm : (0, pm.jsx)(wm.c, {
                    name: mm.faIcon
                  })
                }), (!Ym || !fm) && (0, pm.jsx)("div", {
                  children: Om(mm.title)
                }), mm.redDot && (0, pm.jsx)(Dm.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, mm.id)
            }))]
          }, null !== (fm = mm.title) && void 0 !== fm ? fm : Tm)
        })), fm && (0, pm.jsxs)("div", {
          ...(0, im.Z)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: fm.onClick,
          children: [(0, pm.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, pm.jsx)(wm.c, {
              name: fm.faIcon
            })
          }), (0, pm.jsx)("div", {
            children: Om(fm.title)
          }), (0, pm.jsx)(wm.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var om = fm(3001),
      Om = fm(1160),
      Ym = fm(2391),
      qm = fm(3112),
      jm = fm(105),
      Vm = fm(1905),
      Im = fm(2230),
      Km = fm(2238),
      Qm = fm(1676),
      nm = fm(1345),
      Jm = fm(4954),
      cm = fm(23),
      zm = fm(34163);

    function Zm(mm) {
      let {
        setApplySettingsCallback: Tm
      } = mm;
      const {
        clientEscMenuOptions: fm
      } = (0, cm.m)(["clientEscMenuOptions"]), [Am, am] = (0, hm.useState)(!1), [xm, wm] = (0, hm.useState)(!1), [Dm, Rm] = (0, hm.useState)(6400), [Em, om] = (0, hm.useState)(3600), [Om, Ym] = (0, hm.useState)(!1), [qm, jm] = (0, hm.useState)(!1);

      function Vm(mm) {
        const Tm = "screenshot" === mm ? wm : am;
        Tm(!0);
        const fm = Om ? "normals" : qm ? "depth" : null;
        zm.devTools.downloadScene(mm, {
          width: Dm,
          height: Em,
          colouring: fm
        }).catch((mm => {
          console.error("Couldn't download the scene", mm)
        })).finally((() => {
          Tm(!1)
        }))
      }
      return (0, pm.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, pm.jsx)(Jm.e, {
          label: "Disable Ambient Occlusion",
          checked: fm.disableAmbientOcclusion,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              disableAmbientOcclusion: mm
            }), Tm((() => Jm.o))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), zm.devTools.supports("ambientLight") && (0, pm.jsx)(Jm.m, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: fm.ambientLightIntensity,
          onChange: mm => {
            zm.devTools.setAmbientLightIntensity(mm).then((() => {
              cm.c.setClientEscMenuOptions({
                ambientLightIntensity: mm
              })
            })).catch((mm => {
              console.error("Couldn't set the ambient light", mm)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), zm.devTools.supports("weaponRaycasts") && (0, pm.jsx)(Jm.e, {
          label: "Show Weapon Raycasts",
          checked: fm.showWeaponRaycasts,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              showWeaponRaycasts: mm
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), zm.devTools.supports("sceneDownload") && (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pm.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, pm.jsx)(Jm.e, {
              label: "Apply normal-based coloring",
              checked: Om,
              onClick: mm => {
                Ym(mm), mm && jm(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, pm.jsx)(Jm.e, {
              label: "Apply depth-based coloring",
              checked: qm,
              onClick: mm => {
                jm(mm), mm && Ym(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, pm.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, pm.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, pm.jsx)(Qm.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (mm, Tm) => {
                  const fm = parseInt(mm) || 6400;
                  Rm(fm)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Dm.toString()
              }), (0, pm.jsx)("span", {
                children: "X"
              }), (0, pm.jsx)(Qm.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (mm, Tm) => {
                  const fm = parseInt(mm) || 3600;
                  om(fm)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Em.toString()
              })]
            }), (0, pm.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, pm.jsxs)(im.e, {
                onClick: () => {
                  Vm("screenshot")
                },
                disabled: xm,
                children: [xm && (0, pm.jsx)(nm.c, {}), "Download Screenshot"]
              }), (0, pm.jsxs)(im.e, {
                onClick: () => {
                  Vm("glb")
                },
                disabled: Am,
                children: [Am && (0, pm.jsx)(nm.c, {}), "Download GLB"]
              })]
            })]
          }), (0, pm.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var km = fm(135),
      bm = fm(1162),
      Sm = fm(34173),
      em = fm(3004),
      Nm = fm(1519),
      Gm = fm(1270),
      Xm = fm(1243),
      Pm = fm(3089),
      Hm = fm(2020),
      ym = fm(1494),
      Cm = fm(354),
      rm = fm(2242),
      sm = fm(2250),
      lm = fm(2686),
      Mm = fm(1643),
      um = fm(3055),
      Bm = fm(3036),
      Lm = fm(3095),
      tm = fm(208);

    function Um(mm) {
      const {
        t: Tm,
        selectedLanguage: fm
      } = (0, xm.A)(), {
        userContext: Am
      } = (0, Om.e)(), {
        superRankInfo: am
      } = Am, wm = mm && ((0, Cm.wc)(am) || Am.ranksMayChange) && (0, sm.purchasesAllowed)(), {
        accountId: Dm,
        data: im
      } = (0, lm.i)(um.d, wm);
      if ((0, hm.useEffect)((() => {
          if (wm) return um.d.watchAccount(), Mm.e.addRefetchListener("billing", (mm => {
            "reconnected" === mm ? um.d.refreshAfterReconnect() : um.d.refresh()
          }))
        }), [wm]), !wm || !(0, Cm.wc)(am) || null === im || Dm !== Am.whamm) return null;
      const Rm = function(mm, Tm, fm) {
        const hm = Lm.h[(0, Lm.e)(Lm.h, Tm)],
          Am = void 0 === hm ? void 0 : (0, tm.c)(mm.entitlements, hm.entitlementId);
        return void 0 === Am || null === Am.expiresAt || (0, Bm.g)(Am) <= fm ? null : Am.willRenew && null === Am.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Am.expiresAt, fm)
        } : {
          renews: !1,
          at: (0, Bm.g)(Am)
        }
      }(im, am.tier, Date.now());
      if (null === Rm) return null;
      const pm = Rm.renews ? "store:renewsOn" : "store:endsOn";
      return Tm(pm, {
        date: new Date(Rm.at).toLocaleDateString((0, xm.n)(fm.code, pm), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var dm = fm(1362),
      gm = fm(1225),
      Wm = fm(4825),
      Fm = fm(1476),
      mT = fm(3641),
      TT = fm(2222);

    function fT(mm) {
      let {
        showing: Tm
      } = mm;
      const {
        t: fm
      } = (0, xm.A)(), {
        data: hm,
        failed: Am
      } = (0, lm.i)(mT.g, Tm);
      return 0 === (null === hm || void 0 === hm ? void 0 : hm.length) || null === hm && !Am ? null : (0, pm.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, pm.jsx)("div", {
          className: "AccountSettingsLabel",
          children: fm("paymentHistory:title")
        }), null === hm && Am && (0, pm.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: fm("paymentHistory:loadFailed")
        }), null !== hm && (0, pm.jsx)("ul", {
          className: "PaymentHistoryList",
          children: hm.map((mm => (0, pm.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, pm.jsx)(TT.d, {
              entry: mm
            }), (0, pm.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, pm.jsx)("div", {
                children: (0, TT.k)(fm, mm)
              }), (0, pm.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(mm.at).toLocaleDateString(), "number" === typeof mm.orderId && ` \xb7 ${fm("paymentHistory:order",{orderId:mm.orderId})}`]
              })]
            })]
          }, (0, mT.d)(mm))))
        })]
      })
    }
    var hT = fm(1875),
      AT = fm(1254),
      aT = fm(1354),
      xT = fm(1782),
      wT = fm(1214),
      DT = fm(1309),
      iT = fm(3025);
    async function RT() {
      try {
        return function(mm) {
          const Tm = new Map;
          for (const {
              store: fm,
              status: hm,
              autoRenewStatus: Am,
              managementUrl: am
            }
            of Object.values(mm.subscriptions)) !(0, Bm.k)(fm) || (0, Bm.m)(hm) || "willNotRenew" === Am || Tm.has(fm) || Tm.set(fm, null !== am && void 0 !== am ? am : Bm.n[fm]);
          return Array.from(Tm, (mm => {
            let [Tm, fm] = mm;
            return {
              store: Tm,
              managementUrl: fm
            }
          }))
        }(await (0, xT.l)((0, iT.h)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (mm) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", mm), null
      }
    }
    var pT = fm(339),
      ET = fm(2483);
    const oT = {
      appStore: {
        name: "App Store",
        ...pT.Ob.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...pT.Ob.googlePlay
      },
      discord: {
        name: "Discord",
        ...pT.Ob.discord
      }
    };

    function OT(mm) {
      let {
        warning: Tm,
        subscriptions: fm
      } = mm;
      const {
        t: hm
      } = (0, xm.A)();
      return null !== fm && 0 === fm.length ? (0, pm.jsx)(pm.Fragment, {
        children: hm(Tm)
      }) : (0, pm.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [hm(Tm), null === fm && (0, pm.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: hm("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== fm && (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: hm("auth:deleteAccountStoreSubscriptions")
          }), (0, pm.jsx)(ET.b, {
            className: "DeleteAccountSubtitleLinks",
            links: fm.map((mm => {
              let {
                store: Tm,
                managementUrl: fm
              } = mm;
              return {
                ...oT[Tm],
                url: fm
              }
            }))
          })]
        })]
      })
    }

    function YT(mm) {
      let {
        showing: Tm
      } = mm;
      const {
        userContext: fm,
        isUserContextUpdating: Am
      } = (0, Om.e)(), {
        t: am
      } = (0, xm.A)(), [wm, Dm] = (0, hm.useState)(!1), [Rm, Em] = (0, hm.useState)(null), om = (0, hm.useRef)(Tm);
      (0, hm.useEffect)((() => (om.current = Tm, () => {
        om.current = !1
      })), [Tm]);
      const Ym = Am || wm;
      return (0, pm.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, pm.jsxs)(im.O, {
          onClick: async function() {
            if (!wm) {
              Dm(!0);
              try {
                const mm = await async function() {
                  const [mm, Tm] = await Promise.all([(0, hT.d)(fm.availableUserContextTypes) ? RT() : [], jT(fm)]);
                  if (!om.current) return AT.e.ok();
                  const hm = (0, Gm.e)(fm.getPlayerName(), !jm.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await aT.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: hm
                        }
                      },
                      subtitle: (0, pm.jsx)(OT, {
                        warning: qT(fm.isLoggedIn(), Tm),
                        subscriptions: mm
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: Tm ? am("auth:deleteAccountTypedConfirm", {
                        playerName: hm
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return AT.e.ok();
                  const Am = await (0, bm.postJsonWithMetricsCookiesAndJsonResponse)(`${wT.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: cm.c.get("gameState")
                  }, {
                    retries: 3
                  }, fm.getMetricsCookies());
                  if (Am.error) return AT.e.error(Am.error);
                  (0, km.c)() && (await DT.p.discordActivity()).exit("User deleted their account");
                  return (0, bm.forgetStoredGuestAccount)(fm.whamm), (0, bm.forceGlobalSignOut)(!0), AT.e.ok()
                }(), Tm = mm.isError() ? mm.asError().message : null;
                Em(Tm)
              } catch (mm) {
                console.error("Failed to delete account:", mm), Em(am("auth:genericDeleteAccountError"))
              }
              Dm(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Ym,
          children: [Ym && (0, pm.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, pm.jsx)(nm.c, {})
          }), am("auth:deleteAccount")]
        }), Rm && (0, pm.jsx)("div", {
          className: "DeleteAccountError",
          children: Rm
        })]
      })
    }

    function qT(mm, Tm) {
      return (0, km.c)() ? "auth:discordActivityDeleteAccountLossWarning" : mm ? "auth:deleteAccountLossWarning" : Tm ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function jT(mm) {
      try {
        const {
          accountCreatedAt: Tm
        } = await (0, xT.l)(ym.d.getPlayerProfile(mm, {
          lowerCaseName: mm.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== Tm && Date.now() - Tm >= 7 * Cm.k
      } catch (Tm) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", Tm), !0
      }
    }
    var VT = fm(3585),
      IT = fm(3596),
      KT = fm(3594);

    function QT(mm) {
      let {
        showing: Tm
      } = mm;
      const {
        t: fm
      } = (0, xm.A)(), {
        data: hm,
        failed: Am
      } = (0, lm.i)(VT.d, Tm), am = null === hm ? null : (0, VT.g)(hm);
      return (0, pm.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, pm.jsx)("div", {
          className: "AccountSettingsLabel",
          children: fm("settingsMenu:blockedAndIgnoredPlayers")
        }), null === am && !Am && (0, pm.jsx)(nm.c, {}), null === am && Am && (0, pm.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [fm("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, pm.jsx)(im.e, {
            className: "SmallTextLight",
            onClick: () => {
              VT.d.refresh()
            },
            children: fm("general:tryAgain")
          })]
        }), 0 === (null === am || void 0 === am ? void 0 : am.length) && (0, pm.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: fm("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== am && am.length > 0 && (0, pm.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: am.map((mm => {
            let {
              name: Tm,
              exclusion: hm
            } = mm;
            const Am = KT.f[hm];
            return (0, pm.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, pm.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Tm
              }), (0, pm.jsx)(im.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, IT.e)(Am, Tm, {
                    chatMessage: null
                  })
                },
                children: fm(KT.h[Am].text)
              })]
            }, Tm)
          }))
        })]
      })
    }
    const nT = (0, hm.memo)((function(mm) {
      var Tm;
      let {
        showing: fm,
        inGame: Am
      } = mm;
      const {
        t: Dm,
        selectedLanguage: Rm
      } = (0, xm.A)(), {
        hideSocialLocationFrom: Em
      } = (0, cm.m)(["hideSocialLocationFrom"]), Ym = (0, om.c)(), {
        userContext: qm,
        isUserContextUpdating: Vm
      } = (0, Om.e)(), [Im, Km] = (0, hm.useState)(null !== (Tm = qm.getPlayerName()) && void 0 !== Tm ? Tm : ""), [zm, Zm] = (0, hm.useState)(null), {
        purchasing: lm,
        outcome: Mm,
        purchase: um
      } = (0, em.c)("/super-rank-welcome"), Bm = (0, Cm.bc)((0, xm.n)(Rm.code, "general:timeLeft"), qm.superRankInfo), Lm = Um(fm), tm = Bm ? Dm("general:timeLeft", {
        time: Bm
      }) : Lm, [mT, TT] = (0, hm.useState)(!1), [hT, AT] = (0, hm.useState)(!1), aT = (0, hm.useRef)(null), xT = (0, hm.useRef)(null), wT = (0, Hm.i)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), DT = null === wT, iT = null !== wT && void 0 !== wT ? wT : [], RT = qm !== bm.NULL_USER_CONTEXT && !qm.isLoggedIn(), pT = RT && 0 !== (null === wT || void 0 === wT ? void 0 : wT.length), [ET, oT] = (0, hm.useState)([]), [OT, qT] = (0, hm.useState)(!1), jT = qm.playerHasRank("youtuber"), VT = (0, hm.useCallback)((() => ym.d.getPlayerProfile(qm, {
        lowerCaseName: qm.getPlayerName().toLowerCase()
      }).then((mm => {
        oT(mm.socialLinks)
      })).catch((mm => {
        console.error("Failed to refresh social links", mm)
      }))), [qm]);

      function IT(mm) {
        mm !== Im && ((0, Gm.q)(mm) ? (mm = (0, Gm.r)(mm), Zm(Dm("homePage:nameCharacters"))) : Zm(null), aT.current && (aT.current.value = mm), Km(mm))
      }
      return (0, hm.useEffect)((() => (!0 === fm ? (clearInterval(xT.current), xT.current = setInterval(Ym, 1e3)) : clearInterval(xT.current), () => {
        clearInterval(xT.current)
      })), [fm, Ym]), (0, hm.useEffect)((() => {
        var mm;
        Km(null !== (mm = qm.getPlayerName()) && void 0 !== mm ? mm : "")
      }), [qm]), (0, hm.useEffect)((() => {
        if (!fm || !jT || Vm) return;
        let mm = !1;
        return qT(!0), oT([]), ym.d.getPlayerProfile(qm, {
          lowerCaseName: qm.getPlayerName().toLowerCase()
        }).then((Tm => {
          mm || oT(Tm.socialLinks)
        })).catch((mm => {
          console.error("Failed to load social links", mm)
        })).finally((() => {
          mm || qT(!1)
        })), () => {
          mm = !0
        }
      }), [fm, jT, Vm, qm]), (0, pm.jsxs)("div", {
        className: am()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Am
        }),
        children: [Am && (0, pm.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Dm("settingsMenu:accountSettingsInGameWarning")
        }), (0, pm.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, pm.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Dm("homePage:discordNamePopupTitle"), (0, pm.jsxs)(Nm.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Xm.i)({
                name: qm.getPlayerName()
              }),
              onClick: () => {
                cm.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, pm.jsx)(wm.c, {
                name: "arrow-up-right-from-square"
              }), " ", Dm("profileCard:viewProfile")]
            })]
          }), (0, pm.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, pm.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [jm.featureFlags.canChangeName && (0, pm.jsx)(Qm.e, {
                className: "EnterName",
                placeholderText: Dm("homePage:enterName"),
                maxLength: Gm.j,
                defaultValue: Im,
                onValueChange: mm => {
                  IT(mm)
                },
                forcedText: mT || !jm.featureFlags.canChangeName ? Im : null,
                blurOnEnter: !0,
                domRef: aT
              }), (0, pm.jsx)(im.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  IT((0, Gm.g)())
                },
                children: (0, pm.jsx)(wm.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !jm.featureFlags.canChangeName && (0, pm.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Gm.e)(Im, !jm.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, pm.jsx)(im.e, {
              className: "ChooseNameButton",
              disabled: mT || Im === qm.getPlayerName(),
              onClick: () => {
                Im.length < Gm.m ? Zm(Dm("homePage:changeNameMinLengthError", {
                  length: Gm.m
                })) : Im.length > Gm.j ? Zm(Dm("homePage:changeNameMaxLengthError", {
                  length: Gm.j
                })) : (TT(!0), Zm(null), (0, Sm.h)(qm, Im).then((mm => {
                  TT(!1), "taken" === mm.outcome ? Zm(Dm("homePage:nameTaken")) : "refused" === mm.outcome ? Zm(mm.message) : "failed" === mm.outcome && Zm(Dm((0, Sm.e)(mm.failure)))
                })))
              },
              children: Dm("general:choose")
            })]
          }), zm && (0, pm.jsx)("div", {
            className: "ChooseAccNameError",
            children: zm
          })]
        }), (0, pm.jsx)(Jm.e, {
          label: (() => {
            if ((0, gm.l)(Em)) {
              const mm = (0, xm.n)(Rm.code, "general:timeLeft"),
                Tm = (0, Cm.cb)(mm, Date.now(), Em + gm.i);
              return `${Dm("settingsMenu:hideSocialLocation")} (${Dm("general:timeLeft",{time:Tm})})`
            }
            return Dm("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const mm = !(0, gm.l)(Em);
            (0, Fm.reportAnalyticsClick)({
              id: "social.hide_location",
              value: mm ? "on" : "off"
            }), AT(!0), ym.d.setHideSocialLocation(qm, mm).then((() => {
              cm.c.set({
                hideSocialLocationFrom: mm ? Date.now() : null
              })
            })).finally((() => {
              AT(!1)
            }))
          },
          checked: (0, gm.l)(Em),
          disabled: hT
        }), jT && (0, pm.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, pm.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Dm("settingsMenu:socialLinks")
          }), OT && (0, pm.jsx)(nm.c, {}), !OT && (0, pm.jsx)(Wm.b, {
            socialLinks: ET,
            editable: !0,
            userContext: qm,
            onLinksUpdated: VT
          })]
        }), (0, pm.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pm.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Dm(pT ? "auth:loginOrSwitchAccount" : "auth:login")
          }), DT && (0, pm.jsx)(nm.c, {}), !DT && 0 === iT.length && (0, pm.jsx)("div", {
            className: "NoLoginOptions",
            children: Dm("auth:noLoginOptions")
          }), !DT && iT.length > 0 && "crazygames" !== km.q && (0, pm.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: iT
          }), !DT && iT.length > 0 && "crazygames" === km.q && (0, pm.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [iT[0], iT.length > 1 && (0, pm.jsxs)(pm.Fragment, {
              children: [(0, pm.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, pm.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Dm("auth:legacyLoginOptions")
                }), (0, pm.jsx)(dm.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Dm("auth:legacyLoginOptionsInfo")
                })]
              }), (0, pm.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: iT.slice(1)
              })]
            })]
          }), jm.featureFlags.useLogin && (null !== qm.loggedInInfo || qm.isLoggedIn()) && (0, pm.jsxs)(pm.Fragment, {
            children: [(0, pm.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, pm.jsxs)(im.O, {
              onClick: () => {
                (0, bm.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, pm.jsx)(wm.c, {
                name: "right-from-bracket"
              }), Dm("auth:signOut")]
            })]
          })]
        }), !qm.playerHasRank("super") && (0, sm.purchasesAllowed)() && (0, pm.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pm.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pm.jsx)(wm.c, {
              name: "bolt"
            }), Dm("homePage:superRank")]
          }), (0, pm.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, pm.jsxs)(im.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rm.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pm.jsx)(wm.c, {
                name: "bolt"
              }), Dm("homePage:getSuperRank")]
            }), (0, pm.jsxs)(im.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rm.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pm.jsx)(wm.c, {
                name: "bolt"
              }), Dm("homePage:giftSuperRank")]
            })]
          })]
        }), qm.playerHasRank("super") && (0, pm.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pm.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pm.jsx)(wm.c, {
              name: "bolt"
            }), Dm("homePage:superRank"), tm && (0, pm.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", tm, ")"]
            })]
          }), (0, sm.purchasesAllowed)() && (0, pm.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Cm.wc)(qm.superRankInfo) && (0, pm.jsxs)(im.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: lm,
              onClick: () => {
                um(Pm.n.id, null)
              },
              children: [(0, pm.jsx)(wm.c, {
                name: "bolt"
              }), Dm("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Pm.n.product.days,
                price: Pm.n.price
              })]
            }), (0, pm.jsxs)(im.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, rm.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pm.jsx)(wm.c, {
                name: "bolt"
              }), Dm("homePage:giftSuperRank")]
            })]
          }), Mm && (0, pm.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Dm(Mm.translationKey)
          })]
        }), (0, pm.jsx)(fT, {
          showing: fm
        }), jm.featureFlags.useSocialFeatures && (0, pm.jsx)(QT, {
          showing: fm
        }), (0, pm.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, pm.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, pm.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Dm(JT(RT, pT))
            }), (0, km.c)() && (0, pm.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Dm("auth:discordActivityKickWarning")
            }), (0, pm.jsx)(YT, {
              showing: fm
            })]
          }), (0, pm.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Dm(RT ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function JT(mm, Tm) {
      return mm ? Tm ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var cT = fm(34180),
      zT = fm(3127),
      ZT = fm(1259),
      kT = fm(1438),
      bT = fm(1946),
      ST = fm(8833),
      eT = fm(34183);

    function NT() {
      const {
        t: mm
      } = (0, xm.A)();
      return (0, bT.k)("localPlayerAlive") ? (0, pm.jsx)(ST.b, {
        icon: "camera",
        title: mm("screenshotMode:title"),
        sub: mm("screenshotMode:entrySub"),
        onClick: eT.b
      }) : null
    }
    var GT = fm(34194);
    const XT = (0, hm.memo)((function(mm) {
        let {
          inGame: Tm
        } = mm;
        const {
          t: fm,
          selectedLanguage: hm
        } = (0, xm.A)(), {
          clientEscMenuOptions: Am,
          showDebugOverlay: am,
          isTouchScreen: wm
        } = (0, cm.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), Dm = (0, Ym.g)("hideCoordinates");
        let im = "settingsMenu:showCoordinates",
          Rm = "settingsMenu:showChunkCoordinates";

        function Em(mm) {
          const Tm = new Intl.DisplayNames([mm], {
            type: "language"
          }).of(mm);
          return Tm.charAt(0).toUpperCase() + Tm.slice(1)
        }
        return Dm && (im = "settingsMenu:showCoordinatesHidden", Rm = "settingsMenu:showChunkCoordinatesHidden"), (0, pm.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Tm && jm.featureFlags.canUseInviteLinks && (0, pm.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pm.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: fm("settingsMenu:inviteLink")
            }), (0, pm.jsx)(cT.e, {})]
          }), (0, pm.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pm.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: fm("settingsMenu:language")
            }), (0, pm.jsx)(zT.d, {
              options: Object.entries(xm.i).map((mm => {
                let [Tm, fm] = mm;
                return {
                  label: (0, pm.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, pm.jsx)("img", {
                      src: fm.flagImg,
                      alt: "flag"
                    }), (0, pm.jsxs)("span", {
                      children: [Em(Tm), " ", (0, pm.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Tm, ")"]
                      })]
                    })]
                  }),
                  value: Tm
                }
              })),
              value: hm.code,
              onChange: mm => {
                ZT.e.get().setCurrentLanguage(mm.value)
              }
            })]
          }), Tm && wm && (0, GT.e)() && (0, pm.jsx)(NT, {}), !(0, jm.isMobileApp)() && (0, kT.l)() && jm.featureFlags.useForceRotateForceFullscreenOverlay && (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:disableFullscreenMode"),
            checked: Am.disableFullscreen,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                disableFullscreen: mm
              })
            }
          }), (0, pm.jsx)(Jm.e, {
            label: fm(im),
            checked: Am.showCoordinates,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showCoordinates: mm
              })
            },
            disabled: Dm
          }), (0, pm.jsx)(Jm.e, {
            label: fm(Rm),
            checked: Am.showChunkCoordinates,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showChunkCoordinates: mm
              })
            },
            disabled: Dm
          }), (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:showFps"),
            checked: Am.showFPS,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showFPS: mm
              })
            }
          }), (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:disableBunnyHopping"),
            checked: Am.disableBunnyHopping,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                disableBunnyHopping: mm
              })
            }
          }), (0, DT.z)() && (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:showChat"),
            checked: Am.showChat,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showChat: mm
              })
            }
          }), (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:showDebugOverlay"),
            checked: am,
            onClick: mm => {
              cm.c.set({
                showDebugOverlay: mm
              })
            }
          }), jm.featureFlags.useSocialFeatures && (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:showFriendOnlineToasts"),
            checked: Am.showFriendOnlineToasts,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showFriendOnlineToasts: mm
              })
            }
          }), (0, pm.jsx)(Jm.e, {
            label: fm("settingsMenu:showNewItemIndicator"),
            checked: Am.showNewItemIndicator,
            onClick: mm => {
              cm.c.setClientEscMenuOptions({
                showNewItemIndicator: mm
              })
            }
          })]
        })
      })),
      PT = (0, hm.memo)((function() {
        const {
          t: mm
        } = (0, xm.A)(), {
          soundVolume: Tm,
          musicVolume: fm
        } = (0, cm.m)(["soundVolume", "musicVolume"]);
        return (0, pm.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, pm.jsx)(Jm.m, {
            name: mm("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: fm,
            onChange: mm => {
              cm.c.set({
                musicVolume: Math.round(100 * mm) / 100
              })
            },
            format: mm => mm.toFixed(2)
          }), (0, pm.jsx)(Jm.m, {
            name: mm("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Tm,
            onChange: mm => {
              cm.c.set({
                soundVolume: Math.round(100 * mm) / 100
              })
            },
            format: mm => mm.toFixed(2)
          })]
        })
      }));
    var HT = fm(752),
      yT = fm(1449),
      CT = fm(3652),
      rT = fm(34203),
      sT = fm(3486);
    const lT = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function MT() {
      const {
        t: mm
      } = (0, xm.A)(), Tm = (0, sT.c)(), {
        mobilePushNotificationsCanAsk: fm
      } = (0, cm.m)(["mobilePushNotificationsCanAsk"]), [Am, am] = (0, hm.useState)(null), [wm, Dm] = (0, hm.useState)(!1), [Rm, Em] = (0, hm.useState)(null), [om, Om] = (0, hm.useState)(!1), Ym = (0, hm.useCallback)((() => {
        (0, CT.d)().then((mm => {
          Tm.current && (am(mm), Dm(!1))
        })).catch((mm => {
          console.error("Failed to load push notification targets:", mm), Tm.current && Dm(!0)
        }))
      }), [Tm]), qm = (0, hm.useCallback)((() => {
        (0, rT.d)().then((mm => {
          Tm.current && Em((() => mm))
        }))
      }), [Tm]);
      (0, hm.useEffect)((() => {
        Ym()
      }), [Ym]), (0, hm.useEffect)((() => {
        qm()
      }), [qm, fm]), (0, yT.g)(CT.j, Ym);
      const jm = null === Am ? [] : Object.keys(lT).filter((mm => Am[mm] > 0));
      return (0, pm.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, pm.jsx)("div", {
          className: "SliderText",
          children: mm("notificationSettings:pushNotifications")
        }), null === Am && wm && (0, pm.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: mm("notificationSettings:pushTargetsLoadFailed")
        }), null !== Am && 0 === jm.length && (0, pm.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: mm("notificationSettings:pushTargetsNone")
        }), jm.length > 0 && (0, pm.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: jm.map((Tm => {
            var fm;
            return (0, pm.jsx)("li", {
              children: mm(lT[Tm], {
                count: null !== (fm = null === Am || void 0 === Am ? void 0 : Am[Tm]) && void 0 !== fm ? fm : 0
              })
            }, Tm)
          }))
        }), null !== Rm && (0, pm.jsx)(im.e, {
          className: "PushNotificationSettingsButton",
          loading: om,
          onClick: () => {
            Om(!0), Rm().catch((mm => {
              console.error("Failed to turn on push notifications:", mm)
            })).finally((() => {
              Tm.current && (Om(!1), qm())
            }))
          },
          children: mm("notificationSettings:pushTurnOn")
        })]
      })
    }
    var uT = fm(2525);
    const BT = {
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
      LT = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function vT(mm) {
      let {
        setting: Tm,
        value: fm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)(), wm = (0, sT.c)(), [Dm, im] = (0, hm.useState)(null), [Rm, Em] = (0, hm.useState)(!1), [om, Om] = (0, hm.useState)(null);
      return (0, hm.useEffect)((() => {
        "remindersOn" === Tm && (0, rT.d)().then((mm => {
          wm.current && Om((() => mm))
        }), (mm => {
          console.error("Couldn't tell whether this device can take push notifications:", mm)
        }))
      }), [Tm, wm]), (0, pm.jsx)(Jm.e, {
        className: am()({
          DailyDropSettingFailed: Rm
        }),
        label: Am(LT[Tm].label),
        checked: null !== Dm && void 0 !== Dm ? Dm : fm,
        note: Rm ? Am("dailyDrop:settingFailed") : void 0,
        onClick: mm => {
          null === Dm && (im(mm), Em(!1), mm && null !== om && om().catch((mm => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", mm)
          })), (0, uT.q)("daily_drop.setting", `${LT[Tm].reportAs}_${mm?"on":"off"}`), (0, uT.t)("hidden" === Tm ? {
            hidden: mm
          } : {
            remindersOn: mm
          }).catch((mm => {
            console.error(`Failed to save the Lucky Skin Block's ${Tm} setting:`, mm), wm.current && Em(!0)
          })).finally((() => {
            wm.current && im(null)
          })))
        }
      })
    }
    const tT = (0, hm.memo)((function() {
      const {
        t: mm
      } = (0, xm.A)(), {
        clientEscMenuOptions: Tm
      } = (0, cm.m)(["clientEscMenuOptions"]), {
        userContext: fm
      } = (0, Om.e)(), hm = fm.dailyDrop;
      return (0, pm.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [jm.featureFlags.useSocialFeatures && (0, pm.jsx)(Jm.i, {
          label: mm("notificationSettings:friendRequests"),
          options: HT.c.map((Tm => ({
            value: Tm,
            label: mm(BT[Tm].label)
          }))),
          value: Tm.friendRequestNotifications,
          onChange: mm => {
            cm.c.setClientEscMenuOptions({
              friendRequestNotifications: mm
            })
          },
          circleInfoText: (0, pm.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: HT.c.map((Tm => (0, pm.jsxs)("div", {
              children: [(0, pm.jsx)("b", {
                children: mm(BT[Tm].label)
              }), ": ", mm(BT[Tm].info)]
            }, Tm)))
          })
        }), null !== hm && (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsx)(vT, {
            setting: "remindersOn",
            value: hm.remindersOn
          }), (0, pm.jsx)(vT, {
            setting: "hidden",
            value: hm.hidden
          })]
        }), (0, pm.jsx)(MT, {})]
      })
    }));
    var UT = fm(4441),
      dT = fm(198),
      gT = fm(330),
      WT = fm(6609),
      FT = fm(3461),
      mf = fm(34209),
      Tf = fm(653),
      ff = fm(31);
    var hf = fm(675),
      Af = fm(37),
      af = fm(4309);
    const xf = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function wf(mm) {
      return xf.has(mm) ? Vm.gameBridge.lookup("mI", null) : null
    }

    function Df(mm) {
      if (!(0, Tf.H)(cm.c.get("clientEscMenuOptions")[mm])) return cm.c.get("clientEscMenuOptions")[mm];
      const Tm = wf(mm);
      return null !== Tm ? Tm[xf.get(mm)] : Af.g.getItem(mm)
    }

    function Rf(mm, Tm) {
      if ("useTouchControls" === mm) return void(0, af.d)(Tm);
      mm in cm.c.get("clientEscMenuOptions") && cm.c.setClientEscMenuOptions({
        [mm]: Tm
      });
      const fm = wf(mm);
      null !== fm && Vm.gameBridge.send("setChunkAddDistance", {
        ...fm,
        [xf.get(mm)]: Tm
      }), Af.g.setItem(mm, Tm)
    }
    var pf = fm(4362),
      Ef = fm(34217),
      of = fm(34225),
      Of = fm(4432);

    function Yf(mm) {
      var Tm, Am, wm, Dm;
      let {
        minChunkAddDist: im,
        getValue: Rm,
        onChange: Em,
        setApplySettingsCallback: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), {
        clientEscMenuOptions: qm
      } = (0, cm.m)(["clientEscMenuOptions", "showDistantNametags"]), Vm = (0, hm.useRef)(Rm("showFog")), Im = (0, hm.useRef)(qm.antiAliasing), Km = (0, hm.useRef)(qm.useWebGpu), [Qm, nm] = (0, hm.useState)(null), [Zm, km] = (0, hm.useState)((() => (0, FT.e)(jm.featureFlags.settings.canUseShaderPacks))), [bm] = (0, hm.useState)((() => cm.c.isWebGpuDefaultOff())), [Sm] = (0, hm.useState)(gT.h);
      (0, hm.useEffect)((() => {
        let mm = !1;
        return (0, jm.hasUsableWebGpuAdapter)().then((Tm => {
          mm || nm(Tm)
        })), (0, FT.j)(jm.featureFlags.settings.canUseShaderPacks) && (0, WT.e)().then((async Tm => {
          const hm = null !== Tm && await async function(mm) {
            const [{
              isShaderPackActive: Tm
            }, {
              loadPageShaderPackCompiler: hm
            }] = await Promise.all([fm.e(137).then((() => fm(6600))), Promise.all([fm.e(77), fm.e(133), fm.e(136)]).then((() => fm(6562)))]);
            return Tm(mm, await hm())
          }(Tm);
          mm || km(hm)
        })), () => {
          mm = !0
        }
      }), []);
      const em = function(mm, Tm, fm, hm, Am) {
          return (0, mf.c)(fm, hm) && !0 === Tm ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Tm ? "settingsMenu:newWebGpu" : Am ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: mm && !1 !== Tm,
            disabled: !0 !== Tm
          }
        }(qm.useWebGpu, Qm, Zm, bm, Sm),
        Nm = (qm.useWebGpu || (0, mf.c)(Zm, bm)) && Zm && !0 === Qm,
        Gm = (0, Ym.g)("lightingOverride"),
        Xm = !(0, Tf.H)(Gm);
      let Pm = "settingsMenu:enableLighting";
      Xm && (Pm = Gm ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Hm = mm => {
          var Tm, fm, hm;
          const Am = null !== (Tm = mm.showFog) && void 0 !== Tm ? Tm : Rm("showFog"),
            am = null !== (fm = mm.antiAliasing) && void 0 !== fm ? fm : qm.antiAliasing,
            xm = null !== (hm = mm.useWebGpu) && void 0 !== hm ? hm : qm.useWebGpu,
            wm = !hf.A && Am !== Vm.current || am !== Im.current || xm !== Km.current;
          om(wm ? () => Jm.o : null)
        },
        ym = (0, Ym.g)("fogChunkDistanceOverride"),
        Cm = (0, Ym.g)("fogBlockDistanceOverride"),
        rm = !(0, Tf.H)(ym) || !(0, Tf.H)(Cm),
        sm = rm ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [lm, Mm] = (0, UT.f)(im),
        [um, Bm] = (0, Of.h)(im),
        Lm = Om("settingsMenu:chunkLoadDistanceDeviceLimit"),
        tm = um < lm,
        Um = Math.min(null !== (Tm = Rm("chunkHorizAddDist")) && void 0 !== Tm ? Tm : im[0], um),
        dm = !rm && function(mm, Tm) {
          return !0 === mm.showFog && mm.fogChunkDistance > Tm
        }(qm, Um);
      return (0, pm.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, pm.jsx)(Jm.m, {
          name: Om("settingsMenu:horizontalChunkLoadDistance"),
          min: im[0],
          max: lm,
          selectableMax: um,
          cappedNote: Lm,
          step: 1,
          initValue: Um,
          onChange: mm => {
            !0 === Rm("showFog") && mm < Rm("fogChunkDistance") && Em("fogChunkDistance", mm), Em("chunkHorizAddDist", mm), ff.j.gp("updatedChunkLoadDist")
          },
          circleInfoText: Om("settingsMenu:chunkLoadDistanceInfo")
        }), (0, pm.jsx)(Jm.m, {
          name: Om("settingsMenu:verticalChunkLoadDistance"),
          min: im[1],
          max: Mm,
          selectableMax: Bm,
          cappedNote: tm ? void 0 : Lm,
          step: 1,
          initValue: Math.min(null !== (Am = Rm("chunkVertAddDist")) && void 0 !== Am ? Am : im[1], Bm),
          onChange: mm => {
            Em("chunkVertAddDist", mm), ff.j.gp("updatedChunkLoadDist")
          },
          circleInfoText: Om("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:chunkFadeIn"),
          checked: qm.chunkFadeIn,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              chunkFadeIn: mm
            })
          },
          circleInfoText: Om("settingsMenu:chunkFadeInInfo")
        }), zm.devTools.supports("chunkBorders") && (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:showChunkBorders"),
          checked: qm.showChunkBorders,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              showChunkBorders: mm
            })
          },
          circleInfoText: Om("settingsMenu:showChunkBordersInfo")
        }), (0, pm.jsx)(Jm.e, {
          label: Om(Pm),
          checked: qm.enableLighting,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              enableLighting: mm
            })
          },
          disabled: Xm
        }), (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pm.jsx)(Jm.e, {
            label: Om(sm),
            checked: qm.showFog,
            onClick: mm => {
              Hm({
                showFog: mm
              }), cm.c.setClientEscMenuOptions({
                showFog: mm
              })
            },
            disabled: rm,
            className: am()({
              SettingBoxWarning: dm
            })
          }), (0, pm.jsx)(Jm.m, {
            name: Om("settingsMenu:fogChunkDistance"),
            min: im[0],
            max: dT.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (wm = qm.fogChunkDistance) && void 0 !== wm ? wm : im[0],
            onChange: mm => {
              cm.c.setClientEscMenuOptions({
                fogChunkDistance: mm
              }), ff.j.gp("fogChunkDistanceChanged", mm)
            },
            circleInfoText: Om("settingsMenu:fogChunkDistanceInfo"),
            disabled: rm || !1 === Rm("showFog"),
            className: am()({
              SettingBoxWarning: dm
            })
          }), dm && (0, pm.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Om("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !hf.A && (0, pm.jsx)(Jm.e, {
          label: Om(Nm ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Nm && qm.disableTexAtlas,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              disableTexAtlas: mm
            })
          },
          circleInfoText: Om("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Nm
        }), (0, pm.jsx)(Jm.m, {
          name: Om("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: qm.cameraFOV,
          onChange: mm => {
            cm.c.setClientEscMenuOptions({
              cameraFOV: mm
            })
          }
        }), (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:disableViewBobbing"),
          checked: qm.disableBobbing,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              disableBobbing: mm
            })
          },
          circleInfoText: Om("settingsMenu:disableViewBobbingInfo")
        }), (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:antiAliasing"),
          checked: qm.antiAliasing,
          onClick: mm => {
            Hm({
              antiAliasing: mm
            }), (0, pf.e)("antiAliasing"), cm.c.setClientEscMenuOptions({
              antiAliasing: mm
            })
          },
          circleInfoText: Om("settingsMenu:antiAliasingInfo")
        }), (0, pm.jsx)(Jm.m, {
          name: Om("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Dm = qm.pixelScale) && void 0 !== Dm ? Dm : 1,
          onChange: mm => {
            (mm !== cm.c.get("clientEscMenuOptions").pixelScale || (0, of.q)()) && (0, pf.e)("pixelScale"), cm.c.setClientEscMenuOptions({
              pixelScale: mm
            })
          },
          circleInfoText: Om("settingsMenu:pixelScaleInfo"),
          format: mm => `${mm}x`
        }), (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:pixelSmoothing"),
          checked: qm.pixelSmoothing,
          onClick: mm => {
            cm.c.setClientEscMenuOptions({
              pixelSmoothing: mm
            })
          },
          circleInfoText: Om("settingsMenu:pixelSmoothingInfo")
        }), hf.A && (0, pm.jsx)(Jm.e, {
          label: Om("settingsMenu:distantNametags"),
          checked: (0, Ef.e)(),
          onClick: mm => {
            cm.c.set({
              showDistantNametags: mm
            })
          },
          circleInfoText: Om("settingsMenu:distantNametagsInfo")
        }), (0, pm.jsx)(Jm.e, {
          label: Om(em.translationKey),
          checked: em.checked,
          onClick: mm => {
            Hm({
              useWebGpu: mm
            }), cm.c.setClientEscMenuOptions({
              useWebGpu: mm
            })
          },
          circleInfoText: Om("settingsMenu:newWebGpuInfo"),
          disabled: em.disabled
        })]
      })
    }
    var qf = fm(4355),
      jf = fm(8806),
      Vf = fm(34245),
      If = fm(8817),
      Kf = fm(34251);
    const Qf = {
        color: 16777215,
        name: "white"
      },
      nf = {
        color: 0,
        name: "black"
      },
      Jf = [Qf, {
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
      }, nf],
      zf = [nf, Qf];

    function Zf(mm) {
      return `${mm} px`
    }

    function kf(mm) {
      return `${mm}%`
    }

    function bf(mm) {
      let {
        label: Tm,
        value: fm,
        swatches: hm,
        onChange: Am
      } = mm;
      const {
        t: wm
      } = (0, xm.A)(), Dm = !hm.some((mm => mm.color === fm));
      return (0, pm.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, pm.jsx)("div", {
          className: "SliderText",
          children: Tm
        }), (0, pm.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Tm,
          children: [hm.map((mm => {
            let {
              color: Tm,
              name: hm
            } = mm;
            return (0, pm.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Tm === fm,
              "aria-label": wm(`crosshairSettings:color_${hm}`),
              "data-pad-focusable": !0,
              className: am()("CrosshairSwatch", {
                Selected: Tm === fm
              }),
              style: {
                background: (0, Kf.m)(Tm)
              },
              onClick: () => {
                Am(Tm)
              }
            }, Tm)
          })), (0, pm.jsx)("label", {
            className: am()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Dm
            }),
            style: Dm ? {
              background: (0, Kf.m)(fm)
            } : void 0,
            title: wm("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, pm.jsx)("input", {
              type: "color",
              "aria-label": wm("crosshairSettings:customColor"),
              value: (0, Kf.m)(fm),
              onChange: mm => {
                const Tm = (0, Kf.p)(mm.target.value);
                null !== Tm && Am(Tm)
              }
            })
          })]
        })]
      })
    }

    function Sf(mm) {
      let {
        settings: Tm,
        onChange: fm
      } = mm;
      const {
        t: hm
      } = (0, xm.A)(), Am = (mm, hm) => {
        fm((0, Kf.u)(Tm, mm, hm))
      }, am = function(mm, fm) {
        let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zf;
        const {
          min: am,
          max: xm,
          step: wm
        } = Kf.d[mm];
        return (0, pm.jsx)(Jm.m, {
          name: fm,
          min: am,
          max: xm,
          step: wm,
          initValue: Tm[mm],
          format: hm,
          onChange: Tm => {
            Am(mm, Tm)
          }
        }, mm)
      }, wm = ["lines", "dot", "circle"].filter((mm => Tm[mm])), Dm = (mm, fm, hm) => (0, pm.jsx)(Jm.e, {
        label: fm,
        checked: Tm[mm],
        disabled: 1 === wm.length && wm[0] === mm,
        circleInfoText: hm,
        onClick: Tm => {
          Am(mm, Tm)
        }
      }, mm), im = "shapes" === Tm.style;
      return (0, pm.jsxs)(pm.Fragment, {
        children: [(0, pm.jsx)(Jm.i, {
          label: hm("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: hm("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: hm("crosshairSettings:styleShapes")
          }],
          value: Tm.style,
          onChange: mm => {
            Am("style", mm)
          }
        }), (0, pm.jsx)(bf, {
          label: hm("crosshairSettings:color"),
          value: Tm.color,
          swatches: Jf,
          onChange: mm => {
            Am("color", mm)
          }
        }), am("opacity", hm("crosshairSettings:opacity"), kf), !im && am("size", hm("crosshairSettings:size"), kf), im && (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Dm("lines", hm("crosshairSettings:lines")), Tm.lines && am("lineLength", hm("crosshairSettings:lineLength")), Tm.lines && am("lineThickness", hm("crosshairSettings:lineThickness")), Tm.lines && am("gap", hm("crosshairSettings:gap")), Tm.lines && Dm("tStyle", hm("crosshairSettings:tStyle"))]
        }), im && (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Dm("dot", hm("crosshairSettings:dot")), Tm.dot && am("dotSize", hm("crosshairSettings:dotSize"))]
        }), im && (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Dm("circle", hm("crosshairSettings:circle")), Tm.circle && am("circleRadius", hm("crosshairSettings:circleRadius")), Tm.circle && am("circleThickness", hm("crosshairSettings:circleThickness"))]
        }), (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [am("outline", hm("crosshairSettings:outline"), (mm => mm > 0 ? Zf(mm) : hm("crosshairSettings:off"))), Tm.outline > 0 && (0, pm.jsx)(bf, {
            label: hm("crosshairSettings:outlineColor"),
            value: Tm.outlineColor,
            swatches: zf,
            onChange: mm => {
              Am("outlineColor", mm)
            }
          })]
        }), Dm("growOnClick", hm("crosshairSettings:growOnClick")), im && Dm("forGuns", hm("crosshairSettings:forGuns"), hm("crosshairSettings:forGunsInfo"))]
      })
    }
    var ef = fm(77),
      Nf = fm(1281),
      Gf = fm(12785),
      Xf = fm(13964),
      Pf = fm(15318),
      Hf = fm(15838);
    const yf = ["sky", "grass", "stone", "sand", "snow", "night"],
      Cf = "4rem";

    function rf(mm) {
      return {
        backgroundImage: `url(${mm})`,
        backgroundSize: `${Cf} ${Cf}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function sf(mm) {
      return {
        ...(() => {
          switch (mm) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return rf(Gf);
            case "stone":
              return rf(Xf);
            case "sand":
              return rf(Pf);
            case "snow":
              return rf(Hf);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function lf(mm) {
      return Object.freeze({
        ...Kf.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...mm
      })
    }
    const Mf = [{
        id: "default",
        settings: Kf.h
      }, {
        id: "cross",
        settings: lf({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: lf({
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
        settings: lf({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: lf({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: lf({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: lf({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: lf({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      uf = ["growOnClick", "forGuns"];
    var Bf = fm(34256);

    function Lf(mm) {
      let {
        label: Tm,
        selected: fm,
        onClick: hm,
        className: Am,
        style: xm,
        children: wm
      } = mm;
      return (0, pm.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": fm,
        title: Tm,
        "aria-label": Tm,
        "data-pad-focusable": !0,
        className: am()("CrosshairBackdropSwatch", Am, {
          Selected: fm
        }),
        style: xm,
        onClick: hm,
        children: wm
      })
    }

    function vf(mm) {
      let {
        backdrop: Tm,
        onChange: fm,
        game: hm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)();
      return (0, pm.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Am("crosshairSettings:background"),
        children: [hm && (0, pm.jsx)(Lf, {
          label: Am("crosshairSettings:bg_game"),
          selected: hm.selected,
          onClick: hm.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, pm.jsx)(wm.c, {
            name: "cube"
          })
        }), yf.map((mm => (0, pm.jsx)(Lf, {
          label: Am(`crosshairSettings:bg_${mm}`),
          selected: !(null !== hm && void 0 !== hm && hm.selected) && mm === Tm,
          style: sf(mm),
          onClick: () => {
            fm(mm)
          }
        }, mm)))]
      })
    }

    function tf(mm) {
      let {
        settings: Tm,
        touch: fm,
        backdrop: hm,
        onChange: Am
      } = mm;
      const {
        t: wm
      } = (0, xm.A)(), Dm = function(mm) {
        var Tm;
        return null !== (Tm = Mf.find((Tm => (0, Kf.t)(Tm.settings, mm, uf)))) && void 0 !== Tm ? Tm : null
      }(Tm);
      return (0, pm.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": wm("crosshairSettings:presets"),
        children: Mf.map((mm => {
          const xm = (null === Dm || void 0 === Dm ? void 0 : Dm.id) === mm.id;
          return (0, pm.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": xm,
            "data-pad-focusable": !0,
            className: am()("CrosshairPreset", {
              Selected: xm
            }),
            onClick: () => {
              Am(function(mm, Tm) {
                return {
                  ...Tm.settings,
                  growOnClick: mm.growOnClick,
                  forGuns: mm.forGuns
                }
              }(Tm, mm))
            },
            children: [(0, pm.jsx)("div", {
              className: "CrosshairPresetStage",
              style: sf(hm),
              children: (0, pm.jsx)(Bf.d, {
                settings: mm.settings,
                touch: fm,
                inPreview: !0
              })
            }), (0, pm.jsx)("div", {
              className: "CrosshairPresetName",
              children: wm(`crosshairSettings:preset_${mm.id}`)
            })]
          }, mm.id)
        }))
      })
    }
    var Uf = fm(1672);

    function df(mm, Tm) {
      const [fm, Am] = (0, hm.useState)(!1), am = () => {
        Am(!1)
      }, [xm, wm] = (0, hm.useState)(!1), Dm = (0, hm.useRef)({
        growOnClick: mm.growOnClick,
        forGuns: mm.forGuns
      });
      (0, hm.useEffect)((() => {
        const Tm = Dm.current;
        Dm.current = {
          growOnClick: mm.growOnClick,
          forGuns: mm.forGuns
        }, (mm.growOnClick && !Tm.growOnClick || mm.forGuns && !Tm.forGuns) && wm(!0)
      }), [mm.growOnClick, mm.forGuns]), (0, hm.useEffect)((() => {
        if (!xm) return;
        const mm = setTimeout((() => {
          wm(!1)
        }), 600);
        return () => {
          clearTimeout(mm)
        }
      }), [xm]);
      const im = fm || xm;
      return {
        view: {
          pressed: im,
          spread: im && mm.forGuns && !mm.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: mm => {
            !mm.target.closest(Tm) && (0, Uf.b)(mm.currentTarget, mm.pointerId) && Am(!0)
          },
          onPointerUp: am,
          onPointerCancel: am,
          onLostPointerCapture: am
        }
      }
    }

    function gf(mm) {
      let {
        settings: Tm,
        touch: fm,
        backdrop: hm,
        className: Am,
        children: xm,
        label: wm
      } = mm;
      const Dm = df(Tm, ".CrosshairStageControls");
      return (0, pm.jsxs)("div", {
        className: am()("CrosshairStage", Am),
        style: sf(hm),
        ...Dm.handlers,
        children: [(0, pm.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": wm,
          children: (0, pm.jsx)(Bf.d, {
            settings: Tm,
            touch: fm,
            inPreview: !0,
            ...Dm.view
          })
        }), xm]
      })
    }
    const Wf = "crosshairFullScreen";

    function Ff(mm) {
      let {
        settings: Tm,
        touch: fm,
        backdrop: Am,
        onBackdrop: Dm,
        inGame: Rm,
        onChange: Em,
        onClose: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = (0, hm.useRef)(null);
      (0, Nf.s)("popup", Ym, om),
      function(mm) {
        const Tm = (0, hm.useRef)(mm);
        Tm.current = mm, (0, hm.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Wf]: !0
          }, "");
          let mm = !1;
          const fm = () => {
            mm = !0, Tm.current()
          };
          return window.addEventListener("popstate", fm), () => {
            var Tm;
            window.removeEventListener("popstate", fm), !mm && null !== (Tm = window.history.state) && void 0 !== Tm && Tm[Wf] && window.history.back()
          }
        }), [])
      }(om);
      const qm = (0, hm.useRef)(om);
      qm.current = om, (0, hm.useEffect)((() => {
        function mm(mm) {
          "Escape" === mm.key && (mm.stopPropagation(), qm.current())
        }
        return window.addEventListener("keydown", mm, !0), () => {
          window.removeEventListener("keydown", mm, !0)
        }
      }), []);
      const jm = df(Tm, ".CrosshairFullScreenPanel"),
        [Vm, Im] = (0, hm.useState)(!0),
        Km = Vm && Rm;
      (0, hm.useEffect)((() => {
        if (Km) return cm.c.set({
          crosshairGameView: !0
        }), () => {
          cm.c.set({
            crosshairGameView: !1
          })
        }
      }), [Km]);
      const [Qm, nm] = (0, hm.useState)(!0);
      return (0, ef.createPortal)((0, pm.jsxs)("div", {
        ref: Ym,
        className: "CrosshairFullScreen",
        style: Km ? void 0 : sf(Am),
        ...jm.handlers,
        children: [(0, pm.jsx)(Bf.d, {
          settings: Tm,
          touch: fm,
          inEditor: !0,
          ...jm.view
        }), (0, pm.jsxs)("div", {
          className: am()("CrosshairFullScreenPanel", {
            Collapsed: !Qm
          }),
          children: [(0, pm.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, pm.jsx)(vf, {
              backdrop: Am,
              onChange: mm => {
                Im(!1), Dm(mm)
              },
              game: Rm ? {
                selected: Km,
                onSelect: () => {
                  Im(!0)
                }
              } : void 0
            }), (0, pm.jsx)(im.V, {
              className: "CrosshairPanelToggle",
              ariaLabel: Om(Qm ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                nm(!Qm)
              },
              children: (0, pm.jsx)(wm.c, {
                name: Qm ? "caret-up" : "pen"
              })
            }), (0, pm.jsx)(im.e, {
              className: "CrosshairFullScreenDone",
              onClick: om,
              padDefaultFocus: !0,
              children: Om("crosshairSettings:done")
            })]
          }), Qm && (0, pm.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, pm.jsx)(tf, {
              settings: Tm,
              touch: fm,
              backdrop: Am,
              onChange: Em
            }), (0, pm.jsx)(Sf, {
              settings: Tm,
              onChange: Em
            })]
          })]
        })]
      }), document.body)
    }
    var mh = fm(2670),
      Th = fm(34268);

    function fh(mm) {
      let {
        settings: Tm,
        onChange: fm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)(), Dm = (0, Th.g)(Tm), [Rm, Em] = (0, mh.h)(), [om, Om] = (0, hm.useState)(!1), Ym = (0, hm.useRef)(null), [qm, jm] = (0, mh.h)(), [Vm, Im] = (0, hm.useState)(!1);
      return (0, pm.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, pm.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, pm.jsxs)(im.V, {
            className: am()("CrosshairCopy", {
              ActiveSecondaryButton: Rm
            }),
            onClick: () => {
              (0, mh.d)(Dm, {
                useShareSheet: !1,
                onOutcome: mm => {
                  Om("failed" === mm), "copied" === mm && Em()
                }
              })
            },
            children: [(0, pm.jsx)(wm.c, {
              name: Rm ? "check" : "copy"
            }), " ", Am(Rm ? "general:copied" : "crosshairSettings:copy")]
          }), (0, pm.jsx)(Qm.e, {
            className: "CrosshairPaste",
            domRef: Ym,
            ariaLabel: Am("crosshairSettings:paste"),
            placeholderText: Am("crosshairSettings:paste"),
            onValueChange: mm => {
              const Tm = (0, Th.f)(mm);
              Im(!Tm && mm.trim().length >= Th.e), Tm && (fm(Tm), Ym.current.value = "", jm())
            }
          })]
        }), om && (0, pm.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Dm,
          "aria-label": Am("crosshairSettings:copy"),
          onFocus: mm => {
            mm.currentTarget.select()
          }
        }), (0, pm.jsxs)("div", {
          "aria-live": "polite",
          children: [Vm && (0, pm.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Am("crosshairSettings:pasteInvalid")
          }), qm && !Vm && (0, pm.jsx)("div", {
            className: "CrosshairShareNote",
            children: Am("crosshairSettings:applied")
          })]
        })]
      })
    }
    var hh = fm(34273);
    let Ah = "sky";

    function ah(mm) {
      let {
        showing: Tm
      } = mm;
      const {
        t: fm
      } = (0, xm.A)(), {
        isTouchScreen: Am,
        gameState: am,
        clientEscMenuOptions: Dm
      } = (0, cm.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Rm = (0, hh.g)(), [Em, om] = (0, hm.useState)(Ah), Om = mm => {
        Ah = mm, om(mm)
      }, [Ym, qm] = (0, hm.useState)(!1);
      return (0, hm.useEffect)((() => {
        Tm || qm(!1)
      }), [Tm]), (0, pm.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, pm.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, pm.jsx)(gf, {
            className: "CrosshairPreviewStage",
            settings: Rm,
            touch: Am,
            backdrop: Em,
            label: fm("crosshairSettings:preview"),
            children: (0, pm.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, pm.jsx)(vf, {
                backdrop: Em,
                onChange: Om
              }), (0, pm.jsxs)(im.V, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  qm(!0)
                },
                children: [(0, pm.jsx)(wm.c, {
                  name: "expand"
                }), " ", fm("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, pm.jsx)("div", {
          className: "SettingBox",
          children: (0, pm.jsx)(tf, {
            settings: Rm,
            touch: Am,
            backdrop: Em,
            onChange: hh.e
          })
        }), (0, pm.jsx)(fh, {
          settings: Rm,
          onChange: hh.e
        }), Am && (0, pm.jsx)(If.c, {
          note: (0, Vf.i)(Am, Dm.touchActionButtons) ? fm("crosshairSettings:touchNote") : void 0
        }), (0, pm.jsx)(Sf, {
          settings: Rm,
          onChange: hh.e
        }), Ym && (0, pm.jsx)(Ff, {
          settings: Rm,
          touch: Am,
          backdrop: Em,
          onBackdrop: Om,
          inGame: "inGame" === am,
          onChange: hh.e,
          onClose: () => {
            qm(!1)
          }
        })]
      })
    }
    var xh = fm(8814),
      wh = fm(1397),
      Dh = fm(4946),
      ih = fm(34280),
      Rh = fm(4210),
      ph = fm(1950),
      Eh = fm(761);
    const oh = (0, hm.memo)((function() {
      const {
        clientEscMenuOptions: mm
      } = (0, cm.m)(["clientEscMenuOptions"]), {
        recording: Tm,
        clipping: fm,
        hasClipBuffer: Am
      } = (0, bT.k)("replayRecorder"), xm = (0, bT.g)("connectedGame", (mm => mm.replay)), wm = (0, Rh.j)(), Dm = !1 === (0, Ym.g)("canRecordReplays");
      (0, hm.useEffect)((() => {
        Vm.gameBridge.send("setRecorderPrefs", {
          clipping: mm.enableClipping,
          clipSeconds: mm.clipDurationSeconds
        })
      }), [mm.enableClipping, mm.clipDurationSeconds]);
      const Rm = wm || xm,
        Em = !Rm && !Dm,
        om = Tm || Em,
        Om = Em,
        qm = Om && fm && !Tm;

      function jm() {
        om && Vm.gameBridge.send("toggleRecording", null)
      }
      return (0, pm.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, pm.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pm.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Tm ? (0, pm.jsxs)(pm.Fragment, {
              children: [(0, pm.jsxs)(im.O, {
                className: "ReplayViewerCategoryButton",
                onClick: jm,
                disabled: !om,
                children: [(0, pm.jsx)("span", {
                  children: "Stop Recording"
                }), (0, pm.jsx)(ph.e, {
                  noaAction: "recordGame"
                })]
              }), (0, pm.jsx)(ih.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, pm.jsxs)(im.e, {
              className: "ReplayViewerCategoryButton",
              onClick: jm,
              disabled: !om,
              children: [(0, pm.jsx)("span", {
                children: "Start Recording"
              }), (0, pm.jsx)(ph.e, {
                noaAction: "recordGame"
              })]
            })
          }), Dm && (0, pm.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Rm && !Tm && (0, pm.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, pm.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pm.jsx)(Jm.e, {
            label: "Enable clipping",
            checked: mm.enableClipping,
            disabled: !Om,
            onClick: function(mm) {
              Om && cm.c.setClientEscMenuOptions({
                enableClipping: mm
              })
            },
            className: am()({
              SettingBoxDisabled: !Om
            })
          }), (0, pm.jsx)(Jm.m, {
            name: "Clip duration (seconds)",
            min: Eh.k,
            max: Eh.h,
            step: Eh.c,
            initValue: mm.clipDurationSeconds,
            onChange: function(mm) {
              cm.c.setClientEscMenuOptions({
                clipDurationSeconds: mm
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Om || !mm.enableClipping
          })]
        }), (0, pm.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pm.jsxs)(im.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              qm && Vm.gameBridge.send("saveClip", null)
            },
            disabled: !qm,
            children: [(0, pm.jsx)("span", {
              children: "Record clip"
            }), (0, pm.jsx)(ph.e, {
              noaAction: "recordClip"
            })]
          }), mm.enableClipping && !Am && Om && !Tm && (0, pm.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Tm && (0, pm.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, pm.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pm.jsxs)(im.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Rh.f)(!0), cm.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: wm,
            children: [(0, pm.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, pm.jsx)(ph.e, {
              noaAction: "replayViewerOpen"
            })]
          }), wm && (0, pm.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, pm.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pm.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, pm.jsx)("iframe", {
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
    var Oh = fm(1877);
    const Yh = {
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
        icon: () => (0, pm.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, pm.jsx)("path", {
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
      KO: {
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

    function qh() {
      return Promise.all([fm.e(77), fm.e(133), fm.e(132), fm.e(129)]).then((() => fm(41131))).then((mm => ({
        default: mm.ShaderPackCategory
      })), (mm => (console.error("Failed to load the shader pack settings", mm), {
        default: jh
      })))
    }

    function jh() {
      const {
        t: mm
      } = (0, xm.A)();
      return (0, pm.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: mm("shaderPack:tabLoadFailed")
      })
    }
    var Vh = fm(1389);
    const Ih = (0, hm.lazy)((() => fm.e(273).then((() => fm(41122))).then((mm => ({
        default: mm.BloxdInformation
      }))))),
      Kh = (0, hm.lazy)(qh);

    function Qh(mm) {
      return mm ? "general" : "account"
    }
    const nh = new Map,
      Jh = (0, hm.memo)((function(mm) {
        let {
          show: Tm,
          setBeforeResumeCallback: fm
        } = mm;
        (0, qm.c)();
        const {
          gameState: Am,
          openSettingsCategory: am
        } = (0, cm.m)(["gameState", "openSettingsCategory"]), {
          userContext: Dm
        } = (0, Om.e)(), {
          t: Rm
        } = (0, xm.A)(), Qm = (0, om.c)(), nm = (0, Ym.g)("minChunkAddDist"), Jm = "inGame" === Am, [zm, bm] = (0, hm.useState)(Qh(Jm)), [Sm, em] = (0, hm.useState)(null), [Nm, Gm] = (0, hm.useState)([]), Xm = (0, hm.useRef)(function() {
          const mm = new Date,
            Tm = 6 * (mm.getMonth() + mm.getDate()) % pT.s.length;
          return [...pT.s, ...pT.s].slice(Tm, Tm + 6)
        }()), Pm = (0, hm.useRef)(null), Hm = (0, yT.i)(wh.h, (0, wh.c)()), ym = Object.keys(Yh).filter((mm => {
          switch (mm) {
            case "replayViewer":
              return Jm;
            case "developerTools":
              return Dm.playerHasRank("developer") || !1;
            case "texturePack":
              return jm.featureFlags.settings.canChangeTexturePack;
            case "KO":
              return jm.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return jm.featureFlags.useSocialFeatures || null !== Dm.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== km.q;
            case "controller":
              return jm.featureFlags.useControllerSupport && (Hm || "controller" === zm);
            default:
              return !0
          }
        }));
        (0, yT.g)("toggleFullCoordinateOverlay", (() => {
          const mm = Df("showCoordinates") && Df("showChunkCoordinates") && Df("showFPS");
          Rf("showCoordinates", !mm), Rf("showChunkCoordinates", !mm), Rf("showFPS", !mm), Qm()
        })), (0, yT.g)("updatedChunkLoadDist", (() => {
          Qm()
        })), (0, hm.useEffect)((() => {
          if (em(null), null === cm.c.get("openSettingsCategory")) {
            const mm = (0, Vh.h)() ? nh.get(Jm) : void 0;
            bm(mm && ym.includes(mm) ? mm : Qh(Jm))
          }
        }), [Tm]), (0, hm.useEffect)((() => {
          null !== am && (bm(am), nh.set(Jm, am), cm.c.set({
            openSettingsCategory: null
          }))
        }), [am, Jm]), (0, hm.useLayoutEffect)((() => {
          Pm.current && (Pm.current.scrollTop = 0)
        }), [zm, Tm]), (0, hm.useEffect)((() => {
          "updateLog" === zm && (0, Km.e)().then(Gm)
        }), [zm]), (0, hm.useEffect)((() => {
          if ((0, Tf.H)(nm)) return;
          const [mm, Tm] = (0, qf.e)(), [fm, hm] = (0, UT.f)(nm), Am = (0, Oh.e)(nm[0], mm, fm), am = (0, Oh.e)(nm[1], Tm, hm);
          Vm.gameBridge.send("setChunkAddDistance", {
            horizontal: Am,
            vertical: am
          })
        }), [nm]);
        const Cm = (0, hm.useCallback)((async () => {
          Sm && (await Sm(), em(null))
        }), [Sm]);

        function rm() {
          cm.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, hm.useEffect)((() => {
          fm((() => Cm))
        }), [Cm, fm]), (0, pm.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Tm ? {} : {
            display: "none"
          },
          children: [(0, pm.jsx)("div", {
            className: "MenuSideBar",
            children: (0, pm.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, pm.jsx)(Em, {
                items: ym.map((mm => {
                  const Tm = Yh[mm].icon;
                  return {
                    id: mm,
                    faIcon: "string" === typeof Tm ? Tm : void 0,
                    iconElement: "string" === typeof Tm ? void 0 : (0, pm.jsx)(Tm, {}),
                    title: Rm(Yh[mm].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: zm,
                onClick: mm => {
                  !async function(mm) {
                    await Cm(), bm(mm), nh.set(Jm, mm)
                  }(mm)
                }
              })
            })
          }), (0, pm.jsxs)("div", {
            ref: Pm,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === zm && (0, pm.jsx)(nT, {
              showing: Tm,
              inGame: Jm
            }), "general" === zm && (0, pm.jsx)(XT, {
              inGame: Jm
            }), "audio" === zm && (0, pm.jsx)(PT, {}), "notifications" === zm && (0, pm.jsx)(tT, {}), "graphics" === zm && (0, pm.jsx)(Yf, {
              minChunkAddDist: null !== nm && void 0 !== nm ? nm : [2, 2],
              getValue: Df,
              onChange: Rf,
              setApplySettingsCallback: em
            }), "controls" === zm && (0, pm.jsx)(jf.c, {}), "crosshair" === zm && (0, pm.jsx)(ah, {
              showing: Tm
            }), "controller" === zm && jm.featureFlags.useControllerSupport && (0, pm.jsx)(xh.c, {}), jm.featureFlags.settings.canChangeTexturePack && "texturePack" === zm && (0, pm.jsx)(Dh.e, {
              setApplySettingsCallback: em
            }), jm.featureFlags.settings.canUseShaderPacks && "KO" === zm && (0, pm.jsx)(hm.Suspense, {
              fallback: null,
              children: (0, pm.jsx)(Kh, {
                setApplySettingsCallback: em
              })
            }), "updateLog" === zm && (0, pm.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pm.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Nm.map(((mm, Tm) => (0, pm.jsx)(Im.d, {
                  updateLog: mm,
                  index: Tm,
                  close: rm
                }, Tm)))
              })
            }), "information" === zm && (0, pm.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pm.jsx)(hm.Suspense, {
                fallback: null,
                children: (0, pm.jsx)(Ih, {})
              })
            }), "alternativeDomains" === zm && (0, pm.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, pm.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Rm("settingsMenu:unblockedDomainsDescription")
              }), (0, pm.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Xm.current.map((mm => (0, pm.jsxs)(im.e, {
                  onClick: () => {
                    window.open(`https://${mm}`)
                  },
                  children: [(0, pm.jsx)(wm.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", mm]
                }, mm)))
              })]
            }), "replayViewer" === zm && (0, pm.jsx)(oh, {}), "developerTools" === zm && (0, pm.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pm.jsx)(Zm, {
                setApplySettingsCallback: em
              })
            }), null !== Sm && (0, pm.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, pm.jsx)(im.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: Cm,
                children: Rm("general:apply")
              })
            })]
          })]
        })
      }));
    var ch = fm(2616);
    const zh = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Zh = (0, hm.lazy)((() => Promise.resolve().then((() => fm(4595))).then((mm => {
        mm.needGameClientAfterPaint();
        const Tm = mm.matchmakingLibrariesPromise.then((mm => (0, ch.c)(mm.loadCharacterCustomisationUI(), (mm => mm.CharacterCustomisationUI))));
        return Promise.all([mm.ensureGameSetup(), Tm]).then((mm => {
          let [, Tm] = mm;
          return Tm
        }))
      })))),
      kh = "openCustomisationTab";

    function bh(mm) {
      var Tm, fm, Am;
      let {
        show: am
      } = mm;
      const {
        userContext: xm
      } = (0, Om.e)(), wm = (0, hm.useRef)(null);
      var Dm, im;
      xm !== bm.NULL_USER_CONTEXT && (null === (Tm = wm.current) || void 0 === Tm ? void 0 : Tm.whamm) !== xm.whamm && (wm.current = {
        whamm: xm.whamm,
        mountKey: (null !== (Dm = null === (im = wm.current) || void 0 === im ? void 0 : im.mountKey) && void 0 !== Dm ? Dm : -1) + 1
      });
      const [Rm, om] = (0, hm.useState)("characters");
      if ((0, yT.g)(kh, om), !am) return null;
      const Ym = zh.filter((mm => "cape" !== mm && "nameColour" !== mm || xm.getPlayerRanks().includes("super") || (0, sm.purchasesAllowed)())).map((mm => ({
        id: mm,
        faIcon: pT.z[mm],
        title: pT.B[mm],
        redDot: !1
      })));
      return (0, pm.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, pm.jsx)("div", {
          className: "MenuSideBar",
          children: (0, pm.jsx)(Em, {
            items: Ym,
            selectedItemId: Rm,
            onClick: mm => {
              om(mm)
            }
          })
        }), (0, pm.jsx)("div", {
          className: "MenuBody",
          children: (0, pm.jsx)(hm.Suspense, {
            fallback: (0, pm.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, pm.jsx)(nm.c, {})
            }),
            children: (0, pm.jsx)(Zh, {
              selectedTab: Rm
            }, null !== (fm = null === (Am = wm.current) || void 0 === Am ? void 0 : Am.mountKey) && void 0 !== fm ? fm : 0)
          })
        })]
      })
    }
    var Sh = fm(1469),
      eh = fm(1473),
      Nh = fm(34283),
      Gh = fm(4471),
      Xh = fm(3423),
      Ph = fm(3469),
      Hh = fm(34315),
      yh = fm(8709),
      Ch = fm(34291),
      rh = fm(34301),
      sh = fm(1893),
      lh = fm(1884),
      Mh = fm(4848),
      uh = fm(1268),
      Bh = fm(1235),
      Lh = fm(1668),
      vh = fm(8788),
      th = fm(2406),
      Uh = fm(2409);

    function dh(mm) {
      return mm ? Object.keys(mm).sort(((Tm, fm) => {
        var hm, Am, am, xm;
        const wm = (null !== (hm = null === (Am = mm[fm]) || void 0 === Am ? void 0 : Am.sortPriority) && void 0 !== hm ? hm : 0) - (null !== (am = null === (xm = mm[Tm]) || void 0 === xm ? void 0 : xm.sortPriority) && void 0 !== am ? am : 0);
        return 0 !== wm ? wm : Tm.localeCompare(fm)
      })) : []
    }
    const gh = [{
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

    function Wh(mm) {
      for (const {
          threshold: Tm,
          suffix: fm
        }
        of gh)
        if (mm >= Tm) {
          const hm = mm / Tm;
          return hm >= 100 ? `${Math.floor(hm)}${fm}` : hm >= 10 ? `${hm.toFixed(1).replace(/\.0$/,"")}${fm}` : `${hm.toFixed(2).replace(/\.?0+$/,"")}${fm}`
        } return String(mm)
    }
    var Fh = fm(4970);
    const mA = {
        normal: "0.8em",
        big: "1em"
      },
      TA = (0, hm.memo)((function(mm) {
        let {
          item: Tm,
          amount: fm = 0,
          size: hm = "normal",
          tier: Am = null
        } = mm;
        return (0, pm.jsx)("div", {
          className: am()("SmpSlot", `SmpSlot-${hm}`),
          children: Tm && (0, pm.jsx)(sh.d, {
            itemName: Tm,
            amount: fm > 1 ? fm : 0,
            amountFontSize: mA[hm],
            enchantmentTier: Am
          })
        })
      }));

    function fA(mm) {
      let {
        amount: Tm,
        exact: fm = !1,
        className: hm
      } = mm;
      return (0, pm.jsxs)("span", {
        className: am()("SmpGold", hm),
        children: [(0, pm.jsx)("span", {
          className: "SmpCoin",
          children: (0, pm.jsx)(sh.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), fm ? Tm.toLocaleString("en-US") : Wh(Tm)]
      })
    }

    function hA(mm) {
      let {
        count: Tm = 5,
        grid: fm = !1
      } = mm;
      return (0, pm.jsx)("div", {
        className: fm ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Tm
        }, ((mm, Tm) => (0, pm.jsxs)("div", {
          className: am()(fm ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, pm.jsx)("div", {
            className: am()("SmpSlot", fm ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, pm.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, pm.jsx)("b", {}), (0, pm.jsx)("small", {})]
          }), (0, pm.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Tm)))
      })
    }

    function AA(mm) {
      let {
        title: Tm,
        children: fm
      } = mm;
      return (0, pm.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, pm.jsx)("b", {
          children: Tm
        }), fm && (0, pm.jsx)("small", {
          children: fm
        })]
      })
    }

    function aA(mm) {
      let {
        entry: Tm
      } = mm;
      return (0, pm.jsx)(AA, {
        title: (0, pm.jsx)(lh.b, {
          text: Tm.item.customTitle
        }),
        children: (0, pm.jsx)(lh.b, {
          text: Tm.item.description
        })
      })
    }

    function xA(mm) {
      return (0, pm.jsx)(Fh.b, {
        ...mm,
        className: am()("SmpChoice", mm.className),
        reselectable: !0
      })
    }

    function wA() {
      return (0, pm.jsx)("span", {
        className: "SmpLoader",
        children: (0, pm.jsx)(nm.c, {})
      })
    }

    function DA(mm) {
      let {
        value: Tm,
        onChange: fm,
        min: Am = 1,
        max: am,
        step: xm = 1,
        label: wm
      } = mm;
      const Dm = (0, hm.useRef)(null),
        im = (0, hm.useRef)(Tm);
      im.current = Tm;
      const [Rm, Em] = (0, hm.useState)(null), om = mm => Math.max(Am, Math.min(am, Math.floor(mm))), Om = mm => {
        const Tm = im.current,
          hm = "function" === typeof xm ? xm(Tm, mm) : xm,
          Am = om(Tm + hm * mm);
        im.current = Am, fm(Am)
      };
      (0, hm.useEffect)((() => {
        if (null === Rm) return;
        let mm;
        const Tm = () => {
            Em(null)
          },
          fm = setTimeout((() => {
            mm = setInterval((() => {
              Om(Rm);
              const mm = im.current;
              (Rm > 0 ? mm >= am : mm <= Am) && Tm()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Tm), window.addEventListener("pointercancel", Tm), window.addEventListener("blur", Tm), () => {
          clearTimeout(fm), clearInterval(mm), window.removeEventListener("pointerup", Tm), window.removeEventListener("pointercancel", Tm), window.removeEventListener("blur", Tm)
        }
      }), [Rm]), (0, hm.useEffect)((() => {
        const mm = Dm.current;
        mm && document.activeElement !== mm && mm.value !== String(Tm) && (mm.value = String(Tm))
      }), [Tm]), (0, hm.useEffect)((() => {
        const mm = Dm.current;
        if (!mm) return;
        const Tm = () => {
          mm.value = String(im.current)
        };
        return mm.addEventListener("blur", Tm), () => {
          mm.removeEventListener("blur", Tm)
        }
      }), []);
      const Ym = mm => (0, pm.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${mm>0?"More":"Less"} ${wm}`,
        disabled: mm > 0 ? Tm >= am : Tm <= Am,
        onPointerDown: Tm => {
          0 === Tm.button && (Om(mm), Em(mm))
        },
        onKeyDown: Tm => {
          "Enter" !== Tm.key && " " !== Tm.key || Om(mm)
        },
        onContextMenu: mm => {
          mm.preventDefault()
        },
        children: mm > 0 ? "+" : "\u2212"
      });
      return (0, pm.jsxs)("div", {
        className: "SmpStepper",
        children: [Ym(-1), (0, pm.jsx)(Qm.e, {
          className: "SmpStepperInput",
          domRef: Dm,
          defaultValue: String(Tm),
          ariaLabel: wm,
          type: "text",
          blurOnEnter: !0,
          onValueChange: mm => {
            const Tm = mm.replace(/[^\d]/g, "");
            Dm.current && Tm !== mm && (Dm.current.value = Tm), "" !== Tm && fm(om(Number(Tm)))
          }
        }), Ym(1)]
      })
    }

    function iA(mm) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, mm))) - 1))
    }
    var RA = fm(34308),
      pA = fm(1247);
    const EA = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    pA.s, Cm.Bc.length;
    new Map;
    var oA = fm(3301);

    function OA(mm, Tm) {
      var fm;
      return Tm && (null === (fm = mm[Tm]) || void 0 === fm ? void 0 : fm.smp) || null
    }

    function YA(mm, Tm) {
      const fm = [];
      for (const Am of dh(mm)) {
        var hm;
        const am = mm[Am];
        (null === (hm = am.smp) || void 0 === hm ? void 0 : hm.kind) === Tm && fm.push({
          key: Am,
          item: am,
          meta: am.smp
        })
      }
      return fm
    }

    function qA(mm, Tm) {
      var fm;
      return null !== (fm = YA(mm, Tm)[0]) && void 0 !== fm ? fm : null
    }
    const jA = "50% 0% 50% 0%",
      VA = [{
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

    function IA(mm) {
      const Tm = mm - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: fm,
          suffix: hm
        }
        of VA)
        if (Tm >= fm) return `${Math.floor(Tm/fm)}${hm}`;
      return "<1s"
    }

    function KA(mm) {
      const Tm = mm.map(yh.g),
        fm = [];
      return Tm.forEach(((mm, hm) => {
        const Am = function(mm) {
            const Tm = mm.match(/\d+/);
            return Tm ? Number(Tm[0]) : 0
          }(mm),
          am = hm === Tm.length - 1;
        (am || 1 === Am || 10 === Am || 100 === Am) && fm.push({
          label: mm,
          quantity: Am,
          isAll: am
        })
      })), fm
    }
    let QA = null;

    function nA(mm, Tm) {
      const fm = Tm.trim().toLowerCase();
      if (!fm) return [];
      const hm = mm => {
          if (mm === fm) return 0;
          if (mm.startsWith(fm)) return 1;
          const Tm = mm.indexOf(fm);
          return -1 === Tm ? -1 : 2 + Tm
        },
        Am = [];
      for (const wm of mm) {
        const mm = [hm(wm.lowerLabel), hm(wm.lowerName)].filter((mm => -1 !== mm));
        mm.length && Am.push({
          item: wm,
          rank: Math.min(...mm)
        })
      }
      if (Am.length > 0) return Am.sort(((mm, Tm) => mm.rank - Tm.rank)).map((mm => mm.item));
      const am = [...fm],
        xm = mm => {
          let Tm = 0;
          for (const fm of am) {
            if (Tm = mm.indexOf(fm, Tm), -1 === Tm) return !1;
            Tm++
          }
          return !0
        };
      return mm.filter((mm => xm(mm.lowerLabel) || xm(mm.lowerName)))
    }

    function JA(mm, Tm) {
      var fm;
      return null !== (fm = null === mm || void 0 === mm ? void 0 : mm[Tm]) && void 0 !== fm ? fm : Tm
    }

    function cA(mm, Tm) {
      const fm = mm.userInput;
      return void 0 !== Tm && "dropdown" === (null === fm || void 0 === fm ? void 0 : fm.type) && fm.dropdownOptions.map(yh.g).includes(Tm) ? Tm : function(mm) {
        const Tm = mm.userInput;
        if ("dropdown" !== (null === Tm || void 0 === Tm ? void 0 : Tm.type) || 0 === Tm.dropdownOptions.length) return null;
        const fm = Tm.dropdownOptions.map(yh.g);
        return Tm.initialValue && fm.includes(Tm.initialValue) ? Tm.initialValue : fm[fm.length - 1]
      }(mm)
    }

    function zA(mm) {
      return void 0 === mm ? "" : JSON.stringify(mm)
    }
    const ZA = (0, hm.createContext)(null);

    function kA() {
      return (0, hm.useContext)(ZA)
    }
    var bA = fm(2699);
    const SA = (0, hm.memo)((function(mm) {
        let {
          name: Tm,
          label: fm,
          onPick: hm
        } = mm;
        return (0, pm.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: fm,
          onClick: () => {
            hm(Tm)
          },
          children: [(0, pm.jsx)(TA, {
            item: Tm,
            size: "big"
          }), (0, pm.jsx)("span", {
            children: fm
          })]
        })
      })),
      eA = (0, hm.memo)((function(mm) {
        let {
          items: Tm,
          query: fm,
          onPick: Am
        } = mm;
        const {
          t: am
        } = (0, xm.A)(), [wm, Dm] = (0, hm.useState)(new Set), im = (0, hm.useMemo)((() => function(mm) {
          const Tm = new Map;
          for (const fm of mm) {
            let mm = Tm.get(fm.category);
            mm || (mm = [], Tm.set(fm.category, mm)), mm.push(fm)
          }
          return [...EA, "other"].filter((mm => Tm.has(mm))).map((mm => ({
            category: mm,
            items: Tm.get(mm)
          })))
        }(Tm)), [Tm]), Rm = (0, hm.useMemo)((() => nA(Tm, fm).slice(0, 60)), [Tm, fm]);
        return fm.trim() ? 0 === Rm.length ? (0, pm.jsx)(AA, {
          title: am("smpShop:noItemsFound", {
            query: fm.trim()
          }),
          children: am("smpShop:tryShorterName")
        }) : (0, pm.jsx)(bA.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: jA,
          observerUpdateDeps: [fm],
          children: Rm.map((mm => (0, pm.jsx)(SA, {
            name: mm.name,
            label: mm.label,
            onPick: Am
          }, mm.name)))
        }) : (0, pm.jsx)(pm.Fragment, {
          children: im.map((mm => {
            let {
              category: Tm,
              items: fm
            } = mm;
            const hm = wm.has(Tm) || fm.length <= 48,
              xm = hm ? fm : fm.slice(0, 48);
            return (0, pm.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, pm.jsxs)("h4", {
                children: [am("other" === Tm ? "smpShop:otherItems" : `creativeInventory:${Tm}`), !hm && (0, pm.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Dm(new Set([...wm, Tm]))
                  },
                  children: am("smpShop:showAll", {
                    count: fm.length
                  })
                })]
              }), (0, pm.jsx)(bA.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: jA,
                observerUpdateDeps: [hm],
                children: xm.map((mm => (0, pm.jsx)(SA, {
                  name: mm.name,
                  label: mm.label,
                  onPick: Am
                }, mm.name)))
              })]
            }, Tm)
          }))
        })
      }));

    function NA(mm, Tm) {
      const {
        searched: fm,
        shown: Am,
        searchFor: am,
        loading: xm
      } = function(mm, Tm) {
        var fm;
        const Am = kA(),
          [am, xm] = (0, hm.useState)(void 0),
          wm = (0, hm.useRef)(void 0),
          Dm = (0, hm.useRef)(0),
          im = (0, hm.useRef)(void 0),
          Rm = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.meta.item) && void 0 !== fm ? fm : null,
          pm = !!mm && Am.isPending(mm.key);
        (0, hm.useEffect)((() => {
          if (!mm || pm || !Tm || void 0 === am || am === Rm) return;
          const fm = am === wm.current && Am.gaveUpAt(mm.key) > Dm.current && im.current !== am;
          (am !== wm.current || fm) && Am.act(mm.key, null !== am && void 0 !== am ? am : "*", fm) && (fm && (im.current = am), wm.current = am, Dm.current = Date.now())
        }), [mm, pm, Tm, am, Rm, Am]);
        const Em = (0, hm.useCallback)((mm => {
            wm.current = void 0, im.current = void 0, xm(mm)
          }), []),
          om = void 0 !== am && am !== Rm && (pm || wm.current !== am);
        return {
          searched: Rm,
          shown: om ? am : Rm,
          searchFor: Em,
          loading: om || pm || null !== Rm && !Tm
        }
      }(mm, Tm), wm = (0, hm.useMemo)((() => function() {
        var mm;
        let Tm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Am = `${(0,oA.g)()}\x1f${Tm.join("\x1e")}\x1f${fm.join("\x1e")}\x1f${JSON.stringify(hm)}`;
        if ((null === (mm = QA) || void 0 === mm ? void 0 : mm.key) === Am) return QA.items;
        const am = new Set(fm),
          xm = new Set,
          wm = [],
          Dm = (mm, Tm) => {
            var fm;
            if (!mm || xm.has(mm) || am.has(mm)) return;
            xm.add(mm);
            const Am = null !== (fm = hm[mm]) && void 0 !== fm ? fm : mm;
            wm.push({
              name: mm,
              label: Am,
              lowerLabel: Am.toLowerCase(),
              lowerName: mm.toLowerCase(),
              category: Tm
            })
          };
        for (const Rm of (0, RA.creativeItemIds)()) {
          var im;
          (0, RA.itemIsDisabled)(Rm, !0, !0, !1) || (0, RA.showOnlyInCreativeSearch)(Rm) || Dm((0, oA.e)(Rm), null !== (im = (0, RA.creativeCategoryOf)(Rm)) && void 0 !== im ? im : "other")
        }
        for (const Rm of Tm) Dm(Rm, "other");
        return QA = {
          key: Am,
          items: wm
        }, wm
      }(null === mm || void 0 === mm ? void 0 : mm.meta.extra, null === mm || void 0 === mm ? void 0 : mm.meta.excluded, null === mm || void 0 === mm ? void 0 : mm.meta.names)), [null === mm || void 0 === mm ? void 0 : mm.meta.extra, null === mm || void 0 === mm ? void 0 : mm.meta.excluded, null === mm || void 0 === mm ? void 0 : mm.meta.names]), [Dm, im] = (0, hm.useState)(""), [Rm, pm] = (0, hm.useState)(0), [Em, om] = (0, hm.useState)("recent"), Om = (0, hm.useCallback)((mm => {
        im(""), pm((mm => mm + 1)), am(mm)
      }), [am]), Ym = "browse" === Em || "" !== Dm.trim();
      return {
        searched: fm,
        shown: Am,
        searchFor: am,
        loading: xm,
        catalogue: wm,
        names: null === mm || void 0 === mm ? void 0 : mm.meta.names,
        query: Dm,
        setQuery: im,
        searchBoxKey: Rm,
        pickItem: Om,
        setView: om,
        browsing: Ym
      }
    }

    function GA(mm) {
      let {
        browser: Tm,
        children: fm
      } = mm;
      const {
        t: hm
      } = (0, xm.A)(), Am = kA();
      return (0, pm.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, pm.jsx)("div", {
          className: "SmpSearch",
          children: (0, pm.jsx)(Qm.e, {
            className: "SmpSearchInput",
            placeholderText: hm("smpShop:searchPlaceholder"),
            defaultValue: Tm.query,
            onValueChange: mm => {
              Tm.setQuery(mm), Tm.searched && mm.trim() && Tm.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const mm = nA(Tm.catalogue, Tm.query)[0];
              mm ? Tm.pickItem(mm.name) : Tm.query.trim() && Am.notify(hm("smpShop:noItemsFound", {
                query: Tm.query.trim()
              }))
            }
          }, Tm.searchBoxKey)
        }), fm]
      })
    }

    function XA(mm) {
      let {
        browser: Tm,
        recentLabel: fm,
        children: hm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)();
      return (0, pm.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, pm.jsx)(xA, {
          options: [{
            value: "recent",
            label: fm
          }, {
            value: "browse",
            label: Am("smpShop:browseItems")
          }],
          value: Tm.browsing ? "browse" : "recent",
          onChange: Tm.setView,
          ariaLabel: Am("smpShop:show")
        }), !Tm.browsing && hm]
      })
    }

    function PA(mm) {
      let {
        item: Tm,
        names: fm,
        summary: hm,
        onBack: Am,
        children: am
      } = mm;
      const {
        t: wm
      } = (0, xm.A)();
      return (0, pm.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, pm.jsx)(im.d, {
          className: "SmpBackButton",
          onClick: Am,
          children: wm("general:back")
        }), (0, pm.jsx)(TA, {
          item: Tm,
          size: "big"
        }), (0, pm.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, pm.jsx)("b", {
            children: JA(fm, Tm)
          }), hm && (0, pm.jsx)("small", {
            children: hm
          })]
        }), am]
      })
    }

    function HA(mm) {
      let {
        browser: Tm,
        className: fm,
        action: hm,
        above: Am,
        list: xm,
        summary: wm,
        recentLabel: Dm,
        listControls: im,
        onBack: Rm
      } = mm;
      return (0, pm.jsxs)("div", {
        className: am()("SmpScreen", fm),
        children: [(0, pm.jsx)(GA, {
          browser: Tm,
          children: hm
        }), Tm.shown && (0, pm.jsx)(PA, {
          item: Tm.shown,
          names: Tm.names,
          summary: !Tm.loading && wm,
          onBack: () => {
            null === Rm || void 0 === Rm || Rm(), Tm.searchFor(null)
          },
          children: im
        }), Am, Tm.shown ? xm : (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsx)(XA, {
            browser: Tm,
            recentLabel: Dm,
            children: im
          }), Tm.browsing ? (0, pm.jsx)(eA, {
            items: Tm.catalogue,
            query: Tm.query,
            onPick: Tm.pickItem
          }) : xm]
        })]
      })
    }

    function yA(mm, Tm) {
      const fm = mm.map((mm => {
        let {
          meta: Tm
        } = mm;
        return Tm.pricePerItem
      }));
      return "min" === Tm ? Math.min(...fm) : Math.max(...fm)
    }
    var CA = fm(6529);
    const rA = (0, hm.memo)((function(mm) {
      var Tm;
      const {
        t: fm
      } = (0, xm.A)(), hm = null === mm.seller, Am = mm.quantity * mm.pricePerItem;
      return (0, pm.jsxs)("div", {
        className: mm.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, pm.jsx)(TA, {
          item: mm.item,
          amount: mm.quantity,
          size: mm.grid ? "big" : "normal",
          tier: mm.tier
        }), (0, pm.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pm.jsx)("b", {
            children: (0, pm.jsx)(lh.b, {
              text: null !== (Tm = mm.title) && void 0 !== Tm ? Tm : `${mm.quantity}x ${mm.item}`
            })
          }), (0, pm.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, pm.jsx)("span", {
              children: hm ? fm("smpShop:you") : (0, pm.jsx)(lh.b, {
                text: [{
                  entityName: mm.seller
                }]
              })
            }), (0, pm.jsx)("span", {
              children: fm("smpShop:timeLeft", {
                time: IA(mm.expiresAt)
              })
            })]
          })]
        }), (0, pm.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, pm.jsx)(fA, {
            amount: mm.pricePerItem
          }), (0, pm.jsx)("small", {
            children: fm("smpShop:each")
          })]
        }), (0, pm.jsx)(im.e, {
          className: "SmpBuyButton",
          disabled: hm || !mm.canAfford && !mm.busy,
          loading: mm.busy,
          onClick: () => {
            mm.onBuy(mm.itemKey)
          },
          children: hm ? fm("smpShop:yours") : (0, pm.jsx)(fA, {
            amount: Am
          })
        })]
      })
    }));

    function sA(mm) {
      let {
        view: Tm,
        onChange: fm
      } = mm;
      const {
        t: hm
      } = (0, xm.A)();
      return (0, pm.jsx)(Fh.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: hm("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, pm.jsx)(wm.c, {
            name: "list"
          }),
          ariaLabel: hm("smpShop:listView")
        }, {
          value: "grid",
          label: (0, pm.jsx)(wm.c, {
            name: "grid-2"
          }),
          ariaLabel: hm("smpShop:gridView")
        }],
        value: Tm,
        onChange: fm
      })
    }

    function lA(mm) {
      let {
        entries: Tm,
        view: fm
      } = mm;
      const {
        t: hm
      } = (0, xm.A)(), Am = kA(), am = "grid" === fm;
      return (0, pm.jsxs)(pm.Fragment, {
        children: [!am && (0, pm.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, pm.jsx)("span", {}), (0, pm.jsx)("span", {
            children: hm("smpShop:columnItem")
          }), (0, pm.jsx)("span", {
            children: hm("smpShop:columnPriceEach")
          }), (0, pm.jsx)("span", {
            children: hm("smpShop:columnTotal")
          })]
        }), (0, pm.jsx)(bA.e, {
          lazyLoadedClassName: am ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jA,
          observerUpdateDeps: [Tm.length],
          children: Tm.map((mm => {
            var Tm, fm;
            let {
              key: hm,
              item: xm,
              meta: wm
            } = mm;
            const Dm = wm.quantity * wm.pricePerItem;
            return (0, pm.jsx)(rA, {
              itemKey: hm,
              item: wm.item,
              title: xm.customTitle,
              quantity: wm.quantity,
              pricePerItem: wm.pricePerItem,
              seller: wm.seller,
              expiresAt: wm.expiresAt,
              tier: null !== (Tm = null === (fm = xm.enchant) || void 0 === fm ? void 0 : fm.tier) && void 0 !== Tm ? Tm : null,
              busy: Am.isPending(hm) || null !== wm.seller && !1 === xm.canBuy,
              canAfford: Am.canAfford(xm, Dm),
              grid: am,
              onBuy: Am.act
            }, hm)
          }))
        }, fm)]
      })
    }
    const MA = [1, 10, 100],
      uA = [1, 10, 100, 999];

    function BA(mm) {
      var Tm, fm, Am, Dm, Rm, Em, om, Om, Ym, qm;
      const {
        t: jm
      } = (0, xm.A)(), Vm = kA(), {
        creator: Im,
        mode: Km
      } = mm, [nm, Jm] = (0, hm.useState)(null !== (Tm = null === Im || void 0 === Im ? void 0 : Im.meta.item) && void 0 !== Tm ? Tm : null), [cm, zm] = (0, hm.useState)(1), [Zm, km] = (0, hm.useState)(0), [bm, Sm] = (0, hm.useState)(""), [em, Nm] = (0, hm.useState)(0), Gm = (0, hm.useRef)(nm), Xm = (0, hm.useRef)(!1), [Pm, Hm] = (0, hm.useState)(!1), ym = null !== (fm = null === Im || void 0 === Im ? void 0 : Im.meta.item) && void 0 !== fm ? fm : null, Cm = null !== (Am = null === Im || void 0 === Im ? void 0 : Im.meta.owned) && void 0 !== Am ? Am : 0;
      (0, hm.useEffect)((() => {
        mm.searching || null === ym || ym === Gm.current || (Gm.current = ym, Xm.current = !1, Jm(ym), km(0), zm("list" === Km ? Math.max(1, Cm) : 1))
      }), [ym, mm.searching]);
      const rm = !!Im && !!nm && Im.meta.item === nm,
        sm = rm ? Im.meta.owned : null !== (Dm = null === (Rm = mm.inventory) || void 0 === Rm || null === (Em = Rm.find((mm => mm.item === nm))) || void 0 === Em ? void 0 : Em.quantity) && void 0 !== Dm ? Dm : 0,
        lm = "list" === Km ? Math.max(1, sm) : 45954,
        Mm = null !== (om = mm.prices[0]) && void 0 !== om ? om : null,
        um = mm.prices.length ? Math.round(mm.prices.reduce(((mm, Tm) => mm + Tm), 0) / mm.prices.length) : null,
        Bm = null === (Om = mm.inventory) || void 0 === Om || null === (Ym = Om.find((mm => mm.item === nm))) || void 0 === Ym ? void 0 : Ym.sellPrice;
      (0, hm.useEffect)((() => {
        var mm;
        rm && (zm((mm => "list" === Km ? Math.min(Math.max(1, mm), Math.max(1, sm)) : mm)), Xm.current || km(null !== (mm = null !== Mm && void 0 !== Mm ? Mm : um) && void 0 !== mm ? mm : Math.max(1, null !== Bm && void 0 !== Bm ? Bm : 1)))
      }), [rm, sm, nm, Mm, um]);
      const Lm = mm => {
          Xm.current = !0, km(mm)
        },
        tm = Tm => {
          var fm, hm, Am;
          Gm.current = Tm, Xm.current = !1, Hm(!1), Sm(""), Nm((mm => mm + 1)), Jm(Tm), km(0), zm("list" === Km && null !== (fm = null === (hm = mm.inventory) || void 0 === hm || null === (Am = hm.find((mm => mm.item === Tm))) || void 0 === Am ? void 0 : Am.quantity) && void 0 !== fm ? fm : 1), (null === Im || void 0 === Im ? void 0 : Im.meta.item) !== Tm && mm.onPickItem(Tm)
        },
        Um = cm * Zm,
        dm = "list" === Km && null !== Im && void 0 !== Im && Im.meta.fee ? function(mm, Tm) {
          const fm = Math.max(0, Tm - mm.taxFreeAllowance);
          return Math.ceil(Math.round(fm * mm.rate * 1e6) / 1e6)
        }(Im.meta.fee, Um) : 0,
        gm = !!Im && Vm.isPending(Im.key),
        Wm = rm && !mm.searching && cm >= 1 && Zm >= 1 && ("order" === Km || sm >= cm) && !gm,
        Fm = !!nm && !rm && !mm.searching && cm >= 1 && Zm >= 1,
        mT = () => {
          Wm ? Vm.act(Im.key, `${cm}|${Zm}`) : Fm && (mm.onPickItem(nm), Hm(!0))
        };
      (0, hm.useEffect)((() => {
        Pm && rm && !mm.searching && (Hm(!1), mT())
      }), [Pm, rm, mm.searching]);
      const TT = !!nm && !rm && (mm.searching || Pm),
        fT = nm ? JA(mm.names, nm) : "",
        hT = (0, hm.useMemo)((() => nA(mm.catalogue, bm).slice(0, 8)), [mm.catalogue, bm]),
        AT = ("list" === Km ? MA.filter((mm => mm < sm)) : uA).map((mm => ({
          value: mm,
          label: String(mm)
        })));
      "list" === Km && sm > 0 && AT.push({
        value: sm,
        label: jm("smpShop:all", {
          count: sm
        })
      });
      const aT = [];
      return null !== Mm && (Mm > 1 && aT.push({
        value: Mm - 1,
        label: jm("smpShop:undercut", {
          price: Wh(Mm - 1)
        })
      }), aT.push({
        value: Mm,
        label: jm("smpShop:lowest", {
          price: Wh(Mm)
        })
      })), null !== um && um !== Mm && aT.push({
        value: um,
        label: jm("smpShop:average", {
          price: Wh(um)
        })
      }), (0, pm.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, pm.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, pm.jsx)("b", {
            children: jm("list" === Km ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, pm.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": jm("smpShop:close"),
            onClick: mm.onClose,
            children: (0, pm.jsx)(wm.c, {
              name: "xmark"
            })
          })]
        }), "list" === Km && (0, pm.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (qm = mm.inventory) && void 0 !== qm && qm.length ? mm.inventory.map((mm => {
            let {
              item: Tm,
              quantity: fm
            } = mm;
            return (0, pm.jsx)("button", {
              type: "button",
              title: Tm,
              className: am()("SmpPickerSlot", {
                SmpPickerSlotOn: Tm === nm
              }),
              onClick: () => {
                tm(Tm)
              },
              children: (0, pm.jsx)(TA, {
                item: Tm,
                amount: fm
              })
            }, Tm)
          })) : (0, pm.jsx)("span", {
            className: "SmpMuted",
            children: jm("smpShop:nothingToList")
          })
        }), ("list" === Km || !nm) && (0, pm.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, pm.jsx)(Qm.e, {
            className: "SmpSearchInput",
            placeholderText: jm("list" === Km ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: bm,
            onValueChange: Sm,
            blurOnEnter: !0,
            onEnter: () => {
              hT[0] && tm(hT[0].name)
            }
          }, em), hT.length > 0 && (0, pm.jsx)("div", {
            className: "SmpPicker",
            children: hT.map((mm => {
              let {
                name: Tm
              } = mm;
              return (0, pm.jsx)("button", {
                type: "button",
                title: Tm,
                className: am()("SmpPickerSlot", {
                  SmpPickerSlotOn: Tm === nm
                }),
                onClick: () => {
                  tm(Tm)
                },
                children: (0, pm.jsx)(TA, {
                  item: Tm
                })
              }, Tm)
            }))
          })]
        }), nm && (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsxs)("div", {
            className: "SmpPickedName",
            children: [fT, TT && (0, pm.jsx)(wA, {})]
          }), (0, pm.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, pm.jsxs)("div", {
              className: "SmpField",
              children: [(0, pm.jsxs)("span", {
                children: [jm("smpShop:quantity"), "list" === Km && rm && (0, pm.jsx)("small", {
                  children: jm("smpShop:youHave", {
                    count: sm
                  })
                })]
              }), (0, pm.jsx)(DA, {
                value: cm,
                onChange: zm,
                max: lm,
                label: jm("smpShop:quantity")
              }), (0, pm.jsx)(xA, {
                options: AT,
                value: cm,
                onChange: zm,
                ariaLabel: jm("smpShop:quantity")
              })]
            }), (0, pm.jsxs)("div", {
              className: "SmpField",
              children: [(0, pm.jsx)("span", {
                children: jm("smpShop:pricePerItem")
              }), (0, pm.jsx)(DA, {
                value: Math.max(1, Zm),
                onChange: Lm,
                max: 9999999,
                step: iA,
                label: jm("smpShop:pricePerItem")
              }), (0, pm.jsx)(xA, {
                options: aT,
                value: Zm,
                onChange: Lm,
                ariaLabel: jm("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Km && (0, pm.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, pm.jsxs)("span", {
              children: [jm("smpShop:youGet"), " ", (0, pm.jsx)(fA, {
                amount: Math.max(0, Um - dm),
                exact: !0
              })]
            }), (0, pm.jsx)("small", {
              children: dm > 0 ? jm("smpShop:listingFee", {
                fee: dm.toLocaleString("en-US")
              }) : jm("smpShop:listingRules")
            })]
          }), (0, pm.jsx)(im.q, {
            className: "SmpSubmit",
            disabled: !Wm && !Fm && !gm,
            loading: gm || TT || rm && mm.searching,
            onClick: mT,
            children: "list" === Km ? jm("smpShop:listButton", {
              count: cm,
              item: fT
            }) : (0, pm.jsxs)(pm.Fragment, {
              children: [jm("smpShop:orderButton", {
                count: cm,
                item: fT
              }), " ", Zm >= 1 && (0, pm.jsx)(fA, {
                amount: Um
              })]
            })
          })]
        })]
      })
    }

    function LA() {
      var mm;
      const {
        t: Tm
      } = (0, xm.A)(), fm = kA(), Am = null === (mm = fm.shopInfo[fm.categoryKey]) || void 0 === mm ? void 0 : mm.items, am = qA(Am, "search"), wm = qA(Am, "creator"), Dm = YA(Am, "enchantedCreator"), Rm = YA(Am, "listing"), Em = qA(Am, "empty"), om = NA(am, Rm.length > 0 || null !== Em), {
        searched: Om,
        shown: Ym,
        loading: qm
      } = om, [jm, Vm] = (0, hm.useState)(!1), [Im, Km] = function() {
        const [mm, Tm] = (0, CA.b)("smpMarketView", "list");
        return ["grid" === mm ? "grid" : "list", Tm]
      }(), Qm = "grid" === Im, nm = (0, hm.useMemo)((() => Rm.filter((mm => {
        let {
          meta: Tm
        } = mm;
        return null !== Tm.seller && Tm.item === Om
      })).map((mm => {
        let {
          meta: Tm
        } = mm;
        return Tm.pricePerItem
      })).sort(((mm, Tm) => mm - Tm))), [Rm, Om]), Jm = (0, hm.useMemo)((() => {
        const mm = new Set(om.catalogue.map((mm => {
          let {
            name: Tm
          } = mm;
          return Tm
        })));
        return function(mm) {
          for (const Tm in mm)
            if ("sell" === mm[Tm].smp) return YA(mm[Tm].items, "sell").filter((mm => {
              let {
                item: Tm
              } = mm;
              return !Tm.enchant
            })).map((mm => {
              let {
                meta: Tm
              } = mm;
              return {
                item: Tm.item,
                quantity: Tm.quantity,
                sellPrice: Tm.pricePerItem
              }
            }));
          return []
        }(fm.shopInfo).filter((Tm => {
          let {
            item: fm
          } = Tm;
          return mm.has(fm)
        }))
      }), [fm.shopInfo, om.catalogue]);
      return (0, pm.jsx)(HA, {
        browser: om,
        className: "SmpMarketTab",
        recentLabel: Tm("smpShop:recentlyListed"),
        action: (0, pm.jsx)(im.q, {
          className: "SmpSellButton",
          onClick: () => {
            Vm((mm => !mm))
          },
          children: Tm("smpShop:sell")
        }),
        above: jm && (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsx)(BA, {
            mode: "list",
            creator: wm,
            inventory: Jm,
            catalogue: om.catalogue,
            names: om.names,
            searching: qm,
            prices: nm,
            onPickItem: om.searchFor,
            onClose: () => {
              Vm(!1)
            }
          }), Dm.length > 0 && (0, pm.jsx)(vA, {
            entries: Dm
          })]
        }),
        listControls: (0, pm.jsx)(sA, {
          view: Im,
          onChange: Km
        }),
        summary: Ym && (Rm.length > 0 ? Tm(1 === Rm.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Rm.length,
          price: Wh(yA(Rm, "min"))
        }) : Tm("smpShop:noOneSelling", {
          item: JA(om.names, Ym)
        })),
        list: qm ? (0, pm.jsx)(hA, {
          grid: Qm
        }) : Rm.length > 0 ? (0, pm.jsx)(lA, {
          entries: Rm,
          view: Im
        }) : Em ? (0, pm.jsx)(aA, {
          entry: Em
        }) : (0, pm.jsx)(hA, {
          count: 3,
          grid: Qm
        })
      })
    }

    function vA(mm) {
      let {
        entries: Tm
      } = mm;
      const {
        t: fm
      } = (0, xm.A)(), Am = kA(), [am, wm] = (0, hm.useState)({});
      return (0, pm.jsx)("div", {
        className: "SmpList",
        children: Tm.map((mm => {
          var Tm, hm, xm;
          let {
            key: Dm,
            item: Rm,
            meta: Em
          } = mm;
          const om = null !== (Tm = am[Dm]) && void 0 !== Tm ? Tm : 1;
          return (0, pm.jsxs)("div", {
            className: "SmpRow",
            children: [(0, pm.jsx)(TA, {
              item: Em.item,
              amount: Em.quantity,
              tier: null !== (hm = null === (xm = Rm.enchant) || void 0 === xm ? void 0 : xm.tier) && void 0 !== hm ? hm : null
            }), (0, pm.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, pm.jsx)("b", {
                children: (0, pm.jsx)(lh.b, {
                  text: Rm.customTitle
                })
              }), (0, pm.jsx)("small", {
                children: fm("smpShop:enchantedListing")
              })]
            }), (0, pm.jsx)(DA, {
              value: om,
              onChange: mm => {
                wm({
                  ...am,
                  [Dm]: mm
                })
              },
              max: 9999999,
              step: iA,
              label: fm("smpShop:pricePerItem")
            }), (0, pm.jsxs)(im.q, {
              loading: Am.isPending(Dm),
              onClick: () => {
                Am.act(Dm, String(om))
              },
              children: [fm("smpShop:list"), " ", (0, pm.jsx)(fA, {
                amount: om
              })]
            })]
          }, Dm)
        }))
      })
    }
    const tA = (0, hm.memo)((function(mm) {
      let {
        itemKey: Tm,
        item: fm,
        quantity: hm,
        pricePerItem: Am,
        tier: xm,
        selected: wm,
        onSelect: Dm
      } = mm;
      return (0, pm.jsxs)("button", {
        type: "button",
        className: am()("SmpInventorySlot", {
          SmpInventorySlotOn: wm
        }),
        title: fm,
        onClick: () => {
          Dm(Tm)
        },
        children: [(0, pm.jsx)(TA, {
          item: fm,
          amount: hm,
          tier: xm
        }), (0, pm.jsx)(fA, {
          amount: Am
        })]
      })
    }));

    function UA() {
      var mm;
      const {
        t: Tm
      } = (0, xm.A)(), fm = kA(), Am = null === (mm = fm.shopInfo[fm.categoryKey]) || void 0 === mm ? void 0 : mm.items, wm = YA(Am, "sell"), Dm = qA(Am, "empty"), [im, Rm] = (0, hm.useState)(null), [Em, om] = (0, hm.useState)({}), Om = wm.find((mm => {
        let {
          key: Tm
        } = mm;
        return Tm === im
      }));
      return 0 === wm.length ? (0, pm.jsx)("div", {
        className: "SmpScreen",
        children: (0, pm.jsx)(AA, {
          title: Dm ? (0, pm.jsx)(lh.b, {
            text: Dm.item.customTitle
          }) : Tm("smpShop:nothingToSell"),
          children: Dm && (0, pm.jsx)(lh.b, {
            text: Dm.item.description
          })
        })
      }) : (0, pm.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, pm.jsx)("div", {
          className: "SmpInventoryGrid",
          children: wm.map((mm => {
            var Tm, fm;
            let {
              key: hm,
              item: Am,
              meta: am
            } = mm;
            return (0, pm.jsx)(tA, {
              itemKey: hm,
              item: am.item,
              quantity: am.quantity,
              pricePerItem: am.pricePerItem,
              tier: null !== (Tm = null === (fm = Am.enchant) || void 0 === fm ? void 0 : fm.tier) && void 0 !== Tm ? Tm : null,
              selected: hm === im,
              onSelect: Rm
            }, hm)
          }))
        }), (0, pm.jsx)("div", {
          className: am()("SmpSellBar", {
            SmpSellBarIdle: !Om
          }),
          children: Om ? (0, pm.jsx)(dA, {
            entry: Om,
            choice: cA(Om.item, Em[Om.key]),
            onChoose: mm => {
              om({
                ...Em,
                [Om.key]: mm
              })
            }
          }) : (0, pm.jsx)("span", {
            className: "SmpMuted",
            children: Tm("smpShop:tapToSell")
          })
        })]
      })
    }

    function dA(mm) {
      var Tm, fm, hm, Am;
      let {
        entry: am,
        choice: wm,
        onChoose: Dm
      } = mm;
      const {
        t: Rm
      } = (0, xm.A)(), Em = kA(), {
        key: om,
        item: Om,
        meta: Ym
      } = am, qm = KA("dropdown" === (null === (Tm = Om.userInput) || void 0 === Tm ? void 0 : Tm.type) ? Om.userInput.dropdownOptions : []), jm = null === wm ? 0 : -(0, yh.e)(Om, wm);
      return (0, pm.jsxs)(pm.Fragment, {
        children: [(0, pm.jsx)(TA, {
          item: Ym.item,
          amount: Ym.quantity,
          tier: null !== (fm = null === (hm = Om.enchant) || void 0 === hm ? void 0 : hm.tier) && void 0 !== fm ? fm : null
        }), (0, pm.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pm.jsx)("b", {
            children: (0, pm.jsx)(lh.b, {
              text: null !== (Am = Om.customTitle) && void 0 !== Am ? Am : Ym.item
            })
          }), (0, pm.jsx)("small", {
            children: Rm("smpShop:sellEach", {
              count: Ym.quantity
            })
          })]
        }), (0, pm.jsx)(xA, {
          options: qm.map((mm => {
            let {
              label: Tm,
              quantity: fm,
              isAll: hm
            } = mm;
            return {
              value: Tm,
              label: hm ? Rm("smpShop:all", {
                count: fm
              }) : String(fm)
            }
          })),
          value: wm,
          onChange: Dm,
          ariaLabel: Rm("smpShop:quantity")
        }), (0, pm.jsxs)(im.q, {
          loading: Em.isPending(om),
          disabled: null === wm,
          onClick: () => {
            Em.act(om, wm)
          },
          children: [Rm("smpShop:sellButton"), " ", (0, pm.jsx)(fA, {
            amount: jm
          })]
        })]
      })
    }

    function gA() {
      var mm;
      const {
        t: Tm
      } = (0, xm.A)(), fm = kA(), hm = null === (mm = fm.shopInfo[fm.categoryKey]) || void 0 === mm ? void 0 : mm.items, Am = YA(hm, "collect"), am = YA(hm, "myListing"), wm = (mm, Tm) => fm.isPending(mm) || !1 === Tm.canBuy;
      return (0, pm.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, pm.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Tm("smpShop:readyToCollect")
        }), Am.length > 0 ? (0, pm.jsx)("div", {
          className: "SmpList",
          children: Am.map((mm => {
            var hm, Am;
            let {
              key: am,
              item: xm,
              meta: Dm
            } = mm;
            return (0, pm.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pm.jsx)(TA, {
                item: "sold" === Dm.type ? "Gold Coin" : Dm.item,
                amount: "sold" === Dm.type ? 0 : Dm.quantity,
                tier: null !== (hm = null === (Am = xm.enchant) || void 0 === Am ? void 0 : Am.tier) && void 0 !== hm ? hm : null
              }), (0, pm.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pm.jsx)("b", {
                  children: (0, pm.jsx)(lh.b, {
                    text: xm.customTitle
                  })
                }), (0, pm.jsx)("small", {
                  children: (0, pm.jsx)(lh.b, {
                    text: xm.description
                  })
                })]
              }), (0, pm.jsx)(im.m, {
                loading: wm(am, xm),
                onClick: () => {
                  fm.act(am)
                },
                children: Tm("smpShop:collect")
              })]
            }, am)
          }))
        }) : (0, pm.jsx)(AA, {
          title: Tm("smpShop:nothingToCollect"),
          children: Tm("smpShop:nothingToCollectHint")
        }), (0, pm.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Tm("smpShop:activeListings", {
            count: am.length
          })
        }), am.length > 0 ? (0, pm.jsx)("div", {
          className: "SmpList",
          children: am.map((mm => {
            var hm, Am;
            let {
              key: am,
              item: xm,
              meta: Dm
            } = mm;
            return (0, pm.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pm.jsx)(TA, {
                item: Dm.item,
                amount: Dm.quantity,
                tier: null !== (hm = null === (Am = xm.enchant) || void 0 === Am ? void 0 : Am.tier) && void 0 !== hm ? hm : null
              }), (0, pm.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pm.jsx)("b", {
                  children: (0, pm.jsx)(lh.b, {
                    text: xm.customTitle
                  })
                }), (0, pm.jsx)("small", {
                  children: Tm("smpShop:timeLeft", {
                    time: IA(Dm.expiresAt)
                  })
                })]
              }), (0, pm.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, pm.jsx)(fA, {
                  amount: Dm.pricePerItem
                }), (0, pm.jsx)("small", {
                  children: Tm("smpShop:each")
                })]
              }), (0, pm.jsx)(im.O, {
                loading: wm(am, xm),
                onClick: () => {
                  fm.act(am)
                },
                children: Tm("smpShop:cancel")
              })]
            }, am)
          }))
        }) : (0, pm.jsx)(AA, {
          title: Tm("smpShop:noActiveListings"),
          children: Tm("smpShop:noActiveListingsHint")
        })]
      })
    }

    function WA(mm) {
      let {
        done: Tm,
        of: fm
      } = mm;
      return (0, pm.jsx)("span", {
        className: "SmpProgress",
        children: (0, pm.jsx)("i", {
          style: {
            width: `${Math.min(100,Tm/Math.max(1,fm)*100)}%`
          }
        })
      })
    }

    function FA(mm) {
      var Tm, fm, hm;
      let {
        entry: Am,
        choice: am,
        onChoose: wm
      } = mm;
      const {
        t: Dm
      } = (0, xm.A)(), Rm = kA(), {
        key: Em,
        item: om,
        meta: Om
      } = Am, Ym = "dropdown" === (null === (Tm = om.userInput) || void 0 === Tm ? void 0 : Tm.type) ? om.userInput.dropdownOptions : [], qm = !0 === Om.processing, jm = null !== Om.creator && (Om.owned > 0 || qm), Vm = jm && Om.owned > 0 ? KA(Ym) : [], Im = null === am ? 0 : null !== (fm = null === (hm = Vm.find((mm => mm.label === am))) || void 0 === hm ? void 0 : hm.quantity) && void 0 !== fm ? fm : 0;
      return (0, pm.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, pm.jsx)(TA, {
          item: Om.item
        }), (0, pm.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pm.jsx)("b", {
            children: (0, pm.jsx)(lh.b, {
              text: om.customTitle
            })
          }), (0, pm.jsxs)("small", {
            children: [(0, pm.jsx)(fA, {
              amount: Om.pricePerItem
            }), " ", Dm("smpShop:each"), " \xb7", " ", null === Om.creator ? Dm("smpShop:you") : (0, pm.jsx)(lh.b, {
              text: [{
                entityName: Om.creator
              }]
            })]
          }), (0, pm.jsx)(WA, {
            done: Om.delivered,
            of: Om.wanted
          })]
        }), jm ? (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsx)(xA, {
            options: Vm.map((mm => {
              let {
                label: Tm,
                quantity: fm,
                isAll: hm
              } = mm;
              return {
                value: Tm,
                label: hm ? Dm("smpShop:max", {
                  count: fm
                }) : String(fm)
              }
            })),
            value: am,
            onChange: wm,
            ariaLabel: Dm("smpShop:quantity")
          }), (0, pm.jsxs)(im.q, {
            loading: Rm.isPending(Em) || qm,
            disabled: null === am,
            onClick: () => {
              Rm.act(Em, am)
            },
            children: [Dm("smpShop:deliver"), " ", (0, pm.jsx)(fA, {
              amount: Im * Om.pricePerItem
            })]
          })]
        }) : (0, pm.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Om.creator ? Dm("smpShop:yourOrder") : Dm("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function ma() {
      var mm;
      const {
        t: Tm
      } = (0, xm.A)(), fm = kA(), Am = null === (mm = fm.shopInfo[fm.categoryKey]) || void 0 === mm ? void 0 : mm.items, am = qA(Am, "search"), wm = qA(Am, "creator"), Dm = YA(Am, "order"), Rm = qA(Am, "empty"), Em = NA(am, Dm.length > 0 || null !== Rm), [om, Om] = (0, hm.useState)(!1), [Ym, qm] = (0, hm.useState)({});
      return (0, pm.jsx)(HA, {
        browser: Em,
        recentLabel: Tm("smpShop:recentOrders"),
        action: (0, pm.jsx)(im.q, {
          onClick: () => {
            Om((mm => !mm))
          },
          children: Tm("smpShop:createOrder")
        }),
        above: om && (0, pm.jsx)(BA, {
          mode: "order",
          creator: wm,
          catalogue: Em.catalogue,
          names: Em.names,
          searching: Em.loading,
          prices: [],
          onPickItem: Em.searchFor,
          onClose: () => {
            Om(!1)
          }
        }),
        onBack: () => {
          Om(!1)
        },
        summary: Dm.length > 0 && Tm(1 === Dm.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Dm.length,
          price: Wh(yA(Dm, "max"))
        }),
        list: Em.loading ? (0, pm.jsx)(hA, {}) : Dm.length > 0 ? (0, pm.jsx)(bA.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jA,
          observerUpdateDeps: [Dm.length],
          children: Dm.map((mm => (0, pm.jsx)(FA, {
            entry: mm,
            choice: cA(mm.item, Ym[mm.key]),
            onChoose: Tm => {
              qm({
                ...Ym,
                [mm.key]: Tm
              })
            }
          }, mm.key)))
        }) : Rm ? (0, pm.jsx)(aA, {
          entry: Rm
        }) : (0, pm.jsx)(hA, {
          count: 3
        })
      })
    }

    function Ta() {
      var mm;
      const {
        t: Tm
      } = (0, xm.A)(), fm = kA(), hm = YA(null === (mm = fm.shopInfo[fm.categoryKey]) || void 0 === mm ? void 0 : mm.items, "myOrder");
      return 0 === hm.length ? (0, pm.jsx)("div", {
        className: "SmpScreen",
        children: (0, pm.jsx)(AA, {
          title: Tm("smpShop:noOrders"),
          children: Tm("smpShop:noOrdersHint")
        })
      }) : (0, pm.jsx)("div", {
        className: "SmpScreen",
        children: (0, pm.jsx)("div", {
          className: "SmpList",
          children: hm.map((mm => {
            let {
              key: hm,
              item: Am,
              meta: am
            } = mm;
            const xm = fm.isPending(hm) || !1 === Am.canBuy;
            return (0, pm.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pm.jsx)(TA, {
                item: am.item,
                amount: am.collectable
              }), (0, pm.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pm.jsx)("b", {
                  children: (0, pm.jsx)(lh.b, {
                    text: Am.customTitle
                  })
                }), (0, pm.jsxs)("small", {
                  children: [(0, pm.jsx)(fA, {
                    amount: am.pricePerItem
                  }), " ", Tm("smpShop:each"), am.collectable > 0 && ` \xb7 ${Tm("smpShop:readyCount",{count:am.collectable})}`]
                }), (0, pm.jsx)(WA, {
                  done: am.delivered,
                  of: am.wanted
                })]
              }), am.collectable > 0 ? (0, pm.jsx)(im.m, {
                loading: xm,
                onClick: () => {
                  fm.act(hm)
                },
                children: Tm("smpShop:collectCount", {
                  count: am.collectable
                })
              }) : (0, pm.jsx)(im.O, {
                loading: xm,
                onClick: () => {
                  fm.act(hm)
                },
                children: Tm("smpShop:cancel")
              })]
            }, hm)
          }))
        })
      })
    }
    const fa = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ha = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Aa(mm, Tm) {
      let fm = !1;
      const hm = {};
      for (const Am in mm) Tm(Am, mm[Am]) ? hm[Am] = mm[Am] : fm = !0;
      return fm ? hm : mm
    }

    function aa(mm) {
      var Tm, fm, Am, Dm;
      const {
        show: im,
        shopInfo: Rm,
        selectedCategoryKey: Em
      } = mm, {
        t: om
      } = (0, xm.A)(), Om = null !== Em && void 0 !== Em ? Em : "", Ym = OA(Rm, Om), qm = null === (Tm = Rm[Om]) || void 0 === Tm ? void 0 : Tm.items, jm = null !== Ym, [Vm, Im] = (0, hm.useState)({}), [Km, Qm] = (0, hm.useState)([]), [nm, Jm] = (0, hm.useState)(!1), [cm, zm] = (0, hm.useState)(null), [, Zm] = (0, hm.useState)(0), km = (0, hm.useRef)(0), bm = (0, hm.useRef)({}), Sm = (0, hm.useRef)({
        items: qm,
        pending: Vm,
        shopInfo: Rm,
        active: jm,
        canAfford: mm.canAfford,
        buy: mm.buy
      });
      Sm.current = {
        items: qm,
        pending: Vm,
        shopInfo: Rm,
        active: jm,
        canAfford: mm.canAfford,
        buy: mm.buy
      };
      const em = (0, hm.useCallback)((mm => {
        km.current++;
        const Tm = km.current;
        Qm((fm => [{
          id: Tm,
          text: mm
        }, ...fm].slice(0, 8))), zm(Tm)
      }), []);
      (0, hm.useEffect)((() => {
        if (null === cm) return;
        const mm = setTimeout((() => {
          zm(null)
        }), 3e3);
        return () => {
          clearTimeout(mm)
        }
      }), [cm]), (0, hm.useEffect)((() => {
        const Tm = mm.message;
        if (!Tm) return;
        const {
          shopInfo: fm,
          active: hm,
          items: Am
        } = Sm.current, am = null !== Tm.categoryKey ? null !== OA(fm, Tm.categoryKey) : hm;
        (am || hm) && em(Tm.text), am && Im((mm => Aa(mm, (mm => {
          var Tm, fm;
          return !fa.has(null === Am || void 0 === Am || null === (Tm = Am[mm]) || void 0 === Tm || null === (fm = Tm.smp) || void 0 === fm ? void 0 : fm.kind)
        }))))
      }), [mm.message, em]), (0, hm.useEffect)((() => {
        Im((mm => Aa(mm, ((mm, Tm) => zA(null === qm || void 0 === qm ? void 0 : qm[mm]) === Tm.snapshot))))
      }), [Rm, qm]);
      const Nm = Object.keys(Vm).length > 0;
      (0, hm.useEffect)((() => {
        if (!Nm) return;
        const mm = setInterval((() => {
          Zm((mm => mm + 1));
          const mm = Date.now(),
            {
              pending: Tm,
              items: fm
            } = Sm.current,
            hm = Object.keys(Tm).filter((fm => mm - Tm[fm].at >= 12e3));
          if (0 === hm.length) return;
          const Am = hm.some((mm => {
            var hm, Am;
            return "search" !== (null === fm || void 0 === fm || null === (hm = fm[mm]) || void 0 === hm || null === (Am = hm.smp) || void 0 === Am ? void 0 : Am.kind) || Tm[mm].resend
          }));
          for (const am of hm) bm.current[am] = mm;
          Im((mm => Aa(mm, (mm => !hm.includes(mm))))), Am && em(om("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(mm)
        }
      }), [Nm]), (0, hm.useEffect)((() => {
        Im({})
      }), [Om]), (0, hm.useEffect)((() => {
        im || Jm(!1)
      }), [im]);
      const Gm = (0, hm.useCallback)((function(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: hm,
            pending: Am,
            canAfford: am,
            buy: xm
          } = Sm.current, wm = null === hm || void 0 === hm ? void 0 : hm[mm];
          if (!wm || mm in Am || !1 === wm.canBuy) return !1;
          if (!am(wm, (0, yh.e)(wm, Tm))) return !1;
          xm(mm, wm, Tm);
          const Dm = {
            snapshot: zA(wm),
            at: Date.now(),
            resend: fm
          };
          return Sm.current.pending = {
            ...Sm.current.pending,
            [mm]: Dm
          }, Im((Tm => ({
            ...Tm,
            [mm]: Dm
          }))), !0
        }), []),
        Xm = (0, hm.useMemo)((() => ({
          shopInfo: Rm,
          categoryKey: Om,
          canAfford: mm.canAfford,
          isPending: mm => mm in Vm,
          gaveUpAt: mm => {
            var Tm;
            return null !== (Tm = bm.current[mm]) && void 0 !== Tm ? Tm : 0
          },
          act: Gm,
          notify: em
        })), [Rm, Om, mm.canAfford, Vm, Gm, em]),
        Pm = Math.min(...Object.values(Vm).map((mm => mm.at))),
        Hm = Nm && Date.now() - Pm > 1500,
        ym = Km.length > 1,
        Cm = null !== (fm = null === (Am = Rm[Om]) || void 0 === Am ? void 0 : Am.customTitle) && void 0 !== fm ? fm : Om,
        rm = null === (Dm = Rm[Om]) || void 0 === Dm ? void 0 : Dm.description;
      let sm = null;
      return "market" === Ym ? sm = (0, pm.jsx)(LA, {}) : "sell" === Ym ? sm = (0, pm.jsx)(UA, {}) : "collect" === Ym ? sm = (0, pm.jsx)(gA, {}) : "orders" === Ym ? sm = (0, pm.jsx)(ma, {}) : "myOrders" === Ym && (sm = (0, pm.jsx)(Ta, {})), (0, pm.jsx)(ZA.Provider, {
        value: Xm,
        children: (0, pm.jsx)("div", {
          className: "SmpShopHost",
          hidden: !jm,
          children: (0, pm.jsxs)("div", {
            className: "SmpShop",
            children: [(0, pm.jsx)("header", {
              className: "SmpHeader",
              children: (0, pm.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, pm.jsxs)("h2", {
                  children: [Ym && (0, pm.jsx)(wm.c, {
                    name: ha[Ym]
                  }), om(Cm)]
                }), rm && (0, pm.jsx)("p", {
                  children: (0, pm.jsx)(lh.b, {
                    text: rm
                  })
                })]
              })
            }), (0, pm.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: im && sm
            }), (0, pm.jsxs)("button", {
              type: "button",
              className: am()("SmpStatus", {
                SmpStatusWaiting: Nm,
                SmpStatusFresh: !Nm && null !== cm,
                SmpStatusHasHistory: ym
              }),
              "aria-live": "polite",
              "aria-expanded": ym ? nm : void 0,
              onClick: () => {
                ym && Jm((mm => !mm))
              },
              children: [Nm ? (0, pm.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, pm.jsx)(wA, {}), om(Hm ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Km[0] ? (0, pm.jsx)("span", {
                className: "SmpStatusText",
                children: (0, pm.jsx)(lh.b, {
                  text: Km[0].text
                })
              }, Km[0].id) : (0, pm.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: om("smpShop:ready")
              }), ym && (0, pm.jsx)("small", {
                children: om("smpShop:recentMessages", {
                  count: Km.length
                })
              })]
            }), nm && ym && (0, pm.jsx)("div", {
              className: "SmpStatusHistory",
              children: Km.map((mm => (0, pm.jsx)("div", {
                children: (0, pm.jsx)(lh.b, {
                  text: mm.text
                })
              }, mm.id)))
            })]
          })
        })
      })
    }
    class xa {
      constructor(mm) {
        this.info = mm
      }
      static fromShopInfo(mm) {
        const Tm = {};
        for (const fm in mm) {
          const hm = !0 === mm[fm].redDot && !0 !== mm[fm].forceRemoveRedDot;
          Tm[fm] = {
            redDot: hm,
            items: {}
          };
          for (const Am in mm[fm].items) {
            const hm = mm[fm].items[Am],
              am = !0 === hm.redDot && !0 !== hm.forceRemoveRedDot;
            Tm[fm].items[Am] = {
              redDot: am
            }
          }
        }
        return new xa(Tm)
      }
      anyCategoryHasRedDots() {
        for (const mm in this.info)
          if (this.categoryHasRedDot(mm)) return !0;
        return !1
      }
      doesCategoryExist(mm) {
        return !(0, Tf.H)(this.info[mm])
      }
      categoryHasRedDot(mm) {
        return !0 === this.info[mm].redDot
      }
      updateCategoryRedDot(mm, Tm) {
        this.info[mm].redDot = Tm
      }
      doesItemExist(mm, Tm) {
        return this.doesCategoryExist(mm) && !(0, Tf.H)(this.info[mm].items[Tm])
      }
      itemHasRedDot(mm, Tm) {
        return !0 === this.info[mm].items[Tm].redDot
      }
      updateItemRedDot(mm, Tm, fm) {
        this.info[mm].items[Tm].redDot = fm
      }
      shallowCopy() {
        return new xa(this.info)
      }
    }

    function wa(mm, Tm) {
      return `${mm}\x1f${Tm}`
    }

    function Da(mm, Tm) {
      return !(0, Tf.H)(Tm) && !(0, Tf.H)(mm) && Tm in mm
    }
    const ia = (0, hm.memo)((function(mm) {
      var Tm, fm;
      let {
        show: Am
      } = mm;
      const xm = (0, bT.g)("players", Ya),
        wm = (0, bT.g)("players", qa),
        Rm = (0, th.e)(),
        [om, Om] = (0, hm.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: xa.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        qm = (0, hm.useRef)(""),
        jm = (0, hm.useRef)(null),
        Im = (0, hm.useRef)(null),
        Km = (0, hm.useRef)(0),
        Qm = (0, hm.useRef)(void 0),
        nm = (0, hm.useRef)(null),
        Jm = (0, hm.useRef)(om),
        zm = om.redDotInfo.anyCategoryHasRedDots(),
        [Zm, bm] = (0, hm.useState)(null),
        Sm = (0, hm.useRef)(!1);
      let em = !1,
        Nm = 0,
        Gm = 0;
      if (om.currencyAmounts) {
        for (const mm in om.currencyAmounts) {
          var Xm;
          const Tm = om.currencyAmounts[mm];
          Tm.hidden || (Nm++, (null === (Xm = Tm.subtext) || void 0 === Xm ? void 0 : Xm.length) > 0 && Gm++)
        }
        em = Nm + Gm > 4
      }(0, hm.useEffect)((() => {
        ff.j.gp("showShopIconRedDot", zm, !0)
      }), [zm]), (0, hm.useEffect)((() => {
        Vm.gameBridge.send("setShopOpen", Am), Am || (clearTimeout(Qm.current), Om((mm => mm.awaitingPurchase ? {
          ...mm,
          awaitingPurchase: !1
        } : mm)))
      }), [Am]), (0, hm.useEffect)((() => () => {
        Vm.gameBridge.send("setShopOpen", !1), clearTimeout(Qm.current)
      }), []), (0, hm.useEffect)((() => {
        Jm.current = om
      }), [om]), (0, hm.useEffect)((() => {
        if (null === Zm) return;
        return (0, Lh.c)("pointerdown", (mm => {
          const Tm = mm.target;
          null !== Tm && void 0 !== Tm && Tm.closest(".ShopItem") || bm(null)
        }))
      }), [Zm]);
      const Pm = mm => {
          Om((Tm => ({
            ...Tm,
            ...mm
          })))
        },
        Hm = mm => {
          var Tm;
          clearTimeout(null === (Tm = om.onBoughtInfo) || void 0 === Tm ? void 0 : Tm.timeout);
          const fm = setTimeout((() => {
            Pm({
              onBoughtInfo: null
            })
          }), 3e3);
          qm.current = mm, Pm({
            onBoughtInfo: {
              text: mm,
              timeout: fm,
              categoryKey: jm.current
            }
          })
        },
        ym = mm => {
          const {
            shopInfo: Tm,
            userInputsPerItem: fm,
            redDotInfo: hm,
            autoSelectCategory: am
          } = function(mm, Tm, fm, hm, Am, am) {
            if ((0, Tf.H)(mm) || 0 === Object.keys(mm).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: xa.fromShopInfo({}),
              autoSelectCategory: null
            };
            const xm = km.k[km.q].adConfig.showRewardedAds,
              wm = {};
            let Dm = null;
            for (const qm in mm) {
              const Tm = mm[qm],
                fm = {};
              let hm = !1;
              for (const mm in Tm.items) {
                const Am = Tm.items[mm];
                (0, yh.l)(Am, xm) && (fm[mm] = Am, hm = !0)
              }
              hm && (wm[qm] = {
                ...Tm,
                items: fm
              }, !0 === Tm.autoSelectCategory && (Dm = qm))
            }
            const im = {},
              Rm = (mm, Tm, hm, xm) => {
                var wm, Dm;
                const Rm = wa(mm, Tm),
                  pm = null !== (wm = fm[Rm]) && void 0 !== wm ? wm : fm[Tm];
                if (null !== (Dm = xm.userInput) && void 0 !== Dm && Dm.type) switch (xm.userInput.type) {
                  case "dropdown": {
                    var Em;
                    const mm = !pm || !xm.userInput.dropdownOptions.some((mm => (0, yh.g)(mm) === pm)),
                      Tm = xm.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === hm || void 0 === hm || null === (Em = hm.userInput) || void 0 === Em ? void 0 : Em.type) || JSON.stringify(hm.userInput.dropdownOptions) !== JSON.stringify(xm.userInput.dropdownOptions)),
                      fm = xm.userInput,
                      Am = !(0, Tf.H)(fm.initialValue) && fm.dropdownOptions.some((mm => (0, yh.g)(mm) === fm.initialValue));
                    var om;
                    return void(mm || Tm ? Am ? im[Rm] = null !== (om = xm.userInput.initialValue) && void 0 !== om ? om : null : xm.userInput.dropdownOptions.length > 0 ? im[Rm] = (0, yh.g)(xm.userInput.dropdownOptions[0]) : im[Rm] = null : im[Rm] = pm)
                  }
                  case "text":
                  case "number":
                    var Om, Ym, qm;
                    return void((null === hm || void 0 === hm ? void 0 : hm.userInput) !== xm.userInput ? im[Rm] = null !== (Om = null !== (Ym = xm.userInput.initialValue) && void 0 !== Ym ? Ym : pm) && void 0 !== Om ? Om : "" : im[Rm] = null !== (qm = null !== pm && void 0 !== pm ? pm : xm.userInput.initialValue) && void 0 !== qm ? qm : "");
                  case "color":
                    var jm, Vm, Im;
                    return void((null === hm || void 0 === hm ? void 0 : hm.userInput) !== xm.userInput ? im[Rm] = null !== (jm = null !== (Vm = xm.userInput.initialValue) && void 0 !== Vm ? Vm : pm) && void 0 !== jm ? jm : "#000000" : im[Rm] = null !== (Im = null !== pm && void 0 !== pm ? pm : xm.userInput.initialValue) && void 0 !== Im ? Im : "#000000");
                  case "player": {
                    const mm = (0, yh.i)(Am, am, xm.userInput);
                    return void(pm && mm.includes(pm) ? im[Rm] = pm : im[Rm] = mm.length > 0 ? mm[0] : null)
                  }
                }
              };
            for (const qm in wm)
              for (const mm in wm[qm].items) {
                var pm;
                const fm = wm[qm].items[mm];
                Rm(qm, mm, null === (pm = Tm[qm]) || void 0 === pm ? void 0 : pm.items[mm], fm)
              }
            const Em = xa.fromShopInfo(wm);
            for (const qm in wm) {
              var om;
              if (hm.doesCategoryExist(qm)) {
                (null === (om = Tm[qm]) || void 0 === om ? void 0 : om.redDot) === wm[qm].redDot && Em.updateCategoryRedDot(qm, hm.categoryHasRedDot(qm));
                for (const mm in wm[qm].items) {
                  var Om, Ym;
                  hm.doesItemExist(qm, mm) && (null === (Om = Tm[qm]) || void 0 === Om || null === (Ym = Om.items[mm]) || void 0 === Ym ? void 0 : Ym.redDot) === wm[qm].items[mm].redDot && Em.updateItemRedDot(qm, mm, hm.itemHasRedDot(qm, mm))
                }
              }
            }
            return {
              shopInfo: wm,
              userInputsPerItem: im,
              redDotInfo: Em,
              autoSelectCategory: Dm
            }
          }(mm, om.shopInfo, om.userInputsPerItem, om.redDotInfo, xm, wm), Dm = {
            shopInfo: Tm,
            userInputsPerItem: fm,
            redDotInfo: hm
          };
          if (null === am || Am)
            if (Tm[om.selectedCategoryKey]) Dm.selectedCategoryKey = om.selectedCategoryKey;
            else {
              const mm = dh(Tm);
              Dm.selectedCategoryKey = mm.length > 0 ? mm[0] : null
            }
          else Dm.selectedCategoryKey = am;
          return 0 === Object.keys(Tm).length && Am && cm.c.set({
            openEverythingMenuName: null
          }), Dm
        },
        rm = (mm, Tm, fm) => {
          const hm = om.selectedCategoryKey,
            Am = wa(hm, mm),
            am = null !== fm && void 0 !== fm ? fm : om.userInputsPerItem[Am],
            xm = {
              categoryKey: hm,
              itemKey: mm,
              userInput: am
            };
          if (jm.current = hm, Tm.isRewardedAd) {
            if (Date.now() - Km.current < 5e3) return;
            (0, DT._)((() => {
              var fm, hm, am;
              console.log("bought rewarded ad");
              const wm = xm.categoryKey ? null === (fm = Jm.current.shopInfo[xm.categoryKey]) || void 0 === fm ? void 0 : fm.items[mm] : null;
              if (!wm || !wm.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (hm = Tm.userInput) || void 0 === hm ? void 0 : hm.type) === (null === wm || void 0 === wm || null === (am = wm.userInput) || void 0 === am ? void 0 : am.type) ? (xm.userInput = Jm.current.userInputsPerItem[Am], Vm.gameBridge.send("buyShopItem", xm), Tm.onBoughtMessage && Hm(Tm.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Km.current = Date.now()
          } else {
            Vm.gameBridge.send("buyShopItem", xm), Pm({
              awaitingPurchase: !0
            }), clearTimeout(Qm.current), Qm.current = setTimeout((() => {
              nm.current = null, Pm({
                awaitingPurchase: !1
              })
            }), 1e3);
            const mm = (0, yh.e)(Tm, am);
            if (nm.current = null, !isNaN(mm) && Da(om.currencyAmounts, Tm.currency)) {
              0 !== mm && (nm.current = {
                currency: Tm.currency,
                amountBefore: om.currencyAmounts[Tm.currency].amount
              });
              const fm = {
                ...om.currencyAmounts
              };
              fm[Tm.currency].amount -= mm, Pm({
                currencyAmounts: fm
              })
            }
            Tm.onBoughtMessage && Hm(Tm.onBoughtMessage)
          }
        },
        sm = (mm, Tm) => {
          if (null === Tm || !mm.shopInfo[Tm]) return mm;
          let fm = mm.redDotInfo;
          return fm.categoryHasRedDot(Tm) && (fm.updateCategoryRedDot(Tm, !1), fm = fm.shallowCopy()), {
            ...mm,
            selectedCategoryKey: Tm,
            redDotInfo: fm
          }
        },
        lm = mm => {
          Om((Tm => sm(Tm, mm)))
        };
      (0, yT.g)(vh.g, (() => {
        Om((mm => {
          const Tm = (0, vh.k)(dh(mm.shopInfo), mm.selectedCategoryKey, (Tm => (0, vh.e)(mm.shopInfo[Tm].items)));
          return Tm === mm.selectedCategoryKey ? mm : sm(mm, Tm)
        }))
      })), (0, yT.g)("showShopFromServer", (mm => {
        let {
          toggle: Tm,
          CA: fm
        } = mm;
        fm && lm(fm), 0 === Object.keys(om.shopInfo).length || Tm && Am ? cm.c.set({
          openEverythingMenuName: null
        }) : cm.c.set({
          openEverythingMenuName: pT.n.SHOP
        })
      })), (0, yT.g)("closeShopOnDamaged", (() => {
        Am && cm.c.set({
          openEverythingMenuName: null
        })
      })), (0, yT.g)("overShopInfo", (mm => {
        Hm(mm)
      })), (0, Ym.c)("currencyAmounts", (mm => {
        var Tm;
        const fm = nm.current;
        fm && (null === mm || void 0 === mm || null === (Tm = mm[fm.currency]) || void 0 === Tm ? void 0 : Tm.amount) === fm.amountBefore ? Pm({
          currencyAmounts: mm
        }) : (nm.current = null, Pm({
          currencyAmounts: mm,
          awaitingPurchase: !1
        }))
      })), (0, Ym.c)("shopInfo", (mm => {
        Pm({
          ...ym(mm),
          awaitingPurchase: !1
        })
      }));
      const Mm = (0, hm.useRef)({
        playerIds: xm,
        localPlayerId: wm
      });
      (0, hm.useEffect)((() => {
        Mm.current.playerIds === xm && Mm.current.localPlayerId === wm || (Mm.current = {
          playerIds: xm,
          localPlayerId: wm
        }, Om((mm => {
          const Tm = ym(mm.shopInfo);
          return {
            ...mm,
            ...Tm
          }
        })))
      }), [xm, wm]);
      const um = om.selectedCategoryKey,
        Bm = (mm, Tm) => {
          var fm, hm;
          return (isNaN(Tm) || (0, Tf.H)(mm.currency) || Da(om.currencyAmounts, mm.currency) && Tm <= om.currencyAmounts[mm.currency].amount) && (null === (fm = mm.canBuy) || void 0 === fm || fm) && !(null !== (hm = mm.hidden) && void 0 !== hm && hm)
        },
        Lm = (mm, Tm) => {
          var fm, hm, Am;
          const xm = wa(um, mm),
            wm = om.shopInfo[um].items[mm],
            Rm = om.userInputsPerItem[xm],
            Em = (0, yh.e)(wm, Rm),
            Om = Bm(wm, Em),
            Ym = wm.enchant,
            qm = Ym ? (0, Cm.ob)(null !== (fm = wm.customTitle) && void 0 !== fm ? fm : mm, {
              colour: Cm.kb[Ym.tier]
            }) : null !== (hm = wm.customTitle) && void 0 !== hm ? hm : mm,
            jm = Tm => {
              const fm = null !== Tm && void 0 !== Tm ? Tm : Rm,
                hm = void 0 !== Tm ? (0, yh.e)(wm, Tm) : Em;
              Bm(wm, hm) && null !== fm && rm(mm, wm, Tm);
              let Am = om.redDotInfo;
              Am.itemHasRedDot(um, mm) && (Am.updateItemRedDot(um, mm, !1), Am = Am.shallowCopy()), Pm({
                redDotInfo: Am
              })
            };
          return (0, pm.jsxs)("div", {
            className: am()("ShopItem", {
              ShopItemNoInput: !wm.userInput,
              ShopItemNoInputCanBuy: !wm.userInput && Om,
              ShopItemNoInputSelected: wm.isSelected,
              ShopItemEnchant: !!Ym
            }),
            "data-pad-focusable": !wm.userInput || void 0,
            "data-pad-unavailable": !wm.userInput && !Om || void 0,
            "data-pad-repeat": null !== (Am = (0, vh.b)(wm)) && void 0 !== Am ? Am : void 0,
            "data-pad-repeat-wait": om.awaitingPurchase || void 0,
            onClick: () => {
              if (Ym && Sm.current) {
                if (Zm !== xm) return void bm(xm);
                bm(null)
              }
              wm.userInput || jm()
            },
            onPointerDown: mm => {
              Ym && (Sm.current = (0, rh.r)(mm))
            },
            onPointerEnter: mm => {
              Ym && !(0, rh.r)(mm) && bm(xm)
            },
            onPointerLeave: mm => {
              Ym && !(0, rh.r)(mm) && bm((mm => mm === xm ? null : mm))
            },
            style: {
              zIndex: Object.keys(om.shopInfo[um].items).length - Tm
            },
            children: [om.redDotInfo.itemHasRedDot(um, mm) && (0, pm.jsx)(Dm.e, {
              top: "-6px",
              right: "-6px"
            }), wm.badge && (0, pm.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, pm.jsx)("div", {
                className: am()("ShopBadgeMain", wm.badge.type),
                children: (0, pm.jsx)(lh.b, {
                  text: wm.badge.text
                })
              })
            }), (0, pm.jsx)("div", {
              className: "ShopItemLeft",
              children: wm.image && (0, pm.jsx)(Ra, {
                item: wm,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, pm.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, pm.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, pm.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, pm.jsx)(lh.b, {
                    text: qm
                  })
                }), (0, pm.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, pm.jsx)(lh.b, {
                    text: wm.description
                  })
                })]
              }), wm.userInput && (0, pm.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: mm => {
                  mm.stopPropagation()
                },
                children: [(0, pm.jsx)(oa, {
                  item: wm,
                  currInput: Rm,
                  updateInput: Tm => {
                    ((mm, Tm, fm) => {
                      const hm = wa(mm, Tm),
                        Am = {
                          ...om.userInputsPerItem
                        };
                      Am[hm] = fm, Pm({
                        userInputsPerItem: Am
                      })
                    })(um, mm, Tm)
                  },
                  onSubmit: mm => {
                    jm(mm)
                  }
                }), ("dropdown" !== wm.userInput.type || !wm.userInput.autoSubmit) && (0, pm.jsx)(im.e, {
                  className: "ItemCostButton",
                  disabled: !Om && null !== Rm,
                  onClick: () => {
                    jm()
                  },
                  children: (0, pm.jsx)(Ea, {
                    item: wm,
                    cost: Em,
                    currencyAmounts: om.currencyAmounts
                  })
                })]
              })]
            }), !wm.userInput && (0, pm.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, pm.jsx)(Ea, {
                item: wm,
                cost: Em,
                currencyAmounts: om.currencyAmounts
              })
            }), Ym && Zm === xm && (0, pm.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, pm.jsx)(lh.b, {
                text: qm
              }), (0, pm.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, pm.jsx)(lh.b, {
                  text: (0, Ch.c)("", Ym.enchantments, Ym.enchantmentData)
                })
              })]
            })]
          }, xm)
        },
        tm = function(mm) {
          for (const Tm in mm)
            if (mm[Tm].smp) return !0;
          return !1
        }(om.shopInfo),
        Um = OA(om.shopInfo, um);
      return (0, pm.jsx)(Xh.c, {
        className: "Menu ShopBody",
        show: Am,
        children: 0 !== Object.keys(om.shopInfo).length && (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, pm.jsx)(Em, {
              items: dh(om.shopInfo).map((mm => {
                var Tm;
                return {
                  id: mm,
                  title: null !== (Tm = om.shopInfo[mm].customTitle) && void 0 !== Tm ? Tm : mm,
                  redDot: om.redDotInfo.categoryHasRedDot(mm)
                }
              })),
              link: Rm ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Uh.h)({
                    page: (0, Uh.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: um,
              onClick: lm,
              padStartsOnTab: (0, vh.d)(um)
            }), (0, pm.jsx)("div", {
              className: "MenuSideBarFooter",
              children: om.currencyAmounts && Object.keys(om.currencyAmounts).map((mm => {
                var Tm;
                const fm = om.currencyAmounts[mm];
                return fm.hidden ? null : (0, pm.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (em ? "SmallText" : ""),
                  children: [(0, pm.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, pm.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: fm.iconColour
                      },
                      children: (0, pm.jsx)(ja, {
                        iconName: fm.icon
                      })
                    }), "\xa0", (0, Hh.c)(fm.amount, 6)]
                  }), (null === (Tm = fm.subtext) || void 0 === Tm ? void 0 : Tm.length) > 0 && (0, pm.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, pm.jsx)(lh.b, {
                      text: fm.subtext
                    })
                  })]
                }, mm)
              }))
            })]
          }), (0, pm.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [tm && (0, pm.jsx)(aa, {
              show: Am,
              shopInfo: om.shopInfo,
              selectedCategoryKey: um,
              buy: (mm, Tm, fm) => {
                rm(mm, Tm, fm)
              },
              canAfford: Bm,
              message: om.onBoughtInfo
            }), null === Um && (0, pm.jsxs)(pm.Fragment, {
              children: [(0, pm.jsx)("div", {
                className: am()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== om.onBoughtInfo
                }),
                children: (0, pm.jsx)(lh.b, {
                  text: qm.current
                })
              }), (0, pm.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, pm.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Tm = om.shopInfo[um]) || void 0 === Tm ? void 0 : Tm.description) && (0, pm.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, pm.jsx)(lh.b, {
                      text: om.shopInfo[um].description
                    })
                  }), Am && (0, pm.jsx)("div", {
                    className: "ShopItems",
                    ref: Im,
                    "data-pad-initial-area": !0,
                    children: dh(null === (fm = om.shopInfo[um]) || void 0 === fm ? void 0 : fm.items).map(((mm, Tm) => Lm(mm, Tm)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Ra(mm) {
      let {
        item: Tm,
        minWidth: fm,
        minHeight: hm
      } = mm;
      const {
        image: Am,
        schematicId: am,
        imageColour: xm
      } = Tm;
      if (am) return (0, pm.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${fm}rem`,
          height: `${hm}rem`
        },
        children: (0, pm.jsx)(Mh.c, {
          game: {
            schematicId: am
          }
        })
      });
      var Dm, im;
      if ((0, sh.f)(Am)) return (0, pm.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${fm}rem`,
          height: "0",
          minHeight: `${hm}rem`
        },
        children: (0, pm.jsx)(sh.d, {
          itemName: Am,
          amount: null !== (Dm = Tm.amount) && void 0 !== Dm ? Dm : 0,
          amountFontSize: hm / 4 + "rem",
          enchantmentTier: null === (im = Tm.enchant) || void 0 === im ? void 0 : im.tier
        })
      });
      const Rm = Am.slice(-4);
      return ".jpg" === Rm || ".png" === Rm ? (0, pm.jsx)(pa, {
        image: Am,
        minWidth: fm
      }) : (0, pm.jsx)(wm.c, {
        name: Am,
        className: "SelectedItemImage",
        style: {
          color: xm
        }
      })
    }

    function pa(mm) {
      let {
        image: Tm,
        minWidth: fm
      } = mm;
      const {
        gameNameWithVariation: hm
      } = (0, bT.k)("connectedGame"), Am = Tm.endsWith(".jpg");
      return (0, pm.jsx)("img", {
        className: am()({
          ShopPixelImage: !Am
        }),
        style: {
          width: `${Am?1.6*fm:fm}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Cm.Pb)(hm)}/${Tm}`,
        alt: Tm,
        draggable: !1
      })
    }

    function Ea(mm) {
      let {
        item: Tm,
        cost: fm,
        currencyAmounts: hm
      } = mm;
      const Am = !isNaN(fm) && 0 !== fm && Da(hm, Tm.currency);
      let am = null;
      return Tm.buyButtonText ? am = Tm.buyButtonText : Am ? (am = fm, Tm.sell && (am = -1 * fm), am = am.toString()) : 0 === fm ? am = "Free" : Tm.isRewardedAd && (am = "Watch ad"), (0, Tf.H)(am) || " " === am ? null : (0, pm.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Am && (0, pm.jsx)("div", {
          style: {
            color: hm[Tm.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, pm.jsx)(ja, {
            iconName: hm[Tm.currency].icon
          })
        }), (0, pm.jsx)("div", {
          className: "BuyItemCost",
          children: (0, pm.jsx)(lh.b, {
            text: am
          })
        })]
      })
    }

    function oa(mm) {
      let {
        item: Tm,
        currInput: fm,
        updateInput: Am,
        onSubmit: am
      } = mm;
      const {
        t: wm
      } = (0, xm.A)(), Dm = (0, hm.useRef)(null);
      if ((0, hm.useEffect)((() => {
          const mm = Dm.current;
          mm && mm.value !== fm && document.activeElement !== mm && (mm.value = null !== fm && void 0 !== fm ? fm : "")
        }), [fm]), !Tm.userInput) return null;
      let im = Tm.userInput;
      if (jm.featureFlags.sanitizeShopInput && "text" === Tm.userInput.type && (im = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === im.type || "number" === im.type) {
        var Rm, Em;
        console.assert(void 0 !== fm, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Tm)}`);
        const mm = "text" === im.type && im.wordCharsOnly;
        return (0, pm.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, pm.jsx)(Qm.e, {
            className: "ShopItemUserInputText",
            placeholderText: wm(im.placeholderText),
            defaultValue: fm,
            domRef: Dm,
            onValueChange: (Tm, fm) => {
              !0 === mm && (Tm = (0, Bh._)(Tm)), Dm.current.value = Tm, Am(Tm)
            },
            onEnter: am,
            type: im.type
          }, (null !== (Rm = im.initialValue) && void 0 !== Rm ? Rm : "") + (null !== (Em = im.placeholderText) && void 0 !== Em ? Em : ""))
        })
      }
      if ("dropdown" === im.type) {
        console.assert(void 0 !== fm, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Tm)}`);
        const mm = im.autoSubmit;
        return (0, pm.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, pm.jsx)(zT.d, {
            options: im.dropdownOptions.map((mm => (0, yh.g)(mm))),
            value: fm,
            onChange: Tm => {
              let {
                value: fm
              } = Tm;
              Am(fm), mm && am(fm)
            }
          })
        })
      }
      return "player" === im.type ? (0, pm.jsx)(Oa, {
        userInput: im,
        currInput: fm,
        updateInput: Am
      }) : "color" === im.type ? (0, pm.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, pm.jsx)("input", {
          type: "color",
          value: fm,
          onChange: mm => {
            Am(mm.target.value)
          }
        })
      }) : null
    }

    function Oa(mm) {
      let {
        userInput: Tm,
        currInput: fm,
        updateInput: hm
      } = mm;
      const Am = (0, bT.k)("players"),
        am = (0, bT.k)("hiddenPlayerNames"),
        xm = (0, yh.i)(Am.ids, Am.localId, Tm);
      return (0, pm.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, pm.jsx)(zT.d, {
          options: xm.map((mm => {
            const {
              name: Tm
            } = Am.byId[mm];
            return {
              value: mm,
              label: null === Tm ? "" : (0, uh.f)(Tm, am)
            }
          })),
          value: fm,
          onChange: mm => {
            let {
              value: Tm
            } = mm;
            hm(Tm)
          }
        })
      })
    }

    function Ya(mm) {
      let {
        ids: Tm
      } = mm;
      return Tm
    }

    function qa(mm) {
      let {
        localId: Tm
      } = mm;
      return Tm
    }

    function ja(mm) {
      let {
        iconName: Tm
      } = mm;
      return Vm.gameBridge.lookup("isItemName", Tm) ? (0, pm.jsx)(sh.d, {
        itemName: Tm,
        amount: 1
      }) : (0, pm.jsx)(wm.c, {
        name: Tm,
        className: "2x"
      })
    }
    var Va = fm(1635);
    const Ia = (0, fm(1406).k)((mm => mm.PadLobbyShortcuts)),
      Ka = (0, hm.lazy)((() => Promise.resolve().then((() => fm(4595))).then((mm => ({
        default: mm.Lobbyleaderboard
      }))))),
      Qa = (0, hm.lazy)((() => fm.e(220).then((() => fm(41134))).then((mm => ({
        default: mm.LobbyManageView
      })))));

    function na(mm) {
      let {
        show: Tm
      } = mm;
      return Tm ? (0, pm.jsx)(Ja, {}) : null
    }

    function Ja() {
      const mm = (0, th.e)();
      return (0, pm.jsxs)(pm.Fragment, {
        children: [(0, pm.jsx)(Ia, {}), (0, pm.jsxs)(hm.Suspense, {
          fallback: (0, pm.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, pm.jsx)(nm.c, {})
          }),
          children: [mm && (0, pm.jsx)(Qa, {
            leaderboard: (0, pm.jsx)(Ka, {})
          }), !mm && (0, pm.jsx)(Ka, {})]
        })]
      })
    }
    var ca = fm(1563),
      za = fm(3016),
      Za = fm(1713),
      ka = fm(3070),
      ba = fm(2679),
      Sa = fm(1491),
      ea = fm(1456),
      Na = fm(2995),
      Ga = fm(3010),
      Xa = fm(2303);
    const Pa = "storeRecentGiftRecipients",
      Ha = new Map;

    function ya() {
      try {
        const mm = Af.g.getItem(Pa);
        return Array.isArray(mm) ? mm.filter((mm => "string" === typeof(null === mm || void 0 === mm ? void 0 : mm.name) && mm.name.length > 0)).map((mm => ({
          name: mm.name,
          cosmetics: mm.cosmetics && "object" === typeof mm.cosmetics ? mm.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Ca(mm) {
      var Tm;
      const [fm, Am] = (0, hm.useState)(""), [am, xm] = (0, hm.useState)("search"), [wm, Dm] = (0, hm.useState)(null), [im, Rm] = (0, hm.useState)(null), pm = (0, hm.useRef)(null), Em = (0, hm.useRef)(null);
      (0, hm.useEffect)((() => () => {
        pm.current && clearTimeout(pm.current)
      }), []);
      const om = null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.name) && void 0 !== Tm ? Tm : null;

      function Om() {
        pm.current && (clearTimeout(pm.current), pm.current = null)
      }(0, hm.useEffect)((() => {
        if (null === om || mm === bm.NULL_USER_CONTEXT) return;
        const Tm = om.toLowerCase();
        if (Tm === mm.getPlayerName().toLowerCase()) return void Rm({
          name: om,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const fm = Ha.get(Tm);
        if (fm) return void Rm({
          name: om,
          result: fm
        });
        let hm = !1;
        return async function(mm, Tm) {
          try {
            const fm = await (0, bm.postJsonWithMetricsCookiesAndJsonResponse)(`${wT.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Tm
            }, {
              retries: 1
            }, mm.getMetricsCookies());
            if ("boolean" !== typeof(null === fm || void 0 === fm ? void 0 : fm.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(fm)}`);
            return fm
          } catch (fm) {
            return console.error("Failed to look up gift recipient:", fm), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(mm, om).catch((mm => (console.error("Gift recipient lookup failed:", mm), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((mm => {
          !0 !== mm.giftRecipientFound && "store:giftRecipientLookupFailed" === mm.giftRecipientError || Ha.set(Tm, mm), hm || Rm({
            name: om,
            result: mm
          })
        })), () => {
          hm = !0
        }
      }), [om, mm]);
      const Ym = (0, hm.useMemo)((() => {
        const mm = fm.trim();
        if (!mm) return {
          status: "none"
        };
        if (!wm || wm.name !== mm || (null === im || void 0 === im ? void 0 : im.name) !== wm.name) return {
          status: "pending",
          name: mm
        };
        const Tm = im.result;
        return !1 === Tm.giftRecipientFound ? {
          status: "error",
          name: wm.name,
          error: Tm.giftRecipientError
        } : {
          status: "found",
          name: Tm.giftRecipientName,
          ownedPacks: Tm.giftRecipientOwnedPacks,
          hasSuperRank: Tm.giftRecipientHasSuperRank,
          isSubscriber: Tm.giftRecipientIsSubscriber
        }
      }), [fm, wm, im]);
      (0, hm.useEffect)((() => {
        "found" === Ym.status && "typed" === (null === wm || void 0 === wm ? void 0 : wm.source) && Em.current !== Ym.name && (Em.current = Ym.name, (0, Fm.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Ym, wm]);
      const qm = (null === im || void 0 === im ? void 0 : im.name) === (null === wm || void 0 === wm ? void 0 : wm.name) ? null === im || void 0 === im ? void 0 : im.result : null,
        jm = !0 === (null === qm || void 0 === qm ? void 0 : qm.giftRecipientFound) ? qm.giftRecipientCosmetics : null;
      return {
        query: fm,
        via: am,
        recipient: Ym,
        recipientCosmetics: jm,
        type: function(mm) {
          Am(mm), xm("search"), Om();
          const Tm = mm.trim();
          Tm ? pm.current = setTimeout((() => {
            Dm({
              name: Tm,
              source: "typed"
            })
          }), 400) : Dm(null)
        },
        choose: function(mm, Tm) {
          Om(), Am(mm), xm("typed" === Tm ? "search" : "prefilled" === Tm ? "prefilled" : "suggestion"), Dm({
            name: mm,
            source: Tm
          }), "typed" !== Tm && "prefilled" !== Tm && (0, Fm.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Tm
          })
        },
        clear: function() {
          Om(), Am(""), xm("search"), Dm(null)
        },
        recordGift: function(mm, Tm) {
          ! function(mm) {
            Ha.delete(mm.toLowerCase())
          }(mm), Rm((fm => {
            if (!fm || fm.name.toLowerCase() !== mm.toLowerCase() || !0 !== fm.result.giftRecipientFound || "superRank" === Tm) return fm;
            const hm = fm.result.giftRecipientOwnedPacks;
            return {
              ...fm,
              result: {
                ...fm.result,
                giftRecipientOwnedPacks: hm.includes(Tm) ? hm : [...hm, Tm]
              }
            }
          }))
        }
      }
    }
    var ra = fm(2301),
      sa = fm(4604),
      la = fm(269),
      Ma = fm(3117);
    const ua = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ba = fm(2246),
      La = fm(641),
      va = fm(2332),
      ta = fm(2588);

    function Ua(mm) {
      let {
        cosmetics: Tm
      } = mm;
      return (0, pm.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, pm.jsx)(va.d, {
          cosmetics: Tm
        })
      })
    }

    function da(mm, Tm) {
      var fm, hm;
      const Am = null !== (fm = mm.friend) && void 0 !== fm ? fm : {
        isError: !1,
        name: mm.name,
        ranks: [],
        cosmetics: null !== (hm = mm.cosmetics) && void 0 !== hm ? hm : {},
        nameColour: La.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return Tm ? {
        ...Am,
        cosmetics: Tm
      } : Am
    }

    function ga(mm) {
      let {
        pending: Tm
      } = mm;
      return (0, pm.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Tm && (0, pm.jsx)(nm.c, {})
      })
    }

    function Wa(mm) {
      var Tm;
      let {
        selfName: fm,
        giftRecipient: Am,
        suggestionsVersion: Dm,
        pulseSignal: Rm,
        disabled: Em
      } = mm;
      const {
        t: om
      } = (0, xm.A)(), Om = (0, Mm.i)(), Ym = (0, hm.useRef)(null), qm = (0, hm.useRef)(null), {
        query: Vm,
        via: Im,
        recipient: Km,
        recipientCosmetics: nm
      } = Am, Jm = (0, Xa.k)(Vm), cm = (0, hm.useMemo)((() => {
        const mm = jm.featureFlags.useSocialFeatures ? Om.friends.filter((mm => !mm.isError)) : [];
        return (0, Xa.g)({
          onlineFriends: (0, Mm.g)(mm),
          recentRecipients: ya(),
          friends: mm,
          selfName: fm,
          max: 8
        })
      }), [Om.friends, fm, Dm]), zm = Vm.trim().toLowerCase(), Zm = "search" !== Im && zm ? cm.find((mm => mm.name.toLowerCase() === zm)) : void 0, km = Zm && "prefilled" === Im ? [Zm, ...cm.filter((mm => mm !== Zm))] : cm, bm = "" !== zm && !Zm, Sm = bm ? Vm : "", em = km.length > 0;
      (0, hm.useEffect)((() => {
        Ym.current && Ym.current.value !== Sm && (Ym.current.value = Sm)
      }), [Sm]), (0, hm.useEffect)((() => {
        Ym.current && (Ym.current.disabled = Em)
      }), [Em, Rm]);
      const Nm = (0, hm.useRef)(0);

      function Xm() {
        "self" !== Jm && (0, Fm.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Am.clear()
      }

      function Pm(mm) {
        var Tm, fm;
        if (Em) return;
        if (" " === mm.key || "Enter" === mm.key) return mm.preventDefault(), void mm.currentTarget.click();
        const hm = Array.from(null !== (Tm = null === (fm = qm.current) || void 0 === fm ? void 0 : fm.querySelectorAll("[role=radio]")) && void 0 !== Tm ? Tm : []),
          Am = hm.indexOf(mm.currentTarget);
        let am;
        "ArrowRight" === mm.key || "ArrowDown" === mm.key ? am = hm[(Am + 1) % hm.length] : "ArrowLeft" === mm.key || "ArrowUp" === mm.key ? am = hm[(Am - 1 + hm.length) % hm.length] : "Home" === mm.key ? am = hm[0] : "End" === mm.key && (am = hm[hm.length - 1]), am && (mm.preventDefault(), am.focus(), am.click())
      }(0, hm.useEffect)((() => {
        var mm;
        Rm > Nm.current && !Em && (Nm.current = Rm, null === (mm = Ym.current) || void 0 === mm || mm.focus())
      }), [Rm, Em]);
      const Hm = "self" === Jm,
        ym = null !== (Tm = null === Zm || void 0 === Zm ? void 0 : Zm.name) && void 0 !== Tm ? Tm : null,
        Cm = "error" === Km.status ? Km.error : null,
        rm = "store:giftRecipientLookupFailed" === Cm;
      return (0, pm.jsxs)("div", {
        className: am()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Em,
          StoreRecipientStripNoChips: !em
        }),
        children: [(0, pm.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: om("store:buyingFor")
        }), (0, pm.jsxs)("div", {
          ref: qm,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": om("store:whoIsItFor"),
          children: [(0, pm.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Hm,
            tabIndex: Em || !Hm && null !== ym ? -1 : 0,
            className: am()("StoreRecipientMe", {
              StoreRecipientChecked: Hm
            }),
            onClick: () => {
              Em || Xm()
            },
            onKeyDown: Pm,
            children: [(0, pm.jsx)(wm.c, {
              name: "user"
            }), " ", om("store:me")]
          }), em && (0, pm.jsx)("div", {
            className: "StoreRecipientChips",
            children: km.map((mm => {
              const Tm = mm === Zm;
              return (0, pm.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Tm,
                tabIndex: !Em && Tm ? 0 : -1,
                title: mm.name,
                className: am()("StoreRecipientChip", {
                  StoreRecipientChecked: Tm
                }),
                onClick: () => {
                  Em || function(mm) {
                    "gift" !== Jm && (0, Fm.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Am.choose(mm.name, mm.kind)
                  }(mm)
                },
                onKeyDown: Pm,
                children: (0, pm.jsx)(ta.f, {
                  playerSocialPreview: da(mm, Tm ? nm : null),
                  opensProfileCard: !1,
                  isFriend: null !== mm.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== mm.friend,
                  status: null === mm.friend ? null : void 0,
                  trailing: Tm ? (0, pm.jsx)(ga, {
                    pending: "pending" === Km.status
                  }) : void 0
                })
              }, mm.name)
            }))
          })]
        }), (0, pm.jsxs)("div", {
          className: am()("StoreRecipientSearch", {
            StoreRecipientChecked: bm,
            StoreRecipientSearchPulse: Rm > 0 && !bm,
            StoreRecipientSearchError: null !== Cm && !rm
          }),
          onClick: () => {
            var mm;
            null === (mm = Ym.current) || void 0 === mm || mm.focus()
          },
          children: [bm && "found" === Km.status && nm && (0, pm.jsx)(Ua, {
            cosmetics: nm
          }), !(bm && "found" === Km.status && nm) && (0, pm.jsx)(wm.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, pm.jsx)(Qm.e, {
            className: "StoreRecipientSearchInput",
            domRef: Ym,
            placeholderText: om("store:searchName"),
            defaultValue: Sm,
            maxLength: Gm.j,
            onValueChange: function(mm) {
              "gift" !== Jm && mm.trim() && (0, Fm.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Am.type(mm)
            },
            onEnter: () => {
              var mm;
              const Tm = null === (mm = Ym.current) || void 0 === mm ? void 0 : mm.value.trim();
              Tm && Am.choose(Tm, "typed")
            },
            blurOnEnter: !0
          }), bm && (0, pm.jsx)(ga, {
            pending: "pending" === Km.status
          }), bm && (0, pm.jsx)("div", {
            ...(0, im.Z)({
              disabled: Em
            }),
            "aria-label": om("store:clearRecipient"),
            title: om("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: mm => {
              mm.stopPropagation(), Em || Xm()
            },
            children: (0, pm.jsx)(wm.c, {
              name: "xmark"
            })
          })]
        }, Rm), Cm && (0, pm.jsx)("div", {
          className: am()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: rm
          }),
          role: "status",
          children: om(Cm)
        })]
      })
    }
    var Fa = fm(2295),
      mx = fm(2224),
      Tx = fm(3582),
      fx = fm(3121),
      hx = fm(2253);
    const Ax = fm.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function ax() {
      (0, hx.l)(Ax, {
        lowPriority: !1
      })
    }

    function xx(mm) {
      let {
        onBack: Tm,
        cta: fm,
        recipient: Am,
        afterCta: am
      } = mm;
      const {
        t: Dm
      } = (0, xm.A)(), [Rm, Em] = (0, hm.useState)("starting"), om = (0, hm.useRef)(null), Om = (0, sT.c)(), Ym = (0, hm.useRef)(null), qm = (0, hm.useCallback)((() => {
        const mm = om.current;
        null !== mm.error && mm.load();
        const Tm = mm.play();
        Ym.current = Tm, Tm.catch((mm => {
          (0, Tx.c)("Failed to play Super Rank video", mm), Om.current && Ym.current === Tm && Em("failed")
        }))
      }), [Om]);
      return (0, hm.useEffect)((() => {
        const mm = om.current;
        let Tm;

        function fm() {
          clearTimeout(Tm), Tm = setTimeout(qm, 3e3)
        }
        return qm(), mm.addEventListener("ended", fm), () => {
          clearTimeout(Tm), mm.removeEventListener("ended", fm)
        }
      }), [qm]), (0, pm.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, pm.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, pm.jsx)(im.d, {
            className: "StoreDetailBackButton",
            onClick: Tm,
            padBack: !0,
            children: Dm("general:back")
          }), (0, pm.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pm.jsx)(wm.c, {
              name: "bolt"
            }), " ", Dm("homePage:superRank")]
          }), Am]
        }), (0, pm.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, pm.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, pm.jsx)("video", {
              ref: om,
              src: `${wT.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Ax,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Rm,
              onPlaying: () => {
                Em("playing")
              },
              onError: () => {
                Em("failed")
              }
            }), ("failed" === Rm || "loading" === Rm) && (0, pm.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, pm.jsx)(im.e, {
                ariaLabel: Dm("general:play"),
                loading: "loading" === Rm,
                onClick: () => {
                  Em("loading"), qm()
                },
                touchPressOn: "pointerup",
                children: (0, pm.jsx)(wm.c, {
                  name: "play"
                })
              })
            })]
          }), (0, pm.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, pm.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, pm.jsx)(fx.b, {})
            }), (0, pm.jsxs)("div", {
              className: "StoreTileActions",
              children: [fm, am]
            })]
          })]
        })]
      })
    }
    var wx = fm(2608),
      Dx = fm(3545),
      ix = fm(3105),
      Rx = fm(3109);
    const px = [La.o.yellow, La.o.green, La.o.aqua, La.o.blue, La.o.purple, La.o.red];

    function Ex(mm) {
      return "needsRecipient" === mm || "lookingUp" === mm || "gift" === mm || "recipientOwns" === mm || "recipientSharesOwned" === mm || "recipientSubscribed" === mm
    }

    function ox(mm) {
      const {
        onKeyDown: Tm,
        ...fm
      } = (0, im.Z)();
      return {
        ...fm,
        "aria-label": mm,
        onKeyDown: mm => {
          mm.target === mm.currentTarget && (null === Tm || void 0 === Tm || Tm(mm))
        }
      }
    }

    function Ox(mm) {
      let {
        text: Tm
      } = mm;
      return (0, pm.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Tm).map(((mm, Tm) => (0, pm.jsx)("span", {
          style: {
            color: px[Tm % px.length]
          },
          children: mm
        }, Tm)))
      })
    }
    const Yx = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function qx(mm) {
      let {
        state: Tm,
        item: fm,
        price: hm,
        busy: Am,
        highlight: Dm = !1,
        onAct: Rm,
        onNeedRecipient: Em,
        onLogin: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = "superRank" === fm ? Pm.n.product.days : null, qm = mm => null === Ym ? Om(mm ? "general:gift" : "general:buy") : Om(mm ? "store:giftDays" : "store:buyDays", {
        days: Ym
      }), jm = (mm, Tm) => {
        const fm = (0, pm.jsxs)(pm.Fragment, {
          children: [null === mm && (0, pm.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== mm && (0, pm.jsx)("span", {
            className: "StoreCtaLabel",
            title: mm,
            children: mm
          })]
        });
        return null !== Ym ? (0, pm.jsxs)(pm.Fragment, {
          children: [Tm && (0, pm.jsx)("span", {
            className: "StoreCtaIcon",
            children: Tm
          }), fm, (0, pm.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, pm.jsx)(mx.d, {
              amount: hm
            })]
          })]
        }) : (0, pm.jsxs)(pm.Fragment, {
          children: [(0, pm.jsxs)("span", {
            className: "StoreCtaLead",
            children: [fm, "\xb7"]
          }), (0, pm.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Tm, (0, pm.jsx)(mx.d, {
              amount: hm
            })]
          })]
        })
      };
      let Vm;
      switch (Tm) {
        case "pending":
          Vm = (0, pm.jsx)(im.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: jm(null)
          });
          break;
        case "login":
          Vm = (0, pm.jsx)(im.m, {
            className: "StoreCtaButton",
            onClick: om,
            children: jm(qm(!1))
          });
          break;
        case "owned":
          Vm = (0, pm.jsx)(im.g, {
            className: "StoreCtaButton",
            onClick: () => {
              cm.c.set({
                openEverythingMenuName: pT.n.CUSTOMISATION
              })
            },
            children: (0, pm.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, pm.jsx)(wm.c, {
                name: "shirt"
              }), " ", Om("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Vm = (0, pm.jsx)(im.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, pm.jsx)("span", {
              className: "StoreCtaLabel",
              children: Om(Yx[Tm])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Vm = (0, pm.jsx)(im.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Tm || null === hm,
            loading: "lookingUp" === Tm || Am,
            onClick: Rm,
            analyticsClick: {
              id: "store.gift",
              value: fm
            },
            children: jm(qm(!0), Xa.c)
          });
          break;
        case "buy":
        case "recharge":
          Vm = (0, pm.jsx)(im.m, {
            className: "StoreCtaButton",
            loading: Am,
            disabled: null === hm,
            onClick: Rm,
            analyticsClick: {
              id: "store.buy",
              value: fm
            },
            children: jm(qm(!1))
          })
      }
      return (0, pm.jsx)("div", {
        className: am()("StoreCta", {
          StoreCtaHighlight: Dm,
          StoreCtaLabelFirst: null !== Ym
        }),
        onClick: mm => {
          mm.stopPropagation(), "needsRecipient" === Tm && Em()
        },
        children: Vm
      })
    }

    function jx() {
      const {
        t: mm
      } = (0, xm.A)();
      return (0, pm.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, pm.jsxs)("li", {
          children: [(0, pm.jsx)(wm.c, {
            name: "check"
          }), (0, pm.jsx)(Ox, {
            text: mm("store:colourfulNames")
          })]
        }), (0, pm.jsxs)("li", {
          children: [(0, pm.jsx)(wm.c, {
            name: "check"
          }), mm("store:perkCapes")]
        }), (0, pm.jsxs)("li", {
          children: [(0, pm.jsx)(wm.c, {
            name: "check"
          }), mm("store:perkNoAdverts")]
        }), (0, pm.jsxs)("li", {
          children: [(0, pm.jsx)(wm.c, {
            name: "check"
          }), mm("store:perkFriends", {
            count: (0, gm.e)(["super"])
          })]
        })]
      })
    }

    function Vx(mm) {
      let {
        daysLeft: Tm,
        totalDays: fm,
        urgent: hm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)(), wm = fm > 0 ? Math.min(1, Math.max(.03, Tm / fm)) : 1;
      return (0, pm.jsxs)("div", {
        className: am()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: hm
        }),
        children: [(0, pm.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Tm ? Am("store:oneDayLeft") : Am("store:daysLeft", {
            days: Tm
          })
        }), (0, pm.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, pm.jsx)("i", {
            style: {
              width: 100 * wm + "%"
            }
          })
        })]
      })
    }

    function Ix(mm) {
      let {
        state: Tm,
        urgent: fm,
        daysLeft: hm,
        totalDays: Am,
        recipientHasSuperRank: Dm,
        busy: im,
        highlight: Rm,
        onOpen: Em,
        onAct: om,
        onNeedRecipient: Om,
        onLogin: Ym
      } = mm;
      const {
        t: qm
      } = (0, xm.A)(), jm = Ex(Tm), {
        days: Vm
      } = Pm.n.product, Im = qm("store:recipientHasSuperRank", {
        giftDays: Vm
      }), Km = Um("subscribed" === Tm);
      return (0, pm.jsxs)("div", {
        className: am()("StoreTile StoreSuperRankTile", {
          StoreTileGift: jm,
          StoreSuperRankTileUrgent: "recharge" === Tm && fm,
          StoreSuperRankTileWithChip: Dm,
          StoreSuperRankTileGiftReady: "gift" === Tm
        }),
        ...ox(qm("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: ax,
        onFocus: ax,
        onClick: Em,
        children: [(0, pm.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ba.i})`
          }
        }), jm && (0, pm.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pm.jsxs)("div", {
          className: "StoreTileContent",
          children: [Dm && (0, pm.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Im,
            children: Im
          }), (0, pm.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pm.jsx)(wm.c, {
              name: "bolt"
            }), " ", qm("homePage:superRank")]
          }), jm && (0, pm.jsx)("div", {
            className: "StoreTilePitch",
            children: qm("store:giftPitch", {
              days: Vm
            })
          }), "recharge" === Tm && (0, pm.jsx)(Vx, {
            daysLeft: hm,
            totalDays: Am,
            urgent: fm
          }), Km && (0, pm.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, pm.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Km
            })
          }), (0, pm.jsx)(jx, {}), (0, pm.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, pm.jsx)(qx, {
              state: Tm,
              item: "superRank",
              price: Pm.n.price,
              busy: im,
              highlight: Rm,
              onAct: om,
              onNeedRecipient: Om,
              onLogin: Ym
            }), "needsRecipient" === Tm && (0, pm.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: qm("store:pickRecipientFirst")
            }), "recharge" === Tm && fm && (0, pm.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === hm ? qm("store:endsInOneDay") : qm("store:endsInDays", {
                days: hm
              })
            })]
          })]
        })]
      })
    }
    const Kx = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Qx(mm) {
      var Tm;
      let {
        pack: fm,
        state: Am,
        busy: Dm,
        onOpen: im,
        onAct: Rm,
        onNeedRecipient: Em,
        onLogin: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = ca.b[fm], qm = Na.k[fm], jm = (0, Ba.n)(fm), Vm = (0, hm.useRef)(null);
      (0, ix.j)(fm, Vm);
      const Im = Ex(Am),
        Km = null !== (Tm = Ym.displayName) && void 0 !== Tm ? Tm : fm,
        Qm = (0, Dx.e)((() => {
          (0, wx.f)();
          const mm = (0, ix.h)(fm);
          void 0 !== mm && (0, hx.l)((0, ix.d)(mm))
        })),
        [nm] = (0, hm.useState)(Ma.l);
      return (0, pm.jsxs)("div", {
        className: am()("StoreTile StorePackTile", Kx[Ym.tier], {
          StorePackTileOwned: "owned" === Am,
          StorePackTileRecipientOwns: "recipientOwns" === Am,
          StoreTileGift: Im
        }),
        ...ox(Km),
        ref: Vm,
        "data-store-item": fm,
        onClick: im,
        onPointerMove: mm => {
          "mouse" !== mm.pointerType || 0 === mm.movementX && 0 === mm.movementY || nm || Qm.start()
        },
        onPointerLeave: Qm.cancel,
        children: [qm && (0, pm.jsx)(qm, {}), (0, pm.jsx)("div", {
          className: "StorePackCharacters",
          children: jm.map((mm => (0, pm.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ba.j)(mm)})`
            }
          }, mm)))
        }), (0, pm.jsx)("div", {
          className: "StoreTileScrim"
        }), Im && (0, pm.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pm.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, pm.jsx)("div", {
            className: "StoreTileTitle",
            children: Km
          }), (0, pm.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, pm.jsx)(Rx.e, {
              tier: Ym.tier
            }), " \xb7 ", Om("store:itemCount", {
              count: (0, Fa.h)(fm)
            }), "owned" === Am && (0, pm.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, pm.jsx)(wm.c, {
                name: "check"
              }), " ", Om("general:owned")]
            })]
          }), (0, pm.jsx)(qx, {
            state: Am,
            item: fm,
            price: (0, Pm.h)(fm),
            busy: Dm,
            onAct: Rm,
            onNeedRecipient: Em,
            onLogin: om
          })]
        })]
      })
    }
    var nx = fm(3076),
      Jx = fm(1557),
      cx = fm(1465),
      zx = fm(3571);

    function Zx() {
      return (0, pm.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var kx = fm(1351),
      bx = fm(1572),
      Sx = fm(34319);

    function ex(mm) {
      let {
        character: Tm,
        drawn: fm,
        onDrawn: Am
      } = mm;
      const xm = (0, hm.useRef)(null),
        wm = (0, Sx.f)(Tm);
      return (0, pm.jsx)("div", {
        className: am()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: fm
        }),
        children: (0, pm.jsx)(hm.Suspense, {
          fallback: null,
          children: (0, pm.jsx)(wx.d, {
            ref: xm,
            framing: "store",
            turntableFromYaw: fm ? wm.yaw : null,
            onReady: () => {
              var mm, fm;
              null === (mm = xm.current) || void 0 === mm || mm.setOrbit(wm), null === (fm = xm.current) || void 0 === fm || fm.setAllCosmetics(bx.e[Tm].cosmetics)
            },
            onDrawn: Am
          })
        })
      })
    }
    const Nx = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Gx = new Set(["wildSpirits"]);

    function Xx(mm) {
      var Tm;
      let {
        tile: fm,
        design: Am,
        canGoLive: Dm,
        live: im,
        busy: Rm,
        highlight: Em,
        onLiveStart: om,
        onLiveEnd: Om,
        onOpen: Ym,
        onAct: qm,
        onNeedRecipient: jm,
        onLogin: Vm
      } = mm;
      const {
        t: Im
      } = (0, xm.A)(), {
        pack: Km,
        state: Qm
      } = fm, nm = ca.b[Km], Jm = (0, ca.d)(Km), cm = (0, Ba.l)(Km), zm = Na.k[cm], Zm = Gx.has(cm), {
        tier: km
      } = nm, bm = "legendary" === km || "mythic" === km, Sm = (0, hm.useRef)(null);
      (0, kx.c)(Sm, "epic" === km || bm || Zm);
      const [em, Gm] = (0, hm.useState)(!1);
      return !im && em && Gm(!1), (0, pm.jsxs)("div", {
        ref: Sm,
        className: am()("StoreCharacterCard", `StoreCharacterCard${Am}`, Nx[km], {
          StoreCharacterCardOwned: "owned" === Qm || "recipientOwns" === Qm,
          StoreCharacterCardGift: Ex(Qm),
          StoreCharacterCardItem: void 0 === Jm
        }),
        onPointerMove: mm => {
          "mouse" !== mm.pointerType || 0 === mm.movementX && 0 === mm.movementY || !Dm || im || void 0 === Jm || om()
        },
        onPointerLeave: Om,
        children: [(0, pm.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: zm && (0, pm.jsx)(zm, {
            simple: !0
          })
        }), bm && (0, pm.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, pm.jsxs)(Nm.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Jx.f)({
            kind: "pack",
            pack: Km
          }),
          "data-store-item": Km,
          onClick: mm => {
            (0, cx.b)(mm) && (mm.preventDefault(), Ym())
          },
          children: [(0, pm.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, pm.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, pm.jsx)("div", {
              className: am()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: em
              }),
              style: {
                backgroundImage: `url(${(0,Ba.r)(Km)})`
              }
            }), im && void 0 !== Jm && (0, pm.jsx)(ex, {
              character: Jm,
              drawn: em,
              onDrawn: () => {
                Gm(!0)
              }
            })]
          }), (0, pm.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Tm = nm.displayName) && void 0 !== Tm ? Tm : Km
          }), (0, pm.jsx)(Rx.e, {
            tier: km,
            className: "StoreCharacterTier"
          })]
        }), (0, pm.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Zm && (0, pm.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, pm.jsx)(Zx, {})
        }), "owned" === Qm && (0, pm.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Im("general:owned"),
          "aria-label": Im("general:owned"),
          children: (0, pm.jsx)(wm.c, {
            name: "check"
          })
        }), (0, pm.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, pm.jsx)(qx, {
            state: Qm,
            item: Km,
            price: (0, Pm.h)(Km),
            busy: Rm,
            highlight: Em,
            onAct: qm,
            onNeedRecipient: jm,
            onLogin: Vm
          })
        })]
      })
    }

    function Px(mm) {
      let {
        tiles: Tm,
        busy: fm,
        highlightItem: Am,
        onOpen: am,
        onAct: xm,
        onNeedRecipient: wm,
        onLogin: Dm
      } = mm;
      const im = (0, zx.w)("storeCharacterCardFoil"),
        Rm = (0, zx.w)("storeCharacterCardSpotlight"),
        Em = im ? "Foil" : Rm ? "Spotlight" : "Showcase",
        [om] = (0, hm.useState)(Ma.l),
        [Om, Ym] = (0, hm.useState)(null);
      return (0, pm.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Tm.map((mm => (0, pm.jsx)(Xx, {
          tile: mm,
          design: Em,
          canGoLive: !om,
          live: Om === mm.pack,
          busy: fm,
          highlight: Am === mm.pack,
          onLiveStart: () => {
            Ym(mm.pack)
          },
          onLiveEnd: () => {
            Ym((Tm => Tm === mm.pack ? null : Tm))
          },
          onOpen: () => {
            am(mm.pack)
          },
          onAct: () => {
            xm(mm.pack)
          },
          onNeedRecipient: wm,
          onLogin: () => {
            Dm(mm.pack)
          }
        }, mm.pack)))
      })
    }
    var Hx = fm(34327);

    function yx(mm) {
      let {
        title: Tm
      } = mm;
      return (0, pm.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, pm.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Tm
        })
      })
    }

    function Cx(mm) {
      let {
        mountAtOnce: Tm,
        children: fm
      } = mm;
      const Am = (0, hm.useRef)(null),
        [am, xm] = (0, hm.useState)(Tm),
        wm = (0, Hx.c)();
      return (0, hm.useLayoutEffect)((() => {
        const mm = Am.current;
        mm && mm.getBoundingClientRect().top < mm.parentElement.getBoundingClientRect().bottom && xm(!0)
      }), []), am || wm ? (0, pm.jsx)(pm.Fragment, {
        children: fm
      }) : (0, pm.jsx)("div", {
        ref: Am
      })
    }

    function rx(mm) {
      let {
        layout: Tm,
        mountAtOnce: fm,
        bundleGift: hm,
        superRankTotalDays: Am,
        busy: am,
        highlightItem: wm,
        onOpen: Dm,
        onAct: im,
        onNeedRecipient: Rm,
        onLogin: Em,
        dailyDropTile: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = Tm.packs.filter((mm => void 0 === (0, ca.d)(mm.pack) && !(0, ca.k)(mm.pack))), qm = Tm.packs.filter((mm => void 0 !== (0, ca.d)(mm.pack))), jm = Tm.packs.filter((mm => (0, ca.k)(mm.pack)));
      return (0, pm.jsxs)(pm.Fragment, {
        children: [(0, pm.jsx)(nx.b, {
          className: "StoreSuperGems",
          gift: hm,
          highlightSku: wm,
          leadingTile: om
        }), (0, pm.jsx)(yx, {
          title: Om("store:rank")
        }), (0, pm.jsx)(Ix, {
          state: Tm.superRank.state,
          urgent: Tm.superRank.urgent,
          daysLeft: Tm.superRankDaysLeft,
          totalDays: Am,
          recipientHasSuperRank: Tm.recipientHasSuperRank,
          busy: am,
          highlight: "superRank" === wm,
          onOpen: () => {
            Dm("superRank")
          },
          onAct: () => {
            im("superRank")
          },
          onNeedRecipient: Rm,
          onLogin: () => {
            Em("superRank")
          }
        }), (0, pm.jsxs)(Cx, {
          mountAtOnce: fm,
          children: [(0, pm.jsx)(yx, {
            title: Om("store:bundles")
          }), (0, pm.jsx)("div", {
            className: "StorePackGrid",
            children: Ym.map((mm => (0, pm.jsx)(Qx, {
              pack: mm.pack,
              state: mm.state,
              busy: am,
              onOpen: () => {
                Dm(mm.pack)
              },
              onAct: () => {
                im(mm.pack)
              },
              onNeedRecipient: Rm,
              onLogin: () => {
                Em(mm.pack)
              }
            }, mm.pack)))
          }), (0, pm.jsxs)(Cx, {
            mountAtOnce: fm,
            children: [(0, pm.jsx)(yx, {
              title: Om("store:characters")
            }), (0, pm.jsx)(Px, {
              tiles: qm,
              busy: am,
              highlightItem: wm,
              onOpen: Dm,
              onAct: im,
              onNeedRecipient: Rm,
              onLogin: Em
            }), jm.length > 0 && (0, pm.jsxs)(pm.Fragment, {
              children: [(0, pm.jsx)(yx, {
                title: Om("store:premiumItems")
              }), (0, pm.jsx)(Px, {
                tiles: jm,
                busy: am,
                highlightItem: wm,
                onOpen: Dm,
                onAct: im,
                onNeedRecipient: Rm,
                onLogin: Em
              })]
            })]
          })]
        })]
      })
    }

    function sx(mm) {
      let {
        state: Tm,
        mode: fm,
        giftName: hm,
        busy: Am,
        highlight: am,
        purchaseError: wm,
        onBack: Dm,
        onChooseRecipient: Rm,
        onAct: Em,
        onLogin: om
      } = mm;
      const {
        t: Om
      } = (0, xm.A)(), Ym = Um("gift" !== fm);
      return (0, pm.jsx)(xx, {
        onBack: Dm,
        recipient: "gift" === fm && (0, pm.jsxs)(pm.Fragment, {
          children: [hm && (0, pm.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Om("store:giftFor", {
              name: hm
            }),
            children: [Xa.c, " ", Om("store:giftFor", {
              name: hm
            })]
          }), !hm && (0, pm.jsxs)("div", {
            ...(0, im.Z)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Rm,
            children: [Xa.c, " ", Om("store:chooseRecipient")]
          })]
        }),
        cta: (0, pm.jsx)(qx, {
          state: Tm,
          item: "superRank",
          price: Pm.n.price,
          busy: Am,
          highlight: am,
          onAct: Em,
          onNeedRecipient: Rm,
          onLogin: om
        }),
        afterCta: (0, pm.jsxs)(pm.Fragment, {
          children: [Ym && (0, pm.jsx)("span", {
            className: "StoreTileNote",
            children: Ym
          }), wm && (0, pm.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Om(wm)
          })]
        })
      })
    }
    var lx = fm(149);
    const Mx = lx.m("kind", [lx.w({
      kind: lx.s("refused"),
      heldTierId: lx.M(),
      until: lx.v()
    }), lx.w({
      kind: lx.s("refund"),
      tierId: lx.M(),
      refundedMs: lx.v(),
      forfeitedMs: lx.v(),
      premiumCurrency: lx.v()
    }), lx.w({
      kind: lx.s("none")
    })]);
    async function ux(mm) {
      const Tm = await (0, bm.postJsonWithMetricsCookiesAndJsonResponse)(`${wT.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: mm
      }, {
        retries: 1
      });
      return Mx.parse(Tm)
    }
    var Bx = fm(3041),
      Lx = fm(3080);

    function vx(mm, Tm) {
      const fm = Math.max(1, Math.round(Tm / Cm.k));
      return [1 === fm ? `${mm}OneDay` : mm, {
        days: fm.toLocaleString()
      }]
    }

    function tx() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, sm.purchasesAllowed)() ? (0, pm.jsx)(Ux, {}) : null
    }

    function Ux() {
      const {
        t: mm
      } = (0, xm.A)(), {
        userContext: Tm
      } = (0, Om.e)(), {
        purchaseUnderWay: fm,
        notice: Am,
        subscribe: am
      } = (0, Bx.b)(), [wm, Dm] = (0, hm.useState)(null), [Rm, Em] = (0, hm.useState)(0), [om, Ym] = (0, hm.useState)(!1), qm = (0, hm.useRef)(!0), jm = Tm !== bm.NULL_USER_CONTEXT, Vm = null !== wm && wm.loadedFor === Tm ? wm.offer : null, Im = null === Am || void 0 === Am ? void 0 : Am.pendingIntentId, Km = (0, hm.useRef)(Im);

      function Qm() {
        Em((mm => mm + 1))
      }
      async function nm(mm) {
        Ym(!1), await am(mm), qm.current && Qm()
      }
      if ((0, hm.useEffect)((() => (qm.current = !0, () => {
          qm.current = !1
        })), []), (0, hm.useEffect)((() => {
          void 0 !== Km.current && void 0 === Im && Qm(), Km.current = Im
        }), [Im]), (0, hm.useEffect)((() => {
          if (!jm) return;
          let mm = !1;
          return Ym(!1), async function() {
            const {
              offering: mm
            } = await (0, iT.h)().getOfferings("superRankPage"), Tm = null === mm || void 0 === mm ? void 0 : mm.packages.find((mm => null !== mm.price));
            return void 0 === Tm ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Tm,
              preview: await ux(Tm.productId)
            }
          }().catch((mm => (console.error("Billing: loading the Super Rank subscription or its preview failed:", mm), {
            kind: "loadFailed"
          }))).then((fm => {
            mm || Dm((mm => "loadFailed" === fm.kind && (null === mm || void 0 === mm ? void 0 : mm.loadedFor) === Tm ? mm : {
              loadedFor: Tm,
              offer: fm
            }))
          })), () => {
            mm = !0
          }
        }), [Tm, jm, Rm]), null === Vm) return null;
      if ("loaded" !== Vm.kind) return (0, pm.jsx)(Lx.i, {
        notice: {
          kind: "error",
          key: "unavailable" === Vm.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Jm,
        preview: cm
      } = Vm;
      if ("refused" === cm.kind) return (0, pm.jsx)(Lx.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(cm.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const zm = (0, nx.e)(Jm.price);
      if (om && "refund" === cm.kind) {
        const {
          refundedMs: Tm,
          forfeitedMs: hm,
          premiumCurrency: Am
        } = cm, am = hm + (0 === Am ? Tm : 0), [xm, wm] = vx("payments:subscribeRefundsGemRank", Tm), [Dm, Rm] = vx("payments:subscribeForfeitsGemRank", am);
        return (0, pm.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, pm.jsx)("div", {
            children: mm("payments:subscribeEndsGemRank")
          }), Am > 0 && (0, pm.jsx)("div", {
            children: mm(xm, {
              ...wm,
              amount: Am.toLocaleString()
            })
          }), am > 0 && (0, pm.jsx)("div", {
            children: mm(Dm, Rm)
          }), (0, pm.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, pm.jsx)(im.g, {
              onClick: () => {
                Ym(!1)
              },
              children: mm("general:cancel")
            }), (0, pm.jsx)(im.m, {
              onClick: () => {
                nm(Jm)
              },
              loading: fm,
              children: mm("payments:subscribeContinue", {
                price: zm
              })
            })]
          })]
        })
      }
      return (0, pm.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, pm.jsx)(Lx.i, {
          notice: Am,
          className: "SmallTextBold"
        }), (0, pm.jsx)(Lx.d, {
          className: "SmallTextBold"
        }), (0, pm.jsx)(im.m, {
          onClick: () => {
            "refund" === cm.kind ? Ym(!0) : nm(Jm)
          },
          disabled: void 0 !== Im,
          loading: fm,
          children: mm("payments:subscribeToSuperRank", {
            price: zm
          })
        })]
      })
    }
    var dx = fm(2548);

    function gx(mm) {
      let {
        state: Tm,
        view: fm,
        claiming: Am,
        onOpen: wm
      } = mm;
      const {
        t: Rm
      } = (0, xm.A)(), Em = (0, hm.useRef)(null), om = "ready" === fm.kind;
      (0, kx.c)(Em, om);
      const Om = (0, uT.j)(Tm);
      return (0, pm.jsxs)("div", {
        ref: Em,
        className: am()("DailyDropTile", {
          DailyDropTileReady: om
        }),
        children: [om && (0, pm.jsx)(Dm.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, pm.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Rm("dailyDrop:name")
        }), (0, pm.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, pm.jsx)(dx.b, {
            className: "DailyDropTileBlock"
          }), (0, pm.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, pm.jsx)("span", {
              children: Rm("dailyDrop:collected", {
                count: Tm.collected.length,
                total: Tm.total
              })
            }), null !== Om && (0, pm.jsx)("span", {
              className: "DailyDropTileOdds",
              children: Rm("dailyDrop:odds", {
                percent: Om.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === fm.kind && (0, pm.jsx)(im.m, {
          className: "DailyDropTileOpen",
          onClick: wm,
          loading: Am,
          children: Rm("dailyDrop:open")
        }), "waiting" === fm.kind && (0, pm.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Rm("dailyDrop:nextIn", {
            count: fm.hours
          })
        })]
      })
    }
    var Wx = fm(2208);
    const Fx = 32;

    function mw(mm) {
      let {
        worn: Tm,
        Sh: fm,
        eh: Am,
        className: Dm
      } = mm;
      const {
        t: im
      } = (0, xm.A)(), Rm = (0, hm.useRef)(null), [Em, om] = (0, hm.useState)(null), [Om, Ym] = (0, hm.useState)(!1);
      async function qm() {
        var mm;
        const Tm = Rm.current;
        if (!Tm) return;
        const hm = null === (mm = Tm.getDevTools()) || void 0 === mm ? void 0 : mm.canvas();
        let am = null;
        try {
          am = hm ? function(mm) {
            if (0 === mm.width || 0 === mm.height) return null;
            const Tm = document.createElement("canvas");
            Tm.width = Fx, Tm.height = Fx;
            const fm = Tm.getContext("2d", {
              willReadFrequently: !0
            });
            if (!fm) return null;
            fm.drawImage(mm, 0, 0, Fx, Fx);
            const {
              data: hm
            } = fm.getImageData(0, 0, Fx, Fx);
            for (let Am = 3; Am < hm.length; Am += 4)
              if (hm[Am] > 0) return mm.toDataURL("image/png");
            return null
          }(hm) : null
        } catch (wm) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", wm)
        }
        null === am && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), om(null === am ? {
          kind: "head"
        } : {
          kind: "still",
          src: am
        }), Tm.updateCosmetic(fm, Am);
        const xm = new Promise((mm => {
          setTimeout(mm, 1e4)
        }));
        await Promise.race([Tm.ensureReadyForCapture(fm), xm]).catch((mm => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", mm)
        })), Rm.current === Tm && Ym(!0)
      }
      return (0, pm.jsxs)("div", {
        className: am()("DailyDropRevealFigures", Dm),
        children: [(0, pm.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, pm.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === Em || void 0 === Em ? void 0 : Em.kind) && (0, pm.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: Em.src,
              alt: "",
              draggable: !1
            }), "head" === (null === Em || void 0 === Em ? void 0 : Em.kind) && (0, pm.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, pm.jsx)(va.d, {
                cosmetics: Tm
              })
            }), null === Em && (0, pm.jsx)(nm.c, {})]
          }), (0, pm.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: im("dailyDrop:before")
          })]
        }), (0, pm.jsx)(wm.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, pm.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, pm.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, pm.jsx)("div", {
              className: am()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: Om
              }),
              children: (0, pm.jsx)(hm.Suspense, {
                fallback: null,
                children: (0, pm.jsx)(wx.d, {
                  ref: Rm,
                  onReady: () => {
                    var mm, fm;
                    null === (mm = Rm.current) || void 0 === mm || mm.resetCamera(), null === (fm = Rm.current) || void 0 === fm || fm.setAllCosmetics(Tm)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      qm()
                    }))
                  }
                })
              })
            }), !Om && (0, pm.jsx)(nm.c, {})]
          }), (0, pm.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: im("dailyDrop:after")
          })]
        })]
      })
    }
    var Tw = fm(1842);
    const fw = "dailyDropReminderAsked_";

    function hw(mm) {
      return async function(mm) {
        if (mm.remindersOn || (0, cm.f)(cm.c.get("gameState"))) return null;
        const Tm = await bm.userContextManager.getCurrentUserContext(),
          fm = fw + Tm.whamm;
        if (null !== Af.g.getItem(fm)) return null;
        const [hm, Am] = await Promise.all([(0, rT.d)().catch((mm => (console.error("Couldn't tell whether this device can take push notifications:", mm), null))), aw()]);
        if (null === hm && !Am) return null;
        return {
          askedKey: fm,
          requester: hm
        }
      }(mm).catch((mm => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", mm), null)))
    }

    function Aw(mm, Tm) {
      Af.g.setItem(mm.askedKey, !0), (0, uT.q)("daily_drop.remind", Tm ? "yes" : "no"), Tm && async function(mm) {
        const Tm = (0, uT.t)({
            remindersOn: !0
          }),
          fm = null === mm ? Promise.resolve() : mm(),
          [hm, Am] = await Promise.allSettled([Tm, fm]);
        "rejected" === hm.status && console.error("Failed to turn on Lucky Skin Block reminders:", hm.reason);
        "rejected" === Am.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Am.reason);
        "rejected" !== hm.status && "rejected" !== Am.status || Tw.d.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(mm.requester)
    }

    function aw() {
      return (0, CT.d)().then((mm => mm.app + mm.browser + mm.msnPlay > 0), (mm => (console.error("Couldn't tell where push notifications reach this account:", mm), !0)))
    }
    const xw = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      ww = {
        opening: 900,
        shrinking: 700
      };

    function Dw(mm) {
      let {
        drop: Tm,
        onClose: fm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)(), {
        userContext: Dm
      } = (0, Om.e)(), {
        state: Rm,
        view: Em
      } = (0, uT.x)(), [om, Ym] = (0, hm.useState)("closed"), [qm] = (0, hm.useState)((() => ({
        ...Dm.getPlayerCosmetics()
      }))), [jm] = (0, hm.useState)((() => (0, uT.k)(Tm, qm))), [Vm, Im] = (0, hm.useState)(!1), [Km, Qm] = (0, hm.useState)(!1), [nm] = (0, hm.useState)((() => null === Rm ? Promise.resolve(null) : hw(Rm))), [Jm, zm] = (0, hm.useState)(null), Zm = (0, sT.c)(), {
        gameState: km
      } = (0, cm.m)(["gameState"]);
      async function bm() {
        const mm = await nm;
        Zm.current && (null === mm ? fm() : (zm(mm), Ym("remind")))
      }

      function Sm(mm) {
        null !== Jm && Aw(Jm, mm), fm()
      }(0, hm.useEffect)((() => {
        const mm = ww[om];
        if (void 0 === mm) return;
        const Tm = setTimeout((() => {
          Ym(xw[om])
        }), mm);
        return () => {
          clearTimeout(Tm)
        }
      }), [om]);
      const em = Am(`dailyDrop:kind_${jm.Sh}`),
        Nm = Rm && Am("dailyDrop:collected", {
          count: Rm.collected.length,
          total: Rm.total
        }),
        Gm = "revealed" === om || "shrinking" === om,
        Xm = "equip" !== om && "remind" !== om;
      return (0, pm.jsx)(Gh.d, {
        className: "DailyDropRevealScreen",
        close: "remind" === om ? () => {
          Sm(!1)
        } : fm,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, pm.jsxs)("div", {
          className: am()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === om,
            DailyDropRevealShrinking: "shrinking" === om,
            DailyDropRevealFiguresShown: "shrinking" === om || "equip" === om || "remind" === om
          }),
          children: [(0, pm.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, pm.jsx)(mw, {
              className: "DailyDropRevealStageFigures",
              worn: qm,
              Sh: jm.Sh,
              eh: jm.eh
            }), ("closed" === om || "opening" === om) && (0, pm.jsx)(dx.b, {
              className: "DailyDropRevealBlock",
              open: "opening" === om
            }), Gm && (0, pm.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, pm.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Wx.g)(jm.Sh,jm.eh).previewTex}.png`,
                alt: em,
                draggable: !1
              })
            })]
          }), Xm && (0, pm.jsxs)(pm.Fragment, {
            children: [(0, pm.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, pm.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Gm ? em : Am("dailyDrop:name")
              }), "closed" === om && (0, pm.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Am("dailyDrop:tapToOpen")
              }), "revealed" === om && (0, pm.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Am("dailyDrop:tapToContinue")
              })]
            }), (0, pm.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Am("closed" === om ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Ym(xw[om])
              }
            })]
          }), "equip" === om && (0, pm.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pm.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: em
            }), (0, pm.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Am("dailyDrop:equipQuestion")
            }), (0, pm.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pm.jsx)(im.e, {
                className: "DailyDropRevealButton",
                disabled: Vm,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, uT.q)("daily_drop.not_now", Tm), bm()
                },
                children: Am("dailyDrop:notNow")
              }), (0, pm.jsx)(im.e, {
                className: "DailyDropRevealButton",
                loading: Vm,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, uT.q)("daily_drop.equip", Tm), Im(!0), Qm(!1);
                    try {
                      await (0, uT.f)(Dm, jm.Sh, jm.eh)
                    } catch (mm) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", mm), Im(!1), void Qm(!0)
                    }
                    await bm()
                  }()
                },
                children: Am("dailyDrop:equip")
              })]
            }), Km && (0, pm.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Am("dailyDrop:equipFailed")
            }), !(0, cm.f)(km) && (0, pm.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: Vm,
              onClick: () => {
                var mm;
                (0, uT.q)("daily_drop.customise", Tm), mm = jm.Sh, ff.j.gp(kh, mm), cm.c.set({
                  openEverythingMenuName: pT.n.CUSTOMISATION
                }), fm()
              },
              children: [Am("dailyDrop:customise"), " ", (0, pm.jsx)(wm.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Nm && (0, pm.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Nm, "waiting" === (null === Em || void 0 === Em ? void 0 : Em.kind) && ` \xb7 ${Am("dailyDrop:nextInInline",{count:Em.hours})}`]
            })]
          }), "remind" === om && (0, pm.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pm.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Am("dailyDrop:remindTitle")
            }), (0, pm.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Am("dailyDrop:remindSubtitle")
            }), (0, pm.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pm.jsx)(im.e, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  Sm(!1)
                },
                children: Am("dailyDrop:remindNo")
              }), (0, pm.jsx)(im.e, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  Sm(!0)
                },
                children: Am("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function iw(mm, Tm) {
      const {
        t: fm
      } = (0, xm.A)(), Am = function(mm, Tm) {
        const {
          state: fm,
          view: Am
        } = (0, uT.x)(), [am, xm] = (0, hm.useState)(!1), [wm, Dm] = (0, hm.useState)(!1), [im, Rm] = (0, hm.useState)(null), pm = (0, hm.useRef)(null), Em = (0, hm.useRef)(!1), om = Tm && "ready" === (null === Am || void 0 === Am ? void 0 : Am.kind);
        (0, hm.useEffect)((() => {
          mm ? om && !Em.current && (Em.current = !0, (0, uT.q)("daily_drop.shown", "tile")) : Em.current = !1
        }), [mm, om]), (0, hm.useEffect)((() => {
          mm || (jm(), Dm(!1))
        }), [mm]);
        const Om = mm && null === im && !(0, uT.p)(Am);
        (0, hm.useEffect)((() => {
          Om && cm.c.set({
            openEverythingMenuName: pT.n.CUSTOMISATION
          })
        }), [Om]);
        const Ym = (0, hm.useRef)(!1),
          qm = (0, hm.useRef)(mm);

        function jm() {
          null !== pm.current && (pm.current = null, Rm(null))
        }
        return qm.current = mm, {
          state: fm,
          view: Am,
          claiming: am,
          claimFailed: wm,
          reveal: im,
          open: async function() {
            if (!Ym.current) {
              Ym.current = !0, xm(!0), Dm(!1);
              try {
                const {
                  state: mm,
                  drop: Tm
                } = await (0, uT.d)();
                if (null === mm || null === Tm) return;
                if (!qm.current) return;
                (0, uT.q)("daily_drop.open", Tm), pm.current = {
                  state: mm,
                  drop: Tm
                }, Rm(pm.current)
              } catch (mm) {
                console.error("Failed to claim the Lucky Skin Block", mm), qm.current && Dm(!0)
              } finally {
                Ym.current = !1, xm(!1)
              }
            }
          },
          closeReveal: jm
        }
      }(mm, Tm);
      return {
        shown: (0, uT.p)(Am.view) || null !== Am.reveal,
        tile: Am.state && Am.view && (0, pm.jsx)(gx, {
          state: Am.state,
          view: Am.view,
          claiming: Am.claiming,
          onOpen: Am.open
        }),
        claimFailed: Am.claimFailed && (0, pm.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: fm("dailyDrop:claimFailed")
        }),
        reveal: Am.reveal && (0, pm.jsx)(Dw, {
          drop: Am.reveal.drop,
          onClose: Am.closeReveal
        })
      }
    }

    function Rw(mm) {
      let {
        show: Tm
      } = mm;
      const fm = iw(Tm, Tm);
      return Tm && fm.shown ? (0, pm.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [fm.claimFailed, fm.tile && (0, pm.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: fm.tile
        }), fm.reveal]
      }) : null
    }
    const pw = {
      kind: "board"
    };
    let Ew = !1;

    function ow(mm) {
      return "found" === mm.status || "error" === mm.status && "store:giftRecipientLookupFailed" === mm.error ? mm.name : null
    }(0, rm.s)(za.prefetchBillingOfferings);
    const Ow = (0, hm.memo)((function(mm) {
      var Tm;
      let {
        show: Am
      } = mm;
      const {
        t: wm
      } = (0, xm.A)(), {
        userContext: Dm
      } = (0, Om.e)(), im = Dm !== bm.NULL_USER_CONTEXT, Rm = Ca(Dm), [Em, om] = (0, qm.c)(), {
        page: Ym,
        urlMode: jm,
        goTo: Vm
      } = (0, ra.e)(), Im = function(mm) {
        return "superRank" === mm.kind ? "superRank" : "pack" === mm.kind ? mm.pack : null
      }(Ym), {
        openEverythingMenuName: Km,
        gameState: Qm
      } = (0, cm.m)(["openEverythingMenuName", "gameState"]), nm = null !== Km;
      ! function(mm, Tm) {
        const [Am] = (0, hm.useState)(Ma.l), [am, xm] = (0, hm.useState)(!1);
        Am && Tm && !am && xm(!0);
        const wm = (0, Vh.t)(),
          Dm = Am && am && mm && !wm;
        (0, hm.useEffect)((() => {
          if (!Dm) return;
          let mm = null,
            Tm = null,
            hm = null;
          const Am = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, iT.h)().purchaseUnderWay,
            am = () => {
              var fm;
              null === (fm = hm) || void 0 === fm || fm(), hm = null, null !== mm && (clearTimeout(mm), mm = null), null !== Tm && (clearTimeout(Tm), Tm = null)
            },
            xm = () => {
              (0, sa.j)(!1), (0, sa.i)(!1), am(), mm = setTimeout((() => {
                mm = null, hm = (0, la.e)((() => {
                  hm = null, Am() ? xm() : ((0, sa.j)(!0), Tm = setTimeout((() => {
                    Tm = null, hm = (0, la.e)((() => {
                      hm = null, Am() ? xm() : (0, sa.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => fm(4595))).then((mm => {
                    mm.startBackgroundGameSetup()
                  }), (mm => {
                    console.warn("Background game setup: its chunk failed to load", mm)
                  })))
                }))
              }), 2e3)
            };
          for (const fm of ua) window.addEventListener(fm, xm, {
            capture: !0,
            passive: !0
          });
          return xm(), () => {
            for (const mm of ua) window.removeEventListener(mm, xm, {
              capture: !0
            });
            am(), (0, sa.j)(!1), (0, sa.i)(!1)
          }
        }), [Dm])
      }(Am && nm, "pack" === Ym.kind);
      const Jm = "landingPage" === Qm;
      (0, hm.useEffect)((() => {
        nm && (0, za.prefetchBillingOfferings)()
      }), [nm]), (0, hm.useEffect)((() => {
        nm && !Am && Jm && (0, Ba.s)()
      }), [nm, Am, Jm]);
      const [zm, Zm] = (0, hm.useState)(0), [km, Sm] = (0, hm.useState)(null), [em, Nm] = (0, hm.useState)(null), [Gm, Xm] = (0, hm.useState)(null), [Hm, ym] = (0, hm.useState)(null), Cm = (0, hm.useRef)(null), lm = (0, hm.useRef)(null), Mm = (0, hm.useRef)(null), um = (0, hm.useRef)(!1), Bm = (0, rm.y)(), Lm = (0, hm.useRef)(0), tm = (0, hm.useRef)(!1);

      function Um() {
        Zm((mm => mm + 1))
      }(0, hm.useEffect)((() => {
        if (Am) {
          if (Ew = !0, (0, rm.k)(), Bm && Bm.seq !== Lm.current) {
            var mm;
            Lm.current = Bm.seq, "loginResume" !== Bm.source && (0, rm.x)();
            const Tm = (0, rm.c)(Bm);
            jm || Vm(Tm), ym(null !== (mm = Bm.highlight) && void 0 !== mm ? mm : null), Nm(null), "gift" === Bm.mode && Bm.giftRecipientName ? Rm.choose(Bm.giftRecipientName, "prefilled") : "current" !== Bm.mode && Rm.clear(), "gift" !== Bm.mode || Bm.giftRecipientName || Um(), (0, Fm.reportAnalyticsClick)({
              id: "store.open",
              value: Bm.source
            })
          } else tm.current || (0, Fm.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          tm.current = !0
        } else tm.current = !1
      }), [Am, Bm]), (0, hm.useEffect)((() => {
        if (!Hm) return;
        const mm = setTimeout((() => {
          ym(null)
        }), 4e3);
        return () => {
          clearTimeout(mm)
        }
      }), [Hm]), (0, hm.useLayoutEffect)((() => {
        const mm = Cm.current;
        if (!Am || !mm) return lm.current = null, void(Mm.current = null);
        var Tm;
        if (Im) lm.current = Im, null === (Tm = mm.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Tm || Tm.focus();
        else if (lm.current) {
          const Tm = Mm.current;
          null !== Tm && (mm.scrollTop = Tm);
          const fm = mm.querySelector(`[data-store-item="${lm.current}"]`);
          if (fm) {
            const hm = fm.getBoundingClientRect(),
              Am = mm.getBoundingClientRect();
            fm.focus({
              preventScroll: null !== Tm && hm.bottom > Am.top && hm.top < Am.bottom
            })
          }
          lm.current = null
        }
      }), [Im, Am]), (0, hm.useEffect)((() => {
        Nm(null)
      }), [Rm.query]), (0, hm.useEffect)((() => {
        if (!Gm) return;
        const mm = setTimeout((() => {
          Xm(null)
        }), 8e3);
        return () => {
          clearTimeout(mm)
        }
      }), [Gm]);
      const dm = Dm.superRankInfo,
        gm = Dm.isLoggedIn() || (0, sm.guestsMayBuy)(),
        Wm = Dm.getOwnedCosmeticPacks(),
        mT = (0, Xa.k)(Rm.query),
        TT = (0, Xa.e)({
          mode: mT,
          loggedIn: im ? gm : null,
          superRankInfo: dm,
          now: Date.now(),
          ownedPacks: Wm,
          packs: ca.t,
          recipient: Rm.recipient
        });
      (0, hm.useEffect)((() => {
        if (!gm || !Am) return;
        const mm = (0, rm.x)(),
          Tm = mm && (0, Xa.j)(mm, ca.t);
        mm && Tm && ((0, Fm.reportAnalyticsClick)({
          id: "store.login_resume",
          value: mm.item
        }), (0, rm.m)(Tm))
      }), [gm, Am]);
      const fT = (0, Xa.o)({
        superRankDaysLeft: TT.superRankDaysLeft,
        openedThisSession: Ew || Am,
        seenNewItems: (0, rm.h)()
      });
      (0, hm.useEffect)((() => {
        (0, rm.w)(fT)
      }), [fT]);
      const hT = "self" === mT,
        AT = iw(Am, Am && hT && "board" === Ym.kind);
      if (!Am || !(0, sm.purchasesAllowed)()) return null;
      const aT = om > Em && Em <= 700,
        xT = !aT && om <= 420,
        wT = "gift" === mT ? ow(Rm.recipient) : null,
        DT = null !== km;

      function RT(mm) {
        (0, ka.e)(mm, "gift" === mT ? Rm.query.trim() : null)
      }

      function pT(mm, Tm) {
        (0, Fm.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Tm?"gift":"self"}:${mm}`
        }), Tm && (Rm.recordGift(Tm.name, mm), ET(Tm))
      }

      function ET(mm) {
        ! function(mm) {
          try {
            Af.g.setItem(Pa, (0, Xa.x)(ya(), mm))
          } catch {}
        }({
          name: mm.name,
          cosmetics: mm.cosmetics
        }), Vm(pw), Xm((Tm => {
          var fm;
          return {
            name: mm.name,
            seq: (null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.seq) && void 0 !== fm ? fm : 0) + 1
          }
        }))
      }
      async function oT(mm) {
        var Tm, fm;
        if (um.current) return;
        if (!gm) return void RT(mm);
        Nm(null), ym(null);
        const hm = "gift" === mT ? {
          name: ow(Rm.recipient),
          cosmetics: Rm.recipientCosmetics
        } : null;
        if (hm && !hm.name) return void Um();
        const Am = "superRank" === mm ? Pm.n.id : (0, Pm.e)(mm);
        um.current = !0;
        const am = await (0, Ga.d)(Am, null !== (Tm = null === hm || void 0 === hm ? void 0 : hm.name) && void 0 !== Tm ? Tm : null);
        if (um.current = !1, !am) return;
        Sm(mm);
        const xm = await ba.d.purchase(Am, null !== (fm = null === hm || void 0 === hm ? void 0 : hm.name) && void 0 !== fm ? fm : null);
        Sm(null), xm ? Nm(xm) : (pT(mm, hm), hm || (await (0, Sa.flushClientAnalyticsEvents)(), (0, Za.refreshWithoutConfirmation)("superRank" === mm ? "/super-rank-welcome" : `/pack-welcome/${mm}`)))
      }
      const OT = am()("Store", {
        StoreGift: "gift" === mT,
        StorePortrait: aT,
        StoreCompact: xT
      });
      if ("pack" === Ym.kind) {
        const mm = Ym.pack,
          Tm = TT.packs.find((Tm => Tm.pack === mm));
        return (0, pm.jsx)("div", {
          ref: Cm,
          className: "CosmeticShopContainer",
          children: (0, pm.jsx)(Na.f, {
            pack: mm,
            onBack: () => {
              Vm(pw)
            },
            onPurchased: Tm => {
              pT(mm, Tm ? {
                name: Tm,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === mT && wT && Tm && (0, pm.jsxs)(pm.Fragment, {
              children: [(0, pm.jsx)(qx, {
                state: Tm.state,
                item: mm,
                price: (YT = mm, "superRank" === YT ? Pm.n.price : (0, Pm.h)(YT)),
                busy: DT,
                onAct: () => {
                  oT(mm)
                },
                onNeedRecipient: () => {
                  Vm(pw), Um()
                },
                onLogin: () => {
                  RT(mm)
                },
                highlight: Hm === mm
              }), em && (0, pm.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: wm(em)
              })]
            }),
            ownedPacks: Wm,
            startAsGift: "gift" === mT,
            initialGiftRecipient: "gift" === mT ? null !== wT && void 0 !== wT ? wT : Rm.query.trim() : "",
            highlightCta: Hm === mm
          }, mm)
        })
      }
      var YT;
      return "superRank" === Ym.kind ? (0, pm.jsx)("div", {
        ref: Cm,
        className: am()(OT, "StoreDetailView"),
        children: (0, pm.jsx)(sx, {
          state: TT.superRank.state,
          mode: mT,
          giftName: wT,
          busy: DT,
          highlight: "superRank" === Hm,
          purchaseError: em,
          onBack: () => {
            Vm(pw)
          },
          onChooseRecipient: () => {
            Vm(pw), Um()
          },
          onAct: () => {
            oT("superRank")
          },
          onLogin: () => {
            RT("superRank")
          }
        })
      }) : (0, pm.jsxs)("div", {
        ref: Cm,
        className: OT,
        onScroll: mm => {
          Mm.current = mm.currentTarget.scrollTop
        },
        children: [(0, pm.jsx)("div", {
          className: "StoreTopRow",
          children: (0, pm.jsx)(Wa, {
            selfName: im ? Dm.getPlayerName() : "",
            giftRecipient: Rm,
            suggestionsVersion: null !== (Tm = null === Gm || void 0 === Gm ? void 0 : Gm.seq) && void 0 !== Tm ? Tm : 0,
            pulseSignal: zm,
            disabled: DT || !im
          })
        }), Gm && (0, pm.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Xm(null)
          },
          children: [(0, pm.jsx)(ea.d, {
            showSignal: Gm.seq
          }), Xa.c, " ", wm("store:giftSent", {
            name: Gm.name
          })]
        }, Gm.seq), !Gm && em && (0, pm.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: wm(em)
        }), hT && AT.claimFailed, (0, pm.jsx)(rx, {
          layout: TT,
          mountAtOnce: null !== lm.current,
          bundleGift: "gift" === mT ? {
            recipientName: wT,
            lookingUp: "pending" === Rm.recipient.status,
            busy: DT,
            onNeedRecipient: Um,
            onSent: mm => {
              (0, Fm.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), ET({
                name: mm,
                cosmetics: Rm.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, Xa.r)(dm),
          busy: DT,
          highlightItem: Hm,
          onOpen: function(mm) {
            (0, Fm.reportAnalyticsClick)({
              id: "store.item_open",
              value: mm
            }), Vm((0, rm.e)(mm))
          },
          onAct: oT,
          onNeedRecipient: Um,
          onLogin: RT,
          dailyDropTile: hT && AT.tile
        }), "gift" !== mT && (0, pm.jsx)(tx, {}), AT.reveal]
      })
    }));
    var Yw = fm(2674),
      qw = fm(8785),
      jw = fm(8601),
      Vw = fm(2738),
      Iw = fm(2578),
      Kw = fm(2631),
      Qw = fm(2644),
      nw = fm(2650),
      Jw = fm(2728),
      zw = fm(2711),
      Zw = fm(2315),
      kw = fm(2351),
      bw = fm(2339),
      Sw = fm(2014),
      ew = fm(2652),
      Nw = fm(2357);

    function Gw(mm) {
      let {
        show: Tm
      } = mm;
      return Tm ? (0, pm.jsx)(Xw, {}) : null
    }

    function Xw() {
      const {
        t: mm
      } = (0, xm.A)(), {
        followsLeader: Tm
      } = (0, Iw.i)(), {
        loading: fm,
        friends: Am,
        requests: Dm,
        invites: Rm
      } = (0, Mm.i)(), {
        userContext: Em
      } = (0, Om.e)(), [om, Ym] = (0, hm.useState)(Nw.m);
      (0, hm.useEffect)((() => {
        (0, Nw.e)()
      }), []);
      const qm = Dm.map((mm => mm.name)),
        {
          state: jm,
          recentRequesters: Vm
        } = (0, zw.k)(),
        Im = new Map([...("loaded" === jm.status ? jm.recentPlayers : []).map((mm => [mm.preview.name, mm])), ...Vm.map((mm => [mm.name, mm]))]),
        Km = (0, hm.useRef)(null),
        [Jm, cm] = (0, hm.useState)(""),
        [zm, Zm] = (0, hm.useState)("Enter"),
        [km, bm] = (0, hm.useState)(null);

      function Sm() {
        Jm && (Zm("Loading"), (0, bw.i)(Jm, "social_menu").then((mm => {
          if (Km.current) switch (mm.kind) {
            case "sent":
              Zm("Success");
              break;
            case "becameFriends":
              Zm("BecameFriends");
              break;
            case "failed":
              bm(mm.message), Zm("Error")
          }
        })))
      }
      return (0, hm.useEffect)((() => {
        if ("Enter" === zm || "Loading" === zm) return;
        const mm = setTimeout((() => {
          Km.current.value = "", cm(""), Zm("Enter")
        }), "Success" === zm ? 1e3 : 4e3);
        return () => {
          clearTimeout(mm)
        }
      }), [zm]), (0, pm.jsx)("div", {
        className: "SocialMenu",
        children: (0, pm.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, pm.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pm.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, pm.jsx)(nw.e, {
                label: mm("socialBar:addFriend")
              }), (0, pm.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, pm.jsxs)("div", {
                  className: am()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${zm}`]: !0
                  }),
                  children: ["Loading" === zm && (0, pm.jsx)(nm.c, {}), "Success" === zm && (0, pm.jsx)(wm.c, {
                    name: "check"
                  }), "BecameFriends" === zm && (0, pm.jsx)(pm.Fragment, {
                    children: mm("socialBar:nowFriends", {
                      playerName: Jm
                    })
                  }), "Error" === zm && km && (0, pm.jsx)(pm.Fragment, {
                    children: mm(km.translationKey, km.params)
                  })]
                }), (0, pm.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, pm.jsx)(Qm.e, {
                    className: "PlayerSearchInput",
                    placeholderText: mm("socialBar:enterPlayerName"),
                    domRef: Km,
                    onValueChange: mm => {
                      cm((0, Gm.r)(mm)), Km.current.value = (0, Gm.r)(mm)
                    },
                    onEnter: () => {
                      Jm && (0, Fm.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Sm()
                    }
                  }), (0, pm.jsxs)(im.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Sm()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, pm.jsx)(wm.c, {
                      name: "user-plus"
                    }), " ", mm("socialBar:sendRequest")]
                  })]
                })]
              }), (0, pm.jsx)(ew.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Rm.length > 0 && (0, pm.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, pm.jsx)(nw.e, {
                label: mm("socialBar:invites"),
                meta: Rm.length
              }), Rm.map((Tm => (0, pm.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, pm.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, pm.jsx)(Zw.d, {
                    invite: Tm
                  })
                }), (0, pm.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, pm.jsx)(Zw.e, {
                    invite: Tm
                  })
                }), (0, pm.jsx)(im.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, kw.e)(Tm)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Tm.destination.kind}`
                  },
                  children: mm("general:join")
                }), (0, pm.jsx)(dm.h, {
                  tooltipInner: (0, pm.jsx)(pm.Fragment, {
                    children: mm("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, pm.jsx)(im.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === om || void 0 === om ? void 0 : om.kind) && om.inviteId === Tm.id,
                    onClick: () => {
                      Mm.e.declineInvite(Tm.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Tm.destination.kind}`
                    },
                    children: (0, pm.jsx)(wm.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, Tm.id)))]
            }), (0, pm.jsxs)("div", {
              className: am()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !fm && 0 === Dm.length
              }),
              children: [(0, pm.jsx)(nw.e, {
                label: (0, pm.jsxs)(pm.Fragment, {
                  children: [(0, pm.jsx)(wm.c, {
                    name: Sw.d
                  }), " ", mm("socialBar:requests")]
                }),
                meta: (0, pm.jsxs)(pm.Fragment, {
                  children: [Dm.length, Dm.length === gm.o && (0, pm.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: mm("socialBar:limitReached")
                  })]
                })
              }), fm && (0, pm.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pm.jsx)(nm.c, {})
              }), !fm && 0 === Dm.length && (0, pm.jsx)("div", {
                className: "SocialMenuEmpty",
                children: mm("socialBar:noFriendRequests")
              }), !fm && Dm.length > 0 && (0, pm.jsx)("div", {
                className: "PlayerRows",
                children: (0, pm.jsx)(bA.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Dm],
                  children: Dm.map(((Tm, fm) => {
                    const hm = Im.get(Tm.name);
                    return (0, pm.jsxs)(Qw.c, {
                      playerSocialPreview: Tm,
                      zIndex: Dm.length - fm,
                      padDefaultFocus: (0, Nw.j)(om, Tm.name, fm),
                      status: hm && (0, pm.jsx)(Jw.e, {
                        gameNameWithVariation: hm.gameNameWithVariation,
                        isPrivateLobby: hm.isPrivateLobby
                      }),
                      children: [(0, pm.jsx)(dm.h, {
                        tooltipInner: (0, pm.jsx)(pm.Fragment, {
                          children: mm("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, pm.jsx)(im.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Ym((0, Nw.h)(qm, fm)), (0, bw.e)(Tm.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pm.jsx)(wm.c, {
                            name: "check"
                          })
                        })
                      }), (0, pm.jsx)(dm.h, {
                        tooltipInner: (0, pm.jsx)(pm.Fragment, {
                          children: mm("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, pm.jsx)(im.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Ym((0, Nw.h)(qm, fm)), (0, bw.e)(Tm.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pm.jsx)(wm.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Tm.name}_${Tm.isError}`)
                  }))
                })
              })]
            }), (0, pm.jsx)(Jw.k, {})]
          }), (0, pm.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pm.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, pm.jsx)(nw.e, {
                label: mm("socialBar:party")
              }), (0, pm.jsx)(Kw.c, {})]
            }), (0, pm.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, pm.jsx)(nw.e, {
                label: (0, pm.jsxs)(pm.Fragment, {
                  children: [(0, pm.jsx)(wm.c, {
                    name: Sw.c
                  }), " ", mm("socialBar:friends")]
                }),
                meta: (0, pm.jsxs)(pm.Fragment, {
                  children: [Am.length, Am.length >= (0, gm.e)(Em.getPlayerRanks()) && (0, pm.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: mm("socialBar:limitReached")
                  })]
                })
              }), fm && (0, pm.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pm.jsx)(nm.c, {})
              }), !fm && 0 === Am.length && (0, pm.jsx)("div", {
                className: "SocialMenuEmpty",
                children: mm("socialBar:noFriends")
              }), !fm && Am.length > 0 && (0, pm.jsx)("div", {
                className: "PlayerRows",
                children: (0, pm.jsx)(bA.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Am],
                  children: Am.map(((mm, fm) => (0, pm.jsx)(Qw.c, {
                    playerSocialPreview: mm,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: mm => {
                      Mm.e.removeFriendFromState(mm)
                    },
                    zIndex: Am.length - fm,
                    children: (0, pm.jsx)(Qw.b, {
                      friend: mm,
                      followsLeader: Tm,
                      analyticsSurface: "social_menu"
                    })
                  }, `${mm.name}_${mm.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Pw = fm(2505);
    const Hw = mm => {
        let {
          action: Tm,
          padAction: fm
        } = mm;
        const {
          isTouchScreen: hm
        } = (0, cm.m)(["isTouchScreen"]), Am = (0, Vh.t)();
        return hm && !Am ? null : (0, pm.jsx)(ph.e, {
          className: "EverythingMenuTabKey",
          noaAction: Tm,
          padHidesKey: !0,
          padMenuShortcut: fm
        })
      },
      yw = (0, hm.memo)((function() {
        const {
          t: mm
        } = (0, xm.A)(), {
          gameState: Tm,
          openEverythingMenuName: fm,
          initSdkSelectorFinished: Am,
          crosshairGameView: wm
        } = (0, cm.m)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Dm
        } = (0, Om.e)(), Rm = (0, sm.purchasesAllowed)(), Em = (0, rm.A)(), {
          view: om
        } = (0, uT.x)(), Ym = "dot" === Em || null === Em && "ready" === (null === om || void 0 === om ? void 0 : om.kind), qm = (mm, Tm) => (0, pm.jsx)(Hw, {
          action: mm,
          padAction: Tm
        }), [Vm, Im] = (0, hm.useState)(null), Km = (0, hm.useRef)(null), Qm = {
          ..."inGame" === Tm ? {} : (0, im.Z)({
            focusOnClick: !1
          }),
          ...Sh.f
        }, nm = mm => {
          const Tm = (0, eh.d)((Tm => {
            (0, im.X)(Tm.currentTarget), cm.c.set({
              openEverythingMenuName: mm
            })
          }), "pointerup");
          return {
            ...Qm,
            onPointerDown: mm => {
              Qm.onPointerDown(mm), Tm.onPointerDown(mm)
            },
            onPointerUp: mm => {
              Qm.onPointerUp(mm), Tm.onPointerUp(mm)
            },
            onClick: Tm.onClick
          }
        }, Jm = null !== fm, zm = fm !== pT.n.COSMETIC_SHOP && !wm;
        async function Zm() {
          await async function() {
            if (!Vm) return;
            await Vm(), Im(null)
          }(), cm.c.set({
            openEverythingMenuName: null
          })
        }
        const bm = (0, hm.useRef)(null),
          Sm = (0, hm.useCallback)((() => null !== bm.current && (0, jw.f)(bm.current)), []);

        function em() {
          Sm() || Zm()
        }(0, hm.useEffect)((() => (0, Va.q)(Sm)), [Sm]);
        const Nm = (0, hm.useMemo)((() => "inGame" === Tm ? {
          text: mm("settingsMenu:exitGame"),
          onClick: () => {
            (0, qw.b)()
          }
        } : (0, km.c)() ? {
          text: mm("settingsMenu:exitGame"),
          onClick: () => {
            DT.p.discordActivity().then((mm => {
              mm.exit("User exited the game")
            }))
          }
        } : null), [Tm, mm]);
        const Gm = (0, pm.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: em,
          children: (0, pm.jsx)(im.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, pm.jsx)(Nh.c, {
          showing: Jm,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: fm === pT.n.SHOP,
          doGameplayStartStopOnShow: "inGame" === Tm,
          children: (0, pm.jsx)(Xh.c, {
            className: "EverythingMenuContainer",
            show: Jm && !wm,
            children: (0, pm.jsx)(Gh.d, {
              close: em,
              togglePointerLock: !1,
              children: (0, pm.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Va.i)(fm) && (0, pm.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, pm.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Nm && (0, pm.jsx)(im.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Nm.onClick()
                      },
                      children: Nm.text
                    }), Jm && Rm && (0, pm.jsx)("div", {
                      ...Qm,
                      className: "EverythingMenuWallet",
                      title: mm("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, rm.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, pm.jsx)(Yw.h, {})
                    })]
                  }), (0, pm.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, pm.jsxs)("div", {
                      ...nm(pT.n.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": fm === pT.n.SETTINGS ? "true" : void 0,
                      className: am()("EverythingMenuTab", {
                        EverythingMenuTabActive: fm === pT.n.SETTINGS
                      }),
                      children: [mm("general:settings"), qm("OpenSettings", "pause")]
                    }), (0, pm.jsxs)("div", {
                      ...nm(pT.n.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": fm === pT.n.CUSTOMISATION ? "true" : void 0,
                      className: am()("EverythingMenuTab", {
                        EverythingMenuTabActive: fm === pT.n.CUSTOMISATION
                      }),
                      children: [mm("general:player"), qm("OpenCharacterCustomization")]
                    }), jm.featureFlags.useSocialFeatures && (0, pm.jsxs)("div", {
                      ...nm(pT.n.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": fm === pT.n.SOCIAL ? "true" : void 0,
                      className: am()("EverythingMenuTab", {
                        EverythingMenuTabActive: fm === pT.n.SOCIAL
                      }),
                      ...(0, Fm.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, fm === pT.n.SOCIAL),
                      children: [mm("socialBar:social"), (0, pm.jsx)(Pw.e, {})]
                    }), (0, uT.p)(om) && (0, pm.jsxs)("div", {
                      ...nm(pT.n.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": fm === pT.n.COSMETIC_SHOP ? "true" : void 0,
                      className: am()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: fm === pT.n.COSMETIC_SHOP
                      }),
                      children: [(0, pm.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: mm("store:title")
                      }), "new" === Em && (0, pm.jsx)(Zx, {}), Ym && (0, pm.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Tm && (0, pm.jsxs)("div", {
                      ...nm(pT.n.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": fm === pT.n.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: am()("EverythingMenuTab", {
                        EverythingMenuTabActive: fm === pT.n.LOBBY_LEADERBOARD
                      }),
                      children: [mm("general:lobby"), qm("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, pm.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Gm
                  })]
                }), (0, Va.i)(fm) && Gm, (0, pm.jsxs)("div", {
                  ref: bm,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Tm ? "0.85" : "1"
                  },
                  children: [(0, pm.jsx)(Jh, {
                    show: fm === pT.n.SETTINGS,
                    setBeforeResumeCallback: Im
                  }), (0, pm.jsx)(bh, {
                    show: fm === pT.n.CUSTOMISATION
                  }), (0, pm.jsx)(hm.Suspense, {
                    fallback: null,
                    children: (0, pm.jsx)(ia, {
                      show: fm === pT.n.SHOP
                    })
                  }), (0, pm.jsx)(na, {
                    show: fm === pT.n.LOBBY_LEADERBOARD
                  }), Rm && (0, pm.jsx)(Ow, {
                    show: fm === pT.n.COSMETIC_SHOP
                  }), !Rm && (0, pm.jsx)(Rw, {
                    show: fm === pT.n.COSMETIC_SHOP
                  }), (0, pm.jsx)(Gw, {
                    show: fm === pT.n.SOCIAL
                  })]
                }), !(0, jm.isMobileApp)() && (0, Ph.f)(Dm.getPlayerRanks()) && (0, pm.jsx)(Xh.c, {
                  ref: Km,
                  className: "EverythingMenuBannerDiv",
                  show: zm,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, pm.jsx)(Vw.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Km
                    },
                    showing: Jm && zm,
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
  34291: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(354),
      Am = fm(34299);

    function am(mm, Tm, fm) {
      const am = Object.entries(Tm).sort(((mm, Tm) => Tm[1] - mm[1])),
        xm = (0, hm.ob)(mm);
      xm.push(mm ? "\n\n" : "\n");
      for (const [Am, Om] of am) {
        var wm, Dm, im;
        const mm = null !== (wm = null === fm || void 0 === fm || null === (Dm = fm[Am]) || void 0 === Dm ? void 0 : Dm.icon) && void 0 !== wm ? wm : `${Am} Enchantment`;
        xm.push({
          icon: mm,
          style: {
            fontSize: "1.5rem"
          }
        }), xm.push({
          str: `${Am} ${null!==(im=(0,hm.R)(Om))&&void 0!==im?im:Om}\n`
        })
      }
      xm.push({
        str: "\n"
      });
      for (const [hm, Om] of am) {
        var Rm, pm, Em, om;
        const mm = null !== (Rm = null === fm || void 0 === fm || null === (pm = fm[hm]) || void 0 === pm ? void 0 : pm.icon) && void 0 !== Rm ? Rm : `${hm} Enchantment`,
          Tm = null !== (Em = null === fm || void 0 === fm || null === (om = fm[hm]) || void 0 === om ? void 0 : om.description) && void 0 !== Em ? Em : (0, Am.i)(hm);
        xm.push({
          icon: mm,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), xm.push({
          str: Tm,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), xm.push({
          str: "\n"
        })
      }
      return xm
    }
  },
  34301: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      e: () => Vm,
      g: () => qm,
      k: () => Dm,
      m: () => jm,
      n: () => Rm,
      r: () => Em,
      s: () => Ym,
      v: () => pm
    });
    var hm = fm(339),
      Am = fm(653),
      am = fm(354),
      xm = fm(4162),
      wm = fm(34291);

    function Dm(mm, Tm) {
      var fm;
      let {
        player: hm,
        chestOrCreative: Am
      } = mm;
      var am;
      return Tm < hm.length ? null !== (am = hm[Tm]) && void 0 !== am ? am : null : null !== (fm = Am[Tm - hm.length]) && void 0 !== fm ? fm : null
    }

    function im(mm) {
      var Tm;
      return null !== (Tm = mm.amount) && void 0 !== Tm ? Tm : 0
    }

    function Rm(mm) {
      return 0 === mm.button || void 0 === mm.button
    }

    function pm(mm) {
      return !!mm.shiftKey
    }

    function Em(mm) {
      return "touches" in mm || "touch" === mm.pointerType || "pen" === mm.pointerType
    }
    const om = new Set,
      Om = 50;

    function Ym(mm, Tm) {
      var fm;
      const hm = null === (fm = mm[Tm]) || void 0 === fm ? void 0 : fm.displayName;
      return (0, Am.H)(hm) ? "string" !== typeof Tm ? "" : (!om.has(Tm) && om.size < Om && (om.add(Tm), console.warn(`No item called "${Tm}", so its hover shows the name as given`)), Tm) : hm
    }

    function qm(mm, Tm, fm) {
      var Dm, im, Rm, pm, Em, om, Om, qm, jm, Vm, Im, Km, Qm, nm;
      const Jm = mm.attributes,
        cm = null !== (Dm = null === (im = Tm[mm.name]) || void 0 === im ? void 0 : im.rootName) && void 0 !== Dm ? Dm : mm.name,
        zm = null !== (Rm = null !== (pm = Jm.customDisplayName) && void 0 !== pm ? pm : null === (Em = Tm[mm.name]) || void 0 === Em ? void 0 : Em.displayName) && void 0 !== Rm ? Rm : Ym(Tm, cm);
      let Zm = zm;
      const km = null === (om = Jm.customAttributes) || void 0 === om ? void 0 : om.enchantmentTier;
      km && (Zm = (0, am.ob)(zm, {
        colour: am.kb[km]
      }));
      const bm = null !== (Om = null !== (qm = null !== (jm = function(mm, Tm) {
        var fm;
        if (void 0 === mm || null !== (fm = Tm.customAttributes) && void 0 !== fm && fm.author) return mm;
        const Am = (0, hm.Zb)(mm);
        return Am.every((mm => "string" === typeof mm)) ? mm : Am.map((mm => "string" === typeof mm ? mm : {
          icon: mm.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Jm.customDescription, Jm)) && void 0 !== jm ? jm : null === (Vm = Tm[mm.name]) || void 0 === Vm ? void 0 : Vm.description) && void 0 !== qm ? qm : null === (Im = Tm[cm]) || void 0 === Im ? void 0 : Im.description) && void 0 !== Om ? Om : "";
      let Sm = bm;
      if (null !== (Km = Jm.customAttributes) && void 0 !== Km && Km.enchantments) Sm = (0, wm.c)(bm, Jm.customAttributes.enchantments, Jm.customAttributes.enchantmentData);
      else if (fm[cm]) Sm = (0, am.ob)(bm), Sm.push({
        str: "\n"
      }), Sm.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Qm = Jm.customAttributes) && void 0 !== Qm && Qm.mobSettings) {
        var em, Nm;
        const mm = Jm.customAttributes.mobSettings;
        var Gm, Xm;
        if (Sm = [], (0, Am.H)(Jm.customAttributes.health) || (Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Sm.push({
            str: " "
          }), Sm.push({
            str: Jm.customAttributes.health.toString()
          }), (0, Am.H)(mm.maxHealth) || (Sm.push({
            str: "/"
          }), Sm.push({
            str: mm.maxHealth.toString()
          }))), !(0, Am.H)(mm.attackDamage) && mm.attackDamage > 0 && (Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Sm.push({
            str: " "
          }), Sm.push({
            str: mm.attackDamage.toString()
          })), !(0, Am.H)(mm.secondaryAttackDamage) && mm.secondaryAttackDamage > 0 && (Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Sm.push({
            str: " "
          }), Sm.push({
            str: mm.secondaryAttackDamage.toString()
          })), (0, Am.H)(mm.baseRunningSpeed) || (Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Sm.push({
            str: " "
          }), Sm.push({
            str: mm.baseRunningSpeed.toFixed(2)
          })), "Saddled" === mm.metaInfo) Sm.push({
          str: "\n"
        }), Sm.push({
          str: {
            translationKey: "general:has"
          }
        }), Sm.push({
          str: " "
        }), Sm.push({
          icon: null !== (Gm = null === (Xm = mm.tameInfo) || void 0 === Xm ? void 0 : Xm.saddleItemName) && void 0 !== Gm ? Gm : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Sm.push({
            str: "\n"
          }), Sm.push({
            str: "\n"
          }), mm.petInfo && null !== (em = mm.tameInfo) && void 0 !== em && em.supportsFriendship) {
          const Tm = xm.e.getIconsFromFriendshipPoints(mm.petInfo.friendshipPoints);
          for (const mm of Tm) Sm.push({
            icon: mm,
            style: {
              fontSize: "1.5em"
            }
          });
          Sm.push({
            str: "\n"
          });
          const fm = xm.e.getMobHungerLevel(mm.petInfo.lastFedAt);
          for (const mm of xm.e.hungerLevelIcons[fm]) Sm.push({
            icon: mm,
            style: {
              fontSize: "1.5em"
            }
          });
          Sm.push({
            str: " "
          }), Sm.push({
            str: xm.e.hungerLevelTranslations[fm],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (mm.tameInfo && null !== (Nm = mm.tameInfo) && void 0 !== Nm && Nm.supportsFriendship) {
          var Pm, Hm;
          let Tm = null !== (Pm = mm.tameInfo.likedFoods) && void 0 !== Pm ? Pm : [];
          Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xm.e.feedTextColours[xm.e.MobFoodType.Superliked]
            }
          }), Sm.push({
            str: " "
          }), null !== (Hm = mm.petInfo) && void 0 !== Hm && Hm.superlikedFoodKnown ? (Sm.push({
            icon: mm.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Tm = Tm.filter((Tm => Tm !== mm.petInfo.superlikedFood))) : Sm.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xm.e.feedTextColours[xm.e.MobFoodType.Liked]
            }
          }), Sm.push({
            str: " "
          });
          for (const mm of Tm) Sm.push({
            icon: mm,
            style: {
              fontSize: "1.5em"
            }
          });
          Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xm.e.feedTextColours[xm.e.MobFoodType.Neutral]
            }
          }), Sm.push({
            str: " "
          });
          for (const fm of null !== (ym = mm.tameInfo.neutralFoods) && void 0 !== ym ? ym : []) {
            var ym;
            Sm.push({
              icon: fm,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Sm.push({
            str: "\n"
          }), Sm.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: xm.e.feedTextColours[xm.e.MobFoodType.Disliked]
            }
          }), Sm.push({
            str: " "
          });
          for (const fm of null !== (Cm = mm.tameInfo.dislikedFoods) && void 0 !== Cm ? Cm : []) {
            var Cm;
            Sm.push({
              icon: fm,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Sm.length > 0 ? (Sm.shift(), Sm.unshift(...(0, am.ob)(bm))) : Sm = (0, am.ob)(bm)
      }
      return {
        name: Zm,
        desc: Sm,
        fontStyle: null !== (nm = Jm.customAttributes) && void 0 !== nm && nm.author ? "italic" : "normal"
      }
    }

    function jm(mm, Tm, fm, hm) {
      const Am = Dm(mm, fm),
        am = Dm(mm, hm);
      if (!Am) return !1;
      const xm = Tm[Am.name].armourReduction,
        wm = Tm[am.name].armourReduction;
      if (wm === xm) {
        var im, Rm, pm, Em;
        const mm = null !== (im = null === (Rm = Am.attributes.customAttributes) || void 0 === Rm ? void 0 : Rm.enchantmentTier) && void 0 !== im ? im : "Tier 0",
          Tm = null !== (pm = null === (Em = am.attributes.customAttributes) || void 0 === Em ? void 0 : Em.enchantmentTier) && void 0 !== pm ? pm : "Tier 0";
        return parseInt(mm.replace("Tier ", "")) >= parseInt(Tm.replace("Tier ", ""))
      }
      return xm > wm
    }

    function Vm(mm) {
      let Tm;
      if ("number" === typeof mm) {
        const fm = document.querySelector(`[data-inven-idx="${mm}"]`);
        if (!fm) return null;
        Tm = fm.getBoundingClientRect()
      } else Tm = mm.getBoundingClientRect();
      return {
        x: Tm.left + Tm.width / 2,
        y: Tm.top + Tm.height / 2
      }
    }
  },
  34180: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      e: () => Om,
      f: () => Ym
    });
    var hm = fm(1454),
      Am = fm(59),
      am = fm(1309),
      xm = fm(4471),
      wm = fm(2317),
      Dm = fm(1208),
      im = fm(105),
      Rm = fm(1946),
      pm = fm(1345),
      Em = fm(1135);

    function om(mm) {
      let {
        show: Tm,
        onClose: fm
      } = mm;
      const {
        requestedGameNameWithVariation: hm,
        lobbyName: Am,
        shownLobbyName: am
      } = (0, Rm.k)("connectedGame"), Dm = (0, wm.b)(hm, Am, !1);
      return im.featureFlags.canUseInviteLinks && (0, Em.jsx)(xm.d, {
        show: Tm,
        close: fm,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Em.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Em.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Em.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Em.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Dm ? (0, Em.jsx)(pm.c, {}) : Dm, (0, Em.jsx)("br", {}), "Lobby Name: ", am, (0, Em.jsx)("br", {}), (0, Em.jsx)("br", {}), (0, Em.jsx)("br", {}), (0, Em.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Em.jsx)(Om, {})]
        })
      })
    }

    function Om() {
      var mm;
      const {
        t: Tm
      } = (0, Dm.A)(), fm = null !== (mm = Ym(im.featureFlags.canUseInviteLinks)) && void 0 !== mm ? mm : "Loading Link...", [am, xm] = (0, Am.useState)(0), [wm, Rm] = (0, Am.useReducer)((mm => mm + 1), 0);
      return (0, Am.useEffect)((() => {
        const mm = setTimeout((() => {
          Rm()
        }), 1100);
        return () => {
          clearTimeout(mm)
        }
      }), [am]), im.featureFlags.canUseInviteLinks && (0, Em.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Em.jsx)("div", {
          className: "InviteLinkInner",
          children: fm
        }), (0, Em.jsx)(hm.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(fm).catch((mm => {
              console.error("Failed to copy invite link:", mm)
            })), xm(Date.now())
          },
          disabled: Date.now() - am < 1e3,
          children: Date.now() - am < 1e3 ? Tm("general:copied") : Tm("general:copy")
        })]
      })
    }

    function Ym(mm) {
      const [Tm, fm] = (0, Am.useState)(null);
      return (0, Am.useEffect)((() => {
        if (!mm) return;
        let Tm = !0;
        return (0, am.C)().then((mm => {
          Tm && fm(mm)
        })).catch((mm => {
          console.error("Failed to get invite link:", mm)
        })), () => {
          Tm = !1
        }
      }), [mm]), Tm
    }
  },
  34280: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1946),
      wm = fm(1135);

    function Dm(mm) {
      const Tm = Math.floor(mm / 3600),
        fm = Math.floor(mm % 3600 / 60),
        hm = Math.floor(mm % 60),
        Am = `${fm.toString().padStart(2,"0")}:${hm.toString().padStart(2,"0")}`;
      return Tm > 0 ? `${Tm}:${Am}` : Am
    }
    const im = (0, hm.memo)((function(mm) {
      let {
        className: Tm
      } = mm;
      const {
        recording: fm,
        seconds: hm
      } = (0, xm.k)("replayRecorder");
      return fm ? (0, wm.jsxs)("div", {
        className: am()("RecordingIndicator", Tm),
        children: [(0, wm.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, wm.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, wm.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Dm(hm)
        })]
      }) : null
    }))
  },
  4825: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => qm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4575),
      xm = fm(1208),
      wm = fm(1089),
      Dm = fm(1454),
      im = fm(1494),
      Rm = fm(1354),
      pm = fm(2487),
      Em = fm(1135);
    const om = {
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

    function Om(mm) {
      let {
        platform: Tm
      } = mm;
      const fm = "youtube" === Tm;
      return (0, Em.jsxs)("span", {
        className: Am()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: fm
        }),
        children: [fm && (0, Em.jsx)(pm.d, {
          variant: "white"
        }), !fm && (0, Em.jsx)(wm.c, {
          name: om[Tm].icon,
          kit: "brands"
        })]
      })
    }

    function Ym(mm) {
      let {
        platform: Tm,
        link: fm,
        editable: hm,
        userContext: Am,
        onLinksUpdated: pm
      } = mm;
      const {
        t: Ym
      } = (0, xm.A)(), qm = om[Tm];
      if (!fm && !hm) return null;

      function jm() {
        var mm;
        if (!Am || !pm) return;
        Rm.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: qm.name
            }
          },
          prefixText: am.v[Tm],
          placeholderText: "playBloxd",
          initialValue: null !== (mm = null === fm || void 0 === fm ? void 0 : fm.handle) && void 0 !== mm ? mm : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: fm ? "general:remove" : void 0
        }).getResult().then((async mm => {
          if ("notificationTornDown" !== mm && null !== mm) try {
            "submit" === mm.type ? await im.d.setSocialLink(Am, Tm, mm.value) : await im.d.clearSocialLink(Am, Tm), pm()
          } catch (fm) {
            console.error("Failed to update social link", fm), Rm.NotificationProvider.showAlertPopup({
              title: fm.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (fm) {
        const mm = `@${fm.handle}`;
        return (0, Em.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: qm.color
          },
          href: fm.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Em.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Em.jsx)(Om, {
              platform: Tm
            }), (0, Em.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Em.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: mm
              })
            })]
          }), hm && (0, Em.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Dm.Z)({
              stopPropagation: !0
            }),
            onClick: mm => {
              mm.stopPropagation(), mm.preventDefault(), jm()
            },
            children: (0, Em.jsx)(wm.c, {
              name: "pen-to-square"
            })
          }), !hm && (0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Em.jsx)(wm.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Em.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: qm.color
        },
        ...(0, Dm.Z)(),
        onClick: () => {
          jm()
        },
        children: [(0, Em.jsx)(Om, {
          platform: Tm
        }), (0, Em.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: qm.name
          }), (0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Ym("homePage:profileSocialLinkAdd")
          })]
        }), (0, Em.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Em.jsx)(wm.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function qm(mm) {
      let {
        socialLinks: Tm,
        editable: fm = !1,
        userContext: hm,
        onLinksUpdated: Am
      } = mm;
      if (!fm && 0 === Tm.length) return null;
      const xm = new Map(Tm.map((mm => [mm.platform, mm]))),
        wm = fm ? am.r : Tm.map((mm => mm.platform));
      return (0, Em.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Em.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: wm.map((mm => (0, Em.jsx)(Ym, {
            platform: mm,
            link: xm.get(mm),
            editable: fm,
            userContext: hm,
            onLinksUpdated: Am
          }, mm)))
        })
      })
    }
  },
  34283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(4477),
      Am = fm(4481);

    function am(mm) {
      let {
        children: Tm,
        showing: fm,
        globallyUniqueKey: am,
        alwaysMountChildren: xm = !1,
        doGameplayStartStopOnShow: wm = !0,
        keepsMovement: Dm = !1
      } = mm;
      return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
    }
  },
  34327: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(59),
      Am = fm(3443);

    function am() {
      const [mm, Tm] = (0, hm.useState)(!1);
      return (0, hm.useLayoutEffect)((() => {
        let mm = !0;
        return (0, Am.d)().then((() => {
          mm && Tm(!0)
        })), () => {
          mm = !1
        }
      }), []), mm
    }
  },
  6529: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(59),
      Am = fm(37);

    function am(mm, Tm) {
      var fm;
      const [am, xm] = (0, hm.useState)(null !== (fm = Am.g.getItem(mm)) && void 0 !== fm ? fm : Tm);
      return [am, Tm => {
        Am.g.setItem(mm, Tm), xm(Tm)
      }]
    }
  },
  34256: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Ym,
      f: () => Om
    });
    fm(34264);
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(34251);

    function wm(mm, Tm) {
      return Math.max(1, Math.round(mm * Tm))
    }

    function Dm(mm, Tm) {
      const fm = Tm * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        hm = function(mm, Tm) {
          if (mm.lines) return wm(mm.lineThickness, Tm) % 2;
          if (mm.dot) return wm(mm.dotSize, Tm) % 2;
          return im(mm, Tm) % 2
        }(mm, Tm),
        Am = Rm(mm.lineThickness * fm, hm),
        am = wm(mm.lineLength, fm),
        xm = Math.round(mm.gap * fm),
        Dm = mm.outline > 0 ? wm(mm.outline, fm) : 0,
        Em = [];
      if (mm.lines && (Em.push({
          x: Am + xm,
          y: 0,
          w: am,
          h: Am,
          arm: "right"
        }), Em.push({
          x: -xm - am,
          y: 0,
          w: am,
          h: Am,
          arm: "left"
        }), Em.push({
          x: 0,
          y: Am + xm,
          w: Am,
          h: am,
          arm: "down"
        }), mm.tStyle || Em.push({
          x: 0,
          y: -xm - am,
          w: Am,
          h: am,
          arm: "up"
        }), 0 === xm && Em.push({
          x: 0,
          y: 0,
          w: Am,
          h: Am
        })), mm.dot) {
        const Tm = Rm(mm.dotSize * fm, hm),
          am = mm.lines && 0 === xm && mm.dotSize > mm.lineThickness ? Math.max(Tm, Am + 2) : Tm,
          wm = (Am - am) / 2;
        Em.push({
          x: wm,
          y: wm,
          w: am,
          h: am
        })
      }
      const om = Em.map((mm => ({
        ...mm,
        x: mm.x - Dm,
        y: mm.y - Dm,
        w: mm.w + 2 * Dm,
        h: mm.h + 2 * Dm
      })));
      let Om = null,
        Ym = null;
      if (mm.circle) {
        const Tm = wm(mm.circleThickness, fm),
          am = function(mm, Tm) {
            return mm + (mm % 2 === Tm ? 0 : 1)
          }(im(mm, fm), hm),
          xm = (Am - am) / 2;
        Om = pm(xm, am, Tm), Dm > 0 && (Ym = pm(xm - Dm, am + 2 * Dm, Tm + 2 * Dm))
      }
      return {
        cell: Am,
        fills: Em,
        outlines: Dm > 0 ? om : [],
        ring: Om,
        ringOutline: Ym
      }
    }

    function im(mm, Tm) {
      return Math.round(mm.circleRadius * Tm * 2 + wm(mm.circleThickness, Tm))
    }

    function Rm(mm, Tm) {
      return Math.max(2 - Tm, 2 * Math.round((mm - Tm) / 2) + Tm)
    }

    function pm(mm, Tm, fm) {
      const hm = 2 * fm >= Tm - 1;
      return {
        x: mm,
        y: mm,
        size: Tm,
        border: Math.min(fm, Math.floor(Tm / 2)),
        filled: hm
      }
    }
    var Em = fm(1135);
    const om = 1.4;

    function Om(mm, Tm) {
      return mm && Tm ? `scale(${om})` : "scale(1)"
    }

    function Ym(mm) {
      return "classic" === mm.settings.style ? (0, Em.jsx)(Vm, {
        ...mm
      }) : (0, Em.jsx)(zm, {
        ...mm
      })
    }
    const qm = .125;

    function jm(mm, Tm) {
      const fm = {};
      if (mm.color !== xm.h.color && (fm.color = (0, xm.m)(mm.color)), mm.opacity !== xm.h.opacity && (fm.opacity = mm.opacity / 100), mm.outline !== xm.h.outline || mm.outlineColor !== xm.h.outlineColor) {
        const Tm = mm.outline,
          hm = (0, xm.m)(mm.outlineColor);
        fm.textShadow = Tm > 0 ? `-${Tm}px 0 ${hm}, 0 ${Tm}px ${hm}, ${Tm}px 0 ${hm}, 0 -${Tm}px ${hm}` : "none"
      }
      if (mm.size !== xm.h.size) {
        const hm = mm.size / 100;
        fm.fontSize = Tm ? `calc(max(1.3rem, 18px) * ${hm})` : `calc(1.3rem * ${hm})`, fm.marginTop = `-${qm}em`, fm.transformOrigin = `50% calc(50% + ${qm}em)`
      }
      return fm
    }

    function Vm(mm) {
      let {
        settings: Tm,
        touch: fm,
        inPreview: hm,
        inEditor: am,
        pressed: xm = !1,
        pressRef: wm
      } = mm;
      return (0, Em.jsx)("div", {
        className: Am()("Crosshair", {
          Touch: fm,
          CrosshairInPreview: hm,
          CrosshairInEditor: am || hm
        }),
        ref: wm,
        style: {
          transform: Om(xm, Tm.growOnClick),
          ...jm(Tm, fm)
        },
        children: "+"
      })
    }

    function Im(mm, Tm) {
      return mm / Tm + "px"
    }

    function Km(mm, Tm, fm, hm) {
      return {
        ...Jm(mm, Tm, fm),
        width: Im(mm.w, fm),
        height: Im(mm.h, fm),
        background: hm
      }
    }

    function Qm(mm, Tm, fm) {
      return {
        left: Im(mm.x, Tm),
        top: Im(mm.y, Tm),
        width: Im(mm.size, Tm),
        height: Im(mm.size, Tm),
        borderWidth: Im(mm.border, Tm),
        borderColor: fm,
        background: mm.filled ? fm : void 0
      }
    }
    const nm = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Jm(mm, Tm, fm) {
      const [hm, Am] = mm.arm ? nm[mm.arm] : [0, 0], am = Math.round(Tm * fm);
      return {
        left: Im(mm.x + hm * am, fm),
        top: Im(mm.y + Am * am, fm)
      }
    }

    function cm(mm) {
      return mm.arm ? {
        "data-arm": mm.arm,
        "data-x": mm.x,
        "data-y": mm.y
      } : {}
    }

    function zm(mm) {
      let {
        settings: Tm,
        inPreview: fm,
        inEditor: hm,
        pressed: wm = !1,
        spread: im,
        spreadRef: Rm
      } = mm;
      const pm = (0, am.useRef)(null),
        {
          box: Om,
          dpr: Ym
        } = function(mm) {
          const [Tm, fm] = (0, am.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, am.useLayoutEffect)((() => {
            const Tm = mm.current;
            if (!Tm) return;
            const hm = () => {
              const mm = Tm.getBoundingClientRect(),
                hm = window.devicePixelRatio || 1;
              fm((Tm => Tm.dpr === hm && Tm.box.left === mm.left && Tm.box.top === mm.top && Tm.box.width === mm.width && Tm.box.height === mm.height ? Tm : {
                box: {
                  left: mm.left,
                  top: mm.top,
                  width: mm.width,
                  height: mm.height
                },
                dpr: hm
              }))
            };
            hm();
            const Am = new ResizeObserver(hm);
            return Am.observe(Tm), window.addEventListener("resize", hm), window.addEventListener("scroll", hm, !0), () => {
              Am.disconnect(), window.removeEventListener("resize", hm), window.removeEventListener("scroll", hm, !0)
            }
          }), [mm]), Tm
        }(pm),
        qm = (0, am.useRef)(Ym);
      qm.current = Ym;
      const jm = Dm(Tm, Ym, wm && Tm.growOnClick ? om : 1),
        Vm = function(mm, Tm, fm) {
          const hm = Math.round((mm.left + mm.width / 2) * fm - Tm / 2),
            Am = Math.round((mm.top + mm.height / 2) * fm - Tm / 2);
          return {
            x: hm / fm - mm.left,
            y: Am / fm - mm.top
          }
        }(Om, jm.cell, Ym),
        Im = (0, xm.m)(Tm.color),
        nm = (0, xm.m)(Tm.outlineColor),
        zm = (0, am.useRef)(0);
      (0, am.useLayoutEffect)((() => {
        if (Rm) return Rm.current = mm => {
          var Tm;
          zm.current = mm, null === (Tm = pm.current) || void 0 === Tm || Tm.querySelectorAll("[data-arm]").forEach((Tm => {
            Object.assign(Tm.style, Jm(function(mm) {
              return {
                x: Number(mm.dataset.x),
                y: Number(mm.dataset.y),
                arm: mm.dataset.arm
              }
            }(Tm), mm, qm.current))
          }))
        }, () => {
          Rm.current = null
        }
      }), [Rm]);
      const Zm = null !== im && void 0 !== im ? im : zm.current;
      return (0, Em.jsx)("div", {
        ref: pm,
        className: Am()("CrosshairShapes", {
          CrosshairInPreview: fm,
          CrosshairInEditor: hm || fm,
          CrosshairSpreads: void 0 !== Rm
        }),
        children: (0, Em.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Vm.x,
            top: Vm.y,
            opacity: Tm.opacity / 100
          },
          children: (0, Em.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [jm.ringOutline && (0, Em.jsx)("div", {
              className: "CrosshairRing",
              style: Qm(jm.ringOutline, Ym, nm)
            }), jm.outlines.map(((mm, Tm) => (0, Em.jsx)("div", {
              className: "CrosshairPart",
              ...cm(mm),
              style: Km(mm, Zm, Ym, nm)
            }, `o${Tm}`))), jm.ring && (0, Em.jsx)("div", {
              className: "CrosshairRing",
              style: Qm(jm.ring, Ym, Im)
            }), jm.fills.map(((mm, Tm) => (0, Em.jsx)("div", {
              className: "CrosshairPart",
              ...cm(mm),
              style: Km(mm, Zm, Ym, Im)
            }, `f${Tm}`)))]
          })
        })
      })
    }
  },
  34268: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      f: () => qm,
      g: () => Ym
    });
    var hm = fm(34251);
    const Am = "XH1-",
      am = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      xm = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      wm = ["color", "outlineColor"],
      Dm = 1 + 3 * wm.length + xm.length + 1,
      im = Math.ceil(8 * Dm / Math.log2(62)),
      Rm = Am.length + im;

    function pm(mm) {
      let Tm = 90;
      for (const fm of mm) Tm = 31 * Tm + fm & 255;
      return Tm
    }
    const Em = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      om = BigInt(Em.length);

    function Om(mm, Tm) {
      let fm = 0n;
      for (const Am of mm) {
        const mm = Em.indexOf(Am);
        if (mm < 0) return null;
        fm = fm * om + BigInt(mm)
      }
      if (fm >> BigInt(8 * Tm) !== 0n) return null;
      const hm = [];
      for (let Am = 0; Am < Tm; Am++) hm.unshift(Number(0xffn & fm)), fm >>= 8n;
      return hm
    }

    function Ym(mm) {
      let Tm = "shapes" === mm.style ? 1 : 0;
      am.forEach(((fm, hm) => {
        mm[fm] && (Tm |= 1 << hm + 1)
      }));
      const fm = [Tm];
      for (const Am of wm) {
        const Tm = (0, hm.k)(Am, mm[Am]);
        fm.push(Tm >> 16 & 255, Tm >> 8 & 255, 255 & Tm)
      }
      for (const Am of xm) {
        const {
          min: Tm,
          step: am
        } = hm.d[Am];
        fm.push(Math.round(((0, hm.k)(Am, mm[Am]) - Tm) / am))
      }
      return fm.push(pm(fm)), Am + function(mm, Tm) {
        let fm = 0n;
        for (const Am of mm) fm = fm << 8n | BigInt(Am);
        let hm = "";
        for (let Am = 0; Am < Tm; Am++) hm = Em[Number(fm % om)] + hm, fm /= om;
        return hm
      }(fm, im)
    }

    function qm(mm) {
      for (const Tm of mm.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${im}})`, "gi"))) {
        const mm = jm(Om(Tm[1], Dm));
        if (mm) return mm
      }
      return null
    }

    function jm(mm) {
      if (!mm || mm.length !== Dm || pm(mm.slice(0, -1)) !== mm[mm.length - 1]) return null;
      const Tm = mm[0],
        fm = {
          ...hm.h,
          style: 1 & Tm ? "shapes" : "classic"
        };
      am.forEach(((mm, hm) => {
        fm[mm] = 0 !== (Tm & 1 << hm + 1)
      }));
      let Am = 1;
      for (const hm of wm) fm[hm] = mm[Am] << 16 | mm[Am + 1] << 8 | mm[Am + 2], Am += 3;
      for (const am of xm) {
        const {
          min: Tm,
          step: xm
        } = hm.d[am];
        fm[am] = (0, hm.k)(am, Tm + mm[Am] * xm), Am++
      }
      return fm
    }
  },
  34251: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      h: () => Am,
      k: () => am,
      m: () => im,
      o: () => Dm,
      p: () => Rm,
      t: () => wm,
      u: () => xm
    });
    const hm = {
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
      Am = Object.freeze({
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

    function am(mm, Tm) {
      var fm;
      const {
        min: am,
        max: xm,
        step: wm
      } = hm[mm];
      if (!Number.isFinite(Tm)) return Am[mm];
      const Dm = (null !== (fm = String(wm).split(".")[1]) && void 0 !== fm ? fm : "").length,
        im = Number((Math.round(Tm / wm) * wm).toFixed(Dm));
      return Math.min(xm, Math.max(am, im))
    }

    function xm(mm, Tm, fm) {
      const hm = "number" === typeof fm ? am(Tm, fm) : fm;
      return {
        ...mm,
        [Tm]: hm
      }
    }

    function wm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Am).every((hm => fm.includes(hm) || mm[hm] === Tm[hm]))
    }

    function Dm(mm) {
      return wm(mm, Am)
    }

    function im(mm) {
      return `#${mm.toString(16).padStart(6,"0")}`
    }

    function Rm(mm) {
      const Tm = /^#?([0-9a-f]{6})$/i.exec(mm.trim());
      return Tm ? parseInt(Tm[1], 16) : null
    }
  },
  34273: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      g: () => Em
    });
    var hm = fm(59),
      Am = fm(37),
      am = fm(34268),
      xm = fm(34251);
    const wm = "crosshairCode";
    let Dm = null;
    const im = new Set;

    function Rm() {
      if (null === Dm) {
        var mm;
        const Tm = Am.g.getItem(wm);
        Dm = null !== (mm = "string" === typeof Tm ? (0, am.f)(Tm) : null) && void 0 !== mm ? mm : xm.h
      }
      return Dm
    }

    function pm(mm) {
      Dm = mm, (0, xm.o)(mm) ? Am.g.removeItem(wm) : Am.g.setItem(wm, (0, am.g)(mm));
      for (const Tm of im) Tm()
    }

    function Em() {
      const [mm, Tm] = (0, hm.useState)(Rm);
      return (0, hm.useEffect)((() => {
        const mm = () => {
          Tm(Rm())
        };
        return mm(), fm = mm, im.add(fm), () => {
          im.delete(fm)
        };
        var fm
      }), []), mm
    }
  },
  34188: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      h: () => hm
    });
    const hm = "image/jpeg",
      Am = "jpg"
  },
  34194: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm,
      g: () => im,
      i: () => Rm
    });
    var hm = fm(1681),
      Am = fm(3197),
      am = fm(105),
      xm = fm(1730),
      wm = fm(34188);

    function Dm() {
      return !(0, am.isMobileApp)() || hm.e.supports("photos")
    }
    async function im(mm) {
      var Tm, fm;
      if ((0, am.isMobileApp)()) {
        const {
          saved: Tm
        } = await hm.e.request("photos.save", {
          data: await (0, Am.e)(mm),
          mimeType: wm.h
        });
        return Tm ? "saved" : "denied"
      }
      return (0, am.isIOS)() && null !== (Tm = (fm = navigator).canShare) && void 0 !== Tm && Tm.call(fm, {
        files: [mm]
      }) ? Rm(mm) : ((0, xm.c)(mm, mm.name), "saved")
    }
    async function Rm(mm) {
      try {
        return await navigator.share({
          files: [mm]
        }), "shared"
      } catch (Tm) {
        if (Tm instanceof DOMException && "AbortError" === Tm.name) return "Af";
        if (Tm instanceof DOMException && "NotAllowedError" === Tm.name) return "needsTap";
        throw Tm
      }
    }
  },
  34183: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      c: () => Rm,
      f: () => pm
    });
    var hm = fm(23),
      Am = fm(34163),
      am = fm(1635),
      xm = fm(34188);
    const wm = 8294400,
      Dm = .92;

    function im() {
      (0, am.d)(), hm.c.set({
        screenshotMode: !0
      })
    }

    function Rm() {
      hm.c.set({
        screenshotMode: !1
      })
    }
    async function pm() {
      const {
        width: mm,
        height: Tm,
        scale: fm
      } = function(mm, Tm, fm) {
        const hm = Math.max(1, mm),
          Am = Math.max(1, Tm),
          am = Math.min(Math.max(1, fm), Math.sqrt(wm / (hm * Am)));
        return {
          width: Math.round(hm * am),
          height: Math.round(Am * am),
          scale: am
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: hm
      } = await Am.devTools.capturePhoto(mm, Tm, {
        scale: fm,
        type: xm.h,
        quality: Dm
      });
      return new File([hm], function(mm) {
        const Tm = mm => String(mm).padStart(2, "0"),
          fm = `${mm.getFullYear()}${Tm(mm.getMonth()+1)}${Tm(mm.getDate())}`,
          hm = `${Tm(mm.getHours())}${Tm(mm.getMinutes())}${Tm(mm.getSeconds())}`;
        return `bloxd-${fm}-${hm}.${xm.d}`
      }(new Date), {
        type: xm.h
      })
    }
  },
  34245: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      i: () => Am
    });
    var hm = fm(23);

    function Am(mm, Tm) {
      return mm && !Tm
    }

    function am() {
      return Am(hm.c.get("isTouchScreen"), hm.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34168: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    const hm = new Set(["chunkBorders"])
  },
  34163: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ALL_DEV_TOOLS: () => xm,
      coreDevTools: () => im,
      devTools: () => Dm
    });
    var hm = fm(675),
      Am = fm(1296),
      am = fm(34168);
    const xm = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function wm() {
      const {
        noaDevTools: mm
      } = await fm.e(236).then((() => fm(41124)));
      return mm
    }
    const Dm = new class {
        constructor() {
          this.loadHost = wm, this.tools = xm
        }
        setHost(mm) {
          this.tools = null === mm ? xm : mm.tools, this.loadHost = null === mm ? wm : async () => mm
        }
        supports(mm) {
          return this.tools.has(mm)
        }
        async downloadScene(mm, Tm) {
          const fm = await this.loadHost();
          await fm.downloadScene(mm, Tm)
        }
        async setAmbientLightIntensity(mm) {
          const Tm = await this.loadHost();
          await Tm.setAmbientLightIntensity(mm)
        }
        async capturePhoto(mm, Tm, fm) {
          return (await this.loadHost()).capturePhoto(mm, Tm, fm)
        }
      },
      im = {
        tools: am.b,
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
    hm.A && Dm.setHost(im), (0, Am.p)((() => {
      Dm.setHost(im)
    }))
  },
  34322: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => Am,
      h: () => Rm
    });
    var hm = fm(1572);

    function Am(mm) {
      var Tm;
      return {
        ...xm.store,
        yaw: xm.store.yaw + (null !== (Tm = hm.e[mm].previewYaw) && void 0 !== Tm ? Tm : 0)
      }
    }
    const am = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xm = {
        player: am,
        store: {
          ...am,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function wm(mm, Tm) {
      mm instanceof Promise ? mm.then(Tm).catch((mm => {
        console.error("Couldn't open the preview", mm)
      })) : Tm(mm)
    }
    class Dm {
      constructor(mm) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height), null !== this.view && mm.show(this.view))
        }))
      }
      show(mm) {
        var Tm;
        this.view = mm, null === (Tm = this.opened) || void 0 === Tm || Tm.show(mm)
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    class im {
      constructor(mm) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(mm).then((mm => mm.ready)), wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.isReady()) && void 0 !== mm && mm
      }
      setCosmetic(mm, Tm) {
        var fm;
        null === (fm = this.opened) || void 0 === fm || fm.setCosmetic(mm, Tm)
      }
      playEmote(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.playEmote(mm)
      }
      setOrbit(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.setOrbit(mm)
      }
      resetCamera() {
        var mm;
        null === (mm = this.opened) || void 0 === mm || mm.resetCamera()
      }
      async untilDrawn(mm) {
        var Tm;
        await this.ready, await (null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.untilDrawn(mm))
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    const Rm = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(mm) {
        this.host = mm
      }
      setDefaultHost(mm) {
        this.makeDefault = mm
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(mm) {
        return new Dm(this.current().openMob(mm))
      }
      openPet(mm) {
        return new Dm(this.current().openPet(mm))
      }
      openMobLineup(mm) {
        return new Dm(this.current().openMobLineup(mm))
      }
      openCharacter(mm, Tm) {
        return new im(this.current().openCharacter(mm, Tm))
      }
    }
  },
  34319: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.c,
      f: () => hm.e,
      j: () => hm.h
    });
    var hm = fm(34322);
    class Am {
      constructor(mm) {
        this.load = mm, this.loaded = null, this.loading = null
      }
      run(mm) {
        return null !== this.loaded ? mm(this.loaded) : (this.loading ??= this.load().then((mm => (this.loaded = mm, mm)), (mm => {
          throw this.loading = null, mm
        })), this.loading.then(mm))
      }
    }
    class am {
      constructor() {
        this.mobScene = new Am((() => Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(254), fm.e(96), fm.e(255), fm.e(75), fm.e(74), fm.e(252), fm.e(73), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(274), fm.e(228), fm.e(244), fm.e(257), fm.e(260), fm.e(77), fm.e(186), fm.e(222), fm.e(95), fm.e(225), fm.e(240), fm.e(120), fm.e(241), fm.e(76), fm.e(119), fm.e(246)]).then((() => fm(41140))))), this.characterScene = new Am((() => Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(254), fm.e(96), fm.e(255), fm.e(75), fm.e(74), fm.e(252), fm.e(73), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(274), fm.e(228), fm.e(244), fm.e(257), fm.e(260), fm.e(77), fm.e(186), fm.e(222), fm.e(95), fm.e(225), fm.e(240), fm.e(120), fm.e(241), fm.e(76), fm.e(119), fm.e(245)]).then((() => fm(41223)))))
      }
      openMob(mm) {
        return this.mobScene.run((Tm => Tm.openMobPreview(mm)))
      }
      openPet(mm) {
        return this.mobScene.run((Tm => Tm.openPetPreview(mm)))
      }
      openMobLineup(mm) {
        return this.mobScene.run((Tm => Tm.openMobLineupPreview(mm)))
      }
      openCharacter(mm, Tm) {
        return this.characterScene.run((fm => fm.openCharacterPreview(mm, Tm)))
      }
    }
    hm.h.setDefaultHost((() => new am))
  },
  6609: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(37);
    const Am = "shaderPack";
    async function am() {
      var mm;
      let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
    }
  },
  34209: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return mm && !Tm
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  34239: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(1103);

    function Am() {
      var mm, Tm;
      return null !== (mm = null === (Tm = screen.orientation) || void 0 === Tm ? void 0 : Tm.type) && void 0 !== mm ? mm : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const am = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Am() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Am(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, hm.lY)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const mm of this.resizers) mm()
          }
        }), 1e3)
      }
      heldSizer(mm) {
        let Tm = !1;
        return () => {
          if (Tm && this.isHeld()) return null;
          const fm = mm();
          return Tm ||= null !== fm, fm
        }
      }
      onRelease(mm) {
        return this.resizers.add(mm), () => {
          this.resizers.delete(mm)
        }
      }
    }
  },
  34203: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      d: () => pm,
      h: () => Rm
    });
    var hm = fm(23),
      Am = fm(1681),
      am = fm(37),
      xm = fm(3646);
    const wm = 2592e5,
      Dm = "notificationOptInLastPromptedAt";
    async function im() {
      var mm;
      const Tm = null !== (mm = am.g.getItem(Dm)) && void 0 !== mm ? mm : 0;
      return Date.now() - Tm < wm ? null : pm()
    }

    function Rm() {
      am.g.setItem(Dm, Date.now())
    }
    async function pm() {
      return await Am.e.ready, Am.e.supports("notifications") ? hm.c.get("mobilePushNotificationsCanAsk") ? async () => {
        Am.e.request("notifications.requestPermission", {}).then((mm => {
          let {
            canAsk: Tm
          } = mm;
          hm.c.set({
            mobilePushNotificationsCanAsk: Tm
          })
        }), (mm => {
          console.error("The app couldn't ask for push notifications:", mm)
        }))
      }: null: await xm.e.canAsk() ? () => xm.e.requestPermission() : null
    }
  },
  34173: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Vm,
      e: () => im,
      h: () => Ym,
      j: () => Om
    });
    var hm = fm(168),
      Am = fm(1270),
      am = fm(1214),
      xm = fm(1162),
      wm = fm(1706);
    const Dm = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function im(mm) {
      return Dm[mm]
    }

    function Rm(mm) {
      return (0, wm.c)(mm) ? "outdated" : mm instanceof hm.d ? 429 === mm.httpCode ? "busy" : "server" : "offline"
    }

    function pm(mm, Tm, fm) {
      return (0, xm.postJsonWithMetricsCookiesAndJsonResponse)(`${am.clientSideServerUrls.indexUrl}${Tm}`, fm, {
        retries: 3
      }, mm.getMetricsCookies()).catch((mm => (console.error("Bad response from the server when trying to change name:", Tm, mm), {
        outcome: "failed",
        failure: Rm(mm)
      })))
    }

    function Em(mm) {
      return "outcome" in mm && "failed" === mm.outcome
    }

    function om(mm) {
      return console.error("Error when trying to get with new name from DB", mm), {
        outcome: "refused",
        message: mm
      }
    }
    async function Om(mm) {
      const Tm = await pm(mm, "/index/name/random", {});
      return Em(Tm) ? Tm : "err" in Tm ? om(Tm.err) : (mm.setPlayerName(Tm.name), {
        outcome: "changed",
        name: Tm.name
      })
    }
    async function Ym(mm, Tm) {
      const fm = await pm(mm, "/index/name/update", {
        name: Tm
      });
      return Em(fm) ? fm : "err" in fm ? om(fm.err) : fm.nameExists ? {
        outcome: "taken"
      } : (mm.setPlayerName(Tm), {
        outcome: "changed",
        name: Tm
      })
    }

    function qm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const hm = 1 === Tm ? 1 : 10 ** (Tm - 1),
        am = String(hm + Math.floor(fm() * (10 ** Tm - hm)));
      return `${mm.slice(0,Am.j-Tm)}${am}`
    }
    const jm = [1, 2, 3, 4];
    async function Vm(mm, Tm) {
      const fm = await Ym(mm, Tm);
      if ("taken" !== fm.outcome) return fm;
      for (const hm of jm) {
        const fm = qm(Tm, hm),
          Am = await Ym(mm, fm);
        if ("taken" !== Am.outcome) return Am
      }
      return {
        outcome: "taken"
      }
    }
  },
  34217: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      g: () => Dm
    });
    var hm = fm(23);
    const Am = 24,
      am = "farNametags",
      xm = 1e5;

    function wm() {
      var mm;
      return null === (mm = hm.c.get("showDistantNametags")) || void 0 === mm || mm
    }

    function Dm() {
      var mm;
      return null !== (mm = function() {
        const mm = new URLSearchParams(window.location.search).get(am),
          Tm = null === mm || "" === mm ? NaN : Number(mm);
        return Number.isFinite(Tm) && Tm >= 0 ? Math.min(Tm, xm) : null
      }()) && void 0 !== mm ? mm : wm() ? 0 : Am
    }
  },
  34315: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => xm
    });
    const hm = [{
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

    function Am(mm) {
      let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof mm) {
        if (!Number.isFinite(mm)) return "0";
        if (Math.abs(mm) < 100) {
          const Tm = mm < 0 ? "-" : "",
            fm = Math.abs(mm);
          return fm >= 10 ? `${Tm}${fm.toFixed(1).replace(/\.0$/,"")}` : `${Tm}${fm.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Tm = BigInt(Math.floor(mm))
      } else Tm = mm;
      const Am = Tm < 0n ? -Tm : Tm,
        am = Tm < 0n ? "-" : "",
        xm = Am.toString();
      if (xm.length <= fm) return `${am}${xm}`;
      const wm = 3 * Math.floor((xm.length - 1) / 3);
      if (wm < 3) return `${am}${xm}`;
      if (wm > 3 * hm.length) {
        const mm = xm[0],
          Tm = xm.slice(1, 3).replace(/0+$/, "");
        return `${am}${Tm?`${mm}.${Tm}`:mm}e${xm.length-1}`
      }
      const {
        threshold: Dm,
        suffix: im
      } = hm[hm.length - wm / 3], Rm = Am / Dm, pm = Number(1000n * (Am % Dm) / Dm), Em = Number(Rm) + pm / 1e3;
      let om;
      return om = Em >= 100 ? Math.floor(Em).toString() : Em >= 10 ? Em.toFixed(1).replace(/\.0$/, "") : Em.toFixed(2).replace(/\.?0+$/, ""), `${am}${om}${im}`
    }
    const am = hm.map((mm => {
      let {
        threshold: Tm,
        suffix: fm
      } = mm;
      return {
        threshold: Number(Tm),
        suffix: fm
      }
    })).filter((mm => {
      let {
        threshold: Tm
      } = mm;
      return Number.isFinite(Tm)
    }));

    function xm(mm) {
      const Tm = Math.abs(mm),
        fm = mm < 0 ? "-" : "";
      for (const {
          threshold: hm,
          suffix: Am
        }
        of am)
        if (Tm >= hm) {
          const mm = Tm / hm;
          if (mm >= 1e3) return `${fm}${Tm.toExponential(2).replace("e+","e")}`;
          let am;
          return am = mm >= 100 ? Math.floor(mm).toString() : mm >= 10 ? mm.toFixed(1).replace(/\.0$/, "") : mm.toFixed(2).replace(/\.?0+$/, ""), `${fm}${am}${Am}`
        } return `${fm}${Tm}`
    }
  },
  34299: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      g: () => Em,
      h: () => pm,
      i: () => xm,
      l: () => im,
      p: () => Dm
    });
    var hm = fm(354);
    const Am = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      am = {
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

    function xm(mm) {
      var Tm;
      return null !== (Tm = am[mm]) && void 0 !== Tm ? Tm : {
        translationKey: ""
      }
    }
    const wm = {
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

    function Dm(mm) {
      return Am.includes(mm)
    }

    function im(mm) {
      var Tm;
      return !0 === (null === mm || void 0 === mm || null === (Tm = mm.customAttributes) || void 0 === Tm ? void 0 : Tm.cannotEnchant)
    }

    function Rm(mm, Tm) {
      const {
        max: fm
      } = wm[mm].at(-1);
      return Tm <= fm
    }

    function pm(mm) {
      const Tm = Math.sin(mm / 80),
        fm = mm => {
          if (mm <= 0) return 0;
          if (mm > 1) return 1;
          let Tm = 0;
          const fm = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let hm = 0; hm < fm.length; hm++) {
            Tm += (hm % 2 === 0 ? 1 : -1) * fm[hm] * Math.pow(mm, 2 + hm) / (2 + hm)
          }
          return 72 * Tm
        },
        hm = .3 - .78 * Tm,
        Am = .5 - .78 * Tm,
        am = .6 - .7 * Tm,
        xm = .8 - .6 * Tm;
      let wm = fm(hm),
        Dm = fm(Am) - wm,
        im = fm(am) - Dm - wm,
        Rm = fm(xm) - im - Dm - wm;
      hm < .041 && (Dm /= 1 - wm, im /= 1 - wm, Rm /= 1 - wm, wm = 0), Am < .041 && (wm /= 1 - Dm, im /= 1 - Dm, Rm /= 1 - Dm, Dm = 0), am < .041 && (wm /= 1 - im, Dm /= 1 - im, Rm /= 1 - im, im = 0), xm < .041 && (wm /= 1 - Rm, Dm /= 1 - Rm, im /= 1 - Rm, Rm = 0);
      return {
        commonProb: wm,
        uncommonProb: Dm,
        rareProb: im,
        epicProb: Rm,
        legendaryProb: 1 - (Rm + im + Dm + wm)
      }
    }

    function Em(mm, Tm) {
      const {
        min: fm,
        max: Am
      } = wm[mm][Tm], am = hm.c.sampleUniformIntDistribution(fm, Am, "includeMax");
      return {
        ...pm(am),
        level: am
      }
    }
  },
  34264: () => {},
  12785: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13964: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15318: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15838: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);