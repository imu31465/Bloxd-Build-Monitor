export const id = 228;
export const ids = [228];
export const modules = {
  39716: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      e: () => nB
    });
    const QB = "The world isn't loaded, so no blocks can be seen.",
      nB = "The world isn't loaded, so nothing in it can be seen."
  },
  39199: (BB, jB, zB) => {
    function QB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  36893: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      i: () => nB
    });
    let QB = () => null;

    function nB(BB) {
      QB = BB
    }

    function dB(BB, jB) {
      return QB(BB, jB)
    }
  },
  40699: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => mB,
      f: () => LB,
      j: () => GB,
      l: () => yB
    });
    var QB = zB(31),
      nB = zB(40705),
      dB = zB(40695),
      IB = zB(40709),
      NB = zB(40697),
      uB = zB(40713),
      UB = zB(40725);

    function aB(BB) {
      var jB, zB;
      const QB = (0, dB.g)();
      return QB ? null === (jB = (0, nB.c)(QB.api, BB[0], BB[1], BB[2])) || void 0 === jB || null === (zB = jB.persisted) || void 0 === zB ? void 0 : zB.shared : void 0
    }

    function pB(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    const rB = new Map;
    let sB = null,
      JB = 0;

    function mB() {
      return JB
    }

    function yB(BB) {
      const jB = null !== sB && sB.key === pB(BB.pos) ? sB.type : null;
      if (null === jB) return BB;
      let zB = null;
      if ("Iron" === jB) {
        const {
          cachedPasskey: jB,
          ...QB
        } = kB(BB.pos);
        zB = {
          oN: null !== jB && void 0 !== jB ? jB : [0, 0, 0, 0],
          ...QB
        }
      }
      return {
        ...BB,
        type: jB,
        ironChest: zB
      }
    }

    function kB(BB) {
      const jB = aB(BB),
        zB = null === jB || void 0 === jB ? void 0 : jB.ownerDbId,
        QB = function(BB) {
          var jB;
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aB(BB);
          const QB = pB(BB),
            nB = rB.get(QB);
          return nB ? nB.lastOpened < (null !== (jB = null === zB || void 0 === zB ? void 0 : zB.passkeyLastUpdated) && void 0 !== jB ? jB : 0) ? (rB.delete(QB), null) : [...nB.oN] : null
        }(BB, jB);
      return void 0 === zB ? {
        cachedPasskey: QB
      } : {
        ownerDbId: zB,
        cachedPasskey: QB
      }
    }(0, UB.l)(IB.c, (BB => {
      const jB = (0, uB.d)(IB.c, BB);
      if (!(0, uB.c)(jB) || jB.Bd) return;
      if (JB++, !jB.Cn || null === jB.vn) return void(sB = null);
      const zB = pB(jB.vn);
      sB = {
        key: zB,
        type: jB.bn
      }, null !== jB.Rn && rB.set(zB, {
        oN: [...jB.Rn],
        lastOpened: Date.now()
      })
    })), (0, UB.e)((() => {
      rB.clear(), sB = null, JB++
    })), (0, UB.h)((() => {
      null !== sB && (sB = null, JB++, QB.n.Ly("chestToggleFromServer", !1, !0))
    }));
    const GB = {
        boardEditRequested: {
          watch: BB => (0, QB.q)("EditBoard", (jB => {
            let {
              pos: zB
            } = jB;
            if (null === zB) return void BB(null);
            const QB = (0, dB.g)(),
              nB = (0, dB.q)();
            QB && nB && BB(nB.readBoardToEdit(QB.api, QB.chunks, zB))
          }))
        },
        ironChestOpenRequested: {
          watch: BB => (0, QB.q)("OpenIronChest", (jB => {
            let {
              pos: zB
            } = jB;
            BB(function(BB) {
              return {
                pos: BB,
                ...kB(BB)
              }
            }(zB))
          }))
        }
      },
      LB = {
        writeOnBoard(BB) {
          var jB;
          let {
            pos: zB,
            text: QB,
            textSize: nB
          } = BB;
          null === (jB = (0, dB.g)()) || void 0 === jB || jB.send(NB.e.UpdateBoard, (0, NB.T)({
            iu: zB,
            qu: QB,
            fu: nB
          }))
        },
        writeBook(BB) {
          var jB;
          let {
            pages: zB,
            title: QB,
            published: nB
          } = BB;
          null === (jB = (0, dB.g)()) || void 0 === jB || jB.send(NB.e.UpdateBook, (0, NB.X)({
            jN: zB,
            zN: QB,
            QN: nB
          }))
        },
        writeNameTag(BB) {
          var jB;
          null === (jB = (0, dB.g)()) || void 0 === jB || jB.send(NB.e.UpdateNameTag, BB)
        },
        setCustomLobbyBlock(BB) {
          let {
            pos: jB,
            blockName: zB
          } = BB;
          const QB = (0, dB.q)(),
            nB = (0, dB.g)();
          QB && nB && nB.send(NB.e.SetCustomLobbyBlock, (0, NB.G)({
            dN: QB.blockIdOf(zB),
            nN: jB
          }))
        }
      }
  },
  40740: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => uB,
      i: () => IB,
      l: () => NB
    });
    var QB = zB(40682),
      nB = zB(4873),
      dB = zB(40695);

    function IB() {
      var BB;
      const jB = null === (BB = (0, dB.g)()) || void 0 === BB ? void 0 : BB.api.localId;
      return void 0 === jB || jB === QB.kd ? null : String(jB)
    }

    function NB(BB) {
      const jB = (0, dB.g)();
      if (null !== jB) return BB(jB);
      let zB = null;
      const QB = (0, nB.u)((() => {
        const jB = (0, dB.g)();
        null !== jB && null === zB && (QB(), zB = BB(jB))
      }));
      return () => {
        var BB;
        QB(), null === (BB = zB) || void 0 === BB || BB()
      }
    }

    function uB(BB, jB, zB) {
      return {
        current: () => {
          const zB = (0, dB.g)();
          return null === zB ? jB : BB(zB)()
        },
        watch: jB => NB((QB => {
          const nB = BB(QB);
          let dB = nB();
          return jB(dB), zB((() => {
            const BB = nB();
            BB !== dB && (dB = BB, jB(BB))
          }))
        }))
      }
    }
  },
  40734: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB
    });
    var QB = zB(40695),
      nB = zB(40740),
      dB = zB(40744);

    function IB() {
      var BB, jB;
      return null !== (BB = null === (jB = (0, QB.g)()) || void 0 === jB ? void 0 : jB.itemBridgeSources) && void 0 !== BB ? BB : dB.d
    }

    function NB(BB) {
      return {
        current: () => IB().states[BB].current(),
        watch: jB => (0, nB.l)((zB => {
          const QB = zB.itemBridgeSources.states[BB];
          return jB(QB.current()), QB.watch(jB)
        }))
      }
    }

    function uB(BB) {
      return {
        watch: jB => (0, nB.l)((zB => zB.itemBridgeSources.events[BB].watch(jB)))
      }
    }
    const UB = {
      states: {
        inventory: NB("inventory"),
        hotbar: NB("hotbar"),
        crafting: NB("crafting"),
        heldItemAim: NB("heldItemAim")
      },
      events: {
        hotbarSlotRequested: uB("hotbarSlotRequested"),
        hotbarScrolled: uB("hotbarScrolled"),
        numberKeyPressed: uB("numberKeyPressed"),
        inventoryDropRequested: uB("inventoryDropRequested"),
        chestToggled: uB("chestToggled"),
        chestRefreshed: uB("chestRefreshed"),
        inventorySynced: uB("inventorySynced"),
        enchantingTableOpened: uB("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: BB => IB().commands.selectHotbarSlot(BB),
        removeInventoryItem: BB => IB().commands.removeInventoryItem(BB),
        swapInventorySlots: BB => IB().commands.swapInventorySlots(BB),
        moveInventoryItem: BB => IB().commands.moveInventoryItem(BB),
        quickMoveInventoryItem: BB => IB().commands.quickMoveInventoryItem(BB),
        closeChest: BB => IB().commands.closeChest(BB),
        focusCrafting: BB => IB().commands.focusCrafting(BB),
        craftRecipe: BB => IB().commands.craftRecipe(BB),
        salvageItem: BB => IB().commands.salvageItem(BB),
        enchantItem: BB => IB().commands.enchantItem(BB)
      },
      queries: {
        enchantingOffer: BB => IB().queries.enchantingOffer(BB)
      }
    }
  },
  40744: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    var QB = zB(39716);

    function nB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function dB() {}
    const IB = Object.freeze([0, 0, 0]),
      NB = {
        states: {
          health: nB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: nB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: nB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: nB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: nB({}),
          creativeVisibility: nB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: nB(null),
          heldItemAim: nB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: nB(!1),
          gliderBoostFuel: nB(0),
          flight: nB({
            canFly: !1,
            flying: !1
          }),
          crafting: nB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: nB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: nB({}),
          fullInventory: nB(!1),
          crosshairTarget: nB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: nB(!0),
          freeCamera: nB({
            allowed: !1,
            movesFly: !1
          }),
          replay: nB(null),
          replayEdits: nB(null),
          replayRecorder: nB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: nB(!1)
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
          selectHotbarSlot: dB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: dB,
          setInventoryOpen: dB,
          changeIronChestPasskey: dB,
          dragReplayCamera: dB,
          applyTemporaryThirdPerson: dB,
          holdEmoteWheel: dB,
          recordFlyingMiddleText: dB,
          focusCrafting: dB,
          craftRecipe: () => ({
            fa: 0,
            zu: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: dB,
          setShopOpen: dB,
          buyShopItem: dB,
          lobbyManage: dB,
          sendChatMessage: dB,
          ignorePlayer: dB,
          reportPlayer: dB,
          reportWorldCodeChat: dB,
          requestDiscordReportKey: dB,
          reportLobbyOrGame: dB,
          playEmote: dB,
          updateMyCosmetic: dB,
          writeOnBoard: dB,
          writeBook: dB,
          writeNameTag: dB,
          setCustomLobbyBlock: dB,
          openIronChest: dB,
          sendCodeCollab: dB,
          clickCodeBlock: dB,
          bindCustomButtonKeys: dB,
          pressCustomButton: dB,
          moveReplayFreecam: dB,
          holdReplayFreecamVertical: dB,
          respawn: dB,
          wakeUp: dB,
          requestLeaderboard: dB,
          completeTask: dB,
          setServerCookie: dB,
          answerUiRequest: dB,
          chooseRewardedAd: dB,
          setCameraZoom: dB,
          setFreeCameraMovesFly: dB,
          setBlockHighlight: dB,
          setCrosshairInteractPrompt: dB,
          setLookSensitivity: dB,
          replayAction: dB,
          setReplayPlaying: dB,
          seekReplay: dB,
          setReplayCameraMode: dB,
          syncReplayCameraMode: dB,
          setReplayCameraKeyframe: dB,
          moveReplayCameraKeyframe: dB,
          deleteReplayCameraKeyframes: dB,
          setReplayPlaybackMark: dB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: dB,
          exportReplayVideo: dB,
          toggleRecording: dB,
          saveClip: dB,
          setRecorderPrefs: dB,
          setReplayViewerOpen: dB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => QB.b,
          worldCodeAiGameState: () => QB.e
        },
        lookups: {
          localPos: () => IB,
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
  40686: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => iB,
      e: () => EB,
      h: () => qB,
      k: () => MB,
      m: () => tB
    });
    var QB = zB(39330),
      nB = zB(1263),
      dB = zB(2006),
      IB = zB(2022),
      NB = zB(3402),
      uB = zB(36893),
      UB = zB(1357),
      aB = zB(40695),
      pB = zB(4909),
      rB = zB(2482),
      sB = zB(40697),
      JB = zB(40699),
      mB = zB(40734);
    let yB = null;

    function kB(BB) {
      const jB = new Map,
        zB = zB => {
          if ("string" !== typeof zB) return;
          let QB = jB.get(zB);
          return void 0 === QB && (QB = BB(zB), void 0 !== QB && jB.set(zB, QB)), QB
        };
      return new Proxy({}, {
        get: (BB, jB) => zB(jB),
        has: (BB, jB) => void 0 !== zB(jB)
      })
    }

    function GB(BB) {
      const jB = (0, NB.c)(BB);
      return void 0 !== jB && (0, NB.e)(jB) === BB
    }

    function LB(BB) {
      var jB;
      const zB = null === (jB = (0, aB.g)()) || void 0 === jB ? void 0 : jB.tables;
      if (void 0 === zB || !GB(BB)) return;
      const QB = {
          displayName: zB.getDisplayName(BB)
        },
        nB = zB.getItemStat(BB, "description");
      void 0 !== nB && null !== nB && (QB.description = nB);
      const {
        rootName: dB
      } = zB.getMetaInfo(BB);
      dB !== BB && (QB.rootName = dB);
      const IB = zB.getItemStat(BB, "armourReduction");
      return void 0 !== IB && null !== IB && (QB.armourReduction = IB), QB
    }(0, aB.r)((BB => {
      yB = BB
    }));
    const gB = (0, IB.j)("DisplayName", "Description");

    function tB() {
      return Boolean(dB.c.get("useInventory") && dB.c.get("useFullInventory"))
    }
    let SB = null;
    const MB = {
        inventory: function() {
          const BB = mB.c.states.inventory;
          let jB = null;
          const zB = BB => {
            var zB;
            return null === BB.chest ? BB : ((null === (zB = jB) || void 0 === zB ? void 0 : zB.from) === BB && jB.chestVersion === (0, JB.d)() || (jB = {
              from: BB,
              chestVersion: (0, JB.d)(),
              view: {
                ...BB,
                chest: (0, JB.l)(BB.chest)
              }
            }), jB.view)
          };
          return {
            current: () => zB(BB.current()),
            watch: jB => BB.watch((BB => {
              jB(zB(BB))
            }))
          }
        }(),
        crafting: mB.c.states.crafting,
        stationItems: {
          current() {
            var BB;
            return (null === (BB = SB) || void 0 === BB ? void 0 : BB.namesVersion) !== (0, NB.f)() && (SB = {
              namesVersion: (0, NB.f)(),
              items: {
                enchantable: kB((BB => {
                  const jB = (0, NB.c)(BB);
                  return void 0 !== jB && null !== yB && yB.enchantmentPerksOf(jB).length > 0 || void 0
                })),
                salvageable: kB((BB => !(!GB(BB) || null === (0, uB.e)(BB)) || void 0))
              }
            }), SB.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let BB = null;
          const jB = () => {
            var jB;
            return (null === (jB = BB) || void 0 === jB ? void 0 : jB.namesVersion) !== (0, NB.f)() && (BB = {
              namesVersion: (0, NB.f)(),
              infos: kB(LB)
            }), BB.infos
          };
          return {
            current: jB,
            watch: zB => (0, IB.t)((QB => {
              QB.some(gB) && (BB = null, zB(jB()))
            }))
          }
        }(),
        creativeVisibility: (0, IB.o)((function() {
          const BB = {};
          for (const nB of null !== (jB = null === (zB = yB) || void 0 === zB ? void 0 : zB.creativeItemIds()) && void 0 !== jB ? jB : []) {
            var jB, zB, IB, uB;
            const UB = (0, NB.e)(nB);
            if (void 0 === UB) continue;
            const aB = null !== (IB = dB.c.get((0, QB.g)(UB, "showInCreativeInven"))) && void 0 !== IB ? IB : null === (uB = yB) || void 0 === uB ? void 0 : uB.showInCreativeInvenOf(nB);
            "boolean" === typeof aB && (BB[UB] = aB)
          }
          return {
            publicLobby: (0, nB.E)((0, UB.d)().lobbyName),
            shownInGame: BB
          }
        }), ["connectedGameChanged"], (0, IB.j)("ShowInCreativeInven")),
        fullInventory: (0, IB.o)(tB, [], (0, IB.l)("useInventory", "useFullInventory"))
      },
      EB = {
        inventoryDropRequested: mB.c.events.inventoryDropRequested,
        chestToggled: mB.c.events.chestToggled,
        chestRefreshed: mB.c.events.chestRefreshed,
        inventorySynced: mB.c.events.inventorySynced,
        enchantingTableOpened: mB.c.events.enchantingTableOpened
      },
      iB = {
        removeInventoryItem: mB.c.commands.removeInventoryItem,
        swapInventorySlots: mB.c.commands.swapInventorySlots,
        moveInventoryItem: mB.c.commands.moveInventoryItem,
        quickMoveInventoryItem: mB.c.commands.quickMoveInventoryItem,
        closeChest: mB.c.commands.closeChest,
        setInventoryOpen(BB) {
          (0, pB.l)(rB.t.InventoryOpen, BB ? rB.t.InventoryOpen : 0)
        },
        focusCrafting: mB.c.commands.focusCrafting,
        craftRecipe: mB.c.commands.craftRecipe,
        salvageItem: mB.c.commands.salvageItem,
        enchantItem: mB.c.commands.enchantItem,
        changeIronChestPasskey(BB) {
          var jB;
          let {
            pos: zB,
            oN: QB
          } = BB;
          null === (jB = (0, aB.g)()) || void 0 === jB || jB.send(sB.e.ChangeIronChestPasskey, (0, sB.j)({
            vn: zB,
            oN: QB
          }))
        },
        openIronChest(BB) {
          var jB;
          let {
            pos: zB,
            oN: QB
          } = BB;
          null === (jB = (0, aB.g)()) || void 0 === jB || jB.send(sB.e.OpenIronChest, (0, sB.B)({
            vn: zB,
            oN: QB
          }))
        }
      },
      qB = {
        enchantingOffer: mB.c.queries.enchantingOffer
      }
  },
  40730: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      g: () => aB,
      i: () => IB,
      l: () => nB,
      p: () => NB,
      t: () => UB
    });
    class QB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function nB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const dB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function IB(BB) {
      var jB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof QB || nB(BB) && dB.test(null !== (jB = BB.stack) && void 0 !== jB ? jB : "")
    }

    function NB(BB, jB) {
      if (IB(BB)) throw BB;
      console.error(jB, BB)
    }

    function uB(BB, jB, zB, nB, dB) {
      if (jB % nB !== 0 || jB + zB > BB.byteLength) throw new QB(`${dB}: ${zB} bytes at ${jB}, ${nB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function UB(BB, jB, zB, QB, nB) {
      return 0 === zB ? null : (uB(jB, zB, QB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, nB), new BB(jB, zB, QB))
    }

    function aB(BB, jB, zB, QB, nB) {
      return 0 === jB ? null : (uB(BB, jB, zB, QB, nB), new DataView(BB, jB, zB))
    }
  },
  40695: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      f: () => kB,
      g: () => mB,
      j: () => yB,
      m: () => rB,
      o: () => sB,
      q: () => aB,
      r: () => pB,
      t: () => JB
    });
    class QB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let nB = null,
      dB = null,
      IB = null;
    const NB = [];
    let uB = null;

    function UB(BB, jB) {
      try {
        BB(jB)
      } catch (zB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", zB)
      }
    }

    function aB() {
      return uB
    }

    function pB(BB) {
      NB.push(BB), null !== uB && UB(BB, uB)
    }

    function rB(BB) {
      return nB ??= Promise.all([zB.e(73), zB.e(98), zB.e(226), zB.e(78), zB.e(227), zB.e(201), zB.e(97), zB.e(246), zB.e(273), zB.e(199), zB.e(214), zB.e(191), zB.e(198), zB.e(193), zB.e(144), zB.e(88), zB.e(122), zB.e(252), zB.e(57)]).then((() => zB(42718))).then((jB => {
        jB.loadAudio(BB), uB = jB;
        for (const BB of NB) UB(BB, jB);
        return jB
      })).catch((BB => {
        throw nB = null, BB
      })), nB
    }
    async function sB(BB, jB) {
      try {
        const zB = await rB(BB);
        await zB.loadClientGame(jB)
      } catch (zB) {
        throw new QB(zB)
      }
    }

    function JB(BB, jB) {
      dB = {
        running: BB,
        shell: jB
      }
    }

    function mB() {
      return IB
    }
    async function yB(BB) {
      const jB = dB;
      if ((null === jB || void 0 === jB ? void 0 : jB.running) !== BB) throw new Error("the core's session has ended");
      const zB = await rB(jB.shell.audio).catch((BB => {
        throw new QB(BB)
      }));
      if (null !== IB) return IB;
      if (dB !== jB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (IB = zB.startGameHost(BB, jB.shell), null === IB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return IB
    }

    function kB() {
      null !== IB && (null !== uB ? uB.endGameHost(IB) : IB.closeGame()), IB = null, dB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);