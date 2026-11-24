export const id = 97;
export const ids = [97];
export const modules = {
  4889: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => eD
    });
    var pD = wD(58),
      sD = wD(1523),
      KD = wD(351),
      rD = wD(1238),
      LD = wD(1620),
      cD = wD(1270),
      gD = wD(1548),
      RD = wD(1495),
      AD = wD(2676);
    const UD = {
      retries: 2,
      minTimeout: 2e3
    };
    var fD = wD(1116),
      ID = wD(1616),
      BD = wD(1127),
      GD = wD(1895),
      hD = wD(1200),
      nD = wD(1232),
      MD = wD(3473),
      OD = wD(1346),
      JD = wD(1447),
      ED = wD(1511),
      QD = wD(2618),
      XD = wD(2627),
      VD = wD(4893),
      PD = wD(2144),
      CD = wD(1044),
      xD = wD.n(CD),
      TD = wD(1057),
      bD = wD(4901),
      jD = wD(20),
      dD = wD(1925),
      SD = wD(3649),
      iD = wD(2006),
      lD = wD(3588),
      WD = wD(103),
      ND = wD(4572),
      ZD = wD(1096);
    const yD = [VD];

    function kD(DD) {
      let {
        icon: zD,
        label: wD,
        value: pD
      } = DD;
      return (0, ZD.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, ZD.jsx)(TD.e, {
          name: zD,
          className: "PlayerProfileStatIcon"
        }), (0, ZD.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, ZD.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: wD
          }), (0, ZD.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: pD
          })]
        })]
      })
    }

    function mD(DD) {
      let {
        profile: zD
      } = DD;
      const {
        t: wD,
        selectedLanguage: pD
      } = (0, hD.E)();
      let sD = wD("homePage:profileUnknown");
      if (zD.lastOnline) {
        const DD = (0, hD.n)(pD.code, "homePage:profileTimeAgo");
        sD = wD("homePage:profileTimeAgo", {
          time: (0, KD.fb)(DD, zD.lastOnline, Date.now())
        })
      }
      let rD = wD("homePage:profileUnknown");
      return zD.accountCreatedAt && (rD = new Date(zD.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, ZD.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, ZD.jsx)(kD, {
          icon: "hourglass",
          label: wD("homePage:profileTimePlayed"),
          value: (0, SD.d)(zD.totalPlayMinutes)
        }), (0, ZD.jsx)(kD, {
          icon: "wifi",
          label: wD("homePage:profileLastOnline"),
          value: sD
        }), (0, ZD.jsx)(kD, {
          icon: "calendar",
          label: wD("homePage:profileJoined"),
          value: rD
        })]
      })
    }

    function eD() {
      const {
        t: DD
      } = (0, hD.E)(), zD = (0, ED.useNavigatePreserveSearch)(), wD = (0, fD.g)(), {
        playerName: VD,
        playerUrlName: CD
      } = (0, sD.C)(), SD = (0, sD.s)(), kD = (0, rD.g)(SD.pathname), eD = kD && ("urlId" in kD ? `urlId:${kD.urlId}` : `name:${kD.lowerCaseName}`), oD = (0, pD.useRef)(eD);
      oD.current = eD;
      const {
        userContext: aD,
        isUserContextUpdating: uD
      } = (0, BD.c)(), vD = (0, pD.useRef)(null), tD = (0, pD.useRef)(null), FD = (0, pD.useRef)(null), YD = (0, pD.useRef)(!1), HD = (0, pD.useRef)((0, KD.dc)(yD)), [qD, Dz] = (0, pD.useState)((() => {
        const DD = kD && XD.c.peek(aD, kD);
        return DD ? {
          status: "loaded",
          profile: DD,
          playerKey: eD
        } : {
          status: "loading"
        }
      })), [zz, wz] = (0, pD.useState)(0);
      (0, pD.useEffect)(QD.e, []), (0, pD.useEffect)((() => {
        dD.gameBridge.send("leaveGame", {
          reloadPath: null
        }), jD.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [SD.key]);
      const pz = () => {
        const DD = (0, ED.getPreviousLocation)();
        null === DD || DD.startsWith("/play") ? (0, ED.navigateToHomePage)() : zD(-1)
      };
      (0, ND.e)(pz), (0, pD.useEffect)((() => {
        var DD;
        if (uD) return;
        if (!kD) return void Dz({
          status: "notFound",
          playerKey: eD
        });
        const zD = "urlId" in kD && (null === (DD = tD.current) || void 0 === DD ? void 0 : DD.urlId) === kD.urlId && FD.current === aD;
        if (zD && YD.current) return;
        const wD = zD ? null : XD.c.peek(aD, kD);
        let pD = !1;
        const sD = DD => "loaded" === DD.status && (DD.playerKey === eD || "urlId" in kD && DD.profile.urlId === kD.urlId);
        return wD ? (FD.current = aD, YD.current = !1, Dz({
          status: "loaded",
          profile: wD,
          playerKey: eD
        }), XD.c.invalidate(kD)) : Dz((DD => sD(DD) ? DD : {
          status: "loading"
        })), async function(DD, zD) {
          if ("lowerCaseName" in zD && zD.lowerCaseName.length > cD.l) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await RD.d.getPlayerProfile(DD, zD, UD)
            }
          } catch (wD) {
            return (0, AD.c)(wD) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", wD), {
              status: "failed"
            })
          }
        }(aD, kD).then((DD => {
          pD || ("loaded" === DD.status && (FD.current = aD, YD.current = !0), Dz((zD => "failed" === DD.status && sD(zD) ? zD : {
            ...DD,
            playerKey: eD
          })))
        })), () => {
          pD = !0
        }
      }), [uD, eD, aD, zz]);
      const sz = "loading" === qD.status || qD.playerKey === eD || "loaded" === qD.status && !!kD && "urlId" in kD && qD.profile.urlId === kD.urlId ? qD : {
          status: "loading"
        },
        Kz = "loaded" === sz.status ? sz.profile : null,
        rz = "loading" === sz.status ? null : function(DD) {
          if ("loaded" === DD.status) {
            const {
              profile: zD
            } = DD;
            return (0, gD._)({
              urlId: zD.urlId,
              name: zD.player.name,
              ranks: zD.player.ranks,
              socialLinks: zD.socialLinks
            })
          }
          return "notFound" === DD.status ? (0, gD.eb)() : null
        }(sz),
        Lz = null !== Kz && void 0 !== Kz && Kz.urlId ? (0, rD.j)({
          urlId: Kz.urlId,
          name: Kz.player.name
        }) : null;
      (0, ID.h)(Lz);
      const cz = null !== Kz && void 0 !== Kz && Kz.player.cosmetics.profileEffect ? PD.g[Kz.player.cosmetics.profileEffect] : void 0,
        gz = null !== Kz && !uD && aD.getPlayerName().toLowerCase() === Kz.player.name.toLowerCase(),
        Rz = (0, iD.d)(null === Kz || void 0 === Kz ? void 0 : Kz.player.name),
        Az = gz && aD.playerHasRank("youtuber");
      tD.current = Kz;
      const Uz = (0, pD.useCallback)((() => {
          kD && (XD.c.invalidate(kD), XD.c.get(aD, kD).then((DD => {
            oD.current === eD && (YD.current = !0, Dz({
              status: "loaded",
              profile: DD,
              playerKey: eD
            }))
          })).catch((DD => {
            console.error("Failed to refresh user profile", DD)
          })))
        }), [eD, aD]),
        fz = (0, pD.useCallback)((() => {
          var DD;
          const zD = tD.current;
          return !(!zD || null === (DD = vD.current) || void 0 === DD || !DD.isReady()) && (vD.current.setAllCosmetics(zD.player.cosmetics), !0)
        }), []);
      return (0, pD.useEffect)((() => {
        if (!Kz) return;
        let DD, zD = !1;
        const wD = () => {
          zD || fz() || (DD = setTimeout(wD, 100))
        };
        return wD(), () => {
          zD = !0, clearTimeout(DD)
        }
      }), [Kz, fz]), (0, ZD.jsxs)("div", {
        className: xD()("PlayerProfile", {
          PlayerProfilePortrait: wD
        }),
        children: [rz && (0, ZD.jsx)(LD.d, {
          meta: rz
        }), (0, ZD.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [cz && (0, ZD.jsx)(cz, {}), !cz && (0, ZD.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${HD.current})`
            }
          })]
        }), (0, ZD.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, ZD.jsx)(JD.d, {
            onClick: pz,
            children: DD("general:back")
          }), Kz && !uD && !gz && WD.featureFlags.useSocialFeatures && (0, ZD.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, ZD.jsx)(lD.b, {
              playerName: Kz.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === sz.status && (0, ZD.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, ZD.jsx)(OD.e, {})
        }), ("notFound" === sz.status || "failed" === sz.status) && (0, ZD.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, ZD.jsx)(TD.e, {
            name: "face-dizzy"
          }), (0, ZD.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === sz.status ? DD("socialBar:playerNotFound", {
              playerName: null !== CD && void 0 !== CD ? CD : VD
            }) : DD("playerProfile:loadFailed")
          }), "failed" === sz.status && (0, ZD.jsx)(JD.f, {
            onClick: () => {
              wz((DD => DD + 1))
            },
            children: DD("general:tryAgain")
          })]
        }), Kz && (0, ZD.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, ZD.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, ZD.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, ZD.jsx)(GD.e, {
                text: (0, nD.v)(Kz.player.ranks, Kz.player.name, Kz.player.nameColour),
                friendBadgeFor: Rz ? Kz.player.name : void 0
              })
            }), (0, ZD.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, ZD.jsx)(pD.Suspense, {
                fallback: (0, ZD.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, ZD.jsx)(OD.e, {})
                }),
                children: (0, ZD.jsx)(QD.c, {
                  ref: vD,
                  onReady: () => {
                    fz()
                  }
                })
              })
            })]
          }), (0, ZD.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, ZD.jsx)(mD, {
              profile: Kz
            }), (Kz.socialLinks.length > 0 || Az) && (0, ZD.jsx)(bD.e, {
              socialLinks: Kz.socialLinks,
              editable: Az,
              userContext: aD,
              onLinksUpdated: Uz
            }), (0, ZD.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, ZD.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: DD("homePage:profileReleasedGames")
              }), 0 === Kz.releasedGames.length && (0, ZD.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: DD("homePage:profileNoReleasedGames")
              }), Kz.releasedGames.length > 0 && (0, ZD.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Kz.releasedGames.map((DD => (0, ZD.jsx)(MD.g, {
                  source: {
                    type: "preview",
                    preview: DD
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, DD.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4901: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4665),
      rD = wD(1200),
      LD = wD(1057),
      cD = wD(1447),
      gD = wD(1495),
      RD = wD(1355),
      AD = wD(2492),
      UD = wD(1096);
    const fD = {
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

    function ID(DD) {
      let {
        platform: zD
      } = DD;
      const wD = "youtube" === zD;
      return (0, UD.jsxs)("span", {
        className: sD()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: wD
        }),
        children: [wD && (0, UD.jsx)(AD.e, {
          variant: "white"
        }), !wD && (0, UD.jsx)(LD.e, {
          name: fD[zD].icon,
          kit: "brands"
        })]
      })
    }

    function BD(DD) {
      let {
        platform: zD,
        link: wD,
        editable: pD,
        userContext: sD,
        onLinksUpdated: AD
      } = DD;
      const {
        t: BD
      } = (0, rD.E)(), GD = fD[zD];
      if (!wD && !pD) return null;

      function hD() {
        var DD;
        if (!sD || !AD) return;
        RD.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: GD.name
            }
          },
          prefixText: KD.u[zD],
          placeholderText: "playBloxd",
          initialValue: null !== (DD = null === wD || void 0 === wD ? void 0 : wD.handle) && void 0 !== DD ? DD : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: wD ? "general:remove" : void 0
        }).getResult().then((async DD => {
          if ("notificationTornDown" !== DD && null !== DD) try {
            "submit" === DD.type ? await gD.d.setSocialLink(sD, zD, DD.value) : await gD.d.clearSocialLink(sD, zD), AD()
          } catch (wD) {
            console.error("Failed to update social link", wD), RD.NotificationProvider.showAlertPopup({
              title: wD.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (wD) {
        const DD = `@${wD.handle}`;
        return (0, UD.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: GD.color
          },
          href: wD.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, UD.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, UD.jsx)(ID, {
              platform: zD
            }), (0, UD.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, UD.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: DD
              })
            })]
          }), pD && (0, UD.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, cD.ib)({
              stopPropagation: !0
            }),
            onClick: DD => {
              DD.stopPropagation(), DD.preventDefault(), hD()
            },
            children: (0, UD.jsx)(LD.e, {
              name: "pen-to-square"
            })
          }), !pD && (0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, UD.jsx)(LD.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, UD.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: GD.color
        },
        ...(0, cD.ib)(),
        onClick: () => {
          hD()
        },
        children: [(0, UD.jsx)(ID, {
          platform: zD
        }), (0, UD.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: GD.name
          }), (0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: BD("homePage:profileSocialLinkAdd")
          })]
        }), (0, UD.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, UD.jsx)(LD.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function GD(DD) {
      let {
        socialLinks: zD,
        editable: wD = !1,
        userContext: pD,
        onLinksUpdated: sD
      } = DD;
      if (!wD && 0 === zD.length) return null;
      const rD = new Map(zD.map((DD => [DD.platform, DD]))),
        LD = wD ? KD.t : zD.map((DD => DD.platform));
      return (0, UD.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, UD.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: LD.map((DD => (0, UD.jsx)(BD, {
            platform: DD,
            link: rD.get(DD),
            editable: wD,
            userContext: pD,
            onLinksUpdated: sD
          }, DD)))
        })
      })
    }
  },
  4893: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);