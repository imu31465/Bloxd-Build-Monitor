export const id = 110;
export const ids = [110];
export const modules = {
  8893: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => pz
    });
    var QC = ZC(1463),
      wC = ZC(20),
      bC = ZC(4591),
      nC = ZC(48),
      fC = ZC(1383);
    var oC = ZC(1840),
      qC = ZC(1453),
      FC = ZC(1307),
      WC = ZC(1143),
      NC = ZC(134),
      MC = ZC(184),
      gC = ZC(970),
      SC = ZC(979),
      pC = ZC(1169),
      PC = ZC(2311),
      GC = ZC(1439),
      RC = ZC(1078),
      AC = ZC(8897),
      xC = ZC(1477);

    function JC(CC, zC) {
      const ZC = !0 === zC.debugResult.gameRefused,
        QC = ZC || zC.code === NC.l.REQUEST_TO_MATCHMAKING ? (0, AC.i)(zC.message) : null;
      if (null !== QC) return IC(CC, CC((0, AC.n)(QC)), CC(AC.m[QC])), !0;
      if (ZC) return async function(CC) {
        const {
          gameNameWithVariation: zC,
          lobbyName: ZC,
          shownLobbyName: QC
        } = oC.gameBridge.latest("connectedGame"), wC = "classic" === zC && (0, pC.O)(ZC) ? QC : await (0, PC.d)(CC, zC, ZC);
        return "" !== wC ? CC("general:cantJoinGame", {
          game: wC
        }) : CC("general:cantJoinThisGame")
      }(CC).then((ZC => {
        IC(CC, ZC, zC.message)
      })), !0;
      const {
        joinFailure: wC
      } = zC.debugResult, bC = "refused" === (null === wC || void 0 === wC ? void 0 : wC.at) ? wC.code : null;
      return bC === MC.e.schematicNotPublished.code ? (async function(CC, zC) {
        const ZC = (0, gC.m)(oC.gameBridge.latest("connectedGame").gameNameWithVariation),
          QC = await async function(CC) {
            try {
              const zC = await GC.d.getGame(await RC.userContextManager.getCurrentUserContext(), CC, !0);
              return zC.gamePublished ? null : zC.name
            } catch (zC) {
              return zC instanceof NC.d && 435 === zC.httpCode || console.error(`Failed to get unpublished game ${CC}`, zC), null
            }
          }(ZC);
        if (null === QC) return void IC(CC, CC("general:cantJoinThisGame"), zC);
        const wC = await FC.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: CC("studio:gameNotPublishedTitle", {
            game: QC
          }),
          confirmText: CC("studio:publishInStudio"),
          cancelText: CC("general:cancel")
        }).getResult();
        !0 === wC && (0, qC.navigatePreserveSearch)((0, xC.o)((0, SC.d)(ZC), "manage"))
      }(CC, zC.message), !0) : bC === MC.e.schematicBanned.code && (IC(CC, CC("general:cantJoinThisGame"), zC.message), !0)
    }

    function IC(CC, zC, ZC) {
      FC.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: zC,
        subtitle: ZC,
        confirmText: CC("general:ok"),
        cancelText: ""
      })
    }
    var iC = ZC(4525),
      vC = ZC(28),
      eC = ZC(1187),
      hC = ZC(1645),
      KC = ZC(77),
      YC = ZC(1263),
      dC = ZC(1375),
      mC = ZC(4462),
      HC = ZC(4288),
      EC = ZC(4250),
      lC = ZC(3229),
      XC = ZC(1284),
      cC = ZC(728),
      uC = ZC(1171),
      rC = ZC(3288),
      sC = ZC(3137),
      TC = ZC(1314),
      aC = ZC(1295),
      tC = ZC(4925),
      DC = ZC(8904),
      jC = ZC(2943),
      yC = ZC(1056);

    function LC(CC) {
      let {
        onApply: zC,
        onSkip: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)();
      return (0, nC.useEffect)((() => {
        jC.h.skipPlayWait()
      }), []), (0, yC.jsx)(TC.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, yC.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [QC("customTexturePack:downloadPrompt"), (0, yC.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: QC("customTexturePack:authorWarning")
          }), (0, yC.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: QC("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: zC
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ZC
        }
      })
    }
    async function UC() {
      let CC = !1;
      const zC = FC.NotificationProvider.showCustomPopup({
        body: zC => (0, yC.jsx)(LC, {
          onApply: () => {
            CC = !0, zC()
          },
          onSkip: zC
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await zC.getResult(), CC
    }
    let BC = {
      wanted: !1
    };
    let OC = null;

    function kC(CC) {
      CC.setGamePackConfirm(UC), OC = CC
    }
    var VC = ZC(3452);

    function Cz(CC) {
      let {
        schematicId: zC,
        texturePackKey: ZC,
        onClose: QC
      } = CC;
      const [wC, bC] = (0, nC.useState)("prompt"), [fC, oC] = (0, nC.useState)(null), qC = (0, VC.e)();

      function FC() {
        QC()
      }
      return "prompt" === wC ? (0, yC.jsx)(LC, {
        onApply: async function() {
          bC("downloading");
          try {
            const CC = await async function(CC, zC) {
              const ZC = await (0, tC.d)(zC);
              if (ZC) return {
                pack: ZC,
                key: zC
              };
              const QC = await RC.userContextManager.getCurrentUserContext(),
                wC = (await GC.d.getGame(QC, CC, !0)).customTexturePackKey;
              if (!wC) return null;
              const bC = await (0, tC.d)(wC);
              if (!bC) throw new Error("The texture pack could not be found");
              return {
                pack: bC,
                key: wC
              }
            }(zC, ZC);
            if (!qC.current) return;
            if (!CC) return void QC();
            if ((0, rC.h)(CC.pack)) return void bC("refused");
            sC.c.setFromJson(CC.pack, "customGame"), await sC.c.saveTemporaryTexturePack(CC.key), qC.current && (0, hC.reloadBloxd)()
          } catch (CC) {
            oC(CC instanceof Error ? CC.message : String(CC)), bC("error")
          }
        },
        onSkip: FC
      }) : "downloading" === wC ? (0, yC.jsx)(TC.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, yC.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, yC.jsx)(aC.d, {
            showFace: !0
          })
        })
      }) : "error" === wC ? (0, yC.jsx)(TC.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: fC,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: FC
        }
      }) : "refused" === wC ? (0, yC.jsx)(TC.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: FC
        }
      }) : null
    }
    var zz = ZC(8912),
      Zz = ZC(4240),
      Qz = ZC(1692),
      wz = ZC(2927),
      bz = ZC(4242),
      nz = ZC(2048),
      fz = ZC(4617),
      oz = ZC(1257),
      qz = ZC(1642),
      Fz = ZC(615),
      Wz = ZC(694);

    function Nz() {
      const CC = wC.b.get("clientEscMenuOptions");
      oC.gameBridge.send("setLookSensitivity", wC.b.get("isTouchScreen") ? (0, Wz.o)(CC) : CC.mouseSensitivity)
    }

    function Mz(CC) {
      const zC = CC.asError();
      if (zC.debugResult.wZ || (0, qz.c)(zC.debugResult.error)) return;
      console.log("Failed to join lobby:", zC.message);
      const ZC = "timedOut" === zC.debugResult.gameServerUnreachable;
      (0, wz.reportClientError)("matchmake_failed", zC.message, ZC ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : NC.l[zC.code]);
      const {
        error: QC
      } = zC.debugResult;
      if (QC instanceof lC.l && "default" !== QC.packSource) {
        const CC = (0, bz.d)("js", "game" === QC.packSource ? "game" : "page", (0, bz.g)(QC));
        (0, wz.reportClientError)("texture_pack", QC, CC)
      }
    }

    function gz(CC) {
      if (null === CC || void 0 === CC || !CC.isError()) return !1;
      const zC = CC.asError();
      return zC.code === NC.l.REQUEST_TO_MATCHMAKING && !(0, qz.c)(zC.debugResult.error)
    }
    async function Sz(CC, zC, ZC) {
      const QC = (0, fz.H)(zC);
      async function nC(CC, zC, ZC, QC) {
        var nC;
        if (QC.aborted) return null;
        null === wC.b.get("gameEntrySource") && (0, wC.g)("directPlayUrl"), Fz.z && (0, DC.h)().catch((() => {})), wC.b.set({
          gameState: "findingLobby"
        }), vC.o.bp("loadingScreenState", "loadingPage:findingLobby");
        const fC = await RC.userContextManager.getCurrentUserContext();
        oC.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: zC,
          discordContext: CC instanceof uC.d ? CC.getSerialisableParams() : null
        }), (0, Qz.h)(null !== (nC = jC.h.playInputAt()) && void 0 !== nC ? nC : performance.now());
        const qC = await async function(CC, zC, ZC, QC, wC) {
          try {
            await bC.reqLibsLoadedPromise
          } catch (nC) {
            return eC.e.errorWithCode(nC.toString(), NC.l.LOAD_REQUIRED_LIBS, {
              error: nC,
              severity: "medium"
            })
          }
          return vC.o.bp("matchmakeAndPlayStepCompleted", {
            step: NC.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, bC.matchmakeAndPlayMaybeUnloaded)(CC, zC, ZC, QC, wC)
        }(CC, zC, ZC, fC, QC), FC = qC.isError() ? qC.asError() : null;
        if (QC.aborted) return FC && Mz(qC), oC.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== FC && void 0 !== FC && FC.debugResult.wZ) return console.log("Join cancelled:", FC.message), null;
        if (FC) return qC;
        const {
          gameNameWithVariation: WC,
          lobbyName: MC
        } = qC.getValue();
        return Nz(), (0, oz.B)().setGameViewShown(!0), fC.recordJoin(WC, MC), (0, YC.H)(), qC
      }
      return QC && (0, wC.g)("updateRejoin"), (0, nz.i)((async wC => {
        try {
          var bC;
          let fC = CC,
            oC = await nC(fC, zC, ZC, wC);
          for (let CC = 0; QC && CC < fz.i && (gz(oC) && await (0, fz.J)((0, fz.r)(CC), wC)); CC++) fC = (0, fz.u)(fC, CC + 1, "string" === typeof fC && (0, pC.U)(fC)), oC = await nC(fC, zC, ZC, wC);
          return null !== (bC = oC) && void 0 !== bC && bC.isError() && Mz(oC), oC
        } catch (fC) {
          if ((0, wz.reportClientError)("matchmake_failed", fC, "unexpected"), oC.gameBridge.send("leaveGame", {
              reloadPath: wC.aborted ? null : "/"
            }), wC.aborted) return null;
          throw fC
        }
      }), (async CC => {
        var ZC;
        if (QC) return;
        const wC = (0, YC.x)();
        null !== wC && (await wC, CC.aborted) || (null !== (ZC = cC.d[zC]) && void 0 !== ZC && ZC.playAdBeforeMatchmaking ? (jC.h.skipPlayWait(), await new Promise((CC => {
          (0, YC.X)((() => {
            CC(!0)
          }), "video_start")
        }))) : (0, YC.X)((() => {}), "video_start"))
      }))
    }

    function pz() {
      const {
        t: CC
      } = (0, WC.y)(), zC = (0, qC.useNavigatePreserveSearch)(), ZC = (0, QC.v)(), MC = (0, QC.C)(), SC = (0, nC.useRef)({
        t: CC,
        navigate: zC
      });
      SC.current = {
        t: CC,
        navigate: zC
      };
      const AC = (0, nC.useRef)("");
      AC.current = ZC.pathname + ZC.search;
      const {
        gameState: xC,
        clientEscMenuOptions: IC
      } = (0, wC.k)(["gameState", "clientEscMenuOptions"]), vC = (0, nC.useRef)(null), eC = (0, nC.useRef)(!1);
      var cC;
      (0, nz.j)(), (0, nz.m)(), cC = Fz.z, (0, nC.useEffect)((() => {
        if (!cC) return;
        let CC = !0;
        return (0, DC.h)().then((zC => {
          CC && kC(zC)
        })).catch((() => {})), () => {
          var zC;
          CC = !1, BC.wanted = !1, null === (zC = OC) || void 0 === zC || zC.setGamePackConfirm(null), OC = null
        }
      }), [cC]), (0, nC.useEffect)((() => {
        var CC;
        (0, bC.needGameClientNow)();
        const {
          t: zC,
          navigate: QC
        } = SC.current, nC = (0, zz.b)(MC, ZC.search);
        if (MC.lobbyName && !new URLSearchParams(ZC.search).has("lobby")) return void QC((0, XC.b)(nC.gameNameWithVariation, nC.lobbyName), {
          replace: !0
        });
        let fC = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ZC.pathname) {
          const CC = wC.b.get("discordContext");
          if (!CC) return void QC("/");
          fC = iC.d.setupDiscordLobby(CC, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: CC
          }))).catch((zC => (console.error("Failed to setup discord lobby", zC), {
            shouldMatchmake: !1,
            discordContext: CC
          })))
        } else if (!nC.gameNameWithVariation || !(0, pC.R)(nC.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${nC.gameNameWithVariation}`), void QC(-1);
        const WC = vC.current;
        if (null !== WC && nC.gameNameWithVariation === WC.gameNameWithVariation && nC.lobbyName === WC.lobbyName) return;
        if (oC.gameBridge.latest("connectedGame").replay) return void(0, nz.f)(null);
        if ("releaseCountdown" === (null === (CC = (0, PC.h)(nC.gameNameWithVariation)) || void 0 === CC ? void 0 : CC.type)) return console.error(`Game hasn't been released yet: ${nC.gameNameWithVariation}`), void QC(-1);
        const xC = eC.current;
        eC.current = !1, (0, YC.A)(), wC.b.set({
          gameState: "loadingScreen"
        });
        const IC = function() {
            BC.wanted = !1;
            const CC = {
              wanted: !0
            };
            return BC = CC, () => CC.wanted
          }(),
          dC = nC.gameNameWithVariation;
        if (dC && (Fz.z || (0, gC.i)(dC))) {
          const CC = Fz.z ? Promise.all([(0, DC.h)(), RC.userContextManager.getCurrentUserContext()]).then((CC => {
            let [zC, ZC] = CC;
            if (IC()) return kC(zC), zC.packForGame(dC, ZC, IC)
          })) : async function(CC) {
            await sC.c.indexedDbValuesAreLoaded();
            const zC = await RC.userContextManager.getCurrentUserContext(),
              ZC = (0, gC.m)(CC);
            let QC;
            try {
              QC = await GC.d.getGame(zC, ZC, !0)
            } catch (nC) {
              return void console.error("Failed to get game", nC)
            }
            const wC = QC.customTexturePackKey;
            if (!wC) return void(sC.c.isUsingTemporaryTexturePack() && ((0, hC.reloadBloxd)(), await new Promise((() => {}))));
            if (sC.c.isUsingTemporaryTexturePack() && sC.c.getTemporaryTexturePackSource() === wC) return;
            const bC = FC.NotificationProvider.showCustomPopup({
              body: CC => (0, yC.jsx)(Cz, {
                schematicId: ZC,
                texturePackKey: wC,
                onClose: CC
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await bC.getResult()
          }(dC), zC = fC;
          fC = CC.catch((CC => {
            console.error("Failed to check for custom texture pack", CC)
          })).then((() => zC))
        }
        const cC = null !== vC.current;
        vC.current = null, (0, nz.f)(null);
        const uC = () => {
          xC ? (0, qC.navigateToHomePage)() : (eC.current = cC, QC(-1))
        };
        let rC = !1;
        const TC = ZC.pathname + ZC.search,
          aC = () => !rC && AC.current === TC;
        return fC.then((CC => {
          let {
            shouldMatchmake: ZC,
            discordContext: bC
          } = CC;
          aC() && (ZC ? Sz(null !== bC && void 0 !== bC ? bC : nC.lobbyName, bC ? "classic" : nC.gameNameWithVariation, nC.directJoinVmUrl).then((CC => {
            if (null !== CC && aC())
              if (CC.isError()) {
                var ZC;
                const bC = CC.asError(),
                  fC = null !== (ZC = bC.debugResult.severity) && void 0 !== ZC ? ZC : "high";
                if ((0, qz.c)(bC.debugResult.error)) return void qz.e.reload();
                if (bC.code === NC.l.SHADER_PACK) return void(0, Zz.e)(bC.message, QC);
                const qC = wC.b.get("gameEntrySource"),
                  WC = bC.code === NC.l.INITIALISE_WEBGL ? (0, HC.c)() : null,
                  {
                    error: MC
                  } = bC.debugResult;
                let gC;
                if (JC(zC, bC)) gC = Promise.resolve(!1);
                else if (null !== WC) gC = (0, HC.g)(WC);
                else if (MC instanceof lC.l) gC = (0, EC.e)(MC);
                else {
                  let CC;
                  switch (fC) {
                    case "low":
                      CC = "face-diagonal-mouth";
                      break;
                    case "medium":
                      CC = "face-worried";
                      break;
                    case "high":
                      CC = "face-dizzy"
                  }
                  gC = FC.NotificationProvider.showPromptPopup({
                    icon: CC,
                    title: NC.A[bC.code],
                    subtitle: (0, yC.jsxs)(yC.Fragment, {
                      children: [bC.debugResult.gameServerUnreachable ? zC((0, KC.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : bC.message, bC.debugResult.error instanceof Error && (0, yC.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, yC.jsx)(mC.e, {
                          errorString: bC.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: zC("general:tryAgain"),
                    cancelText: zC("general:cancel")
                  }).getResult().then((CC => !0 === CC))
                }
                gC.then((CC => {
                  if (CC) {
                    (0, wC.g)(qC);
                    const CC = (0, XC.b)(nC.gameNameWithVariation, nC.lobbyName);
                    "low" === fC ? QC(CC) : (0, hC.reloadBloxd)(CC)
                  }
                })), oC.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), uC()
              } else {
                const {
                  gameNameWithVariation: zC,
                  lobbyName: ZC
                } = CC.getValue();
                vC.current = {
                  gameNameWithVariation: zC,
                  lobbyName: ZC
                };
                const wC = (0, XC.b)(zC, ZC);
                QC(wC, {
                  replace: !0
                })
              }
          })).catch((CC => {
            if (!aC()) return;
            FC.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, yC.jsxs)(yC.Fragment, {
                children: [zC("homePage:pleaseCopyError"), (0, yC.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, yC.jsx)(mC.e, {
                    errorString: CC.stack
                  })
                })]
              }),
              confirmText: zC("general:tryAgain"),
              cancelText: zC("general:cancel")
            }).getResult().then((CC => {
              !0 === CC && (0, hC.reloadBloxd)((0, XC.b)(nC.gameNameWithVariation, nC.lobbyName))
            })), uC()
          })) : QC(-1))
        })), () => {
          rC = !0
        }
      }), [MC, ZC.search, ZC.pathname]), (0, nC.useEffect)((() => {
        IC.disableFullscreen && (0, dC.h)() ? (0, dC.n)() : !IC.disableFullscreen && (0, dC.l)() && (0, dC.x)()
      }), [xC, IC]), (0, nC.useEffect)((() => {
        "inGame" === xC && Nz()
      }), [xC, IC]), (0, nC.useEffect)((() => {
        "inGame" !== xC && wC.b.set({
          openInGameMenuName: null
        })
      }), [xC]);
      const uC = function(CC) {
        const zC = (0, wC.f)(CC),
          [ZC, QC] = (0, nC.useState)(0),
          [bC, oC] = (0, nC.useState)(!1);
        (0, fC.c)("gameJoined", (() => {
          (0, wC.f)(wC.b.get("gameState")) && (QC((CC => CC + 1)), oC(!0))
        })), (0, nC.useEffect)((() => {
          zC || oC(!1)
        }), [zC]);
        const qC = "inGame" === CC;
        return {
          mounted: qC || zC && bC,
          shown: qC,
          key: ZC
        }
      }(xC);
      return (0, yC.jsx)(yC.Fragment, {
        children: uC.mounted && (0, yC.jsx)(bC.InGameUi, {
          shown: uC.shown
        }, uC.key)
      })
    }
  },
  4925: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(1149);
    async function wC(CC) {
      const zC = await fetch(`${QC.clientSideServerUrls.s3Url}/${CC}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zC.status || 403 === zC.status) return null;
      if (!zC.ok) throw new Error(`Failed to download the texture pack (${zC.status})`);
      return await zC.json()
    }
  },
  8912: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1284),
      wC = ZC(1169),
      bC = ZC(600);

    function nC(CC) {
      return CC = function(CC, zC) {
        var ZC;
        const QC = new URLSearchParams(zC),
          wC = QC.get("lobby"),
          bC = QC.get("vm"),
          nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
          fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
        if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
        return {
          ...CC,
          lobbyName: nC,
          directJoinVmUrl: fC
        }
      }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
        if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
        const zC = (0, wC.hb)(CC.directJoinVmUrl);
        null === zC && (CC.directJoinVmUrl = void 0);
        return CC
      }(CC = function(CC) {
        if ((0, bC.H)(CC.gameNameWithVariation)) return CC;
        return CC.gameNameWithVariation = (0, QC.k)(CC.gameNameWithVariation), CC
      }(CC))
    }
  },
  8907: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => wC
    });
    let QC = !1;

    function wC() {
      QC = !0
    }

    function bC() {
      return QC
    }
  },
  8904: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => MC,
      h: () => NC,
      j: () => gC
    });
    var QC = ZC(3137),
      wC = ZC(2224),
      bC = ZC(2050),
      nC = ZC(4582),
      fC = ZC(3464),
      oC = ZC(8907);
    let qC = null;

    function FC() {
      return Promise.all([ZC.e(74), ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(76), ZC.e(210), ZC.e(134), ZC.e(196), ZC.e(139), ZC.e(87), ZC.e(218), ZC.e(63)]).then((() => ZC(40510)))
    }

    function WC() {
      Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(89), ZC.e(86), ZC.e(269), ZC.e(189), ZC.e(223), ZC.e(247), ZC.e(218), ZC.e(46)]).then((() => ZC(40832))).catch((() => {}))
    }

    function NC() {
      return nC.e.cancelDownloadForJoin(), (0, fC.b)(), (0, wC.f)(), (0, oC.g)(), (0, bC.k)(), WC(), Promise.all([ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(210), ZC.e(134), ZC.e(139), ZC.e(58)]).then((() => ZC(40885))).then((CC => {
        let {
          startJoinLoad: zC
        } = CC;
        zC()
      }), (() => {})), qC ??= FC().then((CC => (CC.startWasmPlay(), CC.followPageUiPack((CC => {
        QC.c.showGamePack(CC)
      })), CC)), (CC => {
        throw qC = null, CC
      })), qC
    }

    function MC() {
      return WC(), ZC.e(271).then((() => ZC(40888))).catch((() => {})), FC().then((() => {}))
    }

    function gC() {
      return FC().then((CC => {
        CC.startWasmPreviews(), CC.prefetchWasmPreviews()
      }))
    }
  },
  8897: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      e: () => nC,
      i: () => fC,
      m: () => qC,
      n: () => oC
    });
    var QC = ZC(184),
      wC = ZC(4562);

    function bC(CC) {
      return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function nC(CC) {
      return "object" === typeof CC && null !== CC ? CC.code : void 0
    }

    function fC(CC) {
      var zC;
      return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
    }

    function oC(CC) {
      return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qC = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);