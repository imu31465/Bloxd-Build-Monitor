export const id = 112;
export const ids = [112];
export const modules = {
  5368: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => aB
    });
    var YB = GB(56),
      DB = GB(1571),
      QB = GB(353),
      oB = GB(1234),
      jB = GB(1675),
      yB = GB(1262),
      JB = GB(1591),
      MB = GB(1540),
      PB = GB(2946);
    const zB = {
      retries: 2,
      minTimeout: 2e3
    };
    var lB = GB(1106),
      pB = GB(1673),
      qB = GB(1112),
      ZB = GB(2e3),
      NB = GB(1175),
      RB = GB(1217),
      WB = GB(3926),
      AB = GB(1375),
      VB = GB(1485),
      SB = GB(1560),
      nB = GB(2893),
      UB = GB(2903),
      fB = GB(5375),
      kB = GB(2289),
      dB = GB(1090),
      KB = GB.n(dB),
      uB = GB(1383),
      mB = GB(5377),
      IB = GB(16),
      FB = GB(2023),
      iB = GB(4062),
      LB = GB(2131),
      gB = GB(4034),
      rB = GB(92),
      XB = GB(4967),
      wB = GB(1282);
    const EB = [fB];

    function cB(BB) {
      let {
        icon: OB,
        label: GB,
        value: YB
      } = BB;
      return (0, wB.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, wB.jsx)(uB.b, {
          name: OB,
          className: "PlayerProfileStatIcon"
        }), (0, wB.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, wB.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: GB
          }), (0, wB.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: YB
          })]
        })]
      })
    }

    function hB(BB) {
      let {
        profile: OB
      } = BB;
      const {
        t: GB,
        selectedLanguage: YB
      } = (0, NB.H)();
      let DB = GB("homePage:profileUnknown");
      if (OB.lastOnline) {
        const BB = (0, NB.s)(YB.code, "homePage:profileTimeAgo");
        DB = GB("homePage:profileTimeAgo", {
          time: (0, QB.eb)(BB, OB.lastOnline, Date.now())
        })
      }
      let oB = GB("homePage:profileUnknown");
      return OB.accountCreatedAt && (oB = new Date(OB.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, wB.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, wB.jsx)(cB, {
          icon: "hourglass",
          label: GB("homePage:profileTimePlayed"),
          value: (0, iB.e)(OB.totalPlayMinutes)
        }), (0, wB.jsx)(cB, {
          icon: "wifi",
          label: GB("homePage:profileLastOnline"),
          value: DB
        }), (0, wB.jsx)(cB, {
          icon: "calendar",
          label: GB("homePage:profileJoined"),
          value: oB
        })]
      })
    }

    function aB() {
      const {
        t: BB
      } = (0, NB.H)(), OB = (0, SB.useNavigatePreserveSearch)(), GB = (0, lB.g)(), {
        playerName: fB,
        playerUrlName: dB
      } = (0, DB.A)(), iB = (0, DB.r)(), cB = (0, oB.i)(iB.pathname), aB = cB && ("urlId" in cB ? `urlId:${cB.urlId}` : `name:${cB.lowerCaseName}`), eB = (0, YB.useRef)(aB);
      eB.current = aB;
      const {
        userContext: TB,
        isUserContextUpdating: bB
      } = (0, qB.d)(), CB = (0, YB.useRef)(null), HB = (0, YB.useRef)(null), vB = (0, YB.useRef)(null), sB = (0, YB.useRef)(!1), xB = (0, YB.useRef)((0, QB.mc)(EB)), [tB, BO] = (0, YB.useState)((() => {
        const BB = cB && UB.b.peek(TB, cB);
        return BB ? {
          status: "loaded",
          profile: BB,
          playerKey: aB
        } : {
          status: "loading"
        }
      })), [OO, GO] = (0, YB.useState)(0);
      (0, YB.useEffect)(nB.f, []), (0, YB.useEffect)((() => {
        FB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), IB.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [iB.key]);
      const YO = () => {
        const BB = (0, SB.getPreviousLocation)();
        null === BB || BB.startsWith("/play") ? (0, SB.navigateToHomePage)() : OB(-1)
      };
      (0, XB.e)(YO), (0, YB.useEffect)((() => {
        var BB;
        if (bB) return;
        if (!cB) return void BO({
          status: "notFound",
          playerKey: aB
        });
        const OB = "urlId" in cB && (null === (BB = HB.current) || void 0 === BB ? void 0 : BB.urlId) === cB.urlId && vB.current === TB;
        if (OB && sB.current) return;
        const GB = OB ? null : UB.b.peek(TB, cB);
        let YB = !1;
        const DB = BB => "loaded" === BB.status && (BB.playerKey === aB || "urlId" in cB && BB.profile.urlId === cB.urlId);
        return GB ? (vB.current = TB, sB.current = !1, BO({
          status: "loaded",
          profile: GB,
          playerKey: aB
        }), UB.b.invalidate(cB)) : BO((BB => DB(BB) ? BB : {
          status: "loading"
        })), async function(BB, OB) {
          if ("lowerCaseName" in OB && OB.lowerCaseName.length > yB.l) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await MB.b.getPlayerProfile(BB, OB, zB)
            }
          } catch (GB) {
            return (0, PB.d)(GB) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", GB), {
              status: "failed"
            })
          }
        }(TB, cB).then((BB => {
          YB || ("loaded" === BB.status && (vB.current = TB, sB.current = !0), BO((OB => "failed" === BB.status && DB(OB) ? OB : {
            ...BB,
            playerKey: aB
          })))
        })), () => {
          YB = !0
        }
      }), [bB, aB, TB, OO]);
      const DO = "loading" === tB.status || tB.playerKey === aB || "loaded" === tB.status && !!cB && "urlId" in cB && tB.profile.urlId === cB.urlId ? tB : {
          status: "loading"
        },
        QO = "loaded" === DO.status ? DO.profile : null,
        oO = "loading" === DO.status ? null : function(BB) {
          if ("loaded" === BB.status) {
            const {
              profile: OB
            } = BB;
            return (0, JB.F)({
              urlId: OB.urlId,
              name: OB.player.name,
              ranks: OB.player.ranks,
              socialLinks: OB.socialLinks
            })
          }
          return "notFound" === BB.status ? (0, JB.P)() : null
        }(DO),
        jO = null !== QO && void 0 !== QO && QO.urlId ? (0, oB.j)({
          urlId: QO.urlId,
          name: QO.player.name
        }) : null;
      (0, pB.h)(jO);
      const yO = null !== QO && void 0 !== QO && QO.player.cosmetics.profileEffect ? kB.h[QO.player.cosmetics.profileEffect] : void 0,
        JO = null !== QO && !bB && TB.getPlayerName().toLowerCase() === QO.player.name.toLowerCase(),
        MO = (0, LB.b)(null === QO || void 0 === QO ? void 0 : QO.player.name),
        PO = JO && TB.playerHasRank("youtuber");
      HB.current = QO;
      const zO = (0, YB.useCallback)((() => {
          cB && (UB.b.invalidate(cB), UB.b.get(TB, cB).then((BB => {
            eB.current === aB && (sB.current = !0, BO({
              status: "loaded",
              profile: BB,
              playerKey: aB
            }))
          })).catch((BB => {
            console.error("Failed to refresh user profile", BB)
          })))
        }), [aB, TB]),
        lO = (0, YB.useCallback)((() => {
          var BB;
          const OB = HB.current;
          return !(!OB || null === (BB = CB.current) || void 0 === BB || !BB.isReady()) && (CB.current.setAllCosmetics(OB.player.cosmetics), !0)
        }), []);
      return (0, YB.useEffect)((() => {
        if (!QO) return;
        let BB, OB = !1;
        const GB = () => {
          OB || lO() || (BB = setTimeout(GB, 100))
        };
        return GB(), () => {
          OB = !0, clearTimeout(BB)
        }
      }), [QO, lO]), (0, wB.jsxs)("div", {
        className: KB()("PlayerProfile", {
          PlayerProfilePortrait: GB
        }),
        children: [oO && (0, wB.jsx)(jB.d, {
          meta: oO
        }), (0, wB.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [yO && (0, wB.jsx)(yO, {}), !yO && (0, wB.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${xB.current})`
            }
          })]
        }), (0, wB.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, wB.jsx)(VB.c, {
            onClick: YO,
            children: BB("general:back")
          }), QO && !bB && !JO && rB.featureFlags.useSocialFeatures && (0, wB.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, wB.jsx)(gB.e, {
              playerName: QO.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === DO.status && (0, wB.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, wB.jsx)(AB.b, {})
        }), ("notFound" === DO.status || "failed" === DO.status) && (0, wB.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, wB.jsx)(uB.b, {
            name: "face-dizzy"
          }), (0, wB.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === DO.status ? BB("socialBar:playerNotFound", {
              playerName: null !== dB && void 0 !== dB ? dB : fB
            }) : BB("playerProfile:loadFailed")
          }), "failed" === DO.status && (0, wB.jsx)(VB.f, {
            onClick: () => {
              GO((BB => BB + 1))
            },
            children: BB("general:tryAgain")
          })]
        }), QO && (0, wB.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, wB.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, wB.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, wB.jsx)(ZB.b, {
                text: (0, RB.D)(QO.player.ranks, QO.player.name, QO.player.nameColour),
                friendBadgeFor: MO ? QO.player.name : void 0
              })
            }), (0, wB.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, wB.jsx)(YB.Suspense, {
                fallback: (0, wB.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, wB.jsx)(AB.b, {})
                }),
                children: (0, wB.jsx)(nB.b, {
                  ref: CB,
                  onReady: () => {
                    lO()
                  }
                })
              })
            })]
          }), (0, wB.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, wB.jsx)(hB, {
              profile: QO
            }), (QO.socialLinks.length > 0 || PO) && (0, wB.jsx)(mB.b, {
              socialLinks: QO.socialLinks,
              editable: PO,
              userContext: TB,
              onLinksUpdated: zO
            }), (0, wB.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, wB.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: BB("homePage:profileReleasedGames")
              }), 0 === QO.releasedGames.length && (0, wB.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: BB("homePage:profileNoReleasedGames")
              }), QO.releasedGames.length > 0 && (0, wB.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: QO.releasedGames.map((BB => (0, wB.jsx)(WB.h, {
                  source: {
                    type: "preview",
                    preview: BB
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, BB.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5377: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5061),
      oB = GB(1175),
      jB = GB(1383),
      yB = GB(1485),
      JB = GB(1540),
      MB = GB(1400),
      PB = GB(2719),
      zB = GB(1282);
    const lB = {
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

    function pB(BB) {
      let {
        platform: OB
      } = BB;
      const GB = "youtube" === OB;
      return (0, zB.jsxs)("span", {
        className: DB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: GB
        }),
        children: [GB && (0, zB.jsx)(PB.c, {
          variant: "white"
        }), !GB && (0, zB.jsx)(jB.b, {
          name: lB[OB].icon,
          kit: "brands"
        })]
      })
    }

    function qB(BB) {
      let {
        platform: OB,
        link: GB,
        editable: YB,
        userContext: DB,
        onLinksUpdated: PB
      } = BB;
      const {
        t: qB
      } = (0, oB.H)(), ZB = lB[OB];
      if (!GB && !YB) return null;

      function NB() {
        var BB;
        if (!DB || !PB) return;
        MB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ZB.name
            }
          },
          prefixText: QB.r[OB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === GB || void 0 === GB ? void 0 : GB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: GB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await JB.b.setSocialLink(DB, OB, BB.value) : await JB.b.clearSocialLink(DB, OB), PB()
          } catch (GB) {
            console.error("Failed to update social link", GB), MB.NotificationProvider.showAlertPopup({
              title: GB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (GB) {
        const BB = `@${GB.handle}`;
        return (0, zB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ZB.color
          },
          href: GB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, zB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, zB.jsx)(pB, {
              platform: OB
            }), (0, zB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, zB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), YB && (0, zB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, yB.db)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), NB()
            },
            children: (0, zB.jsx)(jB.b, {
              name: "pen-to-square"
            })
          }), !YB && (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, zB.jsx)(jB.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, zB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ZB.color
        },
        ...(0, yB.db)(),
        onClick: () => {
          NB()
        },
        children: [(0, zB.jsx)(pB, {
          platform: OB
        }), (0, zB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ZB.name
          }), (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: qB("homePage:profileSocialLinkAdd")
          })]
        }), (0, zB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, zB.jsx)(jB.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ZB(BB) {
      let {
        socialLinks: OB,
        editable: GB = !1,
        userContext: YB,
        onLinksUpdated: DB
      } = BB;
      if (!GB && 0 === OB.length) return null;
      const oB = new Map(OB.map((BB => [BB.platform, BB]))),
        jB = GB ? QB.q : OB.map((BB => BB.platform));
      return (0, zB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, zB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: jB.map((BB => (0, zB.jsx)(qB, {
            platform: BB,
            link: oB.get(BB),
            editable: GB,
            userContext: YB,
            onLinksUpdated: DB
          }, BB)))
        })
      })
    }
  },
  5375: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);