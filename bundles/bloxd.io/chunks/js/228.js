export const id = 228;
export const ids = [228];
export const modules = {
  40021: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      i: () => SG
    });
    const wG = "The world isn't loaded, so no blocks can be seen.",
      SG = "The world isn't loaded, so nothing in it can be seen."
  },
  39519: (GG, bG, ZG) => {
    function wG(GG) {
      return !(!GG.lobbyLeaderboardInfo && !GG.lobbyManage)
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  37167: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      c: () => SG
    });
    let wG = () => null;

    function SG(GG) {
      wG = GG
    }

    function LG(GG, bG) {
      return wG(GG, bG)
    }
  },
  40984: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => hG,
      d: () => zG,
      e: () => rG,
      g: () => dG
    });
    var wG = ZG(19),
      SG = ZG(40986),
      LG = ZG(40971),
      yG = ZG(40989),
      kG = ZG(40976),
      UG = ZG(40993),
      YG = ZG(41012);

    function VG(GG) {
      var bG, ZG;
      const wG = (0, LG.f)();
      return wG ? null === (bG = (0, SG.d)(wG.api, GG[0], GG[1], GG[2])) || void 0 === bG || null === (ZG = bG.persisted) || void 0 === ZG ? void 0 : ZG.shared : void 0
    }

    function pG(GG) {
      return `${GG[0]},${GG[1]},${GG[2]}`
    }
    const fG = new Map;
    let QG = null,
      KG = 0;

    function hG() {
      return KG
    }

    function dG(GG) {
      const bG = null !== QG && QG.key === pG(GG.pos) ? QG.type : null;
      if (null === bG) return GG;
      let ZG = null;
      if ("Iron" === bG) {
        const {
          cachedPasskey: bG,
          ...wG
        } = JG(GG.pos);
        ZG = {
          Wk: null !== bG && void 0 !== bG ? bG : [0, 0, 0, 0],
          ...wG
        }
      }
      return {
        ...GG,
        type: bG,
        ironChest: ZG
      }
    }

    function JG(GG) {
      const bG = VG(GG),
        ZG = null === bG || void 0 === bG ? void 0 : bG.ownerDbId,
        wG = function(GG) {
          var bG;
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VG(GG);
          const wG = pG(GG),
            SG = fG.get(wG);
          return SG ? SG.lastOpened < (null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.passkeyLastUpdated) && void 0 !== bG ? bG : 0) ? (fG.delete(wG), null) : [...SG.Wk] : null
        }(GG, bG);
      return void 0 === ZG ? {
        cachedPasskey: wG
      } : {
        ownerDbId: ZG,
        cachedPasskey: wG
      }
    }(0, YG.l)(yG.c, (GG => {
      const bG = (0, UG.f)(yG.c, GG);
      if (!(0, UG.d)(bG) || bG.HS) return;
      if (KG++, !bG.qS || null === bG.eS) return void(QG = null);
      const ZG = pG(bG.eS);
      QG = {
        key: ZG,
        type: bG.gS
      }, null !== bG.RS && fG.set(ZG, {
        Wk: [...bG.RS],
        lastOpened: Date.now()
      })
    })), (0, YG.f)((() => {
      fG.clear(), QG = null, KG++
    })), (0, YG.j)((() => {
      null !== QG && (QG = null, KG++, wG.l.xh("chestToggleFromServer", !1, !0))
    }));
    const rG = {
        boardEditRequested: {
          watch: GG => (0, wG.p)("EditBoard", (bG => {
            let {
              pos: ZG
            } = bG;
            if (null === ZG) return void GG(null);
            const wG = (0, LG.f)(),
              SG = (0, LG.q)();
            wG && SG && GG(SG.readBoardToEdit(wG.api, wG.chunks, ZG))
          }))
        },
        ironChestOpenRequested: {
          watch: GG => (0, wG.p)("OpenIronChest", (bG => {
            let {
              pos: ZG
            } = bG;
            GG(function(GG) {
              return {
                pos: GG,
                ...JG(GG)
              }
            }(ZG))
          }))
        }
      },
      zG = {
        writeOnBoard(GG) {
          var bG;
          let {
            pos: ZG,
            text: wG,
            textSize: SG
          } = GG;
          null === (bG = (0, LG.f)()) || void 0 === bG || bG.send(kG.b.UpdateBoard, (0, kG.cb)({
            uU: ZG,
            iU: wG,
            CU: SG
          }))
        },
        writeBook(GG) {
          var bG;
          let {
            pages: ZG,
            title: wG,
            published: SG
          } = GG;
          null === (bG = (0, LG.f)()) || void 0 === bG || bG.send(kG.b.UpdateBook, (0, kG.db)({
            Dy: ZG,
            Ny: wG,
            Oy: SG
          }))
        },
        writeNameTag(GG) {
          var bG;
          null === (bG = (0, LG.f)()) || void 0 === bG || bG.send(kG.b.UpdateNameTag, GG)
        },
        setCustomLobbyBlock(GG) {
          let {
            pos: bG,
            blockName: ZG
          } = GG;
          const wG = (0, LG.q)(),
            SG = (0, LG.f)();
          wG && SG && SG.send(kG.b.SetCustomLobbyBlock, (0, kG.P)({
            Gk: wG.blockIdOf(ZG),
            xy: bG
          }))
        }
      }
  },
  41027: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      i: () => yG,
      l: () => kG
    });
    var wG = ZG(40954),
      SG = ZG(4800),
      LG = ZG(40971);

    function yG() {
      var GG;
      const bG = null === (GG = (0, LG.f)()) || void 0 === GG ? void 0 : GG.api.localId;
      return void 0 === bG || bG === wG.Wc ? null : String(bG)
    }

    function kG(GG) {
      const bG = (0, LG.f)();
      if (null !== bG) return GG(bG);
      let ZG = null;
      const wG = (0, SG.r)((() => {
        const bG = (0, LG.f)();
        null !== bG && null === ZG && (wG(), ZG = GG(bG))
      }));
      return () => {
        var GG;
        wG(), null === (GG = ZG) || void 0 === GG || GG()
      }
    }

    function UG(GG, bG, ZG) {
      return {
        current: () => {
          const ZG = (0, LG.f)();
          return null === ZG ? bG : GG(ZG)()
        },
        watch: bG => kG((wG => {
          const SG = GG(wG);
          let LG = SG();
          return bG(LG), ZG((() => {
            const GG = SG();
            GG !== LG && (LG = GG, bG(GG))
          }))
        }))
      }
    }
  },
  41020: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG
    });
    var wG = ZG(40971),
      SG = ZG(41027),
      LG = ZG(41031);

    function yG() {
      var GG, bG;
      return null !== (GG = null === (bG = (0, wG.f)()) || void 0 === bG ? void 0 : bG.itemBridgeSources) && void 0 !== GG ? GG : LG.d
    }

    function kG(GG) {
      return {
        current: () => yG().states[GG].current(),
        watch: bG => (0, SG.l)((ZG => {
          const wG = ZG.itemBridgeSources.states[GG];
          return bG(wG.current()), wG.watch(bG)
        }))
      }
    }

    function UG(GG) {
      return {
        watch: bG => (0, SG.l)((ZG => ZG.itemBridgeSources.events[GG].watch(bG)))
      }
    }
    const YG = {
      states: {
        inventory: kG("inventory"),
        hotbar: kG("hotbar"),
        crafting: kG("crafting"),
        heldItemAim: kG("heldItemAim")
      },
      events: {
        hotbarSlotRequested: UG("hotbarSlotRequested"),
        hotbarScrolled: UG("hotbarScrolled"),
        numberKeyPressed: UG("numberKeyPressed"),
        inventoryDropRequested: UG("inventoryDropRequested"),
        chestToggled: UG("chestToggled"),
        chestRefreshed: UG("chestRefreshed"),
        inventorySynced: UG("inventorySynced"),
        enchantingTableOpened: UG("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: GG => yG().commands.selectHotbarSlot(GG),
        removeInventoryItem: GG => yG().commands.removeInventoryItem(GG),
        swapInventorySlots: GG => yG().commands.swapInventorySlots(GG),
        moveInventoryItem: GG => yG().commands.moveInventoryItem(GG),
        quickMoveInventoryItem: GG => yG().commands.quickMoveInventoryItem(GG),
        closeChest: GG => yG().commands.closeChest(GG),
        focusCrafting: GG => yG().commands.focusCrafting(GG),
        craftRecipe: GG => yG().commands.craftRecipe(GG),
        salvageItem: GG => yG().commands.salvageItem(GG),
        enchantItem: GG => yG().commands.enchantItem(GG)
      },
      queries: {
        enchantingOffer: GG => yG().queries.enchantingOffer(GG)
      }
    }
  },
  41031: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG
    });
    var wG = ZG(40021);

    function SG(GG) {
      return {
        current: () => GG,
        watch: () => () => {}
      }
    }

    function LG() {}
    const yG = Object.freeze([0, 0, 0]),
      kG = {
        states: {
          health: SG({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SG({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SG({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SG({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SG({}),
          creativeVisibility: SG({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SG(null),
          heldItemAim: SG({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SG(!1),
          gliderBoostFuel: SG(0),
          flight: SG({
            canFly: !1,
            flying: !1
          }),
          crafting: SG({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SG({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SG({}),
          fullInventory: SG(!1),
          crosshairTarget: SG({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SG(!0),
          freeCamera: SG({
            allowed: !1,
            movesFly: !1
          }),
          replay: SG(null),
          replayEdits: SG(null),
          replayRecorder: SG({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: SG(!1)
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
          selectHotbarSlot: LG,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: LG,
          setInventoryOpen: LG,
          changeIronChestPasskey: LG,
          dragReplayCamera: LG,
          applyTemporaryThirdPerson: LG,
          holdEmoteWheel: LG,
          recordFlyingMiddleText: LG,
          focusCrafting: LG,
          craftRecipe: () => ({
            uV: 0,
            ZU: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: LG,
          setShopOpen: LG,
          buyShopItem: LG,
          lobbyManage: LG,
          sendChatMessage: LG,
          ignorePlayer: LG,
          reportPlayer: LG,
          reportWorldCodeChat: LG,
          requestDiscordReportKey: LG,
          reportLobbyOrGame: LG,
          playEmote: LG,
          updateMyCosmetic: LG,
          writeOnBoard: LG,
          writeBook: LG,
          writeNameTag: LG,
          setCustomLobbyBlock: LG,
          openIronChest: LG,
          sendCodeCollab: LG,
          clickCodeBlock: LG,
          bindCustomButtonKeys: LG,
          pressCustomButton: LG,
          moveReplayFreecam: LG,
          holdReplayFreecamVertical: LG,
          respawn: LG,
          wakeUp: LG,
          requestLeaderboard: LG,
          completeTask: LG,
          setServerCookie: LG,
          answerUiRequest: LG,
          chooseRewardedAd: LG,
          setCameraZoom: LG,
          setFreeCameraMovesFly: LG,
          setBlockHighlight: LG,
          setCrosshairInteractPrompt: LG,
          setLookSensitivity: LG,
          replayAction: LG,
          setReplayPlaying: LG,
          seekReplay: LG,
          setReplayCameraMode: LG,
          syncReplayCameraMode: LG,
          setReplayCameraKeyframe: LG,
          moveReplayCameraKeyframe: LG,
          deleteReplayCameraKeyframes: LG,
          setReplayPlaybackMark: LG,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: LG,
          exportReplayVideo: LG,
          toggleRecording: LG,
          saveClip: LG,
          setRecorderPrefs: LG,
          setReplayViewerOpen: LG
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => wG.e,
          worldCodeAiGameState: () => wG.i
        },
        lookups: {
          localPos: () => yG,
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
  40963: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => CG,
      g: () => iG,
      i: () => WG,
      l: () => uG,
      n: () => oG
    });
    var wG = ZG(39657),
      SG = ZG(1177),
      LG = ZG(1923),
      yG = ZG(1939),
      kG = ZG(3267),
      UG = ZG(37167),
      YG = ZG(1287),
      VG = ZG(40971),
      pG = ZG(4842),
      fG = ZG(2380),
      QG = ZG(40976),
      KG = ZG(40984),
      hG = ZG(41020);
    let dG = null;

    function JG(GG) {
      const bG = new Map,
        ZG = ZG => {
          if ("string" !== typeof ZG) return;
          let wG = bG.get(ZG);
          return void 0 === wG && (wG = GG(ZG), void 0 !== wG && bG.set(ZG, wG)), wG
        };
      return new Proxy({}, {
        get: (GG, bG) => ZG(bG),
        has: (GG, bG) => void 0 !== ZG(bG)
      })
    }

    function rG(GG) {
      const bG = (0, kG.c)(GG);
      return void 0 !== bG && (0, kG.f)(bG) === GG
    }

    function zG(GG) {
      var bG;
      const ZG = null === (bG = (0, VG.f)()) || void 0 === bG ? void 0 : bG.tables;
      if (void 0 === ZG || !rG(GG)) return;
      const wG = {
          displayName: ZG.getDisplayName(GG)
        },
        SG = ZG.getItemStat(GG, "description");
      void 0 !== SG && null !== SG && (wG.description = SG);
      const {
        rootName: LG
      } = ZG.getMetaInfo(GG);
      LG !== GG && (wG.rootName = LG);
      const yG = ZG.getItemStat(GG, "armourReduction");
      return void 0 !== yG && null !== yG && (wG.armourReduction = yG), wG
    }(0, VG.r)((GG => {
      dG = GG
    }));
    const EG = (0, yG.h)("DisplayName", "Description");

    function oG() {
      return Boolean(LG.c.get("useInventory") && LG.c.get("useFullInventory"))
    }
    let XG = null;
    const uG = {
        inventory: function() {
          const GG = hG.c.states.inventory;
          let bG = null;
          const ZG = GG => {
            var ZG;
            return null === GG.chest ? GG : ((null === (ZG = bG) || void 0 === ZG ? void 0 : ZG.from) === GG && bG.chestVersion === (0, KG.c)() || (bG = {
              from: GG,
              chestVersion: (0, KG.c)(),
              view: {
                ...GG,
                chest: (0, KG.g)(GG.chest)
              }
            }), bG.view)
          };
          return {
            current: () => ZG(GG.current()),
            watch: bG => GG.watch((GG => {
              bG(ZG(GG))
            }))
          }
        }(),
        crafting: hG.c.states.crafting,
        stationItems: {
          current() {
            var GG;
            return (null === (GG = XG) || void 0 === GG ? void 0 : GG.namesVersion) !== (0, kG.j)() && (XG = {
              namesVersion: (0, kG.j)(),
              items: {
                enchantable: JG((GG => {
                  const bG = (0, kG.c)(GG);
                  return void 0 !== bG && null !== dG && dG.enchantmentPerksOf(bG).length > 0 || void 0
                })),
                salvageable: JG((GG => !(!rG(GG) || null === (0, UG.b)(GG)) || void 0))
              }
            }), XG.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let GG = null;
          const bG = () => {
            var bG;
            return (null === (bG = GG) || void 0 === bG ? void 0 : bG.namesVersion) !== (0, kG.j)() && (GG = {
              namesVersion: (0, kG.j)(),
              infos: JG(zG)
            }), GG.infos
          };
          return {
            current: bG,
            watch: ZG => (0, yG.q)((wG => {
              wG.some(EG) && (GG = null, ZG(bG()))
            }))
          }
        }(),
        creativeVisibility: (0, yG.l)((function() {
          const GG = {};
          for (const SG of null !== (bG = null === (ZG = dG) || void 0 === ZG ? void 0 : ZG.creativeItemIds()) && void 0 !== bG ? bG : []) {
            var bG, ZG, yG, UG;
            const YG = (0, kG.f)(SG);
            if (void 0 === YG) continue;
            const VG = null !== (yG = LG.c.get((0, wG.i)(YG, "showInCreativeInven"))) && void 0 !== yG ? yG : null === (UG = dG) || void 0 === UG ? void 0 : UG.showInCreativeInvenOf(SG);
            "boolean" === typeof VG && (GG[YG] = VG)
          }
          return {
            publicLobby: (0, SG.K)((0, YG.d)().lobbyName),
            shownInGame: GG
          }
        }), ["connectedGameChanged"], (0, yG.h)("ShowInCreativeInven")),
        fullInventory: (0, yG.l)(oG, [], (0, yG.i)("useInventory", "useFullInventory"))
      },
      iG = {
        inventoryDropRequested: hG.c.events.inventoryDropRequested,
        chestToggled: hG.c.events.chestToggled,
        chestRefreshed: hG.c.events.chestRefreshed,
        inventorySynced: hG.c.events.inventorySynced,
        enchantingTableOpened: hG.c.events.enchantingTableOpened
      },
      CG = {
        removeInventoryItem: hG.c.commands.removeInventoryItem,
        swapInventorySlots: hG.c.commands.swapInventorySlots,
        moveInventoryItem: hG.c.commands.moveInventoryItem,
        quickMoveInventoryItem: hG.c.commands.quickMoveInventoryItem,
        closeChest: hG.c.commands.closeChest,
        setInventoryOpen(GG) {
          (0, pG.j)(fG.t.InventoryOpen, GG ? fG.t.InventoryOpen : 0)
        },
        focusCrafting: hG.c.commands.focusCrafting,
        craftRecipe: hG.c.commands.craftRecipe,
        salvageItem: hG.c.commands.salvageItem,
        enchantItem: hG.c.commands.enchantItem,
        changeIronChestPasskey(GG) {
          var bG;
          let {
            pos: ZG,
            Wk: wG
          } = GG;
          null === (bG = (0, VG.f)()) || void 0 === bG || bG.send(QG.b.ChangeIronChestPasskey, (0, QG.i)({
            eS: ZG,
            Wk: wG
          }))
        },
        openIronChest(GG) {
          var bG;
          let {
            pos: ZG,
            Wk: wG
          } = GG;
          null === (bG = (0, VG.f)()) || void 0 === bG || bG.send(QG.b.OpenIronChest, (0, QG.E)({
            eS: ZG,
            Wk: wG
          }))
        }
      },
      WG = {
        enchantingOffer: hG.c.queries.enchantingOffer
      }
  },
  41018: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      e: () => VG,
      h: () => yG,
      j: () => SG,
      n: () => kG,
      o: () => YG
    });
    class wG extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function SG(GG) {
      return GG instanceof RangeError && /call stack/i.test(GG.message) || GG instanceof Error && "InternalError" === GG.name && /recursion/i.test(GG.message)
    }
    const LG = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yG(GG) {
      var bG;
      return GG instanceof WebAssembly.RuntimeError || GG instanceof wG || SG(GG) && LG.test(null !== (bG = GG.stack) && void 0 !== bG ? bG : "")
    }

    function kG(GG, bG) {
      if (yG(GG)) throw GG;
      console.error(bG, GG)
    }

    function UG(GG, bG, ZG, SG, LG) {
      if (bG % SG !== 0 || bG + ZG > GG.byteLength) throw new wG(`${LG}: ${ZG} bytes at ${bG}, ${SG}-aligned, outside ${GG.byteLength} bytes of memory`)
    }

    function YG(GG, bG, ZG, wG, SG) {
      return 0 === ZG ? null : (UG(bG, ZG, wG * GG.BYTES_PER_ELEMENT, GG.BYTES_PER_ELEMENT, SG), new GG(bG, ZG, wG))
    }

    function VG(GG, bG, ZG, wG, SG) {
      return 0 === bG ? null : (UG(GG, bG, ZG, wG, SG), new DataView(GG, bG, ZG))
    }
  },
  40971: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      e: () => JG,
      f: () => hG,
      g: () => dG,
      k: () => fG,
      o: () => QG,
      q: () => VG,
      r: () => pG,
      v: () => KG
    });
    class wG extends Error {
      constructor(GG) {
        super(`the join's code did not load: ${GG instanceof Error?GG.message:String(GG)}`, {
          cause: GG
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === GG || void 0 === GG ? void 0 : GG.request
      }
    }
    let SG = null,
      LG = null,
      yG = null;
    const kG = [];
    let UG = null;

    function YG(GG, bG) {
      try {
        GG(bG)
      } catch (ZG) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZG)
      }
    }

    function VG() {
      return UG
    }

    function pG(GG) {
      kG.push(GG), null !== UG && YG(GG, UG)
    }

    function fG(GG) {
      return SG ??= Promise.all([ZG.e(73), ZG.e(98), ZG.e(226), ZG.e(78), ZG.e(227), ZG.e(201), ZG.e(97), ZG.e(246), ZG.e(273), ZG.e(199), ZG.e(214), ZG.e(191), ZG.e(198), ZG.e(193), ZG.e(144), ZG.e(88), ZG.e(122), ZG.e(252), ZG.e(57)]).then((() => ZG(43025))).then((bG => {
        bG.loadAudio(GG), UG = bG;
        for (const GG of kG) YG(GG, bG);
        return bG
      })).catch((GG => {
        throw SG = null, GG
      })), SG
    }
    async function QG(GG, bG) {
      try {
        const ZG = await fG(GG);
        await ZG.loadClientGame(bG)
      } catch (ZG) {
        throw new wG(ZG)
      }
    }

    function KG(GG, bG) {
      LG = {
        running: GG,
        shell: bG
      }
    }

    function hG() {
      return yG
    }
    async function dG(GG) {
      const bG = LG;
      if ((null === bG || void 0 === bG ? void 0 : bG.running) !== GG) throw new Error("the core's session has ended");
      const ZG = await fG(bG.shell.audio).catch((GG => {
        throw new wG(GG)
      }));
      if (null !== yG) return yG;
      if (LG !== bG || GG.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yG = ZG.startGameHost(GG, bG.shell), null === yG) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yG
    }

    function JG() {
      null !== yG && (null !== UG ? UG.endGameHost(yG) : yG.closeGame()), yG = null, LG = null
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);