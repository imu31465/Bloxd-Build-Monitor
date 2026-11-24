export const id = 99;
export const ids = [99];
export const modules = {
  4971: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => lB
    });
    var QB = zB(62),
      nB = zB(1547),
      dB = zB(376),
      IB = zB(1268),
      NB = zB(1637),
      uB = zB(1297),
      UB = zB(1570),
      aB = zB(1532),
      pB = zB(2790);
    const rB = {
      retries: 2,
      minTimeout: 2e3
    };
    var sB = zB(1162),
      JB = zB(1630),
      mB = zB(1169),
      yB = zB(1952),
      kB = zB(1240),
      GB = zB(1263),
      LB = zB(3587),
      gB = zB(1369),
      tB = zB(1478),
      SB = zB(1543),
      MB = zB(2729),
      EB = zB(2737),
      iB = zB(4974),
      qB = zB(2224),
      fB = zB(1091),
      oB = zB.n(fB),
      HB = zB(1108),
      DB = zB(4981),
      FB = zB(28),
      YB = zB(1982),
      VB = zB(3749),
      hB = zB(2078),
      XB = zB(3693),
      ZB = zB(106),
      AB = zB(4668),
      TB = zB(1148);
    const PB = [iB];

    function WB(BB) {
      let {
        icon: jB,
        label: zB,
        value: QB
      } = BB;
      return (0, TB.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, TB.jsx)(HB.c, {
          name: jB,
          className: "PlayerProfileStatIcon"
        }), (0, TB.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, TB.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: zB
          }), (0, TB.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: QB
          })]
        })]
      })
    }

    function eB(BB) {
      let {
        profile: jB
      } = BB;
      const {
        t: zB,
        selectedLanguage: QB
      } = (0, kB.D)();
      let nB = zB("homePage:profileUnknown");
      if (jB.lastOnline) {
        const BB = (0, kB.n)(QB.code, "homePage:profileTimeAgo");
        nB = zB("homePage:profileTimeAgo", {
          time: (0, dB.$)(BB, jB.lastOnline, Date.now())
        })
      }
      let IB = zB("homePage:profileUnknown");
      return jB.accountCreatedAt && (IB = new Date(jB.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, TB.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, TB.jsx)(WB, {
          icon: "hourglass",
          label: zB("homePage:profileTimePlayed"),
          value: (0, VB.e)(jB.totalPlayMinutes)
        }), (0, TB.jsx)(WB, {
          icon: "wifi",
          label: zB("homePage:profileLastOnline"),
          value: nB
        }), (0, TB.jsx)(WB, {
          icon: "calendar",
          label: zB("homePage:profileJoined"),
          value: IB
        })]
      })
    }

    function lB() {
      const {
        t: BB
      } = (0, kB.D)(), jB = (0, SB.useNavigatePreserveSearch)(), zB = (0, sB.d)(), {
        playerName: iB,
        playerUrlName: fB
      } = (0, nB.w)(), VB = (0, nB.n)(), WB = (0, IB.e)(VB.pathname), lB = WB && ("urlId" in WB ? `urlId:${WB.urlId}` : `name:${WB.lowerCaseName}`), wB = (0, QB.useRef)(lB);
      wB.current = lB;
      const {
        userContext: xB,
        isUserContextUpdating: KB
      } = (0, mB.d)(), CB = (0, QB.useRef)(null), cB = (0, QB.useRef)(null), bB = (0, QB.useRef)(null), vB = (0, QB.useRef)(!1), RB = (0, QB.useRef)((0, dB.cc)(PB)), [OB, Bj] = (0, QB.useState)((() => {
        const BB = WB && EB.b.peek(xB, WB);
        return BB ? {
          status: "loaded",
          profile: BB,
          playerKey: lB
        } : {
          status: "loading"
        }
      })), [jj, zj] = (0, QB.useState)(0);
      (0, QB.useEffect)(MB.e, []), (0, QB.useEffect)((() => {
        YB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), FB.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [VB.key]);
      const Qj = () => {
        const BB = (0, SB.getPreviousLocation)();
        null === BB || BB.startsWith("/play") ? (0, SB.navigateToHomePage)() : jB(-1)
      };
      (0, AB.b)(Qj), (0, QB.useEffect)((() => {
        var BB;
        if (KB) return;
        if (!WB) return void Bj({
          status: "notFound",
          playerKey: lB
        });
        const jB = "urlId" in WB && (null === (BB = cB.current) || void 0 === BB ? void 0 : BB.urlId) === WB.urlId && bB.current === xB;
        if (jB && vB.current) return;
        const zB = jB ? null : EB.b.peek(xB, WB);
        let QB = !1;
        const nB = BB => "loaded" === BB.status && (BB.playerKey === lB || "urlId" in WB && BB.profile.urlId === WB.urlId);
        return zB ? (bB.current = xB, vB.current = !1, Bj({
          status: "loaded",
          profile: zB,
          playerKey: lB
        }), EB.b.invalidate(WB)) : Bj((BB => nB(BB) ? BB : {
          status: "loading"
        })), async function(BB, jB) {
          if ("lowerCaseName" in jB && jB.lowerCaseName.length > uB.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await aB.b.getPlayerProfile(BB, jB, rB)
            }
          } catch (zB) {
            return (0, pB.d)(zB) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", zB), {
              status: "failed"
            })
          }
        }(xB, WB).then((BB => {
          QB || ("loaded" === BB.status && (bB.current = xB, vB.current = !0), Bj((jB => "failed" === BB.status && nB(jB) ? jB : {
            ...BB,
            playerKey: lB
          })))
        })), () => {
          QB = !0
        }
      }), [KB, lB, xB, jj]);
      const nj = "loading" === OB.status || OB.playerKey === lB || "loaded" === OB.status && !!WB && "urlId" in WB && OB.profile.urlId === WB.urlId ? OB : {
          status: "loading"
        },
        dj = "loaded" === nj.status ? nj.profile : null,
        Ij = "loading" === nj.status ? null : function(BB) {
          if ("loaded" === BB.status) {
            const {
              profile: jB
            } = BB;
            return (0, UB.I)({
              urlId: jB.urlId,
              name: jB.player.name,
              ranks: jB.player.ranks,
              socialLinks: jB.socialLinks
            })
          }
          return "notFound" === BB.status ? (0, UB.R)() : null
        }(nj),
        Nj = null !== dj && void 0 !== dj && dj.urlId ? (0, IB.h)({
          urlId: dj.urlId,
          name: dj.player.name
        }) : null;
      (0, JB.d)(Nj);
      const uj = null !== dj && void 0 !== dj && dj.player.cosmetics.profileEffect ? qB.d[dj.player.cosmetics.profileEffect] : void 0,
        Uj = null !== dj && !KB && xB.getPlayerName().toLowerCase() === dj.player.name.toLowerCase(),
        aj = (0, hB.c)(null === dj || void 0 === dj ? void 0 : dj.player.name),
        pj = Uj && xB.playerHasRank("youtuber");
      cB.current = dj;
      const rj = (0, QB.useCallback)((() => {
          WB && (EB.b.invalidate(WB), EB.b.get(xB, WB).then((BB => {
            wB.current === lB && (vB.current = !0, Bj({
              status: "loaded",
              profile: BB,
              playerKey: lB
            }))
          })).catch((BB => {
            console.error("Failed to refresh user profile", BB)
          })))
        }), [lB, xB]),
        sj = (0, QB.useCallback)((() => {
          var BB;
          const jB = cB.current;
          return !(!jB || null === (BB = CB.current) || void 0 === BB || !BB.isReady()) && (CB.current.setAllCosmetics(jB.player.cosmetics), !0)
        }), []);
      return (0, QB.useEffect)((() => {
        if (!dj) return;
        let BB, jB = !1;
        const zB = () => {
          jB || sj() || (BB = setTimeout(zB, 100))
        };
        return zB(), () => {
          jB = !0, clearTimeout(BB)
        }
      }), [dj, sj]), (0, TB.jsxs)("div", {
        className: oB()("PlayerProfile", {
          PlayerProfilePortrait: zB
        }),
        children: [Ij && (0, TB.jsx)(NB.b, {
          meta: Ij
        }), (0, TB.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [uj && (0, TB.jsx)(uj, {}), !uj && (0, TB.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${RB.current})`
            }
          })]
        }), (0, TB.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, TB.jsx)(tB.c, {
            onClick: Qj,
            children: BB("general:back")
          }), dj && !KB && !Uj && ZB.featureFlags.useSocialFeatures && (0, TB.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, TB.jsx)(XB.b, {
              playerName: dj.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === nj.status && (0, TB.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, TB.jsx)(gB.e, {})
        }), ("notFound" === nj.status || "failed" === nj.status) && (0, TB.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, TB.jsx)(HB.c, {
            name: "face-dizzy"
          }), (0, TB.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === nj.status ? BB("socialBar:playerNotFound", {
              playerName: null !== fB && void 0 !== fB ? fB : iB
            }) : BB("playerProfile:loadFailed")
          }), "failed" === nj.status && (0, TB.jsx)(tB.f, {
            onClick: () => {
              zj((BB => BB + 1))
            },
            children: BB("general:tryAgain")
          })]
        }), dj && (0, TB.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, TB.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, TB.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, TB.jsx)(yB.e, {
                text: (0, GB.s)(dj.player.ranks, dj.player.name, dj.player.nameColour),
                friendBadgeFor: aj ? dj.player.name : void 0
              })
            }), (0, TB.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, TB.jsx)(QB.Suspense, {
                fallback: (0, TB.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, TB.jsx)(gB.e, {})
                }),
                children: (0, TB.jsx)(MB.d, {
                  ref: CB,
                  onReady: () => {
                    sj()
                  }
                })
              })
            })]
          }), (0, TB.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, TB.jsx)(eB, {
              profile: dj
            }), (dj.socialLinks.length > 0 || pj) && (0, TB.jsx)(DB.b, {
              socialLinks: dj.socialLinks,
              editable: pj,
              userContext: xB,
              onLinksUpdated: rj
            }), (0, TB.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, TB.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: BB("homePage:profileReleasedGames")
              }), 0 === dj.releasedGames.length && (0, TB.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: BB("homePage:profileNoReleasedGames")
              }), dj.releasedGames.length > 0 && (0, TB.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: dj.releasedGames.map((BB => (0, TB.jsx)(LB.f, {
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
  4981: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => yB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4733),
      IB = zB(1240),
      NB = zB(1108),
      uB = zB(1478),
      UB = zB(1532),
      aB = zB(1381),
      pB = zB(2611),
      rB = zB(1148);
    const sB = {
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

    function JB(BB) {
      let {
        platform: jB
      } = BB;
      const zB = "youtube" === jB;
      return (0, rB.jsxs)("span", {
        className: nB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: zB
        }),
        children: [zB && (0, rB.jsx)(pB.d, {
          variant: "white"
        }), !zB && (0, rB.jsx)(NB.c, {
          name: sB[jB].icon,
          kit: "brands"
        })]
      })
    }

    function mB(BB) {
      let {
        platform: jB,
        link: zB,
        editable: QB,
        userContext: nB,
        onLinksUpdated: pB
      } = BB;
      const {
        t: mB
      } = (0, IB.D)(), yB = sB[jB];
      if (!zB && !QB) return null;

      function kB() {
        var BB;
        if (!nB || !pB) return;
        aB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yB.name
            }
          },
          prefixText: dB.r[jB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === zB || void 0 === zB ? void 0 : zB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: zB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await UB.b.setSocialLink(nB, jB, BB.value) : await UB.b.clearSocialLink(nB, jB), pB()
          } catch (zB) {
            console.error("Failed to update social link", zB), aB.NotificationProvider.showAlertPopup({
              title: zB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (zB) {
        const BB = `@${zB.handle}`;
        return (0, rB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yB.color
          },
          href: zB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, rB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, rB.jsx)(JB, {
              platform: jB
            }), (0, rB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, rB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), QB && (0, rB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, uB.S)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), kB()
            },
            children: (0, rB.jsx)(NB.c, {
              name: "pen-to-square"
            })
          }), !QB && (0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, rB.jsx)(NB.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, rB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yB.color
        },
        ...(0, uB.S)(),
        onClick: () => {
          kB()
        },
        children: [(0, rB.jsx)(JB, {
          platform: jB
        }), (0, rB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yB.name
          }), (0, rB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: mB("homePage:profileSocialLinkAdd")
          })]
        }), (0, rB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, rB.jsx)(NB.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yB(BB) {
      let {
        socialLinks: jB,
        editable: zB = !1,
        userContext: QB,
        onLinksUpdated: nB
      } = BB;
      if (!zB && 0 === jB.length) return null;
      const IB = new Map(jB.map((BB => [BB.platform, BB]))),
        NB = zB ? dB.q : jB.map((BB => BB.platform));
      return (0, rB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, rB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: NB.map((BB => (0, rB.jsx)(mB, {
            platform: BB,
            link: IB.get(BB),
            editable: zB,
            userContext: QB,
            onLinksUpdated: nB
          }, BB)))
        })
      })
    }
  },
  4974: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);