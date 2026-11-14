export const id = 80;
export const ids = [80];
export const modules = {
  3876: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => KF
    });
    var CF = SF(46),
      AF = SF(1360),
      uF = SF(271),
      hF = SF(1099),
      bW = SF(1453),
      dF = SF(1126),
      PF = SF(1385),
      RF = SF(1336),
      iW = SF(2090);
    const eF = {
      retries: 2,
      minTimeout: 2e3
    };
    var EF = SF(983),
      QF = SF(1447),
      rW = SF(996),
      gW = SF(1546),
      tW = SF(1046),
      TF = SF(1085),
      aW = SF(2649),
      kW = SF(1186),
      qW = SF(1266),
      VF = SF(1352),
      NF = SF(2031),
      DF = SF(2047),
      LF = SF(3884),
      mW = SF(1775),
      OF = SF(918),
      xW = SF.n(OF),
      ZF = SF(929),
      oF = SF(3886),
      YF = SF(11),
      MF = SF(1576),
      cW = SF(2831),
      GF = SF(1651),
      zW = SF(2780),
      IF = SF(89),
      fF = SF(3626),
      yW = SF(971);
    const sF = [LF];

    function nF(FF) {
      let {
        icon: WF,
        label: SF,
        value: CF
      } = FF;
      return (0, yW.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, yW.jsx)(ZF.e, {
          name: WF,
          className: "PlayerProfileStatIcon"
        }), (0, yW.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, yW.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: SF
          }), (0, yW.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: CF
          })]
        })]
      })
    }

    function HF(FF) {
      let {
        profile: WF
      } = FF;
      const {
        t: SF
      } = (0, tW.B)();
      let CF = SF("homePage:profileUnknown");
      if (WF.lastOnline) {
        const {
          amt: FF,
          unit: AF
        } = (0, uF.eb)(WF.lastOnline, Date.now());
        CF = SF("homePage:profileTimeAgo", {
          time: `${FF} ${AF}`
        })
      }
      let AF = SF("homePage:profileUnknown");
      return WF.accountCreatedAt && (AF = new Date(WF.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, yW.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, yW.jsx)(nF, {
          icon: "hourglass",
          label: SF("homePage:profileTimePlayed"),
          value: (0, cW.b)(WF.totalPlayMinutes)
        }), (0, yW.jsx)(nF, {
          icon: "wifi",
          label: SF("homePage:profileLastOnline"),
          value: CF
        }), (0, yW.jsx)(nF, {
          icon: "calendar",
          label: SF("homePage:profileJoined"),
          value: AF
        })]
      })
    }

    function KF() {
      const {
        t: FF
      } = (0, tW.B)(), WF = (0, VF.useNavigatePreserveSearch)(), SF = (0, EF.j)(), {
        playerName: LF,
        playerUrlName: OF
      } = (0, AF.v)(), cW = (0, AF.p)(), nF = (0, hF.f)(cW.pathname), KF = nF && ("urlId" in nF ? `urlId:${nF.urlId}` : `name:${nF.lowerCaseName}`), wF = (0, CF.useRef)(KF);
      wF.current = KF;
      const {
        userContext: XF,
        isUserContextUpdating: UF
      } = (0, rW.b)(), BF = (0, CF.useRef)(null), jW = (0, CF.useRef)(null), vW = (0, CF.useRef)(null), JF = (0, CF.useRef)(!1), pF = (0, CF.useRef)((0, uF.dc)(sF)), [lF, FW] = (0, CF.useState)((() => {
        const FF = nF && DF.d.peek(XF, nF);
        return FF ? {
          status: "loaded",
          profile: FF,
          playerKey: KF
        } : {
          status: "loading"
        }
      })), [WW, SW] = (0, CF.useState)(0);
      (0, CF.useEffect)(NF.f, []), (0, CF.useEffect)((() => {
        MF.gameBridge.send("leaveGame", {
          reloadPath: null
        }), YF.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [cW.key]);
      const CW = () => {
        const FF = (0, VF.getPreviousLocation)();
        null === FF || FF.startsWith("/play") ? (0, VF.navigateToHomePage)() : WF(-1)
      };
      (0, fF.b)(CW), (0, CF.useEffect)((() => {
        var FF;
        if (UF) return;
        if (!nF) return void FW({
          status: "notFound",
          playerKey: KF
        });
        const WF = "urlId" in nF && (null === (FF = jW.current) || void 0 === FF ? void 0 : FF.urlId) === nF.urlId && vW.current === XF;
        if (WF && JF.current) return;
        const SF = WF ? null : DF.d.peek(XF, nF);
        let CF = !1;
        const AF = FF => "loaded" === FF.status && (FF.playerKey === KF || "urlId" in nF && FF.profile.urlId === nF.urlId);
        return SF ? (vW.current = XF, JF.current = !1, FW({
          status: "loaded",
          profile: SF,
          playerKey: KF
        }), DF.d.invalidate(nF)) : FW((FF => AF(FF) ? FF : {
          status: "loading"
        })), async function(FF, WF) {
          if ("lowerCaseName" in WF && WF.lowerCaseName.length > dF.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await RF.b.getPlayerProfile(FF, WF, eF)
            }
          } catch (SF) {
            return (0, iW.c)(SF) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", SF), {
              status: "failed"
            })
          }
        }(XF, nF).then((FF => {
          CF || ("loaded" === FF.status && (vW.current = XF, JF.current = !0), FW((WF => "failed" === FF.status && AF(WF) ? WF : {
            ...FF,
            playerKey: KF
          })))
        })), () => {
          CF = !0
        }
      }), [UF, KF, XF, WW]);
      const AW = "loading" === lF.status || lF.playerKey === KF || "loaded" === lF.status && !!nF && "urlId" in nF && lF.profile.urlId === nF.urlId ? lF : {
          status: "loading"
        },
        uW = "loaded" === AW.status ? AW.profile : null,
        hW = "loading" === AW.status ? null : function(FF) {
          if ("loaded" === FF.status) {
            const {
              profile: WF
            } = FF;
            return (0, PF.V)({
              urlId: WF.urlId,
              name: WF.player.name,
              ranks: WF.player.ranks,
              socialLinks: WF.socialLinks
            })
          }
          return "notFound" === FF.status ? (0, PF.$)() : null
        }(AW),
        bS = null !== uW && void 0 !== uW && uW.urlId ? (0, hF.j)({
          urlId: uW.urlId,
          name: uW.player.name
        }) : null;
      (0, QF.f)(bS);
      const dW = null !== uW && void 0 !== uW && uW.player.cosmetics.profileEffect ? mW.f[uW.player.cosmetics.profileEffect] : void 0,
        PW = null !== uW && !UF && XF.getPlayerName().toLowerCase() === uW.player.name.toLowerCase(),
        RW = (0, GF.b)(null === uW || void 0 === uW ? void 0 : uW.player.name),
        iS = PW && XF.playerHasRank("youtuber");
      jW.current = uW;
      const eW = (0, CF.useCallback)((() => {
          nF && (DF.d.invalidate(nF), DF.d.get(XF, nF).then((FF => {
            wF.current === KF && (JF.current = !0, FW({
              status: "loaded",
              profile: FF,
              playerKey: KF
            }))
          })).catch((FF => {
            console.error("Failed to refresh user profile", FF)
          })))
        }), [KF, XF]),
        EW = (0, CF.useCallback)((() => {
          var FF;
          const WF = jW.current;
          return !(!WF || null === (FF = BF.current) || void 0 === FF || !FF.isReady()) && (BF.current.setAllCosmetics(WF.player.cosmetics), !0)
        }), []);
      return (0, CF.useEffect)((() => {
        if (!uW) return;
        let FF, WF = !1;
        const SF = () => {
          WF || EW() || (FF = setTimeout(SF, 100))
        };
        return SF(), () => {
          WF = !0, clearTimeout(FF)
        }
      }), [uW, EW]), (0, yW.jsxs)("div", {
        className: xW()("PlayerProfile", {
          PlayerProfilePortrait: SF
        }),
        children: [hW && (0, yW.jsx)(bW.d, {
          meta: hW
        }), (0, yW.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [dW && (0, yW.jsx)(dW, {}), !dW && (0, yW.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${pF.current})`
            }
          })]
        }), (0, yW.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, yW.jsx)(qW.c, {
            onClick: CW,
            children: FF("general:back")
          }), uW && !UF && !PW && IF.featureFlags.useSocialFeatures && (0, yW.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, yW.jsx)(zW.b, {
              playerName: uW.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === AW.status && (0, yW.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, yW.jsx)(kW.c, {})
        }), ("notFound" === AW.status || "failed" === AW.status) && (0, yW.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, yW.jsx)(ZF.e, {
            name: "face-dizzy"
          }), (0, yW.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === AW.status ? FF("socialBar:playerNotFound", {
              playerName: null !== OF && void 0 !== OF ? OF : LF
            }) : FF("playerProfile:loadFailed")
          }), "failed" === AW.status && (0, yW.jsx)(qW.e, {
            onClick: () => {
              SW((FF => FF + 1))
            },
            children: FF("general:tryAgain")
          })]
        }), uW && (0, yW.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, yW.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, yW.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, yW.jsx)(gW.d, {
                text: (0, TF.t)(uW.player.ranks, uW.player.name, uW.player.nameColour),
                friendBadgeFor: RW ? uW.player.name : void 0
              })
            }), (0, yW.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, yW.jsx)(CF.Suspense, {
                fallback: (0, yW.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, yW.jsx)(kW.c, {})
                }),
                children: (0, yW.jsx)(NF.c, {
                  ref: BF,
                  onReady: () => {
                    EW()
                  }
                })
              })
            })]
          }), (0, yW.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, yW.jsx)(HF, {
              profile: uW
            }), (uW.socialLinks.length > 0 || iS) && (0, yW.jsx)(oF.d, {
              socialLinks: uW.socialLinks,
              editable: iS,
              userContext: XF,
              onLinksUpdated: eW
            }), (0, yW.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, yW.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: FF("homePage:profileReleasedGames")
              }), 0 === uW.releasedGames.length && (0, yW.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: FF("homePage:profileNoReleasedGames")
              }), uW.releasedGames.length > 0 && (0, yW.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: uW.releasedGames.map((FF => (0, yW.jsx)(aW.f, {
                  source: {
                    type: "preview",
                    preview: FF
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, FF.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  3886: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => gW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(3672),
      hF = SF(1046),
      bW = SF(929),
      dF = SF(1266),
      PF = SF(1336),
      RF = SF(1189),
      iW = SF(1971),
      eF = SF(971);
    const EF = {
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

    function QF(FF) {
      let {
        platform: WF
      } = FF;
      const SF = "youtube" === WF;
      return (0, eF.jsxs)("span", {
        className: AF()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: SF
        }),
        children: [SF && (0, eF.jsx)(iW.e, {
          variant: "white"
        }), !SF && (0, eF.jsx)(bW.e, {
          name: EF[WF].icon,
          kit: "brands"
        })]
      })
    }

    function rW(FF) {
      let {
        platform: WF,
        link: SF,
        editable: CF,
        userContext: AF,
        onLinksUpdated: iW
      } = FF;
      const {
        t: rW
      } = (0, hF.B)(), gW = EF[WF];
      if (!SF && !CF) return null;

      function tW() {
        var FF;
        if (!AF || !iW) return;
        RF.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: gW.name
            }
          },
          prefixText: uF.u[WF],
          placeholderText: "playBloxd",
          initialValue: null !== (FF = null === SF || void 0 === SF ? void 0 : SF.handle) && void 0 !== FF ? FF : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: SF ? "general:clear" : void 0
        }).getResult().then((async FF => {
          if ("notificationTornDown" !== FF && null !== FF) try {
            "submit" === FF.type ? await PF.b.setSocialLink(AF, WF, FF.value) : await PF.b.clearSocialLink(AF, WF), iW()
          } catch (SF) {
            console.error("Failed to update social link", SF), RF.NotificationProvider.showAlertPopup({
              title: SF.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (SF) {
        const FF = `@${SF.handle}`;
        return (0, eF.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: gW.color
          },
          href: SF.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, eF.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, eF.jsx)(QF, {
              platform: WF
            }), (0, eF.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, eF.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: FF
              })
            })]
          }), CF && (0, eF.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, dF.Q)({
              stopPropagation: !0
            }),
            onClick: FF => {
              FF.stopPropagation(), FF.preventDefault(), tW()
            },
            children: (0, eF.jsx)(bW.e, {
              name: "pen-to-square"
            })
          }), !CF && (0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, eF.jsx)(bW.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, eF.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: gW.color
        },
        ...(0, dF.Q)(),
        onClick: () => {
          tW()
        },
        children: [(0, eF.jsx)(QF, {
          platform: WF
        }), (0, eF.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: gW.name
          }), (0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: rW("homePage:profileSocialLinkAdd")
          })]
        }), (0, eF.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, eF.jsx)(bW.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function gW(FF) {
      let {
        socialLinks: WF,
        editable: SF = !1,
        userContext: CF,
        onLinksUpdated: AF
      } = FF;
      if (!SF && 0 === WF.length) return null;
      const hF = new Map(WF.map((FF => [FF.platform, FF]))),
        bW = SF ? uF.r : WF.map((FF => FF.platform));
      return (0, eF.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, eF.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bW.map((FF => (0, eF.jsx)(rW, {
            platform: FF,
            link: hF.get(FF),
            editable: SF,
            userContext: CF,
            onLinksUpdated: AF
          }, FF)))
        })
      })
    }
  },
  3884: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);