export const id = 228;
export const ids = [228];
export const modules = {
  39701: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => JB
    });
    const TB = "The world isn't loaded, so no blocks can be seen.",
      JB = "The world isn't loaded, so nothing in it can be seen."
  },
  39175: (BB, IB, ZB) => {
    function TB(BB) {
      return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  36843: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      d: () => JB
    });
    let TB = () => null;

    function JB(BB) {
      TB = BB
    }

    function oB(BB, IB) {
      return TB(BB, IB)
    }
  },
  40658: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => gB,
      f: () => WB,
      h: () => UB,
      j: () => qB
    });
    var TB = ZB(24),
      JB = ZB(40664),
      oB = ZB(40643),
      GB = ZB(40666),
      vB = ZB(40649),
      kB = ZB(40675),
      cB = ZB(40692);

    function nB(BB) {
      var IB, ZB;
      const TB = (0, oB.j)();
      return TB ? null === (IB = (0, JB.d)(TB.api, BB[0], BB[1], BB[2])) || void 0 === IB || null === (ZB = IB.persisted) || void 0 === ZB ? void 0 : ZB.shared : void 0
    }

    function hB(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    const zB = new Map;
    let FB = null,
      NB = 0;

    function gB() {
      return NB
    }

    function qB(BB) {
      const IB = null !== FB && FB.key === hB(BB.pos) ? FB.type : null;
      if (null === IB) return BB;
      let ZB = null;
      if ("Iron" === IB) {
        const {
          cachedPasskey: IB,
          ...TB
        } = yB(BB.pos);
        ZB = {
          Cv: null !== IB && void 0 !== IB ? IB : [0, 0, 0, 0],
          ...TB
        }
      }
      return {
        ...BB,
        type: IB,
        ironChest: ZB
      }
    }

    function yB(BB) {
      const IB = nB(BB),
        ZB = null === IB || void 0 === IB ? void 0 : IB.ownerDbId,
        TB = function(BB) {
          var IB;
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB(BB);
          const TB = hB(BB),
            JB = zB.get(TB);
          return JB ? JB.lastOpened < (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.passkeyLastUpdated) && void 0 !== IB ? IB : 0) ? (zB.delete(TB), null) : [...JB.Cv] : null
        }(BB, IB);
      return void 0 === ZB ? {
        cachedPasskey: TB
      } : {
        ownerDbId: ZB,
        cachedPasskey: TB
      }
    }(0, cB.l)(GB.c, (BB => {
      const IB = (0, kB.e)(GB.c, BB);
      if (!(0, kB.d)(IB) || IB.eJ) return;
      if (NB++, !IB.RJ || null === IB.XJ) return void(FB = null);
      const ZB = hB(IB.XJ);
      FB = {
        key: ZB,
        type: IB.mJ
      }, null !== IB.LJ && zB.set(ZB, {
        Cv: [...IB.LJ],
        lastOpened: Date.now()
      })
    })), (0, cB.g)((() => {
      zB.clear(), FB = null, NB++
    })), (0, cB.j)((() => {
      null !== FB && (FB = null, NB++, TB.l.Gq("chestToggleFromServer", !1, !0))
    }));
    const UB = {
        boardEditRequested: {
          watch: BB => (0, TB.p)("EditBoard", (IB => {
            let {
              pos: ZB
            } = IB;
            if (null === ZB) return void BB(null);
            const TB = (0, oB.j)(),
              JB = (0, oB.q)();
            TB && JB && BB(JB.readBoardToEdit(TB.api, TB.chunks, ZB))
          }))
        },
        ironChestOpenRequested: {
          watch: BB => (0, TB.p)("OpenIronChest", (IB => {
            let {
              pos: ZB
            } = IB;
            BB(function(BB) {
              return {
                pos: BB,
                ...yB(BB)
              }
            }(ZB))
          }))
        }
      },
      WB = {
        writeOnBoard(BB) {
          var IB;
          let {
            pos: ZB,
            text: TB,
            textSize: JB
          } = BB;
          null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateBoard, (0, vB.M)({
            Wk: ZB,
            Ck: TB,
            Qk: JB
          }))
        },
        writeBook(BB) {
          var IB;
          let {
            pages: ZB,
            title: TB,
            published: JB
          } = BB;
          null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateBook, (0, vB.N)({
            bG: ZB,
            xG: TB,
            EG: JB
          }))
        },
        writeNameTag(BB) {
          var IB;
          null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateNameTag, BB)
        },
        setCustomLobbyBlock(BB) {
          let {
            pos: IB,
            blockName: ZB
          } = BB;
          const TB = (0, oB.q)(),
            JB = (0, oB.j)();
          TB && JB && JB.send(vB.e.SetCustomLobbyBlock, (0, vB.D)({
            KG: TB.blockIdOf(ZB),
            DG: IB
          }))
        }
      }
  },
  40710: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => kB,
      h: () => GB,
      k: () => vB
    });
    var TB = ZB(40633),
      JB = ZB(4958),
      oB = ZB(40643);

    function GB() {
      var BB;
      const IB = null === (BB = (0, oB.j)()) || void 0 === BB ? void 0 : BB.api.localId;
      return void 0 === IB || IB === TB.Rc ? null : String(IB)
    }

    function vB(BB) {
      const IB = (0, oB.j)();
      if (null !== IB) return BB(IB);
      let ZB = null;
      const TB = (0, JB.s)((() => {
        const IB = (0, oB.j)();
        null !== IB && null === ZB && (TB(), ZB = BB(IB))
      }));
      return () => {
        var BB;
        TB(), null === (BB = ZB) || void 0 === BB || BB()
      }
    }

    function kB(BB, IB, ZB) {
      return {
        current: () => {
          const ZB = (0, oB.j)();
          return null === ZB ? IB : BB(ZB)()
        },
        watch: IB => vB((TB => {
          const JB = BB(TB);
          let oB = JB();
          return IB(oB), ZB((() => {
            const BB = JB();
            BB !== oB && (oB = BB, IB(BB))
          }))
        }))
      }
    }
  },
  40705: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(40643),
      JB = ZB(40710),
      oB = ZB(40715);

    function GB() {
      var BB, IB;
      return null !== (BB = null === (IB = (0, TB.j)()) || void 0 === IB ? void 0 : IB.itemBridgeSources) && void 0 !== BB ? BB : oB.b
    }

    function vB(BB) {
      return {
        current: () => GB().states[BB].current(),
        watch: IB => (0, JB.k)((ZB => {
          const TB = ZB.itemBridgeSources.states[BB];
          return IB(TB.current()), TB.watch(IB)
        }))
      }
    }

    function kB(BB) {
      return {
        watch: IB => (0, JB.k)((ZB => ZB.itemBridgeSources.events[BB].watch(IB)))
      }
    }
    const cB = {
      states: {
        inventory: vB("inventory"),
        hotbar: vB("hotbar"),
        crafting: vB("crafting"),
        heldItemAim: vB("heldItemAim")
      },
      events: {
        hotbarSlotRequested: kB("hotbarSlotRequested"),
        hotbarScrolled: kB("hotbarScrolled"),
        numberKeyPressed: kB("numberKeyPressed"),
        inventoryDropRequested: kB("inventoryDropRequested"),
        chestToggled: kB("chestToggled"),
        chestRefreshed: kB("chestRefreshed"),
        inventorySynced: kB("inventorySynced"),
        enchantingTableOpened: kB("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: BB => GB().commands.selectHotbarSlot(BB),
        removeInventoryItem: BB => GB().commands.removeInventoryItem(BB),
        swapInventorySlots: BB => GB().commands.swapInventorySlots(BB),
        moveInventoryItem: BB => GB().commands.moveInventoryItem(BB),
        quickMoveInventoryItem: BB => GB().commands.quickMoveInventoryItem(BB),
        closeChest: BB => GB().commands.closeChest(BB),
        focusCrafting: BB => GB().commands.focusCrafting(BB),
        craftRecipe: BB => GB().commands.craftRecipe(BB),
        salvageItem: BB => GB().commands.salvageItem(BB),
        enchantItem: BB => GB().commands.enchantItem(BB)
      },
      queries: {
        enchantingOffer: BB => GB().queries.enchantingOffer(BB)
      }
    }
  },
  40715: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB
    });
    var TB = ZB(39701);

    function JB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function oB() {}
    const GB = Object.freeze([0, 0, 0]),
      vB = {
        states: {
          health: JB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: JB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: JB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: JB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: JB({}),
          creativeVisibility: JB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: JB(null),
          heldItemAim: JB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: JB(!1),
          gliderBoostFuel: JB(0),
          flight: JB({
            canFly: !1,
            flying: !1
          }),
          crafting: JB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: JB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: JB({}),
          fullInventory: JB(!1),
          crosshairTarget: JB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: JB(!0),
          freeCamera: JB({
            allowed: !1,
            movesFly: !1
          }),
          replay: JB(null),
          replayEdits: JB(null),
          replayRecorder: JB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: JB(!1)
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
            Hn: 0,
            Dv: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oB,
          setShopOpen: oB,
          buyShopItem: oB,
          lobbyManage: oB,
          sendChatMessage: oB,
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
          worldCodeAiChunk: () => TB.d,
          worldCodeAiGameState: () => TB.g
        },
        lookups: {
          localPos: () => GB,
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
  40640: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => OB,
      g: () => wB,
      j: () => YB,
      n: () => sB,
      p: () => CB
    });
    var TB = ZB(39308),
      JB = ZB(1281),
      oB = ZB(2029),
      GB = ZB(2046),
      vB = ZB(3461),
      kB = ZB(36843),
      cB = ZB(1382),
      nB = ZB(40643),
      hB = ZB(4990),
      zB = ZB(2481),
      FB = ZB(40649),
      NB = ZB(40658),
      gB = ZB(40705);
    let qB = null;

    function yB(BB) {
      const IB = new Map,
        ZB = ZB => {
          if ("string" !== typeof ZB) return;
          let TB = IB.get(ZB);
          return void 0 === TB && (TB = BB(ZB), void 0 !== TB && IB.set(ZB, TB)), TB
        };
      return new Proxy({}, {
        get: (BB, IB) => ZB(IB),
        has: (BB, IB) => void 0 !== ZB(IB)
      })
    }

    function UB(BB) {
      const IB = (0, vB.c)(BB);
      return void 0 !== IB && (0, vB.e)(IB) === BB
    }

    function WB(BB) {
      var IB;
      const ZB = null === (IB = (0, nB.j)()) || void 0 === IB ? void 0 : IB.tables;
      if (void 0 === ZB || !UB(BB)) return;
      const TB = {
          displayName: ZB.getDisplayName(BB)
        },
        JB = ZB.getItemStat(BB, "description");
      void 0 !== JB && null !== JB && (TB.description = JB);
      const {
        rootName: oB
      } = ZB.getMetaInfo(BB);
      oB !== BB && (TB.rootName = oB);
      const GB = ZB.getItemStat(BB, "armourReduction");
      return void 0 !== GB && null !== GB && (TB.armourReduction = GB), TB
    }(0, nB.t)((BB => {
      qB = BB
    }));
    const dB = (0, GB.d)("DisplayName", "Description");

    function CB() {
      return Boolean(oB.c.get("useInventory") && oB.c.get("useFullInventory"))
    }
    let QB = null;
    const sB = {
        inventory: function() {
          const BB = gB.c.states.inventory;
          let IB = null;
          const ZB = BB => {
            var ZB;
            return null === BB.chest ? BB : ((null === (ZB = IB) || void 0 === ZB ? void 0 : ZB.from) === BB && IB.chestVersion === (0, NB.e)() || (IB = {
              from: BB,
              chestVersion: (0, NB.e)(),
              view: {
                ...BB,
                chest: (0, NB.j)(BB.chest)
              }
            }), IB.view)
          };
          return {
            current: () => ZB(BB.current()),
            watch: IB => BB.watch((BB => {
              IB(ZB(BB))
            }))
          }
        }(),
        crafting: gB.c.states.crafting,
        stationItems: {
          current() {
            var BB;
            return (null === (BB = QB) || void 0 === BB ? void 0 : BB.namesVersion) !== (0, vB.g)() && (QB = {
              namesVersion: (0, vB.g)(),
              items: {
                enchantable: yB((BB => {
                  const IB = (0, vB.c)(BB);
                  return void 0 !== IB && null !== qB && qB.enchantmentPerksOf(IB).length > 0 || void 0
                })),
                salvageable: yB((BB => !(!UB(BB) || null === (0, kB.b)(BB)) || void 0))
              }
            }), QB.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let BB = null;
          const IB = () => {
            var IB;
            return (null === (IB = BB) || void 0 === IB ? void 0 : IB.namesVersion) !== (0, vB.g)() && (BB = {
              namesVersion: (0, vB.g)(),
              infos: yB(WB)
            }), BB.infos
          };
          return {
            current: IB,
            watch: ZB => (0, GB.o)((TB => {
              TB.some(dB) && (BB = null, ZB(IB()))
            }))
          }
        }(),
        creativeVisibility: (0, GB.h)((function() {
          const BB = {};
          for (const JB of null !== (IB = null === (ZB = qB) || void 0 === ZB ? void 0 : ZB.creativeItemIds()) && void 0 !== IB ? IB : []) {
            var IB, ZB, GB, kB;
            const cB = (0, vB.e)(JB);
            if (void 0 === cB) continue;
            const nB = null !== (GB = oB.c.get((0, TB.g)(cB, "showInCreativeInven"))) && void 0 !== GB ? GB : null === (kB = qB) || void 0 === kB ? void 0 : kB.showInCreativeInvenOf(JB);
            "boolean" === typeof nB && (BB[cB] = nB)
          }
          return {
            publicLobby: (0, JB.G)((0, cB.c)().lobbyName),
            shownInGame: BB
          }
        }), ["connectedGameChanged"], (0, GB.d)("ShowInCreativeInven")),
        fullInventory: (0, GB.h)(CB, [], (0, GB.f)("useInventory", "useFullInventory"))
      },
      wB = {
        inventoryDropRequested: gB.c.events.inventoryDropRequested,
        chestToggled: gB.c.events.chestToggled,
        chestRefreshed: gB.c.events.chestRefreshed,
        inventorySynced: gB.c.events.inventorySynced,
        enchantingTableOpened: gB.c.events.enchantingTableOpened
      },
      OB = {
        removeInventoryItem: gB.c.commands.removeInventoryItem,
        swapInventorySlots: gB.c.commands.swapInventorySlots,
        moveInventoryItem: gB.c.commands.moveInventoryItem,
        quickMoveInventoryItem: gB.c.commands.quickMoveInventoryItem,
        closeChest: gB.c.commands.closeChest,
        setInventoryOpen(BB) {
          (0, hB.f)(zB.o.InventoryOpen, BB ? zB.o.InventoryOpen : 0)
        },
        focusCrafting: gB.c.commands.focusCrafting,
        craftRecipe: gB.c.commands.craftRecipe,
        salvageItem: gB.c.commands.salvageItem,
        enchantItem: gB.c.commands.enchantItem,
        changeIronChestPasskey(BB) {
          var IB;
          let {
            pos: ZB,
            Cv: TB
          } = BB;
          null === (IB = (0, nB.j)()) || void 0 === IB || IB.send(FB.e.ChangeIronChestPasskey, (0, FB.k)({
            XJ: ZB,
            Cv: TB
          }))
        },
        openIronChest(BB) {
          var IB;
          let {
            pos: ZB,
            Cv: TB
          } = BB;
          null === (IB = (0, nB.j)()) || void 0 === IB || IB.send(FB.e.OpenIronChest, (0, FB.y)({
            XJ: ZB,
            Cv: TB
          }))
        }
      },
      YB = {
        enchantingOffer: gB.c.queries.enchantingOffer
      }
  },
  40701: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB,
      g: () => nB,
      k: () => GB,
      n: () => JB,
      r: () => vB,
      u: () => cB
    });
    class TB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function JB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const oB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function GB(BB) {
      var IB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof TB || JB(BB) && oB.test(null !== (IB = BB.stack) && void 0 !== IB ? IB : "")
    }

    function vB(BB, IB) {
      if (GB(BB)) throw BB;
      console.error(IB, BB)
    }

    function kB(BB, IB, ZB, JB, oB) {
      if (IB % JB !== 0 || IB + ZB > BB.byteLength) throw new TB(`${oB}: ${ZB} bytes at ${IB}, ${JB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function cB(BB, IB, ZB, TB, JB) {
      return 0 === ZB ? null : (kB(IB, ZB, TB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, JB), new BB(IB, ZB, TB))
    }

    function nB(BB, IB, ZB, TB, JB) {
      return 0 === IB ? null : (kB(BB, IB, ZB, TB, JB), new DataView(BB, IB, ZB))
    }
  },
  40643: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      f: () => yB,
      j: () => gB,
      k: () => qB,
      m: () => zB,
      n: () => FB,
      q: () => nB,
      t: () => hB,
      v: () => NB
    });
    class TB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let JB = null,
      oB = null,
      GB = null;
    const vB = [];
    let kB = null;

    function cB(BB, IB) {
      try {
        BB(IB)
      } catch (ZB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZB)
      }
    }

    function nB() {
      return kB
    }

    function hB(BB) {
      vB.push(BB), null !== kB && cB(BB, kB)
    }

    function zB(BB) {
      return JB ??= Promise.all([ZB.e(73), ZB.e(98), ZB.e(226), ZB.e(78), ZB.e(227), ZB.e(201), ZB.e(97), ZB.e(246), ZB.e(273), ZB.e(199), ZB.e(214), ZB.e(191), ZB.e(198), ZB.e(193), ZB.e(144), ZB.e(88), ZB.e(122), ZB.e(252), ZB.e(57)]).then((() => ZB(42579))).then((IB => {
        IB.loadAudio(BB), kB = IB;
        for (const BB of vB) cB(BB, IB);
        return IB
      })).catch((BB => {
        throw JB = null, BB
      })), JB
    }
    async function FB(BB, IB) {
      try {
        const ZB = await zB(BB);
        await ZB.loadClientGame(IB)
      } catch (ZB) {
        throw new TB(ZB)
      }
    }

    function NB(BB, IB) {
      oB = {
        running: BB,
        shell: IB
      }
    }

    function gB() {
      return GB
    }
    async function qB(BB) {
      const IB = oB;
      if ((null === IB || void 0 === IB ? void 0 : IB.running) !== BB) throw new Error("the core's session has ended");
      const ZB = await zB(IB.shell.audio).catch((BB => {
        throw new TB(BB)
      }));
      if (null !== GB) return GB;
      if (oB !== IB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (GB = ZB.startGameHost(BB, IB.shell), null === GB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return GB
    }

    function yB() {
      null !== GB && (null !== kB ? kB.endGameHost(GB) : GB.closeGame()), GB = null, oB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);