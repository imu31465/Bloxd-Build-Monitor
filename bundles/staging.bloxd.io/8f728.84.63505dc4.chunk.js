export const id = 84;
export const ids = [84, 175];
export const modules = {
  8113: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      EverythingMenu: () => MI
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(1051),
      sc = nc(926),
      Mc = nc(1686),
      Pc = nc(974),
      qB = nc(957);

    function Oc(cB) {
      let {
        items: Bc,
        onClick: nc,
        selectedItemId: Vc,
        className: Ic,
        padStartsOnTab: Oc = !0
      } = cB;
      const {
        t: Tc
      } = (0, uc.x)(), fc = (0, Pc.j)(), mB = [];
      for (const rB of Bc) {
        var ec;
        const cB = mB[mB.length - 1];
        var tB;
        if (cB && cB.title === (null !== (ec = rB.section) && void 0 !== ec ? ec : null)) cB.items.push(rB);
        else mB.push({
          title: null !== (tB = rB.section) && void 0 !== tB ? tB : null,
          items: [rB]
        })
      }
      return (0, qB.jsx)("div", {
        className: rB()("MenuSideBarBody", Ic),
        "data-pad-tabs": "2",
        children: mB.map(((cB, Bc) => {
          var Ic;
          return (0, qB.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [cB.title && (0, qB.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Tc(cB.title)
            }), cB.items.map((cB => {
              var Bc;
              const Ic = !!cB.iconElement || !!cB.faIcon;
              return (0, qB.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Vc === cB.id ? "true" : void 0,
                "data-pad-default-focus": Oc && Vc === cB.id || void 0,
                className: rB()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Vc === cB.id
                }),
                onClick: () => {
                  nc(cB.id)
                },
                children: [Ic && (0, qB.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Bc = cB.iconElement) && void 0 !== Bc ? Bc : (0, qB.jsx)(sc.e, {
                    name: cB.faIcon
                  })
                }), (!fc || !Ic) && (0, qB.jsx)("div", {
                  children: Tc(cB.title)
                }), cB.redDot && (0, qB.jsx)(Mc.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, cB.id)
            }))]
          }, null !== (Ic = cB.title) && void 0 !== Ic ? Ic : Bc)
        }))
      })
    }
    var Tc = nc(2258),
      fc = nc(985),
      mB = nc(1946),
      ec = nc(981),
      tB = nc(1255),
      Sc = nc(107),
      yB = nc(1566),
      zB = nc(1854),
      pc = nc(1859),
      hc = nc(1485),
      aB = nc(1188),
      lc = nc(4035),
      Yc = nc(27),
      Lc = nc(8120);

    function gB(cB) {
      let {
        setApplySettingsCallback: Bc
      } = cB;
      const {
        clientEscMenuOptions: nc
      } = (0, Yc.j)(["clientEscMenuOptions"]), [Ic, rB] = (0, Vc.useState)(!1), [uc, sc] = (0, Vc.useState)(!1), [Mc, Pc] = (0, Vc.useState)(6400), [Oc, Tc] = (0, Vc.useState)(3600), [fc, mB] = (0, Vc.useState)(!1), [ec, Sc] = (0, Vc.useState)(!1);

      function yB(cB) {
        const Bc = "screenshot" === cB ? sc : rB;
        Bc(!0);
        const nc = fc ? "normals" : ec ? "depth" : null;
        Lc.devTools.downloadScene(cB, {
          width: Mc,
          height: Oc,
          colouring: nc
        }).catch((cB => {
          console.error("Couldn't download the scene", cB)
        })).finally((() => {
          Bc(!1)
        }))
      }
      return (0, qB.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, qB.jsx)(lc.c, {
          label: "Disable Ambient Occlusion",
          checked: nc.disableAmbientOcclusion,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              disableAmbientOcclusion: cB
            }), Bc((() => lc.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Lc.devTools.supports("ambientLight") && (0, qB.jsx)(lc.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: nc.ambientLightIntensity,
          onChange: cB => {
            Lc.devTools.setAmbientLightIntensity(cB).then((() => {
              Yc.d.setClientEscMenuOptions({
                ambientLightIntensity: cB
              })
            })).catch((cB => {
              console.error("Couldn't set the ambient light", cB)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Lc.devTools.supports("weaponRaycasts") && (0, qB.jsx)(lc.c, {
          label: "Show Weapon Raycasts",
          checked: nc.showWeaponRaycasts,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              showWeaponRaycasts: cB
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Lc.devTools.supports("sceneDownload") && (0, qB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, qB.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, qB.jsx)(lc.c, {
              label: "Apply normal-based coloring",
              checked: fc,
              onClick: cB => {
                mB(cB), cB && Sc(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, qB.jsx)(lc.c, {
              label: "Apply depth-based coloring",
              checked: ec,
              onClick: cB => {
                Sc(cB), cB && mB(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, qB.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, qB.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, qB.jsx)(hc.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (cB, Bc) => {
                  const nc = parseInt(cB) || 6400;
                  Pc(nc)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Mc.toString()
              }), (0, qB.jsx)("span", {
                children: "X"
              }), (0, qB.jsx)(hc.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (cB, Bc) => {
                  const nc = parseInt(cB) || 3600;
                  Tc(nc)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Oc.toString()
              })]
            }), (0, qB.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, qB.jsxs)(tB.d, {
                onClick: () => {
                  yB("screenshot")
                },
                disabled: uc,
                children: [uc && (0, qB.jsx)(aB.e, {}), "Download Screenshot"]
              }), (0, qB.jsxs)(tB.d, {
                onClick: () => {
                  yB("glb")
                },
                disabled: Ic,
                children: [Ic && (0, qB.jsx)(aB.e, {}), "Download GLB"]
              })]
            })]
          }), (0, qB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Uc = nc(1114),
      bB = nc(1194),
      Zc = nc(145),
      Qc = nc(988),
      Cc = nc(1062),
      vB = nc(1164),
      Dc = nc(2265),
      Nc = nc(1330),
      Ec = nc(1128),
      oc = nc(1102),
      Wc = nc(2294),
      wc = nc(1671),
      kB = nc(1314),
      Xc = nc(302),
      Hc = nc(1862),
      Fc = nc(1495),
      Jc = nc(1205),
      jB = nc(1077),
      Rc = nc(3937),
      iB = nc(1283),
      Kc = nc(2826),
      xB = nc(2112),
      dc = nc(1836);

    function Ac(cB) {
      let {
        showing: Bc
      } = cB;
      const {
        t: nc
      } = (0, uc.x)(), {
        data: Vc,
        failed: Ic
      } = (0, xB.f)(Kc.e, Bc);
      return 0 === (null === Vc || void 0 === Vc ? void 0 : Vc.length) || null === Vc && !Ic ? null : (0, qB.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, qB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: nc("paymentHistory:title")
        }), null === Vc && Ic && (0, qB.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: nc("paymentHistory:loadFailed")
        }), null !== Vc && (0, qB.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Vc.map((cB => (0, qB.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, qB.jsx)(dc.e, {
              entry: cB
            }), (0, qB.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, qB.jsx)("div", {
                children: (0, dc.l)(nc, cB)
              }), (0, qB.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(cB.at).toLocaleDateString(), "number" === typeof cB.orderId && ` \xb7 ${nc("paymentHistory:order",{orderId:cB.orderId})}`]
              })]
            })]
          }, (0, Kc.d)(cB))))
        })]
      })
    }
    var Gc = nc(2763),
      cn = nc(2785),
      BB = nc(2777);

    function nB(cB) {
      let {
        showing: Bc
      } = cB;
      const {
        t: nc
      } = (0, uc.x)(), {
        data: Vc,
        failed: Ic
      } = (0, xB.f)(Gc.e, Bc), rB = null === Vc ? null : (0, Gc.g)(Vc);
      return (0, qB.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, qB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: nc("settingsMenu:blockedAndIgnoredPlayers")
        }), null === rB && !Ic && (0, qB.jsx)(aB.e, {}), null === rB && Ic && (0, qB.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [nc("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, qB.jsx)(tB.d, {
            className: "SmallTextLight",
            onClick: () => {
              Gc.e.refresh()
            },
            children: nc("general:tryAgain")
          })]
        }), 0 === (null === rB || void 0 === rB ? void 0 : rB.length) && (0, qB.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: nc("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== rB && rB.length > 0 && (0, qB.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: rB.map((cB => {
            let {
              name: Bc,
              exclusion: Vc
            } = cB;
            const Ic = BB.g[Vc];
            return (0, qB.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, qB.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Bc
              }), (0, qB.jsx)(tB.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, cn.h)(Ic, Bc)
                },
                children: nc(BB.j[Ic].text)
              })]
            }, Bc)
          }))
        })]
      })
    }
    const VB = (0, Vc.memo)((function(cB) {
      var Bc;
      let {
        showing: nc,
        inGame: Ic
      } = cB;
      const {
        t: Mc,
        selectedLanguage: Pc
      } = (0, uc.x)(), {
        reactNativeFeatureFlags: Oc,
        hideSocialLocationFrom: mB
      } = (0, Yc.j)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]), ec = (0, Tc.e)(), {
        userContext: yB,
        isUserContextUpdating: zB
      } = (0, fc.c)(), [pc, Lc] = (0, Vc.useState)(null !== (Bc = yB.getPlayerName()) && void 0 !== Bc ? Bc : ""), [gB, Uc] = (0, Vc.useState)(null), {
        purchasing: bB,
        outcome: vB,
        purchase: Kc
      } = (0, Dc.d)("/super-rank-welcome"), [xB, dc] = (0, Vc.useState)(!1), [Gc, cn] = (0, Vc.useState)(!1), BB = (0, Vc.useRef)(null), VB = (0, Vc.useRef)(null), rn = (0, wc.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), uB = null === rn, sB = null !== rn && void 0 !== rn ? rn : [], [MB, PB] = (0, Vc.useState)([]), [qn, OB] = (0, Vc.useState)(!1), TB = yB.playerHasRank("youtuber"), fB = (0, Vc.useCallback)((() => kB.e.getPlayerProfile(yB, {
        lowerCaseName: yB.getPlayerName().toLowerCase()
      }).then((cB => {
        PB(cB.socialLinks)
      })).catch((cB => {
        console.error("Failed to refresh social links", cB)
      }))), [yB]);

      function mn(cB) {
        cB !== pc && ((0, Ec.l)(cB) ? (cB = (0, Ec.m)(cB), Uc("Only letters, numbers, and _")) : Uc(null), BB.current && (BB.current.value = cB), Lc(cB))
      }
      return (0, Vc.useEffect)((() => (!0 === nc ? (clearInterval(VB.current), VB.current = setInterval(ec, 1e3)) : clearInterval(VB.current), () => {
        clearInterval(VB.current)
      })), [nc, ec]), (0, Vc.useEffect)((() => {
        var cB;
        Lc(null !== (cB = yB.getPlayerName()) && void 0 !== cB ? cB : "")
      }), [yB]), (0, Vc.useEffect)((() => {
        if (!nc || !TB || zB) return;
        let cB = !1;
        return OB(!0), PB([]), kB.e.getPlayerProfile(yB, {
          lowerCaseName: yB.getPlayerName().toLowerCase()
        }).then((Bc => {
          cB || PB(Bc.socialLinks)
        })).catch((cB => {
          console.error("Failed to load social links", cB)
        })).finally((() => {
          cB || OB(!1)
        })), () => {
          cB = !0
        }
      }), [nc, TB, zB, yB]), (0, qB.jsxs)("div", {
        className: rB()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Ic
        }),
        children: [Ic && (0, qB.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Mc("settingsMenu:accountSettingsInGameWarning")
        }), (0, qB.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, qB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Mc("homePage:discordNamePopupTitle"), (0, qB.jsxs)(Nc.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, oc.h)({
                name: yB.getPlayerName()
              }),
              onClick: () => {
                Yc.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, qB.jsx)(sc.e, {
                name: "arrow-up-right-from-square"
              }), " ", Mc("profileCard:viewProfile")]
            })]
          }), (0, qB.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, qB.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Sc.featureFlags.canChangeName && (0, qB.jsx)(hc.e, {
                className: "EnterName",
                placeholderText: Mc("homePage:enterName"),
                maxLength: Ec.h,
                defaultValue: pc,
                onValueChange: cB => {
                  mn(cB)
                },
                forcedText: xB || !Sc.featureFlags.canChangeName ? pc : null,
                blurOnEnter: !0,
                domRef: BB
              }), (0, qB.jsx)(tB.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  mn((0, Ec.g)())
                },
                children: (0, qB.jsx)(sc.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Sc.featureFlags.canChangeName && (0, qB.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Ec.d)(pc, !Sc.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, qB.jsx)(tB.d, {
              className: "ChooseNameButton",
              disabled: xB || pc === yB.getPlayerName(),
              onClick: () => {
                pc.length < Ec.j ? Uc(Mc("homePage:changeNameMinLengthError", {
                  length: Ec.j
                })) : pc.length > Ec.h ? Uc(Mc("homePage:changeNameMaxLengthError", {
                  length: Ec.h
                })) : (dc(!0), Uc(null), async function(cB, Bc, nc, Vc) {
                  const Ic = await (0, Qc.postJsonWithMetricsCookiesAndJsonResponse)(`${Cc.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: cB
                  }, {
                    retries: 3
                  }, Bc.getMetricsCookies()).catch((cB => (console.error("Bad response from the server when trying to update name:", cB), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Ic.err ? (console.error("Error when trying to get with new name from DB", Ic.err), Vc(Ic.err)) : !0 === Ic.nameExists ? Vc("Name is already taken") : nc(cB)
                }(pc, yB, (cB => {
                  yB.setPlayerName(cB), dc(!1)
                }), (cB => {
                  Uc(cB), dc(!1)
                })))
              },
              children: Mc("general:choose")
            })]
          }), gB && (0, qB.jsx)("div", {
            className: "ChooseAccNameError",
            children: gB
          })]
        }), (0, qB.jsx)(lc.c, {
          label: (() => {
            if ((0, jB.j)(mB)) {
              const cB = (0, uc.h)(Pc.code, "general:timeLeft"),
                Bc = (0, Xc.X)(cB, Date.now(), mB + jB.i);
              return `${Mc("settingsMenu:hideSocialLocation")} (${Mc("general:timeLeft",{time:Bc})})`
            }
            return Mc("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const cB = !(0, jB.j)(mB);
            (0, iB.h)({
              id: "social.hide_location",
              value: cB ? "on" : "off"
            }), cn(!0), kB.e.setHideSocialLocation(yB, cB).then((() => {
              Yc.d.set({
                hideSocialLocationFrom: cB ? Date.now() : null
              })
            })).finally((() => {
              cn(!1)
            }))
          },
          checked: (0, jB.j)(mB),
          disabled: Gc
        }), TB && (0, qB.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, qB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Mc("settingsMenu:socialLinks")
          }), qn && (0, qB.jsx)(aB.e, {}), !qn && (0, qB.jsx)(Rc.b, {
            socialLinks: MB,
            editable: !0,
            userContext: yB,
            onLinksUpdated: fB
          })]
        }), (0, qB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, qB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Mc("auth:login")
          }), uB && (0, qB.jsx)(aB.e, {}), !uB && 0 === sB.length && (0, qB.jsx)("div", {
            className: "NoLoginOptions",
            children: Mc("auth:noLoginOptions")
          }), !uB && sB.length > 0 && "crazygames" !== Zc.r && (0, qB.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: sB
          }), !uB && sB.length > 0 && "crazygames" === Zc.r && (0, qB.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [sB[0], sB.length > 1 && (0, qB.jsxs)(qB.Fragment, {
              children: [(0, qB.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, qB.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Mc("auth:legacyLoginOptions")
                }), (0, qB.jsx)(Jc.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Mc("auth:legacyLoginOptionsInfo")
                })]
              }), (0, qB.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: sB.slice(1)
              })]
            })]
          }), Sc.featureFlags.useLogin && Oc.useLogin && (null !== yB.loggedInInfo || yB.isLoggedIn()) && (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, qB.jsx)(tB.L, {
              onClick: () => {
                (0, Qc.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: Mc("auth:signOut")
            })]
          })]
        }), !yB.playerHasRank("super") && (0, Fc.siteSupportsPurchases)() && (0, qB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, qB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, qB.jsx)(sc.e, {
              name: "bolt"
            }), Mc("homePage:superRank")]
          }), (0, qB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, qB.jsxs)(tB.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Hc.i)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, qB.jsx)(sc.e, {
                name: "bolt"
              }), Mc("homePage:getSuperRank")]
            }), (0, qB.jsxs)(tB.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Hc.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, qB.jsx)(sc.e, {
                name: "bolt"
              }), Mc("homePage:giftSuperRank")]
            })]
          })]
        }), yB.playerHasRank("super") && (0, qB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, qB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, qB.jsx)(sc.e, {
              name: "bolt"
            }), Mc("homePage:superRank"), (0, qB.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Mc("general:timeLeft", {
                time: (0, Xc.Pb)((0, uc.h)(Pc.code, "general:timeLeft"), yB.superRankInfo)
              }), ")"]
            })]
          }), (0, Fc.siteSupportsPurchases)() && (0, qB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, qB.jsxs)(tB.n, {
              className: "AccountSettingsSuperRankProlong",
              loading: bB,
              onClick: () => {
                Kc(Wc.l.id, null)
              },
              children: [(0, qB.jsx)(sc.e, {
                name: "bolt"
              }), Mc("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Wc.l.product.days,
                price: Wc.l.price
              })]
            }), (0, qB.jsxs)(tB.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Hc.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, qB.jsx)(sc.e, {
                name: "bolt"
              }), Mc("homePage:giftSuperRank")]
            })]
          }), vB && (0, qB.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Mc(vB.translationKey)
          })]
        }), (0, qB.jsx)(Ac, {
          showing: nc
        }), Sc.featureFlags.useSocialFeatures && (0, qB.jsx)(nB, {
          showing: nc
        }), (0, qB.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, qB.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, qB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Mc("auth:deleteAccountButtonTitle")
            }), (0, Zc.c)() && (0, qB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Mc("auth:discordActivityKickWarning")
            }), (0, qB.jsx)(IB, {})]
          }), (0, qB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Mc("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function IB() {
      const {
        userContext: cB,
        isUserContextUpdating: Bc
      } = (0, fc.c)(), {
        t: nc
      } = (0, uc.x)(), [Ic, rB] = (0, Vc.useState)(!1), [sc, Mc] = (0, Vc.useState)(null), Pc = Bc || Ic;
      return (0, qB.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, qB.jsxs)(tB.L, {
          onClick: async function() {
            if (!Ic) {
              rB(!0);
              try {
                const Bc = await async function() {
                  if (!await bB.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, Ec.d)(cB.getPlayerName(), !Sc.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, Zc.c)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Uc.d.ok();
                  const Bc = await (0, Qc.postJsonWithMetricsCookiesAndJsonResponse)(`${Cc.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {}, {
                    retries: 3
                  }, cB.getMetricsCookies());
                  if (Bc.error) return Uc.d.error(Bc.error);
                  (0, Zc.c)() && (await vB.m.discordActivity()).exit("User deleted their account");
                  return (0, Qc.forgetStoredGuestAccount)(cB.whamm), (0, Qc.forceGlobalSignOut)(!0), Uc.d.ok()
                }(), nc = Bc.isError() ? Bc.asError().message : null;
                Mc(nc)
              } catch (Bc) {
                console.error("Failed to delete account:", Bc), Mc(nc("auth:genericDeleteAccountError"))
              }
              rB(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Pc,
          children: [Pc && (0, qB.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, qB.jsx)(aB.e, {})
          }), nc("auth:deleteAccount")]
        }), sc && (0, qB.jsx)("div", {
          className: "DeleteAccountError",
          children: sc
        })]
      })
    }
    var rn = nc(8129),
      uB = nc(2311),
      sB = nc(1117),
      MB = nc(1246);
    const PB = (0, Vc.memo)((function(cB) {
        let {
          inGame: Bc
        } = cB;
        const {
          t: nc,
          selectedLanguage: Vc
        } = (0, uc.x)(), {
          clientEscMenuOptions: Ic,
          showDebugOverlay: rB
        } = (0, Yc.j)(["clientEscMenuOptions", "showDebugOverlay"]), sc = (0, mB.j)("hideCoordinates");
        let Mc = "settingsMenu:showCoordinates",
          Pc = "settingsMenu:showChunkCoordinates";

        function Oc(cB) {
          const Bc = new Intl.DisplayNames([cB], {
            type: "language"
          }).of(cB);
          return Bc.charAt(0).toUpperCase() + Bc.slice(1)
        }
        return sc && (Mc = "settingsMenu:showCoordinatesHidden", Pc = "settingsMenu:showChunkCoordinatesHidden"), (0, qB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Bc && Sc.featureFlags.canUseInviteLinks && (0, qB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, qB.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: nc("settingsMenu:inviteLink")
            }), (0, qB.jsx)(rn.c, {})]
          }), (0, qB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, qB.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: nc("settingsMenu:language")
            }), (0, qB.jsx)(uB.c, {
              options: Object.entries(uc.e).map((cB => {
                let [Bc, nc] = cB;
                return {
                  label: (0, qB.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, qB.jsx)("img", {
                      src: nc.flagImg,
                      alt: "flag"
                    }), (0, qB.jsxs)("span", {
                      children: [Oc(Bc), " ", (0, qB.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Bc, ")"]
                      })]
                    })]
                  }),
                  value: Bc
                }
              })),
              value: Vc.code,
              onChange: cB => {
                sB.e.get().setCurrentLanguage(cB.value)
              }
            })]
          }), !(0, Sc.isMobile)() && (0, MB.e)() && Sc.featureFlags.useForceRotateForceFullscreenOverlay && (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:disableFullscreenMode"),
            checked: Ic.disableFullscreen,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                disableFullscreen: cB
              })
            }
          }), (0, qB.jsx)(lc.c, {
            label: nc(Mc),
            checked: Ic.showCoordinates,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showCoordinates: cB
              })
            },
            disabled: sc
          }), (0, qB.jsx)(lc.c, {
            label: nc(Pc),
            checked: Ic.showChunkCoordinates,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showChunkCoordinates: cB
              })
            },
            disabled: sc
          }), (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:showFps"),
            checked: Ic.showFPS,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showFPS: cB
              })
            }
          }), (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:disableBunnyHopping"),
            checked: Ic.disableBunnyHopping,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                disableBunnyHopping: cB
              })
            }
          }), (0, vB.z)() && (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:showChat"),
            checked: Ic.showChat,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showChat: cB
              })
            }
          }), (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:showDebugOverlay"),
            checked: rB,
            onClick: cB => {
              Yc.d.set({
                showDebugOverlay: cB
              })
            }
          }), Sc.featureFlags.useSocialFeatures && (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:showFriendOnlineToasts"),
            checked: Ic.showFriendOnlineToasts,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showFriendOnlineToasts: cB
              })
            }
          }), (0, qB.jsx)(lc.c, {
            label: nc("settingsMenu:showNewItemIndicator"),
            checked: Ic.showNewItemIndicator,
            onClick: cB => {
              Yc.d.setClientEscMenuOptions({
                showNewItemIndicator: cB
              })
            }
          })]
        })
      })),
      qn = (0, Vc.memo)((function() {
        const {
          t: cB
        } = (0, uc.x)(), {
          soundVolume: Bc,
          musicVolume: nc
        } = (0, Yc.j)(["soundVolume", "musicVolume"]);
        return (0, qB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, qB.jsx)(lc.g, {
            name: cB("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: nc,
            onChange: cB => {
              Yc.d.set({
                musicVolume: Math.round(100 * cB) / 100
              })
            },
            format: cB => cB.toFixed(2)
          }), (0, qB.jsx)(lc.g, {
            name: cB("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Bc,
            onChange: cB => {
              Yc.d.set({
                soundVolume: Math.round(100 * cB) / 100
              })
            },
            format: cB => cB.toFixed(2)
          })]
        })
      }));
    var OB = nc(287),
      TB = nc(1252),
      fB = nc(2836),
      mn = nc(8135),
      eB = nc(2659);
    const tn = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function SB() {
      const {
        t: cB
      } = (0, uc.x)(), Bc = (0, eB.e)(), {
        mobilePushNotificationsCanAsk: nc
      } = (0, Yc.j)(["mobilePushNotificationsCanAsk"]), [Ic, rB] = (0, Vc.useState)(null), [sc, Mc] = (0, Vc.useState)(!1), [Pc, Oc] = (0, Vc.useState)(null), [Tc, fc] = (0, Vc.useState)(!1), mB = (0, Vc.useCallback)((() => {
        (0, fB.d)().then((cB => {
          Bc.current && (rB(cB), Mc(!1))
        })).catch((cB => {
          console.error("Failed to load push notification targets:", cB), Bc.current && Mc(!0)
        }))
      }), [Bc]), ec = (0, Vc.useCallback)((() => {
        (0, mn.c)().then((cB => {
          Bc.current && Oc((() => cB))
        }))
      }), [Bc]);
      (0, Vc.useEffect)((() => {
        mB()
      }), [mB]), (0, Vc.useEffect)((() => {
        ec()
      }), [ec, nc]), (0, TB.f)(fB.i, mB);
      const Sc = null === Ic ? [] : Object.keys(tn).filter((cB => Ic[cB] > 0));
      return (0, qB.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, qB.jsx)("div", {
          className: "SliderText",
          children: cB("notificationSettings:pushNotifications")
        }), null === Ic && sc && (0, qB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: cB("notificationSettings:pushTargetsLoadFailed")
        }), null !== Ic && 0 === Sc.length && (0, qB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: cB("notificationSettings:pushTargetsNone")
        }), Sc.length > 0 && (0, qB.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Sc.map((Bc => {
            var nc;
            return (0, qB.jsx)("li", {
              children: cB(tn[Bc], {
                count: null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic[Bc]) && void 0 !== nc ? nc : 0
              })
            }, Bc)
          }))
        }), null !== Pc && (0, qB.jsx)(tB.d, {
          className: "PushNotificationSettingsButton",
          loading: Tc,
          onClick: () => {
            fc(!0), Pc().catch((cB => {
              console.error("Failed to turn on push notifications:", cB)
            })).finally((() => {
              Bc.current && (fc(!1), ec())
            }))
          },
          children: cB("notificationSettings:pushTurnOn")
        })]
      })
    }
    const yn = {
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
      zn = (0, Vc.memo)((function() {
        const {
          t: cB
        } = (0, uc.x)(), {
          clientEscMenuOptions: Bc
        } = (0, Yc.j)(["clientEscMenuOptions"]);
        return (0, qB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, qB.jsx)(lc.f, {
            label: cB("notificationSettings:friendRequests"),
            options: OB.c.map((Bc => ({
              value: Bc,
              label: cB(yn[Bc].label)
            }))),
            value: Bc.friendRequestNotifications,
            onChange: cB => {
              Yc.d.setClientEscMenuOptions({
                friendRequestNotifications: cB
              })
            },
            circleInfoText: (0, qB.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: OB.c.map((Bc => (0, qB.jsxs)("div", {
                children: [(0, qB.jsx)("b", {
                  children: cB(yn[Bc].label)
                }), ": ", cB(yn[Bc].info)]
              }, Bc)))
            })
          }), (0, qB.jsx)(SB, {})]
        })
      }));
    var pB = nc(3630),
      hB = nc(174),
      an = nc(235),
      lB = nc(5626),
      YB = nc(2585),
      LB = nc(8143),
      gn = nc(569),
      UB = nc(35);
    var bn = nc(263),
      ZB = nc(51);
    const QB = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function CB(cB) {
      return QB.has(cB) ? yB.gameBridge.lookup("zC", null) : null
    }

    function vn(cB) {
      if (!(0, gn.E)(Yc.d.get("clientEscMenuOptions")[cB])) return Yc.d.get("clientEscMenuOptions")[cB];
      const Bc = CB(cB);
      return null !== Bc ? Bc[QB.get(cB)] : ZB.h.getItem(cB)
    }

    function DB(cB, Bc) {
      if ("useTouchControls" === cB) return void Yc.d.set({
        isTouchScreen: Bc
      });
      cB in Yc.d.get("clientEscMenuOptions") && Yc.d.setClientEscMenuOptions({
        [cB]: Bc
      });
      const nc = CB(cB);
      null !== nc && yB.gameBridge.send("setChunkAddDistance", {
        ...nc,
        [QB.get(cB)]: Bc
      }), ZB.h.setItem(cB, Bc)
    }
    var NB = nc(8147),
      EB = nc(8155),
      oB = nc(8157),
      WB = nc(3622);

    function wB(cB) {
      var Bc, Ic, sc, Mc;
      let {
        minChunkAddDist: Pc,
        getValue: Oc,
        onChange: Tc,
        setApplySettingsCallback: fc
      } = cB;
      const {
        t: ec
      } = (0, uc.x)(), {
        clientEscMenuOptions: tB
      } = (0, Yc.j)(["clientEscMenuOptions", "showDistantNametags"]), yB = (0, Vc.useRef)(Oc("showFog")), zB = (0, Vc.useRef)(tB.antiAliasing), pc = (0, Vc.useRef)(tB.useWebGpu), [hc, aB] = (0, Vc.useState)(null), [gB, Uc] = (0, Vc.useState)((() => (0, YB.d)(Sc.featureFlags.settings.canUseShaderPacks))), [bB] = (0, Vc.useState)((() => Yc.d.isWebGpuDefaultOff())), [Zc] = (0, Vc.useState)(an.h);
      (0, Vc.useEffect)((() => {
        let cB = !1;
        return (0, Sc.hasUsableWebGpuAdapter)().then((Bc => {
          cB || aB(Bc)
        })), (0, YB.i)(Sc.featureFlags.settings.canUseShaderPacks) && (0, lB.e)().then((async Bc => {
          const Vc = null !== Bc && await async function(cB) {
            const [{
              isShaderPackActive: Bc
            }, {
              loadPageShaderPackCompiler: Vc
            }] = await Promise.all([nc.e(116).then((() => nc(5624))), Promise.all([nc.e(123), nc.e(120), nc.e(119)]).then((() => nc(5583)))]);
            return Bc(cB, await Vc())
          }(Bc);
          cB || Uc(Vc)
        })), () => {
          cB = !0
        }
      }), []);
      const Qc = function(cB, Bc, nc, Vc, Ic) {
          return (0, LB.e)(nc, Vc) && !0 === Bc ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Bc ? "settingsMenu:newWebGpu" : Ic ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: cB && !1 !== Bc,
            disabled: !0 !== Bc
          }
        }(tB.useWebGpu, hc, gB, bB, Zc),
        Cc = (tB.useWebGpu || (0, LB.e)(gB, bB)) && gB && !0 === hc,
        vB = (0, mB.j)("lightingOverride"),
        Dc = !(0, gn.E)(vB);
      let Nc = "settingsMenu:enableLighting";
      Dc && (Nc = vB ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Ec = cB => {
          var Bc, nc, Vc;
          const Ic = null !== (Bc = cB.showFog) && void 0 !== Bc ? Bc : Oc("showFog"),
            rB = null !== (nc = cB.antiAliasing) && void 0 !== nc ? nc : tB.antiAliasing,
            uc = null !== (Vc = cB.useWebGpu) && void 0 !== Vc ? Vc : tB.useWebGpu,
            sc = !bn.l && Ic !== yB.current || rB !== zB.current || uc !== pc.current;
          fc(sc ? () => lc.i : null)
        },
        oc = (0, mB.j)("fogChunkDistanceOverride"),
        Wc = (0, mB.j)("fogBlockDistanceOverride"),
        wc = !(0, gn.E)(oc) || !(0, gn.E)(Wc),
        kB = wc ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Xc, Hc] = (0, pB.h)(Pc),
        [Fc, Jc] = (0, WB.d)(Pc),
        jB = ec("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Rc = Fc < Xc,
        iB = Math.min(null !== (Bc = Oc("chunkHorizAddDist")) && void 0 !== Bc ? Bc : Pc[0], Fc),
        Kc = !wc && function(cB, Bc) {
          return !0 === cB.showFog && cB.fogChunkDistance > Bc
        }(tB, iB);
      return (0, qB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, qB.jsx)(lc.g, {
          name: ec("settingsMenu:horizontalChunkLoadDistance"),
          min: Pc[0],
          max: Xc,
          selectableMax: Fc,
          cappedNote: jB,
          step: 1,
          initValue: iB,
          onChange: cB => {
            !0 === Oc("showFog") && cB < Oc("fogChunkDistance") && Tc("fogChunkDistance", cB), Tc("chunkHorizAddDist", cB), UB.i.Vu("updatedChunkLoadDist")
          },
          circleInfoText: ec("settingsMenu:chunkLoadDistanceInfo")
        }), (0, qB.jsx)(lc.g, {
          name: ec("settingsMenu:verticalChunkLoadDistance"),
          min: Pc[1],
          max: Hc,
          selectableMax: Jc,
          cappedNote: Rc ? void 0 : jB,
          step: 1,
          initValue: Math.min(null !== (Ic = Oc("chunkVertAddDist")) && void 0 !== Ic ? Ic : Pc[1], Jc),
          onChange: cB => {
            Tc("chunkVertAddDist", cB), UB.i.Vu("updatedChunkLoadDist")
          },
          circleInfoText: ec("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:chunkFadeIn"),
          checked: tB.chunkFadeIn,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              chunkFadeIn: cB
            })
          },
          circleInfoText: ec("settingsMenu:chunkFadeInInfo")
        }), Lc.devTools.supports("chunkBorders") && (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:showChunkBorders"),
          checked: tB.showChunkBorders,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              showChunkBorders: cB
            })
          },
          circleInfoText: ec("settingsMenu:showChunkBordersInfo")
        }), (0, qB.jsx)(lc.c, {
          label: ec(Nc),
          checked: tB.enableLighting,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              enableLighting: cB
            })
          },
          disabled: Dc
        }), (0, qB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, qB.jsx)(lc.c, {
            label: ec(kB),
            checked: tB.showFog,
            onClick: cB => {
              Ec({
                showFog: cB
              }), Yc.d.setClientEscMenuOptions({
                showFog: cB
              })
            },
            disabled: wc,
            className: rB()({
              SettingBoxWarning: Kc
            })
          }), (0, qB.jsx)(lc.g, {
            name: ec("settingsMenu:fogChunkDistance"),
            min: Pc[0],
            max: hB.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (sc = tB.fogChunkDistance) && void 0 !== sc ? sc : Pc[0],
            onChange: cB => {
              Yc.d.setClientEscMenuOptions({
                fogChunkDistance: cB
              }), UB.i.Vu("fogChunkDistanceChanged", cB)
            },
            circleInfoText: ec("settingsMenu:fogChunkDistanceInfo"),
            disabled: wc || !1 === Oc("showFog"),
            className: rB()({
              SettingBoxWarning: Kc
            })
          }), Kc && (0, qB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ec("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !bn.l && (0, qB.jsx)(lc.c, {
          label: ec(Cc ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Cc && tB.disableTexAtlas,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              disableTexAtlas: cB
            })
          },
          circleInfoText: ec("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Cc
        }), (0, qB.jsx)(lc.g, {
          name: ec("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: tB.cameraFOV,
          onChange: cB => {
            Yc.d.setClientEscMenuOptions({
              cameraFOV: cB
            })
          }
        }), (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:disableViewBobbing"),
          checked: tB.disableBobbing,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              disableBobbing: cB
            })
          },
          circleInfoText: ec("settingsMenu:disableViewBobbingInfo")
        }), (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:antiAliasing"),
          checked: tB.antiAliasing,
          onClick: cB => {
            Ec({
              antiAliasing: cB
            }), (0, NB.f)("antiAliasing"), Yc.d.setClientEscMenuOptions({
              antiAliasing: cB
            })
          },
          circleInfoText: ec("settingsMenu:antiAliasingInfo")
        }), (0, qB.jsx)(lc.g, {
          name: ec("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Mc = tB.pixelScale) && void 0 !== Mc ? Mc : 1,
          onChange: cB => {
            (cB !== Yc.d.get("clientEscMenuOptions").pixelScale || (0, oB.o)()) && (0, NB.f)("pixelScale"), Yc.d.setClientEscMenuOptions({
              pixelScale: cB
            })
          },
          circleInfoText: ec("settingsMenu:pixelScaleInfo"),
          format: cB => `${cB}x`
        }), (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:pixelSmoothing"),
          checked: tB.pixelSmoothing,
          onClick: cB => {
            Yc.d.setClientEscMenuOptions({
              pixelSmoothing: cB
            })
          },
          circleInfoText: ec("settingsMenu:pixelSmoothingInfo")
        }), bn.l && (0, qB.jsx)(lc.c, {
          label: ec("settingsMenu:distantNametags"),
          checked: (0, EB.b)(),
          onClick: cB => {
            Yc.d.set({
              showDistantNametags: cB
            })
          },
          circleInfoText: ec("settingsMenu:distantNametagsInfo")
        }), (0, qB.jsx)(lc.c, {
          label: ec(Qc.translationKey),
          checked: Qc.checked,
          onClick: cB => {
            Ec({
              useWebGpu: cB
            }), Yc.d.setClientEscMenuOptions({
              useWebGpu: cB
            })
          },
          circleInfoText: ec("settingsMenu:newWebGpuInfo"),
          disabled: Qc.disabled
        })]
      })
    }
    var kn = nc(8177),
      XB = nc(7776),
      HB = nc(7785),
      FB = nc(1228),
      JB = nc(4033),
      jn = nc(8182),
      RB = nc(1609),
      KB = nc(3487),
      xn = nc(1611),
      dB = nc(295);
    const AB = (0, Vc.memo)((function() {
      const {
        clientEscMenuOptions: cB
      } = (0, Yc.j)(["clientEscMenuOptions"]), {
        recording: Bc,
        clipping: nc,
        hasClipBuffer: Ic
      } = (0, RB.g)("replayRecorder"), uc = (0, RB.e)("connectedGame", (cB => cB.replay)), sc = (0, KB.l)(), Mc = !1 === (0, mB.j)("canRecordReplays");
      (0, Vc.useEffect)((() => {
        yB.gameBridge.send("setRecorderPrefs", {
          clipping: cB.enableClipping,
          clipSeconds: cB.clipDurationSeconds
        })
      }), [cB.enableClipping, cB.clipDurationSeconds]);
      const Pc = sc || uc,
        Oc = !Pc && !Mc,
        Tc = Bc || Oc,
        fc = Oc,
        ec = fc && nc && !Bc;

      function Sc() {
        Tc && yB.gameBridge.send("toggleRecording", null)
      }
      return (0, qB.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, qB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, qB.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Bc ? (0, qB.jsxs)(qB.Fragment, {
              children: [(0, qB.jsxs)(tB.L, {
                className: "ReplayViewerCategoryButton",
                onClick: Sc,
                disabled: !Tc,
                children: [(0, qB.jsx)("span", {
                  children: "Stop Recording"
                }), (0, qB.jsx)(xn.c, {
                  noaAction: "recordGame"
                })]
              }), (0, qB.jsx)(jn.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, qB.jsxs)(tB.d, {
              className: "ReplayViewerCategoryButton",
              onClick: Sc,
              disabled: !Tc,
              children: [(0, qB.jsx)("span", {
                children: "Start Recording"
              }), (0, qB.jsx)(xn.c, {
                noaAction: "recordGame"
              })]
            })
          }), Mc && (0, qB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Pc && !Bc && (0, qB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, qB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, qB.jsx)(lc.c, {
            label: "Enable clipping",
            checked: cB.enableClipping,
            disabled: !fc,
            onClick: function(cB) {
              fc && Yc.d.setClientEscMenuOptions({
                enableClipping: cB
              })
            },
            className: rB()({
              SettingBoxDisabled: !fc
            })
          }), (0, qB.jsx)(lc.g, {
            name: "Clip duration (seconds)",
            min: dB.g,
            max: dB.e,
            step: dB.b,
            initValue: cB.clipDurationSeconds,
            onChange: function(cB) {
              Yc.d.setClientEscMenuOptions({
                clipDurationSeconds: cB
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !fc || !cB.enableClipping
          })]
        }), (0, qB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, qB.jsxs)(tB.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              ec && yB.gameBridge.send("saveClip", null)
            },
            disabled: !ec,
            children: [(0, qB.jsx)("span", {
              children: "Record clip"
            }), (0, qB.jsx)(xn.c, {
              noaAction: "recordClip"
            })]
          }), cB.enableClipping && !Ic && fc && !Bc && (0, qB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Bc && (0, qB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, qB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, qB.jsxs)(tB.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, KB.j)(!0), Yc.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: sc,
            children: [(0, qB.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, qB.jsx)(xn.c, {
              noaAction: "replayViewerOpen"
            })]
          }), sc && (0, qB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, qB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, qB.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, qB.jsx)("iframe", {
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
    var GB = nc(244),
      cV = nc(1534);
    const Bn = {
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
        icon: () => (0, qB.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, qB.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      qI: {
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

    function nn() {
      return Promise.all([nc.e(123), nc.e(120), nc.e(114), nc.e(111)]).then((() => nc(39055))).then((cB => ({
        default: cB.ShaderPackCategory
      })), (cB => (console.error("Failed to load the shader pack settings", cB), {
        default: Vn
      })))
    }

    function Vn() {
      const {
        t: cB
      } = (0, uc.x)();
      return (0, qB.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: cB("shaderPack:tabLoadFailed")
      })
    }
    var In = nc(1226);
    const rV = (0, Vc.lazy)((() => nc.e(247).then((() => nc(39044))).then((cB => ({
        default: cB.BloxdInformation
      }))))),
      un = (0, Vc.lazy)(nn);

    function sn(cB) {
      return cB ? "general" : "account"
    }
    const Mn = new Map,
      Pn = (0, Vc.memo)((function(cB) {
        let {
          show: Bc,
          setBeforeResumeCallback: nc
        } = cB;
        (0, ec.e)();
        const {
          gameState: Ic,
          openSettingsCategory: rB
        } = (0, Yc.j)(["gameState", "openSettingsCategory"]), {
          userContext: Mc
        } = (0, fc.c)(), {
          t: Pc
        } = (0, uc.x)(), hc = (0, Tc.e)(), aB = (0, mB.j)("minChunkAddDist"), lc = "inGame" === Ic, [Lc, Uc] = (0, Vc.useState)(sn(lc)), [bB, Qc] = (0, Vc.useState)(null), [Cc, vB] = (0, Vc.useState)([]), Dc = (0, Vc.useRef)(function() {
          const cB = new Date,
            Bc = 6 * (cB.getMonth() + cB.getDate()) % GB.o.length;
          return [...GB.o, ...GB.o].slice(Bc, Bc + 6)
        }()), Nc = (0, Vc.useRef)(null), Ec = (0, TB.g)(FB.h, (0, FB.d)()), oc = Object.keys(Bn).filter((cB => {
          switch (cB) {
            case "replayViewer":
              return lc;
            case "developerTools":
              return Mc.playerHasRank("developer") || !1;
            case "texturePack":
              return Sc.featureFlags.settings.canChangeTexturePack;
            case "qI":
              return Sc.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Sc.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Zc.r;
            case "controller":
              return Sc.featureFlags.useControllerSupport && (Ec || "controller" === Lc);
            default:
              return !0
          }
        }));
        (0, TB.f)("toggleFullCoordinateOverlay", (() => {
          const cB = vn("showCoordinates") && vn("showChunkCoordinates") && vn("showFPS");
          DB("showCoordinates", !cB), DB("showChunkCoordinates", !cB), DB("showFPS", !cB), hc()
        })), (0, TB.f)("updatedChunkLoadDist", (() => {
          hc()
        })), (0, Vc.useEffect)((() => {
          if (Qc(null), null === Yc.d.get("openSettingsCategory")) {
            const cB = (0, In.f)() ? Mn.get(lc) : void 0;
            Uc(cB && oc.includes(cB) ? cB : sn(lc))
          }
        }), [Bc]), (0, Vc.useEffect)((() => {
          null !== rB && (Uc(rB), Mn.set(lc, rB), Yc.d.set({
            openSettingsCategory: null
          }))
        }), [rB, lc]), (0, Vc.useLayoutEffect)((() => {
          Nc.current && (Nc.current.scrollTop = 0)
        }), [Lc, Bc]), (0, Vc.useEffect)((() => {
          "updateLog" === Lc && (0, pc.b)().then(vB)
        }), [Lc]), (0, Vc.useEffect)((() => {
          if ((0, gn.E)(aB)) return;
          const [cB, Bc] = (0, kn.d)(), [nc, Vc] = (0, pB.h)(aB), Ic = (0, cV.h)(aB[0], cB, nc), rB = (0, cV.h)(aB[1], Bc, Vc);
          yB.gameBridge.send("setChunkAddDistance", {
            horizontal: Ic,
            vertical: rB
          })
        }), [aB]);
        const Wc = (0, Vc.useCallback)((async () => {
          bB && (await bB(), Qc(null))
        }), [bB]);

        function wc() {
          Yc.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, Vc.useEffect)((() => {
          nc((() => Wc))
        }), [Wc, nc]), (0, qB.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Bc ? {} : {
            display: "none"
          },
          children: [(0, qB.jsx)("div", {
            className: "MenuSideBar",
            children: (0, qB.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, qB.jsx)(Oc, {
                items: oc.map((cB => {
                  const Bc = Bn[cB].icon;
                  return {
                    id: cB,
                    faIcon: "string" === typeof Bc ? Bc : void 0,
                    iconElement: "string" === typeof Bc ? void 0 : (0, qB.jsx)(Bc, {}),
                    title: Pc(Bn[cB].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Lc,
                onClick: cB => {
                  !async function(cB) {
                    await Wc(), Uc(cB), Mn.set(lc, cB)
                  }(cB)
                }
              })
            })
          }), (0, qB.jsxs)("div", {
            ref: Nc,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Lc && (0, qB.jsx)(VB, {
              showing: Bc,
              inGame: lc
            }), "general" === Lc && (0, qB.jsx)(PB, {
              inGame: lc
            }), "audio" === Lc && (0, qB.jsx)(qn, {}), "notifications" === Lc && (0, qB.jsx)(zn, {}), "graphics" === Lc && (0, qB.jsx)(wB, {
              minChunkAddDist: null !== aB && void 0 !== aB ? aB : [2, 2],
              getValue: vn,
              onChange: DB,
              setApplySettingsCallback: Qc
            }), "controls" === Lc && (0, qB.jsx)(XB.g, {}), "controller" === Lc && Sc.featureFlags.useControllerSupport && (0, qB.jsx)(HB.d, {}), Sc.featureFlags.settings.canChangeTexturePack && "texturePack" === Lc && (0, qB.jsx)(JB.c, {
              setApplySettingsCallback: Qc
            }), Sc.featureFlags.settings.canUseShaderPacks && "qI" === Lc && (0, qB.jsx)(Vc.Suspense, {
              fallback: null,
              children: (0, qB.jsx)(un, {
                setApplySettingsCallback: Qc
              })
            }), "updateLog" === Lc && (0, qB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, qB.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Cc.map(((cB, Bc) => (0, qB.jsx)(zB.e, {
                  updateLog: cB,
                  index: Bc,
                  close: wc
                }, Bc)))
              })
            }), "information" === Lc && (0, qB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, qB.jsx)(Vc.Suspense, {
                fallback: null,
                children: (0, qB.jsx)(rV, {})
              })
            }), "alternativeDomains" === Lc && (0, qB.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, qB.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Pc("settingsMenu:unblockedDomainsDescription")
              }), (0, qB.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Dc.current.map((cB => (0, qB.jsxs)(tB.d, {
                  onClick: () => {
                    window.open(`https://${cB}`)
                  },
                  children: [(0, qB.jsx)(sc.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", cB]
                }, cB)))
              })]
            }), "replayViewer" === Lc && (0, qB.jsx)(AB, {}), "developerTools" === Lc && (0, qB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, qB.jsx)(gB, {
                setApplySettingsCallback: Qc
              })
            }), null !== bB && (0, qB.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, qB.jsx)(tB.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: Wc,
                children: Pc("general:apply")
              })
            })]
          })]
        })
      }));
    var qV = nc(2048);
    const On = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Tn = (0, Vc.lazy)((() => Promise.resolve().then((() => nc(3740))).then((cB => {
        cB.needGameClientAfterPaint();
        const Bc = cB.matchmakingLibrariesPromise.then((cB => (0, qV.e)(cB.loadCharacterCustomisationUI(), (cB => cB.CharacterCustomisationUI))));
        return Promise.all([cB.ensureGameSetup(), Bc]).then((cB => {
          let [, Bc] = cB;
          return Bc
        }))
      }))));

    function fn(cB) {
      let {
        show: Bc
      } = cB;
      const {
        userContext: nc
      } = (0, fc.c)(), [Ic, rB] = (0, Vc.useState)("characters");
      if (!Bc) return null;
      const uc = On.filter((cB => "cape" !== cB && "nameColour" !== cB || nc.getPlayerRanks().includes("super") || (0, Fc.siteSupportsPurchases)())).map((cB => ({
        id: cB,
        faIcon: GB.z[cB],
        title: GB.D[cB],
        redDot: !1
      })));
      return (0, qB.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, qB.jsx)("div", {
          className: "MenuSideBar",
          children: (0, qB.jsx)(Oc, {
            items: uc,
            selectedItemId: Ic,
            onClick: cB => {
              rB(cB)
            }
          })
        }), (0, qB.jsx)("div", {
          className: "MenuBody",
          children: (0, qB.jsx)(Vc.Suspense, {
            fallback: (0, qB.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, qB.jsx)(aB.e, {})
            }),
            children: (0, qB.jsx)(Tn, {
              selectedTab: Ic
            })
          })
        })]
      })
    }
    var mV = nc(1267),
      en = nc(8187),
      tV = nc(3646),
      Sn = nc(2604),
      yV = nc(2642),
      zV = nc(8203),
      pn = nc(7665),
      hn = nc(8190),
      aV = nc(8201),
      lnc = nc(1553),
      Yn = nc(1536),
      Ln = nc(3959),
      gV = nc(1125),
      Un = nc(1090),
      bV = nc(1480),
      Zn = nc(7756);
    class Qn {
      constructor(cB) {
        this.info = cB
      }
      static fromShopInfo(cB) {
        const Bc = {};
        for (const nc in cB) {
          const Vc = !0 === cB[nc].redDot && !0 !== cB[nc].forceRemoveRedDot;
          Bc[nc] = {
            redDot: Vc,
            items: {}
          };
          for (const Ic in cB[nc].items) {
            const Vc = cB[nc].items[Ic],
              rB = !0 === Vc.redDot && !0 !== Vc.forceRemoveRedDot;
            Bc[nc].items[Ic] = {
              redDot: rB
            }
          }
        }
        return new Qn(Bc)
      }
      anyCategoryHasRedDots() {
        for (const cB in this.info)
          if (this.categoryHasRedDot(cB)) return !0;
        return !1
      }
      doesCategoryExist(cB) {
        return !(0, gn.E)(this.info[cB])
      }
      categoryHasRedDot(cB) {
        return !0 === this.info[cB].redDot
      }
      updateCategoryRedDot(cB, Bc) {
        this.info[cB].redDot = Bc
      }
      doesItemExist(cB, Bc) {
        return this.doesCategoryExist(cB) && !(0, gn.E)(this.info[cB].items[Bc])
      }
      itemHasRedDot(cB, Bc) {
        return !0 === this.info[cB].items[Bc].redDot
      }
      updateItemRedDot(cB, Bc, nc) {
        this.info[cB].items[Bc].redDot = nc
      }
      shallowCopy() {
        return new Qn(this.info)
      }
    }

    function Cn(cB, Bc) {
      return `${cB}\x1f${Bc}`
    }

    function vV(cB) {
      return cB ? Object.keys(cB).sort(((Bc, nc) => {
        var Vc, Ic, rB, uc;
        const sc = (null !== (Vc = null === (Ic = cB[nc]) || void 0 === Ic ? void 0 : Ic.sortPriority) && void 0 !== Vc ? Vc : 0) - (null !== (rB = null === (uc = cB[Bc]) || void 0 === uc ? void 0 : uc.sortPriority) && void 0 !== rB ? rB : 0);
        return 0 !== sc ? sc : Bc.localeCompare(nc)
      })) : []
    }

    function Dn(cB, Bc) {
      return !(0, gn.E)(Bc) && !(0, gn.E)(cB) && Bc in cB
    }
    const Nn = (0, Vc.memo)((function(cB) {
      var Bc, nc;
      let {
        show: Ic
      } = cB;
      const uc = (0, RB.e)("players", Xn),
        sc = (0, RB.e)("players", Hn),
        [Pc, Tc] = (0, Vc.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: Qn.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        fc = (0, Vc.useRef)(""),
        ec = (0, Vc.useRef)(null),
        Sc = (0, Vc.useRef)(0),
        zB = (0, Vc.useRef)(void 0),
        pc = (0, Vc.useRef)(null),
        hc = (0, Vc.useRef)(Pc),
        aB = Pc.redDotInfo.anyCategoryHasRedDots(),
        [lc, Lc] = (0, Vc.useState)(null),
        gB = (0, Vc.useRef)(!1);
      let Uc = !1,
        bB = 0,
        Qc = 0;
      if (Pc.currencyAmounts) {
        for (const cB in Pc.currencyAmounts) {
          var Cc;
          const Bc = Pc.currencyAmounts[cB];
          Bc.hidden || (bB++, (null === (Cc = Bc.subtext) || void 0 === Cc ? void 0 : Cc.length) > 0 && Qc++)
        }
        Uc = bB + Qc > 4
      }(0, Vc.useEffect)((() => {
        UB.i.Vu("showShopIconRedDot", aB, !0)
      }), [aB]), (0, Vc.useEffect)((() => {
        yB.gameBridge.send("setShopOpen", Ic), Ic || (clearTimeout(zB.current), Tc((cB => cB.awaitingPurchase ? {
          ...cB,
          awaitingPurchase: !1
        } : cB)))
      }), [Ic]), (0, Vc.useEffect)((() => () => {
        yB.gameBridge.send("setShopOpen", !1), clearTimeout(zB.current)
      }), []), (0, Vc.useEffect)((() => {
        hc.current = Pc
      }), [Pc]), (0, Vc.useEffect)((() => {
        if (null === lc) return;
        return (0, bV.c)("pointerdown", (cB => {
          const Bc = cB.target;
          null !== Bc && void 0 !== Bc && Bc.closest(".ShopItem") || Lc(null)
        }))
      }), [lc]);
      const Dc = cB => {
          Tc((Bc => ({
            ...Bc,
            ...cB
          })))
        },
        Nc = cB => {
          var Bc;
          clearTimeout(null === (Bc = Pc.onBoughtInfo) || void 0 === Bc ? void 0 : Bc.timeout);
          const nc = setTimeout((() => {
            Dc({
              onBoughtInfo: null
            })
          }), 3e3);
          fc.current = cB, Dc({
            onBoughtInfo: {
              text: cB,
              timeout: nc
            }
          })
        },
        Ec = cB => {
          const {
            shopInfo: Bc,
            userInputsPerItem: nc,
            redDotInfo: Vc,
            autoSelectCategory: rB
          } = function(cB, Bc, nc, Vc, Ic, rB) {
            if ((0, gn.E)(cB) || 0 === Object.keys(cB).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: Qn.fromShopInfo({}),
              autoSelectCategory: null
            };
            const uc = Zc.m[Zc.r].adConfig.showRewardedAds,
              sc = {};
            let Mc = null;
            for (const tB in cB) {
              const Bc = cB[tB],
                nc = {};
              let Vc = !1;
              for (const cB in Bc.items) {
                const Ic = Bc.items[cB];
                (0, pn.f)(Ic, uc) && (nc[cB] = Ic, Vc = !0)
              }
              Vc && (sc[tB] = {
                ...Bc,
                items: nc
              }, !0 === Bc.autoSelectCategory && (Mc = tB))
            }
            const Pc = {},
              qB = (cB, Bc, Vc, uc) => {
                var sc, Mc;
                const qB = Cn(cB, Bc),
                  Oc = null !== (sc = nc[qB]) && void 0 !== sc ? sc : nc[Bc];
                if (null !== (Mc = uc.userInput) && void 0 !== Mc && Mc.type) switch (uc.userInput.type) {
                  case "dropdown": {
                    var Tc;
                    const cB = !Oc || !uc.userInput.dropdownOptions.some((cB => (0, pn.d)(cB) === Oc)),
                      Bc = uc.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Vc || void 0 === Vc || null === (Tc = Vc.userInput) || void 0 === Tc ? void 0 : Tc.type) || JSON.stringify(Vc.userInput.dropdownOptions) !== JSON.stringify(uc.userInput.dropdownOptions)),
                      nc = uc.userInput,
                      Ic = !(0, gn.E)(nc.initialValue) && nc.dropdownOptions.some((cB => (0, pn.d)(cB) === nc.initialValue));
                    var fc;
                    return void(cB || Bc ? Ic ? Pc[qB] = null !== (fc = uc.userInput.initialValue) && void 0 !== fc ? fc : null : uc.userInput.dropdownOptions.length > 0 ? Pc[qB] = (0, pn.d)(uc.userInput.dropdownOptions[0]) : Pc[qB] = null : Pc[qB] = Oc)
                  }
                  case "text":
                  case "number":
                    var mB, ec, tB;
                    return void((null === Vc || void 0 === Vc ? void 0 : Vc.userInput) !== uc.userInput ? Pc[qB] = null !== (mB = null !== (ec = uc.userInput.initialValue) && void 0 !== ec ? ec : Oc) && void 0 !== mB ? mB : "" : Pc[qB] = null !== (tB = null !== Oc && void 0 !== Oc ? Oc : uc.userInput.initialValue) && void 0 !== tB ? tB : "");
                  case "color":
                    var Sc, yB, zB;
                    return void((null === Vc || void 0 === Vc ? void 0 : Vc.userInput) !== uc.userInput ? Pc[qB] = null !== (Sc = null !== (yB = uc.userInput.initialValue) && void 0 !== yB ? yB : Oc) && void 0 !== Sc ? Sc : "#000000" : Pc[qB] = null !== (zB = null !== Oc && void 0 !== Oc ? Oc : uc.userInput.initialValue) && void 0 !== zB ? zB : "#000000");
                  case "player": {
                    const cB = (0, pn.e)(Ic, rB, uc.userInput);
                    return void(Oc && cB.includes(Oc) ? Pc[qB] = Oc : Pc[qB] = cB.length > 0 ? cB[0] : null)
                  }
                }
              };
            for (const tB in sc)
              for (const cB in sc[tB].items) {
                var Oc;
                const nc = sc[tB].items[cB];
                qB(tB, cB, null === (Oc = Bc[tB]) || void 0 === Oc ? void 0 : Oc.items[cB], nc)
              }
            const Tc = Qn.fromShopInfo(sc);
            for (const tB in sc) {
              var fc;
              if (Vc.doesCategoryExist(tB)) {
                (null === (fc = Bc[tB]) || void 0 === fc ? void 0 : fc.redDot) === sc[tB].redDot && Tc.updateCategoryRedDot(tB, Vc.categoryHasRedDot(tB));
                for (const cB in sc[tB].items) {
                  var mB, ec;
                  Vc.doesItemExist(tB, cB) && (null === (mB = Bc[tB]) || void 0 === mB || null === (ec = mB.items[cB]) || void 0 === ec ? void 0 : ec.redDot) === sc[tB].items[cB].redDot && Tc.updateItemRedDot(tB, cB, Vc.itemHasRedDot(tB, cB))
                }
              }
            }
            return {
              shopInfo: sc,
              userInputsPerItem: Pc,
              redDotInfo: Tc,
              autoSelectCategory: Mc
            }
          }(cB, Pc.shopInfo, Pc.userInputsPerItem, Pc.redDotInfo, uc, sc), Mc = {
            shopInfo: Bc,
            userInputsPerItem: nc,
            redDotInfo: Vc
          };
          if (null === rB || Ic)
            if (Bc[Pc.selectedCategoryKey]) Mc.selectedCategoryKey = Pc.selectedCategoryKey;
            else {
              const cB = vV(Bc);
              Mc.selectedCategoryKey = cB.length > 0 ? cB[0] : null
            }
          else Mc.selectedCategoryKey = rB;
          return 0 === Object.keys(Bc).length && Ic && Yc.d.set({
            openEverythingMenuName: null
          }), Mc
        },
        oc = (cB, Bc) => {
          if (null === Bc || !cB.shopInfo[Bc]) return cB;
          let nc = cB.redDotInfo;
          return nc.categoryHasRedDot(Bc) && (nc.updateCategoryRedDot(Bc, !1), nc = nc.shallowCopy()), {
            ...cB,
            selectedCategoryKey: Bc,
            redDotInfo: nc
          }
        },
        Wc = cB => {
          Tc((Bc => oc(Bc, cB)))
        };
      (0, TB.f)(Zn.j, (() => {
        Tc((cB => {
          const Bc = (0, Zn.k)(vV(cB.shopInfo), cB.selectedCategoryKey, (Bc => (0, Zn.g)(cB.shopInfo[Bc].items)));
          return Bc === cB.selectedCategoryKey ? cB : oc(cB, Bc)
        }))
      })), (0, TB.f)("showShopFromServer", (cB => {
        let {
          toggle: Bc,
          v_: nc
        } = cB;
        nc && Wc(nc), 0 === Object.keys(Pc.shopInfo).length || Bc && Ic ? Yc.d.set({
          openEverythingMenuName: null
        }) : Yc.d.set({
          openEverythingMenuName: GB.i.SHOP
        })
      })), (0, TB.f)("closeShopOnDamaged", (() => {
        Ic && Yc.d.set({
          openEverythingMenuName: null
        })
      })), (0, TB.f)("overShopInfo", (cB => {
        Nc(cB)
      })), (0, mB.f)("currencyAmounts", (cB => {
        var Bc;
        const nc = pc.current;
        nc && (null === cB || void 0 === cB || null === (Bc = cB[nc.currency]) || void 0 === Bc ? void 0 : Bc.amount) === nc.amountBefore ? Dc({
          currencyAmounts: cB
        }) : (pc.current = null, Dc({
          currencyAmounts: cB,
          awaitingPurchase: !1
        }))
      })), (0, mB.f)("shopInfo", (cB => {
        Dc({
          ...Ec(cB),
          awaitingPurchase: !1
        })
      }));
      const wc = (0, Vc.useRef)({
        playerIds: uc,
        localPlayerId: sc
      });
      (0, Vc.useEffect)((() => {
        wc.current.playerIds === uc && wc.current.localPlayerId === sc || (wc.current = {
          playerIds: uc,
          localPlayerId: sc
        }, Tc((cB => {
          const Bc = Ec(cB.shopInfo);
          return {
            ...cB,
            ...Bc
          }
        })))
      }), [uc, sc]);
      const kB = Pc.selectedCategoryKey,
        Hc = (cB, Bc) => {
          var nc, Vc;
          return (isNaN(Bc) || (0, gn.E)(cB.currency) || Dn(Pc.currencyAmounts, cB.currency) && Bc <= Pc.currencyAmounts[cB.currency].amount) && (null === (nc = cB.canBuy) || void 0 === nc || nc) && !(null !== (Vc = cB.hidden) && void 0 !== Vc && Vc)
        },
        Fc = (cB, Bc) => {
          var nc, Vc, Ic;
          const uc = Cn(kB, cB),
            sc = Pc.shopInfo[kB].items[cB],
            Oc = Pc.userInputsPerItem[uc],
            Tc = (0, pn.c)(sc, Oc),
            fc = Hc(sc, Tc),
            mB = sc.enchant,
            ec = mB ? (0, Xc.fb)(null !== (nc = sc.customTitle) && void 0 !== nc ? nc : cB, {
              colour: Xc.db[mB.tier]
            }) : null !== (Vc = sc.customTitle) && void 0 !== Vc ? Vc : cB,
            aB = Bc => {
              const nc = null !== Bc && void 0 !== Bc ? Bc : Oc,
                Vc = void 0 !== Bc ? (0, pn.c)(sc, Bc) : Tc;
              Hc(sc, Vc) && null !== nc && ((cB, Bc, nc) => {
                const Vc = Pc.selectedCategoryKey,
                  Ic = Cn(Vc, cB),
                  rB = null !== nc && void 0 !== nc ? nc : Pc.userInputsPerItem[Ic],
                  uc = {
                    categoryKey: Vc,
                    itemKey: cB,
                    userInput: rB
                  };
                if (Bc.isRewardedAd) {
                  if (Date.now() - Sc.current < 5e3) return;
                  (0, vB.bb)((() => {
                    var nc, Vc, rB;
                    console.log("bought rewarded ad");
                    const sc = uc.categoryKey ? null === (nc = hc.current.shopInfo[uc.categoryKey]) || void 0 === nc ? void 0 : nc.items[cB] : null;
                    sc && sc.isRewardedAd ? (null === (Vc = Bc.userInput) || void 0 === Vc ? void 0 : Vc.type) === (null === sc || void 0 === sc || null === (rB = sc.userInput) || void 0 === rB ? void 0 : rB.type) ? (uc.userInput = hc.current.userInputsPerItem[Ic], yB.gameBridge.send("buyShopItem", uc), Bc.onBoughtMessage && Nc(Bc.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), Sc.current = Date.now()
                } else {
                  yB.gameBridge.send("buyShopItem", uc), Dc({
                    awaitingPurchase: !0
                  }), clearTimeout(zB.current), zB.current = setTimeout((() => {
                    pc.current = null, Dc({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const cB = (0, pn.c)(Bc, rB);
                  if (pc.current = null, !isNaN(cB) && Dn(Pc.currencyAmounts, Bc.currency)) {
                    0 !== cB && (pc.current = {
                      currency: Bc.currency,
                      amountBefore: Pc.currencyAmounts[Bc.currency].amount
                    });
                    const nc = {
                      ...Pc.currencyAmounts
                    };
                    nc[Bc.currency].amount -= cB, Dc({
                      currencyAmounts: nc
                    })
                  }
                  Bc.onBoughtMessage && Nc(Bc.onBoughtMessage)
                }
              })(cB, sc, Bc);
              let Ic = Pc.redDotInfo;
              Ic.itemHasRedDot(kB, cB) && (Ic.updateItemRedDot(kB, cB, !1), Ic = Ic.shallowCopy()), Dc({
                redDotInfo: Ic
              })
            };
          return (0, qB.jsxs)("div", {
            className: rB()("ShopItem", {
              ShopItemNoInput: !sc.userInput,
              ShopItemNoInputCanBuy: !sc.userInput && fc,
              ShopItemNoInputSelected: sc.isSelected,
              ShopItemEnchant: !!mB
            }),
            "data-pad-focusable": !sc.userInput || void 0,
            "data-pad-unavailable": !sc.userInput && !fc || void 0,
            "data-pad-repeat": null !== (Ic = (0, Zn.b)(sc)) && void 0 !== Ic ? Ic : void 0,
            "data-pad-repeat-wait": Pc.awaitingPurchase || void 0,
            onClick: () => {
              if (mB && gB.current) {
                if (lc !== uc) return void Lc(uc);
                Lc(null)
              }
              sc.userInput || aB()
            },
            onPointerDown: cB => {
              mB && (gB.current = (0, aV.u)(cB))
            },
            onPointerEnter: cB => {
              mB && !(0, aV.u)(cB) && Lc(uc)
            },
            onPointerLeave: cB => {
              mB && !(0, aV.u)(cB) && Lc((cB => cB === uc ? null : cB))
            },
            style: {
              zIndex: Object.keys(Pc.shopInfo[kB].items).length - Bc
            },
            children: [Pc.redDotInfo.itemHasRedDot(kB, cB) && (0, qB.jsx)(Mc.d, {
              top: "-6px",
              right: "-6px"
            }), sc.badge && (0, qB.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, qB.jsx)("div", {
                className: rB()("ShopBadgeMain", sc.badge.type),
                children: (0, qB.jsx)(Yn.e, {
                  text: sc.badge.text
                })
              })
            }), (0, qB.jsx)("div", {
              className: "ShopItemLeft",
              children: sc.image && (0, qB.jsx)(En, {
                item: sc,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, qB.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, qB.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, qB.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, qB.jsx)(Yn.e, {
                    text: ec
                  })
                }), (0, qB.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, qB.jsx)(Yn.e, {
                    text: sc.description
                  })
                })]
              }), sc.userInput && (0, qB.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: cB => {
                  cB.stopPropagation()
                },
                children: [(0, qB.jsx)(wn, {
                  item: sc,
                  currInput: Oc,
                  updateInput: Bc => {
                    ((cB, Bc, nc) => {
                      const Vc = Cn(cB, Bc),
                        Ic = {
                          ...Pc.userInputsPerItem
                        };
                      Ic[Vc] = nc, Dc({
                        userInputsPerItem: Ic
                      })
                    })(kB, cB, Bc)
                  },
                  onSubmit: cB => {
                    aB(cB)
                  }
                }), ("dropdown" !== sc.userInput.type || !sc.userInput.autoSubmit) && (0, qB.jsx)(tB.d, {
                  className: "ItemCostButton",
                  disabled: !fc && null !== Oc,
                  onClick: () => {
                    aB()
                  },
                  children: (0, qB.jsx)(Wn, {
                    item: sc,
                    cost: Tc,
                    currencyAmounts: Pc.currencyAmounts
                  })
                })]
              })]
            }), !sc.userInput && (0, qB.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, qB.jsx)(Wn, {
                item: sc,
                cost: Tc,
                currencyAmounts: Pc.currencyAmounts
              })
            }), mB && lc === uc && (0, qB.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, qB.jsx)(Yn.e, {
                text: ec
              }), (0, qB.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, qB.jsx)(Yn.e, {
                  text: (0, hn.d)("", mB.enchantments, mB.enchantmentData)
                })
              })]
            })]
          }, uc)
        };
      return (0, qB.jsx)(Sn.c, {
        className: "Menu ShopBody",
        show: Ic,
        children: 0 !== Object.keys(Pc.shopInfo).length && (0, qB.jsxs)(qB.Fragment, {
          children: [(0, qB.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, qB.jsx)(Oc, {
              items: vV(Pc.shopInfo).map((cB => {
                var Bc;
                return {
                  id: cB,
                  title: null !== (Bc = Pc.shopInfo[cB].customTitle) && void 0 !== Bc ? Bc : cB,
                  redDot: Pc.redDotInfo.categoryHasRedDot(cB)
                }
              })),
              selectedItemId: kB,
              onClick: Wc,
              padStartsOnTab: (0, Zn.e)(kB)
            }), (0, qB.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Pc.currencyAmounts && Object.keys(Pc.currencyAmounts).map((cB => {
                var Bc;
                const nc = Pc.currencyAmounts[cB];
                return nc.hidden ? null : (0, qB.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Uc ? "SmallText" : ""),
                  children: [(0, qB.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, qB.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: nc.iconColour
                      },
                      children: (0, qB.jsx)(Fn, {
                        iconName: nc.icon
                      })
                    }), "\xa0", (0, zV.b)(nc.amount, 6)]
                  }), (null === (Bc = nc.subtext) || void 0 === Bc ? void 0 : Bc.length) > 0 && (0, qB.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, qB.jsx)(Yn.e, {
                      text: nc.subtext
                    })
                  })]
                }, cB)
              }))
            })]
          }), (0, qB.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, qB.jsx)("div", {
              className: rB()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== Pc.onBoughtInfo
              }),
              children: (0, qB.jsx)(Yn.e, {
                text: fc.current
              })
            }), (0, qB.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, qB.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (Bc = Pc.shopInfo[kB]) || void 0 === Bc ? void 0 : Bc.description) && (0, qB.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, qB.jsx)(Yn.e, {
                    text: Pc.shopInfo[kB].description
                  })
                }), Ic && (0, qB.jsx)("div", {
                  className: "ShopItems",
                  ref: ec,
                  "data-pad-initial-area": !0,
                  children: vV(null === (nc = Pc.shopInfo[kB]) || void 0 === nc ? void 0 : nc.items).map(((cB, Bc) => Fc(cB, Bc)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function En(cB) {
      let {
        item: Bc,
        minWidth: nc,
        minHeight: Vc
      } = cB;
      const {
        image: Ic,
        schematicId: rB,
        imageColour: uc
      } = Bc;
      if (rB) return (0, qB.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${nc}rem`,
          height: `${Vc}rem`
        },
        children: (0, qB.jsx)(Ln.c, {
          game: {
            schematicId: rB
          }
        })
      });
      var Mc, Pc;
      if ((0, lnc.g)(Ic)) return (0, qB.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${nc}rem`,
          height: "0",
          minHeight: `${Vc}rem`
        },
        children: (0, qB.jsx)(lnc.d, {
          itemName: Ic,
          amount: null !== (Mc = Bc.amount) && void 0 !== Mc ? Mc : 0,
          amountFontSize: Vc / 4 + "rem",
          enchantmentTier: null === (Pc = Bc.enchant) || void 0 === Pc ? void 0 : Pc.tier
        })
      });
      const Oc = Ic.slice(-4);
      return ".jpg" === Oc || ".png" === Oc ? (0, qB.jsx)(onc, {
        image: Ic,
        minWidth: nc
      }) : (0, qB.jsx)(sc.e, {
        name: Ic,
        className: "SelectedItemImage",
        style: {
          color: uc
        }
      })
    }

    function onc(cB) {
      let {
        image: Bc,
        minWidth: nc
      } = cB;
      const {
        gameNameWithVariation: Vc
      } = (0, RB.g)("connectedGame"), Ic = Bc.endsWith(".jpg");
      return (0, qB.jsx)("img", {
        className: rB()({
          ShopPixelImage: !Ic
        }),
        style: {
          width: `${Ic?1.6*nc:nc}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Xc.Db)(Vc)}/${Bc}`,
        alt: Bc,
        draggable: !1
      })
    }

    function Wn(cB) {
      let {
        item: Bc,
        cost: nc,
        currencyAmounts: Vc
      } = cB;
      const Ic = !isNaN(nc) && 0 !== nc && Dn(Vc, Bc.currency);
      let rB = null;
      return Bc.buyButtonText ? rB = Bc.buyButtonText : Ic ? (rB = nc, Bc.sell && (rB = -1 * nc), rB = rB.toString()) : 0 === nc ? rB = "Free" : Bc.isRewardedAd && (rB = "Watch ad"), (0, gn.E)(rB) || " " === rB ? null : (0, qB.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Ic && (0, qB.jsx)("div", {
          style: {
            color: Vc[Bc.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, qB.jsx)(Fn, {
            iconName: Vc[Bc.currency].icon
          })
        }), (0, qB.jsx)("div", {
          className: "BuyItemCost",
          children: (0, qB.jsx)(Yn.e, {
            text: rB
          })
        })]
      })
    }

    function wn(cB) {
      let {
        item: Bc,
        currInput: nc,
        updateInput: Ic,
        onSubmit: rB
      } = cB;
      const {
        t: sc
      } = (0, uc.x)(), Mc = (0, Vc.useRef)(null);
      if ((0, Vc.useEffect)((() => {
          const cB = Mc.current;
          cB && cB.value !== nc && document.activeElement !== cB && (cB.value = null !== nc && void 0 !== nc ? nc : "")
        }), [nc]), !Bc.userInput) return null;
      let Pc = Bc.userInput;
      if (Sc.featureFlags.sanitizeShopInput && "text" === Bc.userInput.type && (Pc = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Pc.type || "number" === Pc.type) {
        var Oc, Tc;
        console.assert(void 0 !== nc, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Bc)}`);
        const cB = "text" === Pc.type && Pc.wordCharsOnly;
        return (0, qB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, qB.jsx)(hc.e, {
            className: "ShopItemUserInputText",
            placeholderText: sc(Pc.placeholderText),
            defaultValue: nc,
            domRef: Mc,
            onValueChange: (Bc, nc) => {
              !0 === cB && (Bc = (0, Un.bb)(Bc)), Mc.current.value = Bc, Ic(Bc)
            },
            onEnter: rB,
            type: Pc.type
          }, (null !== (Oc = Pc.initialValue) && void 0 !== Oc ? Oc : "") + (null !== (Tc = Pc.placeholderText) && void 0 !== Tc ? Tc : ""))
        })
      }
      if ("dropdown" === Pc.type) {
        console.assert(void 0 !== nc, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Bc)}`);
        const cB = Pc.autoSubmit;
        return (0, qB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, qB.jsx)(uB.c, {
            options: Pc.dropdownOptions.map((cB => (0, pn.d)(cB))),
            value: nc,
            onChange: Bc => {
              let {
                value: nc
              } = Bc;
              Ic(nc), cB && rB(nc)
            }
          })
        })
      }
      return "player" === Pc.type ? (0, qB.jsx)(kV, {
        userInput: Pc,
        currInput: nc,
        updateInput: Ic
      }) : "color" === Pc.type ? (0, qB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, qB.jsx)("input", {
          type: "color",
          value: nc,
          onChange: cB => {
            Ic(cB.target.value)
          }
        })
      }) : null
    }

    function kV(cB) {
      let {
        userInput: Bc,
        currInput: nc,
        updateInput: Vc
      } = cB;
      const Ic = (0, RB.g)("players"),
        rB = (0, RB.g)("hiddenPlayerNames"),
        uc = (0, pn.e)(Ic.ids, Ic.localId, Bc);
      return (0, qB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, qB.jsx)(uB.c, {
          options: uc.map((cB => {
            const {
              name: Bc
            } = Ic.byId[cB];
            return {
              value: cB,
              label: null === Bc ? "" : (0, gV.g)(Bc, rB)
            }
          })),
          value: nc,
          onChange: cB => {
            let {
              value: Bc
            } = cB;
            Vc(Bc)
          }
        })
      })
    }

    function Xn(cB) {
      let {
        ids: Bc
      } = cB;
      return Bc
    }

    function Hn(cB) {
      let {
        localId: Bc
      } = cB;
      return Bc
    }

    function Fn(cB) {
      let {
        iconName: Bc
      } = cB;
      return yB.gameBridge.lookup("isItemName", Bc) ? (0, qB.jsx)(lnc.d, {
        itemName: Bc,
        amount: 1
      }) : (0, qB.jsx)(sc.e, {
        name: Bc,
        className: "2x"
      })
    }
    var Jn = nc(1464);
    const jV = (0, nc(1237).j)((cB => cB.PadLobbyShortcuts)),
      Rn = (0, Vc.lazy)((() => Promise.resolve().then((() => nc(3740))).then((cB => ({
        default: cB.Lobbyleaderboard
      })))));

    function iV(cB) {
      let {
        show: Bc
      } = cB;
      return Bc ? (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsx)(jV, {}), (0, qB.jsx)(Vc.Suspense, {
          fallback: (0, qB.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, qB.jsx)(aB.e, {})
          }),
          children: (0, qB.jsx)(Rn, {})
        })]
      }) : null
    }
    var Kn = nc(1386),
      xV = nc(2108),
      dn = nc(1309),
      An = nc(1259),
      Gn = nc(2254),
      cI = nc(1746),
      BV = nc(2272),
      nV = nc(1877);
    const VV = "storeRecentGiftRecipients",
      IV = new Map;

    function rI() {
      try {
        const cB = ZB.h.getItem(VV);
        return Array.isArray(cB) ? cB.filter((cB => "string" === typeof(null === cB || void 0 === cB ? void 0 : cB.name) && cB.name.length > 0)).map((cB => ({
          name: cB.name,
          cosmetics: cB.cosmetics && "object" === typeof cB.cosmetics ? cB.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function uV(cB) {
      var Bc;
      const [nc, Ic] = (0, Vc.useState)(""), [rB, uc] = (0, Vc.useState)("search"), [sc, Mc] = (0, Vc.useState)(null), [Pc, qB] = (0, Vc.useState)(null), Oc = (0, Vc.useRef)(null), Tc = (0, Vc.useRef)(null);
      (0, Vc.useEffect)((() => () => {
        Oc.current && clearTimeout(Oc.current)
      }), []);
      const fc = null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.name) && void 0 !== Bc ? Bc : null;

      function mB() {
        Oc.current && (clearTimeout(Oc.current), Oc.current = null)
      }(0, Vc.useEffect)((() => {
        if (null === fc) return;
        const Bc = fc.toLowerCase();
        if (Bc === cB.getPlayerName().toLowerCase()) return void qB({
          name: fc,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const nc = IV.get(Bc);
        if (nc) return void qB({
          name: fc,
          result: nc
        });
        let Vc = !1;
        return async function(cB, Bc) {
          try {
            const nc = await (0, Qc.postJsonWithMetricsCookiesAndJsonResponse)(`${Cc.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: Bc
            }, {
              retries: 1
            }, cB.getMetricsCookies());
            if ("boolean" !== typeof(null === nc || void 0 === nc ? void 0 : nc.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(nc)}`);
            return nc
          } catch (nc) {
            return console.error("Failed to look up gift recipient:", nc), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(cB, fc).catch((cB => (console.error("Gift recipient lookup failed:", cB), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((cB => {
          !0 !== cB.giftRecipientFound && "store:giftRecipientLookupFailed" === cB.giftRecipientError || IV.set(Bc, cB), Vc || qB({
            name: fc,
            result: cB
          })
        })), () => {
          Vc = !0
        }
      }), [fc, cB]);
      const ec = (0, Vc.useMemo)((() => {
        const cB = nc.trim();
        if (!cB) return {
          status: "none"
        };
        if (!sc || sc.name !== cB || (null === Pc || void 0 === Pc ? void 0 : Pc.name) !== sc.name) return {
          status: "pending",
          name: cB
        };
        const Bc = Pc.result;
        return !1 === Bc.giftRecipientFound ? {
          status: "error",
          name: sc.name,
          error: Bc.giftRecipientError
        } : {
          status: "found",
          name: Bc.giftRecipientName,
          ownedPacks: Bc.giftRecipientOwnedPacks,
          superRankDaysLeft: Bc.giftRecipientSuperRankDaysLeft
        }
      }), [nc, sc, Pc]);
      (0, Vc.useEffect)((() => {
        "found" === ec.status && "typed" === (null === sc || void 0 === sc ? void 0 : sc.source) && Tc.current !== ec.name && (Tc.current = ec.name, (0, iB.h)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [ec, sc]);
      const tB = (null === Pc || void 0 === Pc ? void 0 : Pc.name) === (null === sc || void 0 === sc ? void 0 : sc.name) ? null === Pc || void 0 === Pc ? void 0 : Pc.result : null,
        Sc = !0 === (null === tB || void 0 === tB ? void 0 : tB.giftRecipientFound) ? tB.giftRecipientCosmetics : null;
      return {
        query: nc,
        via: rB,
        recipient: ec,
        recipientCosmetics: Sc,
        type: function(cB) {
          Ic(cB), uc("search"), mB();
          const Bc = cB.trim();
          Bc ? Oc.current = setTimeout((() => {
            Mc({
              name: Bc,
              source: "typed"
            })
          }), 400) : Mc(null)
        },
        choose: function(cB, Bc) {
          mB(), Ic(cB), uc("typed" === Bc ? "search" : "prefilled" === Bc ? "prefilled" : "suggestion"), Mc({
            name: cB,
            source: Bc
          }), "typed" !== Bc && "prefilled" !== Bc && (0, iB.h)({
            id: "store.gift_recipient",
            value: Bc
          })
        },
        clear: function() {
          mB(), Ic(""), uc("search"), Mc(null)
        },
        recordGift: function(cB, Bc) {
          ! function(cB) {
            IV.delete(cB.toLowerCase())
          }(cB), qB((nc => {
            if (!nc || nc.name.toLowerCase() !== cB.toLowerCase() || !0 !== nc.result.giftRecipientFound || "superRank" === Bc) return nc;
            const Vc = nc.result.giftRecipientOwnedPacks;
            return {
              ...nc,
              result: {
                ...nc.result,
                giftRecipientOwnedPacks: Vc.includes(Bc) ? Vc : [...Vc, Bc]
              }
            }
          }))
        }
      }
    }
    var sV = nc(1868),
      MV = nc(550),
      PV = nc(1466),
      qI = nc(1908),
      OV = nc(2020);

    function TV(cB) {
      let {
        cosmetics: Bc
      } = cB;
      return (0, qB.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, qB.jsx)(qI.b, {
          cosmetics: Bc
        })
      })
    }

    function fV(cB, Bc) {
      var nc, Vc;
      const Ic = null !== (nc = cB.friend) && void 0 !== nc ? nc : {
        isError: !1,
        name: cB.name,
        ranks: [],
        cosmetics: null !== (Vc = cB.cosmetics) && void 0 !== Vc ? Vc : {},
        nameColour: MV.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return Bc ? {
        ...Ic,
        cosmetics: Bc
      } : Ic
    }

    function mI(cB) {
      let {
        recipient: Bc
      } = cB;
      return "pending" === Bc.status ? (0, qB.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, qB.jsx)(aB.e, {})
      }) : "found" === Bc.status ? (0, qB.jsx)(sc.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function eV(cB) {
      var Bc;
      let {
        selfName: nc,
        giftRecipient: Ic,
        suggestionsVersion: Mc,
        pulseSignal: Pc,
        disabled: Oc
      } = cB;
      const {
        t: Tc
      } = (0, uc.x)(), fc = (0, PV.m)(), mB = (0, Vc.useRef)(null), ec = (0, Vc.useRef)(null), {
        query: yB,
        via: zB,
        recipient: pc,
        recipientCosmetics: aB
      } = Ic, lc = (0, nV.n)(yB), Yc = (0, Vc.useMemo)((() => {
        const cB = Sc.featureFlags.useSocialFeatures ? fc.friends.filter((cB => !cB.isError)) : [];
        return (0, nV.m)({
          onlineFriends: (0, PV.h)(cB),
          recentRecipients: rI(),
          friends: cB,
          selfName: nc,
          max: 8
        })
      }), [fc.friends, nc, Mc]), Lc = yB.trim().toLowerCase(), gB = "search" !== zB && Lc ? Yc.find((cB => cB.name.toLowerCase() === Lc)) : void 0, Uc = gB && "prefilled" === zB ? [gB, ...Yc.filter((cB => cB !== gB))] : Yc, bB = "" !== Lc && !gB, Zc = bB ? yB : "", Qc = Uc.length > 0;

      function Cc() {
        "self" !== lc && (0, iB.h)({
          id: "store.mode",
          value: "self"
        }), Ic.clear()
      }

      function vB(cB) {
        var Bc, nc;
        if (Oc) return;
        if (" " === cB.key || "Enter" === cB.key) return cB.preventDefault(), void cB.currentTarget.click();
        const Vc = Array.from(null !== (Bc = null === (nc = ec.current) || void 0 === nc ? void 0 : nc.querySelectorAll("[role=radio]")) && void 0 !== Bc ? Bc : []),
          Ic = Vc.indexOf(cB.currentTarget);
        let rB;
        "ArrowRight" === cB.key || "ArrowDown" === cB.key ? rB = Vc[(Ic + 1) % Vc.length] : "ArrowLeft" === cB.key || "ArrowUp" === cB.key ? rB = Vc[(Ic - 1 + Vc.length) % Vc.length] : "Home" === cB.key ? rB = Vc[0] : "End" === cB.key && (rB = Vc[Vc.length - 1]), rB && (cB.preventDefault(), rB.focus(), rB.click())
      }(0, Vc.useEffect)((() => {
        mB.current && mB.current.value !== Zc && (mB.current.value = Zc)
      }), [Zc]), (0, Vc.useEffect)((() => {
        mB.current && (mB.current.disabled = Oc)
      }), [Oc, Pc]), (0, Vc.useEffect)((() => {
        var cB;
        Pc > 0 && (null === (cB = mB.current) || void 0 === cB || cB.focus())
      }), [Pc]);
      const Dc = "self" === lc,
        Nc = null !== (Bc = null === gB || void 0 === gB ? void 0 : gB.name) && void 0 !== Bc ? Bc : null,
        oc = "error" === pc.status ? pc.error : null,
        Wc = "store:giftRecipientLookupFailed" === oc;
      return (0, qB.jsxs)("div", {
        className: rB()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Oc,
          StoreRecipientStripNoChips: !Qc
        }),
        children: [(0, qB.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Tc("store:buyingFor")
        }), (0, qB.jsxs)("div", {
          ref: ec,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Tc("store:whoIsItFor"),
          children: [(0, qB.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Dc,
            tabIndex: Oc || !Dc && null !== Nc ? -1 : 0,
            className: rB()("StoreRecipientMe", {
              StoreRecipientChecked: Dc
            }),
            onClick: () => {
              Oc || Cc()
            },
            onKeyDown: vB,
            children: [(0, qB.jsx)(sc.e, {
              name: "user"
            }), " ", Tc("store:me")]
          }), Qc && (0, qB.jsx)("div", {
            className: "StoreRecipientChips",
            children: Uc.map((cB => {
              const Bc = cB === gB;
              return (0, qB.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Bc,
                tabIndex: !Oc && Bc ? 0 : -1,
                title: cB.name,
                className: rB()("StoreRecipientChip", {
                  StoreRecipientChecked: Bc
                }),
                onClick: () => {
                  Oc || function(cB) {
                    "gift" !== lc && (0, iB.h)({
                      id: "store.mode",
                      value: "gift"
                    }), Ic.choose(cB.name, cB.kind)
                  }(cB)
                },
                onKeyDown: vB,
                children: (0, qB.jsx)(OV.h, {
                  playerSocialPreview: fV(cB, Bc ? aB : null),
                  opensProfileCard: !1,
                  isFriend: null !== cB.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== cB.friend,
                  status: null === cB.friend ? null : void 0,
                  trailing: Bc ? (0, qB.jsx)(mI, {
                    recipient: pc
                  }) : void 0
                })
              }, cB.name)
            }))
          })]
        }), (0, qB.jsxs)("div", {
          className: rB()("StoreRecipientSearch", {
            StoreRecipientChecked: bB,
            StoreRecipientSearchPulse: Pc > 0 && !bB,
            StoreRecipientSearchError: null !== oc && !Wc
          }),
          onClick: () => {
            var cB;
            null === (cB = mB.current) || void 0 === cB || cB.focus()
          },
          children: [bB && "found" === pc.status && aB && (0, qB.jsx)(TV, {
            cosmetics: aB
          }), !(bB && "found" === pc.status && aB) && (0, qB.jsx)(sc.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, qB.jsx)(hc.e, {
            className: "StoreRecipientSearchInput",
            domRef: mB,
            placeholderText: Tc("store:searchName"),
            defaultValue: Zc,
            maxLength: Ec.h,
            onValueChange: function(cB) {
              "gift" !== lc && cB.trim() && (0, iB.h)({
                id: "store.mode",
                value: "gift"
              }), Ic.type(cB)
            },
            onEnter: () => {
              var cB;
              const Bc = null === (cB = mB.current) || void 0 === cB ? void 0 : cB.value.trim();
              Bc && Ic.choose(Bc, "typed")
            },
            blurOnEnter: !0
          }), bB && (0, qB.jsx)(mI, {
            recipient: pc
          }), bB && (0, qB.jsx)("div", {
            ...(0, tB.S)({
              disabled: Oc
            }),
            "aria-label": Tc("store:clearRecipient"),
            title: Tc("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: cB => {
              cB.stopPropagation(), Oc || Cc()
            },
            children: (0, qB.jsx)(sc.e, {
              name: "xmark"
            })
          })]
        }, Pc), oc && (0, qB.jsx)("div", {
          className: rB()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Wc
          }),
          role: "status",
          children: Tc(oc)
        })]
      })
    }
    var tI = nc(1819),
      SV = nc(2283),
      yI = nc(1845);
    const zI = [MV.o.yellow, MV.o.green, MV.o.aqua, MV.o.blue, MV.o.purple, MV.o.red];

    function pV(cB) {
      return "needsRecipient" === cB || "lookingUp" === cB || "gift" === cB || "recipientOwns" === cB
    }

    function hV(cB) {
      const {
        onKeyDown: Bc,
        ...nc
      } = (0, tB.S)();
      return {
        ...nc,
        "aria-label": cB,
        onKeyDown: cB => {
          cB.target === cB.currentTarget && (null === Bc || void 0 === Bc || Bc(cB))
        }
      }
    }

    function aI(cB) {
      let {
        text: Bc
      } = cB;
      return (0, qB.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Bc).map(((cB, Bc) => (0, qB.jsx)("span", {
          style: {
            color: zI[Bc % zI.length]
          },
          children: cB
        }, Bc)))
      })
    }

    function lV(cB) {
      let {
        state: Bc,
        item: nc,
        price: Vc,
        busy: Ic,
        highlight: Mc = !1,
        onAct: Pc,
        onNeedRecipient: Oc,
        onLogin: Tc = cI.b
      } = cB;
      const {
        t: fc
      } = (0, uc.x)(), mB = "superRank" === nc ? Wc.l.product.days : null, ec = cB => null === mB ? fc(cB ? "general:gift" : "general:buy") : fc(cB ? "store:giftDays" : "store:buyDays", {
        days: mB
      }), Sc = (cB, Bc) => (0, qB.jsxs)(qB.Fragment, {
        children: [Bc && (0, qB.jsx)("span", {
          className: "StoreCtaIcon",
          children: Bc
        }), (0, qB.jsx)("span", {
          className: "StoreCtaLabel",
          title: cB,
          children: cB
        }), (0, qB.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, qB.jsx)(yI.d, {
            amount: Vc
          })]
        })]
      });
      let yB;
      switch (Bc) {
        case "login":
          yB = (0, qB.jsx)(tB.n, {
            className: "StoreCtaButton",
            onClick: Tc,
            children: Sc(fc("store:logIn"))
          });
          break;
        case "owned":
          yB = (0, qB.jsx)(tB.g, {
            className: "StoreCtaButton",
            onClick: () => {
              Yc.d.set({
                openEverythingMenuName: GB.i.CUSTOMISATION
              })
            },
            children: (0, qB.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, qB.jsx)(sc.e, {
                name: "shirt"
              }), " ", fc("store:equip")]
            })
          });
          break;
        case "recipientOwns":
          yB = (0, qB.jsx)(tB.n, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, qB.jsx)("span", {
              className: "StoreCtaLabel",
              children: fc("store:alreadyOwns")
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          yB = (0, qB.jsx)(tB.n, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Bc || null === Vc,
            loading: "lookingUp" === Bc || Ic,
            onClick: Pc,
            analyticsClick: {
              id: "store.gift",
              value: nc
            },
            children: Sc(ec(!0), nV.c)
          });
          break;
        case "buy":
        case "recharge":
          yB = (0, qB.jsx)(tB.n, {
            className: "StoreCtaButton",
            loading: Ic,
            disabled: null === Vc,
            onClick: Pc,
            analyticsClick: {
              id: "store.buy",
              value: nc
            },
            children: Sc(ec(!1))
          })
      }
      return (0, qB.jsx)("div", {
        className: rB()("StoreCta", {
          StoreCtaHighlight: Mc
        }),
        onClick: cB => {
          cB.stopPropagation(), "needsRecipient" === Bc && Oc()
        },
        children: yB
      })
    }

    function YV() {
      const {
        t: cB
      } = (0, uc.x)();
      return (0, qB.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, qB.jsxs)("li", {
          children: [(0, qB.jsx)(sc.e, {
            name: "check"
          }), (0, qB.jsx)(aI, {
            text: cB("store:colourfulNames")
          })]
        }), (0, qB.jsxs)("li", {
          children: [(0, qB.jsx)(sc.e, {
            name: "check"
          }), cB("store:perkCapes")]
        }), (0, qB.jsxs)("li", {
          children: [(0, qB.jsx)(sc.e, {
            name: "check"
          }), cB("store:perkNoAdverts")]
        }), (0, qB.jsxs)("li", {
          children: [(0, qB.jsx)(sc.e, {
            name: "check"
          }), cB("store:perkFriends", {
            count: (0, jB.d)(["super"])
          })]
        })]
      })
    }

    function LV(cB) {
      let {
        daysLeft: Bc,
        totalDays: nc,
        urgent: Vc
      } = cB;
      const {
        t: Ic
      } = (0, uc.x)(), sc = nc > 0 ? Math.min(1, Math.max(.03, Bc / nc)) : 1;
      return (0, qB.jsxs)("div", {
        className: rB()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Vc
        }),
        children: [(0, qB.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Bc ? Ic("store:oneDayLeft") : Ic("store:daysLeft", {
            days: Bc
          })
        }), (0, qB.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, qB.jsx)("i", {
            style: {
              width: 100 * sc + "%"
            }
          })
        })]
      })
    }

    function gI(cB) {
      let {
        state: Bc,
        urgent: nc,
        daysLeft: Vc,
        totalDays: Ic,
        recipientSuperRankDaysLeft: Mc,
        busy: Pc,
        highlight: Oc,
        onOpen: Tc,
        onAct: fc,
        onNeedRecipient: mB,
        onLogin: ec
      } = cB;
      const {
        t: tB
      } = (0, uc.x)(), Sc = pV(Bc), {
        days: yB
      } = Wc.l.product, zB = tB("store:recipientHasSuperRank", {
        days: Mc,
        giftDays: yB
      });
      return (0, qB.jsxs)("div", {
        className: rB()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Sc,
          StoreSuperRankTileUrgent: "recharge" === Bc && nc,
          StoreSuperRankTileWithChip: Sc && "gift" === Bc && null !== Mc,
          StoreSuperRankTileGiftReady: "gift" === Bc
        }),
        ...hV(tB("homePage:superRank")),
        "data-store-item": "superRank",
        onClick: Tc,
        children: [(0, qB.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: "url(/textures/charSkins/previews/cape_super_preview.png)"
          }
        }), Sc && (0, qB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, qB.jsxs)("div", {
          className: "StoreTileContent",
          children: [Sc && "gift" === Bc && null !== Mc && (0, qB.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: zB,
            children: zB
          }), (0, qB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, qB.jsx)(sc.e, {
              name: "bolt"
            }), " ", tB("homePage:superRank")]
          }), Sc && (0, qB.jsx)("div", {
            className: "StoreTilePitch",
            children: tB("store:giftPitch", {
              days: yB
            })
          }), "recharge" === Bc && (0, qB.jsx)(LV, {
            daysLeft: Vc,
            totalDays: Ic,
            urgent: nc
          }), (0, qB.jsx)(YV, {}), (0, qB.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, qB.jsx)(lV, {
              state: Bc,
              item: "superRank",
              price: Wc.l.price,
              busy: Pc,
              highlight: Oc,
              onAct: fc,
              onNeedRecipient: mB,
              onLogin: ec
            }), "needsRecipient" === Bc && (0, qB.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: tB("store:pickRecipientFirst")
            }), "recharge" === Bc && nc && (0, qB.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Vc ? tB("store:endsInOneDay") : tB("store:endsInDays", {
                days: Vc
              })
            })]
          })]
        })]
      })
    }
    const UV = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function bI(cB) {
      var Bc;
      let {
        pack: nc,
        state: Vc,
        busy: Ic,
        onOpen: Mc,
        onAct: Pc,
        onNeedRecipient: Oc,
        onLogin: Tc
      } = cB;
      const {
        t: fc
      } = (0, uc.x)(), mB = Kn.d[nc], ec = Gn.k[nc], tB = Object.entries(SV.b).filter((cB => {
        let [, Bc] = cB;
        return Bc.cosmeticPack === nc
      })), Sc = pV(Vc), yB = null !== (Bc = mB.displayName) && void 0 !== Bc ? Bc : nc;
      return (0, qB.jsxs)("div", {
        className: rB()("StoreTile StorePackTile", mB.tier && UV[mB.tier], {
          StorePackTileOwned: "owned" === Vc,
          StorePackTileRecipientOwns: "recipientOwns" === Vc,
          StoreTileGift: Sc
        }),
        ...hV(yB),
        "data-store-item": nc,
        onClick: Mc,
        children: [ec && (0, qB.jsx)(ec, {}), (0, qB.jsx)("div", {
          className: "StorePackCharacters",
          children: tB.map((cB => {
            let [Bc] = cB;
            return (0, qB.jsx)("div", {
              className: "StorePackCharacter",
              style: {
                backgroundImage: `url(/textures/charSkins/previews/character_${Bc}_preview.png)`
              }
            }, Bc)
          }))
        }), (0, qB.jsx)("div", {
          className: "StoreTileScrim"
        }), Sc && (0, qB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, qB.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, qB.jsx)("div", {
            className: "StoreTileTitle",
            children: yB
          }), (0, qB.jsxs)("div", {
            className: "StoreTileMeta",
            children: [fc("store:itemCount", {
              count: (0, tI.m)(nc)
            }), "owned" === Vc && (0, qB.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, qB.jsx)(sc.e, {
                name: "check"
              }), " ", fc("general:owned")]
            })]
          }), (0, qB.jsx)(lV, {
            state: Vc,
            item: nc,
            price: (0, Wc.f)(nc),
            busy: Ic,
            onAct: Pc,
            onNeedRecipient: Oc,
            onLogin: Tc
          })]
        })]
      })
    }
    var ZV = nc(2291);

    function QV(cB) {
      let {
        layout: Bc,
        bundleGift: nc,
        superRankDaysLeft: Vc,
        superRankTotalDays: Ic,
        busy: rB,
        highlightItem: uc,
        onOpen: sc,
        onAct: Mc,
        onNeedRecipient: Pc,
        onLogin: Oc
      } = cB;
      return (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsx)(ZV.e, {
          className: "StoreSuperGems",
          gift: nc
        }), (0, qB.jsx)(gI, {
          state: Bc.superRank.state,
          urgent: Bc.superRank.urgent,
          daysLeft: Vc,
          totalDays: Ic,
          recipientSuperRankDaysLeft: Bc.recipientSuperRankDaysLeft,
          busy: rB,
          highlight: "superRank" === uc,
          onOpen: () => {
            sc("superRank")
          },
          onAct: () => {
            Mc("superRank")
          },
          onNeedRecipient: Pc,
          onLogin: () => {
            Oc("superRank")
          }
        }), (0, qB.jsx)("div", {
          className: "StorePackGrid",
          children: Bc.packs.map((cB => (0, qB.jsx)(bI, {
            pack: cB.pack,
            state: cB.state,
            busy: rB,
            onOpen: () => {
              sc(cB.pack)
            },
            onAct: () => {
              Mc(cB.pack)
            },
            onNeedRecipient: Pc,
            onLogin: () => {
              Oc(cB.pack)
            }
          }, cB.pack)))
        })]
      })
    }
    var CV = nc(2759),
      vI = nc(2298);

    function DV(cB) {
      let {
        onBack: Bc,
        cta: nc,
        recipient: Ic,
        afterCta: rB
      } = cB;
      const {
        t: Mc
      } = (0, uc.x)(), [Pc, Oc] = (0, Vc.useState)(!0), Tc = (0, Vc.useRef)(null);
      return (0, Vc.useEffect)((() => {
        const cB = Tc.current;
        let Bc;

        function nc() {
          Oc(!1)
        }

        function Vc() {
          clearTimeout(Bc), Bc = setTimeout((() => {
            cB.play().catch((cB => {
              (0, CV.b)("Failed to replay Super Rank video", cB)
            }))
          }), 3e3)
        }
        return cB.addEventListener("loadeddata", nc), cB.addEventListener("ended", Vc), () => {
          clearTimeout(Bc), cB.removeEventListener("loadeddata", nc), cB.removeEventListener("ended", Vc)
        }
      }), []), (0, qB.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, qB.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, qB.jsx)(tB.c, {
            className: "StoreDetailBackButton",
            onClick: Bc,
            padBack: !0,
            children: Mc("general:back")
          }), (0, qB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, qB.jsx)(sc.e, {
              name: "bolt"
            }), " ", Mc("homePage:superRank")]
          }), Ic]
        }), (0, qB.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, qB.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [Pc && (0, qB.jsx)(aB.e, {}), (0, qB.jsx)("video", {
              ref: Tc,
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              controls: !0,
              children: (0, qB.jsx)("source", {
                src: `${Cc.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
                type: "video/mp4"
              })
            })]
          }), (0, qB.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, qB.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, qB.jsx)(vI.c, {})
            }), (0, qB.jsxs)("div", {
              className: "StoreTileActions",
              children: [nc, rB]
            })]
          })]
        })]
      })
    }

    function NV(cB) {
      let {
        state: Bc,
        mode: nc,
        giftName: Vc,
        busy: Ic,
        highlight: rB,
        purchaseError: sc,
        onBack: Mc,
        onChooseRecipient: Pc,
        onAct: Oc,
        onLogin: Tc
      } = cB;
      const {
        t: fc
      } = (0, uc.x)();
      return (0, qB.jsx)(DV, {
        onBack: Mc,
        recipient: "gift" === nc && (0, qB.jsxs)(qB.Fragment, {
          children: [Vc && (0, qB.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: fc("store:giftFor", {
              name: Vc
            }),
            children: [nV.c, " ", fc("store:giftFor", {
              name: Vc
            })]
          }), !Vc && (0, qB.jsxs)("div", {
            ...(0, tB.S)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Pc,
            children: [nV.c, " ", fc("store:chooseRecipient")]
          })]
        }),
        cta: (0, qB.jsx)(lV, {
          state: Bc,
          item: "superRank",
          price: Wc.l.price,
          busy: Ic,
          highlight: rB,
          onAct: Oc,
          onNeedRecipient: Pc,
          onLogin: Tc
        }),
        afterCta: (0, qB.jsx)(qB.Fragment, {
          children: sc && (0, qB.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: fc(sc)
          })
        })
      })
    }
    const EV = {
      kind: "board"
    };
    let oV = !1;

    function WV(cB) {
      return "superRank" === cB.kind ? "superRank" : "pack" === cB.kind ? cB.pack : null
    }

    function wV(cB) {
      return "found" === cB.status || "error" === cB.status && "store:giftRecipientLookupFailed" === cB.error ? cB.name : null
    }
    const kI = (0, Vc.memo)((function(cB) {
      var Bc, nc;
      let {
        show: Ic
      } = cB;
      const {
        t: sc
      } = (0, uc.x)(), {
        userContext: Mc
      } = (0, fc.c)(), Pc = uV(Mc), [Oc, Tc] = (0, ec.e)(), {
        page: mB,
        urlMode: tB,
        goTo: Sc
      } = (0, sV.f)(), yB = WV(mB), [zB, pc] = (0, Vc.useState)(0), [hc, lc] = (0, Vc.useState)(null), [Yc, Lc] = (0, Vc.useState)(null), [gB, Uc] = (0, Vc.useState)(null), [bB, Zc] = (0, Vc.useState)(null), Cc = (0, Vc.useRef)(null), vB = (0, Vc.useRef)(null), Dc = (0, Vc.useRef)(!1), Nc = (0, Hc.q)(), Ec = (0, Vc.useRef)(0), oc = (0, Vc.useRef)(!1);

      function wc() {
        pc((cB => cB + 1))
      }(0, Vc.useEffect)((() => {
        if (Ic) {
          if (oV = !0, Nc && Nc.seq !== Ec.current) {
            Ec.current = Nc.seq;
            const cB = (0, Hc.e)(Nc);
            tB || Sc(cB), Zc(Nc.highlight ? WV(cB) : null), Lc(null), "gift" === Nc.mode && Nc.giftRecipientName ? Pc.choose(Nc.giftRecipientName, "prefilled") : "current" !== Nc.mode && Pc.clear(), "gift" !== Nc.mode || Nc.giftRecipientName || wc(), (0, iB.h)({
              id: "store.open",
              value: Nc.source
            })
          } else oc.current || (0, iB.h)({
            id: "store.open",
            value: "menuTab"
          });
          oc.current = !0
        } else oc.current = !1
      }), [Ic, Nc]), (0, Vc.useEffect)((() => {
        if (!bB) return;
        const cB = setTimeout((() => {
          Zc(null)
        }), 4e3);
        return () => {
          clearTimeout(cB)
        }
      }), [bB]), (0, Vc.useEffect)((() => {
        const cB = Cc.current;
        var Bc;
        if (Ic && cB)
          if (yB) vB.current = yB, null === (Bc = cB.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Bc || Bc.focus();
          else if (vB.current) {
          var nc;
          null === (nc = cB.querySelector(`[data-store-item="${vB.current}"]`)) || void 0 === nc || nc.focus(), vB.current = null
        }
      }), [yB, Ic]), (0, Vc.useEffect)((() => {
        Lc(null)
      }), [Pc.query]), (0, Vc.useEffect)((() => {
        if (!gB) return;
        const cB = setTimeout((() => {
          Uc(null)
        }), 8e3);
        return () => {
          clearTimeout(cB)
        }
      }), [gB]);
      const kB = Mc.superRankInfo,
        Jc = kB ? (0, Xc.Rb)(kB) : 0,
        jB = (0, nV.i)(Jc),
        Rc = Jc > 0,
        Kc = Mc.isLoggedIn(),
        xB = Mc.getOwnedCosmeticPacks(),
        dc = (0, nV.n)(Pc.query),
        Ac = (0, nV.g)({
          mode: dc,
          loggedIn: Kc,
          hasSuperRank: Rc,
          superRankDaysLeft: jB,
          ownedPacks: xB,
          packs: Kn.l,
          recipient: Pc.recipient
        });
      (0, Vc.useEffect)((() => {
        if (!Kc || !Ic) return;
        const cB = (0, Hc.o)();
        var Bc;
        cB && ("superRank" === (Bc = cB.item) || Kn.l.includes(Bc)) && ((0, iB.h)({
          id: "store.login_resume",
          value: cB.item
        }), (0, Hc.i)({
          mode: cB.mode,
          source: "loginResume",
          giftRecipientName: "gift" === cB.mode && cB.recipient ? cB.recipient : void 0,
          openItem: cB.item,
          highlight: !0
        }))
      }), [Kc, Ic]);
      const Gc = (0, nV.p)({
        hasSuperRank: Kc && Rc,
        superRankDaysLeft: jB,
        openedThisSession: oV || Ic
      });
      if ((0, Vc.useEffect)((() => {
          (0, Hc.l)(Gc)
        }), [Gc]), !Ic || !(0, Fc.siteSupportsPurchases)()) return null;
      const cn = Tc > Oc && Oc <= 700,
        BB = !cn && Tc <= 420,
        nB = "gift" === dc ? wV(Pc.recipient) : null,
        VB = null !== hc;

      function IB(cB) {
        (0, Hc.k)({
          item: cB,
          mode: dc,
          recipient: "gift" === dc ? Pc.query.trim() : ""
        }), (0, cI.b)()
      }

      function rn(cB, Bc) {
        (0, iB.h)({
          id: "store.purchase_done",
          value: `${Bc?"gift":"self"}:${cB}`
        }), Bc && (Pc.recordGift(Bc.name, cB), uB(Bc))
      }

      function uB(cB) {
        ! function(cB) {
          try {
            ZB.h.setItem(VV, (0, nV.u)(rI(), cB))
          } catch {}
        }({
          name: cB.name,
          cosmetics: cB.cosmetics
        }), Sc(EV), Uc((Bc => {
          var nc;
          return {
            name: cB.name,
            seq: (null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.seq) && void 0 !== nc ? nc : 0) + 1
          }
        }))
      }
      async function sB(cB) {
        var Bc, nc;
        if (Dc.current) return;
        if (!Kc) return void IB(cB);
        Lc(null), Zc(null);
        const Vc = "gift" === dc ? {
          name: wV(Pc.recipient),
          cosmetics: Pc.recipientCosmetics
        } : null;
        if (Vc && !Vc.name) return void wc();
        const Ic = "superRank" === cB ? Wc.l.id : (0, Wc.b)(cB);
        Dc.current = !0;
        const rB = await (0, BV.e)(Ic, null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.name) && void 0 !== Bc ? Bc : null);
        if (Dc.current = !1, !rB) return;
        lc(cB);
        const uc = await xV.b.purchase(Ic, null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc.name) && void 0 !== nc ? nc : null);
        lc(null), uc ? Lc(uc) : (rn(cB, Vc), Vc || (await (0, dn.flushClientAnalyticsEvents)(), (0, Fc.refreshWithoutConfirmation)("superRank" === cB ? "/super-rank-welcome" : `/pack-welcome/${cB}`)))
      }
      const MB = rB()("Store", {
        StoreGift: "gift" === dc,
        StorePortrait: cn,
        StoreCompact: BB
      });
      if (Mc === Qc.NULL_USER_CONTEXT) return (0, qB.jsx)("div", {
        className: MB,
        children: (0, qB.jsx)(aB.e, {})
      });
      if ("pack" === mB.kind) {
        const cB = mB.pack,
          Bc = Ac.packs.find((Bc => Bc.pack === cB));
        return (0, qB.jsx)("div", {
          ref: Cc,
          className: "CosmeticShopContainer",
          children: (0, qB.jsx)(Gn.d, {
            pack: cB,
            onBack: () => {
              Sc(EV)
            },
            onPurchased: Bc => {
              rn(cB, Bc ? {
                name: Bc,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === dc && nB && Bc && (0, qB.jsxs)(qB.Fragment, {
              children: [(0, qB.jsx)(lV, {
                state: Bc.state,
                item: cB,
                price: (PB = cB, "superRank" === PB ? Wc.l.price : (0, Wc.f)(PB)),
                busy: VB,
                onAct: () => {
                  sB(cB)
                },
                onNeedRecipient: () => {
                  Sc(EV), wc()
                }
              }), Yc && (0, qB.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: sc(Yc)
              })]
            }),
            ownedPacks: xB,
            startAsGift: "gift" === dc,
            initialGiftRecipient: "gift" === dc ? null !== nB && void 0 !== nB ? nB : Pc.query.trim() : "",
            highlightCta: bB === cB
          }, cB)
        })
      }
      var PB;
      return "superRank" === mB.kind ? (0, qB.jsx)("div", {
        ref: Cc,
        className: rB()(MB, "StoreDetailView"),
        children: (0, qB.jsx)(NV, {
          state: Ac.superRank.state,
          mode: dc,
          giftName: nB,
          busy: VB,
          highlight: "superRank" === bB,
          purchaseError: Yc,
          onBack: () => {
            Sc(EV)
          },
          onChooseRecipient: () => {
            Sc(EV), wc()
          },
          onAct: () => {
            sB("superRank")
          },
          onLogin: () => {
            IB("superRank")
          }
        })
      }) : (0, qB.jsxs)("div", {
        ref: Cc,
        className: MB,
        children: [(0, qB.jsx)("div", {
          className: "StoreTopRow",
          children: (0, qB.jsx)(eV, {
            selfName: Mc.getPlayerName(),
            giftRecipient: Pc,
            suggestionsVersion: null !== (Bc = null === gB || void 0 === gB ? void 0 : gB.seq) && void 0 !== Bc ? Bc : 0,
            pulseSignal: zB,
            disabled: VB
          })
        }), gB && (0, qB.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Uc(null)
          },
          children: [(0, qB.jsx)(An.c, {
            showSignal: gB.seq
          }), nV.c, " ", sc("store:giftSent", {
            name: gB.name
          })]
        }, gB.seq), !gB && Yc && (0, qB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: sc(Yc)
        }), (0, qB.jsx)(QV, {
          layout: Ac,
          bundleGift: "gift" === dc ? {
            recipientName: nB,
            lookingUp: "pending" === Pc.recipient.status,
            busy: VB,
            onNeedRecipient: wc,
            onSent: cB => {
              (0, iB.h)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), uB({
                name: cB,
                cosmetics: Pc.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: jB,
          superRankTotalDays: null !== (nc = null === kB || void 0 === kB ? void 0 : kB.superRankForDays) && void 0 !== nc ? nc : 0,
          busy: VB,
          highlightItem: bB,
          onOpen: function(cB) {
            (0, iB.h)({
              id: "store.item_open",
              value: cB
            }), Sc((0, Hc.f)(cB))
          },
          onAct: sB,
          onNeedRecipient: wc,
          onLogin: IB
        })]
      })
    }));
    var XV = nc(2099),
      HV = nc(7749),
      FV = nc(2167),
      JV = nc(2013),
      jI = nc(2065),
      RV = nc(2076),
      iI = nc(2079),
      KV = nc(2154),
      xI = nc(2135),
      dV = nc(2121),
      AV = nc(1888),
      GV = nc(1920),
      cr = nc(1912),
      BI = nc(1665),
      nI = nc(2081),
      VI = nc(1922);

    function II(cB) {
      let {
        show: Bc
      } = cB;
      return Bc ? (0, qB.jsx)(rr, {}) : null
    }

    function rr() {
      const {
        t: cB
      } = (0, uc.x)(), {
        followsLeader: Bc
      } = (0, JV.c)(), {
        loading: nc,
        friends: Ic,
        requests: Mc,
        invites: Pc
      } = (0, PV.m)(), {
        userContext: Oc
      } = (0, fc.c)(), [Tc, mB] = (0, Vc.useState)(VI.k);
      (0, Vc.useEffect)((() => {
        (0, VI.b)()
      }), []);
      const ec = Mc.map((cB => cB.name)),
        {
          state: Sc,
          recentRequesters: yB
        } = (0, xI.k)(),
        zB = new Map([...("loaded" === Sc.status ? Sc.recentPlayers : []).map((cB => [cB.preview.name, cB])), ...yB.map((cB => [cB.name, cB]))]),
        pc = (0, Vc.useRef)(null),
        [lc, Yc] = (0, Vc.useState)(""),
        [Lc, gB] = (0, Vc.useState)("Enter"),
        [Uc, bB] = (0, Vc.useState)(null);

      function Zc() {
        lc && (gB("Loading"), (0, cr.f)(lc, "social_menu").then((cB => {
          if (pc.current) switch (cB.kind) {
            case "sent":
              gB("Success");
              break;
            case "becameFriends":
              gB("BecameFriends");
              break;
            case "failed":
              bB(cB.message), gB("Error")
          }
        })))
      }
      return (0, Vc.useEffect)((() => {
        if ("Enter" === Lc || "Loading" === Lc) return;
        const cB = setTimeout((() => {
          pc.current.value = "", Yc(""), gB("Enter")
        }), "Success" === Lc ? 1e3 : 4e3);
        return () => {
          clearTimeout(cB)
        }
      }), [Lc]), (0, qB.jsx)("div", {
        className: "SocialMenu",
        children: (0, qB.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, qB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, qB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, qB.jsx)(iI.c, {
                label: cB("socialBar:addFriend")
              }), (0, qB.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, qB.jsxs)("div", {
                  className: rB()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Lc}`]: !0
                  }),
                  children: ["Loading" === Lc && (0, qB.jsx)(aB.e, {}), "Success" === Lc && (0, qB.jsx)(sc.e, {
                    name: "check"
                  }), "BecameFriends" === Lc && (0, qB.jsx)(qB.Fragment, {
                    children: cB("socialBar:nowFriends", {
                      playerName: lc
                    })
                  }), "Error" === Lc && Uc && (0, qB.jsx)(qB.Fragment, {
                    children: cB(Uc.translationKey, Uc.params)
                  })]
                }), (0, qB.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, qB.jsx)(hc.e, {
                    className: "PlayerSearchInput",
                    placeholderText: cB("socialBar:enterPlayerName"),
                    domRef: pc,
                    onValueChange: cB => {
                      Yc((0, Ec.m)(cB)), pc.current.value = (0, Ec.m)(cB)
                    },
                    onEnter: () => {
                      lc && (0, iB.h)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Zc()
                    }
                  }), (0, qB.jsxs)(tB.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Zc()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, qB.jsx)(sc.e, {
                      name: "user-plus"
                    }), " ", cB("socialBar:sendRequest")]
                  })]
                })]
              }), (0, qB.jsx)(nI.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Pc.length > 0 && (0, qB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, qB.jsx)(iI.c, {
                label: cB("socialBar:invites"),
                meta: Pc.length
              }), Pc.map((Bc => (0, qB.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, qB.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, qB.jsx)(AV.b, {
                    invite: Bc
                  })
                }), (0, qB.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, qB.jsx)(AV.e, {
                    invite: Bc
                  })
                }), (0, qB.jsx)(tB.n, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, GV.f)(Bc)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Bc.destination.kind}`
                  },
                  children: cB("general:join")
                }), (0, qB.jsx)(Jc.d, {
                  tooltipInner: (0, qB.jsx)(qB.Fragment, {
                    children: cB("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, qB.jsx)(tB.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Tc || void 0 === Tc ? void 0 : Tc.kind) && Tc.inviteId === Bc.id,
                    onClick: () => {
                      PV.e.declineInvite(Bc.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Bc.destination.kind}`
                    },
                    children: (0, qB.jsx)(sc.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, Bc.id)))]
            }), (0, qB.jsxs)("div", {
              className: rB()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !nc && 0 === Mc.length
              }),
              children: [(0, qB.jsx)(iI.c, {
                label: (0, qB.jsxs)(qB.Fragment, {
                  children: [(0, qB.jsx)(sc.e, {
                    name: BI.h
                  }), " ", cB("socialBar:requests")]
                }),
                meta: (0, qB.jsxs)(qB.Fragment, {
                  children: [Mc.length, Mc.length === jB.m && (0, qB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: cB("socialBar:limitReached")
                  })]
                })
              }), nc && (0, qB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, qB.jsx)(aB.e, {})
              }), !nc && 0 === Mc.length && (0, qB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: cB("socialBar:noFriendRequests")
              }), !nc && Mc.length > 0 && (0, qB.jsx)("div", {
                className: "PlayerRows",
                children: (0, qB.jsx)(dV.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Mc],
                  children: Mc.map(((Bc, nc) => {
                    const Vc = zB.get(Bc.name);
                    return (0, qB.jsxs)(RV.f, {
                      playerSocialPreview: Bc,
                      zIndex: Mc.length - nc,
                      padDefaultFocus: (0, VI.h)(Tc, Bc.name, nc),
                      status: Vc && (0, qB.jsx)(KV.b, {
                        gameNameWithVariation: Vc.gameNameWithVariation,
                        isPrivateLobby: Vc.isPrivateLobby
                      }),
                      children: [(0, qB.jsx)(Jc.d, {
                        tooltipInner: (0, qB.jsx)(qB.Fragment, {
                          children: cB("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, qB.jsx)(tB.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mB((0, VI.f)(ec, nc)), (0, cr.c)(Bc.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, qB.jsx)(sc.e, {
                            name: "check"
                          })
                        })
                      }), (0, qB.jsx)(Jc.d, {
                        tooltipInner: (0, qB.jsx)(qB.Fragment, {
                          children: cB("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, qB.jsx)(tB.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            mB((0, VI.f)(ec, nc)), (0, cr.c)(Bc.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, qB.jsx)(sc.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Bc.name}_${Bc.isError}`)
                  }))
                })
              })]
            }), (0, qB.jsx)(KV.h, {})]
          }), (0, qB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, qB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, qB.jsx)(iI.c, {
                label: cB("socialBar:party")
              }), (0, qB.jsx)(jI.c, {})]
            }), (0, qB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, qB.jsx)(iI.c, {
                label: (0, qB.jsxs)(qB.Fragment, {
                  children: [(0, qB.jsx)(sc.e, {
                    name: BI.d
                  }), " ", cB("socialBar:friends")]
                }),
                meta: (0, qB.jsxs)(qB.Fragment, {
                  children: [Ic.length, Ic.length >= (0, jB.d)(Oc.getPlayerRanks()) && (0, qB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: cB("socialBar:limitReached")
                  })]
                })
              }), nc && (0, qB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, qB.jsx)(aB.e, {})
              }), !nc && 0 === Ic.length && (0, qB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: cB("socialBar:noFriends")
              }), !nc && Ic.length > 0 && (0, qB.jsx)("div", {
                className: "PlayerRows",
                children: (0, qB.jsx)(dV.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Ic],
                  children: Ic.map(((cB, nc) => (0, qB.jsx)(RV.f, {
                    playerSocialPreview: cB,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: cB => {
                      PV.e.removeFriendFromState(cB)
                    },
                    zIndex: Ic.length - nc,
                    children: (0, qB.jsx)(RV.b, {
                      friend: cB,
                      followsLeader: Bc,
                      analyticsSurface: "social_menu"
                    })
                  }, `${cB.name}_${cB.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var uI = nc(1992);
    const sI = cB => {
        let {
          action: Bc,
          padAction: nc
        } = cB;
        const {
          isTouchScreen: Vc
        } = (0, Yc.j)(["isTouchScreen"]), Ic = (0, In.s)();
        return Vc && !Ic ? null : (0, qB.jsx)(xn.c, {
          className: "EverythingMenuTabKey",
          noaAction: Bc,
          padHidesKey: !0,
          padMenuShortcut: nc
        })
      },
      MI = (0, Vc.memo)((function() {
        const {
          t: cB
        } = (0, uc.x)(), {
          gameState: Bc,
          openEverythingMenuName: nc,
          initSdkSelectorFinished: Ic
        } = (0, Yc.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: sc
        } = (0, fc.c)(), Mc = (0, Fc.siteSupportsPurchases)(), Pc = (0, Hc.t)(), Oc = (cB, Bc) => (0, qB.jsx)(sI, {
          action: cB,
          padAction: Bc
        }), [Tc, mB] = (0, Vc.useState)(null), ec = (0, Vc.useRef)(null), yB = {
          ..."inGame" === Bc ? {} : (0, tB.S)({
            focusOnClick: !1
          }),
          ...mV.e
        }, zB = null !== nc, pc = nc !== GB.i.COSMETIC_SHOP;
        async function hc() {
          await async function() {
            if (!Tc) return;
            await Tc(), mB(null)
          }(), Yc.d.set({
            openEverythingMenuName: null
          })
        }
        const aB = (0, Vc.useMemo)((() => "inGame" === Bc ? {
          text: cB("settingsMenu:exitGame"),
          onClick: () => {
            (0, HV.e)()
          }
        } : (0, Zc.c)() ? {
          text: cB("settingsMenu:exitGame"),
          onClick: () => {
            vB.m.discordActivity().then((cB => {
              cB.exit("User exited the game")
            }))
          }
        } : null), [Bc, cB]);
        const lc = (0, qB.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            hc()
          },
          children: (0, qB.jsx)(tB.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, qB.jsx)(en.d, {
          showing: zB,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: nc === GB.i.SHOP,
          doGameplayStartStopOnShow: "inGame" === Bc,
          children: (0, qB.jsx)(Sn.c, {
            className: "EverythingMenuContainer",
            show: zB,
            children: (0, qB.jsx)(tV.b, {
              close: () => {
                hc()
              },
              togglePointerLock: !1,
              children: (0, qB.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Jn.l)(nc) && (0, qB.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, qB.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [aB && (0, qB.jsx)(tB.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        aB.onClick()
                      },
                      children: aB.text
                    }), zB && Mc && (0, qB.jsx)("div", {
                      ...yB,
                      className: "EverythingMenuWallet",
                      title: cB("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Hc.i)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, qB.jsx)(XV.g, {})
                    })]
                  }), (0, qB.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, qB.jsxs)("div", {
                      ...yB,
                      "data-pad-tab": !0,
                      "data-pad-selected": nc === GB.i.SETTINGS ? "true" : void 0,
                      className: rB()("EverythingMenuTab", {
                        EverythingMenuTabActive: nc === GB.i.SETTINGS
                      }),
                      onClick: () => {
                        Yc.d.set({
                          openEverythingMenuName: GB.i.SETTINGS
                        })
                      },
                      children: [cB("general:settings"), Oc("OpenSettings", "pause")]
                    }), (0, qB.jsxs)("div", {
                      ...yB,
                      "data-pad-tab": !0,
                      "data-pad-selected": nc === GB.i.CUSTOMISATION ? "true" : void 0,
                      className: rB()("EverythingMenuTab", {
                        EverythingMenuTabActive: nc === GB.i.CUSTOMISATION
                      }),
                      onClick: () => {
                        Yc.d.set({
                          openEverythingMenuName: GB.i.CUSTOMISATION
                        })
                      },
                      children: [cB("general:player"), Oc("OpenCharacterCustomization")]
                    }), Sc.featureFlags.useSocialFeatures && (0, qB.jsxs)("div", {
                      ...yB,
                      "data-pad-tab": !0,
                      "data-pad-selected": nc === GB.i.SOCIAL ? "true" : void 0,
                      className: rB()("EverythingMenuTab", {
                        EverythingMenuTabActive: nc === GB.i.SOCIAL
                      }),
                      ...(0, iB.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, nc === GB.i.SOCIAL),
                      onClick: () => {
                        Yc.d.set({
                          openEverythingMenuName: GB.i.SOCIAL
                        })
                      },
                      children: [cB("socialBar:social"), (0, qB.jsx)(uI.e, {})]
                    }), Mc && (0, qB.jsxs)("div", {
                      ...yB,
                      "data-pad-tab": !0,
                      "data-pad-selected": nc === GB.i.COSMETIC_SHOP ? "true" : void 0,
                      className: rB()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: nc === GB.i.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        Yc.d.set({
                          openEverythingMenuName: GB.i.COSMETIC_SHOP
                        })
                      },
                      children: [(0, qB.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: cB("store:title")
                      }), "dot" === Pc && (0, qB.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Bc && (0, qB.jsxs)("div", {
                      ...yB,
                      "data-pad-tab": !0,
                      "data-pad-selected": nc === GB.i.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: rB()("EverythingMenuTab", {
                        EverythingMenuTabActive: nc === GB.i.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        Yc.d.set({
                          openEverythingMenuName: GB.i.LOBBY_LEADERBOARD
                        })
                      },
                      children: [cB("general:lobby"), Oc("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, qB.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: lc
                  })]
                }), (0, Jn.l)(nc) && lc, (0, qB.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Bc ? "0.85" : "1"
                  },
                  children: [(0, qB.jsx)(Pn, {
                    show: nc === GB.i.SETTINGS,
                    setBeforeResumeCallback: mB
                  }), (0, qB.jsx)(fn, {
                    show: nc === GB.i.CUSTOMISATION
                  }), (0, qB.jsx)(Vc.Suspense, {
                    fallback: null,
                    children: (0, qB.jsx)(Nn, {
                      show: nc === GB.i.SHOP
                    })
                  }), (0, qB.jsx)(iV, {
                    show: nc === GB.i.LOBBY_LEADERBOARD
                  }), (0, qB.jsx)(kI, {
                    show: nc === GB.i.COSMETIC_SHOP
                  }), (0, qB.jsx)(II, {
                    show: nc === GB.i.SOCIAL
                  })]
                }), !(0, Sc.isMobileApp)() && (0, yV.d)(sc.getPlayerRanks()) && (0, qB.jsx)(Sn.c, {
                  ref: ec,
                  className: "EverythingMenuBannerDiv",
                  show: pc,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, qB.jsx)(FV.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: ec
                    },
                    showing: zB && pc,
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
  3959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(926),
      uc = nc(1188),
      sc = nc(2672),
      Mc = nc(145),
      Pc = nc(2716),
      qB = nc(2701),
      Oc = nc(957);

    function Tc(cB) {
      let {
        game: Bc
      } = cB;
      const nc = (0, Mc.l)() ? "large" : "small",
        Vc = (0, Pc.f)(Bc, nc),
        Tc = (0, sc.c)(Vc),
        fc = void 0 !== Tc.blurhash;
      return (0, Oc.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Tc.isLoading && !fc && (0, Oc.jsx)(uc.e, {
          loaderType: "Secondary"
        }), !Tc.failed && (null !== Tc.src || fc) && (0, Oc.jsx)("div", {
          className: Ic()("SchematicImage", qB.g, {
            SchematicImageFadeIn: Tc.fadeIn && !fc
          }),
          style: (0, qB.d)(Tc),
          children: (0, Oc.jsx)(qB.b, {
            image: Tc
          })
        }), Tc.failed && (0, Oc.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Oc.jsx)(rB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4076: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => fc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(4006),
      sc = nc(1188),
      Mc = nc(1051),
      Pc = nc(2333),
      qB = nc(2458),
      Oc = nc(926),
      Tc = nc(957);

    function fc(cB) {
      let {
        folderName: Bc,
        onTexturePackUpdated: Ic,
        disabled: fc = !1,
        maxFileSizeMb: mB,
        packOwner: ec
      } = cB;
      const {
        t: tB
      } = (0, Mc.x)(), [Sc, yB] = (0, Vc.useState)(!1), [zB, pc] = (0, Vc.useState)(null), [hc, aB] = (0, Vc.useState)(null), lc = (0, Vc.useRef)(null);
      const {
        getRootProps: Yc,
        getInputProps: Lc,
        isDragActive: gB
      } = (0, uc.b)({
        onDrop: async function(cB) {
          yB(!0);
          try {
            const Bc = await (0, Pc.o)(cB);
            if ("customGame" === ec && (0, qB.f)(Bc)) return void pc(tB(qB.b));
            if (void 0 !== mB) {
              const cB = JSON.stringify(Bc).length / 1048576;
              if (cB > mB) return void pc(`File size is too large. Max size is ${mB}MB. Current size is ${cB}MB.`)
            }
            pc(null), aB(null), Ic(Bc), lc.current = Bc,
              function(cB, Bc) {
                const Vc = cB.modelOverrides;
                Vc && Promise.all([nc.e(184), nc.e(183)]).then((() => nc(33032))).then((nc => {
                  let {
                    packDisplayName: Ic,
                    refusedPackModels: rB,
                    packModelSummary: uc
                  } = nc;
                  const sc = Ic(cB.metaData);
                  Bc(uc(sc, rB(sc, Vc, !1)))
                })).catch((cB => {
                  console.error("Checking the texture pack's models failed:", cB)
                }))
              }(Bc, (cB => {
                lc.current === Bc && aB(cB)
              }))
          } catch {
            pc("Invalid Texture Pack Folder")
          } finally {
            yB(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: fc
      });
      return (0, Tc.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Tc.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [tB("settingsMenu:customTextureWarning"), ".", (0, Tc.jsx)("br", {}), tB("settingsMenu:viewDocumentation"), ":", " ", (0, Tc.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), zB && (0, Tc.jsxs)("div", {
          className: "CustomTextureError",
          children: [tB("general:error"), ": ", zB]
        }), hc && (0, Tc.jsx)("div", {
          className: "CustomTextureError",
          children: hc
        }), (0, Tc.jsxs)("div", {
          ...Yc({
            className: rB()("CustomTextureFolderUpload", {
              ActiveDrag: gB,
              Disabled: fc
            })
          }),
          children: [(0, Tc.jsx)("input", {
            ...Lc({
              webkitdirectory: "true"
            })
          }), Sc && (0, Tc.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Tc.jsx)(sc.e, {})
          }), !Sc && !gB && Bc && (0, Tc.jsxs)(Tc.Fragment, {
            children: [(0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Tc.jsx)(Oc.e, {
                name: "folder-image"
              })
            }), (0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Bc
            })]
          }), !Sc && (gB || !Bc) && (0, Tc.jsxs)(Tc.Fragment, {
            children: [(0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Tc.jsx)(Oc.e, {
                name: "up-from-bracket"
              })
            }), (0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4033: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      g: () => ec
    });
    var Vc = nc(2333),
      Ic = nc(2339),
      rB = nc(73),
      uc = nc(912),
      sc = nc.n(uc),
      Mc = nc(1188),
      Pc = nc(2329),
      qB = nc(1194),
      Oc = nc(4035),
      Tc = nc(4076),
      fc = nc(957);

    function mB(cB) {
      var Bc;
      let {
        setApplySettingsCallback: nc
      } = cB;
      const [, uc] = (0, rB.useReducer)((cB => cB + 1), 0), sc = (0, rB.useRef)(!1), Mc = (0, rB.useRef)(null);

      function mB() {
        Mc.current !== Pc.c.getId() || Pc.c.getId() === Ic.o.CUSTOM && sc.current ? nc((() => Oc.i)) : nc(null)
      }
      async function tB(cB) {
        if (Pc.c.getId() !== cB.metaData.id) {
          if (Pc.c.getId() === Ic.o.CUSTOM && Pc.c.getFromFolderName()) {
            const cB = qB.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await cB.getResult()) return
          }
          Pc.c.setFromJson(cB, "player"), Pc.c.saveTexturePack(), mB(), uc()
        }
      }(0, rB.useEffect)((() => {
        Mc.current = Pc.c.getId()
      }), []);
      const Sc = Vc.e,
        yB = [Sc, ...Object.values(Ic.o).filter((cB => cB !== Sc))];
      return (0, fc.jsx)(fc.Fragment, {
        children: (0, fc.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, fc.jsx)("div", {
            className: "TexturePackList",
            children: yB.map((cB => (0, fc.jsx)(ec, {
              id: cB,
              isSelected: cB === Pc.c.getId(),
              setSelected: tB
            }, cB)))
          }), Pc.c.getId() === Ic.o.CUSTOM && (0, fc.jsx)(Tc.b, {
            folderName: null !== (Bc = Pc.c.getFromFolderName()) && void 0 !== Bc ? Bc : null,
            onTexturePackUpdated: function(cB) {
              Pc.c.setFromJson(cB, "player"), Pc.c.saveTexturePack(), sc.current = !0, mB(), uc()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function ec(cB) {
      let {
        id: Bc,
        isSelected: nc,
        setSelected: uc,
        disabled: Pc = !1
      } = cB;
      const [qB, Oc] = (0, rB.useState)(!0), [Tc, mB] = (0, rB.useState)(""), [ec, tB] = (0, rB.useState)(""), [Sc, yB] = (0, rB.useState)(""), zB = (0, rB.useRef)({});
      return (0, rB.useEffect)((() => {
        (0, Vc.m)(Bc).then((cB => {
          var Bc;
          cB && (zB.current = cB, Oc(!1), mB(zB.current.metaData.name), tB(zB.current.metaData.author), yB(null !== (Bc = zB.current.metaData.previewImage) && void 0 !== Bc ? Bc : ""))
        })).catch((cB => {
          console.warn(`Failed to fetch texture pack ${Bc}`, cB)
        }))
      }), [Bc]), (0, fc.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Pc || void 0,
        className: sc()("TexturePack", {
          Selected: nc,
          Custom: Bc === Ic.o.CUSTOM,
          Disabled: Pc
        }),
        onClick: () => {
          qB || Pc || uc(zB.current)
        },
        children: [(0, fc.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Sc ? `url(${Sc})` : void 0
          }
        }), qB && (0, fc.jsx)("div", {
          className: "TexturePackName",
          children: (0, fc.jsx)(Mc.e, {})
        }), !qB && Tc && (0, fc.jsx)("div", {
          className: "TexturePackName",
          children: Tc
        }), !qB && ec && (0, fc.jsx)("div", {
          className: "TexturePackAuthor",
          children: ec
        })]
      })
    }
  },
  3937: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => tB
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(3731),
      uc = nc(1051),
      sc = nc(926),
      Mc = nc(1255),
      Pc = nc(1314),
      qB = nc(1194),
      Oc = nc(1959),
      Tc = nc(957);
    const fc = {
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

    function mB(cB) {
      let {
        platform: Bc
      } = cB;
      const nc = "youtube" === Bc;
      return (0, Tc.jsxs)("span", {
        className: Ic()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: nc
        }),
        children: [nc && (0, Tc.jsx)(Oc.c, {
          variant: "white"
        }), !nc && (0, Tc.jsx)(sc.e, {
          name: fc[Bc].icon,
          kit: "brands"
        })]
      })
    }

    function ec(cB) {
      let {
        platform: Bc,
        link: nc,
        editable: Vc,
        userContext: Ic,
        onLinksUpdated: Oc
      } = cB;
      const {
        t: ec
      } = (0, uc.x)(), tB = fc[Bc];
      if (!nc && !Vc) return null;

      function Sc() {
        var cB;
        if (!Ic || !Oc) return;
        qB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tB.name
            }
          },
          prefixText: rB.t[Bc],
          placeholderText: "playBloxd",
          initialValue: null !== (cB = null === nc || void 0 === nc ? void 0 : nc.handle) && void 0 !== cB ? cB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: nc ? "general:remove" : void 0
        }).getResult().then((async cB => {
          if ("notificationTornDown" !== cB && null !== cB) try {
            "submit" === cB.type ? await Pc.e.setSocialLink(Ic, Bc, cB.value) : await Pc.e.clearSocialLink(Ic, Bc), Oc()
          } catch (nc) {
            console.error("Failed to update social link", nc), qB.NotificationProvider.showAlertPopup({
              title: nc.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (nc) {
        const cB = `@${nc.handle}`;
        return (0, Tc.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tB.color
          },
          href: nc.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Tc.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Tc.jsx)(mB, {
              platform: Bc
            }), (0, Tc.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Tc.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: cB
              })
            })]
          }), Vc && (0, Tc.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Mc.S)({
              stopPropagation: !0
            }),
            onClick: cB => {
              cB.stopPropagation(), cB.preventDefault(), Sc()
            },
            children: (0, Tc.jsx)(sc.e, {
              name: "pen-to-square"
            })
          }), !Vc && (0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Tc.jsx)(sc.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Tc.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tB.color
        },
        ...(0, Mc.S)(),
        onClick: () => {
          Sc()
        },
        children: [(0, Tc.jsx)(mB, {
          platform: Bc
        }), (0, Tc.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tB.name
          }), (0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ec("homePage:profileSocialLinkAdd")
          })]
        }), (0, Tc.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Tc.jsx)(sc.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tB(cB) {
      let {
        socialLinks: Bc,
        editable: nc = !1,
        userContext: Vc,
        onLinksUpdated: Ic
      } = cB;
      if (!nc && 0 === Bc.length) return null;
      const uc = new Map(Bc.map((cB => [cB.platform, cB]))),
        sc = nc ? rB.r : Bc.map((cB => cB.platform));
      return (0, Tc.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Tc.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: sc.map((cB => (0, Tc.jsx)(ec, {
            platform: cB,
            link: uc.get(cB),
            editable: nc,
            userContext: Vc,
            onLinksUpdated: Ic
          }, cB)))
        })
      })
    }
  },
  8122: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    const Vc = new Set(["chunkBorders"])
  },
  8120: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ALL_DEV_TOOLS: () => uc,
      coreDevTools: () => Pc,
      devTools: () => Mc
    });
    var Vc = nc(263),
      Ic = nc(1152),
      rB = nc(8122);
    const uc = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function sc() {
      const {
        noaDevTools: cB
      } = await nc.e(215).then((() => nc(39049)));
      return cB
    }
    const Mc = new class {
        constructor() {
          this.loadHost = sc, this.tools = uc
        }
        setHost(cB) {
          this.tools = null === cB ? uc : cB.tools, this.loadHost = null === cB ? sc : async () => cB
        }
        supports(cB) {
          return this.tools.has(cB)
        }
        async downloadScene(cB, Bc) {
          const nc = await this.loadHost();
          await nc.downloadScene(cB, Bc)
        }
        async setAmbientLightIntensity(cB) {
          const Bc = await this.loadHost();
          await Bc.setAmbientLightIntensity(cB)
        }
      },
      Pc = {
        tools: rB.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Vc.l && Mc.setHost(Pc), (0, Ic.i)((() => {
      Mc.setHost(Pc)
    }))
  },
  8143: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return cB && !Bc
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  8177: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(174),
      Ic = nc(1534),
      rB = nc(51);
    const uc = 2;

    function sc() {
      let cB = Mc("chunkHorizAddDist", Vc.e.defaultChunkHorizAddDistance),
        Bc = Mc("chunkVertAddDist", Vc.e.defaultChunkVertAddDistance);
      return cB = (0, Ic.h)(cB, uc, Vc.e.maxChunkHorizAddDistance), Bc = (0, Ic.h)(Bc, uc, Vc.e.maxChunkVertAddDistance), [cB, Bc]
    }

    function Mc(cB, Bc) {
      const nc = rB.h.getItem(cB),
        Vc = "number" === typeof nc || "string" === typeof nc ? Number(nc) : Number.NaN;
      return Number.isFinite(Vc) ? Vc : Bc
    }
  },
  7795: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => Mc
    });
    var Vc = nc(27),
      Ic = nc(1177),
      rB = nc(107);
    const uc = {
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
      autorunReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      autorunLocked: {
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

    function sc() {
      return (0, rB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Mc = new class {
      constructor(cB) {
        this.deps = cB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(cB, Bc) {
        var nc;
        if (!this.deps.enabled()) return;
        const Vc = uc[cB],
          Ic = null !== Bc && void 0 !== Bc ? Bc : Vc.pattern;
        if (null === Ic) return void console.warn("No vibration pattern for", cB);
        const rB = this.deps.now();
        rB - this.lastAnyAt < 40 && Vc.priority < this.playingPriority || rB - (null !== (nc = this.lastAt.get(cB)) && void 0 !== nc ? nc : -1 / 0) < Vc.minGapMs || rB < this.playingUntil && Vc.priority < this.playingPriority || (this.lastAt.set(cB, rB), this.lastAnyAt = rB, this.playingUntil = rB + Ic.reduce(((cB, Bc) => cB + Bc), 0), this.playingPriority = Vc.priority, this.deps.vibrate(Ic))
      }
    }({
      vibrate: cB => {
        navigator.vibrate([...cB])
      },
      now: () => performance.now(),
      enabled: () => sc() && Vc.d.get("isTouchScreen") && Vc.d.get("clientEscMenuOptions").vibration && !(0, Ic.g)()
    })
  },
  8175: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      e: () => Ic,
      i: () => rB
    });
    const Vc = 1024,
      Ic = 1024 * Vc;

    function rB(cB) {
      return (cB / Ic).toFixed(1)
    }
  },
  8172: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      c: () => sc,
      f: () => uc,
      j: () => qB,
      n: () => Oc,
      o: () => Pc
    });
    var Vc = nc(174);
    const Ic = 32 * nc(8175).e,
      rB = 6144,
      uc = 4608,
      sc = 512,
      Mc = 4;

    function Pc(cB) {
      return "number" === typeof cB && cB < Mc
    }

    function qB(cB) {
      return Math.floor(Ic * cB / rB)
    }

    function Oc(cB) {
      const Bc = cB - Math.floor(cB / 6);
      let nc = Vc.e.maxChunkHorizAddDistance,
        Ic = Vc.e.maxChunkVertAddDistance;
      if (Tc(nc + 1, Ic + 1) <= Bc) return null;
      for (; Tc(nc + 1, Ic + 1) > Bc && (nc > 0 || Ic > 0);) nc > Ic ? nc-- : Ic--;
      return {
        horizontal: nc,
        vertical: Ic
      }
    }

    function Tc(cB, Bc) {
      const nc = Math.max(cB, Bc);
      let Vc = 0;
      for (let Ic = -nc; Ic <= nc; Ic++)
        for (let rB = -nc; rB <= nc; rB++)
          for (let uc = -nc; uc <= nc; uc++) fc(cB, Bc, Ic, rB, uc) && Vc++;
      return Vc
    }

    function fc(cB, Bc, nc, Vc, Ic) {
      const rB = nc * nc + Ic * Ic;
      return cB === Bc ? rB + Vc * Vc <= cB * cB : cB > Bc ? Math.abs(Vc) <= Bc && rB + Vc * Vc <= cB * cB : rB <= cB * cB && rB + Vc * Vc <= Bc * Bc
    }
  },
  8155: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => Mc
    });
    var Vc = nc(27);
    const Ic = 24,
      rB = "farNametags",
      uc = 1e5;

    function sc() {
      var cB;
      return null === (cB = Vc.d.get("showDistantNametags")) || void 0 === cB || cB
    }

    function Mc() {
      var cB;
      return null !== (cB = function() {
        const cB = new URLSearchParams(window.location.search).get(rB),
          Bc = null === cB || "" === cB ? NaN : Number(cB);
        return Number.isFinite(Bc) && Bc >= 0 ? Math.min(Bc, uc) : null
      }()) && void 0 !== cB ? cB : sc() ? 0 : Ic
    }
  },
  8166: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc,
      i: () => qB,
      m: () => sc,
      o: () => Tc
    });
    var Vc = nc(107),
      Ic = nc(51),
      rB = nc(8172);
    const uc = "rendererGpuVendor";

    function sc() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let Mc = null;

    function Pc() {
      return Mc ??= Oc(), Mc
    }

    function qB() {
      var cB;
      return null !== (cB = Mc) && void 0 !== cB ? cB : Oc()
    }

    function Oc() {
      var cB;
      const Bc = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        nc = Ic.h.getItem(uc),
        Mc = null !== (cB = (0, Vc.peekGpuVendor)()) && void 0 !== cB ? cB : "string" === typeof nc ? nc : null;
      return !sc() && function(cB, Bc) {
        return (0, rB.o)(cB) || "powervr" === Bc
      }(Bc, Mc)
    }

    function Tc(cB) {
      const Bc = (0, Vc.normaliseGpuVendor)(cB);
      Ic.h.getItem(uc) !== Bc && Ic.h.setItem(uc, Bc)
    }
  },
  8203: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => uc
    });
    const Vc = [{
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

    function Ic(cB) {
      let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof cB) {
        if (!Number.isFinite(cB)) return "0";
        if (Math.abs(cB) < 100) {
          const Bc = cB < 0 ? "-" : "",
            nc = Math.abs(cB);
          return nc >= 10 ? `${Bc}${nc.toFixed(1).replace(/\.0$/,"")}` : `${Bc}${nc.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Bc = BigInt(Math.floor(cB))
      } else Bc = cB;
      const Ic = Bc < 0n ? -Bc : Bc,
        rB = Bc < 0n ? "-" : "",
        uc = Ic.toString();
      if (uc.length <= nc) return `${rB}${uc}`;
      const sc = 3 * Math.floor((uc.length - 1) / 3);
      if (sc < 3) return `${rB}${uc}`;
      if (sc > 3 * Vc.length) {
        const cB = uc[0],
          Bc = uc.slice(1, 3).replace(/0+$/, "");
        return `${rB}${Bc?`${cB}.${Bc}`:cB}e${uc.length-1}`
      }
      const {
        threshold: Mc,
        suffix: Pc
      } = Vc[Vc.length - sc / 3], qB = Ic / Mc, Oc = Number(1000n * (Ic % Mc) / Mc), Tc = Number(qB) + Oc / 1e3;
      let fc;
      return fc = Tc >= 100 ? Math.floor(Tc).toString() : Tc >= 10 ? Tc.toFixed(1).replace(/\.0$/, "") : Tc.toFixed(2).replace(/\.?0+$/, ""), `${rB}${fc}${Pc}`
    }
    const rB = Vc.map((cB => {
      let {
        threshold: Bc,
        suffix: nc
      } = cB;
      return {
        threshold: Number(Bc),
        suffix: nc
      }
    })).filter((cB => {
      let {
        threshold: Bc
      } = cB;
      return Number.isFinite(Bc)
    }));

    function uc(cB) {
      const Bc = Math.abs(cB),
        nc = cB < 0 ? "-" : "";
      for (const {
          threshold: Vc,
          suffix: Ic
        }
        of rB)
        if (Bc >= Vc) {
          const cB = Bc / Vc;
          if (cB >= 1e3) return `${nc}${Bc.toExponential(2).replace("e+","e")}`;
          let rB;
          return rB = cB >= 100 ? Math.floor(cB).toString() : cB >= 10 ? cB.toFixed(1).replace(/\.0$/, "") : cB.toFixed(2).replace(/\.?0+$/, ""), `${nc}${rB}${Ic}`
        } return `${nc}${Bc}`
    }
  },
  8196: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB,
      f: () => Tc,
      h: () => Oc,
      k: () => uc,
      o: () => Pc,
      p: () => Mc
    });
    var Vc = nc(302);
    const Ic = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      rB = {
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

    function uc(cB) {
      var Bc;
      return null !== (Bc = rB[cB]) && void 0 !== Bc ? Bc : {
        translationKey: ""
      }
    }
    const sc = {
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

    function Mc(cB) {
      return Ic.includes(cB)
    }

    function Pc(cB) {
      var Bc;
      return !0 === (null === cB || void 0 === cB || null === (Bc = cB.customAttributes) || void 0 === Bc ? void 0 : Bc.cannotEnchant)
    }

    function qB(cB, Bc) {
      const {
        max: nc
      } = sc[cB].at(-1);
      return Bc <= nc
    }

    function Oc(cB) {
      const Bc = Math.sin(cB / 80),
        nc = cB => {
          if (cB <= 0) return 0;
          if (cB > 1) return 1;
          let Bc = 0;
          const nc = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Vc = 0; Vc < nc.length; Vc++) {
            Bc += (Vc % 2 === 0 ? 1 : -1) * nc[Vc] * Math.pow(cB, 2 + Vc) / (2 + Vc)
          }
          return 72 * Bc
        },
        Vc = .3 - .78 * Bc,
        Ic = .5 - .78 * Bc,
        rB = .6 - .7 * Bc,
        uc = .8 - .6 * Bc;
      let sc = nc(Vc),
        Mc = nc(Ic) - sc,
        Pc = nc(rB) - Mc - sc,
        qB = nc(uc) - Pc - Mc - sc;
      Vc < .041 && (Mc /= 1 - sc, Pc /= 1 - sc, qB /= 1 - sc, sc = 0), Ic < .041 && (sc /= 1 - Mc, Pc /= 1 - Mc, qB /= 1 - Mc, Mc = 0), rB < .041 && (sc /= 1 - Pc, Mc /= 1 - Pc, qB /= 1 - Pc, Pc = 0), uc < .041 && (sc /= 1 - qB, Mc /= 1 - qB, Pc /= 1 - qB, qB = 0);
      return {
        commonProb: sc,
        uncommonProb: Mc,
        rareProb: Pc,
        epicProb: qB,
        legendaryProb: 1 - (qB + Pc + Mc + sc)
      }
    }

    function Tc(cB, Bc) {
      const {
        min: nc,
        max: Ic
      } = sc[cB][Bc], rB = Vc.b.sampleUniformIntDistribution(nc, Ic, "includeMax");
      return {
        ...Oc(rB),
        level: rB
      }
    }
  },
  7665: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return !cB.hidden && (Bc || !cB.isRewardedAd)
    }

    function Ic(cB) {
      return "object" === typeof cB ? cB.option : cB
    }

    function rB(cB, Bc) {
      var nc;
      if ("dropdown" === (null === (nc = cB.userInput) || void 0 === nc ? void 0 : nc.type) && "object" === typeof cB.userInput.dropdownOptions[0]) {
        for (const nc of cB.userInput.dropdownOptions)
          if (Ic(nc) === Bc) return "object" === typeof nc ? nc.cost : cB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", cB, "input:", Bc)
      }
      return cB.cost
    }

    function uc(cB, Bc, nc) {
      var Vc;
      const Ic = null !== (Vc = nc.excludedPlayers) && void 0 !== Vc ? Vc : [Bc];
      return cB.filter((cB => !Ic.includes(cB)))
    }
    nc.d(Bc, {
      c: () => rB,
      d: () => Ic,
      e: () => uc,
      f: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);