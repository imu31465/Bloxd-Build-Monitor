export const id = 95;
export const ids = [95];
export const modules = {
  4638: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Dz
    });
    var Ez = bz(56),
      nz = bz(1490),
      iz = bz(328),
      lz = bz(1222),
      Mz = bz(1574),
      tz = bz(1256),
      Hz = bz(1519),
      Oz = bz(1473),
      pz = bz(2521);
    const dz = {
      retries: 2,
      minTimeout: 2e3
    };
    var Fz = bz(1102),
      Zz = bz(1570),
      Rz = bz(1114),
      Kz = bz(1846),
      wz = bz(1181),
      Xz = bz(1212),
      fz = bz(3230),
      sz = bz(1305),
      rz = bz(1419),
      oz = bz(1482),
      Nz = bz(2469),
      vz = bz(2478),
      xz = bz(4644),
      Jz = bz(2067),
      Az = bz(1038),
      Tz = bz.n(Az),
      Lz = bz(1047),
      Pz = bz(4648),
      Gz = bz(20),
      az = bz(1871),
      Vz = bz(3385),
      mz = bz(1953),
      qz = bz(3346),
      hz = bz(96),
      Uz = bz(4305),
      cz = bz(1089);
    const gz = [xz];

    function Sz(zz) {
      let {
        icon: uz,
        label: bz,
        value: Ez
      } = zz;
      return (0, cz.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, cz.jsx)(Lz.c, {
          name: uz,
          className: "PlayerProfileStatIcon"
        }), (0, cz.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, cz.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: bz
          }), (0, cz.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Ez
          })]
        })]
      })
    }

    function yz(zz) {
      let {
        profile: uz
      } = zz;
      const {
        t: bz,
        selectedLanguage: Ez
      } = (0, wz.F)();
      let nz = bz("homePage:profileUnknown");
      if (uz.lastOnline) {
        const zz = (0, wz.p)(Ez.code, "homePage:profileTimeAgo");
        nz = bz("homePage:profileTimeAgo", {
          time: (0, iz.fb)(zz, uz.lastOnline, Date.now())
        })
      }
      let lz = bz("homePage:profileUnknown");
      return uz.accountCreatedAt && (lz = new Date(uz.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, cz.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, cz.jsx)(Sz, {
          icon: "hourglass",
          label: bz("homePage:profileTimePlayed"),
          value: (0, Vz.e)(uz.totalPlayMinutes)
        }), (0, cz.jsx)(Sz, {
          icon: "wifi",
          label: bz("homePage:profileLastOnline"),
          value: nz
        }), (0, cz.jsx)(Sz, {
          icon: "calendar",
          label: bz("homePage:profileJoined"),
          value: lz
        })]
      })
    }

    function Dz() {
      const {
        t: zz
      } = (0, wz.F)(), uz = (0, oz.useNavigatePreserveSearch)(), bz = (0, Fz.n)(), {
        playerName: xz,
        playerUrlName: Az
      } = (0, nz.D)(), Vz = (0, nz.v)(), Sz = (0, lz.h)(Vz.pathname), Dz = Sz && ("urlId" in Sz ? `urlId:${Sz.urlId}` : `name:${Sz.lowerCaseName}`), Qz = (0, Ez.useRef)(Dz);
      Qz.current = Dz;
      const {
        userContext: Wz,
        isUserContextUpdating: ez
      } = (0, Rz.c)(), jz = (0, Ez.useRef)(null), Iz = (0, Ez.useRef)(null), Bz = (0, Ez.useRef)(null), Cz = (0, Ez.useRef)(!1), Yz = (0, Ez.useRef)((0, iz.dc)(gz)), [kz, zu] = (0, Ez.useState)((() => {
        const zz = Sz && vz.b.peek(Wz, Sz);
        return zz ? {
          status: "loaded",
          profile: zz,
          playerKey: Dz
        } : {
          status: "loading"
        }
      })), [uu, bu] = (0, Ez.useState)(0);
      (0, Ez.useEffect)(Nz.i, []), (0, Ez.useEffect)((() => {
        az.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Gz.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Vz.key]);
      const Eu = () => {
        const zz = (0, oz.getPreviousLocation)();
        null === zz || zz.startsWith("/play") ? (0, oz.navigateToHomePage)() : uz(-1)
      };
      (0, Uz.e)(Eu), (0, Ez.useEffect)((() => {
        var zz;
        if (ez) return;
        if (!Sz) return void zu({
          status: "notFound",
          playerKey: Dz
        });
        const uz = "urlId" in Sz && (null === (zz = Iz.current) || void 0 === zz ? void 0 : zz.urlId) === Sz.urlId && Bz.current === Wz;
        if (uz && Cz.current) return;
        const bz = uz ? null : vz.b.peek(Wz, Sz);
        let Ez = !1;
        const nz = zz => "loaded" === zz.status && (zz.playerKey === Dz || "urlId" in Sz && zz.profile.urlId === Sz.urlId);
        return bz ? (Bz.current = Wz, Cz.current = !1, zu({
          status: "loaded",
          profile: bz,
          playerKey: Dz
        }), vz.b.invalidate(Sz)) : zu((zz => nz(zz) ? zz : {
          status: "loading"
        })), async function(zz, uz) {
          if ("lowerCaseName" in uz && uz.lowerCaseName.length > tz.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Oz.c.getPlayerProfile(zz, uz, dz)
            }
          } catch (bz) {
            return (0, pz.e)(bz) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", bz), {
              status: "failed"
            })
          }
        }(Wz, Sz).then((zz => {
          Ez || ("loaded" === zz.status && (Bz.current = Wz, Cz.current = !0), zu((uz => "failed" === zz.status && nz(uz) ? uz : {
            ...zz,
            playerKey: Dz
          })))
        })), () => {
          Ez = !0
        }
      }), [ez, Dz, Wz, uu]);
      const nu = "loading" === kz.status || kz.playerKey === Dz || "loaded" === kz.status && !!Sz && "urlId" in Sz && kz.profile.urlId === Sz.urlId ? kz : {
          status: "loading"
        },
        iu = "loaded" === nu.status ? nu.profile : null,
        lu = "loading" === nu.status ? null : function(zz) {
          if ("loaded" === zz.status) {
            const {
              profile: uz
            } = zz;
            return (0, Hz.V)({
              urlId: uz.urlId,
              name: uz.player.name,
              ranks: uz.player.ranks,
              socialLinks: uz.socialLinks
            })
          }
          return "notFound" === zz.status ? (0, Hz.Z)() : null
        }(nu),
        Mu = null !== iu && void 0 !== iu && iu.urlId ? (0, lz.j)({
          urlId: iu.urlId,
          name: iu.player.name
        }) : null;
      (0, Zz.e)(Mu);
      const tu = null !== iu && void 0 !== iu && iu.player.cosmetics.profileEffect ? Jz.g[iu.player.cosmetics.profileEffect] : void 0,
        Hu = null !== iu && !ez && Wz.getPlayerName().toLowerCase() === iu.player.name.toLowerCase(),
        Ou = (0, mz.e)(null === iu || void 0 === iu ? void 0 : iu.player.name),
        pu = Hu && Wz.playerHasRank("youtuber");
      Iz.current = iu;
      const du = (0, Ez.useCallback)((() => {
          Sz && (vz.b.invalidate(Sz), vz.b.get(Wz, Sz).then((zz => {
            Qz.current === Dz && (Cz.current = !0, zu({
              status: "loaded",
              profile: zz,
              playerKey: Dz
            }))
          })).catch((zz => {
            console.error("Failed to refresh user profile", zz)
          })))
        }), [Dz, Wz]),
        Fu = (0, Ez.useCallback)((() => {
          var zz;
          const uz = Iz.current;
          return !(!uz || null === (zz = jz.current) || void 0 === zz || !zz.isReady()) && (jz.current.setAllCosmetics(uz.player.cosmetics), !0)
        }), []);
      return (0, Ez.useEffect)((() => {
        if (!iu) return;
        let zz, uz = !1;
        const bz = () => {
          uz || Fu() || (zz = setTimeout(bz, 100))
        };
        return bz(), () => {
          uz = !0, clearTimeout(zz)
        }
      }), [iu, Fu]), (0, cz.jsxs)("div", {
        className: Tz()("PlayerProfile", {
          PlayerProfilePortrait: bz
        }),
        children: [lu && (0, cz.jsx)(Mz.d, {
          meta: lu
        }), (0, cz.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [tu && (0, cz.jsx)(tu, {}), !tu && (0, cz.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Yz.current})`
            }
          })]
        }), (0, cz.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, cz.jsx)(rz.d, {
            onClick: Eu,
            children: zz("general:back")
          }), iu && !ez && !Hu && hz.featureFlags.useSocialFeatures && (0, cz.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, cz.jsx)(qz.e, {
              playerName: iu.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === nu.status && (0, cz.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, cz.jsx)(sz.c, {})
        }), ("notFound" === nu.status || "failed" === nu.status) && (0, cz.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, cz.jsx)(Lz.c, {
            name: "face-dizzy"
          }), (0, cz.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === nu.status ? zz("socialBar:playerNotFound", {
              playerName: null !== Az && void 0 !== Az ? Az : xz
            }) : zz("playerProfile:loadFailed")
          }), "failed" === nu.status && (0, cz.jsx)(rz.f, {
            onClick: () => {
              bu((zz => zz + 1))
            },
            children: zz("general:tryAgain")
          })]
        }), iu && (0, cz.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, cz.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, cz.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, cz.jsx)(Kz.b, {
                text: (0, Xz.z)(iu.player.ranks, iu.player.name, iu.player.nameColour),
                friendBadgeFor: Ou ? iu.player.name : void 0
              })
            }), (0, cz.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, cz.jsx)(Ez.Suspense, {
                fallback: (0, cz.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, cz.jsx)(sz.c, {})
                }),
                children: (0, cz.jsx)(Nz.e, {
                  ref: jz,
                  onReady: () => {
                    Fu()
                  }
                })
              })
            })]
          }), (0, cz.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, cz.jsx)(yz, {
              profile: iu
            }), (iu.socialLinks.length > 0 || pu) && (0, cz.jsx)(Pz.e, {
              socialLinks: iu.socialLinks,
              editable: pu,
              userContext: Wz,
              onLinksUpdated: du
            }), (0, cz.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, cz.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: zz("homePage:profileReleasedGames")
              }), 0 === iu.releasedGames.length && (0, cz.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: zz("homePage:profileNoReleasedGames")
              }), iu.releasedGames.length > 0 && (0, cz.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: iu.releasedGames.map((zz => (0, cz.jsx)(fz.i, {
                  source: {
                    type: "preview",
                    preview: zz
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, zz.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4648: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Kz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(4393),
      lz = bz(1181),
      Mz = bz(1047),
      tz = bz(1419),
      Hz = bz(1473),
      Oz = bz(1322),
      pz = bz(2384),
      dz = bz(1089);
    const Fz = {
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

    function Zz(zz) {
      let {
        platform: uz
      } = zz;
      const bz = "youtube" === uz;
      return (0, dz.jsxs)("span", {
        className: nz()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: bz
        }),
        children: [bz && (0, dz.jsx)(pz.b, {
          variant: "white"
        }), !bz && (0, dz.jsx)(Mz.c, {
          name: Fz[uz].icon,
          kit: "brands"
        })]
      })
    }

    function Rz(zz) {
      let {
        platform: uz,
        link: bz,
        editable: Ez,
        userContext: nz,
        onLinksUpdated: pz
      } = zz;
      const {
        t: Rz
      } = (0, lz.F)(), Kz = Fz[uz];
      if (!bz && !Ez) return null;

      function wz() {
        var zz;
        if (!nz || !pz) return;
        Oz.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Kz.name
            }
          },
          prefixText: iz.y[uz],
          placeholderText: "playBloxd",
          initialValue: null !== (zz = null === bz || void 0 === bz ? void 0 : bz.handle) && void 0 !== zz ? zz : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: bz ? "general:remove" : void 0
        }).getResult().then((async zz => {
          if ("notificationTornDown" !== zz && null !== zz) try {
            "submit" === zz.type ? await Hz.c.setSocialLink(nz, uz, zz.value) : await Hz.c.clearSocialLink(nz, uz), pz()
          } catch (bz) {
            console.error("Failed to update social link", bz), Oz.NotificationProvider.showAlertPopup({
              title: bz.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (bz) {
        const zz = `@${bz.handle}`;
        return (0, dz.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Kz.color
          },
          href: bz.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, dz.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, dz.jsx)(Zz, {
              platform: uz
            }), (0, dz.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, dz.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: zz
              })
            })]
          }), Ez && (0, dz.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, tz.ab)({
              stopPropagation: !0
            }),
            onClick: zz => {
              zz.stopPropagation(), zz.preventDefault(), wz()
            },
            children: (0, dz.jsx)(Mz.c, {
              name: "pen-to-square"
            })
          }), !Ez && (0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, dz.jsx)(Mz.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, dz.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Kz.color
        },
        ...(0, tz.ab)(),
        onClick: () => {
          wz()
        },
        children: [(0, dz.jsx)(Zz, {
          platform: uz
        }), (0, dz.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Kz.name
          }), (0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Rz("homePage:profileSocialLinkAdd")
          })]
        }), (0, dz.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, dz.jsx)(Mz.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Kz(zz) {
      let {
        socialLinks: uz,
        editable: bz = !1,
        userContext: Ez,
        onLinksUpdated: nz
      } = zz;
      if (!bz && 0 === uz.length) return null;
      const lz = new Map(uz.map((zz => [zz.platform, zz]))),
        Mz = bz ? iz.w : uz.map((zz => zz.platform));
      return (0, dz.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, dz.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Mz.map((zz => (0, dz.jsx)(Rz, {
            platform: zz,
            link: lz.get(zz),
            editable: bz,
            userContext: Ez,
            onLinksUpdated: nz
          }, zz)))
        })
      })
    }
  },
  4644: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);