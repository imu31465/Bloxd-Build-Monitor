export const id = 112;
export const ids = [112];
export const modules = {
  5345: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Se
    });
    var ye = He(59),
      be = He(1515),
      Me = He(347),
      Ke = He(1186),
      Ue = He(1603),
      Fe = He(1207),
      Je = He(1538),
      oe = He(1490),
      Re = He(2833);
    const ke = {
      retries: 2,
      minTimeout: 2e3
    };
    var qe = He(1062),
      fe = He(1600),
      Te = He(1075),
      pe = He(1956),
      Xe = He(1127),
      ze = He(1169),
      Be = He(3865),
      Ee = He(1320),
      ge = He(1438),
      Oe = He(1502),
      de = He(2769),
      We = He(2784),
      te = He(5354),
      Ze = He(2202),
      we = He(1053),
      De = He.n(we),
      Pe = He(1323),
      Ae = He(5358),
      Ye = He(18),
      Ve = He(1983),
      ae = He(4012),
      ce = He(2079),
      xe = He(3994),
      Le = He(97),
      Ce = He(4942),
      ve = He(1228);
    const ue = [te];

    function me(ee) {
      let {
        icon: ie,
        label: He,
        value: ye
      } = ee;
      return (0, ve.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, ve.jsx)(Pe.e, {
          name: ie,
          className: "PlayerProfileStatIcon"
        }), (0, ve.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, ve.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: He
          }), (0, ve.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: ye
          })]
        })]
      })
    }

    function le(ee) {
      let {
        profile: ie
      } = ee;
      const {
        t: He,
        selectedLanguage: ye
      } = (0, Xe.v)();
      let be = He("homePage:profileUnknown");
      if (ie.lastOnline) {
        const ee = (0, Xe.l)(ye.code, "homePage:profileTimeAgo");
        be = He("homePage:profileTimeAgo", {
          time: (0, Me.ib)(ee, ie.lastOnline, Date.now())
        })
      }
      let Ke = He("homePage:profileUnknown");
      return ie.accountCreatedAt && (Ke = new Date(ie.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, ve.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, ve.jsx)(me, {
          icon: "hourglass",
          label: He("homePage:profileTimePlayed"),
          value: (0, ae.d)(ie.totalPlayMinutes)
        }), (0, ve.jsx)(me, {
          icon: "wifi",
          label: He("homePage:profileLastOnline"),
          value: be
        }), (0, ve.jsx)(me, {
          icon: "calendar",
          label: He("homePage:profileJoined"),
          value: Ke
        })]
      })
    }

    function Se() {
      const {
        t: ee
      } = (0, Xe.v)(), ie = (0, Oe.useNavigatePreserveSearch)(), He = (0, qe.g)(), {
        playerName: te,
        playerUrlName: we
      } = (0, be.B)(), ae = (0, be.u)(), me = (0, Ke.f)(ae.pathname), Se = me && ("urlId" in me ? `urlId:${me.urlId}` : `name:${me.lowerCaseName}`), ne = (0, ye.useRef)(Se);
      ne.current = Se;
      const {
        userContext: je,
        isUserContextUpdating: se
      } = (0, Te.b)(), Ie = (0, ye.useRef)(null), he = (0, ye.useRef)(null), Ne = (0, ye.useRef)(null), Ge = (0, ye.useRef)(!1), re = (0, ye.useRef)((0, Me.gc)(ue)), [Qe, ei] = (0, ye.useState)((() => {
        const ee = me && We.d.peek(je, me);
        return ee ? {
          status: "loaded",
          profile: ee,
          playerKey: Se
        } : {
          status: "loading"
        }
      })), [ii, Hi] = (0, ye.useState)(0);
      (0, ye.useEffect)(de.d, []), (0, ye.useEffect)((() => {
        Ve.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Ye.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [ae.key]);
      const yi = () => {
        const ee = (0, Oe.getPreviousLocation)();
        null === ee || ee.startsWith("/play") ? (0, Oe.navigateToHomePage)() : ie(-1)
      };
      (0, Ce.c)(yi), (0, ye.useEffect)((() => {
        var ee;
        if (se) return;
        if (!me) return void ei({
          status: "notFound",
          playerKey: Se
        });
        const ie = "urlId" in me && (null === (ee = he.current) || void 0 === ee ? void 0 : ee.urlId) === me.urlId && Ne.current === je;
        if (ie && Ge.current) return;
        const He = ie ? null : We.d.peek(je, me);
        let ye = !1;
        const be = ee => "loaded" === ee.status && (ee.playerKey === Se || "urlId" in me && ee.profile.urlId === me.urlId);
        return He ? (Ne.current = je, Ge.current = !1, ei({
          status: "loaded",
          profile: He,
          playerKey: Se
        }), We.d.invalidate(me)) : ei((ee => be(ee) ? ee : {
          status: "loading"
        })), async function(ee, ie) {
          if ("lowerCaseName" in ie && ie.lowerCaseName.length > Fe.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await oe.b.getPlayerProfile(ee, ie, ke)
            }
          } catch (He) {
            return (0, Re.b)(He) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", He), {
              status: "failed"
            })
          }
        }(je, me).then((ee => {
          ye || ("loaded" === ee.status && (Ne.current = je, Ge.current = !0), ei((ie => "failed" === ee.status && be(ie) ? ie : {
            ...ee,
            playerKey: Se
          })))
        })), () => {
          ye = !0
        }
      }), [se, Se, je, ii]);
      const bi = "loading" === Qe.status || Qe.playerKey === Se || "loaded" === Qe.status && !!me && "urlId" in me && Qe.profile.urlId === me.urlId ? Qe : {
          status: "loading"
        },
        Mi = "loaded" === bi.status ? bi.profile : null,
        Ki = "loading" === bi.status ? null : function(ee) {
          if ("loaded" === ee.status) {
            const {
              profile: ie
            } = ee;
            return (0, Je.Q)({
              urlId: ie.urlId,
              name: ie.player.name,
              ranks: ie.player.ranks,
              socialLinks: ie.socialLinks
            })
          }
          return "notFound" === ee.status ? (0, Je.$)() : null
        }(bi),
        Ui = null !== Mi && void 0 !== Mi && Mi.urlId ? (0, Ke.j)({
          urlId: Mi.urlId,
          name: Mi.player.name
        }) : null;
      (0, fe.g)(Ui);
      const Fi = null !== Mi && void 0 !== Mi && Mi.player.cosmetics.profileEffect ? Ze.e[Mi.player.cosmetics.profileEffect] : void 0,
        Ji = null !== Mi && !se && je.getPlayerName().toLowerCase() === Mi.player.name.toLowerCase(),
        oi = (0, ce.c)(null === Mi || void 0 === Mi ? void 0 : Mi.player.name),
        Ri = Ji && je.playerHasRank("youtuber");
      he.current = Mi;
      const ki = (0, ye.useCallback)((() => {
          me && (We.d.invalidate(me), We.d.get(je, me).then((ee => {
            ne.current === Se && (Ge.current = !0, ei({
              status: "loaded",
              profile: ee,
              playerKey: Se
            }))
          })).catch((ee => {
            console.error("Failed to refresh user profile", ee)
          })))
        }), [Se, je]),
        qi = (0, ye.useCallback)((() => {
          var ee;
          const ie = he.current;
          return !(!ie || null === (ee = Ie.current) || void 0 === ee || !ee.isReady()) && (Ie.current.setAllCosmetics(ie.player.cosmetics), !0)
        }), []);
      return (0, ye.useEffect)((() => {
        if (!Mi) return;
        let ee, ie = !1;
        const He = () => {
          ie || qi() || (ee = setTimeout(He, 100))
        };
        return He(), () => {
          ie = !0, clearTimeout(ee)
        }
      }), [Mi, qi]), (0, ve.jsxs)("div", {
        className: De()("PlayerProfile", {
          PlayerProfilePortrait: He
        }),
        children: [Ki && (0, ve.jsx)(Ue.e, {
          meta: Ki
        }), (0, ve.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Fi && (0, ve.jsx)(Fi, {}), !Fi && (0, ve.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${re.current})`
            }
          })]
        }), (0, ve.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, ve.jsx)(ge.b, {
            onClick: yi,
            children: ee("general:back")
          }), Mi && !se && !Ji && Le.featureFlags.useSocialFeatures && (0, ve.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, ve.jsx)(xe.b, {
              playerName: Mi.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === bi.status && (0, ve.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, ve.jsx)(Ee.b, {})
        }), ("notFound" === bi.status || "failed" === bi.status) && (0, ve.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, ve.jsx)(Pe.e, {
            name: "face-dizzy"
          }), (0, ve.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === bi.status ? ee("socialBar:playerNotFound", {
              playerName: null !== we && void 0 !== we ? we : te
            }) : ee("playerProfile:loadFailed")
          }), "failed" === bi.status && (0, ve.jsx)(ge.c, {
            onClick: () => {
              Hi((ee => ee + 1))
            },
            children: ee("general:tryAgain")
          })]
        }), Mi && (0, ve.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, ve.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, ve.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, ve.jsx)(pe.e, {
                text: (0, ze.B)(Mi.player.ranks, Mi.player.name, Mi.player.nameColour),
                friendBadgeFor: oi ? Mi.player.name : void 0
              })
            }), (0, ve.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, ve.jsx)(ye.Suspense, {
                fallback: (0, ve.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, ve.jsx)(Ee.b, {})
                }),
                children: (0, ve.jsx)(de.c, {
                  ref: Ie,
                  onReady: () => {
                    qi()
                  }
                })
              })
            })]
          }), (0, ve.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, ve.jsx)(le, {
              profile: Mi
            }), (Mi.socialLinks.length > 0 || Ri) && (0, ve.jsx)(Ae.d, {
              socialLinks: Mi.socialLinks,
              editable: Ri,
              userContext: je,
              onLinksUpdated: ki
            }), (0, ve.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, ve.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: ee("homePage:profileReleasedGames")
              }), 0 === Mi.releasedGames.length && (0, ve.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: ee("homePage:profileNoReleasedGames")
              }), Mi.releasedGames.length > 0 && (0, ve.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Mi.releasedGames.map((ee => (0, ve.jsx)(Be.c, {
                  source: {
                    type: "preview",
                    preview: ee
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, ee.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5358: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5030),
      Ke = He(1127),
      Ue = He(1323),
      Fe = He(1438),
      Je = He(1490),
      oe = He(1340),
      Re = He(2613),
      ke = He(1228);
    const qe = {
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

    function fe(ee) {
      let {
        platform: ie
      } = ee;
      const He = "youtube" === ie;
      return (0, ke.jsxs)("span", {
        className: be()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: He
        }),
        children: [He && (0, ke.jsx)(Re.c, {
          variant: "white"
        }), !He && (0, ke.jsx)(Ue.e, {
          name: qe[ie].icon,
          kit: "brands"
        })]
      })
    }

    function Te(ee) {
      let {
        platform: ie,
        link: He,
        editable: ye,
        userContext: be,
        onLinksUpdated: Re
      } = ee;
      const {
        t: Te
      } = (0, Ke.v)(), pe = qe[ie];
      if (!He && !ye) return null;

      function Xe() {
        var ee;
        if (!be || !Re) return;
        oe.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: pe.name
            }
          },
          prefixText: Me.x[ie],
          placeholderText: "playBloxd",
          initialValue: null !== (ee = null === He || void 0 === He ? void 0 : He.handle) && void 0 !== ee ? ee : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: He ? "general:remove" : void 0
        }).getResult().then((async ee => {
          if ("notificationTornDown" !== ee && null !== ee) try {
            "submit" === ee.type ? await Je.b.setSocialLink(be, ie, ee.value) : await Je.b.clearSocialLink(be, ie), Re()
          } catch (He) {
            console.error("Failed to update social link", He), oe.NotificationProvider.showAlertPopup({
              title: He.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (He) {
        const ee = `@${He.handle}`;
        return (0, ke.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: pe.color
          },
          href: He.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ke.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ke.jsx)(fe, {
              platform: ie
            }), (0, ke.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ke.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: ee
              })
            })]
          }), ye && (0, ke.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Fe.R)({
              stopPropagation: !0
            }),
            onClick: ee => {
              ee.stopPropagation(), ee.preventDefault(), Xe()
            },
            children: (0, ke.jsx)(Ue.e, {
              name: "pen-to-square"
            })
          }), !ye && (0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ke.jsx)(Ue.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ke.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: pe.color
        },
        ...(0, Fe.R)(),
        onClick: () => {
          Xe()
        },
        children: [(0, ke.jsx)(fe, {
          platform: ie
        }), (0, ke.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: pe.name
          }), (0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Te("homePage:profileSocialLinkAdd")
          })]
        }), (0, ke.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ke.jsx)(Ue.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function pe(ee) {
      let {
        socialLinks: ie,
        editable: He = !1,
        userContext: ye,
        onLinksUpdated: be
      } = ee;
      if (!He && 0 === ie.length) return null;
      const Ke = new Map(ie.map((ee => [ee.platform, ee]))),
        Ue = He ? Me.v : ie.map((ee => ee.platform));
      return (0, ke.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ke.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ue.map((ee => (0, ke.jsx)(Te, {
            platform: ee,
            link: Ke.get(ee),
            editable: He,
            userContext: ye,
            onLinksUpdated: be
          }, ee)))
        })
      })
    }
  },
  5354: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);