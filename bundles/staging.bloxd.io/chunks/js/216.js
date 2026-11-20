export const id = 216;
export const ids = [216];
export const modules = {
  39203: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      e: () => tk
    });
    const Rk = "The world isn't loaded, so no blocks can be seen.",
      tk = "The world isn't loaded, so nothing in it can be seen."
  },
  36480: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => tk
    });
    let Rk = () => null;

    function tk(kk) {
      Rk = kk
    }

    function ak(kk, Fk) {
      return Rk(kk, Fk)
    }
  },
  40023: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => yk,
      f: () => vk,
      g: () => Wk,
      j: () => fk
    });
    var Rk = Bk(29),
      tk = Bk(40029),
      ak = Bk(40015),
      Xk = Bk(40037),
      bk = Bk(40021),
      wk = Bk(40043),
      dk = Bk(40063);

    function sk(kk) {
      var Fk, Bk;
      const Rk = (0, ak.g)();
      return Rk ? null === (Fk = (0, tk.c)(Rk.api, kk[0], kk[1], kk[2])) || void 0 === Fk || null === (Bk = Fk.persisted) || void 0 === Bk ? void 0 : Bk.shared : void 0
    }

    function Vk(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    const Jk = new Map;
    let Ak = null,
      ek = 0;

    function yk() {
      return ek
    }

    function fk(kk) {
      const Fk = null !== Ak && Ak.key === Vk(kk.pos) ? Ak.type : null;
      if (null === Fk) return kk;
      let Bk = null;
      if ("Iron" === Fk) {
        const {
          cachedPasskey: Fk,
          ...Rk
        } = mk(kk.pos);
        Bk = {
          Gd: null !== Fk && void 0 !== Fk ? Fk : [0, 0, 0, 0],
          ...Rk
        }
      }
      return {
        ...kk,
        type: Fk,
        ironChest: Bk
      }
    }

    function mk(kk) {
      const Fk = sk(kk),
        Bk = null === Fk || void 0 === Fk ? void 0 : Fk.ownerDbId,
        Rk = function(kk) {
          var Fk;
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sk(kk);
          const Rk = Vk(kk),
            tk = Jk.get(Rk);
          return tk ? tk.lastOpened < (null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.passkeyLastUpdated) && void 0 !== Fk ? Fk : 0) ? (Jk.delete(Rk), null) : [...tk.Gd] : null
        }(kk, Fk);
      return void 0 === Bk ? {
        cachedPasskey: Rk
      } : {
        ownerDbId: Bk,
        cachedPasskey: Rk
      }
    }(0, dk.k)(Xk.b, (kk => {
      const Fk = (0, wk.f)(Xk.b, kk);
      if (!(0, wk.e)(Fk) || Fk.la) return;
      if (ek++, !Fk.Ca || null === Fk.xa) return void(Ak = null);
      const Bk = Vk(Fk.xa);
      Ak = {
        key: Bk,
        type: Fk.Ka
      }, null !== Fk.ja && Jk.set(Bk, {
        Gd: [...Fk.ja],
        lastOpened: Date.now()
      })
    })), (0, dk.d)((() => {
      Jk.clear(), Ak = null, ek++
    })), (0, dk.g)((() => {
      null !== Ak && (Ak = null, ek++, Rk.o.Hf("chestToggleFromServer", !1, !0))
    }));
    const Wk = {
        boardEditRequested: {
          watch: kk => (0, Rk.p)("EditBoard", (Fk => {
            let {
              pos: Bk
            } = Fk;
            if (null === Bk) return void kk(null);
            const Rk = (0, ak.g)(),
              tk = (0, ak.n)();
            Rk && tk && kk(tk.readBoardToEdit(Rk.api, Rk.chunks, Bk))
          }))
        },
        ironChestOpenRequested: {
          watch: kk => (0, Rk.p)("OpenIronChest", (Fk => {
            let {
              pos: Bk
            } = Fk;
            kk(function(kk) {
              return {
                pos: kk,
                ...mk(kk)
              }
            }(Bk))
          }))
        }
      },
      vk = {
        writeOnBoard(kk) {
          var Fk;
          let {
            pos: Bk,
            text: Rk,
            textSize: tk
          } = kk;
          null === (Fk = (0, ak.g)()) || void 0 === Fk || Fk.send(bk.b.UpdateBoard, (0, bk.S)({
            yX: Bk,
            fX: Rk,
            mX: tk
          }))
        },
        writeBook(kk) {
          var Fk;
          let {
            pages: Bk,
            title: Rk,
            published: tk
          } = kk;
          null === (Fk = (0, ak.g)()) || void 0 === Fk || Fk.send(bk.b.UpdateBook, (0, bk.T)({
            Ob: Bk,
            Eb: Rk,
            Sb: tk
          }))
        },
        writeNameTag(kk) {
          var Fk;
          null === (Fk = (0, ak.g)()) || void 0 === Fk || Fk.send(bk.b.UpdateNameTag, kk)
        },
        setCustomLobbyBlock(kk) {
          let {
            pos: Fk,
            blockName: Bk
          } = kk;
          const Rk = (0, ak.n)(),
            tk = (0, ak.g)();
          Rk && tk && tk.send(bk.b.SetCustomLobbyBlock, (0, bk.G)({
            Ts: Rk.blockIdOf(Bk),
            Gs: Fk
          }))
        }
      }
  },
  40073: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk,
      e: () => Xk,
      f: () => bk
    });
    var Rk = Bk(4e4),
      tk = Bk(4511),
      ak = Bk(40015);

    function Xk() {
      var kk;
      const Fk = null === (kk = (0, ak.g)()) || void 0 === kk ? void 0 : kk.api.localId;
      return void 0 === Fk || Fk === Rk.Yc ? null : String(Fk)
    }

    function bk(kk) {
      const Fk = (0, ak.g)();
      if (null !== Fk) return kk(Fk);
      let Bk = null;
      const Rk = (0, tk.t)((() => {
        const Fk = (0, ak.g)();
        null !== Fk && null === Bk && (Rk(), Bk = kk(Fk))
      }));
      return () => {
        var kk;
        Rk(), null === (kk = Bk) || void 0 === kk || kk()
      }
    }

    function wk(kk, Fk, Bk) {
      return {
        current: () => {
          const Bk = (0, ak.g)();
          return null === Bk ? Fk : kk(Bk)()
        },
        watch: Fk => bk((Rk => {
          const tk = kk(Rk);
          let ak = tk();
          return Fk(ak), Bk((() => {
            const kk = tk();
            kk !== ak && (ak = kk, Fk(kk))
          }))
        }))
      }
    }
  },
  40070: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk
    });
    var Rk = Bk(40015),
      tk = Bk(40073),
      ak = Bk(40077);

    function Xk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, Rk.g)()) || void 0 === Fk ? void 0 : Fk.itemBridgeSources) && void 0 !== kk ? kk : ak.d
    }

    function bk(kk) {
      return {
        current: () => Xk().states[kk].current(),
        watch: Fk => (0, tk.f)((Bk => {
          const Rk = Bk.itemBridgeSources.states[kk];
          return Fk(Rk.current()), Rk.watch(Fk)
        }))
      }
    }

    function wk(kk) {
      return {
        watch: Fk => (0, tk.f)((Bk => Bk.itemBridgeSources.events[kk].watch(Fk)))
      }
    }
    const dk = {
      states: {
        inventory: bk("inventory"),
        hotbar: bk("hotbar"),
        crafting: bk("crafting"),
        heldItemAim: bk("heldItemAim")
      },
      events: {
        hotbarSlotRequested: wk("hotbarSlotRequested"),
        hotbarScrolled: wk("hotbarScrolled"),
        numberKeyPressed: wk("numberKeyPressed"),
        inventoryDropRequested: wk("inventoryDropRequested"),
        chestToggled: wk("chestToggled"),
        chestRefreshed: wk("chestRefreshed"),
        inventorySynced: wk("inventorySynced"),
        enchantingTableOpened: wk("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: kk => Xk().commands.selectHotbarSlot(kk),
        removeInventoryItem: kk => Xk().commands.removeInventoryItem(kk),
        swapInventorySlots: kk => Xk().commands.swapInventorySlots(kk),
        moveInventoryItem: kk => Xk().commands.moveInventoryItem(kk),
        quickMoveInventoryItem: kk => Xk().commands.quickMoveInventoryItem(kk),
        closeChest: kk => Xk().commands.closeChest(kk),
        focusCrafting: kk => Xk().commands.focusCrafting(kk),
        craftRecipe: kk => Xk().commands.craftRecipe(kk),
        salvageItem: kk => Xk().commands.salvageItem(kk),
        enchantItem: kk => Xk().commands.enchantItem(kk)
      },
      queries: {
        enchantingOffer: kk => Xk().queries.enchantingOffer(kk)
      }
    }
  },
  40077: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk
    });
    var Rk = Bk(39203);

    function tk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function ak() {}
    const Xk = Object.freeze([0, 0, 0]),
      bk = {
        states: {
          health: tk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: tk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: tk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: tk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: tk({}),
          creativeVisibility: tk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: tk(null),
          heldItemAim: tk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: tk(!1),
          gliderBoostFuel: tk(0),
          flight: tk({
            canFly: !1,
            flying: !1
          }),
          crafting: tk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: tk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: tk({}),
          fullInventory: tk(!1),
          crosshairTarget: tk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: tk(!0),
          freeCamera: tk({
            allowed: !1,
            movesFly: !1
          }),
          replay: tk(null),
          replayEdits: tk(null),
          replayRecorder: tk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: tk(!1)
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
          selectHotbarSlot: ak,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ak,
          setInventoryOpen: ak,
          changeIronChestPasskey: ak,
          dragReplayCamera: ak,
          applyTemporaryThirdPerson: ak,
          holdEmoteWheel: ak,
          recordFlyingMiddleText: ak,
          focusCrafting: ak,
          craftRecipe: () => ({
            Ps: 0,
            fV: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ak,
          setShopOpen: ak,
          buyShopItem: ak,
          sendChatMessage: ak,
          ignorePlayer: ak,
          reportPlayer: ak,
          reportWorldCodeChat: ak,
          requestDiscordReportKey: ak,
          reportLobbyOrGame: ak,
          playEmote: ak,
          updateMyCosmetic: ak,
          writeOnBoard: ak,
          writeBook: ak,
          writeNameTag: ak,
          setCustomLobbyBlock: ak,
          openIronChest: ak,
          sendCodeCollab: ak,
          clickCodeBlock: ak,
          bindCustomButtonKeys: ak,
          pressCustomButton: ak,
          moveReplayFreecam: ak,
          holdReplayFreecamVertical: ak,
          respawn: ak,
          wakeUp: ak,
          requestLeaderboard: ak,
          completeTask: ak,
          setServerCookie: ak,
          answerUiRequest: ak,
          chooseRewardedAd: ak,
          setCameraZoom: ak,
          setFreeCameraMovesFly: ak,
          setBlockHighlight: ak,
          setCrosshairInteractPrompt: ak,
          setLookSensitivity: ak,
          replayAction: ak,
          setReplayPlaying: ak,
          seekReplay: ak,
          setReplayCameraMode: ak,
          syncReplayCameraMode: ak,
          setReplayCameraKeyframe: ak,
          moveReplayCameraKeyframe: ak,
          deleteReplayCameraKeyframes: ak,
          setReplayPlaybackMark: ak,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ak,
          exportReplayVideo: ak,
          toggleRecording: ak,
          saveClip: ak,
          setRecorderPrefs: ak,
          setReplayViewerOpen: ak
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Rk.d,
          worldCodeAiGameState: () => Rk.e
        },
        lookups: {
          localPos: () => Xk,
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
  40007: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Sk,
      g: () => Ek,
      k: () => Nk,
      m: () => Ok,
      p: () => Yk
    });
    var Rk = Bk(38841),
      tk = Bk(1173),
      ak = Bk(1863),
      Xk = Bk(1873),
      bk = Bk(3090),
      wk = Bk(36480),
      dk = Bk(1267),
      sk = Bk(40015),
      Vk = Bk(4546),
      Jk = Bk(2303),
      Ak = Bk(40021),
      ek = Bk(40023),
      yk = Bk(40070);
    let fk = null;

    function mk(kk) {
      const Fk = new Map,
        Bk = Bk => {
          if ("string" !== typeof Bk) return;
          let Rk = Fk.get(Bk);
          return void 0 === Rk && (Rk = kk(Bk), void 0 !== Rk && Fk.set(Bk, Rk)), Rk
        };
      return new Proxy({}, {
        get: (kk, Fk) => Bk(Fk),
        has: (kk, Fk) => void 0 !== Bk(Fk)
      })
    }

    function Wk(kk) {
      const Fk = (0, bk.c)(kk);
      return void 0 !== Fk && (0, bk.f)(Fk) === kk
    }

    function vk(kk) {
      var Fk;
      const Bk = null === (Fk = (0, sk.g)()) || void 0 === Fk ? void 0 : Fk.tables;
      if (void 0 === Bk || !Wk(kk)) return;
      const Rk = {
          displayName: Bk.getDisplayName(kk)
        },
        tk = Bk.getItemStat(kk, "description");
      void 0 !== tk && null !== tk && (Rk.description = tk);
      const {
        rootName: ak
      } = Bk.getMetaInfo(kk);
      ak !== kk && (Rk.rootName = ak);
      const Xk = Bk.getItemStat(kk, "armourReduction");
      return void 0 !== Xk && null !== Xk && (Rk.armourReduction = Xk), Rk
    }(0, sk.o)((kk => {
      fk = kk
    }));
    const ik = (0, Xk.h)("DisplayName", "Description");

    function Yk() {
      return Boolean(ak.b.get("useInventory") && ak.b.get("useFullInventory"))
    }
    let Lk = null;
    const Ok = {
        inventory: function() {
          const kk = yk.d.states.inventory;
          let Fk = null;
          const Bk = kk => {
            var Bk;
            return null === kk.chest ? kk : ((null === (Bk = Fk) || void 0 === Bk ? void 0 : Bk.from) === kk && Fk.chestVersion === (0, ek.d)() || (Fk = {
              from: kk,
              chestVersion: (0, ek.d)(),
              view: {
                ...kk,
                chest: (0, ek.j)(kk.chest)
              }
            }), Fk.view)
          };
          return {
            current: () => Bk(kk.current()),
            watch: Fk => kk.watch((kk => {
              Fk(Bk(kk))
            }))
          }
        }(),
        crafting: yk.d.states.crafting,
        stationItems: {
          current() {
            var kk;
            return (null === (kk = Lk) || void 0 === kk ? void 0 : kk.namesVersion) !== (0, bk.h)() && (Lk = {
              namesVersion: (0, bk.h)(),
              items: {
                enchantable: mk((kk => {
                  const Fk = (0, bk.c)(kk);
                  return void 0 !== Fk && null !== fk && fk.enchantmentPerksOf(Fk).length > 0 || void 0
                })),
                salvageable: mk((kk => !(!Wk(kk) || null === (0, wk.c)(kk)) || void 0))
              }
            }), Lk.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let kk = null;
          const Fk = () => {
            var Fk;
            return (null === (Fk = kk) || void 0 === Fk ? void 0 : Fk.namesVersion) !== (0, bk.h)() && (kk = {
              namesVersion: (0, bk.h)(),
              infos: mk(vk)
            }), kk.infos
          };
          return {
            current: Fk,
            watch: Bk => (0, Xk.r)((Rk => {
              Rk.some(ik) && (kk = null, Bk(Fk()))
            }))
          }
        }(),
        creativeVisibility: (0, Xk.n)((function() {
          const kk = {};
          for (const tk of null !== (Fk = null === (Bk = fk) || void 0 === Bk ? void 0 : Bk.creativeItemIds()) && void 0 !== Fk ? Fk : []) {
            var Fk, Bk, Xk, wk;
            const dk = (0, bk.f)(tk);
            if (void 0 === dk) continue;
            const sk = null !== (Xk = ak.b.get((0, Rk.h)(dk, "showInCreativeInven"))) && void 0 !== Xk ? Xk : null === (wk = fk) || void 0 === wk ? void 0 : wk.showInCreativeInvenOf(tk);
            "boolean" === typeof sk && (kk[dk] = sk)
          }
          return {
            publicLobby: (0, tk.N)((0, dk.e)().lobbyName),
            shownInGame: kk
          }
        }), ["connectedGameChanged"], (0, Xk.h)("ShowInCreativeInven")),
        fullInventory: (0, Xk.n)(Yk, [], (0, Xk.k)("useInventory", "useFullInventory"))
      },
      Ek = {
        inventoryDropRequested: yk.d.events.inventoryDropRequested,
        chestToggled: yk.d.events.chestToggled,
        chestRefreshed: yk.d.events.chestRefreshed,
        inventorySynced: yk.d.events.inventorySynced,
        enchantingTableOpened: yk.d.events.enchantingTableOpened
      },
      Sk = {
        removeInventoryItem: yk.d.commands.removeInventoryItem,
        swapInventorySlots: yk.d.commands.swapInventorySlots,
        moveInventoryItem: yk.d.commands.moveInventoryItem,
        quickMoveInventoryItem: yk.d.commands.quickMoveInventoryItem,
        closeChest: yk.d.commands.closeChest,
        setInventoryOpen(kk) {
          (0, Vk.i)(Jk.A.InventoryOpen, kk ? Jk.A.InventoryOpen : 0)
        },
        focusCrafting: yk.d.commands.focusCrafting,
        craftRecipe: yk.d.commands.craftRecipe,
        salvageItem: yk.d.commands.salvageItem,
        enchantItem: yk.d.commands.enchantItem,
        changeIronChestPasskey(kk) {
          var Fk;
          let {
            pos: Bk,
            Gd: Rk
          } = kk;
          null === (Fk = (0, sk.g)()) || void 0 === Fk || Fk.send(Ak.b.ChangeIronChestPasskey, (0, Ak.g)({
            xa: Bk,
            Gd: Rk
          }))
        },
        openIronChest(kk) {
          var Fk;
          let {
            pos: Bk,
            Gd: Rk
          } = kk;
          null === (Fk = (0, sk.g)()) || void 0 === Fk || Fk.send(Ak.b.OpenIronChest, (0, Ak.A)({
            xa: Bk,
            Gd: Rk
          }))
        }
      },
      Nk = {
        enchantingOffer: yk.d.queries.enchantingOffer
      }
  },
  40065: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      f: () => Vk,
      h: () => bk,
      k: () => ak,
      n: () => tk,
      r: () => wk,
      t: () => sk
    });
    class Rk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function tk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }

    function ak(kk) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(kk))
    }
    const Xk = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bk(kk) {
      var Fk;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Rk || tk(kk) && Xk.test(null !== (Fk = kk.stack) && void 0 !== Fk ? Fk : "")
    }

    function wk(kk, Fk) {
      if (bk(kk)) throw kk;
      console.error(Fk, kk)
    }

    function dk(kk, Fk, Bk, tk, ak) {
      if (Fk % tk !== 0 || Fk + Bk > kk.byteLength) throw new Rk(`${ak}: ${Bk} bytes at ${Fk}, ${tk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      return 0 === Bk ? null : (dk(Fk, Bk, Rk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, tk), new kk(Fk, Bk, Rk))
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      return 0 === Fk ? null : (dk(kk, Fk, Bk, Rk, tk), new DataView(kk, Fk, Bk))
    }
  },
  40015: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      d: () => mk,
      g: () => yk,
      h: () => fk,
      k: () => Jk,
      l: () => Ak,
      n: () => sk,
      o: () => Vk,
      r: () => ek
    });
    class Rk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let tk = null,
      ak = null,
      Xk = null;
    const bk = [];
    let wk = null;

    function dk(kk, Fk) {
      try {
        kk(Fk)
      } catch (Bk) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Bk)
      }
    }

    function sk() {
      return wk
    }

    function Vk(kk) {
      bk.push(kk), null !== wk && dk(kk, wk)
    }

    function Jk(kk) {
      return tk ??= Promise.all([Bk.e(69), Bk.e(94), Bk.e(214), Bk.e(74), Bk.e(215), Bk.e(189), Bk.e(93), Bk.e(259), Bk.e(187), Bk.e(262), Bk.e(199), Bk.e(186), Bk.e(200), Bk.e(136), Bk.e(85), Bk.e(114), Bk.e(237), Bk.e(53)]).then((() => Bk(41991))).then((Fk => {
        Fk.loadAudio(kk), wk = Fk;
        for (const kk of bk) dk(kk, Fk);
        return Fk
      })).catch((kk => {
        throw tk = null, kk
      })), tk
    }
    async function Ak(kk, Fk) {
      try {
        const Bk = await Jk(kk);
        await Bk.loadClientGame(Fk)
      } catch (Bk) {
        throw new Rk(Bk)
      }
    }

    function ek(kk, Fk) {
      ak = {
        running: kk,
        shell: Fk
      }
    }

    function yk() {
      return Xk
    }
    async function fk(kk) {
      const Fk = ak;
      if ((null === Fk || void 0 === Fk ? void 0 : Fk.running) !== kk) throw new Error("the core's session has ended");
      const Bk = await Jk(Fk.shell.audio).catch((kk => {
        throw new Rk(kk)
      }));
      if (null !== Xk) return Xk;
      if (ak !== Fk || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xk = Bk.startGameHost(kk, Fk.shell), null === Xk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xk
    }

    function mk() {
      null !== Xk && (null !== wk ? wk.endGameHost(Xk) : Xk.closeGame()), Xk = null, ak = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);