export const id = 112;
export const ids = [112];
export const modules = {
  5369: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => fV
    });
    var JV = xV(62),
      YV = xV(1625),
      UV = xV(375),
      yV = xV(1267),
      pV = xV(1708),
      QV = xV(1293),
      nV = xV(1643),
      wV = xV(1603),
      ZV = xV(2959);
    const vV = {
      retries: 2,
      minTimeout: 2e3
    };
    var rV = xV(1157),
      kV = xV(1704),
      bV = xV(1168),
      EV = xV(2021),
      BV = xV(1220),
      jV = xV(1252),
      qV = xV(3922),
      tV = xV(1408),
      FV = xV(1551),
      TV = xV(1612),
      PV = xV(2917),
      AV = xV(2922),
      NV = xV(5377),
      XV = xV(2298),
      MV = xV(1146),
      zV = xV.n(MV),
      GV = xV(1414),
      WV = xV(5385),
      RV = xV(27),
      gV = xV(2051),
      DV = xV(4026),
      iV = xV(2158),
      CV = xV(4006),
      aV = xV(99),
      oV = xV(5031),
      cV = xV(1321);
    const hV = [NV];

    function lV(VV) {
      let {
        icon: eV,
        label: xV,
        value: JV
      } = VV;
      return (0, cV.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, cV.jsx)(GV.b, {
          name: eV,
          className: "PlayerProfileStatIcon"
        }), (0, cV.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, cV.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: xV
          }), (0, cV.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: JV
          })]
        })]
      })
    }

    function LV(VV) {
      let {
        profile: eV
      } = VV;
      const {
        t: xV,
        selectedLanguage: JV
      } = (0, BV.A)();
      let YV = xV("homePage:profileUnknown");
      if (eV.lastOnline) {
        const VV = (0, BV.m)(JV.code, "homePage:profileTimeAgo");
        YV = xV("homePage:profileTimeAgo", {
          time: (0, UV.bb)(VV, eV.lastOnline, Date.now())
        })
      }
      let yV = xV("homePage:profileUnknown");
      return eV.accountCreatedAt && (yV = new Date(eV.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, cV.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, cV.jsx)(lV, {
          icon: "hourglass",
          label: xV("homePage:profileTimePlayed"),
          value: (0, DV.b)(eV.totalPlayMinutes)
        }), (0, cV.jsx)(lV, {
          icon: "wifi",
          label: xV("homePage:profileLastOnline"),
          value: YV
        }), (0, cV.jsx)(lV, {
          icon: "calendar",
          label: xV("homePage:profileJoined"),
          value: yV
        })]
      })
    }

    function fV() {
      const {
        t: VV
      } = (0, BV.A)(), eV = (0, TV.useNavigatePreserveSearch)(), xV = (0, rV.j)(), {
        playerName: NV,
        playerUrlName: MV
      } = (0, YV.A)(), DV = (0, YV.r)(), lV = (0, yV.h)(DV.pathname), fV = lV && ("urlId" in lV ? `urlId:${lV.urlId}` : `name:${lV.lowerCaseName}`), mV = (0, JV.useRef)(fV);
      mV.current = fV;
      const {
        userContext: KV,
        isUserContextUpdating: HV
      } = (0, bV.d)(), uV = (0, JV.useRef)(null), sV = (0, JV.useRef)(null), SV = (0, JV.useRef)(null), IV = (0, JV.useRef)(!1), dV = (0, JV.useRef)((0, UV.bc)(hV)), [OV, Ve] = (0, JV.useState)((() => {
        const VV = lV && AV.e.peek(KV, lV);
        return VV ? {
          status: "loaded",
          profile: VV,
          playerKey: fV
        } : {
          status: "loading"
        }
      })), [ee, xe] = (0, JV.useState)(0);
      (0, JV.useEffect)(PV.d, []), (0, JV.useEffect)((() => {
        gV.gameBridge.send("leaveGame", {
          reloadPath: null
        }), RV.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [DV.key]);
      const Je = () => {
        const VV = (0, TV.getPreviousLocation)();
        null === VV || VV.startsWith("/play") ? (0, TV.navigateToHomePage)() : eV(-1)
      };
      (0, oV.d)(Je), (0, JV.useEffect)((() => {
        var VV;
        if (HV) return;
        if (!lV) return void Ve({
          status: "notFound",
          playerKey: fV
        });
        const eV = "urlId" in lV && (null === (VV = sV.current) || void 0 === VV ? void 0 : VV.urlId) === lV.urlId && SV.current === KV;
        if (eV && IV.current) return;
        const xV = eV ? null : AV.e.peek(KV, lV);
        let JV = !1;
        const YV = VV => "loaded" === VV.status && (VV.playerKey === fV || "urlId" in lV && VV.profile.urlId === lV.urlId);
        return xV ? (SV.current = KV, IV.current = !1, Ve({
          status: "loaded",
          profile: xV,
          playerKey: fV
        }), AV.e.invalidate(lV)) : Ve((VV => YV(VV) ? VV : {
          status: "loading"
        })), async function(VV, eV) {
          if ("lowerCaseName" in eV && eV.lowerCaseName.length > QV.f) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await wV.b.getPlayerProfile(VV, eV, vV)
            }
          } catch (xV) {
            return (0, ZV.d)(xV) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", xV), {
              status: "failed"
            })
          }
        }(KV, lV).then((VV => {
          JV || ("loaded" === VV.status && (SV.current = KV, IV.current = !0), Ve((eV => "failed" === VV.status && YV(eV) ? eV : {
            ...VV,
            playerKey: fV
          })))
        })), () => {
          JV = !0
        }
      }), [HV, fV, KV, ee]);
      const Ye = "loading" === OV.status || OV.playerKey === fV || "loaded" === OV.status && !!lV && "urlId" in lV && OV.profile.urlId === lV.urlId ? OV : {
          status: "loading"
        },
        Ue = "loaded" === Ye.status ? Ye.profile : null,
        ye = "loading" === Ye.status ? null : function(VV) {
          if ("loaded" === VV.status) {
            const {
              profile: eV
            } = VV;
            return (0, nV.O)({
              urlId: eV.urlId,
              name: eV.player.name,
              ranks: eV.player.ranks,
              socialLinks: eV.socialLinks
            })
          }
          return "notFound" === VV.status ? (0, nV.Z)() : null
        }(Ye),
        pe = null !== Ue && void 0 !== Ue && Ue.urlId ? (0, yV.l)({
          urlId: Ue.urlId,
          name: Ue.player.name
        }) : null;
      (0, kV.e)(pe);
      const Qe = null !== Ue && void 0 !== Ue && Ue.player.cosmetics.profileEffect ? XV.f[Ue.player.cosmetics.profileEffect] : void 0,
        ne = null !== Ue && !HV && KV.getPlayerName().toLowerCase() === Ue.player.name.toLowerCase(),
        we = (0, iV.b)(null === Ue || void 0 === Ue ? void 0 : Ue.player.name),
        Ze = ne && KV.playerHasRank("youtuber");
      sV.current = Ue;
      const ve = (0, JV.useCallback)((() => {
          lV && (AV.e.invalidate(lV), AV.e.get(KV, lV).then((VV => {
            mV.current === fV && (IV.current = !0, Ve({
              status: "loaded",
              profile: VV,
              playerKey: fV
            }))
          })).catch((VV => {
            console.error("Failed to refresh user profile", VV)
          })))
        }), [fV, KV]),
        re = (0, JV.useCallback)((() => {
          var VV;
          const eV = sV.current;
          return !(!eV || null === (VV = uV.current) || void 0 === VV || !VV.isReady()) && (uV.current.setAllCosmetics(eV.player.cosmetics), !0)
        }), []);
      return (0, JV.useEffect)((() => {
        if (!Ue) return;
        let VV, eV = !1;
        const xV = () => {
          eV || re() || (VV = setTimeout(xV, 100))
        };
        return xV(), () => {
          eV = !0, clearTimeout(VV)
        }
      }), [Ue, re]), (0, cV.jsxs)("div", {
        className: zV()("PlayerProfile", {
          PlayerProfilePortrait: xV
        }),
        children: [ye && (0, cV.jsx)(pV.c, {
          meta: ye
        }), (0, cV.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Qe && (0, cV.jsx)(Qe, {}), !Qe && (0, cV.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${dV.current})`
            }
          })]
        }), (0, cV.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, cV.jsx)(FV.b, {
            onClick: Je,
            children: VV("general:back")
          }), Ue && !HV && !ne && aV.featureFlags.useSocialFeatures && (0, cV.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, cV.jsx)(CV.b, {
              playerName: Ue.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Ye.status && (0, cV.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, cV.jsx)(tV.d, {})
        }), ("notFound" === Ye.status || "failed" === Ye.status) && (0, cV.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, cV.jsx)(GV.b, {
            name: "face-dizzy"
          }), (0, cV.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Ye.status ? VV("socialBar:playerNotFound", {
              playerName: null !== MV && void 0 !== MV ? MV : NV
            }) : VV("playerProfile:loadFailed")
          }), "failed" === Ye.status && (0, cV.jsx)(FV.f, {
            onClick: () => {
              xe((VV => VV + 1))
            },
            children: VV("general:tryAgain")
          })]
        }), Ue && (0, cV.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, cV.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, cV.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, cV.jsx)(EV.b, {
                text: (0, jV.t)(Ue.player.ranks, Ue.player.name, Ue.player.nameColour),
                friendBadgeFor: we ? Ue.player.name : void 0
              })
            }), (0, cV.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, cV.jsx)(JV.Suspense, {
                fallback: (0, cV.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, cV.jsx)(tV.d, {})
                }),
                children: (0, cV.jsx)(PV.c, {
                  ref: uV,
                  onReady: () => {
                    re()
                  }
                })
              })
            })]
          }), (0, cV.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, cV.jsx)(LV, {
              profile: Ue
            }), (Ue.socialLinks.length > 0 || Ze) && (0, cV.jsx)(WV.c, {
              socialLinks: Ue.socialLinks,
              editable: Ze,
              userContext: KV,
              onLinksUpdated: ve
            }), (0, cV.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, cV.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: VV("homePage:profileReleasedGames")
              }), 0 === Ue.releasedGames.length && (0, cV.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: VV("homePage:profileNoReleasedGames")
              }), Ue.releasedGames.length > 0 && (0, cV.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Ue.releasedGames.map((VV => (0, cV.jsx)(qV.g, {
                  source: {
                    type: "preview",
                    preview: VV
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, VV.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5385: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5115),
      yV = xV(1220),
      pV = xV(1414),
      QV = xV(1551),
      nV = xV(1603),
      wV = xV(1439),
      ZV = xV(2771),
      vV = xV(1321);
    const rV = {
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

    function kV(VV) {
      let {
        platform: eV
      } = VV;
      const xV = "youtube" === eV;
      return (0, vV.jsxs)("span", {
        className: YV()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: xV
        }),
        children: [xV && (0, vV.jsx)(ZV.b, {
          variant: "white"
        }), !xV && (0, vV.jsx)(pV.b, {
          name: rV[eV].icon,
          kit: "brands"
        })]
      })
    }

    function bV(VV) {
      let {
        platform: eV,
        link: xV,
        editable: JV,
        userContext: YV,
        onLinksUpdated: ZV
      } = VV;
      const {
        t: bV
      } = (0, yV.A)(), EV = rV[eV];
      if (!xV && !JV) return null;

      function BV() {
        var VV;
        if (!YV || !ZV) return;
        wV.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: EV.name
            }
          },
          prefixText: UV.s[eV],
          placeholderText: "playBloxd",
          initialValue: null !== (VV = null === xV || void 0 === xV ? void 0 : xV.handle) && void 0 !== VV ? VV : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: xV ? "general:remove" : void 0
        }).getResult().then((async VV => {
          if ("notificationTornDown" !== VV && null !== VV) try {
            "submit" === VV.type ? await nV.b.setSocialLink(YV, eV, VV.value) : await nV.b.clearSocialLink(YV, eV), ZV()
          } catch (xV) {
            console.error("Failed to update social link", xV), wV.NotificationProvider.showAlertPopup({
              title: xV.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (xV) {
        const VV = `@${xV.handle}`;
        return (0, vV.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: EV.color
          },
          href: xV.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, vV.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, vV.jsx)(kV, {
              platform: eV
            }), (0, vV.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, vV.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: VV
              })
            })]
          }), JV && (0, vV.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, QV.V)({
              stopPropagation: !0
            }),
            onClick: VV => {
              VV.stopPropagation(), VV.preventDefault(), BV()
            },
            children: (0, vV.jsx)(pV.b, {
              name: "pen-to-square"
            })
          }), !JV && (0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, vV.jsx)(pV.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, vV.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: EV.color
        },
        ...(0, QV.V)(),
        onClick: () => {
          BV()
        },
        children: [(0, vV.jsx)(kV, {
          platform: eV
        }), (0, vV.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: EV.name
          }), (0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: bV("homePage:profileSocialLinkAdd")
          })]
        }), (0, vV.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, vV.jsx)(pV.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function EV(VV) {
      let {
        socialLinks: eV,
        editable: xV = !1,
        userContext: JV,
        onLinksUpdated: YV
      } = VV;
      if (!xV && 0 === eV.length) return null;
      const yV = new Map(eV.map((VV => [VV.platform, VV]))),
        pV = xV ? UV.p : eV.map((VV => VV.platform));
      return (0, vV.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, vV.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: pV.map((VV => (0, vV.jsx)(bV, {
            platform: VV,
            link: yV.get(VV),
            editable: xV,
            userContext: JV,
            onLinksUpdated: YV
          }, VV)))
        })
      })
    }
  },
  5377: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);