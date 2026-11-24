export const id = 112;
export const ids = [112];
export const modules = {
  9019: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => qU
    });
    var WT = mT(1641),
      zT = mT(25),
      MT = mT(4749),
      gT = mT(63),
      nT = mT(1567);
    var HT = mT(2046),
      kT = mT(1633),
      jT = mT(1457),
      lT = mT(1288),
      LT = mT(166),
      pT = mT(208),
      BT = mT(1089),
      ZT = mT(1099),
      cT = mT(1321),
      vT = mT(2490),
      fT = mT(1613),
      qT = mT(1231),
      iT = mT(9025),
      bT = mT(1658);

    function OT(TT, UT) {
      const mT = !0 === UT.debugResult.gameRefused,
        WT = mT || UT.code === LT.j.REQUEST_TO_MATCHMAKING ? (0, iT.i)(UT.message) : null;
      if (null !== WT) return eT(TT, TT((0, iT.o)(WT)), TT(iT.k[WT])), !0;
      if (mT) return async function(TT) {
        const {
          gameNameWithVariation: UT,
          lobbyName: mT,
          shownLobbyName: WT
        } = HT.gameBridge.latest("connectedGame"), zT = "classic" === UT && (0, cT.K)(mT) ? WT : await (0, vT.c)(TT, UT, mT);
        return "" !== zT ? TT("general:cantJoinGame", {
          game: zT
        }) : TT("general:cantJoinThisGame")
      }(TT).then((mT => {
        eT(TT, mT, UT.message)
      })), !0;
      const {
        joinFailure: zT
      } = UT.debugResult, MT = "refused" === (null === zT || void 0 === zT ? void 0 : zT.at) ? zT.code : null;
      return MT === pT.e.schematicNotPublished.code ? (async function(TT, UT) {
        const mT = (0, BT.q)(HT.gameBridge.latest("connectedGame").gameNameWithVariation),
          WT = await async function(TT) {
            try {
              const UT = await fT.b.getGame(await qT.userContextManager.getCurrentUserContext(), TT, !0);
              return UT.gamePublished ? null : UT.name
            } catch (UT) {
              return UT instanceof LT.d && 435 === UT.httpCode || console.error(`Failed to get unpublished game ${TT}`, UT), null
            }
          }(mT);
        if (null === WT) return void eT(TT, TT("general:cantJoinThisGame"), UT);
        const zT = await jT.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: TT("studio:gameNotPublishedTitle", {
            game: WT
          }),
          confirmText: TT("studio:publishInStudio"),
          cancelText: TT("general:cancel")
        }).getResult();
        !0 === zT && (0, kT.navigatePreserveSearch)((0, bT.k)((0, ZT.d)(mT), "manage"))
      }(TT, UT.message), !0) : MT === pT.e.schematicBanned.code && (eT(TT, TT("general:cantJoinThisGame"), UT.message), !0)
    }

    function eT(TT, UT, mT) {
      jT.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: UT,
        subtitle: mT,
        confirmText: TT("general:ok"),
        cancelText: ""
      })
    }
    var YT = mT(4686),
      JT = mT(31),
      xT = mT(1341),
      dT = mT(1863),
      wT = mT(102),
      tT = mT(1416),
      aT = mT(1554),
      yT = mT(4637),
      XT = mT(4458),
      IT = mT(4405),
      QT = mT(3357),
      sT = mT(1437),
      FT = mT(825),
      PT = mT(1324),
      VT = mT(3419),
      uT = mT(3289),
      CT = mT(1466),
      rT = mT(1446),
      KT = mT(5078),
      ST = mT(9028),
      GT = mT(3099),
      NT = mT(1188);

    function ET(TT) {
      let {
        onApply: UT,
        onSkip: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)();
      return (0, gT.useEffect)((() => {
        GT.f.skipPlayWait()
      }), []), (0, NT.jsx)(CT.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, NT.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [WT("customTexturePack:downloadPrompt"), (0, NT.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: WT("customTexturePack:authorWarning")
          }), (0, NT.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: WT("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: UT
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: mT
        }
      })
    }
    async function hT() {
      let TT = !1;
      const UT = jT.NotificationProvider.showCustomPopup({
        body: UT => (0, NT.jsx)(ET, {
          onApply: () => {
            TT = !0, UT()
          },
          onSkip: UT
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await UT.getResult(), TT
    }
    let DT = {
      wanted: !1
    };
    let oT = null;

    function AT(TT) {
      TT.setGamePackConfirm(hT), oT = TT
    }
    var RT = mT(3582);

    function TU(TT) {
      let {
        schematicId: UT,
        texturePackKey: mT,
        onClose: WT
      } = TT;
      const [zT, MT] = (0, gT.useState)("prompt"), [nT, HT] = (0, gT.useState)(null), kT = (0, RT.c)();

      function jT() {
        WT()
      }
      return "prompt" === zT ? (0, NT.jsx)(ET, {
        onApply: async function() {
          MT("downloading");
          try {
            const TT = await async function(TT, UT) {
              const mT = await (0, KT.c)(UT);
              if (mT) return {
                pack: mT,
                key: UT
              };
              const WT = await qT.userContextManager.getCurrentUserContext(),
                zT = (await fT.b.getGame(WT, TT, !0)).customTexturePackKey;
              if (!zT) return null;
              const MT = await (0, KT.c)(zT);
              if (!MT) throw new Error("The texture pack could not be found");
              return {
                pack: MT,
                key: zT
              }
            }(UT, mT);
            if (!kT.current) return;
            if (!TT) return void WT();
            if ((0, VT.h)(TT.pack)) return void MT("refused");
            uT.e.setFromJson(TT.pack, "customGame"), await uT.e.saveTemporaryTexturePack(TT.key), kT.current && (0, dT.reloadBloxd)()
          } catch (TT) {
            HT(TT instanceof Error ? TT.message : String(TT)), MT("error")
          }
        },
        onSkip: jT
      }) : "downloading" === zT ? (0, NT.jsx)(CT.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, NT.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, NT.jsx)(rT.c, {
            showFace: !0
          })
        })
      }) : "error" === zT ? (0, NT.jsx)(CT.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: nT,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: jT
        }
      }) : "refused" === zT ? (0, NT.jsx)(CT.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: jT
        }
      }) : null
    }
    var UU = mT(9039),
      mU = mT(4392),
      WU = mT(1905),
      zU = mT(3068),
      MU = mT(4399),
      gU = mT(2250),
      nU = mT(9042);
    var HU = mT(4768),
      kU = mT(1398),
      jU = mT(1854),
      lU = mT(681),
      LU = mT(775),
      pU = mT(1926);

    function BU() {
      const TT = zT.b.get("clientEscMenuOptions");
      HT.gameBridge.send("setLookSensitivity", zT.b.get("isTouchScreen") ? (0, LU.k)(TT) : TT.mouseSensitivity)
    }
    const ZU = 45e3;

    function cU(TT) {
      const UT = TT.asError();
      if (UT.debugResult.Km || (0, jU.d)(UT.debugResult.error)) return;
      console.log("Failed to join lobby:", UT.message);
      const mT = "timedOut" === UT.debugResult.gameServerUnreachable;
      (0, zU.reportClientError)("matchmake_failed", UT.message, mT ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : LT.j[UT.code]);
      const {
        error: WT
      } = UT.debugResult;
      if (WT instanceof QT.i && "default" !== WT.packSource) {
        const TT = (0, MU.d)("js", "game" === WT.packSource ? "game" : "page", (0, MU.g)(WT));
        (0, zU.reportClientError)("texture_pack", WT, TT)
      }
    }

    function vU(TT) {
      if (null === TT || void 0 === TT || !TT.isError()) return !1;
      const UT = TT.asError();
      return UT.code === LT.j.REQUEST_TO_MATCHMAKING && !(0, jU.d)(UT.debugResult.error)
    }
    async function fU(TT, UT, mT) {
      const WT = (0, HU.U)(UT);
      async function gT(TT, UT, mT, WT) {
        var gT;
        if (WT.aborted) return null;
        null === zT.b.get("gameEntrySource") && (0, zT.e)("directPlayUrl"), lU.B && (0, ST.g)().catch((() => {})), zT.b.set({
          gameState: "findingLobby"
        }), JT.j.EZ("loadingScreenState", "loadingPage:findingLobby");
        const nT = await qT.userContextManager.getCurrentUserContext();
        HT.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: UT,
          discordContext: TT instanceof PT.e ? TT.getSerialisableParams() : null
        }), (0, WU.g)(null !== (gT = GT.f.playInputAt()) && void 0 !== gT ? gT : performance.now());
        const kT = await async function(TT, UT, mT, WT, zT) {
          try {
            await (0, pU.l)(MT.reqLibsLoadedPromise, ZU, "Required libraries timed out")
          } catch (gT) {
            const TT = gT instanceof pU.f ? `Required libraries still loading after ${ZU/1e3} s: ${(0,MT.requiredLibsPending)().join(", ")}` : gT.toString();
            return xT.c.errorWithCode(TT, LT.j.LOAD_REQUIRED_LIBS, {
              error: gT,
              severity: "medium"
            })
          }
          return JT.j.EZ("matchmakeAndPlayStepCompleted", {
            step: LT.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, MT.matchmakeAndPlayMaybeUnloaded)(TT, UT, mT, WT, zT)
        }(TT, UT, mT, nT, WT), jT = kT.isError() ? kT.asError() : null;
        if (WT.aborted) return jT && cU(kT), HT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== jT && void 0 !== jT && jT.debugResult.Km) return console.log("Join cancelled:", jT.message), null;
        if (jT) return kT;
        const {
          gameNameWithVariation: lT,
          lobbyName: pT
        } = kT.getValue();
        return BU(), (0, kU.u)().setGameViewShown(!0), nT.recordJoin(lT, pT), (0, tT.J)(), kT
      }
      return WT && (0, zT.e)("updateRejoin"), (0, gU.k)((async zT => {
        try {
          var MT;
          let nT = TT,
            HT = await gT(nT, UT, mT, zT);
          for (let TT = 0; WT && TT < HU.p && (vU(HT) && await (0, HU.X)((0, HU.y)(TT), zT)); TT++) nT = (0, HU.C)(nT, TT + 1, "string" === typeof nT && (0, cT.S)(nT)), HT = await gT(nT, UT, mT, zT);
          return null !== (MT = HT) && void 0 !== MT && MT.isError() && cU(HT), HT
        } catch (nT) {
          if ((0, zU.reportClientError)("matchmake_failed", nT, "unexpected"), HT.gameBridge.send("leaveGame", {
              reloadPath: zT.aborted ? null : "/"
            }), zT.aborted) return null;
          throw nT
        }
      }), (async TT => {
        var mT;
        if (WT) return;
        const zT = (0, tT.E)();
        null !== zT && (await zT, TT.aborted) || (null !== (mT = FT.d[UT]) && void 0 !== mT && mT.playAdBeforeMatchmaking ? (GT.f.skipPlayWait(), await new Promise((TT => {
          (0, tT.cb)((() => {
            TT(!0)
          }), "video_start")
        }))) : (0, tT.cb)((() => {}), "video_start"))
      }))
    }

    function qU() {
      const {
        t: TT
      } = (0, lT.z)(), UT = (0, kT.useNavigatePreserveSearch)(), mT = (0, WT.p)(), pT = (0, WT.y)(), ZT = (0, gT.useRef)({
        t: TT,
        navigate: UT
      });
      ZT.current = {
        t: TT,
        navigate: UT
      };
      const iT = (0, gT.useRef)("");
      iT.current = mT.pathname + mT.search;
      const {
        gameState: bT,
        clientEscMenuOptions: eT
      } = (0, zT.h)(["gameState", "clientEscMenuOptions"]), JT = (0, gT.useRef)(null), PT = (0, gT.useRef)(!1);
      var VT;
      (0, gU.m)(), (0, gU.n)(), VT = lU.B, (0, gT.useEffect)((() => {
        if (!VT) return;
        let TT = !0;
        return (0, ST.g)().then((UT => {
          TT && AT(UT)
        })).catch((() => {})), () => {
          var UT;
          TT = !1, DT.wanted = !1, null === (UT = oT) || void 0 === UT || UT.setGamePackConfirm(null), oT = null
        }
      }), [VT]), (0, gT.useEffect)((() => {
        var TT, UT, WT;
        (0, MT.needGameClientNow)();
        const {
          t: gT,
          navigate: nT
        } = ZT.current, lT = (0, UU.b)(pT, mT.search);
        if (pT.lobbyName && !new URLSearchParams(mT.search).has("lobby")) return void nT((0, sT.d)(lT.gameNameWithVariation, lT.lobbyName), {
          replace: !0
        });
        let bT = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === mT.pathname) {
          const TT = zT.b.get("discordContext");
          if (!TT) return void nT("/");
          bT = YT.d.setupDiscordLobby(TT, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: TT
          }))).catch((UT => (console.error("Failed to setup discord lobby", UT), {
            shouldMatchmake: !1,
            discordContext: TT
          })))
        } else if (!lT.gameNameWithVariation || !(0, cT.O)(lT.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${lT.gameNameWithVariation}`), void nT(-1);
        const eT = JT.current;
        if (null !== eT && lT.gameNameWithVariation === eT.gameNameWithVariation && lT.lobbyName === eT.lobbyName) return;
        if (HT.gameBridge.latest("connectedGame").replay) return void(0, gU.i)(null);
        if ("releaseCountdown" === (null === (TT = (0, vT.d)(lT.gameNameWithVariation)) || void 0 === TT ? void 0 : TT.type)) return console.error(`Game hasn't been released yet: ${lT.gameNameWithVariation}`), void nT(-1);
        const aT = PT.current;
        PT.current = !1, (0, tT.G)(), zT.b.set({
          gameState: "loadingScreen"
        });
        const VT = function() {
            DT.wanted = !1;
            const TT = {
              wanted: !0
            };
            return DT = TT, () => TT.wanted
          }(),
          CT = lT.gameNameWithVariation;
        if (CT && (lU.B || (0, BT.k)(CT))) {
          const TT = lU.B ? Promise.all([(0, ST.g)(), qT.userContextManager.getCurrentUserContext()]).then((TT => {
            let [UT, mT] = TT;
            if (VT()) return AT(UT), UT.packForGame(CT, mT, VT)
          })) : async function(TT) {
            await uT.e.indexedDbValuesAreLoaded();
            const UT = await qT.userContextManager.getCurrentUserContext(),
              mT = (0, BT.q)(TT);
            let WT;
            try {
              WT = await fT.b.getGame(UT, mT, !0)
            } catch (gT) {
              return void console.error("Failed to get game", gT)
            }
            const zT = WT.customTexturePackKey;
            if (!zT) return void(uT.e.isUsingTemporaryTexturePack() && ((0, dT.reloadBloxd)(), await new Promise((() => {}))));
            if (uT.e.isUsingTemporaryTexturePack() && uT.e.getTemporaryTexturePackSource() === zT) return;
            const MT = jT.NotificationProvider.showCustomPopup({
              body: TT => (0, NT.jsx)(TU, {
                schematicId: mT,
                texturePackKey: zT,
                onClose: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await MT.getResult()
          }(CT), UT = bT;
          bT = TT.catch((TT => {
            console.error("Failed to check for custom texture pack", TT)
          })).then((() => UT))
        }
        const rT = {
          wasm: lU.B,
          game: lT.gameNameWithVariation,
          custom: void 0 !== CT && (0, BT.k)(CT),
          lobbyName: null !== (UT = lT.lobbyName) && void 0 !== UT ? UT : null,
          direct: null !== lT.directJoinVmUrl && void 0 !== lT.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === mT.pathname,
          adBeforeMatchmaking: void 0 !== CT && !0 === (null === (WT = FT.d[CT]) || void 0 === WT ? void 0 : WT.playAdBeforeMatchmaking),
          afterAnother: null !== JT.current || (0, gU.e)()
        };
        (0, nU.i)(null);
        const KT = !(GT = rT).wasm || void 0 === GT.game || GT.custom || GT.direct || GT.discord || GT.adBeforeMatchmaking || GT.afterAnother ? null : () => {
          ! function(TT, UT) {
            (0, nU.i)({
              key: (0, nU.e)(TT, UT),
              settled: Promise.all([MT.matchmakingLibrariesPromise, qT.userContextManager.getCurrentUserContext()]).then((mT => {
                let [WT, zT] = mT;
                if (void 0 === WT.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return WT.matchmakeForAhead(TT, UT, zT)
              })).catch((TT => ({
                result: xT.c.errorWithCode(String(TT), LT.j.REQUEST_TO_MATCHMAKING, {
                  error: TT,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(rT.lobbyName, rT.game)
        };
        var GT;
        const ET = null !== JT.current;
        JT.current = null, (0, gU.i)(null);
        const hT = () => {
          aT ? (0, kT.navigateToHomePage)() : (PT.current = ET, nT(-1))
        };
        let oT = !1;
        const RT = mT.pathname + mT.search,
          WU = () => !oT && iT.current === RT;
        return (0, nU.c)(bT, KT, (TT => {
          let {
            shouldMatchmake: UT,
            discordContext: mT
          } = TT;
          WU() && (UT ? fU(null !== mT && void 0 !== mT ? mT : lT.lobbyName, mT ? "classic" : lT.gameNameWithVariation, lT.directJoinVmUrl).then((TT => {
            if (null !== TT && WU())
              if (TT.isError()) {
                var UT;
                const mT = TT.asError(),
                  WT = null !== (UT = mT.debugResult.severity) && void 0 !== UT ? UT : "high";
                if ((0, jU.d)(mT.debugResult.error)) return void jU.e.reload();
                if (mT.code === LT.j.SHADER_PACK) return void(0, mU.d)(mT.message, nT);
                const MT = zT.b.get("gameEntrySource"),
                  kT = mT.code === LT.j.INITIALISE_WEBGL ? (0, XT.e)() : null,
                  {
                    error: pT
                  } = mT.debugResult;
                let BT;
                if (OT(gT, mT)) BT = Promise.resolve(!1);
                else if (null !== kT) BT = (0, XT.k)(kT);
                else if (pT instanceof QT.i) BT = (0, IT.h)(pT);
                else {
                  let TT;
                  switch (WT) {
                    case "low":
                      TT = "face-diagonal-mouth";
                      break;
                    case "medium":
                      TT = "face-worried";
                      break;
                    case "high":
                      TT = "face-dizzy"
                  }
                  const UT = pT instanceof pU.f;
                  let zT = mT.message;
                  UT ? zT = gT("general:gameFilesStalled") : mT.debugResult.gameServerUnreachable && (zT = gT((0, wT.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  BT = jT.NotificationProvider.showPromptPopup({
                    icon: TT,
                    title: LT.x[mT.code],
                    subtitle: (0, NT.jsxs)(NT.Fragment, {
                      children: [zT, pT instanceof Error && !UT && (0, NT.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, NT.jsx)(yT.d, {
                          errorString: pT.stack
                        })
                      })]
                    }),
                    confirmText: gT("general:tryAgain"),
                    cancelText: gT("general:cancel")
                  }).getResult().then((TT => !0 === TT))
                }
                BT.then((TT => {
                  if (TT) {
                    (0, zT.e)(MT);
                    const TT = (0, sT.d)(lT.gameNameWithVariation, lT.lobbyName);
                    "low" === WT ? nT(TT) : (0, dT.reloadBloxd)(TT)
                  }
                })), HT.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), hT()
              } else {
                const {
                  gameNameWithVariation: UT,
                  lobbyName: mT
                } = TT.getValue();
                JT.current = {
                  gameNameWithVariation: UT,
                  lobbyName: mT
                };
                const WT = (0, sT.d)(UT, mT);
                nT(WT, {
                  replace: !0
                })
              }
          })).catch((TT => {
            if (!WU()) return;
            jT.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, NT.jsxs)(NT.Fragment, {
                children: [gT("homePage:pleaseCopyError"), (0, NT.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, NT.jsx)(yT.d, {
                    errorString: TT.stack
                  })
                })]
              }),
              confirmText: gT("general:tryAgain"),
              cancelText: gT("general:cancel")
            }).getResult().then((TT => {
              !0 === TT && (0, dT.reloadBloxd)((0, sT.d)(lT.gameNameWithVariation, lT.lobbyName))
            })), hT()
          })) : nT(-1))
        }), WU), () => {
          oT = !0
        }
      }), [pT, mT.search, mT.pathname]), (0, gT.useEffect)((() => {
        eT.disableFullscreen && (0, aT.g)() ? (0, aT.j)() : !eT.disableFullscreen && (0, aT.i)() && (0, aT.t)({
          automatic: !0
        })
      }), [bT, eT]), (0, gT.useEffect)((() => {
        "inGame" === bT && BU()
      }), [bT, eT]), (0, gT.useEffect)((() => {
        "inGame" !== bT && zT.b.set({
          openInGameMenuName: null
        })
      }), [bT]);
      const CT = function(TT) {
        const UT = (0, zT.d)(TT),
          [mT, WT] = (0, gT.useState)(0),
          [MT, HT] = (0, gT.useState)(!1);
        (0, nT.g)("gameJoined", (() => {
          (0, zT.d)(zT.b.get("gameState")) && (WT((TT => TT + 1)), HT(!0))
        })), (0, gT.useEffect)((() => {
          UT || HT(!1)
        }), [UT]);
        const kT = "inGame" === TT;
        return {
          mounted: kT || UT && MT,
          shown: kT,
          key: mT
        }
      }(bT);
      return (0, NT.jsx)(NT.Fragment, {
        children: CT.mounted && (0, NT.jsx)(MT.InGameUi, {
          shown: CT.shown
        }, CT.key)
      })
    }
  },
  5078: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(1302);
    async function zT(TT) {
      const UT = await fetch(`${WT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === UT.status || 403 === UT.status) return null;
      if (!UT.ok) throw new Error(`Failed to download the texture pack (${UT.status})`);
      return await UT.json()
    }
  },
  9039: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(1437),
      zT = mT(1321),
      MT = mT(653);

    function gT(TT) {
      return TT = function(TT, UT) {
        var mT;
        const WT = new URLSearchParams(UT),
          zT = WT.get("lobby"),
          MT = WT.get("vm"),
          gT = null !== (mT = zT) && void 0 !== mT ? mT : TT.lobbyName,
          nT = null !== MT && void 0 !== MT ? MT : TT.directJoinVmUrl;
        if (gT === TT.lobbyName && nT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: gT,
          directJoinVmUrl: nT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, MT.E)(TT.directJoinVmUrl)) return TT;
        const UT = (0, zT.gb)(TT.directJoinVmUrl);
        null === UT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, MT.E)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, WT.i)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  9036: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => zT
    });
    let WT = !1;

    function zT() {
      WT = !0
    }

    function MT() {
      return WT
    }
  },
  9042: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      e: () => zT,
      i: () => MT,
      k: () => gT
    });
    let WT = null;

    function zT(TT, UT) {
      return `${UT}\n${null!==TT&&void 0!==TT?TT:""}`
    }

    function MT(TT) {
      WT = TT
    }

    function gT(TT) {
      const UT = WT;
      return WT = null, null !== UT && UT.key === TT ? UT.settled : null
    }

    function nT(TT, UT, mT, WT) {
      let zT = !1;
      null !== UT && setTimeout((() => {
        WT() && !zT && UT()
      }), 0), TT.then((TT => {
        zT = !0, mT(TT)
      }))
    }
  },
  9028: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => pT,
      g: () => LT,
      i: () => BT
    });
    var WT = mT(3289),
      zT = mT(2404),
      MT = mT(2257),
      gT = mT(4738),
      nT = mT(3599),
      HT = mT(9036);
    let kT = null;

    function jT() {
      return Promise.all([mT.e(75), mT.e(78), mT.e(90), mT.e(215), mT.e(214), mT.e(160), mT.e(137), mT.e(198), mT.e(140), mT.e(88), mT.e(275), mT.e(64)]).then((() => mT(40817)))
    }

    function lT() {
      Promise.all([mT.e(73), mT.e(76), mT.e(75), mT.e(74), mT.e(90), mT.e(87), mT.e(273), mT.e(191), mT.e(228), mT.e(252), mT.e(275), mT.e(47)]).then((() => mT(41136))).catch((() => {}))
    }

    function LT() {
      return gT.e.cancelDownloadForJoin(), (0, nT.b)(), (0, zT.g)(), (0, HT.c)(), (0, MT.h)(), lT(), Promise.all([mT.e(78), mT.e(90), mT.e(215), mT.e(214), mT.e(137), mT.e(140), mT.e(59)]).then((() => mT(41189))).then((TT => {
        let {
          startJoinLoad: UT
        } = TT;
        UT()
      }), (() => {})), kT ??= jT().then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        WT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw kT = null, TT
      })), kT
    }

    function pT() {
      return lT(), mT.e(276).then((() => mT(41194))).catch((() => {})), jT().then((() => {}))
    }

    function BT() {
      return jT().then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  },
  9025: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      e: () => gT,
      i: () => nT,
      k: () => kT,
      o: () => HT
    });
    var WT = mT(208),
      zT = mT(4719);

    function MT(TT) {
      return gT(TT) === WT.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function gT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function nT(TT) {
      var UT;
      return null !== (UT = Object.keys(zT.c).find((UT => zT.c[UT] === TT))) && void 0 !== UT ? UT : null
    }

    function HT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const kT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);