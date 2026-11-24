export const id = 110;
export const ids = [110];
export const modules = {
  9090: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => GH
    });
    var tS = gS(1622),
      bS = gS(24),
      XS = gS(4781),
      xS = gS(64),
      NS = gS(1522);
    var qS = gS(2060),
      uS = gS(1608),
      IS = gS(1435),
      fS = gS(1281),
      kS = gS(160),
      aS = gS(198),
      KS = gS(1087),
      jS = gS(1097),
      GS = gS(1309),
      CS = gS(2475),
      nS = gS(1588),
      PS = gS(1216),
      QS = gS(9093),
      DS = gS(1641);

    function wS(SS, HS) {
      const gS = !0 === HS.debugResult.gameRefused,
        tS = gS || HS.code === kS.g.REQUEST_TO_MATCHMAKING ? (0, QS.j)(HS.message) : null;
      if (null !== tS) return hS(SS, SS((0, QS.m)(tS)), SS(QS.l[tS])), !0;
      if (gS) return async function(SS) {
        const {
          gameNameWithVariation: HS,
          lobbyName: gS,
          shownLobbyName: tS
        } = qS.gameBridge.latest("connectedGame"), bS = "classic" === HS && (0, GS.I)(gS) ? tS : await (0, CS.c)(SS, HS, gS);
        return "" !== bS ? SS("general:cantJoinGame", {
          game: bS
        }) : SS("general:cantJoinThisGame")
      }(SS).then((gS => {
        hS(SS, gS, HS.message)
      })), !0;
      const {
        joinFailure: bS
      } = HS.debugResult, XS = "refused" === (null === bS || void 0 === bS ? void 0 : bS.at) ? bS.code : null;
      return XS === aS.c.schematicNotPublished.code ? (async function(SS, HS) {
        const gS = (0, KS.t)(qS.gameBridge.latest("connectedGame").gameNameWithVariation),
          tS = await async function(SS) {
            try {
              const HS = await nS.b.getGame(await PS.userContextManager.getCurrentUserContext(), SS, !0);
              return HS.gamePublished ? null : HS.name
            } catch (HS) {
              return HS instanceof kS.b && 435 === HS.httpCode || console.error(`Failed to get unpublished game ${SS}`, HS), null
            }
          }(gS);
        if (null === tS) return void hS(SS, SS("general:cantJoinThisGame"), HS);
        const bS = await IS.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: SS("studio:gameNotPublishedTitle", {
            game: tS
          }),
          confirmText: SS("studio:publishInStudio"),
          cancelText: SS("general:cancel")
        }).getResult();
        !0 === bS && (0, uS.navigatePreserveSearch)((0, DS.p)((0, jS.b)(gS), "manage"))
      }(SS, HS.message), !0) : XS === aS.c.schematicBanned.code && (hS(SS, SS("general:cantJoinThisGame"), HS.message), !0)
    }

    function hS(SS, HS, gS) {
      IS.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: HS,
        subtitle: gS,
        confirmText: SS("general:ok"),
        cancelText: ""
      })
    }
    var ZS = gS(4712),
      JS = gS(31),
      OS = gS(1329),
      dS = gS(1844),
      cS = gS(104),
      vS = gS(1390),
      ES = gS(1510),
      LS = gS(4659),
      YS = gS(4474),
      AS = gS(4440),
      yS = gS(3395),
      VS = gS(1406),
      iS = gS(830),
      WS = gS(1312),
      zS = gS(3443),
      US = gS(3320),
      pS = gS(1437),
      sS = gS(1419),
      BS = gS(5133),
      MS = gS(9096),
      FS = gS(3107),
      RS = gS(1181);

    function TS(SS) {
      let {
        onApply: HS,
        onSkip: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)();
      return (0, xS.useEffect)((() => {
        FS.g.skipPlayWait()
      }), []), (0, RS.jsx)(pS.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, RS.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [tS("customTexturePack:downloadPrompt"), (0, RS.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: tS("customTexturePack:authorWarning")
          }), (0, RS.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: tS("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: HS
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: gS
        }
      })
    }
    async function oS() {
      let SS = !1;
      const HS = IS.NotificationProvider.showCustomPopup({
        body: HS => (0, RS.jsx)(TS, {
          onApply: () => {
            SS = !0, HS()
          },
          onSkip: HS
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await HS.getResult(), SS
    }
    let lS = {
      wanted: !1
    };
    let mS = null;

    function eS(SS) {
      SS.setGamePackConfirm(oS), mS = SS
    }
    var rS = gS(3623);

    function SH(SS) {
      let {
        schematicId: HS,
        texturePackKey: gS,
        onClose: tS
      } = SS;
      const [bS, XS] = (0, xS.useState)("prompt"), [NS, qS] = (0, xS.useState)(null), uS = (0, rS.b)();

      function IS() {
        tS()
      }
      return "prompt" === bS ? (0, RS.jsx)(TS, {
        onApply: async function() {
          XS("downloading");
          try {
            const SS = await async function(SS, HS) {
              const gS = await (0, BS.e)(HS);
              if (gS) return {
                pack: gS,
                key: HS
              };
              const tS = await PS.userContextManager.getCurrentUserContext(),
                bS = (await nS.b.getGame(tS, SS, !0)).customTexturePackKey;
              if (!bS) return null;
              const XS = await (0, BS.e)(bS);
              if (!XS) throw new Error("The texture pack could not be found");
              return {
                pack: XS,
                key: bS
              }
            }(HS, gS);
            if (!uS.current) return;
            if (!SS) return void tS();
            if ((0, zS.j)(SS.pack)) return void XS("refused");
            US.d.setFromJson(SS.pack, "customGame"), await US.d.saveTemporaryTexturePack(SS.key), uS.current && (0, dS.reloadBloxd)()
          } catch (SS) {
            qS(SS instanceof Error ? SS.message : String(SS)), XS("error")
          }
        },
        onSkip: IS
      }) : "downloading" === bS ? (0, RS.jsx)(pS.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, RS.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, RS.jsx)(sS.c, {
            showFace: !0
          })
        })
      }) : "error" === bS ? (0, RS.jsx)(pS.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: NS,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: IS
        }
      }) : "refused" === bS ? (0, RS.jsx)(pS.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: IS
        }
      }) : null
    }
    var HH = gS(9102),
      gH = gS(4430),
      tH = gS(1889),
      bH = gS(3083),
      XH = gS(4438),
      xH = gS(2236),
      NH = gS(4794),
      qH = gS(1378),
      uH = gS(1835),
      IH = gS(699),
      fH = gS(786);

    function kH() {
      const SS = bS.b.get("clientEscMenuOptions");
      qS.gameBridge.send("setLookSensitivity", bS.b.get("isTouchScreen") ? (0, fH.l)(SS) : SS.mouseSensitivity)
    }

    function aH(SS) {
      const HS = SS.asError();
      if (HS.debugResult.Hg || (0, uH.b)(HS.debugResult.error)) return;
      console.log("Failed to join lobby:", HS.message);
      const gS = "timedOut" === HS.debugResult.gameServerUnreachable;
      (0, bH.reportClientError)("matchmake_failed", HS.message, gS ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : kS.g[HS.code]);
      const {
        error: tS
      } = HS.debugResult;
      if (tS instanceof yS.q && "default" !== tS.packSource) {
        const SS = (0, XH.g)("js", "game" === tS.packSource ? "game" : "page", (0, XH.k)(tS));
        (0, bH.reportClientError)("texture_pack", tS, SS)
      }
    }

    function KH(SS) {
      if (null === SS || void 0 === SS || !SS.isError()) return !1;
      const HS = SS.asError();
      return HS.code === kS.g.REQUEST_TO_MATCHMAKING && !(0, uH.b)(HS.debugResult.error)
    }
    async function jH(SS, HS, gS) {
      const tS = (0, NH.P)(HS);
      async function xS(SS, HS, gS, tS) {
        var xS;
        if (tS.aborted) return null;
        null === bS.b.get("gameEntrySource") && (0, bS.k)("directPlayUrl"), IH.A && (0, MS.f)().catch((() => {})), bS.b.set({
          gameState: "findingLobby"
        }), JS.k.cj("loadingScreenState", "loadingPage:findingLobby");
        const NS = await PS.userContextManager.getCurrentUserContext();
        qS.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: HS,
          discordContext: SS instanceof WS.g ? SS.getSerialisableParams() : null
        }), (0, tH.c)(null !== (xS = FS.g.playInputAt()) && void 0 !== xS ? xS : performance.now());
        const uS = await async function(SS, HS, gS, tS, bS) {
          try {
            await XS.reqLibsLoadedPromise
          } catch (xS) {
            return OS.d.errorWithCode(xS.toString(), kS.g.LOAD_REQUIRED_LIBS, {
              error: xS,
              severity: "medium"
            })
          }
          return JS.k.cj("matchmakeAndPlayStepCompleted", {
            step: kS.g.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, XS.matchmakeAndPlayMaybeUnloaded)(SS, HS, gS, tS, bS)
        }(SS, HS, gS, NS, tS), IS = uS.isError() ? uS.asError() : null;
        if (tS.aborted) return IS && aH(uS), qS.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== IS && void 0 !== IS && IS.debugResult.Hg) return console.log("Join cancelled:", IS.message), null;
        if (IS) return uS;
        const {
          gameNameWithVariation: fS,
          lobbyName: aS
        } = uS.getValue();
        return kH(), (0, qH.G)().setGameViewShown(!0), NS.recordJoin(fS, aS), (0, vS.M)(), uS
      }
      return tS && (0, bS.k)("updateRejoin"), (0, xH.i)((async bS => {
        try {
          var XS;
          let NS = SS,
            qS = await xS(NS, HS, gS, bS);
          for (let SS = 0; tS && SS < NH.m && (KH(qS) && await (0, NH.S)((0, NH.v)(SS), bS)); SS++) NS = (0, NH.y)(NS, SS + 1, "string" === typeof NS && (0, GS.P)(NS)), qS = await xS(NS, HS, gS, bS);
          return null !== (XS = qS) && void 0 !== XS && XS.isError() && aH(qS), qS
        } catch (NS) {
          if ((0, bH.reportClientError)("matchmake_failed", NS, "unexpected"), qS.gameBridge.send("leaveGame", {
              reloadPath: bS.aborted ? null : "/"
            }), bS.aborted) return null;
          throw NS
        }
      }), (async SS => {
        var gS;
        if (tS) return;
        const bS = (0, vS.D)();
        null !== bS && (await bS, SS.aborted) || (null !== (gS = iS.d[HS]) && void 0 !== gS && gS.playAdBeforeMatchmaking ? (FS.g.skipPlayWait(), await new Promise((SS => {
          (0, vS.gb)((() => {
            SS(!0)
          }), "video_start")
        }))) : (0, vS.gb)((() => {}), "video_start"))
      }))
    }

    function GH() {
      const {
        t: SS
      } = (0, fS.F)(), HS = (0, uS.useNavigatePreserveSearch)(), gS = (0, tS.t)(), aS = (0, tS.z)(), jS = (0, xS.useRef)({
        t: SS,
        navigate: HS
      });
      jS.current = {
        t: SS,
        navigate: HS
      };
      const QS = (0, xS.useRef)("");
      QS.current = gS.pathname + gS.search;
      const {
        gameState: DS,
        clientEscMenuOptions: hS
      } = (0, bS.m)(["gameState", "clientEscMenuOptions"]), JS = (0, xS.useRef)(null), OS = (0, xS.useRef)(!1);
      var iS;
      (0, xH.m)(), (0, xH.p)(), iS = IH.A, (0, xS.useEffect)((() => {
        if (!iS) return;
        let SS = !0;
        return (0, MS.f)().then((HS => {
          SS && eS(HS)
        })).catch((() => {})), () => {
          var HS;
          SS = !1, lS.wanted = !1, null === (HS = mS) || void 0 === HS || HS.setGamePackConfirm(null), mS = null
        }
      }), [iS]), (0, xS.useEffect)((() => {
        var SS;
        (0, XS.needGameClientNow)();
        const {
          t: HS,
          navigate: tS
        } = jS.current, xS = (0, HH.b)(aS, gS.search);
        if (aS.lobbyName && !new URLSearchParams(gS.search).has("lobby")) return void tS((0, VS.d)(xS.gameNameWithVariation, xS.lobbyName), {
          replace: !0
        });
        let NS = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === gS.pathname) {
          const SS = bS.b.get("discordContext");
          if (!SS) return void tS("/");
          NS = ZS.e.setupDiscordLobby(SS, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: SS
          }))).catch((HS => (console.error("Failed to setup discord lobby", HS), {
            shouldMatchmake: !1,
            discordContext: SS
          })))
        } else if (!xS.gameNameWithVariation || !(0, GS.M)(xS.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${xS.gameNameWithVariation}`), void tS(-1);
        const fS = JS.current;
        if (null !== fS && xS.gameNameWithVariation === fS.gameNameWithVariation && xS.lobbyName === fS.lobbyName) return;
        if (qS.gameBridge.latest("connectedGame").replay) return void(0, xH.f)(null);
        if ("releaseCountdown" === (null === (SS = (0, CS.f)(xS.gameNameWithVariation)) || void 0 === SS ? void 0 : SS.type)) return console.error(`Game hasn't been released yet: ${xS.gameNameWithVariation}`), void tS(-1);
        const DS = OS.current;
        OS.current = !1, (0, vS.F)(), bS.b.set({
          gameState: "loadingScreen"
        });
        const hS = function() {
            lS.wanted = !1;
            const SS = {
              wanted: !0
            };
            return lS = SS, () => SS.wanted
          }(),
          ES = xS.gameNameWithVariation;
        if (ES && (IH.A || (0, KS.m)(ES))) {
          const SS = IH.A ? Promise.all([(0, MS.f)(), PS.userContextManager.getCurrentUserContext()]).then((SS => {
            let [HS, gS] = SS;
            if (hS()) return eS(HS), HS.packForGame(ES, gS, hS)
          })) : async function(SS) {
            await US.d.indexedDbValuesAreLoaded();
            const HS = await PS.userContextManager.getCurrentUserContext(),
              gS = (0, KS.t)(SS);
            let tS;
            try {
              tS = await nS.b.getGame(HS, gS, !0)
            } catch (xS) {
              return void console.error("Failed to get game", xS)
            }
            const bS = tS.customTexturePackKey;
            if (!bS) return void(US.d.isUsingTemporaryTexturePack() && ((0, dS.reloadBloxd)(), await new Promise((() => {}))));
            if (US.d.isUsingTemporaryTexturePack() && US.d.getTemporaryTexturePackSource() === bS) return;
            const XS = IS.NotificationProvider.showCustomPopup({
              body: SS => (0, RS.jsx)(SH, {
                schematicId: gS,
                texturePackKey: bS,
                onClose: SS
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await XS.getResult()
          }(ES), HS = NS;
          NS = SS.catch((SS => {
            console.error("Failed to check for custom texture pack", SS)
          })).then((() => HS))
        }
        const iS = null !== JS.current;
        JS.current = null, (0, xH.f)(null);
        const WS = () => {
          DS ? (0, uS.navigateToHomePage)() : (OS.current = iS, tS(-1))
        };
        let zS = !1;
        const pS = gS.pathname + gS.search,
          sS = () => !zS && QS.current === pS;
        return NS.then((SS => {
          let {
            shouldMatchmake: gS,
            discordContext: XS
          } = SS;
          sS() && (gS ? jH(null !== XS && void 0 !== XS ? XS : xS.lobbyName, XS ? "classic" : xS.gameNameWithVariation, xS.directJoinVmUrl).then((SS => {
            if (null !== SS && sS())
              if (SS.isError()) {
                var gS;
                const XS = SS.asError(),
                  NS = null !== (gS = XS.debugResult.severity) && void 0 !== gS ? gS : "high";
                if ((0, uH.b)(XS.debugResult.error)) return void uH.e.reload();
                if (XS.code === kS.g.SHADER_PACK) return void(0, gH.e)(XS.message, tS);
                const uS = bS.b.get("gameEntrySource"),
                  fS = XS.code === kS.g.INITIALISE_WEBGL ? (0, YS.e)() : null,
                  {
                    error: aS
                  } = XS.debugResult;
                let KS;
                if (wS(HS, XS)) KS = Promise.resolve(!1);
                else if (null !== fS) KS = (0, YS.j)(fS);
                else if (aS instanceof yS.q) KS = (0, AS.f)(aS);
                else {
                  let SS;
                  switch (NS) {
                    case "low":
                      SS = "face-diagonal-mouth";
                      break;
                    case "medium":
                      SS = "face-worried";
                      break;
                    case "high":
                      SS = "face-dizzy"
                  }
                  KS = IS.NotificationProvider.showPromptPopup({
                    icon: SS,
                    title: kS.r[XS.code],
                    subtitle: (0, RS.jsxs)(RS.Fragment, {
                      children: [XS.debugResult.gameServerUnreachable ? HS((0, cS.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : XS.message, XS.debugResult.error instanceof Error && (0, RS.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, RS.jsx)(LS.c, {
                          errorString: XS.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: HS("general:tryAgain"),
                    cancelText: HS("general:cancel")
                  }).getResult().then((SS => !0 === SS))
                }
                KS.then((SS => {
                  if (SS) {
                    (0, bS.k)(uS);
                    const SS = (0, VS.d)(xS.gameNameWithVariation, xS.lobbyName);
                    "low" === NS ? tS(SS) : (0, dS.reloadBloxd)(SS)
                  }
                })), qS.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), WS()
              } else {
                const {
                  gameNameWithVariation: HS,
                  lobbyName: gS
                } = SS.getValue();
                JS.current = {
                  gameNameWithVariation: HS,
                  lobbyName: gS
                };
                const bS = (0, VS.d)(HS, gS);
                tS(bS, {
                  replace: !0
                })
              }
          })).catch((SS => {
            if (!sS()) return;
            IS.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, RS.jsxs)(RS.Fragment, {
                children: [HS("homePage:pleaseCopyError"), (0, RS.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, RS.jsx)(LS.c, {
                    errorString: SS.stack
                  })
                })]
              }),
              confirmText: HS("general:tryAgain"),
              cancelText: HS("general:cancel")
            }).getResult().then((SS => {
              !0 === SS && (0, dS.reloadBloxd)((0, VS.d)(xS.gameNameWithVariation, xS.lobbyName))
            })), WS()
          })) : tS(-1))
        })), () => {
          zS = !0
        }
      }), [aS, gS.search, gS.pathname]), (0, xS.useEffect)((() => {
        hS.disableFullscreen && (0, ES.g)() ? (0, ES.j)() : !hS.disableFullscreen && (0, ES.i)() && (0, ES.o)()
      }), [DS, hS]), (0, xS.useEffect)((() => {
        "inGame" === DS && kH()
      }), [DS, hS]), (0, xS.useEffect)((() => {
        "inGame" !== DS && bS.b.set({
          openInGameMenuName: null
        })
      }), [DS]);
      const WS = function(SS) {
        const HS = (0, bS.g)(SS),
          [gS, tS] = (0, xS.useState)(0),
          [XS, qS] = (0, xS.useState)(!1);
        (0, NS.g)("gameJoined", (() => {
          (0, bS.g)(bS.b.get("gameState")) && (tS((SS => SS + 1)), qS(!0))
        })), (0, xS.useEffect)((() => {
          HS || qS(!1)
        }), [HS]);
        const uS = "inGame" === SS;
        return {
          mounted: uS || HS && XS,
          shown: uS,
          key: gS
        }
      }(DS);
      return (0, RS.jsx)(RS.Fragment, {
        children: WS.mounted && (0, RS.jsx)(XS.InGameUi, {
          shown: WS.shown
        }, WS.key)
      })
    }
  },
  5133: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(1286);
    async function bS(SS) {
      const HS = await fetch(`${tS.clientSideServerUrls.s3Url}/${SS}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === HS.status || 403 === HS.status) return null;
      if (!HS.ok) throw new Error(`Failed to download the texture pack (${HS.status})`);
      return await HS.json()
    }
  },
  9102: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(1406),
      bS = gS(1309),
      XS = gS(680);

    function xS(SS) {
      return SS = function(SS, HS) {
        var gS;
        const tS = new URLSearchParams(HS),
          bS = tS.get("lobby"),
          XS = tS.get("vm"),
          xS = null !== (gS = bS) && void 0 !== gS ? gS : SS.lobbyName,
          NS = null !== XS && void 0 !== XS ? XS : SS.directJoinVmUrl;
        if (xS === SS.lobbyName && NS === SS.directJoinVmUrl) return SS;
        return {
          ...SS,
          lobbyName: xS,
          directJoinVmUrl: NS
        }
      }(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), SS = function(SS) {
        if ((0, XS.K)(SS.directJoinVmUrl)) return SS;
        const HS = (0, bS.$)(SS.directJoinVmUrl);
        null === HS && (SS.directJoinVmUrl = void 0);
        return SS
      }(SS = function(SS) {
        if ((0, XS.K)(SS.gameNameWithVariation)) return SS;
        return SS.gameNameWithVariation = (0, tS.i)(SS.gameNameWithVariation), SS
      }(SS))
    }
  },
  9099: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    let tS = !1;

    function bS() {
      tS = !0
    }

    function XS() {
      return tS
    }
  },
  9096: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => aS,
      f: () => kS,
      i: () => KS
    });
    var tS = gS(3320),
      bS = gS(2403),
      XS = gS(2242),
      xS = gS(4768),
      NS = gS(3639),
      qS = gS(9099);
    let uS = null;

    function IS() {
      return Promise.all([gS.e(74), gS.e(77), gS.e(89), gS.e(211), gS.e(76), gS.e(210), gS.e(134), gS.e(196), gS.e(139), gS.e(87), gS.e(218), gS.e(63)]).then((() => gS(40704)))
    }

    function fS() {
      Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(89), gS.e(86), gS.e(269), gS.e(189), gS.e(223), gS.e(247), gS.e(218), gS.e(46)]).then((() => gS(41033))).catch((() => {}))
    }

    function kS() {
      return xS.c.cancelDownloadForJoin(), (0, NS.d)(), (0, bS.h)(), (0, qS.f)(), (0, XS.h)(), fS(), Promise.all([gS.e(77), gS.e(89), gS.e(211), gS.e(210), gS.e(134), gS.e(139), gS.e(58)]).then((() => gS(41066))).then((SS => {
        let {
          startJoinLoad: HS
        } = SS;
        HS()
      }), (() => {})), uS ??= IS().then((SS => (SS.startWasmPlay(), SS.followPageUiPack((SS => {
        tS.d.showGamePack(SS)
      })), SS)), (SS => {
        throw uS = null, SS
      })), uS
    }

    function aS() {
      return fS(), gS.e(271).then((() => gS(41075))).catch((() => {})), IS().then((() => {}))
    }

    function KS() {
      return IS().then((SS => {
        SS.startWasmPreviews(), SS.prefetchWasmPreviews()
      }))
    }
  },
  9093: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => xS,
      j: () => NS,
      l: () => uS,
      m: () => qS
    });
    var tS = gS(198),
      bS = gS(4749);

    function XS(SS) {
      return xS(SS) === tS.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function xS(SS) {
      return "object" === typeof SS && null !== SS ? SS.code : void 0
    }

    function NS(SS) {
      var HS;
      return null !== (HS = Object.keys(bS.e).find((HS => bS.e[HS] === SS))) && void 0 !== HS ? HS : null
    }

    function qS(SS) {
      return "notWhitelisted" === SS ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const uS = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);