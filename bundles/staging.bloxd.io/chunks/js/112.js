export const id = 112;
export const ids = [112];
export const modules = {
  5278: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => vM
    });
    var OM = iM(44),
      SM = iM(1608),
      jM = iM(332),
      aM = iM(1240),
      PM = iM(1694),
      nM = iM(1279),
      QM = iM(1630),
      zM = iM(1573),
      LM = iM(2896);
    const mM = {
      retries: 2,
      minTimeout: 2e3
    };
    var HM = iM(1130),
      hM = iM(1685),
      JM = iM(1142),
      dM = iM(2006),
      yM = iM(1188),
      lM = iM(1229),
      EM = iM(3875),
      UM = iM(1396),
      GM = iM(1520),
      CM = iM(1591),
      eM = iM(2834),
      bM = iM(2847),
      wM = iM(5280),
      tM = iM(2280),
      gM = iM(1116),
      uM = iM.n(gM),
      RM = iM(1398),
      pM = iM(5282),
      WM = iM(19),
      sM = iM(2039),
      DM = iM(4004),
      kM = iM(2137),
      ZM = iM(3981),
      oM = iM(83),
      fM = iM(4934),
      YM = iM(1303);
    const NM = [wM];

    function AM(MM) {
      let {
        icon: rM,
        label: iM,
        value: OM
      } = MM;
      return (0, YM.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, YM.jsx)(RM.b, {
          name: rM,
          className: "PlayerProfileStatIcon"
        }), (0, YM.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, YM.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: iM
          }), (0, YM.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: OM
          })]
        })]
      })
    }

    function xM(MM) {
      let {
        profile: rM
      } = MM;
      const {
        t: iM,
        selectedLanguage: OM
      } = (0, yM.A)();
      let SM = iM("homePage:profileUnknown");
      if (rM.lastOnline) {
        const MM = (0, yM.n)(OM.code, "homePage:profileTimeAgo");
        SM = iM("homePage:profileTimeAgo", {
          time: (0, jM.db)(MM, rM.lastOnline, Date.now())
        })
      }
      let aM = iM("homePage:profileUnknown");
      return rM.accountCreatedAt && (aM = new Date(rM.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, YM.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, YM.jsx)(AM, {
          icon: "hourglass",
          label: iM("homePage:profileTimePlayed"),
          value: (0, DM.b)(rM.totalPlayMinutes)
        }), (0, YM.jsx)(AM, {
          icon: "wifi",
          label: iM("homePage:profileLastOnline"),
          value: SM
        }), (0, YM.jsx)(AM, {
          icon: "calendar",
          label: iM("homePage:profileJoined"),
          value: aM
        })]
      })
    }

    function vM() {
      const {
        t: MM
      } = (0, yM.A)(), rM = (0, CM.useNavigatePreserveSearch)(), iM = (0, HM.i)(), {
        playerName: wM,
        playerUrlName: gM
      } = (0, SM.D)(), DM = (0, SM.u)(), AM = (0, aM.c)(DM.pathname), vM = AM && ("urlId" in AM ? `urlId:${AM.urlId}` : `name:${AM.lowerCaseName}`), FM = (0, OM.useRef)(vM);
      FM.current = vM;
      const {
        userContext: BM,
        isUserContextUpdating: XM
      } = (0, JM.b)(), IM = (0, OM.useRef)(null), KM = (0, OM.useRef)(null), qM = (0, OM.useRef)(null), TM = (0, OM.useRef)(!1), VM = (0, OM.useRef)((0, jM.ac)(NM)), [cM, Mr] = (0, OM.useState)((() => {
        const MM = AM && bM.e.peek(BM, AM);
        return MM ? {
          status: "loaded",
          profile: MM,
          playerKey: vM
        } : {
          status: "loading"
        }
      })), [rr, ir] = (0, OM.useState)(0);
      (0, OM.useEffect)(eM.e, []), (0, OM.useEffect)((() => {
        sM.gameBridge.send("leaveGame", {
          reloadPath: null
        }), WM.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [DM.key]);
      const Or = () => {
        const MM = (0, CM.getPreviousLocation)();
        null === MM || MM.startsWith("/play") ? (0, CM.navigateToHomePage)() : rM(-1)
      };
      (0, fM.e)(Or), (0, OM.useEffect)((() => {
        var MM;
        if (XM) return;
        if (!AM) return void Mr({
          status: "notFound",
          playerKey: vM
        });
        const rM = "urlId" in AM && (null === (MM = KM.current) || void 0 === MM ? void 0 : MM.urlId) === AM.urlId && qM.current === BM;
        if (rM && TM.current) return;
        const iM = rM ? null : bM.e.peek(BM, AM);
        let OM = !1;
        const SM = MM => "loaded" === MM.status && (MM.playerKey === vM || "urlId" in AM && MM.profile.urlId === AM.urlId);
        return iM ? (qM.current = BM, TM.current = !1, Mr({
          status: "loaded",
          profile: iM,
          playerKey: vM
        }), bM.e.invalidate(AM)) : Mr((MM => SM(MM) ? MM : {
          status: "loading"
        })), async function(MM, rM) {
          if ("lowerCaseName" in rM && rM.lowerCaseName.length > nM.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await zM.c.getPlayerProfile(MM, rM, mM)
            }
          } catch (iM) {
            return (0, LM.c)(iM) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", iM), {
              status: "failed"
            })
          }
        }(BM, AM).then((MM => {
          OM || ("loaded" === MM.status && (qM.current = BM, TM.current = !0), Mr((rM => "failed" === MM.status && SM(rM) ? rM : {
            ...MM,
            playerKey: vM
          })))
        })), () => {
          OM = !0
        }
      }), [XM, vM, BM, rr]);
      const Sr = "loading" === cM.status || cM.playerKey === vM || "loaded" === cM.status && !!AM && "urlId" in AM && cM.profile.urlId === AM.urlId ? cM : {
          status: "loading"
        },
        jr = "loaded" === Sr.status ? Sr.profile : null,
        ar = "loading" === Sr.status ? null : function(MM) {
          if ("loaded" === MM.status) {
            const {
              profile: rM
            } = MM;
            return (0, QM.S)({
              urlId: rM.urlId,
              name: rM.player.name,
              ranks: rM.player.ranks,
              socialLinks: rM.socialLinks
            })
          }
          return "notFound" === MM.status ? (0, QM.ab)() : null
        }(Sr),
        Pr = null !== jr && void 0 !== jr && jr.urlId ? (0, aM.f)({
          urlId: jr.urlId,
          name: jr.player.name
        }) : null;
      (0, hM.g)(Pr);
      const nr = null !== jr && void 0 !== jr && jr.player.cosmetics.profileEffect ? tM.f[jr.player.cosmetics.profileEffect] : void 0,
        Qr = null !== jr && !XM && BM.getPlayerName().toLowerCase() === jr.player.name.toLowerCase(),
        zr = (0, kM.c)(null === jr || void 0 === jr ? void 0 : jr.player.name),
        Lr = Qr && BM.playerHasRank("youtuber");
      KM.current = jr;
      const mr = (0, OM.useCallback)((() => {
          AM && (bM.e.invalidate(AM), bM.e.get(BM, AM).then((MM => {
            FM.current === vM && (TM.current = !0, Mr({
              status: "loaded",
              profile: MM,
              playerKey: vM
            }))
          })).catch((MM => {
            console.error("Failed to refresh user profile", MM)
          })))
        }), [vM, BM]),
        Hr = (0, OM.useCallback)((() => {
          var MM;
          const rM = KM.current;
          return !(!rM || null === (MM = IM.current) || void 0 === MM || !MM.isReady()) && (IM.current.setAllCosmetics(rM.player.cosmetics), !0)
        }), []);
      return (0, OM.useEffect)((() => {
        if (!jr) return;
        let MM, rM = !1;
        const iM = () => {
          rM || Hr() || (MM = setTimeout(iM, 100))
        };
        return iM(), () => {
          rM = !0, clearTimeout(MM)
        }
      }), [jr, Hr]), (0, YM.jsxs)("div", {
        className: uM()("PlayerProfile", {
          PlayerProfilePortrait: iM
        }),
        children: [ar && (0, YM.jsx)(PM.c, {
          meta: ar
        }), (0, YM.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [nr && (0, YM.jsx)(nr, {}), !nr && (0, YM.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${VM.current})`
            }
          })]
        }), (0, YM.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, YM.jsx)(GM.c, {
            onClick: Or,
            children: MM("general:back")
          }), jr && !XM && !Qr && oM.featureFlags.useSocialFeatures && (0, YM.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, YM.jsx)(ZM.d, {
              playerName: jr.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Sr.status && (0, YM.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, YM.jsx)(UM.d, {})
        }), ("notFound" === Sr.status || "failed" === Sr.status) && (0, YM.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, YM.jsx)(RM.b, {
            name: "face-dizzy"
          }), (0, YM.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Sr.status ? MM("socialBar:playerNotFound", {
              playerName: null !== gM && void 0 !== gM ? gM : wM
            }) : MM("playerProfile:loadFailed")
          }), "failed" === Sr.status && (0, YM.jsx)(GM.e, {
            onClick: () => {
              ir((MM => MM + 1))
            },
            children: MM("general:tryAgain")
          })]
        }), jr && (0, YM.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, YM.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, YM.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, YM.jsx)(dM.b, {
                text: (0, lM.y)(jr.player.ranks, jr.player.name, jr.player.nameColour),
                friendBadgeFor: zr ? jr.player.name : void 0
              })
            }), (0, YM.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, YM.jsx)(OM.Suspense, {
                fallback: (0, YM.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, YM.jsx)(UM.d, {})
                }),
                children: (0, YM.jsx)(eM.c, {
                  ref: IM,
                  onReady: () => {
                    Hr()
                  }
                })
              })
            })]
          }), (0, YM.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, YM.jsx)(xM, {
              profile: jr
            }), (jr.socialLinks.length > 0 || Lr) && (0, YM.jsx)(pM.b, {
              socialLinks: jr.socialLinks,
              editable: Lr,
              userContext: BM,
              onLinksUpdated: mr
            }), (0, YM.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, YM.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: MM("homePage:profileReleasedGames")
              }), 0 === jr.releasedGames.length && (0, YM.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: MM("homePage:profileNoReleasedGames")
              }), jr.releasedGames.length > 0 && (0, YM.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: jr.releasedGames.map((MM => (0, YM.jsx)(EM.h, {
                  source: {
                    type: "preview",
                    preview: MM
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, MM.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5282: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5011),
      aM = iM(1188),
      PM = iM(1398),
      nM = iM(1520),
      QM = iM(1573),
      zM = iM(1429),
      LM = iM(2709),
      mM = iM(1303);
    const HM = {
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

    function hM(MM) {
      let {
        platform: rM
      } = MM;
      const iM = "youtube" === rM;
      return (0, mM.jsxs)("span", {
        className: SM()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: iM
        }),
        children: [iM && (0, mM.jsx)(LM.d, {
          variant: "white"
        }), !iM && (0, mM.jsx)(PM.b, {
          name: HM[rM].icon,
          kit: "brands"
        })]
      })
    }

    function JM(MM) {
      let {
        platform: rM,
        link: iM,
        editable: OM,
        userContext: SM,
        onLinksUpdated: LM
      } = MM;
      const {
        t: JM
      } = (0, aM.A)(), dM = HM[rM];
      if (!iM && !OM) return null;

      function yM() {
        var MM;
        if (!SM || !LM) return;
        zM.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dM.name
            }
          },
          prefixText: jM.t[rM],
          placeholderText: "playBloxd",
          initialValue: null !== (MM = null === iM || void 0 === iM ? void 0 : iM.handle) && void 0 !== MM ? MM : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: iM ? "general:remove" : void 0
        }).getResult().then((async MM => {
          if ("notificationTornDown" !== MM && null !== MM) try {
            "submit" === MM.type ? await QM.c.setSocialLink(SM, rM, MM.value) : await QM.c.clearSocialLink(SM, rM), LM()
          } catch (iM) {
            console.error("Failed to update social link", iM), zM.NotificationProvider.showAlertPopup({
              title: iM.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (iM) {
        const MM = `@${iM.handle}`;
        return (0, mM.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dM.color
          },
          href: iM.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, mM.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, mM.jsx)(hM, {
              platform: rM
            }), (0, mM.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, mM.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: MM
              })
            })]
          }), OM && (0, mM.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, nM.fb)({
              stopPropagation: !0
            }),
            onClick: MM => {
              MM.stopPropagation(), MM.preventDefault(), yM()
            },
            children: (0, mM.jsx)(PM.b, {
              name: "pen-to-square"
            })
          }), !OM && (0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, mM.jsx)(PM.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, mM.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dM.color
        },
        ...(0, nM.fb)(),
        onClick: () => {
          yM()
        },
        children: [(0, mM.jsx)(hM, {
          platform: rM
        }), (0, mM.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dM.name
          }), (0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: JM("homePage:profileSocialLinkAdd")
          })]
        }), (0, mM.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, mM.jsx)(PM.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dM(MM) {
      let {
        socialLinks: rM,
        editable: iM = !1,
        userContext: OM,
        onLinksUpdated: SM
      } = MM;
      if (!iM && 0 === rM.length) return null;
      const aM = new Map(rM.map((MM => [MM.platform, MM]))),
        PM = iM ? jM.s : rM.map((MM => MM.platform));
      return (0, mM.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, mM.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: PM.map((MM => (0, mM.jsx)(JM, {
            platform: MM,
            link: aM.get(MM),
            editable: iM,
            userContext: OM,
            onLinksUpdated: SM
          }, MM)))
        })
      })
    }
  },
  5280: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);