export const id = 223;
export const ids = [223];
export const modules = {
  39592: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => sD
    });
    const pD = "The world isn't loaded, so no blocks can be seen.",
      sD = "The world isn't loaded, so nothing in it can be seen."
  },
  39079: (DD, zD, wD) => {
    function pD(DD) {
      return !(!DD.lobbyLeaderboardInfo && !DD.lobbyManage)
    }
    wD.d(zD, {
      b: () => pD
    })
  },
  36766: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      e: () => sD
    });
    let pD = () => null;

    function sD(DD) {
      pD = DD
    }

    function KD(DD, zD) {
      return pD(DD, zD)
    }
  },
  40526: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => BD,
      e: () => MD,
      h: () => nD,
      j: () => GD
    });
    var pD = wD(25),
      sD = wD(40529),
      KD = wD(40516),
      rD = wD(40535),
      LD = wD(40522),
      cD = wD(40540),
      gD = wD(40558);

    function RD(DD) {
      var zD, wD;
      const pD = (0, KD.i)();
      return pD ? null === (zD = (0, sD.b)(pD.api, DD[0], DD[1], DD[2])) || void 0 === zD || null === (wD = zD.persisted) || void 0 === wD ? void 0 : wD.shared : void 0
    }

    function AD(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }
    const UD = new Map;
    let fD = null,
      ID = 0;

    function BD() {
      return ID
    }

    function GD(DD) {
      const zD = null !== fD && fD.key === AD(DD.pos) ? fD.type : null;
      if (null === zD) return DD;
      let wD = null;
      if ("Iron" === zD) {
        const {
          cachedPasskey: zD,
          ...pD
        } = hD(DD.pos);
        wD = {
          Or: null !== zD && void 0 !== zD ? zD : [0, 0, 0, 0],
          ...pD
        }
      }
      return {
        ...DD,
        type: zD,
        ironChest: wD
      }
    }

    function hD(DD) {
      const zD = RD(DD),
        wD = null === zD || void 0 === zD ? void 0 : zD.ownerDbId,
        pD = function(DD) {
          var zD;
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RD(DD);
          const pD = AD(DD),
            sD = UD.get(pD);
          return sD ? sD.lastOpened < (null !== (zD = null === wD || void 0 === wD ? void 0 : wD.passkeyLastUpdated) && void 0 !== zD ? zD : 0) ? (UD.delete(pD), null) : [...sD.Or] : null
        }(DD, zD);
      return void 0 === wD ? {
        cachedPasskey: pD
      } : {
        ownerDbId: wD,
        cachedPasskey: pD
      }
    }(0, gD.l)(rD.d, (DD => {
      const zD = (0, cD.e)(rD.d, DD);
      if (!(0, cD.b)(zD) || zD.Sp) return;
      if (ID++, !zD.xp || null === zD.jp) return void(fD = null);
      const wD = AD(zD.jp);
      fD = {
        key: wD,
        type: zD.bp
      }, null !== zD.dp && UD.set(wD, {
        Or: [...zD.dp],
        lastOpened: Date.now()
      })
    })), (0, gD.f)((() => {
      UD.clear(), fD = null, ID++
    })), (0, gD.h)((() => {
      null !== fD && (fD = null, ID++, pD.l.KG("chestToggleFromServer", !1, !0))
    }));
    const nD = {
        boardEditRequested: {
          watch: DD => (0, pD.o)("EditBoard", (zD => {
            let {
              pos: wD
            } = zD;
            if (null === wD) return void DD(null);
            const pD = (0, KD.i)(),
              sD = (0, KD.t)();
            pD && sD && DD(sD.readBoardToEdit(pD.api, pD.chunks, wD))
          }))
        },
        ironChestOpenRequested: {
          watch: DD => (0, pD.o)("OpenIronChest", (zD => {
            let {
              pos: wD
            } = zD;
            DD(function(DD) {
              return {
                pos: DD,
                ...hD(DD)
              }
            }(wD))
          }))
        }
      },
      MD = {
        writeOnBoard(DD) {
          var zD;
          let {
            pos: wD,
            text: pD,
            textSize: sD
          } = DD;
          null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateBoard, (0, LD.$)({
            qr: wD,
            DL: pD,
            zL: sD
          }))
        },
        writeBook(DD) {
          var zD;
          let {
            pages: wD,
            title: pD,
            published: sD
          } = DD;
          null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateBook, (0, LD.ab)({
            Xg: wD,
            Vg: pD,
            Pg: sD
          }))
        },
        writeNameTag(DD) {
          var zD;
          null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateNameTag, DD)
        },
        setCustomLobbyBlock(DD) {
          let {
            pos: zD,
            blockName: wD
          } = DD;
          const pD = (0, KD.t)(),
            sD = (0, KD.i)();
          pD && sD && sD.send(LD.d.SetCustomLobbyBlock, (0, LD.N)({
            fR: pD.blockIdOf(wD),
            UR: zD
          }))
        }
      }
  },
  40573: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      h: () => rD,
      k: () => LD
    });
    var pD = wD(40506),
      sD = wD(4800),
      KD = wD(40516);

    function rD() {
      var DD;
      const zD = null === (DD = (0, KD.i)()) || void 0 === DD ? void 0 : DD.api.localId;
      return void 0 === zD || zD === pD.Tc ? null : String(zD)
    }

    function LD(DD) {
      const zD = (0, KD.i)();
      if (null !== zD) return DD(zD);
      let wD = null;
      const pD = (0, sD.t)((() => {
        const zD = (0, KD.i)();
        null !== zD && null === wD && (pD(), wD = DD(zD))
      }));
      return () => {
        var DD;
        pD(), null === (DD = wD) || void 0 === DD || DD()
      }
    }

    function cD(DD, zD, wD) {
      return {
        current: () => {
          const wD = (0, KD.i)();
          return null === wD ? zD : DD(wD)()
        },
        watch: zD => LD((pD => {
          const sD = DD(pD);
          let KD = sD();
          return zD(KD), wD((() => {
            const DD = sD();
            DD !== KD && (KD = DD, zD(DD))
          }))
        }))
      }
    }
  },
  40564: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD
    });
    var pD = wD(40516),
      sD = wD(40573),
      KD = wD(40578);

    function rD() {
      var DD, zD;
      return null !== (DD = null === (zD = (0, pD.i)()) || void 0 === zD ? void 0 : zD.itemBridgeSources) && void 0 !== DD ? DD : KD.b
    }

    function LD(DD) {
      return {
        current: () => rD().states[DD].current(),
        watch: zD => (0, sD.k)((wD => {
          const pD = wD.itemBridgeSources.states[DD];
          return zD(pD.current()), pD.watch(zD)
        }))
      }
    }

    function cD(DD) {
      return {
        watch: zD => (0, sD.k)((wD => wD.itemBridgeSources.events[DD].watch(zD)))
      }
    }
    const gD = {
      states: {
        inventory: LD("inventory"),
        hotbar: LD("hotbar"),
        crafting: LD("crafting"),
        heldItemAim: LD("heldItemAim")
      },
      events: {
        hotbarSlotRequested: cD("hotbarSlotRequested"),
        hotbarScrolled: cD("hotbarScrolled"),
        numberKeyPressed: cD("numberKeyPressed"),
        inventoryDropRequested: cD("inventoryDropRequested"),
        chestToggled: cD("chestToggled"),
        chestRefreshed: cD("chestRefreshed"),
        inventorySynced: cD("inventorySynced"),
        enchantingTableOpened: cD("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: DD => rD().commands.selectHotbarSlot(DD),
        removeInventoryItem: DD => rD().commands.removeInventoryItem(DD),
        swapInventorySlots: DD => rD().commands.swapInventorySlots(DD),
        moveInventoryItem: DD => rD().commands.moveInventoryItem(DD),
        quickMoveInventoryItem: DD => rD().commands.quickMoveInventoryItem(DD),
        closeChest: DD => rD().commands.closeChest(DD),
        focusCrafting: DD => rD().commands.focusCrafting(DD),
        craftRecipe: DD => rD().commands.craftRecipe(DD),
        salvageItem: DD => rD().commands.salvageItem(DD),
        enchantItem: DD => rD().commands.enchantItem(DD)
      },
      queries: {
        enchantingOffer: DD => rD().queries.enchantingOffer(DD)
      }
    }
  },
  40578: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD
    });
    var pD = wD(39592);

    function sD(DD) {
      return {
        current: () => DD,
        watch: () => () => {}
      }
    }

    function KD() {}
    const rD = Object.freeze([0, 0, 0]),
      LD = {
        states: {
          health: sD({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: sD({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: sD({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: sD({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: sD({}),
          creativeVisibility: sD({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: sD(null),
          heldItemAim: sD({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: sD(!1),
          gliderBoostFuel: sD(0),
          flight: sD({
            canFly: !1,
            flying: !1
          }),
          crafting: sD({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: sD({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: sD({}),
          fullInventory: sD(!1),
          crosshairTarget: sD({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: sD(!0),
          freeCamera: sD({
            allowed: !1,
            movesFly: !1
          }),
          replay: sD(null),
          replayEdits: sD(null),
          replayRecorder: sD({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: sD(!1)
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
          selectHotbarSlot: KD,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: KD,
          setInventoryOpen: KD,
          changeIronChestPasskey: KD,
          dragReplayCamera: KD,
          applyTemporaryThirdPerson: KD,
          holdEmoteWheel: KD,
          recordFlyingMiddleText: KD,
          focusCrafting: KD,
          craftRecipe: () => ({
            UL: 0,
            Pr: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: KD,
          setShopOpen: KD,
          buyShopItem: KD,
          lobbyManage: KD,
          sendChatMessage: KD,
          ignorePlayer: KD,
          reportPlayer: KD,
          reportWorldCodeChat: KD,
          requestDiscordReportKey: KD,
          reportLobbyOrGame: KD,
          playEmote: KD,
          updateMyCosmetic: KD,
          writeOnBoard: KD,
          writeBook: KD,
          writeNameTag: KD,
          setCustomLobbyBlock: KD,
          openIronChest: KD,
          sendCodeCollab: KD,
          clickCodeBlock: KD,
          bindCustomButtonKeys: KD,
          pressCustomButton: KD,
          moveReplayFreecam: KD,
          holdReplayFreecamVertical: KD,
          respawn: KD,
          wakeUp: KD,
          requestLeaderboard: KD,
          completeTask: KD,
          setServerCookie: KD,
          answerUiRequest: KD,
          chooseRewardedAd: KD,
          setCameraZoom: KD,
          setFreeCameraMovesFly: KD,
          setBlockHighlight: KD,
          setCrosshairInteractPrompt: KD,
          setLookSensitivity: KD,
          replayAction: KD,
          setReplayPlaying: KD,
          seekReplay: KD,
          setReplayCameraMode: KD,
          syncReplayCameraMode: KD,
          setReplayCameraKeyframe: KD,
          moveReplayCameraKeyframe: KD,
          deleteReplayCameraKeyframes: KD,
          setReplayPlaybackMark: KD,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: KD,
          exportReplayVideo: KD,
          toggleRecording: KD,
          saveClip: KD,
          setRecorderPrefs: KD,
          setReplayViewerOpen: KD
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => pD.c,
          worldCodeAiGameState: () => pD.d
        },
        lookups: {
          localPos: () => rD,
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
  40512: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => VD,
      f: () => XD,
      i: () => PD,
      k: () => QD,
      l: () => JD
    });
    var pD = wD(39209),
      sD = wD(1232),
      KD = wD(1956),
      rD = wD(1969),
      LD = wD(3288),
      cD = wD(36766),
      gD = wD(1332),
      RD = wD(40516),
      AD = wD(4832),
      UD = wD(2382),
      fD = wD(40522),
      ID = wD(40526),
      BD = wD(40564);
    let GD = null;

    function hD(DD) {
      const zD = new Map,
        wD = wD => {
          if ("string" !== typeof wD) return;
          let pD = zD.get(wD);
          return void 0 === pD && (pD = DD(wD), void 0 !== pD && zD.set(wD, pD)), pD
        };
      return new Proxy({}, {
        get: (DD, zD) => wD(zD),
        has: (DD, zD) => void 0 !== wD(zD)
      })
    }

    function nD(DD) {
      const zD = (0, LD.e)(DD);
      return void 0 !== zD && (0, LD.g)(zD) === DD
    }

    function MD(DD) {
      var zD;
      const wD = null === (zD = (0, RD.i)()) || void 0 === zD ? void 0 : zD.tables;
      if (void 0 === wD || !nD(DD)) return;
      const pD = {
          displayName: wD.getDisplayName(DD)
        },
        sD = wD.getItemStat(DD, "description");
      void 0 !== sD && null !== sD && (pD.description = sD);
      const {
        rootName: KD
      } = wD.getMetaInfo(DD);
      KD !== DD && (pD.rootName = KD);
      const rD = wD.getItemStat(DD, "armourReduction");
      return void 0 !== rD && null !== rD && (pD.armourReduction = rD), pD
    }(0, RD.w)((DD => {
      GD = DD
    }));
    const OD = (0, rD.i)("DisplayName", "Description");

    function JD() {
      return Boolean(KD.e.get("useInventory") && KD.e.get("useFullInventory"))
    }
    let ED = null;
    const QD = {
        inventory: function() {
          const DD = BD.e.states.inventory;
          let zD = null;
          const wD = DD => {
            var wD;
            return null === DD.chest ? DD : ((null === (wD = zD) || void 0 === wD ? void 0 : wD.from) === DD && zD.chestVersion === (0, ID.b)() || (zD = {
              from: DD,
              chestVersion: (0, ID.b)(),
              view: {
                ...DD,
                chest: (0, ID.j)(DD.chest)
              }
            }), zD.view)
          };
          return {
            current: () => wD(DD.current()),
            watch: zD => DD.watch((DD => {
              zD(wD(DD))
            }))
          }
        }(),
        crafting: BD.e.states.crafting,
        stationItems: {
          current() {
            var DD;
            return (null === (DD = ED) || void 0 === DD ? void 0 : DD.namesVersion) !== (0, LD.k)() && (ED = {
              namesVersion: (0, LD.k)(),
              items: {
                enchantable: hD((DD => {
                  const zD = (0, LD.e)(DD);
                  return void 0 !== zD && null !== GD && GD.enchantmentPerksOf(zD).length > 0 || void 0
                })),
                salvageable: hD((DD => !(!nD(DD) || null === (0, cD.c)(DD)) || void 0))
              }
            }), ED.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let DD = null;
          const zD = () => {
            var zD;
            return (null === (zD = DD) || void 0 === zD ? void 0 : zD.namesVersion) !== (0, LD.k)() && (DD = {
              namesVersion: (0, LD.k)(),
              infos: hD(MD)
            }), DD.infos
          };
          return {
            current: zD,
            watch: wD => (0, rD.r)((pD => {
              pD.some(OD) && (DD = null, wD(zD()))
            }))
          }
        }(),
        creativeVisibility: (0, rD.l)((function() {
          const DD = {};
          for (const sD of null !== (zD = null === (wD = GD) || void 0 === wD ? void 0 : wD.creativeItemIds()) && void 0 !== zD ? zD : []) {
            var zD, wD, rD, cD;
            const gD = (0, LD.g)(sD);
            if (void 0 === gD) continue;
            const RD = null !== (rD = KD.e.get((0, pD.i)(gD, "showInCreativeInven"))) && void 0 !== rD ? rD : null === (cD = GD) || void 0 === cD ? void 0 : cD.showInCreativeInvenOf(sD);
            "boolean" === typeof RD && (DD[gD] = RD)
          }
          return {
            publicLobby: (0, sD.J)((0, gD.c)().lobbyName),
            shownInGame: DD
          }
        }), ["connectedGameChanged"], (0, rD.i)("ShowInCreativeInven")),
        fullInventory: (0, rD.l)(JD, [], (0, rD.j)("useInventory", "useFullInventory"))
      },
      XD = {
        inventoryDropRequested: BD.e.events.inventoryDropRequested,
        chestToggled: BD.e.events.chestToggled,
        chestRefreshed: BD.e.events.chestRefreshed,
        inventorySynced: BD.e.events.inventorySynced,
        enchantingTableOpened: BD.e.events.enchantingTableOpened
      },
      VD = {
        removeInventoryItem: BD.e.commands.removeInventoryItem,
        swapInventorySlots: BD.e.commands.swapInventorySlots,
        moveInventoryItem: BD.e.commands.moveInventoryItem,
        quickMoveInventoryItem: BD.e.commands.quickMoveInventoryItem,
        closeChest: BD.e.commands.closeChest,
        setInventoryOpen(DD) {
          (0, AD.j)(UD.s.InventoryOpen, DD ? UD.s.InventoryOpen : 0)
        },
        focusCrafting: BD.e.commands.focusCrafting,
        craftRecipe: BD.e.commands.craftRecipe,
        salvageItem: BD.e.commands.salvageItem,
        enchantItem: BD.e.commands.enchantItem,
        changeIronChestPasskey(DD) {
          var zD;
          let {
            pos: wD,
            Or: pD
          } = DD;
          null === (zD = (0, RD.i)()) || void 0 === zD || zD.send(fD.d.ChangeIronChestPasskey, (0, fD.i)({
            jp: wD,
            Or: pD
          }))
        },
        openIronChest(DD) {
          var zD;
          let {
            pos: wD,
            Or: pD
          } = DD;
          null === (zD = (0, RD.i)()) || void 0 === zD || zD.send(fD.d.OpenIronChest, (0, fD.E)({
            jp: wD,
            Or: pD
          }))
        }
      },
      PD = {
        enchantingOffer: BD.e.queries.enchantingOffer
      }
  },
  40562: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      c: () => RD,
      d: () => rD,
      g: () => sD,
      k: () => LD,
      l: () => gD
    });
    class pD extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function sD(DD) {
      return DD instanceof RangeError && /call stack/i.test(DD.message) || DD instanceof Error && "InternalError" === DD.name && /recursion/i.test(DD.message)
    }
    const KD = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function rD(DD) {
      var zD;
      return DD instanceof WebAssembly.RuntimeError || DD instanceof pD || sD(DD) && KD.test(null !== (zD = DD.stack) && void 0 !== zD ? zD : "")
    }

    function LD(DD, zD) {
      if (rD(DD)) throw DD;
      console.error(zD, DD)
    }

    function cD(DD, zD, wD, sD, KD) {
      if (zD % sD !== 0 || zD + wD > DD.byteLength) throw new pD(`${KD}: ${wD} bytes at ${zD}, ${sD}-aligned, outside ${DD.byteLength} bytes of memory`)
    }

    function gD(DD, zD, wD, pD, sD) {
      return 0 === wD ? null : (cD(zD, wD, pD * DD.BYTES_PER_ELEMENT, DD.BYTES_PER_ELEMENT, sD), new DD(zD, wD, pD))
    }

    function RD(DD, zD, wD, pD, sD) {
      return 0 === zD ? null : (cD(DD, zD, wD, pD, sD), new DataView(DD, zD, wD))
    }
  },
  40516: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      f: () => hD,
      i: () => BD,
      k: () => GD,
      o: () => UD,
      p: () => fD,
      t: () => RD,
      w: () => AD,
      y: () => ID
    });
    class pD extends Error {
      constructor(DD) {
        super(`the join's code did not load: ${DD instanceof Error?DD.message:String(DD)}`, {
          cause: DD
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === DD || void 0 === DD ? void 0 : DD.request
      }
    }
    let sD = null,
      KD = null,
      rD = null;
    const LD = [];
    let cD = null;

    function gD(DD, zD) {
      try {
        DD(zD)
      } catch (wD) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", wD)
      }
    }

    function RD() {
      return cD
    }

    function AD(DD) {
      LD.push(DD), null !== cD && gD(DD, cD)
    }

    function UD(DD) {
      return sD ??= Promise.all([wD.e(72), wD.e(96), wD.e(221), wD.e(77), wD.e(222), wD.e(198), wD.e(95), wD.e(240), wD.e(269), wD.e(197), wD.e(210), wD.e(189), wD.e(196), wD.e(191), wD.e(142), wD.e(87), wD.e(121), wD.e(247), wD.e(56)]).then((() => wD(42447))).then((zD => {
        zD.loadAudio(DD), cD = zD;
        for (const DD of LD) gD(DD, zD);
        return zD
      })).catch((DD => {
        throw sD = null, DD
      })), sD
    }
    async function fD(DD, zD) {
      try {
        const wD = await UD(DD);
        await wD.loadClientGame(zD)
      } catch (wD) {
        throw new pD(wD)
      }
    }

    function ID(DD, zD) {
      KD = {
        running: DD,
        shell: zD
      }
    }

    function BD() {
      return rD
    }
    async function GD(DD) {
      const zD = KD;
      if ((null === zD || void 0 === zD ? void 0 : zD.running) !== DD) throw new Error("the core's session has ended");
      const wD = await UD(zD.shell.audio).catch((DD => {
        throw new pD(DD)
      }));
      if (null !== rD) return rD;
      if (KD !== zD || DD.isStopped) throw new Error("the core stopped while the game code loaded");
      if (rD = wD.startGameHost(DD, zD.shell), null === rD) throw new Error("the core's shared tables didn't read, so the game can't start");
      return rD
    }

    function hD() {
      null !== rD && (null !== cD ? cD.endGameHost(rD) : rD.closeGame()), rD = null, KD = null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);