export const id = 80;
export const ids = [80];
export const modules = {
  3857: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => uW
    });
    var wW = MW(75),
      CW = MW(1345),
      zR = MW(284),
      AW = MW(1064),
      bR = MW(1441),
      yR = MW(1099),
      NW = MW(1371),
      eW = MW(1314),
      BW = MW(2083);
    const tR = {
      retries: 2,
      minTimeout: 2e3
    };
    var TW = MW(958),
      gR = MW(1435),
      iR = MW(969),
      YW = MW(1523),
      JW = MW(1027),
      PW = MW(1053),
      IW = MW(2576),
      oW = MW(1157),
      lW = MW(1255),
      FW = MW(1330),
      fW = MW(2030),
      QW = MW(2041),
      rR = MW(3859),
      cR = MW(1749),
      XW = MW(897),
      jR = MW.n(XW),
      kR = MW(904),
      aR = MW(3861),
      sW = MW(27),
      dW = MW(1544),
      pW = MW(2721),
      hW = MW(1616),
      UW = MW(2684),
      EW = MW(116),
      VW = MW(3591),
      mR = MW(940);
    const xR = [rR];

    function vR(WW) {
      let {
        icon: RW,
        label: MW,
        value: wW
      } = WW;
      return (0, mR.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, mR.jsx)(kR.e, {
          name: RW,
          className: "PlayerProfileStatIcon"
        }), (0, mR.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, mR.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: MW
          }), (0, mR.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: wW
          })]
        })]
      })
    }

    function KW(WW) {
      let {
        profile: RW
      } = WW;
      const {
        t: MW,
        selectedLanguage: wW
      } = (0, JW.C)();
      let CW = MW("homePage:profileUnknown");
      if (RW.lastOnline) {
        const WW = (0, JW.m)(wW.code, "homePage:profileTimeAgo");
        CW = MW("homePage:profileTimeAgo", {
          time: (0, zR.bb)(WW, RW.lastOnline, Date.now())
        })
      }
      let AW = MW("homePage:profileUnknown");
      return RW.accountCreatedAt && (AW = new Date(RW.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, mR.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, mR.jsx)(vR, {
          icon: "hourglass",
          label: MW("homePage:profileTimePlayed"),
          value: (0, pW.e)(RW.totalPlayMinutes)
        }), (0, mR.jsx)(vR, {
          icon: "wifi",
          label: MW("homePage:profileLastOnline"),
          value: CW
        }), (0, mR.jsx)(vR, {
          icon: "calendar",
          label: MW("homePage:profileJoined"),
          value: AW
        })]
      })
    }

    function uW() {
      const {
        t: WW
      } = (0, JW.C)(), RW = (0, FW.useNavigatePreserveSearch)(), MW = (0, TW.f)(), {
        playerName: rR,
        playerUrlName: XW
      } = (0, CW.A)(), pW = (0, CW.s)(), vR = (0, AW.f)(pW.pathname), uW = vR && ("urlId" in vR ? `urlId:${vR.urlId}` : `name:${vR.lowerCaseName}`), OW = (0, wW.useRef)(uW);
      OW.current = uW;
      const {
        userContext: nW,
        isUserContextUpdating: GW
      } = (0, iR.c)(), LW = (0, wW.useRef)(null), HW = (0, wW.useRef)(null), DW = (0, wW.useRef)(null), qR = (0, wW.useRef)(!1), ZW = (0, wW.useRef)((0, zR._b)(xR)), [SW, WR] = (0, wW.useState)((() => {
        const WW = vR && QW.d.peek(nW, vR);
        return WW ? {
          status: "loaded",
          profile: WW,
          playerKey: uW
        } : {
          status: "loading"
        }
      })), [RR, MR] = (0, wW.useState)(0);
      (0, wW.useEffect)(fW.d, []), (0, wW.useEffect)((() => {
        dW.gameBridge.send("leaveGame", {
          reloadPath: null
        }), sW.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [pW.key]);
      const wR = () => {
        const WW = (0, FW.getPreviousLocation)();
        null === WW || WW.startsWith("/play") ? (0, FW.navigateToHomePage)() : RW(-1)
      };
      (0, VW.c)(wR), (0, wW.useEffect)((() => {
        var WW;
        if (GW) return;
        if (!vR) return void WR({
          status: "notFound",
          playerKey: uW
        });
        const RW = "urlId" in vR && (null === (WW = HW.current) || void 0 === WW ? void 0 : WW.urlId) === vR.urlId && DW.current === nW;
        if (RW && qR.current) return;
        const MW = RW ? null : QW.d.peek(nW, vR);
        let wW = !1;
        const CW = WW => "loaded" === WW.status && (WW.playerKey === uW || "urlId" in vR && WW.profile.urlId === vR.urlId);
        return MW ? (DW.current = nW, qR.current = !1, WR({
          status: "loaded",
          profile: MW,
          playerKey: uW
        }), QW.d.invalidate(vR)) : WR((WW => CW(WW) ? WW : {
          status: "loading"
        })), async function(WW, RW) {
          if ("lowerCaseName" in RW && RW.lowerCaseName.length > yR.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await eW.c.getPlayerProfile(WW, RW, tR)
            }
          } catch (MW) {
            return (0, BW.e)(MW) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", MW), {
              status: "failed"
            })
          }
        }(nW, vR).then((WW => {
          wW || ("loaded" === WW.status && (DW.current = nW, qR.current = !0), WR((RW => "failed" === WW.status && CW(RW) ? RW : {
            ...WW,
            playerKey: uW
          })))
        })), () => {
          wW = !0
        }
      }), [GW, uW, nW, RR]);
      const CR = "loading" === SW.status || SW.playerKey === uW || "loaded" === SW.status && !!vR && "urlId" in vR && SW.profile.urlId === vR.urlId ? SW : {
          status: "loading"
        },
        zM = "loaded" === CR.status ? CR.profile : null,
        AR = "loading" === CR.status ? null : function(WW) {
          if ("loaded" === WW.status) {
            const {
              profile: RW
            } = WW;
            return (0, NW.S)({
              urlId: RW.urlId,
              name: RW.player.name,
              ranks: RW.player.ranks,
              socialLinks: RW.socialLinks
            })
          }
          return "notFound" === WW.status ? (0, NW._)() : null
        }(CR),
        bM = null !== zM && void 0 !== zM && zM.urlId ? (0, AW.g)({
          urlId: zM.urlId,
          name: zM.player.name
        }) : null;
      (0, gR.e)(bM);
      const yM = null !== zM && void 0 !== zM && zM.player.cosmetics.profileEffect ? cR.e[zM.player.cosmetics.profileEffect] : void 0,
        NR = null !== zM && !GW && nW.getPlayerName().toLowerCase() === zM.player.name.toLowerCase(),
        eR = (0, hW.b)(null === zM || void 0 === zM ? void 0 : zM.player.name),
        BR = NR && nW.playerHasRank("youtuber");
      HW.current = zM;
      const tM = (0, wW.useCallback)((() => {
          vR && (QW.d.invalidate(vR), QW.d.get(nW, vR).then((WW => {
            OW.current === uW && (qR.current = !0, WR({
              status: "loaded",
              profile: WW,
              playerKey: uW
            }))
          })).catch((WW => {
            console.error("Failed to refresh user profile", WW)
          })))
        }), [uW, nW]),
        TR = (0, wW.useCallback)((() => {
          var WW;
          const RW = HW.current;
          return !(!RW || null === (WW = LW.current) || void 0 === WW || !WW.isReady()) && (LW.current.setAllCosmetics(RW.player.cosmetics), !0)
        }), []);
      return (0, wW.useEffect)((() => {
        if (!zM) return;
        let WW, RW = !1;
        const MW = () => {
          RW || TR() || (WW = setTimeout(MW, 100))
        };
        return MW(), () => {
          RW = !0, clearTimeout(WW)
        }
      }), [zM, TR]), (0, mR.jsxs)("div", {
        className: jR()("PlayerProfile", {
          PlayerProfilePortrait: MW
        }),
        children: [AR && (0, mR.jsx)(bR.e, {
          meta: AR
        }), (0, mR.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [yM && (0, mR.jsx)(yM, {}), !yM && (0, mR.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${ZW.current})`
            }
          })]
        }), (0, mR.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, mR.jsx)(lW.d, {
            onClick: wR,
            children: WW("general:back")
          }), zM && !GW && !NR && EW.featureFlags.useSocialFeatures && (0, mR.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, mR.jsx)(UW.e, {
              playerName: zM.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === CR.status && (0, mR.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, mR.jsx)(oW.d, {})
        }), ("notFound" === CR.status || "failed" === CR.status) && (0, mR.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, mR.jsx)(kR.e, {
            name: "face-dizzy"
          }), (0, mR.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === CR.status ? WW("socialBar:playerNotFound", {
              playerName: null !== XW && void 0 !== XW ? XW : rR
            }) : WW("playerProfile:loadFailed")
          }), "failed" === CR.status && (0, mR.jsx)(lW.h, {
            onClick: () => {
              MR((WW => WW + 1))
            },
            children: WW("general:tryAgain")
          })]
        }), zM && (0, mR.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, mR.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, mR.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, mR.jsx)(YW.c, {
                text: (0, PW.s)(zM.player.ranks, zM.player.name, zM.player.nameColour),
                friendBadgeFor: eR ? zM.player.name : void 0
              })
            }), (0, mR.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, mR.jsx)(wW.Suspense, {
                fallback: (0, mR.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, mR.jsx)(oW.d, {})
                }),
                children: (0, mR.jsx)(fW.c, {
                  ref: LW,
                  onReady: () => {
                    TR()
                  }
                })
              })
            })]
          }), (0, mR.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, mR.jsx)(KW, {
              profile: zM
            }), (zM.socialLinks.length > 0 || BR) && (0, mR.jsx)(aR.e, {
              socialLinks: zM.socialLinks,
              editable: BR,
              userContext: nW,
              onLinksUpdated: tM
            }), (0, mR.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, mR.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: WW("homePage:profileReleasedGames")
              }), 0 === zM.releasedGames.length && (0, mR.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: WW("homePage:profileNoReleasedGames")
              }), zM.releasedGames.length > 0 && (0, mR.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: zM.releasedGames.map((WW => (0, mR.jsx)(IW.d, {
                  source: {
                    type: "preview",
                    preview: WW
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, WW.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  3861: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => YW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(3648),
      AW = MW(1027),
      bR = MW(904),
      yR = MW(1255),
      NW = MW(1314),
      eW = MW(1166),
      BW = MW(1971),
      tR = MW(940);
    const TW = {
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

    function gR(WW) {
      let {
        platform: RW
      } = WW;
      const MW = "youtube" === RW;
      return (0, tR.jsxs)("span", {
        className: CW()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: MW
        }),
        children: [MW && (0, tR.jsx)(BW.b, {
          variant: "white"
        }), !MW && (0, tR.jsx)(bR.e, {
          name: TW[RW].icon,
          kit: "brands"
        })]
      })
    }

    function iR(WW) {
      let {
        platform: RW,
        link: MW,
        editable: wW,
        userContext: CW,
        onLinksUpdated: BW
      } = WW;
      const {
        t: iR
      } = (0, AW.C)(), YW = TW[RW];
      if (!MW && !wW) return null;

      function JW() {
        var WW;
        if (!CW || !BW) return;
        eW.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: YW.name
            }
          },
          prefixText: zR.y[RW],
          placeholderText: "playBloxd",
          initialValue: null !== (WW = null === MW || void 0 === MW ? void 0 : MW.handle) && void 0 !== WW ? WW : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: MW ? "general:remove" : void 0
        }).getResult().then((async WW => {
          if ("notificationTornDown" !== WW && null !== WW) try {
            "submit" === WW.type ? await NW.c.setSocialLink(CW, RW, WW.value) : await NW.c.clearSocialLink(CW, RW), BW()
          } catch (MW) {
            console.error("Failed to update social link", MW), eW.NotificationProvider.showAlertPopup({
              title: MW.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (MW) {
        const WW = `@${MW.handle}`;
        return (0, tR.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: YW.color
          },
          href: MW.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, tR.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, tR.jsx)(gR, {
              platform: RW
            }), (0, tR.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, tR.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: WW
              })
            })]
          }), wW && (0, tR.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, yR.V)({
              stopPropagation: !0
            }),
            onClick: WW => {
              WW.stopPropagation(), WW.preventDefault(), JW()
            },
            children: (0, tR.jsx)(bR.e, {
              name: "pen-to-square"
            })
          }), !wW && (0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, tR.jsx)(bR.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, tR.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: YW.color
        },
        ...(0, yR.V)(),
        onClick: () => {
          JW()
        },
        children: [(0, tR.jsx)(gR, {
          platform: RW
        }), (0, tR.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: YW.name
          }), (0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: iR("homePage:profileSocialLinkAdd")
          })]
        }), (0, tR.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, tR.jsx)(bR.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function YW(WW) {
      let {
        socialLinks: RW,
        editable: MW = !1,
        userContext: wW,
        onLinksUpdated: CW
      } = WW;
      if (!MW && 0 === RW.length) return null;
      const AW = new Map(RW.map((WW => [WW.platform, WW]))),
        bR = MW ? zR.w : RW.map((WW => WW.platform));
      return (0, tR.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, tR.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bR.map((WW => (0, tR.jsx)(iR, {
            platform: WW,
            link: AW.get(WW),
            editable: MW,
            userContext: wW,
            onLinksUpdated: CW
          }, WW)))
        })
      })
    }
  },
  3859: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);