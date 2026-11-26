export const id = 250;
export const ids = [250];
export const modules = {
  40687: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => rH
    });
    const AH = "The world isn't loaded, so no blocks can be seen.",
      rH = "The world isn't loaded, so nothing in it can be seen."
  },
  40035: (HH, BH, LH) => {
    function AH(HH) {
      return !(!HH.lobbyLeaderboardInfo && !HH.lobbyManage)
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  37659: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      d: () => AH
    });
    const AH = 3,
      rH = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37667: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => rH
    });
    let AH = () => null;

    function rH(HH) {
      AH = HH
    }

    function SH(HH, BH) {
      return AH(HH, BH)
    }
  },
  41922: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => QH,
      f: () => vH,
      j: () => xH,
      l: () => WH
    });
    var AH = LH(18),
      rH = LH(41928),
      SH = LH(41911),
      hH = LH(41933),
      tH = LH(41920),
      zH = LH(41940),
      CH = LH(41954);

    function EH(HH) {
      var BH, LH;
      const AH = (0, SH.i)();
      return AH ? null === (BH = (0, rH.d)(AH.api, HH[0], HH[1], HH[2])) || void 0 === BH || null === (LH = BH.persisted) || void 0 === LH ? void 0 : LH.shared : void 0
    }

    function XH(HH) {
      return `${HH[0]},${HH[1]},${HH[2]}`
    }
    const GH = new Map;
    let YH = null,
      uH = 0;

    function QH() {
      return uH
    }

    function WH(HH) {
      const BH = null !== YH && YH.key === XH(HH.pos) ? YH.type : null;
      if (null === BH) return HH;
      let LH = null;
      if ("Iron" === BH) {
        const {
          cachedPasskey: BH,
          ...AH
        } = MH(HH.pos);
        LH = {
          mh: null !== BH && void 0 !== BH ? BH : [0, 0, 0, 0],
          ...AH
        }
      }
      return {
        ...HH,
        type: BH,
        ironChest: LH
      }
    }

    function MH(HH) {
      const BH = EH(HH),
        LH = null === BH || void 0 === BH ? void 0 : BH.ownerDbId,
        AH = function(HH) {
          var BH;
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EH(HH);
          const AH = XH(HH),
            rH = GH.get(AH);
          return rH ? rH.lastOpened < (null !== (BH = null === LH || void 0 === LH ? void 0 : LH.passkeyLastUpdated) && void 0 !== BH ? BH : 0) ? (GH.delete(AH), null) : [...rH.mh] : null
        }(HH, BH);
      return void 0 === LH ? {
        cachedPasskey: AH
      } : {
        ownerDbId: LH,
        cachedPasskey: AH
      }
    }(0, CH.k)(hH.d, (HH => {
      const BH = (0, zH.f)(hH.d, HH);
      if (!(0, zH.c)(BH) || BH.kL) return;
      if (uH++, !BH.TL || null === BH.OL) return void(YH = null);
      const LH = XH(BH.OL);
      YH = {
        key: LH,
        type: BH.VL
      }, null !== BH.bL && GH.set(LH, {
        mh: [...BH.bL],
        lastOpened: Date.now()
      })
    })), (0, CH.g)((() => {
      GH.clear(), YH = null, uH++
    })), (0, CH.j)((() => {
      null !== YH && (YH = null, uH++, AH.k.AX("chestToggleFromServer", !1, !0))
    }));
    const xH = {
        boardEditRequested: {
          watch: HH => (0, AH.m)("EditBoard", (BH => {
            let {
              pos: LH
            } = BH;
            if (null === LH) return void HH(null);
            const AH = (0, SH.i)(),
              rH = (0, SH.r)();
            AH && rH && HH(rH.readBoardToEdit(AH.api, AH.chunks, LH))
          }))
        },
        ironChestOpenRequested: {
          watch: HH => (0, AH.m)("OpenIronChest", (BH => {
            let {
              pos: LH
            } = BH;
            HH(function(HH) {
              return {
                pos: HH,
                ...MH(HH)
              }
            }(LH))
          }))
        }
      },
      vH = {
        writeOnBoard(HH) {
          var BH;
          let {
            pos: LH,
            text: AH,
            textSize: rH
          } = HH;
          null === (BH = (0, SH.i)()) || void 0 === BH || BH.send(tH.d.UpdateBoard, (0, tH.cb)({
            kE: LH,
            mE: AH,
            oE: rH
          }))
        },
        writeBook(HH) {
          var BH;
          let {
            pages: LH,
            title: AH,
            published: rH
          } = HH;
          null === (BH = (0, SH.i)()) || void 0 === BH || BH.send(tH.d.UpdateBook, (0, tH.fb)({
            eh: LH,
            qh: AH,
            gh: rH
          }))
        },
        writeNameTag(HH) {
          var BH;
          null === (BH = (0, SH.i)()) || void 0 === BH || BH.send(tH.d.UpdateNameTag, HH)
        },
        setCustomLobbyBlock(HH) {
          let {
            pos: BH,
            blockName: LH
          } = HH;
          const AH = (0, SH.r)(),
            rH = (0, SH.i)();
          AH && rH && rH.send(tH.d.SetCustomLobbyBlock, (0, tH.O)({
            ph: AH.blockIdOf(LH),
            ih: BH
          }))
        }
      }
  },
  41972: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      f: () => hH,
      i: () => tH
    });
    var AH = LH(41898),
      rH = LH(5255),
      SH = LH(41911);

    function hH() {
      var HH;
      const BH = null === (HH = (0, SH.i)()) || void 0 === HH ? void 0 : HH.api.localId;
      return void 0 === BH || BH === AH.bd ? null : String(BH)
    }

    function tH(HH) {
      const BH = (0, SH.i)();
      if (null !== BH) return HH(BH);
      let LH = null;
      const AH = (0, rH.r)((() => {
        const BH = (0, SH.i)();
        null !== BH && null === LH && (AH(), LH = HH(BH))
      }));
      return () => {
        var HH;
        AH(), null === (HH = LH) || void 0 === HH || HH()
      }
    }

    function zH(HH, BH, LH) {
      return {
        current: () => {
          const LH = (0, SH.i)();
          return null === LH ? BH : HH(LH)()
        },
        watch: BH => tH((AH => {
          const rH = HH(AH);
          let SH = rH();
          return BH(SH), LH((() => {
            const HH = rH();
            HH !== SH && (SH = HH, BH(HH))
          }))
        }))
      }
    }
  },
  41968: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(41911),
      rH = LH(41972),
      SH = LH(41981);

    function hH() {
      var HH, BH;
      return null !== (HH = null === (BH = (0, AH.i)()) || void 0 === BH ? void 0 : BH.itemBridgeSources) && void 0 !== HH ? HH : SH.c
    }

    function tH(HH) {
      return {
        current: () => hH().states[HH].current(),
        watch: BH => (0, rH.i)((LH => {
          const AH = LH.itemBridgeSources.states[HH];
          return BH(AH.current()), AH.watch(BH)
        }))
      }
    }

    function zH(HH) {
      return {
        watch: BH => (0, rH.i)((LH => LH.itemBridgeSources.events[HH].watch(BH)))
      }
    }
    const CH = {
      states: {
        inventory: tH("inventory"),
        hotbar: tH("hotbar"),
        crafting: tH("crafting"),
        heldItemAim: tH("heldItemAim")
      },
      events: {
        hotbarSlotRequested: zH("hotbarSlotRequested"),
        hotbarScrolled: zH("hotbarScrolled"),
        numberKeyPressed: zH("numberKeyPressed"),
        inventoryDropRequested: zH("inventoryDropRequested"),
        chestToggled: zH("chestToggled"),
        chestRefreshed: zH("chestRefreshed"),
        inventorySynced: zH("inventorySynced"),
        enchantingTableOpened: zH("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: HH => hH().commands.selectHotbarSlot(HH),
        removeInventoryItem: HH => hH().commands.removeInventoryItem(HH),
        swapInventorySlots: HH => hH().commands.swapInventorySlots(HH),
        moveInventoryItem: HH => hH().commands.moveInventoryItem(HH),
        quickMoveInventoryItem: HH => hH().commands.quickMoveInventoryItem(HH),
        closeChest: HH => hH().commands.closeChest(HH),
        focusCrafting: HH => hH().commands.focusCrafting(HH),
        craftRecipe: HH => hH().commands.craftRecipe(HH),
        salvageItem: HH => hH().commands.salvageItem(HH),
        enchantItem: HH => hH().commands.enchantItem(HH)
      },
      queries: {
        enchantingOffer: HH => hH().queries.enchantingOffer(HH)
      }
    }
  },
  41981: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(40687),
      rH = LH(37659);

    function SH(HH) {
      return {
        current: () => HH,
        watch: () => () => {}
      }
    }

    function hH() {}
    const tH = Object.freeze([0, 0, 0]),
      zH = {
        states: {
          health: SH({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SH({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SH({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SH({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SH({}),
          creativeVisibility: SH({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SH(null),
          heldItemAim: SH({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SH(!1),
          gliderBoostFuel: SH(0),
          flight: SH({
            canFly: !1,
            flying: !1
          }),
          crafting: SH({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SH({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SH({}),
          fullInventory: SH(!1),
          crosshairTarget: SH({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SH(!0),
          freeCamera: SH({
            allowed: !1,
            movesFly: !1
          }),
          replay: SH(null),
          replayEdits: SH(null),
          replayRecorder: SH(rH.c),
          replayVideoExporting: SH(!1)
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
          selectHotbarSlot: hH,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: hH,
          setInventoryOpen: hH,
          changeIronChestPasskey: hH,
          dragReplayCamera: hH,
          applyTemporaryThirdPerson: hH,
          holdEmoteWheel: hH,
          recordFlyingMiddleText: hH,
          focusCrafting: hH,
          craftRecipe: () => ({
            ZC: 0,
            fE: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: hH,
          setShopOpen: hH,
          buyShopItem: hH,
          lobbyManage: hH,
          sendChatMessage: () => !1,
          ignorePlayer: hH,
          reportPlayer: hH,
          reportWorldCodeChat: hH,
          requestDiscordReportKey: hH,
          reportLobbyOrGame: hH,
          playEmote: hH,
          updateMyCosmetic: hH,
          writeOnBoard: hH,
          writeBook: hH,
          writeNameTag: hH,
          setCustomLobbyBlock: hH,
          openIronChest: hH,
          sendCodeCollab: hH,
          clickCodeBlock: hH,
          bindCustomButtonKeys: hH,
          pressCustomButton: hH,
          moveReplayFreecam: hH,
          holdReplayFreecamVertical: hH,
          respawn: hH,
          wakeUp: hH,
          requestLeaderboard: hH,
          completeTask: hH,
          setServerCookie: hH,
          answerUiRequest: hH,
          chooseRewardedAd: hH,
          setCameraZoom: hH,
          setFreeCameraMovesFly: hH,
          setBlockHighlight: hH,
          setCrosshairInteractPrompt: hH,
          setLookSensitivity: hH,
          replayAction: hH,
          setReplayPlaying: hH,
          seekReplay: hH,
          setReplayCameraMode: hH,
          syncReplayCameraMode: hH,
          setReplayCameraKeyframe: hH,
          moveReplayCameraKeyframe: hH,
          deleteReplayCameraKeyframes: hH,
          setReplayPlaybackMark: hH,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: hH,
          exportReplayVideo: hH,
          toggleRecording: hH,
          saveClip: hH,
          setRecorderPrefs: hH,
          setReplayViewerOpen: hH
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => AH.d,
          worldCodeAiGameState: () => AH.f
        },
        lookups: {
          localPos: () => tH,
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
  41905: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => bH,
      g: () => OH,
      h: () => kH,
      k: () => VH,
      m: () => TH
    });
    var AH = LH(40210),
      rH = LH(1168),
      SH = LH(2036),
      hH = LH(2045),
      tH = LH(3639),
      zH = LH(37667),
      CH = LH(1297),
      EH = LH(41911),
      XH = LH(5288),
      GH = LH(2600),
      YH = LH(41920),
      uH = LH(41922),
      QH = LH(41968);
    let WH = null;

    function MH(HH) {
      const BH = new Map,
        LH = LH => {
          if ("string" !== typeof LH) return;
          let AH = BH.get(LH);
          return void 0 === AH && (AH = HH(LH), void 0 !== AH && BH.set(LH, AH)), AH
        };
      return new Proxy({}, {
        get: (HH, BH) => LH(BH),
        has: (HH, BH) => void 0 !== LH(BH)
      })
    }

    function xH(HH) {
      const BH = (0, tH.e)(HH);
      return void 0 !== BH && (0, tH.h)(BH) === HH
    }

    function vH(HH) {
      var BH;
      const LH = null === (BH = (0, EH.i)()) || void 0 === BH ? void 0 : BH.tables;
      if (void 0 === LH || !xH(HH)) return;
      const AH = {
          displayName: LH.getDisplayName(HH)
        },
        rH = LH.getItemStat(HH, "description");
      void 0 !== rH && null !== rH && (AH.description = rH);
      const {
        rootName: SH
      } = LH.getMetaInfo(HH);
      SH !== HH && (AH.rootName = SH);
      const hH = LH.getItemStat(HH, "armourReduction");
      return void 0 !== hH && null !== hH && (AH.armourReduction = hH), AH
    }(0, EH.v)((HH => {
      WH = HH
    }));
    const PH = (0, hH.h)("DisplayName", "Description");

    function TH() {
      return Boolean(SH.e.get("useInventory") && SH.e.get("useFullInventory"))
    }
    let UH = null;
    const VH = {
        inventory: function() {
          const HH = QH.e.states.inventory;
          let BH = null;
          const LH = HH => {
            var LH;
            return null === HH.chest ? HH : ((null === (LH = BH) || void 0 === LH ? void 0 : LH.from) === HH && BH.chestVersion === (0, uH.e)() || (BH = {
              from: HH,
              chestVersion: (0, uH.e)(),
              view: {
                ...HH,
                chest: (0, uH.l)(HH.chest)
              }
            }), BH.view)
          };
          return {
            current: () => LH(HH.current()),
            watch: BH => HH.watch((HH => {
              BH(LH(HH))
            }))
          }
        }(),
        crafting: QH.e.states.crafting,
        stationItems: {
          current() {
            var HH;
            return (null === (HH = UH) || void 0 === HH ? void 0 : HH.namesVersion) !== (0, tH.j)() && (UH = {
              namesVersion: (0, tH.j)(),
              items: {
                enchantable: MH((HH => {
                  const BH = (0, tH.e)(HH);
                  return void 0 !== BH && null !== WH && WH.enchantmentPerksOf(BH).length > 0 || void 0
                })),
                salvageable: MH((HH => !(!xH(HH) || null === (0, zH.d)(HH)) || void 0))
              }
            }), UH.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let HH = null;
          const BH = () => {
            var BH;
            return (null === (BH = HH) || void 0 === BH ? void 0 : BH.namesVersion) !== (0, tH.j)() && (HH = {
              namesVersion: (0, tH.j)(),
              infos: MH(vH)
            }), HH.infos
          };
          return {
            current: BH,
            watch: LH => (0, hH.v)((AH => {
              AH.some(PH) && (HH = null, LH(BH()))
            }))
          }
        }(),
        creativeVisibility: (0, hH.n)((function() {
          const HH = {};
          for (const rH of null !== (BH = null === (LH = WH) || void 0 === LH ? void 0 : LH.creativeItemIds()) && void 0 !== BH ? BH : []) {
            var BH, LH, hH, zH;
            const CH = (0, tH.h)(rH);
            if (void 0 === CH) continue;
            const EH = null !== (hH = SH.e.get((0, AH.d)(CH, "showInCreativeInven"))) && void 0 !== hH ? hH : null === (zH = WH) || void 0 === zH ? void 0 : zH.showInCreativeInvenOf(rH);
            "boolean" === typeof EH && (HH[CH] = EH)
          }
          return {
            publicLobby: (0, rH.N)((0, CH.c)().lobbyName),
            shownInGame: HH
          }
        }), ["connectedGameChanged"], (0, hH.h)("ShowInCreativeInven")),
        fullInventory: (0, hH.n)(TH, [], (0, hH.l)("useInventory", "useFullInventory"))
      },
      OH = {
        inventoryDropRequested: QH.e.events.inventoryDropRequested,
        chestToggled: QH.e.events.chestToggled,
        chestRefreshed: QH.e.events.chestRefreshed,
        inventorySynced: QH.e.events.inventorySynced,
        enchantingTableOpened: QH.e.events.enchantingTableOpened
      },
      bH = {
        removeInventoryItem: QH.e.commands.removeInventoryItem,
        swapInventorySlots: QH.e.commands.swapInventorySlots,
        moveInventoryItem: QH.e.commands.moveInventoryItem,
        quickMoveInventoryItem: QH.e.commands.quickMoveInventoryItem,
        closeChest: QH.e.commands.closeChest,
        setInventoryOpen(HH) {
          (0, XH.k)(GH.w.InventoryOpen, HH ? GH.w.InventoryOpen : 0)
        },
        focusCrafting: QH.e.commands.focusCrafting,
        craftRecipe: QH.e.commands.craftRecipe,
        salvageItem: QH.e.commands.salvageItem,
        enchantItem: QH.e.commands.enchantItem,
        changeIronChestPasskey(HH) {
          var BH;
          let {
            pos: LH,
            mh: AH
          } = HH;
          null === (BH = (0, EH.i)()) || void 0 === BH || BH.send(YH.d.ChangeIronChestPasskey, (0, YH.h)({
            OL: LH,
            mh: AH
          }))
        },
        openIronChest(HH) {
          var BH;
          let {
            pos: LH,
            mh: AH
          } = HH;
          null === (BH = (0, EH.i)()) || void 0 === BH || BH.send(YH.d.OpenIronChest, (0, YH.E)({
            OL: LH,
            mh: AH
          }))
        }
      },
      kH = {
        enchantingOffer: QH.e.queries.enchantingOffer
      }
  },
  41962: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => EH,
      h: () => hH,
      j: () => rH,
      m: () => tH,
      o: () => CH
    });
    class AH extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function rH(HH) {
      return HH instanceof RangeError && /call stack/i.test(HH.message) || HH instanceof Error && "InternalError" === HH.name && /recursion/i.test(HH.message)
    }
    const SH = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function hH(HH) {
      var BH;
      return HH instanceof WebAssembly.RuntimeError || HH instanceof AH || rH(HH) && SH.test(null !== (BH = HH.stack) && void 0 !== BH ? BH : "")
    }

    function tH(HH, BH) {
      if (hH(HH)) throw HH;
      console.error(BH, HH)
    }

    function zH(HH, BH, LH, rH, SH) {
      if (BH % rH !== 0 || BH + LH > HH.byteLength) throw new AH(`${SH}: ${LH} bytes at ${BH}, ${rH}-aligned, outside ${HH.byteLength} bytes of memory`)
    }

    function CH(HH, BH, LH, AH, rH) {
      return 0 === LH ? null : (zH(BH, LH, AH * HH.BYTES_PER_ELEMENT, HH.BYTES_PER_ELEMENT, rH), new HH(BH, LH, AH))
    }

    function EH(HH, BH, LH, AH, rH) {
      return 0 === BH ? null : (zH(HH, BH, LH, AH, rH), new DataView(HH, BH, LH))
    }
  },
  41911: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => MH,
      i: () => QH,
      j: () => WH,
      m: () => GH,
      n: () => YH,
      r: () => EH,
      v: () => XH,
      x: () => uH
    });
    class AH extends Error {
      constructor(HH) {
        super(`the join's code did not load: ${HH instanceof Error?HH.message:String(HH)}`, {
          cause: HH
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === HH || void 0 === HH ? void 0 : HH.request
      }
    }
    let rH = null,
      SH = null,
      hH = null;
    const tH = [];
    let zH = null;

    function CH(HH, BH) {
      try {
        HH(BH)
      } catch (LH) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", LH)
      }
    }

    function EH() {
      return zH
    }

    function XH(HH) {
      tH.push(HH), null !== zH && CH(HH, zH)
    }

    function GH(HH) {
      return rH ??= Promise.all([LH.e(84), LH.e(111), LH.e(86), LH.e(248), LH.e(89), LH.e(220), LH.e(170), LH.e(249), LH.e(109), LH.e(268), LH.e(238), LH.e(300), LH.e(49), LH.e(217), LH.e(233), LH.e(216), LH.e(207), LH.e(208), LH.e(101), LH.e(134), LH.e(274), LH.e(68)]).then((() => LH(46017))).then((BH => {
        BH.loadAudio(HH), zH = BH;
        for (const HH of tH) CH(HH, BH);
        return BH
      })).catch((HH => {
        throw rH = null, HH
      })), rH
    }
    async function YH(HH, BH) {
      try {
        const LH = await GH(HH);
        await LH.loadClientGame(BH)
      } catch (LH) {
        throw new AH(LH)
      }
    }

    function uH(HH, BH) {
      SH = {
        running: HH,
        shell: BH
      }
    }

    function QH() {
      return hH
    }
    async function WH(HH) {
      const BH = SH;
      if ((null === BH || void 0 === BH ? void 0 : BH.running) !== HH) throw new Error("the core's session has ended");
      const LH = await GH(BH.shell.audio).catch((HH => {
        throw new AH(HH)
      }));
      if (null !== hH) return hH;
      if (SH !== BH || HH.isStopped) throw new Error("the core stopped while the game code loaded");
      if (hH = LH.startGameHost(HH, BH.shell), null === hH) throw new Error("the core's shared tables didn't read, so the game can't start");
      return hH
    }

    function MH() {
      null !== hH && (null !== zH ? zH.endGameHost(hH) : hH.closeGame()), hH = null, SH = null
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);