export const id = 89;
export const ids = [89];
export const modules = {
  4274: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => hB
    });
    var VB = dB(62),
      yB = dB(1422),
      pB = dB(279),
      lB = dB(1113),
      JB = dB(1495),
      YB = dB(1147),
      gB = dB(1445),
      oB = dB(1393),
      kB = dB(2293);
    const LB = {
      retries: 2,
      minTimeout: 2e3
    };
    var OB = dB(993),
      DB = dB(1491),
      uB = dB(1011),
      HB = dB(1657),
      EB = dB(1078),
      vB = dB(1105),
      mB = dB(2971),
      iB = dB(1225),
      NB = dB(1324),
      tB = dB(1407),
      fB = dB(2228),
      sB = dB(2242),
      MB = dB(4278),
      zB = dB(1901),
      wB = dB(933),
      UB = dB.n(wB),
      FB = dB(946),
      KB = dB(4284),
      rB = dB(21),
      IB = dB(1679),
      cB = dB(3123),
      SB = dB(1771),
      PB = dB(3089),
      QB = dB(95),
      RB = dB(3962),
      aB = dB(980);
    const ZB = [MB];

    function XB(BB) {
      let {
        icon: TB,
        label: dB,
        value: VB
      } = BB;
      return (0, aB.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, aB.jsx)(FB.e, {
          name: TB,
          className: "PlayerProfileStatIcon"
        }), (0, aB.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, aB.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: dB
          }), (0, aB.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: VB
          })]
        })]
      })
    }

    function WB(BB) {
      let {
        profile: TB
      } = BB;
      const {
        t: dB,
        selectedLanguage: VB
      } = (0, EB.z)();
      let yB = dB("homePage:profileUnknown");
      if (TB.lastOnline) {
        const BB = (0, EB.m)(VB.code, "homePage:profileTimeAgo");
        yB = dB("homePage:profileTimeAgo", {
          time: (0, pB.cb)(BB, TB.lastOnline, Date.now())
        })
      }
      let lB = dB("homePage:profileUnknown");
      return TB.accountCreatedAt && (lB = new Date(TB.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, aB.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, aB.jsx)(XB, {
          icon: "hourglass",
          label: dB("homePage:profileTimePlayed"),
          value: (0, cB.d)(TB.totalPlayMinutes)
        }), (0, aB.jsx)(XB, {
          icon: "wifi",
          label: dB("homePage:profileLastOnline"),
          value: yB
        }), (0, aB.jsx)(XB, {
          icon: "calendar",
          label: dB("homePage:profileJoined"),
          value: lB
        })]
      })
    }

    function hB() {
      const {
        t: BB
      } = (0, EB.z)(), TB = (0, tB.useNavigatePreserveSearch)(), dB = (0, OB.i)(), {
        playerName: MB,
        playerUrlName: wB
      } = (0, yB.u)(), cB = (0, yB.o)(), XB = (0, lB.f)(cB.pathname), hB = XB && ("urlId" in XB ? `urlId:${XB.urlId}` : `name:${XB.lowerCaseName}`), CB = (0, VB.useRef)(hB);
      CB.current = hB;
      const {
        userContext: GB,
        isUserContextUpdating: qB
      } = (0, uB.b)(), xB = (0, VB.useRef)(null), jB = (0, VB.useRef)(null), AB = (0, VB.useRef)(null), bB = (0, VB.useRef)(!1), nB = (0, VB.useRef)((0, pB.fc)(ZB)), [eB, BT] = (0, VB.useState)((() => {
        const BB = XB && sB.e.peek(GB, XB);
        return BB ? {
          status: "loaded",
          profile: BB,
          playerKey: hB
        } : {
          status: "loading"
        }
      })), [TT, dT] = (0, VB.useState)(0);
      (0, VB.useEffect)(fB.d, []), (0, VB.useEffect)((() => {
        IB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), rB.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [cB.key]);
      const VT = () => {
        const BB = (0, tB.getPreviousLocation)();
        null === BB || BB.startsWith("/play") ? (0, tB.navigateToHomePage)() : TB(-1)
      };
      (0, RB.d)(VT), (0, VB.useEffect)((() => {
        var BB;
        if (qB) return;
        if (!XB) return void BT({
          status: "notFound",
          playerKey: hB
        });
        const TB = "urlId" in XB && (null === (BB = jB.current) || void 0 === BB ? void 0 : BB.urlId) === XB.urlId && AB.current === GB;
        if (TB && bB.current) return;
        const dB = TB ? null : sB.e.peek(GB, XB);
        let VB = !1;
        const yB = BB => "loaded" === BB.status && (BB.playerKey === hB || "urlId" in XB && BB.profile.urlId === XB.urlId);
        return dB ? (AB.current = GB, bB.current = !1, BT({
          status: "loaded",
          profile: dB,
          playerKey: hB
        }), sB.e.invalidate(XB)) : BT((BB => yB(BB) ? BB : {
          status: "loading"
        })), async function(BB, TB) {
          if ("lowerCaseName" in TB && TB.lowerCaseName.length > YB.e) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await oB.c.getPlayerProfile(BB, TB, LB)
            }
          } catch (dB) {
            return (0, kB.b)(dB) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", dB), {
              status: "failed"
            })
          }
        }(GB, XB).then((BB => {
          VB || ("loaded" === BB.status && (AB.current = GB, bB.current = !0), BT((TB => "failed" === BB.status && yB(TB) ? TB : {
            ...BB,
            playerKey: hB
          })))
        })), () => {
          VB = !0
        }
      }), [qB, hB, GB, TT]);
      const yT = "loading" === eB.status || eB.playerKey === hB || "loaded" === eB.status && !!XB && "urlId" in XB && eB.profile.urlId === XB.urlId ? eB : {
          status: "loading"
        },
        pT = "loaded" === yT.status ? yT.profile : null,
        lT = "loading" === yT.status ? null : function(BB) {
          if ("loaded" === BB.status) {
            const {
              profile: TB
            } = BB;
            return (0, gB.V)({
              urlId: TB.urlId,
              name: TB.player.name,
              ranks: TB.player.ranks,
              socialLinks: TB.socialLinks
            })
          }
          return "notFound" === BB.status ? (0, gB.cb)() : null
        }(yT),
        JT = null !== pT && void 0 !== pT && pT.urlId ? (0, lB.h)({
          urlId: pT.urlId,
          name: pT.player.name
        }) : null;
      (0, DB.e)(JT);
      const YT = null !== pT && void 0 !== pT && pT.player.cosmetics.profileEffect ? zB.i[pT.player.cosmetics.profileEffect] : void 0,
        gT = null !== pT && !qB && GB.getPlayerName().toLowerCase() === pT.player.name.toLowerCase(),
        oT = (0, SB.c)(null === pT || void 0 === pT ? void 0 : pT.player.name),
        kT = gT && GB.playerHasRank("youtuber");
      jB.current = pT;
      const LT = (0, VB.useCallback)((() => {
          XB && (sB.e.invalidate(XB), sB.e.get(GB, XB).then((BB => {
            CB.current === hB && (bB.current = !0, BT({
              status: "loaded",
              profile: BB,
              playerKey: hB
            }))
          })).catch((BB => {
            console.error("Failed to refresh user profile", BB)
          })))
        }), [hB, GB]),
        OT = (0, VB.useCallback)((() => {
          var BB;
          const TB = jB.current;
          return !(!TB || null === (BB = xB.current) || void 0 === BB || !BB.isReady()) && (xB.current.setAllCosmetics(TB.player.cosmetics), !0)
        }), []);
      return (0, VB.useEffect)((() => {
        if (!pT) return;
        let BB, TB = !1;
        const dB = () => {
          TB || OT() || (BB = setTimeout(dB, 100))
        };
        return dB(), () => {
          TB = !0, clearTimeout(BB)
        }
      }), [pT, OT]), (0, aB.jsxs)("div", {
        className: UB()("PlayerProfile", {
          PlayerProfilePortrait: dB
        }),
        children: [lT && (0, aB.jsx)(JB.e, {
          meta: lT
        }), (0, aB.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [YT && (0, aB.jsx)(YT, {}), !YT && (0, aB.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${nB.current})`
            }
          })]
        }), (0, aB.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, aB.jsx)(NB.b, {
            onClick: VT,
            children: BB("general:back")
          }), pT && !qB && !gT && QB.featureFlags.useSocialFeatures && (0, aB.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, aB.jsx)(PB.c, {
              playerName: pT.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === yT.status && (0, aB.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, aB.jsx)(iB.b, {})
        }), ("notFound" === yT.status || "failed" === yT.status) && (0, aB.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, aB.jsx)(FB.e, {
            name: "face-dizzy"
          }), (0, aB.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === yT.status ? BB("socialBar:playerNotFound", {
              playerName: null !== wB && void 0 !== wB ? wB : MB
            }) : BB("playerProfile:loadFailed")
          }), "failed" === yT.status && (0, aB.jsx)(NB.d, {
            onClick: () => {
              dT((BB => BB + 1))
            },
            children: BB("general:tryAgain")
          })]
        }), pT && (0, aB.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, aB.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, aB.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, aB.jsx)(HB.e, {
                text: (0, vB.E)(pT.player.ranks, pT.player.name, pT.player.nameColour),
                friendBadgeFor: oT ? pT.player.name : void 0
              })
            }), (0, aB.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, aB.jsx)(VB.Suspense, {
                fallback: (0, aB.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, aB.jsx)(iB.b, {})
                }),
                children: (0, aB.jsx)(fB.c, {
                  ref: xB,
                  onReady: () => {
                    OT()
                  }
                })
              })
            })]
          }), (0, aB.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, aB.jsx)(WB, {
              profile: pT
            }), (pT.socialLinks.length > 0 || kT) && (0, aB.jsx)(KB.e, {
              socialLinks: pT.socialLinks,
              editable: kT,
              userContext: GB,
              onLinksUpdated: LT
            }), (0, aB.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, aB.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: BB("homePage:profileReleasedGames")
              }), 0 === pT.releasedGames.length && (0, aB.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: BB("homePage:profileNoReleasedGames")
              }), pT.releasedGames.length > 0 && (0, aB.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: pT.releasedGames.map((BB => (0, aB.jsx)(mB.f, {
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
  4284: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4042),
      lB = dB(1078),
      JB = dB(946),
      YB = dB(1324),
      gB = dB(1393),
      oB = dB(1235),
      kB = dB(2160),
      LB = dB(980);
    const OB = {
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

    function DB(BB) {
      let {
        platform: TB
      } = BB;
      const dB = "youtube" === TB;
      return (0, LB.jsxs)("span", {
        className: yB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: dB
        }),
        children: [dB && (0, LB.jsx)(kB.d, {
          variant: "white"
        }), !dB && (0, LB.jsx)(JB.e, {
          name: OB[TB].icon,
          kit: "brands"
        })]
      })
    }

    function uB(BB) {
      let {
        platform: TB,
        link: dB,
        editable: VB,
        userContext: yB,
        onLinksUpdated: kB
      } = BB;
      const {
        t: uB
      } = (0, lB.z)(), HB = OB[TB];
      if (!dB && !VB) return null;

      function EB() {
        var BB;
        if (!yB || !kB) return;
        oB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: HB.name
            }
          },
          prefixText: pB.x[TB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === dB || void 0 === dB ? void 0 : dB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: dB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await gB.c.setSocialLink(yB, TB, BB.value) : await gB.c.clearSocialLink(yB, TB), kB()
          } catch (dB) {
            console.error("Failed to update social link", dB), oB.NotificationProvider.showAlertPopup({
              title: dB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (dB) {
        const BB = `@${dB.handle}`;
        return (0, LB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: HB.color
          },
          href: dB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LB.jsx)(DB, {
              platform: TB
            }), (0, LB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), VB && (0, LB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, YB._)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), EB()
            },
            children: (0, LB.jsx)(JB.e, {
              name: "pen-to-square"
            })
          }), !VB && (0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LB.jsx)(JB.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: HB.color
        },
        ...(0, YB._)(),
        onClick: () => {
          EB()
        },
        children: [(0, LB.jsx)(DB, {
          platform: TB
        }), (0, LB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: HB.name
          }), (0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: uB("homePage:profileSocialLinkAdd")
          })]
        }), (0, LB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LB.jsx)(JB.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function HB(BB) {
      let {
        socialLinks: TB,
        editable: dB = !1,
        userContext: VB,
        onLinksUpdated: yB
      } = BB;
      if (!dB && 0 === TB.length) return null;
      const lB = new Map(TB.map((BB => [BB.platform, BB]))),
        JB = dB ? pB.w : TB.map((BB => BB.platform));
      return (0, LB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: JB.map((BB => (0, LB.jsx)(uB, {
            platform: BB,
            link: lB.get(BB),
            editable: dB,
            userContext: VB,
            onLinksUpdated: yB
          }, BB)))
        })
      })
    }
  },
  4278: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);