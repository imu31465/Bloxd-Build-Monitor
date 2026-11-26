export const id = 250;
export const ids = [250];
export const modules = {
  40416: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      e: () => DB
    });
    const YB = "The world isn't loaded, so no blocks can be seen.",
      DB = "The world isn't loaded, so nothing in it can be seen."
  },
  39804: (BB, OB, GB) => {
    function YB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  37495: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    });
    const YB = 3,
      DB = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37500: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => DB
    });
    let YB = () => null;

    function DB(BB) {
      YB = BB
    }

    function QB(BB, OB) {
      return YB(BB, OB)
    }
  },
  41602: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB,
      d: () => WB,
      h: () => RB,
      k: () => ZB
    });
    var YB = GB(25),
      DB = GB(41611),
      QB = GB(41593),
      oB = GB(41616),
      jB = GB(41600),
      yB = GB(41624),
      JB = GB(41637);

    function MB(BB) {
      var OB, GB;
      const YB = (0, QB.j)();
      return YB ? null === (OB = (0, DB.c)(YB.api, BB[0], BB[1], BB[2])) || void 0 === OB || null === (GB = OB.persisted) || void 0 === GB ? void 0 : GB.shared : void 0
    }

    function PB(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    const zB = new Map;
    let lB = null,
      pB = 0;

    function qB() {
      return pB
    }

    function ZB(BB) {
      const OB = null !== lB && lB.key === PB(BB.pos) ? lB.type : null;
      if (null === OB) return BB;
      let GB = null;
      if ("Iron" === OB) {
        const {
          cachedPasskey: OB,
          ...YB
        } = NB(BB.pos);
        GB = {
          xy: null !== OB && void 0 !== OB ? OB : [0, 0, 0, 0],
          ...YB
        }
      }
      return {
        ...BB,
        type: OB,
        ironChest: GB
      }
    }

    function NB(BB) {
      const OB = MB(BB),
        GB = null === OB || void 0 === OB ? void 0 : OB.ownerDbId,
        YB = function(BB) {
          var OB;
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MB(BB);
          const YB = PB(BB),
            DB = zB.get(YB);
          return DB ? DB.lastOpened < (null !== (OB = null === GB || void 0 === GB ? void 0 : GB.passkeyLastUpdated) && void 0 !== OB ? OB : 0) ? (zB.delete(YB), null) : [...DB.xy] : null
        }(BB, OB);
      return void 0 === GB ? {
        cachedPasskey: YB
      } : {
        ownerDbId: GB,
        cachedPasskey: YB
      }
    }(0, JB.g)(oB.d, (BB => {
      const OB = (0, yB.h)(oB.d, BB);
      if (!(0, yB.e)(OB) || OB.WO) return;
      if (pB++, !OB.lO || null === OB.ZO) return void(lB = null);
      const GB = PB(OB.ZO);
      lB = {
        key: GB,
        type: OB.qO
      }, null !== OB.RO && zB.set(GB, {
        xy: [...OB.RO],
        lastOpened: Date.now()
      })
    })), (0, JB.d)((() => {
      zB.clear(), lB = null, pB++
    })), (0, JB.e)((() => {
      null !== lB && (lB = null, pB++, YB.o.tM("chestToggleFromServer", !1, !0))
    }));
    const RB = {
        boardEditRequested: {
          watch: BB => (0, YB.p)("EditBoard", (OB => {
            let {
              pos: GB
            } = OB;
            if (null === GB) return void BB(null);
            const YB = (0, QB.j)(),
              DB = (0, QB.s)();
            YB && DB && BB(DB.readBoardToEdit(YB.api, YB.chunks, GB))
          }))
        },
        ironChestOpenRequested: {
          watch: BB => (0, YB.p)("OpenIronChest", (OB => {
            let {
              pos: GB
            } = OB;
            BB(function(BB) {
              return {
                pos: BB,
                ...NB(BB)
              }
            }(GB))
          }))
        }
      },
      WB = {
        writeOnBoard(BB) {
          var OB;
          let {
            pos: GB,
            text: YB,
            textSize: DB
          } = BB;
          null === (OB = (0, QB.j)()) || void 0 === OB || OB.send(jB.c.UpdateBoard, (0, jB.S)({
            JJ: GB,
            MJ: YB,
            PJ: DB
          }))
        },
        writeBook(BB) {
          var OB;
          let {
            pages: GB,
            title: YB,
            published: DB
          } = BB;
          null === (OB = (0, QB.j)()) || void 0 === OB || OB.send(jB.c.UpdateBook, (0, jB.V)({
            dJ: GB,
            KJ: YB,
            uJ: DB
          }))
        },
        writeNameTag(BB) {
          var OB;
          null === (OB = (0, QB.j)()) || void 0 === OB || OB.send(jB.c.UpdateNameTag, BB)
        },
        setCustomLobbyBlock(BB) {
          let {
            pos: OB,
            blockName: GB
          } = BB;
          const YB = (0, QB.s)(),
            DB = (0, QB.j)();
          YB && DB && DB.send(jB.c.SetCustomLobbyBlock, (0, jB.E)({
            SM: YB.blockIdOf(GB),
            VM: OB
          }))
        }
      }
  },
  41661: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      h: () => oB,
      l: () => jB
    });
    var YB = GB(41579),
      DB = GB(5274),
      QB = GB(41593);

    function oB() {
      var BB;
      const OB = null === (BB = (0, QB.j)()) || void 0 === BB ? void 0 : BB.api.localId;
      return void 0 === OB || OB === YB.cd ? null : String(OB)
    }

    function jB(BB) {
      const OB = (0, QB.j)();
      if (null !== OB) return BB(OB);
      let GB = null;
      const YB = (0, DB.w)((() => {
        const OB = (0, QB.j)();
        null !== OB && null === GB && (YB(), GB = BB(OB))
      }));
      return () => {
        var BB;
        YB(), null === (BB = GB) || void 0 === BB || BB()
      }
    }

    function yB(BB, OB, GB) {
      return {
        current: () => {
          const GB = (0, QB.j)();
          return null === GB ? OB : BB(GB)()
        },
        watch: OB => jB((YB => {
          const DB = BB(YB);
          let QB = DB();
          return OB(QB), GB((() => {
            const BB = DB();
            BB !== QB && (QB = BB, OB(BB))
          }))
        }))
      }
    }
  },
  41652: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(41593),
      DB = GB(41661),
      QB = GB(41667);

    function oB() {
      var BB, OB;
      return null !== (BB = null === (OB = (0, YB.j)()) || void 0 === OB ? void 0 : OB.itemBridgeSources) && void 0 !== BB ? BB : QB.c
    }

    function jB(BB) {
      return {
        current: () => oB().states[BB].current(),
        watch: OB => (0, DB.l)((GB => {
          const YB = GB.itemBridgeSources.states[BB];
          return OB(YB.current()), YB.watch(OB)
        }))
      }
    }

    function yB(BB) {
      return {
        watch: OB => (0, DB.l)((GB => GB.itemBridgeSources.events[BB].watch(OB)))
      }
    }
    const JB = {
      states: {
        inventory: jB("inventory"),
        hotbar: jB("hotbar"),
        crafting: jB("crafting"),
        heldItemAim: jB("heldItemAim")
      },
      events: {
        hotbarSlotRequested: yB("hotbarSlotRequested"),
        hotbarScrolled: yB("hotbarScrolled"),
        numberKeyPressed: yB("numberKeyPressed"),
        inventoryDropRequested: yB("inventoryDropRequested"),
        chestToggled: yB("chestToggled"),
        chestRefreshed: yB("chestRefreshed"),
        inventorySynced: yB("inventorySynced"),
        enchantingTableOpened: yB("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: BB => oB().commands.selectHotbarSlot(BB),
        removeInventoryItem: BB => oB().commands.removeInventoryItem(BB),
        swapInventorySlots: BB => oB().commands.swapInventorySlots(BB),
        moveInventoryItem: BB => oB().commands.moveInventoryItem(BB),
        quickMoveInventoryItem: BB => oB().commands.quickMoveInventoryItem(BB),
        closeChest: BB => oB().commands.closeChest(BB),
        focusCrafting: BB => oB().commands.focusCrafting(BB),
        craftRecipe: BB => oB().commands.craftRecipe(BB),
        salvageItem: BB => oB().commands.salvageItem(BB),
        enchantItem: BB => oB().commands.enchantItem(BB)
      },
      queries: {
        enchantingOffer: BB => oB().queries.enchantingOffer(BB)
      }
    }
  },
  41667: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(40416),
      DB = GB(37495);

    function QB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function oB() {}
    const jB = Object.freeze([0, 0, 0]),
      yB = {
        states: {
          health: QB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: QB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: QB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: QB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: QB({}),
          creativeVisibility: QB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: QB(null),
          heldItemAim: QB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: QB(!1),
          gliderBoostFuel: QB(0),
          flight: QB({
            canFly: !1,
            flying: !1
          }),
          crafting: QB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: QB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: QB({}),
          fullInventory: QB(!1),
          crosshairTarget: QB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: QB(!0),
          freeCamera: QB({
            allowed: !1,
            movesFly: !1
          }),
          replay: QB(null),
          replayEdits: QB(null),
          replayRecorder: QB(DB.e),
          replayVideoExporting: QB(!1)
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
          chatRemoved: {
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
          selectHotbarSlot: oB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: oB,
          setInventoryOpen: oB,
          changeIronChestPasskey: oB,
          dragReplayCamera: oB,
          applyTemporaryThirdPerson: oB,
          holdEmoteWheel: oB,
          recordFlyingMiddleText: oB,
          focusCrafting: oB,
          craftRecipe: () => ({
            vM: 0,
            WJ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oB,
          setShopOpen: oB,
          buyShopItem: oB,
          lobbyManage: oB,
          sendChatMessage: () => !1,
          ignorePlayer: oB,
          reportPlayer: oB,
          reportWorldCodeChat: oB,
          requestDiscordReportKey: oB,
          reportLobbyOrGame: oB,
          playEmote: oB,
          updateMyCosmetic: oB,
          writeOnBoard: oB,
          writeBook: oB,
          writeNameTag: oB,
          setCustomLobbyBlock: oB,
          openIronChest: oB,
          sendCodeCollab: oB,
          clickCodeBlock: oB,
          bindCustomButtonKeys: oB,
          pressCustomButton: oB,
          moveReplayFreecam: oB,
          holdReplayFreecamVertical: oB,
          respawn: oB,
          wakeUp: oB,
          requestLeaderboard: oB,
          completeTask: oB,
          setServerCookie: oB,
          answerUiRequest: oB,
          chooseRewardedAd: oB,
          setCameraZoom: oB,
          setFreeCameraMovesFly: oB,
          setBlockHighlight: oB,
          setCrosshairInteractPrompt: oB,
          setLookSensitivity: oB,
          replayAction: oB,
          setReplayPlaying: oB,
          seekReplay: oB,
          setReplayCameraMode: oB,
          syncReplayCameraMode: oB,
          setReplayCameraKeyframe: oB,
          moveReplayCameraKeyframe: oB,
          deleteReplayCameraKeyframes: oB,
          setReplayPlaybackMark: oB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: oB,
          exportReplayVideo: oB,
          toggleRecording: oB,
          saveClip: oB,
          setRecorderPrefs: oB,
          setReplayViewerOpen: oB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => YB.d,
          worldCodeAiGameState: () => YB.e
        },
        lookups: {
          localPos: () => jB,
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
  41587: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => fB,
      g: () => UB,
      h: () => kB,
      j: () => nB,
      k: () => VB
    });
    var YB = GB(39954),
      DB = GB(1217),
      QB = GB(2050),
      oB = GB(2059),
      jB = GB(3708),
      yB = GB(37500),
      JB = GB(1350),
      MB = GB(41593),
      PB = GB(5313),
      zB = GB(2617),
      lB = GB(41600),
      pB = GB(41602),
      qB = GB(41652);
    let ZB = null;

    function NB(BB) {
      const OB = new Map,
        GB = GB => {
          if ("string" !== typeof GB) return;
          let YB = OB.get(GB);
          return void 0 === YB && (YB = BB(GB), void 0 !== YB && OB.set(GB, YB)), YB
        };
      return new Proxy({}, {
        get: (BB, OB) => GB(OB),
        has: (BB, OB) => void 0 !== GB(OB)
      })
    }

    function RB(BB) {
      const OB = (0, jB.c)(BB);
      return void 0 !== OB && (0, jB.g)(OB) === BB
    }

    function WB(BB) {
      var OB;
      const GB = null === (OB = (0, MB.j)()) || void 0 === OB ? void 0 : OB.tables;
      if (void 0 === GB || !RB(BB)) return;
      const YB = {
          displayName: GB.getDisplayName(BB)
        },
        DB = GB.getItemStat(BB, "description");
      void 0 !== DB && null !== DB && (YB.description = DB);
      const {
        rootName: QB
      } = GB.getMetaInfo(BB);
      QB !== BB && (YB.rootName = QB);
      const oB = GB.getItemStat(BB, "armourReduction");
      return void 0 !== oB && null !== oB && (YB.armourReduction = oB), YB
    }(0, MB.u)((BB => {
      ZB = BB
    }));
    const AB = (0, oB.g)("DisplayName", "Description");

    function VB() {
      return Boolean(QB.e.get("useInventory") && QB.e.get("useFullInventory"))
    }
    let SB = null;
    const nB = {
        inventory: function() {
          const BB = qB.c.states.inventory;
          let OB = null;
          const GB = BB => {
            var GB;
            return null === BB.chest ? BB : ((null === (GB = OB) || void 0 === GB ? void 0 : GB.from) === BB && OB.chestVersion === (0, pB.b)() || (OB = {
              from: BB,
              chestVersion: (0, pB.b)(),
              view: {
                ...BB,
                chest: (0, pB.k)(BB.chest)
              }
            }), OB.view)
          };
          return {
            current: () => GB(BB.current()),
            watch: OB => BB.watch((BB => {
              OB(GB(BB))
            }))
          }
        }(),
        crafting: qB.c.states.crafting,
        stationItems: {
          current() {
            var BB;
            return (null === (BB = SB) || void 0 === BB ? void 0 : BB.namesVersion) !== (0, jB.k)() && (SB = {
              namesVersion: (0, jB.k)(),
              items: {
                enchantable: NB((BB => {
                  const OB = (0, jB.c)(BB);
                  return void 0 !== OB && null !== ZB && ZB.enchantmentPerksOf(OB).length > 0 || void 0
                })),
                salvageable: NB((BB => !(!RB(BB) || null === (0, yB.e)(BB)) || void 0))
              }
            }), SB.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let BB = null;
          const OB = () => {
            var OB;
            return (null === (OB = BB) || void 0 === OB ? void 0 : OB.namesVersion) !== (0, jB.k)() && (BB = {
              namesVersion: (0, jB.k)(),
              infos: NB(WB)
            }), BB.infos
          };
          return {
            current: OB,
            watch: GB => (0, oB.n)((YB => {
              YB.some(AB) && (BB = null, GB(OB()))
            }))
          }
        }(),
        creativeVisibility: (0, oB.i)((function() {
          const BB = {};
          for (const DB of null !== (OB = null === (GB = ZB) || void 0 === GB ? void 0 : GB.creativeItemIds()) && void 0 !== OB ? OB : []) {
            var OB, GB, oB, yB;
            const JB = (0, jB.g)(DB);
            if (void 0 === JB) continue;
            const MB = null !== (oB = QB.e.get((0, YB.f)(JB, "showInCreativeInven"))) && void 0 !== oB ? oB : null === (yB = ZB) || void 0 === yB ? void 0 : yB.showInCreativeInvenOf(DB);
            "boolean" === typeof MB && (BB[JB] = MB)
          }
          return {
            publicLobby: (0, DB.Q)((0, JB.c)().lobbyName),
            shownInGame: BB
          }
        }), ["connectedGameChanged"], (0, oB.g)("ShowInCreativeInven")),
        fullInventory: (0, oB.i)(VB, [], (0, oB.h)("useInventory", "useFullInventory"))
      },
      UB = {
        inventoryDropRequested: qB.c.events.inventoryDropRequested,
        chestToggled: qB.c.events.chestToggled,
        chestRefreshed: qB.c.events.chestRefreshed,
        inventorySynced: qB.c.events.inventorySynced,
        enchantingTableOpened: qB.c.events.enchantingTableOpened
      },
      fB = {
        removeInventoryItem: qB.c.commands.removeInventoryItem,
        swapInventorySlots: qB.c.commands.swapInventorySlots,
        moveInventoryItem: qB.c.commands.moveInventoryItem,
        quickMoveInventoryItem: qB.c.commands.quickMoveInventoryItem,
        closeChest: qB.c.commands.closeChest,
        setInventoryOpen(BB) {
          (0, PB.m)(zB.y.InventoryOpen, BB ? zB.y.InventoryOpen : 0)
        },
        focusCrafting: qB.c.commands.focusCrafting,
        craftRecipe: qB.c.commands.craftRecipe,
        salvageItem: qB.c.commands.salvageItem,
        enchantItem: qB.c.commands.enchantItem,
        changeIronChestPasskey(BB) {
          var OB;
          let {
            pos: GB,
            xy: YB
          } = BB;
          null === (OB = (0, MB.j)()) || void 0 === OB || OB.send(lB.c.ChangeIronChestPasskey, (0, lB.h)({
            ZO: GB,
            xy: YB
          }))
        },
        openIronChest(BB) {
          var OB;
          let {
            pos: GB,
            xy: YB
          } = BB;
          null === (OB = (0, MB.j)()) || void 0 === OB || OB.send(lB.c.OpenIronChest, (0, lB.x)({
            ZO: GB,
            xy: YB
          }))
        }
      },
      kB = {
        enchantingOffer: qB.c.queries.enchantingOffer
      }
  },
  41646: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => MB,
      d: () => oB,
      h: () => DB,
      j: () => jB,
      k: () => JB
    });
    class YB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function DB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const QB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function oB(BB) {
      var OB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof YB || DB(BB) && QB.test(null !== (OB = BB.stack) && void 0 !== OB ? OB : "")
    }

    function jB(BB, OB) {
      if (oB(BB)) throw BB;
      console.error(OB, BB)
    }

    function yB(BB, OB, GB, DB, QB) {
      if (OB % DB !== 0 || OB + GB > BB.byteLength) throw new YB(`${QB}: ${GB} bytes at ${OB}, ${DB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function JB(BB, OB, GB, YB, DB) {
      return 0 === GB ? null : (yB(OB, GB, YB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, DB), new BB(OB, GB, YB))
    }

    function MB(BB, OB, GB, YB, DB) {
      return 0 === OB ? null : (yB(BB, OB, GB, YB, DB), new DataView(BB, OB, GB))
    }
  },
  41593: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      h: () => NB,
      j: () => qB,
      m: () => ZB,
      p: () => zB,
      r: () => lB,
      s: () => MB,
      u: () => PB,
      v: () => pB
    });
    class YB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let DB = null,
      QB = null,
      oB = null;
    const jB = [];
    let yB = null;

    function JB(BB, OB) {
      try {
        BB(OB)
      } catch (GB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", GB)
      }
    }

    function MB() {
      return yB
    }

    function PB(BB) {
      jB.push(BB), null !== yB && JB(BB, yB)
    }

    function zB(BB) {
      return DB ??= Promise.all([GB.e(84), GB.e(111), GB.e(86), GB.e(248), GB.e(89), GB.e(220), GB.e(170), GB.e(249), GB.e(109), GB.e(268), GB.e(238), GB.e(300), GB.e(49), GB.e(217), GB.e(233), GB.e(216), GB.e(207), GB.e(208), GB.e(101), GB.e(134), GB.e(274), GB.e(68)]).then((() => GB(45727))).then((OB => {
        OB.loadAudio(BB), yB = OB;
        for (const BB of jB) JB(BB, OB);
        return OB
      })).catch((BB => {
        throw DB = null, BB
      })), DB
    }
    async function lB(BB, OB) {
      try {
        const GB = await zB(BB);
        await GB.loadClientGame(OB)
      } catch (GB) {
        throw new YB(GB)
      }
    }

    function pB(BB, OB) {
      QB = {
        running: BB,
        shell: OB
      }
    }

    function qB() {
      return oB
    }
    async function ZB(BB) {
      const OB = QB;
      if ((null === OB || void 0 === OB ? void 0 : OB.running) !== BB) throw new Error("the core's session has ended");
      const GB = await zB(OB.shell.audio).catch((BB => {
        throw new YB(BB)
      }));
      if (null !== oB) return oB;
      if (QB !== OB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (oB = GB.startGameHost(BB, OB.shell), null === oB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return oB
    }

    function NB() {
      null !== oB && (null !== yB ? yB.endGameHost(oB) : oB.closeGame()), oB = null, QB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);