export const id = 223;
export const ids = [223];
export const modules = {
  39457: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      f: () => wC
    });
    const QC = "The world isn't loaded, so no blocks can be seen.",
      wC = "The world isn't loaded, so nothing in it can be seen."
  },
  38944: (CC, zC, ZC) => {
    function QC(CC) {
      return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
    }
    ZC.d(zC, {
      d: () => QC
    })
  },
  36685: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      e: () => wC
    });
    let QC = () => null;

    function wC(CC) {
      QC = CC
    }

    function bC(CC, zC) {
      return QC(CC, zC)
    }
  },
  40431: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => SC,
      g: () => RC,
      j: () => GC,
      m: () => pC
    });
    var QC = ZC(28),
      wC = ZC(40440),
      bC = ZC(40423),
      nC = ZC(40446),
      fC = ZC(40427),
      oC = ZC(40449),
      qC = ZC(40470);

    function FC(CC) {
      var zC, ZC;
      const QC = (0, bC.k)();
      return QC ? null === (zC = (0, wC.e)(QC.api, CC[0], CC[1], CC[2])) || void 0 === zC || null === (ZC = zC.persisted) || void 0 === ZC ? void 0 : ZC.shared : void 0
    }

    function WC(CC) {
      return `${CC[0]},${CC[1]},${CC[2]}`
    }
    const NC = new Map;
    let MC = null,
      gC = 0;

    function SC() {
      return gC
    }

    function pC(CC) {
      const zC = null !== MC && MC.key === WC(CC.pos) ? MC.type : null;
      if (null === zC) return CC;
      let ZC = null;
      if ("Iron" === zC) {
        const {
          cachedPasskey: zC,
          ...QC
        } = PC(CC.pos);
        ZC = {
          zn: null !== zC && void 0 !== zC ? zC : [0, 0, 0, 0],
          ...QC
        }
      }
      return {
        ...CC,
        type: zC,
        ironChest: ZC
      }
    }

    function PC(CC) {
      const zC = FC(CC),
        ZC = null === zC || void 0 === zC ? void 0 : zC.ownerDbId,
        QC = function(CC) {
          var zC;
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FC(CC);
          const QC = WC(CC),
            wC = NC.get(QC);
          return wC ? wC.lastOpened < (null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.passkeyLastUpdated) && void 0 !== zC ? zC : 0) ? (NC.delete(QC), null) : [...wC.zn] : null
        }(CC, zC);
      return void 0 === ZC ? {
        cachedPasskey: QC
      } : {
        ownerDbId: ZC,
        cachedPasskey: QC
      }
    }(0, qC.l)(nC.e, (CC => {
      const zC = (0, oC.h)(nC.e, CC);
      if (!(0, oC.e)(zC) || zC.YQ) return;
      if (gC++, !zC.iQ || null === zC.hQ) return void(MC = null);
      const ZC = WC(zC.hQ);
      MC = {
        key: ZC,
        type: zC.eQ
      }, null !== zC.KQ && NC.set(ZC, {
        zn: [...zC.KQ],
        lastOpened: Date.now()
      })
    })), (0, qC.i)((() => {
      NC.clear(), MC = null, gC++
    })), (0, qC.j)((() => {
      null !== MC && (MC = null, gC++, QC.o.bp("chestToggleFromServer", !1, !0))
    }));
    const GC = {
        boardEditRequested: {
          watch: CC => (0, QC.q)("EditBoard", (zC => {
            let {
              pos: ZC
            } = zC;
            if (null === ZC) return void CC(null);
            const QC = (0, bC.k)(),
              wC = (0, bC.u)();
            QC && wC && CC(wC.readBoardToEdit(QC.api, QC.chunks, ZC))
          }))
        },
        ironChestOpenRequested: {
          watch: CC => (0, QC.q)("OpenIronChest", (zC => {
            let {
              pos: ZC
            } = zC;
            CC(function(CC) {
              return {
                pos: CC,
                ...PC(CC)
              }
            }(ZC))
          }))
        }
      },
      RC = {
        writeOnBoard(CC) {
          var zC;
          let {
            pos: ZC,
            text: QC,
            textSize: wC
          } = CC;
          null === (zC = (0, bC.k)()) || void 0 === zC || zC.send(fC.b.UpdateBoard, (0, fC.V)({
            cn: ZC,
            rn: QC,
            sn: wC
          }))
        },
        writeBook(CC) {
          var zC;
          let {
            pages: ZC,
            title: QC,
            published: wC
          } = CC;
          null === (zC = (0, bC.k)()) || void 0 === zC || zC.send(fC.b.UpdateBook, (0, fC.Y)({
            eq: ZC,
            hq: QC,
            Kq: wC
          }))
        },
        writeNameTag(CC) {
          var zC;
          null === (zC = (0, bC.k)()) || void 0 === zC || zC.send(fC.b.UpdateNameTag, CC)
        },
        setCustomLobbyBlock(CC) {
          let {
            pos: zC,
            blockName: ZC
          } = CC;
          const QC = (0, bC.u)(),
            wC = (0, bC.k)();
          QC && wC && wC.send(fC.b.SetCustomLobbyBlock, (0, fC.H)({
            SF: QC.blockIdOf(ZC),
            gF: zC
          }))
        }
      }
  },
  40485: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      g: () => nC,
      k: () => fC
    });
    var QC = ZC(40412),
      wC = ZC(4711),
      bC = ZC(40423);

    function nC() {
      var CC;
      const zC = null === (CC = (0, bC.k)()) || void 0 === CC ? void 0 : CC.api.localId;
      return void 0 === zC || zC === QC.qd ? null : String(zC)
    }

    function fC(CC) {
      const zC = (0, bC.k)();
      if (null !== zC) return CC(zC);
      let ZC = null;
      const QC = (0, wC.p)((() => {
        const zC = (0, bC.k)();
        null !== zC && null === ZC && (QC(), ZC = CC(zC))
      }));
      return () => {
        var CC;
        QC(), null === (CC = ZC) || void 0 === CC || CC()
      }
    }

    function oC(CC, zC, ZC) {
      return {
        current: () => {
          const ZC = (0, bC.k)();
          return null === ZC ? zC : CC(ZC)()
        },
        watch: zC => fC((QC => {
          const wC = CC(QC);
          let bC = wC();
          return zC(bC), ZC((() => {
            const CC = wC();
            CC !== bC && (bC = CC, zC(CC))
          }))
        }))
      }
    }
  },
  40479: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(40423),
      wC = ZC(40485),
      bC = ZC(40493);

    function nC() {
      var CC, zC;
      return null !== (CC = null === (zC = (0, QC.k)()) || void 0 === zC ? void 0 : zC.itemBridgeSources) && void 0 !== CC ? CC : bC.b
    }

    function fC(CC) {
      return {
        current: () => nC().states[CC].current(),
        watch: zC => (0, wC.k)((ZC => {
          const QC = ZC.itemBridgeSources.states[CC];
          return zC(QC.current()), QC.watch(zC)
        }))
      }
    }

    function oC(CC) {
      return {
        watch: zC => (0, wC.k)((ZC => ZC.itemBridgeSources.events[CC].watch(zC)))
      }
    }
    const qC = {
      states: {
        inventory: fC("inventory"),
        hotbar: fC("hotbar"),
        crafting: fC("crafting"),
        heldItemAim: fC("heldItemAim")
      },
      events: {
        hotbarSlotRequested: oC("hotbarSlotRequested"),
        hotbarScrolled: oC("hotbarScrolled"),
        numberKeyPressed: oC("numberKeyPressed"),
        inventoryDropRequested: oC("inventoryDropRequested"),
        chestToggled: oC("chestToggled"),
        chestRefreshed: oC("chestRefreshed"),
        inventorySynced: oC("inventorySynced"),
        enchantingTableOpened: oC("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: CC => nC().commands.selectHotbarSlot(CC),
        removeInventoryItem: CC => nC().commands.removeInventoryItem(CC),
        swapInventorySlots: CC => nC().commands.swapInventorySlots(CC),
        moveInventoryItem: CC => nC().commands.moveInventoryItem(CC),
        quickMoveInventoryItem: CC => nC().commands.quickMoveInventoryItem(CC),
        closeChest: CC => nC().commands.closeChest(CC),
        focusCrafting: CC => nC().commands.focusCrafting(CC),
        craftRecipe: CC => nC().commands.craftRecipe(CC),
        salvageItem: CC => nC().commands.salvageItem(CC),
        enchantItem: CC => nC().commands.enchantItem(CC)
      },
      queries: {
        enchantingOffer: CC => nC().queries.enchantingOffer(CC)
      }
    }
  },
  40493: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = ZC(39457);

    function wC(CC) {
      return {
        current: () => CC,
        watch: () => () => {}
      }
    }

    function bC() {}
    const nC = Object.freeze([0, 0, 0]),
      fC = {
        states: {
          health: wC({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: wC({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: wC({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: wC({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: wC({}),
          creativeVisibility: wC({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: wC(null),
          heldItemAim: wC({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: wC(!1),
          gliderBoostFuel: wC(0),
          flight: wC({
            canFly: !1,
            flying: !1
          }),
          crafting: wC({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: wC({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: wC({}),
          fullInventory: wC(!1),
          crosshairTarget: wC({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: wC(!0),
          freeCamera: wC({
            allowed: !1,
            movesFly: !1
          }),
          replay: wC(null),
          replayEdits: wC(null),
          replayRecorder: wC({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: wC(!1)
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
          selectHotbarSlot: bC,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: bC,
          setInventoryOpen: bC,
          changeIronChestPasskey: bC,
          dragReplayCamera: bC,
          applyTemporaryThirdPerson: bC,
          holdEmoteWheel: bC,
          recordFlyingMiddleText: bC,
          focusCrafting: bC,
          craftRecipe: () => ({
            Cf: 0,
            qn: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: bC,
          setShopOpen: bC,
          buyShopItem: bC,
          lobbyManage: bC,
          sendChatMessage: bC,
          ignorePlayer: bC,
          reportPlayer: bC,
          reportWorldCodeChat: bC,
          requestDiscordReportKey: bC,
          reportLobbyOrGame: bC,
          playEmote: bC,
          updateMyCosmetic: bC,
          writeOnBoard: bC,
          writeBook: bC,
          writeNameTag: bC,
          setCustomLobbyBlock: bC,
          openIronChest: bC,
          sendCodeCollab: bC,
          clickCodeBlock: bC,
          bindCustomButtonKeys: bC,
          pressCustomButton: bC,
          moveReplayFreecam: bC,
          holdReplayFreecamVertical: bC,
          respawn: bC,
          wakeUp: bC,
          requestLeaderboard: bC,
          completeTask: bC,
          setServerCookie: bC,
          answerUiRequest: bC,
          chooseRewardedAd: bC,
          setCameraZoom: bC,
          setFreeCameraMovesFly: bC,
          setBlockHighlight: bC,
          setCrosshairInteractPrompt: bC,
          setLookSensitivity: bC,
          replayAction: bC,
          setReplayPlaying: bC,
          seekReplay: bC,
          setReplayCameraMode: bC,
          syncReplayCameraMode: bC,
          setReplayCameraKeyframe: bC,
          moveReplayCameraKeyframe: bC,
          deleteReplayCameraKeyframes: bC,
          setReplayPlaybackMark: bC,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: bC,
          exportReplayVideo: bC,
          toggleRecording: bC,
          saveClip: bC,
          setRecorderPrefs: bC,
          setReplayViewerOpen: bC
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => QC.c,
          worldCodeAiGameState: () => QC.f
        },
        lookups: {
          localPos: () => nC,
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
  40417: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => vC,
      h: () => iC,
      j: () => eC,
      m: () => IC,
      q: () => xC
    });
    var QC = ZC(39076),
      wC = ZC(1169),
      bC = ZC(1865),
      nC = ZC(1872),
      fC = ZC(3276),
      oC = ZC(36685),
      qC = ZC(1275),
      FC = ZC(40423),
      WC = ZC(4752),
      NC = ZC(2348),
      MC = ZC(40427),
      gC = ZC(40431),
      SC = ZC(40479);
    let pC = null;

    function PC(CC) {
      const zC = new Map,
        ZC = ZC => {
          if ("string" !== typeof ZC) return;
          let QC = zC.get(ZC);
          return void 0 === QC && (QC = CC(ZC), void 0 !== QC && zC.set(ZC, QC)), QC
        };
      return new Proxy({}, {
        get: (CC, zC) => ZC(zC),
        has: (CC, zC) => void 0 !== ZC(zC)
      })
    }

    function GC(CC) {
      const zC = (0, fC.b)(CC);
      return void 0 !== zC && (0, fC.c)(zC) === CC
    }

    function RC(CC) {
      var zC;
      const ZC = null === (zC = (0, FC.k)()) || void 0 === zC ? void 0 : zC.tables;
      if (void 0 === ZC || !GC(CC)) return;
      const QC = {
          displayName: ZC.getDisplayName(CC)
        },
        wC = ZC.getItemStat(CC, "description");
      void 0 !== wC && null !== wC && (QC.description = wC);
      const {
        rootName: bC
      } = ZC.getMetaInfo(CC);
      bC !== CC && (QC.rootName = bC);
      const nC = ZC.getItemStat(CC, "armourReduction");
      return void 0 !== nC && null !== nC && (QC.armourReduction = nC), QC
    }(0, FC.y)((CC => {
      pC = CC
    }));
    const AC = (0, nC.i)("DisplayName", "Description");

    function xC() {
      return Boolean(bC.e.get("useInventory") && bC.e.get("useFullInventory"))
    }
    let JC = null;
    const IC = {
        inventory: function() {
          const CC = SC.e.states.inventory;
          let zC = null;
          const ZC = CC => {
            var ZC;
            return null === CC.chest ? CC : ((null === (ZC = zC) || void 0 === ZC ? void 0 : ZC.from) === CC && zC.chestVersion === (0, gC.e)() || (zC = {
              from: CC,
              chestVersion: (0, gC.e)(),
              view: {
                ...CC,
                chest: (0, gC.m)(CC.chest)
              }
            }), zC.view)
          };
          return {
            current: () => ZC(CC.current()),
            watch: zC => CC.watch((CC => {
              zC(ZC(CC))
            }))
          }
        }(),
        crafting: SC.e.states.crafting,
        stationItems: {
          current() {
            var CC;
            return (null === (CC = JC) || void 0 === CC ? void 0 : CC.namesVersion) !== (0, fC.d)() && (JC = {
              namesVersion: (0, fC.d)(),
              items: {
                enchantable: PC((CC => {
                  const zC = (0, fC.b)(CC);
                  return void 0 !== zC && null !== pC && pC.enchantmentPerksOf(zC).length > 0 || void 0
                })),
                salvageable: PC((CC => !(!GC(CC) || null === (0, oC.d)(CC)) || void 0))
              }
            }), JC.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let CC = null;
          const zC = () => {
            var zC;
            return (null === (zC = CC) || void 0 === zC ? void 0 : zC.namesVersion) !== (0, fC.d)() && (CC = {
              namesVersion: (0, fC.d)(),
              infos: PC(RC)
            }), CC.infos
          };
          return {
            current: zC,
            watch: ZC => (0, nC.p)((QC => {
              QC.some(AC) && (CC = null, ZC(zC()))
            }))
          }
        }(),
        creativeVisibility: (0, nC.l)((function() {
          const CC = {};
          for (const wC of null !== (zC = null === (ZC = pC) || void 0 === ZC ? void 0 : ZC.creativeItemIds()) && void 0 !== zC ? zC : []) {
            var zC, ZC, nC, oC;
            const qC = (0, fC.c)(wC);
            if (void 0 === qC) continue;
            const FC = null !== (nC = bC.e.get((0, QC.d)(qC, "showInCreativeInven"))) && void 0 !== nC ? nC : null === (oC = pC) || void 0 === oC ? void 0 : oC.showInCreativeInvenOf(wC);
            "boolean" === typeof FC && (CC[qC] = FC)
          }
          return {
            publicLobby: (0, wC.U)((0, qC.d)().lobbyName),
            shownInGame: CC
          }
        }), ["connectedGameChanged"], (0, nC.i)("ShowInCreativeInven")),
        fullInventory: (0, nC.l)(xC, [], (0, nC.j)("useInventory", "useFullInventory"))
      },
      iC = {
        inventoryDropRequested: SC.e.events.inventoryDropRequested,
        chestToggled: SC.e.events.chestToggled,
        chestRefreshed: SC.e.events.chestRefreshed,
        inventorySynced: SC.e.events.inventorySynced,
        enchantingTableOpened: SC.e.events.enchantingTableOpened
      },
      vC = {
        removeInventoryItem: SC.e.commands.removeInventoryItem,
        swapInventorySlots: SC.e.commands.swapInventorySlots,
        moveInventoryItem: SC.e.commands.moveInventoryItem,
        quickMoveInventoryItem: SC.e.commands.quickMoveInventoryItem,
        closeChest: SC.e.commands.closeChest,
        setInventoryOpen(CC) {
          (0, WC.e)(NC.v.InventoryOpen, CC ? NC.v.InventoryOpen : 0)
        },
        focusCrafting: SC.e.commands.focusCrafting,
        craftRecipe: SC.e.commands.craftRecipe,
        salvageItem: SC.e.commands.salvageItem,
        enchantItem: SC.e.commands.enchantItem,
        changeIronChestPasskey(CC) {
          var zC;
          let {
            pos: ZC,
            zn: QC
          } = CC;
          null === (zC = (0, FC.k)()) || void 0 === zC || zC.send(MC.b.ChangeIronChestPasskey, (0, MC.j)({
            hQ: ZC,
            zn: QC
          }))
        },
        openIronChest(CC) {
          var zC;
          let {
            pos: ZC,
            zn: QC
          } = CC;
          null === (zC = (0, FC.k)()) || void 0 === zC || zC.send(MC.b.OpenIronChest, (0, MC.y)({
            hQ: ZC,
            zn: QC
          }))
        }
      },
      eC = {
        enchantingOffer: SC.e.queries.enchantingOffer
      }
  },
  40476: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      d: () => FC,
      e: () => nC,
      h: () => wC,
      k: () => fC,
      m: () => qC
    });
    class QC extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function wC(CC) {
      return CC instanceof RangeError && /call stack/i.test(CC.message) || CC instanceof Error && "InternalError" === CC.name && /recursion/i.test(CC.message)
    }
    const bC = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function nC(CC) {
      var zC;
      return CC instanceof WebAssembly.RuntimeError || CC instanceof QC || wC(CC) && bC.test(null !== (zC = CC.stack) && void 0 !== zC ? zC : "")
    }

    function fC(CC, zC) {
      if (nC(CC)) throw CC;
      console.error(zC, CC)
    }

    function oC(CC, zC, ZC, wC, bC) {
      if (zC % wC !== 0 || zC + ZC > CC.byteLength) throw new QC(`${bC}: ${ZC} bytes at ${zC}, ${wC}-aligned, outside ${CC.byteLength} bytes of memory`)
    }

    function qC(CC, zC, ZC, QC, wC) {
      return 0 === ZC ? null : (oC(zC, ZC, QC * CC.BYTES_PER_ELEMENT, CC.BYTES_PER_ELEMENT, wC), new CC(zC, ZC, QC))
    }

    function FC(CC, zC, ZC, QC, wC) {
      return 0 === zC ? null : (oC(CC, zC, ZC, QC, wC), new DataView(CC, zC, ZC))
    }
  },
  40423: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => gC,
      c: () => QC,
      g: () => PC,
      k: () => SC,
      l: () => pC,
      n: () => NC,
      r: () => MC,
      u: () => FC,
      y: () => WC
    });
    class QC extends Error {
      constructor(CC) {
        super(`the join's code did not load: ${CC instanceof Error?CC.message:String(CC)}`, {
          cause: CC
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === CC || void 0 === CC ? void 0 : CC.request
      }
    }
    let wC = null,
      bC = null,
      nC = null;
    const fC = [];
    let oC = null;

    function qC(CC, zC) {
      try {
        CC(zC)
      } catch (ZC) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZC)
      }
    }

    function FC() {
      return oC
    }

    function WC(CC) {
      fC.push(CC), null !== oC && qC(CC, oC)
    }

    function NC(CC) {
      return wC ??= Promise.all([ZC.e(72), ZC.e(96), ZC.e(221), ZC.e(77), ZC.e(222), ZC.e(198), ZC.e(95), ZC.e(240), ZC.e(269), ZC.e(197), ZC.e(210), ZC.e(189), ZC.e(196), ZC.e(191), ZC.e(142), ZC.e(87), ZC.e(121), ZC.e(247), ZC.e(56)]).then((() => ZC(42374))).then((zC => {
        zC.loadAudio(CC), oC = zC;
        for (const CC of fC) qC(CC, zC);
        return zC
      })).catch((CC => {
        throw wC = null, CC
      })), wC
    }
    async function MC(CC, zC) {
      try {
        const ZC = await NC(CC);
        await ZC.loadClientGame(zC)
      } catch (ZC) {
        throw new QC(ZC)
      }
    }

    function gC(CC, zC) {
      bC = {
        running: CC,
        shell: zC
      }
    }

    function SC() {
      return nC
    }
    async function pC(CC) {
      const zC = bC;
      if ((null === zC || void 0 === zC ? void 0 : zC.running) !== CC) throw new Error("the core's session has ended");
      const ZC = await NC(zC.shell.audio).catch((CC => {
        throw new QC(CC)
      }));
      if (null !== nC) return nC;
      if (bC !== zC || CC.isStopped) throw new Error("the core stopped while the game code loaded");
      if (nC = ZC.startGameHost(CC, zC.shell), null === nC) throw new Error("the core's shared tables didn't read, so the game can't start");
      return nC
    }

    function PC() {
      null !== nC && (null !== oC ? oC.endGameHost(nC) : nC.closeGame()), nC = null, bC = null
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);