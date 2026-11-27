export const id = 254;
export const ids = [254];
export const modules = {
  40983: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      e: () => tR
    });
    const yR = "The world isn't loaded, so no blocks can be seen.",
      tR = "The world isn't loaded, so nothing in it can be seen."
  },
  40356: (RR, JR, GR) => {
    function yR(RR) {
      return !(!RR.lobbyLeaderboardInfo && !RR.lobbyManage)
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  37914: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      f: () => yR
    });
    const yR = 3,
      tR = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37923: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => tR
    });
    let yR = () => null;

    function tR(RR) {
      yR = RR
    }

    function uR(RR, JR) {
      return yR(RR, JR)
    }
  },
  42130: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => aR,
      f: () => WR,
      j: () => UR,
      m: () => LR
    });
    var yR = GR(32),
      tR = GR(42132),
      uR = GR(42118),
      ZR = GR(42137),
      qR = GR(42126),
      iR = GR(42145),
      fR = GR(42164);

    function VR(RR) {
      var JR, GR;
      const yR = (0, uR.l)();
      return yR ? null === (JR = (0, tR.e)(yR.api, RR[0], RR[1], RR[2])) || void 0 === JR || null === (GR = JR.persisted) || void 0 === GR ? void 0 : GR.shared : void 0
    }

    function KR(RR) {
      return `${RR[0]},${RR[1]},${RR[2]}`
    }
    const wR = new Map;
    let rR = null,
      eR = 0;

    function aR() {
      return eR
    }

    function LR(RR) {
      const JR = null !== rR && rR.key === KR(RR.pos) ? rR.type : null;
      if (null === JR) return RR;
      let GR = null;
      if ("Iron" === JR) {
        const {
          cachedPasskey: JR,
          ...yR
        } = nR(RR.pos);
        GR = {
          Ji: null !== JR && void 0 !== JR ? JR : [0, 0, 0, 0],
          ...yR
        }
      }
      return {
        ...RR,
        type: JR,
        ironChest: GR
      }
    }

    function nR(RR) {
      const JR = VR(RR),
        GR = null === JR || void 0 === JR ? void 0 : JR.ownerDbId,
        yR = function(RR) {
          var JR;
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VR(RR);
          const yR = KR(RR),
            tR = wR.get(yR);
          return tR ? tR.lastOpened < (null !== (JR = null === GR || void 0 === GR ? void 0 : GR.passkeyLastUpdated) && void 0 !== JR ? JR : 0) ? (wR.delete(yR), null) : [...tR.Ji] : null
        }(RR, JR);
      return void 0 === GR ? {
        cachedPasskey: yR
      } : {
        ownerDbId: GR,
        cachedPasskey: yR
      }
    }(0, fR.l)(ZR.b, (RR => {
      const JR = (0, iR.i)(ZR.b, RR);
      if (!(0, iR.e)(JR) || JR.st) return;
      if (eR++, !JR.Yt || null === JR.Ft) return void(rR = null);
      const GR = KR(JR.Ft);
      rR = {
        key: GR,
        type: JR.Qt
      }, null !== JR.Tt && wR.set(GR, {
        Ji: [...JR.Tt],
        lastOpened: Date.now()
      })
    })), (0, fR.f)((() => {
      wR.clear(), rR = null, eR++
    })), (0, fR.i)((() => {
      null !== rR && (rR = null, eR++, yR.n.JK("chestToggleFromServer", !1, !0))
    }));
    const UR = {
        boardEditRequested: {
          watch: RR => (0, yR.q)("EditBoard", (JR => {
            let {
              pos: GR
            } = JR;
            if (null === GR) return void RR(null);
            const yR = (0, uR.l)(),
              tR = (0, uR.u)();
            yR && tR && RR(tR.readBoardToEdit(yR.api, yR.chunks, GR))
          }))
        },
        ironChestOpenRequested: {
          watch: RR => (0, yR.q)("OpenIronChest", (JR => {
            let {
              pos: GR
            } = JR;
            RR(function(RR) {
              return {
                pos: RR,
                ...nR(RR)
              }
            }(GR))
          }))
        }
      },
      WR = {
        writeOnBoard(RR) {
          var JR;
          let {
            pos: GR,
            text: yR,
            Zi: tR,
            textSize: ZR
          } = RR;
          null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateBoard, (0, qR.Y)({
            ti: GR,
            ui: yR,
            Zi: tR,
            qi: ZR
          }))
        },
        writeBook(RR) {
          var JR;
          let {
            pages: GR,
            title: yR,
            published: tR
          } = RR;
          null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateBook, (0, qR.Z)({
            CV: GR,
            XV: yR,
            MV: tR
          }))
        },
        writeNameTag(RR) {
          var JR;
          null === (JR = (0, uR.l)()) || void 0 === JR || JR.send(qR.d.UpdateNameTag, RR)
        },
        setCustomLobbyBlock(RR) {
          let {
            pos: JR,
            blockName: GR
          } = RR;
          const yR = (0, uR.u)(),
            tR = (0, uR.l)();
          yR && tR && tR.send(qR.d.SetCustomLobbyBlock, (0, qR.N)({
            Vq: yR.blockIdOf(GR),
            fq: JR
          }))
        }
      }
  },
  42185: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      e: () => ZR,
      g: () => qR
    });
    var yR = GR(42106),
      tR = GR(5665),
      uR = GR(42118);

    function ZR() {
      var RR;
      const JR = null === (RR = (0, uR.l)()) || void 0 === RR ? void 0 : RR.api.localId;
      return void 0 === JR || JR === yR.Uc ? null : String(JR)
    }

    function qR(RR) {
      const JR = (0, uR.l)();
      if (null !== JR) return RR(JR);
      let GR = null;
      const yR = (0, tR.n)((() => {
        const JR = (0, uR.l)();
        null !== JR && null === GR && (yR(), GR = RR(JR))
      }));
      return () => {
        var RR;
        yR(), null === (RR = GR) || void 0 === RR || RR()
      }
    }

    function iR(RR, JR, GR) {
      return {
        current: () => {
          const GR = (0, uR.l)();
          return null === GR ? JR : RR(GR)()
        },
        watch: JR => qR((yR => {
          const tR = RR(yR);
          let uR = tR();
          return JR(uR), GR((() => {
            const RR = tR();
            RR !== uR && (uR = RR, JR(RR))
          }))
        }))
      }
    }
  },
  42177: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(42118),
      tR = GR(42185),
      uR = GR(42188);

    function ZR() {
      var RR, JR;
      return null !== (RR = null === (JR = (0, yR.l)()) || void 0 === JR ? void 0 : JR.itemBridgeSources) && void 0 !== RR ? RR : uR.c
    }

    function qR(RR) {
      return {
        current: () => ZR().states[RR].current(),
        watch: JR => (0, tR.g)((GR => {
          const yR = GR.itemBridgeSources.states[RR];
          return JR(yR.current()), yR.watch(JR)
        }))
      }
    }

    function iR(RR) {
      return {
        watch: JR => (0, tR.g)((GR => GR.itemBridgeSources.events[RR].watch(JR)))
      }
    }
    const fR = {
      states: {
        inventory: qR("inventory"),
        hotbar: qR("hotbar"),
        crafting: qR("crafting"),
        heldItemAim: qR("heldItemAim")
      },
      events: {
        hotbarSlotRequested: iR("hotbarSlotRequested"),
        hotbarScrolled: iR("hotbarScrolled"),
        numberKeyPressed: iR("numberKeyPressed"),
        inventoryDropRequested: iR("inventoryDropRequested"),
        chestToggled: iR("chestToggled"),
        chestRefreshed: iR("chestRefreshed"),
        inventorySynced: iR("inventorySynced"),
        enchantingTableOpened: iR("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: RR => ZR().commands.selectHotbarSlot(RR),
        removeInventoryItem: RR => ZR().commands.removeInventoryItem(RR),
        swapInventorySlots: RR => ZR().commands.swapInventorySlots(RR),
        moveInventoryItem: RR => ZR().commands.moveInventoryItem(RR),
        quickMoveInventoryItem: RR => ZR().commands.quickMoveInventoryItem(RR),
        closeChest: RR => ZR().commands.closeChest(RR),
        focusCrafting: RR => ZR().commands.focusCrafting(RR),
        craftRecipe: RR => ZR().commands.craftRecipe(RR),
        salvageItem: RR => ZR().commands.salvageItem(RR),
        enchantItem: RR => ZR().commands.enchantItem(RR)
      },
      queries: {
        enchantingOffer: RR => ZR().queries.enchantingOffer(RR)
      }
    }
  },
  42188: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR
    });
    var yR = GR(40983),
      tR = GR(37914);

    function uR(RR) {
      return {
        current: () => RR,
        watch: () => () => {}
      }
    }

    function ZR() {}
    const qR = Object.freeze([0, 0, 0]),
      iR = {
        states: {
          health: uR({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: uR({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: uR({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: uR({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: uR({}),
          creativeVisibility: uR({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: uR(null),
          heldItemAim: uR({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: uR(!1),
          gliderBoostFuel: uR(0),
          flight: uR({
            canFly: !1,
            flying: !1
          }),
          crafting: uR({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: uR({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: uR({}),
          fullInventory: uR(!1),
          crosshairTarget: uR({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: uR(!0),
          freeCamera: uR({
            allowed: !1,
            movesFly: !1
          }),
          replay: uR(null),
          replayEdits: uR(null),
          replayRecorder: uR(tR.b),
          replayVideoExporting: uR(!1)
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
          selectHotbarSlot: ZR,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ZR,
          setInventoryOpen: ZR,
          changeIronChestPasskey: ZR,
          dragReplayCamera: ZR,
          applyTemporaryThirdPerson: ZR,
          holdEmoteWheel: ZR,
          recordFlyingMiddleText: ZR,
          focusCrafting: ZR,
          craftRecipe: () => ({
            Uq: 0,
            RK: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ZR,
          setShopOpen: ZR,
          buyShopItem: ZR,
          lobbyManage: ZR,
          sendChatMessage: () => !1,
          ignorePlayer: ZR,
          reportPlayer: ZR,
          reportWorldCodeChat: ZR,
          requestDiscordReportKey: ZR,
          reportLobbyOrGame: ZR,
          playEmote: ZR,
          updateMyCosmetic: ZR,
          writeOnBoard: ZR,
          writeBook: ZR,
          writeNameTag: ZR,
          setCustomLobbyBlock: ZR,
          openIronChest: ZR,
          sendCodeCollab: ZR,
          clickCodeBlock: ZR,
          bindCustomButtonKeys: ZR,
          pressCustomButton: ZR,
          moveReplayFreecam: ZR,
          holdReplayFreecamVertical: ZR,
          respawn: ZR,
          wakeUp: ZR,
          requestLeaderboard: ZR,
          completeTask: ZR,
          setServerCookie: ZR,
          answerUiRequest: ZR,
          chooseRewardedAd: ZR,
          setCameraZoom: ZR,
          setFreeCameraMovesFly: ZR,
          setBlockHighlight: ZR,
          setCrosshairInteractPrompt: ZR,
          setLookSensitivity: ZR,
          replayAction: ZR,
          setReplayPlaying: ZR,
          seekReplay: ZR,
          setReplayCameraMode: ZR,
          syncReplayCameraMode: ZR,
          setReplayCameraKeyframe: ZR,
          moveReplayCameraKeyframe: ZR,
          deleteReplayCameraKeyframes: ZR,
          setReplayPlaybackMark: ZR,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ZR,
          exportReplayVideo: ZR,
          toggleRecording: ZR,
          saveClip: ZR,
          setRecorderPrefs: ZR,
          setReplayViewerOpen: ZR
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => yR.b,
          worldCodeAiGameState: () => yR.e
        },
        lookups: {
          localPos: () => qR,
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
  42114: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => lR,
      e: () => BR,
      i: () => pR,
      l: () => MR,
      p: () => CR
    });
    var yR = GR(40522),
      tR = GR(1317),
      uR = GR(2163),
      ZR = GR(2170),
      qR = GR(4555),
      iR = GR(37923),
      fR = GR(1449),
      VR = GR(42118),
      KR = GR(5699),
      wR = GR(3428),
      rR = GR(42126),
      eR = GR(42130),
      aR = GR(42177);
    let LR = null;

    function nR(RR) {
      const JR = new Map,
        GR = GR => {
          if ("string" !== typeof GR) return;
          let yR = JR.get(GR);
          return void 0 === yR && (yR = RR(GR), void 0 !== yR && JR.set(GR, yR)), yR
        };
      return new Proxy({}, {
        get: (RR, JR) => GR(JR),
        has: (RR, JR) => void 0 !== GR(JR)
      })
    }

    function UR(RR) {
      const JR = (0, qR.b)(RR);
      return void 0 !== JR && (0, qR.c)(JR) === RR
    }

    function WR(RR) {
      var JR;
      const GR = null === (JR = (0, VR.l)()) || void 0 === JR ? void 0 : JR.tables;
      if (void 0 === GR || !UR(RR)) return;
      const yR = {
          displayName: GR.getDisplayName(RR)
        },
        tR = GR.getItemStat(RR, "description");
      void 0 !== tR && null !== tR && (yR.description = tR);
      const {
        rootName: uR
      } = GR.getMetaInfo(RR);
      uR !== RR && (yR.rootName = uR);
      const ZR = GR.getItemStat(RR, "armourReduction");
      return void 0 !== ZR && null !== ZR && (yR.armourReduction = ZR), yR
    }(0, VR.y)((RR => {
      LR = RR
    }));
    const AR = (0, ZR.i)("DisplayName", "Description");

    function CR() {
      return Boolean(uR.c.get("useInventory") && uR.c.get("useFullInventory"))
    }
    let XR = null;
    const MR = {
        inventory: function() {
          const RR = aR.e.states.inventory;
          let JR = null;
          const GR = RR => {
            var GR;
            return null === RR.chest ? RR : ((null === (GR = JR) || void 0 === GR ? void 0 : GR.from) === RR && JR.chestVersion === (0, eR.c)() || (JR = {
              from: RR,
              chestVersion: (0, eR.c)(),
              view: {
                ...RR,
                chest: (0, eR.m)(RR.chest)
              }
            }), JR.view)
          };
          return {
            current: () => GR(RR.current()),
            watch: JR => RR.watch((RR => {
              JR(GR(RR))
            }))
          }
        }(),
        crafting: aR.e.states.crafting,
        stationItems: {
          current() {
            var RR;
            return (null === (RR = XR) || void 0 === RR ? void 0 : RR.namesVersion) !== (0, qR.f)() && (XR = {
              namesVersion: (0, qR.f)(),
              items: {
                enchantable: nR((RR => {
                  const JR = (0, qR.b)(RR);
                  return void 0 !== JR && null !== LR && LR.enchantmentPerksOf(JR).length > 0 || void 0
                })),
                salvageable: nR((RR => !(!UR(RR) || null === (0, iR.b)(RR)) || void 0))
              }
            }), XR.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let RR = null;
          const JR = () => {
            var JR;
            return (null === (JR = RR) || void 0 === JR ? void 0 : JR.namesVersion) !== (0, qR.f)() && (RR = {
              namesVersion: (0, qR.f)(),
              infos: nR(WR)
            }), RR.infos
          };
          return {
            current: JR,
            watch: GR => (0, ZR.p)((yR => {
              yR.some(AR) && (RR = null, GR(JR()))
            }))
          }
        }(),
        creativeVisibility: (0, ZR.l)((function() {
          const RR = {};
          for (const tR of null !== (JR = null === (GR = LR) || void 0 === GR ? void 0 : GR.creativeItemIds()) && void 0 !== JR ? JR : []) {
            var JR, GR, ZR, iR;
            const fR = (0, qR.c)(tR);
            if (void 0 === fR) continue;
            const VR = null !== (ZR = uR.c.get((0, yR.d)(fR, "showInCreativeInven"))) && void 0 !== ZR ? ZR : null === (iR = LR) || void 0 === iR ? void 0 : iR.showInCreativeInvenOf(tR);
            "boolean" === typeof VR && (RR[fR] = VR)
          }
          return {
            publicLobby: (0, tR.E)((0, fR.d)().lobbyName),
            shownInGame: RR
          }
        }), ["connectedGameChanged"], (0, ZR.i)("ShowInCreativeInven")),
        fullInventory: (0, ZR.l)(CR, [], (0, ZR.j)("useInventory", "useFullInventory"))
      },
      BR = {
        inventoryDropRequested: aR.e.events.inventoryDropRequested,
        chestToggled: aR.e.events.chestToggled,
        chestRefreshed: aR.e.events.chestRefreshed,
        inventorySynced: aR.e.events.inventorySynced,
        enchantingTableOpened: aR.e.events.enchantingTableOpened
      },
      lR = {
        removeInventoryItem: aR.e.commands.removeInventoryItem,
        swapInventorySlots: aR.e.commands.swapInventorySlots,
        moveInventoryItem: aR.e.commands.moveInventoryItem,
        quickMoveInventoryItem: aR.e.commands.quickMoveInventoryItem,
        closeChest: aR.e.commands.closeChest,
        setInventoryOpen(RR) {
          (0, KR.i)(wR.C.InventoryOpen, RR ? wR.C.InventoryOpen : 0)
        },
        focusCrafting: aR.e.commands.focusCrafting,
        craftRecipe: aR.e.commands.craftRecipe,
        salvageItem: aR.e.commands.salvageItem,
        enchantItem: aR.e.commands.enchantItem,
        changeIronChestPasskey(RR) {
          var JR;
          let {
            pos: GR,
            Ji: yR
          } = RR;
          null === (JR = (0, VR.l)()) || void 0 === JR || JR.send(rR.d.ChangeIronChestPasskey, (0, rR.k)({
            Ft: GR,
            Ji: yR
          }))
        },
        openIronChest(RR) {
          var JR;
          let {
            pos: GR,
            Ji: yR
          } = RR;
          null === (JR = (0, VR.l)()) || void 0 === JR || JR.send(rR.d.OpenIronChest, (0, rR.F)({
            Ft: GR,
            Ji: yR
          }))
        }
      },
      pR = {
        enchantingOffer: aR.e.queries.enchantingOffer
      }
  },
  42170: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      f: () => VR,
      h: () => ZR,
      i: () => tR,
      j: () => qR,
      l: () => fR
    });
    class yR extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function tR(RR) {
      return RR instanceof RangeError && /call stack/i.test(RR.message) || RR instanceof Error && "InternalError" === RR.name && /recursion/i.test(RR.message)
    }
    const uR = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function ZR(RR) {
      var JR;
      return RR instanceof WebAssembly.RuntimeError || RR instanceof yR || tR(RR) && uR.test(null !== (JR = RR.stack) && void 0 !== JR ? JR : "")
    }

    function qR(RR, JR) {
      if (ZR(RR)) throw RR;
      console.error(JR, RR)
    }

    function iR(RR, JR, GR, tR, uR) {
      if (JR % tR !== 0 || JR + GR > RR.byteLength) throw new yR(`${uR}: ${GR} bytes at ${JR}, ${tR}-aligned, outside ${RR.byteLength} bytes of memory`)
    }

    function fR(RR, JR, GR, yR, tR) {
      return 0 === GR ? null : (iR(JR, GR, yR * RR.BYTES_PER_ELEMENT, RR.BYTES_PER_ELEMENT, tR), new RR(JR, GR, yR))
    }

    function VR(RR, JR, GR, yR, tR) {
      return 0 === JR ? null : (iR(RR, JR, GR, yR, tR), new DataView(RR, JR, GR))
    }
  },
  42118: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => eR,
      e: () => yR,
      i: () => nR,
      l: () => aR,
      m: () => LR,
      p: () => wR,
      s: () => rR,
      u: () => VR,
      y: () => KR
    });
    class yR extends Error {
      constructor(RR) {
        super(`the join's code did not load: ${RR instanceof Error?RR.message:String(RR)}`, {
          cause: RR
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === RR || void 0 === RR ? void 0 : RR.request
      }
    }
    let tR = null,
      uR = null,
      ZR = null;
    const qR = [];
    let iR = null;

    function fR(RR, JR) {
      try {
        RR(JR)
      } catch (GR) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", GR)
      }
    }

    function VR() {
      return iR
    }

    function KR(RR) {
      qR.push(RR), null !== iR && fR(RR, iR)
    }

    function wR(RR) {
      return tR ??= Promise.all([GR.e(85), GR.e(113), GR.e(88), GR.e(177), GR.e(91), GR.e(224), GR.e(252), GR.e(112), GR.e(142), GR.e(245), GR.e(244), GR.e(306), GR.e(243), GR.e(222), GR.e(50), GR.e(223), GR.e(127), GR.e(214), GR.e(280), GR.e(143), GR.e(103), GR.e(69)]).then((() => GR(54578))).then((JR => {
        JR.loadAudio(RR), iR = JR;
        for (const RR of qR) fR(RR, JR);
        return JR
      })).catch((RR => {
        throw tR = null, RR
      })), tR
    }
    async function rR(RR, JR) {
      try {
        const GR = await wR(RR);
        await GR.loadClientGame(JR)
      } catch (GR) {
        throw new yR(GR)
      }
    }

    function eR(RR, JR) {
      uR = {
        running: RR,
        shell: JR
      }
    }

    function aR() {
      return ZR
    }
    async function LR(RR) {
      const JR = uR;
      if ((null === JR || void 0 === JR ? void 0 : JR.running) !== RR) throw new Error("the core's session has ended");
      const GR = await wR(JR.shell.audio).catch((RR => {
        throw new yR(RR)
      }));
      if (null !== ZR) return ZR;
      if (uR !== JR || RR.isStopped) throw new Error("the core stopped while the game code loaded");
      if (ZR = GR.startGameHost(RR, JR.shell), null === ZR) throw new Error("the core's shared tables didn't read, so the game can't start");
      return ZR
    }

    function nR() {
      null !== ZR && (null !== iR ? iR.endGameHost(ZR) : ZR.closeGame()), ZR = null, uR = null
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);