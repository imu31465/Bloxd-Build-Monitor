export const id = 53;
export const ids = [53, 125];
export const modules = {
  37845: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      f: () => Ic
    });
    const Vc = "The world isn't loaded, so no blocks can be seen.",
      Ic = "The world isn't loaded, so nothing in it can be seen."
  },
  8122: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    const Vc = new Set(["chunkBorders"])
  },
  35463: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      cB instanceof Promise ? cB.then(Bc).catch((cB => {
        console.error("Couldn't open the preview", cB)
      })) : Bc(cB)
    }
    nc.d(Bc, {
      c: () => uc
    });
    class Ic {
      constructor(cB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height), null !== this.view && cB.show(this.view))
        }))
      }
      show(cB) {
        var Bc;
        this.view = cB, null === (Bc = this.opened) || void 0 === Bc || Bc.show(cB)
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    class rB {
      constructor(cB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(cB).then((cB => cB.ready)), Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
      }
      setCosmetic(cB, Bc) {
        var nc;
        null === (nc = this.opened) || void 0 === nc || nc.setCosmetic(cB, Bc)
      }
      playEmote(cB) {
        var Bc;
        null === (Bc = this.opened) || void 0 === Bc || Bc.playEmote(cB)
      }
      async untilDrawn(cB) {
        var Bc;
        await this.ready, await (null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    const uc = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(cB) {
        this.host = cB
      }
      setDefaultHost(cB) {
        this.makeDefault = cB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(cB) {
        return new Ic(this.current().openMob(cB))
      }
      openPet(cB) {
        return new Ic(this.current().openPet(cB))
      }
      openMobLineup(cB) {
        return new Ic(this.current().openMobLineup(cB))
      }
      openCharacter(cB) {
        return new rB(this.current().openCharacter(cB))
      }
    }
  },
  37681: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Oc,
      g: () => Tc
    });
    var Vc = nc(152),
      Ic = nc(1305),
      rB = nc(1298),
      uc = nc(2399),
      sc = nc(1314),
      Mc = nc(35124),
      Pc = nc(946),
      qB = nc(37643);

    function Oc(cB) {
      (0, uc.h)("matchmake_failed", cB, Vc.h[Vc.h.SHADER_PACK])
    }
    async function Tc(cB, Bc) {
      var nc;
      const Vc = null === (nc = await qB.shaderPackPage.preload()) || void 0 === nc ? void 0 : nc.listing,
        uc = (0, Mc.d)();
      Vc && null !== uc && await sc.e.reportShaderPackSession(cB, {
        packId: Vc.packId,
        sourceHash: Vc.sourceHash,
        game: (0, rB.g)(Bc, Ic.t, "other"),
        playSessionId: uc,
        visitSessionId: (0, Pc.e)()
      })
    }
  },
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  },
  37666: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    let Vc = !1;
    async function Ic(cB, Bc) {
      if (!Vc) {
        Vc = !0;
        try {
          const [{
            reloadBloxd: Vc
          }, {
            NotificationProvider: Ic
          }] = await Promise.all([Promise.resolve().then((() => nc(1495))), Promise.resolve().then((() => nc(1194)))]);
          if (!cB || !0 === await Ic.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Vc(Bc)
        } catch (Ic) {
          console.error("Leaving the replay failed", Ic)
        }
        Vc = !1
      }
    }
  },
  5465: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => Ic,
      l: () => uc
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      cB.signal.aborted || Vc.set(cB.signal, Bc), cB.abort(Bc)
    }

    function rB(cB) {
      var Bc;
      const nc = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.reason) && void 0 !== Bc ? Bc : cB && Vc.get(cB);
      if (void 0 !== nc && null !== nc) return nc;
      const Ic = new DOMException("signal is aborted without reason", "AbortError");
      return null !== cB && void 0 !== cB && cB.aborted && Vc.set(cB, Ic), Ic
    }

    function uc(cB) {
      if (null !== cB && void 0 !== cB && cB.aborted) throw rB(cB)
    }
  },
  37544: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(5465);

    function Ic(cB, Bc) {
      return new Promise(((nc, Ic) => {
        if (null !== Bc && void 0 !== Bc && Bc.aborted) return void Ic((0, Vc.d)(Bc));
        const rB = () => {
            clearTimeout(uc), Ic((0, Vc.d)(Bc))
          },
          uc = setTimeout((() => {
            null === Bc || void 0 === Bc || Bc.removeEventListener("abort", rB), nc()
          }), cB);
        null === Bc || void 0 === Bc || Bc.addEventListener("abort", rB, {
          once: !0
        })
      }))
    }
  },
  39024: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc
    });
    var Vc = nc(1517);
    const Ic = 33177600,
      rB = 3e4;
    let uc = !1;

    function sc(cB, Bc, nc) {
      if (!cB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (uc) return Promise.reject(new Error("A screenshot is already being taken"));
      uc = !0;
      const Vc = function(cB, Bc, nc) {
        const Vc = Math.max(1, cB),
          rB = Math.max(1, Bc),
          uc = Math.min(1, nc / Math.max(Vc, rB), Math.sqrt(Ic / (Vc * rB)));
        return {
          width: Math.max(1, Math.floor(Vc * uc)),
          height: Math.max(1, Math.floor(rB * uc))
        }
      }(Bc, nc, cB.maxTextureSize);
      return cB.resize(Vc.width, Vc.height), new Promise(((Bc, nc) => {
        let Vc, Ic = 2,
          sc = null;
        const Mc = () => {
          var Bc;
          uc = !1, null === (Bc = sc) || void 0 === Bc || Bc(), clearTimeout(Vc), cB.restoreSize()
        };
        Vc = setTimeout((() => {
          Mc(), nc(new Error("No frame was drawn to capture"))
        }), rB), sc = cB.onFrameDrawn((() => {
          if (Ic--, Ic > 0) return;
          const {
            canvas: Vc
          } = cB, rB = {
            width: Vc.width,
            height: Vc.height
          };
          try {
            Vc.toBlob((cB => {
              cB ? Bc({
                blob: cB,
                ...rB
              }) : nc(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (uc) {
            nc(uc)
          } finally {
            Mc()
          }
        }))
      }))
    }
    async function Mc(cB, Bc, nc) {
      try {
        const Ic = await sc(cB, Bc, nc);
        (0, Vc.c)(Ic.blob, `bloxd-screenshot-${Ic.width}x${Ic.height}-${Date.now()}.png`)
      } catch (Ic) {
        console.error("Error taking screenshot:", Ic)
      }
    }
  },
  8177: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(174),
      Ic = nc(1534),
      rB = nc(51);
    const uc = 2;

    function sc() {
      let cB = Mc("chunkHorizAddDist", Vc.e.defaultChunkHorizAddDistance),
        Bc = Mc("chunkVertAddDist", Vc.e.defaultChunkVertAddDistance);
      return cB = (0, Ic.h)(cB, uc, Vc.e.maxChunkHorizAddDistance), Bc = (0, Ic.h)(Bc, uc, Vc.e.maxChunkVertAddDistance), [cB, Bc]
    }

    function Mc(cB, Bc) {
      const nc = rB.h.getItem(cB),
        Vc = "number" === typeof nc || "string" === typeof nc ? Number(nc) : Number.NaN;
      return Number.isFinite(Vc) ? Vc : Bc
    }
  },
  37535: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(174),
      Ic = nc(37544),
      rB = nc(5465);
    const uc = [250, 500, 1e3, 2e3, 1250],
      sc = 406;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB) return !1;
      const {
        code: Bc,
        message: nc
      } = cB, Ic = Vc.d.duplicateLobbyNameError;
      return (Bc === Ic.code || Bc === sc) && (nc === Ic.text || nc === Ic.text + Vc.g)
    }
    async function Pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.e;
      for (let Ic = 0;; Ic++) {
        let sc;
        (0, rB.l)(Bc);
        try {
          return await cB()
        } catch (Vc) {
          if (sc = uc[Ic], void 0 === sc || !Mc(Vc)) throw Vc
        }
        await nc(sc, Bc)
      }
    }
  },
  37263: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      f: () => Mc,
      j: () => sc,
      k: () => uc
    });
    const Vc = "A valid external Instance reference no longer exists.",
      Ic = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const rB = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function uc(cB, Bc) {
      return cB ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(cB) {
        var Bc;
        const nc = null !== (Bc = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(cB)) && void 0 !== Bc ? Bc : /failed with ([A-Z][A-Z0-9_]+)/.exec(cB);
        return nc ? nc[1] : cB.includes(Vc) ? "gpu_process_lost" : "other"
      }(Bc)
    }

    function sc(cB) {
      return `${(null===cB||void 0===cB?void 0:cB.vendor)||"unknown vendor"} ${(null===cB||void 0===cB?void 0:cB.architecture)||"unknown architecture"}`
    }

    function Mc(cB) {
      var Bc;
      const nc = Ic.find((Bc => {
        let [nc] = Bc;
        return cB < nc
      }));
      return null !== (Bc = null === nc || void 0 === nc ? void 0 : nc[1]) && void 0 !== Bc ? Bc : "30m+"
    }
  },
  37601: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      const nc = cB || 4;
      return nc <= 6 ? 1 : nc <= 8 || Bc ? 2 : 3
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37596: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(244),
      Ic = nc(145),
      rB = nc(51);

    function uc() {
      rB.h.setItem(Vc.Jb, rB.h.getItem(Vc.Jb) + 1), (0, Ic.l)() && rB.h.setItem(Vc.Fb, rB.h.getItem(Vc.Fb) + 1)
    }
  },
  35124: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      h: () => qB,
      l: () => fc,
      n: () => Oc
    });
    var Vc = nc(302),
      Ic = nc(279),
      rB = nc(954),
      uc = nc(51);
    const sc = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Mc = "playSessionGameNameWithVariation",
      Pc = "wasMatchmakePlayer";

    function qB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i;
      (0, rB.i)(cB, sc)
    }

    function Oc() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).setItem(Pc, !0)
    }

    function Tc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i;
      return (0, rB.d)(cB, sc)
    }

    function fc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uc.i;
      const nc = (0, rB.d)(Bc, sc),
        qB = function(cB) {
          const Bc = cB.getItem(Mc);
          return "string" !== typeof Bc ? null : Bc
        }(Bc),
        Oc = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).getItem(Pc)
        }(Bc);
      let Tc;
      return Tc = null !== nc && null !== qB && (0, rB.g)(Bc, sc) && function(cB, Bc, nc) {
          const Ic = (0, Vc.Db)(cB),
            rB = (0, Vc.Db)(Bc),
            uc = (0, Vc.Ab)(cB),
            sc = (0, Vc.Ab)(Bc);
          return !(Ic !== rB || !nc) || Ic === rB && uc === sc
        }(qB, cB, Oc) ? nc : (0, Ic.d)(), (0, rB.m)(Bc, sc, Tc), Bc.setItem(Mc, cB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).removeItem(Pc)
        }(Bc), Tc
    }
  },
  35121: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => ec,
      d: () => tB
    });
    var Vc = nc(867),
      Ic = nc(283),
      rB = nc(302),
      uc = nc(876),
      sc = nc(3638),
      Mc = nc(107),
      Pc = nc(145),
      qB = nc(1495),
      Oc = nc(125),
      Tc = nc(35124),
      fc = nc(51),
      mB = nc(946);

    function ec() {
      var cB, Bc;
      return [...null !== (cB = navigator.languages) && void 0 !== cB ? cB : [null !== (Bc = navigator.language) && void 0 !== Bc ? Bc : "none"], "En-Gb"]
    }

    function tB(cB, Bc, nc, tB, Sc) {
      const yB = (0, Vc.k)(Bc) ? (0, Vc.r)(Bc) : null,
        zB = {
          cookies: (0, qB.getAllCookiesForGameNameWithVariation)(Bc),
          isMobile: (0, Mc.isMobile)(),
          isUsingCustomGameTexturePack: null !== yB && Sc(yB),
          generalCookies: {
            joinDiscord: !!fc.h.getItem("DiscordPressed"),
            newGo: sc.b,
            ...cB.getMetricsCookies(),
            trafficCode: tB,
            compliance: Mc.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Mc.getBrowserName)(),
            version: (0, Mc.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Mc.getPlatformType)(),
            deviceType: (0, Oc.b)()
          },
          isLoggedIn: cB.isLoggedIn(),
          lobbyName: nc,
          languages: ec(),
          version: Ic.c,
          siteUsed: Pc.r,
          subsiteUsed: Pc.A,
          playSessionId: (0, Tc.l)(Bc),
          visitSessionId: (0, mB.e)()
        };
      return null !== yB && (0, rB.gc)(yB) ? (zB.lobbyName = (0, Vc.g)(yB, (0, Vc.o)(Bc), nc), {
        roomName: `classic_${uc.c}`,
        joinOptions: zB
      }) : {
        roomName: Bc,
        joinOptions: zB
      }
    }
  },
  37689: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  38666: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc
    });
    var Vc = nc(37845);

    function Ic(cB) {
      return {
        current: () => cB,
        watch: () => () => {}
      }
    }

    function rB() {}
    const uc = Object.freeze([0, 0, 0]),
      sc = {
        states: {
          health: Ic({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ic({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ic({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ic({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ic({}),
          creativeVisibility: Ic({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ic(null),
          heldItemAim: Ic({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ic(!1),
          gliderBoostFuel: Ic(0),
          flight: Ic({
            canFly: !1,
            flying: !1
          }),
          crafting: Ic({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ic({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ic({}),
          fullInventory: Ic(!1),
          crosshairTarget: Ic({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ic(!0),
          replay: Ic(null),
          replayEdits: Ic(null),
          replayRecorder: Ic({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ic(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: rB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: rB,
          setInventoryOpen: rB,
          changeIronChestPasskey: rB,
          dragReplayCamera: rB,
          applyTemporaryThirdPerson: rB,
          holdEmoteWheel: rB,
          recordFlyingMiddleText: rB,
          focusCrafting: rB,
          craftRecipe: () => ({
            YF: 0,
            FX: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: rB,
          setShopOpen: rB,
          buyShopItem: rB,
          sendChatMessage: rB,
          ignorePlayer: rB,
          reportPlayer: rB,
          reportWorldCodeChat: rB,
          requestDiscordReportKey: rB,
          reportLobbyOrGame: rB,
          playEmote: rB,
          updateMyCosmetic: rB,
          writeOnBoard: rB,
          writeBook: rB,
          writeNameTag: rB,
          setCustomLobbyBlock: rB,
          openIronChest: rB,
          sendCodeCollab: rB,
          clickCodeBlock: rB,
          bindCustomButtonKeys: rB,
          pressCustomButton: rB,
          moveReplayFreecam: rB,
          holdReplayFreecamVertical: rB,
          respawn: rB,
          wakeUp: rB,
          requestLeaderboard: rB,
          completeTask: rB,
          setServerCookie: rB,
          answerUiRequest: rB,
          chooseRewardedAd: rB,
          setCameraZoom: rB,
          setCrosshairInteractPrompt: rB,
          setLookSensitivity: rB,
          replayAction: rB,
          setReplayPlaying: rB,
          seekReplay: rB,
          setReplayCameraMode: rB,
          syncReplayCameraMode: rB,
          setReplayCameraKeyframe: rB,
          moveReplayCameraKeyframe: rB,
          deleteReplayCameraKeyframes: rB,
          setReplayPlaybackMark: rB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: rB,
          exportReplayVideo: rB,
          toggleRecording: rB,
          saveClip: rB,
          setRecorderPrefs: rB,
          setReplayViewerOpen: rB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Vc.d,
          worldCodeAiGameState: () => Vc.f
        },
        lookups: {
          localPos: () => uc,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  8175: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      e: () => Ic,
      i: () => rB
    });
    const Vc = 1024,
      Ic = 1024 * Vc;

    function rB(cB) {
      return (cB / Ic).toFixed(1)
    }
  },
  8172: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      c: () => sc,
      f: () => uc,
      j: () => qB,
      n: () => Oc,
      o: () => Pc
    });
    var Vc = nc(174);
    const Ic = 32 * nc(8175).e,
      rB = 6144,
      uc = 4608,
      sc = 512,
      Mc = 4;

    function Pc(cB) {
      return "number" === typeof cB && cB < Mc
    }

    function qB(cB) {
      return Math.floor(Ic * cB / rB)
    }

    function Oc(cB) {
      const Bc = cB - Math.floor(cB / 6);
      let nc = Vc.e.maxChunkHorizAddDistance,
        Ic = Vc.e.maxChunkVertAddDistance;
      if (Tc(nc + 1, Ic + 1) <= Bc) return null;
      for (; Tc(nc + 1, Ic + 1) > Bc && (nc > 0 || Ic > 0);) nc > Ic ? nc-- : Ic--;
      return {
        horizontal: nc,
        vertical: Ic
      }
    }

    function Tc(cB, Bc) {
      const nc = Math.max(cB, Bc);
      let Vc = 0;
      for (let Ic = -nc; Ic <= nc; Ic++)
        for (let rB = -nc; rB <= nc; rB++)
          for (let uc = -nc; uc <= nc; uc++) fc(cB, Bc, Ic, rB, uc) && Vc++;
      return Vc
    }

    function fc(cB, Bc, nc, Vc, Ic) {
      const rB = nc * nc + Ic * Ic;
      return cB === Bc ? rB + Vc * Vc <= cB * cB : cB > Bc ? Math.abs(Vc) <= Bc && rB + Vc * Vc <= cB * cB : rB <= cB * cB && rB + Vc * Vc <= Bc * Bc
    }
  },
  38835: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      g: () => rB,
      j: () => sc,
      k: () => qB,
      m: () => Mc,
      q: () => uc
    });
    var Vc = nc(174);
    const Ic = 3e3,
      rB = 15e3;

    function uc(cB) {
      const Bc = cB.endsWith(Vc.g);
      return {
        text: (Bc ? cB.slice(0, -Vc.g.length) : cB) || null,
        dropsCache: Bc
      }
    }
    const sc = "Either your internet isn't working or this is a bug.";

    function Mc(cB, Bc) {
      const nc = qB(cB);
      return null !== nc.name && "" === Vc.d[nc.name].text && null !== Bc ? Bc : nc.reason
    }
    const Pc = "You were removed from the game.";

    function qB(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Ic = null !== (Bc = Object.keys(Vc.d).find((Bc => Vc.d[Bc].code === cB))) && void 0 !== Bc ? Bc : null;
      if (null === Ic) return {
        code: cB,
        name: Ic,
        reason: null !== nc && void 0 !== nc ? nc : `${sc}\nCode: ${cB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: rB,
        canReconnect: uc = !1
      } = Vc.d[Ic], Mc = cB === Vc.d.outdatedVersion.code || cB === Vc.d.loadRecaptchaError.code;
      return {
        code: cB,
        name: Ic,
        reason: "" !== rB ? rB : null !== nc && void 0 !== nc ? nc : cB === Vc.d.gameOrPluginKick.code ? Pc : `Code: ${cB}`,
        canReconnect: uc,
        automaticallyReconnect: cB === Vc.d.customGameUpdated.code || cB === Vc.d.duplicateLobbyNameError.code,
        requiresRefresh: Mc
      }
    }
  },
  38647: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      g: () => Oc,
      k: () => sc,
      n: () => rB,
      r: () => Ic,
      s: () => Mc,
      v: () => qB
    });
    class Vc extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ic(cB) {
      return cB instanceof RangeError && /call stack/i.test(cB.message) || cB instanceof Error && "InternalError" === cB.name && /recursion/i.test(cB.message)
    }

    function rB(cB) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(cB))
    }
    const uc = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function sc(cB) {
      var Bc;
      return cB instanceof WebAssembly.RuntimeError || cB instanceof Vc || Ic(cB) && uc.test(null !== (Bc = cB.stack) && void 0 !== Bc ? Bc : "")
    }

    function Mc(cB, Bc) {
      if (sc(cB)) throw cB;
      console.error(Bc, cB)
    }

    function Pc(cB, Bc, nc, Ic, rB) {
      if (Bc % Ic !== 0 || Bc + nc > cB.byteLength) throw new Vc(`${rB}: ${nc} bytes at ${Bc}, ${Ic}-aligned, outside ${cB.byteLength} bytes of memory`)
    }

    function qB(cB, Bc, nc, Vc, Ic) {
      return 0 === nc ? null : (Pc(Bc, nc, Vc * cB.BYTES_PER_ELEMENT, cB.BYTES_PER_ELEMENT, Ic), new cB(Bc, nc, Vc))
    }

    function Oc(cB, Bc, nc, Vc, Ic) {
      return 0 === Bc ? null : (Pc(cB, Bc, nc, Vc, Ic), new DataView(cB, Bc, nc))
    }
  },
  38956: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    const Vc = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  38905: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => mB,
      g: () => ec,
      h: () => Tc,
      i: () => Oc
    });
    const Vc = 2e3,
      Ic = "unavailable";
    let rB = () => Promise.resolve().then((() => nc(2402))),
      uc = null,
      sc = null,
      Mc = Pc();

    function Pc() {
      let cB = () => {};
      return {
        promise: new Promise((Bc => {
          cB = () => {
            Bc(null)
          }
        })),
        resolve: cB
      }
    }

    function qB() {
      if (null === uc) {
        const cB = rB();
        uc = cB, cB.then((Bc => {
          uc === cB && (sc = Bc)
        }), (() => {
          uc === cB && (uc = null)
        }))
      }
      return uc
    }

    function Oc() {
      qB().catch((() => {}))
    }

    function Tc() {
      Mc.resolve()
    }

    function fc(cB, Bc, nc, Vc) {
      if (null === cB) return {
        errorKind: Bc,
        fingerprint: Ic,
        dedupe: `${Bc}|${Vc}`
      };
      const {
        fingerprint: rB
      } = cB.clientErrorKey(Bc, nc, Vc);
      return {
        errorKind: Bc,
        fingerprint: rB,
        dedupe: rB
      }
    }

    function mB(cB, Bc, nc, Vc) {
      return null === sc ? Vc ? (Oc(), fc(null, cB, Bc, nc)) : null : fc(sc, cB, Bc, nc)
    }
    async function ec(cB, Bc, nc) {
      let Ic;
      const rB = new Promise((cB => {
        Ic = setTimeout((() => {
          cB(null)
        }), Vc)
      }));
      try {
        return fc(await Promise.race([qB(), rB, Mc.promise]), cB, Bc, nc)
      } catch {
        return fc(null, cB, Bc, nc)
      } finally {
        clearTimeout(Ic)
      }
    }
  },
  38900: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BUILT_IN_ANIMATIONS_SITE: () => BB,
      CORE_ERRORS_SITE: () => Jc,
      EVENT_OVERFLOW_SITE: () => cn,
      JOIN_SITE: () => Rc,
      LEAVE_SITE: () => iB,
      MODEL_FEED_SITE: () => Kc,
      MODEL_POOL_SITE: () => xB,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => IB,
      NON_FATAL_REPORTS_PER_SESSION: () => zn,
      PREVIEW_ANIMATIONS_SITE: () => Gc,
      RENDER_RELOAD_SITE: () => Ac,
      TEXTURE_NAMES_SITE: () => dc,
      TEXTURE_PACK_FEED_SITE: () => nB,
      TurnstilePageError: () => JB,
      WASM_LOAD_SITE: () => jB,
      crashError: () => YB,
      crashReportsSettled: () => QB,
      flushCrashReports: () => bn,
      joinFailureCode: () => jn,
      lokiTransport: () => sB,
      modelFailureCode: () => GB,
      readTrap: () => DB,
      renderLossDetail: () => fn,
      reportCoreErrors: () => vn,
      reportCountedLoadFallback: () => HB,
      reportCrash: () => LB,
      reportDataLoadFailure: () => Sn,
      reportDisconnect: () => AB,
      reportDracoDecoderFailure: () => nn,
      reportEventOverflow: () => rV,
      reportMemoryShed: () => Mn,
      reportModelFailure: () => cV,
      reportModelPoolFailure: () => Bn,
      reportPageJoinFailure: () => KB,
      reportRenderReload: () => mV,
      reportReplayFault: () => qV,
      reportStaleBuildReload: () => zV,
      reportStoppedCore: () => WB,
      reportTerrainTextureFailure: () => en,
      reportTexturePackFeedLoadFailure: () => In,
      reportUnstreamedCoreLoad: () => FB,
      reportUnsupportedFallback: () => XB,
      reportUnusedSeat: () => dB,
      reportWorkerLost: () => un,
      reportWorkerStartTimeout: () => Pn,
      reportWorldgenGaveUp: () => sn,
      reportWorldgenLoadFailure: () => Vn,
      resetCrashReports: () => CB,
      setCrashBackend: () => mn,
      setCrashScreen: () => TB,
      setCrashTransport: () => qn,
      showCrash: () => oB,
      showJoinFailure: () => RB,
      showUnsupported: () => kn
    });
    var Vc = nc(938),
      Ic = nc(2408),
      rB = nc(38905),
      uc = nc(3838),
      sc = nc(3846);
    const Mc = {
        1: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer"
      },
      Pc = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      qB = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      Oc = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function Tc(cB) {
      return String(cB).replace(/\d/g, (cB => String.fromCharCode(97 + Number(cB))))
    }

    function fc(cB, Bc) {
      var nc;
      return null !== (nc = cB[Bc]) && void 0 !== nc ? nc : Tc(Bc)
    }

    function mB(cB, Bc) {
      switch (cB) {
        case sc.c.RenderSceneRowNotDrawn:
          return {
            words: ` ${fc(qB,Bc)}`, instance: String(Bc), group: String(cB)
          };
        case sc.c.RenderChunkMeshNotDrawn: {
          const nc = 0 === (128 & Bc) ? "" : " shortage",
            Vc = Bc >>> 8;
          return {
            words: ` ${fc(Oc,127&Bc)}${nc}${0===Vc?"":` kind ${Tc(Vc)}`}`,
            instance: String(Bc),
            group: String(cB)
          }
        }
        case sc.c.RenderInternal: {
          const nc = fc(Pc, 255 & Bc),
            Vc = Bc >>> 8 & 255;
          if (0 === Vc) return {
            words: ` ${nc}`,
            instance: String(Bc),
            group: String(cB)
          };
          const Ic = fc(Mc, Vc),
            rB = Bc >>> 16;
          return {
            words: ` ${nc} ${Ic} program ${Tc(rB)}`,
            instance: `${nc} ${Ic}`,
            group: "program",
            program: {
              programFailure: Ic,
              program: String(rB)
            }
          }
        }
        default:
          return null
      }
    }
    const ec = 2,
      tB = new Map;

    function Sc(cB) {
      let {
        group: Bc,
        instance: nc
      } = cB, Vc = tB.get(Bc);
      return void 0 === Vc && (Vc = [], tB.set(Bc, Vc)), !Vc.includes(nc) && (Vc.length >= ec || (Vc.push(nc), !1))
    }
    var yB = nc(37263);

    function zB(cB) {
      return 1006 === cB || 1001 === cB
    }

    function pc(cB) {
      return cB < 1e3 ? "<1s" : cB < 5e3 ? "1-5s" : cB < 3e4 ? "5-30s" : cB < 3e5 ? "30s-5m" : ">5m"
    }

    function hc() {
      return {
        online: "undefined" === typeof navigator ? "" : String(navigator.onLine),
        visibility: "undefined" === typeof document ? "" : document.visibilityState
      }
    }
    var aB = nc(35097),
      lc = nc(38890),
      Yc = nc(38598),
      Lc = nc(38843),
      gB = nc(2048),
      Uc = nc(38835),
      bB = nc(38863);
    const Zc = "seat reservation expired.",
      Qc = "early_leave";

    function Cc(cB) {
      if (cB instanceof Lc.l) return cB.networkLost ? "expected" : "unrecognised";
      if (cB instanceof Lc.b) {
        if ("closed" === cB.stage && (0 === cB.code || zB(cB.code))) return "expected";
        if ("roomError" === cB.stage && (cB.serverText === Zc || cB.serverText === Qc)) return "expected"
      }
      return cB instanceof Lc.b || cB instanceof Lc.k ? null === (0, Uc.k)(cB.code).name ? "unrecognised" : "known" : (0, gB.h)(cB) ? "expected" : cB instanceof Lc.p || cB instanceof bB.b ? "known" : "unrecognised"
    }
    var vB = nc(38914),
      Dc = nc(2870),
      Nc = nc(2876),
      Ec = nc(38923),
      oc = nc(38944),
      Wc = nc(38963),
      wc = nc(2410),
      kB = nc(38887),
      Xc = nc(38810),
      Hc = nc(38814);
    const Fc = "[bloxd-wasm-client]",
      Jc = "coreErrors",
      jB = "wasmLoad",
      Rc = "join",
      iB = "OV",
      Kc = "modelFeed",
      xB = "modelWorkerPool",
      dc = "textureNames",
      Ac = "renderReload",
      Gc = "previewAnimations",
      cn = "eventOverflow",
      BB = "builtInAnimations",
      nB = "texturePackFeed",
      VB = 300,
      IB = 8;
    let rn = 0;
    const uB = new Set,
      sB = (cB, Bc) => {
        const nc = eB[cB.kind];
        if (null === nc) return void MB(cB, Bc, fB, null);
        const Vc = (0, rB.e)(nc, cB.message, cB.code, cB.fatal);
        if (null !== Vc) return void MB(cB, Bc, fB, Vc);
        const Ic = fB;
        UB("Loki", (async () => {
          MB(cB, Bc, Ic, await (0, rB.g)(nc, cB.message, cB.code))
        }))
      };

    function MB(cB, Bc, nc, rB) {
      const {
        kind: uc,
        code: sc,
        site: Mc,
        fatal: Pc,
        details: qB
      } = cB;
      if (!Pc)
        if (null === rB || (0, Ic.e)(rB.errorKind) || uB.has(rB.dedupe)) {
          if (rn >= IB) return;
          rn++
        } else uB.add(rB.dedupe);
      const Oc = {
        ...qB,
        kind: uc,
        code: sc,
        site: Mc,
        fatal: String(Pc),
        backend: nc
      };
      null !== rB && (Oc.errorKind = rB.errorKind, Oc.fingerprint = rB.fingerprint), Bc instanceof Error && "string" === typeof Bc.stack && (Oc.causeStack = Bc.stack.slice(0, 2e3)), (0, Vc.wI)(YB(cB, Bc), Oc)
    }
    let PB = sB;

    function qn(cB) {
      const Bc = PB;
      return PB = cB, Bc
    }
    let OB = () => {};

    function TB(cB) {
      const Bc = OB;
      return OB = cB, Bc
    }
    let fB = "unpicked";

    function mn(cB) {
      fB = cB
    }
    const eB = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect"
      },
      tn = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load"
      },
      SB = new Set(["unstreamedLoad"]);
    let yn = !1;
    const zn = 20,
      pB = new Map;
    let hB = 0,
      an = 0;
    const lB = new Set;

    function YB(cB, Bc) {
      return Object.assign(new Error(`${cB.code}: ${cB.message}`), {
        name: "WasmClientCrash",
        cause: null !== Bc && void 0 !== Bc ? Bc : void 0
      })
    }

    function LB(cB) {
      var Bc, Vc;
      const {
        kind: Ic,
        code: rB,
        site: uc,
        fatal: sc,
        message: Mc,
        error: Pc
      } = cB, qB = !1 !== cB.toTransport && !SB.has(Ic), Oc = !sc && qB, Tc = {
        kind: Ic,
        code: rB,
        site: uc,
        fatal: sc,
        message: Mc,
        details: null !== (Bc = cB.details) && void 0 !== Bc ? Bc : {}
      }, fc = `${rB}@${uc}${void 0===cB.instance?"":`#${cB.instance}`}${sc?"!":""}`, mB = (null !== (Vc = pB.get(fc)) && void 0 !== Vc ? Vc : 0) + 1;
      if (pB.set(fc, mB), mB > 1 ? 0 === (mB & mB - 1) && gn((() => {
          console.warn(`${Fc} ${rB} at ${uc} reported ${mB} times`)
        })) : Oc && hB >= zn ? gn((() => {
          console.warn(`${Fc} ${Ic} ${rB} at ${uc}: ${Mc} (not sent: the session's ${zn} went)`, Tc.details, null !== Pc && void 0 !== Pc ? Pc : "")
        })) : (Oc && hB++, function(cB, Bc, Vc) {
          var Ic, rB;
          const {
            kind: uc,
            code: sc,
            site: Mc,
            fatal: Pc,
            message: qB,
            details: Oc
          } = cB;
          gn((() => {
            (Pc ? console.error : console.warn)(`${Fc} ${uc} ${sc} at ${Mc}: ${qB}`, Oc, null !== Bc && void 0 !== Bc ? Bc : "")
          }));
          const Tc = tn[uc],
            fc = null !== (Ic = null !== (rB = eB[uc]) && void 0 !== rB ? rB : Tc) && void 0 !== Ic ? Ic : null;
          null !== fc && UB("counts", (async () => {
            const {
              peekVisitSessionId: cB
            } = await Promise.resolve().then((() => nc(946)));
            if (null !== cB()) {
              const {
                reportCappedWasmFailure: cB,
                reportWasmFailure: Bc
              } = await nc.e(190).then((() => nc(35024)));
              (void 0 === Tc ? Bc : cB)(fc, qB, sc), yn = !0
            }
          }));
          Vc && gn((() => {
            PB(cB, Bc)
          }))
        }(Tc, Pc, qB)), sc) {
        var ec;
        const Bc = null !== (ec = cB.screen) && void 0 !== ec ? ec : {
          text: (0, Wc.f)(Tc, !0),
          reload: !0
        };
        gn((() => {
          OB(Bc)
        }))
      }
      return Tc
    }

    function gn(cB) {
      try {
        cB()
      } catch (Bc) {
        try {
          console.warn(`${Fc} could not send a report`, Bc)
        } catch {}
      }
    }

    function UB(cB, Bc) {
      try {
        const nc = Bc().catch((Bc => {
          console.warn(`${Fc} could not send the report to ${cB}`, Bc)
        })).finally((() => {
          lB.delete(nc)
        }));
        lB.add(nc)
      } catch (nc) {
        console.warn(`${Fc} could not send the report to ${cB}`, nc)
      }
    }
    async function bn(cB) {
      let Bc;
      (0, rB.h)();
      const nc = new Promise((nc => {
        Bc = setTimeout(nc, cB)
      }));
      await Promise.race([ZB(), nc]), clearTimeout(Bc)
    }
    async function ZB() {
      if (await Promise.allSettled([...lB]), yn) try {
        const {
          flushClientAnalyticsEvents: cB
        } = await Promise.resolve().then((() => nc(1309)));
        await cB()
      } catch (cB) {
        console.warn(`${Fc} could not send the counts`, cB)
      }
    }
    async function QB() {
      for (; lB.size > 0;) await Promise.allSettled([...lB])
    }

    function CB() {
      pB.clear(), hB = 0, yn = !1, rn = 0, uB.clear(), an = 0, tB.clear()
    }

    function vn(cB, Bc, nc, Vc) {
      an += Bc;
      for (const {
          code: sc,
          detail: Mc
        }
        of cB) {
        var Ic, rB;
        const cB = (0, uc.sd)(sc),
          Bc = mB(sc, Mc),
          Pc = Array.from(null !== (Ic = null === Vc || void 0 === Vc ? void 0 : Vc(sc, Mc)) && void 0 !== Ic ? Ic : "").slice(0, VB).join(""),
          qB = `core error ${cB}${null!==(rB=null===Bc||void 0===Bc?void 0:Bc.words)&&void 0!==rB?rB:""}${Pc?`: ${Pc}`:""}`,
          Oc = {
            errorCode: String(sc),
            detail: String(Mc),
            droppedBefore: String(an),
            wasmBuild: nc.wasm,
            clientVersion: nc.client,
            ...null === Bc || void 0 === Bc ? void 0 : Bc.program
          };
        null !== Bc && Sc(Bc) ? gn((() => {
          console.warn(`${Fc} coreError CORE-${cB}: ${qB} (not sent: the session's render warnings of its kind went)`, Oc)
        })) : LB({
          kind: sc === uc.F.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${cB}`,
          site: Jc,
          fatal: !1,
          message: qB,
          details: Oc,
          instance: null === Bc || void 0 === Bc ? void 0 : Bc.instance
        })
      }
    }

    function DB(cB) {
      return (0, kB.h)(cB instanceof Xc.b ? cB.trap : cB, Dc.K, Dc._)
    }
    const NB = "declined=js";

    function EB(cB) {
      return cB ? {
        labels: [NB],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function oB(cB, Bc, nc) {
      return wB(cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function WB(cB, Bc, nc) {
      return wB(cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function wB(cB, Bc, nc, Vc, Ic) {
      let {
        memoryDetails: rB = {},
        declined: uc = !1
      } = Vc;
      const {
        code: sc,
        details: Mc,
        message: Pc
      } = (0, lc.P)(cB, Bc), qB = [];
      null !== nc && (Mc.trapKind = nc.kind, null !== nc.panic && (Mc.panic = (0, kB.d)(nc.panic)), nc.refusedBytes > 0 && (Mc.refusedAllocation = String(nc.refusedBytes)), qB.push((0, kB.l)(nc.kind, nc.refusedBytes)));
      const Oc = EB(uc);
      return LB({
        kind: "crash",
        code: sc,
        site: cB.site,
        fatal: Ic,
        message: [...qB, ...Oc.labels, Pc].join("; "),
        details: {
          ...Mc,
          ...Oc.details,
          ...rB
        },
        error: cB.error
      })
    }

    function kn(cB, Bc, nc) {
      return LB({
        kind: "unsupported",
        code: Bc,
        site: jB,
        fatal: !0,
        message: nc,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: cB,
          status: Bc
        },
        screen: {
          text: (0, Wc.p)(cB),
          reload: "download" === cB
        }
      })
    }

    function XB(cB, Bc) {
      return LB({
        kind: "unsupportedFallback",
        code: "unsupported",
        site: jB,
        fatal: !1,
        message: Bc,
        details: {
          ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          cause: cB,
          status: "unsupported",
          fallback: "js"
        }
      })
    }

    function HB(cB, Bc, nc, Vc) {
      const Ic = EB(Vc);
      return LB({
        kind: "unsupported",
        code: Bc,
        site: jB,
        fatal: !1,
        message: [...Ic.labels, nc].join("; "),
        details: {
          cause: cB,
          status: Bc,
          fallback: "js",
          ...Ic.details
        }
      })
    }

    function FB() {
      const {
        code: cB,
        message: Bc
      } = wc.d;
      return LB({
        kind: "unstreamedLoad",
        code: cB,
        site: jB,
        fatal: !1,
        message: Bc
      })
    }
    class JB extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function jn(cB) {
      return cB instanceof Lc.k ? 0 === cB.code ? "JOIN-matchmake" : `JOIN-${cB.code}` : cB instanceof Lc.b ? 0 === cB.code ? `JOIN-${cB.stage}` : `JOIN-${cB.stage}-${cB.code}` : cB instanceof Yc.b ? "JOIN-gameCode" : cB instanceof JB ? "JOIN-turnstilePage" : cB instanceof Lc.p ? "JOIN-trafficCheck" : "JOIN-network"
    }

    function RB(cB, Bc) {
      const nc = (0, Hc.e)(cB),
        Vc = {
          wasmBuild: Bc.wasm,
          clientVersion: Bc.client
        },
        Ic = cB instanceof JB ? {
          text: (0, Wc.j)(),
          reload: !1
        } : void 0,
        rB = Cc(cB),
        uc = "expected" !== rB;
      return LB({
        kind: "join",
        code: jn(cB),
        site: Rc,
        fatal: !0,
        message: nc,
        details: Vc,
        error: cB,
        screen: Ic,
        toTransport: uc,
        instance: rB
      })
    }

    function KB(cB, Bc, nc) {
      var Vc;
      const Ic = Cc(cB),
        rB = {
          cause: (cB instanceof Lc.b || cB instanceof Lc.k) && null !== (Vc = cB.serverText) && void 0 !== Vc ? Vc : "",
          sinceJoinStart: pc(nc.sinceJoinStartMs),
          game: nc.game,
          ...hc(),
          wasmBuild: Bc.wasm,
          clientVersion: Bc.client
        };
      return LB({
        kind: "pageJoin",
        code: jn(cB),
        site: Rc,
        fatal: !1,
        message: (0, Hc.e)(cB),
        details: rB,
        error: cB,
        toTransport: "unrecognised" === Ic,
        instance: Ic
      })
    }
    const xn = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function dB(cB, Bc) {
      let {
        unused: nc,
        answered: Vc,
        heldMs: Ic
      } = cB;
      const {
        code: rB,
        message: uc
      } = xn[nc], sc = {
        unused: nc,
        answered: String(Vc),
        heldMs: String(Ic),
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "seat",
        code: rB,
        site: Rc,
        fatal: !1,
        message: uc,
        details: sc
      })
    }

    function AB(cB, Bc, nc) {
      var Vc;
      const Ic = {
          closeCode: String(cB.code),
          recognised: String(null !== cB.name),
          closeReason: nc.closeReason,
          sinceJoined: pc(nc.sinceJoinedMs),
          game: nc.game,
          ...hc(),
          wasmBuild: Bc.wasm,
          clientVersion: Bc.client
        },
        rB = null !== (Vc = cB.name) && void 0 !== Vc ? Vc : String(cB.code),
        uc = null === cB.name && !zB(cB.code);
      return LB({
        kind: "disconnect",
        code: rB,
        site: iB,
        fatal: !1,
        message: "Left room",
        details: Ic,
        toTransport: uc
      })
    }

    function GB(cB) {
      return cB.error instanceof Nc.g ? `MODEL-${cB.error.status}` : cB.error instanceof Ec.j ? "MODEL-ring" : "MODEL-network"
    }

    function cV(cB, Bc) {
      const nc = GB(cB),
        Vc = `model file ${cB.file} ${cB.startup?"(startup) ":""}could not load`,
        Ic = {
          file: String(cB.file),
          url: cB.url,
          wasmBuild: Bc.wasm,
          clientVersion: Bc.client
        };
      return LB({
        kind: cB.startup ? "model" : "modelLate",
        code: nc,
        site: Kc,
        fatal: cB.startup,
        message: Vc,
        details: Ic,
        error: cB.error
      })
    }

    function Bn(cB, Bc) {
      const nc = {
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: xB,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: nc,
        error: cB
      })
    }

    function nn(cB, Bc) {
      const nc = {
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: xB,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: nc,
        error: cB
      })
    }

    function Vn(cB, Bc) {
      const nc = {
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: lc.H,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: nc,
        error: cB
      })
    }

    function In(cB, Bc) {
      const nc = {
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: nB,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: nc,
        error: cB
      })
    }

    function rV(cB, Bc) {
      const {
        frames: nc,
        acks: Vc,
        mask: Ic,
        outcome: rB
      } = cB, uc = {
        frames: String(nc),
        acks: String(Vc),
        mask: String(Ic),
        outcome: null !== rB && void 0 !== rB ? rB : "resynced",
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "recovered",
        code: "rejoined" === rB ? "CORE-eventOverflowRejoin" : "failed" === rB ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: cn,
        fatal: !1,
        message: `the event buffer refused records in ${nc} frames`,
        details: uc
      })
    }

    function un(cB, Bc, nc) {
      return LB({
        kind: "recovered",
        code: "CORE-workerLost",
        site: cB,
        fatal: !1,
        message: `a ${cB} worker was lost`,
        details: {
          reason: Bc,
          wasmBuild: nc.wasm,
          clientVersion: nc.client
        }
      })
    }

    function sn(cB, Bc) {
      const nc = {
        lastReason: cB,
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return LB({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: lc.H,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: nc
      })
    }

    function Mn(cB, Bc, nc) {
      return LB({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: lc.m,
        fatal: !1,
        message: (0, vB.g)(cB) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: cB,
          ...Bc,
          wasmBuild: nc.wasm,
          clientVersion: nc.client
        }
      })
    }

    function Pn(cB, Bc, nc) {
      return LB({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: cB,
        fatal: !1,
        message: `a ${cB} worker did not start`,
        details: {
          waitedMs: String(Math.round(Bc)),
          wasmBuild: nc.wasm,
          clientVersion: nc.client
        }
      })
    }

    function qV(cB, Bc, nc) {
      return LB({
        kind: "recovered",
        code: "CORE-replayFault",
        site: cB,
        fatal: !1,
        message: `the replay's ${cB} failed`,
        details: {
          wasmBuild: nc.wasm,
          clientVersion: nc.client
        },
        error: Bc
      })
    }
    const On = {
        lost: "render device was lost",
        frames_refused: "render device refused a frame",
        start_failed: "renderer couldn't start"
      },
      Tn = {
        adapter: null,
        boundAtMs: null
      };

    function fn(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Ic = null === Bc || void 0 === Bc ? void 0 : Bc.message,
        rB = Bc instanceof aB.d ? "timeout" : (0, yB.k)("frames_refused" === cB, "string" === typeof Ic ? Ic : ""),
        uc = null === nc.boundAtMs ? "unbound" : `up${(0,yB.f)(Vc-nc.boundAtMs)}`,
        sc = null === nc.adapter ? "no adapter" : (0, yB.j)(nc.adapter);
      return `${rB} ${(0,aB.e)()?"hidden":"visible"} ${uc} ${sc}`
    }

    function mV(cB, Bc, Vc) {
      let {
        cause: Ic = "lost",
        error: rB,
        context: uc = Tn
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const sc = fn(Ic, rB, uc),
        Mc = {
          losses: String(Bc),
          cause: Ic,
          detail: sc,
          wasmBuild: Vc.wasm,
          clientVersion: Vc.client
        },
        Pc = `the ${cB} ${On[Ic]}`,
        qB = LB({
          kind: "recovered",
          code: "CORE-renderLost",
          site: Ac,
          fatal: !1,
          message: Pc,
          details: Mc,
          error: rB
        });
      return UB("ga", (async () => {
        const {
          logError: Bc
        } = await Promise.resolve().then((() => nc(2230))), Vc = `${yB.b["webgpu"===cB?"WebGPU":"WebGL2"]}\n Error: ${sc}`;
        Bc("warning", Vc), Bc("error", Vc)
      })), qB
    }

    function en(cB, Bc) {
      var nc, Vc;
      const Ic = null === cB.name ? "TEXTURE-sources" : null === cB.url ? "TEXTURE-nourl" : cB.error instanceof oc.e ? `TEXTURE-${cB.error.status}` : "TEXTURE-network",
        rB = null === cB.name ? "terrain textures could not load" : `terrain texture ${cB.name} could not load`,
        uc = {
          texture: null !== (nc = cB.name) && void 0 !== nc ? nc : "",
          url: null !== (Vc = cB.url) && void 0 !== Vc ? Vc : "",
          wasmBuild: Bc.wasm,
          clientVersion: Bc.client
        };
      return LB({
        kind: "terrainTexture",
        code: Ic,
        site: lc.E,
        fatal: !1,
        message: rB,
        details: uc,
        error: cB.error
      })
    }
    const tV = {
      previewAnimations: {
        site: Gc,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: BB,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Sn(cB, Bc, nc, Vc) {
      const {
        site: Ic,
        prefix: rB,
        name: uc
      } = tV[cB], {
        stage: sc,
        error: Mc
      } = nc;
      return LB({
        kind: cB,
        code: "decode" === sc ? null === Mc ? `${rB}-decode` : `${rB}-trap` : Mc instanceof Nc.g ? `${rB}-${Mc.status}` : `${rB}-network`,
        site: Ic,
        fatal: !1,
        message: "decode" === sc ? `${uc} did not decode` : `${uc} could not load`,
        details: {
          url: Bc,
          wasmBuild: Vc.wasm,
          clientVersion: Vc.client
        },
        error: Mc
      })
    }
    const yV = "staleBuild";

    function zV(cB, Bc, nc) {
      const Vc = {
          failedSite: cB.site,
          url: cB.url,
          from: cB.from,
          sameBuild: String(cB.from === Bc),
          reloadMs: String(Math.max(0, Date.now() - cB.at)),
          wasmBuild: nc.wasm,
          clientVersion: nc.client
        },
        Ic = `reloaded into a newer build after ${cB.site} failed to load: ${cB.error}`;
      return LB({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: yV,
        fatal: !1,
        message: Ic,
        details: Vc
      })
    }
  },
  38852: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Yc,
      h: () => lc,
      j: () => aB
    });
    var Vc = nc(174),
      Ic = nc(107),
      rB = nc(3556),
      uc = nc(270),
      sc = nc(8172);
    const Mc = 1048576,
      Pc = 1024 * Mc,
      qB = 400 * Mc,
      Oc = 147456,
      Tc = .5,
      fc = 1.5 * Pc,
      mB = 768 * Mc,
      ec = new Set(["428x926@3", "393x852@3", "430x932@3", "402x874@3", "440x956@3", "420x912@3"]),
      tB = 600,
      Sc = 8;

    function yB(cB) {
      return qB + cB * Oc
    }

    function zB(cB, Bc, nc) {
      var Ic, rB;
      let {
        footprintBytes: uc,
        basis: Mc,
        namesLimit: zB
      } = function(cB) {
        const {
          os: Bc,
          deviceMemory: nc
        } = cB;
        if ("ios" === Bc) {
          const Bc = Math.min(cB.screenWidth, cB.screenHeight),
            nc = Math.max(cB.screenWidth, cB.screenHeight);
          return Bc >= tB ? cB.hardwareConcurrency >= Sc ? {
            footprintBytes: yB(sc.b),
            basis: "ipad-m",
            namesLimit: !1
          } : {
            footprintBytes: mB,
            basis: "ipad",
            namesLimit: !0
          } : ec.has(`${Bc}x${nc}@${cB.devicePixelRatio}`) ? {
            footprintBytes: fc,
            basis: "iphone-6gb",
            namesLimit: !0
          } : {
            footprintBytes: mB,
            basis: "iphone",
            namesLimit: !0
          }
        }
        return "number" === typeof nc && Number.isFinite(nc) && nc > 0 ? {
          footprintBytes: nc * Pc * Tc,
          basis: `memory-${nc}`,
          namesLimit: !0
        } : "android" === Bc ? {
          footprintBytes: mB,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: yB(sc.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(cB);
      if (nc) {
        const cB = Math.min(uc, yB(sc.b));
        uc = qB + Math.max(0, cB - qB) / 2, Mc += "+killed", zB = !0
      }
      null !== Bc && yB(Bc) < uc && (uc = yB(Bc), Mc += "+learned", zB = !0);
      const pc = function(cB) {
          const Bc = Math.floor((cB - qB) / Oc);
          return Math.min(sc.b, Math.max(sc.c, Bc))
        }(uc),
        hc = (0, sc.n)(pc);
      return {
        footprintBytes: uc,
        shedFootprintBytes: zB ? Math.max(uc, yB(pc)) : null,
        chunkCap: pc,
        maxHorizDistance: null !== (Ic = null === hc || void 0 === hc ? void 0 : hc.horizontal) && void 0 !== Ic ? Ic : Vc.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (rB = null === hc || void 0 === hc ? void 0 : hc.vertical) && void 0 !== rB ? rB : Vc.e.maxChunkVertAddDistance,
        basis: Mc
      }
    }
    let pc = null;

    function hc() {
      return zB({
        os: (0, Ic.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
        hardwareConcurrency: navigator.hardwareConcurrency
      }, (0, rB.f)(), (0, uc.z)("wasm").length > 0)
    }

    function aB() {
      return pc ??= hc(), pc
    }

    function lc() {
      var cB;
      return (null !== (cB = pc) && void 0 !== cB ? cB : hc()).basis
    }

    function Yc(cB, Bc) {
      return cB.setChunkCap(Bc.chunkCap)
    }
  },
  38598: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc,
      c: () => Sc,
      e: () => ec,
      g: () => tB,
      j: () => Tc,
      k: () => fc,
      l: () => qB,
      m: () => Oc,
      n: () => mB
    });
    class Vc extends Error {
      constructor(cB) {
        super(`the join's code did not load: ${cB instanceof Error?cB.message:String(cB)}`, {
          cause: cB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === cB || void 0 === cB ? void 0 : cB.request
      }
    }
    let Ic = null,
      rB = null,
      uc = null;
    const sc = [];
    let Mc = null;

    function Pc(cB, Bc) {
      try {
        cB(Bc)
      } catch (nc) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", nc)
      }
    }

    function qB() {
      return Mc
    }

    function Oc(cB) {
      sc.push(cB), null !== Mc && Pc(cB, Mc)
    }

    function Tc(cB) {
      return Ic ??= Promise.all([nc.e(60), nc.e(81), nc.e(196), nc.e(123), nc.e(219), nc.e(197), nc.e(198), nc.e(79), nc.e(224), nc.e(176), nc.e(128), nc.e(182), nc.e(74), nc.e(102), nc.e(222), nc.e(46)]).then((() => nc(40527))).then((Bc => {
        Bc.loadAudio(cB), Mc = Bc;
        for (const cB of sc) Pc(cB, Bc);
        return Bc
      })).catch((cB => {
        throw Ic = null, cB
      })), Ic
    }
    async function fc(cB, Bc) {
      try {
        const nc = await Tc(cB);
        await nc.loadClientGame(Bc)
      } catch (nc) {
        throw new Vc(nc)
      }
    }

    function mB(cB, Bc) {
      rB = {
        running: cB,
        shell: Bc
      }
    }

    function ec() {
      return uc
    }
    async function tB(cB) {
      const Bc = rB;
      if ((null === Bc || void 0 === Bc ? void 0 : Bc.running) !== cB) throw new Error("the core's session has ended");
      const nc = await Tc(Bc.shell.audio).catch((cB => {
        throw new Vc(cB)
      }));
      if (null !== uc) return uc;
      if (rB !== Bc || cB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (uc = nc.startGameHost(cB, Bc.shell), null === uc) throw new Error("the core's shared tables didn't read, so the game can't start");
      return uc
    }

    function Sc() {
      null !== uc && (null !== Mc ? Mc.endGameHost(uc) : uc.closeGame()), uc = null, rB = null
    }
  },
  39016: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB
    });
    var Vc = nc(2339),
      Ic = nc(867);

    function rB(cB, Bc) {
      return null !== cB.gameSource && (0, Vc.k)(Bc, cB.gameSource)
    }

    function uc(cB, Bc) {
      if (null === cB.gameSource || "" === cB.gameSource || null === Bc) return !0;
      const nc = (0, Ic.k)(Bc) ? (0, Ic.r)(Bc) : null;
      return null !== nc && rB(cB, nc)
    }
  },
  38995: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      f: () => ec,
      h: () => Pc,
      l: () => qB,
      p: () => mB
    });
    var Vc = nc(38931),
      Ic = nc(39004);
    const rB = 396,
      uc = 1,
      sc = 2,
      Mc = 3,
      Pc = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      qB = {
        File: 0,
        Item: 1
      },
      Oc = 0,
      Tc = 1,
      fc = 2;

    function mB(cB) {
      const Bc = (0, Vc.k)();
      Bc.catch((() => {}));
      let Ic = null;
      return {
        glbUrl: cB,
        lifeformAtlasUrl: async cB => (await Bc).lifeformAtlasUrl(cB),
        armourAtlasUrl: async () => (await nc.e(185).then((() => nc(33054)))).armourAtlasUrl,
        capeUrl: async cB => (await Bc).capeUrl(cB),
        attachmentImageUrl: async cB => (await Bc).attachmentImageUrl(cB),
        blockImageUrl: async cB => (await Bc).blockImageUrl(cB),
        groupAtlasUrl: async cB => (await Bc).groupAtlasUrl(cB),
        particleTextureUrl: async cB => (await Bc).particleTextureUrl(cB),
        particleItemUrl: async cB => (Ic ??= nc.e(33).then((() => nc(49427))).catch((cB => {
          throw Ic = null, cB
        })), (await Ic).particleItemUrl(cB))
      }
    }
    class ec {
      constructor(cB, Bc) {
        var nc, rB, uc;
        let sc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = cB, this.onFailure = Bc, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.CV = !1, this.load = null !== (nc = sc.load) && void 0 !== nc ? nc : (cB, Bc) => (0, Ic.k)(cB, sc.fetchImage, Bc), this.release = null !== (rB = sc.release) && void 0 !== rB ? rB : Ic.p, this.fetchFile = null !== (uc = sc.fetchFile) && void 0 !== uc ? uc : cB => (0, Vc.g)(cB)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(cB, Bc) {
        this.glbWrittenImages.set(cB, aB(Bc))
      }
      glbTaken(cB, Bc) {
        const nc = this.glbWrittenImages.get(cB);
        this.glbWrittenImages.delete(cB), Bc && this.setGlbImages(cB, void 0 !== nc && nc.length > 0 ? nc : void 0)
      }
      setGlbImages(cB, Bc) {
        var nc;
        this.glbTakenCount.set(cB, (null !== (nc = this.glbTakenCount.get(cB)) && void 0 !== nc ? nc : 0) + 1), void 0 === Bc ? this.glbImages.delete(cB) : this.glbImages.set(cB, Bc);
        const Vc = [];
        for (const {
            key: Ic
          }
          of this.loading.values()) Ic.kind === Pc.Glb && Ic.word === cB && Vc.push(Ic);
        for (let Ic = this.ready.length - 1; Ic >= 0; Ic--) {
          const {
            key: Bc,
            id: nc
          } = this.ready[Ic];
          Bc.kind === Pc.Glb && Bc.word === cB && (this.ready.splice(Ic, 1), null !== nc && (this.answered.delete(nc), this.release(nc)), Vc.push(Bc))
        }
        this.loadAgain(Vc)
      }
      onEvent(cB) {
        if (this.CV) return;
        const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
        for (let nc = 0; nc + 8 <= cB.byteLength; nc += 8) {
          const cB = Bc.getUint8(nc),
            Vc = Bc.getUint32(nc + 4, !0);
          if (cB === Mc) {
            this.answered.delete(Vc), this.release(Vc);
            continue
          }
          const Ic = {
            kind: Bc.getUint8(nc + 1),
            index: Bc.getUint8(nc + 2),
            word: Vc
          };
          cB === uc ? this.want(Ic) : cB === sc && this.loading.delete(tB(Ic))
        }
      }
      reload(cB, Bc) {
        const nc = nc => cB.includes(nc.kind) && (void 0 === Bc || Bc(nc)),
          Vc = new Map;
        for (const Ic of this.answered.values()) nc(Ic) && Vc.set(tB(Ic), Ic);
        for (const [Ic, {
            key: rB
          }] of this.loading) nc(rB) && Vc.set(Ic, rB);
        this.loadAgain(Vc.values())
      }
      loadAgain(cB) {
        for (const Bc of cB) this.loading.delete(tB(Bc)), this.want(Bc)
      }
      drain(cB) {
        if (null !== cB)
          for (; this.ready.length > 0;) {
            if (!cB(rB, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.CV = !0, this.loading.clear(), this.ready.length = 0;
        for (const cB of this.answered.keys()) this.release(cB);
        this.answered.clear()
      }
      want(cB) {
        const Bc = tB(cB);
        if (this.loading.has(Bc)) return;
        const nc = {
          key: cB
        };
        this.loading.set(Bc, nc), this.loadKey(cB).then((Vc => {
          this.CV || this.loading.get(Bc) !== nc ? this.release(Vc.id) : (this.loading.delete(Bc), this.answered.set(Vc.id, cB), this.ready.push({
            record: yB(cB, Oc, Vc),
            key: cB,
            id: Vc.id
          }))
        }), (Vc => {
          if (this.CV || this.loading.get(Bc) !== nc) return;
          this.loading.delete(Bc), this.onFailure({
            key: cB,
            error: Vc
          });
          const rB = Vc instanceof Ic.e && "decode" === Vc.stage ? Tc : fc;
          this.ready.push({
            record: yB(cB, rB, null),
            key: cB,
            id: null
          })
        }))
      }
      async loadKey(cB) {
        switch (cB.kind) {
          case Pc.Glb:
            return this.load(await this.glbImage(cB), "none");
          case Pc.LifeformAtlas:
            return this.load(Sc(await this.sources.lifeformAtlasUrl(cB.word), cB), "none");
          case Pc.ArmourAtlas:
            return this.load(Sc(await this.sources.armourAtlasUrl(), cB), "none");
          case Pc.Cape:
            return this.load(Sc(await this.sources.capeUrl(cB.word), cB), "none");
          case Pc.AttachmentImage:
            return this.load(Sc(await this.sources.attachmentImageUrl(cB.word), cB), "none");
          case Pc.GroupAtlas:
            return this.load(Sc(await this.sources.groupAtlasUrl(cB.word), cB), "none");
          case Pc.BlockImage:
            return this.load(Sc(await this.sources.blockImageUrl(cB.word), cB), "none");
          case Pc.Particle: {
            const Bc = await (cB.index === qB.Item ? this.sources.particleItemUrl(cB.word) : this.sources.particleTextureUrl(cB.word));
            return this.load(Sc(Bc, cB), "flipY")
          }
          default:
            throw new Ic.e("fetch", `image kind ${cB.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(cB) {
        var Bc;
        let nc = this.glbImages.get(cB.word);
        if (void 0 === nc) {
          const Bc = this.glbTakenCount.get(cB.word),
            Vc = Sc(await this.sources.glbUrl(cB.word), cB);
          try {
            nc = aB(await this.fetchFile(Vc))
          } catch (rB) {
            throw new Ic.e("fetch", Vc, {
              cause: rB
            })
          }
          this.glbTakenCount.get(cB.word) === Bc && this.glbImages.set(cB.word, nc)
        }
        const Vc = null === (Bc = nc) || void 0 === Bc ? void 0 : Bc[cB.index];
        if (!Vc) throw new Ic.e("decode", `image ${cB.index} of file ${2147483647&cB.word}`, {
          cause: null
        });
        return Vc
      }
    }

    function tB(cB) {
      let {
        kind: Bc,
        index: nc,
        word: Vc
      } = cB;
      return `${Bc}:${nc}:${Vc}`
    }

    function Sc(cB, Bc) {
      if (null === cB) throw new Ic.e("fetch", `no URL for image ${tB(Bc)}`, {
        cause: null
      });
      return cB
    }

    function yB(cB, Bc, nc) {
      var Vc, Ic, rB;
      const uc = new Uint8Array(16),
        sc = new DataView(uc.buffer);
      return sc.setUint8(0, cB.kind), sc.setUint8(1, cB.index), sc.setUint8(2, Bc), sc.setUint32(4, cB.word, !0), sc.setUint32(8, null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.id) && void 0 !== Vc ? Vc : 0, !0), sc.setUint16(12, Math.min(null !== (Ic = null === nc || void 0 === nc ? void 0 : nc.width) && void 0 !== Ic ? Ic : 0, 65535), !0), sc.setUint16(14, Math.min(null !== (rB = null === nc || void 0 === nc ? void 0 : nc.height) && void 0 !== rB ? rB : 0, 65535), !0), uc
    }
    const zB = 1179937895,
      pc = 1313821514,
      hc = 5130562;

    function aB(cB) {
      var Bc;
      const nc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      if (cB.byteLength < 20 || nc.getUint32(0, !0) !== zB || nc.getUint32(16, !0) !== pc) return [];
      let Vc, Ic = 20 + nc.getUint32(12, !0);
      try {
        Vc = JSON.parse((new TextDecoder).decode(cB.subarray(20, Ic)))
      } catch {
        return []
      }
      for (; Ic + 8 <= cB.byteLength && nc.getUint32(Ic + 4, !0) !== hc;) Ic += 8 + nc.getUint32(Ic, !0);
      const rB = null !== (Bc = Vc.images) && void 0 !== Bc ? Bc : [];
      if (0 === rB.length || Ic + 8 > cB.byteLength) return rB.map((() => null));
      const uc = cB.subarray(Ic + 8, Math.min(cB.byteLength, Ic + 8 + nc.getUint32(Ic, !0)));
      return rB.map((cB => {
        var Bc, nc, Ic;
        const rB = void 0 === cB.bufferView || null === (Bc = Vc.bufferViews) || void 0 === Bc ? void 0 : Bc[cB.bufferView];
        if (!rB || 0 !== (null !== (nc = rB.buffer) && void 0 !== nc ? nc : 0) || void 0 === rB.byteLength) return null;
        const sc = null !== (Ic = rB.byteOffset) && void 0 !== Ic ? Ic : 0,
          Mc = sc + rB.byteLength;
        return Mc <= uc.byteLength ? uc.slice(sc, Mc) : null
      }))
    }
  },
  38672: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      h: () => Ic
    });
    let Vc = null;

    function Ic(cB) {
      Vc = cB
    }

    function rB(cB) {
      Vc === cB && (Vc = null)
    }

    function uc() {
      var cB;
      null === (cB = Vc) || void 0 === cB || cB()
    }
  },
  35184: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      e: () => qB,
      f: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(1934),
      rB = nc(1940),
      uc = nc(263);

    function sc(cB, Bc) {
      return (!(0, rB.c)() || 0 === cB && 0 === Bc) && (0, Ic.v)(Vc.f.Joystick, 0, cB, Bc, 0)
    }
    const Mc = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Pc(cB) {
      return {
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2,
        radius: Math.min(cB.width, cB.height) / 2
      }
    }
    const qB = new class {
      constructor(cB, Bc) {
        this.write = cB, this.keysHit = Bc, this.elements = new Map
      }
      set(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Bc ? this.elements.set(cB, {
          element: Bc,
          hidden: nc
        }) : this.elements.delete(cB), this.measureOne(cB)
      }
      measure() {
        for (const cB of this.elements.keys()) this.measureOne(cB)
      }
      hitZone(cB, Bc) {
        let nc = null,
          Vc = 1;
        for (const [Ic, {
            element: rB
          }] of this.elements) {
          const uc = this.shownRect(Ic);
          if (!uc) continue;
          const sc = Pc(uc),
            Mc = Math.max(0, uc.width / 2 - sc.radius),
            qB = Math.max(0, uc.height / 2 - sc.radius),
            Oc = Math.max(0, Math.abs(cB - sc.x) - Mc),
            Tc = Math.max(0, Math.abs(Bc - sc.y) - qB),
            fc = rB.firstElementChild;
          let mB = Math.hypot(Oc, Tc) / sc.radius;
          this.keysHit && (mB = Math.min(mB, Math.max(Math.abs(cB - sc.x) / (fc.offsetWidth / 2), Math.abs(Bc - sc.y) / (fc.offsetHeight / 2)))), mB < Vc && (nc = {
            code: Ic,
            element: rB,
            key: fc,
            ...sc
          }, Vc = mB)
        }
        return nc
      }
      measureOne(cB) {
        const Bc = this.shownRect(cB);
        if (!Bc) return void this.write(Vc.f.TouchZone, cB, 0, 0, 0);
        const nc = Pc(Bc);
        this.write(Vc.f.TouchZone, cB, nc.x, nc.y, (0, Ic.i)(nc.radius))
      }
      shownRect(cB) {
        const Bc = this.elements.get(cB),
          nc = Bc && !Bc.hidden ? Bc.element.getBoundingClientRect() : null;
        return !nc || nc.width <= 0 || nc.height <= 0 ? null : nc
      }
    }(Ic.v, !uc.l)
  },
  38843: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      e: () => rB,
      f: () => uc,
      g: () => Ic,
      k: () => Oc,
      l: () => qB,
      p: () => Pc,
      r: () => sc
    });
    var Vc = nc(37689);
    const Ic = new Uint8Array([12]),
      rB = 2e3,
      uc = 257;

    function sc(cB) {
      const Bc = new Uint8Array(4);
      return new DataView(Bc.buffer).setUint32(0, cB, !0), Bc
    }
    class Mc extends Error {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(cB), this.stage = Bc, this.code = nc, this.serverText = Vc, this.name = "JoinError"
      }
    }
    class Pc extends Error {
      constructor() {
        super(Vc.d), this.name = "TrafficCheckError"
      }
    }
    class qB extends Error {
      constructor(cB, Bc, nc) {
        super(cB, {
          cause: nc
        }), this.networkLost = Bc, this.name = "SeatRequestError"
      }
    }
    class Oc extends Error {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(cB), this.code = Bc, this.serverText = nc, this.name = "MatchmakeError"
      }
    }
  },
  38849: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      c: () => Mc
    });
    var Vc = nc(38856),
      Ic = nc(35121),
      rB = nc(38852),
      uc = nc(38843);
    const sc = Vc.b.timeForPlayerToConnect - 1e4;
    async function Mc(cB, Bc, nc) {
      const Vc = await cB.getTrafficCode().then((cB => null !== cB && void 0 !== cB ? cB : null), (cB => (console.error("[bloxd-wasm-client] could not get a traffic code", cB), null)));
      if (null === Vc) throw new uc.p;
      const {
        gameNameWithVariation: sc,
        lobbyName: Mc
      } = Bc, {
        roomName: Pc,
        joinOptions: qB
      } = (0, Ic.d)(cB, sc, Mc, Vc, (cB => {
        var Bc;
        return null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.isUsingCustomGameTexturePack(cB)) && void 0 !== Bc && Bc
      }));
      return qB.wasmClient = !0, qB.budgetBasis = (0, rB.h)(), {
        endpoint: Bc.endpoint,
        roomName: Pc,
        joinOptions: qB,
        session: {
          gameNameWithVariation: sc,
          lobbyName: Mc,
          playerDbId: cB.whamm
        }
      }
    }
  },
  38914: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Lc,
      g: () => Oc,
      j: () => hc,
      n: () => Sc,
      p: () => lc
    });
    var Vc = nc(8175),
      Ic = nc(8172);
    const rB = 64 * Vc.d,
      uc = 40 * Vc.e,
      sc = 36 * Vc.e,
      Mc = 20 * Vc.e,
      Pc = 2 * Vc.e,
      qB = 5 * Vc.e;

    function Oc(cB) {
      return "footprint" !== cB
    }
    const Tc = 2 * Vc.e,
      fc = 4 * Vc.e,
      mB = 35 * Vc.e + Tc + fc,
      ec = 6.5 * Vc.e,
      tB = 132.5 * Vc.d;

    function Sc(cB) {
      const Bc = ec + (0, Ic.j)(cB) + cB * tB;
      return Math.ceil((2 * mB + Bc) / rB) * rB
    }
    const yB = Sc(Ic.b),
      zB = (Vc.e, Vc.e, Vc.e, {
        targetBytes: uc,
        leastBytes: Mc
      }),
      pc = {
        targetBytes: sc,
        leastBytes: Mc
      };

    function hc(cB) {
      return cB >= Ic.b ? zB : pc
    }
    const aB = 2 * rB;

    function lc(cB, Bc, nc) {
      return cB + Bc + aB > (null !== nc && void 0 !== nc ? nc : yB)
    }
    const Yc = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? cB => {
        requestIdleCallback(cB)
      } : null
    };
    class Lc {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yc;
        this.memory = cB, this.readPeakStoredChunks = Bc, this.onError = nc, this.clock = Vc, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(cB, Bc, nc) {
        this.shedding = {
          shed: cB,
          PV: Bc,
          readDistanceInUse: nc
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(cB) {
        this.footprint = cB
      }
      setCeiling(cB) {
        this.ceilingBytes = cB, this.call((() => {
          this.memory.setCeiling(cB)
        }), void 0)
      }
      ceilingMayRefuse(cB) {
        return lc(this.memory.memoryBytes(), cB, this.ceilingBytes)
      }
      reserveAtJoin(cB) {
        let {
          targetBytes: Bc,
          leastBytes: nc
        } = cB;
        const Vc = this.memory.memoryBytes(),
          Ic = Vc + nc,
          rB = Math.max(Bc + (this.ballastOn() ? qB : 0), Ic),
          uc = this.call((() => this.memory.reserveUpFront(rB) ? "target" : rB > Ic && this.memory.reserveUpFront(Ic) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== uc) {
          const cB = "least" === uc ? `took ${Ic} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${rB} bytes was refused at ${Vc} bytes; ${cB}`)
        }
        return this.joinReserveTaken = uc, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== uc && this.shedFor("joinReserve"), "none" !== uc
      }
      afterFrame() {
        if (this.stopped) return;
        const cB = this.clock.now(),
          Bc = null !== this.stepsHeldUntil && cB >= this.stepsHeldUntil;
        if (Bc && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && cB >= this.ballastCheckAt && (this.takeBallast(cB), this.stopped)) return;
        const nc = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Vc = Bc && "now" === nc ? "none" : nc,
          {
            requestIdle: Ic
          } = this.clock;
        "now" === Vc || null !== this.pendingSince && cB - this.pendingSince >= 500 ? this.step() : "idle" === Vc && null === this.pendingSince && (null === Ic ? this.step() : (this.pendingSince = cB, Ic((() => {
          null !== this.pendingSince && this.step()
        })))), cB - this.statsAt >= 1e3 && (this.statsAt = cB, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var cB, Bc;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Bc = this.shedding.readDistanceInUse()) && void 0 !== Bc ? Bc : this.distanceInUse);
          null === (cB = this.footprint) || void 0 === cB || cB.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(cB, Bc) {
        this.noteWorker(`Mesh${cB}`, Bc)
      }
      meshWorkerGone(cB) {
        this.workerGone(`Mesh${cB}`)
      }
      noteWorldgen(cB) {
        this.noteWorker("Worldgen", cB)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(cB, Bc) {
        const nc = this.workers.get(cB);
        null !== nc && void 0 !== nc && nc.gone && (this.replacedRefusals.reserves += nc.stats.reservesRefused, this.replacedRefusals.allocations += nc.stats.allocationsRefused), this.workers.set(cB, {
          stats: Bc,
          gone: !1
        })
      }
      workerGone(cB) {
        const Bc = this.workers.get(cB);
        Bc && (Bc.gone = !0)
      }
      details() {
        var cB, Bc;
        const nc = {
          wasmMemoryNow: `${(0,Vc.i)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (nc.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (nc.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Ic = this.main;
        if (Ic) {
          nc.wasmMemoryMain = gB(Ic);
          const cB = Math.max(0, Ic.peakLiveBytes - this.ballastPeakBytes),
            Bc = 0 === this.peakStoredChunks ? "-" : (cB / this.peakStoredChunks / Vc.d).toFixed(1);
          nc.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Bc} KiB`
        }
        for (const [Vc, {
            stats: uc,
            gone: sc
          }] of this.workers) nc[`wasmMemory${Vc}`] = gB(uc) + (sc ? " (gone)" : "");
        const rB = null !== (cB = null === (Bc = this.footprint) || void 0 === Bc ? void 0 : Bc.describe()) && void 0 !== cB ? cB : null;
        return null !== rB && (nc.wasmMemoryFootprint = rB), nc
      }
      pageKillSnapshot() {
        var cB, Bc, nc, Ic, rB;
        let uc = (null !== (cB = null === (Bc = this.main) || void 0 === Bc ? void 0 : Bc.reservesRefused) && void 0 !== cB ? cB : 0) + this.replacedRefusals.reserves,
          sc = (null !== (nc = null === (Ic = this.main) || void 0 === Ic ? void 0 : Ic.allocationsRefused) && void 0 !== nc ? nc : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Vc
          }
          of this.workers.values()) uc += Vc.reservesRefused, sc += Vc.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Vc.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Vc.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: uc,
          refusedAllocations: sc,
          sheds: this.sheds,
          ...null === (rB = this.footprint) || void 0 === rB ? void 0 : rB.snapshot()
        }
      }
      workersMemoryBytes() {
        let cB = 0;
        for (const {
            stats: Bc,
            gone: nc
          }
          of this.workers.values()) cB += nc ? 0 : Bc.memoryBytes;
        return cB
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Pc)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(cB) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = cB + 1e3;
        const Bc = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Bc)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(cB) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${cB}: frames grow on demand from here`)
      }
      shedFor(cB) {
        const {
          shedding: Bc
        } = this;
        if (null === Bc) return;
        this.pendingSince = null;
        const nc = this.call((() => Bc.shed(cB)), null);
        this.stopped || (null !== nc ? (this.sheds++, this.shedCap = nc, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Bc.PV(cB, this.sheds, this.details())) : Oc(cB) && this.stopSteps("nothing is left to shed"))
      }
      call(cB, Bc) {
        if (this.stopped) return Bc;
        try {
          return cB()
        } catch (nc) {
          return this.stop(), this.onError(nc), Bc
        }
      }
    }

    function gB(cB) {
      const Bc = (cB, Bc) => `${cB}/${(0,Vc.i)(Bc)}`;
      return `memory ${(0,Vc.i)(cB.memoryBytes)} live ${(0,Vc.i)(cB.liveBytes)} peak ${(0,Vc.i)(cB.peakLiveBytes)} unused ${(0,Vc.i)(cB.unusedBytes)} ceiling ${(0,Vc.i)(cB.ceilingBytes)} MiB; grows upFront ${Bc(cB.grows.upFront,cB.grownBytes.upFront)} ahead ${Bc(cB.grows.ahead,cB.grownBytes.ahead)} inFrame ${Bc(cB.grows.onDemandInFrame,cB.grownBytes.onDemandInFrame)} other ${Bc(cB.grows.onDemand,cB.grownBytes.onDemand)}; refused reserves ${cB.reservesRefused} allocations ${cB.allocationsRefused}`
    }
  },
  38923: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      d: () => sc,
      f: () => Oc,
      j: () => Pc
    });
    var Vc = nc(3838),
      Ic = nc(38931),
      rB = nc(38935);
    const uc = 395,
      sc = 2147483648,
      Mc = new Uint8Array(0);
    class Pc extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class qB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Oc {
      constructor(cB, Bc, nc) {
        var Vc, rB, uc, sc;
        let Mc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = cB, this.build = Bc, this.onFailure = nc, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.kept = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Vc = Mc.fetchFile) && void 0 !== Vc ? Vc : cB => (0, Ic.g)(cB), this.onWritten = null !== (rB = Mc.onWritten) && void 0 !== rB ? rB : null, this.onTaken = null !== (uc = Mc.onTaken) && void 0 !== uc ? uc : null, this.onPackFileFailed = null !== (sc = Mc.onPackFileFailed) && void 0 !== sc ? sc : null, this.startupLeft = new Set(cB.startup);
        for (const Ic of cB.startup) this.request(Ic)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(cB) {
        return this.drawn.get(cB)
      }
      request(cB) {
        const Bc = this.pending.get(cB);
        if (!0 === (null === Bc || void 0 === Bc ? void 0 : Bc.ask)) return;
        const nc = this.Ln(cB, !0);
        nc.recheck = void 0 !== Bc;
        const Vc = this.drawn.get(cB);
        if (void 0 !== Vc) return nc.XB = !0, nc.recheck = !0, void this.fetch(cB, nc, Vc);
        this.fetchWanted(cB, nc)
      }
      async refresh() {
        const cB = ++this.refreshes,
          Bc = new Set;
        for (const uc of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const cB of uc) 0 === (cB & Ic.d) && Bc.add(cB);
        const nc = [...Bc];
        let Vc;
        try {
          Vc = await Promise.all(nc.map((cB => this.wanted(cB))))
        } catch {
          return null
        }
        if (cB !== this.refreshes) return null;
        const rB = {
          resent: 0,
          refetched: 0,
          delivered: nc.filter((cB => this.drawn.has(cB))).length
        };
        return nc.forEach(((cB, Bc) => {
          const {
            url: nc,
            inPlaceOf: Ic
          } = Vc[Bc], uc = this.pending.get(cB);
          if (void 0 !== uc) {
            if (uc.XB || void 0 === uc.url) return void(uc.recheck = !0);
            if (uc.url === nc) return;
            rB.refetched++;
            const Bc = this.Ln(cB, uc.ask);
            return Bc.recheck = uc.recheck, void this.fetch(cB, Bc, nc, Ic)
          }
          const sc = this.written.get(cB);
          void 0 === sc ? this.drawn.get(cB) !== (null !== nc && void 0 !== nc ? nc : void 0) && (rB.resent++, this.fetch(cB, this.Ln(cB, !1), nc, Ic)) : sc.url !== (null !== nc && void 0 !== nc ? nc : "") && (sc.attempt.recheck = !0)
        })), rB
      }
      taken(cB, Bc) {
        const nc = new Set,
          Vc = new Set;
        for (const Ic of Array.from(Bc)) 0 === (Ic & sc) ? nc.add(Ic) : Vc.add((Ic & ~sc) >>> 0);
        for (const [Ic, rB] of this.written) rB.seq > cB || (this.written.delete(Ic), nc.has(rB.seq) ? this.refusedFile(Ic, rB) : this.takenFile(Ic, rB, !rB.empty && !Vc.has(rB.seq)))
      }
      takenFile(cB, Bc, nc) {
        const {
          attempt: Vc
        } = Bc;
        if (nc) {
          var Ic;
          this.drawn.set(cB, Bc.url), this.undrawn.delete(cB), void 0 !== Vc.inPlaceOf ? this.refusedPack.set(cB, Vc.inPlaceOf) : Vc.XB || this.refusedPack.delete(cB), null === (Ic = this.onTaken) || void 0 === Ic || Ic.call(this, cB, !0);
          const nc = this.pending.get(cB);
          if (!0 === (null === nc || void 0 === nc ? void 0 : nc.XB) && nc.url !== Bc.url) {
            const nc = this.Ln(cB, !0);
            nc.XB = !0, nc.recheck = !0, this.fetch(cB, nc, Bc.url)
          }
        } else {
          var rB;
          this.drawn.has(cB) || this.undrawn.add(cB), null === (rB = this.onTaken) || void 0 === rB || rB.call(this, cB, !1)
        }
        Vc.recheck && this.resendIfChanged(cB)
      }
      refusedFile(cB, Bc) {
        var nc, Vc;
        if (null === (nc = this.onTaken) || void 0 === nc || nc.call(this, cB, !1), this.refusedPack.set(cB, Bc.url), this.pending.has(cB)) return void(null === (Vc = this.onPackFileFailed) || void 0 === Vc || Vc.call(this, cB, Tc(Bc.url)));
        const Ic = this.Ln(cB, Bc.attempt.ask);
        Ic.recheck = Bc.attempt.recheck, this.afterRefusal(cB, Ic, Bc.url)
      }
      async afterRefusal(cB, Bc, nc) {
        var Vc;
        let Ic;
        try {
          Ic = await this.wanted(cB)
        } catch (rB) {
          return void(this.pending.get(cB) === Bc && this.giveUp(cB, Bc, nc, rB))
        }
        this.pending.get(cB) === Bc && (Ic.inPlaceOf !== nc ? Bc.ask || (null !== (Vc = Ic.url) && void 0 !== Vc ? Vc : void 0) !== this.drawn.get(cB) ? this.fetch(cB, Bc, Ic.url, Ic.inPlaceOf) : this.pending.delete(cB) : this.fallBack(cB, Bc, nc, Tc(nc)))
      }
      Ln(cB, Bc) {
        const nc = {
          url: void 0,
          ask: Bc,
          XB: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(cB, nc);
        for (let Vc = this.ready.length - 1; Vc >= 0; Vc--) this.ready[Vc].file === cB && this.ready.splice(Vc, 1);
        return nc
      }
      async wanted(cB) {
        const Bc = await this.files.url(cB);
        return null !== Bc && this.refusedPack.get(cB) === Bc ? {
          url: await this.files.shippedUrl(cB),
          inPlaceOf: Bc
        } : {
          url: Bc,
          inPlaceOf: void 0
        }
      }
      fetchWanted(cB, Bc) {
        const nc = this.files.url(cB);
        nc instanceof Promise ? nc.then((nc => {
          this.fetchFound(cB, Bc, nc)
        }), (nc => {
          this.pending.get(cB) === Bc && this.giveUp(cB, Bc, "", nc)
        })) : this.fetchFound(cB, Bc, nc)
      }
      fetchFound(cB, Bc, nc) {
        null !== nc && this.refusedPack.get(cB) === nc ? Promise.resolve(this.files.shippedUrl(cB)).then((Vc => {
          this.fetch(cB, Bc, Vc, nc)
        }), (Vc => {
          this.pending.get(cB) === Bc && this.giveUp(cB, Bc, nc, Vc)
        })) : this.fetch(cB, Bc, nc)
      }
      fetch(cB, Bc, nc, Vc) {
        this.pending.get(cB) === Bc && (Bc.url = nc, Bc.inPlaceOf = Vc, null !== nc ? this.load(cB, Bc, nc) : this.buildFile(cB, Bc, "", Mc))
      }
      load(cB, Bc, nc) {
        const Vc = this.kept.get(cB);
        (null === Vc || void 0 === Vc ? void 0 : Vc.url) !== nc ? this.fetchFile(nc).then((Vc => {
          var Ic, rB;
          this.pending.get(cB) === Bc && (this.keptTotal += Vc.byteLength - (null !== (Ic = null === (rB = this.kept.get(cB)) || void 0 === rB ? void 0 : rB.glb.byteLength) && void 0 !== Ic ? Ic : 0), this.kept.set(cB, {
            url: nc,
            glb: Vc
          }), this.buildFile(cB, Bc, nc, Vc))
        }), (Vc => {
          this.pending.get(cB) === Bc && this.fallBack(cB, Bc, nc, Vc)
        })) : this.buildFile(cB, Bc, nc, Vc.glb)
      }
      buildFile(cB, Bc, nc, uc) {
        let sc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mc = uc.byteLength > 0 && (0, Ic.j)(nc) ? (cB | Ic.b) >>> 0 : cB;
        this.build(Mc, uc).then((Ic => {
          if (this.pending.get(cB) !== Bc) return;
          if (Vc.r + (0, Vc.Ld)(Ic.byteLength) > Vc.gc) return void this.ringRefused(cB, Bc, nc, new Pc(`${fc(nc)}'s record is ${Ic.byteLength-rB.e} bytes, past the cmd ring's ${Vc.gc}`), sc);
          const Mc = {
            file: cB,
            url: nc,
            payload: Ic,
            glb: uc,
            attempt: Bc
          };
          sc ? this.ready.unshift(Mc) : this.ready.push(Mc)
        }))
      }
      async fallBack(cB, Bc, nc, Vc) {
        var Ic;
        let rB = null,
          uc = Vc;
        try {
          rB = await this.files.shippedUrl(cB)
        } catch (sc) {
          uc = sc
        }
        this.pending.get(cB) === Bc && (null !== rB && rB !== nc ? (null === (Ic = this.onPackFileFailed) || void 0 === Ic || Ic.call(this, cB, Vc), Bc.ask || this.drawn.get(cB) !== rB ? (Bc.url = rB, Bc.inPlaceOf = nc, this.load(cB, Bc, rB)) : this.pending.delete(cB)) : this.giveUp(cB, Bc, nc, uc))
      }
      ringRefused(cB, Bc, nc, Vc) {
        let rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Ic.j)(nc) ? this.fallBack(cB, Bc, nc, Vc): this.giveUp(cB, Bc, nc, Vc, rB)
      }
      giveUp(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: cB,
          url: fc(nc),
          error: Vc,
          startup: this.startupLeft.has(cB)
        }), Bc.ask || !this.drawn.has(cB) ? this.buildFile(cB, Bc, nc, Mc, Ic) : this.pending.delete(cB)
      }
      async resendIfChanged(cB) {
        var Bc;
        if (0 !== (cB & Ic.d)) return;
        let nc;
        try {
          nc = await this.wanted(cB)
        } catch {
          return
        }(null !== (Bc = nc.url) && void 0 !== Bc ? Bc : void 0) === this.drawn.get(cB) || this.pending.has(cB) || this.written.has(cB) || this.fetch(cB, this.Ln(cB, !1), nc.url, nc.inPlaceOf)
      }
      drain(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === cB) return;
        let nc = 0,
          Vc = 0;
        for (; Vc < this.ready.length && nc < 262144;) {
          const qB = this.ready[Vc];
          if (this.written.has(qB.file)) {
            Vc++;
            continue
          }
          const Oc = this.nextSeq;
          new DataView(qB.payload.buffer, qB.payload.byteOffset, qB.payload.byteLength).setUint32(rB.h, Oc, !0);
          const Tc = qB.attempt.XB && qB.glb.byteLength > 0 && this.drawn.get(qB.file) === qB.url;
          if (cB(uc, Tc ? 1 : 0, qB.payload)) {
            if (this.nextSeq = Oc >= sc - 1 ? 1 : Oc + 1, this.ready.splice(Vc, 1), nc += qB.payload.byteLength, this.pending.delete(qB.file), this.startupLeft.delete(qB.file), this.written.set(qB.file, {
                seq: Oc,
                url: qB.url,
                empty: 0 === qB.glb.byteLength,
                attempt: qB.attempt
              }), qB.glb.byteLength > 0) try {
              var Ic;
              null === (Ic = this.onWritten) || void 0 === Ic || Ic.call(this, qB.file, qB.glb)
            } catch (Mc) {
              console.warn("ModelFeed: reading the file's images failed", Mc)
            }
          } else {
            if (null === Bc || 0 === qB.glb.byteLength || Bc(qB.payload.byteLength)) return;
            this.ready.splice(Vc, 1);
            const cB = new Pc(`${fc(qB.url)}'s record is ${qB.payload.byteLength-rB.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(qB.file, qB.attempt, qB.url, cB, !0)
          }
        }
      }
    }

    function Tc(cB) {
      return new qB(`presentation refused ${fc(cB)}`)
    }

    function fc(cB) {
      return cB.startsWith("data:") ? `${cB.slice(0,Math.min(Math.max(cB.indexOf(","),5),64))},...` : cB
    }
  },
  38931: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      d: () => rB,
      g: () => qB,
      j: () => sc,
      k: () => Pc,
      l: () => Mc
    });
    var Vc = nc(2876),
      Ic = nc(2374);
    const rB = 2147483648,
      uc = 1073741824;

    function sc(cB) {
      return cB.startsWith("data:")
    }

    function Mc(cB) {
      let {
        onTableFailed: Bc,
        packUrl: nc
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Vc = Pc();
      Vc.catch((cB => {
        null === Bc || void 0 === Bc || Bc(cB)
      }));
      const Ic = async Bc => (await Vc).fileUrl((Bc & ~rB) >>> 0, cB);
      return {
        startup: [],
        url: async cB => {
          if (nc && 0 === (cB & rB)) {
            const Bc = await Vc,
              Ic = Bc.filePackName(cB),
              rB = null === Ic || "lifeform" === Bc.fileSource(cB) ? null : nc(Ic);
            if (null !== rB) return rB
          }
          return Ic(cB)
        },
        shippedUrl: Ic
      }
    }

    function Pc() {
      return nc.e(36).then((() => nc(41282)))
    }
    async function qB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return cB.startsWith("data:") ? (0, Ic.d)(cB.slice(cB.indexOf(",") + 1), Bc) : (0, Vc.x)(cB, {
        spare: Bc
      })
    }
  },
  38935: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc,
      h: () => Pc,
      i: () => Tc,
      m: () => mB,
      n: () => Oc,
      o: () => fc
    });
    const Vc = 826427981,
      Ic = 1,
      rB = 2,
      uc = 44,
      sc = 46,
      Mc = 8,
      Pc = 4;

    function qB(cB, Bc, nc) {
      const Ic = (new TextEncoder).encode(nc),
        rB = Mc + 4 * (Bc.length + 2),
        uc = new Uint8Array(rB + (Ic.byteLength + 3 & -4)),
        sc = new DataView(uc.buffer);
      return sc.setUint32(0, cB, !0), sc.setUint32(Mc, Vc, !0), Bc.forEach(((cB, Bc) => {
        sc.setUint32(Mc + 4 * (Bc + 1), cB, !0)
      })), sc.setUint32(rB - 4, Ic.byteLength, !0), uc.set(Ic, rB), uc
    }

    function Oc(cB, Bc) {
      return qB(cB, [rB], Bc)
    }

    function Tc(cB, Bc) {
      return qB(cB, [Ic, sc], Bc)
    }

    function fc(cB, Bc) {
      return qB(cB, [Ic, uc], Bc)
    }

    function mB(cB) {
      const Bc = Mc;
      if (cB.byteLength < Bc + 12) return !1;
      const nc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      return nc.getUint32(Bc, !0) === Vc && nc.getUint32(Bc + 4, !0) === Ic && nc.getUint32(Bc + 8, !0) === uc
    }
  },
  39010: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      d: () => rB,
      e: () => Oc,
      g: () => uc
    });
    var Vc = nc(38995),
      Ic = nc(38931);
    const rB = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(cB) {
        this.change((() => {
          this.page = cB
        }))
      }
      setSessionFiles(cB) {
        const Bc = void 0 !== this.session && void 0 === cB;
        if (this.change((() => {
            this.session = cB
          })), Bc)
          for (const nc of [...this.pageListeners]) nc()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(cB) {
        return this.pageListeners.add(cB), () => {
          this.pageListeners.delete(cB)
        }
      }
      setFollower(cB) {
        this.follower = cB, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const cB of [...this.wantedListeners]) cB();
        this.startFollower()
      }
      onWanted(cB) {
        return this.wantedListeners.add(cB), () => {
          this.wantedListeners.delete(cB)
        }
      }
      onChange(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      startFollower() {
        const cB = this.follower;
        this.isWanted && null !== cB && (this.follower = null, cB((() => {
          this.follower = cB
        })))
      }
      change(cB) {
        const Bc = this.current;
        if (cB(), this.current !== Bc)
          for (const nc of this.listeners) nc()
      }
    };

    function uc(cB, Bc) {
      return {
        ...cB,
        armourAtlasUrl: () => {
          var nc, Vc;
          return null !== (nc = null === (Vc = Bc()) || void 0 === Vc ? void 0 : Vc.armourAtlasUrl()) && void 0 !== nc ? nc : cB.armourAtlasUrl()
        },
        lifeformAtlasUrl: nc => Mc(Bc(), (cB => cB.LIFEFORM_ATLAS_PATHS[nc]), (() => cB.lifeformAtlasUrl(nc))),
        groupAtlasUrl: nc => Mc(Bc(), (cB => cB.GROUP_ATLAS_PATHS[nc]), (() => cB.groupAtlasUrl(nc))),
        particleItemUrl: Vc => Pc(Bc(), (async () => {
          const cB = await nc.e(33).then((() => nc(49427))).catch((() => null));
          return (null === cB || void 0 === cB ? void 0 : cB.particleItemSprite(Vc)) || null
        }), (() => cB.particleItemUrl(Vc))),
        blockImageUrl: nc => Pc(Bc(), (async () => {
          var cB, Bc;
          return null !== (cB = null === (Bc = await sc()) || void 0 === Bc ? void 0 : Bc.blockImageName(nc)) && void 0 !== cB ? cB : null
        }), (() => cB.blockImageUrl(nc)))
      }
    }

    function sc() {
      return (0, Ic.k)().catch((() => null))
    }

    function Mc(cB, Bc, nc) {
      return Pc(cB, (async () => {
        var cB;
        const nc = await sc(),
          Vc = null === nc ? null : Bc(nc),
          Ic = null !== (cB = null === Vc || void 0 === Vc ? void 0 : Vc.slice(Vc.lastIndexOf("/") + 1)) && void 0 !== cB ? cB : null;
        return "Player_Atlas" === Ic ? null : Ic
      }), nc)
    }
    async function Pc(cB, Bc, nc) {
      if (null !== cB) {
        const nc = await Bc(),
          Vc = null === nc ? null : cB.textureUrl(nc);
        if (null !== Vc) return Vc
      }
      return nc()
    }
    const qB = 0;

    function Oc(cB) {
      const Bc = [Vc.h.ArmourAtlas, Vc.h.LifeformAtlas, Vc.h.GroupAtlas, Vc.h.BlockImage, Vc.h.Particle];
      cB.reload(Bc, (cB => {
        switch (cB.kind) {
          case Vc.h.Particle:
            return cB.index === Vc.l.Item;
          case Vc.h.LifeformAtlas:
            return cB.word !== qB;
          default:
            return !0
        }
      }))
    }
  },
  38880: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      h: () => uc,
      i: () => rB,
      m: () => Ic
    });
    const Vc = 1e3;

    function Ic() {
      sc((() => {
        window.location.reload()
      }))
    }

    function rB(cB) {
      sc((() => {
        window.location.replace(cB(window.location.href))
      }))
    }

    function uc(cB) {
      Promise.resolve().then((() => nc(119))).then((Bc => {
        let {
          currentUrl: nc
        } = Bc;
        rB((() => nc.mergeSearchParamsInto(cB)))
      }), (() => {
        rB((() => cB))
      }))
    }

    function sc(cB) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => nc(1495))).then((Bc => {
        let {
          prepareForUnloadWithoutConfirmation: nc
        } = Bc;
        try {
          nc()
        } catch (Vc) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Vc), window.onbeforeunload = null
        }
        cB()
      }), (() => {
        window.onbeforeunload = null, cB()
      })) : cB()
    }
  },
  38982: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => fc,
      f: () => Tc
    });
    var Vc = nc(37544),
      Ic = nc(5465),
      rB = nc(37535),
      uc = nc(38835),
      sc = nc(38843);
    const Mc = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Pc = 3,
      qB = [500, 1500];

    function Oc(cB) {
      const Bc = new URL(cB);
      return {
        secure: "https:" === Bc.protocol || "wss:" === Bc.protocol,
        host: Bc.host,
        pathname: Bc.pathname.replace(/\/+$/, ""),
        search: Bc.searchParams.toString()
      }
    }

    function Tc(cB, Bc) {
      var nc;
      const Vc = null !== (nc = Bc.protocol) && void 0 !== nc ? nc : "ws";
      if ("ws" !== Vc) throw new Error(`seat reservation asks for the ${Vc} transport`);
      const {
        secure: Ic,
        host: rB,
        pathname: uc,
        search: sc
      } = Oc(cB), Mc = new URLSearchParams(sc);
      Mc.append("sessionId", Bc.sessionId), Bc.reconnectionToken && Mc.append("reconnectionToken", Bc.reconnectionToken);
      return `${Ic?"wss":"ws"}://${Bc.room.publicAddress||`${rB}${uc}`}/${Bc.room.processId}/${Bc.room.roomId}?${Mc.toString()}`
    }

    function fc(cB, Bc, nc) {
      var Tc;
      let fc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Sc = null !== (Tc = fc.sleep) && void 0 !== Tc ? Tc : Vc.e;
      return (0, rB.c)((() => async function(cB, Bc, nc, Vc) {
        var rB, Tc;
        const {
          signal: fc,
          sleep: Sc
        } = Vc, yB = null !== (rB = Vc.fetch) && void 0 !== rB ? rB : fetch, zB = function(cB, Bc, nc) {
          const {
            secure: Vc,
            host: Ic,
            pathname: rB,
            search: uc
          } = Oc(cB);
          return `${Vc?"https":"http"}://${Ic}${rB}/matchmake/${Bc}/${encodeURIComponent(nc)}${uc?`?${uc}`:""}`
        }(cB, "joinOrCreate", Bc), pc = JSON.stringify(nc);
        let hc = null;
        for (let Oc = 0; Oc < Pc; Oc++) {
          var aB;
          if (Oc > 0) await Sc(null !== (aB = qB[Oc - 1]) && void 0 !== aB ? aB : 1500, fc);
          let cB;
          (0, Ic.l)(fc);
          try {
            cB = await yB(zB, {
              method: "POST",
              headers: {
                ...Mc,
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: pc,
              credentials: "include",
              signal: fc
            })
          } catch (Yc) {
            (0, Ic.l)(fc), hc = mB(Yc);
            continue
          }
          const {
            answer: Bc,
            lost: nc
          } = await ec(cB), rB = null !== Bc && "string" === typeof Bc.error ? Bc.error : null;
          var lc;
          if (null !== rB) null === (lc = Vc.onRefusal) || void 0 === lc || lc.call(Vc);
          if ((0, Ic.l)(fc), null === nc) {
            if (null !== rB) throw new sc.k(rB, "number" === typeof(null === Bc || void 0 === Bc ? void 0 : Bc.code) ? Bc.code : 0, (0, uc.q)(rB).text);
            if (cB.ok && null !== Bc && tB(Bc)) return Bc;
            hc = new sc.l(`seat request answered HTTP ${cB.status}${null===Bc?" without JSON":" without a seat"}`, !1)
          } else hc = mB(nc.error)
        }
        throw null !== (Tc = hc) && void 0 !== Tc ? Tc : new sc.l("seat request made no attempt", !1)
      }(cB, Bc, nc, {
        ...fc,
        sleep: Sc
      })), fc.signal, Sc)
    }

    function mB(cB) {
      return new sc.l(cB instanceof Error ? cB.message : String(cB), !0, cB)
    }
    async function ec(cB) {
      try {
        const Bc = await cB.json();
        return {
          answer: "object" === typeof Bc && null !== Bc ? Bc : null,
          lost: null
        }
      } catch (Bc) {
        return {
          answer: null,
          lost: Bc instanceof SyntaxError ? null : {
            error: Bc
          }
        }
      }
    }

    function tB(cB) {
      const Bc = cB.room;
      return "string" === typeof cB.sessionId && "object" === typeof Bc && null !== Bc && "string" === typeof Bc.roomId && "string" === typeof Bc.processId && "string" === typeof Bc.name
    }
  },
  38601: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => Zc,
      E: () => pc,
      F: () => hc,
      H: () => tB,
      K: () => gB,
      O: () => Cc,
      S: () => mB,
      U: () => Dc,
      W: () => yB,
      _: () => Sc,
      ab: () => zB,
      bb: () => aB,
      e: () => Ic,
      i: () => vB,
      j: () => Qc,
      k: () => fc,
      m: () => ec,
      n: () => bB,
      q: () => Yc,
      s: () => Uc,
      v: () => Lc,
      y: () => lc
    });
    var Vc = nc(166);
    const Ic = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function rB(cB, Bc) {
      return !ArrayBuffer.isView(cB) || cB instanceof DataView ? Array.isArray(cB) ? cB.map((cB => Bc(cB))) : cB : Array.from(cB, (cB => Bc(cB)))
    }

    function uc(cB) {
      if ("string" !== typeof cB) return cB;
      for (let Bc = 0; Bc < cB.length; Bc++) {
        const nc = cB.charCodeAt(Bc);
        if (nc >= 55296 && nc <= 57343) return Mc.decode(sc.encode(cB))
      }
      return cB
    }
    const sc = new TextEncoder,
      Mc = new TextDecoder;

    function Pc(cB) {
      return cB
    }
    let qB;

    function Oc(cB) {
      return null === cB || "object" !== typeof cB ? cB : [uc(cB.SV), uc(cB.ND)]
    }

    function Tc(cB) {
      return null === cB || "object" !== typeof cB ? cB : [rB(cB.dD, Pc), rB(cB.Gs, Pc)]
    }

    function fc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.Uu), uc(Bc.okc)];
      var Bc
    }

    function mB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.id, Bc.HZ];
      var Bc
    }

    function ec(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.oN, uc(Bc.kE), Bc.XN, uc(Bc.uE), Bc.sE, Bc.OE, Bc.sF, uc(Bc.qJ), uc(Bc.mJ)];
      var Bc
    }

    function tB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.Zk, Pc), Bc.Zr];
      var Bc
    }

    function Sc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.Wk, (cB => uc(cB))), uc(Bc.Hk), Bc.Fk];
      var Bc
    }

    function yB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.gJ, Pc), uc(Bc.bJ), Bc.ZF];
      var Bc
    }

    function zB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.RZ), uc(Bc.cC)];
      var Bc
    }

    function pc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.EQ)];
      var Bc
    }

    function hc(cB) {
      return uc(cB)
    }

    function aB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.VJ), uc(Bc.MJ), uc(Bc.SV), uc(Bc.ND)];
      var Bc
    }

    function lc(cB) {
      return Oc(cB)
    }

    function Yc(cB) {
      return Oc(cB)
    }

    function Lc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.EX)];
      var Bc
    }

    function gB(cB) {
      return cB
    }

    function Uc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.SF), uc(Bc.yJ)];
      var Bc
    }

    function bB(cB) {
      return uc(cB)
    }

    function Zc(cB) {
      return Tc(cB)
    }

    function Qc(cB) {
      return Tc(cB)
    }

    function Cc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.OJ)];
      var Bc
    }

    function vB(cB) {
      return (qB ??= (0, Vc.w)().map((cB => cB.name)), qB).map((Bc => {
        return "string" === typeof(nc = cB[Bc]) ? uc(nc) : rB(nc, Pc);
        var nc
      }))
    }

    function Dc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.Qv, Bc.Dv, Bc.Fv];
      var Bc
    }
  },
  38863: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => tB,
      d: () => ec,
      g: () => pc
    });
    var Vc = nc(5616),
      Ic = nc(35),
      rB = nc(3510),
      uc = nc(3846),
      sc = nc(5610),
      Mc = nc(38872);
    const Pc = 0,
      qB = 1,
      Oc = 2,
      Tc = "shaderPack:failedToCompile",
      fc = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      mB = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function ec(cB, Bc) {
      var nc;
      const Vc = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.reason) && void 0 !== nc ? nc : "none";
      return fc.has(Vc) ? {
        messageKey: Bc ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Vc && "override" === (null === cB || void 0 === cB ? void 0 : cB.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: mB.has(Vc) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class tB extends Error {
      constructor(cB) {
        super(`the shader pack can't run in this game: ${cB}`), this.messageKey = cB, this.name = "ShaderPackJoinError"
      }
    }
    const Sc = "strict";
    class yB {
      constructor(cB) {
        this.deps = cB, this.pagePack = void 0, this.loaded = null, this.SV = Sc, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = cB.load().catch((Bc => (cB.warn("the shader pack could not load: the game draws without it", Bc), {
          status: "none"
        }))).then((cB => (this.loaded = cB, "active" === cB.status && null !== cB.harnessPolicy && (this.SV = cB.harnessPolicy, this.handOver()), cB)))
      }
      async join(cB) {
        this.OV();
        const Bc = this.game,
          [nc, Ic] = await Promise.all([this.pagePack, this.policyOf(cB)]);
        if (Bc !== this.game || "none" === nc.status) return null;
        const rB = "active" === nc.status ? nc.pack.variants : nc.variants,
          uc = (0, Vc.f)(rB, Ic);
        if (uc && "active" === nc.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (uc) {
          const cB = this.cantRun(nc, Ic);
          if (null !== cB) return cB
        } else if ("blocked" === nc.status || null === this.deps.core) return null;
        return this.SV = Ic, this.handOver(), uc && this.refused ? Tc : (this.joined = !0, this.offInThisGame = !uc, null)
      }
      async replay(cB) {
        const Bc = await this.join(cB);
        null === Bc ? this.playable() : this.deps.failInGame(Bc)
      }
      cantRun(cB, Bc) {
        const {
          core: nc,
          noWebGpu: Vc
        } = this.deps;
        if ("blocked" === cB.status) {
          return "shaderPack:failedUnchecked" === cB.messageKey && null === nc && Vc.noAdapter ? Vc.messageKey : cB.messageKey
        }
        return this.refused || this.failedPolicies.has(Bc) ? Tc : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Tc) : (null !== this.couldntRun ? this.notify(rB.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.SV) && this.notifyModelFallback()))
      }
      OV() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(cB) {
        for (const {
            code: Bc,
            detail: nc
          }
          of cB)
          if (Bc === uc.c.RenderShaderPackNotRun) switch (255 & nc) {
            case Pc:
              this.refused = !0, this.failed();
              break;
            case qB:
              this.failedPolicies.add(this.SV), this.failed();
              break;
            case Oc:
              this.failedModelPolicies.add(this.SV), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Tc) : this.failedWhileJoining = !0)
      }
      fail(cB) {
        this.OV(), this.deps.failInGame(cB)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(cB, Bc) {
        const nc = this.game;
        this.deps.notify(cB, (() => nc === this.game && this.joined), Bc)
      }
      handOver() {
        var cB;
        const {
          core: Bc
        } = this.deps;
        null !== Bc && "active" === (null === (cB = this.loaded) || void 0 === cB ? void 0 : cB.status) && (function(cB, Bc) {
          const nc = (0, sc.e)(Bc.variants);
          return cB.setShaderPack(nc.variantFlags, nc.hooks, nc.moduleCodes, (0, Mc.B)(Bc.layers), Mc.m[Bc.SV], Bc.keepCircleShadows)
        }(Bc, {
          ...this.loaded.pack,
          SV: this.SV
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      policyOf(cB) {
        return this.deps.policyOf(cB).catch((cB => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", cB), Sc)))
      }
    }
    const zB = "wasmShaderPackNotice";

    function pc(cB, Bc, nc) {
      return Ic.i.subscribe(zB, (cB => {
        let {
          translationKey: Bc,
          stillCurrent: nc,
          reasonKey: Vc
        } = cB;
        nc() && Ic.i.Vu("chat", (0, rB.h)(Bc, Vc))
      })), new yB({
        load: hc,
        policyOf: aB,
        core: cB,
        noWebGpu: Bc,
        notify: (cB, Bc, nc) => {
          const Vc = {
            translationKey: cB,
            stillCurrent: Bc,
            reasonKey: nc
          };
          Ic.i.Vu(zB, Vc, !0)
        },
        failInGame: cB => {
          Ic.i.Vu(rB.g, cB)
        },
        warn: nc
      })
    }
    async function hc() {
      const [{
        shaderPackPage: cB,
        harnessShaderPackMode: Bc
      }, {
        shaderPackTextures: Vc
      }] = await Promise.all([Promise.resolve().then((() => nc(37643))), Promise.resolve().then((() => nc(5608)))]), Ic = await cB.load();
      return "active" !== Ic.status ? Ic : {
        status: "active",
        pack: {
          variants: Ic.pack.variants,
          layers: Vc().layers,
          keepCircleShadows: Ic.pack.keepCircleShadows
        },
        harnessPolicy: Bc()
      }
    }
    async function aB(cB) {
      var Bc;
      const [{
        harnessShaderPackMode: Vc
      }, {
        getShaderPackPolicy: Ic
      }] = await Promise.all([Promise.resolve().then((() => nc(37643))), nc.e(76).then((() => nc(41190)))]);
      return null !== (Bc = Vc()) && void 0 !== Bc ? Bc : Ic(cB)
    }
  },
  38944: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      f: () => tB,
      j: () => Mc,
      m: () => Pc,
      p: () => qB,
      t: () => Tc
    });
    var Vc = nc(38950),
      Ic = nc(38956);
    const rB = "atlas:",
      uc = 3e4;
    class sc extends Error {
      constructor(cB, Bc) {
        super(`fetching ${cB} answered HTTP ${Bc}`), this.url = cB, this.status = Bc, this.name = "TerrainTextureFetchError"
      }
    }

    function Mc(cB) {
      if (!cB.startsWith(rB)) return null;
      const Bc = Number(cB.slice(rB.length));
      return Number.isInteger(Bc) && Bc >= 0 ? Bc : null
    }
    async function Pc() {
      const cB = await nc.e(185).then((() => nc(33054)));
      return {
        atlasSheets: cB.blockAtlasUrls,
        texture: Bc => {
          var nc, Vc, rB;
          return null !== (nc = null !== (Vc = null !== (rB = cB.animatedBlockTextures[Bc]) && void 0 !== rB ? rB : cB.rotatedBlockTextures[Bc]) && void 0 !== Vc ? Vc : Ic.c[Bc]) && void 0 !== nc ? nc : null
        }
      }
    }
    async function qB(cB) {
      const Bc = new AbortController,
        nc = setTimeout((() => {
          Bc.abort(new DOMException(`${cB} took over ${uc} ms`, "TimeoutError"))
        }), uc);
      let Vc;
      try {
        const nc = await fetch(cB, {
          signal: Bc.signal
        });
        if (!nc.ok) throw new sc(cB, nc.status);
        Vc = await nc.blob()
      } finally {
        clearTimeout(nc)
      }
      const Ic = await createImageBitmap(Vc, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Tc(Ic)
      } finally {
        Ic.close()
      }
    }
    const Oc = 8192;

    function Tc(cB) {
      const {
        width: Bc,
        height: nc
      } = cB, Ic = Math.max(1, Math.min(nc, Oc)), rB = (0, Vc.f)(Bc, Ic, {
        willReadFrequently: !0
      });
      if (!rB) throw new Error("no 2D context to read the texture back");
      rB.globalCompositeOperation = "copy";
      const uc = new Uint8Array(Bc * nc * 4);
      for (let Vc = 0; Vc < nc; Vc += Ic) {
        const sc = Math.min(Ic, nc - Vc);
        rB.drawImage(cB, 0, Vc, Bc, sc, 0, 0, Bc, sc), uc.set(rB.getImageData(0, 0, Bc, sc).data, Vc * Bc * 4)
      }
      return {
        width: Bc,
        height: nc,
        pixels: uc
      }
    }
    async function fc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qB;
      const Vc = [],
        Ic = await Promise.all(cB.map((async cB => {
          var Ic, uc;
          const sc = null !== (Ic = null === (uc = Bc.decoded) || void 0 === uc ? void 0 : uc.call(Bc, cB)) && void 0 !== Ic ? Ic : null,
            Pc = null === sc ? function(cB, Bc) {
              if (cB.startsWith(rB)) {
                var nc;
                const Vc = Mc(cB);
                return null === Vc ? null : null !== (nc = Bc.atlasSheets[Vc]) && void 0 !== nc ? nc : null
              }
              return Bc.texture(cB)
            }(cB, Bc) : null,
            qB = null !== sc && void 0 !== sc ? sc : null === Pc ? null : nc(Pc);
          if (null === qB) return Vc.push({
            name: cB,
            url: Pc,
            error: new Error(`no URL for terrain texture ${cB}`)
          }), null;
          try {
            const Bc = await qB;
            if (Bc.pixels.byteLength !== Bc.width * Bc.height * 4) throw new Error(`decoded ${Bc.pixels.byteLength} bytes for ${Bc.width}x${Bc.height} texels`);
            return {
              name: cB,
              texture: Bc
            }
          } catch (Oc) {
            return Vc.push({
              name: cB,
              url: Pc,
              error: Oc
            }), null
          }
        }))),
        uc = Ic.filter((cB => null !== cB)),
        sc = new Uint8Array(uc.reduce(((cB, Bc) => {
          let {
            texture: nc
          } = Bc;
          return cB + nc.pixels.byteLength
        }), 0)),
        Pc = new Uint32Array(2 * uc.length);
      let Oc = 0;
      uc.forEach(((cB, Bc) => {
        let {
          texture: nc
        } = cB;
        sc.set(nc.pixels, Oc), Oc += nc.pixels.byteLength, Pc[2 * Bc] = nc.width, Pc[2 * Bc + 1] = nc.height
      }));
      return {
        handOver: {
          names: uc.map((cB => {
            let {
              name: Bc
            } = cB;
            return Bc
          })),
          bytes: sc,
          sizes: Pc
        },
        failures: Vc
      }
    }
    const mB = [2e3, 1e4, 3e4, 6e4, 12e4];

    function ec() {}
    class tB {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = cB, this.retryMs = Bc, this.keepBelow = nc, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pc,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Vc = ++this.started,
          Ic = {
            decode: nc.decode,
            wholeAtlas: nc.wholeAtlas
          };
        return this.loadAndHandOver(Bc, Ic, cB, (() => {
          var cB;
          return Vc < this.landed || !1 === (null === (cB = nc.wanted) || void 0 === cB ? void 0 : cB.call(nc))
        }), {
          onTaken: (cB, nc) => {
            this.landed = Vc;
            const rB = null !== cB && cB.bytes.byteLength < this.keepBelow ? cB : null;
            this.current = {
              mine: Vc,
              sources: Bc,
              load: Ic,
              kept: rB,
              failed: nc
            }
          }
        })
      }
      restore(cB) {
        var Bc;
        const nc = this.current;
        if (null === nc) return Promise.resolve(null);
        if ((null === (Bc = this.restoring) || void 0 === Bc ? void 0 : Bc.mine) === nc.mine) return this.restoring.done;
        const Vc = {
          mine: nc.mine,
          done: this.restoreLanded(nc, cB).finally((() => {
            this.restoring === Vc && (this.restoring = null)
          }))
        };
        return this.restoring = Vc, Vc.done
      }
      async restoreLanded(cB, Bc) {
        const nc = () => this.landed !== cB.mine,
          {
            kept: Vc
          } = cB;
        if (null !== Vc) return this.stopped() ? null : this.core.setTerrainTextures(Vc.names, Vc.bytes, Vc.sizes);
        let Ic = Bc;
        for (let rB = 0;; rB++) {
          const Bc = this.retryMs.at(rB),
            Vc = {
              allOrNothingExcept: void 0 === Bc ? void 0 : cB.failed
            },
            uc = await this.loadAndHandOver(cB.sources, cB.load, Ic, nc, Vc);
          if (!1 !== uc || void 0 === Bc || this.stopped()) return uc;
          if (Ic = ec, await new Promise((cB => {
              setTimeout(cB, Bc)
            })), nc()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const rB = this.core.terrainTextureNames();
        var uc;
        if (0 === rB.length) return null === (uc = Ic.onTaken) || void 0 === uc || uc.call(Ic, null, new Set), !0;
        let sc;
        try {
          sc = await fc(rB, await cB(), Bc.decode)
        } catch (mB) {
          return Vc() ? null : (nc({
            name: null,
            url: null,
            error: mB
          }), !1)
        }
        if (Vc() || this.stopped()) return null;
        for (const Mc of sc.failures) nc(Mc);
        const Pc = Ic.allOrNothingExcept;
        if (void 0 !== Pc && sc.failures.some((cB => {
            let {
              name: Bc
            } = cB;
            return null === Bc || !Pc.has(Bc)
          })) || !0 === Bc.wholeAtlas && sc.failures.some((cB => {
            let {
              name: Bc
            } = cB;
            return null === Bc || null !== Mc(Bc)
          }))) return !1;
        const {
          handOver: qB
        } = sc, Oc = this.core.setTerrainTextures(qB.names, qB.bytes, qB.sizes);
        if (Oc) {
          var Tc;
          const cB = new Set(sc.failures.flatMap((cB => {
            let {
              name: Bc
            } = cB;
            return null === Bc ? [] : [Bc]
          })));
          null === (Tc = Ic.onTaken) || void 0 === Tc || Tc.call(Ic, qB, cB)
        }
        return Oc
      }
    }
  },
  38963: (cB, Bc, nc) => {
    function Vc(cB) {
      return "fetch" === cB || "timeout" === cB || "integrity" === cB ? "download" : "browser"
    }
    nc.d(Bc, {
      d: () => Ic,
      f: () => uc,
      g: () => Mc,
      j: () => sc,
      n: () => Vc,
      p: () => rB
    });
    const Ic = "https://discord.gg/playbloxd";

    function rB(cB) {
      return "download" === cB ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function uc(cB, Bc) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Bc ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: cB.code
        },
        discordLink: Bc,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function sc() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Mc(cB, Bc, nc) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: nc ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: cB.reason
        },
        discordLink: null === cB.name,
        confirm: Bc ? "general:reconnect" : cB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  38833: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      followPageUiPack: () => sM,
      packForGame: () => Ns,
      playWasmGame: () => yP,
      prefetchWasmPreviews: () => Eu,
      setGamePackConfirm: () => Ds,
      startWasmPlay: () => TM,
      startWasmPreviews: () => Nu
    });
    var Vc = nc(174),
      Ic = nc(1114),
      rB = nc(152),
      uc = nc(37554),
      sc = nc(1566),
      Mc = nc(35),
      Pc = nc(3756),
      qB = nc(1164),
      Oc = nc(1177),
      Tc = nc(37666),
      fc = nc(37681),
      mB = nc(37596),
      ec = nc(35124),
      tB = nc(38696),
      Sc = nc(3828),
      yB = nc(38598),
      zB = nc(38666),
      pc = nc(38601);
    const hc = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0
      }
    };

    function aB(cB) {
      const Bc = {
        ...zB.c[cB]
      };
      for (const nc of Object.keys(hc[cB])) delete Bc[nc];
      return Bc
    }

    function lc() {
      var cB, Bc;
      return null === (cB = null === (Bc = (0, yB.e)()) || void 0 === Bc ? void 0 : Bc.localPlayerAlive()) || void 0 === cB || cB
    }

    function Yc() {
      var cB, Bc;
      return null !== (cB = null === (Bc = (0, yB.e)()) || void 0 === Bc ? void 0 : Bc.localDeaths()) && void 0 !== cB ? cB : null
    }
    const Lc = {
        current: lc,
        watch: cB => {
          let Bc = lc(),
            nc = Yc();
          return (0, Sc.v)((() => {
            const Vc = lc(),
              Ic = Yc(),
              rB = null !== Ic && null !== nc && Ic !== nc;
            nc = Ic, rB ? (Bc || cB(!0), cB(!1), Vc && cB(!0), Bc = Vc) : Vc !== Bc && (Bc = Vc, cB(Vc))
          }))
        }
      },
      gB = {
        states: {
          ...aB("states"),
          localPlayerAlive: Lc
        },
        events: {
          ...aB("events"),
          localPlayerAliveSet: {
            watch: Lc.watch
          }
        },
        commands: {
          ...aB("commands"),
          respawn: () => {
            var cB;
            null === (cB = (0, yB.e)()) || void 0 === cB || cB.respawn()
          },
          playEmote: cB => {
            var Bc;
            null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.send(pc.e.PlayEmote, (0, pc.E)({
              EQ: cB
            }))
          },
          applyTemporaryThirdPerson: cB => {
            var Bc;
            let {
              durationMs: nc
            } = cB;
            null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.thirdPersonFor(nc)
          },
          bindCustomButtonKeys: cB => {
            var Bc;
            null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.bindCustomButtonKeys(cB)
          },
          pressCustomButton: cB => {
            var Bc;
            let {
              id: nc,
              down: Vc
            } = cB;
            null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.pressCustomButton(nc, Vc)
          },
          setLookSensitivity: () => {},
          wakeUp: cB => {
            const Bc = (0, pc.O)({
                OJ: cB
              }),
              nc = () => {
                const cB = (0, yB.e)();
                return !(null !== cB && void 0 !== cB && cB.isSessionLive) || cB.send(pc.e.StopSleeping, Bc)
              };
            if (!nc()) {
              const cB = (0, Sc.v)((() => {
                nc() && cB()
              }))
            }
          },
          setCameraZoom: cB => {
            var Bc;
            null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.setCameraZoom(cB)
          }
        },
        queries: aB("queries"),
        lookups: {
          ...aB("lookups"),
          cameraZoom: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = (0, yB.e)()) || void 0 === Bc ? void 0 : Bc.cameraZoom()) && void 0 !== cB ? cB : 0
          }
        }
      };
    var Uc = nc(38835),
      bB = nc(38843),
      Zc = nc(38849),
      Qc = nc(1119),
      Cc = nc(119),
      vB = nc(3638),
      Dc = nc(2892),
      Nc = nc(1027);
    const Ec = {
      OZ: () => (0, Qc.d)(),
      inbuiltOverwritten: () => vB.e,
      reflectApplyHit: () => Nc.b,
      definerHit: () => Cc.currentUrl.c,
      emitReplaced: () => (0, Mc.b)(),
      confirmMesh: () => (0, Dc.e)()
    };
    var oc = nc(38863),
      Wc = nc(38880);
    var wc = nc(27),
      kB = nc(1572),
      Xc = nc(1613),
      Hc = nc(1466),
      Fc = nc(1661),
      Jc = nc(1051),
      jB = nc(1117);

    function Rc() {
      return jB.e.get().getCurrentLanguageCode()
    }

    function iB(cB) {
      const Bc = () => {
        cB({
          translate: (cB, Bc) => (0, Jc.o)(Rc(), cB, Bc),
          keyBindingText: cB => {
            const Bc = (0, Xc.s)(cB, wc.d.get("isTouchScreen"));
            return null !== Bc ? (0, Jc.s)(Rc(), Bc.translationKey, Bc.params) : (0, Xc.n)((0, Xc.q)(cB))
          },
          isFriend: Fc.g,
          hiddenNames: kB.d.shown
        })
      };
      let nc = !1;
      const Vc = () => {
          const cB = Rc();
          (0, Jc.g)(cB).then((() => {
            nc || cB !== Rc() || Bc()
          }))
        },
        Ic = () => Hc.e.getSocialState().friends.map((cB => cB.name.toLowerCase())).sort().join(" ");
      let rB = Ic();
      Bc(), Vc();
      const uc = [(0, jB.g)((() => {
        Bc(), Vc()
      })), (0, Mc.m)("customBindingsChanged", Bc), (0, Mc.m)("appManagerUpdated|isTouchScreen", Bc), (0, Fc.c)((() => {
        const cB = Ic();
        cB !== rB && (rB = cB, Bc())
      })), kB.d.subscribe(Bc)];
      return () => {
        nc = !0;
        for (const cB of uc) cB()
      }
    }
    var Kc = nc(283),
      xB = nc(867),
      dc = nc(244),
      Ac = nc(2870),
      Gc = nc(35045),
      cn = nc(2876),
      BB = nc(37245),
      nB = nc(5599),
      VB = nc(38780),
      IB = nc(263),
      rn = nc(1594),
      uB = nc(2898),
      sB = nc(2438);
    let MB = null;
    var PB = nc(1062),
      qn = nc(5465),
      OB = nc(37601),
      TB = nc(2576),
      fB = nc(66),
      mn = nc(235),
      eB = nc(38733),
      tn = nc(3835);
    class SB {
      constructor(cB, Bc) {
        this.showView = cB, this.holdForAd = Bc
      }
      pointerUnlockRequestsChanged() {
        (0, eB.B)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, eB.p)())
        }]
      }
      setGameViewShown(cB) {
        this.showView(cB)
      }
      videoAdHold(cB, Bc) {
        this.holdForAd(cB, Bc)
      }
    }
    class yn {
      OV(cB) {
        ! function(cB) {
          if (null !== (0, Oc.d)().websocketUrl) try {
            (0, Sc.M)().leaveGame(cB)
          } finally {
            (0, Oc.t)({
              websocketUrl: null
            })
          }
        }(cB)
      }
      isReplay() {
        return !1
      }
    }
    class zn {
      watchFrameStarts(cB) {
        return (0, Sc.o)(cB)
      }
      watchFrames(cB) {
        return (0, Sc.n)(cB)
      }
      watchTicks(cB) {
        return (0, Sc.v)(cB)
      }
    }
    var pB = nc(1152),
      hB = nc(38883);

    function an(cB) {
      return cB >= 0 ? Math.min(1, cB) : 0
    }

    function lB(cB, Bc) {
      const {
        fade: nc
      } = cB;
      return null === nc || Bc - nc.at >= nc.ms ? cB.volume : nc.from + (cB.volume - nc.from) * Math.max(0, (Bc - nc.at) / nc.ms)
    }

    function YB(cB) {
      const Bc = Object.entries(cB),
        nc = new Uint32Array(Bc.length);
      let Vc = 0;
      for (const [uc, [, sc]] of Bc.entries()) nc[uc] = sc.length, Vc += sc.length;
      const Ic = new Float64Array(3 * Vc);
      let rB = 0;
      for (const [, uc] of Bc)
        for (const cB of uc) Ic.set(cB, rB), rB += 3;
      return {
        blocks: Bc.map((cB => {
          let [Bc] = cB;
          return Bc
        })).join("\0"),
        counts: nc,
        values: Ic
      }
    }
    class LB {
      constructor(cB, Bc) {
        this.core = cB, this.warn = Bc, this.latest = 0
      }
      async feed() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn;
        const Bc = ++this.latest;
        let nc;
        try {
          nc = await cB()
        } catch (Vc) {
          return void(this.core.isStopped || Bc !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Vc))
        }
        Bc === this.latest && (this.core.setBlockColours(nc) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function gn() {
      return YB((await nc.e(185).then((() => nc(33054)))).averageColors)
    }
    var UB = nc(3838),
      bn = nc(38647),
      ZB = nc(38887),
      QB = nc(38822),
      CB = nc(564),
      vn = nc(35640),
      DB = nc(556),
      NB = nc(302),
      EB = nc(38810);
    const oB = [3e4, 12e4, 3e5];
    class WB extends Error {}
    const wB = {
      mobTypes: CB.h,
      vehicleTypes: vn.d,
      mobAiStates: CB.d,
      playerPoses: DB.l
    };
    var kn = nc(38798),
      XB = nc(38890),
      HB = nc(8172),
      FB = nc(38852),
      JB = nc(8177),
      jn = nc(2432),
      RB = nc(38742),
      KB = nc(270),
      xn = nc(3622),
      dB = nc(51),
      AB = nc(38900),
      GB = nc(3571),
      cV = nc(1934),
      Bn = nc(1464),
      nn = nc(1142),
      Vn = nc(125),
      In = nc(1940),
      rV = nc(3857),
      un = nc(3866);
    const sn = new Set([UB.jb.KeyDown, UB.jb.MouseMove, UB.jb.MouseDown, UB.jb.Wheel, UB.jb.TouchStart, UB.jb.TouchMove]);

    function Mn(cB) {
      return (cB.shiftKey ? UB.vb.Shift : 0) | (cB.ctrlKey ? UB.vb.Ctrl : 0) | (cB.altKey ? UB.vb.Alt : 0) | (cB.metaKey ? UB.vb.Meta : 0) | ("repeat" in cB && cB.repeat ? UB.vb.Repeat : 0) | (cB.isTrusted ? 0 : UB.vb.Untrusted)
    }

    function Pn(cB) {
      return "touchOnly" !== (0, Vn.b)() && "function" === typeof cB.requestPointerLock
    }

    function qV(cB) {
      return 0 === cB.button ? cB.altKey ? rV.k["Alt+Left Click"] : rV.k.Mouse1 : 1 === cB.button ? rV.k.Mouse2 : rV.k.Mouse3
    }
    const On = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Tn = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      fn = 32768,
      mV = 1;

    function en(cB) {
      return Math.min(Math.max(Math.round(cB), 0), 65535)
    }

    function tV(cB, Bc, nc) {
      const Vc = [],
        Ic = (cB, Bc, nc, Ic) => {
          const rB = nc;
          cB.addEventListener(Bc, rB, Ic), Vc.push((() => {
            cB.removeEventListener(Bc, rB, Ic)
          }))
        },
        rB = {
          capture: !0,
          passive: !0
        },
        uc = (cB, nc, Vc, Ic, rB) => (!(0, In.c)() || !sn.has(cB)) && (Bc(cB, nc, Vc, Ic, rB), !0),
        sc = () => document.pointerLockElement === cB,
        Mc = function() {
          try {
            return window.self !== window.top
          } catch {
            return !0
          }
        }(),
        Pc = cB => {
          cB.ctrlKey && nc.ctrlCombosAreGames() && !(0, un.e)(cB.target) && cB.preventDefault()
        },
        qB = (cB, Vc) => {
          nc.inspect(cB, Vc, !1), Bc(UB.jb.KeyUp, Vc, 0, 0, (0, cV.s)(Mn(cB), cB.timeStamp)), nc.keyReleased(Vc)
        },
        Oc = new Map,
        Tc = (cB, Bc, nc) => cB[nc] || ("AltRight" === Bc || "ControlLeft" === Bc) && cB.getModifierState("AltGraph"),
        fc = new Map,
        mB = cB => {
          if (document.hasFocus())
            for (const [Bc, nc] of fc) fc.delete(Bc), Tc(cB, Bc, nc) || (Oc.delete(Bc), qB(cB, rV.k[Bc]))
        };
      cB.tabIndex = -1;
      let ec = 0,
        tB = 0;
      const Sc = () => {
        const Bc = cB.getBoundingClientRect();
        ec = Bc.left, tB = Bc.top
      };
      let yB = "mouse";
      const zB = () => !sc() && ("mouse" === yB || !nc.touchUiShown()),
        pc = (cB, Bc, nc) => {
          const Vc = (en(cB.clientX - ec) | en(cB.clientY - tB) << 16) >>> 0;
          uc(UB.jb.MouseMove, UB.xb.Point, Bc, nc, Vc)
        };
      let hc = !1,
        aB = 0;
      const lc = () => {
        hc && (hc = !1, nc.viewShown() && (0, eB.T)())
      };
      Vc.push((() => {
        clearTimeout(aB)
      })), Ic(window, "keydown", (cB => {
        "Escape" === cB.key ? (0, eB.I)(!0) : cB.repeat || (0, un.e)(cB.target) || (hc = !0, clearTimeout(aB), aB = window.setTimeout(lc, 0))
      }), rB), Ic(window, "keydown", (cB => {
        lc(), Pc(cB), mB(cB);
        const Bc = rV.k[cB.code];
        if ("number" !== typeof Bc || !nc.viewShown()) return;
        const Vc = (0, un.e)(cB.target);
        Vc || !nc.prevents(Bc) && !On.has(cB.code) || cB.preventDefault(), cB.repeat || nc.inspect(cB, Bc, !0);
        const Ic = Tn.get(cB.code);
        uc(UB.jb.KeyDown, Bc, 0, 0, (0, cV.s)(Mn(cB), cB.timeStamp)) && void 0 !== Ic && Oc.set(cB.code, Ic), Vc || nc.keyPressed(Bc)
      }), {
        capture: !1,
        passive: !1
      }), Ic(window, "keyup", (cB => {
        "Escape" === cB.key && (0, eB.I)(!1), Pc(cB), Oc.delete(cB.code), fc.delete(cB.code), mB(cB);
        const Bc = rV.k[cB.code];
        "number" === typeof Bc && qB(cB, Bc)
      }), {
        capture: !0,
        passive: !1
      }), Ic(window, "mousemove", (cB => {
        "mouse" === yB && zB() ? pc(cB, cB.movementX, cB.movementY) : uc(UB.jb.MouseMove, 0, cB.movementX, cB.movementY, 0)
      }), rB);
      let Yc = 0,
        Lc = 0;
      const gB = [];
      let Uc = !1,
        bB = !1;
      Ic(cB, "mousedown", (cB => {
        if ((0, In.c)()) return;
        mB(cB);
        const Vc = 1 << cB.button;
        if (!sc() && (0, eB.Q)() && (0, eB.f)() && (bB = !0, !Uc)) return void(Yc |= Vc);
        Yc &= ~Vc;
        const Ic = cB.button <= 2 ? qV(cB) : void 0;
        void 0 !== Ic && (gB[cB.button] = Ic, nc.inspect(cB, Ic, !0)), zB() && pc(cB, 0, 0), Bc(UB.jb.MouseDown, cB.button, cB.clientX, cB.clientY, (0, cV.s)(Mn(cB), cB.timeStamp)), Lc |= Vc, void 0 !== Ic && nc.keyPressed(Ic)
      }), rB), Ic(window, "mouseup", (cB => {
        var Vc;
        mB(cB);
        const Ic = 1 << cB.button,
          rB = 0 !== (Yc & ~Lc & Ic);
        if (Yc &= ~Ic, Lc &= ~Ic, rB) return;
        const uc = cB.button <= 2 ? null !== (Vc = gB[cB.button]) && void 0 !== Vc ? Vc : qV(cB) : void 0;
        void 0 !== uc && nc.inspect(cB, uc, !1), Bc(UB.jb.MouseUp, cB.button, cB.clientX, cB.clientY, (0, cV.s)(Mn(cB), cB.timeStamp)), void 0 !== uc && nc.keyReleased(uc)
      }), rB), Ic(cB, "contextmenu", (cB => {
        cB.preventDefault()
      }), {
        passive: !1
      });
      const Zc = cB => {
        (sc() || (0, eB.o)() && (0, nn.r)()) && (cB.ctrlKey || Mc && !document.fullscreenElement) && cB.preventDefault()
      };
      Ic(cB, "wheel", (cB => {
        Zc(cB), mB(cB), uc(UB.jb.Wheel, cB.deltaMode, cB.deltaX, cB.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Qc = {
          capture: !0,
          passive: !1
        },
        Cc = cB => {
          cB ? window.addEventListener("wheel", Zc, Qc) : window.removeEventListener("wheel", Zc, Qc)
        };
      Cc((0, eB.o)()), Vc.push((0, eB.w)(Cc)), Vc.push((() => {
        Cc(!1)
      }));
      const vB = new Map,
        Dc = new Set,
        Nc = cB => {
          const Bc = "stylus" === cB.touchType;
          for (const nc of vB.values())
            if (!nc.touched && (Bc || Math.abs(cB.clientX - nc.x) <= mV && Math.abs(cB.clientY - nc.y) <= mV)) return nc.touched = !0, !0;
          return !1
        },
        Ec = cB => Bc => {
          const nc = (0, cV.s)(Mn(Bc), Bc.timeStamp),
            Vc = Bc.changedTouches;
          for (let Ic = 0; Ic < Vc.length; Ic++) {
            const Bc = Vc[Ic];
            cB === UB.jb.TouchStart && Nc(Bc) && Dc.add(Bc.identifier), Dc.has(Bc.identifier) ? cB !== UB.jb.TouchEnd && cB !== UB.jb.TouchCancel || Dc.delete(Bc.identifier) : uc(cB, 32767 & Bc.identifier, Bc.clientX, Bc.clientY, nc)
          }
        },
        oc = Ec(UB.jb.TouchStart);
      Ic(cB, "touchstart", (cB => {
        cB.preventDefault(), (0, In.c)() || (nc.touchStarting(), oc(cB))
      }), {
        passive: !1
      }), Ic(cB, "touchmove", Ec(UB.jb.TouchMove), rB), Ic(cB, "touchend", Ec(UB.jb.TouchEnd), rB), Ic(cB, "touchcancel", Ec(UB.jb.TouchCancel), rB);
      const Wc = (cB, Bc) => {
        uc(cB, fn | 32767 & Bc.pointerId, Bc.clientX, Bc.clientY, (0, cV.s)(Mn(Bc), Bc.timeStamp))
      };
      Ic(window, "pointerdown", (Bc => {
        yB = Bc.pointerType, "mouse" === Bc.pointerType && Bc.target !== cB && nc.viewShown() && (0, eB.W)()
      }), rB), Ic(cB, "pointerdown", (cB => {
        "pen" === cB.pointerType && 0 === cB.button && (0, eB.o)() && (0, nn.r)() && (cB.preventDefault(), (0, In.c)() || (vB.set(cB.pointerId, {
          x: cB.clientX,
          y: cB.clientY,
          touched: !1
        }), nc.touchStarting(), Wc(UB.jb.TouchStart, cB)))
      }), {
        passive: !1
      }), Ic(window, "pointermove", (cB => {
        yB = cB.pointerType, vB.has(cB.pointerId) && Wc(UB.jb.TouchMove, cB), "mouse" !== cB.pointerType && zB() && pc(cB, 0, 0)
      }), rB);
      const wc = cB => Bc => {
        vB.delete(Bc.pointerId) && Wc(cB, Bc)
      };
      Ic(window, "pointerup", wc(UB.jb.TouchEnd), rB), Ic(window, "pointercancel", wc(UB.jb.TouchCancel), rB);
      let kB = 0;
      const Xc = () => {
          kB = 0, Sc(), nc.resized()
        },
        Hc = () => {
          const cB = nc.sizeCanvas();
          null !== cB && Bc(UB.jb.Resize, 0, cB.cssWidth, cB.cssHeight, (0, cV.i)(cB.renderScale)), Sc(), nc.resized(), 0 === kB && (kB = requestAnimationFrame(Xc))
        };
      Ic(window, "resize", Hc, rB), Vc.push(nc.watchRenderScale(Hc)), Vc.push((() => {
        cancelAnimationFrame(kB)
      })), Ic(window, "focus", (cB => {
        cB.isTrusted && (Bc(UB.jb.Focus, 0, 0, 0, 0), nc.viewShown() && (0, eB.W)())
      }), {
        passive: !0
      });
      const Fc = () => {
          (0, eB.I)(!1), Yc = 0
        },
        Jc = () => {
          vB.clear(), Dc.clear()
        };
      let jB = 0;
      Ic(window, "blur", (Vc => {
        Fc(), (0, eB.l)();
        for (const [cB, Bc] of Oc) fc.set(cB, Bc);
        Vc.isTrusted && (Bc(UB.jb.Blur, 0, 0, 0, 0), Jc()), clearTimeout(jB), jB = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, nn.r)() && nc.viewShown() && cB.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Vc.push((() => {
        clearTimeout(jB)
      })), Vc.push((0, In.g)((() => {
        Fc(), Bc(UB.jb.Blur, UB.p.Release, 0, 0, 0), nc.keysReleased(), Oc.clear(), fc.clear(), Lc = 0, Jc(), Bc(UB.jb.Joystick, 0, 0, 0, 0), document.hasFocus() && Bc(UB.jb.Focus, 0, 0, 0, 0)
      })));
      const Rc = !nc.canLock(),
        iB = () => Rc && !(0, eB.o)() ? UB.Nb.Lockless : UB.Nb.Released,
        Kc = () => {
          sc() && (Uc = !1, bB = !1), Bc(UB.jb.PointerLock, sc() ? UB.Nb.Locked : iB(), 0, 0, 0), (0, eB.O)(sc())
        };
      return Ic(document, "pointerlockchange", Kc, {
        passive: !0
      }), Ic(document, "pointerlockerror", (() => {
        Uc ||= bB, bB = !1, (0, eB.t)()
      }), {
        passive: !0
      }), Rc && Vc.push((0, eB.w)((() => {
        Bc(UB.jb.PointerLock, iB(), 0, 0, 0)
      }))), Hc(), Bc(document.hasFocus() ? UB.jb.Focus : UB.jb.Blur, 0, 0, 0, 0), Kc(), () => {
        for (const cB of Vc.splice(0)) cB()
      }
    }
    var Sn = nc(38970),
      yV = nc(8157),
      zV = nc(1621);
    const pn = new Map(rV.e.map(((cB, Bc) => [cB, Bc]))),
      hn = ["jump", "primary-fire", "alt-fire"],
      aV = ["primary-fire", "alt-fire"];

    function lnc(cB) {
      return `${zV.b}${cB}`
    }
    const Yn = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Ln(cB) {
      const Bc = [];
      for (const nc of cB) {
        const cB = "string" === typeof nc ? rV.k[nc] : void 0;
        "number" === typeof cB && Bc.push(cB)
      }
      return Bc
    }
    class gV {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [cB, Bc] of Object.entries(rV.h)) this.keys.set(cB, Bc);
        this.updateKeySets()
      }
      prevents(cB) {
        return this.preventKeys.has(cB)
      }
      moves(cB) {
        return this.movementKeys.has(cB)
      }
      checks(cB, Bc) {
        return (Bc ? this.checkedDown : this.checkedUp).has(cB)
      }
      sync(cB, Bc) {
        for (const [nc, Vc] of this.keys) {
          const Ic = cB(lnc(nc)),
            rB = Array.isArray(Ic) ? Ln(Ic) : rV.h[nc];
          (rB.length !== Vc.length || rB.some(((cB, Bc) => cB !== Vc[Bc]))) && this.bind(nc, rB, Bc)
        }
      }
      bind(cB, Bc, nc) {
        const Vc = pn.get(cB);
        if (void 0 !== Vc) {
          nc(UB.jb.Binding, 0, 0, 0, Vc | UB.l.Clear << 8);
          for (const rB of [...Bc, ...null !== (Ic = rV.j[cB]) && void 0 !== Ic ? Ic : []]) {
            var Ic;
            nc(UB.jb.Binding, rB, 0, 0, Vc | UB.l.Add << 8)
          }
          this.keys.set(cB, Bc), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Vc of rV.m)
          for (const Bc of null !== (cB = this.keys.get(rV.e[Vc])) && void 0 !== cB ? cB : []) {
            var cB;
            this.preventKeys.add(Bc)
          }
        this.movementKeys.clear();
        for (const Vc of Yn)
          for (const cB of null !== (Bc = this.keys.get(Vc)) && void 0 !== Bc ? Bc : []) {
            var Bc;
            this.movementKeys.add(cB)
          }
        for (const [Vc, Ic] of [
            [this.checkedDown, hn],
            [this.checkedUp, aV]
          ]) {
          Vc.clear();
          for (const cB of Ic)
            for (const Bc of null !== (nc = this.keys.get(cB)) && void 0 !== nc ? nc : []) {
              var nc;
              Vc.add(Bc)
            }
        }
      }
    }
    var Un = nc(3855),
      bV = nc(35184);
    const Zn = "[bloxd-wasm-client]";

    function Qn() {
      return "inGame" === wc.d.get("gameState") && !(0, Bn.s)()
    }
    let Cn = null;

    function vV(cB, Bc) {
      Cn && Bc.writePendingInput() && Cn.push(function(cB, Bc) {
        let nc = "";
        for (const Vc of Bc) nc += Vc.toString(16).padStart(2, "0");
        return nc ? `${cB} ${nc}` : String(cB)
      }(cB, Bc.rings.input.written()))
    }
    const Dn = [];

    function Nn(cB, Bc, nc, Vc) {
      cB === UB.T.InputAction && Vc === UB.eb && Dn.push(Bc.getUint32(nc, !0))
    }
    var En = nc(38977),
      onc = nc(1056),
      Wn = nc(38963);
    const wn = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Reconnect"
      },
      wasmScreens: onc.wasmScreens
    };

    function kV(cB) {
      var Bc, nc;
      let Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Ic, rB] = cB.split(":");
      return (null !== (Bc = null === (nc = wn[Ic]) || void 0 === nc ? void 0 : nc[rB]) && void 0 !== Bc ? Bc : cB).replace(/\{\{(\w+)\}\}/g, ((cB, Bc) => {
        var nc;
        return null !== (nc = Vc[Bc]) && void 0 !== nc ? nc : cB
      }))
    }

    function Xn(cB, Bc) {
      (0, GB.e)();
      const nc = document.createElement("div");
      nc.setAttribute("role", "alertdialog"), nc.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Vc = document.createElement("div");
      Vc.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const Ic = document.createElement("h2");
      Ic.textContent = kV(cB.title);
      const rB = document.createElement("p");
      if (rB.textContent = kV(cB.help, cB.helpValues), rB.style.whiteSpace = "pre-line", Vc.append(Ic, rB), cB.discordLink) {
        const cB = document.createElement("a");
        cB.href = Wn.d, cB.target = "_blank", cB.rel = "noreferrer", cB.style.color = "#8ab4ff", cB.textContent = kV("wasmScreens:reportOnDiscord"), Vc.append(cB)
      }
      const uc = document.createElement("div");
      return uc.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Vc.append(uc), nc.append(Vc), document.body.append(nc), new Promise((Vc => {
        const Ic = cB => {
            null === Bc || void 0 === Bc || Bc.removeEventListener("abort", rB), nc.remove(), Vc(cB)
          },
          rB = () => {
            Ic(!1)
          };
        null === Bc || void 0 === Bc || Bc.addEventListener("abort", rB, {
          once: !0
        });
        const sc = (cB, Bc) => {
          const nc = document.createElement("button");
          nc.textContent = kV(cB), nc.style.cssText = "padding:0.5rem 1.25rem;font:inherit", nc.addEventListener("click", (() => {
            Ic(Bc)
          })), uc.append(nc)
        };
        null !== cB.cancel && sc(cB.cancel, !1), sc(cB.confirm, !0)
      }))
    }
    var Hn = nc(3846);
    const Fn = 6e4,
      Jn = 3e5;
    var jV = nc(2810);
    var Rn = nc(38738),
      iV = nc(279),
      Kn = nc(11);

    function xV(cB, Bc) {
      const nc = Kn.eb.encode(Bc);
      ! function(cB, Bc) {
        let nc = Bc >= 0 ? 2 * Bc : 2 * -Bc - 1;
        for (; nc >= 128;) cB.push(nc % 128 | 128), nc = Math.floor(nc / 128);
        cB.push(nc)
      }(cB, nc.length);
      for (const Vc of nc) cB.push(Vc)
    }
    let dn, An, Gn;
    (() => {
      const cB = ["length", 0, "c", 6, "f", null, 123, "a", "d", 10, 38, "s", 2, "e", 1, 89, 182, void 0, !1, !0, "resolv", "then", 142, 140, "postCo", "okies", 3, 37, 92, 4, 236, 120, 101, 126, 54, 60, "=", ";", 21];

      function Bc() {}
      "TwbUu3" in Bc && function(...Bc) {
        function nc() {}
        Bc[cB[0]] = cB[1], qB(Bc[-cB[10]] = function(...Bc) {
          for (qB(Bc[cB[0]] = cB[12], Bc[cB[7]] = cB[1], Bc[cB[6]] = cB[1], Bc[cB[2]] = new nc(cB[1]), Bc[cB[8]] = Bc[cB[2]], Bc[cB[3]] = Bc[cB[1]], Bc[cB[4]] = Bc[cB[14]]); Bc[cB[3]] !== cB[5] || Bc[cB[4]] !== cB[5];) qB(Bc[cB[6]] = (Bc[cB[3]] ? Bc[cB[3]].val : cB[1]) + (Bc[cB[4]] ? Bc[cB[4]].val : cB[1]) + Bc[cB[7]], Bc[cB[7]] = Math.floor(Bc[cB[6]] / cB[9]), Bc[cB[8]].next = new nc(Bc[cB[6]] % cB[9]), Bc[cB[8]] = Bc[cB[8]].next, Bc[cB[3]] = Bc[cB[3]] ? Bc[cB[3]].next : cB[5], Bc[cB[4]] = Bc[cB[4]] ? Bc[cB[4]].next : cB[5]);
          return Bc[cB[7]] && (Bc[cB[8]].next = new nc(Bc[cB[7]])), Bc[cB[2]].next
        }, console.log(Bc[-cB[10]]))
      }();
      const Vc = (cB[1], Kn[cB[11]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Ic = (cB[1], Kn[cB[11]])("QkFCWUxPTg=="),
        rB = (cB[1], Kn[cB[11]])("QW5kZXNpdGU="),
        uc = (cB[1], Kn[cB[11]])("U21vb3RoIEdyYW5pdGU="),
        sc = (cB[1], Kn[cB[11]])("RGlvcml0ZQ=="),
        Mc = async (Vc, Ic, rB, uc) => {
          const [{
            clientSideServerUrls: sc
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: Mc
          }] = await Promise.all([Promise[cB[20] + cB[13]]()[cB[21]](((...Vc) => (Vc[cB[0]] = cB[1], "jdNRUi" in Bc && function(...Bc) {
            qB(Bc[cB[0]] = cB[1], Bc[cB[8]] = function(...nc) {
              return nc[cB[0]] = cB[12], Bc[cB[13]]({}, nc[cB[1]], nc[cB[14]])
            }, Bc[cB[13]] = function(...nc) {
              if (qB(nc[cB[0]] = cB[26], nc[-cB[16]] = {}), nc[cB[1]][nc[cB[14]] + nc[cB[12]]] !== cB[17]) return nc[cB[1]][nc[cB[14]] + nc[cB[12]]];
              if (nc[cB[14]] === nc[cB[12]]) return cB[19];
              for (nc[cB[15]] = cB[1]; nc[cB[15]] < nc[cB[14]].length; nc[cB[15]]++) nc[-cB[16]][nc[cB[14]][nc[cB[15]]]] === cB[17] && (nc[-cB[16]][nc[cB[14]][nc[cB[15]]]] = cB[1]), nc[-cB[16]][nc[cB[12]][nc[cB[15]]]] === cB[17] && (nc[-cB[16]][nc[cB[12]][nc[cB[15]]]] = cB[1]), qB(nc[-cB[16]][nc[cB[14]][nc[cB[15]]]]++, nc[-cB[16]][nc[cB[12]][nc[cB[15]]]]--);
              for (nc[cB[2]] in nc[-cB[16]])
                if (nc[-cB[16]][nc[cB[2]]] !== cB[1]) return nc[cB[1]][nc[cB[14]] + nc[cB[12]]] = cB[18], cB[18];
              for (nc[cB[8]] = cB[14]; nc[cB[8]] < nc[cB[14]].length; nc[cB[8]]++)
                if (Bc[cB[13]](nc[cB[1]], nc[cB[14]].substr(cB[1], nc[cB[8]]), nc[cB[12]].substr(cB[1], nc[cB[8]])) && Bc[cB[13]](nc[cB[1]], nc[cB[14]].substr(nc[cB[8]]), nc[cB[12]].substr(nc[cB[8]])) || Bc[cB[13]](nc[cB[1]], nc[cB[14]].substr(cB[1], nc[cB[8]]), nc[cB[12]].substr(nc[cB[12]].length - nc[cB[8]])) && Bc[cB[13]](nc[cB[1]], nc[cB[14]].substr(nc[cB[8]]), nc[cB[12]].substr(cB[1], nc[cB[12]].length - nc[cB[8]]))) return nc[cB[1]][nc[cB[14]] + nc[cB[12]]] = cB[19], cB[19];
              return nc[cB[1]][nc[cB[14]] + nc[cB[12]]] = cB[18], cB[18]
            }, console.log(Bc[cB[8]]))
          }(), nc(1062)))), Promise[cB[20] + cB[13]]()[cB[21]](((...Vc) => (Vc[cB[0]] = cB[1], "EspcAu" in Bc && function(...Bc) {
            var nc;
            qB(Bc[cB[0]] = cB[1], nc = function(...Bc) {
              qB(Bc[cB[0]] = cB[14], this.Qc = Bc[cB[1]], this.length = cB[1], this.map = {}, this.head = cB[5], this.tail = cB[5])
            }, nc.prototype.get = function(...Bc) {
              var nc;
              return qB(Bc[cB[0]] = cB[14], nc = this.map[Bc[cB[1]]]), nc ? (this.remove(nc), this.insert(nc.key, nc.val), nc.val) : -cB[14]
            }, nc.prototype.put = function(...Bc) {
              qB(Bc[cB[0]] = cB[12], this.map[Bc[cB[1]]] ? (this.remove(this.map[Bc[cB[1]]]), this.insert(Bc[cB[1]], Bc[cB[14]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(Bc[cB[1]], Bc[cB[14]])) : (this.insert(Bc[cB[1]], Bc[cB[14]]), this.length++))
            }, nc.prototype.remove = function(...Bc) {
              qB(Bc[cB[0]] = cB[14], Bc[cB[23]] = Bc[cB[1]].prev, Bc[cB[22]] = Bc[cB[1]].next), Bc[cB[22]] && (Bc[cB[22]].prev = Bc[cB[23]]), Bc[cB[23]] && (Bc[cB[23]].next = Bc[cB[22]]), this.head === Bc[cB[1]] && (this.head = Bc[cB[22]]), this.tail === Bc[cB[1]] && (this.tail = Bc[cB[23]]), delete this.map[Bc[cB[1]].key]
            }, nc.prototype.insert = function(...Bc) {
              qB(Bc[cB[0]] = cB[12], Bc[cB[12]] = new List(Bc[cB[1]], Bc[cB[14]]), this.tail ? (this.tail.next = Bc[cB[12]], Bc[cB[12]].prev = this.tail, this.tail = Bc[cB[12]]) : (this.tail = Bc[cB[12]], this.head = Bc[cB[12]]), this.map[Bc[cB[1]]] = Bc[cB[12]])
            }, console.log(nc))
          }(), nc(988))))]), Pc = sc.getHttpUrlFromWebSocketUrl(Vc.endpoint), Oc = Vc[cB[24] + cB[25]] === cB[5] ? cB[17] : await Vc[cB[24] + cB[25]]();
          await Mc("" + Pc + Ic, rB, {
            ["retrie" + cB[11]]: uc
          }, Oc)
        };
      dn = async (Bc, nc) => {
        const Ic = function(cB, Bc, nc, Vc) {
          const Ic = [];
          xV(Ic, cB), xV(Ic, Bc), xV(Ic, nc);
          for (const rB of Vc) Ic.push(rB);
          return Ic
        }(Bc.game, Bc.lobby, (cB[1], iV[cB[8]])(), nc);
        try {
          await Mc(Bc, "/persisted/keep-alive", {
            type: "QV",
            data: Ic
          }, cB[26])
        } catch (Vc) {
          console.warn(Vc)
        }
      };
      const Pc = (...Bc) => (Bc[cB[0]] = cB[12], Object.getOwnPropertyDescriptor(Bc[cB[1]], Bc[cB[14]]));

      function qB() {
        qB = function() {}
      }
      An = () => {
        if ((cB[1], Kn.H)(), Pc(navigator, Vc) !== cB[17]) {
          function nc(...Bc) {
            Bc[cB[0]] = cB[1]
          }
          return "KgFurs" in Bc && nc(), rB
        }
        return Pc(window, Ic) === cB[17] ? uc : sc
      }, Gn = async nc => {
        "d6NLVB" in Bc && function(...Bc) {
          function nc() {}
          Bc[cB[0]] = cB[1], qB(Bc[-cB[33]] = function(...Bc) {
            for (qB(Bc[cB[0]] = cB[12], Bc[-cB[32]] = cB[1], Bc[cB[31]] = cB[1], Bc[cB[29]] = new nc(cB[1]), Bc[cB[8]] = Bc[cB[29]], Bc[-cB[30]] = Bc[cB[1]], Bc[cB[4]] = Bc[cB[14]]); Bc[-cB[30]] !== cB[5] || Bc[cB[4]] !== cB[5];) qB(Bc[cB[31]] = (Bc[-cB[30]] ? Bc[-cB[30]].val : cB[1]) + (Bc[cB[4]] ? Bc[cB[4]].val : cB[1]) + Bc[-cB[32]], Bc[-cB[32]] = Math.floor(Bc[cB[31]] / cB[9]), Bc[cB[8]].next = new nc(Bc[cB[31]] % cB[9]), Bc[cB[8]] = Bc[cB[8]].next, Bc[-cB[30]] = Bc[-cB[30]] ? Bc[-cB[30]].next : cB[5], Bc[cB[4]] = Bc[cB[4]] ? Bc[cB[4]].next : cB[5]);
            return Bc[-cB[32]] && (Bc[cB[8]].next = new nc(Bc[-cB[32]])), Bc[cB[29]].next
          }, console.log(Bc[-cB[33]]))
        }();
        try {
          function Vc(...Bc) {
            Bc[cB[0]] = cB[1]
          }
          "TL_ygS" in Bc && Vc();
          const Ic = An();
          await Mc(nc, "/images/" + Ic + ".png", {
            block: Ic
          }, cB[1])
        } catch {
          function rB(...Bc) {
            Bc[cB[0]] = cB[1];
            const nc = require("big-integer");
            qB(Bc[cB[7]] = class {
              static randomPrime(...Bc) {
                Bc[cB[0]] = cB[14];
                const Vc = nc.one.shiftLeft(Bc[cB[1]] - cB[14]),
                  Ic = nc.one.shiftLeft(Bc[cB[1]]).prev();
                for (; cB[19];) {
                  let cB = nc.randBetween(Vc, Ic);
                  if (cB.isProbablePrime(256)) return cB
                }
              }
              static generate(...Bc) {
                Bc[cB[0]] = cB[14];
                const Vc = nc(65537);
                let Ic, rB;
                Bc[-cB[38]] = cB[17];
                do {
                  qB(Ic = this.randomPrime(Bc[cB[1]] / cB[12]), rB = this.randomPrime(Bc[cB[1]] / cB[12]), Bc[-cB[38]] = nc.lcm(Ic.prev(), rB.prev()))
                } while (nc.gcd(Vc, Bc[-cB[38]]).notEquals(cB[14]) || Ic.minus(rB).abs().shiftRight(Bc[cB[1]] / cB[12] - 100).isZero());
                return {
                  e: Vc,
                  n: Ic.multiply(rB),
                  d: Vc.modInv(Bc[-cB[38]])
                }
              }
              static encrypt(...Bc) {
                return Bc[cB[0]] = cB[26], nc(Bc[cB[1]]).modPow(Bc[cB[12]], Bc[cB[14]])
              }
              static decrypt(...Bc) {
                return Bc[cB[0]] = cB[26], nc(Bc[cB[1]]).modPow(Bc[cB[14]], Bc[cB[12]])
              }
              static encode(...Bc) {
                Bc[cB[0]] = cB[14];
                const Vc = Bc[cB[1]].split("").map((cB => cB.charCodeAt())).join("");
                return nc(Vc)
              }
              static decode(...Bc) {
                Bc[cB[0]] = cB[14];
                const nc = Bc[cB[1]].toString();
                Bc[cB[7]] = "";
                for (let Vc = cB[1]; Vc < nc.length; Vc += cB[12]) {
                  let Ic = Number(nc.substr(Vc, cB[12]));
                  Ic <= 30 ? (Bc[cB[7]] += String.fromCharCode(Number(nc.substr(Vc, cB[26]))), Vc++) : Bc[cB[7]] += String.fromCharCode(Ic)
                }
                return Bc[cB[7]]
              }
            }, module.exports = Bc[cB[7]])
          }
          "oCgzOD" in Bc && rB()
        }
      }
    })();
    var cI = nc(38856),
      BV = nc(37544),
      nV = nc(38982);
    const VV = 1e3 * cI.b.seatReservationSeconds - 3e3;
    class IV {
      constructor(cB) {
        var Bc, nc, Vc, Ic;
        let rB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.controller = new AbortController, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Bc = rB.wallNow) && void 0 !== Bc ? Bc : Date.now, this.monoNow = null !== (nc = rB.monoNow) && void 0 !== nc ? nc : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Vc = rB.sleep) && void 0 !== Vc ? Vc : BV.e;
        const uc = rB.signal,
          sc = () => {
            this.abort((0, qn.d)(uc))
          };
        null !== uc && void 0 !== uc && uc.aborted ? this.abort((0, qn.d)(uc)) : null === uc || void 0 === uc || uc.addEventListener("abort", sc, {
          once: !0
        });
        const Mc = null !== (Ic = rB.fetch) && void 0 !== Ic ? Ic : fetch;
        this.seat = (0, nV.b)(cB.endpoint, cB.roomName, cB.joinOptions, {
          sleep: this.sleep,
          signal: this.controller.signal,
          fetch: (cB, Bc) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Mc(cB, Bc)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          null === uc || void 0 === uc || uc.removeEventListener("abort", sc), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          null === uc || void 0 === uc || uc.removeEventListener("abort", sc), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(cB) {
        if ("rematched" === this.use) return;
        (0, qn.l)(cB);
        const Bc = "pending" !== this.request,
          nc = () => {
            this.abort((0, qn.d)(cB))
          };
        let Vc;
        null === cB || void 0 === cB || cB.addEventListener("abort", nc, {
          once: !0
        });
        try {
          Vc = await this.seat
        } catch (Ic) {
          if ((0, qn.l)(cB), !Bc) throw Ic;
          return void(this.use = "lost")
        } finally {
          null === cB || void 0 === cB || cB.removeEventListener("abort", nc)
        }
        if ((0, qn.l)(cB), !(this.ageMs() > VV)) return this.use = "taken", Vc;
        this.use = "renewed"
      }
      async reserveInstead(cB, Bc) {
        try {
          return await cB()
        } catch (nc) {
          const Ic = this.holdLeftMs();
          if (!(nc instanceof bB.k) || nc.code !== Vc.d.duplicateLobbyNameError.code || 0 === Ic) throw nc;
          return await this.sleep(Ic + 500, Bc), cB()
        }
      }
      release() {
        const {
          request: cB,
          use: Bc
        } = this, nc = this.holdsNoSeat();
        return this.abort(), "taken" === Bc || nc ? null : {
          unused: "unused" === Bc ? "abandoned" : Bc,
          answered: "answered" === cB,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var cB;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Bc = null !== (cB = this.answeredAt) && void 0 !== cB ? cB : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          nc = Math.max(this.wallNow() - Bc.wall, this.monoNow() - Bc.mono);
        return Math.max(0, 1e3 * cI.b.seatReservationSeconds - nc)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(cB) {
        (0, qn.h)(this.controller, cB)
      }
    }
    var rI = nc(1534),
      uV = nc(38989);
    const sV = new Uint8Array(0);
    class MV {
      constructor(cB) {
        if (this.options = cB, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.refusals = new Map, this.heapRefusals = 0, null === cB.module) return this.stopped = !0, void cB.fail("no wasm module for the meshing workers");
        cB.loadWorkers().then((cB => {
          let {
            create: Bc,
            count: nc
          } = cB;
          if (!this.stopped) {
            this.createWorker = Bc;
            for (let cB = 0; cB < nc; cB++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let cB = 0; cB < nc; cB++) this.start(cB)
          }
        }), (cB => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", cB))
        }))
      }
      take(cB, Bc, nc) {
        const Vc = this.slots[Bc];
        if (cB === UB.ld.Retire) {
          var Ic, rB, uc;
          if (Vc && !Vc.gone) null === (Ic = Vc.worker) || void 0 === Ic || Ic.terminate(), Vc.worker = null, Vc.started = !1, null === (rB = (uc = this.options).onMemoryGone) || void 0 === rB || rB.call(uc, Bc), this.giveUp(Bc, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const sc = null === Vc || void 0 === Vc ? void 0 : Vc.worker;
        if (!sc || !Vc.started) return;
        const Mc = nc.byteLength;
        let Pc = null;
        cB === UB.ld.Mesh && Vc.heapRetries > 0 && (Vc.heapRetries--, Pc = this.pooled(Mc, !0)), Pc ??= this.buffer(Mc), new Uint8Array(Pc, 0, Mc).set(nc), sc.postMessage({
          type: "job",
          kind: cB,
          bytes: Pc,
          len: Mc
        }, [Pc])
      }
      takeFailedMeshJobs() {
        const cB = this.failedJobs;
        return this.failedJobs = 0, cB
      }
      stop() {
        this.stopped = !0;
        for (const Bc of this.slots) {
          var cB;
          PV(Bc), null === (cB = Bc.worker) || void 0 === cB || cB.terminate(), Bc.worker = null, Bc.started = !1
        }
      }
      start(cB) {
        const Bc = this.slots[cB],
          {
            module: nc
          } = this.options,
          Vc = this.createWorker;
        if (this.stopped || Bc.gone || null === nc || null === Vc) return;
        if (Bc.startsWithoutResult >= 3) return void this.giveUp(cB, "failed to start 3 times in a row", "no meshing worker would start");
        let Ic;
        Bc.startsWithoutResult++;
        try {
          Ic = Vc()
        } catch (rB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${cB} did not start`, rB), void this.start(cB)
        }
        Bc.worker = Ic, Ic.onmessage = nc => {
          let {
            data: Vc
          } = nc;
          Bc.worker === Ic && this.onReply(cB, Vc)
        }, Ic.onmessageerror = () => {
          Bc.worker === Ic && this.lose(cB, "a reply could not be read")
        }, Ic.onerror = nc => {
          nc.preventDefault(), Bc.worker === Ic && this.lose(cB, nc.message || "its script failed")
        };
        try {
          Ic.postMessage({
            type: "start",
            module: nc
          })
        } catch (rB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${cB} could not be sent the module`, rB), Ic.terminate(), Bc.worker = null, void this.start(cB)
        }
        Bc.watch = new uV.h(uV.c, (Bc => {
          this.lose(cB, (0, uV.l)(Bc), (() => {
            this.options.onStartTimeout(Bc)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(cB, Bc) {
        const nc = this.slots[cB];
        switch (Bc.type) {
          case "started":
            PV(nc), nc.started = !0, this.options.write(0, UB.hd.WorkerStarted, 0, cB, sV);
            break;
          case "lost":
            this.lose(cB, Bc.reason);
            break;
          case "memory":
            var Vc, Ic;
            null === (Vc = (Ic = this.options).onMemoryStats) || void 0 === Vc || Vc.call(Ic, cB, Bc.stats);
            break;
          case "result": {
            const Vc = Bc.status === UB.mb.Trapped,
              Ic = Bc.status === UB.mb.Refused;
            if (0 !== Bc.jobId && (Vc || (nc.startsWithoutResult = 0, nc.trapsWithoutResult = 0), (Vc || Ic) && this.failedJobs++, Ic && this.logRefusal(cB, new Uint8Array(Bc.bytes, 0, Bc.len)), Bc.status === UB.mb.HeapRefused && (nc.heapRetries = Math.min(nc.heapRetries + 1, 4), this.logHeapRefusal(cB))), this.options.write(Bc.jobId, UB.hd.JobResult, Bc.status, cB, new Uint8Array(Bc.bytes, 0, Bc.len)), this.recycle(Bc.bytes), Bc.spare && this.recycle(Bc.spare), !Vc) break;
            if (nc.startsWithoutResult = 0, 0 === Bc.jobId) {
              this.lose(cB, `the tables trapped its wasm: ${Bc.trap}`);
              break
            }
            nc.trapsWithoutResult++;
            const rB = nc.trapsWithoutResult > 6;
            nc.gone ||= rB, this.lose(cB, `a job trapped its wasm: ${Bc.trap}`), rB && this.giveUp(cB, `trapped ${nc.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      logRefusal(cB, Bc) {
        var nc;
        let Vc = function(cB) {
          if (cB.byteLength < 32) return "(no reason)";
          const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength),
            nc = Math.min(Bc.getUint32(28, !0), cB.byteLength - 28 - 4);
          return (new TextDecoder).decode(cB.subarray(32, 32 + nc)).slice(0, 200)
        }(Bc);
        !this.refusals.has(Vc) && this.refusals.size >= 16 && (Vc = "(other reasons)");
        const Ic = (null !== (nc = this.refusals.get(Vc)) && void 0 !== nc ? nc : 0) + 1;
        this.refusals.set(Vc, Ic), (0, rI.z)(Ic) && console.warn(`[bloxd-wasm-client] meshing worker ${cB} refused a chunk (${Ic} so far for this reason): ${Vc}`)
      }
      logHeapRefusal(cB) {
        this.heapRefusals++, (0, rI.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${cB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(cB, Bc, nc) {
        const Vc = this.slots[cB];
        if (Vc.gone = !0, Vc.goneFor = {
            why: Bc,
            failure: nc
          }, console.warn(`[bloxd-wasm-client] meshing worker ${cB} ${Bc}: giving up on it`), this.slots.every((cB => cB.gone))) {
          this.stop();
          const cB = new Set(this.slots.map((cB => {
              var Bc;
              return null === (Bc = cB.goneFor) || void 0 === Bc ? void 0 : Bc.failure
            }))),
            Bc = this.slots.map(((cB, Bc) => {
              var nc, Vc;
              return `worker ${Bc} ${null!==(nc=null===(Vc=cB.goneFor)||void 0===Vc?void 0:Vc.why)&&void 0!==nc?nc:"went"}`
            }));
          this.options.fail(1 === cB.size ? nc : `no meshing worker is left (${Bc.join(", ")})`)
        }
      }
      lose(cB, Bc, nc) {
        var Vc, Ic, rB;
        const uc = this.slots[cB];
        console.warn(`[bloxd-wasm-client] meshing worker ${cB} was lost: ${Bc}`), PV(uc), null === (Vc = uc.worker) || void 0 === Vc || Vc.terminate(), uc.worker = null, uc.heapRetries = 0, null === (Ic = (rB = this.options).onMemoryGone) || void 0 === Ic || Ic.call(rB, cB), this.stopped || (nc ? nc() : this.options.onWorkerLost(Bc), uc.started && (uc.started = !1, this.options.write(0, UB.hd.WorkerLost, 0, cB, sV)), this.start(cB))
      }
      buffer(cB) {
        var Bc;
        return null !== (Bc = this.pooled(cB)) && void 0 !== Bc ? Bc : new ArrayBuffer(Math.max(16384, cB))
      }
      pooled(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = -1;
        for (let Ic = 0; Ic < this.pool.length; Ic++) {
          const Vc = this.pool[Ic].byteLength;
          Vc >= cB && (nc < 0 || (Bc ? Vc > this.pool[nc].byteLength : Vc < this.pool[nc].byteLength)) && (nc = Ic)
        }
        if (nc < 0) return null;
        const Vc = this.pool[nc];
        return this.pool[nc] = this.pool[this.pool.length - 1], this.pool.pop(), Vc
      }
      recycle(cB) {
        this.pool.length < 4 * this.slots.length && cB.byteLength > 0 && cB.byteLength <= 1048576 && this.pool.push(cB)
      }
    }

    function PV(cB) {
      var Bc;
      null === (Bc = cB.watch) || void 0 === Bc || Bc.cancel(), cB.watch = null
    }
    var qI = nc(38914),
      OV = nc(38905),
      TV = nc(38995),
      fV = nc(39004),
      mI = nc(38944);

    function eV(cB) {
      const Bc = new Uint8Array(cB.length >> 2);
      for (let nc = 0; nc < Bc.length; nc++) Bc[nc] = cB[4 * nc + 3];
      return Bc
    }
    async function tI(cB) {
      const Bc = await (0, fV.h)(cB);
      try {
        const {
          width: cB,
          height: nc,
          pixels: Vc
        } = (0, mI.t)(Bc);
        return {
          width: cB,
          height: nc,
          alpha: eV(Vc)
        }
      } finally {
        Bc.close()
      }
    }
    class SV {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tI;
        this.session = cB, this.sources = Bc, this.warn = nc, this.load = Vc, this.nextPoll = 0, this.CV = !1, this.warned = new Set
      }
      drain(cB) {
        if (cB < this.nextPoll) return;
        this.nextPoll = cB + 250;
        const Bc = this.session.sunShadowWantedTextures();
        if (Bc)
          for (let nc = 0; nc + 1 < Bc.length; nc += 2) this.hand(Bc[nc], Bc[nc + 1]);
        for (const nc of this.session.takeSunShadowWarnings()) this.warn(nc)
      }
      dispose() {
        this.CV = !0
      }
      async hand(cB, Bc) {
        var nc, Vc, Ic, rB, uc;
        let sc, Mc = null;
        try {
          if (Mc = await this.sources.blockImageUrl(cB), null === Mc) throw new Error(`block image ${cB} has no URL`);
          sc = await this.load(Mc)
        } catch (qB) {
          var Pc;
          const Bc = null !== (Pc = Mc) && void 0 !== Pc ? Pc : `block image ${cB}`;
          this.warned.has(Bc) || (this.warned.add(Bc), this.warn(`sun shadow plane texture ${Bc} didn't load: its blocks cast no shadow`, qB))
        }
        this.CV || this.session.setSunShadowTexture(cB, Bc, null !== (nc = null === (Vc = sc) || void 0 === Vc ? void 0 : Vc.width) && void 0 !== nc ? nc : 0, null !== (Ic = null === (rB = sc) || void 0 === rB ? void 0 : rB.height) && void 0 !== Ic ? Ic : 0, null === (uc = sc) || void 0 === uc ? void 0 : uc.alpha)
      }
    }
    var yI = nc(38923),
      zI = nc(39010),
      pV = nc(39016);
    const hV = new class {
      constructor(cB) {
        this.pack = cB, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, cB.onWanted((() => {
          this.release()
        }))
      }
      setGame(cB) {
        void 0 !== cB || null === this.hold ? (this.hold = null, this.endedWhileHeld = !1, this.game = cB, this.update()) : this.endedWhileHeld = !0
      }
      unwantedLeave(cB) {
        cB && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(cB) {
        null !== cB && cB === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const cB = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, cB && this.setGame(void 0)
      }
      setSettled(cB) {
        this.settle = cB, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, pV.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(zI.d);
    var aI = nc(38931),
      lV = nc(38935),
      YV = nc(35463),
      LV = nc(8122),
      gI = nc(39024);
    const UV = 8192,
      bI = new Set;
    const ZV = new Set([...LV.e, "sceneDownload"]);
    var QV = nc(38820),
      CV = nc(38701);
    const vI = new Uint8Array(0);
    let DV = null;

    function NV(cB) {
      return {
        aux: UB.Gb.AdStart | (cB ? UB.Gb.PreventMovement : 0),
        payload: vI
      }
    }
    var EV = nc(2208);
    const oV = "__bloxdSceneCapture";
    var WV = nc(1524),
      wV = nc(2240);
    let kI = null,
      XV = null,
      HV = !1;

    function FV() {
      kI ??= performance.now()
    }
    var JV = nc(39031);
    class jI {
      constructor(cB) {
        var Bc, nc;
        this.host = cB, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((cB => {
          this.landRequest = cB
        })), this.follow = cB => {
          let Bc = cB;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const cB = null === this.requested && null !== Bc;
            var nc;
            cB && (null === (nc = Bc) || void 0 === nc || nc(null));
            const Vc = await this.landing;
            var Ic;
            null === Vc && cB || (null === (Ic = Bc) || void 0 === Ic || Ic(Vc))
          })), () => {
            Bc = null
          }
        }, this.startRead = (nc = cB.store, nc.keys().then((cB => ({
          own: cB.includes(jn.b),
          oneShot: cB.includes(jn.c)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((cB => {
          let {
            own: Bc,
            oneShot: nc
          } = cB;
          this.oneShotStored = nc, (Bc || nc) && this.request()
        })), this.channel = (null !== (Bc = cB.openChannel) && void 0 !== Bc ? Bc : jn.o)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var cB;
        if (null !== this.requested) return this.requested;
        null === (cB = this.channel) || void 0 === cB || cB.close(), this.channel = null;
        const Bc = this.oneShotStored;
        return this.requested = function(cB, Bc, nc) {
          return new Promise((Bc => {
            Bc(cB())
          })).catch((cB => (null !== Bc && (0, jn.j)(Bc), nc(cB), null)))
        }((() => this.host.load(Bc).then((cB => (cB.setGamePackConfirm(this.confirm), this.landed = cB, cB)))), Bc ? this.host.store : null, this.host.PV), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var cB;
          return null !== (cB = this.requested) && void 0 !== cB ? cB : null
        }))
      }
      setGamePackConfirm(cB) {
        var Bc;
        this.confirm = cB, null === (Bc = this.landed) || void 0 === Bc || Bc.setGamePackConfirm(cB)
      }
    }
    var RV = nc(8175);
    const iI = 216 * RV.e,
      KV = 92 * RV.d,
      xI = 64 * RV.e,
      dV = 16 * RV.e;

    function AV() {
      var cB, Bc;
      return null !== (cB = null === (Bc = performance.memory) || void 0 === Bc ? void 0 : Bc.RY) && void 0 !== cB ? cB : null
    }
    class GV {
      constructor(cB, Bc) {
        this.budgetBytes = cB, this.reads = Bc, this.estimate = null, this.shedAt = null
      }
      read(cB) {
        var Bc;
        const nc = this.reads.storedChunks(),
          Vc = this.reads.gpuBytes(),
          Ic = Math.max(null !== (Bc = this.reads.jsHeapBytes()) && void 0 !== Bc ? Bc : 0, xI),
          rB = iI + cB + Ic + Vc + nc * KV;
        this.estimate = {
          wasmBytes: cB,
          jsHeapBytes: Ic,
          gpuBytes: Vc,
          storedChunks: nc,
          totalBytes: rB
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: cB,
          budgetBytes: Bc,
          shedAt: nc
        } = this;
        return !(null === cB || null === Bc || cB.totalBytes < Bc || null !== nc && cB.totalBytes < nc + dV) && (this.shedAt = cB.totalBytes, !0)
      }
      describe() {
        const {
          estimate: cB,
          budgetBytes: Bc
        } = this;
        return null === cB ? null : `estimate ${(0,RV.i)(cB.totalBytes)} MiB of budget ${null===Bc?"none":(0,RV.i)(Bc)}: wasm ${(0,RV.i)(cB.wasmBytes)} js ${(0,RV.i)(cB.jsHeapBytes)} gpu ${(0,RV.i)(cB.gpuBytes)} chunks ${cB.storedChunks}`
      }
      snapshot() {
        const {
          estimate: cB,
          budgetBytes: Bc
        } = this;
        return {
          ...null === cB ? {} : {
            footprintMiB: Number((0, RV.i)(cB.totalBytes)),
            gpuMiB: Number((0, RV.i)(cB.gpuBytes)),
            storedChunks: cB.storedChunks
          },
          footprintBudgetMiB: null === Bc ? -1 : Number((0, RV.i)(Bc))
        }
      }
    }
    var cr = nc(2410);
    const BI = new Uint8Array(0);
    class nI {
      constructor(cB) {
        this.options = cB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.XB = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== cB.module ? cB.write(0, UB.hd.WorldgenStarted, 0, BI) : this.giveUp()
      }
      take(cB, Bc) {
        if (!(this.gone || null === this.worker && null === this.XB))
          if (cB === UB.ld.WorldgenSeed) {
            const cB = 0 === Bc.byteLength ? null : this.options.decodeSettings(Bc);
            null === cB || function(cB, Bc) {
              if ((null === cB || void 0 === cB ? void 0 : cB.byteLength) !== Bc.byteLength) return !1;
              for (let nc = 0; nc < cB.byteLength; nc++)
                if (cB[nc] !== Bc[nc]) return !1;
              return !0
            }(this.seed, Bc) || (this.seed = Bc.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: cB
            }, []), null !== cB && this.load()
          } else if (cB === UB.ld.Generate) {
          var nc;
          const cB = new DataView(Bc.buffer, Bc.byteOffset, UB.cd),
            Vc = null !== (nc = this.pool.pop()) && void 0 !== nc ? nc : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: cB.getUint32(0, !0),
            x: cB.getInt32(4, !0),
            y: cB.getInt32(8, !0),
            z: cB.getInt32(12, !0),
            bytes: Vc
          }, [Vc])
        }
      }
      stop() {
        var cB;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (cB = this.worker) || void 0 === cB || cB.terminate(), this.worker = null
      }
      post(cB, Bc) {
        var nc;
        null !== this.XB ? this.XB.push({
          message: cB,
          transfer: Bc
        }) : null === (nc = this.worker) || void 0 === nc || nc.postMessage(cB, Bc)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((cB => {
          this.createWorker = cB, this.start()
        }), (cB => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(cB))
        })))
      }
      start() {
        const {
          module: cB
        } = this.options, Bc = this.createWorker;
        if (this.gone || null === cB || null === Bc) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let nc;
        this.startsWithoutResult++;
        try {
          nc = Bc()
        } catch (Ic) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Ic), this.lastLoss = `it did not start (${String(Ic)})`, void this.start()
        }
        this.worker = nc, nc.onmessage = cB => {
          let {
            data: Bc
          } = cB;
          this.worker === nc && this.onReply(nc, Bc)
        }, nc.onerror = cB => {
          cB.preventDefault(), this.worker === nc && this.lose(cB.message || "its script failed")
        };
        try {
          nc.postMessage({
            type: "start",
            module: cB,
            kI: Vc.e.kI
          })
        } catch (Ic) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Ic), this.lastLoss = `it could not be sent the module (${String(Ic)})`, nc.terminate(), this.worker = null, void this.start()
        }
        this.watch = new uV.h(uV.e, (cB => {
          this.lose((0, uV.l)(cB), (() => {
            this.options.onStartTimeout(cB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(cB, Bc) {
        switch (Bc.type) {
          case "started": {
            this.endWatch();
            const Bc = this.XB;
            if (null === Bc) {
              this.options.write(0, UB.hd.WorldgenStarted, 0, BI);
              break
            }
            this.XB = null;
            for (const {
                message: nc,
                transfer: Vc
              }
              of Bc) cB.postMessage(nc, Vc);
            break
          }
          case "lost":
            this.lose(Bc.reason);
            break;
          case "memory":
            var nc, Vc;
            null === (nc = (Vc = this.options).onMemoryStats) || void 0 === nc || nc.call(Vc, Bc.stats);
            break;
          case "result":
            Bc.status !== UB.mb.Trapped && (this.startsWithoutResult = 0), this.options.write(Bc.ticket, UB.hd.WorldgenResult, Bc.status, new Uint8Array(Bc.bytes, 0, Bc.len)), this.recycle(Bc.bytes), Bc.spare && this.recycle(Bc.spare)
        }
      }
      lose(cB, Bc) {
        var nc, Vc, Ic;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${cB}`), this.lastLoss = cB, this.endWatch(), null === (nc = this.worker) || void 0 === nc || nc.terminate(), this.worker = null, null === (Vc = (Ic = this.options).onMemoryGone) || void 0 === Vc || Vc.call(Ic), this.gone || (Bc ? Bc() : this.options.onWorkerLost(cB), this.dropHeld(), this.XB = null, this.options.write(0, UB.hd.WorldgenLost, UB.od.Lost, BI), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, UB.hd.WorldgenLost, UB.od.Gone, BI)
      }
      endWatch() {
        var cB;
        null === (cB = this.watch) || void 0 === cB || cB.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.XB) {
          for (const {
              message: cB
            }
            of this.XB) "generate" === cB.type && this.recycle(cB.bytes);
          this.XB.length = 0
        }
      }
      recycle(cB) {
        this.pool.length < 16 && cB.byteLength > 0 && cB.byteLength <= 16384 && this.pool.push(cB)
      }
    }

    function VI(cB) {
      return "string" !== typeof cB || 2 !== cB.length && ":" !== cB[2] ? null : cB[0] + cB[1]
    }

    function II(cB) {
      const Bc = VI(cB);
      return "op" === Bc || "ep" === Bc || "wi" === Bc || "pp" === Bc || "fp:call" === cB || "fp:t" === cB
    }

    function rr(cB) {
      if ("string" !== typeof cB) return !1;
      return "o" === cB[0] && "p" === cB[1] && (2 === cB.length || ":" === cB[2]) || "fp:call" === cB || "2" === cB || "t" === cB || "a" === cB
    }
    var uI = nc(2888),
      sI = nc(38672),
      MI = nc(39037),
      PI = nc(38892);
    const qr = (cB, Bc) => cB.includes(Bc),
      OI = cB => {
        try {
          return cB()
        } catch {
          return !1
        }
      },
      TI = -1,
      fI = cB => {
        try {
          return cB()
        } catch {
          return TI
        }
      };

    function mr(cB, Bc) {
      return {
        probe: (nc, Vc, Ic) => {
          try {
            return ((nc, Vc, Ic) => {
              switch (nc) {
                case UB.Qb.StackCheck:
                  return Bc.stackCheck() ? 1 : 0;
                case UB.Qb.ConfirmMesh:
                  return Bc.confirmMesh();
                case UB.Qb.IndexPassReplaced:
                  return Bc.indexPassReplaced() ? 1 : 0;
                case UB.Qb.ProductSubChanged:
                  return Bc.productSubChanged() ? 1 : 0;
                case UB.Qb.RenderStatus:
                  return Bc.eV();
                case UB.Qb.Held:
                  return Bc.XB();
                case UB.Qb.PlayerKilledSubs:
                  return Bc.playerKilledSubs();
                case UB.ab: {
                  const nc = Bc.getComplete();
                  return null === nc ? 0 : (0, Kn.o)(Kn.v, Kn.eb, [nc, new Kn.d((0, Kn.F)(cB()), Vc, Ic)]).written
                }
                default:
                  return 0
              }
            })(nc, Vc, Ic)
          } catch {
            return UB.Kb
          }
        }
      }
    }
    class eI {
      constructor(cB) {
        this.write = cB, this.flagsWritten = 0, this.written = (0, Kn.q)(null)
      }
      cn(cB) {
        let {
          flags: Bc,
          values: nc
        } = cB;
        for (let Vc = 0; Vc < nc.length; Vc++) this.value(nc[Vc][0], nc[Vc][1]);
        this.setFlags(Bc | UB.f.Ready)
      }
      value(cB, Bc) {
        this.written[cB] !== Bc && this.write(cB, Bc, 0) && (this.written[cB] = Bc)
      }
      setFlags(cB) {
        const Bc = cB & ~this.flagsWritten;
        0 !== Bc && this.write(UB.h.Flags, Bc, Bc) && (this.flagsWritten |= Bc)
      }
      originStackHit() {
        return this.write(UB.h.Flags, UB.f.OriginStackHit, UB.f.OriginStackHit)
      }
    }
    const tr = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      SI = 1e3;

    function yr(cB, Bc) {
      const nc = new eI(Bc);
      let Vc = !1;
      nc.cn(cB.cn());
      const Ic = (0, Kn.Y)((() => {
          nc.cn(cB.cn())
        }), SI),
        rB = () => {
          cB.checks.stackCheck() && (Vc = !0)
        };
      (0, MI.e)(rB);
      const uc = () => {
        const Bc = cB.checkPadCall();
        0 !== Bc && nc.setFlags(Bc)
      };
      return (0, sI.h)(uc), {
        onInput: Bc => {
          (function(cB) {
            switch (cB) {
              case UB.jb.KeyDown:
              case UB.jb.KeyUp:
              case UB.jb.MouseDown:
              case UB.jb.MouseUp:
              case UB.jb.Wheel:
              case UB.jb.TouchStart:
              case UB.jb.TouchEnd:
              case UB.jb.TouchButton:
              case UB.jb.PadAction:
                return !0;
              default:
                return !1
            }
          })(Bc) && cB.checks.stackCheck() && (Vc = !0)
        },
        onSend: rB,
        beforeFrame: () => {
          Vc && nc.originStackHit() && (Vc = !1)
        },
        onEvent: Bc => {
          const Vc = cB.checkEvent(Bc);
          nc.value(UB.h.ProbeUsedProp, cB.usedProp()), 0 !== Vc && nc.setFlags(Vc)
        },
        stop: () => {
          (0, Kn._)(Ic), (0, MI.c)(rB), (0, sI.g)(uc)
        }
      }
    }
    let zr;
    const pI = [1, "length", 2, void 0, null, 3, 0, "s", "c3RhY2", "cw==", 14, 1e5, 216, 60, "s=", 4, "a", 24, 1e3, "expire", "=", ";", 154, ";path=", "/", 33554432, 67108864, 234, 13, 5, "b", 193, "e", 1023, 65536, 120, 136, 10, 55296, 56320, 6, 12, 63, 128, 166, 16, 18, 78, "d", 176, 192, "Invalid byte index", !1, 248, 255, 224, 37, 31, "Invalid continuation byte", 240, "c", 15, 7, 124, !0, 247, 96, 155, 187, 8, "f", 11, 9, 80, 146, 64, ")", "q", "No redacted path provided", "--version", "-v", " (stan", "dalone", " (loca", "l)", "string", "g", 206, 223, 47, 104, 56319, 64512, 114, 65535, 168, 49, 57343, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 219, 62, 231, 2048, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", 103, 220, 237, 132, 92, 70, 26, 54, 20, 85, "functi", "on", 186, "o", "K", 218, "protot", "ype", "decode", "I=", "eTR5bm", "t", "v", "r", "C", "Nc", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", 109, "p", 239, 75, "None", 65, "En", "h", "tOverw", "ritten", "plete"];

    function hI() {}

    function ar() {
      ar = function() {}
    }
    zr = function(cB) {
      let Bc = arguments[pI[1]] > pI[0] && arguments[pI[0]] !== pI[3] ? arguments[pI[0]] : () => pI[4],
        nc = arguments[pI[1]] > pI[2] && arguments[pI[2]] !== pI[3] ? arguments[pI[2]] : pI[4],
        Vc = arguments[pI[1]] > pI[5] && arguments[pI[5]] !== pI[3] ? arguments[pI[5]] : "";
      const Ic = window,
        rB = (pI[6], Kn[pI[7]])("RXJyb3" + pI[137]),
        uc = (pI[6], Kn[pI[7]])(pI[8] + pI[14]),
        sc = (pI[6], Kn[pI[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Pc = (pI[6], Kn[pI[7]])(pI[8] + "tUcmFjZUxpbWl0"),
        qB = (pI[6], Kn[pI[7]])("bmF0aXZl"),
        Oc = [(pI[6], Kn[pI[7]])("bWFpbi5qcw=="), (pI[6], Kn[pI[7]])("aW5kZXguanM="), (pI[6], Kn[pI[7]])("dXNlcnNjcmlwdA=="), (pI[6], Kn[pI[7]])("Y29udGVudC5q" + pI[9]), (pI[6], Kn[pI[7]])("b3B0aW9ucy5q" + pI[9]), (pI[6], Kn[pI[7]])("cG9wdXAuanM="), (pI[6], Kn[pI[7]])("LnVzZXIuanM="), (pI[6], Kn[pI[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Tc = (...cB) => {
          cB[pI[1]] = pI[0], "O43vB8" + pI[132] in hI && function(...cB) {
            var Bc;
            ar(cB[pI[1]] = pI[6], Bc = function(...cB) {
              ar(cB[pI[1]] = pI[0], this.Qc = cB[pI[6]], this.length = pI[6], this.map = {}, this.head = pI[4], this.tail = pI[4])
            }, Bc.prototype.get = function(...cB) {
              var Bc;
              return ar(cB[pI[1]] = pI[0], Bc = this.map[cB[pI[6]]]), Bc ? (this.remove(Bc), this.insert(Bc.key, Bc.val), Bc.val) : -pI[0]
            }, Bc.prototype.put = function(...cB) {
              ar(cB[pI[1]] = pI[2], this.map[cB[pI[6]]] ? (this.remove(this.map[cB[pI[6]]]), this.insert(cB[pI[6]], cB[pI[0]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(cB[pI[6]], cB[pI[0]])) : (this.insert(cB[pI[6]], cB[pI[0]]), this.length++))
            }, Bc.prototype.remove = function(cB) {
              var Bc, nc = cB.prev;
              (Bc = cB.next) && (Bc.prev = nc), nc && (nc.next = Bc), this.head === cB && (this.head = Bc), this.tail === cB && (this.tail = nc), delete this.map[cB.key]
            }, Bc.prototype.insert = function(...cB) {
              ar(cB[pI[1]] = pI[2], cB[pI[10]] = new List(cB[pI[6]], cB[pI[0]]), this.tail ? (this.tail.next = cB[pI[10]], cB[pI[10]].prev = this.tail, this.tail = cB[pI[10]]) : (this.tail = cB[pI[10]], this.head = cB[pI[10]]), this.map[cB[pI[6]]] = cB[pI[10]])
            }, console.log(Bc))
          }();
          const Bc = Ic[rB],
            nc = Bc;
          nc[Pc] < pI[11] && (nc[Pc] = pI[11]);
          const Vc = "string" === typeof(Tc = (new Bc)[uc]) ? Tc : `${Tc}`,
            Mc = {},
            qB = nc[sc];
          var Tc;
          typeof qB === pI[128] + pI[129] && (pI[6], Kn[pI[131]])(qB, Bc, [Mc]);
          const fc = Mc[uc],
            mB = cB[pI[6]] ? Oc[pI[1]] : Oc[pI[1]] - pI[0];
          for (let ec = pI[6]; ec < mB; ec++)
            if (qr(Vc, Oc[ec]) || typeof fc === pI[85] && qr(fc, Oc[ec])) {
              function tB(...cB) {
                cB[pI[1]] = pI[6]
              }
              return "nqladI" in hI && tB(), pI[64]
            } return pI[52]
        },
        fc = (...cB) => {
          cB[pI[1]] = pI[0], "mM_Kzr" in hI && function(...cB) {
            cB[pI[1]] = pI[6]
          }();
          try {
            function Bc(...cB) {
              function Bc(...cB) {
                return cB[pI[1]] = pI[0], cB[pI[6]][pI[0]] * pI[26] + (cB[pI[6]][pI[6]] < pI[6] ? pI[25] | cB[pI[6]][pI[6]] : cB[pI[6]][pI[6]])
              }

              function nc(cB) {
                switch (((cB & pI[25]) !== pI[6]) * pI[0] + (cB < pI[6]) * pI[2]) {
                  case pI[6]:
                    return [cB % pI[25], Math.trunc(cB / pI[26])];
                  case pI[0]:
                    return [cB % pI[25] - pI[25], Math.trunc(cB / pI[26]) + pI[0]];
                  case pI[2]:
                    return [((cB + pI[25]) % pI[25] + pI[25]) % pI[25], Math.round(cB / pI[26])];
                  case pI[5]:
                    return [cB % pI[25], Math.trunc(cB / pI[26])]
                }
              }
              cB[pI[1]] = pI[6], ar(cB[pI[16]] = Bc([pI[2], pI[15]]), cB[-pI[27]] = Bc([pI[0], pI[2]]), cB[pI[2]] = cB[pI[16]] + cB[-pI[27]], cB[pI[28]] = cB[pI[2]] - cB[-pI[27]], cB[pI[15]] = cB[pI[28]] * pI[2], cB[pI[29]] = cB[pI[15]] / pI[2], console.log(nc(cB[pI[2]])), console.log(nc(cB[pI[28]])), console.log(nc(cB[pI[15]])), console.log(nc(cB[pI[29]])))
            }
            return "XBpQHS" in hI && Bc(), cB[pI[6]]()
          } catch {
            function nc() {
              ! function(...cB) {
                function Bc(...cB) {
                  for (ar(cB[pI[1]] = pI[0], cB[pI[16]] = [], cB[pI[30]] = pI[6], cB[pI[5]] = cB[pI[6]].length, cB[pI[31]] = pI[3], cB[pI[32]] = pI[3]); cB[pI[30]] < cB[pI[5]];) ar(cB[pI[31]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), cB[pI[31]] >= pI[38] && cB[pI[31]] <= pI[91] && cB[pI[30]] < cB[pI[5]] ? (cB[pI[32]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), (cB[pI[32]] & pI[92]) == pI[39] ? cB[pI[16]].push(((cB[pI[31]] & pI[33]) << pI[37]) + (cB[pI[32]] & pI[33]) + pI[34]) : (cB[pI[16]].push(cB[pI[31]]), cB[pI[30]]--)) : cB[pI[16]].push(cB[pI[31]]));
                  return cB[pI[16]]
                }

                function nc(...cB) {
                  if (cB[pI[1]] = pI[0], cB[pI[6]] >= pI[38] && cB[pI[6]] <= pI[97]) throw Error(pI[98] + pI[99] + pI[100] + cB[pI[6]].toString(pI[45]).toUpperCase() + (pI[101] + pI[102] + pI[103] + pI[104]))
                }

                function Vc(...Bc) {
                  return Bc[pI[1]] = pI[2], cB[-pI[36]](Bc[pI[6]] >> Bc[pI[0]] & pI[42] | pI[43])
                }

                function Ic(...Bc) {
                  return Bc[pI[1]] = pI[0], (Bc[pI[6]] & pI[105]) == pI[6] ? cB[-pI[36]](Bc[pI[6]]) : (Bc[pI[16]] = "", (Bc[pI[6]] & pI[106]) == pI[6] ? Bc[pI[16]] = cB[-pI[36]](Bc[pI[6]] >> pI[40] & pI[57] | pI[50]) : (Bc[pI[6]] & pI[107]) == pI[6] ? ar(nc(Bc[pI[6]]), Bc[pI[16]] = cB[-pI[36]](Bc[pI[6]] >> pI[41] & pI[61] | pI[55]), Bc[pI[16]] += Vc(Bc[pI[6]], pI[40])) : (Bc[pI[6]] & pI[108]) == pI[6] && ar(Bc[pI[16]] = cB[-pI[36]](Bc[pI[6]] >> pI[46] & pI[62] | pI[59]), Bc[pI[16]] += Vc(Bc[pI[6]], pI[41]), Bc[pI[16]] += Vc(Bc[pI[6]], pI[40])), Bc[pI[16]] += cB[-pI[36]](Bc[pI[6]] & pI[42] | pI[43]), Bc[pI[16]])
                }

                function rB(...Bc) {
                  if (Bc[pI[1]] = pI[6], cB[pI[2]] >= cB[pI[5]]) throw Error(pI[51]);
                  if (ar(Bc[-pI[49]] = cB[pI[15]][cB[pI[2]]] & pI[54], cB[pI[2]]++), (Bc[-pI[49]] & pI[50]) == pI[43]) return Bc[-pI[49]] & pI[42];
                  throw Error(pI[58])
                }

                function uc(...Bc) {
                  if (ar(Bc[pI[1]] = pI[6], Bc[pI[53]] = pI[3], Bc[pI[30]] = pI[3], Bc[pI[60]] = pI[3], Bc[pI[48]] = pI[3], Bc[-pI[56]] = pI[3]), cB[pI[2]] > cB[pI[5]]) throw Error(pI[51]);
                  if (cB[pI[2]] == cB[pI[5]]) return pI[52];
                  if (ar(Bc[pI[53]] = cB[pI[15]][cB[pI[2]]] & pI[54], cB[pI[2]]++), (Bc[pI[53]] & pI[43]) == pI[6]) return Bc[pI[53]];
                  if ((Bc[pI[53]] & pI[55]) == pI[50]) {
                    if (ar(Bc[pI[30]] = rB(), Bc[-pI[56]] = (Bc[pI[53]] & pI[57]) << pI[40] | Bc[pI[30]]), Bc[-pI[56]] >= pI[43]) return Bc[-pI[56]];
                    throw Error(pI[58])
                  }
                  if ((Bc[pI[53]] & pI[59]) == pI[55]) {
                    if (ar(Bc[pI[30]] = rB(), Bc[pI[60]] = rB(), Bc[-pI[56]] = (Bc[pI[53]] & pI[61]) << pI[41] | Bc[pI[30]] << pI[40] | Bc[pI[60]]), Bc[-pI[56]] >= pI[112]) return nc(Bc[-pI[56]]), Bc[-pI[56]];
                    throw Error(pI[58])
                  }
                  if ((Bc[pI[53]] & pI[53]) == pI[59] && (ar(Bc[pI[30]] = rB(), Bc[pI[60]] = rB(), Bc[pI[48]] = rB(), Bc[-pI[56]] = (Bc[pI[53]] & pI[62]) << pI[46] | Bc[pI[30]] << pI[41] | Bc[pI[60]] << pI[40] | Bc[pI[48]]), Bc[-pI[56]] >= pI[34] && Bc[-pI[56]] <= pI[113])) return Bc[-pI[56]];
                  throw Error(pI[114])
                }
                ar(cB[pI[1]] = pI[0], cB[-pI[36]] = String.fromCharCode), ar(cB[pI[15]] = pI[3], cB[pI[5]] = pI[3], cB[pI[2]] = pI[3]), ar(cB[pI[6]].version = pI[115], cB[pI[6]].encode = function(...cB) {
                  for (ar(cB[pI[1]] = pI[0], cB[pI[44]] = Bc(cB[pI[6]]), cB[pI[47]] = cB[pI[44]].length, cB[pI[45]] = -pI[0], cB[pI[48]] = pI[3], cB[pI[46]] = ""); ++cB[pI[45]] < cB[pI[47]];) ar(cB[pI[48]] = cB[pI[44]][cB[pI[45]]], cB[pI[46]] += Ic(cB[pI[48]]));
                  return cB[pI[46]]
                }, cB[pI[6]].decode = function(...nc) {
                  for (ar(nc[pI[1]] = pI[0], cB[pI[15]] = Bc(nc[pI[6]]), cB[pI[5]] = cB[pI[15]].length, cB[pI[2]] = pI[6], nc[pI[63]] = [], nc[pI[30]] = pI[3]);
                    (nc[pI[30]] = uc()) !== pI[52];) nc[pI[63]].push(nc[pI[30]]);
                  return function(...Bc) {
                    for (ar(Bc[pI[1]] = pI[0], Bc[pI[0]] = Bc[pI[6]].length, Bc[pI[2]] = -pI[0], Bc[pI[5]] = pI[3], Bc[pI[35]] = ""); ++Bc[pI[2]] < Bc[pI[0]];) Bc[pI[5]] = Bc[pI[6]][Bc[pI[2]]], Bc[pI[5]] > pI[94] && ar(Bc[pI[5]] -= pI[34], Bc[pI[35]] += cB[-pI[36]](Bc[pI[5]] >>> pI[37] & pI[33] | pI[38]), Bc[pI[5]] = pI[39] | Bc[pI[5]] & pI[33]), Bc[pI[35]] += cB[-pI[36]](Bc[pI[5]]);
                    return Bc[pI[35]]
                  }(nc[pI[63]])
                })
              }(typeof exports === pI[116] + pI[117] ? this.utf8 = {} : exports)
            }
            return "yJaqKWY" in hI && nc(), pI[64]
          }
        };
      let mB = pI[52];
      const ec = () => {
          !mB && (pI[6], Kn[pI[139]])() && (mB = pI[64])
        },
        tB = (...cB) => {
          cB[pI[1]] = pI[0], "xLM_v2" in hI && function(...cB) {
            ar(cB[pI[1]] = pI[6], cB[pI[16]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", cB[pI[30]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", cB[pI[60]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + pI[76], cB[pI[16]].match(cB[pI[30]] + cB[pI[60]]))
          }();
          try {
            return cB[pI[6]]()
          } catch {
            function Bc(...cB) {
              ar(cB[pI[1]] = pI[6], cB[pI[16]] = function(...Bc) {
                return ar(Bc[pI[1]] = pI[0], Bc[pI[0]] = []), (Bc[pI[6]] === pI[0] || Bc[pI[6]] >= pI[15]) && cB[pI[0]](Bc[pI[0]], [], Bc[pI[6]], pI[6]), Bc[pI[0]]
              }, cB[pI[0]] = function(...Bc) {
                for (Bc[pI[1]] = pI[15], Bc[pI[65]] = Bc[pI[5]]; Bc[pI[65]] < Bc[pI[2]]; Bc[pI[65]]++) {
                  if (Bc[pI[0]].length !== Bc[pI[65]]) return;
                  for (Bc[pI[30]] = pI[6]; Bc[pI[30]] < Bc[pI[2]]; Bc[pI[30]]++) cB[pI[60]](Bc[pI[0]], [Bc[pI[65]], Bc[pI[30]]]) && (ar(Bc[pI[0]].push([Bc[pI[65]], Bc[pI[30]]]), cB[pI[0]](Bc[pI[6]], Bc[pI[0]], Bc[pI[2]], Bc[pI[65]] + pI[0])), Bc[pI[0]].length === Bc[pI[2]] && Bc[pI[6]].push(cB[pI[48]](Bc[pI[0]])), Bc[pI[0]].pop())
                }
              }, cB[pI[48]] = function(...cB) {
                for (ar(cB[pI[1]] = pI[0], cB[pI[0]] = [], cB[pI[66]] = cB[pI[6]].length), cB[pI[60]] = pI[6]; cB[pI[60]] < cB[pI[66]]; cB[pI[60]]++)
                  for (cB[pI[0]][cB[pI[60]]] = "", cB[pI[15]] = pI[6]; cB[pI[15]] < cB[pI[66]]; cB[pI[15]]++) cB[pI[0]][cB[pI[60]]] += cB[pI[6]][cB[pI[60]]][pI[0]] === cB[pI[15]] ? "Q" : ".";
                return cB[pI[0]]
              }, cB[pI[60]] = function(...cB) {
                for (ar(cB[pI[1]] = pI[2], cB[pI[67]] = cB[pI[6]].length), cB[pI[5]] = pI[6]; cB[pI[5]] < cB[pI[67]]; cB[pI[5]]++) {
                  if (cB[pI[6]][cB[pI[5]]][pI[6]] === cB[pI[0]][pI[6]] || cB[pI[6]][cB[pI[5]]][pI[0]] === cB[pI[0]][pI[0]]) return pI[52];
                  if (Math.abs((cB[pI[6]][cB[pI[5]]][pI[6]] - cB[pI[0]][pI[6]]) / (cB[pI[6]][cB[pI[5]]][pI[0]] - cB[pI[0]][pI[0]])) === pI[0]) return pI[52]
                }
                return pI[64]
              }, console.log(cB[pI[16]]))
            }
            return "LWiugh" in hI && Bc(), pI[3]
          }
        },
        Sc = (...cB) => {
          cB[pI[1]] = pI[0], "UQEobR" in hI && function(...cB) {
            ar(cB[pI[1]] = pI[6], cB[pI[73]] = function(...cB) {
              if (ar(cB[pI[1]] = pI[0], cB[-pI[68]] = cB[pI[6]].length), cB[-pI[68]] < pI[2]) return pI[6];
              if (ar(cB[pI[2]] = Math.max(...cB[pI[6]]), cB[pI[60]] = Math.min(...cB[pI[6]])), cB[pI[2]] === cB[pI[60]]) return pI[6];
              for (ar(cB[pI[48]] = Array(cB[-pI[68]] - pI[0]).fill(Number.MAX_SAFE_INTEGER), cB[pI[29]] = Array(cB[-pI[68]] - pI[0]).fill(Number.MIN_SAFE_INTEGER), cB[pI[70]] = Math.ceil((cB[pI[2]] - cB[pI[60]]) / (cB[-pI[68]] - pI[0])), cB[pI[62]] = pI[6]), cB[pI[69]] = pI[6]; cB[pI[69]] < cB[-pI[68]]; cB[pI[69]]++) cB[pI[6]][cB[pI[69]]] !== cB[pI[60]] && cB[pI[6]][cB[pI[69]]] !== cB[pI[2]] && ar(cB[pI[62]] = Math.floor((cB[pI[6]][cB[pI[69]]] - cB[pI[60]]) / cB[pI[70]]), cB[pI[48]][cB[pI[62]]] = Math.min(cB[pI[48]][cB[pI[62]]], cB[pI[6]][cB[pI[69]]]), cB[pI[29]][cB[pI[62]]] = Math.max(cB[pI[29]][cB[pI[62]]], cB[pI[6]][cB[pI[69]]]));
              for (ar(cB[pI[72]] = Number.MIN_SAFE_INTEGER, cB[pI[37]] = cB[pI[60]]), cB[pI[71]] = pI[6]; cB[pI[71]] < cB[-pI[68]] - pI[0]; cB[pI[71]]++) cB[pI[48]][cB[pI[71]]] === Number.MAX_SAFE_INTEGER && cB[pI[29]][cB[pI[71]]] === Number.MIN_SAFE_INTEGER || ar(cB[pI[72]] = Math.max(cB[pI[72]], cB[pI[48]][cB[pI[71]]] - cB[pI[37]]), cB[pI[37]] = cB[pI[29]][cB[pI[71]]]);
              return cB[pI[72]] = Math.max(cB[pI[72]], cB[pI[2]] - cB[pI[37]]), cB[pI[72]]
            }, console.log(cB[pI[73]]))
          }();
          try {
            function Bc(...cB) {
              function Bc(cB) {
                return cB[pI[0]] * pI[26] + (cB[pI[6]] < pI[6] ? pI[25] | cB[pI[6]] : cB[pI[6]])
              }

              function nc(...cB) {
                switch (cB[pI[1]] = pI[0], ((cB[pI[6]] & pI[25]) !== pI[6]) * pI[0] + (cB[pI[6]] < pI[6]) * pI[2]) {
                  case pI[6]:
                    return [cB[pI[6]] % pI[25], Math.trunc(cB[pI[6]] / pI[26])];
                  case pI[0]:
                    return [cB[pI[6]] % pI[25] - pI[25], Math.trunc(cB[pI[6]] / pI[26]) + pI[0]];
                  case pI[2]:
                    return [((cB[pI[6]] + pI[25]) % pI[25] + pI[25]) % pI[25], Math.round(cB[pI[6]] / pI[26])];
                  case pI[5]:
                    return [cB[pI[6]] % pI[25], Math.trunc(cB[pI[6]] / pI[26])]
                }
              }
              cB[pI[1]] = pI[6], ar(cB[pI[16]] = Bc([pI[2], pI[15]]), cB[pI[74]] = Bc([pI[0], pI[2]]), cB[-pI[75]] = cB[pI[16]] + cB[pI[74]], cB[pI[5]] = cB[-pI[75]] - cB[pI[74]], cB[pI[15]] = cB[pI[5]] * pI[2], cB[pI[29]] = cB[pI[15]] / pI[2], console.log(nc(cB[-pI[75]])), console.log(nc(cB[pI[5]])), console.log(nc(cB[pI[15]])), console.log(nc(cB[pI[29]])))
            }
            return "xb2mdg" in hI && Bc(), cB[pI[6]](), pI[64]
          } catch {
            return "RaKPms" in hI && (module.exports = async (cB = () => {
              throw new Error(pI[78])
            }) => {
              const Bc = new Set(process.argv.slice(pI[2]));
              if (!Bc.has(pI[79])) {
                if (Bc.size !== pI[0]) return pI[52];
                if (!Bc.has(pI[80])) return pI[52]
              }
              return await (async () => void 0 === await cB() ? pI[83] + pI[84] : "")(), pI[64]
            }), pI[52]
          }
        },
        yB = (pI[6], Kn[pI[7]])("a29qbzYzb25i"),
        zB = (pI[6], Kn[pI[77]])(pI[4]);
      let pc = pI[4],
        hc = pI[52],
        aB = pI[52];
      const lc = (pI[6], Kn[pI[77]])(pI[4]);
      let Yc = pI[6];
      const Lc = (pI[6], Kn[pI[77]])(pI[4]);
      let gB = pI[6];
      const Uc = (pI[6], Kn[pI[77]])(pI[4]);
      let bB = pI[52],
        Zc = pI[52];
      const Qc = (...Bc) => {
          if (Bc[pI[1]] = pI[2], Bc[pI[6]] === cB) {
            if (pc === pI[4]) {
              function rB(...cB) {
                cB[pI[1]] = pI[6]
              }
              "yFvbZR" in hI && rB(), pc = typeof Bc[pI[0]] === pI[152] ? Bc[pI[0]] : -pI[0]
            } else {
              function uc(...cB) {
                var Bc;
                ar(cB[pI[1]] = pI[6], Bc = function(...cB) {
                  ar(cB[pI[1]] = pI[0], this.Qc = cB[pI[6]], this.length = pI[6], this.map = {}, this.head = pI[4], this.tail = pI[4])
                }, Bc.prototype.get = function(...cB) {
                  var Bc;
                  return ar(cB[pI[1]] = pI[0], Bc = this.map[cB[pI[6]]]), Bc ? (this.remove(Bc), this.insert(Bc.key, Bc.val), Bc.val) : -pI[0]
                }, Bc.prototype.put = function(...cB) {
                  ar(cB[pI[1]] = pI[2], this.map[cB[pI[6]]] ? (this.remove(this.map[cB[pI[6]]]), this.insert(cB[pI[6]], cB[pI[0]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(cB[pI[6]], cB[pI[0]])) : (this.insert(cB[pI[6]], cB[pI[0]]), this.length++))
                }, Bc.prototype.remove = function(...cB) {
                  ar(cB[pI[1]] = pI[0], cB[pI[16]] = cB[pI[6]].prev, cB[pI[2]] = cB[pI[6]].next), cB[pI[2]] && (cB[pI[2]].prev = cB[pI[16]]), cB[pI[16]] && (cB[pI[16]].next = cB[pI[2]]), this.head === cB[pI[6]] && (this.head = cB[pI[2]]), this.tail === cB[pI[6]] && (this.tail = cB[pI[16]]), delete this.map[cB[pI[6]].key]
                }, Bc.prototype.insert = function(...cB) {
                  ar(cB[pI[1]] = pI[2], cB[pI[2]] = new List(cB[pI[6]], cB[pI[0]]), this.tail ? (this.tail.next = cB[pI[2]], cB[pI[2]].prev = this.tail, this.tail = cB[pI[2]]) : (this.tail = cB[pI[2]], this.head = cB[pI[2]]), this.map[cB[pI[6]]] = cB[pI[2]])
                }, console.log(Bc))
              }
              "sryVNK" + pI[140] in hI && uc(), hc = pI[64]
            }
            return
          }
          const nc = zB[Bc[pI[6]]];
          if (!Bc[pI[0]]) return void(nc && (aB = pI[64]));
          if (Bc[pI[6]] !== yB) {
            return "m398NMM" in hI && (module.exports = async (cB = () => {
              throw new Error(pI[78])
            }) => {
              const Bc = new Set(process.argv.slice(pI[2]));
              if (!Bc.has(pI[79])) {
                if (Bc.size !== pI[0]) return pI[52];
                if (!Bc.has(pI[80])) return pI[52]
              }
              return await (async () => void 0 === await cB() ? pI[83] + pI[84] : "")(), pI[64]
            }), void(zB[Bc[pI[6]]] = Bc[pI[0]])
          }
          zB[Bc[pI[6]]] = pI[64];
          const Vc = typeof Bc[pI[0]] === pI[85] ? Bc[pI[0]] : "" + Bc[pI[0]];
          var Ic;
          if (!Uc[Vc])
            if ("fp" !== VI(Ic = Vc) || II(Ic)) {
              if (II(Vc)) {
                function sc(...cB) {
                  ar(cB[pI[1]] = pI[6], cB[pI[60]] = function(...cB) {
                    for (ar(cB[pI[1]] = pI[0], cB[pI[0]] = pI[6], cB[pI[2]] = {}, cB[pI[5]] = pI[6], cB[pI[15]] = pI[6], cB[-pI[89]] = pI[6], cB[pI[87]] = cB[pI[6]].length), cB[pI[86]] = pI[6]; cB[pI[86]] < cB[pI[87]]; cB[pI[86]]++) {
                      for (ar(cB[pI[2]] = {}, cB[pI[5]] = pI[6], cB[pI[15]] = pI[0]), cB[-pI[88]] = cB[pI[86]] + pI[0]; cB[-pI[88]] < cB[pI[87]]; cB[-pI[88]]++) cB[pI[6]][cB[pI[86]]].x !== cB[pI[6]][cB[-pI[88]]].x || cB[pI[6]][cB[pI[86]]].y !== cB[pI[6]][cB[-pI[88]]].y ? (cB[pI[6]][cB[pI[86]]].y === cB[pI[6]][cB[-pI[88]]].y ? cB[-pI[89]] = Number.MAX_SAFE_INTEGER : cB[-pI[89]] = (cB[pI[6]][cB[pI[86]]].x - cB[pI[6]][cB[-pI[88]]].x) / (cB[pI[6]][cB[pI[86]]].y - cB[pI[6]][cB[-pI[88]]].y), cB[pI[2]][cB[-pI[89]]] || (cB[pI[2]][cB[-pI[89]]] = pI[6]), ar(cB[pI[2]][cB[-pI[89]]]++, cB[pI[5]] = Math.max(cB[pI[5]], cB[pI[2]][cB[-pI[89]]]))) : cB[pI[15]]++;
                      ar(cB[pI[5]] += cB[pI[15]], cB[pI[0]] = Math.max(cB[pI[0]], cB[pI[5]]))
                    }
                    return cB[pI[0]]
                  }, console.log(cB[pI[60]]))
                }
                if ("MzcLrZ" in hI && sc(), Yc < 8) {
                  function Mc() {
                    ! function(...cB) {
                      function Bc(...cB) {
                        for (ar(cB[pI[1]] = pI[0], cB[pI[0]] = [], cB[pI[30]] = pI[6], cB[pI[75]] = cB[pI[6]].length, cB[pI[90]] = pI[3], cB[pI[29]] = pI[3]); cB[pI[30]] < cB[pI[75]];) ar(cB[pI[90]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), cB[pI[90]] >= pI[38] && cB[pI[90]] <= pI[91] && cB[pI[30]] < cB[pI[75]] ? (cB[pI[29]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), (cB[pI[29]] & pI[92]) == pI[39] ? cB[pI[0]].push(((cB[pI[90]] & pI[33]) << pI[37]) + (cB[pI[29]] & pI[33]) + pI[34]) : (cB[pI[0]].push(cB[pI[90]]), cB[pI[30]]--)) : cB[pI[0]].push(cB[pI[90]]));
                        return cB[pI[0]]
                      }

                      function nc(...cB) {
                        if (cB[pI[1]] = pI[0], cB[pI[6]] >= pI[38] && cB[pI[6]] <= pI[97]) throw Error(pI[98] + pI[99] + pI[100] + cB[pI[6]].toString(pI[45]).toUpperCase() + (pI[101] + pI[102] + pI[103] + pI[104]))
                      }

                      function Vc(...Bc) {
                        return Bc[pI[1]] = pI[2], cB[-pI[96]](Bc[pI[6]] >> Bc[pI[0]] & pI[42] | pI[43])
                      }

                      function Ic(Bc) {
                        var Ic;
                        return (Bc & pI[105]) == pI[6] ? cB[-pI[96]](Bc) : (Ic = "", (Bc & pI[106]) == pI[6] ? Ic = cB[-pI[96]](Bc >> pI[40] & pI[57] | pI[50]) : (Bc & pI[107]) == pI[6] ? ar(nc(Bc), Ic = cB[-pI[96]](Bc >> pI[41] & pI[61] | pI[55]), Ic += Vc(Bc, pI[40])) : (Bc & pI[108]) == pI[6] && ar(Ic = cB[-pI[96]](Bc >> pI[46] & pI[62] | pI[59]), Ic += Vc(Bc, pI[41]), Ic += Vc(Bc, pI[40])), Ic += cB[-pI[96]](Bc & pI[42] | pI[43]))
                      }

                      function rB(...Bc) {
                        if (Bc[pI[1]] = pI[6], cB[-pI[109]] >= cB[pI[60]]) throw Error(pI[51]);
                        if (ar(Bc[-pI[110]] = cB[pI[15]][cB[-pI[109]]] & pI[54], cB[-pI[109]]++), (Bc[-pI[110]] & pI[50]) == pI[43]) return Bc[-pI[110]] & pI[42];
                        throw Error(pI[58])
                      }

                      function uc(...Bc) {
                        if (ar(Bc[pI[1]] = pI[6], Bc[pI[111]] = pI[3], Bc[pI[0]] = pI[3], Bc[pI[48]] = pI[3], Bc[pI[5]] = pI[3], Bc[pI[70]] = pI[3]), cB[-pI[109]] > cB[pI[60]]) throw Error(pI[51]);
                        if (cB[-pI[109]] == cB[pI[60]]) return pI[52];
                        if (ar(Bc[pI[111]] = cB[pI[15]][cB[-pI[109]]] & pI[54], cB[-pI[109]]++), (Bc[pI[111]] & pI[43]) == pI[6]) return Bc[pI[111]];
                        if ((Bc[pI[111]] & pI[55]) == pI[50]) {
                          if (ar(Bc[pI[0]] = rB(), Bc[pI[70]] = (Bc[pI[111]] & pI[57]) << pI[40] | Bc[pI[0]]), Bc[pI[70]] >= pI[43]) return Bc[pI[70]];
                          throw Error(pI[58])
                        }
                        if ((Bc[pI[111]] & pI[59]) == pI[55]) {
                          if (ar(Bc[pI[0]] = rB(), Bc[pI[48]] = rB(), Bc[pI[70]] = (Bc[pI[111]] & pI[61]) << pI[41] | Bc[pI[0]] << pI[40] | Bc[pI[48]]), Bc[pI[70]] >= pI[112]) return nc(Bc[pI[70]]), Bc[pI[70]];
                          throw Error(pI[58])
                        }
                        if ((Bc[pI[111]] & pI[53]) == pI[59] && (ar(Bc[pI[0]] = rB(), Bc[pI[48]] = rB(), Bc[pI[5]] = rB(), Bc[pI[70]] = (Bc[pI[111]] & pI[62]) << pI[46] | Bc[pI[0]] << pI[41] | Bc[pI[48]] << pI[40] | Bc[pI[5]]), Bc[pI[70]] >= pI[34] && Bc[pI[70]] <= pI[113])) return Bc[pI[70]];
                        throw Error(pI[114])
                      }
                      ar(cB[pI[1]] = pI[0], cB[-pI[96]] = String.fromCharCode), ar(cB[pI[15]] = pI[3], cB[pI[60]] = pI[3], cB[-pI[109]] = pI[3]), ar(cB[pI[6]].version = pI[115], cB[pI[6]].encode = function(...cB) {
                        for (ar(cB[pI[1]] = pI[0], cB[pI[0]] = Bc(cB[pI[6]]), cB[pI[2]] = cB[pI[0]].length, cB[pI[37]] = -pI[0], cB[pI[48]] = pI[3], cB[pI[32]] = ""); ++cB[pI[37]] < cB[pI[2]];) ar(cB[pI[48]] = cB[pI[0]][cB[pI[37]]], cB[pI[32]] += Ic(cB[pI[48]]));
                        return cB[pI[32]]
                      }, cB[pI[6]].decode = function(...nc) {
                        for (ar(nc[pI[1]] = pI[0], cB[pI[15]] = Bc(nc[pI[6]]), cB[pI[60]] = cB[pI[15]].length, cB[-pI[109]] = pI[6], nc[pI[0]] = [], nc[pI[2]] = pI[3]);
                          (nc[pI[2]] = uc()) !== pI[52];) nc[pI[0]].push(nc[pI[2]]);
                        return function(...Bc) {
                          for (ar(Bc[pI[1]] = pI[0], Bc[pI[93]] = Bc[pI[6]].length, Bc[pI[30]] = -pI[0], Bc[pI[60]] = pI[3], Bc[pI[95]] = ""); ++Bc[pI[30]] < Bc[pI[93]];) Bc[pI[60]] = Bc[pI[6]][Bc[pI[30]]], Bc[pI[60]] > pI[94] && ar(Bc[pI[60]] -= pI[34], Bc[pI[95]] += cB[-pI[96]](Bc[pI[60]] >>> pI[37] & pI[33] | pI[38]), Bc[pI[60]] = pI[39] | Bc[pI[60]] & pI[33]), Bc[pI[95]] += cB[-pI[96]](Bc[pI[60]]);
                          return Bc[pI[95]]
                        }(nc[pI[0]])
                      })
                    }(typeof exports === pI[116] + pI[117] ? this.utf8 = {} : exports)
                  }
                  "qiPIHk" in hI && Mc(), ar(Uc[Vc] = pI[64], lc[Yc++] = Vc, bB ||= rr(Vc))
                } else {
                  function Pc(...cB) {
                    ar(cB[pI[1]] = pI[6], cB[pI[119]] = function(...Bc) {
                      return Bc[pI[1]] = pI[2], cB[pI[0]]({}, Bc[pI[6]], Bc[pI[0]])
                    }, cB[pI[0]] = function(...Bc) {
                      if (ar(Bc[pI[1]] = pI[5], Bc[pI[16]] = {}), Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] !== pI[3]) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]];
                      if (Bc[pI[0]] === Bc[pI[2]]) return pI[64];
                      for (Bc[-pI[118]] = pI[6]; Bc[-pI[118]] < Bc[pI[0]].length; Bc[-pI[118]]++) Bc[pI[16]][Bc[pI[0]][Bc[-pI[118]]]] === pI[3] && (Bc[pI[16]][Bc[pI[0]][Bc[-pI[118]]]] = pI[6]), Bc[pI[16]][Bc[pI[2]][Bc[-pI[118]]]] === pI[3] && (Bc[pI[16]][Bc[pI[2]][Bc[-pI[118]]]] = pI[6]), ar(Bc[pI[16]][Bc[pI[0]][Bc[-pI[118]]]]++, Bc[pI[16]][Bc[pI[2]][Bc[-pI[118]]]]--);
                      for (Bc[pI[29]] in Bc[pI[16]])
                        if (Bc[pI[16]][Bc[pI[29]]] !== pI[6]) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[52], pI[52];
                      for (Bc[pI[40]] = pI[0]; Bc[pI[40]] < Bc[pI[0]].length; Bc[pI[40]]++)
                        if (cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(pI[6], Bc[pI[40]]), Bc[pI[2]].substr(pI[6], Bc[pI[40]])) && cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(Bc[pI[40]]), Bc[pI[2]].substr(Bc[pI[40]])) || cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(pI[6], Bc[pI[40]]), Bc[pI[2]].substr(Bc[pI[2]].length - Bc[pI[40]])) && cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(Bc[pI[40]]), Bc[pI[2]].substr(pI[6], Bc[pI[2]].length - Bc[pI[40]]))) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[64], pI[64];
                      return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[52], pI[52]
                    }, console.log(cB[pI[119]]))
                  }
                  if ("e8h2n4" in hI && Pc(), !bB && rr(Vc)) {
                    function qB() {
                      ! function(...cB) {
                        function Bc(...cB) {
                          for (ar(cB[pI[1]] = pI[0], cB[pI[16]] = [], cB[pI[30]] = pI[6], cB[pI[5]] = cB[pI[6]].length, cB[-pI[35]] = pI[3], cB[pI[29]] = pI[3]); cB[pI[30]] < cB[pI[5]];) ar(cB[-pI[35]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), cB[-pI[35]] >= pI[38] && cB[-pI[35]] <= pI[91] && cB[pI[30]] < cB[pI[5]] ? (cB[pI[29]] = cB[pI[6]].charCodeAt(cB[pI[30]]++), (cB[pI[29]] & pI[92]) == pI[39] ? cB[pI[16]].push(((cB[-pI[35]] & pI[33]) << pI[37]) + (cB[pI[29]] & pI[33]) + pI[34]) : (cB[pI[16]].push(cB[-pI[35]]), cB[pI[30]]--)) : cB[pI[16]].push(cB[-pI[35]]));
                          return cB[pI[16]]
                        }

                        function nc(...cB) {
                          if (cB[pI[1]] = pI[0], cB[pI[6]] >= pI[38] && cB[pI[6]] <= pI[97]) throw Error(pI[98] + pI[99] + pI[100] + cB[pI[6]].toString(pI[45]).toUpperCase() + (pI[101] + pI[102] + pI[103] + pI[104]))
                        }

                        function Vc(...Bc) {
                          return Bc[pI[1]] = pI[2], cB[pI[0]](Bc[pI[6]] >> Bc[pI[0]] & pI[42] | pI[43])
                        }

                        function Ic(...Bc) {
                          return Bc[pI[1]] = pI[0], (Bc[pI[6]] & pI[105]) == pI[6] ? cB[pI[0]](Bc[pI[6]]) : (Bc[pI[62]] = "", (Bc[pI[6]] & pI[106]) == pI[6] ? Bc[pI[62]] = cB[pI[0]](Bc[pI[6]] >> pI[40] & pI[57] | pI[50]) : (Bc[pI[6]] & pI[107]) == pI[6] ? ar(nc(Bc[pI[6]]), Bc[pI[62]] = cB[pI[0]](Bc[pI[6]] >> pI[41] & pI[61] | pI[55]), Bc[pI[62]] += Vc(Bc[pI[6]], pI[40])) : (Bc[pI[6]] & pI[108]) == pI[6] && ar(Bc[pI[62]] = cB[pI[0]](Bc[pI[6]] >> pI[46] & pI[62] | pI[59]), Bc[pI[62]] += Vc(Bc[pI[6]], pI[41]), Bc[pI[62]] += Vc(Bc[pI[6]], pI[40])), Bc[pI[62]] += cB[pI[0]](Bc[pI[6]] & pI[42] | pI[43]), Bc[pI[62]])
                        }

                        function rB(...Bc) {
                          if (Bc[pI[1]] = pI[6], cB[pI[2]] >= cB[-pI[122]]) throw Error(pI[51]);
                          if (ar(Bc[pI[16]] = cB[pI[48]][cB[pI[2]]] & pI[54], cB[pI[2]]++), (Bc[pI[16]] & pI[50]) == pI[43]) return Bc[pI[16]] & pI[42];
                          throw Error(pI[58])
                        }

                        function uc(...Bc) {
                          if (ar(Bc[pI[1]] = pI[6], Bc[pI[123]] = pI[3], Bc[pI[30]] = pI[3], Bc[-pI[124]] = pI[3], Bc[pI[5]] = pI[3], Bc[pI[15]] = pI[3]), cB[pI[2]] > cB[-pI[122]]) throw Error(pI[51]);
                          if (cB[pI[2]] == cB[-pI[122]]) return pI[52];
                          if (ar(Bc[pI[123]] = cB[pI[48]][cB[pI[2]]] & pI[54], cB[pI[2]]++), (Bc[pI[123]] & pI[43]) == pI[6]) return Bc[pI[123]];
                          if ((Bc[pI[123]] & pI[55]) == pI[50]) {
                            if (ar(Bc[pI[30]] = rB(), Bc[pI[15]] = (Bc[pI[123]] & pI[57]) << pI[40] | Bc[pI[30]]), Bc[pI[15]] >= pI[43]) return Bc[pI[15]];
                            throw Error(pI[58])
                          }
                          if ((Bc[pI[123]] & pI[59]) == pI[55]) {
                            if (ar(Bc[pI[30]] = rB(), Bc[-pI[124]] = rB(), Bc[pI[15]] = (Bc[pI[123]] & pI[61]) << pI[41] | Bc[pI[30]] << pI[40] | Bc[-pI[124]]), Bc[pI[15]] >= pI[112]) return nc(Bc[pI[15]]), Bc[pI[15]];
                            throw Error(pI[58])
                          }
                          if ((Bc[pI[123]] & pI[53]) == pI[59] && (ar(Bc[pI[30]] = rB(), Bc[-pI[124]] = rB(), Bc[pI[5]] = rB(), Bc[pI[15]] = (Bc[pI[123]] & pI[62]) << pI[46] | Bc[pI[30]] << pI[41] | Bc[-pI[124]] << pI[40] | Bc[pI[5]]), Bc[pI[15]] >= pI[34] && Bc[pI[15]] <= pI[113])) return Bc[pI[15]];
                          throw Error(pI[114])
                        }
                        ar(cB[pI[1]] = pI[0], cB[pI[0]] = String.fromCharCode), ar(cB[pI[48]] = pI[3], cB[-pI[122]] = pI[3], cB[pI[2]] = pI[3]), ar(cB[pI[6]].version = pI[115], cB[pI[6]].encode = function(...cB) {
                          for (ar(cB[pI[1]] = pI[0], cB[-pI[120]] = Bc(cB[pI[6]]), cB[-pI[53]] = cB[-pI[120]].length, cB[-pI[121]] = -pI[0], cB[pI[15]] = pI[3], cB[-pI[62]] = ""); ++cB[-pI[121]] < cB[-pI[53]];) ar(cB[pI[15]] = cB[-pI[120]][cB[-pI[121]]], cB[-pI[62]] += Ic(cB[pI[15]]));
                          return cB[-pI[62]]
                        }, cB[pI[6]].decode = function(...nc) {
                          for (ar(nc[pI[1]] = pI[0], cB[pI[48]] = Bc(nc[pI[6]]), cB[-pI[122]] = cB[pI[48]].length, cB[pI[2]] = pI[6], nc[-pI[56]] = [], nc[pI[2]] = pI[3]);
                            (nc[pI[2]] = uc()) !== pI[52];) nc[-pI[56]].push(nc[pI[2]]);
                          return function(...Bc) {
                            for (ar(Bc[pI[1]] = pI[0], Bc[pI[16]] = Bc[pI[6]].length, Bc[pI[2]] = -pI[0], Bc[pI[5]] = pI[3], Bc[pI[48]] = ""); ++Bc[pI[2]] < Bc[pI[16]];) Bc[pI[5]] = Bc[pI[6]][Bc[pI[2]]], Bc[pI[5]] > pI[94] && ar(Bc[pI[5]] -= pI[34], Bc[pI[48]] += cB[pI[0]](Bc[pI[5]] >>> pI[37] & pI[33] | pI[38]), Bc[pI[5]] = pI[39] | Bc[pI[5]] & pI[33]), Bc[pI[48]] += cB[pI[0]](Bc[pI[5]]);
                            return Bc[pI[48]]
                          }(nc[-pI[56]])
                        })
                      }(typeof exports === pI[116] + pI[117] ? this.utf8 = {} : exports)
                    }
                    "b65RtqP" in hI && qB(), ar(Uc[Vc] = pI[64], lc[8 - pI[0]] = Vc, bB = pI[64])
                  }
                }
              } else if (gB < 4) {
                function Oc(...cB) {
                  function Bc(...cB) {
                    if (cB[pI[1]] = pI[0], !cB[pI[6]]) return -pI[0];
                    const nc = Bc(cB[pI[6]].left),
                      Vc = Bc(cB[pI[6]].right),
                      Ic = Math.abs(nc - Vc);
                    if (nc === 1 / 0 || Vc === 1 / 0 || Ic > pI[0]) return 1 / 0;
                    return Math.max(nc, Vc) + pI[0]
                  }
                  cB[pI[1]] = pI[6], window.__GLOBAL__HELPERS__ = {
                    buildCharacterMap: function(...cB) {
                      cB[pI[1]] = pI[0];
                      const Bc = {};
                      for (let nc of cB[pI[6]].replace(/[^w]/g, "").toLowerCase()) Bc[nc] = Bc[nc] + pI[0] || pI[0];
                      return Bc
                    },
                    isAnagrams: function(...cB) {
                      cB[pI[1]] = pI[2];
                      const Bc = buildCharMap(cB[pI[6]]),
                        nc = buildCharMap(cB[pI[0]]);
                      for (let Vc in Bc)
                        if (Bc[Vc] !== nc[Vc]) return pI[52];
                      return Object.keys(Bc).length !== Object.keys(nc).length ? pI[52] : pI[64]
                    },
                    isBalanced: function(...cB) {
                      return cB[pI[1]] = pI[0], Bc(cB[pI[6]]) !== 1 / 0
                    },
                    getHeightBalanced: Bc
                  }
                }
                "q787VJ" in hI && Oc(), ar(Uc[Vc] = pI[64], Lc[gB++] = Vc)
              }
            } else Zc = pI[64]
        },
        Cc = (pI[6], uI.l)(cB),
        vB = Cc ? Cc.replaced : (() => {
          try {
            return Ic[cB]
          } catch {
            function Bc(...cB) {
              ar(cB[pI[1]] = pI[6], cB[-pI[127]] = function(...cB) {
                for (ar(cB[pI[1]] = pI[0], cB[pI[125]] = cB[pI[6]].length, cB[pI[30]] = [], cB[pI[87]] = pI[6], cB[-pI[126]] = pI[6], cB[pI[6]].sort(((cB, Bc) => cB - Bc))), cB[pI[32]] = pI[6]; cB[pI[32]] < cB[pI[125]]; cB[pI[32]]++)
                  if (!(cB[pI[32]] > pI[6] && cB[pI[6]][cB[pI[32]]] === cB[pI[6]][cB[pI[32]] - pI[0]]))
                    for (ar(cB[pI[87]] = cB[pI[32]] + pI[0], cB[-pI[126]] = cB[pI[125]] - pI[0]); cB[pI[87]] < cB[-pI[126]];)
                      if (cB[pI[6]][cB[pI[32]]] + cB[pI[6]][cB[pI[87]]] + cB[pI[6]][cB[-pI[126]]] < pI[6]) cB[pI[87]]++;
                      else if (cB[pI[6]][cB[pI[32]]] + cB[pI[6]][cB[pI[87]]] + cB[pI[6]][cB[-pI[126]]] > pI[6]) cB[-pI[126]]--;
                else {
                  for (cB[pI[30]].push([cB[pI[6]][cB[pI[32]]], cB[pI[6]][cB[pI[87]]], cB[pI[6]][cB[-pI[126]]]]); cB[pI[87]] < cB[-pI[126]] && cB[pI[6]][cB[pI[87]]] === cB[pI[6]][cB[pI[87]] + pI[0]];) cB[pI[87]]++;
                  for (; cB[pI[87]] < cB[-pI[126]] && cB[pI[6]][cB[-pI[126]]] === cB[pI[6]][cB[-pI[126]] - pI[0]];) cB[-pI[126]]--;
                  ar(cB[pI[87]]++, cB[-pI[126]]--)
                }
                return cB[pI[30]]
              }, console.log(cB[-pI[127]]))
            }
            return "NpacdL" in hI && Bc(), pI[3]
          }
        })();
      if (Sc((() => {
          Ic[cB] = Qc
        })), typeof vB === pI[128] + pI[129]) {
        function XB(...cB) {
          ar(cB[pI[1]] = pI[6], cB[pI[30]] = function(...Bc) {
            return Bc[pI[1]] = pI[2], cB[pI[0]]({}, Bc[pI[6]], Bc[pI[0]])
          }, cB[pI[0]] = function(...Bc) {
            if (ar(Bc[pI[1]] = pI[5], Bc[pI[5]] = {}), Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] !== pI[3]) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]];
            if (Bc[pI[0]] === Bc[pI[2]]) return pI[64];
            for (Bc[pI[30]] = pI[6]; Bc[pI[30]] < Bc[pI[0]].length; Bc[pI[30]]++) Bc[pI[5]][Bc[pI[0]][Bc[pI[30]]]] === pI[3] && (Bc[pI[5]][Bc[pI[0]][Bc[pI[30]]]] = pI[6]), Bc[pI[5]][Bc[pI[2]][Bc[pI[30]]]] === pI[3] && (Bc[pI[5]][Bc[pI[2]][Bc[pI[30]]]] = pI[6]), ar(Bc[pI[5]][Bc[pI[0]][Bc[pI[30]]]]++, Bc[pI[5]][Bc[pI[2]][Bc[pI[30]]]]--);
            for (Bc[pI[29]] in Bc[pI[5]])
              if (Bc[pI[5]][Bc[pI[29]]] !== pI[6]) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[52], pI[52];
            for (Bc[-pI[130]] = pI[0]; Bc[-pI[130]] < Bc[pI[0]].length; Bc[-pI[130]]++)
              if (cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(pI[6], Bc[-pI[130]]), Bc[pI[2]].substr(pI[6], Bc[-pI[130]])) && cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(Bc[-pI[130]]), Bc[pI[2]].substr(Bc[-pI[130]])) || cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(pI[6], Bc[-pI[130]]), Bc[pI[2]].substr(Bc[pI[2]].length - Bc[-pI[130]])) && cB[pI[0]](Bc[pI[6]], Bc[pI[0]].substr(Bc[-pI[130]]), Bc[pI[2]].substr(pI[6], Bc[pI[2]].length - Bc[-pI[130]]))) return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[64], pI[64];
            return Bc[pI[6]][Bc[pI[0]] + Bc[pI[2]]] = pI[52], pI[52]
          }, console.log(cB[pI[30]]))
        }
        "jhjevCx" in hI && XB();
        const HB = vB;
        Sc((() => {
          HB(Qc)
        }))
      }
      if (Cc) {
        const FB = Cc.reports;
        Sc((() => {
          for (const Bc in FB)(pI[6], Kn[pI[131]])(Kn[pI[142]], FB, [Bc]) && Bc !== cB && Qc(Bc, FB[Bc])
        }))
      }
      const Dc = Cc ? pI[2] : pI[0];
      let Nc = pI[52];
      const Ec = (...Bc) => (Bc[pI[1]] = pI[6], hc ? pI[64] : (ar(Bc[pI[16]] = pI[52], Nc = !Sc((() => {
          Bc[pI[16]] = Ic[cB] !== Qc
        }))), Bc[pI[16]])),
        oc = fc(((...Bc) => {
          Bc[pI[1]] = pI[6];
          const nc = (pI[6], Kn[pI[132]])(Ic, cB);
          return (nc === pI[4] || nc === void pI[6] ? void pI[6] : nc.configurable) !== pI[52] || typeof nc[pI[154]] !== pI[128] + pI[129] || pc !== Dc
        })),
        Wc = {},
        wc = () => {
          try {
            return navigator[pI[149] + "tSub"]
          } catch {
            return Wc
          }
        },
        kB = wc(),
        Xc = nc,
        Hc = Xc === pI[4] ? ((...cB) => {
          cB[pI[1]] = pI[6];
          const Bc = pI[13];
          ar(cB[pI[16]] = pI[52], cB[-pI[133]] = Bc - pI[0]);
          const nc = TextDecoder[pI[134] + pI[135]][pI[136]],
            Vc = function() {
              cB[-pI[133]]++, cB[-pI[133]] === Bc && (OI((() => Tc(pI[52]))) && (cB[pI[16]] = pI[64]), cB[-pI[133]] = pI[6]);
              for (var Vc = arguments[pI[1]], Ic = new Array(Vc), rB = pI[6]; rB < Vc; rB++) Ic[rB] = arguments[rB];
              return (pI[6], Kn[pI[131]])(nc, this, Ic)
            };
          return Sc((() => {
            TextDecoder[pI[134] + pI[135]][pI[136]] = Vc
          })), () => cB[pI[16]] ? pI[2] : fI((() => TextDecoder[pI[134] + pI[135]][pI[136]] !== Vc ? pI[40] : pI[6]))
        })() : () => fI((() => Xc[pI[147] + pI[148]]())),
        Fc = (pI[6], TB[pI[48]])(),
        Jc = (pI[6], Kn[pI[77]])(pI[4]),
        jB = (pI[6], Kn[pI[77]])(pI[4]);
      let Rc = pI[6],
        iB = pI[6],
        Kc = pI[6];
      const xB = (pI[6], Kn[pI[77]])(pI[4]),
        dc = (pI[6], Kn[pI[77]])(pI[4]);
      let Ac = pI[4],
        Gc = (pI[6], Kn[pI[77]])(pI[4]);
      const cn = (...cB) => {
          ar(cB[pI[1]] = pI[2], Jc[Rc] = cB[pI[6]], jB[Rc] = cB[pI[0]], Rc++)
        },
        BB = (...cB) => (ar(cB[pI[1]] = pI[0], cB[pI[0]] = pI[3]), (cB[pI[0]] = (jB[cB[pI[6]]] ? dc : xB)[Jc[cB[pI[6]]]]) !== pI[4] && cB[pI[0]] !== void pI[6] ? cB[pI[0]] : -pI[0]),
        VB = (pI[6], Kn[pI[7]])("d2lvNjQz"),
        IB = (pI[6], Kn[pI[7]])("amtsa2plZndu"),
        rn = [
          [(pI[6], Kn[pI[7]])("aW9qZndlODNq"), "2"],
          [(pI[6], Kn[pI[7]])("a3Bq"), "4"],
          [(pI[6], Kn[pI[7]])("dXJocmZm"), "5"]
        ],
        uB = [
          [(pI[6], Kn[pI[7]])(pI[138] + pI[137]), pI[156]],
          [(pI[6], Kn[pI[7]])(pI[138] + "w="), pI[131]]
        ],
        sB = (pI[6], Kn[pI[7]])("eTR5bnM="),
        MB = (pI[6], Kn[pI[7]])("aHRleWpldA=="),
        PB = [
          [(pI[6], Kn[pI[7]])("a3NhZmR1"), pI[141]],
          [(pI[6], Kn[pI[7]])("ZGZnYWFzZGFz"), pI[7]],
          [(pI[6], Kn[pI[7]])("c2RmbGpneGxmY2pr"), pI[139]],
          [(pI[6], Kn[pI[7]])("bGFzZWRraGFz"), "u"],
          [(pI[6], Kn[pI[7]])("cW16ZjhrM24="), pI[16]]
        ],
        qn = [
          [sB, pI[140]],
          [MB, pI[77]],
          [(pI[6], Kn[pI[7]])("bmI3ZnEy"), pI[30]]
        ],
        OB = (pI[6], Kn[pI[7]])("bGtxM20="),
        fB = (pI[6], Kn[pI[7]])("bWtxN3" + pI[137]),
        mn = ["mk:tw", "mk:jf"],
        eB = ((...cB) => {
          cB[pI[1]] = pI[6];
          try {
            return cB[pI[16]] = pI[3], (cB[pI[16]] = Ic[(pI[6], Kn[pI[7]])("V2ViU29ja2V0")]) === pI[4] || cB[pI[16]] === void pI[6] ? void pI[6] : cB[pI[16]][pI[134] + pI[135]]
          } catch {
            return pI[3]
          }
        })(),
        tn = ["send", "close", "addEventListener", "removeEventListener", pI[145] + pI[144] + pI[139]],
        SB = ["onmessage", "onopen", "onclos" + pI[32], "onerro" + pI[141]];
      let yn = pI[52];
      const zn = (...cB) => {
          cB[pI[1]] = pI[6];
          const nc = Bc();
          nc === pI[4] || yn || (yn = fc((() => {
            if (eB !== pI[3] && (pI[6], Kn.N)(nc) !== eB) return pI[64];
            for (let cB = pI[6]; cB < tn[pI[1]]; cB++)
              if ((pI[6], Kn[pI[131]])(Kn[pI[142]], nc, [tn[cB]])) return pI[64];
            for (let cB = pI[6]; cB < SB[pI[1]]; cB++)
              if (nc[SB[cB]] !== pI[4] && nc[SB[cB]] !== pI[3]) return pI[64];
            return pI[52]
          })))
        },
        pB = (pI[6], Kn[pI[7]])("RXZlbnQ=");
      let hB = UB[pI[143]][pI[159]],
        an = pI[6];
      const lB = () => an++ === pI[29] ? (an = pI[6], Tc(pI[52]) ? UB[pI[70]].CheckFuncHit : pI[6]) : pI[6],
        YB = (pI[6], Kn[pI[77]])(pI[4]),
        LB = Vc[pI[1]];
      for (let JB = pI[6]; JB < LB; JB++) {
        const jn = (pI[6], Kn[pI[131]])(Kn.ab, Vc, [JB]);
        YB[JB] = jn >= 99 && jn <= 122 ? jn : pI[6]
      }
      const gn = (...cB) => {
          return cB[pI[1]] = pI[2], typeof cB[pI[6]] === pI[128] + pI[129] && (pI[6], Kn[pI[131]])(Kn.R, cB[pI[0]], [(Bc = cB[pI[6]], (0, Kn.o)(Kn.z, Bc, []))]) !== pI[4];
          var Bc
        },
        bn = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ZB = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        QB = [
          [tr["Dispat" + pI[144] + pI[139]], () => !gn(EventTarget[pI[134] + pI[135]][pI[145] + pI[144] + pI[139]], bn)],
          [tr.PerformanceNow, () => !gn(performance[pI[146]], ZB)],
          [tr.DateNow, () => !gn(Date[pI[146]], ZB)]
        ],
        CB = (pI[6], Kn[pI[77]])(pI[4]);
      let vn = pI[6];
      const DB = {
        stackCheck: () => OI((() => Tc(pI[64]))),
        [pI[147] + pI[148]]: (...cB) => {
          cB[pI[1]] = pI[6];
          const Bc = Hc();
          if (Bc === pI[2]) return pI[2];
          if (zB[VB]) return pI[5];
          const nc = fI((() => Ic[IB] ? pI[15] : pI[6]));
          return nc !== pI[6] ? nc === pI[15] ? pI[15] : pI[6] : Bc === TI ? pI[6] : Bc === pI[40] ? pI[40] : (ec(), Vc = Function[pI[134] + pI[135]], rB = pI[153], uc = (...cB) => (cB[pI[1]] = pI[0], cB[pI[6]].writable !== pI[64]), OI((() => {
            const cB = Object.getOwnPropertyDescriptor(Vc, rB);
            return void 0 !== cB && uc(cB)
          })) ? pI[62] : pI[6]);
          var Vc, rB, uc
        },
        indexPassReplaced: Ec,
        [pI[149] + "tSubChanged"]: (...cB) => {
          if (cB[pI[1]] = pI[6], kB === Wc || Nc) return pI[52];
          const Bc = wc();
          return Bc !== Wc && Bc !== kB
        },
        XB: (...cB) => {
          ar(cB[pI[1]] = pI[6], cB[pI[16]] = LB);
          for (let Bc = pI[6]; Bc < QB[pI[1]] + vn; Bc++) {
            const nc = Bc < QB[pI[1]] ? QB[Bc] : CB[Bc - QB[pI[1]]];
            nc[pI[6]] < cB[pI[16]] && fc(nc[pI[0]]) && (cB[pI[16]] = nc[pI[6]])
          }
          return cB[pI[16]] < LB ? YB[cB[pI[16]]] : pI[6]
        },
        eV: () => Fc ? TB[pI[70]] : pI[69],
        [pI[150] + pI[151] + "Subs"]: (...cB) => {
          cB[pI[1]] = pI[6];
          const Bc = Mc.i.zq[pI[150] + pI[151]];
          return typeof Bc === pI[152] && Bc > pI[6] ? Bc > pI[94] ? pI[94] : Bc : pI[6]
        },
        ["getCom" + pI[165]]: (...cB) => {
          ar(cB[pI[1]] = pI[6], cB[-pI[10]] = pI[3], Rc = pI[6]);
          for (let nc = pI[6]; nc < Yc; nc++) cn(lc[nc], pI[64]);
          for (let nc = pI[6]; nc < rn[pI[1]]; nc++) zB[rn[nc][pI[6]]] && cn(rn[nc][pI[0]], pI[64]);
          const Bc = fI((() => qr(atob[pI[153]](), qB) ? pI[6] : pI[0]));
          Bc === pI[0] && cn(pI[86], pI[64]), ec();
          const Vc = Bc === TI ? TI : fI(((...cB) => {
            cB[pI[1]] = pI[6];
            const Bc = Object.getOwnPropertyDescriptor(window, "atob");
            return Bc === pI[3] ? TI : Bc[pI[154]] !== pI[3] ? pI[0] : pI[6]
          }));
          Vc === pI[0] && cn(pI[70], pI[64]);
          const Ic = Vc === TI;
          for (let nc = pI[6]; nc < uB[pI[1]] && !Ic; nc++) zB[uB[nc][pI[6]]] && cn(uB[nc][pI[0]], pI[64]);
          const rB = Rc > Yc;
          cB[pI[155]] = pI[4], Yc === pI[6] && (gB > pI[6] ? cB[pI[155]] = Lc[pI[6]] : Zc ? cB[pI[155]] = "fp" : rB || (cB[pI[155]] = zB[sB] ? pI[140] : zB[MB] ? pI[77] : pI[4]));
          for (let nc = pI[6]; nc < PB[pI[1]] && !Ic; nc++) zB[PB[nc][pI[6]]] && cn(PB[nc][pI[0]], pI[64]);
          const uc = Rc,
            sc = (pI[6], PI[pI[60]])(),
            Mc = sc !== pI[4] && (pI[6], nB[pI[156]])(sc);
          Mc && !Ic && cn(sc, pI[52]), oc && cn("ix", pI[52]), aB && cn("il", pI[52]);
          for (let nc = pI[6]; nc < gB; nc++) cn(Lc[nc], pI[64]);
          for (let nc = pI[6]; nc < qn[pI[1]]; nc++) zB[qn[nc][pI[6]]] && cn(qn[nc][pI[0]], pI[64]);
          zB[OB] && cn("mk:lk", pI[64]);
          const Pc = ((...cB) => {
            cB[pI[1]] = pI[0];
            for (let Bc = pI[6]; Bc < mn[pI[1]]; Bc++)
              if (cB[pI[6]] === mn[Bc]) return mn[Bc];
            return pI[4]
          })(zB[fB]);
          if (Pc !== pI[4] && cn(Pc, pI[64]), nc !== pI[4] && tB(nc.emitReplaced) === pI[64] && cn("mk:em", pI[64]), yn && cn("3s", pI[52]), Kn.V && cn("3b", pI[52]), ec(), mB && cn("3d", pI[52]), Ic && cn("3g", pI[52]), sc === pI[4] || Mc || cn(sc, pI[52]), Rc === pI[6]) return pI[4];
          if (cB[pI[155]] === pI[4] && jB[pI[6]] && !rr(Jc[pI[6]]))
            for (let nc = pI[0]; nc < uc; nc++)
              if (jB[nc] && rr(Jc[nc])) {
                const cB = Jc[nc];
                for (let Bc = nc; Bc > pI[6]; Bc--) ar(Jc[Bc] = Jc[Bc - pI[0]], jB[Bc] = jB[Bc - pI[0]]);
                ar(Jc[pI[6]] = cB, jB[pI[6]] = pI[64]);
                break
              } if (ar(cB[pI[32]] = pI[6], cB[-pI[157]] = cB[pI[155]] === pI[4] ? pI[6] : uc), cB[-pI[157]] > pI[6] && sc !== pI[4] && Mc && !Ic) {
            for (let Bc = cB[-pI[157]]; Bc > pI[6]; Bc--) ar(Jc[Bc] = Jc[Bc - pI[0]], jB[Bc] = jB[Bc - pI[0]]);
            ar(Jc[pI[6]] = sc, jB[pI[6]] = pI[52], cB[pI[32]] = pI[0], cB[-pI[157]]++)
          }
          if (cB[pI[158]] = pI[6], iB++ % pI[2] === pI[0])
            for (let nc = pI[0]; nc < Rc; nc++) BB(nc) < BB(cB[pI[158]]) && (cB[pI[158]] = nc);
          const Oc = Jc[cB[pI[158]]];
          (jB[cB[pI[158]]] ? dc : xB)[Oc] = Kc++;
          const Tc = cB[pI[158]] >= cB[pI[32]] && cB[pI[158]] < cB[-pI[157]];
          if (!jB[cB[pI[158]]] || Oc === cB[pI[155]] || cB[pI[158]] === pI[6] && !Tc) return Oc;
          const fc = (cB[-pI[10]] = cB[pI[155]]) !== pI[4] && cB[-pI[10]] !== void pI[6] ? cB[-pI[10]] : Jc[pI[6]];
          return fc !== Ac && ar(Ac = fc, Gc = (pI[6], Kn[pI[77]])(pI[4])), Gc[Oc] ??= (Sc = Oc, `~${function(cB){return cB.length<2?cB:":"===cB[1]?cB[0]:cB[0]+cB[1]}(fc)}~${Sc}`);
          var Sc
        }
      };
      let NB = UB[pI[143]][pI[159]];
      const EB = () => hB !== UB[pI[143]][pI[159]] ? hB : NB;
      let oB = pI[6],
        WB = pI[2],
        wB = pI[6],
        kn = pI[6];
      return {
        checks: DB,
        checkEvent: (...cB) => {
          cB[pI[1]] = pI[0];
          try {
            const Bc = Ic[pB];
            if (typeof Bc === pI[128] + pI[129] && !(cB[pI[6]] instanceof Bc)) return hB = UB[pI[143]].NotEvent, pI[6];
            if (cB[pI[6]].isTrusted === pI[52]) return pI[6];
            let nc = pI[6];
            for (const Vc in cB[pI[6]]) nc++;
            return nc < pI[37] ? (hB = UB[pI[143]]["FewPropertie" + pI[7]], pI[6]) : lB()
          } catch {}
          return pI[6]
        },
        checkPadCall: () => {
          try {
            return lB()
          } catch {
            return pI[6]
          }
        },
        usedProp: EB,
        watchHeld: (cB, Bc) => {
          let nc;
          const Vc = Sc((() => {
            nc = Bc()
          }));
          CB[vn++] = [cB, () => !Vc || Bc() !== nc]
        },
        cn: (...cB) => {
          cB[pI[1]] = pI[6];
          const Bc = Ec();
          return ((...cB) => {
            if (ar(cB[pI[1]] = pI[0], cB[pI[0]] = pI[3], cB[pI[160]] = pI[3]), nc !== pI[4]) {
              const Bc = tB(nc.OZ),
                Vc = "v3" === Bc ? pI[5] : "v5" === Bc ? pI[29] : "v6" === Bc ? pI[40] : pI[2];
              Vc !== pI[2] && (WB = Vc);
              const Ic = tB(nc["inbuil" + pI[163] + pI[164]]);
              typeof Ic === pI[152] && Ic >= pI[6] && Ic <= pI[71] && (Ic | pI[6]) === Ic && (wB = Ic), ar(cB[pI[0]] = tB(nc.reflectApplyHit), cB[pI[160]] = tB(nc.definerHit))
            }
            const Bc = cB[pI[6]] ? pI[61] : "11" === cB[pI[160]] ? pI[71] : "13" === cB[pI[160]] ? pI[28] : cB[pI[0]] !== pI[3] && cB[pI[0]] !== pI[4] ? pI[2] : "10" === cB[pI[160]] ? pI[37] : "12" === cB[pI[160]] ? pI[41] : pI[6];
            Bc !== pI[6] && (kn = Bc)
          })(Bc), oB++ % 10 === pI[6] && (zn(), OI((() => !qr(Ic[rB][pI[153]][pI[153]](), qB))) && (NB = NB === UB[pI[143]][pI[161]] ? UB[pI[143]][pI[161]] : UB[pI[143]].Fr), OI((() => !qr(Ic[rB][pI[153]](), qB))) && (NB = UB[pI[143]][pI[161]])), {
            flags: Bc ? UB[pI[70]].Butto : pI[6],
            values: [
              [UB[pI[162]].PhysicsVersion, WB],
              [UB[pI[162]]["Inbuil" + pI[163] + pI[164]], wB],
              [UB[pI[162]]["AltCom" + pI[165]], kn],
              [UB[pI[162]]["ProbeUsedPro" + pI[156]], EB()]
            ]
          }
        }
      }
    };
    const lI = "[bloxd-wasm-client]",
      YI = "bloxdWasmDownloadFailed",
      LI = kn.b,
      gr = "boot",
      UI = "playSources",
      br = "wasmBuild",
      ZI = "bloxd-wasm-joined",
      QI = "bloxd-wasm-first-view",
      CI = "bloxd-wasm-playable-legacy",
      vr = 1048576,
      DI = 8 * vr,
      NI = 8,
      EI = 1048576,
      oI = 5e3,
      WI = 100,
      wI = [2e3, 1e4, 3e4];
    let kr = null,
      XI = null,
      HI = !1,
      FI = !1,
      JI = !1,
      jr = null,
      RI = null,
      ir = null,
      KI = null,
      xr = null,
      dI = null,
      AI = null;
    const GI = new class {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = cB, this.soundOn = Bc, this.now = nc, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var cB;
        null === (cB = this.player) || void 0 === cB || cB.prepare()
      }
      preload(cB) {
        var Bc;
        this.stopped || (null === (Bc = this.player) || void 0 === Bc || Bc.preload(cB))
      }
      cancelPreload() {
        var cB;
        null === (cB = this.player) || void 0 === cB || cB.cancelPreload()
      }
      load(cB) {
        if (null !== this.player || this.stopped) return;
        this.player = cB, cB.setMaster(this.master, this.soundOn);
        const Bc = this.now(),
          nc = this.local;
        this.local = [];
        for (const Ic of nc)
          if (!(Ic.stopped || !Ic.loop && Bc - Ic.at >= 300)) try {
            this.start(Ic, cB, Bc)
          } catch (Vc) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Vc)
          }
      }
      start(cB, Bc, nc) {
        const {
          name: Vc,
          pos: Ic,
          ear: rB,
          maxHearDist: uc,
          refDistance: sc,
          loop: Mc,
          fade: Pc
        } = cB, qB = Bc.playGame(Vc, lB(cB, nc), Ic, rB, uc, sc, Mc);
        if (cB.sound = qB, 1 !== cB.rate && qB.rate(cB.rate), null !== cB.panner && qB.setPannerAttr(cB.panner), null !== cB.moved && qB.setPosition(cB.moved), null !== Pc && nc - Pc.at < Pc.ms) {
          const Bc = an(this.master);
          Bc > 0 ? qB.fade(0, cB.volume * Bc, Pc.at + Pc.ms - nc) : qB.setRelativeVolume(cB.volume)
        }
      }
      onAudioEvent(cB, Bc, nc, Vc) {
        var Ic, rB;
        return null === (Ic = null === (rB = this.player) || void 0 === rB ? void 0 : rB.onAudioEvent(cB, Bc, nc, Vc)) || void 0 === Ic || Ic
      }
      applyListener(cB) {
        var Bc;
        null === (Bc = this.player) || void 0 === Bc || Bc.applyListener(cB)
      }
      playGame(cB, Bc, nc, Vc, Ic, rB, uc) {
        if (this.stopped) return hB.e;
        if (this.player) return this.player.playGame(cB, Bc, nc, Vc, Ic, rB, uc);
        const sc = this.now();
        this.local = this.local.filter((cB => !cB.stopped && (cB.loop || sc - cB.at < 300)));
        const Mc = {
          name: cB,
          volume: an(Bc),
          fade: null,
          pos: nc && [nc[0], nc[1], nc[2]],
          ear: Vc && [Vc[0], Vc[1], Vc[2]],
          maxHearDist: Ic,
          refDistance: rB,
          loop: uc,
          rate: 1,
          panner: null,
          moved: null,
          at: sc,
          stopped: !1,
          sound: null
        };
        this.local.push(Mc);
        const Pc = {
          stop: () => {
            var cB;
            return Mc.stopped = !0, null === (cB = Mc.sound) || void 0 === cB || cB.stop(), Pc
          },
          fade: (cB, Bc, nc) => {
            if (Mc.sound) return Mc.sound.fade(cB, Bc, nc), Pc;
            const Vc = an(this.master),
              Ic = an(Vc > 0 ? Bc / Vc : Bc > 0 ? Mc.volume : 0),
              rB = this.now(),
              uc = lB(Mc, rB);
            return Mc.volume = Ic, Mc.fade = nc > 0 && uc !== Ic ? {
              from: uc,
              at: rB,
              ms: nc
            } : null, Pc
          },
          rate: cB => (Mc.sound ? Mc.sound.rate(cB) : Mc.rate = cB, Pc),
          getVolume: () => Mc.sound ? Mc.sound.getVolume() : Mc.volume * an(this.master),
          getRelativeVolume: () => Mc.sound ? Mc.sound.getRelativeVolume() : Mc.volume,
          setRelativeVolume: cB => (Mc.sound ? Mc.sound.setRelativeVolume(cB) : (Mc.volume = an(cB), Mc.fade = null), Pc),
          setPannerAttr: cB => (Mc.sound ? Mc.sound.setPannerAttr(cB) : Mc.panner = {
            ...cB
          }, Pc),
          setPosition: cB => (Mc.sound ? Mc.sound.setPosition(cB) : Mc.moved = [cB[0], cB[1], cB[2]], Pc)
        };
        return Pc
      }
      setMaster(cB, Bc) {
        var nc;
        this.master = cB, this.soundOn = Bc, null === (nc = this.player) || void 0 === nc || nc.setMaster(cB, Bc)
      }
      stop() {
        var cB;
        this.stopped = !0, null === (cB = this.player) || void 0 === cB || cB.stopAll();
        for (const Bc of this.local) Bc.stopped = !0;
        this.local = []
      }
    }((0, fB.d)(), !0);
    let cu = {
        wasm: "unknown",
        client: String(Kc.c)
      },
      Br = null,
      nr = () => {};
    const Vr = new Promise((cB => {
      nr = cB
    }));
    let Ir = () => {};
    const ru = new Promise((cB => {
      Ir = cB
    }));
    let ur = null,
      sr = null,
      Mr = null,
      Pr = null,
      qu = null,
      Or = null,
      Tr = null,
      fr = null,
      mu = null,
      er = null,
      tu = null,
      Sr = null,
      yu = null,
      zu = null,
      pr = null,
      hr = null,
      au = null,
      lr = null,
      Yr = !1,
      Lr = null;
    const gu = new Set,
      Ur = new Set;

    function bu(cB) {
      if (!gu.has(cB)) {
        gu.add(cB);
        for (const nc of Ur) try {
          nc(cB)
        } catch (Bc) {
          console.error(`${lI} a startup listener threw`, Bc)
        }
      }
    }

    function Zr(cB) {
      Yr = !0, cB.isStopped || bu("texturesIn")
    }
    let Qr = 1,
      Cr = -1 / 0,
      vu = !1,
      Dr = !1,
      Nr = 0,
      Er = null,
      or = !1;
    const Wr = {
      dropped: -1 / 0
    };
    let wr = 0,
      ku = 0,
      Xr = null,
      Hr = null,
      Fr = null,
      Jr = null;
    const ju = new WeakMap;
    let Rr = null,
      iu = null,
      Kr = null,
      xu = null,
      dr = null,
      Ar = null,
      Gr = null,
      cs = null,
      Bu = -1 / 0,
      nu = null;
    const Vu = new Set;
    let Iu = !1,
      rs = null;
    const uu = new Map,
      su = new Set;
    let Mu = !1;
    const Pu = {
      adapter: null,
      boundAtMs: null
    };
    let qs = null,
      Ou = () => [0, 0],
      Tu = () => {},
      fu = () => {},
      ms = null,
      eu = null;
    const ts = new class {
      constructor(cB) {
        this.reached = cB, this.next = 1
      }
      observe(cB) {
        if (!(cB < this.next)) {
          for (; this.next <= cB;) this.next *= 2;
          this.reached(cB)
        }
      }
    }((cB => {
      console.warn(`${lI} chunk cancels from the server this session: ${cB}`)
    }));
    let Su = null,
      ys = null,
      zs = null,
      pu = null,
      hu = !1,
      as = !1,
      lu = null,
      Yu = !1,
      Lu = !1,
      gs = !0,
      Uu = null,
      bs = !1,
      Zu = !1,
      Qu = !1;

    function Cu() {
      return ir ??= Promise.all([nc.e(197), nc.e(128), nc.e(49)]).then((() => nc(41193))).then((cB => (RI = cB, Object.assign(globalThis, {
        bloxdPreviewPage: cB.pagePreviews()
      }), cB)), (cB => {
        throw ir = null, cB
      })), ir
    }

    function vs() {
      return jr ??= nc.e(47).then((() => nc(41209))).catch((cB => {
        throw jr = null, new yB.b(cB)
      })), jr
    }
    class Du {
      constructor() {
        this.host = null
      }
      open(cB) {
        return null !== this.host ? cB(this.host) : Cu().then((Bc => (this.host ??= new Bc.WasmPreviewHost(Bc.pagePreviews()), cB(this.host))))
      }
      openMob(cB) {
        return this.open((Bc => Bc.openMob(cB)))
      }
      openPet(cB) {
        return this.open((Bc => Bc.openPet(cB)))
      }
      openMobLineup(cB) {
        return this.open((Bc => Bc.openMobLineup(cB)))
      }
      openCharacter(cB) {
        return this.open((Bc => Bc.openCharacter(cB)))
      }
    }

    function Nu() {
      JI || (JI = !0, YV.c.setHost(new Du), (0, jn.i)(), zI.d.setFollower(gM), Object.assign(globalThis, {
        bloxdPreviews: YV.c
      }))
    }

    function Eu() {
      Cu().then((cB => {
        cB.pagePreviews().prefetch()
      }), (() => {}))
    }

    function ou() {
      let cB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (FI) return;
      FI = !0, Lu = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), gs = !Lu, console.info(`${lI} starting`), HI || (HI = !0, (0, pB.r)(new SB(ns, qM)), (0, Oc.q)(new yn), (0, pB.p)(new zn), (0, pB.l)()), Nu(), (0, AB.setCrashScreen)((cB => {
        let {
          text: Bc,
          reload: nc
        } = cB;
        ! function(cB, Bc) {
          var nc, Vc;
          if (bs) return;
          bs = !0, (0, KB.g)(), null === (nc = nu) || void 0 === nc || nc.abort(), nu = null, hV.release();
          const Ic = Lu ? null !== (Vc = cB.cancel) && void 0 !== Vc ? Vc : "general:back" : null;
          Xn({
            ...cB,
            cancel: Ic
          }).then((cB => {
            cB && Bc && Zu ? (0, Wc.i)(IB.m) : cB && Bc ? (0, Wc.m)() : Lu && (0, Wc.h)("/")
          }))
        }(Bc, nc)
      })), (0, OV.i)(), (0, TB.d)();
      let Bc = null;
      try {
        Bc = zr("tx8wi1lx46", (() => {
          var cB, Bc;
          return null !== (cB = null === (Bc = ur) || void 0 === Bc ? void 0 : Bc.ws) && void 0 !== cB ? cB : null
        }), cB, "licsrtgzeo")
      } catch (Ic) {
        console.error(`${lI} probes`, Ic)
      }
      const Vc = function() {
        const cB = (0, jV.k)(),
          Bc = (0, jV.h)();
        let nc = !1;
        return Vc => {
          cB && !nc && (nc = !0, (0, AB.reportStaleBuildReload)(cB, Bc, Vc))
        }
      }();
      bM(), Lu || function() {
        const cB = function(cB) {
          var Bc;
          const nc = new URLSearchParams(cB),
            Vc = nc.get("game");
          return Vc ? {
            game: Vc,
            lobby: null !== (Bc = nc.get("lobby")) && void 0 !== Bc ? Bc : null
          } : null
        }(window.location.search);
        if (cB) return (0, xB.k)(cB.game) && bM().request(), void ks(cB.game, cB.lobby);
        const Bc = new URLSearchParams(window.location.search).get("ws");
        if (!Bc) return;
        Vr.then((cB => {
          cB && async function(cB, Bc) {
            try {
              await (0, yB.g)(cB), iu = es(new WebSocket(Bc)), null !== iu && hV.setGame(null), Wu()
            } catch (Ic) {
              console.error(`${lI} ?ws=${Bc} did not attach`, Ic)
            }
          }(cB, Bc)
        }))
      }(), async function(cB) {
        var Bc, Vc, rB;
        if ("undefined" === typeof WebAssembly) return zM("noWebAssembly", "This browser has no WebAssembly"), null;
        const uc = await (0, QV.A)();
        if ((0, AB.setCrashBackend)((0, kn.v)(uc) ? "unsupported" : null !== (Bc = null === uc || void 0 === uc ? void 0 : uc.backend) && void 0 !== Bc ? Bc : "none"), (0, kn.v)(uc)) return zM("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${uc.missing.join(", ")}`, {
          missing: uc.missing.join(",")
        }), null;
        const sc = null !== (Vc = null === uc || void 0 === uc ? void 0 : uc.backend) && void 0 !== Vc ? Vc : null;
        Pu.adapter = null !== (rB = null === uc || void 0 === uc ? void 0 : uc.adapter) && void 0 !== rB ? rB : null, Pu.boundAtMs = null;
        const Pc = !(0, kn.X)();
        null !== uc && "none" !== uc.reason && console.info(`${lI} drawing with ${uc.backend}: ${uc.reason}`);
        const qB = (0, QV.v)();
        Ir(!0), (0, yB.m)((cB => {
          try {
            null !== sc && (ms = cB.startSkyFeed, ls(), function(cB) {
              var Bc, nc;
              Ou = cB.rasterText, xu = cB.setTextLocalPlayer, cB.setTextLocalPlayer(null !== (Bc = null === (nc = Kr) || void 0 === nc ? void 0 : nc.info.playerDbId) && void 0 !== Bc ? Bc : null), Tu = cB.drainTextRerasters, fu = cB.loadTextIcons, cB.warmText((() => hu)), cB.textChanged(), hu && setTimeout(fu, 0)
            }(cB), eu = cB.startShellAnalytics, Es())
          } finally {
            Qu || (zs = cB.followMenuPrefs({
              setSoundPrefs: Ts,
              setEnvPrefs: fs,
              setUiPrefs: Os,
              setLookPrefs: mM
            }))
          }
        })), (0, yB.j)(GI).catch((cB => {
          console.warn(`${lI} the game code did not load: a join asks again`, cB)
        }));
        const Oc = (0, QV.i)(uc);
        let Tc, fc;
        Oc.catch((() => {})), "loading" === (0, Ac.E)() && FV();
        try {
          Tc = function(cB) {
            const Bc = null !== cB && void 0 !== cB ? cB : document.createElement("canvas");
            Bc.id = "wasm-game-canvas";
            const nc = (0, Sn.i)(),
              Vc = (0, Sn.m)(nc);
            return Bc.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, EV.f)(Bc, Vc), (0, Sn.e)(Bc, nc), Bc.width = Vc.bufferWidth, Bc.height = Vc.bufferHeight, Vs(Bc, gs), Uu = Bc, document.body.append(Bc), Bc
          }(null === sc ? null : await (await Cu()).pagePreviews().beginSession())
        } catch (Ic) {
          return await uM({
            site: br,
            error: Ic
          }, (() => {
            (0, AB.showUnsupported)((0, Wn.n)("fetch"), cr.g.fetch, `the previews did not load: ${String(Ic)}`)
          })), null
        }
        FV();
        try {
          fc = await Oc
        } catch (Ic) {
          return await uM({
            site: br,
            error: Ic
          }, (() => {
            (0, AB.showUnsupported)((0, Wn.n)("fetch"), cr.g.fetch, `the ${null!==sc&&void 0!==sc?sc:"client"} build did not load: ${String(Ic)}`)
          })), null
        }
        const mB = (0, QV.e)(),
          ec = !mB && !0 !== dB.i.getItem(YI),
          tB = !mB && "loading" === (0, Ac.E)();
        await (0, Gc.h)(fc, VB.f, {
          reloadFailedDownload: ec
        }), tB && !(0, Ac.P)() && await (0, Gc.h)(fc, VB.f, {
          reloadFailedDownload: ec
        });
        XV = performance.now();
        const zB = cu;
        if (!(0, Ac.P)()) {
          (0, Ac.N)() && dB.i.setItem(YI, !0);
          const cB = (0, Ac.t)();
          if ("call" === cB) cP({
            site: XB.v,
            error: (0, Ac.p)(),
            header: null
          }, zB);
          else {
            const Bc = null !== cB && void 0 !== cB ? cB : "instantiate",
              nc = () => {
                (0, AB.showUnsupported)((0, Wn.n)(Bc), cr.g[Bc], (0, Ac.j)())
              };
            if ("compile" !== cB && "instantiate" !== cB || !ps())
              if ("fetch" === Bc) {
                const cB = [fc.url().href, VB.f.url().href];
                await uM({
                  site: br,
                  error: (0, Ac.j)(),
                  urls: cB
                }, nc)
              } else nc();
            else {
              const Bc = (0, Ac.j)(),
                nc = (0, bn.n)((0, Ac.p)());
              (0, AB.reportCountedLoadFallback)((0, Wn.n)(cB), cr.g[cB], Bc, nc), hs(`the wasm client did not ${cB} here (${Bc})`, {
                forThisPageOnly: !nc
              })
            }
          }
          return null
        }(0, cn.C)(fc.url()) && (0, AB.reportUnstreamedCoreLoad)();
        const pc = (0, Ac.G)();
        let hc, aB = zB;
        try {
          aB = {
            ...zB,
            wasm: pc.Uc()
          };
          const {
            Au: cB
          } = fc.TV, Bc = cB.oPc();
          if (Bc !== UB.y) return cP({
            site: XB.d,
            error: `core ABI ${Bc}, page ABI ${UB.y}`,
            header: null
          }, aB), null;
          const [nc, Vc] = (0, UB.Hd)();
          hc = new cB(nc, Vc)
        } catch (Ic) {
          return cP({
            site: XB.d,
            error: Ic,
            header: null
          }, aB), null
        }
        cu = aB, Br = fc.TV;
        const lc = new XB.h(hc, Ac.y, {
          onCrash: cB => {
            Pc && function(cB, Bc, nc) {
              if ("webgpu" !== Bc || (0, QV.b)()) return !1;
              const Vc = function(cB) {
                if (cB.site === XB.g && (0, kn.w)(cB.error)) return "frames_refused";
                return cB.site === LI && (0, kn.y)(cB.error) ? "start_failed" : null
              }(cB);
              if (null === Vc || !(0, kn.Q)()) return !1;
              return (0, AB.reportRenderReload)("webgpu", "start_failed" === Vc ? 0 : 1, nc, {
                cause: Vc,
                error: cB.error,
                context: Pu
              }), Xs(), !0
            }(cB, sc, aB) || cP(cB, aB)
          },
          onNetEvent: kM,
          onCoreErrors: (cB, Bc) => {
            var nc;
            (0, AB.reportCoreErrors)(cB, Bc, aB, ((cB, Bc) => {
              var nc;
              return null === (nc = qs) || void 0 === nc ? void 0 : nc.ZPc(cB, Bc)
            })), null === (nc = Lr) || void 0 === nc || nc.coreErrors(cB)
          },
          onRenderReload: (cB, Bc) => {
            ! function(cB, Bc, nc, Vc) {
              if ((0, QV.b)()) return;
              const Ic = Bc === UB.oc.WEBGPU,
                rB = (0, kn.T)(qs),
                uc = Ic ? (0, kn.O)(Vc) : null;
              if (null !== uc) {
                const Bc = void 0 === rB ? "" : ` (${rB.message})`;
                return void cB.crash(AB.RENDER_RELOAD_SITE, new Error(`the WebGPU device was lost (${nc}) and ${uc}${Bc}`))
              }(0, AB.reportRenderReload)(Ic ? "webgpu" : "webgl", nc, cu, {
                error: rB,
                context: Pu
              }), Xs()
            }(lc, cB, Bc, Pc)
          },
          onEnvEvent: cB => {
            var Bc;
            cB.kind === UB.T.SkyImages && (null === (Bc = hr) || void 0 === Bc || Bc.onEvent(cB.payload))
          },
          onImages: cB => {
            var Bc;
            null === (Bc = au) || void 0 === Bc || Bc.onEvent(cB)
          },
          onModelRequest: cB => {
            var Bc;
            null === (Bc = yu) || void 0 === Bc || Bc.request(cB)
          },
          onModelTaken: (cB, Bc) => {
            var nc;
            null === (nc = yu) || void 0 === nc || nc.taken(cB, Bc)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(cB, Bc) {
                const nc = AI;
                if (null === nc || cB.isStopped) return;
                nc.restore((cB => {
                  (0, AB.reportTerrainTextureFailure)(cB, Bc)
                })).then((Bc => {
                  !1 !== Bc || cB.isStopped ? !0 === Bc && console.info(`${lI} terrain textures handed over again after the renderer lost them`) : console.warn(`${lI} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(lc, aB)
            }))
          },
          onKeepAlive: cB => {
            const Bc = null === Jr ? void 0 : ju.get(Jr);
            void 0 !== Bc && dn(Bc, cB)
          }
        });
        if (KI = lc, null !== cB) {
          lc.setAntiCheatProbes(mr(Ac.y, cB.checks)), cB.watchHeld(tr.CoreFrame, (() => lc.frame)), cB.watchHeld(tr.GlueFrame, (() => hc.frame));
          const Bc = yr(cB, ((cB, Bc, nc) => {
            let Vc = !1;
            return IM(lc, (() => {
              Vc = lc.rings.input.writeRecord(UB.jb.AntiCheat, cB, Bc, nc, 0)
            })), Vc
          }));
          lc.isStopped ? Bc.stop() : tu = Bc
        }
        kr = (cB, Bc, nc) => lc.rings.cmd.writeCmd(cB, Bc, nc), XI = cB => lc.rings.cmd.growForCmd(cB), or = !1, ls(), (0, yB.n)(lc, {
          core: hc,
          memory: Ac.y,
          staleOr: (cB, Bc, nc) => uM({
            site: cB,
            error: Bc
          }, nc),
          reportReplayFault: (cB, Bc) => {
            (0, AB.reportReplayFault)(cB, Bc, cu)
          },
          audio: GI,
          options: rn.d,
          onNetEvent: kM,
          sessionInfo: cB => {
            var Bc;
            return (null === (Bc = Kr) || void 0 === Bc ? void 0 : Bc.conn) === cB ? Kr.info : null
          },
          onEventOverflow: cM,
          replayShaderPack: cB => {
            var Bc;
            null === (Bc = Lr) || void 0 === Bc || Bc.replay(cB)
          },
          hasPackModel: cB => {
            var Bc, nc;
            return null !== (null !== (Bc = null === (nc = Ys()) || void 0 === nc ? void 0 : nc.modelUrl(cB)) && void 0 !== Bc ? Bc : null)
          },
          beforeWrite: () => (!vu && lc.rings.net.cursor > 0 && Fs(lc, !1, "all"), !lc.isStopped),
          beforeOp: () => (!vu && lc.netWrittenSinceFrame > 0 && Fs(lc, !1, "budget"), !lc.isStopped)
        }), (0, Sc.J)({
          lockPointer: () => {
            if (!Pn(Tc)) return !1;
            try {
              Promise.resolve(Tc.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, GB.e)()
          },
          leaveGame: () => {
            Gu()
          },
          canvas: () => Tc
        }), Sr = (0, Sc.v)((() => {
          var cB;
          const Bc = (0, yB.e)();
          null === (cB = (0, yB.l)()) || void 0 === cB || cB.followCursorAim(!0 === (null === Bc || void 0 === Bc ? void 0 : Bc.isSessionLive) ? Bc : null)
        })), Xr && lc.setUiPrefs(Xr);
        Hr && lc.setEnvPrefs(Hr);
        Fr && lc.setLookPrefs(Fr);
        const Yc = DV ? NV(DV.preventMovement) : null;
        Yc && Ps(Yc);
        const Lc = (0, FB.j)(),
          gB = (0, FB.d)(lc, Lc);
        mu = Lc.basis, (0, xn.e)(null === gB ? null : (0, HB.n)(gB)), fr = gB;
        const Uc = (0, BB.c)();
        let bB = 1 / 0,
          Zc = !0,
          Qc = Lc.shedFootprintBytes;
        const Cc = new qI.b(Uc, (() => hc.Is()), (cB => {
          lc.crash(XB.m, cB)
        }));
        Or = Cc, Tr = Cc, null !== gB && Cc.setCeiling(Math.min((0, qI.n)(gB), bB));
        if (Zc) {
          Cc.setShed((cB => {
            const Bc = lc.shedMemory("joinReserve" !== cB);
            return null !== Bc && (null === fr || Bc < fr) && (fr = Bc, (0, xn.e)((0, HB.n)(Bc))), Bc
          }), ((cB, Bc, nc) => {
            1 === Bc ? (0, AB.reportMemoryShed)(cB, nc, cu) : console.warn(`${lI} wasm memory: shed again (${cB}): shed ${Bc}`, nc.wasmMemoryShed)
          }), (() => lc.addDistanceInUse()));
          const cB = (0, kn.N)(pc);
          Cc.setFootprint(new GV(Qc, {
            storedChunks: () => hc.WPc(),
            gpuBytes: () => {
              var Bc;
              return null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.wPc()) && void 0 !== Bc ? Bc : 0
            },
            jsHeapBytes: AV
          }))
        }
        window.addEventListener("pagehide", (() => {
          Or === Cc && (Cc.refreshStats(), VM(Cc))
        })), window.addEventListener("pagehide", Hs);
        const [vB, Dc] = (0, JB.d)();
        pu = (0, RB.f)((cB => lc.setChunkAddDistance(cB.horizontal, cB.vertical)), {
          horizontal: vB,
          vertical: Dc
        }), lc.setAmbientOcclusion(!0 !== dB.h.getItem("disableAmbientOcclusion")), lc.setPoseLod(!0 !== dB.h.getItem(dc.P));
        const Nc = function(cB, Bc, nc, Vc) {
          const Ic = new gV,
            rB = cB => dB.h.getItem(cB);
          Ic.sync(rB, Bc), (0, eB.Y)();
          const uc = (0, Mc.m)("customBindingsChanged", (() => {
            Ic.sync(rB, Bc)
          }));
          (0, cV.o)(Bc);
          const sc = new Set,
            Pc = (0, Sc.v)((() => {
              var cB;
              sc.size > 0 && Qn() && !0 === (null === (cB = (0, yB.e)()) || void 0 === cB ? void 0 : cB.localPlayerAlive()) && Mc.i.Vu("usedKeyboard")
            })),
            qB = tV(cB, Bc, {
              prevents: cB => Ic.prevents(cB),
              keyPressed: cB => {
                Ic.moves(cB) && (sc.add(cB), Qn() && Mc.i.Vu("usedKeyboard"))
              },
              keyReleased: cB => {
                sc.delete(cB)
              },
              keysReleased: () => {
                sc.clear()
              },
              resized: () => {
                bV.e.measure(), (0, yV.k)()
              },
              sizeCanvas: () => (0, Sn.n)(cB),
              watchRenderScale: Bc => (0, Sn.p)(cB, Bc),
              touchStarting: () => {
                bV.e.measure()
              },
              viewShown: nc,
              touchUiShown: () => wc.d.get("isTouchScreen"),
              ctrlCombosAreGames: Qn,
              inspect: (cB, Bc, nc) => {
                Ic.checks(Bc, nc) && Vc(cB)
              },
              canLock: () => Pn(cB)
            }),
            Oc = (0, un.b)(Bc);
          return () => {
            uc(), Pc(), (0, cV.o)(null), Oc(), qB()
          }
        }(Tc, ((cB, Bc, nc, Vc, Ic) => {
          var rB;
          IM(lc, (() => {
            lc.rings.input.writeRecord(cB, Bc, nc, Vc, Ic)
          })), null === (rB = tu) || void 0 === rB || rB.onInput(cB), !Dr && (0, En.h)(cB, Ic) && (0, En.e)((() => {
            KI !== lc || Qu || lc.isStopped || !Ks() || Fs(lc, !1, "budget", !1)
          }))
        }), (() => gs), (cB => {
          var Bc;
          null === (Bc = tu) || void 0 === Bc || Bc.onEvent(cB)
        }));
        if (lc.isStopped) return Nc(), null;
        sr = Nc;
        const Ec = () => !lc.isStopped && !bs;
        if (lc.isStopped) return null;
        (0, Ac.U)((() => {
          "call" === (0, Ac.t)() && lc.crash(XB.v, (0, Ac.p)())
        }));
        const Wc = (0, XB.X)(lc.rings.worker, (() => {
          Fs(lc, !1, "budget")
        }));
        Mr = function(cB, Bc) {
          return rP().catch((() => {})), new nI({
            module: (0, Ac.C)(),
            decodeSettings: cB => {
              const Bc = (0, yB.l)();
              if (null === Bc) throw new Error("no game code to decode the world-gen seed with");
              return Bc.decodeMapSettings(cB)
            },
            loadWorker: rP,
            onLoadFailed: cB => {
              (0, AB.reportWorldgenLoadFailure)(cB, cu)
            },
            onWorkerLost: cB => {
              (0, AB.reportWorkerLost)(XB.H, cB, cu)
            },
            onStartTimeout: cB => {
              (0, AB.reportWorkerStartTimeout)(XB.H, cB, cu)
            },
            onGaveUp: cB => {
              (0, AB.reportWorldgenGaveUp)(cB, cu)
            },
            onMemoryStats: cB => {
              var Bc;
              null === (Bc = Or) || void 0 === Bc || Bc.noteWorldgen(cB)
            },
            onMemoryGone: () => {
              var cB;
              null === (cB = Or) || void 0 === cB || cB.worldgenGone()
            },
            write: (nc, Vc, Ic, rB) => {
              IM(cB, (() => {
                cB.rings.worker.writeWorkerRecord(nc, Vc, Ic, 0, rB) || cB.crash(XB.H, `a world-gen record of kind ${Vc} did not fit the worker-in ring`)
              })), Bc()
            }
          })
        }(lc, Wc), qu = function(cB, Bc) {
          return new MV({
            module: (0, Ac.C)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: cB
              }, Bc] = await Promise.all([nc.e(35).then((() => nc(41266))), Promise.resolve().then((() => nc(107))).then((cB => {
                let {
                  isMobile: Bc
                } = cB;
                return Bc()
              }), (() => !1))]);
              return {
                create: cB,
                count: (0, OB.d)(navigator.hardwareConcurrency, Bc)
              }
            },
            write: (nc, Vc, Ic, rB, uc) => {
              (0, yV.h)(), IM(cB, (() => {
                cB.rings.worker.writeWorkerRecord(nc, Vc, Ic, rB, uc) || cB.crash(XB.q, `a meshing record of kind ${Vc} did not fit the worker-in ring`)
              })), Bc()
            },
            onWorkerLost: cB => {
              (0, AB.reportWorkerLost)(XB.q, cB, cu)
            },
            onStartTimeout: cB => {
              (0, AB.reportWorkerStartTimeout)(XB.q, cB, cu)
            },
            onMemoryStats: (cB, Bc) => {
              var nc;
              null === (nc = Or) || void 0 === nc || nc.noteMeshWorker(cB, Bc)
            },
            onMemoryGone: cB => {
              var Bc;
              null === (Bc = Or) || void 0 === Bc || Bc.meshWorkerGone(cB)
            },
            fail: (Bc, nc) => {
              const Vc = () => {
                cB.crash(XB.q, void 0 === nc ? Bc : new Error(Bc, {
                  cause: nc
                }))
              };
              void 0 !== nc ? uM({
                site: XB.q,
                error: nc
              }, Vc) : Vc()
            }
          })
        }(lc, Wc);
        const kB = (0, aI.l)(PB.clientSideServerUrls.staticUrl, {
            onTableFailed: cB => {
              uM({
                site: AB.MODEL_FEED_SITE,
                error: cB
              }, (() => {}), Ec)
            },
            packUrl: cB => {
              var Bc, nc;
              return null !== (Bc = null === (nc = Ys()) || void 0 === nc ? void 0 : nc.modelUrl(cB)) && void 0 !== Bc ? Bc : null
            }
          }),
          Xc = function(cB, Bc, nc) {
            const Vc = nc => {
              var Vc, Ic;
              return null !== (Vc = null === (Ic = Bc()) || void 0 === Ic ? void 0 : Ic.drawnUrl(nc)) && void 0 !== Vc ? Vc : cB.url(nc)
            };
            return (0, zI.g)((0, TV.p)(Vc), nc)
          }(kB, (() => yu), Ys),
          Hc = new TV.f(Xc, (cB => {
            console.warn(`${lI} image ${cB.key.kind}:${cB.key.index}:${cB.key.word} failed`, cB.error)
          }));
        au = Hc, lr = new SV(lc, Xc, ((cB, Bc) => {
          void 0 === Bc ? console.warn(`${lI} ${cB}`) : Us(cB, Bc)
        }));
        const Fc = new yI.f(kB, function(cB, Bc) {
          let Vc = !1,
            Ic = null,
            rB = null;
          const uc = {
              onUnavailable: (nc, Vc) => {
                rB ??= uM({
                  site: AB.MODEL_POOL_SITE,
                  error: nc,
                  urls: Vc
                }, (() => {
                  (0, AB.reportModelPoolFailure)(nc, cB)
                }), Bc)
              },
              onDecoderFailed: (nc, Vc) => {
                const Ic = () => {
                  (0, AB.reportDracoDecoderFailure)(nc, cB)
                };
                void 0 !== Vc ? uM({
                  site: AB.MODEL_POOL_SITE,
                  error: nc,
                  urls: Vc
                }, Ic, Bc) : Ic()
              },
              onWorkerLost: Bc => {
                (0, AB.reportWorkerLost)(AB.MODEL_POOL_SITE, Bc, cB)
              }
            },
            sc = nc.e(37).then((() => nc(41274))).then((cB => {
              let {
                pageModelPool: Bc
              } = cB;
              if (Vc) return null;
              const nc = Bc(uc);
              return Ic = nc.unlisten, zu = nc.pool, nc.pool
            }), (cB => (Vc || uc.onUnavailable(cB, void 0), null)));
          return pr = () => {
            var cB;
            Vc = !0, null === (cB = Ic) || void 0 === cB || cB(), zu = null
          }, (cB, Bc) => sc.then((nc => {
            var Vc;
            return null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.build(cB, Bc)) && void 0 !== Vc ? Vc : (0, lV.o)(cB, "the model workers did not load")
          })).then((cB => null !== rB && (0, lV.m)(cB) ? rB.then((() => cB)) : cB))
        }(aB, Ec), (cB => {
          cB.startup ? (Gs(), uM({
            site: AB.MODEL_FEED_SITE,
            error: cB.error,
            urls: "" === cB.url ? void 0 : [cB.url]
          }, (() => {
            (0, AB.reportModelFailure)(cB, aB)
          }))) : (0, AB.reportModelFailure)(cB, aB)
        }), {
          onWritten: (cB, Bc) => {
            Hc.glbWritten(cB, Bc)
          },
          onTaken: (cB, Bc) => {
            Hc.glbTaken(cB, Bc)
          },
          onPackFileFailed: (cB, Bc) => {
            console.warn(`${lI} the texture pack's model file ${cB} failed: the shipped one loads`, Bc)
          }
        });
        yu = Fc;
        const Jc = new mI.f(lc);
        AI = Jc, Jc.swap((cB => {
          const Bc = () => {
            (0, AB.reportTerrainTextureFailure)(cB, aB)
          };
          if (hu) return void Bc();
          const nc = () => !hu,
            Vc = null === cB.url ? void 0 : [cB.url];
          uM({
            site: XB.E,
            error: cB.error,
            urls: Vc
          }, Bc, nc)
        })).then((cB => {
          null !== cB && (cB || lc.isStopped || console.warn(`${lI} the core refused the terrain textures: terrain draws untextured`), Zr(lc))
        }));
        const jB = new LB(lc, ((cB, Bc) => {
          console.warn(`${lI} ${cB}`, ...void 0 === Bc ? [] : [Bc])
        }));
        jB.feed(), null !== sc && function(cB, Bc, Vc, Ic, rB, uc) {
          let sc = null,
            Mc = null,
            Pc = !1;
          const qB = {
            textures: null,
            stop: () => {
              var cB, Bc;
              Pc = !0, null === (cB = Mc) || void 0 === cB || cB(), null === (Bc = sc) || void 0 === Bc || Bc(), hV.setSettled(null), null !== Br && wu.clear(Br)
            }
          };
          dI = qB, Mc = bM().follow((Mc => {
            null !== Mc && Promise.all([nc.e(178), nc.e(40)]).then((() => nc(41228))).then((nc => {
              let {
                PackTextures: Oc
              } = nc;
              if (Pc || cB.isStopped) return;
              const Tc = new Oc({
                feed: Mc,
                terrain: Bc,
                backend: Vc,
                stopped: () => cB.isStopped,
                landed: () => {
                  Zr(cB)
                },
                packSwapped: () => {
                  (0, zI.e)(Ic), uc.feed((() => async function(cB) {
                    const Bc = null === cB ? null : await cB.averageColours;
                    return null === Bc ? gn() : YB(Bc)
                  }(Tc.assets))), Ls(Tc.iconOverrides()), rB.refresh().then((cB => {
                    null !== cB && console.info(`${lI} texture pack models: ${cB.resent} of ${cB.delivered} files written again, ${cB.refetched} refetched`)
                  }))
                },
                settled: (cB, Bc, nc) => {
                  var Vc;
                  (hV.setSettled({
                    state: cB,
                    files: Bc
                  }), nc) || function(cB) {
                    const Bc = Br;
                    null !== Bc && wu.apply(Bc, cB).then((Bc => {
                      Bc && cB && console.info(`${lI} the texture pack's animations are in (${Object.keys(cB).length} files)`)
                    }))
                  }(null === (Vc = cB.pack) || void 0 === Vc ? void 0 : Vc.animations)
                },
                settling: () => {
                  hV.setSettled(null)
                },
                warn: Us,
                maxTextureSize: () => Promise.resolve((0, kn.Y)(document.createElement("canvas")))
              });
              qB.textures = Tc, sc = Tc.start()
            }), (cB => {
              console.warn(`${lI} the texture pack's terrain didn't load: the built atlas stays`, cB)
            }))
          }))
        }(lc, Jc, sc, Hc, Fc, jB);
        const Rc = () => {
            lc.setTextureLayers("")
          },
          iB = cB => {
            (MB ??= nc.e(43).then((() => nc(41277))).then((cB => {
              let {
                TEXTURE_NAMES: Bc
              } = cB;
              return Bc
            }), (cB => {
              throw MB = null, cB
            })), MB).then((cB => {
              lc.setTextureLayers(cB) || lc.isStopped || (console.warn(`${lI} the core refused the texture names: textured Boxes draw textureNotFound`), Rc())
            }), (Bc => {
              if (lc.isStopped) return;
              const [nc, ...Vc] = cB;
              void 0 === nc ? uM({
                site: AB.TEXTURE_NAMES_SITE,
                error: Bc
              }, (() => {
                console.warn(`${lI} the texture names didn't load, so textured Boxes draw textureNotFound`, Bc), Rc()
              }), Ec) : setTimeout((() => {
                iB(Vc)
              }), nc)
            }))
          };
        if (iB(wI), null !== sc && !await async function(cB, Bc, nc, Vc, rB, uc) {
            var sc;
            const Mc = (0, kn.N)(nc);
            if (null === Mc) return cB.crash(LI, new Error(`this ${Vc} build has no openRenderer`)), !1;
            let Pc;
            qs = Mc;
            try {
              var qB, Oc, Tc, fc;
              const Ic = null !== (qB = null === (Oc = RI) || void 0 === Oc ? void 0 : Oc.pagePreviews()) && void 0 !== qB ? qB : null,
                sc = null !== (Tc = null === (fc = RI) || void 0 === fc ? void 0 : fc.previewModule(nc)) && void 0 !== Tc ? Tc : null;
              if (null === Ic || null === sc) {
                null === Ic || void 0 === Ic || Ic.endSession(!1), Pc = (0, Sn.i)().sampleCount, await (0, kn.f)(Bc, Mc, uc, aM, Pc, await rB);
                const cB = (0, kn.r)(nc);
                null === cB && console.warn(`${lI} this ${Vc} build has no image registry: sky and model images won't show`), (0, fV.g)(cB)
              } else {
                (0, QV.b)() && await new Promise((() => {}));
                const nc = (0, QV.x)();
                if (null !== nc) {
                  const Bc = (0, kn.T)(Mc);
                  return cB.crash(AB.RENDER_RELOAD_SITE, new Error(`${nc}${void 0===Bc?"":` (${Bc.message})`}`)), !1
                }
                Pc = await Ic.bindSession(sc, Bc, (async cB => (0, kn.B)(Mc, LI, uc, cB, aM, await rB)))
              }
            } catch (Ic) {
              return cB.crash(LI, Ic), !1
            }(function(cB, Bc) {
              const nc = cB,
                {
                  requestCapture: Vc,
                  takeCapture: Ic
                } = nc;
              if ("function" !== typeof Vc || "function" !== typeof Ic) return;
              const rB = {
                request() {
                  Vc.call(nc, Bc)
                },
                take() {
                  var cB;
                  return null !== (cB = Ic.call(nc)) && void 0 !== cB ? cB : null
                }
              };
              window[oV] = rB
            })(Bc, Pc), Mu = !0;
            const mB = performance.now();
            return Pu.boundAtMs = null !== (sc = (0, QV.z)()) && void 0 !== sc ? sc : mB, console.info(`${lI} ${Vc} renderer bound at ${Math.round(mB)} ms`), !cB.isStopped
          }(lc, hc, pc, sc, qB, Tc)) return null;
        if (null !== sc) {
          var Kc, xB, IB;
          (0, nB.B)(sc);
          const cB = () => !lc.isStopped && iM();
          nc.e(175).then((() => nc(8120))).then((Bc => {
            let {
              devTools: nc
            } = Bc;
            lc.isStopped || nc.setHost(function(cB) {
              return {
                tools: ZV,
                async downloadScene(Bc, nc) {
                  let {
                    width: Vc,
                    height: Ic,
                    colouring: rB
                  } = nc;
                  "screenshot" === Bc && null === rB ? await (0, gI.e)(cB, Vc, Ic) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(cB, Bc) {
              return {
                canvas: cB,
                maxTextureSize: UV,
                drawing: Bc,
                resize: (cB, Bc) => {
                  (0, cV.v)(UB.jb.Resize, 0, cB, Bc, (0, cV.i)(1))
                },
                restoreSize: () => {
                  const Bc = (0, Sn.n)(cB);
                  null !== Bc && (0, cV.v)(UB.jb.Resize, 0, Bc.cssWidth, Bc.cssHeight, (0, cV.i)(Bc.renderScale))
                },
                onFrameDrawn: cB => (bI.add(cB), () => {
                  bI.delete(cB)
                })
              }
            }(Tc, cB)))
          }), (cB => {
            console.warn(`${lI} the developer tools didn't load: no captures this session`, cB)
          }));
          const Bc = "webgpu" === sc && null !== (Kc = null === uc || void 0 === uc || null === (xB = uc.adapter) || void 0 === xB ? void 0 : xB.vendor) && void 0 !== Kc ? Kc : null;
          Su = {
            backend: sc,
            canvas: Tc,
            fallbackReason: null !== (IB = null === uc || void 0 === uc ? void 0 : uc.reason) && void 0 !== IB ? IB : null,
            adapterVendor: Bc
          }, Es();
          try {
            (0, yV.q)(sc, Tc, Bc)
          } catch (Ic) {
            (0, yV.t)(), console.error(`${lI} the quality steps didn't start`, Ic)
          }
        }
        const uB = (0, oc.d)(uc, (0, mn.h)());
        if (Lr = (0, oc.g)("webgpu" === sc ? lc : null, uB, Us), Qu) return null;
        if (Cc.reserveAtJoin((0, qI.j)(null !== gB && void 0 !== gB ? gB : HB.c)), lc.isStopped) return null;
        const sB = cB => {
          if (null !== ys) try {
            ys.animationFrame(cB)
          } catch (Ic) {
            ws(Ic)
          }
          if (function(cB, Bc) {
              return Bc && !Qu && !Dr && Ks() && iM() && cB.framePaces(performance.now())
            }(lc, gs)) return lc.writePendingInput(), (0, Sc.f)(cB, Jsc), os(!1, cB), void requestAnimationFrame(sB);
          Fs(lc, gs, "budget") && ((0, tn.g)(lc.lastFrameKind) && iM() && (0, Sc.f)(cB, Jsc), os(gs && Yu, cB), BM(lc), Cc.afterFrame(), requestAnimationFrame(sB))
        };
        requestAnimationFrame(sB);
        return function(cB) {
          if (cB.has("inputLog") && (0, Un.j)((cB => {
              let {
                action: Bc,
                down: nc,
                press: Vc
              } = cB;
              console.info(`${Zn} input ${Bc} ${nc?"down":"up"} press ${Vc} at ${performance.now().toFixed(1)}`)
            })), cB.has("inputDump")) {
            const cB = [];
            Cn = cB, Object.assign(window, {
              bloxdInputDump: () => cB.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), er = function(cB, Bc) {
          let nc = null;
          const Vc = () => {
              null !== nc && (clearInterval(nc), nc = null)
            },
            Ic = () => {
              document.hidden ? nc ??= setInterval((() => {
                Fs(cB, !1, "budget") ? (BM(cB), Bc.afterFrame()) : Vc()
              }), WI) : Vc()
            };
          return document.addEventListener("visibilitychange", Ic), Ic(), () => {
            Vc(), document.removeEventListener("visibilitychange", Ic)
          }
        }(lc, Cc), lc
      }(Bc).then((cB => {
        var Bc;
        (Vc(cu), Ir(null !== cB), nr(cB), null === cB) ? null === (Bc = RI) || void 0 === Bc || Bc.pagePreviews().endSession(null === (0, Ac.t)()): bu("booted")
      }), (cB => {
        Vc(cu), Ir(!1), nr(null), cP({
          site: gr,
          error: cB,
          header: null
        }, cu)
      }))
    }

    function Wu() {
      const cB = Br;
      null !== cB && Cu().then((Bc => {
        let {
          pageBuiltInAnimationPack: nc
        } = Bc;
        nc().provide(cB)
      }), (cB => {
        console.warn(`${lI} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, cB)
      }))
    }
    const wu = new class {
      constructor(cB) {
        this.deps = cB, this.latest = 0, this.XB = null
      }
      apply(cB, Bc) {
        return this.load(cB, Bc, 0)
      }
      async load(cB, Bc, nc) {
        var Vc;
        const Ic = ++this.latest,
          rB = this.deps.compiler;
        if (void 0 === Bc || null === Bc || "object" !== typeof Bc || 0 === Object.keys(Bc).length || null === rB) return this.drop(cB), !1;
        if ((null === (Vc = this.XB) || void 0 === Vc ? void 0 : Vc.module) === cB && (0, NB.vd)(this.XB.files, Bc)) return !1;
        try {
          const [nc, Vc] = await Promise.all([rB(), this.deps.builtIns()]);
          if (Ic !== this.latest) return !1;
          const uc = await nc(Bc, wB, {
            builtIns: Vc
          });
          if (Ic !== this.latest) return !1;
          const sc = this.call(cB, uc);
          if (void 0 === sc) throw new WB("the compiled animations didn't read against the built-in pack");
          return this.XB = {
              module: cB,
              files: Bc
            },
            function(cB) {
              for (let Bc = 0; Bc + 2 < cB.length; Bc += 3) {
                ("error" === cB[Bc] ? console.error : console.warn)(`Animation for the texture pack: ${cB[Bc+1]}: ${cB[Bc+2]}`)
              }
            }(sc), !0
        } catch (sc) {
          var uc;
          if (Ic !== this.latest) return !1;
          this.drop(cB), 0 === nc && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", sc);
          const Vc = (null !== (uc = this.deps.retryAfterMs) && void 0 !== uc ? uc : oB)[nc];
          return void 0 === Vc || sc instanceof WB || (0, EB.i)(cB) || setTimeout((() => {
            Ic === this.latest && this.load(cB, Bc, nc + 1)
          }), Vc), !1
        }
      }
      call(cB, Bc) {
        try {
          return cB.EPc(Bc)
        } catch (nc) {
          throw (0, EB.k)(cB, nc), nc
        }
      }
      clear(cB) {
        this.latest++, this.drop(cB)
      }
      drop(cB) {
        const Bc = this.XB;
        if (this.XB = null, (null === Bc || void 0 === Bc ? void 0 : Bc.module) === cB && !(0, EB.i)(cB)) try {
          this.call(cB, null)
        } catch {}
      }
    }({
      compiler: QB.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: cB
        } = await Cu();
        return cB().whenSet()
      },
      warn: Us
    });
    async function ks(cB, Bc) {
      let Vc = !1;
      await Xu({
        matchmake: async () => {
          const {
            guestJoinTarget: Ic,
            guestJoinWithPack: rB
          } = await nc.e(327).then((() => nc(41218)));
          return Vc ? Ic(cB, Bc, Qs()) : (Vc = !0, rB(cB, Bc, (Bc => Cs(cB, Bc)), Qs))
        },
        onFailure: cB => {
          (0, AB.showJoinFailure)(cB, cu)
        },
        rejoin: Is,
        invalidateTrafficCode: rM
      })
    }
    async function Xu(cB) {
      let {
        matchmake: Bc,
        onFailure: nc,
        rejoin: Ic,
        invalidateTrafficCode: rB,
        pageReady: uc,
        signal: sc
      } = cB;
      const Mc = () => !0 === (null === sc || void 0 === sc ? void 0 : sc.aborted);
      let Pc;
      const qB = hV.rejoinHold(),
        Oc = (0, KB.C)("wasm", nM);
      let Tc = !1,
        fc = performance.now();
      try {
        if (!await ru) return {
          kind: "stopped"
        };
        if (Mc()) return {
          kind: "gs"
        };
        vs().catch((() => {}));
        let cB = await Bc();
        fc = performance.now();
        const nc = () => performance.now() - cB.matchedAt <= cB.freshMs,
          Vc = Fu(cB.target).catch((() => {}));
        nc() && !Mc() && (Pc = new IV(cB.target, {
          signal: sc
        }));
        const rB = performance.now();
        if (null === await Vr) return {
          kind: "stopped"
        };
        var mB;
        if (function(cB) {
            var Bc, nc;
            if (WV.d.markGameEngineConstructed(), HV) return;
            HV = !0;
            const Vc = Math.max(cB, null !== (Bc = kI) && void 0 !== Bc ? Bc : cB);
            (0, wV.h)("ready", Math.max(0, (null !== (nc = XV) && void 0 !== nc ? nc : Vc) - Vc) / 1e3)
          }(rB), await Vc, !nc() && !Mc()) null === (mB = Pc) || void 0 === mB || mB.rematched(), cB = await Bc(), fc = performance.now();
        if (Mc()) return {
          kind: "gs"
        };
        const qB = await async function(cB) {
          var Bc, nc, Vc;
          let {
            signal: Ic,
            rejoin: rB = null,
            early: uc,
            pageReady: sc
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Ic && void 0 !== Ic && Ic.aborted) throw new DOMException("the join was left", "AbortError");
          const Mc = (Pc = Ar, qB = performance.now(), null !== Pc && qB - Pc < Fn);
          var Pc, qB;
          Ar = null;
          const Oc = new AbortController;
          is({
            controller: Oc,
            game: null !== (Bc = null === (nc = cB.session) || void 0 === nc ? void 0 : nc.gameNameWithVariation) && void 0 !== Bc ? Bc : null
          }), Gr = null, null === (Vc = nu) || void 0 === Vc || Vc.abort(), nu = null, Iu = !1, rs = null, uu.clear();
          const Tc = () => {
            (0, qn.h)(Oc, (0, qn.d)(Ic))
          };
          null === Ic || void 0 === Ic || Ic.addEventListener("abort", Tc, {
            once: !0
          });
          try {
            var fc, mB;
            const Bc = await Vr;
            if (null === Bc || Bc.isStopped || Qu) throw new Error("no core is running to join a game with");
            if (cB.session && null !== Lr) {
              const Bc = await Ju(Lr.join(cB.session.gameNameWithVariation), Oc.signal);
              if (null !== Bc) throw new oc.b(Bc)
            }
            const [, , , {
              joinRoom: nc
            }] = await Ju(Promise.all([(0, yB.g)(Bc), Fu(cB), null === sc || void 0 === sc ? void 0 : sc(), vs()]), Oc.signal), Vc = cB.session, Ic = Vc ? {
              ...Ms,
              attachSocket: Bc => {
                const nc = es(Bc, cB.endpoint);
                var Ic;
                null !== nc && (Kr = {
                  conn: nc,
                  info: Vc
                }, null === (Ic = xu) || void 0 === Ic || Ic(Vc.playerDbId));
                return nc
              }
            } : Ms, Pc = await nc(Ic, cB, {
              signal: Oc.signal,
              early: uc
            }).catch((cB => {
              throw function(cB) {
                if (!(cB instanceof bB.b)) return cB;
                if ("roomError" === cB.stage && null !== rs) return Hu(new bB.b(cB.message, cB.stage, cB.code, rs), cB);
                const Bc = "closed" === cB.stage && null !== cs ? uu.get(cs.conn) : void 0;
                return void 0 === Bc ? cB : Hu(new bB.b(cB.message, cB.stage, Bc.code), cB)
              }(cB)
            }));
            if (Rr !== Oc) throw Pc.OV(), new DOMException("the join was left", "AbortError");
            xs(Pc);
            const qB = function(cB) {
              var Bc, nc;
              const {
                session: Vc
              } = cB, Ic = void 0 === Vc ? cB.joinOptions.lobbyName : Vc.lobbyName;
              return {
                endpoint: cB.endpoint,
                game: null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.gameNameWithVariation) && void 0 !== Bc ? Bc : cB.roomName,
                lobby: String(null !== Ic && void 0 !== Ic ? Ic : null),
                postCookies: null !== (nc = cB.postCookies) && void 0 !== nc ? nc : null
              }
            }(cB);
            ju.set(Pc, qB), Gn(qB);
            const Tc = performance.now(),
              ec = {
                conn: Pc.conn,
                rejoin: rB,
                game: null !== (fc = null === (mB = cB.session) || void 0 === mB ? void 0 : mB.gameNameWithVariation) && void 0 !== fc ? fc : "",
                joinedAt: Tc,
                rejoinedAt: Mc ? Tc : null,
                overflow: null
              };
            dr = ec, performance.mark(ZI), Wu(), console.info(`${lI} joined ${cB.roomName} as ${Pc.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const tB = Gr;
            Gr = null, null !== tB && Bs(ec, tB.mask, tB.frames);
            const Sc = uu.get(Pc.conn);
            return uu.clear(), void 0 !== Sc && (xs(null), us(Pc.conn, Sc.code, Sc.reason)), Pc
          } finally {
            var ec;
            null === Ic || void 0 === Ic || Ic.removeEventListener("abort", Tc), Rr === Oc && Ku(Jr, null), (null === (ec = cs) || void 0 === ec ? void 0 : ec.join) === Oc && (cs = null)
          }
        }(cB.target, {
          signal: sc,
          rejoin: Ic(cB.target),
          early: Pc,
          pageReady: uc
        });
        return Tc = !0, {
          kind: "joined",
          game: qB
        }
      } catch (tB) {
        if (tB instanceof DOMException && "AbortError" === tB.name || Mc()) return {
          kind: "gs"
        };
        if (Qu) return {
          kind: "stopped"
        };
        if (Iu && (Iu = !1, await rB().catch((cB => {
            console.warn(`${lI} the cached traffic code could not be dropped`, cB)
          }))), null === await Vr) return {
          kind: "stopped"
        };
        if (tB instanceof oc.b) return nc(tB, performance.now() - fc), {
          kind: "failed",
          error: tB,
          reloading: !1
        };
        if (tB instanceof bB.b && tB.code === Vc.d.wasmClientNotAllowed.code && Lu) return hs("this server refused the wasm client to this account"), {
          kind: "failed",
          error: tB,
          reloading: !0
        };
        const cB = tB instanceof bB.b && tB.code === Vc.d.outdatedVersion.code,
          Bc = () => null === Jr,
          Ic = await uM({
            site: AB.JOIN_SITE,
            error: tB,
            outdated: cB
          }, (() => {
            nc(tB, performance.now() - fc)
          }), Bc);
        return {
          kind: "failed",
          error: tB,
          reloading: Ic
        }
      } finally {
        var ec;
        Tc || Oc.end(), hV.releaseHold(qB);
        const cB = null === (ec = Pc) || void 0 === ec ? void 0 : ec.release();
        cB && (0, AB.reportUnusedSeat)(cB, cu)
      }
    }

    function Hu(cB, Bc) {
      return cB.stack = Bc.stack, cB
    }

    function Fu(cB) {
      return cB.session ? (0, yB.k)(GI, cB.session.gameNameWithVariation) : Promise.resolve()
    }

    function Ju(cB, Bc) {
      return (0, qn.l)(Bc), new Promise(((nc, Vc) => {
        const Ic = () => {
          Vc((0, qn.d)(Bc))
        };
        Bc.addEventListener("abort", Ic, {
          once: !0
        }), cB.then((cB => {
          Bc.removeEventListener("abort", Ic), nc(cB)
        }), (cB => {
          Bc.removeEventListener("abort", Ic), Vc(cB)
        }))
      }))
    }

    function jsc() {
      var cB, Bc;
      return null !== (cB = null === (Bc = Lr) || void 0 === Bc ? void 0 : Bc.runsInJoinedGame()) && void 0 !== cB && cB
    }

    function Ru() {
      is(null)
    }

    function is(cB) {
      var Bc, nc, Vc;
      null === ur || ur.left || (ur.left = !0, null === (Vc = (0, yB.e)()) || void 0 === Vc || Vc.socketLeft(), (0, Oc.t)({
        websocketUrl: null
      }));
      Rr && (0, qn.h)(Rr, new DOMException("the join was left", "AbortError")), Au(null !== cB), null === (Bc = Lr) || void 0 === Bc || Bc.OV();
      const Ic = Jr;
      null !== cB && hV.setGame(cB.game), Ku(null, null !== (nc = null === cB || void 0 === cB ? void 0 : cB.controller) && void 0 !== nc ? nc : null), null === Ic || void 0 === Ic || Ic.OV(), du(0), (0, uB.e)()
    }

    function Ku(cB, Bc) {
      Jr = cB, Rr = Bc, null === Jr && null === Rr && hV.setGame(void 0)
    }

    function xs(cB) {
      Ku(cB, Rr)
    }

    function du(cB) {
      const Bc = KI;
      return null !== kr && !Qu && null !== Bc && !Bc.isStopped && (!!kr(bB.f, 0, (0, bB.r)(cB)) && (or = !0, 0 === cB || Dr || Fs(Bc, !1, "all"), !0))
    }

    function Au() {
      var cB, Bc;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, KB.g)();
      const nc = null !== (cB = null === (Bc = dr) || void 0 === Bc ? void 0 : Bc.overflow) && void 0 !== cB ? cB : null;
      dr = null, null !== nc && (0, AB.reportEventOverflow)(nc, cu)
    }

    function Gu() {
      null !== Jr || null !== Rr ? Ru() : tM()
    }

    function cM(cB, Bc) {
      console.warn(`${lI} the event buffer refused records in ${Bc} frames (categories ${cB})`), Qu || (null !== dr ? Bs(dr, cB, Bc) : null !== Rr && function(cB, Bc, nc) {
        var Vc;
        const Ic = function(cB, Bc) {
          return null === cB ? "drop" : cB.activated ? "keep" : 0 !== (Bc & Hn.g.NetSession) ? "fail" : "drop"
        }((null === (Vc = cs) || void 0 === Vc ? void 0 : Vc.join) === cB ? cs : null, Bc);
        "keep" === Ic ? Gr = {
          mask: Bc,
          frames: nc
        } : "fail" === Ic && (0, qn.h)(cB, new Error("the join's net session was lost to an event overflow"))
      }(Rr, cB, Bc))
    }

    function Bs(cB, Bc, nc) {
      const Vc = cB.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Vc.frames += nc, Vc.acks++, Vc.mask |= Bc;
      const Ic = function(cB, Bc, nc) {
        if (0 === (cB & Hn.g.NetSession)) return "none";
        const Vc = null !== Bc.rejoinedAt && nc - Bc.rejoinedAt < Jn;
        return null === Bc.rejoin || Vc ? "fail" : "rejoin"
      }(Bc, cB, performance.now());
      "none" !== Ic && queueMicrotask((() => {
        if (dr !== cB) return;
        const Bc = "rejoin" === Ic && performance.now() - Bu >= Uc.g;
        Vc.outcome = Bc ? "rejoined" : "failed", ss(function(cB, Bc) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: cB,
            automaticallyReconnect: Bc,
            requiresRefresh: !1
          }
        }(null !== cB.rejoin, Bc), cB.rejoin, Bc), Ru(), Bc && (Ar = performance.now())
      }))
    }

    function ns(cB) {
      gs = cB, Uu && Vs(Uu, cB)
    }

    function Vs(cB, Bc) {
      cB.style.visibility = Bc ? "visible" : "hidden"
    }

    function Is(cB) {
      var Bc;
      const nc = cB.roomName,
        Vc = null !== (Bc = cB.joinOptions.lobbyName) && void 0 !== Bc ? Bc : null;
      return () => {
        ks(nc, Vc)
      }
    }

    function rM() {
      return nc.e(327).then((() => nc(41218))).then((cB => {
        let {
          invalidateGuestTrafficCode: Bc
        } = cB;
        return Bc()
      })).catch((cB => {
        console.warn(`${lI} the cached traffic code could not be dropped`, cB)
      }))
    }

    function us(cB, Bc, nc) {
      var Ic, rB;
      if (Qu) return;
      if ((null === (Ic = dr) || void 0 === Ic ? void 0 : Ic.conn) !== cB) return void(null !== Rr && uu.set(cB, {
        code: Bc,
        reason: nc
      }));
      const {
        rejoin: uc,
        game: sc,
        joinedAt: Mc
      } = dr;
      Au();
      const Pc = (0, Uc.k)(Bc, (0, Rn.f)(cB));
      if (console.info(`${lI} the game's connection closed with code ${Bc} (${null!==(rB=Pc.name)&&void 0!==rB?rB:"unrecognised"})`), Bc !== Vc.d.gameOrPluginKick.code && (0, AB.reportDisconnect)(Pc, cu, {
          closeReason: nc,
          sinceJoinedMs: performance.now() - Mc,
          game: sc
        }), Pc.requiresRefresh) {
        const cB = "outdatedVersion" === Pc.name,
          nc = new Error(`the game's connection closed with code ${Bc}`),
          Vc = () => null === dr && null === Rr;
        return void uM({
          site: AB.JOIN_SITE,
          error: nc,
          outdated: cB
        }, (() => {
          Vc() && ss(Pc, null, !1)
        }), Vc)
      }
      const qB = Pc.canReconnect ? uc : null,
        Oc = null !== qB && Pc.automaticallyReconnect && performance.now() - Bu >= Uc.g;
      ss(Pc, qB, Oc)
    }

    function ss(cB, Bc, nc) {
      var Vc;
      if (bs) return;
      hV.unwantedLeave(nc && null !== Bc && 0 === Vu.size), null === (Vc = nu) || void 0 === Vc || Vc.abort();
      const Ic = new AbortController;
      nu = Ic;
      const rB = null === Bc ? null : () => {
        Ic.signal.aborted || (Ic.abort(), Bc())
      };
      if (nc && null !== rB) {
        Bu = performance.now();
        const cB = setTimeout(rB, Uc.c);
        Ic.signal.addEventListener("abort", (() => {
          clearTimeout(cB)
        }))
      }
      const uc = {
        code: cB.code,
        name: cB.name,
        reason: cB.reason,
        reconnect: rB,
        reconnecting: nc,
        requiresRefresh: cB.requiresRefresh
      };
      if (Vu.size > 0)
        for (const Mc of [...Vu]) try {
          Mc(uc)
        } catch (sc) {
          console.error(`${lI} an unwanted-leave listener threw`, sc)
        } else Xn((0, Wn.g)(cB, null !== rB, nc), Ic.signal).then((Bc => {
          Bc && (null !== rB ? rB() : cB.requiresRefresh && (0, Wc.m)())
        }))
    }
    const Ms = {
      attachSocket: cB => es(cB),
      onConnection: cB => (su.add(cB), () => {
        su.delete(cB)
      }),
      sendRaw: (cB, Bc) => {
        const nc = ur;
        return null !== nc && nc.conn === cB && As(nc, Bc)
      },
      leaveRoom: du,
      closeSocket: cB => {
        var Bc;
        (null === (Bc = ur) || void 0 === Bc ? void 0 : Bc.conn) === cB && tM()
      }
    };

    function Ps(cB) {
      let {
        aux: Bc,
        payload: nc
      } = cB;
      const Vc = KI;
      return null !== Vc && !Vc.isStopped && (Vc.queueOptions(Bc, nc), !0)
    }

    function qM(cB, Bc) {
      Ps(function(cB, Bc) {
        return DV = cB ? {
          preventMovement: Bc
        } : null, cB ? NV(Bc) : {
          aux: UB.Gb.AdEnd,
          payload: vI
        }
      }(cB, Bc))
    }

    function Os(cB) {
      var Bc;
      Xr = cB, null === (Bc = KI) || void 0 === Bc || Bc.setUiPrefs(cB)
    }

    function Ts(cB, Bc) {
      GI.setMaster(cB, Bc)
    }

    function fs(cB) {
      var Bc;
      Hr = cB, null === (Bc = KI) || void 0 === Bc || Bc.setEnvPrefs(cB)
    }

    function mM(cB) {
      var Bc;
      Fr = cB, null === (Bc = KI) || void 0 === Bc || Bc.setLookPrefs(cB)
    }

    function es(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(cB.url).origin;
      if (cB.readyState === WebSocket.CLOSING || cB.readyState === WebSocket.CLOSED) return console.warn(`${lI} a closing or closed socket can't be attached`), null;
      const Vc = KI;
      if (!Vc || Vc.isStopped) return console.warn(`${lI} no core is running to attach a socket to`), cB.close(), null;
      if (null === (0, yB.e)()) return console.warn(`${lI} the game has not started to attach a socket to`), cB.close(), null;
      if (Qr > UB.x) return console.warn(`${lI} this core has attached all the sockets it can; reload to play on`), cB.close(), null;
      if (or && !Dr && (Fs(Vc, !1, "all"), Vc.isStopped || Qu)) return cB.close(), null;
      tM();
      const Ic = Qr++;
      if (!yM(Vc, "open", Ic)) return cB.close(), null;
      cs = null === Rr ? null : {
        join: Rr,
        conn: Ic,
        activated: !1
      }, cB.binaryType = "arraybuffer";
      const rB = {
          ws: cB,
          conn: Ic,
          pending: [],
          pendingBytes: 0,
          left: !1,
          detach: () => {
            cB.removeEventListener("message", uc), cB.removeEventListener("open", sc), cB.removeEventListener("close", Mc)
          }
        },
        uc = cB => {
          cB.data instanceof ArrayBuffer && function(cB, Bc, nc) {
            IM(cB, (() => {
              cB.rings.net.writeFrame(Bc, nc) || cB.crash(XB.t, `a socket frame of ${nc.byteLength} bytes did not fit the net-in ring`)
            }));
            const Vc = cB.rings.net.cursor >= DI;
            (Vc || cB.netWrittenSinceFrame >= vr || document.hidden && performance.now() - Cr >= WI) && Fs(cB, !1, "budget")
          }(Vc, Ic, new Uint8Array(cB.data))
        },
        sc = () => {
          for (const Bc of rB.pending.splice(0)) cB.send(Bc);
          rB.pendingBytes = 0
        },
        Mc = cB => {
          ur === rB && Vc.rings.net.cursor > 0 && Fs(Vc, !1, "all"), ur === rB && (rB.detach(), ur = null, yM(Vc, "close", Ic), Ss(Ic, rB.left), us(Ic, cB.code, cB.reason))
        };
      return cB.addEventListener("message", uc), cB.addEventListener("open", sc), cB.addEventListener("close", Mc), ur = rB, null === (Bc = (0, yB.e)()) || void 0 === Bc || Bc.socketAttached(Ic), (0, Oc.t)({
        websocketUrl: nc
      }), Ic
    }

    function tM() {
      const cB = ur;
      cB && (ur = null, cB.detach(), cB.ws.close(), KI && yM(KI, "close", cB.conn), Ss(cB.conn, cB.left))
    }

    function Ss(cB, Bc) {
      var nc;
      null === (nc = (0, yB.e)()) || void 0 === nc || nc.closeGame(cB), (0, CV.b)().close(cB), Bc || (0, Oc.t)({
        websocketUrl: null
      })
    }

    function yM(cB, Bc, nc) {
      let Vc = !1;
      return IM(cB, (() => {
        const {
          net: Ic
        } = cB.rings;
        Vc = "open" === Bc ? Ic.writeOpen(nc) : Ic.writeClose(nc), Vc || cB.crash(XB.t, `a socket ${Bc} did not fit the net-in ring`)
      })), Vc
    }

    function zM(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (ps()) return (0, AB.reportUnsupportedFallback)(cB, Bc, nc), void hs(`the wasm client can't run here (${Bc})`);
      (0, AB.showUnsupported)(cB, "unsupported", Bc, nc)
    }

    function ps() {
      return Lu && "wasm" !== (0, IB.g)(window.location.search)
    }

    function hs(cB) {
      let {
        forThisPageOnly: Bc = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      console.warn(`${lI} ${cB}: reloading on the JS client`), Bc || (0, IB.j)();
      const nc = () => {
        (0, Wc.i)(IB.m)
      };
      (0, AB.flushCrashReports)(Wc.e).then(nc, nc)
    }

    function aM(cB, Bc, nc, Vc) {
      return Ou(cB, Bc, nc, Vc)
    }

    function ls() {
      null === ms || null === KI || KI.isStopped || Qu || null !== hr || null === kr || (hr = ms(kr, Us, bM().follow))
    }

    function Ys() {
      var cB, Bc, nc;
      return null !== (cB = null === (Bc = dI) || void 0 === Bc || null === (nc = Bc.textures) || void 0 === nc ? void 0 : nc.files()) && void 0 !== cB ? cB : null
    }

    function Ls(cB) {
      nc.e(245).then((() => nc(38746))).then((Bc => {
        let {
          setIconFileOverrides: nc
        } = Bc;
        nc(cB)
      }), (cB => {
        console.warn(`${lI} the item icons couldn't take the texture pack's files`, cB)
      }))
    }

    function gM(cB) {
      bM().follow((Bc => {
        null !== Bc && Promise.all([Promise.all([nc.e(178), nc.e(40)]).then((() => nc(41243))), (0, QV.A)()]).then((cB => {
          let [{
            followPagePackFiles: nc
          }, Vc] = cB;
          const Ic = null === Vc || (0, kn.v)(Vc) ? "webgl" : Vc.backend;
          nc(Bc, zI.d, Ic, (cB => {
            zI.d.setPageFiles(cB)
          }), Us)
        }), (Bc => {
          console.warn(`${lI} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Bc), cB()
        }))
      }))
    }

    function Us(cB, Bc) {
      console.warn(`${lI} ${cB}`, Bc)
    }

    function bM() {
      return xr ??= new jI({
        load: cB => Promise.all([nc.e(178), nc.e(44)]).then((() => nc(41249))).then((Bc => {
          let {
            startPageTexturePackFeed: nc
          } = Bc;
          return nc(Us, cB)
        })),
        store: dB.d,
        PV: cB => {
          Vr.then((() => {
            (0, AB.reportTexturePackFeedLoadFailure)(cB, cu)
          }))
        }
      }), xr
    }
    const Zs = cB => bM().follow(cB);

    function Qs() {
      return bM().loaded()
    }
    const Cs = function(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Ic = 0;
        return async function(rB, uc) {
          let sc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Mc = ++Ic,
            Pc = Vc() + Bc,
            qB = await
          function(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Vc => {
              const Ic = setTimeout((() => {
                Vc(null), cB.then((cB => {
                  null !== cB && (cB.joinedWithout(), nc(cB))
                }))
              }), Bc);
              cB.then((cB => {
                clearTimeout(Ic), Vc(cB)
              }))
            }))
          }(cB(rB), Bc, (cB => {
            Mc === Ic && sc() && uc(cB, Vc() + Bc).catch((cB => {
              nc("the texture pack step after the join failed", cB)
            }))
          }));
          return null === qB ? null : uc(qB, Pc)
        }
      }((cB => (0, xB.k)(cB) ? bM().request() : bM().forJoin()), JV.d, Us),
      vM = function(cB, Bc) {
        let nc = !1;
        return {
          setGamePackConfirm: cB => {
            nc = null !== cB, Bc(cB)
          },
          packStep: (Bc, Vc, Ic) => cB(Bc, Vc, (() => nc && Ic()))
        }
      }(Cs, (cB => {
        bM().setGamePackConfirm(cB)
      }));

    function Ds(cB) {
      vM.setGamePackConfirm(cB)
    }
    async function Ns(cB, Bc, Vc) {
      const {
        gamePackSource: Ic
      } = await nc.e(328).then((() => nc(41222)));
      await vM.packStep(cB, ((nc, Vc) => nc.packForGame(cB, Ic(Bc), Vc)), Vc)
    }

    function Es() {
      if (Qu || null !== ys || null === eu || null === Su) return;
      const {
        backend: cB,
        canvas: Bc,
        fallbackReason: nc,
        adapterVendor: Vc
      } = Su, Ic = eu;
      eu = null;
      try {
        ys = Ic({
          backend: cB,
          canvas: Bc,
          fallbackReason: nc,
          adapterVendor: Vc,
          joinedGame: () => Qu ? null : Jr,
          inGame: Ws,
          shaderPackRuns: jsc,
          writeCmd: (cB, Bc, nc) => null !== kr && kr(cB, Bc, nc),
          takeFailedMeshJobs: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = qu) || void 0 === Bc ? void 0 : Bc.takeFailedMeshJobs()) && void 0 !== cB ? cB : 0
          }
        })
      } catch (rB) {
        console.error(`${lI} the frame telemetry didn't start`, rB)
      }
    }

    function os(cB, Bc) {
      try {
        var nc, Vc, Ic;
        const rB = Mu && null !== (nc = null === (Vc = KI) || void 0 === Vc || null === (Ic = Vc.lastHeader) || void 0 === Ic ? void 0 : Ic.renderPending) && void 0 !== nc ? nc : 0;
        (0, yV.f)(Bc, cB, Ws() && !(null !== DV), rB)
      } catch (rB) {
        (0, yV.t)(), console.error(`${lI} the quality steps stopped`, rB)
      }
    }

    function Ws() {
      return null !== Jr && lu === Jr && !Qu
    }

    function ws(cB) {
      const Bc = ys;
      ys = null;
      try {
        null === Bc || void 0 === Bc || Bc.stop()
      } catch {}
      console.error(`${lI} the frame telemetry threw: it stops`, cB)
    }

    function kM(cB) {
      var Bc;
      if ((0, CV.b)().fire(cB), "message" === cB.type) {
        if (Nr++, cB.Uu === UB.hc.ERROR && null !== Rr) {
          var nc;
          const {
            text: Bc,
            dropsCache: Vc
          } = (0, Uc.q)((new TextDecoder).decode(cB.payload));
          Iu ||= Vc, (null === (nc = cs) || void 0 === nc ? void 0 : nc.conn) === cB.conn && (rs = Bc)
        }
        return
      }
      if (cB.phase === UB.A.Left) Er = cB.conn;
      else if (cB.phase === UB.A.Activated) {
        var Vc;
        rn.d.reset(), (null === (Vc = cs) || void 0 === Vc ? void 0 : Vc.conn) === cB.conn && (cs.activated = !0)
      }
      const Ic = Object.keys(UB.A).find((Bc => UB.A[Bc] === cB.phase)),
        rB = 0 === cB.code ? "" : ` (code ${cB.code})`;
      console.info(`${lI} conn ${cB.conn}: ${null!==Ic&&void 0!==Ic?Ic:cB.phase}${rB}, ${Nr} raw messages so far`), (null === (Bc = Jr) || void 0 === Bc ? void 0 : Bc.conn) !== cB.conn || cB.phase !== UB.A.Left && cB.phase !== UB.A.Closed || xs(null), iu !== cB.conn || cB.phase !== UB.A.Left && cB.phase !== UB.A.Closed || (iu = null, null === Jr && null === Rr && hV.setGame(void 0));
      for (const sc of [...su]) try {
        sc(cB.conn, cB.phase, cB.code)
      } catch (uc) {
        (0, bn.s)(uc, `${lI} a connection listener threw`)
      }
    }

    function Xs() {
      (0, QV.n)(), queueMicrotask((() => {
        try {
          Gs()
        } catch (cB) {
          console.warn(`${lI} stopping before the reload threw`, cB)
        }(0, AB.flushCrashReports)(Wc.e).then(Wc.m, Wc.m)
      }))
    }

    function Hs() {
      const cB = KI;
      null === cB || cB.isStopped || null === ur || Dr || !cB.hasPendingCommands() || Fs(cB, !1, "budget")
    }

    function Fs(cB, Bc, nc) {
      let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ic = Dr;
      Dr = !0;
      try {
        return function(cB, Bc, nc, Vc) {
          var Ic, rB, uc;
          if (Qu) return !1;
          if (IM(cB, jM), Qu || cB.isStopped) return !1;
          xM() && bu("modelsIn");
          Cr = performance.now(), Er = null, or = !1, (0, Sc.N)(), null === (Ic = tu) || void 0 === Ic || Ic.beforeFrame(), vV(Cr, cB), (0, Sc.F)(Cr, Rs), vu = !0;
          const sc = Bc && Ks();
          let Mc;
          try {
            Mc = cB.frame(Cr, sc, nc)
          } finally {
            vu = !1
          }
          if (!Mc) return !1;
          ts.observe(null !== (rB = null === (uc = cB.lastHeader) || void 0 === uc ? void 0 : uc.chunksCancelled) && void 0 !== rB ? rB : 0);
          const Pc = cB.lastFrameKind;
          Bc && (Yu = (0, tn.b)(Pc));
          if (null !== ys) try {
            ys.frameRan(cB, Cr, performance.now(), Pc)
          } catch (Oc) {
            ws(Oc)
          }
          "drawn" === Pc && iM() && function() {
            for (const cB of [...bI]) cB()
          }();
          cB.forEachNetOut(ds);
          const qB = ur;
          null !== Er && (null === qB || void 0 === qB ? void 0 : qB.conn) === Er && As(qB, bB.g);
          Bc && function(cB) {
            var Bc, nc, Vc;
            if (null === Jr || !Ks()) return;
            const Ic = cB.lastHeader,
              rB = !Mu || 0 === (null === Ic || void 0 === Ic ? void 0 : Ic.renderPending);
            !as && rB && (as = !0, performance.mark(CI));
            if (lu === Jr) return;
            const uc = null !== (Bc = null === Ic || void 0 === Ic ? void 0 : Ic.firstView) && void 0 !== Bc ? Bc : UB.U.NotYet;
            if (Mu && uc === UB.U.NotYet) return;
            if (hu && (!0 !== (null === (nc = (0, yB.e)()) || void 0 === nc ? void 0 : nc.isSessionLive) || !rB)) return;
            lu = Jr;
            const sc = Jr;
            if (setTimeout((() => {
                Jr === sc && (0, pB.d)()
              }), 0), null === (Vc = Lr) || void 0 === Vc || Vc.playable(), hu) return;
            hu = !0, performance.mark(QI);
            const Mc = Math.round(performance.now());
            Mu && uc === UB.U.Backstop ? console.warn(`${lI} playable at ${Mc} ms on the first view's backstop: it wasn't drawn whole in time`) : console.info(`${lI} playable at ${Mc} ms${Mu?"":" (no renderer)"}`);
            setTimeout(fu, 0), (0, sB.g)().catch((cB => {
              console.error(`${lI} item sprites didn't load, so item particles show the missing texture`, cB)
            }))
          }(cB);
          (0, XB.T)(cB, {
            worldgen: Mr,
            mesh: qu
          }),
          function(cB) {
            cB.forEachEvent(Nn);
            for (const Bc of Dn) try {
              (0, Un.b)(Bc)
            } catch (Oc) {
              if ((0, bn.k)(Oc)) {
                cB.crashOn(XB.j, Oc);
                break
              }
              console.error(`${Zn} an input action listener threw`, Oc)
            }
            Dn.length = 0
          }(cB), Vc && (0, eB.e)();
          return !cB.isStopped
        }(cB, Bc, "all" === nc || cB.rings.net.cursor >= DI || cB.netKeptFrames >= NI, Vc)
      } finally {
        Dr = Ic
      }
    }

    function Jsc(cB) {
      console.error(`${lI} a frame-start listener threw`, cB)
    }

    function jM() {
      var cB, Bc, nc, Vc;
      null === (cB = yu) || void 0 === cB || cB.drain(kr, XI), null === (Bc = au) || void 0 === Bc || Bc.drain(kr), null === (nc = lr) || void 0 === nc || nc.drain(performance.now()), Tu(kr), null === (Vc = hr) || void 0 === Vc || Vc.drain()
    }

    function Rs(cB) {
      console.error(`${lI} a before-frame listener threw`, cB)
    }

    function iM() {
      return Mu && Ks()
    }

    function Ks() {
      return Yr && xM()
    }

    function xM() {
      return null === yu || yu.startupDone
    }

    function ds(cB, Bc) {
      const nc = ur;
      (null === nc || void 0 === nc ? void 0 : nc.conn) === cB ? As(nc, Bc) : ku++
    }

    function As(cB, Bc) {
      const {
        ws: nc
      } = cB;
      return nc.readyState === WebSocket.OPEN ? (nc.send(Bc), !0) : nc.readyState === WebSocket.CONNECTING && cB.pendingBytes + Bc.byteLength <= EI ? (cB.pending.push(Bc.slice()), cB.pendingBytes += Bc.byteLength, !0) : (ku++, !1)
    }

    function Gs() {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB;
      Qu = !0, (0, Sc.M)().unlockPointer(), (0, Sc.J)(null), null === (cB = Sr) || void 0 === cB || cB(), Sr = null, null === (Bc = (0, yB.l)()) || void 0 === Bc || Bc.followCursorAim(null), (0, eB.E)(), (0, yB.c)(), GI.stop(), null === (nc = zs) || void 0 === nc || nc(), zs = null, null === (Vc = pu) || void 0 === Vc || Vc(), pu = null, null === (Ic = ys) || void 0 === Ic || Ic.stop(), ys = null, (0, cV.o)(null), null === (rB = sr) || void 0 === rB || rB(), sr = null, null === (uc = Mr) || void 0 === uc || uc.stop(), Mr = null, null === (sc = qu) || void 0 === sc || sc.stop(), qu = null, null !== (Mc = dI) && void 0 !== Mc && null !== (Pc = Mc.textures) && void 0 !== Pc && Pc.assets && Ls(null), null === (qB = dI) || void 0 === qB || qB.stop(), dI = null, AI = null;
      const zB = Or;
      Or = null, zB && (zB.stop(), VM(zB)), null === (Oc = au) || void 0 === Oc || Oc.dispose(), au = null, null === (Tc = lr) || void 0 === Tc || Tc.dispose(), lr = null, yu = null, null === (fc = pr) || void 0 === fc || fc(), pr = null, null === (mB = er) || void 0 === mB || mB(), er = null, null === (ec = tu) || void 0 === ec || ec.stop(), tu = null, Ru(), hV.release(), tM();
      const pc = hr;
      hr = null;
      try {
        null === pc || void 0 === pc || pc.dispose()
      } catch (hc) {
        console.warn(`${lI} the sky's images didn't release`, hc)
      }(0, fV.g)(null), null === (tB = RI) || void 0 === tB || tB.pagePreviews().endSession(null === (0, Ac.t)())
    }

    function cP(cB, Bc) {
      var nc, Vc;
      const Ic = null !== (nc = null === (Vc = Or) || void 0 === Vc ? void 0 : Vc.details()) && void 0 !== nc ? nc : {},
        rB = cB.site === LI || cB.site === gr || cB.site === AB.RENDER_RELOAD_SITE || cB.site === UI ? cB.error instanceof WebAssembly.RuntimeError || cB.error instanceof EB.b : !(0, kn.w)(cB.error) && (0, XB.L)(cB);
      rB && cB.error instanceof Error && (0, Ac.R)(cB.error);
      const uc = rB || cB.site === XB.v ? (0, AB.readTrap)(cB.error) : null,
        sc = null !== uc && (0, ZB.b)(uc.kind, uc.refusedBytes) ? uc.refusedBytes : 0,
        Mc = null === Tr ? (0, qI.p)(function() {
          try {
            return (0, Ac.y)().buffer.byteLength
          } catch {
            return 0
          }
        }(), sc, null) : Tr.ceilingMayRefuse(sc),
        Pc = sc > 0 && !Mc && ps();
      var qB;
      if (Pc && ((0, IB.j)(), Zu = !0), Gs(), (0, QV.b)()) return console.warn(`${lI} the session stopped at ${cB.site} as the page reloads`, cB.error), void((0, kn.w)(cB.error) || (null === (qB = cB.header) || void 0 === qB ? void 0 : qB.lastError) === UB.F.CoreBusy || (0, AB.reportStoppedCore)(cB, Bc, uc, {
        memoryDetails: Ic,
        declined: Pc
      }));
      (0, AB.showCrash)(cB, Bc, uc, {
        memoryDetails: Ic,
        declined: Pc
      })
    }

    function BM(cB) {
      const {
        input: Bc,
        net: nc,
        worker: Vc
      } = cB.rings, Ic = cB.optionsDropped, rB = Bc.dropped + Ic + nc.dropped + Vc.dropped + ku;
      rB !== wr && function(cB, Bc) {
        const nc = performance.now();
        return !(nc - Wr[cB] < oI) && (Wr[cB] = nc, console.warn(`${lI} ${Bc}`), !0)
      }("dropped", `${rB} records dropped so far (input ${Bc.dropped}, options ${Ic}, net ${nc.dropped}, worker ${Vc.dropped}, net-out ${ku})`) && (wr = rB)
    }

    function nM() {
      var cB, Bc, nc, Vc;
      const Ic = (0, RB.e)(),
        rB = null === Ic ? null : (0, xn.g)(Ic);
      return {
        ...null === (cB = Or) || void 0 === cB ? void 0 : cB.pageKillSnapshot(),
        renderDistance: null === rB ? null : Math.min(rB.horizontal, null !== (Bc = null === (nc = Or) || void 0 === nc ? void 0 : nc.shedDistanceInUse()) && void 0 !== Bc ? Bc : 1 / 0),
        renderDistanceVertical: null !== (Vc = null === rB || void 0 === rB ? void 0 : rB.vertical) && void 0 !== Vc ? Vc : null,
        chunkCap: fr,
        budgetBasis: mu
      }
    }

    function VM(cB) {
      console.info(`${lI} wasm memory at the session's end`, cB.details())
    }

    function IM(cB, Bc) {
      if (!cB.isStopped) try {
        Bc()
      } catch (nc) {
        cB.crash(XB.w, nc)
      }
    }
    async function rP() {
      const {
        createWorldgenWorker: cB,
        worldgenWorkerReady: Bc
      } = await (Pr ??= nc.e(59).then((() => nc(41258))).catch((cB => {
        throw Pr = null, cB
      })), Pr);
      return await Bc(), cB
    }

    function uM(cB, Bc, nc) {
      return async function(cB, Bc, nc) {
        let {
          stop: Vc,
          stillWanted: Ic
        } = nc;
        const rB = await (0, jV.i)(cB, {
          stillWanted: Ic,
          beforeReload: async () => {
            Vc(), await (0, AB.flushCrashReports)(Wc.e)
          },
          reload: Wc.m
        });
        return rB || Bc(), rB
      }(cB, Bc, {
        stop: Gs,
        stillWanted: nc
      })
    }

    function sM(cB) {
      ! function(cB, Bc) {
        cB((cB => {
          null === cB || void 0 === cB || cB.subscribe((cB => {
            let {
              pack: nc,
              gameSource: Vc
            } = cB;
            Bc(null === Vc || null === nc ? null : {
              pack: nc,
              source: "" === Vc ? null : Vc
            })
          }))
        }))
      }(Zs, cB)
    }
    let MM = !1,
      PM = null,
      qP = !1,
      OM = !1;

    function TM() {
      var cB;
      MM || (MM = !0, ou("play", Ec), (0, Oc.q)(new aP), sc.gameBridge.attach(gB), SM().catch((() => {})), (0, yB.m)((cB => {
        iB(cB.setTextHost)
      })), cB = eM, Vu.add(cB), function(cB) {
        for (const Bc of gu) cB(Bc);
        Ur.add(cB)
      }((cB => {
        mP(fM[cB])
      })))
    }
    const fM = {
      booted: rB.h.INITIALISE_NOA,
      texturesIn: rB.h.REGISTRATION,
      modelsIn: rB.h.SETUP_LIFEFORMS
    };

    function mP(cB) {
      Mc.i.Vu("matchmakeAndPlayStepCompleted", {
        step: cB,
        totalSubSteps: 1
      })
    }

    function eM(cB) {
      if (!qP) return;
      const {
        gameNameWithVariation: Bc,
        lobbyName: nc
      } = (0, Oc.d)();
      if (cB.code === Vc.d.serverUpdating.code) return (new aP).leaveLive(), void tP(Bc, nc);
      Mc.i.Vu("unwantedLeftGame", {
        reason: "gameOrPluginKick" === cB.name ? cB.reason : `You have disconnected from the server.\n${cB.reason}`,
        requiresRefresh: cB.requiresRefresh,
        canReconnect: null !== cB.reconnect,
        automaticallyReconnect: cB.reconnecting,
        gameNameWithVariation: Bc,
        lobbyName: nc
      }), (new aP).leaveLive()
    }

    function tP(cB, Bc) {
      var Vc;
      Vc = (0, Pc.H)(cB, Bc), Promise.resolve().then((() => nc(1330))).then((cB => {
        let {
          navigatePreserveSearch: Bc
        } = cB;
        Bc(Vc)
      })).catch((cB => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", cB), (0, Wc.h)(Vc)
      }))
    }

    function SM() {
      return PM ??= Promise.all([nc.e(60), nc.e(63), nc.e(62), nc.e(61), nc.e(73), nc.e(72), nc.e(224), nc.e(199), nc.e(222), nc.e(223), nc.e(41)]).then((() => nc(38690))).then((cB => {
        try {
          cB.attachPlayGameSources()
        } catch (Bc) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Bc),
            function(cB) {
              Vr.then((Bc => {
                null === Bc || Bc.isStopped || Qu ? console.warn(`${lI} the play sources threw as they attached, after the client stopped`, cB) : cP({
                  site: UI,
                  error: cB,
                  header: null
                }, cu)
              }))
            }(Bc), Bc
        }
      }), (cB => {
        throw PM = null, new yB.b(cB)
      })), PM
    }
    async function yP(cB, Bc) {
      TM(), qP = !0;
      let nc = {
          place: cB.place,
          matchedAt: cB.matchedAt
        },
        uc = cB.place.gameNameWithVariation,
        sc = null;
      const Mc = await Xu({
        matchmake: async () => {
          let Bc = nc;
          if (nc = null, null === Bc) {
            const nc = await cB.rematch();
            if (nc.isError()) throw sc = nc.asError().forward(), new Error(nc.asError().message);
            Bc = {
              place: nc.getValue(),
              matchedAt: performance.now()
            }
          }
          uc = Bc.place.gameNameWithVariation;
          return {
            target: await (0, Zc.c)(cB.userContext, Bc.place, Qs()),
            matchedAt: Bc.matchedAt,
            freshMs: Zc.b
          }
        },
        pageReady: SM,
        onFailure: (cB, Bc) => {
          null === sc && function(cB, Bc) {
            (0, AB.reportPageJoinFailure)(cB, cu, Bc)
          }(cB, {
            sinceJoinStartMs: Bc,
            game: uc
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => cB.userContext.invalidateTrafficCode(),
        signal: Bc
      });
      switch (Mc.kind) {
        case "joined":
          return OM || (OM = !0, (0, mB.d)()), qP ? (mP(rB.h.CONNECT_TO_GAME_SERVER), mP(rB.h.SHADER_PACK), jsc() && (0, fc.g)(cB.userContext, uc).catch((cB => {
            console.error("Failed to report the shader pack session", cB)
          })), function() {
            const cB = function() {
              var cB, Bc;
              return null !== (cB = null === (Bc = Lr) || void 0 === Bc ? void 0 : Bc.couldntRunInJoinedGame()) && void 0 !== cB ? cB : null
            }();
            null !== cB && (0, fc.e)(cB)
          }(), Ic.d.value(void 0)) : hM("The server ended the game as it joined");
        case "failed":
          if (!Mc.reloading) {
            if (null !== sc) return sc;
            if ((Mc.error instanceof bB.k || Mc.error instanceof bB.b) && Mc.error.code === Vc.d.serverUpdating.code) {
              if (Bc.aborted) return hM("Left the game while it loaded");
              const {
                gameNameWithVariation: cB,
                lobbyName: nc
              } = (0, Oc.d)();
              return tP(cB, nc), hM("The server is updating")
            }
            return Mc.error instanceof oc.b ? Ic.d.errorWithCode(Mc.error.messageKey, rB.h.SHADER_PACK, {
              severity: "medium"
            }) : Ic.d.errorWithCode(function(cB) {
              if (cB instanceof bB.p) return cB.message;
              if (zP(cB)) return (0, Uc.m)(cB.code, cB.serverText);
              return Uc.j
            }(Mc.error), rB.h.CONNECT_TO_GAME_SERVER, {
              error: (Pc = Mc.error, Pc instanceof bB.p || zP(Pc) ? void 0 : Mc.error),
              severity: pM(Mc.error)
            })
          }
          return hM("Reloading into the new build");
        case "stopped":
          return hM("The game client stopped, and shows why");
        case "gs":
          return hM("Left the game while it loaded")
      }
      var Pc
    }

    function zP(cB) {
      return cB instanceof bB.k || cB instanceof bB.b && "attach" !== cB.stage
    }

    function pM(cB) {
      return zP(cB) ? cB instanceof bB.b && (0, Uc.k)(cB.code).requiresRefresh ? "medium" : "low" : "medium"
    }

    function hM(cB) {
      return Ic.d.errorWithCode(cB, rB.h.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        gs: !0
      })
    }
    class aP {
      OV(cB) {
        if ((0, tB.c)()) {
          var Bc, nc;
          if ((0, uc.c)()) return;
          (0, Tc.e)(!0 === (null === (Bc = (0, tB.k)()) || void 0 === Bc || null === (nc = Bc.currentViewer) || void 0 === nc ? void 0 : nc.unsavedChanges), cB)
        } else this.leaveLive()
      }
      leaveLive() {
        var cB;
        if (null === (cB = Qs()) || void 0 === cB || cB.endGamePack(), !qP) return;
        qP = !1, (0, ec.h)();
        try {
          var Bc;
          null === (Bc = (0, yB.l)()) || void 0 === Bc || Bc.clearWasmCameraScreen()
        } catch (Vc) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Vc)
        }
        const {
          gameNameWithVariation: nc
        } = (0, Oc.d)();
        try {
          Gu()
        } finally {
          (0, Oc.t)({
            websocketUrl: null
          }), Mc.i.Vu("leaveGame", {
            gameNameWithVariation: nc
          }), (0, qB.R)()
        }
      }
      isReplay() {
        return (0, tB.c)()
      }
    }
  },
  8166: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc,
      i: () => qB,
      m: () => sc,
      o: () => Tc
    });
    var Vc = nc(107),
      Ic = nc(51),
      rB = nc(8172);
    const uc = "rendererGpuVendor";

    function sc() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let Mc = null;

    function Pc() {
      return Mc ??= Oc(), Mc
    }

    function qB() {
      var cB;
      return null !== (cB = Mc) && void 0 !== cB ? cB : Oc()
    }

    function Oc() {
      var cB;
      const Bc = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        nc = Ic.h.getItem(uc),
        Mc = null !== (cB = (0, Vc.peekGpuVendor)()) && void 0 !== cB ? cB : "string" === typeof nc ? nc : null;
      return !sc() && function(cB, Bc) {
        return (0, rB.o)(cB) || "powervr" === Bc
      }(Bc, Mc)
    }

    function Tc(cB) {
      const Bc = (0, Vc.normaliseGpuVendor)(cB);
      Ic.h.getItem(uc) !== Bc && Ic.h.setItem(uc, Bc)
    }
  },
  38989: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => Vc,
      h: () => sc,
      l: () => uc
    });
    const Vc = 12e4,
      Ic = 3e4,
      rB = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: cB => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", cB), () => {
          document.removeEventListener("visibilitychange", cB)
        })
      };

    function uc(cB) {
      return `it sent no start within ${Math.round(cB)} ms`
    }
    class sc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rB;
        this.timeoutMs = cB, this.onTimeout = Bc, this.now = nc, this.visibility = Vc, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Vc.listen((() => {
          this.onVisibility()
        })), Vc.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const cB = this.step;
        return null === cB ? 0 : Math.min(this.now() - cB.at, cB.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const cB = this.timeoutMs - this.counted;
        if (cB <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Bc = Math.min(cB, 5e3);
        this.step = {
          at: this.now(),
          ms: Bc
        }, this.arm(Bc, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(cB, Bc) {
        this.timer = setTimeout((() => {
          this.timer = null, Bc()
        }), cB)
      }
    }
  },
  38856: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    const Vc = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4
    }
  },
  37245: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(2870);
    const Ic = ["none", "idle", "now"];

    function rB() {
      const cB = () => (0, Vc.G)();
      return {
        memoryBytes: () => (0, Vc.y)().buffer.byteLength,
        reserveUpFront: Bc => cB().tB(Bc),
        reserveAhead: Bc => cB().ec(Bc),
        setCeiling: Bc => {
          cB().Sc(Bc)
        },
        lowWater: () => Ic[cB().mB()] ?? "none",
        stats: () => function(cB) {
          const Bc = new Uint32Array((0, Vc.y)().buffer, cB, 17),
            nc = cB => Bc[cB] ?? 0,
            Ic = cB => ({
              upFront: nc(cB),
              ahead: nc(cB + 1),
              onDemandInFrame: nc(cB + 2),
              onDemand: nc(cB + 3)
            });
          return {
            memoryBytes: nc(0),
            initialBytes: nc(1),
            liveBytes: nc(2),
            peakLiveBytes: nc(3),
            headroomBytes: nc(4),
            unusedBytes: nc(5),
            ceilingBytes: nc(6),
            reservesRefused: nc(7),
            grows: Ic(8),
            grownBytes: Ic(12),
            allocationsRefused: nc(16)
          }
        }(cB().yB()),
        takeBallast: () => cB().zB(),
        takePressure: () => cB().hc()
      }
    }
  },
  5610: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => pc,
      g: () => hc,
      j: () => yB,
      l: () => Sc
    });
    var Vc = nc(5616);
    const Ic = 6,
      rB = 3,
      uc = 1,
      sc = 2,
      Mc = 4,
      Pc = 8,
      qB = 16,
      Oc = 32,
      Tc = 64,
      fc = 128,
      mB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ec(cB) {
      if (!cB) return 0;
      const Bc = mB.indexOf(cB);
      if (Bc <= 0) throw new Error(`"${cB}" is not a shader pack hook function`);
      return Bc
    }

    function tB(cB) {
      if (0 === cB) return null;
      const Bc = mB[cB];
      if (void 0 === Bc) throw new Error(`${cB} is not a shader pack hook function id`);
      return Bc
    }

    function Sc(cB) {
      const Bc = Vc.b.length;
      return {
        strict: cB >= Bc,
        program: Vc.b[cB % Bc]
      }
    }

    function yB(cB) {
      return Number(cB.strict) * Vc.b.length + Vc.b.indexOf(cB.program)
    }

    function zB(cB) {
      return "" === cB ? [] : cB.split(" ")
    }

    function pc(cB) {
      const Bc = {
        variantFlags: new Uint8Array(Ic),
        hooks: new Uint8Array(Ic * rB),
        moduleCodes: Array(Ic).fill(""),
        reads: Array(2 * Ic).fill("")
      };
      for (const nc of cB) {
        const cB = yB(nc.key),
          Vc = (cB, Bc) => null === nc.hooks.surface || nc.reads.fragment.includes(cB) ? 0 : Bc;
        Bc.variantFlags[cB] = (nc.sceneDepth ? uc : 0) | (nc.movesVertices ? sc : 0) | (nc.sunShadow ? Mc : 0) | (nc.airShadow ? Pc : 0) | (nc.discards ? qB : 0) | Vc("localPosition", Oc) | Vc("enchantSpeed", Tc) | Vc("enchantTier", fc), Bc.hooks[cB * rB] = ec(nc.hooks.vertex), Bc.hooks[cB * rB + 1] = ec(nc.hooks.surface), Bc.hooks[cB * rB + 2] = ec(nc.hooks.light), Bc.moduleCodes[cB] = nc.moduleCode, Bc.reads[2 * cB] = nc.reads.vertex.join(" "), Bc.reads[2 * cB + 1] = nc.reads.fragment.join(" ")
      }
      return Bc
    }

    function hc(cB) {
      const {
        hooks: Bc,
        moduleCodes: nc,
        reads: Vc
      } = cB;
      return Array.from(cB.variantFlags, ((cB, Ic) => {
        const Oc = Ic * rB;
        return {
          key: Sc(Ic),
          hooks: {
            vertex: tB(Bc[Oc]),
            surface: tB(Bc[Oc + 1]),
            light: tB(Bc[Oc + 2])
          },
          moduleCode: nc[Ic],
          sceneDepth: 0 !== (cB & uc),
          sunShadow: 0 !== (cB & Mc),
          airShadow: 0 !== (cB & Pc),
          movesVertices: 0 !== (cB & sc),
          discards: 0 !== (cB & qB),
          reads: {
            vertex: zB(Vc[2 * Ic]),
            fragment: zB(Vc[2 * Ic + 1])
          }
        }
      }))
    }
  },
  38872: (cB, Bc, nc) => {
    nc.d(Bc, {
      B: () => ec,
      D: () => fc,
      H: () => mB,
      c: () => Ic,
      g: () => Vc,
      h: () => Tc,
      i: () => qB,
      m: () => tB,
      q: () => rB,
      s: () => sc,
      w: () => Mc,
      y: () => uc
    });
    const Vc = 3,
      Ic = 0,
      rB = 1,
      uc = 2,
      sc = {
        uniform: 3,
        NB: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Mc = 10,
      Pc = "BloxdPackInputs",
      qB = "bloxdPackInputs",
      Oc = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      Tc = 80;

    function fc() {
      const cB = Oc.map((cB => {
        let {
          name: Bc,
          type: nc
        } = cB;
        return `    ${Bc}: ${nc},\n`
      })).join("");
      return `struct ${Pc} {\n${cB}}\n@group(${Vc}) @binding(${Ic}) var<uniform> ${qB}: ${Pc};\n`
    }

    function mB(cB, Bc) {
      const nc = new DataView(cB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Tc),
        [Vc, Ic, rB, uc, sc, Mc] = Oc;
      nc.setFloat32(Vc.offset, Bc.seconds, !0), nc.setUint32(Ic.offset, Bc.lit ? 1 : 0, !0);
      for (let Pc = 0; Pc < 3; Pc++) nc.setInt32(rB.offset + 4 * Pc, Bc.renderOffset[Pc], !0), nc.setFloat32(uc.offset + 4 * Pc, Bc.Duc[Pc], !0), nc.setFloat32(sc.offset + 4 * Pc, Bc.eyePosition[Pc], !0), nc.setFloat32(Mc.offset + 4 * Pc, Bc.shadowDirection[Pc], !0)
    }

    function ec(cB) {
      const Bc = new Uint32Array(Math.max(1, cB.length));
      return cB.forEach(((cB, nc) => {
        let {
          id: Vc,
          rotation: Ic
        } = cB;
        Bc[nc] = 65535 & Vc | (3 & Ic) << 16
      })), Bc
    }
    const tB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5616: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc,
      d: () => Ic,
      f: () => rB
    });
    const Vc = ["terrain", "liquid", "model"];

    function Ic(cB) {
      return !cB.hooks.vertex && !cB.hooks.surface && !cB.hooks.light
    }

    function rB(cB, Bc) {
      return "off" !== Bc && (null === cB || cB.some((cB => cB.key.strict === ("strict" === Bc) && !Ic(cB))))
    }
  },
  38887: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return Ic(cB, Bc) ? `trap=alloc_failed ${Bc} bytes` : `trap=${cB}`
    }

    function Ic(cB, Bc) {
      return "unreachable" === cB && Bc > 0
    }

    function rB(cB, Bc, nc) {
      const Vc = function(cB) {
        return cB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(cB.message) ? "unreachable" : /out of bounds/i.test(cB.message) ? "out_of_bounds" : "runtime_error" : (cB instanceof RangeError || cB instanceof Error && "InternalError" === cB.name) && /call stack|recursion/i.test(cB.message) ? "stack_overflow" : "js_error"
      }(cB);
      if ("unreachable" !== Vc) return {
        kind: Vc,
        panic: null,
        refusedBytes: 0
      };
      const Ic = Bc(),
        rB = nc();
      return {
        kind: Vc,
        panic: rB > 0 ? null : Ic,
        refusedBytes: rB
      }
    }
    nc.d(Bc, {
      b: () => Ic,
      d: () => sc,
      h: () => rB,
      l: () => Vc
    });
    const uc = 300;

    function sc(cB) {
      return cB.replace(/\s*\n\s*/g, " / ").slice(0, uc)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);