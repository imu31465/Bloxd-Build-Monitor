export const id = 98;
export const ids = [98, 186];
export const modules = {
  8964: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      EverythingMenu: () => UL
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1095),
      Lb = hb(966),
      Yb = hb(1948),
      Sb = hb(1357),
      ab = hb(1023),
      Hb = hb(1007);

    function wb(bb) {
      let {
        items: ub,
        link: hb,
        onClick: Bb,
        selectedItemId: Ob,
        className: wb,
        padStartsOnTab: Zb = !0
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), pb = (0, ab.k)(), ob = [];
      for (const Gb of ub) {
        var Ab;
        const bb = ob[ob.length - 1];
        var lb;
        if (bb && bb.title === (null !== (Ab = Gb.section) && void 0 !== Ab ? Ab : null)) bb.items.push(Gb);
        else ob.push({
          title: null !== (lb = Gb.section) && void 0 !== lb ? lb : null,
          items: [Gb]
        })
      }
      return (0, Hb.jsxs)("div", {
        className: Gb()("MenuSideBarBody", wb),
        "data-pad-tabs": "2",
        children: [ob.map(((bb, ub) => {
          var hb;
          return (0, Hb.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [bb.title && (0, Hb.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Xb(bb.title)
            }), bb.items.map((bb => {
              var ub;
              const hb = !!bb.iconElement || !!bb.faIcon;
              return (0, Hb.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Ob === bb.id ? "true" : void 0,
                "data-pad-default-focus": Zb && Ob === bb.id || void 0,
                className: Gb()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Ob === bb.id
                }),
                onClick: () => {
                  Bb(bb.id)
                },
                children: [hb && (0, Hb.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (ub = bb.iconElement) && void 0 !== ub ? ub : (0, Hb.jsx)(Lb.e, {
                    name: bb.faIcon
                  })
                }), (!pb || !hb) && (0, Hb.jsx)("div", {
                  children: Xb(bb.title)
                }), bb.redDot && (0, Hb.jsx)(Yb.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, bb.id)
            }))]
          }, null !== (hb = bb.title) && void 0 !== hb ? hb : ub)
        })), hb && (0, Hb.jsxs)("div", {
          ...(0, Sb.V)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: hb.onClick,
          children: [(0, Hb.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Hb.jsx)(Lb.e, {
              name: hb.faIcon
            })
          }), (0, Hb.jsx)("div", {
            children: Xb(hb.title)
          }), (0, Hb.jsx)(Lb.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Zb = hb(2789),
      Xb = hb(1029),
      pb = hb(2288),
      ob = hb(2903),
      Ab = hb(86),
      lb = hb(1811),
      Kb = hb(2131),
      Wb = hb(2138),
      Cb = hb(1585),
      db = hb(1242),
      rb = hb(4765),
      jb = hb(13),
      nb = hb(8972);

    function Db(bb) {
      let {
        setApplySettingsCallback: ub
      } = bb;
      const {
        clientEscMenuOptions: hb
      } = (0, jb.j)(["clientEscMenuOptions"]), [Ob, Gb] = (0, Bb.useState)(!1), [Ub, Lb] = (0, Bb.useState)(!1), [Yb, ab] = (0, Bb.useState)(6400), [wb, Zb] = (0, Bb.useState)(3600), [Xb, pb] = (0, Bb.useState)(!1), [ob, Ab] = (0, Bb.useState)(!1);

      function lb(bb) {
        const ub = "screenshot" === bb ? Lb : Gb;
        ub(!0);
        const hb = Xb ? "normals" : ob ? "depth" : null;
        nb.devTools.downloadScene(bb, {
          width: Yb,
          height: wb,
          colouring: hb
        }).catch((bb => {
          console.error("Couldn't download the scene", bb)
        })).finally((() => {
          ub(!1)
        }))
      }
      return (0, Hb.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Hb.jsx)(rb.c, {
          label: "Disable Ambient Occlusion",
          checked: hb.disableAmbientOcclusion,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              disableAmbientOcclusion: bb
            }), ub((() => rb.k))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), nb.devTools.supports("ambientLight") && (0, Hb.jsx)(rb.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: hb.ambientLightIntensity,
          onChange: bb => {
            nb.devTools.setAmbientLightIntensity(bb).then((() => {
              jb.d.setClientEscMenuOptions({
                ambientLightIntensity: bb
              })
            })).catch((bb => {
              console.error("Couldn't set the ambient light", bb)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), nb.devTools.supports("weaponRaycasts") && (0, Hb.jsx)(rb.c, {
          label: "Show Weapon Raycasts",
          checked: hb.showWeaponRaycasts,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              showWeaponRaycasts: bb
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), nb.devTools.supports("sceneDownload") && (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Hb.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Hb.jsx)(rb.c, {
              label: "Apply normal-based coloring",
              checked: Xb,
              onClick: bb => {
                pb(bb), bb && Ab(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Hb.jsx)(rb.c, {
              label: "Apply depth-based coloring",
              checked: ob,
              onClick: bb => {
                Ab(bb), bb && pb(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Hb.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Hb.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Hb.jsx)(Cb.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, ub) => {
                  const hb = parseInt(bb) || 6400;
                  ab(hb)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Yb.toString()
              }), (0, Hb.jsx)("span", {
                children: "X"
              }), (0, Hb.jsx)(Cb.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, ub) => {
                  const hb = parseInt(bb) || 3600;
                  Zb(hb)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: wb.toString()
              })]
            }), (0, Hb.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Hb.jsxs)(Sb.e, {
                onClick: () => {
                  lb("screenshot")
                },
                disabled: Ub,
                children: [Ub && (0, Hb.jsx)(db.c, {}), "Download Screenshot"]
              }), (0, Hb.jsxs)(Sb.e, {
                onClick: () => {
                  lb("glb")
                },
                disabled: Ob,
                children: [Ob && (0, Hb.jsx)(db.c, {}), "Download GLB"]
              })]
            })]
          }), (0, Hb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var xb = hb(115),
      zb = hb(1038),
      gb = hb(1103),
      ib = hb(2792),
      vb = hb(1415),
      tb = hb(1166),
      Jb = hb(1131),
      eb = hb(2873),
      Nb = hb(1919),
      sb = hb(1398),
      Mb = hb(314),
      mb = hb(2142),
      Ib = hb(2155),
      Pb = hb(2510),
      qb = hb(1544),
      Eb = hb(2845),
      yb = hb(2826),
      Vb = hb(2875),
      Fb = hb(197);

    function fb(bb) {
      const {
        t: ub,
        selectedLanguage: hb
      } = (0, Ub.K)(), {
        userContext: Ob
      } = (0, Xb.d)(), {
        superRankInfo: Gb
      } = Ob, Lb = bb && ((0, Mb.Cc)(Gb) || Ob.ranksMayChange) && (0, Ib.purchasesAllowed)(), {
        accountId: Yb,
        data: Sb
      } = (0, Pb.e)(Eb.c, Lb);
      if ((0, Bb.useEffect)((() => {
          if (Lb) return Eb.c.watchAccount(), qb.b.addRefetchListener("billing", (bb => {
            "reconnected" === bb ? Eb.c.refreshAfterReconnect() : Eb.c.refresh()
          }))
        }), [Lb]), !Lb || !(0, Mb.Cc)(Gb) || null === Sb || Yb !== Ob.whamm) return null;
      const ab = function(bb, ub, hb) {
        const Bb = Vb.h[(0, Vb.c)(Vb.h, ub)],
          Ob = void 0 === Bb ? void 0 : (0, Fb.d)(bb.entitlements, Bb.entitlementId);
        return void 0 === Ob || null === Ob.expiresAt || (0, yb.h)(Ob) <= hb ? null : Ob.willRenew && null === Ob.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Ob.expiresAt, hb)
        } : {
          renews: !1,
          at: (0, yb.h)(Ob)
        }
      }(Sb, Gb.tier, Date.now());
      if (null === ab) return null;
      const Hb = ab.renews ? "store:renewsOn" : "store:endsOn";
      return ub(Hb, {
        date: new Date(ab.at).toLocaleDateString((0, Ub.o)(hb.code, Hb), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var kb = hb(1260),
      Tb = hb(1112),
      cb = hb(4653),
      Qb = hb(1380),
      Rb = hb(3440),
      bu = hb(2121);

    function uu(bb) {
      let {
        showing: ub
      } = bb;
      const {
        t: hb
      } = (0, Ub.K)(), {
        data: Bb,
        failed: Ob
      } = (0, Pb.e)(Rb.d, ub);
      return 0 === (null === Bb || void 0 === Bb ? void 0 : Bb.length) || null === Bb && !Ob ? null : (0, Hb.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Hb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: hb("paymentHistory:title")
        }), null === Bb && Ob && (0, Hb.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: hb("paymentHistory:loadFailed")
        }), null !== Bb && (0, Hb.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Bb.map((bb => (0, Hb.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Hb.jsx)(bu.c, {
              entry: bb
            }), (0, Hb.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Hb.jsx)("div", {
                children: (0, bu.i)(hb, bb)
              }), (0, Hb.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(bb.at).toLocaleDateString(), "number" === typeof bb.orderId && ` \xb7 ${hb("paymentHistory:order",{orderId:bb.orderId})}`]
              })]
            })]
          }, (0, Rb.c)(bb))))
        })]
      })
    }
    var hu = hb(1777),
      Bu = hb(1141),
      Ou = hb(1249),
      Gu = hb(1206),
      Uu = hb(1672),
      Lu = hb(2813);
    async function Yu() {
      try {
        return function(bb) {
          const ub = new Map;
          for (const {
              store: hb,
              status: Bb,
              autoRenewStatus: Ob,
              managementUrl: Gb
            }
            of Object.values(bb.subscriptions)) !(0, yb.k)(hb) || (0, yb.m)(Bb) || "willNotRenew" === Ob || ub.has(hb) || ub.set(hb, null !== Gb && void 0 !== Gb ? Gb : yb.q[hb]);
          return Array.from(ub, (bb => {
            let [ub, hb] = bb;
            return {
              store: ub,
              managementUrl: hb
            }
          }))
        }(await (0, Uu.q)((0, Lu.g)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (bb) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", bb), null
      }
    }
    var Su = hb(298),
      au = hb(2374);
    const Hu = {
      appStore: {
        name: "App Store",
        ...Su.ec.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Su.ec.googlePlay
      },
      discord: {
        name: "Discord",
        ...Su.ec.discord
      }
    };

    function wu(bb) {
      let {
        warning: ub,
        subscriptions: hb
      } = bb;
      const {
        t: Bb
      } = (0, Ub.K)();
      return null !== hb && 0 === hb.length ? (0, Hb.jsx)(Hb.Fragment, {
        children: Bb(ub)
      }) : (0, Hb.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Bb(ub), null === hb && (0, Hb.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Bb("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== hb && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Bb("auth:deleteAccountStoreSubscriptions")
          }), (0, Hb.jsx)(au.c, {
            className: "DeleteAccountSubtitleLinks",
            links: hb.map((bb => {
              let {
                store: ub,
                managementUrl: hb
              } = bb;
              return {
                ...Hu[ub],
                url: hb
              }
            }))
          })]
        })]
      })
    }

    function Zu(bb) {
      let {
        showing: ub
      } = bb;
      const {
        userContext: hb,
        isUserContextUpdating: Ob
      } = (0, Xb.d)(), {
        t: Gb
      } = (0, Ub.K)(), [Lb, Yb] = (0, Bb.useState)(!1), [ab, wb] = (0, Bb.useState)(null), Zb = (0, Bb.useRef)(ub);
      (0, Bb.useEffect)((() => (Zb.current = ub, () => {
        Zb.current = !1
      })), [ub]);
      const pb = Ob || Lb;
      async function ob() {
        const bb = function(bb) {
            if ((0, xb.d)()) return "auth:discordActivityDeleteAccountLossWarning";
            return bb ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(hb.isLoggedIn()),
          ub = (0, hu.b)(hb.availableUserContextTypes) ? await Yu() : [];
        if (!Zb.current) return Bu.b.ok();
        if (!0 !== await Ou.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, tb.e)(hb.getPlayerName(), !Ab.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Hb.jsx)(wu, {
              warning: bb,
              subscriptions: ub
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return Bu.b.ok();
        const Bb = await (0, zb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: jb.d.get("gameState")
        }, {
          retries: 3
        }, hb.getMetricsCookies());
        if (Bb.error) return Bu.b.error(Bb.error);
        if ((0, xb.d)()) {
          (await Gu.l.discordActivity()).exit("User deleted their account")
        }
        return (0, zb.forgetStoredGuestAccount)(hb.whamm), (0, zb.forceGlobalSignOut)(!0), Bu.b.ok()
      }
      return (0, Hb.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Hb.jsxs)(Sb.H, {
          onClick: async function() {
            if (!Lb) {
              Yb(!0);
              try {
                const bb = await ob(),
                  ub = bb.isError() ? bb.asError().message : null;
                wb(ub)
              } catch (bb) {
                console.error("Failed to delete account:", bb), wb(Gb("auth:genericDeleteAccountError"))
              }
              Yb(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: pb,
          children: [pb && (0, Hb.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Hb.jsx)(db.c, {})
          }), Gb("auth:deleteAccount")]
        }), ab && (0, Hb.jsx)("div", {
          className: "DeleteAccountError",
          children: ab
        })]
      })
    }
    var Xu = hb(3373),
      pu = hb(3385),
      ou = hb(3379);

    function Au(bb) {
      let {
        showing: ub
      } = bb;
      const {
        t: hb
      } = (0, Ub.K)(), {
        data: Bb,
        failed: Ob
      } = (0, Pb.e)(Xu.e, ub), Gb = null === Bb ? null : (0, Xu.h)(Bb);
      return (0, Hb.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Hb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: hb("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Gb && !Ob && (0, Hb.jsx)(db.c, {}), null === Gb && Ob && (0, Hb.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [hb("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Hb.jsx)(Sb.e, {
            className: "SmallTextLight",
            onClick: () => {
              Xu.e.refresh()
            },
            children: hb("general:tryAgain")
          })]
        }), 0 === (null === Gb || void 0 === Gb ? void 0 : Gb.length) && (0, Hb.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: hb("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Gb && Gb.length > 0 && (0, Hb.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Gb.map((bb => {
            let {
              name: ub,
              exclusion: Bb
            } = bb;
            const Ob = ou.h[Bb];
            return (0, Hb.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Hb.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: ub
              }), (0, Hb.jsx)(Sb.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, pu.g)(Ob, ub, {
                    chatMessage: null
                  })
                },
                children: hb(ou.i[Ob].text)
              })]
            }, ub)
          }))
        })]
      })
    }
    const lu = (0, Bb.memo)((function(bb) {
      var ub;
      let {
        showing: hb,
        inGame: Ob
      } = bb;
      const {
        t: Yb,
        selectedLanguage: ab
      } = (0, Ub.K)(), {
        hideSocialLocationFrom: wb
      } = (0, jb.j)(["hideSocialLocationFrom"]), pb = (0, Zb.d)(), {
        userContext: ob,
        isUserContextUpdating: lb
      } = (0, Xb.d)(), [Kb, Wb] = (0, Bb.useState)(null !== (ub = ob.getPlayerName()) && void 0 !== ub ? ub : ""), [nb, Db] = (0, Bb.useState)(null), {
        purchasing: Pb,
        outcome: qb,
        purchase: Eb
      } = (0, ib.b)("/super-rank-welcome"), yb = (0, Mb.gc)((0, Ub.o)(ab.code, "general:timeLeft"), ob.superRankInfo), Vb = fb(hb), Fb = yb ? Yb("general:timeLeft", {
        time: yb
      }) : Vb, [Rb, bu] = (0, Bb.useState)(!1), [hu, Bu] = (0, Bb.useState)(!1), Ou = (0, Bb.useRef)(null), Gu = (0, Bb.useRef)(null), Uu = (0, Nb.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Lu = null === Uu, Yu = null !== Uu && void 0 !== Uu ? Uu : [], Su = ob !== zb.NULL_USER_CONTEXT && !ob.isLoggedIn(), au = Su && 0 !== (null === Uu || void 0 === Uu ? void 0 : Uu.length), [Hu, wu] = (0, Bb.useState)([]), [Xu, pu] = (0, Bb.useState)(!1), ou = ob.playerHasRank("youtuber"), lu = (0, Bb.useCallback)((() => sb.e.getPlayerProfile(ob, {
        lowerCaseName: ob.getPlayerName().toLowerCase()
      }).then((bb => {
        wu(bb.socialLinks)
      })).catch((bb => {
        console.error("Failed to refresh social links", bb)
      }))), [ob]);

      function Wu(bb) {
        bb !== Kb && ((0, tb.n)(bb) ? (bb = (0, tb.r)(bb), Db("Only letters, numbers, and _")) : Db(null), Ou.current && (Ou.current.value = bb), Wb(bb))
      }
      return (0, Bb.useEffect)((() => (!0 === hb ? (clearInterval(Gu.current), Gu.current = setInterval(pb, 1e3)) : clearInterval(Gu.current), () => {
        clearInterval(Gu.current)
      })), [hb, pb]), (0, Bb.useEffect)((() => {
        var bb;
        Wb(null !== (bb = ob.getPlayerName()) && void 0 !== bb ? bb : "")
      }), [ob]), (0, Bb.useEffect)((() => {
        if (!hb || !ou || lb) return;
        let bb = !1;
        return pu(!0), wu([]), sb.e.getPlayerProfile(ob, {
          lowerCaseName: ob.getPlayerName().toLowerCase()
        }).then((ub => {
          bb || wu(ub.socialLinks)
        })).catch((bb => {
          console.error("Failed to load social links", bb)
        })).finally((() => {
          bb || pu(!1)
        })), () => {
          bb = !0
        }
      }), [hb, ou, lb, ob]), (0, Hb.jsxs)("div", {
        className: Gb()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Ob
        }),
        children: [Ob && (0, Hb.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Yb("settingsMenu:accountSettingsInGameWarning")
        }), (0, Hb.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Hb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Yb("homePage:discordNamePopupTitle"), (0, Hb.jsxs)(vb.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Jb.g)({
                name: ob.getPlayerName()
              }),
              onClick: () => {
                jb.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Hb.jsx)(Lb.e, {
                name: "arrow-up-right-from-square"
              }), " ", Yb("profileCard:viewProfile")]
            })]
          }), (0, Hb.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Hb.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Ab.featureFlags.canChangeName && (0, Hb.jsx)(Cb.b, {
                className: "EnterName",
                placeholderText: Yb("homePage:enterName"),
                maxLength: tb.l,
                defaultValue: Kb,
                onValueChange: bb => {
                  Wu(bb)
                },
                forcedText: Rb || !Ab.featureFlags.canChangeName ? Kb : null,
                blurOnEnter: !0,
                domRef: Ou
              }), (0, Hb.jsx)(Sb.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Wu((0, tb.h)())
                },
                children: (0, Hb.jsx)(Lb.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Ab.featureFlags.canChangeName && (0, Hb.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, tb.e)(Kb, !Ab.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Hb.jsx)(Sb.e, {
              className: "ChooseNameButton",
              disabled: Rb || Kb === ob.getPlayerName(),
              onClick: () => {
                Kb.length < tb.m ? Db(Yb("homePage:changeNameMinLengthError", {
                  length: tb.m
                })) : Kb.length > tb.l ? Db(Yb("homePage:changeNameMaxLengthError", {
                  length: tb.l
                })) : (bu(!0), Db(null), async function(bb, ub, hb, Bb) {
                  const Ob = await (0, zb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: bb
                  }, {
                    retries: 3
                  }, ub.getMetricsCookies()).catch((bb => (console.error("Bad response from the server when trying to update name:", bb), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Ob.err ? (console.error("Error when trying to get with new name from DB", Ob.err), Bb(Ob.err)) : !0 === Ob.nameExists ? Bb("Name is already taken") : hb(bb)
                }(Kb, ob, (bb => {
                  ob.setPlayerName(bb), bu(!1)
                }), (bb => {
                  Db(bb), bu(!1)
                })))
              },
              children: Yb("general:choose")
            })]
          }), nb && (0, Hb.jsx)("div", {
            className: "ChooseAccNameError",
            children: nb
          })]
        }), (0, Hb.jsx)(rb.c, {
          label: (() => {
            if ((0, Tb.n)(wb)) {
              const bb = (0, Ub.o)(ab.code, "general:timeLeft"),
                ub = (0, Mb.fb)(bb, Date.now(), wb + Tb.k);
              return `${Yb("settingsMenu:hideSocialLocation")} (${Yb("general:timeLeft",{time:ub})})`
            }
            return Yb("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const bb = !(0, Tb.n)(wb);
            (0, Qb.reportAnalyticsClick)({
              id: "social.hide_location",
              value: bb ? "on" : "off"
            }), Bu(!0), sb.e.setHideSocialLocation(ob, bb).then((() => {
              jb.d.set({
                hideSocialLocationFrom: bb ? Date.now() : null
              })
            })).finally((() => {
              Bu(!1)
            }))
          },
          checked: (0, Tb.n)(wb),
          disabled: hu
        }), ou && (0, Hb.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Hb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Yb("settingsMenu:socialLinks")
          }), Xu && (0, Hb.jsx)(db.c, {}), !Xu && (0, Hb.jsx)(cb.e, {
            socialLinks: Hu,
            editable: !0,
            userContext: ob,
            onLinksUpdated: lu
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Hb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Yb(au ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Lu && (0, Hb.jsx)(db.c, {}), !Lu && 0 === Yu.length && (0, Hb.jsx)("div", {
            className: "NoLoginOptions",
            children: Yb("auth:noLoginOptions")
          }), !Lu && Yu.length > 0 && "crazygames" !== xb.s && (0, Hb.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Yu
          }), !Lu && Yu.length > 0 && "crazygames" === xb.s && (0, Hb.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Yu[0], Yu.length > 1 && (0, Hb.jsxs)(Hb.Fragment, {
              children: [(0, Hb.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Hb.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Yb("auth:legacyLoginOptions")
                }), (0, Hb.jsx)(kb.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Yb("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Hb.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Yu.slice(1)
              })]
            })]
          }), Ab.featureFlags.useLogin && (null !== ob.loggedInInfo || ob.isLoggedIn()) && (0, Hb.jsxs)(Hb.Fragment, {
            children: [(0, Hb.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Hb.jsxs)(Sb.H, {
              onClick: () => {
                (0, zb.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Hb.jsx)(Lb.e, {
                name: "right-from-bracket"
              }), Yb("auth:signOut")]
            })]
          })]
        }), !ob.playerHasRank("super") && (0, Ib.purchasesAllowed)() && (0, Hb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Hb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Hb.jsx)(Lb.e, {
              name: "bolt"
            }), Yb("homePage:superRank")]
          }), (0, Hb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Hb.jsxs)(Sb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, mb.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Hb.jsx)(Lb.e, {
                name: "bolt"
              }), Yb("homePage:getSuperRank")]
            }), (0, Hb.jsxs)(Sb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, mb.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Hb.jsx)(Lb.e, {
                name: "bolt"
              }), Yb("homePage:giftSuperRank")]
            })]
          })]
        }), ob.playerHasRank("super") && (0, Hb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Hb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Hb.jsx)(Lb.e, {
              name: "bolt"
            }), Yb("homePage:superRank"), Fb && (0, Hb.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Fb, ")"]
            })]
          }), (0, Ib.purchasesAllowed)() && (0, Hb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Mb.Cc)(ob.superRankInfo) && (0, Hb.jsxs)(Sb.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: Pb,
              onClick: () => {
                Eb(eb.o.id, null)
              },
              children: [(0, Hb.jsx)(Lb.e, {
                name: "bolt"
              }), Yb("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: eb.o.product.days,
                price: eb.o.price
              })]
            }), (0, Hb.jsxs)(Sb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, mb.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Hb.jsx)(Lb.e, {
                name: "bolt"
              }), Yb("homePage:giftSuperRank")]
            })]
          }), qb && (0, Hb.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Yb(qb.translationKey)
          })]
        }), (0, Hb.jsx)(uu, {
          showing: hb
        }), Ab.featureFlags.useSocialFeatures && (0, Hb.jsx)(Au, {
          showing: hb
        }), (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Hb.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Hb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Yb(Ku(Su, au))
            }), (0, xb.d)() && (0, Hb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Yb("auth:discordActivityKickWarning")
            }), (0, Hb.jsx)(Zu, {
              showing: hb
            })]
          }), (0, Hb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Yb("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Ku(bb, ub) {
      return bb ? ub ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Wu = hb(8978),
      Cu = hb(2925),
      du = hb(1144),
      ru = hb(1336);
    const ju = (0, Bb.memo)((function(bb) {
        let {
          inGame: ub
        } = bb;
        const {
          t: hb,
          selectedLanguage: Bb
        } = (0, Ub.K)(), {
          clientEscMenuOptions: Ob,
          showDebugOverlay: Gb
        } = (0, jb.j)(["clientEscMenuOptions", "showDebugOverlay"]), Lb = (0, pb.f)("hideCoordinates");
        let Yb = "settingsMenu:showCoordinates",
          Sb = "settingsMenu:showChunkCoordinates";

        function ab(bb) {
          const ub = new Intl.DisplayNames([bb], {
            type: "language"
          }).of(bb);
          return ub.charAt(0).toUpperCase() + ub.slice(1)
        }
        return Lb && (Yb = "settingsMenu:showCoordinatesHidden", Sb = "settingsMenu:showChunkCoordinatesHidden"), (0, Hb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [ub && Ab.featureFlags.canUseInviteLinks && (0, Hb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Hb.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: hb("settingsMenu:inviteLink")
            }), (0, Hb.jsx)(Wu.i, {})]
          }), (0, Hb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Hb.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: hb("settingsMenu:language")
            }), (0, Hb.jsx)(Cu.b, {
              options: Object.entries(Ub.h).map((bb => {
                let [ub, hb] = bb;
                return {
                  label: (0, Hb.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Hb.jsx)("img", {
                      src: hb.flagImg,
                      alt: "flag"
                    }), (0, Hb.jsxs)("span", {
                      children: [ab(ub), " ", (0, Hb.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", ub, ")"]
                      })]
                    })]
                  }),
                  value: ub
                }
              })),
              value: Bb.code,
              onChange: bb => {
                du.h.get().setCurrentLanguage(bb.value)
              }
            })]
          }), !(0, Ab.isMobileApp)() && (0, ru.g)() && Ab.featureFlags.useForceRotateForceFullscreenOverlay && (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:disableFullscreenMode"),
            checked: Ob.disableFullscreen,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                disableFullscreen: bb
              })
            }
          }), (0, Hb.jsx)(rb.c, {
            label: hb(Yb),
            checked: Ob.showCoordinates,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showCoordinates: bb
              })
            },
            disabled: Lb
          }), (0, Hb.jsx)(rb.c, {
            label: hb(Sb),
            checked: Ob.showChunkCoordinates,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showChunkCoordinates: bb
              })
            },
            disabled: Lb
          }), (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:showFps"),
            checked: Ob.showFPS,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showFPS: bb
              })
            }
          }), (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:disableBunnyHopping"),
            checked: Ob.disableBunnyHopping,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                disableBunnyHopping: bb
              })
            }
          }), (0, Gu.z)() && (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:showChat"),
            checked: Ob.showChat,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showChat: bb
              })
            }
          }), (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:showDebugOverlay"),
            checked: Gb,
            onClick: bb => {
              jb.d.set({
                showDebugOverlay: bb
              })
            }
          }), Ab.featureFlags.useSocialFeatures && (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:showFriendOnlineToasts"),
            checked: Ob.showFriendOnlineToasts,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showFriendOnlineToasts: bb
              })
            }
          }), (0, Hb.jsx)(rb.c, {
            label: hb("settingsMenu:showNewItemIndicator"),
            checked: Ob.showNewItemIndicator,
            onClick: bb => {
              jb.d.setClientEscMenuOptions({
                showNewItemIndicator: bb
              })
            }
          })]
        })
      })),
      nu = (0, Bb.memo)((function() {
        const {
          t: bb
        } = (0, Ub.K)(), {
          soundVolume: ub,
          musicVolume: hb
        } = (0, jb.j)(["soundVolume", "musicVolume"]);
        return (0, Hb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Hb.jsx)(rb.h, {
            name: bb("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: hb,
            onChange: bb => {
              jb.d.set({
                musicVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          }), (0, Hb.jsx)(rb.h, {
            name: bb("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ub,
            onChange: bb => {
              jb.d.set({
                soundVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          })]
        })
      }));
    var Du = hb(665),
      xu = hb(1348),
      zu = hb(3451),
      gu = hb(8985),
      iu = hb(3278);
    const vu = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function tu() {
      const {
        t: bb
      } = (0, Ub.K)(), ub = (0, iu.d)(), {
        mobilePushNotificationsCanAsk: hb
      } = (0, jb.j)(["mobilePushNotificationsCanAsk"]), [Ob, Gb] = (0, Bb.useState)(null), [Lb, Yb] = (0, Bb.useState)(!1), [ab, wb] = (0, Bb.useState)(null), [Zb, Xb] = (0, Bb.useState)(!1), pb = (0, Bb.useCallback)((() => {
        (0, zu.b)().then((bb => {
          ub.current && (Gb(bb), Yb(!1))
        })).catch((bb => {
          console.error("Failed to load push notification targets:", bb), ub.current && Yb(!0)
        }))
      }), [ub]), ob = (0, Bb.useCallback)((() => {
        (0, gu.c)().then((bb => {
          ub.current && wb((() => bb))
        }))
      }), [ub]);
      (0, Bb.useEffect)((() => {
        pb()
      }), [pb]), (0, Bb.useEffect)((() => {
        ob()
      }), [ob, hb]), (0, xu.h)(zu.h, pb);
      const Ab = null === Ob ? [] : Object.keys(vu).filter((bb => Ob[bb] > 0));
      return (0, Hb.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Hb.jsx)("div", {
          className: "SliderText",
          children: bb("notificationSettings:pushNotifications")
        }), null === Ob && Lb && (0, Hb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsLoadFailed")
        }), null !== Ob && 0 === Ab.length && (0, Hb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsNone")
        }), Ab.length > 0 && (0, Hb.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Ab.map((ub => {
            var hb;
            return (0, Hb.jsx)("li", {
              children: bb(vu[ub], {
                count: null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob[ub]) && void 0 !== hb ? hb : 0
              })
            }, ub)
          }))
        }), null !== ab && (0, Hb.jsx)(Sb.e, {
          className: "PushNotificationSettingsButton",
          loading: Zb,
          onClick: () => {
            Xb(!0), ab().catch((bb => {
              console.error("Failed to turn on push notifications:", bb)
            })).finally((() => {
              ub.current && (Xb(!1), ob())
            }))
          },
          children: bb("notificationSettings:pushTurnOn")
        })]
      })
    }
    const Ju = {
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
      eu = (0, Bb.memo)((function() {
        const {
          t: bb
        } = (0, Ub.K)(), {
          clientEscMenuOptions: ub
        } = (0, jb.j)(["clientEscMenuOptions"]);
        return (0, Hb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Hb.jsx)(rb.g, {
            label: bb("notificationSettings:friendRequests"),
            options: Du.e.map((ub => ({
              value: ub,
              label: bb(Ju[ub].label)
            }))),
            value: ub.friendRequestNotifications,
            onChange: bb => {
              jb.d.setClientEscMenuOptions({
                friendRequestNotifications: bb
              })
            },
            circleInfoText: (0, Hb.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Du.e.map((ub => (0, Hb.jsxs)("div", {
                children: [(0, Hb.jsx)("b", {
                  children: bb(Ju[ub].label)
                }), ": ", bb(Ju[ub].info)]
              }, ub)))
            })
          }), (0, Hb.jsx)(tu, {})]
        })
      }));
    var Nu = hb(4262),
      su = hb(191),
      Mu = hb(270),
      mu = hb(6394),
      Iu = hb(3237),
      Pu = hb(8992),
      qu = hb(588),
      Eu = hb(16);
    var yu = hb(599),
      Vu = hb(29),
      Fu = hb(4131);
    const fu = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function ku(bb) {
      return fu.has(bb) ? lb.gameBridge.lookup("VK", null) : null
    }

    function Tu(bb) {
      if (!(0, qu.J)(jb.d.get("clientEscMenuOptions")[bb])) return jb.d.get("clientEscMenuOptions")[bb];
      const ub = ku(bb);
      return null !== ub ? ub[fu.get(bb)] : Vu.j.getItem(bb)
    }

    function cu(bb, ub) {
      if ("useTouchControls" === bb) return void(0, Fu.e)(ub);
      bb in jb.d.get("clientEscMenuOptions") && jb.d.setClientEscMenuOptions({
        [bb]: ub
      });
      const hb = ku(bb);
      null !== hb && lb.gameBridge.send("setChunkAddDistance", {
        ...hb,
        [fu.get(bb)]: ub
      }), Vu.j.setItem(bb, ub)
    }
    var Qu = hb(4185),
      Ru = hb(8996),
      bh = hb(9e3),
      uh = hb(4260);

    function hh(bb) {
      var ub, Ob, Lb, Yb;
      let {
        minChunkAddDist: Sb,
        getValue: ab,
        onChange: wb,
        setApplySettingsCallback: Zb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), {
        clientEscMenuOptions: ob
      } = (0, jb.j)(["clientEscMenuOptions", "showDistantNametags"]), lb = (0, Bb.useRef)(ab("showFog")), Kb = (0, Bb.useRef)(ob.antiAliasing), Wb = (0, Bb.useRef)(ob.useWebGpu), [Cb, db] = (0, Bb.useState)(null), [Db, xb] = (0, Bb.useState)((() => (0, Iu.e)(Ab.featureFlags.settings.canUseShaderPacks))), [zb] = (0, Bb.useState)((() => jb.d.isWebGpuDefaultOff())), [gb] = (0, Bb.useState)(Mu.g);
      (0, Bb.useEffect)((() => {
        let bb = !1;
        return (0, Ab.hasUsableWebGpuAdapter)().then((ub => {
          bb || db(ub)
        })), (0, Iu.j)(Ab.featureFlags.settings.canUseShaderPacks) && (0, mu.g)().then((async ub => {
          const Bb = null !== ub && await async function(bb) {
            const [{
              isShaderPackActive: ub
            }, {
              loadPageShaderPackCompiler: Bb
            }] = await Promise.all([hb.e(128).then((() => hb(6388))), Promise.all([hb.e(75), hb.e(132), hb.e(131)]).then((() => hb(6350)))]);
            return ub(bb, await Bb())
          }(ub);
          bb || xb(Bb)
        })), () => {
          bb = !0
        }
      }), []);
      const ib = function(bb, ub, hb, Bb, Ob) {
          return (0, Pu.b)(hb, Bb) && !0 === ub ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== ub ? "settingsMenu:newWebGpu" : Ob ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: bb && !1 !== ub,
            disabled: !0 !== ub
          }
        }(ob.useWebGpu, Cb, Db, zb, gb),
        vb = (ob.useWebGpu || (0, Pu.b)(Db, zb)) && Db && !0 === Cb,
        tb = (0, pb.f)("lightingOverride"),
        Jb = !(0, qu.J)(tb);
      let eb = "settingsMenu:enableLighting";
      Jb && (eb = tb ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Nb = bb => {
          var ub, hb, Bb;
          const Ob = null !== (ub = bb.showFog) && void 0 !== ub ? ub : ab("showFog"),
            Gb = null !== (hb = bb.antiAliasing) && void 0 !== hb ? hb : ob.antiAliasing,
            Ub = null !== (Bb = bb.useWebGpu) && void 0 !== Bb ? Bb : ob.useWebGpu,
            Lb = !yu.o && Ob !== lb.current || Gb !== Kb.current || Ub !== Wb.current;
          Zb(Lb ? () => rb.k : null)
        },
        sb = (0, pb.f)("fogChunkDistanceOverride"),
        Mb = (0, pb.f)("fogBlockDistanceOverride"),
        mb = !(0, qu.J)(sb) || !(0, qu.J)(Mb),
        Ib = mb ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Pb, qb] = (0, Nu.h)(Sb),
        [Eb, yb] = (0, uh.f)(Sb),
        Vb = Xb("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Fb = Eb < Pb,
        fb = Math.min(null !== (ub = ab("chunkHorizAddDist")) && void 0 !== ub ? ub : Sb[0], Eb),
        kb = !mb && function(bb, ub) {
          return !0 === bb.showFog && bb.fogChunkDistance > ub
        }(ob, fb);
      return (0, Hb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Hb.jsx)(rb.h, {
          name: Xb("settingsMenu:horizontalChunkLoadDistance"),
          min: Sb[0],
          max: Pb,
          selectableMax: Eb,
          cappedNote: Vb,
          step: 1,
          initValue: fb,
          onChange: bb => {
            !0 === ab("showFog") && bb < ab("fogChunkDistance") && wb("fogChunkDistance", bb), wb("chunkHorizAddDist", bb), Eu.i.vp("updatedChunkLoadDist")
          },
          circleInfoText: Xb("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Hb.jsx)(rb.h, {
          name: Xb("settingsMenu:verticalChunkLoadDistance"),
          min: Sb[1],
          max: qb,
          selectableMax: yb,
          cappedNote: Fb ? void 0 : Vb,
          step: 1,
          initValue: Math.min(null !== (Ob = ab("chunkVertAddDist")) && void 0 !== Ob ? Ob : Sb[1], yb),
          onChange: bb => {
            wb("chunkVertAddDist", bb), Eu.i.vp("updatedChunkLoadDist")
          },
          circleInfoText: Xb("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:chunkFadeIn"),
          checked: ob.chunkFadeIn,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              chunkFadeIn: bb
            })
          },
          circleInfoText: Xb("settingsMenu:chunkFadeInInfo")
        }), nb.devTools.supports("chunkBorders") && (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:showChunkBorders"),
          checked: ob.showChunkBorders,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              showChunkBorders: bb
            })
          },
          circleInfoText: Xb("settingsMenu:showChunkBordersInfo")
        }), (0, Hb.jsx)(rb.c, {
          label: Xb(eb),
          checked: ob.enableLighting,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              enableLighting: bb
            })
          },
          disabled: Jb
        }), (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Hb.jsx)(rb.c, {
            label: Xb(Ib),
            checked: ob.showFog,
            onClick: bb => {
              Nb({
                showFog: bb
              }), jb.d.setClientEscMenuOptions({
                showFog: bb
              })
            },
            disabled: mb,
            className: Gb()({
              SettingBoxWarning: kb
            })
          }), (0, Hb.jsx)(rb.h, {
            name: Xb("settingsMenu:fogChunkDistance"),
            min: Sb[0],
            max: su.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Lb = ob.fogChunkDistance) && void 0 !== Lb ? Lb : Sb[0],
            onChange: bb => {
              jb.d.setClientEscMenuOptions({
                fogChunkDistance: bb
              }), Eu.i.vp("fogChunkDistanceChanged", bb)
            },
            circleInfoText: Xb("settingsMenu:fogChunkDistanceInfo"),
            disabled: mb || !1 === ab("showFog"),
            className: Gb()({
              SettingBoxWarning: kb
            })
          }), kb && (0, Hb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Xb("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !yu.o && (0, Hb.jsx)(rb.c, {
          label: Xb(vb ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !vb && ob.disableTexAtlas,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              disableTexAtlas: bb
            })
          },
          circleInfoText: Xb("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: vb
        }), (0, Hb.jsx)(rb.h, {
          name: Xb("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: ob.cameraFOV,
          onChange: bb => {
            jb.d.setClientEscMenuOptions({
              cameraFOV: bb
            })
          }
        }), (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:disableViewBobbing"),
          checked: ob.disableBobbing,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              disableBobbing: bb
            })
          },
          circleInfoText: Xb("settingsMenu:disableViewBobbingInfo")
        }), (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:antiAliasing"),
          checked: ob.antiAliasing,
          onClick: bb => {
            Nb({
              antiAliasing: bb
            }), (0, Qu.e)("antiAliasing"), jb.d.setClientEscMenuOptions({
              antiAliasing: bb
            })
          },
          circleInfoText: Xb("settingsMenu:antiAliasingInfo")
        }), (0, Hb.jsx)(rb.h, {
          name: Xb("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Yb = ob.pixelScale) && void 0 !== Yb ? Yb : 1,
          onChange: bb => {
            (bb !== jb.d.get("clientEscMenuOptions").pixelScale || (0, bh.r)()) && (0, Qu.e)("pixelScale"), jb.d.setClientEscMenuOptions({
              pixelScale: bb
            })
          },
          circleInfoText: Xb("settingsMenu:pixelScaleInfo"),
          format: bb => `${bb}x`
        }), (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:pixelSmoothing"),
          checked: ob.pixelSmoothing,
          onClick: bb => {
            jb.d.setClientEscMenuOptions({
              pixelSmoothing: bb
            })
          },
          circleInfoText: Xb("settingsMenu:pixelSmoothingInfo")
        }), yu.o && (0, Hb.jsx)(rb.c, {
          label: Xb("settingsMenu:distantNametags"),
          checked: (0, Ru.d)(),
          onClick: bb => {
            jb.d.set({
              showDistantNametags: bb
            })
          },
          circleInfoText: Xb("settingsMenu:distantNametagsInfo")
        }), (0, Hb.jsx)(rb.c, {
          label: Xb(ib.translationKey),
          checked: ib.checked,
          onClick: bb => {
            Nb({
              useWebGpu: bb
            }), jb.d.setClientEscMenuOptions({
              useWebGpu: bb
            })
          },
          circleInfoText: Xb("settingsMenu:newWebGpuInfo"),
          disabled: ib.disabled
        })]
      })
    }
    var Bh = hb(4176),
      Oh = hb(8599),
      Gh = hb(9023),
      Uh = hb(8605),
      Lh = hb(9031);
    const Yh = {
        color: 16777215,
        name: "white"
      },
      Sh = {
        color: 0,
        name: "black"
      },
      ah = [Yh, {
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
      }, Sh],
      Hh = [Sh, Yh];

    function wh(bb) {
      return `${bb} px`
    }

    function Zh(bb) {
      return `${bb}%`
    }

    function Xh(bb) {
      let {
        label: ub,
        value: hb,
        swatches: Bb,
        onChange: Ob
      } = bb;
      const {
        t: Lb
      } = (0, Ub.K)(), Yb = !Bb.some((bb => bb.color === hb));
      return (0, Hb.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Hb.jsx)("div", {
          className: "SliderText",
          children: ub
        }), (0, Hb.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": ub,
          children: [Bb.map((bb => {
            let {
              color: ub,
              name: Bb
            } = bb;
            return (0, Hb.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": ub === hb,
              "aria-label": Lb(`crosshairSettings:color_${Bb}`),
              "data-pad-focusable": !0,
              className: Gb()("CrosshairSwatch", {
                Selected: ub === hb
              }),
              style: {
                background: (0, Lh.h)(ub)
              },
              onClick: () => {
                Ob(ub)
              }
            }, ub)
          })), (0, Hb.jsx)("label", {
            className: Gb()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Yb
            }),
            style: Yb ? {
              background: (0, Lh.h)(hb)
            } : void 0,
            title: Lb("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Hb.jsx)("input", {
              type: "color",
              "aria-label": Lb("crosshairSettings:customColor"),
              value: (0, Lh.h)(hb),
              onChange: bb => {
                const ub = (0, Lh.m)(bb.target.value);
                null !== ub && Ob(ub)
              }
            })
          })]
        })]
      })
    }

    function ph(bb) {
      let {
        settings: ub,
        onChange: hb
      } = bb;
      const {
        t: Bb
      } = (0, Ub.K)(), Ob = (bb, Bb) => {
        hb((0, Lh.p)(ub, bb, Bb))
      }, Gb = function(bb, hb) {
        let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wh;
        const {
          min: Gb,
          max: Ub,
          step: Lb
        } = Lh.b[bb];
        return (0, Hb.jsx)(rb.h, {
          name: hb,
          min: Gb,
          max: Ub,
          step: Lb,
          initValue: ub[bb],
          format: Bb,
          onChange: ub => {
            Ob(bb, ub)
          }
        }, bb)
      }, Lb = ["lines", "dot", "circle"].filter((bb => ub[bb])), Yb = (bb, hb, Bb) => (0, Hb.jsx)(rb.c, {
        label: hb,
        checked: ub[bb],
        disabled: 1 === Lb.length && Lb[0] === bb,
        circleInfoText: Bb,
        onClick: ub => {
          Ob(bb, ub)
        }
      }, bb), Sb = "shapes" === ub.style;
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [(0, Hb.jsx)(rb.g, {
          label: Bb("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Bb("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Bb("crosshairSettings:styleShapes")
          }],
          value: ub.style,
          onChange: bb => {
            Ob("style", bb)
          }
        }), (0, Hb.jsx)(Xh, {
          label: Bb("crosshairSettings:color"),
          value: ub.color,
          swatches: ah,
          onChange: bb => {
            Ob("color", bb)
          }
        }), Gb("opacity", Bb("crosshairSettings:opacity"), Zh), !Sb && Gb("size", Bb("crosshairSettings:size"), Zh), Sb && (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Yb("lines", Bb("crosshairSettings:lines")), ub.lines && Gb("lineLength", Bb("crosshairSettings:lineLength")), ub.lines && Gb("lineThickness", Bb("crosshairSettings:lineThickness")), ub.lines && Gb("gap", Bb("crosshairSettings:gap")), ub.lines && Yb("tStyle", Bb("crosshairSettings:tStyle"))]
        }), Sb && (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Yb("dot", Bb("crosshairSettings:dot")), ub.dot && Gb("dotSize", Bb("crosshairSettings:dotSize"))]
        }), Sb && (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Yb("circle", Bb("crosshairSettings:circle")), ub.circle && Gb("circleRadius", Bb("crosshairSettings:circleRadius")), ub.circle && Gb("circleThickness", Bb("crosshairSettings:circleThickness"))]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Gb("outline", Bb("crosshairSettings:outline"), (bb => bb > 0 ? wh(bb) : Bb("crosshairSettings:off"))), ub.outline > 0 && (0, Hb.jsx)(Xh, {
            label: Bb("crosshairSettings:outlineColor"),
            value: ub.outlineColor,
            swatches: Hh,
            onChange: bb => {
              Ob("outlineColor", bb)
            }
          })]
        }), Yb("growOnClick", Bb("crosshairSettings:growOnClick")), Sb && Yb("forGuns", Bb("crosshairSettings:forGuns"), Bb("crosshairSettings:forGunsInfo"))]
      })
    }
    var oh = hb(65),
      Ah = hb(1177),
      lh = hb(9033),
      Kh = hb(9040),
      Wh = hb(9046),
      Ch = hb(9049);
    const dh = ["sky", "grass", "stone", "sand", "snow", "night"],
      rh = "4rem";

    function jh(bb) {
      return {
        backgroundImage: `url(${bb})`,
        backgroundSize: `${rh} ${rh}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function nh(bb) {
      return {
        ...(() => {
          switch (bb) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return jh(lh);
            case "stone":
              return jh(Kh);
            case "sand":
              return jh(Wh);
            case "snow":
              return jh(Ch);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Dh(bb) {
      return Object.freeze({
        ...Lh.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...bb
      })
    }
    const xh = [{
        id: "default",
        settings: Lh.e
      }, {
        id: "cross",
        settings: Dh({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Dh({
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
        settings: Dh({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Dh({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Dh({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Dh({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Dh({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      zh = ["growOnClick", "forGuns"];
    var gh = hb(9057);

    function ih(bb) {
      let {
        label: ub,
        selected: hb,
        onClick: Bb,
        className: Ob,
        style: Ub,
        children: Lb
      } = bb;
      return (0, Hb.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": hb,
        title: ub,
        "aria-label": ub,
        "data-pad-focusable": !0,
        className: Gb()("CrosshairBackdropSwatch", Ob, {
          Selected: hb
        }),
        style: Ub,
        onClick: Bb,
        children: Lb
      })
    }

    function vh(bb) {
      let {
        backdrop: ub,
        onChange: hb,
        game: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)();
      return (0, Hb.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Ob("crosshairSettings:background"),
        children: [Bb && (0, Hb.jsx)(ih, {
          label: Ob("crosshairSettings:bg_game"),
          selected: Bb.selected,
          onClick: Bb.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Hb.jsx)(Lb.e, {
            name: "cube"
          })
        }), dh.map((bb => (0, Hb.jsx)(ih, {
          label: Ob(`crosshairSettings:bg_${bb}`),
          selected: !(null !== Bb && void 0 !== Bb && Bb.selected) && bb === ub,
          style: nh(bb),
          onClick: () => {
            hb(bb)
          }
        }, bb)))]
      })
    }

    function th(bb) {
      let {
        settings: ub,
        touch: hb,
        backdrop: Bb,
        onChange: Ob
      } = bb;
      const {
        t: Lb
      } = (0, Ub.K)(), Yb = function(bb) {
        var ub;
        return null !== (ub = xh.find((ub => (0, Lh.o)(ub.settings, bb, zh)))) && void 0 !== ub ? ub : null
      }(ub);
      return (0, Hb.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Lb("crosshairSettings:presets"),
        children: xh.map((bb => {
          const Ub = (null === Yb || void 0 === Yb ? void 0 : Yb.id) === bb.id;
          return (0, Hb.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Ub,
            "data-pad-focusable": !0,
            className: Gb()("CrosshairPreset", {
              Selected: Ub
            }),
            onClick: () => {
              Ob(function(bb, ub) {
                return {
                  ...ub.settings,
                  growOnClick: bb.growOnClick,
                  forGuns: bb.forGuns
                }
              }(ub, bb))
            },
            children: [(0, Hb.jsx)("div", {
              className: "CrosshairPresetStage",
              style: nh(Bb),
              children: (0, Hb.jsx)(gh.d, {
                settings: bb.settings,
                touch: hb,
                inPreview: !0
              })
            }), (0, Hb.jsx)("div", {
              className: "CrosshairPresetName",
              children: Lb(`crosshairSettings:preset_${bb.id}`)
            })]
          }, bb.id)
        }))
      })
    }
    var Jh = hb(1577);

    function eh(bb, ub) {
      const [hb, Ob] = (0, Bb.useState)(!1), Gb = () => {
        Ob(!1)
      }, [Ub, Lb] = (0, Bb.useState)(!1), Yb = (0, Bb.useRef)({
        growOnClick: bb.growOnClick,
        forGuns: bb.forGuns
      });
      (0, Bb.useEffect)((() => {
        const ub = Yb.current;
        Yb.current = {
          growOnClick: bb.growOnClick,
          forGuns: bb.forGuns
        }, (bb.growOnClick && !ub.growOnClick || bb.forGuns && !ub.forGuns) && Lb(!0)
      }), [bb.growOnClick, bb.forGuns]), (0, Bb.useEffect)((() => {
        if (!Ub) return;
        const bb = setTimeout((() => {
          Lb(!1)
        }), 600);
        return () => {
          clearTimeout(bb)
        }
      }), [Ub]);
      const Sb = hb || Ub;
      return {
        view: {
          pressed: Sb,
          spread: Sb && bb.forGuns && !bb.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: bb => {
            !bb.target.closest(ub) && (0, Jh.c)(bb.currentTarget, bb.pointerId) && Ob(!0)
          },
          onPointerUp: Gb,
          onPointerCancel: Gb,
          onLostPointerCapture: Gb
        }
      }
    }

    function Nh(bb) {
      let {
        settings: ub,
        touch: hb,
        backdrop: Bb,
        className: Ob,
        children: Ub,
        label: Lb
      } = bb;
      const Yb = eh(ub, ".CrosshairStageControls");
      return (0, Hb.jsxs)("div", {
        className: Gb()("CrosshairStage", Ob),
        style: nh(Bb),
        ...Yb.handlers,
        children: [(0, Hb.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Lb,
          children: (0, Hb.jsx)(gh.d, {
            settings: ub,
            touch: hb,
            inPreview: !0,
            ...Yb.view
          })
        }), Ub]
      })
    }
    const sh = "crosshairFullScreen";

    function Mh(bb) {
      let {
        settings: ub,
        touch: hb,
        backdrop: Ob,
        onBackdrop: Yb,
        inGame: ab,
        onChange: wb,
        onClose: Zb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), pb = (0, Bb.useRef)(null);
      (0, Ah.v)("popup", pb, Zb),
      function(bb) {
        const ub = (0, Bb.useRef)(bb);
        ub.current = bb, (0, Bb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [sh]: !0
          }, "");
          let bb = !1;
          const hb = () => {
            bb = !0, ub.current()
          };
          return window.addEventListener("popstate", hb), () => {
            var ub;
            window.removeEventListener("popstate", hb), !bb && null !== (ub = window.history.state) && void 0 !== ub && ub[sh] && window.history.back()
          }
        }), [])
      }(Zb);
      const ob = (0, Bb.useRef)(Zb);
      ob.current = Zb, (0, Bb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), ob.current())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), []);
      const Ab = eh(ub, ".CrosshairFullScreenPanel"),
        [lb, Kb] = (0, Bb.useState)(!0),
        Wb = lb && ab;
      (0, Bb.useEffect)((() => {
        if (Wb) return jb.d.set({
          crosshairGameView: !0
        }), () => {
          jb.d.set({
            crosshairGameView: !1
          })
        }
      }), [Wb]);
      const [Cb, db] = (0, Bb.useState)(!0);
      return (0, oh.createPortal)((0, Hb.jsxs)("div", {
        ref: pb,
        className: "CrosshairFullScreen",
        style: Wb ? void 0 : nh(Ob),
        ...Ab.handlers,
        children: [(0, Hb.jsx)(gh.d, {
          settings: ub,
          touch: hb,
          inEditor: !0,
          ...Ab.view
        }), (0, Hb.jsxs)("div", {
          className: Gb()("CrosshairFullScreenPanel", {
            Collapsed: !Cb
          }),
          children: [(0, Hb.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Hb.jsx)(vh, {
              backdrop: Ob,
              onChange: bb => {
                Kb(!1), Yb(bb)
              },
              game: ab ? {
                selected: Wb,
                onSelect: () => {
                  Kb(!0)
                }
              } : void 0
            }), (0, Hb.jsx)(Sb.O, {
              className: "CrosshairPanelToggle",
              ariaLabel: Xb(Cb ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                db(!Cb)
              },
              children: (0, Hb.jsx)(Lb.e, {
                name: Cb ? "caret-up" : "pen"
              })
            }), (0, Hb.jsx)(Sb.e, {
              className: "CrosshairFullScreenDone",
              onClick: Zb,
              padDefaultFocus: !0,
              children: Xb("crosshairSettings:done")
            })]
          }), Cb && (0, Hb.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Hb.jsx)(th, {
              settings: ub,
              touch: hb,
              backdrop: Ob,
              onChange: wb
            }), (0, Hb.jsx)(ph, {
              settings: ub,
              onChange: wb
            })]
          })]
        })]
      }), document.body)
    }
    var mh = hb(2500),
      Ih = hb(9071);

    function Ph(bb) {
      let {
        settings: ub,
        onChange: hb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)(), Yb = (0, Ih.f)(ub), [ab, wb] = (0, mh.h)(), [Zb, Xb] = (0, Bb.useState)(!1), pb = (0, Bb.useRef)(null), [ob, Ab] = (0, mh.h)(), [lb, Kb] = (0, Bb.useState)(!1);
      return (0, Hb.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Hb.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Hb.jsxs)(Sb.O, {
            className: Gb()("CrosshairCopy", {
              ActiveSecondaryButton: ab
            }),
            onClick: () => {
              (0, mh.f)(Yb, {
                useShareSheet: !1,
                onOutcome: bb => {
                  Xb("failed" === bb), "copied" === bb && wb()
                }
              })
            },
            children: [(0, Hb.jsx)(Lb.e, {
              name: ab ? "check" : "copy"
            }), " ", Ob(ab ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Hb.jsx)(Cb.b, {
            className: "CrosshairPaste",
            domRef: pb,
            ariaLabel: Ob("crosshairSettings:paste"),
            placeholderText: Ob("crosshairSettings:paste"),
            onValueChange: bb => {
              const ub = (0, Ih.e)(bb);
              Kb(!ub && bb.trim().length >= Ih.b), ub && (hb(ub), pb.current.value = "", Ab())
            }
          })]
        }), Zb && (0, Hb.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Yb,
          "aria-label": Ob("crosshairSettings:copy"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, Hb.jsxs)("div", {
          "aria-live": "polite",
          children: [lb && (0, Hb.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Ob("crosshairSettings:pasteInvalid")
          }), ob && !lb && (0, Hb.jsx)("div", {
            className: "CrosshairShareNote",
            children: Ob("crosshairSettings:applied")
          })]
        })]
      })
    }
    var qh = hb(9073);
    let Eh = "sky";

    function yh(bb) {
      let {
        showing: ub
      } = bb;
      const {
        t: hb
      } = (0, Ub.K)(), {
        isTouchScreen: Ob,
        gameState: Gb,
        clientEscMenuOptions: Yb
      } = (0, jb.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), ab = (0, qh.e)(), [wb, Zb] = (0, Bb.useState)(Eh), Xb = bb => {
        Eh = bb, Zb(bb)
      }, [pb, ob] = (0, Bb.useState)(!1);
      return (0, Bb.useEffect)((() => {
        ub || ob(!1)
      }), [ub]), (0, Hb.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Hb.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Hb.jsx)(Nh, {
            className: "CrosshairPreviewStage",
            settings: ab,
            touch: Ob,
            backdrop: wb,
            label: hb("crosshairSettings:preview"),
            children: (0, Hb.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Hb.jsx)(vh, {
                backdrop: wb,
                onChange: Xb
              }), (0, Hb.jsxs)(Sb.O, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  ob(!0)
                },
                children: [(0, Hb.jsx)(Lb.e, {
                  name: "expand"
                }), " ", hb("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Hb.jsx)("div", {
          className: "SettingBox",
          children: (0, Hb.jsx)(th, {
            settings: ab,
            touch: Ob,
            backdrop: wb,
            onChange: qh.b
          })
        }), (0, Hb.jsx)(Ph, {
          settings: ab,
          onChange: qh.b
        }), Ob && (0, Hb.jsx)(Uh.e, {
          note: (0, Gh.g)(Ob, Yb.touchActionButtons) ? hb("crosshairSettings:touchNote") : void 0
        }), (0, Hb.jsx)(ph, {
          settings: ab,
          onChange: qh.b
        }), pb && (0, Hb.jsx)(Mh, {
          settings: ab,
          touch: Ob,
          backdrop: wb,
          onBackdrop: Xb,
          inGame: "inGame" === Gb,
          onChange: qh.b,
          onClose: () => {
            ob(!1)
          }
        })]
      })
    }
    var Vh = hb(8603),
      Fh = hb(1296),
      fh = hb(4760),
      kh = hb(9077),
      Th = hb(1857),
      ch = hb(4053),
      Qh = hb(1865),
      Rh = hb(668);
    const bB = (0, Bb.memo)((function() {
      const {
        clientEscMenuOptions: bb
      } = (0, jb.j)(["clientEscMenuOptions"]), {
        recording: ub,
        clipping: hb,
        hasClipBuffer: Ob
      } = (0, Th.i)("replayRecorder"), Ub = (0, Th.g)("connectedGame", (bb => bb.replay)), Lb = (0, ch.g)(), Yb = !1 === (0, pb.f)("canRecordReplays");
      (0, Bb.useEffect)((() => {
        lb.gameBridge.send("setRecorderPrefs", {
          clipping: bb.enableClipping,
          clipSeconds: bb.clipDurationSeconds
        })
      }), [bb.enableClipping, bb.clipDurationSeconds]);
      const ab = Lb || Ub,
        wb = !ab && !Yb,
        Zb = ub || wb,
        Xb = wb,
        ob = Xb && hb && !ub;

      function Ab() {
        Zb && lb.gameBridge.send("toggleRecording", null)
      }
      return (0, Hb.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Hb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: ub ? (0, Hb.jsxs)(Hb.Fragment, {
              children: [(0, Hb.jsxs)(Sb.H, {
                className: "ReplayViewerCategoryButton",
                onClick: Ab,
                disabled: !Zb,
                children: [(0, Hb.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Hb.jsx)(Qh.e, {
                  noaAction: "recordGame"
                })]
              }), (0, Hb.jsx)(kh.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Hb.jsxs)(Sb.e, {
              className: "ReplayViewerCategoryButton",
              onClick: Ab,
              disabled: !Zb,
              children: [(0, Hb.jsx)("span", {
                children: "Start Recording"
              }), (0, Hb.jsx)(Qh.e, {
                noaAction: "recordGame"
              })]
            })
          }), Yb && (0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), ab && !ub && (0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Hb.jsx)(rb.c, {
            label: "Enable clipping",
            checked: bb.enableClipping,
            disabled: !Xb,
            onClick: function(bb) {
              Xb && jb.d.setClientEscMenuOptions({
                enableClipping: bb
              })
            },
            className: Gb()({
              SettingBoxDisabled: !Xb
            })
          }), (0, Hb.jsx)(rb.h, {
            name: "Clip duration (seconds)",
            min: Rh.j,
            max: Rh.h,
            step: Rh.c,
            initValue: bb.clipDurationSeconds,
            onChange: function(bb) {
              jb.d.setClientEscMenuOptions({
                clipDurationSeconds: bb
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Xb || !bb.enableClipping
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Hb.jsxs)(Sb.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              ob && lb.gameBridge.send("saveClip", null)
            },
            disabled: !ob,
            children: [(0, Hb.jsx)("span", {
              children: "Record clip"
            }), (0, Hb.jsx)(Qh.e, {
              noaAction: "recordClip"
            })]
          }), bb.enableClipping && !Ob && Xb && !ub && (0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), ub && (0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Hb.jsxs)(Sb.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, ch.e)(!0), jb.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: Lb,
            children: [(0, Hb.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Hb.jsx)(Qh.e, {
              noaAction: "replayViewerOpen"
            })]
          }), Lb && (0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Hb.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Hb.jsx)("iframe", {
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
    var uB = hb(1784);
    const hB = {
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
        icon: () => (0, Hb.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Hb.jsx)("path", {
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
      vZ: {
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

    function BB() {
      return Promise.all([hb.e(75), hb.e(132), hb.e(126), hb.e(123)]).then((() => hb(40508))).then((bb => ({
        default: bb.ShaderPackCategory
      })), (bb => (console.error("Failed to load the shader pack settings", bb), {
        default: OB
      })))
    }

    function OB() {
      const {
        t: bb
      } = (0, Ub.K)();
      return (0, Hb.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: bb("shaderPack:tabLoadFailed")
      })
    }
    var GB = hb(1288);
    const UB = (0, Bb.lazy)((() => hb.e(264).then((() => hb(40497))).then((bb => ({
        default: bb.BloxdInformation
      }))))),
      LB = (0, Bb.lazy)(BB);

    function YB(bb) {
      return bb ? "general" : "account"
    }
    const SB = new Map,
      aB = (0, Bb.memo)((function(bb) {
        let {
          show: ub,
          setBeforeResumeCallback: hb
        } = bb;
        (0, ob.e)();
        const {
          gameState: Ob,
          openSettingsCategory: Gb
        } = (0, jb.j)(["gameState", "openSettingsCategory"]), {
          userContext: Yb
        } = (0, Xb.d)(), {
          t: ab
        } = (0, Ub.K)(), Cb = (0, Zb.d)(), db = (0, pb.f)("minChunkAddDist"), rb = "inGame" === Ob, [nb, zb] = (0, Bb.useState)(YB(rb)), [gb, ib] = (0, Bb.useState)(null), [vb, tb] = (0, Bb.useState)([]), Jb = (0, Bb.useRef)(function() {
          const bb = new Date,
            ub = 6 * (bb.getMonth() + bb.getDate()) % Su.B.length;
          return [...Su.B, ...Su.B].slice(ub, ub + 6)
        }()), eb = (0, Bb.useRef)(null), Nb = (0, xu.k)(Fh.j, (0, Fh.c)()), sb = Object.keys(hB).filter((bb => {
          switch (bb) {
            case "replayViewer":
              return rb;
            case "developerTools":
              return Yb.playerHasRank("developer") || !1;
            case "texturePack":
              return Ab.featureFlags.settings.canChangeTexturePack;
            case "vZ":
              return Ab.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Ab.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== xb.s;
            case "controller":
              return Ab.featureFlags.useControllerSupport && (Nb || "controller" === nb);
            default:
              return !0
          }
        }));
        (0, xu.h)("toggleFullCoordinateOverlay", (() => {
          const bb = Tu("showCoordinates") && Tu("showChunkCoordinates") && Tu("showFPS");
          cu("showCoordinates", !bb), cu("showChunkCoordinates", !bb), cu("showFPS", !bb), Cb()
        })), (0, xu.h)("updatedChunkLoadDist", (() => {
          Cb()
        })), (0, Bb.useEffect)((() => {
          if (ib(null), null === jb.d.get("openSettingsCategory")) {
            const bb = (0, GB.f)() ? SB.get(rb) : void 0;
            zb(bb && sb.includes(bb) ? bb : YB(rb))
          }
        }), [ub]), (0, Bb.useEffect)((() => {
          null !== Gb && (zb(Gb), SB.set(rb, Gb), jb.d.set({
            openSettingsCategory: null
          }))
        }), [Gb, rb]), (0, Bb.useLayoutEffect)((() => {
          eb.current && (eb.current.scrollTop = 0)
        }), [nb, ub]), (0, Bb.useEffect)((() => {
          "updateLog" === nb && (0, Wb.e)().then(tb)
        }), [nb]), (0, Bb.useEffect)((() => {
          if ((0, qu.J)(db)) return;
          const [bb, ub] = (0, Bh.e)(), [hb, Bb] = (0, Nu.h)(db), Ob = (0, uB.f)(db[0], bb, hb), Gb = (0, uB.f)(db[1], ub, Bb);
          lb.gameBridge.send("setChunkAddDistance", {
            horizontal: Ob,
            vertical: Gb
          })
        }), [db]);
        const Mb = (0, Bb.useCallback)((async () => {
          gb && (await gb(), ib(null))
        }), [gb]);

        function mb() {
          jb.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, Bb.useEffect)((() => {
          hb((() => Mb))
        }), [Mb, hb]), (0, Hb.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: ub ? {} : {
            display: "none"
          },
          children: [(0, Hb.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Hb.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Hb.jsx)(wb, {
                items: sb.map((bb => {
                  const ub = hB[bb].icon;
                  return {
                    id: bb,
                    faIcon: "string" === typeof ub ? ub : void 0,
                    iconElement: "string" === typeof ub ? void 0 : (0, Hb.jsx)(ub, {}),
                    title: ab(hB[bb].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: nb,
                onClick: bb => {
                  !async function(bb) {
                    await Mb(), zb(bb), SB.set(rb, bb)
                  }(bb)
                }
              })
            })
          }), (0, Hb.jsxs)("div", {
            ref: eb,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === nb && (0, Hb.jsx)(lu, {
              showing: ub,
              inGame: rb
            }), "general" === nb && (0, Hb.jsx)(ju, {
              inGame: rb
            }), "audio" === nb && (0, Hb.jsx)(nu, {}), "notifications" === nb && (0, Hb.jsx)(eu, {}), "graphics" === nb && (0, Hb.jsx)(hh, {
              minChunkAddDist: null !== db && void 0 !== db ? db : [2, 2],
              getValue: Tu,
              onChange: cu,
              setApplySettingsCallback: ib
            }), "controls" === nb && (0, Hb.jsx)(Oh.h, {}), "crosshair" === nb && (0, Hb.jsx)(yh, {
              showing: ub
            }), "controller" === nb && Ab.featureFlags.useControllerSupport && (0, Hb.jsx)(Vh.d, {}), Ab.featureFlags.settings.canChangeTexturePack && "texturePack" === nb && (0, Hb.jsx)(fh.c, {
              setApplySettingsCallback: ib
            }), Ab.featureFlags.settings.canUseShaderPacks && "vZ" === nb && (0, Hb.jsx)(Bb.Suspense, {
              fallback: null,
              children: (0, Hb.jsx)(LB, {
                setApplySettingsCallback: ib
              })
            }), "updateLog" === nb && (0, Hb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Hb.jsx)("div", {
                className: "UpdateLogsContainer",
                children: vb.map(((bb, ub) => (0, Hb.jsx)(Kb.b, {
                  updateLog: bb,
                  index: ub,
                  close: mb
                }, ub)))
              })
            }), "information" === nb && (0, Hb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Hb.jsx)(Bb.Suspense, {
                fallback: null,
                children: (0, Hb.jsx)(UB, {})
              })
            }), "alternativeDomains" === nb && (0, Hb.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Hb.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: ab("settingsMenu:unblockedDomainsDescription")
              }), (0, Hb.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Jb.current.map((bb => (0, Hb.jsxs)(Sb.e, {
                  onClick: () => {
                    window.open(`https://${bb}`)
                  },
                  children: [(0, Hb.jsx)(Lb.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", bb]
                }, bb)))
              })]
            }), "replayViewer" === nb && (0, Hb.jsx)(bB, {}), "developerTools" === nb && (0, Hb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Hb.jsx)(Db, {
                setApplySettingsCallback: ib
              })
            }), null !== gb && (0, Hb.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Hb.jsx)(Sb.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: Mb,
                children: ab("general:apply")
              })
            })]
          })]
        })
      }));
    var HB = hb(2440);
    const wB = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      ZB = (0, Bb.lazy)((() => Promise.resolve().then((() => hb(4420))).then((bb => {
        bb.needGameClientAfterPaint();
        const ub = bb.matchmakingLibrariesPromise.then((bb => (0, HB.e)(bb.loadCharacterCustomisationUI(), (bb => bb.CharacterCustomisationUI))));
        return Promise.all([bb.ensureGameSetup(), ub]).then((bb => {
          let [, ub] = bb;
          return ub
        }))
      }))));

    function XB(bb) {
      let {
        show: ub
      } = bb;
      const {
        userContext: hb
      } = (0, Xb.d)(), [Ob, Gb] = (0, Bb.useState)("characters");
      if (!ub) return null;
      const Ub = wB.filter((bb => "cape" !== bb && "nameColour" !== bb || hb.getPlayerRanks().includes("super") || (0, Ib.purchasesAllowed)())).map((bb => ({
        id: bb,
        faIcon: Su.J[bb],
        title: Su.N[bb],
        redDot: !1
      })));
      return (0, Hb.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Hb.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Hb.jsx)(wb, {
            items: Ub,
            selectedItemId: Ob,
            onClick: bb => {
              Gb(bb)
            }
          })
        }), (0, Hb.jsx)("div", {
          className: "MenuBody",
          children: (0, Hb.jsx)(Bb.Suspense, {
            fallback: (0, Hb.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Hb.jsx)(db.c, {})
            }),
            children: (0, Hb.jsx)(ZB, {
              selectedTab: Ob
            })
          })
        })]
      })
    }
    var pB = hb(1366),
      oB = hb(1374),
      AB = hb(9085),
      lB = hb(4292),
      KB = hb(3198),
      WB = hb(3253),
      CB = hb(9115),
      dB = hb(8493),
      rB = hb(9094),
      jB = hb(9100),
      nB = hb(1799),
      DB = hb(1789),
      xB = hb(4672),
      zB = hb(1158),
      gB = hb(1124),
      iB = hb(1572),
      vB = hb(8581),
      tB = hb(2300),
      JB = hb(2309);

    function eB(bb) {
      return bb ? Object.keys(bb).sort(((ub, hb) => {
        var Bb, Ob, Gb, Ub;
        const Lb = (null !== (Bb = null === (Ob = bb[hb]) || void 0 === Ob ? void 0 : Ob.sortPriority) && void 0 !== Bb ? Bb : 0) - (null !== (Gb = null === (Ub = bb[ub]) || void 0 === Ub ? void 0 : Ub.sortPriority) && void 0 !== Gb ? Gb : 0);
        return 0 !== Lb ? Lb : ub.localeCompare(hb)
      })) : []
    }
    const NB = [{
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

    function sB(bb) {
      for (const {
          threshold: ub,
          suffix: hb
        }
        of NB)
        if (bb >= ub) {
          const Bb = bb / ub;
          return Bb >= 100 ? `${Math.floor(Bb)}${hb}` : Bb >= 10 ? `${Bb.toFixed(1).replace(/\.0$/,"")}${hb}` : `${Bb.toFixed(2).replace(/\.?0+$/,"")}${hb}`
        } return String(bb)
    }
    var MB = hb(4791);
    const mB = {
        normal: "0.8em",
        big: "1em"
      },
      IB = (0, Bb.memo)((function(bb) {
        let {
          item: ub,
          amount: hb = 0,
          size: Bb = "normal",
          tier: Ob = null
        } = bb;
        return (0, Hb.jsx)("div", {
          className: Gb()("SmpSlot", `SmpSlot-${Bb}`),
          children: ub && (0, Hb.jsx)(nB.d, {
            itemName: ub,
            amount: hb > 1 ? hb : 0,
            amountFontSize: mB[Bb],
            enchantmentTier: Ob
          })
        })
      }));

    function PB(bb) {
      let {
        amount: ub,
        exact: hb = !1,
        className: Bb
      } = bb;
      return (0, Hb.jsxs)("span", {
        className: Gb()("SmpGold", Bb),
        children: [(0, Hb.jsx)("span", {
          className: "SmpCoin",
          children: (0, Hb.jsx)(nB.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), hb ? ub.toLocaleString("en-US") : sB(ub)]
      })
    }

    function qB(bb) {
      let {
        count: ub = 5,
        grid: hb = !1
      } = bb;
      return (0, Hb.jsx)("div", {
        className: hb ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: ub
        }, ((bb, ub) => (0, Hb.jsxs)("div", {
          className: Gb()(hb ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Hb.jsx)("div", {
            className: Gb()("SmpSlot", hb ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Hb.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Hb.jsx)("b", {}), (0, Hb.jsx)("small", {})]
          }), (0, Hb.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, ub)))
      })
    }

    function EB(bb) {
      let {
        title: ub,
        children: hb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Hb.jsx)("b", {
          children: ub
        }), hb && (0, Hb.jsx)("small", {
          children: hb
        })]
      })
    }

    function yB(bb) {
      let {
        entry: ub
      } = bb;
      return (0, Hb.jsx)(EB, {
        title: (0, Hb.jsx)(DB.c, {
          text: ub.item.customTitle
        }),
        children: (0, Hb.jsx)(DB.c, {
          text: ub.item.description
        })
      })
    }

    function VB(bb) {
      return (0, Hb.jsx)(MB.c, {
        ...bb,
        className: Gb()("SmpChoice", bb.className),
        reselectable: !0
      })
    }

    function FB() {
      return (0, Hb.jsx)("span", {
        className: "SmpLoader",
        children: (0, Hb.jsx)(db.c, {})
      })
    }

    function fB(bb) {
      let {
        value: ub,
        onChange: hb,
        min: Ob = 1,
        max: Gb,
        step: Ub = 1,
        label: Lb
      } = bb;
      const Yb = (0, Bb.useRef)(null),
        Sb = (0, Bb.useRef)(ub);
      Sb.current = ub;
      const [ab, wb] = (0, Bb.useState)(null), Zb = bb => Math.max(Ob, Math.min(Gb, Math.floor(bb))), Xb = bb => {
        const ub = Sb.current,
          Bb = "function" === typeof Ub ? Ub(ub, bb) : Ub,
          Ob = Zb(ub + Bb * bb);
        Sb.current = Ob, hb(Ob)
      };
      (0, Bb.useEffect)((() => {
        if (null === ab) return;
        let bb;
        const ub = () => {
            wb(null)
          },
          hb = setTimeout((() => {
            bb = setInterval((() => {
              Xb(ab);
              const bb = Sb.current;
              (ab > 0 ? bb >= Gb : bb <= Ob) && ub()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", ub), window.addEventListener("pointercancel", ub), window.addEventListener("blur", ub), () => {
          clearTimeout(hb), clearInterval(bb), window.removeEventListener("pointerup", ub), window.removeEventListener("pointercancel", ub), window.removeEventListener("blur", ub)
        }
      }), [ab]), (0, Bb.useEffect)((() => {
        const bb = Yb.current;
        bb && document.activeElement !== bb && bb.value !== String(ub) && (bb.value = String(ub))
      }), [ub]), (0, Bb.useEffect)((() => {
        const bb = Yb.current;
        if (!bb) return;
        const ub = () => {
          bb.value = String(Sb.current)
        };
        return bb.addEventListener("blur", ub), () => {
          bb.removeEventListener("blur", ub)
        }
      }), []);
      const pb = bb => (0, Hb.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${bb>0?"More":"Less"} ${Lb}`,
        disabled: bb > 0 ? ub >= Gb : ub <= Ob,
        onPointerDown: ub => {
          0 === ub.button && (Xb(bb), wb(bb))
        },
        onKeyDown: ub => {
          "Enter" !== ub.key && " " !== ub.key || Xb(bb)
        },
        onContextMenu: bb => {
          bb.preventDefault()
        },
        children: bb > 0 ? "+" : "\u2212"
      });
      return (0, Hb.jsxs)("div", {
        className: "SmpStepper",
        children: [pb(-1), (0, Hb.jsx)(Cb.b, {
          className: "SmpStepperInput",
          domRef: Yb,
          defaultValue: String(ub),
          ariaLabel: Lb,
          type: "text",
          blurOnEnter: !0,
          onValueChange: bb => {
            const ub = bb.replace(/[^\d]/g, "");
            Yb.current && ub !== bb && (Yb.current.value = ub), "" !== ub && hb(Zb(Number(ub)))
          }
        }), pb(1)]
      })
    }

    function kB(bb) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, bb))) - 1))
    }
    var TB = hb(9106),
      cB = hb(1133);
    const QB = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    cB.B, Mb.Kc.length;
    new Map;
    var RB = hb(3063);

    function bO(bb, ub) {
      var hb;
      return ub && (null === (hb = bb[ub]) || void 0 === hb ? void 0 : hb.smp) || null
    }

    function uO(bb, ub) {
      const hb = [];
      for (const Ob of eB(bb)) {
        var Bb;
        const Gb = bb[Ob];
        (null === (Bb = Gb.smp) || void 0 === Bb ? void 0 : Bb.kind) === ub && hb.push({
          key: Ob,
          item: Gb,
          meta: Gb.smp
        })
      }
      return hb
    }

    function hO(bb, ub) {
      var hb;
      return null !== (hb = uO(bb, ub)[0]) && void 0 !== hb ? hb : null
    }
    const BO = "50% 0% 50% 0%",
      OO = [{
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

    function GO(bb) {
      const ub = bb - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: hb,
          suffix: Bb
        }
        of OO)
        if (ub >= hb) return `${Math.floor(ub/hb)}${Bb}`;
      return "<1s"
    }

    function UO(bb) {
      const ub = bb.map(dB.f),
        hb = [];
      return ub.forEach(((bb, Bb) => {
        const Ob = function(bb) {
            const ub = bb.match(/\d+/);
            return ub ? Number(ub[0]) : 0
          }(bb),
          Gb = Bb === ub.length - 1;
        (Gb || 1 === Ob || 10 === Ob || 100 === Ob) && hb.push({
          label: bb,
          quantity: Ob,
          isAll: Gb
        })
      })), hb
    }
    let LO = null;

    function YO(bb, ub) {
      const hb = ub.trim().toLowerCase();
      if (!hb) return [];
      const Bb = bb => {
          if (bb === hb) return 0;
          if (bb.startsWith(hb)) return 1;
          const ub = bb.indexOf(hb);
          return -1 === ub ? -1 : 2 + ub
        },
        Ob = [];
      for (const Lb of bb) {
        const bb = [Bb(Lb.lowerLabel), Bb(Lb.lowerName)].filter((bb => -1 !== bb));
        bb.length && Ob.push({
          item: Lb,
          rank: Math.min(...bb)
        })
      }
      if (Ob.length > 0) return Ob.sort(((bb, ub) => bb.rank - ub.rank)).map((bb => bb.item));
      const Gb = [...hb],
        Ub = bb => {
          let ub = 0;
          for (const hb of Gb) {
            if (ub = bb.indexOf(hb, ub), -1 === ub) return !1;
            ub++
          }
          return !0
        };
      return bb.filter((bb => Ub(bb.lowerLabel) || Ub(bb.lowerName)))
    }

    function SO(bb, ub) {
      var hb;
      return null !== (hb = null === bb || void 0 === bb ? void 0 : bb[ub]) && void 0 !== hb ? hb : ub
    }

    function aO(bb, ub) {
      const hb = bb.userInput;
      return void 0 !== ub && "dropdown" === (null === hb || void 0 === hb ? void 0 : hb.type) && hb.dropdownOptions.map(dB.f).includes(ub) ? ub : function(bb) {
        const ub = bb.userInput;
        if ("dropdown" !== (null === ub || void 0 === ub ? void 0 : ub.type) || 0 === ub.dropdownOptions.length) return null;
        const hb = ub.dropdownOptions.map(dB.f);
        return ub.initialValue && hb.includes(ub.initialValue) ? ub.initialValue : hb[hb.length - 1]
      }(bb)
    }

    function HO(bb) {
      return void 0 === bb ? "" : JSON.stringify(bb)
    }
    const wO = (0, Bb.createContext)(null);

    function ZO() {
      return (0, Bb.useContext)(wO)
    }
    var XO = hb(2517);
    const pO = (0, Bb.memo)((function(bb) {
        let {
          name: ub,
          label: hb,
          onPick: Bb
        } = bb;
        return (0, Hb.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: hb,
          onClick: () => {
            Bb(ub)
          },
          children: [(0, Hb.jsx)(IB, {
            item: ub,
            size: "big"
          }), (0, Hb.jsx)("span", {
            children: hb
          })]
        })
      })),
      oO = (0, Bb.memo)((function(bb) {
        let {
          items: ub,
          query: hb,
          onPick: Ob
        } = bb;
        const {
          t: Gb
        } = (0, Ub.K)(), [Lb, Yb] = (0, Bb.useState)(new Set), Sb = (0, Bb.useMemo)((() => function(bb) {
          const ub = new Map;
          for (const hb of bb) {
            let bb = ub.get(hb.category);
            bb || (bb = [], ub.set(hb.category, bb)), bb.push(hb)
          }
          return [...QB, "other"].filter((bb => ub.has(bb))).map((bb => ({
            category: bb,
            items: ub.get(bb)
          })))
        }(ub)), [ub]), ab = (0, Bb.useMemo)((() => YO(ub, hb).slice(0, 60)), [ub, hb]);
        return hb.trim() ? 0 === ab.length ? (0, Hb.jsx)(EB, {
          title: Gb("smpShop:noItemsFound", {
            query: hb.trim()
          }),
          children: Gb("smpShop:tryShorterName")
        }) : (0, Hb.jsx)(XO.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: BO,
          observerUpdateDeps: [hb],
          children: ab.map((bb => (0, Hb.jsx)(pO, {
            name: bb.name,
            label: bb.label,
            onPick: Ob
          }, bb.name)))
        }) : (0, Hb.jsx)(Hb.Fragment, {
          children: Sb.map((bb => {
            let {
              category: ub,
              items: hb
            } = bb;
            const Bb = Lb.has(ub) || hb.length <= 48,
              Ub = Bb ? hb : hb.slice(0, 48);
            return (0, Hb.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Hb.jsxs)("h4", {
                children: [Gb("other" === ub ? "smpShop:otherItems" : `creativeInventory:${ub}`), !Bb && (0, Hb.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Yb(new Set([...Lb, ub]))
                  },
                  children: Gb("smpShop:showAll", {
                    count: hb.length
                  })
                })]
              }), (0, Hb.jsx)(XO.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: BO,
                observerUpdateDeps: [Bb],
                children: Ub.map((bb => (0, Hb.jsx)(pO, {
                  name: bb.name,
                  label: bb.label,
                  onPick: Ob
                }, bb.name)))
              })]
            }, ub)
          }))
        })
      }));

    function AO(bb, ub) {
      const {
        searched: hb,
        shown: Ob,
        searchFor: Gb,
        loading: Ub
      } = function(bb, ub) {
        var hb;
        const Ob = ZO(),
          [Gb, Ub] = (0, Bb.useState)(void 0),
          Lb = (0, Bb.useRef)(void 0),
          Yb = (0, Bb.useRef)(0),
          Sb = (0, Bb.useRef)(void 0),
          ab = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.meta.item) && void 0 !== hb ? hb : null,
          Hb = !!bb && Ob.isPending(bb.key);
        (0, Bb.useEffect)((() => {
          if (!bb || Hb || !ub || void 0 === Gb || Gb === ab) return;
          const hb = Gb === Lb.current && Ob.gaveUpAt(bb.key) > Yb.current && Sb.current !== Gb;
          (Gb !== Lb.current || hb) && Ob.act(bb.key, null !== Gb && void 0 !== Gb ? Gb : "*", hb) && (hb && (Sb.current = Gb), Lb.current = Gb, Yb.current = Date.now())
        }), [bb, Hb, ub, Gb, ab, Ob]);
        const wb = (0, Bb.useCallback)((bb => {
            Lb.current = void 0, Sb.current = void 0, Ub(bb)
          }), []),
          Zb = void 0 !== Gb && Gb !== ab && (Hb || Lb.current !== Gb);
        return {
          searched: ab,
          shown: Zb ? Gb : ab,
          searchFor: wb,
          loading: Zb || Hb || null !== ab && !ub
        }
      }(bb, ub), Lb = (0, Bb.useMemo)((() => function() {
        var bb;
        let ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ob = `${(0,RB.g)()}\x1f${ub.join("\x1e")}\x1f${hb.join("\x1e")}\x1f${JSON.stringify(Bb)}`;
        if ((null === (bb = LO) || void 0 === bb ? void 0 : bb.key) === Ob) return LO.items;
        const Gb = new Set(hb),
          Ub = new Set,
          Lb = [],
          Yb = (bb, ub) => {
            var hb;
            if (!bb || Ub.has(bb) || Gb.has(bb)) return;
            Ub.add(bb);
            const Ob = null !== (hb = Bb[bb]) && void 0 !== hb ? hb : bb;
            Lb.push({
              name: bb,
              label: Ob,
              lowerLabel: Ob.toLowerCase(),
              lowerName: bb.toLowerCase(),
              category: ub
            })
          };
        for (const ab of (0, TB.creativeItemIds)()) {
          var Sb;
          (0, TB.itemIsDisabled)(ab, !0, !0, !1) || (0, TB.showOnlyInCreativeSearch)(ab) || Yb((0, RB.f)(ab), null !== (Sb = (0, TB.creativeCategoryOf)(ab)) && void 0 !== Sb ? Sb : "other")
        }
        for (const ab of ub) Yb(ab, "other");
        return LO = {
          key: Ob,
          items: Lb
        }, Lb
      }(null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names)), [null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names]), [Yb, Sb] = (0, Bb.useState)(""), [ab, Hb] = (0, Bb.useState)(0), [wb, Zb] = (0, Bb.useState)("recent"), Xb = (0, Bb.useCallback)((bb => {
        Sb(""), Hb((bb => bb + 1)), Gb(bb)
      }), [Gb]), pb = "browse" === wb || "" !== Yb.trim();
      return {
        searched: hb,
        shown: Ob,
        searchFor: Gb,
        loading: Ub,
        catalogue: Lb,
        names: null === bb || void 0 === bb ? void 0 : bb.meta.names,
        query: Yb,
        setQuery: Sb,
        searchBoxKey: ab,
        pickItem: Xb,
        setView: Zb,
        browsing: pb
      }
    }

    function lO(bb) {
      let {
        browser: ub,
        children: hb
      } = bb;
      const {
        t: Bb
      } = (0, Ub.K)(), Ob = ZO();
      return (0, Hb.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Hb.jsx)("div", {
          className: "SmpSearch",
          children: (0, Hb.jsx)(Cb.b, {
            className: "SmpSearchInput",
            placeholderText: Bb("smpShop:searchPlaceholder"),
            defaultValue: ub.query,
            onValueChange: bb => {
              ub.setQuery(bb), ub.searched && bb.trim() && ub.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const bb = YO(ub.catalogue, ub.query)[0];
              bb ? ub.pickItem(bb.name) : ub.query.trim() && Ob.notify(Bb("smpShop:noItemsFound", {
                query: ub.query.trim()
              }))
            }
          }, ub.searchBoxKey)
        }), hb]
      })
    }

    function KO(bb) {
      let {
        browser: ub,
        recentLabel: hb,
        children: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)();
      return (0, Hb.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Hb.jsx)(VB, {
          options: [{
            value: "recent",
            label: hb
          }, {
            value: "browse",
            label: Ob("smpShop:browseItems")
          }],
          value: ub.browsing ? "browse" : "recent",
          onChange: ub.setView,
          ariaLabel: Ob("smpShop:show")
        }), !ub.browsing && Bb]
      })
    }

    function WO(bb) {
      let {
        item: ub,
        names: hb,
        summary: Bb,
        onBack: Ob,
        children: Gb
      } = bb;
      const {
        t: Lb
      } = (0, Ub.K)();
      return (0, Hb.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Hb.jsx)(Sb.d, {
          className: "SmpBackButton",
          onClick: Ob,
          children: Lb("general:back")
        }), (0, Hb.jsx)(IB, {
          item: ub,
          size: "big"
        }), (0, Hb.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Hb.jsx)("b", {
            children: SO(hb, ub)
          }), Bb && (0, Hb.jsx)("small", {
            children: Bb
          })]
        }), Gb]
      })
    }

    function CO(bb) {
      let {
        browser: ub,
        className: hb,
        action: Bb,
        above: Ob,
        list: Ub,
        summary: Lb,
        recentLabel: Yb,
        listControls: Sb,
        onBack: ab
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: Gb()("SmpScreen", hb),
        children: [(0, Hb.jsx)(lO, {
          browser: ub,
          children: Bb
        }), ub.shown && (0, Hb.jsx)(WO, {
          item: ub.shown,
          names: ub.names,
          summary: !ub.loading && Lb,
          onBack: () => {
            null === ab || void 0 === ab || ab(), ub.searchFor(null)
          },
          children: Sb
        }), Ob, ub.shown ? Ub : (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)(KO, {
            browser: ub,
            recentLabel: Yb,
            children: Sb
          }), ub.browsing ? (0, Hb.jsx)(oO, {
            items: ub.catalogue,
            query: ub.query,
            onPick: ub.pickItem
          }) : Ub]
        })]
      })
    }

    function dO(bb, ub) {
      const hb = bb.map((bb => {
        let {
          meta: ub
        } = bb;
        return ub.pricePerItem
      }));
      return "min" === ub ? Math.min(...hb) : Math.max(...hb)
    }
    var rO = hb(6300);
    const jO = (0, Bb.memo)((function(bb) {
      var ub;
      const {
        t: hb
      } = (0, Ub.K)(), Bb = null === bb.seller, Ob = bb.quantity * bb.pricePerItem;
      return (0, Hb.jsxs)("div", {
        className: bb.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Hb.jsx)(IB, {
          item: bb.item,
          amount: bb.quantity,
          size: bb.grid ? "big" : "normal",
          tier: bb.tier
        }), (0, Hb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Hb.jsx)("b", {
            children: (0, Hb.jsx)(DB.c, {
              text: null !== (ub = bb.title) && void 0 !== ub ? ub : `${bb.quantity}x ${bb.item}`
            })
          }), (0, Hb.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Hb.jsx)("span", {
              children: Bb ? hb("smpShop:you") : (0, Hb.jsx)(DB.c, {
                text: [{
                  entityName: bb.seller
                }]
              })
            }), (0, Hb.jsx)("span", {
              children: hb("smpShop:timeLeft", {
                time: GO(bb.expiresAt)
              })
            })]
          })]
        }), (0, Hb.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Hb.jsx)(PB, {
            amount: bb.pricePerItem
          }), (0, Hb.jsx)("small", {
            children: hb("smpShop:each")
          })]
        }), (0, Hb.jsx)(Sb.e, {
          className: "SmpBuyButton",
          disabled: Bb || !bb.canAfford && !bb.busy,
          loading: bb.busy,
          onClick: () => {
            bb.onBuy(bb.itemKey)
          },
          children: Bb ? hb("smpShop:yours") : (0, Hb.jsx)(PB, {
            amount: Ob
          })
        })]
      })
    }));

    function nO(bb) {
      let {
        view: ub,
        onChange: hb
      } = bb;
      const {
        t: Bb
      } = (0, Ub.K)();
      return (0, Hb.jsx)(MB.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Bb("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Hb.jsx)(Lb.e, {
            name: "list"
          }),
          ariaLabel: Bb("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Hb.jsx)(Lb.e, {
            name: "grid-2"
          }),
          ariaLabel: Bb("smpShop:gridView")
        }],
        value: ub,
        onChange: hb
      })
    }

    function DO(bb) {
      let {
        entries: ub,
        view: hb
      } = bb;
      const {
        t: Bb
      } = (0, Ub.K)(), Ob = ZO(), Gb = "grid" === hb;
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [!Gb && (0, Hb.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Hb.jsx)("span", {}), (0, Hb.jsx)("span", {
            children: Bb("smpShop:columnItem")
          }), (0, Hb.jsx)("span", {
            children: Bb("smpShop:columnPriceEach")
          }), (0, Hb.jsx)("span", {
            children: Bb("smpShop:columnTotal")
          })]
        }), (0, Hb.jsx)(XO.d, {
          lazyLoadedClassName: Gb ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: BO,
          observerUpdateDeps: [ub.length],
          children: ub.map((bb => {
            var ub, hb;
            let {
              key: Bb,
              item: Ub,
              meta: Lb
            } = bb;
            const Yb = Lb.quantity * Lb.pricePerItem;
            return (0, Hb.jsx)(jO, {
              itemKey: Bb,
              item: Lb.item,
              title: Ub.customTitle,
              quantity: Lb.quantity,
              pricePerItem: Lb.pricePerItem,
              seller: Lb.seller,
              expiresAt: Lb.expiresAt,
              tier: null !== (ub = null === (hb = Ub.enchant) || void 0 === hb ? void 0 : hb.tier) && void 0 !== ub ? ub : null,
              busy: Ob.isPending(Bb) || null !== Lb.seller && !1 === Ub.canBuy,
              canAfford: Ob.canAfford(Ub, Yb),
              grid: Gb,
              onBuy: Ob.act
            }, Bb)
          }))
        }, hb)]
      })
    }
    const xO = [1, 10, 100],
      zO = [1, 10, 100, 999];

    function gO(bb) {
      var ub, hb, Ob, Yb, ab, wb, Zb, Xb, pb, ob;
      const {
        t: Ab
      } = (0, Ub.K)(), lb = ZO(), {
        creator: Kb,
        mode: Wb
      } = bb, [db, rb] = (0, Bb.useState)(null !== (ub = null === Kb || void 0 === Kb ? void 0 : Kb.meta.item) && void 0 !== ub ? ub : null), [jb, nb] = (0, Bb.useState)(1), [Db, xb] = (0, Bb.useState)(0), [zb, gb] = (0, Bb.useState)(""), [ib, vb] = (0, Bb.useState)(0), tb = (0, Bb.useRef)(db), Jb = (0, Bb.useRef)(!1), [eb, Nb] = (0, Bb.useState)(!1), sb = null !== (hb = null === Kb || void 0 === Kb ? void 0 : Kb.meta.item) && void 0 !== hb ? hb : null, Mb = null !== (Ob = null === Kb || void 0 === Kb ? void 0 : Kb.meta.owned) && void 0 !== Ob ? Ob : 0;
      (0, Bb.useEffect)((() => {
        bb.searching || null === sb || sb === tb.current || (tb.current = sb, Jb.current = !1, rb(sb), xb(0), nb("list" === Wb ? Math.max(1, Mb) : 1))
      }), [sb, bb.searching]);
      const mb = !!Kb && !!db && Kb.meta.item === db,
        Ib = mb ? Kb.meta.owned : null !== (Yb = null === (ab = bb.inventory) || void 0 === ab || null === (wb = ab.find((bb => bb.item === db))) || void 0 === wb ? void 0 : wb.quantity) && void 0 !== Yb ? Yb : 0,
        Pb = "list" === Wb ? Math.max(1, Ib) : 45954,
        qb = null !== (Zb = bb.prices[0]) && void 0 !== Zb ? Zb : null,
        Eb = bb.prices.length ? Math.round(bb.prices.reduce(((bb, ub) => bb + ub), 0) / bb.prices.length) : null,
        yb = null === (Xb = bb.inventory) || void 0 === Xb || null === (pb = Xb.find((bb => bb.item === db))) || void 0 === pb ? void 0 : pb.sellPrice;
      (0, Bb.useEffect)((() => {
        var bb;
        mb && (nb((bb => "list" === Wb ? Math.min(Math.max(1, bb), Math.max(1, Ib)) : bb)), Jb.current || xb(null !== (bb = null !== qb && void 0 !== qb ? qb : Eb) && void 0 !== bb ? bb : Math.max(1, null !== yb && void 0 !== yb ? yb : 1)))
      }), [mb, Ib, db, qb, Eb]);
      const Vb = bb => {
          Jb.current = !0, xb(bb)
        },
        Fb = ub => {
          var hb, Bb, Ob;
          tb.current = ub, Jb.current = !1, Nb(!1), gb(""), vb((bb => bb + 1)), rb(ub), xb(0), nb("list" === Wb && null !== (hb = null === (Bb = bb.inventory) || void 0 === Bb || null === (Ob = Bb.find((bb => bb.item === ub))) || void 0 === Ob ? void 0 : Ob.quantity) && void 0 !== hb ? hb : 1), (null === Kb || void 0 === Kb ? void 0 : Kb.meta.item) !== ub && bb.onPickItem(ub)
        },
        fb = jb * Db,
        kb = "list" === Wb && null !== Kb && void 0 !== Kb && Kb.meta.fee ? function(bb, ub) {
          const hb = Math.max(0, ub - bb.taxFreeAllowance);
          return Math.ceil(Math.round(hb * bb.rate * 1e6) / 1e6)
        }(Kb.meta.fee, fb) : 0,
        Tb = !!Kb && lb.isPending(Kb.key),
        cb = mb && !bb.searching && jb >= 1 && Db >= 1 && ("order" === Wb || Ib >= jb) && !Tb,
        Qb = !!db && !mb && !bb.searching && jb >= 1 && Db >= 1,
        Rb = () => {
          cb ? lb.act(Kb.key, `${jb}|${Db}`) : Qb && (bb.onPickItem(db), Nb(!0))
        };
      (0, Bb.useEffect)((() => {
        eb && mb && !bb.searching && (Nb(!1), Rb())
      }), [eb, mb, bb.searching]);
      const bu = !!db && !mb && (bb.searching || eb),
        uu = db ? SO(bb.names, db) : "",
        hu = (0, Bb.useMemo)((() => YO(bb.catalogue, zb).slice(0, 8)), [bb.catalogue, zb]),
        Bu = ("list" === Wb ? xO.filter((bb => bb < Ib)) : zO).map((bb => ({
          value: bb,
          label: String(bb)
        })));
      "list" === Wb && Ib > 0 && Bu.push({
        value: Ib,
        label: Ab("smpShop:all", {
          count: Ib
        })
      });
      const Ou = [];
      return null !== qb && (qb > 1 && Ou.push({
        value: qb - 1,
        label: Ab("smpShop:undercut", {
          price: sB(qb - 1)
        })
      }), Ou.push({
        value: qb,
        label: Ab("smpShop:lowest", {
          price: sB(qb)
        })
      })), null !== Eb && Eb !== qb && Ou.push({
        value: Eb,
        label: Ab("smpShop:average", {
          price: sB(Eb)
        })
      }), (0, Hb.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Hb.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Hb.jsx)("b", {
            children: Ab("list" === Wb ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Hb.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Ab("smpShop:close"),
            onClick: bb.onClose,
            children: (0, Hb.jsx)(Lb.e, {
              name: "xmark"
            })
          })]
        }), "list" === Wb && (0, Hb.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (ob = bb.inventory) && void 0 !== ob && ob.length ? bb.inventory.map((bb => {
            let {
              item: ub,
              quantity: hb
            } = bb;
            return (0, Hb.jsx)("button", {
              type: "button",
              title: ub,
              className: Gb()("SmpPickerSlot", {
                SmpPickerSlotOn: ub === db
              }),
              onClick: () => {
                Fb(ub)
              },
              children: (0, Hb.jsx)(IB, {
                item: ub,
                amount: hb
              })
            }, ub)
          })) : (0, Hb.jsx)("span", {
            className: "SmpMuted",
            children: Ab("smpShop:nothingToList")
          })
        }), ("list" === Wb || !db) && (0, Hb.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Hb.jsx)(Cb.b, {
            className: "SmpSearchInput",
            placeholderText: Ab("list" === Wb ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: zb,
            onValueChange: gb,
            blurOnEnter: !0,
            onEnter: () => {
              hu[0] && Fb(hu[0].name)
            }
          }, ib), hu.length > 0 && (0, Hb.jsx)("div", {
            className: "SmpPicker",
            children: hu.map((bb => {
              let {
                name: ub
              } = bb;
              return (0, Hb.jsx)("button", {
                type: "button",
                title: ub,
                className: Gb()("SmpPickerSlot", {
                  SmpPickerSlotOn: ub === db
                }),
                onClick: () => {
                  Fb(ub)
                },
                children: (0, Hb.jsx)(IB, {
                  item: ub
                })
              }, ub)
            }))
          })]
        }), db && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsxs)("div", {
            className: "SmpPickedName",
            children: [uu, bu && (0, Hb.jsx)(FB, {})]
          }), (0, Hb.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Hb.jsxs)("div", {
              className: "SmpField",
              children: [(0, Hb.jsxs)("span", {
                children: [Ab("smpShop:quantity"), "list" === Wb && mb && (0, Hb.jsx)("small", {
                  children: Ab("smpShop:youHave", {
                    count: Ib
                  })
                })]
              }), (0, Hb.jsx)(fB, {
                value: jb,
                onChange: nb,
                max: Pb,
                label: Ab("smpShop:quantity")
              }), (0, Hb.jsx)(VB, {
                options: Bu,
                value: jb,
                onChange: nb,
                ariaLabel: Ab("smpShop:quantity")
              })]
            }), (0, Hb.jsxs)("div", {
              className: "SmpField",
              children: [(0, Hb.jsx)("span", {
                children: Ab("smpShop:pricePerItem")
              }), (0, Hb.jsx)(fB, {
                value: Math.max(1, Db),
                onChange: Vb,
                max: 9999999,
                step: kB,
                label: Ab("smpShop:pricePerItem")
              }), (0, Hb.jsx)(VB, {
                options: Ou,
                value: Db,
                onChange: Vb,
                ariaLabel: Ab("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Wb && (0, Hb.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Hb.jsxs)("span", {
              children: [Ab("smpShop:youGet"), " ", (0, Hb.jsx)(PB, {
                amount: Math.max(0, fb - kb),
                exact: !0
              })]
            }), (0, Hb.jsx)("small", {
              children: kb > 0 ? Ab("smpShop:listingFee", {
                fee: kb.toLocaleString("en-US")
              }) : Ab("smpShop:listingRules")
            })]
          }), (0, Hb.jsx)(Sb.q, {
            className: "SmpSubmit",
            disabled: !cb && !Qb && !Tb,
            loading: Tb || bu || mb && bb.searching,
            onClick: Rb,
            children: "list" === Wb ? Ab("smpShop:listButton", {
              count: jb,
              item: uu
            }) : (0, Hb.jsxs)(Hb.Fragment, {
              children: [Ab("smpShop:orderButton", {
                count: jb,
                item: uu
              }), " ", Db >= 1 && (0, Hb.jsx)(PB, {
                amount: fb
              })]
            })
          })]
        })]
      })
    }

    function iO() {
      var bb;
      const {
        t: ub
      } = (0, Ub.K)(), hb = ZO(), Ob = null === (bb = hb.shopInfo[hb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Gb = hO(Ob, "search"), Lb = hO(Ob, "creator"), Yb = uO(Ob, "enchantedCreator"), ab = uO(Ob, "listing"), wb = hO(Ob, "empty"), Zb = AO(Gb, ab.length > 0 || null !== wb), {
        searched: Xb,
        shown: pb,
        loading: ob
      } = Zb, [Ab, lb] = (0, Bb.useState)(!1), [Kb, Wb] = function() {
        const [bb, ub] = (0, rO.d)("smpMarketView", "list");
        return ["grid" === bb ? "grid" : "list", ub]
      }(), Cb = "grid" === Kb, db = (0, Bb.useMemo)((() => ab.filter((bb => {
        let {
          meta: ub
        } = bb;
        return null !== ub.seller && ub.item === Xb
      })).map((bb => {
        let {
          meta: ub
        } = bb;
        return ub.pricePerItem
      })).sort(((bb, ub) => bb - ub))), [ab, Xb]), rb = (0, Bb.useMemo)((() => {
        const bb = new Set(Zb.catalogue.map((bb => {
          let {
            name: ub
          } = bb;
          return ub
        })));
        return function(bb) {
          for (const ub in bb)
            if ("sell" === bb[ub].smp) return uO(bb[ub].items, "sell").filter((bb => {
              let {
                item: ub
              } = bb;
              return !ub.enchant
            })).map((bb => {
              let {
                meta: ub
              } = bb;
              return {
                item: ub.item,
                quantity: ub.quantity,
                sellPrice: ub.pricePerItem
              }
            }));
          return []
        }(hb.shopInfo).filter((ub => {
          let {
            item: hb
          } = ub;
          return bb.has(hb)
        }))
      }), [hb.shopInfo, Zb.catalogue]);
      return (0, Hb.jsx)(CO, {
        browser: Zb,
        className: "SmpMarketTab",
        recentLabel: ub("smpShop:recentlyListed"),
        action: (0, Hb.jsx)(Sb.q, {
          className: "SmpSellButton",
          onClick: () => {
            lb((bb => !bb))
          },
          children: ub("smpShop:sell")
        }),
        above: Ab && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)(gO, {
            mode: "list",
            creator: Lb,
            inventory: rb,
            catalogue: Zb.catalogue,
            names: Zb.names,
            searching: ob,
            prices: db,
            onPickItem: Zb.searchFor,
            onClose: () => {
              lb(!1)
            }
          }), Yb.length > 0 && (0, Hb.jsx)(vO, {
            entries: Yb
          })]
        }),
        listControls: (0, Hb.jsx)(nO, {
          view: Kb,
          onChange: Wb
        }),
        summary: pb && (ab.length > 0 ? ub(1 === ab.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: ab.length,
          price: sB(dO(ab, "min"))
        }) : ub("smpShop:noOneSelling", {
          item: SO(Zb.names, pb)
        })),
        list: ob ? (0, Hb.jsx)(qB, {
          grid: Cb
        }) : ab.length > 0 ? (0, Hb.jsx)(DO, {
          entries: ab,
          view: Kb
        }) : wb ? (0, Hb.jsx)(yB, {
          entry: wb
        }) : (0, Hb.jsx)(qB, {
          count: 3,
          grid: Cb
        })
      })
    }

    function vO(bb) {
      let {
        entries: ub
      } = bb;
      const {
        t: hb
      } = (0, Ub.K)(), Ob = ZO(), [Gb, Lb] = (0, Bb.useState)({});
      return (0, Hb.jsx)("div", {
        className: "SmpList",
        children: ub.map((bb => {
          var ub, Bb, Ub;
          let {
            key: Yb,
            item: ab,
            meta: wb
          } = bb;
          const Zb = null !== (ub = Gb[Yb]) && void 0 !== ub ? ub : 1;
          return (0, Hb.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Hb.jsx)(IB, {
              item: wb.item,
              amount: wb.quantity,
              tier: null !== (Bb = null === (Ub = ab.enchant) || void 0 === Ub ? void 0 : Ub.tier) && void 0 !== Bb ? Bb : null
            }), (0, Hb.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Hb.jsx)("b", {
                children: (0, Hb.jsx)(DB.c, {
                  text: ab.customTitle
                })
              }), (0, Hb.jsx)("small", {
                children: hb("smpShop:enchantedListing")
              })]
            }), (0, Hb.jsx)(fB, {
              value: Zb,
              onChange: bb => {
                Lb({
                  ...Gb,
                  [Yb]: bb
                })
              },
              max: 9999999,
              step: kB,
              label: hb("smpShop:pricePerItem")
            }), (0, Hb.jsxs)(Sb.q, {
              loading: Ob.isPending(Yb),
              onClick: () => {
                Ob.act(Yb, String(Zb))
              },
              children: [hb("smpShop:list"), " ", (0, Hb.jsx)(PB, {
                amount: Zb
              })]
            })]
          }, Yb)
        }))
      })
    }
    const tO = (0, Bb.memo)((function(bb) {
      let {
        itemKey: ub,
        item: hb,
        quantity: Bb,
        pricePerItem: Ob,
        tier: Ub,
        selected: Lb,
        onSelect: Yb
      } = bb;
      return (0, Hb.jsxs)("button", {
        type: "button",
        className: Gb()("SmpInventorySlot", {
          SmpInventorySlotOn: Lb
        }),
        title: hb,
        onClick: () => {
          Yb(ub)
        },
        children: [(0, Hb.jsx)(IB, {
          item: hb,
          amount: Bb,
          tier: Ub
        }), (0, Hb.jsx)(PB, {
          amount: Ob
        })]
      })
    }));

    function JO() {
      var bb;
      const {
        t: ub
      } = (0, Ub.K)(), hb = ZO(), Ob = null === (bb = hb.shopInfo[hb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Lb = uO(Ob, "sell"), Yb = hO(Ob, "empty"), [Sb, ab] = (0, Bb.useState)(null), [wb, Zb] = (0, Bb.useState)({}), Xb = Lb.find((bb => {
        let {
          key: ub
        } = bb;
        return ub === Sb
      }));
      return 0 === Lb.length ? (0, Hb.jsx)("div", {
        className: "SmpScreen",
        children: (0, Hb.jsx)(EB, {
          title: Yb ? (0, Hb.jsx)(DB.c, {
            text: Yb.item.customTitle
          }) : ub("smpShop:nothingToSell"),
          children: Yb && (0, Hb.jsx)(DB.c, {
            text: Yb.item.description
          })
        })
      }) : (0, Hb.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Hb.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Lb.map((bb => {
            var ub, hb;
            let {
              key: Bb,
              item: Ob,
              meta: Gb
            } = bb;
            return (0, Hb.jsx)(tO, {
              itemKey: Bb,
              item: Gb.item,
              quantity: Gb.quantity,
              pricePerItem: Gb.pricePerItem,
              tier: null !== (ub = null === (hb = Ob.enchant) || void 0 === hb ? void 0 : hb.tier) && void 0 !== ub ? ub : null,
              selected: Bb === Sb,
              onSelect: ab
            }, Bb)
          }))
        }), (0, Hb.jsx)("div", {
          className: Gb()("SmpSellBar", {
            SmpSellBarIdle: !Xb
          }),
          children: Xb ? (0, Hb.jsx)(eO, {
            entry: Xb,
            choice: aO(Xb.item, wb[Xb.key]),
            onChoose: bb => {
              Zb({
                ...wb,
                [Xb.key]: bb
              })
            }
          }) : (0, Hb.jsx)("span", {
            className: "SmpMuted",
            children: ub("smpShop:tapToSell")
          })
        })]
      })
    }

    function eO(bb) {
      var ub, hb, Bb, Ob;
      let {
        entry: Gb,
        choice: Lb,
        onChoose: Yb
      } = bb;
      const {
        t: ab
      } = (0, Ub.K)(), wb = ZO(), {
        key: Zb,
        item: Xb,
        meta: pb
      } = Gb, ob = UO("dropdown" === (null === (ub = Xb.userInput) || void 0 === ub ? void 0 : ub.type) ? Xb.userInput.dropdownOptions : []), Ab = null === Lb ? 0 : -(0, dB.d)(Xb, Lb);
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [(0, Hb.jsx)(IB, {
          item: pb.item,
          amount: pb.quantity,
          tier: null !== (hb = null === (Bb = Xb.enchant) || void 0 === Bb ? void 0 : Bb.tier) && void 0 !== hb ? hb : null
        }), (0, Hb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Hb.jsx)("b", {
            children: (0, Hb.jsx)(DB.c, {
              text: null !== (Ob = Xb.customTitle) && void 0 !== Ob ? Ob : pb.item
            })
          }), (0, Hb.jsx)("small", {
            children: ab("smpShop:sellEach", {
              count: pb.quantity
            })
          })]
        }), (0, Hb.jsx)(VB, {
          options: ob.map((bb => {
            let {
              label: ub,
              quantity: hb,
              isAll: Bb
            } = bb;
            return {
              value: ub,
              label: Bb ? ab("smpShop:all", {
                count: hb
              }) : String(hb)
            }
          })),
          value: Lb,
          onChange: Yb,
          ariaLabel: ab("smpShop:quantity")
        }), (0, Hb.jsxs)(Sb.q, {
          loading: wb.isPending(Zb),
          disabled: null === Lb,
          onClick: () => {
            wb.act(Zb, Lb)
          },
          children: [ab("smpShop:sellButton"), " ", (0, Hb.jsx)(PB, {
            amount: Ab
          })]
        })]
      })
    }

    function NO() {
      var bb;
      const {
        t: ub
      } = (0, Ub.K)(), hb = ZO(), Bb = null === (bb = hb.shopInfo[hb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Ob = uO(Bb, "collect"), Gb = uO(Bb, "myListing"), Lb = (bb, ub) => hb.isPending(bb) || !1 === ub.canBuy;
      return (0, Hb.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Hb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ub("smpShop:readyToCollect")
        }), Ob.length > 0 ? (0, Hb.jsx)("div", {
          className: "SmpList",
          children: Ob.map((bb => {
            var Bb, Ob;
            let {
              key: Gb,
              item: Ub,
              meta: Yb
            } = bb;
            return (0, Hb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Hb.jsx)(IB, {
                item: "sold" === Yb.type ? "Gold Coin" : Yb.item,
                amount: "sold" === Yb.type ? 0 : Yb.quantity,
                tier: null !== (Bb = null === (Ob = Ub.enchant) || void 0 === Ob ? void 0 : Ob.tier) && void 0 !== Bb ? Bb : null
              }), (0, Hb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Hb.jsx)("b", {
                  children: (0, Hb.jsx)(DB.c, {
                    text: Ub.customTitle
                  })
                }), (0, Hb.jsx)("small", {
                  children: (0, Hb.jsx)(DB.c, {
                    text: Ub.description
                  })
                })]
              }), (0, Hb.jsx)(Sb.m, {
                loading: Lb(Gb, Ub),
                onClick: () => {
                  hb.act(Gb)
                },
                children: ub("smpShop:collect")
              })]
            }, Gb)
          }))
        }) : (0, Hb.jsx)(EB, {
          title: ub("smpShop:nothingToCollect"),
          children: ub("smpShop:nothingToCollectHint")
        }), (0, Hb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ub("smpShop:activeListings", {
            count: Gb.length
          })
        }), Gb.length > 0 ? (0, Hb.jsx)("div", {
          className: "SmpList",
          children: Gb.map((bb => {
            var Bb, Ob;
            let {
              key: Gb,
              item: Ub,
              meta: Yb
            } = bb;
            return (0, Hb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Hb.jsx)(IB, {
                item: Yb.item,
                amount: Yb.quantity,
                tier: null !== (Bb = null === (Ob = Ub.enchant) || void 0 === Ob ? void 0 : Ob.tier) && void 0 !== Bb ? Bb : null
              }), (0, Hb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Hb.jsx)("b", {
                  children: (0, Hb.jsx)(DB.c, {
                    text: Ub.customTitle
                  })
                }), (0, Hb.jsx)("small", {
                  children: ub("smpShop:timeLeft", {
                    time: GO(Yb.expiresAt)
                  })
                })]
              }), (0, Hb.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Hb.jsx)(PB, {
                  amount: Yb.pricePerItem
                }), (0, Hb.jsx)("small", {
                  children: ub("smpShop:each")
                })]
              }), (0, Hb.jsx)(Sb.H, {
                loading: Lb(Gb, Ub),
                onClick: () => {
                  hb.act(Gb)
                },
                children: ub("smpShop:cancel")
              })]
            }, Gb)
          }))
        }) : (0, Hb.jsx)(EB, {
          title: ub("smpShop:noActiveListings"),
          children: ub("smpShop:noActiveListingsHint")
        })]
      })
    }

    function sO(bb) {
      let {
        done: ub,
        of: hb
      } = bb;
      return (0, Hb.jsx)("span", {
        className: "SmpProgress",
        children: (0, Hb.jsx)("i", {
          style: {
            width: `${Math.min(100,ub/Math.max(1,hb)*100)}%`
          }
        })
      })
    }

    function MO(bb) {
      var ub, hb, Bb;
      let {
        entry: Ob,
        choice: Gb,
        onChoose: Lb
      } = bb;
      const {
        t: Yb
      } = (0, Ub.K)(), ab = ZO(), {
        key: wb,
        item: Zb,
        meta: Xb
      } = Ob, pb = "dropdown" === (null === (ub = Zb.userInput) || void 0 === ub ? void 0 : ub.type) ? Zb.userInput.dropdownOptions : [], ob = !0 === Xb.processing, Ab = null !== Xb.creator && (Xb.owned > 0 || ob), lb = Ab && Xb.owned > 0 ? UO(pb) : [], Kb = null === Gb ? 0 : null !== (hb = null === (Bb = lb.find((bb => bb.label === Gb))) || void 0 === Bb ? void 0 : Bb.quantity) && void 0 !== hb ? hb : 0;
      return (0, Hb.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Hb.jsx)(IB, {
          item: Xb.item
        }), (0, Hb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Hb.jsx)("b", {
            children: (0, Hb.jsx)(DB.c, {
              text: Zb.customTitle
            })
          }), (0, Hb.jsxs)("small", {
            children: [(0, Hb.jsx)(PB, {
              amount: Xb.pricePerItem
            }), " ", Yb("smpShop:each"), " \xb7", " ", null === Xb.creator ? Yb("smpShop:you") : (0, Hb.jsx)(DB.c, {
              text: [{
                entityName: Xb.creator
              }]
            })]
          }), (0, Hb.jsx)(sO, {
            done: Xb.delivered,
            of: Xb.wanted
          })]
        }), Ab ? (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)(VB, {
            options: lb.map((bb => {
              let {
                label: ub,
                quantity: hb,
                isAll: Bb
              } = bb;
              return {
                value: ub,
                label: Bb ? Yb("smpShop:max", {
                  count: hb
                }) : String(hb)
              }
            })),
            value: Gb,
            onChange: Lb,
            ariaLabel: Yb("smpShop:quantity")
          }), (0, Hb.jsxs)(Sb.q, {
            loading: ab.isPending(wb) || ob,
            disabled: null === Gb,
            onClick: () => {
              ab.act(wb, Gb)
            },
            children: [Yb("smpShop:deliver"), " ", (0, Hb.jsx)(PB, {
              amount: Kb * Xb.pricePerItem
            })]
          })]
        }) : (0, Hb.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Xb.creator ? Yb("smpShop:yourOrder") : Yb("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function mO() {
      var bb;
      const {
        t: ub
      } = (0, Ub.K)(), hb = ZO(), Ob = null === (bb = hb.shopInfo[hb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Gb = hO(Ob, "search"), Lb = hO(Ob, "creator"), Yb = uO(Ob, "order"), ab = hO(Ob, "empty"), wb = AO(Gb, Yb.length > 0 || null !== ab), [Zb, Xb] = (0, Bb.useState)(!1), [pb, ob] = (0, Bb.useState)({});
      return (0, Hb.jsx)(CO, {
        browser: wb,
        recentLabel: ub("smpShop:recentOrders"),
        action: (0, Hb.jsx)(Sb.q, {
          onClick: () => {
            Xb((bb => !bb))
          },
          children: ub("smpShop:createOrder")
        }),
        above: Zb && (0, Hb.jsx)(gO, {
          mode: "order",
          creator: Lb,
          catalogue: wb.catalogue,
          names: wb.names,
          searching: wb.loading,
          prices: [],
          onPickItem: wb.searchFor,
          onClose: () => {
            Xb(!1)
          }
        }),
        onBack: () => {
          Xb(!1)
        },
        summary: Yb.length > 0 && ub(1 === Yb.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Yb.length,
          price: sB(dO(Yb, "max"))
        }),
        list: wb.loading ? (0, Hb.jsx)(qB, {}) : Yb.length > 0 ? (0, Hb.jsx)(XO.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: BO,
          observerUpdateDeps: [Yb.length],
          children: Yb.map((bb => (0, Hb.jsx)(MO, {
            entry: bb,
            choice: aO(bb.item, pb[bb.key]),
            onChoose: ub => {
              ob({
                ...pb,
                [bb.key]: ub
              })
            }
          }, bb.key)))
        }) : ab ? (0, Hb.jsx)(yB, {
          entry: ab
        }) : (0, Hb.jsx)(qB, {
          count: 3
        })
      })
    }

    function IO() {
      var bb;
      const {
        t: ub
      } = (0, Ub.K)(), hb = ZO(), Bb = uO(null === (bb = hb.shopInfo[hb.categoryKey]) || void 0 === bb ? void 0 : bb.items, "myOrder");
      return 0 === Bb.length ? (0, Hb.jsx)("div", {
        className: "SmpScreen",
        children: (0, Hb.jsx)(EB, {
          title: ub("smpShop:noOrders"),
          children: ub("smpShop:noOrdersHint")
        })
      }) : (0, Hb.jsx)("div", {
        className: "SmpScreen",
        children: (0, Hb.jsx)("div", {
          className: "SmpList",
          children: Bb.map((bb => {
            let {
              key: Bb,
              item: Ob,
              meta: Gb
            } = bb;
            const Ub = hb.isPending(Bb) || !1 === Ob.canBuy;
            return (0, Hb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Hb.jsx)(IB, {
                item: Gb.item,
                amount: Gb.collectable
              }), (0, Hb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Hb.jsx)("b", {
                  children: (0, Hb.jsx)(DB.c, {
                    text: Ob.customTitle
                  })
                }), (0, Hb.jsxs)("small", {
                  children: [(0, Hb.jsx)(PB, {
                    amount: Gb.pricePerItem
                  }), " ", ub("smpShop:each"), Gb.collectable > 0 && ` \xb7 ${ub("smpShop:readyCount",{count:Gb.collectable})}`]
                }), (0, Hb.jsx)(sO, {
                  done: Gb.delivered,
                  of: Gb.wanted
                })]
              }), Gb.collectable > 0 ? (0, Hb.jsx)(Sb.m, {
                loading: Ub,
                onClick: () => {
                  hb.act(Bb)
                },
                children: ub("smpShop:collectCount", {
                  count: Gb.collectable
                })
              }) : (0, Hb.jsx)(Sb.H, {
                loading: Ub,
                onClick: () => {
                  hb.act(Bb)
                },
                children: ub("smpShop:cancel")
              })]
            }, Bb)
          }))
        })
      })
    }
    const PO = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      qO = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function EO(bb, ub) {
      let hb = !1;
      const Bb = {};
      for (const Ob in bb) ub(Ob, bb[Ob]) ? Bb[Ob] = bb[Ob] : hb = !0;
      return hb ? Bb : bb
    }

    function yO(bb) {
      var ub, hb, Ob, Yb;
      const {
        show: Sb,
        shopInfo: ab,
        selectedCategoryKey: wb
      } = bb, {
        t: Zb
      } = (0, Ub.K)(), Xb = null !== wb && void 0 !== wb ? wb : "", pb = bO(ab, Xb), ob = null === (ub = ab[Xb]) || void 0 === ub ? void 0 : ub.items, Ab = null !== pb, [lb, Kb] = (0, Bb.useState)({}), [Wb, Cb] = (0, Bb.useState)([]), [db, rb] = (0, Bb.useState)(!1), [jb, nb] = (0, Bb.useState)(null), [, Db] = (0, Bb.useState)(0), xb = (0, Bb.useRef)(0), zb = (0, Bb.useRef)({}), gb = (0, Bb.useRef)({
        items: ob,
        pending: lb,
        shopInfo: ab,
        active: Ab,
        canAfford: bb.canAfford,
        buy: bb.buy
      });
      gb.current = {
        items: ob,
        pending: lb,
        shopInfo: ab,
        active: Ab,
        canAfford: bb.canAfford,
        buy: bb.buy
      };
      const ib = (0, Bb.useCallback)((bb => {
        xb.current++;
        const ub = xb.current;
        Cb((hb => [{
          id: ub,
          text: bb
        }, ...hb].slice(0, 8))), nb(ub)
      }), []);
      (0, Bb.useEffect)((() => {
        if (null === jb) return;
        const bb = setTimeout((() => {
          nb(null)
        }), 3e3);
        return () => {
          clearTimeout(bb)
        }
      }), [jb]), (0, Bb.useEffect)((() => {
        const ub = bb.message;
        if (!ub) return;
        const {
          shopInfo: hb,
          active: Bb,
          items: Ob
        } = gb.current, Gb = null !== ub.categoryKey ? null !== bO(hb, ub.categoryKey) : Bb;
        (Gb || Bb) && ib(ub.text), Gb && Kb((bb => EO(bb, (bb => {
          var ub, hb;
          return !PO.has(null === Ob || void 0 === Ob || null === (ub = Ob[bb]) || void 0 === ub || null === (hb = ub.smp) || void 0 === hb ? void 0 : hb.kind)
        }))))
      }), [bb.message, ib]), (0, Bb.useEffect)((() => {
        Kb((bb => EO(bb, ((bb, ub) => HO(null === ob || void 0 === ob ? void 0 : ob[bb]) === ub.snapshot))))
      }), [ab, ob]);
      const vb = Object.keys(lb).length > 0;
      (0, Bb.useEffect)((() => {
        if (!vb) return;
        const bb = setInterval((() => {
          Db((bb => bb + 1));
          const bb = Date.now(),
            {
              pending: ub,
              items: hb
            } = gb.current,
            Bb = Object.keys(ub).filter((hb => bb - ub[hb].at >= 12e3));
          if (0 === Bb.length) return;
          const Ob = Bb.some((bb => {
            var Bb, Ob;
            return "search" !== (null === hb || void 0 === hb || null === (Bb = hb[bb]) || void 0 === Bb || null === (Ob = Bb.smp) || void 0 === Ob ? void 0 : Ob.kind) || ub[bb].resend
          }));
          for (const Gb of Bb) zb.current[Gb] = bb;
          Kb((bb => EO(bb, (bb => !Bb.includes(bb))))), Ob && ib(Zb("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(bb)
        }
      }), [vb]), (0, Bb.useEffect)((() => {
        Kb({})
      }), [Xb]), (0, Bb.useEffect)((() => {
        Sb || rb(!1)
      }), [Sb]);
      const tb = (0, Bb.useCallback)((function(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Bb,
            pending: Ob,
            canAfford: Gb,
            buy: Ub
          } = gb.current, Lb = null === Bb || void 0 === Bb ? void 0 : Bb[bb];
          if (!Lb || bb in Ob || !1 === Lb.canBuy) return !1;
          if (!Gb(Lb, (0, dB.d)(Lb, ub))) return !1;
          Ub(bb, Lb, ub);
          const Yb = {
            snapshot: HO(Lb),
            at: Date.now(),
            resend: hb
          };
          return gb.current.pending = {
            ...gb.current.pending,
            [bb]: Yb
          }, Kb((ub => ({
            ...ub,
            [bb]: Yb
          }))), !0
        }), []),
        Jb = (0, Bb.useMemo)((() => ({
          shopInfo: ab,
          categoryKey: Xb,
          canAfford: bb.canAfford,
          isPending: bb => bb in lb,
          gaveUpAt: bb => {
            var ub;
            return null !== (ub = zb.current[bb]) && void 0 !== ub ? ub : 0
          },
          act: tb,
          notify: ib
        })), [ab, Xb, bb.canAfford, lb, tb, ib]),
        eb = Math.min(...Object.values(lb).map((bb => bb.at))),
        Nb = vb && Date.now() - eb > 1500,
        sb = Wb.length > 1,
        Mb = null !== (hb = null === (Ob = ab[Xb]) || void 0 === Ob ? void 0 : Ob.customTitle) && void 0 !== hb ? hb : Xb,
        mb = null === (Yb = ab[Xb]) || void 0 === Yb ? void 0 : Yb.description;
      let Ib = null;
      return "market" === pb ? Ib = (0, Hb.jsx)(iO, {}) : "sell" === pb ? Ib = (0, Hb.jsx)(JO, {}) : "collect" === pb ? Ib = (0, Hb.jsx)(NO, {}) : "orders" === pb ? Ib = (0, Hb.jsx)(mO, {}) : "myOrders" === pb && (Ib = (0, Hb.jsx)(IO, {})), (0, Hb.jsx)(wO.Provider, {
        value: Jb,
        children: (0, Hb.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Ab,
          children: (0, Hb.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Hb.jsx)("header", {
              className: "SmpHeader",
              children: (0, Hb.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Hb.jsxs)("h2", {
                  children: [pb && (0, Hb.jsx)(Lb.e, {
                    name: qO[pb]
                  }), Zb(Mb)]
                }), mb && (0, Hb.jsx)("p", {
                  children: (0, Hb.jsx)(DB.c, {
                    text: mb
                  })
                })]
              })
            }), (0, Hb.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Sb && Ib
            }), (0, Hb.jsxs)("button", {
              type: "button",
              className: Gb()("SmpStatus", {
                SmpStatusWaiting: vb,
                SmpStatusFresh: !vb && null !== jb,
                SmpStatusHasHistory: sb
              }),
              "aria-live": "polite",
              "aria-expanded": sb ? db : void 0,
              onClick: () => {
                sb && rb((bb => !bb))
              },
              children: [vb ? (0, Hb.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Hb.jsx)(FB, {}), Zb(Nb ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Wb[0] ? (0, Hb.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Hb.jsx)(DB.c, {
                  text: Wb[0].text
                })
              }, Wb[0].id) : (0, Hb.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Zb("smpShop:ready")
              }), sb && (0, Hb.jsx)("small", {
                children: Zb("smpShop:recentMessages", {
                  count: Wb.length
                })
              })]
            }), db && sb && (0, Hb.jsx)("div", {
              className: "SmpStatusHistory",
              children: Wb.map((bb => (0, Hb.jsx)("div", {
                children: (0, Hb.jsx)(DB.c, {
                  text: bb.text
                })
              }, bb.id)))
            })]
          })
        })
      })
    }
    class VO {
      constructor(bb) {
        this.info = bb
      }
      static fromShopInfo(bb) {
        const ub = {};
        for (const hb in bb) {
          const Bb = !0 === bb[hb].redDot && !0 !== bb[hb].forceRemoveRedDot;
          ub[hb] = {
            redDot: Bb,
            items: {}
          };
          for (const Ob in bb[hb].items) {
            const Bb = bb[hb].items[Ob],
              Gb = !0 === Bb.redDot && !0 !== Bb.forceRemoveRedDot;
            ub[hb].items[Ob] = {
              redDot: Gb
            }
          }
        }
        return new VO(ub)
      }
      anyCategoryHasRedDots() {
        for (const bb in this.info)
          if (this.categoryHasRedDot(bb)) return !0;
        return !1
      }
      doesCategoryExist(bb) {
        return !(0, qu.J)(this.info[bb])
      }
      categoryHasRedDot(bb) {
        return !0 === this.info[bb].redDot
      }
      updateCategoryRedDot(bb, ub) {
        this.info[bb].redDot = ub
      }
      doesItemExist(bb, ub) {
        return this.doesCategoryExist(bb) && !(0, qu.J)(this.info[bb].items[ub])
      }
      itemHasRedDot(bb, ub) {
        return !0 === this.info[bb].items[ub].redDot
      }
      updateItemRedDot(bb, ub, hb) {
        this.info[bb].items[ub].redDot = hb
      }
      shallowCopy() {
        return new VO(this.info)
      }
    }

    function FO(bb, ub) {
      return `${bb}\x1f${ub}`
    }

    function fO(bb, ub) {
      return !(0, qu.J)(ub) && !(0, qu.J)(bb) && ub in bb
    }
    const kO = (0, Bb.memo)((function(bb) {
      var ub, hb;
      let {
        show: Ob
      } = bb;
      const Ub = (0, Th.g)("players", uG),
        Lb = (0, Th.g)("players", hG),
        ab = (0, tB.d)(),
        [Zb, Xb] = (0, Bb.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: VO.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        ob = (0, Bb.useRef)(""),
        Ab = (0, Bb.useRef)(null),
        Kb = (0, Bb.useRef)(null),
        Wb = (0, Bb.useRef)(0),
        Cb = (0, Bb.useRef)(void 0),
        db = (0, Bb.useRef)(null),
        rb = (0, Bb.useRef)(Zb),
        nb = Zb.redDotInfo.anyCategoryHasRedDots(),
        [Db, zb] = (0, Bb.useState)(null),
        gb = (0, Bb.useRef)(!1);
      let ib = !1,
        vb = 0,
        tb = 0;
      if (Zb.currencyAmounts) {
        for (const bb in Zb.currencyAmounts) {
          var Jb;
          const ub = Zb.currencyAmounts[bb];
          ub.hidden || (vb++, (null === (Jb = ub.subtext) || void 0 === Jb ? void 0 : Jb.length) > 0 && tb++)
        }
        ib = vb + tb > 4
      }(0, Bb.useEffect)((() => {
        Eu.i.vp("showShopIconRedDot", nb, !0)
      }), [nb]), (0, Bb.useEffect)((() => {
        lb.gameBridge.send("setShopOpen", Ob), Ob || (clearTimeout(Cb.current), Xb((bb => bb.awaitingPurchase ? {
          ...bb,
          awaitingPurchase: !1
        } : bb)))
      }), [Ob]), (0, Bb.useEffect)((() => () => {
        lb.gameBridge.send("setShopOpen", !1), clearTimeout(Cb.current)
      }), []), (0, Bb.useEffect)((() => {
        rb.current = Zb
      }), [Zb]), (0, Bb.useEffect)((() => {
        if (null === Db) return;
        return (0, iB.c)("pointerdown", (bb => {
          const ub = bb.target;
          null !== ub && void 0 !== ub && ub.closest(".ShopItem") || zb(null)
        }))
      }), [Db]);
      const eb = bb => {
          Xb((ub => ({
            ...ub,
            ...bb
          })))
        },
        Nb = bb => {
          var ub;
          clearTimeout(null === (ub = Zb.onBoughtInfo) || void 0 === ub ? void 0 : ub.timeout);
          const hb = setTimeout((() => {
            eb({
              onBoughtInfo: null
            })
          }), 3e3);
          ob.current = bb, eb({
            onBoughtInfo: {
              text: bb,
              timeout: hb,
              categoryKey: Ab.current
            }
          })
        },
        sb = bb => {
          const {
            shopInfo: ub,
            userInputsPerItem: hb,
            redDotInfo: Bb,
            autoSelectCategory: Gb
          } = function(bb, ub, hb, Bb, Ob, Gb) {
            if ((0, qu.J)(bb) || 0 === Object.keys(bb).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: VO.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Ub = xb.n[xb.s].adConfig.showRewardedAds,
              Lb = {};
            let Yb = null;
            for (const ob in bb) {
              const ub = bb[ob],
                hb = {};
              let Bb = !1;
              for (const bb in ub.items) {
                const Ob = ub.items[bb];
                (0, dB.j)(Ob, Ub) && (hb[bb] = Ob, Bb = !0)
              }
              Bb && (Lb[ob] = {
                ...ub,
                items: hb
              }, !0 === ub.autoSelectCategory && (Yb = ob))
            }
            const Sb = {},
              ab = (bb, ub, Bb, Ub) => {
                var Lb, Yb;
                const ab = FO(bb, ub),
                  Hb = null !== (Lb = hb[ab]) && void 0 !== Lb ? Lb : hb[ub];
                if (null !== (Yb = Ub.userInput) && void 0 !== Yb && Yb.type) switch (Ub.userInput.type) {
                  case "dropdown": {
                    var wb;
                    const bb = !Hb || !Ub.userInput.dropdownOptions.some((bb => (0, dB.f)(bb) === Hb)),
                      ub = Ub.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Bb || void 0 === Bb || null === (wb = Bb.userInput) || void 0 === wb ? void 0 : wb.type) || JSON.stringify(Bb.userInput.dropdownOptions) !== JSON.stringify(Ub.userInput.dropdownOptions)),
                      hb = Ub.userInput,
                      Ob = !(0, qu.J)(hb.initialValue) && hb.dropdownOptions.some((bb => (0, dB.f)(bb) === hb.initialValue));
                    var Zb;
                    return void(bb || ub ? Ob ? Sb[ab] = null !== (Zb = Ub.userInput.initialValue) && void 0 !== Zb ? Zb : null : Ub.userInput.dropdownOptions.length > 0 ? Sb[ab] = (0, dB.f)(Ub.userInput.dropdownOptions[0]) : Sb[ab] = null : Sb[ab] = Hb)
                  }
                  case "text":
                  case "number":
                    var Xb, pb, ob;
                    return void((null === Bb || void 0 === Bb ? void 0 : Bb.userInput) !== Ub.userInput ? Sb[ab] = null !== (Xb = null !== (pb = Ub.userInput.initialValue) && void 0 !== pb ? pb : Hb) && void 0 !== Xb ? Xb : "" : Sb[ab] = null !== (ob = null !== Hb && void 0 !== Hb ? Hb : Ub.userInput.initialValue) && void 0 !== ob ? ob : "");
                  case "color":
                    var Ab, lb, Kb;
                    return void((null === Bb || void 0 === Bb ? void 0 : Bb.userInput) !== Ub.userInput ? Sb[ab] = null !== (Ab = null !== (lb = Ub.userInput.initialValue) && void 0 !== lb ? lb : Hb) && void 0 !== Ab ? Ab : "#000000" : Sb[ab] = null !== (Kb = null !== Hb && void 0 !== Hb ? Hb : Ub.userInput.initialValue) && void 0 !== Kb ? Kb : "#000000");
                  case "player": {
                    const bb = (0, dB.g)(Ob, Gb, Ub.userInput);
                    return void(Hb && bb.includes(Hb) ? Sb[ab] = Hb : Sb[ab] = bb.length > 0 ? bb[0] : null)
                  }
                }
              };
            for (const ob in Lb)
              for (const bb in Lb[ob].items) {
                var Hb;
                const hb = Lb[ob].items[bb];
                ab(ob, bb, null === (Hb = ub[ob]) || void 0 === Hb ? void 0 : Hb.items[bb], hb)
              }
            const wb = VO.fromShopInfo(Lb);
            for (const ob in Lb) {
              var Zb;
              if (Bb.doesCategoryExist(ob)) {
                (null === (Zb = ub[ob]) || void 0 === Zb ? void 0 : Zb.redDot) === Lb[ob].redDot && wb.updateCategoryRedDot(ob, Bb.categoryHasRedDot(ob));
                for (const bb in Lb[ob].items) {
                  var Xb, pb;
                  Bb.doesItemExist(ob, bb) && (null === (Xb = ub[ob]) || void 0 === Xb || null === (pb = Xb.items[bb]) || void 0 === pb ? void 0 : pb.redDot) === Lb[ob].items[bb].redDot && wb.updateItemRedDot(ob, bb, Bb.itemHasRedDot(ob, bb))
                }
              }
            }
            return {
              shopInfo: Lb,
              userInputsPerItem: Sb,
              redDotInfo: wb,
              autoSelectCategory: Yb
            }
          }(bb, Zb.shopInfo, Zb.userInputsPerItem, Zb.redDotInfo, Ub, Lb), Yb = {
            shopInfo: ub,
            userInputsPerItem: hb,
            redDotInfo: Bb
          };
          if (null === Gb || Ob)
            if (ub[Zb.selectedCategoryKey]) Yb.selectedCategoryKey = Zb.selectedCategoryKey;
            else {
              const bb = eB(ub);
              Yb.selectedCategoryKey = bb.length > 0 ? bb[0] : null
            }
          else Yb.selectedCategoryKey = Gb;
          return 0 === Object.keys(ub).length && Ob && jb.d.set({
            openEverythingMenuName: null
          }), Yb
        },
        mb = (bb, ub, hb) => {
          const Bb = Zb.selectedCategoryKey,
            Ob = FO(Bb, bb),
            Gb = null !== hb && void 0 !== hb ? hb : Zb.userInputsPerItem[Ob],
            Ub = {
              categoryKey: Bb,
              itemKey: bb,
              userInput: Gb
            };
          if (Ab.current = Bb, ub.isRewardedAd) {
            if (Date.now() - Wb.current < 5e3) return;
            (0, Gu.bb)((() => {
              var hb, Bb, Gb;
              console.log("bought rewarded ad");
              const Lb = Ub.categoryKey ? null === (hb = rb.current.shopInfo[Ub.categoryKey]) || void 0 === hb ? void 0 : hb.items[bb] : null;
              if (!Lb || !Lb.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Bb = ub.userInput) || void 0 === Bb ? void 0 : Bb.type) === (null === Lb || void 0 === Lb || null === (Gb = Lb.userInput) || void 0 === Gb ? void 0 : Gb.type) ? (Ub.userInput = rb.current.userInputsPerItem[Ob], lb.gameBridge.send("buyShopItem", Ub), ub.onBoughtMessage && Nb(ub.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Wb.current = Date.now()
          } else {
            lb.gameBridge.send("buyShopItem", Ub), eb({
              awaitingPurchase: !0
            }), clearTimeout(Cb.current), Cb.current = setTimeout((() => {
              db.current = null, eb({
                awaitingPurchase: !1
              })
            }), 1e3);
            const bb = (0, dB.d)(ub, Gb);
            if (db.current = null, !isNaN(bb) && fO(Zb.currencyAmounts, ub.currency)) {
              0 !== bb && (db.current = {
                currency: ub.currency,
                amountBefore: Zb.currencyAmounts[ub.currency].amount
              });
              const hb = {
                ...Zb.currencyAmounts
              };
              hb[ub.currency].amount -= bb, eb({
                currencyAmounts: hb
              })
            }
            ub.onBoughtMessage && Nb(ub.onBoughtMessage)
          }
        },
        Ib = (bb, ub) => {
          if (null === ub || !bb.shopInfo[ub]) return bb;
          let hb = bb.redDotInfo;
          return hb.categoryHasRedDot(ub) && (hb.updateCategoryRedDot(ub, !1), hb = hb.shallowCopy()), {
            ...bb,
            selectedCategoryKey: ub,
            redDotInfo: hb
          }
        },
        Pb = bb => {
          Xb((ub => Ib(ub, bb)))
        };
      (0, xu.h)(vB.l, (() => {
        Xb((bb => {
          const ub = (0, vB.m)(eB(bb.shopInfo), bb.selectedCategoryKey, (ub => (0, vB.h)(bb.shopInfo[ub].items)));
          return ub === bb.selectedCategoryKey ? bb : Ib(bb, ub)
        }))
      })), (0, xu.h)("showShopFromServer", (bb => {
        let {
          toggle: ub,
          kh: hb
        } = bb;
        hb && Pb(hb), 0 === Object.keys(Zb.shopInfo).length || ub && Ob ? jb.d.set({
          openEverythingMenuName: null
        }) : jb.d.set({
          openEverythingMenuName: Su.u.SHOP
        })
      })), (0, xu.h)("closeShopOnDamaged", (() => {
        Ob && jb.d.set({
          openEverythingMenuName: null
        })
      })), (0, xu.h)("overShopInfo", (bb => {
        Nb(bb)
      })), (0, pb.e)("currencyAmounts", (bb => {
        var ub;
        const hb = db.current;
        hb && (null === bb || void 0 === bb || null === (ub = bb[hb.currency]) || void 0 === ub ? void 0 : ub.amount) === hb.amountBefore ? eb({
          currencyAmounts: bb
        }) : (db.current = null, eb({
          currencyAmounts: bb,
          awaitingPurchase: !1
        }))
      })), (0, pb.e)("shopInfo", (bb => {
        eb({
          ...sb(bb),
          awaitingPurchase: !1
        })
      }));
      const qb = (0, Bb.useRef)({
        playerIds: Ub,
        localPlayerId: Lb
      });
      (0, Bb.useEffect)((() => {
        qb.current.playerIds === Ub && qb.current.localPlayerId === Lb || (qb.current = {
          playerIds: Ub,
          localPlayerId: Lb
        }, Xb((bb => {
          const ub = sb(bb.shopInfo);
          return {
            ...bb,
            ...ub
          }
        })))
      }), [Ub, Lb]);
      const Eb = Zb.selectedCategoryKey,
        yb = (bb, ub) => {
          var hb, Bb;
          return (isNaN(ub) || (0, qu.J)(bb.currency) || fO(Zb.currencyAmounts, bb.currency) && ub <= Zb.currencyAmounts[bb.currency].amount) && (null === (hb = bb.canBuy) || void 0 === hb || hb) && !(null !== (Bb = bb.hidden) && void 0 !== Bb && Bb)
        },
        Vb = (bb, ub) => {
          var hb, Bb, Ob;
          const Ub = FO(Eb, bb),
            Lb = Zb.shopInfo[Eb].items[bb],
            ab = Zb.userInputsPerItem[Ub],
            wb = (0, dB.d)(Lb, ab),
            Xb = yb(Lb, wb),
            pb = Lb.enchant,
            ob = pb ? (0, Mb.wb)(null !== (hb = Lb.customTitle) && void 0 !== hb ? hb : bb, {
              colour: Mb.rb[pb.tier]
            }) : null !== (Bb = Lb.customTitle) && void 0 !== Bb ? Bb : bb,
            Ab = ub => {
              const hb = null !== ub && void 0 !== ub ? ub : ab,
                Bb = void 0 !== ub ? (0, dB.d)(Lb, ub) : wb;
              yb(Lb, Bb) && null !== hb && mb(bb, Lb, ub);
              let Ob = Zb.redDotInfo;
              Ob.itemHasRedDot(Eb, bb) && (Ob.updateItemRedDot(Eb, bb, !1), Ob = Ob.shallowCopy()), eb({
                redDotInfo: Ob
              })
            };
          return (0, Hb.jsxs)("div", {
            className: Gb()("ShopItem", {
              ShopItemNoInput: !Lb.userInput,
              ShopItemNoInputCanBuy: !Lb.userInput && Xb,
              ShopItemNoInputSelected: Lb.isSelected,
              ShopItemEnchant: !!pb
            }),
            "data-pad-focusable": !Lb.userInput || void 0,
            "data-pad-unavailable": !Lb.userInput && !Xb || void 0,
            "data-pad-repeat": null !== (Ob = (0, vB.c)(Lb)) && void 0 !== Ob ? Ob : void 0,
            "data-pad-repeat-wait": Zb.awaitingPurchase || void 0,
            onClick: () => {
              if (pb && gb.current) {
                if (Db !== Ub) return void zb(Ub);
                zb(null)
              }
              Lb.userInput || Ab()
            },
            onPointerDown: bb => {
              pb && (gb.current = (0, jB.p)(bb))
            },
            onPointerEnter: bb => {
              pb && !(0, jB.p)(bb) && zb(Ub)
            },
            onPointerLeave: bb => {
              pb && !(0, jB.p)(bb) && zb((bb => bb === Ub ? null : bb))
            },
            style: {
              zIndex: Object.keys(Zb.shopInfo[Eb].items).length - ub
            },
            children: [Zb.redDotInfo.itemHasRedDot(Eb, bb) && (0, Hb.jsx)(Yb.e, {
              top: "-6px",
              right: "-6px"
            }), Lb.badge && (0, Hb.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Hb.jsx)("div", {
                className: Gb()("ShopBadgeMain", Lb.badge.type),
                children: (0, Hb.jsx)(DB.c, {
                  text: Lb.badge.text
                })
              })
            }), (0, Hb.jsx)("div", {
              className: "ShopItemLeft",
              children: Lb.image && (0, Hb.jsx)(TO, {
                item: Lb,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Hb.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Hb.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Hb.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Hb.jsx)(DB.c, {
                    text: ob
                  })
                }), (0, Hb.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Hb.jsx)(DB.c, {
                    text: Lb.description
                  })
                })]
              }), Lb.userInput && (0, Hb.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: bb => {
                  bb.stopPropagation()
                },
                children: [(0, Hb.jsx)(RO, {
                  item: Lb,
                  currInput: ab,
                  updateInput: ub => {
                    ((bb, ub, hb) => {
                      const Bb = FO(bb, ub),
                        Ob = {
                          ...Zb.userInputsPerItem
                        };
                      Ob[Bb] = hb, eb({
                        userInputsPerItem: Ob
                      })
                    })(Eb, bb, ub)
                  },
                  onSubmit: bb => {
                    Ab(bb)
                  }
                }), ("dropdown" !== Lb.userInput.type || !Lb.userInput.autoSubmit) && (0, Hb.jsx)(Sb.e, {
                  className: "ItemCostButton",
                  disabled: !Xb && null !== ab,
                  onClick: () => {
                    Ab()
                  },
                  children: (0, Hb.jsx)(QO, {
                    item: Lb,
                    cost: wb,
                    currencyAmounts: Zb.currencyAmounts
                  })
                })]
              })]
            }), !Lb.userInput && (0, Hb.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Hb.jsx)(QO, {
                item: Lb,
                cost: wb,
                currencyAmounts: Zb.currencyAmounts
              })
            }), pb && Db === Ub && (0, Hb.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Hb.jsx)(DB.c, {
                text: ob
              }), (0, Hb.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Hb.jsx)(DB.c, {
                  text: (0, rB.d)("", pb.enchantments, pb.enchantmentData)
                })
              })]
            })]
          }, Ub)
        },
        Fb = function(bb) {
          for (const ub in bb)
            if (bb[ub].smp) return !0;
          return !1
        }(Zb.shopInfo),
        fb = bO(Zb.shopInfo, Eb);
      return (0, Hb.jsx)(KB.d, {
        className: "Menu ShopBody",
        show: Ob,
        children: 0 !== Object.keys(Zb.shopInfo).length && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Hb.jsx)(wb, {
              items: eB(Zb.shopInfo).map((bb => {
                var ub;
                return {
                  id: bb,
                  title: null !== (ub = Zb.shopInfo[bb].customTitle) && void 0 !== ub ? ub : bb,
                  redDot: Zb.redDotInfo.categoryHasRedDot(bb)
                }
              })),
              link: ab ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, JB.h)({
                    page: (0, JB.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Eb,
              onClick: Pb,
              padStartsOnTab: (0, vB.f)(Eb)
            }), (0, Hb.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Zb.currencyAmounts && Object.keys(Zb.currencyAmounts).map((bb => {
                var ub;
                const hb = Zb.currencyAmounts[bb];
                return hb.hidden ? null : (0, Hb.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (ib ? "SmallText" : ""),
                  children: [(0, Hb.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Hb.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: hb.iconColour
                      },
                      children: (0, Hb.jsx)(BG, {
                        iconName: hb.icon
                      })
                    }), "\xa0", (0, CB.b)(hb.amount, 6)]
                  }), (null === (ub = hb.subtext) || void 0 === ub ? void 0 : ub.length) > 0 && (0, Hb.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Hb.jsx)(DB.c, {
                      text: hb.subtext
                    })
                  })]
                }, bb)
              }))
            })]
          }), (0, Hb.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Fb && (0, Hb.jsx)(yO, {
              show: Ob,
              shopInfo: Zb.shopInfo,
              selectedCategoryKey: Eb,
              buy: (bb, ub, hb) => {
                mb(bb, ub, hb)
              },
              canAfford: yb,
              message: Zb.onBoughtInfo
            }), null === fb && (0, Hb.jsxs)(Hb.Fragment, {
              children: [(0, Hb.jsx)("div", {
                className: Gb()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Zb.onBoughtInfo
                }),
                children: (0, Hb.jsx)(DB.c, {
                  text: ob.current
                })
              }), (0, Hb.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Hb.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (ub = Zb.shopInfo[Eb]) || void 0 === ub ? void 0 : ub.description) && (0, Hb.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Hb.jsx)(DB.c, {
                      text: Zb.shopInfo[Eb].description
                    })
                  }), Ob && (0, Hb.jsx)("div", {
                    className: "ShopItems",
                    ref: Kb,
                    "data-pad-initial-area": !0,
                    children: eB(null === (hb = Zb.shopInfo[Eb]) || void 0 === hb ? void 0 : hb.items).map(((bb, ub) => Vb(bb, ub)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function TO(bb) {
      let {
        item: ub,
        minWidth: hb,
        minHeight: Bb
      } = bb;
      const {
        image: Ob,
        schematicId: Gb,
        imageColour: Ub
      } = ub;
      if (Gb) return (0, Hb.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${hb}rem`,
          height: `${Bb}rem`
        },
        children: (0, Hb.jsx)(xB.b, {
          game: {
            schematicId: Gb
          }
        })
      });
      var Yb, Sb;
      if ((0, nB.e)(Ob)) return (0, Hb.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${hb}rem`,
          height: "0",
          minHeight: `${Bb}rem`
        },
        children: (0, Hb.jsx)(nB.d, {
          itemName: Ob,
          amount: null !== (Yb = ub.amount) && void 0 !== Yb ? Yb : 0,
          amountFontSize: Bb / 4 + "rem",
          enchantmentTier: null === (Sb = ub.enchant) || void 0 === Sb ? void 0 : Sb.tier
        })
      });
      const ab = Ob.slice(-4);
      return ".jpg" === ab || ".png" === ab ? (0, Hb.jsx)(cO, {
        image: Ob,
        minWidth: hb
      }) : (0, Hb.jsx)(Lb.e, {
        name: Ob,
        className: "SelectedItemImage",
        style: {
          color: Ub
        }
      })
    }

    function cO(bb) {
      let {
        image: ub,
        minWidth: hb
      } = bb;
      const {
        gameNameWithVariation: Bb
      } = (0, Th.i)("connectedGame"), Ob = ub.endsWith(".jpg");
      return (0, Hb.jsx)("img", {
        className: Gb()({
          ShopPixelImage: !Ob
        }),
        style: {
          width: `${Ob?1.6*hb:hb}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Mb.Xb)(Bb)}/${ub}`,
        alt: ub,
        draggable: !1
      })
    }

    function QO(bb) {
      let {
        item: ub,
        cost: hb,
        currencyAmounts: Bb
      } = bb;
      const Ob = !isNaN(hb) && 0 !== hb && fO(Bb, ub.currency);
      let Gb = null;
      return ub.buyButtonText ? Gb = ub.buyButtonText : Ob ? (Gb = hb, ub.sell && (Gb = -1 * hb), Gb = Gb.toString()) : 0 === hb ? Gb = "Free" : ub.isRewardedAd && (Gb = "Watch ad"), (0, qu.J)(Gb) || " " === Gb ? null : (0, Hb.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Ob && (0, Hb.jsx)("div", {
          style: {
            color: Bb[ub.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Hb.jsx)(BG, {
            iconName: Bb[ub.currency].icon
          })
        }), (0, Hb.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Hb.jsx)(DB.c, {
            text: Gb
          })
        })]
      })
    }

    function RO(bb) {
      let {
        item: ub,
        currInput: hb,
        updateInput: Ob,
        onSubmit: Gb
      } = bb;
      const {
        t: Lb
      } = (0, Ub.K)(), Yb = (0, Bb.useRef)(null);
      if ((0, Bb.useEffect)((() => {
          const bb = Yb.current;
          bb && bb.value !== hb && document.activeElement !== bb && (bb.value = null !== hb && void 0 !== hb ? hb : "")
        }), [hb]), !ub.userInput) return null;
      let Sb = ub.userInput;
      if (Ab.featureFlags.sanitizeShopInput && "text" === ub.userInput.type && (Sb = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Sb.type || "number" === Sb.type) {
        var ab, wb;
        console.assert(void 0 !== hb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ub)}`);
        const bb = "text" === Sb.type && Sb.wordCharsOnly;
        return (0, Hb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Hb.jsx)(Cb.b, {
            className: "ShopItemUserInputText",
            placeholderText: Lb(Sb.placeholderText),
            defaultValue: hb,
            domRef: Yb,
            onValueChange: (ub, hb) => {
              !0 === bb && (ub = (0, gB.vb)(ub)), Yb.current.value = ub, Ob(ub)
            },
            onEnter: Gb,
            type: Sb.type
          }, (null !== (ab = Sb.initialValue) && void 0 !== ab ? ab : "") + (null !== (wb = Sb.placeholderText) && void 0 !== wb ? wb : ""))
        })
      }
      if ("dropdown" === Sb.type) {
        console.assert(void 0 !== hb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ub)}`);
        const bb = Sb.autoSubmit;
        return (0, Hb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Hb.jsx)(Cu.b, {
            options: Sb.dropdownOptions.map((bb => (0, dB.f)(bb))),
            value: hb,
            onChange: ub => {
              let {
                value: hb
              } = ub;
              Ob(hb), bb && Gb(hb)
            }
          })
        })
      }
      return "player" === Sb.type ? (0, Hb.jsx)(bG, {
        userInput: Sb,
        currInput: hb,
        updateInput: Ob
      }) : "color" === Sb.type ? (0, Hb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Hb.jsx)("input", {
          type: "color",
          value: hb,
          onChange: bb => {
            Ob(bb.target.value)
          }
        })
      }) : null
    }

    function bG(bb) {
      let {
        userInput: ub,
        currInput: hb,
        updateInput: Bb
      } = bb;
      const Ob = (0, Th.i)("players"),
        Gb = (0, Th.i)("hiddenPlayerNames"),
        Ub = (0, dB.g)(Ob.ids, Ob.localId, ub);
      return (0, Hb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Hb.jsx)(Cu.b, {
          options: Ub.map((bb => {
            const {
              name: ub
            } = Ob.byId[bb];
            return {
              value: bb,
              label: null === ub ? "" : (0, zB.f)(ub, Gb)
            }
          })),
          value: hb,
          onChange: bb => {
            let {
              value: ub
            } = bb;
            Bb(ub)
          }
        })
      })
    }

    function uG(bb) {
      let {
        ids: ub
      } = bb;
      return ub
    }

    function hG(bb) {
      let {
        localId: ub
      } = bb;
      return ub
    }

    function BG(bb) {
      let {
        iconName: ub
      } = bb;
      return lb.gameBridge.lookup("isItemName", ub) ? (0, Hb.jsx)(nB.d, {
        itemName: ub,
        amount: 1
      }) : (0, Hb.jsx)(Lb.e, {
        name: ub,
        className: "2x"
      })
    }
    var OG = hb(1537);
    const GG = (0, hb(1302).l)((bb => bb.PadLobbyShortcuts)),
      UG = (0, Bb.lazy)((() => Promise.resolve().then((() => hb(4420))).then((bb => ({
        default: bb.Lobbyleaderboard
      }))))),
      LG = (0, Bb.lazy)((() => hb.e(215).then((() => hb(40517))).then((bb => ({
        default: bb.LobbyManageView
      })))));

    function YG(bb) {
      let {
        show: ub
      } = bb;
      return ub ? (0, Hb.jsx)(SG, {}) : null
    }

    function SG() {
      const bb = (0, tB.d)();
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [(0, Hb.jsx)(GG, {}), (0, Hb.jsxs)(Bb.Suspense, {
          fallback: (0, Hb.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Hb.jsx)(db.c, {})
          }),
          children: [bb && (0, Hb.jsx)(LG, {
            leaderboard: (0, Hb.jsx)(UG, {})
          }), !bb && (0, Hb.jsx)(UG, {})]
        })]
      })
    }
    var aG = hb(1455),
      HG = hb(2807),
      wG = hb(1622),
      ZG = hb(2860),
      XG = hb(2508),
      pG = hb(1392),
      oG = hb(1359),
      AG = hb(2780),
      lG = hb(2799),
      KG = hb(2208);
    const WG = "storeRecentGiftRecipients",
      CG = new Map;

    function dG() {
      try {
        const bb = Vu.j.getItem(WG);
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.name) && bb.name.length > 0)).map((bb => ({
          name: bb.name,
          cosmetics: bb.cosmetics && "object" === typeof bb.cosmetics ? bb.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function rG(bb) {
      var ub;
      const [hb, Ob] = (0, Bb.useState)(""), [Gb, Ub] = (0, Bb.useState)("search"), [Lb, Yb] = (0, Bb.useState)(null), [Sb, ab] = (0, Bb.useState)(null), Hb = (0, Bb.useRef)(null), wb = (0, Bb.useRef)(null);
      (0, Bb.useEffect)((() => () => {
        Hb.current && clearTimeout(Hb.current)
      }), []);
      const Zb = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.name) && void 0 !== ub ? ub : null;

      function Xb() {
        Hb.current && (clearTimeout(Hb.current), Hb.current = null)
      }(0, Bb.useEffect)((() => {
        if (null === Zb || bb === zb.NULL_USER_CONTEXT) return;
        const ub = Zb.toLowerCase();
        if (ub === bb.getPlayerName().toLowerCase()) return void ab({
          name: Zb,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const hb = CG.get(ub);
        if (hb) return void ab({
          name: Zb,
          result: hb
        });
        let Bb = !1;
        return async function(bb, ub) {
          try {
            const hb = await (0, zb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: ub
            }, {
              retries: 1
            }, bb.getMetricsCookies());
            if ("boolean" !== typeof(null === hb || void 0 === hb ? void 0 : hb.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(hb)}`);
            return hb
          } catch (hb) {
            return console.error("Failed to look up gift recipient:", hb), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(bb, Zb).catch((bb => (console.error("Gift recipient lookup failed:", bb), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((bb => {
          !0 !== bb.giftRecipientFound && "store:giftRecipientLookupFailed" === bb.giftRecipientError || CG.set(ub, bb), Bb || ab({
            name: Zb,
            result: bb
          })
        })), () => {
          Bb = !0
        }
      }), [Zb, bb]);
      const pb = (0, Bb.useMemo)((() => {
        const bb = hb.trim();
        if (!bb) return {
          status: "none"
        };
        if (!Lb || Lb.name !== bb || (null === Sb || void 0 === Sb ? void 0 : Sb.name) !== Lb.name) return {
          status: "pending",
          name: bb
        };
        const ub = Sb.result;
        return !1 === ub.giftRecipientFound ? {
          status: "error",
          name: Lb.name,
          error: ub.giftRecipientError
        } : {
          status: "found",
          name: ub.giftRecipientName,
          ownedPacks: ub.giftRecipientOwnedPacks,
          hasSuperRank: ub.giftRecipientHasSuperRank,
          isSubscriber: ub.giftRecipientIsSubscriber
        }
      }), [hb, Lb, Sb]);
      (0, Bb.useEffect)((() => {
        "found" === pb.status && "typed" === (null === Lb || void 0 === Lb ? void 0 : Lb.source) && wb.current !== pb.name && (wb.current = pb.name, (0, Qb.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [pb, Lb]);
      const ob = (null === Sb || void 0 === Sb ? void 0 : Sb.name) === (null === Lb || void 0 === Lb ? void 0 : Lb.name) ? null === Sb || void 0 === Sb ? void 0 : Sb.result : null,
        Ab = !0 === (null === ob || void 0 === ob ? void 0 : ob.giftRecipientFound) ? ob.giftRecipientCosmetics : null;
      return {
        query: hb,
        via: Gb,
        recipient: pb,
        recipientCosmetics: Ab,
        type: function(bb) {
          Ob(bb), Ub("search"), Xb();
          const ub = bb.trim();
          ub ? Hb.current = setTimeout((() => {
            Yb({
              name: ub,
              source: "typed"
            })
          }), 400) : Yb(null)
        },
        choose: function(bb, ub) {
          Xb(), Ob(bb), Ub("typed" === ub ? "search" : "prefilled" === ub ? "prefilled" : "suggestion"), Yb({
            name: bb,
            source: ub
          }), "typed" !== ub && "prefilled" !== ub && (0, Qb.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: ub
          })
        },
        clear: function() {
          Xb(), Ob(""), Ub("search"), Yb(null)
        },
        recordGift: function(bb, ub) {
          ! function(bb) {
            CG.delete(bb.toLowerCase())
          }(bb), ab((hb => {
            if (!hb || hb.name.toLowerCase() !== bb.toLowerCase() || !0 !== hb.result.giftRecipientFound || "superRank" === ub) return hb;
            const Bb = hb.result.giftRecipientOwnedPacks;
            return {
              ...hb,
              result: {
                ...hb.result,
                giftRecipientOwnedPacks: Bb.includes(ub) ? Bb : [...Bb, ub]
              }
            }
          }))
        }
      }
    }
    var jG = hb(2201),
      nG = hb(4427),
      DG = hb(248),
      xG = hb(2911);
    const zG = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var gG = hb(2151),
      iG = hb(568),
      vG = hb(2238),
      tG = hb(2418);

    function JG(bb) {
      let {
        cosmetics: ub
      } = bb;
      return (0, Hb.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Hb.jsx)(vG.e, {
          cosmetics: ub
        })
      })
    }

    function eG(bb, ub) {
      var hb, Bb;
      const Ob = null !== (hb = bb.friend) && void 0 !== hb ? hb : {
        isError: !1,
        name: bb.name,
        ranks: [],
        cosmetics: null !== (Bb = bb.cosmetics) && void 0 !== Bb ? Bb : {},
        nameColour: iG.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return ub ? {
        ...Ob,
        cosmetics: ub
      } : Ob
    }

    function NG(bb) {
      let {
        pending: ub
      } = bb;
      return (0, Hb.jsx)("span", {
        className: "StoreRecipientLoader",
        children: ub && (0, Hb.jsx)(db.c, {})
      })
    }

    function sG(bb) {
      var ub;
      let {
        selfName: hb,
        giftRecipient: Ob,
        suggestionsVersion: Yb,
        pulseSignal: ab,
        disabled: wb
      } = bb;
      const {
        t: Zb
      } = (0, Ub.K)(), Xb = (0, qb.i)(), pb = (0, Bb.useRef)(null), ob = (0, Bb.useRef)(null), {
        query: lb,
        via: Kb,
        recipient: Wb,
        recipientCosmetics: db
      } = Ob, rb = (0, KG.n)(lb), jb = (0, Bb.useMemo)((() => {
        const bb = Ab.featureFlags.useSocialFeatures ? Xb.friends.filter((bb => !bb.isError)) : [];
        return (0, KG.j)({
          onlineFriends: (0, qb.d)(bb),
          recentRecipients: dG(),
          friends: bb,
          selfName: hb,
          max: 8
        })
      }), [Xb.friends, hb, Yb]), nb = lb.trim().toLowerCase(), Db = "search" !== Kb && nb ? jb.find((bb => bb.name.toLowerCase() === nb)) : void 0, xb = Db && "prefilled" === Kb ? [Db, ...jb.filter((bb => bb !== Db))] : jb, zb = "" !== nb && !Db, gb = zb ? lb : "", ib = xb.length > 0;
      (0, Bb.useEffect)((() => {
        pb.current && pb.current.value !== gb && (pb.current.value = gb)
      }), [gb]), (0, Bb.useEffect)((() => {
        pb.current && (pb.current.disabled = wb)
      }), [wb, ab]);
      const vb = (0, Bb.useRef)(0);

      function Jb() {
        "self" !== rb && (0, Qb.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Ob.clear()
      }

      function eb(bb) {
        var ub, hb;
        if (wb) return;
        if (" " === bb.key || "Enter" === bb.key) return bb.preventDefault(), void bb.currentTarget.click();
        const Bb = Array.from(null !== (ub = null === (hb = ob.current) || void 0 === hb ? void 0 : hb.querySelectorAll("[role=radio]")) && void 0 !== ub ? ub : []),
          Ob = Bb.indexOf(bb.currentTarget);
        let Gb;
        "ArrowRight" === bb.key || "ArrowDown" === bb.key ? Gb = Bb[(Ob + 1) % Bb.length] : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? Gb = Bb[(Ob - 1 + Bb.length) % Bb.length] : "Home" === bb.key ? Gb = Bb[0] : "End" === bb.key && (Gb = Bb[Bb.length - 1]), Gb && (bb.preventDefault(), Gb.focus(), Gb.click())
      }(0, Bb.useEffect)((() => {
        var bb;
        ab > vb.current && !wb && (vb.current = ab, null === (bb = pb.current) || void 0 === bb || bb.focus())
      }), [ab, wb]);
      const Nb = "self" === rb,
        sb = null !== (ub = null === Db || void 0 === Db ? void 0 : Db.name) && void 0 !== ub ? ub : null,
        Mb = "error" === Wb.status ? Wb.error : null,
        mb = "store:giftRecipientLookupFailed" === Mb;
      return (0, Hb.jsxs)("div", {
        className: Gb()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: wb,
          StoreRecipientStripNoChips: !ib
        }),
        children: [(0, Hb.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Zb("store:buyingFor")
        }), (0, Hb.jsxs)("div", {
          ref: ob,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Zb("store:whoIsItFor"),
          children: [(0, Hb.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Nb,
            tabIndex: wb || !Nb && null !== sb ? -1 : 0,
            className: Gb()("StoreRecipientMe", {
              StoreRecipientChecked: Nb
            }),
            onClick: () => {
              wb || Jb()
            },
            onKeyDown: eb,
            children: [(0, Hb.jsx)(Lb.e, {
              name: "user"
            }), " ", Zb("store:me")]
          }), ib && (0, Hb.jsx)("div", {
            className: "StoreRecipientChips",
            children: xb.map((bb => {
              const ub = bb === Db;
              return (0, Hb.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": ub,
                tabIndex: !wb && ub ? 0 : -1,
                title: bb.name,
                className: Gb()("StoreRecipientChip", {
                  StoreRecipientChecked: ub
                }),
                onClick: () => {
                  wb || function(bb) {
                    "gift" !== rb && (0, Qb.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Ob.choose(bb.name, bb.kind)
                  }(bb)
                },
                onKeyDown: eb,
                children: (0, Hb.jsx)(tG.h, {
                  playerSocialPreview: eG(bb, ub ? db : null),
                  opensProfileCard: !1,
                  isFriend: null !== bb.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== bb.friend,
                  status: null === bb.friend ? null : void 0,
                  trailing: ub ? (0, Hb.jsx)(NG, {
                    pending: "pending" === Wb.status
                  }) : void 0
                })
              }, bb.name)
            }))
          })]
        }), (0, Hb.jsxs)("div", {
          className: Gb()("StoreRecipientSearch", {
            StoreRecipientChecked: zb,
            StoreRecipientSearchPulse: ab > 0 && !zb,
            StoreRecipientSearchError: null !== Mb && !mb
          }),
          onClick: () => {
            var bb;
            null === (bb = pb.current) || void 0 === bb || bb.focus()
          },
          children: [zb && "found" === Wb.status && db && (0, Hb.jsx)(JG, {
            cosmetics: db
          }), !(zb && "found" === Wb.status && db) && (0, Hb.jsx)(Lb.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Hb.jsx)(Cb.b, {
            className: "StoreRecipientSearchInput",
            domRef: pb,
            placeholderText: Zb("store:searchName"),
            defaultValue: gb,
            maxLength: tb.l,
            onValueChange: function(bb) {
              "gift" !== rb && bb.trim() && (0, Qb.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Ob.type(bb)
            },
            onEnter: () => {
              var bb;
              const ub = null === (bb = pb.current) || void 0 === bb ? void 0 : bb.value.trim();
              ub && Ob.choose(ub, "typed")
            },
            blurOnEnter: !0
          }), zb && (0, Hb.jsx)(NG, {
            pending: "pending" === Wb.status
          }), zb && (0, Hb.jsx)("div", {
            ...(0, Sb.V)({
              disabled: wb
            }),
            "aria-label": Zb("store:clearRecipient"),
            title: Zb("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: bb => {
              bb.stopPropagation(), wb || Jb()
            },
            children: (0, Hb.jsx)(Lb.e, {
              name: "xmark"
            })
          })]
        }, ab), Mb && (0, Hb.jsx)("div", {
          className: Gb()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: mb
          }),
          role: "status",
          children: Zb(Mb)
        })]
      })
    }
    var MG = hb(2197),
      mG = hb(2128),
      IG = hb(3371),
      PG = hb(2918),
      qG = hb(2161);
    const EG = hb.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function yG() {
      (0, qG.k)(EG, {
        lowPriority: !1
      })
    }

    function VG(bb) {
      let {
        onBack: ub,
        cta: hb,
        recipient: Ob,
        afterCta: Gb
      } = bb;
      const {
        t: Yb
      } = (0, Ub.K)(), [ab, wb] = (0, Bb.useState)("starting"), Zb = (0, Bb.useRef)(null), Xb = (0, iu.d)(), pb = (0, Bb.useRef)(null), ob = (0, Bb.useCallback)((() => {
        const bb = Zb.current;
        null !== bb.error && bb.load();
        const ub = bb.play();
        pb.current = ub, ub.catch((bb => {
          (0, IG.e)("Failed to play Super Rank video", bb), Xb.current && pb.current === ub && wb("failed")
        }))
      }), [Xb]);
      return (0, Bb.useEffect)((() => {
        const bb = Zb.current;
        let ub;

        function hb() {
          clearTimeout(ub), ub = setTimeout(ob, 3e3)
        }
        return ob(), bb.addEventListener("ended", hb), () => {
          clearTimeout(ub), bb.removeEventListener("ended", hb)
        }
      }), [ob]), (0, Hb.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Hb.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Hb.jsx)(Sb.d, {
            className: "StoreDetailBackButton",
            onClick: ub,
            padBack: !0,
            children: Yb("general:back")
          }), (0, Hb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Hb.jsx)(Lb.e, {
              name: "bolt"
            }), " ", Yb("homePage:superRank")]
          }), Ob]
        }), (0, Hb.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Hb.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Hb.jsx)("video", {
              ref: Zb,
              src: `${gb.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: EG,
              muted: !0,
              playsInline: !0,
              controls: "playing" === ab,
              onPlaying: () => {
                wb("playing")
              },
              onError: () => {
                wb("failed")
              }
            }), ("failed" === ab || "loading" === ab) && (0, Hb.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Hb.jsx)(Sb.e, {
                ariaLabel: Yb("general:play"),
                loading: "loading" === ab,
                onClick: () => {
                  wb("loading"), ob()
                },
                touchPressOn: "pointerup",
                children: (0, Hb.jsx)(Lb.e, {
                  name: "play"
                })
              })
            })]
          }), (0, Hb.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Hb.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Hb.jsx)(PG.b, {})
            }), (0, Hb.jsxs)("div", {
              className: "StoreTileActions",
              children: [hb, Gb]
            })]
          })]
        })]
      })
    }
    var FG = hb(2432),
      fG = hb(3326),
      kG = hb(2890),
      TG = hb(2899);
    const cG = [iG.m.yellow, iG.m.green, iG.m.aqua, iG.m.blue, iG.m.purple, iG.m.red];

    function QG(bb) {
      return "needsRecipient" === bb || "lookingUp" === bb || "gift" === bb || "recipientOwns" === bb || "recipientSharesOwned" === bb || "recipientSubscribed" === bb
    }

    function RG(bb) {
      const {
        onKeyDown: ub,
        ...hb
      } = (0, Sb.V)();
      return {
        ...hb,
        "aria-label": bb,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && (null === ub || void 0 === ub || ub(bb))
        }
      }
    }

    function bU(bb) {
      let {
        text: ub
      } = bb;
      return (0, Hb.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(ub).map(((bb, ub) => (0, Hb.jsx)("span", {
          style: {
            color: cG[ub % cG.length]
          },
          children: bb
        }, ub)))
      })
    }
    const uU = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function hU(bb) {
      let {
        state: ub,
        item: hb,
        price: Bb,
        busy: Ob,
        highlight: Yb = !1,
        onAct: ab,
        onNeedRecipient: wb,
        onLogin: Zb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), pb = "superRank" === hb ? eb.o.product.days : null, ob = bb => null === pb ? Xb(bb ? "general:gift" : "general:buy") : Xb(bb ? "store:giftDays" : "store:buyDays", {
        days: pb
      }), Ab = (bb, ub) => {
        const hb = (0, Hb.jsxs)(Hb.Fragment, {
          children: [null === bb && (0, Hb.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== bb && (0, Hb.jsx)("span", {
            className: "StoreCtaLabel",
            title: bb,
            children: bb
          })]
        });
        return null !== pb ? (0, Hb.jsxs)(Hb.Fragment, {
          children: [ub && (0, Hb.jsx)("span", {
            className: "StoreCtaIcon",
            children: ub
          }), hb, (0, Hb.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Hb.jsx)(mG.b, {
              amount: Bb
            })]
          })]
        }) : (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsxs)("span", {
            className: "StoreCtaLead",
            children: [hb, "\xb7"]
          }), (0, Hb.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [ub, (0, Hb.jsx)(mG.b, {
              amount: Bb
            })]
          })]
        })
      };
      let lb;
      switch (ub) {
        case "pending":
          lb = (0, Hb.jsx)(Sb.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Ab(null)
          });
          break;
        case "login":
          lb = (0, Hb.jsx)(Sb.m, {
            className: "StoreCtaButton",
            onClick: Zb,
            children: Ab(ob(!1))
          });
          break;
        case "owned":
          lb = (0, Hb.jsx)(Sb.g, {
            className: "StoreCtaButton",
            onClick: () => {
              jb.d.set({
                openEverythingMenuName: Su.u.CUSTOMISATION
              })
            },
            children: (0, Hb.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Hb.jsx)(Lb.e, {
                name: "shirt"
              }), " ", Xb("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          lb = (0, Hb.jsx)(Sb.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Hb.jsx)("span", {
              className: "StoreCtaLabel",
              children: Xb(uU[ub])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          lb = (0, Hb.jsx)(Sb.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === ub || null === Bb,
            loading: "lookingUp" === ub || Ob,
            onClick: ab,
            analyticsClick: {
              id: "store.gift",
              value: hb
            },
            children: Ab(ob(!0), KG.d)
          });
          break;
        case "buy":
        case "recharge":
          lb = (0, Hb.jsx)(Sb.m, {
            className: "StoreCtaButton",
            loading: Ob,
            disabled: null === Bb,
            onClick: ab,
            analyticsClick: {
              id: "store.buy",
              value: hb
            },
            children: Ab(ob(!1))
          })
      }
      return (0, Hb.jsx)("div", {
        className: Gb()("StoreCta", {
          StoreCtaHighlight: Yb,
          StoreCtaLabelFirst: null !== pb
        }),
        onClick: bb => {
          bb.stopPropagation(), "needsRecipient" === ub && wb()
        },
        children: lb
      })
    }

    function BU() {
      const {
        t: bb
      } = (0, Ub.K)();
      return (0, Hb.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Hb.jsxs)("li", {
          children: [(0, Hb.jsx)(Lb.e, {
            name: "check"
          }), (0, Hb.jsx)(bU, {
            text: bb("store:colourfulNames")
          })]
        }), (0, Hb.jsxs)("li", {
          children: [(0, Hb.jsx)(Lb.e, {
            name: "check"
          }), bb("store:perkCapes")]
        }), (0, Hb.jsxs)("li", {
          children: [(0, Hb.jsx)(Lb.e, {
            name: "check"
          }), bb("store:perkNoAdverts")]
        }), (0, Hb.jsxs)("li", {
          children: [(0, Hb.jsx)(Lb.e, {
            name: "check"
          }), bb("store:perkFriends", {
            count: (0, Tb.d)(["super"])
          })]
        })]
      })
    }

    function OU(bb) {
      let {
        daysLeft: ub,
        totalDays: hb,
        urgent: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)(), Lb = hb > 0 ? Math.min(1, Math.max(.03, ub / hb)) : 1;
      return (0, Hb.jsxs)("div", {
        className: Gb()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Bb
        }),
        children: [(0, Hb.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === ub ? Ob("store:oneDayLeft") : Ob("store:daysLeft", {
            days: ub
          })
        }), (0, Hb.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Hb.jsx)("i", {
            style: {
              width: 100 * Lb + "%"
            }
          })
        })]
      })
    }

    function GU(bb) {
      let {
        state: ub,
        urgent: hb,
        daysLeft: Bb,
        totalDays: Ob,
        recipientHasSuperRank: Yb,
        busy: Sb,
        highlight: ab,
        onOpen: wb,
        onAct: Zb,
        onNeedRecipient: Xb,
        onLogin: pb
      } = bb;
      const {
        t: ob
      } = (0, Ub.K)(), Ab = QG(ub), {
        days: lb
      } = eb.o.product, Kb = ob("store:recipientHasSuperRank", {
        giftDays: lb
      }), Wb = fb("subscribed" === ub);
      return (0, Hb.jsxs)("div", {
        className: Gb()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Ab,
          StoreSuperRankTileUrgent: "recharge" === ub && hb,
          StoreSuperRankTileWithChip: Yb,
          StoreSuperRankTileGiftReady: "gift" === ub
        }),
        ...RG(ob("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: yG,
        onFocus: yG,
        onClick: wb,
        children: [(0, Hb.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${gG.f})`
          }
        }), Ab && (0, Hb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Hb.jsxs)("div", {
          className: "StoreTileContent",
          children: [Yb && (0, Hb.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Kb,
            children: Kb
          }), (0, Hb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Hb.jsx)(Lb.e, {
              name: "bolt"
            }), " ", ob("homePage:superRank")]
          }), Ab && (0, Hb.jsx)("div", {
            className: "StoreTilePitch",
            children: ob("store:giftPitch", {
              days: lb
            })
          }), "recharge" === ub && (0, Hb.jsx)(OU, {
            daysLeft: Bb,
            totalDays: Ob,
            urgent: hb
          }), Wb && (0, Hb.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Hb.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Wb
            })
          }), (0, Hb.jsx)(BU, {}), (0, Hb.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Hb.jsx)(hU, {
              state: ub,
              item: "superRank",
              price: eb.o.price,
              busy: Sb,
              highlight: ab,
              onAct: Zb,
              onNeedRecipient: Xb,
              onLogin: pb
            }), "needsRecipient" === ub && (0, Hb.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: ob("store:pickRecipientFirst")
            }), "recharge" === ub && hb && (0, Hb.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Bb ? ob("store:endsInOneDay") : ob("store:endsInDays", {
                days: Bb
              })
            })]
          })]
        })]
      })
    }
    const UU = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function LU(bb) {
      var ub;
      let {
        pack: hb,
        state: Ob,
        busy: Yb,
        onOpen: Sb,
        onAct: ab,
        onNeedRecipient: wb,
        onLogin: Zb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), pb = aG.d[hb], ob = AG.n[hb], Ab = (0, gG.o)(hb), lb = (0, Bb.useRef)(null);
      (0, kG.h)(hb, lb);
      const Kb = QG(Ob),
        Wb = null !== (ub = pb.displayName) && void 0 !== ub ? ub : hb,
        Cb = (0, fG.d)((() => {
          (0, FG.f)();
          const bb = (0, kG.d)(hb);
          void 0 !== bb && (0, qG.k)((0, kG.b)(bb))
        })),
        [db] = (0, Bb.useState)(xG.g);
      return (0, Hb.jsxs)("div", {
        className: Gb()("StoreTile StorePackTile", UU[pb.tier], {
          StorePackTileOwned: "owned" === Ob,
          StorePackTileRecipientOwns: "recipientOwns" === Ob,
          StoreTileGift: Kb
        }),
        ...RG(Wb),
        ref: lb,
        "data-store-item": hb,
        onClick: Sb,
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || db || Cb.start()
        },
        onPointerLeave: Cb.cancel,
        children: [ob && (0, Hb.jsx)(ob, {}), (0, Hb.jsx)("div", {
          className: "StorePackCharacters",
          children: Ab.map((bb => (0, Hb.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,gG.i)(bb)})`
            }
          }, bb)))
        }), (0, Hb.jsx)("div", {
          className: "StoreTileScrim"
        }), Kb && (0, Hb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Hb.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Hb.jsx)("div", {
            className: "StoreTileTitle",
            children: Wb
          }), (0, Hb.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Hb.jsx)(TG.c, {
              tier: pb.tier
            }), " \xb7 ", Xb("store:itemCount", {
              count: (0, MG.g)(hb)
            }), "owned" === Ob && (0, Hb.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Hb.jsx)(Lb.e, {
                name: "check"
              }), " ", Xb("general:owned")]
            })]
          }), (0, Hb.jsx)(hU, {
            state: Ob,
            item: hb,
            price: (0, eb.g)(hb),
            busy: Yb,
            onAct: ab,
            onNeedRecipient: wb,
            onLogin: Zb
          })]
        })]
      })
    }
    var YU = hb(2864),
      SU = hb(1451),
      aU = hb(1361),
      HU = hb(3350);

    function wU() {
      return (0, Hb.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var ZU = hb(1247),
      XU = hb(1463),
      pU = hb(9122);

    function oU(bb) {
      let {
        character: ub,
        drawn: hb,
        onDrawn: Ob
      } = bb;
      const Ub = (0, Bb.useRef)(null),
        Lb = (0, pU.f)(ub);
      return (0, Hb.jsx)("div", {
        className: Gb()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: hb
        }),
        children: (0, Hb.jsx)(Bb.Suspense, {
          fallback: null,
          children: (0, Hb.jsx)(FG.c, {
            ref: Ub,
            framing: "store",
            turntableFromYaw: hb ? Lb.yaw : null,
            onReady: () => {
              var bb, hb;
              null === (bb = Ub.current) || void 0 === bb || bb.setOrbit(Lb), null === (hb = Ub.current) || void 0 === hb || hb.setAllCosmetics(XU.e[ub].cosmetics)
            },
            onDrawn: Ob
          })
        })
      })
    }
    const AU = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      lU = new Set(["wildSpirits"]);

    function KU(bb) {
      var ub;
      let {
        tile: hb,
        design: Ob,
        canGoLive: Yb,
        live: Sb,
        busy: ab,
        highlight: wb,
        onLiveStart: Zb,
        onLiveEnd: Xb,
        onOpen: pb,
        onAct: ob,
        onNeedRecipient: Ab,
        onLogin: lb
      } = bb;
      const {
        t: Kb
      } = (0, Ub.K)(), {
        pack: Wb,
        state: Cb
      } = hb, db = aG.d[Wb], rb = (0, aG.g)(Wb), jb = (0, gG.m)(Wb), nb = AG.n[jb], Db = lU.has(jb), {
        tier: xb
      } = db, zb = "legendary" === xb || "mythic" === xb, gb = (0, Bb.useRef)(null);
      (0, ZU.d)(gb, "epic" === xb || zb || Db);
      const [ib, tb] = (0, Bb.useState)(!1);
      return !Sb && ib && tb(!1), (0, Hb.jsxs)("div", {
        ref: gb,
        className: Gb()("StoreCharacterCard", `StoreCharacterCard${Ob}`, AU[xb], {
          StoreCharacterCardOwned: "owned" === Cb || "recipientOwns" === Cb,
          StoreCharacterCardGift: QG(Cb),
          StoreCharacterCardItem: void 0 === rb
        }),
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || !Yb || Sb || void 0 === rb || Zb()
        },
        onPointerLeave: Xb,
        children: [(0, Hb.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: nb && (0, Hb.jsx)(nb, {
            simple: !0
          })
        }), zb && (0, Hb.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Hb.jsxs)(vb.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, SU.h)({
            kind: "pack",
            pack: Wb
          }),
          "data-store-item": Wb,
          onClick: bb => {
            (0, aU.c)(bb) && (bb.preventDefault(), pb())
          },
          children: [(0, Hb.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Hb.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Hb.jsx)("div", {
              className: Gb()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: ib
              }),
              style: {
                backgroundImage: `url(${(0,gG.v)(Wb)})`
              }
            }), Sb && void 0 !== rb && (0, Hb.jsx)(oU, {
              character: rb,
              drawn: ib,
              onDrawn: () => {
                tb(!0)
              }
            })]
          }), (0, Hb.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ub = db.displayName) && void 0 !== ub ? ub : Wb
          }), (0, Hb.jsx)(TG.c, {
            tier: xb,
            className: "StoreCharacterTier"
          })]
        }), (0, Hb.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Db && (0, Hb.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Hb.jsx)(wU, {})
        }), "owned" === Cb && (0, Hb.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Kb("general:owned"),
          "aria-label": Kb("general:owned"),
          children: (0, Hb.jsx)(Lb.e, {
            name: "check"
          })
        }), (0, Hb.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Hb.jsx)(hU, {
            state: Cb,
            item: Wb,
            price: (0, eb.g)(Wb),
            busy: ab,
            highlight: wb,
            onAct: ob,
            onNeedRecipient: Ab,
            onLogin: lb
          })
        })]
      })
    }

    function WU(bb) {
      let {
        tiles: ub,
        busy: hb,
        highlightItem: Ob,
        onOpen: Gb,
        onAct: Ub,
        onNeedRecipient: Lb,
        onLogin: Yb
      } = bb;
      const Sb = (0, HU.i)("storeCharacterCardFoil"),
        ab = (0, HU.i)("storeCharacterCardSpotlight"),
        wb = Sb ? "Foil" : ab ? "Spotlight" : "Showcase",
        [Zb] = (0, Bb.useState)(xG.g),
        [Xb, pb] = (0, Bb.useState)(null);
      return (0, Hb.jsx)("div", {
        className: "StoreCharacterGrid",
        children: ub.map((bb => (0, Hb.jsx)(KU, {
          tile: bb,
          design: wb,
          canGoLive: !Zb,
          live: Xb === bb.pack,
          busy: hb,
          highlight: Ob === bb.pack,
          onLiveStart: () => {
            pb(bb.pack)
          },
          onLiveEnd: () => {
            pb((ub => ub === bb.pack ? null : ub))
          },
          onOpen: () => {
            Gb(bb.pack)
          },
          onAct: () => {
            Ub(bb.pack)
          },
          onNeedRecipient: Lb,
          onLogin: () => {
            Yb(bb.pack)
          }
        }, bb.pack)))
      })
    }
    var CU = hb(9131);

    function dU(bb) {
      let {
        title: ub
      } = bb;
      return (0, Hb.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Hb.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: ub
        })
      })
    }

    function rU(bb) {
      let {
        mountAtOnce: ub,
        children: hb
      } = bb;
      const Ob = (0, Bb.useRef)(null),
        [Gb, Ub] = (0, Bb.useState)(ub),
        Lb = (0, CU.b)();
      return (0, Bb.useLayoutEffect)((() => {
        const bb = Ob.current;
        bb && bb.getBoundingClientRect().top < bb.parentElement.getBoundingClientRect().bottom && Ub(!0)
      }), []), Gb || Lb ? (0, Hb.jsx)(Hb.Fragment, {
        children: hb
      }) : (0, Hb.jsx)("div", {
        ref: Ob
      })
    }

    function jU(bb) {
      let {
        layout: ub,
        mountAtOnce: hb,
        bundleGift: Bb,
        superRankTotalDays: Ob,
        busy: Gb,
        highlightItem: Lb,
        onOpen: Yb,
        onAct: Sb,
        onNeedRecipient: ab,
        onLogin: wb
      } = bb;
      const {
        t: Zb
      } = (0, Ub.K)(), Xb = ub.packs.filter((bb => void 0 === (0, aG.g)(bb.pack) && !(0, aG.k)(bb.pack))), pb = ub.packs.filter((bb => void 0 !== (0, aG.g)(bb.pack))), ob = ub.packs.filter((bb => (0, aG.k)(bb.pack)));
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [(0, Hb.jsx)(YU.c, {
          className: "StoreSuperGems",
          gift: Bb,
          highlightSku: Lb
        }), (0, Hb.jsx)(dU, {
          title: Zb("store:rank")
        }), (0, Hb.jsx)(GU, {
          state: ub.superRank.state,
          urgent: ub.superRank.urgent,
          daysLeft: ub.superRankDaysLeft,
          totalDays: Ob,
          recipientHasSuperRank: ub.recipientHasSuperRank,
          busy: Gb,
          highlight: "superRank" === Lb,
          onOpen: () => {
            Yb("superRank")
          },
          onAct: () => {
            Sb("superRank")
          },
          onNeedRecipient: ab,
          onLogin: () => {
            wb("superRank")
          }
        }), (0, Hb.jsxs)(rU, {
          mountAtOnce: hb,
          children: [(0, Hb.jsx)(dU, {
            title: Zb("store:bundles")
          }), (0, Hb.jsx)("div", {
            className: "StorePackGrid",
            children: Xb.map((bb => (0, Hb.jsx)(LU, {
              pack: bb.pack,
              state: bb.state,
              busy: Gb,
              onOpen: () => {
                Yb(bb.pack)
              },
              onAct: () => {
                Sb(bb.pack)
              },
              onNeedRecipient: ab,
              onLogin: () => {
                wb(bb.pack)
              }
            }, bb.pack)))
          }), (0, Hb.jsxs)(rU, {
            mountAtOnce: hb,
            children: [(0, Hb.jsx)(dU, {
              title: Zb("store:characters")
            }), (0, Hb.jsx)(WU, {
              tiles: pb,
              busy: Gb,
              highlightItem: Lb,
              onOpen: Yb,
              onAct: Sb,
              onNeedRecipient: ab,
              onLogin: wb
            }), ob.length > 0 && (0, Hb.jsxs)(Hb.Fragment, {
              children: [(0, Hb.jsx)(dU, {
                title: Zb("store:premiumItems")
              }), (0, Hb.jsx)(WU, {
                tiles: ob,
                busy: Gb,
                highlightItem: Lb,
                onOpen: Yb,
                onAct: Sb,
                onNeedRecipient: ab,
                onLogin: wb
              })]
            })]
          })]
        })]
      })
    }

    function nU(bb) {
      let {
        state: ub,
        mode: hb,
        giftName: Bb,
        busy: Ob,
        highlight: Gb,
        purchaseError: Lb,
        onBack: Yb,
        onChooseRecipient: ab,
        onAct: wb,
        onLogin: Zb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.K)(), pb = fb("gift" !== hb);
      return (0, Hb.jsx)(VG, {
        onBack: Yb,
        recipient: "gift" === hb && (0, Hb.jsxs)(Hb.Fragment, {
          children: [Bb && (0, Hb.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Xb("store:giftFor", {
              name: Bb
            }),
            children: [KG.d, " ", Xb("store:giftFor", {
              name: Bb
            })]
          }), !Bb && (0, Hb.jsxs)("div", {
            ...(0, Sb.V)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: ab,
            children: [KG.d, " ", Xb("store:chooseRecipient")]
          })]
        }),
        cta: (0, Hb.jsx)(hU, {
          state: ub,
          item: "superRank",
          price: eb.o.price,
          busy: Ob,
          highlight: Gb,
          onAct: wb,
          onNeedRecipient: ab,
          onLogin: Zb
        }),
        afterCta: (0, Hb.jsxs)(Hb.Fragment, {
          children: [pb && (0, Hb.jsx)("span", {
            className: "StoreTileNote",
            children: pb
          }), Lb && (0, Hb.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Xb(Lb)
          })]
        })
      })
    }
    var DU = hb(127);
    const xU = DU.m("kind", [DU.C({
      kind: DU.u("refused"),
      heldTierId: DU.W(),
      until: DU.y()
    }), DU.C({
      kind: DU.u("refund"),
      tierId: DU.W(),
      refundedMs: DU.y(),
      forfeitedMs: DU.y(),
      premiumCurrency: DU.y()
    }), DU.C({
      kind: DU.u("none")
    })]);
    async function zU(bb) {
      const ub = await (0, zb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: bb
      }, {
        retries: 1
      });
      return xU.parse(ub)
    }
    var gU = hb(2834),
      iU = hb(2866);

    function vU(bb, ub) {
      const hb = Math.max(1, Math.round(ub / Mb.g));
      return [1 === hb ? `${bb}OneDay` : bb, {
        days: hb.toLocaleString()
      }]
    }

    function tU() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Ib.purchasesAllowed)() ? (0, Hb.jsx)(JU, {}) : null
    }

    function JU() {
      const {
        t: bb
      } = (0, Ub.K)(), {
        userContext: ub
      } = (0, Xb.d)(), {
        purchaseUnderWay: hb,
        notice: Ob,
        subscribe: Gb
      } = (0, gU.c)(), [Lb, Yb] = (0, Bb.useState)(null), [ab, wb] = (0, Bb.useState)(0), [Zb, pb] = (0, Bb.useState)(!1), ob = (0, Bb.useRef)(!0), Ab = ub !== zb.NULL_USER_CONTEXT, lb = null !== Lb && Lb.loadedFor === ub ? Lb.offer : null, Kb = null === Ob || void 0 === Ob ? void 0 : Ob.pendingIntentId, Wb = (0, Bb.useRef)(Kb);

      function Cb() {
        wb((bb => bb + 1))
      }
      async function db(bb) {
        pb(!1), await Gb(bb), ob.current && Cb()
      }
      if ((0, Bb.useEffect)((() => (ob.current = !0, () => {
          ob.current = !1
        })), []), (0, Bb.useEffect)((() => {
          void 0 !== Wb.current && void 0 === Kb && Cb(), Wb.current = Kb
        }), [Kb]), (0, Bb.useEffect)((() => {
          if (!Ab) return;
          let bb = !1;
          return pb(!1), async function() {
            const {
              offering: bb
            } = await (0, Lu.g)().getOfferings("superRankPage"), ub = null === bb || void 0 === bb ? void 0 : bb.packages.find((bb => null !== bb.price));
            return void 0 === ub ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: ub,
              preview: await zU(ub.productId)
            }
          }().catch((bb => (console.error("Billing: loading the Super Rank subscription or its preview failed:", bb), {
            kind: "loadFailed"
          }))).then((hb => {
            bb || Yb((bb => "loadFailed" === hb.kind && (null === bb || void 0 === bb ? void 0 : bb.loadedFor) === ub ? bb : {
              loadedFor: ub,
              offer: hb
            }))
          })), () => {
            bb = !0
          }
        }), [ub, Ab, ab]), null === lb) return null;
      if ("loaded" !== lb.kind) return (0, Hb.jsx)(iU.k, {
        notice: {
          kind: "error",
          key: "unavailable" === lb.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: rb,
        preview: jb
      } = lb;
      if ("refused" === jb.kind) return (0, Hb.jsx)(iU.k, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(jb.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const nb = (0, YU.f)(rb.price);
      if (Zb && "refund" === jb.kind) {
        const {
          refundedMs: ub,
          forfeitedMs: Bb,
          premiumCurrency: Ob
        } = jb, Gb = Bb + (0 === Ob ? ub : 0), [Ub, Lb] = vU("payments:subscribeRefundsGemRank", ub), [Yb, ab] = vU("payments:subscribeForfeitsGemRank", Gb);
        return (0, Hb.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Hb.jsx)("div", {
            children: bb("payments:subscribeEndsGemRank")
          }), Ob > 0 && (0, Hb.jsx)("div", {
            children: bb(Ub, {
              ...Lb,
              amount: Ob.toLocaleString()
            })
          }), Gb > 0 && (0, Hb.jsx)("div", {
            children: bb(Yb, ab)
          }), (0, Hb.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Hb.jsx)(Sb.g, {
              onClick: () => {
                pb(!1)
              },
              children: bb("general:cancel")
            }), (0, Hb.jsx)(Sb.m, {
              onClick: () => {
                db(rb)
              },
              loading: hb,
              children: bb("payments:subscribeContinue", {
                price: nb
              })
            })]
          })]
        })
      }
      return (0, Hb.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Hb.jsx)(iU.k, {
          notice: Ob,
          className: "SmallTextBold"
        }), (0, Hb.jsx)(iU.d, {
          className: "SmallTextBold"
        }), (0, Hb.jsx)(Sb.m, {
          onClick: () => {
            "refund" === jb.kind ? pb(!0) : db(rb)
          },
          disabled: void 0 !== Kb,
          loading: hb,
          children: bb("payments:subscribeToSuperRank", {
            price: nb
          })
        })]
      })
    }
    const eU = {
      kind: "board"
    };
    let NU = !1;

    function sU(bb) {
      return "found" === bb.status || "error" === bb.status && "store:giftRecipientLookupFailed" === bb.error ? bb.name : null
    }(0, mb.u)(HG.prefetchBillingOfferings);
    const MU = (0, Bb.memo)((function(bb) {
      var ub;
      let {
        show: Ob
      } = bb;
      const {
        t: Lb
      } = (0, Ub.K)(), {
        userContext: Yb
      } = (0, Xb.d)(), Sb = Yb !== zb.NULL_USER_CONTEXT, ab = rG(Yb), [wb, Zb] = (0, ob.e)(), {
        page: pb,
        urlMode: Ab,
        goTo: lb
      } = (0, jG.i)(), Kb = function(bb) {
        return "superRank" === bb.kind ? "superRank" : "pack" === bb.kind ? bb.pack : null
      }(pb), {
        openEverythingMenuName: Wb,
        gameState: Cb
      } = (0, jb.j)(["openEverythingMenuName", "gameState"]), db = null !== Wb;
      ! function(bb, ub) {
        const [Ob] = (0, Bb.useState)(xG.g), [Gb, Ub] = (0, Bb.useState)(!1);
        Ob && ub && !Gb && Ub(!0);
        const Lb = (0, GB.r)(),
          Yb = Ob && Gb && bb && !Lb;
        (0, Bb.useEffect)((() => {
          if (!Yb) return;
          let bb = null,
            ub = null,
            Bb = null;
          const Ob = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Lu.g)().purchaseUnderWay,
            Gb = () => {
              var hb;
              null === (hb = Bb) || void 0 === hb || hb(), Bb = null, null !== bb && (clearTimeout(bb), bb = null), null !== ub && (clearTimeout(ub), ub = null)
            },
            Ub = () => {
              (0, nG.p)(!1), (0, nG.o)(!1), Gb(), bb = setTimeout((() => {
                bb = null, Bb = (0, DG.e)((() => {
                  Bb = null, Ob() ? Ub() : ((0, nG.p)(!0), ub = setTimeout((() => {
                    ub = null, Bb = (0, DG.e)((() => {
                      Bb = null, Ob() ? Ub() : (0, nG.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => hb(4420))).then((bb => {
                    bb.startBackgroundGameSetup()
                  }), (bb => {
                    console.warn("Background game setup: its chunk failed to load", bb)
                  })))
                }))
              }), 2e3)
            };
          for (const hb of zG) window.addEventListener(hb, Ub, {
            capture: !0,
            passive: !0
          });
          return Ub(), () => {
            for (const bb of zG) window.removeEventListener(bb, Ub, {
              capture: !0
            });
            Gb(), (0, nG.p)(!1), (0, nG.o)(!1)
          }
        }), [Yb])
      }(Ob && db, "pack" === pb.kind);
      const rb = "landingPage" === Cb;
      (0, Bb.useEffect)((() => {
        db && (0, HG.prefetchBillingOfferings)()
      }), [db]), (0, Bb.useEffect)((() => {
        db && !Ob && rb && (0, gG.y)()
      }), [db, Ob, rb]);
      const [nb, Db] = (0, Bb.useState)(0), [xb, gb] = (0, Bb.useState)(null), [ib, vb] = (0, Bb.useState)(null), [tb, Jb] = (0, Bb.useState)(null), [Nb, sb] = (0, Bb.useState)(null), Mb = (0, Bb.useRef)(null), Pb = (0, Bb.useRef)(null), qb = (0, Bb.useRef)(null), Eb = (0, Bb.useRef)(!1), yb = (0, mb.B)(), Vb = (0, Bb.useRef)(0), Fb = (0, Bb.useRef)(!1);

      function fb() {
        Db((bb => bb + 1))
      }(0, Bb.useEffect)((() => {
        if (Ob) {
          if (NU = !0, (0, mb.m)(), yb && yb.seq !== Vb.current) {
            var bb;
            Vb.current = yb.seq, "loginResume" !== yb.source && (0, mb.A)();
            const ub = (0, mb.d)(yb);
            Ab || lb(ub), sb(null !== (bb = yb.highlight) && void 0 !== bb ? bb : null), vb(null), "gift" === yb.mode && yb.giftRecipientName ? ab.choose(yb.giftRecipientName, "prefilled") : "current" !== yb.mode && ab.clear(), "gift" !== yb.mode || yb.giftRecipientName || fb(), (0, Qb.reportAnalyticsClick)({
              id: "store.open",
              value: yb.source
            })
          } else Fb.current || (0, Qb.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Fb.current = !0
        } else Fb.current = !1
      }), [Ob, yb]), (0, Bb.useEffect)((() => {
        if (!Nb) return;
        const bb = setTimeout((() => {
          sb(null)
        }), 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Nb]), (0, Bb.useLayoutEffect)((() => {
        const bb = Mb.current;
        if (!Ob || !bb) return Pb.current = null, void(qb.current = null);
        var ub;
        if (Kb) Pb.current = Kb, null === (ub = bb.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ub || ub.focus();
        else if (Pb.current) {
          const ub = qb.current;
          null !== ub && (bb.scrollTop = ub);
          const hb = bb.querySelector(`[data-store-item="${Pb.current}"]`);
          if (hb) {
            const Bb = hb.getBoundingClientRect(),
              Ob = bb.getBoundingClientRect();
            hb.focus({
              preventScroll: null !== ub && Bb.bottom > Ob.top && Bb.top < Ob.bottom
            })
          }
          Pb.current = null
        }
      }), [Kb, Ob]), (0, Bb.useEffect)((() => {
        vb(null)
      }), [ab.query]), (0, Bb.useEffect)((() => {
        if (!tb) return;
        const bb = setTimeout((() => {
          Jb(null)
        }), 8e3);
        return () => {
          clearTimeout(bb)
        }
      }), [tb]);
      const kb = Yb.superRankInfo,
        Tb = Yb.isLoggedIn() || (0, Ib.guestsMayBuy)(),
        cb = Yb.getOwnedCosmeticPacks(),
        Rb = (0, KG.n)(ab.query),
        bu = (0, KG.g)({
          mode: Rb,
          loggedIn: Sb ? Tb : null,
          superRankInfo: kb,
          now: Date.now(),
          ownedPacks: cb,
          packs: aG.v,
          recipient: ab.recipient
        });
      (0, Bb.useEffect)((() => {
        if (!Tb || !Ob) return;
        const bb = (0, mb.A)(),
          ub = bb && (0, KG.l)(bb, aG.v);
        bb && ub && ((0, Qb.reportAnalyticsClick)({
          id: "store.login_resume",
          value: bb.item
        }), (0, mb.o)(ub))
      }), [Tb, Ob]);
      const uu = (0, KG.p)({
        superRankDaysLeft: bu.superRankDaysLeft,
        openedThisSession: NU || Ob,
        seenNewItems: (0, mb.k)()
      });
      if ((0, Bb.useEffect)((() => {
          (0, mb.y)(uu)
        }), [uu]), !Ob || !(0, Ib.purchasesAllowed)()) return null;
      const hu = Zb > wb && wb <= 700,
        Bu = !hu && Zb <= 420,
        Ou = "gift" === Rb ? sU(ab.recipient) : null,
        Gu = null !== xb;

      function Uu(bb) {
        (0, ZG.b)(bb, "gift" === Rb ? ab.query.trim() : null)
      }

      function Yu(bb, ub) {
        (0, Qb.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${ub?"gift":"self"}:${bb}`
        }), ub && (ab.recordGift(ub.name, bb), Su(ub))
      }

      function Su(bb) {
        ! function(bb) {
          try {
            Vu.j.setItem(WG, (0, KG.w)(dG(), bb))
          } catch {}
        }({
          name: bb.name,
          cosmetics: bb.cosmetics
        }), lb(eU), Jb((ub => {
          var hb;
          return {
            name: bb.name,
            seq: (null !== (hb = null === ub || void 0 === ub ? void 0 : ub.seq) && void 0 !== hb ? hb : 0) + 1
          }
        }))
      }
      async function au(bb) {
        var ub, hb;
        if (Eb.current) return;
        if (!Tb) return void Uu(bb);
        vb(null), sb(null);
        const Bb = "gift" === Rb ? {
          name: sU(ab.recipient),
          cosmetics: ab.recipientCosmetics
        } : null;
        if (Bb && !Bb.name) return void fb();
        const Ob = "superRank" === bb ? eb.o.id : (0, eb.d)(bb);
        Eb.current = !0;
        const Gb = await (0, lG.d)(Ob, null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.name) && void 0 !== ub ? ub : null);
        if (Eb.current = !1, !Gb) return;
        gb(bb);
        const Ub = await XG.d.purchase(Ob, null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.name) && void 0 !== hb ? hb : null);
        gb(null), Ub ? vb(Ub) : (Yu(bb, Bb), Bb || (await (0, pG.flushClientAnalyticsEvents)(), (0, wG.refreshWithoutConfirmation)("superRank" === bb ? "/super-rank-welcome" : `/pack-welcome/${bb}`)))
      }
      const Hu = Gb()("Store", {
        StoreGift: "gift" === Rb,
        StorePortrait: hu,
        StoreCompact: Bu
      });
      if ("pack" === pb.kind) {
        const bb = pb.pack,
          ub = bu.packs.find((ub => ub.pack === bb));
        return (0, Hb.jsx)("div", {
          ref: Mb,
          className: "CosmeticShopContainer",
          children: (0, Hb.jsx)(AG.h, {
            pack: bb,
            onBack: () => {
              lb(eU)
            },
            onPurchased: ub => {
              Yu(bb, ub ? {
                name: ub,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Rb && Ou && ub && (0, Hb.jsxs)(Hb.Fragment, {
              children: [(0, Hb.jsx)(hU, {
                state: ub.state,
                item: bb,
                price: (wu = bb, "superRank" === wu ? eb.o.price : (0, eb.g)(wu)),
                busy: Gu,
                onAct: () => {
                  au(bb)
                },
                onNeedRecipient: () => {
                  lb(eU), fb()
                },
                onLogin: () => {
                  Uu(bb)
                },
                highlight: Nb === bb
              }), ib && (0, Hb.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Lb(ib)
              })]
            }),
            ownedPacks: cb,
            startAsGift: "gift" === Rb,
            initialGiftRecipient: "gift" === Rb ? null !== Ou && void 0 !== Ou ? Ou : ab.query.trim() : "",
            highlightCta: Nb === bb
          }, bb)
        })
      }
      var wu;
      return "superRank" === pb.kind ? (0, Hb.jsx)("div", {
        ref: Mb,
        className: Gb()(Hu, "StoreDetailView"),
        children: (0, Hb.jsx)(nU, {
          state: bu.superRank.state,
          mode: Rb,
          giftName: Ou,
          busy: Gu,
          highlight: "superRank" === Nb,
          purchaseError: ib,
          onBack: () => {
            lb(eU)
          },
          onChooseRecipient: () => {
            lb(eU), fb()
          },
          onAct: () => {
            au("superRank")
          },
          onLogin: () => {
            Uu("superRank")
          }
        })
      }) : (0, Hb.jsxs)("div", {
        ref: Mb,
        className: Hu,
        onScroll: bb => {
          qb.current = bb.currentTarget.scrollTop
        },
        children: [(0, Hb.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Hb.jsx)(sG, {
            selfName: Sb ? Yb.getPlayerName() : "",
            giftRecipient: ab,
            suggestionsVersion: null !== (ub = null === tb || void 0 === tb ? void 0 : tb.seq) && void 0 !== ub ? ub : 0,
            pulseSignal: nb,
            disabled: Gu || !Sb
          })
        }), tb && (0, Hb.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Jb(null)
          },
          children: [(0, Hb.jsx)(oG.b, {
            showSignal: tb.seq
          }), KG.d, " ", Lb("store:giftSent", {
            name: tb.name
          })]
        }, tb.seq), !tb && ib && (0, Hb.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Lb(ib)
        }), (0, Hb.jsx)(jU, {
          layout: bu,
          mountAtOnce: null !== Pb.current,
          bundleGift: "gift" === Rb ? {
            recipientName: Ou,
            lookingUp: "pending" === ab.recipient.status,
            busy: Gu,
            onNeedRecipient: fb,
            onSent: bb => {
              (0, Qb.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Su({
                name: bb,
                cosmetics: ab.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, KG.s)(kb),
          busy: Gu,
          highlightItem: Nb,
          onOpen: function(bb) {
            (0, Qb.reportAnalyticsClick)({
              id: "store.item_open",
              value: bb
            }), lb((0, mb.h)(bb))
          },
          onAct: au,
          onNeedRecipient: fb,
          onLogin: Uu
        }), "gift" !== Rb && (0, Hb.jsx)(tU, {})]
      })
    }));
    var mU = hb(2505),
      IU = hb(8575),
      PU = hb(8386),
      qU = hb(2542),
      EU = hb(2412),
      yU = hb(2454),
      VU = hb(2468),
      FU = hb(2472),
      fU = hb(2536),
      kU = hb(2523),
      TU = hb(2221),
      cU = hb(2257),
      QU = hb(2242),
      RU = hb(1917),
      bL = hb(2481),
      uL = hb(2265);

    function hL(bb) {
      let {
        show: ub
      } = bb;
      return ub ? (0, Hb.jsx)(BL, {}) : null
    }

    function BL() {
      const {
        t: bb
      } = (0, Ub.K)(), {
        followsLeader: ub
      } = (0, EU.d)(), {
        loading: hb,
        friends: Ob,
        requests: Yb,
        invites: ab
      } = (0, qb.i)(), {
        userContext: wb
      } = (0, Xb.d)(), [Zb, pb] = (0, Bb.useState)(uL.k);
      (0, Bb.useEffect)((() => {
        (0, uL.b)()
      }), []);
      const ob = Yb.map((bb => bb.name)),
        {
          state: Ab,
          recentRequesters: lb
        } = (0, kU.t)(),
        Kb = new Map([...("loaded" === Ab.status ? Ab.recentPlayers : []).map((bb => [bb.preview.name, bb])), ...lb.map((bb => [bb.name, bb]))]),
        Wb = (0, Bb.useRef)(null),
        [rb, jb] = (0, Bb.useState)(""),
        [nb, Db] = (0, Bb.useState)("Enter"),
        [xb, zb] = (0, Bb.useState)(null);

      function gb() {
        rb && (Db("Loading"), (0, QU.j)(rb, "social_menu").then((bb => {
          if (Wb.current) switch (bb.kind) {
            case "sent":
              Db("Success");
              break;
            case "becameFriends":
              Db("BecameFriends");
              break;
            case "failed":
              zb(bb.message), Db("Error")
          }
        })))
      }
      return (0, Bb.useEffect)((() => {
        if ("Enter" === nb || "Loading" === nb) return;
        const bb = setTimeout((() => {
          Wb.current.value = "", jb(""), Db("Enter")
        }), "Success" === nb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [nb]), (0, Hb.jsx)("div", {
        className: "SocialMenu",
        children: (0, Hb.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Hb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Hb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Hb.jsx)(FU.d, {
                label: bb("socialBar:addFriend")
              }), (0, Hb.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Hb.jsxs)("div", {
                  className: Gb()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${nb}`]: !0
                  }),
                  children: ["Loading" === nb && (0, Hb.jsx)(db.c, {}), "Success" === nb && (0, Hb.jsx)(Lb.e, {
                    name: "check"
                  }), "BecameFriends" === nb && (0, Hb.jsx)(Hb.Fragment, {
                    children: bb("socialBar:nowFriends", {
                      playerName: rb
                    })
                  }), "Error" === nb && xb && (0, Hb.jsx)(Hb.Fragment, {
                    children: bb(xb.translationKey, xb.params)
                  })]
                }), (0, Hb.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Hb.jsx)(Cb.b, {
                    className: "PlayerSearchInput",
                    placeholderText: bb("socialBar:enterPlayerName"),
                    domRef: Wb,
                    onValueChange: bb => {
                      jb((0, tb.r)(bb)), Wb.current.value = (0, tb.r)(bb)
                    },
                    onEnter: () => {
                      rb && (0, Qb.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), gb()
                    }
                  }), (0, Hb.jsxs)(Sb.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      gb()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Hb.jsx)(Lb.e, {
                      name: "user-plus"
                    }), " ", bb("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Hb.jsx)(bL.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), ab.length > 0 && (0, Hb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Hb.jsx)(FU.d, {
                label: bb("socialBar:invites"),
                meta: ab.length
              }), ab.map((ub => (0, Hb.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Hb.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Hb.jsx)(TU.e, {
                    invite: ub
                  })
                }), (0, Hb.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Hb.jsx)(TU.h, {
                    invite: ub
                  })
                }), (0, Hb.jsx)(Sb.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, cU.e)(ub)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${ub.destination.kind}`
                  },
                  children: bb("general:join")
                }), (0, Hb.jsx)(kb.d, {
                  tooltipInner: (0, Hb.jsx)(Hb.Fragment, {
                    children: bb("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Hb.jsx)(Sb.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && Zb.inviteId === ub.id,
                    onClick: () => {
                      qb.b.declineInvite(ub.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${ub.destination.kind}`
                    },
                    children: (0, Hb.jsx)(Lb.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, ub.id)))]
            }), (0, Hb.jsxs)("div", {
              className: Gb()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !hb && 0 === Yb.length
              }),
              children: [(0, Hb.jsx)(FU.d, {
                label: (0, Hb.jsxs)(Hb.Fragment, {
                  children: [(0, Hb.jsx)(Lb.e, {
                    name: RU.f
                  }), " ", bb("socialBar:requests")]
                }),
                meta: (0, Hb.jsxs)(Hb.Fragment, {
                  children: [Yb.length, Yb.length === Tb.r && (0, Hb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), hb && (0, Hb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Hb.jsx)(db.c, {})
              }), !hb && 0 === Yb.length && (0, Hb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriendRequests")
              }), !hb && Yb.length > 0 && (0, Hb.jsx)("div", {
                className: "PlayerRows",
                children: (0, Hb.jsx)(XO.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Yb],
                  children: Yb.map(((ub, hb) => {
                    const Bb = Kb.get(ub.name);
                    return (0, Hb.jsxs)(VU.f, {
                      playerSocialPreview: ub,
                      zIndex: Yb.length - hb,
                      padDefaultFocus: (0, uL.i)(Zb, ub.name, hb),
                      status: Bb && (0, Hb.jsx)(fU.d, {
                        gameNameWithVariation: Bb.gameNameWithVariation,
                        isPrivateLobby: Bb.isPrivateLobby
                      }),
                      children: [(0, Hb.jsx)(kb.d, {
                        tooltipInner: (0, Hb.jsx)(Hb.Fragment, {
                          children: bb("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Hb.jsx)(Sb.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            pb((0, uL.e)(ob, hb)), (0, QU.g)(ub.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Hb.jsx)(Lb.e, {
                            name: "check"
                          })
                        })
                      }), (0, Hb.jsx)(kb.d, {
                        tooltipInner: (0, Hb.jsx)(Hb.Fragment, {
                          children: bb("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Hb.jsx)(Sb.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            pb((0, uL.e)(ob, hb)), (0, QU.g)(ub.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Hb.jsx)(Lb.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${ub.name}_${ub.isError}`)
                  }))
                })
              })]
            }), (0, Hb.jsx)(fU.i, {})]
          }), (0, Hb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Hb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Hb.jsx)(FU.d, {
                label: bb("socialBar:party")
              }), (0, Hb.jsx)(yU.c, {})]
            }), (0, Hb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Hb.jsx)(FU.d, {
                label: (0, Hb.jsxs)(Hb.Fragment, {
                  children: [(0, Hb.jsx)(Lb.e, {
                    name: RU.c
                  }), " ", bb("socialBar:friends")]
                }),
                meta: (0, Hb.jsxs)(Hb.Fragment, {
                  children: [Ob.length, Ob.length >= (0, Tb.d)(wb.getPlayerRanks()) && (0, Hb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), hb && (0, Hb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Hb.jsx)(db.c, {})
              }), !hb && 0 === Ob.length && (0, Hb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriends")
              }), !hb && Ob.length > 0 && (0, Hb.jsx)("div", {
                className: "PlayerRows",
                children: (0, Hb.jsx)(XO.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Ob],
                  children: Ob.map(((bb, hb) => (0, Hb.jsx)(VU.f, {
                    playerSocialPreview: bb,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: bb => {
                      qb.b.removeFriendFromState(bb)
                    },
                    zIndex: Ob.length - hb,
                    children: (0, Hb.jsx)(VU.d, {
                      friend: bb,
                      followsLeader: ub,
                      analyticsSurface: "social_menu"
                    })
                  }, `${bb.name}_${bb.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var OL = hb(2398);
    const GL = bb => {
        let {
          action: ub,
          padAction: hb
        } = bb;
        const {
          isTouchScreen: Bb
        } = (0, jb.j)(["isTouchScreen"]), Ob = (0, GB.r)();
        return Bb && !Ob ? null : (0, Hb.jsx)(Qh.e, {
          className: "EverythingMenuTabKey",
          noaAction: ub,
          padHidesKey: !0,
          padMenuShortcut: hb
        })
      },
      UL = (0, Bb.memo)((function() {
        const {
          t: bb
        } = (0, Ub.K)(), {
          gameState: ub,
          openEverythingMenuName: hb,
          initSdkSelectorFinished: Ob,
          crosshairGameView: Lb
        } = (0, jb.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Yb
        } = (0, Xb.d)(), ab = (0, Ib.purchasesAllowed)(), wb = (0, mb.D)(), Zb = (bb, ub) => (0, Hb.jsx)(GL, {
          action: bb,
          padAction: ub
        }), [pb, ob] = (0, Bb.useState)(null), lb = (0, Bb.useRef)(null), Kb = {
          ..."inGame" === ub ? {} : (0, Sb.V)({
            focusOnClick: !1
          }),
          ...pB.c
        }, Wb = bb => {
          const ub = (0, oB.d)((ub => {
            (0, Sb.T)(ub.currentTarget), jb.d.set({
              openEverythingMenuName: bb
            })
          }), "pointerup");
          return {
            ...Kb,
            onPointerDown: bb => {
              Kb.onPointerDown(bb), ub.onPointerDown(bb)
            },
            onPointerUp: bb => {
              Kb.onPointerUp(bb), ub.onPointerUp(bb)
            },
            onClick: ub.onClick
          }
        }, Cb = null !== hb, db = hb !== Su.u.COSMETIC_SHOP && !Lb;
        async function rb() {
          await async function() {
            if (!pb) return;
            await pb(), ob(null)
          }(), jb.d.set({
            openEverythingMenuName: null
          })
        }
        const nb = (0, Bb.useRef)(null),
          Db = (0, Bb.useCallback)((() => null !== nb.current && (0, PU.h)(nb.current)), []);

        function zb() {
          Db() || rb()
        }(0, Bb.useEffect)((() => (0, OG.x)(Db)), [Db]);
        const gb = (0, Bb.useMemo)((() => "inGame" === ub ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            (0, IU.c)()
          }
        } : (0, xb.d)() ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            Gu.l.discordActivity().then((bb => {
              bb.exit("User exited the game")
            }))
          }
        } : null), [ub, bb]);
        const ib = (0, Hb.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: zb,
          children: (0, Hb.jsx)(Sb.i, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Hb.jsx)(AB.b, {
          showing: Cb,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: hb === Su.u.SHOP,
          doGameplayStartStopOnShow: "inGame" === ub,
          children: (0, Hb.jsx)(KB.d, {
            className: "EverythingMenuContainer",
            show: Cb && !Lb,
            children: (0, Hb.jsx)(lB.b, {
              close: zb,
              togglePointerLock: !1,
              children: (0, Hb.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, OG.o)(hb) && (0, Hb.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Hb.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [gb && (0, Hb.jsx)(Sb.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        gb.onClick()
                      },
                      children: gb.text
                    }), Cb && ab && (0, Hb.jsx)("div", {
                      ...Kb,
                      className: "EverythingMenuWallet",
                      title: bb("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, mb.o)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Hb.jsx)(mU.f, {})
                    })]
                  }), (0, Hb.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Hb.jsxs)("div", {
                      ...Wb(Su.u.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": hb === Su.u.SETTINGS ? "true" : void 0,
                      className: Gb()("EverythingMenuTab", {
                        EverythingMenuTabActive: hb === Su.u.SETTINGS
                      }),
                      children: [bb("general:settings"), Zb("OpenSettings", "pause")]
                    }), (0, Hb.jsxs)("div", {
                      ...Wb(Su.u.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": hb === Su.u.CUSTOMISATION ? "true" : void 0,
                      className: Gb()("EverythingMenuTab", {
                        EverythingMenuTabActive: hb === Su.u.CUSTOMISATION
                      }),
                      children: [bb("general:player"), Zb("OpenCharacterCustomization")]
                    }), Ab.featureFlags.useSocialFeatures && (0, Hb.jsxs)("div", {
                      ...Wb(Su.u.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": hb === Su.u.SOCIAL ? "true" : void 0,
                      className: Gb()("EverythingMenuTab", {
                        EverythingMenuTabActive: hb === Su.u.SOCIAL
                      }),
                      ...(0, Qb.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, hb === Su.u.SOCIAL),
                      children: [bb("socialBar:social"), (0, Hb.jsx)(OL.b, {})]
                    }), ab && (0, Hb.jsxs)("div", {
                      ...Wb(Su.u.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": hb === Su.u.COSMETIC_SHOP ? "true" : void 0,
                      className: Gb()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: hb === Su.u.COSMETIC_SHOP
                      }),
                      children: [(0, Hb.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: bb("store:title")
                      }), "new" === wb && (0, Hb.jsx)(wU, {}), "dot" === wb && (0, Hb.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === ub && (0, Hb.jsxs)("div", {
                      ...Wb(Su.u.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": hb === Su.u.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Gb()("EverythingMenuTab", {
                        EverythingMenuTabActive: hb === Su.u.LOBBY_LEADERBOARD
                      }),
                      children: [bb("general:lobby"), Zb("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Hb.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: ib
                  })]
                }), (0, OG.o)(hb) && ib, (0, Hb.jsxs)("div", {
                  ref: nb,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === ub ? "0.85" : "1"
                  },
                  children: [(0, Hb.jsx)(aB, {
                    show: hb === Su.u.SETTINGS,
                    setBeforeResumeCallback: ob
                  }), (0, Hb.jsx)(XB, {
                    show: hb === Su.u.CUSTOMISATION
                  }), (0, Hb.jsx)(Bb.Suspense, {
                    fallback: null,
                    children: (0, Hb.jsx)(kO, {
                      show: hb === Su.u.SHOP
                    })
                  }), (0, Hb.jsx)(YG, {
                    show: hb === Su.u.LOBBY_LEADERBOARD
                  }), (0, Hb.jsx)(MU, {
                    show: hb === Su.u.COSMETIC_SHOP
                  }), (0, Hb.jsx)(hL, {
                    show: hb === Su.u.SOCIAL
                  })]
                }), !(0, Ab.isMobileApp)() && (0, WB.i)(Yb.getPlayerRanks()) && (0, Hb.jsx)(KB.d, {
                  ref: lb,
                  className: "EverythingMenuBannerDiv",
                  show: db,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Hb.jsx)(qU.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: lb
                    },
                    showing: Cb && db,
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
  9094: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(314),
      Ob = hb(9097);

    function Gb(bb, ub, hb) {
      const Gb = Object.entries(ub).sort(((bb, ub) => ub[1] - bb[1])),
        Ub = (0, Bb.wb)(bb);
      Ub.push(bb ? "\n\n" : "\n");
      for (const [Ob, Xb] of Gb) {
        var Lb, Yb, Sb;
        const bb = null !== (Lb = null === hb || void 0 === hb || null === (Yb = hb[Ob]) || void 0 === Yb ? void 0 : Yb.icon) && void 0 !== Lb ? Lb : `${Ob} Enchantment`;
        Ub.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Ub.push({
          str: `${Ob} ${null!==(Sb=(0,Bb.R)(Xb))&&void 0!==Sb?Sb:Xb}\n`
        })
      }
      Ub.push({
        str: "\n"
      });
      for (const [Bb, Xb] of Gb) {
        var ab, Hb, wb, Zb;
        const bb = null !== (ab = null === hb || void 0 === hb || null === (Hb = hb[Bb]) || void 0 === Hb ? void 0 : Hb.icon) && void 0 !== ab ? ab : `${Bb} Enchantment`,
          ub = null !== (wb = null === hb || void 0 === hb || null === (Zb = hb[Bb]) || void 0 === Zb ? void 0 : Zb.description) && void 0 !== wb ? wb : (0, Ob.l)(Bb);
        Ub.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Ub.push({
          str: ub,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Ub.push({
          str: "\n"
        })
      }
      return Ub
    }
  },
  9100: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      g: () => lb,
      i: () => ob,
      j: () => Yb,
      k: () => Ab,
      n: () => ab,
      p: () => wb,
      q: () => pb,
      t: () => Hb
    });
    var Bb = hb(298),
      Ob = hb(588),
      Gb = hb(314),
      Ub = hb(4005),
      Lb = hb(9094);

    function Yb(bb, ub) {
      var hb;
      let {
        player: Bb,
        chestOrCreative: Ob
      } = bb;
      var Gb;
      return ub < Bb.length ? null !== (Gb = Bb[ub]) && void 0 !== Gb ? Gb : null : null !== (hb = Ob[ub - Bb.length]) && void 0 !== hb ? hb : null
    }

    function Sb(bb) {
      var ub;
      return null !== (ub = bb.amount) && void 0 !== ub ? ub : 0
    }

    function ab(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Hb(bb) {
      return !!bb.shiftKey
    }

    function wb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const Zb = new Set,
      Xb = 50;

    function pb(bb, ub) {
      var hb;
      const Bb = null === (hb = bb[ub]) || void 0 === hb ? void 0 : hb.displayName;
      return (0, Ob.J)(Bb) ? "string" !== typeof ub ? "" : (!Zb.has(ub) && Zb.size < Xb && (Zb.add(ub), console.warn(`No item called "${ub}", so its hover shows the name as given`)), ub) : Bb
    }

    function ob(bb, ub, hb) {
      var Yb, Sb, ab, Hb, wb, Zb, Xb, ob, Ab, lb, Kb, Wb, Cb, db;
      const rb = bb.attributes,
        jb = null !== (Yb = null === (Sb = ub[bb.name]) || void 0 === Sb ? void 0 : Sb.rootName) && void 0 !== Yb ? Yb : bb.name,
        nb = null !== (ab = null !== (Hb = rb.customDisplayName) && void 0 !== Hb ? Hb : null === (wb = ub[bb.name]) || void 0 === wb ? void 0 : wb.displayName) && void 0 !== ab ? ab : pb(ub, jb);
      let Db = nb;
      const xb = null === (Zb = rb.customAttributes) || void 0 === Zb ? void 0 : Zb.enchantmentTier;
      xb && (Db = (0, Gb.wb)(nb, {
        colour: Gb.rb[xb]
      }));
      const zb = null !== (Xb = null !== (ob = null !== (Ab = function(bb, ub) {
        var hb;
        if (void 0 === bb || null !== (hb = ub.customAttributes) && void 0 !== hb && hb.author) return bb;
        const Ob = (0, Bb.nc)(bb);
        return Ob.every((bb => "string" === typeof bb)) ? bb : Ob.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(rb.customDescription, rb)) && void 0 !== Ab ? Ab : null === (lb = ub[bb.name]) || void 0 === lb ? void 0 : lb.description) && void 0 !== ob ? ob : null === (Kb = ub[jb]) || void 0 === Kb ? void 0 : Kb.description) && void 0 !== Xb ? Xb : "";
      let gb = zb;
      if (null !== (Wb = rb.customAttributes) && void 0 !== Wb && Wb.enchantments) gb = (0, Lb.d)(zb, rb.customAttributes.enchantments, rb.customAttributes.enchantmentData);
      else if (hb[jb]) gb = (0, Gb.wb)(zb), gb.push({
        str: "\n"
      }), gb.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Cb = rb.customAttributes) && void 0 !== Cb && Cb.mobSettings) {
        var ib, vb;
        const bb = rb.customAttributes.mobSettings;
        var tb, Jb;
        if (gb = [], (0, Ob.J)(rb.customAttributes.health) || (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: rb.customAttributes.health.toString()
          }), (0, Ob.J)(bb.maxHealth) || (gb.push({
            str: "/"
          }), gb.push({
            str: bb.maxHealth.toString()
          }))), !(0, Ob.J)(bb.attackDamage) && bb.attackDamage > 0 && (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.attackDamage.toString()
          })), !(0, Ob.J)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Ob.J)(bb.baseRunningSpeed) || (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) gb.push({
          str: "\n"
        }), gb.push({
          str: {
            translationKey: "general:has"
          }
        }), gb.push({
          str: " "
        }), gb.push({
          icon: null !== (tb = null === (Jb = bb.tameInfo) || void 0 === Jb ? void 0 : Jb.saddleItemName) && void 0 !== tb ? tb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (gb.push({
            str: "\n"
          }), gb.push({
            str: "\n"
          }), bb.petInfo && null !== (ib = bb.tameInfo) && void 0 !== ib && ib.supportsFriendship) {
          const ub = Ub.d.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of ub) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: "\n"
          });
          const hb = Ub.d.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Ub.d.hungerLevelIcons[hb]) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: " "
          }), gb.push({
            str: Ub.d.hungerLevelTranslations[hb],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (vb = bb.tameInfo) && void 0 !== vb && vb.supportsFriendship) {
          var eb, Nb;
          let ub = null !== (eb = bb.tameInfo.likedFoods) && void 0 !== eb ? eb : [];
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Superliked]
            }
          }), gb.push({
            str: " "
          }), null !== (Nb = bb.petInfo) && void 0 !== Nb && Nb.superlikedFoodKnown ? (gb.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ub = ub.filter((ub => ub !== bb.petInfo.superlikedFood))) : gb.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Liked]
            }
          }), gb.push({
            str: " "
          });
          for (const bb of ub) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Neutral]
            }
          }), gb.push({
            str: " "
          });
          for (const hb of null !== (sb = bb.tameInfo.neutralFoods) && void 0 !== sb ? sb : []) {
            var sb;
            gb.push({
              icon: hb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Disliked]
            }
          }), gb.push({
            str: " "
          });
          for (const hb of null !== (Mb = bb.tameInfo.dislikedFoods) && void 0 !== Mb ? Mb : []) {
            var Mb;
            gb.push({
              icon: hb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        gb.length > 0 ? (gb.shift(), gb.unshift(...(0, Gb.wb)(zb))) : gb = (0, Gb.wb)(zb)
      }
      return {
        name: Db,
        desc: gb,
        fontStyle: null !== (db = rb.customAttributes) && void 0 !== db && db.author ? "italic" : "normal"
      }
    }

    function Ab(bb, ub, hb, Bb) {
      const Ob = Yb(bb, hb),
        Gb = Yb(bb, Bb);
      if (!Ob) return !1;
      const Ub = ub[Ob.name].armourReduction,
        Lb = ub[Gb.name].armourReduction;
      if (Lb === Ub) {
        var Sb, ab, Hb, wb;
        const bb = null !== (Sb = null === (ab = Ob.attributes.customAttributes) || void 0 === ab ? void 0 : ab.enchantmentTier) && void 0 !== Sb ? Sb : "Tier 0",
          ub = null !== (Hb = null === (wb = Gb.attributes.customAttributes) || void 0 === wb ? void 0 : wb.enchantmentTier) && void 0 !== Hb ? Hb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(ub.replace("Tier ", ""))
      }
      return Ub > Lb
    }

    function lb(bb) {
      let ub;
      if ("number" === typeof bb) {
        const hb = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!hb) return null;
        ub = hb.getBoundingClientRect()
      } else ub = bb.getBoundingClientRect();
      return {
        x: ub.left + ub.width / 2,
        y: ub.top + ub.height / 2
      }
    }
  },
  8978: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Zb,
      i: () => Xb,
      k: () => pb
    });
    var Bb = hb(1357),
      Ob = hb(49),
      Gb = hb(1206),
      Ub = hb(4292),
      Lb = hb(2230),
      Yb = hb(1095),
      Sb = hb(86),
      ab = hb(1857),
      Hb = hb(1242),
      wb = hb(1007);

    function Zb(bb) {
      let {
        show: ub,
        onClose: hb
      } = bb;
      const {
        requestedGameNameWithVariation: Bb,
        lobbyName: Ob,
        shownLobbyName: Gb
      } = (0, ab.i)("connectedGame"), Yb = (0, Lb.d)(Bb, Ob, !1);
      return Sb.featureFlags.canUseInviteLinks && (0, wb.jsx)(Ub.b, {
        show: ub,
        close: hb,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, wb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, wb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, wb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, wb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Yb ? (0, wb.jsx)(Hb.c, {}) : Yb, (0, wb.jsx)("br", {}), "Lobby Name: ", Gb, (0, wb.jsx)("br", {}), (0, wb.jsx)("br", {}), (0, wb.jsx)("br", {}), (0, wb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, wb.jsx)(Xb, {})]
        })
      })
    }

    function Xb() {
      var bb;
      const {
        t: ub
      } = (0, Yb.K)(), hb = null !== (bb = pb(Sb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [Gb, Ub] = (0, Ob.useState)(0), [Lb, ab] = (0, Ob.useReducer)((bb => bb + 1), 0);
      return (0, Ob.useEffect)((() => {
        const bb = setTimeout((() => {
          ab()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [Gb]), Sb.featureFlags.canUseInviteLinks && (0, wb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, wb.jsx)("div", {
          className: "InviteLinkInner",
          children: hb
        }), (0, wb.jsx)(Bb.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(hb).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Ub(Date.now())
          },
          disabled: Date.now() - Gb < 1e3,
          children: Date.now() - Gb < 1e3 ? ub("general:copied") : ub("general:copy")
        })]
      })
    }

    function pb(bb) {
      const [ub, hb] = (0, Ob.useState)(null);
      return (0, Ob.useEffect)((() => {
        if (!bb) return;
        let ub = !0;
        return (0, Gb.C)().then((bb => {
          ub && hb(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          ub = !1
        }
      }), [bb]), ub
    }
  },
  9077: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1857),
      Lb = hb(1007);

    function Yb(bb) {
      const ub = Math.floor(bb / 3600),
        hb = Math.floor(bb % 3600 / 60),
        Bb = Math.floor(bb % 60),
        Ob = `${hb.toString().padStart(2,"0")}:${Bb.toString().padStart(2,"0")}`;
      return ub > 0 ? `${ub}:${Ob}` : Ob
    }
    const Sb = (0, Bb.memo)((function(bb) {
      let {
        className: ub
      } = bb;
      const {
        recording: hb,
        seconds: Bb
      } = (0, Ub.i)("replayRecorder");
      return hb ? (0, Lb.jsxs)("div", {
        className: Gb()("RecordingIndicator", ub),
        children: [(0, Lb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Lb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Lb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Yb(Bb)
        })]
      }) : null
    }))
  },
  4653: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ob
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4409),
      Ub = hb(1095),
      Lb = hb(966),
      Yb = hb(1357),
      Sb = hb(1398),
      ab = hb(1249),
      Hb = hb(2378),
      wb = hb(1007);
    const Zb = {
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

    function Xb(bb) {
      let {
        platform: ub
      } = bb;
      const hb = "youtube" === ub;
      return (0, wb.jsxs)("span", {
        className: Ob()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: hb
        }),
        children: [hb && (0, wb.jsx)(Hb.c, {
          variant: "white"
        }), !hb && (0, wb.jsx)(Lb.e, {
          name: Zb[ub].icon,
          kit: "brands"
        })]
      })
    }

    function pb(bb) {
      let {
        platform: ub,
        link: hb,
        editable: Bb,
        userContext: Ob,
        onLinksUpdated: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ub.K)(), ob = Zb[ub];
      if (!hb && !Bb) return null;

      function Ab() {
        var bb;
        if (!Ob || !Hb) return;
        ab.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ob.name
            }
          },
          prefixText: Gb.u[ub],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === hb || void 0 === hb ? void 0 : hb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: hb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Sb.e.setSocialLink(Ob, ub, bb.value) : await Sb.e.clearSocialLink(Ob, ub), Hb()
          } catch (hb) {
            console.error("Failed to update social link", hb), ab.NotificationProvider.showAlertPopup({
              title: hb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (hb) {
        const bb = `@${hb.handle}`;
        return (0, wb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ob.color
          },
          href: hb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, wb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, wb.jsx)(Xb, {
              platform: ub
            }), (0, wb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, wb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), Bb && (0, wb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Yb.V)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), Ab()
            },
            children: (0, wb.jsx)(Lb.e, {
              name: "pen-to-square"
            })
          }), !Bb && (0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, wb.jsx)(Lb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, wb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ob.color
        },
        ...(0, Yb.V)(),
        onClick: () => {
          Ab()
        },
        children: [(0, wb.jsx)(Xb, {
          platform: ub
        }), (0, wb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ob.name
          }), (0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: pb("homePage:profileSocialLinkAdd")
          })]
        }), (0, wb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, wb.jsx)(Lb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ob(bb) {
      let {
        socialLinks: ub,
        editable: hb = !1,
        userContext: Bb,
        onLinksUpdated: Ob
      } = bb;
      if (!hb && 0 === ub.length) return null;
      const Ub = new Map(ub.map((bb => [bb.platform, bb]))),
        Lb = hb ? Gb.q : ub.map((bb => bb.platform));
      return (0, wb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, wb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Lb.map((bb => (0, wb.jsx)(pb, {
            platform: bb,
            link: Ub.get(bb),
            editable: hb,
            userContext: Bb,
            onLinksUpdated: Ob
          }, bb)))
        })
      })
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  9131: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(3364);

    function Gb() {
      const [bb, ub] = (0, Bb.useState)(!1);
      return (0, Bb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Ob.e)().then((() => {
          bb && ub(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  6300: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(29);

    function Gb(bb, ub) {
      var hb;
      const [Gb, Ub] = (0, Bb.useState)(null !== (hb = Ob.j.getItem(bb)) && void 0 !== hb ? hb : ub);
      return [Gb, ub => {
        Ob.j.setItem(bb, ub), Ub(ub)
      }]
    }
  },
  9057: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => pb,
      e: () => Xb
    });
    hb(9062);
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(9031);

    function Lb(bb, ub) {
      return Math.max(1, Math.round(bb * ub))
    }

    function Yb(bb, ub) {
      const hb = ub * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Bb = function(bb, ub) {
          if (bb.lines) return Lb(bb.lineThickness, ub) % 2;
          if (bb.dot) return Lb(bb.dotSize, ub) % 2;
          return Sb(bb, ub) % 2
        }(bb, ub),
        Ob = ab(bb.lineThickness * hb, Bb),
        Gb = Lb(bb.lineLength, hb),
        Ub = Math.round(bb.gap * hb),
        Yb = bb.outline > 0 ? Lb(bb.outline, hb) : 0,
        wb = [];
      if (bb.lines && (wb.push({
          x: Ob + Ub,
          y: 0,
          w: Gb,
          h: Ob,
          arm: "right"
        }), wb.push({
          x: -Ub - Gb,
          y: 0,
          w: Gb,
          h: Ob,
          arm: "left"
        }), wb.push({
          x: 0,
          y: Ob + Ub,
          w: Ob,
          h: Gb,
          arm: "down"
        }), bb.tStyle || wb.push({
          x: 0,
          y: -Ub - Gb,
          w: Ob,
          h: Gb,
          arm: "up"
        }), 0 === Ub && wb.push({
          x: 0,
          y: 0,
          w: Ob,
          h: Ob
        })), bb.dot) {
        const ub = ab(bb.dotSize * hb, Bb),
          Gb = bb.lines && 0 === Ub && bb.dotSize > bb.lineThickness ? Math.max(ub, Ob + 2) : ub,
          Lb = (Ob - Gb) / 2;
        wb.push({
          x: Lb,
          y: Lb,
          w: Gb,
          h: Gb
        })
      }
      const Zb = wb.map((bb => ({
        ...bb,
        x: bb.x - Yb,
        y: bb.y - Yb,
        w: bb.w + 2 * Yb,
        h: bb.h + 2 * Yb
      })));
      let Xb = null,
        pb = null;
      if (bb.circle) {
        const ub = Lb(bb.circleThickness, hb),
          Gb = function(bb, ub) {
            return bb + (bb % 2 === ub ? 0 : 1)
          }(Sb(bb, hb), Bb),
          Ub = (Ob - Gb) / 2;
        Xb = Hb(Ub, Gb, ub), Yb > 0 && (pb = Hb(Ub - Yb, Gb + 2 * Yb, ub + 2 * Yb))
      }
      return {
        cell: Ob,
        fills: wb,
        outlines: Yb > 0 ? Zb : [],
        ring: Xb,
        ringOutline: pb
      }
    }

    function Sb(bb, ub) {
      return Math.round(bb.circleRadius * ub * 2 + Lb(bb.circleThickness, ub))
    }

    function ab(bb, ub) {
      return Math.max(2 - ub, 2 * Math.round((bb - ub) / 2) + ub)
    }

    function Hb(bb, ub, hb) {
      const Bb = 2 * hb >= ub - 1;
      return {
        x: bb,
        y: bb,
        size: ub,
        border: Math.min(hb, Math.floor(ub / 2)),
        filled: Bb
      }
    }
    var wb = hb(1007);
    const Zb = 1.4;

    function Xb(bb, ub) {
      return bb && ub ? `scale(${Zb})` : "scale(1)"
    }

    function pb(bb) {
      return "classic" === bb.settings.style ? (0, wb.jsx)(lb, {
        ...bb
      }) : (0, wb.jsx)(nb, {
        ...bb
      })
    }
    const ob = .125;

    function Ab(bb, ub) {
      const hb = {};
      if (bb.color !== Ub.e.color && (hb.color = (0, Ub.h)(bb.color)), bb.opacity !== Ub.e.opacity && (hb.opacity = bb.opacity / 100), bb.outline !== Ub.e.outline || bb.outlineColor !== Ub.e.outlineColor) {
        const ub = bb.outline,
          Bb = (0, Ub.h)(bb.outlineColor);
        hb.textShadow = ub > 0 ? `-${ub}px 0 ${Bb}, 0 ${ub}px ${Bb}, ${ub}px 0 ${Bb}, 0 -${ub}px ${Bb}` : "none"
      }
      if (bb.size !== Ub.e.size) {
        const Bb = bb.size / 100;
        hb.fontSize = ub ? `calc(max(1.3rem, 18px) * ${Bb})` : `calc(1.3rem * ${Bb})`, hb.marginTop = `-${ob}em`, hb.transformOrigin = `50% calc(50% + ${ob}em)`
      }
      return hb
    }

    function lb(bb) {
      let {
        settings: ub,
        touch: hb,
        inPreview: Bb,
        inEditor: Gb,
        pressed: Ub = !1,
        pressRef: Lb
      } = bb;
      return (0, wb.jsx)("div", {
        className: Ob()("Crosshair", {
          Touch: hb,
          CrosshairInPreview: Bb,
          CrosshairInEditor: Gb || Bb
        }),
        ref: Lb,
        style: {
          transform: Xb(Ub, ub.growOnClick),
          ...Ab(ub, hb)
        },
        children: "+"
      })
    }

    function Kb(bb, ub) {
      return bb / ub + "px"
    }

    function Wb(bb, ub, hb, Bb) {
      return {
        ...rb(bb, ub, hb),
        width: Kb(bb.w, hb),
        height: Kb(bb.h, hb),
        background: Bb
      }
    }

    function Cb(bb, ub, hb) {
      return {
        left: Kb(bb.x, ub),
        top: Kb(bb.y, ub),
        width: Kb(bb.size, ub),
        height: Kb(bb.size, ub),
        borderWidth: Kb(bb.border, ub),
        borderColor: hb,
        background: bb.filled ? hb : void 0
      }
    }
    const db = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rb(bb, ub, hb) {
      const [Bb, Ob] = bb.arm ? db[bb.arm] : [0, 0], Gb = Math.round(ub * hb);
      return {
        left: Kb(bb.x + Bb * Gb, hb),
        top: Kb(bb.y + Ob * Gb, hb)
      }
    }

    function jb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function nb(bb) {
      let {
        settings: ub,
        inPreview: hb,
        inEditor: Bb,
        pressed: Lb = !1,
        spread: Sb,
        spreadRef: ab
      } = bb;
      const Hb = (0, Gb.useRef)(null),
        {
          box: Xb,
          dpr: pb
        } = function(bb) {
          const [ub, hb] = (0, Gb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Gb.useLayoutEffect)((() => {
            const ub = bb.current;
            if (!ub) return;
            const Bb = () => {
              const bb = ub.getBoundingClientRect(),
                Bb = window.devicePixelRatio || 1;
              hb((ub => ub.dpr === Bb && ub.box.left === bb.left && ub.box.top === bb.top && ub.box.width === bb.width && ub.box.height === bb.height ? ub : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: Bb
              }))
            };
            Bb();
            const Ob = new ResizeObserver(Bb);
            return Ob.observe(ub), window.addEventListener("resize", Bb), window.addEventListener("scroll", Bb, !0), () => {
              Ob.disconnect(), window.removeEventListener("resize", Bb), window.removeEventListener("scroll", Bb, !0)
            }
          }), [bb]), ub
        }(Hb),
        ob = (0, Gb.useRef)(pb);
      ob.current = pb;
      const Ab = Yb(ub, pb, Lb && ub.growOnClick ? Zb : 1),
        lb = function(bb, ub, hb) {
          const Bb = Math.round((bb.left + bb.width / 2) * hb - ub / 2),
            Ob = Math.round((bb.top + bb.height / 2) * hb - ub / 2);
          return {
            x: Bb / hb - bb.left,
            y: Ob / hb - bb.top
          }
        }(Xb, Ab.cell, pb),
        Kb = (0, Ub.h)(ub.color),
        db = (0, Ub.h)(ub.outlineColor),
        nb = (0, Gb.useRef)(0);
      (0, Gb.useLayoutEffect)((() => {
        if (ab) return ab.current = bb => {
          var ub;
          nb.current = bb, null === (ub = Hb.current) || void 0 === ub || ub.querySelectorAll("[data-arm]").forEach((ub => {
            Object.assign(ub.style, rb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(ub), bb, ob.current))
          }))
        }, () => {
          ab.current = null
        }
      }), [ab]);
      const Db = null !== Sb && void 0 !== Sb ? Sb : nb.current;
      return (0, wb.jsx)("div", {
        ref: Hb,
        className: Ob()("CrosshairShapes", {
          CrosshairInPreview: hb,
          CrosshairInEditor: Bb || hb,
          CrosshairSpreads: void 0 !== ab
        }),
        children: (0, wb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: lb.x,
            top: lb.y,
            opacity: ub.opacity / 100
          },
          children: (0, wb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Ab.ringOutline && (0, wb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(Ab.ringOutline, pb, db)
            }), Ab.outlines.map(((bb, ub) => (0, wb.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: Wb(bb, Db, pb, db)
            }, `o${ub}`))), Ab.ring && (0, wb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(Ab.ring, pb, Kb)
            }), Ab.fills.map(((bb, ub) => (0, wb.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: Wb(bb, Db, pb, Kb)
            }, `f${ub}`)))]
          })
        })
      })
    }
  },
  9071: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      e: () => ob,
      f: () => pb
    });
    var Bb = hb(9031);
    const Ob = "XH1-",
      Gb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Ub = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Lb = ["color", "outlineColor"],
      Yb = 1 + 3 * Lb.length + Ub.length + 1,
      Sb = Math.ceil(8 * Yb / Math.log2(62)),
      ab = Ob.length + Sb;

    function Hb(bb) {
      let ub = 90;
      for (const hb of bb) ub = 31 * ub + hb & 255;
      return ub
    }
    const wb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Zb = BigInt(wb.length);

    function Xb(bb, ub) {
      let hb = 0n;
      for (const Ob of bb) {
        const bb = wb.indexOf(Ob);
        if (bb < 0) return null;
        hb = hb * Zb + BigInt(bb)
      }
      if (hb >> BigInt(8 * ub) !== 0n) return null;
      const Bb = [];
      for (let Ob = 0; Ob < ub; Ob++) Bb.unshift(Number(0xffn & hb)), hb >>= 8n;
      return Bb
    }

    function pb(bb) {
      let ub = "shapes" === bb.style ? 1 : 0;
      Gb.forEach(((hb, Bb) => {
        bb[hb] && (ub |= 1 << Bb + 1)
      }));
      const hb = [ub];
      for (const Ob of Lb) {
        const ub = (0, Bb.g)(Ob, bb[Ob]);
        hb.push(ub >> 16 & 255, ub >> 8 & 255, 255 & ub)
      }
      for (const Ob of Ub) {
        const {
          min: ub,
          step: Gb
        } = Bb.b[Ob];
        hb.push(Math.round(((0, Bb.g)(Ob, bb[Ob]) - ub) / Gb))
      }
      return hb.push(Hb(hb)), Ob + function(bb, ub) {
        let hb = 0n;
        for (const Ob of bb) hb = hb << 8n | BigInt(Ob);
        let Bb = "";
        for (let Ob = 0; Ob < ub; Ob++) Bb = wb[Number(hb % Zb)] + Bb, hb /= Zb;
        return Bb
      }(hb, Sb)
    }

    function ob(bb) {
      for (const ub of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Sb}})`, "gi"))) {
        const bb = Ab(Xb(ub[1], Yb));
        if (bb) return bb
      }
      return null
    }

    function Ab(bb) {
      if (!bb || bb.length !== Yb || Hb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const ub = bb[0],
        hb = {
          ...Bb.e,
          style: 1 & ub ? "shapes" : "classic"
        };
      Gb.forEach(((bb, Bb) => {
        hb[bb] = 0 !== (ub & 1 << Bb + 1)
      }));
      let Ob = 1;
      for (const Bb of Lb) hb[Bb] = bb[Ob] << 16 | bb[Ob + 1] << 8 | bb[Ob + 2], Ob += 3;
      for (const Gb of Ub) {
        const {
          min: ub,
          step: Ub
        } = Bb.b[Gb];
        hb[Gb] = (0, Bb.g)(Gb, ub + bb[Ob] * Ub), Ob++
      }
      return hb
    }
  },
  9031: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      e: () => Ob,
      g: () => Gb,
      h: () => Sb,
      j: () => Yb,
      m: () => ab,
      o: () => Lb,
      p: () => Ub
    });
    const Bb = {
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
      Ob = Object.freeze({
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

    function Gb(bb, ub) {
      var hb;
      const {
        min: Gb,
        max: Ub,
        step: Lb
      } = Bb[bb];
      if (!Number.isFinite(ub)) return Ob[bb];
      const Yb = (null !== (hb = String(Lb).split(".")[1]) && void 0 !== hb ? hb : "").length,
        Sb = Number((Math.round(ub / Lb) * Lb).toFixed(Yb));
      return Math.min(Ub, Math.max(Gb, Sb))
    }

    function Ub(bb, ub, hb) {
      const Bb = "number" === typeof hb ? Gb(ub, hb) : hb;
      return {
        ...bb,
        [ub]: Bb
      }
    }

    function Lb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Ob).every((Bb => hb.includes(Bb) || bb[Bb] === ub[Bb]))
    }

    function Yb(bb) {
      return Lb(bb, Ob)
    }

    function Sb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function ab(bb) {
      const ub = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return ub ? parseInt(ub[1], 16) : null
    }
  },
  9073: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      e: () => wb
    });
    var Bb = hb(49),
      Ob = hb(29),
      Gb = hb(9071),
      Ub = hb(9031);
    const Lb = "crosshairCode";
    let Yb = null;
    const Sb = new Set;

    function ab() {
      if (null === Yb) {
        var bb;
        const ub = Ob.j.getItem(Lb);
        Yb = null !== (bb = "string" === typeof ub ? (0, Gb.e)(ub) : null) && void 0 !== bb ? bb : Ub.e
      }
      return Yb
    }

    function Hb(bb) {
      Yb = bb, (0, Ub.j)(bb) ? Ob.j.removeItem(Lb) : Ob.j.setItem(Lb, (0, Gb.f)(bb));
      for (const ub of Sb) ub()
    }

    function wb() {
      const [bb, ub] = (0, Bb.useState)(ab);
      return (0, Bb.useEffect)((() => {
        const bb = () => {
          ub(ab())
        };
        return bb(), hb = bb, Sb.add(hb), () => {
          Sb.delete(hb)
        };
        var hb
      }), []), bb
    }
  },
  8615: (bb, ub, hb) => {
    function Bb(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Ob(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, ub) => ({
        left: Math.min(bb.left, ub.left),
        top: Math.min(bb.top, ub.top),
        right: Math.max(bb.right, ub.right),
        bottom: Math.max(bb.bottom, ub.bottom)
      })))
    }

    function Gb(bb, ub) {
      const hb = Math.max(0, (ub - (bb.right - bb.left)) / 2),
        Bb = Math.max(0, (ub - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - hb,
        top: bb.top - Bb,
        right: bb.right + hb,
        bottom: bb.bottom + Bb
      }
    }

    function Ub(bb, ub) {
      return ub.x >= bb.left && ub.x <= bb.right && ub.y >= bb.top && ub.y <= bb.bottom
    }

    function Lb(bb, ub, hb) {
      let Ob = null,
        Lb = 1 / 0;
      for (const {
          id: Bb,
          box: Gb
        }
        of ub) {
        const ub = (Gb.right - Gb.left) * (Gb.bottom - Gb.top);
        Ub(Gb, bb) && ub < Lb && (Lb = ub, Ob = Bb)
      }
      if (null !== Ob) return Ob;
      let Yb = 1 / 0;
      for (const {
          id: Sb,
          box: ab
        }
        of ub) {
        if (!Ub(Gb(ab, hb), bb)) continue;
        const ub = Bb(ab),
          Lb = Math.hypot(bb.x - ub.x, bb.y - ub.y);
        Lb < Yb && (Yb = Lb, Ob = Sb)
      }
      return Ob
    }

    function Yb(bb, ub, hb) {
      return {
        left: hb.left,
        top: hb.top,
        right: bb - hb.right,
        bottom: ub - hb.bottom
      }
    }

    function Sb(bb, ub, hb, Bb) {
      const Ob = (bb, ub, hb) => Math.max(Math.min(ub, 0), Math.min(Math.max(hb, 0), bb));
      return {
        x: Ob(ub, Bb.left - bb.left, Bb.right - bb.right),
        y: Ob(hb, Bb.top - bb.top, Bb.bottom - bb.bottom)
      }
    }

    function ab(bb, ub, hb, Bb, Ob) {
      const Gb = bb.dx * Bb + ub,
        Ub = bb.dy * Ob + hb,
        Lb = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Lb(Gb / Bb),
        dy: Lb(Ub / Ob)
      }
    }

    function Hb(bb, ub, hb, Bb) {
      return ub <= 0 || hb <= 0 ? 1 : Math.max(.05, Math.min(1, bb / ub, Bb / hb))
    }

    function wb(bb, ub, hb) {
      return Math.min(bb.right, ub.right) - Math.max(bb.left, ub.left) > hb && Math.min(bb.bottom, ub.bottom) - Math.max(bb.top, ub.top) > hb
    }

    function Zb(bb, ub) {
      const hb = (bb, ub, hb, Bb) => ub - bb > Bb - hb ? hb - bb > ub - Bb ? Bb - ub : hb - bb : bb < hb ? hb - bb : ub > Bb ? Bb - ub : 0;
      return {
        x: hb(bb.left, bb.right, ub.left, ub.right),
        y: hb(bb.top, bb.bottom, ub.top, ub.bottom)
      }
    }

    function Xb(bb, ub) {
      let {
        avoid: hb = null,
        bounds: Bb = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Ob = 0, Gb = 1 / 0;
      return bb.forEach(((bb, Ub) => {
        const Lb = ub.filter((ub => wb(bb, ub, 0))).length,
          Yb = null !== Bb && (bb.left < Bb.left || bb.top < Bb.top || bb.right > Bb.right || bb.bottom > Bb.bottom),
          Sb = Lb + (hb && wb(bb, hb, 0) ? 1e3 : 0) + (Yb ? 1e6 : 0);
        Sb < Gb && (Ob = Ub, Gb = Sb)
      })), Ob
    }
    hb.d(ub, {
      A: () => Ob,
      b: () => Bb,
      c: () => Ub,
      f: () => wb,
      i: () => Sb,
      j: () => Gb,
      l: () => Xb,
      n: () => ab,
      o: () => Lb,
      r: () => Hb,
      u: () => Yb,
      w: () => Zb
    })
  },
  9023: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Ob
    });
    var Bb = hb(13);

    function Ob(bb, ub) {
      return bb && !ub
    }

    function Gb() {
      return Ob(Bb.d.get("isTouchScreen"), Bb.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8391: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => Bb
    });
    const Bb = "controllerOpenKeyboard",
      Ob = "controllerKeyboardVisible"
  },
  8975: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    const Bb = new Set(["chunkBorders"])
  },
  8972: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ALL_DEV_TOOLS: () => Ub,
      coreDevTools: () => Sb,
      devTools: () => Yb
    });
    var Bb = hb(599),
      Ob = hb(1193),
      Gb = hb(8975);
    const Ub = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Lb() {
      const {
        noaDevTools: bb
      } = await hb.e(231).then((() => hb(40506)));
      return bb
    }
    const Yb = new class {
        constructor() {
          this.loadHost = Lb, this.tools = Ub
        }
        setHost(bb) {
          this.tools = null === bb ? Ub : bb.tools, this.loadHost = null === bb ? Lb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, ub) {
          const hb = await this.loadHost();
          await hb.downloadScene(bb, ub)
        }
        async setAmbientLightIntensity(bb) {
          const ub = await this.loadHost();
          await ub.setAmbientLightIntensity(bb)
        }
      },
      Sb = {
        tools: Gb.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Bb.o && Yb.setHost(Sb), (0, Ob.v)((() => {
      Yb.setHost(Sb)
    }))
  },
  9124: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => Ob,
      g: () => ab
    });
    var Bb = hb(1463);

    function Ob(bb) {
      var ub;
      return {
        ...Ub.store,
        yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
      }
    }
    const Gb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ub = {
        player: Gb,
        store: {
          ...Gb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Lb(bb, ub) {
      bb instanceof Promise ? bb.then(ub).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ub(bb)
    }
    class Yb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ub;
        this.view = bb, null === (ub = this.opened) || void 0 === ub || ub.show(bb)
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Sb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ub;
        return null !== (bb = null === (ub = this.opened) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ub) {
        var hb;
        null === (hb = this.opened) || void 0 === hb || hb.setCosmetic(bb, ub)
      }
      playEmote(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.playEmote(bb)
      }
      setOrbit(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ub;
        await this.ready, await (null === (ub = this.opened) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const ab = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Yb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Yb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Yb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ub) {
        return new Sb(this.current().openCharacter(bb, ub))
      }
    }
  },
  9122: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.b,
      f: () => Bb.c,
      j: () => Bb.g
    });
    var Bb = hb(9124);
    class Ob {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Gb {
      constructor() {
        this.mobScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(155)]).then((() => hb(40524))))), this.characterScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(154)]).then((() => hb(40617)))))
      }
      openMob(bb) {
        return this.mobScene.run((ub => ub.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ub => ub.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ub => ub.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ub) {
        return this.characterScene.run((hb => hb.openCharacterPreview(bb, ub)))
      }
    }
    Bb.g.setDefaultHost((() => new Gb))
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  },
  8992: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return bb && !ub
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  9016: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(981);

    function Ob() {
      var bb, ub;
      return null !== (bb = null === (ub = screen.orientation) || void 0 === ub ? void 0 : ub.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Gb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Ob() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Ob(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Bb.cX)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let ub = !1;
        return () => {
          if (ub && this.isHeld()) return null;
          const hb = bb();
          return ub ||= null !== hb, hb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  8613: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Yb
    });
    var Bb = hb(13),
      Ob = hb(1218),
      Gb = hb(86);
    const Ub = {
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

    function Lb() {
      return (0, Gb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Yb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ub) {
        var hb;
        if (!this.deps.enabled()) return;
        const Bb = Ub[bb],
          Ob = null !== ub && void 0 !== ub ? ub : Bb.pattern;
        if (null === Ob) return void console.warn("No vibration pattern for", bb);
        const Gb = this.deps.now();
        Gb - this.lastAnyAt < 40 && Bb.priority < this.playingPriority || Gb - (null !== (hb = this.lastAt.get(bb)) && void 0 !== hb ? hb : -1 / 0) < Bb.minGapMs || Gb < this.playingUntil && Bb.priority < this.playingPriority || (this.lastAt.set(bb, Gb), this.lastAnyAt = Gb, this.playingUntil = Gb + Ob.reduce(((bb, ub) => bb + ub), 0), this.playingPriority = Bb.priority, this.deps.vibrate(Ob))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Lb() && Bb.d.get("isTouchScreen") && Bb.d.get("clientEscMenuOptions").vibration && !(0, Ob.c)()
    })
  },
  8985: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => wb
    });
    var Bb = hb(13),
      Ob = hb(1593),
      Gb = hb(29),
      Ub = hb(1249),
      Lb = hb(3448),
      Yb = hb(1380),
      Sb = hb(1288);
    const ab = 2592e5,
      Hb = "notificationOptInLastPromptedAt";
    async function wb() {
      var bb;
      const ub = await Zb();
      if (null === ub) return;
      const hb = null !== (bb = Gb.j.getItem(Hb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - hb < ab) return;
      if ((0, Sb.f)()) return;
      const Bb = await Ub.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Ob.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Bb && (Gb.j.setItem(Hb, Date.now()), (0, Yb.reportAnalyticsClick)({
        id: !0 === Bb ? "push.allow" : "push.deny",
        value: Ob.e.supports("notifications") ? "app" : "browser"
      }), !0 === Bb && ub().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function Zb() {
      return await Ob.e.ready, Ob.e.supports("notifications") ? Bb.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Ob.e.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: ub
          } = bb;
          Bb.d.set({
            mobilePushNotificationsCanAsk: ub
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Lb.b.canAsk() ? () => Lb.b.requestPermission() : null
    }
  },
  8996: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      g: () => Yb
    });
    var Bb = hb(13);
    const Ob = 24,
      Gb = "farNametags",
      Ub = 1e5;

    function Lb() {
      var bb;
      return null === (bb = Bb.d.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Yb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(Gb),
          ub = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(ub) && ub >= 0 ? Math.min(ub, Ub) : null
      }()) && void 0 !== bb ? bb : Lb() ? 0 : Ob
    }
  },
  9115: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Ub
    });
    const Bb = [{
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

    function Ob(bb) {
      let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ub = bb < 0 ? "-" : "",
            hb = Math.abs(bb);
          return hb >= 10 ? `${ub}${hb.toFixed(1).replace(/\.0$/,"")}` : `${ub}${hb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ub = BigInt(Math.floor(bb))
      } else ub = bb;
      const Ob = ub < 0n ? -ub : ub,
        Gb = ub < 0n ? "-" : "",
        Ub = Ob.toString();
      if (Ub.length <= hb) return `${Gb}${Ub}`;
      const Lb = 3 * Math.floor((Ub.length - 1) / 3);
      if (Lb < 3) return `${Gb}${Ub}`;
      if (Lb > 3 * Bb.length) {
        const bb = Ub[0],
          ub = Ub.slice(1, 3).replace(/0+$/, "");
        return `${Gb}${ub?`${bb}.${ub}`:bb}e${Ub.length-1}`
      }
      const {
        threshold: Yb,
        suffix: Sb
      } = Bb[Bb.length - Lb / 3], ab = Ob / Yb, Hb = Number(1000n * (Ob % Yb) / Yb), wb = Number(ab) + Hb / 1e3;
      let Zb;
      return Zb = wb >= 100 ? Math.floor(wb).toString() : wb >= 10 ? wb.toFixed(1).replace(/\.0$/, "") : wb.toFixed(2).replace(/\.?0+$/, ""), `${Gb}${Zb}${Sb}`
    }
    const Gb = Bb.map((bb => {
      let {
        threshold: ub,
        suffix: hb
      } = bb;
      return {
        threshold: Number(ub),
        suffix: hb
      }
    })).filter((bb => {
      let {
        threshold: ub
      } = bb;
      return Number.isFinite(ub)
    }));

    function Ub(bb) {
      const ub = Math.abs(bb),
        hb = bb < 0 ? "-" : "";
      for (const {
          threshold: Bb,
          suffix: Ob
        }
        of Gb)
        if (ub >= Bb) {
          const bb = ub / Bb;
          if (bb >= 1e3) return `${hb}${ub.toExponential(2).replace("e+","e")}`;
          let Gb;
          return Gb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${hb}${Gb}${Ob}`
        } return `${hb}${ub}`
    }
  },
  9097: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      g: () => wb,
      j: () => Hb,
      l: () => Ub,
      o: () => Sb,
      q: () => Yb
    });
    var Bb = hb(314);
    const Ob = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Gb = {
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

    function Ub(bb) {
      var ub;
      return null !== (ub = Gb[bb]) && void 0 !== ub ? ub : {
        translationKey: ""
      }
    }
    const Lb = {
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

    function Yb(bb) {
      return Ob.includes(bb)
    }

    function Sb(bb) {
      var ub;
      return !0 === (null === bb || void 0 === bb || null === (ub = bb.customAttributes) || void 0 === ub ? void 0 : ub.cannotEnchant)
    }

    function ab(bb, ub) {
      const {
        max: hb
      } = Lb[bb].at(-1);
      return ub <= hb
    }

    function Hb(bb) {
      const ub = Math.sin(bb / 80),
        hb = bb => {
          if (bb <= 0) return 0;
          if (bb > 1) return 1;
          let ub = 0;
          const hb = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Bb = 0; Bb < hb.length; Bb++) {
            ub += (Bb % 2 === 0 ? 1 : -1) * hb[Bb] * Math.pow(bb, 2 + Bb) / (2 + Bb)
          }
          return 72 * ub
        },
        Bb = .3 - .78 * ub,
        Ob = .5 - .78 * ub,
        Gb = .6 - .7 * ub,
        Ub = .8 - .6 * ub;
      let Lb = hb(Bb),
        Yb = hb(Ob) - Lb,
        Sb = hb(Gb) - Yb - Lb,
        ab = hb(Ub) - Sb - Yb - Lb;
      Bb < .041 && (Yb /= 1 - Lb, Sb /= 1 - Lb, ab /= 1 - Lb, Lb = 0), Ob < .041 && (Lb /= 1 - Yb, Sb /= 1 - Yb, ab /= 1 - Yb, Yb = 0), Gb < .041 && (Lb /= 1 - Sb, Yb /= 1 - Sb, ab /= 1 - Sb, Sb = 0), Ub < .041 && (Lb /= 1 - ab, Yb /= 1 - ab, Sb /= 1 - ab, ab = 0);
      return {
        commonProb: Lb,
        uncommonProb: Yb,
        rareProb: Sb,
        epicProb: ab,
        legendaryProb: 1 - (ab + Sb + Yb + Lb)
      }
    }

    function wb(bb, ub) {
      const {
        min: hb,
        max: Ob
      } = Lb[bb][ub], Gb = Bb.d.sampleUniformIntDistribution(hb, Ob, "includeMax");
      return {
        ...Hb(Gb),
        level: Gb
      }
    }
  },
  8493: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return !bb.hidden && (ub || !bb.isRewardedAd)
    }

    function Ob(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Gb(bb, ub) {
      var hb;
      if ("dropdown" === (null === (hb = bb.userInput) || void 0 === hb ? void 0 : hb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const hb of bb.userInput.dropdownOptions)
          if (Ob(hb) === ub) return "object" === typeof hb ? hb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ub)
      }
      return bb.cost
    }

    function Ub(bb, ub, hb) {
      var Bb;
      const Ob = null !== (Bb = hb.excludedPlayers) && void 0 !== Bb ? Bb : [ub];
      return bb.filter((bb => !Ob.includes(bb)))
    }
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob,
      g: () => Ub,
      j: () => Bb
    })
  },
  9062: () => {},
  9033: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9040: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9046: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9049: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);