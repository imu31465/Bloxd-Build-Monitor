export const id = 95;
export const ids = [95];
export const modules = {
  4527: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => FU
    });
    var tU = gU(56),
      pU = gU(1481),
      EU = gU(311),
      PU = gU(1229),
      TU = gU(1554),
      qU = gU(1271),
      KU = gU(1501),
      cU = gU(1461),
      GU = gU(2456);
    const jU = {
      retries: 2,
      minTimeout: 2e3
    };
    var uU = gU(1099),
      CU = gU(1551),
      hU = gU(1112),
      QU = gU(1777),
      eU = gU(1181),
      WU = gU(1217),
      fU = gU(3176),
      xU = gU(1326),
      mU = gU(1412),
      IU = gU(1475),
      JU = gU(2393),
      wU = gU(2405),
      nU = gU(4532),
      bU = gU(1998),
      oU = gU(1037),
      ZU = gU.n(oU),
      aU = gU(1049),
      YU = gU(4540),
      BU = gU(21),
      VU = gU(1800),
      rU = gU(3312),
      XU = gU(1869),
      vU = gU(3278),
      dU = gU(96),
      HU = gU(4214),
      SU = gU(1090);
    const sU = [nU];

    function yU(UU) {
      let {
        icon: RU,
        label: gU,
        value: tU
      } = UU;
      return (0, SU.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, SU.jsx)(aU.c, {
          name: RU,
          className: "PlayerProfileStatIcon"
        }), (0, SU.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, SU.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: gU
          }), (0, SU.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: tU
          })]
        })]
      })
    }

    function kU(UU) {
      let {
        profile: RU
      } = UU;
      const {
        t: gU,
        selectedLanguage: tU
      } = (0, eU.B)();
      let pU = gU("homePage:profileUnknown");
      if (RU.lastOnline) {
        const UU = (0, eU.n)(tU.code, "homePage:profileTimeAgo");
        pU = gU("homePage:profileTimeAgo", {
          time: (0, EU.kb)(UU, RU.lastOnline, Date.now())
        })
      }
      let PU = gU("homePage:profileUnknown");
      return RU.accountCreatedAt && (PU = new Date(RU.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, SU.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, SU.jsx)(yU, {
          icon: "hourglass",
          label: gU("homePage:profileTimePlayed"),
          value: (0, rU.c)(RU.totalPlayMinutes)
        }), (0, SU.jsx)(yU, {
          icon: "wifi",
          label: gU("homePage:profileLastOnline"),
          value: pU
        }), (0, SU.jsx)(yU, {
          icon: "calendar",
          label: gU("homePage:profileJoined"),
          value: PU
        })]
      })
    }

    function FU() {
      const {
        t: UU
      } = (0, eU.B)(), RU = (0, IU.useNavigatePreserveSearch)(), gU = (0, uU.k)(), {
        playerName: nU,
        playerUrlName: oU
      } = (0, pU.y)(), rU = (0, pU.s)(), yU = (0, PU.g)(rU.pathname), FU = yU && ("urlId" in yU ? `urlId:${yU.urlId}` : `name:${yU.lowerCaseName}`), iU = (0, tU.useRef)(FU);
      iU.current = FU;
      const {
        userContext: AU,
        isUserContextUpdating: zU
      } = (0, hU.e)(), MU = (0, tU.useRef)(null), DU = (0, tU.useRef)(null), LU = (0, tU.useRef)(null), NU = (0, tU.useRef)(!1), lU = (0, tU.useRef)((0, EU.ec)(sU)), [OU, UR] = (0, tU.useState)((() => {
        const UU = yU && wU.c.peek(AU, yU);
        return UU ? {
          status: "loaded",
          profile: UU,
          playerKey: FU
        } : {
          status: "loading"
        }
      })), [RR, gR] = (0, tU.useState)(0);
      (0, tU.useEffect)(JU.f, []), (0, tU.useEffect)((() => {
        VU.gameBridge.send("leaveGame", {
          reloadPath: null
        }), BU.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [rU.key]);
      const tR = () => {
        const UU = (0, IU.getPreviousLocation)();
        null === UU || UU.startsWith("/play") ? (0, IU.navigateToHomePage)() : RU(-1)
      };
      (0, HU.c)(tR), (0, tU.useEffect)((() => {
        var UU;
        if (zU) return;
        if (!yU) return void UR({
          status: "notFound",
          playerKey: FU
        });
        const RU = "urlId" in yU && (null === (UU = DU.current) || void 0 === UU ? void 0 : UU.urlId) === yU.urlId && LU.current === AU;
        if (RU && NU.current) return;
        const gU = RU ? null : wU.c.peek(AU, yU);
        let tU = !1;
        const pU = UU => "loaded" === UU.status && (UU.playerKey === FU || "urlId" in yU && UU.profile.urlId === yU.urlId);
        return gU ? (LU.current = AU, NU.current = !1, UR({
          status: "loaded",
          profile: gU,
          playerKey: FU
        }), wU.c.invalidate(yU)) : UR((UU => pU(UU) ? UU : {
          status: "loading"
        })), async function(UU, RU) {
          if ("lowerCaseName" in RU && RU.lowerCaseName.length > qU.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await cU.c.getPlayerProfile(UU, RU, jU)
            }
          } catch (gU) {
            return (0, GU.d)(gU) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", gU), {
              status: "failed"
            })
          }
        }(AU, yU).then((UU => {
          tU || ("loaded" === UU.status && (LU.current = AU, NU.current = !0), UR((RU => "failed" === UU.status && pU(RU) ? RU : {
            ...UU,
            playerKey: FU
          })))
        })), () => {
          tU = !0
        }
      }), [zU, FU, AU, RR]);
      const pR = "loading" === OU.status || OU.playerKey === FU || "loaded" === OU.status && !!yU && "urlId" in yU && OU.profile.urlId === yU.urlId ? OU : {
          status: "loading"
        },
        ER = "loaded" === pR.status ? pR.profile : null,
        PR = "loading" === pR.status ? null : function(UU) {
          if ("loaded" === UU.status) {
            const {
              profile: RU
            } = UU;
            return (0, KU.S)({
              urlId: RU.urlId,
              name: RU.player.name,
              ranks: RU.player.ranks,
              socialLinks: RU.socialLinks
            })
          }
          return "notFound" === UU.status ? (0, KU.Z)() : null
        }(pR),
        TR = null !== ER && void 0 !== ER && ER.urlId ? (0, PU.j)({
          urlId: ER.urlId,
          name: ER.player.name
        }) : null;
      (0, CU.g)(TR);
      const qR = null !== ER && void 0 !== ER && ER.player.cosmetics.profileEffect ? bU.d[ER.player.cosmetics.profileEffect] : void 0,
        KR = null !== ER && !zU && AU.getPlayerName().toLowerCase() === ER.player.name.toLowerCase(),
        cR = (0, XU.b)(null === ER || void 0 === ER ? void 0 : ER.player.name),
        GR = KR && AU.playerHasRank("youtuber");
      DU.current = ER;
      const jR = (0, tU.useCallback)((() => {
          yU && (wU.c.invalidate(yU), wU.c.get(AU, yU).then((UU => {
            iU.current === FU && (NU.current = !0, UR({
              status: "loaded",
              profile: UU,
              playerKey: FU
            }))
          })).catch((UU => {
            console.error("Failed to refresh user profile", UU)
          })))
        }), [FU, AU]),
        uR = (0, tU.useCallback)((() => {
          var UU;
          const RU = DU.current;
          return !(!RU || null === (UU = MU.current) || void 0 === UU || !UU.isReady()) && (MU.current.setAllCosmetics(RU.player.cosmetics), !0)
        }), []);
      return (0, tU.useEffect)((() => {
        if (!ER) return;
        let UU, RU = !1;
        const gU = () => {
          RU || uR() || (UU = setTimeout(gU, 100))
        };
        return gU(), () => {
          RU = !0, clearTimeout(UU)
        }
      }), [ER, uR]), (0, SU.jsxs)("div", {
        className: ZU()("PlayerProfile", {
          PlayerProfilePortrait: gU
        }),
        children: [PR && (0, SU.jsx)(TU.c, {
          meta: PR
        }), (0, SU.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [qR && (0, SU.jsx)(qR, {}), !qR && (0, SU.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${lU.current})`
            }
          })]
        }), (0, SU.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, SU.jsx)(mU.d, {
            onClick: tR,
            children: UU("general:back")
          }), ER && !zU && !KR && dU.featureFlags.useSocialFeatures && (0, SU.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, SU.jsx)(vU.c, {
              playerName: ER.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === pR.status && (0, SU.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, SU.jsx)(xU.d, {})
        }), ("notFound" === pR.status || "failed" === pR.status) && (0, SU.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, SU.jsx)(aU.c, {
            name: "face-dizzy"
          }), (0, SU.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === pR.status ? UU("socialBar:playerNotFound", {
              playerName: null !== oU && void 0 !== oU ? oU : nU
            }) : UU("playerProfile:loadFailed")
          }), "failed" === pR.status && (0, SU.jsx)(mU.e, {
            onClick: () => {
              gR((UU => UU + 1))
            },
            children: UU("general:tryAgain")
          })]
        }), ER && (0, SU.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, SU.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, SU.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, SU.jsx)(QU.e, {
                text: (0, WU.w)(ER.player.ranks, ER.player.name, ER.player.nameColour),
                friendBadgeFor: cR ? ER.player.name : void 0
              })
            }), (0, SU.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, SU.jsx)(tU.Suspense, {
                fallback: (0, SU.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, SU.jsx)(xU.d, {})
                }),
                children: (0, SU.jsx)(JU.b, {
                  ref: MU,
                  onReady: () => {
                    uR()
                  }
                })
              })
            })]
          }), (0, SU.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, SU.jsx)(kU, {
              profile: ER
            }), (ER.socialLinks.length > 0 || GR) && (0, SU.jsx)(YU.c, {
              socialLinks: ER.socialLinks,
              editable: GR,
              userContext: AU,
              onLinksUpdated: jR
            }), (0, SU.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, SU.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: UU("homePage:profileReleasedGames")
              }), 0 === ER.releasedGames.length && (0, SU.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: UU("homePage:profileNoReleasedGames")
              }), ER.releasedGames.length > 0 && (0, SU.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ER.releasedGames.map((UU => (0, SU.jsx)(fU.f, {
                  source: {
                    type: "preview",
                    preview: UU
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, UU.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
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
  4532: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);