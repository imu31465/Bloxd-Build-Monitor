export const id = 112;
export const ids = [112];
export const modules = {
  5352: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => DH
    });
    var AH = LH(45),
      rH = LH(1520),
      SH = LH(317),
      hH = LH(1179),
      tH = LH(1631),
      zH = LH(1206),
      CH = LH(1543),
      EH = LH(1502),
      XH = LH(2915);
    const GH = {
      retries: 2,
      minTimeout: 2e3
    };
    var YH = LH(1049),
      uH = LH(1624),
      QH = LH(1061),
      WH = LH(1967),
      MH = LH(1123),
      xH = LH(1168),
      vH = LH(3872),
      PH = LH(1313),
      TH = LH(1455),
      UH = LH(1509),
      VH = LH(2851),
      OH = LH(2869),
      bH = LH(5358),
      kH = LH(2257),
      mH = LH(1038),
      oH = LH.n(mH),
      IH = LH(1315),
      fH = LH(5367),
      lH = LH(15),
      KH = LH(1998),
      cH = LH(3998),
      eH = LH(2098),
      qH = LH(3976),
      gH = LH(81),
      NH = LH(4961),
      RH = LH(1225);
    const jH = [bH];

    function nH(HH) {
      let {
        icon: BH,
        label: LH,
        value: AH
      } = HH;
      return (0, RH.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, RH.jsx)(IH.c, {
          name: BH,
          className: "PlayerProfileStatIcon"
        }), (0, RH.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, RH.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: LH
          }), (0, RH.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: AH
          })]
        })]
      })
    }

    function FH(HH) {
      let {
        profile: BH
      } = HH;
      const {
        t: LH,
        selectedLanguage: AH
      } = (0, MH.B)();
      let rH = LH("homePage:profileUnknown");
      if (BH.lastOnline) {
        const HH = (0, MH.n)(AH.code, "homePage:profileTimeAgo");
        rH = LH("homePage:profileTimeAgo", {
          time: (0, SH._)(HH, BH.lastOnline, Date.now())
        })
      }
      let hH = LH("homePage:profileUnknown");
      return BH.accountCreatedAt && (hH = new Date(BH.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, RH.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, RH.jsx)(nH, {
          icon: "hourglass",
          label: LH("homePage:profileTimePlayed"),
          value: (0, cH.c)(BH.totalPlayMinutes)
        }), (0, RH.jsx)(nH, {
          icon: "wifi",
          label: LH("homePage:profileLastOnline"),
          value: rH
        }), (0, RH.jsx)(nH, {
          icon: "calendar",
          label: LH("homePage:profileJoined"),
          value: hH
        })]
      })
    }

    function DH() {
      const {
        t: HH
      } = (0, MH.B)(), BH = (0, UH.useNavigatePreserveSearch)(), LH = (0, YH.k)(), {
        playerName: bH,
        playerUrlName: mH
      } = (0, rH.A)(), cH = (0, rH.s)(), nH = (0, hH.h)(cH.pathname), DH = nH && ("urlId" in nH ? `urlId:${nH.urlId}` : `name:${nH.lowerCaseName}`), wH = (0, AH.useRef)(DH);
      wH.current = DH;
      const {
        userContext: ZH,
        isUserContextUpdating: dH
      } = (0, QH.e)(), aH = (0, AH.useRef)(null), sH = (0, AH.useRef)(null), JH = (0, AH.useRef)(null), iH = (0, AH.useRef)(!1), pH = (0, AH.useRef)((0, SH.hc)(jH)), [yH, HB] = (0, AH.useState)((() => {
        const HH = nH && OH.c.peek(ZH, nH);
        return HH ? {
          status: "loaded",
          profile: HH,
          playerKey: DH
        } : {
          status: "loading"
        }
      })), [BB, LB] = (0, AH.useState)(0);
      (0, AH.useEffect)(VH.f, []), (0, AH.useEffect)((() => {
        KH.gameBridge.send("leaveGame", {
          reloadPath: null
        }), lH.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [cH.key]);
      const AB = () => {
        const HH = (0, UH.getPreviousLocation)();
        null === HH || HH.startsWith("/play") ? (0, UH.navigateToHomePage)() : BH(-1)
      };
      (0, NH.c)(AB), (0, AH.useEffect)((() => {
        var HH;
        if (dH) return;
        if (!nH) return void HB({
          status: "notFound",
          playerKey: DH
        });
        const BH = "urlId" in nH && (null === (HH = sH.current) || void 0 === HH ? void 0 : HH.urlId) === nH.urlId && JH.current === ZH;
        if (BH && iH.current) return;
        const LH = BH ? null : OH.c.peek(ZH, nH);
        let AH = !1;
        const rH = HH => "loaded" === HH.status && (HH.playerKey === DH || "urlId" in nH && HH.profile.urlId === nH.urlId);
        return LH ? (JH.current = ZH, iH.current = !1, HB({
          status: "loaded",
          profile: LH,
          playerKey: DH
        }), OH.c.invalidate(nH)) : HB((HH => rH(HH) ? HH : {
          status: "loading"
        })), async function(HH, BH) {
          if ("lowerCaseName" in BH && BH.lowerCaseName.length > zH.e) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await EH.d.getPlayerProfile(HH, BH, GH)
            }
          } catch (LH) {
            return (0, XH.d)(LH) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", LH), {
              status: "failed"
            })
          }
        }(ZH, nH).then((HH => {
          AH || ("loaded" === HH.status && (JH.current = ZH, iH.current = !0), HB((BH => "failed" === HH.status && rH(BH) ? BH : {
            ...HH,
            playerKey: DH
          })))
        })), () => {
          AH = !0
        }
      }), [dH, DH, ZH, BB]);
      const rB = "loading" === yH.status || yH.playerKey === DH || "loaded" === yH.status && !!nH && "urlId" in nH && yH.profile.urlId === nH.urlId ? yH : {
          status: "loading"
        },
        SB = "loaded" === rB.status ? rB.profile : null,
        hB = "loading" === rB.status ? null : function(HH) {
          if ("loaded" === HH.status) {
            const {
              profile: BH
            } = HH;
            return (0, CH.S)({
              urlId: BH.urlId,
              name: BH.player.name,
              ranks: BH.player.ranks,
              socialLinks: BH.socialLinks
            })
          }
          return "notFound" === HH.status ? (0, CH.cb)() : null
        }(rB),
        tB = null !== SB && void 0 !== SB && SB.urlId ? (0, hH.k)({
          urlId: SB.urlId,
          name: SB.player.name
        }) : null;
      (0, uH.f)(tB);
      const zB = null !== SB && void 0 !== SB && SB.player.cosmetics.profileEffect ? kH.f[SB.player.cosmetics.profileEffect] : void 0,
        CB = null !== SB && !dH && ZH.getPlayerName().toLowerCase() === SB.player.name.toLowerCase(),
        EB = (0, eH.b)(null === SB || void 0 === SB ? void 0 : SB.player.name),
        XB = CB && ZH.playerHasRank("youtuber");
      sH.current = SB;
      const GB = (0, AH.useCallback)((() => {
          nH && (OH.c.invalidate(nH), OH.c.get(ZH, nH).then((HH => {
            wH.current === DH && (iH.current = !0, HB({
              status: "loaded",
              profile: HH,
              playerKey: DH
            }))
          })).catch((HH => {
            console.error("Failed to refresh user profile", HH)
          })))
        }), [DH, ZH]),
        YB = (0, AH.useCallback)((() => {
          var HH;
          const BH = sH.current;
          return !(!BH || null === (HH = aH.current) || void 0 === HH || !HH.isReady()) && (aH.current.setAllCosmetics(BH.player.cosmetics), !0)
        }), []);
      return (0, AH.useEffect)((() => {
        if (!SB) return;
        let HH, BH = !1;
        const LH = () => {
          BH || YB() || (HH = setTimeout(LH, 100))
        };
        return LH(), () => {
          BH = !0, clearTimeout(HH)
        }
      }), [SB, YB]), (0, RH.jsxs)("div", {
        className: oH()("PlayerProfile", {
          PlayerProfilePortrait: LH
        }),
        children: [hB && (0, RH.jsx)(tH.c, {
          meta: hB
        }), (0, RH.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [zB && (0, RH.jsx)(zB, {}), !zB && (0, RH.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${pH.current})`
            }
          })]
        }), (0, RH.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, RH.jsx)(TH.e, {
            onClick: AB,
            children: HH("general:back")
          }), SB && !dH && !CB && gH.featureFlags.useSocialFeatures && (0, RH.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, RH.jsx)(qH.d, {
              playerName: SB.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === rB.status && (0, RH.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, RH.jsx)(PH.d, {})
        }), ("notFound" === rB.status || "failed" === rB.status) && (0, RH.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, RH.jsx)(IH.c, {
            name: "face-dizzy"
          }), (0, RH.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === rB.status ? HH("socialBar:playerNotFound", {
              playerName: null !== mH && void 0 !== mH ? mH : bH
            }) : HH("playerProfile:loadFailed")
          }), "failed" === rB.status && (0, RH.jsx)(TH.i, {
            onClick: () => {
              LB((HH => HH + 1))
            },
            children: HH("general:tryAgain")
          })]
        }), SB && (0, RH.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, RH.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, RH.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, RH.jsx)(WH.b, {
                text: (0, xH.x)(SB.player.ranks, SB.player.name, SB.player.nameColour),
                friendBadgeFor: EB ? SB.player.name : void 0
              })
            }), (0, RH.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, RH.jsx)(AH.Suspense, {
                fallback: (0, RH.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, RH.jsx)(PH.d, {})
                }),
                children: (0, RH.jsx)(VH.b, {
                  ref: aH,
                  onReady: () => {
                    YB()
                  }
                })
              })
            })]
          }), (0, RH.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, RH.jsx)(FH, {
              profile: SB
            }), (SB.socialLinks.length > 0 || XB) && (0, RH.jsx)(fH.b, {
              socialLinks: SB.socialLinks,
              editable: XB,
              userContext: ZH,
              onLinksUpdated: GB
            }), (0, RH.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, RH.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: HH("homePage:profileReleasedGames")
              }), 0 === SB.releasedGames.length && (0, RH.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: HH("homePage:profileNoReleasedGames")
              }), SB.releasedGames.length > 0 && (0, RH.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: SB.releasedGames.map((HH => (0, RH.jsx)(vH.d, {
                  source: {
                    type: "preview",
                    preview: HH
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, HH.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5367: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5046),
      hH = LH(1123),
      tH = LH(1315),
      zH = LH(1455),
      CH = LH(1502),
      EH = LH(1352),
      XH = LH(2703),
      GH = LH(1225);
    const YH = {
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

    function uH(HH) {
      let {
        platform: BH
      } = HH;
      const LH = "youtube" === BH;
      return (0, GH.jsxs)("span", {
        className: rH()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: LH
        }),
        children: [LH && (0, GH.jsx)(XH.d, {
          variant: "white"
        }), !LH && (0, GH.jsx)(tH.c, {
          name: YH[BH].icon,
          kit: "brands"
        })]
      })
    }

    function QH(HH) {
      let {
        platform: BH,
        link: LH,
        editable: AH,
        userContext: rH,
        onLinksUpdated: XH
      } = HH;
      const {
        t: QH
      } = (0, hH.B)(), WH = YH[BH];
      if (!LH && !AH) return null;

      function MH() {
        var HH;
        if (!rH || !XH) return;
        EH.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: WH.name
            }
          },
          prefixText: SH.w[BH],
          placeholderText: "playBloxd",
          initialValue: null !== (HH = null === LH || void 0 === LH ? void 0 : LH.handle) && void 0 !== HH ? HH : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: LH ? "general:remove" : void 0
        }).getResult().then((async HH => {
          if ("notificationTornDown" !== HH && null !== HH) try {
            "submit" === HH.type ? await CH.d.setSocialLink(rH, BH, HH.value) : await CH.d.clearSocialLink(rH, BH), XH()
          } catch (LH) {
            console.error("Failed to update social link", LH), EH.NotificationProvider.showAlertPopup({
              title: LH.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (LH) {
        const HH = `@${LH.handle}`;
        return (0, GH.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: WH.color
          },
          href: LH.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, GH.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, GH.jsx)(uH, {
              platform: BH
            }), (0, GH.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, GH.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: HH
              })
            })]
          }), AH && (0, GH.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, zH.db)({
              stopPropagation: !0
            }),
            onClick: HH => {
              HH.stopPropagation(), HH.preventDefault(), MH()
            },
            children: (0, GH.jsx)(tH.c, {
              name: "pen-to-square"
            })
          }), !AH && (0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, GH.jsx)(tH.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, GH.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: WH.color
        },
        ...(0, zH.db)(),
        onClick: () => {
          MH()
        },
        children: [(0, GH.jsx)(uH, {
          platform: BH
        }), (0, GH.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: WH.name
          }), (0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: QH("homePage:profileSocialLinkAdd")
          })]
        }), (0, GH.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, GH.jsx)(tH.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function WH(HH) {
      let {
        socialLinks: BH,
        editable: LH = !1,
        userContext: AH,
        onLinksUpdated: rH
      } = HH;
      if (!LH && 0 === BH.length) return null;
      const hH = new Map(BH.map((HH => [HH.platform, HH]))),
        tH = LH ? SH.s : BH.map((HH => HH.platform));
      return (0, GH.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, GH.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: tH.map((HH => (0, GH.jsx)(QH, {
            platform: HH,
            link: hH.get(HH),
            editable: LH,
            userContext: AH,
            onLinksUpdated: rH
          }, HH)))
        })
      })
    }
  },
  5358: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);