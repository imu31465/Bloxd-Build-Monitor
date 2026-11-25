export const id = 99;
export const ids = [99];
export const modules = {
  4900: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => eG
    });
    var wG = ZG(51),
      SG = ZG(1457),
      LG = ZG(352),
      yG = ZG(1192),
      kG = ZG(1557),
      UG = ZG(1230),
      YG = ZG(1490),
      VG = ZG(1431),
      pG = ZG(2655);
    const fG = {
      retries: 2,
      minTimeout: 2e3
    };
    var QG = ZG(1081),
      KG = ZG(1548),
      hG = ZG(1092),
      dG = ZG(1876),
      JG = ZG(1151),
      rG = ZG(1177),
      zG = ZG(3458),
      EG = ZG(1302),
      oG = ZG(1393),
      XG = ZG(1444),
      uG = ZG(2595),
      iG = ZG(2610),
      CG = ZG(4905),
      WG = ZG(2157),
      mG = ZG(1006),
      IG = ZG.n(mG),
      FG = ZG(1016),
      vG = ZG(4911),
      aG = ZG(17),
      cG = ZG(1895),
      lG = ZG(3634),
      jG = ZG(2003),
      PG = ZG(3582),
      MG = ZG(80),
      AG = ZG(4573),
      sG = ZG(1067);
    const qG = [CG];

    function nG(GG) {
      let {
        icon: bG,
        label: ZG,
        value: wG
      } = GG;
      return (0, sG.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, sG.jsx)(FG.c, {
          name: bG,
          className: "PlayerProfileStatIcon"
        }), (0, sG.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, sG.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ZG
          }), (0, sG.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: wG
          })]
        })]
      })
    }

    function gG(GG) {
      let {
        profile: bG
      } = GG;
      const {
        t: ZG,
        selectedLanguage: wG
      } = (0, JG.w)();
      let SG = ZG("homePage:profileUnknown");
      if (bG.lastOnline) {
        const GG = (0, JG.j)(wG.code, "homePage:profileTimeAgo");
        SG = ZG("homePage:profileTimeAgo", {
          time: (0, LG.lb)(GG, bG.lastOnline, Date.now())
        })
      }
      let yG = ZG("homePage:profileUnknown");
      return bG.accountCreatedAt && (yG = new Date(bG.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, sG.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, sG.jsx)(nG, {
          icon: "hourglass",
          label: ZG("homePage:profileTimePlayed"),
          value: (0, lG.b)(bG.totalPlayMinutes)
        }), (0, sG.jsx)(nG, {
          icon: "wifi",
          label: ZG("homePage:profileLastOnline"),
          value: SG
        }), (0, sG.jsx)(nG, {
          icon: "calendar",
          label: ZG("homePage:profileJoined"),
          value: yG
        })]
      })
    }

    function eG() {
      const {
        t: GG
      } = (0, JG.w)(), bG = (0, XG.useNavigatePreserveSearch)(), ZG = (0, QG.g)(), {
        playerName: CG,
        playerUrlName: mG
      } = (0, SG.v)(), lG = (0, SG.n)(), nG = (0, yG.i)(lG.pathname), eG = nG && ("urlId" in nG ? `urlId:${nG.urlId}` : `name:${nG.lowerCaseName}`), RG = (0, wG.useRef)(eG);
      RG.current = eG;
      const {
        userContext: TG,
        isUserContextUpdating: HG
      } = (0, hG.e)(), tG = (0, wG.useRef)(null), DG = (0, wG.useRef)(null), NG = (0, wG.useRef)(null), OG = (0, wG.useRef)(!1), xG = (0, wG.useRef)((0, LG.hc)(qG)), [BG, Gb] = (0, wG.useState)((() => {
        const GG = nG && iG.d.peek(TG, nG);
        return GG ? {
          status: "loaded",
          profile: GG,
          playerKey: eG
        } : {
          status: "loading"
        }
      })), [bb, Zb] = (0, wG.useState)(0);
      (0, wG.useEffect)(uG.c, []), (0, wG.useEffect)((() => {
        cG.gameBridge.send("leaveGame", {
          reloadPath: null
        }), aG.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [lG.key]);
      const wb = () => {
        const GG = (0, XG.getPreviousLocation)();
        null === GG || GG.startsWith("/play") ? (0, XG.navigateToHomePage)() : bG(-1)
      };
      (0, AG.e)(wb), (0, wG.useEffect)((() => {
        var GG;
        if (HG) return;
        if (!nG) return void Gb({
          status: "notFound",
          playerKey: eG
        });
        const bG = "urlId" in nG && (null === (GG = DG.current) || void 0 === GG ? void 0 : GG.urlId) === nG.urlId && NG.current === TG;
        if (bG && OG.current) return;
        const ZG = bG ? null : iG.d.peek(TG, nG);
        let wG = !1;
        const SG = GG => "loaded" === GG.status && (GG.playerKey === eG || "urlId" in nG && GG.profile.urlId === nG.urlId);
        return ZG ? (NG.current = TG, OG.current = !1, Gb({
          status: "loaded",
          profile: ZG,
          playerKey: eG
        }), iG.d.invalidate(nG)) : Gb((GG => SG(GG) ? GG : {
          status: "loading"
        })), async function(GG, bG) {
          if ("lowerCaseName" in bG && bG.lowerCaseName.length > UG.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await VG.d.getPlayerProfile(GG, bG, fG)
            }
          } catch (ZG) {
            return (0, pG.e)(ZG) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ZG), {
              status: "failed"
            })
          }
        }(TG, nG).then((GG => {
          wG || ("loaded" === GG.status && (NG.current = TG, OG.current = !0), Gb((bG => "failed" === GG.status && SG(bG) ? bG : {
            ...GG,
            playerKey: eG
          })))
        })), () => {
          wG = !0
        }
      }), [HG, eG, TG, bb]);
      const Sb = "loading" === BG.status || BG.playerKey === eG || "loaded" === BG.status && !!nG && "urlId" in nG && BG.profile.urlId === nG.urlId ? BG : {
          status: "loading"
        },
        Lb = "loaded" === Sb.status ? Sb.profile : null,
        yb = "loading" === Sb.status ? null : function(GG) {
          if ("loaded" === GG.status) {
            const {
              profile: bG
            } = GG;
            return (0, YG.V)({
              urlId: bG.urlId,
              name: bG.player.name,
              ranks: bG.player.ranks,
              socialLinks: bG.socialLinks
            })
          }
          return "notFound" === GG.status ? (0, YG.hb)() : null
        }(Sb),
        kb = null !== Lb && void 0 !== Lb && Lb.urlId ? (0, yG.k)({
          urlId: Lb.urlId,
          name: Lb.player.name
        }) : null;
      (0, KG.d)(kb);
      const Ub = null !== Lb && void 0 !== Lb && Lb.player.cosmetics.profileEffect ? WG.c[Lb.player.cosmetics.profileEffect] : void 0,
        Yb = null !== Lb && !HG && TG.getPlayerName().toLowerCase() === Lb.player.name.toLowerCase(),
        Vb = (0, jG.e)(null === Lb || void 0 === Lb ? void 0 : Lb.player.name),
        pb = Yb && TG.playerHasRank("youtuber");
      DG.current = Lb;
      const fb = (0, wG.useCallback)((() => {
          nG && (iG.d.invalidate(nG), iG.d.get(TG, nG).then((GG => {
            RG.current === eG && (OG.current = !0, Gb({
              status: "loaded",
              profile: GG,
              playerKey: eG
            }))
          })).catch((GG => {
            console.error("Failed to refresh user profile", GG)
          })))
        }), [eG, TG]),
        Qb = (0, wG.useCallback)((() => {
          var GG;
          const bG = DG.current;
          return !(!bG || null === (GG = tG.current) || void 0 === GG || !GG.isReady()) && (tG.current.setAllCosmetics(bG.player.cosmetics), !0)
        }), []);
      return (0, wG.useEffect)((() => {
        if (!Lb) return;
        let GG, bG = !1;
        const ZG = () => {
          bG || Qb() || (GG = setTimeout(ZG, 100))
        };
        return ZG(), () => {
          bG = !0, clearTimeout(GG)
        }
      }), [Lb, Qb]), (0, sG.jsxs)("div", {
        className: IG()("PlayerProfile", {
          PlayerProfilePortrait: ZG
        }),
        children: [yb && (0, sG.jsx)(kG.c, {
          meta: yb
        }), (0, sG.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Ub && (0, sG.jsx)(Ub, {}), !Ub && (0, sG.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${xG.current})`
            }
          })]
        }), (0, sG.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, sG.jsx)(oG.b, {
            onClick: wb,
            children: GG("general:back")
          }), Lb && !HG && !Yb && MG.featureFlags.useSocialFeatures && (0, sG.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, sG.jsx)(PG.e, {
              playerName: Lb.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Sb.status && (0, sG.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, sG.jsx)(EG.b, {})
        }), ("notFound" === Sb.status || "failed" === Sb.status) && (0, sG.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, sG.jsx)(FG.c, {
            name: "face-dizzy"
          }), (0, sG.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Sb.status ? GG("socialBar:playerNotFound", {
              playerName: null !== mG && void 0 !== mG ? mG : CG
            }) : GG("playerProfile:loadFailed")
          }), "failed" === Sb.status && (0, sG.jsx)(oG.d, {
            onClick: () => {
              Zb((GG => GG + 1))
            },
            children: GG("general:tryAgain")
          })]
        }), Lb && (0, sG.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, sG.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, sG.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, sG.jsx)(dG.c, {
                text: (0, rG.w)(Lb.player.ranks, Lb.player.name, Lb.player.nameColour),
                friendBadgeFor: Vb ? Lb.player.name : void 0
              })
            }), (0, sG.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, sG.jsx)(wG.Suspense, {
                fallback: (0, sG.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, sG.jsx)(EG.b, {})
                }),
                children: (0, sG.jsx)(uG.b, {
                  ref: tG,
                  onReady: () => {
                    Qb()
                  }
                })
              })
            })]
          }), (0, sG.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, sG.jsx)(gG, {
              profile: Lb
            }), (Lb.socialLinks.length > 0 || pb) && (0, sG.jsx)(vG.b, {
              socialLinks: Lb.socialLinks,
              editable: pb,
              userContext: TG,
              onLinksUpdated: fb
            }), (0, sG.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, sG.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: GG("homePage:profileReleasedGames")
              }), 0 === Lb.releasedGames.length && (0, sG.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: GG("homePage:profileNoReleasedGames")
              }), Lb.releasedGames.length > 0 && (0, sG.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Lb.releasedGames.map((GG => (0, sG.jsx)(zG.g, {
                  source: {
                    type: "preview",
                    preview: GG
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, GG.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4911: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => dG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4664),
      yG = ZG(1151),
      kG = ZG(1016),
      UG = ZG(1393),
      YG = ZG(1431),
      VG = ZG(1311),
      pG = ZG(2477),
      fG = ZG(1067);
    const QG = {
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

    function KG(GG) {
      let {
        platform: bG
      } = GG;
      const ZG = "youtube" === bG;
      return (0, fG.jsxs)("span", {
        className: SG()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZG
        }),
        children: [ZG && (0, fG.jsx)(pG.b, {
          variant: "white"
        }), !ZG && (0, fG.jsx)(kG.c, {
          name: QG[bG].icon,
          kit: "brands"
        })]
      })
    }

    function hG(GG) {
      let {
        platform: bG,
        link: ZG,
        editable: wG,
        userContext: SG,
        onLinksUpdated: pG
      } = GG;
      const {
        t: hG
      } = (0, yG.w)(), dG = QG[bG];
      if (!ZG && !wG) return null;

      function JG() {
        var GG;
        if (!SG || !pG) return;
        VG.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dG.name
            }
          },
          prefixText: LG.t[bG],
          placeholderText: "playBloxd",
          initialValue: null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.handle) && void 0 !== GG ? GG : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZG ? "general:remove" : void 0
        }).getResult().then((async GG => {
          if ("notificationTornDown" !== GG && null !== GG) try {
            "submit" === GG.type ? await YG.d.setSocialLink(SG, bG, GG.value) : await YG.d.clearSocialLink(SG, bG), pG()
          } catch (ZG) {
            console.error("Failed to update social link", ZG), VG.NotificationProvider.showAlertPopup({
              title: ZG.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZG) {
        const GG = `@${ZG.handle}`;
        return (0, fG.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dG.color
          },
          href: ZG.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, fG.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, fG.jsx)(KG, {
              platform: bG
            }), (0, fG.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, fG.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: GG
              })
            })]
          }), wG && (0, fG.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, UG.P)({
              stopPropagation: !0
            }),
            onClick: GG => {
              GG.stopPropagation(), GG.preventDefault(), JG()
            },
            children: (0, fG.jsx)(kG.c, {
              name: "pen-to-square"
            })
          }), !wG && (0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, fG.jsx)(kG.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, fG.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dG.color
        },
        ...(0, UG.P)(),
        onClick: () => {
          JG()
        },
        children: [(0, fG.jsx)(KG, {
          platform: bG
        }), (0, fG.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dG.name
          }), (0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: hG("homePage:profileSocialLinkAdd")
          })]
        }), (0, fG.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, fG.jsx)(kG.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dG(GG) {
      let {
        socialLinks: bG,
        editable: ZG = !1,
        userContext: wG,
        onLinksUpdated: SG
      } = GG;
      if (!ZG && 0 === bG.length) return null;
      const yG = new Map(bG.map((GG => [GG.platform, GG]))),
        kG = ZG ? LG.s : bG.map((GG => GG.platform));
      return (0, fG.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, fG.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: kG.map((GG => (0, fG.jsx)(hG, {
            platform: GG,
            link: yG.get(GG),
            editable: ZG,
            userContext: wG,
            onLinksUpdated: SG
          }, GG)))
        })
      })
    }
  },
  4905: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);