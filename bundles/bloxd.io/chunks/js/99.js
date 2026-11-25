export const id = 99;
export const ids = [99];
export const modules = {
  5038: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => lB
    });
    var TB = ZB(63),
      JB = ZB(1591),
      oB = ZB(360),
      GB = ZB(1296),
      vB = ZB(1687),
      kB = ZB(1333),
      cB = ZB(1614),
      nB = ZB(1561),
      hB = ZB(2808);
    const zB = {
      retries: 2,
      minTimeout: 2e3
    };
    var FB = ZB(1165),
      NB = ZB(1679),
      gB = ZB(1179),
      qB = ZB(1960),
      yB = ZB(1248),
      UB = ZB(1281),
      WB = ZB(3663),
      dB = ZB(1397),
      CB = ZB(1516),
      QB = ZB(1579),
      sB = ZB(2754),
      wB = ZB(2770),
      OB = ZB(5040),
      YB = ZB(2259),
      iB = ZB(1091),
      pB = ZB.n(iB),
      aB = ZB(1102),
      HB = ZB(5045),
      MB = ZB(20),
      jB = ZB(1995),
      PB = ZB(3816),
      RB = ZB(2102),
      rB = ZB(3756),
      mB = ZB(105),
      XB = ZB(4741),
      LB = ZB(1153);
    const eB = [OB];

    function uB(BB) {
      let {
        icon: IB,
        label: ZB,
        value: TB
      } = BB;
      return (0, LB.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, LB.jsx)(aB.d, {
          name: IB,
          className: "PlayerProfileStatIcon"
        }), (0, LB.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, LB.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ZB
          }), (0, LB.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: TB
          })]
        })]
      })
    }

    function fB(BB) {
      let {
        profile: IB
      } = BB;
      const {
        t: ZB,
        selectedLanguage: TB
      } = (0, yB.G)();
      let JB = ZB("homePage:profileUnknown");
      if (IB.lastOnline) {
        const BB = (0, yB.o)(TB.code, "homePage:profileTimeAgo");
        JB = ZB("homePage:profileTimeAgo", {
          time: (0, oB.hb)(BB, IB.lastOnline, Date.now())
        })
      }
      let GB = ZB("homePage:profileUnknown");
      return IB.accountCreatedAt && (GB = new Date(IB.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, LB.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, LB.jsx)(uB, {
          icon: "hourglass",
          label: ZB("homePage:profileTimePlayed"),
          value: (0, PB.d)(IB.totalPlayMinutes)
        }), (0, LB.jsx)(uB, {
          icon: "wifi",
          label: ZB("homePage:profileLastOnline"),
          value: JB
        }), (0, LB.jsx)(uB, {
          icon: "calendar",
          label: ZB("homePage:profileJoined"),
          value: GB
        })]
      })
    }

    function lB() {
      const {
        t: BB
      } = (0, yB.G)(), IB = (0, QB.useNavigatePreserveSearch)(), ZB = (0, FB.j)(), {
        playerName: OB,
        playerUrlName: iB
      } = (0, JB.B)(), PB = (0, JB.r)(), uB = (0, GB.f)(PB.pathname), lB = uB && ("urlId" in uB ? `urlId:${uB.urlId}` : `name:${uB.lowerCaseName}`), AB = (0, TB.useRef)(lB);
      AB.current = lB;
      const {
        userContext: tB,
        isUserContextUpdating: bB
      } = (0, gB.d)(), xB = (0, TB.useRef)(null), EB = (0, TB.useRef)(null), DB = (0, TB.useRef)(null), KB = (0, TB.useRef)(!1), VB = (0, TB.useRef)((0, oB.bc)(eB)), [SB, BI] = (0, TB.useState)((() => {
        const BB = uB && wB.c.peek(tB, uB);
        return BB ? {
          status: "loaded",
          profile: BB,
          playerKey: lB
        } : {
          status: "loading"
        }
      })), [II, ZI] = (0, TB.useState)(0);
      (0, TB.useEffect)(sB.c, []), (0, TB.useEffect)((() => {
        jB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), MB.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [PB.key]);
      const TI = () => {
        const BB = (0, QB.getPreviousLocation)();
        null === BB || BB.startsWith("/play") ? (0, QB.navigateToHomePage)() : IB(-1)
      };
      (0, XB.e)(TI), (0, TB.useEffect)((() => {
        var BB;
        if (bB) return;
        if (!uB) return void BI({
          status: "notFound",
          playerKey: lB
        });
        const IB = "urlId" in uB && (null === (BB = EB.current) || void 0 === BB ? void 0 : BB.urlId) === uB.urlId && DB.current === tB;
        if (IB && KB.current) return;
        const ZB = IB ? null : wB.c.peek(tB, uB);
        let TB = !1;
        const JB = BB => "loaded" === BB.status && (BB.playerKey === lB || "urlId" in uB && BB.profile.urlId === uB.urlId);
        return ZB ? (DB.current = tB, KB.current = !1, BI({
          status: "loaded",
          profile: ZB,
          playerKey: lB
        }), wB.c.invalidate(uB)) : BI((BB => JB(BB) ? BB : {
          status: "loading"
        })), async function(BB, IB) {
          if ("lowerCaseName" in IB && IB.lowerCaseName.length > kB.j) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await nB.c.getPlayerProfile(BB, IB, zB)
            }
          } catch (ZB) {
            return (0, hB.d)(ZB) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ZB), {
              status: "failed"
            })
          }
        }(tB, uB).then((BB => {
          TB || ("loaded" === BB.status && (DB.current = tB, KB.current = !0), BI((IB => "failed" === BB.status && JB(IB) ? IB : {
            ...BB,
            playerKey: lB
          })))
        })), () => {
          TB = !0
        }
      }), [bB, lB, tB, II]);
      const JI = "loading" === SB.status || SB.playerKey === lB || "loaded" === SB.status && !!uB && "urlId" in uB && SB.profile.urlId === uB.urlId ? SB : {
          status: "loading"
        },
        oI = "loaded" === JI.status ? JI.profile : null,
        GI = "loading" === JI.status ? null : function(BB) {
          if ("loaded" === BB.status) {
            const {
              profile: IB
            } = BB;
            return (0, cB.V)({
              urlId: IB.urlId,
              name: IB.player.name,
              ranks: IB.player.ranks,
              socialLinks: IB.socialLinks
            })
          }
          return "notFound" === BB.status ? (0, cB.db)() : null
        }(JI),
        vI = null !== oI && void 0 !== oI && oI.urlId ? (0, GB.h)({
          urlId: oI.urlId,
          name: oI.player.name
        }) : null;
      (0, NB.i)(vI);
      const kI = null !== oI && void 0 !== oI && oI.player.cosmetics.profileEffect ? YB.e[oI.player.cosmetics.profileEffect] : void 0,
        cI = null !== oI && !bB && tB.getPlayerName().toLowerCase() === oI.player.name.toLowerCase(),
        nI = (0, RB.d)(null === oI || void 0 === oI ? void 0 : oI.player.name),
        hI = cI && tB.playerHasRank("youtuber");
      EB.current = oI;
      const zI = (0, TB.useCallback)((() => {
          uB && (wB.c.invalidate(uB), wB.c.get(tB, uB).then((BB => {
            AB.current === lB && (KB.current = !0, BI({
              status: "loaded",
              profile: BB,
              playerKey: lB
            }))
          })).catch((BB => {
            console.error("Failed to refresh user profile", BB)
          })))
        }), [lB, tB]),
        FI = (0, TB.useCallback)((() => {
          var BB;
          const IB = EB.current;
          return !(!IB || null === (BB = xB.current) || void 0 === BB || !BB.isReady()) && (xB.current.setAllCosmetics(IB.player.cosmetics), !0)
        }), []);
      return (0, TB.useEffect)((() => {
        if (!oI) return;
        let BB, IB = !1;
        const ZB = () => {
          IB || FI() || (BB = setTimeout(ZB, 100))
        };
        return ZB(), () => {
          IB = !0, clearTimeout(BB)
        }
      }), [oI, FI]), (0, LB.jsxs)("div", {
        className: pB()("PlayerProfile", {
          PlayerProfilePortrait: ZB
        }),
        children: [GI && (0, LB.jsx)(vB.c, {
          meta: GI
        }), (0, LB.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [kI && (0, LB.jsx)(kI, {}), !kI && (0, LB.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${VB.current})`
            }
          })]
        }), (0, LB.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, LB.jsx)(CB.c, {
            onClick: TI,
            children: BB("general:back")
          }), oI && !bB && !cI && mB.featureFlags.useSocialFeatures && (0, LB.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, LB.jsx)(rB.e, {
              playerName: oI.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === JI.status && (0, LB.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, LB.jsx)(dB.d, {})
        }), ("notFound" === JI.status || "failed" === JI.status) && (0, LB.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, LB.jsx)(aB.d, {
            name: "face-dizzy"
          }), (0, LB.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === JI.status ? BB("socialBar:playerNotFound", {
              playerName: null !== iB && void 0 !== iB ? iB : OB
            }) : BB("playerProfile:loadFailed")
          }), "failed" === JI.status && (0, LB.jsx)(CB.g, {
            onClick: () => {
              ZI((BB => BB + 1))
            },
            children: BB("general:tryAgain")
          })]
        }), oI && (0, LB.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, LB.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, LB.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, LB.jsx)(qB.e, {
                text: (0, UB.q)(oI.player.ranks, oI.player.name, oI.player.nameColour),
                friendBadgeFor: nI ? oI.player.name : void 0
              })
            }), (0, LB.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, LB.jsx)(TB.Suspense, {
                fallback: (0, LB.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, LB.jsx)(dB.d, {})
                }),
                children: (0, LB.jsx)(sB.b, {
                  ref: xB,
                  onReady: () => {
                    FI()
                  }
                })
              })
            })]
          }), (0, LB.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, LB.jsx)(fB, {
              profile: oI
            }), (oI.socialLinks.length > 0 || hI) && (0, LB.jsx)(HB.e, {
              socialLinks: oI.socialLinks,
              editable: hI,
              userContext: tB,
              onLinksUpdated: zI
            }), (0, LB.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, LB.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: BB("homePage:profileReleasedGames")
              }), 0 === oI.releasedGames.length && (0, LB.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: BB("homePage:profileNoReleasedGames")
              }), oI.releasedGames.length > 0 && (0, LB.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: oI.releasedGames.map((BB => (0, LB.jsx)(WB.f, {
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
  5045: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => qB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4813),
      GB = ZB(1248),
      vB = ZB(1102),
      kB = ZB(1516),
      cB = ZB(1561),
      nB = ZB(1403),
      hB = ZB(2619),
      zB = ZB(1153);
    const FB = {
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

    function NB(BB) {
      let {
        platform: IB
      } = BB;
      const ZB = "youtube" === IB;
      return (0, zB.jsxs)("span", {
        className: JB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZB
        }),
        children: [ZB && (0, zB.jsx)(hB.c, {
          variant: "white"
        }), !ZB && (0, zB.jsx)(vB.d, {
          name: FB[IB].icon,
          kit: "brands"
        })]
      })
    }

    function gB(BB) {
      let {
        platform: IB,
        link: ZB,
        editable: TB,
        userContext: JB,
        onLinksUpdated: hB
      } = BB;
      const {
        t: gB
      } = (0, GB.G)(), qB = FB[IB];
      if (!ZB && !TB) return null;

      function yB() {
        var BB;
        if (!JB || !hB) return;
        nB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: qB.name
            }
          },
          prefixText: oB.u[IB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await cB.c.setSocialLink(JB, IB, BB.value) : await cB.c.clearSocialLink(JB, IB), hB()
          } catch (ZB) {
            console.error("Failed to update social link", ZB), nB.NotificationProvider.showAlertPopup({
              title: ZB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZB) {
        const BB = `@${ZB.handle}`;
        return (0, zB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: qB.color
          },
          href: ZB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, zB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, zB.jsx)(NB, {
              platform: IB
            }), (0, zB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, zB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), TB && (0, zB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, kB.ab)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), yB()
            },
            children: (0, zB.jsx)(vB.d, {
              name: "pen-to-square"
            })
          }), !TB && (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, zB.jsx)(vB.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, zB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: qB.color
        },
        ...(0, kB.ab)(),
        onClick: () => {
          yB()
        },
        children: [(0, zB.jsx)(NB, {
          platform: IB
        }), (0, zB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: qB.name
          }), (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: gB("homePage:profileSocialLinkAdd")
          })]
        }), (0, zB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, zB.jsx)(vB.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function qB(BB) {
      let {
        socialLinks: IB,
        editable: ZB = !1,
        userContext: TB,
        onLinksUpdated: JB
      } = BB;
      if (!ZB && 0 === IB.length) return null;
      const GB = new Map(IB.map((BB => [BB.platform, BB]))),
        vB = ZB ? oB.t : IB.map((BB => BB.platform));
      return (0, zB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, zB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: vB.map((BB => (0, zB.jsx)(gB, {
            platform: BB,
            link: GB.get(BB),
            editable: ZB,
            userContext: TB,
            onLinksUpdated: JB
          }, BB)))
        })
      })
    }
  },
  5040: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);