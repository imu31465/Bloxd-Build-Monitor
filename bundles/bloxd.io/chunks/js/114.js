export const id = 114;
export const ids = [114];
export const modules = {
  5627: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => BW
    });
    var mW = OW(62),
      EW = OW(1616),
      NW = OW(344),
      PW = OW(1223),
      LW = OW(1713),
      cW = OW(1259),
      wW = OW(1642),
      tW = OW(1584),
      ZW = OW(3682);
    const xW = {
      retries: 2,
      minTimeout: 2e3
    };
    var lW = OW(1095),
      AW = OW(1707),
      bW = OW(1107),
      jW = OW(2021),
      UW = OW(1172),
      kW = OW(1217),
      sW = OW(4718),
      MW = OW(1383),
      KW = OW(1532),
      SW = OW(1605),
      YW = OW(3627),
      yW = OW(3641),
      TW = OW(5634),
      JW = OW(2991),
      hW = OW(1089),
      HW = OW.n(hW),
      nW = OW(1391),
      uW = OW(5643),
      oW = OW(25),
      dW = OW(2037),
      eW = OW(4851),
      vW = OW(2120),
      gW = OW(4835),
      DW = OW(100),
      VW = OW(5261),
      pW = OW(1283);
    const fW = [TW];

    function CW(WW) {
      let {
        icon: iW,
        label: OW,
        value: mW
      } = WW;
      return (0, pW.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, pW.jsx)(nW.c, {
          name: iW,
          className: "PlayerProfileStatIcon"
        }), (0, pW.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, pW.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: OW
          }), (0, pW.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: mW
          })]
        })]
      })
    }

    function XW(WW) {
      let {
        profile: iW
      } = WW;
      const {
        t: OW,
        selectedLanguage: mW
      } = (0, UW.B)();
      let EW = OW("homePage:profileUnknown");
      if (iW.lastOnline) {
        const WW = (0, UW.k)(mW.code, "homePage:profileTimeAgo");
        EW = OW("homePage:profileTimeAgo", {
          time: (0, NW.$)(WW, iW.lastOnline, Date.now())
        })
      }
      let PW = OW("homePage:profileUnknown");
      return iW.accountCreatedAt && (PW = new Date(iW.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, pW.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, pW.jsx)(CW, {
          icon: "hourglass",
          label: OW("homePage:profileTimePlayed"),
          value: (0, eW.c)(iW.totalPlayMinutes)
        }), (0, pW.jsx)(CW, {
          icon: "wifi",
          label: OW("homePage:profileLastOnline"),
          value: EW
        }), (0, pW.jsx)(CW, {
          icon: "calendar",
          label: OW("homePage:profileJoined"),
          value: PW
        })]
      })
    }

    function BW() {
      const {
        t: WW
      } = (0, UW.B)(), iW = (0, SW.useNavigatePreserveSearch)(), OW = (0, lW.h)(), {
        playerName: TW,
        playerUrlName: hW
      } = (0, EW.z)(), eW = (0, EW.u)(), CW = (0, PW.h)(eW.pathname), BW = CW && ("urlId" in CW ? `urlId:${CW.urlId}` : `name:${CW.lowerCaseName}`), qW = (0, mW.useRef)(BW);
      qW.current = BW;
      const {
        userContext: RW,
        isUserContextUpdating: GW
      } = (0, bW.e)(), IW = (0, mW.useRef)(null), aW = (0, mW.useRef)(null), rW = (0, mW.useRef)(null), zW = (0, mW.useRef)(!1), FW = (0, mW.useRef)((0, NW.cc)(fW)), [QW, Wi] = (0, mW.useState)((() => {
        const WW = CW && yW.c.peek(RW, CW);
        return WW ? {
          status: "loaded",
          profile: WW,
          playerKey: BW
        } : {
          status: "loading"
        }
      })), [ii, Oi] = (0, mW.useState)(0);
      (0, mW.useEffect)(YW.i, []), (0, mW.useEffect)((() => {
        dW.gameBridge.send("leaveGame", {
          reloadPath: null
        }), oW.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [eW.key]);
      const mi = () => {
        const WW = (0, SW.getPreviousLocation)();
        null === WW || WW.startsWith("/play") ? (0, SW.navigateToHomePage)() : iW(-1)
      };
      (0, VW.c)(mi), (0, mW.useEffect)((() => {
        var WW;
        if (GW) return;
        if (!CW) return void Wi({
          status: "notFound",
          playerKey: BW
        });
        const iW = "urlId" in CW && (null === (WW = aW.current) || void 0 === WW ? void 0 : WW.urlId) === CW.urlId && rW.current === RW;
        if (iW && zW.current) return;
        const OW = iW ? null : yW.c.peek(RW, CW);
        let mW = !1;
        const EW = WW => "loaded" === WW.status && (WW.playerKey === BW || "urlId" in CW && WW.profile.urlId === CW.urlId);
        return OW ? (rW.current = RW, zW.current = !1, Wi({
          status: "loaded",
          profile: OW,
          playerKey: BW
        }), yW.c.invalidate(CW)) : Wi((WW => EW(WW) ? WW : {
          status: "loading"
        })), async function(WW, iW) {
          if ("lowerCaseName" in iW && iW.lowerCaseName.length > cW.f) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await tW.e.getPlayerProfile(WW, iW, xW)
            }
          } catch (OW) {
            return (0, ZW.c)(OW) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", OW), {
              status: "failed"
            })
          }
        }(RW, CW).then((WW => {
          mW || ("loaded" === WW.status && (rW.current = RW, zW.current = !0), Wi((iW => "failed" === WW.status && EW(iW) ? iW : {
            ...WW,
            playerKey: BW
          })))
        })), () => {
          mW = !0
        }
      }), [GW, BW, RW, ii]);
      const Ei = "loading" === QW.status || QW.playerKey === BW || "loaded" === QW.status && !!CW && "urlId" in CW && QW.profile.urlId === CW.urlId ? QW : {
          status: "loading"
        },
        Ni = "loaded" === Ei.status ? Ei.profile : null,
        Pi = "loading" === Ei.status ? null : function(WW) {
          if ("loaded" === WW.status) {
            const {
              profile: iW
            } = WW;
            return (0, wW.V)({
              urlId: iW.urlId,
              name: iW.player.name,
              ranks: iW.player.ranks,
              socialLinks: iW.socialLinks
            })
          }
          return "notFound" === WW.status ? (0, wW.gb)() : null
        }(Ei),
        Li = null !== Ni && void 0 !== Ni && Ni.urlId ? (0, PW.i)({
          urlId: Ni.urlId,
          name: Ni.player.name
        }) : null;
      (0, AW.f)(Li);
      const ci = null !== Ni && void 0 !== Ni && Ni.player.cosmetics.profileEffect ? JW.d[Ni.player.cosmetics.profileEffect] : void 0,
        wi = null !== Ni && !GW && RW.getPlayerName().toLowerCase() === Ni.player.name.toLowerCase(),
        ti = (0, vW.c)(null === Ni || void 0 === Ni ? void 0 : Ni.player.name),
        Zi = wi && RW.playerHasRank("youtuber");
      aW.current = Ni;
      const xi = (0, mW.useCallback)((() => {
          CW && (yW.c.invalidate(CW), yW.c.get(RW, CW).then((WW => {
            qW.current === BW && (zW.current = !0, Wi({
              status: "loaded",
              profile: WW,
              playerKey: BW
            }))
          })).catch((WW => {
            console.error("Failed to refresh user profile", WW)
          })))
        }), [BW, RW]),
        li = (0, mW.useCallback)((() => {
          var WW;
          const iW = aW.current;
          return !(!iW || null === (WW = IW.current) || void 0 === WW || !WW.isReady()) && (IW.current.setAllCosmetics(iW.player.cosmetics), !0)
        }), []);
      return (0, mW.useEffect)((() => {
        if (!Ni) return;
        let WW, iW = !1;
        const OW = () => {
          iW || li() || (WW = setTimeout(OW, 100))
        };
        return OW(), () => {
          iW = !0, clearTimeout(WW)
        }
      }), [Ni, li]), (0, pW.jsxs)("div", {
        className: HW()("PlayerProfile", {
          PlayerProfilePortrait: OW
        }),
        children: [Pi && (0, pW.jsx)(LW.c, {
          meta: Pi
        }), (0, pW.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [ci && (0, pW.jsx)(ci, {}), !ci && (0, pW.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${FW.current})`
            }
          })]
        }), (0, pW.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, pW.jsx)(KW.b, {
            onClick: mi,
            children: WW("general:back")
          }), Ni && !GW && !wi && DW.featureFlags.useSocialFeatures && (0, pW.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, pW.jsx)(gW.d, {
              playerName: Ni.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Ei.status && (0, pW.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, pW.jsx)(MW.d, {})
        }), ("notFound" === Ei.status || "failed" === Ei.status) && (0, pW.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, pW.jsx)(nW.c, {
            name: "face-dizzy"
          }), (0, pW.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Ei.status ? WW("socialBar:playerNotFound", {
              playerName: null !== hW && void 0 !== hW ? hW : TW
            }) : WW("playerProfile:loadFailed")
          }), "failed" === Ei.status && (0, pW.jsx)(KW.f, {
            onClick: () => {
              Oi((WW => WW + 1))
            },
            children: WW("general:tryAgain")
          })]
        }), Ni && (0, pW.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, pW.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, pW.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, pW.jsx)(jW.d, {
                text: (0, kW.E)(Ni.player.ranks, Ni.player.name, Ni.player.nameColour),
                friendBadgeFor: ti ? Ni.player.name : void 0
              })
            }), (0, pW.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, pW.jsx)(mW.Suspense, {
                fallback: (0, pW.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, pW.jsx)(MW.d, {})
                }),
                children: (0, pW.jsx)(YW.e, {
                  ref: IW,
                  onReady: () => {
                    li()
                  }
                })
              })
            })]
          }), (0, pW.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, pW.jsx)(XW, {
              profile: Ni
            }), (Ni.socialLinks.length > 0 || Zi) && (0, pW.jsx)(uW.d, {
              socialLinks: Ni.socialLinks,
              editable: Zi,
              userContext: RW,
              onLinksUpdated: xi
            }), (0, pW.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, pW.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: WW("homePage:profileReleasedGames")
              }), 0 === Ni.releasedGames.length && (0, pW.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: WW("homePage:profileNoReleasedGames")
              }), Ni.releasedGames.length > 0 && (0, pW.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Ni.releasedGames.map((WW => (0, pW.jsx)(sW.d, {
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
  5643: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5329),
      PW = OW(1172),
      LW = OW(1391),
      cW = OW(1532),
      wW = OW(1584),
      tW = OW(1422),
      ZW = OW(3479),
      xW = OW(1283);
    const lW = {
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

    function AW(WW) {
      let {
        platform: iW
      } = WW;
      const OW = "youtube" === iW;
      return (0, xW.jsxs)("span", {
        className: EW()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: OW
        }),
        children: [OW && (0, xW.jsx)(ZW.e, {
          variant: "white"
        }), !OW && (0, xW.jsx)(LW.c, {
          name: lW[iW].icon,
          kit: "brands"
        })]
      })
    }

    function bW(WW) {
      let {
        platform: iW,
        link: OW,
        editable: mW,
        userContext: EW,
        onLinksUpdated: ZW
      } = WW;
      const {
        t: bW
      } = (0, PW.B)(), jW = lW[iW];
      if (!OW && !mW) return null;

      function UW() {
        var WW;
        if (!EW || !ZW) return;
        tW.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: jW.name
            }
          },
          prefixText: NW.u[iW],
          placeholderText: "playBloxd",
          initialValue: null !== (WW = null === OW || void 0 === OW ? void 0 : OW.handle) && void 0 !== WW ? WW : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: OW ? "general:remove" : void 0
        }).getResult().then((async WW => {
          if ("notificationTornDown" !== WW && null !== WW) try {
            "submit" === WW.type ? await wW.e.setSocialLink(EW, iW, WW.value) : await wW.e.clearSocialLink(EW, iW), ZW()
          } catch (OW) {
            console.error("Failed to update social link", OW), tW.NotificationProvider.showAlertPopup({
              title: OW.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (OW) {
        const WW = `@${OW.handle}`;
        return (0, xW.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: jW.color
          },
          href: OW.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, xW.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, xW.jsx)(AW, {
              platform: iW
            }), (0, xW.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, xW.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: WW
              })
            })]
          }), mW && (0, xW.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, cW.fb)({
              stopPropagation: !0
            }),
            onClick: WW => {
              WW.stopPropagation(), WW.preventDefault(), UW()
            },
            children: (0, xW.jsx)(LW.c, {
              name: "pen-to-square"
            })
          }), !mW && (0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, xW.jsx)(LW.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, xW.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: jW.color
        },
        ...(0, cW.fb)(),
        onClick: () => {
          UW()
        },
        children: [(0, xW.jsx)(AW, {
          platform: iW
        }), (0, xW.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: jW.name
          }), (0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: bW("homePage:profileSocialLinkAdd")
          })]
        }), (0, xW.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, xW.jsx)(LW.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function jW(WW) {
      let {
        socialLinks: iW,
        editable: OW = !1,
        userContext: mW,
        onLinksUpdated: EW
      } = WW;
      if (!OW && 0 === iW.length) return null;
      const PW = new Map(iW.map((WW => [WW.platform, WW]))),
        LW = OW ? NW.t : iW.map((WW => WW.platform));
      return (0, xW.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, xW.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: LW.map((WW => (0, xW.jsx)(bW, {
            platform: WW,
            link: PW.get(WW),
            editable: OW,
            userContext: mW,
            onLinksUpdated: EW
          }, WW)))
        })
      })
    }
  },
  5634: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);