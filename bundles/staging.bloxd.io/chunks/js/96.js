export const id = 96;
export const ids = [96];
export const modules = {
  4624: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => yv
    });
    var hv = Pv(52),
      Sv = Pv(1505),
      ev = Pv(312),
      gv = Pv(1221),
      pv = Pv(1595),
      dv = Pv(1250),
      Nv = Pv(1534),
      lv = Pv(1482),
      Tv = Pv(2505);
    const Wv = {
      retries: 2,
      minTimeout: 2e3
    };
    var wv = Pv(1095),
      av = Pv(1592),
      sv = Pv(1108),
      Cv = Pv(1858),
      iv = Pv(1175),
      cv = Pv(1209),
      Gv = Pv(3236),
      mv = Pv(1327),
      jv = Pv(1442),
      fv = Pv(1492),
      Fv = Pv(2448),
      Yv = Pv(2455),
      nv = Pv(4627),
      Ov = Pv(2097),
      Dv = Pv(1035),
      Kv = Pv.n(Dv),
      Vv = Pv(1042),
      Uv = Pv(4635),
      Rv = Pv(22),
      xv = Pv(1876),
      tv = Pv(3396),
      qv = Pv(1975),
      Iv = Pv(3349),
      Qv = Pv(73),
      Zv = Pv(4310),
      Av = Pv(1082);
    const Lv = [nv];

    function Hv(vv) {
      let {
        icon: zv,
        label: Pv,
        value: hv
      } = vv;
      return (0, Av.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Av.jsx)(Vv.b, {
          name: zv,
          className: "PlayerProfileStatIcon"
        }), (0, Av.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Av.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Pv
          }), (0, Av.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: hv
          })]
        })]
      })
    }

    function Mv(vv) {
      let {
        profile: zv
      } = vv;
      const {
        t: Pv,
        selectedLanguage: hv
      } = (0, iv.x)();
      let Sv = Pv("homePage:profileUnknown");
      if (zv.lastOnline) {
        const vv = (0, iv.g)(hv.code, "homePage:profileTimeAgo");
        Sv = Pv("homePage:profileTimeAgo", {
          time: (0, ev.gb)(vv, zv.lastOnline, Date.now())
        })
      }
      let gv = Pv("homePage:profileUnknown");
      return zv.accountCreatedAt && (gv = new Date(zv.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Av.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Av.jsx)(Hv, {
          icon: "hourglass",
          label: Pv("homePage:profileTimePlayed"),
          value: (0, tv.d)(zv.totalPlayMinutes)
        }), (0, Av.jsx)(Hv, {
          icon: "wifi",
          label: Pv("homePage:profileLastOnline"),
          value: Sv
        }), (0, Av.jsx)(Hv, {
          icon: "calendar",
          label: Pv("homePage:profileJoined"),
          value: gv
        })]
      })
    }

    function yv() {
      const {
        t: vv
      } = (0, iv.x)(), zv = (0, fv.useNavigatePreserveSearch)(), Pv = (0, wv.i)(), {
        playerName: nv,
        playerUrlName: Dv
      } = (0, Sv.B)(), tv = (0, Sv.p)(), Hv = (0, gv.f)(tv.pathname), yv = Hv && ("urlId" in Hv ? `urlId:${Hv.urlId}` : `name:${Hv.lowerCaseName}`), Bv = (0, hv.useRef)(yv);
      Bv.current = yv;
      const {
        userContext: Jv,
        isUserContextUpdating: Ev
      } = (0, sv.d)(), ov = (0, hv.useRef)(null), bv = (0, hv.useRef)(null), rv = (0, hv.useRef)(null), kv = (0, hv.useRef)(!1), Xv = (0, hv.useRef)((0, ev.Yb)(Lv)), [uv, vz] = (0, hv.useState)((() => {
        const vv = Hv && Yv.d.peek(Jv, Hv);
        return vv ? {
          status: "loaded",
          profile: vv,
          playerKey: yv
        } : {
          status: "loading"
        }
      })), [zz, Pz] = (0, hv.useState)(0);
      (0, hv.useEffect)(Fv.f, []), (0, hv.useEffect)((() => {
        xv.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Rv.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [tv.key]);
      const hz = () => {
        const vv = (0, fv.getPreviousLocation)();
        null === vv || vv.startsWith("/play") ? (0, fv.navigateToHomePage)() : zv(-1)
      };
      (0, Zv.c)(hz), (0, hv.useEffect)((() => {
        var vv;
        if (Ev) return;
        if (!Hv) return void vz({
          status: "notFound",
          playerKey: yv
        });
        const zv = "urlId" in Hv && (null === (vv = bv.current) || void 0 === vv ? void 0 : vv.urlId) === Hv.urlId && rv.current === Jv;
        if (zv && kv.current) return;
        const Pv = zv ? null : Yv.d.peek(Jv, Hv);
        let hv = !1;
        const Sv = vv => "loaded" === vv.status && (vv.playerKey === yv || "urlId" in Hv && vv.profile.urlId === Hv.urlId);
        return Pv ? (rv.current = Jv, kv.current = !1, vz({
          status: "loaded",
          profile: Pv,
          playerKey: yv
        }), Yv.d.invalidate(Hv)) : vz((vv => Sv(vv) ? vv : {
          status: "loading"
        })), async function(vv, zv) {
          if ("lowerCaseName" in zv && zv.lowerCaseName.length > dv.f) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await lv.e.getPlayerProfile(vv, zv, Wv)
            }
          } catch (Pv) {
            return (0, Tv.e)(Pv) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Pv), {
              status: "failed"
            })
          }
        }(Jv, Hv).then((vv => {
          hv || ("loaded" === vv.status && (rv.current = Jv, kv.current = !0), vz((zv => "failed" === vv.status && Sv(zv) ? zv : {
            ...vv,
            playerKey: yv
          })))
        })), () => {
          hv = !0
        }
      }), [Ev, yv, Jv, zz]);
      const Sz = "loading" === uv.status || uv.playerKey === yv || "loaded" === uv.status && !!Hv && "urlId" in Hv && uv.profile.urlId === Hv.urlId ? uv : {
          status: "loading"
        },
        ez = "loaded" === Sz.status ? Sz.profile : null,
        gz = "loading" === Sz.status ? null : function(vv) {
          if ("loaded" === vv.status) {
            const {
              profile: zv
            } = vv;
            return (0, Nv.X)({
              urlId: zv.urlId,
              name: zv.player.name,
              ranks: zv.player.ranks,
              socialLinks: zv.socialLinks
            })
          }
          return "notFound" === vv.status ? (0, Nv.ab)() : null
        }(Sz),
        pz = null !== ez && void 0 !== ez && ez.urlId ? (0, gv.g)({
          urlId: ez.urlId,
          name: ez.player.name
        }) : null;
      (0, av.g)(pz);
      const dz = null !== ez && void 0 !== ez && ez.player.cosmetics.profileEffect ? Ov.f[ez.player.cosmetics.profileEffect] : void 0,
        Nz = null !== ez && !Ev && Jv.getPlayerName().toLowerCase() === ez.player.name.toLowerCase(),
        lz = (0, qv.c)(null === ez || void 0 === ez ? void 0 : ez.player.name),
        Tz = Nz && Jv.playerHasRank("youtuber");
      bv.current = ez;
      const Wz = (0, hv.useCallback)((() => {
          Hv && (Yv.d.invalidate(Hv), Yv.d.get(Jv, Hv).then((vv => {
            Bv.current === yv && (kv.current = !0, vz({
              status: "loaded",
              profile: vv,
              playerKey: yv
            }))
          })).catch((vv => {
            console.error("Failed to refresh user profile", vv)
          })))
        }), [yv, Jv]),
        wz = (0, hv.useCallback)((() => {
          var vv;
          const zv = bv.current;
          return !(!zv || null === (vv = ov.current) || void 0 === vv || !vv.isReady()) && (ov.current.setAllCosmetics(zv.player.cosmetics), !0)
        }), []);
      return (0, hv.useEffect)((() => {
        if (!ez) return;
        let vv, zv = !1;
        const Pv = () => {
          zv || wz() || (vv = setTimeout(Pv, 100))
        };
        return Pv(), () => {
          zv = !0, clearTimeout(vv)
        }
      }), [ez, wz]), (0, Av.jsxs)("div", {
        className: Kv()("PlayerProfile", {
          PlayerProfilePortrait: Pv
        }),
        children: [gz && (0, Av.jsx)(pv.e, {
          meta: gz
        }), (0, Av.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [dz && (0, Av.jsx)(dz, {}), !dz && (0, Av.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Xv.current})`
            }
          })]
        }), (0, Av.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Av.jsx)(jv.b, {
            onClick: hz,
            children: vv("general:back")
          }), ez && !Ev && !Nz && Qv.featureFlags.useSocialFeatures && (0, Av.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Av.jsx)(Iv.b, {
              playerName: ez.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Sz.status && (0, Av.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Av.jsx)(mv.c, {})
        }), ("notFound" === Sz.status || "failed" === Sz.status) && (0, Av.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Av.jsx)(Vv.b, {
            name: "face-dizzy"
          }), (0, Av.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Sz.status ? vv("socialBar:playerNotFound", {
              playerName: null !== Dv && void 0 !== Dv ? Dv : nv
            }) : vv("playerProfile:loadFailed")
          }), "failed" === Sz.status && (0, Av.jsx)(jv.d, {
            onClick: () => {
              Pz((vv => vv + 1))
            },
            children: vv("general:tryAgain")
          })]
        }), ez && (0, Av.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Av.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Av.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Av.jsx)(Cv.c, {
                text: (0, cv.C)(ez.player.ranks, ez.player.name, ez.player.nameColour),
                friendBadgeFor: lz ? ez.player.name : void 0
              })
            }), (0, Av.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Av.jsx)(hv.Suspense, {
                fallback: (0, Av.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Av.jsx)(mv.c, {})
                }),
                children: (0, Av.jsx)(Fv.d, {
                  ref: ov,
                  onReady: () => {
                    wz()
                  }
                })
              })
            })]
          }), (0, Av.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Av.jsx)(Mv, {
              profile: ez
            }), (ez.socialLinks.length > 0 || Tz) && (0, Av.jsx)(Uv.d, {
              socialLinks: ez.socialLinks,
              editable: Tz,
              userContext: Jv,
              onLinksUpdated: Wz
            }), (0, Av.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Av.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: vv("homePage:profileReleasedGames")
              }), 0 === ez.releasedGames.length && (0, Av.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: vv("homePage:profileNoReleasedGames")
              }), ez.releasedGames.length > 0 && (0, Av.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ez.releasedGames.map((vv => (0, Av.jsx)(Gv.i, {
                  source: {
                    type: "preview",
                    preview: vv
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, vv.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4635: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Cv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4398),
      gv = Pv(1175),
      pv = Pv(1042),
      dv = Pv(1442),
      Nv = Pv(1482),
      lv = Pv(1336),
      Tv = Pv(2384),
      Wv = Pv(1082);
    const wv = {
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

    function av(vv) {
      let {
        platform: zv
      } = vv;
      const Pv = "youtube" === zv;
      return (0, Wv.jsxs)("span", {
        className: Sv()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Pv
        }),
        children: [Pv && (0, Wv.jsx)(Tv.e, {
          variant: "white"
        }), !Pv && (0, Wv.jsx)(pv.b, {
          name: wv[zv].icon,
          kit: "brands"
        })]
      })
    }

    function sv(vv) {
      let {
        platform: zv,
        link: Pv,
        editable: hv,
        userContext: Sv,
        onLinksUpdated: Tv
      } = vv;
      const {
        t: sv
      } = (0, gv.x)(), Cv = wv[zv];
      if (!Pv && !hv) return null;

      function iv() {
        var vv;
        if (!Sv || !Tv) return;
        lv.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Cv.name
            }
          },
          prefixText: ev.q[zv],
          placeholderText: "playBloxd",
          initialValue: null !== (vv = null === Pv || void 0 === Pv ? void 0 : Pv.handle) && void 0 !== vv ? vv : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Pv ? "general:remove" : void 0
        }).getResult().then((async vv => {
          if ("notificationTornDown" !== vv && null !== vv) try {
            "submit" === vv.type ? await Nv.e.setSocialLink(Sv, zv, vv.value) : await Nv.e.clearSocialLink(Sv, zv), Tv()
          } catch (Pv) {
            console.error("Failed to update social link", Pv), lv.NotificationProvider.showAlertPopup({
              title: Pv.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Pv) {
        const vv = `@${Pv.handle}`;
        return (0, Wv.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Cv.color
          },
          href: Pv.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Wv.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Wv.jsx)(av, {
              platform: zv
            }), (0, Wv.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Wv.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: vv
              })
            })]
          }), hv && (0, Wv.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, dv.U)({
              stopPropagation: !0
            }),
            onClick: vv => {
              vv.stopPropagation(), vv.preventDefault(), iv()
            },
            children: (0, Wv.jsx)(pv.b, {
              name: "pen-to-square"
            })
          }), !hv && (0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Wv.jsx)(pv.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Wv.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Cv.color
        },
        ...(0, dv.U)(),
        onClick: () => {
          iv()
        },
        children: [(0, Wv.jsx)(av, {
          platform: zv
        }), (0, Wv.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Cv.name
          }), (0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: sv("homePage:profileSocialLinkAdd")
          })]
        }), (0, Wv.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Wv.jsx)(pv.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Cv(vv) {
      let {
        socialLinks: zv,
        editable: Pv = !1,
        userContext: hv,
        onLinksUpdated: Sv
      } = vv;
      if (!Pv && 0 === zv.length) return null;
      const gv = new Map(zv.map((vv => [vv.platform, vv]))),
        pv = Pv ? ev.n : zv.map((vv => vv.platform));
      return (0, Wv.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Wv.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: pv.map((vv => (0, Wv.jsx)(sv, {
            platform: vv,
            link: gv.get(vv),
            editable: Pv,
            userContext: hv,
            onLinksUpdated: Sv
          }, vv)))
        })
      })
    }
  },
  4627: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);