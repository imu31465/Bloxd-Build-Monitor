export const id = 112;
export const ids = [112];
export const modules = {
  9030: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => ei
    });
    var Op = cp(1543),
      op = cp(25),
      Ip = cp(4747),
      Sp = cp(62),
      xp = cp(1476);
    var Lp = cp(1956),
      Yp = cp(1538),
      Dp = cp(1372),
      Ap = cp(1201),
      Pp = cp(156),
      Wp = cp(195),
      yp = cp(1014),
      Up = cp(1024),
      wp = cp(1234),
      vp = cp(2420),
      tp = cp(1520),
      Hp = cp(1149),
      dp = cp(9034),
      ep = cp(1563);

    function jp(pp, ip) {
      const cp = !0 === ip.debugResult.gameRefused,
        Op = cp || ip.code === Pp.k.REQUEST_TO_MATCHMAKING ? (0, dp.h)(ip.message) : null;
      if (null !== Op) return kp(pp, pp((0, dp.o)(Op)), pp(dp.l[Op])), !0;
      if (cp) return async function(pp) {
        const {
          gameNameWithVariation: ip,
          lobbyName: cp,
          shownLobbyName: Op
        } = Lp.gameBridge.latest("connectedGame"), op = "classic" === ip && (0, wp.G)(cp) ? Op : await (0, vp.b)(pp, ip, cp);
        return "" !== op ? pp("general:cantJoinGame", {
          game: op
        }) : pp("general:cantJoinThisGame")
      }(pp).then((cp => {
        kp(pp, cp, ip.message)
      })), !0;
      const {
        joinFailure: op
      } = ip.debugResult, Ip = "refused" === (null === op || void 0 === op ? void 0 : op.at) ? op.code : null;
      return Ip === Wp.e.schematicNotPublished.code ? (async function(pp, ip) {
        const cp = (0, yp.o)(Lp.gameBridge.latest("connectedGame").gameNameWithVariation),
          Op = await async function(pp) {
            try {
              const ip = await tp.b.getGame(await Hp.userContextManager.getCurrentUserContext(), pp, !0);
              return ip.gamePublished ? null : ip.name
            } catch (ip) {
              return ip instanceof Pp.e && 435 === ip.httpCode || console.error(`Failed to get unpublished game ${pp}`, ip), null
            }
          }(cp);
        if (null === Op) return void kp(pp, pp("general:cantJoinThisGame"), ip);
        const op = await Dp.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: pp("studio:gameNotPublishedTitle", {
            game: Op
          }),
          confirmText: pp("studio:publishInStudio"),
          cancelText: pp("general:cancel")
        }).getResult();
        !0 === op && (0, Yp.navigatePreserveSearch)((0, ep.n)((0, Up.e)(cp), "manage"))
      }(pp, ip.message), !0) : Ip === Wp.e.schematicBanned.code && (kp(pp, pp("general:cantJoinThisGame"), ip.message), !0)
    }

    function kp(pp, ip, cp) {
      Dp.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ip,
        subtitle: cp,
        confirmText: pp("general:ok"),
        cancelText: ""
      })
    }
    var mp = cp(4677),
      Rp = cp(34),
      qp = cp(1255),
      Mp = cp(1765),
      Cp = cp(104),
      Ep = cp(1334),
      Xp = cp(1466),
      lp = cp(4615),
      Qp = cp(4456),
      Jp = cp(4407),
      Bp = cp(3335),
      Np = cp(1356),
      Tp = cp(768),
      fp = cp(1236),
      bp = cp(3412),
      hp = cp(3246),
      ap = cp(1380),
      np = cp(1361),
      Fp = cp(5103),
      gp = cp(9041),
      Gp = cp(3050),
      rp = cp(1112);

    function Zp(pp) {
      let {
        onApply: ip,
        onSkip: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)();
      return (0, Sp.useEffect)((() => {
        Gp.e.skipPlayWait()
      }), []), (0, rp.jsx)(ap.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, rp.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Op("customTexturePack:downloadPrompt"), (0, rp.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Op("customTexturePack:authorWarning")
          }), (0, rp.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Op("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: ip
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: cp
        }
      })
    }
    async function zp() {
      let pp = !1;
      const ip = Dp.NotificationProvider.showCustomPopup({
        body: ip => (0, rp.jsx)(Zp, {
          onApply: () => {
            pp = !0, ip()
          },
          onSkip: ip
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await ip.getResult(), pp
    }
    let sp = {
      wanted: !1
    };
    let Kp = null;

    function Vp(pp) {
      pp.setGamePackConfirm(zp), Kp = pp
    }
    var ii = cp(3587);

    function ci(pp) {
      let {
        schematicId: ip,
        texturePackKey: cp,
        onClose: Op
      } = pp;
      const [op, Ip] = (0, Sp.useState)("prompt"), [xp, Lp] = (0, Sp.useState)(null), Yp = (0, ii.b)();

      function Dp() {
        Op()
      }
      return "prompt" === op ? (0, rp.jsx)(Zp, {
        onApply: async function() {
          Ip("downloading");
          try {
            const pp = await async function(pp, ip) {
              const cp = await (0, Fp.d)(ip);
              if (cp) return {
                pack: cp,
                key: ip
              };
              const Op = await Hp.userContextManager.getCurrentUserContext(),
                op = (await tp.b.getGame(Op, pp, !0)).customTexturePackKey;
              if (!op) return null;
              const Ip = await (0, Fp.d)(op);
              if (!Ip) throw new Error("The texture pack could not be found");
              return {
                pack: Ip,
                key: op
              }
            }(ip, cp);
            if (!Yp.current) return;
            if (!pp) return void Op();
            if ((0, bp.m)(pp.pack)) return void Ip("refused");
            hp.d.setFromJson(pp.pack, "customGame"), await hp.d.saveTemporaryTexturePack(pp.key), Yp.current && (0, Mp.reloadBloxd)()
          } catch (pp) {
            Lp(pp instanceof Error ? pp.message : String(pp)), Ip("error")
          }
        },
        onSkip: Dp
      }) : "downloading" === op ? (0, rp.jsx)(ap.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, rp.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, rp.jsx)(np.c, {
            showFace: !0
          })
        })
      }) : "error" === op ? (0, rp.jsx)(ap.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: xp,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Dp
        }
      }) : "refused" === op ? (0, rp.jsx)(ap.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Dp
        }
      }) : null
    }
    var Oi = cp(9049),
      oi = cp(4389),
      Ii = cp(1803),
      Si = cp(3025),
      xi = cp(4398),
      Li = cp(2169),
      Yi = cp(9056);
    var Di = cp(4770),
      Ai = cp(1317),
      Pi = cp(1758),
      Wi = cp(657),
      yi = cp(732),
      Ui = cp(1819);

    function wi() {
      const pp = op.c.get("clientEscMenuOptions");
      Lp.gameBridge.send("setLookSensitivity", op.c.get("isTouchScreen") ? (0, yi.n)(pp) : pp.mouseSensitivity)
    }
    const vi = 45e3;

    function ti(pp) {
      const ip = pp.asError();
      if (ip.debugResult.OO || (0, Pi.e)(ip.debugResult.error)) return;
      console.log("Failed to join lobby:", ip.message);
      const cp = "timedOut" === ip.debugResult.gameServerUnreachable;
      (0, Si.reportClientError)("matchmake_failed", ip.message, cp ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Pp.k[ip.code]);
      const {
        error: Op
      } = ip.debugResult;
      if (Op instanceof Bp.l && "default" !== Op.packSource) {
        const pp = (0, xi.f)("js", "game" === Op.packSource ? "game" : "page", (0, xi.g)(Op));
        (0, Si.reportClientError)("texture_pack", Op, pp)
      }
    }

    function Hi(pp) {
      if (null === pp || void 0 === pp || !pp.isError()) return !1;
      const ip = pp.asError();
      return ip.code === Pp.k.REQUEST_TO_MATCHMAKING && !(0, Pi.e)(ip.debugResult.error)
    }
    async function di(pp, ip, cp) {
      const Op = (0, Di.M)(ip);
      async function Sp(pp, ip, cp, Op) {
        var Sp;
        if (Op.aborted) return null;
        null === op.c.get("gameEntrySource") && (0, op.k)("directPlayUrl"), Wi.z && (0, gp.f)().catch((() => {})), op.c.set({
          gameState: "findingLobby"
        }), Rp.m.GA("loadingScreenState", "loadingPage:findingLobby");
        const xp = await Hp.userContextManager.getCurrentUserContext();
        Lp.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: ip,
          discordContext: pp instanceof fp.e ? pp.getSerialisableParams() : null
        }), (0, Ii.i)(null !== (Sp = Gp.e.playInputAt()) && void 0 !== Sp ? Sp : performance.now());
        const Yp = await async function(pp, ip, cp, Op, op) {
          try {
            await (0, Ui.k)(Ip.reqLibsLoadedPromise, vi, "Required libraries timed out")
          } catch (Sp) {
            const pp = Sp instanceof Ui.h ? `Required libraries still loading after ${vi/1e3} s: ${(0,Ip.requiredLibsPending)().join(", ")}` : Sp.toString();
            return qp.d.errorWithCode(pp, Pp.k.LOAD_REQUIRED_LIBS, {
              error: Sp,
              severity: "medium"
            })
          }
          return Rp.m.GA("matchmakeAndPlayStepCompleted", {
            step: Pp.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Ip.matchmakeAndPlayMaybeUnloaded)(pp, ip, cp, Op, op)
        }(pp, ip, cp, xp, Op), Dp = Yp.isError() ? Yp.asError() : null;
        if (Op.aborted) return Dp && ti(Yp), Lp.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Dp && void 0 !== Dp && Dp.debugResult.OO) return console.log("Join cancelled:", Dp.message), null;
        if (Dp) return Yp;
        const {
          gameNameWithVariation: Ap,
          lobbyName: Wp
        } = Yp.getValue();
        return wi(), (0, Ai.I)().setGameViewShown(!0), xp.recordJoin(Ap, Wp), (0, Ep.E)(), Yp
      }
      return Op && (0, op.k)("updateRejoin"), (0, Li.l)((async op => {
        try {
          var Ip;
          let xp = pp,
            Lp = await Sp(xp, ip, cp, op);
          for (let pp = 0; Op && pp < Di.l && (Hi(Lp) && await (0, Di.N)((0, Di.x)(pp), op)); pp++) xp = (0, Di.z)(xp, pp + 1, "string" === typeof xp && (0, wp.I)(xp)), Lp = await Sp(xp, ip, cp, op);
          return null !== (Ip = Lp) && void 0 !== Ip && Ip.isError() && ti(Lp), Lp
        } catch (xp) {
          if ((0, Si.reportClientError)("matchmake_failed", xp, "unexpected"), Lp.gameBridge.send("leaveGame", {
              reloadPath: op.aborted ? null : "/"
            }), op.aborted) return null;
          throw xp
        }
      }), (async pp => {
        var cp;
        if (Op) return;
        const op = (0, Ep.z)();
        null !== op && (await op, pp.aborted) || (null !== (cp = Tp.c[ip]) && void 0 !== cp && cp.playAdBeforeMatchmaking ? (Gp.e.skipPlayWait(), await new Promise((pp => {
          (0, Ep.Z)((() => {
            pp(!0)
          }), "video_start")
        }))) : (0, Ep.Z)((() => {}), "video_start"))
      }))
    }

    function ei() {
      const {
        t: pp
      } = (0, Ap.H)(), ip = (0, Yp.useNavigatePreserveSearch)(), cp = (0, Op.r)(), Wp = (0, Op.A)(), Up = (0, Sp.useRef)({
        t: pp,
        navigate: ip
      });
      Up.current = {
        t: pp,
        navigate: ip
      };
      const dp = (0, Sp.useRef)("");
      dp.current = cp.pathname + cp.search;
      const {
        gameState: ep,
        clientEscMenuOptions: kp
      } = (0, op.o)(["gameState", "clientEscMenuOptions"]), Rp = (0, Sp.useRef)(null), fp = (0, Sp.useRef)(!1);
      var bp;
      (0, Li.p)(), (0, Li.r)(), bp = Wi.z, (0, Sp.useEffect)((() => {
        if (!bp) return;
        let pp = !0;
        return (0, gp.f)().then((ip => {
          pp && Vp(ip)
        })).catch((() => {})), () => {
          var ip;
          pp = !1, sp.wanted = !1, null === (ip = Kp) || void 0 === ip || ip.setGamePackConfirm(null), Kp = null
        }
      }), [bp]), (0, Sp.useEffect)((() => {
        var pp, ip, Op;
        (0, Ip.needGameClientNow)();
        const {
          t: Sp,
          navigate: xp
        } = Up.current, Ap = (0, Oi.c)(Wp, cp.search);
        if (Wp.lobbyName && !new URLSearchParams(cp.search).has("lobby")) return void xp((0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName), {
          replace: !0
        });
        let ep = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === cp.pathname) {
          const pp = op.c.get("discordContext");
          if (!pp) return void xp("/");
          ep = mp.b.setupDiscordLobby(pp, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: pp
          }))).catch((ip => (console.error("Failed to setup discord lobby", ip), {
            shouldMatchmake: !1,
            discordContext: pp
          })))
        } else if (!Ap.gameNameWithVariation || !(0, wp.H)(Ap.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Ap.gameNameWithVariation}`), void xp(-1);
        const kp = Rp.current;
        if (null !== kp && Ap.gameNameWithVariation === kp.gameNameWithVariation && Ap.lobbyName === kp.lobbyName) return;
        if (Lp.gameBridge.latest("connectedGame").replay) return void(0, Li.i)(null);
        if ("releaseCountdown" === (null === (pp = (0, vp.c)(Ap.gameNameWithVariation)) || void 0 === pp ? void 0 : pp.type)) return console.error(`Game hasn't been released yet: ${Ap.gameNameWithVariation}`), void xp(-1);
        const Xp = fp.current;
        fp.current = !1, (0, Ep.B)(), op.c.set({
          gameState: "loadingScreen"
        });
        const bp = function() {
            sp.wanted = !1;
            const pp = {
              wanted: !0
            };
            return sp = pp, () => pp.wanted
          }(),
          ap = Ap.gameNameWithVariation;
        if (ap && (Wi.z || (0, yp.j)(ap))) {
          const pp = Wi.z ? Promise.all([(0, gp.f)(), Hp.userContextManager.getCurrentUserContext()]).then((pp => {
            let [ip, cp] = pp;
            if (bp()) return Vp(ip), ip.packForGame(ap, cp, bp)
          })) : async function(pp) {
            await hp.d.indexedDbValuesAreLoaded();
            const ip = await Hp.userContextManager.getCurrentUserContext(),
              cp = (0, yp.o)(pp);
            let Op;
            try {
              Op = await tp.b.getGame(ip, cp, !0)
            } catch (Sp) {
              return void console.error("Failed to get game", Sp)
            }
            const op = Op.customTexturePackKey;
            if (!op) return void(hp.d.isUsingTemporaryTexturePack() && ((0, Mp.reloadBloxd)(), await new Promise((() => {}))));
            if (hp.d.isUsingTemporaryTexturePack() && hp.d.getTemporaryTexturePackSource() === op) return;
            const Ip = Dp.NotificationProvider.showCustomPopup({
              body: pp => (0, rp.jsx)(ci, {
                schematicId: cp,
                texturePackKey: op,
                onClose: pp
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Ip.getResult()
          }(ap), ip = ep;
          ep = pp.catch((pp => {
            console.error("Failed to check for custom texture pack", pp)
          })).then((() => ip))
        }
        const np = {
          wasm: Wi.z,
          game: Ap.gameNameWithVariation,
          custom: void 0 !== ap && (0, yp.j)(ap),
          lobbyName: null !== (ip = Ap.lobbyName) && void 0 !== ip ? ip : null,
          direct: null !== Ap.directJoinVmUrl && void 0 !== Ap.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === cp.pathname,
          adBeforeMatchmaking: void 0 !== ap && !0 === (null === (Op = Tp.c[ap]) || void 0 === Op ? void 0 : Op.playAdBeforeMatchmaking),
          afterAnother: null !== Rp.current || (0, Li.d)()
        };
        (0, Yi.f)(null);
        const Fp = !(Gp = np).wasm || void 0 === Gp.game || Gp.custom || Gp.direct || Gp.discord || Gp.adBeforeMatchmaking || Gp.afterAnother ? null : () => {
          ! function(pp, ip) {
            (0, Yi.f)({
              key: (0, Yi.c)(pp, ip),
              settled: Promise.all([Ip.matchmakingLibrariesPromise, Hp.userContextManager.getCurrentUserContext()]).then((cp => {
                let [Op, op] = cp;
                if (void 0 === Op.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return Op.matchmakeForAhead(pp, ip, op)
              })).catch((pp => ({
                result: qp.d.errorWithCode(String(pp), Pp.k.REQUEST_TO_MATCHMAKING, {
                  error: pp,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(np.lobbyName, np.game)
        };
        var Gp;
        const Zp = null !== Rp.current;
        Rp.current = null, (0, Li.i)(null);
        const zp = () => {
          Xp ? (0, Yp.navigateToHomePage)() : (fp.current = Zp, xp(-1))
        };
        let Kp = !1;
        const ii = cp.pathname + cp.search,
          Ii = () => !Kp && dp.current === ii;
        return (0, Yi.b)(ep, Fp, (pp => {
          let {
            shouldMatchmake: ip,
            discordContext: cp
          } = pp;
          Ii() && (ip ? di(null !== cp && void 0 !== cp ? cp : Ap.lobbyName, cp ? "classic" : Ap.gameNameWithVariation, Ap.directJoinVmUrl).then((pp => {
            if (null !== pp && Ii())
              if (pp.isError()) {
                var ip;
                const cp = pp.asError(),
                  Op = null !== (ip = cp.debugResult.severity) && void 0 !== ip ? ip : "high";
                if ((0, Pi.e)(cp.debugResult.error)) return void Pi.f.reload();
                if (cp.code === Pp.k.SHADER_PACK) return void(0, oi.d)(cp.message, xp);
                const Ip = op.c.get("gameEntrySource"),
                  Yp = cp.code === Pp.k.INITIALISE_WEBGL ? (0, Qp.d)() : null,
                  {
                    error: Wp
                  } = cp.debugResult;
                let yp;
                if (jp(Sp, cp)) yp = Promise.resolve(!1);
                else if (null !== Yp) yp = (0, Qp.i)(Yp);
                else if (Wp instanceof Bp.l) yp = (0, Jp.h)(Wp);
                else {
                  let pp;
                  switch (Op) {
                    case "low":
                      pp = "face-diagonal-mouth";
                      break;
                    case "medium":
                      pp = "face-worried";
                      break;
                    case "high":
                      pp = "face-dizzy"
                  }
                  const ip = Wp instanceof Ui.h;
                  let op = cp.message;
                  ip ? op = Sp("general:gameFilesStalled") : cp.debugResult.gameServerUnreachable && (op = Sp((0, Cp.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  yp = Dp.NotificationProvider.showPromptPopup({
                    icon: pp,
                    title: Pp.C[cp.code],
                    subtitle: (0, rp.jsxs)(rp.Fragment, {
                      children: [op, Wp instanceof Error && !ip && (0, rp.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, rp.jsx)(lp.c, {
                          errorString: Wp.stack
                        })
                      })]
                    }),
                    confirmText: Sp("general:tryAgain"),
                    cancelText: Sp("general:cancel")
                  }).getResult().then((pp => !0 === pp))
                }
                yp.then((pp => {
                  if (pp) {
                    (0, op.k)(Ip);
                    const pp = (0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName);
                    "low" === Op ? xp(pp) : (0, Mp.reloadBloxd)(pp)
                  }
                })), Lp.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), zp()
              } else {
                const {
                  gameNameWithVariation: ip,
                  lobbyName: cp
                } = pp.getValue();
                Rp.current = {
                  gameNameWithVariation: ip,
                  lobbyName: cp
                };
                const Op = (0, Np.c)(ip, cp);
                xp(Op, {
                  replace: !0
                })
              }
          })).catch((pp => {
            if (!Ii()) return;
            Dp.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, rp.jsxs)(rp.Fragment, {
                children: [Sp("homePage:pleaseCopyError"), (0, rp.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, rp.jsx)(lp.c, {
                    errorString: pp.stack
                  })
                })]
              }),
              confirmText: Sp("general:tryAgain"),
              cancelText: Sp("general:cancel")
            }).getResult().then((pp => {
              !0 === pp && (0, Mp.reloadBloxd)((0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName))
            })), zp()
          })) : xp(-1))
        }), Ii), () => {
          Kp = !0
        }
      }), [Wp, cp.search, cp.pathname]), (0, Sp.useEffect)((() => {
        kp.disableFullscreen && (0, Xp.f)() ? (0, Xp.l)() : !kp.disableFullscreen && (0, Xp.j)() && (0, Xp.s)({
          automatic: !0
        })
      }), [ep, kp]), (0, Sp.useEffect)((() => {
        "inGame" === ep && wi()
      }), [ep, kp]), (0, Sp.useEffect)((() => {
        "inGame" !== ep && op.c.set({
          openInGameMenuName: null
        })
      }), [ep]);
      const ap = function(pp) {
        const ip = (0, op.j)(pp),
          [cp, Op] = (0, Sp.useState)(0),
          [Ip, Lp] = (0, Sp.useState)(!1);
        (0, xp.f)("gameJoined", (() => {
          (0, op.j)(op.c.get("gameState")) && (Op((pp => pp + 1)), Lp(!0))
        })), (0, Sp.useEffect)((() => {
          ip || Lp(!1)
        }), [ip]);
        const Yp = "inGame" === pp;
        return {
          mounted: Yp || ip && Ip,
          shown: Yp,
          key: cp
        }
      }(ep);
      return (0, rp.jsx)(rp.Fragment, {
        children: ap.mounted && (0, rp.jsx)(Ip.InGameUi, {
          shown: ap.shown
        }, ap.key)
      })
    }
  },
  5103: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(1211);
    async function op(pp) {
      const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ip.status || 403 === ip.status) return null;
      if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
      return await ip.json()
    }
  },
  9049: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(1356),
      op = cp(1234),
      Ip = cp(640);

    function Sp(pp) {
      return pp = function(pp, ip) {
        var cp;
        const Op = new URLSearchParams(ip),
          op = Op.get("lobby"),
          Ip = Op.get("vm"),
          Sp = null !== (cp = op) && void 0 !== cp ? cp : pp.lobbyName,
          xp = null !== Ip && void 0 !== Ip ? Ip : pp.directJoinVmUrl;
        if (Sp === pp.lobbyName && xp === pp.directJoinVmUrl) return pp;
        return {
          ...pp,
          lobbyName: Sp,
          directJoinVmUrl: xp
        }
      }(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), pp = function(pp) {
        if ((0, Ip.G)(pp.directJoinVmUrl)) return pp;
        const ip = (0, op.Z)(pp.directJoinVmUrl);
        null === ip && (pp.directJoinVmUrl = void 0);
        return pp
      }(pp = function(pp) {
        if ((0, Ip.G)(pp.gameNameWithVariation)) return pp;
        return pp.gameNameWithVariation = (0, Op.m)(pp.gameNameWithVariation), pp
      }(pp))
    }
  },
  9046: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => op
    });
    let Op = !1;

    function op() {
      Op = !0
    }

    function Ip() {
      return Op
    }
  },
  9056: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      c: () => op,
      f: () => Ip,
      i: () => Sp
    });
    let Op = null;

    function op(pp, ip) {
      return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
    }

    function Ip(pp) {
      Op = pp
    }

    function Sp(pp) {
      const ip = Op;
      return Op = null, null !== ip && ip.key === pp ? ip.settled : null
    }

    function xp(pp, ip, cp, Op) {
      let op = !1;
      null !== ip && setTimeout((() => {
        Op() && !op && ip()
      }), 0), pp.then((pp => {
        op = !0, cp(pp)
      }))
    }
  },
  9041: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Wp,
      f: () => Pp,
      j: () => yp
    });
    var Op = cp(3246),
      op = cp(2343),
      Ip = cp(2174),
      Sp = cp(4739),
      xp = cp(3607),
      Lp = cp(9046);
    let Yp = null;

    function Dp() {
      return Promise.all([cp.e(75), cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(160), cp.e(137), cp.e(198), cp.e(140), cp.e(88), cp.e(275), cp.e(64)]).then((() => cp(40873)))
    }

    function Ap() {
      Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).catch((() => {}))
    }

    function Pp() {
      return Sp.b.cancelDownloadForJoin(), (0, xp.c)(), (0, op.e)(), (0, Lp.g)(), (0, Ip.j)(), Ap(), Promise.all([cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(137), cp.e(140), cp.e(59)]).then((() => cp(41270))).then((pp => {
        let {
          startJoinLoad: ip
        } = pp;
        ip()
      }), (() => {})), Yp ??= Dp().then((pp => (pp.startWasmPlay(), pp.followPageUiPack((pp => {
        Op.d.showGamePack(pp)
      })), pp)), (pp => {
        throw Yp = null, pp
      })), Yp
    }

    function Wp() {
      return Ap(), cp.e(276).then((() => cp(41273))).catch((() => {})), Dp().then((() => {}))
    }

    function yp() {
      return Dp().then((pp => {
        pp.startWasmPreviews(), pp.prefetchWasmPreviews()
      }))
    }
  },
  9034: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      f: () => Sp,
      h: () => xp,
      l: () => Yp,
      o: () => Lp
    });
    var Op = cp(195),
      op = cp(4719);

    function Ip(pp) {
      return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Sp(pp) {
      return "object" === typeof pp && null !== pp ? pp.code : void 0
    }

    function xp(pp) {
      var ip;
      return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
    }

    function Lp(pp) {
      return "notWhitelisted" === pp ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Yp = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);