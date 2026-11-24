export const id = 99;
export const ids = [99];
export const modules = {
  5044: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => it
    });
    var Ot = Vt(63),
      qt = Vt(1623),
      Dt = Vt(391),
      mt = Vt(1316),
      dt = Vt(1709),
      jt = Vt(1363),
      Ht = Vt(1641),
      Xt = Vt(1600),
      Qt = Vt(2753);
    const lt = {
      retries: 2,
      minTimeout: 2e3
    };
    var Et = Vt(1204),
      ft = Vt(1700),
      wt = Vt(1218),
      yt = Vt(2001),
      Nt = Vt(1286),
      Mt = Vt(1308),
      bt = Vt(3544),
      Jt = Vt(1436),
      Ct = Vt(1556),
      ut = Vt(1613),
      Kt = Vt(2712),
      ht = Vt(2728),
      vt = Vt(5050),
      Wt = Vt(2232),
      St = Vt(1140),
      ct = Vt.n(St),
      Rt = Vt(1152),
      It = Vt(5056),
      Pt = Vt(26),
      Zt = Vt(2024),
      Lt = Vt(3710),
      Ft = Vt(2105),
      kt = Vt(3653),
      Gt = Vt(106),
      zt = Vt(4689),
      ot = Vt(1188);
    const rt = [vt];

    function Ut(tt) {
      let {
        icon: et,
        label: Vt,
        value: Ot
      } = tt;
      return (0, ot.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, ot.jsx)(Rt.b, {
          name: et,
          className: "PlayerProfileStatIcon"
        }), (0, ot.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, ot.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Vt
          }), (0, ot.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Ot
          })]
        })]
      })
    }

    function At(tt) {
      let {
        profile: et
      } = tt;
      const {
        t: Vt,
        selectedLanguage: Ot
      } = (0, Nt.H)();
      let qt = Vt("homePage:profileUnknown");
      if (et.lastOnline) {
        const tt = (0, Nt.o)(Ot.code, "homePage:profileTimeAgo");
        qt = Vt("homePage:profileTimeAgo", {
          time: (0, Dt.mb)(tt, et.lastOnline, Date.now())
        })
      }
      let mt = Vt("homePage:profileUnknown");
      return et.accountCreatedAt && (mt = new Date(et.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, ot.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, ot.jsx)(Ut, {
          icon: "hourglass",
          label: Vt("homePage:profileTimePlayed"),
          value: (0, Lt.e)(et.totalPlayMinutes)
        }), (0, ot.jsx)(Ut, {
          icon: "wifi",
          label: Vt("homePage:profileLastOnline"),
          value: qt
        }), (0, ot.jsx)(Ut, {
          icon: "calendar",
          label: Vt("homePage:profileJoined"),
          value: mt
        })]
      })
    }

    function it() {
      const {
        t: tt
      } = (0, Nt.H)(), et = (0, ut.useNavigatePreserveSearch)(), Vt = (0, Et.h)(), {
        playerName: vt,
        playerUrlName: St
      } = (0, qt.B)(), Lt = (0, qt.s)(), Ut = (0, mt.d)(Lt.pathname), it = Ut && ("urlId" in Ut ? `urlId:${Ut.urlId}` : `name:${Ut.lowerCaseName}`), Yt = (0, Ot.useRef)(it);
      Yt.current = it;
      const {
        userContext: Bt,
        isUserContextUpdating: pt
      } = (0, wt.d)(), xt = (0, Ot.useRef)(null), Tt = (0, Ot.useRef)(null), gt = (0, Ot.useRef)(null), st = (0, Ot.useRef)(!1), nt = (0, Ot.useRef)((0, Dt.kc)(rt)), [te, ee] = (0, Ot.useState)((() => {
        const tt = Ut && ht.b.peek(Bt, Ut);
        return tt ? {
          status: "loaded",
          profile: tt,
          playerKey: it
        } : {
          status: "loading"
        }
      })), [Ve, Oe] = (0, Ot.useState)(0);
      (0, Ot.useEffect)(Kt.h, []), (0, Ot.useEffect)((() => {
        Zt.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Pt.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Lt.key]);
      const qe = () => {
        const tt = (0, ut.getPreviousLocation)();
        null === tt || tt.startsWith("/play") ? (0, ut.navigateToHomePage)() : et(-1)
      };
      (0, zt.b)(qe), (0, Ot.useEffect)((() => {
        var tt;
        if (pt) return;
        if (!Ut) return void ee({
          status: "notFound",
          playerKey: it
        });
        const et = "urlId" in Ut && (null === (tt = Tt.current) || void 0 === tt ? void 0 : tt.urlId) === Ut.urlId && gt.current === Bt;
        if (et && st.current) return;
        const Vt = et ? null : ht.b.peek(Bt, Ut);
        let Ot = !1;
        const qt = tt => "loaded" === tt.status && (tt.playerKey === it || "urlId" in Ut && tt.profile.urlId === Ut.urlId);
        return Vt ? (gt.current = Bt, st.current = !1, ee({
          status: "loaded",
          profile: Vt,
          playerKey: it
        }), ht.b.invalidate(Ut)) : ee((tt => qt(tt) ? tt : {
          status: "loading"
        })), async function(tt, et) {
          if ("lowerCaseName" in et && et.lowerCaseName.length > jt.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Xt.e.getPlayerProfile(tt, et, lt)
            }
          } catch (Vt) {
            return (0, Qt.b)(Vt) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Vt), {
              status: "failed"
            })
          }
        }(Bt, Ut).then((tt => {
          Ot || ("loaded" === tt.status && (gt.current = Bt, st.current = !0), ee((et => "failed" === tt.status && qt(et) ? et : {
            ...tt,
            playerKey: it
          })))
        })), () => {
          Ot = !0
        }
      }), [pt, it, Bt, Ve]);
      const De = "loading" === te.status || te.playerKey === it || "loaded" === te.status && !!Ut && "urlId" in Ut && te.profile.urlId === Ut.urlId ? te : {
          status: "loading"
        },
        me = "loaded" === De.status ? De.profile : null,
        de = "loading" === De.status ? null : function(tt) {
          if ("loaded" === tt.status) {
            const {
              profile: et
            } = tt;
            return (0, Ht.O)({
              urlId: et.urlId,
              name: et.player.name,
              ranks: et.player.ranks,
              socialLinks: et.socialLinks
            })
          }
          return "notFound" === tt.status ? (0, Ht.Y)() : null
        }(De),
        je = null !== me && void 0 !== me && me.urlId ? (0, mt.e)({
          urlId: me.urlId,
          name: me.player.name
        }) : null;
      (0, ft.e)(je);
      const He = null !== me && void 0 !== me && me.player.cosmetics.profileEffect ? Wt.f[me.player.cosmetics.profileEffect] : void 0,
        Xe = null !== me && !pt && Bt.getPlayerName().toLowerCase() === me.player.name.toLowerCase(),
        Qe = (0, Ft.c)(null === me || void 0 === me ? void 0 : me.player.name),
        le = Xe && Bt.playerHasRank("youtuber");
      Tt.current = me;
      const Ee = (0, Ot.useCallback)((() => {
          Ut && (ht.b.invalidate(Ut), ht.b.get(Bt, Ut).then((tt => {
            Yt.current === it && (st.current = !0, ee({
              status: "loaded",
              profile: tt,
              playerKey: it
            }))
          })).catch((tt => {
            console.error("Failed to refresh user profile", tt)
          })))
        }), [it, Bt]),
        fe = (0, Ot.useCallback)((() => {
          var tt;
          const et = Tt.current;
          return !(!et || null === (tt = xt.current) || void 0 === tt || !tt.isReady()) && (xt.current.setAllCosmetics(et.player.cosmetics), !0)
        }), []);
      return (0, Ot.useEffect)((() => {
        if (!me) return;
        let tt, et = !1;
        const Vt = () => {
          et || fe() || (tt = setTimeout(Vt, 100))
        };
        return Vt(), () => {
          et = !0, clearTimeout(tt)
        }
      }), [me, fe]), (0, ot.jsxs)("div", {
        className: ct()("PlayerProfile", {
          PlayerProfilePortrait: Vt
        }),
        children: [de && (0, ot.jsx)(dt.c, {
          meta: de
        }), (0, ot.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [He && (0, ot.jsx)(He, {}), !He && (0, ot.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${nt.current})`
            }
          })]
        }), (0, ot.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, ot.jsx)(Ct.d, {
            onClick: qe,
            children: tt("general:back")
          }), me && !pt && !Xe && Gt.featureFlags.useSocialFeatures && (0, ot.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, ot.jsx)(kt.b, {
              playerName: me.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === De.status && (0, ot.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, ot.jsx)(Jt.b, {})
        }), ("notFound" === De.status || "failed" === De.status) && (0, ot.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, ot.jsx)(Rt.b, {
            name: "face-dizzy"
          }), (0, ot.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === De.status ? tt("socialBar:playerNotFound", {
              playerName: null !== St && void 0 !== St ? St : vt
            }) : tt("playerProfile:loadFailed")
          }), "failed" === De.status && (0, ot.jsx)(Ct.f, {
            onClick: () => {
              Oe((tt => tt + 1))
            },
            children: tt("general:tryAgain")
          })]
        }), me && (0, ot.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, ot.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, ot.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, ot.jsx)(yt.e, {
                text: (0, Mt.x)(me.player.ranks, me.player.name, me.player.nameColour),
                friendBadgeFor: Qe ? me.player.name : void 0
              })
            }), (0, ot.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, ot.jsx)(Ot.Suspense, {
                fallback: (0, ot.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, ot.jsx)(Jt.b, {})
                }),
                children: (0, ot.jsx)(Kt.d, {
                  ref: xt,
                  onReady: () => {
                    fe()
                  }
                })
              })
            })]
          }), (0, ot.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, ot.jsx)(At, {
              profile: me
            }), (me.socialLinks.length > 0 || le) && (0, ot.jsx)(It.e, {
              socialLinks: me.socialLinks,
              editable: le,
              userContext: Bt,
              onLinksUpdated: Ee
            }), (0, ot.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, ot.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: tt("homePage:profileReleasedGames")
              }), 0 === me.releasedGames.length && (0, ot.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: tt("homePage:profileNoReleasedGames")
              }), me.releasedGames.length > 0 && (0, ot.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: me.releasedGames.map((tt => (0, ot.jsx)(bt.h, {
                  source: {
                    type: "preview",
                    preview: tt
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, tt.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5056: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4785),
      mt = Vt(1286),
      dt = Vt(1152),
      jt = Vt(1556),
      Ht = Vt(1600),
      Xt = Vt(1450),
      Qt = Vt(2590),
      lt = Vt(1188);
    const Et = {
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

    function ft(tt) {
      let {
        platform: et
      } = tt;
      const Vt = "youtube" === et;
      return (0, lt.jsxs)("span", {
        className: qt()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Vt
        }),
        children: [Vt && (0, lt.jsx)(Qt.b, {
          variant: "white"
        }), !Vt && (0, lt.jsx)(dt.b, {
          name: Et[et].icon,
          kit: "brands"
        })]
      })
    }

    function wt(tt) {
      let {
        platform: et,
        link: Vt,
        editable: Ot,
        userContext: qt,
        onLinksUpdated: Qt
      } = tt;
      const {
        t: wt
      } = (0, mt.H)(), yt = Et[et];
      if (!Vt && !Ot) return null;

      function Nt() {
        var tt;
        if (!qt || !Qt) return;
        Xt.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yt.name
            }
          },
          prefixText: Dt.v[et],
          placeholderText: "playBloxd",
          initialValue: null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.handle) && void 0 !== tt ? tt : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Vt ? "general:remove" : void 0
        }).getResult().then((async tt => {
          if ("notificationTornDown" !== tt && null !== tt) try {
            "submit" === tt.type ? await Ht.e.setSocialLink(qt, et, tt.value) : await Ht.e.clearSocialLink(qt, et), Qt()
          } catch (Vt) {
            console.error("Failed to update social link", Vt), Xt.NotificationProvider.showAlertPopup({
              title: Vt.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Vt) {
        const tt = `@${Vt.handle}`;
        return (0, lt.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yt.color
          },
          href: Vt.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, lt.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, lt.jsx)(ft, {
              platform: et
            }), (0, lt.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, lt.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: tt
              })
            })]
          }), Ot && (0, lt.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, jt.X)({
              stopPropagation: !0
            }),
            onClick: tt => {
              tt.stopPropagation(), tt.preventDefault(), Nt()
            },
            children: (0, lt.jsx)(dt.b, {
              name: "pen-to-square"
            })
          }), !Ot && (0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, lt.jsx)(dt.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, lt.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yt.color
        },
        ...(0, jt.X)(),
        onClick: () => {
          Nt()
        },
        children: [(0, lt.jsx)(ft, {
          platform: et
        }), (0, lt.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yt.name
          }), (0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: wt("homePage:profileSocialLinkAdd")
          })]
        }), (0, lt.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, lt.jsx)(dt.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yt(tt) {
      let {
        socialLinks: et,
        editable: Vt = !1,
        userContext: Ot,
        onLinksUpdated: qt
      } = tt;
      if (!Vt && 0 === et.length) return null;
      const mt = new Map(et.map((tt => [tt.platform, tt]))),
        dt = Vt ? Dt.r : et.map((tt => tt.platform));
      return (0, lt.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, lt.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: dt.map((tt => (0, lt.jsx)(wt, {
            platform: tt,
            link: mt.get(tt),
            editable: Vt,
            userContext: Ot,
            onLinksUpdated: qt
          }, tt)))
        })
      })
    }
  },
  5050: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);