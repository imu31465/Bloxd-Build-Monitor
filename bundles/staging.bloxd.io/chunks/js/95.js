export const id = 95;
export const ids = [95];
export const modules = {
  4634: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => YD
    });
    var ID = cD(53),
      pD = cD(1517),
      iD = cD(326),
      fD = cD(1232),
      bD = cD(1609),
      QD = cD(1266),
      wD = cD(1540),
      SD = cD(1497),
      BD = cD(2544);
    const yD = {
      retries: 2,
      minTimeout: 2e3
    };
    var MD = cD(1108),
      tD = cD(1607),
      ZD = cD(1120),
      oD = cD(1872),
      vD = cD(1192),
      ND = cD(1221),
      gD = cD(3295),
      XD = cD(1328),
      mD = cD(1442),
      nD = cD(1508),
      OD = cD(2478),
      PD = cD(2490),
      HD = cD(4643),
      UD = cD(2112),
      xD = cD(1049),
      qD = cD.n(xD),
      JD = cD(1064),
      KD = cD(4648),
      aD = cD(16),
      VD = cD(1905),
      zD = cD(3452),
      jD = cD(1997),
      lD = cD(3397),
      LD = cD(90),
      TD = cD(4346),
      GD = cD(1093);
    const RD = [HD];

    function kD(DD) {
      let {
        icon: CD,
        label: cD,
        value: ID
      } = DD;
      return (0, GD.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, GD.jsx)(JD.c, {
          name: CD,
          className: "PlayerProfileStatIcon"
        }), (0, GD.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, GD.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: cD
          }), (0, GD.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: ID
          })]
        })]
      })
    }

    function dD(DD) {
      let {
        profile: CD
      } = DD;
      const {
        t: cD,
        selectedLanguage: ID
      } = (0, vD.F)();
      let pD = cD("homePage:profileUnknown");
      if (CD.lastOnline) {
        const DD = (0, vD.m)(ID.code, "homePage:profileTimeAgo");
        pD = cD("homePage:profileTimeAgo", {
          time: (0, iD.cb)(DD, CD.lastOnline, Date.now())
        })
      }
      let fD = cD("homePage:profileUnknown");
      return CD.accountCreatedAt && (fD = new Date(CD.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, GD.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, GD.jsx)(kD, {
          icon: "hourglass",
          label: cD("homePage:profileTimePlayed"),
          value: (0, zD.b)(CD.totalPlayMinutes)
        }), (0, GD.jsx)(kD, {
          icon: "wifi",
          label: cD("homePage:profileLastOnline"),
          value: pD
        }), (0, GD.jsx)(kD, {
          icon: "calendar",
          label: cD("homePage:profileJoined"),
          value: fD
        })]
      })
    }

    function YD() {
      const {
        t: DD
      } = (0, vD.F)(), CD = (0, nD.useNavigatePreserveSearch)(), cD = (0, MD.o)(), {
        playerName: HD,
        playerUrlName: xD
      } = (0, pD.F)(), zD = (0, pD.w)(), kD = (0, fD.f)(zD.pathname), YD = kD && ("urlId" in kD ? `urlId:${kD.urlId}` : `name:${kD.lowerCaseName}`), WD = (0, ID.useRef)(YD);
      WD.current = YD;
      const {
        userContext: sD,
        isUserContextUpdating: ED
      } = (0, ZD.c)(), eD = (0, ID.useRef)(null), uD = (0, ID.useRef)(null), hD = (0, ID.useRef)(null), rD = (0, ID.useRef)(!1), AD = (0, ID.useRef)((0, iD.dc)(RD)), [FD, DC] = (0, ID.useState)((() => {
        const DD = kD && PD.e.peek(sD, kD);
        return DD ? {
          status: "loaded",
          profile: DD,
          playerKey: YD
        } : {
          status: "loading"
        }
      })), [CC, cC] = (0, ID.useState)(0);
      (0, ID.useEffect)(OD.f, []), (0, ID.useEffect)((() => {
        VD.gameBridge.send("leaveGame", {
          reloadPath: null
        }), aD.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [zD.key]);
      const IC = () => {
        const DD = (0, nD.getPreviousLocation)();
        null === DD || DD.startsWith("/play") ? (0, nD.navigateToHomePage)() : CD(-1)
      };
      (0, TD.d)(IC), (0, ID.useEffect)((() => {
        var DD;
        if (ED) return;
        if (!kD) return void DC({
          status: "notFound",
          playerKey: YD
        });
        const CD = "urlId" in kD && (null === (DD = uD.current) || void 0 === DD ? void 0 : DD.urlId) === kD.urlId && hD.current === sD;
        if (CD && rD.current) return;
        const cD = CD ? null : PD.e.peek(sD, kD);
        let ID = !1;
        const pD = DD => "loaded" === DD.status && (DD.playerKey === YD || "urlId" in kD && DD.profile.urlId === kD.urlId);
        return cD ? (hD.current = sD, rD.current = !1, DC({
          status: "loaded",
          profile: cD,
          playerKey: YD
        }), PD.e.invalidate(kD)) : DC((DD => pD(DD) ? DD : {
          status: "loading"
        })), async function(DD, CD) {
          if ("lowerCaseName" in CD && CD.lowerCaseName.length > QD.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await SD.c.getPlayerProfile(DD, CD, yD)
            }
          } catch (cD) {
            return (0, BD.c)(cD) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", cD), {
              status: "failed"
            })
          }
        }(sD, kD).then((DD => {
          ID || ("loaded" === DD.status && (hD.current = sD, rD.current = !0), DC((CD => "failed" === DD.status && pD(CD) ? CD : {
            ...DD,
            playerKey: YD
          })))
        })), () => {
          ID = !0
        }
      }), [ED, YD, sD, CC]);
      const pC = "loading" === FD.status || FD.playerKey === YD || "loaded" === FD.status && !!kD && "urlId" in kD && FD.profile.urlId === kD.urlId ? FD : {
          status: "loading"
        },
        iC = "loaded" === pC.status ? pC.profile : null,
        fC = "loading" === pC.status ? null : function(DD) {
          if ("loaded" === DD.status) {
            const {
              profile: CD
            } = DD;
            return (0, wD.U)({
              urlId: CD.urlId,
              name: CD.player.name,
              ranks: CD.player.ranks,
              socialLinks: CD.socialLinks
            })
          }
          return "notFound" === DD.status ? (0, wD.$)() : null
        }(pC),
        bC = null !== iC && void 0 !== iC && iC.urlId ? (0, fD.h)({
          urlId: iC.urlId,
          name: iC.player.name
        }) : null;
      (0, tD.e)(bC);
      const QC = null !== iC && void 0 !== iC && iC.player.cosmetics.profileEffect ? UD.h[iC.player.cosmetics.profileEffect] : void 0,
        wC = null !== iC && !ED && sD.getPlayerName().toLowerCase() === iC.player.name.toLowerCase(),
        SC = (0, jD.b)(null === iC || void 0 === iC ? void 0 : iC.player.name),
        BC = wC && sD.playerHasRank("youtuber");
      uD.current = iC;
      const yC = (0, ID.useCallback)((() => {
          kD && (PD.e.invalidate(kD), PD.e.get(sD, kD).then((DD => {
            WD.current === YD && (rD.current = !0, DC({
              status: "loaded",
              profile: DD,
              playerKey: YD
            }))
          })).catch((DD => {
            console.error("Failed to refresh user profile", DD)
          })))
        }), [YD, sD]),
        MC = (0, ID.useCallback)((() => {
          var DD;
          const CD = uD.current;
          return !(!CD || null === (DD = eD.current) || void 0 === DD || !DD.isReady()) && (eD.current.setAllCosmetics(CD.player.cosmetics), !0)
        }), []);
      return (0, ID.useEffect)((() => {
        if (!iC) return;
        let DD, CD = !1;
        const cD = () => {
          CD || MC() || (DD = setTimeout(cD, 100))
        };
        return cD(), () => {
          CD = !0, clearTimeout(DD)
        }
      }), [iC, MC]), (0, GD.jsxs)("div", {
        className: qD()("PlayerProfile", {
          PlayerProfilePortrait: cD
        }),
        children: [fC && (0, GD.jsx)(bD.d, {
          meta: fC
        }), (0, GD.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [QC && (0, GD.jsx)(QC, {}), !QC && (0, GD.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${AD.current})`
            }
          })]
        }), (0, GD.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, GD.jsx)(mD.e, {
            onClick: IC,
            children: DD("general:back")
          }), iC && !ED && !wC && LD.featureFlags.useSocialFeatures && (0, GD.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, GD.jsx)(lD.b, {
              playerName: iC.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === pC.status && (0, GD.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, GD.jsx)(XD.e, {})
        }), ("notFound" === pC.status || "failed" === pC.status) && (0, GD.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, GD.jsx)(JD.c, {
            name: "face-dizzy"
          }), (0, GD.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === pC.status ? DD("socialBar:playerNotFound", {
              playerName: null !== xD && void 0 !== xD ? xD : HD
            }) : DD("playerProfile:loadFailed")
          }), "failed" === pC.status && (0, GD.jsx)(mD.i, {
            onClick: () => {
              cC((DD => DD + 1))
            },
            children: DD("general:tryAgain")
          })]
        }), iC && (0, GD.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, GD.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, GD.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, GD.jsx)(oD.c, {
                text: (0, ND.r)(iC.player.ranks, iC.player.name, iC.player.nameColour),
                friendBadgeFor: SC ? iC.player.name : void 0
              })
            }), (0, GD.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, GD.jsx)(ID.Suspense, {
                fallback: (0, GD.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, GD.jsx)(XD.e, {})
                }),
                children: (0, GD.jsx)(OD.d, {
                  ref: eD,
                  onReady: () => {
                    MC()
                  }
                })
              })
            })]
          }), (0, GD.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, GD.jsx)(dD, {
              profile: iC
            }), (iC.socialLinks.length > 0 || BC) && (0, GD.jsx)(KD.c, {
              socialLinks: iC.socialLinks,
              editable: BC,
              userContext: sD,
              onLinksUpdated: yC
            }), (0, GD.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, GD.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: DD("homePage:profileReleasedGames")
              }), 0 === iC.releasedGames.length && (0, GD.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: DD("homePage:profileNoReleasedGames")
              }), iC.releasedGames.length > 0 && (0, GD.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: iC.releasedGames.map((DD => (0, GD.jsx)(gD.f, {
                  source: {
                    type: "preview",
                    preview: DD
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, DD.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4648: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4438),
      fD = cD(1192),
      bD = cD(1064),
      QD = cD(1442),
      wD = cD(1497),
      SD = cD(1340),
      BD = cD(2421),
      yD = cD(1093);
    const MD = {
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

    function tD(DD) {
      let {
        platform: CD
      } = DD;
      const cD = "youtube" === CD;
      return (0, yD.jsxs)("span", {
        className: pD()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cD
        }),
        children: [cD && (0, yD.jsx)(BD.c, {
          variant: "white"
        }), !cD && (0, yD.jsx)(bD.c, {
          name: MD[CD].icon,
          kit: "brands"
        })]
      })
    }

    function ZD(DD) {
      let {
        platform: CD,
        link: cD,
        editable: ID,
        userContext: pD,
        onLinksUpdated: BD
      } = DD;
      const {
        t: ZD
      } = (0, fD.F)(), oD = MD[CD];
      if (!cD && !ID) return null;

      function vD() {
        var DD;
        if (!pD || !BD) return;
        SD.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: oD.name
            }
          },
          prefixText: iD.x[CD],
          placeholderText: "playBloxd",
          initialValue: null !== (DD = null === cD || void 0 === cD ? void 0 : cD.handle) && void 0 !== DD ? DD : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cD ? "general:remove" : void 0
        }).getResult().then((async DD => {
          if ("notificationTornDown" !== DD && null !== DD) try {
            "submit" === DD.type ? await wD.c.setSocialLink(pD, CD, DD.value) : await wD.c.clearSocialLink(pD, CD), BD()
          } catch (cD) {
            console.error("Failed to update social link", cD), SD.NotificationProvider.showAlertPopup({
              title: cD.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cD) {
        const DD = `@${cD.handle}`;
        return (0, yD.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: oD.color
          },
          href: cD.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, yD.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, yD.jsx)(tD, {
              platform: CD
            }), (0, yD.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, yD.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: DD
              })
            })]
          }), ID && (0, yD.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, QD.U)({
              stopPropagation: !0
            }),
            onClick: DD => {
              DD.stopPropagation(), DD.preventDefault(), vD()
            },
            children: (0, yD.jsx)(bD.c, {
              name: "pen-to-square"
            })
          }), !ID && (0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, yD.jsx)(bD.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, yD.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: oD.color
        },
        ...(0, QD.U)(),
        onClick: () => {
          vD()
        },
        children: [(0, yD.jsx)(tD, {
          platform: CD
        }), (0, yD.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: oD.name
          }), (0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ZD("homePage:profileSocialLinkAdd")
          })]
        }), (0, yD.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, yD.jsx)(bD.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function oD(DD) {
      let {
        socialLinks: CD,
        editable: cD = !1,
        userContext: ID,
        onLinksUpdated: pD
      } = DD;
      if (!cD && 0 === CD.length) return null;
      const fD = new Map(CD.map((DD => [DD.platform, DD]))),
        bD = cD ? iD.u : CD.map((DD => DD.platform));
      return (0, yD.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, yD.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bD.map((DD => (0, yD.jsx)(ZD, {
            platform: DD,
            link: fD.get(DD),
            editable: cD,
            userContext: ID,
            onLinksUpdated: pD
          }, DD)))
        })
      })
    }
  },
  4643: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);