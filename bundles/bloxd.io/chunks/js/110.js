export const id = 110;
export const ids = [110];
export const modules = {
  8898: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Gz
    });
    var pD = wD(1523),
      sD = wD(20),
      KD = wD(4684),
      rD = wD(58),
      LD = wD(1442);
    var cD = wD(1925),
      gD = wD(1511),
      RD = wD(1355),
      AD = wD(1200),
      UD = wD(157),
      fD = wD(197),
      ID = wD(1008),
      BD = wD(1025),
      GD = wD(1232),
      hD = wD(2349),
      nD = wD(1495),
      MD = wD(1130),
      OD = wD(8901),
      JD = wD(1540);

    function ED(DD, zD) {
      const wD = !0 === zD.debugResult.gameRefused,
        pD = wD || zD.code === UD.n.REQUEST_TO_MATCHMAKING ? (0, OD.i)(zD.message) : null;
      if (null !== pD) return QD(DD, DD((0, OD.q)(pD)), DD(OD.m[pD])), !0;
      if (wD) return async function(DD) {
        const {
          gameNameWithVariation: zD,
          lobbyName: wD,
          shownLobbyName: pD
        } = cD.gameBridge.latest("connectedGame"), sD = "classic" === zD && (0, GD.E)(wD) ? pD : await (0, hD.c)(DD, zD, wD);
        return "" !== sD ? DD("general:cantJoinGame", {
          game: sD
        }) : DD("general:cantJoinThisGame")
      }(DD).then((wD => {
        QD(DD, wD, zD.message)
      })), !0;
      const {
        joinFailure: sD
      } = zD.debugResult, KD = "refused" === (null === sD || void 0 === sD ? void 0 : sD.at) ? sD.code : null;
      return KD === fD.e.schematicNotPublished.code ? (async function(DD, zD) {
        const wD = (0, ID.o)(cD.gameBridge.latest("connectedGame").gameNameWithVariation),
          pD = await async function(DD) {
            try {
              const zD = await nD.d.getGame(await MD.userContextManager.getCurrentUserContext(), DD, !0);
              return zD.gamePublished ? null : zD.name
            } catch (zD) {
              return zD instanceof UD.c && 435 === zD.httpCode || console.error(`Failed to get unpublished game ${DD}`, zD), null
            }
          }(wD);
        if (null === pD) return void QD(DD, DD("general:cantJoinThisGame"), zD);
        const sD = await RD.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: DD("studio:gameNotPublishedTitle", {
            game: pD
          }),
          confirmText: DD("studio:publishInStudio"),
          cancelText: DD("general:cancel")
        }).getResult();
        !0 === sD && (0, gD.navigatePreserveSearch)((0, JD.i)((0, BD.e)(wD), "manage"))
      }(DD, zD.message), !0) : KD === fD.e.schematicBanned.code && (QD(DD, DD("general:cantJoinThisGame"), zD.message), !0)
    }

    function QD(DD, zD, wD) {
      RD.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: zD,
        subtitle: wD,
        confirmText: DD("general:ok"),
        cancelText: ""
      })
    }
    var XD = wD(4612),
      VD = wD(25),
      PD = wD(1251),
      CD = wD(1737),
      xD = wD(103),
      TD = wD(1324),
      bD = wD(1426),
      jD = wD(4546),
      dD = wD(4378),
      SD = wD(4333),
      iD = wD(3227),
      lD = wD(1339),
      WD = wD(760),
      ND = wD(1234),
      ZD = wD(3294),
      yD = wD(3139),
      kD = wD(1363),
      mD = wD(1346),
      eD = wD(5011),
      oD = wD(8907),
      aD = wD(2949),
      uD = wD(1096);

    function vD(DD) {
      let {
        onApply: zD,
        onSkip: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)();
      return (0, rD.useEffect)((() => {
        aD.g.skipPlayWait()
      }), []), (0, uD.jsx)(kD.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, uD.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [pD("customTexturePack:downloadPrompt"), (0, uD.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: pD("customTexturePack:authorWarning")
          }), (0, uD.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: pD("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: zD
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: wD
        }
      })
    }
    async function tD() {
      let DD = !1;
      const zD = RD.NotificationProvider.showCustomPopup({
        body: zD => (0, uD.jsx)(vD, {
          onApply: () => {
            DD = !0, zD()
          },
          onSkip: zD
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await zD.getResult(), DD
    }
    let FD = {
      wanted: !1
    };
    let YD = null;

    function HD(DD) {
      DD.setGamePackConfirm(tD), YD = DD
    }
    var qD = wD(3482);

    function Dz(DD) {
      let {
        schematicId: zD,
        texturePackKey: wD,
        onClose: pD
      } = DD;
      const [sD, KD] = (0, rD.useState)("prompt"), [LD, cD] = (0, rD.useState)(null), gD = (0, qD.c)();

      function RD() {
        pD()
      }
      return "prompt" === sD ? (0, uD.jsx)(vD, {
        onApply: async function() {
          KD("downloading");
          try {
            const DD = await async function(DD, zD) {
              const wD = await (0, eD.c)(zD);
              if (wD) return {
                pack: wD,
                key: zD
              };
              const pD = await MD.userContextManager.getCurrentUserContext(),
                sD = (await nD.d.getGame(pD, DD, !0)).customTexturePackKey;
              if (!sD) return null;
              const KD = await (0, eD.c)(sD);
              if (!KD) throw new Error("The texture pack could not be found");
              return {
                pack: KD,
                key: sD
              }
            }(zD, wD);
            if (!gD.current) return;
            if (!DD) return void pD();
            if ((0, ZD.i)(DD.pack)) return void KD("refused");
            yD.b.setFromJson(DD.pack, "customGame"), await yD.b.saveTemporaryTexturePack(DD.key), gD.current && (0, CD.reloadBloxd)()
          } catch (DD) {
            cD(DD instanceof Error ? DD.message : String(DD)), KD("error")
          }
        },
        onSkip: RD
      }) : "downloading" === sD ? (0, uD.jsx)(kD.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, uD.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, uD.jsx)(mD.e, {
            showFace: !0
          })
        })
      }) : "error" === sD ? (0, uD.jsx)(kD.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: LD,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: RD
        }
      }) : "refused" === sD ? (0, uD.jsx)(kD.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: RD
        }
      }) : null
    }
    var zz = wD(8919),
      wz = wD(4322),
      pz = wD(1775),
      sz = wD(2925),
      Kz = wD(4328),
      rz = wD(2116),
      Lz = wD(4702),
      cz = wD(1309),
      gz = wD(1733),
      Rz = wD(638),
      Az = wD(726);

    function Uz() {
      const DD = sD.e.get("clientEscMenuOptions");
      cD.gameBridge.send("setLookSensitivity", sD.e.get("isTouchScreen") ? (0, Az.q)(DD) : DD.mouseSensitivity)
    }

    function fz(DD) {
      const zD = DD.asError();
      if (zD.debugResult.sw || (0, gz.c)(zD.debugResult.error)) return;
      console.log("Failed to join lobby:", zD.message);
      const wD = "timedOut" === zD.debugResult.gameServerUnreachable;
      (0, sz.reportClientError)("matchmake_failed", zD.message, wD ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : UD.n[zD.code]);
      const {
        error: pD
      } = zD.debugResult;
      if (pD instanceof iD.m && "default" !== pD.packSource) {
        const DD = (0, Kz.d)("js", "game" === pD.packSource ? "game" : "page", (0, Kz.h)(pD));
        (0, sz.reportClientError)("texture_pack", pD, DD)
      }
    }

    function Iz(DD) {
      if (null === DD || void 0 === DD || !DD.isError()) return !1;
      const zD = DD.asError();
      return zD.code === UD.n.REQUEST_TO_MATCHMAKING && !(0, gz.c)(zD.debugResult.error)
    }
    async function Bz(DD, zD, wD) {
      const pD = (0, Lz.H)(zD);
      async function rD(DD, zD, wD, pD) {
        var rD;
        if (pD.aborted) return null;
        null === sD.e.get("gameEntrySource") && (0, sD.k)("directPlayUrl"), Rz.v && (0, oD.c)().catch((() => {})), sD.e.set({
          gameState: "findingLobby"
        }), VD.l.KG("loadingScreenState", "loadingPage:findingLobby");
        const LD = await MD.userContextManager.getCurrentUserContext();
        cD.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: zD,
          discordContext: DD instanceof ND.f ? DD.getSerialisableParams() : null
        }), (0, pz.e)(null !== (rD = aD.g.playInputAt()) && void 0 !== rD ? rD : performance.now());
        const gD = await async function(DD, zD, wD, pD, sD) {
          try {
            await KD.reqLibsLoadedPromise
          } catch (rD) {
            return PD.e.errorWithCode(rD.toString(), UD.n.LOAD_REQUIRED_LIBS, {
              error: rD,
              severity: "medium"
            })
          }
          return VD.l.KG("matchmakeAndPlayStepCompleted", {
            step: UD.n.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, KD.matchmakeAndPlayMaybeUnloaded)(DD, zD, wD, pD, sD)
        }(DD, zD, wD, LD, pD), RD = gD.isError() ? gD.asError() : null;
        if (pD.aborted) return RD && fz(gD), cD.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== RD && void 0 !== RD && RD.debugResult.sw) return console.log("Join cancelled:", RD.message), null;
        if (RD) return gD;
        const {
          gameNameWithVariation: AD,
          lobbyName: fD
        } = gD.getValue();
        return Uz(), (0, cz.D)().setGameViewShown(!0), LD.recordJoin(AD, fD), (0, TD.K)(), gD
      }
      return pD && (0, sD.k)("updateRejoin"), (0, rz.h)((async sD => {
        try {
          var KD;
          let LD = DD,
            cD = await rD(LD, zD, wD, sD);
          for (let DD = 0; pD && DD < Lz.j && (Iz(cD) && await (0, Lz.K)((0, Lz.q)(DD), sD)); DD++) LD = (0, Lz.r)(LD, DD + 1, "string" === typeof LD && (0, GD.J)(LD)), cD = await rD(LD, zD, wD, sD);
          return null !== (KD = cD) && void 0 !== KD && KD.isError() && fz(cD), cD
        } catch (LD) {
          if ((0, sz.reportClientError)("matchmake_failed", LD, "unexpected"), cD.gameBridge.send("leaveGame", {
              reloadPath: sD.aborted ? null : "/"
            }), sD.aborted) return null;
          throw LD
        }
      }), (async DD => {
        var wD;
        if (pD) return;
        const sD = (0, TD.E)();
        null !== sD && (await sD, DD.aborted) || (null !== (wD = WD.e[zD]) && void 0 !== wD && wD.playAdBeforeMatchmaking ? (aD.g.skipPlayWait(), await new Promise((DD => {
          (0, TD.gb)((() => {
            DD(!0)
          }), "video_start")
        }))) : (0, TD.gb)((() => {}), "video_start"))
      }))
    }

    function Gz() {
      const {
        t: DD
      } = (0, AD.E)(), zD = (0, gD.useNavigatePreserveSearch)(), wD = (0, pD.s)(), fD = (0, pD.C)(), BD = (0, rD.useRef)({
        t: DD,
        navigate: zD
      });
      BD.current = {
        t: DD,
        navigate: zD
      };
      const OD = (0, rD.useRef)("");
      OD.current = wD.pathname + wD.search;
      const {
        gameState: JD,
        clientEscMenuOptions: QD
      } = (0, sD.n)(["gameState", "clientEscMenuOptions"]), VD = (0, rD.useRef)(null), PD = (0, rD.useRef)(!1);
      var WD;
      (0, rz.k)(), (0, rz.l)(), WD = Rz.v, (0, rD.useEffect)((() => {
        if (!WD) return;
        let DD = !0;
        return (0, oD.c)().then((zD => {
          DD && HD(zD)
        })).catch((() => {})), () => {
          var zD;
          DD = !1, FD.wanted = !1, null === (zD = YD) || void 0 === zD || zD.setGamePackConfirm(null), YD = null
        }
      }), [WD]), (0, rD.useEffect)((() => {
        var DD;
        (0, KD.needGameClientNow)();
        const {
          t: zD,
          navigate: pD
        } = BD.current, rD = (0, zz.c)(fD, wD.search);
        if (fD.lobbyName && !new URLSearchParams(wD.search).has("lobby")) return void pD((0, lD.c)(rD.gameNameWithVariation, rD.lobbyName), {
          replace: !0
        });
        let LD = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === wD.pathname) {
          const DD = sD.e.get("discordContext");
          if (!DD) return void pD("/");
          LD = XD.d.setupDiscordLobby(DD, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: DD
          }))).catch((zD => (console.error("Failed to setup discord lobby", zD), {
            shouldMatchmake: !1,
            discordContext: DD
          })))
        } else if (!rD.gameNameWithVariation || !(0, GD.F)(rD.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${rD.gameNameWithVariation}`), void pD(-1);
        const AD = VD.current;
        if (null !== AD && rD.gameNameWithVariation === AD.gameNameWithVariation && rD.lobbyName === AD.lobbyName) return;
        if (cD.gameBridge.latest("connectedGame").replay) return void(0, rz.f)(null);
        if ("releaseCountdown" === (null === (DD = (0, hD.g)(rD.gameNameWithVariation)) || void 0 === DD ? void 0 : DD.type)) return console.error(`Game hasn't been released yet: ${rD.gameNameWithVariation}`), void pD(-1);
        const JD = PD.current;
        PD.current = !1, (0, TD.G)(), sD.e.set({
          gameState: "loadingScreen"
        });
        const QD = function() {
            FD.wanted = !1;
            const DD = {
              wanted: !0
            };
            return FD = DD, () => DD.wanted
          }(),
          bD = rD.gameNameWithVariation;
        if (bD && (Rz.v || (0, ID.l)(bD))) {
          const DD = Rz.v ? Promise.all([(0, oD.c)(), MD.userContextManager.getCurrentUserContext()]).then((DD => {
            let [zD, wD] = DD;
            if (QD()) return HD(zD), zD.packForGame(bD, wD, QD)
          })) : async function(DD) {
            await yD.b.indexedDbValuesAreLoaded();
            const zD = await MD.userContextManager.getCurrentUserContext(),
              wD = (0, ID.o)(DD);
            let pD;
            try {
              pD = await nD.d.getGame(zD, wD, !0)
            } catch (rD) {
              return void console.error("Failed to get game", rD)
            }
            const sD = pD.customTexturePackKey;
            if (!sD) return void(yD.b.isUsingTemporaryTexturePack() && ((0, CD.reloadBloxd)(), await new Promise((() => {}))));
            if (yD.b.isUsingTemporaryTexturePack() && yD.b.getTemporaryTexturePackSource() === sD) return;
            const KD = RD.NotificationProvider.showCustomPopup({
              body: DD => (0, uD.jsx)(Dz, {
                schematicId: wD,
                texturePackKey: sD,
                onClose: DD
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await KD.getResult()
          }(bD), zD = LD;
          LD = DD.catch((DD => {
            console.error("Failed to check for custom texture pack", DD)
          })).then((() => zD))
        }
        const WD = null !== VD.current;
        VD.current = null, (0, rz.f)(null);
        const ND = () => {
          JD ? (0, gD.navigateToHomePage)() : (PD.current = WD, pD(-1))
        };
        let ZD = !1;
        const kD = wD.pathname + wD.search,
          mD = () => !ZD && OD.current === kD;
        return LD.then((DD => {
          let {
            shouldMatchmake: wD,
            discordContext: KD
          } = DD;
          mD() && (wD ? Bz(null !== KD && void 0 !== KD ? KD : rD.lobbyName, KD ? "classic" : rD.gameNameWithVariation, rD.directJoinVmUrl).then((DD => {
            if (null !== DD && mD())
              if (DD.isError()) {
                var wD;
                const KD = DD.asError(),
                  LD = null !== (wD = KD.debugResult.severity) && void 0 !== wD ? wD : "high";
                if ((0, gz.c)(KD.debugResult.error)) return void gz.e.reload();
                if (KD.code === UD.n.SHADER_PACK) return void(0, wz.e)(KD.message, pD);
                const gD = sD.e.get("gameEntrySource"),
                  AD = KD.code === UD.n.INITIALISE_WEBGL ? (0, dD.e)() : null,
                  {
                    error: fD
                  } = KD.debugResult;
                let ID;
                if (ED(zD, KD)) ID = Promise.resolve(!1);
                else if (null !== AD) ID = (0, dD.l)(AD);
                else if (fD instanceof iD.m) ID = (0, SD.h)(fD);
                else {
                  let DD;
                  switch (LD) {
                    case "low":
                      DD = "face-diagonal-mouth";
                      break;
                    case "medium":
                      DD = "face-worried";
                      break;
                    case "high":
                      DD = "face-dizzy"
                  }
                  ID = RD.NotificationProvider.showPromptPopup({
                    icon: DD,
                    title: UD.G[KD.code],
                    subtitle: (0, uD.jsxs)(uD.Fragment, {
                      children: [KD.debugResult.gameServerUnreachable ? zD((0, xD.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : KD.message, KD.debugResult.error instanceof Error && (0, uD.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, uD.jsx)(jD.c, {
                          errorString: KD.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: zD("general:tryAgain"),
                    cancelText: zD("general:cancel")
                  }).getResult().then((DD => !0 === DD))
                }
                ID.then((DD => {
                  if (DD) {
                    (0, sD.k)(gD);
                    const DD = (0, lD.c)(rD.gameNameWithVariation, rD.lobbyName);
                    "low" === LD ? pD(DD) : (0, CD.reloadBloxd)(DD)
                  }
                })), cD.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), ND()
              } else {
                const {
                  gameNameWithVariation: zD,
                  lobbyName: wD
                } = DD.getValue();
                VD.current = {
                  gameNameWithVariation: zD,
                  lobbyName: wD
                };
                const sD = (0, lD.c)(zD, wD);
                pD(sD, {
                  replace: !0
                })
              }
          })).catch((DD => {
            if (!mD()) return;
            RD.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, uD.jsxs)(uD.Fragment, {
                children: [zD("homePage:pleaseCopyError"), (0, uD.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, uD.jsx)(jD.c, {
                    errorString: DD.stack
                  })
                })]
              }),
              confirmText: zD("general:tryAgain"),
              cancelText: zD("general:cancel")
            }).getResult().then((DD => {
              !0 === DD && (0, CD.reloadBloxd)((0, lD.c)(rD.gameNameWithVariation, rD.lobbyName))
            })), ND()
          })) : pD(-1))
        })), () => {
          ZD = !0
        }
      }), [fD, wD.search, wD.pathname]), (0, rD.useEffect)((() => {
        QD.disableFullscreen && (0, bD.f)() ? (0, bD.i)() : !QD.disableFullscreen && (0, bD.g)() && (0, bD.q)()
      }), [JD, QD]), (0, rD.useEffect)((() => {
        "inGame" === JD && Uz()
      }), [JD, QD]), (0, rD.useEffect)((() => {
        "inGame" !== JD && sD.e.set({
          openInGameMenuName: null
        })
      }), [JD]);
      const ND = function(DD) {
        const zD = (0, sD.i)(DD),
          [wD, pD] = (0, rD.useState)(0),
          [KD, cD] = (0, rD.useState)(!1);
        (0, LD.g)("gameJoined", (() => {
          (0, sD.i)(sD.e.get("gameState")) && (pD((DD => DD + 1)), cD(!0))
        })), (0, rD.useEffect)((() => {
          zD || cD(!1)
        }), [zD]);
        const gD = "inGame" === DD;
        return {
          mounted: gD || zD && KD,
          shown: gD,
          key: wD
        }
      }(JD);
      return (0, uD.jsx)(uD.Fragment, {
        children: ND.mounted && (0, uD.jsx)(KD.InGameUi, {
          shown: ND.shown
        }, ND.key)
      })
    }
  },
  5011: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(1211);
    async function sD(DD) {
      const zD = await fetch(`${pD.clientSideServerUrls.s3Url}/${DD}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zD.status || 403 === zD.status) return null;
      if (!zD.ok) throw new Error(`Failed to download the texture pack (${zD.status})`);
      return await zD.json()
    }
  },
  8919: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(1339),
      sD = wD(1232),
      KD = wD(619);

    function rD(DD) {
      return DD = function(DD, zD) {
        var wD;
        const pD = new URLSearchParams(zD),
          sD = pD.get("lobby"),
          KD = pD.get("vm"),
          rD = null !== (wD = sD) && void 0 !== wD ? wD : DD.lobbyName,
          LD = null !== KD && void 0 !== KD ? KD : DD.directJoinVmUrl;
        if (rD === DD.lobbyName && LD === DD.directJoinVmUrl) return DD;
        return {
          ...DD,
          lobbyName: rD,
          directJoinVmUrl: LD
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
        if ((0, KD.B)(DD.directJoinVmUrl)) return DD;
        const zD = (0, sD.V)(DD.directJoinVmUrl);
        null === zD && (DD.directJoinVmUrl = void 0);
        return DD
      }(DD = function(DD) {
        if ((0, KD.B)(DD.gameNameWithVariation)) return DD;
        return DD.gameNameWithVariation = (0, pD.i)(DD.gameNameWithVariation), DD
      }(DD))
    }
  },
  8915: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    let pD = !1;

    function sD() {
      pD = !0
    }

    function KD() {
      return pD
    }
  },
  8907: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => fD,
      c: () => UD,
      g: () => ID
    });
    var pD = wD(3139),
      sD = wD(2264),
      KD = wD(2119),
      rD = wD(4673),
      LD = wD(3494),
      cD = wD(8915);
    let gD = null;

    function RD() {
      return Promise.all([wD.e(74), wD.e(77), wD.e(89), wD.e(211), wD.e(76), wD.e(210), wD.e(134), wD.e(196), wD.e(139), wD.e(87), wD.e(218), wD.e(63)]).then((() => wD(40590)))
    }

    function AD() {
      Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(89), wD.e(86), wD.e(269), wD.e(189), wD.e(223), wD.e(247), wD.e(218), wD.e(46)]).then((() => wD(40914))).catch((() => {}))
    }

    function UD() {
      return rD.c.cancelDownloadForJoin(), (0, LD.b)(), (0, sD.c)(), (0, cD.c)(), (0, KD.l)(), AD(), Promise.all([wD.e(77), wD.e(89), wD.e(211), wD.e(210), wD.e(134), wD.e(139), wD.e(58)]).then((() => wD(40967))).then((DD => {
        let {
          startJoinLoad: zD
        } = DD;
        zD()
      }), (() => {})), gD ??= RD().then((DD => (DD.startWasmPlay(), DD.followPageUiPack((DD => {
        pD.b.showGamePack(DD)
      })), DD)), (DD => {
        throw gD = null, DD
      })), gD
    }

    function fD() {
      return AD(), wD.e(271).then((() => wD(40972))).catch((() => {})), RD().then((() => {}))
    }

    function ID() {
      return RD().then((DD => {
        DD.startWasmPreviews(), DD.prefetchWasmPreviews()
      }))
    }
  },
  8901: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      g: () => rD,
      i: () => LD,
      m: () => gD,
      q: () => cD
    });
    var pD = wD(197),
      sD = wD(4657);

    function KD(DD) {
      return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function rD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function LD(DD) {
      var zD;
      return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
    }

    function cD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const gD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);