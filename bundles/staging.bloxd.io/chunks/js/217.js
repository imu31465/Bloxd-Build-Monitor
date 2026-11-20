export const id = 217;
export const ids = [217];
export const modules = {
  39408: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      e: () => MT
    });
    const lT = "The world isn't loaded, so no blocks can be seen.",
      MT = "The world isn't loaded, so nothing in it can be seen."
  },
  38914: (TT, kT, cT) => {
    function lT(TT) {
      return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  36632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      d: () => MT
    });
    let lT = () => null;

    function MT(TT) {
      lT = TT
    }

    function KT(TT, kT) {
      return lT(TT, kT)
    }
  },
  40222: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => tT,
      e: () => ST,
      g: () => QT,
      i: () => hT
    });
    var lT = cT(36),
      MT = cT(40230),
      KT = cT(40215),
      OT = cT(40239),
      yT = cT(40219),
      fT = cT(40246),
      xT = cT(40264);

    function IT(TT) {
      var kT, cT;
      const lT = (0, KT.g)();
      return lT ? null === (kT = (0, MT.c)(lT.api, TT[0], TT[1], TT[2])) || void 0 === kT || null === (cT = kT.persisted) || void 0 === cT ? void 0 : cT.shared : void 0
    }

    function AT(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    const CT = new Map;
    let jT = null,
      vT = 0;

    function tT() {
      return vT
    }

    function hT(TT) {
      const kT = null !== jT && jT.key === AT(TT.pos) ? jT.type : null;
      if (null === kT) return TT;
      let cT = null;
      if ("Iron" === kT) {
        const {
          cachedPasskey: kT,
          ...lT
        } = NT(TT.pos);
        cT = {
          CO: null !== kT && void 0 !== kT ? kT : [0, 0, 0, 0],
          ...lT
        }
      }
      return {
        ...TT,
        type: kT,
        ironChest: cT
      }
    }

    function NT(TT) {
      const kT = IT(TT),
        cT = null === kT || void 0 === kT ? void 0 : kT.ownerDbId,
        lT = function(TT) {
          var kT;
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IT(TT);
          const lT = AT(TT),
            MT = CT.get(lT);
          return MT ? MT.lastOpened < (null !== (kT = null === cT || void 0 === cT ? void 0 : cT.passkeyLastUpdated) && void 0 !== kT ? kT : 0) ? (CT.delete(lT), null) : [...MT.CO] : null
        }(TT, kT);
      return void 0 === cT ? {
        cachedPasskey: lT
      } : {
        ownerDbId: cT,
        cachedPasskey: lT
      }
    }(0, xT.m)(OT.c, (TT => {
      const kT = (0, fT.e)(OT.c, TT);
      if (!(0, fT.b)(kT) || kT.kM) return;
      if (vT++, !kT.pl || null === kT.sl) return void(jT = null);
      const cT = AT(kT.sl);
      jT = {
        key: cT,
        type: kT.ql
      }, null !== kT.TM && CT.set(cT, {
        CO: [...kT.TM],
        lastOpened: Date.now()
      })
    })), (0, xT.h)((() => {
      CT.clear(), jT = null, vT++
    })), (0, xT.l)((() => {
      null !== jT && (jT = null, vT++, lT.k.nt("chestToggleFromServer", !1, !0))
    }));
    const QT = {
        boardEditRequested: {
          watch: TT => (0, lT.m)("EditBoard", (kT => {
            let {
              pos: cT
            } = kT;
            if (null === cT) return void TT(null);
            const lT = (0, KT.g)(),
              MT = (0, KT.q)();
            lT && MT && TT(MT.readBoardToEdit(lT.api, lT.chunks, cT))
          }))
        },
        ironChestOpenRequested: {
          watch: TT => (0, lT.m)("OpenIronChest", (kT => {
            let {
              pos: cT
            } = kT;
            TT(function(TT) {
              return {
                pos: TT,
                ...NT(TT)
              }
            }(cT))
          }))
        }
      },
      ST = {
        writeOnBoard(TT) {
          var kT;
          let {
            pos: cT,
            text: lT,
            textSize: MT
          } = TT;
          null === (kT = (0, KT.g)()) || void 0 === kT || kT.send(yT.b.UpdateBoard, (0, yT.W)({
            gx: cT,
            Ux: lT,
            Yx: MT
          }))
        },
        writeBook(TT) {
          var kT;
          let {
            pages: cT,
            title: lT,
            published: MT
          } = TT;
          null === (kT = (0, KT.g)()) || void 0 === kT || kT.send(yT.b.UpdateBook, (0, yT.X)({
            MI: cT,
            KI: lT,
            OI: MT
          }))
        },
        writeNameTag(TT) {
          var kT;
          null === (kT = (0, KT.g)()) || void 0 === kT || kT.send(yT.b.UpdateNameTag, TT)
        },
        setCustomLobbyBlock(TT) {
          let {
            pos: kT,
            blockName: cT
          } = TT;
          const lT = (0, KT.q)(),
            MT = (0, KT.g)();
          lT && MT && MT.send(yT.b.SetCustomLobbyBlock, (0, yT.I)({
            Rx: lT.blockIdOf(cT),
            Lx: kT
          }))
        }
      }
  },
  40284: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT,
      d: () => OT,
      h: () => yT
    });
    var lT = cT(40204),
      MT = cT(4748),
      KT = cT(40215);

    function OT() {
      var TT;
      const kT = null === (TT = (0, KT.g)()) || void 0 === TT ? void 0 : TT.api.localId;
      return void 0 === kT || kT === lT.bd ? null : String(kT)
    }

    function yT(TT) {
      const kT = (0, KT.g)();
      if (null !== kT) return TT(kT);
      let cT = null;
      const lT = (0, MT.q)((() => {
        const kT = (0, KT.g)();
        null !== kT && null === cT && (lT(), cT = TT(kT))
      }));
      return () => {
        var TT;
        lT(), null === (TT = cT) || void 0 === TT || TT()
      }
    }

    function fT(TT, kT, cT) {
      return {
        current: () => {
          const cT = (0, KT.g)();
          return null === cT ? kT : TT(cT)()
        },
        watch: kT => yT((lT => {
          const MT = TT(lT);
          let KT = MT();
          return kT(KT), cT((() => {
            const TT = MT();
            TT !== KT && (KT = TT, kT(TT))
          }))
        }))
      }
    }
  },
  40281: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(40215),
      MT = cT(40284),
      KT = cT(40290);

    function OT() {
      var TT, kT;
      return null !== (TT = null === (kT = (0, lT.g)()) || void 0 === kT ? void 0 : kT.itemBridgeSources) && void 0 !== TT ? TT : KT.b
    }

    function yT(TT) {
      return {
        current: () => OT().states[TT].current(),
        watch: kT => (0, MT.h)((cT => {
          const lT = cT.itemBridgeSources.states[TT];
          return kT(lT.current()), lT.watch(kT)
        }))
      }
    }

    function fT(TT) {
      return {
        watch: kT => (0, MT.h)((cT => cT.itemBridgeSources.events[TT].watch(kT)))
      }
    }
    const xT = {
      states: {
        inventory: yT("inventory"),
        hotbar: yT("hotbar"),
        crafting: yT("crafting"),
        heldItemAim: yT("heldItemAim")
      },
      events: {
        hotbarSlotRequested: fT("hotbarSlotRequested"),
        hotbarScrolled: fT("hotbarScrolled"),
        numberKeyPressed: fT("numberKeyPressed"),
        inventoryDropRequested: fT("inventoryDropRequested"),
        chestToggled: fT("chestToggled"),
        chestRefreshed: fT("chestRefreshed"),
        inventorySynced: fT("inventorySynced"),
        enchantingTableOpened: fT("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: TT => OT().commands.selectHotbarSlot(TT),
        removeInventoryItem: TT => OT().commands.removeInventoryItem(TT),
        swapInventorySlots: TT => OT().commands.swapInventorySlots(TT),
        moveInventoryItem: TT => OT().commands.moveInventoryItem(TT),
        quickMoveInventoryItem: TT => OT().commands.quickMoveInventoryItem(TT),
        closeChest: TT => OT().commands.closeChest(TT),
        focusCrafting: TT => OT().commands.focusCrafting(TT),
        craftRecipe: TT => OT().commands.craftRecipe(TT),
        salvageItem: TT => OT().commands.salvageItem(TT),
        enchantItem: TT => OT().commands.enchantItem(TT)
      },
      queries: {
        enchantingOffer: TT => OT().queries.enchantingOffer(TT)
      }
    }
  },
  40290: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(39408);

    function MT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function KT() {}
    const OT = Object.freeze([0, 0, 0]),
      yT = {
        states: {
          health: MT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: MT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: MT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: MT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: MT({}),
          creativeVisibility: MT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: MT(null),
          heldItemAim: MT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: MT(!1),
          gliderBoostFuel: MT(0),
          flight: MT({
            canFly: !1,
            flying: !1
          }),
          crafting: MT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: MT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: MT({}),
          fullInventory: MT(!1),
          crosshairTarget: MT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: MT(!0),
          freeCamera: MT({
            allowed: !1,
            movesFly: !1
          }),
          replay: MT(null),
          replayEdits: MT(null),
          replayRecorder: MT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: MT(!1)
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
          selectHotbarSlot: KT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: KT,
          setInventoryOpen: KT,
          changeIronChestPasskey: KT,
          dragReplayCamera: KT,
          applyTemporaryThirdPerson: KT,
          holdEmoteWheel: KT,
          recordFlyingMiddleText: KT,
          focusCrafting: KT,
          craftRecipe: () => ({
            ky: 0,
            oI: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: KT,
          setShopOpen: KT,
          buyShopItem: KT,
          lobbyManage: KT,
          sendChatMessage: KT,
          ignorePlayer: KT,
          reportPlayer: KT,
          reportWorldCodeChat: KT,
          requestDiscordReportKey: KT,
          reportLobbyOrGame: KT,
          playEmote: KT,
          updateMyCosmetic: KT,
          writeOnBoard: KT,
          writeBook: KT,
          writeNameTag: KT,
          setCustomLobbyBlock: KT,
          openIronChest: KT,
          sendCodeCollab: KT,
          clickCodeBlock: KT,
          bindCustomButtonKeys: KT,
          pressCustomButton: KT,
          moveReplayFreecam: KT,
          holdReplayFreecamVertical: KT,
          respawn: KT,
          wakeUp: KT,
          requestLeaderboard: KT,
          completeTask: KT,
          setServerCookie: KT,
          answerUiRequest: KT,
          chooseRewardedAd: KT,
          setCameraZoom: KT,
          setFreeCameraMovesFly: KT,
          setBlockHighlight: KT,
          setCrosshairInteractPrompt: KT,
          setLookSensitivity: KT,
          replayAction: KT,
          setReplayPlaying: KT,
          seekReplay: KT,
          setReplayCameraMode: KT,
          syncReplayCameraMode: KT,
          setReplayCameraKeyframe: KT,
          moveReplayCameraKeyframe: KT,
          deleteReplayCameraKeyframes: KT,
          setReplayPlaybackMark: KT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: KT,
          exportReplayVideo: KT,
          toggleRecording: KT,
          saveClip: KT,
          setRecorderPrefs: KT,
          setReplayViewerOpen: KT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => lT.d,
          worldCodeAiGameState: () => lT.e
        },
        lookups: {
          localPos: () => OT,
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
  40210: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => wT,
      i: () => PT,
      j: () => mT,
      n: () => rT,
      q: () => aT
    });
    var lT = cT(39026),
      MT = cT(1226),
      KT = cT(1974),
      OT = cT(1990),
      yT = cT(3214),
      fT = cT(36632),
      xT = cT(1327),
      IT = cT(40215),
      AT = cT(4787),
      CT = cT(2435),
      jT = cT(40219),
      vT = cT(40222),
      tT = cT(40281);
    let hT = null;

    function NT(TT) {
      const kT = new Map,
        cT = cT => {
          if ("string" !== typeof cT) return;
          let lT = kT.get(cT);
          return void 0 === lT && (lT = TT(cT), void 0 !== lT && kT.set(cT, lT)), lT
        };
      return new Proxy({}, {
        get: (TT, kT) => cT(kT),
        has: (TT, kT) => void 0 !== cT(kT)
      })
    }

    function QT(TT) {
      const kT = (0, yT.e)(TT);
      return void 0 !== kT && (0, yT.i)(kT) === TT
    }

    function ST(TT) {
      var kT;
      const cT = null === (kT = (0, IT.g)()) || void 0 === kT ? void 0 : kT.tables;
      if (void 0 === cT || !QT(TT)) return;
      const lT = {
          displayName: cT.getDisplayName(TT)
        },
        MT = cT.getItemStat(TT, "description");
      void 0 !== MT && null !== MT && (lT.description = MT);
      const {
        rootName: KT
      } = cT.getMetaInfo(TT);
      KT !== TT && (lT.rootName = KT);
      const OT = cT.getItemStat(TT, "armourReduction");
      return void 0 !== OT && null !== OT && (lT.armourReduction = OT), lT
    }(0, IT.u)((TT => {
      hT = TT
    }));
    const DT = (0, OT.e)("DisplayName", "Description");

    function aT() {
      return Boolean(KT.b.get("useInventory") && KT.b.get("useFullInventory"))
    }
    let FT = null;
    const rT = {
        inventory: function() {
          const TT = tT.e.states.inventory;
          let kT = null;
          const cT = TT => {
            var cT;
            return null === TT.chest ? TT : ((null === (cT = kT) || void 0 === cT ? void 0 : cT.from) === TT && kT.chestVersion === (0, vT.d)() || (kT = {
              from: TT,
              chestVersion: (0, vT.d)(),
              view: {
                ...TT,
                chest: (0, vT.i)(TT.chest)
              }
            }), kT.view)
          };
          return {
            current: () => cT(TT.current()),
            watch: kT => TT.watch((TT => {
              kT(cT(TT))
            }))
          }
        }(),
        crafting: tT.e.states.crafting,
        stationItems: {
          current() {
            var TT;
            return (null === (TT = FT) || void 0 === TT ? void 0 : TT.namesVersion) !== (0, yT.k)() && (FT = {
              namesVersion: (0, yT.k)(),
              items: {
                enchantable: NT((TT => {
                  const kT = (0, yT.e)(TT);
                  return void 0 !== kT && null !== hT && hT.enchantmentPerksOf(kT).length > 0 || void 0
                })),
                salvageable: NT((TT => !(!QT(TT) || null === (0, fT.c)(TT)) || void 0))
              }
            }), FT.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let TT = null;
          const kT = () => {
            var kT;
            return (null === (kT = TT) || void 0 === kT ? void 0 : kT.namesVersion) !== (0, yT.k)() && (TT = {
              namesVersion: (0, yT.k)(),
              infos: NT(ST)
            }), TT.infos
          };
          return {
            current: kT,
            watch: cT => (0, OT.p)((lT => {
              lT.some(DT) && (TT = null, cT(kT()))
            }))
          }
        }(),
        creativeVisibility: (0, OT.k)((function() {
          const TT = {};
          for (const MT of null !== (kT = null === (cT = hT) || void 0 === cT ? void 0 : cT.creativeItemIds()) && void 0 !== kT ? kT : []) {
            var kT, cT, OT, fT;
            const xT = (0, yT.i)(MT);
            if (void 0 === xT) continue;
            const IT = null !== (OT = KT.b.get((0, lT.e)(xT, "showInCreativeInven"))) && void 0 !== OT ? OT : null === (fT = hT) || void 0 === fT ? void 0 : fT.showInCreativeInvenOf(MT);
            "boolean" === typeof IT && (TT[xT] = IT)
          }
          return {
            publicLobby: (0, MT.K)((0, xT.b)().lobbyName),
            shownInGame: TT
          }
        }), ["connectedGameChanged"], (0, OT.e)("ShowInCreativeInven")),
        fullInventory: (0, OT.k)(aT, [], (0, OT.i)("useInventory", "useFullInventory"))
      },
      PT = {
        inventoryDropRequested: tT.e.events.inventoryDropRequested,
        chestToggled: tT.e.events.chestToggled,
        chestRefreshed: tT.e.events.chestRefreshed,
        inventorySynced: tT.e.events.inventorySynced,
        enchantingTableOpened: tT.e.events.enchantingTableOpened
      },
      wT = {
        removeInventoryItem: tT.e.commands.removeInventoryItem,
        swapInventorySlots: tT.e.commands.swapInventorySlots,
        moveInventoryItem: tT.e.commands.moveInventoryItem,
        quickMoveInventoryItem: tT.e.commands.quickMoveInventoryItem,
        closeChest: tT.e.commands.closeChest,
        setInventoryOpen(TT) {
          (0, AT.h)(CT.s.InventoryOpen, TT ? CT.s.InventoryOpen : 0)
        },
        focusCrafting: tT.e.commands.focusCrafting,
        craftRecipe: tT.e.commands.craftRecipe,
        salvageItem: tT.e.commands.salvageItem,
        enchantItem: tT.e.commands.enchantItem,
        changeIronChestPasskey(TT) {
          var kT;
          let {
            pos: cT,
            CO: lT
          } = TT;
          null === (kT = (0, IT.g)()) || void 0 === kT || kT.send(jT.b.ChangeIronChestPasskey, (0, jT.g)({
            sl: cT,
            CO: lT
          }))
        },
        openIronChest(TT) {
          var kT;
          let {
            pos: cT,
            CO: lT
          } = TT;
          null === (kT = (0, IT.g)()) || void 0 === kT || kT.send(jT.b.OpenIronChest, (0, jT.x)({
            sl: cT,
            CO: lT
          }))
        }
      },
      mT = {
        enchantingOffer: tT.e.queries.enchantingOffer
      }
  },
  40273: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      c: () => AT,
      g: () => yT,
      j: () => KT,
      l: () => MT,
      p: () => fT,
      s: () => IT
    });
    class lT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function MT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }

    function KT(TT) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(TT))
    }
    const OT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yT(TT) {
      var kT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof lT || MT(TT) && OT.test(null !== (kT = TT.stack) && void 0 !== kT ? kT : "")
    }

    function fT(TT, kT) {
      if (yT(TT)) throw TT;
      console.error(kT, TT)
    }

    function xT(TT, kT, cT, MT, KT) {
      if (kT % MT !== 0 || kT + cT > TT.byteLength) throw new lT(`${KT}: ${cT} bytes at ${kT}, ${MT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function IT(TT, kT, cT, lT, MT) {
      return 0 === cT ? null : (xT(kT, cT, lT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, MT), new TT(kT, cT, lT))
    }

    function AT(TT, kT, cT, lT, MT) {
      return 0 === kT ? null : (xT(TT, kT, cT, lT, MT), new DataView(TT, kT, cT))
    }
  },
  40215: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => NT,
      g: () => tT,
      j: () => hT,
      m: () => CT,
      p: () => jT,
      q: () => IT,
      u: () => AT,
      v: () => vT
    });
    class lT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let MT = null,
      KT = null,
      OT = null;
    const yT = [];
    let fT = null;

    function xT(TT, kT) {
      try {
        TT(kT)
      } catch (cT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cT)
      }
    }

    function IT() {
      return fT
    }

    function AT(TT) {
      yT.push(TT), null !== fT && xT(TT, fT)
    }

    function CT(TT) {
      return MT ??= Promise.all([cT.e(70), cT.e(95), cT.e(215), cT.e(75), cT.e(216), cT.e(189), cT.e(94), cT.e(235), cT.e(261), cT.e(187), cT.e(263), cT.e(199), cT.e(186), cT.e(200), cT.e(136), cT.e(86), cT.e(114), cT.e(239), cT.e(54)]).then((() => cT(42124))).then((kT => {
        kT.loadAudio(TT), fT = kT;
        for (const TT of yT) xT(TT, kT);
        return kT
      })).catch((TT => {
        throw MT = null, TT
      })), MT
    }
    async function jT(TT, kT) {
      try {
        const cT = await CT(TT);
        await cT.loadClientGame(kT)
      } catch (cT) {
        throw new lT(cT)
      }
    }

    function vT(TT, kT) {
      KT = {
        running: TT,
        shell: kT
      }
    }

    function tT() {
      return OT
    }
    async function hT(TT) {
      const kT = KT;
      if ((null === kT || void 0 === kT ? void 0 : kT.running) !== TT) throw new Error("the core's session has ended");
      const cT = await CT(kT.shell.audio).catch((TT => {
        throw new lT(TT)
      }));
      if (null !== OT) return OT;
      if (KT !== kT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (OT = cT.startGameHost(TT, kT.shell), null === OT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return OT
    }

    function NT() {
      null !== OT && (null !== fT ? fT.endGameHost(OT) : OT.closeGame()), OT = null, KT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);