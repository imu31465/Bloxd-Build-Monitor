export const id = 123;
export const ids = [123];
export const modules = {
  9484: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => tX
    });
    var cU = zU(1577),
      yU = zU(27),
      QU = zU(5101),
      AU = zU(61),
      FU = zU(1492);
    var oU = zU(2005),
      DU = zU(1568),
      EU = zU(1410),
      YU = zU(1193),
      NU = zU(9489),
      IU = zU(5026),
      pU = zU(173),
      aU = zU(1131),
      tU = zU(31),
      gU = zU(1262),
      kU = zU(1800),
      GU = zU(97),
      BU = zU(1349),
      ZU = zU(1482),
      RU = zU(4962),
      PU = zU(4762),
      WU = zU(4706),
      dU = zU(3612),
      LU = zU(2494),
      eU = zU(1376),
      CU = zU(825),
      wU = zU(1241),
      qU = zU(1079),
      OU = zU(1236),
      SU = zU(3673),
      rU = zU(3519),
      uU = zU(1414),
      fU = zU(1384),
      iU = zU(5527),
      HU = zU(9502),
      MU = zU(3270),
      vU = zU(1305);

    function VU(UU) {
      let {
        onApply: XU,
        onSkip: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)();
      return (0, AU.useEffect)((() => {
        MU.i.skipPlayWait()
      }), []), (0, vU.jsx)(uU.k, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, vU.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [cU("customTexturePack:downloadPrompt"), (0, vU.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: cU("customTexturePack:authorWarning")
          }), (0, vU.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: cU("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: XU
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: zU
        }
      })
    }
    async function sU() {
      let UU = !1;
      const XU = EU.NotificationProvider.showCustomPopup({
        body: XU => (0, vU.jsx)(VU, {
          onApply: () => {
            UU = !0, XU()
          },
          onSkip: XU
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await XU.getResult(), UU
    }
    let nU = {
      wanted: !1
    };
    let mU = null;

    function lU(UU) {
      UU.setGamePackConfirm(sU), mU = UU
    }
    var xU = zU(3873),
      JU = zU(1545),
      jU = zU(42),
      KU = zU(3626);

    function bU(UU) {
      let {
        schematicId: XU,
        texturePackKey: zU,
        onClose: cU
      } = UU;
      const [yU, QU] = (0, AU.useState)("prompt"), [FU, oU] = (0, AU.useState)(null), DU = (0, xU.b)();

      function EU() {
        cU()
      }
      return "prompt" === yU ? (0, vU.jsx)(VU, {
        onApply: async function() {
          QU("downloading");
          try {
            const UU = await async function(UU, XU) {
              const zU = await (0, iU.c)(XU);
              if (zU) return {
                pack: zU,
                key: XU
              };
              const cU = await aU.userContextManager.getCurrentUserContext(),
                yU = (await JU.c.getGame(cU, UU, !0)).customTexturePackKey;
              if (!yU) return null;
              const QU = await (0, iU.c)(yU);
              if (!QU) throw new Error("The texture pack could not be found");
              return {
                pack: QU,
                key: yU
              }
            }(XU, zU);
            if (!DU.current) return;
            if (!UU) return void cU();
            if ((0, SU.n)(UU.pack)) return void QU("refused");
            const yU = rU.c.toJson(),
              AU = rU.c.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (rU.c.setFromJson(UU.pack, "customGame"), await rU.c.saveTemporaryTexturePack(UU.key), DU.current) return void(0, kU.reloadBloxd)();
            rU.c.setFromJson(yU, AU), await (0, KU.t)(jU.g)
          } catch (UU) {
            oU(UU instanceof Error ? UU.message : String(UU)), QU("error")
          }
        },
        onSkip: EU
      }) : "downloading" === yU ? (0, vU.jsx)(uU.k, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, vU.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, vU.jsx)(fU.b, {
            showFace: !0
          })
        })
      }) : "error" === yU ? (0, vU.jsx)(uU.k, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: FU,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: EU
        }
      }) : "refused" === yU ? (0, vU.jsx)(uU.k, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: EU
        }
      }) : null
    }
    var TU = zU(9510),
      hU = zU(4700),
      UX = zU(1857),
      XX = zU(1835),
      zX = zU(4704),
      cX = zU(2205),
      yX = zU(9516);
    var QX = zU(5161),
      AX = zU(1322),
      FX = zU(1791),
      oX = zU(687),
      DX = zU(781),
      EX = zU(1877);

    function YX() {
      const UU = yU.e.get("clientEscMenuOptions");
      oU.gameBridge.send("setLookSensitivity", yU.e.get("isTouchScreen") ? (0, DX.s)(UU) : UU.mouseSensitivity)
    }
    const NX = 45e3;

    function IX(UU) {
      const XU = UU.asError();
      if (XU.debugResult.QU || (0, FX.b)(XU.debugResult.error)) return;
      console.log("Failed to join lobby:", XU.message);
      const zU = "timedOut" === XU.debugResult.gameServerUnreachable;
      (0, XX.reportClientError)("matchmake_failed", XU.message, zU ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : pU.m[XU.code]);
      const {
        error: cU
      } = XU.debugResult;
      if (cU instanceof dU.q && "default" !== cU.packSource) {
        const UU = (0, zX.d)("js", "game" === cU.packSource ? "game" : "page", (0, zX.h)(cU));
        (0, XX.reportClientError)("texture_pack", cU, UU)
      }
    }

    function pX(UU) {
      if (null === UU || void 0 === UU || !UU.isError()) return !1;
      const XU = UU.asError();
      return XU.code === pU.m.REQUEST_TO_MATCHMAKING && !(0, FX.b)(XU.debugResult.error)
    }
    async function aX(UU, XU, zU) {
      const cU = (0, QX.J)(XU);
      async function AU(UU, XU, zU, cU) {
        var AU;
        if (cU.aborted) return null;
        null === yU.e.get("gameEntrySource") && (0, yU.n)("directPlayUrl"), oX.H && (0, HU.g)().catch((() => {})), yU.e.set({
          gameState: "findingLobby"
        }), tU.k.UY("loadingScreenState", "loadingPage:findingLobby");
        const FU = await aU.userContextManager.getCurrentUserContext();
        oU.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: XU,
          discordContext: UU instanceof wU.f ? UU.getSerialisableParams() : null
        }), (0, UX.h)(null !== (AU = MU.i.playInputAt()) && void 0 !== AU ? AU : performance.now());
        const DU = await async function(UU, XU, zU, cU, yU) {
          try {
            await (0, EX.l)(QU.reqLibsLoadedPromise, NX, "Required libraries timed out")
          } catch (AU) {
            const UU = AU instanceof EX.g ? `Required libraries still loading after ${NX/1e3} s: ${(0,QU.requiredLibsPending)().join(", ")}` : AU.toString();
            return gU.c.errorWithCode(UU, pU.m.LOAD_REQUIRED_LIBS, {
              error: AU,
              severity: "medium"
            })
          }
          return tU.k.UY("matchmakeAndPlayStepCompleted", {
            step: pU.m.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, QU.matchmakeAndPlayMaybeUnloaded)(UU, XU, zU, cU, yU)
        }(UU, XU, zU, FU, cU), EU = DU.isError() ? DU.asError() : null;
        if (cU.aborted) return EU && IX(DU), oU.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== EU && void 0 !== EU && EU.debugResult.QU) return console.log("Join cancelled:", EU.message), null;
        if (EU) return DU;
        const {
          gameNameWithVariation: YU,
          lobbyName: NU
        } = DU.getValue();
        return YX(), (0, AX.B)().setGameViewShown(!0), FU.recordJoin(YU, NU), (0, BU.I)(), DU
      }
      return cU && (0, yU.n)("updateRejoin"), (0, cX.l)((async yU => {
        try {
          var QU;
          let FU = UU,
            oU = await AU(FU, XU, zU, yU);
          for (let UU = 0; cU && UU < QX.k && (pX(oU) && await (0, QX.L)((0, QX.r)(UU), yU)); UU++) FU = (0, QX.t)(FU, UU + 1, "string" === typeof FU && (0, OU.G)(FU)), oU = await AU(FU, XU, zU, yU);
          return null !== (QU = oU) && void 0 !== QU && QU.isError() && IX(oU), oU
        } catch (FU) {
          if ((0, XX.reportClientError)("matchmake_failed", FU, "unexpected"), oU.gameBridge.send("leaveGame", {
              reloadPath: yU.aborted ? null : "/"
            }), yU.aborted) return null;
          throw FU
        }
      }), (async UU => {
        var zU;
        if (cU) return;
        const yU = (0, BU.B)();
        null !== yU && (await yU, UU.aborted) || (null !== (zU = CU.d[XU]) && void 0 !== zU && zU.playAdBeforeMatchmaking ? (MU.i.skipPlayWait(), await new Promise((UU => {
          (0, BU.bb)((() => {
            UU(!0)
          }), "video_start")
        }))) : (0, BU.bb)((() => {}), "video_start"))
      }))
    }

    function tX() {
      const {
        t: UU
      } = (0, YU.I)(), XU = (0, DU.useNavigatePreserveSearch)(), zU = (0, cU.w)(), wU = (0, cU.C)(), SU = (0, AU.useRef)({
        t: UU,
        navigate: XU
      });
      SU.current = {
        t: UU,
        navigate: XU
      };
      const uU = (0, AU.useRef)("");
      uU.current = zU.pathname + zU.search;
      const {
        gameState: fU,
        clientEscMenuOptions: iU
      } = (0, yU.q)(["gameState", "clientEscMenuOptions"]), MU = (0, AU.useRef)(null), VU = (0, AU.useRef)(!1);
      var sU;
      (0, AU.useEffect)((() => () => {
        tU.k.UY("leftPlayPage")
      }), []), (0, cX.m)(), (0, cX.o)(), sU = oX.H, (0, AU.useEffect)((() => {
        if (!sU) return;
        let UU = !0;
        return (0, HU.g)().then((XU => {
          UU && lU(XU)
        })).catch((() => {})), () => {
          var XU;
          UU = !1, nU.wanted = !1, null === (XU = mU) || void 0 === XU || XU.setGamePackConfirm(null), mU = null
        }
      }), [sU]), (0, AU.useEffect)((() => {
        var UU, XU, cU;
        (0, QU.needGameClientNow)();
        const {
          t: AU,
          navigate: FU
        } = SU.current, YU = (0, TU.d)(wU, zU.search);
        if (wU.lobbyName && !new URLSearchParams(zU.search).has("lobby")) return void FU((0, eU.b)(YU.gameNameWithVariation, YU.lobbyName), {
          replace: !0
        });
        let ZU = Promise.resolve({
          shouldMatchmake: !0
        });
        const fU = new AbortController;
        if ("/play/discord-custom-lobby" === zU.pathname) {
          const UU = yU.e.get("discordContext");
          if (!UU) return void FU("/");
          ZU = IU.d.setupDiscordLobby(UU, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: UU
          }))).catch((XU => (console.error("Failed to setup discord lobby", XU), {
            shouldMatchmake: !1,
            discordContext: UU
          })))
        } else if (!YU.gameNameWithVariation || !(0, OU.E)(YU.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${YU.gameNameWithVariation}`), void FU(-1);
        const iU = MU.current;
        if (null !== iU && YU.gameNameWithVariation === iU.gameNameWithVariation && YU.lobbyName === iU.lobbyName) return;
        if (oU.gameBridge.latest("connectedGame").replay) return void(0, cX.h)(null);
        if ("releaseCountdown" === (null === (UU = (0, LU.i)(YU.gameNameWithVariation)) || void 0 === UU ? void 0 : UU.type)) return console.error(`Game hasn't been released yet: ${YU.gameNameWithVariation}`), void FU(-1);
        const sU = VU.current;
        VU.current = !1, (0, BU.D)(), yU.e.set({
          gameState: "loadingScreen"
        });
        const mU = function() {
            nU.wanted = !1;
            const UU = {
              wanted: !0
            };
            return nU = UU, () => UU.wanted
          }(),
          xU = YU.gameNameWithVariation;
        if (xU && (oX.H || (0, qU.l)(xU))) {
          const UU = oX.H ? Promise.all([(0, HU.g)(), aU.userContextManager.getCurrentUserContext()]).then((UU => {
            let [XU, zU] = UU;
            if (mU()) return lU(XU), XU.packForGame(xU, zU, mU)
          })) : async function(UU, XU) {
            await rU.c.indexedDbValuesAreLoaded();
            const zU = await aU.userContextManager.getCurrentUserContext(),
              cU = (0, qU.p)(UU);
            let yU;
            try {
              yU = await JU.c.getGame(zU, cU, !0)
            } catch (oU) {
              return void console.error("Failed to get game", oU)
            }
            if (null !== XU && void 0 !== XU && XU.aborted) return;
            const QU = yU.customTexturePackKey;
            if (!QU) return void(rU.c.isUsingTemporaryTexturePack() && ((0, kU.reloadBloxd)(), await new Promise((() => {}))));
            if (rU.c.isUsingTemporaryTexturePack() && rU.c.getTemporaryTexturePackSource() === QU) return;
            const AU = EU.NotificationProvider.showCustomPopup({
                body: UU => (0, vU.jsx)(bU, {
                  schematicId: cU,
                  texturePackKey: QU,
                  onClose: UU
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              FU = () => {
                AU.tearDownNotification()
              };
            null === XU || void 0 === XU || XU.addEventListener("abort", FU, {
              once: !0
            }), await AU.getResult(), null === XU || void 0 === XU || XU.removeEventListener("abort", FU)
          }(xU, fU.signal), XU = ZU;
          ZU = UU.catch((UU => {
            console.error("Failed to check for custom texture pack", UU)
          })).then((() => XU))
        }
        const jU = {
          wasm: oX.H,
          game: YU.gameNameWithVariation,
          custom: void 0 !== xU && (0, qU.l)(xU),
          lobbyName: null !== (XU = YU.lobbyName) && void 0 !== XU ? XU : null,
          direct: null !== YU.directJoinVmUrl && void 0 !== YU.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === zU.pathname,
          adBeforeMatchmaking: void 0 !== xU && !0 === (null === (cU = CU.d[xU]) || void 0 === cU ? void 0 : cU.playAdBeforeMatchmaking),
          afterAnother: null !== MU.current || (0, cX.d)()
        };
        (0, yX.g)(null);
        const KU = !(UX = jU).wasm || void 0 === UX.game || UX.custom || UX.direct || UX.discord || UX.adBeforeMatchmaking || UX.afterAnother ? null : () => {
          ! function(UU, XU) {
            (0, yX.g)({
              key: (0, yX.e)(UU, XU),
              settled: Promise.all([QU.matchmakingLibrariesPromise, aU.userContextManager.getCurrentUserContext()]).then((zU => {
                let [cU, yU] = zU;
                if (void 0 === cU.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return cU.matchmakeForAhead(UU, XU, yU)
              })).catch((UU => ({
                result: gU.c.errorWithCode(String(UU), pU.m.REQUEST_TO_MATCHMAKING, {
                  error: UU,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(jU.lobbyName, jU.game)
        };
        var UX;
        const XX = null !== MU.current;
        MU.current = null, (0, cX.h)(null);
        const zX = () => {
          sU ? (0, DU.navigateToHomePage)() : (VU.current = XX, FU(-1))
        };
        let QX = !1;
        const AX = zU.pathname + zU.search,
          DX = () => !QX && uU.current === AX;
        return (0, yX.b)(ZU, KU, (UU => {
          let {
            shouldMatchmake: XU,
            discordContext: zU
          } = UU;
          DX() && (XU ? aX(null !== zU && void 0 !== zU ? zU : YU.lobbyName, zU ? "classic" : YU.gameNameWithVariation, YU.directJoinVmUrl).then((UU => {
            if (null !== UU && DX())
              if (UU.isError()) {
                var XU, zU;
                const cU = UU.asError(),
                  QU = null !== (XU = cU.debugResult.severity) && void 0 !== XU ? XU : "high";
                if (tU.k.UY("joinFailed", {
                    step: null !== (zU = cU.code) && void 0 !== zU ? zU : null,
                    severity: QU
                  }), (0, FX.b)(cU.debugResult.error)) return void FX.e.reload();
                if (cU.code === pU.m.SHADER_PACK) return void(0, hU.e)(cU.message, FU);
                const DU = yU.e.get("gameEntrySource"),
                  IU = cU.code === pU.m.INITIALISE_WEBGL ? (0, PU.d)() : null,
                  {
                    error: aU
                  } = cU.debugResult;
                let gU;
                if ((0, NU.d)(AU, cU)) gU = Promise.resolve(!1);
                else if (null !== IU) gU = (0, PU.k)(IU);
                else if (aU instanceof dU.q) gU = (0, WU.d)(aU);
                else {
                  let UU;
                  switch (QU) {
                    case "low":
                      UU = "face-diagonal-mouth";
                      break;
                    case "medium":
                      UU = "face-worried";
                      break;
                    case "high":
                      UU = "face-dizzy"
                  }
                  const XU = aU instanceof EX.g;
                  let zU = cU.message;
                  XU ? zU = AU("general:gameFilesStalled") : cU.debugResult.gameServerUnreachable && (zU = AU((0, GU.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  gU = EU.NotificationProvider.showPromptPopup({
                    icon: UU,
                    title: pU.D[cU.code],
                    subtitle: (0, vU.jsxs)(vU.Fragment, {
                      children: [zU, aU instanceof Error && !XU && (0, vU.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, vU.jsx)(RU.b, {
                          errorString: aU.stack
                        })
                      })]
                    }),
                    confirmText: AU("general:tryAgain"),
                    cancelText: AU("general:cancel")
                  }).getResult().then((UU => !0 === UU))
                }
                gU.then((UU => {
                  if (UU) {
                    (0, yU.n)(DU);
                    const UU = (0, eU.b)(YU.gameNameWithVariation, YU.lobbyName);
                    "low" === QU ? FU(UU) : (0, kU.reloadBloxd)(UU)
                  }
                })), oU.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), zX()
              } else {
                const {
                  gameNameWithVariation: XU,
                  lobbyName: zU
                } = UU.getValue();
                MU.current = {
                  gameNameWithVariation: XU,
                  lobbyName: zU
                };
                const cU = (0, eU.b)(XU, zU);
                FU(cU, {
                  replace: !0
                })
              }
          })).catch((UU => {
            if (!DX()) return;
            tU.k.UY("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            EU.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, vU.jsxs)(vU.Fragment, {
                children: [AU("homePage:pleaseCopyError"), (0, vU.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, vU.jsx)(RU.b, {
                    errorString: UU.stack
                  })
                })]
              }),
              confirmText: AU("general:tryAgain"),
              cancelText: AU("general:cancel")
            }).getResult().then((UU => {
              !0 === UU && (0, kU.reloadBloxd)((0, eU.b)(YU.gameNameWithVariation, YU.lobbyName))
            })), zX()
          })) : FU(-1))
        }), DX), () => {
          QX = !0, fU.abort()
        }
      }), [wU, zU.search, zU.pathname]), (0, AU.useEffect)((() => {
        iU.disableFullscreen && (0, ZU.d)() ? (0, ZU.i)() : !iU.disableFullscreen && (0, ZU.e)() && (0, ZU.p)({
          automatic: !0
        })
      }), [fU, iU]), (0, AU.useEffect)((() => {
        "inGame" === fU && YX()
      }), [fU, iU]), (0, AU.useEffect)((() => {
        "inGame" !== fU && yU.e.set({
          openInGameMenuName: null
        })
      }), [fU]);
      const xU = function(UU) {
        const XU = (0, yU.k)(UU),
          [zU, cU] = (0, AU.useState)(0),
          [QU, oU] = (0, AU.useState)(!1);
        (0, FU.f)("gameJoined", (() => {
          (0, yU.k)(yU.e.get("gameState")) && (cU((UU => UU + 1)), oU(!0))
        })), (0, AU.useEffect)((() => {
          XU || oU(!1)
        }), [XU]);
        const DU = "inGame" === UU;
        return {
          mounted: DU || XU && QU,
          shown: DU,
          key: zU
        }
      }(fU);
      return (0, vU.jsx)(vU.Fragment, {
        children: xU.mounted && (0, vU.jsx)(QU.InGameUi, {
          shown: xU.shown
        }, xU.key)
      })
    }
  },
  5527: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(1203);
    async function yU(UU) {
      const XU = await fetch(`${cU.clientSideServerUrls.s3Url}/${UU}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === XU.status || 403 === XU.status) return null;
      if (!XU.ok) throw new Error(`Failed to download the texture pack (${XU.status})`);
      return await XU.json()
    }
  },
  9489: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU,
      e: () => gU
    });
    var cU = zU(173),
      yU = zU(212),
      QU = zU(1079),
      AU = zU(1086),
      FU = zU(1236),
      oU = zU(2005),
      DU = zU(2494),
      EU = zU(1545),
      YU = zU(1410),
      NU = zU(1131),
      IU = zU(9493),
      pU = zU(1568),
      aU = zU(1592);

    function tU(UU, XU) {
      const zU = !0 === XU.debugResult.gameRefused,
        QU = zU || XU.code === cU.m.REQUEST_TO_MATCHMAKING ? (0, IU.h)(XU.message) : null;
      if (null !== QU) return ZU(UU, UU((0, IU.n)(QU)), UU(IU.j[QU])), !0;
      if (zU) return async function(UU) {
        const {
          gameNameWithVariation: XU,
          lobbyName: zU,
          shownLobbyName: cU
        } = oU.gameBridge.latest("connectedGame"), yU = "classic" === XU && (0, FU.A)(zU) ? cU : await (0, DU.g)(UU, XU, zU);
        return "" !== yU ? UU("general:cantJoinGame", {
          game: yU
        }) : UU("general:cantJoinThisGame")
      }(UU).then((zU => {
        ZU(UU, zU, XU.message)
      })), !0;
      const {
        joinFailure: AU
      } = XU.debugResult, EU = "refused" === (null === AU || void 0 === AU ? void 0 : AU.at) ? AU.code : null;
      return EU === yU.e.schematicNotPublished.code ? (async function(UU, XU) {
        const zU = kU(),
          cU = await BU(zU);
        if (null === cU || cU.gamePublished) return void ZU(UU, UU("general:cantJoinThisGame"), XU);
        await GU(UU, "rocket-launch", UU("studio:gameNotPublishedTitle", {
          game: cU.name
        }), UU("studio:publishInStudio"), zU)
      }(UU, XU.message), !0) : (EU === yU.e.schematicBanned.code || EU === yU.e.customGameTakenDown.code) && (BU(kU()).then((XU => {
        gU(UU, XU)
      })), !0)
    }

    function gU(UU, XU) {
      !0 !== (null === XU || void 0 === XU ? void 0 : XU.takenDown) ? ZU(UU, UU("general:cantJoinThisGame"), yU.e.customGameTakenDown.text) : GU(UU, "lock", UU("studio:gameTakenDownTitle", {
        game: XU.name
      }), UU("studio:viewInStudio"), XU.schematicId)
    }

    function kU() {
      return (0, QU.p)(oU.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function GU(UU, XU, zU, cU, yU) {
      !0 === await YU.NotificationProvider.showPromptPopup({
        icon: XU,
        title: zU,
        confirmText: cU,
        cancelText: UU("general:cancel")
      }).getResult() && (0, pU.navigatePreserveSearch)((0, aU.r)((0, AU.e)(yU), "manage"))
    }
    async function BU(UU) {
      try {
        return await EU.c.getGame(await NU.userContextManager.getCurrentUserContext(), UU, !0)
      } catch (XU) {
        return (0, EU.e)(XU) || console.error(`Failed to get game ${UU}`, XU), null
      }
    }

    function ZU(UU, XU, zU) {
      YU.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: XU,
        subtitle: zU,
        confirmText: UU("general:ok"),
        cancelText: ""
      })
    }
  },
  9510: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1376),
      yU = zU(1236),
      QU = zU(646);

    function AU(UU) {
      return UU = function(UU, XU) {
        var zU;
        const cU = new URLSearchParams(XU),
          yU = cU.get("lobby"),
          QU = cU.get("vm"),
          AU = null !== (zU = yU) && void 0 !== zU ? zU : UU.lobbyName,
          FU = null !== QU && void 0 !== QU ? QU : UU.directJoinVmUrl;
        if (AU === UU.lobbyName && FU === UU.directJoinVmUrl) return UU;
        return {
          ...UU,
          lobbyName: AU,
          directJoinVmUrl: FU
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
        if ((0, QU.P)(UU.directJoinVmUrl)) return UU;
        const XU = (0, yU.S)(UU.directJoinVmUrl);
        null === XU && (UU.directJoinVmUrl = void 0);
        return UU
      }(UU = function(UU) {
        if ((0, QU.P)(UU.gameNameWithVariation)) return UU;
        return UU.gameNameWithVariation = (0, cU.j)(UU.gameNameWithVariation), UU
      }(UU))
    }
  },
  9505: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    let cU = !1;

    function yU() {
      cU = !0
    }

    function QU() {
      return cU
    }
  },
  9516: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => yU,
      g: () => QU,
      h: () => AU
    });
    let cU = null;

    function yU(UU, XU) {
      return `${XU}\n${null!==UU&&void 0!==UU?UU:""}`
    }

    function QU(UU) {
      cU = UU
    }

    function AU(UU) {
      const XU = cU;
      return cU = null, null !== XU && XU.key === UU ? XU.settled : null
    }

    function FU(UU, XU, zU, cU) {
      let yU = !1;
      null !== XU && setTimeout((() => {
        cU() && !yU && XU()
      }), 0), UU.then((UU => {
        yU = !0, zU(UU)
      }))
    }
  },
  9502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => IU,
      g: () => NU,
      k: () => pU
    });
    var cU = zU(3519),
      yU = zU(2410),
      QU = zU(2210),
      AU = zU(5085),
      FU = zU(3887),
      oU = zU(9505);
    let DU = null;

    function EU() {
      return Promise.all([zU.e(86), zU.e(89), zU.e(103), zU.e(228), zU.e(227), zU.e(148), zU.e(212), zU.e(234), zU.e(153), zU.e(101), zU.e(236), zU.e(75)]).then((() => zU(41736)))
    }

    function YU() {
      Promise.all([zU.e(84), zU.e(87), zU.e(85), zU.e(86), zU.e(103), zU.e(100), zU.e(294), zU.e(203), zU.e(242), zU.e(268), zU.e(236), zU.e(54)]).then((() => zU(42104))).catch((() => {}))
    }

    function NU() {
      return AU.e.cancelDownloadForJoin(), (0, FU.e)(), (0, yU.g)(), (0, oU.h)(), (0, QU.l)(), YU(), Promise.all([zU.e(89), zU.e(103), zU.e(228), zU.e(227), zU.e(148), zU.e(153), zU.e(70)]).then((() => zU(42151))).then((UU => {
        let {
          startJoinLoad: XU
        } = UU;
        XU()
      }), (() => {})), DU ??= EU().then((UU => (UU.startWasmPlay(), UU.followPageUiPack((UU => {
        cU.c.showGamePack(UU)
      })), UU)), (UU => {
        throw DU = null, UU
      })), DU
    }

    function IU() {
      return YU(), zU.e(296).then((() => zU(42154))).catch((() => {})), EU().then((() => {}))
    }

    function pU() {
      return EU().then((UU => {
        UU.startWasmPreviews(), UU.prefetchWasmPreviews()
      }))
    }
  },
  9493: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => DU,
      n: () => oU
    });
    var cU = zU(212),
      yU = zU(5057);

    function QU(UU) {
      return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function AU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function FU(UU) {
      var XU;
      return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
    }

    function oU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const DU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);