export const id = 96;
export const ids = [96];
export const modules = {
  4833: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => gT
    });
    var lT = cT(71),
      MT = cT(1535),
      KT = cT(339),
      OT = cT(1242),
      yT = cT(1637),
      fT = cT(1279),
      xT = cT(1559),
      IT = cT(1518),
      AT = cT(2676);
    const CT = {
      retries: 2,
      minTimeout: 2e3
    };
    var jT = cT(1117),
      vT = cT(1628),
      tT = cT(1130),
      hT = cT(1921),
      NT = cT(1195),
      QT = cT(1226),
      ST = cT(3419),
      DT = cT(1348),
      aT = cT(1470),
      FT = cT(1530),
      rT = cT(2619),
      PT = cT(2625),
      wT = cT(4837),
      mT = cT(2181),
      bT = cT(1046),
      zT = cT.n(bT),
      JT = cT(1061),
      oT = cT(4843),
      HT = cT(31),
      eT = cT(1953),
      GT = cT(3598),
      VT = cT(2051),
      ET = cT(3547),
      ZT = cT(118),
      uT = cT(4537),
      XT = cT(1099);
    const dT = [wT];

    function LT(TT) {
      let {
        icon: kT,
        label: cT,
        value: lT
      } = TT;
      return (0, XT.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, XT.jsx)(JT.e, {
          name: kT,
          className: "PlayerProfileStatIcon"
        }), (0, XT.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, XT.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: cT
          }), (0, XT.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: lT
          })]
        })]
      })
    }

    function RT(TT) {
      let {
        profile: kT
      } = TT;
      const {
        t: cT,
        selectedLanguage: lT
      } = (0, NT.B)();
      let MT = cT("homePage:profileUnknown");
      if (kT.lastOnline) {
        const TT = (0, NT.k)(lT.code, "homePage:profileTimeAgo");
        MT = cT("homePage:profileTimeAgo", {
          time: (0, KT._)(TT, kT.lastOnline, Date.now())
        })
      }
      let OT = cT("homePage:profileUnknown");
      return kT.accountCreatedAt && (OT = new Date(kT.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, XT.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, XT.jsx)(LT, {
          icon: "hourglass",
          label: cT("homePage:profileTimePlayed"),
          value: (0, GT.e)(kT.totalPlayMinutes)
        }), (0, XT.jsx)(LT, {
          icon: "wifi",
          label: cT("homePage:profileLastOnline"),
          value: MT
        }), (0, XT.jsx)(LT, {
          icon: "calendar",
          label: cT("homePage:profileJoined"),
          value: OT
        })]
      })
    }

    function gT() {
      const {
        t: TT
      } = (0, NT.B)(), kT = (0, FT.useNavigatePreserveSearch)(), cT = (0, jT.i)(), {
        playerName: wT,
        playerUrlName: bT
      } = (0, MT.v)(), GT = (0, MT.s)(), LT = (0, OT.f)(GT.pathname), gT = LT && ("urlId" in LT ? `urlId:${LT.urlId}` : `name:${LT.lowerCaseName}`), UT = (0, lT.useRef)(gT);
      UT.current = gT;
      const {
        userContext: YT,
        isUserContextUpdating: BT
      } = (0, tT.b)(), WT = (0, lT.useRef)(null), nT = (0, lT.useRef)(null), pT = (0, lT.useRef)(null), iT = (0, lT.useRef)(!1), qT = (0, lT.useRef)((0, KT.Wb)(dT)), [sT, Tk] = (0, lT.useState)((() => {
        const TT = LT && PT.c.peek(YT, LT);
        return TT ? {
          status: "loaded",
          profile: TT,
          playerKey: gT
        } : {
          status: "loading"
        }
      })), [kk, ck] = (0, lT.useState)(0);
      (0, lT.useEffect)(rT.c, []), (0, lT.useEffect)((() => {
        eT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), HT.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [GT.key]);
      const lk = () => {
        const TT = (0, FT.getPreviousLocation)();
        null === TT || TT.startsWith("/play") ? (0, FT.navigateToHomePage)() : kT(-1)
      };
      (0, uT.e)(lk), (0, lT.useEffect)((() => {
        var TT;
        if (BT) return;
        if (!LT) return void Tk({
          status: "notFound",
          playerKey: gT
        });
        const kT = "urlId" in LT && (null === (TT = nT.current) || void 0 === TT ? void 0 : TT.urlId) === LT.urlId && pT.current === YT;
        if (kT && iT.current) return;
        const cT = kT ? null : PT.c.peek(YT, LT);
        let lT = !1;
        const MT = TT => "loaded" === TT.status && (TT.playerKey === gT || "urlId" in LT && TT.profile.urlId === LT.urlId);
        return cT ? (pT.current = YT, iT.current = !1, Tk({
          status: "loaded",
          profile: cT,
          playerKey: gT
        }), PT.c.invalidate(LT)) : Tk((TT => MT(TT) ? TT : {
          status: "loading"
        })), async function(TT, kT) {
          if ("lowerCaseName" in kT && kT.lowerCaseName.length > fT.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await IT.d.getPlayerProfile(TT, kT, CT)
            }
          } catch (cT) {
            return (0, AT.d)(cT) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", cT), {
              status: "failed"
            })
          }
        }(YT, LT).then((TT => {
          lT || ("loaded" === TT.status && (pT.current = YT, iT.current = !0), Tk((kT => "failed" === TT.status && MT(kT) ? kT : {
            ...TT,
            playerKey: gT
          })))
        })), () => {
          lT = !0
        }
      }), [BT, gT, YT, kk]);
      const Mk = "loading" === sT.status || sT.playerKey === gT || "loaded" === sT.status && !!LT && "urlId" in LT && sT.profile.urlId === LT.urlId ? sT : {
          status: "loading"
        },
        Kk = "loaded" === Mk.status ? Mk.profile : null,
        Ok = "loading" === Mk.status ? null : function(TT) {
          if ("loaded" === TT.status) {
            const {
              profile: kT
            } = TT;
            return (0, xT.T)({
              urlId: kT.urlId,
              name: kT.player.name,
              ranks: kT.player.ranks,
              socialLinks: kT.socialLinks
            })
          }
          return "notFound" === TT.status ? (0, xT.bb)() : null
        }(Mk),
        yk = null !== Kk && void 0 !== Kk && Kk.urlId ? (0, OT.h)({
          urlId: Kk.urlId,
          name: Kk.player.name
        }) : null;
      (0, vT.e)(yk);
      const fk = null !== Kk && void 0 !== Kk && Kk.player.cosmetics.profileEffect ? mT.f[Kk.player.cosmetics.profileEffect] : void 0,
        xk = null !== Kk && !BT && YT.getPlayerName().toLowerCase() === Kk.player.name.toLowerCase(),
        Ik = (0, VT.d)(null === Kk || void 0 === Kk ? void 0 : Kk.player.name),
        Ak = xk && YT.playerHasRank("youtuber");
      nT.current = Kk;
      const Ck = (0, lT.useCallback)((() => {
          LT && (PT.c.invalidate(LT), PT.c.get(YT, LT).then((TT => {
            UT.current === gT && (iT.current = !0, Tk({
              status: "loaded",
              profile: TT,
              playerKey: gT
            }))
          })).catch((TT => {
            console.error("Failed to refresh user profile", TT)
          })))
        }), [gT, YT]),
        jk = (0, lT.useCallback)((() => {
          var TT;
          const kT = nT.current;
          return !(!kT || null === (TT = WT.current) || void 0 === TT || !TT.isReady()) && (WT.current.setAllCosmetics(kT.player.cosmetics), !0)
        }), []);
      return (0, lT.useEffect)((() => {
        if (!Kk) return;
        let TT, kT = !1;
        const cT = () => {
          kT || jk() || (TT = setTimeout(cT, 100))
        };
        return cT(), () => {
          kT = !0, clearTimeout(TT)
        }
      }), [Kk, jk]), (0, XT.jsxs)("div", {
        className: zT()("PlayerProfile", {
          PlayerProfilePortrait: cT
        }),
        children: [Ok && (0, XT.jsx)(yT.b, {
          meta: Ok
        }), (0, XT.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [fk && (0, XT.jsx)(fk, {}), !fk && (0, XT.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${qT.current})`
            }
          })]
        }), (0, XT.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, XT.jsx)(aT.b, {
            onClick: lk,
            children: TT("general:back")
          }), Kk && !BT && !xk && ZT.featureFlags.useSocialFeatures && (0, XT.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, XT.jsx)(ET.c, {
              playerName: Kk.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Mk.status && (0, XT.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, XT.jsx)(DT.d, {})
        }), ("notFound" === Mk.status || "failed" === Mk.status) && (0, XT.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, XT.jsx)(JT.e, {
            name: "face-dizzy"
          }), (0, XT.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Mk.status ? TT("socialBar:playerNotFound", {
              playerName: null !== bT && void 0 !== bT ? bT : wT
            }) : TT("playerProfile:loadFailed")
          }), "failed" === Mk.status && (0, XT.jsx)(aT.e, {
            onClick: () => {
              ck((TT => TT + 1))
            },
            children: TT("general:tryAgain")
          })]
        }), Kk && (0, XT.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, XT.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, XT.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, XT.jsx)(hT.b, {
                text: (0, QT.y)(Kk.player.ranks, Kk.player.name, Kk.player.nameColour),
                friendBadgeFor: Ik ? Kk.player.name : void 0
              })
            }), (0, XT.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, XT.jsx)(lT.Suspense, {
                fallback: (0, XT.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, XT.jsx)(DT.d, {})
                }),
                children: (0, XT.jsx)(rT.b, {
                  ref: WT,
                  onReady: () => {
                    jk()
                  }
                })
              })
            })]
          }), (0, XT.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, XT.jsx)(RT, {
              profile: Kk
            }), (Kk.socialLinks.length > 0 || Ak) && (0, XT.jsx)(oT.b, {
              socialLinks: Kk.socialLinks,
              editable: Ak,
              userContext: YT,
              onLinksUpdated: Ck
            }), (0, XT.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, XT.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: TT("homePage:profileReleasedGames")
              }), 0 === Kk.releasedGames.length && (0, XT.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: TT("homePage:profileNoReleasedGames")
              }), Kk.releasedGames.length > 0 && (0, XT.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Kk.releasedGames.map((TT => (0, XT.jsx)(ST.d, {
                  source: {
                    type: "preview",
                    preview: TT
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, TT.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4843: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => hT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4626),
      OT = cT(1195),
      yT = cT(1061),
      fT = cT(1470),
      xT = cT(1518),
      IT = cT(1363),
      AT = cT(2553),
      CT = cT(1099);
    const jT = {
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

    function vT(TT) {
      let {
        platform: kT
      } = TT;
      const cT = "youtube" === kT;
      return (0, CT.jsxs)("span", {
        className: MT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cT
        }),
        children: [cT && (0, CT.jsx)(AT.c, {
          variant: "white"
        }), !cT && (0, CT.jsx)(yT.e, {
          name: jT[kT].icon,
          kit: "brands"
        })]
      })
    }

    function tT(TT) {
      let {
        platform: kT,
        link: cT,
        editable: lT,
        userContext: MT,
        onLinksUpdated: AT
      } = TT;
      const {
        t: tT
      } = (0, OT.B)(), hT = jT[kT];
      if (!cT && !lT) return null;

      function NT() {
        var TT;
        if (!MT || !AT) return;
        IT.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hT.name
            }
          },
          prefixText: KT.x[kT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === cT || void 0 === cT ? void 0 : cT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await xT.d.setSocialLink(MT, kT, TT.value) : await xT.d.clearSocialLink(MT, kT), AT()
          } catch (cT) {
            console.error("Failed to update social link", cT), IT.NotificationProvider.showAlertPopup({
              title: cT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cT) {
        const TT = `@${cT.handle}`;
        return (0, CT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hT.color
          },
          href: cT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, CT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, CT.jsx)(vT, {
              platform: kT
            }), (0, CT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, CT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), lT && (0, CT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, fT.X)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), NT()
            },
            children: (0, CT.jsx)(yT.e, {
              name: "pen-to-square"
            })
          }), !lT && (0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, CT.jsx)(yT.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, CT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hT.color
        },
        ...(0, fT.X)(),
        onClick: () => {
          NT()
        },
        children: [(0, CT.jsx)(vT, {
          platform: kT
        }), (0, CT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hT.name
          }), (0, CT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: tT("homePage:profileSocialLinkAdd")
          })]
        }), (0, CT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, CT.jsx)(yT.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hT(TT) {
      let {
        socialLinks: kT,
        editable: cT = !1,
        userContext: lT,
        onLinksUpdated: MT
      } = TT;
      if (!cT && 0 === kT.length) return null;
      const OT = new Map(kT.map((TT => [TT.platform, TT]))),
        yT = cT ? KT.v : kT.map((TT => TT.platform));
      return (0, CT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, CT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: yT.map((TT => (0, CT.jsx)(tT, {
            platform: TT,
            link: OT.get(TT),
            editable: cT,
            userContext: lT,
            onLinksUpdated: MT
          }, TT)))
        })
      })
    }
  },
  4837: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);