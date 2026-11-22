export const id = 63;
export const ids = [63, 115, 116, 135];
export const modules = {
  39200: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      d: () => fk
    });
    const Dk = "The world isn't loaded, so no blocks can be seen.",
      fk = "The world isn't loaded, so nothing in it can be seen."
  },
  33673: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = new Set(["chunkBorders"])
  },
  33801: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      e: () => fk,
      f: () => Mk
    });
    var Dk = ik(1537);

    function fk(kk) {
      var ek;
      return {
        ...bk.store,
        yaw: bk.store.yaw + (null !== (ek = Dk.c[kk].previewYaw) && void 0 !== ek ? ek : 0)
      }
    }
    const Sk = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      bk = {
        player: Sk,
        store: {
          ...Sk,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function rk(kk, ek) {
      kk instanceof Promise ? kk.then(ek).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : ek(kk)
    }
    class Pk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var ek;
        this.view = kk, null === (ek = this.opened) || void 0 === ek || ek.show(kk)
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class mk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, ek;
        return null !== (kk = null === (ek = this.opened) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, ek) {
        var ik;
        null === (ik = this.opened) || void 0 === ik || ik.setCosmetic(kk, ek)
      }
      playEmote(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.playEmote(kk)
      }
      setOrbit(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var ek;
        await this.ready, await (null === (ek = this.opened) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Mk = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(kk) {
        this.host = kk
      }
      setDefaultHost(kk) {
        this.makeDefault = kk
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(kk) {
        return new Pk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new Pk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new Pk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, ek) {
        return new mk(this.current().openCharacter(kk, ek))
      }
    }
  },
  4961: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.g,
      e: () => fk,
      g: () => Dk.l
    });
    var Dk = ik(4965);
    const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
      strict: kk,
      program: ek
    })))))
  },
  38787: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ShaderPackPage: () => Pk,
      harnessShaderPackMode: () => xk,
      setHarnessUrlShaderPack: () => Kk,
      shaderPackPage: () => Mk
    });
    var Dk = ik(99),
      fk = ik(38),
      Sk = (ik(3421), ik(4961), ik(3419)),
      bk = ik(6505);
    ik(6477);
    const rk = {
      status: "none"
    };
    class Pk {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Sk.k)(Dk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mk().then((kk => {
            kk && fk.f.removeItem(Sk.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Sk.h)(Dk.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const kk = await this.load();
        return "active" === kk.status ? kk.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((kk => (console.error("Failed to load the shader pack", kk), rk))).then((kk => (this.resolved ??= kk, kk))), this.pagePack
      }
      hasNone() {
        var kk;
        return "none" === (null === (kk = this.resolved) || void 0 === kk ? void 0 : kk.status)
      }
      block(kk) {
        this.resolved = {
          status: "blocked",
          messageKey: kk,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ik.e(77), ik.e(133), ik.e(139)]).then((() => ik(41318))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
      }
      async readStored() {
        const kk = await mk();
        return kk && this.compiler().then((kk => kk.reconcileHint())).catch((kk => {
          console.error("Failed to correct the shader pack hint", kk)
        })), kk
      }
      async read() {
        const kk = await this.preload();
        return kk ? (await this.compiler()).compilePagePack(kk) : rk
      }
    }
    async function mk() {
      if (!(0, Sk.m)(Dk.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const kk = await (0, bk.f)(!0);
        return kk || fk.f.setItem(Sk.e, !1), kk
      } catch (kk) {
        return console.error("Failed to read the stored shader pack", kk), fk.f.removeItem(Sk.e), null
      }
    }
    const Mk = new Pk;

    function Kk(kk, ek) {}

    function xk() {
      return null
    }
  },
  38818: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Kk,
      g: () => xk
    });
    var Dk = ik(165),
      fk = ik(179),
      Sk = ik(1444),
      bk = ik(2866),
      rk = ik(1459),
      Pk = ik(35995),
      mk = ik(630),
      Mk = ik(38787);

    function Kk(kk) {
      (0, bk.reportClientError)("matchmake_failed", kk, Dk.n[Dk.n.SHADER_PACK])
    }
    async function xk(kk, ek) {
      var ik;
      const Dk = null === (ik = await Mk.shaderPackPage.preload()) || void 0 === ik ? void 0 : ik.listing,
        bk = (0, Pk.c)();
      Dk && null !== bk && await rk.b.reportShaderPackSession(kk, {
        packId: Dk.packId,
        sourceHash: Dk.sourceHash,
        game: (0, Sk.f)(ek, fk.D, "other"),
        playSessionId: bk,
        visitSessionId: (0, mk.d)()
      })
    }
  },
  6505: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      f: () => Sk
    });
    var Dk = ik(38);
    const fk = "shaderPack";
    async function Sk() {
      var kk;
      let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
    }
  },
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  },
  33721: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(1046);

    function fk() {
      var kk, ek;
      return null !== (kk = null === (ek = screen.orientation) || void 0 === ek ? void 0 : ek.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Sk = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && fk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = fk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Dk.cH)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const kk of this.resizers) kk()
          }
        }), 1e3)
      }
      heldSizer(kk) {
        let ek = !1;
        return () => {
          if (ek && this.isHeld()) return null;
          const ik = kk();
          return ek ||= null !== ik, ik
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  38807: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    let Dk = !1;
    async function fk(kk, ek) {
      if (!Dk) {
        Dk = !0;
        try {
          const [{
            reloadBloxd: Dk
          }, {
            NotificationProvider: fk
          }] = await Promise.all([Promise.resolve().then((() => ik(1688))), Promise.resolve().then((() => ik(1333)))]);
          if (!kk || !0 === await fk.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Dk(ek)
        } catch (fk) {
          console.error("Leaving the replay failed", fk)
        }
        Dk = !1
      }
    }
  },
  40569: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk
    });
    var Dk = ik(1706);
    const fk = 33177600,
      Sk = 3e4;
    let bk = !1;

    function rk(kk, ek, ik) {
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (bk) return Promise.reject(new Error("A screenshot is already being taken"));
      bk = !0;
      const Dk = function(kk, ek, ik) {
        const Dk = Math.max(1, kk),
          Sk = Math.max(1, ek),
          bk = Math.min(1, ik / Math.max(Dk, Sk), Math.sqrt(fk / (Dk * Sk)));
        return {
          width: Math.max(1, Math.floor(Dk * bk)),
          height: Math.max(1, Math.floor(Sk * bk))
        }
      }(ek, ik, kk.maxTextureSize);
      return kk.resize(Dk.width, Dk.height), new Promise(((ek, ik) => {
        let Dk, fk = 2,
          rk = null;
        const Pk = () => {
          var ek;
          bk = !1, null === (ek = rk) || void 0 === ek || ek(), clearTimeout(Dk), kk.restoreSize()
        };
        Dk = setTimeout((() => {
          Pk(), ik(new Error("No frame was drawn to capture"))
        }), Sk), rk = kk.onFrameDrawn((() => {
          if (fk--, fk > 0) return;
          const {
            canvas: Dk
          } = kk, Sk = {
            width: Dk.width,
            height: Dk.height
          };
          try {
            Dk.toBlob((kk => {
              kk ? ek({
                blob: kk,
                ...Sk
              }) : ik(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (bk) {
            ik(bk)
          } finally {
            Pk()
          }
        }))
      }))
    }
    async function Pk(kk, ek, ik) {
      try {
        const fk = await rk(kk, ek, ik);
        (0, Dk.c)(fk.blob, `bloxd-screenshot-${fk.width}x${fk.height}-${Date.now()}.png`)
      } catch (fk) {
        console.error("Error taking screenshot:", fk)
      }
    }
  },
  38742: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(302),
      fk = ik(131),
      Sk = ik(38);

    function bk() {
      Sk.f.setItem(Dk.Lb, Sk.f.getItem(Dk.Lb) + 1), (0, fk.m)() && Sk.f.setItem(Dk.Hb, Sk.f.getItem(Dk.Hb) + 1)
    }
  },
  40238: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(39200);

    function fk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function Sk() {}
    const bk = Object.freeze([0, 0, 0]),
      rk = {
        states: {
          health: fk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: fk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: fk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: fk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: fk({}),
          creativeVisibility: fk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: fk(null),
          heldItemAim: fk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: fk(!1),
          gliderBoostFuel: fk(0),
          flight: fk({
            canFly: !1,
            flying: !1
          }),
          crafting: fk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: fk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: fk({}),
          fullInventory: fk(!1),
          crosshairTarget: fk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: fk(!0),
          freeCamera: fk({
            allowed: !1,
            movesFly: !1
          }),
          replay: fk(null),
          replayEdits: fk(null),
          replayRecorder: fk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: fk(!1)
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
          selectHotbarSlot: Sk,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Sk,
          setInventoryOpen: Sk,
          changeIronChestPasskey: Sk,
          dragReplayCamera: Sk,
          applyTemporaryThirdPerson: Sk,
          holdEmoteWheel: Sk,
          recordFlyingMiddleText: Sk,
          focusCrafting: Sk,
          craftRecipe: () => ({
            EM: 0,
            vr: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Sk,
          setShopOpen: Sk,
          buyShopItem: Sk,
          lobbyManage: Sk,
          sendChatMessage: Sk,
          ignorePlayer: Sk,
          reportPlayer: Sk,
          reportWorldCodeChat: Sk,
          requestDiscordReportKey: Sk,
          reportLobbyOrGame: Sk,
          playEmote: Sk,
          updateMyCosmetic: Sk,
          writeOnBoard: Sk,
          writeBook: Sk,
          writeNameTag: Sk,
          setCustomLobbyBlock: Sk,
          openIronChest: Sk,
          sendCodeCollab: Sk,
          clickCodeBlock: Sk,
          bindCustomButtonKeys: Sk,
          pressCustomButton: Sk,
          moveReplayFreecam: Sk,
          holdReplayFreecamVertical: Sk,
          respawn: Sk,
          wakeUp: Sk,
          requestLeaderboard: Sk,
          completeTask: Sk,
          setServerCookie: Sk,
          answerUiRequest: Sk,
          chooseRewardedAd: Sk,
          setCameraZoom: Sk,
          setFreeCameraMovesFly: Sk,
          setBlockHighlight: Sk,
          setCrosshairInteractPrompt: Sk,
          setLookSensitivity: Sk,
          replayAction: Sk,
          setReplayPlaying: Sk,
          seekReplay: Sk,
          setReplayCameraMode: Sk,
          syncReplayCameraMode: Sk,
          setReplayCameraKeyframe: Sk,
          moveReplayCameraKeyframe: Sk,
          deleteReplayCameraKeyframes: Sk,
          setReplayPlaybackMark: Sk,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Sk,
          exportReplayVideo: Sk,
          toggleRecording: Sk,
          saveClip: Sk,
          setRecorderPrefs: Sk,
          setReplayViewerOpen: Sk
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Dk.c,
          worldCodeAiGameState: () => Dk.d
        },
        lookups: {
          localPos: () => bk,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  40560: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      g: () => Sk
    });
    var Dk = ik(2107),
      fk = ik(996);

    function Sk(kk, ek) {
      return null !== kk.gameSource && (0, Dk.q)(ek, kk.gameSource)
    }

    function bk(kk, ek) {
      if (null === kk.gameSource || "" === kk.gameSource || null === ek) return !0;
      const ik = (0, fk.j)(ek) ? (0, fk.p)(ek) : null;
      return null !== ik && Sk(kk, ik)
    }
  },
  40533: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk
    });
    var Dk = ik(585),
      fk = ik(40541),
      Sk = ik(40397);
    async function bk(kk) {
      const ek = await (0, fk.h)({
        Helmet: ik(37550),
        Chestplate: ik(37554),
        Gauntlets: ik(37571),
        Leggings: ik(37559),
        Boots: ik(37566)
      } [Dk.b[kk]]);
      try {
        return (0, Sk.q)(ek)
      } finally {
        ek.close()
      }
    }
    const rk = new class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.n;
        this.decode = kk, this.register = ek, this.decoded = new Map
      }
      warm() {
        for (let kk = 0; kk < Dk.b.length; kk++) this.part(kk).catch((ek => {
          console.warn(`The grayscale armour ${Dk.b[kk]} image didn't decode ahead of use`, ek)
        }))
      }
      async load(kk, ek) {
        const {
          width: ik,
          height: Sk,
          pixels: bk
        } = await this.part(kk), rk = new ImageData(function(kk, ek) {
          const ik = new Uint8ClampedArray(kk.length);
          for (let Dk = 0; Dk < kk.length; Dk += 4) ik[Dk] = Math.round(kk[Dk] * ek[0] / 255), ik[Dk + 1] = Math.round(kk[Dk + 1] * ek[1] / 255), ik[Dk + 2] = Math.round(kk[Dk + 2] * ek[2] / 255), ik[Dk + 3] = kk[Dk + 3];
          return ik
        }(bk, function(kk) {
          return [kk >>> 16 & 255, kk >>> 8 & 255, 255 & kk]
        }(ek)), ik, Sk);
        let Pk;
        try {
          Pk = await createImageBitmap(rk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (mk) {
          throw new fk.d("decode", `grayscale armour ${Dk.b[kk]}`, {
            cause: mk
          })
        }
        return {
          id: this.register(Pk),
          width: ik,
          height: Sk
        }
      }
      part(kk) {
        const ek = this.decoded.get(kk);
        if (void 0 !== ek) return ek;
        const ik = this.decode(kk).catch((ek => {
          throw this.decoded.delete(kk), ek instanceof fk.d ? ek : new fk.d("decode", `grayscale armour ${Dk.b[kk]}`, {
            cause: ek
          })
        }));
        return this.decoded.set(kk, ik), ik
      }
    }
  },
  40525: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      e: () => wk,
      f: () => Mk,
      h: () => Kk,
      j: () => Hk
    });
    var Dk = ik(40378),
      fk = ik(40533),
      Sk = ik(40541);
    const bk = 396,
      rk = 1,
      Pk = 2,
      mk = 3,
      Mk = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      Kk = {
        File: 0,
        Item: 1
      },
      xk = 0,
      nk = 1,
      Uk = 2;

    function Hk(kk) {
      const ek = (0, Dk.n)();
      ek.catch((() => {}));
      let fk = null;
      return {
        glbUrl: kk,
        lifeformAtlasUrl: async kk => (await ek).lifeformAtlasUrl(kk),
        armourAtlasUrl: async () => (await ik.e(206).then((() => ik(33856)))).armourAtlasUrl,
        capeUrl: async kk => (await ek).capeUrl(kk),
        attachmentImageUrl: async kk => (await ek).attachmentImageUrl(kk),
        blockImageUrl: async kk => (await ek).blockImageUrl(kk),
        groupAtlasUrl: async kk => (await ek).groupAtlasUrl(kk),
        particleTextureUrl: async kk => (await ek).particleTextureUrl(kk),
        particleItemUrl: async kk => (fk ??= ik.e(38).then((() => ik(50611))).catch((kk => {
          throw fk = null, kk
        })), (await fk).particleItemUrl(kk))
      }
    }
    class wk {
      constructor(kk, ek) {
        var ik, bk, rk, Pk;
        let mk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = kk, this.onFailure = ek, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.aU = !1, this.load = null !== (ik = mk.load) && void 0 !== ik ? ik : (kk, ek) => (0, Sk.j)(kk, mk.fetchImage, ek), this.release = null !== (bk = mk.release) && void 0 !== bk ? bk : Sk.p, this.fetchFile = null !== (rk = mk.fetchFile) && void 0 !== rk ? rk : kk => (0, Dk.j)(kk), this.greyscaleArmour = null !== (Pk = mk.greyscaleArmour) && void 0 !== Pk ? Pk : fk.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(kk, ek) {
        this.glbWrittenImages.set(kk, Ak(ek))
      }
      glbTaken(kk, ek) {
        const ik = this.glbWrittenImages.get(kk);
        this.glbWrittenImages.delete(kk), ek && this.setGlbImages(kk, void 0 !== ik && ik.length > 0 ? ik : void 0)
      }
      setGlbImages(kk, ek) {
        var ik;
        this.glbTakenCount.set(kk, (null !== (ik = this.glbTakenCount.get(kk)) && void 0 !== ik ? ik : 0) + 1), void 0 === ek ? this.glbImages.delete(kk) : this.glbImages.set(kk, ek);
        const Dk = [];
        for (const {
            key: fk
          }
          of this.loading.values()) fk.kind === Mk.Glb && fk.word === kk && Dk.push(fk);
        for (let fk = this.ready.length - 1; fk >= 0; fk--) {
          const {
            key: ek,
            id: ik
          } = this.ready[fk];
          ek.kind === Mk.Glb && ek.word === kk && (this.ready.splice(fk, 1), null !== ik && (this.answered.delete(ik), this.release(ik)), Dk.push(ek))
        }
        this.loadAgain(Dk)
      }
      onEvent(kk) {
        if (this.aU) return;
        const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
        for (let ik = 0; ik + 8 <= kk.byteLength; ik += 8) {
          const kk = ek.getUint8(ik),
            Dk = ek.getUint32(ik + 4, !0);
          if (kk === mk) {
            this.answered.delete(Dk), this.release(Dk);
            continue
          }
          const fk = {
            kind: ek.getUint8(ik + 1),
            index: ek.getUint8(ik + 2),
            word: Dk
          };
          kk === rk ? this.want(fk) : kk === Pk && this.loading.delete(lk(fk))
        }
      }
      reload(kk, ek) {
        const ik = ik => kk.includes(ik.kind) && (void 0 === ek || ek(ik)),
          Dk = new Map;
        for (const fk of this.answered.values()) ik(fk) && Dk.set(lk(fk), fk);
        for (const [fk, {
            key: Sk
          }] of this.loading) ik(Sk) && Dk.set(fk, Sk);
        this.loadAgain(Dk.values())
      }
      loadAgain(kk) {
        for (const ek of kk) this.loading.delete(lk(ek)), this.want(ek)
      }
      drain(kk) {
        if (null !== kk)
          for (; this.ready.length > 0;) {
            if (!kk(bk, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.aU = !0, this.loading.clear(), this.ready.length = 0;
        for (const kk of this.answered.keys()) this.release(kk);
        this.answered.clear()
      }
      want(kk) {
        const ek = lk(kk);
        if (this.loading.has(ek)) return;
        const ik = {
          key: kk
        };
        this.loading.set(ek, ik), this.loadKey(kk).then((Dk => {
          this.aU || this.loading.get(ek) !== ik ? this.release(Dk.id) : (this.loading.delete(ek), this.answered.set(Dk.id, kk), this.ready.push({
            record: yk(kk, xk, Dk),
            key: kk,
            id: Dk.id
          }))
        }), (Dk => {
          if (this.aU || this.loading.get(ek) !== ik) return;
          this.loading.delete(ek), this.onFailure({
            key: kk,
            error: Dk
          });
          const fk = Dk instanceof Sk.d && "decode" === Dk.stage ? nk : Uk;
          this.ready.push({
            record: yk(kk, fk, null),
            key: kk,
            id: null
          })
        }))
      }
      async loadKey(kk) {
        switch (kk.kind) {
          case Mk.Glb:
            return this.load(await this.glbImage(kk), "none");
          case Mk.LifeformAtlas:
            return this.load(pk(await this.sources.lifeformAtlasUrl(kk.word), kk), "none");
          case Mk.ArmourAtlas:
            return this.load(pk(await this.sources.armourAtlasUrl(), kk), "none");
          case Mk.Cape:
            return this.load(pk(await this.sources.capeUrl(kk.word), kk), "none");
          case Mk.AttachmentImage:
            return this.load(pk(await this.sources.attachmentImageUrl(kk.word), kk), "none");
          case Mk.GroupAtlas:
            return this.load(pk(await this.sources.groupAtlasUrl(kk.word), kk), "none");
          case Mk.BlockImage:
            return this.load(pk(await this.sources.blockImageUrl(kk.word), kk), "none");
          case Mk.Particle: {
            const ek = await (kk.index === Kk.Item ? this.sources.particleItemUrl(kk.word) : this.sources.particleTextureUrl(kk.word));
            return this.load(pk(ek, kk), "flipY")
          }
          case Mk.GreyscaleArmour:
            return this.greyscaleArmour.load(kk.index, kk.word);
          default:
            throw new Sk.d("fetch", `image kind ${kk.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(kk) {
        var ek;
        let ik = this.glbImages.get(kk.word);
        if (void 0 === ik) {
          const ek = this.glbTakenCount.get(kk.word),
            Dk = pk(await this.sources.glbUrl(kk.word), kk);
          try {
            ik = Ak(await this.fetchFile(Dk))
          } catch (fk) {
            throw new Sk.d("fetch", Dk, {
              cause: fk
            })
          }
          this.glbTakenCount.get(kk.word) === ek && this.glbImages.set(kk.word, ik)
        }
        const Dk = null === (ek = ik) || void 0 === ek ? void 0 : ek[kk.index];
        if (!Dk) throw new Sk.d("decode", `image ${kk.index} of file ${2147483647&kk.word}`, {
          cause: null
        });
        return Dk
      }
    }

    function lk(kk) {
      let {
        kind: ek,
        index: ik,
        word: Dk
      } = kk;
      return `${ek}:${ik}:${Dk}`
    }

    function pk(kk, ek) {
      if (null === kk) throw new Sk.d("fetch", `no URL for image ${lk(ek)}`, {
        cause: null
      });
      return kk
    }

    function yk(kk, ek, ik) {
      var Dk, fk, Sk;
      const bk = new Uint8Array(16),
        rk = new DataView(bk.buffer);
      return rk.setUint8(0, kk.kind), rk.setUint8(1, kk.index), rk.setUint8(2, ek), rk.setUint32(4, kk.word, !0), rk.setUint32(8, null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.id) && void 0 !== Dk ? Dk : 0, !0), rk.setUint16(12, Math.min(null !== (fk = null === ik || void 0 === ik ? void 0 : ik.width) && void 0 !== fk ? fk : 0, 65535), !0), rk.setUint16(14, Math.min(null !== (Sk = null === ik || void 0 === ik ? void 0 : ik.height) && void 0 !== Sk ? Sk : 0, 65535), !0), bk
    }
    const Yk = 1179937895,
      Lk = 1313821514,
      Ck = 5130562;

    function Ak(kk) {
      var ek;
      const ik = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || ik.getUint32(0, !0) !== Yk || ik.getUint32(16, !0) !== Lk) return [];
      let Dk, fk = 20 + ik.getUint32(12, !0);
      try {
        Dk = JSON.parse((new TextDecoder).decode(kk.subarray(20, fk)))
      } catch {
        return []
      }
      for (; fk + 8 <= kk.byteLength && ik.getUint32(fk + 4, !0) !== Ck;) fk += 8 + ik.getUint32(fk, !0);
      const Sk = null !== (ek = Dk.images) && void 0 !== ek ? ek : [];
      if (0 === Sk.length || fk + 8 > kk.byteLength) return Sk.map((() => null));
      const bk = kk.subarray(fk + 8, Math.min(kk.byteLength, fk + 8 + ik.getUint32(fk, !0)));
      return Sk.map((kk => {
        var ek, ik, fk;
        const Sk = void 0 === kk.bufferView || null === (ek = Dk.bufferViews) || void 0 === ek ? void 0 : ek[kk.bufferView];
        if (!Sk || 0 !== (null !== (ik = Sk.buffer) && void 0 !== ik ? ik : 0) || void 0 === Sk.byteLength) return null;
        const rk = null !== (fk = Sk.byteOffset) && void 0 !== fk ? fk : 0,
          Pk = rk + Sk.byteLength;
        return Pk <= bk.byteLength ? bk.slice(rk, Pk) : null
      }))
    }
  },
  40247: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk,
      h: () => fk
    });
    let Dk = null;

    function fk(kk) {
      Dk = kk
    }

    function Sk(kk) {
      Dk === kk && (Dk = null)
    }

    function bk() {
      var kk;
      null === (kk = Dk) || void 0 === kk || kk()
    }
  },
  36136: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk,
      f: () => xk,
      h: () => lk,
      l: () => mk
    });
    var Dk = ik(22),
      fk = ik(2388),
      Sk = ik(2395),
      bk = ik(2397),
      rk = ik(2473),
      Pk = ik(26);

    function mk(kk, ek) {
      return (!(0, bk.b)() || 0 === kk && 0 === ek) && (0, Sk.s)(fk.k.Joystick, 0, kk, ek, 0)
    }
    const Mk = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Kk(kk) {
      return kk.classList.contains("TouchKeyHit") && nk() ? null : kk.firstElementChild
    }

    function xk(kk) {
      return kk.classList.contains("TouchKeyHit") && !kk.classList.contains("CanvasZone") ? {
        whole: !nk(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Uk(Kk(kk))
      }
    }

    function nk() {
      return document.documentElement.classList.contains(rk.f)
    }

    function Uk(kk) {
      return !(kk instanceof HTMLElement) || kk.offsetWidth <= 0 || kk.offsetHeight <= 0 ? null : {
        width: kk.offsetWidth,
        height: kk.offsetHeight
      }
    }

    function Hk(kk, ek) {
      const ik = kk => Math.min(65535, Math.round(4 * kk));
      return (ik(kk) | ik(ek) << 16) >>> 0
    }

    function wk(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2,
        radius: Math.min(kk.width, kk.height) / 2
      }
    }
    const lk = new class {
      constructor(kk) {
        this.write = kk, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ek ? this.elements.set(kk, {
          element: ek,
          hidden: ik
        }) : this.elements.delete(kk), this.measureOne(kk)
      }
      measure() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = kk.left, this.canvasTop = kk.top;
        for (const ek of this.elements.keys()) this.measureOne(ek)
      }
      hitZone(kk, ek) {
        let ik = null,
          Dk = 1;
        for (const fk of this.elements.keys()) {
          const Sk = this.shown(fk);
          if (!Sk) continue;
          const {
            rect: bk,
            element: rk
          } = Sk, Pk = wk(bk), mk = Math.max(0, bk.width / 2 - Pk.radius), Mk = Math.max(0, bk.height / 2 - Pk.radius), xk = Math.max(0, Math.abs(kk - Pk.x) - mk), nk = Math.max(0, Math.abs(ek - Pk.y) - Mk), Hk = rk.firstElementChild;
          let lk = Math.hypot(xk, nk) / Pk.radius;
          const pk = Uk(Kk(rk));
          pk && (lk = Math.min(lk, Math.max(2 * Math.abs(kk - Pk.x) / pk.width, 2 * Math.abs(ek - Pk.y) / pk.height))), lk < Dk && (ik = {
            code: fk,
            element: rk,
            key: Hk,
            ...Pk
          }, Dk = lk)
        }
        return ik
      }
      measureOne(kk) {
        const ek = this.shown(kk);
        if (!ek) return void this.write(fk.k.TouchZone, kk, 0, 0, 0);
        const {
          rect: ik,
          element: Dk
        } = ek, Sk = wk(ik);
        this.write(fk.k.TouchZone, kk, Sk.x - this.canvasLeft, Sk.y - this.canvasTop, Hk(ik.width, ik.height));
        const bk = Uk(Kk(Dk));
        this.write(fk.k.TouchZone, 256 | kk, 0, 0, bk ? Hk(bk.width, bk.height) : 0)
      }
      shown(kk) {
        const ek = this.elements.get(kk),
          ik = Dk.b.get("worldPanelHud");
        if (!ek || ek.hidden || "none" === ik) return null;
        const fk = ek.element.getBoundingClientRect();
        return fk.width <= 0 || fk.height <= 0 ? null : {
          rect: fk,
          element: ek.element
        }
      }
    }(Sk.s);
    (0, Pk.k)(rk.c, (() => {
      lk.measure()
    }))
  },
  40289: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk,
      i: () => mk
    });
    var Dk = ik(40423),
      fk = ik(38636),
      Sk = ik(35986),
      bk = ik(40294),
      rk = ik(40266);
    const Pk = Dk.b.timeForPlayerToConnect - 1e4;
    async function mk(kk, ek, ik, Dk) {
      let Pk;
      try {
        Pk = await kk.getTrafficCode()
      } catch (Uk) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Uk), new rk.v(Uk)
      }
      const {
        gameNameWithVariation: mk,
        lobbyName: Mk
      } = ek, Kk = () => {
        const ek = (0, Sk.g)(kk, mk, Mk, Pk, (kk => {
          var ek;
          return null !== (ek = null === ik || void 0 === ik ? void 0 : ik.isUsingCustomGameTexturePack(kk)) && void 0 !== ek && ek
        }));
        ek.joinOptions.wasmClient = !0;
        const fk = (0, bk.H)();
        return null !== fk && (ek.joinOptions.renderBackend = fk), ek.joinOptions.joinAdHold = Dk, ek
      }, {
        roomName: xk,
        joinOptions: nk
      } = Kk();
      return {
        endpoint: ek.endpoint,
        roomName: xk,
        joinOptions: nk,
        session: {
          gameNameWithVariation: mk,
          lobbyName: Mk,
          playerDbId: kk.whamm
        },
        optionsAfterRefusal: async ek => await (0, fk.c)(kk, ek) ? Kk().joinOptions : null
      }
    }
  },
  40553: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk,
      g: () => Sk,
      h: () => Kk,
      l: () => bk
    });
    var Dk = ik(40525),
      fk = ik(40378);
    const Sk = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(kk) {
        this.change((() => {
          this.page = kk
        }))
      }
      setSessionFiles(kk) {
        const ek = void 0 !== this.session && void 0 === kk;
        if (this.change((() => {
            this.session = kk
          })), ek)
          for (const ik of [...this.pageListeners]) ik()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(kk) {
        return this.pageListeners.add(kk), () => {
          this.pageListeners.delete(kk)
        }
      }
      setFollower(kk) {
        this.follower = kk, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const kk of [...this.wantedListeners]) kk();
        this.startFollower()
      }
      onWanted(kk) {
        return this.wantedListeners.add(kk), () => {
          this.wantedListeners.delete(kk)
        }
      }
      onChange(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      startFollower() {
        const kk = this.follower;
        this.isWanted && null !== kk && (this.follower = null, kk((() => {
          this.follower = kk
        })))
      }
      change(kk) {
        const ek = this.current;
        if (kk(), this.current !== ek)
          for (const ik of this.listeners) ik()
      }
    };

    function bk(kk, ek) {
      return {
        ...kk,
        armourAtlasUrl: () => {
          var ik, Dk;
          return null !== (ik = null === (Dk = ek()) || void 0 === Dk ? void 0 : Dk.armourAtlasUrl()) && void 0 !== ik ? ik : kk.armourAtlasUrl()
        },
        lifeformAtlasUrl: ik => Pk(ek(), (kk => kk.LIFEFORM_ATLAS_PATHS[ik]), (() => kk.lifeformAtlasUrl(ik))),
        groupAtlasUrl: ik => Pk(ek(), (kk => kk.GROUP_ATLAS_PATHS[ik]), (() => kk.groupAtlasUrl(ik))),
        particleItemUrl: Dk => mk(ek(), (async () => {
          const kk = await ik.e(38).then((() => ik(50611))).catch((() => null));
          return (null === kk || void 0 === kk ? void 0 : kk.particleItemSprite(Dk)) || null
        }), (() => kk.particleItemUrl(Dk))),
        blockImageUrl: ik => mk(ek(), (async () => {
          var kk, ek;
          return null !== (kk = null === (ek = await rk()) || void 0 === ek ? void 0 : ek.blockImageName(ik)) && void 0 !== kk ? kk : null
        }), (() => kk.blockImageUrl(ik)))
      }
    }

    function rk() {
      return (0, fk.n)().catch((() => null))
    }

    function Pk(kk, ek, ik) {
      return mk(kk, (async () => {
        var kk;
        const ik = await rk(),
          Dk = null === ik ? null : ek(ik),
          fk = null !== (kk = null === Dk || void 0 === Dk ? void 0 : Dk.slice(Dk.lastIndexOf("/") + 1)) && void 0 !== kk ? kk : null;
        return "Player_Atlas" === fk ? null : fk
      }), ik)
    }
    async function mk(kk, ek, ik) {
      if (null !== kk) {
        const ik = await ek(),
          Dk = null === ik ? null : kk.textureUrl(ik);
        if (null !== Dk) return Dk
      }
      return ik()
    }
    const Mk = 0;

    function Kk(kk) {
      const ek = [Dk.f.ArmourAtlas, Dk.f.LifeformAtlas, Dk.f.GroupAtlas, Dk.f.BlockImage, Dk.f.Particle];
      kk.reload(ek, (kk => {
        switch (kk.kind) {
          case Dk.f.Particle:
            return kk.index === Dk.h.Item;
          case Dk.f.LifeformAtlas:
            return kk.word !== Mk;
          default:
            return !0
        }
      }))
    }
  },
  40425: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      d: () => rk,
      f: () => bk,
      i: () => fk,
      j: () => Sk
    });
    const Dk = 1e3;

    function fk() {
      Pk((() => {
        window.location.reload()
      }))
    }

    function Sk() {
      return new Promise((() => {}))
    }

    function bk(kk) {
      Pk((() => {
        window.location.replace(kk(window.location.href))
      }))
    }

    function rk(kk) {
      Promise.resolve().then((() => ik(107))).then((ek => {
        let {
          currentUrl: ik
        } = ek;
        bk((() => ik.mergeSearchParamsInto(kk)))
      }), (() => {
        bk((() => kk))
      }))
    }

    function Pk(kk) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ik(1688))).then((ek => {
        let {
          prepareForUnloadWithoutConfirmation: ik
        } = ek;
        try {
          ik()
        } catch (Dk) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Dk), window.onbeforeunload = null
        }
        kk()
      }), (() => {
        window.onbeforeunload = null, kk()
      })) : kk()
    }
  },
  4977: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return fk(kk, ek)
    }

    function fk(kk, ek) {
      if (kk === ek) return !0;
      if ("object" !== typeof kk || "object" !== typeof ek || null === kk || null === ek || Array.isArray(kk) !== Array.isArray(ek)) return !1;
      const ik = kk,
        Dk = ek,
        Sk = Object.keys(ik);
      return Sk.length === Object.keys(Dk).length && Sk.every((kk => Object.prototype.hasOwnProperty.call(Dk, kk) && fk(ik[kk], Dk[kk])))
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  40499: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Ck,
      f: () => Yk,
      h: () => Hk,
      j: () => Uk
    });
    var Dk = ik(1778),
      fk = ik(1187),
      Sk = ik(38628),
      bk = ik(36011),
      rk = ik(38647),
      Pk = ik(40266);
    const mk = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Mk = 3,
      Kk = [500, 1500];

    function xk(kk) {
      const ek = new URL(kk);
      return {
        secure: "https:" === ek.protocol || "wss:" === ek.protocol,
        host: ek.host,
        pathname: ek.pathname.replace(/\/+$/, ""),
        search: ek.searchParams.toString()
      }
    }

    function nk(kk, ek, ik) {
      const {
        secure: Dk,
        host: fk,
        pathname: Sk,
        search: bk
      } = xk(kk);
      return `${Dk?"https":"http"}://${fk}${Sk}/matchmake/${ek}/${encodeURIComponent(ik)}${bk?`?${bk}`:""}`
    }

    function Uk(kk, ek) {
      var ik;
      const Dk = null !== (ik = ek.protocol) && void 0 !== ik ? ik : "ws";
      if ("ws" !== Dk) throw new Error(`seat reservation asks for the ${Dk} transport`);
      const {
        secure: fk,
        host: Sk,
        pathname: bk,
        search: rk
      } = xk(kk), Pk = new URLSearchParams(rk);
      Pk.append("sessionId", ek.sessionId), ek.reconnectionToken && Pk.append("reconnectionToken", ek.reconnectionToken);
      return `${fk?"wss":"ws"}://${ek.room.publicAddress||`${Sk}${bk}`}/${ek.room.processId}/${ek.room.roomId}?${Pk.toString()}`
    }
    async function Hk(kk, ek, ik) {
      var rk;
      let mk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xk = null !== (rk = mk.sleep) && void 0 !== rk ? rk : Dk.c,
        Uk = new fk.e(mk.signal),
        Hk = new bk.b((() => {
          (0, fk.l)(Uk.controller, new bk.e("seat"))
        })),
        {
          signal: yk
        } = Uk;
      try {
        const Dk = await (0, Sk.d)((() => async function(kk, ek, ik, Dk) {
          var Sk;
          const {
            signal: bk,
            sleep: rk
          } = Dk, mk = nk(kk, "joinOrCreate", ek), xk = JSON.stringify(ik);
          let Uk = null;
          for (let nk = 0; nk < Mk; nk++) {
            var Hk;
            if (nk > 0) await rk(null !== (Hk = Kk[nk - 1]) && void 0 !== Hk ? Hk : 1500, bk);
            let kk;
            (0, fk.q)(bk);
            try {
              kk = await lk(mk, xk, Dk)
            } catch (yk) {
              (0, fk.q)(bk), Uk = wk(yk);
              continue
            }
            const {
              response: ek,
              answer: ik,
              refusal: Sk,
              lost: Mk
            } = kk;
            if (null === Mk) {
              if (null !== Sk) throw pk(Sk, ik);
              if (ek.ok && null !== ik && Ak(ik)) return ik;
              Uk = new Pk.u(`seat request answered HTTP ${ek.status}${null===ik?" without JSON":" without a seat"}`, !1, void 0, ek.status)
            } else Uk = wk(Mk.error)
          }
          throw null !== (Sk = Uk) && void 0 !== Sk ? Sk : new Pk.u("seat request made no attempt", !1)
        }(kk, ek, ik, {
          ...mk,
          signal: yk,
          sleep: xk
        })), yk, xk);
        return Hk.answered(), Dk
      } finally {
        Hk.stop(), Uk.unfollow()
      }
    }

    function wk(kk) {
      return new Pk.u(kk instanceof Error ? kk.message : String(kk), !0, kk)
    }
    async function lk(kk, ek, ik) {
      var Dk;
      const {
        signal: Sk
      } = ik, bk = null !== (Dk = ik.fetch) && void 0 !== Dk ? Dk : fetch, rk = await bk(kk, {
        method: "POST",
        headers: {
          ...mk,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: ek,
        credentials: "include",
        signal: Sk
      }), {
        answer: Pk,
        lost: Mk
      } = await async function(kk) {
        try {
          const ek = await kk.json();
          return {
            answer: "object" === typeof ek && null !== ek ? ek : null,
            lost: null
          }
        } catch (ek) {
          return {
            answer: null,
            lost: ek instanceof SyntaxError ? null : {
              error: ek
            }
          }
        }
      }(rk), Kk = null !== Pk && "string" === typeof Pk.error ? Pk.error : null;
      var xk;
      null !== Kk && (null === (xk = ik.onRefusal) || void 0 === xk || xk.call(ik));
      return (0, fk.q)(Sk), {
        response: rk,
        answer: Pk,
        refusal: Kk,
        lost: Mk
      }
    }

    function pk(kk, ek) {
      return new Pk.k(kk, "number" === typeof(null === ek || void 0 === ek ? void 0 : ek.code) ? ek.code : 0, (0, rk.s)(kk).text)
    }
    class yk extends Error {
      constructor(kk, ek) {
        super(kk), this.code = ek, this.name = "SeatHttpError"
      }
    }
    async function Yk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: fk,
        answer: Sk,
        refusal: bk,
        lost: rk
      } = await lk(nk(kk, "reconnect", ek), JSON.stringify({
        reconnectionToken: ik
      }), Dk);
      if (null !== rk) throw rk.error;
      if (!fk.ok) {
        const kk = null !== Sk && "number" === typeof Sk.code && 0 !== Sk.code ? Sk.code : fk.status;
        throw new yk(`the seat's reconnect was refused: ${null!==bk&&void 0!==bk?bk:`HTTP ${fk.status}`}`, kk)
      }
      if (null !== bk) throw pk(bk, Sk);
      if (null === Sk || !Ak(Sk)) throw new Error("the seat's reconnect answered " + (null === Sk ? "without JSON" : "without a seat"));
      return {
        ...Sk,
        reconnectionToken: ik
      }
    }
    const Lk = 10;

    function Ck(kk) {
      if (kk.byteLength < 2 || kk[0] !== Lk) return null;
      const ek = 2 + kk[1];
      return ek > kk.byteLength ? null : (new TextDecoder).decode(kk.subarray(2, ek))
    }

    function Ak(kk) {
      const ek = kk.room;
      return "string" === typeof kk.sessionId && "object" === typeof ek && null !== ek && "string" === typeof ek.roomId && "string" === typeof ek.processId && "string" === typeof ek.name
    }
  },
  40172: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => pk,
      C: () => Ak,
      D: () => uk,
      G: () => Yk,
      I: () => Lk,
      M: () => wk,
      N: () => dk,
      R: () => Ik,
      T: () => Uk,
      X: () => Qk,
      cb: () => lk,
      db: () => yk,
      e: () => fk,
      g: () => zk,
      gb: () => Ck,
      h: () => qk,
      j: () => nk,
      l: () => Hk,
      m: () => Fk,
      q: () => jk,
      u: () => Vk,
      y: () => sk
    });
    var Dk = ik(2932);
    const fk = {
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
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function Sk(kk, ek) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => ek(kk))) : kk : Array.from(kk, (kk => ek(kk)))
    }

    function bk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let ek = 0; ek < kk.length; ek++) {
        const ik = kk.charCodeAt(ek);
        if (ik >= 55296 && ik <= 57343) return Pk.decode(rk.encode(kk))
      }
      return kk
    }
    const rk = new TextEncoder,
      Pk = new TextDecoder;

    function mk(kk) {
      return kk
    }
    let Mk;

    function Kk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [bk(kk.kr), bk(kk.er)]
    }

    function xk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [Sk(kk.le, mk), Sk(kk.Gb, mk)]
    }

    function nk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.hM), bk(ek.aM)];
      var ek
    }

    function Uk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.id, ek.PP];
      var ek
    }

    function Hk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.vf, bk(ek.Ef), ek.hf, bk(ek.tf), ek.Zf, ek.gf, ek.iP, bk(ek.DP), bk(ek.fP)];
      var ek
    }

    function wk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.HP, mk), ek.wP];
      var ek
    }

    function lk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.Bb, (kk => bk(kk))), bk(ek.cb), ek.Tb];
      var ek
    }

    function pk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.kK, mk), bk(ek.eK), ek.iK];
      var ek
    }

    function yk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.YD), bk(ek.LD)];
      var ek
    }

    function Yk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.gP)];
      var ek
    }

    function Lk(kk) {
      return bk(kk)
    }

    function Ck(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.lr), bk(ek.yr), bk(ek.kr), bk(ek.er)];
      var ek
    }

    function Ak(kk) {
      return Kk(kk)
    }

    function jk(kk) {
      return Kk(kk)
    }

    function sk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.FP)];
      var ek
    }

    function dk(kk) {
      return kk
    }

    function Vk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.ob), bk(ek.Zb)];
      var ek
    }

    function Fk(kk) {
      return bk(kk)
    }

    function uk(kk) {
      return xk(kk)
    }

    function qk(kk) {
      return xk(kk)
    }

    function Ik(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.SP)];
      var ek
    }

    function zk(kk) {
      return (Mk ??= (0, Dk.i)().map((kk => kk.name)), Mk).map((ek => {
        return "string" === typeof(ik = kk[ek]) ? bk(ik) : Sk(ik, mk);
        var ik
      }))
    }

    function Qk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.Nb, ek.Rb, ek.Jb];
      var ek
    }
  },
  40557: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(40560),
      fk = ik(40553);
    const Sk = new class {
      constructor(kk) {
        this.pack = kk, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, kk.onWanted((() => {
          this.release()
        }))
      }
      setGame(kk) {
        if (void 0 === kk && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const ek = this.inGame();
        if (this.game = kk, this.update(), this.inGame() !== ek)
          for (const ik of this.gameListeners) ik()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(kk) {
        return this.gameListeners.add(kk), () => {
          this.gameListeners.delete(kk)
        }
      }
      unwantedLeave(kk) {
        kk && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(kk) {
        null !== kk && kk === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const kk = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, kk && this.setGame(void 0)
      }
      setSettled(kk) {
        this.settle = kk, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Dk.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(fk.g)
  },
  4974: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => rk
    });
    var Dk = ik(2107),
      fk = ik(4977);
    let Sk = null;

    function bk(kk) {
      Sk = {
        pack: kk.metaData.id === Dk.d ? null : kk
      }
    }

    function rk(kk) {
      return !(null === Sk || !(0, fk.e)(Sk.pack, kk)) && (Sk = null, !0)
    }
  },
  40256: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      followPageUiPack: () => MM,
      packForGame: () => mM,
      playWasmGame: () => CM,
      prefetchWasmPreviews: () => nP,
      setGamePackConfirm: () => Lm,
      startWasmPlay: () => HM,
      startWasmPreviews: () => xP
    });
    var Dk = ik(189),
      fk = ik(1220),
      Sk = ik(165),
      bk = ik(38662),
      rk = ik(1893),
      Pk = ik(26),
      mk = ik(4616),
      Mk = ik(1291),
      Kk = ik(1684),
      xk = ik(1302),
      nk = ik(38807),
      Uk = ik(1284),
      Hk = ik(38818),
      wk = ik(38742),
      lk = ik(35995),
      pk = ik(38628),
      yk = ik(8718),
      Yk = ik(36011),
      Lk = ik(40262),
      Ck = ik(4721),
      Ak = ik(40165),
      jk = ik(40238),
      sk = ik(40172);
    const dk = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
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
        lobbyLeaderboardRows: !0,
        freeCamera: !0
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
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function Vk(kk) {
      const ek = {
        ...jk.e[kk]
      };
      for (const ik of Object.keys(dk[kk])) delete ek[ik];
      return ek
    }

    function Fk() {
      var kk, ek;
      return null === (kk = null === (ek = (0, Ak.g)()) || void 0 === ek ? void 0 : ek.localPlayerAlive()) || void 0 === kk || kk
    }

    function uk() {
      var kk, ek;
      return null !== (kk = null === (ek = (0, Ak.g)()) || void 0 === ek ? void 0 : ek.localDeaths()) && void 0 !== kk ? kk : null
    }
    const qk = {
        current: Fk,
        watch: kk => {
          let ek = Fk(),
            ik = uk();
          return (0, Ck.x)((() => {
            const Dk = Fk(),
              fk = uk(),
              Sk = null !== fk && null !== ik && fk !== ik;
            ik = fk, Sk ? (ek || kk(!0), kk(!1), Dk && kk(!0), ek = Dk) : Dk !== ek && (ek = Dk, kk(Dk))
          }))
        }
      },
      Ik = {
        states: {
          ...Vk("states"),
          localPlayerAlive: qk
        },
        events: {
          ...Vk("events"),
          localPlayerAliveSet: {
            watch: qk.watch
          }
        },
        commands: {
          ...Vk("commands"),
          respawn: () => {
            var kk;
            null === (kk = (0, Ak.g)()) || void 0 === kk || kk.respawn()
          },
          playEmote: kk => {
            var ek;
            null === (ek = (0, Ak.g)()) || void 0 === ek || ek.send(sk.e.PlayEmote, (0, sk.G)({
              gP: kk
            }))
          },
          applyTemporaryThirdPerson: kk => {
            var ek;
            let {
              durationMs: ik
            } = kk;
            null === (ek = (0, Ak.g)()) || void 0 === ek || ek.thirdPersonFor(ik)
          },
          bindCustomButtonKeys: kk => {
            var ek;
            null === (ek = (0, Ak.g)()) || void 0 === ek || ek.bindCustomButtonKeys(kk)
          },
          pressCustomButton: kk => {
            var ek;
            let {
              id: ik,
              down: Dk
            } = kk;
            null === (ek = (0, Ak.g)()) || void 0 === ek || ek.pressCustomButton(ik, Dk)
          },
          setLookSensitivity: () => {},
          wakeUp: kk => {
            const ek = (0, sk.R)({
                SP: kk
              }),
              ik = () => {
                const kk = (0, Ak.g)();
                return !(null !== kk && void 0 !== kk && kk.isSessionLive) || kk.send(sk.e.StopSleeping, ek)
              };
            if (!ik()) {
              const kk = (0, Ck.x)((() => {
                ik() && kk()
              }))
            }
          },
          setCameraZoom: kk => {
            var ek;
            null === (ek = (0, Ak.g)()) || void 0 === ek || ek.setCameraZoom(kk)
          }
        },
        queries: Vk("queries"),
        lookups: {
          ...Vk("lookups"),
          cameraZoom: () => {
            var kk, ek;
            return null !== (kk = null === (ek = (0, Ak.g)()) || void 0 === ek ? void 0 : ek.cameraZoom()) && void 0 !== kk ? kk : 0
          }
        }
      };
    var zk = ik(38647),
      Qk = ik(40266),
      vk = ik(40271),
      Ek = ik(40289),
      hk = ik(1231),
      ak = ik(107),
      Wk = ik(4458),
      tk = ik(3673),
      Xk = ik(1151);
    const Bk = {
      OP: () => (0, hk.c)(),
      inbuiltOverwritten: () => Wk.e,
      reflectApplyHit: () => Xk.b,
      definerHit: () => ak.currentUrl.c,
      emitReplaced: () => (0, Pk.d)(),
      confirmMesh: () => (0, tk.e)(),
      confirmMeshHitStack: () => (0, tk.f)()
    };
    var ck = ik(40274),
      Tk = ik(40425);
    var Zk = ik(22),
      Ok = ik(1895),
      gk = ik(1931),
      Gk = ik(1617),
      Nk = ik(1990),
      Rk = ik(1172),
      Jk = ik(1223),
      ke = ik(40434);

    function ee() {
      return Jk.f.get().getCurrentLanguageCode()
    }

    function ie(kk) {
      const ek = () => {
        kk({
          translate: (kk, ek) => (0, Rk.v)(ee(), kk, ek),
          keyBindingText: kk => {
            const ek = (0, gk.t)(kk, Zk.b.get("isTouchScreen"));
            return null !== ek ? (0, Rk.x)(ee(), ek.translationKey, ek.params) : (0, gk.o)((0, gk.p)(kk))
          },
          isFriend: Nk.f,
          hiddenNames: Ok.c.shown,
          loadsFontRest: (0, ke.e)(ee())
        })
      };
      let ik = !1;
      const Dk = () => {
          const kk = ee();
          (0, Rk.l)(kk).then((() => {
            ik || kk !== ee() || ek()
          }))
        },
        fk = () => Gk.d.getSocialState().friends.map((kk => kk.name.toLowerCase())).sort().join(" ");
      let Sk = fk();
      ek(), Dk();
      const bk = [(0, Jk.j)((() => {
        ek(), Dk()
      })), (0, Pk.k)("customBindingsChanged", ek), (0, Pk.k)("appManagerUpdated|isTouchScreen", ek), (0, Nk.c)((() => {
        const kk = fk();
        kk !== Sk && (Sk = kk, ek())
      })), Ok.c.subscribe(ek)];
      return () => {
        ik = !0;
        for (const kk of bk) kk()
      }
    }
    var De = ik(600),
      fe = ik(996),
      Se = ik(1916),
      be = ik(302),
      re = ik(179),
      Pe = ik(2821),
      me = ik(35878),
      Me = ik(2823),
      Ke = ik(38311),
      xe = ik(4629),
      ne = ik(40452),
      Ue = ik(646),
      He = ik(610),
      we = ik(663),
      le = ik(670),
      pe = ik(1911),
      ye = ik(3682),
      Ye = ik(3257);
    let Le = null;
    var Ce = ik(1177),
      Ae = ik(1187),
      je = ik(4383),
      se = ik(3411),
      de = ik(55),
      Ve = ik(293),
      Fe = ik(280),
      ue = ik(40466),
      qe = ik(4728);
    var Ie = ik(37292),
      ze = ik(40475);
    class Qe {
      constructor(kk, ek) {
        this.showView = kk, this.holdForAd = ek
      }
      pointerUnlockRequestsChanged() {
        (0, ue.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, ue.o)())
        }]
      }
      setGameViewShown(kk) {
        this.showView(kk)
      }
      setGameView(kk) {
        (0, ze.l)(kk)
      }
      videoAdHold(kk, ek) {
        this.holdForAd(kk, ek)
      }
    }
    class ve {
      leave(kk) {
        ! function(kk) {
          if (null !== (0, xk.c)().websocketUrl) try {
            (0, Ck.J)().leaveGame(kk)
          } finally {
            (0, xk.n)({
              websocketUrl: null
            })
          }
        }(kk)
      }
      isReplay() {
        return !1
      }
    }
    class Ee {
      watchFrameStarts(kk) {
        return (0, Ck.r)(kk)
      }
      watchFrames(kk) {
        return (0, Ck.q)(kk)
      }
      watchTicks(kk) {
        return (0, Ck.x)(kk)
      }
    }
    var he = ik(40483);

    function ae(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function We(kk, ek) {
      const {
        fade: ik
      } = kk;
      return null === ik || ek - ik.at >= ik.ms ? kk.volume : ik.from + (kk.volume - ik.from) * Math.max(0, (ek - ik.at) / ik.ms)
    }

    function te(kk) {
      const ek = Object.entries(kk),
        ik = new Uint32Array(ek.length);
      let Dk = 0;
      for (const [bk, [, rk]] of ek.entries()) ik[bk] = rk.length, Dk += rk.length;
      const fk = new Float64Array(3 * Dk);
      let Sk = 0;
      for (const [, bk] of ek)
        for (const kk of bk) fk.set(kk, Sk), Sk += 3;
      return {
        blocks: ek.map((kk => {
          let [ek] = kk;
          return ek
        })).join("\0"),
        counts: ik,
        values: fk
      }
    }
    class Xe {
      constructor(kk, ek) {
        this.core = kk, this.warn = ek, this.latest = 0
      }
      async feed() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be;
        const ek = ++this.latest;
        let ik;
        try {
          ik = await kk()
        } catch (Dk) {
          return void(this.core.isStopped || ek !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Dk))
        }
        ek === this.latest && (this.core.setBlockColours(ik) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Be() {
      return te((await ik.e(206).then((() => ik(33856)))).averageColors)
    }
    var ce = ik(4735),
      Te = ik(4741),
      oe = ik(40221),
      Ze = ik(3198),
      Oe = ik(35836),
      ge = ik(40319),
      Ge = ik(591),
      Ne = ik(36655),
      Re = ik(585),
      Je = ik(314),
      ki = ik(40305);
    const ei = [3e4, 12e4, 3e5];
    class ii extends Error {}
    const Di = {
      mobTypes: Ge.m,
      vehicleTypes: Ne.c,
      mobAiStates: Ge.l,
      playerPoses: Re.s
    };
    var fi = ik(40297),
      Si = ik(40350),
      bi = ik(1046),
      ri = ik(40489),
      Pi = ik(40492),
      mi = ik(2910),
      Mi = ik(38615),
      Ki = ik(4752),
      xi = ik(2388);
    const ni = xi.t.KeysDisabled | xi.t.LookFrozen | xi.t.ClicksSuppressed,
      Ui = mi.f;
    var Hi = (0, Pi.d)("resumingConn");
    class wi {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = kk, this.now = ek, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Hi, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Mi.b({
          reconnect: kk => this.reconnect(kk),
          isLive: () => kk.isLive(),
          onReconnected: ek => {
            this.landed = ek, kk.onReconnected(ek), this.landIfResumed()
          },
          onGaveUp: (ek, ik) => {
            this.abortAttempt(), kk.onGaveUp(ek, ik)
          },
          freeze: ek => {
            kk.VV(ek), (0, Ki.j)(ni, ek ? ni : 0, "reconnectFreeze")
          },
          releaseSeat: kk => {
            this.releaseSeat(kk)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, ri.e)(this, Hi)[Hi]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(kk) {
        let {
          conn: ek,
          graceMs: ik,
          sessionBased: Dk,
          replayOffer: fk
        } = kk;
        this.session.onInitialInfo(ik, Dk), this.isResuming() && (this.initialInfoConn = ek, this.initialInfoOffer = fk, this.landIfResumed())
      }
      onResumeComplete(kk) {
        0 !== kk && (kk === (0, ri.e)(this, Hi)[Hi] ? ((0, ri.e)(this, Hi)[Hi] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = kk))
      }
      onDropped(kk) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, ri.e)(this, Hi)[Hi] = 0, this.session.onConnectionLost(kk)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, ri.e)(this, Hi)[Hi] = 0, this.session.end()
      }
      reconnect(kk) {
        const ek = this.attempt;
        if (null !== ek && this.awaitingJoinRoom(ek)) return ek.result;
        this.abortAttempt();
        const ik = new AbortController,
          Dk = this.drops,
          fk = {
            attachedAt: null
          },
          Sk = this.shell.reconnect(kk, ik.signal, (() => {
            fk.attachedAt = this.now()
          })).then((kk => {
            if (this.clearAttempt(bk), this.drops !== Dk) throw new Error("the resumed room dropped before its attempt settled");
            return kk
          }), (kk => {
            throw this.clearAttempt(bk), kk
          })),
          bk = {
            abort: ik,
            socket: fk,
            result: Sk
          };
        return this.attempt = bk, Sk
      }
      clearAttempt(kk) {
        this.attempt === kk && (this.attempt = null)
      }
      abortAttempt() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const ek = this.attempt;
        this.attempt = null, null === ek || void 0 === ek || ek.abort.abort(kk)
      }
      awaitingJoinRoom(kk) {
        const ek = kk.socket.attachedAt;
        return null !== ek && this.now() - ek < Ui
      }
      releaseSeat(kk) {
        const ek = this.attempt,
          ik = null !== ek && this.awaitingJoinRoom(ek);
        this.abortAttempt(new Qk.s), ik || this.shell.releaseSeat(kk)
      }
      landIfResumed() {
        const kk = this.landed;
        if (null !== kk && kk.conn === this.initialInfoConn) {
          const ek = this.initialInfoOffer && this.completedEarlyConn !== kk.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !ek) return void this.session.onResumed();
          (0, ri.e)(this, Hi)[Hi] = kk.conn, this.session.onResuming()
        }
      }
    }
    var li = ik(38620),
      yi = ik(40499),
      Yi = ik(36004),
      Li = ik(36001),
      Ci = ik(2107),
      Ai = ik(1850),
      ji = ik(4279),
      si = ik(40326),
      di = ik(4974);

    function Vi(kk) {
      let {
        pack: ek,
        gameSource: ik
      } = kk;
      if (null !== ik && "" !== ik) return `game:${ik}`;
      if (null === ek) return "default";
      const {
        id: Dk,
        version: fk
      } = ek.metaData;
      if (Dk !== Ci.u.CUSTOM) return `${Dk}@${fk}`;
      const Sk = [];
      for (const bk of [ek.textureOverrides, ek.modelOverrides, ek.animations])
        for (const [kk, ek] of Object.entries(null !== bk && void 0 !== bk ? bk : {})) Sk.push(`${kk}:${ek.length}`);
      return `${Dk}:${(0,Ai.s)(Sk.join())}`
    }
    var Fi = ik(4371),
      ui = ik(3218),
      qi = ik(40501),
      Ii = ik(618),
      zi = ik(3220),
      Qi = ik(4437),
      vi = ik(38),
      Ei = ik(40388),
      ai = ik(4394),
      Wi = ik(2395),
      ti = ik(1614),
      Xi = ik(1642),
      Bi = ik(1273),
      ci = ik(111),
      Ti = ik(694),
      oi = ik(2397),
      Zi = ik(4750);
    const Oi = new Set([ce.Hb.KeyDown, ce.Hb.MouseMove, ce.Hb.MouseDown, ce.Hb.Wheel, ce.Hb.TouchStart, ce.Hb.TouchMove]);

    function gi(kk) {
      return (kk.shiftKey ? ce.Zb.Shift : 0) | (kk.ctrlKey ? ce.Zb.Ctrl : 0) | (kk.altKey ? ce.Zb.Alt : 0) | (kk.metaKey ? ce.Zb.Meta : 0) | ("repeat" in kk && kk.repeat ? ce.Zb.Repeat : 0) | (kk.isTrusted ? 0 : ce.Zb.Untrusted)
    }

    function Gi(kk) {
      return "touchOnly" !== (0, ci.d)() && "function" === typeof kk.requestPointerLock
    }

    function Ni(kk) {
      return 0 === kk.button ? kk.altKey ? Zi.n["Alt+Left Click"] : Zi.n.Mouse1 : 1 === kk.button ? Zi.n.Mouse2 : Zi.n.Mouse3
    }
    const Ri = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ji = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      kD = 32768,
      eD = 1;

    function iD(kk) {
      return Math.min(Math.max(Math.round(kk), 0), 65535)
    }

    function DD(kk, ek, ik) {
      const Dk = [],
        fk = (kk, ek, ik, fk) => {
          const Sk = kk => {
            (0, Xi.t)(kk) || ik(kk)
          };
          kk.addEventListener(ek, Sk, fk), Dk.push((() => {
            kk.removeEventListener(ek, Sk, fk)
          }))
        },
        Sk = {
          capture: !0,
          passive: !0
        },
        bk = (kk, ik, Dk, fk, Sk) => (!(0, oi.b)() || !Oi.has(kk)) && (ek(kk, ik, Dk, fk, Sk), !0),
        rk = () => document.pointerLockElement === kk,
        Pk = (0, Ti.f)(),
        mk = kk => {
          kk.ctrlKey && ik.ctrlCombosAreGames() && !(0, Ki.i)(kk.target) && kk.preventDefault()
        },
        Mk = (kk, Dk, fk) => {
          ik.inspect(kk, Dk, !1), ek(ce.Hb.KeyUp, Dk, 0, 0, (0, Wi.o)(fk, kk.timeStamp)), ik.keyReleased(Dk)
        },
        Kk = new Map,
        xk = (kk, ek, ik) => kk[ik] || ("AltRight" === ek || "ControlLeft" === ek) && kk.getModifierState("AltGraph"),
        nk = new Map,
        Uk = () => {
          Kk.clear(), nk.clear()
        },
        Hk = kk => {
          if (document.hasFocus())
            for (const [ek, ik] of nk) nk.delete(ek), xk(kk, ek, ik) || (Kk.delete(ek), Mk(kk, Zi.n[ek], gi(kk)))
        };
      kk.tabIndex = -1;
      let wk = 0,
        lk = 0;
      const pk = () => {
        const ek = kk.getBoundingClientRect();
        wk = ek.left, lk = ek.top
      };
      let yk = "mouse";
      const Yk = () => !rk() && ("mouse" === yk || !ik.touchUiShown()),
        Lk = (kk, ek, ik) => {
          const Dk = (iD(kk.clientX - wk) | iD(kk.clientY - lk) << 16) >>> 0;
          bk(ce.Hb.MouseMove, ce.bc.Point, ek, ik, Dk)
        };
      let Ck = !1,
        Ak = 0;
      const jk = () => {
        Ck && (Ck = !1, ik.viewShown() && (0, ue.K)())
      };
      Dk.push((() => {
        clearTimeout(Ak)
      })), fk(window, "keydown", (kk => {
        "Escape" === kk.key ? (0, ue.A)(!0) : kk.repeat || (0, Ki.i)(kk.target) || (Ck = !0, clearTimeout(Ak), Ak = window.setTimeout(jk, 0))
      }), Sk), fk(window, "keydown", (kk => {
        jk(), mk(kk), Hk(kk);
        const ek = Zi.n[kk.code];
        if ("number" !== typeof ek || !ik.viewShown()) return;
        const Dk = (0, Ki.i)(kk.target);
        Dk || !ik.prevents(ek) && !Ri.has(kk.code) || kk.preventDefault(), kk.repeat || ik.inspect(kk, ek, !0), bk(ce.Hb.KeyDown, ek, 0, 0, (0, Wi.o)(gi(kk), kk.timeStamp)) && Kk.set(kk.code, ek), Dk || ik.keyPressed(ek)
      }), {
        capture: !1,
        passive: !1
      }), fk(window, "keyup", (kk => {
        "Escape" === kk.key && (0, ue.A)(!1), mk(kk), Kk.delete(kk.code), nk.delete(kk.code), Hk(kk);
        const ek = Zi.n[kk.code];
        "number" === typeof ek && Mk(kk, ek, gi(kk))
      }), {
        capture: !0,
        passive: !1
      }), fk(window, "mousemove", (kk => {
        "mouse" === yk && Yk() ? Lk(kk, kk.movementX, kk.movementY) : rk() ? bk(ce.Hb.MouseMove, ce.bc.Stamped, kk.movementX, kk.movementY, (0, Wi.o)(0, kk.timeStamp)) : bk(ce.Hb.MouseMove, 0, kk.movementX, kk.movementY, 0)
      }), Sk);
      let sk = 0,
        dk = 0;
      const Vk = [];
      let Fk = !1,
        uk = !1;
      fk(kk, "mousedown", (kk => {
        if ((0, oi.b)()) return;
        Hk(kk);
        const Dk = 1 << kk.button;
        if (!rk() && (0, ue.G)() && (0, ue.e)() && (uk = !0, !Fk)) return void(sk |= Dk);
        sk &= ~Dk;
        const fk = kk.button <= 2 ? Ni(kk) : void 0;
        void 0 !== fk && (Vk[kk.button] = fk, ik.inspect(kk, fk, !0)), Yk() && Lk(kk, 0, 0), ek(ce.Hb.MouseDown, kk.button, kk.clientX, kk.clientY, (0, Wi.o)(gi(kk), kk.timeStamp)), dk |= Dk, void 0 !== fk && ik.keyPressed(fk)
      }), Sk), fk(window, "mouseup", (kk => {
        var Dk;
        Hk(kk);
        const fk = 1 << kk.button,
          Sk = 0 !== (sk & ~dk & fk);
        if (sk &= ~fk, dk &= ~fk, Sk) return;
        const bk = kk.button <= 2 ? null !== (Dk = Vk[kk.button]) && void 0 !== Dk ? Dk : Ni(kk) : void 0;
        void 0 !== bk && ik.inspect(kk, bk, !1), ek(ce.Hb.MouseUp, kk.button, kk.clientX, kk.clientY, (0, Wi.o)(gi(kk), kk.timeStamp)), void 0 !== bk && ik.keyReleased(bk)
      }), Sk), fk(kk, "contextmenu", (kk => {
        kk.preventDefault()
      }), {
        passive: !1
      });
      const qk = kk => {
        (rk() || (0, ue.m)() && (0, Bi.w)()) && (kk.ctrlKey || Pk && !document.fullscreenElement) && kk.preventDefault()
      };
      fk(kk, "wheel", (kk => {
        qk(kk), Hk(kk), bk(ce.Hb.Wheel, kk.deltaMode, kk.deltaX, kk.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Ik = {
          capture: !0,
          passive: !1
        },
        zk = kk => {
          kk ? window.addEventListener("wheel", qk, Ik) : window.removeEventListener("wheel", qk, Ik)
        };
      zk((0, ue.m)()), Dk.push((0, ue.t)(zk)), Dk.push((() => {
        zk(!1)
      }));
      const Qk = new Map,
        vk = new Set,
        Ek = kk => {
          const ek = "stylus" === kk.touchType;
          for (const ik of Qk.values())
            if (!ik.touched && (ek || Math.abs(kk.clientX - ik.x) <= eD && Math.abs(kk.clientY - ik.y) <= eD)) return ik.touched = !0, !0;
          return !1
        },
        hk = kk => 32767 & kk,
        ak = new Set,
        Wk = kk => ik => {
          const Dk = (0, Wi.o)(gi(ik), ik.timeStamp);
          kk !== ce.Hb.TouchStart && kk !== ce.Hb.TouchMove || ((kk, ik) => {
            const Dk = kk.touches;
            if (Dk)
              for (const fk of ak) {
                let kk = !1;
                for (let ek = 0; ek < Dk.length && !kk; ek++) kk = hk(Dk[ek].identifier) === fk;
                kk || (ak.delete(fk), ek(ce.Hb.TouchCancel, fk, 0, 0, ik))
              }
          })(ik, Dk);
          const fk = ik.changedTouches;
          for (let ek = 0; ek < fk.length; ek++) {
            const ik = fk[ek];
            if (kk === ce.Hb.TouchStart && Ek(ik) && vk.add(ik.identifier), vk.has(ik.identifier)) {
              kk !== ce.Hb.TouchEnd && kk !== ce.Hb.TouchCancel || vk.delete(ik.identifier);
              continue
            }
            const Sk = hk(ik.identifier),
              rk = bk(kk, Sk, ik.clientX - wk, ik.clientY - lk, Dk);
            kk === ce.Hb.TouchStart ? rk && ak.add(Sk) : kk !== ce.Hb.TouchMove && ak.delete(Sk)
          }
        },
        tk = Wk(ce.Hb.TouchStart);
      fk(kk, "touchstart", (kk => {
        kk.preventDefault(), (0, oi.b)() || (ik.touchStarting(), tk(kk))
      }), {
        passive: !1
      }), fk(kk, "touchmove", Wk(ce.Hb.TouchMove), Sk), fk(kk, "touchend", Wk(ce.Hb.TouchEnd), Sk), fk(kk, "touchcancel", Wk(ce.Hb.TouchCancel), Sk);
      const Xk = kk => kD | 32767 & kk,
        Bk = (kk, ek) => {
          bk(kk, Xk(ek.pointerId), ek.clientX - wk, ek.clientY - lk, (0, Wi.o)(gi(ek), ek.timeStamp))
        };
      fk(window, "pointerdown", (ek => {
        yk = ek.pointerType, "mouse" === ek.pointerType && ek.target !== kk && ik.viewShown() && (0, ue.N)()
      }), Sk), fk(kk, "pointerdown", (kk => {
        "pen" === kk.pointerType && 0 === kk.button && (0, ue.m)() && (0, Bi.w)() && (kk.preventDefault(), (0, oi.b)() || (Qk.set(kk.pointerId, {
          x: kk.clientX,
          y: kk.clientY,
          touched: !1
        }), ik.touchStarting(), Bk(ce.Hb.TouchStart, kk)))
      }), {
        passive: !1
      }), fk(window, "pointermove", (kk => {
        yk = kk.pointerType, Qk.has(kk.pointerId) && Bk(ce.Hb.TouchMove, kk), "mouse" !== kk.pointerType && Yk() && Lk(kk, 0, 0)
      }), Sk);
      const ck = kk => ek => {
        Qk.delete(ek.pointerId) && Bk(kk, ek)
      };
      fk(window, "pointerup", ck(ce.Hb.TouchEnd), Sk), fk(window, "pointercancel", ck(ce.Hb.TouchCancel), Sk);
      let Tk = 0;
      const Zk = () => {
          Tk = 0, pk(), ik.resized()
        },
        Ok = () => {
          const kk = ik.sizeCanvas();
          null !== kk && ek(ce.Hb.Resize, 0, kk.cssWidth, kk.cssHeight, (0, Wi.k)(kk.renderScale)), pk(), ik.resized(), 0 === Tk && (Tk = requestAnimationFrame(Zk))
        };
      fk(window, "resize", Ok, Sk), Dk.push(ik.watchRenderScale(Ok)), Dk.push((() => {
        cancelAnimationFrame(Tk)
      })), fk(window, "focus", (kk => {
        kk.isTrusted && (ek(ce.Hb.Focus, 0, 0, 0, 0), ik.viewShown() && (0, ue.N)())
      }), {
        passive: !0
      });
      const gk = () => {
          (0, ue.A)(!1), sk = 0
        },
        Gk = () => {
          ak.clear(), Qk.clear(), vk.clear()
        };
      let Nk = 0,
        Rk = 0;
      fk(window, "blur", (Dk => {
        gk(), (0, ue.j)();
        for (const kk of Kk.keys()) {
          const ek = Ji.get(kk);
          void 0 !== ek && nk.set(kk, ek)
        }
        Dk.isTrusted && ((kk => {
          for (const [ik, Dk] of Qk) ek(ce.Hb.TouchCancel, Xk(ik), Dk.x, Dk.y, (0, Wi.o)(0, kk));
          Qk.clear()
        })(Dk.timeStamp), ek(ce.Hb.Blur, ce.v.KeepTouches, 0, 0, 0)), Pk && Dk.isTrusted && (clearTimeout(Rk), Rk = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const kk of Kk.values()) Mk(Dk, kk, 0);
            Uk()
          }
        }), 0)), clearTimeout(Nk), Nk = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Bi.w)() && ik.viewShown() && kk.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Dk.push((() => {
        clearTimeout(Nk), clearTimeout(Rk)
      })), fk(window, "mousedown", (ek => {
        Pk && ek.isTrusted && !document.hasFocus() && (0, Bi.w)() && ik.viewShown() && (window.focus(), kk.focus({
          preventScroll: !0
        }))
      }), Sk), fk(document, "visibilitychange", (() => {
        document.hidden ? (ek(ce.Hb.Blur, 0, 0, 0, 0), Gk()) : document.hasFocus() && ek(ce.Hb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Dk.push((0, oi.e)((() => {
        gk(), ek(ce.Hb.Blur, ce.v.Release, 0, 0, 0), ik.keysReleased(), Uk(), dk = 0, Gk(), ek(ce.Hb.Joystick, 0, 0, 0, 0), document.hasFocus() && ek(ce.Hb.Focus, 0, 0, 0, 0)
      })));
      const Jk = !ik.canLock(),
        ke = () => Jk && !(0, ue.m)() ? ce.Cc.Lockless : ce.Cc.Released,
        ee = () => {
          rk() && (Fk = !1, uk = !1), ek(ce.Hb.PointerLock, rk() ? ce.Cc.Locked : ke(), 0, 0, 0), (0, ue.C)(rk())
        };
      return fk(document, "pointerlockchange", ee, {
        passive: !0
      }), fk(document, "pointerlockerror", (() => {
        Fk ||= uk, uk = !1, (0, ue.s)()
      }), {
        passive: !0
      }), Jk && Dk.push((0, ue.t)((() => {
        ek(ce.Hb.PointerLock, ke(), 0, 0, 0)
      }))), Ok(), ek(document.hasFocus() ? ce.Hb.Focus : ce.Hb.Blur, 0, 0, 0, 0), ee(), () => {
        for (const kk of Dk.splice(0)) kk()
      }
    }
    var fD = ik(33721),
      SD = ik(33707),
      bD = ik(1939);
    const rD = new Map(Zi.e.map(((kk, ek) => [kk, ek]))),
      PD = ["jump", "primary-fire", "alt-fire"],
      mD = ["primary-fire", "alt-fire"];

    function MD(kk) {
      return `${bD.b}${kk}`
    }
    const KD = ["forward", "backward", "left", "right", "sprint", "jump"];

    function xD(kk) {
      const ek = [];
      for (const ik of kk) {
        const kk = "string" === typeof ik ? Zi.n[ik] : void 0;
        "number" === typeof kk && ek.push(kk)
      }
      return ek
    }
    class nD {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [kk, ek] of Object.entries(Zi.g)) this.keys.set(kk, ek);
        this.updateKeySets()
      }
      prevents(kk) {
        return this.preventKeys.has(kk)
      }
      moves(kk) {
        return this.movementKeys.has(kk)
      }
      checks(kk, ek) {
        return (ek ? this.checkedDown : this.checkedUp).has(kk)
      }
      sync(kk, ek) {
        for (const [ik, Dk] of this.keys) {
          const fk = kk(MD(ik)),
            Sk = Array.isArray(fk) ? xD(fk) : Zi.g[ik];
          (Sk.length !== Dk.length || Sk.some(((kk, ek) => kk !== Dk[ek]))) && this.bind(ik, Sk, ek)
        }
      }
      bind(kk, ek, ik) {
        const Dk = rD.get(kk);
        if (void 0 !== Dk) {
          ik(ce.Hb.Binding, 0, 0, 0, Dk | ce.r.Clear << 8);
          for (const Sk of [...ek, ...null !== (fk = Zi.k[kk]) && void 0 !== fk ? fk : []]) {
            var fk;
            ik(ce.Hb.Binding, Sk, 0, 0, Dk | ce.r.Add << 8)
          }
          this.keys.set(kk, ek), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Dk of Zi.q)
          for (const ek of null !== (kk = this.keys.get(Zi.e[Dk])) && void 0 !== kk ? kk : []) {
            var kk;
            this.preventKeys.add(ek)
          }
        this.movementKeys.clear();
        for (const Dk of KD)
          for (const kk of null !== (ek = this.keys.get(Dk)) && void 0 !== ek ? ek : []) {
            var ek;
            this.movementKeys.add(kk)
          }
        for (const [Dk, fk] of [
            [this.checkedDown, PD],
            [this.checkedUp, mD]
          ]) {
          Dk.clear();
          for (const kk of fk)
            for (const ek of null !== (ik = this.keys.get(kk)) && void 0 !== ik ? ik : []) {
              var ik;
              Dk.add(ek)
            }
        }
      }
    }
    var UD = ik(4745),
      HD = ik(36136);
    const wD = "[bloxd-wasm-client]";

    function lD() {
      return "inGame" === Zk.b.get("gameState") && !(0, ti.w)()
    }
    let pD = null;

    function yD(kk, ek) {
      pD && ek.writePendingInput() && pD.push(function(kk, ek) {
        let ik = "";
        for (const Dk of ek) ik += Dk.toString(16).padStart(2, "0");
        return ik ? `${kk} ${ik}` : String(kk)
      }(kk, ek.rings.input.written()))
    }
    const YD = [];

    function LD(kk, ek, ik, Dk) {
      kk === ce.ib.InputAction && Dk === ce.Bb && YD.push(ek.getUint32(ik, !0))
    }
    var CD = ik(40505),
      AD = ik(1175),
      jD = ik(36442);
    const sD = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: AD.wasmScreens
    };

    function dD(kk) {
      var ek, ik;
      let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [fk, Sk] = kk.split(":");
      return (null !== (ek = null === (ik = sD[fk]) || void 0 === ik ? void 0 : ik[Sk]) && void 0 !== ek ? ek : kk).replace(/\{\{(\w+)\}\}/g, ((kk, ek) => {
        var ik;
        return null !== (ik = Dk[ek]) && void 0 !== ik ? ik : kk
      }))
    }

    function VD(kk, ek) {
      (0, ai.d)();
      const ik = document.createElement("div");
      ik.setAttribute("role", "alertdialog"), ik.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Dk = document.createElement("div");
      Dk.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const fk = document.createElement("h2");
      fk.textContent = dD(kk.title);
      const Sk = document.createElement("p");
      if (Sk.textContent = dD(kk.help, kk.helpValues), Sk.style.whiteSpace = "pre-line", Dk.append(fk, Sk), kk.discordLink) {
        const kk = document.createElement("a");
        kk.href = jD.d, kk.target = "_blank", kk.rel = "noreferrer", kk.style.color = "#8ab4ff", kk.textContent = dD("wasmScreens:reportOnDiscord"), Dk.append(kk)
      }
      const bk = document.createElement("div");
      return bk.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Dk.append(bk), ik.append(Dk), document.body.append(ik), new Promise((Dk => {
        const fk = kk => {
            null === ek || void 0 === ek || ek.removeEventListener("abort", Sk), ik.remove(), Dk(kk)
          },
          Sk = () => {
            fk(!1)
          };
        null === ek || void 0 === ek || ek.addEventListener("abort", Sk, {
          once: !0
        });
        const rk = (kk, ek) => {
          const ik = document.createElement("button");
          ik.textContent = dD(kk), ik.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ik.addEventListener("click", (() => {
            fk(ek)
          })), bk.append(ik)
        };
        null !== kk.cancel && rk(kk.cancel, !1), rk(kk.confirm, !0)
      }))
    }
    var FD = ik(40311);
    const uD = 6e4,
      qD = 3e5;
    var ID = ik(3604);
    var zD = ik(40513),
      QD = ik(623),
      vD = ik(11);

    function ED(kk, ek) {
      const ik = vD.eb.encode(ek);
      ! function(kk, ek) {
        let ik = ek >= 0 ? 2 * ek : 2 * -ek - 1;
        for (; ik >= 128;) kk.push(ik % 128 | 128), ik = Math.floor(ik / 128);
        kk.push(ik)
      }(kk, ik.length);
      for (const Dk of ik) kk.push(Dk)
    }
    let hD, aD, WD;
    (() => {
      const kk = ["length", 0, "b", 3, 1, 2, 4, void 0, 5, !1, "d", !0, "a", "s", "resolv", "e", "then", "postCo", "okies", 12, 1023, 65536, 23, 10, 55296, 56320, 6, 63, 128, 80, 139, 25, 224, 192, "Invalid byte index", 255, 136, 249, 31, "Invalid continuation byte", 240, "c", 15, 7, 18, 168, null, 56319, 64512, 65535, 57343, "Lone s", "urroga", "te U+", 16, 4294967168, 4294965248, 4294901760, 4292870144, 228, 2048, 248, 1114111, "Invalid UTF-8 detected", 238, "3.0.0", "undefi", "ned", 188, 75];

      function ek() {}
      const Dk = (kk[1], vD[kk[13]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        fk = (kk[1], vD[kk[13]])("QkFCWUxPTg=="),
        Sk = (kk[1], vD[kk[13]])("QW5kZXNpdGU="),
        bk = (kk[1], vD[kk[13]])("U21vb3RoIEdyYW5pdGU="),
        rk = (kk[1], vD[kk[13]])("RGlvcml0ZQ=="),
        Pk = async (ek, Dk, fk, Sk) => {
          const [{
            clientSideServerUrls: bk
          }, {
            HttpPayloadType: rk,
            postJsonWithMetricsCookiesAndCustomResponse: Pk
          }] = await Promise.all([Promise[kk[14] + kk[15]]()[kk[16]]((() => ik(1177))), Promise[kk[14] + kk[15]]()[kk[16]]((() => ik(1104)))]), mk = bk.getHttpUrlFromWebSocketUrl(ek.endpoint), Mk = ek[kk[17] + kk[18]] === kk[46] ? kk[7] : await ek[kk[17] + kk[18]]();
          await Pk("" + mk + Dk, fk, {
            ["retrie" + kk[13]]: Sk
          }, rk.blob, Mk)
        };
      hD = async (ik, Dk) => {
        const fk = function(kk, ek, ik, Dk) {
          const fk = [];
          ED(fk, kk), ED(fk, ek), ED(fk, ik);
          for (const Sk of Dk) fk.push(Sk);
          return fk
        }(ik.game, ik.lobby, (kk[1], QD[kk[10]])(), Dk);
        try {
          function Sk() {
            ! function(...ek) {
              function ik(...ek) {
                for (Mk(ek[kk[0]] = kk[4], ek[kk[4]] = [], ek[kk[2]] = kk[1], ek[-kk[19]] = ek[kk[1]].length, ek[kk[10]] = kk[7], ek[kk[8]] = kk[7]); ek[kk[2]] < ek[-kk[19]];) Mk(ek[kk[10]] = ek[kk[1]].charCodeAt(ek[kk[2]]++), ek[kk[10]] >= kk[24] && ek[kk[10]] <= kk[47] && ek[kk[2]] < ek[-kk[19]] ? (ek[kk[8]] = ek[kk[1]].charCodeAt(ek[kk[2]]++), (ek[kk[8]] & kk[48]) == kk[25] ? ek[kk[4]].push(((ek[kk[10]] & kk[20]) << kk[23]) + (ek[kk[8]] & kk[20]) + kk[21]) : (ek[kk[4]].push(ek[kk[10]]), ek[kk[2]]--)) : ek[kk[4]].push(ek[kk[10]]));
                return ek[kk[4]]
              }

              function Dk(...ek) {
                if (ek[kk[0]] = kk[4], ek[kk[1]] >= kk[24] && ek[kk[1]] <= kk[50]) throw Error(kk[51] + kk[52] + kk[53] + ek[kk[1]].toString(kk[54]).toUpperCase() + " is not a scalar valu" + kk[15])
              }

              function fk(...ik) {
                return ik[kk[0]] = kk[5], ek[kk[12]](ik[kk[1]] >> ik[kk[4]] & kk[27] | kk[28])
              }

              function Sk(ik) {
                var Sk;
                return (ik & kk[55]) == kk[1] ? ek[kk[12]](ik) : (Sk = "", (ik & kk[56]) == kk[1] ? Sk = ek[kk[12]](ik >> kk[26] & kk[38] | kk[33]) : (ik & kk[57]) == kk[1] ? Mk(Dk(ik), Sk = ek[kk[12]](ik >> kk[19] & kk[42] | kk[32]), Sk += fk(ik, kk[26])) : (ik & kk[58]) == kk[1] && Mk(Sk = ek[kk[12]](ik >> kk[44] & kk[43] | kk[40]), Sk += fk(ik, kk[19]), Sk += fk(ik, kk[26])), Sk += ek[kk[12]](ik & kk[27] | kk[28]))
              }

              function bk(...ik) {
                if (ik[kk[0]] = kk[1], ek[-kk[32]] >= ek[kk[3]]) throw Error(kk[34]);
                if (Mk(ik[kk[2]] = ek[kk[10]][ek[-kk[32]]] & kk[35], ek[-kk[32]]++), (ik[kk[2]] & kk[33]) == kk[28]) return ik[kk[2]] & kk[27];
                throw Error(kk[39])
              }

              function rk(...ik) {
                if (Mk(ik[kk[0]] = kk[1], ik[kk[12]] = kk[7], ik[-kk[36]] = kk[7], ik[kk[41]] = kk[7], ik[kk[10]] = kk[7], ik[-kk[37]] = kk[7]), ek[-kk[32]] > ek[kk[3]]) throw Error(kk[34]);
                if (ek[-kk[32]] == ek[kk[3]]) return kk[9];
                if (Mk(ik[kk[12]] = ek[kk[10]][ek[-kk[32]]] & kk[35], ek[-kk[32]]++), (ik[kk[12]] & kk[28]) == kk[1]) return ik[kk[12]];
                if ((ik[kk[12]] & kk[32]) == kk[33]) {
                  if (Mk(ik[-kk[36]] = bk(), ik[-kk[37]] = (ik[kk[12]] & kk[38]) << kk[26] | ik[-kk[36]]), ik[-kk[37]] >= kk[28]) return ik[-kk[37]];
                  throw Error(kk[39])
                }
                if ((ik[kk[12]] & kk[40]) == kk[32]) {
                  if (Mk(ik[-kk[36]] = bk(), ik[kk[41]] = bk(), ik[-kk[37]] = (ik[kk[12]] & kk[42]) << kk[19] | ik[-kk[36]] << kk[26] | ik[kk[41]]), ik[-kk[37]] >= kk[60]) return Dk(ik[-kk[37]]), ik[-kk[37]];
                  throw Error(kk[39])
                }
                if ((ik[kk[12]] & kk[61]) == kk[40] && (Mk(ik[-kk[36]] = bk(), ik[kk[41]] = bk(), ik[kk[10]] = bk(), ik[-kk[37]] = (ik[kk[12]] & kk[43]) << kk[44] | ik[-kk[36]] << kk[19] | ik[kk[41]] << kk[26] | ik[kk[10]]), ik[-kk[37]] >= kk[21] && ik[-kk[37]] <= kk[62])) return ik[-kk[37]];
                throw Error(kk[63])
              }
              Mk(ek[kk[0]] = kk[4], ek[kk[12]] = String.fromCharCode), Mk(ek[kk[10]] = kk[7], ek[kk[3]] = kk[7], ek[-kk[32]] = kk[7]), Mk(ek[kk[1]].version = kk[65], ek[kk[1]].encode = function(...ek) {
                for (Mk(ek[kk[0]] = kk[4], ek[-kk[29]] = ik(ek[kk[1]]), ek[kk[31]] = ek[-kk[29]].length, ek[kk[30]] = -kk[4], ek[kk[10]] = kk[7], ek[kk[15]] = ""); ++ek[kk[30]] < ek[kk[31]];) Mk(ek[kk[10]] = ek[-kk[29]][ek[kk[30]]], ek[kk[15]] += Sk(ek[kk[10]]));
                return ek[kk[15]]
              }, ek[kk[1]].decode = function(...Dk) {
                for (Mk(Dk[kk[0]] = kk[4], ek[kk[10]] = ik(Dk[kk[1]]), ek[kk[3]] = ek[kk[10]].length, ek[-kk[32]] = kk[1], Dk[kk[12]] = [], Dk[kk[45]] = kk[7]);
                  (Dk[kk[45]] = rk()) !== kk[9];) Dk[kk[12]].push(Dk[kk[45]]);
                return function(...ik) {
                  for (Mk(ik[kk[0]] = kk[4], ik[kk[12]] = ik[kk[1]].length, ik[kk[2]] = -kk[4], ik[kk[3]] = kk[7], ik[kk[22]] = ""); ++ik[kk[2]] < ik[kk[12]];) ik[kk[3]] = ik[kk[1]][ik[kk[2]]], ik[kk[3]] > kk[49] && Mk(ik[kk[3]] -= kk[21], ik[kk[22]] += ek[kk[12]](ik[kk[3]] >>> kk[23] & kk[20] | kk[24]), ik[kk[3]] = kk[25] | ik[kk[3]] & kk[20]), ik[kk[22]] += ek[kk[12]](ik[kk[3]]);
                  return ik[kk[22]]
                }(Dk[kk[12]])
              })
            }(typeof exports === kk[66] + kk[67] ? this.utf8 = {} : exports)
          }
          "ZJ1Enz" in ek && Sk(), await Pk(ik, "/persisted/keep-alive", {
            type: "hU",
            data: fk
          }, kk[3])
        } catch (bk) {
          function mk(...ek) {
            ek[kk[0]] = kk[1]
          }
          "gh3NPou" in ek && mk(), console.warn(bk)
        }
      };
      const mk = (...ek) => (ek[kk[0]] = kk[5], Object.getOwnPropertyDescriptor(ek[kk[1]], ek[kk[4]]));

      function Mk() {
        Mk = function() {}
      }
      aD = (...ik) => (ik[kk[0]] = kk[1], "Ff62WNp" in ek && (module.exports = async (ek = () => {
        throw new Error("No redacted path provided")
      }) => {
        const ik = new Set(process.argv.slice(kk[5]));
        if (!ik.has("--version")) {
          if (ik.size !== kk[4]) return kk[9];
          if (!ik.has("-v")) return kk[9]
        }
        return await (async () => void 0 === await ek() ? " (local)" : "")(), kk[11]
      }), (kk[1], vD.G)(), mk(navigator, Dk) !== kk[7] ? Sk : mk(window, fk) === kk[7] ? bk : rk), WD = async Dk => {
        "Poy9lxU" in ek && function(...ek) {
          ek[kk[0]] = kk[1]
        }();
        try {
          function fk() {
            ! function(...ek) {
              function ik(ek) {
                var ik, Dk, fk, Sk, bk = [];
                for (Mk(ik = kk[1], Dk = ek.length, fk = void 0, Sk = void 0); ik < Dk;) Mk(fk = ek.charCodeAt(ik++), fk >= kk[24] && fk <= kk[47] && ik < Dk ? ((Sk = ek.charCodeAt(ik++)) & kk[48]) == kk[25] ? bk.push(((fk & kk[20]) << kk[23]) + (Sk & kk[20]) + kk[21]) : (bk.push(fk), ik--) : bk.push(fk));
                return bk
              }

              function Dk(...ek) {
                if (ek[kk[0]] = kk[4], ek[kk[1]] >= kk[24] && ek[kk[1]] <= kk[50]) throw Error(kk[51] + kk[52] + kk[53] + ek[kk[1]].toString(kk[54]).toUpperCase() + " is not a scalar value")
              }

              function fk(...ik) {
                return ik[kk[0]] = kk[5], ek[kk[4]](ik[kk[1]] >> ik[kk[4]] & kk[27] | kk[28])
              }

              function Sk(ik) {
                var Sk;
                return (ik & kk[55]) == kk[1] ? ek[kk[4]](ik) : (Sk = "", (ik & kk[56]) == kk[1] ? Sk = ek[kk[4]](ik >> kk[26] & kk[38] | kk[33]) : (ik & kk[57]) == kk[1] ? Mk(Dk(ik), Sk = ek[kk[4]](ik >> kk[19] & kk[42] | kk[32]), Sk += fk(ik, kk[26])) : (ik & kk[58]) == kk[1] && Mk(Sk = ek[kk[4]](ik >> kk[44] & kk[43] | kk[40]), Sk += fk(ik, kk[19]), Sk += fk(ik, kk[26])), Sk += ek[kk[4]](ik & kk[27] | kk[28]))
              }

              function bk(...ik) {
                if (ik[kk[0]] = kk[1], ek[-kk[59]] >= ek[kk[41]]) throw Error(kk[34]);
                if (Mk(ik[kk[12]] = ek[kk[10]][ek[-kk[59]]] & kk[35], ek[-kk[59]]++), (ik[kk[12]] & kk[33]) == kk[28]) return ik[kk[12]] & kk[27];
                throw Error(kk[39])
              }

              function rk() {
                var ik, fk, Sk, rk, Pk;
                if (Mk(fk = void 0, Sk = void 0, rk = void 0, Pk = void 0), ek[-kk[59]] > ek[kk[41]]) throw Error(kk[34]);
                if (ek[-kk[59]] == ek[kk[41]]) return kk[9];
                if (Mk(ik = ek[kk[10]][ek[-kk[59]]] & kk[35], ek[-kk[59]]++), (ik & kk[28]) == kk[1]) return ik;
                if ((ik & kk[32]) == kk[33]) {
                  if (Mk(fk = bk(), Pk = (ik & kk[38]) << kk[26] | fk), Pk >= kk[28]) return Pk;
                  throw Error(kk[39])
                }
                if ((ik & kk[40]) == kk[32]) {
                  if (Mk(fk = bk(), Sk = bk(), Pk = (ik & kk[42]) << kk[19] | fk << kk[26] | Sk), Pk >= kk[60]) return Dk(Pk), Pk;
                  throw Error(kk[39])
                }
                if ((ik & kk[61]) == kk[40] && (Mk(fk = bk(), Sk = bk(), rk = bk(), Pk = (ik & kk[43]) << kk[44] | fk << kk[19] | Sk << kk[26] | rk), Pk >= kk[21] && Pk <= kk[62])) return Pk;
                throw Error(kk[63])
              }
              Mk(ek[kk[0]] = kk[4], ek[kk[4]] = String.fromCharCode), Mk(ek[kk[10]] = kk[7], ek[kk[41]] = kk[7], ek[-kk[59]] = kk[7]), Mk(ek[kk[1]].version = kk[65], ek[kk[1]].encode = function(ek) {
                var Dk, fk, bk, rk, Pk = ik(ek);
                for (Mk(Dk = Pk.length, fk = -kk[4], bk = void 0, rk = ""); ++fk < Dk;) Mk(bk = Pk[fk], rk += Sk(bk));
                return rk
              }, ek[kk[1]].decode = function(...Dk) {
                for (Mk(Dk[kk[0]] = kk[4], ek[kk[10]] = ik(Dk[kk[1]]), ek[kk[41]] = ek[kk[10]].length, ek[-kk[59]] = kk[1], Dk[kk[64]] = [], Dk[kk[2]] = kk[7]);
                  (Dk[kk[2]] = rk()) !== kk[9];) Dk[kk[64]].push(Dk[kk[2]]);
                return function(ik) {
                  var Dk, fk, Sk, bk = ik.length;
                  for (Mk(Dk = -kk[4], fk = void 0, Sk = ""); ++Dk < bk;)(fk = ik[Dk]) > kk[49] && Mk(fk -= kk[21], Sk += ek[kk[4]](fk >>> kk[23] & kk[20] | kk[24]), fk = kk[25] | fk & kk[20]), Sk += ek[kk[4]](fk);
                  return Sk
                }(Dk[kk[64]])
              })
            }(typeof exports === kk[66] + kk[67] ? this.utf8 = {} : exports)
          }
          "ExvI1H7" in ek && fk();
          const Sk = aD(),
            {
              retryTransientHttpFailures: bk
            } = await Promise[kk[14] + kk[15]]()[kk[16]](((...ek) => (ek[kk[0]] = kk[1], ik(1743))));
          await bk("Block image post", (() => Pk(Dk, "/images/" + Sk + ".png", {
            block: Sk
          }, kk[1])), 8e3)
        } catch (rk) {
          function Kk() {
            console.log((function(...ek) {
              for (Mk(ek[kk[0]] = kk[4], ek[kk[4]] = ek[kk[1]].length, ek[kk[69]] = [], ek[kk[3]] = kk[1], ek[kk[44]] = kk[1], ek[kk[1]].sort(((kk, ek) => kk - ek))), ek[kk[8]] = kk[1]; ek[kk[8]] < ek[kk[4]]; ek[kk[8]]++)
                if (!(ek[kk[8]] > kk[1] && ek[kk[1]][ek[kk[8]]] === ek[kk[1]][ek[kk[8]] - kk[4]]))
                  for (Mk(ek[kk[3]] = ek[kk[8]] + kk[4], ek[kk[44]] = ek[kk[4]] - kk[4]); ek[kk[3]] < ek[kk[44]];)
                    if (ek[kk[1]][ek[kk[8]]] + ek[kk[1]][ek[kk[3]]] + ek[kk[1]][ek[kk[44]]] < kk[1]) ek[kk[3]]++;
                    else if (ek[kk[1]][ek[kk[8]]] + ek[kk[1]][ek[kk[3]]] + ek[kk[1]][ek[kk[44]]] > kk[1]) ek[kk[44]]--;
              else {
                for (ek[kk[69]].push([ek[kk[1]][ek[kk[8]]], ek[kk[1]][ek[kk[3]]], ek[kk[1]][ek[kk[44]]]]); ek[kk[3]] < ek[kk[44]] && ek[kk[1]][ek[kk[3]]] === ek[kk[1]][ek[kk[3]] + kk[4]];) ek[kk[3]]++;
                for (; ek[kk[3]] < ek[kk[44]] && ek[kk[1]][ek[kk[44]]] === ek[kk[1]][ek[kk[44]] - kk[4]];) ek[kk[44]]--;
                Mk(ek[kk[3]]++, ek[kk[44]]--)
              }
              return ek[kk[69]]
            }))
          }
          "tB3unc2" in ek && Kk(), console.error("Block image post failed:", rk)
        }
      }
    })();
    var tD = ik(40423),
      XD = ik(1778);
    const BD = 1e3 * tD.b.seatReservationSeconds - 3e3;
    class cD {
      constructor(kk) {
        var ek, ik, Dk, fk;
        let Sk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (ek = Sk.wallNow) && void 0 !== ek ? ek : Date.now, this.monoNow = null !== (ik = Sk.monoNow) && void 0 !== ik ? ik : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Dk = Sk.sleep) && void 0 !== Dk ? Dk : XD.c, this.follow = new Ae.e(Sk.signal);
        const bk = null !== (fk = Sk.fetch) && void 0 !== fk ? fk : fetch;
        this.seat = (0, yi.h)(kk.endpoint, kk.roomName, kk.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (kk, ek) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), bk(kk, ek)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(kk) {
        if ("rematched" === this.use) return;
        (0, Ae.q)(kk);
        const ek = "pending" !== this.request,
          ik = () => {
            this.abort((0, Ae.i)(kk))
          };
        let Dk;
        null === kk || void 0 === kk || kk.addEventListener("abort", ik, {
          once: !0
        });
        try {
          Dk = await this.seat
        } catch (fk) {
          if ((0, Ae.q)(kk), !ek) throw fk;
          return void(this.use = "lost")
        } finally {
          null === kk || void 0 === kk || kk.removeEventListener("abort", ik)
        }
        if ((0, Ae.q)(kk), !(this.ageMs() > BD)) return this.use = "taken", Dk;
        this.use = "renewed"
      }
      async reserveInstead(kk, ek) {
        try {
          return await kk()
        } catch (ik) {
          const fk = this.holdLeftMs();
          if (!(ik instanceof Qk.k) || ik.code !== Dk.c.duplicateLobbyNameError.code || 0 === fk) throw ik;
          return await this.sleep(fk + 500, ek), kk()
        }
      }
      release() {
        const {
          request: kk,
          use: ek
        } = this, ik = this.holdsNoSeat();
        return this.abort(), "taken" === ek || ik ? null : {
          unused: "unused" === ek ? "abandoned" : ek,
          answered: "answered" === kk,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var kk;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const ek = null !== (kk = this.answeredAt) && void 0 !== kk ? kk : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ik = Math.max(this.wallNow() - ek.wall, this.monoNow() - ek.mono);
        return Math.max(0, 1e3 * tD.b.seatReservationSeconds - ik)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(kk) {
        (0, Ae.l)(this.follow.controller, kk)
      }
    }
    var TD = ik(40522);
    const oD = new Uint8Array(0);
    class ZD {
      constructor(kk) {
        if (this.options = kk, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === kk.module) return this.stopped = !0, void kk.fail("no wasm module for the meshing workers");
        kk.loadWorkers().then((kk => {
          if (this.stopped) return;
          const {
            count: ek
          } = kk;
          this.workers = kk;
          for (let ik = 0; ik < ek; ik++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let ik = 0; ik < ek; ik++) this.start(ik)
        }), (kk => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", kk))
        }))
      }
      take(kk, ek, ik) {
        const Dk = this.slots[ek];
        if (kk === ce.ge.Retire) return void(Dk && !Dk.gone && (this.endWorker(ek), Dk.started = !1, this.giveUp(ek, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const fk = null === Dk || void 0 === Dk ? void 0 : Dk.worker;
        if (!fk || !Dk.started) return;
        const Sk = ik.byteLength;
        let bk = null;
        kk === ce.ge.Mesh && Dk.heapRetries > 0 && (Dk.heapRetries--, bk = this.pooled(Sk, !0)), bk ??= this.buffer(Sk), new Uint8Array(bk, 0, Sk).set(ik), fk.postMessage({
          type: "job",
          kind: kk,
          bytes: bk,
          len: Sk
        }, [bk])
      }
      takeFailedMeshJobs() {
        const kk = this.failedJobs;
        return this.failedJobs = 0, kk
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let kk = 0; kk < this.slots.length; kk++) {
          const ek = this.slots[kk];
          null !== ek.worker && (this.endWorker(kk), ek.startsWithoutResult = 0, ek.trapsWithoutResult = 0, this.tellLost(kk))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let kk = 0; kk < this.slots.length; kk++) this.start(kk)
        }
      }
      stop() {
        this.stopped = !0;
        for (const ek of this.slots) {
          var kk;
          OD(ek), null === (kk = ek.worker) || void 0 === kk || kk.terminate(), ek.worker = null, ek.started = !1
        }
      }
      start(kk) {
        const ek = this.slots[kk],
          {
            module: ik
          } = this.options,
          {
            workers: Dk
          } = this;
        if (this.stopped || this.resting || ek.gone || null === ik || null === Dk) return;
        if (ek.startsWithoutResult >= 3) return void this.giveUp(kk, "failed to start 3 times in a row", "no meshing worker would start");
        let fk;
        ek.startsWithoutResult++;
        try {
          fk = Dk.create()
        } catch (Sk) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} did not start`, Sk), void this.start(kk)
        }
        ek.worker = fk, fk.onmessage = ik => {
          let {
            data: Dk
          } = ik;
          ek.worker === fk && this.onReply(kk, Dk)
        }, fk.onmessageerror = () => {
          ek.worker === fk && this.lose(kk, "a reply could not be read")
        }, fk.onerror = ik => {
          ik.preventDefault(), ek.worker === fk && this.lose(kk, ik.message || "its script failed")
        };
        try {
          fk.postMessage({
            type: "start",
            module: ik,
            maxKeptLightStates: Dk.maxKeptLightStates
          })
        } catch (Sk) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} could not be sent the module`, Sk), fk.terminate(), ek.worker = null, void this.start(kk)
        }
        ek.watch = new TD.e(TD.c, (ek => {
          this.lose(kk, (0, TD.h)(ek), (() => {
            this.options.onStartTimeout(ek)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, ek) {
        const ik = this.slots[kk];
        switch (ek.type) {
          case "started":
            OD(ik), ik.started = !0, this.options.write(0, ce.ee.WorkerStarted, 0, kk, 0, oD);
            break;
          case "lost":
            this.lose(kk, ek.reason);
            break;
          case "memory":
            var Dk, fk;
            null === (Dk = (fk = this.options).onMemoryStats) || void 0 === Dk || Dk.call(fk, kk, ek.stats);
            break;
          case "result": {
            const Dk = ek.status === ce.Ib.Trapped;
            if (0 !== ek.jobId) {
              if (Dk) this.countFailedJob(ek.outOfMemory, "light_trap", ek.trap);
              else if (ik.startsWithoutResult = 0, ik.trapsWithoutResult = 0, ek.status === ce.Ib.Refused) {
                const ik = function(kk) {
                  if (kk.byteLength < 32) return "(no reason)";
                  const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength),
                    ik = Math.min(ek.getUint32(28, !0), kk.byteLength - 28 - 4);
                  return (new TextDecoder).decode(kk.subarray(32, 32 + ik)).slice(0, 200)
                }(new Uint8Array(ek.bytes, 0, ek.len));
                this.countFailedJob(Oe.b.test(ik), "light_refused_input", ik), this.logRefusal(kk, ik)
              }
              ek.status === ce.Ib.HeapRefused && (ik.heapRetries = Math.min(ik.heapRetries + 1, 4), this.logHeapRefusal(kk))
            }
            if (this.options.write(ek.jobId, ce.ee.JobResult, ek.status, kk, ek.workerUs, new Uint8Array(ek.bytes, 0, ek.len)), this.recycle(ek.bytes), ek.spare && this.recycle(ek.spare), !Dk) break;
            if (ik.startsWithoutResult = 0, 0 === ek.jobId) {
              this.lose(kk, `the tables trapped its wasm: ${ek.trap}`);
              break
            }
            ik.trapsWithoutResult++;
            const fk = ik.trapsWithoutResult > 6;
            ik.gone ||= fk, this.lose(kk, `a job trapped its wasm: ${ek.trap}`), fk && this.giveUp(kk, `trapped ${ik.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(kk, ek, ik) {
        if (kk) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(ek) || (this.faultsReported.add(ek), this.options.onLightFault(ek, ik));
        this.failedJobs++
      }
      logRefusal(kk, ek) {
        var ik;
        !this.refusals.has(ek) && this.refusals.size >= 16 && (ek = "(other reasons)");
        const Dk = (null !== (ik = this.refusals.get(ek)) && void 0 !== ik ? ik : 0) + 1;
        this.refusals.set(ek, Dk), (0, Ai.y)(Dk) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} refused a chunk (${Dk} so far for this reason): ${ek}`)
      }
      logHeapRefusal(kk) {
        this.heapRefusals++, (0, Ai.y)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(kk, ek, ik) {
        const Dk = this.slots[kk];
        if (Dk.gone = !0, Dk.goneFor = {
            why: ek,
            failure: ik
          }, console.warn(`[bloxd-wasm-client] meshing worker ${kk} ${ek}: giving up on it`), this.slots.every((kk => kk.gone))) {
          this.stop();
          const kk = new Set(this.slots.map((kk => {
              var ek;
              return null === (ek = kk.goneFor) || void 0 === ek ? void 0 : ek.failure
            }))),
            ek = this.slots.map(((kk, ek) => {
              var ik, Dk;
              return `worker ${ek} ${null!==(ik=null===(Dk=kk.goneFor)||void 0===Dk?void 0:Dk.why)&&void 0!==ik?ik:"went"}`
            }));
          this.options.fail(1 === kk.size ? ik : `no meshing worker is left (${ek.join(", ")})`)
        }
      }
      lose(kk, ek, ik) {
        console.warn(`[bloxd-wasm-client] meshing worker ${kk} was lost: ${ek}`), this.endWorker(kk), this.stopped || (ik ? ik() : this.options.onWorkerLost(ek), this.tellLost(kk), this.start(kk))
      }
      endWorker(kk) {
        var ek, ik, Dk;
        const fk = this.slots[kk];
        OD(fk), null === (ek = fk.worker) || void 0 === ek || ek.terminate(), fk.worker = null, fk.heapRetries = 0, null === (ik = (Dk = this.options).onMemoryGone) || void 0 === ik || ik.call(Dk, kk)
      }
      tellLost(kk) {
        const ek = this.slots[kk];
        ek.started && (ek.started = !1, this.options.write(0, ce.ee.WorkerLost, 0, kk, 0, oD))
      }
      buffer(kk) {
        var ek;
        return null !== (ek = this.pooled(kk)) && void 0 !== ek ? ek : new ArrayBuffer(Math.max(16384, kk))
      }
      pooled(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = -1;
        for (let fk = 0; fk < this.pool.length; fk++) {
          const Dk = this.pool[fk].byteLength;
          Dk >= kk && (ik < 0 || (ek ? Dk > this.pool[ik].byteLength : Dk < this.pool[ik].byteLength)) && (ik = fk)
        }
        if (ik < 0) return null;
        const Dk = this.pool[ik];
        return this.pool[ik] = this.pool[this.pool.length - 1], this.pool.pop(), Dk
      }
      recycle(kk) {
        this.pool.length < 4 * this.slots.length && kk.byteLength > 0 && kk.byteLength <= 1048576 && this.pool.push(kk)
      }
    }

    function OD(kk) {
      var ek;
      null === (ek = kk.watch) || void 0 === ek || ek.cancel(), kk.watch = null
    }
    var gD = ik(38695),
      GD = ik(40335),
      ND = ik(40525),
      RD = ik(40533),
      JD = (ik(40358), ik(40541)),
      kf = ik(40397);

    function ef(kk) {
      const ek = new Uint8Array(kk.length >> 2);
      for (let ik = 0; ik < ek.length; ik++) ek[ik] = kk[4 * ik + 3];
      return ek
    }
    async function Df(kk) {
      const ek = await (0, JD.h)(kk);
      try {
        const {
          width: kk,
          height: ik,
          pixels: Dk
        } = (0, kf.q)(ek);
        return {
          width: kk,
          height: ik,
          alpha: ef(Dk)
        }
      } finally {
        ek.close()
      }
    }
    class ff {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Df;
        this.session = kk, this.sources = ek, this.warn = ik, this.load = Dk, this.nextPoll = 0, this.aU = !1, this.warned = new Set
      }
      drain(kk) {
        if (kk < this.nextPoll) return;
        this.nextPoll = kk + 250;
        const ek = this.session.sunShadowWantedTextures();
        if (ek)
          for (let ik = 0; ik + 1 < ek.length; ik += 2) this.hand(ek[ik], ek[ik + 1]);
        for (const ik of this.session.takeSunShadowWarnings()) this.warn(ik)
      }
      dispose() {
        this.aU = !0
      }
      async hand(kk, ek) {
        var ik, Dk, fk, Sk, bk;
        let rk, Pk = null;
        try {
          if (Pk = await this.sources.blockImageUrl(kk), null === Pk) throw new Error(`block image ${kk} has no URL`);
          rk = await this.load(Pk)
        } catch (Mk) {
          var mk;
          const ek = null !== (mk = Pk) && void 0 !== mk ? mk : `block image ${kk}`;
          this.warned.has(ek) || (this.warned.add(ek), this.warn(`sun shadow plane texture ${ek} didn't load: its blocks cast no shadow`, Mk))
        }
        this.aU || this.session.setSunShadowTexture(kk, ek, null !== (ik = null === (Dk = rk) || void 0 === Dk ? void 0 : Dk.width) && void 0 !== ik ? ik : 0, null !== (fk = null === (Sk = rk) || void 0 === Sk ? void 0 : Sk.height) && void 0 !== fk ? fk : 0, null === (bk = rk) || void 0 === bk ? void 0 : bk.alpha)
      }
    }
    var Sf = ik(40550),
      bf = ik(40371),
      rf = ik(40553),
      Pf = ik(40557),
      mf = ik(40378),
      Mf = ik(40380),
      Kf = ik(33801),
      xf = ik(33673),
      nf = ik(40569);
    const Uf = 8192,
      Hf = new Set;
    const wf = new Set([...xf.c, "sceneDownload"]);
    var lf = ik(40294),
      pf = ik(40578);
    const yf = new Uint8Array(0);
    let Yf = null;

    function Lf(kk) {
      return {
        aux: ce.sc.AdStart | (kk ? ce.sc.PreventMovement : 0),
        payload: yf
      }
    }
    var Cf = ik(2727),
      Af = ik(689);
    const jf = "__bloxdSceneCapture";
    var sf = ik(1767),
      df = ik(2855);
    let Vf = null,
      Ff = null,
      uf = null,
      qf = !1;

    function If() {
      Vf ??= performance.now()
    }
    var zf = ik(40581);
    class Qf {
      constructor(kk) {
        var ek, ik;
        this.host = kk, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((kk => {
          this.landRequest = kk
        })), this.follow = kk => {
          let ek = kk;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const kk = null === this.requested && null !== ek;
            var ik;
            kk && (null === (ik = ek) || void 0 === ik || ik(null));
            const Dk = await this.landing;
            var fk;
            null === Dk && kk || (null === (fk = ek) || void 0 === fk || fk(Dk))
          })), () => {
            ek = null
          }
        }, this.startRead = (ik = kk.store, ik.keys().then((kk => ({
          own: kk.includes(ui.e),
          oneShot: kk.includes(ui.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((kk => {
          let {
            own: ek,
            oneShot: ik
          } = kk;
          this.oneShotStored = ik, (ek || ik) && this.request()
        })), this.channel = (null !== (ek = kk.openChannel) && void 0 !== ek ? ek : ui.w)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var kk;
        if (null !== this.requested) return this.requested;
        null === (kk = this.channel) || void 0 === kk || kk.close(), this.channel = null;
        const ek = this.oneShotStored;
        return this.requested = function(kk, ek, ik) {
          return new Promise((ek => {
            ek(kk())
          })).catch((kk => (null !== ek && (0, ui.s)(ek), ik(kk), null)))
        }((() => this.host.load(ek).then((kk => (kk.setGamePackConfirm(this.confirm), this.landed = kk, kk)))), ek ? this.host.store : null, this.host.CU), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var kk;
          return null !== (kk = this.requested) && void 0 !== kk ? kk : null
        }))
      }
      setGamePackConfirm(kk) {
        var ek;
        this.confirm = kk, null === (ek = this.landed) || void 0 === ek || ek.setGamePackConfirm(kk)
      }
    }
    var vf = ik(35841);
    const Ef = 216 * vf.h,
      hf = 92 * vf.e,
      af = 64 * vf.h,
      Wf = 16 * vf.h;

    function tf() {
      var kk, ek;
      return null !== (kk = null === (ek = performance.memory) || void 0 === ek ? void 0 : ek.Py) && void 0 !== kk ? kk : null
    }
    class Xf {
      constructor(kk, ek) {
        this.budgetBytes = kk, this.reads = ek, this.estimate = null, this.shedAt = null
      }
      read(kk) {
        var ek;
        const ik = this.reads.storedChunks(),
          Dk = this.reads.gpuBytes(),
          fk = Math.max(null !== (ek = this.reads.jsHeapBytes()) && void 0 !== ek ? ek : 0, af),
          Sk = Ef + kk + fk + Dk + ik * hf;
        this.estimate = {
          wasmBytes: kk,
          jsHeapBytes: fk,
          gpuBytes: Dk,
          storedChunks: ik,
          totalBytes: Sk
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: kk,
          budgetBytes: ek,
          shedAt: ik
        } = this;
        return !(null === kk || null === ek || kk.totalBytes < ek || null !== ik && kk.totalBytes < ik + Wf) && (this.shedAt = kk.totalBytes, !0)
      }
      describe() {
        const {
          estimate: kk,
          budgetBytes: ek
        } = this;
        return null === kk ? null : `estimate ${(0,vf.l)(kk.totalBytes)} MiB of budget ${null===ek?"none":(0,vf.l)(ek)}: wasm ${(0,vf.l)(kk.wasmBytes)} js ${(0,vf.l)(kk.jsHeapBytes)} gpu ${(0,vf.l)(kk.gpuBytes)} chunks ${kk.storedChunks}`
      }
      snapshot() {
        const {
          estimate: kk,
          budgetBytes: ek
        } = this;
        return {
          ...null === kk ? {} : {
            footprintMiB: Number((0, vf.l)(kk.totalBytes)),
            gpuMiB: Number((0, vf.l)(kk.gpuBytes)),
            storedChunks: kk.storedChunks
          },
          footprintBudgetMiB: null === ek ? -1 : Number((0, vf.l)(ek))
        }
      }
    }
    var Bf = ik(2752),
      Tf = ik(4453),
      of = ik(38672),
      Zf = ik(37532);
    const Of = Te.hb + 1,
      gf = 4096 * Of;
    class Gf {
      constructor(kk, ek) {
        this.log = kk, this.take = ek, this.XM = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(kk, ek) {
        const ik = this.take();
        ik.length >= Te.gb && ik[0] > 0 && (0, Bf.l)("remesh", `${ik[0]} core records lost to a full log`);
        const Dk = this.XM;
        for (let fk = Te.gb; fk + Te.hb <= ik.length; fk += Te.hb) {
          for (let kk = fk; kk < fk + Te.hb; kk++) Dk.push(ik[kk]);
          Dk.push(kk)
        }
        if (ek || !(Dk.length < gf)) {
          for (let ek = 0; ek < Dk.length; ek += Of) this.feed(ek, kk);
          Dk.length = 0, ek && this.log.frame(kk)
        }
      }
      feed(kk, ek) {
        var ik;
        const Dk = this.XM,
          fk = (0, Zf.g)(Dk[kk + 1], Dk[kk + 2], Dk[kk + 3]),
          Sk = Dk[kk + 4],
          bk = Dk[kk + Te.hb];
        switch (Dk[kk]) {
          case Te.Ob.Edit:
            this.log.edit(fk, bk);
            break;
          case Te.Ob.Sent:
            this.latest.set(fk, Sk), this.log.sent(fk, Sk, Dk[kk + 5], Dk[kk + 6], Dk[kk + 7], null !== (ik = this.unshown.get(fk)) && void 0 !== ik ? ik : Zf.e, bk);
            break;
          case Te.Ob.Done: {
            this.log.received(Sk, Dk[kk + 5] / 1e3, bk);
            const ek = this.unshown.get(fk);
            void 0 === ek ? this.unshown.set(fk, [Sk]) : ek.push(Sk);
            break
          }
          case Te.Ob.Failed: {
            const kk = this.latest.get(fk);
            void 0 !== kk && kk !== Sk ? this.log.reassign(fk, Sk, kk) : this.log.failed(Sk), this.ended(fk, Sk);
            break
          }
          case Te.Ob.Shown:
            this.log.applied(fk, Sk, ek), this.ended(fk, Sk);
            break;
          case Te.Ob.Replaced:
            this.log.reassign(fk, Sk, Dk[kk + 5]), this.ended(fk, Sk);
            break;
          case Te.Ob.Emptied:
            this.log.emptied(fk, ek);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Dk[kk]}`)
        }
      }
      ended(kk, ek) {
        this.latest.get(kk) === ek && this.latest.delete(kk);
        const ik = this.unshown.get(kk);
        if (void 0 === ik) return;
        const Dk = ik.indexOf(ek);
        Dk >= 0 && ik.splice(Dk, 1), 0 === ik.length && this.unshown.delete(kk)
      }
    }
    let Nf = null;
    var Rf = ik(3194),
      Jf = ik(39206);
    const kS = new Uint8Array(0);
    class eS {
      constructor(kk) {
        this.options = kk, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.XM = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== kk.module ? kk.write(0, ce.ee.WorldgenStarted, 0, 0, kS) : this.giveUp()
      }
      take(kk, ek) {
        if (!(this.gone || null === this.worker && null === this.XM))
          if (kk === ce.ge.WorldgenSeed) {
            const kk = 0 === ek.byteLength ? null : this.options.decodeSettings(ek);
            null === kk ? this.release() : function(kk, ek) {
              if ((null === kk || void 0 === kk ? void 0 : kk.byteLength) !== ek.byteLength) return !1;
              for (let ik = 0; ik < kk.byteLength; ik++)
                if (kk[ik] !== ek[ik]) return !1;
              return !0
            }(this.seed, ek) || (this.seed = ek.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: kk
            }, []), null !== kk ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (kk === ce.ge.Generate) {
          var ik;
          const kk = new DataView(ek.buffer, ek.byteOffset, ce.Yd),
            Dk = null !== (ik = this.pool.pop()) && void 0 !== ik ? ik : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: kk.getUint32(0, !0),
            x: kk.getInt32(4, !0),
            y: kk.getInt32(8, !0),
            z: kk.getInt32(12, !0),
            bytes: Dk
          }, [Dk])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, ce.ee.WorldgenStarted, 0, 0, kS)))
      }
      stop() {
        var kk;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (kk = this.worker) || void 0 === kk || kk.terminate(), this.worker = null
      }
      post(kk, ek) {
        var ik;
        null !== this.XM ? this.XM.push({
          message: kk,
          transfer: ek
        }) : null === (ik = this.worker) || void 0 === ik || ik.postMessage(kk, ek)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.XM ??= [])
      }
      endWorker() {
        var kk, ek, ik;
        this.endWatch(), null === (kk = this.worker) || void 0 === kk || kk.terminate(), this.worker = null, null === (ek = (ik = this.options).onMemoryGone) || void 0 === ek || ek.call(ik)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((kk => {
          this.createWorker = kk, this.wanted && this.start()
        }), (kk => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(kk))
        })))
      }
      start() {
        const {
          module: kk
        } = this.options, ek = this.createWorker;
        if (this.gone || null === kk || null === ek) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ik;
        this.startsWithoutResult++;
        try {
          ik = ek()
        } catch (fk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", fk), this.lastLoss = `it did not start (${String(fk)})`, void this.start()
        }
        this.worker = ik, ik.onmessage = kk => {
          let {
            data: ek
          } = kk;
          this.worker === ik && this.onReply(ik, ek)
        }, ik.onerror = kk => {
          kk.preventDefault(), this.worker === ik && this.lose(kk.message || "its script failed")
        };
        try {
          ik.postMessage({
            type: "start",
            module: kk,
            oU: Dk.g.oU
          })
        } catch (fk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", fk), this.lastLoss = `it could not be sent the module (${String(fk)})`, ik.terminate(), this.worker = null, void this.start()
        }
        this.watch = new TD.e(TD.d, (kk => {
          this.lose((0, TD.h)(kk), (() => {
            this.options.onStartTimeout(kk)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, ek) {
        switch (ek.type) {
          case "started": {
            this.endWatch();
            const ek = this.XM;
            if (null === ek) {
              this.coreWaits = !1, this.options.write(0, ce.ee.WorldgenStarted, 0, 0, kS);
              break
            }
            this.XM = null;
            for (const {
                message: ik,
                transfer: Dk
              }
              of ek) kk.postMessage(ik, Dk);
            break
          }
          case "lost":
            this.lose(ek.reason);
            break;
          case "memory":
            var ik, Dk;
            null === (ik = (Dk = this.options).onMemoryStats) || void 0 === ik || ik.call(Dk, ek.stats);
            break;
          case "result":
            ek.status !== ce.Ib.Trapped && (this.startsWithoutResult = 0), this.options.write(ek.ticket, ce.ee.WorldgenResult, ek.status, ek.workerUs, new Uint8Array(ek.bytes, 0, ek.len)), this.recycle(ek.bytes), ek.spare && this.recycle(ek.spare)
        }
      }
      lose(kk, ek) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${kk}`), this.lastLoss = kk, this.endWorker(), this.gone || (ek ? ek() : this.options.onWorkerLost(kk), this.dropHeld(), this.XM = null, this.options.write(0, ce.ee.WorldgenLost, ce.he.Lost, 0, kS), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, ce.ee.WorldgenLost, ce.he.Gone, 0, kS)
      }
      endWatch() {
        var kk;
        null === (kk = this.watch) || void 0 === kk || kk.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.XM) {
          for (const {
              message: kk
            }
            of this.XM) "generate" === kk.type && this.recycle(kk.bytes);
          this.XM.length = 0
        }
      }
      recycle(kk) {
        this.pool.length < 16 && kk.byteLength > 0 && kk.byteLength <= 16384 && this.pool.push(kk)
      }
    }
    var iS = ik(37339),
      DS = ik(3670),
      fS = ik(40247),
      SS = ik(40587),
      bS = ik(40369);
    const rS = /[(@\s]([^\s(@]+)$/,
      PS = /:\d/;

    function mS(kk, ek) {
      for (let ik = 0; ik + ek.length <= kk.length; ik++) {
        let Dk = 0;
        for (; Dk < ek.length && kk[ik + Dk] === ek[Dk];) Dk++;
        if (Dk === ek.length) return ik
      }
      return -1
    }

    function MS(kk) {
      return "(" === kk || ")" === kk || "@" === kk || "," === kk || " " === kk || "\t" === kk
    }

    function KS(kk, ek) {
      let ik = ek;
      for (; ik > 0 && !MS(kk[ik - 1]);) ik--;
      let Dk = ek;
      for (; Dk < kk.length && !MS(kk[Dk]);) Dk++;
      let fk = "";
      for (let Sk = ik; Sk < Dk; Sk++) fk += kk[Sk];
      return fk
    }

    function xS(kk, ek) {
      var ik;
      const Dk = /[^\n]+/g,
        fk = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Sk = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let bk = null,
        rk = null,
        Pk = (0, vD.k)(vD.U, Dk, [kk]);
      for (; null !== Pk;) {
        const ik = (0, vD.k)(vD.U, fk, [Pk[0]]),
          mk = null === ek ? -1 : mS(Pk[0], ek);
        if (-1 !== mk) {
          if (null !== ik) return ik[0];
          const kk = KS(Pk[0], mk),
            ek = (0, vD.k)(vD.U, rS, [Pk[0]]),
            Dk = null !== (0, vD.k)(vD.U, PS, [kk]) ? kk : null === ek ? null : ek[1],
            fk = null === Dk ? null : (0, vD.k)(vD.U, Sk, [Dk]);
          if (null !== fk && "" !== fk[1]) return fk[1]
        }
        null !== ik && (null === bk ? bk = ik[0] : null === rk && ik[0] !== bk && (rk = ik[0])), Pk = (0, vD.k)(vD.U, Dk, [kk])
      }
      return null !== (ik = rk) && void 0 !== ik ? ik : null === bk ? "none" : "own"
    }
    const nS = /:(\d+):(\d+)\)?$/;

    function US(kk, ek) {
      const ik = (0, vD.k)(vD.U, nS, [ek]);
      return null === ik ? kk : kk + ":" + ik[1] + ":" + ik[2]
    }

    function HS(kk) {
      const ek = /[^\n]+/g,
        ik = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Dk = null,
        fk = "",
        Sk = !1,
        bk = (0, vD.k)(vD.U, ek, [kk]);
      for (; null !== bk;) {
        const rk = (0, vD.k)(vD.U, ik, [bk[0]]),
          Pk = null === rk ? (0, vD.k)(vD.U, rS, [bk[0]]) : null,
          mk = null !== Pk && null !== (0, vD.k)(vD.U, PS, [Pk[1]]) && 0 !== mS(Pk[1], "wasm:") ? Pk[1] : null;
        if (null === Dk) null !== rk ? (Dk = rk[2], fk = rk[4]) : null !== mk && (Dk = "");
        else if (null !== rk) {
          if (Sk = !0, "" !== rk[1]) return {
            reader: "inline",
            frame: US("blob", bk[0])
          };
          if (rk[2] !== Dk) {
            const kk = "moz-extension" === rk[3] || "safari-web-extension" === rk[3];
            let ek = "";
            for (let ik = 0; ik < rk[5].length && ik < 20; ik++) ek += rk[5][ik];
            return {
              reader: kk ? rk[3] : rk[2],
              frame: US("" === ek ? "-" : ek, bk[0])
            }
          }
          if (rk[4] !== fk) return {
            reader: "inline",
            frame: US("inline", bk[0])
          }
        } else if (null !== mk) {
          const kk = -1 !== mS(bk[0], "userscript") || -1 !== mS(bk[0], ".user.js");
          return {
            reader: kk ? "userscript" : "inline",
            frame: US(kk ? "userscript" : "eval", bk[0])
          }
        }
        bk = (0, vD.k)(vD.U, ek, [kk])
      }
      const rk = Sk ? "own" : "unknown";
      return {
        reader: rk,
        frame: rk
      }
    }

    function wS(kk, ek) {
      return (0, iS.h)(function(kk) {
        if ("string" !== typeof kk || 0 === kk.length) return "-";
        let ek = 2166136261;
        const ik = kk.length < 4096 ? kk.length : 4096;
        for (let fk = 0; fk <= ik; fk++) ek ^= fk === ik ? kk.length : (0, vD.k)(vD.bb, kk, [fk]), ek = ek + (ek << 1) + (ek << 4) + (ek << 7) + (ek << 8) + (ek << 24) >>> 0;
        let Dk = "";
        for (let fk = 28; fk >= 0; fk -= 4) Dk += "0123456789abcdef" [ek >>> fk & 15];
        return Dk
      }(ek), HS(kk).frame)
    }
    const lS = (kk, ek) => kk.includes(ek),
      pS = kk => {
        try {
          return kk()
        } catch {
          return !1
        }
      },
      yS = -1,
      YS = kk => {
        try {
          return kk()
        } catch {
          return yS
        }
      };

    function LS(kk, ek) {
      return {
        probe: (ik, Dk, fk) => {
          try {
            return ((ik, Dk, fk) => {
              switch (ik) {
                case ce.Dc.StackCheck:
                  return ek.stackCheck() ? 1 : 0;
                case ce.Dc.ConfirmMesh:
                  return ek.confirmMesh();
                case ce.Dc.IndexPassReplaced:
                  return ek.indexPassReplaced() ? 1 : 0;
                case ce.Dc.ProductSubChanged:
                  return ek.productSubChanged() ? 1 : 0;
                case ce.Dc.RenderStatus:
                  return ek.Ir();
                case ce.Dc.Held:
                  return ek.XM();
                case ce.Dc.PlayerKilledSubs:
                  return ek.playerKilledSubs();
                case ce.sb: {
                  const ik = ek.getComplete();
                  return null === ik ? 0 : (0, vD.k)(vD.x, vD.eb, [ik, new vD.c((0, vD.E)(kk()), Dk, fk)]).written
                }
                default:
                  return 0
              }
            })(ik, Dk, fk)
          } catch {
            return ce.yc
          }
        }
      }
    }
    class CS {
      constructor(kk) {
        this.write = kk, this.flagsWritten = 0, this.written = (0, vD.o)(null)
      }
      Px(kk) {
        let {
          flags: ek,
          values: ik
        } = kk;
        for (let Dk = 0; Dk < ik.length; Dk++) this.value(ik[Dk][0], ik[Dk][1]);
        this.setFlags(ek | ce.h.Ready)
      }
      value(kk, ek) {
        this.written[kk] !== ek && this.write(kk, ek, 0) && (this.written[kk] = ek)
      }
      setFlags(kk) {
        const ek = kk & ~this.flagsWritten;
        0 !== ek && this.write(ce.k.Flags, ek, ek) && (this.flagsWritten |= ek)
      }
      originStackHit() {
        return this.write(ce.k.Flags, ce.h.OriginStackHit, ce.h.OriginStackHit)
      }
    }
    const AS = {
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
      jS = 1e3;

    function sS(kk, ek) {
      const ik = new CS(ek);
      let Dk = !1;
      ik.Px(kk.Px());
      const fk = (0, vD.Y)((() => {
          ik.Px(kk.Px())
        }), jS),
        Sk = () => {
          kk.checks.stackCheck() && (Dk = !0)
        };
      (0, SS.f)(Sk);
      const bk = () => {
        const ek = kk.checkPadCall();
        0 !== ek && ik.setFlags(ek)
      };
      return (0, fS.h)(bk), {
        onInput: ek => {
          (function(kk) {
            switch (kk) {
              case ce.Hb.KeyDown:
              case ce.Hb.KeyUp:
              case ce.Hb.MouseDown:
              case ce.Hb.MouseUp:
              case ce.Hb.Wheel:
              case ce.Hb.TouchStart:
              case ce.Hb.TouchEnd:
              case ce.Hb.TouchButton:
              case ce.Hb.PadAction:
                return !0;
              default:
                return !1
            }
          })(ek) && kk.checks.stackCheck() && (Dk = !0)
        },
        onSend: Sk,
        beforeFrame: () => {
          Dk && ik.originStackHit() && (Dk = !1)
        },
        onEvent: ek => {
          const Dk = kk.checkEvent(ek);
          ik.value(ce.k.ProbeUsedProp, kk.usedProp()), 0 !== Dk && ik.setFlags(Dk)
        },
        stop: () => {
          (0, vD.Z)(fk), (0, SS.d)(Sk), (0, fS.g)(bk)
        }
      }
    }
    let dS;
    const VS = [!1, 1, "length", 2, void 0, null, 3, 0, "s", "c3RhY2", "cw==", 1e5, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", !0, 58, "d", 5, "stack", "name", "a", 8, 16, 151, 101, "AFoUBO", "I", 512, "012345", "c", 219, 15, 6, 4, 129, 102, 44, 107, 1023, 63, 128, 12, 43, 255, "b", 28, 32, 24, 7, 18, 10, 19, 64, 65535, 60, "s=", "=", ";", 1e3, "expire", ";path=", "/", "o", "abc", 909522486, 1549556828, 186, 256, "6789AB", "CDEF", "6789ab", "cdef", 94, 50, 161, 79, 55296, 56319, 56320, 57343, 65536, 127, 2047, 192, 31, 224, 2097151, 240, 67, 13, 106, 184, 22, 11, 25, 17, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 242, 66, "string", "p", 48, 138, "t", "l", 85, 233, 170, 229, 223, "functi", "on", 238, 124, 119, "h", 163, "f", 111, "e", "i", "k", "j", 81, 168, 65537, 198, 100, 30, 74, 194, 90, "E", "protot", "ype", "decode", 78, "I=", "eTR5bm", "q", "r", "A", "Nd", "chEven", "dispat", "now", 228, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "g", "get", "v", 75, 176, "w", "None", "En", "tOverw", "ritten", "plete"];

    function FS(kk, ek, ik) {
      if (kk === VS[31] + VS[32]) return ek + ik
    }

    function uS() {}

    function qS() {
      qS = function() {}
    }
    dS = function(kk) {
      let ek = arguments[VS[2]] > VS[1] && arguments[VS[1]] !== VS[4] ? arguments[VS[1]] : () => VS[5],
        ik = arguments[VS[2]] > VS[3] && arguments[VS[3]] !== VS[4] ? arguments[VS[3]] : VS[5],
        Dk = arguments[VS[2]] > VS[6] && arguments[VS[6]] !== VS[4] ? arguments[VS[6]] : "";
      const fk = window,
        Sk = (0, vD[VS[8]])("RXJyb3" + VS[220]),
        bk = (0, vD[VS[8]])(VS[9] + VS[61]),
        rk = (0, vD[VS[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        mk = (0, vD[VS[8]])(VS[9] + "tUcmFjZUxpbWl0"),
        Mk = (0, vD[VS[8]])("bmF0aXZl"),
        Kk = [(0, vD[VS[8]])("bWFpbi5qcw=="), (0, vD[VS[8]])("aW5kZXguanM="), (0, vD[VS[8]])("dXNlcnNjcmlwdA=="), (0, vD[VS[8]])("Y29udGVudC5q" + VS[10]), (0, vD[VS[8]])("b3B0aW9ucy5q" + VS[10]), (0, vD[VS[8]])("cG9wdXAuanM="), (0, vD[VS[8]])("LnVzZXIuanM="), (0, vD[VS[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        xk = (...kk) => {
          kk[VS[2]] = VS[1];
          const ek = fk[Sk],
            ik = ek;
          ik[mk] < VS[11] && (ik[mk] = VS[11]);
          const Dk = "string" === typeof(xk = (new ek)[bk]) ? xk : `${xk}`,
            Pk = {},
            Mk = ik[rk];
          var xk;
          if (typeof Mk === VS[193] + VS[194]) {
            "qHTnE8" + VS[222] in uS && (module.exports = async (kk = () => {
              throw new Error(VS[12])
            }) => {
              const ek = new Set(process.argv.slice(VS[3]));
              if (!ek.has(VS[13])) {
                if (ek.size !== VS[1]) return VS[0];
                if (!ek.has(VS[14])) return VS[0]
              }
              return await (async () => void 0 === await kk() ? VS[18] + VS[19] : "")(), VS[20]
            }), (0, vD[VS[204]])(Mk, ek, [Pk])
          }
          const nk = Pk[bk],
            Uk = kk[VS[7]] ? Kk[VS[2]] : Kk[VS[2]] - VS[1];
          for (let Hk = VS[7]; Hk < Uk; Hk++) {
            if (lS(Dk, Kk[Hk])) return {
              [VS[24]]: Dk,
              [VS[25]]: Kk[Hk]
            };
            if (typeof nk === VS[182] && lS(nk, Kk[Hk])) {
              function wk(...kk) {
                kk[VS[2]] = VS[7]
              }
              return "YjMnwt" + VS[183] in uS && wk(), {
                [VS[24]]: nk,
                [VS[25]]: Kk[Hk]
              }
            }
          }
          return VS[5]
        },
        nk = (...kk) => (kk[VS[2]] = VS[1], xk(kk[VS[7]]) !== VS[5]);
      let Uk = VS[5],
        Hk = VS[5],
        wk = VS[5],
        lk = VS[5];
      const pk = (...kk) => {
        kk[VS[2]] = VS[1], "cQLVOj" + VS[187] in uS && function(...kk) {
          qS(kk[VS[2]] = VS[7], kk[VS[26]] = function(...kk) {
            function ek(...kk) {
              return kk[VS[2]] = VS[1], rk(Sk(Mk(kk[VS[7]])))
            }

            function ik(...kk) {
              return kk[VS[2]] = VS[3], rk(bk(Mk(kk[VS[7]]), Mk(kk[VS[1]])))
            }

            function Dk(...kk) {
              return kk[VS[2]] = VS[3], Pk(bk(Mk(kk[VS[7]]), Mk(kk[VS[1]])))
            }

            function fk(...kk) {
              return kk[VS[2]] = VS[6], mk(bk(Mk(kk[VS[7]]), Mk(kk[VS[1]])), kk[VS[3]])
            }

            function Sk(...kk) {
              return kk[VS[2]] = VS[1], xk(Lk(Kk(kk[VS[7]]), kk[VS[7]].length * VS[27]))
            }

            function bk(...kk) {
              qS(kk[VS[2]] = VS[3], kk[VS[26]] = Kk(kk[VS[7]])), kk[VS[26]].length > VS[28] && (kk[VS[26]] = Lk(kk[VS[26]], kk[VS[7]].length * VS[27]));
              var ek = Array(VS[28]),
                ik = Array(VS[28]);
              for (kk[VS[29]] = VS[7]; kk[VS[29]] < VS[28]; kk[VS[29]]++) qS(ek[kk[VS[29]]] = kk[VS[26]][kk[VS[29]]] ^ VS[70], ik[kk[VS[29]]] = kk[VS[26]][kk[VS[29]]] ^ VS[71]);
              return kk[VS[30]] = Lk(ek.concat(Kk(kk[VS[1]])), VS[33] + kk[VS[1]].length * VS[27]), xk(Lk(ik.concat(kk[VS[30]]), FS(VS[31] + VS[32], VS[33], VS[73])))
            }

            function rk(...ek) {
              ek[VS[2]] = VS[1];
              try {
                kk[VS[26]]
              } catch (ik) {
                kk[VS[26]] = VS[7]
              }
              for (qS(ek[VS[26]] = kk[VS[26]] ? VS[34] + VS[74] + VS[75] : VS[34] + VS[76] + VS[77], ek[VS[36]] = "", ek[VS[35]] = VS[4]), ek[VS[22]] = VS[7]; ek[VS[22]] < ek[VS[7]].length; ek[VS[22]]++) qS(ek[VS[35]] = ek[VS[7]].charCodeAt(ek[VS[22]]), ek[VS[36]] += ek[VS[26]].charAt(ek[VS[35]] >>> VS[39] & VS[37]) + ek[VS[26]].charAt(ek[VS[35]] & VS[37]));
              return ek[VS[36]]
            }

            function Pk(...ek) {
              ek[VS[2]] = VS[1];
              try {
                kk[VS[1]]
              } catch (ik) {
                kk[VS[1]] = ""
              }
              for (qS(ek[VS[1]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ek[-VS[40]] = "", ek[VS[6]] = ek[VS[7]].length), ek[VS[22]] = VS[7]; ek[VS[22]] < ek[VS[6]]; ek[VS[22]] += VS[6])
                for (ek[-VS[41]] = ek[VS[7]].charCodeAt(ek[VS[22]]) << VS[28] | (ek[VS[22]] + VS[1] < ek[VS[6]] ? ek[VS[7]].charCodeAt(ek[VS[22]] + VS[1]) << VS[27] : VS[7]) | (ek[VS[22]] + VS[3] < ek[VS[6]] ? ek[VS[7]].charCodeAt(ek[VS[22]] + VS[3]) : VS[7]), ek[VS[38]] = VS[7]; ek[VS[38]] < VS[39]; ek[VS[38]]++) ek[VS[22]] * VS[27] + ek[VS[38]] * VS[38] > ek[VS[7]].length * VS[27] ? ek[-VS[40]] += kk[VS[1]] : ek[-VS[40]] += ek[VS[1]].charAt(ek[-VS[41]] >>> VS[38] * (VS[6] - ek[VS[38]]) & VS[45]);
              return ek[-VS[40]]
            }

            function mk(...kk) {
              var ek, ik, Dk, fk;
              for (qS(kk[VS[2]] = VS[3], kk[VS[26]] = kk[VS[1]].length, kk[-VS[43]] = Array()), kk[-VS[42]] = Array(Math.ceil(kk[VS[7]].length / VS[3])), ek = VS[7]; ek < kk[-VS[42]].length; ek++) kk[-VS[42]][ek] = kk[VS[7]].charCodeAt(ek * VS[3]) << VS[27] | kk[VS[7]].charCodeAt(ek * VS[3] + VS[1]);
              for (; kk[-VS[42]].length > VS[7];) {
                for (qS(fk = Array(), Dk = VS[7]), ek = VS[7]; ek < kk[-VS[42]].length; ek++) qS(Dk = (Dk << VS[28]) + kk[-VS[42]][ek], ik = Math.floor(Dk / kk[VS[26]]), Dk -= ik * kk[VS[26]]), (fk.length > VS[7] || ik > VS[7]) && (fk[fk.length] = ik);
                qS(kk[-VS[43]][kk[-VS[43]].length] = Dk, kk[-VS[42]] = fk)
              }
              for (kk[VS[22]] = "", ek = kk[-VS[43]].length - VS[1]; ek >= VS[7]; ek--) kk[VS[22]] += kk[VS[1]].charAt(kk[-VS[43]][ek]);
              for (kk[VS[38]] = Math.ceil(kk[VS[7]].length * VS[27] / (Math.log(kk[VS[1]].length) / Math.log(VS[3]))), ek = kk[VS[22]].length; ek < kk[VS[38]]; ek++) kk[VS[22]] = kk[VS[1]][VS[7]] + kk[VS[22]];
              return kk[VS[22]]
            }

            function Mk(...kk) {
              var ek, ik;
              for (qS(kk[VS[2]] = VS[1], kk[VS[1]] = "", kk[VS[3]] = -VS[1]); ++kk[VS[3]] < kk[VS[7]].length;) qS(ek = kk[VS[7]].charCodeAt(kk[VS[3]]), ik = kk[VS[3]] + VS[1] < kk[VS[7]].length ? kk[VS[7]].charCodeAt(kk[VS[3]] + VS[1]) : VS[7]), VS[82] <= ek && ek <= VS[83] && VS[84] <= ik && ik <= VS[85] && qS(ek = VS[86] + ((ek & VS[44]) << VS[56]) + (ik & VS[44]), kk[VS[3]]++), ek <= VS[87] ? kk[VS[1]] += String.fromCharCode(ek) : ek <= VS[88] ? kk[VS[1]] += String.fromCharCode(VS[89] | ek >>> VS[38] & VS[90], VS[46] | ek & VS[45]) : ek <= VS[59] ? kk[VS[1]] += String.fromCharCode(VS[91] | ek >>> VS[47] & VS[37], VS[46] | ek >>> VS[38] & VS[45], VS[46] | ek & VS[45]) : ek <= VS[92] && (kk[VS[1]] += String.fromCharCode(VS[93] | ek >>> VS[55] & VS[54], VS[46] | ek >>> VS[47] & VS[45], VS[46] | ek >>> VS[38] & VS[45], VS[46] | ek & VS[45]));
              return kk[VS[1]]
            }

            function Kk(...kk) {
              for (qS(kk[VS[2]] = VS[1], kk[-VS[51]] = Array(kk[VS[7]].length >> VS[3])), kk[VS[50]] = VS[7]; kk[VS[50]] < kk[-VS[51]].length; kk[VS[50]]++) kk[-VS[51]][kk[VS[50]]] = VS[7];
              for (kk[VS[50]] = VS[7]; kk[VS[50]] < kk[VS[7]].length * VS[27]; kk[VS[50]] += VS[27]) kk[-VS[51]][kk[VS[50]] >> VS[23]] |= (kk[VS[7]].charCodeAt(kk[VS[50]] / VS[27]) & VS[49]) << VS[53] - kk[VS[50]] % VS[52];
              return kk[-VS[51]]
            }

            function xk(kk) {
              var ek, ik = "";
              for (ek = VS[7]; ek < kk.length * VS[52]; ek += VS[27]) ik += String.fromCharCode(kk[ek >> VS[23]] >>> VS[53] - ek % VS[52] & VS[49]);
              return ik
            }

            function nk(...kk) {
              return kk[VS[2]] = VS[3], kk[VS[7]] >>> kk[VS[1]] | kk[VS[7]] << VS[52] - kk[VS[1]]
            }

            function Uk(...kk) {
              return kk[VS[2]] = VS[3], kk[VS[7]] >>> kk[VS[1]]
            }

            function Hk(...kk) {
              return kk[VS[2]] = VS[6], kk[VS[7]] & kk[VS[1]] ^ ~kk[VS[7]] & kk[VS[3]]
            }

            function wk(...kk) {
              return kk[VS[2]] = VS[6], kk[VS[7]] & kk[VS[1]] ^ kk[VS[7]] & kk[VS[3]] ^ kk[VS[1]] & kk[VS[3]]
            }

            function lk(...kk) {
              return kk[VS[2]] = VS[1], nk(kk[VS[7]], VS[3]) ^ nk(kk[VS[7]], VS[95]) ^ nk(kk[VS[7]], VS[98])
            }

            function pk(kk) {
              return nk(kk, VS[38]) ^ nk(kk, VS[99]) ^ nk(kk, VS[100])
            }

            function yk(...kk) {
              return kk[VS[2]] = VS[1], nk(kk[VS[7]], VS[54]) ^ nk(kk[VS[7]], VS[55]) ^ Uk(kk[VS[7]], VS[6])
            }

            function Yk(...kk) {
              return kk[VS[2]] = VS[1], nk(kk[VS[7]], VS[101]) ^ nk(kk[VS[7]], VS[57]) ^ Uk(kk[VS[7]], VS[56])
            }

            function Lk(...ek) {
              var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk;
              for (qS(ek[VS[2]] = VS[3], ek[VS[3]] = new Array(VS[171], -VS[172], VS[173], -VS[174], VS[175], -VS[176], VS[177], VS[178]), ek[VS[6]] = new Array(VS[58])), qS(ek[VS[7]][ek[VS[1]] >> VS[23]] |= VS[46] << VS[53] - ek[VS[1]] % VS[52], ek[VS[7]][(ek[VS[1]] + VS[58] >> VS[179] << VS[39]) + VS[37]] = ek[VS[1]]), Mk = VS[7]; Mk < ek[VS[7]].length; Mk += VS[28]) {
                for (qS(ik = ek[VS[3]][VS[7]], Dk = ek[VS[3]][VS[1]], fk = ek[VS[3]][VS[3]], Sk = ek[VS[3]][VS[6]], bk = ek[VS[3]][VS[39]], rk = ek[VS[3]][VS[23]], Pk = ek[VS[3]][VS[38]], mk = ek[VS[3]][VS[54]]), Kk = VS[7]; Kk < VS[58]; Kk++) qS(ek[VS[6]][Kk] = Kk < VS[28] ? ek[VS[7]][Kk + Mk] : Ck(Ck(Ck(Yk(ek[VS[6]][Kk - VS[3]]), ek[VS[6]][Kk - VS[54]]), yk(ek[VS[6]][Kk - VS[37]])), ek[VS[6]][Kk - VS[28]]), xk = Ck(Ck(Ck(Ck(mk, pk(bk)), Hk(bk, rk, Pk)), kk[VS[3]][Kk]), ek[VS[6]][Kk]), nk = Ck(lk(ik), wk(ik, Dk, fk)), mk = Pk, Pk = rk, rk = bk, bk = Ck(Sk, xk), Sk = fk, fk = Dk, Dk = ik, ik = Ck(xk, nk));
                qS(ek[VS[3]][VS[7]] = Ck(ik, ek[VS[3]][VS[7]]), ek[VS[3]][VS[1]] = Ck(Dk, ek[VS[3]][VS[1]]), ek[VS[3]][VS[3]] = Ck(fk, ek[VS[3]][VS[3]]), ek[VS[3]][VS[6]] = Ck(Sk, ek[VS[3]][VS[6]]), ek[VS[3]][VS[39]] = Ck(bk, ek[VS[3]][VS[39]]), ek[VS[3]][VS[23]] = Ck(rk, ek[VS[3]][VS[23]]), ek[VS[3]][VS[38]] = Ck(Pk, ek[VS[3]][VS[38]]), ek[VS[3]][VS[54]] = Ck(mk, ek[VS[3]][VS[54]]))
              }
              return ek[VS[3]]
            }

            function Ck(...kk) {
              return qS(kk[VS[2]] = VS[3], kk[VS[26]] = (kk[VS[7]] & VS[59]) + (kk[VS[1]] & VS[59]), kk[VS[50]] = (kk[VS[7]] >> VS[28]) + (kk[VS[1]] >> VS[28]) + (kk[VS[26]] >> VS[28])), kk[VS[50]] << VS[28] | kk[VS[26]] & VS[59]
            }
            return qS(kk[VS[2]] = VS[7], kk[VS[26]] = VS[7], kk[VS[1]] = ""), kk[VS[3]] = new Array(VS[107], VS[108], -VS[109], -VS[110], VS[111], VS[112], -VS[113], -VS[114], -VS[115], VS[116], VS[117], VS[118], VS[119], -VS[120], -VS[121], -VS[122], -VS[123], -VS[124], VS[125], VS[126], VS[127], VS[128], VS[129], VS[130], -VS[131], -VS[132], -VS[133], -VS[134], -VS[135], -VS[136], VS[137], VS[138], VS[139], VS[140], VS[141], VS[142], VS[143], VS[144], -VS[145], -VS[146], -VS[147], -VS[148], -VS[149], -VS[150], -VS[151], -VS[152], -VS[153], VS[154], VS[155], VS[156], VS[157], VS[158], VS[159], VS[160], VS[161], VS[162], VS[163], VS[164], -VS[165], -VS[166], -VS[167], -VS[168], -VS[169], -VS[170]), {
              hex: ek,
              b64: Dk,
              any: fk,
              hex_hmac: ik,
              b64_hmac: Dk,
              any_hmac: fk
            }
          }(), console.log(kk[VS[26]]))
        }();
        try {
          return kk[VS[7]]()
        } catch {
          function ek(...kk) {
            kk[VS[2]] = VS[7]
          }
          return "RlYRw8" in uS && ek(), VS[20]
        }
      };
      let yk = VS[0];
      const Yk = () => {
          !yk && (0, vD[VS[186]])() && (yk = VS[20])
        },
        Lk = (...kk) => {
          kk[VS[2]] = VS[1];
          try {
            return kk[VS[7]]()
          } catch {
            return VS[4]
          }
        },
        Ck = (...kk) => {
          kk[VS[2]] = VS[1], "pp3iiRm" in uS && function(...kk) {
            kk[VS[2]] = VS[7]
          }();
          try {
            return kk[VS[7]](), VS[20]
          } catch {
            return VS[0]
          }
        },
        Ak = (0, vD[VS[8]])("a29qbzYzb25i"),
        jk = (0, vD[VS[68]])(VS[5]);
      let sk = VS[5],
        dk = VS[0],
        Vk = VS[0];
      const Fk = (0, vD[VS[68]])(VS[5]);
      let uk = VS[7];
      const qk = (0, vD[VS[68]])(VS[5]);
      let Ik = VS[7];
      const zk = (0, vD[VS[68]])(VS[5]);
      let Qk = VS[0],
        vk = VS[0];
      const Ek = (ek, ik) => {
          if ("kXCaU9" + VS[203] in uS && function(...kk) {
              kk[VS[2]] = VS[7]
            }(), ek === kk) {
            if (sk === VS[5]) {
              function bk(...kk) {
                qS(kk[VS[2]] = VS[7], kk[VS[181]] = function(...kk) {
                  function ek(...kk) {
                    return kk[VS[2]] = VS[3], bk(fk(rk(kk[VS[7]]), rk(kk[VS[1]])))
                  }

                  function ik(...kk) {
                    return kk[VS[2]] = VS[6],
                      function(...kk) {
                        var ek, ik, Dk, fk;
                        for (qS(kk[VS[2]] = VS[3], kk[VS[26]] = kk[VS[1]].length, kk[VS[6]] = Array()), kk[VS[79]] = Array(Math.ceil(kk[VS[7]].length / VS[3])), ek = VS[7]; ek < kk[VS[79]].length; ek++) kk[VS[79]][ek] = kk[VS[7]].charCodeAt(ek * VS[3]) << VS[27] | kk[VS[7]].charCodeAt(ek * VS[3] + VS[1]);
                        for (; kk[VS[79]].length > VS[7];) {
                          for (qS(fk = Array(), Dk = VS[7]), ek = VS[7]; ek < kk[VS[79]].length; ek++) qS(Dk = (Dk << VS[28]) + kk[VS[79]][ek], ik = Math.floor(Dk / kk[VS[26]]), Dk -= ik * kk[VS[26]]), (fk.length > VS[7] || ik > VS[7]) && (fk[fk.length] = ik);
                          qS(kk[VS[6]][kk[VS[6]].length] = Dk, kk[VS[79]] = fk)
                        }
                        for (kk[-VS[80]] = "", ek = kk[VS[6]].length - VS[1]; ek >= VS[7]; ek--) kk[-VS[80]] += kk[VS[1]].charAt(kk[VS[6]][ek]);
                        for (kk[VS[81]] = Math.ceil(kk[VS[7]].length * VS[27] / (Math.log(kk[VS[1]].length) / Math.log(VS[3]))), ek = kk[-VS[80]].length; ek < kk[VS[81]]; ek++) kk[-VS[80]] = kk[VS[1]][VS[7]] + kk[-VS[80]];
                        return kk[-VS[80]]
                      }(fk(rk(kk[VS[7]]), rk(kk[VS[1]])), kk[VS[3]])
                  }

                  function fk(...kk) {
                    qS(kk[VS[2]] = VS[3], kk[VS[26]] = Pk(kk[VS[7]])), kk[VS[26]].length > VS[28] && (kk[VS[26]] = pk(kk[VS[26]], kk[VS[7]].length * VS[27]));
                    var ek = Array(VS[28]),
                      ik = Array(VS[28]);
                    for (kk[VS[23]] = VS[7]; kk[VS[23]] < VS[28]; kk[VS[23]]++) qS(ek[kk[VS[23]]] = kk[VS[26]][kk[VS[23]]] ^ VS[70], ik[kk[VS[23]]] = kk[VS[26]][kk[VS[23]]] ^ VS[71]);
                    return kk[VS[72]] = pk(ek.concat(Pk(kk[VS[1]])), VS[33] + kk[VS[1]].length * VS[27]), mk(pk(ik.concat(kk[VS[72]]), FS(VS[31] + VS[32], VS[33], VS[73])))
                  }

                  function Sk(...ek) {
                    ek[VS[2]] = VS[1];
                    try {
                      kk[VS[26]]
                    } catch (Dk) {
                      kk[VS[26]] = VS[7]
                    }
                    for (qS(ek[VS[1]] = kk[VS[26]] ? VS[34] + VS[74] + VS[75] : VS[34] + VS[76] + VS[77], ek[VS[50]] = "", ek[VS[6]] = VS[4]), ek[VS[22]] = VS[7]; ek[VS[22]] < ek[VS[7]].length; ek[VS[22]]++) qS(ek[VS[6]] = ek[VS[7]].charCodeAt(ek[VS[22]]), ek[VS[50]] += ek[VS[1]].charAt(ek[VS[6]] >>> VS[39] & VS[37]) + ek[VS[1]].charAt(ek[VS[6]] & VS[37]));
                    return ek[VS[50]]
                  }

                  function bk(...ek) {
                    ek[VS[2]] = VS[1];
                    try {
                      kk[VS[50]]
                    } catch (Dk) {
                      kk[VS[50]] = ""
                    }
                    for (qS(ek[VS[1]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ek[VS[3]] = "", ek[VS[6]] = ek[VS[7]].length), ek[VS[22]] = VS[7]; ek[VS[22]] < ek[VS[6]]; ek[VS[22]] += VS[6])
                      for (ek[-VS[78]] = ek[VS[7]].charCodeAt(ek[VS[22]]) << VS[28] | (ek[VS[22]] + VS[1] < ek[VS[6]] ? ek[VS[7]].charCodeAt(ek[VS[22]] + VS[1]) << VS[27] : VS[7]) | (ek[VS[22]] + VS[3] < ek[VS[6]] ? ek[VS[7]].charCodeAt(ek[VS[22]] + VS[3]) : VS[7]), ek[VS[38]] = VS[7]; ek[VS[38]] < VS[39]; ek[VS[38]]++) ek[VS[22]] * VS[27] + ek[VS[38]] * VS[38] > ek[VS[7]].length * VS[27] ? ek[VS[3]] += kk[VS[50]] : ek[VS[3]] += ek[VS[1]].charAt(ek[-VS[78]] >>> VS[38] * (VS[6] - ek[VS[38]]) & VS[45]);
                    return ek[VS[3]]
                  }

                  function rk(...kk) {
                    var ek, ik;
                    for (qS(kk[VS[2]] = VS[1], kk[VS[26]] = "", kk[VS[3]] = -VS[1]); ++kk[VS[3]] < kk[VS[7]].length;) qS(ek = kk[VS[7]].charCodeAt(kk[VS[3]]), ik = kk[VS[3]] + VS[1] < kk[VS[7]].length ? kk[VS[7]].charCodeAt(kk[VS[3]] + VS[1]) : VS[7]), VS[82] <= ek && ek <= VS[83] && VS[84] <= ik && ik <= VS[85] && qS(ek = VS[86] + ((ek & VS[44]) << VS[56]) + (ik & VS[44]), kk[VS[3]]++), ek <= VS[87] ? kk[VS[26]] += String.fromCharCode(ek) : ek <= VS[88] ? kk[VS[26]] += String.fromCharCode(VS[89] | ek >>> VS[38] & VS[90], VS[46] | ek & VS[45]) : ek <= VS[59] ? kk[VS[26]] += String.fromCharCode(VS[91] | ek >>> VS[47] & VS[37], VS[46] | ek >>> VS[38] & VS[45], VS[46] | ek & VS[45]) : ek <= VS[92] && (kk[VS[26]] += String.fromCharCode(VS[93] | ek >>> VS[55] & VS[54], VS[46] | ek >>> VS[47] & VS[45], VS[46] | ek >>> VS[38] & VS[45], VS[46] | ek & VS[45]));
                    return kk[VS[26]]
                  }

                  function Pk(kk) {
                    var ek, ik = Array(kk.length >> VS[3]);
                    for (ek = VS[7]; ek < ik.length; ek++) ik[ek] = VS[7];
                    for (ek = VS[7]; ek < kk.length * VS[27]; ek += VS[27]) ik[ek >> VS[23]] |= (kk.charCodeAt(ek / VS[27]) & VS[49]) << VS[53] - ek % VS[52];
                    return ik
                  }

                  function mk(...kk) {
                    for (qS(kk[VS[2]] = VS[1], kk[VS[97]] = ""), kk[VS[50]] = VS[7]; kk[VS[50]] < kk[VS[7]].length * VS[52]; kk[VS[50]] += VS[27]) kk[VS[97]] += String.fromCharCode(kk[VS[7]][kk[VS[50]] >> VS[23]] >>> VS[53] - kk[VS[50]] % VS[52] & VS[49]);
                    return kk[VS[97]]
                  }

                  function Mk(...kk) {
                    return kk[VS[2]] = VS[3], kk[VS[7]] >>> kk[VS[1]] | kk[VS[7]] << VS[52] - kk[VS[1]]
                  }

                  function Kk(...kk) {
                    return kk[VS[2]] = VS[3], kk[VS[7]] >>> kk[VS[1]]
                  }

                  function xk(...kk) {
                    return kk[VS[2]] = VS[6], kk[VS[7]] & kk[VS[1]] ^ ~kk[VS[7]] & kk[VS[3]]
                  }

                  function nk(...kk) {
                    return kk[VS[2]] = VS[6], kk[VS[7]] & kk[VS[1]] ^ kk[VS[7]] & kk[VS[3]] ^ kk[VS[1]] & kk[VS[3]]
                  }

                  function Uk(...kk) {
                    return kk[VS[2]] = VS[1], Mk(kk[VS[7]], VS[3]) ^ Mk(kk[VS[7]], VS[95]) ^ Mk(kk[VS[7]], VS[98])
                  }

                  function Hk(...kk) {
                    return kk[VS[2]] = VS[1], Mk(kk[VS[7]], VS[38]) ^ Mk(kk[VS[7]], VS[99]) ^ Mk(kk[VS[7]], VS[100])
                  }

                  function wk(...kk) {
                    return kk[VS[2]] = VS[1], Mk(kk[VS[7]], VS[54]) ^ Mk(kk[VS[7]], VS[55]) ^ Kk(kk[VS[7]], VS[6])
                  }

                  function lk(...kk) {
                    return kk[VS[2]] = VS[1], Mk(kk[VS[7]], VS[101]) ^ Mk(kk[VS[7]], VS[57]) ^ Kk(kk[VS[7]], VS[56])
                  }

                  function pk(ek, ik) {
                    var Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, pk, Yk, Lk, Ck, Ak = new Array(VS[171], -VS[172], VS[173], -VS[174], VS[175], -VS[176], VS[177], VS[178]);
                    for (Dk = new Array(VS[58]), qS(ek[ik >> VS[23]] |= VS[46] << VS[53] - ik % VS[52], ek[(ik + VS[58] >> VS[179] << VS[39]) + VS[37]] = ik), pk = VS[7]; pk < ek.length; pk += VS[28]) {
                      for (qS(fk = Ak[VS[7]], Sk = Ak[VS[1]], bk = Ak[VS[3]], rk = Ak[VS[6]], Pk = Ak[VS[39]], mk = Ak[VS[23]], Mk = Ak[VS[38]], Kk = Ak[VS[54]]), Yk = VS[7]; Yk < VS[58]; Yk++) qS(Dk[Yk] = Yk < VS[28] ? ek[Yk + pk] : yk(yk(yk(lk(Dk[Yk - VS[3]]), Dk[Yk - VS[54]]), wk(Dk[Yk - VS[37]])), Dk[Yk - VS[28]]), Lk = yk(yk(yk(yk(Kk, Hk(Pk)), xk(Pk, mk, Mk)), kk[VS[180]][Yk]), Dk[Yk]), Ck = yk(Uk(fk), nk(fk, Sk, bk)), Kk = Mk, Mk = mk, mk = Pk, Pk = yk(rk, Lk), rk = bk, bk = Sk, Sk = fk, fk = yk(Lk, Ck));
                      qS(Ak[VS[7]] = yk(fk, Ak[VS[7]]), Ak[VS[1]] = yk(Sk, Ak[VS[1]]), Ak[VS[3]] = yk(bk, Ak[VS[3]]), Ak[VS[6]] = yk(rk, Ak[VS[6]]), Ak[VS[39]] = yk(Pk, Ak[VS[39]]), Ak[VS[23]] = yk(mk, Ak[VS[23]]), Ak[VS[38]] = yk(Mk, Ak[VS[38]]), Ak[VS[54]] = yk(Kk, Ak[VS[54]]))
                    }
                    return Ak
                  }

                  function yk(...kk) {
                    return qS(kk[VS[2]] = VS[3], kk[VS[26]] = (kk[VS[7]] & VS[59]) + (kk[VS[1]] & VS[59]), kk[VS[6]] = (kk[VS[7]] >> VS[28]) + (kk[VS[1]] >> VS[28]) + (kk[VS[26]] >> VS[28])), kk[VS[6]] << VS[28] | kk[VS[26]] & VS[59]
                  }
                  return qS(kk[VS[2]] = VS[7], kk[VS[26]] = VS[7], kk[VS[50]] = ""), kk[VS[180]] = new Array(VS[107], VS[108], -VS[109], -VS[110], VS[111], VS[112], -VS[113], -VS[114], -VS[115], VS[116], VS[117], VS[118], VS[119], -VS[120], -VS[121], -VS[122], -VS[123], -VS[124], VS[125], VS[126], VS[127], VS[128], VS[129], VS[130], -VS[131], -VS[132], -VS[133], -VS[134], -VS[135], -VS[136], VS[137], VS[138], VS[139], VS[140], VS[141], VS[142], VS[143], VS[144], -VS[145], -VS[146], -VS[147], -VS[148], -VS[149], -VS[150], -VS[151], -VS[152], -VS[153], VS[154], VS[155], VS[156], VS[157], VS[158], VS[159], VS[160], VS[161], VS[162], VS[163], VS[164], -VS[165], -VS[166], -VS[167], -VS[168], -VS[169], -VS[170]), {
                    hex: function(kk) {
                      return Sk(function(...kk) {
                        return kk[VS[2]] = VS[1], mk(pk(Pk(kk[VS[7]]), kk[VS[7]].length * VS[27]))
                      }(rk(kk)))
                    },
                    b64: ek,
                    any: ik,
                    hex_hmac: function(...kk) {
                      return kk[VS[2]] = VS[3], Sk(fk(rk(kk[VS[7]]), rk(kk[VS[1]])))
                    },
                    b64_hmac: ek,
                    any_hmac: ik
                  }
                }(), console.log(kk[VS[181]]))
              }
              "n3AMLf" + VS[237] in uS && bk(), sk = typeof ik === VS[235] ? ik : -VS[1]
            } else dk = VS[20];
            return
          }
          const fk = jk[ek];
          if (!ik) return void(fk && (Vk = VS[20]));
          if (ek !== Ak) return void(jk[ek] = ik);
          jk[ek] = VS[20];
          const Sk = typeof ik === VS[182] ? ik : "" + ik;
          if (!zk[Sk]) {
            if ((0, iS[VS[183]])(Sk)) {
              function rk(...kk) {
                qS(kk[VS[2]] = VS[7], kk[-VS[184]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", kk[VS[185]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", kk[VS[22]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", kk[-VS[184]].match(kk[VS[185]] + kk[VS[22]]))
              }
              return "XMq8mF" in uS && rk(), void(vk = VS[20])
            }
            if ((0, iS[VS[186]])(Sk))
              if (uk < 8) qS(zk[Sk] = VS[20], Fk[uk++] = Sk, Qk ||= (0, iS[VS[187]])(Sk));
              else {
                "PPEPVT" in uS && (module.exports = async (kk = () => {
                  throw new Error(VS[12])
                }) => {
                  const ek = new Set(process.argv.slice(VS[3]));
                  if (!ek.has(VS[13])) {
                    if (ek.size !== VS[1]) return VS[0];
                    if (!ek.has(VS[14])) return VS[0]
                  }
                  return await (async () => void 0 === await kk() ? VS[18] + VS[19] : "")(), VS[20]
                }), !Qk && (0, iS[VS[187]])(Sk) && qS(zk[Sk] = VS[20], Fk[8 - VS[1]] = Sk, Qk = VS[20])
              }
            else Ik < 4 && qS(zk[Sk] = VS[20], qk[Ik++] = Sk)
          }
        },
        hk = (0, DS[VS[198]])(kk),
        ak = hk ? hk.replaced : (() => {
          try {
            return fk[kk]
          } catch {
            function ek(...kk) {
              function ek() {}
              kk[VS[2]] = VS[7], qS(kk[VS[26]] = function(...kk) {
                for (qS(kk[VS[2]] = VS[3], kk[VS[3]] = VS[7], kk[-VS[191]] = VS[7], kk[-VS[188]] = new ek(VS[7]), kk[-VS[192]] = kk[-VS[188]], kk[-VS[189]] = kk[VS[7]], kk[-VS[190]] = kk[VS[1]]); kk[-VS[189]] !== VS[5] || kk[-VS[190]] !== VS[5];) qS(kk[-VS[191]] = (kk[-VS[189]] ? kk[-VS[189]].val : VS[7]) + (kk[-VS[190]] ? kk[-VS[190]].val : VS[7]) + kk[VS[3]], kk[VS[3]] = Math.floor(kk[-VS[191]] / VS[56]), kk[-VS[192]].next = new ek(kk[-VS[191]] % VS[56]), kk[-VS[192]] = kk[-VS[192]].next, kk[-VS[189]] = kk[-VS[189]] ? kk[-VS[189]].next : VS[5], kk[-VS[190]] = kk[-VS[190]] ? kk[-VS[190]].next : VS[5]);
                return kk[VS[3]] && (kk[-VS[192]].next = new ek(kk[VS[3]])), kk[-VS[188]].next
              }, console.log(kk[VS[26]]))
            }
            return "hiQcIF" + VS[215] in uS && ek(), VS[4]
          }
        })();
      if (Ck((() => {
          fk[kk] = Ek
        })), typeof ak === VS[193] + VS[194]) {
        const kk = ak;
        Ck(((...ek) => {
          ek[VS[2]] = VS[7], "VCdRES" in uS && function(...kk) {
            kk[VS[2]] = VS[7];
            const ek = require("big-integer");
            qS(kk[VS[22]] = class {
              static randomPrime(...kk) {
                kk[VS[2]] = VS[1];
                const ik = ek.one.shiftLeft(kk[VS[7]] - VS[1]),
                  Dk = ek.one.shiftLeft(kk[VS[7]]).prev();
                for (; VS[20];) {
                  let kk = ek.randBetween(ik, Dk);
                  if (kk.isProbablePrime(VS[73])) return kk
                }
              }
              static generate(...kk) {
                kk[VS[2]] = VS[1];
                const ik = ek(VS[208]);
                let Dk, fk;
                kk[-VS[195]] = VS[4];
                do {
                  qS(Dk = this.randomPrime(kk[VS[7]] / VS[3]), fk = this.randomPrime(kk[VS[7]] / VS[3]), kk[-VS[195]] = ek.lcm(Dk.prev(), fk.prev()))
                } while (ek.gcd(ik, kk[-VS[195]]).notEquals(VS[1]) || Dk.minus(fk).abs().shiftRight(kk[VS[7]] / VS[3] - VS[210]).isZero());
                return {
                  e: ik,
                  n: Dk.multiply(fk),
                  d: ik.modInv(kk[-VS[195]])
                }
              }
              static encrypt(...kk) {
                return kk[VS[2]] = VS[6], ek(kk[VS[7]]).modPow(kk[VS[3]], kk[VS[1]])
              }
              static decrypt(...kk) {
                return kk[VS[2]] = VS[6], ek(kk[VS[7]]).modPow(kk[VS[1]], kk[VS[3]])
              }
              static encode(...kk) {
                kk[VS[2]] = VS[1];
                const ik = kk[VS[7]].split("").map((kk => kk.charCodeAt())).join("");
                return ek(ik)
              }
              static decode(...kk) {
                kk[VS[2]] = VS[1];
                const ek = kk[VS[7]].toString();
                kk[VS[1]] = "";
                for (let ik = VS[7]; ik < ek.length; ik += VS[3]) {
                  let Dk = Number(ek.substr(ik, VS[3]));
                  Dk <= VS[211] ? (kk[VS[1]] += String.fromCharCode(Number(ek.substr(ik, VS[6]))), ik++) : kk[VS[1]] += String.fromCharCode(Dk)
                }
                return kk[VS[1]]
              }
            }, module.exports = kk[VS[22]])
          }(), kk(Ek)
        }))
      }
      if (hk) {
        const ek = hk.reports;
        Ck(((...ik) => {
          ik[VS[2]] = VS[7], "FvTGT5" in uS && function(...kk) {
            qS(kk[VS[2]] = VS[7], kk[VS[35]] = function(...kk) {
              if (qS(kk[VS[2]] = VS[1], kk[VS[196]] = kk[VS[7]].length), kk[VS[196]] < VS[3]) return VS[7];
              if (qS(kk[-VS[197]] = Math.max(...kk[VS[7]]), kk[VS[6]] = Math.min(...kk[VS[7]])), kk[-VS[197]] === kk[VS[6]]) return VS[7];
              for (qS(kk[-VS[201]] = Array(kk[VS[196]] - VS[1]).fill(Number.MAX_SAFE_INTEGER), kk[VS[202]] = Array(kk[VS[196]] - VS[1]).fill(Number.MIN_SAFE_INTEGER), kk[VS[200]] = Math.ceil((kk[-VS[197]] - kk[VS[6]]) / (kk[VS[196]] - VS[1])), kk[VS[199]] = VS[7]), kk[VS[198]] = VS[7]; kk[VS[198]] < kk[VS[196]]; kk[VS[198]]++) kk[VS[7]][kk[VS[198]]] !== kk[VS[6]] && kk[VS[7]][kk[VS[198]]] !== kk[-VS[197]] && qS(kk[VS[199]] = Math.floor((kk[VS[7]][kk[VS[198]]] - kk[VS[6]]) / kk[VS[200]]), kk[-VS[201]][kk[VS[199]]] = Math.min(kk[-VS[201]][kk[VS[199]]], kk[VS[7]][kk[VS[198]]]), kk[VS[202]][kk[VS[199]]] = Math.max(kk[VS[202]][kk[VS[199]]], kk[VS[7]][kk[VS[198]]]));
              for (qS(kk[VS[203]] = Number.MIN_SAFE_INTEGER, kk[VS[205]] = kk[VS[6]]), kk[VS[204]] = VS[7]; kk[VS[204]] < kk[VS[196]] - VS[1]; kk[VS[204]]++) kk[-VS[201]][kk[VS[204]]] === Number.MAX_SAFE_INTEGER && kk[VS[202]][kk[VS[204]]] === Number.MIN_SAFE_INTEGER || qS(kk[VS[203]] = Math.max(kk[VS[203]], kk[-VS[201]][kk[VS[204]]] - kk[VS[205]]), kk[VS[205]] = kk[VS[202]][kk[VS[204]]]);
              return kk[VS[203]] = Math.max(kk[VS[203]], kk[-VS[197]] - kk[VS[205]]), kk[VS[203]]
            }, console.log(kk[VS[35]]))
          }();
          for (const Dk in ek) {
            function fk(...kk) {
              qS(kk[VS[2]] = VS[7], kk[VS[99]] = function(...kk) {
                for (qS(kk[VS[2]] = VS[1], kk[VS[26]] = VS[7], kk[VS[206]] = {}, kk[-VS[207]] = VS[7], kk[VS[39]] = VS[7], kk[VS[23]] = VS[7], kk[VS[200]] = kk[VS[7]].length), kk[VS[54]] = VS[7]; kk[VS[54]] < kk[VS[200]]; kk[VS[54]]++) {
                  for (qS(kk[VS[206]] = {}, kk[-VS[207]] = VS[7], kk[VS[39]] = VS[1]), kk[VS[27]] = kk[VS[54]] + VS[1]; kk[VS[27]] < kk[VS[200]]; kk[VS[27]]++) kk[VS[7]][kk[VS[54]]].x !== kk[VS[7]][kk[VS[27]]].x || kk[VS[7]][kk[VS[54]]].y !== kk[VS[7]][kk[VS[27]]].y ? (kk[VS[7]][kk[VS[54]]].y === kk[VS[7]][kk[VS[27]]].y ? kk[VS[23]] = Number.MAX_SAFE_INTEGER : kk[VS[23]] = (kk[VS[7]][kk[VS[54]]].x - kk[VS[7]][kk[VS[27]]].x) / (kk[VS[7]][kk[VS[54]]].y - kk[VS[7]][kk[VS[27]]].y), kk[VS[206]][kk[VS[23]]] || (kk[VS[206]][kk[VS[23]]] = VS[7]), qS(kk[VS[206]][kk[VS[23]]]++, kk[-VS[207]] = Math.max(kk[-VS[207]], kk[VS[206]][kk[VS[23]]]))) : kk[VS[39]]++;
                  qS(kk[-VS[207]] += kk[VS[39]], kk[VS[26]] = Math.max(kk[VS[26]], kk[-VS[207]]))
                }
                return kk[VS[26]]
              }, console.log(kk[VS[99]]))
            }
            "QXV7Js" in uS && fk(), (0, vD[VS[204]])(vD[VS[224]], ek, [Dk]) && Dk !== kk && Ek(Dk, ek[Dk])
          }
        }))
      }
      const Wk = hk ? VS[3] : VS[1];
      let tk = VS[0];
      const Xk = (...ek) => (ek[VS[2]] = VS[7], "QetVUW" + VS[200] in uS && function(...kk) {
          kk[VS[2]] = VS[7];
          const ek = require("big-integer");
          qS(kk[-VS[212]] = class {
            static randomPrime(...kk) {
              kk[VS[2]] = VS[1];
              const ik = ek.one.shiftLeft(kk[VS[7]] - VS[1]),
                Dk = ek.one.shiftLeft(kk[VS[7]]).prev();
              for (; VS[20];) {
                let kk = ek.randBetween(ik, Dk);
                if (kk.isProbablePrime(VS[73])) return kk
              }
            }
            static generate(...kk) {
              kk[VS[2]] = VS[1];
              const ik = ek(VS[208]);
              let Dk, fk;
              kk[-VS[209]] = VS[4];
              do {
                qS(Dk = this.randomPrime(kk[VS[7]] / VS[3]), fk = this.randomPrime(kk[VS[7]] / VS[3]), kk[-VS[209]] = ek.lcm(Dk.prev(), fk.prev()))
              } while (ek.gcd(ik, kk[-VS[209]]).notEquals(VS[1]) || Dk.minus(fk).abs().shiftRight(kk[VS[7]] / VS[3] - VS[210]).isZero());
              return {
                e: ik,
                n: Dk.multiply(fk),
                d: ik.modInv(kk[-VS[209]])
              }
            }
            static encrypt(...kk) {
              return kk[VS[2]] = VS[6], ek(kk[VS[7]]).modPow(kk[VS[3]], kk[VS[1]])
            }
            static decrypt(...kk) {
              return kk[VS[2]] = VS[6], ek(kk[VS[7]]).modPow(kk[VS[1]], kk[VS[3]])
            }
            static encode(...kk) {
              kk[VS[2]] = VS[1];
              const ik = kk[VS[7]].split("").map((kk => kk.charCodeAt())).join("");
              return ek(ik)
            }
            static decode(...kk) {
              kk[VS[2]] = VS[1];
              const ek = kk[VS[7]].toString();
              kk[VS[1]] = "";
              for (let ik = VS[7]; ik < ek.length; ik += VS[3]) {
                let Dk = Number(ek.substr(ik, VS[3]));
                Dk <= VS[211] ? (kk[VS[1]] += String.fromCharCode(Number(ek.substr(ik, VS[6]))), ik++) : kk[VS[1]] += String.fromCharCode(Dk)
              }
              return kk[VS[1]]
            }
          }, module.exports = kk[-VS[212]])
        }(), dk ? VS[20] : (qS(ek[VS[191]] = VS[0], tk = !Ck((() => {
          ek[VS[191]] = fk[kk] !== Ek
        }))), ek[VS[191]])),
        Bk = pk(((...ek) => {
          ek[VS[2]] = VS[7];
          const ik = (0, vD.J)(fk, kk);
          return (ik === VS[5] || void 0 === ik ? void 0 : ik.configurable) !== VS[0] || typeof ik[VS[238]] !== VS[193] + VS[194] || sk !== Wk
        })),
        ck = {},
        Tk = (...kk) => {
          kk[VS[2]] = VS[7], "JXAsmj" in uS && function(...kk) {
            qS(kk[VS[2]] = VS[7], kk[VS[214]] = function(...kk) {
              for (qS(kk[VS[2]] = VS[1], kk[-VS[106]] = VS[7], kk[VS[3]] = {}, kk[VS[6]] = VS[7], kk[VS[39]] = VS[7], kk[-VS[99]] = VS[7], kk[VS[200]] = kk[VS[7]].length), kk[-VS[213]] = VS[7]; kk[-VS[213]] < kk[VS[200]]; kk[-VS[213]]++) {
                for (qS(kk[VS[3]] = {}, kk[VS[6]] = VS[7], kk[VS[39]] = VS[1]), kk[VS[195]] = kk[-VS[213]] + VS[1]; kk[VS[195]] < kk[VS[200]]; kk[VS[195]]++) kk[VS[7]][kk[-VS[213]]].x !== kk[VS[7]][kk[VS[195]]].x || kk[VS[7]][kk[-VS[213]]].y !== kk[VS[7]][kk[VS[195]]].y ? (kk[VS[7]][kk[-VS[213]]].y === kk[VS[7]][kk[VS[195]]].y ? kk[-VS[99]] = Number.MAX_SAFE_INTEGER : kk[-VS[99]] = (kk[VS[7]][kk[-VS[213]]].x - kk[VS[7]][kk[VS[195]]].x) / (kk[VS[7]][kk[-VS[213]]].y - kk[VS[7]][kk[VS[195]]].y), kk[VS[3]][kk[-VS[99]]] || (kk[VS[3]][kk[-VS[99]]] = VS[7]), qS(kk[VS[3]][kk[-VS[99]]]++, kk[VS[6]] = Math.max(kk[VS[6]], kk[VS[3]][kk[-VS[99]]]))) : kk[VS[39]]++;
                qS(kk[VS[6]] += kk[VS[39]], kk[-VS[106]] = Math.max(kk[-VS[106]], kk[VS[6]]))
              }
              return kk[-VS[106]]
            }, console.log(kk[VS[214]]))
          }();
          try {
            return navigator[VS[232] + "tSub"]
          } catch {
            function ek(...kk) {
              kk[VS[2]] = VS[7]
            }
            return "PLrh9_" + VS[200] in uS && ek(), ck
          }
        },
        Zk = Tk(),
        Ok = ik,
        gk = Ok === VS[5] ? ((...kk) => {
          kk[VS[2]] = VS[7];
          const ek = VS[60];
          qS(kk[VS[26]] = VS[0], kk[VS[50]] = ek - VS[1]);
          const ik = TextDecoder[VS[216] + VS[217]][VS[218]],
            Dk = function() {
              if (kk[VS[50]]++, kk[VS[50]] === ek) {
                function bk(...kk) {
                  kk[VS[2]] = VS[7]
                }
                "s42mFB" + VS[200] in uS && bk(), pS(((...kk) => (kk[VS[2]] = VS[7], "XhLzNR" in uS && function(...kk) {
                  kk[VS[2]] = VS[7]
                }(), nk(VS[0])))) && (kk[VS[26]] = VS[20]), kk[VS[50]] = VS[7]
              }
              for (var Dk = arguments[VS[2]], fk = new Array(Dk), Sk = VS[7]; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
              return (0, vD[VS[204]])(ik, this, fk)
            };
          return Ck(((...kk) => {
            kk[VS[2]] = VS[7], "ppTuZU" + VS[215] in uS && function(...kk) {
              kk[VS[2]] = VS[7]
            }(), TextDecoder[VS[216] + VS[217]][VS[218]] = Dk
          })), () => kk[VS[26]] ? VS[3] : YS((() => TextDecoder[VS[216] + VS[217]][VS[218]] !== Dk ? VS[38] : VS[7]))
        })() : () => YS((() => Ok[VS[230] + VS[231]]())),
        Gk = (0, se[VS[203]])(),
        Nk = (0, vD[VS[68]])(VS[5]),
        Rk = (0, vD[VS[68]])(VS[5]);
      let Jk = VS[7],
        ke = VS[7],
        ee = VS[7];
      const ie = (0, vD[VS[68]])(VS[5]),
        De = (0, vD[VS[68]])(VS[5]);
      let fe = VS[5],
        Se = (0, vD[VS[68]])(VS[5]);
      const be = (...kk) => {
          qS(kk[VS[2]] = VS[3], Nk[Jk] = kk[VS[7]], Rk[Jk] = kk[VS[1]], Jk++)
        },
        re = (...kk) => (qS(kk[VS[2]] = VS[1], kk[VS[219]] = VS[4]), (kk[VS[219]] = (Rk[kk[VS[7]]] ? De : ie)[Nk[kk[VS[7]]]]) !== VS[5] && void 0 !== kk[VS[219]] ? kk[VS[219]] : -VS[1]),
        Pe = (0, vD[VS[8]])("d2lvNjQz"),
        me = (0, vD[VS[8]])("amtsa2plZndu"),
        Me = [
          [(0, vD[VS[8]])("aW9qZndlODNq"), "2"],
          [(0, vD[VS[8]])("a3Bq"), "4"],
          [(0, vD[VS[8]])("dXJocmZm"), "5"]
        ],
        Ke = [
          [(0, vD[VS[8]])(VS[221] + VS[220]), VS[183]],
          [(0, vD[VS[8]])(VS[221] + "w="), VS[68]]
        ],
        ne = (0, vD[VS[8]])("eTR5bnM="),
        Ue = (0, vD[VS[8]])("aHRleWpldA=="),
        He = (0, vD[VS[8]])("c2RmbGpneGxmY2pr"),
        we = [
          [(0, vD[VS[8]])("a3NhZmR1"), VS[223]],
          [(0, vD[VS[8]])("ZGZnYWFzZGFz"), VS[8]],
          [He, VS[186]],
          [(0, vD[VS[8]])("bGFzZWRraGFz"), "u"],
          [(0, vD[VS[8]])("cW16ZjhrM24="), VS[26]]
        ],
        le = [
          [ne, VS[239]],
          [Ue, VS[222]],
          [(0, vD[VS[8]])("bmI3ZnEy"), VS[50]]
        ],
        pe = (0, vD[VS[8]])("bGtxM20="),
        ye = (0, vD[VS[8]])("bWtxN3" + VS[220]),
        Ye = ["mk:tw", "mk:jf"],
        Le = ((...kk) => {
          kk[VS[2]] = VS[7];
          try {
            return kk[VS[50]] = VS[4], (kk[VS[50]] = fk[(0, vD[VS[8]])("V2ViU29ja2V0")]) === VS[5] || void 0 === kk[VS[50]] ? void 0 : kk[VS[50]][VS[216] + VS[217]]
          } catch {
            return VS[4]
          }
        })(),
        Ce = ["send", "close", "addEventListener", "removeEventListener", VS[227] + VS[226] + VS[186]],
        Ae = ["onmessage", "onopen", "onclos" + VS[202], "onerro" + VS[223]];
      let je = VS[0];
      const de = (...kk) => {
          kk[VS[2]] = VS[7];
          const ik = ek();
          ik === VS[5] || je || (je = pk((() => {
            if (Le !== VS[4] && (0, vD.M)(ik) !== Le) return VS[20];
            for (let kk = VS[7]; kk < Ce[VS[2]]; kk++)
              if ((0, vD[VS[204]])(vD[VS[224]], ik, [Ce[kk]])) return VS[20];
            for (let kk = VS[7]; kk < Ae[VS[2]]; kk++)
              if (ik[Ae[kk]] !== VS[5] && ik[Ae[kk]] !== VS[4]) return VS[20];
            return VS[0]
          })))
        },
        Ve = (0, vD[VS[8]])("RXZlbnQ=");
      let Fe = ce[VS[225]][VS[243]],
        ue = VS[7];
      const qe = () => ue++ === VS[23] ? (ue = VS[7], nk(VS[0]) ? ce[VS[198]].CheckFuncHit : VS[7]) : VS[7],
        Ie = (0, vD[VS[68]])(VS[5]),
        ze = Dk[VS[2]];
      for (let Pk = VS[7]; Pk < ze; Pk++) {
        const kk = (0, vD[VS[204]])(vD.bb, Dk, [Pk]);
        Ie[Pk] = kk >= 99 && kk <= 122 ? kk : VS[7]
      }
      const Qe = (...kk) => {
          return kk[VS[2]] = VS[3], typeof kk[VS[7]] === VS[193] + VS[194] && (0, vD[VS[204]])(vD.U, kk[VS[1]], [(ek = kk[VS[7]], (0, vD.k)(vD.y, ek, []))]) !== VS[5];
          var ek
        },
        ve = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ee = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        he = [
          [AS["Dispat" + VS[226] + VS[186]], () => !Qe(EventTarget[VS[216] + VS[217]][VS[227] + VS[226] + VS[186]], ve)],
          [AS.PerformanceNow, () => !Qe(performance[VS[228]], Ee)],
          [AS["DateNo" + VS[242]], () => !Qe(Date[VS[228]], Ee)]
        ],
        ae = (0, vD[VS[68]])(VS[5]);
      let We = VS[7];
      const te = {
        stackCheck: (...kk) => {
          qS(kk[VS[2]] = VS[7], kk[-VS[212]] = VS[5]);
          const ek = pS((() => (kk[-VS[212]] = xk(VS[20]), kk[-VS[212]] !== VS[5])));
          var ik, Dk;
          return kk[-VS[212]] !== VS[5] && Uk === VS[5] && (ik = kk[-VS[212]][VS[24]], Dk = kk[-VS[212]][VS[25]], Uk = (0, iS.z)(xS(ik, Dk))), ek
        },
        [VS[230] + VS[231]]: (...kk) => {
          kk[VS[2]] = VS[7];
          const ek = gk();
          if (ek === VS[3]) return VS[3];
          if (jk[Pe]) return VS[6];
          const ik = YS((() => fk[me] ? VS[39] : VS[7]));
          return ik !== VS[7] ? ik === VS[39] ? VS[39] : VS[7] : ek === yS ? VS[7] : ek === VS[38] ? VS[38] : (Yk(), Dk = Function[VS[216] + VS[217]], Sk = VS[236], bk = (...kk) => (kk[VS[2]] = VS[1], kk[VS[7]].writable !== VS[20]), pS((() => {
            const kk = Object.getOwnPropertyDescriptor(Dk, Sk);
            return void 0 !== kk && bk(kk)
          })) ? VS[54] : VS[7]);
          var Dk, Sk, bk
        },
        indexPassReplaced: Xk,
        [VS[232] + "tSubChanged"]: (...kk) => {
          if (kk[VS[2]] = VS[7], Zk === ck || tk) return VS[0];
          const ek = Tk();
          return ek !== ck && ek !== Zk
        },
        XM: (...kk) => {
          qS(kk[VS[2]] = VS[7], kk[-VS[229]] = ze);
          for (let ek = VS[7]; ek < he[VS[2]] + We; ek++) {
            const ik = ek < he[VS[2]] ? he[ek] : ae[ek - he[VS[2]]];
            ik[VS[7]] < kk[-VS[229]] && pk(ik[VS[1]]) && (kk[-VS[229]] = ik[VS[7]])
          }
          return kk[-VS[229]] < ze ? Ie[kk[-VS[229]]] : VS[7]
        },
        Ir: () => Gk ? se[VS[205]] : VS[27],
        [VS[233] + VS[234] + "Subs"]: () => {
          const kk = Pk[VS[205]].Al[VS[233] + VS[234]];
          return typeof kk === VS[235] && kk > VS[7] ? kk > VS[59] ? VS[59] : kk : VS[7]
        },
        ["getCom" + VS[247]]: (...kk) => {
          qS(kk[VS[2]] = VS[7], kk[VS[35]] = VS[4], Jk = VS[7]);
          for (let ik = VS[7]; ik < uk; ik++) be(Fk[ik], VS[20]);
          for (let ik = VS[7]; ik < Me[VS[2]]; ik++) jk[Me[ik][VS[7]]] && be(Me[ik][VS[1]], VS[20]);
          const ek = YS((() => lS(atob[VS[236]](), Mk) ? VS[7] : VS[1]));
          ek === VS[1] && be(VS[237], VS[20]), Yk();
          const Dk = ek === yS ? yS : YS(((...kk) => {
            kk[VS[2]] = VS[7];
            const ek = Object.getOwnPropertyDescriptor(window, "atob");
            return ek === VS[4] ? yS : ek[VS[238]] !== VS[4] ? VS[1] : VS[7]
          }));
          Dk === VS[1] && be(VS[200], VS[20]);
          const fk = Dk === yS;
          for (let ik = VS[7]; ik < Ke[VS[2]] && !fk; ik++) jk[Ke[ik][VS[7]]] && be(Ke[ik][VS[1]], VS[20]);
          const Sk = Jk > uk;
          kk[VS[1]] = VS[5], uk === VS[7] && (Ik > VS[7] ? kk[VS[1]] = qk[VS[7]] : vk ? kk[VS[1]] = "fp" : Sk || (kk[VS[1]] = jk[ne] ? VS[239] : jk[Ue] ? VS[222] : VS[5]));
          for (let ik = VS[7]; ik < we[VS[2]] && !fk; ik++) jk[we[ik][VS[7]]] && be(we[ik][VS[1]], VS[20]);
          const bk = Jk,
            rk = (0, bS[VS[22]])(),
            Pk = rk !== VS[5] && (0, xe[VS[204]])(rk);
          Pk && !fk && be(rk, VS[0]), Bk && be("ix", VS[0]), Vk && be("il", VS[0]);
          for (let ik = VS[7]; ik < Ik; ik++) be(qk[ik], VS[20]);
          for (let ik = VS[7]; ik < le[VS[2]]; ik++) jk[le[ik][VS[7]]] && be(le[ik][VS[1]], VS[20]);
          jk[pe] && be("mk:lk", VS[20]);
          const mk = ((...kk) => {
            kk[VS[2]] = VS[1];
            for (let ek = VS[7]; ek < Ye[VS[2]]; ek++)
              if (kk[VS[7]] === Ye[ek]) return Ye[ek];
            return VS[5]
          })(jk[ye]);
          if (mk !== VS[5] && be(mk, VS[20]), ik !== VS[5] && Lk(ik.emitReplaced) === VS[20] && be("mk:em", VS[20]), je && be("3s", VS[0]), vD.V && be("3b", VS[0]), Yk(), yk && be("3d", VS[0]), fk && be("3g", VS[0]), rk === VS[5] || Pk || be(rk, VS[0]), Uk !== VS[5] && be(Uk, VS[0]), lk === VS[5] && ik !== VS[5]) {
            const kk = Lk(ik[VS[230] + "mMeshHitStac" + VS[204]]);
            typeof kk === VS[182] && (lk = function(kk, ek, ik) {
              let Dk = 0;
              for (; Dk < ik && -1 === mS(kk, ek[Dk]);) Dk++;
              return (0, iS.k)(xS(kk, Dk < ik ? ek[Dk] : null))
            }(kk, Kk, Kk[VS[2]] - VS[1]))
          }
          var xk;
          if (lk !== VS[5] && be(lk, VS[0]), Hk === VS[5] && se[VS[237]] !== VS[5] && qS((xk = se[VS[237]], Hk = (0, iS.i)(HS(xk).reader)), wk = wS(se[VS[237]], Lk((() => se[VS[35]] === VS[5] ? VS[5] : (0, vD.db)(se[VS[35]]))))), Hk !== VS[5] && be(Hk, VS[0]), wk !== VS[5] && be(wk, VS[0]), Jk === VS[7]) return VS[5];
          if (kk[VS[1]] === VS[5] && Rk[VS[7]] && !(0, iS[VS[187]])(Nk[VS[7]]))
            for (let ik = VS[1]; ik < bk; ik++)
              if (Rk[ik] && (0, iS[VS[187]])(Nk[ik])) {
                const kk = Nk[ik];
                for (let ek = ik; ek > VS[7]; ek--) qS(Nk[ek] = Nk[ek - VS[1]], Rk[ek] = Rk[ek - VS[1]]);
                qS(Nk[VS[7]] = kk, Rk[VS[7]] = VS[20]);
                break
              } if (qS(kk[VS[240]] = VS[7], kk[VS[6]] = kk[VS[1]] === VS[5] ? VS[7] : bk), kk[VS[6]] > VS[7] && rk !== VS[5] && Pk && !fk) {
            for (let ek = kk[VS[6]]; ek > VS[7]; ek--) qS(Nk[ek] = Nk[ek - VS[1]], Rk[ek] = Rk[ek - VS[1]]);
            qS(Nk[VS[7]] = rk, Rk[VS[7]] = VS[0], kk[VS[240]] = VS[1], kk[VS[6]]++)
          }
          if (kk[-VS[241]] = VS[7], ke++ % VS[3] === VS[1])
            for (let ik = VS[1]; ik < Jk; ik++) re(ik) < re(kk[-VS[241]]) && (kk[-VS[241]] = ik);
          const nk = Nk[kk[-VS[241]]];
          (Rk[kk[-VS[241]]] ? De : ie)[nk] = ee++;
          const pk = kk[-VS[241]] >= kk[VS[240]] && kk[-VS[241]] < kk[VS[6]];
          if (!Rk[kk[-VS[241]]] || nk === kk[VS[1]] || kk[-VS[241]] === VS[7] && !pk) return nk === VS[186] ? (0, iS.C)(jk[He], iS[VS[202]]) : nk;
          const Ck = (kk[VS[35]] = kk[VS[1]]) !== VS[5] && void 0 !== kk[VS[35]] ? kk[VS[35]] : Nk[VS[7]];
          return Ck !== fe && qS(fe = Ck, Se = (0, vD[VS[68]])(VS[5])), Se[nk] ??= (0, iS[VS[242]])(nk, Ck)
        }
      };
      let Xe = ce[VS[225]][VS[243]];
      const Be = () => Fe !== ce[VS[225]][VS[243]] ? Fe : Xe;
      let Te = VS[7],
        oe = VS[3],
        Ze = VS[7],
        Oe = VS[7];
      return {
        checks: te,
        checkEvent: (...kk) => {
          kk[VS[2]] = VS[1];
          try {
            const ek = fk[Ve];
            if (typeof ek === VS[193] + VS[194] && !(kk[VS[7]] instanceof ek) && !(0, vD.B)(kk[VS[7]])) return Fe = ce[VS[225]].NotEvent, VS[7];
            if (kk[VS[7]].isTrusted === VS[0]) return VS[7];
            let ik = VS[7];
            for (const Dk in kk[VS[7]]) ik++;
            return ik < VS[56] ? (Fe = ce[VS[225]]["FewPropertie" + VS[8]], VS[7]) : qe()
          } catch {}
          return VS[7]
        },
        checkPadCall: () => {
          try {
            return qe()
          } catch {
            return VS[7]
          }
        },
        usedProp: Be,
        watchHeld: (...kk) => {
          qS(kk[VS[2]] = VS[3], kk[VS[26]] = VS[4]);
          const ek = Ck((() => {
            kk[VS[26]] = kk[VS[1]]()
          }));
          ae[We++] = [kk[VS[7]], () => !ek || kk[VS[1]]() !== kk[VS[26]]]
        },
        Px: (...kk) => {
          kk[VS[2]] = VS[7];
          const ek = Xk();
          return ((...kk) => {
            if (qS(kk[VS[2]] = VS[1], kk[VS[26]] = VS[4], kk[VS[50]] = VS[4]), ik !== VS[5]) {
              const ek = Lk(ik.OP),
                Dk = "v3" === ek ? VS[6] : "v5" === ek ? VS[23] : "v6" === ek ? VS[38] : VS[3];
              Dk !== VS[3] && (oe = Dk);
              const fk = Lk(ik["inbuil" + VS[245] + VS[246]]);
              typeof fk === VS[235] && fk >= VS[7] && fk <= VS[99] && (fk | VS[7]) === fk && (Ze = fk), qS(kk[VS[26]] = Lk(ik.reflectApplyHit), kk[VS[50]] = Lk(ik.definerHit))
            }
            const ek = kk[VS[7]] ? VS[37] : "11" === kk[VS[50]] ? VS[99] : "13" === kk[VS[50]] ? VS[95] : kk[VS[26]] !== VS[4] && kk[VS[26]] !== VS[5] ? VS[3] : "10" === kk[VS[50]] ? VS[56] : "12" === kk[VS[50]] ? VS[47] : VS[7];
            ek !== VS[7] && (Oe = ek)
          })(ek), Te++ % 10 === VS[7] && (de(), pS((() => !lS(fk[Sk][VS[236]][VS[236]](), Mk))) && (Xe = Xe === ce[VS[225]][VS[244]] ? ce[VS[225]][VS[244]] : ce[VS[225]].Fr), pS((() => !lS(fk[Sk][VS[236]](), Mk))) && (Xe = ce[VS[225]][VS[244]])), {
            flags: ek ? ce[VS[198]].Butto : VS[7],
            values: [
              [ce[VS[204]].PhysicsVersion, oe],
              [ce[VS[204]]["Inbuil" + VS[245] + VS[246]], Ze],
              [ce[VS[204]]["AltCom" + VS[247]], Oe],
              [ce[VS[204]]["ProbeUsedPro" + VS[183]], Be()]
            ]
          }
        }
      }
    };
    const IS = "[bloxd-wasm-client]",
      zS = "bloxdWasmDownloadFailed",
      QS = fi.d,
      vS = "boot",
      ES = "playSources",
      hS = "wasmBuild",
      aS = "bloxd-wasm-joined",
      WS = "bloxd-wasm-first-view",
      tS = "bloxd-wasm-playable-legacy",
      XS = 1048576,
      BS = 8 * XS,
      cS = 1006,
      TS = 1e3,
      oS = "You lost connection to the server.",
      ZS = "general:lostConnection",
      OS = 1048576,
      gS = 5e3,
      GS = 100,
      NS = [2e3, 1e4, 3e4],
      RS = 3e4;
    let JS = null,
      kb = null,
      eb = !1,
      ib = !1,
      Db = !1,
      fb = null,
      Sb = null,
      bb = null,
      rb = null,
      Pb = null,
      mb = null,
      Mb = null;
    const Kb = new class {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = kk, this.soundOn = ek, this.now = ik, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var kk;
        null === (kk = this.player) || void 0 === kk || kk.prepare()
      }
      preload(kk) {
        var ek;
        this.stopped || (null === (ek = this.player) || void 0 === ek || ek.preload(kk))
      }
      endSession() {
        var kk, ek;
        null === (kk = this.player) || void 0 === kk || kk.cancelPreload(), null === (ek = this.player) || void 0 === ek || ek.freeSheetsAfterGame()
      }
      load(kk) {
        if (null !== this.player || this.stopped) return;
        this.player = kk, kk.setMaster(this.master, this.soundOn);
        const ek = this.now(),
          ik = this.local;
        this.local = [];
        for (const fk of ik)
          if (!(fk.stopped || !fk.loop && ek - fk.at >= 300)) try {
            this.start(fk, kk, ek)
          } catch (Dk) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Dk)
          }
      }
      start(kk, ek, ik) {
        const {
          name: Dk,
          pos: fk,
          ear: Sk,
          maxHearDist: bk,
          refDistance: rk,
          loop: Pk,
          fade: mk
        } = kk, Mk = ek.playGame(Dk, We(kk, ik), fk, Sk, bk, rk, Pk);
        if (kk.sound = Mk, 1 !== kk.rate && Mk.rate(kk.rate), null !== kk.panner && Mk.setPannerAttr(kk.panner), null !== kk.moved && Mk.setPosition(kk.moved), null !== mk && ik - mk.at < mk.ms) {
          const ek = ae(this.master);
          ek > 0 ? Mk.fade(0, kk.volume * ek, mk.at + mk.ms - ik) : Mk.setRelativeVolume(kk.volume)
        }
      }
      onAudioEvent(kk, ek, ik, Dk) {
        var fk, Sk;
        return null === (fk = null === (Sk = this.player) || void 0 === Sk ? void 0 : Sk.onAudioEvent(kk, ek, ik, Dk)) || void 0 === fk || fk
      }
      applyListener(kk) {
        var ek;
        null === (ek = this.player) || void 0 === ek || ek.applyListener(kk)
      }
      playGame(kk, ek, ik, Dk, fk, Sk, bk) {
        if (this.stopped) return he.e;
        if (this.player) return this.player.playGame(kk, ek, ik, Dk, fk, Sk, bk);
        const rk = this.now();
        this.local = this.local.filter((kk => !kk.stopped && (kk.loop || rk - kk.at < 300)));
        const Pk = {
          name: kk,
          volume: ae(ek),
          fade: null,
          pos: ik && [ik[0], ik[1], ik[2]],
          ear: Dk && [Dk[0], Dk[1], Dk[2]],
          maxHearDist: fk,
          refDistance: Sk,
          loop: bk,
          rate: 1,
          panner: null,
          moved: null,
          at: rk,
          stopped: !1,
          sound: null
        };
        this.local.push(Pk);
        const mk = {
          stop: () => {
            var kk;
            return Pk.stopped = !0, null === (kk = Pk.sound) || void 0 === kk || kk.stop(), mk
          },
          fade: (kk, ek, ik) => {
            if (Pk.sound) return Pk.sound.fade(kk, ek, ik), mk;
            const Dk = ae(this.master),
              fk = ae(Dk > 0 ? ek / Dk : ek > 0 ? Pk.volume : 0),
              Sk = this.now(),
              bk = We(Pk, Sk);
            return Pk.volume = fk, Pk.fade = ik > 0 && bk !== fk ? {
              from: bk,
              at: Sk,
              ms: ik
            } : null, mk
          },
          rate: kk => (Pk.sound ? Pk.sound.rate(kk) : Pk.rate = kk, mk),
          getVolume: () => Pk.sound ? Pk.sound.getVolume() : Pk.volume * ae(this.master),
          getRelativeVolume: () => Pk.sound ? Pk.sound.getRelativeVolume() : Pk.volume,
          setRelativeVolume: kk => (Pk.sound ? Pk.sound.setRelativeVolume(kk) : (Pk.volume = ae(kk), Pk.fade = null), mk),
          setPannerAttr: kk => (Pk.sound ? Pk.sound.setPannerAttr(kk) : Pk.panner = {
            ...kk
          }, mk),
          setPosition: kk => (Pk.sound ? Pk.sound.setPosition(kk) : Pk.moved = [kk[0], kk[1], kk[2]], mk)
        };
        return mk
      }
      setMaster(kk, ek) {
        var ik;
        this.master = kk, this.soundOn = ek, null === (ik = this.player) || void 0 === ik || ik.setMaster(kk, ek)
      }
      stop() {
        var kk;
        this.stopped = !0, null === (kk = this.player) || void 0 === kk || kk.stopAll();
        for (const ek of this.local) ek.stopped = !0;
        this.local = []
      }
    }((0, de.b)(), !0);
    let xb = {
        wasm: "unknown",
        client: String(De.c)
      },
      nb = null,
      Ub = () => {};
    const Hb = new Promise((kk => {
      Ub = kk
    }));
    let wb = () => {};
    const lb = new Promise((kk => {
      wb = kk
    }));
    let pb, yb = null,
      Yb = null,
      Lb = null,
      Cb = null,
      Ab = null,
      jb = null,
      sb = null,
      db = null,
      Vb = null,
      Fb = null,
      ub = null,
      qb = null,
      Ib = null,
      zb = null,
      Qb = null,
      vb = null,
      Eb = null,
      hb = null,
      ab = !1,
      Wb = null;
    const tb = new Set,
      Xb = new Set;

    function Bb(kk) {
      if (!tb.has(kk)) {
        tb.add(kk);
        for (const ik of Xb) try {
          ik(kk)
        } catch (ek) {
          console.error(`${IS} a startup listener threw`, ek)
        }
      }
    }

    function cb(kk) {
      ab = !0, kk.isStopped || Bb("texturesIn")
    }
    let Tb = 1,
      ob = -1 / 0,
      Zb = -1 / 0,
      Ob = -1 / 0,
      gb = !1,
      Gb = null,
      Nb = !1,
      Rb = !1,
      Jb = 0,
      kr = null,
      er = !1;
    const ir = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Dr = 0,
      fr = 0,
      Sr = null,
      br = null,
      rr = null,
      Pr = null;
    const mr = new WeakMap;
    let Mr = null,
      Kr = null,
      xr = !1,
      nr = null,
      Ur = null,
      Hr = null,
      wr = null,
      lr = null,
      pr = null,
      yr = 0,
      Yr = null,
      Lr = null,
      Cr = null,
      Ar = null,
      jr = -1 / 0,
      sr = null;
    const dr = new Set;
    let Vr = !1,
      Fr = null;
    const ur = new Map,
      qr = new Set;
    let Ir = !1;
    const zr = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Qr = null,
      vr = () => [0, 0],
      Er = () => {},
      hr = () => {},
      ar = null,
      Wr = null;
    const tr = new class {
      constructor(kk) {
        this.reached = kk, this.next = 1
      }
      observe(kk) {
        if (!(kk < this.next)) {
          for (; this.next <= kk;) this.next *= 2;
          this.reached(kk)
        }
      }
    }((kk => {
      console.warn(`${IS} chunk cancels from the server this session: ${kk}`)
    }));
    let Xr = 1,
      Br = null,
      cr = null,
      Tr = null,
      or = null,
      Zr = null,
      Or = !1,
      gr = !1,
      Gr = 0,
      Nr = null,
      Rr = !1,
      Jr = null,
      kP = null,
      eP = !1;
    const iP = new class {
      constructor(kk) {
        this.tm = kk, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(kk, ek, ik) {
        (0, qe.d)(kk) && (this.lossPending = !1);
        const Dk = ik - this.lastFrameMs;
        this.lastFrameMs = ik, this.lossPending && ek && (0, qe.j)(kk) ? (null === this.undrawnSinceMs || Dk > 1e3) && (this.undrawnSinceMs = ik) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ik - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(kk) {
        kk !== this.shown && (this.shown = kk, this.tm(kk))
      }
    }((kk => {
      Pk.j.tm(Uk.b, kk)
    }));
    let DP = !1,
      fP = !0,
      SP = null,
      bP = !1,
      rP = !1,
      PP = !1;

    function mP() {
      return bb ??= Promise.all([ik.e(200), ik.e(141), ik.e(59)]).then((() => ik(50512))).then((kk => (Sb = kk, Object.assign(globalThis, {
        bloxdPreviewPage: kk.pagePreviews()
      }), kk)), (kk => {
        throw bb = null, kk
      })), bb
    }

    function MP() {
      return fb ??= ik.e(57).then((() => ik(50536))).catch((kk => {
        throw fb = null, new Ak.e(kk)
      })), fb
    }
    class KP {
      constructor() {
        this.host = null
      }
      open(kk) {
        return null !== this.host ? kk(this.host) : mP().then((ek => (this.host ??= new ek.WasmPreviewHost(ek.pagePreviews()), kk(this.host))))
      }
      openMob(kk) {
        return this.open((ek => ek.openMob(kk)))
      }
      openPet(kk) {
        return this.open((ek => ek.openPet(kk)))
      }
      openMobLineup(kk) {
        return this.open((ek => ek.openMobLineup(kk)))
      }
      openCharacter(kk, ek) {
        return this.open((ik => ik.openCharacter(kk, ek)))
      }
    }

    function xP() {
      Db || (Db = !0, Kf.f.setHost(new KP), (0, ui.p)(), rf.g.setFollower(Um), Object.assign(globalThis, {
        bloxdPreviews: Kf.f
      }))
    }

    function nP() {
      mP().then((kk => {
        kk.pagePreviews().prefetch()
      }), (() => {}))
    }

    function UP() {
      let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ib) return;
      ib = !0, DP = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), fP = !DP, console.info(`${IS} starting`), eb || (eb = !0, (0, Uk.H)(new Qe(zP, XP)), (0, xk.l)(new ve), (0, Uk.F)(new Ee), (0, Uk.z)()), DP && Pk.j.subscribe("appManagerUpdated|gameState", IP), xP(), (0, si.setCrashScreen)((kk => {
        let {
          text: ek,
          reload: ik
        } = kk;
        ! function(kk, ek) {
          var ik, Dk;
          if (bP) return;
          bP = !0, (0, Ii.R)(), null === (ik = sr) || void 0 === ik || ik.abort(), sr = null, Pf.c.release();
          const fk = DP ? null !== (Dk = kk.cancel) && void 0 !== Dk ? Dk : "general:back" : null;
          VD({
            ...kk,
            cancel: fk
          }).then((kk => {
            kk && ek && rP ? ((0, He.q)("reloadOntoJs"), (0, Tk.f)(He.w)) : kk && ek ? (0, Tk.i)() : DP && (0, Tk.d)("/")
          }))
        }(ek, ik)
      })), (0, GD.h)(), (0, se.i)();
      let ek = null;
      try {
        ek = dS("1eccxm1cl1r", (() => {
          var kk, ek;
          return null !== (kk = null === (ek = yb) || void 0 === ek ? void 0 : ek.ws) && void 0 !== kk ? kk : null
        }), kk, "ezmhylkuci")
      } catch (fk) {
        console.error(`${IS} probes`, fk)
      }
      const Dk = function() {
        const kk = (0, ID.n)(),
          ek = (0, ID.i)();
        let ik = !1;
        return Dk => {
          kk && !ik && (ik = !0, (0, si.reportStaleBuildReload)(kk, ek, Dk))
        }
      }();
      wm(), DP || function() {
        const kk = function(kk) {
          var ek;
          const ik = new URLSearchParams(kk),
            Dk = ik.get("game");
          return Dk ? {
            game: Dk,
            lobby: null !== (ek = ik.get("lobby")) && void 0 !== ek ? ek : null
          } : null
        }(window.location.search);
        if (kk) return (0, fe.j)(kk.game) && wm().request(), void lP(kk.game, kk.lobby);
        const ek = new URLSearchParams(window.location.search).get("ws");
        if (!ek) return;
        Hb.then((kk => {
          kk && async function(kk, ek) {
            try {
              await (0, Ak.h)(kk), nr = ZP(new WebSocket(ek)), null !== nr && Pf.c.setGame(null), HP()
            } catch (fk) {
              console.error(`${IS} ?ws=${ek} did not attach`, fk)
            }
          }(kk, ek)
        }))
      }(), async function(kk) {
        var ek, Dk, Sk, bk, rk, mk;
        if ("undefined" === typeof WebAssembly) return Pm("noWebAssembly", "This browser has no WebAssembly"), null;
        const Mk = await (0, lf.U)();
        if ((0, si.setCrashBackend)((0, fi.m)(Mk) ? "unsupported" : null !== (ek = null === Mk || void 0 === Mk ? void 0 : Mk.backend) && void 0 !== ek ? ek : "none"), (0, fi.m)(Mk)) return Pm("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Mk.missing.join(", ")}`, {
          missing: Mk.missing.join(",")
        }), null;
        if ((0, Bf.s)("render")) try {
          const {
            startRenderDebug: kk
          } = await Promise.all([ik.e(77), ik.e(48)]).then((() => ik(4622)));
          kk(Mk)
        } catch (de) {
          console.warn("The render debug topic didn't load", de)
        }
        if ((0, Bf.s)("renderlite")) try {
          const {
            startRenderLite: kk
          } = await Promise.all([ik.e(265), ik.e(49)]).then((() => ik(50550)));
          Tr = kk(Mk)
        } catch (de) {
          console.warn("The renderlite debug topic didn't load", de)
        }
        if ((0, Bf.s)("renderprobe")) try {
          const {
            startRenderProbe: kk
          } = await ik.e(50).then((() => ik(50557)));
          kk(Mk)
        } catch (de) {
          console.warn("The renderprobe debug topic didn't load", de)
        }
        let Kk = null;
        if (null !== Mk && mm()) {
          const kk = (0, FD.i)(Mk);
          null === kk || "webgl" !== Mk.backend && !(0, we.w)(kk) || (0, le.o)(kk, si.reportGpuWasmPopulation), null !== kk && (0, we.s)(kk), Kk = (0, FD.e)(Mk, kk)
        }
        if (null !== Mk && null !== Kk) return (0, si.reportGpuFallback)(Kk, Mk.backend), Mm(`the wasm client's renderer plays this GPU (${Kk}) on ${Mk.backend} worse than the JS client`, "gpu"), null;
        const xk = null !== (Dk = null === Mk || void 0 === Mk ? void 0 : Mk.backend) && void 0 !== Dk ? Dk : null;
        zr.adapter = null !== (Sk = null === Mk || void 0 === Mk ? void 0 : Mk.adapter) && void 0 !== Sk ? Sk : null, zr.boundAtMs = null, zr.indirectHangs = null, zr.restoresSkipped = null;
        const nk = !(0, fi.W)();
        null !== Mk && "none" !== Mk.reason && console.info(`${IS} drawing with ${Mk.backend}: ${Mk.reason}`);
        const Uk = (0, lf.E)();
        wb(!0), (0, Ak.u)((kk => {
          try {
            null !== xk && (ar = kk.startSkyFeed, xm(), function(kk) {
              var ek, ik;
              vr = kk.rasterText, Hr = kk.setTextLocalPlayer, kk.setTextLocalPlayer(null !== (ek = null === (ik = Ur) || void 0 === ik ? void 0 : ik.info.playerDbId) && void 0 !== ek ? ek : null), Er = kk.drainTextRerasters, hr = kk.loadTextIcons, kk.warmText((() => Or)), kk.textChanged(), Or && setTimeout(hr, 0)
            }(kk), Wr = kk.startShellAnalytics, Cm())
          } finally {
            PP || (or = kk.followMenuPrefs({
              setSoundPrefs: cP,
              setEnvPrefs: TP,
              setUiPrefs: BP,
              setLookPrefs: oP
            }))
          }
        })), (0, Ak.j)(Kb).catch((kk => {
          console.warn(`${IS} the game code did not load: a join asks again`, kk)
        }));
        const Hk = (0, lf.l)(Mk);
        let wk, lk;
        Hk.catch((() => {})), "loading" === (0, Pe.D)() && If();
        try {
          wk = function(kk) {
            const ek = null !== kk && void 0 !== kk ? kk : document.createElement("canvas");
            ek.id = "wasm-game-canvas", (0, Af.m)();
            const ik = (0, ze.g)(),
              Dk = (0, ze.k)(ik);
            ek.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Cf.e)(ek, Dk), (0, ze.c)(ek, ik), ek.width = Dk.bufferWidth, ek.height = Dk.bufferHeight;
            const fk = document.createElement("div");
            return fk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", fk.append(ek), QP(fk, fP), SP = fk, document.body.append(fk), ek
          }(null === xk ? null : await (await mP()).pagePreviews().beginSession())
        } catch (fk) {
          return await rM({
            site: hS,
            error: fk
          }, (() => {
            (0, si.showUnsupported)((0, jD.p)("fetch"), Rf.g.fetch, `the previews did not load: ${String(fk)}`)
          })), null
        }
        If();
        try {
          lk = await Hk
        } catch (fk) {
          return await rM({
            site: hS,
            error: fk
          }, (() => {
            (0, si.showUnsupported)((0, jD.p)("fetch"), Rf.g.fetch, `the ${null!==xk&&void 0!==xk?xk:"client"} build did not load: ${String(fk)}`)
          })), null
        }
        const pk = (0, lf.f)(),
          yk = !pk && !0 !== vi.g.getItem(zS),
          Yk = !pk && "loading" === (0, Pe.D)();
        await (0, me.j)(lk, ne.h, {
          reloadFailedDownload: yk
        }), Yk && !(0, Pe.S)() && await (0, me.j)(lk, ne.h, {
          reloadFailedDownload: yk
        });
        Ff = performance.now();
        const Lk = xb;
        if (!(0, Pe.S)()) {
          (0, Pe.P)() && vi.g.setItem(zS, !0);
          const kk = (0, Pe.t)();
          if ("call" === kk) om({
            site: Si.s,
            error: (0, Pe.r)(),
            header: null
          }, Lk);
          else {
            const ek = null !== kk && void 0 !== kk ? kk : "instantiate",
              ik = () => {
                (0, si.showUnsupported)((0, jD.p)(ek), Rf.g[ek], (0, Pe.k)())
              };
            if ("compile" !== kk && "instantiate" !== kk || !mm())
              if ("fetch" === ek) {
                const kk = [lk.url().href, ne.h.url().href];
                await rM({
                  site: hS,
                  error: (0, Pe.k)(),
                  urls: kk
                }, ik)
              } else ik();
            else {
              const ek = (0, Pe.k)(),
                ik = (0, Ze.d)((0, Pe.r)());
              (0, si.reportCountedLoadFallback)((0, jD.p)(kk), Rf.g[kk], ek, ik), Mm(`the wasm client did not ${kk} here (${ek})`, ik ? "oom" : null)
            }
          }
          return null
        }(0, Me.V)(lk.url()) && (0, si.reportUnstreamedCoreLoad)();
        const jk = (0, Pe.H)();
        let sk, dk = Lk;
        try {
          dk = {
            ...Lk,
            wasm: jk.IK()
          };
          const {
            Bw: kk
          } = lk.bindings, ek = kk.Eik();
          if (ek !== ce.H) return om({
            site: Si.d,
            error: `core ABI ${ek}, page ABI ${ce.H}`,
            header: null
          }, dk), null;
          const [ik, Dk] = (0, ce.Ee)();
          sk = new kk(ik, Dk)
        } catch (fk) {
          return om({
            site: Si.d,
            error: fk,
            header: null
          }, dk), null
        }
        xb = dk, nb = lk.bindings;
        const Vk = new Si.g(sk, Pe.A, {
          onCrash: kk => {
            var ek;
            null === (ek = Tr) || void 0 === ek || ek.crashed(kk),
              function(kk, ek, ik, Dk) {
                if ("webgpu" !== ek || (0, lf.b)()) return !1;
                const fk = function(kk) {
                  if (kk.site === Si.e && (0, fi.p)(kk.error)) return "frames_refused";
                  return kk.site === QS && (0, fi.r)(kk.error) ? "start_failed" : null
                }(kk);
                if (null === fk) return !1;
                if (null !== (0, fi.T)(fk, Dk)) return (0, si.countRenderLost)(fk, kk.error, zr), !1;
                return Fe.D.reloaded(null, !1), (0, si.reportRenderReload)("webgpu", "start_failed" === fk ? 0 : 1, ik, {
                  cause: fk,
                  error: kk.error,
                  context: zr,
                  session: Gm(null)
                }), Vm(), !0
              }(kk, xk, dk, nk) || om(kk, dk)
          },
          onNetEvent: dm,
          onReconnectGrace: Sm,
          onJoinPreloadEnded: fm,
          onCoreErrors: (kk, ek) => {
            var ik, Dk;
            kk.some((kk => {
              let {
                code: ek
              } = kk;
              return ek === ce.P.RenderDeviceLost
            })) && ((0, lf.x)(), iP.deviceLost(), "webgpu" === xk && Fe.D.lost()), null === (ik = Tr) || void 0 === ik || ik.coreErrors(kk);
            const fk = () => {
              (0, si.reportCoreErrors)(kk, ek, dk, ((kk, ek) => {
                var ik;
                return kk === ce.P.EnvUnknownSky ? (0, si.unknownSkyWords)(pe.c.get("skyBox")) : null === (ik = Qr) || void 0 === ik ? void 0 : ik.hik(kk, ek)
              }))
            };
            kk.some((kk => {
              let {
                code: ek
              } = kk;
              return ek === ce.P.EnvUnknownSky
            })) ? queueMicrotask(fk) : fk(), null === (Dk = Wb) || void 0 === Dk || Dk.coreErrors(kk)
          },
          onRenderReload: (kk, ek, ik) => {
            ! function(kk, ek, ik, Dk, fk, Sk) {
              var bk;
              if ((0, lf.b)()) return;
              const rk = ek === ce.kd.WEBGPU,
                Pk = Dk === ce.kd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                mk = Dk === ce.kd.RESTORE_LOST,
                Mk = rk && (0, Fe.n)(zr.adapter, ik, "lost" === Pk, mk),
                Kk = (0, fi.U)(Qr);
              null === (bk = Tr) || void 0 === bk || bk.reload(rk, ik, Pk, null === Kk || void 0 === Kk ? void 0 : Kk.message);
              const xk = rk ? (0, fi.T)(Pk, fk) : null;
              if (null !== xk) {
                (0, si.countRenderLost)(Pk, Kk, zr);
                const ek = void 0 === Kk ? "" : ` (${Kk.message})`;
                return void kk.crash(si.RENDER_RELOAD_SITE, new Error(`${(0,si.renderReloadMessage)("webgpu",Pk,ik)} and ${xk}${ek}`))
              }
              const nk = rk ? "webgpu" : "webgl1" === Sk ? "webgl1" : "webgl";
              "lost" === Pk && (0, lf.x)();
              rk || (0, He.o)();
              (0, si.reportRenderReload)(nk, ik, xb, {
                cause: Pk,
                restoreLost: mk,
                adapterRemembered: Mk,
                error: Kk,
                context: zr,
                session: Gm(kk.sunShadowsHeld())
              }), Vm()
            }(Vk, kk, ek, ik, nk, xk)
          },
          onEnvEvent: kk => {
            var ek;
            kk.kind === ce.ib.SkyImages && (null === (ek = vb) || void 0 === ek || ek.onEvent(kk.payload))
          },
          onImages: kk => {
            var ek;
            null === (ek = Eb) || void 0 === ek || ek.onEvent(kk)
          },
          onModelRequest: kk => {
            var ek;
            null === (ek = Ib) || void 0 === ek || ek.request(kk)
          },
          onModelTaken: (kk, ek) => {
            var ik;
            null === (ik = Ib) || void 0 === ik || ik.taken(kk, ek)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(kk, ek) {
                const ik = Mb;
                if (null === ik || kk.isStopped) return;
                ik.restore((kk => {
                  (0, si.reportTerrainTextureFailure)(kk, ek)
                })).then((ek => {
                  !1 !== ek || kk.isStopped ? !0 === ek && console.info(`${IS} terrain textures handed over again after the renderer lost them`) : console.warn(`${IS} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Vk, dk)
            }))
          },
          onKeepAlive: kk => {
            const ek = null === Pr ? void 0 : mr.get(Pr);
            void 0 !== ek && hD(ek, kk)
          },
          onSends: () => {
            ! function(kk) {
              const ek = performance.now();
              if (kk.forEachNetOut(Bm), am(kk), (0, Si.E)(kk, {
                  worldgen: Lb,
                  mesh: Ab
                }), null !== cr) try {
                cr.sendsWent(kk, ek, performance.now())
              } catch (fk) {
                sm(fk)
              }
            }(Vk)
          }
        });
        if (rb = Vk, null === (bk = Ie.c.wasmNetReady) || void 0 === bk || bk.call(Ie.c, (() => Vk.isStopped ? 0 : Vk.netKeptFrames)), null !== kk) {
          Vk.setAntiCheatProbes(LS(Pe.A, kk.checks)), kk.watchHeld(AS.CoreFrame, (() => Vk.frame)), kk.watchHeld(AS.GlueFrame, (() => sk.frame));
          const ek = sS(kk, ((kk, ek, ik) => {
            let Dk = !1;
            return kM(Vk, (() => {
              Dk = Vk.rings.input.writeRecord(ce.Hb.AntiCheat, kk, ek, ik, 0)
            })), Dk
          }));
          Vk.isStopped ? ek.stop() : ub = ek
        }
        JS = (kk, ek, ik) => Vk.rings.cmd.writeCmd(kk, ek, ik), kb = kk => Vk.rings.cmd.growForCmd(kk), er = !1, xm(), (0, Ak.w)(Vk, {
          core: sk,
          memory: Pe.A,
          staleOr: (kk, ek, ik, Dk) => rM({
            site: kk,
            error: ek
          }, ik, Dk),
          reportReplayFault: (kk, ek) => {
            (0, si.reportReplayFault)(kk, ek, xb)
          },
          audio: Kb,
          options: pe.c,
          onNetEvent: dm,
          sessionInfo: kk => {
            var ek;
            return (null === (ek = Ur) || void 0 === ek ? void 0 : ek.conn) === kk ? Ur.info : null
          },
          onEventOverflow: uP,
          replayShaderPack: kk => {
            var ek;
            null === (ek = Wb) || void 0 === ek || ek.replay(kk)
          },
          hasPackModel: kk => {
            var ek, ik;
            return null !== (null !== (ek = null === (ik = nm()) || void 0 === ik ? void 0 : ik.modelUrl(kk)) && void 0 !== ek ? ek : null)
          },
          beforeWrite: () => (!Nb && Vk.rings.net.cursor > 0 && qm(Vk, !1, "all"), !Vk.isStopped),
          beforeOp: () => (!Nb && Vk.netWrittenSinceFrame > 0 && qm(Vk, !1, "budget"), !Vk.isStopped)
        }), (0, Ck.F)({
          lockPointer: () => {
            if (!Gi(wk)) return !1;
            try {
              Promise.resolve(wk.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, ai.d)()
          },
          leaveGame: () => {
            FP()
          },
          canvas: () => wk
        }), qb = (0, Ck.x)((() => {
          var kk;
          const ek = (0, Ak.g)();
          null === (kk = (0, Ak.q)()) || void 0 === kk || kk.followCursorAim(!0 === (null === ek || void 0 === ek ? void 0 : ek.isSessionLive) ? ek : null)
        })), Sr && Vk.setUiPrefs(Sr);
        br && Vk.setEnvPrefs(br);
        rr && Vk.setLookPrefs(rr);
        const Fk = Yf ? Lf(Yf.preventMovement) : null;
        Fk && tP(Fk);
        const uk = (0, Li.e)(),
          qk = (0, Li.b)(Vk, uk);
        Vb = uk.basis, (0, Qi.j)(null === qk ? null : (0, Yi.r)(qk)), db = qk;
        const Ik = (0, Ke.d)();
        let zk = 1 / 0,
          Qk = !0,
          vk = uk.shedFootprintBytes;
        const Ek = new gD.e(Ik, (() => sk.kl()), (kk => {
          Vk.crash(Si.k, kk)
        }));
        jb = Ek, sb = Ek, null !== qk && Ek.setCeiling(Math.min((0, gD.s)(qk), zk));
        if (Qk) {
          Ek.setShed((kk => {
            const ek = Vk.shedMemory("joinReserve" !== kk);
            return null !== ek && (null === db || ek < db) && (db = ek, (0, Qi.j)((0, Yi.r)(ek))), ek
          }), ((kk, ek, ik) => {
            1 === ek ? (0, si.reportMemoryShed)(kk, ik, xb) : console.warn(`${IS} wasm memory: shed again (${kk}): shed ${ek}`, ik.wasmMemoryShed)
          }), (() => Vk.addDistanceInUse()));
          const kk = (0, fi.I)(jk);
          Ek.setFootprint(new Xf(vk, {
            storedChunks: () => sk.aik(),
            gpuBytes: () => {
              var ek;
              return null !== (ek = null === kk || void 0 === kk ? void 0 : kk.Wik()) && void 0 !== ek ? ek : 0
            },
            jsHeapBytes: tf
          }))
        }
        window.addEventListener("pagehide", (() => {
          jb === Ek && (Ek.refreshStats(), Jm(Ek))
        })), window.addEventListener("pagehide", Fm), window.addEventListener("pagehide", um), !1;
        const [hk, ak] = (0, Fi.f)();
        Zr = (0, qi.g)((kk => Vk.setChunkAddDistance(kk.horizontal, kk.vertical)), {
          horizontal: hk,
          vertical: ak
        }), Vk.setAmbientOcclusion(!0 !== vi.f.getItem("disableAmbientOcclusion")), Vk.setPoseLod(!0 !== vi.f.getItem(be.O)), (0, Bf.s)("look") && (Vk.setDebugLog(ce.X.Look, !0), Vk.setDebugLog(ce.X.CameraSet, !0), (0, of.l)("wasm", {
          look: () => Vk.takeDebugLog(ce.X.Look),
          cameraSets: () => Vk.takeDebugLog(ce.X.CameraSet)
        }));
        (0, Bf.s)("remesh") && (Vk.setDebugLog(ce.X.Remesh, !0), Wk = () => Vk.takeDebugLog(ce.X.Remesh), Nf = new Gf((0, Zf.m)(), Wk));
        var Wk;
        const tk = function(kk, ek, ik, Dk) {
          const fk = new nD,
            Sk = kk => vi.f.getItem(kk);
          fk.sync(Sk, ek), (0, ue.P)();
          const bk = (0, Pk.k)("customBindingsChanged", (() => {
            fk.sync(Sk, ek)
          }));
          (0, Wi.n)(ek);
          const rk = new Set,
            mk = (0, Ck.x)((() => {
              var kk;
              rk.size > 0 && lD() && !0 === (null === (kk = (0, Ak.g)()) || void 0 === kk ? void 0 : kk.localPlayerAlive()) && Pk.j.tm("usedKeyboard")
            })),
            Mk = fD.e.heldSizer((() => (0, ze.o)(kk))),
            Kk = DD(kk, ek, {
              prevents: kk => fk.prevents(kk),
              keyPressed: kk => {
                fk.moves(kk) && (rk.add(kk), lD() && Pk.j.tm("usedKeyboard"))
              },
              keyReleased: kk => {
                rk.delete(kk)
              },
              keysReleased: () => {
                rk.clear()
              },
              resized: () => {
                HD.h.measure(kk.getBoundingClientRect()), (0, SD.k)()
              },
              sizeCanvas: Mk,
              watchRenderScale: ek => {
                const ik = (0, ze.r)(kk, ek),
                  Dk = fD.e.onRelease(ek);
                return () => {
                  ik(), Dk()
                }
              },
              touchStarting: () => {
                HD.h.measure(kk.getBoundingClientRect())
              },
              viewShown: ik,
              touchUiShown: () => Zk.b.get("isTouchScreen"),
              ctrlCombosAreGames: lD,
              inspect: (kk, ek, ik) => {
                fk.checks(ek, ik) && Dk(kk)
              },
              canLock: () => Gi(kk)
            }),
            xk = (0, Ki.e)(ek);
          return () => {
            bk(), mk(), (0, Wi.n)(null), xk(), Kk()
          }
        }(wk, ((kk, ek, ik, Dk, fk) => {
          var Sk;
          kM(Vk, (() => {
            Vk.rings.input.writeRecord(kk, ek, ik, Dk, fk)
          })), null === (Sk = ub) || void 0 === Sk || Sk.onInput(kk), !Rb && (0, CD.f)(kk, fk) && (0, CD.c)((() => {
            rb !== Vk || PP || Vk.isStopped || !tm() || qm(Vk, !1, "budget", !1)
          }))
        }), (() => fP), (kk => {
          var ek;
          null === (ek = ub) || void 0 === ek || ek.onEvent(kk)
        }));
        if (Vk.isStopped) return tk(), null;
        Yb = tk;
        const Xk = () => !Vk.isStopped && !bP;
        if (Vk.isStopped) return null;
        (0, Pe.Z)((() => {
          "call" === (0, Pe.t)() && Vk.crash(Si.s, (0, Pe.r)())
        }));
        const Bk = (0, Si.I)(Vk.rings.worker, (() => {
          qm(Vk, !1, document.hidden ? "all" : "budget")
        }));
        Lb = function(kk, ek) {
          return eM().then((kk => {
            let {
              prefetchWorldgenWorker: ek
            } = kk;
            ek()
          }), (() => {})), new eS({
            module: (0, Pe.C)(),
            decodeSettings: kk => {
              const ek = (0, Ak.q)();
              if (null === ek) throw new Error("no game code to decode the world-gen seed with");
              return ek.decodeMapSettings(kk)
            },
            loadWorker: iM,
            onMapWithoutWorldgen: () => {
              DM((kk => {
                let {
                  stopWorldgenWorkerPrefetch: ek
                } = kk;
                ek()
              }))
            },
            onLoadFailed: kk => {
              (0, si.reportWorldgenLoadFailure)(kk, xb)
            },
            onWorkerLost: kk => {
              (0, si.reportWorkerLost)(Si.x, kk, xb)
            },
            onStartTimeout: kk => {
              (0, si.reportWorkerStartTimeout)(Si.x, kk, xb)
            },
            onGaveUp: kk => {
              (0, si.reportWorldgenGaveUp)(kk, xb)
            },
            onMemoryStats: kk => {
              var ek;
              null === (ek = jb) || void 0 === ek || ek.noteWorldgen(kk)
            },
            onMemoryGone: () => {
              var kk;
              null === (kk = jb) || void 0 === kk || kk.worldgenGone()
            },
            write: (ik, Dk, fk, Sk, bk) => {
              kM(kk, (() => {
                kk.rings.worker.writeWorkerRecord(ik, Dk, fk, 0, Sk, bk) || kk.crash(Si.x, `a world-gen record of kind ${Dk} did not fit the worker-in ring`)
              })), ek()
            }
          })
        }(Vk, Bk), Ab = function(kk, ek) {
          return new ZD({
            module: (0, Pe.C)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: kk
              }, ek] = await Promise.all([ik.e(40).then((() => ik(50599))), Promise.resolve().then((() => ik(99))).then((kk => {
                let {
                  isMobile: ek
                } = kk;
                return ek()
              }), (() => !1))]);
              return {
                create: kk,
                count: (0, je.c)(navigator.hardwareConcurrency, ek),
                maxKeptLightStates: ek ? 1 : void 0
              }
            },
            write: (ik, Dk, fk, Sk, bk, rk) => {
              (0, SD.g)(), kM(kk, (() => {
                kk.rings.worker.writeWorkerRecord(ik, Dk, fk, Sk, bk, rk) || kk.crash(Si.n, `a meshing record of kind ${Dk} did not fit the worker-in ring`)
              })), ek()
            },
            onWorkerLost: kk => {
              (0, si.reportWorkerLost)(Si.n, kk, xb)
            },
            onLightFault: (kk, ek) => {
              (0, si.reportLightFault)(kk, ek, xb)
            },
            onStartTimeout: kk => {
              (0, si.reportWorkerStartTimeout)(Si.n, kk, xb)
            },
            onMemoryStats: (kk, ek) => {
              var ik;
              null === (ik = jb) || void 0 === ik || ik.noteMeshWorker(kk, ek)
            },
            onMemoryGone: kk => {
              var ek;
              null === (ek = jb) || void 0 === ek || ek.meshWorkerGone(kk)
            },
            fail: (ek, ik) => {
              const Dk = () => {
                kk.crash(Si.n, void 0 === ik ? ek : new Error(ek, {
                  cause: ik
                }))
              };
              void 0 !== ik ? rM({
                site: Si.n,
                error: ik
              }, Dk) : Dk()
            }
          })
        }(Vk, Bk), IP();
        const Ok = (0, mf.o)(Ce.clientSideServerUrls.staticUrl, {
            onTableFailed: kk => {
              rM({
                site: si.MODEL_FEED_SITE,
                error: kk
              }, (() => {}), {
                stillWanted: Xk
              })
            },
            packUrl: kk => {
              var ek, ik;
              return null !== (ek = null === (ik = nm()) || void 0 === ik ? void 0 : ik.modelUrl(kk)) && void 0 !== ek ? ek : null
            }
          }),
          gk = function(kk, ek, ik) {
            const Dk = ik => {
              var Dk, fk;
              return null !== (Dk = null === (fk = ek()) || void 0 === fk ? void 0 : fk.drawnUrl(ik)) && void 0 !== Dk ? Dk : kk.url(ik)
            };
            return (0, rf.l)((0, ND.j)(Dk), ik)
          }(Ok, (() => Ib), nm),
          Gk = new ND.e(gk, (kk => {
            console.warn(`${IS} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
          }));
        Eb = Gk, hb = new ff(Vk, gk, ((kk, ek) => {
          void 0 === ek ? console.warn(`${IS} ${kk}`) : Hm(kk, ek)
        }));
        const Nk = new bf.h(Ok, function(kk, ek) {
          let Dk = !1,
            fk = null,
            Sk = null;
          const bk = {
              onUnavailable: (ik, Dk) => {
                Sk ??= rM({
                  site: si.MODEL_POOL_SITE,
                  error: ik,
                  urls: Dk
                }, (() => {
                  (0, si.reportModelPoolFailure)(ik, kk)
                }), {
                  stillWanted: ek
                })
              },
              onDecoderFailed: (ik, Dk) => {
                const fk = () => {
                  (0, si.reportDracoDecoderFailure)(ik, kk)
                };
                void 0 !== Dk ? rM({
                  site: si.MODEL_POOL_SITE,
                  error: ik,
                  urls: Dk
                }, fk, {
                  stillWanted: ek
                }) : fk()
              },
              onWorkerLost: ek => {
                (0, si.reportWorkerLost)(si.MODEL_POOL_SITE, ek, kk)
              },
              onModuleRetry: (ek, ik) => {
                (0, si.reportModelsModuleRetry)(ek, ik, kk)
              }
            },
            rk = ik.e(42).then((() => ik(50602))).then((kk => {
              let {
                pageModelPool: ek
              } = kk;
              if (Dk) return null;
              const ik = ek(bk);
              return fk = ik.unlisten, zb = ik.pool, IP(), ik.pool
            }), (kk => (Dk || bk.onUnavailable(kk, void 0), null)));
          return Qb = () => {
            var kk;
            Dk = !0, null === (kk = fk) || void 0 === kk || kk(), zb = null
          }, (kk, ek) => rk.then((ik => {
            var Dk;
            return null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.build(kk, ek)) && void 0 !== Dk ? Dk : (0, Mf.r)(kk, "the model workers did not load")
          })).then((kk => null !== Sk && (0, Mf.l)(kk) ? Sk.then((() => kk)) : kk))
        }(dk, Xk), (kk => {
          kk.startup ? (Tm(), rM({
            site: si.MODEL_FEED_SITE,
            error: kk.error,
            urls: "" === kk.url ? void 0 : [kk.url]
          }, (() => {
            (0, si.reportModelFailure)(kk, dk)
          }))) : (0, si.reportModelFailure)(kk, dk)
        }), {
          onWritten: (kk, ek) => {
            Gk.glbWritten(kk, ek)
          },
          onTaken: (kk, ek) => {
            Gk.glbTaken(kk, ek)
          },
          onPackFileFailed: (kk, ek) => {
            console.warn(`${IS} the texture pack's model file ${kk} failed: the shipped one loads`, ek)
          }
        });
        Ib = Nk;
        const Rk = new kf.g(Vk);
        Mb = Rk, Rk.swap((kk => {
          const ek = () => {
            (0, si.reportTerrainTextureFailure)(kk, dk)
          };
          if (Or) return void ek();
          const ik = () => !Or,
            Dk = null === kk.url ? void 0 : [kk.url];
          rM({
            site: Si.w,
            error: kk.error,
            urls: Dk
          }, ek, {
            stillWanted: ik
          })
        })).then((kk => {
          null !== kk && (kk || Vk.isStopped || console.warn(`${IS} the core refused the terrain textures: terrain draws untextured`), cb(Vk))
        }));
        const Jk = new Xe(Vk, ((kk, ek) => {
          console.warn(`${IS} ${kk}`, ...void 0 === ek ? [] : [ek])
        }));
        Jk.feed(), null !== xk && function(kk, ek, Dk, fk, Sk, bk) {
          let rk = null,
            mk = null,
            Mk = !1;
          const Kk = {
            textures: null,
            stop: () => {
              var kk, ek;
              Mk = !0, null === (kk = mk) || void 0 === kk || kk(), null === (ek = rk) || void 0 === ek || ek(), Pf.c.setSettled(null), null !== nb && wP.clear(nb)
            }
          };
          mb = Kk, mk = wm().follow((mk => {
            null !== mk && Promise.all([ik.e(203), ik.e(45)]).then((() => ik(50562))).then((ik => {
              let {
                PackTextures: xk
              } = ik;
              if (Mk || kk.isStopped) return;
              const nk = new xk({
                feed: mk,
                terrain: ek,
                backend: Dk,
                stopped: () => kk.isStopped,
                landed: () => {
                  cb(kk)
                },
                packSwapped: () => {
                  (0, rf.h)(fk), bk.feed((() => async function(kk) {
                    const ek = null === kk ? null : await kk.averageColours;
                    return null === ek ? Be() : te(ek)
                  }(nk.assets))), (0, Sf.i)(nk.files()), Sk.refresh().then((kk => {
                    null !== kk && console.info(`${IS} texture pack models: ${kk.resent} of ${kk.delivered} files written again, ${kk.refetched} refetched`)
                  }))
                },
                settled: (kk, ek, ik) => {
                  var Dk;
                  (Pf.c.setSettled({
                    state: kk,
                    files: ek
                  }), function(kk, ek, ik) {
                    const Dk = null === kk.gameSource && (0, di.i)(kk.pack);
                    if (null === ek) return;
                    const fk = (0, ji.k)(ek.error),
                      Sk = Dk ? "settings" : ek.source;
                    Pk.j.tm(ji.e, {
                      failure: fk,
                      source: Sk,
                      pack: Vi(kk)
                    }), (0, si.reportTexturePackKeptOut)(Sk, fk, ek.error, ik)
                  }(kk, ik, xb), null === ik) && function(kk) {
                    const ek = nb;
                    null !== ek && wP.apply(ek, kk).then((ek => {
                      ek && kk && console.info(`${IS} the texture pack's animations are in (${Object.keys(kk).length} files)`)
                    }))
                  }(null === (Dk = kk.pack) || void 0 === Dk ? void 0 : Dk.animations)
                },
                settling: () => {
                  Pf.c.setSettled(null)
                },
                warn: Hm,
                maxTextureSize: () => Promise.resolve((0, fi._)(document.createElement("canvas")))
              });
              Kk.textures = nk, rk = nk.start()
            }), (kk => {
              console.warn(`${IS} the texture pack's terrain didn't load: the built atlas stays`, kk)
            }))
          }))
        }(Vk, Rk, xk, Gk, Nk, Jk);
        const ke = () => {
            Vk.setTextureLayers("")
          },
          ee = kk => {
            (Le ??= ik.e(53).then((() => ik(50606))).then((kk => {
              let {
                TEXTURE_NAMES: ek
              } = kk;
              return ek
            }), (kk => {
              throw Le = null, kk
            })), Le).then((kk => {
              Vk.setTextureLayers(kk) || Vk.isStopped || (console.warn(`${IS} the core refused the texture names: textured Boxes draw textureNotFound`), ke())
            }), (ek => {
              if (Vk.isStopped) return;
              const [ik, ...Dk] = kk;
              void 0 === ik ? rM({
                site: si.TEXTURE_NAMES_SITE,
                error: ek
              }, (() => {
                console.warn(`${IS} the texture names didn't load, so textured Boxes draw textureNotFound`, ek), ke()
              }), {
                stillWanted: Xk
              }) : setTimeout((() => {
                ee(Dk)
              }), ik)
            }))
          };
        if (ee(NS), null !== xk && !await async function(kk, ek, ik, Dk, Sk, bk) {
            var rk;
            const Pk = (0, fi.I)(ik);
            if (null === Pk) return kk.crash(QS, new Error(`this ${Dk} build has no openRenderer`)), !1;
            let mk;
            Qr = Pk;
            try {
              var Mk, Kk, xk, nk;
              const fk = null !== (Mk = null === (Kk = Sb) || void 0 === Kk ? void 0 : Kk.pagePreviews()) && void 0 !== Mk ? Mk : null,
                rk = null !== (xk = null === (nk = Sb) || void 0 === nk ? void 0 : nk.previewModule(ik)) && void 0 !== xk ? xk : null;
              if (null === fk || null === rk) {
                null === fk || void 0 === fk || fk.endSession(!1), mk = (0, ze.g)().sampleCount, await (0, fi.g)(ek, Pk, bk, Km, mk, await Sk);
                const kk = (0, fi.l)(ik);
                null === kk && console.warn(`${IS} this ${Dk} build has no image registry: sky and model images won't show`), (0, JD.f)(kk)
              } else {
                (0, lf.b)() && await (0, Tk.j)();
                const ik = (0, lf.L)();
                if (null !== ik) {
                  const ek = (0, fi.U)(Pk);
                  return kk.crash(si.RENDER_RELOAD_SITE, new Error(`${ik}${void 0===ek?"":` (${ek.message})`}`)), !1
                }
                mk = await fk.bindSession(rk, ek, (async kk => (0, fi.u)(Pk, QS, bk, kk, Km, await Sk)))
              }
            } catch (fk) {
              return kk.crash(QS, fk), !1
            }(function(kk, ek) {
              const ik = kk,
                {
                  requestCapture: Dk,
                  takeCapture: fk
                } = ik;
              if ("function" !== typeof Dk || "function" !== typeof fk) return;
              const Sk = {
                request() {
                  Dk.call(ik, ek)
                },
                take() {
                  var kk;
                  return null !== (kk = fk.call(ik)) && void 0 !== kk ? kk : null
                }
              };
              window[jf] = Sk
            })(ek, mk), Xr = mk, Ir = !0;
            const Uk = performance.now();
            return zr.boundAtMs = null !== (rk = (0, lf.N)()) && void 0 !== rk ? rk : Uk, zr.indirectHangs = (0, lf.A)(), zr.restoresSkipped = (0, lf.Q)(), console.info(`${IS} ${Dk} renderer bound at ${Math.round(Uk)} ms`), !kk.isStopped
          }(Vk, sk, jk, xk, Uk, wk)) return null;
        if (null !== xk) {
          var ie, De, fe;
          (0, xe.y)(xk);
          const kk = () => !Vk.isStopped && Wm();
          ik.e(196).then((() => ik(33664))).then((ek => {
            let {
              devTools: ik
            } = ek;
            Vk.isStopped || ik.setHost(function(kk) {
              return {
                tools: wf,
                async downloadScene(ek, ik) {
                  let {
                    width: Dk,
                    height: fk,
                    colouring: Sk
                  } = ik;
                  "screenshot" === ek && null === Sk ? await (0, nf.d)(kk, Dk, fk) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(kk, ek) {
              return {
                canvas: kk,
                maxTextureSize: Uf,
                drawing: ek,
                resize: (kk, ek) => {
                  (0, Wi.s)(ce.Hb.Resize, 0, kk, ek, (0, Wi.k)(1))
                },
                restoreSize: () => {
                  const ek = (0, ze.o)(kk);
                  null !== ek && (0, Wi.s)(ce.Hb.Resize, 0, ek.cssWidth, ek.cssHeight, (0, Wi.k)(ek.renderScale))
                },
                onFrameDrawn: kk => (Hf.add(kk), () => {
                  Hf.delete(kk)
                })
              }
            }(wk, kk)))
          }), (kk => {
            console.warn(`${IS} the developer tools didn't load: no captures this session`, kk)
          }));
          const ek = "webgpu" === xk && null !== (ie = null === Mk || void 0 === Mk || null === (De = Mk.adapter) || void 0 === De ? void 0 : De.vendor) && void 0 !== ie ? ie : null;
          Br = {
            backend: xk,
            canvas: wk,
            fallbackReason: null !== (fe = null === Mk || void 0 === Mk ? void 0 : Mk.reason) && void 0 !== fe ? fe : null,
            adapterVendor: ek
          }, Cm();
          try {
            (0, SD.q)(xk, wk, ek)
          } catch (fk) {
            (0, SD.r)(), console.error(`${IS} the quality steps didn't start`, fk)
          }
        }
        const {
          storagePullBreaks: Se,
          splitPassBreaks: re
        } = await Uk;
        re && console.warn(`${IS} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Ue = (0, ck.h)(Mk, (0, Fe.i)());
        if ((0, Bf.s)("webgpuloss")) {
          var ye, Ye;
          const kk = {
            backend: xk,
            reason: null !== (ye = null === Mk || void 0 === Mk ? void 0 : Mk.reason) && void 0 !== ye ? ye : null,
            source: null !== (Ye = null === Mk || void 0 === Mk ? void 0 : Mk.source) && void 0 !== Ye ? Ye : null,
            storagePullBreaks: Se,
            noWebGpu: Ue.messageKey
          };
          (0, Tf.b)((ek => {
            ek.noteWasmPick(kk)
          }))
        }
        const Ae = "webgpu" === xk;
        if (Wb = (0, ck.l)(Ae ? Vk : null, Ae && null !== (rk = null === (mk = Sb) || void 0 === mk ? void 0 : mk.pagePreviews().AU) && void 0 !== rk ? rk : null, Ue, Hm), PP) return null;
        if (Ek.reserveAtJoin((0, gD.o)(null !== qk && void 0 !== qk ? qk : Yi.h)), Vk.isStopped) return null;
        const se = kk => {
          if (Ob = performance.now(), gb = !1, null !== cr) try {
            cr.animationFrame(kk)
          } catch (fk) {
            sm(fk)
          }
          if (function(kk, ek) {
              return ek && !PP && !Rb && tm() && Wm() && kk.framePaces(performance.now())
            }(Vk, fP)) {
            if (Vk.writePendingInput(), (0, Ck.g)(kk, Im), Am(!1, kk), null !== cr) try {
              cr.framePaced()
            } catch (fk) {
              sm(fk)
            }
            requestAnimationFrame(se)
          } else qm(Vk, fP, "budget") && ((0, qe.j)(Vk.lastFrameKind) && Wm() && (0, Ck.g)(kk, Im), Am(fP && eP, kk), iP.frame(Vk.lastFrameKind, fP && Wm(), kk), (0, qe.d)(Vk.lastFrameKind) && Fe.D.drew(), Om(Vk), Ek.afterFrame(), requestAnimationFrame(se))
        };
        requestAnimationFrame(se);
        return function(kk) {
          if (kk.has("inputLog") && (0, UD.j)((kk => {
              let {
                action: ek,
                down: ik,
                press: Dk
              } = kk;
              console.info(`${wD} input ${ek} ${ik?"down":"up"} press ${Dk} at ${performance.now().toFixed(1)}`)
            })), kk.has("inputDump")) {
            const kk = [];
            pD = kk, Object.assign(window, {
              bloxdInputDump: () => kk.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Fb = function(kk) {
          let ek = null;
          const ik = () => {
              null !== ek && (clearInterval(ek), ek = null)
            },
            Dk = () => {
              document.hidden ? ek ??= setInterval((() => {
                SM(kk) || ik()
              }), GS) : ik()
            };
          return document.addEventListener("visibilitychange", Dk), Dk(), () => {
            ik(), document.removeEventListener("visibilitychange", Dk)
          }
        }(Vk), Vk
      }(ek).then((kk => {
        var ek;
        (Dk(xb), wb(null !== kk), null !== kk && (uf = performance.now()), Ub(kk), null === kk) ? null === (ek = Sb) || void 0 === ek || ek.pagePreviews().endSession(null === (0, Pe.t)()): Bb("booted")
      }), (kk => {
        Dk(xb), wb(!1), Ub(null), om({
          site: vS,
          error: kk,
          header: null
        }, xb)
      }))
    }

    function HP() {
      const kk = nb;
      null !== kk && mP().then((ek => {
        let {
          pageBuiltInAnimationPack: ik
        } = ek;
        ik().provide(kk)
      }), (kk => {
        console.warn(`${IS} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, kk)
      }))
    }
    const wP = new class {
      constructor(kk) {
        this.deps = kk, this.latest = 0, this.XM = null
      }
      apply(kk, ek) {
        return this.load(kk, ek, 0)
      }
      async load(kk, ek, ik) {
        var Dk;
        const fk = ++this.latest,
          Sk = this.deps.compiler;
        if (void 0 === ek || null === ek || "object" !== typeof ek || 0 === Object.keys(ek).length || null === Sk) return this.drop(kk), !1;
        if ((null === (Dk = this.XM) || void 0 === Dk ? void 0 : Dk.module) === kk && (0, Je.Sd)(this.XM.files, ek)) return !1;
        try {
          const [ik, Dk] = await Promise.all([Sk(), this.deps.builtIns()]);
          if (fk !== this.latest) return !1;
          const bk = await ik(ek, Di, {
            builtIns: Dk
          });
          if (fk !== this.latest) return !1;
          const rk = this.call(kk, bk);
          if (void 0 === rk) throw new ii("the compiled animations didn't read against the built-in pack");
          return this.XM = {
              module: kk,
              files: ek
            },
            function(kk) {
              for (let ek = 0; ek + 2 < kk.length; ek += 3) {
                ("error" === kk[ek] ? console.error : console.warn)(`Animation for the texture pack: ${kk[ek+1]}: ${kk[ek+2]}`)
              }
            }(rk), !0
        } catch (rk) {
          var bk;
          if (fk !== this.latest) return !1;
          this.drop(kk), 0 === ik && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", rk);
          const Dk = (null !== (bk = this.deps.retryAfterMs) && void 0 !== bk ? bk : ei)[ik];
          return void 0 === Dk || rk instanceof ii || (0, ki.h)(kk) || setTimeout((() => {
            fk === this.latest && this.load(kk, ek, ik + 1)
          }), Dk), !1
        }
      }
      call(kk, ek) {
        try {
          return kk.vik(ek)
        } catch (ik) {
          throw (0, ki.j)(kk, ik), ik
        }
      }
      clear(kk) {
        this.latest++, this.drop(kk)
      }
      drop(kk) {
        const ek = this.XM;
        if (this.XM = null, (null === ek || void 0 === ek ? void 0 : ek.module) === kk && !(0, ki.h)(kk)) try {
          this.call(kk, null)
        } catch {}
      }
    }({
      compiler: ge.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: kk
        } = await mP();
        return kk().whenSet()
      },
      warn: Hm
    });
    async function lP(kk, ek) {
      let Dk = !1;
      await pP({
        matchmake: async () => {
          const {
            guestJoinTarget: fk,
            guestJoinWithPack: Sk
          } = await ik.e(270).then((() => ik(50545)));
          return Dk ? fk(kk, ek, pm()) : (Dk = !0, Sk(kk, ek, (ek => ym(kk, ek)), pm))
        },
        onFailure: kk => {
          (0, si.showJoinFailure)(kk, xb)
        },
        rejoin: vP,
        invalidateTrafficCode: EP
      })
    }
    async function pP(kk) {
      let {
        matchmake: ek,
        onFailure: ik,
        rejoin: fk,
        invalidateTrafficCode: Sk,
        pageReady: bk,
        signal: rk
      } = kk;
      const Pk = () => !0 === (null === rk || void 0 === rk ? void 0 : rk.aborted);
      let mk;
      const Mk = Pf.c.rejoinHold();
      Kr = null;
      const Kk = (0, Ii.N)("wasm", Rm);
      let xk = !1,
        nk = performance.now();
      try {
        if (!await lb) return {
          kind: "stopped"
        };
        if (Pk()) return {
          kind: "Ji"
        };
        MP().catch((() => {}));
        let kk = await ek();
        var Hk, wk;
        if (nk = performance.now(), !Pk()) Nm(null !== (Hk = null === (wk = kk.target.session) || void 0 === wk ? void 0 : wk.gameNameWithVariation) && void 0 !== Hk ? Hk : null);
        const ik = () => performance.now() - kk.matchedAt <= kk.freshMs,
          Dk = YP(kk.target).catch((() => {}));
        ik() && !Pk() && (mk = new cD(kk.target, {
          signal: rk
        }));
        const Sk = performance.now();
        if (null === await Hb) return {
          kind: "stopped"
        };
        var lk, pk;
        if (function(kk) {
            var ek, ik;
            if (sf.d.markGameEngineConstructed(), qf) return;
            qf = !0;
            const Dk = Math.max(kk, null !== (ek = Vf) && void 0 !== ek ? ek : kk);
            (0, df.j)("ready", Math.max(0, (null !== (ik = Ff) && void 0 !== ik ? ik : Dk) - Dk) / 1e3)
          }(Sk), !Pk())
          if (null !== Ff && null !== uf ? ((0, Uk.m)("wasm_loaded", Ff), (0, Uk.m)("wasm_core_ready", uf)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), kk.target.session && (0, Jf.c)(kk.target.session.gameNameWithVariation)) null === (lk = Lb) || void 0 === lk || lk.prestart();
        if (await Dk, !ik() && !Pk()) null === (pk = mk) || void 0 === pk || pk.rematched(), kk = await ek(), nk = performance.now();
        if (Pk()) return {
          kind: "Ji"
        };
        const Mk = await async function(kk) {
          var ek, ik, Dk;
          let {
            signal: fk,
            rejoin: Sk = null,
            early: bk,
            pageReady: rk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== fk && void 0 !== fk && fk.aborted) throw new DOMException("the join was left", "AbortError");
          const Pk = (mk = Lr, Mk = performance.now(), null !== mk && Mk - mk < uD);
          var mk, Mk;
          Lr = null;
          const Kk = new AbortController,
            xk = null !== (ek = null === (ik = kk.session) || void 0 === ik ? void 0 : ik.gameNameWithVariation) && void 0 !== ek ? ek : null;
          Nm(xk), AP({
            controller: Kk,
            game: xk
          }), Cr = null, null === (Dk = sr) || void 0 === Dk || Dk.abort(), sr = null, Vr = !1, Fr = null, ur.clear();
          const nk = () => {
            (0, Ae.l)(Kk, (0, Ae.i)(fk))
          };
          null === fk || void 0 === fk || fk.addEventListener("abort", nk, {
            once: !0
          });
          try {
            var Hk, wk, lk;
            const ek = await Hb;
            if (null === ek || ek.isStopped || PP) throw new Error("no core is running to join a game with");
            if (kk.session && null !== Wb) {
              const ek = await LP(Wb.join(kk.session.gameNameWithVariation), Kk.signal);
              if ((0, Bf.s)("webgpuloss")) {
                const ik = kk.session.gameNameWithVariation,
                  Dk = Wb.couldntRunInJoinedGame();
                (0, Tf.b)((kk => kk.noteWasmJoin(ik, ek, Dk)))
              }
              if (null !== ek) throw new ck.d(ek)
            }
            const [, , , {
              joinRoom: ik
            }] = await LP(Promise.all([(0, Ak.h)(ek), YP(kk), null === rk || void 0 === rk ? void 0 : rk(), MP()]), Kk.signal), Dk = kk.session, fk = Dk ? {
              ...WP,
              attachSocket: ek => {
                const ik = ZP(ek, kk.endpoint);
                var fk;
                null !== ik && (Ur = {
                  conn: ik,
                  info: Dk
                }, null === (fk = Hr) || void 0 === fk || fk(Dk.playerDbId));
                return ik
              }
            } : WP, mk = await ik(fk, kk, {
              signal: Kk.signal,
              early: bk
            }).catch((kk => {
              throw function(kk) {
                if (!(kk instanceof Qk.d)) return kk;
                if ("roomError" === kk.stage && null !== Fr) return yP(new Qk.d(kk.message, kk.stage, kk.code, Fr), kk);
                const ek = "closed" === kk.stage && null !== Ar ? ur.get(Ar.conn) : void 0;
                return void 0 === ek ? kk : yP(new Qk.d(kk.message, kk.stage, ek.code, null, kk.socketOpened), kk)
              }(kk)
            }));
            if (Mr !== Kk) throw mk.leave(), new DOMException("the join was left", "AbortError");
            sP(mk), null === (Hk = Ab) || void 0 === Hk || Hk.newGame();
            const Mk = function(kk) {
              var ek, ik;
              const {
                session: Dk
              } = kk, fk = void 0 === Dk ? kk.joinOptions.lobbyName : Dk.lobbyName;
              return {
                endpoint: kk.endpoint,
                game: null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.gameNameWithVariation) && void 0 !== ek ? ek : kk.roomName,
                lobby: String(null !== fk && void 0 !== fk ? fk : null),
                postCookies: null !== (ik = kk.postCookies) && void 0 !== ik ? ik : null
              }
            }(kk);
            mr.set(mk, Mk), WD(Mk);
            const xk = performance.now(),
              nk = {
                conn: mk.conn,
                rejoin: Sk,
                game: null !== (wk = null === (lk = kk.session) || void 0 === lk ? void 0 : lk.gameNameWithVariation) && void 0 !== wk ? wk : "",
                joinedAt: xk,
                rejoinedAt: Pk ? xk : null,
                overflow: null
              };
            wr = nk,
              function(kk, ek) {
                em();
                const ik = {
                  endpoint: ek,
                  roomId: kk.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new wi({
                    reconnect: (kk, ek, Dk) => async function(kk, ek, ik, Dk) {
                      const {
                        roomId: fk,
                        roomToken: Sk
                      } = Dm(kk, ek), bk = rb;
                      if (null === bk || bk.isStopped || PP) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: rk
                      } = await LP(MP(), ik), Pk = {
                        ...WP,
                        attachSocket: ek => lr !== kk || 0 === kk.heldConn ? (ek.close(), null) : ZP(ek, kk.endpoint, !0)
                      };
                      return rk(Pk, kk.endpoint, fk, Sk, {
                        signal: ik,
                        onAttached: Dk
                      })
                    }(ik, kk, ek, Dk),
                    releaseSeat: kk => {
                      !async function(kk, ek) {
                        const {
                          roomId: ik,
                          roomToken: Dk
                        } = Dm(kk, ek);
                        try {
                          const {
                            leaveHeldSeat: ek
                          } = await MP();
                          await ek(kk.endpoint, ik, Dk)
                        } catch (fk) {
                          console.warn(`${IS} the held seat of a game left while it reconnected couldn't be released`, fk)
                        }
                      }(ik, kk)
                    },
                    isLive: () => lr === ik && null !== wr && !PP,
                    VV: kk => {
                      Yr = kk, km()
                    },
                    onReconnected: kk => {
                      ! function(kk) {
                        const ek = Pr;
                        if (null !== ek && ek !== kk) {
                          const ik = mr.get(ek);
                          void 0 !== ik && mr.set(kk, ik), kP === ek && (kP = kk), ek.detach()
                        }
                        sP(kk)
                      }(kk)
                    },
                    onGaveUp: (kk, ek) => {
                      ! function(kk, ek, ik) {
                        var Dk, fk;
                        console.warn(`${IS} gave up reconnecting (${ik.reason}, ${ik.attempts} attempts)`, ik.lastError), (0, si.reportReconnectGaveUp)(ik, xb);
                        const Sk = null !== (Dk = null === (fk = wr) || void 0 === fk ? void 0 : fk.rejoin) && void 0 !== Dk ? Dk : null;
                        im(kk, "gaveUp"), VP();
                        const bk = {
                          code: kk.dropCode,
                          name: null,
                          reason: oS,
                          canReconnect: !ek,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        aP(bk, ek ? null : Sk, !1, {
                          reasonKey: ZS,
                          canPlayAgain: ek
                        })
                      }(ik, kk, ek)
                    }
                  })
                };
                lr = ik, null !== pr && pr.conn === kk.conn && ik.resume.onInitialInfo(pr)
              }(mk, kk.endpoint), performance.mark(aS), (0, Uk.m)("wasm_joined", xk), setTimeout((() => {
                Pr === mk && (0, Uk.f)()
              }), 0), HP(), console.info(`${IS} joined ${kk.roomName} as ${mk.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const pk = Cr;
            Cr = null, null !== pk && qP(nk, pk.mask, pk.frames);
            const yk = ur.get(mk.conn);
            return ur.clear(), void 0 !== yk && (sP(null), hP(mk.conn, yk.code, yk.reason)), mk
          } finally {
            var pk;
            null === fk || void 0 === fk || fk.removeEventListener("abort", nk), Mr === Kk && jP(Pr, null), (null === (pk = Ar) || void 0 === pk ? void 0 : pk.join) === Kk && (Ar = null)
          }
        }(kk.target, {
          signal: rk,
          rejoin: fk(kk.target),
          early: mk,
          pageReady: bk
        });
        return xk = !0, {
          kind: "joined",
          game: Mk
        }
      } catch (Yk) {
        if (Yk instanceof DOMException && "AbortError" === Yk.name || Pk()) return {
          kind: "Ji"
        };
        if (PP) return {
          kind: "stopped"
        };
        if (Vr && (Vr = !1, await Sk().catch((kk => {
            console.warn(`${IS} the cached traffic code could not be dropped`, kk)
          }))), null === await Hb) return {
          kind: "stopped"
        };
        if (Yk instanceof ck.d) return ik(Yk, performance.now() - nk), {
          kind: "failed",
          error: Yk,
          reloading: !1
        };
        if (Yk instanceof Qk.d && Yk.code === Dk.c.wasmClientNotAllowed.code && DP) return Mm("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Yk,
          reloading: !0
        };
        const kk = Yk instanceof Qk.d && Yk.code === Dk.c.outdatedVersion.code,
          ek = () => null === Pr,
          fk = await rM({
            site: si.JOIN_SITE,
            error: Yk,
            outdated: kk
          }, (() => {
            ik(Yk, performance.now() - nk)
          }), {
            stillWanted: ek
          });
        return {
          kind: "failed",
          error: Yk,
          reloading: fk
        }
      } finally {
        var yk;
        xk || Kk.end(), Pf.c.releaseHold(Mk);
        const kk = null === (yk = mk) || void 0 === yk ? void 0 : yk.release();
        kk && (0, si.reportUnusedSeat)(kk, xb)
      }
    }

    function yP(kk, ek) {
      return kk.stack = ek.stack, kk
    }

    function YP(kk) {
      return kk.session ? (0, Ak.m)(Kb, kk.session.gameNameWithVariation) : Promise.resolve()
    }

    function LP(kk, ek) {
      return (0, Ae.q)(ek), new Promise(((ik, Dk) => {
        const fk = () => {
          Dk((0, Ae.i)(ek))
        };
        ek.addEventListener("abort", fk, {
          once: !0
        }), kk.then((kk => {
          ek.removeEventListener("abort", fk), ik(kk)
        }), (kk => {
          ek.removeEventListener("abort", fk), Dk(kk)
        }))
      }))
    }

    function CP() {
      AP(null)
    }

    function AP(kk) {
      var ek, ik, Dk;
      (function() {
        const kk = lr;
        null !== kk && im(kk, "left")
      }(), null === yb || yb.left) || (yb.left = !0, null === (Dk = (0, Ak.g)()) || void 0 === Dk || Dk.socketLeft(), (0, xk.n)({
        websocketUrl: null
      }));
      Mr && (0, Ae.l)(Mr, new DOMException("the join was left", "AbortError")), VP(null !== kk), null === (ek = Wb) || void 0 === ek || ek.leave();
      const fk = Pr;
      null !== kk && Pf.c.setGame(kk.game), jP(null, null !== (ik = null === kk || void 0 === kk ? void 0 : kk.controller) && void 0 !== ik ? ik : null), null === fk || void 0 === fk || fk.leave(), dP(0), (0, ye.h)()
    }

    function jP(kk, ek) {
      Pr = kk, Mr = ek, null === Pr && null === Mr && Pf.c.setGame(void 0)
    }

    function sP(kk) {
      jP(kk, Mr)
    }

    function dP(kk) {
      const ek = rb;
      return null !== JS && !PP && null !== ek && !ek.isStopped && (!!JS(Qk.f, 0, (0, Qk.x)(kk)) && (er = !0, 0 === kk || Rb || qm(ek, !1, "all"), !0))
    }

    function VP() {
      var kk, ek;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Ii.g)();
      const ik = null !== (kk = null === (ek = wr) || void 0 === ek ? void 0 : ek.overflow) && void 0 !== kk ? kk : null;
      wr = null, null !== ik && (0, si.reportEventOverflow)(ik, xb)
    }

    function FP() {
      null !== Pr || null !== Mr ? CP() : OP()
    }

    function uP(kk, ek) {
      console.warn(`${IS} the event buffer refused records in ${ek} frames (categories ${kk})`), PP || (null !== wr ? qP(wr, kk, ek) : null !== Mr && function(kk, ek, ik) {
        var Dk;
        const fk = function(kk, ek) {
          return null === kk ? "drop" : kk.activated ? "keep" : 0 !== (ek & Te.C.NetSession) ? "fail" : "drop"
        }((null === (Dk = Ar) || void 0 === Dk ? void 0 : Dk.join) === kk ? Ar : null, ek);
        "keep" === fk ? Cr = {
          mask: ek,
          frames: ik
        } : "fail" === fk && (0, Ae.l)(kk, new Error("the join's net session was lost to an event overflow"))
      }(Mr, kk, ek))
    }

    function qP(kk, ek, ik) {
      const Dk = kk.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Dk.frames += ik, Dk.acks++, Dk.mask |= ek;
      const fk = function(kk, ek, ik) {
        if (0 === (kk & Te.C.NetSession)) return "none";
        const Dk = null !== ek.rejoinedAt && ik - ek.rejoinedAt < qD;
        return null === ek.rejoin || Dk ? "fail" : "rejoin"
      }(ek, kk, performance.now());
      "none" !== fk && queueMicrotask((() => {
        if (wr !== kk) return;
        const ek = "rejoin" === fk && performance.now() - jr >= zk.g;
        Dk.outcome = ek ? "rejoined" : "failed", aP(function(kk, ek) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: kk,
            automaticallyReconnect: ek,
            requiresRefresh: !1
          }
        }(null !== kk.rejoin, ek), kk.rejoin, ek), CP(), ek && (Lr = performance.now())
      }))
    }

    function IP() {
      DP && function(kk, ek) {
        let {
          mesh: ik,
          worldgen: Dk,
          modelPool: fk
        } = kk;
        "landingPage" === ek ? (null === ik || void 0 === ik || ik.stopWorkers(), null === Dk || void 0 === Dk || Dk.stopWorker(), null === fk || void 0 === fk || fk.stopWorkers()) : ((0, Zk.i)(ek) || "inGame" === ek) && (null === ik || void 0 === ik || ik.restartWorkers(), null === fk || void 0 === fk || fk.startWorkers())
      }({
        mesh: Ab,
        worldgen: Lb,
        modelPool: zb
      }, Zk.b.get("gameState"))
    }

    function zP(kk) {
      fP = kk, SP && QP(SP, kk)
    }

    function QP(kk, ek) {
      kk.style.visibility = ek ? "visible" : "hidden"
    }

    function vP(kk) {
      var ek;
      const ik = kk.roomName,
        Dk = null !== (ek = kk.joinOptions.lobbyName) && void 0 !== ek ? ek : null;
      return () => {
        lP(ik, Dk)
      }
    }

    function EP() {
      return ik.e(270).then((() => ik(50545))).then((kk => {
        let {
          invalidateGuestTrafficCode: ek
        } = kk;
        return ek()
      })).catch((kk => {
        console.warn(`${IS} the cached traffic code could not be dropped`, kk)
      }))
    }

    function hP(kk, ek, ik) {
      var fk, Sk;
      let bk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (PP) return;
      if ((null === (fk = wr) || void 0 === fk ? void 0 : fk.conn) !== kk) return void(null !== Mr && ur.set(kk, {
        code: ek,
        reason: ik
      }));
      const {
        rejoin: rk,
        game: Pk,
        joinedAt: mk
      } = wr;
      VP(), em();
      const Mk = (0, zk.n)(ek, (0, zD.e)(kk));
      if (console.info(`${IS} the game's connection closed with code ${ek} (${null!==(Sk=Mk.name)&&void 0!==Sk?Sk:"unrecognised"})`), ek === Dk.c.gameOrPluginKick.code || bk || (0, si.reportDisconnect)(Mk, xb, {
          closeReason: ik,
          sinceJoinedMs: performance.now() - mk,
          game: Pk
        }), Mk.requiresRefresh) {
        const kk = "outdatedVersion" === Mk.name,
          ik = new Error(`the game's connection closed with code ${ek}`),
          Dk = () => null === wr && null === Mr;
        return void rM({
          site: si.JOIN_SITE,
          error: ik,
          outdated: kk
        }, (() => {
          Dk() && aP(Mk, null, !1)
        }), {
          stillWanted: Dk
        })
      }
      const Kk = Mk.canReconnect ? rk : null,
        xk = null !== Kk && Mk.automaticallyReconnect && performance.now() - jr >= zk.g;
      aP(Mk, Kk, xk)
    }

    function aP(kk, ek, ik) {
      var Dk;
      let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (bP) return;
      Pf.c.unwantedLeave(ik && null !== ek && 0 === dr.size), null === (Dk = sr) || void 0 === Dk || Dk.abort();
      const Sk = new AbortController;
      sr = Sk;
      const bk = null === ek ? null : () => {
        Sk.signal.aborted || (Sk.abort(), ek())
      };
      if (ik && null !== bk) {
        jr = performance.now();
        const kk = setTimeout(bk, zk.c);
        Sk.signal.addEventListener("abort", (() => {
          clearTimeout(kk)
        }))
      }
      const rk = {
        code: kk.code,
        name: kk.name,
        reason: kk.reason,
        reasonKey: fk.reasonKey,
        reconnect: bk,
        reconnecting: ik,
        requiresRefresh: kk.requiresRefresh,
        canPlayAgain: fk.canPlayAgain
      };
      if (dr.size > 0)
        for (const mk of [...dr]) try {
          mk(rk)
        } catch (Pk) {
          console.error(`${IS} an unwanted-leave listener threw`, Pk)
        } else VD((0, jD.j)(kk, null !== bk, ik), Sk.signal).then((ek => {
          ek && (null !== bk ? bk() : kk.requiresRefresh && (0, Tk.i)())
        }))
    }
    const WP = {
      attachSocket: kk => ZP(kk),
      onConnection: kk => (qr.add(kk), () => {
        qr.delete(kk)
      }),
      sendRaw: (kk, ek) => {
        const ik = yb;
        return null !== ik && ik.conn === kk && cm(ik, ek)
      },
      leaveRoom: dP,
      closeSocket: kk => {
        var ek;
        (null === (ek = yb) || void 0 === ek ? void 0 : ek.conn) === kk && OP()
      },
      flushNet: gP
    };

    function tP(kk) {
      var ek;
      let {
        aux: ik,
        payload: Dk
      } = kk;
      null === (ek = rb) || void 0 === ek || ek.queueOptions(ik, Dk)
    }

    function XP(kk, ek) {
      tP(function(kk, ek) {
        return Yf = kk ? {
          preventMovement: ek
        } : null, kk ? Lf(ek) : {
          aux: ce.sc.AdEnd,
          payload: yf
        }
      }(kk, ek))
    }

    function BP(kk) {
      var ek;
      Sr = kk, null === (ek = rb) || void 0 === ek || ek.setUiPrefs(kk)
    }

    function cP(kk, ek) {
      Kb.setMaster(kk, ek)
    }

    function TP(kk) {
      var ek;
      br = kk, null === (ek = rb) || void 0 === ek || ek.setEnvPrefs(kk)
    }

    function oP(kk) {
      var ek;
      rr = kk, null === (ek = rb) || void 0 === ek || ek.setLookPrefs(kk)
    }

    function ZP(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(kk.url).origin,
        Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (kk.readyState === WebSocket.CLOSING || kk.readyState === WebSocket.CLOSED) return console.warn(`${IS} a closing or closed socket can't be attached`), null;
      const fk = rb;
      if (!fk || fk.isStopped) return console.warn(`${IS} no core is running to attach a socket to`), kk.close(), null;
      if (null === (0, Ak.g)()) return console.warn(`${IS} the game has not started to attach a socket to`), kk.close(), null;
      if (Tb > ce.E) return console.warn(`${IS} this core has attached all the sockets it can; reload to play on`), kk.close(), null;
      if (er && !Rb && (qm(fk, !1, "all"), fk.isStopped || PP)) return kk.close(), null;
      OP();
      const Sk = Tb++;
      if (!rm(fk, "open", Sk, Dk ? ce.oc.Resume : 0)) return kk.close(), null;
      Dk || pe.c.reset(), Ar = null === Mr ? null : {
        join: Mr,
        conn: Sk,
        activated: !1
      }, kk.binaryType = "arraybuffer";
      const bk = new li.e((() => {
          ! function(kk, ek) {
            if (yb !== ek || kk.isStopped || null === RP(ek, cS)) return;
            ek.detach(), yb = null, NP(kk, ek, cS, "", !0), ek.ws.close()
          }(fk, rk)
        })),
        rk = {
          ws: kk,
          conn: Sk,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Dk,
          token: null,
          detach: () => {
            bk.dispose(), kk.removeEventListener("message", Pk), kk.removeEventListener("open", mk), kk.removeEventListener("close", Mk)
          }
        },
        Pk = kk => {
          if (kk.data instanceof ArrayBuffer) {
            var ek;
            const ik = new Uint8Array(kk.data);
            bk.heard(), rk.token = null !== (ek = (0, yi.e)(ik)) && void 0 !== ek ? ek : rk.token,
              function(kk, ek, ik) {
                kM(kk, (() => {
                  kk.rings.net.writeFrame(ek, ik) || kk.crash(Si.o, `a socket frame of ${ik.byteLength} bytes did not fit the net-in ring`)
                }));
                const Dk = kk.rings.net.cursor >= BS;
                !fM() && (Dk || kk.netWrittenSinceFrame >= XS) && qm(kk, !1, document.hidden ? "all" : "budget");
                bM(kk)
              }(fk, Sk, ik)
          }
        },
        mk = () => {
          Dk || (0, Uk.m)("wasm_socket_open", performance.now());
          for (const ek of rk.pending.splice(0)) kk.send(ek);
          rk.pendingBytes = 0
        },
        Mk = kk => {
          if (yb === rk && fk.rings.net.cursor > 0 && qm(fk, !1, "all"), yb === rk) {
            if (rk.detach(), yb = null, NP(fk, rk, kk.code, kk.reason) || GP(fk, rk)) return;
            rm(fk, "close", Sk), JP(Sk, rk.left), hP(Sk, kk.code, kk.reason)
          }
        };
      return kk.addEventListener("message", Pk), kk.addEventListener("open", mk), kk.addEventListener("close", Mk), yb = rk, null === (ek = (0, Ak.g)()) || void 0 === ek || ek.socketAttached(Sk), (0, xk.n)({
        websocketUrl: ik
      }), Sk
    }

    function OP() {
      const kk = yb;
      if (!kk) return;
      const ek = rb,
        ik = kk.resume;
      ik && (gP(), yb !== kk) || (yb = null, kk.detach(), kk.ws.close(), null !== ek && (GP(ek, kk) || ik && NP(ek, kk, TS)) || (null !== ek && rm(ek, "close", kk.conn), JP(kk.conn, kk.left)))
    }

    function gP() {
      const kk = rb;
      null !== kk && !kk.isStopped && !PP && !Rb && kk.rings.net.cursor > 0 && qm(kk, !1, "all")
    }

    function GP(kk, ek) {
      var ik;
      if (!ek.resume) return !1;
      const Dk = lr;
      return null !== Dk && null !== ek.token && "" !== ek.token && (Dk.pendingHold = {
        conn: ek.conn,
        token: `${Dk.roomId}:${ek.token}`
      }), rm(kk, "close", ek.conn), null === (ik = (0, Ak.g)()) || void 0 === ik || ik.socketDetached(ek.conn), !0
    }

    function NP(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Sk = RP(ek, ik);
      if (null === Sk) return !1;
      const {
        XM: bk,
        token: rk,
        game: Pk,
        joinedAt: mk
      } = Sk;
      if (!rm(kk, "close", ek.conn, ce.I.Held)) return !0;
      console.warn(`${IS} the game's connection ${fk?"went silent":`dropped with code ${ik}`}, holding it`);
      const Mk = {
        closeReason: Dk,
        sinceJoinedMs: performance.now() - mk,
        game: Pk
      };
      return (0, si.reportDisconnect)((0, zk.n)(ik), xb, Mk, fk ? "silent" : void 0), bk.heldConn = ek.conn, bk.dropCode = ik, bk.pendingHold = {
        conn: ek.conn,
        token: `${bk.roomId}:${rk}`
      }, Rb || qm(kk, !1, "all"), !0
    }

    function RP(kk, ek) {
      const ik = lr,
        fk = wr,
        Sk = kk.token;
      return null === ik || null === fk || PP || kk.left || fk.conn !== kk.conn || null === Sk || "" === Sk ? null : (0, Dk.j)(ek) && ik.resume.canHoldSeat() ? {
        XM: ik,
        token: Sk,
        game: fk.game,
        joinedAt: fk.joinedAt
      } : null
    }

    function JP(kk, ek) {
      var ik;
      null === (ik = (0, Ak.g)()) || void 0 === ik || ik.closeGame(kk), (0, pf.e)().close(kk), ek || (0, xk.n)({
        websocketUrl: null
      })
    }

    function km() {
      const kk = Yr;
      if (null === kk) return;
      const ek = (0, Ak.g)();
      PP || null === ek || ek.VV(kk) ? Yr = null : performance.now() - ir.pause >= gS && (ir.pause = performance.now(), console.warn(`${IS} the cmd ring had no room for SetPaused(${kk}): written before the next frame`))
    }

    function em() {
      const kk = lr;
      lr = null, null === kk || void 0 === kk || kk.resume.dispose()
    }

    function im(kk, ek) {
      var ik, Dk;
      const {
        heldConn: fk
      } = kk, Sk = kk.resume.resumingConn;
      kk.heldConn = 0, kk.pendingHold = null, lr === kk && (lr = null), "left" === ek ? kk.resume.leave() : kk.resume.dispose(), 0 === yr || (null === (ik = yb) || void 0 === ik ? void 0 : ik.conn) !== yr || "left" === ek && (null === (Dk = Pr) || void 0 === Dk ? void 0 : Dk.conn) === yr || bm(yr), "gaveUp" === ek && 0 !== Sk && bm(Sk), 0 !== fk && "refused" !== ek && (console.info(`${IS} the game held through its drop ${"left"===ek?"was left":"is given up"}`), null === rb || rb.isStopped || rm(rb, "close", fk), JP(fk, !1))
    }

    function Dm(kk, ek) {
      const ik = ek.indexOf(":");
      return {
        roomId: ik < 0 ? kk.roomId : ek.slice(0, ik),
        roomToken: ek.slice(ik + 1)
      }
    }

    function fm(kk) {
      (0, bi.logClientMeasurement)("join_preload", kk, {
        client: "wasm"
      })
    }

    function Sm(kk) {
      var ek;
      pr = kk, kk.conn === yr && (yr = 0);
      const ik = lr;
      null !== ik && (null === (ek = wr) || void 0 === ek ? void 0 : ek.conn) === kk.conn && ik.resume.onInitialInfo(kk)
    }

    function bm(kk) {
      var ek;
      const ik = yb;
      (null === ik || void 0 === ik ? void 0 : ik.conn) === kk && (ik.left = !0, null === (ek = (0, Ak.g)()) || void 0 === ek || ek.socketLeft(), (0, xk.n)({
        websocketUrl: null
      }), dP(kk) ? setTimeout((() => {
        yb === ik && OP()
      }), Qk.e) : OP())
    }

    function rm(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fk = !1;
      return kM(kk, (() => {
        const {
          net: Sk
        } = kk.rings;
        fk = "open" === ek ? Sk.writeOpen(ik, Dk) : Sk.writeClose(ik, Dk), fk || kk.crash(Si.o, `a socket ${ek} did not fit the net-in ring`)
      })), fk
    }

    function Pm(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (mm()) {
        const Dk = "browser" === kk && (0, lf.Z)() ? "blockedAfterLoss" : "unsupported";
        return (0, si.reportUnsupportedFallback)(kk, Dk, ek, ik), void Mm(`the wasm client can't run here (${ek}; ${Dk})`, Dk)
      }(0, si.showUnsupported)(kk, "unsupported", ek, ik)
    }

    function mm() {
      return DP && "wasm" !== (0, He.g)(window.location.search)
    }

    function Mm(kk, ek) {
      console.warn(`${IS} ${kk}: reloading on the JS client`), null !== ek && (0, He.r)(ek), (0, He.q)(null === ek ? "reloadOntoJs" : "decline");
      const ik = () => {
        (0, Tk.f)(He.w)
      };
      (0, si.flushCrashReports)(Tk.c).then(ik, ik)
    }

    function Km(kk, ek, ik, Dk) {
      return vr(kk, ek, ik, Dk)
    }

    function xm() {
      null === ar || null === rb || rb.isStopped || PP || null !== vb || null === JS || (vb = ar(JS, Hm, wm().follow))
    }

    function nm() {
      var kk, ek, ik;
      return null !== (kk = null === (ek = mb) || void 0 === ek || null === (ik = ek.textures) || void 0 === ik ? void 0 : ik.files()) && void 0 !== kk ? kk : null
    }

    function Um(kk) {
      wm().follow((ek => {
        null !== ek && Promise.all([Promise.all([ik.e(203), ik.e(45)]).then((() => ik(50582))), (0, lf.U)()]).then((kk => {
          let [{
            followPagePackFiles: ik
          }, Dk] = kk;
          const fk = null === Dk || (0, fi.m)(Dk) ? "webgl" : Dk.backend;
          ik(ek, rf.g, fk, (kk => {
            rf.g.setPageFiles(kk)
          }), Hm)
        }), (ek => {
          console.warn(`${IS} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, ek), kk()
        }))
      }))
    }

    function Hm(kk, ek) {
      console.warn(`${IS} ${kk}`, ek)
    }

    function wm() {
      return Pb ??= new Qf({
        load: kk => Promise.all([ik.e(203), ik.e(54)]).then((() => ik(50585))).then((ek => {
          let {
            startPageTexturePackFeed: ik
          } = ek;
          return ik(Hm, kk)
        })),
        store: vi.e,
        CU: kk => {
          Hb.then((() => {
            (0, si.reportTexturePackFeedLoadFailure)(kk, xb)
          }))
        }
      }), Pb
    }
    const lm = kk => wm().follow(kk);

    function pm() {
      return wm().loaded()
    }
    const ym = function(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          fk = 0;
        return async function(Sk, bk) {
          let rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Pk = ++fk,
            mk = Dk() + ek,
            Mk = await
          function(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Dk => {
              const fk = setTimeout((() => {
                Dk(null), kk.then((kk => {
                  null !== kk && (kk.joinedWithout(), ik(kk))
                }))
              }), ek);
              kk.then((kk => {
                clearTimeout(fk), Dk(kk)
              }))
            }))
          }(kk(Sk), ek, (kk => {
            Pk === fk && rk() && bk(kk, Dk() + ek).catch((kk => {
              ik("the texture pack step after the join failed", kk)
            }))
          }));
          return null === Mk ? null : bk(Mk, mk)
        }
      }((kk => (0, fe.j)(kk) ? wm().request() : wm().forJoin()), zf.b, Hm),
      Ym = function(kk, ek) {
        let ik = !1;
        return {
          setGamePackConfirm: kk => {
            ik = null !== kk, ek(kk)
          },
          packStep: (ek, Dk, fk) => kk(ek, Dk, (() => ik && fk()))
        }
      }(ym, (kk => {
        wm().setGamePackConfirm(kk)
      }));

    function Lm(kk) {
      Ym.setGamePackConfirm(kk)
    }

    function Cm() {
      if (PP || null !== cr || null === Wr || null === Br) return;
      const {
        backend: kk,
        canvas: ek,
        fallbackReason: ik,
        adapterVendor: Dk
      } = Br, fk = Wr;
      Wr = null;
      try {
        cr = fk({
          backend: kk,
          canvas: ek,
          fallbackReason: ik,
          adapterVendor: Dk,
          joinedGame: () => PP ? null : Pr,
          inGame: jm,
          shaderPackReach: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Wb) || void 0 === ek ? void 0 : ek.reachInJoinedGame()) && void 0 !== kk ? kk : null
          },
          msaa: () => Xr > 1,
          writeCmd: (kk, ek, ik) => null !== JS && JS(kk, ek, ik),
          takeFailedMeshJobs: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Ab) || void 0 === ek ? void 0 : ek.takeFailedMeshJobs()) && void 0 !== kk ? kk : 0
          },
          readLoadCounts: kk => {
            var ek, ik;
            return null !== (ek = null === (ik = rb) || void 0 === ik ? void 0 : ik.readLoadCounts(kk)) && void 0 !== ek && ek
          },
          mainStalled: (kk, ek, ik) => {
            (0, si.reportMainStall)(kk, ek, ik, xb)
          }
        })
      } catch (Sk) {
        console.error(`${IS} the frame telemetry didn't start`, Sk)
      }
    }

    function Am(kk, ek) {
      try {
        var ik, Dk, fk;
        const Sk = Ir && null !== (ik = null === (Dk = rb) || void 0 === Dk || null === (fk = Dk.lastHeader) || void 0 === fk ? void 0 : fk.renderPending) && void 0 !== ik ? ik : 0;
        (0, SD.e)(ek, kk, jm() && !(null !== Yf), Sk)
      } catch (Sk) {
        (0, SD.r)(), console.error(`${IS} the quality steps stopped`, Sk)
      }
    }

    function jm() {
      return null !== Pr && kP === Pr && !PP
    }

    function sm(kk) {
      const ek = cr;
      cr = null;
      try {
        null === ek || void 0 === ek || ek.stop()
      } catch {}
      console.error(`${IS} the frame telemetry threw: it stops`, kk)
    }

    function dm(kk) {
      var ek, ik, Dk, fk;
      if ((0, pf.e)().fire(kk), "message" === kk.type) {
        if (Jb++, kk.hM === ce.Xc.ERROR && null !== Mr) {
          var Sk;
          const {
            text: ek,
            dropsCache: ik
          } = (0, zk.s)((new TextDecoder).decode(kk.payload));
          Vr ||= ik, (null === (Sk = Ar) || void 0 === Sk ? void 0 : Sk.conn) === kk.conn && (Fr = ek)
        } else if (kk.hM === Te.tc.ResumeComplete) {
          var bk;
          null === (bk = lr) || void 0 === bk || bk.resume.onResumeComplete(kk.conn)
        }
        return
      }
      kk.phase === ce.K.Left ? kr = kk.conn : kk.phase === ce.K.Activated && (null === (ek = Ar) || void 0 === ek ? void 0 : ek.conn) === kk.conn ? Ar.activated = !0 : kk.phase === ce.K.Resumed ? function(kk) {
        var ek, ik;
        yr = kk;
        const Dk = lr;
        if (null === Dk || 0 === Dk.heldConn || (null === (ek = yb) || void 0 === ek ? void 0 : ek.conn) !== kk || !yb.resume || null === wr) return;
        console.info(`${IS} the game resumed on conn ${kk}, waiting for its InitialInfo`);
        const fk = Dk.heldConn;
        Dk.heldConn = 0, yb.resume = !1, wr.conn = kk, (null === (ik = Ur) || void 0 === ik ? void 0 : ik.conn) === fk && (Ur = {
          conn: kk,
          info: Ur.info
        }), pe.c.apply({
          shopInfo: null,
          _shopVersion: Se.c
        })
      }(kk.conn) : kk.phase === ce.K.Held ? function(kk) {
        var ek;
        const ik = lr,
          Dk = null !== (ek = null === ik || void 0 === ik ? void 0 : ik.pendingHold) && void 0 !== ek ? ek : null;
        if (null !== ik && null !== Dk && Dk.conn === kk) return ik.pendingHold = null, ik.heldConn = kk, yr = 0, console.warn(`${IS} the core holds the game, reconnecting`), void ik.resume.onDropped(Dk.token);
        if (kk === yr) {
          yr = 0;
          const ek = rb;
          null === ek || ek.isStopped || (console.info(`${IS} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), rm(ek, "close", kk))
        }
      }(kk.conn) : kk.phase === ce.K.Closed && (null === (ik = lr) || void 0 === ik || null === (Dk = ik.pendingHold) || void 0 === Dk ? void 0 : Dk.conn) === kk.conn && (lr.heldConn === kk.conn ? function(kk) {
        const ek = kk.heldConn,
          ik = kk.dropCode;
        im(kk, "refused"), console.info(`${IS} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          JP(ek, !1), hP(ek, ik, "", !0)
        }))
      }(lr) : lr.pendingHold = null);
      const rk = Object.keys(ce.K).find((ek => ce.K[ek] === kk.phase)),
        Pk = 0 === kk.code ? "" : ` (code ${kk.code})`;
      console.info(`${IS} conn ${kk.conn}: ${null!==rk&&void 0!==rk?rk:kk.phase}${Pk}, ${Jb} raw messages so far`), (null === (fk = Pr) || void 0 === fk ? void 0 : fk.conn) !== kk.conn || kk.phase !== ce.K.Left && kk.phase !== ce.K.Closed || sP(null), nr !== kk.conn || kk.phase !== ce.K.Left && kk.phase !== ce.K.Closed || (nr = null, null === Pr && null === Mr && Pf.c.setGame(void 0));
      for (const Mk of [...qr]) try {
        Mk(kk.conn, kk.phase, kk.code)
      } catch (mk) {
        (0, oe.m)(mk, `${IS} a connection listener threw`)
      }
    }

    function Vm() {
      (0, lf.t)(), queueMicrotask((() => {
        try {
          Tm()
        } catch (kk) {
          console.warn(`${IS} stopping before the reload threw`, kk)
        }(0, si.flushCrashReports)(Tk.c).then(Tk.i, Tk.i)
      }))
    }

    function Fm() {
      const kk = rb;
      null === kk || kk.isStopped || null === yb || Rb || !kk.hasPendingCommands() || qm(kk, !1, "budget")
    }

    function um(kk) {
      var ek;
      const ik = Pr;
      kk.persisted || null === ik || (null === (ek = yb) || void 0 === ek ? void 0 : ek.conn) !== ik.conn || yb.left || ik.leave()
    }

    function qm(kk, ek, Dk) {
      let fk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Sk = Rb;
      Rb = !0;
      try {
        const Sk = kk.rings.net.cursor >= BS;
        Sk && "all" !== Dk && !document.hidden && Zm("backlog", `a shown tab's net-in is ${kk.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(kk, ek, Dk, fk) {
          var Sk, bk, rk, Pk;
          if (PP) return !1;
          if (kM(kk, zm), PP || kk.isStopped) return !1;
          Xm() && Bb("modelsIn");
          km(), ob = performance.now(), kr = null, er = !1, (0, Ck.K)(), null === (Sk = ub) || void 0 === Sk || Sk.beforeFrame(), yD(ob, kk), (0, Ck.D)(ob, Qm), Nb = !0;
          const mk = ek && tm();
          let Mk;
          try {
            Mk = kk.frame(ob, mk, Dk)
          } finally {
            Nb = !1
          }
          if (!Mk) return !1;
          tr.observe(null !== (bk = null === (rk = kk.lastHeader) || void 0 === rk ? void 0 : rk.chunksCancelled) && void 0 !== bk ? bk : 0);
          const Kk = kk.lastFrameKind,
            xk = (0, qe.d)(Kk);
          (function(kk) {
            null !== Nf && Nf.afterFrame(performance.now(), kk)
          })(xk), null === (Pk = Tr) || void 0 === Pk || Pk.frame(kk, ob, Kk), ek && (eP = xk);
          xk && (0, Ve.c)(ob);
          if (null !== cr) try {
            cr.frameRan(kk, ob, performance.now(), Kk)
          } catch (Hk) {
            sm(Hk)
          }
          "drawn" === Kk && Wm() && function() {
            for (const kk of [...Hf]) kk()
          }();
          kk.forEachNetOut(Bm);
          const nk = yb;
          null !== kr && (null === nk || void 0 === nk ? void 0 : nk.conn) === kr && cm(nk, Qk.h);
          am(kk),
            function(kk) {
              const ek = 0 !== (kk.headerWord(Te.L.LoadSteps) & Te.X.JoinPreload);
              ek !== xr && (xr = ek, (0, si.setCrashAdPreload)(ek), (0, Ii.F)())
            }(kk), ek && function(kk) {
              var ek, Dk, fk;
              if (null === Pr || !tm()) return;
              const Sk = kk.headerWord(Te.L.LoadSteps);
              null === Jr || kP === Pr && !Jr.frame(ob, 0 !== (Sk & Te._.TerrainDrawn)) || (Jr = null);
              if (0 === (Sk & Te.X.PlayerBound)) return;
              const bk = kk.lastHeader,
                rk = !Ir || 0 === (null === bk || void 0 === bk ? void 0 : bk.renderPending);
              !gr && rk && (gr = !0, performance.mark(tS));
              if (kP === Pr) return;
              const Pk = null !== (ek = null === bk || void 0 === bk ? void 0 : bk.firstView) && void 0 !== ek ? ek : ce.jb.NotYet;
              if (Ir && Pk === ce.jb.NotYet) return;
              if (Or && (!0 !== (null === (Dk = (0, Ak.g)()) || void 0 === Dk ? void 0 : Dk.isSessionLive) || !rk)) return;
              kP = Pr;
              const mk = Pr;
              if (setTimeout((() => {
                  Pr === mk && (0, Uk.i)()
                }), 0), null === (fk = Wb) || void 0 === fk || fk.playable(), function() {
                  clearTimeout(pb), pb = setTimeout((() => {
                    jm() && DM((kk => {
                      let {
                        prefetchWorldgenWorker: ek
                      } = kk;
                      ek()
                    }))
                  }), RS)
                }(), Or) return;
              Or = !0, performance.mark(WS), (0, Bf.s)("render") && Promise.all([ik.e(77), ik.e(48)]).then((() => ik(4622))).then((kk => {
                let {
                  renderDebugPlayable: ek
                } = kk;
                ek()
              }), (kk => {
                console.warn("The render debug topic didn't load", kk)
              }));
              const Mk = Math.round(performance.now()),
                Kk = kk.readViewQueuedPrograms();
              null !== Kk && (0, Uk.m)("wasm_view_links", Mk, (0, re.qb)(Kk));
              if (Ir && Pk !== ce.jb.Drawn) {
                const ek = Pk === ce.jb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: ik
                  } = Em(kk);
                if (console.warn(`${IS} playable at ${Mk} ms on the first view's ${ek} backstop, ${ik}: it wasn't drawn whole in time`), (0, Uk.m)("wasm_view_backstop", Mk, `${ek}:${ik}`), "long" === ek) {
                  var xk, nk;
                  const ek = null !== (xk = null === (nk = wr) || void 0 === nk ? void 0 : nk.game) && void 0 !== xk ? xk : "";
                  Jr = new Ei.b((() => {
                    const {
                      cause: ik,
                      census: Dk
                    } = Em(kk);
                    (0, si.reportFirstViewNoTerrain)(ek, ik, Dk, xb), (0, Ue.u)("noTerrain")
                  }))
                }
              } else console.info(`${IS} playable at ${Mk} ms${Ir?"":" (no renderer)"}`);
              setTimeout(hr, 0), (0, Ye.h)().catch((kk => {
                console.error(`${IS} item sprites didn't load, so item particles show the missing texture`, kk)
              })), RD.c.warm()
            }(kk);
          (0, Si.E)(kk, {
            worldgen: Lb,
            mesh: Ab
          }),
          function(kk) {
            kk.forEachEvent(LD);
            for (const ek of YD) try {
              (0, UD.d)(ek)
            } catch (Hk) {
              if ((0, oe.h)(Hk)) {
                kk.crashOn(Si.j, Hk);
                break
              }
              console.error(`${wD} an input action listener threw`, Hk)
            }
            YD.length = 0
          }(kk), fk && (0, ue.d)();
          return !kk.isStopped
        }(kk, ek, "all" === Dk || Sk, fk)
      } finally {
        Rb = Sk, Sk || (Zb = performance.now())
      }
    }

    function Im(kk) {
      console.error(`${IS} a frame-start listener threw`, kk)
    }

    function zm() {
      var kk, ek, ik, Dk;
      null === (kk = Ib) || void 0 === kk || kk.drain(JS, kb), null === (ek = Eb) || void 0 === ek || ek.drain(JS), null === (ik = hb) || void 0 === ik || ik.drain(performance.now()), Er(JS), null === (Dk = vb) || void 0 === Dk || Dk.drain()
    }

    function Qm(kk) {
      console.error(`${IS} a before-frame listener threw`, kk)
    }

    function Em(kk) {
      const ek = (0, Ak.g)(),
        ik = (0, Ak.q)(),
        Dk = null === ek || null === ik ? null : ik.readDrawCensus(ek.api);
      return {
        cause: (0, Ei.g)(kk.headerWord(Te.L.LoadSteps), Dk),
        census: Dk
      }
    }
    const hm = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function am(kk) {
      var ek;
      if (Or) return;
      if (null === Nr && tm() && (Nr = performance.now()), null === Mr && null === Pr) return;
      null === Nr || Rr || (Rr = !0, (0, Uk.m)("wasm_startup_loaded", Nr));
      let ik = 0;
      null !== Pr ? ik = -1 : !0 === (null === (ek = Ar) || void 0 === ek ? void 0 : ek.activated) && (ik = ~Te._.TerrainDrawn);
      const Dk = kk.headerWord(Te.L.LoadSteps) & ik & ~Gr;
      if (0 === Dk) return;
      Gr |= Dk;
      const fk = performance.now();
      for (const [Sk, bk] of Object.entries(hm)) 0 !== (Dk & Te._[Sk]) && (0, Uk.m)(bk, fk)
    }

    function Wm() {
      return Ir && tm()
    }

    function tm() {
      return ab && Xm()
    }

    function Xm() {
      return null === Ib || Ib.startupDone
    }

    function Bm(kk, ek) {
      const ik = yb;
      (null === ik || void 0 === ik ? void 0 : ik.conn) === kk ? cm(ik, ek) : fr++
    }

    function cm(kk, ek) {
      const {
        ws: ik
      } = kk;
      return ik.readyState === WebSocket.OPEN ? (ik.send(ek), !0) : ik.readyState === WebSocket.CONNECTING && kk.pendingBytes + ek.byteLength <= OS ? (kk.pending.push(ek.slice()), kk.pendingBytes += ek.byteLength, !0) : (fr++, !1)
    }

    function Tm() {
      var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk;
      PP = !0, iP.stop(), (0, of.e)(), Nf = null, em(), (0, Ck.J)().unlockPointer(), (0, Ck.F)(null), null === (kk = qb) || void 0 === kk || kk(), qb = null, null === (ek = (0, Ak.q)()) || void 0 === ek || ek.followCursorAim(null), (0, ue.z)(), (0, Ak.f)(), Kb.stop(), null === (ik = or) || void 0 === ik || ik(), or = null, null === (Dk = Zr) || void 0 === Dk || Dk(), Zr = null, null === (fk = cr) || void 0 === fk || fk.stop(), cr = null, (0, Wi.n)(null), null === (Sk = Yb) || void 0 === Sk || Sk(), Yb = null, null === (bk = Lb) || void 0 === bk || bk.stop(), Lb = null, null === (rk = Ab) || void 0 === rk || rk.stop(), Ab = null, null !== (Pk = mb) && void 0 !== Pk && null !== (mk = Pk.textures) && void 0 !== mk && mk.assets && (0, Sf.i)(null), null === (Mk = mb) || void 0 === Mk || Mk.stop(), mb = null, Mb = null;
      const lk = jb;
      jb = null, lk && (lk.stop(), Jm(lk)), null === (Kk = Eb) || void 0 === Kk || Kk.dispose(), Eb = null, null === (xk = hb) || void 0 === xk || xk.dispose(), hb = null, Ib = null, null === (nk = Qb) || void 0 === nk || nk(), Qb = null, null === (Uk = Fb) || void 0 === Uk || Uk(), Fb = null, null !== Gb && (clearTimeout(Gb), Gb = null), null === (Hk = ub) || void 0 === Hk || Hk.stop(), ub = null, CP(), Pf.c.release(), OP();
      const pk = vb;
      vb = null;
      try {
        null === pk || void 0 === pk || pk.dispose()
      } catch (yk) {
        console.warn(`${IS} the sky's images didn't release`, yk)
      }(0, JD.f)(null), null === (wk = Sb) || void 0 === wk || wk.pagePreviews().endSession(null === (0, Pe.t)())
    }

    function om(kk, ek) {
      var ik, Dk;
      const fk = null !== (ik = null === (Dk = jb) || void 0 === Dk ? void 0 : Dk.details()) && void 0 !== ik ? ik : {},
        Sk = kk.site === QS || kk.site === vS || kk.site === si.RENDER_RELOAD_SITE || kk.site === ES ? kk.error instanceof WebAssembly.RuntimeError || kk.error instanceof ki.d : !(0, fi.p)(kk.error) && (0, Si.B)(kk);
      Sk && kk.error instanceof Error && (0, Pe.V)(kk.error);
      const bk = Sk || kk.site === Si.s ? (0, si.readTrap)(kk.error) : null,
        rk = null !== bk && (0, Oe.f)(bk.kind, bk.refusedBytes) ? bk.refusedBytes : 0,
        Pk = null === sb ? (0, gD.w)(function() {
          try {
            return (0, Pe.A)().buffer.byteLength
          } catch {
            return 0
          }
        }(), rk, null) : sb.ceilingMayRefuse(rk),
        mk = rk > 0 && !Pk && mm();
      var Mk;
      if (mk && ((0, He.r)("oom"), (0, He.q)("decline"), rP = !0), Tm(), (0, lf.b)()) return console.warn(`${IS} the session stopped at ${kk.site} as the page reloads`, kk.error), void((0, fi.p)(kk.error) || (null === (Mk = kk.header) || void 0 === Mk ? void 0 : Mk.lastError) === ce.P.CoreBusy || (0, si.reportStoppedCore)(kk, ek, bk, {
        memoryDetails: fk,
        declined: mk
      }));
      (0, si.showCrash)(kk, ek, bk, {
        memoryDetails: fk,
        declined: mk
      })
    }

    function Zm(kk, ek) {
      const ik = performance.now();
      return !(ik - ir[kk] < gS) && (ir[kk] = ik, console.warn(`${IS} ${ek}`), !0)
    }

    function Om(kk) {
      const {
        input: ek,
        net: ik,
        worker: Dk
      } = kk.rings, fk = kk.optionsDropped, Sk = ek.dropped + fk + ik.dropped + Dk.dropped + fr;
      Sk !== Dr && Zm("dropped", `${Sk} records dropped so far (input ${ek.dropped}, options ${fk}, net ${ik.dropped}, worker ${Dk.dropped}, net-out ${fr})`) && (Dr = Sk)
    }

    function gm() {
      var kk, ek;
      const ik = (0, qi.d)();
      if (null === ik) return null;
      const Dk = (0, Qi.l)(ik);
      return {
        ...Dk,
        horizontal: Math.min(Dk.horizontal, null !== (kk = null === (ek = jb) || void 0 === ek ? void 0 : ek.shedDistanceInUse()) && void 0 !== kk ? kk : 1 / 0)
      }
    }

    function Gm(kk) {
      var ek, ik;
      return {
        samples: Ir ? Xr : null,
        sunShadows: kk,
        renderDistance: null !== (ek = null === (ik = gm()) || void 0 === ik ? void 0 : ik.horizontal) && void 0 !== ek ? ek : null
      }
    }

    function Nm(kk) {
      Kr = kk, (0, Ii.F)()
    }

    function Rm() {
      var kk, ek, ik;
      const Dk = gm();
      return {
        ...null === (kk = jb) || void 0 === kk ? void 0 : kk.pageKillSnapshot(),
        renderDistance: null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.horizontal) && void 0 !== ek ? ek : null,
        renderDistanceVertical: null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.vertical) && void 0 !== ik ? ik : null,
        chunkCap: db,
        budgetBasis: Vb,
        renderBackend: (0, lf.H)(),
        adPreload: xr,
        ...(0, zi.d)(Kr)
      }
    }

    function Jm(kk) {
      console.info(`${IS} wasm memory at the session's end`, kk.details())
    }

    function kM(kk, ek) {
      if (!kk.isStopped) try {
        ek()
      } catch (ik) {
        kk.crash(Si.t, ik)
      }
    }

    function eM() {
      return Cb ??= ik.e(71).then((() => ik(50593))).catch((kk => {
        throw Cb = null, kk
      })), Cb
    }
    async function iM() {
      const {
        createWorldgenWorker: kk,
        worldgenWorkerReady: ek
      } = await eM();
      return await ek(), kk
    }

    function DM(kk) {
      var ek;
      null === (ek = Cb) || void 0 === ek || ek.then(kk, (() => {}))
    }

    function fM() {
      return performance.now() - Math.max(Zb, Ob) >= GS
    }

    function SM(kk) {
      const ek = document.hidden || gb ? "all" : "budget";
      gb = !0;
      const ik = qm(kk, !1, ek);
      var Dk;
      ik && (Om(kk), null === (Dk = jb) || void 0 === Dk || Dk.afterFrame());
      return ik
    }

    function bM(kk) {
      kk.isStopped || 0 === kk.rings.net.cursor || fM() && !SM(kk) || kk.rings.net.cursor > 0 && performance.now() - Ob >= GS / 2 && function(kk) {
        Gb ??= setTimeout((() => {
          Gb = null, bM(kk)
        }), GS)
      }(kk)
    }

    function rM(kk, ek) {
      return async function(kk, ek, ik) {
        let {
          stop: Dk,
          stillWanted: fk,
          beforeReload: Sk
        } = ik;
        const bk = await (0, ID.j)(kk, {
          stillWanted: fk,
          beforeReload: async () => {
            Dk(), await Promise.all([(0, si.flushCrashReports)(Tk.c), null === Sk || void 0 === Sk ? void 0 : Sk()])
          },
          reload: Tk.i
        });
        return bk || ek(), bk
      }(kk, ek, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: Tm
      })
    }
    let PM = !1;

    function mM() {
      return PM = !0, async function(kk, ek, Dk) {
        const {
          gamePackSource: fk
        } = await ik.e(269).then((() => ik(40641)));
        await Ym.packStep(kk, ((ik, Dk) => ik.packForGame(kk, fk(ek), Dk)), Dk)
      }(...arguments)
    }

    function MM(kk) {
      ! function(kk, ek) {
        kk((kk => {
          null === kk || void 0 === kk || kk.subscribe((kk => {
            let {
              pack: ik,
              gameSource: Dk
            } = kk;
            ek(null === Dk || null === ik ? null : {
              pack: ik,
              source: "" === Dk ? null : Dk
            })
          }))
        }))
      }(lm, kk)
    }
    let KM = !1,
      xM = null,
      nM = !1,
      UM = !1;

    function HM() {
      var kk;
      KM || (KM = !0, UP("play", Bk), (0, xk.l)(new VM), rk.gameBridge.attach(Ik), LM().catch((() => {})), (0, Ak.u)((kk => {
        ie(kk.setTextHost)
      })), kk = pM, dr.add(kk), function(kk) {
        for (const ek of tb) kk(ek);
        Xb.add(kk)
      }((kk => {
        lM(wM[kk])
      })))
    }
    const wM = {
      booted: Sk.n.INITIALISE_NOA,
      texturesIn: Sk.n.REGISTRATION,
      modelsIn: Sk.n.SETUP_LIFEFORMS
    };

    function lM(kk) {
      Pk.j.tm("matchmakeAndPlayStepCompleted", {
        step: kk,
        totalSubSteps: 1
      })
    }

    function pM(kk) {
      if (!nM) return;
      const {
        gameNameWithVariation: ek,
        lobbyName: ik
      } = (0, xk.c)();
      if (kk.code === Dk.c.serverUpdating.code) return (new VM).leaveLive(), void YM(ek, ik);
      Pk.j.tm("unwantedLeftGame", {
        reason: yM(kk),
        requiresRefresh: kk.requiresRefresh,
        canReconnect: null !== kk.reconnect,
        automaticallyReconnect: kk.reconnecting,
        canPlayAgain: kk.canPlayAgain,
        gameNameWithVariation: ek,
        lobbyName: ik
      }), (new VM).leaveLive()
    }

    function yM(kk) {
      return null !== kk.reasonKey ? {
        translationKey: kk.reasonKey
      } : "gameOrPluginKick" === kk.name ? kk.reason : `You have disconnected from the server.\n${kk.reason}`
    }

    function YM(kk, ek) {
      var Dk;
      Dk = (0, mk.E)(kk, ek), Promise.resolve().then((() => ik(1479))).then((kk => {
        let {
          navigatePreserveSearch: ek
        } = kk;
        ek(Dk)
      })).catch((kk => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", kk), (0, Tk.d)(Dk)
      }))
    }

    function LM() {
      return xM ??= Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(89), ik.e(86), ik.e(265), ik.e(191), ik.e(221), ik.e(243), ik.e(268), ik.e(46)]).then((() => ik(40591))).then((kk => {
        try {
          kk.attachPlayGameSources()
        } catch (ek) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", ek),
            function(kk) {
              Hb.then((ek => {
                null === ek || ek.isStopped || PP ? console.warn(`${IS} the play sources threw as they attached, after the client stopped`, kk) : om({
                  site: ES,
                  error: kk,
                  header: null
                }, xb)
              }))
            }(ek), ek
        }
      }), (kk => {
        throw xM = null, new Ak.e(kk)
      })), xM
    }
    async function CM(kk, ek) {
      HM(), PM = !0, nM = !0;
      let ik = {
          place: kk.place,
          matchedAt: kk.matchedAt
        },
        bk = kk.place.gameNameWithVariation;
      const rk = (0, Kk.c)();
      let Pk = null;
      const mk = await pP({
        matchmake: async () => {
          let ek = ik;
          if (ik = null, null === ek) {
            const ik = await kk.rematch();
            if (ik.isError()) throw Pk = ik.asError().forward(), new Error(ik.asError().message);
            ek = {
              place: ik.getValue(),
              matchedAt: performance.now()
            }
          }
          bk = ek.place.gameNameWithVariation;
          return {
            target: await (0, Ek.i)(kk.userContext, ek.place, pm(), rk),
            matchedAt: ek.matchedAt,
            freshMs: Ek.e
          }
        },
        pageReady: LM,
        onFailure: (kk, ek) => {
          null === Pk && function(kk, ek) {
            (0, si.reportPageJoinFailure)(kk, xb, ek)
          }(kk, {
            sinceJoinStartMs: ek,
            game: bk
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => kk.userContext.invalidateTrafficCode(),
        signal: ek
      });
      switch (mk.kind) {
        case "joined":
          if (rk) {
            const {
              game: kk
            } = mk;
            (0, Kk.l)((() => {
              kk.endJoinAd() && (0, Uk.l)()
            }))
          }
          return UM || (UM = !0, (0, wk.e)()), nM ? (lM(Sk.n.CONNECT_TO_GAME_SERVER), lM(Sk.n.SHADER_PACK), function() {
            var kk, ek;
            return null !== (kk = null === (ek = Wb) || void 0 === ek ? void 0 : ek.runsInJoinedGame()) && void 0 !== kk && kk
          }() && (0, Hk.g)(kk.userContext, bk).catch((kk => {
            console.error("Failed to report the shader pack session", kk)
          })), function() {
            const kk = function() {
              var kk, ek;
              return null !== (kk = null === (ek = Wb) || void 0 === ek ? void 0 : ek.couldntRunInJoinedGame()) && void 0 !== kk ? kk : null
            }();
            null !== kk && (0, Hk.e)(kk)
          }(), fk.d.value(void 0)) : dM("The server ended the game as it joined");
        case "failed":
          if (!mk.reloading) {
            if (null !== Pk) return Pk;
            if ((mk.error instanceof Qk.k || mk.error instanceof Qk.d) && mk.error.code === Dk.c.serverUpdating.code) {
              if (ek.aborted) return dM("Left the game while it loaded");
              const {
                gameNameWithVariation: kk,
                lobbyName: ik
              } = (0, xk.c)();
              return YM(kk, ik), dM("The server is updating")
            }
            return mk.error instanceof ck.d ? fk.d.errorWithCode(mk.error.messageKey, Sk.n.SHADER_PACK, {
              severity: "medium"
            }) : fk.d.errorWithCode(function(kk) {
              if (kk instanceof Qk.v || kk instanceof Yk.e) return kk.message;
              if (AM(kk)) return (0, zk.p)(kk.code, kk.serverText);
              return zk.k
            }(mk.error), Sk.n.CONNECT_TO_GAME_SERVER, {
              error: jM(mk.error) ? mk.error : void 0,
              severity: sM(mk.error),
              gameServerUnreachable: (0, vk.d)(mk.error),
              joinFailure: (0, vk.g)(mk.error),
              rematch: (0, pk.c)(mk.error),
              gameRefused: (0, yk.e)(mk.error)
            })
          }
          return dM("Reloading into the new build");
        case "stopped":
          return dM("The game client stopped, and shows why");
        case "Ji":
          return dM("Left the game while it loaded")
      }
    }

    function AM(kk) {
      return kk instanceof Qk.k || kk instanceof Qk.d && "attach" !== kk.stage
    }

    function jM(kk) {
      return !(kk instanceof Qk.v) && !AM(kk) && void 0 === (0, vk.d)(kk)
    }

    function sM(kk) {
      return AM(kk) ? kk instanceof Qk.d && (0, zk.n)(kk.code).requiresRefresh ? "medium" : "low" : jM(kk) || kk instanceof Qk.v ? "medium" : "low"
    }

    function dM(kk) {
      return fk.d.errorWithCode(kk, Sk.n.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Ji: !0
      })
    }
    class VM {
      leave(kk) {
        if ((0, Lk.e)()) {
          var ek, ik;
          if ((0, bk.c)()) return;
          (0, nk.b)(!0 === (null === (ek = (0, Lk.n)()) || void 0 === ek || null === (ik = ek.currentViewer) || void 0 === ik ? void 0 : ik.unsavedChanges), kk)
        } else this.leaveLive()
      }
      leaveLive() {
        var kk;
        PM && (null === (kk = pm()) || void 0 === kk || kk.endGamePack());
        if (!nM) return;
        nM = !1, (0, lk.d)();
        try {
          var ek;
          null === (ek = (0, Ak.q)()) || void 0 === ek || ek.clearWasmCameraScreen()
        } catch (Dk) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Dk)
        }
        const {
          gameNameWithVariation: ik
        } = (0, xk.c)();
        try {
          FP()
        } finally {
          (0, xk.n)({
            websocketUrl: null
          }), Pk.j.tm("leaveGame", {
            gameNameWithVariation: ik
          }), (0, Mk.L)()
        }
      }
      isReplay() {
        return (0, Lk.e)()
      }
    }
  },
  40522: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      d: () => Dk,
      e: () => rk,
      h: () => bk
    });
    const Dk = 12e4,
      fk = 3e4,
      Sk = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: kk => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", kk), () => {
          document.removeEventListener("visibilitychange", kk)
        })
      };

    function bk(kk) {
      return `it sent no start within ${Math.round(kk)} ms`
    }
    class rk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sk;
        this.timeoutMs = kk, this.onTimeout = ek, this.now = ik, this.visibility = Dk, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Dk.listen((() => {
          this.onVisibility()
        })), Dk.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const kk = this.step;
        return null === kk ? 0 : Math.min(this.now() - kk.at, kk.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const kk = this.timeoutMs - this.counted;
        if (kk <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const ek = Math.min(kk, 5e3);
        this.step = {
          at: this.now(),
          ms: ek
        }, this.arm(ek, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(kk, ek) {
        this.timer = setTimeout((() => {
          this.timer = null, ek()
        }), kk)
      }
    }
  },
  39206: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk
    });
    var Dk = ik(314),
      fk = ik(996);
    const Sk = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      bk = new Set(["creativeFlat", "skyGrid"]);

    function rk(kk) {
      const ek = (0, Dk.Db)(kk);
      return "classic" !== ek ? Sk.has(ek) : !(0, fk.j)(kk) && !bk.has((0, Dk.yb)(kk))
    }
  },
  40423: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    const Dk = {
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
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  38311: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(2821);
    const fk = ["none", "idle", "now"];

    function Sk() {
      const kk = () => (0, Dk.H)();
      return {
        memoryBytes: () => (0, Dk.A)().buffer.byteLength,
        reserveUpFront: ek => kk().LK(ek),
        reserveAhead: ek => kk().YK(ek),
        setCeiling: ek => {
          kk().CK(ek)
        },
        lowWater: () => fk[kk().yK()] ?? "none",
        stats: () => function(kk) {
          const ek = new Uint32Array((0, Dk.A)().buffer, kk, 17),
            ik = kk => ek[kk] ?? 0,
            fk = kk => ({
              upFront: ik(kk),
              ahead: ik(kk + 1),
              onDemandInFrame: ik(kk + 2),
              onDemand: ik(kk + 3)
            });
          return {
            memoryBytes: ik(0),
            initialBytes: ik(1),
            liveBytes: ik(2),
            peakLiveBytes: ik(3),
            headroomBytes: ik(4),
            unusedBytes: ik(5),
            ceilingBytes: ik(6),
            reservesRefused: ik(7),
            grows: fk(8),
            grownBytes: fk(12),
            allocationsRefused: ik(16)
          }
        }(kk().AK()),
        takeBallast: () => kk().jK(),
        takePressure: () => kk().sK()
      }
    }
  },
  4965: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      c: () => bk,
      g: () => Dk,
      h: () => Hk,
      i: () => Kk,
      l: () => fk,
      p: () => Sk,
      r: () => mk,
      t: () => Mk,
      u: () => xk
    });
    const Dk = 5;

    function fk(kk) {
      return kk === Dk
    }

    function Sk(kk) {
      return [...kk.features]
    }
    const bk = 262144,
      rk = 256,
      Pk = 256;

    function mk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const ek = [];
      for (const [ik, Dk] of Object.entries(kk)) {
        if ("string" !== typeof Dk) return `${ik} isn't text.`;
        ek.push({
          path: ik,
          source: Dk
        })
      }
      return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
          const ek = new Set;
          for (const {
              path: ik
            }
            of kk) {
            const kk = nk(ik);
            if (null !== kk) return kk;
            if (ek.has(ik)) return `The pack has two files at ${ik}.`;
            ek.add(ik)
          }
          return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
        }(ek) ?? ek
    }

    function Mk(kk) {
      const ek = {};
      for (const ik of kk) ek[ik.path] = ik.source;
      return ek
    }

    function Kk(kk, ek) {
      return kk < ek ? -1 : kk > ek ? 1 : 0
    }

    function xk(kk) {
      const ek = new TextEncoder;
      let ik = 0;
      for (const {
          source: Dk
        }
        of kk) ik += ek.encode(Dk).byteLength;
      return ik
    }

    function nk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Uk = /^(.*)\[rot\[([1-4])$/;

    function Hk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Dk = new Map;
      ek.forEach(((kk, ek) => {
        let {
          numAnimStates: ik,
          animStartIdx: fk
        } = kk;
        for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
      }));
      const fk = Object.entries(kk),
        Sk = new Map;
      for (const [Hk, wk] of fk) {
        const kk = Uk.exec(Hk);
        "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
      }
      const bk = kk => {
          const ek = Uk.exec(kk);
          return ek && Sk.has(ek[1]) ? {
            root: ek[1],
            rotation: Number(ek[2]) - 1
          } : null
        },
        rk = new Set(fk.map((kk => {
          let [ek] = kk;
          return bk(ek)?.root ?? ek
        }))),
        Pk = (kk, ik) => {
          const Dk = kk.replace(/_?0$/, "");
          return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
        },
        mk = new Map;
      for (const [Uk, Hk] of fk) mk.set(Hk, Pk(bk(Uk)?.root ?? Uk, Hk));
      const Mk = fk.reduce(((kk, ek) => {
          let [, ik] = ek;
          return Math.max(kk, ik + 1)
        }), 0),
        Kk = Array.from({
          length: Mk
        }, ((kk, ek) => ({
          id: ek + 1,
          rotation: 0
        }))),
        xk = new Map,
        nk = new Map;
      for (const [Uk, Hk] of fk) {
        const kk = bk(Uk),
          ek = Dk.get(Hk);
        if (void 0 !== ek) {
          const ik = mk.get(ek);
          nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "frame"
          }), kk && !nk.has(kk.root) && nk.set(kk.root, {
            name: kk.root,
            texture: ik,
            kind: "frame"
          });
          continue
        }
        const ik = mk.get(Hk),
          fk = kk?.root ?? Uk;
        if (ik !== fk && nk.set(fk, {
            name: fk,
            texture: ik,
            kind: "frame"
          }), kk) {
          const ek = Sk.get(kk.root);
          Kk[Hk] = {
            id: ek,
            rotation: kk.rotation
          }, xk.set(ik, ek), nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "rotation"
          })
        } else xk.set(ik, Hk + 1)
      }
      for (const Uk of xk.keys()) nk.delete(Uk);
      for (const [Uk, Hk] of ik) {
        const kk = xk.get(Hk);
        void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
      }
      return {
        named: [...xk].sort(((kk, ek) => {
          let [ik] = kk, [Dk] = ek;
          return ik < Dk ? -1 : ik > Dk ? 1 : 0
        })).map((kk => {
          let [ek, ik] = kk;
          return {
            name: ek,
            id: ik
          }
        })),
        aliases: [...nk.values()],
        layers: Kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);