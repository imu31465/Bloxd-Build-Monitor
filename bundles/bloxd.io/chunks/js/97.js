export const id = 97;
export const ids = [97, 185];
export const modules = {
  8815: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      EverythingMenu: () => kU
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1197),
      Ub = sb(1039),
      Ib = sb(2001),
      Hb = sb(1104),
      fb = sb(1087);

    function Mb(bb) {
      let {
        items: cb,
        onClick: sb,
        selectedItemId: kb,
        className: Wb,
        padStartsOnTab: Mb = !0
      } = bb;
      const {
        t: Xb
      } = (0, Tb.E)(), nb = (0, Hb.j)(), mb = [];
      for (const ab of cb) {
        var lb;
        const bb = mb[mb.length - 1];
        var Qb;
        if (bb && bb.title === (null !== (lb = ab.section) && void 0 !== lb ? lb : null)) bb.items.push(ab);
        else mb.push({
          title: null !== (Qb = ab.section) && void 0 !== Qb ? Qb : null,
          items: [ab]
        })
      }
      return (0, fb.jsx)("div", {
        className: ab()("MenuSideBarBody", Wb),
        "data-pad-tabs": "2",
        children: mb.map(((bb, cb) => {
          var Wb;
          return (0, fb.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [bb.title && (0, fb.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Xb(bb.title)
            }), bb.items.map((bb => {
              var cb;
              const Wb = !!bb.iconElement || !!bb.faIcon;
              return (0, fb.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": kb === bb.id ? "true" : void 0,
                "data-pad-default-focus": Mb && kb === bb.id || void 0,
                className: ab()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: kb === bb.id
                }),
                onClick: () => {
                  sb(bb.id)
                },
                children: [Wb && (0, fb.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (cb = bb.iconElement) && void 0 !== cb ? cb : (0, fb.jsx)(Ub.b, {
                    name: bb.faIcon
                  })
                }), (!nb || !Wb) && (0, fb.jsx)("div", {
                  children: Xb(bb.title)
                }), bb.redDot && (0, fb.jsx)(Ib.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, bb.id)
            }))]
          }, null !== (Wb = bb.title) && void 0 !== Wb ? Wb : cb)
        }))
      })
    }
    var Xb = sb(2749),
      nb = sb(1117),
      mb = sb(2337),
      lb = sb(1113),
      Qb = sb(1431),
      eb = sb(117),
      Cb = sb(1870),
      Nb = sb(2168),
      Vb = sb(2173),
      Lb = sb(1664),
      ub = sb(1327),
      Yb = sb(4703),
      hb = sb(19),
      Jb = sb(8819);

    function gb(bb) {
      let {
        setApplySettingsCallback: cb
      } = bb;
      const {
        clientEscMenuOptions: sb
      } = (0, hb.p)(["clientEscMenuOptions"]), [Wb, ab] = (0, kb.useState)(!1), [Tb, Ub] = (0, kb.useState)(!1), [Ib, Hb] = (0, kb.useState)(6400), [Mb, Xb] = (0, kb.useState)(3600), [nb, mb] = (0, kb.useState)(!1), [lb, eb] = (0, kb.useState)(!1);

      function Cb(bb) {
        const cb = "screenshot" === bb ? Ub : ab;
        cb(!0);
        const sb = nb ? "normals" : lb ? "depth" : null;
        Jb.devTools.downloadScene(bb, {
          width: Ib,
          height: Mb,
          colouring: sb
        }).catch((bb => {
          console.error("Couldn't download the scene", bb)
        })).finally((() => {
          cb(!1)
        }))
      }
      return (0, fb.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, fb.jsx)(Yb.d, {
          label: "Disable Ambient Occlusion",
          checked: sb.disableAmbientOcclusion,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              disableAmbientOcclusion: bb
            }), cb((() => Yb.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Jb.devTools.supports("ambientLight") && (0, fb.jsx)(Yb.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: sb.ambientLightIntensity,
          onChange: bb => {
            Jb.devTools.setAmbientLightIntensity(bb).then((() => {
              hb.d.setClientEscMenuOptions({
                ambientLightIntensity: bb
              })
            })).catch((bb => {
              console.error("Couldn't set the ambient light", bb)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Jb.devTools.supports("weaponRaycasts") && (0, fb.jsx)(Yb.d, {
          label: "Show Weapon Raycasts",
          checked: sb.showWeaponRaycasts,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              showWeaponRaycasts: bb
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Jb.devTools.supports("sceneDownload") && (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fb.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, fb.jsx)(Yb.d, {
              label: "Apply normal-based coloring",
              checked: nb,
              onClick: bb => {
                mb(bb), bb && eb(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, fb.jsx)(Yb.d, {
              label: "Apply depth-based coloring",
              checked: lb,
              onClick: bb => {
                eb(bb), bb && mb(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, fb.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, fb.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, fb.jsx)(Lb.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, cb) => {
                  const sb = parseInt(bb) || 6400;
                  Hb(sb)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Ib.toString()
              }), (0, fb.jsx)("span", {
                children: "X"
              }), (0, fb.jsx)(Lb.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, cb) => {
                  const sb = parseInt(bb) || 3600;
                  Xb(sb)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Mb.toString()
              })]
            }), (0, fb.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, fb.jsxs)(Qb.d, {
                onClick: () => {
                  Cb("screenshot")
                },
                disabled: Tb,
                children: [Tb && (0, fb.jsx)(ub.d, {}), "Download Screenshot"]
              }), (0, fb.jsxs)(Qb.d, {
                onClick: () => {
                  Cb("glb")
                },
                disabled: Wb,
                children: [Wb && (0, fb.jsx)(ub.d, {}), "Download GLB"]
              })]
            })]
          }), (0, fb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Bb = sb(167),
      tb = sb(1126),
      yb = sb(1208),
      Pb = sb(2752),
      Db = sb(1495),
      Eb = sb(1271),
      ib = sb(1246),
      Ob = sb(2832),
      Gb = sb(1974),
      Kb = sb(1474),
      Zb = sb(344),
      zb = sb(2180),
      qb = sb(2195),
      db = sb(2539),
      Ab = sb(1629),
      wb = sb(2811),
      rb = sb(2785),
      ob = sb(2840),
      Sb = sb(232);

    function Rb(bb) {
      const {
        t: cb,
        selectedLanguage: sb
      } = (0, Tb.E)(), {
        userContext: Wb
      } = (0, nb.c)(), {
        superRankInfo: ab
      } = Wb, Ub = bb && ((0, Zb.Ac)(ab) || Wb.ranksMayChange) && (0, qb.purchasesAllowed)(), {
        accountId: Ib,
        data: Hb
      } = (0, db.l)(wb.c, Ub);
      if ((0, kb.useEffect)((() => {
          if (Ub) return wb.c.watchAccount(), Ab.c.addRefetchListener("billing", (bb => {
            "reconnected" === bb ? wb.c.refreshAfterReconnect() : wb.c.refresh()
          }))
        }), [Ub]), !Ub || !(0, Zb.Ac)(ab) || null === Hb || Ib !== Wb.whamm) return null;
      const fb = function(bb, cb, sb) {
        const kb = ob.e[(0, ob.b)(ob.e, cb)],
          Wb = void 0 === kb ? void 0 : (0, Sb.e)(bb.entitlements, kb.entitlementId);
        return void 0 === Wb || null === Wb.expiresAt || (0, rb.f)(Wb) <= sb ? null : Wb.willRenew && null === Wb.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Wb.expiresAt, sb)
        } : {
          renews: !1,
          at: (0, rb.f)(Wb)
        }
      }(Hb, ab.tier, Date.now());
      if (null === fb) return null;
      const Mb = fb.renews ? "store:renewsOn" : "store:endsOn";
      return cb(Mb, {
        date: new Date(fb.at).toLocaleDateString((0, Tb.m)(sb.code, Mb), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var vb = sb(1341),
      Fb = sb(1222),
      xb = sb(4600),
      jb = sb(1454),
      pb = sb(3444),
      bc = sb(2158);

    function cc(bb) {
      let {
        showing: cb
      } = bb;
      const {
        t: sb
      } = (0, Tb.E)(), {
        data: kb,
        failed: Wb
      } = (0, db.l)(pb.d, cb);
      return 0 === (null === kb || void 0 === kb ? void 0 : kb.length) || null === kb && !Wb ? null : (0, fb.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, fb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: sb("paymentHistory:title")
        }), null === kb && Wb && (0, fb.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: sb("paymentHistory:loadFailed")
        }), null !== kb && (0, fb.jsx)("ul", {
          className: "PaymentHistoryList",
          children: kb.map((bb => (0, fb.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, fb.jsx)(bc.e, {
              entry: bb
            }), (0, fb.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, fb.jsx)("div", {
                children: (0, bc.i)(sb, bb)
              }), (0, fb.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(bb.at).toLocaleDateString(), "number" === typeof bb.orderId && ` \xb7 ${sb("paymentHistory:order",{orderId:bb.orderId})}`]
              })]
            })]
          }, (0, pb.b)(bb))))
        })]
      })
    }
    var sc = sb(1826),
      kc = sb(1255),
      Wc = sb(1332),
      ac = sb(1302),
      Tc = sb(1753),
      Uc = sb(2775);
    async function Ic() {
      try {
        return function(bb) {
          const cb = new Map;
          for (const {
              store: sb,
              status: kb,
              autoRenewStatus: Wb,
              managementUrl: ab
            }
            of Object.values(bb.subscriptions)) !(0, rb.j)(sb) || (0, rb.n)(kb) || "willNotRenew" === Wb || cb.has(sb) || cb.set(sb, null !== ab && void 0 !== ab ? ab : rb.q[sb]);
          return Array.from(cb, (bb => {
            let [cb, sb] = bb;
            return {
              store: cb,
              managementUrl: sb
            }
          }))
        }(await (0, Tc.m)((0, Uc.e)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (bb) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", bb), null
      }
    }
    var Hc = sb(334),
      fc = sb(2383);
    const Mc = {
      appStore: {
        name: "App Store",
        ...Hc.$b.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Hc.$b.googlePlay
      },
      discord: {
        name: "Discord",
        ...Hc.$b.discord
      }
    };

    function Xc(bb) {
      let {
        warning: cb,
        subscriptions: sb
      } = bb;
      const {
        t: kb
      } = (0, Tb.E)();
      return null !== sb && 0 === sb.length ? (0, fb.jsx)(fb.Fragment, {
        children: kb(cb)
      }) : (0, fb.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [kb(cb), null === sb && (0, fb.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: kb("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== sb && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: kb("auth:deleteAccountStoreSubscriptions")
          }), (0, fb.jsx)(fc.b, {
            className: "DeleteAccountSubtitleLinks",
            links: sb.map((bb => {
              let {
                store: cb,
                managementUrl: sb
              } = bb;
              return {
                ...Mc[cb],
                url: sb
              }
            }))
          })]
        })]
      })
    }

    function nc(bb) {
      let {
        showing: cb
      } = bb;
      const {
        userContext: sb,
        isUserContextUpdating: Wb
      } = (0, nb.c)(), {
        t: ab
      } = (0, Tb.E)(), [Ub, Ib] = (0, kb.useState)(!1), [Hb, Mb] = (0, kb.useState)(null), Xb = (0, kb.useRef)(cb);
      (0, kb.useEffect)((() => (Xb.current = cb, () => {
        Xb.current = !1
      })), [cb]);
      const mb = Wb || Ub;
      async function lb() {
        const bb = function(bb) {
            if ((0, Bb.b)()) return "auth:discordActivityDeleteAccountWarning";
            return bb ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(sb.isLoggedIn()),
          cb = (0, sc.c)(sb.availableUserContextTypes) ? await Ic() : [];
        if (!Xb.current) return kc.d.ok();
        if (!0 !== await Wc.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, Eb.d)(sb.getPlayerName(), !eb.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, fb.jsx)(Xc, {
              warning: bb,
              subscriptions: cb
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return kc.d.ok();
        const kb = await (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${yb.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: hb.d.get("gameState")
        }, {
          retries: 3
        }, sb.getMetricsCookies());
        if (kb.error) return kc.d.error(kb.error);
        if ((0, Bb.b)()) {
          (await ac.k.discordActivity()).exit("User deleted their account")
        }
        return (0, tb.forgetStoredGuestAccount)(sb.whamm), (0, tb.forceGlobalSignOut)(!0), kc.d.ok()
      }
      return (0, fb.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, fb.jsxs)(Qb.G, {
          onClick: async function() {
            if (!Ub) {
              Ib(!0);
              try {
                const bb = await lb(),
                  cb = bb.isError() ? bb.asError().message : null;
                Mb(cb)
              } catch (bb) {
                console.error("Failed to delete account:", bb), Mb(ab("auth:genericDeleteAccountError"))
              }
              Ib(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: mb,
          children: [mb && (0, fb.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, fb.jsx)(ub.d, {})
          }), ab("auth:deleteAccount")]
        }), Hb && (0, fb.jsx)("div", {
          className: "DeleteAccountError",
          children: Hb
        })]
      })
    }
    var mc = sb(3379),
      lc = sb(3392),
      Qc = sb(3388);

    function ec(bb) {
      let {
        showing: cb
      } = bb;
      const {
        t: sb
      } = (0, Tb.E)(), {
        data: kb,
        failed: Wb
      } = (0, db.l)(mc.c, cb), ab = null === kb ? null : (0, mc.e)(kb);
      return (0, fb.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, fb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: sb("settingsMenu:blockedAndIgnoredPlayers")
        }), null === ab && !Wb && (0, fb.jsx)(ub.d, {}), null === ab && Wb && (0, fb.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [sb("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, fb.jsx)(Qb.d, {
            className: "SmallTextLight",
            onClick: () => {
              mc.c.refresh()
            },
            children: sb("general:tryAgain")
          })]
        }), 0 === (null === ab || void 0 === ab ? void 0 : ab.length) && (0, fb.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: sb("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== ab && ab.length > 0 && (0, fb.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: ab.map((bb => {
            let {
              name: cb,
              exclusion: kb
            } = bb;
            const Wb = Qc.f[kb];
            return (0, fb.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, fb.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: cb
              }), (0, fb.jsx)(Qb.h, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, lc.g)(Wb, cb, {
                    chatMessage: null
                  })
                },
                children: sb(Qc.i[Wb].text)
              })]
            }, cb)
          }))
        })]
      })
    }
    const Cc = (0, kb.memo)((function(bb) {
      var cb;
      let {
        showing: sb,
        inGame: Wb
      } = bb;
      const {
        t: Ib,
        selectedLanguage: Hb
      } = (0, Tb.E)(), {
        hideSocialLocationFrom: Mb
      } = (0, hb.p)(["hideSocialLocationFrom"]), mb = (0, Xb.b)(), {
        userContext: lb,
        isUserContextUpdating: Cb
      } = (0, nb.c)(), [Nb, Vb] = (0, kb.useState)(null !== (cb = lb.getPlayerName()) && void 0 !== cb ? cb : ""), [Jb, gb] = (0, kb.useState)(null), {
        purchasing: db,
        outcome: Ab,
        purchase: wb
      } = (0, Pb.b)("/super-rank-welcome"), rb = (0, Zb.hc)((0, Tb.m)(Hb.code, "general:timeLeft"), lb.superRankInfo), ob = Rb(sb), Sb = rb ? Ib("general:timeLeft", {
        time: rb
      }) : ob, [pb, bc] = (0, kb.useState)(!1), [sc, kc] = (0, kb.useState)(!1), Wc = (0, kb.useRef)(null), ac = (0, kb.useRef)(null), Tc = (0, Gb.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Uc = null === Tc, Ic = null !== Tc && void 0 !== Tc ? Tc : [], Hc = lb !== tb.NULL_USER_CONTEXT && !lb.isLoggedIn(), fc = Hc && 0 !== (null === Tc || void 0 === Tc ? void 0 : Tc.length), [Mc, Xc] = (0, kb.useState)([]), [mc, lc] = (0, kb.useState)(!1), Qc = lb.playerHasRank("youtuber"), Cc = (0, kb.useCallback)((() => Kb.b.getPlayerProfile(lb, {
        lowerCaseName: lb.getPlayerName().toLowerCase()
      }).then((bb => {
        Xc(bb.socialLinks)
      })).catch((bb => {
        console.error("Failed to refresh social links", bb)
      }))), [lb]);

      function Vc(bb) {
        bb !== Nb && ((0, Eb.q)(bb) ? (bb = (0, Eb.t)(bb), gb("Only letters, numbers, and _")) : gb(null), Wc.current && (Wc.current.value = bb), Vb(bb))
      }
      return (0, kb.useEffect)((() => (!0 === sb ? (clearInterval(ac.current), ac.current = setInterval(mb, 1e3)) : clearInterval(ac.current), () => {
        clearInterval(ac.current)
      })), [sb, mb]), (0, kb.useEffect)((() => {
        var bb;
        Vb(null !== (bb = lb.getPlayerName()) && void 0 !== bb ? bb : "")
      }), [lb]), (0, kb.useEffect)((() => {
        if (!sb || !Qc || Cb) return;
        let bb = !1;
        return lc(!0), Xc([]), Kb.b.getPlayerProfile(lb, {
          lowerCaseName: lb.getPlayerName().toLowerCase()
        }).then((cb => {
          bb || Xc(cb.socialLinks)
        })).catch((bb => {
          console.error("Failed to load social links", bb)
        })).finally((() => {
          bb || lc(!1)
        })), () => {
          bb = !0
        }
      }), [sb, Qc, Cb, lb]), (0, fb.jsxs)("div", {
        className: ab()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Wb
        }),
        children: [Wb && (0, fb.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Ib("settingsMenu:accountSettingsInGameWarning")
        }), (0, fb.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, fb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Ib("homePage:discordNamePopupTitle"), (0, fb.jsxs)(Db.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, ib.k)({
                name: lb.getPlayerName()
              }),
              onClick: () => {
                hb.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, fb.jsx)(Ub.b, {
                name: "arrow-up-right-from-square"
              }), " ", Ib("profileCard:viewProfile")]
            })]
          }), (0, fb.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, fb.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [eb.featureFlags.canChangeName && (0, fb.jsx)(Lb.c, {
                className: "EnterName",
                placeholderText: Ib("homePage:enterName"),
                maxLength: Eb.l,
                defaultValue: Nb,
                onValueChange: bb => {
                  Vc(bb)
                },
                forcedText: pb || !eb.featureFlags.canChangeName ? Nb : null,
                blurOnEnter: !0,
                domRef: Wc
              }), (0, fb.jsx)(Qb.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Vc((0, Eb.h)())
                },
                children: (0, fb.jsx)(Ub.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !eb.featureFlags.canChangeName && (0, fb.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Eb.d)(Nb, !eb.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, fb.jsx)(Qb.d, {
              className: "ChooseNameButton",
              disabled: pb || Nb === lb.getPlayerName(),
              onClick: () => {
                Nb.length < Eb.n ? gb(Ib("homePage:changeNameMinLengthError", {
                  length: Eb.n
                })) : Nb.length > Eb.l ? gb(Ib("homePage:changeNameMaxLengthError", {
                  length: Eb.l
                })) : (bc(!0), gb(null), async function(bb, cb, sb, kb) {
                  const Wb = await (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${yb.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: bb
                  }, {
                    retries: 3
                  }, cb.getMetricsCookies()).catch((bb => (console.error("Bad response from the server when trying to update name:", bb), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Wb.err ? (console.error("Error when trying to get with new name from DB", Wb.err), kb(Wb.err)) : !0 === Wb.nameExists ? kb("Name is already taken") : sb(bb)
                }(Nb, lb, (bb => {
                  lb.setPlayerName(bb), bc(!1)
                }), (bb => {
                  gb(bb), bc(!1)
                })))
              },
              children: Ib("general:choose")
            })]
          }), Jb && (0, fb.jsx)("div", {
            className: "ChooseAccNameError",
            children: Jb
          })]
        }), (0, fb.jsx)(Yb.d, {
          label: (() => {
            if ((0, Fb.k)(Mb)) {
              const bb = (0, Tb.m)(Hb.code, "general:timeLeft"),
                cb = (0, Zb.db)(bb, Date.now(), Mb + Fb.j);
              return `${Ib("settingsMenu:hideSocialLocation")} (${Ib("general:timeLeft",{time:cb})})`
            }
            return Ib("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const bb = !(0, Fb.k)(Mb);
            (0, jb.reportAnalyticsClick)({
              id: "social.hide_location",
              value: bb ? "on" : "off"
            }), kc(!0), Kb.b.setHideSocialLocation(lb, bb).then((() => {
              hb.d.set({
                hideSocialLocationFrom: bb ? Date.now() : null
              })
            })).finally((() => {
              kc(!1)
            }))
          },
          checked: (0, Fb.k)(Mb),
          disabled: sc
        }), Qc && (0, fb.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, fb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Ib("settingsMenu:socialLinks")
          }), mc && (0, fb.jsx)(ub.d, {}), !mc && (0, fb.jsx)(xb.d, {
            socialLinks: Mc,
            editable: !0,
            userContext: lb,
            onLinksUpdated: Cc
          })]
        }), (0, fb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Ib(fc ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Uc && (0, fb.jsx)(ub.d, {}), !Uc && 0 === Ic.length && (0, fb.jsx)("div", {
            className: "NoLoginOptions",
            children: Ib("auth:noLoginOptions")
          }), !Uc && Ic.length > 0 && "crazygames" !== Bb.r && (0, fb.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Ic
          }), !Uc && Ic.length > 0 && "crazygames" === Bb.r && (0, fb.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Ic[0], Ic.length > 1 && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, fb.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Ib("auth:legacyLoginOptions")
                }), (0, fb.jsx)(vb.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Ib("auth:legacyLoginOptionsInfo")
                })]
              }), (0, fb.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Ic.slice(1)
              })]
            })]
          }), eb.featureFlags.useLogin && (null !== lb.loggedInInfo || lb.isLoggedIn()) && (0, fb.jsxs)(fb.Fragment, {
            children: [(0, fb.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, fb.jsxs)(Qb.G, {
              onClick: () => {
                (0, tb.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, fb.jsx)(Ub.b, {
                name: "right-from-bracket"
              }), Ib("auth:signOut")]
            })]
          })]
        }), !lb.playerHasRank("super") && (0, qb.purchasesAllowed)() && (0, fb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, fb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, fb.jsx)(Ub.b, {
              name: "bolt"
            }), Ib("homePage:superRank")]
          }), (0, fb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, fb.jsxs)(Qb.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zb.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fb.jsx)(Ub.b, {
                name: "bolt"
              }), Ib("homePage:getSuperRank")]
            }), (0, fb.jsxs)(Qb.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zb.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fb.jsx)(Ub.b, {
                name: "bolt"
              }), Ib("homePage:giftSuperRank")]
            })]
          })]
        }), lb.playerHasRank("super") && (0, fb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, fb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, fb.jsx)(Ub.b, {
              name: "bolt"
            }), Ib("homePage:superRank"), Sb && (0, fb.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Sb, ")"]
            })]
          }), (0, qb.purchasesAllowed)() && (0, fb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Zb.Ac)(lb.superRankInfo) && (0, fb.jsxs)(Qb.n, {
              className: "AccountSettingsSuperRankProlong",
              loading: db,
              onClick: () => {
                wb(Ob.i.id, null)
              },
              children: [(0, fb.jsx)(Ub.b, {
                name: "bolt"
              }), Ib("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Ob.i.product.days,
                price: Ob.i.price
              })]
            }), (0, fb.jsxs)(Qb.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zb.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, fb.jsx)(Ub.b, {
                name: "bolt"
              }), Ib("homePage:giftSuperRank")]
            })]
          }), Ab && (0, fb.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Ib(Ab.translationKey)
          })]
        }), (0, fb.jsx)(cc, {
          showing: sb
        }), eb.featureFlags.useSocialFeatures && (0, fb.jsx)(ec, {
          showing: sb
        }), (0, fb.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, fb.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, fb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Ib(Nc(Hc, fc))
            }), (0, Bb.b)() && (0, fb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Ib("auth:discordActivityKickWarning")
            }), (0, fb.jsx)(nc, {
              showing: sb
            })]
          }), (0, fb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Ib("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Nc(bb, cb) {
      return bb ? cb ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Vc = sb(8829),
      Lc = sb(2889),
      uc = sb(1258),
      Yc = sb(1412);
    const hc = (0, kb.memo)((function(bb) {
        let {
          inGame: cb
        } = bb;
        const {
          t: sb,
          selectedLanguage: kb
        } = (0, Tb.E)(), {
          clientEscMenuOptions: Wb,
          showDebugOverlay: ab
        } = (0, hb.p)(["clientEscMenuOptions", "showDebugOverlay"]), Ub = (0, mb.d)("hideCoordinates");
        let Ib = "settingsMenu:showCoordinates",
          Hb = "settingsMenu:showChunkCoordinates";

        function Mb(bb) {
          const cb = new Intl.DisplayNames([bb], {
            type: "language"
          }).of(bb);
          return cb.charAt(0).toUpperCase() + cb.slice(1)
        }
        return Ub && (Ib = "settingsMenu:showCoordinatesHidden", Hb = "settingsMenu:showChunkCoordinatesHidden"), (0, fb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [cb && eb.featureFlags.canUseInviteLinks && (0, fb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, fb.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: sb("settingsMenu:inviteLink")
            }), (0, fb.jsx)(Vc.h, {})]
          }), (0, fb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, fb.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: sb("settingsMenu:language")
            }), (0, fb.jsx)(Lc.e, {
              options: Object.entries(Tb.g).map((bb => {
                let [cb, sb] = bb;
                return {
                  label: (0, fb.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, fb.jsx)("img", {
                      src: sb.flagImg,
                      alt: "flag"
                    }), (0, fb.jsxs)("span", {
                      children: [Mb(cb), " ", (0, fb.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", cb, ")"]
                      })]
                    })]
                  }),
                  value: cb
                }
              })),
              value: kb.code,
              onChange: bb => {
                uc.e.get().setCurrentLanguage(bb.value)
              }
            })]
          }), !(0, eb.isMobileApp)() && (0, Yc.h)() && eb.featureFlags.useForceRotateForceFullscreenOverlay && (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:disableFullscreenMode"),
            checked: Wb.disableFullscreen,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                disableFullscreen: bb
              })
            }
          }), (0, fb.jsx)(Yb.d, {
            label: sb(Ib),
            checked: Wb.showCoordinates,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showCoordinates: bb
              })
            },
            disabled: Ub
          }), (0, fb.jsx)(Yb.d, {
            label: sb(Hb),
            checked: Wb.showChunkCoordinates,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showChunkCoordinates: bb
              })
            },
            disabled: Ub
          }), (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:showFps"),
            checked: Wb.showFPS,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showFPS: bb
              })
            }
          }), (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:disableBunnyHopping"),
            checked: Wb.disableBunnyHopping,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                disableBunnyHopping: bb
              })
            }
          }), (0, ac.w)() && (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:showChat"),
            checked: Wb.showChat,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showChat: bb
              })
            }
          }), (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:showDebugOverlay"),
            checked: ab,
            onClick: bb => {
              hb.d.set({
                showDebugOverlay: bb
              })
            }
          }), eb.featureFlags.useSocialFeatures && (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:showFriendOnlineToasts"),
            checked: Wb.showFriendOnlineToasts,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showFriendOnlineToasts: bb
              })
            }
          }), (0, fb.jsx)(Yb.d, {
            label: sb("settingsMenu:showNewItemIndicator"),
            checked: Wb.showNewItemIndicator,
            onClick: bb => {
              hb.d.setClientEscMenuOptions({
                showNewItemIndicator: bb
              })
            }
          })]
        })
      })),
      Jc = (0, kb.memo)((function() {
        const {
          t: bb
        } = (0, Tb.E)(), {
          soundVolume: cb,
          musicVolume: sb
        } = (0, hb.p)(["soundVolume", "musicVolume"]);
        return (0, fb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, fb.jsx)(Yb.i, {
            name: bb("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: sb,
            onChange: bb => {
              hb.d.set({
                musicVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          }), (0, fb.jsx)(Yb.i, {
            name: bb("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: cb,
            onChange: bb => {
              hb.d.set({
                soundVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          })]
        })
      }));
    var gc = sb(718),
      Bc = sb(1423),
      tc = sb(3452),
      yc = sb(8836),
      Pc = sb(3281);
    const Dc = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Ec() {
      const {
        t: bb
      } = (0, Tb.E)(), cb = (0, Pc.e)(), {
        mobilePushNotificationsCanAsk: sb
      } = (0, hb.p)(["mobilePushNotificationsCanAsk"]), [Wb, ab] = (0, kb.useState)(null), [Ub, Ib] = (0, kb.useState)(!1), [Hb, Mb] = (0, kb.useState)(null), [Xb, nb] = (0, kb.useState)(!1), mb = (0, kb.useCallback)((() => {
        (0, tc.c)().then((bb => {
          cb.current && (ab(bb), Ib(!1))
        })).catch((bb => {
          console.error("Failed to load push notification targets:", bb), cb.current && Ib(!0)
        }))
      }), [cb]), lb = (0, kb.useCallback)((() => {
        (0, yc.c)().then((bb => {
          cb.current && Mb((() => bb))
        }))
      }), [cb]);
      (0, kb.useEffect)((() => {
        mb()
      }), [mb]), (0, kb.useEffect)((() => {
        lb()
      }), [lb, sb]), (0, Bc.f)(tc.h, mb);
      const eb = null === Wb ? [] : Object.keys(Dc).filter((bb => Wb[bb] > 0));
      return (0, fb.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, fb.jsx)("div", {
          className: "SliderText",
          children: bb("notificationSettings:pushNotifications")
        }), null === Wb && Ub && (0, fb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsLoadFailed")
        }), null !== Wb && 0 === eb.length && (0, fb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsNone")
        }), eb.length > 0 && (0, fb.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: eb.map((cb => {
            var sb;
            return (0, fb.jsx)("li", {
              children: bb(Dc[cb], {
                count: null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb[cb]) && void 0 !== sb ? sb : 0
              })
            }, cb)
          }))
        }), null !== Hb && (0, fb.jsx)(Qb.d, {
          className: "PushNotificationSettingsButton",
          loading: Xb,
          onClick: () => {
            nb(!0), Hb().catch((bb => {
              console.error("Failed to turn on push notifications:", bb)
            })).finally((() => {
              cb.current && (nb(!1), lb())
            }))
          },
          children: bb("notificationSettings:pushTurnOn")
        })]
      })
    }
    const ic = {
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
      Oc = (0, kb.memo)((function() {
        const {
          t: bb
        } = (0, Tb.E)(), {
          clientEscMenuOptions: cb
        } = (0, hb.p)(["clientEscMenuOptions"]);
        return (0, fb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, fb.jsx)(Yb.g, {
            label: bb("notificationSettings:friendRequests"),
            options: gc.e.map((cb => ({
              value: cb,
              label: bb(ic[cb].label)
            }))),
            value: cb.friendRequestNotifications,
            onChange: bb => {
              hb.d.setClientEscMenuOptions({
                friendRequestNotifications: bb
              })
            },
            circleInfoText: (0, fb.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: gc.e.map((cb => (0, fb.jsxs)("div", {
                children: [(0, fb.jsx)("b", {
                  children: bb(ic[cb].label)
                }), ": ", bb(ic[cb].info)]
              }, cb)))
            })
          }), (0, fb.jsx)(Ec, {})]
        })
      }));
    var Gc = sb(4241),
      Kc = sb(223),
      Zc = sb(312),
      zc = sb(6328),
      qc = sb(3222),
      dc = sb(8840),
      Ac = sb(628),
      wc = sb(26);
    var rc = sb(649),
      oc = sb(37),
      Sc = sb(4134);
    const Rc = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function vc(bb) {
      return Rc.has(bb) ? Cb.gameBridge.lookup("yN", null) : null
    }

    function Fc(bb) {
      if (!(0, Ac.L)(hb.d.get("clientEscMenuOptions")[bb])) return hb.d.get("clientEscMenuOptions")[bb];
      const cb = vc(bb);
      return null !== cb ? cb[Rc.get(bb)] : oc.h.getItem(bb)
    }

    function xc(bb, cb) {
      if ("useTouchControls" === bb) return void(0, Sc.e)(cb);
      bb in hb.d.get("clientEscMenuOptions") && hb.d.setClientEscMenuOptions({
        [bb]: cb
      });
      const sb = vc(bb);
      null !== sb && Cb.gameBridge.send("setChunkAddDistance", {
        ...sb,
        [Rc.get(bb)]: cb
      }), oc.h.setItem(bb, cb)
    }
    var jc = sb(4167),
      pc = sb(8847),
      bs = sb(8849),
      cs = sb(4239);

    function ss(bb) {
      var cb, Wb, Ub, Ib;
      let {
        minChunkAddDist: Hb,
        getValue: Mb,
        onChange: Xb,
        setApplySettingsCallback: nb
      } = bb;
      const {
        t: lb
      } = (0, Tb.E)(), {
        clientEscMenuOptions: Qb
      } = (0, hb.p)(["clientEscMenuOptions", "showDistantNametags"]), Cb = (0, kb.useRef)(Mb("showFog")), Nb = (0, kb.useRef)(Qb.antiAliasing), Vb = (0, kb.useRef)(Qb.useWebGpu), [Lb, ub] = (0, kb.useState)(null), [gb, Bb] = (0, kb.useState)((() => (0, qc.e)(eb.featureFlags.settings.canUseShaderPacks))), [tb] = (0, kb.useState)((() => hb.d.isWebGpuDefaultOff())), [yb] = (0, kb.useState)(Zc.g);
      (0, kb.useEffect)((() => {
        let bb = !1;
        return (0, eb.hasUsableWebGpuAdapter)().then((cb => {
          bb || ub(cb)
        })), (0, qc.j)(eb.featureFlags.settings.canUseShaderPacks) && (0, zc.d)().then((async cb => {
          const kb = null !== cb && await async function(bb) {
            const [{
              isShaderPackActive: cb
            }, {
              loadPageShaderPackCompiler: kb
            }] = await Promise.all([sb.e(127).then((() => sb(6321))), Promise.all([sb.e(74), sb.e(131), sb.e(130)]).then((() => sb(6276)))]);
            return cb(bb, await kb())
          }(cb);
          bb || Bb(kb)
        })), () => {
          bb = !0
        }
      }), []);
      const Pb = function(bb, cb, sb, kb, Wb) {
          return (0, dc.c)(sb, kb) && !0 === cb ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== cb ? "settingsMenu:newWebGpu" : Wb ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: bb && !1 !== cb,
            disabled: !0 !== cb
          }
        }(Qb.useWebGpu, Lb, gb, tb, yb),
        Db = (Qb.useWebGpu || (0, dc.c)(gb, tb)) && gb && !0 === Lb,
        Eb = (0, mb.d)("lightingOverride"),
        ib = !(0, Ac.L)(Eb);
      let Ob = "settingsMenu:enableLighting";
      ib && (Ob = Eb ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Gb = bb => {
          var cb, sb, kb;
          const Wb = null !== (cb = bb.showFog) && void 0 !== cb ? cb : Mb("showFog"),
            ab = null !== (sb = bb.antiAliasing) && void 0 !== sb ? sb : Qb.antiAliasing,
            Tb = null !== (kb = bb.useWebGpu) && void 0 !== kb ? kb : Qb.useWebGpu,
            Ub = !rc.s && Wb !== Cb.current || ab !== Nb.current || Tb !== Vb.current;
          nb(Ub ? () => Yb.m : null)
        },
        Kb = (0, mb.d)("fogChunkDistanceOverride"),
        Zb = (0, mb.d)("fogBlockDistanceOverride"),
        zb = !(0, Ac.L)(Kb) || !(0, Ac.L)(Zb),
        qb = zb ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [db, Ab] = (0, Gc.f)(Hb),
        [wb, rb] = (0, cs.b)(Hb),
        ob = lb("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Sb = wb < db,
        Rb = Math.min(null !== (cb = Mb("chunkHorizAddDist")) && void 0 !== cb ? cb : Hb[0], wb),
        vb = !zb && function(bb, cb) {
          return !0 === bb.showFog && bb.fogChunkDistance > cb
        }(Qb, Rb);
      return (0, fb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, fb.jsx)(Yb.i, {
          name: lb("settingsMenu:horizontalChunkLoadDistance"),
          min: Hb[0],
          max: db,
          selectableMax: wb,
          cappedNote: ob,
          step: 1,
          initValue: Rb,
          onChange: bb => {
            !0 === Mb("showFog") && bb < Mb("fogChunkDistance") && Xb("fogChunkDistance", bb), Xb("chunkHorizAddDist", bb), wc.j.QQ("updatedChunkLoadDist")
          },
          circleInfoText: lb("settingsMenu:chunkLoadDistanceInfo")
        }), (0, fb.jsx)(Yb.i, {
          name: lb("settingsMenu:verticalChunkLoadDistance"),
          min: Hb[1],
          max: Ab,
          selectableMax: rb,
          cappedNote: Sb ? void 0 : ob,
          step: 1,
          initValue: Math.min(null !== (Wb = Mb("chunkVertAddDist")) && void 0 !== Wb ? Wb : Hb[1], rb),
          onChange: bb => {
            Xb("chunkVertAddDist", bb), wc.j.QQ("updatedChunkLoadDist")
          },
          circleInfoText: lb("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:chunkFadeIn"),
          checked: Qb.chunkFadeIn,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              chunkFadeIn: bb
            })
          },
          circleInfoText: lb("settingsMenu:chunkFadeInInfo")
        }), Jb.devTools.supports("chunkBorders") && (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:showChunkBorders"),
          checked: Qb.showChunkBorders,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              showChunkBorders: bb
            })
          },
          circleInfoText: lb("settingsMenu:showChunkBordersInfo")
        }), (0, fb.jsx)(Yb.d, {
          label: lb(Ob),
          checked: Qb.enableLighting,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              enableLighting: bb
            })
          },
          disabled: ib
        }), (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fb.jsx)(Yb.d, {
            label: lb(qb),
            checked: Qb.showFog,
            onClick: bb => {
              Gb({
                showFog: bb
              }), hb.d.setClientEscMenuOptions({
                showFog: bb
              })
            },
            disabled: zb,
            className: ab()({
              SettingBoxWarning: vb
            })
          }), (0, fb.jsx)(Yb.i, {
            name: lb("settingsMenu:fogChunkDistance"),
            min: Hb[0],
            max: Kc.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Ub = Qb.fogChunkDistance) && void 0 !== Ub ? Ub : Hb[0],
            onChange: bb => {
              hb.d.setClientEscMenuOptions({
                fogChunkDistance: bb
              }), wc.j.QQ("fogChunkDistanceChanged", bb)
            },
            circleInfoText: lb("settingsMenu:fogChunkDistanceInfo"),
            disabled: zb || !1 === Mb("showFog"),
            className: ab()({
              SettingBoxWarning: vb
            })
          }), vb && (0, fb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: lb("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !rc.s && (0, fb.jsx)(Yb.d, {
          label: lb(Db ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Db && Qb.disableTexAtlas,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              disableTexAtlas: bb
            })
          },
          circleInfoText: lb("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Db
        }), (0, fb.jsx)(Yb.i, {
          name: lb("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Qb.cameraFOV,
          onChange: bb => {
            hb.d.setClientEscMenuOptions({
              cameraFOV: bb
            })
          }
        }), (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:disableViewBobbing"),
          checked: Qb.disableBobbing,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              disableBobbing: bb
            })
          },
          circleInfoText: lb("settingsMenu:disableViewBobbingInfo")
        }), (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:antiAliasing"),
          checked: Qb.antiAliasing,
          onClick: bb => {
            Gb({
              antiAliasing: bb
            }), (0, jc.d)("antiAliasing"), hb.d.setClientEscMenuOptions({
              antiAliasing: bb
            })
          },
          circleInfoText: lb("settingsMenu:antiAliasingInfo")
        }), (0, fb.jsx)(Yb.i, {
          name: lb("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Ib = Qb.pixelScale) && void 0 !== Ib ? Ib : 1,
          onChange: bb => {
            (bb !== hb.d.get("clientEscMenuOptions").pixelScale || (0, bs.p)()) && (0, jc.d)("pixelScale"), hb.d.setClientEscMenuOptions({
              pixelScale: bb
            })
          },
          circleInfoText: lb("settingsMenu:pixelScaleInfo"),
          format: bb => `${bb}x`
        }), (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:pixelSmoothing"),
          checked: Qb.pixelSmoothing,
          onClick: bb => {
            hb.d.setClientEscMenuOptions({
              pixelSmoothing: bb
            })
          },
          circleInfoText: lb("settingsMenu:pixelSmoothingInfo")
        }), rc.s && (0, fb.jsx)(Yb.d, {
          label: lb("settingsMenu:distantNametags"),
          checked: (0, pc.e)(),
          onClick: bb => {
            hb.d.set({
              showDistantNametags: bb
            })
          },
          circleInfoText: lb("settingsMenu:distantNametagsInfo")
        }), (0, fb.jsx)(Yb.d, {
          label: lb(Pb.translationKey),
          checked: Pb.checked,
          onClick: bb => {
            Gb({
              useWebGpu: bb
            }), hb.d.setClientEscMenuOptions({
              useWebGpu: bb
            })
          },
          circleInfoText: lb("settingsMenu:newWebGpuInfo"),
          disabled: Pb.disabled
        })]
      })
    }
    var ks = sb(4161),
      Ws = sb(8478),
      as = sb(8867),
      Ts = sb(8485),
      Us = sb(8871);
    const Is = {
        color: 16777215,
        name: "white"
      },
      Hs = {
        color: 0,
        name: "black"
      },
      fs = [Is, {
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
      }, Hs],
      Ms = [Hs, Is];

    function Xs(bb) {
      return `${bb} px`
    }

    function ns(bb) {
      return `${bb}%`
    }

    function ms(bb) {
      let {
        label: cb,
        value: sb,
        swatches: kb,
        onChange: Wb
      } = bb;
      const {
        t: Ub
      } = (0, Tb.E)(), Ib = !kb.some((bb => bb.color === sb));
      return (0, fb.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, fb.jsx)("div", {
          className: "SliderText",
          children: cb
        }), (0, fb.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": cb,
          children: [kb.map((bb => {
            let {
              color: cb,
              name: kb
            } = bb;
            return (0, fb.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": cb === sb,
              "aria-label": Ub(`crosshairSettings:color_${kb}`),
              "data-pad-focusable": !0,
              className: ab()("CrosshairSwatch", {
                Selected: cb === sb
              }),
              style: {
                background: (0, Us.n)(cb)
              },
              onClick: () => {
                Wb(cb)
              }
            }, cb)
          })), (0, fb.jsx)("label", {
            className: ab()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Ib
            }),
            style: Ib ? {
              background: (0, Us.n)(sb)
            } : void 0,
            title: Ub("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, fb.jsx)("input", {
              type: "color",
              "aria-label": Ub("crosshairSettings:customColor"),
              value: (0, Us.n)(sb),
              onChange: bb => {
                const cb = (0, Us.q)(bb.target.value);
                null !== cb && Wb(cb)
              }
            })
          })]
        })]
      })
    }

    function ls(bb) {
      let {
        settings: cb,
        onChange: sb
      } = bb;
      const {
        t: kb
      } = (0, Tb.E)(), Wb = (bb, kb) => {
        sb((0, Us.u)(cb, bb, kb))
      }, ab = function(bb, sb) {
        let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xs;
        const {
          min: ab,
          max: Tb,
          step: Ub
        } = Us.c[bb];
        return (0, fb.jsx)(Yb.i, {
          name: sb,
          min: ab,
          max: Tb,
          step: Ub,
          initValue: cb[bb],
          format: kb,
          onChange: cb => {
            Wb(bb, cb)
          }
        }, bb)
      }, Ub = ["lines", "dot", "circle"].filter((bb => cb[bb])), Ib = (bb, sb, kb) => (0, fb.jsx)(Yb.d, {
        label: sb,
        checked: cb[bb],
        disabled: 1 === Ub.length && Ub[0] === bb,
        circleInfoText: kb,
        onClick: cb => {
          Wb(bb, cb)
        }
      }, bb), Hb = "shapes" === cb.style;
      return (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)(Yb.g, {
          label: kb("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: kb("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: kb("crosshairSettings:styleShapes")
          }],
          value: cb.style,
          onChange: bb => {
            Wb("style", bb)
          }
        }), (0, fb.jsx)(ms, {
          label: kb("crosshairSettings:color"),
          value: cb.color,
          swatches: fs,
          onChange: bb => {
            Wb("color", bb)
          }
        }), ab("opacity", kb("crosshairSettings:opacity"), ns), !Hb && ab("size", kb("crosshairSettings:size"), ns), Hb && (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Ib("lines", kb("crosshairSettings:lines")), cb.lines && ab("lineLength", kb("crosshairSettings:lineLength")), cb.lines && ab("lineThickness", kb("crosshairSettings:lineThickness")), cb.lines && ab("gap", kb("crosshairSettings:gap")), cb.lines && Ib("tStyle", kb("crosshairSettings:tStyle"))]
        }), Hb && (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Ib("dot", kb("crosshairSettings:dot")), cb.dot && ab("dotSize", kb("crosshairSettings:dotSize"))]
        }), Hb && (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Ib("circle", kb("crosshairSettings:circle")), cb.circle && ab("circleRadius", kb("crosshairSettings:circleRadius")), cb.circle && ab("circleThickness", kb("crosshairSettings:circleThickness"))]
        }), (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ab("outline", kb("crosshairSettings:outline"), (bb => bb > 0 ? Xs(bb) : kb("crosshairSettings:off"))), cb.outline > 0 && (0, fb.jsx)(ms, {
            label: kb("crosshairSettings:outlineColor"),
            value: cb.outlineColor,
            swatches: Ms,
            onChange: bb => {
              Wb("outlineColor", bb)
            }
          })]
        }), Ib("growOnClick", kb("crosshairSettings:growOnClick")), Hb && Ib("forGuns", kb("crosshairSettings:forGuns"), kb("crosshairSettings:forGunsInfo"))]
      })
    }
    var Qs = sb(89),
      es = sb(1278),
      Cs = sb(8873),
      Ns = sb(8875),
      Vs = sb(8878),
      Ls = sb(8886);
    const us = ["sky", "grass", "stone", "sand", "snow", "night"],
      Ys = "4rem";

    function hs(bb) {
      return {
        backgroundImage: `url(${bb})`,
        backgroundSize: `${Ys} ${Ys}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function gs(bb) {
      return {
        ...(() => {
          switch (bb) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return hs(Cs);
            case "stone":
              return hs(Ns);
            case "sand":
              return hs(Vs);
            case "snow":
              return hs(Ls);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Bs(bb) {
      return Object.freeze({
        ...Us.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...bb
      })
    }
    const ts = [{
        id: "default",
        settings: Us.g
      }, {
        id: "cross",
        settings: Bs({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Bs({
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
        settings: Bs({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Bs({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Bs({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Bs({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Bs({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      ys = ["growOnClick", "forGuns"];
    var Ps = sb(8888);

    function Ds(bb) {
      let {
        label: cb,
        selected: sb,
        onClick: kb,
        className: Wb,
        style: Tb,
        children: Ub
      } = bb;
      return (0, fb.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": sb,
        title: cb,
        "aria-label": cb,
        "data-pad-focusable": !0,
        className: ab()("CrosshairBackdropSwatch", Wb, {
          Selected: sb
        }),
        style: Tb,
        onClick: kb,
        children: Ub
      })
    }

    function Es(bb) {
      let {
        backdrop: cb,
        onChange: sb,
        game: kb
      } = bb;
      const {
        t: Wb
      } = (0, Tb.E)();
      return (0, fb.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Wb("crosshairSettings:background"),
        children: [kb && (0, fb.jsx)(Ds, {
          label: Wb("crosshairSettings:bg_game"),
          selected: kb.selected,
          onClick: kb.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, fb.jsx)(Ub.b, {
            name: "cube"
          })
        }), us.map((bb => (0, fb.jsx)(Ds, {
          label: Wb(`crosshairSettings:bg_${bb}`),
          selected: !(null !== kb && void 0 !== kb && kb.selected) && bb === cb,
          style: gs(bb),
          onClick: () => {
            sb(bb)
          }
        }, bb)))]
      })
    }

    function is(bb) {
      let {
        settings: cb,
        touch: sb,
        backdrop: kb,
        onChange: Wb
      } = bb;
      const {
        t: Ub
      } = (0, Tb.E)(), Ib = function(bb) {
        var cb;
        return null !== (cb = ts.find((cb => (0, Us.r)(cb.settings, bb, ys)))) && void 0 !== cb ? cb : null
      }(cb);
      return (0, fb.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Ub("crosshairSettings:presets"),
        children: ts.map((bb => {
          const Tb = (null === Ib || void 0 === Ib ? void 0 : Ib.id) === bb.id;
          return (0, fb.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Tb,
            "data-pad-focusable": !0,
            className: ab()("CrosshairPreset", {
              Selected: Tb
            }),
            onClick: () => {
              Wb(function(bb, cb) {
                return {
                  ...cb.settings,
                  growOnClick: bb.growOnClick,
                  forGuns: bb.forGuns
                }
              }(cb, bb))
            },
            children: [(0, fb.jsx)("div", {
              className: "CrosshairPresetStage",
              style: gs(kb),
              children: (0, fb.jsx)(Ps.b, {
                settings: bb.settings,
                touch: sb,
                inPreview: !0
              })
            }), (0, fb.jsx)("div", {
              className: "CrosshairPresetName",
              children: Ub(`crosshairSettings:preset_${bb.id}`)
            })]
          }, bb.id)
        }))
      })
    }
    var Os = sb(1657);

    function Gs(bb, cb) {
      const [sb, Wb] = (0, kb.useState)(!1), ab = () => {
        Wb(!1)
      }, [Tb, Ub] = (0, kb.useState)(!1), Ib = (0, kb.useRef)({
        growOnClick: bb.growOnClick,
        forGuns: bb.forGuns
      });
      (0, kb.useEffect)((() => {
        const cb = Ib.current;
        Ib.current = {
          growOnClick: bb.growOnClick,
          forGuns: bb.forGuns
        }, (bb.growOnClick && !cb.growOnClick || bb.forGuns && !cb.forGuns) && Ub(!0)
      }), [bb.growOnClick, bb.forGuns]), (0, kb.useEffect)((() => {
        if (!Tb) return;
        const bb = setTimeout((() => {
          Ub(!1)
        }), 600);
        return () => {
          clearTimeout(bb)
        }
      }), [Tb]);
      const Hb = sb || Tb;
      return {
        view: {
          pressed: Hb,
          spread: Hb && bb.forGuns && !bb.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: bb => {
            !bb.target.closest(cb) && (0, Os.c)(bb.currentTarget, bb.pointerId) && Wb(!0)
          },
          onPointerUp: ab,
          onPointerCancel: ab,
          onLostPointerCapture: ab
        }
      }
    }

    function Ks(bb) {
      let {
        settings: cb,
        touch: sb,
        backdrop: kb,
        className: Wb,
        children: Tb,
        label: Ub
      } = bb;
      const Ib = Gs(cb, ".CrosshairStageControls");
      return (0, fb.jsxs)("div", {
        className: ab()("CrosshairStage", Wb),
        style: gs(kb),
        ...Ib.handlers,
        children: [(0, fb.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Ub,
          children: (0, fb.jsx)(Ps.b, {
            settings: cb,
            touch: sb,
            inPreview: !0,
            ...Ib.view
          })
        }), Tb]
      })
    }
    const Zs = "crosshairFullScreen";

    function zs(bb) {
      let {
        settings: cb,
        touch: sb,
        backdrop: Wb,
        onBackdrop: Ib,
        inGame: Hb,
        onChange: Mb,
        onClose: Xb
      } = bb;
      const {
        t: nb
      } = (0, Tb.E)(), mb = (0, kb.useRef)(null);
      (0, es.o)("popup", mb, Xb),
      function(bb) {
        const cb = (0, kb.useRef)(bb);
        cb.current = bb, (0, kb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Zs]: !0
          }, "");
          let bb = !1;
          const sb = () => {
            bb = !0, cb.current()
          };
          return window.addEventListener("popstate", sb), () => {
            var cb;
            window.removeEventListener("popstate", sb), !bb && null !== (cb = window.history.state) && void 0 !== cb && cb[Zs] && window.history.back()
          }
        }), [])
      }(Xb);
      const lb = (0, kb.useRef)(Xb);
      lb.current = Xb, (0, kb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), lb.current())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), []);
      const eb = Gs(cb, ".CrosshairFullScreenPanel"),
        [Cb, Nb] = (0, kb.useState)(!0),
        Vb = Cb && Hb;
      (0, kb.useEffect)((() => {
        if (Vb) return hb.d.set({
          crosshairGameView: !0
        }), () => {
          hb.d.set({
            crosshairGameView: !1
          })
        }
      }), [Vb]);
      const [Lb, ub] = (0, kb.useState)(!0);
      return (0, Qs.createPortal)((0, fb.jsxs)("div", {
        ref: mb,
        className: "CrosshairFullScreen",
        style: Vb ? void 0 : gs(Wb),
        ...eb.handlers,
        children: [(0, fb.jsx)(Ps.b, {
          settings: cb,
          touch: sb,
          inEditor: !0,
          ...eb.view
        }), (0, fb.jsxs)("div", {
          className: ab()("CrosshairFullScreenPanel", {
            Collapsed: !Lb
          }),
          children: [(0, fb.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, fb.jsx)(Es, {
              backdrop: Wb,
              onChange: bb => {
                Nb(!1), Ib(bb)
              },
              game: Hb ? {
                selected: Vb,
                onSelect: () => {
                  Nb(!0)
                }
              } : void 0
            }), (0, fb.jsx)(Qb.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: nb(Lb ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                ub(!Lb)
              },
              children: (0, fb.jsx)(Ub.b, {
                name: Lb ? "caret-up" : "pen"
              })
            }), (0, fb.jsx)(Qb.d, {
              className: "CrosshairFullScreenDone",
              onClick: Xb,
              padDefaultFocus: !0,
              children: nb("crosshairSettings:done")
            })]
          }), Lb && (0, fb.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, fb.jsx)(is, {
              settings: cb,
              touch: sb,
              backdrop: Wb,
              onChange: Mb
            }), (0, fb.jsx)(ls, {
              settings: cb,
              onChange: Mb
            })]
          })]
        })]
      }), document.body)
    }
    var qs = sb(2519),
      ds = sb(8897);

    function As(bb) {
      let {
        settings: cb,
        onChange: sb
      } = bb;
      const {
        t: Wb
      } = (0, Tb.E)(), Ib = (0, ds.i)(cb), [Hb, Mb] = (0, qs.j)(), [Xb, nb] = (0, kb.useState)(!1), mb = (0, kb.useRef)(null), [lb, eb] = (0, qs.j)(), [Cb, Nb] = (0, kb.useState)(!1);
      return (0, fb.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, fb.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, fb.jsxs)(Qb.M, {
            className: ab()("CrosshairCopy", {
              ActiveSecondaryButton: Hb
            }),
            onClick: () => {
              (0, qs.g)(Ib, {
                useShareSheet: !1,
                onOutcome: bb => {
                  nb("failed" === bb), "copied" === bb && Mb()
                }
              })
            },
            children: [(0, fb.jsx)(Ub.b, {
              name: Hb ? "check" : "copy"
            }), " ", Wb(Hb ? "general:copied" : "crosshairSettings:copy")]
          }), (0, fb.jsx)(Lb.c, {
            className: "CrosshairPaste",
            domRef: mb,
            ariaLabel: Wb("crosshairSettings:paste"),
            placeholderText: Wb("crosshairSettings:paste"),
            onValueChange: bb => {
              const cb = (0, ds.f)(bb);
              Nb(!cb && bb.trim().length >= ds.c), cb && (sb(cb), mb.current.value = "", eb())
            }
          })]
        }), Xb && (0, fb.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Ib,
          "aria-label": Wb("crosshairSettings:copy"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, fb.jsxs)("div", {
          "aria-live": "polite",
          children: [Cb && (0, fb.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Wb("crosshairSettings:pasteInvalid")
          }), lb && !Cb && (0, fb.jsx)("div", {
            className: "CrosshairShareNote",
            children: Wb("crosshairSettings:applied")
          })]
        })]
      })
    }
    var ws = sb(8905);
    let rs = "sky";

    function os(bb) {
      let {
        showing: cb
      } = bb;
      const {
        t: sb
      } = (0, Tb.E)(), {
        isTouchScreen: Wb,
        gameState: ab,
        clientEscMenuOptions: Ib
      } = (0, hb.p)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Hb = (0, ws.e)(), [Mb, Xb] = (0, kb.useState)(rs), nb = bb => {
        rs = bb, Xb(bb)
      }, [mb, lb] = (0, kb.useState)(!1);
      return (0, kb.useEffect)((() => {
        cb || lb(!1)
      }), [cb]), (0, fb.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, fb.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, fb.jsx)(Ks, {
            className: "CrosshairPreviewStage",
            settings: Hb,
            touch: Wb,
            backdrop: Mb,
            label: sb("crosshairSettings:preview"),
            children: (0, fb.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, fb.jsx)(Es, {
                backdrop: Mb,
                onChange: nb
              }), (0, fb.jsxs)(Qb.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  lb(!0)
                },
                children: [(0, fb.jsx)(Ub.b, {
                  name: "expand"
                }), " ", sb("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, fb.jsx)("div", {
          className: "SettingBox",
          children: (0, fb.jsx)(is, {
            settings: Hb,
            touch: Wb,
            backdrop: Mb,
            onChange: ws.b
          })
        }), (0, fb.jsx)(As, {
          settings: Hb,
          onChange: ws.b
        }), Wb && (0, fb.jsx)(Ts.e, {
          note: (0, as.f)(Wb, Ib.touchActionButtons) ? sb("crosshairSettings:touchNote") : void 0
        }), (0, fb.jsx)(ls, {
          settings: Hb,
          onChange: ws.b
        }), mb && (0, fb.jsx)(zs, {
          settings: Hb,
          touch: Wb,
          backdrop: Mb,
          onBackdrop: nb,
          inGame: "inGame" === ab,
          onChange: ws.b,
          onClose: () => {
            lb(!1)
          }
        })]
      })
    }
    var Ss = sb(8481),
      Rs = sb(1379),
      vs = sb(4694),
      Fs = sb(8910),
      xs = sb(1912),
      ps = sb(4060),
      bk = sb(1915),
      ck = sb(725);
    const sk = (0, kb.memo)((function() {
      const {
        clientEscMenuOptions: bb
      } = (0, hb.p)(["clientEscMenuOptions"]), {
        recording: cb,
        clipping: sb,
        hasClipBuffer: Wb
      } = (0, xs.f)("replayRecorder"), Tb = (0, xs.e)("connectedGame", (bb => bb.replay)), Ub = (0, ps.n)(), Ib = !1 === (0, mb.d)("canRecordReplays");
      (0, kb.useEffect)((() => {
        Cb.gameBridge.send("setRecorderPrefs", {
          clipping: bb.enableClipping,
          clipSeconds: bb.clipDurationSeconds
        })
      }), [bb.enableClipping, bb.clipDurationSeconds]);
      const Hb = Ub || Tb,
        Mb = !Hb && !Ib,
        Xb = cb || Mb,
        nb = Mb,
        lb = nb && sb && !cb;

      function eb() {
        Xb && Cb.gameBridge.send("toggleRecording", null)
      }
      return (0, fb.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, fb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fb.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: cb ? (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsxs)(Qb.G, {
                className: "ReplayViewerCategoryButton",
                onClick: eb,
                disabled: !Xb,
                children: [(0, fb.jsx)("span", {
                  children: "Stop Recording"
                }), (0, fb.jsx)(bk.d, {
                  noaAction: "recordGame"
                })]
              }), (0, fb.jsx)(Fs.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, fb.jsxs)(Qb.d, {
              className: "ReplayViewerCategoryButton",
              onClick: eb,
              disabled: !Xb,
              children: [(0, fb.jsx)("span", {
                children: "Start Recording"
              }), (0, fb.jsx)(bk.d, {
                noaAction: "recordGame"
              })]
            })
          }), Ib && (0, fb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Hb && !cb && (0, fb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, fb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, fb.jsx)(Yb.d, {
            label: "Enable clipping",
            checked: bb.enableClipping,
            disabled: !nb,
            onClick: function(bb) {
              nb && hb.d.setClientEscMenuOptions({
                enableClipping: bb
              })
            },
            className: ab()({
              SettingBoxDisabled: !nb
            })
          }), (0, fb.jsx)(Yb.i, {
            name: "Clip duration (seconds)",
            min: ck.g,
            max: ck.f,
            step: ck.b,
            initValue: bb.clipDurationSeconds,
            onChange: function(bb) {
              hb.d.setClientEscMenuOptions({
                clipDurationSeconds: bb
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !nb || !bb.enableClipping
          })]
        }), (0, fb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fb.jsxs)(Qb.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              lb && Cb.gameBridge.send("saveClip", null)
            },
            disabled: !lb,
            children: [(0, fb.jsx)("span", {
              children: "Record clip"
            }), (0, fb.jsx)(bk.d, {
              noaAction: "recordClip"
            })]
          }), bb.enableClipping && !Wb && nb && !cb && (0, fb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), cb && (0, fb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, fb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fb.jsxs)(Qb.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, ps.j)(!0), hb.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: Ub,
            children: [(0, fb.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, fb.jsx)(bk.d, {
              noaAction: "replayViewerOpen"
            })]
          }), Ub && (0, fb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, fb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, fb.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, fb.jsx)("iframe", {
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
    var kk = sb(1832);
    const Wk = {
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
        icon: () => (0, fb.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, fb.jsx)("path", {
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
      Qm: {
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

    function ak() {
      return Promise.all([sb.e(74), sb.e(131), sb.e(125), sb.e(122)]).then((() => sb(40501))).then((bb => ({
        default: bb.ShaderPackCategory
      })), (bb => (console.error("Failed to load the shader pack settings", bb), {
        default: Tk
      })))
    }

    function Tk() {
      const {
        t: bb
      } = (0, Tb.E)();
      return (0, fb.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: bb("shaderPack:tabLoadFailed")
      })
    }
    var Uk = sb(1371);
    const Ik = (0, kb.lazy)((() => sb.e(263).then((() => sb(40490))).then((bb => ({
        default: bb.BloxdInformation
      }))))),
      Hk = (0, kb.lazy)(ak);

    function fk(bb) {
      return bb ? "general" : "account"
    }
    const Mk = new Map,
      Xk = (0, kb.memo)((function(bb) {
        let {
          show: cb,
          setBeforeResumeCallback: sb
        } = bb;
        (0, lb.c)();
        const {
          gameState: Wb,
          openSettingsCategory: ab
        } = (0, hb.p)(["gameState", "openSettingsCategory"]), {
          userContext: Ib
        } = (0, nb.c)(), {
          t: Hb
        } = (0, Tb.E)(), Lb = (0, Xb.b)(), ub = (0, mb.d)("minChunkAddDist"), Yb = "inGame" === Wb, [Jb, tb] = (0, kb.useState)(fk(Yb)), [yb, Pb] = (0, kb.useState)(null), [Db, Eb] = (0, kb.useState)([]), ib = (0, kb.useRef)(function() {
          const bb = new Date,
            cb = 6 * (bb.getMonth() + bb.getDate()) % Hc.A.length;
          return [...Hc.A, ...Hc.A].slice(cb, cb + 6)
        }()), Ob = (0, kb.useRef)(null), Gb = (0, Bc.h)(Rs.j, (0, Rs.b)()), Kb = Object.keys(Wk).filter((bb => {
          switch (bb) {
            case "replayViewer":
              return Yb;
            case "developerTools":
              return Ib.playerHasRank("developer") || !1;
            case "texturePack":
              return eb.featureFlags.settings.canChangeTexturePack;
            case "Qm":
              return eb.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return eb.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Bb.r;
            case "controller":
              return eb.featureFlags.useControllerSupport && (Gb || "controller" === Jb);
            default:
              return !0
          }
        }));
        (0, Bc.f)("toggleFullCoordinateOverlay", (() => {
          const bb = Fc("showCoordinates") && Fc("showChunkCoordinates") && Fc("showFPS");
          xc("showCoordinates", !bb), xc("showChunkCoordinates", !bb), xc("showFPS", !bb), Lb()
        })), (0, Bc.f)("updatedChunkLoadDist", (() => {
          Lb()
        })), (0, kb.useEffect)((() => {
          if (Pb(null), null === hb.d.get("openSettingsCategory")) {
            const bb = (0, Uk.g)() ? Mk.get(Yb) : void 0;
            tb(bb && Kb.includes(bb) ? bb : fk(Yb))
          }
        }), [cb]), (0, kb.useEffect)((() => {
          null !== ab && (tb(ab), Mk.set(Yb, ab), hb.d.set({
            openSettingsCategory: null
          }))
        }), [ab, Yb]), (0, kb.useLayoutEffect)((() => {
          Ob.current && (Ob.current.scrollTop = 0)
        }), [Jb, cb]), (0, kb.useEffect)((() => {
          "updateLog" === Jb && (0, Vb.d)().then(Eb)
        }), [Jb]), (0, kb.useEffect)((() => {
          if ((0, Ac.L)(ub)) return;
          const [bb, cb] = (0, ks.d)(), [sb, kb] = (0, Gc.f)(ub), Wb = (0, kk.d)(ub[0], bb, sb), ab = (0, kk.d)(ub[1], cb, kb);
          Cb.gameBridge.send("setChunkAddDistance", {
            horizontal: Wb,
            vertical: ab
          })
        }), [ub]);
        const Zb = (0, kb.useCallback)((async () => {
          yb && (await yb(), Pb(null))
        }), [yb]);

        function zb() {
          hb.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, kb.useEffect)((() => {
          sb((() => Zb))
        }), [Zb, sb]), (0, fb.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: cb ? {} : {
            display: "none"
          },
          children: [(0, fb.jsx)("div", {
            className: "MenuSideBar",
            children: (0, fb.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, fb.jsx)(Mb, {
                items: Kb.map((bb => {
                  const cb = Wk[bb].icon;
                  return {
                    id: bb,
                    faIcon: "string" === typeof cb ? cb : void 0,
                    iconElement: "string" === typeof cb ? void 0 : (0, fb.jsx)(cb, {}),
                    title: Hb(Wk[bb].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Jb,
                onClick: bb => {
                  !async function(bb) {
                    await Zb(), tb(bb), Mk.set(Yb, bb)
                  }(bb)
                }
              })
            })
          }), (0, fb.jsxs)("div", {
            ref: Ob,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Jb && (0, fb.jsx)(Cc, {
              showing: cb,
              inGame: Yb
            }), "general" === Jb && (0, fb.jsx)(hc, {
              inGame: Yb
            }), "audio" === Jb && (0, fb.jsx)(Jc, {}), "notifications" === Jb && (0, fb.jsx)(Oc, {}), "graphics" === Jb && (0, fb.jsx)(ss, {
              minChunkAddDist: null !== ub && void 0 !== ub ? ub : [2, 2],
              getValue: Fc,
              onChange: xc,
              setApplySettingsCallback: Pb
            }), "controls" === Jb && (0, fb.jsx)(Ws.f, {}), "crosshair" === Jb && (0, fb.jsx)(os, {
              showing: cb
            }), "controller" === Jb && eb.featureFlags.useControllerSupport && (0, fb.jsx)(Ss.c, {}), eb.featureFlags.settings.canChangeTexturePack && "texturePack" === Jb && (0, fb.jsx)(vs.d, {
              setApplySettingsCallback: Pb
            }), eb.featureFlags.settings.canUseShaderPacks && "Qm" === Jb && (0, fb.jsx)(kb.Suspense, {
              fallback: null,
              children: (0, fb.jsx)(Hk, {
                setApplySettingsCallback: Pb
              })
            }), "updateLog" === Jb && (0, fb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fb.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Db.map(((bb, cb) => (0, fb.jsx)(Nb.c, {
                  updateLog: bb,
                  index: cb,
                  close: zb
                }, cb)))
              })
            }), "information" === Jb && (0, fb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fb.jsx)(kb.Suspense, {
                fallback: null,
                children: (0, fb.jsx)(Ik, {})
              })
            }), "alternativeDomains" === Jb && (0, fb.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, fb.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Hb("settingsMenu:unblockedDomainsDescription")
              }), (0, fb.jsx)("div", {
                className: "AlternativeDomainsList",
                children: ib.current.map((bb => (0, fb.jsxs)(Qb.d, {
                  onClick: () => {
                    window.open(`https://${bb}`)
                  },
                  children: [(0, fb.jsx)(Ub.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", bb]
                }, bb)))
              })]
            }), "replayViewer" === Jb && (0, fb.jsx)(sk, {}), "developerTools" === Jb && (0, fb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, fb.jsx)(gb, {
                setApplySettingsCallback: Pb
              })
            }), null !== yb && (0, fb.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, fb.jsx)(Qb.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: Zb,
                children: Hb("general:apply")
              })
            })]
          })]
        })
      }));
    var nk = sb(2459);
    const mk = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      lk = (0, kb.lazy)((() => Promise.resolve().then((() => sb(4389))).then((bb => {
        bb.needGameClientAfterPaint();
        const cb = bb.matchmakingLibrariesPromise.then((bb => (0, nk.c)(bb.loadCharacterCustomisationUI(), (bb => bb.CharacterCustomisationUI))));
        return Promise.all([bb.ensureGameSetup(), cb]).then((bb => {
          let [, cb] = bb;
          return cb
        }))
      }))));

    function Qk(bb) {
      let {
        show: cb
      } = bb;
      const {
        userContext: sb
      } = (0, nb.c)(), [Wb, ab] = (0, kb.useState)("characters");
      if (!cb) return null;
      const Tb = mk.filter((bb => "cape" !== bb && "nameColour" !== bb || sb.getPlayerRanks().includes("super") || (0, qb.purchasesAllowed)())).map((bb => ({
        id: bb,
        faIcon: Hc.I[bb],
        title: Hc.K[bb],
        redDot: !1
      })));
      return (0, fb.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, fb.jsx)("div", {
          className: "MenuSideBar",
          children: (0, fb.jsx)(Mb, {
            items: Tb,
            selectedItemId: Wb,
            onClick: bb => {
              ab(bb)
            }
          })
        }), (0, fb.jsx)("div", {
          className: "MenuBody",
          children: (0, fb.jsx)(kb.Suspense, {
            fallback: (0, fb.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, fb.jsx)(ub.d, {})
            }),
            children: (0, fb.jsx)(lk, {
              selectedTab: Wb
            })
          })
        })]
      })
    }
    var ek = sb(1442),
      Ck = sb(8917),
      Nk = sb(4270),
      Vk = sb(3191),
      Lk = sb(3234),
      uk = sb(8947),
      Yk = sb(8389),
      hk = sb(8924),
      Jk = sb(8937),
      gk = sb(1858),
      Bk = sb(1839),
      tk = sb(4615),
      yk = sb(1269),
      Pk = sb(1235),
      Dk = sb(1651),
      Ek = sb(8466);

    function ik(bb) {
      return bb ? Object.keys(bb).sort(((cb, sb) => {
        var kb, Wb, ab, Tb;
        const Ub = (null !== (kb = null === (Wb = bb[sb]) || void 0 === Wb ? void 0 : Wb.sortPriority) && void 0 !== kb ? kb : 0) - (null !== (ab = null === (Tb = bb[cb]) || void 0 === Tb ? void 0 : Tb.sortPriority) && void 0 !== ab ? ab : 0);
        return 0 !== Ub ? Ub : cb.localeCompare(sb)
      })) : []
    }
    const Ok = [{
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

    function Gk(bb) {
      for (const {
          threshold: cb,
          suffix: sb
        }
        of Ok)
        if (bb >= cb) {
          const kb = bb / cb;
          return kb >= 100 ? `${Math.floor(kb)}${sb}` : kb >= 10 ? `${kb.toFixed(1).replace(/\.0$/,"")}${sb}` : `${kb.toFixed(2).replace(/\.?0+$/,"")}${sb}`
        } return String(bb)
    }
    var Kk = sb(4728);
    const Zk = {
        normal: "0.8em",
        big: "1em"
      },
      zk = (0, kb.memo)((function(bb) {
        let {
          item: cb,
          amount: sb = 0,
          size: kb = "normal",
          tier: Wb = null
        } = bb;
        return (0, fb.jsx)("div", {
          className: ab()("SmpSlot", `SmpSlot-${kb}`),
          children: cb && (0, fb.jsx)(gk.d, {
            itemName: cb,
            amount: sb > 1 ? sb : 0,
            amountFontSize: Zk[kb],
            enchantmentTier: Wb
          })
        })
      }));

    function qk(bb) {
      let {
        amount: cb,
        exact: sb = !1,
        className: kb
      } = bb;
      return (0, fb.jsxs)("span", {
        className: ab()("SmpGold", kb),
        children: [(0, fb.jsx)("span", {
          className: "SmpCoin",
          children: (0, fb.jsx)(gk.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), sb ? cb.toLocaleString("en-US") : Gk(cb)]
      })
    }

    function dk(bb) {
      let {
        count: cb = 5,
        grid: sb = !1
      } = bb;
      return (0, fb.jsx)("div", {
        className: sb ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: cb
        }, ((bb, cb) => (0, fb.jsxs)("div", {
          className: ab()(sb ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, fb.jsx)("div", {
            className: ab()("SmpSlot", sb ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, fb.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, fb.jsx)("b", {}), (0, fb.jsx)("small", {})]
          }), (0, fb.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, cb)))
      })
    }

    function Ak(bb) {
      let {
        title: cb,
        children: sb
      } = bb;
      return (0, fb.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, fb.jsx)("b", {
          children: cb
        }), sb && (0, fb.jsx)("small", {
          children: sb
        })]
      })
    }

    function wk(bb) {
      let {
        entry: cb
      } = bb;
      return (0, fb.jsx)(Ak, {
        title: (0, fb.jsx)(Bk.d, {
          text: cb.item.customTitle
        }),
        children: (0, fb.jsx)(Bk.d, {
          text: cb.item.description
        })
      })
    }

    function rk(bb) {
      return (0, fb.jsx)(Kk.e, {
        ...bb,
        className: ab()("SmpChoice", bb.className),
        reselectable: !0
      })
    }

    function Sk() {
      return (0, fb.jsx)("span", {
        className: "SmpLoader",
        children: (0, fb.jsx)(ub.d, {})
      })
    }

    function Rk(bb) {
      let {
        value: cb,
        onChange: sb,
        min: Wb = 1,
        max: ab,
        step: Tb = 1,
        label: Ub
      } = bb;
      const Ib = (0, kb.useRef)(null),
        Hb = (0, kb.useRef)(cb);
      Hb.current = cb;
      const [Mb, Xb] = (0, kb.useState)(null), nb = bb => Math.max(Wb, Math.min(ab, Math.floor(bb))), mb = bb => {
        const cb = Hb.current,
          kb = "function" === typeof Tb ? Tb(cb, bb) : Tb,
          Wb = nb(cb + kb * bb);
        Hb.current = Wb, sb(Wb)
      };
      (0, kb.useEffect)((() => {
        if (null === Mb) return;
        let bb;
        const cb = () => {
            Xb(null)
          },
          sb = setTimeout((() => {
            bb = setInterval((() => {
              mb(Mb);
              const bb = Hb.current;
              (Mb > 0 ? bb >= ab : bb <= Wb) && cb()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", cb), window.addEventListener("pointercancel", cb), window.addEventListener("blur", cb), () => {
          clearTimeout(sb), clearInterval(bb), window.removeEventListener("pointerup", cb), window.removeEventListener("pointercancel", cb), window.removeEventListener("blur", cb)
        }
      }), [Mb]), (0, kb.useEffect)((() => {
        const bb = Ib.current;
        bb && document.activeElement !== bb && bb.value !== String(cb) && (bb.value = String(cb))
      }), [cb]), (0, kb.useEffect)((() => {
        const bb = Ib.current;
        if (!bb) return;
        const cb = () => {
          bb.value = String(Hb.current)
        };
        return bb.addEventListener("blur", cb), () => {
          bb.removeEventListener("blur", cb)
        }
      }), []);
      const lb = bb => (0, fb.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${bb>0?"More":"Less"} ${Ub}`,
        disabled: bb > 0 ? cb >= ab : cb <= Wb,
        onPointerDown: cb => {
          0 === cb.button && (mb(bb), Xb(bb))
        },
        onKeyDown: cb => {
          "Enter" !== cb.key && " " !== cb.key || mb(bb)
        },
        onContextMenu: bb => {
          bb.preventDefault()
        },
        children: bb > 0 ? "+" : "\u2212"
      });
      return (0, fb.jsxs)("div", {
        className: "SmpStepper",
        children: [lb(-1), (0, fb.jsx)(Lb.c, {
          className: "SmpStepperInput",
          domRef: Ib,
          defaultValue: String(cb),
          ariaLabel: Ub,
          type: "text",
          blurOnEnter: !0,
          onValueChange: bb => {
            const cb = bb.replace(/[^\d]/g, "");
            Ib.current && cb !== bb && (Ib.current.value = cb), "" !== cb && sb(nb(Number(cb)))
          }
        }), lb(1)]
      })
    }

    function vk(bb) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, bb))) - 1))
    }
    var Fk = sb(8942),
      xk = sb(1253);
    const jk = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    xk.t, Zb.Hc.length;
    new Map;
    var pk = sb(3050);

    function bW(bb, cb) {
      var sb;
      return cb && (null === (sb = bb[cb]) || void 0 === sb ? void 0 : sb.smp) || null
    }

    function cW(bb, cb) {
      const sb = [];
      for (const Wb of ik(bb)) {
        var kb;
        const ab = bb[Wb];
        (null === (kb = ab.smp) || void 0 === kb ? void 0 : kb.kind) === cb && sb.push({
          key: Wb,
          item: ab,
          meta: ab.smp
        })
      }
      return sb
    }

    function sW(bb, cb) {
      var sb;
      return null !== (sb = cW(bb, cb)[0]) && void 0 !== sb ? sb : null
    }
    const kW = "50% 0% 50% 0%",
      WW = [{
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

    function aW(bb) {
      const cb = bb - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: sb,
          suffix: kb
        }
        of WW)
        if (cb >= sb) return `${Math.floor(cb/sb)}${kb}`;
      return "<1s"
    }

    function TW(bb) {
      const cb = bb.map(Yk.g),
        sb = [];
      return cb.forEach(((bb, kb) => {
        const Wb = function(bb) {
            const cb = bb.match(/\d+/);
            return cb ? Number(cb[0]) : 0
          }(bb),
          ab = kb === cb.length - 1;
        (ab || 1 === Wb || 10 === Wb || 100 === Wb) && sb.push({
          label: bb,
          quantity: Wb,
          isAll: ab
        })
      })), sb
    }
    let UW = null;

    function IW(bb, cb) {
      const sb = cb.trim().toLowerCase();
      if (!sb) return [];
      const kb = bb => {
          if (bb === sb) return 0;
          if (bb.startsWith(sb)) return 1;
          const cb = bb.indexOf(sb);
          return -1 === cb ? -1 : 2 + cb
        },
        Wb = [];
      for (const Ub of bb) {
        const bb = [kb(Ub.lowerLabel), kb(Ub.lowerName)].filter((bb => -1 !== bb));
        bb.length && Wb.push({
          item: Ub,
          rank: Math.min(...bb)
        })
      }
      if (Wb.length > 0) return Wb.sort(((bb, cb) => bb.rank - cb.rank)).map((bb => bb.item));
      const ab = [...sb],
        Tb = bb => {
          let cb = 0;
          for (const sb of ab) {
            if (cb = bb.indexOf(sb, cb), -1 === cb) return !1;
            cb++
          }
          return !0
        };
      return bb.filter((bb => Tb(bb.lowerLabel) || Tb(bb.lowerName)))
    }

    function HW(bb, cb) {
      var sb;
      return null !== (sb = null === bb || void 0 === bb ? void 0 : bb[cb]) && void 0 !== sb ? sb : cb
    }

    function fW(bb, cb) {
      const sb = bb.userInput;
      return void 0 !== cb && "dropdown" === (null === sb || void 0 === sb ? void 0 : sb.type) && sb.dropdownOptions.map(Yk.g).includes(cb) ? cb : function(bb) {
        const cb = bb.userInput;
        if ("dropdown" !== (null === cb || void 0 === cb ? void 0 : cb.type) || 0 === cb.dropdownOptions.length) return null;
        const sb = cb.dropdownOptions.map(Yk.g);
        return cb.initialValue && sb.includes(cb.initialValue) ? cb.initialValue : sb[sb.length - 1]
      }(bb)
    }

    function MW(bb) {
      return void 0 === bb ? "" : JSON.stringify(bb)
    }
    const XW = (0, kb.createContext)(null);

    function nW() {
      return (0, kb.useContext)(XW)
    }
    var mW = sb(2546);
    const lW = (0, kb.memo)((function(bb) {
        let {
          name: cb,
          label: sb,
          onPick: kb
        } = bb;
        return (0, fb.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: sb,
          onClick: () => {
            kb(cb)
          },
          children: [(0, fb.jsx)(zk, {
            item: cb,
            size: "big"
          }), (0, fb.jsx)("span", {
            children: sb
          })]
        })
      })),
      QW = (0, kb.memo)((function(bb) {
        let {
          items: cb,
          query: sb,
          onPick: Wb
        } = bb;
        const {
          t: ab
        } = (0, Tb.E)(), [Ub, Ib] = (0, kb.useState)(new Set), Hb = (0, kb.useMemo)((() => function(bb) {
          const cb = new Map;
          for (const sb of bb) {
            let bb = cb.get(sb.category);
            bb || (bb = [], cb.set(sb.category, bb)), bb.push(sb)
          }
          return [...jk, "other"].filter((bb => cb.has(bb))).map((bb => ({
            category: bb,
            items: cb.get(bb)
          })))
        }(cb)), [cb]), Mb = (0, kb.useMemo)((() => IW(cb, sb).slice(0, 60)), [cb, sb]);
        return sb.trim() ? 0 === Mb.length ? (0, fb.jsx)(Ak, {
          title: ab("smpShop:noItemsFound", {
            query: sb.trim()
          }),
          children: ab("smpShop:tryShorterName")
        }) : (0, fb.jsx)(mW.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: kW,
          observerUpdateDeps: [sb],
          children: Mb.map((bb => (0, fb.jsx)(lW, {
            name: bb.name,
            label: bb.label,
            onPick: Wb
          }, bb.name)))
        }) : (0, fb.jsx)(fb.Fragment, {
          children: Hb.map((bb => {
            let {
              category: cb,
              items: sb
            } = bb;
            const kb = Ub.has(cb) || sb.length <= 48,
              Tb = kb ? sb : sb.slice(0, 48);
            return (0, fb.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, fb.jsxs)("h4", {
                children: [ab("other" === cb ? "smpShop:otherItems" : `creativeInventory:${cb}`), !kb && (0, fb.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Ib(new Set([...Ub, cb]))
                  },
                  children: ab("smpShop:showAll", {
                    count: sb.length
                  })
                })]
              }), (0, fb.jsx)(mW.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: kW,
                observerUpdateDeps: [kb],
                children: Tb.map((bb => (0, fb.jsx)(lW, {
                  name: bb.name,
                  label: bb.label,
                  onPick: Wb
                }, bb.name)))
              })]
            }, cb)
          }))
        })
      }));

    function eW(bb, cb) {
      const {
        searched: sb,
        shown: Wb,
        searchFor: ab,
        loading: Tb
      } = function(bb, cb) {
        var sb;
        const Wb = nW(),
          [ab, Tb] = (0, kb.useState)(void 0),
          Ub = (0, kb.useRef)(void 0),
          Ib = (0, kb.useRef)(0),
          Hb = (0, kb.useRef)(void 0),
          fb = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.meta.item) && void 0 !== sb ? sb : null,
          Mb = !!bb && Wb.isPending(bb.key);
        (0, kb.useEffect)((() => {
          if (!bb || Mb || !cb || void 0 === ab || ab === fb) return;
          const sb = ab === Ub.current && Wb.gaveUpAt(bb.key) > Ib.current && Hb.current !== ab;
          (ab !== Ub.current || sb) && Wb.act(bb.key, null !== ab && void 0 !== ab ? ab : "*", sb) && (sb && (Hb.current = ab), Ub.current = ab, Ib.current = Date.now())
        }), [bb, Mb, cb, ab, fb, Wb]);
        const Xb = (0, kb.useCallback)((bb => {
            Ub.current = void 0, Hb.current = void 0, Tb(bb)
          }), []),
          nb = void 0 !== ab && ab !== fb && (Mb || Ub.current !== ab);
        return {
          searched: fb,
          shown: nb ? ab : fb,
          searchFor: Xb,
          loading: nb || Mb || null !== fb && !cb
        }
      }(bb, cb), Ub = (0, kb.useMemo)((() => function() {
        var bb;
        let cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Wb = `${(0,pk.h)()}\x1f${cb.join("\x1e")}\x1f${sb.join("\x1e")}\x1f${JSON.stringify(kb)}`;
        if ((null === (bb = UW) || void 0 === bb ? void 0 : bb.key) === Wb) return UW.items;
        const ab = new Set(sb),
          Tb = new Set,
          Ub = [],
          Ib = (bb, cb) => {
            var sb;
            if (!bb || Tb.has(bb) || ab.has(bb)) return;
            Tb.add(bb);
            const Wb = null !== (sb = kb[bb]) && void 0 !== sb ? sb : bb;
            Ub.push({
              name: bb,
              label: Wb,
              lowerLabel: Wb.toLowerCase(),
              lowerName: bb.toLowerCase(),
              category: cb
            })
          };
        for (const fb of (0, Fk.creativeItemIds)()) {
          var Hb;
          (0, Fk.itemIsDisabled)(fb, !0, !0, !1) || (0, Fk.showOnlyInCreativeSearch)(fb) || Ib((0, pk.f)(fb), null !== (Hb = (0, Fk.creativeCategoryOf)(fb)) && void 0 !== Hb ? Hb : "other")
        }
        for (const fb of cb) Ib(fb, "other");
        return UW = {
          key: Wb,
          items: Ub
        }, Ub
      }(null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names)), [null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names]), [Ib, Hb] = (0, kb.useState)(""), [fb, Mb] = (0, kb.useState)(0), [Xb, nb] = (0, kb.useState)("recent"), mb = (0, kb.useCallback)((bb => {
        Hb(""), Mb((bb => bb + 1)), ab(bb)
      }), [ab]), lb = "browse" === Xb || "" !== Ib.trim();
      return {
        searched: sb,
        shown: Wb,
        searchFor: ab,
        loading: Tb,
        catalogue: Ub,
        names: null === bb || void 0 === bb ? void 0 : bb.meta.names,
        query: Ib,
        setQuery: Hb,
        searchBoxKey: fb,
        pickItem: mb,
        setView: nb,
        browsing: lb
      }
    }

    function CW(bb) {
      let {
        browser: cb,
        children: sb
      } = bb;
      const {
        t: kb
      } = (0, Tb.E)(), Wb = nW();
      return (0, fb.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, fb.jsx)("div", {
          className: "SmpSearch",
          children: (0, fb.jsx)(Lb.c, {
            className: "SmpSearchInput",
            placeholderText: kb("smpShop:searchPlaceholder"),
            defaultValue: cb.query,
            onValueChange: bb => {
              cb.setQuery(bb), cb.searched && bb.trim() && cb.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const bb = IW(cb.catalogue, cb.query)[0];
              bb ? cb.pickItem(bb.name) : cb.query.trim() && Wb.notify(kb("smpShop:noItemsFound", {
                query: cb.query.trim()
              }))
            }
          }, cb.searchBoxKey)
        }), sb]
      })
    }

    function NW(bb) {
      let {
        browser: cb,
        recentLabel: sb,
        children: kb
      } = bb;
      const {
        t: Wb
      } = (0, Tb.E)();
      return (0, fb.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, fb.jsx)(rk, {
          options: [{
            value: "recent",
            label: sb
          }, {
            value: "browse",
            label: Wb("smpShop:browseItems")
          }],
          value: cb.browsing ? "browse" : "recent",
          onChange: cb.setView,
          ariaLabel: Wb("smpShop:show")
        }), !cb.browsing && kb]
      })
    }

    function VW(bb) {
      let {
        item: cb,
        names: sb,
        summary: kb,
        onBack: Wb,
        children: ab
      } = bb;
      const {
        t: Ub
      } = (0, Tb.E)();
      return (0, fb.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, fb.jsx)(Qb.b, {
          className: "SmpBackButton",
          onClick: Wb,
          children: Ub("general:back")
        }), (0, fb.jsx)(zk, {
          item: cb,
          size: "big"
        }), (0, fb.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, fb.jsx)("b", {
            children: HW(sb, cb)
          }), kb && (0, fb.jsx)("small", {
            children: kb
          })]
        }), ab]
      })
    }

    function LW(bb) {
      let {
        browser: cb,
        className: sb,
        action: kb,
        above: Wb,
        list: Tb,
        summary: Ub,
        recentLabel: Ib,
        listControls: Hb,
        onBack: Mb
      } = bb;
      return (0, fb.jsxs)("div", {
        className: ab()("SmpScreen", sb),
        children: [(0, fb.jsx)(CW, {
          browser: cb,
          children: kb
        }), cb.shown && (0, fb.jsx)(VW, {
          item: cb.shown,
          names: cb.names,
          summary: !cb.loading && Ub,
          onBack: () => {
            null === Mb || void 0 === Mb || Mb(), cb.searchFor(null)
          },
          children: Hb
        }), Wb, cb.shown ? Tb : (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)(NW, {
            browser: cb,
            recentLabel: Ib,
            children: Hb
          }), cb.browsing ? (0, fb.jsx)(QW, {
            items: cb.catalogue,
            query: cb.query,
            onPick: cb.pickItem
          }) : Tb]
        })]
      })
    }

    function uW(bb, cb) {
      const sb = bb.map((bb => {
        let {
          meta: cb
        } = bb;
        return cb.pricePerItem
      }));
      return "min" === cb ? Math.min(...sb) : Math.max(...sb)
    }
    var YW = sb(6226);
    const hW = (0, kb.memo)((function(bb) {
      var cb;
      const {
        t: sb
      } = (0, Tb.E)(), kb = null === bb.seller, Wb = bb.quantity * bb.pricePerItem;
      return (0, fb.jsxs)("div", {
        className: bb.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, fb.jsx)(zk, {
          item: bb.item,
          amount: bb.quantity,
          size: bb.grid ? "big" : "normal",
          tier: bb.tier
        }), (0, fb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fb.jsx)("b", {
            children: (0, fb.jsx)(Bk.d, {
              text: null !== (cb = bb.title) && void 0 !== cb ? cb : `${bb.quantity}x ${bb.item}`
            })
          }), (0, fb.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, fb.jsx)("span", {
              children: kb ? sb("smpShop:you") : (0, fb.jsx)(Bk.d, {
                text: [{
                  entityName: bb.seller
                }]
              })
            }), (0, fb.jsx)("span", {
              children: sb("smpShop:timeLeft", {
                time: aW(bb.expiresAt)
              })
            })]
          })]
        }), (0, fb.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, fb.jsx)(qk, {
            amount: bb.pricePerItem
          }), (0, fb.jsx)("small", {
            children: sb("smpShop:each")
          })]
        }), (0, fb.jsx)(Qb.d, {
          className: "SmpBuyButton",
          disabled: kb || !bb.canAfford && !bb.busy,
          loading: bb.busy,
          onClick: () => {
            bb.onBuy(bb.itemKey)
          },
          children: kb ? sb("smpShop:yours") : (0, fb.jsx)(qk, {
            amount: Wb
          })
        })]
      })
    }));

    function JW(bb) {
      let {
        view: cb,
        onChange: sb
      } = bb;
      const {
        t: kb
      } = (0, Tb.E)();
      return (0, fb.jsx)(Kk.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: kb("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, fb.jsx)(Ub.b, {
            name: "list"
          }),
          ariaLabel: kb("smpShop:listView")
        }, {
          value: "grid",
          label: (0, fb.jsx)(Ub.b, {
            name: "grid-2"
          }),
          ariaLabel: kb("smpShop:gridView")
        }],
        value: cb,
        onChange: sb
      })
    }

    function gW(bb) {
      let {
        entries: cb,
        view: sb
      } = bb;
      const {
        t: kb
      } = (0, Tb.E)(), Wb = nW(), ab = "grid" === sb;
      return (0, fb.jsxs)(fb.Fragment, {
        children: [!ab && (0, fb.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, fb.jsx)("span", {}), (0, fb.jsx)("span", {
            children: kb("smpShop:columnItem")
          }), (0, fb.jsx)("span", {
            children: kb("smpShop:columnPriceEach")
          }), (0, fb.jsx)("span", {
            children: kb("smpShop:columnTotal")
          })]
        }), (0, fb.jsx)(mW.b, {
          lazyLoadedClassName: ab ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: kW,
          observerUpdateDeps: [cb.length],
          children: cb.map((bb => {
            var cb, sb;
            let {
              key: kb,
              item: Tb,
              meta: Ub
            } = bb;
            const Ib = Ub.quantity * Ub.pricePerItem;
            return (0, fb.jsx)(hW, {
              itemKey: kb,
              item: Ub.item,
              title: Tb.customTitle,
              quantity: Ub.quantity,
              pricePerItem: Ub.pricePerItem,
              seller: Ub.seller,
              expiresAt: Ub.expiresAt,
              tier: null !== (cb = null === (sb = Tb.enchant) || void 0 === sb ? void 0 : sb.tier) && void 0 !== cb ? cb : null,
              busy: Wb.isPending(kb) || null !== Ub.seller && !1 === Tb.canBuy,
              canAfford: Wb.canAfford(Tb, Ib),
              grid: ab,
              onBuy: Wb.act
            }, kb)
          }))
        }, sb)]
      })
    }
    const BW = [1, 10, 100],
      tW = [1, 10, 100, 999];

    function yW(bb) {
      var cb, sb, Wb, Ib, Hb, Mb, Xb, nb, mb, lb;
      const {
        t: eb
      } = (0, Tb.E)(), Cb = nW(), {
        creator: Nb,
        mode: Vb
      } = bb, [ub, Yb] = (0, kb.useState)(null !== (cb = null === Nb || void 0 === Nb ? void 0 : Nb.meta.item) && void 0 !== cb ? cb : null), [hb, Jb] = (0, kb.useState)(1), [gb, Bb] = (0, kb.useState)(0), [tb, yb] = (0, kb.useState)(""), [Pb, Db] = (0, kb.useState)(0), Eb = (0, kb.useRef)(ub), ib = (0, kb.useRef)(!1), [Ob, Gb] = (0, kb.useState)(!1), Kb = null !== (sb = null === Nb || void 0 === Nb ? void 0 : Nb.meta.item) && void 0 !== sb ? sb : null, Zb = null !== (Wb = null === Nb || void 0 === Nb ? void 0 : Nb.meta.qU) && void 0 !== Wb ? Wb : 0;
      (0, kb.useEffect)((() => {
        bb.searching || null === Kb || Kb === Eb.current || (Eb.current = Kb, ib.current = !1, Yb(Kb), Bb(0), Jb("list" === Vb ? Math.max(1, Zb) : 1))
      }), [Kb, bb.searching]);
      const zb = !!Nb && !!ub && Nb.meta.item === ub,
        qb = zb ? Nb.meta.qU : null !== (Ib = null === (Hb = bb.inventory) || void 0 === Hb || null === (Mb = Hb.find((bb => bb.item === ub))) || void 0 === Mb ? void 0 : Mb.quantity) && void 0 !== Ib ? Ib : 0,
        db = "list" === Vb ? Math.max(1, qb) : 45954,
        Ab = null !== (Xb = bb.prices[0]) && void 0 !== Xb ? Xb : null,
        wb = bb.prices.length ? Math.round(bb.prices.reduce(((bb, cb) => bb + cb), 0) / bb.prices.length) : null,
        rb = null === (nb = bb.inventory) || void 0 === nb || null === (mb = nb.find((bb => bb.item === ub))) || void 0 === mb ? void 0 : mb.sellPrice;
      (0, kb.useEffect)((() => {
        var bb;
        zb && (Jb((bb => "list" === Vb ? Math.min(Math.max(1, bb), Math.max(1, qb)) : bb)), ib.current || Bb(null !== (bb = null !== Ab && void 0 !== Ab ? Ab : wb) && void 0 !== bb ? bb : Math.max(1, null !== rb && void 0 !== rb ? rb : 1)))
      }), [zb, qb, ub, Ab, wb]);
      const ob = bb => {
          ib.current = !0, Bb(bb)
        },
        Sb = cb => {
          var sb, kb, Wb;
          Eb.current = cb, ib.current = !1, Gb(!1), yb(""), Db((bb => bb + 1)), Yb(cb), Bb(0), Jb("list" === Vb && null !== (sb = null === (kb = bb.inventory) || void 0 === kb || null === (Wb = kb.find((bb => bb.item === cb))) || void 0 === Wb ? void 0 : Wb.quantity) && void 0 !== sb ? sb : 1), (null === Nb || void 0 === Nb ? void 0 : Nb.meta.item) !== cb && bb.onPickItem(cb)
        },
        Rb = hb * gb,
        vb = "list" === Vb && null !== Nb && void 0 !== Nb && Nb.meta.fee ? function(bb, cb) {
          const sb = Math.max(0, cb - bb.taxFreeAllowance);
          return Math.ceil(Math.round(sb * bb.rate * 1e6) / 1e6)
        }(Nb.meta.fee, Rb) : 0,
        Fb = !!Nb && Cb.isPending(Nb.key),
        xb = zb && !bb.searching && hb >= 1 && gb >= 1 && ("order" === Vb || qb >= hb) && !Fb,
        jb = !!ub && !zb && !bb.searching && hb >= 1 && gb >= 1,
        pb = () => {
          xb ? Cb.act(Nb.key, `${hb}|${gb}`) : jb && (bb.onPickItem(ub), Gb(!0))
        };
      (0, kb.useEffect)((() => {
        Ob && zb && !bb.searching && (Gb(!1), pb())
      }), [Ob, zb, bb.searching]);
      const bc = !!ub && !zb && (bb.searching || Ob),
        cc = ub ? HW(bb.names, ub) : "",
        sc = (0, kb.useMemo)((() => IW(bb.catalogue, tb).slice(0, 8)), [bb.catalogue, tb]),
        kc = ("list" === Vb ? BW.filter((bb => bb < qb)) : tW).map((bb => ({
          value: bb,
          label: String(bb)
        })));
      "list" === Vb && qb > 0 && kc.push({
        value: qb,
        label: eb("smpShop:all", {
          count: qb
        })
      });
      const Wc = [];
      return null !== Ab && (Ab > 1 && Wc.push({
        value: Ab - 1,
        label: eb("smpShop:undercut", {
          price: Gk(Ab - 1)
        })
      }), Wc.push({
        value: Ab,
        label: eb("smpShop:lowest", {
          price: Gk(Ab)
        })
      })), null !== wb && wb !== Ab && Wc.push({
        value: wb,
        label: eb("smpShop:average", {
          price: Gk(wb)
        })
      }), (0, fb.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, fb.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, fb.jsx)("b", {
            children: eb("list" === Vb ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, fb.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": eb("smpShop:close"),
            onClick: bb.onClose,
            children: (0, fb.jsx)(Ub.b, {
              name: "xmark"
            })
          })]
        }), "list" === Vb && (0, fb.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (lb = bb.inventory) && void 0 !== lb && lb.length ? bb.inventory.map((bb => {
            let {
              item: cb,
              quantity: sb
            } = bb;
            return (0, fb.jsx)("button", {
              type: "button",
              title: cb,
              className: ab()("SmpPickerSlot", {
                SmpPickerSlotOn: cb === ub
              }),
              onClick: () => {
                Sb(cb)
              },
              children: (0, fb.jsx)(zk, {
                item: cb,
                amount: sb
              })
            }, cb)
          })) : (0, fb.jsx)("span", {
            className: "SmpMuted",
            children: eb("smpShop:nothingToList")
          })
        }), ("list" === Vb || !ub) && (0, fb.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, fb.jsx)(Lb.c, {
            className: "SmpSearchInput",
            placeholderText: eb("list" === Vb ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: tb,
            onValueChange: yb,
            blurOnEnter: !0,
            onEnter: () => {
              sc[0] && Sb(sc[0].name)
            }
          }, Pb), sc.length > 0 && (0, fb.jsx)("div", {
            className: "SmpPicker",
            children: sc.map((bb => {
              let {
                name: cb
              } = bb;
              return (0, fb.jsx)("button", {
                type: "button",
                title: cb,
                className: ab()("SmpPickerSlot", {
                  SmpPickerSlotOn: cb === ub
                }),
                onClick: () => {
                  Sb(cb)
                },
                children: (0, fb.jsx)(zk, {
                  item: cb
                })
              }, cb)
            }))
          })]
        }), ub && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsxs)("div", {
            className: "SmpPickedName",
            children: [cc, bc && (0, fb.jsx)(Sk, {})]
          }), (0, fb.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, fb.jsxs)("div", {
              className: "SmpField",
              children: [(0, fb.jsxs)("span", {
                children: [eb("smpShop:quantity"), "list" === Vb && zb && (0, fb.jsx)("small", {
                  children: eb("smpShop:youHave", {
                    count: qb
                  })
                })]
              }), (0, fb.jsx)(Rk, {
                value: hb,
                onChange: Jb,
                max: db,
                label: eb("smpShop:quantity")
              }), (0, fb.jsx)(rk, {
                options: kc,
                value: hb,
                onChange: Jb,
                ariaLabel: eb("smpShop:quantity")
              })]
            }), (0, fb.jsxs)("div", {
              className: "SmpField",
              children: [(0, fb.jsx)("span", {
                children: eb("smpShop:pricePerItem")
              }), (0, fb.jsx)(Rk, {
                value: Math.max(1, gb),
                onChange: ob,
                max: 9999999,
                step: vk,
                label: eb("smpShop:pricePerItem")
              }), (0, fb.jsx)(rk, {
                options: Wc,
                value: gb,
                onChange: ob,
                ariaLabel: eb("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Vb && (0, fb.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, fb.jsxs)("span", {
              children: [eb("smpShop:youGet"), " ", (0, fb.jsx)(qk, {
                amount: Math.max(0, Rb - vb),
                exact: !0
              })]
            }), (0, fb.jsx)("small", {
              children: vb > 0 ? eb("smpShop:listingFee", {
                fee: vb.toLocaleString("en-US")
              }) : eb("smpShop:listingRules")
            })]
          }), (0, fb.jsx)(Qb.p, {
            className: "SmpSubmit",
            disabled: !xb && !jb && !Fb,
            loading: Fb || bc || zb && bb.searching,
            onClick: pb,
            children: "list" === Vb ? eb("smpShop:listButton", {
              count: hb,
              item: cc
            }) : (0, fb.jsxs)(fb.Fragment, {
              children: [eb("smpShop:orderButton", {
                count: hb,
                item: cc
              }), " ", gb >= 1 && (0, fb.jsx)(qk, {
                amount: Rb
              })]
            })
          })]
        })]
      })
    }

    function PW() {
      var bb;
      const {
        t: cb
      } = (0, Tb.E)(), sb = nW(), Wb = null === (bb = sb.shopInfo[sb.categoryKey]) || void 0 === bb ? void 0 : bb.items, ab = sW(Wb, "search"), Ub = sW(Wb, "creator"), Ib = cW(Wb, "enchantedCreator"), Hb = cW(Wb, "listing"), Mb = sW(Wb, "empty"), Xb = eW(ab, Hb.length > 0 || null !== Mb), {
        searched: nb,
        shown: mb,
        loading: lb
      } = Xb, [eb, Cb] = (0, kb.useState)(!1), [Nb, Vb] = function() {
        const [bb, cb] = (0, YW.d)("smpMarketView", "list");
        return ["grid" === bb ? "grid" : "list", cb]
      }(), Lb = "grid" === Nb, ub = (0, kb.useMemo)((() => Hb.filter((bb => {
        let {
          meta: cb
        } = bb;
        return null !== cb.seller && cb.item === nb
      })).map((bb => {
        let {
          meta: cb
        } = bb;
        return cb.pricePerItem
      })).sort(((bb, cb) => bb - cb))), [Hb, nb]), Yb = (0, kb.useMemo)((() => {
        const bb = new Set(Xb.catalogue.map((bb => {
          let {
            name: cb
          } = bb;
          return cb
        })));
        return function(bb) {
          for (const cb in bb)
            if ("sell" === bb[cb].smp) return cW(bb[cb].items, "sell").filter((bb => {
              let {
                item: cb
              } = bb;
              return !cb.enchant
            })).map((bb => {
              let {
                meta: cb
              } = bb;
              return {
                item: cb.item,
                quantity: cb.quantity,
                sellPrice: cb.pricePerItem
              }
            }));
          return []
        }(sb.shopInfo).filter((cb => {
          let {
            item: sb
          } = cb;
          return bb.has(sb)
        }))
      }), [sb.shopInfo, Xb.catalogue]);
      return (0, fb.jsx)(LW, {
        browser: Xb,
        className: "SmpMarketTab",
        recentLabel: cb("smpShop:recentlyListed"),
        action: (0, fb.jsx)(Qb.p, {
          className: "SmpSellButton",
          onClick: () => {
            Cb((bb => !bb))
          },
          children: cb("smpShop:sell")
        }),
        above: eb && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)(yW, {
            mode: "list",
            creator: Ub,
            inventory: Yb,
            catalogue: Xb.catalogue,
            names: Xb.names,
            searching: lb,
            prices: ub,
            onPickItem: Xb.searchFor,
            onClose: () => {
              Cb(!1)
            }
          }), Ib.length > 0 && (0, fb.jsx)(DW, {
            entries: Ib
          })]
        }),
        listControls: (0, fb.jsx)(JW, {
          view: Nb,
          onChange: Vb
        }),
        summary: mb && (Hb.length > 0 ? cb(1 === Hb.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Hb.length,
          price: Gk(uW(Hb, "min"))
        }) : cb("smpShop:noOneSelling", {
          item: HW(Xb.names, mb)
        })),
        list: lb ? (0, fb.jsx)(dk, {
          grid: Lb
        }) : Hb.length > 0 ? (0, fb.jsx)(gW, {
          entries: Hb,
          view: Nb
        }) : Mb ? (0, fb.jsx)(wk, {
          entry: Mb
        }) : (0, fb.jsx)(dk, {
          count: 3,
          grid: Lb
        })
      })
    }

    function DW(bb) {
      let {
        entries: cb
      } = bb;
      const {
        t: sb
      } = (0, Tb.E)(), Wb = nW(), [ab, Ub] = (0, kb.useState)({});
      return (0, fb.jsx)("div", {
        className: "SmpList",
        children: cb.map((bb => {
          var cb, kb, Tb;
          let {
            key: Ib,
            item: Hb,
            meta: Mb
          } = bb;
          const Xb = null !== (cb = ab[Ib]) && void 0 !== cb ? cb : 1;
          return (0, fb.jsxs)("div", {
            className: "SmpRow",
            children: [(0, fb.jsx)(zk, {
              item: Mb.item,
              amount: Mb.quantity,
              tier: null !== (kb = null === (Tb = Hb.enchant) || void 0 === Tb ? void 0 : Tb.tier) && void 0 !== kb ? kb : null
            }), (0, fb.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, fb.jsx)("b", {
                children: (0, fb.jsx)(Bk.d, {
                  text: Hb.customTitle
                })
              }), (0, fb.jsx)("small", {
                children: sb("smpShop:enchantedListing")
              })]
            }), (0, fb.jsx)(Rk, {
              value: Xb,
              onChange: bb => {
                Ub({
                  ...ab,
                  [Ib]: bb
                })
              },
              max: 9999999,
              step: vk,
              label: sb("smpShop:pricePerItem")
            }), (0, fb.jsxs)(Qb.p, {
              loading: Wb.isPending(Ib),
              onClick: () => {
                Wb.act(Ib, String(Xb))
              },
              children: [sb("smpShop:list"), " ", (0, fb.jsx)(qk, {
                amount: Xb
              })]
            })]
          }, Ib)
        }))
      })
    }
    const EW = (0, kb.memo)((function(bb) {
      let {
        itemKey: cb,
        item: sb,
        quantity: kb,
        pricePerItem: Wb,
        tier: Tb,
        selected: Ub,
        onSelect: Ib
      } = bb;
      return (0, fb.jsxs)("button", {
        type: "button",
        className: ab()("SmpInventorySlot", {
          SmpInventorySlotOn: Ub
        }),
        title: sb,
        onClick: () => {
          Ib(cb)
        },
        children: [(0, fb.jsx)(zk, {
          item: sb,
          amount: kb,
          tier: Tb
        }), (0, fb.jsx)(qk, {
          amount: Wb
        })]
      })
    }));

    function iW() {
      var bb;
      const {
        t: cb
      } = (0, Tb.E)(), sb = nW(), Wb = null === (bb = sb.shopInfo[sb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Ub = cW(Wb, "sell"), Ib = sW(Wb, "empty"), [Hb, Mb] = (0, kb.useState)(null), [Xb, nb] = (0, kb.useState)({}), mb = Ub.find((bb => {
        let {
          key: cb
        } = bb;
        return cb === Hb
      }));
      return 0 === Ub.length ? (0, fb.jsx)("div", {
        className: "SmpScreen",
        children: (0, fb.jsx)(Ak, {
          title: Ib ? (0, fb.jsx)(Bk.d, {
            text: Ib.item.customTitle
          }) : cb("smpShop:nothingToSell"),
          children: Ib && (0, fb.jsx)(Bk.d, {
            text: Ib.item.description
          })
        })
      }) : (0, fb.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, fb.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Ub.map((bb => {
            var cb, sb;
            let {
              key: kb,
              item: Wb,
              meta: ab
            } = bb;
            return (0, fb.jsx)(EW, {
              itemKey: kb,
              item: ab.item,
              quantity: ab.quantity,
              pricePerItem: ab.pricePerItem,
              tier: null !== (cb = null === (sb = Wb.enchant) || void 0 === sb ? void 0 : sb.tier) && void 0 !== cb ? cb : null,
              selected: kb === Hb,
              onSelect: Mb
            }, kb)
          }))
        }), (0, fb.jsx)("div", {
          className: ab()("SmpSellBar", {
            SmpSellBarIdle: !mb
          }),
          children: mb ? (0, fb.jsx)(OW, {
            entry: mb,
            choice: fW(mb.item, Xb[mb.key]),
            onChoose: bb => {
              nb({
                ...Xb,
                [mb.key]: bb
              })
            }
          }) : (0, fb.jsx)("span", {
            className: "SmpMuted",
            children: cb("smpShop:tapToSell")
          })
        })]
      })
    }

    function OW(bb) {
      var cb, sb, kb, Wb;
      let {
        entry: ab,
        choice: Ub,
        onChoose: Ib
      } = bb;
      const {
        t: Hb
      } = (0, Tb.E)(), Mb = nW(), {
        key: Xb,
        item: nb,
        meta: mb
      } = ab, lb = TW("dropdown" === (null === (cb = nb.userInput) || void 0 === cb ? void 0 : cb.type) ? nb.userInput.dropdownOptions : []), eb = null === Ub ? 0 : -(0, Yk.e)(nb, Ub);
      return (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)(zk, {
          item: mb.item,
          amount: mb.quantity,
          tier: null !== (sb = null === (kb = nb.enchant) || void 0 === kb ? void 0 : kb.tier) && void 0 !== sb ? sb : null
        }), (0, fb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fb.jsx)("b", {
            children: (0, fb.jsx)(Bk.d, {
              text: null !== (Wb = nb.customTitle) && void 0 !== Wb ? Wb : mb.item
            })
          }), (0, fb.jsx)("small", {
            children: Hb("smpShop:sellEach", {
              count: mb.quantity
            })
          })]
        }), (0, fb.jsx)(rk, {
          options: lb.map((bb => {
            let {
              label: cb,
              quantity: sb,
              isAll: kb
            } = bb;
            return {
              value: cb,
              label: kb ? Hb("smpShop:all", {
                count: sb
              }) : String(sb)
            }
          })),
          value: Ub,
          onChange: Ib,
          ariaLabel: Hb("smpShop:quantity")
        }), (0, fb.jsxs)(Qb.p, {
          loading: Mb.isPending(Xb),
          disabled: null === Ub,
          onClick: () => {
            Mb.act(Xb, Ub)
          },
          children: [Hb("smpShop:sellButton"), " ", (0, fb.jsx)(qk, {
            amount: eb
          })]
        })]
      })
    }

    function GW() {
      var bb;
      const {
        t: cb
      } = (0, Tb.E)(), sb = nW(), kb = null === (bb = sb.shopInfo[sb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Wb = cW(kb, "collect"), ab = cW(kb, "myListing"), Ub = (bb, cb) => sb.isPending(bb) || !1 === cb.canBuy;
      return (0, fb.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, fb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: cb("smpShop:readyToCollect")
        }), Wb.length > 0 ? (0, fb.jsx)("div", {
          className: "SmpList",
          children: Wb.map((bb => {
            var kb, Wb;
            let {
              key: ab,
              item: Tb,
              meta: Ib
            } = bb;
            return (0, fb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fb.jsx)(zk, {
                item: "sold" === Ib.type ? "Gold Coin" : Ib.item,
                amount: "sold" === Ib.type ? 0 : Ib.quantity,
                tier: null !== (kb = null === (Wb = Tb.enchant) || void 0 === Wb ? void 0 : Wb.tier) && void 0 !== kb ? kb : null
              }), (0, fb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fb.jsx)("b", {
                  children: (0, fb.jsx)(Bk.d, {
                    text: Tb.customTitle
                  })
                }), (0, fb.jsx)("small", {
                  children: (0, fb.jsx)(Bk.d, {
                    text: Tb.description
                  })
                })]
              }), (0, fb.jsx)(Qb.n, {
                loading: Ub(ab, Tb),
                onClick: () => {
                  sb.act(ab)
                },
                children: cb("smpShop:collect")
              })]
            }, ab)
          }))
        }) : (0, fb.jsx)(Ak, {
          title: cb("smpShop:nothingToCollect"),
          children: cb("smpShop:nothingToCollectHint")
        }), (0, fb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: cb("smpShop:activeListings", {
            count: ab.length
          })
        }), ab.length > 0 ? (0, fb.jsx)("div", {
          className: "SmpList",
          children: ab.map((bb => {
            var kb, Wb;
            let {
              key: ab,
              item: Tb,
              meta: Ib
            } = bb;
            return (0, fb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fb.jsx)(zk, {
                item: Ib.item,
                amount: Ib.quantity,
                tier: null !== (kb = null === (Wb = Tb.enchant) || void 0 === Wb ? void 0 : Wb.tier) && void 0 !== kb ? kb : null
              }), (0, fb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fb.jsx)("b", {
                  children: (0, fb.jsx)(Bk.d, {
                    text: Tb.customTitle
                  })
                }), (0, fb.jsx)("small", {
                  children: cb("smpShop:timeLeft", {
                    time: aW(Ib.expiresAt)
                  })
                })]
              }), (0, fb.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, fb.jsx)(qk, {
                  amount: Ib.pricePerItem
                }), (0, fb.jsx)("small", {
                  children: cb("smpShop:each")
                })]
              }), (0, fb.jsx)(Qb.G, {
                loading: Ub(ab, Tb),
                onClick: () => {
                  sb.act(ab)
                },
                children: cb("smpShop:cancel")
              })]
            }, ab)
          }))
        }) : (0, fb.jsx)(Ak, {
          title: cb("smpShop:noActiveListings"),
          children: cb("smpShop:noActiveListingsHint")
        })]
      })
    }

    function KW(bb) {
      let {
        done: cb,
        of: sb
      } = bb;
      return (0, fb.jsx)("span", {
        className: "SmpProgress",
        children: (0, fb.jsx)("i", {
          style: {
            width: `${Math.min(100,cb/Math.max(1,sb)*100)}%`
          }
        })
      })
    }

    function ZW(bb) {
      var cb, sb, kb;
      let {
        entry: Wb,
        choice: ab,
        onChoose: Ub
      } = bb;
      const {
        t: Ib
      } = (0, Tb.E)(), Hb = nW(), {
        key: Mb,
        item: Xb,
        meta: nb
      } = Wb, mb = "dropdown" === (null === (cb = Xb.userInput) || void 0 === cb ? void 0 : cb.type) ? Xb.userInput.dropdownOptions : [], lb = !0 === nb.processing, eb = null !== nb.creator && (nb.qU > 0 || lb), Cb = eb && nb.qU > 0 ? TW(mb) : [], Nb = null === ab ? 0 : null !== (sb = null === (kb = Cb.find((bb => bb.label === ab))) || void 0 === kb ? void 0 : kb.quantity) && void 0 !== sb ? sb : 0;
      return (0, fb.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, fb.jsx)(zk, {
          item: nb.item
        }), (0, fb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, fb.jsx)("b", {
            children: (0, fb.jsx)(Bk.d, {
              text: Xb.customTitle
            })
          }), (0, fb.jsxs)("small", {
            children: [(0, fb.jsx)(qk, {
              amount: nb.pricePerItem
            }), " ", Ib("smpShop:each"), " \xb7", " ", null === nb.creator ? Ib("smpShop:you") : (0, fb.jsx)(Bk.d, {
              text: [{
                entityName: nb.creator
              }]
            })]
          }), (0, fb.jsx)(KW, {
            done: nb.delivered,
            of: nb.wanted
          })]
        }), eb ? (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)(rk, {
            options: Cb.map((bb => {
              let {
                label: cb,
                quantity: sb,
                isAll: kb
              } = bb;
              return {
                value: cb,
                label: kb ? Ib("smpShop:max", {
                  count: sb
                }) : String(sb)
              }
            })),
            value: ab,
            onChange: Ub,
            ariaLabel: Ib("smpShop:quantity")
          }), (0, fb.jsxs)(Qb.p, {
            loading: Hb.isPending(Mb) || lb,
            disabled: null === ab,
            onClick: () => {
              Hb.act(Mb, ab)
            },
            children: [Ib("smpShop:deliver"), " ", (0, fb.jsx)(qk, {
              amount: Nb * nb.pricePerItem
            })]
          })]
        }) : (0, fb.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === nb.creator ? Ib("smpShop:yourOrder") : Ib("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function zW() {
      var bb;
      const {
        t: cb
      } = (0, Tb.E)(), sb = nW(), Wb = null === (bb = sb.shopInfo[sb.categoryKey]) || void 0 === bb ? void 0 : bb.items, ab = sW(Wb, "search"), Ub = sW(Wb, "creator"), Ib = cW(Wb, "order"), Hb = sW(Wb, "empty"), Mb = eW(ab, Ib.length > 0 || null !== Hb), [Xb, nb] = (0, kb.useState)(!1), [mb, lb] = (0, kb.useState)({});
      return (0, fb.jsx)(LW, {
        browser: Mb,
        recentLabel: cb("smpShop:recentOrders"),
        action: (0, fb.jsx)(Qb.p, {
          onClick: () => {
            nb((bb => !bb))
          },
          children: cb("smpShop:createOrder")
        }),
        above: Xb && (0, fb.jsx)(yW, {
          mode: "order",
          creator: Ub,
          catalogue: Mb.catalogue,
          names: Mb.names,
          searching: Mb.loading,
          prices: [],
          onPickItem: Mb.searchFor,
          onClose: () => {
            nb(!1)
          }
        }),
        onBack: () => {
          nb(!1)
        },
        summary: Ib.length > 0 && cb(1 === Ib.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Ib.length,
          price: Gk(uW(Ib, "max"))
        }),
        list: Mb.loading ? (0, fb.jsx)(dk, {}) : Ib.length > 0 ? (0, fb.jsx)(mW.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: kW,
          observerUpdateDeps: [Ib.length],
          children: Ib.map((bb => (0, fb.jsx)(ZW, {
            entry: bb,
            choice: fW(bb.item, mb[bb.key]),
            onChoose: cb => {
              lb({
                ...mb,
                [bb.key]: cb
              })
            }
          }, bb.key)))
        }) : Hb ? (0, fb.jsx)(wk, {
          entry: Hb
        }) : (0, fb.jsx)(dk, {
          count: 3
        })
      })
    }

    function qW() {
      var bb;
      const {
        t: cb
      } = (0, Tb.E)(), sb = nW(), kb = cW(null === (bb = sb.shopInfo[sb.categoryKey]) || void 0 === bb ? void 0 : bb.items, "myOrder");
      return 0 === kb.length ? (0, fb.jsx)("div", {
        className: "SmpScreen",
        children: (0, fb.jsx)(Ak, {
          title: cb("smpShop:noOrders"),
          children: cb("smpShop:noOrdersHint")
        })
      }) : (0, fb.jsx)("div", {
        className: "SmpScreen",
        children: (0, fb.jsx)("div", {
          className: "SmpList",
          children: kb.map((bb => {
            let {
              key: kb,
              item: Wb,
              meta: ab
            } = bb;
            const Tb = sb.isPending(kb) || !1 === Wb.canBuy;
            return (0, fb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, fb.jsx)(zk, {
                item: ab.item,
                amount: ab.collectable
              }), (0, fb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, fb.jsx)("b", {
                  children: (0, fb.jsx)(Bk.d, {
                    text: Wb.customTitle
                  })
                }), (0, fb.jsxs)("small", {
                  children: [(0, fb.jsx)(qk, {
                    amount: ab.pricePerItem
                  }), " ", cb("smpShop:each"), ab.collectable > 0 && ` \xb7 ${cb("smpShop:readyCount",{count:ab.collectable})}`]
                }), (0, fb.jsx)(KW, {
                  done: ab.delivered,
                  of: ab.wanted
                })]
              }), ab.collectable > 0 ? (0, fb.jsx)(Qb.n, {
                loading: Tb,
                onClick: () => {
                  sb.act(kb)
                },
                children: cb("smpShop:collectCount", {
                  count: ab.collectable
                })
              }) : (0, fb.jsx)(Qb.G, {
                loading: Tb,
                onClick: () => {
                  sb.act(kb)
                },
                children: cb("smpShop:cancel")
              })]
            }, kb)
          }))
        })
      })
    }
    const dW = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      AW = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function wW(bb, cb) {
      let sb = !1;
      const kb = {};
      for (const Wb in bb) cb(Wb, bb[Wb]) ? kb[Wb] = bb[Wb] : sb = !0;
      return sb ? kb : bb
    }

    function rW(bb) {
      var cb, sb, Wb, Ib;
      const {
        show: Hb,
        shopInfo: Mb,
        selectedCategoryKey: Xb
      } = bb, {
        t: nb
      } = (0, Tb.E)(), mb = null !== Xb && void 0 !== Xb ? Xb : "", lb = bW(Mb, mb), Qb = null === (cb = Mb[mb]) || void 0 === cb ? void 0 : cb.items, eb = null !== lb, [Cb, Nb] = (0, kb.useState)({}), [Vb, Lb] = (0, kb.useState)([]), [ub, Yb] = (0, kb.useState)(!1), [hb, Jb] = (0, kb.useState)(null), [, gb] = (0, kb.useState)(0), Bb = (0, kb.useRef)(0), tb = (0, kb.useRef)({}), yb = (0, kb.useRef)({
        items: Qb,
        pending: Cb,
        shopInfo: Mb,
        active: eb,
        canAfford: bb.canAfford,
        buy: bb.buy
      });
      yb.current = {
        items: Qb,
        pending: Cb,
        shopInfo: Mb,
        active: eb,
        canAfford: bb.canAfford,
        buy: bb.buy
      };
      const Pb = (0, kb.useCallback)((bb => {
        Bb.current++;
        const cb = Bb.current;
        Lb((sb => [{
          id: cb,
          text: bb
        }, ...sb].slice(0, 8))), Jb(cb)
      }), []);
      (0, kb.useEffect)((() => {
        if (null === hb) return;
        const bb = setTimeout((() => {
          Jb(null)
        }), 3e3);
        return () => {
          clearTimeout(bb)
        }
      }), [hb]), (0, kb.useEffect)((() => {
        const cb = bb.message;
        if (!cb) return;
        const {
          shopInfo: sb,
          active: kb,
          items: Wb
        } = yb.current, ab = null !== cb.categoryKey ? null !== bW(sb, cb.categoryKey) : kb;
        (ab || kb) && Pb(cb.text), ab && Nb((bb => wW(bb, (bb => {
          var cb, sb;
          return !dW.has(null === Wb || void 0 === Wb || null === (cb = Wb[bb]) || void 0 === cb || null === (sb = cb.smp) || void 0 === sb ? void 0 : sb.kind)
        }))))
      }), [bb.message, Pb]), (0, kb.useEffect)((() => {
        Nb((bb => wW(bb, ((bb, cb) => MW(null === Qb || void 0 === Qb ? void 0 : Qb[bb]) === cb.snapshot))))
      }), [Mb, Qb]);
      const Db = Object.keys(Cb).length > 0;
      (0, kb.useEffect)((() => {
        if (!Db) return;
        const bb = setInterval((() => {
          gb((bb => bb + 1));
          const bb = Date.now(),
            {
              pending: cb,
              items: sb
            } = yb.current,
            kb = Object.keys(cb).filter((sb => bb - cb[sb].at >= 12e3));
          if (0 === kb.length) return;
          const Wb = kb.some((bb => {
            var kb, Wb;
            return "search" !== (null === sb || void 0 === sb || null === (kb = sb[bb]) || void 0 === kb || null === (Wb = kb.smp) || void 0 === Wb ? void 0 : Wb.kind) || cb[bb].resend
          }));
          for (const ab of kb) tb.current[ab] = bb;
          Nb((bb => wW(bb, (bb => !kb.includes(bb))))), Wb && Pb(nb("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(bb)
        }
      }), [Db]), (0, kb.useEffect)((() => {
        Nb({})
      }), [mb]), (0, kb.useEffect)((() => {
        Hb || Yb(!1)
      }), [Hb]);
      const Eb = (0, kb.useCallback)((function(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: kb,
            pending: Wb,
            canAfford: ab,
            buy: Tb
          } = yb.current, Ub = null === kb || void 0 === kb ? void 0 : kb[bb];
          if (!Ub || bb in Wb || !1 === Ub.canBuy) return !1;
          if (!ab(Ub, (0, Yk.e)(Ub, cb))) return !1;
          Tb(bb, Ub, cb);
          const Ib = {
            snapshot: MW(Ub),
            at: Date.now(),
            resend: sb
          };
          return yb.current.pending = {
            ...yb.current.pending,
            [bb]: Ib
          }, Nb((cb => ({
            ...cb,
            [bb]: Ib
          }))), !0
        }), []),
        ib = (0, kb.useMemo)((() => ({
          shopInfo: Mb,
          categoryKey: mb,
          canAfford: bb.canAfford,
          isPending: bb => bb in Cb,
          gaveUpAt: bb => {
            var cb;
            return null !== (cb = tb.current[bb]) && void 0 !== cb ? cb : 0
          },
          act: Eb,
          notify: Pb
        })), [Mb, mb, bb.canAfford, Cb, Eb, Pb]),
        Ob = Math.min(...Object.values(Cb).map((bb => bb.at))),
        Gb = Db && Date.now() - Ob > 1500,
        Kb = Vb.length > 1,
        Zb = null !== (sb = null === (Wb = Mb[mb]) || void 0 === Wb ? void 0 : Wb.customTitle) && void 0 !== sb ? sb : mb,
        zb = null === (Ib = Mb[mb]) || void 0 === Ib ? void 0 : Ib.description;
      let qb = null;
      return "market" === lb ? qb = (0, fb.jsx)(PW, {}) : "sell" === lb ? qb = (0, fb.jsx)(iW, {}) : "collect" === lb ? qb = (0, fb.jsx)(GW, {}) : "orders" === lb ? qb = (0, fb.jsx)(zW, {}) : "myOrders" === lb && (qb = (0, fb.jsx)(qW, {})), (0, fb.jsx)(XW.Provider, {
        value: ib,
        children: (0, fb.jsx)("div", {
          className: "SmpShopHost",
          hidden: !eb,
          children: (0, fb.jsxs)("div", {
            className: "SmpShop",
            children: [(0, fb.jsx)("header", {
              className: "SmpHeader",
              children: (0, fb.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, fb.jsxs)("h2", {
                  children: [lb && (0, fb.jsx)(Ub.b, {
                    name: AW[lb]
                  }), nb(Zb)]
                }), zb && (0, fb.jsx)("p", {
                  children: (0, fb.jsx)(Bk.d, {
                    text: zb
                  })
                })]
              })
            }), (0, fb.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Hb && qb
            }), (0, fb.jsxs)("button", {
              type: "button",
              className: ab()("SmpStatus", {
                SmpStatusWaiting: Db,
                SmpStatusFresh: !Db && null !== hb,
                SmpStatusHasHistory: Kb
              }),
              "aria-live": "polite",
              "aria-expanded": Kb ? ub : void 0,
              onClick: () => {
                Kb && Yb((bb => !bb))
              },
              children: [Db ? (0, fb.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, fb.jsx)(Sk, {}), nb(Gb ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Vb[0] ? (0, fb.jsx)("span", {
                className: "SmpStatusText",
                children: (0, fb.jsx)(Bk.d, {
                  text: Vb[0].text
                })
              }, Vb[0].id) : (0, fb.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: nb("smpShop:ready")
              }), Kb && (0, fb.jsx)("small", {
                children: nb("smpShop:recentMessages", {
                  count: Vb.length
                })
              })]
            }), ub && Kb && (0, fb.jsx)("div", {
              className: "SmpStatusHistory",
              children: Vb.map((bb => (0, fb.jsx)("div", {
                children: (0, fb.jsx)(Bk.d, {
                  text: bb.text
                })
              }, bb.id)))
            })]
          })
        })
      })
    }
    class oW {
      constructor(bb) {
        this.info = bb
      }
      static fromShopInfo(bb) {
        const cb = {};
        for (const sb in bb) {
          const kb = !0 === bb[sb].redDot && !0 !== bb[sb].forceRemoveRedDot;
          cb[sb] = {
            redDot: kb,
            items: {}
          };
          for (const Wb in bb[sb].items) {
            const kb = bb[sb].items[Wb],
              ab = !0 === kb.redDot && !0 !== kb.forceRemoveRedDot;
            cb[sb].items[Wb] = {
              redDot: ab
            }
          }
        }
        return new oW(cb)
      }
      anyCategoryHasRedDots() {
        for (const bb in this.info)
          if (this.categoryHasRedDot(bb)) return !0;
        return !1
      }
      doesCategoryExist(bb) {
        return !(0, Ac.L)(this.info[bb])
      }
      categoryHasRedDot(bb) {
        return !0 === this.info[bb].redDot
      }
      updateCategoryRedDot(bb, cb) {
        this.info[bb].redDot = cb
      }
      doesItemExist(bb, cb) {
        return this.doesCategoryExist(bb) && !(0, Ac.L)(this.info[bb].items[cb])
      }
      itemHasRedDot(bb, cb) {
        return !0 === this.info[bb].items[cb].redDot
      }
      updateItemRedDot(bb, cb, sb) {
        this.info[bb].items[cb].redDot = sb
      }
      shallowCopy() {
        return new oW(this.info)
      }
    }

    function SW(bb, cb) {
      return `${bb}\x1f${cb}`
    }

    function RW(bb, cb) {
      return !(0, Ac.L)(cb) && !(0, Ac.L)(bb) && cb in bb
    }
    const vW = (0, kb.memo)((function(bb) {
      var cb, sb;
      let {
        show: Wb
      } = bb;
      const Tb = (0, xs.e)("players", ca),
        Ub = (0, xs.e)("players", sa),
        [Hb, Xb] = (0, kb.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: oW.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        nb = (0, kb.useRef)(""),
        lb = (0, kb.useRef)(null),
        eb = (0, kb.useRef)(null),
        Nb = (0, kb.useRef)(0),
        Vb = (0, kb.useRef)(void 0),
        Lb = (0, kb.useRef)(null),
        ub = (0, kb.useRef)(Hb),
        Yb = Hb.redDotInfo.anyCategoryHasRedDots(),
        [Jb, gb] = (0, kb.useState)(null),
        tb = (0, kb.useRef)(!1);
      let yb = !1,
        Pb = 0,
        Db = 0;
      if (Hb.currencyAmounts) {
        for (const bb in Hb.currencyAmounts) {
          var Eb;
          const cb = Hb.currencyAmounts[bb];
          cb.hidden || (Pb++, (null === (Eb = cb.subtext) || void 0 === Eb ? void 0 : Eb.length) > 0 && Db++)
        }
        yb = Pb + Db > 4
      }(0, kb.useEffect)((() => {
        wc.j.QQ("showShopIconRedDot", Yb, !0)
      }), [Yb]), (0, kb.useEffect)((() => {
        Cb.gameBridge.send("setShopOpen", Wb), Wb || (clearTimeout(Vb.current), Xb((bb => bb.awaitingPurchase ? {
          ...bb,
          awaitingPurchase: !1
        } : bb)))
      }), [Wb]), (0, kb.useEffect)((() => () => {
        Cb.gameBridge.send("setShopOpen", !1), clearTimeout(Vb.current)
      }), []), (0, kb.useEffect)((() => {
        ub.current = Hb
      }), [Hb]), (0, kb.useEffect)((() => {
        if (null === Jb) return;
        return (0, Dk.e)("pointerdown", (bb => {
          const cb = bb.target;
          null !== cb && void 0 !== cb && cb.closest(".ShopItem") || gb(null)
        }))
      }), [Jb]);
      const ib = bb => {
          Xb((cb => ({
            ...cb,
            ...bb
          })))
        },
        Ob = bb => {
          var cb;
          clearTimeout(null === (cb = Hb.onBoughtInfo) || void 0 === cb ? void 0 : cb.timeout);
          const sb = setTimeout((() => {
            ib({
              onBoughtInfo: null
            })
          }), 3e3);
          nb.current = bb, ib({
            onBoughtInfo: {
              text: bb,
              timeout: sb,
              categoryKey: lb.current
            }
          })
        },
        Gb = bb => {
          const {
            shopInfo: cb,
            userInputsPerItem: sb,
            redDotInfo: kb,
            autoSelectCategory: ab
          } = function(bb, cb, sb, kb, Wb, ab) {
            if ((0, Ac.L)(bb) || 0 === Object.keys(bb).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: oW.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Tb = Bb.n[Bb.r].adConfig.showRewardedAds,
              Ub = {};
            let Ib = null;
            for (const Qb in bb) {
              const cb = bb[Qb],
                sb = {};
              let kb = !1;
              for (const bb in cb.items) {
                const Wb = cb.items[bb];
                (0, Yk.o)(Wb, Tb) && (sb[bb] = Wb, kb = !0)
              }
              kb && (Ub[Qb] = {
                ...cb,
                items: sb
              }, !0 === cb.autoSelectCategory && (Ib = Qb))
            }
            const Hb = {},
              fb = (bb, cb, kb, Tb) => {
                var Ub, Ib;
                const fb = SW(bb, cb),
                  Mb = null !== (Ub = sb[fb]) && void 0 !== Ub ? Ub : sb[cb];
                if (null !== (Ib = Tb.userInput) && void 0 !== Ib && Ib.type) switch (Tb.userInput.type) {
                  case "dropdown": {
                    var Xb;
                    const bb = !Mb || !Tb.userInput.dropdownOptions.some((bb => (0, Yk.g)(bb) === Mb)),
                      cb = Tb.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === kb || void 0 === kb || null === (Xb = kb.userInput) || void 0 === Xb ? void 0 : Xb.type) || JSON.stringify(kb.userInput.dropdownOptions) !== JSON.stringify(Tb.userInput.dropdownOptions)),
                      sb = Tb.userInput,
                      Wb = !(0, Ac.L)(sb.initialValue) && sb.dropdownOptions.some((bb => (0, Yk.g)(bb) === sb.initialValue));
                    var nb;
                    return void(bb || cb ? Wb ? Hb[fb] = null !== (nb = Tb.userInput.initialValue) && void 0 !== nb ? nb : null : Tb.userInput.dropdownOptions.length > 0 ? Hb[fb] = (0, Yk.g)(Tb.userInput.dropdownOptions[0]) : Hb[fb] = null : Hb[fb] = Mb)
                  }
                  case "text":
                  case "number":
                    var mb, lb, Qb;
                    return void((null === kb || void 0 === kb ? void 0 : kb.userInput) !== Tb.userInput ? Hb[fb] = null !== (mb = null !== (lb = Tb.userInput.initialValue) && void 0 !== lb ? lb : Mb) && void 0 !== mb ? mb : "" : Hb[fb] = null !== (Qb = null !== Mb && void 0 !== Mb ? Mb : Tb.userInput.initialValue) && void 0 !== Qb ? Qb : "");
                  case "color":
                    var eb, Cb, Nb;
                    return void((null === kb || void 0 === kb ? void 0 : kb.userInput) !== Tb.userInput ? Hb[fb] = null !== (eb = null !== (Cb = Tb.userInput.initialValue) && void 0 !== Cb ? Cb : Mb) && void 0 !== eb ? eb : "#000000" : Hb[fb] = null !== (Nb = null !== Mb && void 0 !== Mb ? Mb : Tb.userInput.initialValue) && void 0 !== Nb ? Nb : "#000000");
                  case "player": {
                    const bb = (0, Yk.k)(Wb, ab, Tb.userInput);
                    return void(Mb && bb.includes(Mb) ? Hb[fb] = Mb : Hb[fb] = bb.length > 0 ? bb[0] : null)
                  }
                }
              };
            for (const Qb in Ub)
              for (const bb in Ub[Qb].items) {
                var Mb;
                const sb = Ub[Qb].items[bb];
                fb(Qb, bb, null === (Mb = cb[Qb]) || void 0 === Mb ? void 0 : Mb.items[bb], sb)
              }
            const Xb = oW.fromShopInfo(Ub);
            for (const Qb in Ub) {
              var nb;
              if (kb.doesCategoryExist(Qb)) {
                (null === (nb = cb[Qb]) || void 0 === nb ? void 0 : nb.redDot) === Ub[Qb].redDot && Xb.updateCategoryRedDot(Qb, kb.categoryHasRedDot(Qb));
                for (const bb in Ub[Qb].items) {
                  var mb, lb;
                  kb.doesItemExist(Qb, bb) && (null === (mb = cb[Qb]) || void 0 === mb || null === (lb = mb.items[bb]) || void 0 === lb ? void 0 : lb.redDot) === Ub[Qb].items[bb].redDot && Xb.updateItemRedDot(Qb, bb, kb.itemHasRedDot(Qb, bb))
                }
              }
            }
            return {
              shopInfo: Ub,
              userInputsPerItem: Hb,
              redDotInfo: Xb,
              autoSelectCategory: Ib
            }
          }(bb, Hb.shopInfo, Hb.userInputsPerItem, Hb.redDotInfo, Tb, Ub), Ib = {
            shopInfo: cb,
            userInputsPerItem: sb,
            redDotInfo: kb
          };
          if (null === ab || Wb)
            if (cb[Hb.selectedCategoryKey]) Ib.selectedCategoryKey = Hb.selectedCategoryKey;
            else {
              const bb = ik(cb);
              Ib.selectedCategoryKey = bb.length > 0 ? bb[0] : null
            }
          else Ib.selectedCategoryKey = ab;
          return 0 === Object.keys(cb).length && Wb && hb.d.set({
            openEverythingMenuName: null
          }), Ib
        },
        Kb = (bb, cb, sb) => {
          const kb = Hb.selectedCategoryKey,
            Wb = SW(kb, bb),
            ab = null !== sb && void 0 !== sb ? sb : Hb.userInputsPerItem[Wb],
            Tb = {
              categoryKey: kb,
              itemKey: bb,
              userInput: ab
            };
          if (lb.current = kb, cb.isRewardedAd) {
            if (Date.now() - Nb.current < 5e3) return;
            (0, ac.ab)((() => {
              var sb, kb, ab;
              console.log("bought rewarded ad");
              const Ub = Tb.categoryKey ? null === (sb = ub.current.shopInfo[Tb.categoryKey]) || void 0 === sb ? void 0 : sb.items[bb] : null;
              if (!Ub || !Ub.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (kb = cb.userInput) || void 0 === kb ? void 0 : kb.type) === (null === Ub || void 0 === Ub || null === (ab = Ub.userInput) || void 0 === ab ? void 0 : ab.type) ? (Tb.userInput = ub.current.userInputsPerItem[Wb], Cb.gameBridge.send("buyShopItem", Tb), cb.onBoughtMessage && Ob(cb.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Nb.current = Date.now()
          } else {
            Cb.gameBridge.send("buyShopItem", Tb), ib({
              awaitingPurchase: !0
            }), clearTimeout(Vb.current), Vb.current = setTimeout((() => {
              Lb.current = null, ib({
                awaitingPurchase: !1
              })
            }), 1e3);
            const bb = (0, Yk.e)(cb, ab);
            if (Lb.current = null, !isNaN(bb) && RW(Hb.currencyAmounts, cb.currency)) {
              0 !== bb && (Lb.current = {
                currency: cb.currency,
                amountBefore: Hb.currencyAmounts[cb.currency].amount
              });
              const sb = {
                ...Hb.currencyAmounts
              };
              sb[cb.currency].amount -= bb, ib({
                currencyAmounts: sb
              })
            }
            cb.onBoughtMessage && Ob(cb.onBoughtMessage)
          }
        },
        zb = (bb, cb) => {
          if (null === cb || !bb.shopInfo[cb]) return bb;
          let sb = bb.redDotInfo;
          return sb.categoryHasRedDot(cb) && (sb.updateCategoryRedDot(cb, !1), sb = sb.shallowCopy()), {
            ...bb,
            selectedCategoryKey: cb,
            redDotInfo: sb
          }
        },
        qb = bb => {
          Xb((cb => zb(cb, bb)))
        };
      (0, Bc.f)(Ek.h, (() => {
        Xb((bb => {
          const cb = (0, Ek.i)(ik(bb.shopInfo), bb.selectedCategoryKey, (cb => (0, Ek.e)(bb.shopInfo[cb].items)));
          return cb === bb.selectedCategoryKey ? bb : zb(bb, cb)
        }))
      })), (0, Bc.f)("showShopFromServer", (bb => {
        let {
          toggle: cb,
          Lc: sb
        } = bb;
        sb && qb(sb), 0 === Object.keys(Hb.shopInfo).length || cb && Wb ? hb.d.set({
          openEverythingMenuName: null
        }) : hb.d.set({
          openEverythingMenuName: Hc.r.SHOP
        })
      })), (0, Bc.f)("closeShopOnDamaged", (() => {
        Wb && hb.d.set({
          openEverythingMenuName: null
        })
      })), (0, Bc.f)("overShopInfo", (bb => {
        Ob(bb)
      })), (0, mb.c)("currencyAmounts", (bb => {
        var cb;
        const sb = Lb.current;
        sb && (null === bb || void 0 === bb || null === (cb = bb[sb.currency]) || void 0 === cb ? void 0 : cb.amount) === sb.amountBefore ? ib({
          currencyAmounts: bb
        }) : (Lb.current = null, ib({
          currencyAmounts: bb,
          awaitingPurchase: !1
        }))
      })), (0, mb.c)("shopInfo", (bb => {
        ib({
          ...Gb(bb),
          awaitingPurchase: !1
        })
      }));
      const db = (0, kb.useRef)({
        playerIds: Tb,
        localPlayerId: Ub
      });
      (0, kb.useEffect)((() => {
        db.current.playerIds === Tb && db.current.localPlayerId === Ub || (db.current = {
          playerIds: Tb,
          localPlayerId: Ub
        }, Xb((bb => {
          const cb = Gb(bb.shopInfo);
          return {
            ...bb,
            ...cb
          }
        })))
      }), [Tb, Ub]);
      const Ab = Hb.selectedCategoryKey,
        wb = (bb, cb) => {
          var sb, kb;
          return (isNaN(cb) || (0, Ac.L)(bb.currency) || RW(Hb.currencyAmounts, bb.currency) && cb <= Hb.currencyAmounts[bb.currency].amount) && (null === (sb = bb.canBuy) || void 0 === sb || sb) && !(null !== (kb = bb.hidden) && void 0 !== kb && kb)
        },
        rb = (bb, cb) => {
          var sb, kb, Wb;
          const Tb = SW(Ab, bb),
            Ub = Hb.shopInfo[Ab].items[bb],
            Mb = Hb.userInputsPerItem[Tb],
            Xb = (0, Yk.e)(Ub, Mb),
            nb = wb(Ub, Xb),
            mb = Ub.enchant,
            lb = mb ? (0, Zb.ub)(null !== (sb = Ub.customTitle) && void 0 !== sb ? sb : bb, {
              colour: Zb.nb[mb.tier]
            }) : null !== (kb = Ub.customTitle) && void 0 !== kb ? kb : bb,
            eb = cb => {
              const sb = null !== cb && void 0 !== cb ? cb : Mb,
                kb = void 0 !== cb ? (0, Yk.e)(Ub, cb) : Xb;
              wb(Ub, kb) && null !== sb && Kb(bb, Ub, cb);
              let Wb = Hb.redDotInfo;
              Wb.itemHasRedDot(Ab, bb) && (Wb.updateItemRedDot(Ab, bb, !1), Wb = Wb.shallowCopy()), ib({
                redDotInfo: Wb
              })
            };
          return (0, fb.jsxs)("div", {
            className: ab()("ShopItem", {
              ShopItemNoInput: !Ub.userInput,
              ShopItemNoInputCanBuy: !Ub.userInput && nb,
              ShopItemNoInputSelected: Ub.isSelected,
              ShopItemEnchant: !!mb
            }),
            "data-pad-focusable": !Ub.userInput || void 0,
            "data-pad-unavailable": !Ub.userInput && !nb || void 0,
            "data-pad-repeat": null !== (Wb = (0, Ek.b)(Ub)) && void 0 !== Wb ? Wb : void 0,
            "data-pad-repeat-wait": Hb.awaitingPurchase || void 0,
            onClick: () => {
              if (mb && tb.current) {
                if (Jb !== Tb) return void gb(Tb);
                gb(null)
              }
              Ub.userInput || eb()
            },
            onPointerDown: bb => {
              mb && (tb.current = (0, Jk.u)(bb))
            },
            onPointerEnter: bb => {
              mb && !(0, Jk.u)(bb) && gb(Tb)
            },
            onPointerLeave: bb => {
              mb && !(0, Jk.u)(bb) && gb((bb => bb === Tb ? null : bb))
            },
            style: {
              zIndex: Object.keys(Hb.shopInfo[Ab].items).length - cb
            },
            children: [Hb.redDotInfo.itemHasRedDot(Ab, bb) && (0, fb.jsx)(Ib.b, {
              top: "-6px",
              right: "-6px"
            }), Ub.badge && (0, fb.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, fb.jsx)("div", {
                className: ab()("ShopBadgeMain", Ub.badge.type),
                children: (0, fb.jsx)(Bk.d, {
                  text: Ub.badge.text
                })
              })
            }), (0, fb.jsx)("div", {
              className: "ShopItemLeft",
              children: Ub.image && (0, fb.jsx)(FW, {
                item: Ub,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, fb.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, fb.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, fb.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, fb.jsx)(Bk.d, {
                    text: lb
                  })
                }), (0, fb.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, fb.jsx)(Bk.d, {
                    text: Ub.description
                  })
                })]
              }), Ub.userInput && (0, fb.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: bb => {
                  bb.stopPropagation()
                },
                children: [(0, fb.jsx)(pW, {
                  item: Ub,
                  currInput: Mb,
                  updateInput: cb => {
                    ((bb, cb, sb) => {
                      const kb = SW(bb, cb),
                        Wb = {
                          ...Hb.userInputsPerItem
                        };
                      Wb[kb] = sb, ib({
                        userInputsPerItem: Wb
                      })
                    })(Ab, bb, cb)
                  },
                  onSubmit: bb => {
                    eb(bb)
                  }
                }), ("dropdown" !== Ub.userInput.type || !Ub.userInput.autoSubmit) && (0, fb.jsx)(Qb.d, {
                  className: "ItemCostButton",
                  disabled: !nb && null !== Mb,
                  onClick: () => {
                    eb()
                  },
                  children: (0, fb.jsx)(jW, {
                    item: Ub,
                    cost: Xb,
                    currencyAmounts: Hb.currencyAmounts
                  })
                })]
              })]
            }), !Ub.userInput && (0, fb.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, fb.jsx)(jW, {
                item: Ub,
                cost: Xb,
                currencyAmounts: Hb.currencyAmounts
              })
            }), mb && Jb === Tb && (0, fb.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, fb.jsx)(Bk.d, {
                text: lb
              }), (0, fb.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, fb.jsx)(Bk.d, {
                  text: (0, hk.e)("", mb.enchantments, mb.enchantmentData)
                })
              })]
            })]
          }, Tb)
        },
        ob = function(bb) {
          for (const cb in bb)
            if (bb[cb].smp) return !0;
          return !1
        }(Hb.shopInfo),
        Sb = bW(Hb.shopInfo, Ab);
      return (0, fb.jsx)(Vk.c, {
        className: "Menu ShopBody",
        show: Wb,
        children: 0 !== Object.keys(Hb.shopInfo).length && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, fb.jsx)(Mb, {
              items: ik(Hb.shopInfo).map((bb => {
                var cb;
                return {
                  id: bb,
                  title: null !== (cb = Hb.shopInfo[bb].customTitle) && void 0 !== cb ? cb : bb,
                  redDot: Hb.redDotInfo.categoryHasRedDot(bb)
                }
              })),
              selectedItemId: Ab,
              onClick: qb,
              padStartsOnTab: (0, Ek.c)(Ab)
            }), (0, fb.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Hb.currencyAmounts && Object.keys(Hb.currencyAmounts).map((bb => {
                var cb;
                const sb = Hb.currencyAmounts[bb];
                return sb.hidden ? null : (0, fb.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (yb ? "SmallText" : ""),
                  children: [(0, fb.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, fb.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: sb.iconColour
                      },
                      children: (0, fb.jsx)(ka, {
                        iconName: sb.icon
                      })
                    }), "\xa0", (0, uk.e)(sb.amount, 6)]
                  }), (null === (cb = sb.subtext) || void 0 === cb ? void 0 : cb.length) > 0 && (0, fb.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, fb.jsx)(Bk.d, {
                      text: sb.subtext
                    })
                  })]
                }, bb)
              }))
            })]
          }), (0, fb.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [ob && (0, fb.jsx)(rW, {
              show: Wb,
              shopInfo: Hb.shopInfo,
              selectedCategoryKey: Ab,
              buy: (bb, cb, sb) => {
                Kb(bb, cb, sb)
              },
              canAfford: wb,
              message: Hb.onBoughtInfo
            }), null === Sb && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)("div", {
                className: ab()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Hb.onBoughtInfo
                }),
                children: (0, fb.jsx)(Bk.d, {
                  text: nb.current
                })
              }), (0, fb.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, fb.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (cb = Hb.shopInfo[Ab]) || void 0 === cb ? void 0 : cb.description) && (0, fb.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, fb.jsx)(Bk.d, {
                      text: Hb.shopInfo[Ab].description
                    })
                  }), Wb && (0, fb.jsx)("div", {
                    className: "ShopItems",
                    ref: eb,
                    "data-pad-initial-area": !0,
                    children: ik(null === (sb = Hb.shopInfo[Ab]) || void 0 === sb ? void 0 : sb.items).map(((bb, cb) => rb(bb, cb)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function FW(bb) {
      let {
        item: cb,
        minWidth: sb,
        minHeight: kb
      } = bb;
      const {
        image: Wb,
        schematicId: ab,
        imageColour: Tb
      } = cb;
      if (ab) return (0, fb.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${sb}rem`,
          height: `${kb}rem`
        },
        children: (0, fb.jsx)(tk.c, {
          game: {
            schematicId: ab
          }
        })
      });
      var Ib, Hb;
      if ((0, gk.e)(Wb)) return (0, fb.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${sb}rem`,
          height: "0",
          minHeight: `${kb}rem`
        },
        children: (0, fb.jsx)(gk.d, {
          itemName: Wb,
          amount: null !== (Ib = cb.amount) && void 0 !== Ib ? Ib : 0,
          amountFontSize: kb / 4 + "rem",
          enchantmentTier: null === (Hb = cb.enchant) || void 0 === Hb ? void 0 : Hb.tier
        })
      });
      const Mb = Wb.slice(-4);
      return ".jpg" === Mb || ".png" === Mb ? (0, fb.jsx)(xW, {
        image: Wb,
        minWidth: sb
      }) : (0, fb.jsx)(Ub.b, {
        name: Wb,
        className: "SelectedItemImage",
        style: {
          color: Tb
        }
      })
    }

    function xW(bb) {
      let {
        image: cb,
        minWidth: sb
      } = bb;
      const {
        gameNameWithVariation: kb
      } = (0, xs.f)("connectedGame"), Wb = cb.endsWith(".jpg");
      return (0, fb.jsx)("img", {
        className: ab()({
          ShopPixelImage: !Wb
        }),
        style: {
          width: `${Wb?1.6*sb:sb}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Zb.Wb)(kb)}/${cb}`,
        alt: cb,
        draggable: !1
      })
    }

    function jW(bb) {
      let {
        item: cb,
        cost: sb,
        currencyAmounts: kb
      } = bb;
      const Wb = !isNaN(sb) && 0 !== sb && RW(kb, cb.currency);
      let ab = null;
      return cb.buyButtonText ? ab = cb.buyButtonText : Wb ? (ab = sb, cb.sell && (ab = -1 * sb), ab = ab.toString()) : 0 === sb ? ab = "Free" : cb.isRewardedAd && (ab = "Watch ad"), (0, Ac.L)(ab) || " " === ab ? null : (0, fb.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Wb && (0, fb.jsx)("div", {
          style: {
            color: kb[cb.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, fb.jsx)(ka, {
            iconName: kb[cb.currency].icon
          })
        }), (0, fb.jsx)("div", {
          className: "BuyItemCost",
          children: (0, fb.jsx)(Bk.d, {
            text: ab
          })
        })]
      })
    }

    function pW(bb) {
      let {
        item: cb,
        currInput: sb,
        updateInput: Wb,
        onSubmit: ab
      } = bb;
      const {
        t: Ub
      } = (0, Tb.E)(), Ib = (0, kb.useRef)(null);
      if ((0, kb.useEffect)((() => {
          const bb = Ib.current;
          bb && bb.value !== sb && document.activeElement !== bb && (bb.value = null !== sb && void 0 !== sb ? sb : "")
        }), [sb]), !cb.userInput) return null;
      let Hb = cb.userInput;
      if (eb.featureFlags.sanitizeShopInput && "text" === cb.userInput.type && (Hb = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Hb.type || "number" === Hb.type) {
        var Mb, Xb;
        console.assert(void 0 !== sb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cb)}`);
        const bb = "text" === Hb.type && Hb.wordCharsOnly;
        return (0, fb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, fb.jsx)(Lb.c, {
            className: "ShopItemUserInputText",
            placeholderText: Ub(Hb.placeholderText),
            defaultValue: sb,
            domRef: Ib,
            onValueChange: (cb, sb) => {
              !0 === bb && (cb = (0, Pk.bb)(cb)), Ib.current.value = cb, Wb(cb)
            },
            onEnter: ab,
            type: Hb.type
          }, (null !== (Mb = Hb.initialValue) && void 0 !== Mb ? Mb : "") + (null !== (Xb = Hb.placeholderText) && void 0 !== Xb ? Xb : ""))
        })
      }
      if ("dropdown" === Hb.type) {
        console.assert(void 0 !== sb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cb)}`);
        const bb = Hb.autoSubmit;
        return (0, fb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, fb.jsx)(Lc.e, {
            options: Hb.dropdownOptions.map((bb => (0, Yk.g)(bb))),
            value: sb,
            onChange: cb => {
              let {
                value: sb
              } = cb;
              Wb(sb), bb && ab(sb)
            }
          })
        })
      }
      return "player" === Hb.type ? (0, fb.jsx)(ba, {
        userInput: Hb,
        currInput: sb,
        updateInput: Wb
      }) : "color" === Hb.type ? (0, fb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, fb.jsx)("input", {
          type: "color",
          value: sb,
          onChange: bb => {
            Wb(bb.target.value)
          }
        })
      }) : null
    }

    function ba(bb) {
      let {
        userInput: cb,
        currInput: sb,
        updateInput: kb
      } = bb;
      const Wb = (0, xs.f)("players"),
        ab = (0, xs.f)("hiddenPlayerNames"),
        Tb = (0, Yk.k)(Wb.ids, Wb.localId, cb);
      return (0, fb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, fb.jsx)(Lc.e, {
          options: Tb.map((bb => {
            const {
              name: cb
            } = Wb.byId[bb];
            return {
              value: bb,
              label: null === cb ? "" : (0, yk.e)(cb, ab)
            }
          })),
          value: sb,
          onChange: bb => {
            let {
              value: cb
            } = bb;
            kb(cb)
          }
        })
      })
    }

    function ca(bb) {
      let {
        ids: cb
      } = bb;
      return cb
    }

    function sa(bb) {
      let {
        localId: cb
      } = bb;
      return cb
    }

    function ka(bb) {
      let {
        iconName: cb
      } = bb;
      return Cb.gameBridge.lookup("isItemName", cb) ? (0, fb.jsx)(gk.d, {
        itemName: cb,
        amount: 1
      }) : (0, fb.jsx)(Ub.b, {
        name: cb,
        className: "2x"
      })
    }
    var Wa = sb(1626);
    const aa = (0, sb(1381).i)((bb => bb.PadLobbyShortcuts)),
      Ta = (0, kb.lazy)((() => Promise.resolve().then((() => sb(4389))).then((bb => ({
        default: bb.Lobbyleaderboard
      })))));

    function Ua(bb) {
      let {
        show: cb
      } = bb;
      return cb ? (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)(aa, {}), (0, fb.jsx)(kb.Suspense, {
          fallback: (0, fb.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, fb.jsx)(ub.d, {})
          }),
          children: (0, fb.jsx)(Ta, {})
        })]
      }) : null
    }
    var Ia = sb(1542),
      Ha = sb(2769),
      fa = sb(1704),
      Ma = sb(2824),
      Xa = sb(2532),
      na = sb(1471),
      ma = sb(1436),
      la = sb(2742),
      Qa = sb(2761),
      ea = sb(2246);
    const Ca = "storeRecentGiftRecipients",
      Na = new Map;

    function Va() {
      try {
        const bb = oc.h.getItem(Ca);
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.name) && bb.name.length > 0)).map((bb => ({
          name: bb.name,
          cosmetics: bb.cosmetics && "object" === typeof bb.cosmetics ? bb.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function La(bb) {
      var cb;
      const [sb, Wb] = (0, kb.useState)(""), [ab, Tb] = (0, kb.useState)("search"), [Ub, Ib] = (0, kb.useState)(null), [Hb, fb] = (0, kb.useState)(null), Mb = (0, kb.useRef)(null), Xb = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => () => {
        Mb.current && clearTimeout(Mb.current)
      }), []);
      const nb = null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.name) && void 0 !== cb ? cb : null;

      function mb() {
        Mb.current && (clearTimeout(Mb.current), Mb.current = null)
      }(0, kb.useEffect)((() => {
        if (null === nb || bb === tb.NULL_USER_CONTEXT) return;
        const cb = nb.toLowerCase();
        if (cb === bb.getPlayerName().toLowerCase()) return void fb({
          name: nb,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const sb = Na.get(cb);
        if (sb) return void fb({
          name: nb,
          result: sb
        });
        let kb = !1;
        return async function(bb, cb) {
          try {
            const sb = await (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${yb.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: cb
            }, {
              retries: 1
            }, bb.getMetricsCookies());
            if ("boolean" !== typeof(null === sb || void 0 === sb ? void 0 : sb.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(sb)}`);
            return sb
          } catch (sb) {
            return console.error("Failed to look up gift recipient:", sb), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(bb, nb).catch((bb => (console.error("Gift recipient lookup failed:", bb), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((bb => {
          !0 !== bb.giftRecipientFound && "store:giftRecipientLookupFailed" === bb.giftRecipientError || Na.set(cb, bb), kb || fb({
            name: nb,
            result: bb
          })
        })), () => {
          kb = !0
        }
      }), [nb, bb]);
      const lb = (0, kb.useMemo)((() => {
        const bb = sb.trim();
        if (!bb) return {
          status: "none"
        };
        if (!Ub || Ub.name !== bb || (null === Hb || void 0 === Hb ? void 0 : Hb.name) !== Ub.name) return {
          status: "pending",
          name: bb
        };
        const cb = Hb.result;
        return !1 === cb.giftRecipientFound ? {
          status: "error",
          name: Ub.name,
          error: cb.giftRecipientError
        } : {
          status: "found",
          name: cb.giftRecipientName,
          ownedPacks: cb.giftRecipientOwnedPacks,
          hasSuperRank: cb.giftRecipientHasSuperRank,
          isSubscriber: cb.giftRecipientIsSubscriber
        }
      }), [sb, Ub, Hb]);
      (0, kb.useEffect)((() => {
        "found" === lb.status && "typed" === (null === Ub || void 0 === Ub ? void 0 : Ub.source) && Xb.current !== lb.name && (Xb.current = lb.name, (0, jb.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [lb, Ub]);
      const Qb = (null === Hb || void 0 === Hb ? void 0 : Hb.name) === (null === Ub || void 0 === Ub ? void 0 : Ub.name) ? null === Hb || void 0 === Hb ? void 0 : Hb.result : null,
        eb = !0 === (null === Qb || void 0 === Qb ? void 0 : Qb.giftRecipientFound) ? Qb.giftRecipientCosmetics : null;
      return {
        query: sb,
        via: ab,
        recipient: lb,
        recipientCosmetics: eb,
        type: function(bb) {
          Wb(bb), Tb("search"), mb();
          const cb = bb.trim();
          cb ? Mb.current = setTimeout((() => {
            Ib({
              name: cb,
              source: "typed"
            })
          }), 400) : Ib(null)
        },
        choose: function(bb, cb) {
          mb(), Wb(bb), Tb("typed" === cb ? "search" : "prefilled" === cb ? "prefilled" : "suggestion"), Ib({
            name: bb,
            source: cb
          }), "typed" !== cb && "prefilled" !== cb && (0, jb.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: cb
          })
        },
        clear: function() {
          mb(), Wb(""), Tb("search"), Ib(null)
        },
        recordGift: function(bb, cb) {
          ! function(bb) {
            Na.delete(bb.toLowerCase())
          }(bb), fb((sb => {
            if (!sb || sb.name.toLowerCase() !== bb.toLowerCase() || !0 !== sb.result.giftRecipientFound || "superRank" === cb) return sb;
            const kb = sb.result.giftRecipientOwnedPacks;
            return {
              ...sb,
              result: {
                ...sb.result,
                giftRecipientOwnedPacks: kb.includes(cb) ? kb : [...kb, cb]
              }
            }
          }))
        }
      }
    }
    var ua = sb(2240),
      Ya = sb(4391),
      ha = sb(287),
      Ja = sb(2867);
    const ga = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ba = sb(2189),
      ta = sb(613),
      ya = sb(2279),
      Pa = sb(2441);

    function Da(bb) {
      let {
        cosmetics: cb
      } = bb;
      return (0, fb.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, fb.jsx)(ya.b, {
          cosmetics: cb
        })
      })
    }

    function Ea(bb, cb) {
      var sb, kb;
      const Wb = null !== (sb = bb.friend) && void 0 !== sb ? sb : {
        isError: !1,
        name: bb.name,
        ranks: [],
        cosmetics: null !== (kb = bb.cosmetics) && void 0 !== kb ? kb : {},
        nameColour: ta.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return cb ? {
        ...Wb,
        cosmetics: cb
      } : Wb
    }

    function ia(bb) {
      let {
        recipient: cb
      } = bb;
      return "pending" === cb.status ? (0, fb.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, fb.jsx)(ub.d, {})
      }) : "found" === cb.status ? (0, fb.jsx)(Ub.b, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function Oa(bb) {
      var cb;
      let {
        selfName: sb,
        giftRecipient: Wb,
        suggestionsVersion: Ib,
        pulseSignal: Hb,
        disabled: Mb
      } = bb;
      const {
        t: Xb
      } = (0, Tb.E)(), nb = (0, Ab.k)(), mb = (0, kb.useRef)(null), lb = (0, kb.useRef)(null), {
        query: Cb,
        via: Nb,
        recipient: Vb,
        recipientCosmetics: ub
      } = Wb, Yb = (0, ea.r)(Cb), hb = (0, kb.useMemo)((() => {
        const bb = eb.featureFlags.useSocialFeatures ? nb.friends.filter((bb => !bb.isError)) : [];
        return (0, ea.l)({
          onlineFriends: (0, Ab.e)(bb),
          recentRecipients: Va(),
          friends: bb,
          selfName: sb,
          max: 8
        })
      }), [nb.friends, sb, Ib]), Jb = Cb.trim().toLowerCase(), gb = "search" !== Nb && Jb ? hb.find((bb => bb.name.toLowerCase() === Jb)) : void 0, Bb = gb && "prefilled" === Nb ? [gb, ...hb.filter((bb => bb !== gb))] : hb, tb = "" !== Jb && !gb, yb = tb ? Cb : "", Pb = Bb.length > 0;
      (0, kb.useEffect)((() => {
        mb.current && mb.current.value !== yb && (mb.current.value = yb)
      }), [yb]), (0, kb.useEffect)((() => {
        mb.current && (mb.current.disabled = Mb)
      }), [Mb, Hb]);
      const Db = (0, kb.useRef)(0);

      function ib() {
        "self" !== Yb && (0, jb.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Wb.clear()
      }

      function Ob(bb) {
        var cb, sb;
        if (Mb) return;
        if (" " === bb.key || "Enter" === bb.key) return bb.preventDefault(), void bb.currentTarget.click();
        const kb = Array.from(null !== (cb = null === (sb = lb.current) || void 0 === sb ? void 0 : sb.querySelectorAll("[role=radio]")) && void 0 !== cb ? cb : []),
          Wb = kb.indexOf(bb.currentTarget);
        let ab;
        "ArrowRight" === bb.key || "ArrowDown" === bb.key ? ab = kb[(Wb + 1) % kb.length] : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? ab = kb[(Wb - 1 + kb.length) % kb.length] : "Home" === bb.key ? ab = kb[0] : "End" === bb.key && (ab = kb[kb.length - 1]), ab && (bb.preventDefault(), ab.focus(), ab.click())
      }(0, kb.useEffect)((() => {
        var bb;
        Hb > Db.current && !Mb && (Db.current = Hb, null === (bb = mb.current) || void 0 === bb || bb.focus())
      }), [Hb, Mb]);
      const Gb = "self" === Yb,
        Kb = null !== (cb = null === gb || void 0 === gb ? void 0 : gb.name) && void 0 !== cb ? cb : null,
        Zb = "error" === Vb.status ? Vb.error : null,
        zb = "store:giftRecipientLookupFailed" === Zb;
      return (0, fb.jsxs)("div", {
        className: ab()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Mb,
          StoreRecipientStripNoChips: !Pb
        }),
        children: [(0, fb.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Xb("store:buyingFor")
        }), (0, fb.jsxs)("div", {
          ref: lb,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Xb("store:whoIsItFor"),
          children: [(0, fb.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Gb,
            tabIndex: Mb || !Gb && null !== Kb ? -1 : 0,
            className: ab()("StoreRecipientMe", {
              StoreRecipientChecked: Gb
            }),
            onClick: () => {
              Mb || ib()
            },
            onKeyDown: Ob,
            children: [(0, fb.jsx)(Ub.b, {
              name: "user"
            }), " ", Xb("store:me")]
          }), Pb && (0, fb.jsx)("div", {
            className: "StoreRecipientChips",
            children: Bb.map((bb => {
              const cb = bb === gb;
              return (0, fb.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": cb,
                tabIndex: !Mb && cb ? 0 : -1,
                title: bb.name,
                className: ab()("StoreRecipientChip", {
                  StoreRecipientChecked: cb
                }),
                onClick: () => {
                  Mb || function(bb) {
                    "gift" !== Yb && (0, jb.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Wb.choose(bb.name, bb.kind)
                  }(bb)
                },
                onKeyDown: Ob,
                children: (0, fb.jsx)(Pa.h, {
                  playerSocialPreview: Ea(bb, cb ? ub : null),
                  opensProfileCard: !1,
                  isFriend: null !== bb.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== bb.friend,
                  status: null === bb.friend ? null : void 0,
                  trailing: cb ? (0, fb.jsx)(ia, {
                    recipient: Vb
                  }) : void 0
                })
              }, bb.name)
            }))
          })]
        }), (0, fb.jsxs)("div", {
          className: ab()("StoreRecipientSearch", {
            StoreRecipientChecked: tb,
            StoreRecipientSearchPulse: Hb > 0 && !tb,
            StoreRecipientSearchError: null !== Zb && !zb
          }),
          onClick: () => {
            var bb;
            null === (bb = mb.current) || void 0 === bb || bb.focus()
          },
          children: [tb && "found" === Vb.status && ub && (0, fb.jsx)(Da, {
            cosmetics: ub
          }), !(tb && "found" === Vb.status && ub) && (0, fb.jsx)(Ub.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, fb.jsx)(Lb.c, {
            className: "StoreRecipientSearchInput",
            domRef: mb,
            placeholderText: Xb("store:searchName"),
            defaultValue: yb,
            maxLength: Eb.l,
            onValueChange: function(bb) {
              "gift" !== Yb && bb.trim() && (0, jb.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Wb.type(bb)
            },
            onEnter: () => {
              var bb;
              const cb = null === (bb = mb.current) || void 0 === bb ? void 0 : bb.value.trim();
              cb && Wb.choose(cb, "typed")
            },
            blurOnEnter: !0
          }), tb && (0, fb.jsx)(ia, {
            recipient: Vb
          }), tb && (0, fb.jsx)("div", {
            ...(0, Qb.U)({
              disabled: Mb
            }),
            "aria-label": Xb("store:clearRecipient"),
            title: Xb("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: bb => {
              bb.stopPropagation(), Mb || ib()
            },
            children: (0, fb.jsx)(Ub.b, {
              name: "xmark"
            })
          })]
        }, Hb), Zb && (0, fb.jsx)("div", {
          className: ab()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: zb
          }),
          role: "status",
          children: Xb(Zb)
        })]
      })
    }
    var Ga = sb(2236),
      Ka = sb(2161),
      Za = sb(3371),
      za = sb(2876),
      qa = sb(2199);
    const da = sb.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Aa() {
      (0, qa.i)(da, {
        lowPriority: !1
      })
    }

    function wa(bb) {
      let {
        onBack: cb,
        cta: sb,
        recipient: Wb,
        afterCta: ab
      } = bb;
      const {
        t: Ib
      } = (0, Tb.E)(), [Hb, Mb] = (0, kb.useState)("starting"), Xb = (0, kb.useRef)(null), nb = (0, Pc.e)(), mb = (0, kb.useRef)(null), lb = (0, kb.useCallback)((() => {
        const bb = Xb.current;
        null !== bb.error && bb.load();
        const cb = bb.play();
        mb.current = cb, cb.catch((bb => {
          (0, Za.b)("Failed to play Super Rank video", bb), nb.current && mb.current === cb && Mb("failed")
        }))
      }), [nb]);
      return (0, kb.useEffect)((() => {
        const bb = Xb.current;
        let cb;

        function sb() {
          clearTimeout(cb), cb = setTimeout(lb, 3e3)
        }
        return lb(), bb.addEventListener("ended", sb), () => {
          clearTimeout(cb), bb.removeEventListener("ended", sb)
        }
      }), [lb]), (0, fb.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, fb.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, fb.jsx)(Qb.b, {
            className: "StoreDetailBackButton",
            onClick: cb,
            padBack: !0,
            children: Ib("general:back")
          }), (0, fb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, fb.jsx)(Ub.b, {
              name: "bolt"
            }), " ", Ib("homePage:superRank")]
          }), Wb]
        }), (0, fb.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, fb.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, fb.jsx)("video", {
              ref: Xb,
              src: `${yb.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: da,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Hb,
              onPlaying: () => {
                Mb("playing")
              },
              onError: () => {
                Mb("failed")
              }
            }), ("failed" === Hb || "loading" === Hb) && (0, fb.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, fb.jsx)(Qb.d, {
                ariaLabel: Ib("general:play"),
                loading: "loading" === Hb,
                onClick: () => {
                  Mb("loading"), lb()
                },
                touchPressOn: "pointerup",
                children: (0, fb.jsx)(Ub.b, {
                  name: "play"
                })
              })
            })]
          }), (0, fb.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, fb.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, fb.jsx)(za.b, {})
            }), (0, fb.jsxs)("div", {
              className: "StoreTileActions",
              children: [sb, ab]
            })]
          })]
        })]
      })
    }
    var ra = sb(2455),
      oa = sb(3333),
      Sa = sb(2856),
      Ra = sb(2862);
    const va = [ta.s.yellow, ta.s.green, ta.s.aqua, ta.s.blue, ta.s.purple, ta.s.red];

    function Fa(bb) {
      return "needsRecipient" === bb || "lookingUp" === bb || "gift" === bb || "recipientOwns" === bb || "recipientSharesOwned" === bb || "recipientSubscribed" === bb
    }

    function xa(bb) {
      const {
        onKeyDown: cb,
        ...sb
      } = (0, Qb.U)();
      return {
        ...sb,
        "aria-label": bb,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && (null === cb || void 0 === cb || cb(bb))
        }
      }
    }

    function ja(bb) {
      let {
        text: cb
      } = bb;
      return (0, fb.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(cb).map(((bb, cb) => (0, fb.jsx)("span", {
          style: {
            color: va[cb % va.length]
          },
          children: bb
        }, cb)))
      })
    }
    const pa = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function bT(bb) {
      let {
        state: cb,
        item: sb,
        price: kb,
        busy: Wb,
        highlight: Ib = !1,
        onAct: Hb,
        onNeedRecipient: Mb,
        onLogin: Xb
      } = bb;
      const {
        t: nb
      } = (0, Tb.E)(), mb = "superRank" === sb ? Ob.i.product.days : null, lb = bb => null === mb ? nb(bb ? "general:gift" : "general:buy") : nb(bb ? "store:giftDays" : "store:buyDays", {
        days: mb
      }), eb = (bb, cb) => (0, fb.jsxs)(fb.Fragment, {
        children: [cb && (0, fb.jsx)("span", {
          className: "StoreCtaIcon",
          children: cb
        }), null === bb && (0, fb.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== bb && (0, fb.jsx)("span", {
          className: "StoreCtaLabel",
          title: bb,
          children: bb
        }), (0, fb.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, fb.jsx)(Ka.d, {
            amount: kb
          })]
        })]
      });
      let Cb;
      switch (cb) {
        case "pending":
          Cb = (0, fb.jsx)(Qb.n, {
            className: "StoreCtaButton",
            disabled: !0,
            children: eb(null)
          });
          break;
        case "login":
          Cb = (0, fb.jsx)(Qb.n, {
            className: "StoreCtaButton",
            onClick: Xb,
            children: eb(lb(!1))
          });
          break;
        case "owned":
          Cb = (0, fb.jsx)(Qb.h, {
            className: "StoreCtaButton",
            onClick: () => {
              hb.d.set({
                openEverythingMenuName: Hc.r.CUSTOMISATION
              })
            },
            children: (0, fb.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, fb.jsx)(Ub.b, {
                name: "shirt"
              }), " ", nb("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Cb = (0, fb.jsx)(Qb.n, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, fb.jsx)("span", {
              className: "StoreCtaLabel",
              children: nb(pa[cb])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Cb = (0, fb.jsx)(Qb.n, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === cb || null === kb,
            loading: "lookingUp" === cb || Wb,
            onClick: Hb,
            analyticsClick: {
              id: "store.gift",
              value: sb
            },
            children: eb(lb(!0), ea.d)
          });
          break;
        case "buy":
        case "recharge":
          Cb = (0, fb.jsx)(Qb.n, {
            className: "StoreCtaButton",
            loading: Wb,
            disabled: null === kb,
            onClick: Hb,
            analyticsClick: {
              id: "store.buy",
              value: sb
            },
            children: eb(lb(!1))
          })
      }
      return (0, fb.jsx)("div", {
        className: ab()("StoreCta", {
          StoreCtaHighlight: Ib
        }),
        onClick: bb => {
          bb.stopPropagation(), "needsRecipient" === cb && Mb()
        },
        children: Cb
      })
    }

    function cT() {
      const {
        t: bb
      } = (0, Tb.E)();
      return (0, fb.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, fb.jsxs)("li", {
          children: [(0, fb.jsx)(Ub.b, {
            name: "check"
          }), (0, fb.jsx)(ja, {
            text: bb("store:colourfulNames")
          })]
        }), (0, fb.jsxs)("li", {
          children: [(0, fb.jsx)(Ub.b, {
            name: "check"
          }), bb("store:perkCapes")]
        }), (0, fb.jsxs)("li", {
          children: [(0, fb.jsx)(Ub.b, {
            name: "check"
          }), bb("store:perkNoAdverts")]
        }), (0, fb.jsxs)("li", {
          children: [(0, fb.jsx)(Ub.b, {
            name: "check"
          }), bb("store:perkFriends", {
            count: (0, Fb.d)(["super"])
          })]
        })]
      })
    }

    function sT(bb) {
      let {
        daysLeft: cb,
        totalDays: sb,
        urgent: kb
      } = bb;
      const {
        t: Wb
      } = (0, Tb.E)(), Ub = sb > 0 ? Math.min(1, Math.max(.03, cb / sb)) : 1;
      return (0, fb.jsxs)("div", {
        className: ab()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: kb
        }),
        children: [(0, fb.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === cb ? Wb("store:oneDayLeft") : Wb("store:daysLeft", {
            days: cb
          })
        }), (0, fb.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, fb.jsx)("i", {
            style: {
              width: 100 * Ub + "%"
            }
          })
        })]
      })
    }

    function kT(bb) {
      let {
        state: cb,
        urgent: sb,
        daysLeft: kb,
        totalDays: Wb,
        recipientHasSuperRank: Ib,
        busy: Hb,
        highlight: Mb,
        onOpen: Xb,
        onAct: nb,
        onNeedRecipient: mb,
        onLogin: lb
      } = bb;
      const {
        t: Qb
      } = (0, Tb.E)(), eb = Fa(cb), {
        days: Cb
      } = Ob.i.product, Nb = Qb("store:recipientHasSuperRank", {
        giftDays: Cb
      }), Vb = Rb("subscribed" === cb);
      return (0, fb.jsxs)("div", {
        className: ab()("StoreTile StoreSuperRankTile", {
          StoreTileGift: eb,
          StoreSuperRankTileUrgent: "recharge" === cb && sb,
          StoreSuperRankTileWithChip: Ib,
          StoreSuperRankTileGiftReady: "gift" === cb
        }),
        ...xa(Qb("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Aa,
        onFocus: Aa,
        onClick: Xb,
        children: [(0, fb.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ba.g})`
          }
        }), eb && (0, fb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, fb.jsxs)("div", {
          className: "StoreTileContent",
          children: [Ib && (0, fb.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Nb,
            children: Nb
          }), (0, fb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, fb.jsx)(Ub.b, {
              name: "bolt"
            }), " ", Qb("homePage:superRank")]
          }), eb && (0, fb.jsx)("div", {
            className: "StoreTilePitch",
            children: Qb("store:giftPitch", {
              days: Cb
            })
          }), "recharge" === cb && (0, fb.jsx)(sT, {
            daysLeft: kb,
            totalDays: Wb,
            urgent: sb
          }), Vb && (0, fb.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, fb.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Vb
            })
          }), (0, fb.jsx)(cT, {}), (0, fb.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, fb.jsx)(bT, {
              state: cb,
              item: "superRank",
              price: Ob.i.price,
              busy: Hb,
              highlight: Mb,
              onAct: nb,
              onNeedRecipient: mb,
              onLogin: lb
            }), "needsRecipient" === cb && (0, fb.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Qb("store:pickRecipientFirst")
            }), "recharge" === cb && sb && (0, fb.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === kb ? Qb("store:endsInOneDay") : Qb("store:endsInDays", {
                days: kb
              })
            })]
          })]
        })]
      })
    }
    const WT = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function aT(bb) {
      var cb;
      let {
        pack: sb,
        state: Wb,
        busy: Ib,
        onOpen: Hb,
        onAct: Mb,
        onNeedRecipient: Xb,
        onLogin: nb
      } = bb;
      const {
        t: mb
      } = (0, Tb.E)(), lb = Ia.e[sb], Qb = la.g[sb], eb = (0, Ba.l)(sb), Cb = (0, kb.useRef)(null);
      (0, Sa.j)(sb, Cb);
      const Nb = Fa(Wb),
        Vb = null !== (cb = lb.displayName) && void 0 !== cb ? cb : sb,
        Lb = (0, oa.d)((() => {
          (0, ra.d)();
          const bb = (0, Sa.e)(sb);
          void 0 !== bb && (0, qa.i)((0, Sa.c)(bb))
        })),
        [ub] = (0, kb.useState)(Ja.j);
      return (0, fb.jsxs)("div", {
        className: ab()("StoreTile StorePackTile", WT[lb.tier], {
          StorePackTileOwned: "owned" === Wb,
          StorePackTileRecipientOwns: "recipientOwns" === Wb,
          StoreTileGift: Nb
        }),
        ...xa(Vb),
        ref: Cb,
        "data-store-item": sb,
        onClick: Hb,
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || ub || Lb.start()
        },
        onPointerLeave: Lb.cancel,
        children: [Qb && (0, fb.jsx)(Qb, {}), (0, fb.jsx)("div", {
          className: "StorePackCharacters",
          children: eb.map((bb => (0, fb.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ba.i)(bb)})`
            }
          }, bb)))
        }), (0, fb.jsx)("div", {
          className: "StoreTileScrim"
        }), Nb && (0, fb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, fb.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, fb.jsx)("div", {
            className: "StoreTileTitle",
            children: Vb
          }), (0, fb.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, fb.jsx)(Ra.b, {
              tier: lb.tier
            }), " \xb7 ", mb("store:itemCount", {
              count: (0, Ga.d)(sb)
            }), "owned" === Wb && (0, fb.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, fb.jsx)(Ub.b, {
                name: "check"
              }), " ", mb("general:owned")]
            })]
          }), (0, fb.jsx)(bT, {
            state: Wb,
            item: sb,
            price: (0, Ob.d)(sb),
            busy: Ib,
            onAct: Mb,
            onNeedRecipient: Xb,
            onLogin: nb
          })]
        })]
      })
    }
    var TT = sb(2828),
      UT = sb(1538),
      IT = sb(1438),
      HT = sb(3358);

    function fT() {
      return (0, fb.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var MT = sb(1330),
      XT = sb(1544),
      nT = sb(8956);

    function mT(bb) {
      let {
        character: cb,
        drawn: sb,
        onDrawn: Wb
      } = bb;
      const Tb = (0, kb.useRef)(null),
        Ub = (0, nT.g)(cb);
      return (0, fb.jsx)("div", {
        className: ab()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: sb
        }),
        children: (0, fb.jsx)(kb.Suspense, {
          fallback: null,
          children: (0, fb.jsx)(ra.b, {
            ref: Tb,
            framing: "store",
            turntableFromYaw: sb ? Ub.yaw : null,
            onReady: () => {
              var bb, sb;
              null === (bb = Tb.current) || void 0 === bb || bb.setOrbit(Ub), null === (sb = Tb.current) || void 0 === sb || sb.setAllCosmetics(XT.b[cb].cosmetics)
            },
            onDrawn: Wb
          })
        })
      })
    }
    const lT = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      QT = new Set(["wildSpirits"]);

    function eT(bb) {
      var cb;
      let {
        tile: sb,
        design: Wb,
        canGoLive: Ib,
        live: Hb,
        busy: Mb,
        highlight: Xb,
        onLiveStart: nb,
        onLiveEnd: mb,
        onOpen: lb,
        onAct: Qb,
        onNeedRecipient: eb,
        onLogin: Cb
      } = bb;
      const {
        t: Nb
      } = (0, Tb.E)(), {
        pack: Vb,
        state: Lb
      } = sb, ub = Ia.e[Vb], Yb = (0, Ia.f)(Vb), hb = (0, Ba.k)(Vb), Jb = la.g[hb], gb = QT.has(hb), {
        tier: Bb
      } = ub, tb = "legendary" === Bb || "mythic" === Bb, yb = (0, kb.useRef)(null);
      (0, MT.c)(yb, "epic" === Bb || tb || gb);
      const [Pb, Eb] = (0, kb.useState)(!1);
      return !Hb && Pb && Eb(!1), (0, fb.jsxs)("div", {
        ref: yb,
        className: ab()("StoreCharacterCard", `StoreCharacterCard${Wb}`, lT[Bb], {
          StoreCharacterCardOwned: "owned" === Lb || "recipientOwns" === Lb,
          StoreCharacterCardGift: Fa(Lb),
          StoreCharacterCardItem: void 0 === Yb
        }),
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || !Ib || Hb || void 0 === Yb || nb()
        },
        onPointerLeave: mb,
        children: [(0, fb.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Jb && (0, fb.jsx)(Jb, {
            simple: !0
          })
        }), tb && (0, fb.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, fb.jsxs)(Db.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, UT.g)({
            kind: "pack",
            pack: Vb
          }),
          "data-store-item": Vb,
          onClick: bb => {
            (0, IT.b)(bb) && (bb.preventDefault(), lb())
          },
          children: [(0, fb.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, fb.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, fb.jsx)("div", {
              className: ab()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Pb
              }),
              style: {
                backgroundImage: `url(${(0,Ba.p)(Vb)})`
              }
            }), Hb && void 0 !== Yb && (0, fb.jsx)(mT, {
              character: Yb,
              drawn: Pb,
              onDrawn: () => {
                Eb(!0)
              }
            })]
          }), (0, fb.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (cb = ub.displayName) && void 0 !== cb ? cb : Vb
          }), (0, fb.jsx)(Ra.b, {
            tier: Bb,
            className: "StoreCharacterTier"
          })]
        }), (0, fb.jsx)("div", {
          className: "StoreCharacterScrim"
        }), gb && (0, fb.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, fb.jsx)(fT, {})
        }), "owned" === Lb && (0, fb.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Nb("general:owned"),
          "aria-label": Nb("general:owned"),
          children: (0, fb.jsx)(Ub.b, {
            name: "check"
          })
        }), (0, fb.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, fb.jsx)(bT, {
            state: Lb,
            item: Vb,
            price: (0, Ob.d)(Vb),
            busy: Mb,
            highlight: Xb,
            onAct: Qb,
            onNeedRecipient: eb,
            onLogin: Cb
          })
        })]
      })
    }

    function CT(bb) {
      let {
        tiles: cb,
        busy: sb,
        highlightItem: Wb,
        onOpen: ab,
        onAct: Tb,
        onNeedRecipient: Ub,
        onLogin: Ib
      } = bb;
      const Hb = (0, HT.i)("storeCharacterCardFoil"),
        Mb = (0, HT.i)("storeCharacterCardSpotlight"),
        Xb = Hb ? "Foil" : Mb ? "Spotlight" : "Showcase",
        [nb] = (0, kb.useState)(Ja.j),
        [mb, lb] = (0, kb.useState)(null);
      return (0, fb.jsx)("div", {
        className: "StoreCharacterGrid",
        children: cb.map((bb => (0, fb.jsx)(eT, {
          tile: bb,
          design: Xb,
          canGoLive: !nb,
          live: mb === bb.pack,
          busy: sb,
          highlight: Wb === bb.pack,
          onLiveStart: () => {
            lb(bb.pack)
          },
          onLiveEnd: () => {
            lb((cb => cb === bb.pack ? null : cb))
          },
          onOpen: () => {
            ab(bb.pack)
          },
          onAct: () => {
            Tb(bb.pack)
          },
          onNeedRecipient: Ub,
          onLogin: () => {
            Ib(bb.pack)
          }
        }, bb.pack)))
      })
    }
    var NT = sb(8967);

    function VT(bb) {
      let {
        title: cb
      } = bb;
      return (0, fb.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, fb.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: cb
        })
      })
    }

    function LT(bb) {
      let {
        mountAtOnce: cb,
        children: sb
      } = bb;
      const Wb = (0, kb.useRef)(null),
        [ab, Tb] = (0, kb.useState)(cb),
        Ub = (0, NT.b)();
      return (0, kb.useLayoutEffect)((() => {
        const bb = Wb.current;
        bb && bb.getBoundingClientRect().top < bb.parentElement.getBoundingClientRect().bottom && Tb(!0)
      }), []), ab || Ub ? (0, fb.jsx)(fb.Fragment, {
        children: sb
      }) : (0, fb.jsx)("div", {
        ref: Wb
      })
    }

    function uT(bb) {
      let {
        layout: cb,
        mountAtOnce: sb,
        bundleGift: kb,
        superRankTotalDays: Wb,
        busy: ab,
        highlightItem: Ub,
        onOpen: Ib,
        onAct: Hb,
        onNeedRecipient: Mb,
        onLogin: Xb
      } = bb;
      const {
        t: nb
      } = (0, Tb.E)(), mb = cb.packs.filter((bb => void 0 === (0, Ia.f)(bb.pack) && !(0, Ia.l)(bb.pack))), lb = cb.packs.filter((bb => void 0 !== (0, Ia.f)(bb.pack))), Qb = cb.packs.filter((bb => (0, Ia.l)(bb.pack)));
      return (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)(TT.e, {
          className: "StoreSuperGems",
          gift: kb,
          highlightSku: Ub
        }), (0, fb.jsx)(VT, {
          title: nb("store:rank")
        }), (0, fb.jsx)(kT, {
          state: cb.superRank.state,
          urgent: cb.superRank.urgent,
          daysLeft: cb.superRankDaysLeft,
          totalDays: Wb,
          recipientHasSuperRank: cb.recipientHasSuperRank,
          busy: ab,
          highlight: "superRank" === Ub,
          onOpen: () => {
            Ib("superRank")
          },
          onAct: () => {
            Hb("superRank")
          },
          onNeedRecipient: Mb,
          onLogin: () => {
            Xb("superRank")
          }
        }), (0, fb.jsxs)(LT, {
          mountAtOnce: sb,
          children: [(0, fb.jsx)(VT, {
            title: nb("store:bundles")
          }), (0, fb.jsx)("div", {
            className: "StorePackGrid",
            children: mb.map((bb => (0, fb.jsx)(aT, {
              pack: bb.pack,
              state: bb.state,
              busy: ab,
              onOpen: () => {
                Ib(bb.pack)
              },
              onAct: () => {
                Hb(bb.pack)
              },
              onNeedRecipient: Mb,
              onLogin: () => {
                Xb(bb.pack)
              }
            }, bb.pack)))
          }), (0, fb.jsxs)(LT, {
            mountAtOnce: sb,
            children: [(0, fb.jsx)(VT, {
              title: nb("store:characters")
            }), (0, fb.jsx)(CT, {
              tiles: lb,
              busy: ab,
              highlightItem: Ub,
              onOpen: Ib,
              onAct: Hb,
              onNeedRecipient: Mb,
              onLogin: Xb
            }), Qb.length > 0 && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)(VT, {
                title: nb("store:premiumItems")
              }), (0, fb.jsx)(CT, {
                tiles: Qb,
                busy: ab,
                highlightItem: Ub,
                onOpen: Ib,
                onAct: Hb,
                onNeedRecipient: Mb,
                onLogin: Xb
              })]
            })]
          })]
        })]
      })
    }

    function YT(bb) {
      let {
        state: cb,
        mode: sb,
        giftName: kb,
        busy: Wb,
        highlight: ab,
        purchaseError: Ub,
        onBack: Ib,
        onChooseRecipient: Hb,
        onAct: Mb,
        onLogin: Xb
      } = bb;
      const {
        t: nb
      } = (0, Tb.E)(), mb = Rb("gift" !== sb);
      return (0, fb.jsx)(wa, {
        onBack: Ib,
        recipient: "gift" === sb && (0, fb.jsxs)(fb.Fragment, {
          children: [kb && (0, fb.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: nb("store:giftFor", {
              name: kb
            }),
            children: [ea.d, " ", nb("store:giftFor", {
              name: kb
            })]
          }), !kb && (0, fb.jsxs)("div", {
            ...(0, Qb.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Hb,
            children: [ea.d, " ", nb("store:chooseRecipient")]
          })]
        }),
        cta: (0, fb.jsx)(bT, {
          state: cb,
          item: "superRank",
          price: Ob.i.price,
          busy: Wb,
          highlight: ab,
          onAct: Mb,
          onNeedRecipient: Hb,
          onLogin: Xb
        }),
        afterCta: (0, fb.jsxs)(fb.Fragment, {
          children: [mb && (0, fb.jsx)("span", {
            className: "StoreTileNote",
            children: mb
          }), Ub && (0, fb.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: nb(Ub)
          })]
        })
      })
    }
    var hT = sb(182);
    const JT = hT.l("kind", [hT.G({
      kind: hT.v("refused"),
      heldTierId: hT.W(),
      until: hT.C()
    }), hT.G({
      kind: hT.v("refund"),
      tierId: hT.W(),
      refundedMs: hT.C(),
      forfeitedMs: hT.C(),
      premiumCurrency: hT.C()
    }), hT.G({
      kind: hT.v("none")
    })]);
    async function gT(bb) {
      const cb = await (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${yb.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: bb
      }, {
        retries: 1
      });
      return JT.parse(cb)
    }
    var BT = sb(2797),
      tT = sb(2830);

    function yT(bb, cb) {
      const sb = Math.max(1, Math.round(cb / Zb.j));
      return [1 === sb ? `${bb}OneDay` : bb, {
        days: sb.toLocaleString()
      }]
    }

    function PT() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, qb.purchasesAllowed)() ? (0, fb.jsx)(DT, {}) : null
    }

    function DT() {
      const {
        t: bb
      } = (0, Tb.E)(), {
        userContext: cb
      } = (0, nb.c)(), {
        purchaseUnderWay: sb,
        notice: Wb,
        subscribe: ab
      } = (0, BT.b)(), [Ub, Ib] = (0, kb.useState)(null), [Hb, Mb] = (0, kb.useState)(0), [Xb, mb] = (0, kb.useState)(!1), lb = (0, kb.useRef)(!0), eb = cb !== tb.NULL_USER_CONTEXT, Cb = null !== Ub && Ub.loadedFor === cb ? Ub.offer : null, Nb = null === Wb || void 0 === Wb ? void 0 : Wb.pendingIntentId, Vb = (0, kb.useRef)(Nb);

      function Lb() {
        Mb((bb => bb + 1))
      }
      async function ub(bb) {
        mb(!1), await ab(bb), lb.current && Lb()
      }
      if ((0, kb.useEffect)((() => (lb.current = !0, () => {
          lb.current = !1
        })), []), (0, kb.useEffect)((() => {
          void 0 !== Vb.current && void 0 === Nb && Lb(), Vb.current = Nb
        }), [Nb]), (0, kb.useEffect)((() => {
          if (!eb) return;
          let bb = !1;
          return mb(!1), async function() {
            const {
              offering: bb
            } = await (0, Uc.e)().getOfferings("superRankPage"), cb = null === bb || void 0 === bb ? void 0 : bb.packages.find((bb => null !== bb.price));
            return void 0 === cb ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: cb,
              preview: await gT(cb.productId)
            }
          }().catch((bb => (console.error("Billing: loading the Super Rank subscription or its preview failed:", bb), {
            kind: "loadFailed"
          }))).then((sb => {
            bb || Ib((bb => "loadFailed" === sb.kind && (null === bb || void 0 === bb ? void 0 : bb.loadedFor) === cb ? bb : {
              loadedFor: cb,
              offer: sb
            }))
          })), () => {
            bb = !0
          }
        }), [cb, eb, Hb]), null === Cb) return null;
      if ("loaded" !== Cb.kind) return (0, fb.jsx)(tT.h, {
        notice: {
          kind: "error",
          key: "unavailable" === Cb.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Yb,
        preview: hb
      } = Cb;
      if ("refused" === hb.kind) return (0, fb.jsx)(tT.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(hb.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Jb = (0, TT.f)(Yb.price);
      if (Xb && "refund" === hb.kind) {
        const {
          refundedMs: cb,
          forfeitedMs: kb,
          premiumCurrency: Wb
        } = hb, ab = kb + (0 === Wb ? cb : 0), [Tb, Ub] = yT("payments:subscribeRefundsGemRank", cb), [Ib, Hb] = yT("payments:subscribeForfeitsGemRank", ab);
        return (0, fb.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, fb.jsx)("div", {
            children: bb("payments:subscribeEndsGemRank")
          }), Wb > 0 && (0, fb.jsx)("div", {
            children: bb(Tb, {
              ...Ub,
              amount: Wb.toLocaleString()
            })
          }), ab > 0 && (0, fb.jsx)("div", {
            children: bb(Ib, Hb)
          }), (0, fb.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, fb.jsx)(Qb.h, {
              onClick: () => {
                mb(!1)
              },
              children: bb("general:cancel")
            }), (0, fb.jsx)(Qb.n, {
              onClick: () => {
                ub(Yb)
              },
              loading: sb,
              children: bb("payments:subscribeContinue", {
                price: Jb
              })
            })]
          })]
        })
      }
      return (0, fb.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, fb.jsx)(tT.h, {
          notice: Wb,
          className: "SmallTextBold"
        }), (0, fb.jsx)(tT.d, {
          className: "SmallTextBold"
        }), (0, fb.jsx)(Qb.n, {
          onClick: () => {
            "refund" === hb.kind ? mb(!0) : ub(Yb)
          },
          disabled: void 0 !== Nb,
          loading: sb,
          children: bb("payments:subscribeToSuperRank", {
            price: Jb
          })
        })]
      })
    }
    const ET = {
      kind: "board"
    };
    let iT = !1;

    function OT(bb) {
      return "found" === bb.status || "error" === bb.status && "store:giftRecipientLookupFailed" === bb.error ? bb.name : null
    }(0, zb.s)(Ha.prefetchBillingOfferings);
    const GT = (0, kb.memo)((function(bb) {
      var cb;
      let {
        show: Wb
      } = bb;
      const {
        t: Ub
      } = (0, Tb.E)(), {
        userContext: Ib
      } = (0, nb.c)(), Hb = Ib !== tb.NULL_USER_CONTEXT, Mb = La(Ib), [Xb, mb] = (0, lb.c)(), {
        page: Qb,
        urlMode: eb,
        goTo: Cb
      } = (0, ua.f)(), Nb = function(bb) {
        return "superRank" === bb.kind ? "superRank" : "pack" === bb.kind ? bb.pack : null
      }(Qb), {
        openEverythingMenuName: Vb,
        gameState: Lb
      } = (0, hb.p)(["openEverythingMenuName", "gameState"]), ub = null !== Vb;
      ! function(bb, cb) {
        const [Wb] = (0, kb.useState)(Ja.j), [ab, Tb] = (0, kb.useState)(!1);
        Wb && cb && !ab && Tb(!0);
        const Ub = (0, Uk.l)(),
          Ib = Wb && ab && bb && !Ub;
        (0, kb.useEffect)((() => {
          if (!Ib) return;
          let bb = null,
            cb = null,
            kb = null;
          const Wb = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Uc.e)().purchaseUnderWay,
            ab = () => {
              var sb;
              null === (sb = kb) || void 0 === sb || sb(), kb = null, null !== bb && (clearTimeout(bb), bb = null), null !== cb && (clearTimeout(cb), cb = null)
            },
            Tb = () => {
              (0, Ya.n)(!1), (0, Ya.m)(!1), ab(), bb = setTimeout((() => {
                bb = null, kb = (0, ha.b)((() => {
                  kb = null, Wb() ? Tb() : ((0, Ya.n)(!0), cb = setTimeout((() => {
                    cb = null, kb = (0, ha.b)((() => {
                      kb = null, Wb() ? Tb() : (0, Ya.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => sb(4389))).then((bb => {
                    bb.startBackgroundGameSetup()
                  }), (bb => {
                    console.warn("Background game setup: its chunk failed to load", bb)
                  })))
                }))
              }), 2e3)
            };
          for (const sb of ga) window.addEventListener(sb, Tb, {
            capture: !0,
            passive: !0
          });
          return Tb(), () => {
            for (const bb of ga) window.removeEventListener(bb, Tb, {
              capture: !0
            });
            ab(), (0, Ya.n)(!1), (0, Ya.m)(!1)
          }
        }), [Ib])
      }(Wb && ub, "pack" === Qb.kind);
      const Yb = "landingPage" === Lb;
      (0, kb.useEffect)((() => {
        ub && (0, Ha.prefetchBillingOfferings)()
      }), [ub]), (0, kb.useEffect)((() => {
        ub && !Wb && Yb && (0, Ba.s)()
      }), [ub, Wb, Yb]);
      const [Jb, gb] = (0, kb.useState)(0), [Bb, yb] = (0, kb.useState)(null), [Pb, Db] = (0, kb.useState)(null), [Eb, ib] = (0, kb.useState)(null), [Gb, Kb] = (0, kb.useState)(null), Zb = (0, kb.useRef)(null), db = (0, kb.useRef)(null), Ab = (0, kb.useRef)(!1), wb = (0, zb.z)(), rb = (0, kb.useRef)(0), ob = (0, kb.useRef)(!1);

      function Sb() {
        gb((bb => bb + 1))
      }(0, kb.useEffect)((() => {
        if (Wb) {
          if (iT = !0, (0, zb.m)(), wb && wb.seq !== rb.current) {
            var bb;
            rb.current = wb.seq, "loginResume" !== wb.source && (0, zb.x)();
            const cb = (0, zb.e)(wb);
            eb || Cb(cb), Kb(null !== (bb = wb.highlight) && void 0 !== bb ? bb : null), Db(null), "gift" === wb.mode && wb.giftRecipientName ? Mb.choose(wb.giftRecipientName, "prefilled") : "current" !== wb.mode && Mb.clear(), "gift" !== wb.mode || wb.giftRecipientName || Sb(), (0, jb.reportAnalyticsClick)({
              id: "store.open",
              value: wb.source
            })
          } else ob.current || (0, jb.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          ob.current = !0
        } else ob.current = !1
      }), [Wb, wb]), (0, kb.useEffect)((() => {
        if (!Gb) return;
        const bb = setTimeout((() => {
          Kb(null)
        }), 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Gb]), (0, kb.useEffect)((() => {
        const bb = Zb.current;
        var cb;
        if (Wb && bb) {
          if (Nb) db.current = Nb, null === (cb = bb.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === cb || cb.focus();
          else if (db.current) {
            var sb;
            null === (sb = bb.querySelector(`[data-store-item="${db.current}"]`)) || void 0 === sb || sb.focus(), db.current = null
          }
        } else db.current = null
      }), [Nb, Wb]), (0, kb.useEffect)((() => {
        Db(null)
      }), [Mb.query]), (0, kb.useEffect)((() => {
        if (!Eb) return;
        const bb = setTimeout((() => {
          ib(null)
        }), 8e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Eb]);
      const Rb = Ib.superRankInfo,
        vb = Ib.isLoggedIn() || (0, qb.guestsMayBuy)(),
        Fb = Ib.getOwnedCosmeticPacks(),
        xb = (0, ea.r)(Mb.query),
        pb = (0, ea.h)({
          mode: xb,
          loggedIn: Hb ? vb : null,
          superRankInfo: Rb,
          now: Date.now(),
          ownedPacks: Fb,
          packs: Ia.q,
          recipient: Mb.recipient
        });
      (0, kb.useEffect)((() => {
        if (!vb || !Wb) return;
        const bb = (0, zb.x)(),
          cb = bb && (0, ea.p)(bb, Ia.q);
        bb && cb && ((0, jb.reportAnalyticsClick)({
          id: "store.login_resume",
          value: bb.item
        }), (0, zb.o)(cb))
      }), [vb, Wb]);
      const bc = (0, ea.u)({
        superRankDaysLeft: pb.superRankDaysLeft,
        openedThisSession: iT || Wb,
        seenNewItems: (0, zb.k)()
      });
      if ((0, kb.useEffect)((() => {
          (0, zb.u)(bc)
        }), [bc]), !Wb || !(0, qb.purchasesAllowed)()) return null;
      const cc = mb > Xb && Xb <= 700,
        sc = !cc && mb <= 420,
        kc = "gift" === xb ? OT(Mb.recipient) : null,
        Wc = null !== Bb;

      function ac(bb) {
        (0, Ma.c)(bb, "gift" === xb ? Mb.query.trim() : null)
      }

      function Tc(bb, cb) {
        (0, jb.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${cb?"gift":"self"}:${bb}`
        }), cb && (Mb.recordGift(cb.name, bb), Ic(cb))
      }

      function Ic(bb) {
        ! function(bb) {
          try {
            oc.h.setItem(Ca, (0, ea.B)(Va(), bb))
          } catch {}
        }({
          name: bb.name,
          cosmetics: bb.cosmetics
        }), Cb(ET), ib((cb => {
          var sb;
          return {
            name: bb.name,
            seq: (null !== (sb = null === cb || void 0 === cb ? void 0 : cb.seq) && void 0 !== sb ? sb : 0) + 1
          }
        }))
      }
      async function Hc(bb) {
        var cb, sb;
        if (Ab.current) return;
        if (!vb) return void ac(bb);
        Db(null), Kb(null);
        const kb = "gift" === xb ? {
          name: OT(Mb.recipient),
          cosmetics: Mb.recipientCosmetics
        } : null;
        if (kb && !kb.name) return void Sb();
        const Wb = "superRank" === bb ? Ob.i.id : (0, Ob.c)(bb);
        Ab.current = !0;
        const ab = await (0, Qa.e)(Wb, null !== (cb = null === kb || void 0 === kb ? void 0 : kb.name) && void 0 !== cb ? cb : null);
        if (Ab.current = !1, !ab) return;
        yb(bb);
        const Tb = await Xa.e.purchase(Wb, null !== (sb = null === kb || void 0 === kb ? void 0 : kb.name) && void 0 !== sb ? sb : null);
        yb(null), Tb ? Db(Tb) : (Tc(bb, kb), kb || (await (0, na.flushClientAnalyticsEvents)(), (0, fa.refreshWithoutConfirmation)("superRank" === bb ? "/super-rank-welcome" : `/pack-welcome/${bb}`)))
      }
      const fc = ab()("Store", {
        StoreGift: "gift" === xb,
        StorePortrait: cc,
        StoreCompact: sc
      });
      if ("pack" === Qb.kind) {
        const bb = Qb.pack,
          cb = pb.packs.find((cb => cb.pack === bb));
        return (0, fb.jsx)("div", {
          ref: Zb,
          className: "CosmeticShopContainer",
          children: (0, fb.jsx)(la.e, {
            pack: bb,
            onBack: () => {
              Cb(ET)
            },
            onPurchased: cb => {
              Tc(bb, cb ? {
                name: cb,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === xb && kc && cb && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)(bT, {
                state: cb.state,
                item: bb,
                price: (Mc = bb, "superRank" === Mc ? Ob.i.price : (0, Ob.d)(Mc)),
                busy: Wc,
                onAct: () => {
                  Hc(bb)
                },
                onNeedRecipient: () => {
                  Cb(ET), Sb()
                },
                onLogin: () => {
                  ac(bb)
                },
                highlight: Gb === bb
              }), Pb && (0, fb.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Ub(Pb)
              })]
            }),
            ownedPacks: Fb,
            startAsGift: "gift" === xb,
            initialGiftRecipient: "gift" === xb ? null !== kc && void 0 !== kc ? kc : Mb.query.trim() : "",
            highlightCta: Gb === bb
          }, bb)
        })
      }
      var Mc;
      return "superRank" === Qb.kind ? (0, fb.jsx)("div", {
        ref: Zb,
        className: ab()(fc, "StoreDetailView"),
        children: (0, fb.jsx)(YT, {
          state: pb.superRank.state,
          mode: xb,
          giftName: kc,
          busy: Wc,
          highlight: "superRank" === Gb,
          purchaseError: Pb,
          onBack: () => {
            Cb(ET)
          },
          onChooseRecipient: () => {
            Cb(ET), Sb()
          },
          onAct: () => {
            Hc("superRank")
          },
          onLogin: () => {
            ac("superRank")
          }
        })
      }) : (0, fb.jsxs)("div", {
        ref: Zb,
        className: fc,
        children: [(0, fb.jsx)("div", {
          className: "StoreTopRow",
          children: (0, fb.jsx)(Oa, {
            selfName: Hb ? Ib.getPlayerName() : "",
            giftRecipient: Mb,
            suggestionsVersion: null !== (cb = null === Eb || void 0 === Eb ? void 0 : Eb.seq) && void 0 !== cb ? cb : 0,
            pulseSignal: Jb,
            disabled: Wc || !Hb
          })
        }), Eb && (0, fb.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            ib(null)
          },
          children: [(0, fb.jsx)(ma.e, {
            showSignal: Eb.seq
          }), ea.d, " ", Ub("store:giftSent", {
            name: Eb.name
          })]
        }, Eb.seq), !Eb && Pb && (0, fb.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Ub(Pb)
        }), (0, fb.jsx)(uT, {
          layout: pb,
          mountAtOnce: null !== db.current,
          bundleGift: "gift" === xb ? {
            recipientName: kc,
            lookingUp: "pending" === Mb.recipient.status,
            busy: Wc,
            onNeedRecipient: Sb,
            onSent: bb => {
              (0, jb.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Ic({
                name: bb,
                cosmetics: Mb.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, ea.v)(Rb),
          busy: Wc,
          highlightItem: Gb,
          onOpen: function(bb) {
            (0, jb.reportAnalyticsClick)({
              id: "store.item_open",
              value: bb
            }), Cb((0, zb.i)(bb))
          },
          onAct: Hc,
          onNeedRecipient: Sb,
          onLogin: ac
        }), "gift" !== xb && (0, fb.jsx)(PT, {})]
      })
    }));
    var KT = sb(2525),
      ZT = sb(8457),
      zT = sb(2593),
      qT = sb(2429),
      dT = sb(2474),
      AT = sb(2488),
      wT = sb(2496),
      rT = sb(2578),
      oT = sb(2560),
      ST = sb(2260),
      RT = sb(2301),
      vT = sb(2284),
      FT = sb(1968),
      xT = sb(2498),
      jT = sb(2303);

    function pT(bb) {
      let {
        show: cb
      } = bb;
      return cb ? (0, fb.jsx)(bU, {}) : null
    }

    function bU() {
      const {
        t: bb
      } = (0, Tb.E)(), {
        followsLeader: cb
      } = (0, qT.e)(), {
        loading: sb,
        friends: Wb,
        requests: Ib,
        invites: Hb
      } = (0, Ab.k)(), {
        userContext: Mb
      } = (0, nb.c)(), [Xb, mb] = (0, kb.useState)(jT.i);
      (0, kb.useEffect)((() => {
        (0, jT.c)()
      }), []);
      const lb = Ib.map((bb => bb.name)),
        {
          state: eb,
          recentRequesters: Cb
        } = (0, oT.o)(),
        Nb = new Map([...("loaded" === eb.status ? eb.recentPlayers : []).map((bb => [bb.preview.name, bb])), ...Cb.map((bb => [bb.name, bb]))]),
        Vb = (0, kb.useRef)(null),
        [Yb, hb] = (0, kb.useState)(""),
        [Jb, gb] = (0, kb.useState)("Enter"),
        [Bb, tb] = (0, kb.useState)(null);

      function yb() {
        Yb && (gb("Loading"), (0, vT.k)(Yb, "social_menu").then((bb => {
          if (Vb.current) switch (bb.kind) {
            case "sent":
              gb("Success");
              break;
            case "becameFriends":
              gb("BecameFriends");
              break;
            case "failed":
              tb(bb.message), gb("Error")
          }
        })))
      }
      return (0, kb.useEffect)((() => {
        if ("Enter" === Jb || "Loading" === Jb) return;
        const bb = setTimeout((() => {
          Vb.current.value = "", hb(""), gb("Enter")
        }), "Success" === Jb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Jb]), (0, fb.jsx)("div", {
        className: "SocialMenu",
        children: (0, fb.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, fb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, fb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, fb.jsx)(wT.b, {
                label: bb("socialBar:addFriend")
              }), (0, fb.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, fb.jsxs)("div", {
                  className: ab()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Jb}`]: !0
                  }),
                  children: ["Loading" === Jb && (0, fb.jsx)(ub.d, {}), "Success" === Jb && (0, fb.jsx)(Ub.b, {
                    name: "check"
                  }), "BecameFriends" === Jb && (0, fb.jsx)(fb.Fragment, {
                    children: bb("socialBar:nowFriends", {
                      playerName: Yb
                    })
                  }), "Error" === Jb && Bb && (0, fb.jsx)(fb.Fragment, {
                    children: bb(Bb.translationKey, Bb.params)
                  })]
                }), (0, fb.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, fb.jsx)(Lb.c, {
                    className: "PlayerSearchInput",
                    placeholderText: bb("socialBar:enterPlayerName"),
                    domRef: Vb,
                    onValueChange: bb => {
                      hb((0, Eb.t)(bb)), Vb.current.value = (0, Eb.t)(bb)
                    },
                    onEnter: () => {
                      Yb && (0, jb.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), yb()
                    }
                  }), (0, fb.jsxs)(Qb.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      yb()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, fb.jsx)(Ub.b, {
                      name: "user-plus"
                    }), " ", bb("socialBar:sendRequest")]
                  })]
                })]
              }), (0, fb.jsx)(xT.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Hb.length > 0 && (0, fb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, fb.jsx)(wT.b, {
                label: bb("socialBar:invites"),
                meta: Hb.length
              }), Hb.map((cb => (0, fb.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, fb.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, fb.jsx)(ST.b, {
                    invite: cb
                  })
                }), (0, fb.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, fb.jsx)(ST.c, {
                    invite: cb
                  })
                }), (0, fb.jsx)(Qb.n, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, RT.h)(cb)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${cb.destination.kind}`
                  },
                  children: bb("general:join")
                }), (0, fb.jsx)(vb.f, {
                  tooltipInner: (0, fb.jsx)(fb.Fragment, {
                    children: bb("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, fb.jsx)(Qb.h, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Xb || void 0 === Xb ? void 0 : Xb.kind) && Xb.inviteId === cb.id,
                    onClick: () => {
                      Ab.c.declineInvite(cb.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${cb.destination.kind}`
                    },
                    children: (0, fb.jsx)(Ub.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, cb.id)))]
            }), (0, fb.jsxs)("div", {
              className: ab()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !sb && 0 === Ib.length
              }),
              children: [(0, fb.jsx)(wT.b, {
                label: (0, fb.jsxs)(fb.Fragment, {
                  children: [(0, fb.jsx)(Ub.b, {
                    name: FT.h
                  }), " ", bb("socialBar:requests")]
                }),
                meta: (0, fb.jsxs)(fb.Fragment, {
                  children: [Ib.length, Ib.length === Fb.o && (0, fb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), sb && (0, fb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, fb.jsx)(ub.d, {})
              }), !sb && 0 === Ib.length && (0, fb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriendRequests")
              }), !sb && Ib.length > 0 && (0, fb.jsx)("div", {
                className: "PlayerRows",
                children: (0, fb.jsx)(mW.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Ib],
                  children: Ib.map(((cb, sb) => {
                    const kb = Nb.get(cb.name);
                    return (0, fb.jsxs)(AT.f, {
                      playerSocialPreview: cb,
                      zIndex: Ib.length - sb,
                      padDefaultFocus: (0, jT.f)(Xb, cb.name, sb),
                      status: kb && (0, fb.jsx)(rT.b, {
                        gameNameWithVariation: kb.gameNameWithVariation,
                        isPrivateLobby: kb.isPrivateLobby
                      }),
                      children: [(0, fb.jsx)(vb.f, {
                        tooltipInner: (0, fb.jsx)(fb.Fragment, {
                          children: bb("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, fb.jsx)(Qb.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mb((0, jT.d)(lb, sb)), (0, vT.g)(cb.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, fb.jsx)(Ub.b, {
                            name: "check"
                          })
                        })
                      }), (0, fb.jsx)(vb.f, {
                        tooltipInner: (0, fb.jsx)(fb.Fragment, {
                          children: bb("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, fb.jsx)(Qb.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mb((0, jT.d)(lb, sb)), (0, vT.g)(cb.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, fb.jsx)(Ub.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${cb.name}_${cb.isError}`)
                  }))
                })
              })]
            }), (0, fb.jsx)(rT.e, {})]
          }), (0, fb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, fb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, fb.jsx)(wT.b, {
                label: bb("socialBar:party")
              }), (0, fb.jsx)(dT.b, {})]
            }), (0, fb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, fb.jsx)(wT.b, {
                label: (0, fb.jsxs)(fb.Fragment, {
                  children: [(0, fb.jsx)(Ub.b, {
                    name: FT.e
                  }), " ", bb("socialBar:friends")]
                }),
                meta: (0, fb.jsxs)(fb.Fragment, {
                  children: [Wb.length, Wb.length >= (0, Fb.d)(Mb.getPlayerRanks()) && (0, fb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), sb && (0, fb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, fb.jsx)(ub.d, {})
              }), !sb && 0 === Wb.length && (0, fb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriends")
              }), !sb && Wb.length > 0 && (0, fb.jsx)("div", {
                className: "PlayerRows",
                children: (0, fb.jsx)(mW.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Wb],
                  children: Wb.map(((bb, sb) => (0, fb.jsx)(AT.f, {
                    playerSocialPreview: bb,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: bb => {
                      Ab.c.removeFriendFromState(bb)
                    },
                    zIndex: Wb.length - sb,
                    children: (0, fb.jsx)(AT.b, {
                      friend: bb,
                      followsLeader: cb,
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
    var cU = sb(2409);
    const sU = bb => {
        let {
          action: cb,
          padAction: sb
        } = bb;
        const {
          isTouchScreen: kb
        } = (0, hb.p)(["isTouchScreen"]), Wb = (0, Uk.l)();
        return kb && !Wb ? null : (0, fb.jsx)(bk.d, {
          className: "EverythingMenuTabKey",
          noaAction: cb,
          padHidesKey: !0,
          padMenuShortcut: sb
        })
      },
      kU = (0, kb.memo)((function() {
        const {
          t: bb
        } = (0, Tb.E)(), {
          gameState: cb,
          openEverythingMenuName: sb,
          initSdkSelectorFinished: Wb,
          crosshairGameView: Ub
        } = (0, hb.p)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Ib
        } = (0, nb.c)(), Hb = (0, qb.purchasesAllowed)(), Mb = (0, zb.C)(), Xb = (bb, cb) => (0, fb.jsx)(sU, {
          action: bb,
          padAction: cb
        }), [mb, lb] = (0, kb.useState)(null), Cb = (0, kb.useRef)(null), Nb = {
          ..."inGame" === cb ? {} : (0, Qb.U)({
            focusOnClick: !1
          }),
          ...ek.d
        }, Vb = null !== sb, Lb = sb !== Hc.r.COSMETIC_SHOP && !Ub;
        async function ub() {
          await async function() {
            if (!mb) return;
            await mb(), lb(null)
          }(), hb.d.set({
            openEverythingMenuName: null
          })
        }
        const Yb = (0, kb.useMemo)((() => "inGame" === cb ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            (0, ZT.c)()
          }
        } : (0, Bb.b)() ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            ac.k.discordActivity().then((bb => {
              bb.exit("User exited the game")
            }))
          }
        } : null), [cb, bb]);
        const Jb = (0, fb.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            ub()
          },
          children: (0, fb.jsx)(Qb.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, fb.jsx)(Ck.b, {
          showing: Vb,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: sb === Hc.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === cb,
          children: (0, fb.jsx)(Vk.c, {
            className: "EverythingMenuContainer",
            show: Vb && !Ub,
            children: (0, fb.jsx)(Nk.c, {
              close: () => {
                ub()
              },
              togglePointerLock: !1,
              children: (0, fb.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Wa.k)(sb) && (0, fb.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, fb.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Yb && (0, fb.jsx)(Qb.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Yb.onClick()
                      },
                      children: Yb.text
                    }), Vb && Hb && (0, fb.jsx)("div", {
                      ...Nb,
                      className: "EverythingMenuWallet",
                      title: bb("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, zb.o)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, fb.jsx)(KT.g, {})
                    })]
                  }), (0, fb.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, fb.jsxs)("div", {
                      ...Nb,
                      "data-pad-tab": !0,
                      "data-pad-selected": sb === Hc.r.SETTINGS ? "true" : void 0,
                      className: ab()("EverythingMenuTab", {
                        EverythingMenuTabActive: sb === Hc.r.SETTINGS
                      }),
                      onClick: () => {
                        hb.d.set({
                          openEverythingMenuName: Hc.r.SETTINGS
                        })
                      },
                      children: [bb("general:settings"), Xb("OpenSettings", "pause")]
                    }), (0, fb.jsxs)("div", {
                      ...Nb,
                      "data-pad-tab": !0,
                      "data-pad-selected": sb === Hc.r.CUSTOMISATION ? "true" : void 0,
                      className: ab()("EverythingMenuTab", {
                        EverythingMenuTabActive: sb === Hc.r.CUSTOMISATION
                      }),
                      onClick: () => {
                        hb.d.set({
                          openEverythingMenuName: Hc.r.CUSTOMISATION
                        })
                      },
                      children: [bb("general:player"), Xb("OpenCharacterCustomization")]
                    }), eb.featureFlags.useSocialFeatures && (0, fb.jsxs)("div", {
                      ...Nb,
                      "data-pad-tab": !0,
                      "data-pad-selected": sb === Hc.r.SOCIAL ? "true" : void 0,
                      className: ab()("EverythingMenuTab", {
                        EverythingMenuTabActive: sb === Hc.r.SOCIAL
                      }),
                      ...(0, jb.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, sb === Hc.r.SOCIAL),
                      onClick: () => {
                        hb.d.set({
                          openEverythingMenuName: Hc.r.SOCIAL
                        })
                      },
                      children: [bb("socialBar:social"), (0, fb.jsx)(cU.b, {})]
                    }), Hb && (0, fb.jsxs)("div", {
                      ...Nb,
                      "data-pad-tab": !0,
                      "data-pad-selected": sb === Hc.r.COSMETIC_SHOP ? "true" : void 0,
                      className: ab()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: sb === Hc.r.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        hb.d.set({
                          openEverythingMenuName: Hc.r.COSMETIC_SHOP
                        })
                      },
                      children: [(0, fb.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: bb("store:title")
                      }), "new" === Mb && (0, fb.jsx)(fT, {}), "dot" === Mb && (0, fb.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === cb && (0, fb.jsxs)("div", {
                      ...Nb,
                      "data-pad-tab": !0,
                      "data-pad-selected": sb === Hc.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: ab()("EverythingMenuTab", {
                        EverythingMenuTabActive: sb === Hc.r.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        hb.d.set({
                          openEverythingMenuName: Hc.r.LOBBY_LEADERBOARD
                        })
                      },
                      children: [bb("general:lobby"), Xb("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, fb.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Jb
                  })]
                }), (0, Wa.k)(sb) && Jb, (0, fb.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === cb ? "0.85" : "1"
                  },
                  children: [(0, fb.jsx)(Xk, {
                    show: sb === Hc.r.SETTINGS,
                    setBeforeResumeCallback: lb
                  }), (0, fb.jsx)(Qk, {
                    show: sb === Hc.r.CUSTOMISATION
                  }), (0, fb.jsx)(kb.Suspense, {
                    fallback: null,
                    children: (0, fb.jsx)(vW, {
                      show: sb === Hc.r.SHOP
                    })
                  }), (0, fb.jsx)(Ua, {
                    show: sb === Hc.r.LOBBY_LEADERBOARD
                  }), (0, fb.jsx)(GT, {
                    show: sb === Hc.r.COSMETIC_SHOP
                  }), (0, fb.jsx)(pT, {
                    show: sb === Hc.r.SOCIAL
                  })]
                }), !(0, eb.isMobileApp)() && (0, Lk.f)(Ib.getPlayerRanks()) && (0, fb.jsx)(Vk.c, {
                  ref: Cb,
                  className: "EverythingMenuBannerDiv",
                  show: Lb,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, fb.jsx)(zT.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Cb
                    },
                    showing: Vb && Lb,
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
  8924: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(344),
      Wb = sb(8930);

    function ab(bb, cb, sb) {
      const ab = Object.entries(cb).sort(((bb, cb) => cb[1] - bb[1])),
        Tb = (0, kb.ub)(bb);
      Tb.push(bb ? "\n\n" : "\n");
      for (const [Wb, mb] of ab) {
        var Ub, Ib, Hb;
        const bb = null !== (Ub = null === sb || void 0 === sb || null === (Ib = sb[Wb]) || void 0 === Ib ? void 0 : Ib.icon) && void 0 !== Ub ? Ub : `${Wb} Enchantment`;
        Tb.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Tb.push({
          str: `${Wb} ${null!==(Hb=(0,kb.Q)(mb))&&void 0!==Hb?Hb:mb}\n`
        })
      }
      Tb.push({
        str: "\n"
      });
      for (const [kb, mb] of ab) {
        var fb, Mb, Xb, nb;
        const bb = null !== (fb = null === sb || void 0 === sb || null === (Mb = sb[kb]) || void 0 === Mb ? void 0 : Mb.icon) && void 0 !== fb ? fb : `${kb} Enchantment`,
          cb = null !== (Xb = null === sb || void 0 === sb || null === (nb = sb[kb]) || void 0 === nb ? void 0 : nb.description) && void 0 !== Xb ? Xb : (0, Wb.n)(kb);
        Tb.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Tb.push({
          str: cb,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Tb.push({
          str: "\n"
        })
      }
      return Tb
    }
  },
  8937: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb,
      g: () => Cb,
      i: () => Qb,
      m: () => Ib,
      o: () => eb,
      q: () => fb,
      u: () => Xb,
      v: () => lb,
      z: () => Mb
    });
    var kb = sb(334),
      Wb = sb(628),
      ab = sb(344),
      Tb = sb(4011),
      Ub = sb(8924);

    function Ib(bb, cb) {
      var sb;
      let {
        player: kb,
        chestOrCreative: Wb
      } = bb;
      var ab;
      return cb < kb.length ? null !== (ab = kb[cb]) && void 0 !== ab ? ab : null : null !== (sb = Wb[cb - kb.length]) && void 0 !== sb ? sb : null
    }

    function Hb(bb) {
      var cb;
      return null !== (cb = bb.amount) && void 0 !== cb ? cb : 0
    }

    function fb(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Mb(bb) {
      return !!bb.shiftKey
    }

    function Xb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const nb = new Set,
      mb = 50;

    function lb(bb, cb) {
      var sb;
      const kb = null === (sb = bb[cb]) || void 0 === sb ? void 0 : sb.displayName;
      return (0, Wb.L)(kb) ? "string" !== typeof cb ? "" : (!nb.has(cb) && nb.size < mb && (nb.add(cb), console.warn(`No item called "${cb}", so its hover shows the name as given`)), cb) : kb
    }

    function Qb(bb, cb, sb) {
      var Ib, Hb, fb, Mb, Xb, nb, mb, Qb, eb, Cb, Nb, Vb, Lb, ub;
      const Yb = bb.attributes,
        hb = null !== (Ib = null === (Hb = cb[bb.name]) || void 0 === Hb ? void 0 : Hb.rootName) && void 0 !== Ib ? Ib : bb.name,
        Jb = null !== (fb = null !== (Mb = Yb.customDisplayName) && void 0 !== Mb ? Mb : null === (Xb = cb[bb.name]) || void 0 === Xb ? void 0 : Xb.displayName) && void 0 !== fb ? fb : lb(cb, hb);
      let gb = Jb;
      const Bb = null === (nb = Yb.customAttributes) || void 0 === nb ? void 0 : nb.enchantmentTier;
      Bb && (gb = (0, ab.ub)(Jb, {
        colour: ab.nb[Bb]
      }));
      const tb = null !== (mb = null !== (Qb = null !== (eb = function(bb, cb) {
        var sb;
        if (void 0 === bb || null !== (sb = cb.customAttributes) && void 0 !== sb && sb.author) return bb;
        const Wb = (0, kb.ic)(bb);
        return Wb.every((bb => "string" === typeof bb)) ? bb : Wb.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Yb.customDescription, Yb)) && void 0 !== eb ? eb : null === (Cb = cb[bb.name]) || void 0 === Cb ? void 0 : Cb.description) && void 0 !== Qb ? Qb : null === (Nb = cb[hb]) || void 0 === Nb ? void 0 : Nb.description) && void 0 !== mb ? mb : "";
      let yb = tb;
      if (null !== (Vb = Yb.customAttributes) && void 0 !== Vb && Vb.enchantments) yb = (0, Ub.e)(tb, Yb.customAttributes.enchantments, Yb.customAttributes.enchantmentData);
      else if (sb[hb]) yb = (0, ab.ub)(tb), yb.push({
        str: "\n"
      }), yb.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Lb = Yb.customAttributes) && void 0 !== Lb && Lb.mobSettings) {
        var Pb, Db;
        const bb = Yb.customAttributes.mobSettings;
        var Eb, ib;
        if (yb = [], (0, Wb.L)(Yb.customAttributes.health) || (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: Yb.customAttributes.health.toString()
          }), (0, Wb.L)(bb.maxHealth) || (yb.push({
            str: "/"
          }), yb.push({
            str: bb.maxHealth.toString()
          }))), !(0, Wb.L)(bb.attackDamage) && bb.attackDamage > 0 && (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.attackDamage.toString()
          })), !(0, Wb.L)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Wb.L)(bb.baseRunningSpeed) || (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) yb.push({
          str: "\n"
        }), yb.push({
          str: {
            translationKey: "general:has"
          }
        }), yb.push({
          str: " "
        }), yb.push({
          icon: null !== (Eb = null === (ib = bb.tameInfo) || void 0 === ib ? void 0 : ib.saddleItemName) && void 0 !== Eb ? Eb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (yb.push({
            str: "\n"
          }), yb.push({
            str: "\n"
          }), bb.petInfo && null !== (Pb = bb.tameInfo) && void 0 !== Pb && Pb.supportsFriendship) {
          const cb = Tb.b.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of cb) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: "\n"
          });
          const sb = Tb.b.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Tb.b.hungerLevelIcons[sb]) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: " "
          }), yb.push({
            str: Tb.b.hungerLevelTranslations[sb],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (Db = bb.tameInfo) && void 0 !== Db && Db.supportsFriendship) {
          var Ob, Gb;
          let cb = null !== (Ob = bb.tameInfo.likedFoods) && void 0 !== Ob ? Ob : [];
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Superliked]
            }
          }), yb.push({
            str: " "
          }), null !== (Gb = bb.petInfo) && void 0 !== Gb && Gb.superlikedFoodKnown ? (yb.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), cb = cb.filter((cb => cb !== bb.petInfo.superlikedFood))) : yb.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Liked]
            }
          }), yb.push({
            str: " "
          });
          for (const bb of cb) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Neutral]
            }
          }), yb.push({
            str: " "
          });
          for (const sb of null !== (Kb = bb.tameInfo.neutralFoods) && void 0 !== Kb ? Kb : []) {
            var Kb;
            yb.push({
              icon: sb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Disliked]
            }
          }), yb.push({
            str: " "
          });
          for (const sb of null !== (Zb = bb.tameInfo.dislikedFoods) && void 0 !== Zb ? Zb : []) {
            var Zb;
            yb.push({
              icon: sb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        yb.length > 0 ? (yb.shift(), yb.unshift(...(0, ab.ub)(tb))) : yb = (0, ab.ub)(tb)
      }
      return {
        name: gb,
        desc: yb,
        fontStyle: null !== (ub = Yb.customAttributes) && void 0 !== ub && ub.author ? "italic" : "normal"
      }
    }

    function eb(bb, cb, sb, kb) {
      const Wb = Ib(bb, sb),
        ab = Ib(bb, kb);
      if (!Wb) return !1;
      const Tb = cb[Wb.name].armourReduction,
        Ub = cb[ab.name].armourReduction;
      if (Ub === Tb) {
        var Hb, fb, Mb, Xb;
        const bb = null !== (Hb = null === (fb = Wb.attributes.customAttributes) || void 0 === fb ? void 0 : fb.enchantmentTier) && void 0 !== Hb ? Hb : "Tier 0",
          cb = null !== (Mb = null === (Xb = ab.attributes.customAttributes) || void 0 === Xb ? void 0 : Xb.enchantmentTier) && void 0 !== Mb ? Mb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(cb.replace("Tier ", ""))
      }
      return Tb > Ub
    }

    function Cb(bb) {
      let cb;
      if ("number" === typeof bb) {
        const sb = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!sb) return null;
        cb = sb.getBoundingClientRect()
      } else cb = bb.getBoundingClientRect();
      return {
        x: cb.left + cb.width / 2,
        y: cb.top + cb.height / 2
      }
    }
  },
  8829: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => nb,
      h: () => mb,
      i: () => lb
    });
    var kb = sb(1431),
      Wb = sb(64),
      ab = sb(1302),
      Tb = sb(4270),
      Ub = sb(2262),
      Ib = sb(1197),
      Hb = sb(117),
      fb = sb(1912),
      Mb = sb(1327),
      Xb = sb(1087);

    function nb(bb) {
      let {
        show: cb,
        onClose: sb
      } = bb;
      const {
        requestedGameNameWithVariation: kb,
        lobbyName: Wb,
        shownLobbyName: ab
      } = (0, fb.f)("connectedGame"), Ib = (0, Ub.c)(kb, Wb, !1);
      return Hb.featureFlags.canUseInviteLinks && (0, Xb.jsx)(Tb.c, {
        show: cb,
        close: sb,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Xb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Xb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Xb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Xb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Ib ? (0, Xb.jsx)(Mb.d, {}) : Ib, (0, Xb.jsx)("br", {}), "Lobby Name: ", ab, (0, Xb.jsx)("br", {}), (0, Xb.jsx)("br", {}), (0, Xb.jsx)("br", {}), (0, Xb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Xb.jsx)(mb, {})]
        })
      })
    }

    function mb() {
      var bb;
      const {
        t: cb
      } = (0, Ib.E)(), sb = null !== (bb = lb(Hb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [ab, Tb] = (0, Wb.useState)(0), [Ub, fb] = (0, Wb.useReducer)((bb => bb + 1), 0);
      return (0, Wb.useEffect)((() => {
        const bb = setTimeout((() => {
          fb()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [ab]), Hb.featureFlags.canUseInviteLinks && (0, Xb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Xb.jsx)("div", {
          className: "InviteLinkInner",
          children: sb
        }), (0, Xb.jsx)(kb.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(sb).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Tb(Date.now())
          },
          disabled: Date.now() - ab < 1e3,
          children: Date.now() - ab < 1e3 ? cb("general:copied") : cb("general:copy")
        })]
      })
    }

    function lb(bb) {
      const [cb, sb] = (0, Wb.useState)(null);
      return (0, Wb.useEffect)((() => {
        if (!bb) return;
        let cb = !0;
        return (0, ab.x)().then((bb => {
          cb && sb(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          cb = !1
        }
      }), [bb]), cb
    }
  },
  8910: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1912),
      Ub = sb(1087);

    function Ib(bb) {
      const cb = Math.floor(bb / 3600),
        sb = Math.floor(bb % 3600 / 60),
        kb = Math.floor(bb % 60),
        Wb = `${sb.toString().padStart(2,"0")}:${kb.toString().padStart(2,"0")}`;
      return cb > 0 ? `${cb}:${Wb}` : Wb
    }
    const Hb = (0, kb.memo)((function(bb) {
      let {
        className: cb
      } = bb;
      const {
        recording: sb,
        seconds: kb
      } = (0, Tb.f)("replayRecorder");
      return sb ? (0, Ub.jsxs)("div", {
        className: ab()("RecordingIndicator", cb),
        children: [(0, Ub.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ub.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Ub.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Ib(kb)
        })]
      }) : null
    }))
  },
  4600: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4384),
      Tb = sb(1197),
      Ub = sb(1039),
      Ib = sb(1431),
      Hb = sb(1474),
      fb = sb(1332),
      Mb = sb(2391),
      Xb = sb(1087);
    const nb = {
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

    function mb(bb) {
      let {
        platform: cb
      } = bb;
      const sb = "youtube" === cb;
      return (0, Xb.jsxs)("span", {
        className: Wb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: sb
        }),
        children: [sb && (0, Xb.jsx)(Mb.b, {
          variant: "white"
        }), !sb && (0, Xb.jsx)(Ub.b, {
          name: nb[cb].icon,
          kit: "brands"
        })]
      })
    }

    function lb(bb) {
      let {
        platform: cb,
        link: sb,
        editable: kb,
        userContext: Wb,
        onLinksUpdated: Mb
      } = bb;
      const {
        t: lb
      } = (0, Tb.E)(), Qb = nb[cb];
      if (!sb && !kb) return null;

      function eb() {
        var bb;
        if (!Wb || !Mb) return;
        fb.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Qb.name
            }
          },
          prefixText: ab.y[cb],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === sb || void 0 === sb ? void 0 : sb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: sb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Hb.b.setSocialLink(Wb, cb, bb.value) : await Hb.b.clearSocialLink(Wb, cb), Mb()
          } catch (sb) {
            console.error("Failed to update social link", sb), fb.NotificationProvider.showAlertPopup({
              title: sb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (sb) {
        const bb = `@${sb.handle}`;
        return (0, Xb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Qb.color
          },
          href: sb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Xb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Xb.jsx)(mb, {
              platform: cb
            }), (0, Xb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Xb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), kb && (0, Xb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Ib.U)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), eb()
            },
            children: (0, Xb.jsx)(Ub.b, {
              name: "pen-to-square"
            })
          }), !kb && (0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Xb.jsx)(Ub.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Xb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Qb.color
        },
        ...(0, Ib.U)(),
        onClick: () => {
          eb()
        },
        children: [(0, Xb.jsx)(mb, {
          platform: cb
        }), (0, Xb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Qb.name
          }), (0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: lb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Xb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Xb.jsx)(Ub.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Qb(bb) {
      let {
        socialLinks: cb,
        editable: sb = !1,
        userContext: kb,
        onLinksUpdated: Wb
      } = bb;
      if (!sb && 0 === cb.length) return null;
      const Tb = new Map(cb.map((bb => [bb.platform, bb]))),
        Ub = sb ? ab.w : cb.map((bb => bb.platform));
      return (0, Xb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Xb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ub.map((bb => (0, Xb.jsx)(lb, {
            platform: bb,
            link: Tb.get(bb),
            editable: sb,
            userContext: kb,
            onLinksUpdated: Wb
          }, bb)))
        })
      })
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  8967: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(64),
      Wb = sb(3369);

    function ab() {
      const [bb, cb] = (0, kb.useState)(!1);
      return (0, kb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Wb.e)().then((() => {
          bb && cb(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  6226: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(64),
      Wb = sb(37);

    function ab(bb, cb) {
      var sb;
      const [ab, Tb] = (0, kb.useState)(null !== (sb = Wb.h.getItem(bb)) && void 0 !== sb ? sb : cb);
      return [ab, cb => {
        Wb.h.setItem(bb, cb), Tb(cb)
      }]
    }
  },
  8888: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      f: () => Mb
    });
    sb(8895);
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(8871);

    function Ub(bb, cb) {
      return Math.max(1, Math.round(bb * cb))
    }

    function Ib(bb, cb, sb) {
      const kb = 2 * sb >= cb - 1;
      return {
        x: bb,
        y: bb,
        size: cb,
        border: Math.min(sb, Math.floor(cb / 2)),
        filled: kb
      }
    }
    var Hb = sb(1087);
    const fb = 1.4;

    function Mb(bb, cb) {
      return bb && cb ? `scale(${fb})` : "scale(1)"
    }

    function Xb(bb) {
      return "classic" === bb.settings.style ? (0, Hb.jsx)(lb, {
        ...bb
      }) : (0, Hb.jsx)(ub, {
        ...bb
      })
    }
    const nb = .125;

    function mb(bb, cb) {
      const sb = {};
      if (bb.color !== Tb.g.color && (sb.color = (0, Tb.n)(bb.color)), bb.opacity !== Tb.g.opacity && (sb.opacity = bb.opacity / 100), bb.outline !== Tb.g.outline || bb.outlineColor !== Tb.g.outlineColor) {
        const cb = bb.outline,
          kb = (0, Tb.n)(bb.outlineColor);
        sb.textShadow = cb > 0 ? `-${cb}px 0 ${kb}, 0 ${cb}px ${kb}, ${cb}px 0 ${kb}, 0 -${cb}px ${kb}` : "none"
      }
      if (bb.size !== Tb.g.size) {
        const kb = bb.size / 100;
        sb.fontSize = cb ? `calc(max(1.3rem, 18px) * ${kb})` : `calc(1.3rem * ${kb})`, sb.marginTop = `-${nb}em`, sb.transformOrigin = `50% calc(50% + ${nb}em)`
      }
      return sb
    }

    function lb(bb) {
      let {
        settings: cb,
        touch: sb,
        inPreview: kb,
        inEditor: ab,
        pressed: Tb = !1,
        pressRef: Ub
      } = bb;
      return (0, Hb.jsx)("div", {
        className: Wb()("Crosshair", {
          Touch: sb,
          CrosshairInPreview: kb,
          CrosshairInEditor: ab || kb
        }),
        ref: Ub,
        style: {
          transform: Mb(Tb, cb.growOnClick),
          ...mb(cb, sb)
        },
        children: "+"
      })
    }

    function Qb(bb, cb) {
      return bb / cb + "px"
    }

    function eb(bb, cb, sb, kb) {
      return {
        ...Vb(bb, cb, sb),
        width: Qb(bb.w, sb),
        height: Qb(bb.h, sb),
        background: kb
      }
    }

    function Cb(bb, cb, sb) {
      return {
        left: Qb(bb.x, cb),
        top: Qb(bb.y, cb),
        width: Qb(bb.size, cb),
        height: Qb(bb.size, cb),
        borderWidth: Qb(bb.border, cb),
        borderColor: sb,
        background: bb.filled ? sb : void 0
      }
    }
    const Nb = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Vb(bb, cb, sb) {
      const [kb, Wb] = bb.arm ? Nb[bb.arm] : [0, 0], ab = Math.round(cb * sb);
      return {
        left: Qb(bb.x + kb * ab, sb),
        top: Qb(bb.y + Wb * ab, sb)
      }
    }

    function Lb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function ub(bb) {
      let {
        settings: cb,
        inPreview: sb,
        inEditor: kb,
        pressed: Mb = !1,
        spread: Xb,
        spreadRef: nb
      } = bb;
      const mb = (0, ab.useRef)(null),
        {
          box: lb,
          dpr: Qb
        } = function(bb) {
          const [cb, sb] = (0, ab.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ab.useLayoutEffect)((() => {
            const cb = bb.current;
            if (!cb) return;
            const kb = () => {
              const bb = cb.getBoundingClientRect(),
                kb = window.devicePixelRatio || 1;
              sb((cb => cb.dpr === kb && cb.box.left === bb.left && cb.box.top === bb.top && cb.box.width === bb.width && cb.box.height === bb.height ? cb : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: kb
              }))
            };
            kb();
            const Wb = new ResizeObserver(kb);
            return Wb.observe(cb), window.addEventListener("resize", kb), window.addEventListener("scroll", kb, !0), () => {
              Wb.disconnect(), window.removeEventListener("resize", kb), window.removeEventListener("scroll", kb, !0)
            }
          }), [bb]), cb
        }(mb),
        Nb = (0, ab.useRef)(Qb);
      Nb.current = Qb;
      const ub = function(bb, cb) {
          const sb = Ub(bb.lineThickness, cb),
            kb = Ub(bb.lineLength, cb),
            Wb = Math.round(bb.gap * cb),
            ab = Ub(bb.dotSize, cb),
            Tb = bb.outline > 0 ? Ub(bb.outline, cb) : 0,
            Hb = Ub(bb.circleThickness, cb),
            fb = bb.circle ? Math.round(bb.circleRadius * cb * 2 + Hb) : 0,
            Mb = function(bb, cb, sb, kb) {
              return bb.lines ? cb : bb.dot ? sb : bb.circle && kb % 2 === 0 ? 2 : 1
            }(bb, sb, ab, fb),
            Xb = [];
          if (bb.lines && (Xb.push({
              x: Mb + Wb,
              y: 0,
              w: kb,
              h: sb,
              arm: "right"
            }), Xb.push({
              x: -Wb - kb,
              y: 0,
              w: kb,
              h: sb,
              arm: "left"
            }), Xb.push({
              x: 0,
              y: Mb + Wb,
              w: sb,
              h: kb,
              arm: "down"
            }), bb.tStyle || Xb.push({
              x: 0,
              y: -Wb - kb,
              w: sb,
              h: kb,
              arm: "up"
            }), 0 === Wb && Xb.push({
              x: 0,
              y: 0,
              w: sb,
              h: sb
            })), bb.dot) {
            const bb = Math.floor((Mb - ab) / 2);
            Xb.push({
              x: bb,
              y: bb,
              w: ab,
              h: ab
            })
          }
          const nb = Xb.map((bb => ({
            ...bb,
            x: bb.x - Tb,
            y: bb.y - Tb,
            w: bb.w + 2 * Tb,
            h: bb.h + 2 * Tb
          })));
          let mb = null,
            lb = null;
          if (bb.circle) {
            const bb = fb + ((fb - Mb) % 2 === 0 ? 0 : 1),
              cb = (Mb - bb) / 2;
            mb = Ib(cb, bb, Hb), Tb > 0 && (lb = Ib(cb - Tb, bb + 2 * Tb, Hb + 2 * Tb))
          }
          return {
            cell: Mb,
            fills: Xb,
            outlines: Tb > 0 ? nb : [],
            ring: mb,
            ringOutline: lb
          }
        }(Mb && cb.growOnClick ? function(bb, cb) {
          return {
            ...bb,
            outline: bb.outline * cb,
            lineLength: bb.lineLength * cb,
            lineThickness: bb.lineThickness * cb,
            gap: bb.gap * cb,
            dotSize: bb.dotSize * cb,
            circleRadius: bb.circleRadius * cb,
            circleThickness: bb.circleThickness * cb
          }
        }(cb, fb) : cb, Qb),
        Yb = function(bb, cb, sb) {
          const kb = Math.round((bb.left + bb.width / 2) * sb - cb / 2),
            Wb = Math.round((bb.top + bb.height / 2) * sb - cb / 2);
          return {
            x: kb / sb - bb.left,
            y: Wb / sb - bb.top
          }
        }(lb, ub.cell, Qb),
        hb = (0, Tb.n)(cb.color),
        Jb = (0, Tb.n)(cb.outlineColor),
        gb = (0, ab.useRef)(0);
      (0, ab.useLayoutEffect)((() => {
        if (nb) return nb.current = bb => {
          var cb;
          gb.current = bb, null === (cb = mb.current) || void 0 === cb || cb.querySelectorAll("[data-arm]").forEach((cb => {
            Object.assign(cb.style, Vb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(cb), bb, Nb.current))
          }))
        }, () => {
          nb.current = null
        }
      }), [nb]);
      const Bb = null !== Xb && void 0 !== Xb ? Xb : gb.current;
      return (0, Hb.jsx)("div", {
        ref: mb,
        className: Wb()("CrosshairShapes", {
          CrosshairInPreview: sb,
          CrosshairInEditor: kb || sb,
          CrosshairSpreads: void 0 !== nb
        }),
        children: (0, Hb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Yb.x,
            top: Yb.y,
            opacity: cb.opacity / 100
          },
          children: (0, Hb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [ub.ringOutline && (0, Hb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(ub.ringOutline, Qb, Jb)
            }), ub.outlines.map(((bb, cb) => (0, Hb.jsx)("div", {
              className: "CrosshairPart",
              ...Lb(bb),
              style: eb(bb, Bb, Qb, Jb)
            }, `o${cb}`))), ub.ring && (0, Hb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(ub.ring, Qb, hb)
            }), ub.fills.map(((bb, cb) => (0, Hb.jsx)("div", {
              className: "CrosshairPart",
              ...Lb(bb),
              style: eb(bb, Bb, Qb, hb)
            }, `f${cb}`)))]
          })
        })
      })
    }
  },
  8897: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => fb,
      f: () => Qb,
      i: () => lb
    });
    var kb = sb(8871);
    const Wb = "XH1-",
      ab = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Tb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ub = ["color", "outlineColor"],
      Ib = 1 + 3 * Ub.length + Tb.length + 1,
      Hb = Math.ceil(8 * Ib / Math.log2(62)),
      fb = Wb.length + Hb;

    function Mb(bb) {
      let cb = 90;
      for (const sb of bb) cb = 31 * cb + sb & 255;
      return cb
    }
    const Xb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      nb = BigInt(Xb.length);

    function mb(bb, cb) {
      let sb = 0n;
      for (const Wb of bb) {
        const bb = Xb.indexOf(Wb);
        if (bb < 0) return null;
        sb = sb * nb + BigInt(bb)
      }
      if (sb >> BigInt(8 * cb) !== 0n) return null;
      const kb = [];
      for (let Wb = 0; Wb < cb; Wb++) kb.unshift(Number(0xffn & sb)), sb >>= 8n;
      return kb
    }

    function lb(bb) {
      let cb = "shapes" === bb.style ? 1 : 0;
      ab.forEach(((sb, kb) => {
        bb[sb] && (cb |= 1 << kb + 1)
      }));
      const sb = [cb];
      for (const Wb of Ub) {
        const cb = (0, kb.k)(Wb, bb[Wb]);
        sb.push(cb >> 16 & 255, cb >> 8 & 255, 255 & cb)
      }
      for (const Wb of Tb) {
        const {
          min: cb,
          step: ab
        } = kb.c[Wb];
        sb.push(Math.round(((0, kb.k)(Wb, bb[Wb]) - cb) / ab))
      }
      return sb.push(Mb(sb)), Wb + function(bb, cb) {
        let sb = 0n;
        for (const Wb of bb) sb = sb << 8n | BigInt(Wb);
        let kb = "";
        for (let Wb = 0; Wb < cb; Wb++) kb = Xb[Number(sb % nb)] + kb, sb /= nb;
        return kb
      }(sb, Hb)
    }

    function Qb(bb) {
      for (const cb of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Hb}})`, "gi"))) {
        const bb = eb(mb(cb[1], Ib));
        if (bb) return bb
      }
      return null
    }

    function eb(bb) {
      if (!bb || bb.length !== Ib || Mb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const cb = bb[0],
        sb = {
          ...kb.g,
          style: 1 & cb ? "shapes" : "classic"
        };
      ab.forEach(((bb, kb) => {
        sb[bb] = 0 !== (cb & 1 << kb + 1)
      }));
      let Wb = 1;
      for (const kb of Ub) sb[kb] = bb[Wb] << 16 | bb[Wb + 1] << 8 | bb[Wb + 2], Wb += 3;
      for (const ab of Tb) {
        const {
          min: cb,
          step: Tb
        } = kb.c[ab];
        sb[ab] = (0, kb.k)(ab, cb + bb[Wb] * Tb), Wb++
      }
      return sb
    }
  },
  8871: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => Wb,
      k: () => ab,
      n: () => Hb,
      p: () => Ib,
      q: () => fb,
      r: () => Ub,
      u: () => Tb
    });
    const kb = {
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
      Wb = Object.freeze({
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

    function ab(bb, cb) {
      var sb;
      const {
        min: ab,
        max: Tb,
        step: Ub
      } = kb[bb];
      if (!Number.isFinite(cb)) return Wb[bb];
      const Ib = (null !== (sb = String(Ub).split(".")[1]) && void 0 !== sb ? sb : "").length,
        Hb = Number((Math.round(cb / Ub) * Ub).toFixed(Ib));
      return Math.min(Tb, Math.max(ab, Hb))
    }

    function Tb(bb, cb, sb) {
      const kb = "number" === typeof sb ? ab(cb, sb) : sb;
      return {
        ...bb,
        [cb]: kb
      }
    }

    function Ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wb).every((kb => sb.includes(kb) || bb[kb] === cb[kb]))
    }

    function Ib(bb) {
      return Ub(bb, Wb)
    }

    function Hb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function fb(bb) {
      const cb = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return cb ? parseInt(cb[1], 16) : null
    }
  },
  8905: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb,
      e: () => Xb
    });
    var kb = sb(64),
      Wb = sb(37),
      ab = sb(8897),
      Tb = sb(8871);
    const Ub = "crosshairCode";
    let Ib = null;
    const Hb = new Set;

    function fb() {
      if (null === Ib) {
        var bb;
        const cb = Wb.h.getItem(Ub);
        Ib = null !== (bb = "string" === typeof cb ? (0, ab.f)(cb) : null) && void 0 !== bb ? bb : Tb.g
      }
      return Ib
    }

    function Mb(bb) {
      Ib = bb, (0, Tb.p)(bb) ? Wb.h.removeItem(Ub) : Wb.h.setItem(Ub, (0, ab.i)(bb));
      for (const cb of Hb) cb()
    }

    function Xb() {
      const [bb, cb] = (0, kb.useState)(fb);
      return (0, kb.useEffect)((() => {
        const bb = () => {
          cb(fb())
        };
        return bb(), sb = bb, Hb.add(sb), () => {
          Hb.delete(sb)
        };
        var sb
      }), []), bb
    }
  },
  8496: (bb, cb, sb) => {
    function kb(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Wb(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, cb) => ({
        left: Math.min(bb.left, cb.left),
        top: Math.min(bb.top, cb.top),
        right: Math.max(bb.right, cb.right),
        bottom: Math.max(bb.bottom, cb.bottom)
      })))
    }

    function ab(bb, cb) {
      const sb = Math.max(0, (cb - (bb.right - bb.left)) / 2),
        kb = Math.max(0, (cb - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - sb,
        top: bb.top - kb,
        right: bb.right + sb,
        bottom: bb.bottom + kb
      }
    }

    function Tb(bb, cb) {
      return cb.x >= bb.left && cb.x <= bb.right && cb.y >= bb.top && cb.y <= bb.bottom
    }

    function Ub(bb, cb, sb) {
      let Wb = null,
        Ub = 1 / 0;
      for (const {
          id: kb,
          box: ab
        }
        of cb) {
        const cb = (ab.right - ab.left) * (ab.bottom - ab.top);
        Tb(ab, bb) && cb < Ub && (Ub = cb, Wb = kb)
      }
      if (null !== Wb) return Wb;
      let Ib = 1 / 0;
      for (const {
          id: Hb,
          box: fb
        }
        of cb) {
        if (!Tb(ab(fb, sb), bb)) continue;
        const cb = kb(fb),
          Ub = Math.hypot(bb.x - cb.x, bb.y - cb.y);
        Ub < Ib && (Ib = Ub, Wb = Hb)
      }
      return Wb
    }

    function Ib(bb, cb, sb) {
      return {
        left: sb.left,
        top: sb.top,
        right: bb - sb.right,
        bottom: cb - sb.bottom
      }
    }

    function Hb(bb, cb, sb, kb) {
      const Wb = (bb, cb, sb) => Math.max(Math.min(cb, 0), Math.min(Math.max(sb, 0), bb));
      return {
        x: Wb(cb, kb.left - bb.left, kb.right - bb.right),
        y: Wb(sb, kb.top - bb.top, kb.bottom - bb.bottom)
      }
    }

    function fb(bb, cb, sb, kb, Wb) {
      const ab = bb.dx * kb + cb,
        Tb = bb.dy * Wb + sb,
        Ub = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Ub(ab / kb),
        dy: Ub(Tb / Wb)
      }
    }

    function Mb(bb, cb, sb, kb) {
      return cb <= 0 || sb <= 0 ? 1 : Math.max(.05, Math.min(1, bb / cb, kb / sb))
    }

    function Xb(bb, cb, sb) {
      return Math.min(bb.right, cb.right) - Math.max(bb.left, cb.left) > sb && Math.min(bb.bottom, cb.bottom) - Math.max(bb.top, cb.top) > sb
    }

    function nb(bb, cb) {
      const sb = (bb, cb, sb, kb) => cb - bb > kb - sb ? sb - bb > cb - kb ? kb - cb : sb - bb : bb < sb ? sb - bb : cb > kb ? kb - cb : 0;
      return {
        x: sb(bb.left, bb.right, cb.left, cb.right),
        y: sb(bb.top, bb.bottom, cb.top, cb.bottom)
      }
    }

    function mb(bb, cb) {
      let {
        avoid: sb = null,
        bounds: kb = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Wb = 0, ab = 1 / 0;
      return bb.forEach(((bb, Tb) => {
        const Ub = cb.filter((cb => Xb(bb, cb, 0))).length,
          Ib = null !== kb && (bb.left < kb.left || bb.top < kb.top || bb.right > kb.right || bb.bottom > kb.bottom),
          Hb = Ub + (sb && Xb(bb, sb, 0) ? 1e3 : 0) + (Ib ? 1e6 : 0);
        Hb < ab && (Wb = Tb, ab = Hb)
      })), Wb
    }
    sb.d(cb, {
      B: () => Ib,
      E: () => nb,
      F: () => Wb,
      d: () => kb,
      f: () => Tb,
      j: () => Xb,
      l: () => Hb,
      n: () => ab,
      q: () => mb,
      t: () => fb,
      x: () => Ub,
      y: () => Mb
    })
  },
  8867: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      f: () => Wb
    });
    var kb = sb(19);

    function Wb(bb, cb) {
      return bb && !cb
    }

    function ab() {
      return Wb(kb.d.get("isTouchScreen"), kb.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8827: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = new Set(["chunkBorders"])
  },
  8819: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ALL_DEV_TOOLS: () => Tb,
      coreDevTools: () => Hb,
      devTools: () => Ib
    });
    var kb = sb(649),
      Wb = sb(1291),
      ab = sb(8827);
    const Tb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ub() {
      const {
        noaDevTools: bb
      } = await sb.e(230).then((() => sb(40495)));
      return bb
    }
    const Ib = new class {
        constructor() {
          this.loadHost = Ub, this.tools = Tb
        }
        setHost(bb) {
          this.tools = null === bb ? Tb : bb.tools, this.loadHost = null === bb ? Ub : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, cb) {
          const sb = await this.loadHost();
          await sb.downloadScene(bb, cb)
        }
        async setAmbientLightIntensity(bb) {
          const cb = await this.loadHost();
          await cb.setAmbientLightIntensity(bb)
        }
      },
      Hb = {
        tools: ab.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    kb.s && Ib.setHost(Hb), (0, Wb.o)((() => {
      Ib.setHost(Hb)
    }))
  },
  8960: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Wb,
      h: () => fb
    });
    var kb = sb(1544);

    function Wb(bb) {
      var cb;
      return {
        ...Tb.store,
        yaw: Tb.store.yaw + (null !== (cb = kb.b[bb].previewYaw) && void 0 !== cb ? cb : 0)
      }
    }
    const ab = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Tb = {
        player: ab,
        store: {
          ...ab,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ub(bb, cb) {
      bb instanceof Promise ? bb.then(cb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : cb(bb)
    }
    class Ib {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var cb;
        this.view = bb, null === (cb = this.opened) || void 0 === cb || cb.show(bb)
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Hb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, cb;
        return null !== (bb = null === (cb = this.opened) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, cb) {
        var sb;
        null === (sb = this.opened) || void 0 === sb || sb.setCosmetic(bb, cb)
      }
      playEmote(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.playEmote(bb)
      }
      setOrbit(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var cb;
        await this.ready, await (null === (cb = this.opened) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const fb = new class {
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
        return new Ib(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Ib(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Ib(this.current().openMobLineup(bb))
      }
      openCharacter(bb, cb) {
        return new Hb(this.current().openCharacter(bb, cb))
      }
    }
  },
  8956: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c,
      g: () => kb.e,
      h: () => kb.h
    });
    var kb = sb(8960);
    class Wb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class ab {
      constructor() {
        this.mobScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(153)]).then((() => sb(40505))))), this.characterScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(152)]).then((() => sb(40593)))))
      }
      openMob(bb) {
        return this.mobScene.run((cb => cb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((cb => cb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((cb => cb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, cb) {
        return this.characterScene.run((sb => sb.openCharacterPreview(bb, cb)))
      }
    }
    kb.h.setDefaultHost((() => new ab))
  },
  6328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    var kb = sb(37);
    const Wb = "shaderPack";
    async function ab() {
      var bb;
      let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await kb.d.getItem(Wb, cb)) && void 0 !== bb ? bb : null
    }
  },
  8840: (bb, cb, sb) => {
    function kb(bb, cb) {
      return bb && !cb
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  8862: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(1058);

    function Wb() {
      var bb, cb;
      return null !== (bb = null === (cb = screen.orientation) || void 0 === cb ? void 0 : cb.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ab = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, kb.dl)(new Error("Game view size held for 60 s"))
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
        let cb = !1;
        return () => {
          if (cb && this.isHeld()) return null;
          const sb = bb();
          return cb ||= null !== sb, sb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  8487: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      f: () => Ib
    });
    var kb = sb(19),
      Wb = sb(1312),
      ab = sb(117);
    const Tb = {
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

    function Ub() {
      return (0, ab.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Ib = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, cb) {
        var sb;
        if (!this.deps.enabled()) return;
        const kb = Tb[bb],
          Wb = null !== cb && void 0 !== cb ? cb : kb.pattern;
        if (null === Wb) return void console.warn("No vibration pattern for", bb);
        const ab = this.deps.now();
        ab - this.lastAnyAt < 40 && kb.priority < this.playingPriority || ab - (null !== (sb = this.lastAt.get(bb)) && void 0 !== sb ? sb : -1 / 0) < kb.minGapMs || ab < this.playingUntil && kb.priority < this.playingPriority || (this.lastAt.set(bb, ab), this.lastAnyAt = ab, this.playingUntil = ab + Wb.reduce(((bb, cb) => bb + cb), 0), this.playingPriority = kb.priority, this.deps.vibrate(Wb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Ub() && kb.d.get("isTouchScreen") && kb.d.get("clientEscMenuOptions").vibration && !(0, Wb.h)()
    })
  },
  8836: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nb,
      e: () => Xb
    });
    var kb = sb(19),
      Wb = sb(1670),
      ab = sb(37),
      Tb = sb(1332),
      Ub = sb(3447),
      Ib = sb(1454),
      Hb = sb(1371);
    const fb = 2592e5,
      Mb = "notificationOptInLastPromptedAt";
    async function Xb() {
      var bb;
      const cb = await nb();
      if (null === cb) return;
      const sb = null !== (bb = ab.h.getItem(Mb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - sb < fb) return;
      if ((0, Hb.g)()) return;
      const kb = await Tb.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Wb.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== kb && (ab.h.setItem(Mb, Date.now()), (0, Ib.reportAnalyticsClick)({
        id: !0 === kb ? "push.allow" : "push.deny",
        value: Wb.b.supports("notifications") ? "app" : "browser"
      }), !0 === kb && cb().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function nb() {
      return await Wb.b.ready, Wb.b.supports("notifications") ? kb.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Wb.b.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: cb
          } = bb;
          kb.d.set({
            mobilePushNotificationsCanAsk: cb
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Ub.b.canAsk() ? () => Ub.b.requestPermission() : null
    }
  },
  8847: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub,
      f: () => Ib
    });
    var kb = sb(19);
    const Wb = 24,
      ab = "farNametags",
      Tb = 1e5;

    function Ub() {
      var bb;
      return null === (bb = kb.d.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Ib() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(ab),
          cb = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(cb) && cb >= 0 ? Math.min(cb, Tb) : null
      }()) && void 0 !== bb ? bb : Ub() ? 0 : Wb
    }
  },
  8947: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => Tb
    });
    const kb = [{
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

    function Wb(bb) {
      let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const cb = bb < 0 ? "-" : "",
            sb = Math.abs(bb);
          return sb >= 10 ? `${cb}${sb.toFixed(1).replace(/\.0$/,"")}` : `${cb}${sb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cb = BigInt(Math.floor(bb))
      } else cb = bb;
      const Wb = cb < 0n ? -cb : cb,
        ab = cb < 0n ? "-" : "",
        Tb = Wb.toString();
      if (Tb.length <= sb) return `${ab}${Tb}`;
      const Ub = 3 * Math.floor((Tb.length - 1) / 3);
      if (Ub < 3) return `${ab}${Tb}`;
      if (Ub > 3 * kb.length) {
        const bb = Tb[0],
          cb = Tb.slice(1, 3).replace(/0+$/, "");
        return `${ab}${cb?`${bb}.${cb}`:bb}e${Tb.length-1}`
      }
      const {
        threshold: Ib,
        suffix: Hb
      } = kb[kb.length - Ub / 3], fb = Wb / Ib, Mb = Number(1000n * (Wb % Ib) / Ib), Xb = Number(fb) + Mb / 1e3;
      let nb;
      return nb = Xb >= 100 ? Math.floor(Xb).toString() : Xb >= 10 ? Xb.toFixed(1).replace(/\.0$/, "") : Xb.toFixed(2).replace(/\.?0+$/, ""), `${ab}${nb}${Hb}`
    }
    const ab = kb.map((bb => {
      let {
        threshold: cb,
        suffix: sb
      } = bb;
      return {
        threshold: Number(cb),
        suffix: sb
      }
    })).filter((bb => {
      let {
        threshold: cb
      } = bb;
      return Number.isFinite(cb)
    }));

    function Tb(bb) {
      const cb = Math.abs(bb),
        sb = bb < 0 ? "-" : "";
      for (const {
          threshold: kb,
          suffix: Wb
        }
        of ab)
        if (cb >= kb) {
          const bb = cb / kb;
          if (bb >= 1e3) return `${sb}${cb.toExponential(2).replace("e+","e")}`;
          let ab;
          return ab = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${sb}${ab}${Wb}`
        } return `${sb}${cb}`
    }
  },
  8930: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      g: () => Xb,
      j: () => Mb,
      n: () => Tb,
      q: () => Hb,
      u: () => Ib
    });
    var kb = sb(344);
    const Wb = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      ab = {
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

    function Tb(bb) {
      var cb;
      return null !== (cb = ab[bb]) && void 0 !== cb ? cb : {
        translationKey: ""
      }
    }
    const Ub = {
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

    function Ib(bb) {
      return Wb.includes(bb)
    }

    function Hb(bb) {
      var cb;
      return !0 === (null === bb || void 0 === bb || null === (cb = bb.customAttributes) || void 0 === cb ? void 0 : cb.cannotEnchant)
    }

    function fb(bb, cb) {
      const {
        max: sb
      } = Ub[bb].at(-1);
      return cb <= sb
    }

    function Mb(bb) {
      const cb = Math.sin(bb / 80),
        sb = bb => {
          if (bb <= 0) return 0;
          if (bb > 1) return 1;
          let cb = 0;
          const sb = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let kb = 0; kb < sb.length; kb++) {
            cb += (kb % 2 === 0 ? 1 : -1) * sb[kb] * Math.pow(bb, 2 + kb) / (2 + kb)
          }
          return 72 * cb
        },
        kb = .3 - .78 * cb,
        Wb = .5 - .78 * cb,
        ab = .6 - .7 * cb,
        Tb = .8 - .6 * cb;
      let Ub = sb(kb),
        Ib = sb(Wb) - Ub,
        Hb = sb(ab) - Ib - Ub,
        fb = sb(Tb) - Hb - Ib - Ub;
      kb < .041 && (Ib /= 1 - Ub, Hb /= 1 - Ub, fb /= 1 - Ub, Ub = 0), Wb < .041 && (Ub /= 1 - Ib, Hb /= 1 - Ib, fb /= 1 - Ib, Ib = 0), ab < .041 && (Ub /= 1 - Hb, Ib /= 1 - Hb, fb /= 1 - Hb, Hb = 0), Tb < .041 && (Ub /= 1 - fb, Ib /= 1 - fb, Hb /= 1 - fb, fb = 0);
      return {
        commonProb: Ub,
        uncommonProb: Ib,
        rareProb: Hb,
        epicProb: fb,
        legendaryProb: 1 - (fb + Hb + Ib + Ub)
      }
    }

    function Xb(bb, cb) {
      const {
        min: sb,
        max: Wb
      } = Ub[bb][cb], ab = kb.d.sampleUniformIntDistribution(sb, Wb, "includeMax");
      return {
        ...Mb(ab),
        level: ab
      }
    }
  },
  8389: (bb, cb, sb) => {
    function kb(bb, cb) {
      return !bb.hidden && (cb || !bb.isRewardedAd)
    }

    function Wb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function ab(bb, cb) {
      var sb;
      if ("dropdown" === (null === (sb = bb.userInput) || void 0 === sb ? void 0 : sb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const sb of bb.userInput.dropdownOptions)
          if (Wb(sb) === cb) return "object" === typeof sb ? sb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", cb)
      }
      return bb.cost
    }

    function Tb(bb, cb, sb) {
      var kb;
      const Wb = null !== (kb = sb.excludedPlayers) && void 0 !== kb ? kb : [cb];
      return bb.filter((bb => !Wb.includes(bb)))
    }
    sb.d(cb, {
      e: () => ab,
      g: () => Wb,
      k: () => Tb,
      o: () => kb
    })
  },
  8895: () => {},
  8873: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8875: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8878: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8886: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);