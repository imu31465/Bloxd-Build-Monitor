export const id = 97;
export const ids = [97];
export const modules = {
  5026: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => BS
    });
    var tS = gS(64),
      bS = gS(1622),
      XS = gS(387),
      xS = gS(1318),
      NS = gS(1712),
      qS = gS(1348),
      uS = gS(1647),
      IS = gS(1588),
      fS = gS(2809);
    const kS = {
      retries: 2,
      minTimeout: 2e3
    };
    var aS = gS(1198),
      KS = gS(1704),
      jS = gS(1211),
      GS = gS(2031),
      CS = gS(1281),
      nS = gS(1309),
      PS = gS(3608),
      QS = gS(1419),
      DS = gS(1528),
      wS = gS(1608),
      hS = gS(2742),
      ZS = gS(2752),
      JS = gS(5032),
      OS = gS(2273),
      dS = gS(1121),
      cS = gS.n(dS),
      vS = gS(1127),
      ES = gS(5037),
      LS = gS(24),
      YS = gS(2060),
      AS = gS(3768),
      yS = gS(2142),
      VS = gS(3722),
      iS = gS(104),
      WS = gS(4691),
      zS = gS(1181);
    const US = [JS];

    function pS(SS) {
      let {
        icon: HS,
        label: gS,
        value: tS
      } = SS;
      return (0, zS.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, zS.jsx)(vS.d, {
          name: HS,
          className: "PlayerProfileStatIcon"
        }), (0, zS.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, zS.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: gS
          }), (0, zS.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: tS
          })]
        })]
      })
    }

    function sS(SS) {
      let {
        profile: HS
      } = SS;
      const {
        t: gS,
        selectedLanguage: tS
      } = (0, CS.F)();
      let bS = gS("homePage:profileUnknown");
      if (HS.lastOnline) {
        const SS = (0, CS.q)(tS.code, "homePage:profileTimeAgo");
        bS = gS("homePage:profileTimeAgo", {
          time: (0, XS.W)(SS, HS.lastOnline, Date.now())
        })
      }
      let xS = gS("homePage:profileUnknown");
      return HS.accountCreatedAt && (xS = new Date(HS.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, zS.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, zS.jsx)(pS, {
          icon: "hourglass",
          label: gS("homePage:profileTimePlayed"),
          value: (0, AS.b)(HS.totalPlayMinutes)
        }), (0, zS.jsx)(pS, {
          icon: "wifi",
          label: gS("homePage:profileLastOnline"),
          value: bS
        }), (0, zS.jsx)(pS, {
          icon: "calendar",
          label: gS("homePage:profileJoined"),
          value: xS
        })]
      })
    }

    function BS() {
      const {
        t: SS
      } = (0, CS.F)(), HS = (0, wS.useNavigatePreserveSearch)(), gS = (0, aS.l)(), {
        playerName: JS,
        playerUrlName: dS
      } = (0, bS.z)(), AS = (0, bS.t)(), pS = (0, xS.d)(AS.pathname), BS = pS && ("urlId" in pS ? `urlId:${pS.urlId}` : `name:${pS.lowerCaseName}`), MS = (0, tS.useRef)(BS);
      MS.current = BS;
      const {
        userContext: FS,
        isUserContextUpdating: RS
      } = (0, jS.b)(), TS = (0, tS.useRef)(null), oS = (0, tS.useRef)(null), lS = (0, tS.useRef)(null), mS = (0, tS.useRef)(!1), eS = (0, tS.useRef)((0, XS.Vb)(US)), [rS, SH] = (0, tS.useState)((() => {
        const SS = pS && ZS.e.peek(FS, pS);
        return SS ? {
          status: "loaded",
          profile: SS,
          playerKey: BS
        } : {
          status: "loading"
        }
      })), [HH, gH] = (0, tS.useState)(0);
      (0, tS.useEffect)(hS.h, []), (0, tS.useEffect)((() => {
        YS.gameBridge.send("leaveGame", {
          reloadPath: null
        }), LS.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [AS.key]);
      const tH = () => {
        const SS = (0, wS.getPreviousLocation)();
        null === SS || SS.startsWith("/play") ? (0, wS.navigateToHomePage)() : HS(-1)
      };
      (0, WS.c)(tH), (0, tS.useEffect)((() => {
        var SS;
        if (RS) return;
        if (!pS) return void SH({
          status: "notFound",
          playerKey: BS
        });
        const HS = "urlId" in pS && (null === (SS = oS.current) || void 0 === SS ? void 0 : SS.urlId) === pS.urlId && lS.current === FS;
        if (HS && mS.current) return;
        const gS = HS ? null : ZS.e.peek(FS, pS);
        let tS = !1;
        const bS = SS => "loaded" === SS.status && (SS.playerKey === BS || "urlId" in pS && SS.profile.urlId === pS.urlId);
        return gS ? (lS.current = FS, mS.current = !1, SH({
          status: "loaded",
          profile: gS,
          playerKey: BS
        }), ZS.e.invalidate(pS)) : SH((SS => bS(SS) ? SS : {
          status: "loading"
        })), async function(SS, HS) {
          if ("lowerCaseName" in HS && HS.lowerCaseName.length > qS.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await IS.b.getPlayerProfile(SS, HS, kS)
            }
          } catch (gS) {
            return (0, fS.e)(gS) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", gS), {
              status: "failed"
            })
          }
        }(FS, pS).then((SS => {
          tS || ("loaded" === SS.status && (lS.current = FS, mS.current = !0), SH((HS => "failed" === SS.status && bS(HS) ? HS : {
            ...SS,
            playerKey: BS
          })))
        })), () => {
          tS = !0
        }
      }), [RS, BS, FS, HH]);
      const bH = "loading" === rS.status || rS.playerKey === BS || "loaded" === rS.status && !!pS && "urlId" in pS && rS.profile.urlId === pS.urlId ? rS : {
          status: "loading"
        },
        XH = "loaded" === bH.status ? bH.profile : null,
        xH = "loading" === bH.status ? null : function(SS) {
          if ("loaded" === SS.status) {
            const {
              profile: HS
            } = SS;
            return (0, uS.R)({
              urlId: HS.urlId,
              name: HS.player.name,
              ranks: HS.player.ranks,
              socialLinks: HS.socialLinks
            })
          }
          return "notFound" === SS.status ? (0, uS.$)() : null
        }(bH),
        NH = null !== XH && void 0 !== XH && XH.urlId ? (0, xS.f)({
          urlId: XH.urlId,
          name: XH.player.name
        }) : null;
      (0, KS.f)(NH);
      const qH = null !== XH && void 0 !== XH && XH.player.cosmetics.profileEffect ? OS.g[XH.player.cosmetics.profileEffect] : void 0,
        uH = null !== XH && !RS && FS.getPlayerName().toLowerCase() === XH.player.name.toLowerCase(),
        IH = (0, yS.c)(null === XH || void 0 === XH ? void 0 : XH.player.name),
        fH = uH && FS.playerHasRank("youtuber");
      oS.current = XH;
      const kH = (0, tS.useCallback)((() => {
          pS && (ZS.e.invalidate(pS), ZS.e.get(FS, pS).then((SS => {
            MS.current === BS && (mS.current = !0, SH({
              status: "loaded",
              profile: SS,
              playerKey: BS
            }))
          })).catch((SS => {
            console.error("Failed to refresh user profile", SS)
          })))
        }), [BS, FS]),
        aH = (0, tS.useCallback)((() => {
          var SS;
          const HS = oS.current;
          return !(!HS || null === (SS = TS.current) || void 0 === SS || !SS.isReady()) && (TS.current.setAllCosmetics(HS.player.cosmetics), !0)
        }), []);
      return (0, tS.useEffect)((() => {
        if (!XH) return;
        let SS, HS = !1;
        const gS = () => {
          HS || aH() || (SS = setTimeout(gS, 100))
        };
        return gS(), () => {
          HS = !0, clearTimeout(SS)
        }
      }), [XH, aH]), (0, zS.jsxs)("div", {
        className: cS()("PlayerProfile", {
          PlayerProfilePortrait: gS
        }),
        children: [xH && (0, zS.jsx)(NS.e, {
          meta: xH
        }), (0, zS.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [qH && (0, zS.jsx)(qH, {}), !qH && (0, zS.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${eS.current})`
            }
          })]
        }), (0, zS.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, zS.jsx)(DS.d, {
            onClick: tH,
            children: SS("general:back")
          }), XH && !RS && !uH && iS.featureFlags.useSocialFeatures && (0, zS.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, zS.jsx)(VS.e, {
              playerName: XH.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === bH.status && (0, zS.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, zS.jsx)(QS.c, {})
        }), ("notFound" === bH.status || "failed" === bH.status) && (0, zS.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, zS.jsx)(vS.d, {
            name: "face-dizzy"
          }), (0, zS.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === bH.status ? SS("socialBar:playerNotFound", {
              playerName: null !== dS && void 0 !== dS ? dS : JS
            }) : SS("playerProfile:loadFailed")
          }), "failed" === bH.status && (0, zS.jsx)(DS.g, {
            onClick: () => {
              gH((SS => SS + 1))
            },
            children: SS("general:tryAgain")
          })]
        }), XH && (0, zS.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, zS.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, zS.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, zS.jsx)(GS.c, {
                text: (0, nS.x)(XH.player.ranks, XH.player.name, XH.player.nameColour),
                friendBadgeFor: IH ? XH.player.name : void 0
              })
            }), (0, zS.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, zS.jsx)(tS.Suspense, {
                fallback: (0, zS.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, zS.jsx)(QS.c, {})
                }),
                children: (0, zS.jsx)(hS.d, {
                  ref: TS,
                  onReady: () => {
                    aH()
                  }
                })
              })
            })]
          }), (0, zS.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, zS.jsx)(sS, {
              profile: XH
            }), (XH.socialLinks.length > 0 || fH) && (0, zS.jsx)(ES.c, {
              socialLinks: XH.socialLinks,
              editable: fH,
              userContext: FS,
              onLinksUpdated: kH
            }), (0, zS.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, zS.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: SS("homePage:profileReleasedGames")
              }), 0 === XH.releasedGames.length && (0, zS.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: SS("homePage:profileNoReleasedGames")
              }), XH.releasedGames.length > 0 && (0, zS.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: XH.releasedGames.map((SS => (0, zS.jsx)(PS.g, {
                  source: {
                    type: "preview",
                    preview: SS
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, SS.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5037: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => GS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4762),
      xS = gS(1281),
      NS = gS(1127),
      qS = gS(1528),
      uS = gS(1588),
      IS = gS(1435),
      fS = gS(2630),
      kS = gS(1181);
    const aS = {
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

    function KS(SS) {
      let {
        platform: HS
      } = SS;
      const gS = "youtube" === HS;
      return (0, kS.jsxs)("span", {
        className: bS()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: gS
        }),
        children: [gS && (0, kS.jsx)(fS.e, {
          variant: "white"
        }), !gS && (0, kS.jsx)(NS.d, {
          name: aS[HS].icon,
          kit: "brands"
        })]
      })
    }

    function jS(SS) {
      let {
        platform: HS,
        link: gS,
        editable: tS,
        userContext: bS,
        onLinksUpdated: fS
      } = SS;
      const {
        t: jS
      } = (0, xS.F)(), GS = aS[HS];
      if (!gS && !tS) return null;

      function CS() {
        var SS;
        if (!bS || !fS) return;
        IS.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: GS.name
            }
          },
          prefixText: XS.r[HS],
          placeholderText: "playBloxd",
          initialValue: null !== (SS = null === gS || void 0 === gS ? void 0 : gS.handle) && void 0 !== SS ? SS : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: gS ? "general:remove" : void 0
        }).getResult().then((async SS => {
          if ("notificationTornDown" !== SS && null !== SS) try {
            "submit" === SS.type ? await uS.b.setSocialLink(bS, HS, SS.value) : await uS.b.clearSocialLink(bS, HS), fS()
          } catch (gS) {
            console.error("Failed to update social link", gS), IS.NotificationProvider.showAlertPopup({
              title: gS.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (gS) {
        const SS = `@${gS.handle}`;
        return (0, kS.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: GS.color
          },
          href: gS.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, kS.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, kS.jsx)(KS, {
              platform: HS
            }), (0, kS.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, kS.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: SS
              })
            })]
          }), tS && (0, kS.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qS.X)({
              stopPropagation: !0
            }),
            onClick: SS => {
              SS.stopPropagation(), SS.preventDefault(), CS()
            },
            children: (0, kS.jsx)(NS.d, {
              name: "pen-to-square"
            })
          }), !tS && (0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, kS.jsx)(NS.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, kS.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: GS.color
        },
        ...(0, qS.X)(),
        onClick: () => {
          CS()
        },
        children: [(0, kS.jsx)(KS, {
          platform: HS
        }), (0, kS.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: GS.name
          }), (0, kS.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: jS("homePage:profileSocialLinkAdd")
          })]
        }), (0, kS.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, kS.jsx)(NS.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function GS(SS) {
      let {
        socialLinks: HS,
        editable: gS = !1,
        userContext: tS,
        onLinksUpdated: bS
      } = SS;
      if (!gS && 0 === HS.length) return null;
      const xS = new Map(HS.map((SS => [SS.platform, SS]))),
        NS = gS ? XS.n : HS.map((SS => SS.platform));
      return (0, kS.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, kS.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: NS.map((SS => (0, kS.jsx)(jS, {
            platform: SS,
            link: xS.get(SS),
            editable: gS,
            userContext: tS,
            onLinksUpdated: bS
          }, SS)))
        })
      })
    }
  },
  5032: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);