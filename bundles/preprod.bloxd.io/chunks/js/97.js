export const id = 97;
export const ids = [97];
export const modules = {
  4807: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => tC
    });
    var QC = ZC(48),
      wC = ZC(1463),
      bC = ZC(326),
      nC = ZC(1178),
      fC = ZC(1542),
      oC = ZC(1211),
      qC = ZC(1479),
      FC = ZC(1439),
      WC = ZC(2657);
    const NC = {
      retries: 2,
      minTimeout: 2e3
    };
    var MC = ZC(1072),
      gC = ZC(1540),
      SC = ZC(1076),
      pC = ZC(1811),
      PC = ZC(1143),
      GC = ZC(1169),
      RC = ZC(3448),
      AC = ZC(1295),
      xC = ZC(1388),
      JC = ZC(1453),
      IC = ZC(2595),
      iC = ZC(2612),
      vC = ZC(4811),
      eC = ZC(2086),
      hC = ZC(1002),
      KC = ZC.n(hC),
      YC = ZC(1013),
      dC = ZC(4819),
      mC = ZC(20),
      HC = ZC(1840),
      EC = ZC(3578),
      lC = ZC(1921),
      XC = ZC(3537),
      cC = ZC(77),
      uC = ZC(4491),
      rC = ZC(1056);
    const sC = [vC];

    function TC(CC) {
      let {
        icon: zC,
        label: ZC,
        value: QC
      } = CC;
      return (0, rC.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, rC.jsx)(YC.c, {
          name: zC,
          className: "PlayerProfileStatIcon"
        }), (0, rC.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, rC.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ZC
          }), (0, rC.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: QC
          })]
        })]
      })
    }

    function aC(CC) {
      let {
        profile: zC
      } = CC;
      const {
        t: ZC,
        selectedLanguage: QC
      } = (0, PC.y)();
      let wC = ZC("homePage:profileUnknown");
      if (zC.lastOnline) {
        const CC = (0, PC.m)(QC.code, "homePage:profileTimeAgo");
        wC = ZC("homePage:profileTimeAgo", {
          time: (0, bC.U)(CC, zC.lastOnline, Date.now())
        })
      }
      let nC = ZC("homePage:profileUnknown");
      return zC.accountCreatedAt && (nC = new Date(zC.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, rC.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, rC.jsx)(TC, {
          icon: "hourglass",
          label: ZC("homePage:profileTimePlayed"),
          value: (0, EC.c)(zC.totalPlayMinutes)
        }), (0, rC.jsx)(TC, {
          icon: "wifi",
          label: ZC("homePage:profileLastOnline"),
          value: wC
        }), (0, rC.jsx)(TC, {
          icon: "calendar",
          label: ZC("homePage:profileJoined"),
          value: nC
        })]
      })
    }

    function tC() {
      const {
        t: CC
      } = (0, PC.y)(), zC = (0, JC.useNavigatePreserveSearch)(), ZC = (0, MC.k)(), {
        playerName: vC,
        playerUrlName: hC
      } = (0, wC.C)(), EC = (0, wC.v)(), TC = (0, nC.c)(EC.pathname), tC = TC && ("urlId" in TC ? `urlId:${TC.urlId}` : `name:${TC.lowerCaseName}`), DC = (0, QC.useRef)(tC);
      DC.current = tC;
      const {
        userContext: jC,
        isUserContextUpdating: yC
      } = (0, SC.e)(), LC = (0, QC.useRef)(null), UC = (0, QC.useRef)(null), BC = (0, QC.useRef)(null), OC = (0, QC.useRef)(!1), kC = (0, QC.useRef)((0, bC.Qb)(sC)), [VC, Cz] = (0, QC.useState)((() => {
        const CC = TC && iC.b.peek(jC, TC);
        return CC ? {
          status: "loaded",
          profile: CC,
          playerKey: tC
        } : {
          status: "loading"
        }
      })), [zz, Zz] = (0, QC.useState)(0);
      (0, QC.useEffect)(IC.f, []), (0, QC.useEffect)((() => {
        HC.gameBridge.send("leaveGame", {
          reloadPath: null
        }), mC.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [EC.key]);
      const Qz = () => {
        const CC = (0, JC.getPreviousLocation)();
        null === CC || CC.startsWith("/play") ? (0, JC.navigateToHomePage)() : zC(-1)
      };
      (0, uC.e)(Qz), (0, QC.useEffect)((() => {
        var CC;
        if (yC) return;
        if (!TC) return void Cz({
          status: "notFound",
          playerKey: tC
        });
        const zC = "urlId" in TC && (null === (CC = UC.current) || void 0 === CC ? void 0 : CC.urlId) === TC.urlId && BC.current === jC;
        if (zC && OC.current) return;
        const ZC = zC ? null : iC.b.peek(jC, TC);
        let QC = !1;
        const wC = CC => "loaded" === CC.status && (CC.playerKey === tC || "urlId" in TC && CC.profile.urlId === TC.urlId);
        return ZC ? (BC.current = jC, OC.current = !1, Cz({
          status: "loaded",
          profile: ZC,
          playerKey: tC
        }), iC.b.invalidate(TC)) : Cz((CC => wC(CC) ? CC : {
          status: "loading"
        })), async function(CC, zC) {
          if ("lowerCaseName" in zC && zC.lowerCaseName.length > oC.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await FC.d.getPlayerProfile(CC, zC, NC)
            }
          } catch (ZC) {
            return (0, WC.e)(ZC) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ZC), {
              status: "failed"
            })
          }
        }(jC, TC).then((CC => {
          QC || ("loaded" === CC.status && (BC.current = jC, OC.current = !0), Cz((zC => "failed" === CC.status && wC(zC) ? zC : {
            ...CC,
            playerKey: tC
          })))
        })), () => {
          QC = !0
        }
      }), [yC, tC, jC, zz]);
      const wz = "loading" === VC.status || VC.playerKey === tC || "loaded" === VC.status && !!TC && "urlId" in TC && VC.profile.urlId === TC.urlId ? VC : {
          status: "loading"
        },
        bz = "loaded" === wz.status ? wz.profile : null,
        nz = "loading" === wz.status ? null : function(CC) {
          if ("loaded" === CC.status) {
            const {
              profile: zC
            } = CC;
            return (0, qC.S)({
              urlId: zC.urlId,
              name: zC.player.name,
              ranks: zC.player.ranks,
              socialLinks: zC.socialLinks
            })
          }
          return "notFound" === CC.status ? (0, qC._)() : null
        }(wz),
        fz = null !== bz && void 0 !== bz && bz.urlId ? (0, nC.g)({
          urlId: bz.urlId,
          name: bz.player.name
        }) : null;
      (0, gC.f)(fz);
      const oz = null !== bz && void 0 !== bz && bz.player.cosmetics.profileEffect ? eC.f[bz.player.cosmetics.profileEffect] : void 0,
        qz = null !== bz && !yC && jC.getPlayerName().toLowerCase() === bz.player.name.toLowerCase(),
        Fz = (0, lC.e)(null === bz || void 0 === bz ? void 0 : bz.player.name),
        Wz = qz && jC.playerHasRank("youtuber");
      UC.current = bz;
      const Nz = (0, QC.useCallback)((() => {
          TC && (iC.b.invalidate(TC), iC.b.get(jC, TC).then((CC => {
            DC.current === tC && (OC.current = !0, Cz({
              status: "loaded",
              profile: CC,
              playerKey: tC
            }))
          })).catch((CC => {
            console.error("Failed to refresh user profile", CC)
          })))
        }), [tC, jC]),
        Mz = (0, QC.useCallback)((() => {
          var CC;
          const zC = UC.current;
          return !(!zC || null === (CC = LC.current) || void 0 === CC || !CC.isReady()) && (LC.current.setAllCosmetics(zC.player.cosmetics), !0)
        }), []);
      return (0, QC.useEffect)((() => {
        if (!bz) return;
        let CC, zC = !1;
        const ZC = () => {
          zC || Mz() || (CC = setTimeout(ZC, 100))
        };
        return ZC(), () => {
          zC = !0, clearTimeout(CC)
        }
      }), [bz, Mz]), (0, rC.jsxs)("div", {
        className: KC()("PlayerProfile", {
          PlayerProfilePortrait: ZC
        }),
        children: [nz && (0, rC.jsx)(fC.d, {
          meta: nz
        }), (0, rC.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [oz && (0, rC.jsx)(oz, {}), !oz && (0, rC.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${kC.current})`
            }
          })]
        }), (0, rC.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, rC.jsx)(xC.c, {
            onClick: Qz,
            children: CC("general:back")
          }), bz && !yC && !qz && cC.featureFlags.useSocialFeatures && (0, rC.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, rC.jsx)(XC.b, {
              playerName: bz.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === wz.status && (0, rC.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, rC.jsx)(AC.d, {})
        }), ("notFound" === wz.status || "failed" === wz.status) && (0, rC.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, rC.jsx)(YC.c, {
            name: "face-dizzy"
          }), (0, rC.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === wz.status ? CC("socialBar:playerNotFound", {
              playerName: null !== hC && void 0 !== hC ? hC : vC
            }) : CC("playerProfile:loadFailed")
          }), "failed" === wz.status && (0, rC.jsx)(xC.g, {
            onClick: () => {
              Zz((CC => CC + 1))
            },
            children: CC("general:tryAgain")
          })]
        }), bz && (0, rC.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, rC.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, rC.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, rC.jsx)(pC.e, {
                text: (0, GC.E)(bz.player.ranks, bz.player.name, bz.player.nameColour),
                friendBadgeFor: Fz ? bz.player.name : void 0
              })
            }), (0, rC.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, rC.jsx)(QC.Suspense, {
                fallback: (0, rC.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, rC.jsx)(AC.d, {})
                }),
                children: (0, rC.jsx)(IC.c, {
                  ref: LC,
                  onReady: () => {
                    Mz()
                  }
                })
              })
            })]
          }), (0, rC.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, rC.jsx)(aC, {
              profile: bz
            }), (bz.socialLinks.length > 0 || Wz) && (0, rC.jsx)(dC.b, {
              socialLinks: bz.socialLinks,
              editable: Wz,
              userContext: jC,
              onLinksUpdated: Nz
            }), (0, rC.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, rC.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: CC("homePage:profileReleasedGames")
              }), 0 === bz.releasedGames.length && (0, rC.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: CC("homePage:profileNoReleasedGames")
              }), bz.releasedGames.length > 0 && (0, rC.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: bz.releasedGames.map((CC => (0, rC.jsx)(RC.d, {
                  source: {
                    type: "preview",
                    preview: CC
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, CC.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4819: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => pC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4579),
      nC = ZC(1143),
      fC = ZC(1013),
      oC = ZC(1388),
      qC = ZC(1439),
      FC = ZC(1307),
      WC = ZC(2454),
      NC = ZC(1056);
    const MC = {
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

    function gC(CC) {
      let {
        platform: zC
      } = CC;
      const ZC = "youtube" === zC;
      return (0, NC.jsxs)("span", {
        className: wC()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZC
        }),
        children: [ZC && (0, NC.jsx)(WC.d, {
          variant: "white"
        }), !ZC && (0, NC.jsx)(fC.c, {
          name: MC[zC].icon,
          kit: "brands"
        })]
      })
    }

    function SC(CC) {
      let {
        platform: zC,
        link: ZC,
        editable: QC,
        userContext: wC,
        onLinksUpdated: WC
      } = CC;
      const {
        t: SC
      } = (0, nC.y)(), pC = MC[zC];
      if (!ZC && !QC) return null;

      function PC() {
        var CC;
        if (!wC || !WC) return;
        FC.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: pC.name
            }
          },
          prefixText: bC.s[zC],
          placeholderText: "playBloxd",
          initialValue: null !== (CC = null === ZC || void 0 === ZC ? void 0 : ZC.handle) && void 0 !== CC ? CC : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZC ? "general:remove" : void 0
        }).getResult().then((async CC => {
          if ("notificationTornDown" !== CC && null !== CC) try {
            "submit" === CC.type ? await qC.d.setSocialLink(wC, zC, CC.value) : await qC.d.clearSocialLink(wC, zC), WC()
          } catch (ZC) {
            console.error("Failed to update social link", ZC), FC.NotificationProvider.showAlertPopup({
              title: ZC.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZC) {
        const CC = `@${ZC.handle}`;
        return (0, NC.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: pC.color
          },
          href: ZC.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, NC.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, NC.jsx)(gC, {
              platform: zC
            }), (0, NC.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, NC.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: CC
              })
            })]
          }), QC && (0, NC.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, oC.U)({
              stopPropagation: !0
            }),
            onClick: CC => {
              CC.stopPropagation(), CC.preventDefault(), PC()
            },
            children: (0, NC.jsx)(fC.c, {
              name: "pen-to-square"
            })
          }), !QC && (0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, NC.jsx)(fC.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, NC.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: pC.color
        },
        ...(0, oC.U)(),
        onClick: () => {
          PC()
        },
        children: [(0, NC.jsx)(gC, {
          platform: zC
        }), (0, NC.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: pC.name
          }), (0, NC.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: SC("homePage:profileSocialLinkAdd")
          })]
        }), (0, NC.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, NC.jsx)(fC.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function pC(CC) {
      let {
        socialLinks: zC,
        editable: ZC = !1,
        userContext: QC,
        onLinksUpdated: wC
      } = CC;
      if (!ZC && 0 === zC.length) return null;
      const nC = new Map(zC.map((CC => [CC.platform, CC]))),
        fC = ZC ? bC.q : zC.map((CC => CC.platform));
      return (0, NC.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, NC.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: fC.map((CC => (0, NC.jsx)(SC, {
            platform: CC,
            link: nC.get(CC),
            editable: ZC,
            userContext: QC,
            onLinksUpdated: wC
          }, CC)))
        })
      })
    }
  },
  4811: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);