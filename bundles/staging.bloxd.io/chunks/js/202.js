export const id = 202;
export const ids = [202];
export const modules = {
  38530: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = "The world isn't loaded, so no blocks can be seen.",
      yB = "The world isn't loaded, so nothing in it can be seen."
  },
  35772: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      h: () => yB
    });
    let VB = () => null;

    function yB(BB) {
      VB = BB
    }

    function pB(BB, TB) {
      return VB(BB, TB)
    }
  },
  39338: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => uB,
      e: () => mB,
      g: () => vB,
      h: () => HB
    });
    var VB = dB(24),
      yB = dB(39341),
      pB = dB(39322),
      lB = dB(39346),
      JB = dB(39330),
      YB = dB(39348),
      gB = dB(39372);

    function oB(BB) {
      var TB, dB;
      const VB = (0, pB.i)();
      return VB ? null === (TB = (0, yB.e)(VB.api, BB[0], BB[1], BB[2])) || void 0 === TB || null === (dB = TB.persisted) || void 0 === dB ? void 0 : dB.shared : void 0
    }

    function kB(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    const LB = new Map;
    let OB = null,
      DB = 0;

    function uB() {
      return DB
    }

    function HB(BB) {
      const TB = null !== OB && OB.key === kB(BB.pos) ? OB.type : null;
      if (null === TB) return BB;
      let dB = null;
      if ("Iron" === TB) {
        const {
          cachedPasskey: TB,
          ...VB
        } = EB(BB.pos);
        dB = {
          jl: null !== TB && void 0 !== TB ? TB : [0, 0, 0, 0],
          ...VB
        }
      }
      return {
        ...BB,
        type: TB,
        ironChest: dB
      }
    }

    function EB(BB) {
      const TB = oB(BB),
        dB = null === TB || void 0 === TB ? void 0 : TB.ownerDbId,
        VB = function(BB) {
          var TB;
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB(BB);
          const VB = kB(BB),
            yB = LB.get(VB);
          return yB ? yB.lastOpened < (null !== (TB = null === dB || void 0 === dB ? void 0 : dB.passkeyLastUpdated) && void 0 !== TB ? TB : 0) ? (LB.delete(VB), null) : [...yB.jl] : null
        }(BB, TB);
      return void 0 === dB ? {
        cachedPasskey: VB
      } : {
        ownerDbId: dB,
        cachedPasskey: VB
      }
    }(0, gB.n)(lB.d, (BB => {
      const TB = (0, YB.f)(lB.d, BB);
      if (!(0, YB.e)(TB) || TB.Xd) return;
      if (DB++, !TB.Pd || null === TB.ad) return void(OB = null);
      const dB = kB(TB.ad);
      OB = {
        key: dB,
        type: TB.Rd
      }, null !== TB.Zd && LB.set(dB, {
        jl: [...TB.Zd],
        lastOpened: Date.now()
      })
    })), (0, gB.i)((() => {
      LB.clear(), OB = null, DB++
    })), (0, gB.m)((() => {
      null !== OB && (OB = null, DB++, VB.h.yH("chestToggleFromServer", !1, !0))
    }));
    const vB = {
        boardEditRequested: {
          watch: BB => (0, VB.i)("EditBoard", (TB => {
            let {
              pos: dB
            } = TB;
            if (null === dB) return void BB(null);
            const VB = (0, pB.i)(),
              yB = (0, pB.t)();
            VB && yB && BB(yB.readBoardToEdit(VB.api, VB.chunks, dB))
          }))
        },
        ironChestOpenRequested: {
          watch: BB => (0, VB.i)("OpenIronChest", (TB => {
            let {
              pos: dB
            } = TB;
            BB(function(BB) {
              return {
                pos: BB,
                ...EB(BB)
              }
            }(dB))
          }))
        }
      },
      mB = {
        writeOnBoard(BB) {
          var TB;
          let {
            pos: dB,
            text: VB,
            textSize: yB
          } = BB;
          null === (TB = (0, pB.i)()) || void 0 === TB || TB.send(JB.c.UpdateBoard, (0, JB.U)({
            gg: dB,
            og: VB,
            kg: yB
          }))
        },
        writeBook(BB) {
          var TB;
          let {
            pages: dB,
            title: VB,
            published: yB
          } = BB;
          null === (TB = (0, pB.i)()) || void 0 === TB || TB.send(JB.c.UpdateBook, (0, JB.V)({
            hg: dB,
            Cg: VB,
            Gg: yB
          }))
        },
        writeNameTag(BB) {
          var TB;
          null === (TB = (0, pB.i)()) || void 0 === TB || TB.send(JB.c.UpdateNameTag, BB)
        },
        setCustomLobbyBlock(BB) {
          let {
            pos: TB,
            blockName: dB
          } = BB;
          const VB = (0, pB.t)(),
            yB = (0, pB.i)();
          VB && yB && yB.send(JB.c.SetCustomLobbyBlock, (0, JB.K)({
            rY: VB.blockIdOf(dB),
            KY: TB
          }))
        }
      }
  },
  39385: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      e: () => lB,
      i: () => JB
    });
    var VB = dB(39310),
      yB = dB(4169),
      pB = dB(39322);

    function lB() {
      var BB;
      const TB = null === (BB = (0, pB.i)()) || void 0 === BB ? void 0 : BB.api.localId;
      return void 0 === TB || TB === VB.ad ? null : String(TB)
    }

    function JB(BB) {
      const TB = (0, pB.i)();
      if (null !== TB) return BB(TB);
      let dB = null;
      const VB = (0, yB.v)((() => {
        const TB = (0, pB.i)();
        null !== TB && null === dB && (VB(), dB = BB(TB))
      }));
      return () => {
        var BB;
        VB(), null === (BB = dB) || void 0 === BB || BB()
      }
    }

    function YB(BB, TB, dB) {
      return {
        current: () => {
          const dB = (0, pB.i)();
          return null === dB ? TB : BB(dB)()
        },
        watch: TB => JB((VB => {
          const yB = BB(VB);
          let pB = yB();
          return TB(pB), dB((() => {
            const BB = yB();
            BB !== pB && (pB = BB, TB(BB))
          }))
        }))
      }
    }
  },
  39378: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB
    });
    var VB = dB(39322),
      yB = dB(39385),
      pB = dB(39390);

    function lB() {
      var BB, TB;
      return null !== (BB = null === (TB = (0, VB.i)()) || void 0 === TB ? void 0 : TB.itemBridgeSources) && void 0 !== BB ? BB : pB.c
    }

    function JB(BB) {
      return {
        current: () => lB().states[BB].current(),
        watch: TB => (0, yB.i)((dB => {
          const VB = dB.itemBridgeSources.states[BB];
          return TB(VB.current()), VB.watch(TB)
        }))
      }
    }

    function YB(BB) {
      return {
        watch: TB => (0, yB.i)((dB => dB.itemBridgeSources.events[BB].watch(TB)))
      }
    }
    const gB = {
      states: {
        inventory: JB("inventory"),
        hotbar: JB("hotbar"),
        crafting: JB("crafting"),
        heldItemAim: JB("heldItemAim")
      },
      events: {
        hotbarSlotRequested: YB("hotbarSlotRequested"),
        hotbarScrolled: YB("hotbarScrolled"),
        numberKeyPressed: YB("numberKeyPressed"),
        inventoryDropRequested: YB("inventoryDropRequested"),
        chestToggled: YB("chestToggled"),
        chestRefreshed: YB("chestRefreshed"),
        inventorySynced: YB("inventorySynced"),
        enchantingTableOpened: YB("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: BB => lB().commands.selectHotbarSlot(BB),
        removeInventoryItem: BB => lB().commands.removeInventoryItem(BB),
        swapInventorySlots: BB => lB().commands.swapInventorySlots(BB),
        moveInventoryItem: BB => lB().commands.moveInventoryItem(BB),
        quickMoveInventoryItem: BB => lB().commands.quickMoveInventoryItem(BB),
        closeChest: BB => lB().commands.closeChest(BB),
        focusCrafting: BB => lB().commands.focusCrafting(BB),
        craftRecipe: BB => lB().commands.craftRecipe(BB),
        salvageItem: BB => lB().commands.salvageItem(BB),
        enchantItem: BB => lB().commands.enchantItem(BB)
      },
      queries: {
        enchantingOffer: BB => lB().queries.enchantingOffer(BB)
      }
    }
  },
  39390: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(38530);

    function yB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function pB() {}
    const lB = Object.freeze([0, 0, 0]),
      JB = {
        states: {
          health: yB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: yB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: yB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: yB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: yB({}),
          creativeVisibility: yB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: yB(null),
          heldItemAim: yB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: yB(!1),
          gliderBoostFuel: yB(0),
          flight: yB({
            canFly: !1,
            flying: !1
          }),
          crafting: yB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: yB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: yB({}),
          fullInventory: yB(!1),
          crosshairTarget: yB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: yB(!0),
          replay: yB(null),
          replayEdits: yB(null),
          replayRecorder: yB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: yB(!1)
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
          selectHotbarSlot: pB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: pB,
          setInventoryOpen: pB,
          changeIronChestPasskey: pB,
          dragReplayCamera: pB,
          applyTemporaryThirdPerson: pB,
          holdEmoteWheel: pB,
          recordFlyingMiddleText: pB,
          focusCrafting: pB,
          craftRecipe: () => ({
            Uo: 0,
            jg: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: pB,
          setShopOpen: pB,
          buyShopItem: pB,
          sendChatMessage: pB,
          ignorePlayer: pB,
          reportPlayer: pB,
          reportWorldCodeChat: pB,
          requestDiscordReportKey: pB,
          reportLobbyOrGame: pB,
          playEmote: pB,
          updateMyCosmetic: pB,
          writeOnBoard: pB,
          writeBook: pB,
          writeNameTag: pB,
          setCustomLobbyBlock: pB,
          openIronChest: pB,
          sendCodeCollab: pB,
          clickCodeBlock: pB,
          bindCustomButtonKeys: pB,
          pressCustomButton: pB,
          moveReplayFreecam: pB,
          holdReplayFreecamVertical: pB,
          respawn: pB,
          wakeUp: pB,
          requestLeaderboard: pB,
          completeTask: pB,
          setServerCookie: pB,
          answerUiRequest: pB,
          chooseRewardedAd: pB,
          setCameraZoom: pB,
          setCrosshairInteractPrompt: pB,
          setLookSensitivity: pB,
          replayAction: pB,
          setReplayPlaying: pB,
          seekReplay: pB,
          setReplayCameraMode: pB,
          syncReplayCameraMode: pB,
          setReplayCameraKeyframe: pB,
          moveReplayCameraKeyframe: pB,
          deleteReplayCameraKeyframes: pB,
          setReplayPlaybackMark: pB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: pB,
          exportReplayVideo: pB,
          toggleRecording: pB,
          saveClip: pB,
          setRecorderPrefs: pB,
          setReplayViewerOpen: pB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => VB.c,
          worldCodeAiGameState: () => VB.g
        },
        lookups: {
          localPos: () => lB,
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
  39315: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => MB,
      c: () => sB,
      d: () => zB,
      g: () => fB,
      k: () => NB
    });
    var VB = dB(38169),
      yB = dB(1105),
      pB = dB(1708),
      lB = dB(1719),
      JB = dB(2760),
      YB = dB(35772),
      gB = dB(1209),
      oB = dB(39322),
      kB = dB(4209),
      LB = dB(2101),
      OB = dB(39330),
      DB = dB(39338),
      uB = dB(39378);
    let HB = null;

    function EB(BB) {
      const TB = new Map,
        dB = dB => {
          if ("string" !== typeof dB) return;
          let VB = TB.get(dB);
          return void 0 === VB && (VB = BB(dB), void 0 !== VB && TB.set(dB, VB)), VB
        };
      return new Proxy({}, {
        get: (BB, TB) => dB(TB),
        has: (BB, TB) => void 0 !== dB(TB)
      })
    }

    function vB(BB) {
      const TB = (0, JB.b)(BB);
      return void 0 !== TB && (0, JB.c)(TB) === BB
    }

    function mB(BB) {
      var TB;
      const dB = null === (TB = (0, oB.i)()) || void 0 === TB ? void 0 : TB.tables;
      if (void 0 === dB || !vB(BB)) return;
      const VB = {
          displayName: dB.getDisplayName(BB)
        },
        yB = dB.getItemStat(BB, "description");
      void 0 !== yB && null !== yB && (VB.description = yB);
      const {
        rootName: pB
      } = dB.getMetaInfo(BB);
      pB !== BB && (VB.rootName = pB);
      const lB = dB.getItemStat(BB, "armourReduction");
      return void 0 !== lB && null !== lB && (VB.armourReduction = lB), VB
    }(0, oB.w)((BB => {
      HB = BB
    }));
    const iB = (0, lB.i)("DisplayName", "Description");

    function NB() {
      return Boolean(pB.c.get("useInventory") && pB.c.get("useFullInventory"))
    }
    let tB = null;
    const fB = {
        inventory: function() {
          const BB = uB.b.states.inventory;
          let TB = null;
          const dB = BB => {
            var dB;
            return null === BB.chest ? BB : ((null === (dB = TB) || void 0 === dB ? void 0 : dB.from) === BB && TB.chestVersion === (0, DB.b)() || (TB = {
              from: BB,
              chestVersion: (0, DB.b)(),
              view: {
                ...BB,
                chest: (0, DB.h)(BB.chest)
              }
            }), TB.view)
          };
          return {
            current: () => dB(BB.current()),
            watch: TB => BB.watch((BB => {
              TB(dB(BB))
            }))
          }
        }(),
        crafting: uB.b.states.crafting,
        stationItems: {
          current() {
            var BB;
            return (null === (BB = tB) || void 0 === BB ? void 0 : BB.namesVersion) !== (0, JB.d)() && (tB = {
              namesVersion: (0, JB.d)(),
              items: {
                enchantable: EB((BB => {
                  const TB = (0, JB.b)(BB);
                  return void 0 !== TB && null !== HB && HB.enchantmentPerksOf(TB).length > 0 || void 0
                })),
                salvageable: EB((BB => !(!vB(BB) || null === (0, YB.e)(BB)) || void 0))
              }
            }), tB.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let BB = null;
          const TB = () => {
            var TB;
            return (null === (TB = BB) || void 0 === TB ? void 0 : TB.namesVersion) !== (0, JB.d)() && (BB = {
              namesVersion: (0, JB.d)(),
              infos: EB(mB)
            }), BB.infos
          };
          return {
            current: TB,
            watch: dB => (0, lB.v)((VB => {
              VB.some(iB) && (BB = null, dB(TB()))
            }))
          }
        }(),
        creativeVisibility: (0, lB.n)((function() {
          const BB = {};
          for (const yB of null !== (TB = null === (dB = HB) || void 0 === dB ? void 0 : dB.creativeItemIds()) && void 0 !== TB ? TB : []) {
            var TB, dB, lB, YB;
            const gB = (0, JB.c)(yB);
            if (void 0 === gB) continue;
            const oB = null !== (lB = pB.c.get((0, VB.f)(gB, "showInCreativeInven"))) && void 0 !== lB ? lB : null === (YB = HB) || void 0 === YB ? void 0 : YB.showInCreativeInvenOf(yB);
            "boolean" === typeof oB && (BB[gB] = oB)
          }
          return {
            publicLobby: (0, yB.O)((0, gB.e)().lobbyName),
            shownInGame: BB
          }
        }), ["connectedGameChanged"], (0, lB.i)("ShowInCreativeInven")),
        fullInventory: (0, lB.n)(NB, [], (0, lB.j)("useInventory", "useFullInventory"))
      },
      sB = {
        inventoryDropRequested: uB.b.events.inventoryDropRequested,
        chestToggled: uB.b.events.chestToggled,
        chestRefreshed: uB.b.events.chestRefreshed,
        inventorySynced: uB.b.events.inventorySynced,
        enchantingTableOpened: uB.b.events.enchantingTableOpened
      },
      MB = {
        removeInventoryItem: uB.b.commands.removeInventoryItem,
        swapInventorySlots: uB.b.commands.swapInventorySlots,
        moveInventoryItem: uB.b.commands.moveInventoryItem,
        quickMoveInventoryItem: uB.b.commands.quickMoveInventoryItem,
        closeChest: uB.b.commands.closeChest,
        setInventoryOpen(BB) {
          (0, kB.f)(LB.A.InventoryOpen, BB ? LB.A.InventoryOpen : 0)
        },
        focusCrafting: uB.b.commands.focusCrafting,
        craftRecipe: uB.b.commands.craftRecipe,
        salvageItem: uB.b.commands.salvageItem,
        enchantItem: uB.b.commands.enchantItem,
        changeIronChestPasskey(BB) {
          var TB;
          let {
            pos: dB,
            jl: VB
          } = BB;
          null === (TB = (0, oB.i)()) || void 0 === TB || TB.send(OB.c.ChangeIronChestPasskey, (0, OB.i)({
            ad: dB,
            jl: VB
          }))
        },
        openIronChest(BB) {
          var TB;
          let {
            pos: dB,
            jl: VB
          } = BB;
          null === (TB = (0, oB.i)()) || void 0 === TB || TB.send(OB.c.OpenIronChest, (0, OB.D)({
            ad: dB,
            jl: VB
          }))
        }
      },
      zB = {
        enchantingOffer: uB.b.queries.enchantingOffer
      }
  },
  39376: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      c: () => kB,
      g: () => JB,
      i: () => pB,
      j: () => yB,
      l: () => YB,
      p: () => oB
    });
    class VB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function yB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }

    function pB(BB) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(BB))
    }
    const lB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function JB(BB) {
      var TB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof VB || yB(BB) && lB.test(null !== (TB = BB.stack) && void 0 !== TB ? TB : "")
    }

    function YB(BB, TB) {
      if (JB(BB)) throw BB;
      console.error(TB, BB)
    }

    function gB(BB, TB, dB, yB, pB) {
      if (TB % yB !== 0 || TB + dB > BB.byteLength) throw new VB(`${pB}: ${dB} bytes at ${TB}, ${yB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function oB(BB, TB, dB, VB, yB) {
      return 0 === dB ? null : (gB(TB, dB, VB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, yB), new BB(TB, dB, VB))
    }

    function kB(BB, TB, dB, VB, yB) {
      return 0 === TB ? null : (gB(BB, TB, dB, VB, yB), new DataView(BB, TB, dB))
    }
  },
  39322: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      f: () => EB,
      i: () => uB,
      k: () => HB,
      m: () => LB,
      q: () => OB,
      t: () => oB,
      w: () => kB,
      y: () => DB
    });
    class VB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let yB = null,
      pB = null,
      lB = null;
    const JB = [];
    let YB = null;

    function gB(BB, TB) {
      try {
        BB(TB)
      } catch (dB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", dB)
      }
    }

    function oB() {
      return YB
    }

    function kB(BB) {
      JB.push(BB), null !== YB && gB(BB, YB)
    }

    function LB(BB) {
      return yB ??= Promise.all([dB.e(64), dB.e(88), dB.e(199), dB.e(126), dB.e(222), dB.e(200), dB.e(201), dB.e(86), dB.e(228), dB.e(251), dB.e(177), dB.e(186), dB.e(129), dB.e(79), dB.e(107), dB.e(226), dB.e(49)]).then((() => dB(41265))).then((TB => {
        TB.loadAudio(BB), YB = TB;
        for (const BB of JB) gB(BB, TB);
        return TB
      })).catch((BB => {
        throw yB = null, BB
      })), yB
    }
    async function OB(BB, TB) {
      try {
        const dB = await LB(BB);
        await dB.loadClientGame(TB)
      } catch (dB) {
        throw new VB(dB)
      }
    }

    function DB(BB, TB) {
      pB = {
        running: BB,
        shell: TB
      }
    }

    function uB() {
      return lB
    }
    async function HB(BB) {
      const TB = pB;
      if ((null === TB || void 0 === TB ? void 0 : TB.running) !== BB) throw new Error("the core's session has ended");
      const dB = await LB(TB.shell.audio).catch((BB => {
        throw new VB(BB)
      }));
      if (null !== lB) return lB;
      if (pB !== TB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (lB = dB.startGameHost(BB, TB.shell), null === lB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return lB
    }

    function EB() {
      null !== lB && (null !== YB ? YB.endGameHost(lB) : lB.closeGame()), lB = null, pB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);