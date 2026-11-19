export const id = 96;
export const ids = [96];
export const modules = {
  4449: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => qY
    });
    var FY = DY(61),
      AY = DY(1501),
      IY = DY(341),
      RY = DY(1237),
      OY = DY(1596),
      gY = DY(1270),
      aY = DY(1526),
      vY = DY(1471),
      uY = DY(2410);
    const sY = {
      retries: 2,
      minTimeout: 2e3
    };
    var iY = DY(1134),
      yY = DY(1591),
      QY = DY(1152),
      oY = DY(1778),
      WY = DY(1211),
      EY = DY(1231),
      mY = DY(3061),
      VY = DY(1337),
      SY = DY(1437),
      lY = DY(1488),
      TY = DY(2366),
      eY = DY(2370),
      NY = DY(4452),
      BY = DY(2016),
      cY = DY(1092),
      KY = DY.n(cY),
      HY = DY(1098),
      zY = DY(4459),
      ZY = DY(19),
      CY = DY(1808),
      fY = DY(3240),
      jY = DY(1881),
      hY = DY(3191),
      dY = DY(99),
      JY = DY(4113),
      MY = DY(1125);
    const wY = [NY];

    function bY(YY) {
      let {
        icon: rY,
        label: DY,
        value: FY
      } = YY;
      return (0, MY.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, MY.jsx)(HY.e, {
          name: rY,
          className: "PlayerProfileStatIcon"
        }), (0, MY.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, MY.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: DY
          }), (0, MY.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: FY
          })]
        })]
      })
    }

    function XY(YY) {
      let {
        profile: rY
      } = YY;
      const {
        t: DY,
        selectedLanguage: FY
      } = (0, WY.C)();
      let AY = DY("homePage:profileUnknown");
      if (rY.lastOnline) {
        const YY = (0, WY.q)(FY.code, "homePage:profileTimeAgo");
        AY = DY("homePage:profileTimeAgo", {
          time: (0, IY.fb)(YY, rY.lastOnline, Date.now())
        })
      }
      let RY = DY("homePage:profileUnknown");
      return rY.accountCreatedAt && (RY = new Date(rY.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, MY.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, MY.jsx)(bY, {
          icon: "hourglass",
          label: DY("homePage:profileTimePlayed"),
          value: (0, fY.c)(rY.totalPlayMinutes)
        }), (0, MY.jsx)(bY, {
          icon: "wifi",
          label: DY("homePage:profileLastOnline"),
          value: AY
        }), (0, MY.jsx)(bY, {
          icon: "calendar",
          label: DY("homePage:profileJoined"),
          value: RY
        })]
      })
    }

    function qY() {
      const {
        t: YY
      } = (0, WY.C)(), rY = (0, lY.useNavigatePreserveSearch)(), DY = (0, iY.m)(), {
        playerName: NY,
        playerUrlName: cY
      } = (0, AY.D)(), fY = (0, AY.u)(), bY = (0, RY.f)(fY.pathname), qY = bY && ("urlId" in bY ? `urlId:${bY.urlId}` : `name:${bY.lowerCaseName}`), pY = (0, FY.useRef)(qY);
      pY.current = qY;
      const {
        userContext: kY,
        isUserContextUpdating: GY
      } = (0, QY.d)(), xY = (0, FY.useRef)(null), nY = (0, FY.useRef)(null), PY = (0, FY.useRef)(null), UY = (0, FY.useRef)(!1), LY = (0, FY.useRef)((0, IY.bc)(wY)), [tY, Yr] = (0, FY.useState)((() => {
        const YY = bY && eY.c.peek(kY, bY);
        return YY ? {
          status: "loaded",
          profile: YY,
          playerKey: qY
        } : {
          status: "loading"
        }
      })), [rr, Dr] = (0, FY.useState)(0);
      (0, FY.useEffect)(TY.d, []), (0, FY.useEffect)((() => {
        CY.gameBridge.send("leaveGame", {
          reloadPath: null
        }), ZY.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [fY.key]);
      const Fr = () => {
        const YY = (0, lY.getPreviousLocation)();
        null === YY || YY.startsWith("/play") ? (0, lY.navigateToHomePage)() : rY(-1)
      };
      (0, JY.d)(Fr), (0, FY.useEffect)((() => {
        var YY;
        if (GY) return;
        if (!bY) return void Yr({
          status: "notFound",
          playerKey: qY
        });
        const rY = "urlId" in bY && (null === (YY = nY.current) || void 0 === YY ? void 0 : YY.urlId) === bY.urlId && PY.current === kY;
        if (rY && UY.current) return;
        const DY = rY ? null : eY.c.peek(kY, bY);
        let FY = !1;
        const AY = YY => "loaded" === YY.status && (YY.playerKey === qY || "urlId" in bY && YY.profile.urlId === bY.urlId);
        return DY ? (PY.current = kY, UY.current = !1, Yr({
          status: "loaded",
          profile: DY,
          playerKey: qY
        }), eY.c.invalidate(bY)) : Yr((YY => AY(YY) ? YY : {
          status: "loading"
        })), async function(YY, rY) {
          if ("lowerCaseName" in rY && rY.lowerCaseName.length > gY.k) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await vY.e.getPlayerProfile(YY, rY, sY)
            }
          } catch (DY) {
            return (0, uY.c)(DY) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", DY), {
              status: "failed"
            })
          }
        }(kY, bY).then((YY => {
          FY || ("loaded" === YY.status && (PY.current = kY, UY.current = !0), Yr((rY => "failed" === YY.status && AY(rY) ? rY : {
            ...YY,
            playerKey: qY
          })))
        })), () => {
          FY = !0
        }
      }), [GY, qY, kY, rr]);
      const Ar = "loading" === tY.status || tY.playerKey === qY || "loaded" === tY.status && !!bY && "urlId" in bY && tY.profile.urlId === bY.urlId ? tY : {
          status: "loading"
        },
        Ir = "loaded" === Ar.status ? Ar.profile : null,
        Rr = "loading" === Ar.status ? null : function(YY) {
          if ("loaded" === YY.status) {
            const {
              profile: rY
            } = YY;
            return (0, aY.J)({
              urlId: rY.urlId,
              name: rY.player.name,
              ranks: rY.player.ranks,
              socialLinks: rY.socialLinks
            })
          }
          return "notFound" === YY.status ? (0, aY.Q)() : null
        }(Ar),
        Or = null !== Ir && void 0 !== Ir && Ir.urlId ? (0, RY.h)({
          urlId: Ir.urlId,
          name: Ir.player.name
        }) : null;
      (0, yY.h)(Or);
      const gr = null !== Ir && void 0 !== Ir && Ir.player.cosmetics.profileEffect ? BY.f[Ir.player.cosmetics.profileEffect] : void 0,
        ar = null !== Ir && !GY && kY.getPlayerName().toLowerCase() === Ir.player.name.toLowerCase(),
        vr = (0, jY.c)(null === Ir || void 0 === Ir ? void 0 : Ir.player.name),
        ur = ar && kY.playerHasRank("youtuber");
      nY.current = Ir;
      const sr = (0, FY.useCallback)((() => {
          bY && (eY.c.invalidate(bY), eY.c.get(kY, bY).then((YY => {
            pY.current === qY && (UY.current = !0, Yr({
              status: "loaded",
              profile: YY,
              playerKey: qY
            }))
          })).catch((YY => {
            console.error("Failed to refresh user profile", YY)
          })))
        }), [qY, kY]),
        ir = (0, FY.useCallback)((() => {
          var YY;
          const rY = nY.current;
          return !(!rY || null === (YY = xY.current) || void 0 === YY || !YY.isReady()) && (xY.current.setAllCosmetics(rY.player.cosmetics), !0)
        }), []);
      return (0, FY.useEffect)((() => {
        if (!Ir) return;
        let YY, rY = !1;
        const DY = () => {
          rY || ir() || (YY = setTimeout(DY, 100))
        };
        return DY(), () => {
          rY = !0, clearTimeout(YY)
        }
      }), [Ir, ir]), (0, MY.jsxs)("div", {
        className: KY()("PlayerProfile", {
          PlayerProfilePortrait: DY
        }),
        children: [Rr && (0, MY.jsx)(OY.d, {
          meta: Rr
        }), (0, MY.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [gr && (0, MY.jsx)(gr, {}), !gr && (0, MY.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${LY.current})`
            }
          })]
        }), (0, MY.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, MY.jsx)(SY.b, {
            onClick: Fr,
            children: YY("general:back")
          }), Ir && !GY && !ar && dY.featureFlags.useSocialFeatures && (0, MY.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, MY.jsx)(hY.d, {
              playerName: Ir.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Ar.status && (0, MY.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, MY.jsx)(VY.c, {})
        }), ("notFound" === Ar.status || "failed" === Ar.status) && (0, MY.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, MY.jsx)(HY.e, {
            name: "face-dizzy"
          }), (0, MY.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Ar.status ? YY("socialBar:playerNotFound", {
              playerName: null !== cY && void 0 !== cY ? cY : NY
            }) : YY("playerProfile:loadFailed")
          }), "failed" === Ar.status && (0, MY.jsx)(SY.f, {
            onClick: () => {
              Dr((YY => YY + 1))
            },
            children: YY("general:tryAgain")
          })]
        }), Ir && (0, MY.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, MY.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, MY.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, MY.jsx)(oY.b, {
                text: (0, EY.z)(Ir.player.ranks, Ir.player.name, Ir.player.nameColour),
                friendBadgeFor: vr ? Ir.player.name : void 0
              })
            }), (0, MY.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, MY.jsx)(FY.Suspense, {
                fallback: (0, MY.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, MY.jsx)(VY.c, {})
                }),
                children: (0, MY.jsx)(TY.b, {
                  ref: xY,
                  onReady: () => {
                    ir()
                  }
                })
              })
            })]
          }), (0, MY.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, MY.jsx)(XY, {
              profile: Ir
            }), (Ir.socialLinks.length > 0 || ur) && (0, MY.jsx)(zY.d, {
              socialLinks: Ir.socialLinks,
              editable: ur,
              userContext: kY,
              onLinksUpdated: sr
            }), (0, MY.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, MY.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: YY("homePage:profileReleasedGames")
              }), 0 === Ir.releasedGames.length && (0, MY.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: YY("homePage:profileNoReleasedGames")
              }), Ir.releasedGames.length > 0 && (0, MY.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Ir.releasedGames.map((YY => (0, MY.jsx)(mY.g, {
                  source: {
                    type: "preview",
                    preview: YY
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, YY.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4459: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => oY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4217),
      RY = DY(1211),
      OY = DY(1098),
      gY = DY(1437),
      aY = DY(1471),
      vY = DY(1346),
      uY = DY(2306),
      sY = DY(1125);
    const iY = {
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

    function yY(YY) {
      let {
        platform: rY
      } = YY;
      const DY = "youtube" === rY;
      return (0, sY.jsxs)("span", {
        className: AY()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: DY
        }),
        children: [DY && (0, sY.jsx)(uY.e, {
          variant: "white"
        }), !DY && (0, sY.jsx)(OY.e, {
          name: iY[rY].icon,
          kit: "brands"
        })]
      })
    }

    function QY(YY) {
      let {
        platform: rY,
        link: DY,
        editable: FY,
        userContext: AY,
        onLinksUpdated: uY
      } = YY;
      const {
        t: QY
      } = (0, RY.C)(), oY = iY[rY];
      if (!DY && !FY) return null;

      function WY() {
        var YY;
        if (!AY || !uY) return;
        vY.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: oY.name
            }
          },
          prefixText: IY.w[rY],
          placeholderText: "playBloxd",
          initialValue: null !== (YY = null === DY || void 0 === DY ? void 0 : DY.handle) && void 0 !== YY ? YY : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: DY ? "general:remove" : void 0
        }).getResult().then((async YY => {
          if ("notificationTornDown" !== YY && null !== YY) try {
            "submit" === YY.type ? await aY.e.setSocialLink(AY, rY, YY.value) : await aY.e.clearSocialLink(AY, rY), uY()
          } catch (DY) {
            console.error("Failed to update social link", DY), vY.NotificationProvider.showAlertPopup({
              title: DY.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (DY) {
        const YY = `@${DY.handle}`;
        return (0, sY.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: oY.color
          },
          href: DY.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, sY.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, sY.jsx)(yY, {
              platform: rY
            }), (0, sY.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, sY.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: YY
              })
            })]
          }), FY && (0, sY.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, gY.P)({
              stopPropagation: !0
            }),
            onClick: YY => {
              YY.stopPropagation(), YY.preventDefault(), WY()
            },
            children: (0, sY.jsx)(OY.e, {
              name: "pen-to-square"
            })
          }), !FY && (0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, sY.jsx)(OY.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, sY.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: oY.color
        },
        ...(0, gY.P)(),
        onClick: () => {
          WY()
        },
        children: [(0, sY.jsx)(yY, {
          platform: rY
        }), (0, sY.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: oY.name
          }), (0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: QY("homePage:profileSocialLinkAdd")
          })]
        }), (0, sY.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, sY.jsx)(OY.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function oY(YY) {
      let {
        socialLinks: rY,
        editable: DY = !1,
        userContext: FY,
        onLinksUpdated: AY
      } = YY;
      if (!DY && 0 === rY.length) return null;
      const RY = new Map(rY.map((YY => [YY.platform, YY]))),
        OY = DY ? IY.t : rY.map((YY => YY.platform));
      return (0, sY.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, sY.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: OY.map((YY => (0, sY.jsx)(QY, {
            platform: YY,
            link: RY.get(YY),
            editable: DY,
            userContext: FY,
            onLinksUpdated: AY
          }, YY)))
        })
      })
    }
  },
  4452: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);