export const id = 114;
export const ids = [114];
export const modules = {
  5757: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => jR
    });
    var yR = GR(66),
      tR = GR(1677),
      uR = GR(377),
      ZR = GR(1328),
      qR = GR(1778),
      iR = GR(1359),
      fR = GR(1701),
      VR = GR(1647),
      KR = GR(3785);
    const wR = {
      retries: 2,
      minTimeout: 2e3
    };
    var rR = GR(1179),
      eR = GR(1771),
      aR = GR(1196),
      LR = GR(2105),
      nR = GR(1270),
      UR = GR(1317),
      WR = GR(4824),
      AR = GR(1465),
      CR = GR(1590),
      XR = GR(1663),
      MR = GR(3724),
      BR = GR(3734),
      lR = GR(5763),
      pR = GR(3071),
      gR = GR(1163),
      bR = GR.n(gR),
      vR = GR(1468),
      OR = GR(5766),
      xR = GR(25),
      NR = GR(2134),
      DR = GR(4964),
      HR = GR(2228),
      oR = GR(4941),
      cR = GR(103),
      PR = GR(5361),
      IR = GR(1378);
    const mR = [lR];

    function zR(RR) {
      let {
        icon: JR,
        label: GR,
        value: yR
      } = RR;
      return (0, IR.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, IR.jsx)(vR.d, {
          name: JR,
          className: "PlayerProfileStatIcon"
        }), (0, IR.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, IR.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: GR
          }), (0, IR.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: yR
          })]
        })]
      })
    }

    function SR(RR) {
      let {
        profile: JR
      } = RR;
      const {
        t: GR,
        selectedLanguage: yR
      } = (0, nR.A)();
      let tR = GR("homePage:profileUnknown");
      if (JR.lastOnline) {
        const RR = (0, nR.n)(yR.code, "homePage:profileTimeAgo");
        tR = GR("homePage:profileTimeAgo", {
          time: (0, uR.Z)(RR, JR.lastOnline, Date.now())
        })
      }
      let ZR = GR("homePage:profileUnknown");
      return JR.accountCreatedAt && (ZR = new Date(JR.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, IR.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, IR.jsx)(zR, {
          icon: "hourglass",
          label: GR("homePage:profileTimePlayed"),
          value: (0, DR.e)(JR.totalPlayMinutes)
        }), (0, IR.jsx)(zR, {
          icon: "wifi",
          label: GR("homePage:profileLastOnline"),
          value: tR
        }), (0, IR.jsx)(zR, {
          icon: "calendar",
          label: GR("homePage:profileJoined"),
          value: ZR
        })]
      })
    }

    function jR() {
      const {
        t: RR
      } = (0, nR.A)(), JR = (0, XR.useNavigatePreserveSearch)(), GR = (0, rR.h)(), {
        playerName: lR,
        playerUrlName: gR
      } = (0, tR.x)(), DR = (0, tR.r)(), zR = (0, ZR.c)(DR.pathname), jR = zR && ("urlId" in zR ? `urlId:${zR.urlId}` : `name:${zR.lowerCaseName}`), dR = (0, yR.useRef)(jR);
      dR.current = jR;
      const {
        userContext: ER,
        isUserContextUpdating: YR
      } = (0, aR.d)(), kR = (0, yR.useRef)(null), QR = (0, yR.useRef)(null), FR = (0, yR.useRef)(null), TR = (0, yR.useRef)(!1), sR = (0, yR.useRef)((0, uR.ec)(mR)), [hR, RJ] = (0, yR.useState)((() => {
        const RR = zR && BR.c.peek(ER, zR);
        return RR ? {
          status: "loaded",
          profile: RR,
          playerKey: jR
        } : {
          status: "loading"
        }
      })), [JJ, GJ] = (0, yR.useState)(0);
      (0, yR.useEffect)(MR.g, []), (0, yR.useEffect)((() => {
        NR.gameBridge.send("leaveGame", {
          reloadPath: null
        }), xR.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [DR.key]);
      const yJ = () => {
        const RR = (0, XR.getPreviousLocation)();
        null === RR || RR.startsWith("/play") ? (0, XR.navigateToHomePage)() : JR(-1)
      };
      (0, PR.c)(yJ), (0, yR.useEffect)((() => {
        var RR;
        if (YR) return;
        if (!zR) return void RJ({
          status: "notFound",
          playerKey: jR
        });
        const JR = "urlId" in zR && (null === (RR = QR.current) || void 0 === RR ? void 0 : RR.urlId) === zR.urlId && FR.current === ER;
        if (JR && TR.current) return;
        const GR = JR ? null : BR.c.peek(ER, zR);
        let yR = !1;
        const tR = RR => "loaded" === RR.status && (RR.playerKey === jR || "urlId" in zR && RR.profile.urlId === zR.urlId);
        return GR ? (FR.current = ER, TR.current = !1, RJ({
          status: "loaded",
          profile: GR,
          playerKey: jR
        }), BR.c.invalidate(zR)) : RJ((RR => tR(RR) ? RR : {
          status: "loading"
        })), async function(RR, JR) {
          if ("lowerCaseName" in JR && JR.lowerCaseName.length > iR.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await VR.c.getPlayerProfile(RR, JR, wR)
            }
          } catch (GR) {
            return (0, KR.b)(GR) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", GR), {
              status: "failed"
            })
          }
        }(ER, zR).then((RR => {
          yR || ("loaded" === RR.status && (FR.current = ER, TR.current = !0), RJ((JR => "failed" === RR.status && tR(JR) ? JR : {
            ...RR,
            playerKey: jR
          })))
        })), () => {
          yR = !0
        }
      }), [YR, jR, ER, JJ]);
      const tJ = "loading" === hR.status || hR.playerKey === jR || "loaded" === hR.status && !!zR && "urlId" in zR && hR.profile.urlId === zR.urlId ? hR : {
          status: "loading"
        },
        uJ = "loaded" === tJ.status ? tJ.profile : null,
        ZJ = "loading" === tJ.status ? null : function(RR) {
          if ("loaded" === RR.status) {
            const {
              profile: JR
            } = RR;
            return (0, fR.Y)({
              urlId: JR.urlId,
              name: JR.player.name,
              ranks: JR.player.ranks,
              socialLinks: JR.socialLinks
            })
          }
          return "notFound" === RR.status ? (0, fR.gb)() : null
        }(tJ),
        qJ = null !== uJ && void 0 !== uJ && uJ.urlId ? (0, ZR.d)({
          urlId: uJ.urlId,
          name: uJ.player.name
        }) : null;
      (0, eR.i)(qJ);
      const iJ = null !== uJ && void 0 !== uJ && uJ.player.cosmetics.profileEffect ? pR.f[uJ.player.cosmetics.profileEffect] : void 0,
        fJ = null !== uJ && !YR && ER.getPlayerName().toLowerCase() === uJ.player.name.toLowerCase(),
        VJ = (0, HR.d)(null === uJ || void 0 === uJ ? void 0 : uJ.player.name),
        KJ = fJ && ER.playerHasRank("youtuber");
      QR.current = uJ;
      const wJ = (0, yR.useCallback)((() => {
          zR && (BR.c.invalidate(zR), BR.c.get(ER, zR).then((RR => {
            dR.current === jR && (TR.current = !0, RJ({
              status: "loaded",
              profile: RR,
              playerKey: jR
            }))
          })).catch((RR => {
            console.error("Failed to refresh user profile", RR)
          })))
        }), [jR, ER]),
        rJ = (0, yR.useCallback)((() => {
          var RR;
          const JR = QR.current;
          return !(!JR || null === (RR = kR.current) || void 0 === RR || !RR.isReady()) && (kR.current.setAllCosmetics(JR.player.cosmetics), !0)
        }), []);
      return (0, yR.useEffect)((() => {
        if (!uJ) return;
        let RR, JR = !1;
        const GR = () => {
          JR || rJ() || (RR = setTimeout(GR, 100))
        };
        return GR(), () => {
          JR = !0, clearTimeout(RR)
        }
      }), [uJ, rJ]), (0, IR.jsxs)("div", {
        className: bR()("PlayerProfile", {
          PlayerProfilePortrait: GR
        }),
        children: [ZJ && (0, IR.jsx)(qR.b, {
          meta: ZJ
        }), (0, IR.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [iJ && (0, IR.jsx)(iJ, {}), !iJ && (0, IR.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${sR.current})`
            }
          })]
        }), (0, IR.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, IR.jsx)(CR.d, {
            onClick: yJ,
            children: RR("general:back")
          }), uJ && !YR && !fJ && cR.featureFlags.useSocialFeatures && (0, IR.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, IR.jsx)(oR.b, {
              playerName: uJ.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === tJ.status && (0, IR.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, IR.jsx)(AR.d, {})
        }), ("notFound" === tJ.status || "failed" === tJ.status) && (0, IR.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, IR.jsx)(vR.d, {
            name: "face-dizzy"
          }), (0, IR.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === tJ.status ? RR("socialBar:playerNotFound", {
              playerName: null !== gR && void 0 !== gR ? gR : lR
            }) : RR("playerProfile:loadFailed")
          }), "failed" === tJ.status && (0, IR.jsx)(CR.g, {
            onClick: () => {
              GJ((RR => RR + 1))
            },
            children: RR("general:tryAgain")
          })]
        }), uJ && (0, IR.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, IR.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, IR.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, IR.jsx)(LR.c, {
                text: (0, UR.u)(uJ.player.ranks, uJ.player.name, uJ.player.nameColour),
                friendBadgeFor: VJ ? uJ.player.name : void 0
              })
            }), (0, IR.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, IR.jsx)(yR.Suspense, {
                fallback: (0, IR.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, IR.jsx)(AR.d, {})
                }),
                children: (0, IR.jsx)(MR.e, {
                  ref: kR,
                  onReady: () => {
                    rJ()
                  }
                })
              })
            })]
          }), (0, IR.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, IR.jsx)(SR, {
              profile: uJ
            }), (uJ.socialLinks.length > 0 || KJ) && (0, IR.jsx)(OR.e, {
              socialLinks: uJ.socialLinks,
              editable: KJ,
              userContext: ER,
              onLinksUpdated: wJ
            }), (0, IR.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, IR.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: RR("homePage:profileReleasedGames")
              }), 0 === uJ.releasedGames.length && (0, IR.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: RR("homePage:profileNoReleasedGames")
              }), uJ.releasedGames.length > 0 && (0, IR.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: uJ.releasedGames.map((RR => (0, IR.jsx)(WR.i, {
                  source: {
                    type: "preview",
                    preview: RR
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, RR.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5766: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5434),
      ZR = GR(1270),
      qR = GR(1468),
      iR = GR(1590),
      fR = GR(1647),
      VR = GR(1493),
      KR = GR(3606),
      wR = GR(1378);
    const rR = {
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

    function eR(RR) {
      let {
        platform: JR
      } = RR;
      const GR = "youtube" === JR;
      return (0, wR.jsxs)("span", {
        className: tR()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: GR
        }),
        children: [GR && (0, wR.jsx)(KR.e, {
          variant: "white"
        }), !GR && (0, wR.jsx)(qR.d, {
          name: rR[JR].icon,
          kit: "brands"
        })]
      })
    }

    function aR(RR) {
      let {
        platform: JR,
        link: GR,
        editable: yR,
        userContext: tR,
        onLinksUpdated: KR
      } = RR;
      const {
        t: aR
      } = (0, ZR.A)(), LR = rR[JR];
      if (!GR && !yR) return null;

      function nR() {
        var RR;
        if (!tR || !KR) return;
        VR.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: LR.name
            }
          },
          prefixText: uR.u[JR],
          placeholderText: "playBloxd",
          initialValue: null !== (RR = null === GR || void 0 === GR ? void 0 : GR.handle) && void 0 !== RR ? RR : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: GR ? "general:remove" : void 0
        }).getResult().then((async RR => {
          if ("notificationTornDown" !== RR && null !== RR) try {
            "submit" === RR.type ? await fR.c.setSocialLink(tR, JR, RR.value) : await fR.c.clearSocialLink(tR, JR), KR()
          } catch (GR) {
            console.error("Failed to update social link", GR), VR.NotificationProvider.showAlertPopup({
              title: GR.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (GR) {
        const RR = `@${GR.handle}`;
        return (0, wR.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: LR.color
          },
          href: GR.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, wR.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, wR.jsx)(eR, {
              platform: JR
            }), (0, wR.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, wR.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: RR
              })
            })]
          }), yR && (0, wR.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, iR.bb)({
              stopPropagation: !0
            }),
            onClick: RR => {
              RR.stopPropagation(), RR.preventDefault(), nR()
            },
            children: (0, wR.jsx)(qR.d, {
              name: "pen-to-square"
            })
          }), !yR && (0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, wR.jsx)(qR.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, wR.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: LR.color
        },
        ...(0, iR.bb)(),
        onClick: () => {
          nR()
        },
        children: [(0, wR.jsx)(eR, {
          platform: JR
        }), (0, wR.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: LR.name
          }), (0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: aR("homePage:profileSocialLinkAdd")
          })]
        }), (0, wR.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, wR.jsx)(qR.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function LR(RR) {
      let {
        socialLinks: JR,
        editable: GR = !1,
        userContext: yR,
        onLinksUpdated: tR
      } = RR;
      if (!GR && 0 === JR.length) return null;
      const ZR = new Map(JR.map((RR => [RR.platform, RR]))),
        qR = GR ? uR.r : JR.map((RR => RR.platform));
      return (0, wR.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, wR.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: qR.map((RR => (0, wR.jsx)(aR, {
            platform: RR,
            link: ZR.get(RR),
            editable: GR,
            userContext: yR,
            onLinksUpdated: tR
          }, RR)))
        })
      })
    }
  },
  5763: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);