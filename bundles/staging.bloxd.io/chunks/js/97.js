export const id = 97;
export const ids = [97];
export const modules = {
  4814: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => um
    });
    var hm = fm(59),
      Am = fm(1537),
      am = fm(354),
      xm = fm(1243),
      wm = fm(1617),
      Dm = fm(1270),
      im = fm(1555),
      Rm = fm(1494),
      pm = fm(2661);
    const Em = {
      retries: 2,
      minTimeout: 2e3
    };
    var om = fm(1152),
      Om = fm(1609),
      Ym = fm(1160),
      qm = fm(1884),
      jm = fm(1208),
      Vm = fm(1235),
      Im = fm(3471),
      Km = fm(1345),
      Qm = fm(1454),
      nm = fm(1519),
      Jm = fm(2608),
      cm = fm(2619),
      zm = fm(4823),
      Zm = fm(2137),
      km = fm(1080),
      bm = fm.n(km),
      Sm = fm(1089),
      em = fm(4825),
      Nm = fm(23),
      Gm = fm(1905),
      Xm = fm(3621),
      Pm = fm(1997),
      Hm = fm(3587),
      ym = fm(105),
      Cm = fm(4495),
      rm = fm(1135);
    const sm = [zm];

    function lm(mm) {
      let {
        icon: Tm,
        label: fm,
        value: hm
      } = mm;
      return (0, rm.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, rm.jsx)(Sm.c, {
          name: Tm,
          className: "PlayerProfileStatIcon"
        }), (0, rm.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, rm.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: fm
          }), (0, rm.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: hm
          })]
        })]
      })
    }

    function Mm(mm) {
      let {
        profile: Tm
      } = mm;
      const {
        t: fm,
        selectedLanguage: hm
      } = (0, jm.A)();
      let Am = fm("homePage:profileUnknown");
      if (Tm.lastOnline) {
        const mm = (0, jm.n)(hm.code, "homePage:profileTimeAgo");
        Am = fm("homePage:profileTimeAgo", {
          time: (0, am.cb)(mm, Tm.lastOnline, Date.now())
        })
      }
      let xm = fm("homePage:profileUnknown");
      return Tm.accountCreatedAt && (xm = new Date(Tm.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, rm.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, rm.jsx)(lm, {
          icon: "hourglass",
          label: fm("homePage:profileTimePlayed"),
          value: (0, Xm.e)(Tm.totalPlayMinutes)
        }), (0, rm.jsx)(lm, {
          icon: "wifi",
          label: fm("homePage:profileLastOnline"),
          value: Am
        }), (0, rm.jsx)(lm, {
          icon: "calendar",
          label: fm("homePage:profileJoined"),
          value: xm
        })]
      })
    }

    function um() {
      const {
        t: mm
      } = (0, jm.A)(), Tm = (0, nm.useNavigatePreserveSearch)(), fm = (0, om.j)(), {
        playerName: zm,
        playerUrlName: km
      } = (0, Am.G)(), Xm = (0, Am.w)(), lm = (0, xm.e)(Xm.pathname), um = lm && ("urlId" in lm ? `urlId:${lm.urlId}` : `name:${lm.lowerCaseName}`), Bm = (0, hm.useRef)(um);
      Bm.current = um;
      const {
        userContext: Lm,
        isUserContextUpdating: tm
      } = (0, Ym.e)(), Um = (0, hm.useRef)(null), dm = (0, hm.useRef)(null), gm = (0, hm.useRef)(null), Wm = (0, hm.useRef)(!1), Fm = (0, hm.useRef)((0, am.Yb)(sm)), [mT, TT] = (0, hm.useState)((() => {
        const mm = lm && cm.c.peek(Lm, lm);
        return mm ? {
          status: "loaded",
          profile: mm,
          playerKey: um
        } : {
          status: "loading"
        }
      })), [fT, hT] = (0, hm.useState)(0);
      (0, hm.useEffect)(Jm.f, []), (0, hm.useEffect)((() => {
        Gm.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Nm.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Xm.key]);
      const AT = () => {
        const mm = (0, nm.getPreviousLocation)();
        null === mm || mm.startsWith("/play") ? (0, nm.navigateToHomePage)() : Tm(-1)
      };
      (0, Cm.c)(AT), (0, hm.useEffect)((() => {
        var mm;
        if (tm) return;
        if (!lm) return void TT({
          status: "notFound",
          playerKey: um
        });
        const Tm = "urlId" in lm && (null === (mm = dm.current) || void 0 === mm ? void 0 : mm.urlId) === lm.urlId && gm.current === Lm;
        if (Tm && Wm.current) return;
        const fm = Tm ? null : cm.c.peek(Lm, lm);
        let hm = !1;
        const Am = mm => "loaded" === mm.status && (mm.playerKey === um || "urlId" in lm && mm.profile.urlId === lm.urlId);
        return fm ? (gm.current = Lm, Wm.current = !1, TT({
          status: "loaded",
          profile: fm,
          playerKey: um
        }), cm.c.invalidate(lm)) : TT((mm => Am(mm) ? mm : {
          status: "loading"
        })), async function(mm, Tm) {
          if ("lowerCaseName" in Tm && Tm.lowerCaseName.length > Dm.j) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Rm.d.getPlayerProfile(mm, Tm, Em)
            }
          } catch (fm) {
            return (0, pm.d)(fm) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", fm), {
              status: "failed"
            })
          }
        }(Lm, lm).then((mm => {
          hm || ("loaded" === mm.status && (gm.current = Lm, Wm.current = !0), TT((Tm => "failed" === mm.status && Am(Tm) ? Tm : {
            ...mm,
            playerKey: um
          })))
        })), () => {
          hm = !0
        }
      }), [tm, um, Lm, fT]);
      const aT = "loading" === mT.status || mT.playerKey === um || "loaded" === mT.status && !!lm && "urlId" in lm && mT.profile.urlId === lm.urlId ? mT : {
          status: "loading"
        },
        xT = "loaded" === aT.status ? aT.profile : null,
        wT = "loading" === aT.status ? null : function(mm) {
          if ("loaded" === mm.status) {
            const {
              profile: Tm
            } = mm;
            return (0, im.P)({
              urlId: Tm.urlId,
              name: Tm.player.name,
              ranks: Tm.player.ranks,
              socialLinks: Tm.socialLinks
            })
          }
          return "notFound" === mm.status ? (0, im.V)() : null
        }(aT),
        DT = null !== xT && void 0 !== xT && xT.urlId ? (0, xm.i)({
          urlId: xT.urlId,
          name: xT.player.name
        }) : null;
      (0, Om.d)(DT);
      const iT = null !== xT && void 0 !== xT && xT.player.cosmetics.profileEffect ? Zm.f[xT.player.cosmetics.profileEffect] : void 0,
        RT = null !== xT && !tm && Lm.getPlayerName().toLowerCase() === xT.player.name.toLowerCase(),
        pT = (0, Pm.d)(null === xT || void 0 === xT ? void 0 : xT.player.name),
        ET = RT && Lm.playerHasRank("youtuber");
      dm.current = xT;
      const oT = (0, hm.useCallback)((() => {
          lm && (cm.c.invalidate(lm), cm.c.get(Lm, lm).then((mm => {
            Bm.current === um && (Wm.current = !0, TT({
              status: "loaded",
              profile: mm,
              playerKey: um
            }))
          })).catch((mm => {
            console.error("Failed to refresh user profile", mm)
          })))
        }), [um, Lm]),
        OT = (0, hm.useCallback)((() => {
          var mm;
          const Tm = dm.current;
          return !(!Tm || null === (mm = Um.current) || void 0 === mm || !mm.isReady()) && (Um.current.setAllCosmetics(Tm.player.cosmetics), !0)
        }), []);
      return (0, hm.useEffect)((() => {
        if (!xT) return;
        let mm, Tm = !1;
        const fm = () => {
          Tm || OT() || (mm = setTimeout(fm, 100))
        };
        return fm(), () => {
          Tm = !0, clearTimeout(mm)
        }
      }), [xT, OT]), (0, rm.jsxs)("div", {
        className: bm()("PlayerProfile", {
          PlayerProfilePortrait: fm
        }),
        children: [wT && (0, rm.jsx)(wm.c, {
          meta: wT
        }), (0, rm.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [iT && (0, rm.jsx)(iT, {}), !iT && (0, rm.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Fm.current})`
            }
          })]
        }), (0, rm.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, rm.jsx)(Qm.d, {
            onClick: AT,
            children: mm("general:back")
          }), xT && !tm && !RT && ym.featureFlags.useSocialFeatures && (0, rm.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, rm.jsx)(Hm.b, {
              playerName: xT.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === aT.status && (0, rm.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, rm.jsx)(Km.c, {})
        }), ("notFound" === aT.status || "failed" === aT.status) && (0, rm.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, rm.jsx)(Sm.c, {
            name: "face-dizzy"
          }), (0, rm.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === aT.status ? mm("socialBar:playerNotFound", {
              playerName: null !== km && void 0 !== km ? km : zm
            }) : mm("playerProfile:loadFailed")
          }), "failed" === aT.status && (0, rm.jsx)(Qm.e, {
            onClick: () => {
              hT((mm => mm + 1))
            },
            children: mm("general:tryAgain")
          })]
        }), xT && (0, rm.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, rm.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, rm.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, rm.jsx)(qm.b, {
                text: (0, Vm.t)(xT.player.ranks, xT.player.name, xT.player.nameColour),
                friendBadgeFor: pT ? xT.player.name : void 0
              })
            }), (0, rm.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, rm.jsx)(hm.Suspense, {
                fallback: (0, rm.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, rm.jsx)(Km.c, {})
                }),
                children: (0, rm.jsx)(Jm.d, {
                  ref: Um,
                  onReady: () => {
                    OT()
                  }
                })
              })
            })]
          }), (0, rm.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, rm.jsx)(Mm, {
              profile: xT
            }), (xT.socialLinks.length > 0 || ET) && (0, rm.jsx)(em.b, {
              socialLinks: xT.socialLinks,
              editable: ET,
              userContext: Lm,
              onLinksUpdated: oT
            }), (0, rm.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, rm.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: mm("homePage:profileReleasedGames")
              }), 0 === xT.releasedGames.length && (0, rm.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: mm("homePage:profileNoReleasedGames")
              }), xT.releasedGames.length > 0 && (0, rm.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: xT.releasedGames.map((mm => (0, rm.jsx)(Im.f, {
                  source: {
                    type: "preview",
                    preview: mm
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, mm.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4825: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => qm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4575),
      xm = fm(1208),
      wm = fm(1089),
      Dm = fm(1454),
      im = fm(1494),
      Rm = fm(1354),
      pm = fm(2487),
      Em = fm(1135);
    const om = {
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

    function Om(mm) {
      let {
        platform: Tm
      } = mm;
      const fm = "youtube" === Tm;
      return (0, Em.jsxs)("span", {
        className: Am()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: fm
        }),
        children: [fm && (0, Em.jsx)(pm.d, {
          variant: "white"
        }), !fm && (0, Em.jsx)(wm.c, {
          name: om[Tm].icon,
          kit: "brands"
        })]
      })
    }

    function Ym(mm) {
      let {
        platform: Tm,
        link: fm,
        editable: hm,
        userContext: Am,
        onLinksUpdated: pm
      } = mm;
      const {
        t: Ym
      } = (0, xm.A)(), qm = om[Tm];
      if (!fm && !hm) return null;

      function jm() {
        var mm;
        if (!Am || !pm) return;
        Rm.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: qm.name
            }
          },
          prefixText: am.v[Tm],
          placeholderText: "playBloxd",
          initialValue: null !== (mm = null === fm || void 0 === fm ? void 0 : fm.handle) && void 0 !== mm ? mm : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: fm ? "general:remove" : void 0
        }).getResult().then((async mm => {
          if ("notificationTornDown" !== mm && null !== mm) try {
            "submit" === mm.type ? await im.d.setSocialLink(Am, Tm, mm.value) : await im.d.clearSocialLink(Am, Tm), pm()
          } catch (fm) {
            console.error("Failed to update social link", fm), Rm.NotificationProvider.showAlertPopup({
              title: fm.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (fm) {
        const mm = `@${fm.handle}`;
        return (0, Em.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: qm.color
          },
          href: fm.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Em.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Em.jsx)(Om, {
              platform: Tm
            }), (0, Em.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Em.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: mm
              })
            })]
          }), hm && (0, Em.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Dm.Z)({
              stopPropagation: !0
            }),
            onClick: mm => {
              mm.stopPropagation(), mm.preventDefault(), jm()
            },
            children: (0, Em.jsx)(wm.c, {
              name: "pen-to-square"
            })
          }), !hm && (0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Em.jsx)(wm.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Em.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: qm.color
        },
        ...(0, Dm.Z)(),
        onClick: () => {
          jm()
        },
        children: [(0, Em.jsx)(Om, {
          platform: Tm
        }), (0, Em.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: qm.name
          }), (0, Em.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Ym("homePage:profileSocialLinkAdd")
          })]
        }), (0, Em.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Em.jsx)(wm.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function qm(mm) {
      let {
        socialLinks: Tm,
        editable: fm = !1,
        userContext: hm,
        onLinksUpdated: Am
      } = mm;
      if (!fm && 0 === Tm.length) return null;
      const xm = new Map(Tm.map((mm => [mm.platform, mm]))),
        wm = fm ? am.r : Tm.map((mm => mm.platform));
      return (0, Em.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Em.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: wm.map((mm => (0, Em.jsx)(Ym, {
            platform: mm,
            link: xm.get(mm),
            editable: fm,
            userContext: hm,
            onLinksUpdated: Am
          }, mm)))
        })
      })
    }
  },
  4823: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);